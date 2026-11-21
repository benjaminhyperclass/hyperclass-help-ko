// 로더 v4.21.25 안내 창(Pendo 가이드) 차단 하네스 — 모든 네트워크를 page.route 로 가짜 응답(외부 호출 0)
// 실행: node scripts/test-loader-pendo.js   (playwright 필요)
// 가짜 Pendo: GHL 처럼 큐 스텁(setGuidesDisabled 없음)을 먼저 두고 2초 뒤 실제 에이전트로 바꾼 다음 가이드 창(#pendo-base)을 띄운다.
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const REPO = process.argv[2] || path.join(__dirname, '..');
const CANARY = 'r6JD1nsqtk6Oln28fgrj', EXCL = '1r0pJRd1cQQ5DZsjSbc9';

const PAGE = `<!doctype html><html><head>
<script>window.pendo = { _q: [], initialize: function () { this._q.push('init'); } };</script>
<script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@test/js/hc-ko-app-loader.js"></script>
</head><body><div id="app"></div>
<script>
(function () {
  // 실제 에이전트 흉내 — 가이드가 꺼져 있지 않으면 창을 띄우고, stopGuides 는 창을 걷는다.
  setTimeout(function () {
    var disabled = false;
    function show() {
      if (disabled || document.getElementById('pendo-base')) return;
      var d = document.createElement('div'); d.id = 'pendo-base';
      d.innerHTML = '<div id="pendo-g-test"><h2>Your dashboard editor just leveled up</h2><button>Try it</button></div>';
      document.body.appendChild(d);
    }
    window.pendo = {
      setGuidesDisabled: function (v) { disabled = !!v; },
      areGuidesDisabled: function () { return disabled; },
      stopGuides: function () { var b = document.getElementById('pendo-base'); if (b) b.remove(); },
      startGuides: function () { show(); },
      _show: show
    };
    setTimeout(show, 300);            // 에이전트가 뜬 뒤 가이드 표시(로더가 그 사이에 끄면 안 뜬다)
    setTimeout(show, 2500);           // 다시 시도해도(라우트 변경 등) 꺼져 있으면 안 뜬다
  }, 2000);
})();
</script></body></html>`;

function visible() {
  const b = document.getElementById('pendo-base');
  return !!(b && b.offsetParent !== null && getComputedStyle(b).display !== 'none');
}

async function run(name, { loc, ls = {}, nav = null, wait = 6000 }) {
  const browser = await chromium.launch();
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const external = [];
  await page.addInitScript((kv) => { try { for (const k in kv) localStorage.setItem(k, kv[k]); } catch (e) {} }, ls);
  await page.route('**/*', async (route) => {
    const u = route.request().url();
    const m = u.match(/hyperclass-help-ko[@\/][^/]+\/(data\/[^?]+|js\/[^?]+)/);
    if (m) {
      const f = path.join(REPO, m[1]);
      if (fs.existsSync(f)) return route.fulfill({ status: 200, body: fs.readFileSync(f), headers: { 'content-type': m[1].endsWith('.js') ? 'application/javascript; charset=utf-8' : 'application/json; charset=utf-8', 'access-control-allow-origin': '*' } });
      return route.fulfill({ status: 404, body: 'nf', headers: { 'access-control-allow-origin': '*' } });
    }
    if (u.startsWith('https://app.hyperclass.ai/')) return route.fulfill({ status: 200, body: PAGE, headers: { 'content-type': 'text/html; charset=utf-8' } });
    external.push(u.slice(0, 80));
    return route.abort();
  });
  await page.goto(`https://app.hyperclass.ai/v2/location/${loc}/dashboard`);
  await page.waitForTimeout(wait);
  const r = { name, before: await page.evaluate(visible), st: await page.evaluate(() => window.__hcKoApp && window.__hcKoApp.status && window.__hcKoApp.status().pendo) };
  if (nav) {
    await page.evaluate((to) => { history.pushState({}, '', to); window.dispatchEvent(new Event('routeChangeEvent')); window.pendo && window.pendo._show && window.pendo._show(); }, nav);
    await page.waitForTimeout(2500);
    r.after = await page.evaluate(visible);
    r.stAfter = await page.evaluate(() => window.__hcKoApp && window.__hcKoApp.status().pendo);
  }
  r.external = external;
  await browser.close();
  return r;
}

(async () => {
  const fails = [];
  const ok = (c, msg) => { if (!c) fails.push(msg); console.log((c ? '  ✓ ' : '  ✗ ') + msg); };

  let r = await run('캐너리 대시보드', { loc: CANARY });
  console.log(r.name, JSON.stringify(r.st));
  ok(r.before === false, '캐너리: 가이드 창이 보이지 않는다');
  ok(r.st && r.st.on && r.st.mine && r.st.disabled === true && r.st.css, '캐너리: status().pendo on·mine·disabled·css');
  ok(r.external.length === 0, '외부 호출 0');

  r = await run('제외 계정', { loc: EXCL });
  console.log(r.name, JSON.stringify(r.st));
  ok(r.before === true, '제외 계정: 가이드 창을 건드리지 않는다');
  ok(r.st && !r.st.on && !r.st.css && r.st.disabled === false, '제외 계정: css 없음·disabled false');

  r = await run('브라우저 옵트아웃', { loc: CANARY, ls: { hcKoPendo: '1' } });
  ok(r.before === true, 'localStorage.hcKoPendo=1: 가이드 창이 보인다');

  r = await run('킬스위치', { loc: CANARY, ls: { hcKoOff: '1' } });
  ok(r.before === true, 'hcKoOff=1: 로더가 서지 않으므로 가이드 창이 보인다');

  r = await run('에이전시 목록 밖 화면', { loc: CANARY, nav: '/some-agency-route-not-in-list' });
  ok(r.after === false, '목록 밖 화면으로 옮겨도 계속 꺼져 있다');

  r = await run('캐너리 → 제외 계정 이동', { loc: CANARY, nav: `/v2/location/${EXCL}/dashboard` });
  console.log(r.name, JSON.stringify(r.stAfter));
  ok(r.before === false && r.after === true, '제외 계정으로 옮기면 되돌린다(창이 다시 뜬다)');
  ok(r.stAfter && r.stAfter.restored === 1 && !r.stAfter.mine && !r.stAfter.css, '되돌림 기록 restored 1·css 제거');

  console.log(fails.length ? `\n실패 ${fails.length}` : '\n전부 통과');
  process.exit(fails.length ? 1 : 0);
})();
