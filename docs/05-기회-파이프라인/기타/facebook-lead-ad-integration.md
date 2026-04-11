---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 페이스북 리드 광고 연동(Facebook Lead Ad Integration) 및 문제 해결 가이드

페이스북 리드 광고(Facebook Lead Ads) 연동을 통해 페이스북 광고에서 직접 리드를 수집하고, CRM과 자동으로 동기화할 수 있습니다. 이 연동 기능을 사용하면 페이스북에서 상품이나 서비스에 관심을 보인 잠재 고객의 연락처 정보를 쉽게 수집하고, CRM을 통해 빠르게 후속 조치를 할 수 있습니다. 리드 수집 과정을 자동화하여 시간을 절약하고 영업과 마케팅 효율성을 높일 수 있습니다.

#### 이 아티클에서 다루는 내용:

#### [페이스북 리드 광고 연동이란?](#페이스북-리드-광고-연동이란)

#### [누구에게 이 연동이 도움이 될까요?](#누구에게-이-연동이-도움이-될까요)

#### [이 연동의 장점은?](#이-연동의-장점은)

#### [페이스북 리드 광고 사전 준비사항](#페이스북-리드-광고-사전-준비사항)

#### [페이스북 리드 광고 사용 시 지원되는 커스텀 필드](#페이스북-리드-광고-사용-시-지원되는-커스텀-필드)

#### [하위 계정에 페이스북 리드 광고 직접 연동하는 방법](#하위-계정에-페이스북-리드-광고-직접-연동하는-방법)

#### [문제 해결](#문제-해결)

#### [리드 광고가 하위 계정으로 들어오지 않는 이유는?](#리드-광고가-하위-계정으로-들어오지-않는-이유는)

#### [Pabbly Connect나 Zapier 같은 서드파티 서비스로 페이스북 리드를 연동하는 방법](#pabbly-connect나-zapier-같은-서드파티-서비스로-페이스북-리드를-연동하는-방법)

#### [하위 계정에서 페이스북 토큰이 만료된 이유와 해결 방법](#하위-계정에서-페이스북-토큰이-만료된-이유와-해결-방법)

#### [일반적인 오류](#일반적인-오류)

#### [페이지 품질 문제](#페이지-품질-문제)

#### [권한 문제](#권한-문제)

#### [인스타그램 연결/메시지 확인](#인스타그램-연결메시지-확인)

#### [메신저/인스타그램 일부 메시지 동기화 안됨](#메신저인스타그램-일부-메시지-동기화-안됨)

#### [리드 동기화 안됨 문제](#리드-동기화-안됨-문제)

#### [인스타그램 계정을 FB 페이지에 연결하거나 연결 확인하는 방법](#인스타그램-계정을-fb-페이지에-연결하거나-연결-확인하는-방법)

#### [누락된 페이지](#누락된-페이지)

## 페이스북 리드 광고 연동이란?

페이스북 리드 광고와 CRM(고객 관계 관리) 시스템의 연동을 통해 비즈니스는 페이스북 광고를 통해 생성된 리드를 자동으로 수집하고 CRM 시스템으로 가져올 수 있습니다. 이 연동을 통해 비즈니스는 리드 수집 프로세스를 간소화하고, 수동 데이터 입력 오류를 방지하며, 리드에 대한 후속 조치를 더욱 효율적으로 수행할 수 있습니다. 페이스북 리드 광고를 CRM과 연동함으로써 비즈니스는 단일 플랫폼을 통해 리드를 추적하고 관리할 수 있으며, 이는 리드 품질 개선, 전환율 증가, 궁극적으로 비즈니스 성장에 도움이 됩니다.

### 누구에게 이 연동이 도움이 될까요?

페이스북 리드 광고와 CRM 연동은 페이스북 광고를 통해 리드를 생성하고 리드 수집 프로세스를 간소화하고자 하는 모든 비즈니스나 조직에 유용합니다. 특히 리드를 수동으로 수집하고 관리할 대규모 영업이나 마케팅 팀이 없는 소규모 비즈니스나 스타트업에 도움이 됩니다. 리드 수집 프로세스를 자동화함으로써 비즈니스는 시간과 자원을 절약하면서 리드 데이터의 정확성과 품질을 개선할 수 있습니다. 또한 이미 CRM을 사용하고 있는 비즈니스에게는 페이스북 리드 데이터를 기존 워크플로우와 후속 프로세스에 원활하게 통합하는 데 도움이 됩니다.

### 이 연동의 장점은?

페이스북 리드 광고와 CRM 연동의 장점은 다음과 같습니다:

**자동 리드 수집**: 이 연동을 통해 비즈니스는 페이스북 광고를 통해 생성된 리드를 자동으로 수집하고 CRM 시스템으로 가져올 수 있어, 수동 데이터 입력 필요성을 제거합니다.

**리드 품질 개선**: CRM을 통해 리드를 추적하고 관리함으로써 비즈니스는 고객을 더 잘 이해하고, 마케팅 노력을 개인화하며, 리드의 전반적인 품질을 개선할 수 있습니다.

**향상된 리드 관리**: CRM 시스템을 통해 비즈니스는 한 곳에서 리드를 추적하고 관리할 수 있으며, 잠재 고객 및 고객과의 상호 작용에 대한 360도 뷰를 제공합니다. 이는 회사가 영업 및 마케팅 노력을 간소화하고 고객 유지율을 개선하는 데 도움이 됩니다.

**효율적인 후속 조치**: 리드 데이터가 자동으로 수집되어 CRM 시스템으로 가져오기 때문에, 비즈니스는 리드와 빠르게 후속 조치를 취하고 리드 품질과 행동에 기반하여 영업 노력의 우선순위를 정할 수 있습니다.

**전환율 증가**: 리드 수집을 자동화하고 리드 관리를 개선함으로써 비즈니스는 페이스북 광고로부터의 전환율과 ROI를 증가시킬 수 있습니다.

## 페이스북 리드 광고 사전 준비사항

- **접근 권한**: 리드 광고를 만들고자 하는 페이스북 페이지에 대한 접근 권한이 있어야 합니다. [페이지에 역할을 부여하는 방법](https://www.facebook.com/help/187316341316631)에 대한 페이스북 도움말 아티클을 참조하세요.
- **소유권**: 페이지와 광고 계정을 같은 사용자가 소유해야 합니다. 비즈니스 레벨 연동의 경우, 페이지 소유자와 광고 계정 소유자가 같아야 합니다. [광고 계정 역할](https://www.facebook.com/business/help/187316341316631?id=520795622598421)에 대한 페이스북 도움말 섹션에서 더 자세한 정보를 확인하세요.
- **권한**: 페이지와 광고 계정 권한이 있는지 확인하세요. 이상적으로는 관리자 또는 관리 권한이 있어야 합니다. 다양한 권한 레벨을 이해하려면 [페이스북 페이지 역할](https://www.facebook.com/help/323502271070625)과 [광고 권한](https://www.facebook.com/business/help/187316341316631?id=520795622598421)을 참조하세요. 페이스북 페이지를 CRM에 연동하려는 사용자는 [페이스북 비즈니스 페이지의 관리자](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143)여야 하며 리드 데이터에 접근할 수 있는 [리드 접근 권한](https://www.facebook.com/business/help/540596413257598?id=735435806665862)이 있어야 합니다(페이스북에서 요구하는 사항).
- **광고 계정 확인**: 페이지가 적절한 광고 계정에 연결되어 있는지 확인하세요. 이를 위해 광고 계정 설정으로 이동하여 연결된 페이지를 확인하세요. [광고 계정 설정 탐색 방법](https://www.facebook.com/business/help/337584869654348)에 대해 더 자세히 알아보세요.
- **가시성**: 관련 권한이 있는 개인만 광고 계정의 소유자를 볼 수 있다는 점을 참고하세요. 자세한 내용은 [광고 계정 사용자 권한](https://www.facebook.com/business/help/187316341316631?id=520795622598421)에 대한 페이스북 가이드를 확인하세요.
- **리드 접근**: 리드 접근 권한이 있는지 확인하세요. 리드 커넥터가 표시되지 않는다면 수동으로 검색하거나 활성화해야 할 수 있습니다. 리드 동기화와 관련된 문제는 [리드 광고 문제 해결 가이드](https://www.facebook.com/business/help/1667649039945425)를 참조하세요.
- LeadConnector는 페이스북 리드 광고를 운영하는 페이스북 비즈니스 매니저와 비즈니스 페이지에 대한 접근 권한이 필요합니다.
- 페이지를 [새 페이지 환경](https://www.facebook.com/business/help/2752670058165459)으로 이동한 경우, 신뢰할 수 있는 사람들이 페이스북 비즈니스 페이지의 일부를 관리할 수 있도록 허용할 수 있습니다. 전체 접근 권한을 부여하지 않고도 특정 사람들에게 페이스북 페이지의 특정 부분에 대한 [접근 권한](https://www.facebook.com/business/help/582754542592549?id=418112142508425)을 부여할 수 있습니다.
- 비즈니스 매니저 열기 > 왼쪽 네비게이션 > 사용자 > 사람. FB 페이지를 CRM에 연동할 사람을 이미 추가했다면 페이지 중앙에 나타납니다. 이름을 클릭하여 역할과 같은 더 자세한 정보를 확인하세요. 역할은 관리자 또는 직원 접근 권한이 있어야 합니다.

추가하지 않은 경우, 먼저 사람/사용자를 추가하는 단계를 따르세요.

[비즈니스에 사용자를 추가하는 방법](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143)

이 비즈니스 매니저 역할은 페이지 역할과 다르다는 점을 기억하세요. 페이지 역할은 여전히 관리자여야 합니다.

**참고**: 새 페이지 환경은 아직 모든 페이지에서 사용할 수 없습니다. 관리하는 일부 페이지는 여전히 기존 페이지 환경을 사용할 수 있습니다. [기존 페이지에 대해 더 알아보세요](https://www.facebook.com/help/135275340210354).

- CRM에서 리드 광고용 커스텀 필드를 생성할 때는 아래 나열된 지원되는 커스텀 필드를 사용해야 합니다:

### 페이스북 리드 광고 사용 시 지원되는 커스텀 필드:

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

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48251510706/original/pEmtn9V_VcLgRYSW4mOGfvvGEH3FvTaupA.gif?1663348062)

## 하위 계정에 페이스북 리드 광고 직접 연동하는 방법

**참고**: FB 페이지를 연동한 사용자만 페이지 드롭다운에서 해당 페이지를 볼 수 있습니다. 페이지 드롭다운에서 보려면 해당 FB 페이지의 관리자여야 하며, 더 이상 다른 계정의 FB 페이지는 목록에 표시되지 않습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48291400274/original/g41sAjRNyGtEtdYy-9Cv6ezS7sGvCqVccA.png?1680771876)

페이스북 폼 매핑은 로케이션 설정(Location Settings) > 연동(Integrations) > 페이스북 폼 필드 매핑(Facebook Form Field Mapping)으로 이동했습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48245875992/original/zjZlJ3p2-QaSQiO4zraR-Bojc7vctxJRrg.gif?1660747191)

## 문제 해결

### 리드 광고가 하위 계정으로 들어오지 않는 이유는?

- 페이스북 페이지의 관리자인지 확인하세요 - [비즈니스 매니저에 관리자를 추가하는 방법](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143)

- 페이스북 광고 관리자에서 선택한 올바른 FB 리드 광고 폼이 하위 계정의 것과 일치하는지 확인할 수 있나요? - https://web.facebook.com/business/tools/ads-manager

- 하위 계정에서 설정 > 연동 > 페이스북 폼 필드 매핑에서 광고 관리자에서 선택한 폼 옆에 파란색 체크 표시가 있는지 확인하세요.

- 실제로 FB 관리자라면, Lead Connector에 접근 가능하고 페이지에 대한 접근을 허용할 수 있는지 확인하기 위해 이를 시도해보세요.

동영상에서 언급된 링크 - https://www.facebook.com/settings?tab=business_tools&ref=settings

6. 위 동영상의 단계를 완료한 후, [페이스북 리드 광고 테스팅 도구](https://developers.facebook.com/tools/lead-ads-testing)를 사용하여 리드가 하위 계정에 추가되고 있는지 확인하세요.

리드 광고 테스팅 도구: https://developers.facebook.com/tools/lead-ads-testing
페이스북 페이지 선택: https://app.gohighlevel.com/location/YOUR_LOCATION_ID/facebook_page_select

**참고**: 테스트할 때 앱 ID 39018126477806를 찾을 수 있나요? (위 동영상에서 2분 49초에 언급) 앱 ID가 표시되지 않으면 LeadConnector에 접근 권한이 없습니다. 그런 경우 아래 7단계를 계속 진행하세요.

페이스북 리드 광고가 CRM에 들어오지 않는다면 아래 동영상에서 설명하는 대로 고유한 연락처 정보를 사용해보세요:

7. LeadConnector의 페이지 접근 권한이 취소되었거나 앱 ID가 나타나지 않는다면, 수동으로 페이스북에서 LeadConnector에 리드 접근 권한을 할당해야 합니다:

i. 비즈니스 스위트로 이동하세요.

ii. 비즈니스 스위트에 접근할 수 없다면, 비즈니스 설정으로 이동하여 비즈니스를 선택한 후 (v) 단계로 건너뛰세요.

iii. 좌측 상단의 드롭다운을 클릭하고 비즈니스 계정을 선택하세요.

iv. 좌측 하단의 설정을 클릭하세요.

v. 기타 비즈니스 설정을 클릭하세요.

vi. 왼쪽 메뉴에서 연동을 클릭한 다음 리드 접근을 클릭하세요.

vii. CRM 할당을 클릭하세요. 페이스북 페이지와 연동된 CRM 시스템 목록이 표시됩니다.

viii. LeadConnector 옆의 원을 체크한 다음 할당을 클릭하세요.

**참고**: LeadConnector에 권한을 부여한 페이지 관리자는 계속 접근 권한을 유지해야 합니다. 그렇지 않으면 LeadConnector가 데이터를 가져오지 못합니다.

### Pabbly Connect나 Zapier 같은 서드파티 서비스로 페이스북 리드를 연동하는 방법

Zapier나 Pabbly Connect와 같은 서드파티 연동 도구를 사용할 수 있습니다. 더 많은 정보를 확인하세요.

### 하위 계정에서 페이스북 토큰이 만료된 이유와 해결 방법

"Important: Facebook connection has expired."라는 제목의 이메일을 받았다면, 하위 계정 중 하나의 페이스북 연동이 끊어졌다는 의미입니다.

**연결이 끊어진 이유는?**

연동이 끊어지는 여러 가지 이유가 있습니다. 가장 일반적인 것들은:

- 사용자가 비밀번호를 변경함
- 페이스북 토큰이 시간이 지나면서 자연스럽게 만료됨
- 사용자가 앱의 권한을 취소함
- 사용자가 페이스북에서 로그아웃함
- 사용자가 페이지 권한을 변경하거나 사용자를 추가/삭제함
- 가상 어시스턴트가 VPN을 사용하지 않고 다른 국가에서 로그인함

**다시 연결하려면:**

1. 받은 이메일에 표시된 계정을 "계정 전환" 드롭다운에서 선택하세요

2. 왼쪽 사이드바에서 "설정(Settings)"을 클릭하세요

3. 사이드바에서 "연동(Integrations)"을 클릭하세요

4. 페이스북 아이콘 아래의 "연결됨(Connected)" 버튼을 클릭하여 끊어진 연동을 해제하세요. 다시 연결하려면 연결(Connect)을 다시 클릭하세요

5. 팝업 창에서 본인으로 계속하고, 연결하려는 페이스북 페이지를 선택한 다음 "페이지 연결(Connect Page)" 버튼을 클릭하세요

## 일반적인 오류

### 페이지 품질 문제:

사용자가 이 문제에 직면한다면, 고객은 페이스북 지원에 지원 티켓을 제출해야 합니다.

해결 단계:

- 사용자는 페이스북에서 페이스북 페이지로 전환하고, [이 링크](https://www.facebook.com/settings?tab=profile_quality)로 이동하여 문제가 있으면 페이스북에 지원 티켓을 제출해야 합니다.
- [FB 지원 문서](https://www.facebook.com/help/1985220725104252)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003144440/original/KaKuKPEP1cyXwgjBNcXM61Rt7C88UF_bkA.png?1689683139)

### 권한 문제:

문제를 찾는 가장 쉬운 방법은 최신 FB/인스타그램 메시지와 최신 리드를 가져오려고 시도하는 것입니다.

이것이 Zapier가 하는 방식이며, 놓친 권한을 쉽게 찾는 데 도움이 됩니다. 권한이 누락되었거나 다른 이유로 FB API가 오류를 제시할 것입니다. 문제 해결 단계는 다음과 같습니다:

- [이 링크](https://www.facebook.com/settings?tab=business_tools&ref=settings)로 이동하세요
- [그리고 이 링크](https://www.facebook.com/settings?tab=applications&ref=settings)
- 모든 페이지에 대해 모든 권한이 활성화되어 있는지 확인하세요

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003145086/original/BiczOlvBDQYiINfEVG-o8Kqmv50xUF_upQ.png?1689683477)

### 인스타그램 연결/메시지 확인:

인스타그램 페이지가 FB 페이지에 연결되어 있는지 확인하세요

- 로그인한 사용자를 원하는 FB 페이지로 전환하고 [이 링크](https://www.facebook.com/settings?tab=linked_instagram)로 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003147830/original/rZhxXwK1RQ8Y9Xv_B_alphp4o5jUgM8tzg.png?1689684933)

- 메시징이 활성화되어 있는지 확인하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003147789/original/y8FWCdE6ybipFiVU89SU4W4hH-PmnWEZgA.png?1689684886)

- 페이지가 연결되어 있지만 IG 페이지가 CRM에서 옵션으로 보이지 않는다면, [하드 리셋](https://www.contractsafe.com/support/how-to-clear-your-browser-cache-and-hard-refresh)을 한 다음 연결을 시도해보세요.

### 메신저/인스타그램 일부 메시지 동기화 안됨:

때로는 이 문제의 원인이 여러 CRM 연동이 있을 때 LeadConnector 앱이 기본 수신기로 설정되지 않았기 때문입니다.

해결 단계:

- 원하는 FB 페이지로 전환하고 [이 링크로 이동하세요](https://www.facebook.com/settings?tab=advanced_messaging)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003150048/original/T9EVwMfrAxqi2nsFwTXrAgUXjT7mjGC7WA.png?1689686311)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003150854/original/I_uoXAcXds2D4qXFoXA652ovYkrEALHa9g.png?1689686853)

### 리드 동기화 안됨 문제:

아래 비즈니스 측면을 확인해야 합니다.

- 비즈니스에 추가된 사용자(직원 또는 관리자)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003151291/original/2Ywogek4UF9j2GkFpYjG6Dz0ucqzqqf1Nw.png?1689687116)

- FB 페이지 관리자:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003152796/original/XPUxQoPsF0M9oJsIzKiuM1CD131_iSXPvw.png?1689687942)

- 광고 계정 확인: 페이지 소유자가 