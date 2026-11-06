#!/usr/bin/env python3
"""GHL 도움말 원문 전체 수집기 (매뉴얼 리프레시용).

help.gohighlevel.com/support/solutions 에서 모든 카테고리 → 폴더(하위 폴더 포함, 모든 페이지)
→ 아티클을 모으고, 각 아티클의 제목·수정일·경로(빵부스러기)·본문 HTML 을 저장한다.

출력: OUT/index.json (아티클 목록), OUT/articles-NN.jsonl.gz (본문), OUT/report.json
"""
import gzip, json, os, re, sys, time, threading
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests
from bs4 import BeautifulSoup

BASE = "https://help.gohighlevel.com"
UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"}
OUT = sys.argv[1] if len(sys.argv) > 1 else "out/ghl-src"
WORKERS = int(os.environ.get("WORKERS", "6"))
os.makedirs(OUT, exist_ok=True)
S = requests.Session(); S.headers.update(UA)
errors = []
lock = threading.Lock()

def get(url, tries=4):
    for i in range(tries):
        try:
            r = S.get(url, timeout=40)
            if r.status_code == 404:
                return None
            if r.status_code in (429, 503):
                time.sleep(10 * (i + 1)); continue
            r.raise_for_status()
            return r.text
        except Exception as e:
            if i == tries - 1:
                with lock: errors.append({"url": url, "error": str(e)[:200]})
            time.sleep(3 * (i + 1))
    return None

def links(html, pat):
    return list(dict.fromkeys(re.findall(pat, html)))

def crawl_index():
    root = get(f"{BASE}/support/solutions")
    cats = links(root or "", r'href="(/support/solutions/\d+)(?:[-/][^"]*)?"')
    print("categories", len(cats), flush=True)
    folders, arts = {}, {}
    queue = []
    for c in cats:
        h = get(BASE + c)
        if not h: continue
        soup = BeautifulSoup(h, "html.parser")
        cname = (soup.find("h1") or soup.find("title")).get_text(" ", strip=True) if (soup.find("h1") or soup.find("title")) else c
        for f in links(h, r'href="(/support/solutions/folders/\d+)(?:[-/?][^"]*)?"'):
            queue.append((f, cname, c))
    seen = set()
    while queue:
        f, cname, cpath = queue.pop(0)
        if f in seen: continue
        seen.add(f)
        page, prev = 1, None
        fname = None
        while page < 60:
            url = BASE + f + (f"?page={page}" if page > 1 else "")
            h = get(url)
            if not h: break
            if fname is None:
                s = BeautifulSoup(h, "html.parser")
                t = s.find("h1") or s.find("title")
                fname = t.get_text(" ", strip=True) if t else f
                for sub in links(h, r'href="(/support/solutions/folders/\d+)(?:[-/?][^"]*)?"'):
                    if sub not in seen: queue.append((sub, cname, cpath))
            found = links(h, r'href="(/support/solutions/articles/\d+[^"#?]*)"')
            new = [a for a in found if a not in arts]
            for a in new:
                arts[a] = {"path": a, "category": cname, "category_path": cpath, "folder": fname, "folder_path": f}
            if not new or found == prev: break
            prev = found; page += 1
        folders[f] = {"name": fname, "category": cname}
        print(f"folder {f} {fname!r}: total articles {len(arts)}", flush=True)
    return cats, folders, arts

def parse_article(meta):
    url = BASE + meta["path"]
    h = get(url)
    if not h:
        return {**meta, "url": url, "ok": False}
    s = BeautifulSoup(h, "html.parser")
    t = s.find("h1")
    title = t.get_text(" ", strip=True) if t else ""
    m = re.search(r'Modified on:\s*([^<]+)', h)
    body = (s.find(id="article-body") or s.select_one("article.article-body") or s.select_one(".article-body")
            or s.select_one("[class*=article-body]") or s.select_one("article"))
    crumbs = [a.get_text(" ", strip=True) for a in s.select(".breadcrumb a, nav[aria-label*=readcrumb] a")]
    return {**meta, "url": url, "ok": body is not None, "title": title,
            "modified": m.group(1).strip() if m else "", "breadcrumbs": crumbs,
            "body_html": str(body) if body else ""}

def main():
    t0 = time.time()
    cats, folders, arts = crawl_index()
    json.dump({"categories": cats, "folders": folders, "articles": list(arts.values())},
              open(f"{OUT}/index.json", "w"), ensure_ascii=False, indent=1)
    print("articles", len(arts), "crawl s", int(time.time() - t0), flush=True)
    results = []
    with ThreadPoolExecutor(WORKERS) as ex:
        futs = [ex.submit(parse_article, a) for a in arts.values()]
        for i, fu in enumerate(as_completed(futs)):
            results.append(fu.result())
            if i % 200 == 0: print("fetched", i, flush=True)
    results.sort(key=lambda r: r["path"])
    n = 0
    for k in range(0, len(results), 500):
        with gzip.open(f"{OUT}/articles-{k//500:02d}.jsonl.gz", "wt", encoding="utf-8") as g:
            for r in results[k:k+500]:
                g.write(json.dumps(r, ensure_ascii=False) + "\n"); n += 1
    rep = {"categories": len(cats), "folders": len(folders), "articles": len(arts),
           "ok": sum(r["ok"] for r in results), "errors": errors[:200], "seconds": int(time.time() - t0)}
    json.dump(rep, open(f"{OUT}/report.json", "w"), ensure_ascii=False, indent=1)
    print(json.dumps({k: v for k, v in rep.items() if k != "errors"}), "errors", len(errors))

if __name__ == "__main__":
    main()
