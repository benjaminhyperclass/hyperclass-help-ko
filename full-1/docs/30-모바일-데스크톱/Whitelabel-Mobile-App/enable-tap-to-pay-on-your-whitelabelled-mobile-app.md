---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006767-enable-tap-to-pay-on-your-whitelabelled-mobile-app
번역일: 2026-11-06
카테고리: 30-모바일-데스크톱
---

# 화이트라벨 모바일 앱에서 Tap to Pay 사용 설정하기

화이트라벨 모바일 앱에서 iPhone 또는 Android용 Tap to Pay를 켜는 전체 과정을 안내해요. Tap to Pay를 쓰면 판매자가 별도 결제 단말기 없이 iPhone만으로 비접촉 결제를 받을 수 있어요. 그래서 판매자와 고객 모두 간편하게 결제할 수 있어요.

## 개요

{% hint style="info" %}
시작하기 전에 확인하세요.

- Account Holder(계정 소유자) 권한이 있는 조직 단위 Apple Developer 계정이 꼭 있어야 해요.
- Tap to Pay on iPhone은 지원되는 결제 서비스 제공업체(PSP)에서만 쓸 수 있어요. 하이퍼클래스의 화이트라벨 앱은 PSP로 Stripe 또는 Square를 사용해요.
- Apple은 entitlement(사용 권한)와 distribution(배포 권한) 요청을 하나씩 심사한 뒤 승인해요.
- Android의 Tap to Pay는 더 간단한 별도 절차를 따라요. 사전 승인이 필요 없어요.
{% endhint %}

## Tap to Pay on iPhone이란?

Tap to Pay on iPhone을 쓰면 판매자가 iPhone만으로 비접촉 체크카드·신용카드, Apple Pay, 그 밖의 디지털 지갑 결제를 받을 수 있어요. 이 기능은 하이퍼클래스 화이트라벨 앱과 바로 연결돼요. 서브 계정은 연결해 둔 Stripe 또는 Square 계정으로 결제 금액을 받아요.

Apple은 앱마다 이 기능을 쓸 수 있는 entitlement(사용 권한)와 distribution(배포 권한)을 갖추도록 요구해요. 두 권한은 **Tap to Pay on iPhone Entitlement Request Form**(Tap to Pay on iPhone 권한 요청 폼)을 통해 승인되면 부여돼요.

{% hint style="info" %}
Tap to Pay 단계를 시작하기 전에 앱 서랍(app drawer)에서 **POS module**(POS 모듈)을 켜 주세요. Mobile App Customizer(모바일 앱 커스터마이저)에서 POS 모듈이 켜져 있어야 다음 단계로 진행할 수 있어요.
{% endhint %}

## 설정 과정 한눈에 보기

설정은 크게 세 단계로 이뤄져요.
<!-- 검토 필요: 원문 내용이 서로 다름 -->

1. Tap to Pay on iPhone entitlement 요청하기
2. Apple의 심사와 entitlement 추가 기다리기
3. Tap to Pay distribution 승인에 필요한 자료 제출하기
4. Apple의 심사와 distribution 추가 기다리기
5. Tap to Pay distribution 권한이 반영된 앱 업데이트 배포하기

승인이 끝나면 **Mobile App Customizer**를 통해 화이트라벨 앱 업데이트를 요청하세요. 그러면 Tap to Pay 기능을 쓸 수 있어요.

## 1단계: Tap to Pay entitlement 요청하기

### 준비 사항

- 조직 단위 Apple Developer 계정에 Account Holder로 로그인해야 해요.
- Apple 공식 요청 페이지인 [Tap to Pay on iPhone Entitlement Request Form](https://developer.apple.com/contact/request/tap-to-pay-on-iphone/)으로 이동하세요.

### 해야 할 일

1. 요청 폼을 작성해서 제출하세요.
2. PSP는 Stripe 또는 Square로 선택하세요.

각 항목을 정확히 채우는 방법은 샘플 문서의 표를 참고하세요. 샘플 폼을 기준으로 한 주요 입력 항목은 아래와 같아요.

| 필드 | 응답 예시 |
| --- | --- |
| **PSP** | Stripe |
| **Organization**(조직) | 조직 이름 |
| **Name**(이름) | 조직 대표자 이름 |
| **Email**(이메일) | 조직의 대표 이메일 |
| **Distribution**(배포) | App Store and Apple Business Manager |
| **Onboarding Description**(온보딩 설명) | Merchants are onboarded via the web app as sub-accounts. Once connected to Stripe, they can sign in on mobile to process payments. (판매자는 웹 앱에서 서브 계정으로 등록돼요. Stripe를 연결하면 모바일에 로그인해 결제를 처리할 수 있어요.) |
| **Countries/Regions**(국가/지역) | 고객이 Tap to Pay를 사용할 모든 국가 또는 지역을 출시 순서대로 적으세요. |

승인을 받으려면 모든 응답이 제공된 샘플 문서와 일치해야 해요.

## 판매자 온보딩 과정

판매자 온보딩은 주로 하이퍼클래스 웹 앱에서 이뤄져요.

1. 메인 계정 소유자가 판매자를 서브 계정으로 추가해요.
2. 각 판매자가 웹 화면에서 Stripe 또는 Square 계정을 연결해요.
3. 판매자는 서브 계정 로그인 정보로 모바일 앱에 로그인해요. 그러면 결제 금액이 자신의 Stripe 계정으로 바로 들어와요.

이 구조 덕분에 판매자마다 독립적으로 순조롭게 온보딩할 수 있어요.

### 심사 과정

Apple은 제출한 내용과 자격 요건을 바탕으로 요청을 심사해요.

승인되면 Tap to Pay entitlement가 개발자 계정의 **Managed Capabilities**(관리되는 기능)에 나타나요.

## 2단계: Apple의 entitlement 추가

Apple이 신청을 승인하면 다음과 같이 진행돼요.

- Tap to Pay entitlement가 개발자 계정에 추가돼요.
- 하이퍼클래스 담당자에게 알려 주세요. 그러면 다음 단계로 넘어갈 수 있어요.

## 3단계: distribution 승인에 필요한 자료 제출

Apple이 entitlement를 추가해 주면, Apple 팀이 안내하는 요구 사항을 이어서 진행하세요. 여기에는 데모 영상과 요구 사항 체크리스트가 포함돼요.

## 4단계: Apple의 심사와 distribution 추가 기다리기

제출한 자료로 distribution 추가 승인을 받을 때까지 기다려요.

## 5단계: distribution 권한이 반영된 앱 업데이트 배포

distribution 권한이 부여되면 앱 업데이트를 배포해야 해요. 그래야 모든 앱에서 Tap to Pay on iPhone 기능을 쓸 수 있어요.

## Android에서 Tap to Pay 사용 설정하기

iOS와 달리 Android의 Tap to Pay는 Google의 승인이나 entitlement 요청이 필요 없어요.

Android에서 Tap to Pay를 켜려면 다음과 같이 하세요.

- 표준 업데이트 요청 절차에 따라 화이트라벨 앱 업데이트를 요청하세요.
- 업데이트가 끝나면 Android 앱에서 Tap to Pay 결제를 자동으로 지원해요.

## 지원 및 소요 기간

### 문의처

- Apple Developer Support: entitlement 절차와 관련된 문제를 문의하세요.
- 하이퍼클래스 고객지원: 앱 업데이트나 연동 관련 문의를 하세요.

### 예상 소요 기간

Apple의 심사 기간은 보통 며칠에서 몇 주까지 다양해요.

심사가 늦어질 수 있으니 앱 출시 일정에 여유를 두세요.

## 자주 묻는 질문

### Tap to Pay entitlement를 쓰려면 추가 비용을 내야 하나요?

아니요. entitlement 자체는 무료예요. 다만 Apple이 승인해야 활성화돼요.

### Stripe 연동 없이 Tap to Pay를 쓸 수 있나요?

아니요. 하이퍼클래스의 Tap to Pay는 현재 결제 서비스 제공업체로 Stripe와 Square만 지원해요.

### 승인까지 얼마나 걸리나요?

Apple이 정확한 기간을 밝히지는 않아요. 보통 계정 자격에 따라 1~6주 정도 걸려요.

### entitlement 요청이 거절되면 어떻게 하나요?

내용을 바로잡아 다시 제출하거나, Apple Developer Support에 문의해 자세한 사유를 확인하세요.

### Tap to Pay는 전 세계에서 쓸 수 있나요?

Apple의 지역별 출시 상황과 Stripe가 지원하는 국가에 따라 달라요. 사용하려는 모든 국가를 요청 폼에 빠짐없이 적으세요.
