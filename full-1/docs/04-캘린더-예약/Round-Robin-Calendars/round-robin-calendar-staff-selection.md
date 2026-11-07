---
원문: https://help.gohighlevel.com/support/solutions/articles/48001239842-round-robin-calendar-staff-selection
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 라운드 로빈 캘린더에서 고객이 직원 선택하게 하기

라운드 로빈 캘린더에서 고객이 원하는 직원을 골라 예약할 수 있게 설정하는 방법을 안내해요. 직원을 고르지 않은 고객은 기존 라운드 로빈 방식으로 예약이 배정돼요.

## 직원 선택 기능의 배정 방식

라운드 로빈 캘린더의 직원 선택 기능을 켜면 고객이 예약할 때 원하는 직원을 직접 고를 수 있어요. 라운드 로빈 방식은 예약 가능한 팀원에게 예약을 공평하게 나눠 주는 방식이에요. **Staff Selection**(직원 선택) 기능을 켜면 다음과 같이 동작해요.

- 고객이 특정 직원을 선택할 수 있어요.
- 고객이 직원을 선택하지 않으면, 라운드 로빈 방식에 따라 예약 가능한 직원이 자동으로 배정돼요.
- 이 기능은 Neo 위젯에서만 작동해요.

---

## 직원 선택 기능의 장점

- 고객이 원하는 직원과 예약할 수 있어서 고객 경험이 좋아져요.
- 예약이 공평하게 나뉘어 운영 효율이 높아져요.
- 캘린더 설정과 함께 동작해서 일정 충돌이 줄어요.
- Neo 위젯에서 더 편리한 예약 환경을 제공해요.

---

## 직원 선택 기능 켜기

직원 선택 기능을 켜면 고객은 원하는 팀원을 골라 예약하고, 비즈니스는 라운드 로빈 방식의 효율을 그대로 유지할 수 있어요. 고객 만족도를 높이고 직원 간 업무량도 고르게 나눌 수 있어요. 아래 순서대로 라운드 로빈 캘린더에 직원 선택 기능을 설정해 보세요.

### 1단계: 캘린더 설정으로 이동하기

1. 하이퍼클래스 계정에서 **설정 > 캘린더**로 이동해, 직원 선택을 켤 캘린더를 찾으세요.

   ![캘린더 설정 화면으로 이동하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042355976/original/JXyKo1WO3GOwXwWTtOEQq35jIflbn71hoA.gif?1740659740)

### 2단계: 캘린더 편집하기

1. 수정할 캘린더 옆의 점 3개 메뉴를 클릭하세요.
2. 드롭다운에서 **편집**을 선택하세요.

   ![캘린더 옆 점 3개 메뉴에서 편집을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042356271/original/JX_vkU_9csFrxvSqyTuRBHXhsDoqGPQEeg.png?1740659892)

### 3단계: 직원 선택 켜기

1. **사용자 지정** 섹션에서 **Staff Selection**(직원 선택) 항목을 찾으세요.
2. **직원 선택 허용** 토글을 켜세요.

   ![직원 선택 허용 토글을 켠 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042356436/original/B0gfGT293iO3cOu7i_Y6cP1P9Ywsz4GUUQ.png?1740660004)

{% hint style="warning" %}
**중요:** 직원 선택 토글은 **Calendar widget style**(캘린더 위젯 스타일)이 NEO로 설정되어 있을 때만 켜서 사용할 수 있어요.

![캘린더 위젯 스타일이 NEO로 설정된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042356781/original/V4cOvux9kWpiCF03J-RgpOBz8ZUEPBKEAA.png?1740660240)
{% endhint %}

---

## 라운드 로빈 선택을 위한 직원 가용 시간 관리

직원 선택 기능이 제대로 작동하려면 직원별 가용 시간을 최신 상태로 맞춰 두세요.

1. 서브 계정의 **설정 > 스태프 관리**로 이동한 뒤, 가용 시간을 수정할 직원을 선택하세요.

   ![스태프 관리에서 직원을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042358015/original/DBzI9yH0okg30UwHq1Y83uw4BONaZwJhoQ.png?1740660957)
2. **작업** 탭에서 연필 아이콘(**편집**)을 클릭하세요. **Working hours**(근무 시간)와 **시간대**를 조정하고 변경 내용을 저장하세요.

   ![작업 탭에서 근무 시간과 시간대를 수정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042358548/original/_tcB-I6bONd-z185Oe8bbPs5bfB-a281Ww.png?1740661230)

{% hint style="info" %}
이미 잡힌 예약의 취소와 일정 변경은 "Cancellation & Reschedule Policy (Booking Widget)" 문서를 참고하세요.
{% endhint %}

---

## 고객 입장에서 예약 흐름 확인하기

고객이 예약하는 과정을 직접 확인해 두면 직원 선택이 제대로 작동하는지 점검할 수 있어요. 문제가 생기기 전에 미리 찾아 해결할 수도 있어요.

1. 캘린더 옆의 점 3개 메뉴를 클릭하고, 드롭다운에서 **공유**를 선택하세요. 그다음 **Scheduling Link**(일정 예약 링크) 또는 **영구 링크**를 복사하세요.

   ![공유 메뉴에서 예약 링크를 복사하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042360828/original/Dh5uun2p6fxYZIFijT2ZUwApQmPH1-7pag.gif?1740662490)
2. 복사한 링크를 브라우저에서 여세요. 예약 페이지에 예약 가능한 직원 중 한 명을 고르는 옵션이 나타나요.

   ![예약 페이지에서 직원을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042361049/original/NHvEXUMWMX3EOnQKnd-cjzTuUiwm0WULtg.png?1740662619)

---

## 자주 묻는 질문

### Classic 캘린더 위젯에서도 직원 선택을 쓸 수 있나요?
아니요. 직원 선택은 Neo 위젯에서만 사용할 수 있어요.

### 고객이 직원을 선택하지 않으면 어떻게 되나요?
라운드 로빈 방식에 따라 예약 가능한 직원이 자동으로 배정돼요.

### 여러 캘린더에서 이 기능을 켤 수 있나요?
네. 직원 선택을 켜려는 캘린더마다 같은 순서로 설정하세요.

### 이 설정이 예약 배정 방식에 영향을 주나요?
네. 고객이 특정 직원을 선택하면 기본 라운드 로빈 배정보다 고객의 선택이 우선돼요.
