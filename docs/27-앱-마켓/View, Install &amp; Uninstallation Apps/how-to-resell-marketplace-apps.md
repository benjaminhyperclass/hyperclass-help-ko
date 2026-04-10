---

번역일: 2026-04-08
카테고리: 27-앱-마켓 > View, Install & Uninstallation Apps
---

# 마켓플레이스 앱 재판매하는 방법

이 가이드에서는 서드파티 개발자가 만든 마켓플레이스 앱을 재판매하고 하위 계정에 커스텀 가격을 설정하는 방법을 안내해드립니다.

**목차**

- [사전 요구사항](#사전-요구사항)
- [에이전시 Stripe 계정 연결](#에이전시-stripe-계정-연결)
- [앱 가격 설정](#앱-가격-설정)  
- [특정 고객에게 개인화된 제안](#특정-고객에게-개인화된-제안)
- [고객의 경험은 어떤가요?](#고객의-경험은-어떤가요)
- [청구는 어떻게 작동하나요?](#청구는-어떻게-작동하나요)

## 사전 요구사항

### 에이전시 Stripe 계정 연결

에이전시 Stripe 계정은 고객으로부터 마켓플레이스 앱에 대한 구독 결제를 수집하는 데 사용됩니다. 다음 도움말을 참고하여 에이전시 Stripe 계정을 연결하세요 - https://help.gohighlevel.com/support/solutions/articles/48001171910-how-to-connect-stripe-to-your-agency-dashboard

## 앱 가격 설정

- 에이전시 좌측 메뉴 → Reselling(재판매) 탭에서 에이전시 전체에 적용될 제안을 설정할 수 있습니다.

![앱 가격 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010513723/original/hd_TGIcb6PH9AV-ieYM7726e1eBaFerQMA.png?1697702405)

- 앱이 여러 요금제를 제공하는 경우, 각 요금제별로 가격을 설정할 수 있습니다.

![여러 요금제 가격 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010513840/original/SNFjf8lIunWMl-65prQAXsimhGyJrTyjuw.png?1697702482)

참고: 다음 기준을 충족하는 앱만 재판매 가능합니다;

- 유료 모델의 앱이어야 함
- 앱이 Highlevel 플랫폼 내에서 결제를 수집하도록 결제 기본 설정을 지정했어야 함
- 배포 유형이 하위 계정(Subaccount) 또는 에이전시 & 하위 계정(Agency & Subaccount)이어야 함

## 특정 고객에게 개인화된 제안

특정 고객에게 다른 요금을 제안하고 싶다면 다음 두 단계를 따르세요:

1단계: Sub-Account List(하위 계정 목록) → 고객 검색 → 점 세 개 클릭 → Manage Clients(고객 관리)

![고객 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010514187/original/eFijR0Vqp15bSlPvvQrYsbpeJ_GOHzavCQ.png?1697702657)

2단계: 재판매 섹션으로 스크롤 → App Pricing(앱 가격) 변경 → Save(저장) 클릭

![앱 가격 변경](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010514632/original/4qwYISg2kj5SImHTQHiwQFQaZVR4IwBXxg.png?1697702787)

## 고객의 경험은 어떤가요?

- 고객들은 좌측 메뉴 바에서 앱 마켓플레이스를 발견할 수 있습니다. 자세한 내용은 [여기를 클릭](https://help.leadconnectorhq.com/en/support/solutions/articles/155000001158-marketplace-apps-view-installation)하세요
- 앱을 클릭하고 설치를 클릭합니다
- 설치하는 동안 고객은 당신이 설정한 가격을 보게 됩니다. 요금제를 선택하고 결제를 진행한 후 앱을 설치할 수 있습니다

![고객이 보는 앱 설치 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010515077/original/SYmjd4CJgktxoicpFq7c3qdtDJt0N7PmMA.png?1697702906)

- 참고: 고객들은 결제 및 설치를 완료하기 위해 계정에 카드 정보가 등록되어 있어야 합니다. 카드 정보가 없다면, 회사 청구 페이지(하위 계정 설정 아래)에서 카드 정보를 추가한 후 앱 페이지로 돌아와서 다시 설치를 시도하면 됩니다.

# 청구는 어떻게 작동하나요?

고객이 유료 앱을 설치하면 시스템에 2개의 구독이 생성됩니다:

- 고객의 카드와 당신의 Stripe 계정 사이의 구독: 고객으로부터 결제를 수집하기 위함
- HighLevel과 당신의 Stripe 계정 사이의 구독

![청구 구조 다이어그램](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010515411/original/R7QYH1YpXLv1hZ54M8EsvL2tZX0PGxefIQ.png?1697702985)

---
*원문 최종 수정: Thu, 19 Oct, 2023 at 9:14 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*