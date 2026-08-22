#!/usr/bin/env node
/*
 * 기존 DOM 치환 사전(js/dashboard-ko.js)과 v4 i18n 사전의 겹침 분석.
 *
 * 두 레이어가 같은 영어에 다른 한국어를 주면 화면이 뒤집히고,
 * 두 MutationObserver 가 서로의 변경을 트리거해 깜빡임이 생긴다.
 * 어디를 얼마나 줄일 수 있는지, 실제 충돌이 몇 건인지 센다.
 *
 *   node scripts/analyze-dict-overlap.js            # 요약
 *   node scripts/analyze-dict-overlap.js --json out.json
 *
 * ⚠️ 이 스크립트는 세기만 한다. js/dashboard-ko.js 를 직접 고쳐도
 *    build-dashboard-ko.py 가 data/ghl-i18n-{en,ko}.json + manual-dict-v401.json
 *    에서 다시 만들기 때문에 다음 자동 빌드에서 되돌아온다.
 *    실제 축소는 원천(data/) 또는 빌드 제외 목록으로 해야 한다.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const p = (x) => path.join(ROOT, x);

function parseDashboardDict(file) {
  const src = fs.readFileSync(file, 'utf8');
  const start = src.indexOf('var t={');
  if (start < 0) throw new Error('var t={ 를 찾지 못했습니다: ' + file);
  let i = start + 6, depth = 0, end = -1, inStr = false, quote = '', esc = false;
  for (let k = i; k < src.length; k++) {
    const c = src[k];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === quote) inStr = false;
      continue;
    }
    if (c === '"' || c === "'") { inStr = true; quote = c; continue; }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (!depth) { end = k + 1; break; } }
  }
  if (end < 0) throw new Error('사전 객체가 닫히지 않았습니다');
  return new Function('return ' + src.slice(i, end))();
}

function flatKeys(node, prefix, out) {
  if (node && typeof node === 'object') {
    for (const k in node) flatKeys(node[k], prefix ? prefix + '.' + k : k, out);
  } else if (typeof node === 'string') out.add(prefix);
}

function main() {
  const OLD = parseDashboardDict(p('js/dashboard-ko.js'));
  const core = JSON.parse(fs.readFileSync(p('data/hc-ko-app-core.json'), 'utf8'));
  const apps = JSON.parse(fs.readFileSync(p('data/hc-ko-app-apps.json'), 'utf8'));
  const ref = JSON.parse(fs.readFileSync(p('_source/hc-ko-app-reference.json'), 'utf8'));

  // 실제 배포되는 키만 센다. reference 에는 크롤에만 잡힌 키도 섞여 있다.
  const deployed = new Set();
  flatKeys(core.host, '', deployed);
  for (const fp in apps.apps) flatKeys(apps.apps[fp], '', deployed);

  // 로더는 trim 후 조회하므로 같은 기준으로 맞춘다.
  const TEXT = new Map(Object.entries(core._text).map(([k, v]) => [k.trim(), v]));
  const I18N = new Map();
  for (const [k, o] of Object.entries(ref)) {
    if (!deployed.has(k)) continue;
    if (typeof o.en !== 'string' || typeof o.ko !== 'string') continue;
    const en = o.en.trim();
    if (!en) continue;
    if (!I18N.has(en)) I18N.set(en, new Set());
    I18N.get(en).add(o.ko);
  }

  const norm = (s) => s.replace(/\s+/g, ' ').trim();
  const remove = [], keep = [], flickerReal = [], flickerWs = [];
  for (const k of Object.keys(OLD)) {
    const t = k.trim();
    const cands = new Set();
    if (TEXT.has(t)) cands.add(TEXT.get(t));
    if (I18N.has(t)) for (const x of I18N.get(t)) cands.add(x);
    if (!cands.size) { keep.push(k); continue; }
    remove.push(k);
    if (cands.has(OLD[k])) continue;
    const row = { en: k, old: OLD[k], v4: [...cands] };
    if ([...cands].some((c) => norm(c) === norm(OLD[k]))) flickerWs.push(row);
    else flickerReal.push(row);
  }

  const tot = Object.keys(OLD).length;
  const bytes = keep.reduce((a, k) => a + k.length + String(OLD[k]).length + 6, 0);
  const pct = (n) => (n / tot * 100).toFixed(1) + '%';

  console.log('=== 기존 사전 js/dashboard-ko.js ===');
  console.log(`  전체 항목        ${tot.toLocaleString()}`);
  console.log('');
  console.log('=== v4 커버리지 (trim 기준) ===');
  console.log(`  v4 가 덮음        ${remove.length.toLocaleString()}  (${pct(remove.length)})  ← 제거 대상`);
  console.log(`  v4 가 못 덮음      ${keep.length.toLocaleString()}  (${pct(keep.length)})  ← 남길 것`);
  console.log(`  축소 후 예상 크기   약 ${(bytes / 1024).toFixed(0)}KB`);
  console.log('');
  console.log('=== 충돌 (같은 영어 → 다른 한국어) ===');
  console.log(`  실제 표현 차이     ${flickerReal.length.toLocaleString()}  ← 화면이 뒤집히는 진짜 후보`);
  console.log(`  공백만 차이       ${flickerWs.length.toLocaleString()}  (육안 차이 거의 없음)`);
  console.log('');
  console.log('  실제 표현 차이 예시:');
  for (const r of flickerReal.slice(0, 10)) {
    console.log(`    ${JSON.stringify(r.en).slice(0, 56)}`);
    console.log(`       기존: ${r.old.slice(0, 60)}`);
    console.log(`       v4  : ${r.v4[0].slice(0, 60)}`);
  }

  const out = process.argv.indexOf('--json');
  if (out > 0 && process.argv[out + 1]) {
    fs.writeFileSync(process.argv[out + 1], JSON.stringify({
      total: tot, remove, keep, flickerReal, flickerWs
    }, null, 1));
    console.log(`\n저장: ${process.argv[out + 1]}`);
  }
  console.log('\n※ 세기만 합니다. 실제 축소는 원천(data/) 또는 빌드 제외 목록으로 해야');
  console.log('   build-dashboard-ko.py 재빌드에서 되돌아오지 않습니다.');
}

main();
