#!/usr/bin/env python3
"""
_source/hc-ko-app.pretty.json (편집 정본) → data/hc-ko-app-{core,apps}.json (배포본)

번역을 고칠 때는 pretty 만 고치고 이 스크립트로 배포본을 다시 만든다.
core/apps 를 직접 고치면 pretty 와 어긋나 다음 갱신에서 되돌아간다.

사용법:
    python3 scripts/split-ko-app.py
"""

import copy
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, '..'))
sys.path.insert(0, HERE)

from exclusions import (  # noqa: E402
    load_prefixes, english_originals, prune_nested, prune_flat_keys, prune_by_english,
    load_english, reference_en, prune_nested_by_english, prune_by_english_ci,
)

SRC = os.path.join(ROOT, '_source/hc-ko-app.pretty.json')
CORE = os.path.join(ROOT, 'data/hc-ko-app-core.json')
APPS = os.path.join(ROOT, 'data/hc-ko-app-apps.json')
IFR = os.path.join(ROOT, 'data/hc-ko-app-ifr.json')   # 중계 iframe 앱 카탈로그(편집 정본 ifrApps) — 로더가 IFR 이 붙을 때만 받는다

MIN = (',', ':')


def main():
    if not os.path.exists(SRC):
        print(f'❌ 원본 없음: {SRC}')
        return 2
    o = json.load(open(SRC, encoding='utf-8'))
    meta = o.get('_meta', {})

    # 제외는 **배포본을 만들 때** 적용한다. 편집 정본(pretty)에는 원문이 남아,
    # 결정이 바뀌면 data/ko-app-exclusions.json 에서 등재만 지우고 재분할하면 된다.
    prefixes = load_prefixes()
    core = {'_meta': dict(meta, part='core'),
            'host': copy.deepcopy(o['host']), 'flat': dict(o['flat']), '_text': dict(o['_text']),
            '_textScoped': dict(o.get('_textScoped') or {})}
    apps = {'_meta': dict(meta, part='apps'),
            'apps': copy.deepcopy(o['apps']), 'appsMeta': o['appsMeta']}
    ifr = {'_meta': dict(meta, part='ifr'), 'apps': copy.deepcopy(o.get('ifrApps') or {})}

    if prefixes:
        en = english_originals(prefixes)
        n_host = len(prune_nested(core['host'], prefixes))
        n_flat = len(prune_flat_keys(core['flat'], prefixes))
        # _text 는 키가 영어 원문이다 — 경로가 아니라 원문으로 대조해야 한다.
        n_text = len(prune_by_english(core['_text'], en))
        n_text += len(prune_by_english(core['_textScoped'], en))
        n_apps = sum(len(prune_nested(cat, prefixes)) for cat in apps['apps'].values())
        n_apps += sum(len(prune_nested(cat, prefixes)) for cat in ifr['apps'].values())
        print(f'제외 적용 — 네임스페이스 {len(prefixes)}개 / 영어 원문 {len(en)}종')
        print(f'  host {n_host} / apps {n_apps} / flat {n_flat} / _text {n_text} 제거')

    # 영어 원문 단위 제외(예: 단독 'Delete') — 참조본 영어로 경로를 대조한다.
    en_ci = load_english()
    if en_ci:
        en_of = reference_en()
        e_host = sum(len(prune_nested_by_english(sub, en_of, en_ci, base=ns))
                     for ns, sub in core['host'].items() if isinstance(sub, dict))
        e_apps = sum(len(prune_nested_by_english(cat, en_of, en_ci)) for cat in apps['apps'].values())
        # ifrApps 참조본 키는 '<지문>.<경로>' 꼴이다
        e_apps += sum(len(prune_nested_by_english(cat, en_of, en_ci, base=fp)) for fp, cat in ifr['apps'].items())
        e_flat = [k for k in list(core['flat']) if isinstance(en_of.get(k), str) and en_of[k].strip().lower() in en_ci]
        for k in e_flat:
            del core['flat'][k]
        e_text = len(prune_by_english_ci(core['_text'], en_ci)) + len(prune_by_english_ci(core['_textScoped'], en_ci))
        print(f'영어 원문 제외 {sorted(en_ci)} — host {e_host} / apps {e_apps} / flat {len(e_flat)} / _text {e_text} 제거')

    os.makedirs(os.path.dirname(CORE), exist_ok=True)
    for path, obj in ((CORE, core), (APPS, apps), (IFR, ifr)):
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(obj, f, ensure_ascii=False, separators=MIN)
        print(f'  {os.path.relpath(path, ROOT):<32} {os.path.getsize(path):>10,} bytes')

    print(f'host {len(core["host"]):,} ns / apps {len(apps["apps"]):,} / '
          f'flat {len(core["flat"]):,} / _text {len(core["_text"]):,} / _textScoped {len(core["_textScoped"]):,}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
