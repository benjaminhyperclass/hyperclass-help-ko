/* ─────────────────────────────────────────────────────────────────────
   hcKo 배포 검증 — Custom JS 교체 직후 1회 실행

   실행 위치: 허용 로케이션 아무 화면
             https://app.hyperclass.ai/v2/location/r6JD1nsqtk6Oln28fgrj/dashboard
   실행 방법: F12 → Console → 아래 전체 붙여넣기 → Enter
             (Chrome 이 "allow pasting" 을 요구하면 그대로 타이핑 후 Enter)

   ※ 이 검증이 필요한 이유: CDN 3자 SHA 대조는 진입점(Custom JS)이
     안 바뀐 상태에서도 전부 통과합니다. 2026-08-23 배포가 그렇게 잠겼습니다.
     "배포 완료" 선언 전에 반드시 라이브에서 확인하세요.

   ⚠ 실행 시점: 화면이 다 뜬 뒤에 돌리세요. 페이지 로드 직후에 실행하면
     로더가 아직 사전을 받는 중이라 booted=false / textEntries=0 으로
     오탐 FAIL 이 납니다. 그 경우 몇 초 뒤 다시 실행하면 됩니다.

   ※ EXPECT 는 배포할 때마다 갱신합니다. 갱신 대상 3개:
       version     ← js/hc-ko-app-loader.js 의 version
       revPrefix   ← 그 파일의 REV 앞 7자 (= 사전 커밋)
       textEntries ← data/hc-ko-app-core.json 의 _text 건수
   ───────────────────────────────────────────────────────────────────── */
(() => {
  const EXPECT = {
    version: '4.9.0',
    revPrefix: 'f188913',
    textEntries: 9088,
  };
  const A = window.__hcKoApp;
  if (!A) {
    console.log('%c✗ __hcKoApp 없음 — 로더가 아예 로드되지 않았습니다.',
                'color:#c00;font-weight:bold');
    console.log('  · 허용 로케이션 화면인지 확인 (에이전시 화면에서는 정상적으로 없음)');
    console.log('  · Custom JS 에 로더 script 태그가 있는지 확인');
    return '✗ FAIL — 로더 미로드';
  }

  const st = A.status();
  const rows = [];
  const chk = (name, actual, ok, hint) => {
    rows.push({ 항목: name, 실측: String(actual), 판정: ok ? '✓ PASS' : '✗ FAIL',
                비고: ok ? '' : (hint || '') });
    return ok;
  };

  let pass = true;
  pass &= chk('version', A.version, A.version === EXPECT.version,
              `기대 ${EXPECT.version} — 다르면 Custom JS 의 로더 SHA 가 옛것입니다`);
  pass &= chk('rev', String(st.rev).slice(0, 10) + '…',
              String(st.rev).startsWith(EXPECT.revPrefix),
              `기대 ${EXPECT.revPrefix}… — 로더는 새것인데 REV 가 옛것이면 로더 내부 REV 미갱신`);
  pass &= chk('textEntries', st.textEntries, st.textEntries === EXPECT.textEntries,
              `기대 ${EXPECT.textEntries} — 다르면 사전이 옛 커밋에서 옵니다`);
  pass &= chk('booted', st.booted, st.booted === true, '게이트 밖 화면이면 false 가 정상');

  // 실제 신규 엔트리가 들어왔는지 표본 확인
  const T = (A.core && A.core._text) || {};
  const samples = [
    ['Create Sub-Account', '서브 계정 생성'],
    ['Open opportunities', '진행 중인 기회'],
    ['Life Insurance', '생명보험'],
    ['Import Existing 연락처', '기존 연락처 가져오기'],   // v4.2.2 라운드
    ['Created on:', '생성일:'],                          // v4.2.3 레거시 회수
  ];
  samples.forEach(([en, want]) => {
    const got = T[en];
    pass &= chk(`_text["${en}"]`, got === undefined ? '(없음)' : got,
                got === want, `기대 "${want}"`);
  });

  console.table(rows);

  // 참고 지표 (판정 대상 아님)
  console.log('%c참고 지표', 'font-weight:bold');
  console.log({
    textHits: st.textHits,      // 이 화면에서 실제 치환된 횟수 — 늘어나야 정상
    unmatched: st.unmatched,
    fallback: st.fallback,      // 0 이 정상
    fuzzy: st.fuzzy,            // 0 이 정상
    remerge: st.remerge,
    apps: st.apps,
  });

  const legacy = [...document.scripts].map(s => s.src)
    .filter(s => /dashboard-ko/.test(s));
  if (legacy.length) {
    console.log('%c⚠ 레거시 dashboard-ko 가 아직 로드 중입니다 — 제거 결정 대기 항목',
                'color:#b60');
  }

  const verdict = pass ? '✓ PASS — 배포 반영 확인' : '✗ FAIL — 위 표의 FAIL 행 확인';
  console.log(`%c${verdict}`, `color:${pass ? '#0a0' : '#c00'};font-weight:bold;font-size:14px`);
  return verdict;
})();
