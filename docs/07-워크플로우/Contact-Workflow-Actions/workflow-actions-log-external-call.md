---
원문: /support/solutions/articles/155000003460-workflow-actions-log-external-call
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Log External Call(외부 통화 기록)

**Log External Call**(외부 통화 기록) 액션은 외부 통화 도구에서 이루어진 통화를 CRM에 기록해 주는 워크플로우 액션이에요. 통화 정보를 한곳에 모아 두고 싶을 때 사용하세요.

## 개요

이 액션을 쓰면 타사 통화 도구에서 이루어진 외부 통화를 CRM에 올릴 수 있어요. 모든 커뮤니케이션 내역이 CRM에 모여서 추적하고 관리하기 편해요. 통화 녹음도 이 액션으로 함께 전달할 수 있고, 녹음은 연락처의 **대화** 섹션에서 볼 수 있어요.

## 액션 이름

**Log External Call**(외부 통화 기록)

## 액션 설명

이 액션은 커뮤니케이션 기록을 정확하게 남기고, 고객과 주고받은 내용을 추적하고, 모든 팀원이 고객 관계 상태를 파악하는 데 필요해요. 이 액션을 쓰면 CRM 활용도를 높이고 전체 커뮤니케이션 전략을 개선할 수 있어요.

## 설정 방법

**Log External Call** 액션은 **Inbound Webhook**(인바운드 웹훅) 트리거와 함께 쓰면 좋아요. 이 트리거는 웹훅 URL을 제공해요. 통화 시스템에서 통화가 생길 때마다 이 URL을 호출해 통화 정보를 보낼 수 있어요.

1. **Inbound Webhook** 트리거를 설정해요. 설정 방법은 Inbound Webhook Trigger 도움말 문서에서 확인할 수 있어요.
2. 트리거를 설정했으면 **If/Else**(조건 분기)를 추가하고 **direction** 필드를 조건으로 지정해서 수신 통화 흐름과 발신 통화 흐름을 나눠요.

   ![If/Else 분기에 direction 필드를 지정한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991613/original/24LrQDtH5ygw9I_ZcbbhTvV06Dx1LMXJrQ.jpeg?1726563970)

   {% hint style="info" %}
   **direction** 필드는 **Inbound Webhook** 트리거 옵션에서 선택할 수 있어요.
   {% endhint %}

   ![Inbound Webhook 트리거 옵션에서 direction 필드를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991607/original/9993xT0LYviYnfBNoc19VQhWgDIbcBec5A.png?1726563969)

3. 수신 통화와 발신 통화 두 분기를 만든 뒤, 각 분기에 **Create Contact**(연락처 만들기) 액션을 추가해요. 이 액션은 웹훅으로 넘어온 전화번호로, 통화를 기록할 연락처를 찾아요.
4. **Create Contact** 액션에서 **Phone**(전화번호) 필드를 연결해요.
   - 수신 통화 분기: **From Number**(발신 번호)
   - 발신 통화 분기: **To Number**(수신 번호)

   이렇게 하면 해당 전화번호의 연락처를 만들거나 찾아요.

   ![Create Contact 액션에서 Phone 필드를 연결한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991610/original/RZWcAM1IHNjcp_ZQUg7ePzD7zzINYFUSZA.png?1726563970)

5. 그다음 **Log External Call** 액션을 추가해요.

   ![Log External Call 액션을 추가한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991614/original/U0E3hTX1vSzhRyybhI8Ch4MQIRxYiVZXwQ.jpeg?1726563970)

6. **Direction**, **Date**, **To**, **From**, **Call Status**, **Attachment** 필드마다 커스텀 값 아이콘 > **Inbound Webhook** 트리거를 차례로 선택해서 알맞은 값을 연결해요.

   ![커스텀 값 아이콘에서 Inbound Webhook 트리거 값을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991609/original/qPGcACU6zpiSZjFADSXRRLWRHWyOn12x-A.png?1726563970)

7. 워크플로우를 **Publish**(게시)해요. 그러면 외부 통화가 CRM에 기록되고, 연락처의 **대화** 섹션에서 확인할 수 있어요.

   ![연락처의 대화 섹션에 기록된 외부 통화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991611/original/3rKb5m94uSvBK4htvBkU8CSlfk8w7hRMUw.jpeg?1726563970)
