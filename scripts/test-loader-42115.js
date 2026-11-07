// 로더 v4.21.15 하네스 — 열거값 메뉴 옵션·한국어 라벨+날짜·상대 시각·소문자 상태 칩·알약 상태어 (사전 v4.2.63 이상 필요)
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const REPO = process.argv[2] || path.join(__dirname, '..');   // 실행: node scripts/test-loader-42115.js (playwright, 외부 네트워크 0)
const LOC = 'r6JD1nsqtk6Oln28fgrj';
const BODY = `<div id="app">
<p id="d1">기한 September 30, 2026</p>
<p id="d2">결제 2 / 3</p>
<p id="d3">사용자 25</p>
<p id="d4">발행일: Nov 7, 2026</p>
<div class="hr-tag"><span class="hr-tag__content"><div id="t1">paid</div></span></div>
<div class="hr-tag"><span class="hr-tag__content"><div id="t2">pending</div></span></div>
<table><tr><td><div id="t3" class="inline-flex rounded-full">Active</div></td></tr></table>
<div class="rounded-full"><span id="t4">BS</span></div>
<p id="r1">2 months ago</p><p id="r2">a few seconds ago</p><p id="r3">in 3 days</p><p id="r4">an hour ago</p><p id="r5">3 days</p><p id="r6">in 3 days ago</p>
<div class="hr-base-select-menu" id="m1"><div class="hr-base-select-option"><div id="o1">Beginner</div></div><div class="hr-base-select-option"><div id="o2">Expert</div></div><div class="hr-base-select-option"><div id="o3">Health &amp; fitness</div></div></div>
<div class="hr-base-select-menu" id="m2"><div class="hr-base-select-option"><div id="o4">Beginner</div></div><div class="hr-base-select-option"><div id="o5">My Pipeline X</div></div></div>
<p id="n1">Business</p>
<div class="hr-tabs-tab"><span class="hr-tabs-tab__label"><div id="c1">Comments</div></span></div>
<p class="hr-text hr-text-md hr-text-medium" id="k1">Companies (0)</p><p id="k2">Companies (3)</p><p id="k3">Live Sessions (12)</p><p id="k4">My Custom Thing (2)</p><span id="k5">0 items</span><span id="k6">1 item</span>
<div id="m3">October</div><div id="m4">January '27</div><div id="m5">Mar</div><div id="m6">Maybe</div>
<span id="s1">Slipped 2+ times 또는 14+ days</span><span id="s2">Slipped 1+ times or 7+ days (excluding high)</span><span id="s3">Slipped 1+ times 또는 1+ days (excluding high/medium)</span><span id="s4">Slipped away</span>
</div>`;
const HTML = `<!doctype html><html><head><meta charset="utf-8"><script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@test/js/hc-ko-app-loader.js"></script></head><body>${BODY}
<script>setTimeout(function(){var p=document.createElement('p');p.id='late';p.textContent='기한 October 30, 2026';document.getElementById('app').appendChild(p);var o=document.createElement('div');o.className='hr-base-select-option';o.innerHTML='<div id="o6">Intermediate</div>';document.getElementById('m1').appendChild(o);},23000)</script></body></html>`;
(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext()).newPage();
  const ext = [];
  await page.route('**/*', async (route) => {
    const u = route.request().url();
    const m = u.match(/hyperclass-help-ko[@\/][^/]+\/(data\/[^?]+|js\/[^?]+)/);
    if (m) { const f = path.join(REPO, m[1]); if (fs.existsSync(f)) return route.fulfill({ status: 200, body: fs.readFileSync(f), headers: { 'content-type': m[1].endsWith('.js') ? 'application/javascript; charset=utf-8' : 'application/json; charset=utf-8', 'access-control-allow-origin': '*' } }); return route.fulfill({ status: 404, body: 'nf' }); }
    if (u.startsWith('https://app.hyperclass.ai/v2/location/')) return route.fulfill({ status: 200, body: HTML, headers: { 'content-type': 'text/html; charset=utf-8' } });
    ext.push(u.slice(0, 90)); return route.abort();
  });
  await page.goto(`https://app.hyperclass.ai/v2/location/${LOC}/payments/invoices/x`);
  await page.waitForTimeout(26000);
  const out = await page.evaluate(() => { const r = {}; document.querySelectorAll('[id]').forEach(e => { if (e.id !== 'app' && e.children.length === 0) r[e.id] = e.textContent; }); const st = window.__hcKoApp && window.__hcKoApp.status(); r._v = window.__hcKoApp && window.__hcKoApp.version; r._st = st && { dateHits: st.dateHits, scopedHits: st.scopedHits, textHits: st.textHits }; return r; });
  await browser.close();
  console.log(JSON.stringify(out, null, 1)); console.log('external', [...new Set(ext)]);
  const exp = { d1: '기한 2026년 9월 30일', d2: '결제 2 / 3', d3: '사용자 25', t1: '결제 완료', t2: '대기 중', t3: '활성', t4: 'BS', r1: '2개월 전', r2: '방금 전', r3: '3일 후', r4: '1시간 전', r5: '3일', r6: 'in 3 days ago', o1: '초급', o2: '전문가', o3: '건강 & 피트니스', o4: 'Beginner', o5: 'My Pipeline X', n1: 'Business', c1: '댓글', late: '기한 2026년 10월 30일', o6: '중급', k1: '회사 (0)', k2: 'Companies (3)', k3: '라이브 세션 (12)', k4: 'My Custom Thing (2)', k5: '0개 항목', k6: '1개 항목', m3: '10월', m4: '2027년 1월', m5: 'Mar', m6: 'Maybe', s1: '2회 이상 지연 또는 14일 이상 지연', s2: '1회 이상 지연 또는 7일 이상 지연 (상 제외)', s3: '1회 이상 지연 또는 1일 이상 지연 (상/중 제외)', s4: 'Slipped away' };
  let bad = 0; for (const k in exp) if (out[k] !== exp[k]) { bad++; console.log('✗', k, JSON.stringify(out[k]), '≠', exp[k]); }
  console.log(bad ? `실패 ${bad}` : '전부 통과', 'd4=', out.d4); process.exit(bad ? 1 : 0);
})();
