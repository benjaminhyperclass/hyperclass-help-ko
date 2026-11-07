#!/usr/bin/env python3
"""번역 라운드 입력 준비 — ko-translate-round.yml '라운드 입력 준비' 단계와 같은 내용(플랜 내 월간 세션용).

텔레메트리 미번역 키(data/telemetry/en-missing/<ns>.json)에서, 이미 한국어인 키를 빼고 참조본 재사용분(seed)을 채워
/tmp/round/<ns>/data/ghl-i18n-en.json · ghl-i18n-ko.json 과 /tmp/round/plan.json 을 만든다.
환경변수: NS_IN(쉼표 구분 네임스페이스, 비우면 자동) · MIN(자동 선택 최소 키 수, 기본 20)
"""
import json, os, glob, re
H = re.compile('[가-힣]')
pretty = json.load(open('_source/hc-ko-app.pretty.json', encoding='utf-8'))
ref = json.load(open('_source/hc-ko-app-reference.json', encoding='utf-8'))
by_en = {}
for k, v in ref.items():
    if isinstance(v, dict) and isinstance(v.get('en'), str) and isinstance(v.get('ko'), str) and H.search(v['ko']):
        by_en.setdefault(v['en'], v['ko'])
def get(d, path):
    for p in path:
        if not isinstance(d, dict) or p not in d: return None
        d = d[p]
    return d
want = [x.strip() for x in (os.environ.get('NS_IN') or '').split(',') if x.strip()]
minimum = int(os.environ.get('MIN') or '20')
rounds = []
os.makedirs('/tmp/round', exist_ok=True)
for f in sorted(glob.glob('data/telemetry/en-missing/*.json')):
    ns = os.path.basename(f)[:-5]
    if want and ns not in want: continue
    en = json.load(open(f, encoding='utf-8'))
    part = 'apps' if ns in pretty.get('apps', {}) and ns not in pretty.get('host', {}) else 'host'
    todo, seed = {}, {}
    for k, e in en.items():
        if len(e) >= 600: continue   # 수집 상한에 걸린(잘렸을 수 있는) 원문은 번역하지 않는다
        cur = get(pretty.get(part, {}).get(ns, {}), k.split('.'))
        if isinstance(cur, str) and H.search(cur): continue
        if e in by_en: seed[k] = by_en[e]
        else: todo[k] = e
    if not want and len(todo) + len(seed) < minimum: continue
    d = f'/tmp/round/{ns}/data'; os.makedirs(d, exist_ok=True)
    json.dump({**todo, **{k: en[k] for k in seed}}, open(f'{d}/ghl-i18n-en.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    json.dump(seed, open(f'{d}/ghl-i18n-ko.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    rounds.append({'ns': ns, 'part': part, 'todo': len(todo), 'seed': len(seed)})
json.dump(rounds, open('/tmp/round/plan.json', 'w'))
print(json.dumps(rounds, ensure_ascii=False, indent=1))
print('count=%d' % len(rounds))
