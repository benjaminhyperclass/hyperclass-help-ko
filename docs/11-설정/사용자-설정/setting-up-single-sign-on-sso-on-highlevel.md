---

번역일: 2026-04-07
카테고리: 11-설정 > 사용자-설정
---

# 하이퍼클래스에서 Single Sign-On(SSO) 설정하기

하이퍼클래스는 OpenID Connect(OIDC) 프로토콜을 사용한 Single Sign-On(SSO)을 지원합니다. SSO를 통해 에이전시는 사용자들이 조직 계정으로 하이퍼클래스에 로그인할 수 있도록 하여 보안을 강화하고 접근을 간소화할 수 있습니다.

현재 하이퍼클래스는 OIDC만 지원합니다. SAML은 아직 지원되지 않지만, 향후 로드맵에 포함되어 있습니다.

## 목차

- [이동 및 접근 방법](#이동-및-접근-방법)
- [설정 과정](#설정-과정)
- [SSO 테스트 및 활성화](#sso-테스트-및-활성화)
- [기존 설정 편집 또는 삭제](#기존-설정-편집-또는-삭제)
- [제공업체별 가이드](#제공업체별-가이드)
- [현재 제한사항](#현재-제한사항)
- [일반적인 오류 해결](#일반적인-오류-해결)
- [자주 묻는 질문](#자주-묻는-질문)

## 이동 및 접근 방법

- Labs 페이지로 이동하여 에이전시의 Single Sign On(SSO) 기능 플래그를 활성화하세요

⚠️ 11월 3일 이전에만 필요하며, 이후에는 기본적으로 활성화됩니다

- `Company Settings(회사 설정) → Single Sign-On(SSO)`로 이동하세요

- 모든 에이전시 관리자가 SSO를 확인하고 설정할 수 있습니다

- "Enable SSO" 버튼을 눌러 설정 과정을 시작할 수 있습니다

## 사전 요구사항

SSO를 활성화하기 전에 두 가지 조건이 충족되어야 합니다:

- 에이전시가 $497 플랜을 사용해야 합니다
- 화이트라벨 도메인이 이미 설정되어 있어야 합니다

## 설정 과정

### 1단계: Client ID 및 Secret

- 인증 방법: OIDC로 고정 (SAML은 향후 지원 예정)
- Client ID: IdP(Identity Provider)에서 발급한 식별자
- Secret: IdP에서 생성한 보안 키로, 하이퍼클래스가 요청 시 신원을 증명하는 데 사용됩니다

ℹ️ [자주 묻는 질문](#필수-필드) 참조

### 2단계: OIDC 설정

자동 또는 수동으로 설정할 수 있습니다:

**자동 검색 (권장)**
- "Use OIDC Config URL"에서 Yes를 선택하세요
- IdP의 OIDC Config URL을 입력하세요 (일반적으로: https://<idp>/.well-known/openid-configuration)

**수동 설정**
IdP에서 다음 엔드포인트를 입력하세요:
- Authorization URL
- Token Endpoint
- User Info Endpoint

**추가 사항:**

- Scopes: 하이퍼클래스가 검색할 수 있는 데이터를 정의합니다. 최소한 `openid`가 필요합니다.
  `profile`과 `email` 추가를 권장합니다.

ℹ️ [자주 묻는 질문](#스코프-설명) 참조

- Redirect URL:
  - 하이퍼클래스에서 미리 채워집니다
  - 그렇지 않은 경우, 다음 패턴을 따라야 합니다: https://<your-whitelabel-domain>/login/sso
  - 이 Redirect URL은 IdP 설정에서 허용 목록에 추가되어야 합니다

⚠️ 올바른 패턴에 맞추는 경우가 아니라면 Redirect URL 편집은 권장되지 않습니다.

ℹ️ [자주 묻는 질문](#자주-묻는-질문) 참조

### 3단계: 사용자 정보 매핑

IdP의 사용자 정보를 하이퍼클래스에 연결하여 같은 사용자가 양쪽 시스템에서 올바르게 인식되도록 해야 합니다.

**완료해야 할 필드:**

- Remote ID Field (필수): IdP의 고유 사용자 ID (예: OIDC의 sub, Azure의 oid). 플랫폼 간 동일한 사용자의 일관된 식별을 보장합니다
- ID Field (선택): 하이퍼클래스 사용자 ID. 기존 하이퍼클래스 사용자에게 직접 매핑하려는 경우 사용하세요
- Email Field: IdP의 사용자 이메일 주소 필드 (예: email, userPrincipalName). 사용자 신원 확인 및 매핑에 도움이 됩니다
  - 이 필드가 시스템의 각 사용자마다 고유한지 확인하세요
  - 이것이 데이터에서 사용자 이메일을 업데이트하는 데 사용됩니다
- Email Verified Field (필수): IdP에서 이메일이 검증되었는지 확인합니다. 검증되지 않거나 위조된 계정이 하이퍼클래스에 접근하는 것을 방지합니다
  예: email_verified

ℹ️ [자주 묻는 질문](#사용자-정보-매핑) 참조

### 4단계: 검토 및 완료

- 모든 입력 사항을 다시 확인하세요
- 설정을 저장하세요
- 설정 완료 후 세 개의 접을 수 있는 섹션이 표시됩니다:
  - SSO Configuration(SSO 설정) – 입력한 설정을 표시합니다
  - Test Status(테스트 상태) – 설정을 검증하는 자동 테스트를 실행할 수 있습니다. 테스트가 성공적으로 통과할 때까지 SSO를 활성화할 수 없습니다
  - Additional Settings(추가 설정) – 에이전시의 SSO 활성화 및 다른 로그인 방법(이메일 및 Google) 숨기기 토글을 포함합니다
- 테스트 단계로 진행하세요

## SSO 테스트 및 활성화

- SSO 설정 후 설정 테스트가 필수입니다
- 성공적인 테스트가 수행되지 않으면 SSO 토글을 켤 수 없습니다
- 테스트 수행 방법:
  - 테스트 섹션에서 "Start Test" 버튼을 클릭하여 새 테스트를 시작하세요
  - 또는 오른쪽 상단의 점 세 개 메뉴를 클릭하고 "Test Configuration" 옵션을 클릭하세요
- 이는 SSO 로그인 흐름을 시뮬레이션하여 테스터를 IdP로 이동시키고 로그인을 요청합니다
- 완료되면 업데이트된 테스트 상태와 함께 Company Settings(회사 설정) SSO 탭으로 다시 리디렉션됩니다
- 성공하면 SSO 활성화를 진행할 수 있습니다. 실패하면 문제점을 알려주는 오류 메시지가 표시됩니다. 일반적인 오류 목록이 첨부되어 있습니다
- IdP 설정에 문제가 있으면 IdP 관련 오류가 표시됩니다
- 참고: 테스트 수행 후 SSO 설정이 업데이트되면 모든 테스트가 "EXPIRED"로 표시됩니다. 테스트가 더 이상 유효하지 않은 것으로 간주되어 모든 SSO 토글이 재설정됩니다.

에이전시의 SSO를 다시 활성화하려면 새 테스트를 수행해야 합니다.

ℹ️ [일반적인 오류 해결](#일반적인-오류-해결) 참조

## 기존 설정 편집 또는 삭제

- SSO 설정을 편집하면 이전 테스트 결과가 무효화되고 기본적으로 SSO가 비활성화됩니다. 다시 테스트하고 다시 활성화해야 합니다
- Hide other login options(다른 로그인 옵션 숨기기) 토글은 SSO가 활성화될 때까지 작동하지 않습니다
- SSO 설정 삭제 (점 세 개 메뉴에서):
  - 추가 설정을 재설정합니다
  - 테스트 결과를 만료시킵니다
  - 모든 사용자의 SSO를 비활성화합니다

## 제공업체별 가이드

### Auth0

- Auth0에서 Regular Web Application을 생성하세요
- Client ID와 Secret을 하이퍼클래스에 복사하세요
- 하이퍼클래스 Redirect URL을 Auth0 Allowed Callback URLs에 추가하세요
- Config endpoint → [https://YOUR_DOMAIN/.well-known/openid-configuration](https://YOUR_DOMAIN/.well-known/openid-configuration)
- Scopes → openid profile email
- 매핑: Remote ID → sub, Email → email, Verified → email_verified

### Azure Active Directory (Entra ID)

- Azure Portal → App registrations → New registration
- 하이퍼클래스 Redirect URI를 추가하세요
- Application (Client) ID를 하이퍼클래스 Client ID에 복사하세요
- Client Secret을 생성하여 하이퍼클래스 Secret에 복사하세요
- Endpoints에서 OpenID metadata document URL을 하이퍼클래스 Config 필드에 복사하세요
- 권한 추가: openid, profile, email
- 매핑: Remote ID → oid, Email → userPrincipalName, Verified → true

### Okta

- Okta Admin → Applications → Create App Integration
- OIDC - OpenID Connect 선택, type = Web Application
- Login redirect URIs 아래에 하이퍼클래스 Redirect URL을 추가하세요
- Client ID와 Secret을 하이퍼클래스에 복사하세요
- Okta 메타데이터 URL 사용: https://<okta-domain>/.well-known/openid-configuration
- 그룹/사용자를 할당하세요
- 매핑: Remote ID → sub, Email → email, Verified → email_verified

## 현재 제한사항

- 현재 로그인만 지원합니다
- 새 사용자는 SSO로 회원가입할 수 없습니다 — 이미 하이퍼클래스에 존재해야 합니다

ℹ️ [SSO 준비된 사용자를 하이퍼클래스에 추가하는 방법](#SSO-ID-제공업체의-사용자-데이터베이스에서-GHL로-사용자를-추가하는-방법은)

## 일반적인 오류 해결

| 오류 메시지 | 원인 | 해결 방법 |
|------------|------|-----------|
| "Something went wrong, please try again." | 하이퍼클래스가 IdP에서 사용자 정보를 가져올 수 없습니다. 잘못된 엔드포인트이거나 일시적인 IdP 중단일 수 있습니다. | OIDC Config URL/엔드포인트를 확인하고, IdP 앱이 활성 상태인지 확인한 후 나중에 다시 시도하세요. |
| "Email is not verified, please contact your admin." | email_verified 속성이 누락되거나 false입니다. | IdP가 ID 토큰에 email_verified = true를 포함하도록 확인하세요. |
| "remoteIdField is not configured properly, please contact your admin." | Remote ID (예: sub, oid)가 누락되거나 매핑되지 않았습니다. | 유효한 고유 식별자 필드로 설정을 업데이트하세요. |
| "emailField or idField is not configured properly, please contact your admin." | Email 또는 ID Field 매핑이 유효하지 않습니다. | 유효한 Email Field (예: email, userPrincipalName) 또는 ID Field를 제공하세요. |
| "No user found with this email." | IdP 사용자가 하이퍼클래스에 존재하지 않습니다. | 사용자가 하이퍼클래스 내에 존재하고 기존 사용자에 대해 externalUserId를 추가했는지 확인하세요. |
| "You are not authorized to access this account. Please contact your admin." | 사용자에게 유효한 하위 계정 연결이 없습니다. | 사용자가 하이퍼클래스의 하위계정에 연결되어 있는지 확인하세요. |
| "Failed to initiate SSO test." | 백엔드가 테스트 흐름을 시작할 수 없습니다. | 다시 시도하세요. 문제가 계속되면 관계 번호와 함께 지원팀에 이메일을 보내세요. |

## 자주 묻는 질문

### SSO ID 제공업체의 사용자 데이터베이스에서 GHL로 사용자를 추가하는 방법은?

하이퍼클래스의 SSO는 현재 로그인만 지원하며 새 사용자를 자동으로 생성하지 않습니다. 사용자가 SSO를 통해 로그인할 수 있도록 하려면 로그인을 시도하기 전에 하이퍼클래스에 추가해야 합니다.

#### 사용자 추가 단계

- Create or Edit Users 스코프가 활성화된 Private Integration Token을 생성하세요
- Create Users API 또는 Update Users API for SSO를 사용하여 하이퍼클래스에 사용자를 추가하거나 업데이트하세요
- 사용자를 생성할 때 externalUserId 매개변수를 IdP의 사용자 고유 ID와 일치하도록 설정하세요

#### 중요한 이유

- 하이퍼클래스는 externalUserId (Remote ID)를 기반으로 사용자를 매칭합니다
- 사용자의 이메일이 IdP에서 변경되었지만 하이퍼클래스에서는 변경되지 않은 경우, 시스템이 일치하는 이메일을 찾을 수 없어 로그인이 실패할 수 있습니다
- 하지만 externalUserId (또는 SSO Remote ID)가 설정되어 있다면, 하이퍼클래스는 여전히 사용자를 인식하고 다음 로그인 시 자동으로 이메일을 업데이트합니다

#### 백그라운드 프로세스 (참고용)

사용자가 SSO를 통해 로그인할 때:
- 하이퍼클래스는 먼저 일치하는 SSO Remote ID를 가진 사용자를 찾습니다
- 찾을 수 없으면 이메일 + 회사 ID로 검색합니다
- 여전히 찾을 수 없으면 로그인이 실패합니다

Create Users API / Update Users API로 사용자를 생성하거나 업데이트할 때 platformLanguage도 전달하여 프로비저닝 시 사용자의 UI 언어를 유지할 수 있습니다. 이는 사용자별 수동 설정을 줄여줍니다.

ℹ️ 이를 방지하려면 API를 통해 사용자를 생성하거나 업데이트할 때 항상 SSO Remote ID를 포함하세요 — 특히 IdP에서 사용자 이메일이 변경될 가능성이 있는 경우.

### 필수 필드

- Client ID: 하이퍼클래스가 IdP의 어떤 앱에 연결할지 알려줍니다
- Secret: IdP에 대한 요청이 하이퍼클래스에서 오는 것임을 확인합니다
- Auth Method (OIDC): 인증 프로토콜 (OIDC로 고정)

### OIDC 설정

- OpenID Config URL: 모든 엔드포인트를 자동으로 제공합니다
- Authorization URL / Token Endpoint / User Info Endpoint: 수동 입력 옵션
- Scopes: 최소 openid; openid profile email 권장
- Redirect URL:
  - 일반적으로 미리 채워집니다
  - 누락된 경우: https://<your-whitelabel-domain>/login/sso
  - IdP에서 허용 목록에 추가되어야 합니다. 형식을 수정하는 경우가 아니라면 편집하지 마세요

### 사용자 정보 매핑

- Remote ID Field: 양쪽 플랫폼에서 사용자를 고유하게 식별합니다 (sub/oid)
- ID Field: 선택사항 — 직접 매핑을 위한 하이퍼클래스 사용자 ID
- Email Field: IdP에서 사용자 이메일을 매핑합니다
- Email Verified Field: 이메일이 신뢰할 수 있는지 확인합니다; 보안을 위해 필수

### IdP에서 사용자 이메일 업데이트

- 하이퍼클래스는 externalUserId (Remote ID)에 의존합니다
- 사용자의 이메일이 IdP에서 업데이트되면, 하이퍼클래스는 다음 로그인 시 자동으로 업데이트합니다

### SSO 테스트 시작 후 로그인 화면으로 리디렉션되었어요

- 이는 완전히 정상입니다
- 테스트하는 사용자가 WL 도메인을 처음 방문했고 이전에 로그인한 적이 없는 경우
- 또는 도메인에서 로그아웃한 경우에 발생합니다
- 이것은 테스트 상태에 영향을 주지 않습니다. 테스트는 예상대로 실행되었습니다
- 로그인 후 다시 테스트를 수행하면 전체 흐름을 볼 수 있습니다

### SSO를 설정하거나 활성화할 수 있는 사람 제어

- 현재 동작: 모든 에이전시 관리자가 하이퍼클래스에서 SSO를 확인, 설정, 활성화 또는 비활성화할 수 있습니다
- 향후 로드맵: 세분화된 권한으로 슈퍼 관리자가 어떤 에이전시 관리자가 SSO를 관리할 수 있는지 제어할 수 있습니다

## 스코프 설명

스코프는 하이퍼클래스가 IdP에서 요청할 수 있는 정보를 결정합니다. 적절한 사용자 매핑과 인증을 위해 중요합니다.

| 스코프 | 역할 | 하이퍼클래스에서 사용하는 방법 | 예시 |
|--------|------|------------------------------|------|
| openid (필수) | 사용자의 고유 식별자(sub)를 반환합니다. | 사용자를 Remote ID에 연결합니다. | 모든 OIDC 로그인에 필요합니다. |
| profile | name, given_name, family_name 같은 기본 프로필 정보를 반환합니다. | 하이퍼클래스의 사용자 데이터를 풍부하게 할 수 있습니다 (예: 표시 이름). | 이메일뿐만 아니라 이름도 자동 동기화하려는 경우 유용합니다. |
| email | 사용자의 이메일과 email_verified 플래그를 반환합니다. | 하이퍼클래스의 Email Field에 매핑하고 신뢰할 수 있는 로그인을 보장합니다. | IdP에서 변경된 경우 하이퍼클래스가 사용자의 이메일을 자동으로 업데이트할 수 있습니다. |
| groups / roles (제공업체 의존) | 그룹/역할 멤버십을 반환합니다. | 역할 기반 접근이나 하위계정 매핑에 사용할 수 있습니다 (향후). | Okta/Azure에서 설정된 경우 "그룹 X의 멤버만 하이퍼클래스에 접근할 수 있음"을 적용할 수 있습니다. |
| offline_access (선택) | 장기간 세션을 위한 리프레시 토큰을 반환합니다. | 하이퍼클래스에서 지원되지 않습니다 | # 하이퍼클래스에서 지원되지 않습니다 |

---
*원문 최종 수정: Fri, 20 Feb, 2026 at 4:44 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*