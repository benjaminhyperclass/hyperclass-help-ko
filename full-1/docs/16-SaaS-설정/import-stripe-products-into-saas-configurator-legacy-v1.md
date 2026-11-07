---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006438-import-stripe-products-into-saas-configurator-legacy-v1-
번역일: 2026-11-07
카테고리: 16-SaaS-설정
---

# Stripe 상품을 SaaS 구성기로 가져오기 (레거시 V1)

레거시/V1 SaaS 시스템을 쓰는 에이전시 관리자는 Stripe 계정의 상품을 **SaaS 구성기**(SaaS Configurator)로 바로 가져올 수 있어요. 이 문서에서는 상품을 가져오는 방법과, 기존 Stripe 구독을 서브 계정에 연결하는 방법을 안내해요.

## Stripe 상품 가져오기 기능이란?

레거시/V1 SaaS 시스템을 쓰는 에이전시를 위한 기능이에요. Stripe 계정에 있는 상품을 **SaaS 구성기**로 직접 가져올 수 있어요. 상품을 일일이 새로 만들 필요가 없어서 결제 환경을 일관되게 유지할 수 있고, 이전 과정의 오류도 줄어요.

## 이 기능의 장점

운영 효율과 결제 정확도를 높이는 데 도움이 돼요.

- 간편한 이전: Stripe에서 상품을 바로 가져와 직접 입력하는 수고와 불일치를 줄여요.
- 통합된 결제 관리: 기존 Stripe 구독을 서브 계정에 연결해 결제 흐름을 한곳으로 모으고, 고객이 끊김 없이 이용하게 해요.
- 손쉬운 설정 변경: **SaaS 구성기**에서 카테고리, 가격, 기능, 체험 기간, 리빌링 옵션을 쉽게 조정할 수 있어요.
- 도입 확대: 하이퍼클래스 SaaS 결제로 넘어가는 과정이 단순해져 에이전시 이탈을 줄이고, 하나로 통합된 시스템 경험을 제공해요.

## SaaS 구성기로 Stripe 상품 가져오기

Stripe 상품 정보를 SaaS 플랜 설정으로 빠르게 불러올 수 있어요.

1. 에이전시 보기에서 **SaaS 구성기**로 이동한 뒤 **+ Add Your Plan**(플랜 추가) 버튼을 클릭하세요.
2. 새 SaaS 플랜을 만들 때 **Stripe에서 가져오기**를 선택하세요.

   ![Stripe에서 가져오기 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054714489/original/YPB_fwGuyTbOGJsB1aZY5ly9FuDjTwsMyQ.jpeg?1758914112)
3. **상품 검색**에서 상품 이름으로 검색하고, 내용을 확인한 뒤 가져오기를 확정하세요.

   ![상품 검색 및 가져오기 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054714482/original/_0TE2BZZ414MyDPQCTbJxo-A8vqMR3H01Q.png?1758914098)
4. 카테고리, 가격, 기능, 체험 기간, 리빌링 설정 같은 주요 항목을 설정하세요.
5. 가져오기가 끝나면 **SaaS 구성기** 안에서 새 가격 ID가 자동으로 만들어져요. 기존 Stripe 가격 ID와 겹치지 않아요.

## 기존 Stripe 구독을 서브 계정에 연결하기

상품을 가져온 뒤에는 현재 사용 중인 Stripe 구독을 알맞은 SaaS 서브 계정에 연결해 서비스가 끊기지 않게 할 수 있어요.

설정 순서는 다음과 같아요.

1. 에이전시 보기에서 **서브 계정 > 고객 관리 > SaaS** 탭으로 이동하세요.
2. **Add a SaaS Subscription**(SaaS 구독 추가)을 클릭하세요.

   ![SaaS 구독 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054714905/original/myXr82yaM9hv9Pb1rWnRpmyJfwvVOD8LRw.jpeg?1758915341)
3. 결제 제공업체로 Stripe를 선택하세요.

   ![결제 제공업체로 Stripe 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054714904/original/SMVFg8XpMQeiU7z_WAC6n6sTt6F8OH6nuQ.jpeg?1758915341)
4. **클라이언트 결제 정보 요청** 창에서 **Link Existing Customer in Stripe**(Stripe의 기존 고객 연결)를 선택하세요.
5. 활성 구독이 있는 고객 프로필을 선택하세요.

   ![활성 구독이 있는 고객 프로필 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054714907/original/_gdO8Zn70fQ1QKDRqX8Cc0ZBnfVhf0vZfQ.jpeg?1758915341)
6. 오른쪽 패널에서 구독을 선택하세요.

   ![오른쪽 패널에서 구독 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054714906/original/rQjyXsXUE0NMd2z99GwywzhbxDhEj3mdsg.jpeg?1758915341)
7. **확인**을 눌러 서브 계정에서 SaaS를 활성화하세요.

## 자주 묻는 질문

### 가져올 때 기존 Stripe 가격 ID는 어떻게 되나요?
**SaaS 구성기** 안에서 새 가격 ID가 만들어져요. 일관성을 유지하고 중복을 막기 위해서예요.

### Stripe 상품을 한 번에 여러 개 가져올 수 있나요?
상품은 상품 검색 기능으로 하나씩 가져와요. 상품마다 정확하게 확인하고 가져올 수 있어요.

### 기존 Stripe 구독을 새로 가져온 상품에 연결하려면 어떻게 하나요?
상품을 가져온 뒤 **SaaS 구성기**의 **subscription mapping**(구독 매핑) 섹션에서 기존 Stripe 구독을 알맞은 서브 계정에 연결하세요.
<!-- 검토 필요: 원문 내용이 서로 다름 (연결 절차 본문은 서브 계정 > 고객 관리 > SaaS 탭에서 진행하는 방식인데, FAQ는 SaaS 구성기의 구독 매핑 섹션을 안내함) -->

### 하이퍼클래스 SaaS를 쓰는 모든 에이전시가 이 기능을 쓸 수 있나요?
이 가져오기 기능은 레거시/V1 SaaS 시스템을 쓰는 에이전시를 위한 기능이에요. Stripe 기반 결제에서 넘어오는 에이전시가 원활하게 이전하도록 돕는 기능이에요.
