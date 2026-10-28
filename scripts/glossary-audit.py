#!/usr/bin/env python3
"""
글로서리 감사 — data/glossary.ko.json 의 확정 용어(decided=true)에 대해 사전에 남은 변형 표기를 센다.

    python3 scripts/glossary-audit.py            # 요약 표
    python3 scripts/glossary-audit.py --show 5   # 항목별 잔존 예시 5건
    python3 scripts/glossary-audit.py --json     # 기계용 출력

대상: _source/hc-ko-app-reference.json (en/ko 쌍). 영어 원문에 글로서리 en 이 단어로 들어 있는 항목 중
ko 에 '확정 한글'이 없고 '변형'이 있는 것을 잔존으로 본다. decided=false 항목은 참고로만 보고 exit 코드에 넣지 않는다.
CI 에서는 경고용(exit 0). --strict 를 주면 확정 항목 잔존이 있을 때 exit 1.
"""
import argparse
import json
import os
import re
import sys

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
GLOSSARY = os.path.join(ROOT, 'data/glossary.ko.json')
REF = os.path.join(ROOT, '_source/hc-ko-app-reference.json')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--show', type=int, default=0)
    ap.add_argument('--json', action='store_true')
    ap.add_argument('--strict', action='store_true')
    a = ap.parse_args()

    g = json.load(open(GLOSSARY, encoding='utf-8'))
    ref = json.load(open(REF, encoding='utf-8'))
    pairs = [(k, v['en'], v['ko']) for k, v in ref.items()
             if isinstance(v, dict) and isinstance(v.get('en'), str) and isinstance(v.get('ko'), str)]

    rows, strict_fail = [], 0
    for t in g['objects']:
        if not t.get('variants'):
            continue
        rx = re.compile(r'\b' + re.escape(t['en']) + r'(s|es|ies)?\b', re.I)
        hits = [(k, en, ko) for k, en, ko in pairs if rx.search(en)]
        resid = [(k, en, ko) for k, en, ko in hits if t['ko'] not in ko and any(v in ko for v in t['variants'])]
        rows.append({'en': t['en'], 'ko': t['ko'], 'decided': t.get('decided', False), 'hits': len(hits), 'residual': len(resid),
                     'examples': [{'key': k, 'en': en[:70], 'ko': ko[:60]} for k, en, ko in resid[:a.show]]})
        if t.get('decided') and resid:
            strict_fail += len(resid)

    rows.sort(key=lambda r: (-r['decided'], -r['residual']))
    if a.json:
        print(json.dumps(rows, ensure_ascii=False, indent=2))
    else:
        print(f"{'영문':16}{'확정':12}{'결정':4}{'대상':>7}{'잔존':>7}")
        for r in rows:
            print(f"{r['en']:16}{r['ko']:12}{'✅' if r['decided'] else '★ ':4}{r['hits']:7}{r['residual']:7}")
            for e in r['examples']:
                print(f"      {e['key']}: {e['en']}  →  {e['ko']}")
        print(f"\n확정 항목 잔존 합계: {strict_fail}건" + ("  (★ = 벤자민 결정 대기, 집계 제외)" if any(not r['decided'] for r in rows) else ''))
    return 1 if (a.strict and strict_fail) else 0


if __name__ == '__main__':
    sys.exit(main())
