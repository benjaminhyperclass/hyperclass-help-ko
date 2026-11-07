---
원문: /support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우와 캠페인·트리거 비교 (사용이 중단된 기능)

캠페인과 트리거는 더 이상 쓰지 않는 기능이에요. 워크플로우는 트리거와 액션으로 자동화를 더 다양하게 만들 수 있어요. 이 문서는 참고용으로, 워크플로우와 캠페인·트리거의 차이와 기능 대응표를 보여 줘요.

워크플로우에서는 조건 분기(if-else), 대기 시간, 수학 연산 등을 쓸 수 있어요. 전체적으로 워크플로우가 더 폭넓고 강력한 자동화 방법이에요.

## 캠페인과 트리거를 워크플로우로 바꾸면 좋은 이유

- 워크플로우는 if/else 조건과 필터를 쓸 수 있어서, 대상에 맞춘 자동화를 만들 수 있어요.
- 트리거와 캠페인을 하나의 시스템으로 묶어 더 간단하게 운영할 수 있어요.
- 워크플로우에는 상태·실행 로그가 있어서 문제를 찾고 리드 상태를 추적하기 쉬워요.
- 온보딩과 런칭 단계에서 품질 확인을 위해 테스트하기 쉬워서, 고객사에서 제대로 동작하는지 점검할 수 있어요.

캠페인을 워크플로우로 가져온 뒤 트리거도 추가하면 자동화를 더 간단하게 운영할 수 있어요.

## 내 서브 계정에 캠페인과 트리거가 보이지 않아요

캠페인과 트리거가 보이려면, 서브 계정이 이 기능을 아직 가지고 있는 예전 서브 계정의 스냅샷으로 만들어져야 해요. 캠페인과 트리거가 없는 마스터 계정의 스냅샷으로 만든 서브 계정이라면 **설정 > 비즈니스 프로필**에서 **Deprecated Features**(사용 중단 기능) 설정이 보이지 않아요.

반대로 트리거와 캠페인이 이미 있는 마스터 서브 계정의 스냅샷으로 만들었다면, **비즈니스 프로필** 설정에서 사용 중단 기능을 켤 수 있는 옵션이 보여요.

![비즈니스 프로필 설정의 사용 중단 기능 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275258351/original/Emshm5q0-4tQqeS7xEEZsYjno4hOKhJqgQ.png?1673624348)

하이퍼클래스는 고객이 캠페인과 트리거 대신 워크플로우를 쓰도록 안내하고 있어요. 그래서 처음부터 이 기능이 없던 서브 계정의 스냅샷으로 만든 서브 계정에서는 두 기능이 자동으로 꺼져 있고, 켤 수 있는 옵션도 없어요.

{% hint style="info" %}
2021년 11월 이후에 만들어진 에이전시에서는 **Deprecated Features Campaigns & Triggers**(사용 중단 기능 캠페인 및 트리거)를 켜는 옵션이 보이지 않아요.
{% endhint %}

## 워크플로우와 트리거 비교

### 트리거 단계 비교표

워크플로우와 트리거가 각각 어떤 트리거 단계를 지원하는지 정리한 표예요.

{% hint style="info" %}
캠페인은 트리거가 연락처를 추가해 주어야 시작할 수 있어요. 또는 **Bulk Add to Campaign**(캠페인에 일괄 추가) 작업이나 **CSV Import Add to Campaign Modal**(CSV 가져오기 캠페인 추가 창)로 연락처를 추가해야 해요.
{% endhint %}

| 트리거 단계 | 워크플로우 | 트리거 |
| --- | --- | --- |
| **Appointments**(예약) | | |
| **Appointment Status**(예약 상태) | 예 | 예 |
| **Customer Booked Appointment**(고객이 예약함) | 예 | 예 |
| **Contact**(연락처) | | |
| **Birthday Reminder**(생일 알림) | 예 | 예 |
| **Contact Changed**(연락처 변경됨) | 예 | 아니요 |
| **Contact Created**(연락처 생성됨) | 예 | 아니요 |
| **Contact DND**(연락처 수신거부) | 예 | 예 |
| **Contact Tag**(연락처 태그) | 예 | 예 |
| **Custom Date Reminder**(커스텀 날짜 알림) | 예 | 예 |
| **Note Added**(메모 추가됨) | 예 | 예 |
| **Note Changed**(메모 변경됨) | 예 | 아니요 |
| **Task Added**(작업 추가됨) | 예 | 예 |
| **Task Reminder**(작업 알림) | 예 | 예 |
| **Contact Actions**(연락처 액션) | | |
| **Customer Replied**(고객 답장) | 예 | 예 |
| **Form Submitted**(폼 제출) | 예 | 예 |
| **Order Form Submission**(주문 폼 제출) | 예 | 예 |
| **Order Submitted**(주문 제출됨) | 예 | 아니요 |
| **Survey Submitted**(설문 제출) | 예 | 예 |
| **Trigger Link Clicked**(트리거 링크 클릭됨) | 예 | 예 |
| **Twilio Validation Error**(Twilio 검증 오류) | 예 | 예 |
| **Events**(이벤트) | | |
| **Call Status**(통화 상태) | 예 | 예 |
| **Email Events**(이메일 이벤트) | 예 | 예 |
| **Facebook** | | |
| **Facebook Lead Form Submitted**(Facebook 리드 폼 제출) | 예 | 예 |
| **Membership**(멤버십) | | |
| **Category Completed**(카테고리 완료) | 예 | 아니요 |
| **Membership New Signup**(멤버십 신규 가입) | 예 | 예 |
| **Offer Access Granted**(오퍼 접근 권한 부여) | 예 | 예 |
| **Offer Access Removed**(오퍼 접근 권한 제거) | 예 | 예 |
| **Product Access Granted**(상품 접근 권한 부여) | 예 | 예 |
| **Product Access Removed**(상품 접근 권한 제거) | 예 | 예 |
| **Product Completed**(상품 완료) | 예 | 예 |
| **User Login**(사용자 로그인) | 예 | 예 |
| **Opportunities**(기회 관리) | | |
| **Opportunity Status Changed**(기회 상태 변경) | 예 | 예 |
| **Pipeline Stage Changed**(파이프라인 단계 변경) | 예 | 예 |
| **Stale Opportunities**(정체된 기회) | 예 | 예 |
| **Payments**(결제) | | |
| **Invoice**(인보이스) | 예 | 아니요 |
| **Shopify** | | |
| **Abandoned Checkout**(결제 중단) | 예 | 아니요 |
| **Order Placed**(주문 완료) | 예 | 아니요 |
| **Order Fulfilled**(주문 이행 완료) | 예 | 아니요 |
| **Media**(미디어) | | |
| **Video**(비디오) | 예 | 아니요 |
| **TikTok** | | |
| **TikTok Form Submitted**(TikTok 폼 제출) | 예 | 아니요 |

### 자동화 액션 비교표

워크플로우, 캠페인, 트리거가 각각 어떤 액션 단계를 지원하는지 정리한 표예요.

| 액션 | 워크플로우 | 캠페인 | 트리거 |
| --- | --- | --- | --- |
| **External Communications**(외부 커뮤니케이션) | | | |
| **Send Email**(이메일 보내기) | 예 | 예 | 예 |
| **Send SMS**(SMS 보내기) | 예 | 예 | 예 |
| **Call**(통화) | 예 | 예 | 아니요 |
| **Voicemail**(음성 사서함) | 예 | 예 | 아니요 |
| **Messenger** | 예 | 예 | 아니요 |
| **Instagram DM** | 예 | 아니요 | 아니요 |
| **Manual SMS**(수동 SMS) | 예 | 예 | 아니요 |
| **Manual Call**(수동 통화) | 예 | 예 | 아니요 |
| **GMB Messaging**(GMB 메시징) | 예 | 예 | 아니요 |
| **CRM** | | | |
| **Add Contact Tag**(연락처 태그 추가) | 예 | 아니요 | 예 |
| **Remove Contact Tag**(연락처 태그 제거) | 예 | 아니요 | 예 |
| **Create/Update Opportunity**(기회 생성/업데이트) | 예 | 아니요 | 예 |
| **Add To Notes**(메모에 추가) | 예 | 아니요 | 예 |
| **Assign To User**(사용자에게 배정) | 예 | 아니요 | 예 |
| **Remove Assigned User**(할당된 사용자 제거) | 예 | 아니요 | 예 |
| **Set Event Start Date**(이벤트 시작 날짜 설정) | 예 | 아니요 | 예 |
| **Add To Workflow**(워크플로우에 추가) | 예 | 아니요 | 아니요 |
| **Remove From Workflow**(워크플로우에서 제거) | 예 | 아니요 | 아니요 |
| **Remove From All Workflows**(모든 워크플로우에서 제거) | 예 | 아니요 | 아니요 |
| **Remove From Campaign**(캠페인에서 제거) | 아니요 | 아니요 | 예 |
| **Remove From All Campaigns**(모든 캠페인에서 제거) | 아니요 | 아니요 | 예 |
| **Add to Campaign**(캠페인에 추가) | 아니요 | 아니요 | 예 |
| **Remove Opportunity**(기회 제거) | 예 | 아니요 | 예 |
| **Send Internal Notification**(내부 알림 보내기) | 예 | 아니요 | 예 |
| **Set Contact DND**(연락처 수신거부 설정) | 예 | 아니요 | 예 |
| **Edit Conversation**(대화 편집) | 예 | 아니요 | 예 (**Mark as Read**(읽음으로 표시)만 가능) |
| **Send Review Request**(리뷰 요청 보내기) | 예 | 아니요 | 아니요 |
| **Stripe One-Time Charge**(Stripe 일회성 결제) | 예 | 아니요 | 예 |
| **Update Appointment Status**(예약 상태 업데이트) | 예 | 아니요 | 예 |
| **Add Task**(작업 추가) | 예 | 아니요 | 예 |
| **AI Appointment Booking Bot**(AI 예약 부킹 봇) | 예 | 아니요 | 아니요 |
| **Send To Eliza Agent Platform**(Eliza 에이전트 플랫폼으로 보내기) | 예 | 아니요 | 아니요 |
| **Add To Google Analytics**(Google Analytics에 추가) | 예 | 아니요 | 예 |
| **Add to Google Adwords**(Google Adwords에 추가) | 예 | 아니요 | 예 |
| **Update Contact Field**(연락처 필드 업데이트) | 예 | 아니요 | 예 |
| **Facebook - Add To Custom Audience**(Facebook 맞춤 타깃에 추가) | 예 | 아니요 | 아니요 |
| **Facebook - Remove From Custom Audience**(Facebook 맞춤 타깃에서 제거) | 예 | 아니요 | 아니요 |
| **Facebook - Conversion API**(Facebook 전환 API) | 예 | 아니요 | 아니요 |
| **Membership Actions**(멤버십 액션) | | | |
| **Membership Grant Offer**(멤버십 오퍼 부여) | 예 | 아니요 | 예 |
| **Membership Revoke Offer**(멤버십 오퍼 회수) | 예 | 아니요 | 예 |
| **Conditions and workflow**(조건 및 워크플로우) | | | |
| **If / Else**(조건 분기) | 예 | 아니요 | 아니요 |
| **Wait**(대기) | 예 | 예 | 아니요 |
| **Webhook**(웹훅) | 예 | 예 | 예 |
| **Go To**(이동) | 예 | 아니요 | 아니요 |
| **Math Operation**(수학 연산) | 예 | 아니요 | 아니요 |
| **Goal Event**(목표 이벤트) | 예 | 아니요 | 아니요 |
