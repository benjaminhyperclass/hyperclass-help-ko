---
원문: https://help.gohighlevel.com/support/solutions/articles/155000008595-meta-pixel-tracking-for-events
번역일: 2026-11-06
카테고리: 10-마케팅
---

# 이벤트 Meta Pixel 트래킹

이벤트에 Meta Pixel을 연결하면 방문자가 이벤트 페이지를 보고 참가 신청이나 티켓 주문을 마치기까지의 흐름을 Meta 전환 이벤트로 측정할 수 있어요. 이벤트마다 참석자의 행동을 Meta 이벤트에 연결할 수 있고, 티켓 이벤트는 주문 금액·통화·티켓 수량·티켓 식별자 같은 구매 정보도 함께 보낼 수 있어요.

## 이벤트 Meta Pixel 트래킹이란?

이벤트 Meta Pixel 트래킹은 하이퍼클래스 이벤트에서 일어난 참석자의 활동을 Meta 전환 이벤트와 연결해 줘요. 이벤트 마케팅으로 생긴 참가 의도, 참가 신청 완료, 티켓 구매를 더 잘 파악할 수 있어요.

Meta Pixel 트래킹은 이벤트마다 따로 설정해요. 설정 위치는 **설정 > Link & tracking**(링크 및 트래킹)이에요.

## 주요 장점

- 전환 확인: 이벤트 페이지 첫 방문부터 참가 신청 또는 티켓 주문 완료까지 참석자의 활동을 측정할 수 있어요.
- 유연한 이벤트 매핑: 지원하는 참석자 행동마다 어떤 Meta 이벤트를 보낼지 고를 수 있어요.
- 이벤트별 설정: Meta Pixel 트래킹을 이벤트마다 독립적으로 설정해요.
- 티켓 구매 분석: 티켓 결제 과정의 여러 단계를 추적할 수 있어요.
- 매출 정보: 완료된 티켓 주문과 함께 지원되는 구매 정보를 보낼 수 있어요.
- 중복 이벤트 방지: 세션 기반 중복 제거로 같은 전환 신호가 반복해서 잡히는 일을 줄여 줘요.

## 지원하는 Meta Pixel 트래킹 이벤트

**참가 신청** 이벤트와 **티켓 발급됨** 이벤트는 참석자가 거치는 단계가 달라요. 그래서 이벤트 유형마다 단계에 맞는 트래킹 행동을 제공해요.

| 이벤트 유형 | 지원하는 참석자 행동 |
| --- | --- |
| **참가 신청** 이벤트 | **Event page viewed**(이벤트 페이지 조회), **RSVP started**(참가 신청 시작), **RSVP completed**(참가 신청 완료) |
| **티켓 발급됨** 이벤트 | **Event page viewed**(이벤트 페이지 조회), **Checkout started**(결제 시작), **Ticket selection completed**(티켓 선택 완료), **Registration form submitted**(등록 폼 제출), **Payment details submitted**(결제 정보 제출), **Ticket order completed**(티켓 주문 완료) |

각 행동이 언제 전송되는지는 아래 표를 참고하세요.

| 이벤트 유형 | 참석자 행동 | 전송 시점 |
| --- | --- | --- |
| **참가 신청** | **Event page viewed** | 게시된 이벤트 페이지가 로드될 때 |
| **참가 신청** | **RSVP started** | 방문자가 참가 신청 폼을 열 때 |
| **참가 신청** | **RSVP completed** | 참가 신청이 정상적으로 확정될 때 |
| **티켓 발급됨** | **Event page viewed** | 게시된 이벤트 페이지가 로드될 때 |
| **티켓 발급됨** | **Checkout started** | 참석자가 결제를 시작할 때 |
| **티켓 발급됨** | **Ticket selection completed** | 티켓 선택이 끝날 때 |
| **티켓 발급됨** | **Registration form submitted** | 등록 폼을 제출할 때 |
| **티켓 발급됨** | **Payment details submitted** | 결제 정보를 제출할 때 |
| **티켓 발급됨** | **Ticket order completed** | 티켓 주문이 정상적으로 완료될 때 |

완료된 티켓 주문은 유료 티켓과 $0 주문 모두 추적돼요.

- 구매 데이터: 완료된 티켓 주문은 주문 금액, 통화, 티켓 수량, 티켓 식별자도 Meta로 보낼 수 있어요.
- 중복 제거: 하이퍼클래스는 세션 기반 중복 제거를 사용해요. 브라우저 뒤로 가기, 페이지 새로고침, 결제 리디렉션, 반복되는 완료 확인 때문에 같은 참석자 행동이 여러 번 보고되는 일을 막아 줘요.

![이벤트 Meta Pixel 트래킹 개요](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079933950/original/2wr708qTk62B0A5O1VZdWhvpdHEjWn6eiw.png?1788362576)

## Meta로 보내는 구매 데이터

완료된 티켓 주문은 등록 건수만 볼 때보다 더 많은 정보를 줘요. 이 정보로 이벤트 마케팅을 통해 발생한 티켓 구매의 가치와 구성을 평가할 수 있어요.

완료된 티켓 주문에는 다음 정보가 들어갈 수 있어요.

- 주문 금액: 완료된 티켓 주문에 해당하는 금액이에요.
- 통화: 주문에 사용된 통화예요.
- 티켓 수량: 주문에 포함된 티켓 수예요.
- 티켓 식별자: 거래에 포함된 티켓의 식별자예요.

이 추가 데이터는 완료된 티켓 주문에 연결돼요. 등록 건수만이 아니라 매출 성과 중심의 캠페인 리포트를 만들 때 활용할 수 있어요.

## Meta Pixel 트래킹 설정하기

올바른 Meta Pixel ID를 사용하고, 캠페인에 중요한 참석자 행동을 매핑해야 측정하려는 이벤트 흐름이 전환 데이터에 제대로 반영돼요.

### 1. Meta Pixel ID 확인하기

이벤트에 연결할 Meta 데이터 소스의 Pixel ID를 확인하세요.

Meta Events Manager에서 Pixel ID로 쓰는 Dataset ID를 찾는 방법은 하이퍼클래스의 기존 Meta 안내 문서에 나와 있어요.

![Meta Events Manager에서 Pixel ID 확인하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079934081/original/Qk4kMpRcJ9x7MQmEjdhVOKSFdfdIVwLzRg.png?1788362650)

[Facebook Conversion API용 퍼널 이벤트 픽셀 설정하기](../42-통합/Facebook-Integration/how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api.md)

### 2. Link & tracking 열기

1. 서브 계정에서 **멤버십 > 이벤트**로 이동하세요.

   ![멤버십 > 이벤트 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079934348/original/wbJEUuNvvYHsDawbdh1YP838tNuPskUXMw.png?1788362841)
2. 트래킹할 이벤트를 선택하세요.
3. **설정**을 열고 **Link & tracking**을 선택하세요.
4. **Meta Pixel** 설정 영역을 찾으세요.

   ![Meta Pixel 설정 영역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079934419/original/dMdBG7IG1iyv6dQ__wosrkxfGorpxLvH1g.png?1788362895)

### 3. Meta Pixel ID 입력하기

이 이벤트에 사용할 Meta 데이터 소스의 **Meta Pixel ID**를 입력하세요.

Meta Pixel 트래킹은 이벤트마다 따로 설정해요. 매핑을 설정하기 전에 지금 편집 중인 이벤트가 맞는지 꼭 확인하세요.

![Meta Pixel ID 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079934567/original/OUp8f5LCNZIc8mxoFisPGUee1zyQ0oDpQA.png?1788362985)

### 4. 참석자 행동을 Meta 이벤트에 매핑하기

**Event mapping**(이벤트 매핑) 옵션에서 지원하는 참석자 행동마다 어떤 Meta 이벤트를 보낼지 고르세요.

**참가 신청** 이벤트는 다음 항목을 매핑하세요.

1. **Event page viewed**
2. **RSVP started**
3. **RSVP completed**

**티켓 발급됨** 이벤트는 다음 항목을 매핑하세요.

1. **Event page viewed**
2. **Checkout started**
3. **Ticket selection completed**
4. **Registration form submitted**
5. **Payment details submitted**
6. **Ticket order completed**

![참석자 행동별 Meta 이벤트 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079934781/original/cwnhhJHVQf4bqr0na5-4hqBCXbA4N_6CqA.png?1788363055)

### 5. 참석자 흐름 테스트하기

게시된 이벤트 화면에서 트래킹 계획에 중요한 행동이 제대로 잡히는지 확인하세요. **Event page viewed**는 게시된 이벤트 페이지가 로드될 때 발생하도록 정의되어 있어요. 이 단계는 공개된 화면에서 테스트해야 정확히 확인할 수 있어요.

**참가 신청** 이벤트는 페이지 조회, 참가 신청 폼 열기, 참가 신청 완료를 테스트하세요. **티켓 발급됨** 이벤트는 주문 완료까지 해당하는 결제 단계를 테스트하세요. $0 티켓 주문을 쓰는 경우라면 그 주문도 테스트하세요.

![참석자 흐름 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079934969/original/oj3FhtZr5neYQkb-b848rkEnTd4b-16Lfg.png?1788363171)

## 자주 묻는 질문

### 이벤트 Meta Pixel 트래킹은 광고 관리자의 전환 픽셀과 같은 건가요?

아니요. 이벤트 Meta Pixel 트래킹은 개별 이벤트의 **설정 > Link & tracking**에서 직접 설정해요. **광고 관리자**의 전환 트래킹은 별도의 설정 과정을 거쳐요.

### 이벤트 Meta Pixel 트래킹을 쓰려면 퍼널 트래킹 코드를 설치해야 하나요?

아니요. 기본 제공되는 이벤트 연동은 이벤트 안에서 Meta Pixel ID와 **Event mapping** 설정으로 직접 구성해요. 퍼널 트래킹 코드는 퍼널이나 웹사이트에 적용하는 별도의 트래킹 설정이에요.

### $0 티켓 주문도 추적되나요?

네. 성공적으로 완료된 $0 티켓 주문도 완료된 티켓 주문으로 추적돼요.

### Meta Pixel 트래킹으로 참석자 체크인도 확인할 수 있나요?

이 기능이 지원하는 Meta Pixel 트래킹 행동에는 체크인이 없어요. 등록과 체크인 자동화에는 별도의 이벤트 워크플로우 트리거가 있어요.

### 게시하지 않은 이벤트를 미리보기하면 Event page viewed가 전송되나요?

이 기능은 **Event page viewed**를 게시된 이벤트 페이지가 로드될 때 발생하는 행동으로 정의해요.
