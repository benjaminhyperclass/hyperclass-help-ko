---
원문: https://help.gohighlevel.com/support/solutions/articles/48001156789-how-to-send-inbound-sms-notifications-via-a-workflow
번역일: 2026-11-06
카테고리: 15-전화-시스템
---

# 워크플로우로 수신 SMS 알림 보내기

연락처가 문자 메시지를 보내면 **Customer Replied**(고객 답장) 워크플로우 트리거로 팀원에게 SMS 알림을 보낼 수 있어요. 이 문서에서는 트리거 설정, 메시지 내용 추가, 반복 답장 관리, 문제 해결 방법을 안내해요.

## 개요

수신 SMS 메시지는 하이퍼클래스의 **대화** 탭에 저장돼요. 전화번호의 착신 전환 설정을 켜 두어도 수신 SMS가 다른 전화번호로 자동 전달되지는 않아요.

연락처가 답장했을 때 팀에도 SMS 알림이 필요하다면, **Customer Replied** 워크플로우를 만들어 수신 메시지가 담긴 내부 SMS 알림을 따로 보내면 돼요.

## 수신 SMS 알림 전달이란?

수신 SMS 알림 전달은 연락처가 SMS를 보냈을 때 워크플로우로 내부 사용자에게 알려 주는 방식이에요. 원래 메시지는 **대화**에 그대로 남아요. 워크플로우는 그 메시지의 정보를 담은 내부 알림을 따로 만들어 보내요.

통화 착신 전환과는 달라요. 통화를 전달할 번호를 설정해도 수신 문자 메시지가 같은 번호로 자동 전달되지는 않아요.

### 수신 SMS 알림의 장점

내부 SMS 알림을 설정하면 팀원이 **대화**를 계속 지켜보지 않아도 답장이 왔다는 사실을 알 수 있어요. 동적 값을 넣으면 누가 어떤 내용으로 답장했는지도 알림에서 바로 확인할 수 있어요.

- 빠른 답장 인지: 연락처가 수신 SMS를 보내면 팀원에게 알려요.
- 메시지 맥락 제공: 연락처 이름, 수신 메시지 본문 같은 동적 값을 넣을 수 있어요.
- 유연한 수신자 설정: 내부 알림 액션에서 지원하는 사용자, 역할, 팀에게 알림을 보낼 수 있어요.
- 채널 제어: **Reply Channel**(답장 채널)을 SMS로 지정하면 다른 채널의 답장으로는 이 SMS 알림 워크플로우가 실행되지 않아요.

### 워크플로우가 동작하는 방식

워크플로우는 수신 SMS 답장만 감지한 뒤, 선택한 수신자에게 새 내부 알림을 보내요. 연락처가 보낸 원래 SMS는 **대화**에 그대로 남고, 옮겨지거나 바뀌지 않아요.

1. 연락처가 SMS를 보내요.
2. 메시지가 **대화**에 표시돼요.
3. **Customer Replied** 트리거가 답장을 감지해요.
4. **Reply Channel = SMS** 필터가 SMS로 온 메시지인지 확인해요.
5. 워크플로우가 메시지 내용이 담긴 **Internal Notification**(내부 알림)을 보내요.

{% hint style="warning" %}
워크플로우는 **새 내부 알림**을 보내요. 전화번호의 착신 전환 설정으로 원래 SMS 대화를 그대로 전달하지는 않아요.
{% endhint %}

## 수신 SMS 알림 설정하기

트리거 필터를 알맞게 설정하면 워크플로우가 수신 SMS 답장에만 반응해요. 알림을 누가 받을지, 어떤 정보를 담을지는 내부 알림 액션에서 정해요. 실제 대화에 쓰기 전에 꼭 테스트해 보세요.

### 1단계. 새 워크플로우 만들기

1. **자동화 > 워크플로우 > Create Workflow**(워크플로우 만들기)로 이동하세요.

   ![자동화 메뉴에서 워크플로우와 워크플로우 만들기를 보여 주는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054130737/original/95tUaOX4SPgqFWq8o42zKkLBOrb3tjWtdA.png?1758279172)

2. **처음부터 시작**을 선택한 다음 **Create New Workflow**(새 워크플로우 만들기)를 선택하세요.

   ![처음부터 시작을 선택하고 새 워크플로우 만들기를 누르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054130880/original/H-26rH1GF0MkZOOQL1iKd1V_1tzRhIcl5g.png?1758279262)

### 2단계. Customer Replied 트리거 추가하기

1. **Add New Workflow Trigger**(새 워크플로우 트리거 추가)를 클릭하세요.

   ![워크플로우 빌더의 새 워크플로우 트리거 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131077/original/HOq864JsX-wWx1cruXGdObKDsvKSPJ05FA.png?1758279349)

2. **Customer Replied**를 선택하세요.

   ![워크플로우 트리거로 Customer Replied를 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131310/original/51XMxxiWX-u4o-Kl0w4oApwzqZDavHBnqw.png?1758279423)

### 3단계. SMS 답장만 감지하도록 트리거 필터 설정하기

1. **Add Filters**(필터 추가)를 클릭하세요.

   ![Customer Replied 트리거 설정의 필터 추가 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131335/original/0fpNZPq7R2UlUM6JFbgvlu_PAdMnq6j2fQ.png?1758279461)

2. **Reply Channel**을 선택하세요.

   ![Reply Channel 필터를 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131523/original/6qbjI1i223rfhQpNppjcwA_F6uARI6fPHw.png?1758279519)

3. **Reply Channel** 값으로 **SMS**를 선택하세요.

   ![Reply Channel 드롭다운에서 SMS를 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131571/original/g_oLzHXTS11l9bLBtjbxWzvvLXFKS_yKLw.png?1758279548)

4. **Save Trigger**(트리거 저장)를 클릭하세요.

   ![트리거 저장 버튼과 워크플로우 액션 추가 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131595/original/o3pLYwY_EgdHXo0ZNMn7dVP5B-N8olGW_Q.png?1758279574)

### 4단계. 내부 알림 액션 추가하기

1. 트리거 아래의 액션 추가 영역을 클릭하고 **Send Internal Notification**(내부 알림 보내기)을 선택하세요.

   {% hint style="warning" %}
   메시지 요금: SMS 내부 알림은 발신 SMS로 집계되어 해당 메시지 요금이 발생해요.
   {% endhint %}

   ![워크플로우 액션으로 Send Internal Notification을 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131685/original/AUl9fAcdFRTqir3wrdvPRqlqpK14SQ55gg.png?1758279623)

2. 알림 유형으로 **SMS**를 선택하고, 설정에서 지원하는 내부 수신자 중 알맞은 사람을 선택하세요.

   ![내부 SMS 알림 설정 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131784/original/mK9gRU0NiByWvt9VPG3n_e-oUo4dLNKwFQ.png?1758279666)

### 5단계. 수신 메시지 본문 넣기

알림 메시지 입력란에서 **커스텀 값** 선택 창을 열고 **메시지 > 메시지 본문**을 선택하세요. 그러면 **{{message.body}}** 가 입력돼요. 이 값은 워크플로우를 실행시킨 답장의 내용을 보여 줘요.

![커스텀 값 선택 창에서 메시지 본문을 고르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131877/original/fUx-zzkaWf67vLqw4LGymFTCmAxkow8q8Q.png?1758279735)

### 6단계. 연락처 정보 넣기

**연락처 > 이름**처럼 쓸모 있는 연락처 값을 추가하세요. 그러면 알림에서 누가 메시지를 보냈는지 알 수 있어요.

![커스텀 값 선택 창에서 연락처 이름을 고르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054132059/original/CfQHim1rFFEmNoNrFnjOC4B78pxkyUJtrg.png?1758279821)

알림 예시:

```
New SMS from {{contact.first_name}}:
{{message.body}}
```

### 7단계. 워크플로우 게시하고 테스트하기

액션을 저장하고 워크플로우를 게시하세요. 그다음 연락처로 테스트 SMS 답장을 보내 보세요. 수신 메시지가 **대화**에 표시되는지, 지정한 내부 수신자가 별도의 SMS 알림을 받는지 확인하세요.

## 반복 SMS 답장을 위한 재진입 설정

**Allow Re-entry**(재진입 허용)는 같은 연락처가 워크플로우를 마친 뒤 다시 들어올 수 있는지를 정해요. 연락처가 시간이 지나 여러 번 답장할 수 있으므로, 수신 SMS 알림 워크플로우에서는 이 설정이 중요해요.

- **Allow Re-entry**를 켠 경우: 연락처가 워크플로우를 완료했거나 직접 제거된 뒤에 다시 들어올 수 있어요.
- **Allow Re-entry**를 끈 경우: 연락처는 워크플로우에 한 번만 들어와 완료할 수 있어요.

{% hint style="warning" %}
연락처가 워크플로우에서 아직 진행 중이면 다시 들어올 수 없어요. 단순한 알림 워크플로우라면 연락처가 다음 조건에 맞는 답장을 보내기 전에 끝나도록 짧게 구성하세요.
{% endhint %}

## 수신 SMS 알림 문제 해결

알림 문제는 대부분 트리거 필터, 워크플로우 상태, 수신자 설정, 재진입 설정, SMS 전송 제한 중 하나에서 생겨요. 이 항목들을 순서대로 확인하면 알림이 오지 않은 이유를 빠르게 찾을 수 있어요.

### 워크플로우가 실행되지 않아요

- 트리거가 **Customer Replied**인지 확인하세요.
- 필터가 **Reply Channel = SMS**인지 확인하세요.
- 워크플로우가 게시되어 활성 상태인지 확인하세요.
- 연락처가 이미 워크플로우를 완료했다면 **Allow Re-entry**가 켜져 있는지 확인하세요.

### 알림 액션은 실행됐는데 사용자가 SMS를 받지 못했어요

- 알림을 받을 내부 사용자에게 올바른 전화번호가 설정되어 있는지 확인하세요.
- 워크플로우 실행 기록에서 오류가 있는지 확인하세요.
- 실패한 SMS는 **대화** 또는 메시지 로그에서 확인하세요. 가능한 경우 오류 코드도 볼 수 있어요.

### 알림이 너무 길어요

알림 SMS 본문이 약 1,600자를 넘으면 전송에 실패할 수 있어요. **{{message.body}}** 처럼 길이가 긴 동적 값을 넣었을 때 이런 일이 생길 수 있어요. SMS 알림 내용은 짧게 유지하세요. 긴 내용이 예상된다면 다른 내부 알림 채널을 사용하세요.

## 자주 묻는 질문

### SMS 내부 알림을 보낼 때마다 요금이 부과되나요?
네. SMS 내부 알림은 발신 메시지로 집계되어 해당 SMS 요금이 발생할 수 있어요. 알림이 많이 발생한다면 앱 내 알림이나 이메일 내부 알림을 대신 사용해 보세요.

### 수신 SMS 원본이 그대로 전달되나요?
아니요. 수신 메시지 원본은 **대화**에 그대로 남아요. 워크플로우는 별도의 내부 알림을 만들고, 이 알림에 **{{message.body}}** 로 원래 메시지 내용을 담을 수 있어요.

### 같은 연락처가 SMS를 또 보내면 매번 알림이 오나요?
연락처가 워크플로우에 다시 들어올 수 있는 상태일 때만 알림이 와요. 워크플로우를 완료한 뒤 같은 연락처가 다시 들어오게 하려면 **Allow Re-entry**를 켜세요.

### {{message.body}} 에는 무엇이 들어가나요?
워크플로우를 실행시킨 답장의 메시지 내용이 들어가요. 그 결과로 만들어진 SMS 알림이 너무 길어지면 전송에 실패할 수 있으니, 알림 템플릿은 짧게 유지하세요.

### 팀원 여러 명에게 알림을 보낼 수 있나요?
네. 알림 설정에 따라 내부 알림은 지원되는 사용자, 역할, 팀을 대상으로 보낼 수 있어요. SMS 수신자마다 메시지 사용량이 발생할 수 있어요.

### Customer Replied 트리거로 이메일이나 채팅 답장도 감지할 수 있나요?
네. **Customer Replied** 트리거는 여러 답장 채널 필터를 지원해요. 다른 채널의 알림이 필요하면 해당 **Reply Channel** 필터를 설정하거나 워크플로우를 따로 만들어서, 채널별로 알림을 관리하세요.

### 내부 알림을 보내면 연락처에게 확인 메시지가 가나요?
아니요. **Internal Notification** 액션은 내부 수신자에게만 알리고, 연락처에게 자동으로 답장하지 않아요. 연락처에게 자동 응답을 보내고 싶다면 **Send SMS**(SMS 전송) 액션을 따로 추가하세요.
