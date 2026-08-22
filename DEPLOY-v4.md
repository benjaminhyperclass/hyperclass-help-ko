# 메인 앱 한글팩 v4 — 브라우저 확인 절차

여기부터는 벤자민님이 직접 하셔야 합니다. Claude Code 가 할 수 있는 부분은 끝났습니다.

준비된 것
- 사전: jsDelivr 에 커밋 `805efe2` 로 고정 배포됨 (200 / CORS `*` / immutable 확인)
- 로더: `js/hc-ko-app-loader.js` (v4.2.0) — `ALLOW = ['r6JD1nsqtk6Oln28fgrj']` 로 **한 곳에만** 적용되게 잠겨 있음

---

## 1. 로더 설치

Agency Settings → Company → **Whitelabel → Custom Code → Custom JavaScript**

⚠️ **정정 (2026-08-22).** 이전 판에서 "`<script>` 태그를 붙이지 마세요, 순수 JS 입니다"라고
안내했는데 **틀렸습니다.** 그건 커뮤니티(ClientClub) `customJs` 필드 규칙입니다.
에이전시 화이트라벨 칸은 **HTML 주입 필드**라 태그로 감싸지 않으면 그냥 텍스트로 흘러가
아무 일도 일어나지 않습니다(에러도 안 납니다). 지금 동작 중인 4줄이 `<script src=…>`
형태인 것이 반증입니다. v4 패키지 README 의 서술을 그대로 옮긴 제 실수입니다.

**칸 전체를 아래로 교체합니다.** 로더 본문을 붙여 넣지 말고 CDN 에서 받게 합니다 —
20KB 를 설정 textarea 에 두면 유지보수가 안 되고, `<script src>` 는 기존에 이미
검증된 경로라 CSP 위험도 없습니다.

```html
<script>window.HC_I18N_EXCLUDE = ["1r0pJRd1cQQ5DZsjSbc9"];</script>
<script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@952a3b253f1cd62ef9457b4a1083d51fc6dc07ad/js/hc-ko-app-loader.js"></script>
<script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@8fabb6a/js/dashboard-ko.min.js"></script>
```

- **첫 줄의 `HC_I18N_EXCLUDE` 를 빠뜨리지 마세요.** 이게 없으면 두 레이어 모두
  하드코딩 폴백으로만 동작합니다.
- **세 번째 줄(기존 레이어)을 지우지 마세요.** v4 는 `ALLOW` 로 한 곳에만 걸려 있어,
  지우면 나머지 계정이 전부 영어가 됩니다.
- 순서가 중요합니다 — 로더가 기존 레이어보다 **앞**이어야 합니다.
- 저장하면 전 서브계정에 즉시 반영되지만, `ALLOW` 때문에 실제로 동작하는 곳은
  `r6JD1nsqtk6Oln28fgrj` 하나뿐입니다. 나머지 계정은 지금까지와 똑같이 보입니다.

## 2. 접속

```
app.hyperclass.ai/v2/location/r6JD1nsqtk6Oln28fgrj/dashboard?hcko=debug
```

## 3. 콘솔에서 상태 확인

```js
__hcKoApp.status()
```

| 항목 | 기대값 | 아니라면 |
|---|---|---|
| `host` | `1` | `0` 이면 호스트 카탈로그 미적용 — 콘솔에 `host composer not found` 가 찍혔는지 확인 |
| `gate` | `true` | `false` 면 ALLOW 가 비어 전체 적용 상태 |
| `rev` | `805efe2341b282d74ab94addd3072dea5ca7d5a3` | 다르면 예전 로더가 붙어 있음 |
| `apps` | 화면 이동할수록 증가 | 0 에서 안 늘면 앱 스캔 실패 |
| `unmatched` | 되도록 `0` | 0 이 아니면 콘솔의 `no dict for app` 로그에서 어떤 앱인지 확인 |
| `fuzzy` | 0 이어도 정상 | 값이 있으면 GHL 이 네임스페이스를 바꿨다는 신호 — 다음 크롤 때 반영 |
| `textHits` | 계속 증가 | 0 이면 `_text` 레이어가 안 도는 것 |
| `allowedHere` | `true` | `false` 면 지금 화면이 허용 로케이션이 아님 |
| `booted` | `true` | `false` 면 게이트에 막혀 아직 시작 안 함 |
| `suspended` | `false` | `true` 면 비허용 로케이션으로 이동해 멈춘 상태 |
| `coreLoaded` / `appsLoaded` | 둘 다 `true` | `false` 면 CDN 에서 사전을 못 받음 |

## 3-2. 삭제 확인 모달 — **꼭 한 번 눌러 보세요**

`product.deleteModal` 계열은 안내문이 `'DELETE'를 입력하여…` 인데 입력칸 토큰만
`삭제` 로 번역돼 있어 안내대로 입력해도 통과하지 못하던 건이 있었습니다. 지금은
입력칸도 `DELETE` 로 되돌려 두었습니다.

다만 **앱이 입력값을 `t(key)` 와 비교하는지, 코드에 박힌 `'DELETE'` 와 비교하는지는
번들 소스를 못 봐서 확인하지 못했습니다**(로그인 뒤에만 로드됨). 둘 중 어느 쪽이어도
영문 토큰이면 통과하지만, 30초면 확실해집니다.

1. 상품(Products) 하나를 삭제 시도
2. 안내문대로 `DELETE` 를 입력
3. 삭제 버튼이 활성화되면 정상. 안 되면 `삭제` 도 넣어 보고 결과를 알려 주세요.

같은 확인이 필요한 곳: 커스텀 오브젝트 삭제(`schemaList`), 마켓플레이스 확인(`marketplace`).

## 4. 화면 이동하며 확인

대시보드 → 대화 → CRM 설정 → 캘린더 순으로 이동하며 `apps` / `tref` 가 늘어나는지 봅니다.

## 5. 되돌아오기 확인

다른 화면에 갔다가 **클라이언트 포털로 되돌아온 뒤** `tref` 가 유지되는지 봅니다.
컴포넌트가 다시 만들어질 때 ref 교체가 유실될 수 있는 지점입니다.

## 6. 깜빡임 확인

입력창에 한글·영문을 빠르게 타이핑해 봅니다.
지금은 v4 와 기존 `dashboard-ko` 가 2중으로 돌기 때문에 겹치는 문구에서
깜빡임이 있을 수 있습니다 (겹침 98%, 실제 표현이 다른 것 556건).

## 7. 킬 스위치 확인 — **반드시 여기까지 하세요**

```
주소 뒤에 ?hcko=off 붙이고 새로고침 → 영어로 돌아와야 함
```

콘솔에서도 됩니다.

```js
__hcKoApp.off()   // 이후 새로고침하면 영어
__hcKoApp.on()    // 되돌리기
```

이게 동작하지 않으면 **전체 확대하지 마세요.** 문제가 생겼을 때 되돌릴 방법이
Custom JS 칸을 비우는 것밖에 없어집니다.

## 8. 전체 확대

1~7 이 문제없으면 `js/hc-ko-app-loader.js` 의

```js
var ALLOW = ['r6JD1nsqtk6Oln28fgrj'];
```

를

```js
var ALLOW = [];
```

로 바꿔 커밋하고, 그 내용을 Custom JavaScript 칸에 다시 붙여 넣습니다.

---

## 문제가 생기면

| 증상 | 확인 |
|---|---|
| 아무것도 한국어가 안 됨 | `__hcKoApp` 이 `undefined` → **로더가 실행 안 된 것.** ① `<script>` 로 감쌌는지 ② 저장 후 하드 리프레시했는지 ③ `localStorage.getItem('hcKoOff')` 가 `null` 인지. 게이트에 막힌 경우엔 `__hcKoApp` 이 있고 `status().allowedHere` 가 `false` 다 |
| 에이전시 화면에서 영어 | **정상.** `ALLOW` 검사가 `/v2/location/` 경로만 본다. 반드시 로케이션 URL 로 들어가야 한다 |
| `status().fallback` 이 0 이 아님 | jsDelivr fetch 가 막혀 raw 로 받았다는 뜻. 동작은 하지만 CSP(connect-src) 확인 필요 |
| 사전을 못 받음 | 콘솔 네트워크 탭에서 `cdn.jsdelivr.net/...@805efe2/data/` 404 여부 |
| 일부 화면만 영어 | `status().unmatched` 와 `no dict for app` 로그 |
| 화면이 뒤집히듯 깜빡임 | 2중 구조 때문 — 기존 사전 축소가 필요 (별도 작업) |
| 급하게 꺼야 함 | Custom JS 칸의 `ALLOW` 를 존재하지 않는 ID 로 바꾸거나 칸을 비움 |

## 사전을 고칠 때

1. `_source/hc-ko-app.pretty.json` 만 고칩니다 (core/apps 직접 수정 금지)
2. `python3 scripts/split-ko-app.py`
3. `python3 scripts/validate-ko-app.py` → exit 0 확인
4. 커밋 → **그 커밋 SHA 로 로더의 `REV` 를 갱신** → 로더 재커밋 → Custom JS 칸에 다시 붙여 넣기

REV 를 갱신하지 않으면 로더는 계속 옛 사전을 봅니다. CDN 이 `immutable` 이라 캐시가 안 풀립니다.
`.github/workflows/ko-app-validate.yml` 이 1~3 과 **REV 가 가리키는 사전이 지금 커밋된 것과
같은 내용인지**(blob 해시 비교)를 자동으로 막아 줍니다. 옛 SHA 를 남겨 두면 CI 가 빨간불입니다.

---

## 알고 있어야 할 한계 두 가지

**1. 로케이션 게이트는 새로고침 없는 계정 전환을 완전히 되돌리지 못합니다.**
허용 로케이션에서 한국어가 적용된 뒤 다른 서브계정으로 이동하면, 로더는 즉시 멈춥니다
(텍스트 치환·앱 스캔 중단). 다만 **이미 i18n 카탈로그에 병합된 한국어는 되돌릴 수 없습니다.**
그 상태에서 완전히 영어로 돌리려면 새로고침이 필요합니다.
확인 기간에는 서브계정을 오가지 말고, 허용 로케이션 URL 로 직접 들어가 주세요.

**2. `_text` 레이어는 사용자 데이터와 부딪칠 수 있습니다.**
`_text` 8,044건은 화면에서 수집한 문구라, 한 단어짜리 항목(212건)은 고객 데이터와 겹칠 수
있습니다. 연락처 이름이 `Grant` 면 화면에 `부여` 로 보이는 식입니다.
**이건 v4 가 만든 문제가 아니라 기존 `dashboard-ko` 가 이미 하고 있던 동작입니다**
(212건 전부 기존 사전에도 있음). v4 는 편집기(`textarea`·`contenteditable`) 안에서는
치환하지 않도록 막았습니다. 확인하실 때 연락처·태그·스마트리스트 이름이 엉뚱하게 번역되는지
봐 주시면, 그 목록으로 양쪽 사전을 함께 정리하겠습니다.
