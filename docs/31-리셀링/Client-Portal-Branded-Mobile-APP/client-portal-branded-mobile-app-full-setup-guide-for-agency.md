---

번역일: 2026-04-08
카테고리: 31-리셀링 > Client Portal Branded Mobile APP
---

# 클라이언트 포털 브랜드 모바일 앱 - 에이전시 완전 설정 가이드

**이 문서에서는 클라이언트 포털 브랜드 모바일 앱을 고객에게 재판매하고, 어떤 하위 계정(Sub-account)이 이를 사용 중인지 Hyperclass를 통해 추적하는 방법을 설명합니다.**

**목차**

- [에이전시 Stripe 계정 연결](#에이전시-stripe-계정-연결)
- [브랜드 클라이언트 포털 모바일 앱 가격 설정](#브랜드-클라이언트-포털-모바일-앱-가격-설정)
- [특정 고객을 위한 개별 제안 설정](#특정-고객을-위한-개별-제안-설정)
- [특정 고객에게 브랜드 클라이언트 포털 모바일 앱을 비활성화하는 방법](#특정-고객에게-브랜드-클라이언트-포털-모바일-앱을-비활성화하는-방법)
- [Stripe/재판매 없이 로케이션에 직접 브랜드 클라이언트 포털 모바일 앱을 배포하는 방법](#stripe재판매-없이-로케이션에-직접-브랜드-클라이언트-포털-모바일-앱을-배포하는-방법)
- [Hyperclass에 얼마를 지불하고 있으며 어떤 계정인지 확인하는 방법](#hyperclass에-얼마를-지불하고-있으며-어떤-계정인지-확인하는-방법)
- [고객의 사용 경험은 어떤가요?](#고객의-사용-경험은-어떤가요)
- [고객은 이 기능을 어떻게 발견하나요?](#고객은-이-기능을-어떻게-발견하나요)
- [고객은 어떻게 구매를 완료하나요?](#고객은-어떻게-구매를-완료하나요)
- [고객은 브랜드 클라이언트 포털 모바일 앱을 어떻게 설정하나요?](#고객은-브랜드-클라이언트-포털-모바일-앱을-어떻게-설정하나요)
- [결제는 어떻게 작동하나요?](#결제는-어떻게-작동하나요)
- [앱 구독 비활성 경고](#앱-구독-비활성-경고)
- [고객 성공팀과 상담 예약](#고객-성공팀과-상담-예약)

자동 재판매 사전 요구사항

### 에이전시 Stripe 계정 연결

에이전시 Stripe 계정은 고객으로부터 브랜드 클라이언트포털 앱 구독 결제를 수집하는 데 사용됩니다. 다음 가이드를 따라 에이전시 Stripe 계정을 연결할 수 있습니다 - https://help.gohighlevel.com/support/solutions/articles/48001171910-how-to-connect-stripe-to-your-agency-dashboard

**참고:** Stripe가 없어도 자동 재판매 기능 없이 하위 계정에 브랜드 클라이언트 포털 앱을 배포할 수 있습니다.

## 브랜드 클라이언트 포털 모바일 앱 가격 설정

에이전시 좌측 메뉴 → Reselling(리셀링) 탭에서 에이전시 전체 제안을 설정할 수 있습니다.

![브랜드 클라이언트 포털 모바일 앱 가격 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028890082/original/pDR00fmzhEZneZKKDuGyVxDQQGaa14-ifA.png?1720450224)

## **특정 고객을 위한 개별 제안 설정**

특정 고객에게 다른 요금을 제공하고 싶다면, 다음 두 단계를 따르세요:

**1단계:** Sub-Account List(하위 계정 목록) → 고객 검색 → 점 세 개 클릭 → Manage Clients(고객 관리)

![고객 관리 접근](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008617196/original/ESt8rJrKH8t72uVukevwtQGG4hbxPT2rtg.png?1695731785)

**2단계:** 리셀링 섹션으로 스크롤 → 브랜드 클라이언트 포털 모바일 앱 가격 변경 → 저장 클릭

## **특정 고객에게 브랜드 클라이언트 포털 모바일 앱을 비활성화하는 방법**

브랜드 클라이언트 포털 모바일 앱을 제공하지 않을 특정 고객이 있다면, 다음 두 단계를 따르세요:

**1단계:** Sub-Account List(하위 계정 목록) → 고객 검색 → 점 세 개 클릭 → Manage Clients(고객 관리)

![고객 관리 접근](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008617196/original/ESt8rJrKH8t72uVukevwtQGG4hbxPT2rtg.png?1695731785)

**2단계:** 리셀링 섹션으로 스크롤 → 토글로 브랜드 클라이언트 포털 모바일 앱 비활성화 → 저장 클릭

![브랜드 클라이언트 포털 모바일 앱 비활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028863988/original/Vut3tme9uixKr1P8sI1GNxkJiX24dVXlWg.png?1720434687)

**주의사항:**

이 제안은 판매가 발생하기 전에만 비활성화할 수 있습니다. 로케이션에서 이미 브랜드 클라이언트 포털 모바일 앱을 구매한 후에는 여기서 비활성화할 수 없습니다.

![이미 구매된 후 비활성화 불가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028863909/original/sJckNnDACYKB2XDHs9E4-b6qU0uIty5dlA.png?1720434654)

---

## **Stripe/재판매 없이 로케이션에 직접 브랜드 클라이언트 포털 모바일 앱을 배포하는 방법**

**1단계:** Sub-Account List(하위 계정 목록) → 고객 검색 → 점 세 개 클릭 → Manage Clients(고객 관리)

![고객 관리 접근](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008617196/original/ESt8rJrKH8t72uVukevwtQGG4hbxPT2rtg.png?1695731785)

**2단계:** 리셀링 섹션으로 스크롤 → 브랜드 클라이언트 포털 모바일 앱 하위 → 브랜드 클라이언트 포털 모바일 앱 직접 배포 약관 읽기 및 동의 → Pay Now(지금 결제) 클릭

![직접 배포 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028865004/original/jTg0HtwHjOPjhcFW07HY-6cH5VZnb-P19g.png?1720435338)

**주의사항:**

앱 설정 하의 브랜드 클라이언트 포털 모바일 앱은 이 수동 배포가 진행될 때까지 로케이션에 표시되지 않습니다(에이전시에 Stripe 계정이 없는 경우). 수동 배포는 로케이션과 에이전시 간의 구독을 생성하지 않지만, Hyperclass와 에이전시 간의 구독은 여전히 생성된다는 점을 강조해야 합니다.

---

## **Hyperclass에 얼마를 지불하고 있으며 어떤 계정인지 확인하는 방법**

다음 두 단계를 따라 확인할 수 있습니다:

**1단계:** Agency Settings(에이전시 설정) → Billing(결제) → Subscription(구독) → Reselling Branded Client Portal Mobile App(브랜드 클라이언트 포털 모바일 앱 재판매) → 월 금액과 구독 수를 직접 확인

![구독 정보 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027278677/original/qfXv81LmWkGBrIM1YpFiKO1PQ5jIE_jR-Q.png?1717753867)

**2단계:** Show sub-accounts(하위 계정 보기) 클릭 → 브랜드 클라이언트 포털 모바일 앱을 사용하는 모든 하위 계정 목록 표시

![하위 계정 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027278713/original/CQ9YpFMr12rqJZ3-KPT4jlqlkIRpfTvXPg.png?1717753910)

## **고객의 사용 경험은 어떤가요?**

### **고객은 이 기능을 어떻게 발견하나요?**

고객은 하위 계정 좌측 메뉴 Sites(사이트) → Client Portal(클라이언트 포털) → Settings(설정) → Branded Mobile App(브랜드 모바일 앱)에서 브랜드 클라이언트 포털 모바일 앱을 발견할 수 있습니다.

![기능 발견 경로](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027280079/original/JQ7A5vekEyhWdSeqe4NzWKHq_ZKBiccq1w.png?1717754923)

## 고객은 어떻게 구매를 완료하나요?

- 고객이 기능을 발견한 후, 결제 정보를 제출하고 확인하여 브랜드 클라이언트 포털 모바일 앱을 구매할 수 있습니다.
- 고객이 Confirm(확인) 버튼을 클릭하면 시스템이 구독을 생성하고 결제를 처리한 후 앱 대시보드로 이동시킵니다.

![구매 프로세스 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027444155/original/yWvVGcu6jZyl_6oiU91QGEJYg0LhayPNFw.png?1718096205)

![구매 프로세스 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027444229/original/EiAwZeo1lS1-MPpqN6Z1TfO-f7P2F_kTKg.png?1718096241)

## 고객은 브랜드 클라이언트 포털 모바일 앱을 어떻게 설정하나요?

다음 가이드 문서에서 단계별 상세 프로세스를 안내합니다:

[https://help.leadconnectorhq.com/en/support/solutions/articles/155000002608-how-to-setup-branded-client-portal-mobile-app](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002608-how-to-setup-branded-client-portal-mobile-app)

## 결제는 어떻게 작동하나요?

고객이 브랜드 클라이언트 포털 앱을 구매하면 시스템에 2개의 구독이 생성됩니다:

- 고객의 카드와 귀하의 Stripe 계정 간의 구독으로 고객으로부터 결제를 수집합니다
- Hyperclass와 귀하의 Stripe 계정 간의 구독으로 Hyperclass에 월 $79/로케이션을 지불합니다

![결제 구조](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027283088/original/NDX58TboojyTCXU7ksrQiga0aQzDRpgUfQ.png?1717757020)

---

## **앱 구독 비활성 경고**

브랜드 모바일 앱 사용자들은 구독에 문제가 있을 때(일시정지되거나 취소됨) 특별한 화면을 보게 됩니다. 이는 다음을 명확하게 보여줍니다:

- 브랜드 앱이 더 이상 활성화되지 않음
- 구독 갱신을 위한 조치가 필요함  
- 고객에게 영향을 미치므로 긴급성과 가시성을 추가함

이 화면은 취소의 영향을 강조하고 적시 재구독을 장려하여 궁극적으로 이탈을 줄이는 데 도움이 됩니다. 또한 문제를 해결하기 위한 편리한 "Resubscribe & Reignite My App(재구독 및 앱 재활성화)" 버튼을 제공합니다.

![앱 구독 비활성 경고 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054629550/original/jeygOBJihgX8gnlRzY-FwnF3pxnIG4Dkgw.png?1758846379)

---

## 고객 성공팀과 상담 예약

에이전시는 화이트라벨 브랜드 앱을 설정하기 위해 저희 팀과 직접 상담을 예약할 수 있습니다. 이 기능은:

- 에이전시 전용입니다
- 도입률 증가를 위해 설계되었습니다
- 가이드 온보딩 지원을 제공하여 출시 시간을 단축하는 것을 목표로 합니다

"Book A Call With Our Team(저희 팀과 상담 예약)" 버튼으로 예약 페이지에 접근하세요.

참고: 이 버튼은 에이전시 관리자(Agency Admin)에게만 표시됩니다.

![상담 예약 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054629521/original/czG45Edxs1k8gIthMgoDz4bcN3D8NitqCw.png?1758846225)

직접 링크: [저희 팀과 상담 예약](https://speakwith.us/productscalls_brandapp)

![상담 예약 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054629493/original/9ARrWPOshGVdq2XK4sgppY83HZWTYHo-5Q.png?1758846145)

---
*원문 최종 수정: Thu, 25 Sep, 2025 at 7:28 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*