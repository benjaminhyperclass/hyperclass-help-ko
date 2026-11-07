---
원문: https://help.gohighlevel.com/support/solutions/articles/48001202185-text-to-pay-links
번역일: 2026-11-07
카테고리: 08-결제
---

# 대화에서 문자로 결제 링크 보내기 (Text-To-Pay)

Text-To-Pay 링크를 쓰면 대화 화면에서 바로 SMS로 결제를 요청하고 받을 수 있어요. 웹사이트가 없어도 돼요.

[동영상](https://www.youtube.com/embed/2UJLhrrWANM?&wmode=opaque)

## Text-To-Pay 링크란?

Text-To-Pay 링크는 대화 안에서 SMS로 보내는 보안 결제 요청이에요. 체크아웃 링크가 만들어져서, 고객은 몇 번만 눌러 결제할 수 있어요. 결제 과정이 간단해지고 수금도 빨라져요. 결제 내역이 연락처의 대화에 함께 남아서 후속 관리와 추적도 쉬워요.

## Text-To-Pay 링크의 장점

- 빠른 수금: 어떤 SMS 대화에서든 바로 결제할 수 있는 링크를 보낼 수 있어요. 단계가 적어서 결제 전환도 빨라요.
- 브랜드 스타일 유지: 인보이스를 브랜드 스타일에 맞게 꾸밀 수 있어요.
- 유연한 가격 설정: 링크를 보낼 때 할인과 세금을 적용해서 실제 거래 조건을 그대로 반영할 수 있어요.
- 만료일 설정: 링크의 만료일을 정해 두면 기한 안에 결제하도록 안내할 수 있어요.

## 사전 준비

미리 확인해 두면 설정 문제를 줄이고, 링크가 제대로 발송되고 처리돼요.

- 서브 계정에 활성화된 하이퍼클래스 결제(Stripe) 연동
- 서브 계정에 활성화된 전화번호
- 활성 상태인 상품 1개 이상

## 대화에서 Text-To-Pay 링크 보내기

1. **대화**로 이동해서 Text-To-Pay 링크를 보낼 연락처와의 대화를 엽니다.

   ![대화 목록에서 연락처 대화 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059937500/original/Z06JS7DfNEdQHNj3HkaoZkBJ4ycTg6iXhg.png?1764888541)
2. 메시지 입력창의 채널 선택에서 **SMS**를 선택합니다.

   ![메시지 입력창에서 SMS 채널 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059937514/original/bkqzsFiLaazDrhnC4ZwP2PVZOAckyAX6Qg.png?1764888582)
3. 텍스트 편집기 아래의 **결제 요청**($ 아이콘)을 클릭합니다.

   ![텍스트 편집기 아래의 결제 요청 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059937521/original/gmxcwUzu_sQgY1-l_3evlJWNqMs2SpCYkA.png?1764888617)
4. **결제 요청** 창에서 상품(또는 항목)을 선택하고 가격을 확인합니다. 필요하면 할인이나 세금을 추가하고, **만료일**을 정합니다. 그다음 **테스트**와 **라이브** 중 하나를 선택합니다. 실제 결제가 아닌 확인용이면 **테스트**를 쓰세요.

   **미리보기**를 클릭하면 고객이 보게 될 결제 화면을 먼저 확인할 수 있어요. **Copy link & Mark as sent**(링크 복사 및 발송 완료로 표시)를 클릭해도 돼요.

   ![결제 요청 창에서 상품, 가격, 할인, 세금, 만료일 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059937574/original/QPsNg403TjgyWqIV6H04JlwZFcEvXuf1jw.png?1764888764)
5. **보내기**를 클릭해서 Text-To-Pay 링크를 보냅니다. 고객이 링크를 열면 아래와 같은 화면이 보여요.

   {% hint style="info" %}
   이 결제 페이지는 꾸밀 수 있어요. 자세한 방법은 "결제 링크를 브랜드 색상으로 꾸미는 방법" 문서를 참고하세요.
   {% endhint %}

   ![고객이 링크를 열었을 때 보이는 결제 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059937583/original/F4JjB9CiuFkum7ZSXTd8BRhqxhkeD-gcZQ.png?1764888810)
