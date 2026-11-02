---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009373-services-and-add-ons-in-field-services
번역일: 2026-11-02
카테고리: 04-캘린더-예약 > Field Services
---

# Field Services의 서비스와 애드온

서비스 카탈로그는 여러분이 제공하는 메뉴판과 같아요. 고객이 예약 페이지에서 무엇을 예약할 수 있는지, 그리고 팀원이 요청과 작업에 무엇을 추가할 수 있는지가 바로 이 서비스 카탈로그에 따라 결정됩니다. 이 글에서는 서비스를 만들고, 가격과 소요 시간을 설정하고, 선택적인 애드온을 제공하는 방법을 안내해 드려요.

참고: Field Services는 현재 비공개 베타 버전으로, 선정된 계정에만 제공돼요. 기능과 화면은 개선 과정에서 변경될 수 있습니다.

## 이 글의 목차

- [서비스와 애드온이란 무엇인가요?](#what)
- [서비스는 어디에서 확인하나요](#where)
- [서비스 만드는 방법](#create)
- [고급 서비스 설정](#advanced)
- [서비스 관리 방법](#manage)
- [애드온](#addons)
- [자주 묻는 질문](#faq)

---

## 서비스와 애드온이란 무엇인가요?

**서비스(Service)**는 여러분이 수행하는 작업의 종류를 말해요. 예를 들어 "에어컨 점검" 같은 것이죠. 선택한 서비스에 따라 방문에 걸리는 시간과 배정 가능한 담당 직원이 결정돼요. **애드온(Add-on)**은 필터 교체처럼 고객이 서비스에 추가로 선택할 수 있는 옵션 항목이에요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084172107/original/fy9QhXx2rRa9UWj8icsuNk1tF88G9Gg6CA.jpg)

---

## 서비스는 어디에서 확인하나요

- **Field Services > Services & staff**로 이동하세요.
- **Catalog** 아래의 **Services**를 클릭하세요.

목록에는 각 서비스의 이름, 소요 시간, 가격, 배정된 직원이 표시돼요. **All categories**로 필터링하고, **Sort by**로 순서를 바꾸고, 검색창으로 원하는 서비스를 찾을 수 있어요.

---

## 서비스 만드는 방법

- Services 페이지에서 **New service**를 클릭하세요.
- 원하시면 **Service image**(SVG, PNG, JPG 또는 GIF, 800 x 600px)를 업로드하세요.
- **Service name**(서비스 이름)을 입력하세요.
- **Color**(색상)를 선택하세요. 이 색상은 일정표에서 해당 서비스를 쉽게 구분할 수 있도록 도와줘요.
- **Category**(카테고리)를 선택하세요. 다른 카테고리를 지정하지 않으면 새 서비스는 **Default**로 분류돼요.
- **Booking link**(예약 링크)를 확인하세요. 고객은 이 링크로 해당 서비스를 바로 예약할 수 있어요. 링크의 마지막 부분은 직접 수정할 수 있어요.
- **Description**(설명)을 추가하세요. 텍스트 서식을 적용하거나 링크를 넣을 수 있어요.
- **Service details** 항목에서 해당 서비스를 수행할 수 있는 **Staff members**(담당 직원)를 선택하세요.
- **Price**(가격)와 **Duration**(소요 시간)을 입력하세요.
- **Add service**를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162848/original/i1b8WQJqMZF6houf_BhBNba2eAXoxmrlVg.jpg?1792999542)

참고: 모든 서비스에는 최소 한 명의 담당 직원을 배정해 주세요. 담당 직원이 없는 서비스는 온라인 예약이 불가능해요.

---

## 고급 서비스 설정

New service 창에서 **Advanced settings**를 클릭하거나 기존 서비스를 편집하면 전체 서비스 편집기가 열려요. 왼쪽에는 **Service details**와 **Add-ons** 두 개의 탭이 있고, 다음과 같은 항목들이 있어요.

| 항목 | 설정할 수 있는 내용 |
|---|---|
| **Basic details** | 이미지, 이름, 색상, 카테고리, 예약 링크, 설명 |
| **Service details** | 서비스의 **Duration**(소요 시간) 설정 |
| **Payment** | **Price**(가격) 설정 및 **Configure tax for this service** 클릭. 결제 제공업체가 연결되어 있지 않으면 *No default payment provider found* 메시지와 함께 **Manage payment providers** 링크가 표시돼요. 결제 제공업체 설정이 완료되면 **Accept partial payment**(부분 결제 허용) 옵션을 사용할 수 있어요. |
| **Service-level form** | 해당 서비스를 단독으로 예약할 때 사용할 전용 양식을 지정해요. 고객이 여러 서비스를 함께 예약하면 예약 페이지 설정에 지정된 양식이 대신 사용돼요. |
| **Variants** | 사이즈나 등급처럼 같은 서비스의 다양한 옵션을 제공할 수 있어요. 각 옵션마다 이름, 소요 시간, 가격을 별도로 설정할 수 있어요. |

설정이 끝나면 **Save changes**를 클릭하세요.

---

## 서비스 관리 방법

서비스 행 끝에 있는 점 세 개 메뉴를 클릭하면 다음 작업을 할 수 있어요.

| 작업 | 설명 |
|---|---|
| **Edit** | 서비스 편집기를 열어요. |
| **Duplicate** | 복사본을 만들어 새 서비스의 기본 틀로 사용해요. |
| **Share booking link** | 해당 서비스의 직접 예약 링크를 복사해요. |
| **Delete** | 서비스를 삭제해요. |

---

## 애드온

애드온은 방문 한 건당 가치를 높여주는 선택적 추가 항목이에요. 관리 방법은 다음과 같아요.

- **Field Services > Services & staff > Add-ons**로 이동하세요.
- **New add-on**을 클릭하고 적용할 서비스를 포함한 세부 정보를 입력하세요.

Add-ons 목록에는 각 애드온의 이름, 소요 시간, 가격, 그리고 연결된 서비스가 표시돼요. 전체 편집기에서 서비스를 열고 **Add-ons** 탭을 사용해 해당 서비스에 애드온을 연결할 수도 있어요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084171910/original/xLoarJc4yDgG6r5zYEhezLQclq-3SfMcoQ.jpg)

---

## 자주 묻는 질문

**기존에 사용하던 서비스를 가져올 수 있나요?**
네, 가능해요. [Field Services로 서비스 가져오기](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009374) 문서를 참고해 주세요.

**통화는 어떻게 변경하나요?**
통화는 **Field Services Settings > Payments**에서 설정해요. 통화를 변경한 후에는 새 통화에 맞게 각 서비스의 가격을 업데이트해 주셔야 해요.

**고객이 서비스 요금을 온라인으로 결제할 수 없는 이유는 무엇인가요?**
온라인 결제를 받으려면 결제 제공업체 연동이 필요해요. 연동 전까지는 결제 설정에서 **Pay in-person**(현장 결제) 옵션을 사용해 주세요.

**Field Services의 서비스가 다른 Services 메뉴에도 표시되나요?**
아니요. 두 카탈로그는 서로 별개예요. 서비스를 복사하려면 가져오기 기능을 사용하세요.

---
*원문 최종 수정: 2026-10-29*
*Hyperclass 사용 가이드 — hyperclass.ai*