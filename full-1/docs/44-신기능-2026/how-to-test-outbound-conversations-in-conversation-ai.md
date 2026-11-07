---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009354-how-to-test-outbound-conversations-in-conversation-ai
번역일: 2026-11-06
카테고리: 44-신기능-2026
---

# 대화 AI에서 아웃바운드 대화 테스트하기

하이퍼클래스의 **에이전트 테스트하기**에서 실제 메시지를 보내지 않고 아웃바운드 대화를 미리 시험해 볼 수 있어요. 에이전트가 먼저 보내는 첫 메시지를 확인하고, 리드가 된 것처럼 답장하며 응답을 점검한 뒤 **배포**에서 활성화 설정을 마무리하세요.

## 에이전트 테스트하기란?

[동영상](https://jumpshare.com/embed/jMOKtmQZfZIPZxkv0Wh7)

**에이전트 테스트하기**는 대화 AI에 들어 있는 테스트 도구예요. 에이전트를 배포하기 전에 고객과의 대화를 미리 시뮬레이션해 볼 수 있어요. 아웃바운드 테스트에서는 트리거와 테스트 연락처를 고르면 에이전트가 먼저 거는 대화가 어떻게 시작되는지 볼 수 있어요. 그다음 리드가 된 것처럼 답장하면서 대화를 점검하면 돼요. 채널별로 인터랙티브 메시지가 어떻게 보이는지도 미리 볼 수 있어요.

이번에 추가·개선된 기능은 다음과 같아요.

| 기능 | 설명 |
| --- | --- |
| 아웃바운드 테스트 | 트리거, 테스트 연락처, 개인화된 첫 메시지로 에이전트가 먼저 시작하는 대화를 시뮬레이션해요. |
| 리치 요소 미리보기 | 버튼, 빠른 답장, 목록, 이미지, 파일이 지원되는 메시징 채널에서 어떻게 보이는지 테스트해요. |
| 새로 바뀐 **배포** 탭 | 인바운드 채널, 아웃바운드 활성화, 트리거, 근무 시간을 한곳에서 관리해요. |

{% hint style="warning" %}
테스트 메시지는 시뮬레이션이에요. 실제 연락처에는 전송되지 않아요.
{% endhint %}

---

## 에이전트 테스트하기의 아웃바운드 테스트

아웃바운드 테스트에서는 신규 리드 제출처럼 미리 설정한 트리거 이후에 에이전트가 대화를 어떻게 시작하는지 시뮬레이션해요. 실제 이벤트가 일어나기를 기다릴 필요가 없어요. 트리거와 테스트 연락처를 고르면 그 연락처의 정보로 만든 첫 메시지를 미리 볼 수 있어요. 이어서 리드가 된 것처럼 대화를 이어 가며 에이전트의 응답을 확인하세요.

### 아웃바운드 테스트 설정 항목

**Outbound test setup**(아웃바운드 테스트 설정)에서는 시뮬레이션 대화를 시작할 때 쓰는 정보를 설정해요. 에이전트가 실제 리드와 대화하기 전에 첫 메시지와 개인화가 제대로 되는지 확인할 수 있어요.

| 설정 | 설명 |
| --- | --- |
| **트리거** | 시뮬레이션 아웃바운드 대화를 시작하는 이벤트를 선택해요. |
| **테스트 연락처** | 첫 메시지를 개인화할 때 정보를 가져올 연락처를 선택해요. |
| **Test Values**(테스트 값) | 시뮬레이션에서 연락처 정보 대신 쓸 값을 직접 입력해요. 입력은 선택 사항이에요. |
| **Opening Message**(첫 메시지) | 선택한 연락처와 테스트 값으로 만든, 에이전트가 처음 보낼 메시지를 미리 봐요. |

![아웃바운드 테스트 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084106314/original/ZhpXIT8WXRe-OcujjGz8935rY3vNSZy0FQ.png?1792810171)

### 테스트 값과 메시지 개인화

테스트 값을 쓰면 선택한 연락처에 저장된 정보를 바꾸지 않고도 에이전트가 아웃바운드 메시지를 어떻게 개인화하는지 확인할 수 있어요. 테스트 값을 입력하면 연락처의 해당 값보다 테스트 값이 우선 적용돼요. 비워 두면 연락처에 저장된 정보를 그대로 사용해요.

예를 들어 아웃바운드 첫 메시지에 다음 값이 쓰일 수 있어요.

- `{{contact.first_name}}` — Sushil
- `{{contact.property_type}}` — 주거용
- `{{contact.budget_range}}` — 150k–200k

첫 메시지 예시:

"안녕하세요, Sushil 님. 시더앤키 부동산의 마야예요. 아직 오스틴에서 예산 150k–200k의 주거용 부동산을 찾고 계신가요? 가능한 매물을 함께 살펴봐 드릴게요."

테스트가 시작되면 리드가 된 것처럼 답장하면서 에이전트가 대화를 어떻게 이어 가는지 확인해 보세요.

![테스트 값으로 만든 첫 메시지 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084106323/original/7Q1V-zyfDOqYjYoGu8YWmowr_ZcDD176Mg.png?1792810222)

---

## 리치 요소와 채널별 미리보기

**에이전트 테스트하기**에서는 인터랙티브 메시지가 지원되는 각 채널에서 어떻게 보이는지도 미리 볼 수 있어요. 채널마다 메시지가 표시되는 방식이 달라요. **Preview as**(미리보기 기준)에서 채널을 선택하면 고객이 버튼, 빠른 답장, 목록, 이미지, 파일을 어떻게 보게 되는지 확인할 수 있어요.

| 채널 | 미리보기 방식 |
| --- | --- |
| **Live Chat**(실시간 채팅) | 인터랙티브 버튼 |
| Instagram | 빠른 답장 |
| Facebook | 빠른 답장 |
| WhatsApp | 빠른 답장과 선택형 목록 |
| **Supported Media**(지원 미디어) | 이미지 미리보기와 PDF를 포함한 파일 첨부 |

인터랙티브 응답을 선택하거나 직접 메시지를 입력해서 에이전트가 대화를 어떻게 이어 가는지 테스트할 수 있어요.

예를 들어 에이전트가 고객에게 부동산을 구매, 임대, 판매 중 무엇으로 원하는지 물었다면 임대를 선택해 보세요. 에이전트가 알맞은 대화 흐름으로 이어 가는지 확인할 수 있어요.

![구매·임대·판매 선택 버튼 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084106358/original/wiF3Pevm-0S2FBFAnKzVHmVki67u99LOHA.png?1792810420)

WhatsApp 목록 미리보기에서는 이용 가능한 지역이나 서비스 카테고리처럼 구조화된 목록에서 항목을 고를 수도 있어요.

![WhatsApp 선택형 목록 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084106359/original/SNkByoxufZGncdOCb_4nQAn3_rzkgSankg.png?1792810447)

이미지는 대화 안에 미리보기로 나타나고, PDF 같은 문서는 파일 첨부로 나타나요.

![이미지 미리보기와 PDF 파일 첨부](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084106363/original/RoZvdWjDIMryX-jWNxA1818W9igJhLeltA.png?1792810466)

{% hint style="info" %}
사용할 수 있는 리치 요소와 표시 방식은 선택한 채널과 에이전트 설정에 따라 달라요.
{% endhint %}

---

## 새로 바뀐 배포 탭

새로 바뀐 **배포** 탭에서는 테스트를 마친 뒤 에이전트가 어떻게 소통할지 한곳에서 설정할 수 있어요. 인바운드 채널, 아웃바운드 활성화, 트리거, 근무 시간을 설정 화면을 오가지 않고 관리하세요.

| 설정 | 용도 |
| --- | --- |
| **Inbound Channels**(인바운드 채널) | 고객이 보낸 메시지에 에이전트가 응답할 채널을 관리해요. |
| **Outbound Channels & Activation**(아웃바운드 채널 및 활성화) | 에이전트가 먼저 시작하는 대화에 쓸 채널을 설정해요. |
| **트리거** | 아웃바운드 대화를 시작하는 이벤트를 정의해요. |
| **근무 시간** | 선택한 채널에서 에이전트가 응답할 수 있는 시간을 설정해요. |

![배포 탭 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084106372/original/lC3vZKv_BJkJaZEAohGFJzFraMfNPbtDqA.png?1792810535)

자세한 내용은 'Conversation AI 봇 채널 및 라우팅 관리' 문서와 [대화 AI 근무 시간](../13-AI-Employee/Conversation-AI/working-hours-for-conversation-ai.md) 문서를 참고하세요.

---

## 대화 AI 에이전트 테스트하는 방법

트리거와 테스트 연락처로 아웃바운드 대화를 시뮬레이션하면, 에이전트를 실제로 운영하기 전에 개인화된 메시지와 에이전트의 응답을 확인할 수 있어요.

1. **AI 에이전트 > 대화 AI > Agents List**(에이전트 목록)로 이동해 에이전트를 열고 **Build**(빌드) 탭을 선택하세요.
2. **에이전트 테스트하기**에서 **Starts with**(시작 방식) 아래의 **Outbound**(아웃바운드)를 선택하고, **Preview as** 아래에서 채널을 선택하세요.
3. **Outbound test setup** 아래의 **편집**을 클릭하세요.

   ![아웃바운드 테스트 설정의 편집 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084106735/original/ILSqKqRd9SfOGr1xS4h3q_Kpv1QjecsYLw.png?1792811866)
4. **트리거**와 **테스트 연락처**를 선택하고, 필요하면 **Test Values**를 입력하세요.
5. **Opening Message** 미리보기를 확인하고 **저장**을 클릭하세요.

   ![첫 메시지 미리보기를 확인하고 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084106496/original/dNBRsGYUgSoB5pv7k9vcU3LN3EzExk9wQA.png?1792811181)
6. **에이전트 테스트하기**를 클릭한 뒤, 리드가 된 것처럼 답장하며 대화를 확인하세요. 테스트 값이나 답변을 바꿔 가며 다른 상황도 테스트해 보세요.

   ![에이전트 테스트하기 진행 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084106517/original/DbUTaQ8XsEBMeP24hBxxlu5EWdFYBCbgVQ.gif?1792811284)
7. 결과가 만족스러우면 **배포**를 열어 실제 운영 전에 인바운드 채널, 아웃바운드 활성화, 트리거, 근무 시간을 확인하세요.

   ![배포 탭에서 설정 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084106532/original/rJ_bAYmYLJF9IrouRXWW7aqoFrsC0rkqng.png?1792811302)

{% hint style="info" %}
리치 요소를 테스트하려면 **Starts with** 아래에서 **Inbound**(인바운드)를 선택하고, 채널을 고른 뒤 버튼, 빠른 답장, 목록을 눌러 보세요.
{% endhint %}

---

## 자주 묻는 질문

### 아웃바운드 테스트를 하면 선택한 테스트 연락처에 메시지가 가나요?

아니요. 아웃바운드 테스트는 선택한 연락처나 다른 실제 고객에게 메시지를 보내지 않고 대화를 시뮬레이션해요.

### 테스트 값을 비워 두면 어떻게 되나요?

시뮬레이션에서 선택한 테스트 연락처에 저장된 해당 정보를 사용해요.

### 아웃바운드 첫 메시지에 연락처 정보가 잘못 나오거나 빠져 있어요.

선택한 테스트 연락처와 **Test Values**에 입력한 값을 확인하세요. 입력한 테스트 값은 연락처에 저장된 정보보다 우선 적용되고, 비워 둔 항목은 연락처의 해당 값을 사용해요. 테스트를 시작하기 전에 필요한 정보가 모두 있는지 확인하세요.

### 아웃바운드를 켰는데 에이전트가 아웃바운드 대화를 시작하지 않아요.

**배포** 탭에서 알맞은 아웃바운드 채널이 활성화되어 있는지, 트리거가 설정되어 있는지 확인하세요. 아웃바운드를 활성화하는 것만으로는 트리거 기반 대화가 시작되지 않을 수 있어요.
