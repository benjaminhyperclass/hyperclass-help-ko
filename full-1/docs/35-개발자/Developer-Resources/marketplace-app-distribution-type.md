---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002141-marketplace-app-distribution-type
번역일: 2026-11-06
카테고리: 35-개발자
---

# 마켓플레이스 앱 배분 유형

마켓플레이스 앱의 배분 방식을 설정하는 방법과, 설치 유형에 맞는 액세스 토큰을 받기 위해 구현해야 하는 OAuth 흐름을 정리한 개발자용 안내예요. 새로 단순해진 마켓플레이스 배분 모델을 기준으로 설명해요.

## 앱 배분 모델

원하는 앱 배분 방식을 설정하려면 필드 세 가지를 지정해요.

| 필드 | 값 | 설명 |
| --- | --- | --- |
| **Who is the target user of the app?**(앱의 대상 사용자는 누구인가요?) | **Agency**(에이전시) / **Sub-account**(서브 계정) | - 누가 앱을 사용하나요?<br>- 다시 말해, 앱이 최종적으로 누구의 액세스 토큰을 필요로 하나요?<br>- 앱의 95%는 **Sub-account**(권장)에 해당해요.<br>- 이 필드는 한 번 설정하면 바꿀 수 없어요. |
| **Who can install the app?**(누가 앱을 설치할 수 있나요?) | **Both Agency and Sub-account**(에이전시와 서브 계정 모두) / **에이전시 전용** | - 마켓플레이스 화면에서 앱을 보고 설치할 수 있는 사용자를 정해요.<br>- 앱이 최대한 많은 사용자에게 닿으려면 **Both Agency and Sub-account**를 권장해요.<br>- 에이전시만 찾아서 자기 서브 계정에 설치할 수 있는 완전한 화이트라벨 SaaS 기능으로만 앱을 만든다면 **에이전시 전용**을 선택하세요. |
| **Can this app be bulk-installed by agencies?**(에이전시가 이 앱을 일괄 설치할 수 있나요?) | **예** / **아니오** | - 이 필드는 이미 마켓플레이스에 있는 앱과의 호환성을 유지하기 위한 것이에요. 앞으로 마켓플레이스에 추가되는 모든 앱은 **예**로 설정돼요(필수).<br>- **예**이면 에이전시 소유자·관리자가 한 번의 작업으로 여러 서브 계정에 앱을 설치할 수 있어요.<br>- 한 번 **예**로 설정하면 **아니오**로 되돌릴 수 없어요. |

## 비공개 앱 설치 한도(정책)

마켓플레이스 앱의 **App type**(앱 유형)을 **Private**(비공개)로 설정하면 소규모 시범 운영 형태로 설치가 제한돼요.

- 한도: 비공개 앱은 최대 5개 에이전시에 설치할 수 있어요.
- 차단: 앱이 설치된 에이전시가 6개 이상이 되면, 개발자가 아래 중 하나를 할 때까지 신규 설치가 차단돼요.
  1. 앱을 **Public**(공개, 목록에 노출)으로 게시해요.
  2. 보안 검토를 통과해요. 승인되면 앱을 **Private**으로 유지한 채 설치를 계속할 수 있어요.

**집계 규칙**

- 에이전시 하나를 1로 세요. 그 에이전시의 서브 계정(위치) 몇 곳에 설치했는지는 상관없어요.
- 일괄 설치도 에이전시당 1로 세요.
- 에이전시에서 앱이 완전히 삭제되면 집계 수가 실시간으로 갱신돼요.

---

## 배분 시나리오

개발자가 설정한 배분 구성, 사용자의 설치 상황, 올바른 액세스 토큰을 받는 방법을 정리한 표예요. 1단계에서는 액세스 토큰 가져오기(Get Access Token) API의 응답으로 설치 유형을 확인해요.

| 대상 사용자 | 설치 가능 대상 | 에이전시 일괄 설치 가능 여부 | 설치 시나리오 | 1단계: 설치 유형 확인 (액세스 토큰 가져오기 API 응답) | 2단계 |
| --- | --- | --- | --- | --- | --- |
| 에이전시 | 해당 없음 | 해당 없음 | 에이전시 사용자가 앱을 설치해요 | `"isBulkInstallation": false`<br>`"userType": "Company"` | 해당 없음 |
| 서브 계정 | 에이전시와 서브 계정 모두 | 아니오 | 서브 계정 사용자가 앱을 설치해요 | `"isBulkInstallation": false`<br>`"userType": "Location"` | 해당 없음 |
| 서브 계정 | 에이전시와 서브 계정 모두 | 아니오 | 에이전시 사용자가 앱을 설치해요 | `"isBulkInstallation": false`<br>`"userType": "Location"` | 해당 없음 |
| 서브 계정 | 에이전시와 서브 계정 모두 | 예 | 서브 계정 사용자가 앱을 설치해요 | `"isBulkInstallation": false`<br>`"userType": "Location"` | 해당 없음 |
| 서브 계정 | 에이전시와 서브 계정 모두 | 예 | [신규·권장] 에이전시 사용자가 앱을 설치해요 | `"isBulkInstallation": true`<br>`"userType": "Company"` | 1. 앱이 설치된 서브 계정 가져오기(Get sub-accounts where app is installed)<br>2. 앱이 설치된 서브 계정(위치)마다 에이전시 토큰으로 위치 토큰 가져오기(Get Location Token using Agency Token)<br>3. 이후 자동으로 이뤄지는 설치나 SaaS 플랜에 포함된 설치는 AppInstall 웹훅 이벤트로 받고, 새로 설치된 서브 계정(위치)마다 에이전시 토큰으로 위치 토큰 가져오기 |
| 서브 계정 | 에이전시 전용 | 예 | 에이전시 사용자가 앱을 설치해요 | `"isBulkInstallation": true`<br>`"userType": "Company"` | - <!-- 검토 필요: 원문 표에서 이 칸이 비어 있음(바로 위 행과 병합된 것으로 보임) --> |

## [배분 유형별로 지원하는 가격 모델 안내 문서](set-up-your-marketplacapp-pricing.md)

---

## 기존 앱과의 호환성

기존 앱은 지금의 설치 흐름과 토큰 교환 방식이 그대로 유지되도록, 기존 **배분 유형**을 아래와 같이 필드 값으로 설정해 두었어요.

| 기존 **배분 유형** | 대상 사용자 | 설치 가능 대상 | 에이전시 일괄 설치 가능 여부 | 앱 도달 범위를 넓히는 방법 |
| --- | --- | --- | --- | --- |
| 에이전시 전용 | 에이전시 | 해당 없음 | 해당 없음 | 해당 없음 |
| 서브 계정 전용 | 서브 계정 | 에이전시와 서브 계정 모두 | 아니오 | 1. 앞에서 설명한 일괄 설치 흐름용 토큰 교환 방식을 개발해요.<br>2. 개발이 끝나면 **Can this app be bulk-installed by agencies?** 를 **예**로 설정해요. |
| 에이전시 서브 계정 | 서브 계정 | 에이전시 전용 | 예 | 서브 계정에서도 앱을 쓸 수 있게 하려면, 앱이 아래와 같은 에이전시 수준 권한을 요구하지 않아야 해요.<br>• 에이전시 수준 스코프: `companies.readonly`, `companies.write`, `location.write`, `saas/location.write`, `snapshots.readonly`, `snapshots.write`, `custom-menu-link.readonly`, `custom-menu-link.write`<br>• `Module > Snapshots`<br>• `Module > CustomJS`<br><br>위 항목이 하나도 필요 없다면 다음 순서로 진행해요.<br>1. 서브 계정 관리자가 설치할 수 있는 OAuth 흐름을 개발해요. 앞에서 설명한 대로 `userType: Location` 토큰이 만들어져요.<br>2. 개발이 끝나면 **Who can install the app?** 를 **Both Agency and Sub-account** 로 바꿔요. |

---

## 대상 사용자: 에이전시

앱 기능이 에이전시 계정에만 해당한다면 **Agency**(에이전시) 배분 유형을 선택하세요.

![에이전시 배분 유형 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048583581/original/w4Mv3eWxtc7ky1cU_fU1FfLuBdg8fYAt_w.png?1750392548)

앱 목록 노출: 앱은 에이전시용 마켓플레이스에만 표시돼요.

![에이전시용 마켓플레이스 앱 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048583594/original/f4TxfrBHaJTtETQV7pYDWWQ4nI5z7bz-vw.png?1750392601)

설치 및 삭제: 에이전시 계정 수준에서 앱을 설치하거나 삭제할 수 있는 사람은 에이전시 관리자 또는 소유자뿐이에요.

결제: 유료 앱은 앱을 설치한 에이전시가 비용을 부담해요.

재판매: 이 앱은 서브 계정 수준에서 설치할 수 없으므로 에이전시가 재판매할 수 없어요.

---

## 대상 사용자: 서브 계정 — 둘 다 설치 가능

앱 기능이 서브 계정에서 쓰도록 만들어졌다면 **Sub-account (both can install)**(서브 계정 – 둘 다 설치 가능) 유형을 선택하세요.

![서브 계정(둘 다 설치 가능) 배분 유형 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048583624/original/kJtU4fEgullilWG0fxoAnDDRM-hJdD-cdg.png?1750392750)

앱 목록 노출: 에이전시 소유자·관리자와 서브 계정 관리자 모두 이 앱을 설치할 수 있어요. 앱은 두 마켓플레이스에 모두 표시돼요.

![두 마켓플레이스에 모두 표시되는 앱 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048583635/original/eYRbavl9kxE3dTmJWUzJ26BuxrtACE9o4g.png?1750392836)

설치 및 삭제: 서브 계정 관리자와 에이전시 관리자 모두 앱을 설치할 수 있어요. 서브 계정 관리자는 이 앱을 직접 찾아 자기 서브 계정에 설치할 수 있어요.

일괄 설치: 앱 개발자가 일괄 설치를 지원하면 에이전시 관리자가 이 앱을 일괄 설치할 수 있어요. 지원하지 않으면 서브 계정을 하나씩 설치해야 해요. 처음 설치할 때 **all sub-accounts**(모든 서브 계정) 옵션을 선택하면, 앞으로 생기는 서브 계정에도 앱이 자동으로 설치돼요.

![모든 서브 계정에 일괄 설치하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023404499/original/MqHiBlSiuQlJPZxBKZ49b7ZdsXzUeYZ6tw.png?1711222532)

결제: 유료 앱은 앱을 설치한 서브 계정이 비용을 부담해요.

재판매: 에이전시가 이 앱을 재판매할 수 있어요.

---

## 대상 사용자: 서브 계정 — 에이전시만 설치 가능

에이전시 소유자만 설치하도록 앱을 설계했다면 **Sub-account (only agency can install)**(서브 계정 – 에이전시만 설치 가능) 배분 유형을 선택하세요.

![서브 계정(에이전시만 설치 가능) 배분 유형 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048584235/original/ifH_YbCWG2-uY5wxZFLw6jeWGAm3Ma0PpQ.png?1750394316)

앱 목록 노출: 이 앱은 마켓플레이스의 에이전시 화면에만 표시돼요.

![에이전시 화면에만 표시되는 앱 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023404478/original/ZaZlYBRJIocjPL0AfUJkH_yXBSpC_BEoWg.png?1711222458)

설치 및 삭제: 서브 계정 수준에서 이 앱을 설치하거나 삭제하는 일은 에이전시 관리자 또는 소유자만 할 수 있어요.

일괄 설치: 일괄 설치가 활성화되어 있으면 에이전시 관리자가 이 앱을 일괄 설치할 수 있어요. 그렇지 않으면 서브 계정을 하나씩 설치해야 해요. 처음 설치할 때 **all sub-accounts**(모든 서브 계정) 옵션을 선택하면, 앞으로 생기는 서브 계정에도 앱이 자동으로 설치돼요.

![모든 서브 계정에 일괄 설치하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023404499/original/MqHiBlSiuQlJPZxBKZ49b7ZdsXzUeYZ6tw.png?1711222532)

재판매: 에이전시가 이 앱을 자기 서브 계정에 재판매할 수 있어요. 에이전시는 개발자가 정한 기본 가격을 내고, 서브 계정은 에이전시가 정한 마크업 가격을 내요.
