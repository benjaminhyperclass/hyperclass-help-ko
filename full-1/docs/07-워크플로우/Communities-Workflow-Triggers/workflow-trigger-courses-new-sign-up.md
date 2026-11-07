---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003098-workflow-trigger-courses-new-sign-up
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Courses New Sign Up(코스 신규 가입)

**New Signup**(신규 가입) 트리거는 새 고객이 처음으로 가입하거나 구매할 때 워크플로우를 자동으로 시작해요. 신규 회원을 환영하거나 온보딩 안내를 보내고 싶을 때 쓰세요.

## 개요

**New Signup** 트리거는 새 고객이 멤버십 오퍼, 서비스, 상품(예: **커뮤니티 그룹**)을 **처음으로** 구매하거나 가입할 때 워크플로우를 자동으로 시작해요. 신규 회원을 환영하거나, 온보딩 정보를 보내거나, 가입 혜택을 제공할 때 특히 유용해요.

{% hint style="info" %}
**New Signup** 트리거로 워크플로우를 실행하려는 연락처가 이미 다른 방법으로 **멤버십 오퍼**나 **커뮤니티 그룹** 접근 권한을 받았다면, 이 트리거는 작동하지 않아요.
{% endhint %}

## 트리거 이름

**New Signup**

## 트리거 설명

**New Signup** 트리거는 새 고객이 제안(Offer), 멤버십 등 내가 제공하는 서비스에 가입하면 워크플로우를 시작해요. 이 트리거로 웰컴 이메일을 자동으로 보내거나, 자료 접근 권한을 주거나, 신규 고객의 프로필에 특정 태그를 붙일 수 있어요.

## 설정 방법

![New Signup 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031250884/original/v4G0iHiP_bgAkWP9KjrgltVQ2btT3IfWRw.png?1724056828)

**New Signup** 트리거를 설정하려면 **Workflow Trigger Name**(워크플로우 트리거 이름)을 정하고, 확인하려는 **Offer**(제안)나 조건을 기준으로 필터를 설정하세요.

| 필드 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Workflow Trigger Name** | 트리거를 쉽게 알아볼 수 있도록 붙이는 이름이에요. | 예 |
| **Offer** | 신규 가입과 관련된 제안을 지정해요(예: 할인 또는 특정 멤버십). | 아니요 |

## 예시

![15% Early Bird Discount 제안으로 설정한 New Signup 트리거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031251169/original/0AZYu07Mbu7vKdg7ewxA-oD4Uk3HzgvgeA.png?1724056969)

이 예시는 고객이 멤버십에 가입하면서 "15% Early Bird Discount" 제안을 선택했을 때 워크플로우가 시작되도록 설정한 모습이에요.

1. **Workflow Trigger Name:** Course `New Sign Up`
2. **Offer:** `15% Early Bird Discount`

#### 예시 워크플로우

고객이 "15% Early Bird Discount" 제안으로 멤버십에 가입하면 다음과 같은 작업을 실행할 수 있어요.

- 웰컴 이메일 보내기: 신규 회원에게 맞춤 웰컴 이메일을 자동으로 보내 다음 단계와 필요한 정보를 안내해요.
- 고객에게 태그 추가: 고객 프로필에 "Early Bird" 같은 태그를 붙여, 이후 캠페인에서 쉽게 분류할 수 있어요.

이렇게 설정하면 고객이 "15% Early Bird Discount" 제안으로 가입했을 때만 워크플로우가 실행돼요. 대상에 맞는 자동 작업을 보낼 수 있어요.
