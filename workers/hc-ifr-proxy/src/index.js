// hc-ifr-proxy — 교차 출처 iframe 앱을 app.hyperclass.ai 출처로 중계하는 PoC Worker (2026-11-06)
// 라우트: app.hyperclass.ai/__ifr/*  ·  app.hyperclass.ai/assets/*
// 설계: docs/research/iframe-proxy-2026-11-06.md
// 원칙: 이 Worker는 기존 화면에 닿지 않는다(두 경로 모두 메인 앱이 쓰지 않음 — 2026-11-06 실측).
// v0.2.0(2026-11-07): /assets/* 대체 순서(다른 앱 → 원래 출처). 부모 쪽 주소 바꾸기는 로더 v4.21.14(캐너리)가 한다.
// v0.3.0(2026-11-07): 해시 이름 정적 파일 브라우저 캐시 1년(Worker 호출 수 절감) — 아래 HASHED.
//       부모 쪽 주소 바꾸기는 벤자민 브라우저 수동 주입(PoC) → 통과 시 한글팩 로더 캐너리로 편입.
const APPS = {
  wf: 'https://client-app-automation-workflows.leadconnectorhq.com',
  crm: 'https://client-app-crm-settings.leadconnectorhq.com',
};
const OFF = false; // 즉시 끄기: true 로 바꾸고 배포하면 모든 요청 404

// v0.3.0(2026-11-07): 이름에 내용 해시가 붙은 정적 파일은 브라우저가 1년 동안 다시 묻지 않게 한다(immutable).
// 이유: 무료 한도는 'Worker 호출 수'(하루 10만)다. 원래 출처는 4시간(max-age=14400, 워크플로우·폼 빌더)이나
// no-store(페이지 빌더 5MB 번들)로 주어, 4시간마다(페이지 빌더는 열 때마다) 같은 파일 수백 건이 다시 Worker 를 탄다.
// 실측(2026-11-07 워크플로우 목록): 처음 열 때 207건, 캐시가 살아 있으면 1건(HTML 문서만).
// 해시가 붙은 이름은 내용이 바뀌면 이름도 바뀌므로(GHL 새 배포 = 새 파일 이름) 오래 둬도 낡은 코드를 쓰지 않는다.
// 해시로 보기 어려운 이름·HTML·200 이 아닌 응답은 원래 헤더 그대로.
const HASHED = /\/assets\/[^/]*[.-]([A-Za-z0-9_]{8,})\.(?:m?js|css|woff2?|ttf|otf|svg|png|jpe?g|webp|gif)$/;
function isHashed(pathname) {
  const m = pathname.match(HASHED);
  if (!m) return false;
  const h = m[1];
  return /\d/.test(h) || (/[a-z]/.test(h) && /[A-Z]/.test(h)); // 'workflows' 같은 보통 단어는 해시로 보지 않는다
}

function pickAppForAssets(req) {
  // /assets/* 는 iframe 앱 번들의 CSS 미리 불러오기가 루트 경로로 오는 경우. 문서 경로로 앱을 고른다.
  const ref = req.headers.get('referer') || '';
  if (/\/settings\//.test(ref)) return 'crm';
  return 'wf';
}

async function relay(req, key, rest, url) {
  const upstream = new URL(rest + url.search, APPS[key]);
  const headers = new Headers(req.headers);
  headers.delete('cookie'); // 메인 앱 쿠키를 다른 출처로 보내지 않는다
  const init = { method: req.method, headers, redirect: 'manual' };
  if (!['GET', 'HEAD'].includes(req.method)) init.body = req.body;
  const res = await fetch(upstream.toString(), init);
  const ct = res.headers.get('content-type') || '';
  const out = new Headers(res.headers);
  out.set('x-hc-ifr', key);
  out.delete('set-cookie'); // 다른 출처의 쿠키를 app.hyperclass.ai 에 심지 않는다
  if (ct.includes('text/html')) {
    const prefix = '/__ifr/' + key;
    let html = await res.text();
    html = html.replace(/(src|href)="\/(?!\/)/g, '$1="' + prefix + '/');
    const boot = '<script>(function(){var p=' + JSON.stringify(prefix) + ';var l=location;' +
      'if(l.pathname.indexOf(p)===0){history.replaceState(history.state,"",(l.pathname.slice(p.length)||"/")+l.search+l.hash);}' +
      'window.__hcIfr={app:' + JSON.stringify(key) + ',prefix:p,v:"0.1.0"};})();</script>';
    html = html.replace(/<head([^>]*)>/i, '<head$1>' + boot);
    out.delete('content-length');
    out.delete('content-security-policy');
    out.delete('x-frame-options');
    out.set('cache-control', 'no-store');
    return new Response(html, { status: res.status, headers: out });
  }
  if (res.status === 200 && isHashed(upstream.pathname)) {
    out.set('cache-control', 'public, max-age=31536000, immutable');
    out.delete('expires');
    out.delete('pragma');
  }
  return new Response(res.body, { status: res.status, headers: out });
}

// /assets/* — Referer 로 고른 앱 → 없으면(404) 다른 앱 → 어디에도 없으면 원래 출처로 그대로(2026-11-07).
// CSS 안 url() 처럼 Referer 가 CSS 파일이라 앱을 잘못 고르는 경우와, 메인 앱이 나중에 /assets/ 를 쓰게 되는 경우를 함께 막는다.
// 두 앱 모두 없는 파일엔 진짜 404 를 준다(SPA 대체 200 아님 — 2026-11-07 실측).
async function relayAssets(req, url) {
  if (req.method !== 'GET' && req.method !== 'HEAD') return fetch(req);
  const first = pickAppForAssets(req);
  const order = [first].concat(Object.keys(APPS).filter((k) => k !== first));
  for (const k of order) {
    const res = await relay(req, k, url.pathname, url);
    if (res.status !== 404) return res;
  }
  return fetch(req);
}

export default {
  async fetch(req) {
    const url = new URL(req.url);
    if (OFF) return new Response('off', { status: 404 });
    const m = url.pathname.match(/^\/__ifr\/([a-z]+)(\/.*)?$/);
    if (m && APPS[m[1]]) return relay(req, m[1], m[2] || '/', url);
    if (url.pathname.startsWith('/assets/')) return relayAssets(req, url);
    return new Response('not found', { status: 404 });
  },
};
