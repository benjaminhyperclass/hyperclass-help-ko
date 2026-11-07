---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003681-workflow-trigger-action-grant-revoke-private-channel-access
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거·액션 — Private Channel Access Granted/Revoked, Grant/Revoke Private Channel Access(비공개 채널 접근 권한 부여/해제)

커뮤니티 멤버의 비공개 채널 접근 권한을 워크플로우로 자동으로 주거나 거두는 방법을 설명해요. 멤버가 비공개 채널에 들어오거나 나갈 때마다 직접 처리하지 않아도 돼요.

[동영상](https://www.youtube.com/embed/BsGHO5IEfJU?&wmode=opaque)

## 개요

**Grant Private Channel Access**(비공개 채널 접근 권한 부여)와 **Revoke Private Channel Access**(비공개 채널 접근 권한 해제) 액션을 쓰면 비공개 채널 접근 권한을 자동으로 관리할 수 있어요. 커뮤니티 활동과 멤버 경험을 더 매끄럽게 만들어 줘요.

## 트리거 이름

- **Private Channel Access Granted**(비공개 채널 접근 권한 부여됨)
- **Private Channel Access Revoked**(비공개 채널 접근 권한 해제됨)

## 액션 이름

- **Grant Private Channel Access**
- **Revoke Private Channel Access**

## 액션 설명

- **Grant Private Channel Access** 액션은 커뮤니티 그룹 안의 특정 채널(비공개 채널)에 멤버가 접근할 수 있게 해 줘요. 동시에 그 멤버를 커뮤니티 그룹에도 추가해요. 이 자동화로 멤버는 해당 채널의 소식을 제때 받고, 채널 콘텐츠와 다른 멤버들과 바로 소통할 수 있어요.
- **Revoke Private Channel Access** 액션은 커뮤니티 그룹 안의 특정 채널(예: 비공개 채널)에 대한 멤버의 접근 권한을 거둬요. 멤버는 그룹에는 그대로 남아 있어요.

## 설정 방법

1. 하이퍼클래스 계정에서 **워크플로우 빌더**를 엽니다.
2. 새 워크플로우를 만듭니다.
   1. **Create a Workflow**(워크플로우 만들기)를 클릭합니다.
   2. 알맞은 액션 유형인 **Grant Private Channel Access** 또는 **Revoke Private Channel Access**를 선택합니다.
3. 접근 권한을 줄(또는 거둘) 그룹과 비공개 채널을 지정합니다.
   - 먼저 그룹을 고르고, 이어서 비공개 채널을 고릅니다. 선택 목록에는 비공개 채널만 나타나요. 대상 비공개 채널이 미리 만들어져 있는지 확인하세요.
   - 멤버가 아직 그룹에 속해 있지 않으면 그룹에 먼저 추가되고, 이어서 선택한 채널에도 추가돼요.
   - 이어서 자동화하고 싶은 액션이 있으면 추가합니다.

     ![비공개 채널 접근 권한 액션 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034017891/original/fIFFeFv2jyenVn4oV3a9ZTThOcFGqjLvKQ.png?1727951539)
     ![비공개 채널 접근 권한 액션 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034018460/original/BnAM80CYzX_JkpqTvvDkTGKquYI8Rjr1WQ.png?1727951833)
4. 테스트 환경에서 워크플로우가 의도대로 동작하는지 확인합니다.
5. 문제가 없으면 워크플로우를 저장하고 활성화합니다.

## 예시

독서 모임 커뮤니티에 새 멤버가 가입하면 "도서 업그레이드" 비공개 채널 접근 권한을 자동으로 주는 워크플로우를 만들 수 있어요. 그러면 새 멤버는 앞으로 열릴 토론 소식을 바로 받고, 다른 멤버들과도 곧바로 이야기를 나눌 수 있어요.
