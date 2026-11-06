---

번역일: 2026-04-07
카테고리: 06-사이트 > 채팅-위젯
---

# Google Analytics 4(GA4)로 채팅 위젯 활동 추적하기

이 가이드는 Hyperclass의 채팅 위젯(Chat Widget)과 Google Analytics 4를 연동하여 퍼널 단계, 웹사이트 페이지, WordPress 웹사이트, Shopify, Wix, Squarespace 등 모든 통합에서 사용자 상호작용을 효과적으로 모니터링하는 방법을 설명합니다.

**목차**

- [채팅 위젯 GA4 추적이란?](#채팅-위젯-ga4-추적이란)
- [채팅 위젯을 위한 GA4 추적의 주요 장점](#채팅-위젯을-위한-ga4-추적의-주요-장점)
- [채팅 위젯과 GA4 추적 연동하기](#채팅-위젯과-ga4-추적-연동하기)
- [채팅 위젯이 캡처하는 GA4 추적 이벤트](#채팅-위젯이-캡처하는-ga4-추적-이벤트)
- [자주 묻는 질문](#자주-묻는-질문)

# 채팅 위젯 GA4 추적이란?

Hyperclass의 채팅 위젯은 퍼널, 웹사이트, WordPress 사이트 등 다양한 플랫폼에 삽입할 수 있습니다. GA4(Google Analytics)와 연동하면 채팅 위젯과의 사용자 상호작용을 추적하여 사용자 행동과 참여도에 대한 더 나은 인사이트를 얻을 수 있습니다.

## 채팅 위젯을 위한 GA4 추적의 주요 장점

- **향상된 사용자 인사이트**: 사용자가 채팅 위젯과 어떻게 상호작용하는지 모니터링하여 참여 전략을 최적화할 수 있습니다.

- **성능 모니터링**: 채팅 경험에서 발생할 수 있는 문제를 식별하고 해결할 수 있습니다.

- **데이터 기반 의사결정**: 분석 데이터를 활용하여 채팅 기능에 대한 정보에 기반한 결정을 내릴 수 있습니다.

- **원활한 통합**: 채팅 위젯과 GA4 스크립트가 충돌 없이 결합됩니다.

## 채팅 위젯과 GA4 추적 연동하기

채팅 위젯이 표시될 사이트나 퍼널에 Google Analytics 4(GA4)가 이미 설치되어 있는지 확인하세요. 채팅 위젯이 GA4로 이벤트를 전송하는 데 추가 설정은 필요하지 않습니다.

- 이는 Hyperclass 사이트, 퍼널, WordPress, Wix, Shopify 등 모든 플랫폼에 적용됩니다.
- 위젯이 작동하기 위해 GA4를 별도로 설치할 필요는 없습니다.

다음 단계별 설정을 따라 GA4 추적을 설치하고, 채팅 위젯을 삽입하고, 위젯 사용과 관련된 사용자 정의 분석 이벤트 캡처를 시작하세요.

### **1. GA4 Global Site Tag 추가**

웹페이지의 `<head>` 섹션이나 GTM Custom HTML 태그에 다음 코드를 삽입하세요.

```html
<!-- Google Analytics 4 Global Site Tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=your-GA-code"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'your-GA-code');
</script>
```

주요 참고사항:

- 이 스크립트는 GA4 라이브러리를 로드하고 GA4 측정 ID(`your-GA-code`)를 사용하여 초기화합니다.
- `dataLayer`는 이벤트를 저장하고 GA4로 전송하는 데 사용됩니다.

### 2. 채팅 위젯 삽입

채팅 위젯을 로드하기 위해 사이트의 `<body>` 섹션에 다음 스니펫을 삽입하세요.

```html
<!-- 채팅 위젯 삽입 -->
<!-- Google Tag Manager(GTM)용 하위 계정에서 코드 복사 -->
<div
  data-chat-widget
  data-widget-id="widget-id"
  data-location-id="location-id">
</div>
<script
  src="https://widgets.leadconnectorhq.com/loader.js"
  data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
  data-widget-id="widget-id">
</script>
```

"Get Code" 버튼을 클릭한 다음, "Via GTM" 섹션으로 이동하여 이 스니펫을 찾으세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047390964/original/wGXYrIMAkpOB10M7HGPU7l97_S-Zyds_4A.png?1748459488)

속성 분석:

- `data-widget-id`: 위젯의 고유 식별자입니다.
- `data-location-id`: 귀하의 비즈니스/로케이션에 해당합니다.

### 3. GA4 사용자 정의 이벤트 추적 스크립트 추가

위젯 상호작용에 대한 이벤트 추적을 활성화하려면 채팅 위젯 삽입 코드 아래에 다음 스크립트를 붙여넣으세요.

```html
<script>
  function trackGAEvent(eventName, label) {
    gtag('event', eventName, {
      event_category: 'Chat',
      event_label: label
    });
  }

  function beforeSubmit(values, host) {
    trackGAEvent('form-submit', 'Form Submitted');
    return true;
  }

  window.addEventListener("LC_chatWidgetLoaded", function (e) {
    var observer = new MutationObserver(function () {
      if (leadConnector.chatWidget.isActive()) {
        trackGAEvent('widget-open', 'Widget Open');
      } else {
        trackGAEvent('widget-close', 'Widget Close');
      }
    });
    observer.observe(e.detail, { attributes: true });
    window.leadConnector.chatWidget.registerBeforeSubmit(beforeSubmit);
  }, false);
</script>
```

## 채팅 위젯이 캡처하는 GA4 추적 이벤트

각 이벤트가 무엇을 추적하는지 이해하면 GA4에서 데이터를 더 효과적으로 검증하고 사용할 수 있습니다.

| 이벤트 이름 | 트리거 조건 | 카테고리 | 라벨 |
|------------|------------|---------|------|
| widget-open | 위젯이 열릴 때 | Live Chat | Widget Open |
| widget-close | 위젯이 닫힐 때 | Live Chat | Widget Close |
| form-submit | 채팅 폼이 제출될 때 | Live Chat | Form Submitted |

## **테스트 및 디버깅 팁**

이벤트 추적이 올바르게 설정되어 실시간으로 작동하는지 확인하려면 다음 방법을 사용하세요.

- **Google Tag Assistant 확장프로그램**: 위젯과 상호작용하면서 이벤트를 모니터링합니다.
- **GA4 DebugView**: Google Analytics 대시보드에서 실시간 이벤트를 추적합니다.
- **네트워크 로그**: 브라우저 DevTools → Network 탭을 사용하여 이벤트 페이로드를 확인합니다.
- **실시간 테스트**: 채팅을 열고, 닫고, 폼을 제출하여 해당 이벤트를 검증합니다.

## **자주 묻는 질문**

**Q: 모든 페이지에서 사용자를 추적할 수 있나요?**
A: 네, 해당 페이지에 위젯과 추적 스크립트가 삽입되어 있는 한 가능합니다.

**Q: 채팅 위젯이 추적하는 이벤트를 사용자 정의할 수 있나요?**
A: 현재 채팅 위젯은 미리 정의된 이벤트 세트를 추적합니다. 사용자 정의 이벤트 추적은 지원되지 않습니다.

**Q: GA4에서 채팅 위젯 이벤트를 어디서 볼 수 있나요?**
A: GA4 속성의 "Events" 섹션으로 이동하여 추적된 채팅 위젯 이벤트를 확인할 수 있습니다.

---
*원문 최종 수정: Thu, 29 May, 2025 at 7:45 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*