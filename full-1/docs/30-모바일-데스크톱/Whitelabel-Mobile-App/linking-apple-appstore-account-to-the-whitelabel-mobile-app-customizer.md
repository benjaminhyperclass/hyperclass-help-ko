---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007232-linking-apple-appstore-account-to-the-whitelabel-mobile-app-customizer
번역일: 2026-11-06
카테고리: 30-모바일-데스크톱
---

# 모바일 앱 온보딩 플로우 — App Store API 키, 번들 ID, Firebase 설정

화이트라벨 모바일 앱을 Apple과 Google에 제출하기 전에 하이퍼클래스 **Mobile App Builder**(모바일 앱 빌더)에서 거쳐야 하는 **온보딩 플로우** 과정을 안내해요. App Store Connect API 키 생성, 번들 ID 등록, Firebase 설정 파일 업로드를 차례로 진행해요.

## 개요

이 문서는 화이트라벨 모바일 앱을 Apple과 Google에 제출할 준비를 하려면 하이퍼클래스 **Mobile App Builder**에서 어떤 작업을 해야 하는지 설명해요.

다음 세 가지를 진행해요.

1. **App Store Connect API 키를 만들어요.** 이후 제출과 업데이트를 하이퍼클래스가 자동으로 처리할 수 있어요.
2. **고유한 번들 ID(bundle identifier)를 등록해요.** Apple과 Firebase가 이 값을 앱의 ID로 인식해요.
3. **Firebase를 연결해요.** 설정 파일을 업로드하면 푸시 알림, 분석, 비정상 종료 리포트를 사용할 수 있어요.

세 단계를 모두 마치면 빌드 과정이 매끄럽게 진행되고, 이후 새 버전을 낼 때도 손이 덜 가요.

### 시작 전 확인할 점

- 시작하기 전에 관리자(Admin) 권한이 있는 Apple Developer Program 계정이 필요해요.
- **키 ID**, **발급자 ID**, 내려받은 `.p8` 파일은 안전하게 보관하세요. Apple은 이 값들을 한 번만 내려받을 수 있게 해요.
- 번들 ID는 App Store 전체에서 고유해야 하고, Firebase에서 쓰는 ID와 정확히 같아야 해요.
- 권한 오류를 피하려면 Firebase 단계 내내 같은 Google 계정을 사용하세요.
- 이미 있는 앱을 다시 빌드한다면, 기존 앱이 같은 번들 ID와 같은 Firebase 프로젝트를 쓰고 있는지 확인하세요.

## App Store 온보딩 플로우란?

하이퍼클래스의 App Store **온보딩 플로우**는 앱마다 한 번만 거치는 마법사예요. iOS 기기를 쓰는 고객이 Apple App Store에서 내려받을 수 있도록, 화이트라벨 모바일 앱을 컴파일하고 서명하고 게시하는 데 필요한 자격 정보를 모아요.

이 단계를 마치면 하이퍼클래스가 수동 작업 없이 빌드와 업데이트를 배포할 수 있어요. 푸시 알림 같은 기능도 바로 작동해요.

## 온보딩 플로우 완료하기

### 1단계 – App Store Connect API 키 생성

**비디오 튜토리얼**: <https://app.arcade.software/share/OYkGxoZSQrDPyo7tDDYj>

1. Apple 포털을 열어요. <https://appstoreconnect.apple.com/access/integrations/api> 로 이동하면 **Users and Access**(사용자 및 액세스) **> 키** 페이지가 나와요.
2. 왼쪽 사이드바의 **App Store Connect API** 아래에서 **키**를 선택해요.
3. 키를 만들어요. **Generate API Key**(API 키 생성)를 클릭하고, 알아보기 쉬운 이름(예: *HighLevel Mobile App Automation*)을 입력한 뒤 **생성**을 클릭해요.
4. `.p8` 파일을 내려받아요. 이 파일은 한 번만 표시돼요. 잠금 설정된 비밀번호 보관함처럼 안전한 곳에 저장하세요.
5. ID를 복사해요. 키 목록에서 **키 ID**를 복사해요. **발급자 ID**는 페이지 맨 위에 있어요. 이 두 값과 `.p8` 파일을 하이퍼클래스 **Mobile App Customizer**(모바일 앱 커스터마이저)에 입력하게 돼요.
6. **Mobile App Customizer**에서 업로드해요. **Mobile App Builder**로 돌아가 **App Store Connection**(앱 스토어 연결)을 펼치고, 세 가지 정보를 업로드해요.

{% hint style="info" %}
API 키 하나를 여러 앱에 쓸 수 있어요. 키가 유출되었다면 App Store Connect에서 해당 키를 폐기하고 새 키를 만든 다음, 하이퍼클래스에 입력한 값을 업데이트하세요.
{% endhint %}

### 2단계 – 번들 ID 등록

**비디오 튜토리얼**: [https://app.arcade.software/share/VUWqWe0qiHyZ3ImZWken](https://app.arcade.software/share/VUWqWe0qiHyZ3ImZWken)

1. 하이퍼클래스 마법사에서 **App Setup**(앱 설정) 단계를 시작해요. **Package Name / Bundle Identifier**(패키지 이름 / 번들 ID) 필드가 보여요.
2. **참가 신청**을 클릭해 대화상자를 열어요. 하이퍼클래스가 Apple 계정을 확인하고, 이 ID를 소유하게 될 팀을 보여 줘요.
3. 역방향 도메인(reverse‑DNS) 형식의 ID를 입력해요. 예를 들면 `com.youragency.appname` 이에요. 영문 소문자, 숫자, 마침표만 사용하세요.
4. 필요하면 Apple의 정의를 확인해요. 작은 정보 아이콘을 클릭하면 번들 ID가 무엇이고 왜 고유해야 하는지 Apple의 설명을 볼 수 있어요.
5. 내용을 확인하고 저장하면 하이퍼클래스가 Apple Developer 계정에 이 ID를 등록해요. 이미 사용 중인 ID라면 오류가 표시되니 다른 문자열을 선택하세요.
6. 필요하면 기능(capabilities)을 켜요. 이 단계는 선택이에요. Apple로 로그인이나 푸시 알림 같은 서비스가 필요하다면, 나중에 Apple Developer 포털의 Certificates, Identifiers & Profiles에서 켤 수 있어요.

왜 중요할까요? 번들 ID는 코드 서명, 푸시 인증서, App Store 등록 정보를 하나로 묶어 줘요. Apple과 Firebase에서 같은 ID를 쓰면 빌드할 때 서명이 맞지 않는 오류를 피할 수 있어요.

### 3단계 – Firebase 설정 파일 업로드

**비디오 튜토리얼**: <https://app.arcade.software/share/M0PMs6CwsZWTO4IXrx9r>

1. Firebase 콘솔을 열어요. `https://firebase.google.com/` 에 접속해 **Go to console**(콘솔로 이동)을 클릭하고 Google 계정으로 로그인해요.
2. 프로젝트를 만들거나 선택해요. 처음이라면 **Add project**(프로젝트 추가)를 클릭하고, 이미 있다면 앱을 소유할 기존 프로젝트를 열어요.
3. iOS와 Android 앱을 추가해요. **Add App**(앱 추가)을 클릭하고 iOS를 선택한 다음, 2단계에서 만든 번들 ID를 입력해요.
4. 설정 파일을 내려받아요. iOS는 `GoogleService-Info.plist` 를 내려받아요. 기본 파일 이름은 바꾸지 마세요.
5. 하이퍼클래스에 업로드해요. **Setup Firebase**(Firebase 설정) 단계로 돌아가 파일을 업로드 영역에 끌어다 놓고 **Continue**(계속)를 클릭해요.
6. 검증이 끝날 때까지 기다려요. 하이퍼클래스가 파일을 분석해 Apple Developer에 등록한 번들 ID와 일치하는지 확인해요. 검증이 끝나면 푸시 알림과 분석이 켜져요.

**고급**: Firebase Cloud Messaging으로 APNs 푸시 알림을 켜려면, Firebase의 **Project Settings**(프로젝트 설정) **> Cloud Messaging** 탭에 `.p8` 푸시 키를 업로드할 수 있어요. 하이퍼클래스에서는 이 작업이 꼭 필요하지 않지만, 해 두면 Firebase에서 직접 알림을 보낼 수 있어요.

## 자주 묻는 질문

### 앱마다 API 키가 따로 필요한가요?

App Store Connect API 키 하나로 여러 앱을 승인할 수 있어요. 접근 권한을 분리하고 싶다면 키를 추가로 만들어도 돼요.

### 번들 ID가 이미 사용 중이라고 나와요. 어떻게 하나요?

회사 이니셜이나 지역 코드를 뒤에 붙여서 고유한 ID가 될 때까지 바꿔 보세요. 예를 들면 `com.youragency.appname.na` 처럼요.

### `.p8` 파일을 잃어버렸어요. 어떻게 하나요?

**App Store Connect > Users and Access > 키**에서 해당 키를 폐기하세요. 그런 다음 새 키를 만들어 하이퍼클래스에 업로드하세요.

### 나중에 Firebase 프로젝트를 바꿀 수 있나요?

네, 바꿀 수 있어요. 다만 같은 번들 ID를 참조하는 새 `plist` 와 `json` 파일을 다시 만들어 업로드해야 해요. 프로젝트를 옮길 때는 Apple 푸시 키도 함께 업데이트하세요.

### 이 단계를 마치면 Apple 심사는 얼마나 걸리나요?

처음 제출하는 앱의 심사는 보통 영업일 기준 1~3일 걸려요. 다만 연휴나 큰 행사 기간에는 대기 시간이 더 길어질 수 있어요.
