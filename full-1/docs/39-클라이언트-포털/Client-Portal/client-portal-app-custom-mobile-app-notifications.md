---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004592-client-portal-app-custom-mobile-app-notifications
번역일: 2026-11-07
카테고리: 39-클라이언트-포털
---

# 클라이언트 포탈 앱 맞춤 푸시 알림 보내기 (Smart Push Notification)

워크플로우의 **Smart Push Notification**(스마트 푸시 알림) 액션을 쓰면 클라이언트 포탈 앱을 쓰는 연락처에게 맞춤 푸시 알림을 보낼 수 있어요. 이 문서에서는 액션에 입력하는 항목과 설정 방법, 예시를 안내해요.

## 개요

**Smart Push Notification** 액션은 클라이언트 포탈을 통해 연락처에게 맞춤 푸시 알림을 보내는 액션이에요. 알림의 제목과 메시지를 직접 정할 수 있어요. 연락처가 알림을 누르면 **Communities**(커뮤니티)나 **Courses**(코스) 같은 특정 페이지로 이동하게 만들어 참여를 높일 수 있어요.

## 액션 이름

Smart Push Notification

## 액션 설명

워크플로우에서 푸시 알림을 보내는 액션이에요. 알림의 제목과 메시지를 원하는 대로 쓸 수 있고, `{{contact.first_name}}`처럼 플레이스홀더를 넣어 연락처마다 다른 내용으로 보낼 수 있어요. 알림을 누르면 클라이언트 포탈 안의 지정한 페이지로 바로 이동해요.

## 액션 상세 정보

| 필드명 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name**(액션 이름) | 기본값은 "Smart Push Notification"으로 미리 입력되어 있어요. | 아니요 |
| **Title**(제목) | 알림 제목을 입력해요(최대 100자). `{{contact.first_name}}` 같은 플레이스홀더를 쓸 수 있어요. | 예 |
| **Message Body**(메시지 본문) | 알림의 주요 내용을 입력해요(최대 300자). `{{contact.last_name}}` 같은 플레이스홀더를 쓸 수 있어요. | 예 |
| **Redirection**(리디렉션) | 연락처가 알림을 눌렀을 때 이동할 페이지를 선택해요. 선택 항목은 Communities, Courses예요. | 예 |

![Smart Push Notification 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041098978/original/kPjkNiM4x2hB9YkTlZwJ31hSykrDgnwSMQ.png?1738823772)

## 설정 방법

1. 워크플로우에 액션을 추가해요.
   1. **자동화 > 워크플로우**로 이동해요.
   2. 기존 워크플로우를 열거나 새 워크플로우를 만들어요.
   3. **+ Add Action**(액션 추가)을 클릭해요.
   4. 검색창에 "Smart"를 입력하고 **Smart Push Notification**을 선택해요.
2. 필드를 입력해요.
   1. **Title**: 알림 제목을 입력해요. 예: "Welcome {{contact.first_name}}!"
   2. **Message Body**: 알림 메시지를 자세히 입력해요.
   3. **Redirection**: 이동할 페이지(Communities 또는 Courses)를 선택해요.
3. 저장하고 활성화해요.
   1. **Save Action**(액션 저장)을 클릭해 설정을 저장해요.
   2. 테스트용 연락처로 워크플로우를 시험해 봐요.
   3. 결과가 만족스러우면 워크플로우를 활성화해요.

![워크플로우에서 Smart Push Notification 액션을 설정한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041099029/original/-ZvLYGBHeIqY35ix-r-xV2YC-wsSz_nOiQ.png?1738823827)

## 예시

커뮤니티에 새 게시글이 올라왔다는 사실을 연락처에게 알리는 경우를 예로 들어 볼게요.

- **Title**: "New Community Update!"
- **Message Body**: "Hi {{contact.first_name}}, check out the latest post in our community."
- **Redirection**: **Communities**를 선택해요.

워크플로우가 실행되면 연락처에게 푸시 알림이 가고, 알림을 누르면 커뮤니티 페이지로 이동해요.

## 참고 사항

- 이 액션은 클라이언트 포탈에 등록된 사용자에게만 알림을 보내요. 등록하지 않은 사용자에게는 알림이 가지 않아요.
- 제목과 메시지는 명확하고 간결하게 써야 참여를 높이는 데 도움이 돼요.
- 워크플로우를 저장하기 전에 필수 항목을 모두 입력했는지 확인하세요.
