---

번역일: 2026-04-08
카테고리: 30-모바일-데스크톱 > Whitelabel Mobile App
---

# 셀프서비스 화이트라벨 모바일 앱 커스터마이저

개발자나 티켓 없이 완전히 브랜딩된 iOS 및 Android 앱을 출시하세요. Hyperclass의 셀프서비스 화이트라벨 모바일 앱 커스터마이저(Self‑Service Whitelabelled Mobile App Customizer)는 브랜딩부터 App Store/Google Play 출시까지 실시간 빌드 추적, 유연한 릴리스 트랙, 우선 업데이트로 안내합니다. 브랜드를 소유하고, 출시를 제어하며, 원하는 일정에 맞춰 배포하세요.

---

**목차**

- [셀프서비스 화이트라벨 모바일 앱 커스터마이저란?](#셀프서비스-화이트라벨-모바일-앱-커스터마이저란)
- [셀프서비스 커스터마이저의 주요 장점](#셀프서비스-커스터마이저의-주요-장점)
- [사전 준비사항](#사전-준비사항)
- [브랜딩](#브랜딩)
- [패키지 및 번들 식별자](#패키지-및-번들-식별자)
- [스토어 등록 준비](#스토어-등록-준비)
- [기존 화이트라벨 앱에서 이전하기](#기존-화이트라벨-앱에서-이전하기)
- [셀프서비스 커스터마이저 설정 방법](#셀프서비스-커스터마이저-설정-방법)
- [자주 묻는 질문](#자주-묻는-질문)

---

## **셀프서비스 화이트라벨 모바일 앱 커스터마이저란?**

셀프서비스 화이트라벨 모바일 앱 커스터마이저는 Hyperclass 내의 가이드 워크스페이스로, 에이전시가 자체 iOS 및 Android 앱을 생성, 브랜딩, 빌드, 퍼블리시할 수 있게 해줍니다. 브랜딩, 모듈 선택, 스토어 등록 준비, App Store Connect 및 Google Play Console 연결, 원클릭 빌드/릴리스 컨트롤을 중앙화하여 팀이 빠르게 런칭하고 안정적으로 업데이트할 수 있도록 합니다.

주요 기능:

- 브랜딩부터 라이브 퍼블리싱까지의 완전한 플로우
- Apple/Google 연결을 위한 대화형 마법사
- 자동 패키지/번들 식별자 생성
- 모듈 토글 및 네비게이션 레이아웃 제어
- 실시간 빌드 상태 및 릴리스 트랙 옵션
- 신규 앱 버전에 대한 우선 액세스

---

## **셀프서비스 커스터마이저의 주요 장점**

이러한 장점을 이해하면 구현 계획과 팀 워크플로우를 수립하는 데 도움이 됩니다. 이 커스터마이저가 어떻게 출시 시간을 단축하고, 브랜드 일관성을 개선하며, iOS와 Android 전반의 향후 업데이트를 간소화하는지 보여줍니다.

- **빠른 시장 출시:** 가이드 단계와 사전 점검을 사용하여 아이디어에서 App Store/Google Play 제출까지 빠르게 진행할 수 있습니다.
- **개발 의존성 없음:** 엔지니어나 지원 티켓 없이 빌드하고 릴리스할 수 있습니다.
- **브랜드 일치 경험:** 아이콘/로고 업로드, 색상 및 폰트 설정, 모듈/네비게이션 선택을 통해 일관된 모바일 존재감을 제공합니다.
- **우선 업데이트:** 무료 앱보다 먼저 신규 버전에 액세스하고 언제 롤아웃할지 선택할 수 있습니다.
- **유연한 릴리스:** 테스트를 위해 Internal로 배포하거나 준비가 되면 Production으로 배포할 수 있습니다.
- **운영 제어:** 빌드를 트리거하고, 상태를 실시간으로 추적하며, 변경 로그를 관리할 수 있습니다.
- **규모별 일관성:** 표준화된 워크플로우로 오류를 줄이고 반복적인 릴리스를 가속화합니다.

---

## **사전 준비사항**

요구 사항을 미리 충족하면 스토어 거절과 빌드 지연을 방지할 수 있습니다. 시작하기 전에 조직 계정, 식별자, 정책 페이지를 확인하세요.

- 유효한 D‑U‑N‑S 번호 (Apple 요구사항)
- Apple Developer Program – App Store Connect 액세스 권한이 있는 조직 계정
- Google Play Console – 조직 계정
- 빌드 및 퍼블리싱을 활성화하기 위한 Custom Agency App용 Hyperclass 구독 (월간 또는 분기)
- 공개적으로 호스팅되고 접근 가능한 정책 URL: 개인정보 보호정책 및 서비스 약관
- 권장 역할/권한:
  - Apple: App Store Connect에서 Admin 또는 App Manager 권한
  - Google: Play Console에서 Admin 또는 Release Manager

---

## **브랜딩**

브랜딩은 모바일 앱이 스플래시 화면부터 로그인 화면과 라이트 및 다크 모드의 아이콘까지 비즈니스처럼 보이고 느껴지도록 보장합니다. 여기서 다음을 구성할 수 있습니다:

- 앱 아이콘 (플랫폼에 적합한 크기)
- 스플래시 화면 및 로그인 로고 (라이트 및 다크 버전)
- 기본 색상 (HEX) 및 브랜드 폰트

### 모범 사례

- 아이콘에는 고해상도의 정사각형 원본 아트워크를 사용하세요.
- 가독성을 보장하기 위해 라이트 및 다크 로고 버전을 모두 제공하세요.
- 배경 위 텍스트에 대해 WCAG 친화적인 대비 비율을 목표로 하세요.

---

## **패키지 및 번들 식별자**

모든 앱에는 Apple 및 Google용 고유 식별자가 필요합니다. 커스터마이저는 스토어 거절과 충돌을 줄이기 위해 이를 자동 생성합니다.

### 자동 로직

- **제안 패턴:** com.domain.appname_uniqueString
- 앱 이름과 도메인 이름을 제공한 후 생성 중에 생성됩니다

### 가이드라인

- 첫 번째 프로덕션 릴리스 후에는 식별자 변경을 피하세요.
- 업데이트 연속성을 유지하기 위해 package/applicationId (Android) 및 bundle identifier (iOS)를 안정적으로 유지하세요.

---

## **스토어 등록 준비**

강력한 등록은 규정 준수와 발견 가능성에 도움이 됩니다. 검토자의 질문을 최소화하기 위해 정확한 콘텐츠와 규정 준수 정책 링크를 준비하세요.

### 일반적으로 포함되는 필드

- 앱 제목, 짧은 설명 및 긴 설명
- 지원 이메일
- 개인정보 보호정책 URL 및 서비스 약관 URL
- 카테고리/키워드 (플랫폼별)

---

## **기존 화이트라벨 앱에서 이전하기**

이미 화이트라벨 앱을 운영 중이라면, 사용자와 스토어 등록의 연속성을 유지하면서 더 빠른 업데이트를 위해 셀프서비스 플로우를 채택할 수 있습니다.

### 권장사항

- 업데이트 경로를 유지하기 위해 기존 bundle/application 식별자를 변경하지 않고 유지하세요.
- 향후 릴리스가 일관되도록 커스터마이저에서 스토어 등록 콘텐츠를 동기화하세요.
- Production 전에 업그레이드 동작을 검증하기 위해 Internal 빌드부터 시작하세요.

---

## **셀프서비스 커스터마이저 설정 방법**

이 단계들은 명확한 체크포인트와 함께 생성부터 라이브 릴리스까지 안내합니다. 순서대로 완료하면 검토 문제를 줄이고 승인을 가속화합니다.

- **커스터마이저 열기:** Agency(에이전시) 뷰로 이동하여 Mobile App(모바일 앱)을 클릭합니다.

![커스터마이저 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060104847/original/NdxVcMiYG50zhyJCbxyy8YvBbAbh1X8iHw.png?1765191363)

- **앱 선택:** "Selected App icon(선택된 앱 아이콘)"을 클릭하여 앱에 대해 알아보고 다른 앱 버전을 변경합니다. 앱 이름과 도메인 이름을 입력합니다. 시스템이 고유한 package/bundle 식별자를 자동 생성합니다.

![앱 선택 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060105080/original/S393LOGtTVFw6TlBcxTW_MFgfaVyrKga2A.png?1765191433)

![앱 선택 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060105505/original/pIVN6mC59AfjVfJrgc_e2nOSAoffhHGi2g.jpeg?1765191607)

- **앱 브랜딩:** "Customisation(커스터마이제이션) > Branding(브랜딩)"을 클릭합니다. 그런 다음 Branding(브랜딩) 페이지에서 앱 아이콘, 로그인 및 스플래시 로고(라이트/다크)를 업로드합니다.

![앱 브랜딩](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062057933/original/a9EW9ziZAUUYNgHAM-v3F3TGeSWsk5gJ6w.png?1767727905)

- **커스터마이제이션:**

**A. 로그인 화면**

로고, 브랜드 색상, 선택적 태그라인을 구성합니다.

**B. 핵심 네비게이션**

Bottom Nav(하단 네비게이션) (4–5개 항목) 또는 Left Drawer(왼쪽 드로어) (많은 항목) 중에서 선택합니다.

모듈을 추가/재정렬합니다 (예: 알림, 대화, POS, 캘린더, 앱).

한계에 도달하면 추가 항목을 App Drawer(앱 드로어)로 이동합니다.

**C. 앱 드로어**

나머지 모듈을 카테고리로 정리하고 필요에 따라 재정렬합니다.

Tap to Pay 참고: 결제 기능을 잠금 해제하려면 여기나 Core Nav(핵심 네비게이션)에 POS (및/또는 인보이스/견적서)를 추가합니다.

![커스터마이제이션 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062058418/original/NDo0JHosyylEOQ7II1jFxNDsn_g-1pv3-Q.png?1767728717)

![커스터마이제이션 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060114749/original/WFCyALqaRqxZIRUnJj-kcNsyDrivkkxO-g.gif?1765195599)

- **Distribution(배포) → Profile(프로필) (스토어 등록)**

앱 이름, 설명, 지원 이메일/URL을 입력합니다.

개인정보 보호정책 및 서비스 약관 URL을 추가합니다.

![배포 프로필](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062058716/original/51embLkW31rUunyVcaSvM0m6Wh5kCbsegw.png?1767729053)

- **Distribution(배포) → Channels(채널) (스토어 연결)**

마법사를 통해 App Store Connect와 Play Console을 연결합니다.

둘 다 Connected(연결됨) (녹색)으로 표시되는지 확인합니다.

![배포 채널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062058759/original/d88VQkpIZjC0pezZhT8Oxfb-gNpGCr9Big.png?1767729141)

- **구독**

빌드 및 퍼블리싱을 잠금 해제하려면 월간 또는 분기를 선택합니다.

![구독](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062058771/original/syieaYBIJ214MLsTjN8RhGk0UQyMdOq2_w.png?1767729174)

- **빌드 및 릴리스**

Create App(앱 생성) (처음만).

Generate Build(빌드 생성): Internal(테스트) 또는 Production을 선택하고, 변경 로그를 추가하고, Start App Build(앱 빌드 시작)를 클릭합니다.

Release(릴리스): Applestore/Play Console에서 제출하고 Live Build Status(실시간 빌드 상태)에서 추적합니다.

빌드가 실패하면 View Progress(진행 상황 보기) → Visit knowledge base(지식 베이스 방문)를 클릭하여 문제를 진단하고 Retry Build(빌드 다시 시도)를 실행합니다.

![빌드 및 릴리스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062058819/original/GDscRAb114OO9Xy1UcJ9Rxos6dRIpAEAxQ.png?1767729298)

---

## **자주 묻는 질문**

**Q: Apple Developer Organization 계정이 필요한가요?**
A: 네. Apple Individual 계정은 화이트라벨 퍼블리싱에서 지원되지 않습니다.

**Q: package/bundle 식별자를 나중에 변경할 수 있나요?**
A: 첫 번째 프로덕션 릴리스 후에는 변경을 피하세요. 변경하면 새 앱이 생성되고 업데이트 연속성이 깨집니다.

**Q: Internal과 Production의 차이는 무엇인가요?**
A: Internal은 팀과의 테스트용이고, Production은 스토어의 공개 릴리스입니다.

**Q: 우선 업데이트는 어떻게 작동하나요?**
A: 무료 앱보다 먼저 신규 버전을 받고, 커스터마이저를 통해 언제 배포할지 선택할 수 있습니다.

**Q: 빌드가 실패했을 때 가장 먼저 확인해야 할 것은 무엇인가요?**
A: Live Build Status(실시간 빌드 상태)에서 오류를 검토하고, 스토어 연결을 확인하고, 에셋 크기를 검증하고, 빌드를 다시 트리거하세요.

**Q: 결제는 어디서 관리하나요?**
A: Mobile App(모바일 앱)에서 구독 카드를 열어 플랜을 구매, 변경 또는 취소할 수 있습니다.

**Q: 화이트라벨 앱에서 모든 Hyperclass 모바일 기능을 사용할 수 있나요?**
A: 기능 가용성은 일반적으로 핵심 앱과 일치하지만, 선택한 모듈과 플랫폼 정책에 따라 달라집니다.

**Q: 스토어 검토는 얼마나 걸리나요?**
A: Apple/Google에 따라 일정이 다릅니다. 완전한 메타데이터와 규정 준수 에셋을 제출하면 일반적으로 승인이 빨라집니다.

**Q: Production 전에 실제 기기에서 테스트할 수 있나요?**
A: 네. Internal 빌드(및 플랫폼별 테스트 프로그램)를 사용하여 공개 릴리스 전에 기기에서 검증할 수 있습니다.

---
*원문 최종 수정: Tue, 24 Mar, 2026 at 6:20 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*