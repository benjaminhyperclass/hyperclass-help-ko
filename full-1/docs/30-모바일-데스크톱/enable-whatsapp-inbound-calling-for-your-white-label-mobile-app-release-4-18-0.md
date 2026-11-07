---
원문: https://help.gohighlevel.com/support/solutions/articles/155000008150-enable-whatsapp-inbound-calling-for-your-white-label-mobile-app-release-4-18-0-
번역일: 2026-11-07
카테고리: 30-모바일-데스크톱
---

# 화이트라벨 모바일 앱에서 WhatsApp 수신 전화 켜기 (릴리스 4.18.0)

화이트라벨 모바일 앱 릴리스 4.18.0부터 에이전시가 자기 화이트라벨 모바일 앱에서 WhatsApp 수신 전화를 쓸 수 있어요. 이 문서에서는 iOS에서 이 기능을 쓰기 위해 필요한 Apple 정보를 추가하고, 업데이트 버전을 게시하는 방법을 안내해요.

## 개요

iOS에서 WhatsApp 수신 전화를 쓰려면, 기존 화이트라벨 모바일 앱에 아래 Apple 정보가 설정되어 있어야 해요.

- Apple Team ID
- APNs Key ID

이 릴리스 이전에 만든 화이트라벨 앱이라면, 최신 앱 버전을 게시하기 전에 설정을 업데이트해야 할 수 있어요.

필요한 정보를 모두 추가한 뒤 화이트라벨 앱의 업데이트 버전을 게시하면, 사용자가 WhatsApp 수신 전화를 쓸 수 있어요.

## 업데이트가 필요한 경우

아래에 모두 해당하는 에이전시는 이 업데이트가 필요해요.

- 이미 게시된 화이트라벨 모바일 앱이 있어요.
- WhatsApp 수신 전화를 켜고 싶어요.
- Apple Team ID나 APNs Key ID를 아직 설정한 적이 없어요.

## 1단계: Apple Team ID 업데이트하기

아래 경로로 이동하세요.

**Agency View**(에이전시 보기) > **모바일 앱** > **Customisation**(커스터마이징) > **Distribution**(배포) > **채널** > **App store settings**(앱스토어 설정) > **App Store Connection**(앱스토어 연결)

**Apple Team ID** 필드를 찾아 Team ID를 입력하세요.

### Apple Team ID 확인하는 곳

1. **Apple Developer 계정**에 로그인하세요. <https://developer.apple.com/account/resources/authkeys/list>
2. **Apple Developer account > Certificates, Identifiers & Profiles > Keys**로 이동하세요.
3. 오른쪽 위에서 **Team ID**를 찾으세요. 10자리 영문·숫자 조합이에요(예: `YY17XOOGQV`).
4. 이 값을 복사해서 화이트라벨 모바일 앱 커스터마이저의 **Apple Team ID** 필드에 붙여 넣으세요.

![Apple Developer 계정에서 Team ID를 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074343313/original/62XujkFyNxLXWIDUVxbZ5wNw9RgipKKq2Q.png?1782239385)

### 예시

**App Store Connection** 섹션에서 아래 필드가 모두 채워져 있는지 확인하세요.

- **Issuer ID**
- **Key ID**
- **계정명**
- **Apple Team ID**

그다음 **Save Details**(세부 정보 저장)를 클릭하세요.

## 2단계: APNs 설정 확인하기

아래 경로로 이동하세요.

**Agency View** > **모바일 앱** > **Customisation** > **Distribution** > **채널** > **App store settings** > **Setup Firebase**(Firebase 설정)

아래 항목이 설정되어 있는지 확인하세요.

- **Services.json**
- **GoogleService-Info.plist**
- **APNs Authentication Key (.p8)**
- **APNs Key ID**

### APNs Key ID 확인하는 곳

1. **Apple Developer 계정**에 로그인하세요.
2. **Apple Developer account > Certificates, Identifiers & Profiles > Keys**로 이동하세요.
3. 왼쪽 메뉴에서 **Keys**를 선택하세요.
4. 화이트라벨 앱에 연결된 APNs 키를 찾으세요.
5. **KEY ID** 열에 표시된 값이 **APNs Key ID**예요. 10자리 영문·숫자 조합이에요(예: `YY77X72SAV`).
6. 10자리 값을 복사해서 화이트라벨 모바일 앱 커스터마이저의 **APNs Key ID** 필드에 붙여 넣으세요.

![Apple Developer 계정에서 APNs Key ID를 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074343296/original/XhvvRYWAbuQ5NDsgMP9UbjkNFdED9B4WnQ.png?1782239365)

{% hint style="info" %}
앱에 유효한 .p8 파일이 이미 설정되어 있다면 APNs 키를 새로 만들 필요가 없어요.
{% endhint %}

정보를 업데이트한 뒤 **Save Details**를 클릭하세요.

## 3단계: 앱 업데이트 게시하기

필요한 필드를 모두 업데이트한 뒤 아래 순서로 진행하세요.

1. 변경 사항을 모두 저장하세요.
2. 새 모바일 앱 빌드를 생성하세요.
3. 업데이트 버전을 Apple에 제출하세요.
4. App Store 승인을 기다리세요.
5. 승인이 나면 화이트라벨 모바일 앱에서 WhatsApp 수신 전화를 쓸 수 있어요.

## 확인 체크리스트

업데이트를 제출하기 전에 아래 항목을 확인하세요.

✅ Apple Team ID가 입력되어 있어요.

✅ APNs Authentication Key (.p8)가 업로드되어 있어요.

✅ APNs Key ID가 입력되어 있어요.

✅ Firebase 설정 파일이 있어요.

✅ 앱을 릴리스 4.18.0 이상으로 빌드했어요.

✅ 업데이트 버전을 Apple에 제출했어요.

## 자주 묻는 질문

### APNs(.p8) 키를 새로 만들어야 하나요?

아니요. 유효한 APNs Authentication Key가 이미 업로드되어 있다면 그대로 쓰면 돼요. **APNs Key ID**가 입력되어 있는지만 확인하세요.

### APNs Key ID를 모르겠어요. 어디서 확인하나요?

Apple Developer 계정의 Certificates, Identifiers & Profiles > Keys에서 확인할 수 있어요. Key ID는 APNs 키 옆에 표시돼요.

### 화이트라벨 앱을 새로 만들어야 하나요?

아니요. 기존 앱은 필요한 설정만 업데이트하고 새 버전을 제출하면 돼요.

### 사용자가 앱을 다시 설치해야 하나요?

아니요. 사용자는 App Store에서 최신 버전으로 업데이트하기만 하면 돼요.

### 이 설정을 업데이트하지 않으면 어떻게 되나요?

필요한 Apple 정보를 설정하기 전까지는 iOS 기기에서 WhatsApp 수신 전화가 제대로 동작하지 않을 수 있어요.
