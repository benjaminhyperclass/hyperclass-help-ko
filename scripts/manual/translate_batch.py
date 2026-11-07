#!/usr/bin/env python3
"""매뉴얼 v2 번역·다듬기 배치 실행기 (GitHub Actions 에서 실행).

입력 JSONL 한 줄 = 작업 하나:
  {"id", "out_path", "mode": "translate"|"polish", "url", "category", "title_en",
   "source_md", "existing_ko", "labels": [[en, ko], ...], "links": [[url, path], ...]}
출력: OUT/<out_path> 에 완성 마크다운, OUT/_results/<shard>.jsonl 에 결과 기록.
"""
import json, os, re, sys, time, threading
from concurrent.futures import ThreadPoolExecutor
from datetime import date
from anthropic import Anthropic

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(HERE))
MODELS = os.environ.get("MANUAL_MODELS", "claude-sonnet-5-5,claude-sonnet-5").split(",")
WORKERS = int(os.environ.get("WORKERS", "5"))
MAX_TOKENS = 32000

def glossary_text():
    g = json.load(open(os.path.join(REPO, "data/glossary.ko.json"), encoding="utf-8"))
    rows = []
    for it in g.get("objects", []) + g.get("buttons", []):
        if it.get("decided", True):
            v = ", ".join(it.get("variants", []))
            extra = " — CRM 메모 기능을 말할 때만. 'Note:' 같은 안내 머리말은 힌트 블록(참고)" if it["en"] == "Note" else ""
            rows.append(f"- {it['en']} → {it['ko']}" + (f" (쓰지 말 것: {v})" if v else "") + extra)
    return "\n".join(rows)

def core_text():
    d = json.load(open(os.path.join(REPO, "data/manual/screen-labels.json"), encoding="utf-8")).get("core", {})
    return "\n".join(f"- {en} → {ko}" for en, ko in sorted(d.items()))

SYSTEM = (open(os.path.join(HERE, "prompt_manual_v2.md"), encoding="utf-8").read()
          .replace("{GLOSSARY}", glossary_text()).replace("{CORE}", core_text()))
client = Anthropic()
lock = threading.Lock()
model_ok = {"name": None}

def user_prompt(job):
    labels = "\n".join(f"- {en} → {ko}" for en, ko in job.get("labels", [])) or "(해당 없음)"
    links = "\n".join(f"- {u} → {p}" for u, p in job.get("links", [])) or "(해당 없음)"
    wf = ("※ 워크플로우 빌더 문서입니다(빌더 화면은 영어). 규칙 1-1을 따르세요.\n" if job.get("workflow_builder") else "")
    head = wf + (f"원문 URL: {job.get('url','')}\n오늘 날짜: {date.today().isoformat()}\n카테고리: {job.get('category','')}\n\n"
            f"## 화면 이름표 (이 문서에 나오는 영어 화면 문구 → 실제 한국어 화면)\n{labels}\n\n"
            f"## 문서 링크표 (원문 링크 → 우리 매뉴얼 경로, 상대 경로로 쓰세요)\n{links}\n\n")
    if job["mode"] == "translate":
        ref = job.get("existing_ko") or ""
        body = f"## 영어 원문\n제목: {job.get('title_en','')}\n\n{job['source_md']}\n"
        if ref:
            body += ("\n## 참고: 기존 한국어 번역 (어색한 표현·틀린 화면 이름이 있을 수 있음. 내용 확인용으로만 보고, "
                     "새로 자연스럽게 쓰세요)\n" + ref[:12000] + "\n")
        return head + body + "\n위 규칙대로 한국어 도움말을 완성해 주세요."
    return (head + "## 다듬을 한국어 문서\n" + job["existing_ko"] +
            "\n\n이 문서는 영어 원문을 찾을 수 없어 기존 한국어만 있습니다. 내용과 이미지·링크·구조는 그대로 두고, "
            "화면 이름을 이름표·용어집대로 맞추고, 번역투를 자연스러운 해요체로 고치고, 화이트라벨 규칙을 적용해 "
            "같은 형식(맨 위 --- 머리말 포함)으로 다시 써 주세요. 머리말의 기존 값은 유지하세요.")

def call(job):
    last = None
    models = list(MODELS)
    attempt = 0
    while attempt < 8 and models:
        m = model_ok["name"] or models[0]
        try:
            with client.messages.stream(
                    model=m, max_tokens=MAX_TOKENS,
                    system=[{"type": "text", "text": SYSTEM, "cache_control": {"type": "ephemeral"}}],
                    messages=[{"role": "user", "content": user_prompt(job)}]) as st:
                r = st.get_final_message()
            model_ok["name"] = m
            return r, m
        except Exception as e:
            last = e
            if getattr(e, "status_code", None) == 404 or "not_found_error" in str(e):
                if m in models: models.remove(m)   # 이 키로 못 쓰는 모델 → 다음 후보
                continue
            attempt += 1
            time.sleep(min(120, 10 * attempt))
    raise last

def clean(text):
    t = text.strip()
    t = re.sub(r"^```(?:markdown|md)?\s*\n", "", t)
    t = re.sub(r"\n```\s*$", "", t)
    return t.strip() + "\n"

SPLIT_AT = 30000  # 원문이 이보다 길면 ## 단위로 나눠 옮긴 뒤 잇는다

def split_parts(md):
    secs = re.split(r"(?m)^(?=## )", md)
    parts, cur = [], ""
    for sec in secs:
        if cur and len(cur) + len(sec) > SPLIT_AT:
            parts.append(cur); cur = ""
        cur += sec
    if cur: parts.append(cur)
    return parts

def run_split(job):
    parts = split_parts(job["source_md"])
    texts, usage, model = [], {"in": 0, "out": 0}, None
    for k, part in enumerate(parts):
        j = dict(job, source_md=part, existing_ko="")
        if k > 0:
            j["title_en"] = job.get("title_en", "") + f" (part {k + 1}/{len(parts)})"
        r, model = call(j)
        t = clean("".join(b.text for b in r.content if getattr(b, "type", "") == "text"))
        if r.stop_reason != "end_turn":
            raise RuntimeError(f"part {k + 1} stop:{r.stop_reason}")
        if k > 0:   # 이어지는 부분은 머리말·제목을 떼고 본문만
            t = re.sub(r"^---.*?\n---\n", "", t, count=1, flags=re.S).lstrip()
            t = re.sub(r"^# .*\n+", "", t, count=1)
        texts.append(t.strip())
        usage["in"] += r.usage.input_tokens; usage["out"] += r.usage.output_tokens
    return "\n\n".join(texts) + "\n", model, usage

def run(job, out_dir, res_fh):
    t0 = time.time()
    try:
        if job["mode"] == "translate" and len(job.get("source_md", "")) > SPLIT_AT:
            text, m, u = run_split(job)
            p = os.path.join(out_dir, job["out_path"])
            os.makedirs(os.path.dirname(p), exist_ok=True)
            open(p, "w", encoding="utf-8").write(text)
            rec = {"id": job["id"], "out_path": job["out_path"], "status": "ok", "model": m, "in": u["in"],
                   "out": u["out"], "split": True, "sec": round(time.time() - t0, 1)}
            with lock:
                res_fh.write(json.dumps(rec, ensure_ascii=False) + "\n"); res_fh.flush()
            return rec
        r, m = call(job)
        text = clean("".join(b.text for b in r.content if getattr(b, "type", "") == "text"))
        status = "ok" if r.stop_reason == "end_turn" else f"stop:{r.stop_reason}"
        p = os.path.join(out_dir, job["out_path"] if status == "ok" else os.path.join("_failed", job["out_path"]))
        os.makedirs(os.path.dirname(p), exist_ok=True)
        open(p, "w", encoding="utf-8").write(text)
        rec = {"id": job["id"], "out_path": job["out_path"], "status": status, "model": m, "in": r.usage.input_tokens,
               "out": r.usage.output_tokens, "cache_read": getattr(r.usage, "cache_read_input_tokens", 0),
               "sec": round(time.time() - t0, 1)}
    except Exception as e:
        rec = {"id": job["id"], "out_path": job["out_path"], "status": "error", "error": str(e)[:300]}
    with lock:
        res_fh.write(json.dumps(rec, ensure_ascii=False) + "\n"); res_fh.flush()
    return rec

def main():
    jobs_path, out_dir = sys.argv[1], sys.argv[2]
    os.makedirs(os.path.join(out_dir, "_results"), exist_ok=True)
    jobs = [json.loads(l) for l in open(jobs_path, encoding="utf-8") if l.strip()]
    shard = os.path.splitext(os.path.basename(jobs_path))[0]
    with open(os.path.join(out_dir, "_results", shard + ".jsonl"), "w", encoding="utf-8") as fh:
        with ThreadPoolExecutor(WORKERS) as ex:
            recs = list(ex.map(lambda j: run(j, out_dir, fh), jobs))
    ok = sum(r["status"] == "ok" for r in recs)
    print(f"{shard}: {ok}/{len(recs)} ok, out tokens {sum(r.get('out', 0) for r in recs)}")

if __name__ == "__main__":
    main()
