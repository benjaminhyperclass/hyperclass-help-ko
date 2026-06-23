---

번역일: 2026-04-09
카테고리: 42-통합 > Private Integrations
---

# 프라이빗 통합: 완벽 가이드

프라이빗 통합(Private Integrations)을 사용하면 Hyperclass 계정과 모든 외부 애플리케이션 간에 안전하고 맞춤형 연결을 구축할 수 있습니다. 이 기능은 내부 도구, 자동화 워크플로우, 그리고 완전한 공개 앱을 개발하지 않고도 API 액세스가 필요한 맞춤형 시스템에 이상적입니다.

**중요**: 사용 가능한 모든 엔드포인트와 요청/응답 세부사항의 전체 목록은 공식 API 문서를 참조하세요: [https://marketplace.hyperclass.ai/docs/](https://marketplace.hyperclass.ai/docs/)

---

## 목차

- [프라이빗 통합이란 무엇인가요?](#프라이빗-통합이란-무엇인가요)
- [프라이빗 통합과 API 키의 차이점은 무엇인가요?](#프라이빗-통합과-api-키의-차이점은-무엇인가요)
- [프라이빗 통합과 OAuth2 액세스 토큰의 차이점은 무엇인가요?](#프라이빗-통합과-oauth2-액세스-토큰의-차이점은-무엇인가요)
- [프라이빗 통합은 어떻게 사용하나요?](#프라이빗-통합은-어떻게-사용하나요)
- [API 호출로 프라이빗 통합 테스트하기](#api-호출로-프라이빗-통합-테스트하기)
- [프라이빗 통합은 어떻게 관리하나요?](#프라이빗-통합은-어떻게-관리하나요)
- [프라이빗 통합은 어디서 찾을 수 있나요?](#프라이빗-통합은-어디서-찾을-수-있나요)
- [새 프라이빗 통합을 만드는 방법](#새-프라이빗-통합을-만드는-방법)
- [프라이빗 통합 토큰 보안을 유지하는 모범 사례](#프라이빗-통합-토큰-보안을-유지하는-모범-사례)
- [토큰이 노출됐나요?](#토큰이-노출됐나요)
- [토큰을 업데이트하지 않고 프라이빗 통합 권한을 편집할 수 있나요?](#토큰을-업데이트하지-않고-프라이빗-통합-권한을-편집할-수-있나요)
- [더 이상 필요하지 않을 때 프라이빗 통합을 삭제하는 방법](#더-이상-필요하지-않을-때-프라이빗-통합을-삭제하는-방법)

---

## 프라이빗 통합이란 무엇인가요?

프라이빗 통합을 사용하면 Hyperclass 계정과 다른 외부 앱 간에 강력한 맞춤형 통합을 구축할 수 있습니다.

Hyperclass 계정을 외부 앱과 통합하려면 두 가지 옵션이 있습니다:

- 앱 마켓플레이스에서 관련 앱을 찾아서 설치하기
- 직접 또는 개발자의 도움을 받아 API를 사용하여 자체적인 프라이빗 통합을 구축하기

프라이빗 통합은 두 번째 옵션을 안전하게 달성하는 데 도움이 됩니다.

프라이빗 통합을 사용하는 주요 장점:

- **간편함**: 계정 설정에서 프라이빗 통합 토큰을 생성하고 쉽게 관리할 수 있습니다.
- **보안성**: 개발자가 계정에 액세스할 수 있는 범위/권한을 제한할 수 있습니다.

프라이빗 통합은 에이전시와 하위 계정 모두에서 사용할 수 있습니다. 하위 계정의 프라이빗 통합 기능에 대한 자세한 내용은 [여기를 클릭](https://help.leadconnectorhq.com/support/solutions/articles/155000002774-private-integrations-everything-you-need-to-know)하세요.

---

## 프라이빗 통합과 API 키의 차이점은 무엇인가요?

간단히 말해, 프라이빗 통합은 API 키보다 강력하면서도 안전한 대안입니다.

| 프라이빗 통합 | API 키 |
|-------------|--------|
| **더 안전함**: 개발자가 계정에 액세스할 수 있는 범위/권한을 제한할 수 있습니다 | **덜 안전함**: 개발자가 모든 계정 데이터에 무제한 액세스할 수 있습니다 |
| **최신 기술**: 프라이빗 통합은 최신 API v2.0에 액세스할 수 있습니다 | **구형**: API 키는 수명이 다한 API v1.0에서 작동하며 더 이상 유지보수되지 않습니다 |
| **더 많은 기능**: API v2.0은 더 강력한 API를 제공합니다 | **제한적인 기능**: API v1.0은 제한적인 API만 제공합니다 |

---

## 프라이빗 통합과 OAuth2 액세스 토큰의 차이점은 무엇인가요?

간단히 말해, 프라이빗 통합은 정적/고정 OAuth2 액세스 토큰입니다.

| 프라이빗 통합 | 액세스 토큰 |
|-------------|-----------|
| **UI에서 생성**: 프라이빗 통합 토큰은 UI에서 쉽게 생성할 수 있습니다 | **프로그래밍 방식 생성**: API 토큰은 OAuth 액세스 코드를 [액세스 토큰 가져오기 API](https://highlevel.stoplight.io/docs/integrations/00d0c0ecaa369-get-access-token)를 사용해 토큰으로 교환하여 생성됩니다 |
| **정적/고정**: 프라이빗 통합 토큰은 정적/고정이며 UI에서 순환시키지 않는 한 자동으로 새로고침되지 않습니다 | **매일 새로고침**: 액세스 토큰은 매일 만료되며 새로고침이 필요합니다 |

---

## 프라이빗 통합은 어떻게 사용하나요?

프라이빗 통합 토큰은 다른 액세스 토큰과 마찬가지로 Authorization 헤더에 사용됩니다.

예를 들어, 로케이션의 세부 정보를 가져오려면 에이전시의 프라이빗 통합 토큰을 Authorization 헤더에 넣어 [하위 계정 가져오기 API](https://highlevel.stoplight.io/docs/integrations/d777490312af4-get-sub-account-formerly-location)를 사용할 수 있습니다.

```bash
curl --request GET \
  --url https://services.leadconnectorhq.com/locations/ve9EPM428h8vShlRW1KT \
  --header 'Accept: application/json' \
  --header 'Authorization: <YOUR PRIVATE INTEGRATION TOKEN>' \
  --header 'Version: 2021-07-28'
```

---

## API 호출로 프라이빗 통합 테스트하기

프라이빗 통합이 생성되면 API 엔드포인트에 데이터를 푸시하여 테스트해볼 수 있습니다. 이를 위해서는 올바른 API 엔드포인트 URL이 필요합니다.

다음은 새 연락처를 추가하여 통합을 테스트하는 예시입니다:

```bash
curl --request POST \
  --url https://services.leadconnectorhq.com/contacts/ \
  --header 'Authorization: <YOUR PRIVATE INTEGRATION TOKEN>' \
  --header 'Content-Type: application/json' \
  --header 'Version: 2021-07-28' \
  --data '{
    "firstName": "김",
    "lastName": "철수",
    "email": "kim.chulsoo@example.com",
    "phone": "+821012345678",
    "locationId": "LOCATION_ID"
  }'
```

다음 사항을 확인하세요:

- LOCATION_ID를 실제 하위 계정 ID로 바꾸세요.
- Authorization 값을 생성된 프라이빗 통합 토큰으로 바꾸세요.

사용 가능한 모든 엔드포인트 및 테스트 기능의 전체 목록은 공식 개발자 문서를 참조하세요: [https://developers.hyperclass.ai](https://developers.hyperclass.ai)

---

## 프라이빗 통합은 어떻게 관리하나요?

### 누가 프라이빗 통합을 만들 수 있나요?

기본적으로 모든 에이전시 관리자가 프라이빗 통합을 생성하고 관리할 수 있습니다.

그러나 사용자 레벨에서 이 권한을 제한할 수 있습니다. 이를 위해서는 Settings(설정) → Team(팀) → 특정 에이전시 관리자 편집 → Roles & Permissions(역할 및 권한)으로 이동하여 에이전시 관리자에 대한 프라이빗 통합을 활성화/비활성화하세요.

두 가지 레벨로 제한을 적용할 수 있습니다:

- 에이전시 관리자가 에이전시의 프라이빗 통합을 보고 관리할 수 있도록 허용
- 에이전시 관리자가 하위 계정의 프라이빗 통합을 보고 관리할 수 있도록 허용

![권한 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030659842/original/6lOsxQuiq4N2bHX6ewlVrmDuEAnUy9QDpQ.png?1723109565)

---

## 프라이빗 통합은 어디서 찾을 수 있나요?

프라이빗 통합은 에이전시 설정(Settings) 하위에서 찾을 수 있습니다. 설정에서 찾을 수 없다면 Labs에서 해당 기능이 활성화되어 있는지 확인하세요.

![설정에서 프라이빗 통합 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030660190/original/wGql6-BrqjOpzKCG65lxrkC9FH-3G8CjaQ.png?1723109743)

---

## 새 프라이빗 통합을 만드는 방법

### 1단계: "Create new Integration(새 통합 만들기)" 클릭

![새 통합 만들기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029013962/original/yvAW6A_NW5gJMcSx395zGtXk6qkFXs3o5A.png?1720610156)

### 2단계: 프라이빗 통합의 이름과 설명을 입력하여 본인과 팀이 용도를 식별할 수 있도록 도와주세요.

![통합 이름 및 설명 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029014111/original/ZPgWRbFa4SBbD-MteF42NGBCtFc_Web7EA.png?1720610257)

### 3단계: 프라이빗 통합이 에이전시 계정에 액세스할 범위/권한을 선택하세요. 더 나은 데이터 보안을 위해 필요한 범위만 선택하세요.

![권한 범위 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030660243/original/EefivfaL6w17chXrSdbaMXTnd9oQs26hNg.png?1723109797)

### 4단계: 생성된 토큰을 복사하여 외부 앱 개발자와 공유하세요.

신뢰할 수 있는 당사자와만 토큰을 공유하세요. 공개적으로 공유하지 마세요.

**참고**: 나중에 다시 복사할 수 없으므로 생성된 토큰을 반드시 복사해 두세요.

![토큰 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056315/original/iDIuSpkuzyH_p2OdR30IDSvLE7CxS05gQQ.png?1720669606)

---

## 프라이빗 통합 토큰 보안을 유지하는 모범 사례

프라이빗 통합 토큰을 90일마다 순환시키는 것을 권장합니다.

방법은 다음과 같습니다.

### 1단계: 설정의 프라이빗 통합으로 이동하여 생성한 프라이빗 통합을 클릭하세요.

![프라이빗 통합 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029015449/original/YI9nMQbgJqStpF_RBJKBUdj46z9WudaC1g.png?1720611169)

### 2단계: "Rotate and expire this token later(나중에 이 토큰을 순환시키고 만료)"를 클릭하세요.

![토큰 순환 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029055790/original/jZAec5alCqx2g3Mz7J4HCW1gpw2dzTHFTQ.png?1720667388)

### 3단계: 순환을 진행하려면 경고 메시지에 "Continue(계속)"를 클릭하세요.

![순환 확인 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029055827/original/M40HLVVe3lBbA0BQ5UX-27DLtKK4PbJOkw.png?1720667577)

### 4단계: 새 토큰을 복사하고 외부 앱에서 업데이트하세요.

이전 토큰과 새 토큰 모두 7일 동안 계속 작동합니다. 7일 후에는 이전 토큰이 만료됩니다. 이 7일 기간 동안 다음 옵션을 선택할 수 있습니다:

- "Cancel rotation(순환 취소)": 예를 들어, 개발자가 외부 앱에서 토큰을 업데이트하는 데 더 많은 시간이 필요한 경우
- "Expire Now(지금 만료)": 예를 들어, 외부 앱이 새 토큰으로 업데이트된 경우

**참고**: 나중에 다시 복사할 수 없으므로 생성된 토큰을 반드시 복사해 두세요.

![새 토큰 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029055978/original/cs7V4-owR-cA74RwmVmxGDPnAAoecXYpwg.png?1720667942)

---

## 토큰이 노출됐나요?

### 1단계: 설정의 프라이빗 통합으로 이동하여 생성한 프라이빗 통합을 클릭하세요.

![프라이빗 통합 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029015449/original/YI9nMQbgJqStpF_RBJKBUdj46z9WudaC1g.png?1720611169)

### 2단계: "Rotate and expire this token now(지금 이 토큰을 순환시키고 만료)"를 클릭하세요.

![즉시 토큰 순환](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056233/original/1CO8ADONFx1V4l2rZnWDSVNrd5t8mM2NgQ.png?1720669161)

### 3단계: 순환을 진행하려면 경고 메시지에 "Continue(계속)"를 클릭하세요.

![즉시 순환 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056251/original/OKlV-5OLCEpFvIO_Ku-xOShU5kLoOKQGRg.png?1720669252)

### 4단계: 새 토큰을 복사하고 외부 앱에서 업데이트하세요.

**참고**: 나중에 다시 복사할 수 없으므로 생성된 토큰을 반드시 복사해 두세요.

![새 토큰 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056314/original/qTmiWdCADNy02lzHwiGrcrfcOs-HAQIL2w.png?1720669590)

---

## 토큰을 업데이트하지 않고 프라이빗 통합 권한을 편집할 수 있나요?

네, 프라이빗 통합을 생성한 후 언제든지 이름, 설명 및 범위/권한을 편집할 수 있습니다.

방법은 다음과 같습니다.

### 1단계: 설정의 프라이빗 통합으로 이동하여 점 3개 메뉴에서 "Edit(편집)"을 선택하세요.

![프라이빗 통합 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056506/original/g5TVdfhF6e56Uj9eU3F-f8MDjhINdvwySQ.png?1720670453)

### 2단계: 필요한 경우 프라이빗 통합 이름과 설명을 업데이트하세요. "Next(다음)"를 클릭하세요.

![이름과 설명 업데이트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056523/original/QUgMnaLVazAjL3yWgsZGd5ruujrP6WQgUg.png?1720670492)

### 3단계: 필요한 경우 프라이빗 통합이 계정에 액세스할 범위/권한을 업데이트하세요.

더 나은 데이터 보안을 위해 필요한 범위만 선택하세요. "Update(업데이트)"를 클릭하여 변경 사항을 저장하세요.

![권한 업데이트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056555/original/-CYsioGb7fLRhBOW-4IaGpOmbrFmYWTp3Q.png?1720670598)

**참고**: 프라이빗 통합 세부 정보를 업데이트해도 새 토큰이 생성되지 않습니다. 기존 토큰은 계속 작동합니다.

---

## 더 이상 필요하지 않을 때 프라이빗 통합을 삭제하는 방법

더 이상 외부 앱을 사용하지 않을 때는 프라이빗 통합을 삭제할 수 있습니다. 설정의 프라이빗 통합으로 이동하여 점 3개 메뉴에서 "Delete(삭제)"를 선택하세요.

![프라이빗 통합 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056627/original/_JO1Og2ifY43mlxGgIYT1HGFpwUtB445eA.png?1720670808)

---
*원문 최종 수정: Wed, 4 Feb, 2026 at 7:53 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*