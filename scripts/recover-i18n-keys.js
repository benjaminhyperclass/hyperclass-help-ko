/* ─────────────────────────────────────────────────────────────────────────
   hcKo — i18n 키 경로 복구 + 미머지 앱 식별

   목적 1) 일괄금지 20건(`won`,`lost`,`all`,`status`…)의 전체 키 경로를 찾는다.
          이 leaf 들은 네임스페이스를 모르면 core.flat 에 넣을 수 없다.
   목적 2) 동적 15건(`24 Sub-accounts`…)의 원본 보간 템플릿 키를 찾는다.
   목적 3) T3_KEYLEAK 근본 원인 — `apps dict loaded 24` 는 떴는데
          재머지 로그에 안 나온 앱이 어디인지 특정한다.

   실행: 허용 로케이션 페이지( /v2/location/r6JD1nsqtk6Oln28fgrj/dashboard )에서
        콘솔에 통째로 붙여넣기. 대시보드 키가 가장 많이 새는 화면이라 여기서 시작.
        스냅샷/템플릿 키는 해당 화면에서 다시 한 번 돌릴 것.

   ─── 2026-08-23 실행 결과 (벤자민 라이브) ────────────────────────────────
   목적 1·2 는 종결됐습니다. 이 스크립트를 다시 꺼낼 이유는 목적 3-b 하나뿐입니다.

   · 목적 2(동적 15건) → **영구 보류.** `__HOST_CONTEXT__` 트리 46,355키 전수 탐색
     10개 패턴 전부 0건. 결제·인보이스 UI 는 federated 마이크로앱이고 그 번들의
     i18n 은 window 에 노출되지 않습니다. 붙일 키가 런타임에 존재하지 않습니다.
   · 목적 1(일괄금지 20건) → **영구 보류.** 같은 leaf 가 네임스페이스마다 다른
     번역을 갖습니다(won: 승리/성사, lost: 손실/패배). 로더가 속성도 번역하므로
     전역 등록 시 모든 앱의 title="won" 까지 한 값으로 뭉갭니다.
   · 목적 3 → 앱 사전 머지 실패 아님. 보이는 텍스트는 정상 한국어이고 원시 키는
     title/aria-label 속성에만 남습니다. 앱 측 바인딩 버그입니다.

   → 남은 용도: **스냅샷·템플릿 라이브러리 키**
     (`snapshots.loadSnapshotsTemplate.*`, `templateLibraryApp.header.settings`).
     이쪽은 모달에 '보이는 텍스트'로 새므로 실익이 있는데, 에이전시 레이어라
     ALLOW 개방 전에는 검증이 불가능합니다. ALLOW 개방 이후에 다시 실행하세요.
   ───────────────────────────────────────────────────────────────────────── */
(() => {
'use strict';

// ── 찾을 대상 ────────────────────────────────────────────────────────────
const LEAF_TARGETS = [
  'abandoned','all','footer','header','kakao_mirror','loading','lost','media',
  'membership','name','open','phone','platform','radio-input','source','status',
  'steps','summary','toggle','won'
];
const VALUE_TARGETS = [                      // 동적 15건 — 관측된 실제 화면값
  '24 Sub-accounts','Snapshot Templates (121)','My Snapshots (5)',
  'Imported Snapshots (6)','Page 1 of 2','0 Invoice(s) Overdue',
  '0 Invoice(s) in Due','2 Invoice(s) in Draft','6 Invoice(s) received',
  '10 / page','17% Off','25 Sites','0% missed calls','Unread, 224 conversations',
  'Reselling Enabled for 18 Sub accounts | Reselling Disabled for 6 Sub accounts'
];

// ── 메시지 트리 수집 (여러 경로 시도) ────────────────────────────────────
const sources = [];
const seenObj = new WeakSet();

function addSource(label, obj) {
  if (!obj || typeof obj !== 'object' || seenObj.has(obj)) return;
  seenObj.add(obj);
  sources.push({ label, obj });
}

// 1) hcKo 가 들고 있는 앱 사전 사본
try {
  const apps = window.__hcKoApp && window.__hcKoApp.apps;
  if (Array.isArray(apps)) apps.forEach((a, i) => addSource(`hcko.apps[${i}]`, a));
  else if (apps && typeof apps === 'object') addSource('hcko.apps', apps);
  if (window.__hcKoApp && window.__hcKoApp.core) {
    addSource('hcko.core.flat', window.__hcKoApp.core.flat);
    addSource('hcko.core.host', window.__hcKoApp.core.host);
  }
} catch (e) { console.warn('[hcko] apps 접근 실패', e); }

// 2) Vue 3 앱 인스턴스의 i18n
try {
  document.querySelectorAll('*').forEach(el => {
    const app = el.__vue_app__;
    if (!app) return;
    const gp = app.config && app.config.globalProperties;
    const i18n = gp && (gp.$i18n || gp.$root && gp.$root.$i18n);
    const msgs = i18n && (i18n.messages && (i18n.messages.value || i18n.messages));
    if (msgs) addSource(`vue3:${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}`, msgs);
  });
} catch (e) { console.warn('[hcko] vue3 스캔 실패', e); }

// 3) Vue 2 인스턴스
try {
  document.querySelectorAll('*').forEach(el => {
    const vm = el.__vue__;
    const msgs = vm && vm.$i18n && vm.$i18n.messages;
    if (msgs) addSource(`vue2:${el.tagName.toLowerCase()}`, msgs);
  });
} catch (e) {}

// 4) ★ 실측으로 확인된 핵심 경로 — 호스트 앱의 vue-i18n 메시지 트리
//    (2026-08-23 라이브 확인: en-US 로케일 46,355 키. DOM 요소 스캔으로는 안 잡힌다)
try {
  const hc = window.__HOST_CONTEXT__;
  const mv = hc && hc.i18n && hc.i18n.global && hc.i18n.global.messages;
  const tree = mv && (mv._value || mv.value || mv);
  if (tree) Object.keys(tree).forEach(loc => addSource(`__HOST_CONTEXT__[${loc}]`, tree[loc]));
} catch (e) { console.warn('[hcko] __HOST_CONTEXT__ 접근 실패', e); }

// 5) 마이크로프론트엔드 레지스트리 (federated apps)
//    2026-08-23 실측: registeredApps 는 비어 있고, providerApps(Map:7) 는
//    이름→URL 매핑일 뿐 i18n 을 들고 있지 않다.
try {
  const bus = window.__FRONTEND_CORE_EVENT_BUS__;
  const reg = bus && bus.registeredApps;
  const entries = reg instanceof Map ? [...reg.entries()] : Object.entries(reg || {});
  entries.forEach(([k, v]) => addSource(`registeredApps[${k}]`, v));
} catch (e) {}

// 6) 전역에 흩어진 흔한 위치
['__NUXT__', '__INITIAL_STATE__', 'i18n', '$i18n'].forEach(k => {
  try { if (window[k]) addSource(`window.${k}`, window[k]); } catch (e) {}
});

// ── 트리를 평탄화해서 path → value 맵으로 ────────────────────────────────
function flatten(obj, prefix, out, depth) {
  if (depth > 12 || !obj || typeof obj !== 'object') return out;
  for (const k of Object.keys(obj)) {
    let v;
    try { v = obj[k]; } catch (e) { continue; }
    const path = prefix ? prefix + '.' + k : k;
    if (typeof v === 'string') out.set(path, v);
    else if (v && typeof v === 'object' && !Array.isArray(v)) flatten(v, path, out, depth + 1);
  }
  return out;
}

const flatAll = [];
for (const s of sources) {
  const m = flatten(s.obj, '', new Map(), 0);
  if (m.size) flatAll.push({ label: s.label, map: m });
}

// ── 1. leaf 키 → 전체 경로 ───────────────────────────────────────────────
const leafHits = {};
for (const t of LEAF_TARGETS) leafHits[t] = [];
for (const { label, map } of flatAll) {
  for (const [path, val] of map) {
    const leaf = path.split('.').pop();
    if (leafHits[leaf]) leafHits[leaf].push({ src: label, path, val: String(val).slice(0, 60) });
  }
}

// ── 2. 화면값 → 보간 템플릿 키 ───────────────────────────────────────────
function tmplToRe(t) {
  // 플레이스홀더를 먼저 토큰으로 뺀 뒤 escape 해야 한다.
  // (escape 후에 처리하면 '\\{count\\}' 의 역슬래시 때문에 매칭이 깨진다)
  const TOK = '\u0000PH\u0000';
  const withTok = t.replace(/\{\{[^{}]*\}\}|\{[^{}]*\}|\$\{[^{}]*\}|%[sd]|%\{[^{}]*\}/g, TOK);
  const esc = withTok.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp('^' + esc.split(TOK).join('.+?') + '$');
}
const valueHits = {};
for (const t of VALUE_TARGETS) valueHits[t] = [];
for (const { label, map } of flatAll) {
  for (const [path, val] of map) {
    if (typeof val !== 'string' || !/[{%]/.test(val)) continue;
    let re; try { re = tmplToRe(val); } catch (e) { continue; }
    for (const t of VALUE_TARGETS) {
      if (re.test(t)) valueHits[t].push({ src: label, path, template: val });
    }
  }
}

// ── 3. 로드된 앱 vs 실제 머지된 앱 ───────────────────────────────────────
const st = window.__hcKoApp ? window.__hcKoApp.status() : {};
const appNamespaces = [];
try {
  const apps = window.__hcKoApp.apps;
  (Array.isArray(apps) ? apps : [apps]).forEach((a, i) => {
    if (a && typeof a === 'object') appNamespaces.push({ idx: i, ns: Object.keys(a).slice(0, 6) });
  });
} catch (e) {}

// ── 출력 ─────────────────────────────────────────────────────────────────
const found = Object.entries(leafHits).filter(([, v]) => v.length);
const missing = Object.entries(leafHits).filter(([, v]) => !v.length).map(([k]) => k);

console.group('%c[hcKo] i18n 키 복구 결과', 'font-weight:bold;color:#1F3864');
console.log('메시지 소스:', flatAll.map(f => `${f.label}(${f.map.size})`).join(', ') || '(없음)');
console.log('status:', { booted: st.booted, apps: st.apps, textHits: st.textHits,
                         unmatched: st.unmatched, remerge: st.remerge, fuzzy: st.fuzzy });

console.group(`1) leaf 키 경로 — ${found.length}/${LEAF_TARGETS.length} 발견`);
found.forEach(([leaf, hits]) => {
  console.log(`  ${leaf}:`);
  hits.slice(0, 6).forEach(h => console.log(`      ${h.path}   = "${h.val}"   [${h.src}]`));
  if (hits.length > 6) console.log(`      … 외 ${hits.length - 6}건`);
});
if (missing.length) console.log('  ✗ 이 화면에서 못 찾음:', missing.join(', '),
                                '\n    → 해당 키가 쓰이는 화면에서 다시 실행하세요.');
console.groupEnd();

console.group('2) 동적 문자열의 보간 템플릿');
let vFound = 0;
Object.entries(valueHits).forEach(([t, hits]) => {
  if (!hits.length) return;
  vFound++;
  console.log(`  "${t}"`);
  hits.slice(0, 3).forEach(h => console.log(`      ${h.path}   ← "${h.template}"   [${h.src}]`));
});
if (!vFound) console.log('  매칭 없음 — 이 화면에 해당 컴포넌트가 없거나 서버 전달 문자열입니다.');
console.groupEnd();

console.group('3) 로드된 앱 네임스페이스');
appNamespaces.forEach(a => console.log(`  [${a.idx}] ${a.ns.join(' | ')}`));
console.log('※ 콘솔을 "re-merge" 로 필터해서, 위 목록 중 재머지 로그가 한 번도',
            '안 찍힌 앱을 찾으세요. 그 앱이 T3_KEYLEAK 의 발생원입니다.');
console.groupEnd();
console.groupEnd();

// 붙여넣기 좋게 JSON 도 남김
window.__hckoKeyRecovery = { leafHits, valueHits, appNamespaces, status: st };
console.log('%c결과 객체: window.__hckoKeyRecovery  ' +
            '(copy(JSON.stringify(__hckoKeyRecovery,null,1)) 로 복사)',
            'color:#0a0');
return `소스 ${flatAll.length}개 · leaf ${found.length}/${LEAF_TARGETS.length} · 템플릿 ${vFound}/${VALUE_TARGETS.length}`;
})();
