#!/usr/bin/env python3
"""
GHL i18n 배치 번역기

INPUT:  ~/Documents/benjamin-vault/data/ghl-i18n-en.json
OUTPUT: ~/Documents/benjamin-vault/data/ghl-i18n-ko.json

사용법:
  python3 i18n-batch-translator.py            # 전체 번역 (중단 후 재개 가능)
  python3 i18n-batch-translator.py --dry-run  # 통계만 확인
  python3 i18n-batch-translator.py --reset    # 진행 상태 초기화
"""

import json, os, sys, time, re, argparse
from pathlib import Path

try:
    import anthropic
except ImportError:
    print("pip3 install anthropic")
    sys.exit(1)

# ── 경로 (env var 우선) ──────────────────────────────────────────
VAULT       = Path(os.environ.get("VAULT_PATH", str(Path.home() / "Documents/benjamin-vault")))
REPO        = Path(os.environ.get("REPO_PATH",  str(Path.home() / "Documents/hyperclass-help-ko")))
# GitHub Actions: repo/data/ 우선
DATA        = (REPO / "data") if (REPO / "data").exists() else (VAULT / "data")
INPUT_FILE  = DATA / "ghl-i18n-en.json"
OUTPUT_FILE = DATA / "ghl-i18n-ko.json"
PROGRESS    = DATA / "i18n-progress.json"

MODEL       = "claude-sonnet-4-20250514"
BATCH_SIZE  = 100
MAX_RETRIES = 3

# ── 글로서리: 번역 후 강제 치환 ─────────────────────────────────
# 형식: 영문 원문 → 한국어 (Claude가 다르게 번역했을 때 override)
GLOSSARY = {
    "Pipeline":       "파이프라인",
    "Funnel":         "퍼널",
    "Workflow":       "워크플로우",
    "Automation":     "자동화",
    "Trigger":        "트리거",
    "Action":         "액션",
    "Integration":    "연동",
    "Webhook":        "웹훅",
    "Landing Page":   "랜딩 페이지",
    "Opportunity":    "기회",
    "Opportunities":  "기회",
    "Tag":            "태그",
    "Membership":     "멤버십",
    "Reputation":     "평판",
    "Reporting":      "리포팅",
    "Analytics":      "분석",
    "Booking":        "예약",
    "Invoice":        "인보이스",
    "Subscription":   "구독",
    "Coupon":         "쿠폰",
    "Affiliate":      "제휴",
    "Course":         "코스",
    "Community":      "커뮤니티",
    "Dashboard":      "대시보드",
    "Campaign":       "캠페인",
    "Template":       "템플릿",
    "Snapshot":       "스냅샷",
    "Sub-account":    "서브 계정",
    "Agency":         "에이전시",
    "Whitelabel":     "화이트 라벨",
    "White-label":    "화이트 라벨",
    "Onboarding":     "온보딩",
    "Calendar":       "캘린더",
    "Survey":         "설문",
    "Form":           "양식",
    "Media":          "미디어",
    "Blog":           "블로그",
}

GLOSSARY_PROMPT = "\n".join(f"  {en} → {ko}" for en, ko in GLOSSARY.items())


# ── 글로서리 후처리 ──────────────────────────────────────────────
def apply_glossary(text: str) -> str:
    """번역 결과에서 미번역 영문 용어를 글로서리로 강제 치환."""
    for en, ko in sorted(GLOSSARY.items(), key=lambda x: -len(x[0])):
        # 단어 경계로 대소문자 무관 치환
        text = re.sub(rf'\b{re.escape(en)}\b', ko, text, flags=re.IGNORECASE)
    return text


# ── 번역 배치 ────────────────────────────────────────────────────
def translate_batch(client: anthropic.Anthropic, items: list[tuple[str, str]]) -> dict[str, str]:
    """items: [(i18n_key, english_value), ...] → {i18n_key: korean_value}"""
    numbered = "\n".join(f"{i+1}. {v}" for i, (_, v) in enumerate(items))

    prompt = f"""GoHighLevel SaaS 플랫폼 UI 텍스트를 한국어로 번역하세요.

글로서리 (반드시 이 용어로 번역):
{GLOSSARY_PROMPT}

규칙:
- UI 버튼/메뉴/레이블에 적합한 자연스러운 한국어
- 고유명사(API, SMTP, CRM, GoHighLevel 등)는 그대로 유지
- {{name}}, {{count}} 같은 변수는 그대로 유지
- 번호만 붙여서 번역 결과만 출력 (설명 없이)

영문 ({len(items)}개):
{numbered}

번역 ({len(items)}개, 번호 순서 동일):"""

    for attempt in range(MAX_RETRIES):
        try:
            resp = client.messages.create(
                model=MODEL,
                max_tokens=4096,
                messages=[{"role": "user", "content": prompt}]
            )
            raw = resp.content[0].text.strip()
            result = {}
            for i, (key, _) in enumerate(items):
                m = re.search(rf'^{i+1}[.)]\s*(.+)$', raw, re.MULTILINE)
                if m:
                    ko = apply_glossary(m.group(1).strip())
                    result[key] = ko
            if len(result) >= len(items) * 0.85:
                return result
            print(f"    파싱 {len(result)}/{len(items)}, 재시도 {attempt+1}...")
            time.sleep(2)
        except anthropic.RateLimitError:
            wait = 30 * (attempt + 1)
            print(f"    RateLimit, {wait}초 대기...")
            time.sleep(wait)
        except Exception as e:
            print(f"    오류: {e}, 재시도 {attempt+1}...")
            time.sleep(5)
    return {}


# ── 진행 상태 ────────────────────────────────────────────────────
def load_progress() -> dict:
    if PROGRESS.exists():
        return json.loads(PROGRESS.read_text())
    return {"completed": [], "failed": []}

def save_progress(p: dict):
    PROGRESS.write_text(json.dumps(p, indent=2))

def load_output() -> dict:
    if OUTPUT_FILE.exists():
        return json.loads(OUTPUT_FILE.read_text(encoding="utf-8"))
    return {}

def save_output(data: dict):
    OUTPUT_FILE.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


# ── 메인 ─────────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--reset",   action="store_true", help="진행 상태 초기화")
    args = parser.parse_args()

    if args.reset:
        for f in [PROGRESS, OUTPUT_FILE]:
            if f.exists():
                f.unlink()
        print("진행 상태 초기화 완료")
        return

    if not INPUT_FILE.exists():
        print(f"❌ 입력 파일 없음: {INPUT_FILE}")
        print("   ghl-i18n-en.json을 data/ 폴더에 넣어주세요.")
        sys.exit(1)

    en_data: dict = json.loads(INPUT_FILE.read_text(encoding="utf-8"))
    print(f"입력: {len(en_data):,}개 키")

    progress = load_progress()
    ko_data  = load_output()

    # 완료된 키 제외
    remaining = {k: v for k, v in en_data.items() if k not in ko_data}
    total_batches = (len(remaining) + BATCH_SIZE - 1) // BATCH_SIZE

    print(f"완료: {len(ko_data):,}개 / 남은 번역: {len(remaining):,}개 ({total_batches}배치)")

    if args.dry_run:
        print("\n[dry-run] 실제 번역 없이 종료")
        return

    if not remaining:
        print("✅ 모든 키 번역 완료")
        return

    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("❌ ANTHROPIC_API_KEY 환경변수 없음")
        sys.exit(1)

    client = anthropic.Anthropic(api_key=api_key)
    items  = list(remaining.items())
    done   = 0
    errors = 0

    print(f"\n번역 시작 ({MODEL})\n")

    for batch_idx in range(total_batches):
        start = batch_idx * BATCH_SIZE
        batch = items[start:start + BATCH_SIZE]
        batch_num = batch_idx + 1

        print(f"배치 {batch_num}/{total_batches} ({len(batch)}개)...", end=" ", flush=True)
        t0 = time.time()

        translations = translate_batch(client, batch)
        elapsed = time.time() - t0

        if translations:
            ko_data.update(translations)
            save_output(ko_data)
            progress["completed"].append(batch_num)
            save_progress(progress)
            done += len(translations)
            print(f"✅ {len(translations)}개 ({elapsed:.1f}s) | 누적 {len(ko_data):,}/{len(en_data):,}")
        else:
            progress["failed"].append(batch_num)
            save_progress(progress)
            errors += 1
            print(f"❌ 실패 (batch {batch_num})")

        # Rate limit 방지
        if batch_num < total_batches:
            time.sleep(0.5)

    print(f"\n── 완료 ───────────────────────────")
    print(f"  번역: {done:,}개")
    print(f"  실패: {errors}배치")
    print(f"  출력: {OUTPUT_FILE}")

    if progress["failed"]:
        print(f"\n  실패 배치 재시도: python3 i18n-batch-translator.py")


if __name__ == "__main__":
    main()
