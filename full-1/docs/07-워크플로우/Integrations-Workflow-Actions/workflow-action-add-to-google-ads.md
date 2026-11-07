---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-ads
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Add to Google Ads(Google Ads에 추가)

**Add to Google Ads**(Google Ads에 추가) 액션을 쓰면 폼 제출이나 채팅 답장 같은 실제 사용자 행동을 워크플로우 안에서 Google Ads 전환으로 기록할 수 있어요. 이 문서에서는 설정 방법과 확인 방법, 문제가 생겼을 때 살펴볼 점을 안내해요.

## Add to Google Ads 액션이란?

**Add to Google Ads** 액션은 하이퍼클래스에서 발생한 전환 이벤트를 Google Ads 계정으로 보내는 액션이에요. 광고를 클릭한 사용자가 나중에 하는 폼 제출, 채팅 답장, 구매, 예약 같은 오프라인 전환을 추적할 때 알맞아요. 이런 행동을 처음 클릭한 광고와 연결하면 캠페인 성과를 더 정확히 파악할 수 있어요. 그 데이터는 Google의 최적화에도 쓰여요.

이 기능은 광고를 클릭할 때 전달되는 GCLID, GBRAID, WBRAID 같은 고유 식별자를 사용해요. 전환이 올바르게 기여도로 잡히려면 이 값이 연락처 레코드에 있어야 해요.

{% hint style="info" %}
이 워크플로우 액션을 쓰기 전에 Google Ads에서 전환 이벤트를 먼저 설정해야 해요.

Google Ads 전환 액션 설정은 아래 문서를 참고하세요.

1. Google Ads 전환 액션 설정하기 (Google 플랫폼 쪽 설정)
2. 광고 관리자 - Google Ads 오프라인 전환 만들기 및 관리
{% endhint %}

## 주요 장점

- 오프라인 전환 추적: 폼 제출, 채팅 답장, 예약 완료 같은 오프라인 이벤트를 추적해 기여도를 더 정확히 파악해요.
- 이벤트 직접 동기화: Zapier나 수동 데이터 업로드 없이 전환 이벤트를 Google Ads로 바로 보내요.
- 캠페인 최적화 강화: Google에 더 좋은 데이터를 전달해 광고 성과를 높이는 데 도움이 돼요.
- 클릭 ID 지원: GCLID, GBRAID, WBRAID를 모두 지원해요.
- 다양한 트리거 지원: 폼 제출, 링크 클릭, 페이지 조회 등 여러 워크플로우 트리거와 함께 쓸 수 있어요. <!-- 검토 필요: 원문 내용이 서로 다름 -->
- 리드 품질 기여도 파악: 리드의 유입 경로와 품질을 정확히 측정해 ROI 추적에 도움이 돼요.

## 워크플로우에서 Add to Google Ads 액션 설정하기

이 액션을 올바르게 설정하면 Google Ads 캠페인이 전환을 정확히 측정하고 기여도를 계산할 수 있어요. 아래에서 액션을 어디서 찾고, 어떻게 설정하고, 제대로 실행되는지 어떻게 확인하는지 차례로 설명해요.

{% hint style="info" %}
**Google Ads 계정 연결**

**Add to Google Ads** 액션을 쓰려면 먼저 Google Ads 계정을 하이퍼클래스에 연결해야 해요. 이 연동으로 하이퍼클래스가 API를 통해 전환 이벤트를 Google Ads로 직접 보낼 수 있어요.

서브 계정에서 **설정 > 연동**으로 이동해 Google을 선택하고, 안내에 따라 계정을 인증하세요. 여러 계정을 관리한다면 올바른 Google Ads 계정을 연결했는지 확인하세요. 이 연결이 없으면 다른 설정이 모두 맞아도 액션이 작동하지 않아요.
{% endhint %}

{% hint style="warning" %}
Google Ads 계정을 하이퍼클래스에 연결한 뒤에는, Google Ads 계정 안에 전환 액션이 이미 1개 이상 만들어져 있어야 해요. 하이퍼클래스는 설정할 때 Google Ads에서 사용 가능한 전환 액션을 직접 가져와요. 전환 액션이 하나도 없으면 워크플로우에서 전환 이벤트를 고르는 드롭다운 메뉴가 비어 있어요.
{% endhint %}

### 1단계: 워크플로우 빌더 열기

1. 서브 계정에 로그인하세요.
2. **자동화 > 워크플로우**로 이동하세요.

   ![자동화 > 워크플로우 화면](https://jumpshare.com/share/Cnveqtr2TxPJeI2Wif1E+/Screen+Shot+2026-01-05+at+6.02.58+PM.png)
3. 새 워크플로우를 만들거나 기존 워크플로우를 여세요.

   ![새 워크플로우 만들기 또는 기존 워크플로우 열기](https://jumpshare.com/share/vy9UlWTok3ZfxkZZpVLC+/Screen+Shot+2026-01-05+at+6.04.41+PM.png)

### 2단계: 알맞은 트리거 추가하기

- **Add New Trigger**(새 트리거 추가)를 클릭해, 추적하려는 행동이나 이벤트에 맞는 트리거를 추가하세요. 폼 제출이나 예약 완료 같은 이벤트가 그 예예요.
- 알맞은 트리거 예시는 **Form Submitted**(폼 제출), **Appointment Booked**(예약 완료), **Trigger Link Clicked**(트리거 링크 클릭), **Customer Replied**(고객 답장)예요. 폼 제출, 주문 구매, 번호 풀 통화, 설문 제출, 채팅 위젯용 워크플로우를 만들 수 있어요.

  ![트리거 추가 화면 녹화](https://jumpshare.com/share/MAFnHtvBfVl4S7D4VC12+/GIF+Recording+2026-02-05+at+7.50.55+PM.gif)

### 3단계: Add to Google Ads 액션 추가하기

1. 트리거를 추가한 뒤, 전환을 보내려는 위치에서 **+** 아이콘을 클릭하세요.
2. 액션 선택 패널이 열리면 목록에서 **Add to Google Ads**(Google Ads에 추가)를 선택하세요. 이 액션은 연결된 Google Ads 계정으로 API를 통해 전환 데이터를 직접 보내요.
3. 액션을 추가하면 오른쪽에 설정 패널이 나타나요.

![Add to Google Ads 액션 추가 화면 녹화](https://jumpshare.com/share/EoFZFizWBeNYO7KKgFT5+/GIF+Recording+2026-02-05+at+8.04.29+PM.gif)

### 4단계: 액션 상세 정보 설정하기

{% hint style="warning" %}
**Google Ads 전환 설정 준비**

하이퍼클래스에서 **Add to Google Ads** 워크플로우 액션을 설정하기 전에, Google Ads에서 꼭 끝내야 할 단계가 세 가지 있어요.

1. Google Ads 계정 안에 전환 액션을 만드세요. 폼 제출이나 예약처럼 추적하려는 이벤트를 이 전환 액션으로 정해요.
2. Google Ads의 전환 이름을 그대로 복사해, 하이퍼클래스 워크플로우 액션에 똑같이 입력하세요. 대소문자나 띄어쓰기만 달라도 액션이 작동하지 않아요.
3. 광고 URL에 클릭 추적 파라미터가 들어 있는지 확인하세요. 검색 캠페인에는 GCLID를, iOS·Android 앱 캠페인에는 GBRAID나 WBRAID를 써요. 하이퍼클래스가 유입된 리드에서 이 식별자를 가져와야 정확한 기여도 데이터를 Google Ads로 돌려보낼 수 있어요.

이 조건을 갖추지 않으면 전환 동기화에 실패해요. 전환 설정 유형도 확인하세요. 전환이 "클릭당 1회(One Per Click)"로 설정돼 있으면 GCLID가 필요해요. GBRAID와 WBRAID는 "클릭당 여러 번(Many Per Click)" 추적만 지원하기 때문이에요. 전환이 누락되거나 건너뛰어질 때 문제를 찾으려면 이 차이를 꼭 알아 두세요.
{% endhint %}

전환 액션을 정확히 설정해야 하이퍼클래스의 데이터가 Google Ads로 전달돼요. 이 단계에서는 워크플로우를 알맞은 전환 이벤트와 연결하고, 추적 파라미터가 모두 제대로 들어 있는지 확인해요. 전환 이름에 오타가 있거나 클릭 ID가 없으면 전환이 동기화되지 않을 수 있어요.

1. **Action Name**(액션 이름): 액션에 알아보기 쉬운 이름을 붙이세요. "Submit Lead Conversion"이나 "Book Appointment Conversion" 같은 이름이 좋아요. 이 이름은 워크플로우 로그에 표시되므로, 어떤 전환인지 분명히 드러나게 지으세요.

   ![액션 이름 입력 화면](https://jumpshare.com/share/CDM31cfFgsxaGIeHU6u1+/Screen+Shot+2026-02-05+at+8.07.49+PM.png)
2. **Conversion**(전환): 드롭다운에서 Google Ads 계정의 전환 이벤트 이름을 선택하거나 그대로 붙여 넣으세요. 대소문자, 띄어쓰기, 문장부호까지 똑같아야 해요. 이름이 하나라도 다르면 액션이 건너뛰어지고 전환이 전송되지 않아요.

   {% hint style="info" %}
   Google에서 새 캠페인을 만들 때마다, 새 워크플로우 액션의 Google AdWords 옵션에서 방금 만든 전환 액션을 선택해야 해요.

   UTM 소스와 gclid, wbraid 또는 gbraid가 있는 연락처가 1명 들어오면, 워크플로우 트리거와 Google AdWords 전환에 목록이 나타나기까지 약 5분이 걸려요.
   {% endhint %}

   ![전환 드롭다운 선택 화면](https://jumpshare.com/share/tQSwMoAGpZa2HEw6aADs+/Screen+Shot+2026-02-05+at+8.23.57+PM.png)
3. **Currency**(통화): 전환 가치를 기록할 통화를 선택하세요.

   ![통화 선택 화면](https://jumpshare.com/share/KQLZdRT1ATp51P7d6nHB+/Screen+Shot+2026-02-05+at+8.25.36+PM.png)
4. **Conversion Value**(전환 가치): 앞에서 고른 통화 기준으로 전환 1건의 금액이나 가치를 입력하세요. 예를 들어 치과 검진 고객 1건의 전환 가치를 100달러로 정할 수 있어요.

   ![전환 가치 입력 화면](https://jumpshare.com/share/7BuIY5OXPzywVfjHQVfx+/Screen+Shot+2026-02-05+at+8.27.08+PM.png)
5. **Custom Mapping**(사용자 지정 매핑): GCLID, GBRAID, WBRAID 같은 Google Ads 전환 파라미터를 워크플로우의 필드에 직접 연결하려면 **Custom Mapping** 스위치를 켜세요. 커스텀 필드를 쓰거나, 클릭 ID가 Google Ads로 전달되는 방식을 더 세밀하게 제어하고 싶을 때 유용해요.

   ![Custom Mapping 스위치 화면](https://jumpshare.com/share/ikSiGaGH3PGjq97Y2K9v+/Screen+Shot+2026-02-05+at+9.05.28+PM.png)

### 5단계: 저장하고 워크플로우 게시하기

1. **Save Action**(액션 저장)을 클릭하세요.
2. 워크플로우를 **Publish**(게시)하고 **Save**(저장)를 클릭하세요.

   ![액션 저장 및 워크플로우 게시 화면](https://jumpshare.com/share/2UEcwKdCdWAp8dCG3uvL+/Screen+Shot+2026-02-05+at+9.40.03+PM.png)

### 6단계: 워크플로우 실행 로그 확인하기

워크플로우를 켠 뒤에는 액션이 제대로 실행되는지 확인하는 것이 좋아요.

워크플로우 안의 **Execution Logs**(실행 로그) 탭으로 이동해, **Add to Google Ads** 액션과 그 결과를 살펴보세요.

- **Executed**(실행됨): 전환이 Google Ads로 정상 전송됐다는 뜻이에요.
- **Skipped**(건너뜀): 문제가 생겼다는 뜻이에요. 예를 들어 GCLID가 없거나 전환 이름이 일치하지 않는 경우예요.

![실행 로그 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043968547/original/aFenfQtgfTtqzwvum3qXSNWTGE49Friqhg.png?1742959494)

## 자주 쓰는 활용 사례

이 액션이 Google Ads로 데이터를 실제로 보내려면 의미 있는 전환 이벤트와 함께 써야 해요. 그래서 알맞은 트리거를 고르는 것이 중요해요. 자주 쓰는 트리거는 아래와 같아요.

### 1. 폼 제출 / 주문 구매 / 설문 제출

1. 워크플로우를 만드세요.
2. 트리거로 **Form Submission**(폼 제출), **Order Form Submission**(주문 폼 제출), **Survey Submission**(설문 제출) 중 하나를 선택하세요.
3. 트리거를 선택한 뒤, 대상 폼/주문 폼/설문을 지정하는 필터를 추가하고 트리거 설정을 저장하세요.
4. **+** 아이콘을 클릭해 액션을 추가하고 **Add to Google Ads** 이벤트를 선택한 다음, 드롭다운에서 Google에서 만든 전환 액션을 선택하세요.
5. 전환에 쓸 **Currency**와 **Conversion Value**를 정하세요.
6. **Save**와 **Publish**를 클릭해 워크플로우를 저장하고 게시하세요.

[동영상](https://www.loom.com/embed/dcdfb3aa457743d19df4f03a71b8a139)

### 2. 번호 풀 통화

1. 워크플로우를 만드세요.
2. 트리거로 **Call Status**(통화 상태)를 선택하세요.
3. 트리거를 선택한 뒤 필터를 추가하세요. **Call Direction**(통화 방향)은 Incoming(수신), **Pool Number**(풀 번호)는 사용할 풀 번호로 선택해요.
4. 퍼널/웹사이트의 헤더 설정에 풀 번호 스크립트를 추가하세요.
5. **+** 아이콘을 클릭해 액션을 추가하고 **Add to Google Ads** 이벤트를 선택한 다음, 드롭다운에서 Google에서 만든 전환 액션을 선택하세요.
6. 전환에 쓸 **Currency**와 **Conversion Value**를 정하세요.
7. **Save**와 **Publish**를 클릭해 워크플로우를 저장하고 게시하세요.

[동영상](https://www.loom.com/embed/9e3c67bb2e4d466e881e3d75a76460b6)

### 3. 채팅 위젯

1. 워크플로우를 만드세요.
2. 트리거로 **Customer Replied**(고객 답장)를 선택하세요.
3. **+** 아이콘을 클릭해 액션을 추가하고 **Add to Google Ads** 이벤트를 선택한 다음, 드롭다운에서 Google에서 만든 전환 액션을 선택하세요.
4. 전환에 쓸 **Currency**와 **Conversion Value**를 정하세요.
5. **Save**와 **Publish**를 클릭해 워크플로우를 저장하고 게시하세요.

[동영상](https://www.loom.com/embed/cad44f9ac32c4f4aa37684ab910f3164)

## 자주 묻는 질문

### 전환 설정을 마쳤는데 제대로 작동하는지 어떻게 알 수 있나요?

현재는 이 이벤트를 테스트할 방법이 없어요. 대신 워크플로우 액션에서 기록 탭을 열어 보세요. Google AdWords 액션의 실행 내역이 표시돼요. <!-- 검토 필요: 원문 내용이 서로 다름 (본문에는 Execution Logs 탭, 여기에는 history 탭) -->

### 전환은 어디서 볼 수 있나요?

트리거/워크플로우와 Google AdWords 전환에 목록이 나타나기까지 약 5분이 걸려요. 15분 안에는 워크플로우 기록에서 확인할 수 있어요.

### 모든 트리거에서 쓸 수 있나요?

폼 제출, 주문 구매, 번호 풀 통화, 설문 제출, 채팅 위젯에서만 작동해요. <!-- 검토 필요: 원문 내용이 서로 다름 (주요 장점·2단계에는 링크 클릭, 예약 완료 등 다른 트리거도 언급됨) -->

### 로그에 Skipped(건너뜀)라고 나와요. 어떻게 해야 하나요?

전환 추적이 성공하려면 두 가지 조건이 필요해요. 먼저 하이퍼클래스의 연락처에 정상적인 Google 광고 클릭에서 수집된 유효한 GCLID, GBRAID, WBRAID가 있어야 해요. 그리고 워크플로우에 쓴 전환 이름이 Google Ads 계정에서 만든 이름과 정확히 같아야 해요. 전환 이름이 조금만 달라도 Google Ads에 이벤트가 제대로 등록되지 않아요.

### GCLID, GBRAID, WBRAID는 어떻게 다른가요?

- GCLID: 일반적인 웹 추적에 쓰여요.
- GBRAID/WBRAID: 개인정보 보호를 강화한 환경(주로 iOS)에서 쓰여요.

GBRAID/WBRAID는 "클릭당 여러 번(multi-per-click)" 전환에서만 쓸 수 있어요. 전환 설정이 "클릭당 1회(one per click)"라면 GCLID가 필요해요.

### 채팅 위젯으로 들어오는 리드도 추적할 수 있나요?

네, 할 수 있어요. **Customer Replied** 트리거를 쓰고 필터를 추가하세요. **Reply Channel**(답장 채널)을 **Chat Widget**(채팅 위젯)으로 설정하면, 사용자가 위젯으로 답장할 때만 이벤트가 전송돼요.

### 사용하기 전에 Google Ads에서 따로 설정할 것이 있나요?

네, 있어요. 하이퍼클래스에서 **Add to Google Ads** 액션을 쓰기 전에 Google Ads 계정이 올바르게 설정돼 있어야 해요. 먼저 Google Ads 계정 안에서 전환 액션을 만드세요. 그다음 그 전환 이름을 한 글자도 다르지 않게 복사해 하이퍼클래스 워크플로우 액션에 붙여 넣으세요. 마지막으로 Google 광고 URL이 GCLID, GBRAID, WBRAID 같은 추적 파라미터를 제대로 전달하는지 확인하세요. 그래야 전환이 원래 광고 클릭에 정확히 연결돼요.

### Google Tag Manager가 꼭 있어야 하나요?

아니요. 이 액션에는 Google Tag Manager가 필요하지 않아요. 다만 클라이언트 측 이벤트를 추가로 추적한다면 GTM이 도움이 될 수 있어요.
