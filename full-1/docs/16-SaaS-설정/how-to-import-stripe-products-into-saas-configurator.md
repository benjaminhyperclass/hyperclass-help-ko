---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006287-how-to-import-stripe-products-into-saas-configurator
번역일: 2026-11-07
카테고리: 16-SaaS-설정
---

# Stripe 상품을 SaaS 구성기로 가져오기

이미 쓰고 있는 Stripe 상품을 **SaaS 구성기**(SaaS Configurator)로 가져오고, 기존 구독을 서브 계정에 연결하는 방법이에요. 기존 Stripe 결제를 쓰던 에이전시가 하이퍼클래스 SaaS 모드로 옮겨 올 때, 결제와 SaaS 온보딩을 맞추는 데 도움이 돼요. 에이전시 관리자만 쓸 수 있어요.

[동영상](https://www.youtube.com/embed/Tv\_yiTTxjkA?&wmode=opaque)

## 1단계: Stripe에서 상품 가져오기

1. **SaaS 구성기** > **Create Plan**(플랜 만들기)으로 이동해요.
2. 오른쪽 위의 **Stripe에서 가져오기**를 클릭해요.  
   ![Stripe에서 가져오기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053458795/original/Fenl3xpjcPU-ePO0tVS8NNpMwVGK84czoA.png?1757499819)
3. 상품 이름으로 상품을 검색해요.  
   ![상품 이름으로 검색하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053458832/original/xunaDiqug2fXm0Ncr-fqPcpmYkvTbI6mAQ.png?1757499852)
4. 상품을 선택하고 **확인**을 눌러요.  
   ![상품을 선택하고 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053458863/original/x6iQJ60mCGRGP8uUXS9WiPv0zHkpHb-yOg.png?1757499890)
5. 상품 정보가 SaaS 구성기로 가져와져요.
6. 남은 설정을 마무리해요.

   1. **Category and hierarchy**(카테고리 및 계층 구조): 업그레이드 경로를 설정할 때 필요해요.
   2. **가격**: 새 가격 ID가 만들어져요.
   3. **Features, snapshots, trials, and rebilling**(기능, 스냅샷, 체험 기간, 재청구)  
      ![기능, 스냅샷, 체험 기간, 재청구 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053459070/original/eoLzrqYbq9DMb3Sy8kZI6MMM1-EAkgN0WQ.png?1757500019)
7. 플랜을 저장해요.

## 2단계: 기존 Stripe 구독을 서브 계정에 연결하기

1. **에이전시 보기**에서 **서브 계정 > 고객 관리**로 이동해요.
2. **SaaS** 탭을 열어요.
3. **Add a SaaS Subscription**(SaaS 구독 추가)을 클릭해요.  
   ![SaaS 구독 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053464674/original/YoIw0sOeUufzFl-H1qXTKwhhebh_A1Xy6g.png?1757503319)
4. 결제 제공업체로 Stripe를 선택해요.  
   ![결제 제공업체 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053464776/original/Uyglytv-oyhuuzMEbRdTt6hJc6B6NJ1dfg.png?1757503368)
5. **클라이언트 결제 정보 요청** 창에서 **Link Existing Customer in Stripe**(Stripe의 기존 고객 연결)를 선택해요.
6. 활성 구독이 있는 고객 프로필을 선택해요.  
   ![활성 구독이 있는 고객 프로필 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053465251/original/jWILCBoeA3fA5D8ojDbLAWB8_W4KwnFqoA.png?1757503640)
7. 오른쪽 패널에서 구독을 선택해요.  
   ![오른쪽 패널에서 구독을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053465504/original/tCEwBmRQDUYJjLoktghkYM7-4dx8XxmA_Q.png?1757503705)
8. **확인**을 눌러 서브 계정에서 SaaS를 활성화해요.

## 참고 사항

- 상품을 가져와도 기존 Stripe 가격 ID는 그대로 넘어오지 않아요. 새 ID가 만들어져요.
- 기존 고객은 영향을 받지 않아요. 고객의 구독을 문제없이 연결할 수 있어요.
- **레거시**/V1 SaaS 시스템에서만 사용할 수 있어요.
