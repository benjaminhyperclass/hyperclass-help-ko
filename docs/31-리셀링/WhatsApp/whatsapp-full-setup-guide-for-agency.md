---

번역일: 2026-04-08
카테고리: 31-리셀링 > WhatsApp
---

# 에이전시를 위한 WhatsApp 완전 설정 가이드

목차

- [자동 리셀링을 위한 사전 요구사항](#자동-리셀링을-위한-사전-요구사항)
- [에이전시 Stripe 계정 연결](#에이전시-stripe-계정-연결)
- [WhatsApp 가격 설정](#whatsapp-가격-설정)
- [특정 클라이언트를 위한 WhatsApp 가격 개인화](#특정-클라이언트를-위한-whatsapp-가격-개인화)
- [특정 클라이언트의 WhatsApp을 비활성화하려면?](#특정-클라이언트의-whatsapp을-비활성화하려면)
- [Stripe/리셀링 없이 로케이션에 WhatsApp을 직접 배포하려면?](#stripe리셀링-없이-로케이션에-whatsapp을-직접-배포하려면)
- [커뮤니티의 추가 튜토리얼](#커뮤니티의-추가-튜토리얼)
- [1단계: 청구 정보 접속](#1단계-청구-정보-접속)
- [2단계: 아래로 스크롤 > 하위 계정 보기](#2단계-아래로-스크롤-하위-계정-보기)
- [클라이언트는 어떻게 WhatsApp 기능을 발견하나요?](#클라이언트는-어떻게-whatsapp-기능을-발견하나요)
- [클라이언트는 어떻게 구매를 완료하나요?](#클라이언트는-어떻게-구매를-완료하나요)
- [청구는 어떻게 작동하나요?](#청구는-어떻게-작동하나요)
- [자주 묻는 질문](#자주-묻는-질문)

## 자동 리셀링을 위한 사전 요구사항

### 에이전시 Stripe 계정 연결

WhatsApp을 리셀링하려면 에이전시의 Stripe 계정을 연결해야 합니다. 이 계정은 클라이언트로부터 구독료를 수금하는 데 사용됩니다.

다음 가이드를 따라 Stripe를 연결하세요: 에이전시 대시보드에 Stripe 연결 방법

Stripe가 없으신가요? 자동 리셀링 기능을 사용하지 않고도 WhatsApp을 배포할 수 있습니다. 다만 이 경우 클라이언트에게 요금을 청구하는 대신 에이전시가 직접 청구를 받게 됩니다.

### WhatsApp 가격 설정

에이전시 전체의 WhatsApp 가격을 설정하려면 에이전시 대시보드 > 왼쪽 메뉴의 리셀링(Reselling) 탭으로 이동하여 오퍼를 설정하세요.

![WhatsApp 가격 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041689839/original/VF3Y5xZhIWYoY-g0v9UemlSHD7S4pEAyVw.png?1739768576)

### 특정 클라이언트를 위한 WhatsApp 가격 개인화

특정 클라이언트에게 다른 WhatsApp 요금을 제공하고 싶다면 다음 단계를 따르세요:

1️⃣ 하위 계정 목록(Sub-Account List)으로 이동 → 클라이언트 검색 → 점 3개 클릭 → 클라이언트 관리(Manage Clients) 선택

![클라이언트 관리 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041689838/original/Ty4RPOlDcn8lTWg7vZen-3Ugphxfo91_2w.png?1739768575)

2️⃣ 리셀링 섹션(Reselling Section)을 탭하세요.

![리셀링 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041689837/original/umM5_S24skrI0U8sNZkZ8YWvzV-noEQKiQ.png?1739768575)

3️⃣ WhatsApp 가격을 업데이트 → 저장(Save) 클릭

![WhatsApp 가격 업데이트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041689840/original/1XKg4_wYj2kzjYNyQ5iyoXK6h9pFH1IG6A.png?1739768577)

맞춤 가격이 적용되었습니다!

## 특정 클라이언트의 WhatsApp을 비활성화하려면?

WhatsApp을 제공하고 싶지 않은 특정 클라이언트가 있다면 다음 두 단계를 따르세요:

1단계: 하위 계정 목록(Sub-Account List)으로 이동 → 클라이언트 검색 → 점 3개 클릭 → 클라이언트 관리(Manage Clients)

![클라이언트 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008617196/original/ESt8rJrKH8t72uVukevwtQGG4hbxPT2rtg.png?1695731785)

2단계: 리셀링 섹션까지 아래로 스크롤 → 토글로 WhatsApp 비활성화 → 저장(Save) 누르기

![WhatsApp 비활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008615187/original/oHFFi5n-bo-zkZCOVpywKe_iXQJcwMPGPQ.png?1695730702)

참고사항:

이 오퍼는 판매가 일어나기 전에만 비활성화할 수 있습니다. 로케이션에서 이미 WhatsApp을 구매한 후에는 여기서 비활성화할 수 없습니다.

구독이 시작된 후 WhatsApp을 비활성화하는 것은 취소를 의미합니다. 구독을 취소하려면 지원 티켓을 생성해 주세요.

## Stripe/리셀링 없이 로케이션에 WhatsApp을 직접 배포하려면?

### 커뮤니티의 추가 튜토리얼

[https://youtu.be/uHzyW7yamhA](https://youtu.be/uHzyW7yamhA)

[https://youtu.be/w0TSujKqDl4](https://youtu.be/w0TSujKqDl4)

[https://youtu.be/dHcfecj9ojg](https://youtu.be/dHcfecj9ojg)

1단계: 하위 계정 목록(Sub-Account List)으로 이동 → 클라이언트 검색 → 점 3개 클릭 → 클라이언트 관리(Manage Clients)

![클라이언트 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008617196/original/ESt8rJrKH8t72uVukevwtQGG4hbxPT2rtg.png?1695731785)

2단계: 리셀링 섹션까지 아래로 스크롤 → WhatsApp 하위 → WA 직접 배포 약관 읽고 동의 → 지금 결제(Pay Now) 누르기

![WhatsApp 직접 배포](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155013441617/original/d7Ykkj1D_RZSMn9j2Y94SDr6hK-GZozuYg.png?1700743180)

참고사항:

에이전시에 Stripe 계정이 없는 경우 이 수동 배포가 이루어질 때까지 로케이션에서 WhatsApp 탭이 보이지 않습니다. 수동 배포는 로케이션과 에이전시 간의 구독을 생성하지 않으며, GHL과 에이전시 간의 구독만 생성됨을 강조하는 것이 중요합니다.

**대화 요금**

에이전시가 WhatsApp 직접 배포를 선택하는 경우, [WhatsApp 대화 요금](../../08-결제/기타/whatsapp-pricing-and-billing-full-guide.md)은 에이전시의 지갑에서 차감되며 로케이션은 WhatsApp 대화에 대해 요금을 청구받지 않습니다.

WhatsApp을 위한 HighLevel 청구 및 구독 확인 방법

HighLevel에 얼마를 지불하고 있는지, 어떤 계정에 대해 지불하는지 확인하려면 다음 단계를 따르세요:

### 1단계: 청구 정보 접속

에이전시 설정(Agency Settings) → 청구(Billing) → 구독(Subscription) → WhatsApp 리셀링으로 이동하세요.

![청구 정보 접속](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041853129/original/AWwYkQMYxdhntRpfL-s_iaMV-J2G5dTipA.png?1739951834)

### 2단계: 아래로 스크롤 > 하위 계정 보기

- "하위 계정 보기(Show Sub-Accounts)"를 클릭하면 WhatsApp과 연결된 모든 하위 계정의 상세 목록이 표시됩니다.

![하위 계정 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041855618/original/eHQuRaeWMsluHtl_i457LVKQx3YM01WP-A.png?1739953374)

![하위 계정 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041855824/original/N-SqK566SKgrSSDMXPOr2TZc7tWh8itqKw.png?1739953523)

### 클라이언트는 어떻게 WhatsApp 기능을 발견하나요?

클라이언트는 하위 계정(Sub-Account) > 설정(Settings) > WhatsApp에서 WhatsApp을 찾을 수 있습니다.

![WhatsApp 기능 발견](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041725439/original/yiZU7gBbUybZfabyTzKOhOLZa6QIlFSikg.png?1739795425)

## 클라이언트는 어떻게 구매를 완료하나요?

클라이언트가 WhatsApp 기능을 발견한 후, 결제 정보를 입력하고 확인(Confirm) 버튼을 클릭하여 쉽게 구매할 수 있습니다. 확인 시 시스템이 자동으로 결제를 처리하고 필요한 구독을 설정합니다.

중요 참고사항: 두 개의 별도 구독이 생성됩니다:
1단계: GoHighLevel과 에이전시 간
2단계: 에이전시와 하위 계정 간

구매 완료 후 클라이언트는 WhatsApp 가입 페이지로 리디렉션되어 WhatsApp 계정을 원활하게 연동할 수 있습니다.

![구매 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041724846/original/tIeJnSlD0BAnM7wV4ZeIB7MTdIZ69deiXg.png?1739795051)

## 청구는 어떻게 작동하나요?

클라이언트가 WhatsApp을 구매하면 시스템에 2개의 구독이 생성됩니다:

- 클라이언트의 카드와 당신의 Stripe 계정 간 - 클라이언트로부터 결제를 수금할 수 있습니다
- HighLevel과 당신의 Stripe 계정 간 - HighLevel에 월 $10/로케이션을 지불합니다

![청구 작동 방식](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010213562/original/dN_oYi_aEBetlYHpguinC7YEVse4KZihaA.png?1697462471)

- 월 요금으로 무료 인바운드 및 아웃바운드 메시지를 받습니다. 리드가 인바운드 텍스트를 보내면 24시간 동안 답장할 수 있는 시간이 주어집니다. 이 시간은 메시지마다 계속 연장됩니다.

- 아웃리치를 하거나 24시간이 지난 경우에는 요금이 부과되는 캠페인/템플릿 메시지를 사용해야 합니다. 이로써 24시간 대화 창이 열리며 메시지마다 계속 연장됩니다.

- 모든 아웃바운드 템플릿 메시지는 메시지를 보내는 국가와 사용된 템플릿 유형 [마케팅, 유틸리티, 인증, 서비스]에 따라 로케이션과 에이전시에 요금이 부과됩니다. 참고용 목록이 첨부되어 있습니다.

# 자주 묻는 질문

#### 1. WhatsApp 자동 리셀링의 사전 요구사항은 무엇인가요?

자동 리셀링을 활성화하려면 에이전시 Stripe 계정을 연결해야 합니다. 이 계정은 클라이언트로부터 구독료를 수금하는 데 사용됩니다.

Stripe 연결 방법은? 이 가이드에 따라 에이전시 대시보드와 Stripe를 연동하세요.

Stripe 계정이 없다면 수동으로 WhatsApp을 배포할 수 있습니다. 다만 이 경우 클라이언트에게 요금을 청구하는 대신 에이전시가 직접 청구를 받게 됩니다.

#### 2. 에이전시의 WhatsApp 가격은 어떻게 설정하나요?

에이전시 전체의 WhatsApp 가격을 설정하려면 에이전시 대시보드 → 리셀링 탭으로 이동하여 가격 설정을 업데이트하세요.

#### 3. 특정 클라이언트에게 다른 WhatsApp 가격을 설정할 수 있나요?

네, 특정 클라이언트에게 맞춤 WhatsApp 가격을 제공하려면 다음 단계를 따르세요:

- 하위 계정 목록으로 이동, 클라이언트 검색, 점 3개 클릭, 클라이언트 관리 선택
- 리셀링 섹션으로 이동
- WhatsApp 가격을 업데이트하고 저장 클릭

맞춤 가격이 선택한 클라이언트에게 적용됩니다.

#### 4. 특정 클라이언트의 WhatsApp을 비활성화하려면 어떻게 하나요?

특정 클라이언트에게 WhatsApp을 제공하고 싶지 않다면 다음 단계를 따르세요:

- 하위 계정 목록으로 이동, 클라이언트 검색, 점 3개 클릭, 클라이언트 관리 선택
- 리셀링 섹션까지 스크롤, WhatsApp 토글을 끔으로 설정, 저장 클릭

참고: 이 옵션은 클라이언트가 WhatsApp을 구매하기 전에만 사용할 수 있습니다. 구독이 이미 활성화된 경우 취소를 위해 지원 티켓을 제출해야 합니다.

#### 5. Stripe나 자동 리셀링 없이 WhatsApp을 배포할 수 있나요?

네, Stripe를 사용하지 않고 수동으로 WhatsApp을 배포할 수 있습니다.

- 하위 계정 목록으로 이동, 클라이언트 검색, 점 3개 클릭, 클라이언트 관리 선택
- 리셀링 섹션까지 스크롤, WA 직접 배포 약관 동의, 지금 결제 클릭

중요사항:

- 수동 배포가 완료될 때까지 WhatsApp 탭이 보이지 않습니다
- 에이전시와 로케이션 간의 구독은 생성되지 않지만, GHL과 에이전시 간의 구독은 여전히 존재합니다

#### 6. WhatsApp을 수동으로 배포하면 대화 요금은 어떻게 작동하나요?

Stripe 없이 수동으로 WhatsApp을 배포하는 경우:

- 대화 요금은 에이전시의 지갑에서 차감됩니다
- 로케이션은 WhatsApp 대화에 대해 요금을 청구받지 않습니다

#### 7. WhatsApp에 대해 HighLevel에 얼마를 지불하고 있는지 어떻게 확인하나요?

청구 내역을 확인하려면:

- 에이전시 설정 → 청구 → 구독 → WhatsApp 리셀링으로 이동
- 아래로 스크롤하여 "하위 계정 보기"를 클릭하면 연결된 모든 하위 계정과 청구 내역을 볼 수 있습니다

#### 8. 클라이언트는 어떻게 WhatsApp 기능을 발견하나요?

클라이언트는 하위 계정 → 설정 → WhatsApp에서 WhatsApp 기능을 찾을 수 있습니다.

#### 9. 클라이언트는 어떻게 WhatsApp을 구매하나요?

- 클라이언트가 WhatsApp 기능을 발견합니다
- 결제 정보를 입력하고 확인을 클릭합니다
- 시스템이 자동으로 결제를 처리하고 필요한 구독을 설정합니다: GoHighLevel과 에이전시 간, 에이전시와 하위 계정 간
- 클라이언트는 WhatsApp 가입 페이지로 리디렉션되어 계정을 연동합니다

#### 10. WhatsApp 청구는 어떻게 작동하나요?

클라이언트가 WhatsApp을 구매하면 두 개의 구독이 생성됩니다:

- 클라이언트의 카드와 당신의 Stripe 계정 간 - 에이전시가 클라이언트에게 요금을 청구할 수 있게 합니다
- HighLevel과 당신의 Stripe 계정 간 - 에이전시가 HighLevel에 로케이션당 월 $10를 지불합니다

메시지 요금:

- 24시간 창 내에서 무료 인바운드 및 아웃바운드 메시지 (메시지마다 리셋)
- 24시간 내에 메시지를 보내지 않으면 아웃바운드 캠페인/템플릿 메시지가 필요합니다 (메시지당 요금 부과)
- 요금은 다음에 따라 달라집니다: 수신자의 국가, 사용된 템플릿 유형 (마케팅, 유틸리티, 인증 또는 서비스)

---
*원문 최종 수정: Thu, 2 Apr, 2026 at 5:20 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*