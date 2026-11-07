---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005886-workflow-action-ai-summarize
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — AI Summarize(AI 요약)

**AI Summarize**(AI 요약) 액션은 긴 글을 AI로 짧게 요약해 주는 액션이에요. 원하는 요약 길이와 입력할 텍스트를 정하면, 핵심 내용은 살리고 길이만 줄인 글을 만들어 줘요.

## 작동 방식

AI는 입력한 텍스트를 다음 순서로 처리해요.

1. 핵심 내용과 주제를 찾아요.
2. 중복되는 정보를 없애요.
3. 지정한 길이에 맞게 내용을 다시 구성해요.
4. 문맥과 가독성을 유지해요.

## 설정 방법

### 1단계: 액션 추가하기

워크플로우 빌더의 액션 목록에서 **AI Summarize**를 검색해 워크플로우에 추가하세요.

### 2단계: 설정 입력하기

1. **Action Name**(액션 이름): 액션을 알아보기 쉬운 이름으로 지어 주세요. 예: "고객 리뷰 요약"
2. **Max Length Input**(최대 길이 입력): 원하는 요약 길이를 입력하세요.
   - 단어 수 (예: "50 words")
   - 글자 수 (예: "280 characters")
   - 문장 수 (예: "3 sentences")
   - 문단 수 (예: "1 paragraph")
3. **Input Text**(입력 텍스트): 요약할 텍스트를 넣으세요.
   - **Static Value**(고정값): 텍스트를 직접 입력해요.
   - **Dynamic Variable**(동적 변수): 커스텀 값 선택기에서 변수를 골라 넣어요.
4. **Save**(저장)를 눌러 설정을 마치세요.

### 출력 활용하기

설정을 마치면 요약된 텍스트를 커스텀 변수로 쓸 수 있어요.

![요약 결과 변수 선택 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062014690/original/iZTWZbHyc9A3MZV_lgtfJ6EqAutG6aZFfA.png?1767706692)

![요약 결과 변수 선택 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062014725/original/DbQwCTPY9uOA3loSOAvjv-NVM8x5jHXgRA.png?1767706710)

이 변수는 이후 워크플로우 액션에서 다음과 같이 쓸 수 있어요.

- SMS나 이메일로 요약 보내기
- 커스텀 필드에 저장하기
- 알림에 표시하기
- 다른 워크플로우 액션에 전달하기

![요약 변수를 다른 액션에서 사용하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051008553/original/q4CqnxHF7IDOEhbyOLaw0h6-KnCDo_kVgA.png?1754471642)

## 활용 예시

### SMS에 맞춘 예약 메모

- 트리거: **Appointment Booked**(예약 완료)
- 입력: 폼으로 받은 상세한 예약 메모
- 최대 길이: 160자
- 액션: 요약본을 담은 확인 SMS 보내기

### 파이프라인 단계 변경 요약

- 트리거: **Opportunity Stage Changed**(기회 단계 변경됨)
- 입력: 기회의 모든 메모와 활동 내역
- 최대 길이: 1문단
- 액션: 담당 매니저에게 요약을 이메일로 보내기

### 리뷰 응답 요약

- 트리거: **Review Received**(리뷰 수신됨) (Google/Facebook)
- 입력: 고객이 남긴 리뷰 전문
- 최대 길이: 50단어
- 액션: 팀 Slack 채널에 게시하기

### 미팅 메모 요약

- 입력: 미팅 전체 녹취록
- 최대 길이: 1문단
- 출력: 이해관계자를 위한 핵심 요약

## 가격

- 비용: 1회 실행당 1센트(0.01달러)
- 프리미엄 액션 모음에 포함돼요.

## 자주 묻는 질문

### 여러 메시지나 이어 붙인 텍스트도 요약할 수 있나요?
네, 요약하기 전에 커스텀 값으로 여러 텍스트를 하나로 합칠 수 있어요.

### 요약 액션을 여러 개 이어서 쓸 수 있나요?
네, 단계적으로 요약할 수 있어요. 예를 들어 첫 번째 액션에서 500단어로 줄이고, 두 번째 액션에서 100단어로 줄이면 돼요.

### 요약은 얼마나 정확한가요?
AI는 핵심 정보를 정확하게 유지하면서 중복된 내용을 덜어 내요. 항상 샘플 데이터로 먼저 테스트해 보세요.

### 요약에서 특정 정보를 빼는 방법이 있나요?
현재는 AI가 중요한 내용을 직접 판단해요. 특정 내용을 빼야 한다면, 먼저 다른 워크플로우 액션으로 텍스트를 가공한 뒤 요약해 보세요.
