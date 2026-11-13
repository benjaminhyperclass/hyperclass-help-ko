// 로더 v4.21.14 IFR 하네스 — 모든 네트워크를 page.route 로 가짜 응답(외부 호출 0)
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const REPO = process.argv[2] || path.join(__dirname, '..');   // 실행: node scripts/test-loader-ifr.js  (playwright 필요, 외부 네트워크 0 — 전부 page.route)
const LOADER = fs.readFileSync(path.join(REPO, 'js/hc-ko-app-loader.js'), 'utf8');
const CANARY = 'r6JD1nsqtk6Oln28fgrj', OTHER = 'zzOtherLocation00000';
const WF = 'https://client-app-automation-workflows.leadconnectorhq.com';

function parentHtml(loc, delay) {
  return `<!doctype html><html><head><script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@test/js/hc-ko-app-loader.js"></script></head><body><div id="app"></div>
<script>
window.__res = {};
function mk(){
  var url = '${WF}/v2/location/${loc}/automation/workflows?x=1';
  var a = document.createElement('a'); a.href = url; var co = a.protocol + '//' + a.host; window.__res.childOrigin = co;
  var f = document.createElement('iframe'); f.id = 'wf'; f.src = url; document.body.appendChild(f);
  window.addEventListener('message', function(e){ if (e.data && e.data.pong) { window.__res.pongOrigin = e.origin; window.__res.handshake = (e.origin === co); } });
  f.addEventListener('load', function(){ try { f.contentWindow.postMessage({ping:1}, co); } catch (e) { window.__res.postErr = String(e); } });
}
${delay < 0 ? 'mk();' : 'setTimeout(mk, ' + delay + ');'}
</script></body></html>`;
}
const CHILD = `<!doctype html><html><head><script>window.__hcIfr={app:'wf',prefix:'/__ifr/wf'}</script></head><body><h1>Workflows list</h1><button>Create workflow</button>
<script>window.addEventListener('message',function(e){ if(e.data&&e.data.ping) parent.postMessage({pong:1}, e.origin); });
setTimeout(function(){ var b=document.createElement('span'); b.id='late'; b.textContent='Create folder'; document.body.appendChild(b); }, 1500);</script>
<div id="app"></div><script>(function(){ /* v4.21.15 ⑩: iframe 안 Vue 앱(가짜 composer) — 지문 'agentLogs|common' 은 실제 apps 사전에 있다. 늦게 마운트 */
var msgs={en:{agentLogs:{x:'Agent logs'},common:{y:'Common'}}};
var g={messages:{value:msgs},locale:{value:'en_US'},mergeLocaleMessage:function(l,m){(window.__merged=window.__merged||[]).push(l);msgs[l]=Object.assign({},msgs[l]||{},m);},t:function(){return '';}};
var sy=Symbol('i18n'),pv={};pv[sy]={global:g,mode:'composition'};
window.__msgs=msgs; setTimeout(function(){ document.getElementById('app').__vue_app__={_context:{provides:pv}}; },2500); })();</script></body></html>`;

async function run(name, { loc, health = true, off = false, delay = 300 }) {
  const browser = await chromium.launch();
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const external = [];
  if (off) await page.addInitScript(() => { try { localStorage.setItem('hcKoIfr', '0'); } catch (e) {} });
  await page.route('**/*', async (route) => {
    const u = route.request().url();
    const m = u.match(/hyperclass-help-ko[@\/][^/]+\/(data\/[^?]+|js\/[^?]+)/);
    if (m) {
      const f = path.join(REPO, m[1]);
      if (fs.existsSync(f)) return route.fulfill({ status: 200, body: fs.readFileSync(f), headers: { 'content-type': m[1].endsWith('.js') ? 'application/javascript; charset=utf-8' : 'application/json; charset=utf-8', 'access-control-allow-origin': '*' } });
      return route.fulfill({ status: 404, body: 'nf', headers: { 'access-control-allow-origin': '*' } });
    }
    if (u.startsWith('https://app.hyperclass.ai/__ifr/')) {
      const h = { 'content-type': 'text/html; charset=utf-8' }; if (health) h['x-hc-ifr'] = 'wf';
      return route.fulfill({ status: 200, body: CHILD, headers: h });
    }
    if (u.startsWith('https://app.hyperclass.ai/v2/location/')) return route.fulfill({ status: 200, body: parentHtml(loc, delay), headers: { 'content-type': 'text/html; charset=utf-8' } });
    if (u.startsWith(WF)) return route.fulfill({ status: 200, body: '<html><body><h1>Workflows list</h1>ORIGINAL<script>window.addEventListener("message",function(e){ if(e.data&&e.data.ping) parent.postMessage({pong:1}, e.origin); });</script></body></html>', headers: { 'content-type': 'text/html; charset=utf-8' } });
    external.push(u.slice(0, 80));
    return route.abort();
  });
  await page.goto(`https://app.hyperclass.ai/v2/location/${loc}/automation/workflows`);
  await page.waitForTimeout(24000);   // 로더 waitHost(20s) 뒤 start()
  const out = await page.evaluate(() => {
    const f = document.getElementById('wf');
    let inner = null, late = null; try { inner = f.contentDocument.body.innerText.replace(/\s+/g, ' ').trim(); late = f.contentDocument.getElementById('late') && f.contentDocument.getElementById('late').textContent; } catch (e) { inner = 'xorigin'; }
    const st = window.__hcKoApp && window.__hcKoApp.status();
    const native = /\[native code\]/.test(String(Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'src').set));
    let merged = null, koCat = null; try { merged = f.contentWindow.__merged || []; const m = f.contentWindow.__msgs; koCat = !!(m && m.en_US && m.en_US.agentLogs && /[가-힣]/.test(JSON.stringify(m.en_US.agentLogs))); } catch (e) {}
    return { src: f.getAttribute('src'), inner, late, merged, koCat, res: window.__res, ifr: st && st.ifr, version: window.__hcKoApp && window.__hcKoApp.version, booted: st && st.booted, coreLoaded: st && st.coreLoaded, native };
  });
  await browser.close();
  out.external = [...new Set(external)];
  console.log('\n## ' + name + '\n' + JSON.stringify(out, null, 1));
  return out;
}

(async () => {
  let ok = 0, bad = 0; const chk = (c, msg) => { if (c) ok++; else { bad++; console.log('  ✗ ' + msg); } };
  const A = await run('A 캐너리·헬스 정상', { loc: CANARY });
  chk(A.src.startsWith('https://app.hyperclass.ai/__ifr/wf/v2/location/' + CANARY), 'A src rewritten');
  chk(A.res.handshake === true && A.res.childOrigin === 'https://app.hyperclass.ai', 'A handshake origin');
  chk(/워크플로우 목록/.test(A.inner) && /워크플로우 만들기/.test(A.inner), 'A iframe translated');
  chk(A.late === '폴더 만들기', 'A late node translated by mo');
  chk(A.ifr && A.ifr.on && A.ifr.ok === true && A.ifr.frames === 1 && A.ifr.rewrites >= 2, 'A status.ifr');
  chk(A.version === '4.21.23', 'A version');
  chk(A.merged && A.merged.indexOf('en_US') >= 0 && A.merged.indexOf('en') >= 0 && A.koCat === true, 'A iframe Vue catalog merged (⑩)');
  // v4.21.18: 전 계정 — 다른 계정도 캐너리와 똑같이 중계·번역된다
  const B = await run('B 다른 계정(v4.21.18 전 계정)', { loc: OTHER });
  chk(B.src === A.src.replace(CANARY, OTHER) || B.src.indexOf('/__ifr/wf/') >= 0, 'B rewritten (all accounts)');
  chk(B.ifr && B.ifr.on === true && B.ifr.ok === true, 'B status.ifr on');
  chk(B.res.handshake === true && B.res.childOrigin === 'https://app.hyperclass.ai', 'B handshake origin');
  chk(/워크플로우 목록/.test(B.inner), 'B iframe translated');
  const C = await run('C 헬스 실패', { loc: CANARY, health: false });
  chk(C.src.startsWith('https://client-app-automation-workflows') && C.ifr.ok === false, 'C fallback original');
  chk(C.res.handshake === true, 'C handshake (original)');
  const D = await run('D 로컬 끄기', { loc: CANARY, off: true });
  chk(D.src.startsWith('https://client-app-automation-workflows') && D.ifr.on === false && D.native, 'D off');
  const E = await run('E 헬스 확인 전 iframe 생성', { loc: CANARY, delay: -1 });
  chk(E.src.startsWith('https://client-app-automation-workflows') && E.res.handshake === true, 'E safe fallback before health');
  for (const r of [A, B, C, D, E]) chk(r.external.length === 0, 'no external: ' + r.external.join(','));
  console.log(`\n케이스 5 · ok 단언 ${ok} · 실패 ${bad}`);
  process.exit(bad ? 1 : 0);
})();
