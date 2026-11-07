---
원문: /support/solutions/articles/155000001152-lc-email-complete-guide-to-dedicated-ip
번역일: 2026-11-06
카테고리: 09-이메일
---

# 하이퍼클래스 이메일 전용 IP 완벽 가이드

이 문서는 하이퍼클래스 이메일의 전용 IP(Dedicated IP)가 무엇인지, 언제 필요한지, 어떻게 구매하고 관리하는지 설명해요. 요금과 자주 묻는 질문도 함께 다뤄요.

{% hint style="info" %}
문서에 나온 금액(달러)과 요금제 이름은 참고용이에요. 하이퍼클래스에서 실제로 적용되는 요금은 [요금제 안내](../../00-자주묻는질문/pricing-plans.md)와 [AI·SMS·음성 사용료](../../00-자주묻는질문/usage-costs.md)를 확인하세요.
{% endhint %}

전용 IP를 쓰면 나만 쓰는 IP 주소로 이메일을 보낼 수 있어요. 발신자 평판과 이메일 전달률을 직접 관리할 수 있어요.

이메일 서비스 제공업체(ESP)는 IP 주소의 평판과 발송 행태를 면밀히 살펴보고, 그 IP에 연결된 도메인의 이메일 전달률을 판단해요. 전용 IP를 구매하면 그 IP를 단독으로 소유하게 돼요. 그래서 그 IP에 걸린 발신자 평판과 전달률을 직접 관리할 수 있어요.

## 전용 IP는 언제 필요한가요?

한 달에 수십만~수백만 통(특히 20만 통 이상)을 보낸다면, 전용 IP에서 평판을 쌓는 것이 좋아요. 전용 IP는 별도의 비용이 들 수 있다는 점은 알아 두세요.

SPF, DMARC, DKIM, SSL 인증서 같은 이메일 인증 방식을 설정해 스푸핑(발신자 사칭)을 막으려는 경우에도 전용 IP가 중요해요. **공유 IP는 같은 수준의 보안을 제공하지 못해요. 같은 IP를 쓰는 다른 발신자의 행동에 영향을 받을 수 있어요.**

전용 IP가 있으면 도메인 하이재킹 위험으로부터 보호받을 수 있어요. 이메일 소통의 무결성과 보안도 지킬 수 있어요.

## 전용 IP의 장점은 무엇인가요?

전용 IP는 공유 IP보다 비용이 더 들 수 있지만, 다음과 같은 장점이 있어요.

### 더 나은 이메일 전달

전용 IP로 보내면 이메일이 더 빨리 전달되는 경우가 많아요. Gmail이나 Yahoo 같은 대형 이메일 서비스는 전용 IP에서 온 메일을 선호하는 경향이 있어서, 받은편지함에 더 빨리 도착해요. 대역폭을 다른 사람과 나눠 쓰지 않으니, 같은 IP를 쓰는 다른 발신자의 영향도 받지 않아요.

### 발신자·IP 평판을 직접 관리

전용 IP의 유일한 사용자이므로 발송 습관, IP 평판, SEO 활동을 모두 직접 관리할 수 있어요. 외부 간섭 없이 나만의 전략을 세울 수 있어요.

### 문제를 쉽게 해결

내 전용 IP에서 보내는 발신자가 나뿐이라서 IP와 관련된 문제를 파악하고 대응하기 쉬워요. 원인을 찾아 해결하기가 간단해져서 전체적인 안정성도 좋아져요.

### 더 강한 보안

전용 IP는 도메인 하이재킹, 악성코드, 해킹 시도 같은 위협에 대한 보호 장치를 하나 더 만들어 줘요. 온라인 자산을 더 안전하게 지킬 수 있어요.

전용 IP는 비용이 더 들 수 있지만, 성능·통제력·문제 해결·보안에서 얻는 이점이 분명해요. 온라인과 이메일 활용도가 높은 조직이라면 투자할 가치가 있어요.

## 전용 IP로 이메일을 보낼 때 알아 둘 팁

이메일 서비스 제공업체에게는 평판이 가장 중요해요. 전용 IP를 쓸 때는 스팸 필터가 작동하지 않도록 발송량과 발송 시점을 잘 조절해야 해요. 24시간마다 발송량을 조금씩 늘리며 천천히 보내는 것이 좋아요.

전용 IP는 대량의 이메일을 꾸준히 보낼 때 가장 효과적이에요. 가끔씩 한꺼번에 대량 발송하면 오히려 스팸 발송자로 분류되거나 차단 목록에 오를 수 있어요. 이메일 서비스 제공업체는 갑작스러운 발송량 급증을 특히 경계해요.

이메일 발송량이 들쭉날쭉하게 많다면 공유 IP가 더 유리할 수 있어요. 가끔 몰리는 대량 발송이 같은 IP를 쓰는 다른 발신자들의 꾸준한 발송량에 섞여 들어가기 때문이에요.

{% hint style="info" %}
충분한 테스트와 조정을 거쳐 전용 IP 워밍업(점진적으로 발송량을 늘려 평판을 쌓는 과정) 절차를 완성하고 자동화했어요. 그래서 안정적인 발신자 평판을 만들 수 있어요. 전용 IP 워밍업이 끝날 때까지는 이메일이 전용 IP와 기존 공유 IP로 50 대 50씩 번갈아 발송되는 전환 기간이 있을 수 있어요.
{% endhint %}

{% hint style="info" %}
IP를 할당받은 뒤 상당한 시간이 지나도 워밍업 단계일 수 있어요.
{% endhint %}

## 전용 IP는 누가 구매할 수 있나요?

{% hint style="info" %}
전용 IP는 $297/$2970 플랜과 $497/$4970 플랜을 쓰는 에이전시만 구매할 수 있어요.

메일박스 제공업체의 발송 제한(스로틀링) 문제를 줄이고 탄탄한 평판을 유지하려면, 주당 최소 5만 통 이상 보내는 것을 강력히 권장해요. 또한 월 100만 통을 보낼 때마다 전용 IP 주소를 1개씩 할당하는 것을 권장해요.

- 에이전시: 만든 지 14일 이내인 에이전시는 IP를 구매할 수 있어요.
- 서브 계정: 연락처가 총 10,000개를 넘거나 최근 10일 동안 이메일을 50,000통 넘게 보냈고, 14일 이내에 만들어진 유형의 에이전시에 속한 서브 계정은 IP를 구매할 수 있어요.
- 서브 계정에 결제 설정이 되어 있어야 해요. 결제 설정이 없으면 구매 과정이 더 진행되지 않아요.
- 에이전시가 전용 IP 구매를 활성화해야 해요. 에이전시가 서브 계정의 전용 IP 구매를 활성화하지 않았다면 구매 과정이 더 진행되지 않아요.
{% endhint %}

하이퍼클래스 이메일을 이메일 제공업체로 쓰고 있다면 에이전시와 서브 계정 모두 전용 IP를 구매할 수 있어요.

![전용 IP 구매 가능 조건 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031452579/original/nlzjB8P9YXIOJgQGAXp8ZzeXxyDqI1GX8w.jpg?1724268138)

{% hint style="info" %}
SaaS가 아닌 서브 계정도 에이전시가 권한을 주면 구매할 수 있어요. 이 설정은 에이전시 서브 계정 페이지에 자세히 나와 있어요.
{% endhint %}

![에이전시의 서브 계정 구매 권한 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031452608/original/z1j8mntoQrAIeQQqA0PQp1CM1HwZ1vKlLg.jpg?1724268176)

## 전용 IP 구매하기

하이퍼클래스 이메일 사용자는 이메일 서비스 화면에서 전용 IP를 구매할 수 있어요.

1. **에이전시 설정**으로 이동한 뒤 **이메일 서비스**를 클릭하세요.
2. 하이퍼클래스 이메일 제공업체 섹션에서 **Dedicated Domain And IP**(전용 도메인 및 IP)를 클릭하세요.

   ![Dedicated Domain And IP 메뉴 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031452640/original/BvQDYf4cDhJ52G4FTdvZ60VPhNuh8A6phA.jpg?1724268225)

3. 다음 페이지에서 **Buy IP**(IP 구매)를 클릭하세요.

   ![Buy IP 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009567725/original/MGcEGrG94lo1h91nalxOHYlcQ2jNRhkEBA.png?1696837840)

4. 새 IP를 구매하는 창이 나타나면 **Buy Now**(지금 구매) 버튼을 눌러 구매를 진행하세요.

### 요금

IP 1개당 **월 $59**가 에이전시에 청구돼요. 에이전시는 이 비용을 충당하도록 재청구(리빌링)를 설정할 수 있어요.

![전용 IP 구매 확인 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009567791/original/JQF8N0VlbKo9vpFxWz3yw8SaFMVyf1TAMg.png?1696837899)

## 전용 IP 관리하기

전용 발신 도메인이 있다면, 그 도메인이 전용 IP와 공유 IP 중 어느 쪽에 연결되어 있는지 알려 주는 태그가 보여요.

![도메인에 표시되는 전용 IP·공유 IP 태그 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009569127/original/jKoAvC0wqCE_gqBohUVKQvjc0_r6EzdScQ.png?1696838511)

{% hint style="info" %}
전용 IP는 전용 발신 도메인에만 연결할 수 있어요.
{% endhint %}

도메인에 전용 IP를 하나 이상 할당할 수도 있어요. 이렇게 하면 도메인 하나를 여러 IP에 연결할 수 있고, 반대로 IP 하나를 여러 도메인에 연결할 수도 있어요. 도메인이 여러 IP에 연결되어 있으면 이메일은 이 IP들을 **라운드 로빈 방식**(돌아가며 차례대로 보내는 방식)으로 사용해 발송돼요. 이렇게 하면 도메인에 연결된 IP들에 이메일 트래픽이 고르게 분배돼요.

![도메인에 여러 IP가 연결된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155085049018/original/-2YisJD1nfqYqdrWOMoRHDFBcp4GuepBGg.png?1793888099)

### SPF 레코드 검증 경고

구매한 전용 IP와 함께 하이퍼클래스 이메일을 쓰는 동안, 필요한 SPF 레코드가 없는 도메인이 있으면 하이퍼클래스가 도메인별 경고를 보여 줘요.

경고에는 문제가 있는 도메인이 표시돼서, 어떤 DNS 레코드를 손봐야 하는지 쉽게 알 수 있어요.

이 경고가 보이면 다음 순서로 확인하세요.

1. 경고에 나온 도메인을 확인하세요.
2. DNS 제공업체에서 해당 도메인의 SPF 레코드를 확인하세요.
3. 경고에 표시된 필수 값으로 SPF 레코드를 업데이트하세요.

![SPF 레코드 검증 경고 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155085049256/original/oulN5d2tbHT_YR-5ubIFFh81C_-6rktp7g.png?1793888186)

{% hint style="info" %}
SPF 레코드가 없거나 잘못되어 있으면 이메일 인증과 전달률에 영향을 줄 수 있어요. 필요한 레코드를 올바르게 설정했는지 확인하세요.
{% endhint %}

DNS 레코드를 설정하고 인증하는 방법은 [도메인 추가하고 DNS 레코드 인증하기](../LC-이메일/how-to-add-a-domain-and-verify-dns-record.md)에서 확인하세요.

## 도메인에 전용 IP 할당하기

1. 도메인 옆의 **점 세 개**를 클릭하고 **Assign IP**(IP 할당)를 선택하세요.

   ![도메인 옆 점 세 개 메뉴에서 Assign IP를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009569526/original/WqxtX26vNHJvgqaSguv9LvipF9-_4XYUDA.png?1696838646)

2. **IP Assignment**(IP 할당) 창에 구매한 IP가 모두 표시돼요. 도메인에 할당할 IP를 선택하세요.

   ![IP Assignment 창에서 IP를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009569766/original/eAwHwlrD_8Lobkk3m3hYtO7mBxgEdctZzw.png?1696838748)

## 자주 묻는 질문

### 사용한 만큼 클라이언트에게 비용을 청구하려면 어떻게 하나요?

Pro 플랜을 쓰고 있다면 클라이언트에게 재청구(리빌링)할 수 있어요. 직접 청구하는 수고를 덜 수 있어요.

### 전용 IP 재판매를 ISV와 함께 쓸 수 있나요?

네, 가능해요. Pro 플랜의 에이전시는 계속 재판매할 수 있어요.

### rDNS는 어떻게 설정하나요?

rDNS 설정 안내 문서의 방법을 따라 rDNS를 설정하면 돼요.
