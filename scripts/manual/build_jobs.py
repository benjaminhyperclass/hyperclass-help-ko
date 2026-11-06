#!/usr/bin/env python3
"""원문 스냅샷(manual-src)과 docs/ 를 대조해 재번역 작업 목록과 정리 계획을 만든다.

사용: python3 scripts/manual/build_jobs.py <원문 스냅샷 폴더> [--pilot N] [--shards 8]
출력: manual-refresh/plan.json (매핑·이동·중복·신규 통계), manual-refresh/jobs/shard-*.jsonl
"""
import argparse, collections, glob, gzip, json, os, re, sys
from markdownify import markdownify as md_convert
from bs4 import BeautifulSoup

HERE = os.path.dirname(os.path.abspath(__file__))
R = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, os.path.join(R, "scripts"))
import importlib.util
spec = importlib.util.spec_from_file_location("tr", os.path.join(R, "scripts/ghl-help-translator.py"))
tr = importlib.util.module_from_spec(spec)
os.environ.setdefault("VAULT_PATH", R)
spec.loader.exec_module(tr)
CATS = tr.CATEGORIES

OWN_DIRS = ("docs/00-자주묻는질문/", "docs/43-한국-앱/")
LABELS = json.load(open(os.path.join(R, "data/manual/screen-labels.json"), encoding="utf-8"))["labels"]
COMMON_SINGLE = {k for k in LABELS if " " not in k}

def art_id(url):
    m = re.search(r"/articles/(\d+)", url or "")
    return m.group(1) if m else None

def slug_of(url):
    m = re.search(r"/articles/\d+-([^/?#]+)", url or "")
    return m.group(1)[:80] if m else None

def load_src(src_dir):
    arts = {}
    for f in sorted(glob.glob(os.path.join(src_dir, "articles-*.jsonl.gz"))):
        for line in gzip.open(f, "rt", encoding="utf-8"):
            a = json.loads(line)
            if a.get("ok"):
                arts[art_id(a["url"])] = a
    return arts

def html_to_md(html):
    soup = BeautifulSoup(html, "html.parser")
    for t in soup(["script", "style", "noscript", "button"]):
        t.decompose()
    for img in soup.find_all("img"):
        src = img.get("src") or img.get("data-src") or ""
        if not src.startswith("http"):
            img.decompose(); continue
        img["src"] = src
    for fr in soup.find_all("iframe"):
        src = fr.get("src") or fr.get("data-src") or ""
        fr.replace_with(soup.new_string(f"\n\n[동영상]({src})\n\n" if src else ""))
    out = md_convert(str(soup), heading_style="ATX", bullets="-", strip=["span", "div", "article"])
    out = re.sub(r"\n{3,}", "\n\n", out)
    # 원문 끝의 피드백·관련 글 블록 제거
    out = re.split(r"\n(?:#+\s*)?(?:Related Articles|Was this article helpful)", out)[0]
    return out.strip()

LABEL_CTX = re.compile(r"\*\*([^*\n]{2,60})\*\*|[\"“']([A-Z][^\"”'\n]{1,45})[\"”']|(?:>|→|->)\s*([A-Z][A-Za-z0-9 &/\-]{1,40})")

def pick_labels(src_md, limit=140):
    found = collections.OrderedDict()
    emph = set()
    for m in LABEL_CTX.finditer(src_md):
        for g in m.groups():
            if g:
                for part in re.split(r"\s*(?:>|→|->|/)\s*", g.strip(" .:")):
                    emph.add(part.strip())
    for en in sorted(LABELS, key=len, reverse=True):
        if len(found) >= limit: break
        if en in COMMON_SINGLE and en not in emph: continue
        if " " in en and en not in emph and len(en) < 12: continue
        if re.search(r"(?<![A-Za-z])" + re.escape(en) + r"(?![A-Za-z])", src_md):
            found[en] = LABELS[en]
    return [[k, v] for k, v in found.items()]

def sanitize(path):
    """폴더·파일 이름에서 공백·괄호·&amp;·%XX·쉼표를 없애 GitBook 링크가 깨지지 않게 한다."""
    parts = path.split("/")
    out = []
    for k, seg in enumerate(parts):
        base, ext = (os.path.splitext(seg) if k == len(parts) - 1 else (seg, ""))
        base = base.replace("&amp;", "and").replace("&", "and")
        base = re.sub(r"%[0-9A-Fa-f]{2}", "-", base)
        # 주소창에 브랜드가 보이지 않게
        base = re.sub(r"(?i)go-?high-?level|high-?level|lead-?connector(?:hq)?", "hyperclass", base)
        base = re.sub(r"(?i)(?<![a-z])ghl(?![a-z])", "hyperclass", base)
        base = re.sub(r"[\s(),'\"!?:;]+", "-", base)
        base = re.sub(r"-{2,}", "-", base).strip("-") or "page"
        out.append(base + ext)
    return "/".join(out)

def target_dir(src):
    cp = src.get("category_path", "")
    for key, c in CATS.items():
        if c["category_url"].endswith(cp):
            sub = c["folder_map"].get(src.get("folder") or "", "")
            return f"docs/{c['local']}" + (f"/{sub}" if sub else "")
    return "docs/36-기타"

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("--shards", type=int, default=8)
    ap.add_argument("--pilot", type=int, default=0)
    ap.add_argument("--only", default="")
    a = ap.parse_args()
    src = load_src(a.src)
    by_slug = {}
    for i, s in src.items():
        by_slug.setdefault(slug_of(s["url"]), i)
    docs = sorted(p for p in glob.glob(os.path.join(R, "docs/**/*.md"), recursive=True))
    docs = [os.path.relpath(p, R) for p in docs]
    mapping, unmapped, own = {}, [], []
    for d in docs:
        if d.startswith(OWN_DIRS) or os.path.basename(d) in ("README.md", "SUMMARY.md", "STATE.md"):
            own.append(d); continue
        head = open(os.path.join(R, d), encoding="utf-8", errors="ignore").read(800)
        m = re.search(r"원문:\s*(?:>-\s*)?(\S+)", head)
        i = art_id(m.group(1)) if m else None
        if i not in src:
            i = by_slug.get(os.path.splitext(os.path.basename(d))[0][:80])
        if i in src: mapping[d] = i
        else: unmapped.append(d)
    # 중복: 같은 원문을 가리키는 문서가 여럿이면 번호 폴더 쪽(그중 경로가 짧은 것)을 남긴다
    groups = collections.defaultdict(list)
    for d, i in mapping.items(): groups[i].append(d)
    dup_remove = {}
    for i, ds in groups.items():
        if len(ds) > 1:
            ds.sort(key=lambda d: (not re.match(r"docs/\d\d-", d), len(d)))
            for d in ds[1:]: dup_remove[d] = ds[0]
    # 영문 폴더 문서는 원문 카테고리의 번호 폴더로 옮긴다
    moves = {}
    for d, i in mapping.items():
        if d in dup_remove or re.match(r"docs/\d\d-", d): continue
        nd = f"{target_dir(src[i])}/{os.path.basename(d)}"
        if nd != d: moves[d] = nd
    # 모든 문서의 최종 경로(이동 + 이름 정리)
    renames = {}
    for d in docs:
        if d in dup_remove: continue
        nd = sanitize(moves.get(d, d))
        if nd != d: renames[d] = nd
    newpath = lambda d: renames.get(d, d)
    # 원문 기준 링크표: 원문 URL → 최종 경로
    final = {}
    for d, i in mapping.items():
        if d in dup_remove: continue
        final[i] = newpath(d)
    new_ids = [i for i in src if i not in final]
    for i in new_ids:
        final[i] = sanitize(f"{target_dir(src[i])}/{(slug_of(src[i]['url']) or i)}.md")
    taken = collections.Counter(final.values())
    for i, p in list(final.items()):
        if taken[p] > 1 and i in new_ids:
            final[i] = p[:-3] + f"-{i[-6:]}.md"
    url_to_path = {}
    for i, p in final.items():
        for host in ("help.gohighlevel.com", "help.leadconnectorhq.com"):
            url_to_path[f"https://{host}/support/solutions/articles/{i}"] = p

    def links_for(out_path, md):
        out = []
        for u in dict.fromkeys(re.findall(r"https?://help\.(?:gohighlevel|leadconnectorhq)\.com/support/solutions/articles/\d+[^)\s\"']*", md)):
            i = art_id(u)
            p = final.get(i)
            if p:
                out.append([u, os.path.relpath(p, os.path.dirname(out_path))])
        return out

    jobs = []
    for i, p in final.items():
        s = src[i]
        smd = html_to_md(s["body_html"])
        if len(smd) < 40: continue
        cat = p.split("/")[1] if p.count("/") >= 2 else "기타"
        jobs.append({"id": i, "out_path": p, "mode": "translate", "url": s["url"].split("?")[0],
                     "category": cat, "title_en": s.get("title", ""), "source_md": smd,
                     "labels": pick_labels(smd), "links": links_for(p, smd),
                     "src_images": len(re.findall(r"!\[[^\]]*\]\(", smd)), "new": i in new_ids})
    for d in unmapped:
        t = open(os.path.join(R, d), encoding="utf-8").read()
        jobs.append({"id": "ko:" + d, "out_path": newpath(d), "mode": "polish", "url": "", "category": d.split("/")[1],
                     "existing_ko": t, "labels": pick_labels(t), "links": [],
                     "src_images": len(re.findall(r"!\[[^\]]*\]\(", t))})
    if a.only:
        jobs = [j for j in jobs if re.search(a.only, j["out_path"])]
    if a.pilot:
        jobs = jobs[: a.pilot]
    plan = {"src_articles": len(src), "docs": len(docs), "mapped": len(mapping), "unmapped": len(unmapped),
            "own": len(own), "duplicates_removed": dup_remove, "moves": moves, "renames": renames,
            "new_articles": len(new_ids), "jobs": len(jobs),
            "jobs_translate": sum(j["mode"] == "translate" for j in jobs),
            "jobs_polish": sum(j["mode"] == "polish" for j in jobs)}
    os.makedirs(os.path.join(R, "manual-refresh/jobs"), exist_ok=True)
    for f in glob.glob(os.path.join(R, "manual-refresh/jobs/shard-*.jsonl")): os.remove(f)
    n = max(1, min(a.shards, len(jobs)))
    fhs = [open(os.path.join(R, f"manual-refresh/jobs/shard-{k}.jsonl"), "w", encoding="utf-8") for k in range(n)]
    for k, j in enumerate(sorted(jobs, key=lambda j: -len(j.get("source_md") or j.get("existing_ko") or ""))):
        fhs[k % n].write(json.dumps(j, ensure_ascii=False) + "\n")
    for fh in fhs: fh.close()
    json.dump(plan, open(os.path.join(R, "manual-refresh/plan.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    json.dump({"final": final, "url_to_path": url_to_path}, open(os.path.join(R, "manual-refresh/paths.json"), "w"), ensure_ascii=False)
    print(json.dumps({k: (len(v) if isinstance(v, dict) else v) for k, v in plan.items()}, ensure_ascii=False))

if __name__ == "__main__":
    main()
