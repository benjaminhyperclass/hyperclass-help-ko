---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007252-whitelabel-mobile-app-build-failures
번역일: 2026-11-06
카테고리: 30-모바일-데스크톱
---

# 화이트라벨 모바일 앱 빌드 실패 해결 가이드

모바일 앱을 업데이트하거나 다시 제출한 뒤 빌드 오류가 나면 이 문서로 원인을 찾고 고칠 수 있어요. 빌드 전에 확인할 사항과 오류 로그별 해결 방법을 정리했어요.

## 빌드 전 확인 사항

**빌드** 버튼을 누르기 전에 아래 내용을 먼저 확인하세요.

1. **스토어에 앱이 등록되어 있나요?**
   - **iOS:** **App Store Connect → Apps**에 앱이 만들어져 있는지 확인하세요. **Bundle ID**가 맞고 플랫폼이 **iOS**여야 해요.
   - **Android:** **Google Play Console → All apps**에 앱이 만들어져 있는지 확인하세요. **package name**이 맞아야 해요.
2. **연락처 세부정보가 올바른가요?**
   - **전화번호**에 **국가 코드**가 들어 있고 **E.164** 형식이어야 해요(예: `+1…`, `+44…`).
   - **이메일**과 **URL**은 실제로 열리고, 누구나 접근할 수 있고, 회사 도메인이어야 해요.
3. **메타데이터가 스토어 규정을 지키나요?**
   - **설명**이 화면의 글자 수 카운터에 표시된 **제한 글자 수 이내**여야 해요.
   - 이름, 부제, 설명에 **이모지**나 장식용 기호를 쓰지 마세요.
   - **기본 로케일**은 **영어 (미국)** — `en‑US`여야 해요. 화면에 따라 `eng-us`로 표시될 수 있어요.
   - **개인정보처리방침**과 **약관** 링크는 로그인 없이 열려야 하고 **HTTPS**를 써야 해요.
4. **Apple 계정 상태를 확인하세요.**
   - 2단계 인증이 켜져 있어야 해요. **Agreements, Tax, and Banking**에 **처리하지 않은 항목**이 없어야 해요.
5. **Google Play 계정 상태를 확인하세요.**
   - Play Console에서 조직 인증이 끝나 있어야 해요. **API access**도 설정되어 있어야 해요(Cloud 프로젝트 연결, 서비스 계정 추가, 권한 부여).

---

## 자주 발생하는 빌드 실패 해결 방법

## Apple Developer 계정 및 인증서

### 1. Apple Developer 계약이 만료됐어요

로그 오류: *"A required agreement is missing or has expired. This request requires an in-effect agreement that has not been signed or has expired."*

**해결 방법**

1. https://developer.apple.com/account 에 Account Holder 계정으로 로그인하세요.
2. 대시보드나 **Agreements, Tax, and Banking**에 표시된 계약 대기 배너가 있으면 모두 수락하세요.
3. https://appstoreconnect.apple.com 의 App Store Connect에서도 추가로 수락할 계약(예: Paid Apps)이 있는지 확인하세요.
4. **Mobile App Customizer**(모바일 앱 커스터마이저)에서 빌드를 다시 실행하세요.

### 2. Developer Portal에 iOS 인증서가 없어요

로그 오류: *"Certificate 'XXXXXXXXXX' (stored in your storage) is not available on the Developer Portal."*

**해결 방법**

1. 하이퍼클래스 고객지원에 문의해 iOS 번들 ID와 오류에 나온 인증서 ID를 알려 주세요.
2. 고객지원에서 오래된 인증서 참조를 지워 주면, 다음 빌드에서 새 인증서가 만들어져요.
3. 고객지원에서 정리가 끝났다고 알려 주면 빌드를 다시 실행하세요.

### 3. 프로비저닝 프로파일에 서명 인증서가 없어요

로그 오류: *"Provisioning profile \"match AppStore com.yourapp\" doesn't include signing certificate ..."*

**해결 방법**

1. 하이퍼클래스 고객지원에 문의해 iOS 번들 ID와 오류 메시지를 알려 주세요.
2. 고객지원에서 Apple Developer 계정의 프로비저닝 프로파일을 다시 만들어 줘요.
3. 빌드를 다시 실행하세요.

### 4. 프로비저닝 프로파일에 기능(Capability)이나 권한(Entitlement)이 빠져 있어요

로그 오류: *"Provisioning profile ... doesn't support the Communication Notifications capability." / "doesn't include the ... entitlement."*

**해결 방법**

1. https://developer.apple.com/account 에서 **Certificates, Identifiers & Profiles → Identifiers**로 이동하세요.
2. 번들 ID를 선택하고 **Capabilities**까지 내려가서, 오류에 나온 기능을 켠 뒤 **Save**를 클릭하세요.
3. 하이퍼클래스 고객지원에 프로비저닝 프로파일 재생성을 요청하세요.
4. 빌드를 다시 실행하세요.

## App Store Connect (iOS)

### 5. 이미 심사 제출이 진행 중이에요

로그 오류: *"Cannot submit for review – A review submission is already in progress."*

**해결 방법**

1. https://appstoreconnect.apple.com 에 로그인한 뒤 **My Apps**에서 해당 앱을 여세요.
2. "Waiting for Review" 또는 "In Review" 상태인 버전을 여세요.
3. 오른쪽 위의 **Remove from Review**를 클릭해 심사를 취소하거나, Apple의 심사가 끝날 때까지 기다리세요.
4. 이전 버전이 더 이상 심사 중이 아니면 빌드를 다시 실행하세요.

### 6. App Store 버전이 유효하지 않은 상태예요

로그 오류: *"appStoreVersions with id '...' is not in valid state. This resource cannot be reviewed."*

**해결 방법**

1. https://appstoreconnect.apple.com 을 열고 버전 상태 배너(예: Rejected, Metadata Rejected, Developer Rejected)를 확인하세요.
2. Apple이 지적한 문제를 해결하거나, 버전 이름 옆 **(...)** 메뉴에서 막힌 버전을 삭제하세요.
3. 빌드를 다시 실행하세요.

### 7. 릴리스 노트(What's New)가 비어 있어요

로그 오류: *"The provided entity is missing a required attribute – You must provide a value for the attribute 'whatsNew'."*

**해결 방법**

1. **Mobile App Customizer**의 **릴리스 노트** 필드(What's New)를 여세요.
2. 바뀐 내용을 실제 문장으로 쓰세요(예: "예약 과정을 개선하고 iPhone 15에서 로그인 문제를 수정했어요"). "Bug fixes"처럼 일반적인 문구는 Apple에서 걸러 낼 때가 있으니 피하세요.
3. 저장한 뒤 빌드를 다시 실행하세요.

### 8. iPad 스크린샷이 없어요

로그 오류: *"App screenshot missing (APP\_IPAD\_PRO\_3GEN\_129). A screenshot with type ipadPro129 is required."*

**해결 방법**

1. **Mobile App Customizer**의 **iOS screenshots**(iOS 스크린샷)를 여세요.
2. iPad Pro 12.9인치 스크린샷(2048 × 2732 픽셀)을 업로드하세요. 필요하면 iPhone 목업 이미지를 크기만 바꿔서 써도 돼요.
3. 저장한 뒤 빌드를 다시 실행하세요.

### 9. 전화번호 형식이 올바르지 않아요

로그 오류: *"The phone number must be in a valid format. Preface the phone number with '+' followed by the country code."*

**해결 방법**

1. **Mobile App Customizer**에서 지원용 **전화번호** 입력란을 여세요.
2. 맨 앞에 + 기호와 국가 코드를 넣어 수정하세요(예: +1 555 123 4567).
3. App Store Connect의 **App Information → Contact Information**에도 같은 번호가 올바르게 입력되어 있는지 확인하세요.
4. 저장한 뒤 빌드를 다시 실행하세요.

### 10. 같은 카테고리를 두 번 선택했어요

로그 오류: *"You may not select the same category twice for your app."*

**해결 방법**

1. https://appstoreconnect.apple.com 에서 해당 앱의 **App Information → General Information**을 여세요.
2. **Primary**는 Productivity로 두고, **Secondary** 카테고리는 Primary와 다른 값으로 지정하세요. Secondary는 비워 둬도 돼요.
3. 저장한 뒤 빌드를 다시 실행하세요.

### 11. App Store Connect에 iOS 앱이 아직 없어요

로그 오류: *"Could not find app with app identifier 'com.yourapp' in your App Store Connect account."*

**해결 방법**

1. https://appstoreconnect.apple.com 에 로그인한 뒤 **My Apps**에서 **(+) → New App**을 클릭하세요.
2. **iOS**를 선택하고 앱 이름과 언어를 입력하세요. 번들 ID는 **Mobile App Customizer**에 입력한 것과 같은 값을 선택하세요.
3. iOS 앱 제출 건을 만드세요.
4. 등록 정보를 저장한 뒤 빌드를 다시 실행하세요.

## Google Play Console (Android)

### 12. Google Play Android Developer API가 꺼져 있어요

로그 오류: *"Google Play Android Developer API has not been used in project ... before or it is disabled."*

**해결 방법**

1. 오류 메시지에 나온 URL을 그대로 클릭하세요. URL에 프로젝트 번호가 들어 있어요.
2. Google Cloud 프로젝트를 소유한 Google 계정으로 로그인하세요.
3. **Enable**을 클릭해 Google Play Android Developer API를 켜세요.
4. 2~3분 기다린 뒤 빌드를 다시 실행하세요.

### 13. Google Play 서비스 계정 자격 증명이 없거나 올바르지 않아요

로그 오류: *"play\_services.json doesn't seem to be a JSON file." / "missing client\_email" / file is empty {} or null.*

**해결 방법**

1. 에이전시에 Google Cloud 서비스 계정이 만들어져 있는지 하이퍼클래스 고객지원에 확인하세요.
2. 직접 관리하는 경우 https://console.cloud.google.com 에서 **IAM & Admin → Service Accounts**로 이동해 해당 계정을 선택하세요. 그다음 **Keys → Add Key → Create new JSON key**를 클릭하고 파일을 내려받으세요.
3. 내려받은 JSON 파일을 하이퍼클래스 고객지원에 전달하면 빌드에 쓸 수 있도록 업로드해 줘요.
4. 빌드를 다시 실행하세요.

### 14. 짧은 설명(홍보 문구)이 없어요

로그 오류: *"This app has no short description (promotional text) for language en-US."*

**해결 방법**

1. https://play.google.com/console 에서 해당 앱의 **Main store listing**을 여세요.
2. **Short description**을 입력하세요(최대 80자).
3. 기본 언어가 **English – United States**로 설정되어 있는지 확인하세요.
4. 저장한 뒤 빌드를 다시 실행하세요.

### 15. 이미 사용한 버전 코드예요

로그 오류: *"Version code XXX has already been used."*

**해결 방법**

1. 빌드를 다시 실행하세요. 대부분은 다음 실행에서 하이퍼클래스가 버전 코드를 자동으로 올려 줘요.
2. 계속 실패하면 하이퍼클래스 고객지원에 문의해 Android package name을 알려 주세요.
3. Play Console의 **Production → Releases**에서 이전 빌드가 실제로 게시되었거나 롤백되었는지 확인하세요. 초안(draft) 상태로 멈춰 있으면 안 돼요.

### 16. Google Play에서 앱이 정지됐어요

로그 오류: *"The app is suspended."*

**해결 방법**

1. https://play.google.com/console 에서 해당 앱의 **Policy status**를 여세요.
2. Google이 알려 준 위반 사유를 정확히 읽고, 원인(콘텐츠, 아이콘·이름, 제한된 기능 등)을 해결하세요.
3. 정지가 잘못되었다고 생각되면 **Policy status** 페이지에서 이의를 제기하세요.
4. Google이 앱을 복구하면 빌드를 다시 실행하세요.

### 17. 앱 이름을 다른 앱이 이미 쓰고 있어요

로그 오류: *"Cannot add localization due to app name. You cannot add this localization because the app name is already being used by another app."*

**해결 방법**

1. **Mobile App Customizer**의 앱 이름 입력란을 열고 다른 앱과 겹치지 않는 이름으로 바꾸세요.
2. 상표권을 가지고 있다면 https://support.google.com/googleplay/android-developer/answer/2363332 에서 이름 해제 요청(name release claim)을 제출하세요.
3. 저장한 뒤 빌드를 다시 실행하세요.

### 18. 패키지를 찾을 수 없어요(Play Console에 첫 업로드)

로그 오류: *"Package not found: com.youragency.app."*

**해결 방법**

1. https://play.google.com/console 에 로그인해 **Create app**을 클릭하고 기본 정보를 입력하세요.
2. 가장 처음 만드는 .aab 파일은 직접 **Internal Testing** 트랙에 업로드하세요. 파일은 하이퍼클래스 고객지원에 요청하세요.
3. 이후 빌드는 자동으로 진행돼요.

### 19. 건강 관련 선언이 끝나지 않았어요

로그 오류: *"You must complete the health declaration."*

**해결 방법**

1. https://play.google.com/console 에서 해당 앱의 **Policy → App content**를 여세요.
2. **Health** 항목을 완료하세요. 끝나지 않은 다른 선언도 함께 완료하세요.
3. 저장한 뒤 빌드를 다시 실행하세요.

## 일시적인 인프라 문제(다시 시도하세요)

### 20. Gradle 데몬이 종료됐거나 빌드 에이전트의 메모리가 부족해요

로그 오류: *"Gradle build daemon disappeared unexpectedly" / "AAPT2 Daemon ... unexpectedly exit" / "Daemon vm is shutting down".*

**해결 방법**

1. **Mobile App Customizer**에서 빌드를 다시 실행하세요.
2. 3번 연속 실패하면 하이퍼클래스 고객지원에 문의하세요.

### 21. Apple 서버에 장애가 났어요(502 Bad Gateway)

로그 오류: *"Status Code: 502 (bad gateway) – Bad Gateway"*

**해결 방법**

1. 15~30분 기다리세요.
2. https://developer.apple.com/system-status 에서 Apple 서비스가 정상인지 확인하세요.
3. 빌드를 다시 실행하세요.
