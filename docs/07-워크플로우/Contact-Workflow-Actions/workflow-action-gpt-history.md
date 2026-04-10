---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Contact Workflow Actions
---

# 워크플로우 액션 - GPT 히스토리

## 목차

- [개요](#개요)
- [액션 이름](#액션-이름)
- [액션 세부사항](#액션-세부사항)
- [히스토리 유형](#히스토리-유형)
- [사용 방법](#사용-방법)
- [고급 옵션](#고급-옵션)
- [주의사항](#주의사항)
- [예시](#예시)

## 개요

GPT 액션에서 이 기능을 사용하면 GPT 액션의 히스토리를 저장할 수 있습니다. GPT 액션은 과거 GPT 상호작용을 바탕으로 더욱 관련성 높고 개인화된 응답을 생성할 수 있습니다.

## 액션 이름

GPT Powered by OpenAI

## 액션 세부사항

## 히스토리 유형

저장할 수 있는 히스토리 유형은 5가지입니다:

- **This Sub Account(이 하위 계정)** - 히스토리 유형이 "This Sub Account"인 하위 계정 내 모든 워크플로우의 GPT 대화를 기억합니다
- **This Workflow(이 워크플로우)** - 히스토리 유형이 "This Workflow"인 워크플로우 내의 모든 GPT 대화를 기억합니다
- **Per Execution(실행당)** - 히스토리 유형이 "Per Execution"인 단일 실행에서 워크플로우 내의 모든 GPT 대화를 기억합니다
- **This Step(이 단계)** - 히스토리 유형이 "This Step"인 여러 실행에 걸쳐 특정 액션의 모든 GPT 대화를 기억합니다
- **Custom(커스텀)** - 사용자가 동일한 워크플로우 또는 여러 워크플로우에서 사용할 수 있는 커스텀 히스토리 유형을 생성할 수 있습니다

## 사용 방법

- Labs에서 옵션을 활성화합니다
- "GPT Powered By OpenAI" 액션을 선택합니다
- "Enable history(히스토리 활성화)"를 켭니다

![히스토리 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497467/original/5xEmqYPpkG34-uQFcJPMPoJ36su16U_17A.png?1725875666)

- 드롭다운에서 "History for(히스토리 대상)"을 선택합니다

![히스토리 대상 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497464/original/THDiOtWyK24H_G32R-emMvKlIxGdqDFJZg.jpeg?1725875666)

![히스토리 유형 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497463/original/7fsuxw5cXSfQ0CMPkfFT5xdMO8jOq77IUA.jpeg?1725875666)

- 시스템 지시사항을 추가합니다

![시스템 지시사항 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497468/original/w_5xFjUniSYzXVGtEilPCFXewbZ5LamE0w.png?1725875666)

## 고급 옵션

- **System Instructions(시스템 지시사항)** - 필요시 GPT 액션에 더 많은 정보를 제공하여 더욱 구체적이고 원하는 결과를 얻기 위한 지시사항을 추가할 수 있습니다. 모든 GPT 액션이 따를 규칙을 추가할 수 있습니다.
- **Exclude instructions from history(히스토리에서 지시사항 제외)** - 사용자가 시스템 지시사항을 "히스토리"에서 제외하고 싶을 때 사용할 수 있는 토글입니다.
- **Exclude responses from history(히스토리에서 응답 제외)** - 이 기능을 켜면 이 액션의 응답이 히스토리에 저장되지 않습니다. 응답이 감정(긍정 또는 부정)이나 출력으로 받은 분석 결과일 때 유용합니다.

## 주의사항

- Enable History를 켜면 기본적으로 GPT 4 모델이 선택됩니다.
- 히스토리는 "Custom" 액션 유형에서만 작동합니다.
- 히스토리는 각 연락처별로 독립적입니다.

## 예시

**기존 고객에게 추천 상품 보내기**

시나리오: 고객의 이전 구매를 바탕으로 대화하고, 새로운 상품을 추천하며, 다른 제품에 관심이 있는지 확인합니다.

트리거 설정:
- 트리거: Order Placed(주문 완료)
- 이름: Order Placed

워크플로우 액션:
- **GPT Powered by OpenAI**: GPT 액션을 추가합니다. 모든 액션에 히스토리가 활성화되어 있으며 서로의 프롬프트와 출력에 대한 맥락을 가지고 있습니다. 이 액션은 이메일을 준비하고 고객 응답의 감정을 확인하는 데 사용됩니다.
- **Email(이메일)**: 이메일 액션은 GPT 액션의 출력을 고객에게 보내는 데 사용됩니다.
- **Wait(대기)**: 고객이 이메일에 답변했는지 확인하기 위해 대기가 추가됩니다.
- **If/Else(조건 분기)**: 고객 응답의 감정에 따라 분기됩니다. 감정이 긍정적이면 대화를 계속하고, 그렇지 않으면 연락처가 워크플로우를 종료합니다.

결과: 이 자동화는 이메일로 고객의 참여를 유도하고, 개인화된 응답을 고객에게 보내어 판매 가능성을 높이는 데 도움이 됩니다.

![워크플로우 예시 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032504268/original/nxs8BHRW_3fTg5FNFftUkWaVwfg5m2iXkw.png?1725879284)

![워크플로우 예시 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032504331/original/SnVn5ecddD4vCtdub3CQScWQusVu7I-y0g.png?1725879318)

---
*원문 최종 수정: Mon, 9 Sep, 2024 at 5:56 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*