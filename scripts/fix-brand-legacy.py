#!/usr/bin/env python3
"""
기존 파이프라인 사전(dashboard-ko 계열)의 브랜드 공백형·약칭 누출 교정.

v4 와 같은 누락이다 — whitelabel.py 가 'LeadConnector' 붙여쓰기만 검사해
'Lead Connector' / 'LC Phone' / 'LC Email' 이 그대로 통과했다.
whitelabel.py 본체 수정은 승인 사항이라 v4 쪽 치환표(BRAND_SPACED)를 재사용한다.

⚠️ 빌드 우선순위: i18n(ko.json) < 기존 JS < manual-dict
   ko.json 만 고치면 기존 JS 가 덮어써 무효화된다. 그래서 교정한 값을
   manual-dict-v401.json 에도 등재한다 (2026-08-20 에 확립된 방식).

    python3 scripts/fix-brand-legacy.py --dry-run
    python3 scripts/fix-brand-legacy.py
"""

import argparse
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, '..'))
sys.path.insert(0, HERE)

# v4 교정기의 치환표·조사 교정을 그대로 쓴다. 두 벌로 갈라지면 다시 어긋난다.
import importlib.util
_spec = importlib.util.spec_from_file_location('fixv4', os.path.join(HERE, 'fix-ko-app-v4.py'))
_fixv4 = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_fixv4)
brand_spaced = _fixv4.brand_spaced
fix_particles = _fixv4.fix_particles

KO = os.path.join(ROOT, 'data/ghl-i18n-ko.json')
MANUAL = os.path.join(ROOT, 'data/manual-dict-v401.json')


def repair(v):
    return fix_particles(brand_spaced(v))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--dry-run', action='store_true')
    args = ap.parse_args()

    ko = json.load(open(KO, encoding='utf-8'))
    manual = json.load(open(MANUAL, encoding='utf-8'))

    changed_ko, changed_manual, promoted = [], [], []

    for k, v in list(ko.items()):
        if not isinstance(v, str):
            continue
        nv = repair(v)
        if nv != v:
            ko[k] = nv
            changed_ko.append((k, v, nv))

    for k, v in list(manual.items()):
        if not isinstance(v, str):
            continue
        nv = repair(v)
        if nv != v:
            manual[k] = nv
            changed_manual.append((k, v, nv))

    # ko.json 만 고치면 기존 JS 사전이 덮어쓴다. 교정값을 manual 로 승격한다.
    for k, _, nv in changed_ko:
        if manual.get(k) != nv:
            manual[k] = nv
            promoted.append((k, nv))

    print(f'{"대상":<28}{"건수":>8}')
    print('-' * 38)
    print(f'{"ghl-i18n-ko.json 교정":<26}{len(changed_ko):>8}')
    print(f'{"manual-dict 자체 교정":<26}{len(changed_manual):>8}')
    print(f'{"manual-dict 로 승격":<26}{len(promoted):>8}')
    print('-' * 38)
    print()
    for tag, rows in (('ghl-i18n-ko.json', changed_ko), ('manual-dict-v401.json', changed_manual)):
        if not rows:
            continue
        print(f'── {tag}')
        for k, before, after in rows[:20]:
            print(f'   {k[:66]}')
            print(f'      전: {before[:90]}')
            print(f'      후: {after[:90]}')
        print()

    if args.dry_run:
        print('※ --dry-run : 파일을 쓰지 않았습니다.')
        return 0

    # manual-dict 는 키 정렬 상태로 보관돼 있다. 승격분을 끝에 붙이면 정렬이 깨진다.
    # 반면 ko.json 은 정렬돼 있지 않다 — 정렬하면 diff 가 통째로 뒤집히므로
    # 기존 키 순서를 그대로 두고 값만 바꾼다.
    for path, obj, do_sort in ((KO, ko, False), (MANUAL, manual, True)):
        if do_sort:
            obj = {k: obj[k] for k in sorted(obj)}
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(obj, f, ensure_ascii=False, indent=2)
        print(f'저장: {os.path.relpath(path, ROOT)} ({len(obj):,}건)')
    print('\n⚠️ js/dashboard-ko.js 는 다음 빌드에서 반영된다.')
    print('   즉시 반영하려면 data/ghl-i18n-en.json 말미 개행 토글로 ui-updater 를 트리거할 것.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
