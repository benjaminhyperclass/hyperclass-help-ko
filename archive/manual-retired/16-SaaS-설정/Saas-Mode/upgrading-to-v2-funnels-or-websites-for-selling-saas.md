---

번역일: 2026-04-08
카테고리: 16-SaaS-설정 > Saas Mode
---

# SaaS 판매를 위한 v2 퍼널/웹사이트로 업그레이드하기

**목차**

- [v2 퍼널과 웹사이트란?](#v2-퍼널과-웹사이트란)
- [SaaS를 판매한다면 왜 v2 퍼널로 이전해야 하나요?](#saas를-판매한다면-왜-v2-퍼널로-이전해야-하나요)
- [SaaS 퍼널/웹사이트를 v2로 업그레이드하는 방법](#saas-퍼널웹사이트를-v2로-업그레이드하는-방법)
- [1단계: 현재 사용 중인 퍼널/웹사이트 버전 확인하기](#1단계-현재-사용-중인-퍼널웹사이트-버전-확인하기)
- [2단계: Stripe 커넥트 사용 확인](#2단계-stripe-커넥트-사용-확인)
- [3단계: 기존 퍼널을 v2 퍼널로 업그레이드](#3단계-기존-퍼널을-v2-퍼널로-업그레이드)
  - [업그레이드 전 준비사항](#업그레이드-전-준비사항)
  - [업그레이드 과정](#업그레이드-과정)
  - [업그레이드 후 확인사항](#업그레이드-후-확인사항)

퍼널(Funnels)이나 웹사이트(Websites)를 통해 SaaS 상품을 판매하고 계신다면, **2022년 3월 15일 이전**에 퍼널이나 웹사이트를 모든 계정에서 사용 가능한 버전 2로 업그레이드해야 할 수 있습니다.

# v2 퍼널과 웹사이트란?

v2 퍼널과 웹사이트는 기존 퍼널과 웹사이트의 후속 버전으로, 더 안전하고 빠르며 전환율이 높고 기능이 풍부합니다.

v2 대 v1 퍼널과 웹사이트의 차이점에 대한 자세한 내용은 다음 문서를 참조하세요:

- [시스템 내 다양한 웹사이트/퍼널 버전](../../06-사이트/기타/different-websites-funnels-versions-within-the-system.md)
- [버전 1 퍼널을 버전 2로 업그레이드하는 방법](../../06-사이트/기타/how-to-upgrade-a-version-1-funnel-to-version-2-.md)

# SaaS를 판매한다면 왜 v2 퍼널로 이전해야 하나요?

SaaS 판매에 사용하는 기존 퍼널과 웹사이트를 v2 버전으로 업그레이드해야 하는 이유는 v2 퍼널에 내장된 향상된 보안과 카드 인증 기능 때문입니다. 이를 통해 SaaS 사업에서 더욱 강력하고 안전한 구독(Subscription) 관리 경험을 제공할 수 있습니다.

v2 퍼널과 웹사이트의 장점:

- 원스텝 주문 결제 페이지 생성 가능
- 3D 보안 결제와 호환
- 더 빠른 속도
- API 키 대신 Stripe 커넥트 연동 사용
- 상품(Products), 가격, 결제(Payments) 기능과 더 나은 호환성
- 정기 상품 판매 시 내장된 카드 인증 보안 기능

v2 퍼널과 웹사이트는 모든 면에서 v1 퍼널과 웹사이트보다 우수합니다.

이 문서에서는 현재 기존 퍼널을 사용하여 SaaS를 판매하고 있는 경우 v2 퍼널과 웹사이트로 마이그레이션하는 방법을 설명합니다.

# SaaS 퍼널/웹사이트를 v2로 업그레이드하는 방법

## 1단계: 현재 사용 중인 퍼널/웹사이트 버전 확인하기

![퍼널 버전 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48197647579/original/F4rnqAlzI90rJk3l6GmgAscXUHuPqUI0Tg.png?1646436246)

SaaS 판매용 퍼널/웹사이트가 이미 v2 퍼널인 경우, 더 이상 추가 작업이 필요하지 않습니다! 모든 설정이 완료된 상태입니다.

SaaS 판매용 퍼널/웹사이트가 v1 퍼널/웹사이트인 경우, 다음 단계를 따라 진행하세요.

## 2단계: Stripe 커넥트 사용 확인

![Stripe 커넥트 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48197647870/original/Em_Ppwei1C8R6F2Rv3sURe_TxMVYSm1CSw.png?1646436541)

**중요:**
SaaS를 판매하려면, 이 Stripe 계정이 에이전시(Agency) 레벨에서 연결된 Stripe 계정과 동일해야 합니다.

에이전시에 연결된 Stripe 계정을 확인하려면 에이전시 뷰 → 설정(Settings) → Stripe로 이동하여 아래와 같이 이메일 ID를 확인하세요:

![에이전시 Stripe 계정 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48197648165/original/TvGh2-7oFwRiH4b6UQFiFwckvUYpNhiocw.png?1646436892)

**중요:**
Stripe 계정을 연결할 때 여러 이메일 ID로 로그인되어 있거나 같은 이메일 ID로 여러 계정을 사용하고 있을 수 있습니다. 올바른 계정을 선택했는지 확인하세요.

![Stripe 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48197648478/original/jn6PKZ4ByVjSwHzuhpfspCfvaDHeQKLk2Q.png?1646437258)

## 3단계: 기존 퍼널을 v2 퍼널로 업그레이드

### 업그레이드 전 준비사항

다음 문서의 단계를 따라 SaaS 로케이션(Location)으로 Stripe 상품(Products)을 가져오세요: [Stripe에서 상품/가격 가져오기](../../08-결제/import-products-price-from-stripe.md)

업그레이드 전 v1 퍼널의 상품 영역은 다음과 같이 보입니다:

![업그레이드 전 상품 영역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48197650814/original/U6AbyIn90ki0QFRICji5aGzdNZGQT0mlBQ.png?1646440123)

### 업그레이드 과정

업그레이드 과정은 일반적으로 45-60초 정도 소요됩니다. 업그레이드 중에는 페이지를 벗어나지 않도록 주의하세요.

### 업그레이드 후 확인사항

업그레이드 완료 후 화면은 다음과 같이 보입니다:

![업그레이드 완료 후 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48197651639/original/dCW1DbfuiVH2AgodSOIG8WK0SlO6seklhQ.png?1646441249)

**중요**
업그레이드 후 라이브 모드에서 상품을 테스트해보세요. **SaaS 계정 생성은 테스트 모드에서는 작동하지 않습니다.**

---
*원문 최종 수정: 2022년 3월 8일 오전 7시 18분*
*Hyperclass 사용 가이드 — hyperclass.ai*