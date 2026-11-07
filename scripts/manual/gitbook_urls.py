#!/usr/bin/env python3
"""GitBook(Git Sync) 공개 주소 계산 — SUMMARY.md 의 '## 묶음 제목' 라틴 글자 + 파일 이름으로 주소가 정해진다.

    url = slug(묶음 제목) / slug(파일 이름; README 는 상위 폴더 이름)   (같은 묶음 안 중복은 -1, -2 …)
slug: 소문자, & → and, 영문·숫자·하이픈만 남김(한글은 사라짐 → 비면 'undefined').
"""
import re, urllib.parse

def slug(s, cut_pct=False):
    if cut_pct and "%" in s: s = s.split("%")[0]
    s = s.lower().replace("&", " and ")
    s = re.sub(r"[^a-z0-9\s-]", "", s)
    s = re.sub(r"[\s-]+", "-", s).strip("-")
    s = s[:80].strip("-")
    return s or "undefined"

def page_urls(summary_text):
    """{파일 경로: 공개 주소} — SUMMARY 순서대로 중복 번호를 붙인다."""
    out, group, used, gused = {}, "", {}, {}
    for line in summary_text.split("\n"):
        h = re.match(r"^##\s+(.*)", line)
        if h:
            g = slug(h.group(1).strip()); n = gused.get(g, 0); gused[g] = n + 1
            group = f"{g}-{n}" if n else g; continue
        m = re.match(r"^\s*\*\s+\[.*\]\(([^)]+)\)", line)
        if not m: continue
        raw = m.group(1)
        path = urllib.parse.unquote(raw)
        base = raw.rsplit("/", 1)[-1]
        if "/" not in raw: name = base[:-3]
        else: name = urllib.parse.unquote(raw.rsplit("/", 2)[-2]) if base.lower() == "readme.md" else base[:-3]
        s = slug(name, cut_pct=True)
        key = (group, s); n = used.get(key, 0); used[key] = n + 1
        if n: s = f"{s}-{n}"
        out[path] = f"{group}/{s}" if group else s
    return out
