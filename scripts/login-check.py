#!/usr/bin/env python3
"""
로그인 화면 무인 점검 (작업지시서 v1 A5 · 센서 S5) — 헤드리스 Chromium, **쿠키 없음·확장 없음**.

    python3 scripts/login-check.py                       # data/reports/login-check/latest.{md,json} 갱신
    python3 scripts/login-check.py --screens             # 같은 폴더에 YYYY-MM-DD-<화면>.png 도 저장
    python3 scripts/login-check.py --only app            # app.hyperclass.ai 만 (portal 만: --only portal)

화면별로 html lang, 로더 상태(__hcKoApp / __hcPortal), 화면 텍스트(innerText)에 남은 영문 UI 단어를 모은다.
innerText 는 DOM 글자라 CSS ::after 덧씌우기는 보이지 않는다 — 카탈로그(로더)가 실제로 바꿨는지를 본다.
브랜드·이메일·URL·약어(허용 목록)는 영문으로 세지 않는다.

비교: 직전 latest.json 보다 영문 단어 수가 늘면 GITHUB_OUTPUT 에 regress=true (센서가 이슈로 알린다).
exit 0 (판단은 사람이). 의존: pip install playwright && playwright install chromium
"""
import argparse
import asyncio
import datetime
import json
import os
import re
import sys

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
OUT = os.path.join(ROOT, 'data/reports/login-check')

TARGETS = [
    ('app', 'login', 'https://app.hyperclass.ai/'),
    ('app', 'forgot', 'https://app.hyperclass.ai/forgot_password'),
    ('app', 'sso', 'https://app.hyperclass.ai/login/sso'),
    ('portal', 'login', 'https://community.hyperclass.ai/login'),
    ('portal', 'forgot', 'https://community.hyperclass.ai/forgot-password'),
    ('portal', 'signup', 'https://community.hyperclass.ai/signup'),
]
# 영문으로 세지 않는 토큰 — 브랜드·고유명·약어·이메일 예시 조각
ALLOW = {'hyperclass', 'google', 'sso', 'otp', 'crm', 'ai', 'pdf', 'url', 'id', 'rsvp', 'gif', 'kollab', 'gokollab'}
STATUS_JS = """() => {
  const r = { lang: document.documentElement.lang, path: location.pathname };
  try { const s = window.__hcKoApp && window.__hcKoApp.status(); if (s) r.appLoader = { version: window.__hcKoApp.version, preauth: s.preauth, allowedHere: s.allowedHere, booted: s.booted, suspended: s.suspended, rev: String(s.rev || '').slice(0, 7) }; } catch (e) { r.appLoader = 'err ' + e; }
  try { const b = window.__hcBoot && window.__hcBoot.status(); if (b) r.boot = { version: b.version, source: b.source, channel: b.channel, ref: String(b.ref || '').slice(0, 7) }; } catch (e) {}
  try { const p = window.__hcPortal && window.__hcPortal.status(); if (p) r.portal = { version: p.version, applied: p.applied, rev: String(p.rev || '').slice(0, 7), dict: p.dictVersion }; } catch (e) {}
  try { const pb = window.__hcPortalBoot && window.__hcPortalBoot.status(); if (pb) r.portalBoot = { version: pb.version, channel: pb.channel, gave: pb.gave }; } catch (e) {}
  r.text = document.body ? document.body.innerText : '';
  return r;
}"""


def english_tokens(text):
    t = re.sub(r'\S+@\S+', ' ', text)                 # 이메일
    t = re.sub(r'https?://\S+|\b\S+\.(com|ai|net|io)\b', ' ', t)
    toks = re.findall(r"[A-Za-z][A-Za-z'’-]+", t)
    return [w for w in toks if w.lower() not in ALLOW]


async def check(only, screens, day):
    from playwright.async_api import async_playwright
    rows = []
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={'width': 1280, 'height': 900}, locale='ko-KR')
        pg = await ctx.new_page()
        for app, name, url in TARGETS:
            if only and app != only:
                continue
            r = {'app': app, 'screen': name, 'url': url}
            try:
                await pg.goto(url, wait_until='networkidle', timeout=90000)
                await pg.wait_for_timeout(8000)        # 로더 PREAUTH 안정 대기(0.8초)·사전 수신 여유
                st = await pg.evaluate(STATUS_JS)
                text = st.pop('text', '')
                toks = english_tokens(text)
                r.update(st)
                r['english'] = sorted(set(toks))
                r['englishCount'] = len(toks)
                r['hangul'] = bool(re.search('[가-힣]', text))
                if screens:
                    os.makedirs(OUT, exist_ok=True)
                    await pg.screenshot(path=os.path.join(OUT, f'{day}-{app}-{name}.png'))
            except Exception as e:                          # 한 화면 실패가 전체를 막지 않게
                r['error'] = f'{type(e).__name__}: {e}'[:200]
            rows.append(r)
        await b.close()
    return rows


def render(rows, day):
    L = [f'# 로그인 화면 점검 — {day}', '', '헤드리스 Chromium · 쿠키 없음 · 확장 없음 (`scripts/login-check.py`). 영문 단어는 브랜드·이메일·URL·약어 제외.', '',
         '| 앱 | 화면 | 경로 | lang | 로더 | 영문 단어 | 목록 |', '|---|---|---|---|---|---|---|']
    for r in rows:
        if 'error' in r:
            L.append(f"| {r['app']} | {r['screen']} | — | — | ❌ {r['error']} | — | — |")
            continue
        if r['app'] == 'portal':
            p = r.get('portal')
            loader = f"portal {p.get('version')} applied={p.get('applied')} rev {p.get('rev')}" if p else '포털 로더 없음(슬롯 미설치)'
        else:
            a, b = r.get('appLoader') or {}, r.get('boot') or {}
            loader = f"{a.get('version')} booted={a.get('booted')} preauth={a.get('preauth')} · boot {b.get('version')} {b.get('channel')}" if a else '로더 없음'
        words = ', '.join(r.get('english', [])[:20])
        L.append(f"| {r['app']} | {r['screen']} | `{r.get('path')}` | {r.get('lang')} | {loader} | {r.get('englishCount')} | {words} |")
    return '\n'.join(L) + '\n'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--only', choices=['app', 'portal'])
    ap.add_argument('--screens', action='store_true')
    a = ap.parse_args()
    day = datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%d')
    rows = asyncio.run(check(a.only, a.screens, day))
    os.makedirs(OUT, exist_ok=True)
    prev_p = os.path.join(OUT, 'latest.json')
    prev = json.load(open(prev_p, encoding='utf-8')) if os.path.exists(prev_p) else {}
    cur = {'date': day, 'rows': rows, 'total': sum(r.get('englishCount', 0) for r in rows)}
    regress = bool(prev) and cur['total'] > prev.get('total', 0)
    json.dump(cur, open(prev_p, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    md = render(rows, day)
    open(os.path.join(OUT, 'latest.md'), 'w', encoding='utf-8').write(md)
    print(md)
    print(f"S5 english={cur['total']} prev={prev.get('total')} regress={regress}")
    if os.environ.get('GITHUB_OUTPUT'):
        with open(os.environ['GITHUB_OUTPUT'], 'a') as o:
            o.write(f"english={cur['total']}\nregress={'true' if regress else 'false'}\n")
    return 0


if __name__ == '__main__':
    sys.exit(main())
