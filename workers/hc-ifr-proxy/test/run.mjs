// hc-ifr-proxy 단위 시험 — fetch 를 가짜로 바꿔 외부 호출 0. 실행: node workers/hc-ifr-proxy/test/run.mjs
import worker from '../src/index.js';
let ok = 0, bad = 0; const chk = (c, m) => { if (c) ok++; else { bad++; console.log('  ✗ ' + m); } };
const calls = [];
const have = { wf: new Set(['/assets/wf-a.js', '/v2/x']), crm: new Set(['/assets/crm-b.css']) };
globalThis.fetch = async (input, init) => {
  const u = new URL(typeof input === 'string' ? input : input.url);
  calls.push(u.host + u.pathname);
  if (u.host === 'app.hyperclass.ai') return new Response('origin', { status: 200, headers: { 'x-origin': '1' } });
  const k = u.host.startsWith('client-app-automation-workflows') ? 'wf' : u.host.startsWith('client-app-crm-settings') ? 'crm' : null;
  if (!k) throw new Error('unexpected host ' + u.host);
  if (u.pathname === '/v2/x') return new Response('<html><head><title>t</title></head><body><script src="/assets/wf-a.js"></script><a href="//cdn.example/x">x</a></body></html>', { status: 200, headers: { 'content-type': 'text/html', 'set-cookie': 'a=1', 'content-security-policy': "default-src 'self'", 'x-frame-options': 'DENY' } });
  if (have[k].has(u.pathname)) return new Response('asset:' + k, { status: 200, headers: { 'content-type': 'text/javascript' } });
  return new Response('<h1>404</h1>', { status: 404, headers: { 'content-type': 'text/html' } });
};
const R = (p, h = {}, m = 'GET') => new Request('https://app.hyperclass.ai' + p, { method: m, headers: h });

let r = await worker.fetch(R('/__ifr/wf/v2/x?q=1', { cookie: 'sess=1' }));
let t = await r.text();
chk(r.status === 200 && r.headers.get('x-hc-ifr') === 'wf', 'html relay status/header');
chk(t.includes('src="/__ifr/wf/assets/wf-a.js"') && t.includes('href="//cdn.example/x"'), 'html rewrite (root-relative only)');
chk(t.includes('window.__hcIfr={app:"wf"') && t.indexOf('__hcIfr') < t.indexOf('<title>'), 'boot injected first in head');
chk(!r.headers.get('set-cookie') && !r.headers.get('content-security-policy') && !r.headers.get('x-frame-options'), 'headers stripped');

calls.length = 0; r = await worker.fetch(R('/assets/crm-b.css', { referer: 'https://app.hyperclass.ai/v2/location/L/settings/company' }));
chk((await r.text()) === 'asset:crm' && calls.length === 1, 'assets: referer crm hit first');
calls.length = 0; r = await worker.fetch(R('/assets/crm-b.css', { referer: 'https://app.hyperclass.ai/assets/some.css' }));
chk((await r.text()) === 'asset:crm' && calls.length === 2, 'assets: wrong guess → other app');
calls.length = 0; r = await worker.fetch(R('/assets/main-app.js'));
chk((await r.text()) === 'origin' && r.headers.get('x-origin') === '1' && calls.length === 3, 'assets: none → origin passthrough');
calls.length = 0; r = await worker.fetch(R('/assets/x.js', {}, 'POST'));
chk((await r.text()) === 'origin' && calls.length === 1, 'assets: non-GET → origin');
r = await worker.fetch(R('/__ifr/zzz/v2/x'));
chk(r.status === 404, 'unknown app key → 404');
console.log(`케이스 9 · ok 단언 ${ok} · 실패 ${bad}`);
process.exit(bad ? 1 : 0);
