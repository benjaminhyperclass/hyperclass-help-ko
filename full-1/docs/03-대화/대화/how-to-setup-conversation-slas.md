---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006745-how-to-setup-conversation-slas
번역일: 2026-11-06
카테고리: 03-대화
---

# 대화 SLA 설정하기

대화 SLA(서비스 수준 협약)를 설정하면 팀이 일정한 응답 시간을 지키고, 고객 메시지를 놓치지 않을 수 있어요. 이 문서에서는 하이퍼클래스 **대화**에서 SLA를 설정하고 확인하는 방법을 안내해요.

[동영상](https://www.youtube.com/embed/sQye_iw7gxs?&wmode=opaque)

{% hint style="info" %}
이 기능을 쓰려면 **실험실**에서 **CRM Redesign - Conversations + Contact Detail Page (Upgrade)**(CRM 리디자인 - 대화 + 연락처 상세 페이지(업그레이드))를 켜야 해요. SLA는 새 **대화 페이지**에서만 지원돼요.
{% endhint %}

## 대화 SLA란?

대화 SLA(Service-Level Agreement)는 하이퍼클래스 **대화** 수신함의 각 대화 스레드에서 줄어드는 응답 시간 목표예요. 고객의 새 메시지가 도착하면 타이머가 시작돼요. 마감이 가까워질수록 타이머는 회색(정상), 주황색(마감 임박), 빨간색(연체)으로 바뀌어요. 담당자는 SLA를 넘기기 전에 답장해야 한다는 걸 바로 알 수 있어요.

## 대화 SLA의 장점

- 더 빠른 답변: 팀이 답변에 남은 시간을 항상 알 수 있어요.
- 우선순위 정리: 색으로 구분된 타이머 덕분에 가장 급한 스레드가 먼저 눈에 띄어요.
- 채널별 설정: 모든 채널에 같은 SLA를 적용할 수도 있고, 이메일, SMS, Facebook, WhatsApp, TikTok 등 채널마다 다른 목표를 정할 수도 있어요.
- 책임 관리와 리포트: 관리자는 **가장 오래된 SLA 초과**와 **다음 SLA 목표** 기준으로 대화를 필터링하고 정렬해서 코칭이 필요한 부분을 찾을 수 있어요.

## 대화 SLA 설정 방법

### 1단계: SLA 설정 열기

1. 서브 계정에서 **대화** 메뉴를 클릭하세요.
2. 상단 패널에서 **설정** 탭을 클릭하세요.
3. **SLA 설정** 토글을 클릭해 켜세요.
4. 채널별로 응답 시간 목표를 어떻게 적용할지, 수신함에 타이머를 어떻게 보여 줄지 정할 수 있어요.

![SLA 설정 토글을 켜는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056272232/original/FP-IBsgSg9hDzf7iVIMaaiVRjvX-l9EPOw.jpeg?1760716664)

### 2단계: 채널별 SLA 적용 방식 선택

1. **How should SLAs apply across channels?**(SLA를 채널에 어떻게 적용할까요?) 아래에서 다음 중 하나를 선택하세요.

   - **공통 SLA**: 모든 채널에 같은 SLA 규칙을 적용해요.
     예: 이메일, SMS, Facebook, TikTok 등 어느 채널로 온 대화든 1시간 안에 답장해야 해요.
   - **Channel-Specific SLA**(채널별 SLA): 채널마다 다른 응답 시간 목표를 정해요.
     예: SMS는 15분 안에 답장하고, 이메일은 최대 2시간까지 걸려도 돼요.

![채널별 SLA 적용 방식을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064012601/original/y_EPiwyieZm55koUgIROCjhJp9yGWShKXw.png?1770047806)

### 3단계: SLA 시간 정하기

1. 응답 기준이 될 시간 제한을 설정하세요.

   - **Due Soon**(마감 임박): SLA를 넘기기 전에 경고를 보내는 시점이에요. 대화가 이 구간에 들어오면 타이머가 주황색으로 바뀌어요.
   - **연체**: SLA를 놓친 것으로 보는, 응답에 허용된 최대 시간이에요. 이 시간을 넘기면 타이머가 빨간색으로 바뀌어요.

### 4단계: 워크플로우 메시지가 SLA에 미치는 영향 선택

1. 이 섹션에서는 **워크플로우**로 자동 발송된 메시지를 SLA 타이머의 정상 답변으로 칠지 정해요. 자동 응답이 카운트다운을 멈추게 할지, 사람이 보낸 답장만 인정할지 선택할 수 있어요.
2. 워크플로우(자동화) 메시지가 SLA에 어떻게 영향을 줄지 선택하세요.

   - **Count all automation messages as valid responses**(모든 자동화 메시지를 유효한 응답으로 인정): 워크플로우가 메시지를 보낼 때마다 SLA 타이머가 멈춰요.
   - **Don't count automation messages as valid responses**(자동화 메시지를 유효한 응답으로 인정하지 않음): 팀원이 답장할 때까지 타이머가 계속 흘러요.
   - **Count messages only from specific workflows**(특정 워크플로우의 메시지만 인정): 타이머를 멈출 수 있는 워크플로우를 직접 골라요. 선택하지 않은 워크플로우는 타이머를 멈추지 않아요.

![워크플로우 메시지의 SLA 영향을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064013095/original/CKpEPhwCP8Rq1XcPiBCCsX00yp52aGoaOg.png?1770047998)

### 5단계: AI 에이전트 메시지가 SLA에 미치는 영향 선택

1. AI 에이전트의 답변이 SLA에 어떻게 영향을 줄지 선택하세요.

   - **Count AI replies as valid responses**(AI 답변을 유효한 응답으로 인정): AI 에이전트가 답하면 SLA 타이머가 멈춰요. *(기본값)*
   - **Don't count AI replies as valid responses**(AI 답변을 유효한 응답으로 인정하지 않음): 사람 담당자가 답장할 때까지 타이머가 계속 흘러요.

![AI 에이전트 메시지의 SLA 영향을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056272231/original/_x8H6_kSRuPEKMkviYI0ix8xT0a9QmI3Ow.jpeg?1760716664)

### 6단계: 설정 저장하고 적용하기

1. 설정을 모두 마쳤으면 **저장**을 클릭하세요.

   ![저장 버튼을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056272230/original/HOZCSURngiUlOSWNU0VNH4z5GSwq9YomRg.jpeg?1760716664)
2. 이후 새로 들어오는 고객 메시지에는 설정한 내용대로 SLA 타이머가 자동으로 적용돼요. 이미 있던 대화는 변경 전에 적용되던 SLA 규칙을 그대로 따라요.

   ![SLA 설정이 적용된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056272229/original/ArbKPwiroq3oHgpHvB5-yLKF_AuYo4Dm-w.jpeg?1760716664)

## 대화에서 SLA 타이머 확인하기

고객의 새 메시지가 도착하면 수신함 왼쪽의 대화 목록 패널에 SLA 타이머가 나타나요. 타이머는 답변까지 남은 시간을 보여 주고, 현재 상태에 따라 색이 바뀌어요. 담당자가 답장하거나 대화를 직접 읽음으로 표시하면 타이머는 사라져요.

| 상태 | 색상 | 설명 |
| --- | --- | --- |
| **활성** | 회색 | SLA가 정상이고 허용 시간 안에 있어요. |
| **Due Soon** | 주황색 | SLA 응답 마감이 가까워졌어요. |
| **연체** | 빨간색 | SLA 시간을 넘겼어요. |

## SLA로 필터링하고 정렬하기

담당자가 업무량을 더 쉽게 관리할 수 있도록, **대화**에서 SLA 기준 필터와 정렬을 쓸 수 있어요.

- SLA 상태로 필터링: **활성**, **Due Soon**, **연체** 상태인 대화만 볼 수 있어요.
- SLA로 정렬: **가장 오래된 SLA 초과** 또는 **다음 SLA 목표** 순으로 대화를 정렬할 수 있어요.

![SLA 상태 필터와 정렬 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056272225/original/KKT08BzlWtP-Lxd4P3rB7JqkC-6NH2GBjQ.png?1760716663)

## 자주 묻는 질문

### SLA를 켜면 이미 있던 대화에도 적용되나요?
아니요. SLA는 기능을 켠 뒤에 새로 들어오는 메시지에만 적용돼요. 이미 있던 대화는 SLA 추적 없이 그대로 진행돼요.

### SLA를 끄면 어떻게 되나요?
SLA를 끄면 기존 대화는 현재 SLA 타이머를 그대로 따르지만, 새 메시지에는 SLA가 적용되지 않아요. **SLA 설정**에서 언제든 다시 켤 수 있어요.

### 자동화나 AI의 답변도 SLA 타이머를 멈추나요?
설정한 경우에만 멈춰요. 기본값은 워크플로우 메시지는 타이머를 멈추지 않고, AI 메시지는 타이머를 멈추는 거예요. 이 옵션은 **How Workflow and AI Messages Affect SLAs**(워크플로우·AI 메시지가 SLA에 미치는 영향)에서 바꿀 수 있어요.

### SLA 추적에 운영시간이 반영되나요?
아니요. 현재 SLA는 달력상의 시간 기준으로 계산돼요. 운영시간 설정은 이후 업데이트에서 추가될 예정이에요.

### 채널마다 다른 SLA를 정할 수 있나요?
네. 모든 채널에 **공통 SLA**를 적용하거나, **Channel-Specific SLA**(채널별 SLA)로 채널마다 다른 응답 목표를 정할 수 있어요.

### 연체된 대화인지 담당자가 어떻게 알 수 있나요?
**대화**의 SLA 타이머가 색으로 상태를 알려 줘요. 회색은 **활성**, 주황색은 **Due Soon**, 빨간색은 **연체**예요.

### 내부 채팅이나 댓글에도 SLA가 적용되나요?
아니요. SLA는 고객 대화에만 적용되고, 내부 팀 메시지나 댓글에는 적용되지 않아요.

### SLA로 리포트를 만들거나 워크플로우 트리거를 설정할 수 있나요?
아직은 안 돼요. SLA 기반 워크플로우 트리거와 성과 리포트는 이후 단계에서 제공될 예정이에요.

### SLA 설정을 바꾸면 모든 대화에 적용되나요?
아니요. 변경한 SLA는 새로 들어오는 메시지에만 적용돼요. 진행 중인 대화는 시작할 때 적용된 SLA 규칙을 계속 따라요.

### 연락처가 메시지를 여러 번 보내면 SLA 타이머는 어떻게 계산하나요?
SLA 타이머는 대화에서 가장 오래된 고객 메시지를 기준으로 흘러요. 연락처가 추가 메시지를 여러 번 보내더라도, 연락처가 실제로 기다린 시간이 응답 시간에 반영돼요.
