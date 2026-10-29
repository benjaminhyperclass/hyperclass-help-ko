#!/usr/bin/env python3
"""
번역 라운드 병합 — 평탄 사전(en/ko, dotted key)을 편집 정본·참조본에 넣고 글로서리를 강제한다.

    python3 scripts/round-merge.py --en <ns>.en.json --ko <ns>.ko.json --ns <namespace> [--part host|apps] [--note "..."]
    python3 scripts/round-merge.py --unify            # 기존 사전에 글로서리 확정 용어 통일만 적용 (라운드 입력 없이)
    python3 scripts/round-merge.py --unify --dry-run  # 바뀔 항목만 출력

입력 형식: en.json = {"a.b.c": "English"}, ko.json = {"a.b.c": "한국어"} (키 = 네임스페이스 아래 경로).
처리:
  1) 글로서리(data/glossary.ko.json) 확정 용어의 변형 표기를 ko 에서 정규 표기로 치환 (영어 원문에 그 용어가 있을 때만)
  2) DNT 7종이 원문에 단독 토큰으로 있으면 ko 에서도 보존 (번역돼 있으면 원문 토큰으로 되돌림)
  2b) vue-i18n 복수형('a | b')에서 구분자가 사라졌으면 같은 형을 복제해 구분자 수를 맞춤
  3) _source/hc-ko-app.pretty.json 의 <part>.<ns> 에 중첩 삽입(기존 값은 덮어쓰지 않음, --force 면 덮어씀)
  4) _source/hc-ko-app-reference.json 에 "<ns>.<key>": {en, ko} 등재
  5) _meta.version 패치 올림, built, source 기록
그 다음은 종전대로: split-ko-app.py → validate-ko-app.py → 커밋.
"""
import argparse
import datetime
import json
import os
import re
import sys

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
PRETTY = os.path.join(ROOT, '_source/hc-ko-app.pretty.json')
REF = os.path.join(ROOT, '_source/hc-ko-app-reference.json')
GLOSSARY = os.path.join(ROOT, 'data/glossary.ko.json')
DNT = ['DELETE', 'CONFIRM', 'REMOVE', 'CANCEL', 'TRANSFER', 'DISABLE', 'RESET']

# 자동 통일에서 제외하는 변형 (다른 뜻으로도 쓰여 오치환 위험)
UNSAFE_VARIANTS = {
    'Agency': ['대행사'],            # Debt Collection Agency 등 업종명
    'Lead': ['잠재 고객', '잠재고객'],   # 설명문 속 일반 명사
    'Review': [],                      # 동사 '검토' 와 충돌
    'Course': ['과정'],                 # process 의미
    'Reporting': ['보고서', '리포트'],   # report(명사) 와 충돌
    'Contact': ['고객'],               # customer 와 충돌 — 원문에 Contact 만 있을 때만 허용(아래 특례)
    'Template': ['양식'],
    'Stage': [],
}


def load_glossary():
    g = json.load(open(GLOSSARY, encoding='utf-8'))
    rules = []
    for t in g['objects']:
        if not t.get('decided') or not t.get('variants'):
            continue
        variants = [v for v in t['variants'] if v not in UNSAFE_VARIANTS.get(t['en'], []) and v != t['ko']]
        if not variants:
            continue
        rules.append({
            'en': t['en'], 'ko': t['ko'], 'variants': sorted(variants, key=len, reverse=True),
            'rx': re.compile(r'\b' + re.escape(t['en']) + r'(s|es|ies)?\b', re.I),
        })
    return rules


def unify_one(en, ko, rules):
    """영어 원문에 용어가 있고 ko 에 변형이 있으면 정규 표기로. 바뀐 (변형→정규) 목록을 함께 돌려준다."""
    changes = []
    for r in rules:
        if not r['rx'].search(en):
            continue
        if r['en'] == 'Contact' and re.search(r'\bcustomer', en, re.I):
            continue
        # 정규 표기가 이미 있는 문장은 건드리지 않는다 — '약속이 예약되었습니다' → '예약이 예약되었습니다' 같은 중복 방지
        if r['ko'] in ko:
            continue
        for v in r['variants']:
            if v in ko:
                # '워크플로' → '워크플로우' 처럼 정규 표기가 변형을 포함하는 경우: 이미 정규인 자리는 건너뛴다
                pat = re.escape(v) + (r'(?!우)' if r['ko'].startswith(v) and r['ko'] != v else '')
                new = re.sub(pat, r['ko'], ko)
                if new != ko:
                    changes.append((v, r['ko'])); ko = new
    return ko, changes


def keep_dnt(en, ko):
    """원문에 DNT 토큰이 단독으로 있으면 ko 에도 같은 토큰이 있어야 한다. 없으면 원문 그대로 둔다(번역 폐기)."""
    for t in DNT:
        if re.search(r'(^|[\s\'"“‘])' + t + r'($|[\s\'"”’.,!?])', en) and t not in ko:
            return en, t
    return ko, None


def fix_plural(en, ko):
    """vue-i18n 복수형 'a | b | c': 한국어는 수 구분이 없으므로 번역이 구분자를 잃었으면 같은 형을 구분자 수만큼 복제한다."""
    n = en.count('|')
    if n and ko.count('|') != n:
        base = ko.split('|')[0].strip() if '|' in ko else ko.strip()
        return ' | '.join([base] * (n + 1)), True
    return ko, False


def nested_set(d, path, value, force):
    cur = d
    for k in path[:-1]:
        if k not in cur or not isinstance(cur[k], dict):
            cur[k] = {}
        cur = cur[k]
    if path[-1] in cur and not force and isinstance(cur[path[-1]], str) and re.search('[가-힣]', cur[path[-1]]):
        return False
    cur[path[-1]] = value
    return True


def bump(ver):
    a, b, c = (ver.split('.') + ['0', '0', '0'])[:3]
    return f'{a}.{b}.{int(c) + 1}'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--en'); ap.add_argument('--ko'); ap.add_argument('--ns')
    ap.add_argument('--part', default='host', choices=['host', 'apps'])
    ap.add_argument('--note', default='')
    ap.add_argument('--force', action='store_true')
    ap.add_argument('--unify', action='store_true')
    ap.add_argument('--dry-run', action='store_true')
    a = ap.parse_args()

    rules = load_glossary()
    pretty = json.load(open(PRETTY, encoding='utf-8'))
    ref = json.load(open(REF, encoding='utf-8'))
    stats = {'inserted': 0, 'skipped_existing': 0, 'glossary_fixes': 0, 'dnt_kept': 0, 'unified': 0}
    log = []

    if a.unify:
        # 참조본 기준으로 전수 통일 → pretty 의 같은 경로를 갱신
        def walk_pretty(path):
            cur = pretty
            for k in path:
                if not isinstance(cur, dict) or k not in cur: return None, None
                cur = cur[k]
            return cur, path
        for key, v in ref.items():
            if not (isinstance(v, dict) and isinstance(v.get('en'), str) and isinstance(v.get('ko'), str)):
                continue
            new, ch = unify_one(v['en'], v['ko'], rules)
            if not ch:
                continue
            stats['unified'] += 1
            log.append(f'{key}: {v["ko"][:50]} → {new[:50]}  [{", ".join(f"{x}→{y}" for x, y in ch)}]')
            if a.dry_run:
                continue
            v['ko'] = new
            parts = key.split('.')
            placed = False
            for part in ('host', 'apps'):
                cur = pretty.get(part, {})
                ok = True
                for k in parts[:-1]:
                    if isinstance(cur, dict) and k in cur: cur = cur[k]
                    else: ok = False; break
                if ok and isinstance(cur, dict) and parts[-1] in cur and isinstance(cur[parts[-1]], str):
                    cur[parts[-1]] = new; placed = True; break
            if not placed:
                # flat 사전(영어 원문 키)
                flat = pretty.get('flat', {})
                if v['en'] in flat: flat[v['en']] = new
        print('\n'.join(log[:60]))
        if len(log) > 60: print(f'… 외 {len(log) - 60}건')
        print(f"\n통일 {stats['unified']}건" + (' (dry-run, 저장 안 함)' if a.dry_run else ''))
        if a.dry_run:
            return 0
    else:
        if not (a.en and a.ko and a.ns):
            print('--en --ko --ns 필요 (또는 --unify)'); return 2
        en = json.load(open(a.en, encoding='utf-8')); ko = json.load(open(a.ko, encoding='utf-8'))
        target = pretty.setdefault(a.part, {}).setdefault(a.ns, {})
        for k, e in en.items():
            kv = ko.get(k)
            if not isinstance(kv, str) or not kv.strip():
                continue
            kv2, ch = unify_one(e, kv, rules)
            if ch: stats['glossary_fixes'] += 1; kv = kv2
            kv3, t = keep_dnt(e, kv)
            if t: stats['dnt_kept'] += 1; kv = kv3
            kv4, pl = fix_plural(e, kv)
            if pl: stats['plural_fixed'] = stats.get('plural_fixed', 0) + 1; kv = kv4
            if kv == e:
                continue   # 원문 그대로(identity)는 넣지 않는다 — C7
            if nested_set(target, k.split('.'), kv, a.force):
                stats['inserted'] += 1
                ref[f'{a.ns}.{k}'] = {'en': e, 'ko': kv}
            else:
                stats['skipped_existing'] += 1
        print(json.dumps(stats, ensure_ascii=False))

    if a.dry_run:
        return 0
    m = pretty.setdefault('_meta', {})
    m['version'] = bump(m.get('version', '4.2.8'))
    m['built'] = datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%d')
    m['source'] = (m.get('source', '') + ' + ' + (a.note or (f'round {a.ns} {stats["inserted"]}' if not a.unify else f'glossary unify {stats["unified"]}')))[-1500:]
    # strings 는 split 이 다시 센다 — 여기서는 건드리지 않는다
    json.dump(pretty, open(PRETTY, 'w', encoding='utf-8'), ensure_ascii=False, indent=1); open(PRETTY, 'a').write('\n')
    json.dump(ref, open(REF, 'w', encoding='utf-8'), ensure_ascii=False, indent=1); open(REF, 'a').write('\n')
    print(f"저장: pretty v{m['version']} · reference {len(ref)}건")
    return 0


if __name__ == '__main__':
    sys.exit(main())
