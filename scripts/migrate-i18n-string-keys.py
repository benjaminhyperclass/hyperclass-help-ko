#!/usr/bin/env python3
"""
i18n 데이터 마이그레이션: dot-notation 키 → 영문 원문 문자열 키 (1회성, 2026-08-10)

배경: GHL이 전역 vue-i18n 카탈로그를 제거하고 해시 기반 런타임 번역 캐시
(i18n_cache_<모듈>_<로케일>, {sha256: {original, translatedStr}})로 이행.
dot-notation은 EN↔KO 조인용 중간 다리였으므로 걷어내고,
영문 원문 문자열을 정본 키로 전환한다. 기존 번역은 전량 보존(재번역 제로).

수행 내용:
  1. ko.json 피벗:  {dot키: 한국어} ⨝ en.json{dot키: 영문} → {영문: 한국어}
     충돌 규칙(같은 영문에 다른 한국어): manual-dict 우선 → 최빈값 → 첫 값.
     충돌·고아 내역은 data/migration-conflicts.json에 기록 (소리 없는 덮어쓰기 금지).
  2. en.json 전환:  {영문: 영문} 평면 형식 (키 정렬·중복 제거)
  3. bak 리셋:      기존 bak → ghl-i18n-en.bak.dotnotation.json으로 보존 후
                    새 bak = 새 en.json 사본 (크롤 push 시 diff 기준점)
  4. DNT 검증:      새 ko.json에 검증 토큰(DELETE 등)의 한국어 매핑 미혼입 확인

사용법: python3 scripts/migrate-i18n-string-keys.py
"""

import json
from collections import Counter
from pathlib import Path
import os

REPO = Path(os.environ.get("REPO_PATH", str(Path.home() / "Documents/hyperclass-help-ko")))
DATA = REPO / "data"

EN_P   = DATA / "ghl-i18n-en.json"
KO_P   = DATA / "ghl-i18n-ko.json"
BAK_P  = DATA / "ghl-i18n-en.bak.json"
MAN_P  = DATA / "manual-dict-v401.json"
OLD_BAK_KEEP = DATA / "ghl-i18n-en.bak.dotnotation.json"
CONFLICTS_P  = DATA / "migration-conflicts.json"

DNT_TOKENS = {"DELETE", "CONFIRM", "REMOVE", "CANCEL", "TRANSFER", "DISABLE", "RESET"}


def main():
    en = json.loads(EN_P.read_text(encoding="utf-8"))      # dot키 → 영문
    ko = json.loads(KO_P.read_text(encoding="utf-8"))      # dot키 → 한국어
    manual = json.loads(MAN_P.read_text(encoding="utf-8")) # 영문 → 한국어 (이미 목표 형식)

    first_key = next(iter(en))
    if en[first_key] == first_key:
        print("이미 문자열 키 형식입니다 — 마이그레이션 불필요.")
        return

    print(f"입력: en {len(en):,}키 / ko {len(ko):,}키 / manual {len(manual):,}개")

    # ── 1. 피벗: 영문 원문별로 한국어 후보 수집 ─────────────────────
    candidates: dict[str, dict[str, str]] = {}   # 영문 → {dot키: 한국어}
    orphans = {}                                 # en에 없는 ko 키 (원문 복원 불가)
    for dotkey, ko_val in ko.items():
        en_val = en.get(dotkey)
        if not en_val:
            orphans[dotkey] = ko_val
            continue
        candidates.setdefault(en_val, {})[dotkey] = ko_val

    new_ko: dict[str, str] = {}
    conflicts = {}
    rule_counts = Counter()
    for orig, cand in candidates.items():
        values = list(cand.values())
        uniq = set(values)
        if len(uniq) == 1:
            new_ko[orig] = values[0]
            continue
        # 충돌: manual 우선 → 최빈값 → 첫 값
        if orig in manual:
            chosen, rule = manual[orig], "manual-dict"
        else:
            counts = Counter(values).most_common()
            if counts[0][1] > counts[1][1]:
                chosen, rule = counts[0][0], "최빈값"
            else:
                chosen, rule = values[0], "첫 값"
        new_ko[orig] = chosen
        rule_counts[rule] += 1
        conflicts[orig] = {"채택": chosen, "규칙": rule, "후보": cand}

    # ── 2. 새 en.json: {영문: 영문} ─────────────────────────────────
    new_en = {v: v for v in sorted(set(en.values())) if v}

    # ── 4. DNT 검증 (쓰기 전) ───────────────────────────────────────
    dnt_bad = {t: new_ko[t] for t in DNT_TOKENS if t in new_ko and new_ko[t] != t}
    for t in dnt_bad:
        del new_ko[t]

    # ── 3. 쓰기: bak 보존 → 파일 교체 ───────────────────────────────
    if OLD_BAK_KEEP.exists():
        raise SystemExit(f"❌ {OLD_BAK_KEEP.name} 이미 존재 — 이중 실행 방지를 위해 중단")
    OLD_BAK_KEEP.write_text(BAK_P.read_text(encoding="utf-8"), encoding="utf-8")

    en_text = json.dumps(new_en, ensure_ascii=False, indent=2, sort_keys=True)
    EN_P.write_text(en_text, encoding="utf-8")
    BAK_P.write_text(en_text, encoding="utf-8")
    KO_P.write_text(json.dumps(new_ko, ensure_ascii=False, indent=2, sort_keys=True),
                    encoding="utf-8")
    CONFLICTS_P.write_text(json.dumps(
        {"충돌": conflicts, "고아_dot키": orphans,
         "DNT_제거": dnt_bad, "규칙별_건수": dict(rule_counts)},
        ensure_ascii=False, indent=2), encoding="utf-8")

    # ── 리포트 ──────────────────────────────────────────────────────
    print(f"\n새 en.json: 고유 영문 {len(new_en):,}개 (bak 동일 리셋)")
    print(f"새 ko.json: {len(new_ko):,}쌍 (기존 번역 보존)")
    print(f"충돌: {len(conflicts):,}건 — " +
          (", ".join(f"{r} {n}건" for r, n in rule_counts.items()) or "없음"))
    print(f"고아 dot키(en에 없음): {len(orphans):,}건")
    print(f"DNT 혼입 제거: {len(dnt_bad)}건 {list(dnt_bad) if dnt_bad else ''}")
    print(f"보존: {OLD_BAK_KEEP.name}")
    print(f"내역: {CONFLICTS_P.name}")


if __name__ == "__main__":
    main()
