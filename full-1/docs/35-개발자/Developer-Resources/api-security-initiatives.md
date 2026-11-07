---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003697-api-security-initiatives
번역일: 2026-11-07
카테고리: 35-개발자
---

# API 보안 강화 조치

하이퍼클래스는 사용하지 않는 API 키가 남아 있지 않도록 보안 조치를 운영하고 있어요. 이 문서에서는 90일 동안 쓰지 않은 API 키가 어떻게 처리되는지 안내해요.

## 90일 동안 사용하지 않은 API 키 자동 삭제

- 최근 90일 동안 사용하지 않은 에이전시 또는 서브 계정의 API 키는 자동으로 삭제돼요.
- 삭제 주기: 분기에 한 번, 모든 에이전시와 서브 계정의 API 키를 대상으로 자동으로 진행해요.
- 고객 안내:
  - 영향을 받는 에이전시와 서브 계정의 관리자에게 삭제 15일 전, 7일 전, 1일 전에 앱 내 알림을 세 번 보내요.
  - 영향을 받는 서브 계정이 있는 에이전시 관리자를 포함해 에이전시 관리자에게는 삭제 15일 전에 삭제 예정 내용을 정리한 이메일을 보내요.
  - 삭제 1일 전부터 24시간 동안, 영향을 받는 에이전시와 서브 계정 화면에 삭제 예정을 알리는 배너가 표시돼요.

---

<!-- 검토 필요: 원문 내용이 서로 다름 (위에서는 90일 미사용 API 키를 삭제한다고 하고, 아래에서는 만료됨으로 표시한다고 함) -->

## 90일 동안 사용하지 않은 레거시 API 키 만료

불필요한 인증 정보 노출을 줄이고 계정 보안을 높이기 위해, 90일 동안 사용하지 않은 레거시 API 키는 **만료됨** 상태로 바뀌어요.

다음 두 가지 키가 모두 해당돼요.

- 에이전시 단위 레거시 API 키
- 로케이션 단위 레거시 API 키

{% hint style="warning" %}
- 사용 중인 키는 영향을 받지 않아요.
- **만료됨** 키도 **설정**에 계속 표시돼요.
- 만료된 키가 아직 필요하다면 키를 교체(rotate)하거나 갱신(refresh)한 뒤 다시 사용할 수 있어요.
- v1 API 키는 더 이상 새로 만들 수 없어요.
- 새로 인증 정보를 만든다면 비공개 연동 토큰(PIT, Private Integration Token)을 권장해요.
{% endhint %}

레거시 API 키가 사용하지 않아 곧 만료될 때는 이메일 알림이 갈 수도 있어요.

![만료됨 상태로 표시된 레거시 API 키 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074448883/original/RhQDyvp9LPwxnWGiTRCJJ06kgTW4RZ9u8w.png?1782358337)

![레거시 API 키 만료 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074448869/original/f1bCOnVwSGmcNjFwQGC7orrvfKpkLxvSCQ.png?1782358292)
