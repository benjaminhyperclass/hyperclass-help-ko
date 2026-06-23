#!/usr/bin/env python3
"""
GHL UI 한글화 자동 업데이터 v1.0

크롤링 결과 → 미번역 감지 → Claude 번역 → JS 업데이트 → minify → git push → CDN 퍼지

사용법:
  python3 ghl-ui-updater.py --dry-run        # 미번역 목록만 출력 (번역/배포 없음)
  python3 ghl-ui-updater.py --update         # 번역 + 배포 전체 실행
  python3 ghl-ui-updater.py --run-full       # 크롤링 + 번역 + 배포
  python3 ghl-ui-updater.py --no-push        # 번역은 하되 git push 스킵
  python3 ghl-ui-updater.py --no-purge       # CDN 퍼지 스킵
"""

import json, re, os, sys, subprocess, argparse, urllib.request
from datetime import datetime
from pathlib import Path

try:
    import anthropic
except ImportError:
    print("❌ pip3 install anthropic"); sys.exit(1)

# ============================================================
# 설정
# ============================================================

VAULT        = os.environ.get("VAULT_PATH", os.path.expanduser("~/Documents/benjamin-vault"))
HELP_REPO    = os.environ.get("REPO_PATH",  os.path.expanduser("~/Documents/hyperclass-help-ko"))
JS_DIR       = os.path.join(HELP_REPO, "js")
H0_DIR       = os.path.join(VAULT, "01_Projects/Bot2-GHL-Localization/phase-h0-uiux")
_glossary_repo = os.path.join(HELP_REPO, "data/glossary/ghl-glossary.json")
GLOSSARY     = _glossary_repo if os.path.exists(_glossary_repo) else os.path.join(VAULT, "07_Meta/glossary/ghl-glossary.json")
VERSION_FILE = os.path.join(JS_DIR, "version.json")
REPORT_DIR   = os.path.join(VAULT, "03_Resources/Bot2-QA")
TERSER       = os.environ.get("TERSER_PATH", os.path.expanduser("~/node_modules/terser/bin/terser"))

CDN_PURGE_URLS = [
    "https://purge.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@main/js/dashboard-ko.min.js",
    "https://purge.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@main/js/community-ko.min.js",
    "https://purge.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@main/js/version.json",
]

MODEL = "claude-sonnet-4-20250514"


# ============================================================
# 딕셔너리 추출 / 저장
# ============================================================

def load_dict(js_path: str) -> dict:
    """JS 파일에서 var t={...}; 블록을 파싱해 딕셔너리를 반환한다."""
    content = Path(js_path).read_text(encoding="utf-8")
    m = re.search(r'var t=\{(.+?)\};', content, re.DOTALL)
    if not m:
        raise ValueError(f"딕셔너리 블록을 찾을 수 없음: {js_path}")
    return dict(re.findall(r'"([^"]+)":"([^"]+)"', m.group(1)))


def save_dict(js_path: str, merged: dict, added_count: int):
    """기존 JS 파일의 딕셔너리를 merged로 교체하고 번역 수 주석을 업데이트한다."""
    content = Path(js_path).read_text(encoding="utf-8")
    entries = ",\n".join(f'  "{k}":"{v}"' for k, v in sorted(merged.items()))
    new_block = f"var t={{\n{entries}\n}};"
    content = re.sub(r'var t=\{.+?\};', new_block, content, flags=re.DOTALL)
    content = re.sub(r'// Translations: \d+', f'// Translations: {len(merged)}', content)
    Path(js_path).write_text(content, encoding="utf-8")


# ============================================================
# 미번역 감지
# ============================================================

def find_untranslated(crawled_texts: list, existing: dict) -> list:
    """크롤링 결과에서 기존 딕셔너리에 없는 영문 텍스트를 반환한다."""
    skip = re.compile(
        r'^[\d\s.,:%$#*+\-\/\(\)]+$'                        # 숫자·기호만
        r'|[가-힣]'                                           # 한글 포함 (이미 번역됨)
        r'|^https?://'                                       # URL
        r'|@'                                                # 이메일/도메인
        r'|\d+\s+Invoice'                                    # "0 Invoice(s)..." 동적
        r'|\d+\s+(Products?|prices?|page)'                   # 동적 카운트
        r'|^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d'  # 날짜
        r'|^\d{1,2}:\d{2}'                                  # 시간
        r'|^INV-\d+'                                         # 인보이스 번호
        r'|^[A-Z]+-\d+'                                      # 코드 패턴 (INV-xxx)
        r'|\d+\s*/\s*page'                                   # "10 / page"
        r'|Hyperclass|TrueGrow'                              # 고유 브랜드/계약서명
        r'|⌘'                                                # 키보드 단축키 심볼
        r'|^[a-z]'                                           # 소문자 시작 (URL 조각 등)
        r'|^Benjamin\s'                                      # 관리자 이름 (동적 데이터)
        r'|,\s*[A-Z][a-z]+-gu\b'                            # 한국 행정구역 주소
        r'|^\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{4}'  # "15 Mar 2026"
        r'|\d+\s*-\s*\d+\s+of\s+\d+'                       # "1 - 8 of 8" 페이지네이션
        r'|\d+\s+to\s+\d+\s+of\s+'                         # "1 to 8 of 8 result(s)"
        r'|Activate now'                                     # "Activate now - Live in N days" 동적
        r'|^\d+\s+[Oo]pportunit'                            # "0 Opportunities" 동적 카운트
        r'|^\d+\s+opportunit'                               # "0 opportunities selected"
        r'|^[,"\[]'                                          # 잘린 문장/인용/특수태그 시작
        r'|Advanced Filters \(\d'                            # "Advanced Filters (1)" 동적
    )
    partial_prefixes = ("We're ", "We've ", "We're ", "We've ")
    result = []
    for text in crawled_texts:
        if text in existing:
            continue
        if not re.search(r'[a-zA-Z]', text):
            continue
        if len(text) <= 1 or len(text) > 80:
            continue
        if skip.search(text):
            continue
        # 이모지 포함 텍스트 제외
        if any(ord(c) > 0x2FFF and not (0xAC00 <= ord(c) <= 0xD7AF) for c in text):
            continue
        # "We're/We've" 로 시작하는 부분 문장 제외
        if text.startswith(partial_prefixes):
            continue
        result.append(text)
    return result


# ============================================================
# 번역
# ============================================================

def load_glossary_terms() -> list:
    if not os.path.exists(GLOSSARY):
        return []
    with open(GLOSSARY, encoding="utf-8") as f:
        return json.load(f).get("terms", [])


def translate_batch(texts: list, glossary: list) -> dict:
    """Claude API로 50개씩 배치 번역한다."""
    client = anthropic.Anthropic()
    glossary_str = "\n".join(
        f'- {t["en"]} → {t["ko"]}' for t in glossary[:40]
    )
    results = {}

    for i in range(0, len(texts), 50):
        batch = texts[i:i + 50]
        prompt = f"""다음 GHL(GoHighLevel) CRM 대시보드 영문 UI 텍스트를 한국어로 번역해주세요.

규칙:
1. 버튼/라벨은 명사형 (예: "저장", "삭제", "연락처")
2. 문장은 해요체 (예: "항목이 없어요", "검색해보세요")
3. 영-한 병기 불필요 (UI에 한국어만 표시)
4. 용어 사전 필수 준수 (아래)
5. JSON 형식으로만 응답: {{"원문": "번역"}}
6. 번역값에 큰따옴표 사용 금지

용어 사전:
{glossary_str}

번역할 텍스트:
{json.dumps(batch, ensure_ascii=False)}"""

        try:
            response = client.messages.create(
                model=MODEL, max_tokens=4096,
                messages=[{"role": "user", "content": prompt}]
            )
            raw = response.content[0].text.strip()
            # JSON 블록 추출
            m = re.search(r'\{.+\}', raw, re.DOTALL)
            if m:
                batch_result = json.loads(m.group())
                results.update(batch_result)
                print(f"     번역 {i+1}~{i+len(batch)}: {len(batch_result)}개 완료")
        except Exception as e:
            print(f"     ❌ 배치 {i+1}~{i+len(batch)} 실패: {e}")

    return results


# ============================================================
# Minify
# ============================================================

def minify(src: str, dst: str):
    """terser로 JS를 minify한다."""
    if not os.path.exists(TERSER):
        # terser 없으면 단순 복사 (공백 제거 정도만)
        content = Path(src).read_text(encoding="utf-8")
        content = re.sub(r'\s+', ' ', content).strip()
        Path(dst).write_text(content, encoding="utf-8")
        print(f"  ⚠️  terser 없음 — 단순 공백 압축: {dst}")
        return
    subprocess.run(
        ["node", TERSER, src, "-o", dst, "--compress", "--mangle"],
        check=True, capture_output=True
    )


# ============================================================
# Git push
# ============================================================

def git_push(message: str) -> bool:
    try:
        subprocess.run(["git", "-C", HELP_REPO, "add", "js/"], check=True, capture_output=True)
        diff = subprocess.run(
            ["git", "-C", HELP_REPO, "diff", "--cached", "--quiet"], capture_output=True
        )
        if diff.returncode == 0:
            print("  ℹ️  변경사항 없음 — push 스킵")
            return False
        subprocess.run(["git", "-C", HELP_REPO, "commit", "-m", message],
                       check=True, capture_output=True)
        subprocess.run(["git", "-C", HELP_REPO, "push", "origin", "main"],
                       check=True, capture_output=True)
        print(f"  🚀 git push 완료: {message}")
        return True
    except subprocess.CalledProcessError as e:
        print(f"  ❌ git 오류: {e.stderr.decode() if e.stderr else e}")
        return False


# ============================================================
# CDN 퍼지
# ============================================================

def purge_cdn():
    for url in CDN_PURGE_URLS:
        try:
            urllib.request.urlopen(url, timeout=10)
            print(f"  ✅ 퍼지: {url.split('/')[-1]}")
        except Exception as e:
            print(f"  ⚠️  퍼지 실패: {url.split('/')[-1]} — {e}")


# ============================================================
# version.json 업데이트
# ============================================================

def bump_version(total: int, crawl_date=None):
    if not os.path.exists(VERSION_FILE):
        return
    with open(VERSION_FILE, encoding="utf-8") as f:
        v = json.load(f)

    parts = v["dashboard"]["version"].split(".")
    parts[2] = str(int(parts[2]) + 1)
    v["dashboard"]["version"] = ".".join(parts)
    v["dashboard"]["translation_count"] = total
    v["dashboard"]["last_updated"] = datetime.now().isoformat()
    if crawl_date:
        v["dashboard"]["last_crawled"] = crawl_date

    with open(VERSION_FILE, "w", encoding="utf-8") as f:
        json.dump(v, f, indent=2, ensure_ascii=False)
    print(f"  📦 version.json: {v['dashboard']['version']} ({total}개)")


# ============================================================
# 리포트
# ============================================================

def save_report(crawled: int, existing: int, new_translations: dict, errors: list) -> str:
    today = datetime.now().strftime("%Y-%m-%d")
    os.makedirs(REPORT_DIR, exist_ok=True)
    path = os.path.join(REPORT_DIR, f"ui-update-report-{today}.md")

    lines = [
        f"# GHL UI 한글화 업데이트 리포트 — {today}\n",
        f"크롤링: **{crawled}**개 | 기존: **{existing}**개 | 신규 추가: **{len(new_translations)}**개\n",
        "---\n",
    ]

    if new_translations:
        lines.append("## 신규 번역\n")
        lines.append("| 원문 | 번역 |")
        lines.append("|---|---|")
        for k, v in sorted(new_translations.items()):
            lines.append(f"| {k} | {v} |")
        lines.append("")

    if errors:
        lines.append(f"\n## 오류 ({len(errors)}개)\n")
        for e in errors:
            lines.append(f"- {e}")

    lines.append("\n---\n*자동 생성 — ghl-ui-updater.py*")
    Path(path).write_text("\n".join(lines), encoding="utf-8")
    return path


# ============================================================
# 메인 업데이트 로직
# ============================================================

def run_update(no_push=False, no_purge=False, dry_run=False):
    # 최신 크롤링 파일 로드
    crawl_files = sorted(Path(H0_DIR).glob("ghl-texts-*.json"))
    if not crawl_files:
        print("❌ 크롤링 데이터 없음 — 먼저 ghl-ui-crawler.py 를 실행하세요.")
        sys.exit(1)

    latest = crawl_files[-1]
    print(f"  📂 크롤링 파일: {latest.name}")
    with open(latest, encoding="utf-8") as f:
        crawled_data = json.load(f)

    crawled_texts = crawled_data["all_unique_texts"]
    crawl_date = crawled_data.get("crawl_date")

    # 기존 딕셔너리
    js_path = os.path.join(JS_DIR, "dashboard-ko.js")
    existing = load_dict(js_path)
    print(f"  📖 기존 번역: {len(existing)}개")

    # 미번역 감지
    untranslated = find_untranslated(crawled_texts, existing)
    print(f"  🔍 미번역 감지: {len(untranslated)}개 / 크롤링 {len(crawled_texts)}개")

    if dry_run:
        if untranslated:
            print("\n  미번역 목록:")
            for t in untranslated[:30]:
                print(f"    - {t}")
            if len(untranslated) > 30:
                print(f"    ... 외 {len(untranslated) - 30}개")
        else:
            print("  ✅ 미번역 없음 — 모두 최신 상태")
        return

    if not untranslated:
        print("  ✅ 미번역 없음")
        save_report(len(crawled_texts), len(existing), {}, [])
        return

    # 번역
    print(f"\n  🤖 Claude 번역 시작 ({len(untranslated)}개)...")
    glossary = load_glossary_terms()
    new_translations = translate_batch(untranslated, glossary)
    print(f"  ✅ 번역 완료: {len(new_translations)}개")

    if not new_translations:
        print("  ⚠️  번역 결과 없음")
        return

    # JS 업데이트
    merged = {**existing, **new_translations}
    save_dict(js_path, merged, len(new_translations))
    print(f"  📝 dashboard-ko.js 업데이트: {len(merged)}개")

    # Minify
    minify(js_path, os.path.join(JS_DIR, "dashboard-ko.min.js"))
    print(f"  📦 dashboard-ko.min.js 생성")

    # version.json 업데이트
    bump_version(len(merged), crawl_date)

    # Git push
    if not no_push:
        today = datetime.now().strftime("%Y-%m-%d")
        git_push(f"[Auto] UI 한글화 업데이트: +{len(new_translations)}개 ({today})")

    # CDN 퍼지
    if not no_purge and not no_push:
        print("  🔄 CDN 퍼지...")
        purge_cdn()

    # 리포트
    report = save_report(len(crawled_texts), len(existing), new_translations, [])
    print(f"  📊 리포트: {report}")
    print(f"\n✅ 완료! 기존 {len(existing)} + 신규 {len(new_translations)} = 총 {len(merged)}개")


# ============================================================
# CLI
# ============================================================

def main():
    p = argparse.ArgumentParser(description="GHL UI 한글화 자동 업데이터 v1.0")
    p.add_argument("--dry-run",   action="store_true", help="미번역 목록만 출력")
    p.add_argument("--update",    action="store_true", help="번역 + 배포")
    p.add_argument("--run-full",  action="store_true", help="크롤링 + 번역 + 배포")
    p.add_argument("--no-push",   action="store_true", help="git push 스킵")
    p.add_argument("--no-purge",  action="store_true", help="CDN 퍼지 스킵")
    args = p.parse_args()

    if not args.dry_run and not os.environ.get("ANTHROPIC_API_KEY"):
        print("❌ ANTHROPIC_API_KEY 환경변수를 설정하세요.")
        sys.exit(1)

    print(f"\n{'='*60}")
    print(f"  GHL UI 한글화 자동 업데이터")
    print(f"{'='*60}\n")

    if args.run_full:
        # 크롤러를 subprocess로 실행
        import importlib.util
        crawler_path = os.path.join(VAULT, "scripts/ghl-ui-crawler.py")
        spec = importlib.util.spec_from_file_location("crawler", crawler_path)
        crawler = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(crawler)
        print("  🕷️  크롤링 시작...")
        crawler.crawl()
        print()

    run_update(
        no_push=args.no_push,
        no_purge=args.no_purge,
        dry_run=args.dry_run,
    )


if __name__ == "__main__":
    main()
