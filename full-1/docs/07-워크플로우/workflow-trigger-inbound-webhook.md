---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Inbound Webhook(인바운드 웹훅)

**Inbound Webhook**(인바운드 웹훅) 트리거는 외부 앱에서 들어오는 데이터를 받아 워크플로우를 시작해요. 이 트리거를 쓰면 하이퍼클래스와 다른 서비스를 연결해 업무를 자동화할 수 있어요.

## 개요

**Inbound Webhook** 트리거를 쓰면 외부 앱에서 보낸 데이터를 기준으로 워크플로우를 시작할 수 있어요. 하이퍼클래스와 여러 외부 시스템을 연동해 업무 처리를 자동화하세요.

![Inbound Webhook 트리거 개요 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038188260/original/67OQWezOayG-eUPTmc1KZVQbTX7zBT9Ohw.png?1733981713)

## 트리거 이름

Inbound Webhook Trigger

## 트리거 설명

**Inbound Webhook** 트리거는 하이퍼클래스 웹훅 URL로 들어오는 POST/GET/PUT 요청을 받아요. 웹훅 URL은 트리거마다 고유해요.

이 트리거 덕분에 폼 제출, 결제 알림, 그 밖의 데이터 변경처럼 외부 앱에서 일어난 이벤트에 맞춰 반응할 수 있어요. 하이퍼클래스 워크플로우에서 실시간으로 업데이트하고 자동화할 수 있어요.

## 설정 방법

1. 워크플로우를 열어요.
   1. 하이퍼클래스에서 워크플로우를 열거나 새로 만드세요.
   2. **Workflow Trigger**(워크플로우 트리거)에서 **Inbound Webhook**을 선택하세요.
2. 웹훅 URL을 만들어요. 워크플로우에 고유한 웹훅 URL이 자동으로 생성돼요. 이 URL을 복사해 외부 앱에서 사용하세요.
3. 외부 앱을 설정해요. Zapier, Integromat 같은 외부 앱에서 하이퍼클래스 웹훅 URL로 데이터를 보내는 트리거를 만드세요. 복사한 URL로 POST 요청을 보내도록 액션을 설정하고, 필요한 데이터를 JSON 형식으로 담아 보내세요.
4. 연동을 테스트해요. 외부 앱에서 하이퍼클래스 웹훅 URL로 테스트 요청을 보내 연동이 제대로 동작하는지 확인하세요.
5. 들어온 데이터를 매핑해요. 하이퍼클래스에서 외부 앱이 보낸 데이터를 선택해 워크플로우의 관련 필드나 변수에 연결할 수 있어요.
6. 트리거를 저장해요. 설정을 마쳤으면 **Save Trigger**(트리거 저장)를 클릭해 마무리하세요.

![Inbound Webhook 트리거 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031444906/original/44KhZdg6jRYEKvatR44mFrP0Y5lSPRbiIw.png?1724257903)

![Inbound Webhook 트리거 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031444679/original/EMappgdTQdfUdofgJgtHGiUs1oMp0ZndPw.png?1724257643)

## 예시

### 시나리오: 결제 대행 서비스 연동

1. 웹훅 URL: 하이퍼클래스에서 워크플로우를 만들고 웹훅 URL을 생성해요.
2. 외부 앱 설정: Stripe 같은 결제 처리 앱에서 결제가 성공하면 실행되는 웹훅을 설정해요. 결제 정보를 JSON 형식으로 담아 하이퍼클래스 웹훅 URL로 POST 요청을 보내도록 구성하세요.
3. 전송되는 데이터: JSON 페이로드는 다음과 같을 수 있어요.

   ```
   {
     "customer_id": "CUST_001",
     "amount": 100,
     "currency": "USD",
     "status": "successful"
   }
   ```

4. 워크플로우 액션: 이 데이터를 받으면 하이퍼클래스 워크플로우에서 다음과 같이 처리하도록 설정할 수 있어요.
   - 리드의 상태를 "결제 완료"로 업데이트해요.
   - 고객에게 확인 이메일을 보내요.
   - 결제 상태에 따라 추가 후속 액션을 실행해요.

이 연동으로 실시간 업데이트와 자동화가 가능해져서, 하이퍼클래스 CRM 업무를 더 효율적으로 처리할 수 있어요.
