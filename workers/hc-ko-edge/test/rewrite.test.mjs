// 로컬 검증: workerd(wrangler dev --local) 에 가짜 오리진을 붙여 HTML/비HTML 응답의 주입 여부를 본다.
import http from 'node:http';
import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';

const origin = http.createServer((req, res) => {
  if (req.url.startsWith('/pointer.json')) { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ rev: 'd32834c0000000000000000000000000000000000'.slice(0,40), off: false, loader: { stable: 'aaaaaaa'.padEnd(40,'a'), next: 'bbbbbbb'.padEnd(40,'b'), canary: ['CANARY1'], files: ['js/hc-ko-app-loader.js', 'js/hc-confirm-adapter.js'] }, excludeLocations: ['EXCL1'], telemetry: { url: 'https://t.example/r' } })); }
  if (req.url.startsWith('/api')) { res.writeHead(200, { 'content-type': 'application/json' }); return res.end('{"ok":1}'); }
  const payPtr = { rev: 'c'.repeat(40), off: false, loader: { stable: 'd'.repeat(40), next: 'e'.repeat(40), integrity: 'sha384-' + 'A'.repeat(64) }, excludePaths: ['EXPAY1'] };
  if (req.url.startsWith('/pay-pointer-slow.json')) { return setTimeout(() => { res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify(payPtr)); }, 1200); }
  if (req.method === 'POST' && req.url.startsWith('/payment-link/echo')) { let body = ''; req.on('data', c => body += c); return req.on('end', () => { res.writeHead(200, { 'content-type': 'text/html' }); res.end('ECHO:' + body); }); }
  if (req.url.startsWith('/payment-link/csp')) { res.writeHead(200, { 'content-type': 'text/html', 'content-security-policy': "script-src 'self'" }); return res.end('<html><head></head><body>csp</body></html>'); }
  if (req.url.startsWith('/pay-pointer.json')) { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify(payPtr)); }
  if (req.url.startsWith('/pay-pointer-off.json')) { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ ...payPtr, off: true })); }
  if (req.url.startsWith('/l/') || req.url.startsWith('/payment-link/redir')) { res.writeHead(302, { location: 'https://example.com/landing', 'content-type': 'text/html' }); return res.end('<html><head></head><body>moved</body></html>'); }
  if (req.url.startsWith('/payment-link/json')) { res.writeHead(200, { 'content-type': 'application/json' }); return res.end('{"pay":1}'); }
  if (req.url.startsWith('/invoice/missing')) { res.writeHead(404, { 'content-type': 'text/html' }); return res.end('<html><head></head><body>nf</body></html>'); }
  if (/^\/(payment-link|invoice|estimate|gift-card|pinia-demo)/.test(req.url)) { res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' }); return res.end('<!doctype html><html><head><meta charset="utf-8"><title>FastPayDirect Payment Link</title></head><body><div id="__nuxt">Pay</div></body></html>'); }
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  res.end('<!doctype html><html><head><meta charset="utf-8"><title>GHL</title></head><body><div id="app">Dashboard</div></body></html>');
}).listen(18080);

const wr = spawn('npx', ['wrangler', 'dev', '--config', 'wrangler.test.toml', '--local', '--port', '18787', '--var', 'ORIGIN_TEST:http://127.0.0.1:18080', '--log-level', 'error'], { stdio: ['ignore', 'pipe', 'pipe'], cwd: process.cwd(), env: { ...process.env, HC_TEST_ORIGIN: 'http://127.0.0.1:18080' } });
wr.stderr.on('data', d => process.stderr.write(d));
let ok = false;
for (let i = 0; i < 60 && !ok; i++) { await sleep(1000); try { await fetch('http://127.0.0.1:18787/'); ok = true; } catch {} }
if (!ok) { console.error('wrangler dev 기동 실패'); wr.kill(); origin.close(); process.exit(1); }

let fail = 0;
const check = (name, cond) => { console.log((cond ? '✅ ' : '❌ ') + name); if (!cond) fail++; };
const html = await (await fetch('http://127.0.0.1:18787/v2/location/abc/dashboard')).text();
check('HTML: 베일 삽입', html.includes('id="hc-ko-veil"') && html.includes('id="hc-ko-veil-css"') && html.indexOf('<div id="hc-ko-veil"') > html.indexOf('<body'));
check('HTML: 부트스트랩 삽입', /hc-bootstrap\.js/.test(html));
check('HTML: head 맨 앞', html.indexOf('hc-ko-veil') < html.indexOf('<meta charset'));
check('HTML: 원본 유지', html.includes('<div id="app">Dashboard</div>'));
check('HTML: __hcPtr 주입', html.includes('window.__hcPtr={"rev":"d32834c'));
check('HTML: stable preload (비캐너리)', /preload" as="script" href="[^"]+@a{40}\/js\/hc-ko-app-loader\.js/.test(html));
check('HTML: core preload', /as="fetch" crossorigin="anonymous" href="[^"]+@d32834c[0-9a-f]*\/data\/hc-ko-app-core\.json/.test(html));
const can = await (await fetch('http://127.0.0.1:18787/v2/location/CANARY1/dashboard')).text();
check('캐너리: next preload', /@b{40}\/js\/hc-ko-app-loader\.js/.test(can));
const noptr = await (await fetch('http://127.0.0.1:18787/v2/location/abc/dashboard?noptr=1')).text();
check('포인터 실패: 베일+부트스트랩만', noptr.includes('hc-ko-veil') && noptr.includes('hc-bootstrap.js') && !noptr.includes('__hcPtr'));
const off = await (await fetch('http://127.0.0.1:18787/v2/location/abc/dashboard?hcko=off')).text();
check('?hcko=off: 미주입', !off.includes('hc-ko-veil'));
const api = await (await fetch('http://127.0.0.1:18787/api/x')).text();
check('JSON: 통과', api === '{"ok":1}');
const post = await (await fetch('http://127.0.0.1:18787/', { method: 'POST' })).text();
check('POST: 미주입', !post.includes('hc-ko-veil'));
// ── 결제 앱 (links.hyperclass.ai, v0.4) ──
const P = 'http://127.0.0.1:18787';
const H = { 'x-test-host': 'links.hyperclass.ai' };
const pay = async (path, opt = {}) => fetch(P + path, { headers: H, redirect: 'manual', ...opt });
const pl = await (await pay('/payment-link/6ae596a700921ddbe8ee08a6')).text();
check('결제: 베일 삽입(body 맨 앞)', pl.includes('<div id="hc-pay-veil"') && pl.indexOf('<div id="hc-pay-veil"') > pl.indexOf('<body'));
check('결제: head 맨 앞에 포인터·로더', pl.indexOf('__hcPayPtr') < pl.indexOf('<meta charset') && /<script async src="[^"]+@d{40}\/js\/hc-pay-loader\.js"[^>]*>/.test(pl));
check('결제: 포인터 스냅샷(rev·excludePaths)', pl.includes('window.__hcPayPtr={"rev":"' + 'c'.repeat(40)) && pl.includes('"excludePaths":["EXPAY1"]'));
check('결제: 로더 SRI(integrity·crossorigin)', /hc-pay-loader\.js" integrity="sha384-A{64}" crossorigin="anonymous"/.test(pl));
check('결제: 베일이 CSS 만으로 걷힘(animation·pointer-events)·동작 줄이기면 없음', /animation:hcpayveil 0s \d+ms forwards/.test(pl) && pl.includes('pointer-events:none') && pl.includes('prefers-reduced-motion'));
check('결제: 사전 preload @rev', pl.includes('@' + 'c'.repeat(40) + '/data/hc-ko-payments.json'));
check('결제: 베일 상한 1.5초', /veilMs:(\d+)/.test(pl) && +pl.match(/veilMs:(\d+)/)[1] <= 1500);
check('결제: 원본 유지', pl.includes('<div id="__nuxt">Pay</div>'));
check('결제: 앱 부트스트랩·앱 베일 없음', !pl.includes('hc-bootstrap.js') && !pl.includes('hc-ko-veil'));
const inv = await (await pay('/invoice/abc')).text(); check('결제: 인보이스 경로 주입', inv.includes('hc-pay-loader.js'));
const est = await (await pay('/estimate-ssr/abc')).text(); check('결제: 견적 -ssr 경로 주입', est.includes('hc-pay-loader.js'));
const gc = await (await pay('/gift-card/terms-and-conditions/abc')).text(); check('결제: 기프트카드 하위 경로 주입', gc.includes('hc-pay-loader.js'));
const nx = await (await pay('/payment-link/abc?hcch=next')).text(); check('결제: ?hcch=next → loader.next', /@e{40}\/js\/hc-pay-loader\.js/.test(nx));
const r302 = await pay('/l/trigger123'); const b302 = await r302.text();
check('결제: 트리거 링크 3xx 그대로(Location 유지·미주입)', r302.status === 302 && r302.headers.get('location') === 'https://example.com/landing' && !b302.includes('hc-pay'));
const r302b = await pay('/payment-link/redirect-me'); check('결제: 결제 경로라도 3xx 는 통과', r302b.status === 302 && !(await r302b.text()).includes('hc-pay'));
const r404 = await pay('/invoice/missing'); check('결제: 404 통과', r404.status === 404 && !(await r404.text()).includes('hc-pay'));
const pj = await (await pay('/payment-link/json')).text(); check('결제: 비HTML 통과', pj === '{"pay":1}');
const pp = await (await pay('/payment-link/abc', { method: 'POST' })).text(); check('결제: POST 통과', !pp.includes('hc-pay'));
const pd = await (await pay('/pinia-demo')).text(); check('결제: 비대상 경로(/pinia-demo) 통과', !pd.includes('hc-pay'));
const np = await (await pay('/payment-link/abc?noptr=1')).text(); check('결제: 포인터 실패 → 아무것도 안 넣음', !np.includes('hc-pay'));
const po = await (await pay('/payment-link/abc?payoff=1')).text(); check('결제: 포인터 off → 아무것도 안 넣음', !po.includes('hc-pay'));
const ho = await (await pay('/payment-link/abc?hcko=off')).text(); check('결제: ?hcko=off 통과', !ho.includes('hc-pay'));
const ex = await (await pay('/payment-link/EXPAY1')).text(); check('결제: excludePaths → Worker 도 미주입', !ex.includes('hc-pay'));
const csp = await (await pay('/payment-link/csp')).text(); check('결제: CSP 헤더 있으면 미주입', csp.includes('csp') && !csp.includes('hc-pay'));
const t0 = Date.now(); const slow = await (await pay('/payment-link/abc?slowptr=1')).text(); const dt = Date.now() - t0;
check('결제: 포인터 300ms 초과 → 기다리지 않고 통과', !slow.includes('hc-pay') && dt < 1100);
const echo = await (await pay('/payment-link/echo', { method: 'POST', body: 'a=1&b=2' })).text(); check('결제: POST 본문 그대로 오리진까지', echo === 'ECHO:a=1&b=2');
const appAgain = await (await fetch(P + '/v2/location/abc/dashboard')).text(); check('앱: 결제 분기 후에도 종전 주입', appAgain.includes('hc-bootstrap.js') && !appAgain.includes('hc-pay'));
wr.kill(); origin.close();
process.exit(fail ? 1 : 0);
