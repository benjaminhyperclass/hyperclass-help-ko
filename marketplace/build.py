#!/usr/bin/env python3
"""
GHL Marketplace 앱(에이전시 배포형) Custom JS 번들 빌드 — 한국어 UI 팩

마켓플레이스 Custom JS 규정(2026-11 확인):
  - 에이전시 배포형 앱만 Custom JS 를 실을 수 있고, 심사(최대 영업일 10일)를 통과한 스크립트만 설치 흐름에 나온다.
  - 원격 스크립트 금지(모든 로직 자체 포함) · 난독화 금지 · console.log 금지 · <script> 태그로 감싼다.
  → 로더·확인입력 어댑터 **코드**를 번들 안에 그대로 넣고(원격 script 주입 없음),
    사전(JSON 데이터)만 jsDelivr 의 커밋 고정 URL 에서 받는다(코드가 아니라 데이터 — 심사 메모에 명시).

하이퍼클래스 전용 부분을 바꾼다:
  1. 디버그 로그(console.log) 제거 — log() 를 빈 함수로.
  2. 텔레메트리·오류 보고 끄기 — telemetryUrl() 이 항상 null(다른 에이전시 화면의 어떤 것도 전송하지 않는다).
  3. 브랜드 중립화 — 사전 속 화이트라벨 표기 '하이퍼클래스' 를 '플랫폼' 으로(조사 교정 포함). 사전 텍스트를 파싱하기 직전에 바꾼다.
  4. REV_BUILTIN 을 빌드 시점 사전 REV 로(첫 방문부터 최신 사전).
  5. 하이퍼클래스 에이전시는 기존 슬롯(엣지 Worker·부트스트랩)이 먼저 돌므로 window.__hcKoApp 가드로 중복 실행되지 않는다.

사용: python3 marketplace/build.py  →  marketplace/dist/hc-ko-marketplace.html (+ .js)
"""
import json
import os
import re
import sys

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
OUT = os.path.join(ROOT, 'marketplace', 'dist')
VERSION = '1.0.0'

BRAND_JS = r"""
  // [marketplace] 브랜드 중립화 — 사전의 화이트라벨 표기를 중립어로(받침에 맞춰 조사 교정)
  var HC_BRAND_RULES = [
    [/하이퍼클래스과의/g, '플랫폼과의'], [/하이퍼클래스와/g, '플랫폼과'], [/하이퍼클래스가/g, '플랫폼이'],
    [/하이퍼클래스를/g, '플랫폼을'], [/하이퍼클래스는/g, '플랫폼은'], [/하이퍼클래스로/g, '플랫폼으로'],
    [/하이퍼클래스/g, '플랫폼']
  ];
  function hcBrand(txt) {
    if (typeof txt !== 'string' || txt.indexOf('하이퍼클래스') === -1) return txt;
    for (var i = 0; i < HC_BRAND_RULES.length; i++) txt = txt.replace(HC_BRAND_RULES[i][0], HC_BRAND_RULES[i][1]);
    return txt;
  }
"""


def must_sub(src, pattern, repl, count=1, flags=0, name=''):
    new, n = re.subn(pattern, repl, src, count=count, flags=flags)
    if n == 0:
        sys.exit(f'❌ 변환 실패: {name or pattern}')
    return new


def build_loader(src, rev):
    src = must_sub(src, r"function log\(\) \{[^\n]*console\.log[^\n]*\}", 'function log() {}', name='loader log')
    src = must_sub(src, r"function telemetryUrl\(\) \{ return lsGet\(LS_TEL\); \}",
                   'function telemetryUrl() { return null; }   // [marketplace] 전송 없음', name='telemetry')
    src = must_sub(src, r"var REV_BUILTIN = '[0-9a-f]{40}';", f"var REV_BUILTIN = '{rev}';", name='REV_BUILTIN')
    # 사전 텍스트 파싱 지점 2곳(fetchFresh·load 캐시 적중) — 포인터 파싱은 그대로
    src = must_sub(src, r"var d = JSON\.parse\(txt\);\n(\s+)if \(cache\)",
                   r"var d = JSON.parse(hcBrand(txt));\n\1if (cache)", name='fetchFresh parse')
    src = must_sub(src, r"var d = JSON\.parse\(txt\);\n(\s+)if \(stale\)",
                   r"var d = JSON.parse(hcBrand(txt));\n\1if (stale)", name='load parse')
    src = must_sub(src, r"(if \(window\.__hcKoApp\) return;\n)", r"\1" + BRAND_JS.replace('\\', '\\\\'), name='brand fn')
    if 'console.' in src:
        sys.exit('❌ 로더에 console 호출이 남아 있다')
    return src


def build_adapter(src):
    src = must_sub(src, r"function log\(\) \{[^\n]*console\.log[^\n]*\}", 'function log() {}', name='adapter log')
    if 'console.' in src:
        sys.exit('❌ 어댑터에 console 호출이 남아 있다')
    return src


def main():
    rev = json.load(open(os.path.join(ROOT, 'data/hc-ko-app-rev.json'), encoding='utf-8'))['rev']
    loader = open(os.path.join(ROOT, 'js/hc-ko-app-loader.js'), encoding='utf-8').read()
    adapter = open(os.path.join(ROOT, 'js/hc-confirm-adapter.js'), encoding='utf-8').read()
    lv = re.search(r"version: '([0-9.]+)'", loader) or re.search(r"VERSION = '([0-9.]+)'", loader)
    head = (f"/* 한국어 UI 팩 — 마켓플레이스 번들 v{VERSION} (로더 {lv.group(1) if lv else '?'} · 사전 REV {rev[:7]})\n"
            " * 화면 문구를 한국어로 바꾼다. 코드는 이 번들 안에 모두 들어 있고, 번역 사전(JSON 데이터)만\n"
            " * cdn.jsdelivr.net 의 커밋 고정 URL 에서 받는다. 사용자·연락처 데이터를 읽거나 보내지 않는다.\n"
            " * 끄기: 주소에 ?hcko=off 또는 localStorage.hcKoOff = '1'. */\n")
    body = head + build_adapter(adapter).rstrip() + '\n\n' + build_loader(loader, rev).rstrip() + '\n'
    os.makedirs(OUT, exist_ok=True)
    js_path = os.path.join(OUT, 'hc-ko-marketplace.js')
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(body)
    with open(os.path.join(OUT, 'hc-ko-marketplace.html'), 'w', encoding='utf-8') as f:
        f.write('<script>\n' + body + '</script>\n')
    print(f'✅ {os.path.relpath(js_path, ROOT)} {len(body.encode("utf-8")):,} bytes · REV {rev[:7]}')


if __name__ == '__main__':
    main()
