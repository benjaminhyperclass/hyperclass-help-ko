---

번역일: 2026-04-07
카테고리: 09-이메일 > 일반
---

# AI 스케줄로 스마트한 이메일 발송 타이밍 (스마트 발송 시간 최적화)

수신자가 가장 열어볼 가능성이 높은 순간에 모든 이메일을 전달하세요! AI 스케줄(AI Schedule)은 발송 시간 최적화를 통해 각 연락처의 과거 참여 기록을 분석하고, 사용자가 설정한 시간대 내에서 자동으로 최적의 발송 시간을 예약합니다. 이 문서는 AI 스케줄 기능을 사용하여 추가 작업 없이 이메일 열람률, 클릭률, 답장률을 높이는 방법을 안내합니다.

---

**목차**

- [이메일 AI 스케줄이란?](#이메일-ai-스케줄이란)
- [AI 스케줄의 주요 이점](#ai-스케줄의-주요-이점)
- [AI 스케줄 작동 방식](#ai-스케줄-작동-방식)
- [AI 스케줄의 중요한 제한사항](#ai-스케줄의-중요한-제한사항)
- [최적화 시간대 선택하기](#최적화-시간대-선택하기)
- [AI 스케줄로 이메일 설정 및 발송하기](#ai-스케줄로-이메일-설정-및-발송하기)
- [AI 스케줄 문제해결](#Troubleshooting-AI-Schedule)
- [자주 묻는 질문](#자주-묻는-질문)
- [관련 문서](#관련-문서)
---

# 이메일 AI 스케줄이란?

AI 스케줄은 참여도 인텔리전스를 활용하여 각 이메일을 연락처가 가장 주목하고, 열어보고, 응답할 가능성이 높은 시점에 전달합니다. 정확한 시간을 직접 선택하는 대신, 시간대를 선택하면 Hyperclass의 AI가 해당 연락처의 과거 행동 패턴을 기반으로 그 시간대 내에서 최적의 발송 시간을 선택합니다. 수신자에 대한 충분한 데이터가 없는 경우, 지연을 피하기 위해 즉시 메시지가 발송됩니다.

AI 스케줄은 대화(Conversations)의 기존 발송 옵션과 함께 제공되므로, 이메일을 작성하면서 바로 보내기(Send Now), 예약 발송(Send Later), AI 최적화 발송을 쉽게 전환할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060449621/original/P8AWBYVM4xuHo8W-o68dU7PrvfrbFqF8Jg.jpeg?1765490871)

---

## AI 스케줄의 주요 이점

실질적인 장점을 이해하면 언제 AI 스케줄을 사용할지, 언제 표준 예약을 사용할지 결정하는 데 도움이 됩니다.

- **높은 참여도**: 선택한 시간대 내에서 예측된 고참여 순간에 타이밍이 선택됩니다.

- **수신자별 최적화**: 충분한 행동 데이터가 있을 때 각 수신자에게 맞춤형 발송 타이밍을 제공합니다.

- **자동화된 효율성**: AI가 발송 시간을 선택하므로 시간대를 계산하거나 최적 시간을 찾을 필요가 없습니다.

- **리스트 피로도 감소**: 개별화된 타이밍이 발송량을 자연스럽게 분산시켜 "이메일 폭탄" 효과를 줄이고 스팸 신고를 낮춥니다.

---

## AI 스케줄 작동 방식

결정 과정의 간단한 멘털 모델을 이해하면 올바른 시간대를 선택하고 AI 스케줄이 뒤에서 무엇을 하는지 파악할 수 있습니다.

- 시간대를 선택합니다(예: 향후 48시간).

- **AI가 수신자의 과거 참여도를 분석합니다**(예: 시스템에서 사용 가능한 열람/답장 패턴).

- **AI가 선택된 시간대 내에서 최적 시간을 선택합니다** - 예측된 고참여 순간 중에서.

- **이메일이 자동으로 예약됩니다** - 해당 최적화된 시간에.

- **데이터가 부족한 경우?** 시간대를 놓치지 않기 위해 **즉시 발송됩니다**.

---

## AI 스케줄의 중요한 제한사항

- **AI 최적화로 발송(Send with AI Optimization)**을 확인한 후에는 메시지를 삭제하거나 다시 예약할 수 없습니다.

- 이 기능은 LC **이메일** 또는 **Mailgun** 제공업체를 사용하는 하위 계정에서만 사용할 수 있습니다.

- LC나 Mailgun을 사용하더라도 **양방향 동기화가 활성화된 계정에서는 지원되지 않습니다**.

---

## 최적화 시간대 선택하기

시간대는 개인화와 속도의 균형을 맞춥니다. 긴 시간대는 AI가 고참여 순간을 찾을 수 있는 유연성을 높이는 반면, 짧은 시간대는 더 빠른 발송을 우선시합니다.

- **짧은 시간대(예: 12시간)**: 적당한 최적화와 함께 속도를 우선시합니다.

- **중간 시간대(예: 48시간)**: 타이밍과 발송 속도의 권장 균형점입니다.

- **긴 시간대(예: 72시간)**: 적시성이 덜 중요할 때 더 많은 최적화를 허용합니다.

**팁:** 캠페인 목표를 고려하세요. 시간에 민감한 업데이트는 짧은 시간대가 유리할 수 있고, 뉴스레터나 육성 이메일은 긴 시간대에서 효과적인 경우가 많습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060443993/original/rzPJmpe6POXZVuUYmrSLUbnnSJq6bbsROw.png?1765478339)

---

## AI 스케줄로 이메일 설정 및 발송하기

대화(Conversations)에서 이메일을 작성할 때 다음 단계를 따라 스케줄 AI를 활용하여 참여율을 향상시키세요.

#### **1단계:** 대화 열기

**대화(Conversations)**로 이동하여 이메일 스레드를 열거나 시작합니다. 이메일 제목과 메시지 내용을 작성합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060449840/original/EP4zZPTa2fu3FiEkce2OR_pPdxQgWImXmg.png?1765491131)

#### 2단계: AI 스케줄 선택

발송 메뉴를 클릭하고 **AI 스케줄(AI Schedule)**을 선택합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060449878/original/7b0J2qVv55qIfDATz0fleT39VqjuABs29A.png?1765491227)

#### 3단계: 최적화 시간대 선택기 열기

최적화 시간대를 변경하려면 **편집(Edit)**을 클릭합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060449910/original/Crjfuhp3RseZ0Di0m2DWjCIwd48_yODHGQ.png?1765491373)

#### **4단계:** 최적화 시간대 선택

원하는 최적화 시간대(예: 12시간, 48시간, 72시간)를 선택한 후 다음(Next)을 클릭합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060449941/original/8OVdiTHl30w7SYMWNta4Cf3dVwfflhyyJQ.png?1765491500)

#### **5단계:** AI 스케줄로 발송

**AI 최적화로 발송(Send with AI Optimization)**을 클릭하여 확인하면 스케줄 AI가 이메일을 예약합니다. 연락처에 충분한 데이터가 없는 경우 이메일이 즉시 발송됩니다.

**중요사항:** **AI 최적화로 발송**을 확인한 후에는 메시지를 삭제하거나 다시 예약할 수 없습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060449960/original/lEhu836OzYlhIljsXvDZoznbnAev__jU4Q.png?1765491599)

---

## 자주 묻는 질문

**Q: AI 스케줄이 대화 외의 다른 곳(예: 캠페인)에서도 작동하나요?**
AI 스케줄은 대화의 이메일 작성기에서만 사용할 수 있습니다. 이메일 마케팅 캠페인에 AI를 사용하려면 [스마트 발송](smart-send-best-time-recommendation-in-email-marketing-campaigns.md)을 확인하세요.

**Q: AI로 예약된 이메일을 편집하거나 취소할 수 있나요?**
아니요. **AI 최적화로 발송**을 확인한 후에는 메시지를 **삭제하거나 다시 예약할 수 없습니다**.

**Q: AI 스케줄 이메일이 언제 예약됐는지 어떻게 알 수 있나요?**
이메일을 발송한 대화 스레드로 이동하면 메시지 위에 예약된 발송 시간이 표시됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060529422/original/aVfqRh2E6MzJLvqi5flTyLp3kRDsS2CJ2w.png?1765567826)

**Q: 수신자에 대한 참여도 데이터가 충분하지 않으면 어떻게 되나요?**
선택한 시간대를 놓치지 않도록 이메일이 **즉시** 발송됩니다.

**Q: AI 스케줄을 SMS에도 사용할 수 있나요?**
현재는 이메일 전용입니다. AI 스케줄은 현재 SMS에서 사용할 수 없습니다.

---

## 관련 문서

- [대화 시작하기](getting-started-with-the-conversations-tab.md)
- [LC 이메일이란?](what-is-lc-email-.md)
- [나중에 보내기 vs 지금 보내기 - 이메일 예약 옵션](different-email-sending-delivery-method-s-send-now-schedule-batch-rss-schedule.md)
- [AI 직원 개요](ai-employee-overview.md)

---
*원문 최종 수정: Fri, 12 Dec, 2025 at 1:52 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*