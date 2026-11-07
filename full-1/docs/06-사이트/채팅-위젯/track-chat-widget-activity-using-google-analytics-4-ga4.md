---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002178-track-chat-widget-activity-using-google-analytics-4-ga4-
번역일: 2026-11-06
카테고리: 06-사이트
---

# Google Analytics 4(GA4)로 채팅 위젯 활동 추적하기

하이퍼클래스 채팅 위젯을 Google Analytics 4(GA4)와 연결하면 사용자가 위젯을 어떻게 쓰는지 확인할 수 있어요. 퍼널 단계, 웹사이트 페이지, WordPress 사이트는 물론 Shopify, Wix, Squarespace 같은 다른 플랫폼에서도 사용할 수 있어요.

## 채팅 위젯 GA4 추적이란?

하이퍼클래스 채팅 위젯은 퍼널, 웹사이트, WordPress 사이트 등 여러 곳에 넣을 수 있어요. 여기에 GA4(Google Analytics)를 연결하면 사용자가 채팅 위젯으로 하는 행동을 추적할 수 있어요. 사용자의 행동과 참여 방식을 더 잘 파악할 수 있어요.

## GA4 추적의 장점

- 사용자 이해 향상: 사용자가 채팅 위젯을 어떻게 쓰는지 살펴보고 참여를 높일 방법을 찾을 수 있어요.
- 성능 모니터링: 채팅 이용 중 생길 수 있는 문제를 찾아 해결할 수 있어요.
- 데이터 기반 의사결정: 분석 데이터를 바탕으로 채팅 기능을 어떻게 운영할지 결정할 수 있어요.
- 간편한 연동: 채팅 위젯 스크립트와 GA4 스크립트를 충돌 없이 함께 쓸 수 있어요.

## 채팅 위젯과 GA4 추적 연결하기

채팅 위젯을 넣을 사이트나 퍼널에 Google Analytics 4(GA4)가 이미 설치되어 있는지 먼저 확인하세요. 채팅 위젯이 GA4로 이벤트를 보내기 위해 따로 설정할 것은 없어요. <!-- 검토 필요: 원문 내용이 서로 다름 (추가 설정이 필요 없다고 하면서, 아래에서는 GA4 태그와 커스텀 이벤트 스크립트 설치 단계를 안내함) -->

- 하이퍼클래스 사이트, 퍼널, WordPress, Wix, Shopify 등 모든 플랫폼에 똑같이 적용돼요.
- 위젯을 쓰기 위해 GA4를 따로 설치할 필요는 없어요.

아래 순서대로 GA4 추적을 설치하고, 채팅 위젯을 넣고, 위젯 사용과 관련된 분석 이벤트를 수집하세요.

### 1. GA4 글로벌 사이트 태그 추가하기

아래 코드를 웹페이지의 `<head>` 영역이나 GTM의 Custom HTML 태그에 넣으세요.

```
<!-- Google Analytics 4 Global Site Tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=your-GA-code"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'your-GA-code');
</script>
```

핵심 내용:

- 이 스크립트는 GA4 라이브러리를 불러오고, GA4 측정 ID(your-GA-code)로 초기화해요.
- dataLayer는 이벤트를 저장해 GA4로 보내는 데 쓰여요.

### 2. 채팅 위젯 삽입하기

사이트의 `<body>` 영역에 아래 스니펫을 넣어 채팅 위젯을 불러오세요.

```
<!-- Chat Widget Embed →
COPY THE CODE FROM THE SUB-ACCOUNT FOR GOOGLE TAG MANAGER (GTM)
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

**코드 가져오기** 버튼을 누른 다음 **GTM 사용** 섹션으로 이동하면 이 스니펫을 찾을 수 있어요.

![코드 가져오기 화면의 GTM 사용 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047390964/original/wGXYrIMAkpOB10M7HGPU7l97_S-Zyds_4A.png?1748459488)

속성 설명:

- data-widget-id: 위젯의 고유 식별자예요.
- data-location-id: 내 비즈니스(로케이션)에 해당하는 값이에요.

### 3. GA4 커스텀 이벤트 추적 스크립트 추가하기

채팅 위젯 삽입 코드 아래에 이 스크립트를 붙여 넣으면 위젯 사용 이벤트를 추적할 수 있어요.

```
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

## GA4 이벤트 참고표

각 이벤트가 무엇을 추적하는지 알아 두면 GA4에서 데이터를 확인하고 활용하기 쉬워요.

| **이벤트 이름** | **트리거 조건** | **카테고리** | **라벨** |
| --- | --- | --- | --- |
| widget-open | 위젯을 열었을 때 | Live Chat | Widget Open |
| widget-close | 위젯을 닫았을 때 | Live Chat | Widget Close |
| form-submit | 채팅 폼을 제출했을 때 | Live Chat | Form Submitted |

<!-- 검토 필요: 원문 내용이 서로 다름 (표의 카테고리는 Live Chat, 3단계 코드의 event_category 값은 Chat) -->

## 테스트와 디버깅 팁

아래 방법으로 이벤트 추적이 제대로 설정되어 실시간으로 작동하는지 확인하세요.

1. Google Tag Assistant 확장 프로그램: 위젯을 사용하면서 이벤트를 확인해요.
2. GA4 DebugView: Google Analytics 대시보드에서 실시간 이벤트를 확인해요.
3. 네트워크 로그: 브라우저 개발자 도구(DevTools)의 Network 탭에서 이벤트 전송 데이터를 확인해요.
4. 직접 테스트: 위젯을 열고, 닫고, 채팅 폼을 제출해서 각 이벤트가 들어오는지 확인해요.

## 자주 묻는 질문

### 모든 페이지에서 사용자를 추적하나요?
네, 위젯과 추적 스크립트가 삽입된 페이지라면 추적돼요.

### 채팅 위젯이 추적하는 이벤트를 직접 바꿀 수 있나요?
현재 채팅 위젯은 미리 정해진 이벤트만 추적해요. 사용자 지정 이벤트 추적은 지원하지 않아요.

### GA4에서 채팅 위젯 이벤트는 어디서 확인하나요?
GA4 속성의 **이벤트** 섹션으로 이동하면 추적된 채팅 위젯 이벤트를 볼 수 있어요.
