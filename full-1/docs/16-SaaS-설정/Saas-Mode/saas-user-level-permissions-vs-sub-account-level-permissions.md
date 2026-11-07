---
원문: https://help.gohighlevel.com/support/solutions/articles/48001184431-saas-user-level-permissions-vs-sub-account-level-permissions
번역일: 2026-11-07
카테고리: 16-SaaS-설정
---

# SaaS 사용자 권한과 서브 계정 수준 권한의 차이

SaaS 모드로 만들어진 서브 계정에서 사용자 권한이 어떻게 정해지는지, 그리고 서브 계정 수준 권한을 어디에서 바꾸는지 안내해요. 이 설정은 에이전시 관리자만 쓸 수 있어요.

SaaS 모드로 만들어진 서브 계정이란, 에이전시 계정의 **SaaS 구성기**에서 만든 Stripe 구독에 누군가 가입하면서 생성된 계정을 말해요. 이런 서브 계정은 서브 계정 수준 권한의 적용을 받아요. 서브 계정 수준 권한은 **SaaS 구성기**에서 각 요금제에 설정한 기능 구성에 따라 정해져요. 설정 위치는 **에이전시 보기 > SaaS 구성기 > Plans & Pricing**(요금제 및 가격) 탭 > **세부 정보 수정** 버튼이에요.

![SaaS 구성기에서 요금제의 세부 정보 수정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021328180/original/VrCbj0X5aVBhOW6UGye02E7m2FzU5jaE7w.png?1708647465)

SaaS 모드 요금제에 가입한 사람의 사용자 계정이 만들어질 때는 서브 계정 수준 권한에 따라 그 사용자의 사용자 권한이 정해져요.

사용자는 서브 계정 수준 권한이 허용하는 범위보다 더 많은 권한을 가질 수 없어요.

## 서브 계정 수준 권한 조정하기

서브 계정 수준 권한을 조정하는 방법은 다음과 같아요.

1. **에이전시 보기**에서 왼쪽 메뉴의 **서브 계정**을 선택한 다음, 권한을 바꾸려는 서브 계정을 검색하세요.
2. 해당 서브 계정 옆의 **점 세 개(⋮)**를 클릭하고 **고객 관리**를 선택하세요.
3. **Features and Limits**(기능 및 한도)를 선택한 다음 **기능**을 선택하세요.
4. 서브 계정에서 쓰게 할 기능을 켜거나 끄세요.

![서브 계정의 기능 켜기·끄기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081192448/original/28fzbm_2iUiwhUQ-3SIrxYN1JS0v2YUMsQ.jpeg?1789651994)

기능 권한은 서브 계정 전체에서 쓸 수 있는 기능을 정해요. 개별 사용자 권한으로는 특정 사용자가 접근할 수 있는 범위를 더 좁힐 수 있어요. 사용자의 권한을 바꾸려면 서브 계정을 연 다음 **설정 > 스태프 관리 > 편집**(연필 아이콘) > **Roles and Permissions**(역할 및 권한)로 이동하세요. 서브 계정 수준에서 쓸 수 없는 기능에는 사용자도 접근할 수 없어요.
