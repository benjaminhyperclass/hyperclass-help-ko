---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007562-how-to-integrate-with-mercado-pago-for-accepting-payments-
번역일: 2026-11-06
카테고리: 08-결제
---

# Mercado Pago를 연동해 결제 받기

Mercado Pago 계정을 하이퍼클래스에 연결해서 결제를 받는 방법을 안내해요. 설정하려면 Mercado Pago의 프로덕션 자격 증명이 필요하고, Mercado Pago 개발자 설정에서 웹훅 알림도 직접 구성해야 할 수 있어요.

## Mercado Pago란?

Mercado Pago는 고객에게 결제를 받을 때 쓰는 결제 제공업체예요. 특히 중남미(LATAM) 시장에서 많이 쓰여요. 하이퍼클래스는 Mercado Pago와 연동되어 있어서, 별도의 우회 방법이나 수동 결제 설정 없이 계정 안에서 바로 연결할 수 있어요.

연결한 뒤에는 **결제 > 연동**에서 Mercado Pago를 관리하고, 하이퍼클래스에서 지원하는 결제 채널 중 어디에 쓸지 정할 수 있어요.

---

## Mercado Pago의 장점

- 현지에 맞춘 경험: 고객이 이미 신뢰하는 결제 수단을 제공할 수 있어요.
- 전환율 개선: 익숙한 결제 제공업체를 쓰면 결제 단계의 불편이 줄어들어요.
- 시장 확장: 빠르게 성장하는 중남미 결제 시장에 진입할 수 있어요.
- 더 큰 통제권: Mercado Pago를 결제 구성의 어디에, 어떻게 쓸지 직접 정할 수 있어요.

---

## 준비 사항

Mercado Pago 설정을 문제없이 마치려면 시작하기 전에 자격 증명, 계정 설정, 웹훅 정보를 미리 준비해 두세요.

시작하기 전에 다음을 준비하세요.

- CVV/CVC 없는 결제(CVV/CVC-less)를 지원하도록 설정된 Mercado Pago 계정
- Mercado Pago 개발자 대시보드 접근 권한
- **비즈니스 웹사이트 URL**: 프로덕션 자격 증명을 켤 때 Mercado Pago가 요청할 수 있어요.

{% hint style="info" %}
라이브 결제에는 테스트 자격 증명이 아니라 프로덕션 자격 증명이 필요해요. 프로덕션 자격 증명은 Mercado Pago의 Your integrations에서 만든 앱에 연결되어 있어요.
{% endhint %}

Mercado Pago에서 다음 값을 가져와야 해요.

- 공개 키
- 액세스 토큰
- 계정 국가
- 웹훅 시크릿

![연동에 필요한 Mercado Pago 값](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069831895/original/1Aat3aYQRlWyDQHDQ59Rag_wxd1cmCPErw.png?1776970626)

---

## 알아 둘 점

- 실제 결제를 받으려면 프로덕션 자격 증명을 쓰세요. 테스트 자격 증명은 테스트용이라 실제 거래가 처리되지 않아요.
- **액세스 토큰**은 다른 사람에게 보이지 않게 하고 안전하게 보관하세요.
- Mercado Pago 계정의 국가 설정에 따라 쓸 수 있는 옵션이 달라질 수 있어요. 국가마다 최소 금액이 다르니 자세한 내용은 아래 자주 묻는 질문을 참고하세요.
- 이 연동이 제대로 동작하려면 Mercado Pago 계정에 CVV 없는 결제(CVV less) 지원이 켜져 있어야 해요.
- Mercado Pago는 한 페이지에서 결제 요소 2개를 띄우는 것을 허용하지 않아요. 예를 들어 퍼널에 1단계 주문 폼을 2개 둘 수 없어요.

---

## Mercado Pago 설정하기

설정을 올바르게 마쳐야 하이퍼클래스가 Mercado Pago와 연결되고, 결제가 알맞은 곳으로 전달되고, 웹훅으로 결제 이벤트도 받을 수 있어요. 각 단계를 꼼꼼히 따라 하면 연결 실패나 동기화 문제를 줄일 수 있어요.

#### 1단계: **결제 연동**에서 Mercado Pago 열기

1. 하이퍼클래스 왼쪽 메뉴에서 **결제**로 이동하세요.
2. **연동** 탭을 여세요.
3. 제공업체 목록에서 Mercado Pago를 찾아 **연결**을 클릭하세요.

![결제 연동에서 Mercado Pago 연결 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069832129/original/taj8X46fLefiAXolSkiz3AUvnmFM44oF8g.png?1776971042)

#### 2단계: Mercado Pago 프로덕션 자격 증명 가져오기

1. Mercado Pago 계정에 로그인하세요.

   ![Mercado Pago 로그인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069832147/original/M9VaZu3rSe2OoADTckeiwvOQSBewXynEFg.png?1776971109)
2. Mercado Pago 개발자 영역을 여세요.

   ![Mercado Pago 개발자 영역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069832148/original/hOVjVHRRDI3koe73BWH9zPgpqkflpXeD6A.png?1776971109)
3. **Your integrations**(내 연동)로 이동하세요.

   ![Mercado Pago의 Your integrations 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069832177/original/WTOYFXq1KerSVJUWpInZfzQUsofZOW2AvQ.png?1776971141)
4. 기존 애플리케이션을 열거나 새로 만드세요.

   ![애플리케이션 선택 또는 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069832194/original/HA4gyUuUiVM9TfdrPTdkrLXjmJOgZvjdCQ.png?1776971153)
5. **Production credentials**(프로덕션 자격 증명)로 이동해서 **공개 키**와 **액세스 토큰**을 복사하세요. 프로덕션 자격 증명이 아직 활성화되지 않았다면, 업종과 웹사이트 같은 필수 비즈니스 정보를 먼저 입력하세요.

   ![프로덕션 자격 증명 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069832209/original/1mngD4zHZ-pF2z4a9JQt_3mR7SB1PfbI9w.png?1776971168)

새 애플리케이션을 만들어야 하는 경우:

Mercado Pago에 애플리케이션이 아직 없다면 먼저 만드세요. 대부분 Mercado Pago가 다음을 요청해요.

1. 애플리케이션 이름을 입력하세요.
2. 온라인 결제에 맞는 결제 유형이나 비즈니스 용도를 선택하세요.
3. 설정 내용을 확인하세요.
4. 프로덕션 자격 증명을 켜고, 2단계에서 그 값을 사용하세요.

#### 3단계: 하이퍼클래스에 Mercado Pago 자격 증명 입력하기

1. **공개 키**를 같은 이름의 필드에 붙여 넣으세요.
2. **액세스 토큰**을 같은 이름의 필드에 붙여 넣으세요.
3. 올바른 국가(계정 지역)를 **Country of account**(계정 국가)에서 선택하세요.
4. **웹훅 시크릿** 필드에 웹훅 시크릿을 생성하거나 직접 입력하세요.
5. **저장** 또는 **연결**을 클릭하세요.

저장하면 Mercado Pago 계정이 연결돼요. 이제 Mercado Pago 앱에서 웹훅을 켜 볼게요.

![하이퍼클래스에 자격 증명 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069007852/original/wW-R8AsJkUZUKngMhHUTCRTcAIzhYuNpVQ.png?1776076918)

#### 4단계: Mercado Pago에서 웹훅 구성하기

Mercado Pago 연동 중에는 결제 이벤트가 플랫폼에 제대로 동기화되도록 웹훅 알림이 필요한 경우가 있어요. Mercado Pago 계정에 로그인한 뒤 개발자 패널로 이동하세요. (<https://www.mercadopago.com.br/developers/en>)

1. Mercado Pago에서 연동에 사용하는 애플리케이션을 열고 **웹훅**으로 이동하세요.

   ![애플리케이션의 웹훅 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069832596/original/MTOhOFM4qPTN0zzxB0QdxF1gpihv6Nssiw.png?1776971609)
2. **알림 구성**을 클릭하세요.

   ![알림 구성 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069832599/original/iETOoBf_gCEfuEmi0YcvMAtMuea7eZ7Lnw.png?1776971622)
3. 결제 이벤트가 하이퍼클래스로 제대로 동기화되도록 필수 웹훅 설정을 마치세요.

   - **Production mode URL**(프로덕션 모드 URL) 필드에 웹훅 URL을 붙여 넣으세요: `https://backend.LeadConnectorhq.com/payments/mercado-pago/webhook`
   - 하이퍼클래스에 입력한 것과 같은 **웹훅 시크릿**을 추가하세요.
   - 연동에 필요한 **Payment**(결제) 이벤트를 선택하세요.
   - **변경사항 저장**을 클릭하세요.

#### 5단계: 채널별로 Mercado Pago 지정하기

연동이 끝나면 하이퍼클래스에서 Mercado Pago의 **Manage Provider Configurations**(제공업체 설정 관리)를 여세요.

- 필요에 따라 **라이브**와 **테스트** 모드를 전환하세요.
- Mercado Pago를 쓰고 싶은 채널에 지정하세요.

채널별 결제 제공업체 지정에 대한 자세한 내용은 「채널별 결제 제공업체 설정」 문서를 참고하세요.

![채널별 Mercado Pago 지정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069832740/original/bgsGZOK0Gv25D1Ug2iwFj8do7IHdChpReA.png?1776971875)

---

## 자주 묻는 질문

### 우리나라(계정 국가)에 최소 금액 조건이 있나요?

네. Mercado Pago는 결제 수단에 따라 최소·최대 결제 금액 규정이 따로 있어요. 이 조건에 맞지 않는 상품을 만들면 결제가 실패할 수 있어요. 아래는 Mercado Pago가 지원하는 결제 한도를 기준으로 한 현재 참고 내용이에요.

신용카드·체크카드

- 대상: Visa, Mastercard, American Express, Naranja, Cabal, Sucrédito
- 일시불 최소 금액: $100.00
- 할부 구매 최소 금액: 할부 1회당 $100.00
- 최대 금액: $15,000,000.00

Easy Payment, Rapipago

- 최소 금액: $100.00
- 최대 금액: $1,000,000.00

참고: <https://www.mercadopago.com.ar/ayuda/monto-minimo-maximo-medios-de-pago_620>

### USD 통화로 상품을 만들면 어떻게 되나요?

현재 이 설정에서는 Mercado Pago가 통화를 자동으로 환산하지 않아요. 상품이나 서비스의 통화를 Mercado Pago 계정이 속한 국가의 통화와 같게 맞추기를 권장해요.

예를 들어 Mercado Pago 계정이 아르헨티나 기준이라면 상품 가격을 아르헨티나 페소로 설정하세요.

### 퍼널에 결제 요소를 2개 넣었는데 동작하지 않아요

Mercado Pago는 보안 조건 때문에 이를 허용하지 않아요. 활성 세션 하나에서는 결제 화면을 하나만 열 수 있어요. 결제 문제를 피하려면 퍼널에 Mercado Pago 결제 요소를 한 번에 하나만 쓰세요.

예를 들어 카드 입력 요소가 있는 주문 폼을 퍼널이나 웹페이지 하나에 2개 이상 넣으면 로드되지 않아요.

### 계정에 CVV less 지원이 켜져 있지 않으면 어떻게 되나요?

Mercado Pago 계정에서 CVV less 지원을 켜기를 강력히 권장해요. 켜 두지 않으면 구독, 오프 세션 결제, SaaS 모드 같은 기능이 제대로 동작하지 않을 수 있어요.

### 이 연동은 어느 나라에서 쓸 수 있나요?

콜롬비아, 아르헨티나, 칠레, 멕시코, 우루과이, 페루, 브라질을 지원해요.

에콰도르와 엘살바도르 등 더 많은 국가도 곧 지원할 예정이에요.

### 웹훅 시크릿은 어떻게 만드나요?

웹훅 시크릿은 요청 데이터에 서명할 때 쓰는, 무작위로 만든 복잡한 문자열이에요. 기억하기 쉬운 비밀번호로 정해도 되지만, 하이퍼클래스와 Mercado Pago 양쪽에 같은 값이 입력되어 있어야 해요. 웹 기반 웹훅 시크릿 생성기를 써도 돼요. hmac-sha256 알고리즘 기반의 시크릿이 만들어지는데, 아래 값처럼 생겼고 더 안전해요. (예시일 뿐이에요.)

`e70fd2ccfed7cf82596fe0494925a0ada87e3b03873a83150bd5458754650211`

### CVV/CVC less 계정 활성화가 무엇인가요?

CVV 또는 CVC는 신용카드·체크카드에 인쇄된 3~4자리 보안 코드예요. 온라인이나 전화 결제를 확인할 때 주로 쓰이고, 사기를 줄이는 데 도움이 돼요.

저장된 카드로 결제하는 흐름에서는 불편이 생길 수 있어요. 특히 오프 세션으로 고객에게 결제를 청구하거나, 이미 저장된 카드로 구독을 시작할 때 매번 CVV를 입력하게 하면 중간에 이탈하는 고객이 늘 수 있어요.

이를 피하려고 일부 결제 제공업체는 CVV less 방식을 지원해요. 이 방식에서는 카드가 안전하게 보관되어 반복 결제가 더 원활하고, 구독·오프 세션 결제·SaaS 관련 청구 같은 하이퍼클래스 기능과도 더 잘 호환돼요.

Mercado Pago 계정에 이미 켜져 있을 수도 있지만, Mercado Pago 지원팀에 확인해야 해요. 켜져 있지 않다면 지원팀에 활성화를 요청해야 해요.
