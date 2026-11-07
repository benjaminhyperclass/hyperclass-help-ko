---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002474-workflow-action-send-sms
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Send SMS(SMS 전송)

**Send SMS**(SMS 전송) 액션을 쓰면 워크플로우 안에서 연락처에게 문자 메시지를 바로 보낼 수 있어요. 이 문서에서는 액션을 설정하는 순서와 함께, 예약 알림이나 프로모션 안내 같은 실제 활용 예시를 소개해요.

## Send SMS 액션이란?

**Send SMS** 액션은 자동화된 워크플로우의 한 단계로 맞춤 문자 메시지를 보내는 액션이에요. 조건, 트리거, 일정에 따라 메시지가 나가기 때문에 알맞은 때에 연락할 수 있어요. 연락처 이름 같은 동적 필드로 내용을 맞춤 설정할 수 있고, URL로 첨부 자료를 함께 보낼 수도 있어요.

## 언제 쓰면 좋나요?

**Send SMS** 액션은 적절한 시점에 대상을 정해 연락해야 할 때 잘 맞아요.

- 예약 알림: 자동 알림으로 노쇼를 줄여요.
- 프로모션 안내: 할인이나 혜택 소식을 고객의 휴대폰으로 바로 전해요.
- 주문 현황 안내: 주문한 상품이 발송되면 고객에게 알려요.
- 이벤트 안내: 일정이 바뀌거나 취소되면 참석자에게 알려요.

## Send SMS 액션 설정 순서

### 1단계: Send SMS 액션 추가

1. 워크플로우 편집 화면을 열어요. 새 워크플로우를 만들어도 되고, 실습용으로 기존 워크플로우를 선택해도 돼요.

   ![워크플로우 편집 화면 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717482/original/P3-hyXNpkiRB39FUnx2QwQd-wmjTFBmbgw.png?1733302478)

2. **Send SMS** 액션을 원하는 트리거나 조건 뒤로 끌어다 놓아요.

   ![Send SMS 액션을 워크플로우에 끌어다 놓기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717484/original/8S5CFrbAzmyxz1YN9Wt4QLIwyVsBvHeUyg.png?1733302492)

### 2단계: 액션 이름 정하기

- 워크플로우에서 쉽게 알아볼 수 있도록 "예약 알림 SMS"처럼 내용을 알 수 있는 이름을 붙여요.

![액션 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717512/original/m7ce-UIp_VUuhzge0y9nX7fL870VCyEsnA.png?1733302519)

### 3단계: 메시지 작성

- **Message**(메시지): SMS 내용을 작성해요. `{{contact.first_name}}` 같은 동적 필드를 넣으면 받는 사람에 맞춰 내용을 바꿀 수 있어요.

  ![Message 입력란에 SMS 내용 작성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717520/original/4HaY46EhBTWCmgtwkDOviN3Wg1j-g96ZGA.png?1733302544)

- **Templates**(템플릿): 미리 만들어 둔 템플릿이 있으면 골라서 시간을 아낄 수 있어요.

  ![Templates에서 템플릿 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717749/original/XInvYP3fZNNF1mDamdkOrbhDjU1l4TEpQw.png?1733302717)

### 4단계: 첨부 추가(선택)

**Add Attachments**(첨부파일 추가)에서 URL로 파일이나 자료를 첨부할 수 있어요. 지도, 티켓, 안내문 같은 자료를 보낼 때 쓰세요.

![Add Attachments에서 URL로 첨부](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717564/original/kEC9Ya3v5wlKY_JgiNfgxjRYREl82TPgHA.png?1733302566)

### 5단계: SMS 테스트

워크플로우를 켜기 전에 **Test Phone Number**(테스트 전화번호) 입력란으로 메시지를 미리 확인하고 테스트할 수 있어요.

1. **Test Phone Number** 입력란 옆의 국가 깃발을 확인해요. 기본값은 서브 계정의 국가예요.
2. 다른 국가를 쓰려면 깃발을 클릭한 뒤 국가 이름이나 국가 번호로 검색해요.
3. 선택한 국가의 현지 형식으로 전화번호를 입력하고 **Send test SMS**(테스트 SMS 발송)를 클릭해요.

![Test Phone Number 입력란과 Send test SMS 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079722813/original/3shK6hN_PUfcsr0PPYzvft9w5L9xS5qTAA.png?1788189413)

### 6단계: 워크플로우 저장 및 테스트

- 워크플로우를 저장한 뒤, 샘플 데이터로 테스트해서 SMS가 의도한 대로 나가는지 확인해요.

![워크플로우 저장 후 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717636/original/MhyfQA1O-cBNHGsREX8QLgHsHiXIiAKatg.png?1733302611)

## 활용 예시

### 단계별 예약 알림

시나리오: 예약 알림으로 노쇼를 줄여요.

![예약 알림 워크플로우 전체 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037720188/original/IupbkZVZZnwlVj79eRr6EgHdqO95uVN8YA.png?1733304377)

워크플로우:

1. 트리거: 고객이 예약했을 때
2. 액션 1: 예약 24시간 전까지 대기해요.
3. 액션 2: 24시간 전에 알림 SMS를 보내요.

   **Message**:

   > 안녕하세요 `{{contact.first_name}}`님, 내일 `{{appointment.start_time}}`에 예약이 있어서 알려 드려요. 뵙기를 기다리고 있을게요!

   ![24시간 전 알림 SMS 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037720211/original/IMO9U8SvgmQjahCbhZfEcElJjFBb0dkcaA.png?1733304392)

4. 액션 3: 예약 1시간 전까지 대기해요.

   ![1시간 전까지 대기 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037720224/original/4w617tEuBrSk6w_d_R2iHdaSg3o0_lQ23A.png?1733304411)

5. 액션 4: 예약 1시간 전에 알림 SMS를 한 번 더 보내요.

   **Message**:

   > 안녕하세요 `{{contact.first_name}}`님, 1시간 뒤 `{{appointment.start_time}}`에 예약이 있어요. 곧 만나요!

## 자주 묻는 질문

### Send SMS 액션으로 보내는 문자를 연락처별로 다르게 쓸 수 있나요?
네. **Send SMS** 액션은 동적 필드를 지원해서 연락처 이름, 예약 시간, 커스텀 필드 같은 연락처·예약 정보를 메시지에 넣을 수 있어요. 받는 사람에게 더 맞는 메시지를 보낼 수 있어요.

### SMS에 링크나 첨부파일을 넣을 수 있나요?
네. SMS에는 파일을 직접 첨부할 수 없지만, 파일, 문서, 지도, 티켓 같은 온라인 자료로 연결되는 URL은 넣을 수 있어요.

### 워크플로우를 켜기 전에 SMS를 테스트할 수 있나요?
네. **Send SMS** 액션의 **Test Phone Number** 입력란에서 워크플로우를 켜기 전에 테스트 메시지를 보내 볼 수 있어요. 메시지 내용과 동적 필드가 제대로 나오는지 확인하세요.

### 워크플로우에서 SMS는 언제 발송되나요?
워크플로우가 **Send SMS** 액션에 도달하면 SMS가 발송돼요. 앞에서 설정한 트리거, 조건, 대기 단계에 따라 도달 시점이 정해지므로 발송 타이밍을 세밀하게 조절할 수 있어요.
