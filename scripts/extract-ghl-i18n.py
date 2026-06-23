#!/usr/bin/env python3
"""
GHL i18n EN 키 자동 추출 (Playwright + 네트워크 인터셉트)

전략:
1. GHL 로그인
2. 네트워크 인터셉트로 location auth API 캡처 + URL 추적
3. Agency 홈에서 location 카드 클릭 (실제 UI 클릭)
4. i18n 로드 후 Vue $i18n에서 추출

환경변수:
  GHL_EMAIL      GHL 로그인 이메일
  GHL_PASSWORD   GHL 로그인 비밀번호
  GHL_LOC_ID     서브계정 Location ID
  GHL_URL        대시보드 URL (기본: https://app.gohighlevel.com)
  REPO_PATH      저장 경로 (기본: ~/Documents/hyperclass-help-ko)
  VAULT_PATH     데이터 경로 (기본: ~/Documents/benjamin-vault)
"""

import base64, json, os, sys, argparse, threading
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

# ── i18n 추출 JS ────────────────────────────────────────────────
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

# i18n 키 카운트 JS
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

# location-context 전환 Pinia action 시도 JS
SWITCH_LOCATION_JS = """
(function(locId) {
  try {
    var app = document.querySelector('#app').__vue_app__;
    var pinia = app.config.globalProperties.$pinia;
    if (!pinia) return { ok: false, reason: 'no pinia' };

    var storeIds = Array.from(pinia._s.keys());

    // auth/location 스토어 찾기
    var authStore = null;
    for (var id of storeIds) {
      var store = pinia._s.get(id);
      if (typeof store.switchAccount === 'function' ||
          typeof store.switchLocation === 'function' ||
          typeof store.selectLocation === 'function' ||
          typeof store.changeLocation === 'function') {
        authStore = store;
        break;
      }
    }

    if (!authStore) return { ok: false, storeIds: storeIds, reason: 'no-auth-store' };

    // 실제 전환 시도
    var fn = authStore.switchAccount || authStore.switchLocation ||
             authStore.selectLocation || authStore.changeLocation;
    fn.call(authStore, locId);
    return { ok: true, storeId: authStore.$id };
  } catch(e) {
    return { ok: false, error: e.message };
  }
})(arguments[0])
"""


def check_credentials():
    if not GHL_EMAIL or not GHL_PASS:
        print("❌ GHL_EMAIL / GHL_PASSWORD 환경변수가 없어요.")
        sys.exit(1)


def flatten(obj, prefix=""):
    out = {}
    for k, v in obj.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            out.update(flatten(v, key))
        elif isinstance(v, str):
            out[key] = v
    return out


def save_screenshot(page, label: str):
    """스크린샷을 base64로 로그에 출력 + 파일로 저장"""
    try:
        path = f"/tmp/ghl-debug-{label}.png"
        page.screenshot(path=path, full_page=False)
        with open(path, "rb") as f:
            b64 = base64.b64encode(f.read()).decode()
        print(f"[SCREENSHOT:{label}] data:image/png;base64,{b64[:100]}... (saved: {path})")
        # GitHub Actions에서는 파일로만 저장
        return path
    except Exception as e:
        print(f"  스크린샷 실패: {e}")
        return None


def dump_page_info(page, label: str):
    """페이지 구조 덤프 (디버그용)"""
    try:
        title = page.title()
        url = page.url
        print(f"\n=== [{label}] URL: {url} | Title: {title} ===")

        # 클릭 가능한 요소들 (링크/버튼)
        elements = page.evaluate("""
        (function() {
          var els = Array.from(document.querySelectorAll('a, button, [role="button"]'));
          return els.slice(0, 30).map(function(el) {
            return {
              tag: el.tagName,
              text: (el.textContent || '').trim().slice(0, 80),
              href: el.href || '',
              attrs: Object.fromEntries(
                Array.from(el.attributes)
                  .filter(a => ['data-id', 'data-location-id', 'class', 'id', 'href'].includes(a.name))
                  .map(a => [a.name, a.value.slice(0, 100)])
              )
            };
          });
        })()
        """)
        print(f"  클릭 요소 ({len(elements)}개):")
        for el in elements[:15]:
            print(f"    [{el['tag']}] '{el['text']}' | href={el['href'][:60]} | attrs={el['attrs']}")

        # localStorage 키
        ls_keys = page.evaluate("Object.keys(localStorage)")
        print(f"  localStorage 키: {ls_keys[:20]}")

        # 페이지 텍스트 앞부분
        text = page.evaluate("document.body.innerText")
        print(f"  Body text (500자): {text[:500]}")

    except Exception as e:
        print(f"  덤프 실패: {e}")


def extract_with_playwright(dry_run: bool):
    try:
        from playwright.sync_api import sync_playwright, TimeoutError as PWTimeout
    except ImportError:
        print("❌ playwright가 설치되어 있지 않아요.")
        print("   pip install playwright && playwright install chromium --with-deps")
        sys.exit(1)

    check_credentials()

    captured_i18n = {}
    url_history = []
    api_calls = []
    lock = threading.Lock()

    def on_response(response):
        """모든 JSON 응답 캡처"""
        try:
            url = response.url
            ct = response.headers.get("content-type", "")
            if "json" not in ct:
                return
            # location auth 관련 API 로그
            if any(p in url for p in ["chooselocation", "switchlocation", "switch", "location", "auth", "token"]):
                with lock:
                    api_calls.append({"url": url, "status": response.status})
        except Exception:
            pass

    def on_navigate(frame):
        """모든 URL 변경 추적"""
        try:
            url = frame.url
            with lock:
                if not url_history or url_history[-1] != url:
                    url_history.append(url)
                    print(f"  → URL: {url}")
        except Exception:
            pass

    print(f"🔐 GHL 로그인 중... ({GHL_URL})")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, args=["--no-sandbox"])
        ctx = browser.new_context(
            user_agent=(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0.0.0 Safari/537.36"
            )
        )
        page = ctx.new_page()
        page.on("response", on_response)
        page.main_frame.on("navigated", on_navigate)

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
            page.wait_for_selector(email_sel, timeout=15000)
            page.fill(email_sel, GHL_EMAIL)
            page.fill(pass_sel, GHL_PASS)

            with page.expect_navigation(wait_until="networkidle", timeout=30000):
                page.click(submit_sel)
            print(f"  로그인 완료 — URL: {page.url}")
        except PWTimeout:
            print(f"  로그인 타임아웃 — URL: {page.url}")
        except Exception as e:
            print(f"  로그인 실패: {e}")

        # 로그인 후 상태 덤프
        dump_page_info(page, "after-login")
        save_screenshot(page, "after-login")

        # ── Step 2: Location 전환 ────────────────────────────────────
        if not GHL_LOC_ID:
            print("  GHL_LOC_ID 없음 — agency 레벨에서 추출 시도")
        else:
            print(f"\n  🔍 Location 전환 시도 (ID: {GHL_LOC_ID[:8]}...)")

            # 전략 1: UI에서 location 링크 찾아 클릭
            loc_found = False
            broad_selectors = [
                f'a[href*="/location/{GHL_LOC_ID}"]',
                f'a[href*="{GHL_LOC_ID}"]',
                f'[data-location-id="{GHL_LOC_ID}"]',
                f'[data-id="{GHL_LOC_ID}"]',
                f'[href*="{GHL_LOC_ID}"]',
            ]
            for sel in broad_selectors:
                try:
                    el = page.query_selector(sel)
                    if el:
                        print(f"  ✅ 셀렉터 매치: {sel}")
                        with page.expect_navigation(wait_until="networkidle", timeout=30000):
                            el.click()
                        print(f"  클릭 후 URL: {page.url}")
                        loc_found = True
                        break
                except Exception as e:
                    print(f"  셀렉터 {sel} 실패: {e}")

            # 전략 2: "Go to Sub-Account" / "Launch" 등 버튼 텍스트로 찾기
            if not loc_found and "/location/" not in page.url:
                launch_selectors = [
                    'button:has-text("Switch")',
                    'button:has-text("Launch")',
                    'button:has-text("Go to")',
                    'a:has-text("Open")',
                    '[class*="location-card"] a',
                    '[class*="sub-account"] a',
                    '[class*="account-card"] a',
                ]
                for sel in launch_selectors:
                    try:
                        el = page.query_selector(sel)
                        if el:
                            print(f"  텍스트 셀렉터 매치: {sel}")
                            with page.expect_navigation(wait_until="networkidle", timeout=30000):
                                el.click()
                            print(f"  클릭 후 URL: {page.url}")
                            loc_found = True
                            break
                    except Exception as e:
                        pass  # 이 셀렉터 없으면 다음으로

            # 전략 3: Pinia store를 통한 직접 전환
            if not loc_found and "/location/" not in page.url:
                print("  Pinia store 직접 전환 시도...")
                try:
                    result = page.evaluate(SWITCH_LOCATION_JS, GHL_LOC_ID)
                    print(f"  Pinia 결과: {result}")
                    if result.get("ok"):
                        page.wait_for_timeout(3000)
                        print(f"  Pinia 후 URL: {page.url}")
                except Exception as e:
                    print(f"  Pinia 실패: {e}")

            # 전략 4: Vue Router push + 긴 대기
            if not loc_found and "/location/" not in page.url:
                print("  Vue Router push + 폴링...")
                try:
                    page.evaluate(f"""
                    (function() {{
                      try {{
                        var app = document.querySelector('#app').__vue_app__;
                        var router = app.config.globalProperties.$router;
                        if (router) router.push('/location/{GHL_LOC_ID}/dashboard');
                      }} catch(e) {{}}
                    }})()
                    """)
                    # URL 변경될 때까지 최대 30초 대기
                    for i in range(30):
                        page.wait_for_timeout(1000)
                        if "/location/" in page.url:
                            print(f"  URL 변경됨: {page.url}")
                            break
                    else:
                        print(f"  URL 미변경 (30초 후): {page.url}")
                except Exception as e:
                    print(f"  Router push 실패: {e}")

            # 현재 상태 스크린샷
            save_screenshot(page, "after-location-nav")
            dump_page_info(page, "after-location-nav")

            # API 호출 로그
            print(f"\n  API 호출 기록 ({len(api_calls)}건):")
            for call in api_calls[:20]:
                print(f"    [{call['status']}] {call['url']}")

        print(f"\n  최종 URL: {page.url}")
        print(f"  URL 히스토리: {url_history[-10:]}")

        # ── Step 3: i18n 로드 대기 ────────────────────────────────────
        print("\n⏳ Vue i18n 로드 대기 (최대 90초)...")
        best_count = 0
        for tick in range(45):
            try:
                count = page.evaluate(I18N_COUNT_JS)
                if count > best_count:
                    best_count = count
                    print(f"  [{tick*2}s] i18n 키: {count:,}개")
                if count >= 1000:
                    break
            except Exception:
                pass
            page.wait_for_timeout(2000)

        print(f"  최종 i18n 키 (Vue): {best_count:,}개")

        # ── Step 4: Vue $i18n 추출 ───────────────────────────────────
        print("\n📦 Vue i18n 추출 중...")
        vue_result = {}
        try:
            res = page.evaluate(EXTRACT_JS)
            if res.get("ok") and res.get("keys", 0) > 0:
                vue_result = res["data"]
                print(f"  Vue 추출: {len(vue_result):,}개 키")
            else:
                print(f"  Vue 추출 결과: {res}")
        except Exception as e:
            print(f"  Vue 추출 실패: {e}")

        # 최종 스크린샷
        save_screenshot(page, "final")

        browser.close()

    total = len(vue_result)
    print(f"\n✅ 총 {total:,}개 키 수집")

    if total == 0:
        print("❌ i18n 키를 하나도 수집하지 못했어요.")
        print("   — 스크린샷과 덤프 로그를 확인해 주세요.")
        print(f"   URL 히스토리: {url_history}")
        sys.exit(1)

    return vue_result


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
    print(f"  ➕ 신규: {len(added):,}개")
    print(f"  ➖ 삭제: {len(removed):,}개")
    print(f"  ✏️  변경: {len(changed):,}개")
    print(f"  전체: {len(old):,} → {len(new):,}개")

    if added:
        print("신규 키 샘플:")
        for k in added[:5]:
            print(f"  {k}: {new[k]}")


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
