---

번역일: 2026-04-06
카테고리: 08-결제
---

# Authorize.net 결제 처리 연동

이 가이드는 Hyperclass 계정에 Authorize.Net을 연동하여 결제를 원활하게 처리하는 방법을 설명합니다. Authorize.Net을 연결하면 고객 거래를 관리하고, 다양한 방식으로 결제를 받으며, 매끄러운 결제 경험을 제공할 수 있습니다. 이 연동은 인보이스, 주문 폼, 구독 결제를 지원하여 통합된 결제 처리 솔루션을 제공합니다.

---

# Authorize.Net 연동이란?

Authorize.Net 연동을 통해 Authorize.Net을 결제 게이트웨이로 사용하여 Hyperclass 계정에서 안전하게 결제를 처리할 수 있습니다. 이 연동으로 인보이스, 주문 폼, 구독에 대한 카드 결제를 받을 수 있습니다. Authorize.Net은 신뢰할 수 있고 안전한 방식으로 고객 거래를 처리하고 CRM 내에서 직접 결제를 관리할 수 있게 해줍니다.

소규모 사업을 운영하든 여러 고객을 관리하든, 이 연동은 결제 수집 과정을 단순화하여 수익 흐름을 더 쉽게 추적하고 관리할 수 있게 해줍니다.

---

## Authorize.Net 연동의 주요 장점

- **안전한 결제 처리**: Authorize.Net은 고급 보안 프로토콜로 모든 거래를 보호하여 고객 데이터를 안전하게 보관합니다.

- **다양한 결제 방법 지원**: 신용카드 결제를 받아 고객에게 더 많은 선택권을 제공합니다. (더 많은 방법이 곧 추가될 예정입니다)

- **간편한 인보이스와 주문 폼**: 수동 개입 없이 인보이스, 구독, 주문 폼에 대한 결제를 원활하게 처리합니다.

- **실시간 결제 추적**: Hyperclass 대시보드에서 직접 결제를 추적하고 관리하여 더 나은 재무 감독을 제공합니다.

- **향상된 고객 경험**: 고객에게 전문적이고 효율적인 결제 경험을 제공합니다.

---

## Authorize.Net 연동 설정 방법

1. **Authorize.Net API 자격증명 획득**:
   - Authorize.Net 계정에 로그인합니다.
   - **Account Settings(계정 설정) > API Credentials & Keys(API 자격증명 및 키)**로 이동합니다.
   - API Login ID와 Transaction Key를 생성합니다.

2. **Authorize.Net을 Hyperclass에 연결**:
   - Hyperclass에서 **Settings(설정) > Payments(결제)**로 이동합니다.
   - **Add Payment Gateway(결제 게이트웨이 추가)**를 클릭하고 **Authorize.Net**을 선택합니다.
   - API Login ID와 Transaction Key를 입력합니다.

3. **연결 테스트**:
   - 자격증명을 입력한 후 테스트 거래를 수행하여 연동이 올바르게 작동하는지 확인합니다.

4. **결제 방법 활성화**:
   - 연결이 완료되면 인보이스, 주문 폼, 구독에 사용할 결제 방법(예: 신용카드)을 설정합니다.

5. **결제 처리 시작**:
   - Hyperclass를 사용하여 인보이스, 주문 폼, 구독을 만들고 Authorize.Net을 통해 결제를 받기 시작합니다.

---

## 자주 묻는 질문

Authorize.Net은 신뢰성, 보안성, 그리고 폭넓은 기능으로 인해 경쟁력 있는 결제 프로세서로 여겨집니다. 20년 이상 운영되면서 모든 규모의 비즈니스에 결제 처리 서비스를 제공해왔습니다. Authorize.Net은 거래를 보호하고, 민감한 고객 정보를 안전하게 보관하며, 안정적인 가동 시간을 보장하는 강력한 보안 조치를 제공합니다. 또한 정기 청구, 모바일 호환성, 인기 있는 전자상거래 플랫폼과의 연동 등의 기능을 제공합니다.

#### 이 가이드에서 다루는 내용

#### [어떤 결제 프로세서를 사용할까요?](#어떤-결제-프로세서를-사용할까요)

#### [Authorize.Net 사용 요구사항](#authorizenet-사용-요구사항)

#### [Authorize.Net을 결제 게이트웨이로 연동하는 방법](#authorizenet을-결제-게이트웨이로-연동하는-방법)

#### [Authorize.Net 사용 시 주의사항](#authorizenet-사용-시-주의사항)

#### [Authorize.net 연동용 테스트 카드](#authorizenet-연동용-테스트-카드)

#### [FAQ](#faq)

#### [기본 게이트웨이 옵션에서 PayPal이 보이지 않는 이유는?](#기본-게이트웨이-옵션에서-paypal이-보이지-않는-이유는)

#### [Authorize.net으로 처리된 거래의 보고서에는 어떤 변화가 있나요? 모든 결제를 어디서 추적할 수 있나요?](#authorizenet으로-처리된-거래의-보고서에는-어떤-변화가-있나요-모든-결제를-어디서-추적할-수-있나요)

#### [Authorize.net으로 생성된 구독은 어디서 찾을 수 있나요? 구독 페이지에 정의된 구독 상태를 이해할 수 없습니다.](#authorizenet으로-생성된-구독은-어디서-찾을-수-있나요-구독-페이지에-정의된-구독-상태를-이해할-수-없습니다)

#### [Authorize.net으로 생성된 구독을 취소/종료하는 방법은? 머천트 포털에서는 할 수 없습니다.](#authorizenet으로-생성된-구독을-취소종료하는-방법은-머천트-포털에서는-할-수-없습니다)

#### [앱 내에서 거래 환불도 할 수 있나요?](#앱-내에서-거래-환불도-할-수-있나요?)

#### [Authorize.net에서 FDS 필터를 사용하여 주소나 카드 코드가 제출되지 않으면 검토를 위해 거래를 보류하고 있습니다. 시스템이 이런 경우를 처리할 수 있나요?](#Authorize.net에서-FDS-필터를-사용하여-주소나-카드-코드가-제출되지-않으면-검토를-위해-거래를-보류하고-있습니다.-시스템이-이런-경우를-처리할-수-있나요?)

#### [언제 Authorize.net이 인보이스/Text2Pay/캘린더 결제/멤버십 및 기타 영역에서 사용 가능하게 되나요?](#언제-Authorize.net이-인보이스Text2Pay캘린더-결제멤버십-및-기타-영역에서-사용-가능하게-되나요?)

## 어떤 결제 프로세서를 사용할까요?

Stripe, PayPal, Authorize.net 중에서 선택하는 것은 비즈니스에 가장 적합한 것을 고려해야 합니다. 비교해보면:

**Stripe**: 온라인 비즈니스와 스타트업에게 인기 있는 선택으로, 개발자 친화적인 플랫폼, 커스텀 연동, 투명한 가격을 제공합니다.

**PayPal**: 글로벌 존재감과 광범위한 기능을 갖춘 잘 알려진 결제 프로세서로, 안전한 결제 게이트웨이, 인보이스 발행, 정기 결제를 포함합니다.

**Authorize.net**: 안정적이고 안전한 결제 처리 서비스를 제공하는 오랜 역사를 가진 신뢰할 수 있는 결제 프로세서입니다. 사기 탐지와 모바일 호환성을 포함한 포괄적인 기능을 제공합니다.

궁극적으로 최선의 선택은 수락해야 하는 결제 유형, 대상 시장, 예산 등 비즈니스의 특정 요구사항에 따라 달라집니다. 결정하기 전에 각 프로세서의 기능, 수수료, 지원 옵션을 비교하는 것을 권장합니다.

**참고사항**:
수수료 데이터는 이 가이드 발행 시점 기준이며, 자세한 정보는 다음 세 가지 옵션의 가격 페이지를 확인하세요:
- Stripe: https://stripe.com/gb/pricing
- PayPal: https://www.paypal.com/us/webapps/mpp/merchant-fees
- Authorize.net: https://www.authorize.net/en-us/sign-up/pricing.html

## Authorize.Net 사용 요구사항

Authorize.net은 [미국, 호주, 캐나다](https://support.authorize.net/knowledgebase/Knowledgearticle/?code=000001207) 머천트의 거래를 수락할 수 있습니다.
Authorize.net에서 지원하는 통화 - [링크](https://support.authorize.net/knowledgebase/Knowledgearticle/?code=000001207)

Authorize.Net을 연동하기 전에 사용하는 브라우저가 이를 지원하는지 확인해야 합니다.

아래는 지원되고 테스트된 브라우저 목록입니다:

| 브라우저 이름 | 권장 버전 |
|---|---|
| Chrome | v80 이상 |
| Edge (Chromium) | v85 이상 |
| Firefox | v78 이상 |
| Safari | v12 이상 |

사용 중인 브라우저와 버전을 확인하고 검증하는 방법:

각 브라우저의 도움말/정보를 사용하세요:
- [Chrome](https://www.google.com/chrome/update/)
- [Edge](https://support.microsoft.com/en-us/microsoft-edge/find-out-which-version-of-microsoft-edge-you-have-c726bee8-c42e-e472-e954-4cf5123497eb)
- [Firefox](https://support.mozilla.org/en-US/kb/find-what-version-firefox-you-are-using)
- [Safari](https://support.apple.com/safari)

다음과 같은 사이트를 활용하세요:
- https://www.whatsmybrowser.org/
- https://www.whatismybrowser.com/

Authorize.net 내 머천트 인터페이스에서 지원되지 않는 브라우저나 버전이 감지되면, 브라우저 버전에 따라 두 가지 메시지가 표시될 수 있습니다.

**브라우저 경고/구버전** - 이 경우 Authorize.net이 문제를 일으킬 수 있는 브라우저/버전을 감지했습니다. 새 버전으로 업데이트하거나 다른 지원되는 브라우저를 사용해야 합니다.

구버전 브라우저 예시:
- Internet Explorer (IE) 11
- Edge (Legacy)
- Opera

![브라우저 경고 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278762635/original/GKfxv8yq-4fvH8Z_imbBLYO_QymhEZHU3Q.png?1675167685)

**브라우저 차단/구버전** - 이 경우 문제를 일으킬 브라우저/버전이 감지되었으며, 업데이트된 브라우저 버전이나 다른 지원되는 브라우저를 사용해야 합니다.

![브라우저 차단 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278762749/original/KtjM7pJ7sGxe3bSPyQzvG-RIDVMfNuDZhQ.png?1675167724)

## Authorize.Net을 결제 게이트웨이로 연동하는 방법

1. 지원되는 브라우저를 사용하고 지원되는 국가 중 한 곳에서 운영하고 있는지 확인한 후, [Authorize.net에서 라이브 및 샌드박스 API 키를 획득](https://developer.authorize.net/hello_world/common_setup_questions.html#:~:text=How%20do%20I%20obtain%20the%20transaction%20key%20for%20my%20sandbox%20account%3F)해야 합니다.

샌드박스 API 키의 경우 [샌드박스 머천트 인터페이스](https://sandbox.authorize.net)에 로그인하고, 라이브 API 키의 경우 [라이브 머천트 인터페이스](https://account.authorize.net)에 로그인하세요.

Authorize.Net의 샌드박스 vs 라이브 모드에 대한 자세한 내용은 [여기를 클릭](https://developer.authorize.net/hello_world/testing_guide.html)하세요.

2. 그다음 **Payments(결제) > Integrations(연동)**으로 이동하여 Authorize.Net 머천트 인터페이스에서 받은 3개의 API 키를 입력합니다.

라이브 필드에 라이브 API 키를 입력할 수 있습니다.

![라이브 API 키 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278804144/original/HOBNH3in9ASQb-G6x7kYxlwqQhUtTsHISw.png?1675175721)

샌드박스 필드에 샌드박스 API 키를 입력할 수 있습니다.

![샌드박스 API 키 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278804449/original/c1PlVkmiNqkN6Ajbwb52IMMBB-Q1Lz-4yQ.png?1675175803)

원하는 API 키를 입력한 후 저장 버튼을 클릭하세요.

![저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278806039/original/ab0_IqVbPs2X9Vub6cIQlq3doNO09HHYBQ.png?1675176076)

3. Authorize.Net을 기본 결제 게이트웨이로 설정할 것인지 묻는 빠른 프롬프트가 표시됩니다.

![기본 게이트웨이 설정 프롬프트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278806389/original/IL6l8BahVDEvcCMpvO9j4AqAB8Uqh_Y17A.png?1675176142)

취소를 클릭하면 Authorize.Net이 연동되지만 기본 게이트웨이로 설정되지 않습니다.

![취소 후 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278806859/original/77rhBaAuwHnXc3dSD99tCHCV_zJ6ygbNZA.png?1675176231)

확인을 클릭하면 Authorize.net이 연동되고 기본 결제 게이트웨이로 설정됩니다.

![확인 후 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278807334/original/ehWEyfGMBx06EEmV6-kny_h2Mbvr-ds-zw.png?1675176320)

**참고사항**

Authorize.net을 연결하기 위해 Stripe를 연결 해제할 필요는 없습니다. 연동 페이지에서 두 게이트웨이 모두 연결할 수 있습니다. 하지만 결제 처리를 위해 두 개의 다른 게이트웨이를 연결했으므로, 결제 처리를 위한 기본 게이트웨이를 정의해야 합니다. PayPal은 기본으로 설정된 Authorize.net/Stripe와 함께 주문 폼에서 계속 작동할 것입니다.

## Authorize.Net 사용 시 주의사항

Authorize.net이 연결되고 기본 게이트웨이로 설정된 경우, 멤버십과 SaaS 결제 링크와 같은 다른 제품 영역은 계속해서 Stripe를 사용하여 결제를 처리합니다.

Stripe와 관련된 정기 구독/대기 중인 거래가 있는 경우, Stripe 연결이 유지되는 한 계속 진행됩니다. 게이트웨이 연결을 해제하지 않는 것을 권장합니다. 기본 게이트웨이를 정의하면 새로운 거래는 원하는 선택을 통해 실행되고 기존 구독은 Stripe 및 PayPal 연동을 통해 계속 실행됩니다.

**참고사항**:

이 기능을 사용하려면 [퍼널을 버전 2로 업그레이드](how-to-upgrade-a-version-1-funnel-to-version-2-.md)해야 합니다.

Authorize.Net의 FAQ 섹션은 [여기를 클릭](https://account.authorize.net/help/Miscellaneous/FAQ/Frequently_Asked_Questions.htm)하세요.

### Authorize.net 연동용 테스트 카드

만료 날짜는 미래의 어떤 날짜든 가능하고, CVC는 3/4자리 숫자 값이면 됩니다:

- 4007000000027 (Visa)
- 4012888818888 (Visa)
- 4111111111111111 (Visa)
- 370000000000002 (American Express)
- 5424000000000015 (Mastercard)
- 2223000010309703 (Mastercard)
- 2223000010309711 (Mastercard)
- 6011000000000012 (Discover)
- 3088000000000017 (JCB)
- 38000000000006 (Diners Club/ Carte Blanche)

## FAQ

### 기본 게이트웨이 옵션에서 PayPal이 보이지 않는 이유는?

PayPal에 연결하고 Stripe/Authorize.net을 사용한 신용카드 결제 방법과 함께 결제 방법으로 사용할 수 있습니다. 즉, 연결 시 Stripe/Authorize.net 중에서 기본값을 선택해야 합니다. PayPal은 독립적으로 사용할 수 있고 주문 폼에서 신용카드 결제 방법과 함께 사용할 수 있습니다.

### Authorize.net으로 처리된 거래의 보고서에는 어떤 변화가 있나요? 모든 결제를 어디서 추적할 수 있나요?

주문/구독/거래 보고서에는 변화가 없습니다. Authorize.net을 통해 수행된 모든 결제는 **Payments(결제) ➝ Transactions(거래)** 에서 확인할 수 있습니다.

![거래 보고서 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278810849/original/6FPZdXeiv4MDSp1d36218_ezuIA6CZaUEA.png?1675177050)

또한 관련 워크플로우 트리거/어트리뷰션의 기능에는 변화가 없습니다. 모든 기능이 Authorize.net에서도 동일하게 작동합니다.

### Authorize.net으로 생성된 구독은 어디서 찾을 수 있나요? 구독 페이지에 정의된 구독 상태를 이해할 수 없습니다.

주문 폼에서 생성된 모든 구독은 **Payments(결제) ➝ Subscriptions(구독)**에서 추적할 수 있습니다.

![구독 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278816562/original/SP8Q-LT4WctAzVMUVMK7OvsFSnxFFOdYXQ.png?1675178073)

다음 목록은 구독 상태와 그 의미를 나타냅니다:

- **Pending(대기 중)** - FDS로 인한 머천트 검토 보류 시
- **Trial(체험)** - 구독이 체험 모드인 상태
- **Active(활성)** - 마지막 결제가 완료되었고 다음 결제도 예정된 상태
- **Expired(만료)** - 모든 구독 결제가 완료되어 구독이 더 이상 존재하지 않음
- **Canceled(취소)** - 머천트가 취소 작업을 사용하여 구독을 취소했으며, 더 이상 결제가 처리되지 않음
- **Unpaid(미납)** - 구독의 마지막 결제가 성공적으로 완료되지 않음. 구독은 진행 중이지만 최종 결제가 실패함

상태에 따른 구독 취소 가능 여부:

| 상태 | 취소 가능 |
|---|---|
| Pending | 아니오 |
| Trial | 예 |
| Active | 예 |
| Expired | 아니오 |
| Canceled | 아니오 |
| Unpaid | 예 |

취소 작업은 Authorize.net에서 생성된 구독에만 제공됩니다. Stripe와 PayPal용 구독 취소는 곧 추가될 예정입니다.

다음 흐름은 후속 결제 실패 시 구독 상태 처리 및 결제 재시도 로직을 설명합니다:

- 주문 폼에서 구독을 구매할 때 첫 번째 구독 결제가 성공하면, 구독이 활성 상태로 이동합니다. 반복 상품에 체험 기간이 있으면 체험 상태로도 이동할 수 있습니다.
- 구독은 모든 반복 결제가 성공적으로 완료될 때까지 활성 상태를 유지하고 결제 완료 후 "만료"로 이동합니다.
- 구독 중간에 최종 고객의 신용카드가 만료되거나, 결제에 최종 고객의 인증이 필요하거나, 마지막 결제가 성공적으로 처리되지 않은 경우 상태가 "미납"으로 이동합니다. 각각 24시간 후에 결제가 두 번 더 시도됩니다. 상태는 "미납"으로 유지됩니다.
- 구독은 미납 상태에 있으면서 각각 두 번의 재시도와 함께 다음 후속 거래를 시도합니다.
- 다음 후속 결제도 시도되며, 어떤 결제든 성공하면 구독이 "활성"으로 이동합니다. 그렇지 않으면 "미납" 상태로 유지됩니다.
- 마지막 거래에 대한 모든 재시도가 완료되면 구독 상태가 "만료"로 이동합니다.
- 머천트가 게이트웨이 계정 연결을 해제하고 진행 중인 구독이 있는 경우, 거래를 처리할 수 없으므로 구독이 미납으로 이동합니다. 재시도 로직에 따라 재시도 시도가 계속됩니다.

### Authorize.net으로 생성된 구독을 취소/종료하는 방법은? 머천트 포털에서는 할 수 없습니다.

Authorize.net을 사용하여 생성된 구독은 구독 페이지에서 '구독 취소' 작업을 사용하여 취소할 수 있습니다.

![구독 취소 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278812831/original/oNCJoq-nbfZtbm7bWPTcq0W76vqY2OQ_dA.png?1675177378)

![구독 취소 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278814793/original/SzIQaM8S3zpPx-44Zl2HltXRq_KMN3pTow.png?1675177713)

### 앱 내에서 거래 