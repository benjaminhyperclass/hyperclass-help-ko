#!/usr/bin/env python3
"""
GHL i18n EN 키 자동 추출 (Playwright + 네트워크 인터셉트)

전략:
1. GHL 로그인
2. Agency 홈에서 location 카드 클릭 (in-app 네비게이션)
3. 페이지가 로드하는 i18n 청크를 네트워크에서 인터셉트
4. Vue $i18n에서도 보조 추출

환경변수:
  GHL_EMAIL      GHL 로그인 이메일
  GHL_PASSWORD   GHL 로그인 비밀번호
  GHL_LOC_ID     서브계정 Location ID
  GHL_URL        대시보드 URL (기본: https://app.gohighlevel.com)
  REPO_PATH      저장 경로 (기본: ~/Documents/hyperclass-help-ko)
  VAULT_PATH     데이터 경로 (기본: ~/Documents/benjamin-vault)
"""

import json, os, sys, argparse, threading
from pathlib import Path

# ── 경로 설정 ────────────────────────────────────────────────────
REPO  = Path(os.environ.get("REPO_PATH",  str(Path.home() / "Documents/hyperclass-help-ko")))
VAULT = Path(os.environ.get("VAULT_PATH", str(Path.home() / "Documents/benjamin-vault")))
DATA  = (REPO / "data") if (REPO / "data").exists() else (VAULT / "data")

GHL_URL    = os.environ.get("GHL_URL", "https://app.gohighlevel.com")
GHL_EMAIL  = os.environ.get("GHL_EMAIL", "")
GHL_PASS   = os.environ.get("GHL_PASSWORD", "")
GHL_LOC_ID = os.environ.get("GHL_LOC_ID", "")

OUTPUT = DATA / "ghl-i18n-en.json"
BACKUP = DATA / "ghl-i18n-en.bak.json"

# ── i18n 플랫 변환 + 추출 JS ────────────────────────────────────
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

# i18n 키 로드 확인 JS
I18N_READY_JS = """
(function() {
  try {
    var app = document.querySelector('#app').__vue_app__;
    if (!app) return 0;
    var i18n = app.config.globalProperties.$i18n;
    if (!i18n) return 0;
    var msgs = i18n.getLocaleMessage
      ? i18n.getLocaleMessage('en')
      : (i18n.messages && i18n.messages.value && i18n.messages.value['en']) || {};
    function count(o) {
      var n = 0;
      for (var k in o) {
        if (typeof o[k] === 'string') n++;
        else if (typeof o[k] === 'object') n += count(o[k]);
      }
      return n;
    }
    return count(msgs);
  } catch(e) { return 0; }
})()
"""


def check_credentials():
    if not GHL_EMAIL or not GHL_PASS:
        print("❌ GHL_EMAIL / GHL_PASSWORD 환경변수가 없어요.")
        sys.exit(1)


def flatten(obj, prefix=""):
    """중첩 dict → dot-notation flat dict"""
    out = {}
    for k, v in obj.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            out.update(flatten(v, key))
        elif isinstance(v, str):
            out[key] = v
    return out


def looks_like_i18n(data) -> bool:
    """JSON 응답이 i18n 데이터처럼 생겼는지 확인"""
    if not isinstance(data, dict) or len(data) < 5:
        return False
    def all_str_or_nested(d, depth=0):
        if depth > 5:
            return False
        for v in d.values():
            if isinstance(v, str):
                continue
            elif isinstance(v, dict):
                if not all_str_or_nested(v, depth + 1):
                    return False
            else:
                return False
        return True
    return all_str_or_nested(data)


def extract_with_playwright(dry_run: bool):
    try:
        from playwright.sync_api import sync_playwright, TimeoutError as PWTimeout
    except ImportError:
        print("❌ playwright가 설치되어 있지 않아요.")
        print("   pip install playwright && playwright install chromium --with-deps")
        sys.exit(1)

    check_credentials()

    captured_i18n = {}  # 네트워크 인터셉트로 수집
    lock = threading.Lock()

    def on_response(response):
        """i18n JSON 청크를 네트워크에서 캡처"""
        try:
            ct = response.headers.get("content-type", "")
            if "json" not in ct:
                return
            url = response.url
            # GHL i18n 파일 URL 패턴 (assets 또는 api/translations)
            if not any(p in url for p in ["/assets/", "translation", "i18n", "locale", "messages"]):
                return
            data = response.json()
            if not looks_like_i18n(data):
                return
            flat = flatten(data)
            if len(flat) < 5:
                return
            with lock:
                before = len(captured_i18n)
                captured_i18n.update(flat)
                after = len(captured_i18n)
            print(f"  📡 네트워크 캡처: {url.split('/')[-1]} (+{after - before}키)")
        except Exception:
            pass

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
        page.on("response", on_response)  # 네트워크 인터셉트 시작

        # ── Step 1: 로그인 ──────────────────────────────────────────
        try:
            page.goto(GHL_URL, timeout=30000)
            page.wait_for_load_state("networkidle", timeout=30000)
        except PWTimeout:
            print("⚠️  초기 로드 타임아웃")

        email_sel  = 'input[type="email"], input[name="email"], #email'
        pass_sel   = 'input[type="password"], input[name="password"], #password'
        submit_sel = 'button[type="submit"], button:has-text("Sign In"), button:has-text("Login")'

        try:
            page.wait_for_selector(email_sel, timeout=10000)
            page.fill(email_sel, GHL_EMAIL)
            page.fill(pass_sel, GHL_PASS)
            page.click(submit_sel)
            print("  로그인 버튼 클릭...")
            page.wait_for_load_state("networkidle", timeout=30000)
            print(f"  로그인 후 URL: {page.url}")
        except PWTimeout:
            print(f"  로그인 폼 없음 or 타임아웃 — URL: {page.url}")

        # ── Step 2: Location 진입 (in-app 방식) ─────────────────────
        if GHL_LOC_ID:
            print(f"  Location 진입 시도... (ID: {GHL_LOC_ID[:8]}...)")

            # 방법 A: Vue Router로 직접 navigate
            try:
                nav_result = page.evaluate(f"""
                (function() {{
                  try {{
                    var app = document.querySelector('#app').__vue_app__;
                    var router = app.config.globalProperties.$router;
                    if (router) {{
                      router.push('/location/{GHL_LOC_ID}/dashboard');
                      return 'router-pushed';
                    }}
                    return 'no-router';
                  }} catch(e) {{ return 'error: ' + e.message; }}
                }})()
                """)
                print(f"  Vue Router 네비게이션: {nav_result}")
                try:
                    page.wait_for_load_state("networkidle", timeout=15000)
                except PWTimeout:
                    pass
            except Exception as e:
                print(f"  Vue Router 실패: {e}")

            # 방법 B: window.location.assign (in-page redirect)
            if "/location/" not in page.url:
                try:
                    loc_url = f"{GHL_URL}/location/{GHL_LOC_ID}/dashboard"
                    page.evaluate(f"window.location.assign('{loc_url}')")
                    try:
                        page.wait_for_load_state("networkidle", timeout=20000)
                    except PWTimeout:
                        pass
                    print(f"  window.assign 후 URL: {page.url}")
                except Exception as e:
                    print(f"  window.assign 실패: {e}")

            # 방법 C: UI에서 location 카드 찾아서 클릭
            if "/location/" not in page.url:
                print("  UI에서 Location 카드 탐색 중...")
                try:
                    # GHL agency home의 location 링크/버튼 패턴
                    loc_selectors = [
                        f'a[href*="/location/{GHL_LOC_ID}"]',
                        f'[data-location-id="{GHL_LOC_ID}"]',
                        f'[data-id="{GHL_LOC_ID}"]',
                    ]
                    for sel in loc_selectors:
                        el = page.query_selector(sel)
                        if el:
                            el.click()
                            page.wait_for_load_state("networkidle", timeout=20000)
                            print(f"  클릭 후 URL: {page.url}")
                            break
                    else:
                        print("  Location 카드 못 찾음")
                except Exception as e:
                    print(f"  클릭 실패: {e}")

        print(f"  현재 URL: {page.url}")

        # ── Step 3: i18n 로드 대기 ────────────────────────────────────
        print("  Vue i18n 로드 대기 중 (최대 60초)...")
        best_count = 0
        for _ in range(30):  # 2초 × 30 = 60초
            try:
                count = page.evaluate(I18N_READY_JS)
                if count > best_count:
                    best_count = count
                    print(f"  i18n 키 감지: {count:,}개")
                if count >= 1000:  # 충분한 키 로드됨
                    break
            except Exception:
                pass
            try:
                page.wait_for_timeout(2000)
            except Exception:
                break

        print(f"  최종 i18n 키 (Vue): {best_count:,}개")
        print(f"  네트워크 캡처 키: {len(captured_i18n):,}개")

        # ── Step 4: Vue $i18n에서 추출 ───────────────────────────────
        print("📦 Vue i18n 추출 중...")
        vue_result = {}
        try:
            res = page.evaluate(EXTRACT_JS)
            if res.get("ok") and res.get("keys", 0) > 0:
                vue_result = res["data"]
                print(f"  Vue 추출: {len(vue_result):,}개 키")
        except Exception as e:
            print(f"  Vue 추출 실패: {e}")

        browser.close()

    # ── Step 5: 결과 합치기 ──────────────────────────────────────────
    # Vue 추출 우선, 네트워크 캡처 보완
    merged = dict(captured_i18n)
    merged.update(vue_result)  # Vue 우선

    total = len(merged)
    print(f"\n✅ 총 {total:,}개 키 수집 (Vue: {len(vue_result):,} / 네트워크: {len(captured_i18n):,})")

    if total == 0:
        print("❌ i18n 키를 하나도 수집하지 못했어요.")
        print("   GHL 로그인 또는 2FA 설정을 확인해 주세요.")
        sys.exit(1)

    return merged


def save_result(data: dict, dry_run: bool):
    DATA.mkdir(parents=True, exist_ok=True)

    if dry_run:
        print(f"\n[dry-run] 파일 저장 스킵 — {len(data):,}개 키")
        print("샘플 5개:")
        for k, v in list(data.items())[:5]:
            print(f"  {k}: {v}")
        return

    if OUTPUT.exists():
        BACKUP.write_text(OUTPUT.read_text())
        print(f"📂 기존 EN 파일 백업: {BACKUP}")

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
        print("신규 키 샘플:")
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
