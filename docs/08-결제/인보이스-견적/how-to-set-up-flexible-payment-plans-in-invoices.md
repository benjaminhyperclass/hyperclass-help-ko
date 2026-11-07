---
원문: /support/solutions/articles/155000002911-how-to-set-up-flexible-payment-plans-in-invoices
번역일: 2026-11-07
카테고리: 08-결제
---

# 인보이스에 유연한 결제 일정 설정하기

인보이스를 여러 번에 나눠 낼 수 있도록 결제 일정을 추가하는 방법을 안내해요. 금액이 큰 인보이스를 분할 결제로 받고 싶을 때 쓰세요.

이제 인보이스에 결제 일정을 추가할 수 있어요.

- 인보이스를 여러 회차로 나눠 분할 결제로 만들 수 있어요.
- 분할은 비율 기준으로도, 금액 기준으로도 할 수 있어요.
- 각 분할에는 납부 기한과 **결제 상태**가 있어요. 납부 기한이 되면 아직 내지 않은 회차에 대해 결제를 알리는 알림이 나가요.
- 결제는 미리 정해 둔 분할 단위로만 할 수 있어요. 결제하는 사람은 한 번에 한 회차 이상을 선택해서 낼 수 있어요. 모든 회차가 결제되면 인보이스가 결제 완료 상태가 돼요.

---

## 사용 방법

1. 인보이스에서 **결제 일정**을 추가하는 버튼을 클릭하세요.

   ![인보이스에서 결제 일정 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029967055/original/aoxP_KwTddL0mCqUhjG7fNc_nvZWZ05uYQ.jpeg?1722009098)

2. 비율이나 고정 금액으로 결제 조건을 설정한 다음 인보이스를 보내세요.

   ![비율 또는 고정 금액으로 결제 조건 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029967054/original/4yeIaZwUlcs2xDcz0ap3N_zdrFvVSF03mQ.jpeg?1722009098)

3. 받는 사람은 인보이스에서 결제 일정을 확인할 수 있어요.

   ![인보이스에 표시된 결제 일정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029967053/original/0N7aokfiRpG9CKnNgEbLoZCAybTwTvkKXA.jpeg?1722009098)

4. 받는 사람이 결제할 때는 해당 결제 일정 금액을 선택할 수 있어요. 체크박스를 클릭해서 다른 회차를 함께 선택해 낼 수도 있어요.

   ![결제 일정 선택 후 결제하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029967056/original/2B7ecTZj66uH1euzsP8uK5FsGCJRtCP0Fw.jpeg?1722009098)

### 이 기능이 필요한 이유

중간 규모 이상의 금액이 큰 인보이스는 나눠서 내고 싶다는 요청이 자주 있었어요. 기존의 **부분 결제**는 결제하는 사람이 언제 얼마를 낼지 정해요. 결제 일정은 반대로, 인보이스를 발행하는 쪽이 한 회차의 금액을 정해요.

---

## 자주 묻는 질문

### 분할 결제 인보이스에 나가는 알림 이메일을 수정할 수 있나요?

네. 결제 일정이 포함된 인보이스에 나가는 **Payment Schedule Received**(결제 일정 수신) 알림을 수정하거나 켜고 끌 수 있어요.

1. **결제 > 인보이스 & 견적서 > 설정 > 알림 > 고객 알림**으로 이동하세요.
2. **Payment Schedule Received**를 찾으세요.
3. 이메일 템플릿과 **SMS 템플릿**을 편집하세요. 알림이 필요 없으면 토글을 끄세요.

![고객 알림에서 Payment Schedule Received 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064205108/original/t_RrzNWXuW9vmTwZKldqEeG3xjdI_9cUsw.png?1770223354)

{% hint style="info" %}
인보이스에 결제 일정이 없으면 결제 일정 관련 병합 필드(merge field)는 빈 값으로 표시돼요.
{% endhint %}
