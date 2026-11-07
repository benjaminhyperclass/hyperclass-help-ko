---
원문: /support/solutions/articles/155000002027-page-view-triggers-for-funnels-and-websites
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Funnel/Website Pageview(퍼널/웹사이트 페이지 조회)

**Page Visited**(페이지 방문) 트리거를 쓰면 방문자가 퍼널이나 웹사이트의 페이지를 열 때 워크플로우를 자동으로 시작할 수 있어요. 이 문서에서는 트리거를 만드는 순서를 설명해요. 고객이 어떤 페이지를 방문했는지에 따라 자동화를 실행하면 고객과 소통하고 방문 기록을 추적하는 데 도움이 돼요.

## 워크플로우에서 페이지 조회 트리거 만들기

아래 순서대로 퍼널/웹사이트 페이지 조회 트리거를 만들 수 있어요.

### 1단계: 워크플로우 열기

1. 왼쪽 메뉴에서 **자동화**를 열고 새 워크플로우를 만들어요.

   ![자동화 메뉴에서 새 워크플로우를 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020973553/original/nXTnGMWJdS-pdIAns26j9v7UiC2othNEXg.png?1708417538)

### 2단계: 트리거 추가 — Funnel/Website Pageview

1. 워크플로우 트리거 목록에서 **Funnel/Website Pageview**(퍼널/웹사이트 페이지 조회)를 선택해요.

   ![워크플로우 트리거 목록에서 Funnel/Website Pageview를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020973786/original/fVNObjli6e958eljQVGICfbxBAT9l8YYsg.png?1708417652)

{% hint style="info" %}
이 트리거는 연락처가 퍼널이나 웹사이트를 조회했을 때 작동해요.
{% endhint %}

### 3단계: 필터 추가

1. 페이지 조회를 감지할 퍼널이나 웹사이트를 선택해요.

   ![트리거 필터에서 퍼널 또는 웹사이트를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020975079/original/Cxt50Fs_Ae2Cem0UuZuC6Pf8LkuG3AMffg.png?1708418376)

### 4단계: 특정 페이지 또는 Page path 지정

- 퍼널이나 웹사이트 전체가 아니라 특정 페이지에서만 트리거가 작동하게 할 수 있어요.

  ![특정 페이지를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020975227/original/FZQNkI7DaPtWdIBvMuTIJsiT7pMMakNzWA.png?1708418509)

- 특정 페이지 URL을 지정해서 트리거가 작동하게 할 수도 있어요. 이때는 **Page path**(페이지 경로)를 사용해요.

  ![특정 페이지 URL을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020975610/original/YIGdMKO8Kq9t_BDDBlA5mvesQPOReO2o_A.png?1708418716)

### 5단계: UTM 파라미터 추가

- 캠페인에 맞는 UTM 파라미터를 지정할 수도 있어요.

  ![UTM 파라미터를 지정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155020975721/original/EafP-1Lypzgt9XpKpHVsDoOqya70G6oulQ.png?1708418793)

## 자주 묻는 질문

### 여러 웹사이트나 퍼널을 한꺼번에 추적할 수 있나요?

네. 여러 웹사이트나 퍼널을 선택해서 페이지 방문을 함께 추적할 수 있어요. 고객의 참여 현황을 폭넓게 확인하는 데 도움이 돼요.

### 특정 페이지나 페이지 URL을 방문했을 때만 워크플로우를 시작할 수 있나요?

네. 특정 페이지나 페이지 URL을 지정해서 자동화를 시작할 수 있어요. 고객 참여 과정을 더 세밀하게 관리할 수 있어요.

### 페이지 조회 트리거에 UTM 파라미터를 넣을 수 있나요?

네. UTM 파라미터를 추가하면 트리거 조건을 더 좁힐 수 있어요. 특정 마케팅 캠페인 조건에 맞춰 자동화를 실행할 수 있어요.
