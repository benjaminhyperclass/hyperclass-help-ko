#!/usr/bin/env python3
"""
GHL 세션 내보내기 (로컬 1회 실행용)

사용 방법:
  python scripts/export-ghl-session.py

브라우저가 열리면 GHL에 로그인하고 2FA를 완료한 뒤 Enter를 누르세요.
쿠키와 deviceId가 JSON으로 출력됩니다. 이걸 GitHub Secret에 저장하세요.
"""

import json, sys
from pathlib import Path

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print("❌ playwright가 없어요: pip install playwright && playwright install chromium")
    sys.exit(1)

GHL_URL = "https://app.gohighlevel.com"

with sync_playwright() as p:
    browser = p.chromium.launch(
        headless=False,  # 사용자가 보면서 수동 로그인
        args=["--start-maximized"],
    )
    ctx = browser.new_context(no_viewport=True)
    page = ctx.new_page()
    page.goto(GHL_URL)

    print("=" * 60)
    print("  브라우저가 열렸습니다!")
    print("  1. GHL에 이메일/비밀번호로 로그인하세요")
    print("  2. 2FA 코드를 이메일/폰에서 받아 입력하세요")
    print("  3. 대시보드가 완전히 로드되면 여기서 Enter를 누르세요")
    print("=" * 60)
    input("\n  [Enter] 로그인 완료 후 누르세요...")

    # 현재 URL 확인
    print(f"\n현재 URL: {page.url}")

    # 쿠키 수집
    cookies = ctx.cookies()

    # localStorage 수집
    ls_data = page.evaluate("""
    (function() {
      var out = {};
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        out[key] = localStorage.getItem(key);
      }
      return out;
    })()
    """)

    browser.close()

# 결과 조합
session = {
    "cookies": cookies,
    "localStorage": ls_data,
}

output = json.dumps(session, ensure_ascii=False, indent=2)

print("\n" + "=" * 60)
print("  ✅ 세션 내보내기 완료!")
print("=" * 60)
print("\n아래 JSON을 복사해서 GitHub Secret 'GHL_SESSION_JSON' 에 저장하세요:")
print()
print(output)
print()

# 파일로도 저장
out_path = Path.home() / "Downloads" / "ghl-session.json"
out_path.write_text(output)
print(f"파일로도 저장됨: {out_path}")
print()
print("저장 방법:")
print("  GitHub → hyperclass-help-ko 레포 → Settings → Secrets → New secret")
print("  Name: GHL_SESSION_JSON")
print("  Value: (위 JSON 전체 붙여넣기)")
