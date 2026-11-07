---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007813-ai-usage-limits
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# AI 사용 제한

AI 사용 제한을 쓰면 하이퍼클래스 계정에서 과금되는 AI 사용량을 확인하고 관리할 수 있어요. 에이전시, 서브 계정, 사용자 단위로 월별 지출 한도를 정하고, 한도에 도달했을 때 AI를 계속 실행할지 멈출지 선택할 수 있어요.

## AI 사용 제한이란?

AI 사용 제한으로 에이전시, 서브 계정, 사용자 단위의 월별 지출 한도를 설정할 수 있어요. 한도에 도달했을 때 AI를 계속 실행할지 일시 중지할지 정하고, 늘어나는 사용량도 확인할 수 있어요.

한도는 과금되는 AI 사용량에만 적용돼요. 서브 계정의 플랜에 이미 포함된 사용량은 무료이고 한도에 포함되지 않아요. 종량제 요금과 구독 초과 요금만 한도에 포함돼요.

{% hint style="info" %}
기본적으로 **Spending Limit**(지출 한도)은 설정되어 있지 않아요. Spending Limit이 꺼져 있으면 플랜에 포함된 허용량을 넘어도 AI 사용이 계속되고, 해당하는 초과분은 종량제 요금으로 청구돼요. Spending Limit을 켜면 **When the limit is reached**(한도에 도달했을 때) 설정에 따라 AI를 계속 실행할지 멈출지가 정해져요.
{% endhint %}

---

## 적용 상품

![AI 사용 제한이 적용되는 상품 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078983290/original/KmcZN3yDQX3Js9H060nDIwwIhAYvkrZ_LQ.png?1787305163)

---

## 한도에 도달했을 때의 동작 선택

한도는 월 사용량을 기준으로 적용돼요. 한도에 도달한 뒤에 어떻게 될지는 선택한 설정에 따라 달라요.

에이전시 기본값이든 개별 서브 계정이든 AI 사용 제한을 설정하는 곳에서는 **When the limit is reached**를 설정할 수 있어요.

{% hint style="warning" %}
설정을 바꾸지 않으면 모든 서브 계정은 기본적으로 **Keep AI running, just notify**(AI는 계속 실행하고 알림만 보내기)로 동작해요. 한도를 설정했는데 한도를 넘어서도 사용이 이어진다면 정상 동작이에요. 한도를 강제해야 할 때는 **Block AI at the limit**(한도에서 AI 차단)을 선택하세요.

서브 계정에 직접 설정한 값은 한도 도달 시 동작을 포함해 에이전시 기본값보다 우선해요.
{% endhint %}

### **Keep AI running, just notify**

기본 옵션이에요.

설정한 한도에 도달해도 AI 사용은 계속되고 알림이 전송돼요. 이때 한도는 고객의 활동을 멈추지 않으면서 사용량을 살펴봐야 할 시점을 알려 주는 기준선 역할을 해요.

### **Block AI at the limit**

설정한 한도에 도달하면 AI가 멈춰요. 한도를 늘리거나 다음 달이 시작되어 사용량이 초기화되면 다시 사용할 수 있어요.

모든 고객에게 같은 설정을 적용할 필요는 없어요. 대부분의 서브 계정에는 에이전시 기본값을 적용하고, 필요한 서브 계정만 따로 설정할 수 있어요.

{% hint style="info" %}
한도를 켜기 전에는 두 옵션을 선택할 수 없어요. 활성화된 한도가 없으면 옵션이 제어할 기준이 없기 때문이에요.
{% endhint %}

![한도 도달 시 동작을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078984893/original/DdRZzoVeUEHbJJZfNrQXVgoXV8dy2jxgNw.png?1787305969)

---

## 계정 전체에서 AI 사용 제한이 적용되는 방식

AI 사용 제한은 계층 구조로 적용돼요. 에이전시가 기본값을 정하고, 개별 서브 계정과 사용자에게는 더 세부적인 설정을 줄 수 있어요. 여러 한도가 동시에 적용될 때 예상과 다르게 동작하지 않도록 이 구조를 알아 두면 좋아요.

### 1. 에이전시 수준 기본값 (최상위)

에이전시 수준 설정은 서브 계정별, 사용자별 월 한도의 기본값을 정해요.

한도에 도달했을 때의 기본 동작도 함께 정해요.

- Keep AI running, just notify
- Block AI at the limit
- 이 기본값은 별도 설정이 없는 서브 계정에 자동으로 적용돼요.

![에이전시 수준 기본값 설정 화면](https://jumpshare.com/share/8zQ0tjPUuQUQsgvhs24w+/Screen+Shot+2026-08-21+at+16.09.42.png)

나중에 에이전시 기본값을 바꾸면, 회사 기본값을 쓰는 서브 계정에도 바뀐 설정이 적용돼요.

종량제와 개별 AI 직원 플랜은 과금 방식에 따라 한도 동작이 달라서 따로 설정해요.

{% hint style="info" %}
기본적으로 지출 한도는 설정되어 있지 않아요. 한도를 켜고 금액을 입력하기 전까지 서브 계정과 사용자는 무제한이에요.

AI 직원 플랜에서 Spending Limit은 플랜에 포함된 사용량을 다 쓴 뒤 허용할 과금 사용량을 조절해요. Spending Limit이 꺼져 있으면 해당하는 종량제 요금으로 사용이 계속될 수 있어요.
{% endhint %}

![종량제와 AI 직원 플랜 한도 설정 화면](https://jumpshare.com/share/Ac6uyx8OPwJ1M4E1kThg+/Screen+Shot+2026-08-21+at+16.11.40.png)

### 2. 서브 계정 수준 한도

서브 계정마다 월 AI 지출 한도를 따로 정할 수 있어요.

다음 작업을 할 수 있어요.

- 에이전시 기본값 덮어쓰기
- 서브 계정의 월 한도를 사용자 지정 값으로 설정
- 해당 서브 계정에만 알림만 보내기 또는 차단 동작 선택
- 설정한 한도 대비 현재 사용량 보기

알아 둘 내용이에요.

- 한도는 매달 달력 기준 월이 시작될 때 초기화돼요.
- 진행률 표시줄에 한도 대비 사용한 비율이 표시돼요.
- 값을 하나라도 바꾸면 서브 계정은 사용자 지정 설정으로 전환돼요.
- **Reset to company defaults**(회사 기본값으로 초기화)를 선택하면 서브 계정이 에이전시 기본값으로 돌아가요.
- 서브 계정에 설정할 수 있는 최대 한도는 월 $1,000이에요.

![서브 계정 한도 설정 동작 화면](https://jumpshare.com/share/ijeMw9ZG0HkDK8sBRT6g+/GIF+Recording+2026-08-21+at+17.21.00.gif)

### 3. 사용자 수준 한도

사용자 수준 한도로 서브 계정 안의 개별 사용자가 쓰는 과금 AI 사용량을 관리할 수 있어요. 팀원마다 AI 예산을 다르게 주고 싶을 때 한도를 한 단계 더 세밀하게 조절할 수 있어요.

{% hint style="info" %}
서브 계정 한도와 사용자 한도가 함께 적용되면, 남은 허용량이 더 적은 한도가 먼저 적용돼요.

예를 들어 사용자 한도 $20 중 $2가 남았고, 서브 계정 한도 $100 중 $50이 남았다면 사용자 한도에 먼저 도달해요.
{% endhint %}

다음 작업을 할 수 있어요.

- 서브 계정의 기본 사용자 예산 설정
- 사용자 한도를 월 최대 $500까지 설정

  ![사용자 한도 설정 화면](https://jumpshare.com/share/Bgn86r8ZuiYB28CrUJG3+/Screen+Shot+2026-08-21+at+17.39.38.png)
- 특정 사용자에게는 기본값을 덮어쓰고, 사용자 예산을 **무제한**으로 설정할 수도 있어요.

  ![특정 사용자 한도 덮어쓰기 화면](https://jumpshare.com/share/snyzu5sgogVqYwrd1KiT+/Screen+Shot+2026-08-21+at+17.40.57.png)

---

## 종량제와 AI 직원 플랜에서의 동작

{% hint style="info" %}
현재 플랜 적용 범위와 AI 요금 자세한 내용은 [AI 상품 요금](../ai-product-pricing-update.md)을 참고하세요.
{% endhint %}

포함된 사용량을 다 쓴 뒤 AI가 멈췄다면 서브 계정의 **Spending Limit**과 **When the limit is reached** 설정을 확인하세요. **Block AI at the limit**으로 설정된 서브 계정은 한도에 도달하면 AI가 멈추고, **Keep AI running, just notify**로 설정된 서브 계정은 사용이 계속돼요.

Spending Limit이 꺼져 있으면 AI가 계속 실행되고, 해당하는 초과 사용량은 종량제 요금으로 청구돼요.

![종량제와 AI 직원 플랜 동작 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079012271/original/59aUPkcqVdKjy6NIu0QTq7POLdI4sfp_LA.png?1787318750)

---

## AI 사용 한도에 도달하면 어떻게 되나요?

한도에 도달한 뒤의 경험은 서브 계정이 AI 사용을 계속하도록 설정됐는지, 추가 AI 활동을 차단하도록 설정됐는지에 따라 달라요. 고객이 직접 쓰는 워크플로우에 한도를 적용하기 전에 이 차이를 꼭 알아 두세요.

### Keep AI running, just notify인 경우

한도에 도달하면 다음과 같이 동작해요.

- AI 동작이 평소처럼 계속돼요.
- 한도에 가까워질 때와 한도를 넘은 뒤에 사용량 경고가 표시돼요.
- 임계값 알림이 전송되므로, 한도를 늘릴지 판단할 수 있어요.

### Block AI at the limit인 경우

설정한 한도에 도달하면 다음과 같이 동작해요.

- AI 동작이 일시 중지돼요.
- 사용자가 새 AI 결과물을 생성할 수 없어요.
- 서브 계정에 **[Product] is paused — limit reached**([Product]이 한도에 도달해 일시 중지됨)라는 제목의 메시지가 표시돼요.

이 메시지에서 어떤 선택지가 보이는지는 서브 계정의 결제 관리 권한 설정에 따라 달라요.

서브 계정에 보이는 내용은 에이전시가 설정한 방식에 따라 달라요.

| 서브 계정이 | 보이는 내용 |
| --- | --- |
| 자체적으로 결제를 관리할 수 있는 경우 | 한도를 직접 늘리거나 추가 사용을 켤 수 있는 버튼이 보여요. 업그레이드할 수 있으면 **플랜 업그레이드**도 함께 보여요. |
| 자체적으로 결제를 관리할 수 없는 경우 | **Request more usage**(사용량 추가 요청)가 보이고, 요청은 에이전시로 전달돼요. |

한도를 올리면 AI가 바로 다시 실행되고, 그렇지 않으면 다음 달이 시작되어 사용량이 초기화될 때 자동으로 다시 실행돼요.

{% hint style="warning" %}
고객의 설정을 **Block AI at the limit**으로 바꿀 계획이라면, 이 설정이 고객의 AI 사용을 바로 중단시킬 수 있으니 변경 전에 미리 알려 주세요.
{% endhint %}

---

## 한도에 도달했을 때의 과금 방식

![한도 도달 시 과금 방식 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079016292/original/X6T-l8OPw_hjiyNnvAtVbOVNRG51-1YuaQ.png?1787320272)

---

## AI 사용량 추가 요청

### 자체적으로 결제를 관리할 수 없는 서브 계정

서브 계정이 한도에 도달했는데 직접 해결할 수 없으면 에이전시에 사용량을 더 요청할 수 있어요.

작동 방식은 다음과 같아요.

1. 사용자가 **Request more usage**를 클릭해요.
2. 요청이 에이전시 관리자에게 전달돼요.
3. 관리자는 이메일과 사용 제한의 **요청** 탭에서 알림을 받아요.

요청을 기다리는 동안 서브 계정에는 요청 상태가 표시돼요.

| 상태 | 서브 계정에 보이는 내용 |
| --- | --- |
| **Request sent**(요청 전송됨) | **Request sent** — "Your agency will review and update your limit."(에이전시가 검토한 뒤 한도를 업데이트해요.) |
| 응답하기 전에 다시 요청한 경우 | **Request already sent**(이미 요청함) — 같은 메시지가 표시되고, 중복 요청은 쌓이지 않아요. |
| 승인한 경우 | 새 한도가 적용되고 AI가 다시 실행돼요. |
| 거절한 경우 | **Request declined**(요청 거절됨) — "Your agency declined your recent limit request. You can request again later."(에이전시가 최근 한도 요청을 거절했어요. 나중에 다시 요청할 수 있어요.) |

{% hint style="info" %}
요청이 거절되면 짧은 대기 시간이 시작되고, 그동안 요청 버튼이 숨겨져서 서브 계정이 바로 다시 요청할 수 없어요. 영구 차단이 아니라 잠시 멈추는 것이고, 나중에 다시 요청할 수 있어요.
{% endhint %}

### 자체적으로 결제를 관리할 수 있는 서브 계정

서브 계정이 자체적으로 결제를 관리할 수 있다면 요청이 에이전시로 가지 않아요.

대신 서브 계정은 일시 중지 메시지에서 다음 작업을 할 수 있어요.

- 자체 한도 늘리기
- 추가 사용 켜기
- 업그레이드할 수 있는 경우 플랜 업그레이드

---

## AI 사용량 증가 요청 관리

1. **AI Suite**(AI 스위트) > **Plans and Limits**(플랜 및 한도)로 이동하세요.
2. **알림** 아이콘을 클릭하세요.

   ![알림 아이콘 위치](https://jumpshare.com/share/VtDB6m1FHZ3NiOdiis88+/Screen+Shot+2026-08-21+at+20.00.36.png)
3. **Limit Requests**(한도 요청) 탭에서 대기 중인 요청을 검토하세요.
4. 액션을 선택하세요. **Adjust Limit**(한도 조정, 승인), **플랜 업그레이드**, **거부** 중에서 고를 수 있어요.

   ![요청 처리 액션 선택 화면](https://jumpshare.com/share/cfIgcRuhES0fFVGRStev+/Screen+Shot+2026-08-21+at+20.02.47.png)

**Adjust Limit**을 선택했다면 다음 순서로 진행하세요.

1. 요청된 한도 증가량을 확인하세요. 필요하면 금액을 수정할 수 있어요.
2. 새로 계산된 총 한도를 확인하세요.
3. **확인**을 클릭해 승인하세요.

   ![한도 조정 승인 화면](https://jumpshare.com/share/T5JJ6L2Oz6IVMIy2uPUZ+/Screen+Shot+2026-08-21+at+20.12.51.png)

---

## 임계값 알림

임계값 알림을 쓰면 설정한 한도에 도달하기 전에 AI 사용량을 미리 확인할 수 있어요. AI 스튜디오에도 사용량 알림 배너가 표시돼서, 구독 사용자와 종량제 사용자가 사용량이나 지출을 확인하고 필요할 때 조치할 수 있어요.

{% hint style="warning" %}
비율 기준 임계값 알림은 활성화된 한도가 있어야 해요. 한도가 설정되어 있지 않거나 한도가 $0이면 계산할 비율이 없어요. AI 스튜디오의 종량제 지출 알림은 비율 기준 한도 알림과 별개예요.
{% endhint %}

알림은 다음 시점에 발송돼요.

- 70%
- 80%
- 90%
- 100%

임계값 알림으로 설정한 한도에 가까워진 사용자와 서브 계정을 확인할 수 있어요.

다음 어느 설정을 쓰더라도 알림이 발송돼요.

- Keep AI running, just notify
- Block AI at the limit

**Keep AI running, just notify**를 쓰면, 사용량이 설정한 한도에 가까워졌거나 넘었다는 것을 알려 주는 주된 신호가 임계값 알림이에요.

![임계값 알림 예시 화면](https://jumpshare.com/share/QNT0IpS4dQtlS9IQ9VPr+/Screen+Shot+2026-08-21+at+20.48.10.png)

---

## AI 스튜디오 사용량 알림 배너

AI 스튜디오는 제품 화면 안에 사용량 알림 배너를 직접 표시해요. 그래서 사용자가 사용 한도에 도달하기 전에 사용량을 확인하고 조치할 수 있어요. 이 배너는 AI 스튜디오를 쓸 수 있는 사용자에게 자동으로 켜져요.

구독 사용자에게는 사용량이 늘어날 때 다음과 같은 AI 스튜디오 사용량 배너가 표시돼요.

- 사용량 70%: 사용량 알림
- 사용량 85%: 경고
- 100%에 가까워지거나 도달할 때: 위험 알림과 사용량 소진 알림

- 리빌링이 켜진 서브 계정 사용자: 배너에서 사용 한도를 직접 조정하는 옵션을 볼 수 있어요.
- 리빌링이 꺼진 서브 계정 사용자: 배너에서 에이전시 관리자에게 한도 증가를 요청하는 옵션을 볼 수 있어요.
- 에이전시 사용자: 사용 한도를 검토하고 직접 조정하는 관련 작업을 할 수 있어요.

{% hint style="info" %}
AI 스튜디오 사용량 알림 배너는 따로 설정할 필요가 없어요. AI 스튜디오를 쓸 수 있는 사용자에게 기본으로 켜져 있어요.
{% endhint %}

---

## 사용량 모니터링

**사용 제한** 페이지에서 사용량을 바로 확인할 수 있어요.

다음 내용이 포함돼요.

- 서브 계정별 월 사용량
- 한도 대비 사용량 시각화
- 사용자별 사용량

![사용 제한 페이지의 사용량 막대 화면](https://jumpshare.com/share/Tapt5BFEff9KKEnaqPgl+/AgencyView_UsageBar_View1.png)

---

## AI에게 문의와 AI 스튜디오의 속도 제한 구간(Rate Limit Window)

{% hint style="info" %}
자세한 내용은 AI 스튜디오 – 요금, AI에게 문의 세션 예시 및 사용 비용 가이드를 참고하세요.
{% endhint %}

![AI에게 문의와 AI 스튜디오의 속도 제한 구간 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079163956/original/ghLtE1GFnLFzjdlYQkM8qiqXG8BDwNY1Qg.png?1787575904)

---

## 5시간 구간은 어떻게 작동하나요?

![5시간 구간 작동 방식 도식](https://jumpshare.com/share/J2nO0WaTWeJMLDTFqZx6+/ChatGPT+Image+Sep+22%2C+2026%2C+03_33_53+PM.png)

---

## 사용한 허용량은 어디서 볼 수 있나요?

에이전시 화면에서 **AI Suite**(AI 스위트) > **Plans & Limits**(플랜 및 한도)로 이동하세요. 아무 서브 계정이나 클릭하거나 점 세 개 아이콘을 누른 뒤 **Configure Limits**(한도 설정) > **Increase**(늘리기)를 차례로 선택하고, **Included allowances**(포함된 허용량)와 **Rate Limit Windows**(속도 제한 구간)를 확인하세요.

---

## 참고 사항

- 한도는 월 단위로 적용되고, 매달 달력 기준 월이 시작될 때 초기화돼요.
- 한도에 도달했을 때의 동작은 **When the limit is reached** 설정에 따라 달라요. 기본값은 AI를 계속 실행하고 알림을 보내는 것이에요.
- 서브 계정에는 한도를 넘는 금액이 청구되지 않아요. <!-- 검토 필요: 원문 내용이 서로 다름 -->
- 구독 플랜에서는 **Extra usage**(추가 사용) 토글이 지출 한도와 별개로 AI를 멈출 수 있어요.
- 한도 변경은 바로 적용되지만, 화면에 표시되는 사용량 수치는 최대 5분까지 늦게 반영될 수 있어요.
- 설정할 수 있는 최대 한도는 서브 계정당 월 $1,000, 사용자당 월 $500이에요.
