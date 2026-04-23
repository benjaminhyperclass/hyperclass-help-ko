---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005225-facebook-multi-page-setup-guide
번역일: 2026-04-23
카테고리: facebook
---

# 페이스북 멀티 페이지 설정 가이드

페이스북 리드 광고 연동(Facebook Lead Ads Integration)을 통해 페이스북 광고에서 직접 리드를 수집하고 CRM과 자동으로 동기화할 수 있습니다. 이 연동 기능을 사용하면 페이스북에서 제품이나 서비스에 관심을 보이는 잠재 고객의 연락처 정보를 쉽게 수집하고, CRM을 통해 빠르게 후속 조치를 취할 수 있습니다. 리드 수집 과정을 자동화함으로써 시간을 절약하고 영업 및 마케팅 효율성을 높일 수 있습니다.

**목차**

- [페이스북 리드 광고 연동이란?](#What-is-the-Facebook-Lead-Ads-Integration?)
- [이 연동이 도움이 되는 대상](#Who-is-this-integration-helpful-for?)
- [연동의 장점](#What-are-the-benefits-of-this-integration?)
- [페이스북 리드 광고 사전 요구사항](#Pre-requisites-for-Facebook-Lead-Ads)
- [커스텀 필드 만들기](#To-create-custom-fields%3A)
- [하위 계정에서 페이스북 리드 광고 연동 또는 관리하는 방법](#How-to-integrate-or-manage-Facebook-Leads-Ads-with-a-Sub-Account)
- [FB 연동 설정하기](#To-setup-FB-integration%3A)
- [페이스북 연동 해제하기](#To-disconnect-facebook-integration%3A)
- [페이스북 페이지 관리하기](#To-Manage-Facebook-pages%3A)
- [기본 문제 해결 또는 수동 리드 동기화](#To-perform-basic-troubleshooting-or-Sync-leads-manually%3A)
- [페이스북/인스타그램 메시지 활성화/비활성화](#To-enable-or-disable-facebook/instagram-messages%3A)
- [폼 관리하기](#To-manage-forms%3A)
- [기타 페이스북/인스타그램 관련 지원 가이드](#Other-facebook/instagram-related-support-guides%3A)

# 페이스북 리드 광고 연동이란?

페이스북 리드 광고를 CRM과 연동하면 기업이 리드를 자동으로 수집하고 하나의 플랫폼에서 관리할 수 있습니다. 이를 통해 리드 관리가 간소화되고, 수동 오류가 제거되며, 리드 품질이 향상되고, 전환율이 증가하여 비즈니스 성장을 촉진할 수 있습니다.

### 이 연동이 도움이 되는 대상

페이스북 리드 광고와 CRM 연동은 페이스북 광고를 사용하여 리드를 생성하고 리드 관리를 간소화하려는 기업에게 이상적입니다. 특히 영업팀 규모가 제한적인 소규모 기업이나 스타트업에게 매우 유용합니다. 리드 수집이 자동화되어 시간과 리소스를 절약하고 데이터 정확성을 향상시킬 수 있기 때문입니다. 이미 CRM을 사용 중인 기업의 경우, 이 연동을 통해 기존 워크플로우로 리드를 원활하게 가져와 후속 조치를 강화하고 효율성을 극대화할 수 있습니다.

### 연동의 장점

페이스북 리드 광고와 CRM 연동의 장점은 다음과 같습니다:

자동 리드 수집: 이 연동을 통해 기업은 페이스북 광고를 통해 생성된 리드를 자동으로 수집하여 CRM 시스템으로 가져올 수 있으며, 수동 데이터 입력의 필요성을 제거합니다.

리드 품질 개선: CRM을 통해 리드를 추적하고 관리함으로써 기업은 고객을 더 잘 이해하고, 마케팅 노력을 개인화하며, 리드의 전반적인 품질을 개선할 수 있습니다.

향상된 리드 관리: CRM 시스템을 통해 기업은 한 곳에서 리드를 추적하고 관리할 수 있으며, 잠재 고객과 고객과의 상호작용을 360도 관점에서 파악할 수 있습니다. 이는 기업이 영업 및 마케팅 노력을 간소화하고 고객 유지를 개선하는 데 도움이 됩니다.

효율적인 후속 조치: 리드 데이터가 자동으로 수집되어 CRM 시스템으로 가져오면, 기업은 리드에게 빠르게 후속 조치를 취하고 리드 품질과 행동을 기반으로 영업 노력의 우선순위를 정할 수 있습니다.

전환율 증가: 리드 수집을 자동화하고 리드 관리를 개선함으로써 기업은 페이스북 광고의 전환율과 ROI를 높일 수 있습니다.

# 페이스북 리드 광고 사전 요구사항

- 접근 권한: 리드 광고를 만들려는 페이스북 페이지에 대한 접근 권한이 있어야 합니다. [페이지에서 다른 사람에게 역할을 부여하는 방법](https://www.facebook.com/help/187316341316631)에 대한 페이스북 도움말 문서를 참조하세요.

- 소유권: 페이지와 광고 계정의 소유자가 동일한 사용자여야 합니다. 비즈니스 수준 연동의 경우 페이지와 광고 계정의 소유자가 동일해야 합니다. 자세한 내용은 [광고 계정 역할](https://www.facebook.com/business/help/187316341316631?id=520795622598421)에 대한 페이스북 도움말 섹션을 참조하세요.

- 권한: 페이지 및 광고 계정 권한이 있는지 확인하세요. 이상적으로는 관리자 또는 관리 권한이 있어야 합니다. 다양한 권한 수준을 이해하려면 [페이스북 페이지 역할](https://www.facebook.com/help/323502271070625)과 [광고 권한](https://www.facebook.com/business/help/187316341316631?id=520795622598421)을 참조하세요. 페이스북 페이지를 CRM에 연동하려는 사용자는 [페이스북 비즈니스 페이지의 관리자여야 하고](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143) 리드 데이터에 접근하기 위해 [리드 접근 권한](https://www.facebook.com/business/help/540596413257598?id=735435806665862)이 있어야 합니다(페이스북에서 요구하는 조건).

- 광고 계정 확인: 페이지가 적절한 광고 계정에 연결되어 있는지 확인하세요. 이를 위해 광고 계정 설정으로 이동하여 연결된 페이지를 확인하세요. [광고 계정 설정 탐색 방법](https://www.facebook.com/business/help/337584869654348)에 대한 자세한 내용을 참조하세요.

- 가시성: 관련 권한이 있는 개인만 광고 계정의 소유자를 볼 수 있다는 점에 유의하세요. 자세한 내용은 [광고 계정의 사용자 권한](https://www.facebook.com/business/help/187316341316631?id=520795622598421)에 대한 페이스북 가이드를 확인하세요.

- 리드 접근: 리드 접근 권한이 있는지 확인하세요. 리드 커넥터가 표시되지 않으면 수동으로 검색하거나 활성화해야 할 수 있습니다.

- Hyperclass는 페이스북 리드 광고를 운영하는 페이스북 비즈니스 매니저 및 비즈니스 페이지에 대한 접근 권한이 필요합니다.

- 신뢰할 수 있는 사람들이 일부 페이스북 비즈니스 페이지를 관리하도록 허용할 수 있습니다. 일부 사람들에게 전체 접근 권한을 부여하지 않고도 페이스북 페이지의 특정 부분에 대한 [접근 권한](https://www.facebook.com/business/help/582754542592549?id=418112142508425)을 부여할 수 있습니다.

- 비즈니스 매니저 열기 > 왼쪽 네비게이션 > 사용자 > 사람. 페이지를 CRM에 연동할 사람을 이미 추가했다면, 페이지 중앙에 표시됩니다. [비즈니스에 사용자를 추가하는 방법](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143)을 참조하세요.

- 페이스북에서 사용 가능한 페이지와 프로필 유형에 대해 알아보려면 다음 [링크](https://www.facebook.com/business/help/1034727950288693?ref=search_new_2)를 참조하세요.

### 커스텀 필드 만들기:

- [CRM에서 리드 광고용 커스텀 필드를 만들 때는 아래에 나열된 지원되는 커스텀 필드를 사용해야 합니다:](https://www.facebook.com/help/135275340210354)

- 페이스북 리드 광고 사용 시 지원되는 커스텀 필드:

- TEXT (텍스트)

- LARGE_TEXT (긴 텍스트)

- NUMERICAL (숫자)

- PHONE (전화번호)

- MONETARY (금액)

- SINGLE_OPTIONS (단일 선택)

- DATE (날짜)

- DROPDOWN (single) (드롭다운-단일 선택)

![커스텀 필드 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258166/original/s5mNx9QweLyfo2e_yrhi9Xj8SEGQG808yw.png?1746624886)

![커스텀 필드 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258177/original/1M8fIfWMkiD3PJiTN0Izi3LgQkOcbnHAnw.png?1746624888)

페이스북 폼 생성 시 설정에서 필드명을 업데이트하지 않는 것을 권장합니다. CRM 단에서 매핑에 영향을 줄 수 있기 때문입니다:

![페이스북 폼 필드명 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258182/original/mKnQE_YrfLFvgp2QdeGsCZDPYTuS2vYW-A.jpeg?1746624888)

![페이스북 폼 설정 주의사항](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258181/original/T9k4EDoaOAZca_hY0p8TF8EoUzxnLw4Q1w.jpeg?1746624888)

# 하위 계정에서 페이스북 리드 광고 연동 또는 관리하는 방법

참고사항:

페이스북 페이지를 연동한 사용자만이 연결할 페이지를 선택할 수 있습니다. 해당 사용자는 페이스북에서 페이지에 대한 전체 접근 권한이 있어야 합니다.

### FB 연동 설정하기:

- 하위 계정의 연동(Integration) 메뉴로 이동: 하위 계정 >> Settings(설정) >> Integration(연동)

![연동 메뉴 접근](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258176/original/knYvHjsf4sr8z3WAcbxjsnZnzwC4z13RAw.png?1746624888)

- 페이스북 하단의 "Connect(연결)" 버튼을 클릭합니다.

- 필요한 권한을 허용합니다.

![권한 허용 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258163/original/owh1yJIte8vBfNl46jW0HL5YFRpspZMPXA.png?1746624885)

- CRM과 연결할 계정 내의 페이지를 선택합니다.

![페이지 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258179/original/Bw5mYWTYc50Cfd7xOpmiroz5tclHWxWXdA.png?1746624888)

- 페이지가 연결되면 다음 단계는 폼을 설정하고 필요한 필드를 CRM 필드와 매핑하는 것입니다. 이제 모든 준비가 완료되었습니다:

![폼 설정 및 필드 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258183/original/-JvPs3tSNbhQ_b3arvfMjHpioMLwpkJUgw.png?1746624889)

### 페이스북 연동 해제하기:

- 하위 계정의 연동 메뉴로 이동: 하위 계정 >> Settings(설정) >> Integration(연동)
- 페이스북으로 이동하여 카드의 점 3개 메뉴를 클릭합니다.
- "Disconnect(연결 해제)"를 클릭합니다.

![연동 해제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258165/original/keXWn-8ZA82HVSg9CSEBNHozsjLZuyyA_g.png?1746624886)

### 페이스북 페이지 관리하기:

- 하위 계정의 연동 메뉴로 이동: 하위 계정 >> Settings(설정) >> Integration(연동)

- 페이스북으로 이동하여 "Manage Pages(페이지 관리)"를 클릭합니다.

- 연결할 페이지를 선택하고 "Update(업데이트)"를 클릭합니다.

![페이지 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258168/original/smGfq6H0mIMMh3W0DQKwXIsk4U6sJQK-GQ.png?1746624887)

![페이지 선택 및 업데이트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258173/original/K6tpbuNeF6N2iEvSXI48B2O4pfCVn680MA.png?1746624887)

### 기본 문제 해결 또는 수동 리드 동기화:

- 하위 계정의 연동 메뉴로 이동: 하위 계정 >> Settings(설정) >> Integration(연동)

- 페이스북으로 이동하여 "Troubleshoot(문제 해결)"을 클릭합니다.

- 다음 화면에서 사용자는 누락된 권한을 확인하고 수동으로 리드를 동기화할 수 있습니다.

![문제 해결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258167/original/3QnPnCRCkYm4ttZBohQF0qzNp_A19slY0A.png?1746624887)

![권한 확인 및 수동 동기화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258171/original/s0L2RowMNCYo_NKRxC_Asc4VPHaAjvqsMA.png?1746624887)

### 페이스북/인스타그램 메시지 활성화/비활성화:

- 하위 계정의 연동 메뉴로 이동: 하위 계정 >> Settings(설정) >> Integration(연동)

- 페이스북으로 이동하여 햄버거 메뉴에서 "Settings(설정)"을 클릭합니다.

- 다음 화면에서 연결된 페이지의 페이스북 및 인스타그램 메신저를 활성화합니다.

![메시지 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258164/original/wVjwKCCsKpyJAJY1xTrpfcTURudoKL0tWg.png?1746624886)

![메신저 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258174/original/rHSth5lgSJfvYUJ5XlBCH-ZTsmQ4LcAKcw.jpeg?1746624887)

### 폼 관리하기:

- 하위 계정의 연동 메뉴로 이동: 하위 계정 >> Settings(설정) >> Integration(연동)

- 화면 상단의 "Facebook Form Field Mapping(페이스북 폼 필드 매핑)"으로 이동합니다.

- 편집할 폼을 찾아 매핑을 업데이트하거나 비활성화합니다.

![폼 필드 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258184/original/LlOO46Owg-Zlda4qJlM98R9_K6wDwFxjdA.png?1746624889)

![폼 관리 인터페이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258175/original/UazD_R9FrnHExrQSnqtRv6Hk-UfniPkctw.png?1746624888)

![폼 편집 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258178/original/zx-Baralh8eUiD4uMDGKh-ZRfVIOiP7uHQ.png?1746624888)

![폼 설정 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046258180/original/VYyuAeJm8Bip_JtiIRtImK-DilaXDbIuwA.png?1746624888)

# 기타 페이스북/인스타그램 관련 지원 가이드:

- [페이스북 멀티 페이지 문제 해결](https://help.leadconnectorhq.com/support/solutions/articles/155000005240-facebook-multi-page-troubleshoot)
- [페이스북/인스타그램 메시징 가이드](https://help.leadconnectorhq.com/support/solutions/articles/155000005226-messaging-setup-troubleshoot#Other-facebook/instagram-related-support-guides%3A)
- [페이스북 폼 필드 매핑](https://help.leadconnectorhq.com/support/solutions/articles/155000005224-facebook-form-field-mapping)
- [페이지 선택 가이드](https://help.leadconnectorhq.com/support/solutions/articles/155000005228-page-selection-guide)

---
*원문 최종 수정: 2025년 7월 10일*
*Hyperclass 사용 가이드 — hyperclass.ai*