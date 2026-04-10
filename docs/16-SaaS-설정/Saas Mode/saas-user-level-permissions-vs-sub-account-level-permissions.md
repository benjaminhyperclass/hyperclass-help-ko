---

번역일: 2026-04-08
카테고리: 16-SaaS-설정 > Saas Mode
---

# SaaS 사용자 수준 권한 vs 하위 계정 수준 권한

SaaS 모드를 통해 생성된 하위 계정(Sub-account)(즉, 에이전시 계정의 SaaS 설정에서 만든 Stripe 구독을 통해 누군가 가입하여 생성된 계정)은 SaaS 설정의 각 플랜 기능 세트에 의해 결정되는 하위 계정 수준 권한의 제약을 받습니다. (이는 Agency View > SaaS Configurator > Plans & Pricing 탭 > Edit Details 버튼에서 확인할 수 있습니다)

![하위 계정 권한 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021328180/original/VrCbj0X5aVBhOW6UGye02E7m2FzU5jaE7w.png?1708647465)

SaaS 모드 플랜에 가입한 사람의 사용자 계정을 시스템이 생성할 때, 그들의 사용자 권한(User Permissions)은 하위 계정 수준 권한에 의해 결정됩니다.

사용자는 하위 계정 수준 권한이 허용하는 것보다 더 많은 권한을 가질 수 없습니다.

## 하위 계정 수준 권한 조정하기

하위 계정 수준 권한을 조정하려면:

- 에이전시 계정(Agency View) > Sub-Accounts 탭으로 이동 > 권한을 변경하고자 하는 하위 계정을 검색
- 세 개의 점을 클릭 > "Manage Client" 클릭
- "Enable/Disable Products" 섹션까지 스크롤하여 기능을 켜고 끌 수 있는 토글을 찾습니다.

![기능 활성화/비활성화 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48104854697/original/Db-BL1fgapK8zQx-hLUC0kaJ8abnhmjhxw.png?1621529624)

기능을 토글로 활성화하면 해당하는 사용자 권한이 잠금 해제되며, 하위 계정 > Settings(설정) > Team Management(팀 관리)로 이동하여 관리자가 Edit을 클릭하고 사용자 권한을 조정할 수 있습니다.

---
*원문 최종 수정: Fri, 23 Feb, 2024 at 7:19 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*