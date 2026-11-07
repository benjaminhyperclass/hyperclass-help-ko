---
원문: /support/solutions/articles/155000002482-workflow-trigger-contact-tag
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Contact Tag(연락처 태그)

**Contact Tag**(연락처 태그) 트리거는 연락처에 태그가 추가되거나 제거될 때 워크플로우를 자동으로 실행해요. 이 문서에서는 설정 방법과 활용 예시, 문제 해결 방법을 알려 드려요.

## Contact Tag 트리거란?

**Contact Tag** 트리거를 쓰면 연락처의 태그가 추가되거나 제거될 때마다 하이퍼클래스에서 워크플로우를 자동으로 실행할 수 있어요. 태그는 연락처에 붙이는 라벨이에요. 연락처의 특성이나 행동에 따라 정리하고 분류하고 후속 조치를 하는 데 쓰여요.

예를 들어 "신규 고객" 태그가 추가되면 환영 이메일을 자동으로 보낼 수 있어요. "리드" 태그가 제거되면 영업팀 알림을 업데이트할 수도 있어요.

## Contact Tag 트리거의 장점

1. 자동화: 태그를 기준으로 액션을 자동 실행해 업무 흐름을 간소화해요.
2. 정리: 연락처 데이터베이스를 깔끔하고 활용하기 쉬운 상태로 유지해요.
3. 맞춤 소통: 고객을 세분화해 개인화된 메시지를 보낼 수 있어요.
4. 확장성: 캠페인, 파이프라인, 여러 팀에 걸쳐 매끄럽게 작동해요.

## Contact Tag 트리거 설정하기

1. 워크플로우 빌더 열기

   - 왼쪽 메뉴에서 **자동화 > 워크플로우**로 이동하세요.

     ![자동화 메뉴에서 워크플로우 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037662887/original/1Bxp7u95i5b_phIz0Xqr_PmZ66aMhQEIMw.jpeg?1733230581)
   - **워크플로우 추가**를 클릭한 뒤 빈 워크플로우나 템플릿 중 하나를 고르세요.

     ![빈 워크플로우 또는 템플릿 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037664252/original/htJeRsxvsvZ6R13My3rlsZdJr93DA2xqrA.png?1733231469)
2. 트리거 추가하기

   - 워크플로우 빌더에서 **Add Trigger**(트리거 추가)를 클릭하고 **Contact Tag**를 검색하세요.

     ![Add Trigger에서 Contact Tag 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037665913/original/4wpXAsdOM4pHDZZisVgkicn2A5VkAhTsvw.jpeg?1733232531)
   - **Workflow Trigger Name**(워크플로우 트리거 이름)에 트리거를 알아보기 쉬운 이름으로 입력하세요. 예: “태그 추가됨 - 관심 있음”
   - 태그가 **Added**(추가됨)일 때 실행할지, **Removed**(제거됨)일 때 실행할지 선택하세요.

     ![Added 또는 Removed 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037666266/original/eOGmDLoVhCbryaeavyziVMk-SXJeepc9Jg.jpeg?1733232715)

     {% hint style="info" %}
     연락처 태그 선택 창에서 태그를 선택하거나 선택 해제해도, 확인하기 전에는 변경이 적용되지 않아요(예: **Apply**(적용) 클릭). **Contact Tag** 트리거를 쓰는 워크플로우는 태그 변경이 실제로 적용된 뒤에 실행돼요.
     {% endhint %}
   - 트리거를 실행할 태그를 지정하세요. 예: “관심 있음”, “뉴스레터 구독자”

     ![트리거를 실행할 태그 지정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037255252/original/NMLa1ip5dNjC6rJ7N_-GfPVdiKoZfluOGw.png?1732636379)
   - **+ Add New Tag**(새 태그 추가)를 누르면 새 태그를 바로 만들어서, 지금 만들고 있는 워크플로우에서 곧바로 쓸 수 있어요.

     ![+ Add New Tag로 새 태그 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037255317/original/Lc3pJmx6ih2O3iVGk7JFI6bo7foZ9FRa-Q.png?1732636410)
3. 태그 정하기

   - 이 워크플로우를 실행할 태그를 추가하세요.
   - 이름은 알기 쉽고 일관되게 짓는 것이 좋아요. 예: "VIP 고객", "콜드 리드"
4. 워크플로우 액션 추가하기

   - 트리거를 설정한 뒤에는 워크플로우가 실행할 액션을 설정하세요. 자주 쓰는 액션은 다음과 같아요.

     - 이메일 또는 SMS 보내기
     - 팀원에게 작업 배정하기
     - 연락처의 파이프라인 단계 업데이트하기
5. 저장하고 테스트하기

   - 워크플로우를 저장한 뒤 연락처에 태그를 붙여 보면서 원하는 액션이 실행되는지 확인하세요.

     ![워크플로우 저장 후 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037672086/original/akYVKwQP298jqA2r-tezPS1HXuVthUAl3g.png?1733235531)

## 활용 예시

#### 태그가 추가될 때 실행할 액션

- 이메일 또는 SMS 보내기: “관심 있음” 태그가 추가되면 후속 이메일을 보내요.
  - 제목: “관심을 가져 주셔서 감사합니다!”
  - 본문:

    > 안녕하세요 `{{contact.first_name}}`님,
    > 저희 서비스에 관심을 가져 주셔서 감사합니다. 궁금한 점이 있으면 언제든 문의해 주세요!
    > 감사합니다.
    > [회사명]
- 팀에 알리기: 영업팀에 내부 알림을 보내요. “‘관심 있음’ 태그가 붙은 새 연락처의 후속 조치가 필요해요. 연락처 세부정보: `{{contact.details}}`.”

![태그 추가 시 실행되는 액션 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037274442/original/IOVwa25hHMQAIIvQqTHcn9nE2mTljO8prg.jpeg?1732674226)

#### 태그가 제거될 때 실행할 액션

- 재참여 이메일 또는 SMS 보내기: “뉴스레터 구독자” 태그가 제거되면 다음 메시지를 보내요. “안녕하세요 `{{contact.first_name}}`님, 구독 취소 요청을 처리했어요. 실수로 취소하셨다면 여기를 눌러 다시 구독해 주세요.”
- 피드백 요청하기: 설문이나 피드백 요청을 보내 태그가 제거된 이유를 파악해요.

## 고급 활용

1. 여러 트리거 함께 쓰기

   - **Contact Created**(연락처 생성) 트리거와 **Contact Tag** 트리거를 함께 쓰면 새 리드를 환영하고 특정 영업팀에 배정할 수 있어요.
2. *흐름 예시: Contact Created ➔ Tag Added ➔ Workflow Triggered.*
3. 동적 고객 세분화

   - 구매나 웹사이트 방문 같은 고객 행동에 따라 태그를 자동으로 업데이트하면 마케팅 캠페인을 더 개인화할 수 있어요.

## 자주 생기는 문제와 해결 방법

- 중복 태그: 워크플로우에서 헷갈리지 않도록 태그 이름을 겹치지 않게, 알아보기 쉽게 지으세요.
- 비활성 워크플로우: 워크플로우가 게시되어 활성 상태인지 다시 확인하세요.
- 누락된 액션: 트리거에 연결된 모든 액션이 올바르게 설정되어 있는지 확인하세요.
- 겹치는 워크플로우: 의도하지 않은 액션이 실행되지 않도록 같은 트리거를 쓰는 워크플로우를 여러 개 만들지 마세요.

## 자주 묻는 질문

### 태그가 이미 붙어 있던 연락처에도 소급해서 워크플로우가 실행되나요?
아니요. 워크플로우가 활성화된 뒤에 태그가 추가되거나 제거될 때만 실행돼요.

### 태그가 많을 때는 어떻게 관리하나요?
태그 이름을 알기 쉽고 일관되게 짓고, 주기적으로 점검해서 중복되거나 쓰지 않는 태그를 정리하세요.

### 여러 워크플로우가 같은 태그를 트리거로 쓰면 어떻게 되나요?
같은 트리거를 쓰는 모든 워크플로우가 동시에 실행돼요. 의도하지 않게 겹치지 않도록 트리거를 신중하게 계획하세요.

### 태그를 여러 자동화에서 함께 쓸 수 있나요?
네. 태그는 여러 워크플로우, 캠페인, 파이프라인 단계에서 함께 쓸 수 있어요.
