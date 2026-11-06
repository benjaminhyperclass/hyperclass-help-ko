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

EN_FOLDER_MAP = {
    "ad-manager": "10-마케팅", "affiliate-manager-workflow": "21-어필리에이트", "the-affiliate-manager": "21-어필리에이트",
    "agent-studio": "13-AI-Employee", "ai-agents": "13-AI-Employee", "conversation-ai": "13-AI-Employee",
    "conversation-ai-bot": "13-AI-Employee", "billing": "11-설정", "location-settings": "11-설정", "setup": "11-설정",
    "company": "11-설정", "calendar-connections": "04-캘린더-예약", "calendars": "04-캘린더-예약",
    "scheduling-calendars-bookings": "04-캘린더-예약", "client-portal-web-and-mobile-app": "39-클라이언트-포털",
    "communities": "17-멤버십-커뮤니티", "membership-and-communities": "17-멤버십-커뮤니티",
    "contact-engagement-score": "02-연락처", "contacts": "02-연락처", "contacts-smartlists": "02-연락처",
    "custom-objects": "02-연락처", "core-functionality": "36-기타", "conversations-view": "03-대화",
    "webchat-widget": "03-대화", "whatsapp-integration": "03-대화", "facebook": "42-통합",
    "domain-connect-transfer": "06-사이트", "domains": "06-사이트", "funnels-websites-builder": "06-사이트",
    "funnels-websites-category": "06-사이트", "seo": "06-사이트", "templates": "06-사이트",
    "surveys-forms-qr-codes-and-quizzes": "06-사이트", "wordpress-folder": "06-사이트", "wordpress-integration": "06-사이트",
    "external-tracking": "18-리포팅", "reporting-attribution": "18-리포팅", "tracking-attribution-general": "18-리포팅",
    "marketing-audit-reports": "18-리포팅", "e-commerce": "37-이커머스-스토어", "ecommerce": "37-이커머스-스토어",
    "getting-started-w-payments": "08-결제", "payments-invoices-estimates": "08-결제", "subscription-products": "08-결제",
    "error-code-and-warning-dictionary": "36-기타", "getting-started-category": "01-시작하기", "quick-start-guides": "01-시작하기",
    "google-business-page": "41-평판-리뷰", "reputation-review-management": "41-평판-리뷰", "review-management": "41-평판-리뷰",
    "lead-connector-mobile-desktop-app": "30-모바일-데스크톱", "leadconnector-email": "09-이메일",
    "leadconnector-integrations": "42-통합", "marketplace-apps": "27-앱-마켓", "leadconnector-phone": "15-전화-시스템",
    "phone-category": "15-전화-시스템", "phone-sms-category": "15-전화-시스템", "marketing-category": "10-마케팅",
    "prospecting-tool": "10-마케팅", "opportunities": "05-기회-파이프라인", "pipelines-opportunities": "05-기회-파이프라인",
    "workflow": "07-워크플로우",
}

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

BLOCK = {"p", "div", "ul", "ol", "table", "h1", "h2", "h3", "h4", "h5", "h6", "pre", "blockquote", "figure", "section", "article", "img", "iframe", "hr"}

def html_to_md(html):
    soup = BeautifulSoup(html, "html.parser")
    for t in soup(["script", "style", "noscript", "button", "svg"]):
        t.decompose()
    for img in soup.find_all("img"):
        src = img.get("src") or img.get("data-src") or ""
        if not src.startswith("http"):
            img.decompose(); continue
        img["src"] = src
    for fr in soup.find_all("iframe"):
        src = fr.get("src") or fr.get("data-src") or ""
        fr.replace_with(soup.new_string(f"\n\n[동영상]({src})\n\n" if src else ""))
    # 클래스 없는 div 레이아웃 → 문단 경계 살리기 (안쪽부터)
    for d in reversed(soup.find_all(["div", "section", "article", "span"])):
        if d.name == "span":
            continue
        if any(getattr(c, "name", None) in BLOCK for c in d.children):
            d.insert_before(soup.new_string("\n\n")); d.insert_after(soup.new_string("\n\n")); d.unwrap()
        else:
            d.name = "p"
    out = md_convert(str(soup), heading_style="ATX", bullets="-", strip=["span"])
    # 목차·관련 글·섹션 번호 제거
    out = re.split(r"\n\s*(?:#+\s*)?(?:Related Articles|Was this article helpful)", out)[0]
    out = re.sub(r"\n\s*(?:#+\s*)?Table of Contents\s*\n.*?(?=\n#{1,4} )", "\n", out, flags=re.S)
    out = re.sub(r"(?m)^\s*\d{1,2}\s*$", "", out)
    out = re.sub(r"\n{3,}", "\n\n", out)
    return out.strip()

LABEL_CTX = re.compile(r"\*\*([^*\n]{2,60})\*\*|[\"“']([A-Z][^\"”'\n]{1,45})[\"”']|(?:>|→|->)\s*([A-Z][A-Za-z0-9 &/\-]{1,40})")

TOK = re.compile(r"[A-Za-z0-9][A-Za-z0-9&'\-/.]*|[^\sA-Za-z0-9]")
MAXW = 6

def pick_labels(src_md, limit=140):
    """원문에 실제로 나오는 영어 화면 문구만 고른다(n-gram 사전 조회)."""
    emph = set()
    for m in LABEL_CTX.finditer(src_md):
        for g in m.groups():
            if g:
                for part in re.split(r"\s*(?:>|→|->|/)\s*", g.strip(" .:")):
                    emph.add(part.strip())
    words = re.findall(r"[A-Za-z0-9][A-Za-z0-9&'\-]*", src_md)
    found = {}
    for n in range(MAXW, 0, -1):
        for i in range(len(words) - n + 1):
            cand = " ".join(words[i:i + n])
            if cand in LABELS and cand not in found:
                if n == 1 and cand not in emph: continue
                if n > 1 and len(cand) < 12 and cand not in emph: continue
                found[cand] = LABELS[cand]
    for e in emph:  # 강조된 문구는 구두점이 섞여도 그대로 조회
        if e in LABELS: found.setdefault(e, LABELS[e])
    items = sorted(found.items(), key=lambda kv: (kv[0] not in emph, -len(kv[0])))[:limit]
    return [[k, v] for k, v in items]

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

EXTRA_CATS = {"155000000305": "44-신기능-2026", "155000000183": "02-연락처", "155000000197": "02-연락처",
              "155000000199": "02-연락처", "155000000300": "36-기타", "155000000205": "17-멤버십-커뮤니티",
              "155000000311": "26-산업-가이드", "155000000259": "11-설정", "155000000310": "39-클라이언트-포털"}

def target_dir(src):
    cp = src.get("category_path", "")
    if cp.split("/")[-1] in EXTRA_CATS:
        return f"docs/{EXTRA_CATS[cp.split('/')[-1]]}"
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
    # 2차: 파일 이름이 바뀐 원문을 단어 겹침(자카드 ≥ 0.7)으로 찾는다
    STOP = {"a","an","the","to","in","of","and","for","with","on","how","your","highlevel","gohighlevel","hyperclass","leadconnector","lc","md"}
    def toks(x): return {t for t in re.split(r"[-_]+", x.lower()) if t and t not in STOP}
    claimed = set(mapping.values())
    cand = {i: toks(slug_of(s_["url"]) or "") for i, s_ in src.items() if i not in claimed}
    inv = collections.defaultdict(set)
    for i, t in cand.items():
        for w in t: inv[w].add(i)
    for d in list(unmapped):
        t = toks(os.path.splitext(os.path.basename(d))[0])
        if len(t) < 2: continue
        best, bs = None, 0.0
        for i in set().union(*(inv[w] for w in t if w in inv)) if any(w in inv for w in t) else ():
            if i in claimed: continue
            j = len(t & cand[i]) / len(t | cand[i])
            if j > bs: best, bs = i, j
        if bs >= 0.7:
            mapping[d] = best; claimed.add(best); unmapped.remove(d)
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
    # 원문을 못 찾은 영문 폴더 문서도 번호 폴더로 옮긴다
    for d in unmapped:
        top = d.split("/")[1]
        if top in EN_FOLDER_MAP:
            moves[d] = f"docs/{EN_FOLDER_MAP[top]}/{os.path.basename(d)}"
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
