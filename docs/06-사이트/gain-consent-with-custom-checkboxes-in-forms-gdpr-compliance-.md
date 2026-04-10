---

번역일: 2026-04-06
카테고리: 06-사이트
---

# 폼의 커스텀 체크박스로 동의 획득하기 (GDPR 준수)

폼 빌더(Form Builder)의 커스텀 체크박스(Custom Checkbox) 요소를 사용하면 방문자가 귀하/고객의 비즈니스로부터 정보 수신에 대한 동의를 확인할 수 있습니다. 이는 GDPR 준수를 위해 추가 동의가 필요한 국가의 방문자에게 유용합니다.

## 1단계: 폼 빌더에서 커스텀 필드 생성하기

- 우상단의 커스텀 필드(Custom Fields)로 이동합니다.

- 하단에 주황색 박스가 보이면 클릭하여 커스텀 필드를 추가합니다.

- 메뉴가 나타나면 "Checkbox"를 선택합니다.

- 필드에 "GDPR 준수 체크박스" 같은 이름을 지정합니다.

- 플레이스홀더(Placeholder) 필드는 폼에 표시될 내용입니다.

이것이 귀하의 GDPR 준수 고지사항입니다.

**참고사항**: 이 동영상의 플레이스홀더 내용은 **공식적인 GDPR 준수 고지사항이 아닙니다**. 이는 예시로만 사용되었습니다.

![커스텀 필드 생성 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48111555024/original/QqyijLMY6T-2iXwYvAsYu4Mkm_3Leh3URQ.gif?1623779470)

## 2단계: 체크박스 필드를 필수로 설정하기

- 폼의 GDPR 체크박스 필드 위에 마우스를 올리고 클릭합니다.

- 선택하면 우측에 필수(Required) 박스가 나타납니다.

- 박스를 클릭하면 체크마크가 나타나며, 이는 폼을 제출하기 위해 GDPR 체크박스 필드가 반드시 체크되어야 함을 의미합니다.

![체크박스 필드를 필수로 설정하는 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48111554986/original/sCtwBE8vAv_MzfBwd5OfI4_iqI17FmMrIA.gif?1623779455)

## 3단계: GDPR 워크플로우 생성하기

- 워크플로우(Workflow) 패널로 이동하여 "처음부터 시작하기(Start From Scratch)"를 선택하고 우상단의 새 워크플로우 만들기를 클릭합니다.

- 상단의 제목을 선택하고 원하는 워크플로우 이름을 지정합니다.

## 4단계: 워크플로우 트리거 설정하기

- "새 워크플로우 트리거 추가(Add New Workflow Trigger)"를 클릭합니다.

- 메뉴가 나타나면 세 번째 열에서 "워크플로우 트리거 선택(Choose a Workflow Trigger)"을 선택하고 아래로 스크롤하여 "폼 제출됨(Form Submitted)"을 찾습니다.

- 커스텀 필드를 선택하고 예(Yes) 조건을 적용합니다.

![워크플로우 트리거 설정 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48111554876/original/o-IrgMQ5EWgkUiX24PuapW2reemTyXNzHg.gif?1623779420)

## 5단계: 워크플로우 액션 추가하기

- + 기호를 클릭하여 액션 메뉴를 엽니다.

- 조건 및 워크플로우(Conditions and Workflow) 섹션까지 스크롤하고 "조건 분기(If / Else)"를 선택합니다.

- 좌측 세그먼트(Segments)의 "선택(Select)"에서 연락처 세부정보(Contact Details)를 클릭하고 커스텀 필드(Custom fields)까지 스크롤하여 GDPR 체크박스 커스텀 필드를 찾습니다.

- 다음으로 연산자 선택(Select Operator)에서 "포함(includes)"을 클릭하면 다른 필드가 열리며 "예(yes)"를 선택합니다.

- 우하단의 저장을 클릭합니다.

![워크플로우 액션 추가 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48111554649/original/qDCRHVTdYviTgyBDzCucXMJjHHjys2Xg3A.gif?1623779389)

## 6단계: 예/아니오 경로 설정하기

- 예(Yes) 경로 아래의 + 기호를 클릭하여 액션을 엽니다.

- "CRM" 섹션에서 연락처 태그 추가(Add Contact Tag)를 선택합니다.

- "태그 선택(Select a Tag)"을 클릭하면 태그가 나타나며, 아직 만들어진 태그가 없다면 원하는 태그 이름을 입력하여 바로 생성할 수 있습니다.

- 우하단의 저장을 클릭합니다.

- 아니오(No) 경로에서는 같은 단계를 따르되, 태그 이름을 "비준수(non-compliant)"로 하는 것만 다릅니다.

![예/아니오 경로 설정 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48111554294/original/AAhHPfV1mTOCdQU4X6lRjY249XplF3i46w.gif?1623779251)

## 7단계: 스마트 리스트 설정하기

- 연락처(Contacts) / 스마트 리스트(SmartLists)로 이동합니다.

- 우측에 필터(Filters)가 보입니다.

- 선택하면 "필터 추가(Add Filter)" 유형 박스가 나타나며, "태그(tag)"를 입력하고 태그 선택 메뉴에서 "준수(compliant)"를 클릭합니다.

- 이 스마트 리스트를 저장하려면 우상단의 "+" 버튼을 클릭하여 저장하면 준수하는 모든 연락처를 빠르게 볼 수 있습니다.

- 같은 과정을 반복하여 준수하지 않는 연락처의 스마트 리스트도 만들 수 있습니다.

![스마트 리스트 설정 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48111554176/original/KrIduE7N10ZVz0UzmX6M2WMStLK3SqBotQ.gif?1623779216)

---
*원문 최종 수정: 2021년 6월 15일*
*Hyperclass 사용 가이드 — hyperclass.ai*