---

번역일: 2026-04-09
카테고리: 통합 > Other Integrations
---

# 이메일 오류: 양방향 동기화를 위한 권한 부족

이메일 오류에서 "권한 부족"이라는 메시지가 나타난다면, Gmail에서 권한이 누락되거나 취소되어 이메일 발송을 차단하고 있다는 의미입니다.

이런 상황은 보통 다음과 같은 경우에 발생합니다:

- **비밀번호 변경** – 연동을 설정한 후 이메일 비밀번호가 변경된 경우
- **액세스 권한 취소** – Gmail 계정 설정(Settings)에서 LeadConnector 앱의 액세스 권한이 해제된 경우
- **불완전한 권한 부여** – 연동(Integration) 시 Gmail 액세스 권한을 승인할 때 필요한 모든 권한(스코프)을 선택하지 않은 경우

![권한 부족 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051781890/original/JIAaHOUEO4V968R9oZ4xZoUEL6ILb6lB2g.png?1755505153)

## **문제 해결 방법**

### 1단계: 양방향 동기화 재연결

- 브라우저 캐시와 쿠키를 삭제합니다.
- `Settings(설정) → Email → 2-Way Sync`로 이동합니다.
- Gmail 계정을 다시 연결하고 요청되는 모든 권한을 반드시 부여합니다.

### 2단계: 앱 제거 후 재연결 (문제가 지속될 경우)

오류가 계속 발생한다면:

- Google 계정으로 이동: `Security(보안) → Third-party apps with account access(계정 액세스 권한이 있는 서드파티 앱)`
- LeadConnector 앱을 제거합니다.
- Hyperclass 계정으로 돌아가서 양방향 동기화를 위해 Gmail을 다시 연결합니다.

이렇게 하면 연결이 새로 고쳐지고 권한 부족 문제가 해결됩니다.

## **중요 사항**

- 연동(Integration) 시 요청되는 모든 권한을 반드시 부여해야 합니다.
- 비밀번호가 변경되면 연동을 다시 연결해야 합니다.
- 연결된 Gmail 계정에 이메일 발송/수신에 필요한 권한이 있는지 확인해야 합니다.

---
*원문 최종 수정: Mon, 18 Aug, 2025 at 3:19 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*