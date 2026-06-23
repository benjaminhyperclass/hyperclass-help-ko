#!/usr/bin/env bash
# update-translations.sh
# 신규 i18n 키 감지 → 번역 → 머지 → 빌드
# --yes 플래그: GitHub Actions 비대화형 실행
set -e

YES=0; NO_BUILD=0
for arg in "$@"; do
  [[ "$arg" == "--yes" ]]      && YES=1
  [[ "$arg" == "--no-build" ]] && NO_BUILD=1
done

SCRIPTS="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO="$(cd "$SCRIPTS/.." && pwd)"
VAULT="${VAULT_PATH:-$HOME/Documents/benjamin-vault}"
DATA_DIR="${REPO}/data"

echo "══════════════════════════════════════════"
echo "  GHL 대시보드 한글화 업데이트 파이프라인"
echo "══════════════════════════════════════════"
echo ""

# ── 1. diff 분석 ──────────────────────────────────────────────────
echo "=== 1/5  i18n diff 분석 ==="
python3 "$SCRIPTS/diff-i18n.py" \
  --new "$DATA_DIR/ghl-i18n-en.json" \
  --old "$DATA_DIR/ghl-i18n-en.bak.json" \
  --ko  "$DATA_DIR/ghl-i18n-ko.json"
echo ""

# ── 1.5  영문 값이 바뀐 키 재번역 대상 처리 ──────────────────────
# en.bak 대비 값이 바뀐 키를 ko에서 제거 → 아래 미번역 집계에 포함됨
# (manual-dict 키는 최우선 override라 제외)
python3 - <<'PYEOF'
import json, os
from pathlib import Path
DATA = Path(os.environ.get("REPO_PATH", os.path.expanduser("~/Documents/hyperclass-help-ko"))) / "data"
en_p, bak_p, ko_p, man_p = (DATA/"ghl-i18n-en.json", DATA/"ghl-i18n-en.bak.json",
                            DATA/"ghl-i18n-ko.json", DATA/"manual-dict-v401.json")
if not bak_p.exists():
    print("  (en.bak 없음 — 변경 감지 스킵, 신규 키만 처리)"); raise SystemExit
en  = json.loads(en_p.read_text())
old = json.loads(bak_p.read_text())
ko  = json.loads(ko_p.read_text()) if ko_p.exists() else {}
man = json.loads(man_p.read_text()) if man_p.exists() else {}
changed = [k for k in en if k in old and en[k] != old[k] and k not in man]
for k in changed:
    ko.pop(k, None)
if changed:
    ko_p.write_text(json.dumps(ko, ensure_ascii=False, indent=2))
    (DATA/"i18n-progress.json").unlink(missing_ok=True)
    print(f"  🔄 영문 값 변경 키 {len(changed)}개 → 재번역 대상으로 표시")
    for k in changed[:5]:
        print(f"     {k}: '{old[k]}' → '{en[k]}'")
else:
    print("  변경된 영문 값 없음")
PYEOF
echo ""

# 미번역 키 수 추출
UNTRANSLATED=$(python3 - <<'PYEOF'
import json, os
from pathlib import Path
DATA = Path(os.environ.get("REPO_PATH", os.path.expanduser("~/Documents/hyperclass-help-ko"))) / "data"
en = json.loads((DATA / "ghl-i18n-en.json").read_text()) if (DATA / "ghl-i18n-en.json").exists() else {}
ko = json.loads((DATA / "ghl-i18n-ko.json").read_text()) if (DATA / "ghl-i18n-ko.json").exists() else {}
print(len({k for k in en if k not in ko}))
PYEOF
)

if [ "$UNTRANSLATED" -eq 0 ]; then
  echo "✅ 미번역 키 없음 — 빌드만 진행합니다."
  SKIP_TRANSLATE=1
else
  SKIP_TRANSLATE=0

  # ── 2. 비용 추산 ──────────────────────────────────────────────────
  echo "=== 2/5  비용 추산 ==="
  BATCHES=$(( (UNTRANSLATED + 99) / 100 ))
  COST_LOW=$(python3 -c "print(f'{$BATCHES * 0.009:.2f}')")
  COST_HIGH=$(python3 -c "print(f'{$BATCHES * 0.015:.2f}')")
  echo "  미번역 키: ${UNTRANSLATED}개 (${BATCHES}배치)"
  echo "  예상 비용: \$${COST_LOW} ~ \$${COST_HIGH}"
  echo ""

  # ── 3. 번역 실행 ─────────────────────────────────────────────────
  echo "=== 3/5  번역 실행 ==="
  if [ $YES -eq 0 ]; then
    read -r -p "  번역을 시작하시겠습니까? [y/N] " CONFIRM
    [[ ! "$CONFIRM" =~ ^[Yy]$ ]] && echo "  취소됨." && exit 0
  fi
  if [ -z "$ANTHROPIC_API_KEY" ]; then
    echo "❌ ANTHROPIC_API_KEY 환경변수 없음"
    exit 1
  fi
  python3 "$SCRIPTS/i18n-batch-translator.py"
  echo ""

  # ── 4. 머지 ───────────────────────────────────────────────────────
  echo "=== 4/5  KO 파일 머지 ==="
  python3 "$SCRIPTS/merge-i18n-ko.py" \
    --new "$DATA_DIR/ghl-i18n-ko.json" \
    --old "$DATA_DIR/ghl-i18n-ko.bak.json" \
    --out "$DATA_DIR/ghl-i18n-ko.json"
  echo ""
fi

# ── 5. 빌드 ───────────────────────────────────────────────────────
if [ $NO_BUILD -eq 1 ]; then
  echo "=== 5/5  빌드 스킵 (--no-build) ==="
else
  echo "=== 5/5  dashboard-ko.js 빌드 ==="
  if [ $YES -eq 0 ]; then
    read -r -p "  빌드를 진행하시겠습니까? [y/N] " CONFIRM2
    [[ ! "$CONFIRM2" =~ ^[Yy]$ ]] && echo "  빌드 취소됨." && exit 0
  fi
  REPO_PATH="$REPO" VAULT_PATH="$VAULT" python3 "$SCRIPTS/build-dashboard-ko.py"
fi

echo ""
echo "══════════════════════════════════════════"
echo "  완료!"
echo "══════════════════════════════════════════"
