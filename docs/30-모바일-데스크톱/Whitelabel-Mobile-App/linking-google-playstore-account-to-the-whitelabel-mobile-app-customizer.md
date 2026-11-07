---
원문: /support/solutions/articles/155000007233-linking-google-playstore-account-to-the-whitelabel-mobile-app-customizer
번역일: 2026-11-06
카테고리: 30-모바일-데스크톱
---

# Google Play 계정 연결하고 Android 패키지 이름 등록하기

Google Play 개발자 계정을 하이퍼클래스에 연결하고, 브랜드 앱에 쓸 Android 패키지 이름을 등록하는 전체 과정을 안내해요. 이 과정을 마치면 하이퍼클래스가 브랜드 앱을 빌드하고 제출할 수 있어요. 에이전시 관리자만 쓸 수 있어요.

## 개요

이 문서는 하이퍼클래스의 **Agency App Manager**(에이전시 앱 관리자)에서 Google Play 연결을 시작하는 단계부터 패키지 이름 등록까지, 두 가지 튜토리얼을 하나로 합친 안내서예요.

{% hint style="warning" %}
시작하기 전에 확인하세요.

- 시작하기 전에 **관리자** 권한이 있는 Google Play 개발자 계정이 있어야 해요.
- 패키지 이름은 다른 앱과 겹치지 않아야 하고, 게시한 뒤에는 바꿀 수 없어요. 신중하게 정하세요.
- 패키지 이름에는 영문 소문자, 숫자, 마침표만 쓸 수 있어요. 예: `com.brand.appname`
- 권한 오류를 막으려면 전체 과정 동안 Google 계정에 로그인한 상태를 유지하세요.
{% endhint %}

## 사전 준비

- **관리자** 권한이 있는 유료 Google Play 개발자 계정
- Play 개발자 계정을 소유한 Google 계정에 접근할 수 있는 권한
- 역방향 DNS 형식(예: `com.company.product`)을 따르는 패키지 이름 계획

## 1단계: Google Play 개발자 계정 연결하기

**비디오 튜토리얼: **

1. **Agency App Manager**를 엽니다.
   - 하이퍼클래스 왼쪽 메뉴에서 **모바일 앱**으로 이동해요.
   - **Agency App Manager**를 열어요. **Apple App Store**와 **Google Playstore** 두 개의 타일이 보이고, 각 타일에 **Set Up**(셋업) 버튼이 있어요.
   - 왼쪽 **단계** 표시줄에 **Distribution**(배포)이 선택되어 있는지 확인하세요.
2. Google Play 연결을 시작합니다.
   - **Google Playstore** 타일에서 **Set Up**을 클릭하세요.
   - Play Store 연결 폼이 열려요.
3. 연결 이름을 정합니다.
   - **Play Store account name**(Play Store 계정 이름)에 나와 팀원이 알아볼 수 있는 짧은 이름을 입력하세요. 에이전시 이름이나 브랜드 이름을 쓰면 좋아요.
   - 나중에 Play 계정을 여러 개 연결할 계획이라면 서로 겹치지 않는 이름을 쓰세요.
4. 폼 안의 링크로 Google Play Console을 엽니다.
   - 폼에 있는 링크를 클릭하면 새 탭에서 Google 개발자 계정 페이지인 [![Google 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062059746/original/vySdHUQJmHcgZuq_iptJP2rBYZ_bsXsx-w.png?1767731032) Google Play Console](https://play.google.com/console/developers)이 열려요.
   - **Google Play 개발자** 프로그램을 소유한 Google 계정으로 로그인하세요. 이미 로그인되어 있다면 올바른 계정인지 확인하세요.
5. Play Console에서 접근 권한을 확인합니다.
   - 개발자 콘솔 홈 화면에 들어갈 수 있는지 확인하세요.
   - Google이 업데이트된 약관에 동의하거나 계정을 인증하라고 안내하면 먼저 마치세요.
   - 권한 오류가 보이면 소유자(Owner)나 관리자에게 **Users and permissions**(사용자 및 권한)에서 내게 **관리자** 권한을 부여해 달라고 요청하세요.
6. 하이퍼클래스로 돌아와 저장합니다.
   - 하이퍼클래스 탭으로 돌아가세요.
   - **Play Store account name** 필드가 채워져 있는지 확인하세요.
   - **저장** 또는 **계속**을 클릭해 연결 정보를 저장하세요.
   - 저장하면 **Google Playstore** 타일에 계정이 연결되었다고 표시돼요. 계속 **Not Connected**(연결 안 됨)로 보이면 페이지를 새로 고치고 다시 시도하세요.
7. 다음 단계로 넘어가기 전에 확인하세요.
   - 브라우저에서 올바른 Google 계정으로 로그인되어 있어요.
   - Play 개발자 계정이 활성 상태이고 문제가 없어요.
   - Play Console에서 **관리자** 수준의 권한이 있어요.

{% hint style="info" %}
같은 브라우저에서 Google 계정을 여러 개 쓴다면 시크릿 창을 열고, Play 개발자 프로그램을 소유한 계정으로만 로그인하세요. 엉뚱한 계정이 연결되는 일을 막을 수 있어요.
{% endhint %}

## 2단계: App Setup에서 Android 패키지 이름 등록하기

**비디오 튜토리얼: **

1. 같은 연결 과정에서 **App Setup**(앱 설정) 단계를 엽니다.
2. **Register**(등록)를 클릭해 Android 패키지 이름을 만듭니다.
3. 역방향 DNS 형식의 식별자를 입력하세요. 예: `com.youragency.clientapp` 공백과 대문자는 쓰지 마세요.
4. 등록을 확인합니다. 하이퍼클래스가 입력한 값을 검증하고 등록을 마쳐요. 패키지 이름이 등록되면 성공 상태가 표시돼요.
5. 앱 배포 설정의 다음 단계로 넘어가세요. 준비할 자료가 더 있다면 나중에 돌아와도 돼요.

## 확인 사항과 자주 나는 오류

- 패키지 이름이 이미 사용 중일 때: 다른 값을 고르세요. 예를 들어 이니셜이나 지역 코드를 붙여 `com.youragency.clientapp.na`처럼 쓸 수 있어요.
- 권한이 부족할 때: Play 개발자 계정의 관리자인지 확인하세요. 아니라면 계정 소유자나 관리자에게 Users and permissions에서 권한을 부여해 달라고 요청하세요.
- 빌드와 값이 맞지 않을 때: 앱 빌드 파일의 패키지 이름이 등록한 값과 같은지 확인하세요. Android 프로젝트와 관련 서비스 모두에서 같은 식별자를 일관되게 쓰세요.

## 자주 묻는 질문

### 이 과정을 마치려면 Play Console에서 관리자 권한이 꼭 있어야 하나요?

네. 앱 등록과 배포 설정을 관리하려면 관리자 또는 소유자 권한이 필요해요.

### 패키지 이름을 나중에 바꿀 수 있나요?

아니요. 앱을 게시한 뒤에는 패키지 이름을 바꿀 수 없어요. 나중에 다른 이름이 필요하면 새 앱으로 게시해야 해요.

### 클라이언트 앱이 많은 에이전시는 어떤 이름 규칙을 쓰면 좋나요?

바뀌지 않는 역방향 DNS 기본값 뒤에 클라이언트 이름을 붙이세요. 예: `com.agencyname.clientbrand`

### 브랜드마다 Play 개발자 계정을 새로 만들어야 하나요?

아니요. Play 개발자 계정 하나로 여러 앱을 소유할 수 있어요. 어떤 앱이 어떤 클라이언트 것인지 구분할 수 있도록 하이퍼클래스에서 연결마다 알아보기 쉬운 이름을 붙이세요.
