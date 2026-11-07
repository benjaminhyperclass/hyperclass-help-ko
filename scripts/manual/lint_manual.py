#!/usr/bin/env python3
"""매뉴얼(docs/) 검수기 — 브랜드 노출·비권장 용어·원문 링크 잔존·영어 과다·머리말·이미지 수.

사용: python3 scripts/manual/lint_manual.py [파일 또는 폴더 ...] [--json out.json] [--src-images map.json]
  --src-images: {파일경로: 원문 이미지 수} — 주면 이미지 개수를 대조한다.
"""
import glob, json, os, re, sys
R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
gl = json.load(open(f"{R}/data/glossary.ko.json", encoding="utf-8"))
SKIP_VARIANTS = {"리포트", "잠재 고객", "잠재고객", "매장", "정기 결제", "청구서", "오더", "고객", "통합", "제품", "보고서", "과정", "거래", "양식", "서식", "강좌", "약속", "지불", "레슨", "제휴"}
VARS = []
for it in gl["objects"] + gl["buttons"]:
    if not it.get("decided", True): continue
    for v in it.get("variants", []):
        if len(v) >= 2 and v not in SKIP_VARIANTS:
            VARS.append((v, it["ko"]))
OWN_SOFT = {"홈페이지", "상점", "정기 결제", "청구서", "잠재고객", "잠재 고객"}  # 직접 쓴 문서·토스 화면 용어
BRAND = re.compile(r"GoHighLevel|HighLevel|High Level|LeadConnector|Lead Connector|\bGHL\b")
CODE = re.compile(r"```.*?```|`[^`\n]*`", re.S)
URL = re.compile(r"\(\s*https?://[^)\s]+\)|https?://\S+")

def check(path, src_images=None):
    t = open(path, encoding="utf-8", errors="ignore").read()
    issues = []
    prose = URL.sub(" ", CODE.sub(" ", t))
    prose = re.sub(r"^---.*?\n---\n", "", prose, count=1, flags=re.S)       # 머리말
    prose = re.sub(r"\]\([^)]*\)", "]", prose)                              # 링크 대상 경로
    for m in BRAND.finditer(prose):
        issues.append(("brand", m.group(0)))
    own = "/00-자주묻는질문/" in path or "/43-한국-앱/" in path
    for v, ko in VARS:
        if own and v in OWN_SOFT: continue
        p2 = prose.replace(ko, "")
        n = p2.count(v)
        if n: issues.append(("term", f"{v}→{ko} ×{n}"))
    for ko_b, en_b in (("왓츠앱", "WhatsApp"), ("페이스북", "Facebook"), ("스트라이프", "Stripe"), ("구글", "Google")):
        if not own and ko_b in prose: issues.append(("term", f"{ko_b}→{en_b} ×{prose.count(ko_b)}"))
    body = re.sub(r"^---.*?\n---", "", t, count=1, flags=re.S)
    if "help.gohighlevel.com" in body: issues.append(("ghl-link", body.count("help.gohighlevel.com")))
    if not t.lstrip().startswith("---") and "/00-자주묻는질문/" not in path and "/43-한국-앱/" not in path:
        issues.append(("frontmatter", "없음"))
    if not re.search(r"^# \S", t, re.M): issues.append(("title", "없음"))
    letters = len(re.findall(r"[A-Za-z]", prose)); ko = len(re.findall(r"[가-힣]", prose))
    if letters > 1.5 * ko + 300: issues.append(("english", f"en {letters} / ko {ko}"))
    # 상대 링크가 실제 문서를 가리키는지 (docs/ 안에서 검사할 때만)
    if CHECK_LINKS:
        for m in re.finditer(r"\]\(([^)#\s]+\.md)(?:#[^)]*)?\)", t):
            tgt = m.group(1)
            if tgt.startswith("http"): continue
            full = os.path.normpath(os.path.join(os.path.dirname(path), tgt))
            if not os.path.exists(full): issues.append(("link", tgt[-60:]))
    if src_images is not None:
        n = len(re.findall(r"!\[[^\]]*\]\(", t))
        if n < src_images: issues.append(("images", f"{n}/{src_images}"))
    return issues

CHECK_LINKS = "--links" in sys.argv

def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    out = sys.argv[sys.argv.index("--json") + 1] if "--json" in sys.argv else None
    srcimg = json.load(open(sys.argv[sys.argv.index("--src-images") + 1])) if "--src-images" in sys.argv else {}
    if out in args: args.remove(out)
    if "--src-images" in sys.argv: args.remove(sys.argv[sys.argv.index("--src-images") + 1])
    files = []
    for a in args or [f"{R}/docs"]:
        files += glob.glob(f"{a}/**/*.md", recursive=True) if os.path.isdir(a) else [a]
    res, kinds = {}, {}
    for f in sorted(files):
        rel = os.path.relpath(f, R)
        iss = check(f, srcimg.get(rel))
        if iss:
            res[rel] = iss
            for k, _ in iss: kinds[k] = kinds.get(k, 0) + 1
    print(f"files {len(files)} · with issues {len(res)} · " + " ".join(f"{k}:{v}" for k, v in sorted(kinds.items())))
    if out: json.dump(res, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    return res

if __name__ == "__main__":
    main()
