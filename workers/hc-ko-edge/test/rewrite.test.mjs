// 로컬 검증: workerd(wrangler dev --local) 에 가짜 오리진을 붙여 HTML/비HTML 응답의 주입 여부를 본다.
import http from 'node:http';
import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';

const origin = http.createServer((req, res) => {
  if (req.url.startsWith('/pointer.json')) { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify({ rev: 'd32834c0000000000000000000000000000000000'.slice(0,40), off: false, loader: { stable: 'aaaaaaa'.padEnd(40,'a'), next: 'bbbbbbb'.padEnd(40,'b'), canary: ['CANARY1'], files: ['js/hc-ko-app-loader.js', 'js/hc-confirm-adapter.js'] }, excludeLocations: ['EXCL1'], telemetry: { url: 'https://t.example/r' } })); }
  if (req.url.startsWith('/api')) { res.writeHead(200, { 'content-type': 'application/json' }); return res.end('{"ok":1}'); }
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
check('HTML: 베일 삽입', html.includes('id="hc-ko-veil"'));
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
wr.kill(); origin.close();
process.exit(fail ? 1 : 0);
