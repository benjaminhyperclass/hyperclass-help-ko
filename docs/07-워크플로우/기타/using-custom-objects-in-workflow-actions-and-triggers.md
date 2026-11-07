---
원문: /support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우에서 사용자 지정 객체 트리거·액션 사용하기

이제 워크플로우에서 사용자 지정 객체를 쓸 수 있어요. 객체별 워크플로우를 만들고, 사용자 지정 객체와 관련된 트리거로 워크플로우를 시작해서 일련의 액션으로 업무를 자동화할 수 있어요.

## 새로운 기능

- 사용자 지정 객체 워크플로우: 내가 만든 사용자 지정 객체(예: 주택, 자동차, 반려동물)에 맞는 워크플로우를 만들 수 있어요.
- 사용자 지정 객체 이벤트로 워크플로우 시작: 사용자 지정 객체 전용 트리거로 업무를 자동화할 수 있어요.
- 객체에 맞는 액션 실행: 사용자 지정 객체 레코드를 만들거나 업데이트하거나 비우는 등 객체 전용 액션을 설정하고, 다른 도구와 연결할 수 있어요.

## 사용 방법

1. **워크플로우** 랜딩 페이지로 이동한 뒤 **Create Workflow**(워크플로우 만들기)를 클릭하세요.
2. 설정하려는 객체 기반 워크플로우(Object-based Workflow)를 선택하세요.
3. 아래 트리거와 액션으로 워크플로우를 구성하세요.

## 트리거와 액션

사용자 지정 객체 워크플로우에서는 아래 트리거와 액션을 쓸 수 있어요.

### 트리거(Triggers)

#### **Custom Object**(사용자 지정 객체)

- **Home Created**(주택 생성됨)
- **Home Changed**(주택 변경됨)

#### **Events**(이벤트)

- **Inbound Webhook**(인바운드 웹훅)

### 액션(Actions)

#### **Custom Objects**(사용자 지정 객체)

- **Create Home or Associated Record**(주택 또는 연결된 레코드 생성)
- **Update Home or Associated Record**(주택 또는 연결된 레코드 업데이트)
- **Clear fields of Home or Associated Record**(주택 또는 연결된 레코드의 필드 비우기)
- **Add to Note (Notes)**(메모에 추가): 워크플로우에 등록된 사용자 지정 객체 레코드에 메모를 추가해요.

#### **Send Data**(데이터 전송)

- **Custom Webhook**(커스텀 웹훅)
- **Google Sheets**

#### **Internal**(내부)

- **If / Else**(조건 분기)
- **Wait**(대기)
- **Update Custom Value**(커스텀 값 업데이트)
- **Go To**(이동)
- **Date/Time Formatter**(날짜/시간 형식 변환)
- **Number Formatter**(숫자 형식 변환)
- **Add To Workflow**(워크플로우에 추가)
- **Remove From Workflow**(워크플로우에서 제거)
- **Array Functions**(배열 함수)
- **Drip**(드립)
- **Text Formatter**(텍스트 형식 변환)
- **Custom Code**(커스텀 코드)

#### **Workflow AI**(워크플로우 AI)

- **GPT powered by OpenAI**(OpenAI 기반 GPT)

## 사용 사례

한 부동산 에이전시가 주택 매물을 관리하려고 "주택"이라는 사용자 지정 객체를 쓰고 있어요. 주택 상태 필드가 "종료됨"(매물이 팔렸다는 뜻)으로 바뀌면 레코드 업데이트와 판매 데이터 기록 같은 다음 작업을 자동으로 처리하려고 해요.

트리거:

- **Object Changed**(오브젝트 변경됨): "주택" 객체의 주택 상태 필드가 "종료됨"으로 바뀌면 워크플로우를 시작해요.
워크플로우 액션:

- **Update Associated Object**(연결된 오브젝트 업데이트): 판매된 매물에 연결된 오브젝트(예: "에이전트")를 업데이트해요.
- **Add a Row to Google Sheets**(Google Sheets에 행 추가): Google Sheets 연동을 사용해, 추적과 보고용 공용 문서에 판매 내역을 기록해요.
- **Clear a Field in the Object or Associated Object**(오브젝트 또는 연결된 오브젝트의 필드 비우기): 더 이상 필요 없는 임시 메모와 내부 댓글 커스텀 필드를 비워요.

![워크플로우 설정 화면 예시 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038143416/original/FYosh0xBXvwWJa4Rm8jPBWM8rW6xLW7bFw.jpeg?1733919867)
![워크플로우 설정 화면 예시 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038143418/original/jc9sYbxjs6FjOh5oowlIJ3ZY5MKslMQDbA.jpeg?1733919867)
![워크플로우 설정 화면 예시 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038143417/original/2vxYX2GNKd0aEHop-1NDAAxpafbrLklkmg.jpeg?1733919867)

## 자주 묻는 질문

### 사용자 지정 객체 워크플로우로 다른 플랫폼에 데이터를 보낼 수 있나요?

네, 보낼 수 있어요. 웹훅 같은 액션을 쓰면 사용자 지정 객체 레코드의 데이터를 외부 도구로 보낼 수 있어요. 리포트 작성, 재고 시스템과의 동기화, 사용자 지정 객체 이벤트에 따른 외부 서비스 실행에 특히 유용해요.

### 워크플로우에서 쓰기 전에 사용자 지정 객체를 먼저 만들어야 하나요?

네, 먼저 만들어야 해요. 사용자 지정 객체를 만들고 필드를 정의해야 워크플로우의 트리거나 액션에서 쓸 수 있어요.
