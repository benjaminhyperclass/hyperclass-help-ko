---

번역일: 2026-04-08
카테고리: 30-모바일-데스크톱 > Whitelabel Mobile App
---

# 화이트라벨 모바일 앱 업데이트 배포하기

# **App Store Connect에서 라이브 iOS 앱 업데이트하기**
앱이 App Store에 출시된 후에는 버그 수정, 새로운 기능 추가, 브랜딩 변경 등을 위해 **업데이트를 배포**해야 할 수 있습니다. 이 가이드에서는 기존 앱을 업데이트하는 과정을 안내해드립니다.

# 사전 준비 사항

- **Apple Developer Account** 접근 권한
- 새로운 **앱 빌드** (Xcode 또는 Transporter를 통해 업로드)
- 업데이트된 **메타데이터** (필요시 스크린샷, 설명 등)

## 1단계: 새 빌드 시작하기

- Launch App > Generate Build > Start App build를 클릭하세요
- 빌드 진행 상황이 화면에 표시됩니다. 완료될 때까지 기다려주세요.

## 2단계: App Store Connect 로그인하기

- [App Store Connect](https://appstoreconnect.apple.com/)에 접속하세요.
- Apple Developer 계정으로 로그인하세요.
- **Apps Dashboard**에서 업데이트하려는 앱을 선택하세요.
> *현재 라이브 버전과 함께 앱이 목록에 표시됩니다.*

## 3단계: 새 버전 생성하기

- 앱 페이지에서 **Add New Version** 버튼을 클릭하세요.
- **새 버전 번호**를 입력하세요 (Xcode에서 업로드한 빌드 버전과 일치해야 함).
⚠️ **참고:** 버전 번호는 순차적이어야 합니다 (예: 1.0 → 1.1 → 1.2).

## 4단계: 앱 정보 업데이트하기 (필요시)

- **What's New in This Version** – 버그 수정이나 새로운 기능을 설명하세요.
- **Screenshots/Previews** – UI/UX가 변경되었다면 업데이트하세요.
- **Metadata** – 필요시 설명, 키워드, 지원 URL을 조정하세요.

## 5단계: 새 빌드 첨부하기

- **Build Section**에서 **Select a Build before you submit**을 클릭하세요.
- 새로 업로드한 빌드를 선택하세요.
- 변경 사항을 저장하세요.

## 6단계: 개인정보보호 및 규정 준수 검토하기

- **Privacy Policy URL**을 확인하세요.
- 새로운 데이터 수집이 추가된 경우 **App Privacy questionnaire**를 다시 검토하세요.

## 7단계: 심사 제출하기

- 모든 필드(아이콘, 스크린샷, 메타데이터)를 다시 확인하세요.
- **Submit for Review**를 클릭하세요.
- Apple의 심사팀이 업데이트를 출시하기 전에 테스트할 것입니다.

## **⚠️ 업데이트 시 흔한 오류들**

- ❌ 빌드가 보이지 않음 – 올바른 버전으로 Xcode/Transporter를 통해 업로드했는지 확인하세요.
- ❌ 버전 불일치 – App Store Connect의 버전 번호가 Xcode와 일치해야 합니다.
- ❌ 앱 거부됨 – 거부 사유를 검토하고, 수정한 후 다시 제출하세요.

---
*원문 최종 수정: Tue, 24 Mar, 2026 at 6:22 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*