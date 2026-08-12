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

MODEL       = "claude-sonnet-5"
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

# 검증용 입력 토큰 - 사용자가 다이얼로그에 그대로 타이핑해야 하므로 절대 번역 금지
class FatalTranslationError(RuntimeError):
    """재시도가 의미 없는 설정 오류 — 배치 루프를 즉시 중단시킨다."""


DNT_TOKENS = {"DELETE", "CONFIRM", "REMOVE", "CANCEL", "TRANSFER", "DISABLE", "RESET"}
DNT_KEY_PAT = re.compile(r"(confirmword|typetoconfirm|type_to_confirm|confirmationword)", re.I)
def is_dnt(key, val):
    v = str(val).strip().strip(chr(39)+chr(34))
    return v in DNT_TOKENS or bool(DNT_KEY_PAT.search(key))

GLOSSARY_PROMPT = "\n".join(f"  {en} → {ko}" for en, ko in GLOSSARY.items())


# ── 글로서리 후처리 ──────────────────────────────────────────────
def apply_glossary(text: str) -> str:
    """번역 결과에서 미번역 영문 용어를 글로서리로 강제 치환."""
    for en, ko in sorted(GLOSSARY.items(), key=lambda x: -len(x[0])):
        # 단어 경계로 대소문자 무관 치환
        text = re.sub(rf'\b{re.escape(en)}\b', ko, text, flags=re.IGNORECASE)
    return text


# ── 플레이스홀더 보존 검증 ───────────────────────────────────────
# GHL이 런타임에 치환하는 변수/태그. 번역되면 치환이 실패해 화면에 깨져 보인다.
PH_RE = re.compile(r"\{\{.*?\}\}|\{[^{}]*\}|</?[a-zA-Z][^>]*>")

def placeholders(s: str) -> list:
    return sorted(PH_RE.findall(s))

def ph_ok(en: str, ko: str) -> bool:
    """플레이스홀더 보존 검사.

    기본은 다중집합 비교 — 개수가 줄어드는 변수 소실까지 잡는다.
    단 `|`로 단/복수형을 나눈 원문("{count} Reply | {count} Replies")은
    한국어에 복수형이 없어 하나로 합치는 것이 올바른 번역이므로,
    그 경우에만 집합 비교로 완화한다. (전면 완화하면 변수 소실을 놓친다)
    """
    a, b = placeholders(en), placeholders(ko)
    if "|" in en:
        return set(a) == set(b)
    return a == b


# ── 번역 배치 ────────────────────────────────────────────────────
def _enforce_placeholders(client, items, result: dict) -> dict:
    """프롬프트만 믿지 않고 코드로 강제: 불일치 1회 재시도 → 그래도 불일치면 영문 원문 유지.

    영어로 보이는 편이 {기회}처럼 깨진 변수가 노출되는 것보다 낫다.
    """
    en_of = dict(items)
    bad = [k for k, ko in result.items() if not ph_ok(en_of[k], ko)]
    if not bad:
        return result

    print(f"    ⚠️  플레이스홀더 불일치 {len(bad)}건 — 재시도")
    retry_items = [(k, en_of[k]) for k in bad]
    numbered = "\n".join(f"{i+1}. {v}" for i, (_, v) in enumerate(retry_items))
    prompt = (f"""아래 UI 텍스트를 한국어로 번역하세요.

절대 규칙: 중괄호 변수({{...}} / {{{{...}}}})와 HTML 태그는 문자 하나도 바꾸지 말 것.
중괄호 안의 영어 단어는 변수명이므로 번역 금지. 예) "{{opportunity}}" → "{{opportunity}}" (O), "{{기회}}" (X)

번호만 붙여서 번역 결과만 출력:

{numbered}""")
    try:
        resp = client.messages.create(model=MODEL, max_tokens=16000,
                                      thinking={"type": "disabled"},
                                      messages=[{"role": "user", "content": prompt}])
        raw = next(b.text for b in resp.content if b.type == "text").strip()
        for i, (key, en) in enumerate(retry_items):
            m = re.search(rf'^{i+1}[.)]\s*(.+)$', raw, re.MULTILINE)
            if m:
                ko = apply_glossary(m.group(1).strip())
                if ph_ok(en, ko):
                    result[key] = ko
    except Exception as e:
        print(f"    재시도 실패: {type(e).__name__}")

    still = [k for k in bad if not ph_ok(en_of[k], result.get(k, ""))]
    for k in still:
        result[k] = en_of[k]          # identity — 번역 폐기, 영문 유지
    if still:
        print(f"    ⚠️  재시도 후에도 불일치 {len(still)}건 → 영문 원문 유지")
    return result


def translate_batch(client: anthropic.Anthropic, items: list[tuple[str, str]]) -> dict[str, str]:
    """items: [(i18n_key, english_value), ...] → {i18n_key: korean_value}"""
    numbered = "\n".join(f"{i+1}. {v}" for i, (_, v) in enumerate(items))

    prompt = f"""GoHighLevel SaaS 플랫폼 UI 텍스트를 한국어로 번역하세요.

글로서리 (반드시 이 용어로 번역):
{GLOSSARY_PROMPT}

규칙:
- UI 버튼/메뉴/레이블에 적합한 자연스러운 한국어
- 고유명사(API, SMTP, CRM 등)는 그대로 유지
- 화이트라벨: 번역문에 GoHighLevel / HighLevel / LeadConnector 브랜드명을 쓰지 말고
  '하이퍼클래스'로 옮길 것. 단 URL·API 엔드포인트·코드 안의 도메인은 그대로 둔다.
- 플레이스홀더는 문자 하나도 바꾸지 말고 원형 그대로 유지할 것.
  중괄호 안의 단어는 영어라도 절대 번역하지 않는다 — GHL이 런타임에 치환하는 변수명이라
  번역하면 치환이 실패해 화면에 깨진 문자열이 노출된다.
  대상: {{{{name}}}} {{{{count}}}} 같은 이중 중괄호, {{opportunity}} {{contacts}} 같은 단일 중괄호,
  {{'@'}} 같은 리터럴, <strong> </a> 같은 HTML 태그.
  예) "Add an {{opportunity}}" → "{{opportunity}} 추가"  (O)
      "Add an {{opportunity}}" → "{{기회}} 추가"          (X — 변수명을 번역함)
- 'Type X to confirm' 류 문장에서 따옴표 안 검증 토큰(DELETE, CONFIRM, REMOVE 등)은 영문 그대로 유지
- 번호만 붙여서 번역 결과만 출력 (설명 없이)

영문 ({len(items)}개):
{numbered}

번역 ({len(items)}개, 번호 순서 동일):"""

    for attempt in range(MAX_RETRIES):
        try:
            resp = client.messages.create(
                model=MODEL,
                max_tokens=16000,   # 새 토크나이저(+~30%) 대응 여유
                # Sonnet 5는 thinking 생략 시 적응형 사고가 기본 활성 — 용어집 기반
                # UI 단문 번역엔 불필요하므로 명시적으로 끈다 (2026-08-11 프로브로 수용 확인)
                thinking={"type": "disabled"},
                messages=[{"role": "user", "content": prompt}]
            )
            # content는 블록 리스트 — 사고 블록이 앞설 수 있으므로 타입으로 좁혀 꺼낸다
            raw = next(b.text for b in resp.content if b.type == "text").strip()
            result = {}
            for i, (key, _) in enumerate(items):
                m = re.search(rf'^{i+1}[.)]\s*(.+)$', raw, re.MULTILINE)
                if m:
                    ko = apply_glossary(m.group(1).strip())
                    result[key] = ko
            if len(result) >= len(items) * 0.85:
                return _enforce_placeholders(client, items, result)
            print(f"    파싱 {len(result)}/{len(items)}, 재시도 {attempt+1}...")
            time.sleep(2)
        except anthropic.RateLimitError:
            wait = 30 * (attempt + 1)
            print(f"    RateLimit, {wait}초 대기...")
            time.sleep(wait)
        except (anthropic.AuthenticationError, anthropic.PermissionDeniedError,
                anthropic.NotFoundError) as e:
            # 재시도해도 절대 복구되지 않는 설정 오류(키 무효·권한·모델 단종).
            # 181배치 × 3회 재시도로 시간을 태우지 않도록 즉시 중단한다.
            raise FatalTranslationError(f"복구 불가 오류 — {type(e).__name__}: {e}") from e
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
    # DNT: 검증 토큰은 번역하지 않고 원문 유지
    _dnt = {k: v for k, v in remaining.items() if is_dnt(k, v)}
    if _dnt:
        ko_data.update(_dnt)
        save_output(ko_data)
        remaining = {k: v for k, v in remaining.items() if k not in _dnt}
        print(f"DNT(검증 토큰) 원문 유지: {len(_dnt)}개")
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

        try:
            translations = translate_batch(client, batch)
        except FatalTranslationError as e:
            print(f"\n\n❌ {e}")
            print(f"   배치 {batch_num}/{total_batches}에서 중단 — 설정을 고친 뒤 재실행하세요.")
            print(f"   (지금까지 번역 {done:,}개는 {OUTPUT_FILE}에 저장돼 있습니다)")
            sys.exit(1)
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

    # ── 성공 판정 가드 ────────────────────────────────────────────
    # 전 배치가 실패해도 exit 0으로 끝나면 워크플로우가 초록으로 표시돼
    # "아무 일도 일어나지 않은 성공"이 배포까지 통과한다. 실제로 두 번 발생함.
    fail_ratio = errors / total_batches if total_batches else 0
    if done == 0:
        print(f"\n❌ 번역된 키가 하나도 없습니다 ({errors}/{total_batches}배치 실패).")
        sys.exit(1)
    if fail_ratio > 0.10:
        print(f"\n❌ 실패율 {fail_ratio:.0%} ({errors}/{total_batches}배치) — 임계 10% 초과.")
        sys.exit(1)


if __name__ == "__main__":
    main()
