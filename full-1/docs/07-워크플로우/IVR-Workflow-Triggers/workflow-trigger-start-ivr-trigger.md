---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003203-workflow-trigger-start-ivr-trigger
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Start IVR Trigger(IVR 시작 트리거)

**Start IVR Trigger**(IVR 시작 트리거)는 걸려 온 전화에 음성 안내 메뉴(IVR)를 연결하는 워크플로우 트리거예요. 고객이 전화를 걸면 어떤 부서로 연결할지, 어떤 안내를 들려줄지 자동으로 처리하고 싶을 때 쓰세요.

## 개요

**Start IVR Trigger**를 쓰면 워크플로우 안에서 IVR(자동 응답 음성 안내) 시스템을 만들고 관리할 수 있어요. 여러 단계로 된 음성 메뉴로 전화를 건 사람을 안내해서, 알맞은 부서에 연결하거나 원하는 정보를 빠르게 알려 줄 수 있어요.

IVR 트리거로는 음성사서함을 추적할 수 없어요.

## 트리거 이름

Start IVR Trigger

## 트리거 설명

특정 이벤트가 일어나면 IVR 순서를 시작하는 트리거예요. 예를 들어 비즈니스의 IVR 전화번호로 인바운드 통화(걸려 오는 전화)가 들어올 때 작동해요. 미리 녹음한 음성 안내를 들려주고, 전화를 건 사람이 키패드로 항목을 골라 이동하게 해서 통화 연결을 자동화해 줘요.

## 설정 방법

### 사전 준비

**Start IVR Trigger**를 쓰기 전에 서브 계정이 아래 조건을 갖췄는지 확인하세요.

- 서브 계정이 하이퍼클래스 전화 요금제를 구독 중이어야 해요.
- IVR에 쓸 전화번호가 하이퍼클래스 전화 설정에 등록되어 있어야 해요.
- 워크플로우에서 IVR을 실행하려면 먼저 IVR 구성을 만들어 두어야 해요.

{% hint style="warning" %}
IVR 기능은 하이퍼클래스 전화 요금제를 사용 중인 계정에서만 쓸 수 있어요. 서브 계정이 하이퍼클래스 전화 요금제가 아니면 **Start IVR Trigger**로 인바운드 통화를 연결할 수 없어요.
{% endhint %}

### 설정 순서

1. 사용 가능한 트리거 목록에서 **Start IVR Trigger**를 선택하세요.
2. **Trigger Name**(트리거 이름)에 "Trigger IVR call"처럼 알아보기 쉬운 이름을 입력하세요.
3. 인바운드 통화가 들어올 때 트리거가 작동하도록 설정하고, 전화번호를 선택하세요.
4. 필요하면 **Filters**(필터)에서 **Add custom fields**(커스텀 필드 추가)를 눌러 조건을 더하세요.
5. 트리거를 저장하고 활성화하세요. 이제 인바운드 통화에 IVR 시스템이 작동해요.

{% hint style="info" %}
전화번호를 하나의 IVR 워크플로우에 연결하면, 그 번호를 다른 IVR 워크플로우에 또 연결할 수 없어요.
{% endhint %}

## 예시

시나리오: 회사에 걸려 온 전화를 알맞은 부서로 연결하는 IVR 시스템을 만들려고 해요.

1. 워크플로우 트리거를 만들어요.
   - 대표 전화번호로 인바운드 통화가 들어오면 **Start IVR** 트리거가 작동하도록 설정해요.
2. 트리거 이름과 필터를 정해요.
3. **Filters**에서 IVR을 작동시킬 인바운드 전화번호를 추가해요.
4. 저장하고 활성화해요.
   - IVR 설정을 마무리하고 워크플로우를 활성화해요. 이제 인바운드 통화가 들어오면 IVR 시스템이 작동해요.

![Start IVR Trigger 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031725651/original/Tx4NwhUqlX3fiucumjMcqSeGw9ARiJVXLg.png?1724753166)
