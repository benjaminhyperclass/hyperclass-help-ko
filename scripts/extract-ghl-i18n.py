#!/usr/bin/env python3
"""
GHL i18n EN 키 자동 추출 (Playwright + 세션 쿠키 재사용)

2FA 우회 방법:
  1. scripts/export-ghl-session.py 로컬 실행 → GHL_SESSION_JSON 시크릿에 저장
  2. 이후 GitHub Actions에서 저장된 쿠키 + deviceId를 재사용 → 2FA 스킵

환경변수:
  GHL_EMAIL         GHL 로그인 이메일
  GHL_PASSWORD      GHL 로그인 비밀번호
  GHL_LOC_ID        서브계정 Location ID
  GHL_SESSION_JSON  수동 로그인으로 내보낸 쿠키 JSON (export-ghl-session.py 출력)
  GHL_URL           대시보드 URL (기본: https://app.gohighlevel.com)
  REPO_PATH         저장 경로 (기본: ~/Documents/hyperclass-help-ko)
  VAULT_PATH        데이터 경로 (기본: ~/Documents/benjamin-vault)
"""

import json, os, sys, argparse, threading
from pathlib import Path

# ── 경로 설정 ────────────────────────────────────────────────────
REPO  = Path(os.environ.get("REPO_PATH",  str(Path.home() / "Documents/hyperclass-help-ko")))
VAULT = Path(os.environ.get("VAULT_PATH", str(Path.home() / "Documents/benjamin-vault")))
DATA  = (REPO / "data") if (REPO / "data").exists() else (VAULT / "data")

GHL_URL      = os.environ.get("GHL_URL", "https://app.gohighlevel.com")
GHL_EMAIL    = os.environ.get("GHL_EMAIL", "")
GHL_PASS     = os.environ.get("GHL_PASSWORD", "")
GHL_LOC_ID   = os.environ.get("GHL_LOC_ID", "")
SESSION_JSON = os.environ.get("GHL_SESSION_JSON", "")

OUTPUT = DATA / "ghl-i18n-en.json"
BACKUP = DATA / "ghl-i18n-en.bak.json"

# ── JS 스니펫 ────────────────────────────────────────────────────
EXTRACT_JS = """
(function() {
  function flat(obj, prefix) {
    var out = {};
    Object.keys(obj).forEach(function(k) {
      var val = obj[k];
      var key = prefix ? prefix + '.' + k : k;
      if (val && typeof val === 'object' && !Array.isArray(val))
        Object.assign(out, flat(val, key));
      else if (typeof val === 'string')
        out[key] = val;
    });
    return out;
  }
  try {
    var app = document.querySelector('#app').__vue_app__;
    var i18n = app.config.globalProperties.$i18n;
    var msgs = i18n.getLocaleMessage
      ? i18n.getLocaleMessage('en')
      : (i18n.messages && i18n.messages.value && i18n.messages.value['en']) || {};
    var result = flat(msgs, '');
    return { ok: true, keys: Object.keys(result).length, data: result };
  } catch(e) {
    return { ok: false, error: e.message };
  }
})()
"""

I18N_COUNT_JS = """
(function() {
  function count(o) {
    var n = 0;
    for (var k in o) {
      if (typeof o[k] === 'string') n++;
      else if (typeof o[k] === 'object') n += count(o[k]);
    }
    return n;
  }
  try {
    var app = document.querySelector('#app').__vue_app__;
    if (!app) return 0;
    var i18n = app.config.globalProperties.$i18n;
    if (!i18n) return 0;
    var msgs = i18n.getLocaleMessage
      ? i18n.getLocaleMessage('en')
      : (i18n.messages && i18n.messages.value && i18n.messages.value['en']) || {};
    return count(msgs);
  } catch(e) { return 0; }
})()
"""

IS_2FA_PAGE_JS = """
document.body && document.body.innerText.includes('Security Code')
"""


def flatten(obj, prefix=""):
    out = {}
    for k, v in obj.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            out.update(flatten(v, key))
        elif isinstance(v, str):
            out[key] = v
    return out


def load_session():
    """GHL_SESSION_JSON 파싱"""
    if not SESSION_JSON:
        return None, {}
    try:
        session = json.loads(SESSION_JSON)
        cookies = session.get("cookies", [])
        ls_data = session.get("localStorage", {})
        print(f"  ✅ 세션 로드: 쿠키 {len(cookies)}개, localStorage {len(ls_data)}개 키")
        return cookies, ls_data
    except Exception as e:
        print(f"  ⚠️  세션 파싱 실패: {e}")
        return None, {}


def extract_with_playwright(dry_run: bool):
    try:
        from playwright.sync_api import sync_playwright, TimeoutError as PWTimeout
    except ImportError:
        print("❌ playwright 없음: pip install playwright && playwright install chromium --with-deps")
        sys.exit(1)

    cookies, ls_data = load_session()
    url_history = []

    def on_navigate(frame):
        try:
            url = frame.url
            if not url_history or url_history[-1] != url:
                url_history.append(url)
                print(f"  → {url}")
        except Exception:
            pass

    print(f"🚀 GHL 추출 시작 ({GHL_URL})")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, args=["--no-sandbox"])
        ctx = browser.new_context(
            user_agent=(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0.0.0 Safari/537.36"
            )
        )

        # ── 저장된 쿠키 복원 ─────────────────────────────────────────
        if cookies:
            print("  쿠키 복원 중...")
            ctx.add_cookies(cookies)

        page = ctx.new_page()
        page.main_frame.on("navigated", on_navigate)

        # ── localStorage 복원 (init script) ─────────────────────────
        if ls_data:
            ls_script = "\n".join(
                f"try {{ localStorage.setItem({json.dumps(k)}, {json.dumps(v)}); }} catch(e) {{}}"
                for k, v in ls_data.items()
            )
            page.add_init_script(ls_script)
            print(f"  localStorage {len(ls_data)}개 키 init script 등록")

        # ── Step 1: GHL 홈 로드 ──────────────────────────────────────
        try:
            page.goto(GHL_URL, timeout=30000)
            page.wait_for_load_state("networkidle", timeout=30000)
        except PWTimeout:
            print("  초기 로드 타임아웃")

        current_url = page.url
        print(f"  로드 후 URL: {current_url}")

        # 2FA 페이지 확인
        try:
            is_2fa = page.evaluate(IS_2FA_PAGE_JS)
        except Exception:
            is_2fa = False

        if is_2fa:
            print("  ⚠️  2FA 페이지 감지됨")
            if not cookies:
                print("  ❌ 세션 쿠키 없음. export-ghl-session.py로 먼저 내보내주세요.")
                sys.exit(1)
            else:
                print("  ❌ 저장된 쿠키가 만료됐어요. export-ghl-session.py를 다시 실행하세요.")
                sys.exit(1)

        # 세션 없거나 로그아웃 상태면 이메일/패스워드 로그인 시도
        needs_login = any(s in current_url for s in ["/login", "/signin", "login"]) or \
                      "email" in (page.evaluate("document.body.innerText") or "").lower()[:200]

        if needs_login or (not cookies and (GHL_EMAIL and GHL_PASS)):
            print("  🔐 로그인 폼 감지 — 이메일/패스워드 입력...")
            email_sel  = 'input[type="email"], input[name="email"], #email'
            pass_sel   = 'input[type="password"], input[name="password"], #password'
            submit_sel = 'button[type="submit"], button:has-text("Sign In"), button:has-text("Login")'
            try:
                page.wait_for_selector(email_sel, timeout=10000)
                page.fill(email_sel, GHL_EMAIL)
                page.fill(pass_sel, GHL_PASS)
                page.click(submit_sel)
                page.wait_for_load_state("networkidle", timeout=30000)
                print(f"  로그인 후 URL: {page.url}")

                # 다시 2FA 체크
                try:
                    is_2fa = page.evaluate(IS_2FA_PAGE_JS)
                except Exception:
                    is_2fa = False
                if is_2fa:
                    print("  ❌ 2FA 코드 필요. export-ghl-session.py로 세션을 먼저 내보내주세요:")
                    print("     python scripts/export-ghl-session.py")
                    print("     → 출력된 JSON을 GitHub Secret 'GHL_SESSION_JSON' 에 저장")
                    sys.exit(1)
            except (PWTimeout, Exception) as e:
                print(f"  로그인 처리 중: {e}")

        print(f"  현재 URL: {page.url}")

        # ── Step 2: Location 전환 ────────────────────────────────────
        if GHL_LOC_ID and "/location/" not in page.url:
            print(f"\n  🔍 Location 전환 시도 (ID: {GHL_LOC_ID[:8]}...)")

            # 방법 A: href에 location id 포함된 링크 클릭
            for sel in [
                f'a[href*="/location/{GHL_LOC_ID}"]',
                f'a[href*="{GHL_LOC_ID}"]',
                f'[data-location-id="{GHL_LOC_ID}"]',
                f'[data-id="{GHL_LOC_ID}"]',
            ]:
                try:
                    el = page.query_selector(sel)
                    if el:
                        print(f"  셀렉터 매치: {sel}")
                        with page.expect_navigation(wait_until="networkidle", timeout=30000):
                            el.click()
                        print(f"  클릭 후 URL: {page.url}")
                        break
                except Exception:
                    pass

            # 방법 B: Vue Router push + URL 폴링
            if "/location/" not in page.url:
                print("  Vue Router push 시도...")
                try:
                    page.evaluate(f"""
                    (function() {{
                      try {{
                        var router = document.querySelector('#app').__vue_app__.config.globalProperties.$router;
                        if (router) router.push('/location/{GHL_LOC_ID}/dashboard');
                      }} catch(e) {{}}
                    }})()
                    """)
                    for _ in range(30):
                        page.wait_for_timeout(1000)
                        if "/location/" in page.url:
                            print(f"  URL 변경됨: {page.url}")
                            break
                except Exception as e:
                    print(f"  Router push 실패: {e}")

            print(f"  최종 URL: {page.url}")

        # ── Step 3: i18n 로드 대기 ────────────────────────────────────
        print("\n⏳ i18n 로드 대기 (최대 90초)...")
        best_count = 0
        for tick in range(45):
            try:
                count = page.evaluate(I18N_COUNT_JS)
                if count > best_count:
                    best_count = count
                    print(f"  [{tick*2}s] i18n: {count:,}개")
                if count >= 1000:
                    break
            except Exception:
                pass
            page.wait_for_timeout(2000)

        print(f"  최종 i18n: {best_count:,}개")

        # ── Step 4: 추출 ─────────────────────────────────────────────
        print("\n📦 Vue i18n 추출 중...")
        result = {}
        try:
            res = page.evaluate(EXTRACT_JS)
            if res.get("ok") and res.get("keys", 0) > 0:
                result = res["data"]
                print(f"  추출: {len(result):,}개 키")
            else:
                print(f"  추출 결과: {res}")
        except Exception as e:
            print(f"  추출 실패: {e}")

        browser.close()

    print(f"\n✅ 총 {len(result):,}개 키 수집")

    if len(result) == 0:
        print("❌ i18n 키를 하나도 수집하지 못했어요.")
        print("   URL 히스토리:", url_history[-5:])
        sys.exit(1)

    return result


def save_result(data: dict, dry_run: bool):
    DATA.mkdir(parents=True, exist_ok=True)

    if dry_run:
        print(f"\n[dry-run] 저장 스킵 — {len(data):,}개 키")
        items = list(data.items())[:5]
        for k, v in items:
            print(f"  {k}: {v}")
        return

    if OUTPUT.exists():
        BACKUP.write_text(OUTPUT.read_text())
        print(f"📂 백업: {BACKUP}")

    OUTPUT.write_text(json.dumps(data, ensure_ascii=False, indent=2))
    print(f"💾 저장: {OUTPUT} ({len(data):,}개)")


def compare_with_backup():
    if not BACKUP.exists():
        print("ℹ️  이전 백업 없음")
        return

    old = json.loads(BACKUP.read_text())
    new = json.loads(OUTPUT.read_text())

    added   = [k for k in new if k not in old]
    removed = [k for k in old if k not in new]
    changed = [k for k in new if k in old and old[k] != new[k]]

    print(f"\n📊 변동:")
    print(f"  ➕ {len(added):,}개 신규")
    print(f"  ➖ {len(removed):,}개 삭제")
    print(f"  ✏️  {len(changed):,}개 변경")
    print(f"  합계: {len(old):,} → {len(new):,}개")

    if added:
        for k in added[:5]:
            print(f"  NEW: {k} = {new[k]}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    data = extract_with_playwright(args.dry_run)
    save_result(data, args.dry_run)

    if not args.dry_run:
        compare_with_backup()


if __name__ == "__main__":
    main()
