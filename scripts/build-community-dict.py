#!/usr/bin/env python3
"""커뮤니티 무설치 배달용 통합 사전 산출 (2026-08-21 승인 미션).

data/hc-dict.min.json = (ko.json ∪ manual-dict, manual 우선)
                        − DNT 7종 (키 정확 일치)
                        − identity 항목 (값 == 키, 치환 무의미 → 전송량 절약)

기존 빌드(build-dashboard-ko.py)의 우선순위 로직과 산출물은 건드리지 않는다 —
이 스크립트는 출력 1종을 추가할 뿐이다. 소비자는 커뮤니티(ClientClub) Custom
Code 슬롯의 인라인 로더가 raw.githubusercontent에서 fetch한다 (jsDelivr는
nosniff 때문에 script src 불가 — DECISIONS.md 참조).

부수 효과: js/version.json의 community 항목을 실측 건수로 갱신한다.
"""
import hashlib
import json
import pathlib
from datetime import datetime, timezone

REPO = pathlib.Path(__file__).resolve().parent.parent
DNT = {'DELETE', 'CONFIRM', 'REMOVE', 'CANCEL', 'TRANSFER', 'DISABLE', 'RESET'}

ko = json.loads((REPO / 'data/ghl-i18n-ko.json').read_text(encoding='utf-8'))
manual = json.loads((REPO / 'data/manual-dict-v401.json').read_text(encoding='utf-8'))

merged = {**ko, **manual}                       # manual 우선
identity = [k for k, v in merged.items() if v == k]
out = {k: v for k, v in merged.items() if k not in DNT and v != k}

payload = json.dumps(dict(sorted(out.items())), ensure_ascii=False, separators=(',', ':'))
target = REPO / 'data/hc-dict.min.json'
target.write_text(payload, encoding='utf-8')

ver_path = REPO / 'js/version.json'
ver = json.loads(ver_path.read_text(encoding='utf-8'))
ver.setdefault('community', {})
ver['community'].update({
    'version': '2.0.0',
    'translation_count': len(out),
    'last_updated': datetime.now(timezone.utc).isoformat(),
})
ver_path.write_text(json.dumps(ver, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

dnt_removed = len([k for k in merged if k in DNT])
print(f"ko ∪ manual: {len(merged):,} (ko {len(ko):,} + manual 전용 {len(merged)-len(ko):,})")
print(f"identity 제거: {len(identity):,} / DNT 키 제거: {dnt_removed}")
print(f"hc-dict.min.json: {len(out):,}건, {target.stat().st_size:,} bytes")
print(f"sha256[:16]: {hashlib.sha256(payload.encode()).hexdigest()[:16]}")
