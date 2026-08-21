#!/usr/bin/env python3
"""hc-gap 수집분 큐레이션 (사용: python3 curate-gap.py <out.json> [gap.json])

2026-08-21 사이클 기준 — 어제(08-20) 기준 + 이번 배치 신규 잡음 필터.

신규 필터:
- 타이핑 애니메이션 조각: ok 키가 다른 ok 키의 진성 접두사면 제외 (Hi b → Hi be → …)
- 상대 시각(N days ago), 달력 셀(17 Mon), Activate now - Live in N days, Going Live on …
- 계정 실데이터: benjamin/Myongki/Seokwoo 포함 문자열, 커스텀 값 이름, 스니펫명
- 마켓플레이스 앱/제작자 고유명 (CloseBot, Kixie, Andrea Studios …)
- (by: LeadConnector) 계열은 채택 — 빌드 화이트라벨이 '하이퍼클래스'로 치환
"""
import json, re, sys

REPO = '/Users/myongkiseong/Documents/hyperclass-help-ko'
GAP = sys.argv[2] if len(sys.argv) > 2 else '/Users/myongkiseong/Desktop/hc-gap-2026-08-21.json'

gap = json.load(open(GAP))
en = json.load(open(f'{REPO}/data/ghl-i18n-en.json'))
ko = json.load(open(f'{REPO}/data/ghl-i18n-ko.json'))
reg = json.load(open(f'{REPO}/data/excluded-strings.json'))

registered = set()
for cat, body in reg.items():
    if cat.startswith('_'): continue
    registered.update(body.get('항목', []))

MONTH = r'(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)'
RUNTIME_PATTERNS = [
    rf'^{MONTH} \d{{1,2}} at \d{{1,2}}:\d{{2}} [AP]M$',
    rf'^{MONTH} \d{{1,2}},? \d{{4}},? \d{{1,2}}:\d{{2}} ?[AaPp][Mm]$',   # Apr 21, 2026 09:07 AM / Jul 13 2026, 01:29 PM
    rf'^(January|February|March|April|May|June|July|August|September|October|November|December) \d{{1,2}}, \d{{4}}.*$',
    rf'^Retires {MONTH} \d{{1,2}}, \d{{4}}$',
    r'^(Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day / \d{1,2} \w{3} \d{4} / .*$',
    r'^\d{1,2} (Mon|Tue|Wed|Thu|Fri|Sat|Sun)$',                          # 달력 셀
    r'^\d+ (day|hour|minute|week|month|year)s? ago$',                    # 상대 시각
    r'^at \d{1,2}:\d{2} [AP]M KST$',
    r'^Created on: .+\(KST\)$',
    r'^Next send: .+$',
    r'^Activate now - Live in \d+ days?$',
    r'^Going Live on \d{2} \w{3} \d{4}$',
    r'^\d+ Invoice\(s\).*$',
    r'^\d+ (Products|Items?|items|Values?|Contacts|Templates|Apps|opportunities)( Selected| selected)?$',
    r'^\d+ characters \| \d+ words$',
    r'^0 / \d+ characters$',
    r'^Contacts \(\d+/\d+\)$',
    r'^Companies \(\d+\)$',
    r'^Advanced filters \(\d+\)$',
    r'^Select all \d+$',
    r'^Unread, \d+ conversations$',
    r'^Page \d+ of \d+$',
    r'^Show Page \d+$',
    r'^Showing \d+ app\(s\)$',
    r'^Showing \d+ to \d+ of \d+ results$',
    r'^\$[\d,.]+/month fee .*$',
    r'^Approximate Cost: \$[\d,.]+$',
    r'^\d+ apps? connections? failed$',
    r'^\d+ month commitment$',
    r'^[\d.,]+/min$',
    r'^[\d,]+-[\d,]+ tokens$',
    r'^\d+/\d+ Columns$',
    r'^Total Conversations \(\d+\)$',
    r'^Knowledge base usage: .*$',
    r'^\(\d+ minutes left today\)$',
]
RUNTIME_EXACT = {
    'Communities - undefined', 'undefined - Price', '| 0 segs',
    'Import all  from Wave',                                              # 빈 보간 슬롯(이중 공백)
    'Disconnecting will remove all connected  accounts. Do you want to proceed?',
    'Disconnect Unnamed account from this app? This action cannot be undone.',
    # 타이핑 애니메이션 체인 말미 (접두사 규칙이 못 잡는 절단형)
    'Search by categor', 'Search by colo', 'Search by nam', 'Search by use cas', 'Search templat',
    'Search b', 'Search by use', 'Hi benjami',                            # 프레임 건너뛴 체인 조각
}
USER_DATA_EXACT = {
    'Actions for integration hyperaxis', 'Seokwoo Jung', 'Kettlebell_otaku', 'Cludyclia',
    'HG Tech', 'HyperClass-TrueGrow', 'HyperclassAI',
    'Community(Free) Link', 'Community(Hyper x Truegrow) Link',
    "CEO's Email", 'Color logo_url', 'Grey logo_whitebackground_url', 'Meta API Token', 'Meta Pixel ID',
    'if a contact reply and contact Has tag - A3PgJrLkzIwung4ab01U',
    'toss test user test', 'test test',
    'Id: iHMVjt33CphudEOinQv6', 'UaFUhbpJplSpKnLweIgW',
    'Better Sales Made SImple',
    'Do you want to delete blog.rubynail.co?',
    'Nail Artist Website Template (Beauty Salon) * CLONE FIRST BEFORE USING',
    'Sales Funnel TEMPLATE - Beauty  * CLONE BEFORE USING',
    'AI PROPOSAL', 'REMEMBER', 'NOT FOR', 'WHO NOT',                       # 커뮤니티 게시물 본문 조각
    'Test Snippet', 'Test Email Snippet',                                  # 사용자 스니펫 이름
    'Crm Hubspot Importer', 'crm-Hubspot-importer',                        # 가져오기 작업명
}
USER_DATA_RE = re.compile(r'benjamin|Myongki|Seokwoo', re.IGNORECASE)
PROPER_NOUN_EXACT = {
    'CloseBot', 'By CloseBot', 'By Data Driver', 'By Kixie', 'By Vapi',
    'Kixie PowerCall & SMS', '(by: Andrea Studios)',
    'Noto Sans KR', 'Hahmlet',                                             # 폰트명
}
GENERIC_EXACT = {
    ':grinning:', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abc def ghi jkl mno pqr stu',   # 폰트 프리뷰
    'bulk action', 'payment links', 'calendar event sync, google calendar',      # 마켓 검색 태그
}
DOTKEY_EXACT = {'{{ custom_values.schedule_page }}'}

ok_keys = [k.strip() for k in gap['ok_flat'] if k.strip()]
ok_set = set(ok_keys)
def is_typeahead_prefix(k):
    # 문자 단위 타이핑 애니메이션은 항상 +1 글자 체인을 남긴다 — 정확히 한 글자 긴 키가 있을 때만 조각으로 판정
    return any(len(o) == len(k) + 1 and o.startswith(k) for o in ok_set)

candidates, dropped = {}, []
seen = set()
for raw_key in gap['ok_flat']:
    k = raw_key.strip()
    if not k or k in seen: continue
    seen.add(k)
    src = gap['ok_detail'].get(raw_key, {}).get('src', '?')
    if k in en or k in ko:
        dropped.append(('already_in_dict', k)); continue
    if k in registered:
        dropped.append(('already_registered', k)); continue
    why = None
    if k in RUNTIME_EXACT or any(re.match(p, k) for p in RUNTIME_PATTERNS):
        why = 'runtime'
    elif is_typeahead_prefix(k):
        why = 'runtime_typeahead'
    elif k in USER_DATA_EXACT or USER_DATA_RE.search(k):
        why = 'user_data'
    elif k in PROPER_NOUN_EXACT:
        why = 'proper_noun'
    elif k in GENERIC_EXACT:
        why = 'generic_short'
    elif k in DOTKEY_EXACT:
        why = 'dotkey_camelcase'
    if why:
        dropped.append((why, k)); continue
    candidates[k] = {'src': src}

json.dump({'candidates': candidates, 'dropped': dropped}, open(sys.argv[1], 'w'), ensure_ascii=False, indent=1)

from collections import Counter
print(f"ok_flat 원본: {len(gap['ok_flat'])}")
print(f"병합 후보: {len(candidates)}")
print("제외 내역:", dict(Counter(w for w, _ in dropped)))
