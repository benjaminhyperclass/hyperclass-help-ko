---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009374-importing-services-into-field-services
번역일: 2026-11-02
카테고리: 04-캘린더-예약 > Field Services
---

# Field Services로 서비스 가져오기

이미 서비스 카탈로그를 갖고 계신가요? 처음부터 다시 만들 필요 없습니다. 가져오기(Import) 기능을 사용하면 CSV 파일이나 이미 설정해 둔 서비스를 Field Services로 불러올 수 있어서, 더 빠르게 예약을 받기 시작할 수 있어요.

참고: Field Services는 현재 비공개 베타(Private Beta) 상태이며, 선택된 계정에서만 사용할 수 있습니다. 기능과 화면은 개선 과정에서 변경될 수 있습니다.

## 이 문서의 내용

- [무엇을 가져올 수 있나요?](#what)
- [가져오기 메뉴 위치](#where)
- [CSV 파일로 가져오는 방법](#csv)
- [기존 서비스를 복사하는 방법](#copy)
- [가져오기 기록](#history)
- [가져온 후 해야 할 일](#next)
- [자주 묻는 질문](#faq)

---

## 무엇을 가져올 수 있나요?

두 가지 소스에서 서비스를 가져올 수 있어요.

| 소스 | 설명 |
|---|---|
| **CSV** | 서비스 한 개당 한 행(row)으로 구성된 스프레드시트를 업로드한 후, 열(컬럼)을 Field Services 필드와 매칭합니다. |
| **서비스(Services)** | **캘린더(Calendars) → 서비스(Services)**에서 이미 설정해 둔 서비스를 카테고리, 변형(variant), 애드온과 함께 복사합니다. |

참고: Field Services에 이미 같은 이름의 서비스가 있으면 해당 항목은 건너뜁니다. 기존 서비스는 업데이트되지 않습니다.

---

## 가져오기 메뉴 위치

- **Field Services → Services & staff(서비스 및 스태프)**로 이동하세요.
- **Catalog(카탈로그)** 아래의 **Import(가져오기)**를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162849/original/FXziM4U18ozepOoZh9PEIU88mduveclVHg.jpg?1792999545)

---

## CSV 파일로 가져오는 방법

- 가져오기(Import) 페이지에서 **New import(새 가져오기)**를 클릭하세요.
- 소스로 **CSV**를 선택하세요.
- **Download sample CSV(샘플 CSV 다운로드)**를 클릭해서 형식을 확인한 후, 서비스 한 개당 한 행씩 본인의 파일을 작성하세요.
- **Click to upload(클릭하여 업로드)**를 클릭하거나, 이 영역에 CSV 파일을 드래그해서 파일을 선택하세요.
- **Continue(계속)**를 클릭하고 파일의 열(컬럼)을 Field Services 필드와 매칭하세요.
- 가져오기 내용을 검토하고 확인하세요.

---

## 기존 서비스를 복사하는 방법

- 가져오기(Import) 페이지에서 **New import(새 가져오기)**를 클릭하세요.
- 소스로 **Services(서비스)**를 선택하세요.
- **Continue(계속)**를 클릭하고 안내에 따라 복사할 항목을 선택하세요.

복사에는 카테고리, 변형(variant), 애드온이 포함됩니다. 원본 서비스는 변경되지 않습니다.

---

## 가져오기 기록

가져오기(Import) 페이지에는 과거 가져오기 내역이 액션 라벨, 작업 유형(예: CSV), 상태, 실행한 사람, 생성 및 완료 시점, 통계와 함께 표시됩니다.

- 날짜 필터와 상태 필터를 사용해 목록을 좁혀 볼 수 있어요.
- **Statistics(통계)** 아래의 차트 아이콘을 클릭하면 생성, 건너뜀, 실패한 항목 수를 확인할 수 있어요.

---

## 가져온 후 해야 할 일

- [Field Services의 서비스 및 애드온](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009373) 문서를 열어 가져온 각 서비스의 가격, 소요 시간, 카테고리를 확인하세요.
- 가져온 서비스에 스태프를 배정하세요. [Field Services의 스태프](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009372) 문서를 참고하세요.
- 예약 페이지에서 테스트 예약을 진행해 보세요. [Field Services 설정: 온라인 예약](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009385) 문서를 참고하세요.

---

## 자주 묻는 질문

**가져오기를 하면 기존 서비스가 변경되나요?**
아니요. 가져오기는 Field Services에만 서비스를 새로 생성합니다.

**다시 가져왔는데 일부 서비스가 빠졌어요. 왜 그런가요?**
Field Services에 이미 같은 이름의 서비스가 있으면 건너뜁니다. 서비스 이름을 변경하거나 기존 서비스를 삭제한 후 다시 가져와 보세요.

**Housecall Pro나 Jobber 같은 다른 소프트웨어에서도 가져올 수 있나요?**
아직은 불가능합니다. 해당 가져오기 기능은 추후 지원 예정이에요. 현재는 데이터를 CSV 파일로 내보낸 후 CSV 가져오기 기능을 이용해 주세요.

---
*원문 최종 수정: Thu, 29 Oct, 2026 at 9:52 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*