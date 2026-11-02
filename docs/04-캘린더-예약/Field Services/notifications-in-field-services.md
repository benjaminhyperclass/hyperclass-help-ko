---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009384-notifications-in-field-services
번역일: 2026-11-02
카테고리: 04-캘린더-예약 > Field Services
---

# Field Services 알림

수동으로 일일이 챙기지 않아도 고객과 팀원에게 중요한 순간마다 알려줄 수 있어요. Field Services는 새 요청 접수부터 방문 완료까지, 중요한 시점마다 이메일, SMS(문자), 왓츠앱(WhatsApp) 메시지를 자동으로 보내줍니다. 이 문서에서는 어떤 알림을 사용할 수 있는지, 각 알림을 켜는 방법과 메시지를 편집하는 방법을 안내해요.

참고: Field Services는 현재 비공개 베타(private beta) 단계로, 선택된 계정에서만 사용할 수 있어요. 기능과 화면은 개선 과정에서 변경될 수 있습니다.

## 이 문서에서 다루는 내용

- [Field Services 알림이란?](#what)
- [알림 찾는 방법](#where)
- [사용 가능한 알림](#available)
- [알림 켜기 및 편집 방법](#edit)
- [발신자 설정](#sender)
- [병합 필드](#merge)
- [자주 묻는 질문](#faq)

---

## Field Services 알림이란?

알림은 수동으로 후속 조치를 하지 않아도 모두에게 정보를 전달해줘요. 각 알림은 **이메일**, **SMS**, **왓츠앱** 중 원하는 채널로 보낼 수 있습니다. 다음 세 대상별로 따로 설정할 수 있어요:

- **연락처(Contact)** (고객)
- **배정된 직원**
- **관리자 / 디스패처(Admin / Dispatcher)**

---

## 알림 찾는 방법

- **Field Services > Field Services Settings(설정) > Global settings(전역 설정)**로 이동하세요.
- **Operations(운영)** 아래에서 **Notifications(알림)**를 클릭하세요.
- **Contact(연락처)**, **Assigned staff(배정된 직원)**, **Admin / Dispatcher(관리자 / 디스패처)** 중에서 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162885/original/k2MkEq24uutf0PwpzrFY3o--rg-QpVx5_g.jpg?1792999579)

---

## 사용 가능한 알림

알림은 발송 시점에 따라 그룹으로 구분돼요.

| 알림 | 발송 시점 |
|---|---|
| **요청 제출(Request submitted)** | 연락처가 새 서비스 요청을 제출할 때 |
| **요청 방문 예약(Request visit scheduled)** | 요청에 대한 방문이 예약될 때 |
| **요청 방문 리마인더(Request visit reminder)** | 예약된 요청 방문 전 |
| **작업 방문 예약(Job visit scheduled)** | 작업(Job)에 대한 방문이 예약될 때 |
| **방문 일정 변경(Visit rescheduled)** | 방문 시간이 변경될 때 |
| **방문 취소(Visit cancelled)** | 방문이 취소될 때 |
| **방문 리마인더(Visit reminder)** | 예약된 방문 전 |
| **직원 이동 중(Staff en route)** | 배정된 직원이 방문지로 이동 중일 때 |
| **방문 완료(Visit completed)** | 방문이 완료 처리될 때 |

---

## 알림 켜기 및 편집 방법

- 알림 옆의 연필 아이콘을 클릭하세요.
- **Email(이메일)**, **SMS**, **WhatsApp(왓츠앱)** 중 채널 탭을 선택하세요.
- 채널을 **Disabled(비활성화)**에서 활성화 상태로 전환하세요.
- 이메일의 경우, 이메일 템플릿을 선택하거나 처음부터 직접 작성할 수 있어요. **Subject(제목)**와 **Email body(이메일 본문)**를 편집하세요. **Reset to default(기본값으로 재설정)**를 클릭하면 원래 메시지로 되돌릴 수 있어요.
- 오른쪽의 **Preview(미리보기)**를 확인하세요.
- **Save(저장)**를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162907/original/aKliJTI-uy7C3Ksvdg1r2n8yJD-zWPaRiA.jpg?1792999582)

---

## 발신자 설정

고객용 이메일의 경우, 오른쪽 **Sender settings(발신자 설정)** 패널에서 **From address(발신 주소)**와 **From name(발신자 이름)**을 설정하세요. 이 패널은 고객용 이메일 알림을 켜면 나타나요. 변경 내용을 저장하려면 해당 패널에서 **Save(저장)**를 클릭하세요.

---

## 병합 필드

메시지에는 세부 정보를 자동으로 채워주는 병합 필드(merge field)가 사용돼요. 기본 메시지에는 연락처 이름, 요청/작업 제목, 서비스 주소, 서비스 및 상품, 방문 날짜와 시간, 도착 예정 시간대, 배정된 직원 등의 필드가 포함돼 있어요. 편집기의 태그 아이콘을 사용해서 더 많은 필드를 추가할 수 있습니다.

---

## 자주 묻는 질문

**요청이 예약되면 고객에게 메시지가 두 번 가나요?**
아니요. **요청 방문 예약(Request visit scheduled)**과 **작업 방문 예약(Job visit scheduled)**을 둘 다 켜더라도, 각각 다른 시점에 트리거돼요. 하나는 요청 방문용이고, 다른 하나는 작업 방문이 예약될 때 트리거됩니다.

**제 이메일이나 SMS 템플릿을 사용할 수 있나요?**
네. 편집기에서 저장된 이메일 템플릿을 선택하거나, 직접 작성할 수 있어요.

**Field Services 이벤트로 저만의 자동화를 실행할 수 있나요?**
Field Services에 대한 워크플로우(Workflow) 지원은 베타 기간 동안 계속 확장되고 있어요. 업데이트 소식은 Release Notes를 참고해 주세요.

---
*원문 최종 수정: 2026-10-29*
*Hyperclass 사용 가이드 — hyperclass.ai*