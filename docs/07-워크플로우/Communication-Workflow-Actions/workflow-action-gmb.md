---
원문: /support/solutions/articles/155000003290-workflow-action-gmb
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — GMB(Google My Business)

**GMB** 액션은 워크플로우에서 연락처에게 Google My Business 메시지를 보낼 때 쓰는 액션이에요. 이 문서에서는 액션 설정 방법과 예시를 알려 드려요.

## 개요

**GMB**(Google My Business) 액션을 쓰면 Google My Business 메시지로 연락처에게 직접 메시지를 보낼 수 있어요. **Custom Values**(커스텀 값)와 **Trigger Links**(트리거 링크)를 넣어서 개인화된 메시지도 보낼 수 있어요.

## 액션 이름

**GMB**(Google My Business)

## 액션 설명

이 액션은 Google My Business를 통해 연락처에게 메시지를 보내요. GMB 메시징 플랫폼에서 연락처와 바로 소통할 수 있어요. 커스텀 값과 클릭할 수 있는 트리거 링크를 지원해서, 메시지를 더 개인화하고 상호작용이 가능하게 만들 수 있어요.

## 액션 상세 정보

| 필드 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name**(액션 이름) | 액션의 이름이에요. 기본값은 "GMB"예요. | 예 |
| **Message**(메시지) | 보낼 메시지 본문이에요. 텍스트, 커스텀 값, 트리거 링크를 넣을 수 있어요. | 예 |

![GMB 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032220684/original/e6QsYubg5riT1O2kKxk4rt-CrOsVQ4myeA.png?1725443079)

### 설정 방법

- **Action Name**: 액션 이름을 입력하세요. 기본값은 "GMB"예요.
- **Message**: 텍스트 상자에 메시지를 작성하세요. 아래 항목을 넣을 수 있어요.
  - **Custom Values**: `{}` 아이콘을 클릭하면 연락처 정보, 예약 정보 등 상황에 따라 바뀌는 값을 넣을 수 있어요.
  - **Trigger Links**: 링크 아이콘을 클릭하면 미리 만들어 둔 링크를 목록에서 골라 넣을 수 있어요. 이 링크는 GMB 메시지에서 클릭할 수 있어요.

## 예시

GMB 액션을 알맞게 쓰려면 워크플로우를 아래처럼 설정해 보세요.

1. **Trigger**(트리거): **Appointment Reminder**(예약 알림)처럼 상황에 맞는 트리거를 선택하세요.
2. **Action**(액션): GMB 액션을 추가하고 아래와 같은 메시지를 설정하세요.
   - **Message**: "안녕하세요 {{contact.name}}님, {{appointment.date}}에 예정된 예약을 알려 드려요. 궁금한 점이 있으면 언제든 알려 주세요!"`{}` 아이콘을 사용해 연락처 이름, 예약 날짜 같은 커스텀 값을 넣으세요.

이렇게 설정하면 연락처마다 개인화된 알림을 Google My Business로 보낼 수 있어요.
