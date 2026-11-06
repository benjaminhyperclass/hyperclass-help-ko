---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# Hyperclass에서 웹훅 사용하는 방법 (Zapier)

**목차**

- [소개](#소개)
- [웹훅이란 무엇인가요?](#웹훅이란-무엇인가요)
- [웹훅은 어떻게 작동하나요?](#웹훅은-어떻게-작동하나요)
- [Hyperclass에서 웹훅 사용하기](#hyperclass에서-웹훅-사용하기)
- [(A) 인바운드 웹훅](#a-인바운드-웹훅)
- [(B) 아웃바운드 웹훅](#b-아웃바운드-웹훅)
- [자주 묻는 질문](#자주-묻는-질문)

# 소개

다른 애플리케이션에서 정보를 가져와야 하나요? 웹훅(Webhook)은 한 곳에서 다른 곳으로 정보를 보내는 능력을 크게 향상시켜주기 때문에 많은 사용자들이 첫 번째로 선택하는 방법입니다. Hyperclass의 강력한 워크플로우(Workflow) 자동화로 해결되지 않는 작업이 있다면, 웹훅이 도움이 될 수 있습니다!

이 글에서는 Hyperclass에서 웹훅을 사용하는 방법을 단계별로 설명해드리겠습니다.

## 웹훅이란 무엇인가요?

HTTPS 요청(또는 웹훅)은 인터넷에서 상호작용하는 거의 모든 것을 작동시킵니다. 웹훅은 Hyperclass가 Stripe, Twilio, Mailgun, Zapier 등과 통신할 수 있게 해주는 기술입니다. 이제 여러분도 웹훅에 완전히 접근하여 비즈니스 요구사항을 실현할 수 있습니다!

웹훅은 애플리케이션을 연결하는 훌륭한 방법입니다. 웹훅을 통해 플랫폼들이 서로 소통하며 고유한 작업을 완성할 수 있습니다. 아래는 웹훅을 사용할 때 자주 나오는 용어들입니다.

**유용한 정의:**

- **HTTPS 요청** - 웹훅의 공식 명칭입니다. HTTP는 웹사이트와 웹 브라우저 간에 정보를 전송하는 기본 방법이고, HTTPS는 데이터 전송 시 암호화하는 더 안전한 버전입니다.

- **트리거 이벤트** - 앱이 다른 앱의 웹훅 URL로 정보를 보내도록 신호를 보내는 고유한 이벤트입니다.

- **웹훅 URL** - 웹훅 요청을 받는 앱에서 생성하는 고유한 URL입니다. 주소나 전화번호와 같은 역할을 합니다.

- **페이로드** - 한 앱에서 다른 앱으로 패키징되어 전송되는 모든 정보를 의미합니다.

- **쿼리 매개변수** - UTM 매개변수와 유사하게, 웹훅 URL을 사용하여 정보를 매핑하는 유용한 방법입니다. 수신 앱에서 페이로드를 매핑할 때 더 효과적으로 사용할 수 있습니다.

- **매핑** - 점과 점을 연결하는 것처럼, 받은 페이로드를 수신 애플리케이션에서 사용하기 위해 올바른 필드에 "매핑"하는 과정입니다. 예를 들어, 페이로드에 연락처 이름, 이메일, 구매한 서비스 이름이 있다면, 이 정보를 Hyperclass 워크플로우 내의 연락처용 커스텀 필드에 "매핑" 또는 연결해야 합니다.

## 웹훅은 어떻게 작동하나요?

일반적으로 웹훅은 애플리케이션을 연결하는 데 사용됩니다. 한 앱이 다른 앱에 요청을 보내도록 신호를 보내는 트리거 이벤트가 필요합니다. 예를 들어, 결제 소프트웨어 Stripe에서 구매가 발생하면 이 정보가 Hyperclass로 전송됩니다. Stripe는 정보를 "페이로드"(전송되는 정보)로 패키징하여 Hyperclass에 보냅니다. Hyperclass에서는 받은 정보를 사용하여 작업을 수행할 수 있습니다.

웹훅을 사용하려면 한 애플리케이션에서 웹훅 URL을 제공해야 합니다. 웹훅 URL은 웹훅 요청을 받는 앱에서 생성하는 고유한 URL로, 주소나 전화번호와 같습니다. 사업체에 전화를 걸 때 고유한 전화번호와 때로는 올바른 부서로 연결되는 내선번호가 필요한 것처럼, 웹훅 URL도 마찬가지로 요청을 보내기 위한 고유한 전화번호 역할을 합니다.

**사용 사례 예시**

Stripe를 사용하여 결제를 처리하는 Shopify 전자상거래 스토어를 운영한다고 가정해보세요. 특정 강의를 구매한 특정 사용자들에게 Hyperclass를 사용하여 이메일을 보내고 싶습니다. 하지만 구매 정보가 Hyperclass에 없기 때문에 누가 무엇을 구매했는지 모릅니다. Hyperclass에서 올바른 연락처에게 이메일을 보내려면, Stripe에서 특정 상품이 구매될 때마다 Hyperclass로 웹훅 이벤트가 발생하도록 만들어야 합니다. 그러면 Hyperclass에서 이 정보를 사용하여 해당 상품을 구매한 특정 연락처들에게 이메일을 보내는 등의 특정 작업을 수행할 수 있습니다.

![웹훅 작동 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010241068/original/e_ZtUPbrIo3urqJR16g_RzagAV2I0i0UIQ.png?1697473846)

이 시나리오에서는 Hyperclass 워크플로우 트리거 "인바운드 웹훅(Inbound Webhook)"을 사용하여 Stripe의 정보를 받습니다. 더 쉽게 하려면 Zapier나 다른 자동화 소프트웨어를 사용하여 Stripe에서 구매가 이뤄졌을 때 트리거하는 것을 권장합니다(Hyperclass 주문 폼이나 상품(Product)을 사용하지 않는 경우). 구매가 이뤄지면 Hyperclass에서 필요한 모든 정보와 함께 페이로드가 패키징됩니다. Hyperclass가 정보를 받아서 특정 작업을 수행하는 데 사용합니다. 이 경우에는 특정 상품을 구매한 구매자들에게 마케팅하는 것입니다.

이것이 웹훅의 개요이지만, 배울 것이 훨씬 더 많습니다. 지금은 이 정도로 시작하겠습니다. 아래에서 Hyperclass에서 웹훅을 사용하는 두 가지 방법을 살펴보겠습니다.

---

# Hyperclass에서 웹훅 사용하기

Hyperclass에서 웹훅을 활용하는 방법은 두 가지입니다. 지나치게 단순화한 표현으로 "받기"와 "보내기" 웹훅이 있습니다.

**Hyperclass에서 웹훅을 사용하는 두 가지 방법:**

**(A) 인바운드 웹훅**

Hyperclass 워크플로우 트리거에서 인바운드 웹훅 요청을 "받기"

이름에서 알 수 있듯이 "받기"는 Hyperclass 웹훅 URL로 만들어진 웹훅 요청을 수신하거나 "받는" 것입니다. Hyperclass에서는 이를 "인바운드 웹훅(Inbound Webhook)"이라는 워크플로우 트리거로 부릅니다.

**(B) 아웃바운드 웹훅**

Hyperclass 워크플로우 액션(Action)으로 아웃바운드 웹훅 요청을 "보내기"

위의 "받기" 동작과 반대로... "보내기"는 외부 웹훅 URL에 요청을 만드는 것입니다. Hyperclass에서는 이를 "웹훅(Webhook)"이라는 워크플로우 액션으로 부릅니다.

아래에서 각 시나리오와 Hyperclass에서 수행하는 방법을 설명하겠습니다.

**순서: 트리거, 액션, 트리거, 액션**

웹훅에 대해 배우는 또 다른 유용한 방법은 발생하는 작업 순서의 패턴을 보는 것입니다. 인바운드든 아웃바운드 웹훅이든 상관없이, 일반적으로 한 앱에서 트리거와 액션이 있고 이것이 다른 앱으로 정보를 보냅니다. 이 두 번째 앱에서는 또 다른 트리거가 있고 그 다음 마지막 액션이 있습니다.

따라서 제목이... 순서: "트리거, 액션, 트리거, 액션"입니다. 이는 두 앱에서 모두 활용되는 웹훅의 흐름을 나타냅니다. 각각은 두 앱 간의 연결을 만드는 단일 트리거와 액션을 가지고 있습니다.

아래 예시에서도 첫 번째 앱이 트리거와 액션을 가지고 --> 페이로드를 다음 앱으로 보내는 것과 동일한 패턴을 볼 수 있습니다. 다음 앱은 인바운드 웹훅 트리거이고 그 다음에 또 다른 액션이 이어집니다.

![웹훅 순서도](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155012254101/original/YacUVsLrhrnYCOA1oPdfbOmoKMSGRJrKsg.png?1699461803)

---

## (A) 인바운드 웹훅

**Hyperclass 워크플로우 트리거에서 인바운드 웹훅 요청을 "받기"**

이 시나리오에서는 Hyperclass가 외부 앱에서 정보를 받기를 원합니다. 외부 앱은 워크플로우 트리거 - 인바운드 웹훅을 만들 때 제공되는 Hyperclass 웹훅 URL로 페이로드를 보냅니다. 예를 들어, 위의 사용 사례는 외부 구매에서 Hyperclass로 정보를 보내 해당 상품을 구매한 특정 연락처들을 위한 고유한 작업을 수행하는 데 사용하는 인바운드 웹훅 요청입니다.

![인바운드 웹훅 다이어그램](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155012254156/original/6YZqHiH1BZQqlkiyYujW_cqCd1Gvz3881Q.jpg?1699461860)

**1. 인바운드 웹훅 활성화**

아직 활성화하지 않았다면, 진행하기 위해 "LC Premium Triggers & Actions"을 활성화해야 합니다. 인바운드 요청을 받으려면 "인바운드 웹훅"이 필요한데, 이는 LC Premium Triggers & Actions에서만 사용할 수 있습니다.

**알고 계셨나요...** 대부분의 Hyperclass 사용자들은 Zapier, Make, Pabbly 같은 통합 및 자동화 소프트웨어를 활용하는 것을 선호합니다. 이들은 이미 사용하고 있을 수 있는 많은 애플리케이션에 대해 사용하기 쉬운 트리거와 액션을 제공합니다. 많은 경우에 Hyperclass 워크플로우와 함께 이러한 플랫폼 중 하나를 활용하는 것이 더 간단하고 강력합니다.

**2. Hyperclass 워크플로우 트리거에서 웹훅 URL 생성**

이제 Hyperclass 워크플로우를 열고 웹훅 URL을 생성해야 합니다. 워크플로우를 열거나 생성한 다음 워크플로우 트리거로 "인바운드 웹훅(Inbound Webhooks)"을 선택하세요. Hyperclass 웹훅 URL이 생성됩니다. 다음 단계에서 사용하기 위해 이 웹훅 URL을 복사하세요.

![Hyperclass 웹훅 URL 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010241062/original/zZZV8sXYGtNPfk_DIGZQc4wmzSezGmKfEA.png?1697473842)

**3. 외부 앱에서 웹훅 액션 단계 생성**

선택한 외부 앱에서 트리거와 웹훅 액션 단계를 생성해야 합니다. 예를 들어: Zapier에서 결제가 이뤄졌을 때 발생하는 "Payment" 트리거를 사용할 수 있습니다. "Webhooks By Zapier"를 사용하여 페이로드를 Hyperclass 웹훅 URL로 POST할 수 있습니다. 2단계에서 복사한 Hyperclass 웹훅 URL을 Zapier 액션 단계에 붙여넣으세요.

![Zapier 웹훅 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155011887200/original/IKDL_daUhGv_gqbybrdd9RALZoIuj56fsw.png?1699043799)

**4. 테스트 전송**

이제 진행하기 위해 샘플 페이로드를 Hyperclass 웹훅 URL로 보내야 합니다. 외부 앱(이 예시에서는 Zapier) 내에서 단계 끝으로 가서 "Test Step"을 누르세요. 외부 앱에서 Hyperclass로 테스트 페이로드를 보내는 방법은 해당 외부 앱 문서와 지원팀에 문의하세요. Hyperclass에서는 계속 기다리면서 "매핑 참조(Mapping Reference)" 섹션을 새로고침하여 Hyperclass에서 선택할 수 있는 "매핑 참조"가 나타날 때까지 기다리세요.

![테스트 페이로드 전송](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155011887243/original/M5bHGIPHDZ8foG5ik_NZlUF86q6Lk4QbxA.png?1699043936)

![매핑 참조 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010241070/original/IOAjncnP7_DzLx_BrkksQdSwP2Hv43Ncdg.png?1697473846)

![매핑 참조 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010241069/original/QoSSEVtaJAx113nCW8stk0LNM4J8Vv4rhQ.png?1697473846)

**5. 연락처 생성/업데이트**

Hyperclass에서는 모든 자동화가 실행되려면 연락처가 필요합니다. 이것이 "연락처 생성/업데이트(Create/Update Contact)"가 자동으로 열리는 이유입니다. "연락처 찾기(Find Contact)" 액션을 사용하여 커스텀 필드나 다른 값을 기반으로 연락처를 찾을 수도 있습니다. 이것을 채우는 것이 필수이며, 그렇지 않으면 작동하지 않고 워크플로우가 중단됩니다. 따라서 최소한 인바운드 웹훅의 페이로드에서 전화번호나 이메일을 생성/업데이트하거나 커스텀 필드 등을 기반으로 연락처를 찾으세요. 이것이 작동하려면 찾거나 일치하는 연락처가 있어야 합니다.

![연락처 생성/업데이트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010241065/original/1jIFtXcVBneM-vnEM2w50nn0Zx8VQW_AvQ.png?1697473844)

이제 완료입니다! Hyperclass에서 워크플로우 내에서 원하는 대로 매핑하고 사용할 정보가 있습니다.

**Hyperclass에서 정보 매핑**

이제 "커스텀 값(Custom Values)" > "인바운드 웹훅 트리거(Inbound Webhook Trigger)"에서 이 정보를 사용하여 페이로드의 정보를 Hyperclass의 올바른 필드나 액션에 매핑할 수 있습니다. 실행될 때 인바운드 웹훅의 올바른 정보가 Hyperclass의 올바른 위치에 채워집니다.

![정보 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010246863/original/vQ-E_DHbKtdc6AQblQyV1MWKzmRaAr-JMQ.png?1697478103)

Hyperclass의 인바운드 웹훅에 대해 자세히 알아보기

---

## (B) 아웃바운드 웹훅

**Hyperclass 워크플로우 액션으로 아웃바운드 웹훅 요청을 "보내기"**

이 시나리오에서는 Hyperclass 워크플로우 액션에서 외부 앱으로 정보를 보냅니다. 예를 들어, 누군가 Hyperclass에서 폼을 작성하면 이 연락처 정보가 외부 앱으로 가서 해당 연락처에 대한 정보를 그곳에서도 볼 수 있게 하려고 합니다.

![아웃바운드 웹훅 다이어그램](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155012254224/original/5q0UMpKWjfR7oeR83CDvnC5F3u5DsL-H-w.jpg?1699461932)

**1. 외부 애플리케이션이 웹훅 데이터 수신을 허용하는지 확인**

일부 외부 애플리케이션에서는 웹훅으로부터 데이터를 받는 것이 프리미엄 기능입니다. 다른 앱들은 단순히 트리거를 활성화하기만 하면 됩니다. 해당 애플리케이션의 문서를 참조하고 필요한 경우 업그레이드해야 합니다. 이 예시에서 사용할 Zapier의 경우, 인바운드 웹훅(Catchhooks by Zapier로 알려진)을 사용하려면 유료 계정이어야 합니다.

**외부 앱에서 웹훅이 보이지 않나요?**

경우에 따라 많은 외부 앱에서 웹훅을 사용할 수 없을 수 있습니다. 이런 경우 Zapier, Pabbly, Make 같은 자동화/통합 소프트웨어를 확인하여 앱 간의 정보 격차를 해소할 수 있습니다.

**2. 외부 앱에서 웹훅 URL 생성**

외부 앱 내에서 인바운드 웹훅용 트리거를 생성하세요. 이 트리거를 생성한 후 나중 단계에서 사용할 웹훅 URL이 생성됩니다. 예를 들어: Zapier에서 "Catch Hook" 이벤트와 함께 "Webhooks By Zapier" 트리거를 사용할 수 있습니다. 트리거 단계로 계속 진행하세요. 외부 앱에서 생성된 웹훅 URL을 복사하세요.

![외부 앱 웹훅 URL 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155011887769/original/99_GnzVBey8hlc2BEYFqP1rDczbd1xANaA.png?1699044740)

**3. Hyperclass 워크플로우 액션에 외부 웹훅 URL 추가**

이제 외부 웹훅 URL을 Hyperclass 워크플로우 액션에 추가할 수 있습니다. Hyperclass 워크플로우를 생성하거나 여세요. 외부 웹훅 URL을 Hyperclass 워크플로우 액션에 추가하세요. 워크플로우를 저장하고 발행하세요.

![Hyperclass 워크플로우에 웹훅 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155011887762/original/fujjPdM8233Nf86d5zUGqqtfw0wMTZVm7Q.png?1699044726)

**4. Hyperclass에서 외부 앱으로 테스트 전송**

이제 Hyperclass에서 외부 앱으로 샘플 정보를 보내야 합니다. 이를 위해 워크플로우를 트리거해야 합니다. 예를 들어, 테스트 구매를 하여 워크플로우 트리거가 이 정보를 Zapier로 발송하도록 할 수 있습니다. 실제로 일어날 워크플로우 트리거를 실제 행동처럼 수행하는 것이 가장 좋습니다. 외부 앱에서 사용할 때 페이로드에 모든 예시 데이터가 제공되기를 원하기 때문입니다.

외부 앱이 정보를 성공적으로 받을 때까지 계속 테스트하세요.

![테스트 전송 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010241075/original/UsPpaTNGd2xqxNTsUwcV6GEjTbE53oEzuQ.png?1697473846)

잘하셨습니다! 이제 Hyperclass 워크플로우가 트리거될 때마다 이 정보가 외부 앱으로 전송되어 사용됩니다. Zapier 내에서 이 정보를 사용하여 스프레드시트를 채우거나 다른 고유한 작업을 수행할 수 있습니다.

**Zapier에서 정보 매핑**

Zapier 액션에서 업데이트할 필드를 선택하면 "데이터 삽입(Insert Data)"을 보여주는 팝업이 나타나 Zapier 액션 내에서 플레이스홀더(Hyperclass에서는 커스텀 값으로 알려진)를 선택하여 페이로드의 정보를 매핑할 수 있습니다. 이것은 이 웹훅이 실행될 때마다 원하는 데이터를 스탬프하여 Hyperclass의 올바른 정보가 Zapier나 다른 서드파티 앱의 올바른 위치를 업데이트합니다.

![Zapier에서 정보 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155012266200/original/ap9P2cWxw5xgAWgbxJ8ydYNicpe8ARTbpg.png?1699474788)

---

# 자주 묻는 질문

## Zapier, Make, Pabbly가 무엇인가요?

Zapier, Make, Pabbly는 모두 자동화 및 통합 소프트웨어입니다. 즉, 애플리케이션들을 서로 연결하는 데 도움을 주기 