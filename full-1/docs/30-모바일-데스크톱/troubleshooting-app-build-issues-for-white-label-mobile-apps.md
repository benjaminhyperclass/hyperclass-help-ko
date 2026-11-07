---
원문: https://help.gohighlevel.com/support/solutions/articles/155000008472-troubleshooting-app-build-issues-for-white-label-mobile-apps
번역일: 2026-11-06
카테고리: 30-모바일-데스크톱
---

# 화이트라벨 모바일 앱 빌드 문제 해결

화이트라벨 모바일 앱을 빌드하기 전에 **Agency App Manager**(에이전시 앱 매니저)가 Apple App Store 또는 Google Play Store 설정이 모두 끝났는지 확인해요. 이 문서는 빌드를 시작할 때 자동으로 실행되는 검사에서 문제가 나왔을 때 하나씩 해결하는 방법을 안내해요.

검사 결과는 **Distribution**(배포) > **채널**에서 볼 수 있어요. 앱을 게시할 스토어에서 **Launch App**(앱 출시)을 선택하면 체크리스트가 1단계 **App build**(앱 빌드)로 열려요.

![앱 빌드 체크리스트. 배너에 확인이 필요한 문제 수가 표시되고, 고쳐야 할 문제마다 수정 바로가기가 있어요.](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079612184/original/sBWJtZaJl0n-HYFqoR59qZEshsz7UKTmOg.png)

## 결과 유형 두 가지

- **BLOCKER**(차단): 계속 진행하려면 해결해야 해요. 차단 항목이 남아 있으면 앱을 빌드할 수 없어요.
- **WARNING**(경고): 빌드를 막지 않아요. 아직 확인하지 못한 검사가 있거나 선택 항목이 빠져 있다는 뜻이에요. 경고가 있어도 빌드는 만들 수 있어요. 해결해 두면 좋지만 꼭 해야 하는 건 아니에요.

체크리스트는 스토어마다 따로 실행돼요. Apple 문제는 Android 빌드에 영향을 주지 않고, Android 문제는 iOS 빌드에 영향을 주지 않아요.

## 문제를 고친 뒤 다시 확인하기

대부분의 문제는 Agency App Manager 밖에서 고쳐요. App Store Connect나 Google Play Console에서 수정하는 경우가 많아요. 문제 옆의 **수정** 링크를 선택하면 변경해야 하는 화면으로 바로 이동해요.

변경을 마쳤다면 체크리스트로 돌아와 확인 체크박스(**I have fixed the listed issues in App Store Connect / Play Console**, App Store Connect / Play Console에서 안내된 문제를 수정했어요)를 선택하고 **인증**을 선택하세요.

![확인 체크박스를 선택한 뒤 인증을 선택하면 검사가 다시 실행돼요.](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079612160/original/ALmrHmAulCjV1jcuqLG040gtppNM5pQQoQ.png)

검사 결과는 저절로 새로고침되지 않아요. 변경할 때마다 **인증**을 선택하세요. Google Play 권한 변경은 적용되기까지 몇 분 걸릴 수 있어요. 검사가 계속 실패하면 잠시 기다렸다가 다시 인증하세요.

아래 순서대로 고치세요. 먼저 스토어 자격 증명을 추가하고, 다음으로 Apple 계약을 처리하고, 그다음 식별자와 앱 등록 정보를 해결하고, 마지막으로 스토어 등록 정보와 연락처를 채우세요. 앞선 검사를 통과해야 실행되는 검사가 여러 개 있어요.

## 전체 과정 영상으로 보기

스토어별로 빌드를 처음부터 끝까지 따라 하는 영상이에요.

[Apple App Store 전체 과정 영상 보기](https://app.arcade.software/share/GPKaZ6c6fQaSuoCbfwzw)

[Google Play 전체 과정 영상 보기](https://app.arcade.software/share/ASGtv5YybPRZflRQY3p4)

## 빠른 참조

문제를 선택하면 해당 위치로 바로 이동해요.

| 문제 | 스토어 | 유형 |
| --- | --- | --- |
| [App Store Connect API 키](#ios-api-key) | iOS | BLOCKER |
| [App Store 계정 연결](#ios-account) | iOS | BLOCKER |
| [번들 ID와 App Store Connect 일치](#ios-bundle) | iOS | BLOCKER |
| [App Store Connect에 앱 등록](#ios-registered) | iOS | BLOCKER |
| [유료 앱 및 기타 계약](#ios-agreements) | iOS | BLOCKER |
| [앱 세부 정보](#ios-details) | iOS | BLOCKER |
| [개인 정보 및 지원 정보](#ios-personal) | iOS | BLOCKER |
| [번들 ID를 아직 확인할 수 없음](#ios-w-bundle) | iOS | WARNING |
| [App Store 앱을 아직 확인할 수 없음](#ios-w-app) | iOS | WARNING |
| [Firebase 푸시 설정](#ios-w-firebase) | iOS | WARNING |
| [Play Console 서비스 계정](#and-service) | Android | BLOCKER |
| [Play Console 게시 권한](#and-access) | Android | BLOCKER |
| [Play Console에 앱 등록](#and-registered) | Android | BLOCKER |
| [앱 세부 정보](#and-details) | Android | BLOCKER |
| [개인 정보 및 지원 정보](#and-personal) | Android | BLOCKER |

## iOS — BLOCKER 항목

iOS 앱을 빌드하려면 아래 문제를 먼저 해결해야 해요.

<a id="ios-api-key"></a>

### App Store Connect API 키 (App Store Connect API key)

**BLOCKER** — Apple API 자격 증명이 설정되지 않았어요.

#### 이 문제가 뜻하는 것

Agency App Manager는 App Store Connect API 키로 회원님을 대신해 Apple과 통신해요. 키를 추가하기 전에는 검사, 업로드, 제출을 할 수 없어요.

API 키, **발급자 ID**, **키 ID** 중 아직 추가하지 않은 것이 있다는 뜻이에요. 세 가지가 모두 필요해요.

#### 해결 방법

1. [appstoreconnect.apple.com](http://appstoreconnect.apple.com)에서 App Store Connect에 로그인해요.
2. **Users and Access**(사용자 및 액세스) > **연동** > **App Store Connect API**로 이동해서 **Team Keys**(팀 키) 탭이 선택되어 있는지 확인해요.
3. **+** 를 선택해 새 API 키를 만들어요. 역할은 **관리자**로 설정해요.
4. **.p8** 키 파일을 바로 다운로드해서 안전하게 보관해요. Apple은 이 파일을 한 번만 다운로드하게 해 줘요.
5. Keys 페이지 상단에서 **발급자 ID**를, 표에서 새로 만든 **키 ID**를 복사해요.
6. Agency App Manager에서 **Distribution** > **채널**로 이동해요. Apple App Store 카드에서 **설정**을 선택하고 **AppStore Connection**(앱스토어 연결)을 펼쳐요. 그런 다음 발급자 ID와 키 ID를 붙여 넣고 .p8 파일을 업로드해요.

.p8 파일을 잃어버렸다면 기존 키를 폐기하고 새 키를 만드세요. 활성 키는 한 번에 최대 50개까지 가질 수 있어요.

#### 해결 확인

체크리스트로 돌아가 **I have fixed the listed issues in App Store Connect / Play Console** 체크박스를 선택한 뒤 **인증**을 선택하세요. 이제 검사를 통과할 거예요.

<a id="ios-account"></a>

### App Store 계정 연결 (App Store account connected)

**BLOCKER** — Apple이 연결을 거부했어요.

#### 이 문제가 뜻하는 것

자격 증명은 저장되어 있지만 App Store Connect와의 연결이 실패하고 있어요.

API 키가 폐기되었거나, 발급자 ID 또는 키 ID를 잘못 입력했거나, 키에 앱 데이터를 읽을 권한이 없을 수 있어요.

#### 해결 방법

1. App Store Connect에서 **Users and Access** > **연동** > **App Store Connect API**로 이동해요. 키가 **활성** 키 목록에 있고 폐기되지 않았는지 확인해요.
2. Agency App Manager에서 **Distribution** > **채널**로 이동해요. Apple App Store 카드에서 **설정**을 선택하고 **AppStore Connection**을 열어요.
3. 발급자 ID와 키 ID가 정확히 일치하는지 확인해요. 한 글자만 달라도 연결이 실패해요.
4. 키에 **관리자** 권한이 있는지 확인해요.
5. 키가 폐기되었다면 App Store Connect에서 새 키를 만들고, 같은 **AppStore Connection** 섹션에서 새 .p8 파일을 업로드해요.
6. **Save Details**(세부 정보 저장)를 선택해요.

#### 해결 확인

체크리스트로 돌아가 **I have fixed the listed issues in App Store Connect / Play Console** 체크박스를 선택한 뒤 **인증**을 선택하세요. 이제 검사를 통과할 거예요.

<a id="ios-bundle"></a>

### 번들 ID와 App Store Connect 일치 (Bundle ID matches App Store Connect)

**BLOCKER** — Apple Developer 계정에서 번들 ID를 찾을 수 없어요.

#### 이 문제가 뜻하는 것

iOS 앱마다 Apple Developer Portal에 등록된 고유한 번들 ID가 있어야 해요. 앱에 설정한 번들 ID를 Apple Developer Portal에서 찾을 수 없어서 Apple이 빌드를 받아 주지 않아요.

#### 해결 방법

1. developer.apple.com에 로그인하고 **Certificates, IDs & Profiles**(인증서, 식별자 및 프로파일) > **Identifiers**(식별자)로 이동해요.
2. 번들 ID가 목록에 있는지 확인해요. 없으면 **+** 를 선택해 등록해요. **App IDs** > **App**을 고르고 번들 ID를 입력해요.
3. Agency App Manager에서 **Distribution** > **채널**로 이동해요. Apple App Store 카드에서 **설정**을 선택하고 **App Setup**(앱 셋업)을 열어요. **Package Name - Bundle Identifier**(패키지 이름 - 번들 식별자) 필드가 정확히 일치하는지 확인해요.
4. Apple Developer Program 멤버십이 활성 상태인지 확인해요. 유료 연간 가입이 필요해요.

번들 ID는 대소문자를 구분해요. `com.myapp.ios`와 `com.myapp.iOS`는 서로 다른 식별자로 취급돼요.

#### 해결 확인

체크리스트로 돌아가 **I have fixed the listed issues in App Store Connect / Play Console** 체크박스를 선택한 뒤 **인증**을 선택하세요. 이제 검사를 통과할 거예요.

<a id="ios-registered"></a>

### App Store Connect에 앱 등록 (App registered in App Store Connect)

**BLOCKER** — App Store Connect에서 앱 레코드를 찾을 수 없어요.

#### 이 문제가 뜻하는 것

번들 ID는 Apple Developer Portal에 등록되어 있지만, 그 번들 ID로 App Store Connect에 만든 앱이 없다는 뜻이에요.

번들 ID 등록과 App Store Connect 앱 만들기는 별개의 단계예요. 빌드를 업로드하려면 두 가지가 모두 필요해요.

![체크리스트에 번들 ID가 표시되고, App Store Connect로 이동하는 수정 바로가기가 있어요.](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079612308/original/EY1nxvqYS3c3zYbuum3aphL7Y3RQ5S_Cqw.png)

#### 해결 방법

1. **App Store Connect** > **My Apps**(내 앱)로 이동해요.
2. **+** 를 선택하고 **New App**(새 앱)을 선택해요.
3. **iOS** 플랫폼을 고르고, 앱 이름을 입력한 뒤, 드롭다운에서 번들 ID를 선택해요.
4. 기본 언어를 고르고 **만들기**를 선택해요.

#### 해결 확인

체크리스트로 돌아가 **I have fixed the listed issues in App Store Connect / Play Console** 체크박스를 선택한 뒤 **인증**을 선택하세요. 이제 검사를 통과할 거예요.

![앱을 만들고 나면 앱 빌드 체크리스트를 통과해요.](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079612184/original/sBWJtZaJl0n-HYFqoR59qZEshsz7UKTmOg.png)

#### 비디오 튜토리얼

[영상 보기: App Store Connect에 앱 등록 문제 해결](https://app.arcade.software/share/6u3o8VmnttQQ4bZGmfMD)

<a id="ios-agreements"></a>

### 유료 앱 및 기타 계약 (Paid Apps and other agreements)

**BLOCKER** — 계약에 서명하지 않았거나 계약이 활성 상태가 아니에요.

#### 이 문제가 뜻하는 것

Apple은 앱을 배포하기 전에 유료 앱 계약과 기타 법적 계약을 수락하도록 요구해요. 앱이 무료여도 마찬가지예요.

Apple은 이 약관을 주기적으로 업데이트해서, 이전에 활성 상태였던 계약이 다시 **조치 필요** 상태로 바뀔 수 있어요.

#### 해결 방법

1. App Store Connect에서 **Agreements, Tax, and Banking**(계약, 세금 및 금융)으로 이동해요.
2. **조치 필요** 또는 **신규**로 표시된 계약이 있는지 확인하고, 내용을 검토한 뒤 수락해요.
3. 금융 정보나 세금 정보를 요청하면 그것도 입력해요. 무료 앱이어도 일부 계약은 결제 정보가 필요해요.
4. 서명한 뒤에는 상태가 **활성**이 아니라 **Pending User Info**(사용자 정보 대기 중)로 바뀌어요. Apple이 은행 계좌와 세금 폼을 추가로 필요로 하기 때문이에요.
5. 같은 페이지에서 **은행 계좌**와 **Tax Forms**(세금 폼) 섹션을 완료해요. 두 가지를 모두 마쳐야 계약이 **활성**으로 바뀌어요.
6. 상태가 **활성**으로 표시되면 Agency App Manager로 돌아와 검사를 다시 실행해요.

이 문제를 가장 먼저 해결하세요. 계약이 대기 중인 동안에는 완료할 수 없는 Apple 검사가 두 개 더 있어요. 이 문제를 해결하면 두 검사는 저절로 해결돼요.

**Account Holder**(계정 소유자)만 계약을 수락할 수 있어요. 관리자 역할이라면 Account Holder에게 이 단계를 요청하세요.

#### 해결 확인

체크리스트로 돌아가 **I have fixed the listed issues in App Store Connect / Play Console** 체크박스를 선택한 뒤 **인증**을 선택하세요. 이제 검사를 통과할 거예요.

<a id="ios-details"></a>

### 앱 세부 정보 (App details)

**BLOCKER** — 등록 정보 필드가 비어 있거나 올바르지 않아요.

#### 이 문제가 뜻하는 것

App Store 등록 정보에 필요한 필드가 하나 이상 비어 있어요. 체크리스트에 확인이 필요한 필드 수와 각 필드가 표시되므로 한 번에 모두 채울 수 있어요.

확인하는 필드는 다음과 같아요.

- 앱 이름, 부제목, 설명, 프로모션 텍스트, 키워드
- **개인정보처리방침 URL**, **지원 URL**, 마케팅 URL
- 앱 카테고리
- 배포할 국가 및 지역

![앱 세부 정보에 확인이 필요한 필드가 모두 표시되어 한 번에 채울 수 있어요.](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079612316/original/56PONezimu5JJIBZZcSwZp0R3Haf_6OeBA.png)

#### 해결 방법

1. Agency App Manager에서 **Distribution** > **프로필**로 이동해 **앱 세부 정보**를 열어요. 별표(*)가 붙은 필드를 모두 채워요.
2. 모든 URL이 **https://** 로 시작하는지 확인해요. Apple은 `http://` 주소와 도메인만 있는 주소를 거부해요. 모든 URL은 로그인 없이 누구나 열 수 있어야 해요.
3. 설명은 4,000자 미만, 키워드는 모두 합쳐 100자 미만으로 작성해요. 이모지는 쓰지 마세요. 이모지가 들어간 등록 정보는 Apple이 거부할 수 있어요.
4. **Pricing & Availability**(가격 및 사용 가능 여부)에서 배포할 국가 또는 지역을 하나 이상 선택해요.

#### 해결 확인

체크리스트로 돌아가 **I have fixed the listed issues in App Store Connect / Play Console** 체크박스를 선택한 뒤 **인증**을 선택하세요. 이제 검사를 통과할 거예요.

<a id="ios-personal"></a>

### 개인 정보 및 지원 정보 (Personal & support information)

**BLOCKER** — 연락처 필드가 비어 있거나 올바르지 않아요.

#### 이 문제가 뜻하는 것

앱 개발자 또는 게시자의 필수 연락처 정보가 비어 있어요. 이 정보는 App Store 등록 정보에 표시돼요.

확인하는 필드는 다음과 같아요.

- 이름과 성
- **이메일 주소**와 전화번호
- 우편 주소
- **지원 URL**과 지원 이메일

![개인 정보 및 지원 정보에 비어 있는 연락처 항목이 각각 표시돼요.](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079612173/original/Koic-VtPJUFCEp31YVbe9UfH0n-y0jiNBg.png)

#### 해결 방법

1. Agency App Manager에서 **Distribution** > **프로필**로 이동해 **개인 정보**를 열어요.
2. 필수 연락처 필드를 모두 채워요.
3. **지원 URL**이 지원 페이지나 문의 페이지로 연결되는 올바른 **https://** 주소인지 확인해요.
4. **변경사항 저장**을 선택해요.

#### 해결 확인

체크리스트로 돌아가 **I have fixed the listed issues in App Store Connect / Play Console** 체크박스를 선택한 뒤 **인증**을 선택하세요. 이제 검사를 통과할 거예요.

## iOS — WARNING 항목

이 항목들은 빌드를 막지 않아요. 세 개 중 두 개는 저절로 해결돼요.

<a id="ios-w-bundle"></a>

### 번들 ID를 아직 확인할 수 없음 (Bundle ID could not be verified yet)

**WARNING** — 빌드를 계속 진행할 수 있어요.

#### 이 문제가 뜻하는 것

번들 ID가 거부된 것은 아니에요. Apple은 계약이 활성 상태여야 번들 ID를 확인하는 API 호출을 허용해요. 그래서 이 검사를 아직 실행하지 못했어요.

#### 해결 방법

별도 조치는 필요 없어요. 위의 **유료 앱 및 기타 계약** 문제를 해결하세요. 계약이 활성 상태가 되면 이 검사가 자동으로 다시 실행되고 저절로 해결돼요.

#### 해결 확인

계약이 **활성**으로 표시된 뒤 체크리스트를 다시 실행하세요. 이 검사는 통과하거나, 실제로 고쳐야 할 문제가 있다면 번들 ID BLOCKER로 바뀌어요.

<a id="ios-w-app"></a>

### App Store 앱을 아직 확인할 수 없음 (App Store app could not be verified yet)

**WARNING** — 빌드를 계속 진행할 수 있어요.

#### 이 문제가 뜻하는 것

App Store Connect의 앱 레코드를 확인하지 못했어요. 앱이 없다는 뜻은 아니에요.

계약이 대기 중이거나 번들 ID가 아직 등록되지 않아서 검사가 막힌 상태예요.

#### 해결 방법

별도 조치는 필요 없어요. 위의 **유료 앱 및 기타 계약** 또는 **번들 ID와 App Store Connect 일치** 문제를 해결하세요. 두 문제를 고치면 이 경고는 자동으로 사라져요.

#### 해결 확인

체크리스트로 돌아가 **I have fixed the listed issues in App Store Connect / Play Console** 체크박스를 선택한 뒤 **인증**을 선택하세요. 이제 검사를 통과할 거예요.

<a id="ios-w-firebase"></a>

### Firebase 푸시 설정 (Firebase push configuration)

**WARNING** — 항상 경고로만 표시돼요. 빌드를 막지 않아요.

#### 이 문제가 뜻하는 것

화이트라벨 모바일 앱에서 Firebase는 선택 사항이에요. Firebase 푸시 알림이나 분석을 쓰지 않는다면 이 경고는 무시해도 괜찮아요.

Firebase 기능을 쓰고 있다면 원인은 네 가지 중 하나예요. 어느 경우인지 확인한 뒤에 수정하세요.

#### 해결 방법

##### Firebase가 설정되지 않은 경우

연결된 Firebase 프로젝트가 없어요. **Distribution** > **채널**로 이동해 Apple App Store 카드에서 **설정**을 선택하고 **Setup Firebase**(Firebase 설정)를 열어요. **GoogleService-Info.plist** 파일과 APNs 파일을 업로드하세요.

##### 서비스 계정 파일을 읽을 수 없는 경우

Firebase 서비스 계정 JSON 파일이 손상되었거나 올바르지 않아요. **Firebase Console** > **Project Settings**(프로젝트 설정) > **Service Accounts**(서비스 계정)에서 파일을 다시 다운로드해 새 파일을 업로드하세요.

##### plist의 프로젝트 또는 번들 ID가 일치하지 않는 경우

GoogleService-Info.plist 안의 `BUNDLE_ID`가 앱의 번들 ID와 달라요. Firebase Console에서 올바른 번들 ID용 plist를 새로 다운로드하세요.

##### Firebase 프로젝트 참조가 오래된 경우

Firebase 프로젝트 ID가 바뀌었거나 프로젝트가 삭제되었어요. 앱을 올바른 활성 Firebase 프로젝트에 연결하세요.

#### 해결 확인

올바른 파일을 업로드한 뒤 체크리스트를 다시 실행하세요. Firebase를 쓰지 않는다면 경고가 표시된 채로 계속 진행해도 돼요.

## Android — BLOCKER 항목

현재 단계에서 Android 결과는 모두 BLOCKER예요. 앱 빌드 체크리스트에는 Android 경고가 없어요.

<a id="and-service"></a>

### Play Console 서비스 계정 (Play Console service account)

**BLOCKER** — Google Play 서비스 계정이 설정되지 않았어요.

#### 이 문제가 뜻하는 것

Google Play는 JSON 자격 증명 파일로 제공되는 서비스 계정을 통해 Google Play Developer API로 자동 빌드와 업로드를 허용해요. 이 파일을 추가하기 전에는 Play Store 관련 작업을 실행할 수 없어요.

이 검사는 앱의 패키지 이름도 함께 확인해요. 그래서 둘 중 어느 쪽이든 원인이 될 수 있어요.

#### 해결 방법

1. **Google Play Console** > **셋업** > **API access**(API 액세스)를 열어요.
2. Play Console을 Google Cloud 프로젝트에 연결하거나 새로 만들어요.
3. **Service accounts**(서비스 계정)에서 **Create new service account**(새 서비스 계정 만들기)를 선택해요. 열리는 Google Cloud 창에서 계정을 만들고 **Service Account User** 역할을 부여해요.
4. Play Console로 돌아와 이 서비스 계정에 **관리자 권한**을 부여해요.
5. Google Cloud Console에서 서비스 계정의 **JSON 키**를 만들어 다운로드해요.
6. Agency App Manager에서 **Distribution** > **채널**로 이동해요. Google Play Store 카드에서 **설정**을 선택하고 **PlayStore Connection**(플레이스토어 연결)을 펼친 뒤, **Play Services JSON**에 JSON 키를 업로드해요.

Play Console의 서비스 계정 권한이 완전히 적용되기까지 최대 24시간이 걸릴 수 있어요. 설정 직후 인증 오류가 나면 한 시간 정도 기다렸다가 다시 시도하세요.

#### 해결 확인

체크리스트로 돌아가 **I have fixed the listed issues in App Store Connect / Play Console** 체크박스를 선택한 뒤 **인증**을 선택하세요. 이제 검사를 통과할 거예요.

<a id="and-access"></a>

### Play Console 게시 권한 (Play Console publishing access)

**BLOCKER** — 인증 또는 릴리스 액세스가 실패하고 있어요.

#### 이 문제가 뜻하는 것

서비스 계정은 있지만 인증이 실패하거나 릴리스를 편집할 권한이 없어요.

흔한 원인은 다음과 같아요.

- 서비스 계정이 삭제되었거나 정지되었어요.
- 계정의 Play Console 권한이 부족해요.
- 계정에 잘못된 패키지 이름이 연결되어 있어요.
- Google Play Android Developer API가 켜져 있지 않아요.

![권한이 없어서 생긴 문제라면 체크리스트가 Play Console에서 따라 할 정확한 단계를 안내해요.](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079612314/original/5VFyJBRRRSOGKIDDpvAiLDyvz_JQX1cP1w.png)

#### 해결 방법

1. **Google Cloud Console**에서 서비스 계정이 아직 있고 비활성화되지 않았는지 확인해요.
2. **Play Console** > **셋업** > **API access**에서 계정에 **관리자** 역할이 있는지 확인해요.
3. Google Cloud의 **APIs & Services**(API 및 서비스) > **Enabled APIs**(사용 설정된 API)에서 **Google Play Android Developer API**가 켜져 있는지 확인해요.
4. JSON 키가 만료되었거나 다시 생성되었을 수 있다면 Google Cloud Console에서 키를 다시 다운로드해요. 그런 다음 Agency App Manager에서 **Distribution** > **채널**로 이동해 Google Play Store 카드의 **설정**을 선택하고 **PlayStore Connection**을 열어요. **Play Services JSON**에 새 파일을 업로드하세요.

#### 해결 확인

체크리스트로 돌아가 **I have fixed the listed issues in App Store Connect / Play Console** 체크박스를 선택한 뒤 **인증**을 선택하세요. 이제 검사를 통과할 거예요.

<a id="and-registered"></a>

### Play Console에 앱 등록 (App registered in Play Console)

**BLOCKER** — Play Console에서 패키지 이름을 찾을 수 없어요.

#### 이 문제가 뜻하는 것

Agency App Manager에 설정한 Android 패키지 이름이 Google Play Console의 어떤 앱과도 일치하지 않아요. 그래서 업로드가 실패해요.

![체크리스트에 패키지 이름이 표시되고, Google Play Console로 이동하는 수정 바로가기가 있어요.](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079612311/original/IFrE_DycG3t7LOcY4uOw2o7SRooh7Z6O-g.png)

#### 해결 방법

1. **Play Console**의 **All apps**(모든 앱)에서 정확한 패키지 이름을 확인해요.
2. Agency App Manager에서 **Distribution** > **채널**로 이동해요. Google Play Store 카드에서 **설정**을 선택하고 **App Setup**(앱 셋업)을 열어요. **Package Name**(패키지 이름) 필드가 대소문자와 마침표까지 정확히 일치하는지 확인해요.
3. Play Console에 앱이 아직 없다면 먼저 만들어요. **Play Console** > **Create app**(앱 만들기)을 선택하고 설정을 완료하세요.
4. 연결된 서비스 계정이 Play Console에서 이 앱에 접근할 수 있는지 확인해요.

iOS와 달리 Android 패키지 이름은 영구적이에요. Play Console에서 앱을 만들고 나면 패키지 이름을 바꿀 수 없어요. 앱을 만들기 전에 꼼꼼히 확인하세요.

#### 해결 확인

체크리스트로 돌아가 **I have fixed the listed issues in App Store Connect / Play Console** 체크박스를 선택한 뒤 **인증**을 선택하세요. 이제 검사를 통과할 거예요.

#### 비디오 튜토리얼

[영상 보기: Play Console에 앱 등록하기](https://app.arcade.software/share/xEQkFPgMTjAXxj6QlKme)

<a id="and-details"></a>

### 앱 세부 정보 (App details)

**BLOCKER** — 등록 정보 필드가 비어 있거나 올바르지 않아요.

#### 이 문제가 뜻하는 것

Google Play 등록 정보에 필요한 필드가 하나 이상 비어 있어요. 확인하는 필드는 다음과 같아요.

- 앱 이름
- 짧은 설명(최대 80자)
- 전체 설명(최대 4,000자)
- **개인정보처리방침 URL**
- 앱 카테고리
- 배포할 국가

#### 해결 방법

1. Agency App Manager에서 **Distribution** > **프로필**로 이동해 **앱 세부 정보**를 열어요. 필수 필드를 모두 채워요.
2. 짧은 설명은 80자 미만, 전체 설명은 4,000자 미만으로 작성해요.
3. 개인정보처리방침 URL이 로그인 없이 열리는 **https://** 주소인지 확인해요.
4. Google은 콘텐츠 등급도 요구해요. **Play Console** > **Store presence**(스토어 입점 정보) > **Content rating**(콘텐츠 등급)에서 완료하세요.

#### 해결 확인

체크리스트로 돌아가 **I have fixed the listed issues in App Store Connect / Play Console** 체크박스를 선택한 뒤 **인증**을 선택하세요. 이제 검사를 통과할 거예요.

#### 비디오 튜토리얼

[영상 보기: 앱 세부 정보 완료하기](https://app.arcade.software/share/wUVHPn1oYS8FKPE1TwZr)

<a id="and-personal"></a>

### 개인 정보 및 지원 정보 (Personal & support information)

**BLOCKER** — 연락처 필드가 비어 있거나 올바르지 않아요.

#### 이 문제가 뜻하는 것

Play Store 등록 정보에 표시되는 개발자 연락처가 완성되지 않았어요. 이 정보는 등록 정보의 **Developer contact**(개발자 연락처) 아래에 나와요.

#### 해결 방법

1. Agency App Manager에서 **Distribution** > **프로필**로 이동해 **개인 정보**를 열어요.
2. 필수 필드를 모두 채워요. 이름, 성, 전화번호, 이메일, 지원 이메일, 지원 URL, 주소예요.
3. **변경사항 저장**을 선택해요.

#### 해결 확인

체크리스트로 돌아가 **I have fixed the listed issues in App Store Connect / Play Console** 체크박스를 선택한 뒤 **인증**을 선택하세요. 이제 검사를 통과할 거예요.

#### 비디오 튜토리얼

[영상 보기: 개인 정보 및 지원 정보 완료하기](https://app.arcade.software/share/SHrHpJWoZciij9z6Fm7I)

## 자주 묻는 질문

### App Store Connect에서 문제를 고쳤는데 체크리스트에는 계속 문제가 떠요. 왜 그런가요?

검사 결과는 저절로 새로고침되지 않아요. 확인 체크박스를 선택하고 **인증**을 선택해서 검사를 다시 실행하세요. Google Play 권한 변경은 적용되기까지 몇 분 걸릴 수도 있어요.

### 경고가 떠 있어도 앱을 빌드할 수 있나요?

네, 할 수 있어요. 경고는 빌드를 막지 않아요. iOS 경고 중 두 개는 계약이 활성 상태가 되면 저절로 사라지고, Firebase 경고는 Firebase 기능을 쓸 때만 신경 쓰면 돼요.

### Firebase가 꼭 필요한가요?

아니요. 화이트라벨 모바일 앱에서 Firebase는 선택 사항이에요. Firebase 푸시 알림이나 분석을 쓰지 않는다면 Firebase 경고는 무시해도 괜찮아요.

### Apple 쪽 문제가 있으면 Android 빌드도 막히나요?

아니요. 체크리스트는 스토어마다 따로 실행돼요.

### 번들 ID와 패키지 이름이 왜 정확히 일치해야 하나요?

Agency App Manager는 이 식별자만으로 앱과 스토어 계정을 연결하고, 일치 여부를 대소문자까지 구분해서 확인해요. 값을 다시 입력하지 말고 복사해서 붙여 넣으세요. Google Play 패키지 이름은 앱을 만든 뒤에는 바꿀 수 없으니 특히 주의하세요.

### Apple 계약은 누가 수락할 수 있나요?

Apple Developer 계정의 **Account Holder**(계정 소유자)만 수락할 수 있어요. 관리자 역할이라면 Account Holder에게 이 단계를 요청하세요.

배포 과정은 세 단계로 이루어져 있고, 이 문서는 그중 1단계를 다뤄요. 다음 단계는 아래 문서를 참고하세요.

- [스토어 업로드 문제 해결 — 화이트라벨 모바일 앱](troubleshooting-upload-to-store-issues-for-white-label-mobile-apps.md)
- [검토 제출 문제 해결 — 화이트라벨 모바일 앱](troubleshooting-submit-for-review-issues-for-white-label-mobile-apps.md)
