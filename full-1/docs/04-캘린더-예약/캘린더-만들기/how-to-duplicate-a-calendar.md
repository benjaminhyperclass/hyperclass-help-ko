---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005894-how-to-duplicate-a-calendar
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 캘린더 복제하기

하이퍼클래스에서 기존 캘린더를 복제하면 같은 예약 설정을 가진 새 캘린더를 바로 만들 수 있어요. 이 문서에서는 캘린더를 복제하는 단계와, 원본에서 새 캘린더로 넘어가는 설정과 넘어가지 않는 설정을 안내해요.

## 캘린더 복제 개요

캘린더를 복제하면 기존 캘린더와 같은 구성의 새 캘린더가 만들어져요. 가용 시간, 알림 같은 설정을 처음부터 다시 맞추지 않고, 이미 잘 쓰고 있는 설정을 한 번에 가져올 수 있어요. 직원, 지점, 서비스별로 비슷한 캘린더를 여러 개 만들 때 고객 경험을 일관되게 유지하고 시간도 아낄 수 있어요.

## 캘린더를 복제하면 좋은 점

- **시간 절약:** 설정을 일일이 다시 하지 않고 몇 분 만에 완성된 캘린더를 만들 수 있어요.
- **일관된 경험:** 여러 캘린더에서 예약 가능 시간대, 미팅 유형, 안내 방식을 똑같이 유지할 수 있어요.
- **실수 방지:** 직접 설정하다가 놓치기 쉬운 버퍼 시간이나 취소 정책 같은 항목이 빠지는 일을 줄여요.
- **유연한 확장:** 원본 설정은 그대로 두고, 새 팀원이나 추가 서비스, 테스트용 캘린더를 쉽게 만들 수 있어요.

## 복제되는 설정

캘린더를 복제하면 아래 설정이 자동으로 복사돼요.

- **Meeting Details**(미팅 상세 정보): **Calendar Logo**(캘린더 로고), **캘린더 이름**, **설명**, **그룹**, **Meeting Invite Title**(미팅 초대 제목), **팀 구성원 선택**과 **미팅 장소**, **Meeting Color**(미팅 색상)
- **가용성**: 주간 **이용 가능 시간**, **Look Busy Settings**(바쁜 것처럼 보이기 설정), **Recurring Meeting Options**(반복 미팅 옵션), **Slot Interval**(슬롯 간격), **Meeting Duration**(미팅 시간), **최소 예약 안내 기간**, **Date Range Restrictions**(날짜 범위 제한), **Maximum Bookings Per Day**(하루 최대 예약 수), **Maximum Bookings Per Slot**(슬롯당 최대 예약 수), **Pre-Buffer Time**(사전 버퍼 시간), **Post-Buffer Time**(사후 버퍼 시간)
- **Forms & Payments**(폼 및 결제): **Select Form**(폼 선택), **Widget Order**(위젯 순서), **Pre-Populate Fields (Sticky Contacts)**(필드 미리 채우기(고정 연락처)), **Consent Checkbox**(동의 체크박스), **Add Guests**(게스트 추가), **Confirmation Page Settings**(확인 페이지 설정), **Meta Pixel**, **Auto-Confirm New Calendar Meetings**(새 캘린더 미팅 자동 확정), **결제 설정**
- **Notifications & Additional Options**(알림 및 추가 옵션): **Email & In-App Notifications**(이메일 및 앱 내 알림), **Google/Outlook Invitations**(Google/Outlook 초대), **Assign Contacts to Respective Calendar**(연락처를 해당 캘린더에 배정), **Skip Contacts if Already Assigned**(이미 배정된 연락처 건너뛰기), **Allow Rescheduling**(일정 변경 허용), **Allow Cancellation**(취소 허용), **Meeting Invite Notes**(미팅 초대 메모)
- **사용자 지정**: **Calendar Cover Image**(캘린더 커버 이미지), **Widget Style**(위젯 스타일), **Primary & Background Colors**(기본 색상 및 배경 색상), **버튼 텍스트**, **Calendar Title, Description, and Details**(캘린더 제목, 설명, 상세 정보), **Custom Code**(커스텀 코드)

<!-- 검토 필요: 원문 내용이 서로 다름 -->

## 복제되지 않는 설정

어떤 항목이 복제되지 않는지 알아 두면 새 캘린더를 올바르게 설정하는 데 도움이 돼요.

- **캘린더 이름:** 복제된 캘린더의 이름은 자동으로 Copy of '[원래 이름]'이 돼요. 헷갈리지 않도록 설정하면서 이름을 바꿔 주세요.
- **Calendar ID**(캘린더 ID): 복제본에는 새로운 고유 캘린더 ID가 만들어져요.
- **캘린더 URL:** 복제본의 URL은 원본의 클릭 링크를 바탕으로 하고, 끝에 임의의 숫자가 덧붙어요.
- **워크플로우 자동화:** 원본 캘린더에 연결된 트리거나 워크플로우는 복제되지 않아요. 새로 만들거나 다시 지정해야 해요.

## 캘린더 복제 방법

기존 캘린더를 복제하려면 아래 단계를 따르세요.

#### 1단계: 캘린더 설정으로 이동

1. 서브 계정 대시보드의 왼쪽 메뉴에서 **캘린더**를 선택하세요.
2. 상단 메뉴에서 **캘린더 설정**을 클릭하세요.

![캘린더 메뉴의 캘린더 설정 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051070037/original/GeLYL0xHa27HXLXJDcEs4zFyXQkeDsoUOQ.png?1754514961)

#### 2단계: 캘린더 선택

1. 복제할 캘린더 옆의 점 3개 아이콘을 클릭하세요.
2. **중복**을 선택하고, 나타나는 팝업에서 확인하세요.

![캘린더 옆 점 3개 메뉴에서 중복 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051070106/original/y22sJbotThZHuOVqzpgIKt2aEt7ymI-hVA.png?1754515179)

#### 3단계: 새 캘린더 확인

1. 새 캘린더의 이름은 자동으로 "Copy of [원래 이름]"이 돼요. 헷갈리지 않도록 이름을 바꿔 주세요.
2. 가용 시간대, 버퍼 시간, 미팅 장소, 알림 템플릿 등 모든 설정을 살펴보고 필요한 내용과 맞는지 확인하세요.
3. 설정이 끝나면 오른쪽 위의 파란색 **저장** 버튼을 클릭하세요.

![새 캘린더 설정 화면 오른쪽 위의 저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051070237/original/bnpbLryZvGkqjlg9W5MaApk5Tu78AsIevA.png?1754515588)

## 자주 묻는 질문

### 라운드 로빈, 클래스, 이벤트 등 모든 캘린더 유형을 복제할 수 있나요?
모든 캘린더 유형을 복제할 수 있고, 유형별 고유 설정도 그대로 이어받아요.

### 워크플로우나 자동화도 함께 복제되나요?
아니요. 워크플로우는 새 캘린더에 직접 다시 만들거나 다시 지정해야 해요.

### 기존 예약 링크가 새 캘린더로 연결되나요?
아니요. 원본 캘린더의 예약 링크는 계속 원본 캘린더에 연결되어 있어요. 복제본에는 고유한 예약 링크가 따로 만들어져요.

### 캘린더의 시간대 설정도 그대로 복제되나요?
네, 복제본은 원본과 같은 시간대 설정을 유지해요. 그래서 예약이 올바른 현지 시간으로 표시돼요.
