---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007358-configure-automatic-tax-collection-for-your-saas-subscriptions-using-stripe
번역일: 2026-11-07
카테고리: 16-SaaS-설정
---

# Stripe로 SaaS 구독 세금 자동 징수 설정하기

SaaS V1(Stripe 기반) 시스템을 쓰는 SaaS 에이전시는 이 기능으로 세금을 징수할 지역, 세금 계산 방식, 가격의 세금 포함 여부를 정할 수 있어요. 모든 설정은 Stripe 자동 세금과 바로 동기화되고, 앞으로 새로 만들거나 다시 활성화하는 구독에 적용돼요.

{% hint style="warning" %}
이 기능은 SaaS V2나 Stripe 외의 결제 제공업체에서는 사용할 수 없어요.
{% endhint %}

## 1단계. 자동 세금 켜기

1. **SaaS 구성기 > 자동 세금**으로 이동하세요.
2. **자동 세금 활성화** 토글을 켜세요.

![자동 세금 활성화 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064754879/original/Jw6c5RKJx5VT7_7vTFwG6oqsECZT1PETzQ.png?1770887932)

## 2단계. 세금 등록 설정하기

1. **Tax Registrations**(세금 등록) 아래에서 **Manage Tax Registrations**(세금 등록 관리)를 클릭하세요.
2. 연결된 Stripe 계정으로 이동해요.
3. 세금을 징수해야 하는 관할 지역(국가·주)을 추가하거나 관리하세요.
4. Stripe에서 설정을 마치면 등록 내용이 하이퍼클래스에도 표시돼요.

![Stripe 세금 등록 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064754901/original/4Ij_0yF8V7tMfzmcrglQO0LziHCiOQalqA.png?1770887947)

{% hint style="info" %}
Stripe는 고객의 청구지 주소와 등록해 둔 관할 지역을 기준으로 세금을 자동 계산해요.
{% endhint %}

## 3단계. 상품 세금 코드 선택하기

1. **상품 세금 코드**에서 드롭다운을 열고 알맞은 세금 코드를 선택하세요.
2. **저장**을 클릭하세요.

![상품 세금 코드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064754924/original/MRUKOshVSHro3aGkKl_h2XTMzWlLlydPyQ.png?1770887961)

{% hint style="info" %}
선택한 세금 코드에 따라 Stripe가 SaaS 상품의 세금을 계산하는 방식이 정해져요. 판매하는 상품 유형과 현지 세무 전문가의 조언에 맞춰 세금 코드를 고르세요.
{% endhint %}

## 4단계. 세금 적용 방식 설정하기

1. **Tax Behaviour**(세금 적용 방식)에서 기본으로 쓸 설정을 선택하세요.
   - **Automatic**(자동): 미국과 캐나다에서는 세금 별도 가격(exclusive)을, 그 외 모든 관할 지역에서는 세금 포함 가격(inclusive)을 사용해요.
   - **Inclusive**(세금 포함): 표시된 가격에 세금이 포함돼요.
   - **Exclusive**(세금 별도): 표시된 가격에 세금이 추가로 붙어요.
2. **저장**을 클릭하세요.

![세금 적용 방식 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064754954/original/6TM0ZMg4SKwReBEWPEQkwjiI0CMbRqt6qg.png?1770887988)

## 5단계. 카테고리별 설정 바꾸기 (선택)

1. **Category Level Overrides**(카테고리별 재정의)까지 스크롤하세요.
2. 카테고리 옆의 편집 아이콘을 클릭하세요. 다음 작업을 할 수 있어요.
   - 해당 카테고리의 세금 징수 켜기·끄기
   - 세금 적용 방식 지정(**Inclusive** / **Exclusive** / **기본**)
3. **변경사항 저장**을 클릭하세요.

![카테고리별 세금 설정 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064754996/original/SwM6kBUBq_eLhY_4p_JCnwujSeVEtg-pgQ.png?1770887999)

{% hint style="info" %}
여기서 바꾼 설정은 선택한 카테고리에만 적용되고, 전체 설정보다 먼저 적용돼요.
{% endhint %}

## 알아 둘 점

- 모든 세금 설정은 앞으로 적용되는 구독에만 반영돼요.
- 이미 활성 상태인 구독은 소급해서 업데이트되지 않아요.
- 결제 주기 중간에 설정을 바꿔도 활성 구독은 기존 세금 설정을 그대로 유지해요.
- 결제 실패나 해지로 비활성 상태가 된 구독을 나중에 다시 활성화하면 가장 최근의 세금 설정이 적용돼요.
- 이 기능은 SaaS V1에서 Stripe를 쓰는 에이전시만 사용할 수 있어요. SaaS V2와 다른 결제 제공업체는 지원하지 않아요.

## 세금 및 규정 준수 안내

하이퍼클래스는 세무, 법률, 규정 준수에 관한 자문을 제공하지 않아요. 세금 납부 의무는 에이전시가 직접 확인해야 해요. 관할 지역과 사업 형태에 맞게 설정할 수 있도록 현지 세무 전문가와 상담하세요.
