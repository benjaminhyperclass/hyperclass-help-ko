---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009368-field-services-overview-how-to-get-started
번역일: 2026-11-02
카테고리: 04-캘린더-예약 > Field Services
---

# Field Services 개요 및 시작 가이드

Field Services는 HVAC(냉난방), 배관, 전기, 청소, 조경 등 고객의 현장에서 작업을 수행하는 비즈니스를 위한 하이퍼클래스의 엔드투엔드 모듈이에요. 요청 접수부터 견적, 방문 일정 관리 및 배차, 경로 최적화, 작업 추적, 인보이스(청구서) 발행, 고객 알림까지 전체 작업 라이프사이클을 한곳에서 관리할 수 있어요.

이 아티클에서는 Field Services에 포함된 기능과 각 요소가 어떻게 연결되는지, 그리고 권장하는 설정 순서를 설명드려요.

참고: Field Services는 현재 비공개 베타(private beta) 단계이며, 선택된 계정에만 제공돼요. 일부 기능은 아직 개발 중이며 정식 출시 전에 변경될 수 있어요.

**목차**

- [Field Services란?](#what-is)
- [주요 이점](#benefits)
- [Field Services 라이프사이클](#lifecycle)
- [Field Services 찾는 방법](#where)
- [핵심 개념: 요청, 작업, 방문](#concepts)
- [용어 정리](#glossary)
- [권장 설정 순서](#setup)
- [향후 추가될 기능](#upcoming)
- [자주 묻는 질문](#faq)

---

## Field Services란?

Field Services는 고객을 직접 찾아가는 팀을 위해 만들어졌어요. 폼 도구, 캘린더, 배차 스프레드시트, 인보이스 앱을 따로따로 연결해서 쓰는 대신, 전체 워크플로우를 한곳에서 운영할 수 있어요.

- **작업 접수:** 고객이 브랜드 예약 페이지에서 직접 요청을 제출하거나 예약하고, 팀에서도 앱 안에서 요청과 작업을 직접 만들 수 있어요.
- **작업 정리:** **작업(Job)**에는 고객 정보, 서비스 주소, 서비스, 상품, 가격 정보가 담겨요. 하나의 작업에는 여러 건의 방문이 포함될 수 있어요.
- **일정 관리 및 배차:** 직원에게 방문을 배정하고, 근무 시간·보유 기술·서비스 지역·이동 시간을 기준으로 빈 시간을 찾은 후, 캘린더나 지도에서 하루 일정을 확인하고 각 기술자의 경로를 최적화할 수 있어요.
- **작업 수행:** 직원은 방문 상태를 업데이트하고, 체크리스트를 따라 작업하며, 메모를 남기고, Timesheets(타임시트) 기능이 켜져 있다면 근무 시간을 기록해요.
- **대금 수령:** 작업에서 견적서와 인보이스를 생성하고 결제를 받을 수 있어요.
- **고객과의 소통 유지:** 이메일, SMS(문자) 또는 왓츠앱으로 확인 메시지, 리마인더, "직원 출발" 알림 등을 보낼 수 있어요.

**누가 사용하나요?**

- **대표 및 관리자**는 Home(홈), Schedule(일정), Invoices(인보이스) 화면을 통해 비즈니스 운영 현황을 확인해요.
- **사무실 직원 및 배차 담당자**는 요청을 분류하고, 작업을 생성하고, 방문 일정을 잡고, 경로를 최적화해요.
- **현장 직원**은 자신의 방문 일정을 확인하고, 상태를 업데이트하고, 체크리스트를 진행하며, 메모를 추가해요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162845/original/mlfS63rdyUHPe8uhD6TgPK_C95WAjddKfw.jpg?1792999536)

---

## 주요 이점

- **요청부터 인보이스까지 하나의 워크플로우:** 견적, 일정 관리, 청구를 위해 여러 도구를 오갈 필요가 없어요.
- **더 똑똑한 일정 관리:** 예약 가능 시간은 직원의 근무 시간, 배정된 서비스, 서비스 지역, 기존 예약, 이동 시간을 모두 반영해요.
- **이동 시간 단축:** 경로 최적화 기능이 기술자의 하루 일정을 재배열해 이동 거리를 최소화하고, 절약된 시간을 보여줘요.
- **명확한 서비스 범위 규칙:** 서비스 제공 지역을 설정하고, 출장비를 부과하며, 서비스 지역 밖 고객에 대한 처리 방식을 결정할 수 있어요.
- **고객 셀프 예약:** 브랜드 예약 페이지가 고객 주소를 확인하고, 가능한 시간을 보여주며, 예약이나 요청을 접수해요.
- **전체 팀을 위한 하나의 화면:** 사무실 직원, 배차 담당자, 대표, 현장 직원 모두가 동일한 작업, 방문, 상태 정보를 확인할 수 있어요.

---

## Field Services 라이프사이클

대부분의 작업은 동일한 흐름을 따라요. 어느 단계에서든 시작할 수 있어요. 예를 들어 요청 없이 작업을 바로 생성하거나, 견적 없이 방문 일정을 바로 잡을 수도 있어요.

| 단계 | 내용 | 위치 | 더 알아보기 |
|---|---|---|---|
| **1. 설정** | 서비스 지역, 직원, 서비스를 추가하고, 예약·결제·알림을 구성해요. | Services & staff(서비스 및 직원), Settings(설정) | [Field Services의 서비스 지역](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009371)<br>[Field Services의 직원](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009372)<br>[Field Services의 서비스 및 애드온](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009373) |
| **2. 접수** | 고객이 온라인으로 예약하거나 요청을 보내고, 또는 팀이 직접 생성해요. | Requests(요청), 예약 페이지 | [Field Services의 요청](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009375)<br>[Field Services 설정: 온라인 예약](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009385) |
| **3. 견적** | 요청을 견적서로 전환하고 승인을 위해 발송해요. | Estimates(견적서) | [Field Services의 견적서 및 인보이스](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009381) |
| **4. 정리** | 고객, 주소, 서비스, 상품, 가격 정보를 포함한 작업을 생성해요. | Jobs(작업) | [Field Services의 작업](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009376) |
| **5. 일정 관리** | Find availability(예약 가능 시간 찾기)를 사용해 하나 이상의 방문 일정을 잡고 직원을 배정해요. | Job, Schedule | [Field Services에서 방문 일정 관리 및 예약 가능 시간 찾기](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009377)<br>[Field Services의 Schedule](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009379) |
| **6. 배차** | 캘린더와 지도로 하루 일정을 검토하고 각 기술자의 경로를 최적화해요. | Schedule > Calendar view(캘린더 보기) | [Field Services의 경로 최적화](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009380) |
| **7. 작업 수행** | 직원이 상태를 업데이트하고, 체크리스트를 진행하며, 메모를 추가하고, 시간을 기록해요. | Visit drawer(방문 상세 패널), Timesheets | [Field Services의 방문 상태](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009378)<br>[Field Services의 체크리스트, 메모, 폼](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009382)<br>[Field Services의 Timesheets](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009383) |
| **8. 대금 수령** | 작업에 대한 인보이스를 발행하고 결제를 받아요. | Invoices(인보이스) | [Field Services의 견적서 및 인보이스](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009381) |
| **9. 소통 유지** | 고객, 직원, 배차 담당자가 각 단계마다 알림을 받아요. | Settings > Notifications(알림) | [Field Services의 알림](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009384) |

---

## Field Services 찾는 방법

하위 계정(Sub-account)에서 Field Services가 활성화되면, 좌측 네비게이션 메뉴에 **Beta** 태그가 붙은 **Field Services** 항목이 나타나요. 클릭하면 모듈이 열려요. 상단 메뉴에는 다음 탭들이 있어요.

| 탭 | 내용 | 더 알아보기 |
|---|---|---|
| **Home(홈)** | 결제, 일정 진행 상황, 처리가 필요한 작업에 대한 오늘의 요약 정보예요. | [Field Services Home 개요](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009370) |
| **Schedule(일정)** | 모든 방문을 **목록 보기(List view)**와 Day(일), Timeline(타임라인), Week(주), Month(월) 레이아웃을 지원하는 **캘린더 보기(Calendar view)**, 지도, 경로 최적화 기능으로 확인할 수 있어요. | [Field Services의 Schedule](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009379) |
| **Requests(요청)** | 고객과 팀에서 들어온 작업 요청이에요. | [Field Services의 요청](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009375) |
| **Estimates(견적서)** | 요청이나 작업에서 생성된 견적서예요. | [Field Services의 견적서 및 인보이스](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009381) |
| **Jobs(작업)** | 각 고객을 위해 진행 중인 작업과 그에 속한 방문 내역이에요. | [Field Services의 작업](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009376) |
| **Invoices(인보이스)** | 작업에서 발행된 인보이스예요. | [Field Services의 견적서 및 인보이스](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009381) |
| **Timesheets(타임시트)** | 직원이 방문별로 기록한 근무 시간이에요(활성화 시). | [Field Services의 Timesheets](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009383) |
| **Services & staff(서비스 및 직원)** | 직원, 서비스 지역, 서비스, 애드온, 가져오기 도구가 있어요. | [Field Services의 직원](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009372)<br>[Field Services의 서비스 지역](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009371)<br>[Field Services의 서비스 및 애드온](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009373)<br>[Field Services로 서비스 가져오기](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009374) |
| **Settings(설정)** | 전역 설정, 알림, 예약 페이지 편집기, AI 리셉셔니스트, 구글 오가닉 예약 기능이 있어요. | [Field Services 설정: 온라인 예약](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009385)<br>[Field Services 설정: 작업, 방문, 환경설정](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009386)<br>[Field Services 예약 페이지 편집기](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009387)<br>[Field Services의 AI 리셉셔니스트 및 구글 오가닉 예약](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009388) |

처음 Field Services를 열면 Home 화면에 대시보드 대신 환영 페이지가 표시돼요. 이 페이지는 모듈을 소개하고 설정 과정을 안내해서 약 5분 만에 예약을 받을 수 있도록 도와드려요. 설정이 완료되면 Home 화면에 일일 대시보드가 표시돼요. 자세한 내용은 [Field Services Home 개요](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009370)를 참고하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084207057/original/pQjrpacK4KPeYK2GfiCbuu0DLghG8k-NdQ.jpg)

---

## 핵심 개념: 요청, 작업, 방문

Field Services의 핵심에는 세 가지 객체가 있어요. 이들이 어떻게 연결되는지 이해하면 나머지 기능을 훨씬 쉽게 다룰 수 있어요.

- **요청(Request):** 고객의 작업 요청이에요. 요청에는 설명, 사진, 서비스 및 상품, 그리고 작업 범위를 파악하기 위한 선택적 현장 방문이 포함될 수 있어요. 요청은 견적서나 작업으로 전환할 수 있어요.
- **작업(Job):** 특정 서비스 주소에서 고객을 위해 진행하는 전체 작업이에요. 작업에는 서비스, 상품, 가격, 체크리스트, 메모, 인보이스, 결제 정보가 담겨요.
- **방문(Visit):** 작업의 일부를 수행하기 위해 예약된 일정이에요. 하나의 작업에는 하나 또는 여러 건의 방문이 있을 수 있으며, 각 방문에는 날짜와 시간, 배정된 직원, 상태가 있어요.

기억해 두면 좋은 몇 가지 규칙이 있어요.

- 작업은 **방문 없이도** 존재할 수 있어요. 방문 일정을 잡기 전까지는 미예약(unscheduled) 상태로 남아있어요.
- 방문에는 **최소 하나의 서비스**가 포함되어야 해요. 서비스가 소요 시간과 배정 가능한 직원을 결정하기 때문이에요.
- 방문에 서비스를 추가하면 해당 작업에도 자동으로 추가돼요.
- 작업의 상태는 방문이 진행됨에 따라 자동으로 업데이트돼요. 직접 수동으로 설정하지 않아도 돼요.

팁: 작업은 "우리가 하는 일"로, 방문은 "언제, 누가 하는지"로 생각하면 이해하기 쉬워요.

---

## 용어 정리

| 용어 | 의미 |
|---|---|
| **서비스(Service)** | "에어컨 점검"처럼 판매하는 작업 항목으로, 소요 시간, 가격, 담당 가능한 직원이 정해져 있어요. |
| **애드온(Add-on)** | 하나 이상의 서비스에 추가로 붙는 선택 옵션이에요. 예: "필터 추가 교체" |
| **직원(Staff)** | 현장에 나가서 작업을 수행하는 인원이에요. 각 직원마다 근무 시간, 배정된 서비스, 담당 가능한 서비스 지역, 경로 시작/종료 지점이 설정되어 있어요. |
| **서비스 지역(Service area)** | 반경 또는 우편번호로 정의된, 서비스를 제공하는 지리적 범위예요. 출장비와 추가 이동 시간을 설정할 수 있어요. |
| **예약 가능 시간 찾기(Find availability)** | 근무 시간, 서비스, 지역, 기존 예약, 이동 시간을 기준으로 가능한 시간을 추천해주는 일정 관리 도우미예요. |
| **경로 최적화(Route optimization)** | 특정 날짜의 기술자 방문 순서를 재배열해 이동 시간을 줄여줘요. 특정 방문은 순서를 고정할 수도 있어요. |
| **체크리스트(Checklist)** | 직원이 방문 중에 완료해야 할 작업 목록으로, 반복해서 사용할 수 있어요. |
| **타임시트(Timesheet)** | 직원이 방문별로 기록한 근무 시간 내역이에요. |

---

## 권장 설정 순서

각 단계가 필요한 정보를 갖추도록 다음 순서대로 설정하는 것을 권장해요.

신규 계정은 Field Services를 열면 **예약 준비하기(Get ready to take bookings)** 체크리스트가 담긴 환영 페이지가 표시돼요. 여기에는 직원 추가, 서비스 지역 검토, 서비스 추가 등 동일한 설정 과정이 포함돼요. 환영 페이지에 대한 자세한 투어는 [Field Services Home 개요](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009370)를 참고하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084207080/original/zTw2-V4N61iYKIJiaAcjsQtihwNmrYPmZw.jpg)

- **서비스 지역을 생성하세요.** **Field Services > Services & staff > Service areas**로 이동하세요. 기본(Default) 지역이 자동으로 생성되어 있어요. 이를 수정하거나 추가로 등록할 수 있어요. 자세한 내용은 [Field Services의 서비스 지역](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009371)을 참고하세요.
- **직원을 추가하세요.** **Services & staff > Staff**로 이동해 근무 시간, 배정된 서비스, 담당 가능한 서비스 지역, 경로 시작/종료 지점을 설정하세요. 자세한 내용은 [Field Services의 직원](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009372)을 참고하세요.
- **서비스와 애드온을 생성하세요.** **Services & staff > Services**로 이동하세요. 기존 서비스를 가져올 수도 있어요. 자세한 내용은 [Field Services의 서비스 및 애드온](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009373)과 [Field Services로 서비스 가져오기](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009374)를 참고하세요.
- **Field Services 설정을 검토하세요.** 고객 예약 방식을 선택하고, 결제를 설정하고, 요청 양식을 검토하세요. 자세한 내용은 [Field Services 설정: 온라인 예약](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009385)과 [Field Services 설정: 작업, 방문, 환경설정](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009386)을 참고하세요.
- **예약 페이지를 커스터마이징하세요.** 자세한 내용은 [Field Services 예약 페이지 편집기](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009387)를 참고하세요.
- 고객, 배정된 직원, 배차 담당자를 위한 **알림을 설정하세요.** 자세한 내용은 [Field Services의 알림](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009384)을 참고하세요.
- **첫 요청 또는 작업을 생성**하고 방문 일정을 잡으세요. 자세한 내용은 [Field Services의 요청](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009375), [Field Services의 작업](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009376), [Field Services에서 방문 일정 관리 및 예약 가능 시간 찾기](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009377)를 참고하세요.

팁: 고객에게 온라인 예약을 안내하기 전에, 직접 예약 페이지를 열어서 서비스 지역 내 주소로 테스트 예약을 진행해보세요.

---

## 향후 추가될 기능

Field Services는 계속해서 확장되고 있어요. 비공개 베타 이후 예정된 기능은 다음과 같아요.

- 리소스 및 대기자 명단(waitlist)
- 리포팅
- 클라이언트 포털
- 음성 AI 지원
- Housecall Pro, Jobber 등 추가 가져오기 도구

일정은 변경될 수 있어요. 관련 아티클에 별도로 명시되지 않은 한, 여기에 나열된 기능들은 비공개 베타 기간 동안에는 제공되지 않아요.

---

## 자주 묻는 질문

**Q: Field Services를 사용하려면 어떻게 해야 하나요?**
Field Services는 현재 비공개 베타 단계예요. 하이퍼클래스가 선택된 계정에 한해 이 기능을 활성화해요. 활성화되면 하위 계정의 좌측 네비게이션 메뉴에서 Field Services를 확인할 수 있어요. 자세한 내용은 [Field Services 비공개 베타 가이드](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009369)를 참고하세요.

**Q: Field Services는 Services(서비스) 기능과 같은 건가요?**
아니에요. Services는 매장 내 또는 온라인으로 진행되는 예약을 위한 하이퍼클래스의 예약 도구예요. 반면 Field Services는 고객의 현장에서 진행되는 작업을 위해 만들어졌으며, 요청, 작업, 다중 방문 일정 관리, 배차 및 경로 관리 기능을 포함해요. 가져오기 도구를 이용하면 기존 서비스를 Field Services로 가져올 수 있어요. 자세한 내용은 [Field Services로 서비스 가져오기](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009374)를 참고하세요.

**Q: Field Services의 "직원(staff)"은 누구를 말하나요?**
직원은 현장에 나가서 작업을 수행하는 인원을 말해요. 이들은 하위 계정의 사용자이며, 근무 시간, 서비스, 서비스 지역이 설정되어 있어요. 사무실 직원, 대표, 배차 담당자는 방문에 배정되지 않고도 Field Services를 사용할 수 있어요.

**Q: 하나의 작업에 여러 건의 방문을 포함할 수 있나요?**
네, 가능해요. 작업에 필요한 만큼 여러 건의 방문을 포함할 수 있어요. 예를 들어 진단 방문 후 설치 방문을 이어서 진행할 수 있어요.

**Q: 한 방문에 여러 명의 기술자를 배정할 수 있나요?**
네, 가능해요. 직원은 방문 내 서비스 단위로 배정되기 때문에, 규모가 큰 방문에는 여러 기술자를 배정할 수 있어요.

**Q: 고객이 직접 예약할 수 있나요?**
네, 가능해요. 예약 페이지를 통해 고객이 자신의 주소를 확인하고, 서비스를 선택하고, 시간을 고를 수 있어요. 또는 검토를 위해 요청을 보낼 수도 있어요. 자세한 내용은 [Field Services 설정: 온라인 예약](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009385)과 [Field Services 예약 페이지 편집기](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009387)를 참고하세요.

**Q: 결제 공급업체를 꼭 연동해야 하나요?**
시작할 때는 필요하지 않아요. 고객이 예약 시 온라인으로 결제하길 원하는 경우에만 결제 공급업체가 필요해요. 연동하기 전까지는 예약 페이지에서 **현장 결제(Pay in-person)** 옵션을 사용하세요. 자세한 내용은 [Field Services 설정: 온라인 예약](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009385)을 참고하세요.

**Q: Field Services를 모바일에서도 사용할 수 있나요?**
네, 가능해요. 팀원들은 모바일 앱에서 요청과 작업을 관리하고, 방문 일정을 잡거나 변경하고, 방문 상태를 바꾸고, 체크리스트·메모·타이머 기능을 사용할 수 있어요. 변경 사항은 모바일 앱과 웹 사이에 동기화되므로 현장과 사무실이 항상 같은 정보를 공유할 수 있어요. 설치하려면 Field Services 환영 페이지의 QR 코드를 스캔하거나, App Store 또는 Google Play에서 앱을 검색한 후 웹과 동일한 계정으로 로그인하세요.

---
*원문 최종 수정: 2026-10-29*
*Hyperclass 사용 가이드 — hyperclass.ai*