---

번역일: 2026-04-09
카테고리: 42-통합 > Facebook Integration
---

# Facebook 멀티 페이지 리드 광고 연동

Facebook 리드 광고 연동을 통해 Facebook 광고에서 발생하는 리드를 직접 수집하고 CRM과 자동으로 동기화할 수 있습니다. 이 연동 기능을 사용하면 Facebook에서 귀하의 제품이나 서비스에 관심을 보인 잠재 고객의 연락처 정보를 쉽게 수집하고 CRM을 통해 신속하게 후속 조치를 취할 수 있습니다. 리드 수집 과정을 자동화함으로써 시간을 절약하고 영업 및 마케팅 효율성을 향상시킬 수 있습니다.

**목차**

- [Facebook 리드 광고 연동이란?](#facebook-리드-광고-연동이란)
- [이 연동이 누에게 도움이 되나요?](#이-연동이-누에게-도움이-되나요)
- [이 연동의 장점은?](#이-연동의-장점은)
- [Facebook 리드 광고 사전 요구사항](#facebook-리드-광고-사전-요구사항)
- [커스텀 필드 생성하기](#커스텀-필드-생성하기)
- [하위 계정에서 Facebook 리드 광고 연동하거나 관리하기](#하위-계정에서-facebook-리드-광고-연동하거나-관리하기)
- [FB 연동 설정하기](#fb-연동-설정하기)
- [페이스북 연동 해제하기](#페이스북-연동-해제하기)
- [Facebook 페이지 관리하기](#facebook-페이지-관리하기)
- [기본 문제 해결 또는 리드 수동 동기화하기](#기본-문제-해결-또는-리드-수동-동기화하기)
- [Facebook/Instagram 메시지 활성화/비활성화하기](#facebookinstagram-메시지-활성화비활성화하기)
- [폼 관리하기](#폼-관리하기)
- [문제 해결](#문제-해결)

## Facebook 리드 광고 연동이란?

Facebook 리드 광고를 GHL(Go HighLevel)과 연동하면 비즈니스에서 리드를 자동으로 수집하고 하나의 플랫폼에서 관리할 수 있습니다. 이를 통해 리드 관리를 간소화하고, 수동 오류를 제거하며, 리드 품질을 향상시키고, 전환율을 높여 비즈니스 성장을 촉진할 수 있습니다.

### 이 연동이 누에게 도움이 되나요?

Facebook 리드 광고를 GHL(Go HighLevel)과 연동하는 것은 Facebook 광고를 사용해 리드를 생성하고 리드 관리를 간소화하려는 비즈니스에게 이상적입니다. 특히 영업팀 규모가 제한적인 중소기업이나 스타트업에게 매우 유용합니다. 리드 수집을 자동화하여 시간과 자원을 절약하면서 데이터 정확성을 향상시킬 수 있기 때문입니다. 이미 GHL을 사용하고 있는 비즈니스의 경우, 이 연동을 통해 기존 워크플로우에 리드를 원활하게 가져와 후속 조치를 강화하고 효율성을 극대화할 수 있습니다.

### 이 연동의 장점은?

Facebook 리드 광고를 CRM과 연동했을 때의 장점은 다음과 같습니다:

**자동화된 리드 수집**: 이 연동을 통해 비즈니스는 Facebook 광고를 통해 생성된 리드를 자동으로 수집하고 CRM 시스템으로 가져올 수 있어 수동 데이터 입력의 필요성을 제거합니다.

**향상된 리드 품질**: CRM을 통해 리드를 추적하고 관리함으로써 비즈니스는 고객을 더 잘 이해하고, 마케팅 노력을 개인화하며, 전체적인 리드 품질을 향상시킬 수 있습니다.

**강화된 리드 관리**: CRM 시스템을 통해 비즈니스는 리드를 한 곳에서 추적하고 관리할 수 있어 잠재 고객 및 기존 고객과의 상호작용에 대한 360도 전체 관점을 제공합니다. 이는 기업이 영업 및 마케팅 노력을 간소화하고 고객 유지율을 향상시키는 데 도움이 됩니다.

**효율적인 후속 조치**: 리드 데이터가 자동으로 수집되어 CRM 시스템으로 가져오면, 비즈니스는 리드에 신속하게 후속 조치를 취하고 리드 품질과 행동을 기반으로 영업 노력의 우선순위를 정할 수 있습니다.

**증가된 전환율**: 리드 수집을 자동화하고 리드 관리를 개선함으로써 비즈니스는 Facebook 광고로부터의 전환율과 ROI를 증가시킬 수 있습니다.

## Facebook 리드 광고 사전 요구사항

- **접근 권한**: 리드 광고를 만들려는 Facebook 페이지에 대한 접근 권한이 있어야 합니다. [페이지에 역할을 부여하는 방법](https://www.facebook.com/help/187316341316631)에 대한 Facebook 도움말 문서를 참조하세요.

- **소유권**: 같은 사용자가 페이지와 광고 계정을 소유해야 합니다. 비즈니스 레벨 연동의 경우, 페이지 소유자와 광고 계정 소유자가 동일해야 합니다. 자세한 내용은 [광고 계정 역할](https://www.facebook.com/business/help/187316341316631?id=520795622598421)에 대한 Facebook 도움말 섹션을 참조하세요.

- **권한**: 페이지와 광고 계정 권한이 있는지 확인하세요. 이상적으로는 관리자 또는 관리 권한이 있어야 합니다. 다양한 권한 레벨을 이해하려면 [Facebook 페이지 역할](https://www.facebook.com/help/323502271070625)과 [광고 권한](https://www.facebook.com/business/help/187316341316631?id=520795622598421)을 참조하세요. Facebook 페이지를 CRM에 연동하려는 사용자는 [Facebook 비즈니스 페이지의 관리자](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143)여야 하며 리드 데이터에 접근하기 위한 [리드 접근 권한](https://www.facebook.com/business/help/540596413257598?id=735435806665862)을 가지고 있어야 합니다(Facebook의 요구사항).

- **광고 계정 확인**: 페이지가 적절한 광고 계정에 연결되어 있는지 확인하세요. 광고 계정 설정으로 이동하여 연결된 페이지를 확인하세요. [광고 계정 설정 탐색 방법](https://www.facebook.com/business/help/337584869654348)에 대한 자세한 정보를 참조하세요.

- **표시**: 관련 권한을 가진 개인만 광고 계정의 소유자를 볼 수 있습니다. 자세한 내용은 [광고 계정에 대한 사용자 권한](https://www.facebook.com/business/help/187316341316631?id=520795622598421)에 대한 Facebook 가이드를 확인하세요.

- **리드 접근**: 리드 접근 권한이 있는지 확인하세요. 리드 커넥터가 표시되지 않으면 수동으로 검색하거나 활성화해야 할 수 있습니다. 리드가 동기화되지 않는 문제의 경우 [리드 광고 문제 해결 가이드](https://www.facebook.com/business/help/1667649039945425)를 참조하세요.

- **LeadConnector는 Facebook 리드 광고를 실행하는 Facebook Business Manager와 Business Page에 접근 권한이 필요합니다.**

- **신뢰할 수 있는 사람들이 Facebook 비즈니스 페이지의 일부를 관리하도록 허용할 수 있습니다. 전체 접근 권한을 부여하지 않고도 일부 사람들에게 Facebook 페이지의 특정 부분에 대한 [접근 권한](https://www.facebook.com/business/help/582754542592549?id=418112142508425)을 부여할 수 있습니다.**

- **Business Manager 열기 > 왼쪽 네비게이션 > 사용자 > 사람. FB 페이지를 CRM에 연동할 사람을 이미 추가했다면 페이지 중앙에 나타납니다. [비즈니스에 사용자를 추가하는 방법](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143)**

- **Facebook에서 사용 가능한 페이지 및 프로필 유형에 대해 알아보려면 다음 [링크](https://www.facebook.com/business/help/1034727950288693?ref=search_new_2)를 참조하세요**

### 커스텀 필드 생성하기:

- [CRM에서 리드 광고용 커스텀 필드를 만들 때는 아래에 나열된 지원되는 커스텀 필드를 사용해야 합니다:](https://www.facebook.com/help/135275340210354)

- **Facebook 리드 광고 사용 시 지원되는 커스텀 필드:**

- TEXT
- LARGE_TEXT
- NUMERICAL
- PHONE
- MONETARY
- SINGLE_OPTIONS
- DATE
- DROPDOWN (단일)

![Facebook 커스텀 필드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574166/original/fs6OMQibZRM7rOWRpqrDQ-2fB5RWv8N7-g.png?1738063961)

![Facebook 필드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574167/original/D59qNBDG_jFot6wWM6kgAg3XzoYtyIU1wA.png?1738063961)

GHL 측에서 매핑에 영향을 줄 수 있으므로 FB 폼 생성 시 설정에서 Facebook 폼의 필드명을 업데이트하지 않는 것을 권장합니다:

![Facebook 폼 필드명 주의사항](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040879836/original/_TprjhglwnAVff-g6iyYARMOwuE1_LCK8A.png?1738566799)

![Facebook 폼 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040879799/original/kK2dUYMteP2LX9JP6z0SbW7eMdF9Rz49Kw.png?1738566756)

## 하위 계정에서 Facebook 리드 광고 연동하거나 관리하기

**참고사항:**

FB 페이지를 연동한 사용자만 연결할 페이지를 선택할 수 있습니다. 해당 사용자는 Facebook에서 페이지에 대한 전체 접근 권한을 가지고 있어야 합니다.

### FB 연동 설정하기:

- 하위 계정 하에서 연동(Integration) 메뉴로 이동: 하위 계정 >> 설정(Settings) >> 연동(Integration)
![연동 메뉴 경로](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574168/original/gbroxqoMxNrVqc51OTPEgJkeGA4QlCRAWQ.png?1738063962)

- Facebook 아래의 "Connect(연결)" 버튼을 클릭하세요.

- 필요한 권한을 허용하세요.
![Facebook 권한 허용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574164/original/Uk4ydDQ2GLoJGa2BRLU4nngfH6RnKDNvTQ.png?1738063960)

- GHL과 연결하려는 계정 하의 페이지를 선택하세요.
![Facebook 페이지 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041513652/original/PO2ajSrU79tIB1GmyHY0SVG7ql_B8fzzGg.png?1739432666)

- 페이지가 연결되면 다음 단계는 폼을 설정하고 필요한 필드를 GHL 필드와 매핑하는 것입니다. 이제 모든 설정이 완료되었습니다:

![폼 설정 및 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041513779/original/O6EIw4LvuHVjqkZk9yHymjgduGTMhKUOFw.png?1739432757)

### 페이스북 연동 해제하기:

- 하위 계정 하에서 연동(Integration) 메뉴로 이동: 하위 계정 >> 설정(Settings) >> 연동(Integration)
- Facebook으로 이동하여 카드의 점 3개 메뉴를 클릭하세요.
- "Disconnect(연결 해제)"를 클릭하세요.
![Facebook 연동 해제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041514011/original/_4OkiQDqZbCbHFB5dm6ZtdV7cpFYhdk1pA.png?1739432831)

### Facebook 페이지 관리하기:

- 하위 계정 하에서 연동(Integration) 메뉴로 이동: 하위 계정 >> 설정(Settings) >> 연동(Integration)
- Facebook으로 이동하여 "Manage Pages(페이지 관리)"를 클릭하세요
- 연결하려는 페이지를 선택하고 "Update(업데이트)"를 클릭하세요.

![Facebook 페이지 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041514148/original/J6xYTwKVt2I4X4v9dGG0mfr3uRD84VRb6Q.png?1739432912)

![페이지 업데이트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574169/original/JXoe-pEfF5VbLQQbAv4FpbUA1cZgyrc88Q.png?1738063962)

### 기본 문제 해결 또는 리드 수동 동기화하기:

- 하위 계정 하에서 연동(Integration) 메뉴로 이동: 하위 계정 >> 설정(Settings) >> 연동(Integration)
- Facebook으로 이동하여 "Troubleshoot(문제 해결)"을 클릭하세요
- 다음 화면에서 사용자는 누락된 권한을 확인하고 리드를 수동으로 동기화할 수 있습니다.

![Facebook 문제 해결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041514181/original/HnTqD-fJlm_EHiypwqQPTIZUBseTA7qh2w.png?1739432938)

![수동 동기화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041514318/original/li_HLAsKa5g32ZmF1NbvsmoquJoTbiYp5g.png?1739433012)

### Facebook/Instagram 메시지 활성화/비활성화하기:

- 하위 계정 하에서 연동(Integration) 메뉴로 이동: 하위 계정 >> 설정(Settings) >> 연동(Integration)
- Facebook으로 이동하여 햄버거 메뉴에서 "Settings(설정)"를 클릭하세요.
- 다음 화면에서 연결된 페이지에 대해 FB와 IG 메신저를 활성화하세요.

![Facebook 메신저 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041514348/original/E-tcDuInxK5NjylZ73Gdb8utdrkjY0d38Q.png?1739433048)

![메신저 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574180/original/EkTefRowYarZYOf8i2lBA8jzZ_S2_SKBsw.jpeg?1738063963)

### 폼 관리하기:

- 하위 계정 하에서 연동(Integration) 메뉴로 이동: 하위 계정 >> 설정(Settings) >> 연동(Integration)
- 화면 상단의 "Facebook Form Field Mapping(Facebook 폼 필드 매핑)"으로 이동하세요.
- 편집하려는 폼을 찾아 매핑을 업데이트하거나 비활성화하세요.

![Facebook 폼 필드 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574184/original/TSSzv_OPurgrR5FS8DCes5y0R_r3c9LjZQ.png?1738063964)

![폼 매핑 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574171/original/WmTUb9xKcoXCwekJqwmXu7NJEgYy9vP9iQ.png?1738063962)

![폼 필드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574176/original/-G9fc1UrDe6nU5YlQUYnIqekcIH2g5bL9A.png?1738063963)

![폼 매핑 상세 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574575611/original/dil23RXiwEazudMemNzjuStjsmN8JIfDag.png?1738065044)

## 문제 해결

문제가 발생하는 경우 Facebook 문제 해결 문서를 참조하세요.

---
*원문 최종 수정: Sun, 16 Nov, 2025 at 5:07 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*