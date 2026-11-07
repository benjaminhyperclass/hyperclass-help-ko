---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003291-workflow-action-review-request
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Review Request(리뷰 요청)

**Review Request**(리뷰 요청) 액션은 연락처에게 리뷰나 피드백을 요청하는 메시지를 보내는 워크플로우 액션이에요. 이메일이나 SMS 같은 채널을 골라 요청을 보낼 수 있어요.

## 개요

**Review Request** 액션을 쓰면 연락처에게 피드백이나 리뷰를 요청할 수 있어요. 요청은 이메일, SMS 등 여러 채널로 보낼 수 있어요.

## 액션 이름

**Review Request**

## 액션 설명

이 액션은 연락처에게 리뷰 요청을 보내요. 리뷰 요청 방식(예: 이메일)을 고르고, 메시지 내용은 **Reputation Settings**(평판 설정)에서 설정해요.

## Action Details(액션 상세 정보)

![Review Request 액션의 상세 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032221015/original/vbIkWRX96_oJbKXra9qskIpF1P5hdNdk3A.png?1725443273)

| 항목 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name** | 액션의 이름이에요. 기본값은 "Send Review Request"(리뷰 요청 보내기)예요. | 필수 |
| **Review Type** | 리뷰 요청 유형을 골라요. "E-mail"을 선택할 수 있고, SMS 같은 다른 채널도 선택할 수 있어요. | 필수 |

### 설정 방법

1. **Action Name**에 액션 이름을 입력해요. 기본값은 "Send Review Request"예요.
2. **Review Type** 드롭다운 메뉴에서 리뷰 요청 유형을 선택해요. 예를 들어 이메일로 보내려면 "E-mail"을 선택해요.
3. 리뷰 요청에 담을 메시지 내용을 설정하려면 **Reputation Settings** 링크를 클릭해요. 메시지 템플릿을 사용자 지정해서 브랜드와 말투에 맞출 수 있어요.

## 예시

리뷰 요청 액션은 이렇게 구성할 수 있어요.

1. **Trigger**(트리거): "Appointment Completed"(예약 완료) 같은 트리거를 선택해요.
2. **Action**(액션): 아래와 같이 설정해요.
   - **Action Name**: "Send Review Request"
   - **Review Type**: "E-mail"
   - **Reputation Settings**에서 메시지 템플릿에 다음 내용을 넣어요.
     - 예약해 주셔서 감사하다는 인사
     - 피드백 요청
     - 리뷰를 남길 수 있는 플랫폼 링크

이렇게 설정하면 연락처에게 적절한 때에 피드백 요청이 전달돼요. 모인 의견은 고객 인사이트를 얻고 비즈니스 평판을 높이는 데 도움이 돼요.
