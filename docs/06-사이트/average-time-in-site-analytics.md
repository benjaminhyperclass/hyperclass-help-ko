---
원문: /support/solutions/articles/155000007325-average-time-in-site-analytics
번역일: 2026-11-07
카테고리: 06-사이트
---

# 사이트 분석에서 평균 체류 시간 확인하기

방문자가 사이트에 얼마나 오래 머무는지 확인할 수 있는 기능이에요. 선택한 기간 동안 방문자가 사이트를 어떻게 이용하는지 참여도 지표로 파악할 수 있어요.

## 평균 체류 시간이란?

**사이트 > 분석**에 있는 전용 화면으로, 퍼널, 웹사이트, 웨비나의 페이지에서 방문자가 실제로 활동한 시간을 보여 줘요.

화면 상단에는 **Average Time**(평균 체류 시간)과 **Exit Before 30 Seconds**(30초 이내 이탈) KPI 카드가 있어요. 그 아래 추이 차트에서는 기간별 참여도를 비교할 수 있어요.

![평균 체류 시간 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063888367/original/kjnF1eTwV5oPddaBd30ZTkVVHIZGaJxICQ.png?1769800713)

---

## 평균 체류 시간 지표를 쓰면 좋은 점

- 추이 파악: 퍼널, 웹사이트, 웨비나에서 참여도가 높은 지점과 낮은 지점을 찾을 수 있어요.
- 우선순위 설정: 콘텐츠, UX, 디자인을 어디부터 개선할지 판단하는 데 도움이 돼요.
- 추측 줄이기: 방문자 유지율과 전환율을 높일 때 감에 의존하는 부분이 줄어들어요.
- 데이터 기반 의사결정: 실제 방문자의 참여 행동을 근거로 결정할 수 있어요.

---

## 주요 지표

#### Average Time(평균 체류 시간)

선택한 기간과 사이트 전체에서 방문 한 번당 실제로 활동한 시간의 평균이에요. 사이트 전반의 방문자 참여도를 가늠할 수 있어요.

#### Exit Before 30s(30초 이내 이탈)

해당 페이지에 들어온 뒤 30초 안에 끝난 방문의 비율이에요(이탈률). 짧게 끝났거나 참여도가 낮은 방문을 찾는 데 쓰여요. 기대와 다른 내용, 느린 로딩, 관련 없는 콘텐츠가 원인인 경우가 많아요.

{% hint style="info" %}
방문(세션)은 하나씩 따로 집계돼요. 2초 미만의 매우 짧은 방문은 잡음을 줄이기 위해 집계에서 제외돼요.
{% endhint %}

---

## 평균 체류 시간 확인하기

다음 단계를 따라 **사이트** 분석에서 **Average Time** 카드를 찾아보세요.

1. 서브 계정 대시보드의 왼쪽 메뉴에서 **사이트**로 이동한 다음, 상단 메뉴에서 **분석** 탭을 선택하세요.

   ![사이트 분석 탭으로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063888457/original/R4gVKNNpOhHUVpIEUAsVENx_yc6ub-QN7A.png?1769800955)

2. 대시보드 왼쪽 위 드롭다운에서 **퍼널**, **웹사이트**, **웨비나** 중 확인할 데이터를 고르세요. 두 번째 드롭다운에서 특정 사이트 하나만 골라 결과를 좁힐 수도 있어요.

   ![퍼널, 웹사이트, 웨비나 선택 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063889272/original/_HPOKnGVNwIptt2cqCzcg9CLhFUdY0mxrw.png?1769802569)

3. 오른쪽 위의 **Date Selector**(날짜 선택기)에서 데이터를 볼 기간을 선택하세요.

   ![날짜 선택기에서 기간 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063889278/original/tK4CGtOddbMIulXVOw9mHCuVCUgXoO5dbg.png?1769802590)

4. 아래로 스크롤해 **Average Time** 카드를 찾으세요. 이 카드에서는 다음을 확인할 수 있어요.
   - 30초 이내에 이탈한 방문자의 비율
   - 선택한 기간의 세션당 평균 체류 시간
   - 막대에 마우스를 올리면 해당 기간의 세션당 평균 체류 시간

   ![Average Time 카드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063889282/original/PN32_d73Wv4iqkENcdsBIgG4bLBMjd-axA.jpeg?1769802613)

---

## 자주 묻는 질문

### 어떤 종류의 사이트에서 평균 체류 시간 지표를 볼 수 있나요?
퍼널, 웹사이트, 웨비나에서 볼 수 있어요.

### 방문자가 탭을 열어 둔 채 자리를 비우면 시간은 어떻게 계산되나요?
활동이 없는 시간에는 상한이 있어요. 그래서 탭만 열어 둔 방문이 평균 세션 시간을 부풀리지 않아요.

### 아주 짧은 방문은 어떻게 처리되나요?
2초 미만의 세션은 집계에서 제외돼요. 실수로 클릭했거나 바로 나간 방문 때문에 생기는 잡음을 줄이기 위해서예요.
