---
원문: /support/solutions/articles/155000008582-workflow-trigger-video-testimonial-received
번역일: 2026-11-06
카테고리: 41-평판-리뷰
---

# 워크플로우 트리거 — Video Testimonial Received(비디오 후기 접수)

새 비디오 후기가 제출되는 순간 후속 작업을 자동으로 실행할 수 있어요. **Video Testimonial Received**(비디오 후기 접수) 트리거를 쓰면 새 후기를 일일이 확인하지 않아도 팀에 알리고, 후기 작성자에게 연락하고, 후기를 정리하고, 이어지는 자동화를 만들 수 있어요.

## Video Testimonial Received 트리거란?

**Video Testimonial Received** 트리거는 **Video Testimonial Collector**(비디오 후기 수집기)를 통해 새 비디오 후기가 제출될 때마다 워크플로우를 시작해요.

트리거가 실행되면 팀원에게 알리기, 작업 만들기, 후속 메시지 보내기, 후기 정보를 다음 워크플로우 단계로 넘기기 같은 작업을 자동화할 수 있어요.

이 트리거는 후기 정보를 워크플로우 커스텀 값으로도 제공해요. 후기 작성자 정보, 수집기 정보, 제출 시각, 마케팅 동의 여부, 동영상 링크가 포함돼요.

설정 방식은 하이퍼클래스의 다른 이벤트 기반 트리거와 같아요. 이벤트를 고르고, 필요하면 필터를 추가한 다음, 이벤트 후에 실행할 액션을 설정해요.

---

## 이 트리거를 쓰면 좋은 점

- 즉시 알림: 새 비디오 후기가 들어오면 바로 내부 팀에 알릴 수 있어요.
- 자동 후속 연락: 후기를 제출한 고객에게 감사 이메일이나 SMS를 보낼 수 있어요.
- 동의 여부에 따른 분기: 후기 작성자가 마케팅 동의를 했는지에 따라 자동화 경로를 나눌 수 있어요.
- 수집기별 자동화: 후기를 제출한 **Video Collector**(비디오 수집기)에 따라 다른 워크플로우를 실행할 수 있어요.
- 후기 활용: 제출된 동영상 링크와 후기 작성자 정보를 이어지는 워크플로우 액션에서 쓸 수 있어요.
- 유연한 구성: 내부 알림, 메모, 작업, 웹훅, 이메일 등 기존 워크플로우 액션과 함께 쓸 수 있어요.

---

## 트리거 설정하기

### 워크플로우 만들기

1. 왼쪽 메뉴에서 **자동화 > 워크플로우**로 이동하세요.
2. 기존 워크플로우를 열거나 **+ Create Workflow**(워크플로우 만들기)를 클릭해 새로 만드세요.

처음부터 시작해도 되고, 계정에서 쓸 수 있는 다른 워크플로우 생성 방법을 써도 돼요.

![워크플로우 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079864053/original/dGj2j5MVu6nfL_EaDS2yWHno1bBBK3gqpg.png?1788330003)

---

### 트리거 추가하기

**Workflow Builder**(워크플로우 빌더)에서 **Add Trigger**(트리거 추가)를 클릭하세요.

트리거 선택 패널이 열리면 워크플로우를 시작할 이벤트를 고를 수 있어요.

![트리거 추가 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079864060/original/Yu-gx92zCPtl4wdXh43m_iQNkhfTeb76bA.png?1788330014)

---

### 트리거 찾기

**Video Testimonial Received**(비디오 후기 접수)를 검색하거나 목록에서 선택하세요.

이 트리거가 워크플로우를 언제 실행할지 정해요.

---

### 트리거 이름 정하기

**Workflow Trigger Name**(워크플로우 트리거 이름)에 알아보기 쉬운 이름을 입력하세요.

예를 들면 이런 이름이에요.

- 마케팅 승인 비디오 후기
- 고객 후기 알림
- Trigger Template 후기

이름을 분명하게 지어 두면 트리거가 여러 개일 때나 실행 기록을 볼 때 이해하기 쉬워요. 하이퍼클래스의 다른 워크플로우 트리거에서도 권장하는 방법이에요.

---

### 필터 추가하기

필터는 선택 사항이에요. 어떤 비디오 후기 제출이 워크플로우에 들어올지 조건으로 정할 수 있어요.

필터가 없으면 새 비디오 후기가 접수될 때마다 워크플로우가 실행될 수 있어요.

필터를 하나 이상 추가하면 더 정교한 자동화를 만들 수 있어요.

#### 1. Marketing Consent 필터

**Marketing Consent**(마케팅 동의) 필터는 후기를 제출한 사람이 마케팅 활용에 동의했는지를 기준으로 걸러내요.

예를 들어 이렇게 설정해요.

**Marketing Consent → Is(다음과 같음) → Granted(동의함)**

후기를 마케팅 용도로 배포하거나 재활용하는 워크플로우를 만들 때 유용해요.

마케팅 동의를 한 후기와 하지 않은 후기로 워크플로우 경로를 나눌 수도 있어요.

#### 2. Video Collector 필터

**Video Collector** 필터를 쓰면 특정 수집기로 제출된 후기에만 워크플로우를 실행할 수 있어요.

예를 들어 이렇게 설정해요.

**Video Collector → Is → Trigger Template**

후기 캠페인이나 수집기가 여러 개이고 각각 다른 자동화를 쓰고 싶을 때 도움이 돼요.

예를 들어 다음처럼 수집기를 나눠 운영할 수 있어요.

- 고객 후기
- 상품 피드백
- 이벤트 후기
- 파트너 후기
- 특정 마케팅 캠페인

필터를 걸면 수집기마다 따로 이어지는 워크플로우를 둘 수 있어요.

![트리거 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079864075/original/ZXy_0DpbFFIyDw91vpXTxglqhFZx1TU6Ng.png?1788330029)

---

### 트리거 저장하기

트리거와 필터를 설정했으면 **Save Trigger**(트리거 저장)를 클릭하세요.

그다음 트리거 아래에 워크플로우 액션을 추가할 수 있어요.

예를 들어 이렇게 이어 갈 수 있어요.

**Video Testimonial Received → Internal Notification(내부 알림) → Add Note(메모 추가) → Create Task(작업 만들기) → Send Thank You Email(감사 이메일 보내기)**

하이퍼클래스의 다른 워크플로우 트리거와 마찬가지로, 게시하기 전에 샘플 후기를 제출해서 워크플로우를 테스트해 보길 권해요.

---

## 비디오 후기 커스텀 값 사용하기

Video Testimonial Received 워크플로우가 실행되면 후기 관련 정보를 커스텀 값으로 쓸 수 있어요. 지원하는 워크플로우 액션 안에서 사용해요.

사용할 수 있는 값은 다음과 같아요.

| 커스텀 값 | 설명 |
| --- | --- |
| **Reviewer Name** | 후기를 제출한 사람이 입력한 이름 |
| **Reviewer Email** | 제출할 때 입력한 이메일 |
| **Reviewer Phone** | 제출할 때 입력한 전화번호 |
| **Marketing Consent** | 후기와 연결된 마케팅 동의 상태 |
| **Submitted At** | 후기가 제출된 날짜와 시간 |
| **Collector Name** | 제출에 쓰인 Video Collector의 이름 |
| **Video Link** | 제출된 비디오 후기의 링크 |

이 값들은 메모, 내부 알림, 메시지 등 지원하는 워크플로우 액션에 넣을 수 있어요.

예를 들어 내부 알림은 이렇게 구성할 수 있어요.

> 새 비디오 후기가 접수되었어요  
> 작성자: {{Reviewer Name}}  
> 수집기: {{Collector Name}}  
> 마케팅 동의: {{Marketing Consent}}  
> 동영상: {{Video Link}}

> ![내부 알림에 커스텀 값을 넣은 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079864166/original/DM_6IN828RLWwMt8guLxmswQRpgMLy8AvQ.png?1788330115)

---

## 활용 예시

### 후기가 들어오면 팀에 알리기

**Video Testimonial Received → Internal Notification**

마케팅팀이나 고객 성공팀에 바로 알려서 제출된 후기를 확인하게 할 수 있어요.

### 마케팅 승인을 받은 후기만 처리하기

**Video Testimonial Received**  
필터: **Marketing Consent = Granted**

그다음 후기를 마케팅팀에 보내서 검토하거나 후속 작업을 하게 해요.

### 수집기마다 다른 자동화 실행하기

**Video Testimonial Received**  
필터: **Video Collector = Customer Success Testimonials**

이렇게 하면 캠페인이나 수집기마다 따로 자동화를 둘 수 있어요.

### 후기 정보를 메모에 남기기

비디오 후기 커스텀 값을 쓰면 후기 작성자 정보, 수집기 이름, 제출 날짜, 동영상 링크가 담긴 메모를 자동으로 만들 수 있어요.

---

## 자주 묻는 질문

### Video Testimonial Received 트리거는 언제 실행되나요?
Video Testimonial Collector를 통해 새 비디오 후기가 정상적으로 제출되면 실행돼요.

### 특정 Video Collector에서 온 후기에만 워크플로우를 실행할 수 있나요?
네. **Video Collector** 필터를 추가하고 워크플로우가 확인할 수집기를 선택하세요.

### 마케팅 동의 여부로 후기를 걸러낼 수 있나요?
네. **Marketing Consent** 필터를 쓰면 제출된 후기의 동의 상태에 따라 워크플로우를 만들 수 있어요.

### 워크플로우 액션에서 동영상 URL을 쓸 수 있나요?
네. **Video Link**는 비디오 후기 커스텀 값으로 제공되며, 지원하는 워크플로우 액션에 넣을 수 있어요.

### 워크플로우에서 후기 작성자의 어떤 정보를 쓸 수 있나요?
트리거가 후기 작성자 이름, 이메일, 전화번호, 마케팅 동의 여부, 제출 시각, 수집기 이름, 동영상 링크를 비디오 후기 커스텀 값으로 제공해요.

### 새 후기가 들어올 때마다 팀에 알릴 수 있나요?
네. 트리거 바로 뒤에 내부 알림이나 다른 알맞은 워크플로우 액션을 추가하세요.

### 하나의 워크플로우에서 여러 수집기의 후기를 처리할 수 있나요?
네. **Video Collector** 필터를 설정하지 않으면 조건에 맞는 모든 제출을 받을 수 있어요. 수집기마다 다른 자동화가 필요하면 트리거나 워크플로우를 따로 만들어 쓰세요.
