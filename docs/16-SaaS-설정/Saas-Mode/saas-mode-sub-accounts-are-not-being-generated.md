---

번역일: 2026-04-08
카테고리: 16-SaaS-설정 > Saas Mode
---

# SaaS 모드에서 하위 계정이 생성되지 않는 문제

SaaS 모드 플랜과 연결된 2단계 주문 양식을 테스트할 때 결제가 완료되어도 새 하위 계정이 생성되지 않는다면, 하위 계정에서 Stripe의 "테스트 모드" API 키를 사용하고 있는 것이 원인일 가능성이 높습니다.

**참고: SaaS 모드가 정상 작동하려면:**

1) SaaS 모드 플랜과 연결된 2단계 주문 양식으로 판매 페이지를 구축할 하위 계정은 에이전시 계정과 동일한 Stripe 계정에 연동되어 있어야 합니다.

2) 하위 계정과 에이전시 계정 모두 실제(Live) Stripe API 키로 연동되어 있어야 합니다. Stripe API 키를 찾는 방법은 이 [Stripe API 키 위치 찾기 도움말 문서](https://support.stripe.com/questions/locate-api-keys-in-the-dashboard)를 참조하세요. 또한 테스트할 때는 반드시 유효한 신용카드를 사용하고, 테스트 완료 후 Stripe에서 환불 처리하시기 바랍니다.

---
*원문 최종 수정: Fri, 29 Mar, 2024 at 10:00 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*