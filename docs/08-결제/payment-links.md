---
원문: /support/solutions/articles/155000002177-payment-links
번역일: 2026-11-07
카테고리: 08-결제
---

# 결제 링크로 상품 판매하기

**결제 링크**를 만들면 웹사이트 없이도 상품이나 서비스를 판매할 수 있어요. 클릭 몇 번으로 결제 페이지를 완성하고, 링크를 고객에게 공유하면 돼요. 코드는 필요 없어요.

![결제 링크 결제 페이지 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023729137/original/ys4Fglfuo4X4dxUuWP7Ur-U6KugdictfkA.png?1711747942)

{% hint style="info" %}
결제 링크를 만들기 전에 먼저 상품을 만들어야 해요. **결제 > 상품 > 상품 만들기**로 이동해 상품을 만드세요. 상품에 저장한 이미지는 결제 링크에 자동으로 표시돼요.
{% endhint %}

## 결제 링크 만드는 순서

1. **결제 > 결제 링크 > 링크 만들기**로 이동해요.
2. 화면 맨 위에 결제 링크 이름을 입력해요.

   ![결제 링크 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023729270/original/I4W43f5onxCXZf15F8Ro25APuPphyP8LYA.png?1711748423)

3. **상품을 선택하세요**에서 상품을 고른 뒤 가격을 선택해요.

   ![상품과 가격 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023729273/original/7pzPllY98jtNQicJVvhvN4NTsKoTvmgTGg.png?1711748445)

4. 필요한 선택 설정을 구성한 뒤 **저장**을 클릭해요.

   ![선택 설정 구성 후 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023729283/original/fpRcMZb7FzeEFl-QUcCFRvMjUSySQ098rg.png?1711748466)

5. **미리보기**를 클릭해요. 브라우저 주소창에서 링크를 복사해 받는 사람에게 보내세요.

   ![미리보기 후 링크 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023729348/original/_2Ht3LQLofoyylBWu9P7GgcRyzZWOG3D9g.png?1711748770)

### 언어 및 현지화

호스팅 결제 페이지는 **비즈니스 프로필**에 설정된 **플랫폼 언어**에 맞춰 필드 이름, 버튼, 유효성 검사 및 오류 메시지를 해당 언어로 보여 줘요.

현지화되는 요소는 다음과 같아요.

- 필드 이름
- 버튼
- 유효성 검사 및 오류 메시지

{% hint style="info" %}
결제 페이지의 기본 언어를 바꾸려면 **비즈니스 프로필**에서 **플랫폼 언어**를 변경하세요.
{% endhint %}

## 추가 정보

- 다음 URL 파라미터를 쓰면 이름, 성, 이메일, 전화번호 입력란을 미리 채울 수 있어요.`firstName=``lastName=``email=``phone=`
- 다음 URL 파라미터를 쓰면 결제 후 고객을 자동으로 다른 페이지로 이동시킬 수 있어요. 이동 전 카운트다운 타이머도 함께 표시할 수 있어요.`redirectIn=``redirectUrl=`

예시 URL:

```
links.fastpayments.co/payment-link/asfkhwel93/firstName=Bob&lastName=Smith&email=bobsmith@gmail.com&phone=2155554545&redirectIn=8&redirectUrl=mysite.com/thank-you
```

## 자주 묻는 질문

### 수동 결제 수단(예: 계좌 이체)이 결제 링크 결제 페이지에 보이지 않아요. 왜 그런가요?

수동 결제 수단은 현재 단일 결제 링크 결제 페이지에서 지원하지 않아요.

Stripe, PayPal처럼 자동으로 처리되는 결제 수단만 표시돼요.

**계좌 이체** 같은 수동 결제를 받아야 한다면, 결제 링크 대신 일반 인보이스나 주문 폼을 사용해야 해요.

참고: 지원되는 결제 제공업체와 결제 수단(기능 영역별 지원 현황)
