---

번역일: 2026-04-07
카테고리: 11-설정 > 사용자-설정
---

# Hyperclass의 싱글 사인온(SSO) 설정

싱글 사인온(SSO)을 사용하면 에이전시와 하위 계정 사용자들이 기존 ID 공급자(Identity Provider)에서 사용하는 동일한 로그인 정보로 Hyperclass에 로그인할 수 있어, 더 빠르고 전문적이며 안전한 로그인 경험을 제공합니다.

**중요**: 현재 Hyperclass는 OIDC만 지원합니다. SAML은 아직 지원되지 않지만, 향후 로드맵에 포함되어 있습니다.

---

## 싱글 사인온(SSO)이란?

싱글 사인온(SSO)은 Hyperclass를 OpenID Connect(OIDC) 표준을 지원하는 외부 ID 공급자(IdP)에 연결하는 인증 방법입니다. SSO가 설정되면 사용자는 IdP로 리디렉션되어 한 번만 인증하면 검증된 토큰으로 Hyperclass에 다시 돌아오게 됩니다. 이를 통해 Hyperclass 내에서 별도의 사용자명과 비밀번호가 필요 없어지고, 중앙집중화된 ID 관리가 가능해집니다. 화이트라벨 도메인을 보유한 $497 요금제 에이전시는 에이전시당 하나의 IdP 연결을 활성화하여 모든 하위 계정에서 SSO를 사용할 수 있습니다.

---

## 싱글 사인온(SSO)의 주요 장점

- **원클릭 접근** — 사용자가 한 번만 로그인하면 모든 Hyperclass 계정에 매끄럽게 접근할 수 있습니다.

- **강화된 보안** — 비밀번호 정책, MFA, 조건부 액세스 규칙이 IdP 내에서 유지됩니다.

- **브랜드 경험** — 이메일/비밀번호 및 소셜 로그인을 숨겨서 고객에게는 오직 당신의 로고만 보이도록 합니다.

- **중앙집중화된 사용자 라이프사이클** — IdP에서 사용자를 중단하거나 삭제하면 Hyperclass 접근 권한이 즉시 취소됩니다.

- **감사 대응** — 로그인 이벤트가 IdP의 보고 시스템으로 전송되어 규정 준수 및 거버넌스에 활용됩니다.

---

## 자격 요건 및 전제 조건

SSO를 활성화하려면 에이전시가 다음 모든 조건을 만족해야 합니다:

- 월 $497 에이전시 구독 활성화
- 화이트라벨 도메인 설정 완료 (SSO는 화이트라벨 로그인 페이지에서만 나타남)
- 에이전시당 정확히 하나의 IdP 연동 (여러 IdP는 지원되지 않음)
- IdP는 OpenID Connect를 지원해야 함 (SAML은 현재 지원되지 않음)
- 사용자는 이미 Hyperclass에 존재하거나 externalUserId와 함께 Users API를 통해 생성되어야 함

---

## 메뉴 이동 및 접근

**Company Settings in Agency Level(에이전시 레벨의 회사 설정) → Single Sign-On (SSO)**로 이동하세요. 모든 에이전시 관리자가 SSO를 보고 설정할 수 있습니다. 설정 과정을 시작하려면 "Enable SSO" 버튼이 표시됩니다.

![SSO 메인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056463572/original/-YmbEEABdoPBETpza5rEEPq9wD_q19EA6g.png?1761044821)

---

## 설정 과정

### **1단계: 클라이언트 ID 및 시크릿**

- **인증 방법**: OIDC로 고정 (향후 SAML 지원 예정)
- **Client ID**: IdP에서 발급한 식별자
- **Secret**: IdP에서 생성한 보안 키로, Hyperclass가 요청할 때 신원을 증명하는 데 사용

![클라이언트 ID 및 시크릿 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056470964/original/Jj7a06GKc6MquZvGdcCnok4XXC7o6gt-EQ.png?1761048521)

### **2단계: OIDC 설정**

자동 또는 수동으로 설정할 수 있습니다:

**자동 검색 (권장)**: "Use OIDC Config URL" 옵션에서 "Yes"를 선택하고, IdP의 OIDC Config URL을 입력하세요 (일반적으로: https://<idp>/.well-known/openid-configuration).

**수동 설정**: IdP에서 다음 엔드포인트를 입력하세요:
- Authorization URL
- Token Endpoint  
- User Info Endpoint

**추가 참고사항**:

- **Scopes**: Hyperclass가 가져올 수 있는 데이터를 정의합니다. 최소한 OpenID가 필요하며, profile과 email을 추가하는 것이 권장됩니다.

- **Redirect URL**: Hyperclass에서 미리 입력됩니다. 없다면 다음 패턴을 따라야 합니다: **https://<당신의-화이트라벨-도메인>/login/sso**
이 Redirect URL은 IdP 설정에서 허용 목록에 추가되어야 합니다. 올바른 패턴으로 수정하는 경우가 아니라면 Redirect URL 편집은 권장되지 않습니다.

![OIDC 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056471009/original/N91KkpzLapE_2qqaNcoYqQaUUYb_rp2dEg.png?1761048574)

### **3단계: 사용자 세부정보 매핑**

IdP의 사용자 정보를 Hyperclass와 연결하여 양 시스템에서 동일한 사용자가 올바르게 인식되도록 해야 합니다.

**작성할 필드**:

- **Remote ID Field (필수)**: IdP의 고유 사용자 ID (예: OIDC의 sub, Azure의 oid). 플랫폼 간에 동일한 사용자를 일관되게 식별합니다.

- **ID Field (선택사항)**: Hyperclass 사용자 ID. 기존 Hyperclass 사용자에게 직접 매핑하고 싶을 때 사용합니다.

- **Email Field**: IdP의 사용자 이메일 주소 필드 (예: email, userPrincipalName). 사용자 신원을 확인하고 매핑하는 데 도움이 됩니다.
  
  이 필드가 시스템 내 각 사용자에게 고유한지 확인하세요.
  
  사용자의 이메일을 업데이트할 때 이 필드를 사용합니다.

- **Email Verified Field (필수)**: 이메일이 IdP에 의해 검증되었는지 확인합니다. 검증되지 않거나 위조된 계정이 Hyperclass에 접근하는 것을 방지합니다. 예: email_verified.

![사용자 세부정보 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056471079/original/qtHpFoTrJ9EY2kHnQ2uz4dB8SUu5HBROaw.png?1761048609)

### **4단계: 검토 및 완료**

모든 입력 항목을 재확인하고 설정을 저장하세요. 설정 완료 후 다음 세 개의 접을 수 있는 섹션이 표시됩니다:

- **SSO Configuration** — 입력한 설정을 표시합니다.
- **Test Status** — 설정을 검증하는 자동 테스트를 실행할 수 있습니다. 테스트가 성공하기 전까지는 SSO를 활성화할 수 없습니다.
- **Additional Settings** — 에이전시용 SSO를 활성화하고 선택적으로 다른 로그인 방법(이메일 및 Google)을 숨기는 토글이 포함되어 있습니다. 테스트 단계로 진행하세요.

![검토 및 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056471177/original/s8yVBEgJTcdtbpy1J44i-7sK2LfRDPFcog.png?1761048659)

---

## SSO 테스트 및 활성화

SSO 설정 후 설정 테스트는 필수입니다. 성공적인 테스트가 수행되지 않으면 SSO 토글을 켤 수 없습니다.

테스트 수행 방법:

- 테스트 섹션에서 "Start Test" 버튼을 클릭하여 새 테스트를 시작합니다.
- 또는 우상단의 점 세 개 메뉴를 클릭하고 "Test Configuration" 옵션을 선택합니다.

이 과정은 SSO 로그인 과정을 모방하여 테스터를 IdP로 이동시키고 로그인을 요청합니다.

- 완료되면 업데이트된 테스트 상태와 함께 Company Settings SSO 탭으로 다시 리디렉션됩니다.
- 성공하면 SSO 활성화를 진행할 수 있습니다. 실패하면 문제의 원인을 알려주는 에러 메시지가 표시됩니다. 일반적인 에러 목록이 첨부되어 있습니다.
- IdP 설정에 문제가 있으면 IdP 관련 에러가 표시됩니다.

**참고**: 테스트 수행 후 SSO 설정이 업데이트되면 모든 테스트가 "EXPIRED"로 표시됩니다. 테스트가 더 이상 유효하지 않으며, 모든 SSO 토글이 재설정됩니다. 에이전시용 SSO를 다시 활성화하려면 새 테스트를 수행해야 합니다.

![SSO 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056471250/original/fN_c7937jwaBKXG_muOmc66jl5mJ01PxGw.png?1761048709)

---

## 일반적인 오류 해결

**기존 설정 편집 또는 삭제**: SSO 설정을 편집하면 이전 테스트 결과가 무효화되고 기본적으로 SSO가 비활성화됩니다. 다시 테스트하고 재활성화해야 합니다.

- 다른 로그인 옵션 숨기기 토글은 SSO가 활성화될 때까지 작동하지 않습니다.
- SSO 설정 삭제(점 세 개 메뉴에서):
  - 추가 설정을 재설정합니다.
  - 테스트 결과를 만료시킵니다.
  - 모든 사용자의 SSO를 비활성화합니다.

### **공급자별 가이드**

**Auth0**

- Auth0에서 Regular Web Application을 생성합니다.
- Client ID와 Secret을 Hyperclass에 복사합니다.
- Hyperclass Redirect URL을 Auth0 Allowed Callback URLs에 추가합니다.
- **Config endpoint** → [https://YOUR_DOMAIN/.well-known/openid-configuration](https://YOUR_DOMAIN/.well-known/openid-configuration)
- **Scopes** → openid profile email
- **매핑**: Remote ID → sub, Email → email, Verified → email_verified

**Azure Active Directory (Entra ID)**

- Azure Portal → App registrations → New registration
- Hyperclass Redirect URI를 추가합니다.
- Application (Client) ID를 복사 → Hyperclass Client ID
- Client Secret 생성 → Hyperclass Secret
- Endpoints에서 OpenID metadata document URL 복사 → Hyperclass Config 필드
- **권한 추가**: openid, profile, email
- **매핑**: Remote ID → oid, Email → userPrincipalName, Verified → true

**Okta**

- Okta Admin → Applications → Create App Integration
- OIDC - OpenID Connect 선택, type = Web Application
- Login redirect URIs에 Hyperclass Redirect URL 추가
- Client ID와 Secret을 Hyperclass에 복사
- Okta metadata URL 사용: https://<okta-domain>/.well-known/openid-configuration
- 그룹/사용자 할당
- 매핑: Remote ID → sub, Email → email, Verified → email_verified

---

## 현재 제한사항 및 일반적인 오류

현재는 로그인만 지원합니다. 새 사용자는 SSO로 가입할 수 없으며, 이미 Hyperclass에 존재해야 합니다.

| 오류 메시지 | 원인 | 해결 방법 |
|------------|------|----------|
| "Something went wrong, please try again." | Hyperclass가 IdP에서 사용자 세부정보를 가져올 수 없음. 잘못된 엔드포인트이거나 일시적인 IdP 다운타임일 수 있음. | OIDC Config URL/엔드포인트를 확인하고, IdP 앱이 활성화되어 있는지 확인 후 나중에 다시 시도. |
| "Email is not verified, please contact your admin." | email_verified 속성이 누락되었거나 false임. | IdP가 ID 토큰에 email_verified = true를 포함하도록 확인. |
| "remoteIdField is not configured properly, please contact your admin." | Remote ID (예: sub, oid)가 누락되었거나 매핑되지 않음. | 유효한 고유 식별자 필드로 설정을 업데이트. |
| "emailField or idField is not configured properly, please contact your admin." | Email 또는 ID Field 매핑이 잘못됨. | 유효한 Email Field (예: email, userPrincipalName) 또는 ID Field 제공. |
| "No user found with this email." | IdP 사용자가 Hyperclass에 존재하지 않음. | 사용자가 Hyperclass에 존재하고 기존 사용자에게 externalUserId를 추가했는지 확인. |
| "You are not authorized to access this account. Please contact your admin." | 사용자에게 유효한 하위 계정 연결이 누락됨. | 사용자가 Hyperclass의 하위 계정에 연결되어 있는지 확인. |
| "Failed to initiate SSO test." | 백엔드가 테스트 흐름을 시작할 수 없음. | 다시 시도. 지속되면 관계 번호와 함께 지원팀에 이메일. |

---

## SSO ID 공급자(IDP)의 사용자 데이터베이스에서 GHL로 사용자 추가

Hyperclass의 SSO는 현재 로그인만 지원하며, 새 사용자를 자동으로 생성하지 않습니다. 사용자가 SSO를 통해 로그인할 수 있도록 하려면 로그인 시도 전에 Hyperclass에 사용자를 추가해야 합니다.

**사용자 추가 단계**

1. Create or Edit Users 범위가 활성화된 Private Integration Token을 생성합니다.
2. Create Users API 또는 Update Users API for SSO를 사용하여 Hyperclass에 사용자를 추가하거나 업데이트합니다.
3. 사용자 생성 시 externalUserId 매개변수를 IdP의 사용자 고유 ID와 일치하도록 설정합니다.

**중요한 이유**

- Hyperclass는 externalUserId (Remote ID)를 기반으로 사용자를 매칭합니다.
- IdP에서 사용자의 이메일이 변경되었지만 Hyperclass에서는 변경되지 않은 경우, 일치하는 이메일을 찾지 못해 로그인이 실패할 수 있습니다.
- 그러나 externalUserId (또는 SSO Remote ID)가 설정되어 있다면, Hyperclass는 여전히 사용자를 인식하고 다음 로그인 시 자동으로 이메일을 업데이트합니다.

**내부 작동 원리** (참고용): 사용자가 SSO를 통해 로그인할 때:

- Hyperclass는 먼저 일치하는 SSO Remote ID를 가진 사용자를 찾습니다.
- 찾지 못하면 이메일 + 회사 ID로 검색합니다.
- 여전히 찾지 못하면 로그인이 실패합니다.

**팁**: 이를 방지하려면 API를 통해 사용자를 생성하거나 업데이트할 때 항상 SSO Remote ID를 포함하세요. 특히 IdP에서 사용자의 이메일이 변경될 가능성이 있는 경우에는 더욱 중요합니다.

### **필수 필드**

- **Client ID**: Hyperclass가 IdP의 어느 앱에 연결할지 알려줍니다.
- **Secret**: IdP에 대한 요청이 Hyperclass에서 오는 것임을 확인합니다.
- **Auth Method (OIDC)**: 인증 프로토콜 (OIDC로 고정)

**1. OIDC 설정**

- **OpenID Config URL**: 모든 엔드포인트를 자동으로 제공합니다.
- **Authorization URL / Token Endpoint / User Info Endpoint**: 수동 입력 옵션
- **Scopes**: 최소한 openid; 권장사항은 openid profile email
- **Redirect URL**: 
  - 일반적으로 미리 입력됨
  - 누락된 경우: https://<당신의-화이트라벨-도메인>/login/sso
  - IdP에서 허용 목록에 추가되어야 함. 형식을 수정하는 경우가 아니라면 편집하지 마세요.

**2. 사용자 세부정보 매핑**

- **Remote ID Field**: 양 플랫폼에서 사용자를 고유하게 식별합니다 (sub/oid).
- **ID Field**: 선택사항 — 직접 매핑을 위한 Hyperclass 사용자 ID
- **Email Field**: IdP에서 사용자 이메일을 매핑합니다.
- **Email Verified Field**: 이메일이 신뢰할 수 있는지 확인; 보안을 위해 필수입니다.

**3. IdP에서 사용자 이메일 업데이트**

- Hyperclass는 externalUserId (Remote ID)에 의존합니다.
- IdP에서 사용자의 이메일이 업데이트되면, Hyperclass는 다음 로그인 시 자동으로 업데이트합니다.

**SSO를 설정하거나 활성화할 수 있는 권한 제어**

- **현재 동작**: 모든 에이전시 관리자가 Hyperclass에서 SSO를 보고, 설정하고, 활성화하거나 비활성화할 수 있습니다.
- **향후 로드맵**: 세분화된 권한을 통해 슈퍼 관리자가 어떤 에이전시 관리자가 SSO를 관리할 수 있는지 제어할 수 있습니다.

---

## 스코프 설명

스코프는 Hyperclass가 IdP에서 요청할 수 있는 정보를 결정합니다. 적절한 사용자 매핑과 인증을 위해 중요합니다.

| 스코프 | 기능 | Hyperclass 사용법 | 예시 |
|-------|------|-----------------|-----|
| openid (필수) | 사용자의 고유 식별자(sub)를 반환합니다. | 사용자를 Remote ID에 연결합니다. | 모든 OIDC 로그인에 필요합니다. |
| profile | 이름, given_name, family_name과 같은 기본 프로필 정보를 반환합니다. | Hyperclass에서 사용자 데이터를 풍부하게 만들 수 있습니다 (예: 표시 이름). | 이메일뿐만 아니라 이름도 자동 동기화를 원할 때 유용합니다. |
| email | 사용자의 이메일과 email_verified 플래그를 반환합니다. | Hyperclass의 Email Field에 매핑되고 신뢰할 수 있는 로그인을 보장합니다. | IdP에서 변경된 경우 Hyperclass가 사용자의 이메일을 자동으로 업데이트할 수 있게 합니다. |
| groups / roles (공급자별) | 그룹/역할 멤버십을 반환합니다. | 역할 기반 액세스 또는 하위 계정 매핑에 사용될 수 있습니다 (향후). | Okta/Azure에서 설정된 경우, "그룹 X의 멤버만 Hyperclass에 액세스할 수 있음"을 적용할 수 있습니다. |
| offline_access (선택사항) | 장기 세션을 위한 새로 고침 토큰을 반환합니다. | Hyperclass에서 지원되지 않음 | Hyperclass에서 지원되지 않음 |

---

## 자주 묻는 질문

**Q: Hyperclass에서 SAML을 지원하나요?**

아직 지원하지 않습니다. 현재 릴리스는 OpenID Connect(OIDC) 프로토콜만 지원합니다.

**Q: 내 에이전시에 여러 IdP를 연결할 수 있나요?**

에이전시당 하나의 활성 SSO 설정만 허용됩니다.

**Q: 사용자가 처음 로그인할 때 자동으로 생성되나요?**

아닙니다. 로그인 시도 전에 Users API를 통해 사용자를 생성하거나 업데이트하고 externalUserId를 포함해야 합니다.

**Q: 출시 후 SSO를 비활성화하면 어떻게 되나요?**

사용자들은 표준 Hyperclass 로그인 페이지로 돌아갑니다. 다른 로그인 방법을 숨겼다면, 사용자가 잠기지 않도록 먼저 다시 활성화하세요.

**Q: 일부 사용자들과 SSO를 시범 운영할 수 있나요?**

네. 표준 로그인 방법을 보이도록 두고 시범 그룹에만 externalUserId를 할당하세요. 다른 모든 사용자는 이메일/비밀번호를 계속 사용할 것입니다.

**Q: 향후 역할 기반 권한이 SSO에 영향을 주나요?**

네—향후 업데이트를 통해 특정 관리자가 전체 에이전시 소유자 접근 권한 없이도 SSO 설정을 관리할 수 있게 되어, 더 엄격한 거버넌스를 제공할 예정입니다.

**Q: SSO 테스트 시작 후 로그인 화면으로 리디렉션되었어요**

이것은 완전히 정상입니다. 사용자가 WL 도메인을 처음 방문하고 이전에 로그인한 적이 없거나 도메인에서 로그아웃한 경우 발생합니다. 이것은 테스트 상태에 영향을 주지 않습니다. 테스트는 정상적으로 실행된 것입니다. 로그인 후 다시 테스트를 수행하면 전체 과정을 볼 수 있습니다.

---
*원문 최종 수정: Tue, 18 Nov, 2025 at 7:22 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*