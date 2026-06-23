---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Communities Workflow Triggers
---

# 워크플로우 트리거 - 그룹 액세스 취소됨

## 개요

Hyperclass 워크플로우의 그룹 액세스 취소됨(Group Access Revoked) 트리거는 커뮤니티 내 그룹 접근 권한 관리 프로세스를 자동화하여, 필요 시 접근 권한을 취소하고 커뮤니티 상호작용을 원활하게 관리할 수 있게 해줍니다.

## 트리거 이름

Group Access Revoked (그룹 액세스 취소됨)

## 트리거 설명

"그룹 액세스 취소됨" 트리거는 커뮤니티 내 특정 그룹에 대한 사용자의 접근 권한이 취소될 때 활성화됩니다. 이를 통해 그룹 접근 권한 변경 사항을 사용자에게 알리는 자동 알림과 액션을 설정할 수 있습니다.

## 설정 방법

- **워크플로우 빌더(Workflow Builder)로 이동**: Hyperclass 계정에서 워크플로우 빌더에 접근합니다.
- **새 워크플로우 생성**: "Create a Workflow(워크플로우 생성)"을 클릭합니다.
- 관련 트리거 유형을 선택합니다: "Group Access Revoked(그룹 액세스 취소됨)"
- **트리거 세부사항 설정**: 어떤 그룹의 접근 권한이 취소되는지 지정합니다.
- 자동화하고자 하는 후속 액션을 추가합니다 (예: 알림 발송 또는 사용자 기록 업데이트).
- **워크플로우 테스트**: 통제된 환경에서 테스트하여 워크플로우가 예상대로 작동하는지 확인합니다.
- **저장 및 활성화**: 확인 후 워크플로우를 저장하고 사용을 위해 활성화합니다.

![그룹 액세스 취소됨 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033167058/original/K0ldwpuRU45kj1nHn-OQaQksYlMa20hFzA.jpeg?1726745659)

![워크플로우 트리거 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033167050/original/nVzwkbWI3G7KoA2FIpppr4HzGVdFyrepwA.png?1726745650)

## 예시

예를 들어, 전문 네트워킹 그룹에서 사용자가 커뮤니티 가이드라인을 위반한 경우, "구인 게시판" 그룹에 대한 접근 권한을 자동으로 취소하는 워크플로우를 설정할 수 있습니다. 이를 통해 해당 사용자는 더 이상 구인 정보 업데이트를 받지 못하고, 자신의 구인 게시물도 올릴 수 없게 됩니다.

---
*원문 최종 수정: Tue, 8 Apr, 2025 at 3:13 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*