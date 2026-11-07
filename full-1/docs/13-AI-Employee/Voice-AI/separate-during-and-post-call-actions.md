---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005267-separate-during-call-and-post-call-actions-in-voice-ai
번역일: 2026-11-07
카테고리: 13-AI-Employee
---

# 음성 AI 통화 중 액션과 통화 후 액션 나누기

음성 AI 에이전트의 액션은 통화 중에 실행할 액션과 통화가 끝난 뒤에 실행할 액션으로 나뉘어 있어요. 에이전트가 통화 중에 무엇을 하고 통화 후에 무엇이 실행되는지 구분해서 관리할 수 있어요. 액션은 카드, 탭, 설정 창으로 보여 주기 때문에 만들고 확인하고 수정하고 관리하기가 쉬워요.

## 통화 중 액션과 통화 후 액션을 나누면 좋은 점

- 실행 시점이 분명해요: 어떤 액션이 대화 중에 실행되고 어떤 액션이 통화 후에 실행되는지 한눈에 볼 수 있어요.
- 대화가 더 자연스러워져요: 꼭 통화 중에 하지 않아도 되는 연락처 업데이트를 통화 후로 옮기면, 에이전트가 불필요한 확인 질문으로 대화를 끊지 않아요.
- 액션 관리가 빨라져요: 각 액션 카드에서 바로 확인, 편집, 삭제할 수 있어요.
- 자동화를 유연하게 구성할 수 있어요: 통화 전환이나 예약 같은 실시간 액션과 통화 후 데이터 업데이트 등 지원되는 자동화를 함께 쓸 수 있어요.
- 설정을 안내해 줘요: 카운터, 제한, 설정 안내가 화면에 표시되어 지원하지 않는 액션 구성을 막아 줘요.

## 새 액션 추가하기

1. 편집할 음성 AI 에이전트를 열고 **+ New Action**(새 액션 추가)을 클릭하세요.

   ![음성 AI 에이전트에서 새 액션 추가 버튼 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077220323/original/ns8m1CxbVAAXfej1HZHnhh_736yQhwgRWQ.png?1785405521)
2. 설정할 액션 유형을 선택하세요. 예를 들어 **연락처 필드 업데이트**를 선택해요.

   ![액션 유형 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077220495/original/NsICyRQRyrpFBgI_E3dpYbfXDGRUtgSCLw.png?1785405579)
3. 설정 창이 열리면 필요한 내용을 입력하세요.

   ![액션 설정 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077220612/original/OJ8VH1BbdMUKbDH7-G5w4Y0Ajuk4eMW86w.png?1785405617)
4. **저장**을 클릭하세요. 새 액션이 해당하는 탭 아래에 카드로 나타나요.

## 지원하는 액션 유형

### 통화 중 액션

- **통화 전환**
- **워크플로우 트리거**
- **Send SMS**(SMS 보내기)
- **예약하기**
- **사용자 지정 액션**(**베타**)
- **연락처 필드 업데이트**

### 통화 후 액션

- **연락처 필드 업데이트**: 통화가 끝난 뒤, 통화 상대의 말을 끊거나 추가 확인을 요청하지 않고 조용히 연락처를 업데이트해요.

![통화 후 액션 탭 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081225242/original/YjhrRgFOTe8LwjHGV84xk93kV7cnVHEo-g.png?1789669669)

## 연락처 필드 업데이트 실행 시점 선택하기

**연락처 필드 업데이트** 액션을 설정할 때 음성 AI가 연락처를 업데이트할 시점을 고를 수 있어요.

**During the Call**(통화 중)

음성 AI가 대화 중에 바로 업데이트하고 확인 멘트를 함께 말해요. 에이전트가 업데이트한 정보를 통화 상대에게 알리거나 확인받아야 할 때 이 옵션을 쓰세요.

**After the Call**(통화 후)

음성 AI가 대화가 끝난 뒤에 조용히 업데이트해요. 통화 상대의 말을 끊지 않아야 하거나 대화에 확인 질문을 더하고 싶지 않을 때 이 옵션을 쓰세요. 도시, 주소, 선호 사항 같은 연락처 정보를 업데이트할 때 쓰면 대화가 자연스럽게 이어져요.

![연락처 필드 업데이트 실행 시점 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077219883/original/1wSlhaTRz4I_1j4B3Sm-suahqhJfbPOqMg.png?1785405307)
