---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007948-ask-the-booker-location-support-for-service-v2-mobile-appointments
번역일: 2026-08-11
카테고리: 04-캘린더-예약 > 서비스
---

# 서비스(Service) v2 모바일 예약을 위한 예약자 주소 입력(Ask the Booker) 위치 지원

예약자 주소 입력(Ask the Booker) 위치 지원 기능을 사용하면 모바일 앱에서 서비스(Service) v2 예약을 생성할 때 서비스 사업체가 고객의 서비스 주소를 수집할 수 있어요. 설정된 예약자 주소 입력 위치가 선택되면 주소 입력란이 나타나서 사용자가 서비스를 진행할 장소를 입력할 수 있어요. 저장된 주소는 예약 상세 화면에 표시되며, 예약을 편집하거나 복제할 때 자동으로 미리 입력돼요.

---

**목차**

- [예약자 주소 입력(Ask the Booker) 위치 지원이란?](#What-is-Ask-the-Booker-Location-Support?)
- [예약자 주소 입력 위치 지원의 주요 장점](#Key-Benefits-of-Ask-the-Booker-Location-Support)
- [사용 가능 범위 및 요구 사항](#Availability-and-Requirements)
- [웹에서 예약자 주소 입력 위치 설정하기](#Web-Setup-for-Ask-the-Booker-Locations)
- [모바일 앱에서 예약자 주소 입력 위치 선택하기](#Selecting-an-Ask-the-Booker-Location-in-the-Mobile-App)
- [필수 입력 서비스 주소 필드](#Required-Service-Address-Field)
- [예약에서 저장된 주소 확인하기](#Viewing-the-Saved-Address-on-the-Appointment)
- [예약자 주소 입력 위치가 적용된 예약 편집 또는 복제하기](#Editing-or-Duplicating-Appointments-with-Ask-the-Booker-Locations)
- [다중 위치 유형 동작](#Multiple-Location-Type-Behavior)
- [모바일 앱에서 예약자 주소 입력 위치 지원 사용하는 방법](#How-To-Use-Ask-the-Booker-Location-Support-in-the-Mobile-App)
- [자주 묻는 질문](#Frequently-Asked-Questions)

---

## 예약자 주소 입력(Ask the Booker) 위치 지원이란?

예약자 주소 입력 위치 지원 기능을 사용하면 서비스 캘린더(Service Calendar) v2 예약에서 예약 진행 중에 고객이 직접 입력한 서비스 주소를 수집할 수 있어요. 이 기능은 모바일 미용사, 수리 기사, 청소 업체, 컨설턴트, 트레이너 등 고객을 직접 방문하는 사업체에 유용해요.

이 위치 유형은 웹에서 설정하며, 한 번 활성화하면 모바일 앱에서도 서비스(Service) v2 예약 시 자동으로 지원돼요. 모바일 앱에서 예약자 주소 입력 위치를 선택하면 예약 양식에 필수 주소 입력란이 표시되어 예약에 정확한 서비스 장소가 포함돼요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071321756/original/9dGW0RwfC_jhe9_rfz9IZPabXRaPIqRi6w.png?1778757303)

---

## 예약자 주소 입력 위치 지원의 주요 장점

예약 진행 중에 서비스 주소를 수집하면 모바일 서비스 팀이 예약 전에 추가로 연락할 필요가 없어져요. 주소는 예약과 함께 바로 저장되어, 직원이 예약 화면에서 필요한 정보를 바로 확인할 수 있어요.

- **서비스 주소를 사전에 수집**: 고객의 집, 사업장, 또는 선호하는 서비스 주소를 예약 진행 중에 미리 수집해요.

- **수동 확인 작업 줄이기**: 서비스 진행 장소를 확인하기 위한 별도의 전화, 문자, 이메일 연락이 필요 없어져요.

- **주소 정보 누락 방지**: 필수 입력 유효성 검사를 통해 서비스 주소 없이는 예약이 제출되지 않도록 해요.

- **모바일 서비스 팀 지원**: 직원이 모바일 앱으로 작업하면서 고객이 입력한 주소에 바로 접근할 수 있어요.

- **예약 관련 작업에서 주소 정보 재사용**: 예약을 편집하거나 복제할 때도 저장된 주소가 계속 미리 입력돼요.

- **더 빠른 이동**: 예약 화면에서 주소를 복사하거나 지도 앱에서 위치를 열어 바로 이동할 수 있어요.

---

## 사용 가능 범위 및 요구 사항

예약자 주소 입력 위치 지원 기능은 서비스 캘린더(Service Calendar) v2 예약에서 사용할 수 있어요. 설정 상태와 앱 지원 여부를 확인하면 모바일 예약 흐름에서 주소 입력란이 정확하게 표시되는지 확인할 수 있어요.

이 기능은 다음 환경에서 사용할 수 있어요:

- 서비스 캘린더(Service Calendar) v2 예약에서만 사용 가능

- 하이퍼클래스 모바일 앱

- 하이퍼클래스 모바일 앱

- 화이트라벨 모바일 앱

- 모바일 앱 버전 4.10.0 (810) 이상

- 웹 및 모바일 서비스(Service) v2 예약 흐름

예약자 주소 입력 위치 유형은 웹에서 `Calendar Settings(캘린더 설정) → Services (v2)(서비스) → Locations(위치)` 메뉴에서 설정해요. 설정이 완료되면, 해당 위치가 선택될 때 모바일 앱에서 자동으로 서비스 주소 입력란이 표시돼요.

---

## 웹에서 예약자 주소 입력 위치 설정하기

예약자 주소 입력 위치는 웹 앱에서 생성하고 관리해요. 이 설정을 통해 서비스(Service) v2 예약 흐름에서 고객이 선호하는 서비스 주소를 언제 물어봐야 하는지를 지정할 수 있어요.

위치를 설정하려면:

- `Calendar Settings(캘린더 설정) → Services (v2)(서비스) → Locations(위치)`로 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077026147/original/FicfTGTCaN7ZHN2fPnQyhB3JQIzkz8gg_A.png?1785240655)

- 새 위치를 만들거나 기존 위치를 편집하세요.

- **Let bookers enter their own service address(예약자가 직접 서비스 주소를 입력하도록 허용)** 옵션을 활성화하세요.

- 필요에 따라 해당 위치를 직원의 예약 가능 시간(Availability)에 배정하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077026401/original/CAPwLWfqL0yXmgyhXrzTAat8j8cjrm8YRA.png?1785240783)

- 위치 설정을 저장하세요.

설정이 완료되면, 사용자는 모바일 앱에서 서비스(Service) v2 예약을 생성할 때 해당 위치를 선택할 수 있어요.

---

## 모바일 앱에서 예약자 주소 입력 위치 선택하기

모바일 예약 양식은 선택한 위치 유형에 따라 달라져요. 사용자가 예약자 주소 입력 위치를 선택하면, 예약이 확정되기 전에 서비스 주소를 수집할 수 있도록 앱에서 추가 주소 입력란이 표시돼요.

위치를 선택하려면:

- 모바일 앱을 여세요.

- **Calendars(캘린더)** 메뉴로 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077026899/original/YXUfn2tvREPJXqWPPwk75J4eu7Lgv09ejw.png?1785241131)

- **+ New Service Appointment(새 서비스 예약 추가)**를 탭하거나, 연락처(Contacts), 대화(Conversations), 또는 기회 관리(Opportunities)에서 서비스(Service) v2 예약을 시작하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077027446/original/VUlZlBhPBVytZkTxFhufNByQ_97BhGV15w.png?1785241427)

- **Location Details(위치 세부 정보)**에서 위치 드롭다운을 탭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077028409/original/iaRPauC4qyycPQKUywjpz6w2QbmEc_sXHg.png?1785241827)

- 예약자에게 주소를 입력받도록 설정된 위치(예: Enter manual)를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077028630/original/iarEk1hp2deFF2a9i1vzZ9xR61Eq3R-OCg.png?1785241901)

---

## 필수 입력 서비스 주소 필드

예약자 주소 입력 위치를 선택하면 서비스 주소 입력란은 필수 항목이 돼요. 이를 통해 직원이 서비스를 완료하는 데 필요한 주소 없이 예약이 잡히는 것을 방지할 수 있어요.

예약자 주소 입력 위치를 선택한 후, 주소 입력란에 고객의 서비스 주소를 입력하세요. 입력란을 비워두면 앱에서 **Please enter a location(위치를 입력해 주세요)**와 같은 인라인 유효성 검사 메시지가 표시되며, 주소를 입력하기 전까지는 예약을 잡을 수 없어요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071322053/original/ZRjesKACBrIZYqRWMW0xw43LC7Z_r408nw.png?1778757507)

---

## 예약에서 저장된 주소 확인하기

저장된 서비스 주소는 예약이 생성된 후 예약 상세 화면에 바로 표시돼요. 이를 통해 직원은 메모나 메시지를 일일이 찾아볼 필요 없이 필요한 주소에 빠르게 접근할 수 있어요.

예약 상세 화면에서 주소는 **Location Details(위치 세부 정보)** 항목 아래에 표시돼요. 사용자는 복사 아이콘으로 주소를 복사하거나 **View Location(위치 보기)**을 탭해서 지도 내비게이션을 열 수 있어요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071322186/original/3vV9PoUZRWF-ZOMw1VYwvO32pGOPJgeOcA.png?1778757578)

---

## 예약자 주소 입력 위치가 적용된 예약 편집 또는 복제하기

예약자 주소 입력 정보는 편집 및 복제 과정에서도 예약과 계속 연결돼요. 이를 통해 이미 수집된 정보를 다시 입력하지 않고도 변경할 수 있어요.

서비스(Service) v2 예약을 편집하거나 복제할 때:

- 이전에 입력한 서비스 주소가 미리 입력돼요.

- 사용자는 기존 주소를 그대로 유지하거나 수정할 수 있어요.

- 선택된 위치가 여전히 예약자 주소 입력 위치라면 주소는 계속 필수 항목으로 유지돼요.

- 변경 작업이 완료되면 수정되거나 복사된 주소가 예약에 저장돼요.

이 기능은 재방문 고객을 다시 예약하거나 기존 예약을 조정할 때, 원래 서비스 주소를 그대로 유지하고 싶을 때 유용해요.

---

## 다중 위치 유형 동작

일부 위치는 하나 이상의 위치 유형을 포함할 수 있어요. 예약 양식의 동작은 예약 흐름 중에 선택된 위치 유형을 기준으로 결정돼요.

선택한 위치가 예약자에게 서비스 주소를 물어보도록 설정되어 있다면, 주소 입력란이 표시되고 필수 항목이 돼요. 다른 위치 유형이 선택된 경우에는 해당 위치 유형의 동작을 따라요.

---

## 모바일 앱에서 예약자 주소 입력 위치 지원 사용하는 방법

예약자 주소 입력 위치 지원 기능을 사용하면 모바일 사용자가 서비스(Service) v2 예약을 생성하는 동안 고객의 서비스 주소를 입력할 수 있어요. 웹 앱에서 위치를 설정하고 나면, 모바일 예약 시 해당 위치를 선택하면 필수 주소 입력란이 표시돼요.

진행하기 전에 모바일 앱 버전이 4.10.0 (810) 이상인지 확인하세요.

- 웹 앱의 `Calendar Settings(캘린더 설정) → Services (v2)(서비스) → Locations(위치)`에서 예약자 주소 입력 위치가 설정되어 있는지 확인하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077066827/original/4SMIHcGetcD_0NmTJFbdPym9-zcmv4wnkg.jpeg?1785259791)

- 하이퍼클래스 또는 화이트라벨 모바일 앱을 여세요.

- **Calendars(캘린더)** 메뉴로 이동하세요.

- **+ New Service Appointment(새 서비스 예약 추가)**를 탭하세요.

연락처(Contacts), 대화(Conversations), 또는 기회 관리(Opportunities)에서도 서비스(Service) v2 예약을 시작할 수 있어요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077067412/original/V0HWAif66RpbFl85vxt1xMGsjSd5iuq_cg.jpeg?1785260383)

- 고객을 검색하고 선택하세요.

- **Location Details(위치 세부 정보)**에서 위치 드롭다운을 탭하세요.

- 예약자의 서비스 주소를 수집하도록 설정된 위치를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077067467/original/dhRUasc0gz-KjlvNt2WIaukXGrFzwYKIew.png?1785260442)

- 필수 주소 입력란에 고객의 서비스 주소를 입력하세요.

서비스 주소를 입력하기 전까지는 예약을 잡을 수 없어요.

- 해당 서비스, 담당 직원, 날짜, 시간, 예약 상태를 추가하세요.

- 예약 정보를 검토한 후 **Schedule Booking(예약 확정)**을 탭하세요.

- 예약 상세 화면을 열어 **Location Details(위치 세부 정보)**에 저장된 주소가 표시되는지 확인하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077067502/original/B4n4kNnC9nFPlh73Se0s5h8KSPdnghfzig.png?1785260494)

예약 상세 화면에서 사용자는 주소를 복사하거나 **View Location(위치 보기)**을 탭해서 기기의 지도 앱으로 열 수 있어요.

---

## 자주 묻는 질문

**Q: 예약자 주소 입력 위치 지원 기능은 모든 캘린더 유형에서 사용할 수 있나요?**
A: 아니요. 이 기능은 서비스 캘린더(Service Calendar) v2 예약에서만 사용할 수 있어요.

**Q: 예약자 주소 입력 위치는 어디서 설정하나요?**
A: 웹의 `Calendar Settings(캘린더 설정) → Services (v2)(서비스) → Locations(위치)`에서 설정해요.

**Q: 서비스 주소는 필수 입력 항목인가요?**
A: 네. 예약자 주소 입력 위치를 선택하면 예약을 잡기 전에 주소 입력란을 반드시 작성해야 해요.

**Q: 왜 예약을 잡을 수 없나요?**
A: 선택한 위치가 예약자에게 서비스 주소 입력을 요구하는 경우, 주소 입력란을 완성하기 전까지는 예약을 잡을 수 없어요.

**Q: 저장된 주소는 어디에 표시되나요?**
A: 저장된 주소는 예약 상세 화면의 **Location Details(위치 세부 정보)** 항목에 표시돼요.

**Q: 예약을 편집하거나 복제할 때 주소가 미리 입력되나요?**
A: 네. 서비스(Service) v2 예약을 편집하거나 복제할 때 이전에 입력한 서비스 주소가 미리 입력돼요.

**Q: 직원이 주소를 복사하거나 지도 앱에서 열 수 있나요?**
A: 네. 예약 상세 화면에서 저장된 주소에 대한 복사 및 **View Location(위치 보기)** 옵션을 제공해요.

**Q: 이 기능은 어떤 모바일 앱에서 사용할 수 있나요?**
A: 이 기능은 하이퍼클래스 모바일 앱과 화이트라벨 모바일 앱에서 사용할 수 있어요.

**Q: 필요한 앱 버전은 무엇인가요?**
A: 모바일 앱 버전 **4.10.0 (810)** 이상이 필요해요.

---
*원문 최종 수정: 2026-07-28*
*Hyperclass 사용 가이드 — hyperclass.ai*