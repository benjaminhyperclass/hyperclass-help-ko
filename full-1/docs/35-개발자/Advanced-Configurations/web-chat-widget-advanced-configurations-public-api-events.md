---
원문: https://help.gohighlevel.com/support/solutions/articles/48001191051-web-chat-widget-advanced-configurations-public-api-events
번역일: 2026-11-06
카테고리: 35-개발자
---

# 웹 채팅 위젯 고급 설정과 공개 API·이벤트

채팅 위젯 빌더에서 복사한 코드에 속성을 직접 추가해 고급 설정을 하는 방법과, 위젯을 제어하는 공개 API·이벤트를 안내해요. 빌더 화면에는 없는 설정이라서, 코드를 수정할 수 있을 때 활용하세요.

채팅 위젯 빌더에서는 많은 설정을 할 수 있어요. 다만 대부분의 사용자가 쉽게 쓸 수 있도록, 사용 빈도가 낮은 일부 설정은 빌더에 넣지 않았어요. 이런 설정은 빌더에서 복사한 코드에 속성을 추가해서 적용해요.

아래 코드를 빌더에서 복사한 코드라고 가정할게요. 이 코드에 새 속성을 추가해서 고급 설정을 할 수 있어요.

```
  <chat-widget
            style="--chat-widget-primary-color: #97C8A2; --chat-widget-active-color:#97C8A2"        
            location-id="hgHI41V5EbRCG*****">
    </chat-widget>
       <script src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" >
      </script>
```

## 고급 설정 속성

### `open-icon-url`

채팅 위젯을 여는 버튼의 기본 메시지 아이콘을 다른 이미지로 바꿔요.

```
 <chat-widget
            style="--chat-widget-primary-color: #97C8A2; --chat-widget-active-color:#97C8A2"        
            location-id="hgHI41V5EbRCG*****"
            open-icon-url="https://img.icons8.com/cotton/2x/blood-sample.png">
    </chat-widget>
       <script src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" >
      </script>
```

![열기 버튼 아이콘을 바꾼 채팅 위젯](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48127183686/original/gwvRAPgzp_jm8-w5U7UhFz4kkpefUycwmw.png?1628085770)

### `close-icon-url`

채팅 위젯을 닫는 버튼의 기본 닫기 아이콘을 다른 이미지로 바꿔요.

```
<chat-widget
            style="--chat-widget-primary-color: #97C8A2; --chat-widget-active-color:#97C8A2"        
            location-id="hgHI41V5EbRCG*****"
            close-icon-url="https://img.icons8.com/cotton/2x/blood-sample.png">
    </chat-widget>
       <script src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" >
      </script>
```

![닫기 버튼 아이콘을 바꾼 채팅 위젯](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48127184178/original/GsAwrDp0M-MLRTze103FditzRyzXXlkhFQ.png?1628085828)

### `next-prompt-timer`

방문자가 다시 방문했을 때 채팅 말풍선을 보여 주기까지 기다리는 시간을 초 단위로 정해요. 기본값은 86400초(24시간)예요. 방문자가 위젯을 닫으면 24시간 동안 말풍선이 보이지 않는다는 뜻이에요. 페이지를 방문할 때마다 말풍선을 보여 주려면 값을 0으로 설정하세요.

```
  <chat-widget
            style="--chat-widget-primary-color: #97C8A2; --chat-widget-active-color:#97C8A2"        
            location-id="hgHI41V5EbRCG*****"
            next-prompt-timer="0">
    </chat-widget>
       <script src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" >
      </script>
```

![next-prompt-timer를 0으로 설정한 채팅 위젯](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48127187894/original/UzMWDpr4xEnmapRsucaNV8pNABJikjDDKA.png?1628086231)

### `server-u-r-l`

채팅 위젯은 기본적으로 `https://msgsndr.com` 주소의 서버와 통신해요. 리드 제출 같은 동작도 이 서버로 전달돼요. 이 속성을 쓰면 다른 서버와 통신하도록 바꿀 수 있어요. 테스트나 디버깅할 때 사용하세요.

```
    <chat-widget
            style="--chat-widget-primary-color: #97C8A2; --chat-widget-active-color:#97C8A2"        
            location-id="hgHI41V5EbRCG*****"
            server-u-r-l="https://test-staging.com">
    </chat-widget>
       <script src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" >
      </script>
```

# 공개 API / 이벤트

## API

1. `openWidget`: 버튼 클릭 같은 다른 동작에서 코드로 위젯을 열어요.

   `window.leadConnector.chatWidget.openWidget();`

   ```
   var button = document.getElementById("myButton");
   button.addEventListener("click",function(e){
       window.leadConnector.chatWidget.openWidget()
   },false);

   //HTML 
   <button id='myButton'>안녕하세요</button>
   ```

2. `closeWidget`: 버튼 클릭 같은 다른 동작에서 코드로 위젯을 닫아요.

   `window.leadConnector.chatWidget.closeWidget()`

   ```
   var button = document.getElementById("myButton");
   button.addEventListener("click",function(e){
       window.leadConnector.chatWidget.closeWidget()
   },false);

   //HTML 
   <button id='myButton'>안녕하세요</button>
   ```

3. `isActive()`: 위젯이 열려(펼쳐져) 있으면 true, 닫혀(접혀) 있으면 false를 반환해요.

   `window.leadConnector.chatWidget.isActive()`

   ```
   if(window.leadConnector.chatWidget.isActive()) {
     // 위젯이 열려 있을 때 실행할 동작
   }
   else {
   // 위젯이 닫혀 있을 때 실행할 동작
   }

   //HTML 
   <button id='myButton'>안녕하세요</button>
   ```

4. `localizeWidget`(API로 레이블 변경): 위젯을 불러온 뒤에 위젯 레이블을 바꿔요.

   ```
   window.leadConnector.chatWidget.localizeWidget({"name": "Nombre"})
   // `Name` 레이블이 `Nombre`로 바뀌어요
   // 지원하는 전체 레이블 목록은 아래 다국어(i18n) 항목의 표를 참고하세요
   // 가능하면 `i-1-8n-labels` 속성을 사용하는 것이 좋아요
   ```

   ![localizeWidget으로 Name 레이블을 Nombre로 바꾼 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48128186151/original/jBqdi6nPz5ehvH768GIB07K31a76R86Krg.png?1628278617)

5. 다국어(i18n): 채팅 위젯은 i18n 언어 코드에 따라 자동으로 언어가 바뀌지 않아요. 대신 속성 이름을 사용해 위젯 안의 레이블을 원하는 문구로 바꿀 수 있어요. 바꿀 수 있는 레이블은 아래 표를 참고하세요.

   ```
   <chat-widget
         location-id="hgHI41V5EbRCGv*****"
         i-1-8n-labels='"{\"name\": \"nombre\", \"phone\": \"teléfono\"}"'>
   </chat-widget>
   ```

   | 키 | 기본값(en-US) | 설명 |
   | --- | --- | --- |
   | name | Name | 이름 입력란의 레이블 |
   | phone | Mobile Phone | 휴대폰 번호 입력란의 레이블 |
   | email | E-mail | 이메일 입력란의 레이블 |
   | message | Message | 메시지 입력란의 레이블 |
   | required | Required | 필수 입력란을 비웠을 때 보이는 오류 메시지 |
   | received | Received | 확인 문구 아래에 보이는 접수 완료 레이블 |
   | sending | Sending | 리드를 제출하는 동안 보이는 문구 |
   | invalid\_value | Invalid value | 입력란에 잘못된 값을 넣었을 때 보이는 오류 메시지 |
   | send | Send | 제출 버튼의 제목 |
   | powered\_by | Powered by | 에이전시 브랜딩용 Powered by 문구 |

### WordPress에서 위젯 레이블 바꾸기

현재 WordPress용 하이퍼클래스 플러그인 설정에서는 채팅 위젯 레이블을 바꿀 수 없어요. 대신 WordPress 웹사이트의 푸터에 아래 코드를 추가하면, 위젯을 불러온 뒤에 레이블이 바뀌어요.

```
     <script>
window.addEventListener(
        'LC_chatWidgetLoaded',
        function (e) {
          window.leadConnector.chatWidget.localizeWidget({ 
              name: 'Nombre', 
              phone:'teléfono'
              //더 많은 레이블은 위 표를 참고하세요
            });
        },
        false,
      );
</script>
```

푸터에 코드를 직접 넣기가 부담스럽다면 [Insert Headers And Footers](https://wordpress.org/plugins/insert-headers-and-footers/) 같은 플러그인을 쓰면 쉽게 추가할 수 있어요.

## 이벤트

1. `LC_chatWidgetLoaded`: 채팅 위젯이 창에 완전히 불러와진 뒤에 발생하는 이벤트예요.

   ```
         window.addEventListener(
           'LC_chatWidgetLoaded',
           function (e) {
             console.log(e);
           },
           false,
         );
   ```
