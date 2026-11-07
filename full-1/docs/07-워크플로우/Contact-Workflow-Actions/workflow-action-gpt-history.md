---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003381-workflow-action-gpt-history
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — GPT History(GPT 기록)

**GPT Powered by OpenAI**(OpenAI 기반 GPT) 액션에서 History(기록) 기능을 켜면 GPT 액션의 대화 기록을 저장할 수 있어요. 이전 대화를 바탕으로 더 알맞고 개인화된 답변을 만들고 싶을 때 쓰세요.

## 개요

GPT 액션에 이 기능을 쓰면 GPT 액션 기록을 저장할 수 있어요. 저장된 기록 덕분에 GPT 액션은 이전 대화를 참고해 더 관련성 높고 개인화된 답변을 만들 수 있어요.

## 액션 이름

**GPT Powered by OpenAI**(OpenAI 기반 GPT)

## Action Details(액션 상세 정보)

### 기록 유형

저장할 수 있는 기록 유형은 5가지예요.

- **This Sub Account**(이 서브 계정): History 유형이 **This Sub Account**인 모든 GPT 대화를 서브 계정 안의 모든 워크플로우에 걸쳐 기억해요.
- **This Workflow**(이 워크플로우): History 유형이 **This Workflow**인 모든 GPT 대화를 해당 워크플로우 안에서 기억해요.
- **Per Execution**(실행별): History 유형이 **Per Execution**인 모든 GPT 대화를 워크플로우의 한 번의 실행 안에서 기억해요.
- **This Step**(이 단계): History 유형이 **This Step**인 경우, 특정 액션의 모든 GPT 대화를 여러 번의 실행에 걸쳐 기억해요.
- **Custom**(사용자 지정): 사용자가 직접 History 유형을 만들어요. 같은 워크플로우 안에서도, 여러 워크플로우에 걸쳐서도 쓸 수 있어요.

### 사용 방법

1. **실험실**에서 이 옵션을 켜세요.
2. **GPT Powered By OpenAI** 액션을 선택하세요.
3. **Enable history**(기록 사용)를 켜세요.

   ![Enable history 토글을 켠 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497467/original/5xEmqYPpkG34-uQFcJPMPoJ36su16U_17A.png?1725875666)

4. 드롭다운에서 **History for**(기록 대상)를 선택하세요.

   ![History for 드롭다운 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497464/original/THDiOtWyK24H_G32R-emMvKlIxGdqDFJZg.jpeg?1725875666)

   ![History for 유형을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497463/original/7fsuxw5cXSfQ0CMPkfFT5xdMO8jOq77IUA.jpeg?1725875666)

5. 시스템 지침(System Instructions)을 추가하세요.

   ![시스템 지침을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032497468/original/w_5xFjUniSYzXVGtEilPCFXewbZ5LamE0w.png?1725875666)

## Advanced options(고급 옵션)

- **System Instructions**(시스템 지침): GPT 액션이 더 구체적이고 원하는 결과를 내도록 필요하면 지침을 추가할 수 있어요. 여기에 추가한 규칙은 모든 GPT 액션이 따라요.
- **Exclude instructions from history**(기록에서 지침 제외): 시스템 지침을 기록에서 빼고 싶을 때 이 토글을 켜세요.
- **Exclude responses from history**(기록에서 응답 제외): 이 토글을 켜면 이 액션의 응답이 기록에 저장되지 않아요. 응답이 감정(긍정·부정)이나 분석 결과처럼 출력된 값일 때 유용해요.

## 참고 사항

- **Enable history**를 켜면 기본으로 GPT 4 모델이 선택돼요.
- History는 액션 유형이 **Custom**일 때만 작동해요.
- History는 연락처마다 따로 관리돼요.

## 예시

**기존 고객에게 추천 상품 보내기**

시나리오: 고객의 이전 구매 내역을 바탕으로 대화하고, 새 상품을 추천하면서 다른 상품에도 관심이 있는지 확인해요.

**트리거 설정**

- 트리거: **Order Placed**(주문 접수)
- **Name**(이름): Order Placed

**워크플로우 액션**

1. **GPT Powered by OpenAI**: GPT 액션을 추가해요. 모든 액션에 History를 켜면 서로의 프롬프트와 출력 내용을 맥락으로 알 수 있어요. 이 액션으로 이메일을 작성하고, 고객 답장의 감정을 확인해요.
2. **Email**(이메일): GPT 액션의 출력 내용을 고객에게 보내요.
3. **Wait**(대기): 고객이 이메일에 답장했는지 확인할 때까지 기다려요.
4. **If/Else**(조건 분기): 고객 답장의 감정에 따라 분기해요. 감정이 긍정이면 대화를 이어 가고, 아니면 연락처가 워크플로우에서 나가요.

결과: 이 자동화로 이메일에서 고객의 관심을 다시 끌어낼 수 있어요. 고객에게 개인화된 답장을 보내 판매 가능성도 높여요.

![예시 워크플로우 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032504268/original/nxs8BHRW_3fTg5FNFftUkWaVwfg5m2iXkw.png?1725879284)

![예시 워크플로우 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032504331/original/SnVn5ecddD4vCtdub3CQScWQusVu7I-y0g.png?1725879318)
