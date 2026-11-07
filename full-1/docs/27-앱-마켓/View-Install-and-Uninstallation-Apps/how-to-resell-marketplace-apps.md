---
원문: https://help.gohighlevel.com/support/solutions/articles/155000001220-how-to-resell-marketplace-apps
번역일: 2026-11-07
카테고리: 27-앱-마켓
---

# 마켓플레이스 앱 재판매하기

외부 개발사가 만든 마켓플레이스 앱을 서브 계정에 재판매하고, 원하는 가격을 직접 정하는 방법을 안내해요.

{% hint style="info" %}
재판매 설정은 에이전시 관리자만 할 수 있어요.
{% endhint %}

## 사전 준비

### 에이전시 Stripe 계정 연결하기

클라이언트에게 마켓플레이스 앱의 구독 결제를 받을 때 에이전시의 Stripe 계정을 사용해요. 먼저 에이전시에 Stripe 계정을 연결하세요. 연결 방법은 '에이전시 대시보드에 Stripe 연결하기' 도움말을 참고하세요.

## 앱 가격 설정하기

1. 에이전시 왼쪽 메뉴에서 **재판매** 탭으로 이동해요. 여기서 에이전시 전체에 적용되는 가격을 설정할 수 있어요.

   ![에이전시 왼쪽 메뉴의 재판매 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010513723/original/hd_TGIcb6PH9AV-ieYM7726e1eBaFerQMA.png?1697702405)

2. 앱에 요금제가 여러 개 있으면, 요금제마다 판매 가격을 따로 설정할 수 있어요.

   ![요금제별 가격 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010513840/original/SNFjf8lIunWMl-65prQAXsimhGyJrTyjuw.png?1697702482)

{% hint style="info" %}
아래 조건을 모두 만족하는 앱만 재판매할 수 있어요.

- 앱이 유료 모델이에요.
- 앱이 하이퍼클래스 플랫폼 안에서 결제를 받도록 설정되어 있어요.
- 앱의 배포 유형이 **Subaccount**(서브 계정) 또는 **Agency & Subaccount**(에이전시 및 서브 계정)예요.
{% endhint %}

## 특정 클라이언트에게 다른 가격 적용하기

특정 클라이언트에게 다른 가격을 적용하려면 아래 두 단계를 따라 하세요.

1. 서브 계정 목록에서 클라이언트를 검색해요. 해당 클라이언트 오른쪽의 점 세 개 아이콘을 누르고 **Manage Clients**(클라이언트 관리)를 선택하세요.

   ![서브 계정 목록에서 클라이언트 관리를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010514187/original/eFijR0Vqp15bSlPvvQrYsbpeJ_GOHzavCQ.png?1697702657)

2. 아래로 스크롤해 **재판매** 섹션으로 이동해요. 앱 가격을 바꾸고 **저장**을 누르세요.

   ![재판매 섹션에서 앱 가격을 변경하고 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010514632/original/4qwYISg2kj5SImHTQHiwQFQaZVR4IwBXxg.png?1697702787)

## 클라이언트 화면에서는 어떻게 보이나요?

- 클라이언트는 왼쪽 메뉴의 **앱 마켓플레이스**에서 앱을 찾을 수 있어요. 자세한 내용은 '마켓플레이스 앱 보기 및 설치' 도움말을 참고하세요.
- 클라이언트가 앱을 선택하고 **Install**(설치)을 눌러요.
- 설치하는 중에 에이전시에서 정한 가격이 표시돼요. 클라이언트는 요금제를 고르고 결제한 뒤 앱을 설치해요.

  ![클라이언트에게 표시되는 앱 설치 및 요금제 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010515077/original/SYmjd4CJgktxoicpFq7c3qdtDJt0N7PmMA.png?1697702906)

{% hint style="info" %}
결제와 설치를 마치려면 클라이언트 계정에 카드 정보가 등록되어 있어야 해요. 등록되어 있지 않으면 서브 계정 **설정**에 있는 회사 **청구/결제** 페이지에서 카드 정보를 추가해요. 그다음 앱 페이지로 돌아와 다시 설치하세요.
{% endhint %}

## 결제는 어떻게 이루어지나요?

클라이언트가 유료 앱을 설치하면 시스템에 구독이 2개 만들어져요.

- 클라이언트의 카드와 에이전시의 Stripe 계정 사이의 구독이에요. 이 구독으로 클라이언트에게 결제를 받아요.
- 하이퍼클래스와 에이전시의 Stripe 계정 사이의 구독이에요.

![유료 앱 설치 시 생성되는 구독 2개](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010515411/original/R7QYH1YpXLv1hZ54M8EsvL2tZX0PGxefIQ.png?1697702985)
