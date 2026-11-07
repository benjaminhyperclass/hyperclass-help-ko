---
원문: /support/solutions/articles/48001183981-saas-mode-sub-accounts-are-not-being-generated
번역일: 2026-11-07
카테고리: 16-SaaS-설정
---

# SaaS 모드에서 서브 계정이 생성되지 않을 때

SaaS 모드 요금제에 연결한 2단계 주문 폼으로 테스트 결제를 했는데 새 서브 계정이 만들어지지 않는다면, 이 문서를 확인해 보세요. 원인과 SaaS 모드가 작동하기 위한 조건을 안내해요.

## 원인

서브 계정이 Stripe의 **테스트 모드**(Test Mode) API 키로 연동되어 있을 가능성이 높아요.

{% hint style="info" %}
SaaS 모드가 제대로 작동하려면 아래 두 가지 조건을 모두 갖춰야 해요.

1. SaaS 모드 요금제에 연결한 2단계 주문 폼이 있는 판매 페이지를 만드는 서브 계정은, 에이전시 계정과 같은 Stripe 계정으로 연동되어 있어야 해요.
2. 서브 계정과 에이전시 계정 모두 라이브 Stripe API 키로 연동되어 있어야 해요. Stripe API 키는 [Stripe 도움말: API 키 찾기](https://support.stripe.com/questions/locate-api-keys-in-the-dashboard)에서 확인할 수 있어요. 테스트할 때는 유효한 신용카드를 사용하세요. 테스트가 끝나면 Stripe에서 해당 결제를 환불할 수 있어요.
{% endhint %}
