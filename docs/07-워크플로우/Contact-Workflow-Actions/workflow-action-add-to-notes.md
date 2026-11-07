---
원문: /support/solutions/articles/155000003143-workflow-action-add-to-notes
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Add to Notes(메모 추가)

**Add to Notes**(메모 추가) 액션은 워크플로우에 들어온 연락처 같은 레코드에 메모를 자동으로 남겨 줘요. 연락처에 대한 중요한 내용이나 나중에 참고할 정보를 기록할 때 쓰세요.

## 개요

**Add to Notes** 액션을 쓰면 연락처 레코드에 원하는 메모를 바로 넣을 수 있어요. 연락처에 대한 중요한 내용이나 앞으로 참고할 맞춤 정보를 정리해 두기에 좋아요.

이 액션은 워크플로우에 들어온 레코드에 메모를 추가해요.

- 연락처 기준 워크플로우에서는 연락처 레코드에 메모가 추가돼요.
- 커스텀 오브젝트 워크플로우에서는 워크플로우에 들어온 커스텀 오브젝트 레코드에 메모가 추가돼요.

## 액션 이름

**Add to Notes**

## 액션 설명

- 워크플로우에 들어온 레코드(예: 연락처 레코드, 커스텀 오브젝트 레코드)에 메모를 추가해요. 연락처가 요청한 내용, 후속 조치, 연락처가 알려 준 개인 정보처럼 이후 응대에 도움이 되는 내용을 적을 수 있어요.
- **custom value picker**(커스텀 값 선택기)를 사용하면 메모에 커스텀 값도 넣을 수 있어요.
- 추가된 메모는 레코드의 **메모** 필드에서 확인할 수 있어요.

## 액션 상세 정보

1. 사용할 수 있는 액션 목록에서 **Add to Notes**를 선택해요.
2. **Enter a descriptive name**(설명이 되는 이름 입력) 칸에 액션 이름을 입력해요. 예를 들어 "Add Notes"처럼 어떤 일을 하는 액션인지 알 수 있게 짓는 게 좋아요.
3. 텍스트 편집기에 연락처에 추가할 메모를 입력해요.
4. 메모에 커스텀 값을 넣으려면 custom value picker에서 원하는 커스텀 값을 골라요.
5. 메모에 트리거 링크를 넣으려면 **Trigger Links**(트리거 링크) 아이콘을 사용해요.

추가로 알아 둘 내용이에요.

- 메모 제목과 메모 색상 지정을 지원해요. 두 항목 모두 선택 사항이라서 기존 워크플로우는 그대로 작동하고, 이미 있는 메모도 바뀌지 않아요.
- 지원하는 워크플로우 유형은 다음과 같아요.

  1. 연락처 기준 워크플로우

     - 연락처 레코드에 메모를 추가해요.
     - 선택 사항인 메모 제목과 메모 색상을 지원해요.

  2. 커스텀 오브젝트 워크플로우

     - 워크플로우에 들어온 커스텀 오브젝트 레코드에 메모를 추가해요.
     - 커스텀 오브젝트 워크플로우의 메모에서는 메모 제목과 메모 색상을 아직 지원하지 않아요.

### Add to Notes의 리치 텍스트 서식

Add to Notes는 메모에서 쓰는 것과 같은 리치 텍스트 편집기를 사용해요. 굵게, 기울임, 밑줄, 취소선, 글머리 기호 목록, 번호 목록, 하이퍼링크 같은 기본 서식을 쓸 수 있어요.

활성화 방법, 지원하는 서식, 제한 사항은 [메모 및 작업 설명의 리치 텍스트](../../36-기타/리커버리/rich-text-for-notes-and-task-descriptions.md)를 참고하세요.

![Add to Notes 액션의 리치 텍스트 편집기 동작 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063159298/original/ACydKlXkajP5WS7sTSMAiaQ9vC9VcdO7ew.gif?1769001860)

![Add to Notes 액션 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031419720/original/tJo-tkY61gpy8hzGAWXBdA6oBv2XHjUTig.png?1724242023)

![Add to Notes 액션의 메모 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031419736/original/yXtmo0O9JQWMTQt55PSqpQMSNOUDW7pvBA.png?1724242043)

## 예시

### 고객이 예약하면 메모 추가하기

시나리오: 예약이 완료되면 연락처 정보와 예약 정보를 메모로 남기고 싶은 비즈니스가 있어요.

워크플로우 설정:

- 트리거: **Appointment Booked**(예약 완료)
- 액션: **Add to Notes**
- 필드: **Text Editor**(텍스트 편집기)

워크플로우 트리거:

1. **Appointment Booked**: 연락처가 예약을 완료하면 워크플로우에 들어와요.

워크플로우 액션:

1. **Add to Notes**: 텍스트 편집기에 custom value picker로 고른 커스텀 값을 넣어 메모 내용을 작성해요.
2. **Send Internal Notification**(내부 알림 보내기): 팀에 내부 알림을 보내요.

![예약 완료 트리거와 Add to Notes 액션으로 구성한 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031422021/original/NzScCWJCMV7RIc_U1F46yu-yKxLoQk7low.png?1724243445)

![Add to Notes 액션에 커스텀 값을 넣은 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031422035/original/xLLLqaKCCXc99fGWlw-3fI8GE67FOjejMg.png?1724243457)

결과: 메모가 자동으로 추가되고, 각 연락처의 **메모** 섹션에서 확인할 수 있어요.
