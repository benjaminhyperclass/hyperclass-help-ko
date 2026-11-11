---
원문: /support/solutions/articles/48001208702-how-to-create-invoices-in-highlevel
번역일: 2026-11-06
카테고리: 08-결제
---

# 인보이스 만들고 보내기

인보이스를 만들고, 수정하고, 할인과 세금을 넣고, 고객에게 보내는 방법을 안내해요. 인보이스를 쓰면 진행한 작업의 대금을 받을 수 있고, 거래 내역도 한곳에서 관리할 수 있어요.

## 개요

서브 계정에서 만들어 둔 상품으로 고객에게 인보이스를 보낼 수 있어요.

{% hint style="info" %}
Stripe Connect 없이 인보이스를 쓴다면 "Stripe Connect 없이 수동 결제를 기록하는 인보이스 사용 가이드"를 참고하세요.

Stripe Connect 없이 인보이스를 쓰면 결제 내역을 직접 기록해야 해요.
{% endhint %}

## 새 인보이스 만들기

▶ 영상 [9강 3부 32:42](https://www.youtube.com/watch?v=mNj3LJI6oTY&t=1962s)

1. **결제** 메뉴로 이동한 다음 **인보이스** 탭을 클릭해요.
2. **신규** 버튼을 클릭하고 새 인보이스를 작성해요.

   ![신규 인보이스 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295684124/original/o8JIhScbKsJJ4rdKJvjjJiTXG2vCbLNgTw.png?1683126566)

{% hint style="info" %}
**신규** 버튼 옆의 톱니바퀴 아이콘(주황색 화살표)을 클릭하면 공통 서비스 약관과 메모를 추가할 수 있어요.
{% endhint %}

## 인보이스 정보 수정하기

1. 보내는 사람 정보(from info)는 해당 텍스트를 클릭해서 수정해요.

   ![보내는 사람 정보 수정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189118323/original/i55oqo8Exy4InrVRO1VUgQx57NhlOppPBA.png?1644520846)

2. 이미지를 클릭하면 미디어 라이브러리가 열려요. 여기서 기존 이미지를 고르거나 새 이미지를 올려 바꿀 수 있어요.

   ![이미지 변경 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189118316/original/zNv44n1njtS4kJZj0FIdXI3d3w3WsMSxPQ.png?1644520844)

3. 고객을 추가하고 **인보이스 번호**, **Issue**(발행일), **Due**(마감일) 날짜를 수정해요.

   ![고객 추가 및 인보이스 번호, 날짜 수정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189508034/original/a-GK6JrGcLypdBYpcF7Y0VWKD7uavRw8Bw.png?1644597978)

4. **Add an item**(항목 추가)을 클릭해서 **상품** 탭에 만들어 둔 상품을 추가해요.

   ![항목 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189455786/original/_4cKxr4KtRAx0YNTl2KPA-urzKx0_ffnAg.png?1644590904)

5. 상품을 추가하면 가격과 수량을 수정할 수 있어요.

   ![가격과 수량 수정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189492869/original/TkJ3cuE2ZufmAewqLdQoDtZ9pe65giug8A.png?1644595130)

## 인보이스에 세금 추가하기

1. **세금 설정**을 클릭해요.

   ![세금 설정 클릭 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189495214/original/-r2mTlvPVoWwWEFBjJHOta2cwdBEvmj9rg.png?1644595523)

2. **Add Tax**(세금 추가)를 클릭해요.

   ![세금 추가 클릭 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189495388/original/dQmDYh8f6NAFbwackNAKS_qJqsDENnIONQ.png?1644595576)

3. **Add Tax**를 클릭한 다음 아래 내용을 입력해요.
   1. 세금 이름
   2. 세율(%)
   3. **설명 추가**에 설명 또는 세금 ID 번호

## 인보이스에 할인 추가하기

**add discount**(할인 추가) 아이콘을 클릭하면 인보이스에 할인을 넣을 수 있어요.

![할인 추가 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189503863/original/cSNM76KK-kDKkqMW9OTm_BkzJ1M6dINjpw.png?1644597092)

## 인보이스 보내기

1. 인보이스를 다 만들었으면 오른쪽 위 모서리의 초록색 버튼을 클릭해서 고객에게 보내요.

   ![인보이스 보내기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189118315/original/lrBLj06j7mN3tZaqF3R1ZCpbGewMiPxRxw.png?1644520844)

2. 인보이스는 이메일과 문자로 보낼 수 있고, 테스트 모드로도 보낼 수 있어요. **Advanced options**(고급 옵션)를 클릭하면 라이브 모드와 테스트 모드를 전환할 수 있어요.

   ![라이브 모드와 테스트 모드 전환 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189508144/original/dMdDQH7FdcMqn9kpDzIdmFBwoyGyn2rF9w.png?1644598007)

## 인보이스 상태 확인하기

1. **인보이스** 탭으로 이동하면 인보이스 목록과 각 상태를 볼 수 있어요.
2. 상태와 기간으로 인보이스를 필터링할 수도 있어요.

![인보이스 목록과 상태 필터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295684580/original/a-rTtlcGha6FfQwNGP6l-OG_vK70hsLFwQ.png?1683126642)

## 거래 내역 탭에서도 인보이스 확인하기

인보이스와 관련해 성공했거나 실패한 거래를 찾아볼 수 있고, 인보이스를 바로 열 수도 있어요. **결제 > 거래 내역**에서 확인하세요.

![거래 내역 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189514063/original/9hVpI6UpRIiXpr4udM0BzxMRzfLRyAmrsw.png?1644598898)

{% hint style="info" %}
**거래 내역** 탭은 새 UI에서만 볼 수 있어요.
{% endhint %}
