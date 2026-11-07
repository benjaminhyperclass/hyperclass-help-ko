---
원문: /support/solutions/articles/48001153903-setting-up-quickbooks-integration
번역일: 2026-11-07
카테고리: 08-결제
---

# QuickBooks 연동 설정

하이퍼클래스와 QuickBooks를 양방향으로 연동하는 방법을 안내해요. 연동하면 연락처, 결제, 인보이스가 두 서비스 사이에서 동기화돼요.

## QuickBooks 연동으로 할 수 있는 일

### 하이퍼클래스 → QuickBooks

- 하이퍼클래스에서 활동이 있는 연락처는 QuickBooks에 고객으로 만들어요.
- 하이퍼클래스 안에서 결제가 이루어지면(주문 폼, 구독, 멤버십 결제, 캘린더 결제) QuickBooks에 판매 영수증을 등록해요. 연락처 이메일을 기준으로 고객을 찾아 연결해요.
- 하이퍼클래스에서 인보이스를 발송 상태로 바꾸면 QuickBooks에 인보이스를 만들어요. 이후 하이퍼클래스에서 바뀐 내용도 계속 QuickBooks에 반영돼요.
  - 인보이스 번호
  - 상태(결제 완료, 무효 처리 등)
  - 발행일
  - 만기일
  - 연락처(QuickBooks에 없으면 새로 만들어져요)
  - 청구 이메일
  - 인보이스 총액
  - 인보이스 결제 금액
  - 항목 이름
  - 미국 서브 계정은 할인과 세금이 항목 가격에 맞춰 조정돼요. 그 외 지역은 할인과 세금도 함께 동기화돼요.
- 연동 전에 이미 있던 인보이스는 동기화되지 않아요. 연동 이후에 새로 만든 인보이스만 동기화돼요.

### QuickBooks → 하이퍼클래스

- QuickBooks에 있는 기존 연락처를 하이퍼클래스로 가져오고, 이후 새로 생기는 연락처도 계속 동기화해요. 동기화에는 최대 5분이 걸릴 수 있어요.
- QuickBooks에서 연락처의 첫 인보이스가 전액 결제되면(잔액 0달러) 하이퍼클래스에서 **리뷰 요청 보내기**를 실행해요. 이 기능은 연동 카드에서 켜고 끌 수 있어요.
- 연동을 처음 연결할 때 **이전 인보이스 가져오기**를 켜 두면, QuickBooks의 이전 인보이스를 하이퍼클래스로 가져와요. 가져온 인보이스를 하이퍼클래스에서 수정해도 QuickBooks에는 반영되지 않아요. 또 하이퍼클래스에서 QuickBooks로 보낸 인보이스가 다시 하이퍼클래스로 되돌아오는 반복은 생기지 않으니 걱정하지 않으셔도 돼요.

## QuickBooks 연동하기

1. **설정 > 연동**으로 이동하세요.
2. **QB Connect**(QuickBooks 연결) 버튼을 클릭하세요.
3. 이전에 만든 인보이스를 가져오려면 **인보이스 가져오기** 토글을 켜세요.
4. 필요하면 리뷰 자동화를 켜세요.
5. QuickBooks 계정 정보로 로그인해서 연결하세요. 권한 요청이 나오면 모두 허용하세요.

![QuickBooks 연결 버튼이 있는 연동 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042205794/original/t-NSCN24iTBAxJtKp7bdSiPhYPuTGz2IUw.png?1740486845)

![QuickBooks 연결 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042205847/original/kgVEp9J2EMkYJdBXGUnpPBrxCEzQbg4j0w.png?1740486899)
![QuickBooks 연결 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042205863/original/69qmHXoZhm-QwkeZEWRWXswkurKTYuoI5w.png?1740486917)

![QuickBooks 연동 과정 시연](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48246309641/original/infKtXR42wNzjuuWi9H6fKN-cv9wk2pqEw.gif?1660914333)

## 자주 묻는 질문

### QuickBooks 연동으로 어떤 일이 이루어지나요?
QuickBooks에 있는 기존 연락처와 새 연락처를 모두 하이퍼클래스로 동기화해요. QuickBooks에서 연락처의 첫 인보이스가 전액 결제되면 리뷰 요청을 자동으로 보내요. 이 기능은 선택 사항이라 끌 수 있어요. 하이퍼클래스에서 이루어진 결제(주문 폼, 구독, 멤버십 결제, 캘린더 결제)는 QuickBooks에 판매 영수증으로 등록해요. 하이퍼클래스에서 인보이스를 발송하거나 수정할 때마다 QuickBooks에도 인보이스를 만들고 업데이트해서 두 서비스를 계속 맞춰 줘요.

### 이미 QuickBooks에 있는 인보이스도 하이퍼클래스로 동기화되나요?
처음 연결할 때 **인보이스 가져오기** 토글을 켜면, 이전에 만든 QuickBooks 인보이스를 모두 하이퍼클래스로 가져와요. 단, 이렇게 가져온 인보이스는 한쪽에서 수정해도 다른 쪽에 반영되지 않아요.
토글을 켜지 않으면, 연동 이후 하이퍼클래스에서 새로 만든 인보이스만 QuickBooks로 동기화돼요.

### QuickBooks에 이미 있는 고객은 어떻게 처리되나요?
거래에 쓰인 이메일 주소와 같은 이메일의 고객이 QuickBooks에 이미 있으면, 그 고객 정보를 업데이트해요. 판매 영수증은 해당 고객에 연결해요. 같은 이메일이 없으면 QuickBooks에 새 고객을 만들어요.

### 동기화된 인보이스에 세금과 할인도 포함되나요?
네. 동기화된 모든 인보이스에는 총액, 세금, 할인이 포함돼요.

### 하이퍼클래스 인보이스가 QuickBooks로 동기화되지 않아요.
하이퍼클래스에서 만든 인보이스가 **Draft**(초안) 상태이면 QuickBooks로 동기화되지 않아요. **Sent**(발송됨), **Pending**(대기 중), **Paid**(결제 완료) 상태인 인보이스만 QuickBooks로 보내져요.

확인할 점:

- **Draft** 상태의 인보이스는 동기화되지 않아요. 인보이스를 발송해야 QuickBooks에 나타나요.
- 고객이 두 시스템에 모두 있어야 해요. 연락처가 QuickBooks에 없으면 QuickBooks에서 먼저 만들어야 할 수 있어요.
- 견적서는 QuickBooks에 고객을 자동으로 만들지 않아요. 하이퍼클래스에서 견적서를 수락해도 고객이 QuickBooks로 자동 동기화되지는 않아요.

해결 방법:

1. 하이퍼클래스에서 인보이스를 여세요.
2. **보내기**를 클릭하세요. **Draft** 상태로 두면 안 돼요.
3. QuickBooks에 해당 고객이 있는지 확인하세요.
4. 인보이스를 보내면 자동으로 동기화돼요.

이 단계를 해도 인보이스가 나타나지 않으면 QuickBooks 연동 연결을 다시 확인하세요.
