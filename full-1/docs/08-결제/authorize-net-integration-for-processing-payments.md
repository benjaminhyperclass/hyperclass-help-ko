---
원문: https://help.gohighlevel.com/support/solutions/articles/48001231144-authorize-net-integration-for-processing-payments
번역일: 2026-11-06
카테고리: 08-결제
---

# Authorize.Net 연동으로 결제 처리하기

Authorize.Net을 하이퍼클래스 계정에 연동해 결제를 처리하는 방법을 안내해요. 연동하면 인보이스, 주문 폼, 구독 결제를 한곳에서 받고 관리할 수 있어요.

---

## Authorize.Net 연동이란?

Authorize.Net을 결제 게이트웨이로 연결해 하이퍼클래스 계정에서 안전하게 결제를 처리하는 기능이에요. 인보이스, 주문 폼, 구독에서 카드 결제를 받을 수 있어요. 고객 거래를 CRM 안에서 바로 관리할 수 있어요.

소규모 사업을 운영하든 여러 고객사를 관리하든, 결제 수금 과정이 단순해져요. 매출 흐름도 더 쉽게 확인하고 관리할 수 있어요.

---

## Authorize.Net 연동의 주요 장점

1. 안전한 결제 처리: Authorize.Net의 보안 프로토콜로 모든 거래를 보호하고 고객 정보를 안전하게 지켜요.
2. 다양한 결제 수단 지원: 신용카드로 결제를 받을 수 있어요. (결제 수단은 앞으로 더 추가될 예정이에요.)
3. 간편한 인보이스·주문 폼 결제: 인보이스, 구독, 주문 폼 결제를 직접 처리하지 않아도 자동으로 진행돼요.
4. 실시간 결제 추적: 하이퍼클래스 대시보드에서 결제를 바로 확인하고 관리할 수 있어요.
5. 고객 경험 개선: 고객에게 깔끔하고 효율적인 결제 과정을 제공해요.

---

## Authorize.Net 연동 설정하기

1. Authorize.Net API 자격 증명을 준비해요.
   - Authorize.Net 계정에 로그인해요.
   - Authorize.Net 화면에서 **Account Settings**(계정 설정) > **API Credentials & Keys** 로 이동해요.
   - API Login ID와 Transaction Key를 생성해요.
2. Authorize.Net을 하이퍼클래스에 연결해요.
   - 하이퍼클래스에서 **설정 > 결제** 로 이동해요. <!-- 검토 필요: 원문 내용이 서로 다름 (아래 연동 절차에서는 결제 > 연동 메뉴를 안내함) -->
   - **Add Payment Gateway**(결제 게이트웨이 추가)를 클릭하고 **Authorize.Net** 을 선택해요.
   - API Login ID와 거래 키를 입력해요.
3. 연결을 테스트해요.
   - 자격 증명을 입력한 뒤 테스트 거래를 진행해 연동이 제대로 작동하는지 확인해요.
4. 결제 방법을 켜요.
   - 연결이 끝나면 인보이스, 주문 폼, 구독에서 사용할 결제 방법(예: 신용카드)을 설정해요.
5. 결제 처리를 시작해요.
   - 하이퍼클래스에서 인보이스, 주문 폼, 구독을 만들고 Authorize.Net으로 결제를 받기 시작해요.

---

## 자주 묻는 질문

Authorize.Net은 안정성, 보안, 다양한 기능을 갖춘 결제 대행사로 평가받아요. 20년 넘게 운영되며 다양한 규모의 사업체에 결제 처리 서비스를 제공해 왔어요. 거래와 고객의 민감한 정보를 지키는 강력한 보안 체계를 갖추고 있고, 안정적인 가동 시간으로 거래가 원활하게 이뤄지도록 해요. 정기 결제, 모바일 호환, 주요 이커머스 플랫폼과의 연동 같은 기능도 제공해요.

---

## 어떤 결제 대행사를 써야 할까요?

Stripe, PayPal, Authorize.net 중 무엇이 좋을지는 사업 상황에 따라 달라요. 세 가지를 비교하면 다음과 같아요.

- Stripe: 온라인 사업자와 스타트업이 많이 쓰는 서비스예요. 개발자 친화적인 플랫폼, 맞춤 연동, 투명한 요금제가 특징이에요.
- PayPal: 전 세계에서 쓰이는 오래된 결제 대행사예요. 보안 결제 게이트웨이, 인보이스, 정기 결제 등 다양한 기능을 제공해요.
- Authorize.net: 오랜 기간 안정적이고 안전한 결제 처리 서비스를 제공해 온 대행사예요. 사기 탐지와 모바일 호환 같은 폭넓은 기능을 갖추고 있어요.

결국 어떤 결제를 받아야 하는지, 주요 고객층은 누구인지, 예산은 얼마인지 같은 사업 상황에 따라 최선의 선택이 달라져요. 결정하기 전에 각 대행사의 기능, 수수료, 지원 방식을 비교해 보세요.

{% hint style="info" %}
수수료 정보는 이 문서를 작성한 시점 기준이에요. 자세한 내용은 세 서비스의 요금 안내 페이지에서 확인하세요.

Stripe: https://stripe.com/gb/pricing
PayPal: https://www.paypal.com/us/webapps/mpp/merchant-fees
Authorize.net: https://www.authorize.net/en-us/sign-up/pricing.html
{% endhint %}

---

## Authorize.Net 사용 요건

Authorize.net은 [미국, 호주, 캐나다](https://support.authorize.net/knowledgebase/Knowledgearticle/?code=000001207) 판매자의 거래를 받을 수 있어요.
Authorize.net에서 지원하는 통화는 [여기](https://support.authorize.net/knowledgebase/Knowledgearticle/?code=000001207)에서 확인하세요.

Authorize.Net을 연동하기 전에, 사용 중인 브라우저가 Authorize.Net을 지원하는지 먼저 확인하세요.

지원하고 테스트를 마친 브라우저는 다음과 같아요.

| 브라우저 | 권장 버전 |
| --- | --- |
| Chrome | v80 이상 |
| Edge (Chromium) | v85 이상 |
| Firefox | v78 이상 |
| Safari | v12 이상 |

사용 중인 브라우저와 버전은 각 브라우저의 도움말/정보 메뉴에서 확인할 수 있어요.

- [Chrome](https://www.google.com/chrome/update/)
- [Edge](https://support.microsoft.com/en-us/microsoft-edge/find-out-which-version-of-microsoft-edge-you-have-c726bee8-c42e-e472-e954-4cf5123497eb)
- [Firefox](https://support.mozilla.org/en-US/kb/find-what-version-firefox-you-are-using)
- [Safari](https://support.apple.com/safari)

아래 사이트에서도 확인할 수 있어요.

- <https://www.whatsmybrowser.org/>
- <https://www.whatismybrowser.com/>

Authorize.net의 Merchant Interface(판매자 인터페이스)에서 지원하지 않는 브라우저나 버전이 감지되면, 브라우저 버전이 얼마나 낮은지에 따라 두 가지 메시지 중 하나가 나타날 수 있어요.

Browser Warning/Out of Date(브라우저 경고/오래된 버전): 사용 중인 브라우저나 버전에서 문제가 생길 수 있다고 Authorize.net이 감지한 경우예요. 최신 버전으로 업데이트하거나 지원되는 다른 브라우저를 사용하세요.

오래된 브라우저의 예:

- Internet Explorer (IE) 11
- Edge (Legacy)
- Opera

![브라우저 경고 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278762635/original/GKfxv8yq-4fvH8Z_imbBLYO_QymhEZHU3Q.png?1675167685)

Browser Block/Out of Date(브라우저 차단/오래된 버전): 사용 중인 브라우저나 버전에서 문제가 생기는 것이 확실해, 최신 버전으로 업데이트하거나 지원되는 다른 브라우저를 써야 하는 경우예요.

![브라우저 차단 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278762749/original/KtjM7pJ7sGxe3bSPyQzvG-RIDVMfNuDZhQ.png?1675167724)

---

## Authorize.Net을 결제 게이트웨이로 연동하기

1. 지원되는 브라우저를 쓰고 있고 지원 국가에서 운영 중인지 확인했다면, [Authorize.net에서 라이브 API 키와 샌드박스 API 키를 발급받으세요.](https://developer.authorize.net/hello_world/common_setup_questions.html#:~:text=How%20do%20I%20obtain%20the%20transaction%20key%20for%20my%20sandbox%20account%3F)

   샌드박스 API 키는 [샌드박스 Merchant Interface](https://sandbox.authorize.net)에 로그인해서 발급받아요. 라이브 API 키는 [라이브 Merchant Interface](https://account.authorize.net)에 로그인해서 발급받아요.

   [Authorize.Net의 샌드박스 모드와 라이브 모드](https://developer.authorize.net/hello_world/testing_guide.html)에 대한 자세한 내용은 여기에서 확인하세요.

---

[동영상](https://www.loom.com/embed/48a47926cee941f2b8b9209fca6bb352)

---

2. **결제 > 연동** 으로 이동해요. Authorize.Net의 Merchant Interface에서 받은 API 키 3개를 Authorize.Net 항목에 입력해요. <!-- 검토 필요: 원문 내용이 서로 다름 (위 설정 절차에서는 설정 > 결제 메뉴를 안내함) -->

   라이브 API 키는 **Live**(라이브) 필드에 입력해요.

   ![라이브 API 키 입력 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278804144/original/HOBNH3in9ASQb-G6x7kYxlwqQhUtTsHISw.png?1675175721)

   샌드박스 API 키는 **Sandbox**(샌드박스) 필드에 입력해요.

   ![샌드박스 API 키 입력 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278804449/original/c1PlVkmiNqkN6Ajbwb52IMMBB-Q1Lz-4yQ.png?1675175803)

   필요한 API 키를 입력했으면 **저장** 버튼을 클릭해요.

   ![저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278806039/original/ab0_IqVbPs2X9Vub6cIQlq3doNO09HHYBQ.png?1675176076)

3. Authorize.Net을 기본 결제 게이트웨이로 설정할지 묻는 창이 나타나요.

   ![기본 결제 게이트웨이 설정 확인 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278806389/original/IL6l8BahVDEvcCMpvO9j4AqAB8Uqh_Y17A.png?1675176142)

   **취소** 를 클릭하면 Authorize.Net은 연동되지만 기본 게이트웨이로 설정되지는 않아요.

   ![취소를 클릭한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278806859/original/77rhBaAuwHnXc3dSD99tCHCV_zJ6ygbNZA.png?1675176231)

   **확인** 을 클릭하면 Authorize.net이 연동되고 기본 결제 게이트웨이로 설정돼요.

   ![확인을 클릭한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278807334/original/ehWEyfGMBx06EEmV6-kny_h2Mbvr-ds-zw.png?1675176320)

{% hint style="info" %}
Authorize.net을 연결하려고 Stripe 연결을 끊을 필요는 없어요. 연동 페이지에서 두 게이트웨이를 모두 연결할 수 있어요. 다만 결제 게이트웨이를 두 개 연결하면 결제를 처리할 기본 게이트웨이를 정해야 해요. PayPal은 주문 폼에서 Authorize.net/Stripe 중 기본으로 설정한 게이트웨이와 함께 계속 작동해요.
{% endhint %}

---

## Authorize.Net 사용 시 참고 사항

Authorize.net을 연결해 기본 게이트웨이로 설정해도, 멤버십이나 SaaS 결제 링크 같은 다른 영역은 계속 Stripe로 결제를 처리해요. <!-- 검토 필요: 원문 내용이 서로 다름 (아래 자주 묻는 질문에서는 멤버십 결제와 SaaS에서 Authorize.net을 사용할 수 있다고 안내함) -->

Stripe로 진행 중인 정기 구독이나 대기 중인 거래는 Stripe 연결이 유지되는 동안 그대로 계속 실행돼요. 어떤 게이트웨이도 연결을 끊지 않기를 권해요. 기본 게이트웨이를 정해 두면 새 거래는 선택한 게이트웨이로 처리되고, 기존 구독은 Stripe와 PayPal 연동을 통해 그대로 유지돼요.

{% hint style="warning" %}
이 기능을 사용하려면 퍼널 버전 2로 업그레이드해야 해요.
{% endhint %}

Authorize.Net의 자주 묻는 질문은 [여기](https://account.authorize.net/help/Miscellaneous/FAQ/Frequently_Asked_Questions.htm)에서 확인하세요.

### Authorize.net 연동 테스트 카드

유효기간은 미래의 아무 날짜나, CVC는 아무 3~4자리 숫자나 입력하면 돼요.

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

---

## 자주 묻는 질문

### 기본 게이트웨이 옵션에 PayPal이 안 보여요.

PayPal을 연결하면 Stripe/Authorize.net의 카드 결제와 함께 결제 방법으로 쓸 수 있어요. 그래서 기본 게이트웨이는 연결된 Stripe/Authorize.net 중에서 선택해야 해요. PayPal은 주문 폼에서 카드 결제 방법과 별개로, 또 함께 사용할 수 있어요.

### Authorize.net으로 처리한 거래는 리포팅이 어떻게 달라지나요? 모든 결제를 어디서 확인하나요?

주문/구독/거래 내역 리포팅은 달라지지 않아요. Authorize.net으로 처리한 모든 결제는 **결제 > 거래 내역** 에서 확인할 수 있어요.

![거래 내역 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278810849/original/6FPZdXeiv4MDSp1d36218_ezuIA6CZaUEA.png?1675177050)

연결된 워크플로우 트리거와 어트리뷰션도 작동 방식이 달라지지 않아요. 모든 기능이 Authorize.net에서도 똑같이 작동해요.

### Authorize.net으로 만든 구독은 어디서 찾나요? **구독** 페이지의 구독 상태가 이해되지 않아요.

주문 폼에서 만든 모든 구독은 **결제 > 구독** 에서 확인할 수 있어요.

![구독 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278816562/original/SP8Q-LT4WctAzVMUVMK7OvsFSnxFFOdYXQ.png?1675178073)

구독 상태와 그 의미는 다음과 같아요.

- **대기 중**: FDS(사기 탐지 필터) 때문에 판매자 검토 대기 상태예요.
- **체험판**: 구독이 체험 기간 중이에요.
- **활성**: 마지막 결제가 완료됐고 다음 결제도 예정돼 있어요.
- **만료됨**: 구독의 모든 결제가 완료돼 구독이 더 이상 유지되지 않아요.
- **취소됨**: 판매자가 **구독 취소** 작업으로 구독을 취소해서 더 이상 결제가 처리되지 않아요.
- **미결제**: 구독의 마지막 결제가 성공하지 못했어요. 구독은 계속 진행 중이지만 마지막 결제가 실패한 상태예요.

구독 상태에 따라 취소할 수 있는지 여부가 달라요.

| 상태 | 취소 |
| --- | --- |
| 대기 중 | 불가 |
| 체험판 | 가능 |
| 활성 | 가능 |
| 만료됨 | 불가 |
| 취소됨 | 불가 |
| 미결제 | 가능 |

**구독 취소** 작업은 Authorize.net에서 만든 구독에만 제공돼요. Stripe와 PayPal 구독의 취소 기능은 곧 추가될 예정이에요.

다음 결제가 실패했을 때 구독 상태가 어떻게 바뀌고 결제를 어떻게 다시 시도하는지는 아래와 같아요.

- 주문 폼에서 구독을 구매할 때 첫 결제가 성공하면 구독이 **활성** 상태가 돼요.
  - 정기 결제 상품에 체험 기간이 설정돼 있으면 **체험판** 상태가 될 수도 있어요.
- 모든 정기 결제가 성공할 때까지 구독은 **활성** 상태를 유지하고, 결제가 모두 끝나면 **만료됨** 으로 바뀌어요.
- 구독 도중 고객의 카드가 만료되거나, 결제에 고객 인증이 필요하거나, 마지막 결제가 성공하지 못하면 상태가 **미결제** 로 바뀌어요.
  - 24시간 간격으로 결제를 두 번 더 시도해요. 상태는 **미결제** 로 유지돼요.
  - 구독은 **미결제** 상태로 남고, 이후 거래도 각각 두 번씩 재시도하며 이어서 시도해요.
  - 다음 결제도 시도하며, 어느 결제라도 성공하면 구독이 **활성** 상태로 돌아가요. 성공하지 못하면 **미결제** 상태로 남아요.
  - 마지막 거래의 재시도가 모두 끝나면 구독 상태가 **만료됨** 으로 바뀌어요.
- 판매자가 게이트웨이 계정 연결을 끊었는데 진행 중인 구독이 있으면 거래를 처리할 수 없어서 구독이 **미결제** 상태가 돼요. 재시도는 위의 재시도 방식에 따라 계속돼요.

### Authorize.net으로 만든 구독은 어떻게 취소하거나 종료하나요? 판매자 포털에서는 취소할 수가 없어요.

Authorize.net으로 만든 구독은 **구독** 페이지에서 **구독 취소** 작업으로 취소할 수 있어요.

![구독 취소 작업 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278812831/original/oNCJoq-nbfZtbm7bWPTcq0W76vqY2OQ_dA.png?1675177378)

![구독 취소 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48278814793/original/SzIQaM8S3zpPx-44Zl2HltXRq_KMN3pTow.png?1675177713)

### 앱 안에서 거래를 환불할 수도 있나요?

네, 앱 안에서 환불 기능을 사용할 수 있어요. **결제 > 거래 내역** 에서 원하는 거래를 환불하세요.

### Authorize.net에서 FDS 필터로 주소나 카드 코드가 제출되지 않은 거래를 검토 대기로 보류하고 있어요. 이런 경우도 처리할 수 있나요?

네. 주문 폼으로 제출된 거래를 FDS 필터에 따라 검토 대기로 보류하면, 해당 거래는 검토 대기 상태로 보류되거나(설정한 방식에 따라 거절되기도 해요) 판매자 포털에 표시돼요. 거래를 승인하거나 거절하면 **거래 내역** 페이지에도 그 상태가 반영돼요.

정기 인보이스 결제나 캘린더 예약 결제는 거래를 거절된 것으로 처리해요. 그래서 캘린더 예약을 확정하거나 자동 결제를 예약하지 않아요. 사업자가 언제 결제를 승인할지 알 수 없어서 문제가 생길 수 있기 때문이에요.

### 멤버십 결제에서도 Authorize.net을 쓸 수 있나요?

네, 멤버십 결제에서 [Authorize.net](//Authorize.net)을 사용할 수 있어요. <!-- 검토 필요: 원문 내용이 서로 다름 (위 참고 사항에서는 멤버십이 계속 Stripe로 결제를 처리한다고 안내함) -->

### SaaS에서는 Authorize.net을 언제부터 쓸 수 있나요?

지금은 SaaS v2 기능에서 사용할 수 있어요. <!-- 검토 필요: 원문 내용이 서로 다름 (위 참고 사항에서는 SaaS 결제 링크가 계속 Stripe로 결제를 처리한다고 안내함) -->
