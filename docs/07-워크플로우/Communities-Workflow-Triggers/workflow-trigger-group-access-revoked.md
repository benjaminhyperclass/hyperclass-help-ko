---
원문: /support/solutions/articles/155000003539-workflow-trigger-group-access-revoked
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Group Access Revoked(그룹 접근 권한 회수)

**Group Access Revoked**(그룹 접근 권한 회수) 트리거는 커뮤니티 안에서 사용자의 그룹 접근 권한이 회수될 때 워크플로우를 시작해요. 그룹 접근 권한을 관리하고 커뮤니티 운영을 자동화할 때 쓰세요.

## 개요

커뮤니티의 그룹 접근 권한을 관리하는 과정을 자동화하는 트리거예요. 필요할 때 접근 권한을 회수하고, 커뮤니티 운영을 간편하게 이어갈 수 있어요.

## 트리거 이름

**Group Access Revoked**

## 트리거 설명

커뮤니티 안의 특정 그룹에서 사용자의 접근 권한이 회수되면 이 트리거가 실행돼요. 접근 권한이 바뀐 사실을 사용자에게 알리는 알림이나 후속 작업을 자동으로 처리할 수 있어요.

## 설정 방법

1. **워크플로우 빌더**를 엽니다.
2. 새 워크플로우를 만듭니다.
   - **Create a Workflow**(워크플로우 만들기)를 클릭합니다.
   - 트리거 유형으로 **Group Access Revoked**를 선택합니다.
3. 트리거 세부 설정을 합니다.
   - 어느 그룹의 접근 권한이 회수될 때 실행할지 지정합니다.
   - 이어서 자동화할 액션을 추가합니다. 예를 들어 알림을 보내거나 사용자 정보를 업데이트할 수 있어요.
4. 워크플로우를 테스트합니다. 제한된 환경에서 의도한 대로 동작하는지 확인하세요.
5. 확인이 끝나면 워크플로우를 저장하고 활성화합니다.

![트리거 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033167058/original/K0ldwpuRU45kj1nHn-OQaQksYlMa20hFzA.jpeg?1726745659)

![트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033167050/original/nVzwkbWI3G7KoA2FIpppr4HzGVdFyrepwA.png?1726745650)

## 예시

전문가 네트워킹 그룹에서 사용자가 커뮤니티 가이드라인을 어겼다고 해볼게요. 이때 그 사용자의 "채용 공고" 그룹 접근 권한을 자동으로 회수하는 워크플로우를 만들 수 있어요. 그러면 해당 사용자는 채용 소식을 더 받지 못하고, 자신의 채용 공고도 더 올릴 수 없어요.
