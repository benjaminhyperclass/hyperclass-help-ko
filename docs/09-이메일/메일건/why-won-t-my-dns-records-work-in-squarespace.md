---
원문: /support/solutions/articles/48001153705-why-won-t-my-dns-records-work-in-squarespace-
번역일: 2026-11-07
카테고리: 09-이메일
---

# Squarespace에서 DNS 레코드가 저장되지 않을 때

Squarespace는 Google Chrome 브라우저에서 DNS 레코드를 바꾸는 것을 막아요. 이 문서에서는 문제가 생기는 이유와 간단한 해결 방법을 안내해요.

## Squarespace에서 DNS 변경이 실패하는 이유

Squarespace 지원 문서에 따르면, Squarespace는 **Google Chrome** 브라우저에서 DNS 레코드를 변경하는 것을 허용하지 않아요. Chrome에서 Squarespace 도메인 설정에 로그인한 상태라면 새 DNS 레코드나 수정한 DNS 레코드가 저장되지 않을 수 있어요. 발송 도메인을 연결할 때 필요한 레코드도 마찬가지예요. 화면에 뚜렷한 오류가 항상 표시되는 것도 아니에요.

## 해결 방법: 다른 브라우저 사용하기

DNS 레코드를 추가하거나 수정할 때 다른 브라우저를 쓰면 돼요.

1. Chrome 대신 **Firefox**, **Safari**, **Microsoft Edge** 중 하나로 Squarespace 도메인/DNS 설정을 열어요.
2. DNS 레코드를 다시 추가하고 저장해요. 문제없이 저장될 거예요.

{% hint style="info" %}
Chrome이 아닌 브라우저에서 한 번 저장하면 레코드는 그대로 유지돼요. 이후에도 계속 그 브라우저를 쓸 필요는 없어요.
{% endhint %}

## 자주 묻는 질문

### 이 문제는 Squarespace 쪽 문제인가요, 아니면 우리 쪽 문제인가요?

Squarespace 쪽 문제예요. Squarespace 지원팀이 Google Chrome에서 한 DNS 레코드 수정이 제대로 저장되지 않는다고 확인했어요.

### DNS 레코드를 추가할 때 어떤 브라우저를 쓸 수 있나요?

Firefox, Safari, Microsoft Edge에서는 정상적으로 작동하는 것이 확인되었어요. 이런 제한이 알려진 브라우저는 Chrome뿐이에요.

### 이미 Chrome에서 레코드를 추가해 봤는데, 전부 다시 해야 하나요?

다른 브라우저에서 같은 레코드를 다시 추가하기만 하면 돼요. 앞서 시도한 내용이 저장되지 않았다면 되돌릴 것은 없어요. 레코드를 올바르게 다시 입력하세요.

### 모바일 Chrome에서도 같은 문제가 생기나요?

데스크톱 Chrome에서 보고된 문제예요. 모바일 Chrome에서도 같은 문제가 생기면 다른 브라우저나 앱으로 바꿔 보세요. 그래도 해결될 거예요.

### DNS 레코드가 실제로 저장됐는지 어떻게 확인하나요?

저장한 뒤 Squarespace DNS 설정 페이지를 새로고침해서 레코드가 목록에 있는지 확인하세요. 몇 분 기다린 뒤 DNS 조회 도구로 전파 상태를 확인할 수도 있어요.

### 저장한 DNS 레코드가 전파되려면 시간이 얼마나 걸리나요?

보통은 빠르게 전파되지만, 도메인의 TTL 설정에 따라 몇 분에서 24~48시간까지 걸릴 수 있어요.
