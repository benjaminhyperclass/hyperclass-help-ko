---

번역일: 2026-04-08
카테고리: 제휴 관리
---

# 제휴 프로그램 웹훅으로 자동화 실행하기 (First Promoter)

이 글에서는 제휴 링크에 대한 웹훅을 설정하는 방법을 다룹니다. 누군가가 당신의 제휴 링크를 통해 가입할 때 판매를 기반으로 자동화를 실행할 수 있습니다.

**주의사항:**

이 글은 HighLevel 제휴 프로그램에 관한 내용으로, 하위 계정에서 제공되는 제휴 관리 기능과는 다릅니다.

제휴 파트너로서 모든 HighLevel 플랜에 등록할 수 있습니다. HighLevel Starter **플랜**($97/월) 또는 HighLevel Agency Unlimited($297/월)의 추천을 웹훅으로 추적하려면 지원팀에 문의하세요.

아래 동영상과 같이 "**HighLevel General Affiliate Campaign**" 웹훅 설정을 요청하세요.

HighLevel **Agency Pro**($497/월)의 추천을 웹훅으로 추적하려면 "**Supercharged [SaaS Program](https://www.gohighlevel.com/ssp)**" 웹훅 설정을 요청하세요. 이는 아래 동영상에 표시된 것과 동일합니다.

아래 설명된 일반적인 과정을 따르세요. 또한 제출한 웹훅이 Supercharged SaaS Program($497/월) 추천에 적용되기를 원한다면 지원팀에 알려주세요.

#### 관련 문서:

[인바운드 웹훅 워크플로우 프리미엄 트리거 사용 방법](how-to-use-the-inbound-webhook-workflow-premium-trigger.md)

워크플로우를 위한 LC 프리미엄 트리거 및 액션 활성화 및 재청구 방법

[이 링크를 클릭하여](https://www.postman.com/) Postman에 무료로 가입할 수 있습니다.

5단계를 모두 설정하고 테스트한 후, 각 단계에 해당하는 웹훅을 추가하고 지원팀과 공유할 별도 문서에 복사하여 붙여넣으세요(아래 예시 참조). 지원팀에 보낼 내용 예시:

제휴 링크에 웹훅을 활성화하고 싶습니다: [제휴 링크 삽입]
Step 1: lead_subscribed on – [인바운드 웹훅 URL 삽입]
Step 2: lead_signup on – [인바운드 웹훅 URL 삽입]
Step 3: lead_becomes_referral on – [인바운드 웹훅 URL 삽입]
Step 4: reward_created on – [인바운드 웹훅 URL 삽입]
Step 5: lead_cancelled on – [인바운드 웹훅 URL 삽입]

___

## 이 웹훅 샘플을 [Postman](https://www.postman.com/)에 붙여넣으세요:

```json
{
    "event": {
        "id": null,
        "type": "",
        "created_at": ""
    },
    "data": {
        "id": null,
        "state": "",
        "email": "",
        "uid": null,
        "customer_since": null,
        "cancelled_at": null,
        "plan_name": null,
        "suspicion": "",
        "username": null,
        "website": null,
        "created_at": "",
        "split_promotion_id": null,
        "custom_fields": {
            "name": "",
            "company_name": "",
            "phone_number": ""
        },
        "split_percentage_value": null,
        "promotion": {
            "id": null,
            "status": "",
            "ref_id": "",
            "promo_code": null,
            "customer_promo_code": null,
            "target_reached_at": null,
            "promoter_id": null,
            "campaign_id": null,
            "referral_link": "",
            "current_offer": null,
            "current_referral_reward": null,
            "current_promotion_reward": null,
            "current_target_reward": null,
            "campaign_name": "HighLevel Affiliate Program",
            "hidden": false,
            "visitors_count": null,
            "leads_count": null,
            "customers_count": null,
            "refunds_count": null,
            "cancellations_count": null,
            "sales_count": null,
            "sales_total": null,
            "refunds_total": null,
            "active_customers_count": null
        },
        "promoter": {
            "id": null,
            "cust_id": "",
            "email": "",
            "created_at": "",
            "temp_password": "",
            "default_promotion_id": null,
            "pref": "",
            "default_ref_id": "",
            "note": null,
            "w8_form_url": null,
            "w9_form_url": null,
            "parent_promoter_id": null,
            "earnings_balance": {
                "cash": null
            },
            "current_balance": {
                "cash": null
            },
            "paid_balance": null,
            "auth_token": "",
            "profile": {
                "id": null,
                "first_name": "",
                "last_name": "",
                "website": "",
                "company_name": "",
                "phone_number": "",
                "address": "",
                "vat_id": "",
                "country": "US",
                "paypal_email": "",
                "avatar_url": "",
                "description": null,
                "social_accounts": {
                    "twitter": {
                        "url": ""
                    },
                    "youtube": {
                        "url": ""
                    },
                    "facebook": {
                        "url": ""
                    },
                    "linkedin": {
                        "url": ""
                    },
                    "instagram": {
                        "url": ""
                    }
                }
            },
            "promotions": [
                {
                    "id": null,
                    "status": "offer_inactive",
                    "ref_id": "",
                    "promo_code": null,
                    "customer_promo_code": null,
                    "target_reached_at": null,
                    "promoter_id": null,
                    "campaign_id": null,
                    "referral_link": "",
                    "current_offer": null,
                    "current_referral_reward": null,
                    "current_promotion_reward": null,
                    "current_target_reward": null,
                    "campaign_name": "HighLevel Affiliate Program",
                    "hidden": false,
                    "visitors_count": null,
                    "leads_count": null,
                    "customers_count": null,
                    "refunds_count": null,
                    "cancellations_count": null,
                    "sales_count": null,
                    "sales_total": null,
                    "refunds_total": null,
                    "active_customers_count": null
                },
                {
                    "id": null,
                    "status": "offer_inactive",
                    "ref_id": "",
                    "promo_code": null,
                    "customer_promo_code": null,
                    "target_reached_at": null,
                    "promoter_id": null,
                    "campaign_id": null,
                    "referral_link": "",
                    "current_offer": null,
                    "current_referral_reward": null,
                    "current_promotion_reward": null,
                    "current_target_reward": null,
                    "campaign_name": "Supercharged SaaS Program",
                    "hidden": false,
                    "visitors_count": 0,
                    "leads_count": 0,
                    "customers_count": 0,
                    "refunds_count": 0,
                    "cancellations_count": 0,
                    "sales_count": 0,
                    "sales_total": 0,
                    "refunds_total": 0,
                    "active_customers_count": 0
                }
            ]
        }
    }
}
```

# 제휴 프로그램 웹훅 설정 단계별 가이드

FirstPromoter에서 제공하는 웹훅은 다음과 같습니다:

- Lead Subscribed - 2단계 가입 양식의 첫 번째 단계 (트라이얼에 가입하지 않은 리드를 육성하려는 경우)
- Lead Signup - 2단계 가입 양식의 두 번째 단계 (트라이얼을 시작한 리드를 육성)
- Lead Converted to Customer (첫 결제 완료)
- Reward Generated (자격을 갖춘 결제 발생 시마다)
- Lead Canceled (리드 또는 고객이 계정에 활성 구독이 더 이상 없음)

### 1. 하위 계정 > Automation(자동화) 탭 클릭 > Create New Workflow(새 워크플로우 만들기)

첫 번째 워크플로우를 만드세요: "Step 1: lead_subscribed on."

이는 누군가가 2단계 가입 양식의 첫 번째 단계를 작성할 때마다 발생하는 웹훅입니다 (트라이얼에 가입하지 않은 리드를 육성하려는 경우).

### 2. 인바운드 웹훅 트리거 만들기 > 인바운드 웹훅 URL 문자열 복사

![웹훅 URL 복사하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005472156/original/D8K4WoHieDpsboJJ6NiauGwe2UxCeiyF6A.gif?1692302700)

### 3. [Postman](https://www.postman.com/)을 열고 다음 단계를 따르세요:

- HTTP Request Method 사용
- "Post" 선택
- 웹훅 URL 붙여넣기 (위 단계에서 워크플로우에서 복사한 URL)
- "Body" 선택 후 "Raw" 선택 & 텍스트 파일로 "JSON" 선택
- 위에 제공된 First Promoter 샘플 데이터를 Body에 복사 (파란색으로 표시되어야 함)
- "Send" 클릭
- 성공 응답을 받았는지 확인하세요. 그렇지 않다면 처음부터 다시 시작하세요.

![Postman에서 웹훅 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005472107/original/fehetlVYShwoPGCqVMrbGJvw4IdADgr2ew.gif?1692302530)

### 4. 워크플로우로 돌아가서 트리거 내의 "fetch sample" 버튼을 클릭하세요

샘플을 가져와서 선택한 다음 액션 필드를 매핑하세요:

![샘플 가져오기 및 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005471669/original/mXv0wktff8D09tbw0WMec1lBCSOw4JiPkQ.gif?1692301604)

### 5. 인바운드 웹훅의 데이터를 사용해 필드를 매핑하세요

- 전체 이름
- 이메일
- 전화번호

![필드 매핑하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005471714/original/UnO476vTu9l0HV4IIy5LhnN4Ad9bZaJbNg.png?1692301737)

### 6. 나머지 웹훅에 대해 이 과정을 4번 더 반복하세요

- 워크플로우 복제
- 웹훅 URL 가져오기
- Postman으로 돌아가기
- Postman에 코드 붙여넣기, 지원팀에 보낼 문서에도 기록
- Postman에서 "send" 클릭
- 성공 요청 후 워크플로우로 돌아가기
- "fetch samples" 클릭하고 새 데이터 선택
- 5개 웹훅을 모두 완료할 때까지 반복

### 7. 계정의 Agency View(에이전시 뷰)에서 아이콘을 통해 지원팀과 실시간 채팅을 시작하세요

제휴 링크에 웹훅을 활성화하고 싶습니다: [제휴 링크 삽입]

새 리드 웹훅은 다음과 같습니다:
Step 1: lead_subscribed on – [인바운드 웹훅 URL 삽입]
Step 2: lead_signup on – [인바운드 웹훅 URL 삽입]
Step 3: lead_becomes_referral on – [인바운드 웹훅 URL 삽입]
Step 4: reward_created on – [인바운드 웹훅 URL 삽입]
Step 5: lead_cancelled on – [인바운드 웹훅 URL 삽입]

**참고:**

Pro 497 플랜의 경우, 웹훅은 다음에 대해서만 생성할 수 있습니다:
- **Lead Converted** to Customer (첫 결제 완료)
- **Reward Generated** (자격을 갖춘 결제 발생 시마다)
- **Lead Canceled** (리드 또는 고객이 계정에 활성 구독이 더 이상 없음)
- Lead sign-up과 Lead Subscribed의 경우, 모든 HighLevel 플랜을 포착하기 위해 하나의 웹훅만 만들면 됩니다.

---
*원문 최종 수정: Thu, 18 Dec, 2025 at 4:03 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*