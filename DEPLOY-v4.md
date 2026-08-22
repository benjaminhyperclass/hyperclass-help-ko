# 메인 앱 한글팩 v4 — 브라우저 확인 절차

여기부터는 벤자민님이 직접 하셔야 합니다. Claude Code 가 할 수 있는 부분은 끝났습니다.

준비된 것
- 사전: jsDelivr 에 커밋 `3e900ad` 로 고정 배포됨 (200 / CORS `*` / immutable 확인)
- 로더: `js/hc-ko-app-loader.js` (v4.2.0) — `ALLOW = ['r6JD1nsqtk6Oln28fgrj']` 로 **한 곳에만** 적용되게 잠겨 있음

---

## 1. 로더 붙여 넣기

Agency Settings → Company → **Whitelabel → Custom Code → Custom JavaScript**

- `js/hc-ko-app-loader.js` **전체 내용**을 기존 `dashboard-ko.min.js` 로드 줄 **앞**에 붙입니다.
- `<script>` 태그를 붙이지 마세요. 순수 JS 입니다.
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
| `rev` | `3e900adc1988923ac86128272aa2f071a247a293` | 다르면 예전 로더가 붙어 있음 |
| `apps` | 화면 이동할수록 증가 | 0 에서 안 늘면 앱 스캔 실패 |
| `unmatched` | 되도록 `0` | 0 이 아니면 콘솔의 `no dict for app` 로그에서 어떤 앱인지 확인 |
| `fuzzy` | 0 이어도 정상 | 값이 있으면 GHL 이 네임스페이스를 바꿨다는 신호 — 다음 크롤 때 반영 |
| `textHits` | 계속 증가 | 0 이면 `_text` 레이어가 안 도는 것 |
| `allowedHere` | `true` | `false` 면 지금 화면이 허용 로케이션이 아님 |
| `booted` | `true` | `false` 면 게이트에 막혀 아직 시작 안 함 |
| `suspended` | `false` | `true` 면 비허용 로케이션으로 이동해 멈춘 상태 |
| `coreLoaded` / `appsLoaded` | 둘 다 `true` | `false` 면 CDN 에서 사전을 못 받음 |

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
| 아무것도 한국어가 안 됨 | `__hcKoApp` 이 `undefined` → **로더가 안 붙은 것.** 게이트에 막힌 경우엔 `__hcKoApp` 이 있고 `status().allowedHere` 가 `false` 다 |
| 사전을 못 받음 | 콘솔 네트워크 탭에서 `cdn.jsdelivr.net/...@3e900ad/data/` 404 여부 |
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
