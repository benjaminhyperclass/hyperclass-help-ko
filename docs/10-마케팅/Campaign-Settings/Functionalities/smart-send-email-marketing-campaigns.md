---
원문: /support/solutions/articles/155000006628-smart-send-email-marketing-campaigns
번역일: 2026-11-06
카테고리: 10-마케팅
---

# Smart Send로 이메일 캠페인 발송 시간 최적화하기

**Smart Send**(스마트 발송)는 일반 이메일 캠페인마다 가장 반응이 좋을 발송 시간을 자동으로 추천해 주는 기능이에요. 따로 설정하지 않아도 오픈율과 클릭률을 높일 수 있어요. 데이터를 근거로 발송 시간을 정하고 싶은 마케터에게 알맞아요.

---

## Smart Send란?

Smart Send는 하이퍼클래스의 **Send & Schedule**(보내기 및 예약) 화면에 추가된 발송 옵션이에요. 최근 60일 동안 수신자가 보인 반응(오픈, 클릭 등)을 분석해서 캠페인을 보내기에 가장 좋은 시간 한 곳을 찾아 줘요.

추천 결과가 통계적으로 믿을 만하려면 서브 계정에서 최근 60일 동안 이메일을 1,000통 이상 발송해야 해요. 추천을 요청하면 Smart Send가 바로 데이터를 계산해서, 예상 반응이 가장 높은 시간대로 이메일을 예약해 줘요.

---

## Smart Send의 장점

- 오픈율과 클릭률이 자동으로 올라가요. 직접 분석할 필요가 없어요.
- 기존 **Send & Schedule** 흐름 안에서 그대로 쓸 수 있어요. **Send Now**(즉시 발송), **Simple Schedule**(간단 예약), **Batch**(배치 발송), **RSS Schedule**(RSS 예약) 옵션과 나란히 표시돼요.
- 추천 시간을 그대로 쓰거나, 원하는 날짜와 시간으로 직접 바꿀 수 있어요.
- 발송 후 분석 화면에서 서브 계정의 과거 평균과 비교한 참여도 상승률(%)을 확인할 수 있어요.

---

## 사용 조건

하이퍼클래스에 최근 데이터가 충분해야 정확하게 예측할 수 있어요. 아래 조건을 모두 충족해야 해요.

- 같은 서브 계정에서 최근 60일 동안 이메일을 1,000통 이상 발송했어야 해요.
- **이메일 빌더 > 캠페인**에서 캠페인을 만들어야 해요.
- 지금은 일반 이메일 캠페인에서만 쓸 수 있어요. A/B 테스트와 배치 발송 지원은 곧 추가될 예정이에요.

---

## 추천 시간은 어떻게 정해지나요?

Smart Send는 최근 60일 동안의 반응 데이터로 모델을 만들고, 아래 항목을 함께 따져서 추천 시간을 정해요.

- 시간대별 오픈 이벤트 (서브 계정 기준 현지 시간)
- 클릭 이벤트와 그 밖의 상호작용: 매출로 이어지는 반응까지 반영해 예측을 다듬어요.
- 서브 계정 평균과 비교한 상대적인 성과: 과거에 성과가 낮았던 시간대는 추천하지 않도록 해요.

![Smart Send 추천 시간 예시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055728760/original/0lEyq3ktSKx2taYt-z0Qb6z4hX1_CT71nw.png?1760105895)

특정 시간대의 데이터가 부족하면 Smart Send가 모델의 신뢰 기준을 맞출 때까지 시간 범위를 자동으로 넓혀요.

---

## 분석 대시보드에서 확인할 수 있는 내용

Smart Send 캠페인을 발송하고 나면 **Email Statistics**(이메일 통계) 대시보드에 아래 내용이 표시돼요.

- **Engagement Lift (%)**(참여도 상승률): 서브 계정의 최근 60일 기준값과 비교한 수치예요.
- 추천 시간대의 오픈 수와 클릭 수 분석
- Smart Send와 직접 예약한 캠페인을 비교하는 차트: 기능의 효과를 수치로 확인할 수 있어요.

![이메일 통계 대시보드의 Smart Send 성과 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055728695/original/TtJ08zhPpQvow9YHa2Bne8pcILhUCODc4Q.png?1760105836)

---

## Smart Send 설정하기

Smart Send는 발송 옵션만 고르면 바로 쓸 수 있어요.

1. **마케팅 > 이메일**로 이동하세요.

   ![마케팅 메뉴에서 이메일로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055729100/original/NDepPiX80L8Yqfl6DnhhYMJNi7Q2ZGA59w.png?1760106038)

2. **캠페인**을 클릭한 다음 **새 캠페인 만들기**를 클릭하세요.

   ![캠페인에서 새 캠페인 만들기를 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055729212/original/qZh1TIvr0aynC6TjYxpxyOR70M1CIgWEcw.png?1760106080)

3. 이메일을 디자인한 다음 **캠페인 보내기**를 클릭하세요.

   ![이메일 디자인 후 캠페인 보내기를 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055729304/original/s5t7KdwxY_PmaHcNEyxQfrF81JlAWcC27w.png?1760106152)

4. 발송 옵션에서 **Smart Send**를 선택하세요. 다섯 번째 옵션이에요.

   ![발송 옵션에서 Smart Send를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055729345/original/KRdhrRarp_D3PYjbhjmWvZWEGFj1H0ao7w.png?1760106176)

5. 필수 항목을 입력하고 **Get Recommendation**(추천 받기)을 클릭하세요. 하이퍼클래스가 가장 좋은 발송 시간을 보여 줘요.

   ![추천 받기를 클릭해 최적 발송 시간을 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055730199/original/UttAfKi8QbBOrAQij5x5FcqPwL7hcIYvRw.png?1760106484)

{% hint style="info" %}
이제 캠페인을 예약할 수 있어요. 발송한 뒤에는 **마케팅 > 이메일 > Statistics**(통계)에서 성과를 확인하고 참여도 상승률을 볼 수 있어요.
{% endhint %}

---

## 자주 묻는 질문

### 서브 계정에서 최근 60일 동안 이메일을 1,000통 보내지 못했다면 어떻게 하나요?

**Smart Send** 옵션이 회색으로 표시돼요. 기준을 채울 때까지는 **Simple Schedule**을 사용하세요. 데이터가 충분해지면 하이퍼클래스가 Smart Send를 자동으로 켜 줘요.

### 어떤 연락처가 몇 시에 이메일을 받았는지 볼 수 있나요?

네, 볼 수 있어요. 캠페인의 **Recipient**(수신자) 탭에 발송별 예약 시각이 표시돼요. 발송 시간을 확인하거나, 데이터를 내보내서 더 자세히 분석할 수 있어요.

### Smart Send는 연락처마다 다른 시간대를 반영하나요?

아니요. 현재 Smart Send는 서브 계정 단위로 최적화해요. 연락처별 시간대에 맞춰 보내려면 워크플로우에서 **Wait**(대기) > **Date/Time**(날짜/시간) 액션을 사용하세요.

### 예약을 누른 뒤에도 추천 시간을 바꿀 수 있나요?

네, 바꿀 수 있어요. 예약된 시간이 되기 전에 캠페인에서 **Reschedule**(다시 예약)을 클릭하고 새 시간을 고른 다음 저장하세요.

### Smart Send를 A/B 테스트에서도 쓸 수 있나요?

A/B 캠페인 지원은 개발 계획에 들어 있어요. 지금은 A/B 테스트에 **Simple Schedule**을 사용하세요.

### API로도 Smart Send를 쓸 수 있나요?

아직은 쓸 수 없어요. API 지원은 이후 업데이트에서 안내할 예정이에요.
