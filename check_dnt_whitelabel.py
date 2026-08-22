#!/usr/bin/env python3
"""
hc-ko v4 배포 사전 검사기 — DNT(타이핑 리터럴) + 화이트라벨 브랜드 누출

기존 C1~C7 검사의 두 사각지대를 메운다.
  (1) 검사 대상에 flat 이 빠져 있던 문제 → 배포되는 4개 surface 전부를 순회
  (2) 대소문자 구분 없는 브랜드 검사 → 공백형·약칭·소문자형을 모두 포함

사용:
  python3 check_dnt_whitelabel.py <en-catalog.json> <hc-ko-app.json> [--json report.json]
종료 코드: 위반 0건이면 0, 있으면 1 (CI 게이트용)
"""
import json, re, sys, argparse

# 사용자가 직접 타이핑하거나 앱이 문자열 비교에 쓰는 리터럴 → 절대 번역 금지
DNT_LITERALS = r'CONFIRM|DELETE|REMOVE|RESET|DISCONNECT|STOP|UNSTOP|START|HELP|PERMANENTLY DELETE'
DNT_EXACT = re.compile(r'^(%s)$' % DNT_LITERALS)          # 값 전체가 리터럴
DNT_INLINE = re.compile(r'\b(%s)\b' % DNT_LITERALS)        # 문장 속 리터럴
HANGUL = re.compile(r'[가-힣]')

# 화이트라벨: 붙여쓰기·공백형·약칭·대소문자 변형을 모두 잡는다
BRANDS = [
    (re.compile(r'Lead\s*Connector', re.I), 'LeadConnector 계열'),
    (re.compile(r'\bLC\s+(Phone|Email|Number|SMS)\b', re.I), 'LC 약칭'),
    (re.compile(r'\bGo\s*High\s*Level\b', re.I), 'GoHighLevel 계열'),
    (re.compile(r'\bHighLevel\b'), 'HighLevel'),
]
# 의도적으로 남기는 고유명사 (제품 정식 명칭 등) → 확정 시 여기에 추가
BRAND_ALLOWLIST = {
    'HighLevel University',
}

def load_registered_exceptions(path=None):
    """data/whitelabel-exceptions.json 에 등재된 값은 브랜드 위반으로 세지 않는다.

    기존 게이트(whitelabel.is_exception)와 같은 목록을 봐야 한다.
    이 파일을 보지 않으면 의도적으로 남긴 값 때문에 CI 가 영구히 빨간불이 되고,
    그러면 게이트를 끄게 되어 검사 자체가 무력해진다.
    """
    import os
    if path is None:
        path = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                            'data', 'whitelabel-exceptions.json')
    try:
        with open(path, encoding='utf-8') as f:
            return {x['값'].strip() for x in json.load(f).get('항목', [])}
    except Exception:
        return set()


EXCEPTIONS = load_registered_exceptions()


def flatten(tree, out, prefix=''):
    for k, v in tree.items():
        if isinstance(v, dict):
            flatten(v, out, prefix + k + '.')
        elif isinstance(v, str):
            out[prefix + k] = v
    return out

def load_surfaces(dic):
    """배포되는 모든 surface. flat 과 _text 를 절대 빠뜨리지 않는다."""
    s = {}
    if 'host' in dic:  s['host'] = flatten(dic['host'], {})
    for fp, app in (dic.get('apps') or {}).items():
        s['apps:' + fp[:24]] = flatten(app, {})
    if 'flat' in dic:  s['flat'] = dict(dic['flat'])
    if '_text' in dic: s['_text'] = dict(dic['_text'])
    return s

def load_english(cat):
    """영어 원문 map. 두 가지 입력을 모두 받는다.

    ① 크롤 EN 카탈로그  {host, apps, flat, …}
    ② 대조표 reference  {key: {en, ko}}   ← 저장소에 이미 있는 파일

    CI 에서 6.8MB 짜리 EN 카탈로그를 따로 커밋하지 않으려면 ②가 필요하다.
    """
    sample = next(iter(cat.values()), None)
    if isinstance(sample, dict) and 'en' in sample and 'ko' in sample:
        return {k: o['en'] for k, o in cat.items()
                if isinstance(o, dict) and isinstance(o.get('en'), str)}
    en = flatten(cat.get('host', {}), {})
    for app in (cat.get('apps') or {}).values():
        en.update(flatten(app, {}))
    en.update(cat.get('flat', {}))
    return en

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('catalog'); ap.add_argument('dictionary')
    ap.add_argument('--json', dest='report')
    ap.add_argument('--flat-dict', action='store_true',
                    help='영어원문→한국어 평면 사전(ghl-i18n-ko.json 등)으로 읽는다')
    a = ap.parse_args()
    en = load_english(json.load(open(a.catalog, encoding='utf-8')))
    raw = json.load(open(a.dictionary, encoding='utf-8'))
    # 평면 사전은 키가 곧 영어 원문이라 _text 와 같은 규칙으로 본다
    surfaces = {'_text': {k: v for k, v in raw.items() if isinstance(v, str)}} \
        if a.flat_dict else load_surfaces(raw)

    v = {'D1_literal_translated': [], 'D2_literal_lost': [], 'D3_modal_mismatch': [], 'W1_brand': []}

    for sname, pairs in surfaces.items():
        for key, ko in pairs.items():
            src = en.get(key, key if sname == '_text' else '')
            if src:
                if DNT_EXACT.match(src.strip()) and HANGUL.search(ko):
                    v['D1_literal_translated'].append(
                        {'surface': sname, 'key': key, 'en': src, 'ko': ko, 'fix': src.strip()})
                else:
                    for lit in set(DNT_INLINE.findall(src)):
                        if lit not in ko:
                            v['D2_literal_lost'].append(
                                {'surface': sname, 'key': key, 'literal': lit, 'en': src, 'ko': ko})
                            break
            if ko.strip() in EXCEPTIONS:
                continue
            for rx, label in BRANDS:
                m = rx.search(ko)
                if m and not any(w in ko for w in BRAND_ALLOWLIST):
                    v['W1_brand'].append(
                        {'surface': sname, 'key': key, 'brand': label, 'match': m.group(0), 'ko': ko})
                    break

    # D3: 같은 모달에서 안내문은 리터럴을 지켰는데 비교값/placeholder 는 번역된 경우 (사용자가 절대 통과 못함)
    keeps, breaks = {}, {}
    for sname, pairs in surfaces.items():
        for key, ko in pairs.items():
            src = en.get(key, '')
            if not src: continue
            parent = '.'.join(key.split('.')[:-1])
            for lit in set(DNT_INLINE.findall(src)):
                (keeps if lit in ko else breaks).setdefault((sname, parent, lit), []).append(key)
    for sig, bad in breaks.items():
        if sig in keeps:
            v['D3_modal_mismatch'].append({
                'surface': sig[0], 'modal': sig[1], 'literal': sig[2],
                'instruction_keeps_literal': keeps[sig], 'value_translated': bad})

    total = sum(len(x) for x in v.values())
    for name, items in v.items():
        print(f'{name}: {len(items)}')
        for it in items[:200]:
            print('   ', json.dumps(it, ensure_ascii=False)[:220])
    print(f'\nTOTAL VIOLATIONS: {total}')
    if a.report:
        json.dump(v, open(a.report, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    return 1 if total else 0

if __name__ == '__main__':
    sys.exit(main())
