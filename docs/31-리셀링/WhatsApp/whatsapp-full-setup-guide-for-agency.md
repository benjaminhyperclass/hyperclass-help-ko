---
원문: /support/solutions/articles/48001206216-whatsapp-full-setup-guide-for-agency
번역일: 2026-11-06
카테고리: 31-리셀링
---

# WhatsApp 자동 재판매 설정 가이드 (에이전시용)

고객에게 WhatsApp을 재판매하고, 가격을 정하고, 결제를 관리하는 방법을 안내해요. Stripe를 쓰는 경우와 쓰지 않는 경우의 배포 방법도 함께 설명해요.

{% hint style="info" %}
문서에 나온 금액(달러)과 요금제 이름은 참고용이에요. 하이퍼클래스에서 실제로 적용되는 요금은 [요금제 안내](../../00-자주묻는질문/pricing-plans.md)와 [AI·SMS·음성 사용료](../../00-자주묻는질문/usage-costs.md)를 확인하세요.
{% endhint %}

## 자동 재판매 사전 준비

### 에이전시 Stripe 계정 연결

WhatsApp을 재판매하려면 에이전시의 Stripe 계정을 연결해야 해요. 이 계정으로 고객에게 구독 요금을 받아요.

Stripe 연결 방법은 "How to Connect Stripe to Your Agency Dashboard" 문서를 참고하세요.

{% hint style="info" %}
Stripe 계정이 없어도 자동 재판매 기능 없이 WhatsApp을 배포할 수 있어요. 다만 이 경우에는 고객이 아니라 에이전시에 직접 요금이 청구돼요.
{% endhint %}

## WhatsApp 가격 설정

에이전시 전체에 적용할 WhatsApp 가격은 왼쪽 메뉴의 **에이전시 대시보드 > 재판매** 탭에서 설정해요.

![에이전시 대시보드의 재판매 탭에서 WhatsApp 가격을 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041689839/original/VF3Y5xZhIWYoY-g0v9UemlSHD7S4pEAyVw.png?1739768576)

## 특정 고객에게 다른 가격 적용하기

특정 고객에게 다른 WhatsApp 요금을 적용하려면 아래 순서를 따라 하세요.

1. **서브 계정** 목록으로 이동해요.
2. 고객을 검색한 뒤 점 세 개 아이콘을 클릭하고 **Manage Clients**(고객 관리)를 선택해요.

   ![서브 계정 목록에서 Manage Clients를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041689838/original/Ty4RPOlDcn8lTWg7vZen-3Ugphxfo91_2w.png?1739768575)

3. **재판매** 섹션을 클릭해요.

   ![재판매 섹션을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041689837/original/umM5_S24skrI0U8sNZkZ8YWvzV-noEQKiQ.png?1739768575)

4. 적용할 요금을 입력하고 **저장**을 클릭해요.

   ![고객별 WhatsApp 요금을 입력하고 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041689840/original/1XKg4_wYj2kzjYNyQ5iyoXK6h9pFH1IG6A.png?1739768577)

이제 이 고객에게는 설정한 가격이 적용돼요.

## 특정 고객의 WhatsApp 비활성화

WhatsApp을 제공하고 싶지 않은 고객이 있다면 아래 두 단계로 끌 수 있어요.

1. **서브 계정** 목록으로 이동해요. 고객을 검색한 뒤 점 세 개 아이콘을 클릭하고 **Manage Clients**(고객 관리)를 선택해요.

   ![서브 계정 목록에서 Manage Clients를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008617196/original/ESt8rJrKH8t72uVukevwtQGG4hbxPT2rtg.png?1695731785)

2. 아래로 스크롤해 **재판매** 섹션으로 이동해요. WhatsApp 토글을 끄고 **저장**을 클릭해요.

   ![재판매 섹션에서 WhatsApp 토글을 끄는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008615187/original/oHFFi5n-bo-zkZCOVpywKe_iXQJcwMPGPQ.png?1695730702)

{% hint style="info" %}
이 오퍼는 판매가 이루어지기 전에만 비활성화할 수 있어요. 서브 계정이 이미 WhatsApp을 구매했다면 여기서 비활성화할 수 없어요.

구독이 시작된 뒤에 WhatsApp을 비활성화하면 구독 취소를 뜻해요. 구독을 취소하려면 하이퍼클래스 고객지원에 요청 티켓을 등록하세요.
{% endhint %}

## Stripe 없이 WhatsApp 직접 배포하기

Stripe나 재판매 없이 서브 계정에 WhatsApp을 직접 배포할 수 있어요.

1. **서브 계정** 목록으로 이동해요. 고객을 검색한 뒤 점 세 개 아이콘을 클릭하고 **Manage Clients**(고객 관리)를 선택해요.

   ![서브 계정 목록에서 Manage Clients를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008617196/original/ESt8rJrKH8t72uVukevwtQGG4hbxPT2rtg.png?1695731785)

2. 아래로 스크롤해 **재판매** 섹션으로 이동해요.
3. WhatsApp 항목에서 **Deploy WA Directly T&C**(WhatsApp 직접 배포 약관)를 읽고 동의해요.
4. **지금 결제**를 클릭해요.

   ![WhatsApp 직접 배포 약관에 동의하고 지금 결제를 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013441617/original/d7Ykkj1D_RZSMn9j2Y94SDr6hK-GZozuYg.png?1700743180)

{% hint style="info" %}
에이전시에 Stripe 계정이 없는 경우, 이렇게 직접 배포하기 전까지는 해당 서브 계정에 **WhatsApp** 탭이 보이지 않아요. 직접 배포를 해도 서브 계정과 에이전시 사이에는 구독이 만들어지지 않아요. 하이퍼클래스와 에이전시 사이의 구독은 그대로 만들어져요.
{% endhint %}

### 대화 요금

{% hint style="info" %}
WhatsApp을 직접 배포하면 WhatsApp 대화 요금이 에이전시 지갑에서 차감돼요. 서브 계정에는 WhatsApp 대화 요금이 청구되지 않아요.
{% endhint %}

## WhatsApp 청구·구독 내역 확인하기

어떤 계정에 대해 얼마를 내고 있는지 확인하려면 아래 순서를 따라 하세요.

1. **에이전시 설정 > 청구/결제 > 구독 > Reselling WhatsApp**(WhatsApp 재판매)으로 이동해요.

   ![에이전시 설정의 구독에서 WhatsApp 재판매 항목을 여는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041853129/original/AWwYkQMYxdhntRpfL-s_iaMV-J2G5dTipA.png?1739951834)

2. 아래로 스크롤해 **Show Sub-Accounts**(서브 계정 보기)를 클릭해요. WhatsApp과 연결된 모든 서브 계정의 상세 목록이 나와요.

   ![Show Sub-Accounts를 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041855618/original/eHQuRaeWMsluHtl_i457LVKQx3YM01WP-A.png?1739953374)
   ![WhatsApp과 연결된 서브 계정 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041855824/original/N-SqK566SKgrSSDMXPOr2TZc7tWh8itqKw.png?1739953523)

## 고객이 WhatsApp을 찾는 방법

고객은 **서브 계정 > 설정 > WhatsApp**에서 WhatsApp 기능을 찾을 수 있어요.

![서브 계정 설정에서 WhatsApp 메뉴를 찾는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041725439/original/yiZU7gBbUybZfabyTzKOhOLZa6QIlFSikg.png?1739795425)

## 고객이 구매를 완료하는 과정

고객이 WhatsApp 기능을 찾으면 결제 정보를 입력하고 **확인** 버튼을 클릭해 구매할 수 있어요. 확인을 클릭하면 시스템이 자동으로 결제를 처리하고 필요한 구독을 만들어요.

{% hint style="warning" %}
구독은 두 개가 따로 만들어져요.

1단계: 하이퍼클래스와 에이전시 사이
2단계: 에이전시와 서브 계정 사이
{% endhint %}

구매가 끝나면 고객은 WhatsApp 가입 페이지로 이동해요. 여기서 WhatsApp 계정을 연동할 수 있어요.

![구매 후 WhatsApp 가입 페이지로 이동한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041724846/original/tIeJnSlD0BAnM7wV4ZeIB7MTdIZ69deiXg.png?1739795051)

## 요금이 청구되는 방식

고객이 WhatsApp을 구매하면 시스템에 구독이 두 개 만들어져요.

- 고객의 카드와 에이전시의 Stripe 계정 사이: 에이전시가 고객에게 요금을 받기 위한 구독이에요.
- 하이퍼클래스와 에이전시의 Stripe 계정 사이: 에이전시가 하이퍼클래스에 서브 계정당 월 $10를 내요.

![WhatsApp 구독 두 개의 결제 흐름을 보여 주는 그림](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010213562/original/dN_oYi_aEBetlYHpguinC7YEVse4KZihaA.png?1697462471)

- 월 요금을 내면 수신·발신 메시지가 무료예요. 리드가 문자를 보내면 24시간 동안 답장할 수 있어요. 메시지를 주고받을 때마다 이 시간이 연장돼요.
- 먼저 연락해야 하거나 24시간이 지났다면 캠페인/템플릿 메시지를 보내야 해요. 이 메시지는 요금이 부과돼요. 템플릿 메시지를 보내면 대화가 다시 24시간 동안 열리고, 메시지를 주고받을 때마다 연장돼요.
- 발신 템플릿 메시지는 모두 서브 계정과 에이전시에 요금이 부과돼요. 요금은 메시지를 보내는 국가와 사용한 템플릿 유형(Marketing, Utility, Authentication, Service)에 따라 달라요.

## 자주 묻는 질문

### WhatsApp 자동 재판매를 하려면 무엇이 필요한가요?

자동 재판매를 켜려면 에이전시 Stripe 계정을 연결해야 해요. 이 계정으로 고객에게 구독 요금을 받아요.

Stripe 계정이 없어도 WhatsApp을 수동으로 배포할 수 있어요. 다만 이 경우에는 고객이 아니라 에이전시에 직접 요금이 청구돼요.

### 에이전시의 WhatsApp 가격은 어떻게 설정하나요?

에이전시 전체의 WhatsApp 가격은 **에이전시 대시보드 > 재판매** 탭에서 가격 설정을 바꾸면 돼요.

### 특정 고객에게만 다른 WhatsApp 가격을 적용할 수 있나요?

네, 할 수 있어요. 특정 고객에게 맞춤 가격을 적용하려면 아래 순서를 따라 하세요.

- **서브 계정** 목록에서 고객을 검색하고, 점 세 개 아이콘을 클릭한 뒤 **Manage Clients**(고객 관리)를 선택해요.
- **재판매** 섹션으로 이동해요.
- WhatsApp 가격을 바꾸고 **저장**을 클릭해요.

### 특정 고객의 WhatsApp을 비활성화하려면 어떻게 하나요?

WhatsApp을 제공하고 싶지 않은 고객이 있다면 아래 순서를 따라 하세요.

- **서브 계정** 목록에서 고객을 검색하고, 점 세 개 아이콘을 클릭한 뒤 **Manage Clients**(고객 관리)를 선택해요.
- 아래로 스크롤해 **재판매** 섹션에서 WhatsApp 토글을 끄고 **저장**을 클릭해요.

{% hint style="info" %}
이 옵션은 고객이 WhatsApp을 구매하기 전에만 쓸 수 있어요. 이미 구독이 활성화되어 있다면 취소하려면 하이퍼클래스 고객지원에 요청 티켓을 등록해야 해요.
{% endhint %}

### Stripe나 자동 재판매 없이 WhatsApp을 배포할 수 있나요?

네, Stripe 없이 수동으로 배포할 수 있어요.

- **서브 계정** 목록에서 고객을 검색하고, 점 세 개 아이콘을 클릭한 뒤 **Manage Clients**(고객 관리)를 선택해요.
- 아래로 스크롤해 **재판매** 섹션에서 **Deploy WA Directly T&C**(WhatsApp 직접 배포 약관)에 동의하고 **지금 결제**를 클릭해요.

{% hint style="warning" %}
- 수동 배포를 완료하기 전에는 **WhatsApp** 탭이 보이지 않아요.
- 에이전시와 서브 계정 사이에는 구독이 만들어지지 않아요. 다만 하이퍼클래스와 에이전시 사이의 구독은 그대로 있어요.
{% endhint %}

### WhatsApp을 수동으로 배포하면 대화 요금은 어떻게 되나요?

Stripe 없이 WhatsApp을 수동으로 배포한 경우예요.

- 대화 요금은 에이전시 지갑에서 차감돼요.
- 서브 계정에는 WhatsApp 대화 요금이 청구되지 않아요.

### WhatsApp에 얼마를 내고 있는지 어떻게 확인하나요?

결제 내역은 아래 순서로 확인해요.

- **에이전시 설정 > 청구/결제 > 구독 > Reselling WhatsApp**(WhatsApp 재판매)으로 이동해요.
- 아래로 스크롤해 **Show Sub-Accounts**(서브 계정 보기)를 클릭하면 연결된 모든 서브 계정과 청구 내역을 볼 수 있어요.

### 고객은 WhatsApp 기능을 어디에서 찾나요?

고객은 **서브 계정 > 설정 > WhatsApp**에서 찾을 수 있어요.

### 고객은 WhatsApp을 어떻게 구매하나요?

1. 고객이 WhatsApp 기능을 찾아요.
2. 결제 정보를 입력하고 **확인**을 클릭해요.
3. 시스템이 자동으로 결제를 처리하고 필요한 구독을 만들어요.
   - 하이퍼클래스와 에이전시 사이
   - 에이전시와 서브 계정 사이
4. 고객이 WhatsApp 가입 페이지로 이동해 계정을 연동해요.

### WhatsApp 요금은 어떻게 청구되나요?

고객이 WhatsApp을 구매하면 구독이 두 개 만들어져요.

1. 고객의 카드와 에이전시의 Stripe 계정 사이: 에이전시가 고객에게 요금을 청구할 수 있어요.
2. 하이퍼클래스와 에이전시의 Stripe 계정 사이: 에이전시가 서브 계정당 월 $10를 내요.

메시지 요금은 이렇게 적용돼요.

- 24시간 안에는 수신·발신 메시지가 무료예요. 메시지를 주고받을 때마다 24시간이 새로 시작돼요.
- 24시간 안에 메시지를 보내지 않았다면 발신 캠페인/템플릿 메시지를 보내야 해요. 이 메시지는 건당 요금이 부과돼요.
- 요금은 아래 기준에 따라 달라요.
  - 수신자의 국가
  - 사용한 템플릿 유형(Marketing, Utility, Authentication, Service)

## 도움이 필요하신가요?

이미 구독이 활성화된 고객의 WhatsApp을 취소해야 한다면 하이퍼클래스 고객지원에 요청 티켓을 등록하세요. 판매가 완료된 뒤에는 재판매 토글로 취소할 수 없어요.
