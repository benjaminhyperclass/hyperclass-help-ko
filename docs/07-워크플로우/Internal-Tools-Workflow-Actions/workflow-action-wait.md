---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Internal Tools Workflow Actions
---

# 워크플로우 액션 - 대기 (Wait)

대기(Wait) 액션은 워크플로우의 다음 단계가 언제 실행될지를 제어할 수 있는 자동화 워크플로우의 핵심 기능입니다. 액션을 일시정지함으로써 연락처와의 상호작용이 적절한 시점에 관련성 있게 이루어지도록 보장할 수 있습니다. 이 가이드는 대기 액션을 구성하는 방법을 설명하고, 단계별 안내와 실용적인 예시를 통해 이 기능의 유용성을 이해할 수 있도록 도움을 드립니다.

---

**목차**

- [대기 액션이란?](#대기-액션이란)
- [대기 액션 세부 사항](#대기-액션-세부-사항)
- [대기 액션을 언제 사용해야 할까요?](#대기-액션을-언제-사용해야-할까요)
- [대기 액션 구성하기](#대기-액션-구성하기)
- [대기 액션 예시](#대기-액션-예시)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **대기 액션이란?**

대기 액션은 **연락처를 워크플로우에서 보류**시킵니다:

• **지정된 시간 동안** (예: 1일, 1시간 등)

• **조건이 충족될 때까지** (예: 연락처가 답변하거나 특정 이벤트가 발생할 때)

• **지정된 시간 창 동안** (예: 평일 오전 9시~오후 5시 사이)

이 기능은 커뮤니케이션이나 프로세스가 완벽한 타이밍에 이루어져 효율성을 높이고 사용자 경험을 향상시킬 수 있도록 보장합니다.

---

## 대기 액션 세부 사항

다음 표는 대기 액션에서 사용 가능한 모든 설정을 보여줍니다.

| 대기 유형 | 설명 | 기본 설정 | 고급 설정 |
|----------|------|----------|----------|
| 시간 기반 - 시간 지연 | 특정 시간이나 기간 동안 대기 | [숫자] [분/시간/일] 대기 | 재개 요일 [요일]<br>재개 시간 [시작-종료]<br>정확한 시간 [시간] |
| 시간 기반 - 이벤트/예약 시간 | 이벤트 시작 시간이나 예약 시간 전후까지 대기 | 정확한 시간까지<br>[개월+일+시간+분] 후<br>[개월+일+시간+분] 전 | 이미 과거인 경우 [다음 단계/특정 단계/모두 건너뛰기] |
| 시간 기반 - 연체 | 인보이스 만료일 전후까지 대기 | 정확한 시간까지<br>[개월+일+시간+분] 후<br>[개월+일+시간+분] 전 | 이미 과거인 경우 [다음 단계/특정 단계/모두 건너뛰기] |
| CRM 이벤트 - 조건 | 특정 조건이 충족될 때까지 대기 | 다중 세그먼트(그리고/또는) > 다중 조건(그리고/또는)<br>[필드] [이다/아니다/포함/포함하지 않음/다음 중 하나/다음 중 없음/비어있지 않음/비어있음] | 타임아웃 (켜기/끄기)<br>[숫자] [분/시간/일] |
| CRM 이벤트 - 연락처 답변 | 특정 단계에서 답변까지 대기 | 이전 액션이 해당 채널에서 전송된 경우 채널(이메일, SMS 등)에서 답변 | 타임아웃 (켜기/끄기)<br>[숫자] [분/시간/일] |
| CRM 이벤트 - 트리거 링크 클릭 | 트리거 링크 클릭까지 대기 | 트리거 링크 선택 | 타임아웃 (켜기/끄기)<br>[숫자] [분/시간/일] |
| CRM 이벤트 - 이메일 이벤트 | 이메일 이벤트까지 대기 | [이전 이메일 발송 액션] + [열람/클릭/구독해지/스팸신고/반송] 선택 | 타임아웃 (켜기/끄기)<br>[숫자] [분/시간/일] |

---

## **대기 액션을 언제 사용해야 할까요?**

대기 액션은 다음과 같은 상황에서 유용합니다:

- **적절한 타이밍의 후속 조치**: 고객 문의에 빠르게 응답하거나 적절한 시간에 이메일이나 SMS를 발송
- **조건부 트리거**: 폼 완료나 결제와 같은 특정 조건이 충족될 때까지 연락처 보류
- **제어된 일정 관리**: 지정된 시간 동안 워크플로우를 재개하여 근무 외 시간이나 주말에 메시지 발송 방지

워크플로우 AI 빌더로 대기 액션 편집: [워크플로우 AI 빌더(Workflow AI Builder)](../기타/workflow-ai-builder.md)를 사용하는 경우, 대화를 통해 대기 액션을 편집할 수 있습니다. 시간 지연, 시간 창 설정, 답변 조건을 업데이트하고, 타임아웃 분기를 추가하거나 제거하며, 수동 구성으로 전환하지 않고도 대기 유형을 변환할 수 있습니다.

---

## **대기 액션 구성하기**

워크플로우에서 대기 액션을 설정하는 방법은 다음과 같습니다:

1단계: 워크플로우에 대기 액션 추가하기. 자동화(Automation) 섹션의 워크플로우(Workflows) 영역으로 이동합니다.

![워크플로우 영역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037447851/original/Lxb6k2u8rpcJLYQbYTc4A_lDYWHpQn137g.png?1732872616)

2단계: 우측 상단의 "+ 워크플로우 만들기(Create Workflow)" 버튼을 클릭합니다. 드롭다운 메뉴가 열리면 "+ 처음부터 시작(Start from scratch)" 옵션을 클릭합니다.

![워크플로우 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037449214/original/viFqQbtsDaoyZ6LLRJmrH-NyY2ulXi5LYg.png?1732873492)

3단계: 워크플로우의 트리거를 설정합니다. 이 예시에서는 "연락처 생성(Contact created)" 트리거를 사용했습니다.

![트리거 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037467150/original/aiNa564YNRQapBYvXvZI5Ijqe1BQsR-mVg.jpeg?1732886507)

4단계: 대기 단계를 추가하려면 "+" 아이콘을 클릭합니다. 액션 메뉴에서 아래로 스크롤하거나 "대기(Wait)" 액션을 검색합니다.

![대기 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037465597/original/B_UsyHndhF2kjMfTLHOP8YClBpIu-xlrgg.png?1732885199)

5단계: 액션 이름 지정: 설명이 포함된 이름을 제공합니다 (예: "대기 - 가입 후 1일"). 이렇게 하면 워크플로우를 검토할 때 액션을 쉽게 식별할 수 있습니다.

![액션 이름 지정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037466642/original/HyqwIuwS1M0Txgn6Umg9MJRh8t_OTGvX1w.jpeg?1732886092)

6단계: 대기 유형 선택. 드롭다운을 클릭하여 목표에 따라 대기 액션의 유형을 보고 선택합니다.

![대기 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037552575/original/8YTpznRRXFBn1HjaxkKARaWXtmre0GCa4w.jpeg?1733127967)

7a단계: 시간 지연: 대기할 고정 기간을 지정합니다 (예: 1일, 1시간, 5분).

![시간 지연 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037467551/original/DVi2ajFn44BLkt64A8BVBhgghyfMXIA93Q.jpeg?1732886751)

![시간 지연 상세 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037550216/original/vv8JqdbyYiXjAgBuDLUnlTqig_5Eb47MQA.png?1733126248)

7b단계: 조건: 워크플로우를 재개할 조건을 설정합니다. 아래 예시에서는 질문에 대한 답변이 "예"일 때만 워크플로우가 실행되도록 조건을 추가했습니다.

![조건 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037470781/original/tsCSvH_Ix_-6ApRCsjTz2YWZ8iI_8YtDsw.png?1732889265)

**조건 및 세그먼트**: 조건 대기를 선택하면 연락처가 진행할 수 있는 시점을 결정하는 조건을 정의해야 합니다. 여러 조건을 세그먼트로 그룹화하고 AND/OR 논리를 사용하여 더 복잡한 규칙을 만들 수 있습니다. 세그먼트 중 하나라도 참으로 평가되면 대기 액션이 충족됩니다. 개별 규칙을 만들려면 "조건 추가"를 사용하고, 그룹화된 논리 블록을 만들려면 "세그먼트 추가"를 사용합니다.

![조건과 세그먼트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048685495/original/rY8G8uPv1t6Lkk0Sz0O8FeTv3Y9yHTmUnQ.png?1750662565)

7c단계: 연락처 답변. 연락처가 이메일이나 메시지에 상호작용할 때까지 일시정지합니다.

![연락처 답변 대기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037471020/original/Jd0LzbUaxtfZGc2MWEZwB9S59MdsGmwP4g.png?1732889428)

7d단계: 고급 시간 창 설정 (선택사항). 이 설정을 사용하여 대기 액션이 활성화를 시도할 요일/시간의 창을 제어합니다. 예를 들어, 연락처가 토요일에 답변했고 정상적으로는 대기 액션이 진행되지만 평일에만 실행하고 싶다면 고급 시간 창을 월-금(토-일 제외)으로 설정할 수 있습니다. 하루 중 시간에 대해서도 동일하게 설정할 수 있습니다.

![고급 시간 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037466877/original/lShOBMNZ0TzwqQxryMyxkCSgv_jX1SogGw.jpeg?1732886282)

7e단계: 재개 요일. 액션을 재개할 특정 요일을 선택합니다 (예: 평일만).

![재개 요일 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037466836/original/vyMu0xTNnDk8_rcGK8t-XNfw5TUURDGa3Q.jpeg?1732886235)

7f단계: 재개 시간대. 액션을 재개할 시간 창을 정의합니다 (예: 오전 9시~오후 5시).

![재개 시간대](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037467210/original/CLCvJGXUPSDoJnFkuj48AYaCnBYn7ZYD6Q.jpeg?1732886567)

7g단계: 추가 필터. 특정 연도, 월, 날짜에 생일 축하 메시지 전송과 같은 개인화된 워크플로우를 실행하기 위해 연락처를 보류하는 등 더 세밀한 조건을 추가합니다.

![추가 필터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037466921/original/_DSLkKZgVXBLiavIpd6yH-E2MRwGjRP_Eg.jpeg?1732886332)

8단계: 저장 및 테스트. 워크플로우를 저장하고 대기 액션이 예상대로 작동하는지 테스트합니다.

![저장 및 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037565186/original/6FOxmtPS7UApe0Y8Ajn-Tts2qiIcxaVbBQ.png?1733135197)

---

**대기 액션 예시**

### **예시 1: 가입 후 환영 이메일**

상황: 새 고객이 웹사이트에 가입합니다.

- 트리거: 새 연락처가 추가될 때 자동화가 시작됩니다.
- 대기: 이메일을 보내기 전에 1일 지연을 추가합니다.
- 액션: 개인화된 환영 이메일을 발송합니다.

결과: 지연 시간은 새 고객이 이메일을 받기 전에 브랜드를 탐색할 순간을 제공하여 상호작용이 사려 깊고 의도적으로 느껴지게 합니다.

![환영 이메일 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037480366/original/lHUnqUmfIr_iGmjx6AYZHbdlBZv0CNz2tg.jpeg?1732897920)

---

### **예시 2: 뉴스레터 가입 후 후속 조치**

상황: 리드가 뉴스레터에 가입합니다.

- 트리거: 리드가 구독할 때 자동화가 시작됩니다.
- 대기: 첫 번째 이메일을 보내기 전에 1분간 보류합니다.
- 액션: 최신 뉴스레터 링크와 함께 "가입해 주셔서 감사합니다" 이메일을 발송합니다.

결과: 짧은 지연 시간은 이메일이 로봇적이거나 즉시 전송된 것처럼 보이지 않게 하여 더 인간적인 경험을 만듭니다.

---

### **예시 3: 장바구니 이탈 복구**

상황: 고객이 장바구니에 상품을 담았지만 구매를 완료하지 않습니다.

- 트리거: 장바구니가 이탈됩니다.
- 대기: 고객이 재고할 시간을 주기 위해 20분간 일시정지합니다.
- 액션: 할인 제안과 함께 부드러운 리마인더 이메일을 발송합니다.

결과: 전략적으로 타이밍이 맞춰진 후속 조치가 전환 가능성을 높입니다.

![장바구니 이탈 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037552570/original/rQvrw9_n6nyTB-X1vzBVKMGsnPmeypzAzA.png?1733127966)

---

## 자주 묻는 질문

**Q: 대기 액션에서 세그먼트와 조건의 차이점은 무엇인가요? 어떻게 사용해야 하나요?**

대기 액션에서 조건은 "연락처의 직급이 CEO임" 또는 "연락처가 '고가치' 태그에 포함됨"과 같은 개별 규칙입니다. 세그먼트는 이러한 조건들을 그룹화한 것으로, AND/OR 논리를 사용하여 함께 평가됩니다. 연락처는 세그먼트 중 하나라도 충족되면 대기 단계에서 벗어납니다.

예를 들어, 연락처가 높은 참여도를 보이거나 특정 기준을 충족할 때 워크플로우가 계속되기를 원할 수 있습니다. 세그먼트 1은 연락처가 제안서 이메일을 열었고 "의사결정자"인지 확인하고, 세그먼트 2는 전략 상담에 참석했고 승인된 예산이 있는지 확인할 수 있습니다.

세그먼트 중 하나라도 충족되면 대기가 끝나므로, 자동화가 다르지만 동등하게 자격을 갖춘 사용자 행동에 적응할 수 있습니다.

**Q: 연락처가 이벤트/예약 기반 대기 단계에 도달했지만 이벤트 시간이 이미 과거인 경우 어떻게 되나요?**

연락처가 대기 단계에 도달했을 때 이벤트나 예약 시간이 이미 지난 경우, 시스템은 선택한 **"이미 과거인 경우"** 옵션을 사용합니다:

- **다음 단계:** 대기를 건너뛰고 다음 액션으로 계속됩니다.
- **특정 단계:** 선택한 단계로 건너뜁니다.
- **모두 건너뛰기:** 워크플로우의 나머지 단계를 종료합니다.

**Q: 여러 세그먼트에 상충하는 조건이 있을 경우 대기 액션은 어떻게 작동하나요? 어떤 세그먼트가 우선권을 가지나요?**

**조건 대기** 단계의 모든 세그먼트는 독립적으로 평가되며, **세그먼트에 우선순위는 없습니다**. 세그먼트가 상충하는 조건을 포함하더라도 **세그먼트 중 하나라도 참이 되는 즉시** 워크플로우가 진행됩니다. 세그먼트는 **OR 관계**를 사용하므로 참으로 평가되는 첫 번째 세그먼트가 대기를 종료합니다.

**예시:**
- 세그먼트 1: 태그 = "VIP"
- 세그먼트 2: 태그 ≠ "VIP" AND 이메일 열람 = True

연락처가 세그먼트 중 하나라도 일치하면 대기가 끝납니다.

**Q: 워크플로우 AI 빌더로 대기 액션을 편집할 수 있나요?**

네. 워크플로우 AI 빌더는 대기 설정 업데이트, 타임아웃 분기, 지원되는 대기 구성을 포함한 대기 액션에 대한 대화형 편집을 지원합니다. AI 기반 편집 단계는 워크플로우 AI 빌더를 참조하세요.

---
*원문 최종 수정: Wed, 18 Mar, 2026 at 1:27 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*