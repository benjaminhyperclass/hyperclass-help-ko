import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';
import { rmSync } from 'node:fs'; try { rmSync('.wrangler', { recursive: true, force: true }); } catch {}
const wr = spawn('npx', ['wrangler', 'dev', '--config', 'wrangler.test.toml', '--local', '--port', '18788', '--log-level', 'error'], { stdio: ['ignore', 'pipe', 'pipe'] });
wr.stderr.on('data', d => process.stderr.write(d));
let up = false; for (let i = 0; i < 60 && !up; i++) { await sleep(1000); try { await fetch('http://127.0.0.1:18788/health'); up = true; } catch {} }
if (!up) { wr.kill(); process.exit(1); }
let fail = 0; const check = (n, c) => { console.log((c ? '✅ ' : '❌ ') + n); if (!c) fail++; };
const B = 'http://127.0.0.1:18788';
const ev = { v: 1, t: new Date().toISOString(), route: '/v2/location/:loc/settings/tags', loader: '4.14.0', rev: 'd32834c', edge: { lifted: 820, why: 'start' }, text: { ko: 180, en: 12 }, hits: 40, unmatched: 0, ns: [{ ns: 'newFeatureApp', total: 120, en: 118, samples: ['title', 'cta.label'], pairs: [['title', 'New Feature'], ['cta.label', 'Try it now']] }, { ns: 'contacts', total: 900, en: 3, samples: ['x.y'] }], reason: 'start' };
let r = await fetch(B + '/r', { method: 'POST', body: JSON.stringify(ev), headers: { 'content-type': 'text/plain' } });
check('POST /r 204', r.status === 204);
r = await fetch(B + '/r', { method: 'POST', body: JSON.stringify({ ...ev, route: '/v2/location/r6JD1nsqtk6Oln28fgrj/x' }), headers: { 'content-type': 'text/plain' } });
check('로케이션 ID 포함 거부 400', r.status === 400 && (await r.text()) === 'route-has-location-id');
r = await fetch(B + '/r', { method: 'POST', body: 'nope' });
check('비JSON 400', r.status === 400);
await fetch(B + '/r', { method: 'POST', body: JSON.stringify({ ...ev, route: '/v2/location/:loc/dashboard', text: { ko: 50, en: 50 }, edge: { lifted: 1500, why: 'start' } }) });
r = await fetch(B + '/digest');
check('digest 토큰 없이 401', r.status === 401);
r = await fetch(B + '/digest', { headers: { authorization: 'Bearer t0k' } });
const d = await r.json();
check('digest 200 + events 2', r.status === 200 && d.events === 2);
check('ns 1위 newFeatureApp', d.ns[0] && d.ns[0].ns === 'newFeatureApp' && d.ns[0].en === 118);
check('routes 낮은 한글비율 먼저', d.routes[0].route === '/v2/location/:loc/dashboard' && d.routes[0].koRatio === 0.5);
check('edge p50/p90', d.edge.n === 2 && d.edge.p50 === 1500 && d.edge.p90 === 1500);
r = await fetch(B + '/en', { headers: { authorization: 'Bearer t0k' } }); const enIdx = await r.json();
check('/en 목록: newFeatureApp 2건', enIdx.newFeatureApp === 2);
r = await fetch(B + '/en?ns=newFeatureApp', { headers: { authorization: 'Bearer t0k' } }); const enMap = await r.json();
check('/en?ns: 원문 복원', enMap['title'] === 'New Feature' && enMap['cta.label'] === 'Try it now');
r = await fetch(B + '/r', { method: 'POST', body: JSON.stringify({ ...ev, ns: [{ ns: 'x', total: 1, en: 1, samples: [], pairs: [['k', 1]] }] }) });
check('pairs 형식 오류 400', r.status === 400);
for (let i = 0; i < 6; i++) r = await fetch(B + '/r', { method: 'POST', body: JSON.stringify(ev) });
check('레이트리밋 429', r.status === 429);
wr.kill(); process.exit(fail ? 1 : 0);
