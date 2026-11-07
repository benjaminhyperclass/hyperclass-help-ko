---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003873-how-to-setup-workflow-triggers-for-google-and-facebook-reviews
번역일: 2026-11-07
카테고리: 41-평판-리뷰
---

# 워크플로우 트리거 — New Review Received(새 리뷰 수신) 설정하기

**New Review Received**(새 리뷰 수신) 워크플로우 트리거를 쓰면, 계정에 연동된 리뷰 플랫폼에서 리뷰가 들어올 때 자동 작업을 실행할 수 있어요. 리뷰 상세 정보와 필터로 팀에 알리거나, 리뷰를 분류하거나, 리뷰를 받은 곳에 따라 후속 작업을 실행하세요.

[동영상](https://www.youtube.com/embed/u6FOXJE8HDA?&wmode=opaque)

## 개요

```
이 'Review Received' 트리거는 연락처와 무관해요. 리뷰가 특정 연락처에 연결되지 않아요.
```

계정에 연결된 리뷰 플랫폼에서 새 리뷰가 들어오면, **New Review Received** 트리거로 자동 작업을 시작할 수 있어요. 리뷰 출처, 평점, 스팸 여부로 필터를 걸어 워크플로우가 반응하는 방식을 조정하세요.

## 1단계: 워크플로우 트리거 설정하기

이 트리거는 계정에 연동된 리뷰 플랫폼에서 리뷰가 들어올 때 워크플로우를 시작해요. 특정 리뷰 정보나 출처에만 반응하게 하려면 필터를 추가하세요.

1. 왼쪽 메뉴에서 **자동화 > 워크플로우**로 이동하세요.
2. **Create New Workflow**(새 워크플로우 만들기)를 클릭하거나, 기존 워크플로우를 열어 편집하세요.
3. 트리거 영역에서 **New Review Received**를 트리거로 선택하세요.

![워크플로우 트리거 목록에서 New Review Received 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082290763/original/OqTCeJP2a_XWAX2G7QFpIoAMTBqRaVDc7A.png?1790854020)

```
이 트리거를 쓰면 Facebook이나 Google에서 새 리뷰가 들어올 때 자동 작업을 만들 수 있어요. 여러 조건으로 리뷰를 걸러서 워크플로우를 원하는 대로 조정하세요.
```

## 2단계: 리뷰 필터 추가하기

필터를 적용하면 리뷰 상세 정보에 따라 특정 작업만 실행하도록 워크플로우를 맞출 수 있어요. 주요 필터는 다음과 같아요.

#### 1. **Review SPAM**(리뷰 스팸 여부)

- **Yes** 또는 **No**를 선택해 스팸 리뷰를 자동으로 처리하세요. 리뷰가 스팸으로 표시됐을 때, 또는 아닐 때 실행할 작업을 정할 수 있어요.

#### 2. **Review Source**(리뷰 출처)

**Review Source**로 리뷰를 받은 리뷰 플랫폼에 따라 워크플로우를 거를 수 있어요. 선택할 수 있는 출처에는 Google과 Facebook뿐 아니라 계정에 연동된 다른 리뷰 플랫폼도 포함될 수 있어요.

리뷰 출처에 따라 워크플로우가 다르게 동작하도록 만들 수 있어요.

{% hint style="info" %}
**Review Source**를 Google 또는 Facebook으로 설정한 기존 워크플로우는 따로 바꾸지 않아도 그대로 작동해요.
{% endhint %}

#### 3. **Review Rating**(리뷰 평점)

- 별점(1~5)으로 리뷰를 걸러요.
- 예를 들어 별 5개 리뷰에는 감사 이메일을 보내고, 별 1~2개 리뷰에는 불만을 확인하는 작업을 실행하도록 워크플로우를 따로 만들 수 있어요.

![Review Rating 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034769578/original/FS0GNN1FBlciWCojDONhZT5kIioAjOinVw.png?1729052835)

## 3단계: 리뷰 상세 정보를 자동 작업에 연결하기

트리거를 설정하고 필터를 적용했다면, 다음으로 리뷰 상세 정보를 연결(매핑)하고 그 정보에 따라 실행할 자동 작업을 설정하세요. 이렇게 하면 평판 관리에서도 고급 워크플로우 자동화를 활용할 수 있어요.

#### **자동 작업**

연결한 리뷰 상세 정보로 여러 가지 자동 작업을 실행할 수 있어요.

- 연결한 리뷰 상세 정보를 워크플로우 안의 여러 액션에 전달할 수 있어요.
- 리뷰 데이터를 웹훅이나 다른 자동 응답 시스템으로 보낼 수도 있어요.

![리뷰 상세 정보를 액션에 연결하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034769597/original/9TW5Hs1EP8MkyxG6EW8xl4R9zNFAaWjA4w.png?1729052930)

## 4단계: 워크플로우 저장하고 테스트하기

필터 설정과 액션 연결을 마쳤다면 **Save**(저장)를 클릭해 워크플로우를 완성하세요.

제대로 작동하는지 확인하려면 다음을 해 보세요.

1. 리뷰를 직접 남기거나 비슷한 상황을 만들어 자동화가 예상대로 실행되는지 확인하세요.
2. 테스트 결과에 따라 조건이나 액션을 필요한 만큼 고치세요.

![워크플로우 저장 및 테스트 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034935735/original/zfY08yH_Xbdnlc8nG2_21f3QvvGIWB4KBw.png?1729232999)

![워크플로우 저장 및 테스트 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034935783/original/-KbHCGdbSk4GDe3vk1Yc4TrJqgl5Gz86qQ.png?1729233070)

![워크플로우 저장 및 테스트 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034935842/original/9VtdeOd0RNmlbAqIuAPZXwx-SNDGHC847Q.png?1729233129)

## 정리

**New Review Received** 트리거에 리뷰 출처, 평점, 스팸 여부 같은 필터를 함께 쓰면, 계정에 연동된 리뷰 플랫폼 전반에서 평판 관리 워크플로우를 자동화할 수 있어요. 리뷰를 일일이 확인하는 수고를 줄이고, 새 리뷰가 들어올 때 팀이 일관되게 대응하도록 도와줘요.
