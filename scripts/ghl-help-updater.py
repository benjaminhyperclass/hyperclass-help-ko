#!/usr/bin/env python3
"""
GHL Help 자동 업데이트봇 v1.0

월 1~2회 실행 → GHL Help 변동 감지 → 번역 → GitBook 자동 배포

사용법:
  python3 ghl-help-updater.py                   # 전체 스캔 (신규+수정+삭제 번역 → 배포)
  python3 ghl-help-updater.py --init            # 최초 1회: 기준점 설정 (번역 안 함)
  python3 ghl-help-updater.py --dry-run         # 변동 감지만 (번역/배포 없음)
  python3 ghl-help-updater.py --tier 1          # Tier 1만
  python3 ghl-help-updater.py --category workflows  # 특정 카테고리만
  python3 ghl-help-updater.py --new-only        # 신규 아티클만 (수정 검사 스킵 → 빠름)
  python3 ghl-help-updater.py --updated-only    # 수정 아티클만
  python3 ghl-help-updater.py --no-push         # git push 스킵
  python3 ghl-help-updater.py --status          # 상태 통계
"""

import json, os, re, sys, time, argparse, hashlib, subprocess
from datetime import datetime
from pathlib import Path

try:
    from anthropic import Anthropic
except ImportError:
    print("❌ pip3 install anthropic"); sys.exit(1)
try:
    import requests
except ImportError:
    print("❌ pip3 install requests"); sys.exit(1)

# ── translator 모듈 동적 임포트 ──────────────────────────────
import importlib.util
_TRANSLATOR_PATH = os.path.join(os.path.dirname(__file__), "ghl-help-translator.py")
if not os.path.exists(_TRANSLATOR_PATH):
    _TRANSLATOR_PATH = os.path.expanduser(
        "~/Documents/benjamin-vault/scripts/ghl-help-translator.py"
    )
_spec = importlib.util.spec_from_file_location("translator", _TRANSLATOR_PATH)
_tr = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_tr)

CATEGORIES        = _tr.CATEGORIES
discover_articles = _tr.discover_articles
fetch_article     = _tr.fetch_article
run_qa            = _tr.run_qa
build_system_prompt = _tr.build_system_prompt
load_glossary     = _tr.load_glossary
url_to_filename   = _tr.url_to_filename
url_hash          = _tr.url_hash
MODEL             = _tr.MODEL
DELAY             = _tr.DELAY
FETCH_DELAY       = _tr.FETCH_DELAY


# ============================================================
# 설정
# ============================================================

VAULT      = os.environ.get("VAULT_PATH", os.path.expanduser("~/Documents/benjamin-vault"))
REPO       = os.environ.get("REPO_PATH", os.path.expanduser("~/Documents/hyperclass-help-ko"))
BOT2_DIR   = os.path.join(VAULT, "01_Projects/Bot2-GHL-Localization")
DOCS       = os.path.join(REPO, "docs")
SUMMARY_MD = os.path.join(REPO, "SUMMARY.md")
# GitHub Actions에서는 REPO 내 state 파일 사용, 로컬은 BOT2_DIR 유지
_default_state = os.path.join(BOT2_DIR, "updater-state.json")
STATE_FILE = os.environ.get("STATE_FILE", _default_state)
REPORT_DIR = os.environ.get("REPORT_DIR", os.path.join(BOT2_DIR, "Daily Progress"))


# ============================================================
# 상태 파일 관리
# ============================================================

def load_state() -> dict:
    if os.path.exists(STATE_FILE):
        with open(STATE_FILE, encoding="utf-8") as f:
            return json.load(f)
    return {"last_run": None, "articles": {}}


def save_state(state: dict):
    state["last_run"] = datetime.now().strftime("%Y-%m-%d %H:%M")
    os.makedirs(os.path.dirname(STATE_FILE), exist_ok=True)
    with open(STATE_FILE, "w", encoding="utf-8") as f:
        json.dump(state, f, ensure_ascii=False, indent=2)


# ============================================================
# 변동 감지 유틸
# ============================================================

def body_checksum(body: str) -> str:
    """본문 MD5 (공백 정규화 후). 16자."""
    normalized = re.sub(r'\s+', ' ', body).strip()
    return hashlib.md5(normalized.encode()).hexdigest()[:16]


def detect_changes(category_key: str, state: dict, check_modified: bool = True):
    """
    카테고리의 신규/수정/삭제 아티클을 감지한다.

    Returns:
        new_articles    — 신규 URL 목록 (아직 번역 안 된 것)
        modified_articles — 수정된 URL 목록 (_fetched 키에 원문 포함)
        deleted_hashes  — 삭제된 url_hash 목록
    """
    articles = state.get("articles", {})

    print(f"  🔍 [{category_key}] URL 수집 중...")
    current = discover_articles(category_key)
    if not current:
        return [], [], []

    current_urls = {a["url"] for a in current}

    # 이 카테고리의 기존 상태 항목
    known_in_cat = {h: v for h, v in articles.items()
                    if v.get("category") == category_key}
    known_urls = {v["url"] for v in known_in_cat.values()}

    # 신규: 현재 있지만 상태에 없음
    new_articles = [a for a in current if a["url"] not in known_urls]

    # 삭제: 상태에 있지만 현재 없음
    deleted_hashes = [h for h, v in known_in_cat.items()
                      if v["url"] not in current_urls]

    # 수정: 양쪽에 있는 것 중 checksum/modified_date가 달라진 것
    modified_articles = []
    if check_modified:
        existing = [a for a in current if a["url"] in known_urls]
        if existing:
            print(f"     수정 확인 중: {len(existing)}개 아티클 fetch...")
        for art in existing:
            h = url_hash(art["url"])
            stored = articles.get(h, {})
            if not stored.get("checksum"):
                # 기준점 없음 → 스킵 (--init으로 먼저 실행해야 함)
                continue

            time.sleep(FETCH_DELAY)
            fetched = fetch_article(art["url"])
            if not fetched["success"]:
                continue

            curr_cksum = body_checksum(fetched["body_markdown"])
            curr_modified = fetched.get("modified_date", "")

            changed = (
                curr_cksum != stored.get("checksum") or
                (curr_modified and curr_modified != stored.get("source_modified"))
            )
            if changed:
                art["_fetched"] = fetched  # 번역 시 재사용
                modified_articles.append(art)

    return new_articles, modified_articles, deleted_hashes


# ============================================================
# 번역 + 저장
# ============================================================

def _resolve_output_path(article: dict, category_key: str) -> str:
    """번역 파일 저장 경로 결정."""
    cat = CATEGORIES[category_key]
    folder_ko = article.get("folder", "") or "기타"
    folder_path = os.path.join(DOCS, cat["local"], folder_ko)
    os.makedirs(folder_path, exist_ok=True)
    return os.path.join(folder_path, url_to_filename(article["url"]))


def translate_and_save(article: dict, category_key: str,
                       client, system_prompt, state: dict) -> bool:
    """아티클 번역 → 저장 → 상태 업데이트. 성공하면 True."""
    cat = CATEGORIES[category_key]
    article["category_ko"] = cat["local"]

    # 이미 fetch된 결과 재사용 (modified_articles에서 넘어온 경우)
    if "_fetched" in article:
        original = {**article["_fetched"], "success": True}
    else:
        time.sleep(FETCH_DELAY)
        original = fetch_article(article["url"])

    if not original["success"]:
        print(f"     ❌ fetch 실패: {article['url']}")
        return False

    today = datetime.now().strftime("%Y-%m-%d")
    folder_ko = article.get("folder", "")
    user_prompt = f"""다음 GHL Help 아티클을 한국어로 번역해주세요.

원문 URL: {article['url']}
카테고리: {cat['local']} > {folder_ko}
원문 수정일: {original['modified_date']}
오늘 날짜: {today}

--- 원문 시작 ---
# {original['title']}

{original['body_markdown']}
--- 원문 끝 ---

위 규칙에 따라 한글화해주세요. 이미지 URL은 반드시 모두 유지하세요."""

    try:
        response = client.messages.create(
            model=MODEL, max_tokens=8000,
            system=system_prompt,
            messages=[{"role": "user", "content": user_prompt}]
        )
        translated = response.content[0].text
    except Exception as e:
        print(f"     ❌ Claude API 실패: {e}")
        return False

    qa = run_qa(original, translated)
    filepath = _resolve_output_path(article, category_key)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(translated)

    h = url_hash(article["url"])
    state.setdefault("articles", {})[h] = {
        "url": article["url"],
        "title_en": original["title"],
        "category": category_key,
        "folder": folder_ko,
        "file_path": filepath,
        "source_modified": original.get("modified_date", ""),
        "checksum": body_checksum(original["body_markdown"]),
        "translated_at": today,
        "qa_passed": qa["passed"],
    }

    status = "✅" if qa["passed"] else "⚠️"
    short = filepath.replace(DOCS + "/", "")
    if qa["issues"]:
        print(f"     {status} {short}  ({', '.join(qa['issues'])})")
    else:
        print(f"     {status} {short}")
    return True


# ============================================================
# --init: 기준점 설정 (번역 없이 현재 상태 기록)
# ============================================================

def init_baseline(args):
    """기존 번역본을 기준으로 updater-state.json 초기화.
    이미 상태에 있는 항목은 스킵하므로 중단 후 재실행 가능."""
    print("\n🔧 기준점 설정 시작")
    print("   각 아티클 fetch가 필요합니다. 전체 완료까지 40분 이상 소요 가능.\n")

    state = load_state()
    tier_filter = int(args.tier) if args.tier else None

    cats = CATEGORIES
    if args.category:
        cats = {args.category: CATEGORIES[args.category]}
    elif tier_filter:
        cats = {k: v for k, v in CATEGORIES.items() if v.get("tier") == tier_filter}

    total_done = 0
    for cat_key, cat in cats.items():
        print(f"  📂 [{cat_key}] {cat['name']}")
        articles = discover_articles(cat_key)
        new_in_cat = 0

        for art in articles:
            h = url_hash(art["url"])
            if h in state.get("articles", {}):
                continue  # 이미 기록됨

            time.sleep(FETCH_DELAY)
            fetched = fetch_article(art["url"])
            if not fetched["success"]:
                continue

            state.setdefault("articles", {})[h] = {
                "url": art["url"],
                "title_en": fetched["title"],
                "category": cat_key,
                "folder": art.get("folder", ""),
                "file_path": None,
                "source_modified": fetched.get("modified_date", ""),
                "checksum": body_checksum(fetched["body_markdown"]),
                "translated_at": None,
                "qa_passed": None,
            }
            new_in_cat += 1
            total_done += 1

            if total_done % 50 == 0:
                save_state(state)
                print(f"     💾 중간 저장: 누적 {total_done}개")

        print(f"     → {new_in_cat}개 신규 기록")

    save_state(state)
    print(f"\n✅ 기준점 설정 완료")
    print(f"   신규 기록: {total_done}개 | 총: {len(state.get('articles', {}))}개")
    print(f"   다음부터 python3 ghl-help-updater.py 로 정기 업데이트 가능")


# ============================================================
# SUMMARY.md 재생성
# ============================================================

_FOLDER_DISPLAY = {
    "01-시작하기":         "시작하기(Getting Started)",
    "02-연락처":          "연락처(Contacts)",
    "03-대화":            "대화(Conversations)",
    "04-캘린더-예약":     "캘린더 & 예약(Calendars & Appointments)",
    "05-기회-파이프라인":  "기회 & 파이프라인(Opportunities & Pipelines)",
    "06-사이트":          "사이트(Sites)",
    "07-워크플로우":      "워크플로우(Workflows)",
    "08-결제":            "결제(Payments)",
    "09-이메일":          "이메일(Email)",
    "10-마케팅":          "마케팅(Marketing)",
    "11-설정":            "설정(Settings)",
    "12-대시보드":        "대시보드(Dashboards)",
    "13-AI-Employee":    "AI 직원(AI Employee)",
    "14-문서-계약":       "문서 & 계약(Documents & Contracts)",
    "15-전화-시스템":     "전화 시스템(Phone System)",
    "16-SaaS-설정":      "SaaS 설정(SaaS Configurator)",
    "17-멤버십-커뮤니티": "멤버십 & 커뮤니티(Memberships & Communities)",
    "18-리포팅":          "리포팅(Reporting)",
    "19-에이전시-뷰":     "에이전시 뷰(Agency View)",
    "20-고객지원":        "고객지원(Customer Support)",
    "21-어필리에이트":    "어필리에이트(Affiliates)",
    "22-Eliza":          "Eliza 에이전트",
    "23-레거시-자동화":   "레거시 자동화(Legacy)",
    "24-대학":            "하이레벨 대학(University)",
    "25-애드온-세일즈":   "애드온 & 세일즈(Add-ons & Sales)",
    "26-산업-가이드":     "산업별 가이드(Industry Guides)",
    "27-앱-마켓":         "앱 마켓플레이스(App Marketplace)",
    "28-에이전시-리포팅": "에이전시 리포팅(Agency Reporting)",
    "29-스냅샷":          "스냅샷(Snapshots)",
    "30-모바일-데스크톱": "모바일 & 데스크톱(Mobile & Desktop)",
    "31-리셀링":          "리셀링(Reselling)",
    "32-알림":            "알림(Notifications)",
    "33-컴플라이언스":    "컴플라이언스(Compliance)",
    "34-국제화":          "국제화(Internationalization)",
    "35-개발자":          "개발자 리소스(Developer Resources)",
    "36-기타":            "기타(Miscellaneous)",
    "37-이커머스-스토어": "이커머스 스토어(E-commerce Store)",
    "38-인증서":          "인증서(Certificates)",
    "39-클라이언트-포털": "클라이언트 포털(Client Portal)",
    "40-병합필드-변수":   "병합 필드 & 변수(Merge Fields)",
    "41-평판-리뷰":       "평판 관리 & 리뷰(Reputation)",
    "42-통합":            "통합(Integrations)",
}


def _md_title(filepath: str) -> str:
    """마크다운 파일에서 첫 번째 H1 제목 추출."""
    try:
        with open(filepath, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line.startswith("# "):
                    return line[2:].strip()
    except Exception:
        pass
    return Path(filepath).stem


def generate_summary() -> int:
    """docs/ 디렉토리를 순회해 SUMMARY.md 재생성. 항목 수를 반환."""
    docs_path = Path(DOCS)
    lines = ["# Hyperclass 도움말\n"]
    article_count = 0

    for top_dir in sorted(docs_path.iterdir()):
        if not top_dir.is_dir():
            continue

        display_name = _FOLDER_DISPLAY.get(top_dir.name, top_dir.name)
        files = []

        for md_file in sorted(top_dir.rglob("*.md")):
            rel_path = md_file.relative_to(Path(REPO))
            title = _md_title(str(md_file))
            # 제목이 사실상 없는 파일(빈 파일, 헤더만) 필터링
            if not title or title.startswith("---"):
                continue
            files.append((title, str(rel_path)))

        if not files:
            continue

        lines.append(f"\n## {display_name}\n")
        for title, rel_path in files:
            lines.append(f"  * [{title}]({rel_path})")
            article_count += 1

    content = "\n".join(lines) + "\n"
    with open(SUMMARY_MD, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"  📋 SUMMARY.md 재생성: {article_count}개 항목")
    return article_count


# ============================================================
# Git 배포
# ============================================================

def git_push(message: str) -> bool:
    """hyperclass-help-ko 레포 git add → commit → push."""
    try:
        subprocess.run(["git", "-C", REPO, "add", "-A"],
                       check=True, capture_output=True)
        diff = subprocess.run(
            ["git", "-C", REPO, "diff", "--cached", "--quiet"],
            capture_output=True
        )
        if diff.returncode == 0:
            print("  ℹ️  스테이징 변경사항 없음 — git push 스킵")
            return False

        subprocess.run(
            ["git", "-C", REPO, "commit", "-m", message],
            check=True, capture_output=True
        )
        subprocess.run(
            ["git", "-C", REPO, "push", "origin", "main"],
            check=True, capture_output=True
        )
        print(f"  🚀 git push 완료: {message}")
        return True
    except subprocess.CalledProcessError as e:
        stderr = e.stderr.decode() if e.stderr else ""
        print(f"  ❌ git 오류: {stderr or e}")
        return False


# ============================================================
# 변동 리포트
# ============================================================

def save_report(summary: dict) -> str:
    """변동 리포트를 vault Daily Progress에 저장하고 경로를 반환."""
    today = datetime.now().strftime("%Y-%m-%d")
    os.makedirs(REPORT_DIR, exist_ok=True)
    report_path = os.path.join(REPORT_DIR, f"{today}-ghl-update-report.md")

    total_new = sum(len(s["new"]) for s in summary.values())
    total_mod = sum(len(s["modified"]) for s in summary.values())
    total_del = sum(len(s["deleted"]) for s in summary.values())

    lines = [
        f"# GHL Help 업데이트 리포트 — {today}\n",
        f"신규: **{total_new}**개 | 수정: **{total_mod}**개 | 삭제: **{total_del}**개\n",
        "---\n",
    ]

    has_changes = False
    for cat_key, data in summary.items():
        n = len(data["new"]); m = len(data["modified"]); d = len(data["deleted"])
        if not (n + m + d):
            continue
        has_changes = True
        cat_name = CATEGORIES.get(cat_key, {}).get("name", cat_key)
        lines.append(f"\n## {cat_name} (`{cat_key}`)\n")

        if data["new"]:
            lines.append(f"### 신규 ({n}개)")
            for title in data["new"]:
                lines.append(f"- {title}")
            lines.append("")
        if data["modified"]:
            lines.append(f"### 수정 ({m}개)")
            for title in data["modified"]:
                lines.append(f"- {title}")
            lines.append("")
        if data["deleted"]:
            lines.append(f"### 삭제 ({d}개)")
            for title in data["deleted"]:
                lines.append(f"- {title}")
            lines.append("")

    if not has_changes:
        lines.append("\n변동 없음 — 모든 아티클이 최신 상태입니다.\n")

    lines.append(f"\n---\n*자동 생성 — ghl-help-updater.py*")

    with open(report_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    return report_path


# ============================================================
# 메인 스캔
# ============================================================

def run_scan(args):
    state = load_state()

    dry_run = args.dry_run
    check_modified = not args.new_only

    client = None
    system_prompt = None
    if not dry_run:
        client = Anthropic()
        system_prompt = build_system_prompt(load_glossary())

    tier_filter = int(args.tier) if args.tier else None
    cats = CATEGORIES
    if args.category:
        if args.category not in CATEGORIES:
            print(f"❌ 카테고리 없음: {args.category}")
            print(f"   사용 가능: {', '.join(CATEGORIES.keys())}")
            sys.exit(1)
        cats = {args.category: CATEGORIES[args.category]}
    elif tier_filter:
        cats = {k: v for k, v in CATEGORIES.items() if v.get("tier") == tier_filter}

    summary = {}
    total_new = total_mod = total_del = 0
    any_translated = False

    for cat_key in cats:
        new_arts, mod_arts, del_hashes = detect_changes(
            cat_key, state, check_modified=check_modified
        )

        summary[cat_key] = {
            "new":      [a.get("title", a["url"]) for a in new_arts],
            "modified": [a.get("title", a["url"]) for a in mod_arts],
            "deleted":  [state["articles"].get(h, {}).get("title_en", h) for h in del_hashes],
        }

        n, m, d = len(new_arts), len(mod_arts), len(del_hashes)
        total_new += n; total_mod += m; total_del += d

        if n + m + d:
            print(f"  📊 변동: 신규 {n} | 수정 {m} | 삭제 {d}")
        else:
            print(f"  ✓  변동 없음")

        if dry_run:
            for a in new_arts:
                print(f"     ✨ 신규: {a.get('title', a['url'])[:70]}")
            for a in mod_arts:
                print(f"     🔄 수정: {a.get('title', a['url'])[:70]}")
            for h in del_hashes:
                print(f"     🗑️  삭제: {state['articles'].get(h, {}).get('title_en', h)[:70]}")
            continue

        # 신규 번역
        if not args.updated_only:
            for art in new_arts:
                print(f"  ✨ 신규: {art.get('title', '')[:55]}")
                if translate_and_save(art, cat_key, client, system_prompt, state):
                    any_translated = True
                time.sleep(DELAY)
                save_state(state)

        # 수정 재번역
        if not args.new_only:
            for art in mod_arts:
                print(f"  🔄 수정: {art.get('title', '')[:55]}")
                if translate_and_save(art, cat_key, client, system_prompt, state):
                    any_translated = True
                time.sleep(DELAY)
                save_state(state)

        # 삭제
        for h in del_hashes:
            fp = state["articles"].get(h, {}).get("file_path")
            if fp and os.path.exists(fp):
                os.remove(fp)
                short = fp.replace(DOCS + "/", "")
                print(f"  🗑️  삭제: {short}")
            state["articles"].pop(h, None)
        if del_hashes:
            any_translated = True
            save_state(state)

    # ── 결과 요약 ──
    print(f"\n{'='*60}")
    print(f"  전체 변동 — 신규: {total_new} | 수정: {total_mod} | 삭제: {total_del}")

    if not dry_run and any_translated:
        print("\n  📋 SUMMARY.md 재생성...")
        generate_summary()

        if not args.no_push:
            today = datetime.now().strftime("%Y-%m-%d")
            msg = (f"chore: GHL Help 자동 업데이트 {today} "
                   f"(신규 {total_new} 수정 {total_mod} 삭제 {total_del})")
            git_push(msg)

    report_path = save_report(summary)
    print(f"  📊 리포트: {report_path}")
    save_state(state)
    print(f"{'='*60}\n")


# ============================================================
# --status
# ============================================================

def show_status():
    state = load_state()
    articles = state.get("articles", {})
    print(f"\n📊 ghl-help-updater 상태")
    print(f"  상태 파일: {STATE_FILE}")
    print(f"  마지막 실행: {state.get('last_run', '없음')}")
    print(f"  추적 중인 아티클: {len(articles)}개")

    by_cat: dict = {}
    no_checksum = 0
    for v in articles.values():
        cat = v.get("category", "기타")
        by_cat[cat] = by_cat.get(cat, 0) + 1
        if not v.get("checksum"):
            no_checksum += 1

    if no_checksum:
        print(f"  ⚠️  기준점 없음: {no_checksum}개 (--init 실행 권장)")

    if by_cat:
        print("\n  카테고리별:")
        for cat, count in sorted(by_cat.items()):
            print(f"    {cat:30s} {count:4d}개")


# ============================================================
# CLI
# ============================================================

def main():
    p = argparse.ArgumentParser(description="GHL Help 자동 업데이트봇 v1.0")
    p.add_argument("--init",         action="store_true", help="최초 1회 기준점 설정")
    p.add_argument("--dry-run",      action="store_true", help="변동 감지만 (번역/배포 없음)")
    p.add_argument("--tier",   "-t", help="Tier 번호 (1~4)")
    p.add_argument("--category", "-c", help="특정 카테고리 키")
    p.add_argument("--new-only",     action="store_true", help="신규 아티클만")
    p.add_argument("--updated-only", action="store_true", help="수정 아티클만")
    p.add_argument("--no-push",      action="store_true", help="git push 스킵")
    p.add_argument("--status",       action="store_true", help="상태 통계")
    args = p.parse_args()

    # dry-run, status, init는 API 키 없어도 됨
    needs_api = not (args.status or args.dry_run or args.init)
    if needs_api and not os.environ.get("ANTHROPIC_API_KEY"):
        print("❌ ANTHROPIC_API_KEY 환경변수를 설정하세요.")
        sys.exit(1)

    if args.status:
        show_status()
    elif args.init:
        init_baseline(args)
    else:
        run_scan(args)


if __name__ == "__main__":
    main()
