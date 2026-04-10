---

번역일: 2026-04-09
카테고리: 통합 > 기타 연동
---

# 링크드인 리드 광고 연동

링크드인에서 생성된 모든 리드를 손쉬운 연동을 통해 CRM으로 바로 가져올 수 있습니다.

**목차**
- [작동 원리](#작동-원리)
- [링크드인 연동 시작하기](#링크드인-연동-시작하기)
- [폼 필드 매핑](#폼-필드-매핑)
- [연결 성공 여부 테스트 방법](#연결-성공-여부-테스트-방법)

# 작동 원리

## 링크드인 연동 시작하기:

- Settings(설정) 탭 아래의 Integrations(연동) 페이지로 이동합니다.
- LinkedIn 연동을 찾습니다.
- Connect를 클릭하여 연동 프로세스를 시작합니다.

![링크드인 연동 시작](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050937037/original/uDbL-RMCZjwizOh3wrnz-RjMMvoPWShZWA.png?1754385847)

- Connect를 클릭하면 링크드인 로그인을 요청합니다.

![링크드인 로그인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050937133/original/J-4GqzyNUDDGAYB-7vYtTDI3n3uL2nNdqw.png?1754385932)

- 연동이 성공적으로 이루어지도록 모든 필요한 권한을 부여해주세요.
- 로그인이 완료되면, 하위 계정에 연결할 광고 계정을 하나 또는 여러 개 선택합니다.
- 참고: 하위 계정에 연결할 수 있는 광고 계정 수에는 제한이 없습니다. 연동하려는 광고 계정에 링크드인 페이지가 연결되어 있는지 확인하세요. 이것이 없으면 연동이 성공하지 않습니다.

![광고 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050936861/original/8PdeB7nBAXaK1vi3wcBH6TrktQv7reZutQ.png?1754385746)

- 연동하는 각 광고 계정에 대해 동기화 시간을 설정합니다. 옵션은 다음과 같습니다:
  - 모든 리드: 지난 90일의 모든 리드와 새로운 리드를 동기화합니다.
  - 새 리드만: 새로운 리드만 동기화합니다.
- Connect를 클릭하여 진행합니다.

## 폼 필드 매핑:

- "Configure form field mapping"을 클릭하거나 상단의 LinkedIn form field mapping 탭으로 이동합니다.
- Map Fields 버튼을 사용하여 링크드인 폼 필드를 CRM 필드와 일치시킵니다.
- Confirm을 클릭하여 저장하고 연동을 완료합니다.
- 특정 폼에서 유입되는 리드를 비활성화하려면 상태를 토글로 끄세요.

![폼 필드 매핑 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050936863/original/9ToHqvcEOanVjbnECWI45BijoIdSQoi11A.png?1754385747)

## 연결 성공 여부 테스트 방법:

리드 동기화가 제대로 작동하는지 테스트하려면 다음 단계를 따르세요:

- 링크드인 계정으로 이동하여 "Advertise"를 클릭합니다.

![링크드인 광고 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050937844/original/KdzBo1kRxtveLSlnGVZEclNH3D-nJ_Hn1w.png?1754386440)

- 테스트할 광고 계정을 선택합니다.

![광고 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050938048/original/Jv_3i5wlgdFUUIfSP8bCqXD23m_25TouZg.png?1754386571)

- 테스트 리드를 보낼 캠페인 그룹과 광고를 선택합니다.

![캠페인 및 광고 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050938156/original/2eTCDPIWXaPx1lLQY6HKdlSkRmCZrjmZLg.png?1754386654)

- 광고 이름을 클릭하여 리드 포스트를 엽니다.
- CRM으로 테스트 리드를 보내되, 폼이 활성화되어 있고 매핑되어 있는지 확인하세요.

![리드 전송 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050938223/original/oTTwtAGP1vc4Z9M9JOovPwI9VPzl39S6Tw.png?1754386716)

- Contacts(연락처) 페이지에서 리드를 확인합니다.

![연락처 페이지에서 리드 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050938269/original/Ry-DFWkPJkxLAbvsm_yLdw1TdRu2Z8uyuA.png?1754386755)

---
*원문 최종 수정: 2025-08-05*
*Hyperclass 사용 가이드 — hyperclass.ai*