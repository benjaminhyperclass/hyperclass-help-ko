---

번역일: 2026-04-06
카테고리: 08-결제
---

# 텍스트 결제 링크 (Text-To-Pay Links)

텍스트 결제 링크를 사용하면 대화(Conversations)에서 SMS를 통해 즉시 결제를 요청하고 수금할 수 있어요. 별도의 웹사이트 없이도 가능합니다!

---

**목차**

- [텍스트 결제 링크란?](#텍스트-결제-링크란)
- [텍스트 결제 링크의 주요 장점](#텍스트-결제-링크의-주요-장점)
- [사전 준비사항](#사전-준비사항)
- [대화에서 텍스트 결제 링크 보내기](#대화에서-텍스트-결제-링크-보내기)

---

# **텍스트 결제 링크란?**

텍스트 결제 링크는 대화 내에서 SMS로 보내는 안전한 결제 요청이에요. 체크아웃 링크를 생성해서 고객이 몇 번의 탭으로 결제할 수 있게 해줍니다. 결제 과정의 마찰을 줄이고 수금을 빠르게 하며, 결제 활동을 연락처 스레드와 연결해서 쉽게 추적하고 후속 조치할 수 있어요.

---

## **텍스트 결제 링크의 주요 장점**

- **빠른 수금**: 어떤 SMS 대화에서든 바로 결제 가능한 링크를 보내서 단계를 줄이고 전환을 빠르게 해요.

- **브랜드에 맞춤**: 인보이스(Invoice)를 브랜드 스타일에 맞게 커스터마이징할 수 있어요.

- **유연한 가격 설정**: 전송 시점에 할인과 세금을 적용해서 정확한 거래 금액을 반영할 수 있어요.

- **결제 기한**: 링크 만료일을 설정해서 시의적절한 결제를 유도하고 기대치를 관리할 수 있어요.

---

## 사전 준비사항

사전 준비사항을 확인하면 일반적인 설정 문제를 예방하고 링크가 올바르게 전송되고 처리되는 것을 보장할 수 있어요.

- 하위 계정(Sub-account)에 활성화된 **Hyperclass Payments (Stripe)** 연동이 있어야 해요.

- 하위 계정에 활성화된 전화번호(Phone Number)가 있어야 해요.

- 최소 하나 이상의 활성화된 상품(Product)이 있어야 해요.

---

## 대화에서 텍스트 결제 링크 보내기

- **대화(Conversations)** 메뉴로 가서 텍스트 결제 링크를 보내고 싶은 연락처와의 대화를 열어주세요.

![대화 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059937500/original/Z06JS7DfNEdQHNj3HkaoZkBJ4ycTg6iXhg.png?1764888541)

- 메시지 박스의 채널 선택기에서 SMS를 선택해주세요.

![SMS 채널 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059937514/original/bkqzsFiLaazDrhnC4ZwP2PVZOAckyAX6Qg.png?1764888582)

- 텍스트 편집기 아래의 **Request Payment(결제 요청)** ($ 아이콘)을 클릭해주세요.

![결제 요청 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059937521/original/gmxcwUzu_sQgY1-l_3evlJWNqMs2SpCYkA.png?1764888617)

- **결제 요청(Request payment)** 모달에서 **상품(Product)**(또는 아이템)을 선택하고 가격을 확인한 다음, **할인(Discount)** 및/또는 세금을 추가하고, **결제 기한(Due date)**을 설정하고, **Test**와 **Live** 모드 중에서 선택하세요 (운영 환경이 아닌 테스트에는 Test 모드를 사용).

**미리보기(Preview)**를 클릭해서 체크아웃 경험을 검토하거나, **링크 복사 및 전송됨으로 표시(Copy link & Mark as sent)**를 클릭하세요.

![결제 요청 모달](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059937574/original/QPsNg403TjgyWqIV6H04JlwZFcEvXuf1jw.png?1764888764)

- **전송(Send)**을 클릭해서 텍스트 결제 링크를 보내세요. 고객이 링크를 열면 다음과 같은 화면을 보게 될 거예요!

**팁:** 이 페이지를 커스터마이징할 수 있어요! [방법을 알아보려면 여기를 클릭하세요.](how-to-customize-payment-links-with-your-brand-colors.md)

![고객이 보는 결제 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059937583/original/F4JjB9CiuFkum7ZSXTd8BRhqxhkeD-gcZQ.png?1764888810)

---
*원문 최종 수정: Thu, 4 Dec, 2025 at 4:59 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*