---

번역일: 2026-04-08
카테고리: 개발자 > Developer Resources
---

# 강화된 계정 보안

데이터를 그 어느 때보다 안전하게 보호하기 위한 새로운 보안 업데이트를 출시했습니다!

![강화된 계정 보안](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034345888/original/4BHSSG3Nx3UB57D_SZGBk9bU54xXrf8SRA.jpeg?1728418263)

강화된 보안 옵션은 이전에 API 키 생성이 취소된 로케이션에 대해서는 API 키 생성을 복원하지 않습니다. 이 옵션은 여전히 활성 API 키가 있는 로케이션에만 적용됩니다.

강화된 계정 보안을 활성화하면 다음과 같이 변경됩니다:

- **로케이션 API 키 자동 생성 비활성화**: 계정 보안을 강화하기 위해, API나 사용자 인터페이스(UI)를 통해 새 로케이션을 생성할 때 API 키가 자동으로 생성되지 않습니다. 대신 UI를 통해 수동으로 생성해야 합니다.

- **로케이션 CRUD API에서 API 키 제외**: 이전에는 로케이션 CRUD API 응답을 통해 API 키에 접근할 수 있었습니다. 앞으로는 로그인하여 UI에서 직접 키를 가져와야 합니다.

- **API v1의 사용자 API 비활성화**: 사용자 생성, 업데이트, 삭제를 위한 API v1(레거시 API 버전)의 사용자 API가 비활성화됩니다. 해커가 API 키를 취득하면 이러한 API를 통해 계정에 쉽게 침입할 수 있기 때문에, 이러한 레거시 API는 계정에 보안 위험을 초래합니다.

2024년 6월 17일부터는 사전에 옵트아웃하지 않은 모든 계정에 대해 강화된 계정 보안 설정이 기본값으로 적용됩니다.

[Settings(설정)](https://app.gohighlevel.com/settings/company)에서 옵트아웃할 수 있지만, 계정과 데이터가 위험에 노출될 수 있으므로 강력히 권장하지 않습니다.

---
*원문 최종 수정: Tue, 2 Dec, 2025 at 8:35 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*