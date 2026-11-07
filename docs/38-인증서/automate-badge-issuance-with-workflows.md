---
원문: /support/solutions/articles/155000008492-automate-badge-issuance-with-workflows
번역일: 2026-11-07
카테고리: 38-인증서
---

# 워크플로우로 배지 자동 발급하기

워크플로우에서 배지를 자동으로 발급하고, 배지가 발급된 뒤에 이어질 후속 작업까지 만들 수 있어요. 이 문서에서는 **Issue Badge**(배지 발급) 액션과 **Badge Issued**(배지 발급됨) 트리거를 함께 쓰는 방법을 설명해요.

## 워크플로우의 배지 자동화란?

배지 자동화를 쓰면 워크플로우에서 배지를 자동으로 발급할 수 있어요. 배지가 발급될 때마다 다른 작업을 실행하게 할 수도 있어요. 성과를 축하하고, 달성한 목표에 맞춰 고객 여정을 이어 가기가 쉬워져요.

이 기능은 두 가지 워크플로우 구성 요소로 이루어져 있어요.

- **Issue Badge**(배지 발급) 액션: 워크플로우 조건이 충족되면 배지를 발급해요.
- **Badge Issued**(배지 발급됨) 트리거: 배지가 발급된 직후에 후속 자동화를 시작해요.

두 가지를 함께 쓰면 전체 인정·보상 흐름을 만들 수 있어요. 예를 들어 연락처의 행동이나 달성 기준에 따라 배지를 자동으로 발급하고, 축하 메시지를 보내거나, 연락처 정보를 업데이트하거나, 고객 여정의 다음 단계를 시작할 수 있어요.

## 주요 장점

- 간편한 인정: 기존 워크플로우 안에서 배지를 자동으로 발급해요. 직접 확인하는 수고를 덜고 제때 축하할 수 있어요.
- 후속 자동화: 배지가 발급된 뒤 축하 메시지 보내기, 연락처 속성 업데이트, 여정의 다음 단계 시작 같은 작업을 실행해요.
- 참여도 향상: 달성한 목표를 자동으로 축하하고, 이후 상호작용으로 이어 가며 연락처와의 관계를 유지해요.
- 유연한 워크플로우: 어떤 워크플로우 트리거나 조건과도 배지 발급을 조합할 수 있어요. 기존 자동화 방식에 자연스럽게 녹여 쓸 수 있어요.

## Issue Badge 액션의 작동 방식

**Issue Badge** 액션은 배지 발급을 워크플로우의 한 단계로 추가해요. 워크플로우가 이 액션에 도달하면, 워크플로우를 시작시킨 연락처나 참가자에게 선택한 배지를 자동으로 발급해요.

코스 수료, 구매, 폼 제출, 커스텀 필드 업데이트 같은 이벤트로 시작되는 워크플로우에서 이 액션을 쓸 수 있어요. 워크플로우 조건이 충족되면 직접 처리하지 않아도 배지가 발급돼요.

{% hint style="info" %}
**Issue Badge** 액션을 필터와 조건에 함께 쓰면, 점수 기준 달성이나 여러 활동 완료처럼 특정 기준을 충족했을 때만 배지를 발급할 수 있어요.
{% endhint %}

![Issue Badge 액션이 추가된 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079016592/original/dILCkxNbAXGe83y9-voq5y9y8-h_0oGkGg.png?1787320380)

## Badge Issued 트리거의 작동 방식

**Badge Issued** 트리거는 지정한 배지가 연락처에게 발급될 때마다 워크플로우를 시작해요. 배지를 직접 발급했든, **Issue Badge** 액션으로 발급했든, 다른 방법으로 발급했든 상관없이 작동해요.

트리거가 실행되면 워크플로우에서 다음과 같은 후속 작업을 할 수 있어요.

- 축하 이메일이나 SMS 보내기
- 연락처의 태그나 커스텀 필드 업데이트
- 연락처를 파이프라인 단계에 배정
- 다른 자동화 시퀀스 시작

{% hint style="info" %}
활용 예시: **Badge Issued** 트리거로 성과를 축하하는 맞춤 메시지를 보내거나, 할인이나 보상을 제공하거나, 달성한 성과에 따라 연락처를 상위 코스나 프로그램에 등록할 수 있어요.
{% endhint %}

![Badge Issued 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079016507/original/MDth892hmxZoMFtBYvv3z1OXeUpV6efrTw.png?1787320353)

## 배지 자동화 설정하기

배지를 자동으로 발급하려면 워크플로우에 **Issue Badge** 액션을 설정해요. 다음 단계를 따라 하세요.

1. **자동화 > 워크플로우**로 이동해서 새 워크플로우를 만들거나, 배지 발급을 추가할 기존 워크플로우를 여세요.

   ![워크플로우 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079017207/original/N3lwClH59-QV_ArKnfMT8PVfM-tfMkEONw.png?1787320482)

2. 워크플로우 빌더에서 새 액션을 추가하세요. 사용할 수 있는 액션 목록에서 **Issue Badge**(배지 발급)를 검색해 선택하세요.

   ![액션 목록에서 Issue Badge 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079017388/original/77AKgpbotR8ce2sb0qyjHxfuYYmJtToCPg.png?1787320557)

3. 드롭다운 메뉴에서 워크플로우가 이 액션에 도달했을 때 발급할 배지를 선택하세요. 계정에 설정된 활성 배지만 목록에 나타나요.

   ![발급할 배지 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079017291/original/S294ffEdnbmzXiGOxRR_HlyDqu6wTmqipA.png?1787320515)

4. 변경사항을 저장하고 워크플로우를 활성화하세요. 이제 워크플로우 조건이 충족되고 액션에 도달할 때마다 배지가 자동으로 발급돼요.

{% hint style="info" %}
배지가 발급된 뒤의 후속 작업을 설정하려면 **Badge Issued** 트리거를 쓰는 워크플로우를 따로 만드세요. 워크플로우를 시작할 배지를 선택한 다음, 이메일 보내기, 연락처 필드 업데이트, 추가 자동화 시작 같은 액션을 추가하면 돼요. 후속 시나리오별로 같은 배지를 **Badge Issued** 트리거에 지정한 워크플로우를 여러 개 만들 수도 있어요.
{% endhint %}

![배지 자동화 설정을 마친 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079017466/original/K4rNcWBlL0zdGb299kUidFX9XBeJbD7NnA.png?1787320619)
