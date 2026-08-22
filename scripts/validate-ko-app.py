#!/usr/bin/env python3
"""
메인 앱 한글팩 v4 (hc-ko-app-*) 검증기

기존 ui-updater.yml 의 게이트는 dashboard-ko 계열 평면 사전만 본다.
v4 사전은 중첩 카탈로그라 그 게이트에 걸리지 않으므로 이 스크립트가 대신 막는다.

검사:
  C1 화이트라벨 브랜드 잔존
  C2 DNT 리터럴(DELETE/CONFIRM/...) 소실
  C3 플레이스홀더 불일치
  C4 복수형 구분자(|) 개수 불일치
  C5 vue-i18n 이스케이프({'@'}, {'|'}) 소실
  C6 HTML 태그 개수 불일치
  C7 _text 안전성

위반이 있으면 sys.exit(1). 경고만 하고 통과시키지 않는다.

사용법:
    python3 scripts/validate-ko-app.py
    python3 scripts/validate-ko-app.py --core data/hc-ko-app-core.json \
        --apps data/hc-ko-app-apps.json --reference _source/hc-ko-app-reference.json
    python3 scripts/validate-ko-app.py --json report.json   # 기계 판독용 리포트 추가 출력
"""

import argparse
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, '..'))
sys.path.insert(0, HERE)

from whitelabel import whitelabel_check, is_exception  # noqa: E402
from exclusions import load_prefixes, english_originals  # noqa: E402


# ── C1 화이트리스트 ─────────────────────────────────────────────
# 시스템이 문자열 일치로 사용하는 리터럴. 브랜드명을 바꾸면 기능이 깨진다.
# 여기 넣은 키는 화이트라벨 검사에서만 빠지고 C2~C6 은 그대로 받는다.
WHITELABEL_ALLOW_KEYS = {
    'agentLogsApp.agentLogs.table.filterPopover.skillIdPlaceholder',
    'integrationsApp.facebookDiagnostic.crm_integrations_submit_test_lead_marker_skipped',
    'integrationsApp.facebookDiagnostic.crm_integrations_submit_test_lead_fields_helper',
}

# ── C1 보강: whitelabel.py 가 놓치는 브랜드 표기 ────────────────
# 'LeadConnector' 붙여쓰기만 검사하고 있어 공백형·약칭이 새어 나간다.
# whitelabel.py 본체 수정은 승인 사항이라 여기서 검사만 보탠다.
EXTRA_BRAND = [
    (re.compile(r'(?<![A-Za-z])Lead\s+Connector(?![A-Za-z])', re.I), 'Lead Connector(공백형) 잔존'),
    (re.compile(r'(?<![A-Za-z])LC\s*Phone(?![A-Za-z])'), 'LC Phone 잔존'),
    (re.compile(r'(?<![A-Za-z])LC\s*Email(?![A-Za-z])'), 'LC Email 잔존'),
]

# ── C2 DNT 리터럴 ──────────────────────────────────────────────
DNT_TOKENS = ['DELETE', 'CONFIRM', 'REMOVE', 'CANCEL', 'TRANSFER', 'DISABLE', 'RESET']
DNT_RE = {t: re.compile(r'(?<![A-Za-z])' + t + r'(?![A-Za-z])') for t in DNT_TOKENS}

# ── C3 플레이스홀더 ────────────────────────────────────────────
# vue-i18n 이스케이프 {'@'} {'|'} 는 C5 가 따로 본다 — 여기서는 먼저 걷어낸다.
ESCAPE_RE = re.compile(r"\{'[^']*'\}")
PH_PATTERNS = [
    re.compile(r'\{\{\s*[\w.]+\s*\}\}'),   # {{var}}
    re.compile(r'(?<!\{)\{\s*[\w.]+\s*\}(?!\})'),  # {name}
    re.compile(r'\$\{[^}]*\}'),            # ${x}
    re.compile(r'%[sd]'),                  # %s %d
]
# 한국어에 복수형이 없으므로 제거하는 것이 정상 (지침 2-E)
PH_IGNORE = {'{plural}'}


def flatten(d, prefix=''):
    """중첩 카탈로그를 dotted key -> str 로 편다. 문자열 리프만 낸다."""
    out = {}
    stack = [(prefix, d)]
    while stack:
        pre, node = stack.pop()
        if isinstance(node, dict):
            for k, v in node.items():
                stack.append((f'{pre}.{k}' if pre else str(k), v))
        elif isinstance(node, list):
            for i, v in enumerate(node):
                stack.append((f'{pre}[{i}]', v))
        elif isinstance(node, str):
            out[pre] = node
    return out


def escapes(s):
    return sorted(ESCAPE_RE.findall(s))


def placeholders(s):
    """이스케이프를 제거한 뒤 플레이스홀더를 뽑아 정렬 리스트로 낸다."""
    s = ESCAPE_RE.sub(' ', s)
    found = []
    for pat in PH_PATTERNS:
        found.extend(pat.findall(s))
    return sorted(x for x in found if x not in PH_IGNORE)


TAG_RE = re.compile(r'</?([A-Za-z][\w:-]*)[^>]*>')

# 실제 HTML 태그만 비교한다. `<Deleted>` → `<삭제됨>` 처럼 꺾쇠를 강조 기호로 쓴
# 리터럴은 태그가 아니므로 번역돼도 정상 (지침 C6 예외).
HTML_TAGS = {
    'a', 'abbr', 'b', 'br', 'button', 'code', 'div', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'hr', 'i', 'img', 'input', 'label', 'li', 'mark', 'ol', 'p', 'pre', 's', 'small', 'span',
    'strong', 'sub', 'sup', 'table', 'tbody', 'td', 'th', 'thead', 'tr', 'u', 'ul',
}


def html_tags(s):
    return sorted(m.lower() for m in TAG_RE.findall(s) if m.lower() in HTML_TAGS)


UNSAFE_REPL = ["$&", "$'", '$`', '$$']

# ── C8 도메인에 한글 혼입 ──────────────────────────────────────
# 번역기가 'gohighlevel.com/x' 를 '하이퍼클래스.com/x' 로 옮겨 놓은 사고가 있었다.
# 존재하지 않는 도메인이라 링크가 죽는데, 브랜드가 이미 지워져 화이트라벨 검사에는
# 걸리지 않는다. 도메인 라벨에 한글이 있으면 무조건 위반이다.
DOMAIN_RE = re.compile(r'[\w가-힣][\w가-힣.-]*\.(?:com|net|org|io|ai|co|kr)(?![\w가-힣])')
HANGUL_RE = re.compile(r'[가-힣]')

# ── C9 단독 DNT 토큰 회귀 고정 목록 ────────────────────────────
# 앱이 사용자 입력과 **문자열 비교**에 쓰는 리터럴 그 자체다.
# 키 이름이 용도를 말한다 — Keyword / Token / confirmWord / confirmationPlaceholder.
# 번역되면 안내대로 입력해도 통과하지 못한다(= 조용한 기능 고장).
# 이 목록은 하드코딩이다. 앞으로 이 키들이 영문 토큰이 아닌 값을 가지면 무조건 실패.
DNT_LOCKED_KEYS = {
    'product.deleteModal.confirmationPlaceholder': 'DELETE',
    'crmObjectsSettingsApp.common.deleteConfirmKeyword': 'DELETE',
    'funnelWebsiteApp.store.deleteConfirmationToken': 'DELETE',
    'usersMicroApp.identityPlatform.deleteModal.keyword': 'DELETE',
    'schemaList.deleteConfirmText': 'DELETE',
    'confirmModal.confirmPlaceholder': 'CONFIRM',
    'confirmModal.confirmText': 'CONFIRM',
    'marketplace.confirmText': 'CONFIRM',
    'campaign.email.lcEmail.migrationModal.confirmWord': 'CONFIRM',
}


# ── C11 서브계정 옵트아웃 게이트 유실 감시 ─────────────────────
# 2026-06-10(8fabb6a)에 min.js 만 손으로 고쳐 hcEx() 를 넣었는데 빌드 템플릿에는
# 없어서 2026-06-23 자동 빌드가 통째로 날렸다. 그 뒤 두 달 반 동안 Custom JS 핀을
# @8fabb6a 에서 움직일 수 없었다 — 움직이면 그 고객의 옵트아웃이 깨지기 때문이다.
# 같은 유실이 다시 일어나지 않도록 템플릿과 산출물 양쪽을 강제한다.
GATE_FILES = [
    ('scripts/build-dashboard-ko.py', '빌드 템플릿', True),
    ('js/dashboard-ko.js', '빌드 산출물(소스)', True),
    ('js/dashboard-ko.min.js', '빌드 산출물(min)', False),   # 다음 빌드에서 생성됨
]
GATE_ENTRYPOINTS = ['rDoc', 'r', 'rIframe']


def check_gate(root):
    """hcEx() 정의와 세 진입점 가드가 살아 있는지."""
    out = []
    for rel, label, hard in GATE_FILES:
        path = os.path.join(root, rel)
        if not os.path.exists(path):
            continue
        with open(path, encoding='utf-8') as f:
            src = f.read()
        has_def = 'function hcEx(' in src
        # min 은 함수명이 뭉개지므로 폴백 ID 존재로 판정한다
        if not has_def and rel.endswith('.min.js'):
            has_def = 'HC_I18N_EXCLUDE' in src
        guards = src.count('hcEx()') - (1 if 'function hcEx(' in src else 0)
        ok = has_def and guards >= len(GATE_ENTRYPOINTS)
        out.append({'file': rel, 'label': label, 'hard': hard,
                    'has_def': has_def, 'guards': guards, 'ok': ok})
    return out


def collect(core, apps):
    """(출처, dotted key, 한국어 값) 목록. 화이트라벨 검사 대상 전체."""
    rows = []
    for k, v in flatten(core.get('host', {})).items():
        rows.append(('host', k, v))
    for fp, cat in (apps.get('apps') or {}).items():
        meta = (apps.get('appsMeta') or {}).get(fp) or {}
        tag = 'app:' + str(meta.get('el', fp[:20]))
        for k, v in flatten(cat).items():
            rows.append((tag, k, v))
    for k, v in (core.get('flat') or {}).items():
        if isinstance(v, str):
            rows.append(('flat', k, v))
    for k, v in (core.get('_text') or {}).items():
        if isinstance(v, str):
            rows.append(('_text', k, v))
    return rows


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--core', default=os.path.join(ROOT, 'data/hc-ko-app-core.json'))
    ap.add_argument('--apps', default=os.path.join(ROOT, 'data/hc-ko-app-apps.json'))
    ap.add_argument('--reference', default=os.path.join(ROOT, '_source/hc-ko-app-reference.json'))
    ap.add_argument('--json', help='리포트를 JSON 으로도 저장')
    ap.add_argument('--max-show', type=int, default=8, help='유형별 출력 건수')
    args = ap.parse_args()

    for p in (args.core, args.apps, args.reference):
        if not os.path.exists(p):
            print(f'❌ 파일 없음: {p}')
            return 2

    core = json.load(open(args.core, encoding='utf-8'))
    apps = json.load(open(args.apps, encoding='utf-8'))
    ref = json.load(open(args.reference, encoding='utf-8'))

    rows = collect(core, apps)
    text = core.get('_text') or {}

    v = {c: [] for c in ('C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11')}

    # ── C1 화이트라벨 ──────────────────────────────────────────
    for src, key, ko in rows:
        if key in WHITELABEL_ALLOW_KEYS or is_exception(ko):
            continue
        for x in whitelabel_check(ko):
            v['C1'].append({'src': src, 'key': key, 'type': x['type'], 'ko': ko[:90]})
        # whitelabel.py 의 checks 는 'LeadConnector'(붙여쓰기)만 본다.
        # 화이트라벨 SaaS 에서 원 제품 브랜드의 공백형·약칭이 그대로 노출된다.
        for pat, msg in EXTRA_BRAND:
            if pat.search(ko):
                v['C1'].append({'src': src, 'key': key, 'type': msg, 'ko': ko[:90]})

    # ── C2~C6 : en/ko 쌍이 있어야 검사 가능 ────────────────────
    # 영어 원문은 reference 에서, 한국어는 **배포본(core/apps)** 에서 가져온다.
    # reference 의 ko 를 쓰면 배포본을 고쳐도 검사 결과가 따라오지 않아 게이트가 무력해진다.
    # `flat` 도 반드시 포함한다. 로더가 wrapTRef 에서 core.flat[key] 로 직접 쓰는
    # 배포 사전이다. 종전에 host/app 만 넣어 flat 706건이 C2~C6 사각지대에 있었고,
    # 거기에 실제 위반 3건(CONFIRM→확인 2, 없던 {n} 추가 1)이 살아 있었다.
    ko_by_key = {}
    for src, key, ko in rows:
        if src == 'host' or src == 'flat' or src.startswith('app:'):
            ko_by_key.setdefault(key, set()).add(ko)

    pairs = []
    for key, o in ref.items():
        if not (isinstance(o, dict) and isinstance(o.get('en'), str)):
            continue
        en = o['en']
        variants = ko_by_key.get(key)
        if variants:
            for ko in sorted(variants):
                pairs.append(('ref', key, en, ko))
        elif isinstance(o.get('ko'), str):
            pairs.append(('ref(미배포)', key, en, o['ko']))
    # _text 는 키 자체가 영어 원문이다
    for en, ko in text.items():
        if isinstance(en, str) and isinstance(ko, str):
            pairs.append(('_text', en, en, ko))

    for src, key, en, ko in pairs:
        # C2 DNT
        need = [t for t in DNT_TOKENS if DNT_RE[t].search(en)]
        miss = [t for t in need if not DNT_RE[t].search(ko)]
        if miss:
            v['C2'].append({'src': src, 'key': key[:70], 'miss': miss, 'en': en[:60], 'ko': ko[:60]})

        # C3 플레이스홀더
        pe, pk = placeholders(en), placeholders(ko)
        if pe != pk:
            v['C3'].append({'src': src, 'key': key[:70], 'en_ph': pe, 'ko_ph': pk,
                            'en': en[:70], 'ko': ko[:70]})

        # C4 복수형 구분자
        if en.count('|') != ko.count('|'):
            v['C4'].append({'src': src, 'key': key[:70], 'en_n': en.count('|'), 'ko_n': ko.count('|'),
                            'en': en[:60], 'ko': ko[:60]})

        # C5 vue-i18n 이스케이프 — 원문에 있으면 번역에도 있어야 한다
        ee, ek = escapes(en), escapes(ko)
        missing_esc = [x for x in set(ee) if ee.count(x) > ek.count(x)]
        if missing_esc:
            v['C5'].append({'src': src, 'key': key[:70], 'miss': sorted(missing_esc),
                            'en': en[:60], 'ko': ko[:60]})

        # C6 HTML 태그 — 태그명이 한글인 리터럴(<삭제됨>)은 TAG_RE 가 잡지 않는다
        te, tk = html_tags(en), html_tags(ko)
        if te != tk:
            v['C6'].append({'src': src, 'key': key[:70], 'en_tags': te, 'ko_tags': tk,
                            'en': en[:60], 'ko': ko[:60]})

    # ── C7 _text 안전성 ────────────────────────────────────────
    for en, ko in text.items():
        why = []
        if len(en.strip()) < 3:
            why.append('키 3자 미만')
        if re.fullmatch(r'[\d\W_]+', en.strip() or ' '):
            why.append('숫자·기호만')
        if any(u in ko for u in UNSAFE_REPL):
            why.append('replace 특수시퀀스')
        if en.strip() == ko.strip():
            why.append('키==값(무의미)')
        if why:
            v['C7'].append({'key': en[:60], 'ko': ko[:60], 'why': why})

    # ── C8 도메인에 한글 혼입 ──────────────────────────────────
    for src, key, ko in rows:
        for m in DOMAIN_RE.finditer(ko):
            dom = m.group(0)
            if HANGUL_RE.search(dom):
                v['C8'].append({'src': src, 'key': key, 'domain': dom, 'ko': ko[:90]})
                break

    # ── C9 단독 DNT 토큰 (회귀 고정) ───────────────────────────
    # ko_by_key 는 host/flat/app 를 전부 담고 있다 — 어느 surface 에 있든 잡힌다.
    for key, token in DNT_LOCKED_KEYS.items():
        variants = ko_by_key.get(key)
        if not variants:
            continue                      # 배포본에 없으면 검사 대상 아님
        for ko in sorted(variants):
            if ko.strip() != token:
                v['C9'].append({'key': key, 'expected': token, 'got': ko[:60],
                                'why': '앱이 사용자 입력과 비교하는 리터럴 — 번역되면 확인 절차를 통과할 수 없다'})

    # ── C10 제외 레지스트리 강제 ───────────────────────────────
    ex_prefixes = load_prefixes()
    if ex_prefixes:
        ex_en = english_originals(ex_prefixes)
        # 경로 기준 — core/apps 의 host·apps·flat
        for src, key, ko in rows:
            if src == '_text':
                continue
            if any(key.startswith(p) for p in ex_prefixes):
                v['C10'].append({'src': src, 'key': key, 'ko': ko[:60], 'why': '제외 등재 네임스페이스'})
        # 영어 원문 기준 — _text 와 레거시 사전
        for en_key in text:
            if en_key.strip() in ex_en:
                v['C10'].append({'src': '_text', 'key': en_key[:70], 'ko': text[en_key][:60],
                                 'why': '제외 등재 네임스페이스의 영어 원문'})
        for path, name in ((os.path.join(ROOT, 'data/ghl-i18n-ko.json'), 'ghl-i18n-ko.json'),
                           (os.path.join(ROOT, 'data/manual-dict-v401.json'), 'manual-dict-v401.json')):
            if not os.path.exists(path):
                continue
            with open(path, encoding='utf-8') as f:
                legacy = json.load(f)
            for en_key, ko in legacy.items():
                if isinstance(en_key, str) and en_key.strip() in ex_en:
                    v['C10'].append({'src': name, 'key': en_key[:70], 'ko': str(ko)[:60],
                                     'why': '제외 등재 네임스페이스의 영어 원문 (레거시 사전)'})

    # ── C11 옵트아웃 게이트 유실 감시 ──────────────────────────
    gate_rows = check_gate(ROOT)
    for g in gate_rows:
        if g['ok'] or not g['hard']:
            continue
        v['C11'].append({'file': g['file'], 'label': g['label'],
                         'hcEx정의': g['has_def'], '가드': g['guards'],
                         'why': 'hcEx() 정의 또는 rDoc/r/rIframe 가드가 없다 — '
                                '제외 계정의 옵트아웃이 깨진다'})

    # ── 리포트 ─────────────────────────────────────────────────
    LABEL = {
        'C1': '화이트라벨 브랜드 잔존',
        'C2': 'DNT 리터럴 소실',
        'C3': '플레이스홀더 불일치',
        'C4': '복수형 구분자 불일치',
        'C5': 'vue-i18n 이스케이프 소실',
        'C6': 'HTML 태그 불일치',
        'C7': '_text 안전성',
        'C8': '도메인에 한글 혼입',
        'C9': '단독 DNT 토큰 (회귀 고정)',
        'C10': '제외 네임스페이스 잔존',
        'C11': '옵트아웃 게이트 유실',
    }
    for g in gate_rows:
        mark = '✅' if g['ok'] else ('❌' if g['hard'] else '⏳ 다음 빌드에서 반영')
        print(f'  옵트아웃 게이트 {g["label"]:<18} {g["file"]:<34} 가드 {g["guards"]}  {mark}')
    print()
    print(f'검사 대상 — 한국어 값 {len(rows):,}개 / en·ko 쌍 {len(pairs):,}개 / _text {len(text):,}개')
    print()
    print(f'{"검사":<6}{"항목":<26}{"위반":>8}')
    print('-' * 42)
    for c in ('C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11'):
        print(f'{c:<6}{LABEL[c]:<24}{len(v[c]):>8,}')
    print('-' * 42)
    total = sum(len(x) for x in v.values())
    print(f'{"합계":<30}{total:>8,}')
    print()

    for c in ('C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11'):
        if not v[c]:
            continue
        print(f'── {c} {LABEL[c]} ({len(v[c]):,}건) ' + '─' * 20)
        for x in v[c][:args.max_show]:
            print('   ' + json.dumps(x, ensure_ascii=False)[:240])
        if len(v[c]) > args.max_show:
            print(f'   … 외 {len(v[c]) - args.max_show:,}건')
        print()

    if args.json:
        with open(args.json, 'w', encoding='utf-8') as f:
            json.dump({'counts': {c: len(v[c]) for c in v}, 'violations': v},
                      f, ensure_ascii=False, indent=1)
        print(f'리포트 저장: {args.json}')

    # 차단 대상은 **배포본에 실제로 들어가는 값**뿐이다.
    #  - C7 은 품질 리포트라 막지 않는다.
    #  - src='ref(미배포)' 는 크롤에는 잡혔지만 core/apps 에 없는 키다.
    #    로더가 쓰지 않으므로 런타임에 영향이 없다. 향후 편입 대비해 세어만 둔다.
    def blocking_rows(c):
        return [x for x in v[c] if x.get('src') != 'ref(미배포)']

    HARD = ('C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C8', 'C9', 'C10', 'C11')
    blocking = sum(len(blocking_rows(c)) for c in HARD)
    shelved = sum(len(v[c]) for c in HARD) - blocking
    if blocking:
        print(f'❌ 차단 위반 {blocking:,}건 — 배포를 중단합니다. '
              f'(미배포 키 {shelved:,}건 / C7 {len(v["C7"])}건은 경고)')
        return 1
    print(f'✅ 차단 위반 0건 (미배포 키 경고 {shelved:,}건 / C7 경고 {len(v["C7"])}건)')
    return 0


if __name__ == '__main__':
    sys.exit(main())
