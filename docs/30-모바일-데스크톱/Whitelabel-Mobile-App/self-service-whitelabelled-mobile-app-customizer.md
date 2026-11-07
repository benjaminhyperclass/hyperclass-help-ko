---
원문: /support/solutions/articles/155000007149-self-service-whitelabelled-mobile-app-customizer
번역일: 2026-11-06
카테고리: 30-모바일-데스크톱
---

# 셀프서비스 화이트라벨 모바일 앱 커스터마이저

개발자나 지원 티켓 없이 브랜드가 담긴 iOS·Android 앱을 만들고, App Store와 Google Play에 배포하는 기능이에요. 하이퍼클래스 셀프서비스 화이트라벨 모바일 앱 커스터마이저에서 브랜딩부터 스토어 출시까지 한 흐름으로 진행하고, 빌드 진행 상황을 실시간으로 확인할 수 있어요. 에이전시에서 쓰는 기능이에요.

## 셀프서비스 화이트라벨 모바일 앱 커스터마이저란?

에이전시가 자신의 iOS·Android 앱을 만들고, 브랜딩하고, 빌드하고, 배포할 수 있도록 안내해 주는 하이퍼클래스 작업 공간이에요. 브랜딩, 모듈 선택, 스토어 등록 정보 준비, App Store Connect·Google Play Console 연결, 원클릭 빌드·배포 관리를 한곳에서 처리해요. 그래서 빠르게 출시하고 안정적으로 업데이트할 수 있어요.

주요 기능은 다음과 같아요.

- 브랜딩부터 실제 배포까지 이어지는 전체 흐름
- Apple·Google 연결을 도와주는 단계별 마법사
- 패키지·번들 식별자 자동 생성
- 모듈 켜기/끄기와 내비게이션 레이아웃 설정
- 실시간 빌드 상태 확인과 배포 트랙 선택
- 새 앱 버전 우선 제공

## 셀프서비스 커스터마이저의 장점

도입과 팀 업무 흐름을 계획할 때 참고하세요. 출시까지 걸리는 시간을 줄이고, 브랜드를 일관되게 유지하고, 이후 업데이트를 편하게 관리할 수 있어요.

- 빠른 출시: 단계별 안내와 사전 점검으로 아이디어에서 App Store/Google Play 제출까지 빠르게 진행해요.
- 개발자 없이 진행: 엔지니어나 지원 티켓 없이 빌드하고 배포해요.
- 브랜드 일관성: 아이콘과 로고를 올리고, 색상과 글꼴, 모듈과 내비게이션을 정해 모바일에서도 같은 브랜드 경험을 줘요.
- 우선 업데이트: 무료 앱보다 먼저 새 버전을 받고, 배포 시점을 직접 정해요.
- 유연한 배포: 테스트용 **Internal**이나 실제 배포용 **Production**으로 준비되는 대로 내보내요.
- 운영 제어: 빌드를 직접 시작하고, 상태를 실시간으로 확인하고, 변경 내역(changelog)을 관리해요.
- 대규모 운영의 일관성: 표준화된 워크플로우로 실수를 줄이고 반복 배포를 빠르게 해요.

## 시작하기 전에 준비할 것

요건을 미리 갖춰 두면 스토어 심사 반려나 빌드 지연을 피할 수 있어요. 시작하기 전에 조직 계정, 식별자, 정책 페이지를 확인하세요.

- 유효한 D-U-N-S 번호 (Apple 요구 사항)
- App Store Connect에 접근할 수 있는 Apple Developer Program 조직 계정
- Google Play Console 조직 계정
- 빌드와 배포를 켜기 위한 하이퍼클래스 Custom Agency App 구독 (월간 또는 분기)
- 누구나 접속할 수 있게 공개된 정책 URL: 개인정보처리방침과 이용약관(Terms & Conditions)
- 권장 역할·권한:
  - Apple: App Store Connect의 Admin 또는 App Manager 권한
  - Google: Play Console의 Admin 또는 Release Manager 권한

## 브랜딩

스플래시 화면과 로그인 화면, 아이콘까지 라이트 모드와 다크 모드 모두에서 앱이 내 비즈니스처럼 보이게 만드는 단계예요. 다음 항목을 설정할 수 있어요.

- 앱 아이콘 (플랫폼에 맞는 크기)
- 스플래시 화면 로고와 로그인 로고 (라이트/다크 버전)
- 기본 색상(HEX)과 브랜드 글꼴

### 권장 사항

- 아이콘은 해상도가 높은 정사각형 원본 이미지를 사용하세요.
- 라이트·다크 로고를 모두 준비해서 어느 모드에서나 잘 보이게 하세요.
- 배경 위의 글자는 WCAG 기준에 맞는 대비를 목표로 하세요.

## 패키지·번들 식별자

모든 앱에는 Apple과 Google에서 사용할 고유한 식별자가 필요해요. 커스터마이저가 식별자를 자동으로 만들어 주기 때문에 스토어 반려나 중복을 줄일 수 있어요.

### 자동 생성 방식

- 제안 형식: `com.domain.appname_uniqueString`
- 앱 이름과 도메인 이름을 입력하면 앱을 만드는 중에 생성돼요.

### 유의 사항

- 첫 실제 배포 이후에는 식별자를 바꾸지 마세요.
- 업데이트가 끊기지 않도록 Android의 패키지/applicationId와 iOS의 번들 식별자를 그대로 유지하세요.

## 스토어 등록 정보 준비

등록 정보를 잘 작성하면 규정을 지키고 앱을 더 쉽게 찾을 수 있어요. 정확한 내용과 규정에 맞는 정책 링크를 준비해 두면 심사 중 추가 질문을 줄일 수 있어요.

### 주로 입력하는 항목

- 앱 제목, 짧은 설명, 긴 설명
- **지원 이메일**
- **개인정보처리방침 URL**과 **Terms & Conditions URL**(이용약관 URL)
- 카테고리/키워드 (플랫폼별로 다름)

## 기존 화이트라벨 앱에서 옮겨 오기

이미 화이트라벨 앱을 운영 중이라면 셀프서비스 방식으로 바꿔 더 빠르게 업데이트할 수 있어요. 사용자와 스토어 등록 정보의 연속성은 그대로 유지돼요.

추천 사항

- 업데이트 경로가 유지되도록 기존 번들/애플리케이션 식별자를 바꾸지 마세요.
- 이후 배포 내용이 일관되도록 스토어 등록 정보를 커스터마이저에 맞춰 동기화하세요.
- Production 전에 **Internal** 빌드로 먼저 시작해 업그레이드가 제대로 되는지 확인하세요.

## 셀프서비스 커스터마이저 설정하기

앱을 만드는 단계부터 실제 출시까지 확인 지점을 따라 진행해요. 순서대로 마치면 심사 문제를 줄이고 승인을 더 빨리 받을 수 있어요.

1. 커스터마이저를 여세요. 에이전시 화면으로 이동해 **모바일 앱**을 클릭하세요.

   ![모바일 앱 메뉴 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060104847/original/NdxVcMiYG50zhyJCbxyy8YvBbAbh1X8iHw.png?1765191363)
2. 앱을 선택하세요. **Selected App icon**(선택한 앱 아이콘)을 클릭하면 앱에 대한 설명을 보고 다른 앱 버전으로 바꿀 수 있어요. 그다음 **App Name**(앱 이름)과 **Domain Name**(도메인 이름)을 입력하세요. 고유한 패키지/번들 식별자가 자동으로 만들어져요.

   ![앱 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060105080/original/S393LOGtTVFw6TlBcxTW_MFgfaVyrKga2A.png?1765191433)![앱 이름과 도메인 이름 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060105505/original/pIVN6mC59AfjVfJrgc_e2nOSAoffhHGi2g.jpeg?1765191607)
3. 앱을 브랜딩해요. **사용자 지정 > 브랜딩**을 클릭하세요. **브랜딩** 페이지에서 앱 아이콘, 로그인 로고, 스플래시 로고(라이트/다크)를 올려요.

   ![브랜딩 페이지 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062057933/original/a9EW9ziZAUUYNgHAM-v3F3TGeSWsk5gJ6w.png?1767727905)
4. **사용자 지정**에서 앱 화면을 설정하세요.

   **A. Login Screen**(로그인 화면)

   로고, 브랜드 색상, 선택 사항인 태그라인을 설정해요.

   **B. Core Navigation**(핵심 내비게이션)

   **Bottom Nav**(하단 내비게이션, 4~5개 항목) 또는 **Left Drawer**(왼쪽 서랍 메뉴, 항목이 많을 때) 중에서 고르세요.

   **알림**, **대화**, **POS**, **캘린더**, **앱** 같은 모듈을 추가하고 순서를 바꿔요.

   항목 수 제한에 걸리면 나머지는 **App Drawer**(앱 서랍)로 옮기세요.

   **C. App Drawer**

   남은 모듈을 카테고리별로 정리하고, 필요하면 순서를 바꿔요.

   {% hint style="info" %}
   Tap to Pay: 결제 기능을 쓰려면 POS(또는 인보이스/견적서)를 여기 **App Drawer**나 **Core Navigation**에 추가하세요.
   {% endhint %}

   ![사용자 지정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062058418/original/NDo0JHosyylEOQ7II1jFxNDsn_g-1pv3-Q.png?1767728717)
5. **Distribution > Profile**(배포 > 프로필, 스토어 등록 정보)에서 앱 정보를 입력하세요.

   앱 이름과 설명, **지원 이메일**과 **Support URL**(지원 URL)을 입력하세요.

   **개인정보처리방침 URL**과 **Terms & Conditions URL**(이용약관 URL)도 추가하세요.

   ![스토어 등록 정보 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062058716/original/51embLkW31rUunyVcaSvM0m6Wh5kCbsegw.png?1767729053)
6. **Distribution > Channels**(배포 > 채널, 스토어 연결)에서 스토어를 연결하세요.

   마법사를 따라 App Store Connect와 Play Console을 연결하세요.

   두 곳 모두 **Connected**(연결됨, 초록색)로 표시되는지 확인하세요.

   ![스토어 연결 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062058759/original/d88VQkpIZjC0pezZhT8Oxfb-gNpGCr9Big.png?1767729141)
7. **구독**에서 요금제를 선택하세요.

   빌드와 배포를 켜려면 월간(Monthly) 또는 분기(Quarterly) 요금제를 고르세요.

   ![구독 요금제 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062058771/original/syieaYBIJ214MLsTjN8RhGk0UQyMdOq2_w.png?1767729174)
8. **Build & Release**(빌드 및 배포)를 진행해요.

   **Create App**(앱 만들기)은 처음 한 번만 하면 돼요.

   **Generate Build**(빌드 생성)에서 **Internal**(테스트용) 또는 **Production**(실제 배포용)을 고르고, 변경 내역(changelog)을 입력한 뒤 **Start App Build**(앱 빌드 시작)를 클릭하세요.

   배포는 App Store/Play Console에서 제출하고, **Live Build Status**(실시간 빌드 상태)에서 진행 상황을 확인하세요.

   빌드에 실패하면 **View Progress**(진행 상황 보기)를 클릭한 뒤 **Visit knowledge base**(지식 베이스 방문)로 원인을 확인하고 **Retry Build**(빌드 재시도)를 클릭하세요.

   ![빌드 및 배포 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062058819/original/GDscRAb114OO9Xy1UcJ9Rxos6dRIpAEAxQ.png?1767729298)

## 자주 묻는 질문

### Apple Developer 조직 계정이 꼭 필요한가요?
네. 화이트라벨 앱 배포에는 Apple 개인 계정을 지원하지 않아요.

### 패키지/번들 식별자를 나중에 바꿀 수 있나요?
첫 실제 배포 이후에는 바꾸지 않는 것이 좋아요. 바꾸면 새 앱이 만들어져서 업데이트가 이어지지 않아요.

### Internal과 Production은 무엇이 다른가요?
**Internal**은 팀에서 테스트하는 용도이고, **Production**은 스토어에 공개하는 실제 배포예요.

### 우선 업데이트는 어떻게 제공되나요?
무료 앱보다 먼저 새 버전을 받아요. 커스터마이저에서 배포 시점을 직접 정할 수 있어요.

### 빌드가 실패했어요. 무엇부터 확인해야 하나요?
**Live Build Status**에서 오류 내용을 확인하세요. 그다음 스토어 연결 상태를 확인하고, 이미지 파일의 크기가 맞는지 점검한 뒤 빌드를 다시 시작하세요.

### 결제 관리는 어디서 하나요?
**모바일 앱**에서 **구독** 카드를 열면 요금제를 구매하거나 변경하거나 취소할 수 있어요.

### 하이퍼클래스 모바일 앱의 모든 기능을 화이트라벨 앱에서 쓸 수 있나요?
기능은 대체로 기본 앱과 같아요. 다만 선택한 모듈과 각 플랫폼의 정책에 따라 달라질 수 있어요.

### 스토어 심사에는 얼마나 걸리나요?
Apple과 Google마다 달라요. 메타데이터를 빠짐없이 입력하고 규정에 맞는 자료를 제출하면 보통 승인이 빨라져요.

### 실제 배포 전에 실제 기기에서 테스트할 수 있나요?
네. **Internal** 빌드와 플랫폼별 테스트 프로그램을 사용하면 공개 배포 전에 기기에서 확인할 수 있어요.
