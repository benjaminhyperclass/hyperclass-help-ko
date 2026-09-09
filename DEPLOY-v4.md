# 메인 앱 한글팩 v4 — 브라우저 확인 절차

> ## 🟢 v4.10 부터 — 슬롯은 로더 한 번만 고정, 사전은 포인터로 갱신됩니다
>
> 로더(v4.10.0 이상)는 사전 REV 를 자기 안의 상수가 아니라 **`data/hc-ko-app-rev.json`(raw@main)** 에서
> 읽습니다. 사전을 갱신하면 CI(`ko-app-pointer.yml`)가 jsDelivr 가 새 커밋 파일을 실제로 서빙하는지
> 대조한 뒤 포인터를 그 SHA 로 전진시킵니다(봇 커밋). **Custom JS 칸을 다시 만질 일이 없습니다.**
>
> 부팅은 지난 로드에서 저장한 포인터(Cache Storage) 또는 로더 내장 `REV_BUILTIN` 으로 즉시 시작하고,
> 새 포인터는 백그라운드로 받아 **다음 로드**에 반영합니다(stale-while-revalidate). 그래서 갱신 직후
> 첫 한 번은 옛 사전이 보일 수 있습니다 — 새로고침 한 번이면 됩니다.
>
> 그래도 **라이브 확인은 배포의 일부**입니다. 허용 로케이션 콘솔에서:
>
> ```js
> __hcKoApp.version                       // 슬롯의 로더 버전 (4.10.0 이상)
> __hcKoApp.status().rev                  // data/hc-ko-app-rev.json 의 rev 와 같아야 함 (다음 로드부터)
> __hcKoApp.status().revSource            // 'pointer-cache' 가 정상. 'builtin' 은 첫 방문, 'builtin-fallback' 은 포인터 REV 로드 실패
> __hcKoApp.status().revNext              // null 이 정상. 값이 있으면 새 포인터를 받았고 다음 로드에 반영됨
> __hcKoApp.status().textEntries          // 이번 사전의 _text 건수
> ```
>
> `scripts/verify-deploy.js` 를 콘솔에 붙여넣으면 위 항목을 한 번에 판정합니다(`EXPECT` 3개는 사전 갱신마다 갱신).
> 화면이 다 뜬 뒤에 돌리세요 — 로드 직후면 사전 수신 중이라 오탐 FAIL 이 납니다.
>
> **로더 자체를 바꿀 때만**(v4.10 → v4.11 처럼) 슬롯의 SHA 를 교체합니다. 그때는 40자 SHA 전체를 쓰세요 —
> 40자는 `immutable`, 7자는 엣지 12시간 재검증입니다(2026-08-23 헤더 실측).
>
> <details><summary>v4.9 까지의 "REV 갱신 + 슬롯 교체 한 세트" 규칙 (역사)</summary>
>
> 로더에 REV 가 박혀 있어 사전을 바꿀 때마다 로더 커밋 → 슬롯 SHA 교체가 필요했고, 2026-08-22~23 에
> v4.6.0·v4.7.0 두 라운드가 슬롯 미교체로 조용히 잠긴 적이 있습니다(앱은 v4.5.0 사용 중이었음).
> CDN 대조는 이때도 전부 통과했습니다 — 산출물은 정상이고 진입점만 안 바뀐 것이기 때문입니다.
> 포인터 방식은 이 단계를 없애기 위해 도입됐습니다(2026-09-09, Benjamin 승인).
> </details>


여기부터는 벤자민님이 직접 하셔야 합니다. Claude Code 가 할 수 있는 부분은 끝났습니다.

준비된 것
- 사전: `data/hc-ko-app-rev.json` 이 가리키는 커밋 (현재 `81a235c` = v4.2.5). 이후 갱신은 CI 봇이 포인터를 전진시킴
- 로더: `js/hc-ko-app-loader.js` (**v4.10.0** / `76c557f…`) — `ALLOW = ['r6JD1nsqtk6Oln28fgrj']` 로 **한 곳에만** 적용되게 잠겨 있음

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
<script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@76c557fda02cd49d27e35b1db48358c033e1f558/js/hc-ko-app-loader.js"></script>
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
| `rev` | `data/hc-ko-app-rev.json` 의 `rev` | 다르면 포인터를 아직 못 받은 것(첫 방문·`revNext` 확인) 또는 포인터 REV 로드 실패(`revSource`) |
| `revSource` | `pointer-cache` | `builtin` 은 첫 방문(다음 로드에 해결). `builtin-fallback` 이면 포인터가 가리키는 커밋의 사전을 CDN·raw 모두 못 받은 것 — 포인터 파일과 ko-app-pointer 실행 기록 확인 |
| `revNext` | `null` | 값이 있으면 새 포인터 수신됨 — 새로고침하면 반영 |
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
| 사전을 못 받음 | 콘솔 네트워크 탭에서 `cdn.jsdelivr.net/...@<rev>/data/` 404 여부. `status().revFallback` 이 1 이면 포인터 REV 가 깨져 내장 REV 로 돌아간 것 |
| 갱신했는데 옛 사전 | `status().revNext` 에 새 SHA 가 있으면 정상(다음 로드 반영). 없으면 `status().pointerFail` 확인 — raw 접근이 막힌 것. 포인터 파일 raw URL 을 직접 열어 200 인지 확인 |
| 일부 화면만 영어 | `status().unmatched` 와 `no dict for app` 로그 |
| 화면이 뒤집히듯 깜빡임 | 2중 구조 때문 — 기존 사전 축소가 필요 (별도 작업) |
| 급하게 꺼야 함 | Custom JS 칸의 `ALLOW` 를 존재하지 않는 ID 로 바꾸거나 칸을 비움 |

## 사전을 고칠 때

1. `_source/hc-ko-app.pretty.json` 만 고칩니다 (core/apps 직접 수정 금지)
2. `python3 scripts/split-ko-app.py`
3. `python3 scripts/validate-ko-app.py` → exit 0 확인
4. 커밋 → push. **끝입니다.** `ko-app-pointer.yml` 이 jsDelivr 가 그 커밋의 core/apps 를 실제로
   서빙하는지(SHA-256 대조, 최대 10분 재시도) 확인한 뒤 `data/hc-ko-app-rev.json` 을 그 SHA 로
   전진시키는 봇 커밋을 올립니다. 로더는 다음 로드부터 새 사전을 씁니다.
5. `scripts/verify-deploy.js` 의 `EXPECT`(revPrefix·textEntries)를 갱신해 두면 라이브 판정이 맞습니다.

로더의 `REV_BUILTIN` 은 안전망(첫 방문·포인터 실패)이라 사전마다 올릴 필요는 없습니다. 오래 방치하면
첫 방문자가 옛 사전을 한 번 보고 시작하니, 큰 갱신 때 한 번씩 올리고 그때만 슬롯 SHA 를 교체합니다.
`ko-app-validate.yml` 은 포인터·내장 REV 가 실존 커밋의 사전 파일을 가리키는지를 하드 게이트로 걸고,
HEAD 와 다른지는 ⏳(전진 대기)/⚠️(롤백 또는 누락) 로 요약에만 남깁니다.

## 롤백

**사전 롤백(포인터):** `data/hc-ko-app-rev.json` 의 `rev` 를 직전 SHA 로 되돌린 커밋을 올립니다.

```bash
git log --oneline -5 -- data/hc-ko-app-rev.json     # 직전 rev 확인
# rev 값만 바꿔 커밋 → push. core/apps 를 건드리지 않으므로 ko-app-pointer 는 돌지 않고,
# 자동 전진으로 되돌려지지 않습니다.
```

- 반영은 **다음 로드**부터입니다(stale-while-revalidate). 급하면 사용자에게 새로고침 한 번을 안내합니다.
- jsDelivr 는 `@SHA` 를 영구 보존(`immutable`)하므로 옛 사전은 언제든 다시 가리킬 수 있습니다.
- ⚠️ 롤백 상태에서 `ko-app-pointer` 를 **workflow_dispatch 로 수동 실행하면 최신 사전으로 전진**합니다. 롤백 중엔 누르지 마세요.
- 롤백을 끝내려면 사전을 고쳐 새 커밋을 올리면 됩니다 — 그러면 정상 경로로 다시 전진합니다.

**로더 롤백:** 로더 자체 결함이면 Custom JS 칸의 로더 SHA 를 직전 로더 커밋으로 교체합니다(종전 방식).
v4.9.2(`0fcf2569f1e0bc26b410f4c4ea8ca35fed6979cb`)는 REV 가 박혀 있어 포인터 없이 v4.2.5 를 씁니다.

**전면 중단:** Custom JS 칸의 로더 줄을 지우거나 `?hcko=off` / `__hcKoApp.off()`(v4 만 꺼짐, 레거시 레이어는 계속).

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
