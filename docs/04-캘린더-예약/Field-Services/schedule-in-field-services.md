---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009379-schedule-in-field-services
번역일: 2026-11-02
카테고리: 04-캘린더-예약 > Field Services
---

# 필드 서비스(Field Services)의 스케줄

스케줄은 하루 일정을 한눈에 볼 수 있는 화면이에요. 모든 방문(Visit)을 목록이나 캘린더로 확인하고, 아직 시간이 정해지지 않은 작업을 찾고, 지도에서 방문 위치를 보고, 필요한 데이터를 내보내는 것까지 한 곳에서 할 수 있어요.

참고: 필드 서비스(Field Services)는 현재 비공개 베타(private beta) 단계이며 선택된 계정에서만 사용할 수 있어요. 기능과 화면은 개선 과정에서 변경될 수 있습니다.

## 이 문서에서 다루는 내용

- [스케줄 찾는 방법](#where)
- [목록 보기(List view)](#list)
- [캘린더 보기(Calendar view)](#calendar)
- [예약할 작업(Jobs to schedule) 패널](#jobs)
- [지도](#map)
- [캘린더 보기 설정](#settings)
- [스케줄 내보내기](#export)
- [모바일 앱에서 사용하기](#mobile)
- [자주 묻는 질문](#faq)

---

## 스케줄 찾는 방법

- 좌측 내비게이션에서 **Field Services(필드 서비스)**를 클릭하세요.
- **Schedule(스케줄)**을 클릭한 후 **List view(목록 보기)** 또는 **Calendar view(캘린더 보기)**를 선택하세요.

---

## 목록 보기(List view)

목록 보기에서는 각 방문이 한 행으로 표시되며, 연락처(Contacts), 제목, 상태, 방문 시간, 배정된 담당 직원, 그리고 연결된 작업(Job)이나 요청(Request) 정보를 확인할 수 있어요.

| 컨트롤 | 기능 |
|---|---|
| **탭** | **Upcoming(예정)**, **Unassigned(미배정, 아직 담당자가 없는 상태)**, **Completed(완료)**, **Cancelled(취소)**, **All(전체)** 탭을 전환할 수 있어요. |
| **+ Smart list(스마트 리스트)** | 설정한 필터 조건을 나만의 탭으로 저장할 수 있어요. |
| **Advanced filters(고급 필터)** | 다양한 항목으로 목록을 좁혀서 볼 수 있어요. |
| **Manage columns(열 관리)와 Customize list(목록 커스터마이즈)** | 어떤 열을 표시할지 선택할 수 있어요. |
| **Status(상태)** | 목록에서 바로 방문 상태를 변경할 수 있어요. |
| **New(신규)** | 요청(Request), 작업(Job) 또는 시간 차단(Time block)을 생성할 수 있어요. |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084171935/original/Q9iRkNleI7QTieRGqwf4DIupxwRjwjZCSQ.jpg)

---

## 캘린더 보기(Calendar view)

캘린더 보기는 방문을 날짜와 시간별로 배치해서 보여주며, 각 날짜마다 **Unassigned(미배정)** 방문을 모아놓은 열이 함께 표시돼요.

| 컨트롤 | 기능 |
|---|---|
| **탐색** | **Today(오늘)**를 클릭하거나 화살표를 사용해 기간을 이동할 수 있어요. **Week(주)** 메뉴로 표시 기간을 변경할 수 있어요. |
| **필터** | **All visits(전체 방문)**, **All service areas(전체 서비스 지역)**, **Staff(직원)** 필터로 필요한 항목만 표시할 수 있어요. 열에 표시할 직원도 선택할 수 있어요. |
| **Anytime(시간 미지정) 행** | 고정 시간 없이 예약된 방문이 여기에 표시돼요. |
| **New(신규)** | **Create request(요청 생성)**, **Create job(작업 생성)**, **Block off time(시간 차단)** 중 선택할 수 있어요. 시간 차단은 특정 직원의 일정에서 해당 시간을 예약되지 않도록 막아두는 기능이에요. |

방문을 클릭하면 상세 정보를 열고 상태를 변경할 수 있어요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162966/original/fBEhSS8-kKDlfBjlXz-pUwNmJ9t1NpE4RA.jpg?1792999597)

---

## 예약할 작업(Jobs to schedule) 패널

숫자가 표시된 캘린더 아이콘인 **Unscheduled(미예약)** 버튼을 클릭하면 **Jobs to schedule(예약할 작업)** 패널이 열려요. 아직 방문이 배정되지 않은 작업들이 최신순으로 나열되며, 작업 번호, 서비스 개수, 고객 정보를 확인할 수 있어요. 이 패널을 예약 작업을 위한 할 일 목록으로 활용해보세요. 자세한 내용은 [필드 서비스에서 방문 예약 및 가능 시간 찾기](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009377) 문서를 참고하세요.

---

## 지도

**Map(지도)** 버튼을 클릭하면 캘린더 옆에 지도가 표시돼요. 현재 보고 있는 기간의 방문 위치를 지도에 표시해서 방문지 간 거리를 한눈에 확인할 수 있어요. 표시할 방문이 없을 경우 지도에 표시할 방문이 없다는 안내가 나타나요.

---

## 캘린더 보기 설정

오른쪽 상단의 점 세 개 아이콘을 클릭하고 **Calendar view settings(캘린더 보기 설정)**을 선택하세요.

| 설정 항목 | 기능 |
|---|---|
| **View appointments in(예약 표시 시간대)** | 방문 표시에 사용되는 시간대예요. 기본값은 비즈니스 시간대예요. |
| **Grid interval(그리드 간격)** | 캘린더의 각 행이 나타내는 분(minute) 단위예요. 기본값은 30분이에요. |
| **Grey out hours outside working time(근무 외 시간 음영 처리)** | 직원이 근무하지 않는 시간대를 음영으로 표시해요. |
| **Show drive time & travel buffers(이동 시간 및 여유 시간 표시)** | 캘린더에 이동 시간과 방문 전 추가 여유 시간을 표시해요. |
| **Staff colors(직원별 색상)** | 각 직원에게 표시할 색상을 지정할 수 있어요. |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162700/original/X9hyFVgN3R_m0L9dxMhSaEijeEBl4g0CDg.jpg?1792999464)

같은 메뉴에서 **Scheduling tips(예약 팁)**도 열어볼 수 있어요. 한 주의 시작 요일을 변경하려면 **Field Services Settings(필드 서비스 설정) > Preferences and features(환경설정 및 기능) > Week starts on(주 시작 요일)** 메뉴를 사용하세요. 자세한 내용은 [필드 서비스 설정: 작업, 방문, 환경설정](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009386) 문서를 참고하세요.

---

## 스케줄 내보내기

점 세 개 메뉴에서 **Export to PDF(PDF로 내보내기)** 또는 **Export to CSV(CSV로 내보내기)**를 선택하면 현재 보기 기준으로 방문 내역을 내보낼 수 있어요. 해당 보기에 방문이 없는 경우 CSV로 내보내기 기능은 사용할 수 없어요.

---

## 모바일 앱에서 사용하기

팀원들은 모바일 앱으로도 하루 일정을 확인할 수 있어요. 직원들은 현장에서 스케줄과 캘린더를 확인하고, 방문을 예약하거나 일정을 변경하고, 방문 상태를 업데이트할 수 있어요. 변경 사항은 모바일 앱과 웹에서 동기화되므로 모두가 동일한 캘린더를 보게 돼요.

---

## 자주 묻는 질문

**캘린더에 일부 직원만 표시되는 이유는 무엇인가요?**
**Staff(직원)** 필터가 표시되는 직원을 제어해요. 필터를 열어서 사람을 추가하거나 제거할 수 있어요.

**캘린더에서 직원의 동선을 최적화할 수 있나요?**
네, 가능해요. 경로 최적화(Route optimization) 버튼을 클릭하세요. 자세한 내용은 [필드 서비스의 경로 최적화](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009380) 문서를 참고하세요.

**Unassigned(미배정) 열은 무슨 의미인가요?**
아직 담당 직원이 배정되지 않은 방문들이 모여있는 열이에요. 직원을 배정하면 해당 직원의 열로 이동해요.

---
*원문 최종 수정: Thu, 29 Oct, 2026 at 9:53 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*