---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009534-validate-voice-ai-prompts-for-speech-to-speech-s2s-models
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# 음성 대 음성(S2S) 모델용 음성 AI 프롬프트 검증하기

프롬프트 검증은 GPT Live, GPT Realtime, Gemini 같은 음성 대 음성(S2S) 모델에 맞게 기존 음성 AI 프롬프트를 다듬어 주는 기능이에요. 오래된 지침을 없애고 프롬프트 구조를 정리해서, 에이전트가 음성으로 바로 대화할 수 있게 준비해 줘요. 제안된 변경 사항은 적용하기 전에 모두 확인하고 수정할 수 있어요.

## 음성 대 음성 모델용 프롬프트 검증이란?

프롬프트 검증은 하이퍼클래스 기능으로, 기존 음성 AI 프롬프트를 음성 대 음성 모델에 맞게 자동으로 분석하고 다시 구성해 줘요.

기존 음성 에이전트는 음성 인식(STT), 언어 처리(LLM), 음성 합성(TTS)을 각각 다른 단계로 처리해요. S2S 모델은 음성을 더 직접 처리하기 때문에, 이전 방식에 맞춰 쓴 지침 중 일부는 필요 없어져요.

검증 기능은 오래된 지침을 제거하고 작업 흐름을 다시 정리해요. 변경 사항을 적용하기 전에 좌우 비교 화면도 보여 줘요.

![프롬프트 검증 개요 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084618510/original/gmSDidcYxaezB-77ZbBp_MJJb8kCWfKkPg.png?1793372209)

---

## 프롬프트 검증의 장점

프롬프트 검증을 쓰면 중요한 비즈니스 지침은 최대한 유지하면서 S2S 모델로 더 쉽게 옮겨 갈 수 있어요.

- 자동 정리: 불필요한 SSML 태그, 일시 정지 표시, 추임새 지침, 서식을 제거해요.
- 더 나은 구성: 긴 지침을 번호가 붙은 단계별 구조로 바꿔요.
- 모델별 최적화: GPT Live의 경우 음성 모델과 추론 모델의 지침을 나눠요.
- 비즈니스 규칙 유지: 운영 시간, 가격, 정책 같은 중요한 내용을 유지하도록 해요.
- 투명한 검토: 추가되거나 제거될 내용을 적용 전에 보여 줘요.
- 직접 제어: 제안된 변경 사항을 편집하거나 다시 생성하거나 취소할 수 있어요.

---

## 프롬프트 검증이 동작하는 방식

프롬프트 검증은 두 단계를 거쳐 기존 프롬프트를 S2S 모델에 맞게 준비해요.

1. 정리: 이전 파이프라인 방식에만 필요한 지침과 불필요한 서식을 제거해요.
2. 재구성: 지침을 명확한 단계로 정리하고 관련 있는 정보끼리 묶어요.

GPT Live에서는 지침을 다음 두 가지로 나눌 수도 있어요.

- 음성 모델(Speech Model): 인사말, 대화 톤, 자주 묻는 질문, 정책, 발신자와의 대화를 맡아요.
- 추론 모델(Reasoning Model): 가격 계산, 할인, 날짜 계산, 여러 단계가 필요한 판단 같은 복잡한 작업을 맡아요.

음성 모델에는 어떤 작업을 추론 모델에 넘겨야 하는지 설명하는 지침이 그대로 남아요.

![음성 모델과 추론 모델 지침 분리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084618579/original/dgQs46nUxendOXsLMV6doRsxkOlYn0hTaQ.png?1793372241)

---

## 음성 AI 프롬프트 검증하기

저장해 둔 프롬프트를 검증하면 불필요한 지침을 찾아내고, 선택한 S2S 모델과 더 잘 맞게 만들 수 있어요. 저장하기 전에 제안된 변경 사항을 모두 확인해서 중요한 비즈니스 요건이 정확하게 남아 있는지 살펴보세요.

1. **AI 에이전트 > 음성 AI > 에이전트 목록**으로 이동해 에이전트를 여세요.
2. **Model**(모델) 드롭다운에서 지원되는 GPT Live, GPT Realtime, Gemini 모델 중 하나를 선택하세요.
3. 기존 프롬프트를 저장하세요. 검증은 마지막으로 저장한 버전을 분석해요. 편집기에서 아직 저장하지 않은 변경 내용은 분석하지 않아요.
4. 프롬프트 편집기 위쪽의 **Validate prompt**(프롬프트 검증)를 클릭하세요.

   ![프롬프트 검증 버튼 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084618845/original/saInG6EY2Sf2bn1kuyXtqBmNjeM7haFJRw.png?1793372396)
5. 검증 대화 상자의 안내를 읽고 **Start validating**(검증 시작)을 클릭하세요.

   ![검증 시작 대화 상자](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084618948/original/ooFKpZOIPghzZYHsmTraVOkgk_ahvEDx4Q.png?1793372415)
6. 좌우 비교 화면에서 제안된 지침을 검토하세요.

   - 빨간색 글씨는 제거된 지침이에요.
   - 초록색 글씨는 추가되거나 다시 쓴 지침이에요.
   - **Warnings and removed content**(경고 및 제거된 내용)는 확인이 필요한 항목을 강조해서 보여 줘요.

     ![경고 및 제거된 내용 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084621021/original/cQobq6gLW5PaBtIVd38MElXWAc9-7dHjwQ.png?1793373222)

     ![경고 및 제거된 내용 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084621140/original/5om0G6sg1kbUxFt7g_EOHOgdWIureW2isQ.png?1793373269)
7. 지침을 직접 고치려면 **Edit result**(결과 편집)를, 새 제안을 받으려면 **재생성**을 클릭하세요.
8. **적용**을 클릭하면 제안된 지침이 편집기에 반영돼요.
9. 에이전트 빌더에서 **저장**을 클릭해 수정한 프롬프트를 저장하세요.

   {% hint style="warning" %}
   **적용**을 클릭해도 변경 내용이 자동으로 저장되지는 않아요.
   {% endhint %}
10. **웹 통화** 또는 **전화 통화**로 업데이트한 에이전트를 테스트해서, 비즈니스 규칙을 제대로 따르는지 확인하세요.

---

## 프롬프트 검증과 프롬프트 최적화 도구의 차이

두 도구 모두 음성 AI 에이전트를 개선하는 데 도움이 되지만 쓰임이 달라요. 프롬프트 검증은 S2S 모델에 맞게 지침을 준비하는 데 집중하고, [프롬프트 최적화 도구](voice-ai-prompt-optimizer.md)는 테스트 시나리오로 에이전트의 동작을 평가해요.

| 기능 | 용도 |
| --- | --- |
| Validate prompt(프롬프트 검증) | S2S 모델에 맞게 기존 지침을 정리하고 다시 구성해요. |
| 프롬프트 최적화 도구 | 에이전트 대화를 테스트하고 개선 방안을 추천해요. |
| [Edit Prompts with AI(AI로 프롬프트 편집)](voice-ai-edit-prompts-with-ai.md) | 사용자의 요청에 따라 선택한 프롬프트 지침을 다시 써요. |

---

## 자주 묻는 질문

### 프롬프트 검증을 하면 에이전트가 자동으로 업데이트되나요?

아니요. 제안된 변경 사항을 검토한 뒤 **적용**을 클릭하고, 이어서 **저장**을 클릭해야 해요.

### 비즈니스 규칙이나 정책이 바뀌지는 않나요?

검증 기능은 가격, 운영 시간, 정책 같은 비즈니스 관련 정보를 유지하도록 만들어졌어요. 그래도 제안된 변경 사항은 적용하기 전에 항상 확인하세요.

### S2S 모델은 모두 음성 모델과 추론 모델의 지침을 따로 쓰나요?

아니요. 이 문서에서 설명한 음성 모델과 추론 모델의 지침 분리 구조는 GPT Live에만 해당해요.

### 제안된 지침을 직접 수정할 수 있나요?

네. **Edit result**(결과 편집)를 클릭하면 적용하기 전에 제안된 지침을 수정할 수 있어요.

### 중요한 지침이 제거되면 어떻게 하나요?

**적용**을 클릭하기 전에 해당 지침을 복원하거나 수정할 수 있어요.
