---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009359-create-and-manage-qr-codes-for-calendars-services-rentals
번역일: 2026-11-02
카테고리: 06-사이트 > QR코드
---

# 캘린더, 서비스, 렌탈용 QR코드 생성 및 관리

캘린더, 서비스, 렌탈용 QR코드를 사용하면 고객을 예약 경험에 더 쉽게 연결할 수 있어요. 하이퍼클래스에서는 지원되는 일정 및 예약 대상에 대해 QR코드를 직접 생성하거나, 해당 상품에서 바로 제공되는 사전 제작 QR코드(prebuilt QR code)를 이용할 수 있습니다. 사전 제작 QR코드는 이미 대상 페이지와 연결되어 있어서 스캔 활동 확인, 디자인 커스터마이징, 다운로드를 바로 이용할 수 있어요. 이 가이드에서는 하이퍼클래스에서 이러한 QR코드를 생성, 접근, 커스터마이징, 관리하는 방법을 설명합니다.

---

**목차**

- [캘린더, 서비스, 렌탈용 QR코드란 무엇인가요?](#what-are-qr-codes)
- [캘린더, 서비스, 렌탈용 QR코드의 주요 장점](#key-benefits)
- [사전 요구사항 및 제한사항](#prerequisites)
- [지원되는 QR코드 대상](#supported-destinations)
- [QR코드 생성 방법](#create-qr-code)
- [사전 제작 QR코드 접근 방법](#prebuilt-qr-codes)
- [QR코드 스캔 활동 확인, 커스터마이징, 다운로드](#manage-qr-codes)
- [QR코드 목록에서 사전 제작 QR코드 찾기](#qr-code-list)
- [자주 묻는 질문](#frequently-asked-questions)

---

## **캘린더, 서비스, 렌탈용 QR코드란 무엇인가요?**

캘린더, 서비스, 렌탈용 QR코드를 사용하면 고객이 QR코드를 스캔해서 지원되는 예약 및 일정 페이지에 바로 접근할 수 있어요.

하이퍼클래스 QR코드 빌더(QR Code Builder)를 통해 QR코드를 직접 생성하거나, 지원되는 캘린더, 서비스, 렌탈 내에서 바로 제공되는 사전 제작 QR코드를 사용할 수 있습니다.

사전 제작 QR코드는 각 대상 페이지와 자동으로 연결되어 있기 때문에, 지원되는 각 예약 경험마다 별도의 QR코드를 직접 만들고 설정할 필요가 없어요.

---

## **캘린더, 서비스, 렌탈용 QR코드의 주요 장점**

QR코드를 사용하면 예약 페이지를 더 간편하게 공유할 수 있고, 이미 사용 중인 도구에서 바로 참여도를 모니터링하고 코드를 관리할 수 있어요.

- **더 많은 예약 대상:** 지원되는 캘린더(Calendar), 서비스(Service), 렌탈(Rental) 및 관련 예약 페이지에 대해 QR코드를 생성할 수 있어요.

- **바로 사용 가능한 QR코드:** 대상 페이지와 이미 연결되어 있는 사전 제작 QR코드를 바로 이용할 수 있어요.

- **상품에서 바로 접근:** 지원되는 캘린더, 서비스, 렌탈에서 바로 QR코드를 열 수 있어요.

- **스캔 인사이트:** QR코드 화면에서 **Scans(스캔 수)**와 **Last scanned(마지막 스캔 일시)** 정보를 확인할 수 있어요.

- **간편한 커스터마이징:** 대상 페이지를 다시 만들지 않고도 QR코드 디자인을 수정할 수 있어요.

- **유연한 다운로드:** 지원되는 QR코드를 **PNG, SVG, PDF** 형식으로 다운로드할 수 있어요.

- **통합된 가시성:** 사전 제작 QR코드와 직접 만든 QR코드를 QR코드 메인 영역에서 모두 확인할 수 있어요.

---

## **사전 요구사항 및 제한사항**

고객이 접근하기를 원하는 기존 캘린더, 서비스, 렌탈 또는 지원되는 예약 대상이 먼저 있어야 해요.

- 해당 예약 대상이 있는 하이퍼클래스 하위 계정(Sub-account)에 접근 권한이 있어야 합니다.

- 선택 가능한 대상 옵션은 선택한 QR코드 유형에 따라 달라집니다.

- 사전 제작 QR코드는 이미 해당 예약 대상과 연결되어 있어요.

- QR코드 빌더를 통해 QR코드를 계속 직접 만들 수도 있어요.

**참고:** QR코드를 공유하거나 인쇄하기 전에는 항상 스캔해서 원하는 예약 페이지로 제대로 연결되는지 확인하세요.

---

## 지원되는 QR코드 대상

QR코드 빌더에는 전용 **Calendar(캘린더)**, **Service(서비스)**, **Rental(렌탈)** QR코드 유형이 포함되어 있어요. 선택 가능한 대상 옵션은 선택한 유형에 따라 달라집니다.

| QR코드 유형 | 대상 옵션 |
|---|---|
| **Calendar(캘린더)** | 캘린더 그룹(Calendar Groups) 및 캘린더(Calendars) |
| **Service(서비스)** | 서비스(Services), 서비스 그룹(Service Groups), 직원(Staff), 로케이션(Locations), 예약 페이지(Booking Pages) |
| **Rental(렌탈)** | 지원되는 렌탈 예약 대상 |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084150801/original/Re_ExzkwiLIWuMmskIs1mEwHtN4UWmWWmg.png?1792965036)

---

## **QR코드 생성 방법**

예약 대상을 직접 선택하고 공유 전에 QR코드를 커스터마이징하고 싶을 때는 QR코드 빌더를 사용하세요.

- 하이퍼클래스 **하위 계정(Sub-Account)**에서 좌측 네비게이션 메뉴의 **Sites(사이트)**를 선택하세요.

- 상단 네비게이션 메뉴에서 **QR Codes(QR코드)**를 선택하세요.

- **+ Create QR code(QR코드 생성)**를 클릭하세요.

- **QR name(QR 이름)** 필드에 이름을 입력하세요.

- **Select QR type(QR 유형 선택)**에서 **Calendar(캘린더)**, **Service(서비스)**, **Rental(렌탈)** 중 하나를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084150383/original/P7P90h6_kxSWBBtcNFYuw9OC6UE8x_zI8A.png?1792963205)

- **Next(다음)**를 클릭하세요.

- **Additional information(추가 정보)**에서 QR코드가 열어야 할 **Resource type(리소스 유형)**을 선택하세요.

캘린더 QR코드의 경우, **Calendar groups(캘린더 그룹)** 또는 **Calendars(캘린더)** 중 선택할 수 있어요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084150580/original/jH7CaWmzyroc0-wD3lZKJl6AYMFwwV4wEA.png?1792964037)

**Calendars(캘린더)**를 선택한 후에는 QR코드가 열어야 할 특정 캘린더를 선택하세요.

- 구체적인 예약 대상을 선택하세요.

- **Next(다음)**를 클릭해서 **QR color and shape(QR 색상 및 모양)** 설정으로 넘어가세요.

- 필요에 따라 QR코드를 커스터마이징하세요.

- QR코드를 저장하세요.

- 공유하기 전에 QR코드를 스캔해서 올바른 예약 대상으로 연결되는지 확인하세요.

---

## **사전 제작 QR코드 접근 방법**

지원되는 캘린더, 서비스, 렌탈에서는 사전 제작 QR코드도 제공해요. 이 코드들은 이미 해당 대상 페이지와 연결되어 있기 때문에 별도의 QR코드를 직접 만들 필요가 없어요.

### **캘린더 QR코드 접근하기**

- 하이퍼클래스 **하위 계정(Sub-Account)**에서 **Calendars(캘린더)**를 선택하세요.

- **Calendar Settings(캘린더 설정)**를 여세요.

- **Calendars(캘린더)** 영역을 여세요.

- 공유하려는 캘린더를 찾으세요.

- 해당 캘린더의 공유 옵션을 여세요.

- **QR code(QR코드)** 탭을 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084150792/original/lGlk5tWkb0ZPP1lkKDtNo3xornnfGQzciA.png?1792964892)

QR코드 화면에서는 해당 캘린더의 QR코드, 스캔 활동, 영구 QR 링크, 다운로드 옵션, QR코드 편집 기능을 확인할 수 있어요.

### 서비스 QR코드 접근하기

- 하이퍼클래스 **하위 계정(Sub-Account)**에서 **Calendars(캘린더)**를 선택하세요.

- **Calendar Settings(캘린더 설정)**를 여세요.

- **Services(서비스)** 영역을 여세요.

- 공유하려는 서비스를 찾아서 해당 QR코드 옵션을 여세요.

### 렌탈 QR코드 접근하기

- 하이퍼클래스 **하위 계정(Sub-Account)**에서 **Calendars(캘린더)**를 선택하세요.

- **Calendar Settings(캘린더 설정)**를 여세요.

- **Rentals(렌탈)** 영역을 여세요.

- 공유하려는 렌탈을 찾아서 해당 QR코드 옵션을 여세요.

---

## **QR코드 스캔 활동 확인, 커스터마이징, 다운로드**

QR코드 화면에서는 코드를 다시 만들지 않고도 성과를 확인하고 관리할 수 있어요.

### **QR코드 활동 확인하기**

지원되는 사전 제작 QR코드의 경우, 다음 정보를 확인할 수 있어요.

- **Scans(스캔 수):** 해당 QR코드에 기록된 스캔 횟수

- **Last scanned(마지막 스캔 일시):** QR코드가 가장 최근에 스캔된 날짜

### QR코드 다운로드하기

**Download(다운로드)**를 사용해서 QR코드를 다음 형식 중 하나로 저장할 수 있어요.

- **PNG**

- **SVG**

- **PDF**

### QR코드 커스터마이징하기

**Edit QR(QR 편집)**을 선택해서 QR코드의 디자인을 수정하세요. 수정 가능한 항목은 다음과 같아요.

- **Color(색상)**

- **Shape & form(모양 및 형태)**

- **Logo(로고)**

- **Page background(페이지 배경)**

- **Rim content(테두리 콘텐츠)**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084150838/original/ElVkByawatrbG8zia62-9z9n8INO79skuQ.png?1792965254)

변경을 완료한 후 **Save(저장)**를 클릭하고, 수정된 QR코드를 스캔해서 대상 페이지가 올바른지 확인하세요.

---

## **QR코드 목록에서 사전 제작 QR코드 찾기**

사전 제작 QR코드는 직접 만든 QR코드와 함께 QR코드 통합 관리 영역에서도 확인할 수 있어요.

- 하이퍼클래스 **하위 계정(Sub-Account)**에서 **Sites(사이트)**를 선택하세요.

- **QR Codes(QR코드)**를 선택하세요.

- 폴더, 검색, 필터, 보기 옵션을 활용해서 원하는 QR코드를 찾으세요.

QR코드 페이지에는 **Calendars(캘린더)**, **Rentals(렌탈)**, **Services(서비스)** 등 지원되는 QR코드 카테고리별 시스템 폴더가 포함되어 있어요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084150871/original/h6ON3HEdyPkzX_CCw5HfzZHV75BPD4kstw.png?1792965541)

목록을 특정 상품과 관련된 QR코드로 좁히고 싶다면 해당 시스템 폴더를 여세요.

---

## **자주 묻는 질문**

**Q: 모든 캘린더, 서비스, 렌탈마다 QR코드를 직접 만들어야 하나요?**

아니요. 지원되는 대상에는 사전 제작 QR코드가 제공되며, 이미 각 예약 경험과 연결되어 있어요. QR코드 빌더를 통한 직접 생성도 계속 이용할 수 있습니다.

**Q: 개별 캘린더 대신 캘린더 그룹용 QR코드를 만들 수 있나요?**

네. 캘린더 QR코드를 만들 때 **Resource type(리소스 유형)** 옵션에 **Calendar groups(캘린더 그룹)**와 **Calendars(캘린더)**가 모두 포함되어 있어요.

**Q: 어떤 서비스 대상을 사용할 수 있나요?**

서비스 QR코드 유형은 **Services(서비스)**, **Service groups(서비스 그룹)**, **Staff(직원)**, **Locations(로케이션)**, **Booking pages(예약 페이지)** 등의 옵션을 지원해요.

**Q: QR코드 메인 페이지를 열지 않고도 스캔 활동을 추적할 수 있나요?**

네. 지원되는 사전 제작 QR코드는 연결된 상품에서 바로 **Scans(스캔 수)**와 **Last scanned(마지막 스캔 일시)** 등의 스캔 정보를 제공해요.

**Q: 사전 제작 QR코드를 커스터마이징할 수 있나요?**

네. **Edit QR(QR 편집)**을 선택하면 색상, 모양 및 형태, 로고, 페이지 배경, 테두리 콘텐츠 등의 설정을 수정할 수 있어요.

**Q: 어떤 QR코드 다운로드 형식을 이용할 수 있나요?**

지원되는 QR코드는 **PNG**, **SVG**, **PDF** 형식으로 다운로드할 수 있어요.

**Q: 사전 제작 QR코드는 나중에 어디서 찾을 수 있나요?**

연결된 상품에서 바로 찾거나, **Sites(사이트) → QR Codes(QR코드)** 통합 관리 영역에서 확인할 수 있어요.

---
*원문 최종 수정: 2026-10-27*
*Hyperclass 사용 가이드 — hyperclass.ai*