---
원문: /support/solutions/articles/155000002478-how-to-send-meta-conversion-data-from-highlevel-ad-manager
번역일: 2026-11-06
카테고리: 10-마케팅
---

# 광고 관리자에서 Meta로 전환 데이터 보내기

하이퍼클래스에서 일어난 고객 행동을 Meta로 보내면 광고 성과 측정, 어트리뷰션, 캠페인 최적화에 도움이 돼요. 이 문서에서는 광고 관리자에서 전환 픽셀을 만드는 방법과 이벤트 유형을 설명하고, Meta 광고 워크플로우에 쓸 수 있도록 준비하는 과정을 안내해요.

## 광고 관리자 전환 픽셀이란?

광고 관리자 전환 픽셀은 하이퍼클래스에서 일어나는 고객 행동을 Meta 광고 활동과 연결해 줘요. 전환 픽셀을 만들어 두면, 워크플로우에서 지원되는 Meta Conversion API 이벤트를 보낼 때 하이퍼클래스가 전환 출처를 확인할 수 있어요.

광고 관리자에서 만든 전환 픽셀에는 자동으로 생성된 **픽셀 ID**와 구성 정보가 들어 있어요. 이 픽셀은 Meta로 퍼널 이벤트나 리드 이벤트를 보낼 때 쓸 수 있어요.

픽셀을 만드는 것은 전환 추적 과정의 한 단계일 뿐이에요. 전환 이벤트를 Meta로 보내려면 하이퍼클래스 워크플로우에서 **Meta Conversion API**(Meta 전환 API) 액션도 설정해야 해요.

[광고 관리자용 Meta Conversion API 액션 보내는 방법 알아보기](how-to-send-a-meta-conversion-api-action-for-ad-manager.md)

---

## 광고 관리자 전환 픽셀의 장점

- 전환 추적 개선: 하이퍼클래스에서 지원되는 고객 행동을 Meta 광고 활동과 연결해요.
- 어트리뷰션 개선: 고객 행동을 광고 상호작용과 연결하는 데 도움이 되는 전환 신호를 Meta에 더 많이 전달해요.
- 캠페인 최적화: Meta가 의미 있는 고객 행동을 목표로 캠페인을 최적화할 때 쓸 전환 데이터를 더 많이 제공해요.
- 리드 여정 확인: 리드가 폼을 제출하거나, 예약하거나, 파이프라인 단계를 옮겨 가는 과정에서 생기는 이벤트를 추적해요.
- 유연한 이벤트 추적: 같은 전환 픽셀을 지원되는 퍼널 이벤트와 리드 이벤트에 모두 쓸 수 있어요.
- 간편한 워크플로우 설정: Meta Conversion API 워크플로우 액션에서 **Ad Manager**(광고 관리자) 연결 유형을 쓰면 선택 가능한 광고 관리자 픽셀이 목록에 나타나고, 하이퍼클래스가 액세스 토큰을 관리해요.
- 오디언스와 리타기팅 지원: 알맞게 설정하면 전환 데이터와 오디언스 데이터를 더 폭넓은 Meta 광고 전략에 활용할 수 있어요.

---

## 퍼널 이벤트와 리드 이벤트(Funnel Events and Lead Events)

**Funnel Event**(퍼널 이벤트)는 보통 하이퍼클래스의 퍼널, 웹사이트, 폼, 설문, 예약, 주문 폼에서 시작된 고객 행동에 써요.

지원되는 워크플로우 트리거에는 다음이 포함될 수 있어요.

- **Form Submitted**(폼 제출)
- **Survey Submitted**(설문 제출)
- **Customer Booked Appointment**(고객 예약 완료)
- **Order Form Submission**(주문 폼 제출)

퍼널 이벤트 설정을 더 자세히 알아보려면 [Facebook Conversion API용 퍼널 이벤트 픽셀 설정하기](../../42-통합/Facebook-Integration/how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api.md)를 참고하세요.

### 리드 이벤트(Lead Events)

**Lead Event**(리드 이벤트)에 자주 쓰는 트리거는 다음과 같아요.

- **Facebook Lead Form Submission**(Facebook 리드 폼 제출)
- **Pipeline Stage Change**(파이프라인 단계 변경)

리드 이벤트는 리드 적격 판정이나 파이프라인 진행처럼 후반 단계의 결과를 Meta로 다시 보낼 때 유용해요.

연락처에 이벤트를 매칭하는 데 필요한 Meta 어트리뷰션 데이터가 있다면, 연락처 기반의 다른 워크플로우 트리거도 쓸 수 있어요.

리드 이벤트 요구 사항과 어트리뷰션 설정을 자세히 알아보려면 [Facebook 전환 리드 안내](../../42-통합/Facebook-Integration/facebook-conversion-leads-walkthrough.md)를 참고하세요.

{% hint style="warning" %}
중요: 어트리뷰션이 제대로 되려면 연락처에 필요한 Meta 어트리뷰션 정보가 있어야 해요. 이벤트와 설정에 따라 FBCLID/FBC, Paid Social(Facebook) 어트리뷰션, Facebook Lead ID가 포함될 수 있어요.
{% endhint %}

---

## 전환 픽셀과 Meta CAPI 워크플로우의 관계

광고 관리자에서 전환 픽셀을 만들면 전환 자산이 준비돼요. 전환 데이터를 Meta로 실제로 보내는 시점은 Meta Conversion API 워크플로우 액션이 정해요.

워크플로우에서 **Meta Conversion API** 액션을 설정할 때는 두 가지 연결 유형 중에서 고를 수 있어요.

- **Integrations**(연동)
- **Ad Manager**

**Ad Manager** 연결 유형을 쓰면 광고 관리자에 있는 전환 픽셀이 미리 채워져 선택만 하면 돼요. 하이퍼클래스가 액세스 토큰도 관리하기 때문에, 토큰을 직접 만들어 워크플로우 액션에 붙여 넣을 필요가 없어요.

워크플로우 트리거와 **Event Type**(이벤트 유형)은 보고하려는 고객 활동과 맞아야 해요. 예를 들어 폼 제출은 퍼널 이벤트로 설정하고, Meta 리드가 파이프라인 단계를 옮겨 가는 활동은 리드 이벤트로 설정할 수 있어요.

[광고 관리자용 Meta Conversion API 액션 설정 더 알아보기](how-to-send-a-meta-conversion-api-action-for-ad-manager.md)

---

## 광고 관리자 전환 픽셀 설정하기

1. 하이퍼클래스 서브 계정에서 **마케팅 > 광고 관리자**로 이동한 다음 **설정** 버튼을 클릭해 광고 관리자 설정 화면을 여세요.

   ![광고 관리자 설정 화면 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078360502/original/pweu3LarV3Ub8U3lIFfYdB9iBBITvh8cmw.png?1786632122)

2. **전환** 탭을 선택해 사용 가능한 전환 픽셀을 확인한 다음 **새 전환 만들기**를 클릭하세요.

   ![전환 탭에서 새 전환 만들기 클릭](https://jumpshare.com/share/C5X11PXlQKABtbO62taf+/Screen+Shot+2026-08-13+at+10.32.02+AM.png)

3. 전환 픽셀 이름을 입력하고 **완료**를 클릭해 만들기를 마치세요.

   ![전환 픽셀 이름 입력 후 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078368890/original/vRn1uFv6VQQwiM17cR7YZN0eZ6AxXbHejw.png?1786635510)

{% hint style="info" %}
새 픽셀이 **전환** 탭에 보이는지 확인하세요.
새로 만든 전환 픽셀은 처음에는 광고 관리자에 사용 가능한 전환 정보가 표시되고, 이후 지원되는 Meta Conversion API 워크플로우를 설정할 때 선택할 수 있어요.
{% endhint %}

**Ad Manager** 연결 유형을 선택하면 하이퍼클래스가 액세스 토큰을 관리해요.

전체 워크플로우 설정 방법은 [광고 관리자용 Meta Conversion API 액션 설정하기](how-to-send-a-meta-conversion-api-action-for-ad-manager.md)를 참고하세요.

{% hint style="info" %}
참고: Meta Conversion API 워크플로우 액션을 설정할 때 **Custom Mapping**(사용자 지정 매핑)을 쓸 수 있어요. 지원되는 매핑과 설정 방법은 [광고 관리자용 Meta Conversion API 액션 설정하기](how-to-send-a-meta-conversion-api-action-for-ad-manager.md)를 참고하세요.
{% endhint %}

{% hint style="info" %}
컴플라이언스 참고: Meta는 금지되었거나 민감한 정보를 담고 있거나 암시하는 맞춤 오디언스와 맞춤 전환에 제한을 적용해요. 전환 이름과 설정이 Meta 요건에 맞는지 확인하세요. 자세한 내용은 [Meta: 맞춤 오디언스 및 전환 제한 사항](../Troubleshooting-Ad-Manager/meta-custom-audiences-and-conversions-restrictions.md)을 참고하세요.
{% endhint %}

---

## 자주 묻는 질문

### 전환 픽셀을 만들면 Meta로 데이터가 자동으로 전송되나요?
아니요. 하이퍼클래스가 전환 이벤트를 Meta로 보내려면 워크플로우에 **Meta Conversion API** 액션도 추가해야 해요.

### Meta 액세스 토큰을 직접 만들어야 하나요?
아니요. 연결 유형으로 **Ad Manager**를 선택하면 하이퍼클래스가 액세스 토큰을 관리해 줘요.

### 같은 픽셀을 여러 이벤트 유형에 쓸 수 있나요?
네. 같은 전환 픽셀을 지원되는 퍼널 이벤트와 리드 이벤트에 모두 쓸 수 있어요.

### 전환이 Meta에 표시되지 않아요. 왜 그런가요?
연락처에 전환을 원래 광고 상호작용과 매칭하는 데 필요한 Meta 추적 정보가 없을 수 있어요.

### 퍼널 이벤트와 리드 이벤트 중 무엇을 골라야 하나요?
폼 제출, 설문, 예약, 주문 폼 같은 행동에는 **Funnel Event**를 고르세요. Meta 리드 폼 제출이나 CRM에서의 리드 진행 상황에는 **Lead Event**를 고르세요.
