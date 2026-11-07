---
원문: /support/solutions/articles/155000006491-workflow-trigger-association-created
번역일: 2026-11-06
카테고리: 44-신기능-2026
---

# 워크플로우 트리거 — Association Created(연결 생성됨)

**Association Created** 트리거를 쓰면 CRM 레코드끼리 새로 연결(association)될 때 워크플로우를 자동으로 시작할 수 있어요. 연결된 객체와 관계 라벨을 고르면, 내 업무 과정에 필요한 연결에만 워크플로우가 반응해요.

## Association Created 트리거 사용하기

**Association Created** 트리거는 CRM 레코드 사이에 새 연결이 생길 때 워크플로우를 자동으로 시작해요. 연결된 객체와 관계 라벨을 설정해 두면, 연락처·기회·사용자 지정 객체·회사가 서로 연결될 때 후속 조치, 알림 같은 작업을 자동으로 처리할 수 있어요.

{% hint style="info" %}
이 기능은 **실험실**에서 제공해요. 워크플로우를 설정하기 전에 서브 계정에서 **Association Created Trigger**(연결 생성 트리거)를 켜 주세요.
{% endhint %}

---

## Association Created 트리거란?

CRM 레코드 사이에 새 관계가 생기고 그 관계가 트리거 필터 조건과 맞으면, 이 트리거가 워크플로우를 시작해요.

예를 들어 연락처가 구매자(Buyer)로서 Property(매물)와 연결되면, 워크플로우가 후속 작업을 자동으로 만들거나 담당 팀에 알림을 보낼 수 있어요.

### 지원하는 레코드와 워크플로우

| 구분 | 지원 유형 |
| --- | --- |
| CRM 레코드 | 연락처, 기회, 사용자 지정 객체, 회사 |
| 워크플로우 유형 | 일반 워크플로우, 사용자 지정 객체 워크플로우, 회사 워크플로우 |

{% hint style="info" %}
기회도 연결에 참여할 수 있지만, 트리거 자체는 위 세 가지 워크플로우 유형 중 하나에서 설정해요.
{% endhint %}

---

## 시작하기 전에

- 서브 계정의 **실험실**에서 **Association Created Trigger**를 켜세요.
- 필요한 CRM 객체와 연결이 설정되어 있는지 확인하세요.
- 필터링에 쓸 연결 라벨을 미리 만들어 두세요.
- 워크플로우에 등록할 레코드에 맞게 워크플로우 유형을 고르세요.

---

## 트리거 설정하기

**1단계:** 회사 또는 사용자 지정 객체 워크플로우에서 **Add new trigger**(새 트리거 추가)를 클릭하세요.

![새 트리거 추가 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084185748/original/ZEyASBqF5fJsAO64-2cL_zVcumvmhWUi-w.png?1793010362)

**2단계:** **Association created**를 검색해서 선택하세요.

![Association created 트리거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084185766/original/H0bNmdZ2oO_pLkMfBwXDhK_3CZDaeLCRNA.png?1793010367)

**3단계:** **Association created with** 아래에서 연결된 객체를 고르세요.

![연결된 객체 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084185771/original/H6-zGyTnPvcTUSMPa5G9M91ZTUY0QfzWZw.png?1793010370)

**4단계:** **Add filters**(필터 추가)를 클릭해 **Association label** 필터를 추가하세요.

![연결 라벨 필터 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084185782/original/RhLRNH1IV-Kmke1O0Rvpm69TotUD3j0ncA.png?1793010372)

**5단계:** 라벨을 고른 다음 **Save trigger**(트리거 저장)를 클릭하세요.

![라벨 선택 후 트리거 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084185785/original/VGkoHKfDj7oD_whQNrs9Gxo5ykuh2q1eDA.png?1793010375)

전체 과정을 한 번에 정리하면 다음과 같아요.

1. **자동화 > 워크플로우**로 이동해 일반 워크플로우, 사용자 지정 객체 워크플로우, 회사 워크플로우 중 하나를 여세요.
2. 빌더에서 **Add trigger**(트리거 추가)를 선택하고 **Association Created**를 고르세요.
3. **Add filters**를 클릭하고, **Association created with**를 새 연결에 포함된 객체로 설정하세요.
4. 특정 관계에만 워크플로우가 반응하게 하려면 **Add filters**를 한 번 더 클릭해 **Association label**을 선택하고, 해당 라벨을 고르세요. 같은 객체 유형 안에서 짝을 이루는 라벨이라면, 워크플로우에 등록할 역할을 선택하세요.
5. 트리거를 저장하고, 내 업무 과정에 맞게 액션을 설정하세요.
6. **Publish**(게시)로 워크플로우를 게시하세요. 설정과 일치하는 새 연결을 만든 뒤 **Enrollment history**(등록 기록)와 **Execution logs**(실행 로그)에서 결과를 확인하세요.

---

## 트리거 필터 이해하기

Association Created 트리거에는 워크플로우 시작 시점을 정하는 필터가 두 가지 있어요.

| 필터 | 설명 | 예시 |
| --- | --- | --- |
| **Association created with** | 워크플로우 레코드와 연결되는 객체를 지정해요. | 연락처가 Property와 연결될 때 Property를 선택해요. |
| **Association label** | 특정 관계에만 트리거가 작동하도록 제한해요. | 연락처가 구매자로 연결될 때만 트리거하려면 Buyer를 선택해요. |

---

## 워크플로우 예시

### 1. 연락처가 Property와 연결될 때

부동산 팀이 Properties 사용자 지정 객체와 Buyer 연결 라벨을 쓰고 있어요. 일반 워크플로우에서 연결된 객체로 Properties를, 라벨로 Buyer를 선택해요. 연락처가 구매자로 연결되면 워크플로우가 후속 작업을 만들거나 팀에 알림을 보낼 수 있어요.

---

### 2. 사용자 지정 객체 레코드에 새 관계가 생길 때

자동차 판매점이 Cars와 Dealers를 사용자 지정 객체로 쓰고 있어요. Cars 워크플로우에서 Dealers와 Assigned Dealer 라벨을 선택해요. 자동차가 그 관계로 딜러와 연결되면, 배정을 조율하는 액션을 실행해요.

---

### 3. 기회가 회사와 연결될 때

계정 담당 팀이 기회가 회사와 연결될 때 대응하고 싶어 해요. 회사 워크플로우에서 연결된 객체로 Opportunities(기회)와 알맞은 라벨을 선택해요. 그런 다음 내부 알림이나 지원되는 다른 액션을 설정해 계정 담당 팀에 알려요.

---

## 자주 묻는 질문

### Association Created 트리거가 연결을 만들어 주나요?
아니요. 이 트리거는 CRM 레코드 사이에 연결이 생겼을 때 반응할 뿐, 연결 자체를 만들지는 않아요.

### 레코드를 만들면 연결을 만든 것과 같은가요?
아니요. CRM 레코드를 만드는 것과 연결을 맺는 것은 서로 다른 이벤트예요. 이 트리거는 관계가 만들어질 때 반응해요.

### 이 트리거를 기회에도 쓸 수 있나요?
네. 기회도 연결에 참여할 수 있어요. 이 트리거는 일반 워크플로우, 사용자 지정 객체 워크플로우, 회사 워크플로우에서 쓸 수 있어요.

### Association label 필터는 꼭 설정해야 하나요?
아니요. 라벨 필터는 선택 사항이에요. 특정 관계 유형에만 워크플로우가 반응하게 하고 싶을 때 쓰세요.

### 연결 라벨이 보이지 않아요.
쓸 수 있는 라벨은 선택한 객체에 설정된 연결에 따라 달라져요. 필요한 연결과 라벨이 만들어져 있는지 확인하세요.

### 이미 있는 연결에도 트리거가 작동하나요?
이 트리거는 새로 만들어진 연결에만 반응해요. 워크플로우를 테스트하려면 조건에 맞는 새 연결을 만들어 보세요.

### 레코드가 워크플로우에 등록되지 않으면 어떻게 확인하나요?
워크플로우가 게시되어 있는지, 선택한 객체와 연결 라벨이 새 관계와 일치하는지, **실험실**에서 이 기능이 켜져 있는지 확인하세요. 자세한 내용은 **Enrollment history**와 **Execution logs**에서 볼 수 있어요.
