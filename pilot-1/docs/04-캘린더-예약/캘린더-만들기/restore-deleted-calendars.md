---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002468-restore-deleted-calendars
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 삭제한 캘린더 복원하기

실수로 삭제한 캘린더는 **감사 로그**에서 복원할 수 있어요. 캘린더를 삭제할 때 함께 지워진 예약도 같이 되돌릴 수 있어요.

[[동영상](https://www.youtube.com/embed/1NPtdNqkRtc?&wmode=opaque)](https://youtu.be/1NPtdNqkRtc)

## 개요

캘린더를 삭제하면 그 캘린더에 들어 있던 예약도 모두 삭제돼요. 삭제한 뒤에 다시 필요해지는 경우가 많아서, 캘린더와 예약을 함께 되돌리는 복원 기능이 생겼어요.

복원 기능을 쓰면 삭제한 캘린더와, 캘린더를 삭제할 때 함께 삭제된 예약을 한 번에 되살릴 수 있어요.

## 삭제한 캘린더를 복원하는 방법

1. **설정 > 감사 로그**로 이동하세요.

   ![감사 로그 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033168218/original/8VenB-Hi6kOYkM1wqsxJgbnfhs_us-EjVA.png?1726746248)

2. 삭제한 캘린더에 해당하는 로그 항목을 찾으세요.

   ![삭제한 캘린더의 로그 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033168584/original/KWHKUSke_gJuBh8XSmPvQDOfDHLo7gfFCw.png?1726746471)

3. 해당 로그 항목 옆의 점 3개 아이콘을 클릭하고 **복원**을 선택하세요.

   ![점 3개 메뉴에서 복원 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033168878/original/MwroShuUDDYtxjRUgG441XBRLf3DrXn6lw.png?1726746628)

4. 캘린더와 함께 삭제됐던 예약이 모두 복원돼요.

   ![캘린더와 예약이 복원된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033169553/original/BDxNpjemC-gSHk3X5T801yEpqkjvpAg-YQ.png?1726746839)

## 꼭 알아 두세요

{% hint style="warning" %}
감사 로그는 최대 60일까지만 보관돼요. 삭제한 캘린더를 되살리려면 기간이 지나기 전에 복원하세요. 기간이 지나면 데이터를 되돌릴 수 없어요.
{% endhint %}

- 캘린더를 삭제하면 그 캘린더에 연결된 예약도 모두 삭제돼요.
- 캘린더를 삭제한 시각을 기준으로 앞뒤 30분 이내에 삭제된 예약만 복원돼요.
- 이 시간 범위를 벗어나 삭제된 예약은 복원되지 않아요.
- 캘린더 삭제 때문에 함께 지워진 예약만 되살리기 위한 규칙이에요. 사용자가 다른 때에 직접 삭제한 예약은 복원되지 않아요.

{% hint style="info" %}
**예시**: 5월 15일 오전 10시에 캘린더를 삭제하면 그 캘린더의 예약도 바로 함께 삭제돼요. 이 예약들은 캘린더 삭제 시각 기준 30분 이내에 삭제된 것이므로, 캘린더를 복원하면 모두 복원돼요.

하지만 같은 날 오전 9시에 직접 삭제한 예약이 있다면, 그 예약은 복원되지 않아요.
{% endhint %}
