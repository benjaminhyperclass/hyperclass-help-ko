---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003205-trigger-note-added-workflow-trigger-note-added
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Note Added(메모 추가됨)

**Note Added**(메모 추가됨) 트리거는 연락처 기록에 메모가 추가될 때마다 워크플로우를 시작해요. 메모가 달릴 때 바로 처리해야 하는 업무가 있다면 이 트리거를 쓰세요.

## 개요

**Note Added** 트리거를 쓰면 연락처 기록에 메모가 추가될 때마다 워크플로우 안의 지정한 액션을 실행할 수 있어요.

## 트리거 이름

**Note Added**(메모 추가됨)

## 트리거 설명

이 트리거로 다음과 같은 작업을 자동화할 수 있어요.

- 내부 알림 보내기
- 연락처 정보 업데이트
- 자동화 과정의 후속 액션 실행

## 설정 방법

![Note Added 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031735352/original/3DZrIODcvvb3FnjC51E91xPf76V7HM_h0w.png?1724759304)

| 항목 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Choose a Workflow Trigger**(워크플로우 트리거 선택) | 드롭다운에서 **Note Added**를 선택해요. | 예 |
| **Workflow Trigger Name**(워크플로우 트리거 이름) | 트리거 이름을 입력해요. 예: "Note Added" | 예 |
| **Filters**(필터) | 트리거가 실행될 조건을 좁혀요. 예: **Has tag**(태그 있음) / **Doesn't have tag**(태그 없음) | 아니요 |

### 설정 순서

1. **Workflow Triggers**(워크플로우 트리거)로 이동해요.
2. **Choose a Workflow Trigger**에서 사용할 수 있는 트리거 목록 중 **Note Added**를 선택해요.
3. 트리거 이름을 입력해요. 설명이 되는 이름이면 좋아요. 예: "Note Added"
4. (선택) **Filters**를 설정해요. 어떤 경우에 워크플로우를 실행할지 필터로 정할 수 있어요. 예를 들어 **Has tag** / **Doesn't have tag** 같은 표준 필드나, 커스텀 필드가 있으면 커스텀 필드로 필터링할 수 있어요.

## 예시: 헤어컷 메모 알림

시나리오: 한 미용실에서 "헤어컷" 메모가 달리면 미용실 매니저가 바로 내부 알림을 받게 하고 싶어요.

#### 트리거 설정

- 트리거: **Note Added**
- 이름: 헤어컷 메모 알림
- 필터: 메모에 "헤어컷" 태그가 있음

#### 워크플로우 액션

1. **Notification**(알림): 메모 내용을 담아 미용실 매니저에게 내부 알림을 보내요.
2. **Task Creation**(작업 생성): 매니저가 메모를 검토할 작업을 자동으로 만들어요.

결과: 이 자동화를 쓰면 "헤어컷"으로 표시된 메모가 바로 매니저에게 전달돼요. 중요한 사안에 빠르게 대응할 수 있고 응답 시간도 줄어들어요.

![헤어컷 메모 알림 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031736934/original/bKUxyiduXUe2DVglxJlbSFVAoBDXO8blGA.png?1724760287)
