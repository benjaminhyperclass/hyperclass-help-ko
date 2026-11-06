#!/usr/bin/env python3
"""번역 결과 폴더에서 '정상 완료 + 검수 통과' 문서만 docs/ 로 옮긴다.

사용: python3 scripts/manual/publish_results.py <결과 폴더> <lint json> [--report out.json]
- 정상 완료: _results/*.jsonl 의 status == "ok" (중간에 잘린 출력 제외)
- 막는 검수 항목: brand(브랜드 노출) · ghl-link(원문 링크 잔존) · frontmatter · title · images(이미지 누락) · english(영어 과다)
- 용어(term) 지적은 막지 않고 보고만 한다.
"""
import glob, json, os, shutil, sys
R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BLOCK = {"brand", "ghl-link", "frontmatter", "title", "images", "english"}

def main():
    out, lint_path = sys.argv[1], sys.argv[2]
    report = sys.argv[sys.argv.index("--report") + 1] if "--report" in sys.argv else None
    ok_ids = set()
    for f in glob.glob(os.path.join(out, "_results", "*.jsonl")):
        for line in open(f, encoding="utf-8"):
            r = json.loads(line)
            if r.get("status") == "ok": ok_ids.add(r["id"])
    lint = json.load(open(lint_path, encoding="utf-8"))
    blocked_by_lint = {}
    for k, iss in lint.items():
        kinds = {i[0] for i in iss} & BLOCK
        if kinds:
            rel = "docs/" + k.split("/docs/", 1)[-1] if "/docs/" in k else k
            blocked_by_lint[rel] = sorted(kinds)
    written, blocked = [], {}
    for p in glob.glob(os.path.join(out, "docs", "**", "*.md"), recursive=True):
        rel = "docs/" + os.path.relpath(p, os.path.join(out, "docs"))
        if rel in blocked_by_lint:
            blocked[rel] = blocked_by_lint[rel]; continue
        dst = os.path.join(R, rel)
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        shutil.copyfile(p, dst)
        written.append(rel)
    # 잘린 출력은 결과 파일이 있어도 status 로 걸러야 한다 — id 와 경로를 잇기 위해 작업 기록을 쓴다
    trunc = []
    for f in glob.glob(os.path.join(out, "_results", "*.jsonl")):
        for line in open(f, encoding="utf-8"):
            r = json.loads(line)
            if r.get("status", "").startswith("stop:") and r.get("out_path"):
                trunc.append(r["out_path"])
    print(f"written {len(written)} · blocked {len(blocked)} · truncated {len(trunc)}")
    if report:
        json.dump({"written": written, "blocked": blocked, "truncated": trunc}, open(report, "w"), ensure_ascii=False, indent=1)

if __name__ == "__main__":
    main()
