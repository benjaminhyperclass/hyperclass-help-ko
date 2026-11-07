---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003537-refund-workflow-trigger-in-highlevel
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Refund(환불)

**Refund**(환불) 트리거를 쓰면 환불이 발생할 때마다 워크플로우를 자동으로 시작할 수 있어요. 고객에게 안내 메시지를 보내거나, 내부 후속 작업을 배정하거나, 실패한 환불을 처리할 때 활용해 보세요.

## Refund 트리거란?

**Refund** 트리거는 환불이 발생하면 워크플로우를 자동으로 시작해요. 환불의 상태, 금액, 유형, 출처로 조건을 걸 수도 있어요. 고객에게 확인 메시지를 보내거나 팀원에게 내부 작업을 배정하는 식으로 환불 건에 바로 대응할 수 있어요.

## Refund 트리거의 장점

환불 관련 업무를 자동화하면 더 빠르게 응대하고 수작업도 줄일 수 있어요. 팀의 업무 효율도 오르고 고객 경험도 좋아져요.

- 고객 알림: 환불 확인 메시지를 SMS나 이메일로 자동 발송해서 문의를 줄여요.
- 팀 작업 배정: 후속 작업을 자동으로 만들어 팀이 바로 대응하게 해요.
- 조건별 자동화: 금액, 유형, 상태, 출처 등 조건에 맞는 환불일 때만 워크플로우를 시작해요.
- 고객 만족도 향상: 환불이 진행되는 동안 제때 안내해서 신뢰와 고객 유지율을 높여요.
- 실패한 환불 선제 대응: 환불이 실패하면 별도 워크플로우를 실행해서 고객 이탈 위험을 줄여요.
- 효율적인 운영: 수작업을 없애고 환불 상황마다 일관되게 처리해요.

## Refund 트리거 설정하기

Refund 트리거를 설정해 두면 환불 처리를 우리 비즈니스 규칙에 맞게 제때 자동화할 수 있어요.

### 1단계: 새 워크플로우 만들기

1. 서브 계정의 왼쪽 메뉴에서 **자동화**(Automation)를 클릭해요.
2. 오른쪽 위의 **+ Create Workflow**(워크플로우 만들기) 버튼을 눌러 새 워크플로우를 만들어요.

![자동화 화면에서 워크플로우 만들기 버튼을 누르는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046717824/original/ZZBizO4XIRVc1NH8Wjf5KX_5aWgk20WDwQ.png?1747340095)

### 2단계: Refund 트리거 추가하기

1. 워크플로우 이름을 입력해요.
2. **+ Add New Trigger**(새 트리거 추가)를 클릭해요.
3. **Refund** 트리거를 검색해서 선택해요.

![새 트리거 추가에서 Refund 트리거를 선택하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046717860/original/_jM5I_qQ61hfhV68VDDVWIITCg7sEk7viw.png?1747340170)

### 3단계: 트리거 필터 추가하기

1. **Workflow Trigger**(워크플로우 트리거) 화면 아래쪽의 **+ Add Filters**(필터 추가)를 클릭해요.
2. 필요한 필터를 적용해요. 필터 종류는 다음 섹션에서 알려 드려요.

![트리거 화면 아래쪽에서 필터를 추가하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046717891/original/cIciIyzT1MEerYNKPA916HLhjhZ8AgfKMQ.png?1747340235)

### 4단계: 워크플로우 완성하기

1. 비즈니스에 필요한 액션(알림, 작업 배정 등)을 추가해요.
2. **Save**(저장)를 클릭하고 **Publish**(게시)해요.

![워크플로우를 저장하고 게시하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046717915/original/-hXp2tiTpSM_QZk532r_LDiDQB7NzU9xvA.png?1747340309)

## Refund 트리거 필터 사용하기

필터를 쓰면 원하는 환불 상황에서만 워크플로우가 실행돼요. 필터는 하나만 써도 되고 여러 개를 함께 써도 돼요. 함께 쓰면 조건을 더 세밀하게 걸 수 있어요.

- **Status**(상태): 환불 상태로 걸러요.
  - **Successful**(성공): 환불이 완료된 뒤에만 실행돼요.
  - **Failed**(실패): 환불 시도가 실패했을 때 실행돼요.
- **Amount**(금액): 환불 금액으로 걸러요.
  - **Greater than**(초과), **Less than**(미만), **Equal to**(같음) 중에서 골라 특정 금액과 비교해요. (예: 환불 금액 > $100)
- **Source**(출처): 환불이 시작된 곳으로 걸러요.
  - **Calendar**(캘린더), **Communities**(커뮤니티), **Payment Link**(결제 링크), **Invoices**(인보이스), **Manual**(수동) 등을 고를 수 있어요.
- **Type**(유형): 환불 유형으로 걸러요.
  - **Full Refund**(전액 환불) 또는 **Partial Refund**(부분 환불)

![Refund 트리거에서 사용할 수 있는 필터 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046717990/original/mDbwWvTTVUB6cF4Ru3425UdHLU4TInLQXg.png?1747340454)

## Refund 트리거 워크플로우에 액션 추가하기

트리거와 필터를 설정했다면, 원하는 결과에 맞게 여러 액션을 추가할 수 있어요. 아래는 자주 쓰는 예시예요.

{% hint style="info" %}
환불 관련 커스텀 값은 **Custom Values**(커스텀 값)의 **Payments**(결제) 섹션에서도 찾을 수 있어요. 메시지에 환불 세부 정보를 넣고 싶을 때 사용하세요.
{% endhint %}

### 예시 1: 확인 알림 보내기

Refund 트리거는 고객 알림을 자동화할 때 특히 유용해요. 예를 들어 환불이 성공하면 고객에게 처리 완료를 알리는 이메일을 자동으로 보낼 수 있어요. 반대로 환불이 실패하면 다른 자동 메시지를 보내 문제 상황을 알리고 다음 안내를 줄 수 있어요. 이렇게 하면 불편할 수 있는 상황에서도 제때 소통해서 고객 만족도를 높일 수 있어요.

![환불 결과에 따라 고객에게 알림을 보내는 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046718045/original/0J6GrOtaNGaUA6OkEa1hWpGMBqpnxwuX-g.png?1747340637)

### 예시 2: 내부 작업 배정하기

Refund 트리거로 지원팀이나 고객 성공팀이 환불받은 고객에게 후속 연락을 하도록 작업을 만들 수 있어요.

![환불 후 내부 작업을 배정하는 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046718058/original/hVs5vFEY3YJ01ITG3iCZuPG4qaABWrFJjA.png?1747340670)

## 자주 묻는 질문

### 같은 연락처에 환불이 여러 번 생기면 트리거가 매번 실행되나요?

네. 환불 건마다 새로운 트리거 이벤트로 처리돼요. 기본적으로 같은 고객의 환불이라도 환불이 발생할 때마다 워크플로우가 다시 실행돼요.

### Stripe나 다른 외부 업체에서 직접 환불해도 트리거가 실행되나요?

아니요. 트리거가 실행되려면 하이퍼클래스 안에서 환불해야 해요. 하이퍼클래스에서 지원하는 결제 처리업체는 Stripe, Authorize.net, NMI예요. 연동이 설정되어 있어야 하고, 환불도 하이퍼클래스를 통해 진행해야 트리거가 실행돼요.

### 부분 환불에만 트리거를 쓰려면 어떻게 하나요?

트리거에 Refund Type = Partial 조건을 추가하세요. <!-- 검토 필요: 원문 내용이 서로 다름 (앞에서는 필터 이름이 Type인데 여기서는 Refund Type으로 표기) --> Refund Type + Refund Failed처럼 조건을 여러 개 함께 쓰면 이벤트를 더 정확하게 걸러 낼 수 있어요.

### 환불이 실패하면 어떻게 되나요?

선택한 필터에 맞으면 워크플로우는 그대로 실행돼요. 환불 실패 건을 관리하려면 Refund Failed = True 필터를 사용하세요. <!-- 검토 필요: 원문 내용이 서로 다름 (앞에서는 Status 필터의 Failed 옵션으로 설명) --> 실패한 환불을 팀원에게 알릴 때 유용해요.

### 고객 대신 내부 팀에 알리고 싶어요.

작업이나 내부 이메일 같은 내부용 액션을 사용하면 환불 사실을 내부 팀에 알릴 수 있어요.
