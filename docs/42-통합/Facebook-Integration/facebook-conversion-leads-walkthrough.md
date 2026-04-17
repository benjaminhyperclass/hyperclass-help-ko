---

번역일: 2026-04-08
카테고리: 통합 > Facebook Integration
---

# Facebook 컨버전 리드 워크스루

Facebook 컨버전 API는 마케팅 데이터를 LeadConnector와 Facebook Meta의 퍼널 및 워크플로우와 직접 연결하여 광고 타겟팅 최적화, 결과당 비용 절감, 성과 측정을 돕습니다. Facebook 컨버전 API를 통해 리타겟팅 광고에 더 적합한 잠재 고객을 수집할 수 있습니다. 이는 웹 트래픽에 대한 서버 이벤트를 업로드하는 비즈니스 설정입니다.

#### 이 글에서 다루는 내용

#### [Facebook 컨버전 API에서 퍼널 이벤트와 리드 이벤트의 차이점은 무엇인가요?](#facebook-컨버전-api에서-퍼널-이벤트와-리드-이벤트의-차이점은-무엇인가요)

#### [FB CAPI(컨버전 API) 리드 이벤트를 설정하는 방법은?](#fb-capi컨버전-api-리드-이벤트를-설정하는-방법은)

#### [1단계: FB 픽셀 생성](#1단계-fb-픽셀-생성)

#### [2단계: 두 개의 FB 컨버전 API 워크플로우 생성](#2단계-두-개의-fb-컨버전-api-워크플로우-생성)

#### [워크플로우 1 - 기회 생성/업데이트](#워크플로우-1-기회-생성업데이트)

#### [워크플로우 2 - FB 컨버전 API로 컨버전 데이터 전송](#워크플로우-2-fb-컨버전-api로-컨버전-데이터-전송)

## Facebook 컨버전 API에서 퍼널 이벤트와 리드 이벤트의 차이점은 무엇인가요?

LeadConnector에서는 두 가지 유형의 Facebook 컨버전 API를 지원합니다.

**퍼널 이벤트** - 

사용자가 페이지를 방문하거나 장바구니에 상품을 추가하고, 구매, 구독, 신청서 제출 등을 할 때 웹 서버에서 보내는 이벤트입니다. FB CAPI를 사용한 퍼널 이벤트 픽셀 설정에 대한 자세한 내용은 [이 글을 참조하세요.](how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api-.md)

**리드 이벤트** - 

LeadConnector CRM에서 리드가 파이프라인 단계를 이동할 때의 이벤트를 전송합니다. 예를 들어, 비즈니스가 "리드 생성"이라는 파이프라인을 만들었다면, 리드가 신규 리드에서 예약 완료 또는 포기 단계로 이동할 때마다 이벤트가 전송됩니다. 리드 이벤트에서는 CRM이 데이터 소스가 되어 Facebook 컨버전 API로 데이터를 전송합니다.

**컨버전 리드** - 

Facebook 컨버전 리드 연동은 Facebook 리드 광고의 즉석 양식이 리드 수량 대신 리드 품질을 최적화하도록 돕습니다. 사용자가 즉석 양식을 제출하면 연락처 정보가 수집되어 Hyperclass CRM에 동기화됩니다. 이 연락처 정보는 후속 조치를 통해 리드를 육성하고 영업 퍼널을 따라 더 깊이 이동시키는 데 사용할 수 있습니다. 각 리드가 영업 퍼널을 통과할 때마다 컨버전 리드 연동을 통해 광고주가 리드 상태를 Meta와 공유할 수 있으며, 이를 통해 Meta가 리드-판매 컨버전을 높이도록 리드 광고를 최적화할 수 있습니다.

컨버전 리드 연동에 적합한 비즈니스를 위한 가이드라인:

- Facebook/Instagram 리드 광고(즉석 양식) 사용 [LeadConnector 내 Facebook 폼 필드 매핑 사용]
- 15-16자리 Meta 리드 ID가 CRM에 매핑되어 있는지 확인
- 월 최소 250개의 리드 생성
- 최소 하루에 한 번 이상 정기적으로 데이터 업로드 가능
- 최적화하고자 하는 리드 단계가 리드 생성 후 28일 이내에 발생
- 최적화하고자 하는 리드 단계의 컨버전율이 1%-40% 범위

## FB CAPI(컨버전 API) 리드 이벤트를 설정하는 방법은?

### 1단계: FB 픽셀 생성

- [Facebook 비즈니스 관리자(Meta 비즈니스 도구)](http://business.facebook.com)에 접속하여 픽셀 생성을 시작하세요 > 왼쪽의 [이벤트 관리자](https://www.facebook.com/events_manager2/) 탭으로 이동합니다.
- 해당 FB 페이지에 대한 모든 필요한 접근 권한이 있는 올바른 광고 계정에 연결되어 있는지 확인하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284070737/original/AFb9bOXlqhbRRlui5ZOjvh_Ry7MYiUeFaQ.png?1677521079)

- 왼쪽 사이드바로 이동하여 데이터 소스 연결을 클릭합니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284518426/original/vpJQuXlQ-fkLtQlkuMXpv-MYw6ymdVS3Ug.png?1677678141)

- 표시되는 옵션에서 CRM을 선택하고 다음을 클릭합니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031417908/original/SXjzS115ZEI927ZTXt0zAvEI0bBuEcBLCQ.png?1724240865)

- 모범 사례와 다음 버튼이 있는 팝업이 표시됩니다. 모범 사례는 이 기능을 최대한 활용하는 방법에 대한 Facebook의 제안입니다. 다음을 클릭하여 계속 진행하세요.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031418022/original/D_jziC5xhCpZoJCvvQpjoKo3oRcKqijDJA.png?1724240955)

- 데이터 수집을 위해 새 픽셀 생성 또는 목록에서 기존 픽셀 사용을 클릭하세요. 픽셀 세부 정보가 추가되면 계속을 클릭합니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284072690/original/qgMYOqAYudCL0t2rtYthWAkL4dYkgKtGTw.png?1677521908)

- 픽셀을 생성하거나 선택한 후, CRM 파트너로 "LeadConnector"를 선택하고 **다음**을 클릭합니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031418374/original/hp1Pm_bswB-zDAdXVebjn_6oA1HL4dFSQA.png?1724241213)

**참고:** 다음을 클릭하면 Facebook이 파트너 웹사이트 로그인으로 리디렉션하는데, 이는 무시하고 Facebook으로 CAPI 이벤트를 전송하는 컨버전 API 워크플로우 생성을 진행하면 됩니다.

- CRM이 선택된 화면이 표시됩니다. **중요 참고사항:** "7일간의 CRM 이벤트 대기" 단계에서 멈춰 있는 문제가 발생하면 다음을 확인하세요:

# 픽셀에 매일 일관되게 데이터 전송
# 7일 동안 최소 50개 이벤트가 누적되는지 확인
# 테스트 이벤트는 실제 이벤트로 간주되지 않음
# 픽셀에서 최소 2개 단계에 픽셀 이벤트가 있어야 함

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031418496/original/e5AHKLIef3hvMEb0cA9Rk8nM8DFhCPYTGg.png?1724241315)

- 이제 CRM 이벤트 전송을 시작할 수 있으며, 이를 위해 아래에 설명된 두 개의 워크플로우를 설정해야 합니다.

**참고사항**

**Facebook CAPI - 리드 이벤트 전제 조건**
1. CRM에서 설정(Settings) > 연동(Integration) > Facebook 계정이 관리자 권한으로 연결되어 있는지 확인하세요. 관리자 권한을 가지고 모든 접근 권한이 있는 FB 비즈니스 페이지가 [연동되어 있고 올바른 FB 리드 양식이 CRM 계정에 매핑되어 있는지 확인하세요.](facebook-lead-ad-integration-troubleshooting-guide.md)
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031419137/original/NyIl9s0xM-cgct_0BaT_tihv76t_6-bsDA.png?1724241655)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031419242/original/Kv8uEaz2OIhtlVC7pRQJrvQmyXjX4DliLw.png?1724241732)

2. Facebook 폼 필드 매핑에서 양식이 올바르게 매핑되고 상태가 활성화되어 있어야 합니다. Facebook 폼 매핑은 위치 설정(Location Settings) > 연동(Integrations) > Facebook 폼 필드 매핑(Facebook Form Field Mapping)으로 이동했습니다. [다중 및 단일 선택 커스텀 필드를 포함한 지원되는 커스텀 필드 목록은 여기를 참조하세요.](facebook-lead-ad-integration-troubleshooting-guide.md)
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289200906/original/NguctF2neILw1L4MOJy_0UMZ_hv_wBTooA.gif?1679678976)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286543798/original/TN-M497JjRU1QI1H-NwXVq1r1vWxdBHPWw.png?1678462304)

### 2단계: 두 개의 FB 컨버전 API 워크플로우 생성

**참고사항**

이 프로세스가 효과적으로 작동하려면 두 개의 워크플로우를 생성해야 합니다. 첫 번째 워크플로우는 리드를 생성하고 **기회 생성/업데이트 액션**을 통해 올바른 파이프라인에 추가하는 데 중점을 둡니다. 리드가 수집되면 영업 퍼널을 통과하면서 효과적으로 관리되고 추적될 수 있도록 적절한 파이프라인과 단계에 올바르게 태그를 지정하고 분류하는 것이 중요합니다. 두 번째 워크플로우는 Facebook 컨버전 리드에 대한 이벤트를 트리거하는 데 중점을 둡니다. 이 워크플로우의 목표는 리드가 특정 파이프라인 단계로 이동할 때 실행되고, Facebook 컨버전 API 워크플로우 액션이 이들을 FB CAPI로 전송하는 것입니다. 이 두 워크플로우를 결합하면 Facebook 컨버전 리드에 최적화된 포괄적인 리드 생성 및 관리 시스템을 만들 수 있습니다. 이를 통해 더 많은 양질의 리드를 생성하고, 더 많은 고객을 전환하며, 시간이 지남에 따라 비즈니스를 성장시킬 수 있습니다.

CRM에서 CRM 이벤트를 전송하려면 이를 수행하는 워크플로우를 생성해야 합니다. 지금은 FB 이벤트 관리자 > 데이터 소스 > 설정에서 벗어나(브라우저 탭에서 열어둔 채) CRM 계정으로 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284081045/original/r6dBGPrK4R-SDzJJARAeMGvHU6SwuwwTog.png?1677525316)

#### 워크플로우 1 - 기회 생성/업데이트

- FB 페이지가 하위 계정 설정에 올바르게 연동되면, 자동화(Automations) > 워크플로우(Workflows) > 새 워크플로우 생성으로 이동합니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031420060/original/KGiogaGqC8eiladKNdMI3LxVnUoi6nqgcw.jpeg?1724242169)

- 워크플로우에 새 워크플로우 트리거를 추가하고, Facebook 리드 양식 제출(컨버전 플로우의 첫 번째 단계인 경우)로 실행되도록 설정합니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031420109/original/VmYgHXIBM5dLZ6_u8p9Q79sQ15kbzgBwIQ.jpeg?1724242198)

- 필터를 추가하여 특정 Facebook 리드 광고 양식을 선택할 수 있습니다. 해당 양식 제출에 의해서만 워크플로우가 트리거되도록 설정합니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031420115/original/_Bhbh1Hc2u_baOSGlOZEe7ucGSdUnvUcDw.jpeg?1724242216)

- 이후 "Meta 컨버전 API"를 위한 액션을 추가합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051771239/original/zuvouipnbi-t_0i4vVT3qHVapk1CaM-OLQ.png?1755498402)

- 액세스 토큰, 픽셀 ID, 단계 이름에 필요한 세부 정보를 추가합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051771284/original/Za-nhnxD4aGz35IO8g7okPjIaMqvVknD-Q.png?1755498455)

**참고:** 커스텀 값 추가 - Google 광고와 마찬가지로 Facebook 광고 컨버전 추적 매개변수에 대한 커스텀 매핑을 허용하고 있습니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043836459/original/gFVWuYxc77LoQwMEWkY0p_spdSoyA3QWZQ.jpeg?1742815441)

작동 방식:
기본적으로 커스텀 매핑은 비활성화되어 있습니다.
사용자는 토글을 켜서 커스텀 매핑을 활성화할 수 있습니다.
활성화되면 다음을 매핑할 수 있습니다:
1. 퍼널 이벤트용 FBCLID
2. 리드 이벤트용 Facebook 리드 ID
3. 커스텀 매핑 필드가 제공되면 시스템 기본값보다 우선 적용됩니다.
4. 비어 있으면 시스템이 기본 내부 값을 계속 사용합니다.

- 액세스 토큰의 경우, Facebook 이벤트 관리자 > 데이터 소스 > 설정으로 이동하여 아래로 스크롤한 후 액세스 토큰 생성을 클릭합니다. 생성되면 액세스 토큰을 복사하여 워크플로우 액션 구성에 붙여넣습니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031421996/original/2M5kyzuzDEJFC4zHnrjdGIF4Hld8a-cnrw.png?1724243441)

- 픽셀 ID의 경우, Facebook 이벤트 관리자 > 데이터 소스 > 설정으로 이동하여 아래로 스크롤한 후 데이터셋 ID를 복사합니다(이것이 픽셀 ID가 됩니다). 워크플로우의 FB 컨버전 API 액션에서 픽셀 ID 필드에 픽셀 ID를 붙여넣습니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031422924/original/u9buQQXLzvtO596soAHgCdul47lg-Q2B0Q.jpeg?1724243971)

- 그 다음 기회 생성 또는 업데이트 액션을 추가합니다. 이 액션에 대한 파이프라인과 파이프라인 단계도 지정합니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024366504/original/IVGX9z5k0pWkkpq_kMQOJOuJv-C-jRZgWg.png?1712915642)

- 기회 이름은 커스텀 값 드롭다운을 사용하여 리드의 전체 이름으로 기본 설정할 수 있습니다:
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031420481/original/naZd6SFqXIQhb2IxIgUICHcWTVws3FuGIA.png?1724242432)

- 이 특정 워크플로우에 대해 중복 기회 허용을 토글 켜기로 설정합니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031420583/original/tRcVgVuLqAga6QSyFl1xphZT2y43y33LSw.png?1724242482)

- 워크플로우를 발행하고 저장합니다.

#### 워크플로우 2 - FB 컨버전 API로 컨버전 데이터 전송

- 다른 워크플로우를 생성합니다. 파이프라인 단계 변경 트리거와 Facebook 컨버전 API 액션을 추가합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031421020/original/23qX6oljE-grIUfBMMkiXCy7bEISawvVAA.png?1724242774)

- 이벤트 유형으로 리드 이벤트를 선택합니다. **액세스 토큰**과 **픽셀 ID**를 입력합니다.
**단계 이름**의 경우: 더 나은 보고를 위해 파이프라인 및 파이프라인 단계 이름을 정확하게 나타내야 합니다. 끝에 있는 태그 아이콘을 사용하여 기회 파이프라인과 단계의 커스텀 값을 추가하여 선택합니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031421279/original/6zhHzNBl6SBJA4I4Ka6hqh6TUBvTEap9Yw.png?1724242985)

- 액세스 토큰의 경우, Facebook 이벤트 관리자 > 데이터 소스 > 설정으로 이동하여 아래로 스크롤한 후 액세스 토큰 생성을 클릭합니다. 생성되면 액세스 토큰을 복사하여 워크플로우 액션 구성에 붙여넣습니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031421996/original/2M5kyzuzDEJFC4zHnrjdGIF4Hld8a-cnrw.png?1724243441)

- 픽셀 ID의 경우, Facebook 이벤트 관리자 > 데이터 소스 > 설정으로 이동하여 아래로 스크롤한 후 데이터셋 ID를 복사합니다(이것이 픽셀 ID가 됩니다). 워크플로우의 FB 컨버전 API 액션에서 픽셀 ID 필드에 픽셀 ID를 붙여넣습니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031422219/original/GziRBRRy5Z7j0_VsRySWWjl4FnVx6E3FQg.png?1724243552)

- 액션을 저장하고, 워크플로우를 저장 및 발행합니다.

- [리드 광고 테스트 도구](https://developers.facebook.com/tools/lead-ads-testing)를 사용하여 워크플로우를 테스트할 수 있습니다. 올바른 페이지와 리드 광고 양식을 선택한 후 리드를 생성합니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031422501/original/4Sqw2Xl0VmEdLphpxjo61cpNXWF1ETpf1w.png?1724243742)

- 워크플로우에서 전송한 이벤트를 적극적으로 기다리고 있는 이벤트 관리자에서 이벤트를 수집해야 합니다. 워크플로우에서 전송한 이벤트를 성공적으로 수집하는 데 최대 하루가 걸립니다.

- 리드 광고 테스트 도구에서 이벤트가 전송되면, 기회 파이프라인으로 이동하여 더미 Facebook 리드를 워크플로우에 구성된 다른 단계로 이동시킵니다. 완료되면 워크플로우 상태가 실행됨으로 표시되고 이벤트 관리자에서 컨버전 API 이벤트를 확인합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289807416/original/lPWKPzVG8LSj7hT4URdCTXBJsQAya3ue-Q.png?1680028394)

11. 이벤트 관리자의 "설정" 탭으로 돌아가서 컨버전 리드 연동의 진행 상황을 추적합니다.

**중요 참고사항** - 위의 두 워크플로우 모두에 대해 워크플로우 설정에서 다중 허용을 활성화하세요.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284914523/original/l_2ib3vbuisvYM3kwkrFC6fJvfGmEAxTiA.jpeg?1677797816)

---
*원문 최종 수정: Mon, 18 Aug, 2025 at 1:28 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*