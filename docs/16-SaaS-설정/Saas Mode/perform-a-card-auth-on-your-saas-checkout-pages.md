---

번역일: 2026-04-08
카테고리: 16-SaaS-설정 > Saas Mode
---

# SaaS 결제 페이지에서 카드 인증 설정하기

Hyperclass에서 SaaS 모드를 사용하는 에이전시라면, 악의적인 사용자가 SaaS 서비스에 가입해서 남용하는 것을 방지하고 싶을 것입니다. 이를 방지하는 모범 사례 중 하나는 SaaS 결제 페이지에 **반드시** 카드 인증을 설정하는 것입니다.

이 글에서는 악의적인 사용자로부터 SaaS 오퍼를 보호하기 위해 카드 인증을 활성화하는 방법을 설명하겠습니다.

# 기존 퍼널 vs 새 퍼널

SaaS 오퍼가 기존 퍼널로 만들어졌는지 새 퍼널로 만들어졌는지 확인하고 아래 단계를 따라하세요. 하위 계정 보기 → 사이트(Sites) → 퍼널(Funnels)로 가서 목록을 확인하면 이 정보를 찾을 수 있습니다.

새 퍼널은 퍼널 이름 옆에 버전 2 태그가 있습니다.

![새 퍼널 확인하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48177946198/original/xfSsa2HMjLI6Umld9gFf9xB7NR9ceIMsyQ.png?1641934943)

# 기존 퍼널의 카드 인증

SaaS 상품이 포함된 퍼널 단계로 가서 "상품(products)" 탭을 클릭하세요.

![기존 퍼널 상품 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48177946090/original/uwQnDANQ-WJmIYV5jFOgFTuMENv4HShS1A.png?1641934921)

# 새 퍼널의 카드 인증

SaaS 상품이 포함된 퍼널 단계로 가서 "상품(products)" 탭을 클릭하세요.

![새 퍼널 상품 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48177947124/original/NUlxxQG0ywWtHrjvwf60OUm9eIUW30oWkQ.png?1641935230)

## 카드 인증은 어떻게 작동하나요?

카드 인증은 구독을 생성하기 전에 카드에 충분한 잔액이 있는지 먼저 확인하는 기능입니다. 이는 구독에 무료 체험을 제공할 때 특히 유용합니다. 악의적인 사용자가 플랫폼에 가입하는 것을 방지하고, 충분한 잔액을 가진 실제 사용자만이 무료 체험을 진행할 수 있게 합니다.

## 이 인증으로 고객에게 요금이 청구되나요?

아니요, 고객에게는 인증 비용이 청구되지 않습니다. 카드 인증은 결제 의도를 생성한 후 요금이 확정되기 전에 즉시 환불하는 방식으로 작동하기 때문입니다. 이는 단순히 사용되는 카드가 충분한 잔액을 가진 실제 카드인지 확인하는 방법일 뿐입니다.

---
*원문 최종 수정: Tue, 11 Jan, 2022 at 3:13 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*