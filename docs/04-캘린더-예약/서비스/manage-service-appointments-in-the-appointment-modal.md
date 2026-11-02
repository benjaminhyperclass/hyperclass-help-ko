---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009521-manage-service-appointments-in-the-appointment-modal
번역일: 2026-11-02
카테고리: 04-캘린더-예약 > 서비스
---

# 예약 모달(Appointment Modal)에서 서비스 예약 관리하기

예약 모달(Appointment Modal)을 사용하면 서비스(Service) 예약을 더욱 효율적으로 관리할 수 있어요. 예약 세부 정보를 확인하고, 예약을 편집하거나 복제하고, 일정 변경 링크를 생성하고, 차단 슬롯을 만들고, 배정된 리소스를 확인할 수 있습니다. 또한 서비스 예약 생성 시 첨부된 접수 양식(intake form)도 확인할 수 있어요.

---

**목차**

- [서비스 예약을 위한 예약 모달이란?](#What-is-the-Appointment-Modal-for-Service-Appointments?)
- [서비스 예약 관리의 주요 장점](#Key-Benefits-of-Managing-Service-Appointments)
- [예약 모달 접근 방법](#How-to-Access-the-Appointment-Modal-for-Service-Appointments)
- [제출된 서비스 예약 양식 확인하기](#View-a-Submitted-Service-Booking-Form)
- [일정 변경 링크 생성 및 복사하기](#Generate-and-Copy-a-Reschedule-Link)
- [서비스 예약 편집하기](#Edit-Service-Appointments)
- [서비스 예약 복제하기](#Duplicate-Service-Appointments)
- [서비스 캘린더(Service Calendar)의 차단 슬롯](#Blocked-Slots-on-Your-Service-Calendar)
- [예약 모달에서 리소스 표시하기](#Show-Resource-in-Appointment-Modal)
- [서비스 알림에서 커스텀 값(Custom Value) 사용하기](#Use-Custom-Values-in-Service-Notifications??)
- [자주 묻는 질문](#Frequently-Asked-Questions)

---

# **서비스 예약을 위한 예약 모달이란?**

예약 모달(Appointment Modal)은 관리자와 팀원이 개별 서비스 예약(Service booking)을 확인하고 조치를 취할 수 있는 사이드 패널입니다. 세부 정보 편집, 일정 변경, 예약 복제, 제출된 예약 양식 확인 등 핵심 작업을 한곳에 모아두어, 팀이 여러 화면을 오가지 않고도 정확한 캘린더를 유지할 수 있도록 도와줍니다.

---

## **서비스 예약 관리의 주요 장점**

예약 세부 정보를 한곳에서 관리하면 팀원이 여러 화면을 오가지 않고도 일정 변경에 대응하고 고객 정보를 확인할 수 있어요.

- **속도:** 페이지를 벗어나지 않고 서비스 예약을 편집하고 일정을 변경할 수 있어요.

- **제어:** 예약 가능 시간대에서 불가능한 시간을 차단할 수 있어요.

- **확장성:** 반복 고객이나 유사한 고객을 위해 예약을 복제할 수 있어요.

- **양식 가시성:** 서비스 예약 생성 시 첨부된 접수 양식(intake form) 제출 내용을 확인할 수 있어요.

---

## **서비스 예약을 위한 예약 모달 접근 방법**

서비스 예약을 열면 예약 세부 정보(Booking Details) 사이드 패널이 표시되며, 여기서 정보를 확인하고 사용 가능한 예약 작업을 실행할 수 있어요.

- **캘린더(Calendars) → 캘린더 보기(Calendar View)**(또는 **예약 목록 보기(Appointment List View)**)로 이동한 후 **서비스(Services)**를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084556058/original/zErCmaHPv9E13YsTKVPiqadVflmHq1jKCA.png?1793336761)

- 예약을 클릭하여 사이드 패널(예약 모달)에서 **예약 세부 정보(Booking Details)**를 여세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084555959/original/1epvOS5fDj6Apcxo5C3BKaHzm3IqvaZPfg.png?1793336589)

---

## **제출된 서비스 예약 양식 확인하기**

서비스 예약 생성 시 양식이 첨부된 경우, 제출된 응답 내용을 예약 세부 정보(Booking Details)에서 확인할 수 있어요. 이를 통해 팀이 저장된 예약과 함께 고객 접수 정보를 바로 확인할 수 있습니다.

- **캘린더(Calendars) → 캘린더 보기(Calendar View)**로 이동한 후 **서비스(Services)**를 선택하세요.

- 저장된 서비스 예약을 선택하여 **예약 세부 정보(Booking Details)**를 여세요.

- 예약 세부 정보 패널에서 양식 아이콘을 클릭하여 **양식 제출 내역(Form submission)**을 여세요.

- 제출된 답변을 확인하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084553858/original/jwzTo6uFUfoK6vCGKnz0RGyd4owWinuOnw.png?1793330343)

**중요:** 양식은 예약 생성 시에만 첨부할 수 있어요. 기존 예약에 양식을 추가하거나, 이미 제출된 양식을 나중에 수정할 수는 없습니다.

---

## **일정 변경 링크 생성 및 복사하기**

고객이 직접 새로운 시간을 선택하도록 하고 싶을 때는 예약의 일정 변경 링크를 사용하세요. 기존 서비스 예약에서 직접 링크를 생성하여 원하는 커뮤니케이션 채널로 공유할 수 있어요.

- **서비스 예약**을 여세요.

- **예약 작업(Appointment Actions)**을 클릭하세요.

- **일정 변경 링크 생성(Generate Reschedule Link)**을 선택하세요.

- 링크가 생성되면 **링크 복사(Copy Link)**를 클릭하세요.

- 링크를 고객에게 공유하세요.

고객은 공유된 링크를 열어 기존 일정 변경 절차를 통해 새로운 예약 시간을 선택할 수 있어요.

---

## **서비스 예약 편집하기**

편집 가능 범위는 결제 여부에 따라 달라집니다. 결제되지 않은 예약은 더 많은 변경이 가능하지만, 결제된 예약은 기존 예약 및 결제 정보를 보호하기 위해 구조적인 편집이 제한됩니다.

### **결제되지 않은 예약 편집하기**

사용자는 취소하거나 재예약하지 않고도 편집 화면에서 직접 결제되지 않은 서비스 예약을 수정할 수 있어요. 덕분에 막바지 요청, 수정, 변경 사항을 더 쉽게 처리할 수 있습니다.

지원되는 변경 사항은 다음과 같습니다:

- **서비스(Services)** 추가 또는 제거

- **애드온(Add-Ons)** 추가 또는 제거

- **담당자(Staff)** 또는 **서비스 변형(Service Variants)** 변경

- **위치(Location)**, 예약 제목, 날짜/시간, 타임존, 쿠폰 코드 변경

결제되지 않은 서비스 예약을 편집하려면:

- 편집하려는 예약을 선택한 후 **연필** 아이콘을 클릭하여 편집기를 여세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084556126/original/ehVF_-mdtnkjbXODYYkJKwYRRXpPdQRSCw.png?1793336850)

- 해당하는 서비스, 애드온, 담당자/변형, 위치, 제목, 날짜/시간, 타임존, 쿠폰 코드를 조정한 후 **저장(Save)**을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064119010/original/cCZClATqPysQRMMvk3_aaIk4G2Zyp2Rz3A.png?1770140560)

### **결제된 예약을 위한 강화된 지원**

결제된 예약은 서비스나 담당자 변경과 같은 구조적인 변경에 대해 잠겨 있어요. 예약을 복제하여 새로운 예약을 생성하고 세부 정보를 조정한 후, 처음부터 다시 시작하지 않고 재예약할 수 있습니다.

편집 화면에는 어떤 정보를 변경할 수 있고 변경할 수 없는지 설명하는 메시지가 표시됩니다.

---

## **서비스 예약 복제하기**

예약을 복제하면 기존 세부 정보를 다시 입력할 필요 없이 반복되거나 유사한 서비스 예약을 빠르게 생성할 수 있어요.

**예약 복제(Duplicate Appointment)** 버튼은 예약 모달(Appointment Modal)에서 사용할 수 있어요. 복제하려는 예약을 열고 **복제(Duplicate)** 아이콘을 선택하세요. 새 예약을 완료하기 전에 복사된 세부 정보를 검토하고 조정하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084556112/original/TXsLc-VzgsiiA8MegMSxunyd9O9uuWgccA.png?1793336819)

---

## **서비스 캘린더(Service Calendar)의 차단 슬롯**

차단 슬롯(Blocked Slot)을 사용하면 특정 시간을 예약 불가능으로 표시하여 캘린더를 정확하게 유지하고 실수로 인한 예약을 방지할 수 있어요.

차단 슬롯을 만들려면:

- 캘린더에서 **새 예약(New Booking)**을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084556055/original/-NchWUgfUri2SCT2HoB26Kg3KftdwR17Nw.png?1793336753)

- **이벤트 유형(Event Type)**을 **차단 슬롯(Blocked Slot)**으로 전환하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064119381/original/n-Jf9wQYrMhdQ3LjBKzuXe086l_HvNeZ3A.png?1770140952)

- 날짜/시간, 제목, 담당자를 선택한 후 **시간 차단(Block Time)**을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064119444/original/pDXeA17Ua3DUSRqDP4QlULzoxoP9hSjA1A.png?1770141018)

---

## **예약 모달에서 리소스 표시하기**

예약 모달(Appointment Modal)에는 서비스 예약에 배정된 리소스가 표시됩니다. 예약된 리소스를 확인하면 팀이 어떤 담당자나 리소스가 예약되었는지 파악하고 배정에 대한 혼란을 방지할 수 있어요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084556032/original/UP_E_3nf6D2nGX2iWGRgznoQIArc0CRvTw.png?1793336724)

---

## **서비스 알림에서 커스텀 값(Custom Value) 사용하기**

커스텀 값(Custom Value)을 사용하면 매번 수동으로 정보를 입력하지 않아도 고객 확인 메시지, 리마인더, 기타 알림에 관련 예약 정보를 포함시킬 수 있어요.

캘린더 알림에 사용할 수 있는 커스텀 값은 두 가지입니다:

- **서비스 예약 금액(Service Booking Price)**

- **미팅 위치 이름(Meeting Location Name)** (전체 주소 대신 간단한 라벨)

이 값들을 사용하려면:

- **캘린더(Calendars) → 캘린더 설정(Calendar Settings) → 알림(Notifications)**으로 이동하세요.

- 알림 템플릿(확인, 리마인더 등)을 여세요.

- 병합 필드 선택기에서 **서비스 예약 금액(Service Booking Price)** 또는 **미팅 위치 이름(Meeting Location Name)**을 삽입하세요.

- 저장한 후 알림을 테스트하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064119604/original/B80PfHsuKgrj_7P9Hq56wv6Aop-IiAMHLQ.png?1770141210)

---

## **자주 묻는 질문**

**Q: 결제가 완료된 후에도 담당자나 서비스를 변경할 수 있나요?**

구조적인 변경(서비스, 애드온, 담당자/변형, 쿠폰, 제목, 위치)은 결제된 예약에서는 잠겨 있어요. 날짜/시간을 일정 변경하거나, **예약 복제(Duplicate Appointment)**를 사용해 변경 사항을 반영한 새 예약을 만드세요.

**Q: 예약을 복제하면 어떤 정보가 함께 복사되나요?**

연락처, 서비스, 애드온, 담당자/리소스, 미팅 위치, 메모가 일반적으로 함께 복사됩니다. 복제된 예약을 확정하기 전에 필요한 부분을 조정하세요.

**Q: 결제된 예약의 일정을 변경하면 기존 주문이나 결제 내용이 바뀌나요?**

아니요. 결제 정보는 원래 예약에 그대로 연결되어 유지됩니다.

**Q: 서비스 예약을 생성한 후에도 양식을 첨부할 수 있나요?**

아니요. 양식은 예약 생성 시에만 첨부할 수 있어요. 이미 양식이 첨부된 경우 **예약 세부 정보(Booking Details)**에서 제출된 응답을 확인할 수 있지만, 이후에 양식을 추가하거나 수정할 수는 없습니다.

---
*원문 최종 수정: 2026-10-30*
*Hyperclass 사용 가이드 — hyperclass.ai*