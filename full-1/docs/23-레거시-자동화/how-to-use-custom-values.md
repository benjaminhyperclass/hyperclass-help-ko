---
원문: https://help.gohighlevel.com/support/solutions/articles/48001161575-how-to-use-custom-values
번역일: 2026-11-06
카테고리: 23-레거시-자동화
---

# 커스텀 값 사용하기

이 문서에서는 하이퍼클래스의 커스텀 값이 무엇인지, 어디에 쓸 수 있는지, 그리고 커스텀 값을 추가·편집하고 워크플로우와 메시지 등에 적용하는 방법을 설명해요. 워크플로우 텍스트 필드에서 동적 값이 어떻게 보이고 동작하는지도 함께 다뤄요.

---

## 커스텀 값이란?

커스텀 값은 사용자가 직접 정해 두는 데이터 자리표시자예요. 시스템이나 애플리케이션 안에서 특정 정보를 저장하고 관리할 수 있어서, 개인화된 데이터나 표준 데이터를 효율적으로 정리하고 불러올 수 있어요. CRM, 콘텐츠 관리 시스템(CMS), 마케팅 자동화 플랫폼 등 여러 곳에서 쓰이는 개념이에요.

하이퍼클래스에서는 커스텀 값에 연락처 정보, 선호 사항, 고유 식별값 같은 개인화된 정보를 저장해요. 커스텀 값을 쓰면 메시지, 이메일, 웹사이트와 퍼널 페이지에 값을 자동으로 채우고 개인화할 수 있어요. 그래서 고객과의 소통을 더 효율적으로 하고 참여도를 높이는 데 도움이 돼요.

[동영상](https://www.youtube.com/embed/\_T2Ei06j4BQ?&wmode=opaque)

---

## 커스텀 값의 주요 특징

- 개인화: 고객, 사용자, 리드처럼 대상마다 다른 정보를 저장할 수 있어요. 이름, 연락처, 선호 사항부터 계좌 번호나 예약 번호 같은 고유 식별값까지 다양해요.
- 효율성: 데이터를 커스텀 값에 저장해 두면 시스템 곳곳에서 쉽게 불러오고 활용할 수 있어요. 같은 정보를 여러 곳에 반복해서 입력하지 않아도 되니 수작업과 실수가 줄어요.
- 자동화: 커스텀 값은 자동화에 자주 쓰여요. 필드를 자동으로 채우고, 개인화된 이메일을 만들고, 메시지를 맞춤 설정하고, 워크플로우를 간소화할 수 있어요. 예를 들어 이메일 마케팅에서는 수신자의 이름을 나타내는 커스텀 값을 넣어 한 사람 한 사람에게 인사할 수 있어요.
- 일관성: 한 그룹에 공통으로 유지되는 데이터를 일관되게 쓸 수 있어요. 회사 주소, 고객 지원 연락처, 브랜딩 요소 같은 정보에 특히 유용해요.
- 유연성: 필요에 맞게 커스텀 값을 직접 정의할 수 있어요. 그래서 다양한 상황, 업종, 조직 구조에 맞춰 쓸 수 있어요.
- 업데이트: 커스텀 값의 데이터를 바꿀 때 쓰이는 곳마다 일일이 수정할 필요가 없어요. 원본 값을 바꾸면 사용 중인 모든 곳에 자동으로 반영돼요.
- 데이터 무결성: 커스텀 값은 데이터를 정확하게 유지하는 데 도움이 돼요. 예를 들어 예약 시간에 커스텀 값을 쓰면 값이 어긋날 위험이 줄어요.
- 세분화와 필터링: 세분화를 지원하는 시스템에서는 커스텀 값을 기준으로 데이터 집합을 나누고 분류할 수 있어요. 타깃 커뮤니케이션과 리포팅에 도움이 돼요.
- 중앙 관리: 커스텀 값은 대개 한곳에서 관리해요. 필요할 때 추가, 수정, 삭제할 수 있어서 정보를 한눈에 정리하기 좋아요.
- 연동: 많은 시스템이 데이터베이스나 API 같은 외부 소스와의 연동을 지원해요. 커스텀 값을 이런 소스에 연결하면 시스템의 데이터 활용 범위가 넓어져요.

커스텀 값을 쓰면 개인화를 강화하고, 업무를 자동화하고, 정확도를 지키고, 더 나은 의사 결정을 할 수 있어요. 데이터 기반 워크플로우를 최적화하고, 사용자와 고객 모두에게 맞춤 경험을 제공하는 데도 중요한 역할을 해요.

{% hint style="info" %}
모든 서브 계정에 기본으로 포함된 커스텀 값 목록은 이 문서 맨 아래에서 확인할 수 있어요. 각 서브 계정에서 직접 커스텀 값을 만들어 이 목록에 추가할 수도 있어요.
{% endhint %}

---

## 커스텀 값 만들기, 편집하기, 삭제하기

커스텀 값을 잘 관리해 두면 퍼널, 폼, 이메일, 자동화 전반에서 일관되게 재사용할 수 있는 콘텐츠를 유지할 수 있어요. 커스텀 값을 만들고, 수정하고, 삭제하는 방법은 다음과 같아요.

{% hint style="info" %}
커스텀 값을 관리하고, 편집하고, 정리하는 방법에 대한 자세한 내용도 확인해 보세요.
{% endhint %}

#### 커스텀 값 메뉴로 이동하기

1. 서브 계정 대시보드의 왼쪽 메뉴에서 **설정**을 클릭하세요.
2. 설정 메뉴 목록에서 **커스텀 값**을 선택하세요.

![설정 메뉴에서 커스텀 값 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048494809/original/as8y-7P2JUKxW7x8cszYEMHUkRaVcIGkHw.png?1750264418)

#### 새 커스텀 값 만들기

1. 파란색 **+ 커스텀 값 추가** 버튼을 클릭하세요.
2. 이름과 표시할 값을 입력하고, 커스텀 값을 저장할 폴더를 선택하세요.
3. **저장**을 클릭하세요.

![새 커스텀 값 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048494975/original/X5wrsvC7NkVYscJBEQLJcGI9zwi_AoU-7w.png?1750264576)

#### 커스텀 값 편집하거나 삭제하기

1. 목록에서 수정하거나 삭제할 값을 찾으세요.
2. 항목 옆의 점 3개 아이콘(`⋮`)을 클릭하고 **커스텀 값 편집** 또는 **커스텀 값 삭제**를 선택하세요.

![커스텀 값 편집 및 삭제 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048496180/original/O0ivZnrMli4mWGhLBO8Kim11nG1r3w_ttQ.png?1750265699)

---

## 실제 사용 예시

### 예시 1

피트니스 클럽의 디지털 마케팅 캠페인을 운영한다고 생각해 보세요. 회원마다 운동 목표, 선호하는 운동 종류, 연락 방식이 달라요. 하이퍼클래스의 커스텀 값에 이런 개인 정보를 저장해 두면 마케팅 활동을 회원에게 맞춰 진행할 수 있어요. 커스텀 값에는 회원 이름, 선호 운동 종류, 멤버십 등급, 마지막 방문일 같은 데이터가 들어갈 수 있어요.

하이퍼클래스의 커스텀 값을 쓰면 다음과 같은 일을 할 수 있어요.

- 이메일 개인화: 이메일 템플릿에 회원 이름, 선호 운동 종류 등 관련 정보를 자동으로 채울 수 있어요.
- 메시지 맞춤 설정: 커스텀 값으로 회원 한 명 한 명의 필요와 선호에 맞는 메시지를 만들 수 있어요.
- 웹 페이지 강화: 저장된 커스텀 값에 따라 웹사이트나 퍼널 페이지에 개인화된 콘텐츠를 동적으로 보여 줄 수 있어요.

### 예시 2

피트니스 클럽 회원을 대상으로 재참여 캠페인을 진행한다면, 커스텀 값으로 커뮤니케이션을 더 관련성 있고 매력적으로 만들 수 있어요. 단계별로 살펴볼게요.

**1. 데이터 수집**

- 회원 A: 이름 John, 선호 운동 요가, 멤버십 등급 골드, 마지막 방문일 2024년 6월 1일
- 회원 B: 이름 Sarah, 선호 운동 유산소, 멤버십 등급 실버, 마지막 방문일 2024년 5월 25일

**2. 데이터 저장**

- 하이퍼클래스에서 이름, 선호 운동, 멤버십 등급, 마지막 방문일을 포함해 필요한 모든 종류의 데이터에 대해 커스텀 값 필드를 만들어요.
- 각 회원의 프로필에는 이 필드에 해당 회원의 정보가 저장돼요.

**3. 데이터 활용**

- 개인화된 이메일: John에게 "John님, 안녕하세요."로 시작하는 이메일을 보내요. 곧 열릴 요가 수업과 골드 회원 전용 혜택을 안내하는 내용이에요.
- 맞춤 메시지: Sarah에게 "Sarah님, 보고 싶었어요! 이번 주 에너지 넘치는 유산소 수업에 함께해요."라는 문자를 보내요.
- 맞춤 웹 페이지: John이 회원 포털에 로그인하면 "John님, 다시 오신 것을 환영합니다! 다음 요가 수업 준비되셨나요?" 같은 환영 메시지가 보여요.

**4. 고객 경험 향상**

- 커스텀 값을 쓰면 회원마다 더 개인적이고 관련성 높은 소통을 할 수 있어서, 참여와 재참여 가능성이 높아져요.

하이퍼클래스의 커스텀 값을 활용하면 획일적인 커뮤니케이션을 개인화된 소통으로 바꿀 수 있어요. 고객 경험이 좋아질 뿐 아니라 참여도와 충성도도 높아져요.

새로운 프로모션 캠페인을 시작할 때도 커스텀 값으로 메시지, 이메일, 웹 페이지에 데이터를 채워 넣을 수 있어요. 그러면 모든 접점이 받는 사람의 고유한 선호와 필요에 맞춰져요. 이렇게 하면 타깃 고객과 더 효과적으로 연결되고 마케팅 성과도 높일 수 있어요.

---

## 하이퍼클래스 서브 계정에서 커스텀 값 사용하기

커스텀 값은 빠르고 쉽게 찾아서 쓸 수 있어요. 하이퍼클래스는 사용자와 고객 모두가 커스텀 값을 쉽게 시작하고, 왜 쓰는지와 어떻게 쓰는지도 이해할 수 있게 만들었어요. 하이퍼클래스 서브 계정에서는 다음과 같은 여러 곳에서 커스텀 값을 쓸 수 있어요.

### 1. 대화

- **대화** 메뉴에서 예비 고객, 고객과 메시지를 주고받을 때 커스텀 값을 쓸 수 있어요.
- SMS, 이메일, Facebook Messenger, Instagram 메시지, WhatsApp 등 하이퍼클래스가 지원하는 모든 소통 채널에서 커스텀 값을 쓸 수 있어요.

하이퍼클래스 서브 계정의 **대화** 섹션에 대해 더 알아보세요.

![대화에서 커스텀 값 사용 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027766970/original/s2O0dqHeXUMJqubxLRSQOsBu-vzcp1Lu9w.jpg?1718635716)

![대화에서 커스텀 값 사용 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027766996/original/028CGrQNwwWJ4Lh-0aveO5goRPQNoF798w.jpg?1718635733)

### 2. 자동화(워크플로우)

### 워크플로우 텍스트 필드에서 동적 값 추가하고 편집하기

워크플로우 텍스트 필드의 동적 값은 칩 형태로 보여서 알아보고 관리하기 쉬워요. 칩 색깔을 보면 현재 워크플로우가 그 값을 제공할 수 있는지 알 수 있어요.

1. 값을 빠르게 추가하기: 워크플로우 텍스트 필드 안에서 `/`를 입력하면 커스텀 값을 검색해 텍스트에 바로 넣을 수 있어요.
2. 기존 값 바꾸기: 기존 값 칩을 클릭해 다른 커스텀 값을 선택하면 같은 위치의 값이 교체돼요.
3. 파란색 칩: 현재 워크플로우에서 쓸 수 있는 값이에요. 워크플로우가 연락처 정보, 시스템 값, 또는 앞선 워크플로우 단계에서 값을 가져올 수 있어요.
4. 노란색 칩: 하이퍼클래스에 있는 값이지만 현재 워크플로우가 제공하지 않는 값이에요. 다른 경로에서 필요한 데이터가 워크플로우로 전달되지 않으면 값이 빈 칸으로 나올 수 있어요.
5. 빨간색 칩: 하이퍼클래스에 없는 값이에요. 오타가 없는지 확인하거나 인식되는 값으로 바꾸세요.

![워크플로우 텍스트 필드의 동적 값 칩](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081192946/original/w1kkC4EkfpD0bQ0SLboNTFnT1iuC2zoQTg.png?1789652182)

노란색 칩은 경고예요. 워크플로우를 저장하거나 게시하는 데는 지장이 없어요.

![노란색 칩 경고 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081193014/original/KyWZShWuvczTSSPSlmtPA3HBbq1i83nJNQ.png?1789652211)

동적 값의 중괄호 안에 공백이 있어도 값을 인식하는 데는 영향이 없어요. 예를 들어 `{{ attribution.first.url }}`과 `{{attribution.first.url}}`은 같은 값으로 인식돼요.

이번 업데이트는 **워크플로우 빌더**에서 동적 값이 표시되고 검증되는 방식만 바꿔요. 워크플로우가 실행될 때 기존 값이 처리되는 방식은 바뀌지 않아요.

![워크플로우 동적 값 추가 동작 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080953224/original/MHS56mlvRFNWnopYDUV0xMPigQUC3GGbVQ.gif?1789467651)

- 워크플로우를 만들 때 여러 곳에 커스텀 값을 넣을 수 있어요. 넣은 커스텀 값에 따라 자동화, 메시지, 알림을 개인화할 수 있어요.

하이퍼클래스 서브 계정의 **자동화** 섹션에 있는 **워크플로우**에 대해 더 알아보세요.

![워크플로우 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080954014/original/AOdldP3yVmTAqtep9pMVamGRwDtnz25RHA.png?1789467974)

![워크플로우에서 커스텀 값 사용 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027767481/original/3peQXC7prBJRP6NyhBjjgun_7-UbQ2u6Jw.jpg?1718636176)

![워크플로우에서 커스텀 값 사용 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027767488/original/qIC8zr4pSO0mWqeH_gzTVI4V4-m5SbqfLg.jpg?1718636187)

### 3. 웹사이트 & 퍼널

- 웹사이트와 퍼널 페이지에 커스텀 값을 직접 넣을 수 있어요. 그러면 예비 고객과 고객에게 직접 말을 거는 듯한 개인화 느낌을 더할 수 있어요.
- 웹사이트와 퍼널에서 커스텀 값을 쓰려면, 페이지를 방문한 예비 고객이나 고객이 이전에 웹사이트나 퍼널에서 폼을 제출했거나 예약을 해서 저장된 데이터가 있어야 해요.
- **트리거 링크**를 이용해 URL 주소창에 커스텀 값 데이터를 넣을 수도 있어요. 트리거 링크에 대해 더 알아보세요.

하이퍼클래스 서브 계정의 **사이트** 섹션에 대해 더 알아보세요.

![웹사이트에서 커스텀 값 사용 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027769213/original/q2Lwo4E17WGfN-QKBzmx5ZfqiG07KEYH0g.jpg?1718638193)

![웹사이트에서 커스텀 값 사용 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027769230/original/r878s5NbHmeBh7NjolS28ujw-8fViD-VHA.jpg?1718638216)

### 4. 이메일 캠페인 & 템플릿

- **마케팅** 섹션에서 이메일 템플릿과 이메일 캠페인을 만들 때 여러 곳에 커스텀 값을 넣어 이메일을 개인화할 수 있어요.
- 이메일 본문, 제목, 이메일 설명, 그리고 **from name**(보낸 사람 이름)과 **from address**(보낸 사람 주소)에도 커스텀 값을 넣을 수 있어요.
- 색상 입력란에도 커스텀 값을 쓸 수 있어요. 예를 들면 **배경 색상**, **Body Color**(본문 색상), **버튼 색상**이 있어요.

  커스텀 값 토큰을 입력하면 빌더가 캔버스에 색상을 바로 적용해요. 색상 변경을 확인하려고 **미리보기 모드**로 전환하지 않아도 돼요.

  ![색상 입력란에 커스텀 값 입력 화면](https://jumpshare.com/share/kYtmv6GLLOVU3mU1dAEF+/Screen+Shot+2026-02-09+at+10.20.52+PM.png)

하이퍼클래스 서브 계정의 **마케팅** 섹션에 있는 **이메일 캠페인**과 **템플릿**에 대해 더 알아보세요.

![이메일 캠페인에서 커스텀 값 사용 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027769375/original/Fb5OPBZcCU26WPiLpLEKr3I7jCqhqmPeEQ.jpg?1718638403)

![이메일 캠페인에서 커스텀 값 사용 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027769386/original/COecu45n_yPYJib4nzyqBLTvo3OUAzb7Sw.jpg?1718638414)

### 5. 소셜 플래너

- 소셜 미디어 게시글에 커스텀 값을 넣으면 게시가 빠르고 쉬워져요. 누가 게시글을 올리든 개인화를 더할 수도 있어요.

하이퍼클래스 서브 계정의 **마케팅** 섹션에 있는 **소셜 플래너**에 대해 더 알아보세요.

![소셜 플래너에서 커스텀 값 사용 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027769579/original/LERyK8FYsZ5IRSK_LLDZ_kyWugP2dVI9zA.jpg?1718638673)

![소셜 플래너에서 커스텀 값 사용 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027769592/original/Rujpjpps1g1rWI7U2Wh2FUcSTKr-HRQu4w.jpg?1718638683)

---

## 커스텀 값을 폴더로 정리하기

커스텀 값이 점점 늘어날수록 폴더로 정리해 두면 계정을 더 잘 관리할 수 있어요.

#### 커뮤니티 멤버들이 만든 튜토리얼

커스텀 값과 정리 방법을 더 알고 싶다면 커뮤니티 멤버들이 만든 아래 튜토리얼 영상을 확인해 보세요.

{% hint style="info" %}
아래 영상은 하이퍼클래스 팀이 만든 영상이 아니에요. 커스텀 값이나 커스텀 값 폴더에 대해 궁금한 점이 있으면 하이퍼클래스 고객지원에 문의하세요.
{% endhint %}

[동영상](https://www.youtube.com/embed/7gj5ISQqDCY?&wmode=opaque)

[동영상](https://www.youtube.com/embed/4QrwnDCeaGw?&wmode=opaque)

[동영상](https://www.youtube.com/embed/fKZaQFHuiN0?&wmode=opaque)

[동영상](https://www.youtube.com/embed/2k0gtL-vbmE?&wmode=opaque)

---

## 커스텀 값(머지 태그) 목록

{% hint style="info" %}
커스텀 값을 원본 형식(괄호와 하이픈을 뺀 형식)으로 써야 할 때가 있어요. 국제 전화번호를 다룰 때처럼 원본 형식이 더 알맞은 경우도 있어요.
{% endhint %}

### 연락처 (CONTACT)

- 연락처 > 이름: `{{contact.name}}`
- 연락처 > 이름: `{{contact.first_name}}`
- 연락처 > 성: `{{contact.last_name}}`
- 연락처 > 이메일: `{{contact.email}}`
- 연락처 > 전화번호: `{{contact.phone}}` 또는 `{{contact.phone_raw}}`
- 연락처 > 전화번호 (트리거 링크 및 UTM에 권장): `Tel:{{contact.phone_raw}}`
- 연락처 > 회사명: `{{contact.company_name}}`
- 연락처 > 전체 주소: `{{contact.full_address}}`
- 연락처 > 주소 1: `{{contact.address1}}`
- 연락처 > 도시: `{{contact.city}}`
- 연락처 > 주/도: `{{contact.state}}`
- 연락처 > 우편번호: `{{contact.postal_code}}`
- 연락처 > 시간대: `{{contact.timezone}}`
- 연락처 > 생년월일: `{{contact.date_of_birth}}`
- 연락처 > 출처: `{{contact.source}}`
- 연락처 > 웹사이트: `{{contact.website}}`

### 사용자 (USER)

- 사용자 > 이름: `{{user.name}}`
- 사용자 > 이름: `{{user.first_name}}`
- 사용자 > 성: `{{user.last_name}}`
- 사용자 > 이메일: `{{user.email}}`
- 사용자 > 전화번호: `{{user.phone}}` 또는 `{{user.phone_raw}}`
- 사용자 > 서명: `{{user.email_signature}}`
- 사용자 > 캘린더 링크: `{{user.calendar_link}}`
- 사용자 > 예약 전화번호: `{{appointment.user.phone_raw}}`
- 사용자 > Twilio 전화번호: `{{user.twilio_phone_number}}`
- 사용자 > Twilio 전화번호 (원본 형식): `{{user.twilio_phone_number_raw}}`

### 예약 (APPOINTMENT)

- 예약 > 제목: `{{appointment.title}}`
- 예약 > 시작 날짜 시간: `{{appointment.start_time}}`
- 예약 > 시작일: `{{appointment.only_start_date}}`
- 예약 > 시작 시간: `{{appointment.only_start_time}}`
- 예약 > 종료 날짜 및 시간: `{{appointment.end_time}}`
- 예약 > 종료일: `{{appointment.only_end_date}}`
- 예약 > 종료 시간: `{{appointment.only_end_time}}`
- 예약 > 요일: `{{appointment.day_of_week}}`
- 예약 > 월 이름: `{{appointment.month}}`
- 예약 > 시간대: `{{appointment.timezone}}`
- 예약 > 취소 링크: `{{appointment.cancellation_link}}`
- 예약 > 일정 변경 링크: `{{appointment.reschedule_link}}`
- 예약 > 미팅 장소: `{{appointment.meeting_location}}`
- 예약 > 메모: `{{appointment.notes}}`
- 예약 > Google 캘린더에 추가: `{{appointment.add_to_google_calendar}}`
- 예약 > iCal·Outlook에 추가: `{{appointment.add_to_ical_outlook}}`
- 예약 > 반복 > 반복: `{{appointment.recurring.repeats}}`
- 예약 > 반복 > 반복 횟수: `{{appointment.recurring.times_to_repeat}}`
- 예약 > 배정된 사용자 > 이름: `{{appointment.user.name}}`
- 예약 > 배정된 사용자 > 이름: `{{appointment.user.first_name}}`
- 예약 > 배정된 사용자 > 성: `{{appointment.user.last_name}}`
- 예약 > 배정된 사용자 > 이메일: `{{appointment.user.email}}`
- 예약 > 배정된 사용자 > 전화번호: `{{appointment.user.phone}}`
- 예약 > 배정된 사용자 > 전화번호 (원본 형식): `{{appointment.user.phone_raw}}`
- 예약 > 배정된 사용자 > 서명: `{{appointment.user.email_signature}}`
- 예약 > 배정된 사용자 > Twilio 전화번호: `{{appointment.user.twilio_phone_number}}`

### 캘린더 (CALENDAR)

- 캘린더 > 이름: `{{calendar.name}}`
- 캠페인 > 이벤트, 날짜, 시간: `{{campaign.event_date_time}}`
- 캠페인 > 이벤트 날짜: `{{campaign.event_date}}`
- 캠페인 > 이벤트 시간: `{{campaign.event_time}}`

### 메시지 (MESSAGE)

- 메시지 > 메시지 본문: `{{message.body}}`
- 메시지 > 메시지 제목: `{{message.subject}}`

### 계정 (ACCOUNT)

- 계정 > 계정명: `{{location.name}}`
- 계정 > 전체 주소: `{{location.full_address}}`
- 계정 > 주소 1: `{{location.address}}`
- 계정 > 도시: `{{location.city}}`
- 계정 > 주/도: `{{location.state}}`
- 계정 > 국가: `{{location.country}}`
- 계정 > 우편번호: `{{location.postal_code}}`
- 계정 > 이메일: `{{location.email}}`
- 계정 > 전화번호: `{{location.phone}}`
- 계정 > 전화번호 (원본 형식): `{{location.phone_raw}}`
- 계정 > 웹사이트: `{{location.website}}`
- 계정 > 로고 URL: `{{location.logo_url}}`
- 계정 > 소유자 > 이름: `{{location_owner.first_name}}`
- 계정 > 소유자 > 성: `{{location_owner.last_name}}`
- 계정 > 소유자 > 이메일: `{{location_owner.email}}`
- 계정 > ID: `{{location.id}}`

### 현재 시각 (RIGHT NOW)

- 현재 시각 > 초: `{{right_now.second}}`
- 현재 시각 > 분: `{{right_now.minute}}`
- 현재 시각 > 시간 (24시간제): `{{right_now.hour}}`
- 현재 시각 > 시간 (오전/오후 형식): `{{right_now.hour_ampm}}`
- 현재 시각 > 오전/오후: `{{right_now.ampm}}`
- 현재 시각 > 요일 (영어 전체 이름): `{{right_now.day_of_week}}`
- 현재 시각 > 월 이름: `{{right_now.month_name}}`
- 현재 시각 > 일: `{{right_now.day}}`
- 현재 시각 > 개월: `{{right_now.month}}`
- 현재 시각 > 월 (영어 전체 이름): `{{right_now.month_english}}`
- 현재 시각 > 올해: `{{right_now.year}}`
- 현재 시각 > 날짜 (월/일/년): `{{right_now.middle_endian_date}}`
- 현재 시각 > 날짜 (일/월/년): `{{right_now.little_endian_date}}`
- 현재 시각 > 요일: `{{right_now.day_of_week}}`

### 어트리뷰션 (ATTRIBUTION)

- 어트리뷰션 > 처음 > 세션 소스: `{{contact.attributionSource.sessionSource}}`
- 어트리뷰션 > 처음 > URL: `{{contact.attributionSource.url}}`
- 어트리뷰션 > 처음 > 캠페인: `{{contact.attributionSource.campaign}}`
- 어트리뷰션 > 처음 > UTM 소스: `{{contact.attributionSource.utmSource}}`
- 어트리뷰션 > 처음 > UTM 매체: `{{contact.attributionSource.utmMedium}}`
- 어트리뷰션 > 처음 > UTM 콘텐츠: `{{contact.attributionSource.utmContent}}`
- 어트리뷰션 > 처음 > 리퍼러: `{{contact.attributionSource.referrer}}`
- 어트리뷰션 > 처음 > 캠페인 ID: `{{contact.attributionSource.campaignId}}`
- 어트리뷰션 > 처음 > FB 클릭 ID: `{{contact.attributionSource.fbclid}}`
- 어트리뷰션 > 처음 > Google 클릭 ID: `{{contact.attributionSource.gclid}}`
- 어트리뷰션 > 처음 > UTM 키워드: `{{contact.attributionSource.utmKeyword}}`
- 어트리뷰션 > 처음 > UTM 매치 유형: `{{contact.attributionSource.utmMatchType}}`
- 어트리뷰션 > 처음 > 광고 그룹 ID: `{{contact.attributionSource.adGroupId}}`
- 어트리뷰션 > 처음 > 광고 ID: `{{contact.attributionSource.adId}}`
- 어트리뷰션 > 최근 > 세션 소스: `{{contact.lastAttributionSource.sessionSource}}`
- 어트리뷰션 > 최근 > URL: `{{contact.lastAttributionSource.url}}`
- 어트리뷰션 > 최근 > 캠페인: `{{contact.lastAttributionSource.campaign}}`
- 어트리뷰션 > 최근 > UTM 소스: `{{contact.lastAttributionSource.utmSource}}`
- 어트리뷰션 > 최근 > UTM 매체: `{{contact.lastAttributionSource.utmMedium}}`
- 어트리뷰션 > 최근 > UTM 콘텐츠: `{{contact.lastAttributionSource.utmContent}}`
- 어트리뷰션 > 최근 > 리퍼러: `{{contact.lastAttributionSource.referrer}}`
- 어트리뷰션 > 최근 > 캠페인 ID: `{{contact.lastAttributionSource.campaignId}}`
- 어트리뷰션 > 최근 > FB 클릭 ID: `{{contact.lastAttributionSource.fbclid}}`
- 어트리뷰션 > 최근 > Google 클릭 ID: `{{contact.lastAttributionSource.gclid}}`
- 어트리뷰션 > 최근 > UTM 캠페인: `{{contact.lastAttributionSource.utmCampaign}}`
- 어트리뷰션 > 최근 > UTM 키워드: `{{contact.lastAttributionSource.utmKeyword}}`
- 어트리뷰션 > 최근 > UTM 매치 유형: `{{contact.lastAttributionSource.utmMatchType}}`
- 어트리뷰션 > 최근 > 광고 그룹 ID: `{{contact.lastAttributionSource.adGroupId}}`
- 어트리뷰션 > 최근 > 광고 ID: `{{contact.lastAttributionSource.adId}}`
