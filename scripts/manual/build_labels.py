#!/usr/bin/env python3
"""v4 화면 사전에서 '영어 화면 문구 → 실제 한국어 화면 문구' 표를 만든다.

기준: _source/hc-ko-app-reference.json 의 키별 en 과, 같은 키의 현재 한국어(_source/hc-ko-app.pretty.json host).
같은 영어가 여러 한국어로 쓰이면 사이드바(common.sidebar.*) 값을 우선하고, 없으면 가장 많이 쓰인 값을 고른다.
출력: data/manual/screen-labels.json  {"labels": {en: ko}, "ambiguous": {en: {ko: n}}}
"""
import collections, json, os, re
R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ref = json.load(open(f"{R}/_source/hc-ko-app-reference.json", encoding="utf-8"))
cur = json.load(open(f"{R}/_source/hc-ko-app.pretty.json", encoding="utf-8"))["host"]
gl = json.load(open(f"{R}/data/glossary.ko.json", encoding="utf-8"))

def get(d, path):
    for p in path.split("."):
        if not isinstance(d, dict) or p not in d: return None
        d = d[p]
    return d if isinstance(d, str) else None

BRAND = re.compile(r"HighLevel|LeadConnector|GoHighLevel|\bGHL\b", re.I)
cnt = collections.defaultdict(collections.Counter)
side = {}
for k, v in ref.items():
    en = v.get("en")
    if not isinstance(en, str): continue
    ko = get(cur, k) or v.get("ko")
    if not isinstance(ko, str): continue
    en, ko = en.strip(), ko.strip()
    if not ko or ko == en or len(en) > 45 or len(en.split()) > 6: continue
    if re.search(r"[{}<>%|@$]|\.\s*$|\?$|:$", en) or re.search(r"[{}<>%|@$]", ko): continue
    if not re.match(r"[A-Z0-9]", en) or not re.search(r"[가-힣]", ko) or BRAND.search(ko): continue
    cnt[en][ko] += 1
    if ".sidebar." in k or k.startswith("sidebar."): side[en] = ko
BRANDS = re.compile(r"^(WhatsApp|WordPress|Facebook|Instagram|Google|Stripe|Zoom|Zapier|Shopify|PayPal|TikTok|LinkedIn|YouTube|Gmail|Outlook|Yelp|Twilio|Mailgun|QuickBooks|Slack|Canva|Calendly)\b")
CALLOUT = {"Note", "Notes", "Tip", "Tips", "Important", "Warning", "Caution", "Pro Tip", "Please Note", "Example"}
labels, amb = {}, {}
for en, c in cnt.items():
    if BRANDS.match(en) or en in CALLOUT: continue
    if any(b in "".join(c) for b in ("왓츠앱", "페이스북", "인스타그램", "구글", "워드프레스", "스트라이프", "줌 ")): continue
    ko = side.get(en) or c.most_common(1)[0][0]
    labels[en] = ko
    if len(c) > 1 and c.most_common(1)[0][1] / sum(c.values()) < 0.6:
        amb[en] = dict(c.most_common(4))
# 확정 용어집(decided)은 단수·복수 명사 기본형으로 덮어쓴다 — 화면 메뉴(사이드바)는 그대로 둔다
for it in gl["objects"] + gl["buttons"]:
    if it.get("decided", True):
        for en in {it["en"], it["en"] + "s"}:
            if en not in side and en not in CALLOUT: labels[en] = it["ko"]
os.makedirs(f"{R}/data/manual", exist_ok=True)
core = {en: ko for en, ko in side.items() if not BRANDS.match(en) and en not in CALLOUT}
for extra in ["Labs", "Get Code", "Save", "Cancel", "Delete", "Edit", "Publish", "Preview", "Settings", "Add", "Create", "Search", "Filter", "Import", "Export", "Duplicate", "Next", "Back", "Done", "Close", "Confirm", "Submit"]:
    if extra in labels: core.setdefault(extra, labels[extra])
json.dump({"_meta": {"source": "hc-ko-app-reference.json + hc-ko-app.pretty.json host", "count": len(labels),
                     "rule": "sidebar > glossary(decided) > 최빈값"},
           "labels": dict(sorted(labels.items())), "core": dict(sorted(core.items())), "ambiguous": dict(sorted(amb.items()))},
          open(f"{R}/data/manual/screen-labels.json", "w", encoding="utf-8"), ensure_ascii=False, indent=0)
print("labels", len(labels), "ambiguous", len(amb), "sidebar", len(side))
