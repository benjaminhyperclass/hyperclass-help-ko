---
원문: https://help.gohighlevel.com/support/solutions/articles/155000001718-recover-lost-sales-with-automatic-abandoned-checkout-emails
번역일: 2026-11-06
카테고리: 37-이커머스-스토어
---

# 결제 중단 이메일로 놓친 매출 되찾기

고객이 장바구니에 상품을 담아 두고 결제를 마치지 않으면 매출 기회를 놓치게 돼요. 이 문서에서는 하이퍼클래스의 결제 중단 이메일(자동 장바구니 이탈 이메일)이 무엇인지, 온라인 스토어에 어떻게 설정하는지 알려 드려요. 설정 화면에 들어가는 방법, 이메일 템플릿을 꾸미는 방법, 전환율을 높이는 방법을 차례로 안내해요.

## 결제 중단 이메일이란?

고객이 장바구니에 상품을 담고 결제를 시작해서 이메일 주소까지 입력했지만 구매를 끝내지 않으면, 결제 중단 이메일이 발송돼요. 시스템이 이렇게 중단된 결제를 감지해서 고객이 돌아와 결제를 마치도록 안내하는 이메일을 자동으로 보내요. 이 이메일에는 이탈한 장바구니로 돌아가는 링크가 들어 있어요.

이 기능은 기본으로 켜져 있고, 별도 작업 없이 백그라운드에서 동작해요. 스토어 운영자가 직접 챙기지 않아도 놓친 매출을 되찾을 수 있어요. <!-- 검토 필요: 원문 내용이 서로 다름 (기본으로 켜져 있다고 하면서, 아래에서는 장바구니 이탈 이메일 활성화 토글을 직접 켜도록 안내함) -->

## 결제 중단 이메일의 장점

- 매출 회복: 중간에 나간 고객을 다시 불러와 놓친 기회를 매출로 바꿀 수 있어요.
- 완전 자동화: 켜 두면 별도 설정 없이 시스템이 추적하고 이메일을 보내요.
- 메시지 사용자 지정: 브랜드 말투와 장바구니 금액에 맞게 이메일 내용을 바꿀 수 있어요.
- 상품 자동 표시: 장바구니에 남은 상품을 그대로 보여 주어 고객이 다시 관심을 갖게 해요.

## 장바구니 복구 링크는 이렇게 동작해요

고객은 결제 중단 이메일에 담긴 고유 링크로 어떤 기기에서든 결제를 이어갈 수 있어요. 링크의 동작 방식을 알아 두면 고객에게 기대치를 정확히 안내할 수 있어요.

- 기기 간 이용: 링크는 기기, 브라우저, 세션이 달라도 열려요.
- 장바구니당 링크 1개: URL 하나는 이탈한 세션 하나를 뜻해요. 해당 세션의 상품만 보여요.
- 보기 전용 장바구니: 이 링크에서는 새 상품을 담을 수 없어요.
- 실시간 반영: 링크를 연 시점의 최신 상품명과 가격이 결제 화면에 표시돼요.
- 재고 반영: 상품이 **품절**이면 **Remove item**(항목 제거) 버튼이 나타나요.
- 비회원 결제 지원: 비회원 고객에게는 결제를 마칠 수 있는 임시 세션이 제공돼요.
- 구매할 수 없는 장바구니 처리: 이탈한 장바구니의 상품이 모두 삭제됐거나 구매할 수 없으면 결제 화면에 **Continue Shopping**(쇼핑 계속하기) 버튼이 대신 표시돼요.

## 결제 중단 알림 설정하기

장바구니 이탈 이메일 관련 설정은 모두 서브 계정에서 해요. 아래 순서대로 따라 하세요.

### 결제 설정 열기

서브 계정의 왼쪽 메뉴에서 **결제**로 들어가세요. 체크아웃 알림을 포함해 이커머스 관련 설정을 모두 여기서 관리해요.

![왼쪽 메뉴의 결제 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050807828/original/MV-YzpLlS8GDyaFsNhCkCocAL1-BXtnv4A.png?1754059146)

### 설정 탭 선택하기

**결제** 화면 위쪽의 **설정** 탭을 클릭하세요. 장바구니 이탈 이메일과 주문 관련 자동화를 설정하는 화면으로 이동해요.

![결제 화면의 설정 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050807857/original/u8dX0MQ7qJiyho6l2dRjXFF95X9Unuvi-A.png?1754059177)

### 알림 메뉴로 이동하기

설정 화면의 왼쪽 메뉴에서 **알림**을 선택하세요. 장바구니 이탈 알림과 그 밖의 자동 이메일을 관리하는 영역이 열려요.

![설정 화면의 알림 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050807934/original/sAnpEUQK9gjQ0T3MW09pFE-pa8g6bIhkfQ.png?1754059252)

### 장바구니 이탈 이메일 켜기

**장바구니 이탈 이메일 활성화** 토글을 켜세요. 결제 중간에 나간 고객에게 자동으로 알림이 가요. 이메일로 놓친 매출을 되찾는 첫 단계예요.

![장바구니 이탈 이메일 활성화 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050807977/original/sB5tiHtwRMS_U7FDSrMbzs7KUYlzq0GHsw.png?1754059280)

### 이메일 템플릿 선택하기

**이메일 템플릿 선택** 드롭다운에서 이메일의 레이아웃과 내용을 정할 템플릿을 고르세요. 기본 템플릿을 써도 되고, **이메일 빌더**로 직접 만든 템플릿을 연결해도 돼요.

![이메일 템플릿 선택 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050808022/original/wUfq3SJZ7asSUlO6jIzO0JHi46_vispS-A.png?1754059332)

### 이메일 제목 입력하기

장바구니 이탈 이메일이 발송될 때 고객의 받은편지함에 보이는 제목을 입력하세요. 친근하고 행동을 이끄는 문구를 쓰면 고객이 구매를 마치도록 유도하기 좋아요.

![이메일 제목 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050808073/original/iVtVrbNtzDYwHr_btSsAOm2YPBIdGcqEBQ.png?1754059385)

### 발송 시점 정하기

**다음 이후 전송** 옵션으로 이메일을 보내기 전에 얼마나 기다릴지 정하세요. 시간 또는 분 단위로 고를 수 있으니 후속 안내 전략에 맞게 설정하세요.

![다음 이후 전송 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050808095/original/CotZdiNBVnVniam150AR--AWwgh5YGsEeQ.png?1754059419)

## 결제 중단 이메일 꾸미기

후속 이메일의 효과를 높이려면 디자인과 내용을 모두 다듬어 보세요. 아래 두 가지 방법이 있어요.

### 기본 이메일 템플릿 바꾸기

하이퍼클래스에는 기본 결제 중단 이메일이 들어 있어요. 직접 만든 템플릿을 쓰면 더 매력적인 이메일을 보낼 수 있어요.

### 이메일 템플릿 열기

**마케팅 > 이메일 > 템플릿**으로 이동해 결제 중단 안내에 쓸 이메일을 만들거나 편집하세요. **이메일 빌더**로 브랜드에 맞는 개인화 메시지를 디자인할 수 있어요.

![마케팅 메뉴의 이메일 템플릿 경로](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050813935/original/d38rp-4LN-cKkPy_ha5ECydNl3GCWy9hQg.png?1754065431)

### 템플릿 탭 사용하기

**이메일 마케팅**의 **템플릿** 탭을 클릭하면 저장해 둔 이메일 디자인이 모두 보여요. 여기서 장바구니 이탈 알림에 쓸 템플릿을 고르거나 새로 만들 수 있어요.

![이메일 마케팅의 템플릿 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050814002/original/AIzuOos0yNzREFPwyxRIDASErDVrovA0FQ.png?1754065503)

### 템플릿 만들기 또는 선택하기

**+ 신규** 버튼을 클릭하면 새 이메일 템플릿을 만들 수 있어요. 이미 있는 템플릿을 쓰려면 목록에서 이름을 클릭하세요. 이 템플릿을 장바구니 이탈 알림에 연결하면 원하는 메시지를 보낼 수 있어요.

![신규 버튼과 템플릿 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050814014/original/fvxZ5xaTv0uaRGZmZiqUeQBMCBBXhmCxMQ.png?1754065538)

### 커스텀 값 추가하기

이메일 편집기 도구 모음에서 **커스텀 값 추가** 아이콘을 클릭하면 `{{ ecom_checkout_page_url }}` 같은 이커머스 필드를 넣을 수 있어요. 이메일에서 고객의 이탈한 장바구니나 상품 목록으로 바로 연결할 수 있어요.

![이메일 편집기의 커스텀 값 추가 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050814045/original/BOCBQ5BEuv4BY-0KFTHFecYPJm9mv6Zn3Q.png?1754065575)

### 이커머스 링크 넣기

**커스텀 값** 메뉴에서 **이커머스**를 선택하면 온라인 스토어 전용 동적 필드가 나와요. 장바구니 복구에 쓰는 결제 페이지 URL, 상품 목록 페이지 URL 등이 여기에 있어요.

![커스텀 값 메뉴의 이커머스 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050814075/original/t4oz8ZCsuf8ZcNbO5QIdT_JwY1P8iduodw.png?1754065613)

### 결제 링크와 상품 링크 추가하기

**Checkout page URL**(결제 페이지 URL)과 **상품 목록 페이지** 중에서 골라 이메일에 동적 링크를 넣으세요. 고객을 이탈한 장바구니로 보내거나, 스토어의 전체 상품 목록으로 안내할 수 있어요.

![결제 페이지 URL과 상품 목록 페이지 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050814117/original/U_IUPKaL2yHXNCVri322JebdBBUxXs5cdw.png?1754065654)

## 장바구니 요소로 담긴 상품 보여 주기

장바구니에 남은 상품의 이미지, 이름, 가격, 수량을 그대로 보여 주면 이메일이 더 개인화돼요.

설정 방법은 다음과 같아요.

1. **이메일 빌더**에서 **이커머스** 요소 아래의 **Shopping Cart**(장바구니) 요소를 찾으세요.
2. 이메일 레이아웃으로 끌어다 놓으세요.
3. 고객이 결제 페이지까지 갔다면 장바구니 내용이 자동으로 채워져요.

### Shopping Cart 요소 사용하기

**Shopping Cart** 요소를 이메일 레이아웃으로 끌어다 놓으면 고객이 두고 간 상품이 자동으로 표시돼요. 상품 이름, 가격, 수량이 이메일에 바로 보여서 개인화된 시각 효과를 줄 수 있어요.

![이메일 레이아웃에 놓은 Shopping Cart 요소](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050814190/original/nMpiGFw-DmyEmpB0lJ-4eQLY5XVufJjdXA.png?1754065712)

{% hint style="info" %}
시스템이 장바구니 데이터를 확보했을 때만 동작해요. 보통 고객이 결제 페이지에 도착해서 이메일 주소를 입력한 경우가 해당돼요.
{% endhint %}

## 자주 묻는 질문

### 결제 중단 이메일을 끌 수 있나요?

네. 서브 계정에서 **결제 > 설정 > 알림**으로 이동해 이메일 토글을 끄세요.

### 퍼널이나 웹사이트의 주문 폼에서도 작동하나요?

아니요. 자동 결제 중단 이메일은 **결제**에서 관리하는 스토어 결제에만 적용돼요. 퍼널이나 웹사이트의 주문 폼에서는 발송되지 않아요. 이런 경우에는 워크플로우를 만들어 주문 폼 방문을 추적하고, 일정 시간이 지나도 결제 기록이 없으면 후속 메시지를 보내도록 설정하세요.

### 고객이 이메일 주소를 입력하지 않으면 어떻게 되나요?

알림이 발송되지 않아요. 장바구니 복구 이메일은 이메일 주소가 있어야 발송돼요.

### 이메일 발송 시점을 바꿀 수 있나요?

네. 기본 대기 시간은 10시간이고, 같은 알림 설정 화면에서 바꿀 수 있어요.

### 장바구니 이탈 알림을 여러 번 보낼 수 있나요?

현재 하이퍼클래스는 장바구니 이탈 한 건당 자동 결제 중단 알림을 1번만 보낼 수 있어요.

### 결제 중단 알림을 이메일 대신 SMS로 보낼 수 있나요?

기본 설정으로는 안 돼요. 이 기능은 이메일을 보내도록 만들어져 있어요. 커스텀 워크플로우를 만들어 SMS를 직접 보내거나 자동화의 일부로 보낼 수 있어요.

### 장바구니 복구 링크를 다른 사람에게 공유할 수 있나요?

네. 링크는 기기, 브라우저, 세션이 달라도 열려요.

### 고객이 링크에서 새 상품을 담을 수 있나요?

아니요. 이탈한 장바구니의 내용만 볼 수 있는 보기 전용 결제 화면이에요.

### 이탈한 장바구니의 상품이 모두 구매할 수 없는 상태면 어떻게 되나요?

이탈한 장바구니의 상품이 모두 삭제됐거나 구매할 수 없으면, 결제 화면에 **Continue Shopping**(쇼핑 계속하기) 버튼이 대신 표시돼요.
