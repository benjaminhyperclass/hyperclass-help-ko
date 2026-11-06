---

번역일: 2026-04-08
카테고리: 13-AI-Employee > Conversation AI - Training Bots
---

# 대화 AI(Conversation AI): 새로운 질문 감지 플로우

**목차**

- [새로운 기능:](#새로운-기능)
- [주요 특징:](#주요-특징)
- [작동 원리:](#작동-원리)
- [참고사항:](#참고사항)

## **새로운 기능:**

대화 AI(Conversation AI)의 중요한 업그레이드인 향상된 훈련 플로우(Enhanced Training Flow)를 소개합니다. 기존에는 질문 분석이 제안 플로우와 LLM의 도구 기능에 의존했는데, 때로는 부정확했습니다. 이번 새로운 기능은 최근 대화를 분석하고 하위 계정의 고유한 데이터에 적응하여 더욱 정확하고 상황에 맞는 응답을 제공합니다.

## **주요 특징:**

- 대화 분석: AI 요청마다 대화의 최근 5개 메시지를 검토하여 연락처가 지원이 필요한지, 가격이나 서비스 같은 비즈니스 관련 질문이 있는지 파악합니다.
- 동적 질문 추출: 대화에서 정확한 질문을 자동으로 추출하고 분석 점수를 제공합니다.
- 봇 훈련 활용: 하위 계정의 특정 봇 훈련 데이터를 사용하여 식별된 질문에 맞춤형 응답을 제공합니다.

## **작동 원리:**

- 자동 분석: 각 대화를 검토하여 상황을 파악하고 연락처의 정확한 질문을 식별합니다.
- 질문 분석 점수: 지원이 필요한지 또는 고객 질문이 있는지에 대한 분석 점수와 이유를 제공합니다.
- 적응형 응답: 식별된 질문을 사용하여 하위 계정 봇의 가장 관련성 높은 훈련 데이터를 적용하여 정확하고 관련성 있는 응답을 보장합니다.

이번 업데이트는 소중한 고객들의 지속적인 피드백과 협력을 바탕으로 이루어졌습니다.

### **참고사항:**

사용자의 별도 작업은 필요하지 않습니다. 이러한 변경사항은 AI 응답의 효율성과 효과를 향상시키기 위해 내부적으로 적용되었습니다.

![대화 AI 새로운 질문 감지 플로우 스크린샷 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031753288/original/RoWjt6FasKrcUwlLUKkXGWAfbO390LfdOQ.png?1724770438)

![대화 AI 새로운 질문 감지 플로우 스크린샷 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031753323/original/ATL8woikfGwva7WfO4QxrcIkcm66-2kQ9g.png?1724770457)

![대화 AI 새로운 질문 감지 플로우 스크린샷 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031753339/original/GM_RrQpHVupaqSqk4bJWWuOcqShimVz_PQ.png?1724770468)

![대화 AI 새로운 질문 감지 플로우 스크린샷 4](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031753357/original/J1XOXhRLo3Ta0QVK7Gn-UNNR7gH_Gc08aw.png?1724770480)

---
*원문 최종 수정: Mon, 30 Sep, 2024 at 3:04 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*