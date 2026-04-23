---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000004734-how-to-use-the-cookie-consent-banner-in-funnels-websites
번역일: 2026-04-23
카테고리: 퍼널 & 웹사이트
---

# 퍼널과 웹사이트에서 쿠키 동의 배너 사용하기

## 목차

- [쿠키 동의 배너 설정하기](#쿠키-동의-배너-설정하기)
  - [1. 배너 활성화](#1-배너-활성화)
  - [2. 버튼 동작 설정](#2-버튼-동작-설정)
  - [3. 쿠키 기본 설정 커스터마이즈](#3-쿠키-기본-설정-커스터마이즈)
- [쿠키 동의 배너 커스터마이즈하기](#쿠키-동의-배너-커스터마이즈하기)
  - [일반 설정](#일반-설정)
  - [고급 설정](#고급-설정)
  - [레이아웃 옵션](#레이아웃-옵션)
  - [버튼 및 팝업 텍스트 커스터마이즈](#버튼-및-팝업-텍스트-커스터마이즈)
  - [🆕 새 기능: 지역 기반 표시 제어](#-새-기능-지역-기반-표시-제어)
- [쿠키 목록 관리](#쿠키-목록-관리)
  - [미리 정의된 쿠키 카테고리](#미리-정의된-쿠키-카테고리)
  - [카테고리에 쿠키 추가하기](#카테고리에-쿠키-추가하기)
  - [정규식 패턴 사용하기](#정규식-패턴-사용하기)
  - [웹사이트에서 쿠키 스캔하기](#웹사이트에서-쿠키-스캔하기)
- [마케팅 도구와 연동하기](#마케팅-도구와-연동하기)
- [모범 사례](#모범-사례)
- [자주 묻는 질문(FAQ)](#자주-묻는-질문faq)

---

### 개요

퍼널과 웹사이트의 쿠키 동의 배너는 사용자의 쿠키 동의를 관리할 수 있도록 도와줍니다. 방문자가 쿠키를 승인하거나 거부할 수 있게 하여 개인정보 보호 규정 준수를 지원합니다.

### 소개

이 가이드에서는 퍼널과 웹사이트에서 쿠키 동의 배너를 설정, 커스터마이즈 및 관리하는 방법을 알아보겠습니다. 이 단계들을 따라하면 방문자에게 쿠키 설정에 대한 제어권을 제공하면서 컴플라이언스 프로그램을 지원할 수 있습니다.

⚠️ 이 도구의 사용이 특정 법률의 준수를 보장하지는 않습니다.

## 쿠키 동의 배너 설정하기

### 1. 배너 활성화

- 퍼널과 웹사이트 빌더에서 퍼널이나 웹사이트를 엽니다.
- 배너를 활성화하려는 페이지로 이동합니다.
- 쿠키 동의 배너 설정 아이콘을 클릭합니다.
- 토글 스위치를 클릭하여 배너를 활성화하거나 비활성화합니다.

### 2. 버튼 동작 설정

- **필수 요소 승인(Accept Essential)** – 웹사이트 기능에 필요한 쿠키만 승인합니다.
- **전체 승인(Accept All)** – 추적 및 분석 쿠키를 포함한 모든 쿠키를 승인합니다.

### 3. 쿠키 기본 설정 커스터마이즈

- **거부(Reject)** – 필수 쿠키만 승인합니다.
- **취소(Cancel)** – 팝업을 닫고 메인 배너를 다시 엽니다.
- **설정 저장(Save Preferences)** – 사용자가 선택한 쿠키 설정을 저장합니다.

![쿠키 동의 배너 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048066018/original/vRJN0uRjDJ5YRqu_1ljLnGjnW7JnlrVqbQ.jpeg?1749635578)

## 쿠키 동의 배너 커스터마이즈하기

### 일반 설정

- 쿠키 목록을 활성화하거나 비활성화합니다.
- 컴플라이언스 유형을 선택합니다:
  - **옵트인 요청(Ask to Opt-In)** – "필수 요소 승인"과 "전체 승인" 버튼을 표시합니다.
  - **요청하지 않음(Don't Ask)** – "확인" 버튼만 표시합니다.
- 메시지 설명과 개인정보 정책 링크를 추가합니다.
- 배너의 외관을 커스터마이즈합니다: 색상, 폰트, 텍스트 크기 등

![일반 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048066897/original/GrjMSaJQjqsOb5uFj850MwjYfn8B1uHlbQ.png?1749636040)

### 고급 설정

- **동의 만료(Consent Expiration)** - 동의를 다시 요청하기까지의 일수를 설정합니다.

### 레이아웃 옵션

- 사이트 레이아웃과 브랜드에 맞는 다양한 배너 표시 스타일을 선택합니다.

### 버튼 및 팝업 텍스트 커스터마이즈

이제 배너와 설정 팝업의 모든 버튼 텍스트를 브랜드와 현지화 요구사항에 맞게 편집할 수 있습니다:

### 편집 가능한 배너 버튼:

- 전체 승인(Accept All)
- 필수 요소 승인(Accept Essential)
- 커스터마이즈(Customize)
- 확인(OK)

### 편집 가능한 팝업 버튼:

- 거부(Reject)
- 설정 저장(Save Preferences)
- 취소(Cancel)

중요: 이러한 레이블을 커스터마이즈하면 자동 번역(i18n) 기능이 비활성화됩니다. 일관된 다국어 경험을 위해 지원되는 모든 언어에 대한 번역을 수동으로 추가해야 합니다.

![버튼 텍스트 편집 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048067767/original/dxVjM1uT2uBWJIi76B1k0aTrGLtVPZjFVQ.png?1749636703)

![버튼 텍스트 편집 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048067816/original/meL8YCqu1ladPjqyNkoEpIO848Dxo9KXSw.png?1749636721)

![버튼 텍스트 편집 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048067912/original/LGGx8xsH3uLLUJ7Jdz_rvkSqR5rvbihyog.png?1749636742)

![버튼 텍스트 편집 화면 4](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048067959/original/ZSiO5WVjNlKVIMK6C96MNtv42y6d8buyFw.png?1749636759)

## 🆕 새 기능: 지역 기반 표시 제어

이제 방문자의 위치에 따라 쿠키 배너가 표시되는 곳을 제어할 수 있습니다:

- **전세계(Worldwide)** – 모든 방문자에게 배너를 표시합니다.
- **EU & UK** – 유럽연합과 영국 사용자에게만 표시합니다.
- **특정 국가 선택(Select Countries)** – 배너가 표시될 특정 국가를 수동으로 선택합니다.

이를 통해 규제 대상 지역 외부의 방문자에게는 불필요한 프롬프트를 최소화하여 법적 컴플라이언스를 유지하면서 사용자 경험을 개선할 수 있습니다.

![지역 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048066934/original/L-KO7Zv9CGQVrALkkY4KAuLn_BK57QTWuA.png?1749636059)

![지역 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048066971/original/AMNbhrxbru3ImeLHVCQQc3c2fIz1vIolng.png?1749636084)

![지역 설정 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048067229/original/d4e5H_40Jpxicz1m1_5OIzpB08lWTXcK8g.png?1749636277)

---

## 쿠키 목록 관리

쿠키 목록 기능을 통해 사용자가 다양한 유형의 쿠키를 활성화하거나 비활성화할 수 있습니다. 활성화되면 방문자가 허용하고자 하는 쿠키를 선택할 수 있습니다.

![쿠키 목록 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048066014/original/0Ti_f5PMB6D1I0jaBjZrsIbQuA0zw-ETJg.png?1749635576)

### 미리 정의된 쿠키 카테고리

- **필수(Essential)** – 웹사이트 기능에 필요함 (항상 활성화됨)
- **기능적(Functional)** – 소셜 미디어 공유 및 피드백 수집과 같은 기능을 지원함
- **분석(Analytics)** – 방문자 행동 추적 (예: 페이지 조회수, 이탈률)
- **성능(Performance)** – 사이트 속도와 사용자 경험 최적화에 도움
- **광고(Advertising)** – 타겟 광고 및 마케팅에 사용됨
- **미분류(Uncategorized)** – 위 카테고리에 할당되지 않은 모든 쿠키

### 카테고리에 쿠키 추가하기

각 쿠키에 대해 다음을 지정하세요:

- **쿠키 키(Cookie Key)** – 쿠키의 이름 (여러 쿠키에 대한 정규식 패턴 지원)
- **지속 시간(Duration)** – 쿠키가 지속되는 기간 (예: 1일, 30일, 1년)
- **도메인(Domain)** – 쿠키를 설정하는 도메인
- **설명(Description)** – 쿠키의 목적

![쿠키 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048066012/original/LSwZPyQLZY2SpPqlo8iNfLXNe6p_FmI6Og.jpeg?1749635575)

### 정규식 패턴 사용하기

여러 쿠키와 매칭하기 위해 정규식 패턴을 사용할 수 있습니다:

- **ga-*** – "ga-"로 시작하는 모든 쿠키와 매칭 (예: ga-1234, ga-3241)
- **_fbp** – Meta Pixel 쿠키와 매칭
- **_ga.*** – 모든 Google Analytics 쿠키와 매칭

![정규식 패턴 사용 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048066015/original/amWRllNwW9vXQGVDrcP-YGUX4ijJ2MI8_Q.jpeg?1749635576)

### 웹사이트에서 쿠키 스캔하기

- 쿠키 동의 배너를 일시적으로 비활성화합니다.
- [CookieServe](https://www.cookieserve.com/)와 같은 무료 도구를 사용하여 웹사이트를 스캔합니다.
- 감지된 쿠키를 검토하고 올바른 카테고리에 할당합니다.

중요: 스캔 전에 배너를 비활성화하세요. 배너가 필수가 아닌 쿠키를 차단하여 완전한 스캔을 방해할 수 있습니다.

## 마케팅 도구와 연동하기

올바른 추적을 위해 쿠키를 정확히 분류하세요:

- **광고(Advertising)** – Facebook Pixel (_fbp, _fbc), 기타 광고 플랫폼 쿠키
- **분석(Analytics)** – Google Analytics (_ga, _gid), Google Tag Manager, 기타 추적 도구

연동 세부 사항은 [퍼널과 웹사이트 쿠키 배너에서 사용할 마케팅 도구](https://help.leadconnectorhq.com/support/solutions/articles/155000002126-marketing-tools-to-use-in-funnel-website-cookie-banner) 아티클을 참조하세요.

## 모범 사례

- 정기적으로 웹사이트에서 새로운 쿠키를 스캔하세요.
- 각 쿠키에 대해 명확하고 간단한 설명을 제공하세요.
- 유사한 쿠키를 정리하기 위해 정규식 패턴을 사용하세요.
- 마케팅 도구 쿠키가 올바르게 분류되어 있는지 확인하세요.
- 쿠키 만료 설정을 정확하고 최신 상태로 유지하세요.

이러한 관행을 따르면 사용자에게 자신의 데이터에 대한 더 많은 제어권을 제공하면서 개인정보 보호 법률 요구사항을 해결하는 데 도움이 됩니다.

⚠️ 이 도구의 사용이 특정 법률의 준수를 보장하지는 않습니다.

## 자주 묻는 질문(FAQ)

### 1. 쿠키 동의 배너가 왜 필요한가요?

이 기능은 사용자 데이터를 수집하는 웹사이트에서 GDPR 및 CCPA와 같은 개인정보 보호 법률 준수를 돕기 위해 설계되었습니다.

### 2. 사용자가 나중에 쿠키 설정을 변경할 수 있나요?

아니요, 사용자는 나중에 설정을 업데이트할 수 없습니다.

### 3. 사용자가 모든 쿠키를 거부하면 어떻게 되나요?

필수 쿠키만 저장되고 모든 추적 및 분석 쿠키는 비활성화됩니다.

### 4. 쿠키 동의 배너의 외관을 커스터마이즈할 수 있나요?

네, 설정에서 색상, 폰트, 버튼 스타일, 텍스트 설명을 조정할 수 있습니다.

### 5. 쿠키 동의가 퍼널이나 웹사이트의 모든 페이지에 적용되나요?

네, 활성화되면 쿠키가 도메인 수준에서 관리되므로 퍼널이나 웹사이트의 모든 단계/페이지에 배너가 적용됩니다.

쿠키 동의 배너를 사용하면 방문자에게 쿠키 설정에 대한 더 많은 제어권을 제공하면서 개인정보 보호 법률 요구사항을 해결하는 데 도움이 됩니다. 브랜드와 컴플라이언스 요구사항에 맞게 배너를 커스터마이즈하여 원활한 사용자 경험을 만드세요. **적용 가능한 법률에 대한 웹사이트의 전반적인 컴플라이언스 확보는 귀하의 책임입니다.**

---
*원문 최종 수정: 2025-06-12*
*Hyperclass 사용 가이드 — hyperclass.ai*