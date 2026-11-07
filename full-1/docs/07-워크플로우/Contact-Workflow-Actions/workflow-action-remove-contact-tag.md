---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003266-workflow-action-remove-contact-tag
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Remove Contact Tag(연락처 태그 제거)

**Remove Contact Tag**(연락처 태그 제거) 액션은 연락처 프로필에서 특정 태그를 제거해요. 연락처 그룹을 정리하거나 연락처 상태를 바꾸고, 상호작용과 행동을 정확하게 추적하고 싶을 때 쓰세요.

## 개요

**Remove Contact Tag** 액션은 CRM 안에 있는 연락처 프로필에서 특정 태그를 제거해요. 이 액션으로 연락처 세그먼트를 관리하고, 연락처 상태를 업데이트하며, 상호작용과 행동을 정확하게 기록할 수 있어요.

## 액션 이름

**Remove Contact Tag**

## 액션 설명

이 액션은 연락처 기록에서 선택한 태그 또는 모든 태그를 제거해요. 태그는 보통 연락처의 상호작용, 관심사, 상태에 따라 연락처를 분류하는 데 써요. 태그를 제거하면 연락처의 세그먼트가 바뀌고, 그 연락처가 속하는 워크플로우도 달라질 수 있어요.

## 액션 상세 정보

![Remove Contact Tag 액션 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033057116/original/wQImrBPmuP4sN3SmiwE4HK1tW8oOoC6biw.png?1726642708)

![Remove Contact Tag 액션 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033057217/original/GPaLbK2PrsfWH0vtgOFzs6f1h_rpmZEkcQ.png?1726642832)

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Tags**(태그) | 연락처 프로필에서 제거할 태그를 선택해요. 여러 개를 선택할 수 있어요. | 예 |
| **Remove All Tags**(모든 태그 제거) | 모든 태그를 제거하려면 토글을 켜요. | 아니요 |

**Remove Contact Tag 액션 설정 방법**

1. **Action Name**(액션 이름): 액션의 이름을 알아보기 쉽게 입력하세요. 워크플로우에서 이 액션이 무엇을 하는지 구분하는 데 도움이 돼요.
2. **Tags**: **Select a tag**(태그 선택) 드롭다운을 클릭하고 연락처에서 제거할 태그를 선택하세요. 필요하면 여러 개를 선택할 수 있어요.
3. **Remove All Tags**: 모든 태그를 제거하려면 토글을 켜세요. 토글이 켜져 있으면 **Tags** 필드를 사용할 수 없어요.

**이 액션과 함께 쓰기 좋은 트리거 (이 밖의 트리거도 사용할 수 있어요)**

1. **Customer Replied**(고객 답장): 고객 답장에 들어 있는 특정 키워드나 문구를 기준으로 태그를 제거할 때 사용해요. 예를 들어 고객이 "구독 취소"나 "관심 없음"이라고 답하면 "관심 있음"이나 "리드 후보" 같은 태그를 제거할 수 있어요.
2. **Appointment Status Changed**(예약 상태 변경): 예약이 취소되거나 일정이 변경되었을 때 태그 제거 액션을 시작할 수 있어요. 예를 들어 "예약 완료" 같은 태그를 제거하면 연락처의 현재 상태를 정확하게 나타낼 수 있어요.
3. **Survey Submitted**(설문 제출): 설문 응답에서 연락처가 더 이상 서비스나 상품에 관심이 없다고 확인되면, 이 트리거로 해당 연락처를 잠재 고객으로 분류한 태그를 제거할 수 있어요.

## 예시

**설정 예시**

웨비나에 등록한 연락처에게 "관심 있음" 태그를 붙이는 캠페인을 운영하고 있다고 가정해 볼게요. 연락처가 웨비나에 참석하지 않으면 이 태그를 제거해서, 참석자용 후속 이메일이 가지 않도록 하려고 해요.

- **Action Name**: "웨비나 관심 태그 제거"
- **Tags**: "관심 있음"

**워크플로우 단계**

1. **Trigger**(트리거): **Webinar Not Attended**(웨비나 불참) - 연락처가 예정된 웨비나에 참석하지 않으면 실행돼요.
2. **Action**(액션): **Remove Contact Tag** - 해당 연락처에서 "관심 있음" 태그를 제거하도록 설정해요.
3. **Action**: **Update Contact Field**(연락처 필드 업데이트) - 선택 사항으로, "웨비나 불참" 같은 새 태그를 추가해서 이후 후속 연락이나 다른 워크플로우에 맞게 연락처를 정확히 분류할 수 있어요.
