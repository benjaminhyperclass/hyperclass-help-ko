---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009487-voice-intelligence
번역일: 2026-11-06
카테고리: 44-신기능-2026
---

# Voice Intelligence(음성 인텔리전스) — 통화 후 요약·QA 점수·필드 제안 자동 생성

Voice Intelligence는 녹음된 통화가 끝나면 통화 요약, QA 점수, 필드 제안, 통화 처리 결과 제안을 자동으로 만들어 주는 기능이에요. 통화가 끝날 때마다 메모를 쓰고, 연락처를 수정하고, 통화 결과를 기록하는 일을 대신해 줘요. 팀은 바로 다음 통화로 넘어갈 수 있어요.

{% hint style="info" %}
Voice Intelligence는 **실험실**(Labs) 기능이에요. 아직 개선하고 있는 기능이라 사용자 의견이 도움이 돼요.
{% endhint %}

## 매 통화 후 얻을 수 있는 것

| 결과 | 내용 |
| --- | --- |
| 통화 요약 | 연락처가 전화한 이유, 핵심 내용, 다음 단계를 정리해 줘요. 메모를 직접 입력하지 않아도 돼요. |
| QA 스코어카드 | 10점 만점의 종합 점수, 중요하게 보는 영역별 점수, 개선 팁을 보여 줘요. |
| 필드 제안 | 통화에서 언급된 이름, 이메일 같은 연락처 정보를 바로 저장할 수 있게 준비해 줘요. |
| 통화 처리 결과 제안 | 직접 만든 처리 결과 목록에서 통화 결과를 골라 줘요. |
| 녹취록 | 통화 내용 전체를 화자별로 나눠서 녹음 옆에 보여 줘요. |

{% hint style="info" %}
팀원이 승인하기 전에는 연락처 정보가 바뀌지 않아요.
{% endhint %}

## 시작하기 전에

- 실험실에서 켜기: 계정에서 **실험실**을 통해 Voice Intelligence를 켜야 해요.
- 통화 녹음 켜기: Voice Intelligence는 녹음된 통화에서만 작동해요.
- 하이퍼클래스 전화번호: 하이퍼클래스 전화번호로 걸거나 받은 통화에서 작동해요.
- 실제 대화만 대상: 받지 않은 통화와 아주 짧은 통화는 건너뛰어요. 자세한 내용은 [Voice Intelligence가 적용되는 통화](#voice-intelligence가-적용되는-통화)를 참고하세요.
- 추가 요금 없음: 기존 통화 전사 요금 외에 따로 청구되는 요금은 없어요. 자세한 내용은 설정 화면의 **Charges apply**(요금 부과)에 마우스를 올려 확인하세요.

## Voice Intelligence가 적용되는 통화

하이퍼클래스 전화번호를 사용한 녹음 통화라면 모두 적용돼요. 통화를 어디에서 받거나 걸었는지는 상관없어요.

| 통화 유형 | 지원 여부 |
| --- | --- |
| 웹 앱과 다이얼러 | 지원 |
| 모바일 앱 | 지원 |
| 데스크폰(SIP) | 지원 |
| 다른 전화(예: 휴대폰)로 착신 전환된 통화 | 지원. 통화가 여전히 하이퍼클래스 전화번호를 거치므로 녹음돼요. |
| 음성 AI 통화 | 해당 번호의 통화 녹음이 켜져 있으면 지원. 요약, 스코어카드, 제안은 음성 AI 에이전트가 처리한 통화를 기준으로 만들어져요. |
| IVR 통화, 워크플로우로 건 통화 | 녹음된 경우 지원 |
| 받은 음성 메시지 | 지원. 누가 왜 전화했는지, 다시 전화해 달라고 했는지를 요약해 줘요. |
| 내가 건 전화가 음성 사서함 인사말로 연결된 통화 | 지원. 요약에 음성 사서함으로 연결됐다고 나와요. 처리 결과 목록에 음성 사서함 항목이 있으면 그 항목이 제안돼요. |

### 적용되지 않는 통화

다음 통화에는 Voice Intelligence가 적용되지 않아요.

- 앱이 아닌 개인 전화로 건 통화. 하이퍼클래스 전화번호를 쓰지 않기 때문이에요.
- 다른 전화 제공업체에서 연결한 번호의 통화
- 통화 녹음이 꺼져 있는 번호의 통화
- 받지 않은 통화, 몇 마디 하고 끊은 통화처럼 내용이 거의 없는 짧은 통화

### 결과를 확인하는 위치

통화가 어디에서 이뤄졌는지에 따라 달라요. 모든 결과는 연락처의 대화 안에 있는 해당 통화에 저장돼요.

- 웹 앱 다이얼러에서 한 통화: 통화가 끝나면 바로 다이얼러에 결과가 열려요. 그 자리에서 통화 처리 결과를 확인하고 필드 제안을 저장하세요.
- 데스크폰, 착신 전환, 음성 AI, IVR, 워크플로우 통화: 통화 중에 결과를 검토할 화면이 없어요. 연락처의 대화를 열고 해당 통화에서 **전체 상세정보 보기**를 선택하세요. 필드 제안은 그곳에서 언제든 확인하고 저장할 수 있어요.

{% hint style="info" %}
웹 앱 다이얼러 밖에서 한 통화는 제안된 통화 처리 결과가 통화에 태그로 표시되고, 반짝이 아이콘이 붙어 있어요. **대화**에서 볼 수는 있지만 거기서 바꾸거나 저장할 수는 없어요.
{% endhint %}

## Voice Intelligence 켜기

1. **설정 > 전화 시스템**으로 이동하세요.
2. **음성** 탭을 선택한 다음 **통화 녹음 및 전사**를 선택하세요.
3. 왼쪽에서 **Voice Intelligence**(음성 인텔리전스)를 선택하세요.
4. **Voice intelligence** 스위치를 켜세요.

녹취록과 통화 요약은 항상 포함돼요. **Additional features**(추가 기능) 아래에서 사용할 QA 스코어카드, 필드 제안, 통화 처리 결과 제안의 체크박스를 선택하세요.

{% hint style="info" %}
추가 기능 세 가지는 모두 기본으로 켜져 있어요.
{% endhint %}

![Voice Intelligence 설정 화면의 메인 스위치와 추가 기능 체크박스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084253509/original/QziPHPwucvDhSluueKhPM5mPhDHP8TXihA.png?1793049521)

## 우리 비즈니스에 맞게 설정하기

관리자가 한 번 설정해 두면 이후 모든 통화에 적용돼요.

{% hint style="info" %}
변경한 설정은 새 통화에만 적용돼요. 지난 통화의 결과는 그대로 유지돼요.
{% endhint %}

### 통화 요약에 들어갈 내용 정하기

1. **통화 요약** 항목 옆의 **구성**을 선택하세요.
2. 요약 섹션 목록이 나타나요. 기본 섹션은 요약, 다음 단계, 핵심 내용, 우려 사항 및 반론이에요.
3. 섹션을 바꾸려면 편집 아이콘을 선택하세요. 이름, 설명, 형식(한 문장, 글머리 기호 목록, 짧은 문단)을 바꿀 수 있어요.
4. 섹션을 추가하려면 **Add section**(섹션 추가)을 선택하세요. 삭제하려면 **X**를 선택하세요. 섹션을 끌어서 순서를 바꿀 수도 있어요.
5. **변경사항 저장**을 선택하세요.

{% hint style="info" %}
설명은 Voice Intelligence가 무엇을 쓸지 알려 주는 지침이에요. 짧고 구체적으로 쓰세요. 예: *"연락처가 제기한 각 반론과 상담원이 어떻게 답변했는지."*
{% endhint %}

![기본 섹션이 표시된 통화 요약 구성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084253513/original/1wYvKALo8vy2y7MSJOoAqc2vS0doZuQSoA.png?1793049524)
![요약 섹션의 이름, 설명, 형식을 편집하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084253514/original/wqVtig59as_MnffnoNYT0cqvyxWfDnWabw.png?1793049524)

### 중요한 기준으로 통화 평가하기

1. **QA 스코어카드** 옆의 **구성**을 선택하세요.
2. 평가 카테고리 목록이 나타나요. 기본 카테고리는 인사 및 소개, 니즈 파악, 명확한 답변, 우려 사항 대응, 마무리 및 다음 단계예요.
3. 카테고리를 편집해 이름이나 설명을 바꾸세요. 설명에는 좋은 통화가 어떤 모습인지 적어요. 통화 스크립트에 맞춰 쓰세요.
4. 카테고리를 추가하려면 **카테고리 추가**를 선택하고, 삭제하려면 **X**를 선택하세요. 끌어서 순서를 바꿀 수도 있어요.
5. **변경사항 저장**을 선택하세요.

{% hint style="info" %}
각 카테고리는 0점부터 10점까지 점수를 받고, 종합 점수는 그 평균이에요. 통화에서 다뤄지지 않은 카테고리는 0점으로 계산하지 않고 건너뛰어요.
{% endhint %}

![기본 카테고리가 표시된 QA 스코어카드 구성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084253519/original/gpfooaBEICQkbjA0Kvtm1kbjUzEh7cqe8w.png?1793049525)

### 채울 연락처 필드 고르기

1. **필드 제안** 옆의 **구성**을 선택하세요.
2. 연락처 필드와 각 필드의 지침이 나타나요. 기본 필드는 이름, 성, 이메일이에요.
3. **필드 추가**를 선택하고 원하는 연락처 필드를 고르세요. 직접 만든 커스텀 필드도 선택할 수 있어요. 그다음 짧은 지침을 쓰세요. 예: *"연락처의 예산(미국 달러 기준). 언급되지 않았으면 비워 두세요."*
4. 연락처에 이미 있는 데이터를 절대 바꾸지 않으려면 **Only suggest values for empty fields**(비어 있는 필드에만 값 제안)를 켜세요.
5. **변경사항 저장**을 선택하세요.

![필드별 지침이 표시된 필드 제안 구성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084253520/original/5_KIAL8QaO47R7w2s1JvyyIqMg3M_Wp7BA.png?1793049527)

### 직접 만든 통화 결과 사용하기

Voice Intelligence는 직접 만든 목록에서만 통화 처리 결과를 골라요. 목록을 바꾸려면 **Call disposition suggestions**(통화 처리 결과 제안) 옆의 **Manage list**(목록 관리)를 선택하세요. **사용자 지정 처리 결과** 탭이 열려요.

![목록 관리 링크가 있는 통화 처리 결과 제안 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084253511/original/v0hsG-Y_TJ6hjW9T4VEfzKk9Ob3OOz7cIg.png?1793049522)

### 결과 언어 정하기

**설정** 아래에서 **Output language**(출력 언어)를 선택하세요. 요약, 메모 등 모든 결과가 이 언어로 작성돼요.

![출력 언어 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084253512/original/4GG5fVUHep7sswE5pOSWSGNK5__kEfmC0w.png?1793049523)

## 대화에서 결과 확인하기

1. 연락처의 대화를 여세요. 통화가 끝나면 통화 카드에 요약의 앞부분이 표시돼요.
2. **전체 상세정보 보기**를 선택하세요.
3. 탭에서 **요약**, **필드 제안**, **QA 스코어카드**, **녹음 및 녹취록**을 확인하세요. 창 맨 위에는 통화 처리 결과와 종합 점수가 표시돼요.

{% hint style="info" %}
결과는 보통 통화 녹음이 저장된 뒤 몇 초 안에 준비돼요.
{% endhint %}

![요약의 앞부분이 보이는 대화의 통화 카드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084253521/original/IctsbV0eGoW57XTJhi4aaH4eJJPVQHfH4g.png?1793049528)
![요약 탭이 열린 통화 전체 상세정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084253522/original/GnPfcUSxDEUEl91Krx0QwK5TGOEyxIXUdQ.png?1793049529)
![카테고리별 점수가 보이는 QA 스코어카드 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084253525/original/j-7R8vpkjvRVcmos4C0-w4TgWOPRFeQI3g.png?1793049530)
![녹음 및 녹취록 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084253528/original/DpD7MOuvLQviJOxzGfH6caT72_jMOUDyg.png?1793049531)

### 필드 제안을 연락처에 저장하기

1. **필드 제안** 탭을 여세요.
2. 남기고 싶은 값을 각각 체크하세요. 저장하기 전에 값을 수정할 수도 있어요.
3. **Save Updates**(업데이트 저장)를 선택하세요. 체크한 값만 연락처에 저장돼요.

![저장할 값이 표시된 필드 제안 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084253531/original/AVvqd3QETU2wu3UOPYl8hKo8w-6pf2iTMw.png?1793049532)

## 다이얼러에서 결과 확인하기

다이얼러에서 통화가 끝나면 통화 요약 옆에 결과가 열려요. **검토 및 업데이트** 탭에 제안된 통화 처리 결과와 연락처 필드 제안이 표시돼요.

1. 통화 처리 결과를 확인하세요. 필요하면 목록에서 다른 항목을 고르세요.
2. 남기고 싶은 필드 값을 체크하고, 필요하면 수정하세요.
3. **Save Updates**(업데이트 저장)를 선택하세요.

**QA 스코어카드**, **요약**, **녹음 및 녹취록** 탭에는 대화에서 보는 것과 같은 결과가 표시돼요.

![통화 후 다이얼러의 검토 및 업데이트 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084253535/original/zbZJJ9iL1sWQ_l_oQUKEruI_Zy3KLqqlVQ.png?1793049533)

{% hint style="info" %}
결과를 검토하고, 필요하면 고치고, 저장한 뒤 바로 다음 통화로 넘어가세요.
{% endhint %}

## 자주 묻는 질문

### 통화 결과가 하나도 안 나와요. 왜 그런가요?
다음을 확인해 보세요.

- 해당 전화번호의 통화 녹음이 켜져 있었나요?
- 하이퍼클래스 전화번호로 한 통화였나요?
- 통화했을 때 Voice Intelligence가 켜져 있었나요? 이전 통화에는 적용되지 않아요.
- 통화를 받았고, 실제 내용이 있을 만큼 길었나요? 아주 짧은 통화는 건너뛰어요.

통화 후 결과가 나오기까지 몇 초 걸릴 수도 있어요. 페이지를 새로고침한 뒤 다시 확인해 보세요.

### Voice Intelligence가 연락처를 마음대로 바꾸나요?
아니요. 필드 제안과 통화 처리 결과는 팀원이 확인하고 저장할 때까지 기다려요.

### 설정을 바꾸면 이전 통화 결과도 바뀌나요?
아니요. 새 설정은 새 통화에만 적용돼요.

### 필요 없는 기능만 끌 수 있나요?
네. 설정에서 QA 스코어카드, 필드 제안, 통화 처리 결과 제안의 체크를 해제하세요. Voice Intelligence가 켜져 있는 동안 녹취록과 요약은 항상 포함돼요.

### 직접 만든 커스텀 필드도 쓸 수 있나요?
네. **필드 제안**에서 필드를 추가할 때 커스텀 필드를 포함한 모든 연락처 필드를 고를 수 있어요.

### 대화에서 제안된 통화 처리 결과를 수정할 수 있나요?
웹 앱 다이얼러 밖에서 한 통화는 수정할 수 없어요. 반짝이 아이콘이 붙은 태그로 표시되며, 볼 수만 있고 바꾸거나 저장할 수 없어요. 웹 앱 다이얼러에서 한 통화는 **검토 및 업데이트** 탭에서 확인하거나 바꿀 수 있어요.

### Voice Intelligence는 추가 요금이 있나요?
아니요. 기존 통화 전사 요금 외에 따로 청구되는 요금은 없어요. 자세한 내용은 설정 화면의 **Charges apply**(요금 부과)에 마우스를 올려 확인하세요.

## 의견 남기기

각 탭에서 결과가 정확한지 물어봐요. 좋아요 또는 싫어요를 선택하세요. 남겨 주신 의견은 Voice Intelligence를 개선하는 데 도움이 돼요.
