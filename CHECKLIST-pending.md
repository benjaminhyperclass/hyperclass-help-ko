# 대기 중인 결정 3건 — 브라우저에서 확인할 것

`data/ko-app-exclusions.json` 의 `pending` 두 건과, 직전 라운드에서 미완료로 남은 DNT 실동작 확인.

확인 주소는 단계적 배포가 걸린 로케이션입니다.

```
app.hyperclass.ai/v2/location/r6JD1nsqtk6Oln28fgrj/...?hcko=debug
```

---

## 1. `agency.gdpr.` — 노출 범위 (40키)

**무엇을 볼 것**: 서브 계정 사용자 계정으로 로그인해 GDPR 페이지에 접근되는지.

- 에이전시 설정에서만 보인다 → **위험이 크게 낮아짐.** 유지해도 무방.
- 서브 계정 사용자에게도 보인다 → **제외 권장.**

**왜 문제인가**: HighLevel이 자기 고객에게 하는 법적 진술문입니다. 치환된 지금은
`하이퍼클래스는 데이터 처리자입니다`, `하이퍼클래스는 ... 간편한 시스템을 마련해 두었습니다`처럼
**하이퍼클래스가 보안 평가·침해 감지·SCC 기반 DPA를 자기 것으로 주장하는** 문장이 됩니다.

찾아갈 곳: 에이전시 설정 → (GDPR / 개인정보) 항목

---

## 2. `communitiesApp.universityCommunity.` — CTA 목적지 (8키)

**무엇을 볼 것**: 커뮤니티 화면의 해당 버튼을 눌러 **어느 도메인으로 나가는지.**

- HighLevel 외부 사이트로 나간다 → **제외 확정.** 한국어 라벨이 오히려 누출을 키웁니다
  (한국어로 안내해 놓고 GHL 사이트로 보내는 꼴).
- 내부 페이지로 간다 → 유지.

현재 라벨: `하이퍼클래스 아카데미로 이동`, `이전 하이퍼클래스 아카데미를 찾으시나요?`
원문: `Go to HighLevel University`, `Looking for the legacy Highlevel University?`

---

## 3. DNT 실동작 — 삭제 확인 모달 (30초)

직전 라운드 §5-3 미완료분입니다. 번들 소스를 못 봐서 앱이 `t(key)`와 비교하는지
코드에 박힌 `'DELETE'`와 비교하는지 확인하지 못했습니다.

1. 상품(Products) 하나를 삭제 시도
2. 안내문대로 **`DELETE`** 입력
3. 삭제 버튼이 활성화되면 정상

안 되면 `삭제`도 넣어 보고 어느 쪽이 통과하는지 알려 주세요.
같은 확인이 필요한 곳: 커스텀 오브젝트 삭제(`schemaList`), 마켓플레이스 확인(`marketplace`).

검사기 C9가 이 9개 키를 회귀 고정 목록으로 잠가 두었으므로, 앞으로 번역되면 CI가 막습니다.

---

## 답이 나오면 — 반영은 세 줄입니다

`data/ko-app-exclusions.json` 에서 해당 항목을 `pending` → `namespaces` 로 옮기고
`decided` 날짜를 넣습니다. 그 다음:

```bash
python3 scripts/split-ko-app.py          # 배포본에서 제외
python3 scripts/exclusions.py --legacy   # 레거시 사전 3종에서도 제외
python3 scripts/validate-ko-app.py       # C1~C10 = 0 확인
```

커밋 → 그 SHA로 로더의 `REV` 갱신 → 로더 커밋 → push.
편집 정본(`_source/hc-ko-app.pretty.json`)에는 원문이 남아 있으니,
결정이 뒤집히면 등재만 지우고 재분할하면 그대로 돌아옵니다.

예상 영향(현재 실측):

| 네임스페이스 | host | apps | ko.json | manual | dashboard-ko.js |
|---|---|---|---|---|---|
| `agency.gdpr.` | 40 | 40 | 40 | 25 | 확인 필요 |
| `communitiesApp.universityCommunity.` | 8 | 0 | 8 | 5 | 확인 필요 |

⚠️ `js/dashboard-ko.min.js` 는 빌드 산출물이라 손대지 않습니다.
**화면에 실제로 반영되려면 재빌드가 필요**하고, 트리거는 벤자민님이 정하십니다
(`data/ghl-i18n-en.json` 말미 개행 토글). 대기 2건 결정 후 한 번에 하는 것이 낫습니다.
