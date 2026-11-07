---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002677-workflow-trigger-customer-replied
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Customer Replied(고객 답장)

**Customer Replied**(고객 답장) 트리거는 고객이 보낸 답장을 계기로 워크플로우를 시작해요. 이 문서에서는 트리거를 설정하는 방법, 쓰면 좋은 점, 활용 예시를 안내해요.

## Customer Replied 트리거란?

고객의 답장은 구매 의사를 가장 잘 보여 주는 신호 중 하나예요. 이 트리거를 쓰면 연락처가 답장할 때마다 워크플로우가 바로, 같은 방식으로 반응해요. 그래서 후속 연락을 빨리 하고, 메시지를 알맞은 곳으로 보내고, 파이프라인을 계속 움직이게 할 수 있어요.

**Customer Replied** 트리거는 연락처가 메시지에 답장하면 워크플로우를 시작해요. 필터(문구, 태그, 의도 유형, 답장 채널 등)를 추가하면 꼭 필요한 답장에만 워크플로우가 실행되게 할 수 있어요.

## Customer Replied 트리거를 쓰면 좋은 점

- **빠른 후속 연락:** 연락처가 답장하는 즉시 작업을 시작해요.
- **정확한 분배:** 필터로 대화를 알맞은 팀이나 워크플로우로 보내요.
- **깔끔한 자동화:** 문구, 태그, 채널로 조건을 좁혀서 워크플로우가 중복되지 않게 해요.
- **채널별 제어:** 답장이 온 채널(**All-in-One Chat** 포함)에 따라 다른 워크플로우를 실행해요.

## 워크플로우에서 Customer Replied 트리거 설정하기

트리거를 제대로 설정해 두면 잘못 실행되는 일을 막고 자동화를 예측할 수 있어요. 아래 순서대로 트리거를 추가하고, 이름을 정하고, 용도에 맞는 필터를 적용해 보세요.

1. 서브 계정에 로그인하세요.
2. **자동화 > 워크플로우**로 이동하세요.

   ![자동화 > 워크플로우 화면](https://jumpshare.com/share/Cnveqtr2TxPJeI2Wif1E+/Screen+Shot+2026-01-05+at+6.02.58+PM.png)
3. 새 워크플로우를 만들거나 기존 워크플로우를 여세요.

   ![새 워크플로우 만들기 또는 기존 워크플로우 열기](https://jumpshare.com/share/vy9UlWTok3ZfxkZZpVLC+/Screen+Shot+2026-01-05+at+6.04.41+PM.png)
4. **+ Add New Trigger**(새 트리거 추가) 버튼을 클릭하세요.

   ![Add New Trigger 버튼](https://jumpshare.com/share/UnzrNs9thHE0GfMD3vah+/Screen+Shot+2026-02-25+at+19.29.54.png)
5. **Customer Replied**를 선택하세요.

   ![Customer Replied 트리거 선택](https://jumpshare.com/share/F3l4CgUJxL9rOrkgp2rR+/Screen+Shot+2026-02-25+at+19.31.15.png)
6. **Trigger Name**(트리거 이름)에 나중에 쉽게 찾을 수 있는 이름을 입력하세요.
7. **+ Add Filters**(필터 추가)를 클릭해서 워크플로우가 실행될 조건을 좁히세요.

   ![Add Filters 버튼](https://jumpshare.com/share/wzbncj5YS0ptAaBniCtg+/Screen+Shot+2026-02-25+at+19.37.13.png)
8. 용도에 맞는 필터를 고르세요. 필터를 쓰면 어떤 답장에 워크플로우를 실행할지 정확히 정할 수 있어요. 고를 수 있는 필터는 다음과 같아요.

   1. **Contains Phrase**(문구 포함): 답장에 지정한 단어나 문구가 들어 있을 때만 실행돼요.
   2. **Exact Match Phrase**(문구 정확히 일치): 답장이 지정한 문구와 똑같을 때만 실행돼요.
   3. **Has Tag**(태그 보유): 선택한 태그가 있는 연락처만 포함해요.
   4. **Doesn't Have Tag**(태그 미보유): 선택한 태그가 있는 연락처를 제외해요.
   5. **Intent Type**(의도 유형): 의도 감지로 답장을 분류해요(예: 긍정적인 답변, 불만, 질문).
   6. **Replied to Workflow**(답장한 워크플로우): 연락처가 특정 워크플로우에서 보낸 메시지에 답장했을 때만 실행돼요.
   7. **Reply Channel**(답장 채널): 선택한 채널에서 답장이 왔을 때만 실행돼요.

      ![Reply Channel 필터](https://jumpshare.com/share/GU3ZcG2ZCLyoofKupX4b+/Screen+Shot+2026-02-25+at+19.40.14.png)
   8. **Save Trigger**(트리거 저장)를 클릭하세요.

      ![Save Trigger 버튼](https://jumpshare.com/share/CesVmFfHLezy0jzFNZRX+/Screen+Shot+2026-02-25+at+19.47.39.png)
   9. 필요한 워크플로우 액션을 추가한 다음 워크플로우를 **Publish**(게시)하세요.

      ![워크플로우 Publish](https://jumpshare.com/share/CtxVy1nNRoaAMgctqT4B+/Screen+Shot+2026-02-25+at+19.48.46.png)

## Reply Channel 필터 (All-in-One Chat 포함)

**Reply Channel**로 대상을 정하면 SMS, 이메일, 소셜 메시지, 채팅마다 다른 자동화를 만들 수 있어요. 한 연락처가 여러 채널로 답장할 수 있는데, 그중 일부 답장에만 워크플로우를 실행하고 싶을 때 특히 유용해요.

1. 트리거 필터에서 **Reply Channel**을 여세요.
2. 맞추려는 채널을 선택하세요(예: Email, WhatsApp).
3. **Reply Channel에서 All-in-One Chat 사용하기:** **Reply Channel**을 **All-in-One Chat**으로 선택하면 추가 필터가 나타나요. 이 필터로 All-in-One 채팅의 유형과 특정 위젯·구성을 기준으로 답장을 좁힐 수 있어요.
4. **Reply Channel**을 **All-in-One Chat**으로 설정하세요.
5. **Chat Type is**(채팅 유형)를 설정하세요. 이 필터는 All-in-One Chat을 선택한 뒤에만 나타나요.

   - **Chat Widget**(채팅 위젯)
   - **Live Chat**(라이브 채팅)
6. 세 번째 단계의 필터에서 세부 옵션을 선택하세요. 이 필터는 **Chat Type is**에서 고른 값에 따라 달라져요.

   1. **Chat Type is = Chat Widget**이면

      - **Chat Widget is**(채팅 위젯)를 선택하세요. 드롭다운에는 All-in-One Chat 위젯만 나와요.
   2. **Chat Type is = Live Chat**이면

      - **Live Chat is**(라이브 채팅)를 선택하세요. 드롭다운에는 All-in-One Live Chat 구성만 나와요.

![All-in-One Chat 필터 설정 화면](https://jumpshare.com/share/YdY0xfjY6G2oEuZMj7v7+/GIF+Recording+2026-02-25+at+20.30.42.gif)

## Customer Replied 트리거 활용 예시

실제 사례를 보면 어떤 필터와 액션을 골라야 할지 감이 잡혀요. 아래 예시를 참고해서 실제 고객 답장 상황에 맞는 자동화를 만들어 보세요.

1. 특정 All-in-One Chat 위젯으로 고객이 답장하면 팀에 알리기

   - 트리거: **Customer Replied**
   - 필터: **Reply Channel** = **All-in-One Chat** → **Chat Type is** = **Chat Widget** → **Chat Widget is** = (위젯 선택)
   - 액션: 내부 알림 보내기, 대화 배정, 작업 만들기

2. Live Chat 답장을 지원 담당 큐로 보내기

   - 트리거: **Customer Replied**
   - 필터: **Reply Channel** = **All-in-One Chat** → **Chat Type is** = **Live Chat** → **Live Chat is** = (구성 선택)
   - 액션: 티켓 만들기, 지원 채널에 알림 보내기, 태그 추가, 사용자 배정

3. 구매 의향이 높은 답장에서 기회 만들기

   - 트리거: **Customer Replied**
   - 필터: **Contains Phrase**(예: “관심”, “예약”, “가격”) + **Reply Channel**(원하는 채널 선택)
   - 액션: **Create Opportunity**(기회 만들기), 영업 담당자에게 알림 보내기, 후속 메시지 보내기

## 자주 묻는 질문

### 특정 고객의 답장에만 워크플로우를 실행할 수 있나요?
네, 태그를 사용해서 특정 고객 그룹에만 워크플로우가 실행되게 좁힐 수 있어요.

### 이 트리거에서 의도 유형(Intent Type)은 어떻게 작동하나요?
의도 유형은 자연어 처리(NLP)로 답장을 “질문”, “불만”, “긍정적인 답변” 등으로 분류해요. 분류된 의도마다 알맞게 처리하도록 워크플로우를 설정할 수 있어요.

### 답장 채널에 따라 다른 워크플로우를 실행할 수 있나요?
네, WhatsApp이나 이메일 같은 특정 채널별로 워크플로우를 설정할 수 있어요. 특정 번호나 주소까지 좁힐 수도 있어요.
<!-- 검토 필요: 원문 내용이 서로 다름 (특정 번호·주소로 좁힌다는 설명이 있지만, 필터 목록에는 해당 필터가 없음) -->

### All-in-One Chat 지원은 모든 워크플로우 트리거에 적용되나요?
아니요. **All-in-One Chat** 옵션은 **Customer Replied** 트리거의 **Reply Channel** 필터에서만 쓸 수 있어요.

### 기존에 만든 Chat Widget 워크플로우가 작동하지 않게 되나요?
아니요. 기존 **Chat Widget** 기반 트리거와 워크플로우는 전과 똑같이 작동해요.

### Chat Widget 답장과 Live Chat 답장에 서로 다른 워크플로우를 실행할 수 있나요?
네. 트리거를 따로 만들거나 워크플로우를 따로 만들고, **Chat Type is**를 각각 **Chat Widget** 또는 **Live Chat**으로 설정하세요.
