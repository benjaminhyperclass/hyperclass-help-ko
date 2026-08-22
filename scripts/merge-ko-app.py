#!/usr/bin/env python3
"""
data/hc-ko-app-{core,apps}.json → 결합본 (검사기 입력용)

check_dnt_whitelabel.py 는 host/apps/flat/_text 를 한 파일에서 읽는다.
배포본을 그대로 검사하려면 둘을 합쳐야 한다 — pretty 가 아니라 **배포본**을 써야
"커밋된 것이 실제로 검사됐다" 가 성립한다.

    python3 scripts/merge-ko-app.py /tmp/hc-ko-app-deployed.json
"""

import json
import os
import sys

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))


def main():
    out_path = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, 'hc-ko-app.merged.json')
    core = json.load(open(os.path.join(ROOT, 'data/hc-ko-app-core.json'), encoding='utf-8'))
    apps = json.load(open(os.path.join(ROOT, 'data/hc-ko-app-apps.json'), encoding='utf-8'))
    merged = {
        '_meta': core.get('_meta'),
        'host': core['host'], 'apps': apps['apps'],
        'appsMeta': apps.get('appsMeta'),
        'flat': core['flat'], '_text': core['_text'],
    }
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(merged, f, ensure_ascii=False, separators=(',', ':'))
    print(f'{out_path}  host {len(merged["host"])} / apps {len(merged["apps"])} / '
          f'flat {len(merged["flat"])} / _text {len(merged["_text"])}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
