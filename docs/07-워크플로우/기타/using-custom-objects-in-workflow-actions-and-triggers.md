---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 워크플로우 액션과 트리거에서 커스텀 오브젝트 활용하기

커스텀 오브젝트가 이제 워크플로우에서 사용할 수 있습니다! 이 새로운 기능을 통해 오브젝트별 맞춤 워크플로우를 만들 수 있어요. 커스텀 오브젝트 관련 트리거를 기반으로 워크플로우를 실행하고, 일련의 액션을 정의해서 프로세스를 자동화하세요.

---

목차

- [새로운 기능](#새로운-기능)
- [작동 원리](#작동-원리)
- [액션과 트리거](#액션과-트리거)
  - [트리거](#트리거)
  - [액션](#액션)
- [활용 사례](#활용-사례)

---

## 새로운 기능

- **커스텀 오브젝트 워크플로우**: 커스텀 오브젝트(예: 매물, 자동차, 펜트샵 등)별 전용 워크플로우를 만들 수 있어요.

- **커스텀 오브젝트 이벤트로 워크플로우 실행**: 커스텀 오브젝트별 강력한 트리거로 프로세스를 자동화할 수 있어요.

- **타겟팅된 액션 실행**: 커스텀 오브젝트 레코드 생성, 업데이트, 필드 초기화 등 오브젝트별 액션을 정의하고 다른 도구와 연동하세요.

---

## 작동 원리

- 워크플로우(Workflow) 메인 페이지로 가서 워크플로우 생성(Create Workflow)을 클릭하세요.

- 설정하려는 오브젝트 기반 워크플로우(Object-based Workflow)를 선택하세요.

- 아래 트리거와 액션으로 워크플로우를 커스터마이징하세요.

---

## 액션과 트리거

커스텀 오브젝트 워크플로우에서 사용할 수 있는 액션과 트리거는 다음과 같아요:

### 트리거

#### 커스텀 오브젝트(Custom Object)

- 매물 생성됨(Home Created)

- 매물 변경됨(Home Changed)

#### 이벤트(Events)

- 인바운드 웹훅(Inbound Webhook)

### 액션

#### 커스텀 오브젝트(Custom Objects)

- 매물 또는 관련 레코드 생성(Create Home or Associated Record)

- 매물 또는 관련 레코드 업데이트(Update Home or Associated Record)

- 매물 또는 관련 레코드 필드 초기화(Clear fields of Home or Associated Record)

#### 데이터 전송(Send Data)

- 커스텀 웹훅(Custom Webhook)

- 구글 시트(Google Sheets)

#### 내부(Internal)

- 조건 분기(If / Else)

- 대기(Wait)

- 커스텀 값 업데이트(Update Custom Value)

- 이동(Go To)

- 날짜/시간 포맷터(Date/Time Formatter)

- 숫자 포맷터(Number Formatter)

- 워크플로우 추가(Add To Workflow)

- 워크플로우 제거(Remove From Workflow)

- 배열 함수(Array Functions)

- 드립(Drip)

- 텍스트 포맷터(Text Formatter)

- 커스텀 코드(Custom Code)

#### 워크플로우 AI(Workflow AI)

- OpenAI 기반 GPT

---

## 활용 사례

부동산 중개소에서 "매물(Home)"이라는 커스텀 오브젝트로 매물 정보를 관리하고 있습니다. 매물 상태 필드가 "완료(Closed)"로 표시되면(매물이 팔렸다는 의미), 레코드 업데이트와 영업 데이터 기록을 자동화하고 싶어해요.

**트리거:**

- 오브젝트 변경됨(Object Changed): "매물" 오브젝트의 매물 상태 필드가 "완료"로 변경될 때 워크플로우를 실행합니다.

**워크플로우 액션:**

- 관련 오브젝트 업데이트(Update Associated Object): 팔린 매물과 연결된 관련 오브젝트(예: "담당자")를 업데이트합니다.

- 구글 시트에 행 추가(Add a Row to Google Sheets): 구글 시트 연동을 사용해서 중앙 집중식 문서에 영업 내역을 기록하여 추적과 보고를 합니다.

- 오브젝트 또는 관련 오브젝트 필드 초기화(Clear a Field in the Object or Associated Object): 더 이상 필요하지 않은 임시 메모와 내부 코멘트 커스텀 필드를 초기화합니다.

![커스텀 오브젝트 워크플로우 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038143416/original/FYosh0xBXvwWJa4Rm8jPBWM8rW6xLW7bFw.jpeg?1733919867)

![워크플로우 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038143418/original/jc9sYbxjs6FjOh5oowlIJ3ZY5MKslMQDbA.jpeg?1733919867)

![커스텀 오브젝트 필드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038143417/original/2vxYX2GNKd0aEHop-1NDAAxpafbrLklkmg.jpeg?1733919867)

---

## 자주 묻는 질문

**커스텀 오브젝트 워크플로우로 다른 플랫폼에 데이터를 전송할 수 있나요?**

네. 웹훅 같은 액션을 사용해서 커스텀 오브젝트 레코드 데이터를 서드파티 도구로 전송할 수 있어요. 보고서 작성, 재고 시스템과 동기화, 커스텀 오브젝트 이벤트 기반으로 외부 서비스를 실행하는 데 특히 유용해요.

**워크플로우에서 사용하기 전에 커스텀 오브젝트를 먼저 만들어야 하나요?**

네. 워크플로우 트리거나 액션에서 사용하려면 먼저 커스텀 오브젝트를 만들고 필드를 정의해야 해요.

---

## 관련 문서

- 커스텀 오브젝트 시작하기
- 커스텀 오브젝트 레코드 생성 및 업데이트
- 커스텀 오브젝트 연관관계
- 커스텀 오브젝트 생성 및 편집

---
*원문 최종 수정: Wed, 29 Oct, 2025 at 11:52 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*