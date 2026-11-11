#!/usr/bin/env python3
"""창업 챌린지 강의 영상 ↔ 매뉴얼 본문 크로스레퍼런스.

  python3 scripts/manual/video_links.py apply     # 연결표대로 본문 곳곳에 '▶ 영상' 링크를 넣는다
  python3 scripts/manual/video_links.py remove    # 넣은 링크를 모두 지운다

- 연결표: data/manual/video-map.json 의 placements — {page, at, refs:[[영상 id, 시각], ...]}
  · at = "@H1"        → 문서 제목 다음 첫 문단 끝에
  · at = "#제목"      → 그 소제목(##~######) 다음 첫 문단 끝에 (첫 내용이 목록·표·상자면 소제목 바로 아래 한 줄로)
  · at = 그 밖의 글자 → 그 글자가 든 줄(문장·목록 항목)의 끝에
- 링크 모양: ▶ 영상 [4강 2부 2:19](https://www.youtube.com/watch?v=...&t=139s) · [4강 4부 0:38](...) — 누르면 그 장면부터 재생된다.
- 유튜브 '공개' 강의만 쓴다: _meta.public_ids 에 없는 영상이 있으면 실행을 멈춘다.
- 몇 번을 돌려도 결과가 같다(먼저 기존 링크를 지우고 다시 넣는다). 월간 번역으로 문서가 새로 써지면 다시 돌린다.
- 외부 호출·API 사용 없음.
"""
import glob, json, os, re, sys

R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MAP = os.path.join(R, "data/manual/video-map.json")
DOCS = os.path.join(R, "docs")
TAG = "▶ 영상"
_YT = r"\[[^\]]+\]\(https://www\.youtube\.com/watch\?v=[^)\s]+\)"
LINK_RE = re.compile(r" ?" + re.escape(TAG) + r" " + _YT + r"(?: · " + _YT + r")*")
OLD_BOX = re.compile(r'\{% hint style="success" %\}\n🎬 \*\*영상으로 배우기\*\*.*?\{% endhint %\}\n\n?', re.S)
NOT_PARA = re.compile(r"\s*(#|\{%|\||```|!\[|<|[-*+] |\d+\.\s|>)")


def secs(t):
    s = 0
    for p in t.split(":"):
        s = s * 60 + int(p)
    return s


def clock(t):
    n = secs(t)
    h, m, s = n // 3600, n % 3600 // 60, n % 60
    return f"{h}:{m:02d}:{s:02d}" if h else f"{m}:{s:02d}"


def link(lectures, v, t):
    n = secs(t)
    url = f"https://www.youtube.com/watch?v={v}" + (f"&t={n}s" if n else "")
    return f"[{lectures[v]} {clock(t)}]({url})"


def strip(text):
    text = OLD_BOX.sub("", text)
    lines = []
    for l in text.split("\n"):
        new = LINK_RE.sub("", l)
        if new != l and not new.strip():
            continue   # 링크만 있던 줄
        lines.append(new)
    out = "\n".join(lines)
    return re.sub(r"\n{3,}", "\n\n", out)


def find(lines, at):
    if at == "@H1":
        hits = [i for i, l in enumerate(lines) if l.startswith("# ")]
        return (hits[0], True) if hits else (None, True)
    if at.startswith("#"):
        pat = re.compile(r"#{2,6}\s+" + re.escape(at[1:].strip()) + r"\s*")
        hits = [i for i, l in enumerate(lines) if pat.fullmatch(l)]
        return (hits[0], True) if hits else (None, True)
    hits = [i for i, l in enumerate(lines) if at in l]
    return (hits[0], False) if hits else (None, False)


def place(lines, i, is_heading, html):
    """i 줄(제목이면 그 아래 첫 문단의 끝 줄) 끝에 링크를 붙인다. 붙일 문단이 없으면 제목 아래 한 줄을 만든다."""
    if not is_heading:
        lines[i] = lines[i].rstrip() + " " + html
        return
    j = i + 1
    while j < len(lines) and not lines[j].strip():
        j += 1
    if j < len(lines) and not NOT_PARA.match(lines[j]):
        while j + 1 < len(lines) and lines[j + 1].strip() and not NOT_PARA.match(lines[j + 1]):
            j += 1
        if not re.search(r"[:：]\**\s*$", lines[j]):
            lines[j] = lines[j].rstrip() + " " + html
            return
    lines[i + 1:i + 1] = ["", html]


def load():
    m = json.load(open(MAP, encoding="utf-8"))
    pub = set(m["_meta"].get("public_ids", []))
    used = {v for p in m["placements"] for v, _ in p["refs"]}
    bad = sorted(v for v in used | set(m["lectures"]) if v not in pub)
    if bad:
        sys.exit(f"공개 확인되지 않은 영상: {bad} — 유튜브 '공개' 강의만 연결할 수 있습니다. 채널 공개 목록에서 확인 후 _meta.public_ids 에 더하세요.")
    return m


def main():
    cmd = sys.argv[1] if len(sys.argv) > 1 else "apply"
    m = load()
    # 1) 모든 문서에서 기존 링크·예전 상자를 지운다
    cleaned = 0
    for f in glob.glob(os.path.join(DOCS, "**/*.md"), recursive=True):
        t = open(f, encoding="utf-8").read()
        if TAG in t or "🎬 **영상으로 배우기**" in t:
            s = strip(t)
            if s != t:
                open(f, "w", encoding="utf-8").write(s); cleaned += 1
    if cmd == "remove":
        print("링크 제거", cleaned, "문서")
        return
    # 2) 연결표대로 넣는다
    by_page = {}
    for p in m["placements"]:
        by_page.setdefault(p["page"], []).append(p)
    missing, n_links = [], 0
    for page, items in sorted(by_page.items()):
        f = os.path.join(DOCS, page)
        if not os.path.exists(f):
            missing.append((page, "(문서 없음)")); continue
        lines = open(f, encoding="utf-8").read().split("\n")
        # 아래쪽부터 넣어야 앞쪽 줄 번호가 밀리지 않는다
        spots = []
        for p in items:
            i, is_h = find(lines, p["at"])
            if i is None:
                missing.append((page, p["at"])); continue
            spots.append((i, is_h, TAG + " " + " · ".join(link(m["lectures"], v, t) for v, t in p["refs"])))
            n_links += len(p["refs"])
        for i, is_h, html in sorted(spots, reverse=True):
            place(lines, i, is_h, html)
        open(f, "w", encoding="utf-8").write("\n".join(lines))
    print(f"영상 링크 {n_links}개 · 문서 {len(by_page)}개 · 위치 {len(m['placements'])}곳")
    for pg, at in missing:
        print("  위치를 못 찾음(건너뜀):", pg, "|", at)


if __name__ == "__main__":
    main()
