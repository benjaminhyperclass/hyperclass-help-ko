---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004387-setting-up-single-sign-on-sso-on-highlevel
번역일: 2026-11-06
카테고리: 11-설정
---

# 싱글 사인온(SSO) 설정하기

하이퍼클래스는 OpenID Connect(OIDC) 방식의 싱글 사인온(SSO)을 지원해요. SSO를 설정하면 에이전시가 사용자를 조직 계정으로 하이퍼클래스에 로그인하게 할 수 있어서, 보안이 좋아지고 접속도 간단해져요.

현재는 OIDC만 지원해요. SAML은 아직 지원하지 않지만, 앞으로 지원할 계획이에요.

## 접속 위치와 권한

- **실험실** 페이지로 가서 에이전시의 Single Sign On (SSO) 기능을 켜세요.

{% hint style="warning" %}
이 단계는 11월 3일 이전에만 필요해요. 그 이후에는 기능이 기본으로 켜져 있어요.
{% endhint %}

- **회사 설정 > Single Sign-On (SSO)**(싱글 사인온)로 이동하세요.
- 모든 에이전시 관리자가 SSO를 보고 설정할 수 있어요.
- 화면에 **Enable SSO**(SSO 켜기) 버튼이 보여요. 이 버튼으로 설정을 시작해요.

## 사전 준비

SSO를 켜기 전에 아래 두 가지 조건을 먼저 갖춰야 해요.

1. 에이전시가 $497 요금제를 쓰고 있어야 해요.
2. 화이트라벨 도메인이 이미 설정되어 있어야 해요.

## 설정 순서

### 1단계: Client ID와 Secret 입력

- **Method of Authentication**(인증 방식): OIDC로 고정되어 있어요. SAML은 이후에 지원할 예정이에요.
- **Client ID**: IdP(ID 공급자, Identity Provider)가 발급한 식별자예요.
- **Secret**: IdP가 만든 보안 키예요. 하이퍼클래스가 요청을 보낼 때 자신임을 증명하는 데 쓰여요.

{% hint style="info" %}
자세한 내용은 아래 [필수 입력 항목](#필수-입력-항목)을 참고하세요.
{% endhint %}

### 2단계: OIDC 설정

자동으로 설정하거나 직접 입력할 수 있어요.

1. 자동 검색(권장)

   - **Use OIDC Config URL**(OIDC 설정 URL 사용)에서 Yes를 선택하세요.
   - IdP의 **OIDC Config URL**을 입력하세요. 보통 `https://<idp>/.well-known/openid-configuration` 형식이에요.
2. 직접 설정

   - IdP에서 확인한 아래 엔드포인트를 입력하세요.

     - **Authorization URL**(인증 URL)
     - **Token Endpoint**(토큰 엔드포인트)
     - **User Info Endpoint**(사용자 정보 엔드포인트)

**추가 안내**

- **Scopes**(스코프): 하이퍼클래스가 가져올 수 있는 정보의 범위를 정해요. 최소한 `openid`는 꼭 있어야 해요. `profile`과 `email`도 함께 넣는 것을 권장해요.

  - 자세한 내용은 [스코프 설명](#스코프-설명)을 참고하세요.
- **리다이렉트 URL**:

  - 하이퍼클래스가 미리 채워 줘요.
  - 비어 있다면 `https://<your-whitelabel-domain>/login/sso` 형식으로 입력하세요.
- 이 리다이렉트 URL은 IdP 설정에서 허용 목록(whitelist)에 등록해야 해요.

{% hint style="warning" %}
리다이렉트 URL은 위 형식에 맞게 고치는 경우가 아니면 수정하지 않는 것이 좋아요.
{% endhint %}

{% hint style="info" %}
자세한 내용은 아래 [OIDC 설정](#oidc-설정)을 참고하세요.
{% endhint %}

### 3단계: 사용자 정보 매핑

IdP의 사용자 정보를 하이퍼클래스와 연결해야 두 시스템에서 같은 사용자를 정확히 알아볼 수 있어요.

**입력할 항목**

- **Remote ID Field**(원격 ID 필드, 필수): IdP에서 사용자에게 부여한 고유 ID예요. OIDC의 `sub`나 Azure의 `oid`가 해당해요. 두 플랫폼에서 같은 사용자를 일관되게 식별하는 데 쓰여요.
- **ID Field**(ID 필드, 선택): 하이퍼클래스의 사용자 ID예요. 기존 하이퍼클래스 사용자와 직접 연결하고 싶을 때 쓰세요.
- **Email Field**(이메일 필드): IdP에서 사용자 이메일 주소가 담긴 필드예요. 예를 들어 `email`, `userPrincipalName`이 있어요. 사용자 계정을 확인하고 연결하는 데 도움이 돼요.

  - 이 필드의 값은 사용자마다 달라야 해요.
  - 하이퍼클래스는 이 필드로 사용자 이메일을 업데이트해요.
- **이메일 인증됨** 필드(필수): IdP가 이메일을 확인했는지 알려 주는 필드예요. 인증되지 않았거나 위조된 계정이 하이퍼클래스에 접근하는 것을 막아 줘요.

  - 예: `email_verified`

{% hint style="info" %}
자세한 내용은 아래 [사용자 정보 매핑](#사용자-정보-매핑-1)을 참고하세요.
{% endhint %}

### 4단계: 검토하고 마치기

- 입력한 내용을 다시 한번 확인하세요.
- 설정을 저장하세요.
- 설정을 마치면 접을 수 있는 영역이 세 개 보여요.

1. **SSO Configuration**(SSO 설정): 입력한 설정 내용을 보여 줘요.
2. **Test Status**(테스트 상태): 설정이 올바른지 자동으로 확인하는 테스트를 실행할 수 있어요. 테스트가 한 번 성공해야 SSO를 켤 수 있어요.
3. **추가 설정**: 에이전시의 SSO를 켜는 토글이 있어요. 다른 로그인 방식(이메일, Google)을 숨기는 토글도 선택해서 쓸 수 있어요.

- 이어서 테스트를 진행하세요.

## SSO 테스트하고 켜기

- SSO를 설정한 뒤에는 반드시 테스트해야 해요.
- 테스트가 성공하지 않으면 SSO 토글을 켤 수 없어요.
- 테스트하는 방법은 다음과 같아요.

  - 테스트 영역에서 **Start Test**(테스트 시작) 버튼을 눌러 새 테스트를 시작하세요.
  - 또는 오른쪽 위의 점 세 개 메뉴를 누르고 **Test Configuration**(설정 테스트)을 선택하세요.

    - 실제 SSO 로그인 과정을 그대로 거쳐요. 테스트하는 사람이 IdP로 이동해 로그인하게 돼요.
    - 로그인을 마치면 **회사 설정**의 SSO 탭으로 돌아오고, 테스트 상태가 업데이트돼요.
    - 성공하면 SSO를 켤 수 있어요. 실패하면 원인을 알려 주는 오류 메시지가 보여요. 자주 나오는 오류는 아래에 정리해 두었어요.
    - IdP 설정에 문제가 있으면 IdP 쪽 오류가 보여요.

{% hint style="info" %}
테스트한 뒤에 SSO 설정을 바꾸면 이전 테스트는 모두 “EXPIRED”(만료됨)로 표시돼요. 만료된 테스트는 더 이상 유효하지 않고, SSO 토글도 모두 초기화돼요. 에이전시의 SSO를 다시 켜려면 새로 테스트해야 해요.
{% endhint %}

{% hint style="info" %}
자세한 내용은 [자주 발생하는 오류](#자주-발생하는-오류)를 참고하세요.
{% endhint %}

## 기존 설정 수정 또는 삭제

- SSO 설정을 수정하면 이전 테스트 결과가 무효가 되고 SSO가 기본적으로 꺼져요. 다시 테스트하고 다시 켜야 해요.
- SSO를 켜기 전에는 **Hide other login options**(다른 로그인 방식 숨기기) 토글이 동작하지 않아요.
- 점 세 개 메뉴에서 SSO 설정을 삭제하면 다음과 같이 돼요.

  - **추가 설정**이 초기화돼요.
  - 테스트 결과가 만료돼요.
  - 모든 사용자의 SSO가 꺼져요.

## IdP별 설정 가이드

### Auth0

- Auth0에서 Regular Web Application을 만드세요.
- Client ID와 Secret을 복사해 하이퍼클래스에 붙여 넣으세요.
- 하이퍼클래스의 리다이렉트 URL을 Auth0의 Allowed Callback URLs에 추가하세요.
- 설정 엔드포인트: `https://YOUR_DOMAIN/.well-known/openid-configuration`
- 스코프: `openid profile email`
- 매핑: Remote ID → `sub`, Email → `email`, 이메일 인증됨 → `email_verified`

### Azure Active Directory (Entra ID)

- Azure Portal에서 **App registrations** > **신규 등록**을 선택하세요.
- 하이퍼클래스의 리다이렉트 URL을 Redirect URI로 추가하세요.
- Application (Client) ID를 복사해 하이퍼클래스의 Client ID에 붙여 넣으세요.
- 클라이언트 시크릿을 만들어 하이퍼클래스의 Secret에 붙여 넣으세요.
- **Endpoints**에서 OpenID metadata document URL을 복사해 하이퍼클래스의 OIDC Config URL 입력란에 붙여 넣으세요.
- 권한 `openid`, `profile`, `email`을 추가하세요.
- 매핑: Remote ID → `sub`, Email → `userPrincipalName`, 이메일 인증됨 → `email`

### Okta

- Okta Admin에서 **Applications** > **Create App Integration**을 선택하세요.
- **OIDC - OpenID Connect**를 선택하고 유형은 Web Application으로 하세요.
- 하이퍼클래스의 리다이렉트 URL을 **Login redirect URIs**에 추가하세요.
- Client ID와 Secret을 복사해 하이퍼클래스에 붙여 넣으세요.
- Okta 메타데이터 URL을 사용하세요: `https://<okta-domain>/.well-known/openid-configuration`
- 그룹 또는 사용자를 할당하세요.
- 매핑: Remote ID → `sub`, Email → `email`, 이메일 인증됨 → `email_verified`

## 현재 제한 사항

- 지금은 로그인만 지원해요.
- 새 사용자는 SSO로 가입할 수 없어요. 하이퍼클래스에 이미 등록된 사용자여야 해요.

  - [IdP 사용자를 하이퍼클래스에 추가하려면 어떻게 하나요?](#idp-사용자를-하이퍼클래스에-추가하려면-어떻게-하나요)

## 자주 발생하는 오류

| 오류 메시지 | 원인 | 해결 방법 |
| --- | --- | --- |
| “문제가 발생했습니다. 다시 시도해 주세요.” | 하이퍼클래스가 IdP에서 사용자 정보를 가져오지 못했어요. 엔드포인트가 잘못됐거나 IdP가 일시적으로 중단됐을 수 있어요. | OIDC Config URL과 엔드포인트가 맞는지 확인하고, IdP 앱이 활성 상태인지 확인한 뒤 나중에 다시 시도하세요. |
| “Email is not verified, please contact your admin.” | `email_verified` 속성이 없거나 false예요. | IdP가 ID 토큰에 `email_verified = true`를 넣어 주는지 확인하세요. |
| “remoteIdField is not configured properly, please contact your admin.” | Remote ID(예: `sub`, `oid`)가 없거나 매핑되지 않았어요. | 올바른 고유 식별자 필드로 설정을 수정하세요. |
| “emailField or idField is not configured properly, please contact your admin.” | Email Field 또는 ID Field 매핑이 올바르지 않아요. | 올바른 Email Field(예: `email`, `userPrincipalName`) 또는 ID Field를 입력하세요. |
| “No user found with this email.” | IdP의 사용자가 하이퍼클래스에 없어요. | 해당 사용자가 하이퍼클래스에 있는지 확인하세요. 기존 사용자에게는 `externalUserId`도 추가해야 해요. |
| “You are not authorized to access this account. Please contact your admin.” | 사용자에게 연결된 서브 계정이 올바르지 않아요. | 하이퍼클래스에서 사용자가 서브 계정에 연결되어 있는지 확인하세요. |
| “Failed to initiate SSO test.” | 백엔드에서 테스트 과정을 시작하지 못했어요. | 다시 시도하세요. 계속 같은 오류가 나면 하이퍼클래스 고객지원에 문의하세요. 이때 relationship number를 함께 알려 주세요. |

## FAQ

### IdP 사용자를 하이퍼클래스에 추가하려면 어떻게 하나요?

하이퍼클래스의 SSO는 지금 로그인만 지원하고, 새 사용자를 자동으로 만들지는 않아요. 사용자가 SSO로 로그인하려면 로그인하기 전에 하이퍼클래스에 먼저 추가해야 해요.

#### 사용자 추가 순서

1. Create or Edit Users 스코프를 켠 비공개 연동 토큰을 만드세요.
2. SSO용 Create Users API 또는 Update Users API로 하이퍼클래스에 사용자를 추가하거나 업데이트하세요.
3. 사용자를 만들 때 `externalUserId` 파라미터를 IdP에서 부여한 사용자의 고유 ID와 같게 설정하세요.

#### 왜 중요한가요

- 하이퍼클래스는 `externalUserId`(Remote ID)로 사용자를 찾아 연결해요.
- IdP에서만 사용자 이메일이 바뀌고 하이퍼클래스에서는 바뀌지 않으면, 일치하는 이메일을 찾지 못해 로그인에 실패할 수 있어요.
- 그래도 `externalUserId`(또는 SSO Remote ID)가 설정되어 있으면 하이퍼클래스가 사용자를 알아보고, 다음 로그인 때 이메일을 자동으로 업데이트해요.

#### 내부 동작 방식(참고용)

사용자가 SSO로 로그인하면 다음 순서로 확인해요.

- 먼저 SSO Remote ID가 일치하는 사용자를 찾아요.
- 없으면 이메일 + 회사 ID로 찾아요.
- 그래도 없으면 로그인에 실패해요.

{% hint style="info" %}
Create Users API / Update Users API로 사용자를 만들거나 업데이트할 때 `platformLanguage`도 함께 보내면, 사용자를 등록하는 시점에 화면 언어를 저장할 수 있어요. 사용자별로 직접 설정하는 수고를 줄여 줘요.
{% endhint %}

{% hint style="info" %}
이런 문제를 피하려면 API로 사용자를 만들거나 업데이트할 때 항상 SSO Remote ID를 넣으세요. IdP에서 사용자 이메일이 바뀔 가능성이 있다면 더 중요해요.
{% endhint %}

### 필수 입력 항목

- Client ID: IdP의 어떤 앱에 연결할지 하이퍼클래스에 알려 줘요.
- Secret: IdP로 가는 요청이 하이퍼클래스에서 온 것임을 확인해 줘요.
- Auth Method (OIDC): 인증 프로토콜이에요. OIDC로 고정되어 있어요.

### OIDC 설정

- OpenID Config URL: 필요한 엔드포인트를 모두 자동으로 가져와요.
- Authorization URL / Token Endpoint / User Info Endpoint: 직접 입력하는 방법이에요.
- Scopes: 최소 `openid`가 필요해요. `openid profile email`을 권장해요.
- 리다이렉트 URL:

  - 보통 미리 채워져 있어요.
  - 비어 있다면 `https://<your-whitelabel-domain>/login/sso`를 입력하세요.
  - IdP의 허용 목록에 등록해야 해요. 형식을 바로잡는 경우가 아니면 수정하지 마세요.

### 사용자 정보 매핑

- Remote ID Field: 두 플랫폼에서 사용자를 고유하게 식별해요(`sub`/`oid`).
- ID Field: 선택 항목이에요. 하이퍼클래스 사용자 ID로 직접 매핑할 때 써요.
- Email Field: IdP의 사용자 이메일을 매핑해요.
- 이메일 인증됨 필드: 신뢰할 수 있는 이메일인지 확인해요. 보안을 위해 필수예요.

### IdP에서 사용자 이메일을 바꾸면 어떻게 되나요?

- 하이퍼클래스는 `externalUserId`(Remote ID)를 기준으로 사용자를 찾아요.
- IdP에서 사용자 이메일이 바뀌면, 하이퍼클래스는 다음 로그인 때 이메일을 자동으로 업데이트해요.

### SSO 테스트를 시작했는데 로그인 화면으로 이동했어요

- 정상적인 동작이에요.
- 테스트하는 사용자가 화이트라벨 도메인에 처음 접속했거나 한 번도 로그인한 적이 없을 때 생겨요.
- 해당 도메인에서 로그아웃한 상태일 때도 마찬가지예요.
- 테스트 상태에는 영향이 없어요. 테스트는 정상적으로 실행된 거예요.
- 로그인한 뒤에 테스트를 다시 하면 전체 과정을 볼 수 있어요.

### SSO를 설정하거나 켤 수 있는 사람을 정할 수 있나요?

- 현재: 모든 에이전시 관리자가 하이퍼클래스에서 SSO를 보고, 설정하고, 켜고, 끌 수 있어요.
- 향후 계획: 세분화된 권한이 추가되면 슈퍼 관리자가 SSO를 관리할 수 있는 에이전시 관리자를 정할 수 있어요.

## 스코프 설명

스코프는 하이퍼클래스가 IdP에 요청할 수 있는 정보의 범위를 정해요. 사용자 매핑과 인증이 제대로 되려면 꼭 필요해요.

| 스코프 | 하는 일 | 하이퍼클래스에서 쓰는 방식 | 예시 |
| --- | --- | --- | --- |
| openid (필수) | 사용자의 고유 식별자(`sub`)를 돌려줘요. | 사용자를 Remote ID와 연결해요. | 모든 OIDC 로그인에 필요해요. |
| profile | `name`, `given_name`, `family_name` 같은 기본 프로필 정보를 돌려줘요. | 하이퍼클래스의 사용자 정보(예: 표시 이름)를 보강할 수 있어요. | 이메일뿐 아니라 이름도 자동으로 동기화하고 싶을 때 유용해요. |
| email | 사용자의 이메일과 `email_verified` 값을 돌려줘요. | 하이퍼클래스의 Email Field에 매핑되고, 신뢰할 수 있는 로그인을 확인해요. | IdP에서 이메일이 바뀌면 하이퍼클래스가 사용자의 이메일을 자동으로 업데이트할 수 있어요. |
| groups / roles (IdP에 따라 다름) | 그룹/역할 소속 정보를 돌려줘요. | 앞으로 역할 기반 접근이나 서브 계정 매핑에 쓸 수 있어요. | Okta/Azure에 설정하면 “X 그룹의 구성원만 하이퍼클래스에 접근할 수 있다”는 규칙을 적용할 수 있어요. |
| offline_access (선택) | 오래 유지되는 세션용 refresh 토큰을 돌려줘요. | 하이퍼클래스에서는 지원되지 않음 | 하이퍼클래스에서는 지원되지 않음 |
