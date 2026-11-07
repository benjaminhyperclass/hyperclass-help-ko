---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000003713-configuring-searchable-fields-for-objects
번역일: 2026-04-23
카테고리: contacts-smartlists
---

# 객체 검색 가능 필드 설정하기

이 기능을 통해 관리자는 자신의 로케이션에서 어떤 필드를 검색할 수 있는지 설정할 수 있습니다.

설정이 업데이트되면 모든 사용자에게 반영되며, 해당 객체를 검색할 수 있는 모든 곳에 영향을 미쳐 검색의 유연성과 커스터마이징을 향상시킵니다.

## 이 글의 내용

- [기능 1 - 조직의 검색 가능 필드 설정](#기능-1---조직의-검색-가능-필드-설정)
- [기능 2 - 관리자 전용 접근](#기능-2---관리자-전용-접근)
- [기능 3 - 변경사항 전역 적용](#기능-3---변경사항-전역-적용)
- [기능 4 - 정규식 검색](#기능-4---정규식-검색)
- [검색 가능 필드를 업데이트하는 방법](#검색-가능-필드를-업데이트하는-방법)

---

## 기능 1 - 조직의 검색 가능 필드 설정

관리자는 이제 연락처(Contacts), 기회 관리(Opportunities), 커스텀 객체(Custom Objects) 등의 객체에서 검색 가능한 필드를 업데이트할 수 있는 유연성을 가집니다. 이 기능은 맞춤형 검색 간소화를 가능하게 하며 특정 필드에 대한 정규식 검색 기능을 제공합니다.

연락처와 기회 관리의 경우 최대 6개 필드까지 검색할 수 있습니다.

검색을 실행하려면 검색창에 최소 3글자를 입력해야 합니다.

연락처의 경우 - 연락처 이름(Contact Name), 전화번호(Phone Number), 이메일 주소(Email Address)는 필수이며 검색 가능 필드에서 제거할 수 없습니다.
기회 관리의 경우 - 기회 이름(Opportunity Name)은 검색 가능 필드에서 제거할 수 없습니다.

![검색 가능 필드 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034620571/original/aXNLc4EWmAnnshlnUftwp_26gQbLrt2vmw.jpeg?1728891004)

## 기능 2 - 관리자 전용 접근

검색 가능 필드를 설정하는 기능은 **관리자만** 사용할 수 있습니다. 일반 사용자는 이러한 변경을 할 수 없습니다.

## 기능 3 - 변경사항 전역 적용

변경사항이 적용되면, 플랫폼의 모든 연락처 검색창에 반영됩니다.

### 연락처의 경우 다음이 포함됩니다:

**1. 연락처 검색창**

![연락처 검색창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034244715/original/F5j-cSikDfZtbl5xK3y-fYMPkyPg2C17xA.png?1728312607)

**2. 전역 검색창**

![전역 검색창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034244822/original/2o4coThu5UzPYJ798fR97pxxEYJZLVt34Q.png?1728312663)

3. 대화(Conversations)에서 새 메시지 작성

![대화에서 새 메시지 작성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034244931/original/OOjoGGyYwhKrfeHKOMWCtpqbHPIjB_CMdQ.png?1728312751)

4. 캘린더(Calendars)에서 새 예약 만들기

![캘린더에서 새 예약 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034245007/original/wuLXSCIz_qiLRiHi4uK802K4YYfSO-pEUA.png?1728312818)

**5. 연락처에서 할 일(Tasks) 생성 및 업데이트**

![연락처에서 할 일 생성 및 업데이트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034245261/original/crEVyZlazCEKFvCQx_D6pl9wiua1OgZeYA.jpeg?1728312954)

6. 기회 관리에서 연락처 및 추가 연락처 필드

![기회 관리에서 연락처 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034245560/original/vMAskb6Oq03vMKPFD476aFkJi8Czr3dWUw.jpeg?1728313107)

그리고 다음 모듈들에도 적용됩니다:

- 대시보드(Dashboard)
- 워크플로우(Workflows)
- 폼(Forms)
- 설문(Surveys)
- 결제(Payments)
- 인보이스(Invoices)
- 문서 및 계약(Documents & Contracts)
- SaaS
- 제휴 관리(Affiliate Manager)
- 이메일(Emails)
- 클라이언트 포털(Client Portal)
- 커스텀 객체(Custom Objects)

## 기능 4 - 정규식 검색

사용자는 더 정교한 검색을 위해 정규식(Regex)을 활용할 수 있습니다.

다만, 연락처 이름, 전화번호, 금액, 숫자 필드 및 기타 유사한 필드에서는 정규식이 작동하지 않습니다.

정규식이 지원하는 기능:

- *abc: "abc"로 끝나는 레코드를 검색
- *abc*: "abc"가 포함된 레코드를 검색  
- abc*: "abc"로 시작하는 레코드를 검색

💡 **참고**: 정규식 검색은 연락처 이름, 전화번호, 금액 등의 필드에서는 작동하지 않습니다.

## 검색 가능 필드를 업데이트하는 방법

- 하위 계정 실행 > 설정(Settings) > 커스텀 필드(Custom Fields)

![설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034533907/original/mPCVkIsRGLR9KpYLfailitMyPaG41RUcmg.jpeg?1728644061)

- 우측 상단의 케밥 메뉴(점 3개)로 이동하여 "검색 가능 필드 편집(Edit searchable fields)"을 클릭합니다

![케밥 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034533906/original/0gra7J-J1HyTPmerzV3eqtTTQ6QVPdLASQ.png?1728644062)

- 검색 가능 필드를 업데이트할 객체를 선택합니다

![객체 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034533997/original/c1_9oPAMn02B0rS4itVgumykC0W-V4MmbQ.png?1728644118)

- 검색 가능하도록 표시할 필드를 선택합니다

![필드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034620640/original/BXUnXs--b3w30otXst2Bdfku63GhwDBmOQ.png?1728891041)

- 변경사항을 저장하고 확인합니다

![저장 및 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034534116/original/oXMWnRsuJ02qexPBBjtI9bgjjz-hrKfM0g.png?1728644218)

- 이제 검색 가능 필드가 이 계정의 모든 모듈과 사용자에게 업데이트되었습니다.

새롭게 개선된 **설정(Settings)** > 커스텀 필드(Custom Fields) 페이지에서 페이지 메뉴를 열고 "검색 가능 필드 편집(Edit searchable fields)"을 선택하여 선택한 객체의 검색 가능 필드를 관리할 수 있습니다.

---
*원문 최종 수정: 2026-04-16*
*Hyperclass 사용 가이드 — hyperclass.ai*