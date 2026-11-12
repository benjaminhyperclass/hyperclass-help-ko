#!/usr/bin/env python3
"""GitBook SUMMARY.md 생성 (매뉴얼 v3 — 업무 흐름별 목차, 2026-11-12).

data/manual/toc.json 의 구성표대로
  · SUMMARY.md 를 만든다: '## 섹션' → 묶음 페이지(docs/_groups/<섹션>/<묶음>.md) → 그 아래 문서
  · 묶음 페이지를 새로 쓴다(소개 + 문서 목록, 매번 다시 만든다 — 직접 고치지 말 것)
파일은 옮기지 않는다. 그래서 번역 파이프라인(out_path)·문서 간 링크·영상 연결표는 그대로 동작한다.

배정 순서: 숨김(hide) → 파일 지정(files) → 폴더(dirs, 가장 긴 접두어) → 키워드 라우터 → 섹션 기본 묶음.
키워드 라우터는 섹션 폴더 바로 아래 문서와 '기타' 폴더 문서에만 쓴다. 같은 섹션 안 묶음을 먼저 찾고, 없으면 다른 섹션으로 옮긴다.
44-신기능-2026 은 모든 섹션으로 나눈다(남는 것은 '참고 › 신기능 소식').

  python3 scripts/manual/gen_summary.py            # SUMMARY.md + 묶음 페이지 생성
  python3 scripts/manual/gen_summary.py --report   # 묶음별 문서 수 · 기본 묶음으로 떨어진 문서 목록
"""
import glob, json, os, re, sys

R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DOCS = os.path.join(R, "docs")
GROUPS_DIR = os.path.join(DOCS, "_groups")
CFG = json.load(open(os.path.join(R, "data/manual/toc.json"), encoding="utf-8"))
SPREAD = "44-신기능-2026"   # 기능별 섹션으로 나눠 넣는 폴더

ORDER_43 = ["README.md", "tosspayments-getting-started.md", "part0-website-check.md", "part1-preparation.md",
            "part2-application.md", "part3-app-connection.md", "part4-products-test.md", "part5-payment-path-docs.md",
            "part6-review-response.md", "tosspayments-installation.md", "faq-popup-blocker.md", "faq-cancel-refund.md",
            "appendix.md", "kaka/README.md"]

_titles = {}
def title(p):
    if p not in _titles:
        t = None
        for line in open(p, encoding="utf-8", errors="ignore"):
            if line.startswith("# "):
                t = line[2:].strip(); break
        _titles[p] = (t or os.path.splitext(os.path.basename(p))[0]).replace("[", "(").replace("]", ")")
    return _titles[p]

def rel(p):            # docs/ 기준 경로
    return os.path.relpath(p, DOCS)

def link(p, frm=R):
    return os.path.relpath(p, frm).replace(" ", "%20")

FIRST = re.compile(r"시작하기|개요|소개|이란\??$|란\?|알아보기|Getting Started|Overview|가이드$|기본")
LAST = re.compile(r"문제 해결|오류|안 될 때|않을 때|않아요|않나요|안 돼|트러블|Troubleshoot|자주 묻는|FAQ|FAQs")
def order_key(p):
    t = title(p)
    return (0 if FIRST.search(t) else 2 if LAST.search(t) else 1, t)

def all_docs():
    out = []
    for p in glob.glob(f"{DOCS}/**/*.md", recursive=True):
        r = rel(p)
        if r.startswith("_groups/") or "/assets/" in r or os.path.getsize(p) == 0:
            continue
        out.append(p)
    return sorted(out)

def build():
    hide = CFG["hide"]
    hide_re = re.compile(hide["title_re"], re.I)
    sections = CFG["sections"]
    gindex = {}                      # (section, group) -> group cfg
    dir_rules = []                   # (prefix, section, group)
    file_rules = {}
    for s in sections:
        for g in s.get("groups", []):
            gindex[(s["slug"], g["slug"])] = g
            for d in g.get("dirs", []):
                dir_rules.append((d.rstrip("/") + "/", s["slug"], g["slug"]))
            for f in g.get("files", []):
                file_rules[f] = (s["slug"], g["slug"])
    dir_rules.sort(key=lambda x: -len(x[0]))
    router = [(re.compile(e[0], re.I), e[1], e[2], len(e) > 3 and e[3] == "local") for e in CFG["router"]]
    route_roots = set(CFG["route_dirs"])
    misc = set(CFG["route_only_loose_and"])

    assign, hidden, fallback = {}, [], []
    korea = []
    for p in all_docs():
        r = rel(p)
        if r.startswith("43-한국-앱/"):
            korea.append(p); continue
        if r in hide["files"] or any(r.startswith(d.rstrip("/") + "/") for d in hide["dirs"]):
            hidden.append(p); continue
        if not r.startswith("00-") and r not in hide.get("keep", []) and hide_re.search(title(p)):
            hidden.append(p); continue
        if r in file_rules:
            assign[p] = file_rules[r]; continue
        parts = r.split("/")
        home = next(((s, g) for pre, s, g in dir_rules if r.startswith(pre)), None)
        routable = parts[0] in route_roots and (len(parts) == 2 or (len(parts) >= 3 and parts[1] in misc))
        if parts[0] == SPREAD:
            routable = True
        target = None
        if routable:
            t = title(p)
            # 1차: 같은 섹션 안 묶음으로. 2차: 다른 섹션이 더 맞으면 그쪽으로(폴더를 잘못 탄 문서 바로잡기).
            passes = [True, False] if parts[0] != SPREAD and home else [False]
            for same in passes:
                for rx, s, g, local in router:
                    if same and s != home[0]:
                        continue
                    if local and (parts[0] == SPREAD or not same):
                        continue
                    if rx.search(t):
                        target = (s, g); break
                if target:
                    break
        if not target:
            if home:
                target = home
            else:
                sec = next(s for s in sections if s["slug"] == "resources")
                target = ("resources", sec["default"])
            if routable:
                fallback.append((p, target))
        assign[p] = target
    return assign, hidden, fallback, korea

LINK = re.compile(r"(?<!!)\[([^\]]*)\]\(([^)\s]+\.md)(#[^)]*)?\)")
def unlink_hidden(hidden):
    """목차에서 뺀(숨긴) 문서로 가는 링크를 공개 문서에서 정리한다 — 목록 한 줄짜리는 줄째 빼고, 문장 속 링크는 글자만 남긴다."""
    import urllib.parse
    hid = {rel(p) for p in hidden}
    changed = 0
    for p in all_docs():
        r = rel(p)
        if r in hid:
            continue
        text = open(p, encoding="utf-8").read()
        def tgt(m):
            return os.path.normpath(os.path.join(os.path.dirname(r), urllib.parse.unquote(m.group(2))))
        out = []
        for line in text.split("\n"):
            ms = [m for m in LINK.finditer(line) if tgt(m) in hid]
            if not ms:
                out.append(line); continue
            only = re.match(r"^\s*([-*+]|\d+\.)\s+", line) and len(LINK.findall(line)) == 1 and \
                len(re.sub(r"[\s*_\-—:·→()]", "", LINK.sub("", line[re.match(r"^\s*([-*+]|\d+\.)\s+", line).end():]))) < 40
            if only:
                continue
            out.append(LINK.sub(lambda m: m.group(1) if tgt(m) in hid else m.group(0), line))
        new = "\n".join(out)
        new = re.sub(r"\n#{2,3} (관련 문서|관련 글|함께 보면 좋은 문서|함께 보기)\s*\n(\s*\n)*(?=#{1,3} |\Z)", "\n", new)
        if new != text:
            open(p, "w", encoding="utf-8").write(new); changed += 1
    return changed

def write_group_page(sec, g, pages):
    d = os.path.join(GROUPS_DIR, sec["slug"]); os.makedirs(d, exist_ok=True)
    p = os.path.join(d, g["slug"] + ".md")
    intro = g.get("intro") or f"{g['title']} 관련 문서를 모았어요."
    lines = ["---", f"description: {intro}", "---", "", f"# {g['title']}", "", intro, ""]
    lines += [f"* [{title(x)}]({link(x, d)})" for x in pages]
    lines.append("")
    open(p, "w", encoding="utf-8").write("\n".join(lines))
    return p

def korea_lines(files):
    base = os.path.join(DOCS, "43-한국-앱")
    top = sorted([f for f in files if os.path.dirname(f) == base],
                 key=lambda f: (ORDER_43.index(os.path.basename(f)) if os.path.basename(f) in ORDER_43 else 99, title(f)))
    out = [f"* [{title(f)}]({link(f)})" for f in top]
    kd = os.path.join(base, "kaka")
    kreadme = os.path.join(kd, "README.md")
    if os.path.exists(kreadme):
        out.append(f"* [{title(kreadme)}]({link(kreadme)})")
        for f in sorted(x for x in files if os.path.dirname(x) == kd and not x.endswith("README.md")):
            out.append(f"  * [{title(f)}]({link(f)})")
    return out

def main():
    assign, hidden, fallback, korea = build()
    if os.path.isdir(GROUPS_DIR):
        for f in glob.glob(f"{GROUPS_DIR}/**/*.md", recursive=True):
            os.remove(f)
    out = ["# 하이퍼클래스 도움말", "", f"* [하이퍼클래스 도움말 홈](README.md)", ""]
    counts, total = [], 0
    for s in CFG["sections"]:
        if s.get("special") == "korea":
            lines = korea_lines(korea)
            out += [f"## {s['title']}", ""] + lines + [""]
            total += len(korea); counts.append((s["title"], "-", len(korea))); continue
        body = []
        for g in s["groups"]:
            pages = sorted([p for p, t in assign.items() if t == (s["slug"], g["slug"])], key=order_key)
            if not pages:
                continue
            gp = write_group_page(s, g, pages)
            body.append(f"* [{g['title']}]({link(gp)})")
            body += [f"  * [{title(p)}]({link(p)})" for p in pages]
            counts.append((s["title"], g["title"], len(pages))); total += len(pages)
        if body:
            out += [f"## {s['title']}", ""] + body + [""]
    open(os.path.join(R, "SUMMARY.md"), "w", encoding="utf-8").write("\n".join(out))
    n_unlinked = unlink_hidden(hidden)
    json.dump(sorted(rel(p) for p in hidden), open(os.path.join(R, "data/manual/toc-hidden.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=0)
    print(f"pages {total} · hidden {len(hidden)} · fallback {len(fallback)} · 숨긴 문서 링크 정리 {n_unlinked}개 문서")
    if "--report" in sys.argv:
        for c in counts: print(f"  {c[2]:4d}  {c[0]} › {c[1]}")
        print("\n기본 묶음으로 떨어진 문서:")
        for p, t in fallback: print(f"  {t[0]}/{t[1]}  {rel(p)}  | {title(p)}")

if __name__ == "__main__":
    main()
