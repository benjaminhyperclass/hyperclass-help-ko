---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004503-quick-filters-on-dashboards
번역일: 2026-11-07
카테고리: 12-대시보드
---

# 대시보드에서 빠른 필터 사용하기

**빠른 필터**를 쓰면 편집 권한이 없어도 대시보드 위젯의 데이터를 필터로 나눠 볼 수 있어요. 사용자마다 필터를 따로 적용할 수 있어서 대시보드 구성은 그대로 지켜져요. 빠른 필터는 사용자 단위로 저장되므로 사용자마다 자신만의 필터링 환경을 쓸 수 있어요.

[동영상](https://www.youtube.com/embed/kVSpv\_01AoM?&wmode=opaque)

{% hint style="warning" %}
빠른 필터는 직접 만든 사용자 지정 위젯에서만 작동해요. 기본으로 제공되는 일반 위젯(General Widgets)에는 적용되지 않아요.
{% endhint %}

## 대시보드에 빠른 필터 추가하기

1. 빠른 필터를 추가할 대시보드를 열어요.
2. 대시보드 맨 위에 있는 **빠른 필터** 버튼을 클릭하세요.
   ![대시보드 상단의 빠른 필터 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040114997/original/T0suHQk2dCQpgAc8UIf4qC9T34ZpayF4hw.png?1737371785)
3. **+ 빠른 필터 추가** 버튼을 클릭하세요.
   ![빠른 필터 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040115064/original/tDwpX6ApzJjmkYzNb2ZoWSoAN8iNukRJ0w.png?1737371824)
   사이드바가 열리고, 데이터 소스별로 나뉜 필터 목록이 보여요. 검색창으로 원하는 필터를 찾거나 카테고리를 둘러볼 수 있어요.
4. 추가할 필터 옆의 체크박스를 선택하세요.
5. **추가**를 클릭하세요.
   ![추가할 필터를 선택하고 추가 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040115095/original/YcUMzjaWVnlaVI82og2WERYk9c5_dk9R3Q.png?1737371849)
6. 선택한 필터를 확인하고, 필요하면 설명을 입력하세요.
   ![선택한 필터 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040115115/original/oI-ZetIP6_0wzfe1a5x7FiUDx4T6kmX5pA.png?1737371866)
   설명은 모든 사용자에게 보여요. 각 필터를 어떤 용도로 쓰는지 알려 주는 데 도움이 돼요.
   ![필터 설명 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040115130/original/yWVGZqpNCy3h_jVkv14yrpd_-ZpmVtYhmw.png?1737371884)
7. **적용**을 클릭해 설정을 마치세요.

{% hint style="warning" %}
- 빠른 필터는 대시보드마다 따로 설정해요. 대시보드마다 각각 구성해야 해요.
- 대시보드에 대한 전체 권한 또는 편집 권한이 있는 사용자만 빠른 필터를 추가할 수 있어요.
- 보기 권한만 있는 사용자는 필터를 사용할 수는 있지만 수정할 수는 없어요.
{% endhint %}

## 빠른 필터 사용하기

1. 빠른 필터가 설정된 대시보드를 열어요.
   ![빠른 필터가 설정된 대시보드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040115168/original/LkPIK_jpc9dtbo9uMk3KzGw4GmiPQJveQA.png?1737371919)
2. 빠른 필터 바에서 필터를 선택해 적용하세요.
3. 필터 속성을 조정해 보고 싶은 범위로 좁혀요.
   ![필터 속성 조정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040115200/original/iRGkULrbFMewxJyMi2JdJCFb1JlH7TjavA.png?1737371939)
4. 적용한 필터에 맞춰 위젯의 데이터가 바뀌는지 확인하세요.

{% hint style="warning" %}
필터는 필터 속성과 같은 데이터 소스를 쓰는 위젯에만 적용돼요.

예를 들어 연락처 데이터 소스의 태그 속성으로 필터를 만들면, 연락처 데이터 소스를 쓰는 위젯에만 영향을 줘요.
{% endhint %}

{% hint style="warning" %}
필터는 설정한 본인에게만 적용돼요. 다른 사용자에게는 영향을 주지 않아요.

필터는 현재 브라우저 세션에 저장돼요. 같은 세션에서 대시보드에 다시 들어오면 마지막으로 선택한 필터가 그대로 적용돼 있어요.
{% endhint %}

<!-- 검토 필요: 원문 내용이 서로 다름 (도입부는 사용자 단위로 저장된다고 하고, 본문은 현재 브라우저 세션에 저장된다고 함) -->

## 빠른 필터와 위젯 필터는 함께 어떻게 작동하나요?

빠른 필터와 위젯 필터는 AND 조건으로 함께 적용돼요. 빠른 필터가 위젯 수준 필터를 덮어쓰지 않고, 그 위에 조건을 더해요.

데이터가 잘못 나오거나 빠지지 않게 하려면 이렇게 나눠 쓰세요.

- 위젯에만 필요한 조건은 위젯 필터로 설정해요.
- 팀 전체에 해당하는 폭넓은 필터링은 빠른 필터로 해요.

**예시**

다음과 같이 설정했다고 가정해 볼게요.

- 위젯 필터: **예약 상태** = 확정됨
- 빠른 필터: **예약 상태** = 취소됨

이 경우 시스템은 예약 상태가 확정됨 AND 취소됨인 예약을 찾으려고 해요. 두 조건을 동시에 만족하는 예약은 없으므로 데이터가 표시되지 않아요.

✅ 팀 전체에서 유연하게 필터링할 때는 빠른 필터를 쓰고, 비슷한 필터를 위젯 수준에서 중복으로 설정하지 않는 것이 좋아요.
