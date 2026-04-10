---

번역일: 2026-04-06
카테고리: 08-결제
---

# QuickBooks 연동 설정하기

Hyperclass와 QuickBooks 간 양방향 연동 사용법을 알아보세요.

---

**목차**

- [커뮤니티 튜토리얼](#커뮤니티-튜토리얼)
- [QuickBooks 연동의 기능](#quickbooks-연동의-기능)
  - [Hyperclass → QuickBooks](#hyperclass--quickbooks)
  - [QuickBooks → Hyperclass](#quickbooks--hyperclass)
- [QuickBooks 연동하기](#quickbooks-연동하기)
- [자주 묻는 질문](#자주-묻는-질문)

---

## 커뮤니티 튜토리얼

[https://www.youtube.com/watch?v=__c0gDVBLs0](https://www.youtube.com/watch?v=__c0gDVBLs0)

[https://www.youtube.com/watch?v=4QXRl3mArfY&feature=youtu.be](https://www.youtube.com/watch?v=4QXRl3mArfY&feature=youtu.be)

[https://www.youtube.com/watch?v=QKgJcLx5Q-A](https://www.youtube.com/watch?v=QKgJcLx5Q-A)

[https://www.youtube.com/watch?v=d1eLzPdUlYo](https://www.youtube.com/watch?v=d1eLzPdUlYo)

## QuickBooks 연동의 기능

### Hyperclass → QuickBooks

- Hyperclass에서 활동이 있는 연락처를 QuickBooks에 고객으로 자동 생성합니다.

- Hyperclass에서 결제가 완료되면(주문 폼, 구독, 멤버십 결제, 캘린더 결제) QuickBooks에 판매 영수증을 자동 등록합니다(연락처 이메일 기준으로 매칭).

- Hyperclass에서 인보이스가 '발송됨'으로 표시되면 QuickBooks에 인보이스를 생성하고, Hyperclass에서 업데이트된 내용을 QuickBooks로 계속 동기화합니다:
  - 인보이스 번호
  - 상태(결제 완료, 취소 등)
  - 발행일
  - 납기일
  - 연락처(QuickBooks에 없으면 자동 생성)
  - 청구 이메일
  - 인보이스 총액
  - 인보이스 결제 금액
  - 항목명
  - 미국 하위 계정의 경우 할인과 세금이 항목 가격에 반영됩니다. 다른 지역은 별도로 동기화됩니다.

- 기존 인보이스는 동기화하지 않으며, 연동 후 새로 생성된 인보이스만 동기화합니다.

### QuickBooks → Hyperclass

- QuickBooks의 기존 연락처를 Hyperclass로 가져오고, 새 연락처도 계속 동기화합니다(최대 5분 소요).

- QuickBooks에서 연락처의 첫 번째 인보이스가 완전히 결제되면(잔액 = $0), Hyperclass에서 리뷰 요청을 자동 발송합니다([연동 카드에서 켜기/끄기 가능](automatic-review-request-when-invoice-paid-in-quickbooks.md)).

- 초기 연결 시 활성화하면 QuickBooks의 기존 인보이스를 Hyperclass로 가져옵니다. 단, Hyperclass에서 이 인보이스들을 수정해도 QuickBooks로 다시 동기화되지 않으며, 무한 루프가 생기지도 않으니 걱정하지 마세요!

---

## QuickBooks 연동하기

Settings(설정) → Integrations(연동) → "QB Connect" 버튼 클릭 → 기존 인보이스를 가져오려면 "Import invoices" 토글 활성화 → 필요하면 리뷰 자동화 활성화 → QuickBooks 계정으로 연결 및 로그인합니다. 모든 권한을 승인해 주세요.

![QuickBooks 연동 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042205794/original/t-NSCN24iTBAxJtKp7bdSiPhYPuTGz2IUw.png?1740486845)

![QuickBooks 연결 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042205847/original/kgVEp9J2EMkYJdBXGUnpPBrxCEzQbg4j0w.png?1740486899)

![QuickBooks 로그인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042205863/original/69qmHXoZhm-QwkeZEWRWXswkurKTYuoI5w.png?1740486917)

![QuickBooks 연동 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48246309641/original/infKtXR42wNzjuuWi9H6fKN-cv9wk2pqEw.gif?1660914333)

[![QuickBooks 연동 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48053002807/original/5gWi-uatnXtrTwN_fTNrkaY3qZdIFwiSfA.png?1596831109)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48051767771/original/AjUCbIiZ8jyTm8yzWMSAh4PuJo6LzEPgnA.png?1596153551)

---

## 자주 묻는 질문

**Q: QuickBooks 연동이 어떤 기능을 하나요?**

연동은 QuickBooks의 모든 기존 연락처와 새 연락처를 CRM으로 동기화합니다. QuickBooks에서 연락처의 첫 번째 인보이스가 완전히 결제되면 자동으로 리뷰 요청을 보냅니다(선택사항, 끌 수 있음). CRM에서 발생한 결제(주문 폼, 구독, 멤버십 결제, 캘린더 결제 등)를 QuickBooks에 판매 영수증으로 등록합니다. 또한 CRM에서 인보이스가 발송되거나 업데이트될 때마다 QuickBooks에서도 인보이스를 생성하고 업데이트하여 완벽한 동기화를 보장합니다.

**Q: 기존 QuickBooks 인보이스가 CRM으로 동기화되나요?**

예—초기 연결 시 "Import Invoices" 토글을 활성화하면 기존에 생성된 모든 QuickBooks 인보이스가 CRM으로 가져와집니다. 주의사항: QuickBooks에서 가져온 인보이스를 CRM에서 수정해도 QuickBooks로 다시 동기화되지 않으며, 그 반대도 마찬가지입니다.
활성화하지 않으면 연동 후 CRM에서 새로 생성된 인보이스만 QuickBooks로 동기화됩니다.

**Q: QuickBooks에 이미 존재하는 고객은 어떻게 처리되나요?**

거래에 사용된 이메일 주소와 동일한 고객이 QuickBooks에 이미 있다면, 연동은 기존 고객 기록을 업데이트합니다. 판매 영수증의 경우 해당 고객과 거래를 연결합니다. 일치하는 이메일이 없으면 QuickBooks에 새 고객 기록이 생성됩니다.

**Q: 동기화된 인보이스에 세금과 할인이 포함되나요?**

예, 연동은 동기화된 모든 인보이스에 총액, 세금, 할인을 포함하여 완벽한 회계 동기화를 제공합니다.

**Q: Hyperclass 인보이스가 QuickBooks로 동기화되지 않는 이유는 무엇인가요?**

Hyperclass에서 생성된 인보이스는 초안(Draft) 상태일 때 QuickBooks로 동기화되지 않습니다. 발송됨(Sent), 대기 중(Pending), 또는 결제 완료(Paid) 상태의 인보이스만 QuickBooks로 전송됩니다.

확인해야 할 주요 사항:
- 초안 인보이스는 동기화되지 않습니다. QuickBooks에 나타나려면 인보이스를 발송해야 합니다.
- 고객이 두 시스템 모두에 존재해야 합니다. 연락처가 QuickBooks에 없다면 먼저 생성해야 할 수 있습니다.
- 견적서는 QuickBooks에 고객을 자동 생성하지 않습니다. Hyperclass에서 견적서를 승인해도 고객이 QuickBooks로 자동 동기화되지 않습니다.

해결 방법:
- Hyperclass에서 인보이스를 엽니다.
- 발송(Send)을 클릭합니다(초안으로 두지 마세요).
- QuickBooks에 고객이 존재하는지 확인합니다.
- 발송 후 인보이스가 자동으로 동기화됩니다.

이 단계를 따른 후에도 나타나지 않으면 QuickBooks 연동 연결을 다시 확인하세요.

---
*원문 최종 수정: 2026년 1월 27일*
*Hyperclass 사용 가이드 — hyperclass.ai*