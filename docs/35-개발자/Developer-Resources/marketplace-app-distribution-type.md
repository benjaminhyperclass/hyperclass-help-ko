---

번역일: 2026-04-08
카테고리: 35-개발자 > Developer Resources
---

# 마켓플레이스 앱 배포 유형

이 가이드는 개발자를 위한 새로운 간소화된 마켓플레이스 배포 모델과 올바른 액세스 토큰을 얻기 위해 구현해야 하는 OAuth 플로우를 다룹니다.

**목차**

- [앱 배포 모델](#앱-배포-모델)
- [배포 시나리오](#배포-시나리오)
- [각 배포 모델별 지원 가격 모델을 설명한 문서](#Article-elaborating-pricing-models-supported-for-each-distribution-model)
- [역호환성](#역호환성)
- [대상 사용자: 에이전시](#대상-사용자-에이전시)
- [대상 사용자: 하위 계정 - 둘 다 설치 가능](#대상-사용자-하위-계정---둘-다-설치-가능)
- [대상 사용자: 하위 계정 - 에이전시만 설치 가능](#대상-사용자-하위-계정---에이전시만-설치-가능)

## 앱 배포 모델

원하는 앱 배포 모델을 설정하기 위해 세 가지 필드를 사용합니다:

| 필드 | 값 | 설명 |
|------|----|----|
| 앱의 대상 사용자는 누구인가요? | 'Agency' / 'Sub-account' | • 누가 앱과 상호작용할 예정인가요?<br>• 즉, 앱이 최종적으로 필요로 하는 액세스 토큰은 누구의 것인가요?<br>• 앱의 95%는 "Sub-account"에 해당합니다 (권장)<br>• 이 필드는 설정 후 수정할 수 없습니다. |
| 누가 앱을 설치할 수 있나요? | 'Both Agency and Sub-account' / 'Agency Only' | • 어떤 사용자가 마켓플레이스 UI에서 앱을 보고 설치할 수 있나요?<br>• **권장 옵션은 "Both Agency & Sub-account"**입니다. 앱이 최대한 많은 사용자에게 도달할 수 있도록 보장합니다<br>• 에이전시만 발견하여 하위 계정에 설치할 수 있는 완전 화이트라벨 SaaS 기능으로 앱을 구축하는 경우에만 "Agency Only"를 사용하세요. |
| 이 앱을 에이전시에서 일괄 설치할 수 있나요? | 'Yes' / 'No' | • 이는 **마켓플레이스에 이미 등록된 앱의 역호환성만을 위한** 것입니다. 앞으로 마켓플레이스에 추가되는 모든 앱은 "Yes"로 설정됩니다 (필수).<br>• 'Yes'인 경우, 에이전시 소유자/관리자가 한 번의 작업으로 여러 하위 계정에 앱을 설치할 수 있습니다.<br>• 'Yes'로 설정되면 이 필드를 'No'로 되돌릴 수 없습니다. |

## 비공개 앱 설치 제한 (정책)

마켓플레이스 앱이 앱 유형 = Private로 설정된 경우, 설치는 소규모 파일럿으로 제한됩니다:

**제한:** 비공개 앱은 최대 5개 에이전시에 설치할 수 있습니다.

**차단:** 앱이 6개 이상의 에이전시에 도달하면, 개발자가 다음 중 하나를 수행할 때까지 새로운 설치가 차단됩니다:

- 앱을 Public(목록에 표시)으로 게시합니다.
- 보안 검토를 통과합니다 (승인되면 앱은 비공개로 유지될 수 있고 설치를 계속할 수 있습니다).

**계산 규칙**

각 고유한 에이전시는 앱이 설치된 하위 계정(로케이션) 수에 관계없이 1로 계산됩니다.

일괄 설치도 에이전시당 1로 계산됩니다.

앱이 에이전시에서 완전히 제거되면 실시간으로 계산이 업데이트됩니다.

## 배포 시나리오

| 개발자의 배포 설정 시나리오 | 사용자 설치 시나리오 | 올바른 액세스 토큰 얻기 |
|---|---|---|
| **대상 사용자는 누구인가요?** | **누가 앱을 설치할 수 있나요?** | **에이전시에서 앱을 일괄 설치할 수 있나요?** |
| Agency | NA | NA | Agency 사용자가 앱 설치 | **1단계:** [Get Access Token API](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token)에서 설치 유형 확인<br>"isBulkInstallation" : false,<br>"userType" : "Company" | **2단계:** NA |
| Sub-account | Agency & sub-account | No | Sub-account 사용자가 앱 설치 | "isBulkInstallation" : false,<br>"userType" : "Location" | NA |
| | | | Agency 사용자가 앱 설치 | "isBulkInstallation" : false,<br>"userType" : "Location" | NA |
| | | Yes | Sub-account 사용자가 앱 설치 | "isBulkInstallation" : false,<br>"userType" : "Location" | NA |
| | | | **[새롭고 권장되는 방식]**<br>Agency 사용자가 앱 설치 | "isBulkInstallation" : true,<br>"userType" : "Company" | 1. [앱이 설치된 하위 계정 가져오기](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-installed-location)<br>2. 앱이 설치된 모든 로케이션에 대해 [에이전시 토큰을 사용하여 로케이션 토큰 가져오기](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-location-access-token)<br>3. 향후 자동 설치나 SaaS 플랜의 일부로 수행되는 설치에 대해 [AppInstall 웹훅 이벤트](https://marketplace.gohighlevel.com/docs/webhook/AppInstall) 수신 및 새로 설치된 로케이션에 대해 [에이전시 토큰을 사용하여 로케이션 토큰 가져오기](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-location-access-token) |
| | Agency Only | Yes | Agency 사용자가 앱 설치 | "isBulkInstallation" : true,<br>"userType" : "Company" | 위와 동일 |

## [각 배포 모델별 지원 가격 모델을 설명한 문서](set-up-your-app-pricing.md)

## 역호환성

기존 앱의 현재 설치 플로우와 토큰 교환 메커니즘을 유지하기 위해, 기존/레거시 배포 유형에 대해 다음과 같이 필드를 설정했습니다:

| 레거시 배포 유형 | 역호환성 보장을 위한 개발자의 배포 설정 매핑 | 앱의 도달 범위를 최대화하는 방법에 대한 권장사항 |
|---|---|---|
| | **대상 사용자는 누구인가요?** | **누가 앱을 설치할 수 있나요?** | **에이전시에서 앱을 일괄 설치할 수 있나요?** |
| Agency Only | Agency | NA | NA | NA |
| Sub-account Only | Sub-account | Agency & sub-account | No | 1. 위에서 언급한 일괄 설치 플로우를 위한 토큰 교환 메커니즘 개발<br>2. 완료 후 "에이전시에서 앱을 일괄 설치할 수 있나요?"를 "Yes"로 설정 |
| Agency & Sub-account | Sub-account | Agency Only | Yes | 앱을 하위 계정에서도 접근 가능하게 하려면, 앱이 다음과 같은 에이전시 레벨 접근을 필요로 하지 않아야 합니다:<br>- Agency Level Scopes - companies.readonly, companies.write, location.write, saas/location.write, snapshots.readonly, snapshots.write, custom-menu-link.readonly, custom-menu-link.write<br>- Module > Snapshots<br>- Module > CustomJS<br><br>앱이 위의 사항을 필요로 하지 않는 경우:<br>1. 하위 계정 관리자의 설치를 위한 OAuth 플로우 개발 (위에서 언급한 대로 userType: Location 토큰 생성)<br>2. 완료 후 "누가 앱을 설치할 수 있나요?"를 "Agency & sub-account"로 변경 |

## 대상 사용자: 에이전시

앱의 기능이 에이전시 레벨 계정에만 적용되는 경우 에이전시 배포 유형을 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048583581/original/w4Mv3eWxtc7ky1cU_fU1FfLuBdg8fYAt_w.png?1750392548)

**앱 목록**: 앱은 에이전시 레벨 앱 마켓플레이스에만 표시됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048583594/original/f4TxfrBHaJTtETQV7pYDWWQ4nI5z7bz-vw.png?1750392601)

**설치 및 제거**: 에이전시 관리자 또는 소유자만이 에이전시 계정 레벨에서 앱을 설치하거나 제거할 권한이 있습니다.

**결제**: 유료 애플리케이션의 경우, 설치하는 에이전시가 앱 비용을 부담합니다.

**재판매**: 에이전시는 이러한 앱을 재판매할 수 없습니다. 하위 계정 레벨에서 설치할 수 없기 때문입니다.

## 대상 사용자: 하위 계정 - 둘 다 설치 가능

앱의 기능이 하위 계정 레벨 계정을 위한 것이라면 하위 계정(둘 다 설치 가능) 유형을 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048583624/original/kJtU4fEgullilWG0fxoAnDDRM-hJdD-cdg.png?1750392750)

**앱 목록**: 이러한 앱은 에이전시 소유자/관리자와 하위 계정 관리자 모두 설치할 수 있습니다. 이 앱들은 두 마켓플레이스 모두에 표시됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048583635/original/eYRbavl9kxE3dTmJWUzJ26BuxrtACE9o4g.png?1750392836)

**설치 및 제거**: 하위 계정 관리자와 에이전시 관리자 모두 앱을 설치할 수 있습니다.

하위 계정 관리자는 이러한 앱을 찾아서 해당 하위 계정에 설치할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023404538/original/lQxf69LOM8uFEPOdE9MQ6M8gYq-b4GDkoA.png?1711222807)

**일괄 설치**: 앱 개발자가 일괄 설치를 지원하는 경우, 에이전시 관리자는 이러한 앱을 일괄 설치할 수 있습니다. 지원하지 않는 경우, 에이전시 관리자는 한 번에 하나의 하위 계정씩 앱을 설치할 수 있습니다. 에이전시는 초기 설치 시 '모든 하위 계정' 옵션을 선택하면 향후 하위 계정에 이러한 앱을 자동으로 설치할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023404499/original/MqHiBlSiuQlJPZxBKZ49b7ZdsXzUeYZ6tw.png?1711222532)

**결제**: 유료 앱을 설치하는 하위 계정이 비용을 부담합니다.

**재판매**: 이러한 앱은 에이전시에서 재판매할 수 있습니다.

## 대상 사용자: 하위 계정 - 에이전시만 설치 가능

에이전시 소유자만이 유일한 관련 설치자가 되도록 앱이 설계된 경우 하위 계정(에이전시만 설치 가능) 배포 유형을 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048584235/original/ifH_YbCWG2-uY5wxZFLw6jeWGAm3Ma0PpQ.png?1750394316)

**앱 목록**: 이러한 앱은 마켓플레이스의 에이전시 뷰에서만 표시됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023404478/original/ZaZlYBRJIocjPL0AfUJkH_yXBSpC_BEoWg.png?1711222458)

**설치 및 제거**: 하위 계정 레벨에서 이러한 앱의 설치 및 제거는 에이전시 관리자 또는 소유자만 수행할 수 있습니다.

**일괄 설치**: 활성화된 경우, 에이전시 관리자는 이러한 앱을 일괄 설치할 수 있습니다. 비활성화된 경우, 에이전시 관리자는 한 번에 하나의 하위 계정씩 앱을 설치할 수 있습니다. 에이전시는 초기 설치 시 '모든 하위 계정' 옵션을 선택하면 향후 하위 계정에 이러한 앱을 자동으로 설치할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023404499/original/MqHiBlSiuQlJPZxBKZ49b7ZdsXzUeYZ6tw.png?1711222532)

**재판매**: 에이전시는 이러한 앱을 하위 계정에 재판매할 수 있으며, 에이전시는 개발자가 설정한 기본 가격을 지불하고 하위 계정은 에이전시가 설정한 마크업된 가격을 지불합니다.

---
*원문 최종 수정: Mon, 30 Mar, 2026 at 5:43 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*