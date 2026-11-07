---
원문: /support/solutions/articles/48000979920-how-to-add-a-manual-call-action-to-a-workflow
번역일: 2026-11-07
카테고리: 03-대화
---

# 워크플로우에 수동 통화 액션 추가하기

워크플로우 트리거 조건이 충족되면 통화 작업이 자동으로 만들어지도록 수동 통화 액션을 추가하는 방법을 안내해요. 영업이나 고객 지원 후속 조치처럼 직접 전화해야 하는 상황에 알맞아요.

## 수동 통화 액션이란?

수동 통화 액션은 하이퍼클래스 워크플로우에서 쓰는 수동 작업의 한 종류예요. 태그, 폼 제출, 예약 같은 워크플로우 트리거를 기준으로 팀원에게 발신 통화 작업을 배정해 줘요. 워크플로우가 실행되면 해당 연락처가 **대화**의 **수동 작업** 탭에 나타나요.

## 수동 통화 액션의 장점

- 자동화 유연성: 워크플로우에서 통화 작업을 자동으로 배정할 수 있어요.
- 워크플로우 효율: 담당자가 한 탭에서 발신 통화 목록을 관리할 수 있어요.
- 작업 추적: **Yet to Call**(통화 전), **Completed**(완료) 같은 상태를 확인해 후속 조치를 놓치지 않을 수 있어요.
- 사용자 지정 트리거: 연락처 태그, 폼 제출, 파이프라인 단계 변경 등을 기준으로 실행할 수 있어요.

## 워크플로우에 수동 통화 액션 추가하기

수동 통화 액션은 **워크플로우 빌더**에서 수동 작업(**Manual Action**) 단계로 추가해요. 아래 순서대로 설정하세요.

1. 왼쪽 메뉴에서 **마케팅**을 클릭하세요.
2. **+ Create Workflow**(워크플로우 만들기)를 클릭해 새 워크플로우를 만드세요.

   ![워크플로우 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047763929/original/exTyzYKY_4JgYGECkaEEzEzRzdyhB09qEg.png?1749064306)
3. **+ Add Trigger**(트리거 추가)를 클릭하고 트리거를 선택하세요.
4. 트리거를 추가한 뒤, 트리거 아래의 **+** 아이콘을 클릭해 새 액션을 추가하세요.

   ![트리거 아래에서 액션 추가하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047763961/original/mtgAI8HjCeBUWPZUTATMnBYDDe8xJJxz6w.png?1749064384)
5. **Manual Action To Call**(통화 수동 작업) 액션을 선택하세요.
6. **액션 이름을 입력하세요** 입력란에 "수동 통화" 같은 이름을 입력하세요.

   ![수동 통화 액션 선택하고 이름 입력하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047763879/original/L47Yx7IJxY6aoYxVubGslT4b-Al_oovZUA.png?1749064236)
7. **저장**을 클릭한 다음 워크플로우를 **게시**하세요.

   ![워크플로우 저장 및 게시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047763871/original/ctbfEgEilorZyDUA2lTlBVjv5XpIaNxngg.png?1749064211)

## 배정된 수동 통화 확인하기

워크플로우가 실행되면 수동 통화 액션에 배정된 연락처가 **대화** 화면의 **수동 작업** 탭에 나타나요. 아래 순서로 찾아서 확인하세요.

1. 왼쪽 메뉴에서 **대화**를 클릭하세요.
2. 화면 위쪽의 **수동 작업** 탭을 클릭하세요.
3. 워크플로우가 만든 수동 작업 목록을 확인하세요.

   ![수동 작업 탭의 작업 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047764201/original/Vy3wbnNP6Q3NHw8yHieTpW1Wk4GMhEuztg.png?1749064996)

## 자주 묻는 질문

### 수동 통화를 특정 사용자에게 배정할 수 있나요?
네. **Manual Action**(수동 작업) 단계에서 통화를 특정 사용자에게 배정하거나, 라운드 로빈 방식으로 돌아가며 배정할 수 있어요.

### 통화 결과나 메모는 어디에서 확인하나요?
통화가 끝난 뒤 연락처 기록에서 바로 통화 메모와 결과를 남길 수 있어요.

### **수동 작업** 탭에 나타난 수동 통화 작업은 어떻게 시작하나요?
**수동 작업** 탭에서 해당 작업 옆의 **Let's Start**(시작하기) 버튼을 클릭하세요.
