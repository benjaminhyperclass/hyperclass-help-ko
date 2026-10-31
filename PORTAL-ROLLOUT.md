# 클라이언트 포털 한글팩 — 설치·확산 절차 (작업지시서 v1 B3·C)

> 2026-10-31 작성. 현재 상태·좌표의 정본은 `docs/STATE.md`, 진행 기록은 `PLAN-portal-login.md`.

## 1. 구조

```
포털 Custom JS 칸 (js/portal-slot.js, 6줄 — 한 번만 붙인다)
  └─ jsDelivr @고정SHA js/hc-portal-bootstrap.js
       └─ raw@main data/hc-portal-rev.json (포털 포인터: rev · loader.stable/next · canaryHosts · excludeHosts · off)
            ├─ jsDelivr @loader js/hc-portal-loader.js  → 사전 jsDelivr @rev data/hc-ko-i18n.json → vue-i18n 병합
            └─ jsDelivr @loader js/community-chat-widget-ko.js (채팅 위젯 섀도 DOM)
포털 Custom CSS 칸 (css/portal-custom.css) — #__nuxt 베일, html[data-hc-ko] 가 서거나 2.5초 뒤 해제
```

- 로더·사전을 고칠 때 **슬롯은 다시 만지지 않는다.** 포털 포인터만 커밋한다(로더 = `loader.next` → 확인 → `loader.stable`, 사전 = `rev`).
- 수강생은 각 고객 포털 도메인(`*.clientclub.net` 또는 고객 도메인)으로 들어오므로 엣지 Worker 가 닿지 않는다. **포털 슬롯이 유일한 경로**다.
- 포털 포인터는 메인 앱 포인터(`hc-ko-app-rev.json`)와 분리했다 — 두 봇이 한 파일을 동시에 쓰지 않게, 포털 문제로 메인 파이프라인이 멈추지 않게.

## 2. 붙여넣을 것 (붙이기 전에 SHA-256 대조)

| 칸 | 파일 | SHA-256 (2026-10-31) |
|---|---|---|
| Client Portal → Settings → Branding → Advanced → **Custom JS** | `js/portal-slot.js` | `11c946065a347360232f86c9391fdbb7c0f3f774757f80f886cee9ce38bf3b45` |
| 같은 화면 → **Custom CSS** | `css/portal-custom.css` | `b01556235c26deb90beab6a4dcdb18eb2dae390d977d0294663afee3153971ac` |

- Custom JS 칸은 **순수 JS** 다. script 태그를 넣지 않는다. 꺾쇠(`<`) 문자가 하나라도 있으면 새니타이저가 잘라 내고 `new Function` 검증 실패로 **주입 전체가 빠진다**(DECISIONS 2026-08-22). 레포 파일은 CI 가 무손실 검사로 막는다.
- 대조 방법: 레포에서 `shasum -a 256 js/portal-slot.js`, 붙여넣을 내용을 파일로 저장해 같은 명령. 둘이 같아야 한다.

## 3. community.hyperclass.ai (r6JD) — 첫 설치 순서

0. **먼저 PR #10(사전 v4.0)을 머지**하고 포털 포인터 `rev` 가 그 머지 커밋을 가리키게 한다(Claude Code). 머지 전에 붙이면 사전 v3.0.0(커버리지 약 67%)으로 뜬다.
1. **Custom JS 칸** 기존 내용(채팅 위젯 4문구 — `true/false` 가 `참/거짓`으로 번역돼 실제로는 동작하지 않던 코드, 원본은 git `42ce67c` 의 `js/portal-slot.js`)을 **전부 지우고** `js/portal-slot.js` 내용으로 교체. 위젯 KO 는 이제 부트스트랩이 레포 정상본을 붙인다.
2. **Custom CSS 칸**에 `css/portal-custom.css` 내용을 넣는다(기존 CSS 가 있으면 그 **위에** 덧붙인다).
3. 저장 → **새 탭 + 5분 뒤** `community.hyperclass.ai/login` (번역 확장 끈 브라우저 또는 시크릿 창).
4. 콘솔 확인:
   ```js
   __hcPortalBoot.status()   // version '1.0.1', channel 'next'(canaryHosts), ref 028b315…, gave null, error null
   __hcPortal.status()       // version '4.0.1', applied true, dictVersion '4.0.0'(PR #10 머지·포인터 rev 갱신 후 — 그 전엔 '3.0.0'), veil '1', error null
   ```
5. 오너 화면 확인: `/dashboard` · `/courses` · 코스 상세 · 레슨 · 커뮤니티 피드 · 채널 · 멤버 · 이벤트 · 리더보드 · 계정 설정 — 남은 영문을 목록으로.
6. 문제 시: 주소에 `?hcko=off`(한 브라우저) · 포털 포인터 `"off": true` 커밋(전 포털) · Custom JS 칸 비우기(즉시·완전).
7. B4 통과 뒤 **그룹 Custom Code 의 v2.0.1 DOM 로더 제거**(B5, 이중 처리 방지). 롤백은 다시 붙여넣기.

## 4. 고객 서브계정 포털로 확산 (트랙 C)

### C1. 스냅샷 복제 여부 — ✅ 확인 완료 (2026-10-31, 벤자민): **복제되지 않는다**
- 스냅샷 Linked assets 목록에 **Client Portal·Communities 항목이 없다** — 포털 Branding → Advanced 의 Custom JS/CSS 는 스냅샷으로 넘어가지 않는다.
- GHL ideas 보드 "Client Portal and Groups in Snapshot" 상태 = **Planned**(미구현).
- → **C3 로 확정.** (공개 API 에도 포털 레벨 코드 필드가 없다 — 아래 C3)

### C2. (해당 없음) 복제되는 경우
- GHL 이 위 아이디어를 구현하면 그때 하이퍼클래스 기본 스냅샷의 포털 칸에 2절 두 파일을 넣고 이 절을 되살린다.

### C3. 확정 경로 — 계정마다 붙여넣기
- **신규 계정 온보딩 체크리스트에 1단계 추가**: "Client Portal → Settings → Branding → Advanced → Custom JS·CSS 에 한글팩 붙여넣기(2절, 기존 코드가 있으면 맨 위에)". 붙인 뒤 새 탭 + 5분, 포털 `/login` 이 한국어인지 확인.
- 기존 고객 서브계정: 같은 절차를 계정별로(수동). 고객 계정 쓰기는 고객 동의·요청이 있을 때만.
- 기존 고객 일괄 적용: **GHL 공개 API 에 포털 레벨 Custom JS/CSS 필드는 없다**(2026-10-31, LeadConnector API 작업 검색 — client portal branding custom code 관련 작업 0건). 참고로 **코스 상품**에는 `customJs`·`customCss`·`customHeader`·`customFooter` 필드가 있다(`PUT /courses/products/{productId}`, 로케이션 토큰 + `courses.write`). 코스 페이지 한정 대안 경로지만 고객 계정 쓰기라 **이번 범위에서 하지 않는다**(보고만).

### C4. 고객이 이미 넣은 코드 보호
- **덮어쓰지 않는다. 기존 코드의 맨 위에 덧붙인다.** 한글팩 6줄은 독립 IIFE 라 앞뒤 코드와 섞이지 않는다.
- 덧붙이기 전 고객의 기존 코드에 `<` 문자가 있는지 본다 — 있으면 이미 주입이 깨져 있는 상태이므로 고객에게 알리고, 한글팩 줄만이라도 동작하게 할지 고객과 정한다.
- CSS 도 맨 위에 덧붙인다. 베일 규칙은 `#__nuxt` 의 visibility 만 다룬다.
- 고객이 한국어를 원하지 않으면 포털 포인터 `excludeHosts` 에 그 포털 호스트를 넣는다(슬롯은 그대로 두어도 영어 + 베일 즉시 해제).

## 5. 범위 밖 / 보류
- GoKollab 모바일·데스크톱 앱 — Custom JS 가 닿지 않는다.
- community.hyperclass.ai 엣지 주입(Worker 라우트 + DNS Proxied) — r6JD 한 곳에만 효과. B 의 플래시 체감을 보고 판단(결정 ④ 보류).
- 포털 텔레메트리 — 로더는 준비됨(ns `portal:` 접두사, app `portal`). 켜기 전 선행 조건(2026-10-31 리뷰): ① Worker 가 `app` 을 버리고(이벤트 슬림화) KV 일일 put 예산 800 을 메인과 공유 ② `ko-translate-round.yml` 이 ns 를 ':' 로 쪼개 `portal:auth` 를 ns `portal` 로 오병합 ③ `routePattern` 이 짧은 슬러그·퍼센트 인코딩(한글) 슬러그를 가리지 않음 ④ 160자 넘는 키 경로가 이벤트 전체를 400 으로 거부. 이것들을 고치기 전에는 포털 포인터 `telemetry` 를 null 로 둔다.
- 회원의 언어 선택 — v3 와 같이 덮어쓴다(포털의 en 외 12개 로케일은 비어 있고 목적이 한국어). 고객이 다국어 회원을 받게 되면 다시 본다.
