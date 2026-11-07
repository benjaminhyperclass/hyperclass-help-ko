---
원문: https://help.gohighlevel.com/support/solutions/articles/48001204848-how-do-i-find-my-client-s-location-id-
번역일: 2026-11-07
카테고리: 11-설정
---

# 클라이언트의 위치 ID 찾기

하이퍼클래스 고객지원 팀에 문의하면 문제가 생긴 서브 계정의 위치 ID(Location ID)를 알려 달라고 할 수 있어요. 이 문서에서는 서브 계정의 위치 ID를 찾는 두 가지 방법을 안내해요.

위치 ID는 에이전시 계정의 모든 서브 계정에 하나씩 부여되는 고유 ID예요. 고객지원 팀은 이 ID로 어느 클라이언트 계정인지 정확히 확인하고, 문제 원인을 좁혀 갈 수 있어요.

{% hint style="warning" %}
위치 ID를 조직 밖으로 공유하지 마세요.
{% endhint %}

---

## 방법 1: **비즈니스 프로필**에서 확인하기

1. 서브 계정의 **대시보드**에서 오른쪽 아래에 있는 **설정**으로 이동하세요.

   ![서브 계정 대시보드에서 설정으로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078226830/original/vFmhdAGTs8c3mtvtowfppcHwAkE67MrIcw.png?1786532580)
2. 왼쪽 메뉴에서 **비즈니스 프로필**을 선택하세요.

   ![왼쪽 메뉴에서 비즈니스 프로필 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078226892/original/2VDcANkAXnqU7VoLZ4W0bVwv-S1ouzutrQ.png?1786532632)
3. **비즈니스 프로필** 페이지에 표시된 **위치 ID**를 확인하세요.

   ![비즈니스 프로필 페이지에 표시된 위치 ID](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078226914/original/HntdJSGsxOwT6tn-aBPli1pFGs2mjIi11Q.png?1786532661)

특정 서브 계정의 위치 ID를 찾고 확인할 때 가장 확실한 방법이에요.

---

## 방법 2: URL에서 확인하기

이미 클라이언트의 서브 계정 안에 있다면 브라우저 주소창에서 위치 ID를 바로 찾을 수 있어요.

1. 클라이언트의 서브 계정을 여세요.
2. 브라우저의 URL을 확인하세요.

   ![브라우저 주소창의 URL](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078227077/original/agdRKaeJD21eSFvVhb4AHYwtx48XEOrqkg.png?1786532750)
3. `/location/` 뒤에 나오는 값이나 `locationId=` 매개변수에 있는 값을 찾으세요.
4. 그 값이 위치 ID예요.

**예시:**

`https://app.../v2/location/abc123XYZ/dashboard`

이 예시에서는 `abc123XYZ`가 위치 ID예요.

{% hint style="info" %}
**팁:** URL에 `/location/` 또는 `locationId=` 매개변수가 있다면, URL에서 찾는 방법이 가장 빠를 수 있어요.
{% endhint %}

---

## URL에 위치 ID가 보이지 않으면 어떻게 하나요?

일부 하이퍼클래스 페이지는 브라우저 URL에 위치 ID를 표시하지 않을 수 있어요. 예를 들어 에이전시 수준의 페이지나, URL에 서브 계정의 위치 ID가 없는 다른 페이지를 보고 있는 경우예요.

URL에 `/location/` 또는 `locationId=`가 보이지 않으면 아래 순서로 확인하세요.

1. 올바른 서브 계정을 열었는지 확인하세요.
2. **설정 > 비즈니스 프로필**로 이동하세요.
3. **비즈니스 프로필** 페이지에 표시된 **위치 ID**를 확인하세요.

올바른 ID인지 확인할 때는 **비즈니스 프로필**에 표시된 위치 ID를 기준으로 하세요.

---

## 위치 ID와 다른 식별자 구분하기

위치 ID는 에이전시 계정 안의 특정 서브 계정을 구분하는 ID예요. 하이퍼클래스에서 볼 수 있는 에이전시 ID, 사용자 ID 등 다른 계정 관련 ID와 헷갈리지 마세요.

어떤 ID를 알려 줘야 할지 모르겠다면, 해당 서브 계정으로 이동해서 **설정 > 비즈니스 프로필**에 표시된 위치 ID를 알려 주세요.
