---

번역일: 2026-04-06
카테고리: 08-결제
---

# 결제 링크(Payment Links)

결제 링크(Payment Links)는 웹사이트 없이도 상품이나 서비스를 판매할 수 있는 훌륭한 방법입니다. 몇 번의 클릭만으로 완전한 결제 페이지를 만들고 고객에게 링크를 공유하세요—코딩 필요 없이!

![결제 링크 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023729137/original/ys4Fglfuo4X4dxUuWP7Ur-U6KugdictfkA.png?1711747942)

**참고:** 결제 링크를 만들기 전에 먼저 상품(Product)을 생성해야 합니다. 상품을 만들려면 `Payments(결제) → Products(상품) → Create Product(상품 생성)`로 이동하세요. 상품에 저장된 이미지는 결제 링크에 자동으로 표시됩니다.

## 결제 링크 만드는 방법

1. `Payments(결제) → Payment Links(결제 링크) → Create Link(링크 생성)`로 이동합니다

2. 화면 상단에서 결제 링크의 이름을 입력합니다

![결제 링크 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023729270/original/I4W43f5onxCXZf15F8Ro25APuPphyP8LYA.png?1711748423)

3. 상품을 선택한 후 가격을 선택합니다

![상품 및 가격 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023729273/original/7pzPllY98jtNQicJVvhvN4NTsKoTvmgTGg.png?1711748445)

4. 선택 사항을 설정하고 저장(Save)을 클릭합니다

![선택 사항 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023729283/original/fpRcMZb7FzeEFl-QUcCFRvMjUSySQ098rg.png?1711748466)

5. 미리보기(Preview)를 클릭한 후 브라우저에서 링크를 복사해서 고객에게 보냅니다

![링크 복사 및 전송](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023729348/original/_2Ht3LQLofoyylBWu9P7GgcRyzZWOG3D9g.png?1711748770)

### 언어 및 현지화

호스팅된 체크아웃은 비즈니스 프로필(Business Profile)에서 설정한 플랫폼 언어에 따라 필드 라벨, 버튼, 검증 메시지, 오류 메시지를 현지화합니다.

현지화되는 요소:
- 필드 라벨
- 버튼
- 검증 및 오류 메시지

**팁:** 기본 체크아웃 언어를 변경하려면 비즈니스 프로필에서 플랫폼 언어를 업데이트하세요.

## 추가 정보

- 다음 URL 매개변수를 사용하여 이름, 성, 이메일, 전화번호 필드를 미리 채울 수 있습니다:
  - firstName=
  - lastName=
  - email=
  - phone=

- 다음 URL 매개변수를 사용하여 구매 후 사용자를 자동으로 리디렉션할 수 있습니다(리디렉션 카운트다운 타이머 포함):
  - redirectIn=
  - redirectUrl=

URL 예시: [links.fastpayments.co/payment-link/asfkhwel93/firstName=Bob&lastName=Smith&email=bobsmith@gmail.com&phone=2155554545&redirectIn=8&redirectUrl=mysite](mailto:links.fastpayments.co/payment-link/asfkhwel93/firstName=Bob&lastName=Smith&email=bobsmith@gmail.com&phone=2155554545&redirectIn=8&redirectUrl=mysite).com/thank-you

## 자주 묻는 질문

**Q: 은행 이체 같은 수동 결제 옵션이 결제 링크 체크아웃 페이지에 표시되지 않는 이유는 무엇인가요?**

수동 결제 방법은 현재 단일 결제 링크 체크아웃 페이지에서 지원되지 않습니다.

Stripe, PayPal 같은 자동화된 방법만 표시됩니다.

수동 결제를 받으려면 직접 결제 링크 대신 기존의 인보이스(Invoice)나 주문 양식(Order Form)을 사용해야 합니다.

참고: [제품 영역별 지원되는 결제 제공업체 및 방법 (어디서 무엇이 작동하는지)](https://hyperclass.gitbook.io/hyperclass-docs)

---
*원문 최종 수정: Sun, 1 Feb, 2026 at 6:47 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*