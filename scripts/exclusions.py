#!/usr/bin/env python3
"""
제외 네임스페이스 처리 — data/ko-app-exclusions.json 을 읽어 사전에서 걷어낸다.

설계 원칙
  · **편집 정본(_source/hc-ko-app.pretty.json)은 건드리지 않는다.**
    제외는 배포본을 만들 때 적용한다. 그래야 결정이 바뀌었을 때
    등재를 지우고 재분할하는 것만으로 되돌아온다.
  · `pending` 은 적용하지 않는다. 기록용이다.

레거시 사전(dashboard-ko 계열)은 영어 원문이 키다. 대조는 .strip() 기준으로 하되
삭제는 원래 키 그대로 한다 — 앞뒤 공백 변형(' Download Agreement')이 존재한다.

CLI:
    python3 scripts/exclusions.py --show          # 등재 현황과 영향 범위
    python3 scripts/exclusions.py --legacy        # 레거시 사전 3종에 적용
    python3 scripts/exclusions.py --legacy --dry-run
"""

import argparse
import json
import os
import sys

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
REGISTRY = os.path.join(ROOT, 'data/ko-app-exclusions.json')
REFERENCE = os.path.join(ROOT, '_source/hc-ko-app-reference.json')
KO = os.path.join(ROOT, 'data/ghl-i18n-ko.json')
MANUAL = os.path.join(ROOT, 'data/manual-dict-v401.json')
JS = os.path.join(ROOT, 'js/dashboard-ko.js')


def load_prefixes(path=REGISTRY):
    """적용 대상 prefix 목록. pending 은 제외한다."""
    try:
        with open(path, encoding='utf-8') as f:
            reg = json.load(f)
    except FileNotFoundError:
        return []
    return [x['prefix'] for x in reg.get('namespaces', []) if x.get('prefix')]


def load_pending(path=REGISTRY):
    try:
        with open(path, encoding='utf-8') as f:
            return [x['prefix'] for x in json.load(f).get('pending', []) if x.get('prefix')]
    except FileNotFoundError:
        return []


def english_originals(prefixes, reference_path=REFERENCE):
    """제외 네임스페이스의 영어 원문 집합(.strip() 기준).

    레거시 사전과 _text 는 영어 원문이 키라서 이 집합으로 대조해야 한다.
    """
    if not prefixes:
        return set()
    with open(reference_path, encoding='utf-8') as f:
        ref = json.load(f)
    out = set()
    for k, o in ref.items():
        if not any(k.startswith(p) for p in prefixes):
            continue
        if isinstance(o, dict) and isinstance(o.get('en'), str) and o['en'].strip():
            out.add(o['en'].strip())
    return out


def prune_nested(tree, prefixes):
    """중첩 카탈로그에서 dotted prefix 에 해당하는 리프를 제거한다.

    제거 후 빈 객체가 남으면 그 객체도 정리한다 — 빈 네임스페이스가 남으면
    지문(fingerprint) 최상위 키 집합이 어긋나 앱 매칭이 틀어질 수 있다.
    """
    removed = []

    def walk(node, path):
        for k in list(node.keys()):
            v = node[k]
            dotted = f'{path}.{k}' if path else k
            if isinstance(v, dict):
                walk(v, dotted)
                if not v:                      # 비면 정리
                    del node[k]
            elif isinstance(v, str):
                if any(dotted.startswith(p) for p in prefixes):
                    removed.append(dotted)
                    del node[k]

    if prefixes:
        walk(tree, '')
    return removed


def prune_flat_keys(d, prefixes):
    """dotted key 평면 사전(core.flat)에서 전방 일치로 제거."""
    if not prefixes:
        return []
    hit = [k for k in d if any(k.startswith(p) for p in prefixes)]
    for k in hit:
        del d[k]
    return hit


def prune_by_english(d, en_set):
    """영어 원문이 키인 사전(_text, ko.json, manual-dict)에서 제거.

    대조는 .strip() 기준, 삭제는 원래 키 그대로.
    """
    if not en_set:
        return []
    hit = [k for k in d if isinstance(k, str) and k.strip() in en_set]
    for k in hit:
        del d[k]
    return hit


# ── 레거시 사전(dashboard-ko 계열) ─────────────────────────────────
def _read_js_dict(path):
    """js/dashboard-ko.js 의 `var t={...}` 를 읽는다. build-dashboard-ko.py 와 같은 방식."""
    src = open(path, encoding='utf-8').read()
    i = src.find('var t=')
    if i < 0:
        raise SystemExit(f'❌ var t= 를 찾지 못했습니다: {path}')
    obj, end = json.JSONDecoder(strict=False).raw_decode(src, i + len('var t='))
    return src, i + len('var t='), end, obj


def apply_legacy(dry_run=False):
    prefixes = load_prefixes()
    if not prefixes:
        print('등재된 제외 네임스페이스가 없습니다.')
        return 0
    en = english_originals(prefixes)
    print(f'제외 네임스페이스 {len(prefixes)}개 / 영어 원문 {len(en)}종')

    ko = json.load(open(KO, encoding='utf-8'))
    manual = json.load(open(MANUAL, encoding='utf-8'))
    src, s0, s1, jsdict = _read_js_dict(JS)

    hit_ko = prune_by_english(ko, en)
    hit_man = prune_by_english(manual, en)
    hit_js = prune_by_english(jsdict, en)

    print(f'{"사전":<30}{"제거":>8}{"남은 항목":>12}')
    print('-' * 50)
    print(f'{"data/ghl-i18n-ko.json":<28}{len(hit_ko):>8}{len(ko):>12,}')
    print(f'{"data/manual-dict-v401.json":<28}{len(hit_man):>8}{len(manual):>12,}')
    print(f'{"js/dashboard-ko.js":<28}{len(hit_js):>8}{len(jsdict):>12,}')
    print()
    for k in sorted(set(hit_ko) | set(hit_man) | set(hit_js))[:20]:
        print(f'   {k[:78]!r}')

    if dry_run:
        print('\n※ --dry-run : 파일을 쓰지 않았습니다.')
        return 0

    # ko.json 은 정렬돼 있지 않다. 키 순서를 보존한다.
    with open(KO, 'w', encoding='utf-8') as f:
        json.dump(ko, f, ensure_ascii=False, indent=2)
    # manual-dict 는 정렬 상태로 보관된다.
    with open(MANUAL, 'w', encoding='utf-8') as f:
        json.dump({k: manual[k] for k in sorted(manual)}, f, ensure_ascii=False, indent=2)
    # dashboard-ko.js 는 사전 블록만 갈아 끼운다.
    # 이걸 함께 지우지 않으면 build-dashboard-ko.py 의 dom_dict.update(existing) 이
    # 다음 빌드에서 그대로 되살린다 — 원천만 지우면 소용이 없다.
    # build-dashboard-ko.py 와 **같은 직렬화 형식**을 써야 한다.
    # 형식이 다르면 37,000 줄이 통째로 diff 로 잡혀 실제 변경을 못 읽는다.
    pairs = [f'{json.dumps(k, ensure_ascii=False)}:{json.dumps(val, ensure_ascii=False)}'
             for k, val in jsdict.items()]
    new_src = src[:s0] + '{' + ',\n  '.join(pairs) + '}' + src[s1:]
    with open(JS, 'w', encoding='utf-8') as f:
        f.write(new_src)

    print(f'\n저장: ghl-i18n-ko.json / manual-dict-v401.json / dashboard-ko.js')
    print('⚠️ js/dashboard-ko.min.js 는 건드리지 않았다 — 빌드 산출물이다.')
    print('   실제 화면 반영은 벤자민이 재빌드를 트리거한 뒤에 일어난다.')
    return 0


def show():
    prefixes, pending = load_prefixes(), load_pending()
    en = english_originals(prefixes)
    print(f'적용 중 (namespaces): {len(prefixes)}개')
    for p in prefixes:
        print(f'   {p}')
    print(f'대기 중 (pending, 미적용): {len(pending)}개')
    for p in pending:
        print(f'   {p}')
    print(f'\n적용분 영어 원문: {len(en)}종')
    return 0


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--show', action='store_true')
    ap.add_argument('--legacy', action='store_true')
    ap.add_argument('--dry-run', action='store_true')
    a = ap.parse_args()
    if a.legacy:
        return apply_legacy(a.dry_run)
    return show()


if __name__ == '__main__':
    sys.exit(main())
