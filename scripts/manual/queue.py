#!/usr/bin/env python3
"""매뉴얼 번역 대기열 (플랜 내 월간 세션용 — API 키 없이 Claude 가 직접 번역한다).

  build <jobs.jsonl> <YYYY-MM>   월간 Action 이 새 작업을 대기열에 더한다(이전 달 미처리분은 유지).
  next <N> [--out DIR]           처리할 다음 N건을 우선순위대로 꺼내 DIR/<i>.json 으로 풀어 둔다(원문·이름표·링크표 포함).
  done <id> [<id> ...]           번역·반영을 마친 항목 표시 + data/manual/src-state.json 에 원문 해시 기록.
  status                         남은 건수·카테고리별 현황.

우선순위: 신규 고객이 먼저 보는 카테고리(시작하기·연락처·대화·캘린더·결제·사이트·자동화) → 바뀐 글 → 새 글 → 나머지.
작업 파일 본문은 manual-jobs 브랜치 queue/<YYYY-MM>/shard-0.jsonl 에 있다(대기열에는 위치만 적는다).
"""
import json, os, subprocess, sys

R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
Q = os.path.join(R, "data/manual/queue.json")
STATE = os.path.join(R, "data/manual/src-state.json")
CORE = ["01-시작하기", "02-연락처", "03-대화", "04-캘린더-예약", "08-결제", "06-사이트", "07-워크플로우",
        "05-기회-파이프라인", "09-이메일", "10-마케팅", "17-멤버십-커뮤니티", "13-AI-Employee"]

def load():
    return json.load(open(Q, encoding="utf-8")) if os.path.exists(Q) else {"items": []}

def save(q):
    os.makedirs(os.path.dirname(Q), exist_ok=True)
    json.dump(q, open(Q, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

def prio(it):
    cat = it["out_path"].split("/")[1] if it["out_path"].count("/") > 1 else ""
    return (CORE.index(cat) if cat in CORE else len(CORE), 0 if not it.get("new") else 1, it["month"], it["out_path"])

def build(jobs_path, month):
    import hashlib
    q = load(); have = {it["id"]: it for it in q["items"]}
    n = 0
    for line in open(jobs_path, encoding="utf-8"):
        if not line.strip(): continue
        j = json.loads(line)
        h = hashlib.sha1(j["source_md"].encode()).hexdigest()[:16]
        it = {"id": j["id"], "out_path": j["out_path"], "title_en": j.get("title_en", ""), "new": bool(j.get("new")),
              "hash": h, "month": month, "file": f"queue/{month}/shard-0.jsonl", "done": False}
        if j["id"] in have and have[j["id"]].get("hash") == h and have[j["id"]].get("done"):
            continue
        have[j["id"]] = it; n += 1
    q["items"] = sorted(have.values(), key=prio)
    save(q); print(f"queued +{n}, pending {sum(1 for x in q['items'] if not x['done'])}")

def fetch_jobs(files):
    """manual-jobs 브랜치에서 필요한 작업 파일만 가져온다."""
    base = os.path.join(R, ".cache/manual-jobs")
    if not os.path.exists(os.path.join(base, ".git")):
        subprocess.run(["git", "clone", "-q", "--depth", "1", "-b", "manual-jobs",
                        "https://github.com/benjaminhyperclass/hyperclass-help-ko", base], check=True)
    else:
        subprocess.run(["git", "-C", base, "pull", "-q", "--depth", "1"], check=False)
    jobs = {}
    for f in files:
        for line in open(os.path.join(base, f), encoding="utf-8"):
            if line.strip():
                j = json.loads(line); jobs[j["id"]] = j
    return jobs

def next_n(n, out):
    q = load(); todo = [it for it in q["items"] if not it["done"]][:n]
    jobs = fetch_jobs(sorted({it["file"] for it in todo}))
    os.makedirs(out, exist_ok=True)
    for k, it in enumerate(todo):
        json.dump(jobs[it["id"]], open(os.path.join(out, f"{k:03d}.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"{len(todo)} jobs → {out}")

def done(ids):
    q = load(); st = json.load(open(STATE)) if os.path.exists(STATE) else {}
    ids = set(ids); n = 0
    for it in q["items"]:
        if it["id"] in ids:
            it["done"] = True; st[it["id"]] = it["hash"]; n += 1
    save(q); json.dump(st, open(STATE, "w"), indent=0, sort_keys=True)
    print(f"done {n}, pending {sum(1 for x in q['items'] if not x['done'])}")

def status():
    import collections
    q = load(); c = collections.Counter(it["out_path"].split("/")[1] for it in q["items"] if not it["done"])
    print("pending", sum(c.values())); [print(f"  {k}: {v}") for k, v in c.most_common()]

if __name__ == "__main__":
    cmd = sys.argv[1]
    if cmd == "build": build(sys.argv[2], sys.argv[3])
    elif cmd == "next":
        out = sys.argv[sys.argv.index("--out") + 1] if "--out" in sys.argv else "/tmp/manual-queue"
        next_n(int(sys.argv[2]), out)
    elif cmd == "done": done(sys.argv[2:])
    elif cmd == "status": status()
