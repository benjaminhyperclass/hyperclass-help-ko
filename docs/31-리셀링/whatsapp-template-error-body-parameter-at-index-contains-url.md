---
원문: /support/solutions/articles/155000006052-whatsapp-template-error-body-parameter-at-index-contains-url-
번역일: 2026-11-07
카테고리: 31-리셀링
---

# WhatsApp 템플릿 오류 해결 — "body: Parameter at index contains URL"

WhatsApp 템플릿을 보낼 때 "body: Parameter at index contains URL" 오류가 나는 이유와, 이를 해결하는 두 가지 방법을 안내해요.

## 오류가 의미하는 것

템플릿은 본문 변수에 URL이 들어가지 않는 상태로 승인받았어요. 그런데 메시지를 보낼 때 본문 변수(예: `{{1}}`)에 URL을 넣어서 오류가 나는 거예요. Meta는 피싱 방지와 품질 관리를 위해 본문 변수 자리에 전체 URL을 넣는 것을 허용하지 않아요. 링크는 템플릿 본문에 직접 써 두거나, 버튼에 넣어야 해요. 버튼에는 필요하면 뒤에 붙는 가변 주소(suffix)를 쓸 수 있어요.

![본문 변수에 URL이 들어가 발생한 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051772003/original/KEPgYVPEZhXjVxYEcMTTet1OnBTAXJDUHg.png?1755499219)

## 오류가 나는 이유
`https://example.com/deal/123` 같은 텍스트를 변수 `{{1}}`에 넣었어요.
- 템플릿 본문이 일반 텍스트로 승인되었어요. 이런 본문의 변수에는 이름, 코드, 날짜 같은 값을 넣어야 하고, 링크는 넣을 수 없어요.
- 변수에 URL 단축 서비스 링크를 넣었어요. 단축 링크는 변수 안에서 막히는 경우가 많아요.
- 본문 변수 대신 URL 버튼을 써야 하는 경우예요.

## 해결 방법 (둘 중 하나를 선택하세요)

### 방법 A — 본문에 링크를 고정해서 쓰기

승인받을 본문에 전체 URL을 변수 없이 직접 써 넣은 템플릿을 사용하세요.

본문 예시

"{{1}}님, 제안 내용을 확인해 주세요: https://example.com/offers"

이럴 때 쓰세요: 모든 수신자에게 같은 링크를 보낼 때

### 방법 B — CTA 웹사이트 버튼 사용하기

템플릿을 새로 만들거나 수정해서 CTA(콜투액션) 웹사이트 버튼을 넣으세요.

- **Button URL**(버튼 URL, 기본 주소): `https://example.com/order/`
- **버튼 텍스트**: "주문 보기"

이럴 때 쓰세요: 주문 번호나 연락처 ID처럼 수신자마다 다른 값이 URL 끝에 붙어야 할 때. 기본 주소는 한 번만 승인받고, 가변 부분만 메시지를 보낼 때 채워요.
