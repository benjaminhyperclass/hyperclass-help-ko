---
원문: https://help.gohighlevel.com/support/solutions/articles/48001210187-my-crm-data-is-loading-slowly-what-can-i-do-
번역일: 2026-11-07
카테고리: 36-기타
---

# CRM 데이터가 느리게 불러와질 때 해결 방법

대시보드가 느리게 열리거나 특정 메뉴에서 데이터가 한참 뒤에야 나타난다면, 본인이나 고객의 브라우저에 문제가 있을 수 있어요. 아래 순서대로 확인해 보세요.

## 1단계. 시크릿 창으로 로그인해서 확인하기

시크릿 창(incognito window)으로 로그인한 뒤에도 같은 문제가 생기는지 확인하세요.

시크릿 창에서도 문제가 계속되면 브라우저 캐시와 관련된 문제예요. 다음 단계로 넘어가세요.
<!-- 검토 필요: 원문 내용이 서로 다름 -->

![시크릿 창으로 로그인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48194269767/original/1IAKLhCYcJZpCztElgqhO-okHu0QPkhPTg.gif?1645727222)

## 2단계. 브라우저 캐시 삭제하기

사용자에게 브라우저 캐시를 삭제하고 페이지를 새로고침하도록 안내하세요. 사용자는 다시 로그인해야 해요.

캐시를 삭제하려면 사용하는 브라우저의 주소창에 아래 주소를 붙여넣으세요.

- Chrome: chrome://settings/siteData
- Edge: edge://settings/clearBrowserData?search=cache

```
사용하는 브라우저가 목록에 없다면, 쿠키/캐시 삭제 방법을 검색해서 확인하세요.
```

이 방법으로도 해결되지 않으면 다음 단계로 넘어가세요.

## 3단계. 확장 프로그램 끄기

문제가 계속된다면 브라우저에 설치된 확장 프로그램 때문일 수 있어요. 사용자에게 확장 프로그램을 모두 끄고 다시 확인해 달라고 요청하세요.

이 단계로 해결되지 않으면 2단계로 이동하세요.
<!-- 검토 필요: 원문 내용이 서로 다름 -->

![브라우저 확장 프로그램 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48194324559/original/wmg9Cw98teEL4mP1jxjDY-zKVqm7vnPfwg.png?1645741105)

## 4단계. 다른 브라우저로 접속하기

Firefox, Safari, Chrome 등 다른 브라우저로 접속해 보세요. 그래도 문제가 계속되면 다음 단계로 넘어가세요.

## 5단계. 오류 메시지 캡처해서 티켓 접수하기

1. 문제가 생기는 페이지로 이동하세요.
2. 화면에서 마우스 오른쪽 버튼을 클릭하세요.
3. **검사**(Inspect)를 클릭하세요.
4. **콘솔** 탭을 클릭하세요.
5. 여기에 표시된 오류 메시지를 스크린샷으로 캡처하세요.
6. 캡처한 스크린샷과 함께 하이퍼클래스 고객지원에 티켓을 접수하세요.

[동영상](https://www.loom.com/embed/62c1aa1e95f543a7a868c399859b5e51)
