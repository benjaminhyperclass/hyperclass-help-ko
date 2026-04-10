---

번역일: 2026-04-07
카테고리: 10-마케팅 > 이메일 빌더 기능
---

# 조건부 요소로 캠페인 개인화하는 방법

조건부 요소를 사용해서 이메일 캠페인을 쉽게 개인화하세요! 조건부 요소를 사용하면 각 연락처의 데이터에 따라 이메일 빌더에서 특정 콘텐츠 블록을 표시하거나 숨길 수 있습니다.

---

**목차**

- [조건부 요소란?](#조건부-요소란)
- [조건부 요소의 주요 장점](#조건부-요소의-주요-장점)
- [조건부 요소 사용 방법](#조건부-요소-사용-방법)
- [자주 묻는 질문](#자주-묻는-질문)

---

## 조건부 요소란?

조건부 요소는 연락처가 특정 조건을 만족할 때만 이메일 내에서 콘텐츠(이미지나 텍스트 등)를 표시할 수 있게 해주는 기능입니다. 이를 통해 각 연락처에게 맞춤형 메시지를 자동으로 전달할 수 있습니다.

조건부 요소는 이메일 빌더에서 요소 단위(텍스트, 이미지, 버튼, 행/섹션 등)로 설정하며, 다양한 조건을 기반으로 할 수 있습니다:

- **지역 기반 콘텐츠**: 연락처의 지리적 위치에 따라 다른 이미지나 제안을 표시
- **필드 기반 텍스트**: 직책이나 관심사 같은 특정 연락처 필드에 따라 텍스트 요소 변경

---

## 조건부 요소의 주요 장점

- **개인화**: 각 연락처에게 맞춤형 콘텐츠를 보여줘서 캠페인의 관련성을 높입니다.

- **시간 절약**: 스마트 리스트나 별도 캠페인을 만들 필요 없이, 조건부 요소가 포함된 하나의 캠페인만 사용하면 됩니다.

- **참여도 향상**: 각 수신자에게 개인화된 콘텐츠를 보여주면 클릭률, 응답률, 전환율이 높아질 가능성이 커집니다.

- **캠페인 관리 간소화**: 다양한 리스트와 캠페인을 관리하는 대신 모든 콘텐츠 변형을 한 곳에서 관리하여 복잡성과 오류 가능성을 줄입니다.

---

## 조건부 요소 사용 방법

- 이메일 빌더에서 이메일을 열어주세요. (Marketing(마케팅) > Emails(이메일) > **Campaigns(캠페인)** 또는 **Templates(템플릿)**)

![이메일 빌더 접근](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064214065/original/0_VFLp06V9FNJdGyL9MwqrOUOdB0ozPEWg.png?1770235093)

- 요소(텍스트, 이미지, 버튼 등)를 선택하고 설정 패널에서 Visibility(표시) 탭을 열어주세요.

![표시 탭 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064214124/original/8an3-B_coLa2a2ovUe8sqpVcVEUcv6ZfYQ.png?1770235228)

또는 요소 오버레이 액션에서 Conditional Element(조건부 요소) 아이콘을 클릭하여 조건부 요소에 쉽게 접근할 수 있습니다.

![조건부 요소 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064214302/original/DxWB3jHLbF1CH1POX4wNzBqWkqRKJRhW7Q.png?1770235626)

- ConditionalSending(조건부 전송)을 활성화하세요.

![조건부 전송 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064214135/original/gO7lepdZAkHWsLCSSGOPSO56uvJIxocvyQ.png?1770235265)

- **Field(필드)** 를 선택하고, Condition(조건)(is/is not)을 설정한 후 **Value(값)** 를 입력하세요.

조건부 요소의 값을 null로 설정하려면 값을 비워두세요. null로 설정하면 지정된 필드가 비어있을 때만 요소가 표시됩니다.

![필드, 조건, 값 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064214196/original/09Aj5eafLj8sNjKxee8GPgQ6KPSOjnxXSg.png?1770235408)

## 조건부 요소는 이제 연락처의 커스텀 필드가 설정되지 않았을 때도 안정적으로 평가됩니다.

---

## 자주 묻는 질문

**Q: 빈 필드를 대상으로 하기 위해 값에 "NULL"이라고 입력할 수 있나요?**

아니요. "NULL"을 입력하는 것으로는 빈 필드와 일치하지 않습니다. 연락처의 필드를 비워두고 조건을 Is empty(비어있음)로 설정하세요. 또한 필드에 공백이나 플레이스홀더 텍스트가 없는지 확인하세요.

**Q: 조건부 요소에서 지원되는 필드 유형은 무엇인가요?**

지원되는 유형은 한 줄 텍스트, 숫자, 라디오 선택, 단일 선택 드롭다운입니다. 숫자의 경우 기호 없는 순수 숫자 값을 사용하세요. 라디오/단일 선택 필드의 경우 저장된 옵션 값과 정확히 일치해야 합니다.

---
*원문 최종 수정: 2026년 4월 2일*
*Hyperclass 사용 가이드 — hyperclass.ai*