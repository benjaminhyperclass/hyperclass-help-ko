#!/usr/bin/env python3
"""
v4 사전 1회성 교정 — _source/hc-ko-app.pretty.json 을 제자리에서 고친다.

지침 Stage 2 (A~D) + 검증에서 새로 드러난 3종(G/H/I).
멱등하다. 두 번 돌려도 결과가 같다.

    python3 scripts/fix-ko-app-v4.py --dry-run   # 무엇이 바뀌는지만 출력
    python3 scripts/fix-ko-app-v4.py             # 실제 수정
"""

import argparse
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, '..'))
sys.path.insert(0, HERE)

from whitelabel import whitelabel_check, whitelabel_fix, is_exception  # noqa: E402

PRETTY = os.path.join(ROOT, '_source/hc-ko-app.pretty.json')
REF = os.path.join(ROOT, '_source/hc-ko-app-reference.json')
TARGETS = os.path.join(ROOT, '_source/whitelabel-targets.json')

# ── 2-A 제외: 시스템이 문자열 일치로 쓰는 리터럴 ──────────────
PROTECT = set()

# ── 2-C 사용자 용어 플레이스홀더 복원 ─────────────────────────
NS_REPORT = 'reportingApp.locationDashboard.widgetDefinitions'
RESTORE = {
    f'{NS_REPORT}.titleOpportunityWonCount': '성사된 {opportunities}',
    f'{NS_REPORT}.titleOpportunityWonCountThisMonthForMe': '이번 달 성사된 {opportunities} (본인 기준)',
    f'{NS_REPORT}.titleOpportunityWonValue': '성사된 {opportunity} 금액',
    f'{NS_REPORT}.titleOpportunityWonValueThisMonthForMe': '이번 달 성사된 {opportunities} 금액 (본인 기준)',
    f'{NS_REPORT}.titleOpportunityWonValueThisMonth': '이번 달 성사된 {opportunities} 금액',
}

# ── 2-B 깨진 플레이스홀더 ─────────────────────────────────────
BROKEN_PH = {
    'conversationAI.emailSettings.replyBehavior.greetingPersonalization.placeholder':
        "안녕하세요 {'{'}{'{'}contact.first_name{'}'}{'}'}",
}

# ── 2-G 원문에 없는 플레이스홀더가 번역에 생긴 건 ──────────────
# vue-i18n 이 채울 값이 없어 화면에 "{n}" 이 그대로 노출된다.
ADDED_PH = {
    'dashboardStudio.cacheStatus.hoursAgo': '시간 전',
}

# ── 2-I DNT 확인 토큰 원복 ────────────────────────────────────
# 같은 모달의 안내문이 "'DELETE'를 입력하세요" 로 영문 토큰을 유지하는데
# 입력창 토큰만 한국어로 번역돼 있어, 안내대로 입력하면 통과하지 못한다.
DNT_RESTORE = {
    'campaign.email.lcEmail.migrationModal.confirmWord': 'CONFIRM',
    'crmObjectsSettingsApp.common.deleteConfirmKeyword': 'DELETE',
    'funnelWebsiteApp.store.deleteConfirmationToken': 'DELETE',
    'usersMicroApp.identityPlatform.deleteModal.keyword': 'DELETE',
    'marketplace.confirmText': 'CONFIRM',
    'product.deleteModal.confirmationPlaceholder': 'DELETE',
    'schemaList.deleteConfirmText': 'DELETE',
    'confirmModal.confirmPlaceholder': 'CONFIRM',
    'confirmModal.confirmText': 'CONFIRM',
    # 같은 모달의 동사 'Type' 이 명사 '유형' 으로 오역돼 있었다.
    # 화면에서 "유형 DELETE 확인" 으로 조립된다.
    'usersMicroApp.identityPlatform.deleteModal.type': '입력',
}

# ── 2-J 번역에서 빠진 플레이스홀더 복원 ───────────────────────
# 빠뜨리면 화면에서 정보가 사라지거나(예: {length} → "75자" 로 상수 고정)
# 안내가 실제 동작과 어긋난다(예: {keyword} → 'DELETE' 로 고정).
# 같은 경로라도 카탈로그마다 번역이 다른 것이 있어(dueDate: 마감일/만료일)
# "이 값이면 저 값으로" 형태로 값 단위 교체한다.
PH_RESTORE = {
    'common.createdAt': {'생성일': '생성일 {offset}'},
    'common.dueDate': {'마감일': '마감일 {offset}', '만료일': '만료일 {offset}'},
    'common.opportunityName': {'기회명': '{opportunity} 이름'},
    'common.unsavedChangesTitle': {
        '저장되지 않은 변경사항': '스마트 리스트 ‘{name}’에 저장되지 않은 변경사항이 있습니다!'},
    'notes.selectContact': {'연락처 선택': '{contact} 선택'},
    'notes.contactRequired': {'연락처를 선택해 주세요': '{contact}을(를) 선택해 주세요'},
    'invoice.settings.form.reminderSettings.reminderEnabledDescription': {
        '이후에 생성되는 모든 인보이스에는 다음 설정이 적용됩니다':
            '이후에 생성되는 모든 인보이스에는 {name} 설정이 적용됩니다.'},
    'invoice.settings.form.reminderSettings.reminderDisabledDescription': {
        '이후에 생성되는 인보이스에는 다음 구성이 적용되지 않습니다:':
            '이후에 생성되는 인보이스에는 {name} 설정이 적용되지 않습니다.'},
    'searchableFieldTooltip.searchMaxLengthError': {
        '검색 텍스트는 75자를 초과할 수 없습니다': '검색 텍스트는 {length}자를 초과할 수 없습니다'},
    'delete.enterDeleteToContinue': {
        "작업을 확인하려면 'DELETE'를 입력해주세요": "작업을 확인하려면 '{keyword}'를 입력해주세요"},
    'delete.typeDeleteToConfirm': {
        "확인하려면 'DELETE'를 입력하세요": "확인하려면 '{keyword}'를 입력하세요"},
    'delete.deletingWarning': {
        '{object} 를 삭제하면 해당 연결, 메모, 태스크도 제거됩니다. 해당 레코드의 활성 워크플로도 중지됩니다.':
            '{object}을(를) 삭제하면 연결된 대화, 메모, {opportunityObject}, 작업, 예약, 수동 작업, '
            '커뮤니티 그룹 소유자도 함께 제거됩니다. 해당 {object}의 활성 캠페인과 워크플로도 중지됩니다.'},
    # 화이트라벨: 서브도메인 없는 gohighlevel.com 은 whitelabel.py 의
    # `[\w-]+\.gohighlevel\.com` 패턴에 걸리지 않아 남았다. 같은 문장의
    # www.gohighlevel.com/dev-slack 은 이미 hyperclass.ai 로 바뀌어 있다.
    'agency.agencyAPIKeySettings.developerCouncilInfo': {
        '매월 한 번 오피스 아워로 모이는 개발자 협의회(<a href="https://gohighlevel.com/events">'
        'https://gohighlevel.com/events</a>)와 커뮤니티 및 API 팀의 도움을 받을 수 있는 개발자 '
        '커뮤니티 Slack 채널을 운영하고 있습니다. '
        '(<a href="https://hyperclass.ai/dev-slack">https://hyperclass.ai/dev-slack</a>)':
            '매월 한 번 오피스 아워로 모이는 개발자 협의회(<a href="https://hyperclass.ai/events">'
            'https://hyperclass.ai/events</a>)와 커뮤니티 및 API 팀의 도움을 받을 수 있는 개발자 '
            '커뮤니티 Slack 채널을 운영하고 있습니다. '
            '(<a href="https://hyperclass.ai/dev-slack">https://hyperclass.ai/dev-slack</a>)'},
}

# ── 2-K `flat` 교정 ───────────────────────────────────────────
# 종전에 "core/apps 에 없으니 배포되지 않는다"고 보고 참조표만 고쳤는데 틀렸다.
# 이 셋은 core.flat 에 실려 배포되고, 로더가 wrapTRef 에서 core.flat[key] 로 쓴다.
#   confirmModal.* : 안내는 'CONFIRM' 입력인데 비교 대상이 '확인' 이면 확인이 안 눌린다
#   hoursAgo       : 원문에 없는 {n} 이라 화면에 리터럴 '{n}' 이 그대로 노출된다
FLAT_FIX = {
    'confirmModal.confirmPlaceholder': 'CONFIRM',
    'confirmModal.confirmText': 'CONFIRM',
    'dashboardStudio.cacheStatus.hoursAgo': '시간 전',
}

# ── 2-M 브랜드 공백형·약칭 ────────────────────────────────────
# whitelabel.py 는 'LeadConnector' 붙여쓰기만 본다. 공백형과 LC 약칭이
# 그대로 새어 나가 원 제품 브랜드가 한국 고객 화면에 노출된다.
# 긴 것부터 치환해야 'Lead Connector Email' 이 '하이퍼클래스 Email' 로 잘리지 않는다.
BRAND_SPACED = [
    ('Lead Connector Phone System', '하이퍼클래스 전화 시스템'),
    ('Lead connector Phone System', '하이퍼클래스 전화 시스템'),
    ('Lead Connector Email', '하이퍼클래스 이메일'),
    ('Lead connector Email', '하이퍼클래스 이메일'),
    ('LC Phone System', '하이퍼클래스 전화 시스템'),
    ('LC Phone 시스템', '하이퍼클래스 전화 시스템'),
    ('LC Email', '하이퍼클래스 이메일'),
    ('LC Phone', '하이퍼클래스 전화'),
    ('Lead Connector', '하이퍼클래스'),
    ('Lead connector', '하이퍼클래스'),
    ('lead connector', '하이퍼클래스'),
]


def brand_spaced(s):
    for a, b in BRAND_SPACED:
        if a in s:
            s = s.replace(a, b)
    return s

# ── 2-L 조사 ──────────────────────────────────────────────────
# '하이퍼클래스' 는 받침이 없다(스). 받침 있는 말에 붙는 조사가 오면 바꾼다.
PARTICLE = {'은': '는', '이': '가', '을': '를', '과': '와', '으로': '로', '아': '야'}
PARTICLE_RE = re.compile(r'하이퍼클래스(으로|은|이|을|과|아)(?![가-힣])')

# 원문이 'HighLevel 을' 처럼 **공백을 두고** 조사를 붙여 놓은 경우가 있다.
# 브랜드만 치환하면 '하이퍼클래스 을' 이 되어 공백과 조사가 둘 다 틀린다.
# 한국어 조사는 앞말에 붙여 쓰므로 공백을 없애고 조사도 함께 바로잡는다.
# 어절 경계가 모호한 조사(도/만/나/고/며 등)는 오탐 위험이 있어 제외한다.
SPACED_JOSA = ['으로', '에서', '은', '는', '이', '가', '을', '를', '과', '와', '의', '에', '로']
SPACED_RE = re.compile(r'하이퍼클래스\s+(' + '|'.join(SPACED_JOSA) + r')(?![가-힣])')


def fix_particles(s):
    """공백형을 먼저 붙인 뒤 붙임형 조사를 교정한다. 순서가 중요하다."""
    s = SPACED_RE.sub(lambda m: '하이퍼클래스' + m.group(1), s)
    return PARTICLE_RE.sub(lambda m: '하이퍼클래스' + PARTICLE[m.group(1)], s)

# ── 2-D _text 무의미 항목 (키 == 값) ──────────────────────────
TEXT_DROP = ['AI 요약', 'Facebook 광고 보고서', 'Google 광고', 'Google 광고 보고서', 'URL 리다이렉트']

# ── 2-H _text 플레이스홀더 이름 원복 ──────────────────────────
# 플레이스홀더는 앱이 이름으로 찾아 값을 채운다. 이름을 번역하면 영영 채워지지 않는다.
TEXT_PH = {
    'Add an {opportunity}': '{opportunity} 추가',
    "Create '{tag}'": "'{tag}' 생성",
    'User is not allowed to view {opportunities}.': '사용자는 {opportunities}을(를) 볼 수 없습니다.',
    "{Contact} Tagged as '{tag}'": "'{tag}'로 태그된 {Contact}",
}


def walk_set(node, parts, value):
    """중첩 dict 에서 dotted 경로를 찾아 값을 바꾼다. 바꿨으면 True."""
    for p in parts[:-1]:
        if not isinstance(node, dict) or p not in node:
            return False
        node = node[p]
    last = parts[-1]
    if isinstance(node, dict) and isinstance(node.get(last), str):
        if node[last] == value:
            return False        # 이미 반영됨 (멱등)
        node[last] = value
        return True
    return False


def walk_get(node, parts):
    for p in parts:
        if not isinstance(node, dict) or p not in node:
            return None
        node = node[p]
    return node if isinstance(node, str) else None


def catalogs(o):
    """(라벨, 카탈로그 dict) — host 와 apps 24종."""
    yield 'host', o['host']
    meta = o.get('appsMeta') or {}
    for fp, cat in o['apps'].items():
        yield 'app:' + str((meta.get(fp) or {}).get('el', fp[:16])), cat


def set_everywhere(o, dotted, value, log, tag):
    """host 와 모든 앱 카탈로그에서 같은 경로를 찾아 전부 바꾼다."""
    parts = dotted.split('.')
    n = 0
    for label, cat in catalogs(o):
        before = walk_get(cat, parts)
        if before is None:
            continue
        if walk_set(cat, parts, value):
            log.append((tag, label, dotted, before, value))
            n += 1
    return n


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--dry-run', action='store_true')
    args = ap.parse_args()

    o = json.load(open(PRETTY, encoding='utf-8'))
    tgt = json.load(open(TARGETS, encoding='utf-8'))
    PROTECT.update(tgt['protect'])

    log = []
    counts = {}

    # ── 2-A 화이트라벨 ─────────────────────────────────────────
    # 키 목록이 아니라 "위반이 실제로 있는 값" 을 기준으로 돈다.
    # 같은 경로가 host 와 앱 카탈로그에 중복 존재하는 경우까지 함께 잡힌다.
    wl = 0
    for label, cat in catalogs(o):
        stack = [([], cat)]
        while stack:
            path, node = stack.pop()
            for k, v in list(node.items()):
                if isinstance(v, dict):
                    stack.append((path + [k], v))
                elif isinstance(v, str):
                    dotted = '.'.join(path + [k])
                    if dotted in PROTECT or is_exception(v):
                        continue
                    if not whitelabel_check(v):
                        continue
                    fixed = whitelabel_fix(v)
                    if fixed != v:
                        node[k] = fixed
                        log.append(('2-A 화이트라벨', label, dotted, v, fixed))
                        wl += 1
    # flat 과 _text 도 배포된다. 종전에 빠져 있었다.
    for store in ('flat', '_text'):
        for k, v in list(o[store].items()):
            if not isinstance(v, str) or k in PROTECT or is_exception(v):
                continue
            if not whitelabel_check(v):
                continue
            fixed = whitelabel_fix(v)
            if fixed != v:
                o[store][k] = fixed
                log.append(('2-A 화이트라벨', store, k, v, fixed))
                wl += 1
    counts['2-A 화이트라벨 교체'] = wl

    # ── 2-M 브랜드 공백형·약칭 ─────────────────────────────────
    n = 0
    for label, cat in catalogs(o):
        stack = [([], cat)]
        while stack:
            path, node = stack.pop()
            for k, val in list(node.items()):
                if isinstance(val, dict):
                    stack.append((path + [k], val))
                elif isinstance(val, str):
                    new = brand_spaced(val)
                    if new != val:
                        node[k] = new
                        log.append(('2-M 브랜드 공백형', label, '.'.join(path + [k]), val, new))
                        n += 1
    for store in ('flat', '_text'):
        for k, val in list(o[store].items()):
            if not isinstance(val, str):
                continue
            new = brand_spaced(val)
            if new != val:
                o[store][k] = new
                log.append(('2-M 브랜드 공백형', store, k, val, new))
                n += 1
    counts['2-M 브랜드 공백형·약칭'] = n

    # ── 2-K flat 교정 ──────────────────────────────────────────
    n = 0
    for k, val in FLAT_FIX.items():
        if o['flat'].get(k) != val:
            log.append(('2-K flat 교정', 'flat', k, o['flat'].get(k), val))
            o['flat'][k] = val
            n += 1
    counts['2-K flat 교정'] = n

    # ── 2-B / 2-G / 2-C / 2-I : 경로 지정 교체 ─────────────────
    for tag, table in (('2-B 깨진 플레이스홀더', BROKEN_PH),
                       ('2-C 용어 플레이스홀더 복원', RESTORE),
                       ('2-G 없던 플레이스홀더 제거', ADDED_PH),
                       ('2-I DNT 토큰 원복', DNT_RESTORE)):
        n = 0
        for dotted, value in table.items():
            n += set_everywhere(o, dotted, value, log, tag)
        counts[tag] = n

    # ── 2-J 값 단위 플레이스홀더 복원 ──────────────────────────
    n = 0
    for dotted, table in PH_RESTORE.items():
        parts = dotted.split('.')
        for label, cat in catalogs(o):
            cur = walk_get(cat, parts)
            if cur is None or cur not in table:
                continue
            new = table[cur]
            if walk_set(cat, parts, new):
                log.append(('2-J 플레이스홀더 복원', label, dotted, cur, new))
                n += 1
    counts['2-J 플레이스홀더 복원'] = n

    # ── 2-L 조사 교정 ──────────────────────────────────────────
    # 화이트라벨 치환의 부작용. 'HighLevel'(받침 있음)에 붙던 조사가 그대로 남아
    # 받침 없는 '하이퍼클래스'에 '은/이/을/과/으로' 가 붙었다.
    n = 0
    for label, cat in catalogs(o):
        stack = [([], cat)]
        while stack:
            path, node = stack.pop()
            for k, val in list(node.items()):
                if isinstance(val, dict):
                    stack.append((path + [k], val))
                elif isinstance(val, str) and '하이퍼클래스' in val:
                    new = fix_particles(val)
                    if new != val:
                        node[k] = new
                        log.append(('2-L 조사 교정', label, '.'.join(path + [k]), val, new))
                        n += 1
    for store in ('flat', '_text'):
        for k, val in list(o[store].items()):
            if isinstance(val, str) and '하이퍼클래스' in val:
                new = fix_particles(val)
                if new != val:
                    o[store][k] = new
                    log.append(('2-L 조사 교정', store, k, val, new))
                    n += 1
    counts['2-L 조사 교정'] = n

    # ── 2-D _text 무의미 항목 제거 ─────────────────────────────
    t = o['_text']
    n = 0
    for k in TEXT_DROP:
        if k in t:
            log.append(('2-D _text 무의미 제거', '_text', k, t[k], '(삭제)'))
            del t[k]
            n += 1
    counts['2-D _text 무의미 제거'] = n

    # ── 2-H _text 플레이스홀더 이름 원복 ───────────────────────
    n = 0
    for k, v in TEXT_PH.items():
        if k in t and t[k] != v:
            log.append(('2-H _text 플레이스홀더', '_text', k, t[k], v))
            t[k] = v
            n += 1
    counts['2-H _text 플레이스홀더 원복'] = n

    # ── 출력 ───────────────────────────────────────────────────
    print(f'{"항목":<28}{"건수":>8}')
    print('-' * 38)
    for k, vv in counts.items():
        print(f'{k:<26}{vv:>8,}')
    print('-' * 38)
    print(f'{"합계":<26}{sum(counts.values()):>8,}')
    print()
    for tag in counts:
        sample = [x for x in log if x[0] == tag][:4]
        if not sample:
            continue
        print(f'── {tag} 예시')
        for _, label, key, before, after in sample:
            print(f'   [{label}] {key}')
            print(f'      전: {before[:100]}')
            print(f'      후: {after[:100]}')
        print()

    if args.dry_run:
        print('※ --dry-run : 파일을 쓰지 않았습니다.')
        return 0

    with open(PRETTY, 'w', encoding='utf-8') as f:
        json.dump(o, f, ensure_ascii=False, indent=1)
    print(f'저장: {os.path.relpath(PRETTY, ROOT)}')

    # reference 의 ko 도 맞춰 둔다 — 검증은 배포본을 보지만,
    # 사람이 키를 찾을 때 쓰는 대조표가 어긋나 있으면 다음 수정이 틀어진다.
    ref = json.load(open(REF, encoding='utf-8'))
    synced = 0
    for label, cat in catalogs(o):
        stack = [([], cat)]
        while stack:
            path, node = stack.pop()
            for k, v in node.items():
                if isinstance(v, dict):
                    stack.append((path + [k], v))
                elif isinstance(v, str):
                    dotted = '.'.join(path + [k])
                    e = ref.get(dotted)
                    if isinstance(e, dict) and e.get('ko') != v:
                        e['ko'] = v
                        synced += 1
    # flat 은 dotted key → ko 평면이라 위 순회에 안 잡힌다. 따로 맞춘다.
    for k, val in o['flat'].items():
        e = ref.get(k)
        if isinstance(e, dict) and isinstance(val, str) and e.get('ko') != val:
            e['ko'] = val
            synced += 1

    with open(REF, 'w', encoding='utf-8') as f:
        json.dump(ref, f, ensure_ascii=False, indent=1)
    print(f'reference ko 동기화: {synced:,}건')
    return 0


if __name__ == '__main__':
    sys.exit(main())
