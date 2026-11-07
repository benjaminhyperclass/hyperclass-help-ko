---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007386-workflow-trigger-product-review-submitted-for-e-commerce-stores-
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Product Review Submitted(상품 리뷰 제출됨), 이커머스 스토어용

하이퍼클래스 이커머스 스토어에서 고객이 리뷰를 남기는 순간 워크플로우를 시작하는 트리거예요. 구매 고객에게 감사 메시지를 보내거나, 추가 의견을 요청하거나, 낮은 별점 리뷰를 따로 분류하는 작업을 자동으로 처리할 수 있어요.

## Product Review Submitted 트리거란?

고객이 하이퍼클래스 스토어의 상품 페이지에서 **Submit review**(리뷰 제출)를 클릭하면, 이 트리거가 그 이벤트를 감지해요. 별점, 리뷰 제목, 리뷰 내용, 작성자 정보, 스토어, 상품 같은 리뷰 정보를 가져와 설정해 둔 자동화를 바로 시작해요.

**자동화 > 워크플로우**에서 워크플로우를 열고 **Add Trigger**(트리거 추가) > **Ecommerce Stores**(이커머스 스토어)로 이동하면 찾을 수 있어요.

## Product Review Submitted 트리거의 장점

- 바로 소통하기: 피드백이 들어오는 즉시 고객에게 이메일이나 SMS를 보내 구매 후 충성도를 높일 수 있어요.
- 자동 분류: 1~2점 리뷰를 고객지원 받은편지함으로 자동 전달해 먼저 처리할 수 있어요.
- 소셜 프루프 활용: 5점 리뷰를 Slack이나 Google Sheets로 보내 광고와 랜딩 페이지에 빠르게 재활용할 수 있어요.
- 세분화된 타깃팅: 별점, 리뷰 제목, 상품 필터를 조합해 아주 구체적인 후속 조치를 만들 수 있어요.
- 여러 스토어 운영: 스토어를 여러 개 운영한다면 **Store Name** 필터로 스토어별로 자동화를 나눌 수 있어요.

## Product Review Submitted 트리거 설정하기

트리거를 제대로 설정하면 모든 리뷰가 알맞은 자동화로 연결돼요. 아래 순서대로 따라 하세요.

### 워크플로우 만들기

**자동화 > 워크플로우**에서 기존 워크플로우 목록을 확인하세요. 기존 워크플로우를 편집하거나 복제해서 이 트리거를 적용해도 되고, **+ Create Workflow**(워크플로우 만들기)를 클릭해 새로 만들어도 돼요.

메뉴에서 **처음부터 시작**을 선택하세요. **Build Using AI**(AI로 만들기), **Select from Template**(템플릿에서 선택), **Import from a campaign**(캠페인에서 가져오기), 또는 계정에 따라 표시되는 베타 옵션을 선택해도 돼요.

![워크플로우 만들기 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258309/original/hDLtci6TltZxyyooAPdryLvc9HAPr1L48w.png?1771503515)

### 트리거 추가

**Workflow Builder**(워크플로우 빌더) 탭에서 **Add Trigger**를 클릭해 이 자동화를 시작할 이벤트를 고르세요. 트리거 패널은 빌더 안에서 열려요. **Settings**(설정), **Enrollment History**(등록 기록), **Execution Logs**(실행 로그) 탭 옆에 나타나서, **Ecommerce Stores**의 옵션을 고르면서 계속 작업할 수 있어요.

![워크플로우 빌더에서 트리거 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258401/original/USXWCzOt7CDL2hOgxYYIJJ75LJPVT3H32w.png?1771503547)

### 트리거 찾기

**Add Trigger** 패널에서 아래로 스크롤해 **Ecommerce Stores** 아래의 **Product Review Submitted**를 찾으세요. **Product Review Submitted**를 클릭해 선택해요.

![Product Review Submitted 트리거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258227/original/kNZ79q5wrGciw_zF80u-6hh2id0JeHupUA.png?1771503494)

### 트리거 이름 정하기

이 자동화의 목적을 알 수 있도록 **Workflow Trigger Name**(워크플로우 트리거 이름)을 알아보기 쉽게 입력하세요. 예를 들면 “1점 리뷰 대응”이나 “5점 리뷰 콘텐츠 활용” 같은 이름이에요. 이름이 구체적이면 워크플로우 목록이나 실행 로그에서 문제를 찾거나 자동화를 늘려 갈 때 쉽게 알아볼 수 있어요.

![트리거 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258479/original/EJhrveauiM_kqsmBmaaYv2huF6U0bR8gUg.png?1771503576)

### 필터 추가

**Add filters**(필터 추가)를 사용해 리뷰가 이 워크플로우에 들어오기 위해 충족해야 할 조건을 정하세요. 상품, 별점, 스토어, 리뷰 내용 키워드, 작성자 이메일·이름 중 조건을 하나 이상 추가할 수 있어요. **Require All**(모두 충족)과 **Require Any**(하나 이상 충족) 중에서 골라 대상을 좁히거나 넓혀요. 필터를 추가하지 않으면 모든 리뷰가 대상이 돼요.

![필터 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065266224/original/Rq4eRW0Mq9OfkTU6qizJqxmBB3BmhynNuw.png?1771507370)

### Global Product 필터

**Filters**(필터)에서 **Global Product**(전체 상품)를 선택하고 연산자는 **Is**(다음과 같음)로 정한 다음, 이 워크플로우가 지켜볼 상품 하나를 고르세요. 그러면 그 상품에 대해 제출된 리뷰에서만 트리거가 작동해요. 신제품 출시, VIP 상품, 상품별 후속 조치에 쓰기 좋아요.

![Global Product 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258510/original/MEzlpaZ58BOWny_ucUKTsJBnTd2y0QoOeg.png?1771503595)

### Review Comment 필터

**Review Comment**(리뷰 댓글) 필터를 추가하고 **Contains Phrase**(문구 포함)를 선택하면, 특정 단어가 들어간 리뷰만 골라낼 수 있어요. 예를 들어 “배송”, “환불”, “사이즈” 같은 단어예요. 문구를 여러 개 추가해서 감정이나 주제별로 피드백을 나눠 보낼 수도 있어요. 작성된 내용이 있는 리뷰를 모두 포함하려면 **Is Not Empty**(비어 있지 않음)를 사용하세요.

![Review Comment 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258550/original/LMf_wnyBjgBhqOik0nPMpczmdjaahTsNVg.png?1771503615)

### Review Headline 필터

**Review Headline**(리뷰 제목) 필드를 기준으로 워크플로우를 시작할 수 있어요. 비어 있거나 모호한 제목을 찾아 고객에게 더 구체적으로 써 달라고 요청할 때 좋아요. 연산자는 **Contains a phrase**(문구 포함)와 **Is Not Empty**를 쓸 수 있어요.

### Review Rating 필터(별점)

**Review Rating**(리뷰 평점) 필터로는 어떤 별점(1~5점)의 리뷰가 워크플로우를 시작할지 정할 수 있어요. 별점에 따라 자동화를 나눌 때 쓰세요. 예를 들어 낮은 별점은 고객지원으로 보내 빠르게 해결하고, 5점을 준 고객은 추천, 소개, 소셜 프루프 워크플로우로 보낼 수 있어요.

**Review Rating** 필터에는 연산자가 여러 개 있어서 워크플로우에 들어올 리뷰를 세밀하게 정할 수 있어요.

- **Is any of**(다음 중 하나라도 해당): 선택한 별점에서 트리거가 작동해요.
- **Is none of**(어느 것도 해당 없음): 선택한 별점은 제외하고 나머지 모두에서 작동해요.
- **Is empty**(비어 있음): 별점이 없는 리뷰를 대상으로 해요.
- **Is not empty**(비어있지 않음): 별점이 있는 리뷰만 포함해요.

![Review Rating 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258615/original/DDUId7ZK9Xf9yKa_AQXs3CYzlAmCN7EzmA.png?1771503661)

### Store 필터

**Store Name**(스토어 이름) 필터를 추가하면 이 워크플로우를 시작할 스토어를 제한할 수 있어요. 서브 계정에서 **Ecommerce Stores**를 여러 개 운영할 때 알맞아요. 연산자는 **Is any of**(선택한 스토어 포함), **Is none of**(선택한 스토어 제외), **Is empty**/**Is not empty**(예외 상황 처리) 중에서 고르세요.

![Store Name 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258604/original/qqjifN8NNCGq1Nc25PH-IcT7jnI2WKNbYg.png?1771503646)

### User Email & User Name 필터

**User Email**(사용자 이메일)과 **User Name**(사용자 이름) 필터로 특정 작성자를 우선 처리하거나 제외할 수 있어요. VIP, 제휴 파트너, 내부 테스트 계정, 스팸으로 의심되는 작성자 등이 해당돼요. 작성자가 제출한 이메일이나 이름을 equals(같음), contains(포함), is empty/not empty(비어 있음/비어 있지 않음) 같은 연산자로 비교해요. 별점, 상품, 키워드 필터와 함께 쓰면 더 정확하게 대상을 정할 수 있어요.

이런 경우에 활용해 보세요.

- 낮은 별점을 남긴 VIP 리뷰를 상위 담당자에게 전달하기
- 인플루언서의 피드백을 마케팅팀으로 보내기
- 일회용 계정이나 테스트 계정에는 자동 답장을 보내지 않기

### 트리거 저장

**Save Trigger**(트리거 저장)를 클릭하면 설정한 조건이 저장되고 빌더로 돌아와요. 이어서 액션이나 분기를 추가할 수 있어요. 이때 샘플 리뷰로 테스트해 보고, 동작이 의도와 같으면 게시하세요. 테스트는 스토어에서 임시 리뷰를 직접 제출해 보면 돼요.

후속 액션도 추가해 보세요. 예를 들어 **Send Email**(이메일 보내기), **Create Task**(작업 만들기), **Slack Notification**(Slack 알림) 등이 있어요.

![트리거 저장 후 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065258657/original/UIE1grp_yZEgD2pNrzI2LKhrArF1UJ4bdg.png?1771503680)

## 자주 묻는 질문

### 리뷰를 승인하기 전에 트리거가 작동하나요, 승인한 후에 작동하나요?

고객이 리뷰를 제출하는 즉시 작동해요. 승인 상태는 영향을 주지 않아요.

### 워크플로우가 실행되려면 연락처 정보가 필요한가요?

아니요. 다른 이커머스 트리거처럼 연락처 없이도 실행돼요. 필요하면 워크플로우 안에서 연락처를 만들거나 업데이트할 수 있어요.

### Global Product 필터에 상품을 여러 개 지정할 수 있나요?

지금은 안 돼요. 트리거 하나에 상품 하나만 지정할 수 있어요. 다른 상품에는 트리거를 추가로 만드세요.

### 스토어 리뷰를 비활성화하면 트리거도 멈추나요?

네. 스토어 설정에서 리뷰를 전체 비활성화하면 리뷰 이벤트가 발생하지 않아서 트리거도 작동하지 않아요.

### 5점 리뷰에 실수로 답장이 가지 않게 하려면 어떻게 하나요?

**Review Rating** 필터에 “Less than 4”(4 미만) 조건을 추가하세요. 그러면 낮은 별점의 리뷰만 워크플로우에 들어와요. <!-- 검토 필요: 원문 내용이 서로 다름 -->

### 리뷰를 수정하면 워크플로우가 다시 실행되나요?

아니요. 처음 제출한 이벤트에서만 트리거가 작동해요.

함께 보면 좋은 문서: [워크플로우의 Google Forms 액션과 트리거](../시작하기/google-forms-actions-and-triggers-in-workflows.md)
