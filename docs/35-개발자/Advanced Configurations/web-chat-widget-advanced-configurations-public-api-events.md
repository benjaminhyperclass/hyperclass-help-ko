---

번역일: 2026-04-08
카테고리: 개발자 > 고급 설정
---

# 웹 채팅 위젯 - 고급 설정 + Public API/Events

채팅 위젯(Chat Widget)은 채팅 위젯 빌더를 통해 다양한 설정을 제공하지만, 대부분의 사용자를 위해 간단함을 유지하고 일반적인 사용 사례의 복잡성을 피하기 위해 빌더에서 제공하지 않는 몇 가지 설정들이 있습니다. 이 섹션에서는 빌더에서 코드를 복사한 후 채팅 위젯 코드에서 할 수 있는 설정들에 대해 설명합니다.

아래 코드가 빌더에서 복사한 코드라고 가정해 보겠습니다. 고급 설정을 위해 이 코드에 새로운 속성을 추가할 수 있습니다.

```html
<chat-widget
        style="--chat-widget-primary-color: #97C8A2; --chat-widget-active-color:#97C8A2"        
        location-id="hgHI41V5EbRCG*****">
</chat-widget>
   <script src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" >
  </script>
```

### **Open-Icon-url**

이 속성을 사용하면 채팅 위젯 열기 버튼의 기본 메시지 아이콘을 변경할 수 있습니다.

```html
<chat-widget
        style="--chat-widget-primary-color: #97C8A2; --chat-widget-active-color:#97C8A2"        
        location-id="hgHI41V5EbRCG*****"
        open-icon-url="https://img.icons8.com/cotton/2x/blood-sample.png">
</chat-widget>
   <script src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" >
  </script>
```

![채팅 위젯 열기 아이콘 커스터마이징](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48127183686/original/gwvRAPgzp_jm8-w5U7UhFz4kkpefUycwmw.png?1628085770)

### **Close-icon-url**

이 속성을 사용하면 채팅 위젯 닫기 버튼의 기본 닫기 아이콘을 변경할 수 있습니다.

```html
<chat-widget
        style="--chat-widget-primary-color: #97C8A2; --chat-widget-active-color:#97C8A2"        
        location-id="hgHI41V5EbRCG*****"
        close-icon-url="https://img.icons8.com/cotton/2x/blood-sample.png">
</chat-widget>
   <script src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" >
  </script>
```

![채팅 위젯 닫기 아이콘 커스터마이징](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48127184178/original/GsAwrDp0M-MLRTze103FditzRyzXXlkhFQ.png?1628085828)

### **Next-prompt-timer**

next-prompt-timer는 사용자가 재방문할 때 웹채팅 위젯이 채팅 버블을 표시하기 전에 대기하는 시간(초)을 결정합니다. 기본값은 86400초(24시간)로, 사용자가 위젯을 닫으면 24시간 동안 프롬프트 버블이 보이지 않습니다. 페이지를 방문할 때마다 채팅 버블이 보이게 하려면 값을 0으로 설정하세요.

```html
<chat-widget
        style="--chat-widget-primary-color: #97C8A2; --chat-widget-active-color:#97C8A2"        
        location-id="hgHI41V5EbRCG*****"
        next-prompt-timer="0">
</chat-widget>
   <script src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" >
  </script>
```

![채팅 프롬프트 타이머 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48127187894/original/UzMWDpr4xEnmapRsucaNV8pNABJikjDDKA.png?1628086231)

### **Server-u-r-l**

기본적으로 채팅 위젯은 이 기본 URL(https://msgsndr.com)을 통해 서버와 통신(리드 제출 등)하지만, 이 속성을 사용하여 다른 서버와 통신할 수 있습니다. 이 속성은 테스트/디버깅 목적으로 사용됩니다.

```html
<chat-widget
        style="--chat-widget-primary-color: #97C8A2; --chat-widget-active-color:#97C8A2"        
        location-id="hgHI41V5EbRCG*****"
        server-u-r-l="https://test-staging.com">
</chat-widget>
   <script src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" >
  </script>
```

# Public API / Events

## APIs

1. **openWidget**: 이 메소드는 버튼 클릭 등 다른 액션 항목에서 프로그래밍 방식으로 위젯을 여는 데 도움이 됩니다.

```javascript
window.leadConnector.chatWidget.openWidget();

var button = document.getElementById("myButton");
button.addEventListener("click",function(e){
    window.leadConnector.chatWidget.openWidget()
},false);

//HTML 
<button id='myButton'>Hello</button>
```

2. **closeWidget**: 이 메소드는 버튼 클릭 등 다른 액션 항목에서 프로그래밍 방식으로 위젯을 닫는 데 도움이 됩니다.

```javascript
window.leadConnector.chatWidget.closeWidget()

var button = document.getElementById("myButton");
button.addEventListener("click",function(e){
    window.leadConnector.chatWidget.closeWidget()
},false);

//HTML 
<button id='myButton'>Hello</button>
```

3. **isActive()**: 이 API는 위젯이 열린 상태(확장된 상태)이면 true를 반환하고, 위젯이 닫힌 상태(축소된 상태)이면 false를 반환합니다.

```javascript
window.leadConnector.chatWidget.isActive()

if(window.leadConnector.chatWidget.isActive()) {
  //do something CRAZY
}
else {
//stay silent
}

//HTML 
<button id='myButton'>Hello</button>
```

4. **API를 통한 localizeWidget**: 이 코드를 사용하면 위젯이 로드된 후 위젯 라벨을 변경할 수 있습니다.

```javascript
window.leadConnector.chatWidget.localizeWidget({"name": "Nombre"})
//이렇게 하면 `Name` 라벨이 `Nombre`로 변경됩니다
//지원되는 라벨의 전체 목록은 로컬화 섹션을 참조하세요
//이상적으로는 `i-1-8n-labels` 속성을 사용해야 합니다
```

![위젯 라벨 현지화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48128186151/original/jBqdi6nPz5ehvH768GIB07K31a76R86Krg.png?1628278617)

5. **i18n: 국제화** - 채팅 위젯은 i18n 언어 코드를 기반으로 한 자동 국제화 지원은 없지만, 속성 이름을 사용하여 위젯 내의 모든 라벨을 변경할 수 있습니다(모든 라벨은 아래 표 참조).

```html
<chat-widget
  location-id="hgHI41V5EbRCGv*****"
  i-1-8n-labels='"{\"name\": \"nombre\", \"phone\": \"teléfono\"}"'>
</chat-widget>
```

| 키 | 기본값(en-US) | 설명 |
|---|---|---|
| name | Name | 이름 필드 라벨 |
| phone | Mobile Phone | 휴대폰 입력 필드 라벨 |
| email | E-mail | 이메일 입력 라벨 |
| message | Message | 메시지 입력 필드 라벨 |
| required | Required | 필수 필드에 대한 오류 메시지 |
| received | Received | 확인 텍스트 아래의 수신 확인 라벨 |
| sending | Sending | 리드 제출이 진행 중일 때 표시 |
| invalid_value | Invalid value | 입력 필드의 잘못된 값에 대한 오류 메시지 |
| send | Send | 제출 버튼 제목 |
| powered_by | Powered by | 에이전시 브랜딩을 위한 Powered by 텍스트 |

## **워드프레스에서 위젯 라벨 변경하기**

현재 WP LeadConnector 플러그인 설정에서 채팅 위젯 라벨을 변경하는 방법은 없지만, 다음 코드를 워드프레스 웹사이트의 푸터에 추가하면 위젯이 로드된 후 라벨을 변경할 수 있습니다.

```html
<script>
window.addEventListener(
        'LC_chatWidgetLoaded',
        function (e) {
          window.leadConnector.chatWidget.localizeWidget({ 
              name: 'Nombre', 
              phone:'teléfono'
              //더 많은 라벨은 위 표를 참조하세요 
            });
        },
        false,
      );
</script>
```

푸터에 코드를 직접 추가하는 것이 불편하다면 [Insert Headers And Footers](https://wordpress.org/plugins/insert-headers-and-footers/) 같은 플러그인을 사용하면 과정이 쉬워집니다.

## Events

1. **LC_chatWidgetLoaded**: 채팅 위젯이 윈도우에서 완전히 로드된 후 이 이벤트를 발생시킵니다.

```javascript
window.addEventListener(
  'LC_chatWidgetLoaded',
  function (e) {
    console.log(e);
  },
  false,
);
```

---
*원문 최종 수정: 2021년 9월 16일*
*Hyperclass 사용 가이드 — hyperclass.ai*