---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009371-service-areas-in-field-services
번역일: 2026-11-02
카테고리: 04-캘린더-예약 > Field Services
---

# Field Services의 서비스 지역

서비스 지역은 비즈니스가 활동하는 범위를 정의해요. 서비스 지역은 어떤 고객 주소에 서비스를 제공할 수 있는지, 어떤 직원이 해당 업무를 맡을 수 있는지, 그리고 출장비를 청구하거나 추가 이동 시간을 확보할지 여부를 결정합니다. 이 글에서는 서비스 지역을 만들고 관리하는 방법과 고객이 서비스 지역을 벗어난 경우 어떤 일이 일어나는지 설명할게요.

참고: Field Services는 현재 비공개 베타(private beta) 상태이며 선택된 계정에서만 사용할 수 있어요. 기능과 화면은 개선 과정에서 변경될 수 있습니다.

## 이 글에서 다루는 내용

- [서비스 지역이란 무엇인가요?](#what)
- [서비스 지역은 어디서 찾나요](#where)
- [서비스 지역을 만드는 방법](#create)
- [방문 전 출장비 및 추가 시간](#travel)
- [주소가 서비스 지역을 벗어나면 어떻게 되나요?](#outside)
- [서비스 지역이 직원에게 미치는 영향](#staff)
- [자주 묻는 질문](#faq)

---

## 서비스 지역이란 무엇인가요?
서비스 지역은 지리적 범위를 의미해요. 예를 들어 "시내 중심가" 또는 "북부 교외 지역" 같은 식이에요. 시작 주소를 기준으로 한 **반경(radius)**으로 설정하거나 **우편번호(ZIP/postal codes)** 목록으로 설정할 수 있으며, 이후 해당 지역을 서비스할 수 있는 직원을 배정합니다. Field Services를 처음 사용하면 **기본(Default)** 서비스 지역이 자동으로 생성돼요.

서비스 지역은 직원 및 예약 규칙과 함께 작동해요:

- 온라인으로 예약하는 고객은 설정된 서비스 지역과 비교해 확인됩니다.
- 예약 가능 시간 찾기(Find availability) 기능은 고객 주소에 서비스를 제공하는 직원만 추천해요.
- 출장비와 추가 시간은 지역별로 적용됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162785/original/XbEM4xFVaVHOJjZUoOkf4vKBGC186ClqAg.jpg?1792999509)


---

## 서비스 지역은 어디서 찾나요

- **Field Services > Services & staff(서비스 및 직원)** 메뉴로 이동하세요.
- **Coverage & staff(커버리지 및 직원)** 아래의 **Service areas(서비스 지역)**를 클릭하세요.

서비스 지역은 **목록(List)** 또는 **지도(Map)** 형태로 볼 수 있어요. 목록에서는 각 지역의 이름, 커버리지 범위, 배정된 직원, 추가 시간 또는 출장비 정보를 확인할 수 있습니다.

---

## 서비스 지역을 만드는 방법

- 서비스 지역(Service areas) 페이지에서 **New service area(새 서비스 지역)**를 클릭하세요.
- **이름(Name)**을 입력하세요.
- **서비스 지역 커버리지(Service area coverage)** 아래에 **시작 주소(Starting address)**를 입력하세요. 이는 반경의 중심점이 되거나, 해당 지역의 기준 위치가 됩니다.
- **커버리지 유형(Coverage type)**을 선택하세요 (아래 표 참고).
- **배정된 직원(Assigned staff)** 아래에서 이 지역의 고객을 응대할 수 있는 직원을 선택하세요.
- 필요한 경우 이동 관련 옵션을 설정하세요.
- **Add service area(서비스 지역 추가)**를 클릭하세요.

| 커버리지 유형 | 작동 방식 | 추천 대상 |
|---|---|---|
| **반경(Radius)** | 시작 주소에서 일정 거리 이내의 주소를 커버해요. 반경을 입력하고 마일(Miles) 또는 킬로미터(Kilometers)를 선택하세요. 지도에서 해당 지역을 미리 볼 수 있어요. | 매장이나 창고에서 정해진 거리만큼 이동하는 비즈니스 |
| **우편번호(ZIP / Postal codes)** | 입력한 우편번호와 일치하는 주소를 커버해요. | 특정 도시나 동네를 대상으로 서비스하는 비즈니스 |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162797/original/1QUfOd8HMolL2kGwxAOI6GpD2KT4RJjNtQ.jpg?1792999514)


참고: 서비스 지역이 겹치지 않도록 신중하게 설정하세요. 실제로 해당 지역에 갈 수 있는 모든 직원을 배정해야 예약 가능 시간 정보가 정확하게 유지돼요.

---

## 방문 전 출장비 및 추가 시간
양식 하단의 **출장비 및 버퍼(Travel fee & buffer)**에는 두 가지 옵션이 있어요:

| 옵션 | 작동 방식 |
|---|---|
| **출장비 청구(Charge a travel fee)** | 해당 지역의 작업에 출장비를 추가해요. 작업 건당 한 번만 청구됩니다. |
| **방문 전 추가 시간 추가(Add extra time before visits)** | 예상 이동 시간에 더해, 이 지역에서의 방문마다 직원 일정에 추가 시간을 확보해요. 주차, 교통 혼잡, 짐 싣기 등에 활용하세요. 고객은 이 시간을 예약할 수 없어요. |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162803/original/VZY4AxvwM1eOVVHR3yUxFfrniiNO7tC9jw.jpg?1792999517)


---

## 주소가 서비스 지역을 벗어나면 어떻게 되나요?

서비스 지역(Service areas) 페이지 상단의 **서비스 지역 외 예약(Bookings outside service areas)** 카드에서 정책을 선택하세요. 연필 아이콘을 클릭하면 변경할 수 있어요.

| 정책 | 고객 및 팀에게 보이는 내용 |
|---|---|
| **예약 차단(Block booking)** | 고객 주소가 모든 서비스 지역을 벗어나면 예약할 수 없어요. |
| **검토 후 예약 허용(Allow booking with review)** | 고객은 예약할 수 있지만, 해당 예약은 팀의 검토를 받도록 표시돼요. **고객에게 보낼 메시지(Message to customer)**(최대 500자)를 수정할 수 있고, **플래그된 예약 배정 대상(Assign flagged bookings to)**에서 어떤 서비스 지역이 해당 예약을 관리할지 선택할 수 있어요. |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162793/original/sU8m_VLv1pjlvSzG_A7bfZsYcy4dKPnsnQ.jpg?1792999511)


서비스 지역을 벗어난 주소로 작업을 생성하면 다음과 같은 경고가 표시돼요: **서비스 지역 외 지역입니다. 이 작업은 검토 대상으로 표시됩니다.** 또한 해당 작업이 어느 서비스 지역에서 처리되는지도 함께 표시됩니다.

---

## 서비스 지역이 직원에게 미치는 영향

- 서비스 지역을 만들 때 직원을 배정하거나, **Staff(직원) > Edit(편집) > Eligible service areas(서비스 가능 지역)**에서 각 직원별로 지역을 선택할 수 있어요.
- 방문 일정에 대한 예약 가능 시간을 찾을 때, Field Services는 고객의 서비스 지역을 담당하는 직원을 추천해요.
- 특정 지역에 배정되지 않은 직원이라도 방문 일정을 잡을 때 수동으로 선택할 수 있어요.

[Field Services의 직원](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009372) 및 [Field Services에서 방문 일정 잡기 및 예약 가능 시간 찾기](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009377) 문서를 참고하세요.

---

## 자주 묻는 질문

**기본(Default) 서비스 지역을 삭제할 수 있나요?**
기본 지역은 자동으로 생성됩니다. 커버리지와 배정된 직원을 비즈니스에 맞게 편집할 수 있어요.

**직원 한 명이 여러 지역을 담당할 수 있나요?**
네. **서비스 가능 지역(Eligible service areas)**에서 해당 직원이 담당할 수 있는 모든 지역을 선택하면 돼요.

**출장비가 고객에게 표시되나요?**
해당 지역이 적용되면 작업에 출장비가 추가돼요. 실제 운영 전에 견적서와 인보이스에 출장비가 어떻게 표시되는지 꼭 확인해보세요.

**제가 서비스하는 주소인데 고객이 예약할 수 없는 이유는 무엇인가요?**
해당 지역의 커버리지(반경 또는 우편번호)를 확인하고, 최소 한 명 이상의 직원이 배정되어 있는지 확인하세요.

---
*원문 최종 수정: 2026-10-29*
*Hyperclass 사용 가이드 — hyperclass.ai*