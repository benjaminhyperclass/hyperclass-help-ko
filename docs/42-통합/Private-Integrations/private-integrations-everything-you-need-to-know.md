---
원문: /support/solutions/articles/155000003054-private-integrations-everything-you-need-to-know
번역일: 2026-11-06
카테고리: 42-통합
---

# 비공개 연동 한눈에 보기

비공개 연동을 쓰면 하이퍼클래스 계정과 외부 앱을 안전하게 직접 연결할 수 있어요. 공개 앱을 따로 만들지 않아도 API로 접근해야 하는 내부 도구, 자동화 흐름, 맞춤 시스템에 알맞아요. 이 문서에서는 비공개 연동의 개념과 생성, 토큰 관리 방법을 안내해요.

{% hint style="warning" %}
사용 가능한 엔드포인트 전체 목록과 요청/응답 상세는 공식 API 문서에서 확인할 수 있어요. 문서 안내가 필요하면 하이퍼클래스 고객지원에 문의하세요.
{% endhint %}

## 비공개 연동이 무엇인가요?

비공개 연동을 쓰면 하이퍼클래스 계정과 다른 외부 앱 사이에 맞춤 연동을 만들 수 있어요.

하이퍼클래스 계정을 외부 앱과 연동하는 방법은 두 가지예요.

- **앱 마켓플레이스**(App Marketplace)에서 필요한 앱을 찾아 설치해요.
- 직접 또는 개발자와 함께 API로 비공개 연동을 만들어요.

비공개 연동은 두 번째 방법을 안전하게 쓸 수 있게 해 줘요.

비공개 연동의 장점은 다음과 같아요.

- 간편해요: 계정 설정에서 비공개 연동 토큰을 만들고 쉽게 관리할 수 있어요.
- 안전해요: 개발자가 내 계정에서 접근할 수 있는 범위(권한)를 제한할 수 있어요.

비공개 연동은 에이전시와 서브 계정 모두에서 쓸 수 있어요. 서브 계정의 비공개 연동 기능이 궁금하면 하이퍼클래스 고객지원에 문의하세요.

---

## 비공개 연동과 API 키는 어떻게 다른가요?

비공개 연동은 API 키보다 기능이 많고 더 안전한 대안이에요.

| 비공개 연동 | API 키 |
| --- | --- |
| 더 안전해요: 개발자가 내 계정에서 접근할 수 있는 범위(권한)를 제한할 수 있어요. | 덜 안전해요: 개발자가 계정의 모든 데이터에 제한 없이 접근해요. |
| 최신 방식이에요: 최신 버전인 API v2.0을 쓸 수 있어요. | 오래된 방식이에요: API 키는 API v1.0에서 작동하는데, v1.0은 지원이 종료되어 더 이상 유지·보수되지 않아요. |
| 기능이 더 많아요: API v2.0에는 더 강력한 API가 있어요. | 기능이 적어요: API v1.0은 쓸 수 있는 API가 한정적이에요. |

---

## 새 인증 정보에는 왜 비공개 연동 토큰을 권장하나요?

비공개 연동 토큰(PIT)은 기존 API 키를 대체하는 방식으로 권장돼요. 접근 권한을 더 안전하고 유연하게 관리할 수 있기 때문이에요.

90일 넘게 쓰지 않은 기존 API 키는 설정에서 **Expired**(만료됨)로 표시될 수 있어요. v1 방식의 새 API 키는 더 이상 만들 수 없어요. 그래서 새 인증 정보가 필요하거나 오래된 연동을 더 안전한 방식으로 옮길 때는 PIT를 쓰세요.

아직 기존 API 키를 쓰고 있다면, 가능한 한 그 연동을 비공개 연동 토큰으로 옮기길 하이퍼클래스는 권장해요.

![API 키 만료 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074448956/original/hHvWuKsdPjwkb3-fw9OW4-w0zwINy_iZsA.png?1782358733)

---

## 비공개 연동과 OAuth2 액세스 토큰은 어떻게 다른가요?

비공개 연동 토큰은 정적(고정) OAuth2 **액세스 토큰**(Access Token)이라고 보면 쉬워요.

| 비공개 연동 | 액세스 토큰 |
| --- | --- |
| 화면에서 생성해요: 비공개 연동 토큰은 화면에서 간단히 만들 수 있어요. | 코드로 생성해요: OAuth 액세스 코드를 Get Access Token API로 교환해 API 토큰을 만들어요. |
| 정적(고정)이에요: 비공개 연동 토큰은 고정된 값이라서, 화면에서 직접 교체하지 않으면 자동으로 갱신되지 않아요. | 매일 갱신해요: 액세스 토큰은 매일 만료되어 다시 갱신해야 해요. |

---

## 비공개 연동은 어떻게 사용하나요?

비공개 연동 토큰은 다른 액세스 토큰과 마찬가지로 `Authorization` 헤더에 넣어서 써요.

예를 들어 서브 계정의 상세 정보를 가져오려면 `Authorization` 헤더에 에이전시의 비공개 연동 토큰을 넣고 Get Sub-account API를 호출해요.

```
curl --request GET \
  --url https://services.leadconnectorhq.com/locations/ve9EPM428h8vShlRW1KT \
  --header 'Accept: application/json' \
  --header 'Authorization: <YOUR PRIVATE INTEGRATION TOKEN>' \
  --header 'Version: 2021-07-28'
```

---

## API 호출로 비공개 연동을 테스트하려면 어떻게 하나요?

비공개 연동을 만들었다면 API 엔드포인트로 데이터를 보내 테스트해 볼 수 있어요. 이때 올바른 API 엔드포인트 URL이 필요해요.

다음은 새 연락처를 추가해서 연동을 테스트하는 예시예요.

```
curl --request POST \
  --url https://services.leadconnectorhq.com/contacts/ \
  --header 'Authorization: <YOUR PRIVATE INTEGRATION TOKEN>' \
  --header 'Content-Type: application/json' \
  --header 'Version: 2021-07-28' \
  --data '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "locationId": "LOCATION_ID"
  }'
```

호출하기 전에 다음을 꼭 바꿔 주세요.
`LOCATION_ID`를 실제 서브 계정 ID로 바꿔요.`Authorization` 값을 직접 만든 비공개 연동 토큰으로 바꿔요.

사용 가능한 엔드포인트 전체 목록과 테스트 방법은 공식 개발자 문서에서 확인할 수 있어요. 안내가 필요하면 하이퍼클래스 고객지원에 문의하세요.

---

## 비공개 연동은 어떻게 관리하나요?

### 누가 비공개 연동을 만들 수 있나요?

기본적으로 모든 에이전시 관리자가 비공개 연동을 만들고 관리할 수 있어요.

이 권한은 사용자별로 제한할 수도 있어요. **설정 > 팀**으로 이동해서 해당 에이전시 관리자의 **편집**을 누르고, **Roles & Permissions**(역할 및 권한)에서 **비공개 연동**을 켜거나 끄세요.

제한은 두 단계로 걸 수 있어요.

1. 에이전시 관리자가 에이전시의 비공개 연동을 보고 관리할 수 있게 허용해요.
2. 에이전시 관리자가 서브 계정의 비공개 연동을 보고 관리할 수 있게 허용해요.

---

## 비공개 연동은 어디에서 찾나요?

에이전시 설정에서 **비공개 연동**을 찾을 수 있어요. **설정**에 보이지 않으면 **실험실**(Labs)에서 이 기능을 켰는지 확인하세요.

![설정의 비공개 연동 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030660190/original/wGql6-BrqjOpzKCG65lxrkC9FH-3G8CjaQ.png?1723109743)

---

## 새 비공개 연동은 어떻게 만드나요?

{% hint style="info" %}
에이전시와 로케이션/서브 계정 수준 모두에서 비공개 연동 토큰(PIT)을 각각 최대 20개까지 만들 수 있어요. 연동이나 워크플로우마다 토큰을 따로 쓸 수 있어요.
{% endhint %}

1. **Create new Integration**(새 연동 만들기)을 클릭해요.

   ![새 연동 만들기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029013962/original/yvAW6A_NW5gJMcSx395zGtXk6qkFXs3o5A.png?1720610156)

2. 나와 팀원이 용도를 알아볼 수 있게 비공개 연동의 이름과 설명을 입력해요.

   ![비공개 연동 이름과 설명 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029014111/original/ZPgWRbFa4SBbD-MteF42NGBCtFc_Web7EA.png?1720610257)

3. 에이전시 계정에서 비공개 연동이 접근할 수 있게 할 범위(권한)를 선택해요. 데이터 보안을 위해 꼭 필요한 범위만 선택하세요.

   ![권한 범위 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030660243/original/EefivfaL6w17chXrSdbaMXTnd9oQs26hNg.png?1723109797)

4. 생성된 토큰을 복사해서 외부 앱 개발자에게 전달해요. 토큰은 믿을 수 있는 사람에게만 전달하고, 공개된 곳에 올리지 마세요.

   {% hint style="info" %}
   토큰은 나중에 다시 복사할 수 없으니, 생성됐을 때 꼭 복사해 두세요.
   {% endhint %}

   ![생성된 토큰 복사 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056315/original/iDIuSpkuzyH_p2OdR30IDSvLE7CxS05gQQ.png?1720669606)

---

## 비공개 연동 토큰을 안전하게 관리하려면 어떻게 하나요?

비공개 연동 토큰은 90일마다 교체하길 권장해요. 교체 방법은 다음과 같아요.

1. **설정 > 비공개 연동**으로 이동해서 만들어 둔 비공개 연동을 클릭해요.

   ![비공개 연동 목록에서 연동 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029015449/original/YI9nMQbgJqStpF_RBJKBUdj46z9WudaC1g.png?1720611169)

2. **이 토큰을 나중에 교체하고 만료 처리**를 클릭해요.

   ![이 토큰을 나중에 교체하고 만료 처리 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029055790/original/jZAec5alCqx2g3Mz7J4HCW1gpw2dzTHFTQ.png?1720667388)

3. 경고 메시지가 나오면 교체를 진행해도 되는지 확인하고 **계속**을 클릭해요.

   ![교체 경고 메시지에서 계속 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029055827/original/M40HLVVe3lBbA0BQ5UX-27DLtKK4PbJOkw.png?1720667577)

4. 새 토큰을 복사해서 외부 앱에 업데이트해요.

   7일 동안은 이전 토큰과 새 토큰이 모두 작동해요. 7일이 지나면 이전 토큰은 만료돼요. 이 7일 동안 다음 중 하나를 선택할 수 있어요.

   - **로테이션 취소**: 예를 들어 개발자가 외부 앱의 토큰을 바꾸는 데 시간이 더 필요할 때 선택해요.
   - **Expire Now**(지금 만료): 예를 들어 외부 앱에 새 토큰을 이미 적용했을 때 선택해요.

   {% hint style="info" %}
   토큰은 나중에 다시 복사할 수 없으니, 생성됐을 때 꼭 복사해 두세요.
   {% endhint %}

   ![새 토큰 복사 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029055978/original/cs7V4-owR-cA74RwmVmxGDPnAAoecXYpwg.png?1720667942)

---

## 토큰이 유출된 것 같아요. 어떻게 하나요?

1. **설정 > 비공개 연동**으로 이동해서 만들어 둔 비공개 연동을 클릭해요.

   ![비공개 연동 목록에서 연동 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029015449/original/YI9nMQbgJqStpF_RBJKBUdj46z9WudaC1g.png?1720611169)

2. **이 토큰을 지금 교체하고 만료 처리**를 클릭해요.

   ![이 토큰을 지금 교체하고 만료 처리 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056233/original/1CO8ADONFx1V4l2rZnWDSVNrd5t8mM2NgQ.png?1720669161)

3. 경고 메시지가 나오면 교체를 진행해도 되는지 확인하고 **계속**을 클릭해요.

   ![교체 경고 메시지에서 계속 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056251/original/OKlV-5OLCEpFvIO_Ku-xOShU5kLoOKQGRg.png?1720669252)

4. 새 토큰을 복사해서 외부 앱에 업데이트해요.

   {% hint style="info" %}
   토큰은 나중에 다시 복사할 수 없으니, 생성됐을 때 꼭 복사해 두세요.
   {% endhint %}

   ![새 토큰 복사 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056314/original/qTmiWdCADNy02lzHwiGrcrfcOs-HAQIL2w.png?1720669590)

---

## 토큰을 바꾸지 않고 비공개 연동 권한만 편집할 수 있나요?

네, 비공개 연동을 만든 뒤에도 이름, 설명, 범위(권한)를 언제든 편집할 수 있어요. 편집 방법은 다음과 같아요.

1. **설정 > 비공개 연동**으로 이동해서 점 세 개 메뉴에서 **편집**을 선택해요.

   ![점 세 개 메뉴에서 편집 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056506/original/g5TVdfhF6e56Uj9eU3F-f8MDjhINdvwySQ.png?1720670453)

2. 필요하면 비공개 연동의 이름과 설명을 수정한 뒤 **다음**을 클릭해요.

   ![이름과 설명 수정 후 다음 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056523/original/QUgMnaLVazAjL3yWgsZGd5ruujrP6WQgUg.png?1720670492)

3. 필요하면 비공개 연동이 내 계정에서 접근할 수 있는 범위(권한)를 수정해요. 데이터 보안을 위해 꼭 필요한 범위만 선택하세요. 수정한 내용을 저장하려면 **업데이트**를 클릭해요.

   ![권한 범위 수정 후 업데이트 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056555/original/-CYsioGb7fLRhBOW-4IaGpOmbrFmYWTp3Q.png?1720670598)

{% hint style="info" %}
에이전시 수준과 로케이션 수준 모두에서 비공개 연동 토큰(PIT)을 각각 최대 20개까지 만들 수 있어요.
{% endhint %}

{% hint style="info" %}
비공개 연동 정보를 수정해도 새 토큰은 만들어지지 않아요. 기존 토큰은 계속 작동해요.
{% endhint %}

---

## 더 이상 필요 없는 비공개 연동은 어떻게 삭제하나요?

외부 앱을 더 이상 쓰지 않으면 비공개 연동을 삭제할 수 있어요. **설정 > 비공개 연동**으로 이동해서 점 세 개 메뉴에서 **삭제**를 선택하세요.

![점 세 개 메뉴에서 삭제 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029056627/original/_JO1Og2ifY43mlxGgIYT1HGFpwUtB445eA.png?1720670808)
