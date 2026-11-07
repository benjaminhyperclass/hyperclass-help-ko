---
원문: /support/solutions/articles/155000003533-workflow-action-whatsapp-customer-service-window-check
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — WhatsApp Customer Service Window Check(WhatsApp 고객 서비스 창 확인)

**WhatsApp: Customer Service Window Check** 액션은 자유 형식 메시지를 보내기 전에 고객 서비스 창이 열려 있는지 확인해 줘요. 창이 열려 있을 때는 자유 형식 메시지를 보내고, 닫혀 있을 때는 승인된 템플릿으로 대화를 시작하도록 워크플로우를 나눌 수 있어요.

## 개요

이 액션을 쓰면 자유 형식 메시지를 보내기 전에 고객 서비스 창이 열려 있는지 확인할 수 있어요. 창이 열려 있으면 매월 처음 1,000건의 서비스 대화까지는 추가 비용 없이 자유 형식 메시지를 제한 없이 보낼 수 있어요. 열린 창을 활용해 고객과 소통하면 불필요한 비용을 피할 수 있어요.

## 액션 이름

WhatsApp Customer Service Window Check

## 액션 설명

**WhatsApp: Customer Service Window Check** 액션은 비즈니스와 고객 사이에 활성 상태의 고객 서비스 창이 있는지 판단해요. 고객이 비즈니스에 메시지를 보내면 고객 서비스 창이 열리고, 24시간 동안 유지돼요. 이 시간 동안에는 자유 형식 메시지를 제한 없이 보낼 수 있어요. 창이 닫혀 있으면 새 대화를 시작할 때 미리 승인된 WhatsApp 템플릿만 쓸 수 있어요.

**주요 기능**

- 24시간 고객 서비스 창이 열려 있는지 자동으로 확인해요.
- 창이 열려 있으면 자유 형식 메시지를 보낼 수 있어요.
- 창이 닫혀 있으면 미리 승인된 템플릿으로 대화를 시작해요.
- 매월 무료로 제공되는 1,000건의 서비스 대화를 활용해 메시지 비용을 아낄 수 있어요.

## 액션 설정 방법

1. 사전 준비
   - 하이퍼클래스 서브 계정에서 WhatsApp이 켜져 있어야 해요.
   - 비즈니스가 먼저 메시지를 보내려면 승인된 WhatsApp 템플릿이 필요해요.
   - WhatsApp 서브 계정 설정 가이드와 [WhatsApp 템플릿 만드는 방법](../../31-리셀링/WhatsApp/how-to-create-a-whatsapp-template.md) 가이드를 따라 하세요.
2. **WhatsApp: Customer Service Window Check** 액션 추가
   - **자동화 > 워크플로우**로 이동해 **Create Workflow**(워크플로우 만들기)를 누르고 **처음부터 시작**을 선택하세요.
   - **WhatsApp: Customer Service Window Check**(WhatsApp 고객 서비스 창 확인) 액션을 추가하세요. **Open**(열림)과 **Closed**(닫힘) 두 개의 브랜치가 만들어져요.
3. **Open** 브랜치 설정
   - **Open** 브랜치 아래에서 **WhatsApp Send Message**(WhatsApp 메시지 보내기) 액션을 선택하고 **None - Free Form Message**(없음 - 자유 형식 메시지)를 고르세요.
   - 창이 열려 있으면 제한 없이 자유 형식 메시지를 보낼 수 있고, 매월 1,000건의 무료 대화 혜택을 누릴 수 있어요.
4. **Closed** 브랜치 설정
   - **Closed** 브랜치 아래에서 **WhatsApp Send Message** 액션을 선택하고 승인된 **Marketing/Utility Template**(마케팅/유틸리티 템플릿)을 고르세요.
   - 고객 서비스 창이 닫혀 있으면(최근 24시간 동안 고객의 응답이 없으면) 새 대화를 시작할 때 미리 승인된 템플릿 메시지만 보낼 수 있어요.

![WhatsApp 고객 서비스 창 확인 액션의 Open, Closed 브랜치 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033163427/original/YyPked92VwzcTG2sEIAJF121V1XIj0zMTg.png?1726743482)

## 예시

시나리오: 예약 24시간 후에 고객에게 추가 도움이 필요한지 확인하는 후속 메시지를 보내려고 해요.

워크플로우 구성

- 트리거: **Customer Appointment booked**(고객 예약 완료)
- 액션: **WhatsApp: Customer Service Window Check**
  - **Open** 브랜치: 도움이 필요한지 묻는 자유 형식 후속 메시지를 보내요.
  - **Closed** 브랜치: 미리 승인된 WhatsApp 템플릿 메시지를 보내 대화를 다시 시작해요.

결과: 고객 서비스 창이 열려 있으면 고객이 추가 비용 없이 개인 맞춤 메시지를 받아요. 창이 닫혀 있으면 템플릿 메시지가 발송돼 고객과 다시 대화를 시작해요.

## 자주 묻는 질문

### **None - Free Form Message**와 템플릿을 고르는 건 어떻게 달라요?
**None - Free Form Message**는 24시간 고객 서비스 창 안에서 메시지를 보낼 때 써요. 템플릿은 창 밖에서 마케팅이나 유틸리티 같은 특정 목적의 메시지를 보낼 때 써요.

### 무료 대화 건수는 어디에서 확인하나요?
Facebook Business Manager의 **계정 도구 > 인사이트**에서 확인할 수 있어요.

### 24시간 창이 지난 뒤에도 WhatsApp 자동화를 쓸 수 있나요?
네. 고객 서비스 창이 닫힌 뒤에는 미리 승인된 WhatsApp 템플릿으로 메시지를 보낼 수 있어요.

### 무료 진입점 대화(Free Entry Point Conversation)가 뭐예요?
고객이 "Click to WhatsApp" 광고나 CTA 버튼을 통해 대화를 시작하면 열리는 대화예요. 72시간 동안 유지되고, 자유 형식 메시지와 템플릿 메시지를 모두 보낼 수 있어요.
