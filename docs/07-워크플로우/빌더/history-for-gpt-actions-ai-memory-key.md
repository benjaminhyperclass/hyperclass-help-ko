---
원문: /support/solutions/articles/155000003026-history-for-gpt-actions-ai-memory-key-
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — GPT 액션의 기록(History for GPT actions, AI Memory Key)

GPT 액션이 이전 대화를 기억하고 활용하도록 하는 기능이에요. 이 기능을 켜면 GPT 액션이 지난 대화를 바탕으로 더 알맞고 개인에게 맞춘 응답을 만들 수 있어요.

## 새로운 기능

GPT 액션이 기록(History)을 저장하고 활용할 수 있게 되었어요. 이전에 GPT 액션과 주고받은 내용을 바탕으로 응답을 만들 수 있어요.

## 기록 유형

저장할 수 있는 기록 유형은 5가지예요.

- **This Sub Account**(이 서브 계정): 기록 유형을 이 값으로 설정한 GPT 액션이, 서브 계정 안의 모든 워크플로우에서 나눈 GPT 대화를 전부 기억해요.
- **This Workflow**(이 워크플로우): 기록 유형을 이 값으로 설정한 GPT 액션이, 해당 워크플로우 안에서 나눈 GPT 대화를 전부 기억해요.
- **Per Execution**(실행별): 기록 유형을 이 값으로 설정한 GPT 액션이, 워크플로우를 한 번 실행하는 동안 나눈 GPT 대화를 전부 기억해요.
- **This Step**(이 단계): 기록 유형을 이 값으로 설정한 액션이, 여러 번 실행되는 동안 그 액션에서 나눈 GPT 대화를 전부 기억해요.
- **Custom**(사용자 지정): 직접 기록 유형을 만들어요. 같은 워크플로우 안에서도, 여러 워크플로우에 걸쳐서도 쓸 수 있어요.

## 사용 방법

1. **실험실**에서 해당 옵션을 켜세요.
2. **GPT Powered By OpenAI**(OpenAI 기반 GPT) 액션을 선택하세요.
3. **Enable history**(기록 사용)를 켜세요.

   ![Enable history 토글을 켠 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030502005/original/oXFmqdV5E6v_46Vq_Na-V6Z23Wfqtrcz9Q.png?1722935207)

4. 드롭다운에서 **History for**(기록 대상)를 선택하세요.

   ![History for 드롭다운을 연 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030502061/original/iCQ-HimehhwH5jjUTbt1m2XMARS2uGhjog.png?1722935238)

   ![History for 선택 항목 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030502075/original/i-3VUeODrfNSs7fF9RP9AKeCH4ohaJ_HwQ.png?1722935258)

5. 시스템 지침을 추가하세요.

   ![시스템 지침을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030502128/original/KOlGgxxfGAI8awQ9C33rihtEAiK_07i3-g.png?1722935276)

## Advanced Options(고급 옵션)

- **System Instructions**(시스템 지침): 필요하면 지침을 추가해서 GPT 액션에 더 많은 정보를 줄 수 있어요. 그러면 더 구체적이고 원하는 결과를 얻을 수 있어요. 여기에 추가한 규칙은 모든 GPT 액션이 따라요.
- **Exclude instructions from history**(기록에서 지침 제외): 시스템 지침을 기록에서 빼고 싶을 때 이 토글을 사용하세요.
- **Exclude responses from history**(기록에서 응답 제외): 이 토글을 켜면 이 액션의 응답이 기록에 저장되지 않아요. 응답이 감정(긍정·부정)이나 분석 결과처럼 출력으로 받는 값일 때 유용해요.

## 참고할 점

- **Enable history**를 켜면 기본으로 GPT 4 모델이 선택돼요.
- 기록은 **Custom** 액션 유형에서만 작동해요.
- 기록은 연락처마다 따로 관리돼요.
