---
원문: https://help.gohighlevel.com/support/solutions/articles/48000982598-email-signatures
번역일: 2026-11-06
카테고리: 11-설정
---

# 이메일 서명 설정하기

이메일 서명을 저장해 두면 이름, 직함, 연락처, 링크, 이미지 같은 서명 내용이 지원되는 이메일에 자동으로 들어가요. 그래서 보내는 이메일이 일관되고 전문적으로 보여요. 서명은 사용자마다 **내 프로필**에서 직접 관리해요. 보내는 메시지에 자동으로 적용할 수도 있고, 사용자 서명 커스텀 값으로 원하는 위치에 직접 넣을 수도 있어요.

## 이메일 서명이란?

이메일 서명은 서브 계정 안에서 사용자별로 저장돼요. 이름, 직함, 전화번호, 링크, 이미지, 서식이 적용된 내용 등을 넣을 수 있어요.

저장한 서명은 지원되는 발신 이메일에 자동으로 적용돼요. 필요한 위치에 직접 넣고 싶다면 사용자 이메일 서명 커스텀 값을 쓰면 돼요.

---

## 이메일 서명 만들기·수정하기

아래 순서대로 **내 프로필**에서 이메일 서명을 만들거나 수정하세요.

### 1단계: 내 프로필 열기

서브 계정 화면에서 **설정 > 내 프로필 > 일반**으로 이동하세요.

![설정 > 내 프로필 > 일반 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082693611/original/NaV2xRAvQ-j4Wpqe-aQLNqaR5GUc_7lfgg.png?1791340575)

### 2단계: 이메일 서명 섹션 찾기

**일반** 탭에서 이메일 서명 편집기를 찾으세요.

![일반 탭의 이메일 서명 편집기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082693610/original/1atc1aFDxhTACn2a_UgSNYQvlaLfDH_Djg.png?1791340567)

### 3단계: 서명 작성하거나 수정하기

편집기의 도구를 사용해 서명 내용을 입력하거나 수정하세요. 새로 바뀐 편집기에는 다음 기능이 있어요.

- 글꼴과 글꼴 크기
- 줄 간격
- 텍스트 색상
- 텍스트 정렬
- 링크
- 이미지
- 커스텀 값
- HTML/소스 편집
- **모두 지우기**

![서명 편집기 도구 모음](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082693626/original/pyzCaTLkFeFUHn3_RNUKG5Iow4Six7I4dA.png?1791340614)

HTML을 직접 붙여 넣거나 수정해야 하면 **Insert HTML**(HTML 삽입) 또는 소스 보기를 사용하세요.

현재 서명 내용을 모두 지우고 처음부터 다시 쓰려면 **모두 지우기**를 누르세요.

새 편집기는 HTML과 표 표시도 개선되었어요. 붙여 넣거나 가져온 서명이 편집기와 발송된 이메일에서 더 일관되게 보여요.

### 4단계: 선택 설정 지정하기

보내는 메시지에서 서명이 어떻게 보이길 원하는지에 따라 서명 옵션을 설정하세요.

- **Enable Signature in All Outgoing Messages**(모든 발신 메시지에 서명 사용)를 켜면 저장한 서명이 지원되는 발신 이메일에 자동으로 적용돼요.
- 답장할 때 서명을 인용된 이메일 스레드 위에 넣으려면 **Include This Signature Before Quoted Text in Replies**(답장할 때 인용 텍스트 앞에 서명 포함)를 켜세요.

![서명 옵션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082693629/original/OdzJLsn7vij0EaUg_RKEnvIKDF06VPHo3A.png?1791340660)

### 5단계: 변경 사항 저장하기

서명과 설정을 확인한 뒤 **내 프로필**에서 **저장**을 눌러 변경 사항을 적용하세요.

![내 프로필에서 변경 사항 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082693639/original/DUhs3ScPHM64OfHE3CnPvUE5wPZkHE-TGg.png?1791340699)

---

## 자동 서명 설정의 작동 방식

**Enable Signature in All Outgoing Messages**를 켜면 저장한 서명이 지원되는 발신 이메일에 자동으로 추가될 수 있어요.

인용 텍스트 설정은 기존 이메일 스레드에 답장할 때 서명이 어디에 들어갈지 정해요.

---

## 커스텀 값으로 사용자 서명 넣기

이메일 서명 커스텀 값을 쓰면 서명이 들어갈 위치를 직접 정할 수 있어요. 캠페인, 템플릿, 지원되는 이메일 편집기에서 서명을 특정 위치에 넣고 싶을 때 유용해요.

1. 서명을 넣을 이메일 편집기를 여세요.
2. **커스텀 값**을 클릭하세요.
3. **사용자**로 이동한 다음 **서명**을 선택하세요.

이메일 서명 커스텀 값은 다음과 같아요.

`{{user.email_signature}}`

![커스텀 값에서 사용자 서명 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082693577/original/iLcY1HCTIQV6pc9fXbfkrXq5vcWInN825w.png?1791340475)

---

## 캠페인에서 이메일 서명 사용하기

`{{user.email_signature}}` 병합 필드는 이메일이 만들어질 때, 해당 이메일과 연결된 사용자의 저장된 서명을 자동으로 넣어 줘요.

캠페인에서 서명이 들어갈 위치에 병합 필드를 추가하세요.

`{{user.email_signature}}`

예를 들어 맺음말 아래에 넣어 두면, 이메일이 만들어질 때 해당 사용자의 저장된 서명이 그 자리에 들어가요.

{% hint style="warning" %}
서명이 비어 있거나 다른 사용자의 정보가 보이면, 담당 사용자나 발신자처럼 이메일과 연결된 사용자가 맞는지 확인하세요. 더 자세한 문제 해결 방법은 [병합 필드 문제 해결](../40-병합필드-변수/how-to-use-merge-fields-and-email-fallback-values.md)을 참고하세요.
{% endhint %}

---

## 자주 묻는 질문

### 이메일 서명은 사용자별인가요, 서브 계정별인가요?
이메일 서명은 서브 계정 안에서 사용자별로 저장돼요. 사용자마다 서로 다른 서명을 쓸 수 있어요.

### 서명을 수정했는데 이메일을 보낼 때 보이지 않아요. 무엇을 확인해야 하나요?
올바른 사용자 프로필에서 수정했는지 확인하고, **Enable Signature in All Outgoing Messages**가 켜져 있는지 살펴보세요. `{{user.email_signature}}`를 사용 중이라면 이메일과 연결된 사용자도 함께 확인하세요.

### 서명에 어떤 서식을 쓸 수 있나요?
서명 편집기에서는 글꼴, 글꼴 크기, 줄 간격, 텍스트 색상, 정렬, 링크, 이미지, 커스텀 값, HTML/소스 편집 같은 서식 기능을 쓸 수 있어요.

### 이메일 서명에 HTML을 붙여 넣거나 직접 수정할 수 있나요?
네, 할 수 있어요. 서명 편집기에서 **Insert HTML** 또는 소스 보기를 사용해 HTML을 직접 추가하거나 수정하세요.

### 답장할 때 서명을 인용 텍스트 앞에 넣을 수 있나요?
네, 할 수 있어요. **Include This Signature Before Quoted Text in Replies**를 켜세요.
