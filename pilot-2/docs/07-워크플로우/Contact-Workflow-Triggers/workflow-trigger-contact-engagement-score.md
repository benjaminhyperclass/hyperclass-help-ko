---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003496-workflow-trigger-contact-engagement-score
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Contact Engagement Score(연락처 참여 점수)

**Contact Engagement Score**(연락처 참여 점수) 트리거는 연락처의 참여 점수와 다른 조건을 기준으로 연락처를 워크플로우에 넣어 줘요. 연락처의 반응과 참여 수준에 따라 후속 작업을 자동으로 실행하고 싶을 때 쓰세요.

## 개요

**Contact Engagement Score** 트리거는 참여 점수와 그 밖의 조건에 맞는 연락처를 워크플로우에 추가해요. 이 트리거를 쓰면 연락처의 반응과 전체 참여 수준에 맞춰 작업을 자동화할 수 있어요.

## 트리거 이름

**Contact Engagement Score**(연락처 참여 점수)

## 트리거 설명

이 트리거는 연락처의 **Engagement Score**(참여 점수)와 다른 연락처 속성을 기준으로 연락처를 걸러서 워크플로우에 넣어요. 다음과 같은 작업을 자동화할 때 유용해요.

- 후속 연락
- 참여도가 높은 연락처 분류
- 조건에 따른 마케팅 방식 조정

## 트리거 상세 정보

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Score**(점수) | 연락처의 참여 점수예요. 참여 조건에 따라 필터가 적용돼요. | 예 |
| **Business Niche**(비즈니스 니치) | 연락처와 연결된 업종 분류예요. 예를 들면 교육, 의료 등이 있어요. | 아니요 |

![트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033065696/original/RevefXKprkOBwX7qFdxChkT3dIs5xV6SFg.png?1726648831)

조건을 정할 때 쓰는 연산자는 다음과 같아요.

| 연산자 | 설명 |
| --- | --- |
| **Equals to**(같음) | 점수 또는 필드 값이 입력한 값과 같으면 실행돼요. |
| **Greater than**(초과) | 점수 또는 필드 값이 입력한 값보다 크면 실행돼요. |
| **Greater than or Equal to**(이상) | 점수 또는 필드 값이 입력한 값보다 크거나 같으면 실행돼요. |
| **Less than**(미만) | 점수 또는 필드 값이 입력한 값보다 작으면 실행돼요. |
| **Less than or Equal to**(이하) | 점수 또는 필드 값이 입력한 값보다 작거나 같으면 실행돼요. |
| **Is empty**(비어있음) | 필드 값이 비어 있으면 실행돼요. |
| **Is not empty**(비어있지 않음) | 필드 값이 비어 있지 않으면 실행돼요. |
| **Contains Phrase**(문구 포함) | 필드에 입력한 문구가 들어 있으면 실행돼요. |
| **Does not contain Phrase**(문구 포함하지 않음) | 필드에 입력한 문구가 들어 있지 않으면 실행돼요. |

## 설정 방법

1. 워크플로우 빌더의 트리거 옵션에서 **Contact Engagement Score** 트리거를 선택하세요.
2. **Trigger Name**(트리거 이름)에 이름을 입력하세요. 예를 들면 "높은 참여도 연락처"처럼 쓸 수 있어요.
3. 필터를 설정해서 참여 점수나 다른 조건을 정하세요.
   - 예를 들어 필터 드롭다운에서 **Score**를 선택하고 **Greater than**을 고른 다음, 195 같은 값을 입력해요.
   - **Business Niche** 같은 필터를 더하고 **Contains Phrase**를 고른 다음, 업종(예: 교육)을 입력할 수도 있어요.
4. 트리거 설정을 저장하고, 필요하면 워크플로우에 액션이나 단계를 더 추가하세요.

## 예시

이 예시에서는 **Contact Engagement Score** 트리거로 점수가 195 **Greater than**(초과)이면서 교육 업종인 연락처를 가져와요. 연락처가 두 조건을 모두 충족하면 워크플로우에 추가되고, 후속 이메일 캠페인이 진행돼요.
