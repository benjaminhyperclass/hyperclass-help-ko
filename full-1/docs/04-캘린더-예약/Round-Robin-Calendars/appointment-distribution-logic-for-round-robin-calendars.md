---
원문: https://help.gohighlevel.com/support/solutions/articles/155000001484-appointment-distribution-logic-for-round-robin-calendars
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 라운드 로빈 캘린더의 예약 배정 방식

하이퍼클래스의 라운드 로빈 캘린더가 팀원에게 예약을 자동으로 나누는 방식을 설명해요. 팀원이 공평하게 예약을 받으면서도 가능한 시간대를 최대한 열어 두고 싶을 때 참고하세요.

### [동영상](https://www.youtube.com/embed/0\_o8kgZ5fBM?&wmode=opaque)

## 소개

라운드 로빈 캘린더(Round Robin)는 예약을 팀원에게 자동으로 나눠 주는 캘린더예요. 영업, 고객 지원, 의료 서비스처럼 팀 단위로 예약을 받는 비즈니스에 잘 맞아요.

라운드 로빈 캘린더 유형을 쓰면 고객에게 더 많은 예약 가능 시간을 보여 주면서 팀의 업무량도 효율적으로 관리할 수 있어요. 새 예약이 들어오면 팀원에게 자동으로 배정되기 때문에 직접 배정하는 수고를 덜 수 있어요.

자세한 설정 방법은 [라운드 로빈 캘린더 설정 가이드](round-robin-calendars-setup-distribution-availability-explained.md)를 참고하세요.

## 예약 배정 방식

라운드 로빈 캘린더에는 두 가지 배정 방식이 있어요. **Optimize for Availability**(가용성 우선)와 **Optimize for Equal Distribution**(균등 배분 우선)이에요. 비즈니스 목표에 맞는 방식을 고르세요.

### 1. Optimize for Availability

선택한 예약 시간에 가능한 팀원에게 예약을 우선 배정하는 방식이에요.

![가용성 우선 배정 방식 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042622108/original/-up1q4x6Nm4PtLUshPrU_oAmBaUY93q6cw.gif?1741094283)

- 추천 대상: 바로 예약을 잡는 것이 중요한 비즈니스(예: 고객 지원, 긴급 의료 서비스)
- 주요 특징:
  - 가능한 팀원에게 먼저 예약을 배정해요.
  - 가능한 팀원이 여러 명이면 우선순위가 높은 팀원이 먼저 배정돼요.
  - 예약 가능한 시간대를 효율적으로 써요.
  - 고객의 대기 시간이 줄어요.

### 2. Optimize for Equal Distribution

지금 당장 누가 가능한지와 상관없이, 일정 기간 동안 팀원별 예약 수를 비슷하게 맞추는 방식이에요. 돌아가며 배정해서 공평함을 유지해요.

![균등 배분 우선 배정 방식 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042622325/original/DMYkCkFxLlpzVb0klXDXWAnwTmcT3txZEg.png?1741094449)

- 추천 대상: 영업팀, 상담 서비스, 업무량을 똑같이 나누고 싶은 비즈니스
- 주요 특징:
  - 팀 전체에 예약을 고르게 나눠요.
  - 특정 팀원에게 예약이 몰리지 않아요.
  - 팀원들의 가능 시간이 비슷할 때 가장 잘 작동해요.
- 작동 방식

하이퍼클래스는 1개월 동안의 예약 수를 기준으로 팀원에게 예약을 고르게 나눠요.

{% hint style="warning" %}
이 배정 로직은 **Any Available**(아무 팀원 가능)을 선택했을 때만 적용돼요.

예약자가 특정 팀원을 직접 선택하면 배분 상태와 상관없이 예약이 진행돼요.
{% endhint %}

#### 월별 배분 방식

예약자가 어떤 달(예: 4월)의 시간대를 선택하면 다음과 같이 처리해요.

- 해당 월에 팀원별로 배정된 예약 수를 세요.
- 팀 전체의 균형이 유지되도록 새 예약을 배정해요.
- 한 팀원이 다른 팀원보다 3건을 넘게 앞서 나갈 수 없어요.

- 가용성 규칙
  - 선택한 달에 팀원별로 라운드 로빈 미팅이 몇 건인지 추적해요.
  - 어떤 팀원이 다른 팀원보다 3건 이상 앞서 있으면:
    - 그 팀원의 가능 시간이 일시적으로 숨겨져요.
    - 다른 팀원들이 따라잡으면 다시 보여요.
- 예시
  - John이 3건, Hannah가 0건이면 John의 가능 시간이 숨겨져요.
  - Hannah가 1건을 받으면 John이 다시 배정 대상이 돼요.
  - John이 한 건을 더 받아 4대 1이 되면 John의 가능 시간이 다시 숨겨져요.

{% hint style="warning" %}
- **팀원**을 추가하거나 제거하면 모든 팀원의 미팅 수가 초기화돼요.
- **Optimize for Equal Distribution**에서 **Optimize for Availability**로 바꿨다가 다시 되돌리면 미팅 수가 초기화돼요.
{% endhint %}

#### 예약 시점의 배정 방식

예약이 들어오면 다음 순서로 팀원을 정해요.

1. 해당 월에 팀원별로 배정된 예약 수를 확인해요.
2. 예약 수가 가장 적은 팀원을 선택해요.
3. 예약 수가 같은 팀원이 여러 명이면 팀에 미리 정해 둔 순서로 정해요.
4. 선택된 팀원이 그 시간에 불가능하면 다음 순서의 가능한 팀원으로 넘어가요.

이렇게 하면 예약이 적은 팀원이 먼저 배정되어, 시간이 지나면서 예약 수가 다시 고르게 맞춰져요.

#### 균등 배분 모범 사례

- **Allow Staff Selection**(직원 선택 허용)을 끄세요. 그래야 예약이 자동으로 배정되어 균등 배분이 제대로 유지돼요.
- 팀원들의 가능 시간이 비슷하거나 겹칠 때 균등 배분이 가장 잘 작동해요. 그러면 모든 팀원에게 예약을 공평하게 돌릴 수 있어요.

## 팀원 우선순위 설정

팀원마다 우선순위를 정해 예약 배정에 영향을 줄 수 있어요. 가능한 팀원이 여러 명이면 우선순위가 높은 팀원이 먼저 예약을 받아요.

![팀원 우선순위 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042622842/original/VZ8QsNLxxVoogNnOMCJ9ccxOKcNO228F_A.jpeg?1741094722)

우선순위 단계는 다음과 같아요.

| 우선순위 단계 | 설명 |
| --- | --- |
| **높은 우선순위** | 가능하면 이 팀원이 가장 먼저 선택돼요. |
| **Medium Priority**(중간 우선순위) | 높은 우선순위 팀원이 모두 불가능할 때 선택돼요. |
| **Low Priority**(낮은 우선순위) | 높은 우선순위와 중간 우선순위 팀원이 모두 불가능할 때만 선택돼요. |

## 미팅 장소 선택

예약을 설정할 때 팀원별로 원하는 **미팅 장소**를 정할 수 있어요. 미팅을 어떤 방식으로, 어디서 할지 유연하게 정할 수 있어요.

![미팅 장소 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042623125/original/pLuJn5bVs_3zZoEExFdf0zXfSdoLLgW1ng.png?1741094898)

| 미팅 장소 옵션 | 설명 |
| --- | --- |
| **Zoom** | Zoom으로 미팅할 때 선택해요. |
| **Google Meet** | Google Meet 예약을 잡을 때 선택해요. |
| **전화번호** | 전화 통화로 미팅할 때 선택해요. |
| **전체 주소** | 실제 장소가 필요한 대면 미팅에 유용해요. |
| **Ask the Booker**(예약자에게 묻기) | 예약하는 사람이 미팅 장소를 직접 정할 수 있어요. |
| **Microsoft Teams** | Microsoft Teams로 미팅할 때 선택해요. |

## 자주 묻는 질문

### 설정한 뒤에도 배정 방식을 바꿀 수 있나요?
네, **캘린더 설정**에서 언제든 바꿀 수 있어요.

### 팀원이 예약을 받을 수 없는 시간이면 어떻게 되나요?
- **Optimize for Availability**를 쓰면 다음으로 가능한 팀원에게 예약이 배정돼요.
- **Optimize for Equal Distribution**을 쓰면 불가능한 팀원은 건너뛰고 순서대로 계속 돌아가요.

### 특정 팀원을 라운드 로빈 캘린더에서 제외할 수 있나요?
네, **캘린더 설정**에서 해당 팀원을 배정 순서에서 뺄 수 있어요.
