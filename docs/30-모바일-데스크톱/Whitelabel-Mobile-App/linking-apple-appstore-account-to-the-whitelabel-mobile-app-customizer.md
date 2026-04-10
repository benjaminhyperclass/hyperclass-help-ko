---

번역일: 2026-04-08
카테고리: 30-모바일-데스크톱 > Whitelabel Mobile App
---

# Apple App Store 계정을 화이트라벨 모바일 앱 커스터마이저에 연결하기

# **모바일 앱 온보딩 플로우:**
**App Store API 키, 번들 식별자, Firebase 구성**

 

개요
이 가이드는 화이트라벨 모바일 앱을 Apple과 Google에 제출하기 위해 Hyperclass의 모바일 앱 빌더에서 수행해야 하는 모든 작업을 설명합니다.

다음 작업을 수행하게 됩니다:

1. **App Store Connect API 키 생성** - Hyperclass가 향후 제출 및 업데이트를 자동으로 처리할 수 있도록 합니다.

2. **고유한 번들 식별자 등록** - Apple과 Firebase가 앱의 ID로 인식할 수 있는 식별자입니다.

3. **Firebase 연결** - 구성 파일을 업로드하여 푸시 알림, 분석, 크래시 리포팅을 활성화합니다.

 

이 세 단계를 모두 완료하면 빌드 프로세스가 원활하게 진행되고, 향후 릴리스 시 최소한의 노력만 필요합니다.

 

### 참고사항

- 시작하기 전에 관리자 권한이 있는 Apple Developer Program 계정이 필요합니다.
- Key ID, Issuer ID, 다운로드한 .p8 파일을 안전하게 보관하세요. Apple에서는 한 번만 다운로드할 수 있습니다.
- 번들 식별자는 전체 App Store에서 고유해야 하며 Firebase에서 사용하는 ID와 정확히 일치해야 합니다.
- 권한 오류를 방지하려면 Firebase 단계 전반에서 동일한 Google 계정을 사용하세요.
- 기존 앱을 다시 빌드하는 경우, 기존 앱이 동일한 번들 식별자와 Firebase 프로젝트를 사용하는지 확인하세요.
 

## **App Store 온보딩 플로우란?**

Hyperclass의 App Store 온보딩 플로우는 앱당 한 번만 실행하는 마법사로, iOS 기기를 사용하는 고객이 Apple App Store에서 다운로드할 수 있도록 화이트라벨 모바일 앱을 컴파일, 서명, 게시하는 데 필요한 인증 정보를 수집합니다. 이 단계를 완료하면 Hyperclass가 수동 개입 없이 앱을 빌드하고 업데이트를 배포할 수 있으며, 푸시 알림과 같은 기능이 즉시 작동합니다.

## 


## **온보딩 플로우 완료 방법**


### **1단계 – App Store Connect API 키 생성**
동영상 튜토리얼: [https://app.arcade.software/share/OYkGxoZSQrDPyo7tDDYj](https://app.arcade.software/share/OYkGxoZSQrDPyo7tDDYj)

- **Apple 포털 열기** - *[https://appstoreconnect.apple.com/access/integrations/api](https://appstoreconnect.apple.com/access/integrations/api)*로 이동합니다. **Users and Access › Keys** 페이지에 도착합니다.
- **App Store Connect API 선택** - 왼쪽 사이드바에서 **App Store Connect API** 아래의 **Keys**를 선택합니다.
- **키 생성** - **Generate API Key**를 클릭하고, 쉽게 알아볼 수 있는 이름(예: *Hyperclass Mobile App Automation*)을 지정한 다음 **Generate**를 클릭합니다.
- **.p8 파일 다운로드** - 파일은 한 번만 표시됩니다. 잠긴 비밀번호 금고와 같은 안전한 곳에 저장하세요.
- **ID 복사** - 키 테이블에서 **Key ID**를 복사합니다. **Issuer ID**는 페이지 상단에 표시됩니다. 이 두 값과 .p8 파일을 Hyperclass의 모바일 앱 커스터마이저에 붙여넣게 됩니다.
- **모바일 앱 커스터마이저에 업로드** - 모바일 앱 빌더로 돌아가서 **App Store Connection**을 확장하고 세 가지 정보를 업로드합니다.

**참고:**

하나의 API 키를 여러 앱에 사용할 수 있습니다. 키가 손상된 경우 App Store Connect에서 해지하고 새 키를 만든 다음, Hyperclass에서 값을 업데이트하세요.

 

### **2단계 – 번들 식별자 등록**
**동영상 튜토리얼:** [**https://app.arcade.software/share/VUWqWe0qiHyZ3ImZWken**](https://app.arcade.software/share/VUWqWe0qiHyZ3ImZWken)


1. Hyperclass 마법사에서 **App Setup stage**를 시작합니다. Package Name / Bundle Identifier라고 표시된 필드가 보입니다.

2. **Register**를 클릭하여 대화상자를 엽니다. Hyperclass가 Apple 계정을 검증하고 식별자를 소유할 팀을 표시합니다.

3. **역방향 DNS 식별자**를 입력합니다. 예: **`com.youragency.appname`**. 소문자, 숫자, 마침표만 사용하세요.

4. Apple의 정의를 검토합니다. 작은 정보 아이콘을 클릭하여 번들 식별자에 대한 Apple의 설명과 고유해야 하는 이유를 읽어보세요.

5. 확인하고 저장합니다. Hyperclass가 Apple Developer 계정에 식별자를 등록합니다. ID가 이미 사용 중이면 오류가 표시되며 다른 문자열을 선택해야 합니다.

6. 기능 활성화(선택사항). Apple Sign-In이나 푸시 알림과 같은 서비스가 필요한 경우, 나중에 Apple Developer 포털의 Certificates, Identifiers & Profiles에서 활성화할 수 있습니다.

 

**중요한 이유** - 번들 식별자는 코드 서명, 푸시 인증서, App Store 목록을 연결합니다. Apple과 Firebase에서 동일한 ID를 사용하면 빌드 시간에 서명 불일치 오류를 방지할 수 있습니다.

 

### 3단계 – Firebase 구성 파일 업로드


동영상 튜토리얼: [https://app.arcade.software/share/M0PMs6CwsZWTO4IXrx9r](https://app.arcade.software/share/M0PMs6CwsZWTO4IXrx9r)


1. **Firebase 콘솔 열기** - `https://firebase.google.com/`으로 이동하여 Go to console을 클릭합니다. Google 계정으로 로그인합니다.

2. 프로젝트 생성 또는 **선택** - 처음 사용하는 경우 **Add project**를 클릭하거나, 앱을 소유할 기존 프로젝트를 엽니다.

3. iOS 및 Android 앱 추가 - **Add App을 클릭하고 iOS를 선택**한 다음, 2단계의 번들 식별자를 입력합니다.

4. 구성 파일 다운로드 - iOS의 경우 **`GoogleService-Info.plist`를 다운로드**합니다. 기본 파일 이름을 유지하세요.

5. **Hyperclass에 업로드** - Setup Firebase 단계로 돌아가서 파일을 업로드 영역에 끌어다 놓고 Continue를 클릭합니다.

6. 검증 대기. Hyperclass가 파일을 분석하고 번들 식별자가 Apple Developer에 등록된 것과 일치하는지 확인합니다. 검증이 완료되면 푸시 알림과 분석이 활성화됩니다.

 

**고급** - Firebase Cloud Messaging을 통해 APNs 푸시 알림을 활성화하려면 Firebase 내의 Project Settings › Cloud Messaging 탭에서 .p8 푸시 키를 업로드할 수 있습니다. Hyperclass에서는 필요하지 않지만, Firebase에서 직접 알림을 보낼 수 있게 해줍니다.


**자주 묻는 질문**

 

Q: 앱마다 별도의 API 키가 필요한가요?

A: 하나의 App Store Connect API 키로 여러 앱을 인증할 수 있습니다. 액세스를 분리하고 싶다면 추가 키를 만들어도 됩니다.

 

Q: 번들 식별자가 이미 사용 중입니다. 어떻게 해야 하나요?

A: 회사 이니셜이나 지역 코드를 추가하여(예: `com.youragency.appname.na`) ID가 고유해질 때까지 수정하세요.

 

Q: `.p8` 파일을 분실했습니다. 어떻게 해야 하나요?

A: **App Store Connect › Users and Access › Keys**에서 키를 해지한 다음, Hyperclass에서 새 키를 만들어 업로드하세요.

 

Q: 나중에 Firebase 프로젝트를 변경할 수 있나요?

A: 가능하지만, 동일한 번들 식별자를 참조하는 새 `plist` 및 `json` 파일을 재생성하여 업로드해야 합니다. 프로젝트를 이동하는 경우 Apple 푸시 키도 업데이트해야 합니다.

 

Q: 이 단계를 완료한 후 Apple 검토에는 얼마나 걸리나요?

A: 첫 번째 검토는 일반적으로 1-3 영업일이 소요되지만, 휴일이나 주요 이벤트 기간에는 대기 시간이 더 길어질 수 있습니다.

---
*원문 최종 수정: Tue, 24 Mar, 2026 at 6:20 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*