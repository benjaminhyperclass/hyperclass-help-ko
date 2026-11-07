---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003382-workflow-action-course-revoke-offer
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Course Revoke Offer(코스 오퍼 접근 권한 취소)

**Course Revoke Offer**(코스 오퍼 접근 권한 취소) 액션은 연락처의 코스 접근 권한을 자동으로 취소해 줘요. 구독 코스를 관리하거나, 접근 기간을 끝내거나, 조건에 따라 교육 콘텐츠 접근을 막을 때 쓰세요.

## 액션 이름

Course Revoke Offer

## 액션 설명

**Course Revoke Offer** 액션은 정해 둔 조건이 충족되면 연락처의 코스 접근 권한을 자동으로 없애요. 구독이 만료되었거나, 결제에 실패했거나, 코스를 끝마친 경우 등에 쓸 수 있어요.

## 액션 상세 정보

1. 워크플로우에서 사용할 수 있는 액션 목록 중 **Course Revoke Offer**를 선택해요.
2. **Name**(이름)에 설명이 되는 이름을 입력해요. 예: "고급 마케팅 전략 접근 권한 취소"
3. **Select the offer**(오퍼 선택)에서 접근 권한을 취소할 오퍼를 골라요. 예: "월간 구독"
4. 이 액션이 실행될 트리거와 조건을 정해요. 결제 실패, 구독 취소, 특정 날짜 도래 등을 기준으로 삼을 수 있어요.
5. 필요하면 **Additional Options**(추가 옵션)에서 세부 항목을 설정해요. 접근 권한을 취소할 때 연락처에게 알림 이메일을 보내거나, 이후 후속 조치를 위해 연락처에 태그를 붙일 수 있어요.

![Course Revoke Offer 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032509897/original/Vn6Zf6Ejp43W-v8lEygpDpVBEjmZM_jzzg.png?1725882220)

## 예시

**시나리오:** 연락처의 태그가 `expired`로 바뀌면 "고급 마케팅 전략" 코스의 접근 권한을 자동으로 취소하려고 해요.

**워크플로우 설정:**

- **Trigger**(트리거): **Contact tag changed**(연락처 태그 변경), 필터는 tag=expired
- **Action**(액션): **Course Revoke Offer**
  - **Name**: "고급 마케팅 전략 접근 권한 취소"
  - **Course**(코스): "고급 마케팅 전략"
  - **Revocation Condition**(취소 조건): Subscription Expiry(구독 만료)
  <!-- 검토 필요: 원문 내용이 서로 다름 (상세 정보 단계에는 오퍼 선택만 나오고, 예시에는 Course·Revocation Condition 항목이 나옴) -->
- **Action**(액션): **Send email**(이메일 보내기)
  - **Subject**(제목): "고급 마케팅 전략 접근 권한 해제 안내"
  - **Template**(템플릿): "고급 마케팅 전략"
  - **From email and Name**(보내는 이메일 및 이름): 기본값으로 로케이션의 이메일과 이름이 들어가요.

**결과:** 연락처에 `expired` 태그가 추가되면 "고급 마케팅 전략" 코스의 접근 권한이 자동으로 취소돼요. 활성 구독자만 콘텐츠에 접근할 수 있어요.

![워크플로우 예시 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032510100/original/GKe4-YNtAcomnYQlGmub-ILFPrOSQ4aZuQ.png?1725882358)
