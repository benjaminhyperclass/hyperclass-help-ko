---
원문: /support/solutions/articles/48000987779-facebook-lead-ad-integration-troubleshooting-guide
번역일: 2026-11-06
카테고리: 42-통합
---

# Facebook 리드 광고 연동 및 문제 해결 가이드

Facebook 리드 광고를 연동하면 Facebook 광고로 모은 리드가 CRM에 자동으로 들어와요. 이 문서에서는 연동 준비 사항과 서브 계정에 직접 연동하는 방법을 안내해요. 리드가 들어오지 않을 때 확인할 항목과 자주 생기는 오류의 해결 방법도 함께 정리했어요.

Facebook에서 제품이나 서비스에 관심을 보인 잠재 고객의 연락처 정보를 바로 수집하고, CRM에서 빠르게 후속 연락을 할 수 있어요. 리드 수집을 자동화하면 시간을 아끼고 영업·마케팅 업무를 더 효율적으로 할 수 있어요.

## Facebook 리드 광고 연동이란?

Facebook 리드 광고와 CRM(고객 관계 관리) 시스템을 연동하면, Facebook 광고로 생긴 리드를 CRM으로 자동으로 가져올 수 있어요. 리드 수집 과정이 간단해지고, 직접 입력하다 생기는 실수를 줄이고, 리드에게 더 효율적으로 후속 연락을 할 수 있어요. 리드를 한 플랫폼에서 추적하고 관리하므로 리드 품질과 전환율을 높이고 비즈니스를 키우는 데도 도움이 돼요.

### 어떤 경우에 도움이 되나요?

Facebook 광고로 리드를 모으면서 리드 수집 과정을 간소화하고 싶은 비즈니스나 조직이라면 모두 도움이 돼요. 리드를 직접 수집하고 관리할 영업·마케팅 인력이 부족한 소규모 비즈니스나 스타트업에 특히 유용해요. 리드 수집을 자동화하면 시간과 자원을 아끼고 리드 데이터의 정확도와 품질도 높일 수 있어요. 이미 CRM을 쓰고 있다면 Facebook 리드 데이터를 기존 워크플로우와 후속 관리 과정에 자연스럽게 연결할 수 있어요.

### 연동하면 어떤 점이 좋나요?

Facebook 리드 광고를 CRM과 연동하면 다음과 같은 장점이 있어요.

- 자동 리드 수집: Facebook 광고로 생긴 리드가 CRM에 자동으로 들어와서 직접 입력할 필요가 없어요.
- 리드 품질 개선: CRM으로 리드를 추적하고 관리하면 고객층을 더 잘 파악하고, 마케팅을 맞춤형으로 진행하고, 리드의 전반적인 품질을 높일 수 있어요.
- 리드 관리 강화: 리드를 한곳에서 추적하고 관리하면서 잠재 고객·기존 고객과의 모든 상호작용을 한눈에 볼 수 있어요. 영업·마케팅 활동을 간소화하고 고객 유지율을 높이는 데 도움이 돼요.
- 빠른 후속 연락: 리드 데이터가 CRM에 자동으로 들어오므로 빠르게 연락하고, 리드 품질과 행동에 따라 영업 우선순위를 정할 수 있어요.
- 전환율 상승: 리드 수집을 자동화하고 리드 관리를 개선하면 Facebook 광고의 전환율과 ROI를 높일 수 있어요.

## Facebook 리드 광고 사전 준비 사항

- 액세스: 리드 광고를 만들 Facebook 페이지에 액세스할 수 있어야 해요. 자세한 방법은 Facebook 도움말 문서 [페이지에서 다른 사람에게 역할 부여하기](https://www.facebook.com/help/187316341316631)를 참고하세요.
- 소유권: 페이지와 광고 계정의 소유자가 같은 사용자여야 해요. 비즈니스 수준 연동에서는 페이지 소유자와 광고 계정 소유자가 같아야 해요. 자세한 내용은 Facebook 도움말의 [광고 계정 역할](https://www.facebook.com/business/help/187316341316631?id=520795622598421)을 참고하세요.
- 권한: 페이지와 광고 계정에 대한 권한이 있는지 확인하세요. 가능하면 관리자 또는 관리 권한이 있어야 해요. 권한 수준별 차이는 [Facebook 페이지 역할](https://www.facebook.com/help/323502271070625)과 [광고 권한](https://www.facebook.com/business/help/187316341316631?id=520795622598421)에서 확인할 수 있어요. Facebook 페이지를 CRM에 연동하는 사용자는 [Facebook 비즈니스 페이지의 관리자](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143)여야 하고, 리드 데이터에 접근하려면 [리드 액세스 권한](https://www.facebook.com/business/help/540596413257598?id=735435806665862)이 있어야 해요(Facebook의 요구 사항이에요).
- 광고 계정 확인: 페이지가 올바른 광고 계정에 연결돼 있는지 확인하세요. 광고 계정 설정에서 연결된 페이지를 확인하면 돼요. 자세한 방법은 [광고 계정 설정 찾아가기](https://www.facebook.com/business/help/337584869654348)를 참고하세요.
- 공개 범위: 광고 계정의 소유자는 관련 권한이 있는 사람만 볼 수 있어요. 자세한 내용은 Facebook의 [광고 계정 사용자 권한](https://www.facebook.com/business/help/187316341316631?id=520795622598421) 안내를 확인하세요.
- 리드 액세스: 리드 액세스 권한이 있는지 확인하세요. 목록에 **기본 제공 서비스**가 보이지 않으면 직접 검색하거나 활성화해야 할 수 있어요. 리드가 동기화되지 않을 때는 Facebook의 [리드 광고 문제 해결 가이드](https://www.facebook.com/business/help/1667649039945425)를 참고하세요.

- 하이퍼클래스가 Facebook 리드 광고를 운영하는 Facebook Business Manager와 비즈니스 페이지에 액세스할 수 있어야 해요.
- 페이지를 [새 페이지 환경](https://www.facebook.com/business/help/2752670058165459)으로 옮겼다면, 신뢰하는 사람에게 Facebook 비즈니스 페이지 일부를 관리하도록 맡길 수 있어요. 전체 권한을 주지 않고 페이지의 일부에 대한 [액세스](https://www.facebook.com/business/help/582754542592549?id=418112142508425)만 줄 수도 있어요.
- Business Manager를 열고 왼쪽 메뉴에서 **사용자 > 사람**을 선택하세요. FB 페이지를 CRM에 연동할 사람을 이미 추가했다면 페이지 가운데에 보여요.
  이름을 클릭하면 역할 같은 자세한 정보를 볼 수 있어요. 역할에는 **관리자** 또는 **Employee**(직원) 액세스가 있어야 해요.

  아직 추가하지 않았다면 먼저 아래 안내에 따라 사람(사용자)을 추가하세요.

  [비즈니스에 사용자를 추가하려면 어떻게 하나요?](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143)

  이 Business Manager 역할은 페이지 역할과 달라요. 페이지 역할은 여전히 **관리자**여야 해요.

  {% hint style="info" %}
  새 페이지 환경은 아직 모든 페이지에서 쓸 수 있는 것은 아니에요. 관리하는 페이지 중 일부는 여전히 클래식 페이지 환경을 쓸 수 있어요. 클래식 페이지에 대해 더 알아보세요.
  {% endhint %}
- CRM에서 리드 광고용 커스텀 필드를 만들 때는 아래에 나온 지원되는 커스텀 필드 유형을 사용하세요.

### Facebook 리드 광고에서 지원하는 커스텀 필드

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

## 서브 계정에 Facebook 리드 광고 직접 연동하기

{% hint style="info" %}
FB 페이지를 연동한 사용자만 페이지 드롭다운에서 해당 페이지를 볼 수 있어요. 그 FB 페이지의 관리자여야 드롭다운에 페이지가 보이고, 다른 계정의 FB 페이지는 더 이상 목록에 나타나지 않아요.
{% endhint %}

![FB 페이지 드롭다운 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48291400274/original/g41sAjRNyGtEtdYy-9Cv6ezS7sGvCqVccA.png?1680771876)

Facebook 폼 매핑은 **설정 > 연동 > Facebook 폼 필드 매핑**으로 옮겨졌어요.

![Facebook 폼 필드 매핑 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48245875992/original/zjZlJ3p2-QaSQiO4zraR-Bojc7vctxJRrg.gif?1660747191)

## 문제 해결

### 리드 광고가 서브 계정으로 들어오지 않아요

1. Facebook 페이지의 관리자인지 확인하세요. [Business Manager에 관리자를 추가하려면 어떻게 하나요?](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143)
2. Facebook **광고 관리자**에서 선택한 FB 리드 광고 폼이 맞는지, 그리고 서브 계정의 폼과 일치하는지 확인하세요. <https://web.facebook.com/business/tools/ads-manager>
3. 서브 계정의 **설정 > 연동 > Facebook 폼 필드 매핑**에서, 광고 관리자에서 선택한 폼 옆에 파란색 체크 표시가 있는지 확인하세요.
4. 실제로 FB 관리자가 맞다면, 아래 영상을 따라 하이퍼클래스에 접근 권한이 있는지, 페이지 액세스를 허용할 수 있는지 확인해 보세요.

   

   

   영상에 나온 링크: <https://www.facebook.com/settings?tab=business_tools&ref=settings>

6. 위 영상의 단계를 마쳤다면 [Facebook 리드 광고 테스트 도구](https://developers.facebook.com/tools/lead-ads-testing)로 리드가 서브 계정에 들어오는지 확인하세요.

   

   리드 광고 테스트 도구: <https://developers.facebook.com/tools/lead-ads-testing>

   Facebook Page Select 화면 주소는 하이퍼클래스 고객지원에 문의하세요.

{% hint style="info" %}
테스트할 때 앱 ID 39018126477806이 보이나요? (위 영상 2분 49초에 나와요)

앱 ID가 보이지 않으면 하이퍼클래스에 액세스 권한이 없는 거예요. 그런 경우에는 아래 7번 단계로 넘어가세요.

Facebook 리드 광고가 CRM으로 들어오지 않는다면, 아래 영상처럼 고유한 연락처 정보를 사용해 보세요.

{% endhint %}

7. 하이퍼클래스의 페이지 액세스 권한이 취소됐거나 앱 ID가 보이지 않으면, Facebook에서 하이퍼클래스에 리드 액세스 권한을 직접 지정해야 해요.

   1. Business Suite로 이동하세요.
   2. Business Suite에 액세스할 수 없으면 Business Settings(비즈니스 설정)로 가서 비즈니스를 선택한 뒤 5번으로 건너뛰세요.
   3. 왼쪽 위의 드롭다운을 클릭하고 비즈니스 계정을 선택하세요.
   4. 왼쪽 아래의 **설정**을 클릭하세요.
   5. **More Business Settings**(비즈니스 설정 더 보기)를 클릭하세요.
   6. 왼쪽 메뉴에서 **연동**을 클릭한 다음 **Leads Access**(리드 액세스)를 클릭하세요.
   7. **Assign CRMs**(CRM 지정)를 클릭하세요. Facebook 페이지와 연동된 CRM 시스템 목록이 보여요.
   8. **기본 제공 서비스** 옆의 원을 선택한 다음 **Assign**(지정)을 클릭하세요.

{% hint style="info" %}
하이퍼클래스에 권한을 부여한 페이지 관리자는 계속 액세스 권한을 가지고 있어야 해요. 그렇지 않으면 하이퍼클래스가 데이터를 가져오지 못해요.
{% endhint %}

### Pabbly Connect나 Zapier 같은 외부 서비스로 Facebook 리드를 연동하려면 어떻게 하나요?

Zapier나 Pabbly Connect 같은 외부 연동 도구를 쓸 수 있어요. 자세한 정보는 하이퍼클래스 고객지원에 문의하세요.

### 서브 계정에서 Facebook 토큰이 만료됐어요. 왜 이런 일이 생기고 어떻게 해결하나요?

제목이 "Important: Facebook connection has expired."(중요: Facebook 연결이 만료되었습니다)인 이메일을 받았다면, 서브 계정 중 하나의 Facebook 연동이 끊어졌다는 뜻이에요.

#### 연결이 끊어지는 이유

여러 가지 이유로 연동이 끊어질 수 있어요. 가장 흔한 경우는 다음과 같아요.

- 사용자가 비밀번호를 바꿨어요.
- Facebook 토큰이 시간이 지나 자연스럽게 만료됐어요.
- 사용자가 앱의 인증을 해제했어요.
- 사용자가 Facebook에서 로그아웃했어요.
- 사용자가 페이지 권한을 바꾸거나 사용자를 추가·삭제했어요.
- 다른 나라에 있는 가상 비서가 VPN 없이 로그인했어요.

#### 다시 연결하려면

1. 받은 이메일에 표시된 계정을 **Switch To An Account**(계정 전환) 드롭다운에서 선택하세요.
2. 왼쪽 사이드바에서 **설정**을 클릭하세요.
3. 사이드바에서 **연동**을 클릭하세요.
4. Facebook 아이콘 아래의 **연결됨** 버튼을 클릭해 끊어진 연동을 해제하세요. 그런 다음 **Connect**(연결)를 다시 클릭해 재연결하세요.
5. 팝업 창에서 본인 계정으로 계속 진행하고, 연결할 Facebook 페이지를 선택한 다음 **Connect Page**(페이지 연결) 버튼을 클릭하세요.

## 자주 생기는 오류

### 페이지 품질 문제

이 문제가 생기면 Facebook 고객지원에 지원 티켓을 접수해야 해요.

해결 방법:

- Facebook에서 해당 Facebook 페이지로 전환한 뒤 [이 링크](https://www.facebook.com/settings?tab=profile_quality)로 이동하세요. 문제가 있으면 Facebook에 지원 티켓을 접수하세요.
- [Facebook 지원 문서](https://www.facebook.com/help/1985220725104252)

![페이지 품질 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003144440/original/KaKuKPEP1cyXwgjBNcXM61Rt7C88UF_bkA.png?1689683139)

### 권한 문제

문제를 가장 쉽게 찾는 방법은 FB/Instagram의 최신 메시지와 최신 리드를 가져와 보는 거예요.

Zapier도 이 방식을 써요. 빠진 권한을 쉽게 찾을 수 있어요. 권한이 빠졌거나 다른 문제가 있으면 FB API가 오류를 보여 줘요. 확인 방법은 다음과 같아요.

- [이 링크](https://www.facebook.com/settings?tab=business_tools&ref=settings)로 이동하세요.
- [그다음 이 링크](https://www.facebook.com/settings?tab=applications&ref=settings)로 이동하세요.
- 모든 페이지에 대해 권한이 모두 켜져 있는지 확인하세요.

  ![페이지별 권한 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003145086/original/BiczOlvBDQYiINfEVG-o8Kqmv50xUF_upQ.png?1689683477)

### Instagram 연결·메시지 확인

Instagram 페이지가 FB 페이지에 연결돼 있는지 확인하세요.

- 로그인한 사용자를 원하는 FB 페이지로 전환한 뒤 [이 링크](https://www.facebook.com/settings?tab=linked_instagram)로 이동하세요.

  ![연결된 Instagram 계정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003147830/original/rZhxXwK1RQ8Y9Xv_B_alphp4o5jUgM8tzg.png?1689684933)
- 메시지 기능이 켜져 있는지 확인하세요.

  ![메시지 기능 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003147789/original/y8FWCdE6ybipFiVU89SU4W4hH-PmnWEZgA.png?1689684886)
- 페이지가 연결돼 있는데도 CRM에서 IG 페이지가 선택 항목으로 보이지 않으면, [하드 리셋(캐시 삭제 후 강력 새로고침)](https://www.contractsafe.com/support/how-to-clear-your-browser-cache-and-hard-refresh)을 한 다음 다시 연결해 보세요.

### 메신저·Instagram 메시지가 일부만 동기화돼요

CRM 연동을 여러 개 쓰는 경우, 하이퍼클래스 앱이 기본 수신 앱으로 설정되지 않아서 이런 문제가 생길 때가 있어요.

해결 방법:

- 원하는 FB 페이지로 전환한 뒤 [이 링크](https://www.facebook.com/settings?tab=advanced_messaging)로 이동하세요.

  ![고급 메시지 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003150048/original/T9EVwMfrAxqi2nsFwTXrAgUXjT7mjGC7WA.png?1689686311)![고급 메시지 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003150854/original/I_uoXAcXds2D4qXFoXA652ovYkrEALHa9g.png?1689686853)

### 리드가 동기화되지 않아요

비즈니스 쪽에서 아래 항목을 확인해야 해요.

- 비즈니스에 추가된 사용자(**Employee**(직원) 또는 **관리자**)

  ![비즈니스 사용자 역할 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003151291/original/2Ywogek4UF9j2GkFpYjG6Dz0ucqzqqf1Nw.png?1689687116)
- FB 페이지 관리자:

  ![페이지 관리자 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003152796/original/XPUxQoPsF0M9oJsIzKiuM1CD131_iSXPvw.png?1689687942)
- 광고 계정 확인:
  - 페이지 소유자와 광고 계정 소유자가 같아야 해요.

    ![페이지·광고 계정 소유자 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003152728/original/s14ryWLvkowGzFuNZfza4lH2mmIA7EG4eA.png?1689687921)
- 연동 리드 액세스 확인:

  ![리드 액세스 확인 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003152862/original/uEsoqFzJz0sF0XjS-b9Hum6FzZVah84wYw.png?1689687986)![리드 액세스 확인 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003152693/original/Uzc-o4zovZeYGG8TOMFpCNCvE2Kta27_wA.png?1689687900)
  - 그래도 리드가 들어오지 않으면 **Restore Default Access**(기본 액세스 복원)를 클릭한 뒤 다시 확인하세요.

### Instagram 계정을 FB 페이지에 연결하거나 연결 상태를 확인하려면 어떻게 하나요?

Instagram 계정은 FB 페이지 하나에만 연결할 수 있어요.

Instagram 페이지를 연결하거나, 올바른 FB 페이지에 연결돼 있는지 확인하는 방법은 다음과 같아요.

Facebook에 로그인한 뒤 왼쪽 메뉴에서 **페이지**를 클릭하세요.

![Facebook 왼쪽 메뉴의 페이지 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003153232/original/85dJI-K0071R82p4bCWUGkop8YrGGPwYPA.jpeg?1689688246)

1. Facebook 페이지를 선택하고(FB 페이지로 전환하세요) **설정**을 클릭하세요.

   ![Facebook 페이지 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003153563/original/-vhpzQAelDOYqi_G-4qjoueOWHwvvVI6kA.png?1689688414)

   왼쪽 열에서 **Linked Accounts**(연결된 계정)를 선택하세요.
   **Instagram**을 선택한 다음 계정을 연결하세요.
   이미 연결돼 있다면 여기서 확인할 수 있어요.

   ![Instagram 연결 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003153740/original/N1GAJSmayrCpvMH1Au0XLVR269ZCdeLBMw.png?1689688510)

   연결되지 않았다면 아래처럼 보여요.

   ![Instagram 연결되지 않은 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003144114/original/foHC1Kh2bxUMx7_CKIUDUJxYGuYgNwRGQw.jpeg?1689682988)

### 페이지가 보이지 않아요

페이지 관리자의 비즈니스 계정이 같은 페이지에 연결돼 있으면, 하이퍼클래스에 연동할 때 그 페이지가 보이지 않을 수 있어요. 가장 좋은 해결 방법은 그 Facebook 페이지에 두 번째 관리자를 추가하고, 그 사람이 연동하는 거예요. 페이지에 관리자를 추가하는 방법은 다음과 같아요.

- Facebook에 로그인한 뒤 오른쪽 위의 프로필 사진을 클릭하세요.
- **See all profiles**(모든 프로필 보기)를 선택하고 액세스 권한을 줄 페이지를 선택하세요.
- 오른쪽 위에서 페이지의 프로필 사진을 클릭해 페이지로 이동하세요.
- **관리**를 클릭한 다음, 왼쪽의 **Your tools**(내 도구) 아래에서 **Page access**(페이지 액세스)를 선택하세요.
- **People with Facebook access**(Facebook 액세스 권한이 있는 사람) 옆의 **새로 추가**를 클릭하세요.
- **다음**을 클릭한 뒤 액세스 권한을 줄 사람의 이름이나 이메일 주소를 입력하세요. 마지막으로 그 사람의 이름을 클릭하세요.
- 이제 페이지에 대한 부분 제어 또는 전체 제어 권한 중 하나를 줄 수 있어요.
  - 부분 제어: 아래로 스크롤해서 **Give Access**(액세스 부여)를 클릭하세요.
  - 전체 제어: 아래로 스크롤해서 전체 제어 권한을 부여하도록 클릭한 다음 **Give Access**(액세스 부여)를 클릭하세요.
- Facebook 비밀번호를 입력해 작업을 확인한 뒤 **확인**을 클릭하세요.
- 액세스 권한을 받은 사람에게 페이지 액세스 초대 이메일이 가요. 그 사람이 초대를 수락해야 해요.

이 단계를 따르면 하이퍼클래스에서 Facebook 계정을 연결할 사용자에게 관리자 액세스 권한을 줄 수 있어요. 그러면 그 사용자가 새 페이지 환경에서 페이지를 관리할 수 있어요. 관리자 액세스 권한을 준 뒤에는 그 사용자가 Facebook 페이지를 하이퍼클래스에 추가할 수 있어요.

이 방법은 임시예요. Meta와 함께 문제를 해결하고 있고, 보고된 내용은 여기에서 볼 수 있어요: <https://developers.facebook.com/community/threads/712197940934624/>
