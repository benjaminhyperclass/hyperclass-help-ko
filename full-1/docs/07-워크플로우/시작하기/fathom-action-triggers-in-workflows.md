---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007578-fathom-action-triggers-in-workflows
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# Fathom 워크플로우 트리거·액션 — New Recording(새 녹화), List Recordings(녹화 목록), Fetch Transcript(녹취록 가져오기), Fetch Summary(요약 가져오기)

하이퍼클래스 워크플로우에서 Fathom을 연결하면 미팅 녹화, 녹취록, 요약을 바탕으로 다음 단계를 자동화할 수 있어요. 새 녹화가 준비되면 워크플로우를 시작하거나, 미팅 데이터를 이후 액션에 넘겨서 후속 이메일 발송, 작업 생성, 내부 알림을 미팅 메모 복사 없이 처리할 수 있어요.

{% hint style="info" %}
Fathom 액션은 프리미엄 워크플로우 액션이라서 실행할 때마다 추가 요금이 발생할 수 있어요.
{% endhint %}

## [동영상](https://www.youtube.com/embed/tVE2bznbawc?&wmode=opaque)

---

## Fathom 트리거·액션이란?

Fathom 트리거와 액션은 Fathom 미팅 데이터를 하이퍼클래스 워크플로우에 연결해 줘요. 새 녹화가 처리되면 트리거가 워크플로우를 시작하고, 액션은 녹화, 녹취록, 요약을 가져와 이후 단계에서 쓸 수 있게 해 줘요.

Fathom에는 워크플로우 트리거 1개와 액션 3개가 있어요.

| 구분 | 이름 | 하는 일 |
| --- | --- | --- |
| 트리거 | New Recording(새 녹화) | 새 Fathom 녹화가 만들어지고 처리되면 워크플로우를 시작해요. |
| 액션 | List Recordings(녹화 목록) | 연결된 계정에서 사용할 수 있는 Fathom 녹화를 가져와요. |
| 액션 | Fetch Transcript(녹취록 가져오기) | 선택한 녹화의 녹취록을 가져와요. |
| 액션 | Fetch Summary(요약 가져오기) | 선택한 녹화의 AI 생성 요약을 가져와요. |

---

## Fathom 트리거·액션의 장점

- 후속 조치 자동화: 녹취록이나 요약 내용을 활용해 통화 후 맞춤 이메일을 만들 수 있어요.
- 작업 생성: 미팅 요약을 ClickUp 같은 연결된 도구의 작업으로 바꿀 수 있어요.
- 내부 공유: 중요한 미팅 내용이나 실행 항목이 준비되면 팀원에게 알릴 수 있어요.
- 수작업 감소: Fathom에서 복사해 붙여넣지 않아도 미팅 데이터를 워크플로우로 가져올 수 있어요.
- 유연한 자동화: AI, 이메일, 알림, 작업 도구 등 다른 워크플로우 액션과 Fathom 데이터를 함께 쓸 수 있어요.

---

## Fathom 트리거·액션 사용하기

워크플로우를 만들기 전에 Fathom을 먼저 연결해 두세요. 그래야 하이퍼클래스가 올바른 Fathom 계정에서 녹화, 녹취록, 요약을 가져올 수 있어요. Fathom은 **워크플로우 빌더**에서 연결하거나 **설정 > 연동**에서 연결할 수 있어요.

1. **자동화 > 워크플로우**로 이동해요.
2. 새 워크플로우를 만들거나 기존 워크플로우를 열어요.

   ![워크플로우 만들기 화면](https://jumpshare.com/share/nvcVUJz7Aom6YsUhNIDg+/Screen+Shot+2026-06-17+at+17.35.03.png)
3. **Add New Trigger**(새 트리거 추가)를 누르거나 새 워크플로우 액션을 추가해요.
4. **Apps**(앱) 탭을 선택해요.
5. **Fathom**을 검색해서 선택해요.
6. **New Recording**(새 녹화) 트리거를 선택해요.
7. Fathom이 연결되어 있지 않다면 **Connect Your Account**(계정 연결)를 눌러요.
8. 필터에서 트리거가 녹화를 감지할 위치를 선택해요. 예를 들어 **My Meetings**(내 미팅)나 **Team Meetings**(팀 미팅)가 있어요.
9. **Find New Records**(새 레코드 찾기)를 눌러 트리거를 테스트해요.
10. 반환된 트리거 데이터를 확인해요.
11. **Save Trigger**(트리거 저장)를 눌러요.

    ![트리거 설정과 저장 과정](https://jumpshare.com/share/3JVn6AAfbTLO9JW0PjgR+/GIF+Recording+2026-06-17+at+17.41.35.gif)
12. **+** 버튼을 눌러 액션을 추가해요.
13. 사용할 액션을 선택해요.

    - **List Recordings**

      연결된 계정에서 사용할 수 있는 Fathom 녹화 목록을 가져와요.

      하는 일:

      - 연결된 사용자를 기준으로 녹화를 가져와요.
      - 이후 액션에서 쓸 수 있도록 녹화 요약과 다른 필드를 선택할 수 있어요.
    - **Fetch Transcript**

      선택한 녹화의 녹취록을 가져와요.

      하는 일:

      - 미팅 전체 녹취록을 제공해요.
      - 녹취록 데이터를 AI 같은 다른 워크플로우 단계에서 쓸 수 있어요.
    - **Fetch Summary**

      선택한 녹화의 AI 생성 요약을 가져와요.

      하는 일:

      - 미팅 내용을 간추린 요약을 제공해요.
      - 실행 항목 추출, 알림, 후속 조치에 쓸 수 있어요.
14. **Test**(테스트)로 확인한 뒤 **Save**(저장)를 눌러 액션을 저장해요.

    ![액션 테스트와 저장 과정](https://jumpshare.com/share/6jUQ6sb0MxFm87HvaYwQ+/GIF+Recording+2026-06-17+at+17.55.05.gif)

---

## 활용 예시

### 영업 통화 후 AI 후속 이메일 보내기(경쟁사 정보 반영)

문제:

영업 후속 연락은 품질과 시점이 들쑥날쑥하기 쉬워요. 이메일에 맞춤 내용이 없거나 실제 통화 내용이 반영되지 않기도 해요. 통화에서 언급된 경쟁사도 고려하지 못해서 포지셔닝이 약해지고 전환율도 떨어질 수 있어요.

워크플로우:

- 트리거: **Fathom – New Recording**
- 액션: **Fetch Transcript**
- 액션: **Manus – Competitor Analysis**(경쟁사 분석)
- 액션: **AI (AI / OpenAI)**
- 액션: **Send Email**(이메일 보내기)

진행 과정:

- 녹취록을 분석해 통화에서 언급된 경쟁사를 찾아요.
- Manus가 경쟁사 인사이트를 더해요.
- AI가 우리 강점이 드러나는 맞춤 후속 이메일을 작성해요.
- 이메일이 자동으로 발송돼요.

AI 프롬프트(경쟁사 정보를 반영한 후속 이메일):

```
You are a sales assistant.

Based on the following call transcript and competitor analysis, write a personalized follow-up email.

Include:
- A brief thank you
- Key points discussed
- Any objections or concerns mentioned
- Clear next steps
- Subtle positioning that differentiates us from competitors mentioned

When referencing competitors:
- Do NOT criticize competitors directly
- Highlight our strengths in a professional and confident manner
- Address any concerns raised during the call

Keep the tone professional, concise, and friendly.

Transcript:
{{transcript}}

Competitor Insights:
{{competitor_analysis}}
```

AI 프롬프트(경쟁사 추출 및 분석 – Manus):

```
Analyze the following call transcript.

1. Identify any competitors mentioned.
2. For each competitor, provide:
   - Competitor name
   - Context in which they were mentioned
   - Perceived strengths
   - Possible weaknesses or gaps we can differentiate on

Return structured output.

Transcript:
{{transcript}}
```

![영업 통화 후 후속 이메일 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067735136/original/7B6bD155BVO2_8gP6Ih1KG-QepIWEwtrdw.png?1774456179)

### 고객 통화 후 자동 요약과 작업 배정

문제:

고객 통화에서 나온 실행 항목과 결정 사항이 일관되게 기록되거나 추적되지 않아요. 그 결과 납품 누락, 담당자 불분명, 비효율적인 실행으로 이어져요.

워크플로우:

- 트리거: **Fathom – New Recording**
- 액션: **Fetch Summary**
- 액션: **AI (extract action items)**(실행 항목 추출)
- 액션: **Create Task (ClickUp)**(ClickUp 작업 만들기)
- 액션: **Send Internal Notification**(내부 알림 보내기)

진행 과정:

- 미팅 요약이 만들어져요.
- AI가 구조화된 실행 항목을 추출해요.
- ClickUp에 작업이 만들어져요.
- 팀에 내부 알림이 가요.

![고객 통화 후 자동 요약과 작업 배정 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067735900/original/1O9XWDaSNF6uGXLwmq9RQcgea9KbnCsSNA.png?1774456399)

---

## 자주 묻는 질문

### New Recording 트리거는 언제 실행되나요?
Fathom 미팅 녹화가 만들어지고 처리된 뒤에 실행돼요. 미팅이 끝난 뒤 몇 분 정도 걸릴 수 있어요.

### 트리거나 액션을 쓰기 전에 Fathom을 연결해야 하나요?
네. Fathom을 연결해야 하이퍼클래스가 녹화, 녹취록, 요약을 가져올 수 있어요.

### Fathom 액션은 프리미엄 워크플로우 액션인가요?
네. Fathom 액션은 프리미엄 워크플로우 액션이라서 실행할 때마다 요금이 발생할 수 있어요.

### Fathom 녹취록을 AI 액션에서 쓸 수 있나요?
네. 녹취록 데이터를 AI 액션에 넘겨서 후속 메시지를 만들고, 실행 항목을 추출하고, 논의 내용을 요약하고, 내부 공유 내용을 준비할 수 있어요.

### Fathom 녹화가 연락처와 자동으로 매칭되나요?
연락처 매칭은 자동으로 되지 않아요. 이메일 주소 같은 참가자 정보를 워크플로우 로직에서 활용해 연락처를 매칭하거나 업데이트할 수 있어요.

### 테스트할 레코드가 하나도 안 나와요. 어떻게 하나요?
다음 세 가지를 확인해 보세요.

- Fathom이 연결되어 있는지
- 선택한 녹화 소스에 최근 처리된 녹화가 있는지
- 트리거나 액션의 필터가 너무 좁게 설정되어 있지 않은지
