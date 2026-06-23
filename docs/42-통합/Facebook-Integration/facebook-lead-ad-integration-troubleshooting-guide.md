---

번역일: 2026-04-08
카테고리: 42-통합 > Facebook Integration
---

# Facebook 리드 광고 연동(Integration) 및 문제 해결 가이드

Facebook 리드 광고 연동(Facebook Lead Ads integration)을 사용하면 Facebook 광고에서 직접 리드를 수집하고 CRM과 자동으로 동기화할 수 있습니다. 이 연동을 통해 Facebook에서 당신의 제품이나 서비스에 관심을 보인 잠재 고객의 연락처 정보를 쉽게 수집하고, CRM을 통해 빠르게 후속 조치를 취할 수 있습니다. 리드 수집 과정을 자동화함으로써 시간을 절약하고 영업 및 마케팅 효율성을 향상시킬 수 있습니다.

#### 이 아티클에서 다루는 내용:

#### [Facebook 리드 광고 연동이란?](#facebook-리드-광고-연동이란)

#### [이 연동이 도움이 되는 대상은?](#이-연동이-도움이-되는-대상은)

#### [이 연동의 장점은?](#이-연동의-장점은)

#### [Facebook 리드 광고 사전 요구 사항](#facebook-리드-광고-사전-요구-사항)

#### [Facebook 리드 광고 사용 시 지원되는 커스텀 필드:](#facebook-리드-광고-사용-시-지원되는-커스텀-필드)

#### [하위 계정에 Facebook 리드 광고를 직접 연동하는 방법](#하위-계정에-facebook-리드-광고를-직접-연동하는-방법)

#### [문제 해결](#문제-해결)

#### [리드 광고가 하위 계정에 들어오지 않는 이유는?](#리드-광고가-하위-계정에-들어오지-않는-이유는)

#### [Pabbly Connect나 Zapier 같은 서드파티 서비스로 Facebook 리드를 연동하는 방법은?](#pabbly-connect나-zapier-같은-서드파티-서비스로-facebook-리드를-연동하는-방법은)

#### [하위 계정에서 Facebook 토큰이 만료된 경우: 왜 발생하며 어떻게 해결하나요?](#하위-계정에서-facebook-토큰이-만료된-경우-왜-발생하며-어떻게-해결하나요)

#### [자주 발생하는 오류](#자주-발생하는-오류)

#### [페이지 품질 문제](#페이지-품질-문제)

#### [권한 문제](#권한-문제)

#### [인스타그램 연결/메시지 확인](#인스타그램-연결메시지-확인)

#### [메신저/인스타그램이 모든 메시지를 동기화하지 않는 경우](#메신저인스타그램이-모든-메시지를-동기화하지-않는-경우)

#### [리드 동기화 문제](#리드-동기화-문제)

#### [인스타그램 계정을 Facebook 페이지에 연결하거나 연결 상태를 확인하는 방법](#인스타그램-계정을-facebook-페이지에-연결하거나-연결-상태를-확인하는-방법)

#### [페이지가 없는 경우](#페이지가-없는-경우)

## Facebook 리드 광고 연동이란?

CRM(Customer Relationship Management) 시스템과 Facebook 리드 광고 연동은 Facebook 광고를 통해 생성된 리드를 CRM 시스템으로 자동 수집 및 가져올 수 있게 해줍니다. 이 연동을 통해 비즈니스는 리드 수집 과정을 간소화하고, 수동 데이터 입력 오류를 방지하며, 리드에 더 효율적으로 후속 조치를 취할 수 있습니다. Facebook 리드 광고를 CRM과 연동함으로써 단일 플랫폼을 통해 리드를 추적하고 관리할 수 있으며, 이는 리드 품질 향상, 전환율 증가, 궁극적으로는 비즈니스 성장에 도움이 됩니다.

### 이 연동이 도움이 되는 대상은?

CRM과 Facebook 리드 광고 연동은 Facebook 광고를 사용해 리드를 생성하고 리드 수집 과정을 간소화하려는 모든 비즈니스나 조직에 도움이 됩니다. 특히 리드를 수동으로 수집하고 관리할 대규모 영업이나 마케팅 팀이 없는 중소기업이나 스타트업에게 유용합니다. 리드 수집 과정을 자동화함으로써 비즈니스는 시간과 리소스를 절약하면서 리드 데이터의 정확성과 품질을 향상시킬 수 있습니다. 또한, 이미 CRM을 사용하고 있는 비즈니스의 경우 Facebook 리드 데이터를 기존 워크플로우와 후속 조치 프로세스에 원활하게 통합할 수 있어 도움이 됩니다.

### 이 연동의 장점은?

Facebook 리드 광고와 CRM을 연동하는 장점은 다음과 같습니다:

**자동화된 리드 수집**: 이 연동을 통해 Facebook 광고에서 생성된 리드를 자동으로 수집하고 CRM 시스템으로 가져와서 수동 데이터 입력의 필요성을 없앱니다.

**향상된 리드 품질**: CRM을 통해 리드를 추적하고 관리함으로써 비즈니스는 고객을 더 잘 이해하고, 마케팅 활동을 개인화하며, 전반적인 리드 품질을 향상시킬 수 있습니다.

**향상된 리드 관리**: CRM 시스템을 통해 리드를 한 곳에서 추적하고 관리할 수 있어, 잠재고객 및 고객과의 상호작용에 대한 360도 관점을 제공합니다. 이는 회사가 영업 및 마케팅 활동을 간소화하고 고객 유지율을 향상시키는 데 도움이 됩니다.

**효율적인 후속 조치**: 리드 데이터가 자동으로 수집되고 CRM 시스템으로 가져와지므로, 비즈니스는 리드에 빠르게 후속 조치를 취하고 리드 품질과 행동을 기반으로 영업 활동의 우선순위를 정할 수 있습니다.

**전환율 증가**: 리드 수집을 자동화하고 리드 관리를 개선함으로써 비즈니스는 Facebook 광고로부터 전환율과 ROI를 증가시킬 수 있습니다.

## Facebook 리드 광고 사전 요구 사항

- **접근 권한**: 리드 광고를 만들려는 Facebook 페이지에 대한 접근 권한이 있어야 합니다. [페이지에 역할을 부여하는 방법](https://www.facebook.com/help/187316341316631)에 대한 Facebook 도움말 아티클을 참조하세요.
- **소유권**: 동일한 사용자가 페이지와 광고 계정을 소유해야 합니다. 비즈니스 수준의 연동의 경우, 페이지와 광고 계정의 소유자가 동일해야 합니다. 자세한 내용은 [광고 계정 역할](https://www.facebook.com/business/help/187316341316631?id=520795622598421)에 대한 Facebook 도움말 섹션을 참조하세요.
- **권한**: 페이지 및 광고 계정 권한이 있는지 확인하세요. 이상적으로는 관리자(admin) 또는 관리(manage) 권한이 있어야 합니다. 다양한 권한 수준을 이해하려면 [Facebook 페이지 역할](https://www.facebook.com/help/323502271070625) 및 [광고 권한](https://www.facebook.com/business/help/187316341316631?id=520795622598421)을 참조하세요. CRM에 Facebook 페이지를 연동하려는 사용자는 [Facebook 비즈니스 페이지의 관리자여야 하고](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143) 리드 데이터에 액세스하려면 [리드 액세스 권한](https://www.facebook.com/business/help/540596413257598?id=735435806665862)이 있어야 합니다(Facebook에서 설정한 요구사항).
- **광고 계정 확인**: 페이지가 적절한 광고 계정에 연결되어 있는지 확인하세요. 이를 위해 광고 계정 설정으로 이동하여 연결된 페이지를 확인하세요. [광고 계정 설정을 탐색하는 방법](https://www.facebook.com/business/help/337584869654348)에 대한 자세한 정보를 참조하세요.
- **가시성**: 관련 권한이 있는 개인만 광고 계정 소유자를 볼 수 있다는 점에 유의하세요. 자세한 내용은 [광고 계정의 사용자 권한](https://www.facebook.com/business/help/187316341316631?id=520795622598421)에 대한 Facebook 가이드를 확인하세요.
- **리드 액세스**: 리드 액세스 권한이 있는지 확인하세요. 리드 커넥터가 보이지 않으면 수동으로 검색하거나 활성화해야 할 수 있습니다. 리드가 동기화되지 않는 문제의 경우 [리드 광고 문제 해결 가이드](https://www.facebook.com/business/help/1667649039945425)에 대한 Facebook 가이드를 참조하세요.
- LeadConnector가 Facebook 리드 광고를 실행하는 Facebook 비즈니스 매니저와 비즈니스 페이지에 액세스해야 합니다.
- 페이지를 [새 페이지 경험](https://www.facebook.com/business/help/2752670058165459)으로 이동한 경우, 신뢰할 수 있는 사람들이 일부 Facebook 비즈니스 페이지를 관리하도록 허용할 수 있습니다. 전체 액세스 권한을 부여하지 않고도 일부 사람들에게 Facebook 페이지의 특정 부분에 대한 [액세스 권한](https://www.facebook.com/business/help/582754542592549?id=418112142508425)을 부여할 수 있습니다.
- 비즈니스 매니저 열기 > 왼쪽 네비게이션 > Users > People. CRM에 FB 페이지를 연동할 사람을 이미 추가했다면 페이지 중앙에 표시됩니다.
이름을 클릭하고 역할과 같은 자세한 정보를 확인하세요. 역할은 Admin 또는 Employee 액세스 권한이 있어야 합니다.

추가하지 않았다면 먼저 사람/사용자를 추가하는 단계를 따르세요.

[비즈니스에 사용자를 추가하는 방법은?](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143)

이 비즈니스 매니저 역할은 페이지 역할과 다르다는 점을 기억하세요. 페이지 역할은 여전히 Admin이어야 합니다.

**참고사항:**

새 페이지 경험은 아직 모든 페이지에서 사용할 수 없습니다. 관리하는 일부 페이지는 여전히 클래식 페이지 경험을 사용할 수 있습니다. [클래식 페이지에 대해 자세히 알아보세요.](https://www.facebook.com/help/135275340210354)

- CRM에서 리드 광고용 커스텀 필드를 생성할 때, 아래 나열된 지원되는 커스텀 필드를 사용하시기 바랍니다:

### Facebook 리드 광고 사용 시 지원되는 커스텀 필드:

- TEXT
- LARGE_TEXT
- NUMERICAL
- PHONE
- MONETARY
- SINGLE_OPTIONS
- DATE
- DROPDOWN 
- RADIO OPTIONS
- CHECKBOX 

![Facebook 커스텀 필드 설정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48251510706/original/pEmtn9V_VcLgRYSW4mOGfvvGEH3FvTaupA.gif?1663348062)

## 하위 계정에 Facebook 리드 광고를 직접 연동하는 방법

**참고사항:**

FB 페이지를 연동한 사용자만 페이지 드롭다운에서 해당 페이지를 볼 수 있습니다. 페이지 드롭다운에서 보려면 해당 FB 페이지의 관리자여야 하며, 목록에서 다른 계정의 FB 페이지는 더 이상 볼 수 없습니다.

![Facebook 페이지 연동 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48291400274/original/g41sAjRNyGtEtdYy-9Cv6ezS7sGvCqVccA.png?1680771876)

Facebook 폼 매핑은 로케이션 설정(location settings) > 연동(integrations) > Facebook 폼 필드 매핑(Facebook Form Field Mapping) 하위로 이동했습니다.

![Facebook 폼 매핑 위치 안내](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48245875992/original/zjZlJ3p2-QaSQiO4zraR-Bojc7vctxJRrg.gif?1660747191)

## 문제 해결

### 리드 광고가 하위 계정에 들어오지 않는 이유는?

- Facebook 페이지의 관리자인가요? - [비즈니스 매니저에 관리자를 추가하는 방법](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143)

- Facebook 광고 매니저에서 올바른 FB 리드 광고 폼이 선택되어 있고 하위 계정의 것과 일치하는지 확인할 수 있나요? - [https://web.facebook.com/business/tools/ads-manager](https://web.facebook.com/business/tools/ads-manager)

- 이제 하위 계정에서 설정(settings) > 연동(integrations) > Facebook 폼 필드 매핑에서 광고 매니저에서 선택한 폼 옆에 파란색 체크 표시가 있는지 확인하세요.

- 실제로 FB 관리자라면, Lead Connector에 액세스할 수 있고 페이지에 대한 액세스를 허용할 수 있는지 확인하기 위해 다음을 시도해보세요:

비디오에서 언급된 링크 - [https://www.facebook.com/settings?tab=business_tools&ref=settings](https://www.facebook.com/settings?tab=business_tools&ref=settings)

6. 위 비디오의 단계를 완료한 후, [Facebook 리드 광고 테스트 도구](https://developers.facebook.com/tools/lead-ads-testing)를 사용하여 리드가 이제 하위 계정에 추가되고 있는지 확인하세요.

리드 광고 테스트 도구: [https://developers.facebook.com/tools/lead-ads-testing](https://developers.facebook.com/tools/lead-ads-testing)
Facebook 페이지 선택: [https://app.hyperclass.ai/location/YOUR_LOCATION_ID/facebook_page_select](https://app.hyperclass.ai/location/YOUR_LOCATION_ID/facebook_page_select)

**참고사항:**

테스트할 때 App ID 39018126477806을 찾을 수 있나요? (위 비디오의 2분 49초에서 언급) 앱 ID가 표시되지 않으면 LeadConnector에 액세스 권한이 없는 것입니다. 그런 경우 아래 7단계를 계속하세요.

Facebook 리드 광고가 CRM에 들어오지 않는 경우, 아래 비디오에서 설명한 대로 고유한 연락처 정보를 사용해보세요:

7. LeadConnector의 페이지 액세스가 철회되었거나 앱 ID가 표시되지 않는 경우, Facebook에서 LeadConnector에 리드 액세스 권한을 수동으로 할당해야 합니다:

i. 비즈니스 스위트로 이동합니다.

ii. 비즈니스 스위트에 액세스할 수 없다면 비즈니스 설정으로 이동하여 비즈니스를 선택하고 (v) 단계로 건너뜁니다.

iii. 왼쪽 상단 모서리의 드롭다운을 클릭하고 비즈니스 계정을 선택합니다.

iv. 왼쪽 하단 모서리의 설정을 클릭합니다.

v. 더 많은 비즈니스 설정을 클릭합니다.

vi. 왼쪽 메뉴에서 연동(Integrations)을 클릭한 다음 리드 액세스(Leads Access)를 클릭합니다.

vii. CRM 할당을 클릭합니다. Facebook 페이지와 연동된 CRM 시스템 목록이 표시됩니다.

viii. LeadConnector 옆의 원을 체크한 다음 할당을 클릭합니다.

**참고사항:**

LeadConnector에 권한을 부여한 페이지 관리자는 계속 액세스 권한을 유지해야 하며, 그렇지 않으면 LeadConnector가 데이터를 가져오는 데 실패합니다.

### Pabbly Connect나 Zapier 같은 서드파티 서비스로 Facebook 리드를 연동하는 방법은?

Zapier나 Pabbly Connect 같은 서드파티 연동 도구를 사용할 수 있습니다. 자세한 정보는 여기를 참조하세요.

### 하위 계정에서 Facebook 토큰이 만료된 경우: 왜 발생하며 어떻게 해결하나요?

"Important: Facebook connection has expired."라는 제목의 이메일을 받았다면, 하위 계정 중 하나의 Facebook 연동이 연결 해제되었음을 의미합니다.

**연결이 끊어진 이유는?**

연동이 끊어지는 이유는 여러 가지가 있습니다. 가장 일반적인 이유는 다음과 같습니다:

- 사용자가 비밀번호를 변경함
- Facebook 토큰이 일정 시간 후 자연스럽게 만료됨
- 사용자가 앱을 비인가함
- 사용자가 Facebook에서 로그아웃함
- 사용자가 페이지 권한을 변경하거나 사용자를 추가/제거함
- 다른 국가의 가상 어시스턴트가 VPN을 사용하지 않고 로그인함

**다시 연결하려면:**

1. 받은 이메일에 표시된 계정을 "Switch To An Account" 드롭다운에서 선택합니다

2. 왼쪽 사이드바에서 "설정(Settings)"을 클릭합니다

3. 사이드바에서 "연동(Integrations)"을 클릭합니다

4. Facebook 아이콘 아래의 "Connected" 버튼을 클릭하여 끊어진 연동을 해제합니다. 다시 연결하려면 Connect를 다시 클릭합니다

5. 팝업되는 창에서 자신으로 계속하고, 연결하려는 Facebook 페이지를 선택한 다음 "Connect Page" 버튼을 클릭합니다

## 자주 발생하는 오류

### 페이지 품질 문제:

사용자가 이 문제에 직면한다면, 고객은 Facebook 지원팀에 지원 티켓을 제출해야 합니다.

해결 단계:

- 사용자는 Facebook의 Facebook 페이지로 전환하고 [이 링크](https://www.facebook.com/settings?tab=profile_quality)로 이동하여 문제가 있는 경우 Facebook에 지원 티켓을 제출해야 합니다.
- [FB 지원 문서:](https://www.facebook.com/help/1985220725104252)

![페이지 품질 문제 해결 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003144440/original/KaKuKPEP1cyXwgjBNcXM61Rt7C88UF_bkA.png?1689683139)

### 권한 문제:

문제를 찾는 가장 쉬운 방법은 최신 FB/인스타그램 메시지와 최신 리드를 가져오려고 시도하는 것입니다.

이것은 Zapier가 하는 방식이며, 놓친 권한을 쉽게 찾을 수 있게 도와줍니다. 권한이 누락되었거나 다른 이유로 FB API에서 오류가 발생합니다. 문제 해결 단계는 다음과 같습니다:

- [이 링크](https://www.facebook.com/settings?tab=business_tools&ref=settings)로 이동합니다.
- [그리고 이 링크](https://www.facebook.com/settings?tab=applications&ref=settings)로도 이동합니다.
- 모든 페이지에 대해 모든 권한이 활성화되어 있는지 확인합니다.

![권한 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003145086/original/BiczOlvBDQYiINfEVG-o8Kqmv50xUF_upQ.png?1689683477)

### 인스타그램 연결/메시지 확인:

인스타그램 페이지가 FB 페이지에 연결되어 있는지 확인

- 로그인한 사용자를 원하는 FB 페이지로 전환하고 [이 링크](https://www.facebook.com/settings?tab=linked_instagram)로 이동합니다.

![인스타그램 연결 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003147830/original/rZhxXwK1RQ8Y9Xv_B_alphp4o5jUgM8tzg.png?1689684933)

- 메시징이 활성화되어 있는지 확인합니다.

![메시징 활성화 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003147789/original/y8FWCdE6ybipFiVU89SU4W4hH-PmnWEZgA.png?1689684886)

- 페이지가 연결되어 있지만 CRM에서 IG 페이지가 여전히 옵션으로 표시되지 않는다면 [하드 리프레시](https://www.contractsafe.com/support/how-to-clear-your-browser-cache-and-hard-refresh)를 수행한 후 연결을 시도하세요.

### **메신저/인스타그램이 모든 메시지를 동기화하지 않는 경우:**

때로는 여러 CRM 연동이 있는 경우 LeadConnector 앱이 기본 수신자로 설정되지 않은 것이 이 문제의 원인입니다.

해결 단계:

- 원하는 FB 페이지로 전환하고 [이 링크로 이동](https://www.facebook.com/settings?tab=advanced_messaging)합니다.

![고급 메시징 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003150048/original/T9EVwMfrAxqi2nsFwTXrAgUXjT7mjGC7WA.png?1689686311)

![기본 수신자 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003150854/original/I_uoXAcXds2D4qXFoXA652ovYkrEALHa9g.png?1689686853)

### **리드 동기화 문제:**

비즈니스 측면에서 아래 위치를 확인해야 합니다.

- 비즈니스에 추가된 사용자(EMPLOYEE 또는 ADMIN)

![비즈니스 사용자 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003151291/original/2Ywogek4UF9j2GkFpYjG6Dz0ucqzqqf1Nw.png?1689687116)

- FB 페이지 관리자:

![페이지 관리자 확인](https://s3.amazonaws