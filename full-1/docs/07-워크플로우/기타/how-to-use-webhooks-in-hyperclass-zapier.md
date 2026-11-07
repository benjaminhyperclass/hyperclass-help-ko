---
원문: https://help.gohighlevel.com/support/solutions/articles/155000001183-how-to-use-webhooks-in-highlevel-zapier-
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 웹훅 사용하기 — Inbound Webhook(수신 웹훅) 트리거와 Webhook(웹훅 전송) 액션 (Zapier 예시)

하이퍼클래스 워크플로우에서 웹훅으로 다른 앱과 정보를 주고받는 방법을 설명해요. 외부 앱의 정보를 하이퍼클래스로 받을 때는 **Inbound Webhook** 트리거를, 하이퍼클래스의 정보를 외부 앱으로 보낼 때는 **Webhook** 액션을 써요.

[동영상](https://www.youtube.com/embed/TRr4TJQFj20?&wmode=opaque)
<!-- 검토 필요: 영상에 브랜드가 노출되는지 확인 -->

## 웹훅이란?

다른 앱에 있는 정보가 필요할 때 웹훅을 가장 먼저 떠올리는 분이 많아요. 웹훅을 쓰면 한 곳의 정보를 다른 곳으로 쉽게 보낼 수 있기 때문이에요. 하이퍼클래스 워크플로우 자동화만으로 해결되지 않는 작업도 웹훅으로 해결되거나, 적어도 가까워질 수 있어요.

HTTPS 요청(웹훅)은 인터넷에서 우리가 쓰는 거의 모든 서비스의 바탕이에요. 하이퍼클래스가 Stripe, Twilio, Mailgun, Zapier 같은 앱과 대화할 수 있는 것도 웹훅 덕분이에요. 웹훅으로 앱끼리 연결하면 각 앱이 서로 신호를 주고받으며 하나의 작업을 함께 처리할 수 있어요.

### 용어 정리

- HTTPS 요청: 웹훅이 사용하는 요청 방식의 공식 이름이에요. HTTP는 웹사이트와 웹 브라우저 사이에 정보를 보내는 기본 방식이고, HTTPS는 정보를 전송할 때 암호화하는 더 안전한 버전이에요.
- 트리거 이벤트: 어떤 앱이 다른 앱의 웹훅 URL로 정보를 보내도록 신호를 주는 고유한 사건이에요.
- 웹훅 URL: 웹훅 요청을 받는 앱이 만드는 고유한 URL이에요. 주소나 전화번호 같은 역할을 해요.
- 페이로드(Payload): 한 앱에서 다른 앱으로 묶어서 보내는 모든 정보를 말해요.
- 쿼리 파라미터(Query Params): UTM 파라미터처럼 웹훅 URL에 정보를 붙여 보내는 방식이에요. 받는 앱이 페이로드를 매핑할 때 활용하기 좋아요.
- 매핑(Mapping): 받은 페이로드를 받는 앱의 알맞은 필드에 연결하는 작업이에요. 예를 들어 페이로드에 연락처 이름, 이메일, 구매한 서비스 이름이 들어 있다면, 이 정보를 하이퍼클래스 워크플로우에서 해당 연락처의 알맞은 커스텀 필드에 "매핑"(연결)해야 해요.

## 웹훅은 어떻게 동작하나요?

웹훅은 보통 앱끼리 연결할 때 써요. 한 앱이 다른 앱에 요청을 보내도록 하는 트리거 이벤트가 필요해요. 예를 들어 결제 소프트웨어인 Stripe에서 구매가 일어나면, Stripe가 정보를 "페이로드"로 묶어 하이퍼클래스로 보내요. 하이퍼클래스는 받은 정보로 여러 작업을 할 수 있어요.

웹훅을 쓰려면 한쪽 앱이 웹훅 URL을 제공해야 해요. 웹훅 URL은 웹훅 요청을 받는 앱이 만드는 고유한 URL로, 주소나 전화번호와 비슷해요. 회사에 전화할 때 고유한 전화번호와, 경우에 따라 내선번호가 필요한 것과 같아요. 웹훅 URL은 요청을 걸 때 쓰는 고유한 전화번호라고 생각하면 돼요.

### 사용 사례

Shopify 쇼핑몰을 운영하면서 Stripe로 결제를 받고 있다고 해 볼게요. 특정 코스를 구매한 사람들에게만 하이퍼클래스로 이메일을 보내고 싶어요. 그런데 구매 정보가 하이퍼클래스에 없으니 누가 무엇을 샀는지 알 수 없어요.

올바른 연락처에 이메일을 보내려면, Stripe에서 해당 상품이 구매될 때마다 하이퍼클래스로 웹훅 이벤트가 전달되도록 만들어야 해요. 그러면 하이퍼클래스가 받은 정보로 그 상품을 산 연락처에게 이메일을 보내는 등의 작업을 할 수 있어요.

![Stripe 구매 정보가 웹훅으로 하이퍼클래스에 전달되는 사용 사례](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010241068/original/e_ZtUPbrIo3urqJR16g_RzagAV2I0i0UIQ.png?1697473846)

이 경우 하이퍼클래스 워크플로우 트리거 **Inbound Webhook**으로 Stripe의 정보를 받아요. 하이퍼클래스 주문 폼이나 상품을 쓰지 않는다면, Stripe에서 구매가 일어날 때 실행되도록 Zapier 같은 자동화 소프트웨어를 함께 쓰는 것을 추천해요. 구매가 일어나면 하이퍼클래스에 필요한 모든 정보가 페이로드로 묶여 전달되고, 하이퍼클래스는 그 정보로 작업을 실행해요. 이 사례에서는 해당 상품을 산 구매자에게 마케팅을 하는 작업이에요.

여기까지가 웹훅의 개요예요. 배울 내용은 더 많지만, 시작하기에는 충분해요. 아래에서 하이퍼클래스에서 웹훅을 쓰는 두 가지 방법을 살펴볼게요.

---

## 하이퍼클래스에서 웹훅 쓰는 두 가지 방법

하이퍼클래스에서 웹훅은 크게 "받기(Catching)"와 "보내기(Sending)"로 나눌 수 있어요. 아주 단순하게 나눈 표현이에요.

**(A) Inbound Webhook — 받기**

하이퍼클래스 워크플로우 트리거로 수신 웹훅 요청을 "받는(Catching)" 방식이에요. 이름 그대로 하이퍼클래스의 웹훅 URL로 들어오는 웹훅 요청을 받는 거예요. 하이퍼클래스에서는 **Inbound Webhook**(수신 웹훅)이라는 워크플로우 트리거가 이 역할을 해요.

**(B) Outbound Webhook — 보내기**

하이퍼클래스 워크플로우 액션으로 발신 웹훅 요청을 "보내는(Sending)" 방식이에요. 위의 "받기"와 반대로, 외부 웹훅 URL로 요청을 보내는 거예요. 하이퍼클래스에서는 **Webhook**(웹훅 전송)이라는 워크플로우 액션이 이 역할을 해요.

아래에서 각 방식을 하이퍼클래스에서 설정하는 방법을 차례로 안내할게요.

### 순서: 트리거, 액션, 트리거, 액션

웹훅이 일어나는 순서에서 패턴을 찾아보면 이해하기 쉬워요. 수신이든 발신이든, 한 앱에서 트리거와 액션이 실행되어 다른 앱으로 정보를 보내고, 두 번째 앱에서 또 다른 트리거와 마지막 액션이 실행돼요.

그래서 순서가 "트리거, 액션, 트리거, 액션"이에요. 두 앱이 각각 트리거 하나와 액션 하나를 가지고 서로 연결되는 흐름을 뜻해요.

아래 예시에서도 같은 패턴을 볼 수 있어요. 첫 번째 앱에서 트리거와 액션이 실행되고, 페이로드가 다음 앱의 수신 웹훅 트리거로 전달된 뒤 또 다른 액션이 실행돼요.

![트리거, 액션, 트리거, 액션 순서를 보여 주는 웹훅 흐름도](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155012254101/original/YacUVsLrhrnYCOA1oPdfbOmoKMSGRJrKsg.png?1699461803)

---

## (A) Inbound Webhook — 워크플로우 트리거로 웹훅 요청 받기

이 방식은 하이퍼클래스가 외부 앱의 정보를 받는 경우예요. 워크플로우 트리거 **Inbound Webhook**을 만들면 하이퍼클래스 웹훅 URL이 생기고, 외부 앱이 이 URL로 페이로드를 보내요. 위의 사용 사례처럼 외부에서 일어난 구매 정보를 하이퍼클래스로 보내, 해당 상품을 구매한 연락처에 맞는 작업을 하는 경우가 바로 수신 웹훅이에요.

![외부 앱에서 하이퍼클래스로 정보를 받는 수신 웹훅 개념도](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155012254156/original/6YZqHiH1BZQqlkiyYujW_cqCd1Gvz3881Q.jpg?1699461860)

### 1. Inbound Webhook 사용 설정하기

아직 켜지 않았다면 **워크플로우 - 프리미엄 기능**을 먼저 켜야 해요. 수신 요청을 받는 **Inbound Webhook** 트리거는 이 프리미엄 기능을 켠 경우에만 쓸 수 있어요.

{% hint style="info" %}
하이퍼클래스 사용자 중에는 Zapier, Make, Pabbly 같은 연동·자동화 소프트웨어를 함께 쓰는 분이 많아요. 이미 쓰고 있는 여러 앱을 위한 트리거와 액션이 준비되어 있어서 더 쉽게 쓸 수 있어요. 하이퍼클래스 워크플로우와 함께 쓰면 더 간단하고 강력한 경우도 많아요. 자세한 내용은 아래 FAQ의 "Zapier, Make, Pabbly는 무엇인가요?"를 참고하세요.
{% endhint %}

### 2. 워크플로우 트리거에서 웹훅 URL 만들기

하이퍼클래스 워크플로우를 열고 웹훅 URL을 만들어요.

1. 워크플로우를 열거나 새로 만들어요.
2. 워크플로우 트리거로 **Inbound Webhook**을 선택해요. 하이퍼클래스 웹훅 URL이 만들어져요.
3. 이 웹훅 URL을 복사해 두세요. 다음 단계에서 써요.

![Inbound Webhook 트리거에서 생성된 웹훅 URL](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010241062/original/zZZV8sXYGtNPfk_DIGZQc4wmzSezGmKfEA.png?1697473842)

### 3. 외부 앱에서 웹훅 액션 단계 만들기

사용하려는 외부 앱에서 트리거와 웹훅 액션 단계를 만들어요. 예를 들어 Zapier에서는 결제가 일어날 때 실행되는 결제 트리거를 쓸 수 있어요. 그리고 **Webhooks By Zapier**(Zapier 웹훅)로 페이로드를 하이퍼클래스 웹훅 URL에 POST로 보내요. 2단계에서 복사한 하이퍼클래스 웹훅 URL을 Zapier 액션 단계에 붙여 넣으세요.

![Zapier 액션 단계에 하이퍼클래스 웹훅 URL을 붙여 넣는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155011887200/original/IKDL_daUhGv_gqbybrdd9RALZoIuj56fsw.png?1699043799)

### 4. 테스트 보내기

다음 단계로 넘어가려면 하이퍼클래스 웹훅 URL로 샘플 페이로드를 보내야 해요.

1. 외부 앱(여기서는 Zapier)에서 해당 단계 맨 아래로 가서 **Test Step**(단계 테스트)을 눌러요.
2. 하이퍼클래스에서 **Mapping Reference**(매핑 참조) 섹션을 새로고침하면서, 선택할 수 있는 매핑 참조가 나타날 때까지 기다려요.

외부 앱에서 테스트 페이로드를 보내는 방법은 해당 앱의 문서나 고객지원에 문의하세요.

![Zapier에서 Test Step을 실행하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155011887243/original/M5bHGIPHDZ8foG5ik_NZlUF86q6Lk4QbxA.png?1699043936)

![하이퍼클래스에서 Mapping Reference가 나타나기를 기다리는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010241070/original/IOAjncnP7_DzLx_BrkksQdSwP2Hv43Ncdg.png?1697473846)

![하이퍼클래스에서 Mapping Reference를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010241069/original/QoSSEVtaJAx113nCW8stk0LNM4J8Vv4rhQ.png?1697473846)

### 5. 연락처 만들기/업데이트하기

하이퍼클래스에서는 모든 자동화가 실행되려면 연락처가 있어야 해요. 그래서 **Create/Update Contact**(연락처 만들기/업데이트) 액션이 자동으로 열려요. 커스텀 필드나 다른 값으로 연락처를 찾는 **Find Contact**(연락처 찾기) 액션을 써도 돼요.

{% hint style="warning" %}
이 단계는 꼭 채워야 해요. 비워 두면 작동하지 않고 워크플로우가 중단돼요. 최소한 수신 웹훅 페이로드에서 전화번호나 이메일을 가져와 연락처를 만들거나 업데이트하세요. 아니면 커스텀 필드 등을 기준으로 연락처를 찾으세요. 연락처가 찾아지거나 일치해야 정상적으로 작동해요.
{% endhint %}

![Create/Update Contact 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010241065/original/1jIFtXcVBneM-vnEM2w50nn0Zx8VQW_AvQ.png?1697473844)

이제 설정이 끝났어요. 하이퍼클래스에 들어온 정보를 워크플로우에서 원하는 대로 매핑해서 쓸 수 있어요.

### 하이퍼클래스에서 정보 매핑하기

**Custom Values**(커스텀 값) > **Inbound Webhook Trigger**(수신 웹훅 트리거)에서 페이로드의 정보를 하이퍼클래스의 알맞은 필드나 액션에 매핑할 수 있어요. 이렇게 하면 워크플로우가 실행될 때 수신 웹훅으로 들어온 정보가 하이퍼클래스의 알맞은 위치에 채워져요.

![Custom Values의 Inbound Webhook Trigger로 페이로드 정보를 매핑하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010246863/original/vQ-E_DHbKtdc6AQblQyV1MWKzmRaAr-JMQ.png?1697478103)

**Inbound Webhook** 트리거는 하이퍼클래스 도움말에서 더 자세히 볼 수 있어요.

Zapier를 더 알고 싶다면 아래 FAQ의 "Zapier 처음 시작하려면 어떻게 하나요?"를 참고하세요.

---

## (B) Outbound Webhook — 워크플로우 액션으로 웹훅 요청 보내기

이 방식은 하이퍼클래스 워크플로우 액션에서 외부 앱으로 정보를 보내는 경우예요. 예를 들어 하이퍼클래스에서 누군가 폼을 제출하면, 그 연락처 정보를 외부 앱에도 넣어서 그곳에서도 연락처 정보를 확인할 수 있게 해요.

![하이퍼클래스에서 외부 앱으로 정보를 보내는 발신 웹훅 개념도](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155012254224/original/5q0UMpKWjfR7oeR83CDvnC5F3u5DsL-H-w.jpg?1699461932)

### 1. 외부 앱이 웹훅 데이터를 받을 수 있는지 확인하기

외부 앱에 따라 웹훅으로 데이터를 받는 기능이 유료 기능인 경우가 있어요. 트리거만 켜 두면 되는 앱도 있어요. 해당 앱의 문서를 확인하고, 필요하면 요금제를 업그레이드하세요. 이 설명에서 예로 드는 Zapier는 유료 계정이어야 Zapier의 수신 웹훅(Catchhooks)을 쓸 수 있어요.

{% hint style="info" %}
외부 앱에서 웹훅이 보이지 않나요? 많은 외부 앱에서 웹훅을 쓸 수 없는 경우가 있어요. 이럴 때는 Zapier, Pabbly, Make 같은 자동화·연동 소프트웨어로 앱 사이의 정보 간격을 이어 줄 수 있어요. 자세한 내용은 아래 FAQ의 "Zapier, Make, Pabbly는 무엇인가요?"를 참고하세요.
{% endhint %}

### 2. 외부 앱에서 웹훅 URL 만들기

1. 외부 앱에서 수신 웹훅용 트리거를 만들어요. 트리거를 만들면 이후 단계에서 쓸 웹훅 URL이 생성돼요. 예를 들어 Zapier에서는 **Webhooks By Zapier** 트리거에서 **Catch Hook**(훅 받기) 이벤트를 선택하면 돼요.
2. 트리거 단계까지 진행해요.
3. 외부 앱에서 생성된 웹훅 URL을 복사해요.

![Zapier에서 Catch Hook 이벤트로 생성된 웹훅 URL](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155011887769/original/99_GnzVBey8hlc2BEYFqP1rDczbd1xANaA.png?1699044740)

### 3. 하이퍼클래스 워크플로우 액션에 외부 웹훅 URL 추가하기

1. 하이퍼클래스 워크플로우를 만들거나 열어요.
2. 워크플로우 액션 **Webhook**에 외부 웹훅 URL을 입력해요.
3. 워크플로우를 저장하고 게시해요.

![워크플로우 액션에 외부 웹훅 URL을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155011887762/original/fujjPdM8233Nf86d5zUGqqtfw0wMTZVm7Q.png?1699044726)

### 4. 하이퍼클래스에서 외부 앱으로 테스트 보내기

하이퍼클래스의 샘플 정보를 외부 앱으로 보내야 해요. 이를 위해 워크플로우를 실제로 실행해요. 예를 들어 테스트 구매를 하면 워크플로우 트리거가 실행되어 Zapier로 정보를 보내요. 테스트 때는 실제 상황처럼 워크플로우 트리거를 실행하는 것이 좋아요. 그래야 외부 앱에서 쓸 샘플 데이터가 페이로드에 모두 담겨요.

외부 앱이 정보를 성공적으로 받을 때까지 테스트를 계속하세요.

![하이퍼클래스에서 외부 앱으로 테스트 정보를 보내는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010241075/original/UsPpaTNGd2xqxNTsUwcV6GEjTbE53oEzuQ.png?1697473846)

이제 하이퍼클래스 워크플로우가 실행될 때마다 이 정보가 외부 앱으로 전달돼요. Zapier에서는 이 정보로 스프레드시트를 채우는 등 여러 작업을 할 수 있어요.

### Zapier에서 정보 매핑하기

Zapier 액션에서 업데이트할 필드를 선택하면 **Insert Data**(데이터 삽입) 팝업이 나타나요. 여기서 플레이스홀더를 골라 페이로드의 정보를 매핑해요. 하이퍼클래스에서는 이 플레이스홀더를 커스텀 값이라고 불러요. 이렇게 매핑하면 웹훅이 실행될 때마다 원하는 데이터가 입력되어, 하이퍼클래스의 정보가 Zapier나 다른 외부 앱의 알맞은 위치에 업데이트돼요.

![Zapier의 Insert Data 팝업에서 플레이스홀더를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155012266200/original/ap9P2cWxw5xgAWgbxJ8ydYNicpe8ARTbpg.png?1699474788)

Zapier를 더 알고 싶다면 아래 FAQ의 "Zapier 처음 시작하려면 어떻게 하나요?"를 참고하세요.

---

## 자주 묻는 질문

### Zapier, Make, Pabbly는 무엇인가요?

Zapier, Make, Pabbly는 모두 자동화·연동 소프트웨어예요. 앱끼리 연결해 주는 서비스예요. 미리 만들어 둔 앱 연결을 제공하고, 연결한 뒤에는 하이퍼클래스 워크플로우처럼 여러 트리거와 액션을 쓸 수 있어요. 다만 이 트리거와 액션은 다른 앱을 위한 것이에요.

이 세 서비스는 하이퍼클래스와 연동할 수 있어요. 하이퍼클래스 사용자가 가장 많이 쓰는 대표 플랫폼들이에요.
<!-- 검토 필요: 원문의 Zapier·Make·Pabbly 연동 페이지 링크는 브랜드 노출로 제거함 -->

미리 만들어진 트리거와 액션을 웹훅 액션과 함께 쓰면 할 수 있는 일이 훨씬 늘어나요. 물론 모든 걸 할 수는 없어요. 그래도 API로 맞춤 연동을 처음부터 코딩하는 것보다는 낫고, 웹훅을 쓰면 대부분의 작업을 전부 또는 일부 자동화할 수 있어요.

### Zapier 처음 시작하려면 어떻게 하나요?

Zapier는 가장 많이 쓰이는 자동화·연동 소프트웨어 중 하나예요. 앱과 플랫폼 사이에 미리 만들어진 트리거와 액션이 수천 개 있어서 편리해요. Zapier를 처음 쓰는데 사용법을 잘 모르겠다면, Zapier에서 제공하는 짧고 알찬 강의를 확인해 보세요.

<https://zapier.com/resources/guides/quick-start/automation-basics>

<https://learn.zapier.com/intro-to-automation>

<https://learn.zapier.com/path/a-complete-guide-to-lead-management>

### 쿼리 파라미터(Query Params)는 무엇인가요?

쿼리 파라미터는 웹훅으로 정보를 전달하는 좋은 방법이에요. UTM 파라미터처럼 받는 앱이 쓸 정보를 덧붙여요. 예를 들어 ClickUp은 널리 쓰는 작업 관리 앱이에요. ClickUp에서 하이퍼클래스로 정보를 보낼 때 커스텀 필드 값이 깔끔하게 넘어오지 않아요. 커스텀 필드는 꼭 필요한 정보인데 아쉬운 부분이에요. 이럴 때 쿼리 파라미터로 필요한 정보를 더 깔끔하게 보낼 수 있어요.

웹훅 URL 뒤에 쿼리 키와 값을 붙이기만 하면 돼요. 예를 들어 웹훅 URL이 아래와 같다면,

```
https://services.leadconnectorhq.com/hooks/pgWooooooooG57D/webhook-trigger/ce000-800f-4bec-0090-f000000000
```

이렇게 쿼리 키와 값을 붙일 수 있어요.

```
https://services.leadconnectorhq.com/hooks/pgWooooooooG57D/webhook-trigger/ce000-800f-4bec-0090-f000000000?custom_field={{click.up.custom.field.value}}
```

![웹훅 URL에 쿼리 파라미터를 붙인 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155011888492/original/irJ6Vrg9RhGYNfIVxSzMwGcNKIOJGGFaKg.png?1699046037)

이렇게 하이퍼클래스로 보내면 쿼리 파라미터를 깔끔하게 선택할 수 있어요. 원하는 만큼 추가할 수 있어요.

### API와 웹훅은 어떤 점이 다른가요?

API(Application Programming Interface)는 앱끼리 연결하는 뒷단(백도어) 연결이에요. 앱 안에서 기본으로 할 수 없는 일도 API 문서를 찾아보면 해결하거나 가까이 갈 수 있는 경우가 많아요. 다만 API는 쓰기 복잡해요. 앱끼리 쓰는 별도의 복잡한 "언어"라서, 사용하려면 그 언어를 배워야 해요. 게다가 앱마다 고유한 사투리처럼 방식이 달라요. API는 어렵지만 강력해서 고려해 볼 만해요.

하이퍼클래스 개발자 문서는 하이퍼클래스 고객지원에 문의해 주세요.

반면 웹훅은 조금 더 쉬워요. 트리거 이벤트가 필요하고, 폼 제출이나 링크 클릭 같은 트리거에 반응해 정보를 보내요. API보다 훨씬 적은 지식으로 쓸 수 있어요. 그래서 API 연결을 알아보기 전에 웹훅을 먼저 써 보기를 권해요.

웹훅에 대한 자세한 내용은 위의 본문을 참고하세요.
