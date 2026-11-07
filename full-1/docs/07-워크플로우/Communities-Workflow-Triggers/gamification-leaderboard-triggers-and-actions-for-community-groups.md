---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004080-gamification-leaderboard-triggers-and-actions-for-community-groups
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 커뮤니티 그룹 게이미피케이션·리더보드 트리거와 액션 — User Group Gamification Level Changed, Grant community group leaderboard points

커뮤니티 그룹 멤버십을 기준으로 워크플로우 트리거와 액션을 설정하는 방법을 안내해요. 게이미피케이션 포인트를 지급하거나 리더보드 레벨이 바뀔 때 실행되는 워크플로우를 만들 때 쓰세요. **Filters**(필터) 설정 방법과, 사용자가 해당 커뮤니티 그룹에 속해 있지 않을 때 워크플로우가 어떻게 동작하는지도 함께 알아봐요.

[동영상](https://www.youtube.com/embed/7slF2O6-y2U?&wmode=opaque)

## 커뮤니티 그룹 멤버 리더보드 레벨 변경 트리거

- 트리거: 사용자의 리더보드 레벨이 바뀌면 실행돼요.
- 필터: 트리거를 적용할 그룹과 레벨을 필터로 지정해야 해요.
- 사용 사례: 사용자가 새 레벨에 오르면 축하 이메일을 자동으로 보내거나 포인트를 지급할 수 있어요.

### 사용 방법

1. 워크플로우 설정 화면으로 이동해요.
2. 트리거 목록에서 **User Group Gamification Level Changed**(사용자 그룹 게이미피케이션 레벨 변경)를 선택해요.
3. **Filters**(필터)에서 특정 그룹이나 레벨 같은 조건을 지정해요. 이렇게 하면 지정한 조건을 만족할 때만 트리거가 실행돼요.

![트리거 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035497574/original/C9pi23EJRV3yn534k69lkToj7u0e5msCRg.png?1730046272)

## 커뮤니티 그룹 리더보드 포인트 지급 액션

### 1. 게이미피케이션 포인트 지급

- 액션: 특정 트리거에 맞춰 리더보드 포인트를 지급할 수 있어요.
- 지급할 포인트: 워크플로우 설정의 드롭다운에서 정해요. 포인트 수와 포인트를 적용할 그룹을 지정할 수 있어요.
- 사용 사례: 원하는 행동을 완료한 사용자에게 포인트를 지급해 참여를 유도하고, 리더보드에서 순위를 올릴 수 있게 도와줘요.

### 2. 사용 방법

1. **Grant community group leaderboard points**(커뮤니티 그룹 리더보드 포인트 지급) 액션을 선택해요.
   - 그룹 안에서 특정 행동을 완료한 사용자에게 포인트를 지급할 때 이 액션을 선택해요.
2. 포인트와 그룹을 설정해요.
   - **Points**(포인트): 지급할 포인트 수를 입력해요.
   - **Group**(그룹): 드롭다운에서 포인트를 적용할 그룹을 선택해요. 선택한 그룹에 속한 사용자에게만 포인트가 지급돼요.

{% hint style="info" %}
멤버가 해당 그룹에 속해 있지 않으면 워크플로우 실행이 실패해요.
{% endhint %}

![포인트 지급 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035497553/original/7f6crdEbwMzNpdQDW_G6XgQnSJEr6Pju4Q.png?1730046207)
