#!/usr/bin/env python3
"""build_jobs.py 가 만든 계획을 docs/ 에 적용한다.

  structure : 중복 삭제 · 이동/이름 정리(git mv) · .gitbook.yaml 리다이렉트
  content <결과 폴더...> : 번역·다듬기 결과를 docs/ 에 덮어쓰기(검수 통과분만)
  links     : 문서 사이의 상대 링크가 깨졌으면 이동표로 고친다
"""
import glob, json, os, re, subprocess, sys
HERE = os.path.dirname(os.path.abspath(__file__))
R = os.path.dirname(os.path.dirname(HERE))
PLAN = json.load(open(f"{R}/manual-refresh/plan.json", encoding="utf-8"))

def git(*a):
    subprocess.run(["git", "-C", R, *a], check=True, capture_output=True)

def page_url(path):
    p = path[:-3] if path.endswith(".md") else path
    return p[: -len("/README")] if p.endswith("/README") else p

def structure():
    dups, ren = PLAN["duplicates_removed"], PLAN["renames"]
    for d in dups:
        if os.path.exists(f"{R}/{d}"): git("rm", "-q", d)
    for old, new in ren.items():
        if not os.path.exists(f"{R}/{old}"): continue
        os.makedirs(os.path.dirname(f"{R}/{new}"), exist_ok=True)
        if os.path.exists(f"{R}/{new}") and old.lower() != new.lower():
            git("rm", "-q", old)  # 같은 이름이 이미 있으면 남아 있는 쪽을 쓴다
            continue
        git("mv", old, new)
    redirects = {}
    for d, canon in dups.items():
        redirects[page_url(d)] = ren.get(canon, canon)
    for old, new in ren.items():
        redirects[page_url(old)] = new
    y = open(f"{R}/.gitbook.yaml", encoding="utf-8").read()
    y = re.sub(r"\nredirects:\n(?:  .*\n?)*", "\n", y).rstrip() + "\n\nredirects:\n"
    for k, v in sorted(redirects.items()):
        y += f"  {json.dumps(k, ensure_ascii=False)}: {json.dumps(v, ensure_ascii=False)}\n"
    open(f"{R}/.gitbook.yaml", "w", encoding="utf-8").write(y)
    print("removed", len(dups), "renamed", len(ren), "redirects", len(redirects))

BRAND = re.compile(r"GoHighLevel|HighLevel|LeadConnector|\bGHL\b")

def content(result_dirs, accept=None):
    accept = set(accept or [])
    n = 0
    for rd in result_dirs:
        for p in glob.glob(f"{rd}/docs/**/*.md", recursive=True):
            rel = "docs/" + os.path.relpath(p, f"{rd}/docs")
            if accept and rel not in accept: continue
            t = open(p, encoding="utf-8").read()
            dst = f"{R}/{rel}"
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            open(dst, "w", encoding="utf-8").write(t)
            n += 1
    print("written", n)

LINK = re.compile(r"(\]\()([^)#\s]+\.md)(#[^)]*)?\)")

def links():
    ren = PLAN["renames"]; dups = PLAN["duplicates_removed"]
    fwd = {**{k: ren.get(v, v) for k, v in dups.items()}, **ren}
    by_name = {}
    for p in glob.glob(f"{R}/docs/**/*.md", recursive=True):
        by_name.setdefault(os.path.basename(p), []).append(os.path.relpath(p, R))
    fixed = broken = 0
    for p in glob.glob(f"{R}/docs/**/*.md", recursive=True):
        rel = os.path.relpath(p, R); base = os.path.dirname(rel)
        t = open(p, encoding="utf-8").read()
        def rep(m):
            nonlocal fixed, broken
            target = m.group(2)
            if target.startswith("http"): return m.group(0)
            absolute = os.path.normpath(os.path.join(base, target)) if not target.startswith("docs/") else target
            if os.path.exists(f"{R}/{absolute}"): return m.group(0)
            new = fwd.get(absolute)
            if not new:
                cands = by_name.get(os.path.basename(target), [])
                new = cands[0] if len(cands) == 1 else None
            if new and os.path.exists(f"{R}/{new}"):
                fixed += 1
                return f"{m.group(1)}{os.path.relpath(new, base)}{m.group(3) or ''})"
            broken += 1
            return m.group(0)
        t2 = LINK.sub(rep, t)
        if t2 != t: open(p, "w", encoding="utf-8").write(t2)
    print("links fixed", fixed, "still broken", broken)

if __name__ == "__main__":
    cmd = sys.argv[1]
    if cmd == "structure": structure()
    elif cmd == "content": content(sys.argv[2:])
    elif cmd == "links": links()
