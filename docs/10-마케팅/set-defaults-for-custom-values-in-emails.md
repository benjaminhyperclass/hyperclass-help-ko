---
원문: /support/solutions/articles/155000007825-set-defaults-for-custom-values-in-emails
번역일: 2026-11-06
카테고리: 10-마케팅
---

# 이메일 커스텀 값에 기본값 설정하기

연락처 정보가 비어 있어도 개인화 이메일이 어색해지지 않도록 기본값을 설정할 수 있어요. 기본값이 어떻게 동작하는지, 어디에 쓸 수 있는지, 편집 화면에서 어떻게 구분하는지, 하이퍼클래스 이메일의 커스텀 값에 대체 텍스트를 넣는 방법을 안내해요.

## 이메일 커스텀 값의 기본값이란?

커스텀 값으로 이메일을 개인화하면 메시지가 받는 사람에게 더 와닿아요. 하지만 연락처 정보가 비어 있으면 빈칸이 생겨 어색해 보일 수 있어요. 예를 들어 연락처의 이름이 저장되어 있지 않으면 "Sarah님, 안녕하세요" 대신 "님, 안녕하세요"처럼 표시될 수 있어요.

연결된 연락처 필드가 비어 있으면 하이퍼클래스는 빈칸 대신, 해당 커스텀 값에 설정해 둔 기본값을 보여 줘요. 이때 기본값은 그 커스텀 값을 사용한 위치마다 따로 설정해요.

병합 태그로도 많이 쓰이는 커스텀 값에 기본값을 넣을 수 있는 곳은 다음과 같아요.

- 제목
- 미리보기 텍스트
- 본문

이메일 캠페인, 워크플로우 이메일, 대량 이메일, 이메일 템플릿에서 모두 쓸 수 있어요.

![이메일에서 커스텀 값에 기본값을 설정한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071829515/original/jzoheuCcD2paS9LKd2j_cPV2IQe9-eKuOA.png?1779294916)

---

## 커스텀 값 기본값의 장점

- 더 깔끔한 개인화: 이름, 회사명, 예약 정보 같은 연락처 필드가 비어 있어도 빈칸이 생기지 않아요.
- 더 전문적인 이메일: 제목, 미리보기 텍스트, 본문이 받는 사람에게 가기 전에 매끄럽게 다듬어져요.
- 유연한 메시지: 같은 커스텀 값이라도 이메일 상황에 따라 다른 기본값을 쓸 수 있어요.
- 불완전한 CRM 데이터에도 사용 가능: 일부 연락처 정보가 비어 있어도 이메일을 개인화할 수 있어요.
- 더 읽기 좋은 이메일: 받는 사람이 어색한 빈칸이나 끊긴 문장을 보지 않아요.

---

## 기본값이 동작하는 방식

기본값은 연락처 필드가 없거나 비어 있을 때만 표시돼요. 연락처에 저장된 CRM 데이터를 바꾸거나 덮어쓰지는 않아요. 같은 커스텀 값이 한 이메일에 여러 번 나와도 위치마다 다른 기본값을 쓸 수 있어요.

예를 들어 `{{contact.first_name}}`이 한 이메일에 두 번 나오면, 한 곳은 "there"로, 다른 한 곳은 "friend"로 대체할 수 있어요.

**예시 1: 이름이 없는 경우**

*Hey {{contact.first\_name}}, we are so glad that you signed up!*

기본값: "*there*"

결과:

- 이름이 있는 경우: "*Hey Sarah, we are so glad that you signed up!*"
- 이름이 없는 경우: "*Hey there, we are so glad that you signed up!*"

**예시 2: 제목 개인화**

*"Hi {{contact.first\_name}}, your appointment is confirmed"*

기본값: "*friend*"

결과:

- 이름이 있는 경우: "*Hi John, your appointment is confirmed*"
- 이름이 없는 경우: "*Hi friend, your appointment is confirmed*"

---

## 기본값 표시 방법

커스텀 값 태그의 색으로 기본값이 설정되어 있는지 알 수 있어요. 이메일을 보내기 전에 검토할 때 어떤 개인화 값에 대체 텍스트가 있는지 쉽게 확인할 수 있어요. 기본값이 설정된 커스텀 값에 마우스를 올리면 기본값이 말풍선으로 보여요.

1. 초록색으로 강조된 커스텀 값: 기본값이 설정되어 있어요.
2. 표준(회색) 커스텀 값: 기본값이 설정되어 있지 않아요.

![기본값 설정 여부에 따라 색이 다른 커스텀 값 태그](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071826354/original/BwDu1LWBs-onKEljQ9wwcXB6-xwX4vHwhA.png?1779292905)

---

## 이메일 커스텀 값에 기본값 설정하기

1. 이메일, 템플릿, 워크플로우 이메일, 대량 이메일 액션 또는 캠페인 이메일을 만들거나 편집해요. 개인화하려는 커스텀 값(예: `{{contact.first_name}}`)을 추가하거나 찾아요.

   ![이메일에 추가한 커스텀 값](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071827538/original/dHBKZljgIpQgk17fSo7UE2NLeJzgLr6vFA.png?1779293570)

2. 커스텀 값을 클릭해 **기본 텍스트** 편집기를 열어요.

   ![커스텀 값을 클릭해 연 기본 텍스트 편집기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071827651/original/mCN4zIMYdbA1mg5esW3NNJwalVQM-UuXuQ.png?1779293686)

3. **기본 텍스트** 편집기에 값이 비어 있을 때 보여 줄 대체 텍스트를 입력하고 **저장**을 클릭해요.

   ![기본 텍스트 편집기에 대체 텍스트를 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071827763/original/tr0Hdf6lYXxxcG-wrREQgeWE0_5NXJ36KQ.png?1779293777)

4. 커스텀 값이 초록색으로 바뀌었는지 확인해요. 초록색이면 기본값이 설정된 거예요.

   ![기본값이 설정되어 초록색으로 표시된 커스텀 값](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071827949/original/vV4NV7fJYZVhgFGkZntqJzMj52woAULmKg.png?1779293835)

---

## 구문으로 기본값 설정하기

이메일 빌더에 아래 구문을 직접 입력해도 돼요.

`{{default contact.firstname "there"}}`

이 구문은 연락처의 이름이 있으면 그 이름을 쓰고, `{{contact.firstname}}`이 비어 있으면 "there"로 대체해요.

## 자주 묻는 질문

### 모든 커스텀 값에 적용되는 기본값을 한 번에 설정할 수 있나요?

아직은 어려워요. 기본값은 커스텀 값을 사용한 위치마다 따로 설정해요. 이메일 상황에 맞게 더 유연하게 쓸 수 있어요.

### 기본값을 설정하면 기존 연락처 정보가 바뀌나요?

아니요. 연락처 필드에 데이터가 있으면 항상 실제 연락처 값이 쓰여요. 기본값은 필드가 비어 있을 때만 표시돼요.

### 제목과 미리보기 텍스트에도 기본값을 쓸 수 있나요?

네. 제목, 미리보기 텍스트, 본문에서 모두 기본값을 쓸 수 있어요.

### 이 기능은 어디에서 쓸 수 있나요?

워크플로우 이메일, 캠페인 이메일, 대량 작업, 이메일 템플릿에서 기본값을 쓸 수 있어요.

### 커스텀 값에 이미 기본값이 있는지 어떻게 알 수 있나요?

기본값이 없는 커스텀 값은 회색 태그로 보여요. 기본값을 추가하면 태그가 초록색으로 바뀌어요.

### 나중에 기본값을 수정할 수 있나요?

네. 커스텀 값 태그를 다시 클릭하면 편집 창이 열려요. 거기서 기본값을 수정하면 돼요.

### 기본값을 설정하지 않으면 어떻게 되나요?

연락처 필드가 비어 있고 기본값도 없으면, 커스텀 값을 쓴 자리가 빈칸으로 표시될 수 있어요.

### 한 이메일에서 같은 커스텀 값을 여러 번 쓰면 기본값을 다르게 줄 수 있나요?

네. 커스텀 값을 사용한 위치마다 메시지와 상황에 맞는 고유한 기본값을 설정할 수 있어요.
