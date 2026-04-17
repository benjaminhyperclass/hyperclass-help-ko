---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Contact Workflow Actions
---

# 워크플로우 액션 - 노트에 추가

목차

- [개요](#개요)
- [액션 이름](#액션-이름)
- [액션 설명](#액션-설명)
- [액션 세부사항](#액션-세부사항)
- [예시](#예시)

## 개요

"노트에 추가(Add to Notes)" 액션을 사용하면 연락처의 레코드에 특정 노트를 직접 삽입할 수 있습니다. 이는 연락처에 대한 중요한 세부사항이나 향후 참조에 유용할 수 있는 모든 커스텀 정보를 추적하는 데 필수적입니다.

## 액션 이름

노트에 추가(Add to Notes)

## 액션 설명

- 이 액션은 연락처 레코드에 커스텀 노트를 추가할 수 있게 해줍니다. 이러한 노트에는 향후 상호작용에 도움이 될 수 있는 모든 정보가 포함될 수 있습니다. 예를 들어 특정 요청사항, 후속 작업, 연락처가 공유한 개인 세부사항 등입니다.
- 커스텀 값 선택기를 사용하여 노트에 커스텀 값도 추가할 수 있습니다.
- 추가된 노트는 연락처 상세 정보의 "노트(Notes)" 필드에서 확인할 수 있습니다.

## 액션 세부사항

단계별 가이드

- 액션 유형 선택: 사용 가능한 액션 목록에서 "노트에 추가(Add to Notes)"를 선택하세요.
- 액션 이름 지정: "노트 추가" 등 액션에 대한 설명적인 이름을 입력하세요.
- 노트 추가: 연락처에 추가하고 싶은 노트를 텍스트 편집기에 입력하세요.
- 커스텀 값: 커스텀 값 선택기를 사용하여 모든 커스텀 값을 사용할 수 있습니다.
- 트리거 링크: "트리거 링크(Trigger Links)" 아이콘을 사용하여 노트에 트리거 링크도 추가할 수 있습니다.

### 노트에 추가에서의 리치 텍스트 서식

노트에 추가는 노트에서 사용할 수 있는 것과 같은 리치 텍스트 편집기 경험을 사용합니다. 리치 텍스트는 굵게, 기울임, 밑줄, 취소선, 글머리 기호 및 번호 목록, 하이퍼링크 등의 일반적인 서식을 지원합니다.

활성화, 지원되는 서식 및 제한 사항에 대해서는 다음을 참조하세요: [노트 및 태스크 설명용 리치 텍스트](../../36-기타/리커버리/rich-text-for-notes-and-task-descriptions.md)

![노트에 추가 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063159298/original/ACydKlXkajP5WS7sTSMAiaQ9vC9VcdO7ew.gif?1769001860)

![노트에 추가 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031419720/original/tJo-tkY61gpy8hzGAWXBdA6oBv2XHjUTig.png?1724242023)

![커스텀 값 선택기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031419736/original/yXtmo0O9JQWMTQt55PSqpQMSNOUDW7pvBA.png?1724242043)

## 예시

### 고객이 예약을 잡을 때 노트 추가하기

시나리오: 예약이 잡힐 때 연락처와 예약 세부사항이 포함된 노트를 추가하고 싶은 비즈니스가 있습니다.

워크플로우 설정:

- 트리거: 예약 완료(Appointment Booked)
- 액션: 노트에 추가(Add to Notes)
- 필드: 텍스트 편집기

워크플로우 트리거:

- 예약 완료: 연락처가 예약을 잡으면 워크플로우에 진입합니다.

워크플로우 액션:

- 노트에 추가: 커스텀 값 선택기의 세부사항을 사용하여 텍스트 편집기에 세부사항을 추가합니다.
- 내부 알림 발송: 팀에게 내부 알림을 발송합니다.

![워크플로우 설정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031422021/original/NzScCWJCMV7RIc_U1F46yu-yKxLoQk7low.png?1724243445)

![노트 추가 예시 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031422035/original/xLLLqaKCCXc99fGWlw-3fI8GE67FOjejMg.png?1724243457)

결과: 이렇게 하면 노트가 추가되고 각 연락처의 "노트(Notes)" 섹션에서 확인할 수 있습니다.

---
*원문 최종 수정: Wed, 21 Jan, 2026 at 8:08 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*