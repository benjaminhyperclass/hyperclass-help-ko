#!/usr/bin/env python3
"""
GHL i18n EN 키 자동 추출 (Playwright)

GHL 대시보드에 로그인 후 Vue i18n 메시지 객체를 추출해 JSON으로 저장.
GitHub Actions 또는 로컬에서 실행 가능.

사용법:
  python3 extract-ghl-i18n.py
  python3 extract-ghl-i18n.py --dry-run   # 추출만, 파일 덮어쓰기 없음

환경변수:
  GHL_EMAIL      GHL 로그인 이메일
  GHL_PASSWORD   GHL 로그인 비밀번호
  GHL_URL        대시보드 URL (기본: https://app.gohighlevel.com)
  REPO_PATH      저장 경로 (기본: ~/Documents/hyperclass-help-ko)
  VAULT_PATH     데이터 경로 (기본: ~/Documents/benjamin-vault)
"""

import json, os, sys, argparse, time
from pathlib import Path

# ── 경로 설정 ────────────────────────────────────────────────────
REPO  = Path(os.environ.get("REPO_PATH",  str(Path.home() / "Documents/hyperclass-help-ko")))
VAULT = Path(os.environ.get("VAULT_PATH", str(Path.home() / "Documents/benjamin-vault")))
DATA  = VAULT / "data"

# GitHub Actions 환경: data/ 우선
_repo_data = REPO / "data"
if _repo_data.exists():
    DATA = _repo_data

GHL_URL    = os.environ.get("GHL_URL", "https://app.gohighlevel.com")
GHL_EMAIL  = os.environ.get("GHL_EMAIL", "")
GHL_PASS   = os.environ.get("GHL_PASSWORD", "")
GHL_LOC_ID = os.environ.get("GHL_LOC_ID", "")  # 로그인 후 특정 서브계정으로 이동

OUTPUT    = DATA / "ghl-i18n-en.json"
BACKUP    = DATA / "ghl-i18n-en.bak.json"

# ── i18n 추출 JS (북마클릿 동일 로직) ────────────────────────────
EXTRACT_JS = """
(function() {
  try {
    var app = document.querySelector('#app').__vue_app__;
    var i18n = app.config.globalProperties.$i18n;
    var msgs = i18n.getLocaleMessage
      ? i18n.getLocaleMessage('en')
      : (i18n.messages && i18n.messages.value && i18n.messages.value['en']) || {};

    function flat(obj, prefix) {
      var out = {};
      Object.keys(obj).forEach(function(k) {
        var val = obj[k];
        var key = prefix ? prefix + '.' + k : k;
        if (val && typeof val === 'object') Object.assign(out, flat(val, key));
        else out[key] = val;
      });
      return out;
    }

    var result = flat(msgs, '');
    return { ok: true, keys: Object.keys(result).length, data: result };
  } catch(e) {
    return { ok: false, error: e.message };
  }
})()
"""


def check_credentials():
    if not GHL_EMAIL or not GHL_PASS:
        print("❌ GHL_EMAIL / GHL_PASSWORD 환경변수가 없어요.")
        print("   export GHL_EMAIL='your@email.com'")
        print("   export GHL_PASSWORD='yourpassword'")
        sys.exit(1)


def extract_with_playwright(dry_run: bool):
    try:
        from playwright.sync_api import sync_playwright, TimeoutError as PWTimeout
    except ImportError:
        print("❌ playwright가 설치되어 있지 않아요.")
        print("   pip install playwright && playwright install chromium --with-deps")
        sys.exit(1)

    check_credentials()

    print(f"🔐 GHL 로그인 중... ({GHL_URL})")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        ctx = browser.new_context(
            user_agent=(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0.0.0 Safari/537.36"
            )
        )
        page = ctx.new_page()

        # ── 로그인 ──────────────────────────────────────────────────
        try:
            page.goto(GHL_URL, timeout=30000)
            page.wait_for_load_state("networkidle", timeout=30000)
        except PWTimeout:
            print("⚠️  페이지 로드 타임아웃 — 계속 진행합니다.")

        # 로그인 폼 감지
        email_sel  = 'input[type="email"], input[name="email"], #email'
        pass_sel   = 'input[type="password"], input[name="password"], #password'
        submit_sel = 'button[type="submit"], button:has-text("Sign In"), button:has-text("Login")'

        try:
            page.wait_for_selector(email_sel, timeout=10000)
            page.fill(email_sel, GHL_EMAIL)
            page.fill(pass_sel, GHL_PASS)
            page.click(submit_sel)
            print("  로그인 버튼 클릭...")
        except PWTimeout:
            # 이미 로그인된 상태일 수 있음
            print("  로그인 폼 없음 — 이미 로그인된 상태일 수 있어요.")

        # 대시보드 로드 대기 (Vue 앱 마운트 필요)
        print("  대시보드 로드 대기 중...")
        try:
            page.wait_for_selector("#app", timeout=30000)
            page.wait_for_function(
                "document.querySelector('#app') && document.querySelector('#app').__vue_app__",
                timeout=30000
            )
        except PWTimeout:
            print("❌ Vue 앱 초기화 타임아웃. 로그인 실패 또는 2FA 필요.")
            print(f"   현재 URL: {page.url}")
            print(f"   페이지 제목: {page.title()}")
            browser.close()
            sys.exit(1)

        # ── Location으로 이동 (GHL_LOC_ID 있을 경우) ────────────────
        if GHL_LOC_ID:
            loc_url = f"https://app.gohighlevel.com/location/{GHL_LOC_ID}/dashboard"
            print(f"  Location으로 이동 중... ({GHL_LOC_ID})")
            try:
                page.goto(loc_url, timeout=30000)
                page.wait_for_load_state("networkidle", timeout=30000)
                page.wait_for_function(
                    "document.querySelector('#app') && document.querySelector('#app').__vue_app__",
                    timeout=30000
                )
                print("  Location 로드 완료")
            except PWTimeout:
                print("⚠️  Location 이동 타임아웃 — 현재 페이지에서 추출 진행")

        # ── i18n 추출 ────────────────────────────────────────────────
        print("📦 i18n 키 추출 중...")
        result = page.evaluate(EXTRACT_JS)

        browser.close()

        if not result.get("ok"):
            print(f"❌ 추출 실패: {result.get('error')}")
            sys.exit(1)

        key_count = result["keys"]
        data = result["data"]
        print(f"✅ {key_count:,}개 키 추출 완료")
        return data


def save_result(data: dict, dry_run: bool):
    DATA.mkdir(parents=True, exist_ok=True)

    if dry_run:
        print(f"\n[dry-run] 파일 저장 스킵 — {len(data):,}개 키")
        print(f"샘플 5개:")
        for k, v in list(data.items())[:5]:
            print(f"  {k}: {v}")
        return

    # 기존 파일 백업
    if OUTPUT.exists():
        BACKUP.write_text(OUTPUT.read_text())
        print(f"📂 기존 EN 파일 백업: {BACKUP}")

    # 저장
    OUTPUT.write_text(json.dumps(data, ensure_ascii=False, indent=2))
    print(f"💾 저장 완료: {OUTPUT} ({len(data):,}개 키)")


def compare_with_backup():
    if not BACKUP.exists():
        print("ℹ️  이전 백업 없음 — 첫 추출")
        return

    old = json.loads(BACKUP.read_text())
    new = json.loads(OUTPUT.read_text())

    added   = [k for k in new if k not in old]
    removed = [k for k in old if k not in new]
    changed = [k for k in new if k in old and old[k] != new[k]]

    print(f"\n📊 변동 내역:")
    print(f"  ➕ 신규 키: {len(added):,}개")
    print(f"  ➖ 삭제 키: {len(removed):,}개")
    print(f"  ✏️  변경 키: {len(changed):,}개")
    print(f"  전체: {len(old):,} → {len(new):,}개")

    if added:
        print(f"\n신규 키 샘플:")
        for k in added[:5]:
            print(f"  {k}: {new[k]}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true", help="추출만, 파일 저장 안 함")
    args = parser.parse_args()

    data = extract_with_playwright(args.dry_run)
    save_result(data, args.dry_run)

    if not args.dry_run:
        compare_with_backup()


if __name__ == "__main__":
    main()
