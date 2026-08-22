#!/usr/bin/env python3
"""
_source/hc-ko-app.pretty.json (편집 정본) → data/hc-ko-app-{core,apps}.json (배포본)

번역을 고칠 때는 pretty 만 고치고 이 스크립트로 배포본을 다시 만든다.
core/apps 를 직접 고치면 pretty 와 어긋나 다음 갱신에서 되돌아간다.

사용법:
    python3 scripts/split-ko-app.py
"""

import json
import os
import sys

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
SRC = os.path.join(ROOT, '_source/hc-ko-app.pretty.json')
CORE = os.path.join(ROOT, 'data/hc-ko-app-core.json')
APPS = os.path.join(ROOT, 'data/hc-ko-app-apps.json')

MIN = (',', ':')


def main():
    if not os.path.exists(SRC):
        print(f'❌ 원본 없음: {SRC}')
        return 2
    o = json.load(open(SRC, encoding='utf-8'))
    meta = o.get('_meta', {})

    core = {'_meta': dict(meta, part='core'),
            'host': o['host'], 'flat': o['flat'], '_text': o['_text']}
    apps = {'_meta': dict(meta, part='apps'),
            'apps': o['apps'], 'appsMeta': o['appsMeta']}

    os.makedirs(os.path.dirname(CORE), exist_ok=True)
    for path, obj in ((CORE, core), (APPS, apps)):
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(obj, f, ensure_ascii=False, separators=MIN)
        print(f'  {os.path.relpath(path, ROOT):<32} {os.path.getsize(path):>10,} bytes')

    print(f'host {len(core["host"]):,} ns / apps {len(apps["apps"]):,} / '
          f'flat {len(core["flat"]):,} / _text {len(core["_text"]):,}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
