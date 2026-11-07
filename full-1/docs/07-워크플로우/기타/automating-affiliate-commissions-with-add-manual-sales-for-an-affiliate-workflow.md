---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003666-automating-affiliate-commissions-with-add-manual-sales-for-an-affiliate-workflow-action
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Add Manual Sales For An Affiliate(제휴 파트너 수동 매출 추가)로 제휴 수수료 자동화하기

워크플로우의 **Add Manual Sales For An Affiliate**(제휴 파트너 수동 매출 추가) 액션을 쓰면 수동 매출을 원하는 제휴 파트너와 캠페인에 자동으로 배정하고, 수수료까지 계산할 수 있어요. 시스템 밖에서 발생한 매출도 수수료 내역에 빠짐없이 반영하고 싶을 때 사용하세요.

[동영상](https://www.youtube.com/embed/tw52b1TCGPE?&wmode=opaque)

이 액션은 수수료를 캠페인의 기본 설정에 맞춰 정확하게 계산해요. 제휴 파트너는 보상을 제때 받고, 수수료 추적도 더 쉬워져요.

---

## Add Manual Sales For An Affiliate 액션이란?

**Add Manual Sales For An Affiliate** 액션은 선택한 캠페인에서 특정 제휴 파트너에게 수동 매출을 배정해 줘요. 워크플로우가 실행되면 캠페인의 기본 수수료 설정에 따라 수수료가 자동으로 계산되고, 해당 제휴 파트너에게 배정돼요.

![Add Manual Sales For An Affiliate 액션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033862620/original/n6QQqV4yW4YHZY7wNk3xdnVHXQ6OOCgquw.png?1727776871)

---

## 이런 때 사용해요

### 1. 반복되는 수동 수수료 자동화

- 장점: 제휴 파트너에게 수동 매출과 수수료를 주기적으로 자동 배정해요. 시스템에서 추적되지 않는 반복 매출에 특히 유용하고, 제휴 파트너가 수수료를 꾸준히 받을 수 있어요.
- 예시: 시스템 밖에서 결제되는 오프라인 구독이나 서비스의 반복 매출과 수수료를 제휴 파트너에게 정기적으로 배정해요.

### 2. 오프라인 매출 추적

- 장점: 오프라인이나 하이퍼클래스가 추적하지 못하는 채널에서 발생한 매출도 수수료를 배정해요. 제휴 파트너가 만든 매출을 빠짐없이 반영할 수 있어요.
- 예시: 전화 주문이나 오프라인 매장에서 이루어진 거래를 수동 매출로 추가해서 제휴 파트너에게 정당한 수수료를 지급해요.

### 3. 제휴 파트너 참여 보상

- 장점: 교육 참여나 리드 품질처럼 금전과 직접 관련이 없는 기여도 수동 매출을 배정해서 보상할 수 있어요.
- 예시: 워크숍에 참석했거나 뛰어난 고객 응대를 한 제휴 파트너에게 수동으로 매출을 추가해서 보상해요.

---

## 어트리뷰션 추적과 함께 사용하기

1. 워크플로우에서 **Add Manual Sales For An Affiliate** 액션을 선택해요.
2. **AUTO-TRACK AFFILIATE VIA ATTRIBUTION**(어트리뷰션으로 제휴 파트너 자동 추적) 토글을 켜요. URL에 담겨 전달된 제휴 파트너 ID를 기준으로 올바른 제휴 파트너에게 매출이 자동으로 배정돼요.

   ![AUTO-TRACK AFFILIATE VIA ATTRIBUTION 토글 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033862650/original/RIJpX6gJA-iQIJS2-8Pe1tSDeQJanve-PQ.png?1727776885)

3. 드롭다운 목록에서 해당하는 제휴 캠페인을 선택해요.
4. 매출 금액과 거래 정보를 입력해요. 이벤트 날짜와 거래 ID는 선택 사항이에요.
5. **Save Action**(액션 저장)을 클릭해요.

{% hint style="info" %}
어트리뷰션 안내

- **첫 번째 어트리뷰션**은 연락처가 시스템과 처음 상호작용한 순간(예: 폼 작성)을 기록해요.
- **최근 어트리뷰션**은 가장 최근의 상호작용(예: 구매)을 기록해요.
- **최근 어트리뷰션**은 새 세션이 시작될 때마다 업데이트돼요. **첫 번째 어트리뷰션**은 그대로 유지돼요.
{% endhint %}

---

## 어트리뷰션 추적 없이 사용하기

1. 워크플로우에서 **Add Manual Sales For An Affiliate** 액션을 선택해요.
2. 제휴 캠페인을 선택하고, 이어서 제휴 파트너를 선택해요. 캠페인을 선택하면 드롭다운에 해당 캠페인에 연결된 제휴 파트너만 표시돼요.
3. 매출 금액을 입력해요. 이벤트 날짜와 거래 ID 같은 다른 정보는 선택 사항이에요.
4. **Save Action**(액션 저장)을 클릭해요.

   ![Save Action 클릭 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033862691/original/PzJWmarcoq5EcodO-EjZJd0ZkKqcZCCPMQ.png?1727776908)

워크플로우에서 **Add Manual Sales For An Affiliate** 액션을 쓰면 제휴 매출과 수수료 추적을 자동화할 수 있어요. 온라인 매출이든 오프라인 매출이든, 제휴 파트너의 기여를 정확하고 유연하게 보상할 수 있어요.
