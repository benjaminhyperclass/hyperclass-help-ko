---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002421-hydration-event-in-custom-code-in-funnels
번역일: 2026-11-07
카테고리: 06-사이트
---

# 퍼널 커스텀 코드에서 hydrationDone 이벤트 사용하기

미리보기에 새 커스텀 이벤트 `hydrationDone`이 추가되었어요. 퍼널/웹사이트 미리보기가 하이드레이션(hydration, 화면 로딩을 마치고 동작할 준비를 끝내는 과정)을 마치면 이 이벤트가 발생해요. 이 이벤트를 이용하면 하이드레이션이 끝난 뒤에 실행할 커스텀 코드를 작성할 수 있어요.

## 이 이벤트가 필요한 이유

이전에는 미리보기의 하이드레이션이 끝나기 전에 커스텀 스크립트가 먼저 실행되는 경우가 있었어요. 이렇게 실행 시점이 어긋나면 코드가 의도와 다른 순서로 실행되어 원하는 기능이 제대로 동작하지 않을 수 있어요.

## 어떻게 해결했나요?

1. 미리보기의 하이드레이션이 모두 끝나면 `hydrationDone` 이벤트를 발생시켜요. 이렇게 해서 실행 시점이 충돌하는 문제를 없앴어요.
2. `hydrationDone` 이벤트에 이벤트 리스너를 추가하면, 그 뒤에 실행할 코드를 작성할 수 있어요. DOM 콘텐츠를 조작할 때 특히 유용해요.

## 사용 방법

1. 빌더에서 코드 요소를 추가하세요.
2. 아래와 같이 `hydrationDone` 이벤트를 수신하도록 코드를 작성하세요.

```
document.addEventListener(
  "hydrationDone",
  () => {
     // Add custom javascript here
})
```

미리보기의 DOM 콘텐츠가 로드되고 하이드레이션 이벤트를 받은 뒤에 커스텀 코드가 실행돼요. 그래서 실행 시점이 꼬이는 문제 없이 동작해요.

{% hint style="info" %}
페이지가 로드될 때 바로 실행되어야 하는 커스텀 코드라면 **Optimise javascript**(자바스크립트 최적화)를 꺼야 할 수 있어요. 사용자 상호작용이 없으면 이 설정 때문에 하이드레이션 이벤트가 늦게 발생하기 때문이에요.
{% endhint %}

커스텀 JavaScript/HTML 코드는 아래 이미지처럼 작성하면 돼요.

![커스텀 JavaScript/HTML 코드 작성 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026075581/original/JUAS8WOxjL8rYexXLNPsz4ITdqJTBToK8A.png?1715782328)
