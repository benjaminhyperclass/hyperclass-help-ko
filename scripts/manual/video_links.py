#!/usr/bin/env python3
"""창업 챌린지 강의 영상 ↔ 매뉴얼 문서 크로스레퍼런스.

  python3 scripts/manual/video_links.py apply     # 문서마다 '영상으로 배우기' 박스를 넣고, 강의 목차 페이지를 다시 만든다
  python3 scripts/manual/video_links.py remove    # 박스를 모두 지운다(목차 페이지는 그대로)

- 연결표: data/manual/video-map.json (강의 챕터 → 문서 경로). 영상 챕터 정보: data/manual/video-chapters.json
- 몇 번을 돌려도 결과가 같다(기존 박스를 지우고 다시 넣는다). 월간 번역으로 문서가 새로 써지면 이 스크립트를 다시 돌린다.
- 외부 호출·API 사용 없음.
"""
import glob, json, os, re, sys

R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MAP = os.path.join(R, "data/manual/video-map.json")
CHAPTERS = os.path.join(R, "data/manual/video-chapters.json")
INDEX = "docs/01-시작하기/creator-challenge-videos.md"
INDEX_TITLE = "창업 챌린지 강의 영상으로 배우기"
MARK = "🎬 **영상으로 배우기**"
BLOCK_RE = re.compile(r'\{% hint style="success" %\}\n' + re.escape(MARK) + r'.*?\{% endhint %\}\n\n?', re.S)


def secs(t):
    s = 0
    for p in t.split(":"):
        s = s * 60 + int(p)
    return s


def url(v, t):
    n = secs(t)
    return f"https://www.youtube.com/watch?v={v}" + (f"&t={n}s" if n else "")


def short(lecture):
    return lecture.split(" · ")[0]


def strip_block(text):
    return BLOCK_RE.sub("", text)


def insert_at(lines):
    """제목(# ) 다음 첫 문단 뒤. 첫 문단이 없으면 제목 바로 뒤."""
    i = next((k for k, l in enumerate(lines) if l.startswith("# ")), None)
    if i is None:
        fm = 0
        if lines and lines[0].strip() == "---":
            fm = next((k for k in range(1, len(lines)) if lines[k].strip() == "---"), 0) + 1
        return fm
    j = i + 1
    while j < len(lines) and not lines[j].strip():
        j += 1
    if j < len(lines) and not re.match(r"\s*(#|\{%|>|[-*+] |\||!\[|\d+\.\s|```|<)", lines[j]):
        while j < len(lines) and lines[j].strip():
            j += 1
        return j
    return i + 1


def block(doc, items, lectures):
    rel = os.path.relpath(os.path.join(R, INDEX), os.path.dirname(os.path.join(R, doc)))
    out = ['{% hint style="success" %}', f"{MARK} — 창업 챌린지 강의에서 이 내용을 화면으로 직접 보여 드려요.", ""]
    for it in items:
        out.append(f"* [{short(lectures[it['v']])} · {it['label']} ({it['t']})]({url(it['v'], it['t'])})")
    out += ["", f"전체 강의 목차: [{INDEX_TITLE}]({rel.replace(' ', '%20')})", "{% endhint %}"]
    return out


def load():
    m = json.load(open(MAP, encoding="utf-8"))
    order = list(m["lectures"])
    per = {}
    for it in m["links"]:
        for p in it["pages"]:
            per.setdefault(p, [])
            if not any(x["v"] == it["v"] and x["t"] == it["t"] for x in per[p]):
                per[p].append(it)
    for p in per:
        per[p].sort(key=lambda x: (order.index(x["v"]), secs(x["t"])))
    return m, order, per


def apply_docs(per, lectures):
    # 연결표에서 빠진 문서에 남은 박스는 지운다
    for f in glob.glob(os.path.join(R, "docs/**/*.md"), recursive=True):
        rel = os.path.relpath(f, os.path.join(R, "docs"))
        if rel not in per:
            t = open(f, encoding="utf-8").read()
            if MARK in t:
                open(f, "w", encoding="utf-8").write(strip_block(t)); print("박스 제거:", rel)
    n = 0
    for p, items in sorted(per.items()):
        f = os.path.join(R, "docs", p)
        if not os.path.exists(f):
            print("없는 문서(건너뜀):", p)
            continue
        text = strip_block(open(f, encoding="utf-8").read())
        lines = text.split("\n")
        k = insert_at(lines)
        b = block("docs/" + p, items, lectures)
        head, tail = lines[:k], lines[k:]
        while head and not head[-1].strip() and len(head) > 1:
            head.pop()
        while tail and not tail[0].strip():
            tail.pop(0)
        new = head + ([""] if head and head[-1].strip() != "---" or k else []) + b + [""] + tail
        open(f, "w", encoding="utf-8").write("\n".join(new))
        n += 1
    return n


def build_index(m, order, per):
    ch = json.load(open(CHAPTERS, encoding="utf-8"))
    by_ts = {}
    for it in m["links"]:
        by_ts.setdefault((it["v"], it["t"]), []).extend(it["pages"])
    titles = {}
    for p in {p for v in by_ts.values() for p in v}:
        f = os.path.join(R, "docs", p)
        t = next((l[2:].strip() for l in open(f, encoding="utf-8") if l.startswith("# ")), p)
        titles[p] = t.replace("|", "·").replace("[", "(").replace("]", ")")
    here = os.path.dirname(os.path.join(R, INDEX))
    L = ["---", "카테고리: 01-시작하기", "종류: 강의 영상 목차 (video_links.py 가 만든다 — 직접 고치지 말 것)", "---", "", f"# {INDEX_TITLE}", "",
         "벤자민의 유튜브 **무료 창업 챌린지** 강의에서 하이퍼클래스 기능을 실제 화면으로 시연한 부분을 모았어요. "
         "시간을 누르면 해당 장면부터 재생되고, 오른쪽 매뉴얼 문서에서 같은 내용을 글로 자세히 볼 수 있어요.", "",
         '{% hint style="info" %}',
         "매뉴얼 문서 안의 초록색 **🎬 영상으로 배우기** 상자도 이 목차와 연결되어 있어요. 글로 읽다가 화면이 궁금하면 상자 안 링크를 누르세요.",
         "{% endhint %}", ""]
    for v in order:
        if v not in ch:
            continue
        lec = m["lectures"][v]
        L += [f"## {lec}", "", f"{{% embed url=\"https://www.youtube.com/watch?v={v}\" %}}", "",
              "| 시간 | 내용 | 관련 매뉴얼 |", "| --- | --- | --- |"]
        for t, title in ch[v]:
            pages = by_ts.get((v, t), [])
            docs = " · ".join(f"[{titles[p]}]({os.path.relpath(os.path.join(R, 'docs', p), here).replace(' ', '%20')})"
                              for p in dict.fromkeys(pages))
            title = title.replace("|", "·")
            L.append(f"| [{t}]({url(v, t)}) | {title} | {docs} |")
        L.append("")
    open(os.path.join(R, INDEX), "w", encoding="utf-8").write("\n".join(L))


def main():
    cmd = sys.argv[1] if len(sys.argv) > 1 else "apply"
    m, order, per = load()
    if cmd == "remove":
        n = 0
        for p in per:
            f = os.path.join(R, "docs", p)
            if os.path.exists(f):
                t = open(f, encoding="utf-8").read(); s = strip_block(t)
                if s != t:
                    open(f, "w", encoding="utf-8").write(s); n += 1
        print("박스 제거", n)
        return
    n = apply_docs(per, m["lectures"])
    build_index(m, order, per)
    print(f"영상 박스 {n}개 문서 · 연결 {sum(len(v) for v in per.values())}건 · 목차 {INDEX}")


if __name__ == "__main__":
    main()
