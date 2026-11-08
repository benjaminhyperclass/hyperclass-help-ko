// 로더 v4.21.15~16 하네스 — 열거값 메뉴 옵션·한국어 라벨+날짜·상대 시각·소문자 상태 칩·알약 상태어·상단 알림 배너(v4.21.16) (사전 v4.2.63 이상 필요)
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
<p><span class="overflow-hidden text-ellipsis whitespace-nowrap" id="ev1box"><span class="font-semibold" id="e1">Appointment [S7] 예약 B</span> <span class="font-semibold" id="e2">updated</span><span id="e3t"></span></span></p>
<p><span class="overflow-hidden" id="ev2box"><span class="font-semibold" id="e4">Opportunity 김필립</span> <span class="font-semibold" id="e5">created</span></span></p>
<p><span class="overflow-hidden" id="ev3box"><span class="font-semibold" id="e7">Appointment X</span> <span class="font-semibold" id="e8">created</span></span></p>
<p><span class="font-semibold" id="e10">Opportunity Zone</span> <span id="e11">created</span></p>
<div><p id="st1">Status:</p><p id="st2">Open</p></div><div><p id="st3">Note:</p><p id="st4">Open</p></div><p id="st5">Weird Label:</p><div><div>유형:</div><div id="ty1">Funnel</div></div><div><div>메모:</div><div id="ty2">Funnel</div></div><span class="text-xs rounded ui-tag" id="ut1">Succeeded</span><span id="pg1">1 - 3 of 3</span><span id="pg2">1-20 of 173</span><span id="pg3">1 of 3</span><p id="iv1">0 Invoice(s) in Draft</p><p id="iv2">6 Invoice(s) received</p><p id="iv3">1 Invoice(s) Overdue</p><p id="iv4">12 Invoice(s) in Due</p><div class="notification-title-message" id="bn1">The connection for the following Social Planner Instagram account(s) has expired: arkstudio_inhwan.</div><div id="bn2">The connection for the following Social Planner Facebook account(s) has expired: a, b, c.</div><button class="notification-btn" id="bn3">Re-integrate</button><p id="bn4">The connection was fine</p>
</div>`;
const HTML = `<!doctype html><html><head><meta charset="utf-8"><script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@test/js/hc-ko-app-loader.js"></script></head><body>${BODY}
<script>document.getElementById('ev1box').appendChild(document.createTextNode(' → marked as cancelled for Oct 31, 2026 04:45PM'));document.getElementById('ev2box').appendChild(document.createTextNode(' in 원격학원 아웃바운드 - 연락처 확보 필요'));document.getElementById('ev3box').appendChild(document.createTextNode(' for Oct 31, 2026 05:30PM'));
setTimeout(function(){var p=document.createElement('p');p.id='late';p.textContent='기한 October 30, 2026';document.getElementById('app').appendChild(p);var o=document.createElement('div');o.className='hr-base-select-option';o.innerHTML='<div id="o6">Intermediate</div>';document.getElementById('m1').appendChild(o);},23000)</script></body></html>`;
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
  const out = await page.evaluate(() => { const r = {}; document.querySelectorAll('[id]').forEach(e => { if (e.id !== 'app' && e.children.length === 0) r[e.id] = e.textContent; }); const st = window.__hcKoApp && window.__hcKoApp.status(); r._v = window.__hcKoApp && window.__hcKoApp.version; r._ev = ['ev1box','ev2box','ev3box'].map(i => document.getElementById(i).textContent); r._st = st && { dateHits: st.dateHits, scopedHits: st.scopedHits, textHits: st.textHits }; return r; });
  await browser.close();
  console.log(JSON.stringify(out, null, 1)); console.log('external', [...new Set(ext)]);
  const exp = { d1: '기한 2026년 9월 30일', d2: '결제 2 / 3', d3: '사용자 25', t1: '결제 완료', t2: '대기 중', t3: '활성', t4: 'BS', r1: '2개월 전', r2: '방금 전', r3: '3일 후', r4: '1시간 전', r5: '3일', r6: 'in 3 days ago', o1: '초급', o2: '전문가', o3: '건강 & 피트니스', o4: 'Beginner', o5: 'My Pipeline X', n1: 'Business', c1: '댓글', late: '기한 2026년 10월 30일', o6: '중급', k1: '회사 (0)', k2: 'Companies (3)', k3: '라이브 세션 (12)', k4: 'My Custom Thing (2)', k5: '0개 항목', k6: '1개 항목', m3: '10월', m4: '2027년 1월', m5: 'Mar', m6: 'Maybe', s1: '2회 이상 지연 또는 14일 이상 지연', s2: '1회 이상 지연 또는 7일 이상 지연 (상 제외)', s3: '1회 이상 지연 또는 1일 이상 지연 (상/중 제외)', s4: 'Slipped away', e1: '예약 [S7] 예약 B', e2: '업데이트됨', e4: '기회 김필립', e5: '생성됨', e7: '예약 X', e8: '생성됨', e10: 'Opportunity Zone', e11: 'created', st1: '상태:', st2: '진행 중', st3: '메모:', st4: 'Open', st5: 'Weird Label:', ty1: '퍼널', ty2: 'Funnel', ut1: '성공', pg1: '3개 중 1–3', pg2: '173개 중 1–20', pg3: '1 of 3', iv1: '0 건 임시 저장', iv2: '6 건 결제 완료', iv3: '1 건 기한 초과', iv4: '12 건 지급 예정', bn1: '다음 소셜 플래너 Instagram 계정의 연결이 만료되었습니다: arkstudio_inhwan', bn2: '다음 소셜 플래너 Facebook 계정의 연결이 만료되었습니다: a, b, c', bn3: '다시 연결', bn4: 'The connection was fine' };
  let bad = 0; for (const k in exp) if (out[k] !== exp[k]) { bad++; console.log('✗', k, JSON.stringify(out[k]), '≠', exp[k]); }
  const evExp = ['예약 [S7] 예약 B 업데이트됨 → 취소됨 · 2026년 10월 31일 오후 4:45', '기회 김필립 생성됨 · 원격학원 아웃바운드 - 연락처 확보 필요', '예약 X 생성됨 · 2026년 10월 31일 오후 5:30'];
  evExp.forEach((e, i) => { if (out._ev[i] !== e) { bad++; console.log('✗ ev' + i, JSON.stringify(out._ev[i]), '≠', e); } });
  console.log(bad ? `실패 ${bad}` : '전부 통과', 'd4=', out.d4, 'EV', JSON.stringify(out._ev)); process.exit(bad ? 1 : 0);
})();
