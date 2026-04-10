---

번역일: 2026-04-08
카테고리: 30-모바일-데스크톱 > 화이트라벨 모바일 앱
---

# App Store Connect에서 iOS 화이트라벨 앱 출시하기

## **개요**
이 가이드는 **Apple App Store Connect**에서 iOS 화이트라벨 모바일 앱을 설정하고 커스터마이징하는 방법을 안내합니다. 원활한 제출과 출시를 위해 단계별로 주의 깊게 따라해 주세요.

## **사전 준비 사항**

- **활성화된 Apple Developer 계정**
- **App Store Connect 로그인 정보**
- 준비된 자료:
  - 앱 이름 및 부제목
  - 앱 아이콘(1024x1024 PNG, 투명 배경 금지)
  - iPhone 및 iPad용 스크린샷
  - 개인정보 보호정책 및 지원 URL
  - 마케팅 설명 및 키워드

## 단계별 안내: App Store Connect에서 앱 생성하기

## **동영상 튜토리얼**: [https://app.arcade.software/flows/gaZgnDZCdU3G2BF9xpk1/view](https://app.arcade.software/flows/gaZgnDZCdU3G2BF9xpk1/view)

**1단계: App Store Connect 로그인**

- [App Store Connect](https://appstoreconnect.apple.com/)로 이동하세요.
- Apple Developer 계정으로 로그인하세요.
- **Apps** 대시보드에서 ➕ 아이콘을 클릭해 새 앱을 생성하거나, 기존 화이트라벨 앱을 선택해서 업데이트하세요.

## **2단계: 앱 정보 입력**

- **App Name(앱 이름)** – 브랜드의 앱 이름을 입력하세요.
- **Subtitle(부제목)** – 짧은 태그라인(최대 30자).
- **Primary Language(기본 언어)** – 다른 언어를 타겟하지 않는 한 보통 English (U.S.)를 선택합니다.
- **Bundle ID** – 올바른 Bundle ID를 선택하세요(Xcode/인증서에서 생성한 것과 일치해야 함).
- **Category(카테고리)** – 앱 카테고리를 선택하세요(예: Productivity, Business).
- **SKU** – 고유 식별자(브랜드명이나 프로젝트 코드 사용 가능).

## **3단계: 브랜딩 자료 추가**

- **App Icon(앱 아이콘)**을 업로드하세요(1024x1024, PNG, 둥근 모서리 없음).
- 다양한 iPhone/iPad 화면 크기별 **Screenshots(스크린샷)**을 업로드하세요:
  - 6.9", 6.5", 5.5" 디스플레이(크기별 최소 3개 스크린샷).
- 스크린샷이 앱의 사용자 경험을 잘 나타내는지 확인하세요.

## **4단계: 앱 메타데이터 추가**

- **Description(설명)** – 앱의 목적과 기능에 대한 자세한 설명.
- **Keywords(키워드)** – 검색 노출을 위한 관련 키워드 추가.
- **Promotional Text(홍보 텍스트)** – 선택사항, App Store 페이지 상단에 표시됩니다.
- **Support URL(지원 URL)** – 고객 지원을 위한 유효한 링크.
- **Marketing URL(마케팅 URL)** – (선택사항) 앱 웹사이트/랜딩 페이지 링크.
- **Copyright Holder(저작권 보유자)** – 회사 또는 브랜드명.

## **5단계: 앱 개인정보 보호 설정**

- **Privacy Policy URL(개인정보 보호정책 URL)**을 제공하세요.
- **사용자와 연결되어 수집되는 데이터**(예: 위치, 식별자, 진단 정보)를 신고하세요.
- "Data Linked to You(사용자 연결 데이터)"와 "Data Not Linked to You(사용자 미연결 데이터)" 섹션을 검토하세요.

## **6단계: 가격 및 출시 지역**

- **Price Schedule(가격 일정)**(무료 또는 유료)을 선택하세요.
- **Base Country or Region(기본 국가 또는 지역)**(예: United States)을 설정하세요.
- **175개 국가/지역**에서의 출시 여부를 선택하세요.

## **7단계: 앱 리뷰 정보**

- 앱에 로그인이 필요한 경우 **테스트 계정 정보**(데모 사용자명 및 비밀번호)를 제공하세요.
- **연락처 정보**(이름, 전화번호, 이메일)를 추가하세요.
- 특별한 권한(VoIP, 백그라운드 오디오 등)이 필요한 경우 **Notes(참고사항)** 섹션에 설명하세요.

## **8단계: 심사 제출**

- 모든 필수 항목이 입력되었는지 확인하세요.
- 오류가 없는지 확인하세요(앱 아이콘 누락, 잘못된 설명, 이모지 같은 지원되지 않는 문자 등).
- **Submit for Review(심사 제출)**를 클릭하세요.
- Apple이 심사를 진행하고 승인되면 앱이 출시됩니다.

## **⚠️ 피해야 할 일반적인 문제들**

- ❌ App Store 아이콘 누락 또는 잘못된 크기
- ❌ 설명에 이모지나 지원되지 않는 문자 사용
- ❌ 국가 코드 없는 전화번호
- ❌ 잘못된 locale(미국의 경우 en-US여야 함)
- ❌ Google Play 빌드의 경우 필수 API 활성화하지 않음

---
*원문 최종 수정: Tue, 24 Mar, 2026 at 6:22 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*