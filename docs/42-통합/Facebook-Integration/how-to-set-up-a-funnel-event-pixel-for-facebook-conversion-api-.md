---

번역일: 2026-04-09
카테고리: 통합 > Facebook Integration
---

# 페이스북 전환 API를 위한 퍼널 이벤트 픽셀 설정하기

페이스북 전환 API(또는 CAPI)는 데이터 프라이버시를 유지하면서 고객과 오디언스에게 개인화된 광고 경험을 제공할 수 있도록 설계되었습니다. 이 도구를 사용하면 웹 이벤트를 해당 서버에서 페이스북으로 직접 전송할 수 있습니다. 광고 추적을 위해 페이스북 픽셀을 사용하는 경우, 퍼널과 퍼널 단계에 픽셀 코드를 추가해야 합니다.

#### 이 문서에서 다루는 내용:

- [메타 CAPI(전환 API) 퍼널 이벤트 설정 방법](#메타-capi전환-api-퍼널-이벤트-설정-방법)
- [1단계: 메타 픽셀/데이터세트 생성](#1단계-메타-픽셀데이터세트-생성)
- [2단계: 퍼널/웹사이트에 픽셀 코드 적용](#2단계-퍼널웹사이트에-픽셀-코드-적용)
- [3단계: 메타 전환 API 워크플로우 생성](#3단계-메타-전환-api-워크플로우-생성)
- [커스텀 값](#커스텀-값)

---

## 메타 CAPI(전환 API) 퍼널 이벤트 설정 방법

### 1단계: 메타 픽셀/데이터세트 생성

- [Facebook Business Manager(메타 비즈니스 스위트라고도 함)](http://business.facebook.com)에서 픽셀 생성을 시작하세요 > 왼쪽으로 이동한 후 [Events Manager(이벤트 관리자)](https://www.facebook.com/events_manager2/) 탭으로 이동하세요.
- 해당 FB 페이지에 대한 모든 필요한 접근 권한이 있는 올바른 광고 계정에 연결되어 있는지 확인하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284070737/original/AFb9bOXlqhbRRlui5ZOjvh_Ry7MYiUeFaQ.png?1677521079)

- 왼쪽 사이드바로 이동한 후 Connect Data Sources(데이터 소스 연결)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284518426/original/vpJQuXlQ-fkLtQlkuMXpv-MYw6ymdVS3Ug.png?1677678141)

- 나타나는 옵션에서 Web을 선택하고 다음을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031423162/original/o_ZF2cyQyA9qLqbmCcAB4FnSrMwgM_mZVA.png?1724244130)

- 이미 픽셀이 있는 경우, 기존 픽셀 중에서 선택하거나 새 픽셀을 생성할지 묻습니다. 데이터 수집을 위해 Create new Pixel(새 픽셀 생성) 또는 목록에서 Use an existing pixel(기존 픽셀 사용)을 클릭하세요. 픽셀 세부 정보가 추가되면 Continue(계속)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284072690/original/qgMYOqAYudCL0t2rtYthWAkL4dYkgKtGTw.png?1677521908)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289558054/original/bJeFGIeh-ZoGTd2Tb-3fON8lBJOKZVrzmw.png?1679940937)

- 그러면 픽셀 코드를 추가할 CRM의 웹사이트/퍼널 URL을 제공하라고 요청합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289558739/original/PAF__5OhEXarHQx5f1VRZQ0TZlm-vIbsgw.png?1679941181)

- 나중에 픽셀 코드를 추가할 퍼널/웹사이트의 도메인을 추가한 후 Check(확인)를 클릭하세요. 도메인이 이 프로세스에 적합하면 도메인 필드에 녹색 체크마크가 표시됩니다. 녹색 체크마크가 나타나면 Check 버튼 대신 나타나는 **Next** 버튼을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031423710/original/veyxXsSA6Fng_0nJJ-h34zDLk_G0T6pHwg.png?1724244460)

- 그러면 웹사이트를 연결하는 방법을 선택하라는 팝업이 표시됩니다. 첫 번째 옵션인 Meta Pixel and Conversions API를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031423772/original/2XKJ_iM3ak-QJYnGV9iaEabCoJ7BRz3YrQ.png?1724244493)

- 이후 지시사항이 표시됩니다. Conversions API 아래의 "See Instructions(지시사항 보기)"를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031423901/original/XVw12VjtzU_VoAP_6bxCjCNv6rLP6dILvA.png?1724244584)

- Manual Implementation 프로세스의 Overview 탭으로 이동합니다. 지시사항을 읽어본 후 Continue(계속)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031424024/original/hiVjRqpxZCO_lViZiYsnTLm4ZXEmVGnAzA.png?1724244660)

- 그러면 Select Events 탭으로 이동합니다. 이 픽셀을 설정하는 업종을 선택할 수 있는 드롭다운이 표시됩니다. 클라이언트와 가장 관련성이 높은 것을 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031424282/original/nM0VnSjCU1DEyuvCgbr5GGwT6QoDPYGu5g.png?1724244784)

- 그 다음 페이스북으로 보내고 싶은 이벤트를 선택하는 것이 좋습니다. 페이스북으로 보내고 싶은 모든 이벤트를 선택하고 Continue(계속)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031424238/original/CRl1a7eHHek535QvXq7QhCP5BFmrWYaPkg.png?1724244768)

- Select Parameters 탭으로 이동하면 몇 개의 Event Detail Parameters가 이미 체크되어 있습니다. 오른쪽의 Best Practices 툴팁에서 권장하는 대로 Event ID를 체크마크하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031424309/original/CHbZI63v1OjLOi_Ha7h6oHqyfTj0LVvOuQ.png?1724244811)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031424379/original/McMYaiuIvhk2Q6px-7hY3s_a_EaRqfbWJA.png?1724244863)

- 그 다음 **Customer Information Parameters** 아래에서 Client User Agent가 이미 표시되어 있는 것을 볼 수 있습니다. Client's IP Address, First Name, Client ID, Email, Business ID, Last Name을 체크해야 합니다. (중요 참고사항 - 이 픽셀에 추가한 모든 단일 이벤트에 대해 최소한 동일한 체크박스를 선택해야 합니다.)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031424583/original/FeAiafdKndcnOzPuYaRsELSlYdmsKUSQqw.png?1724244990)

- 그러면 설정을 검토하고 각 이벤트에 대해 선택한 모든 매개변수를 마지막으로 한 번 더 확인하라고 요청합니다. 필요에 따라 모든 것이 설정되었다고 확신하면 Continue(계속)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031424785/original/WeAtZHPMuprCiu9Ut7Rm-FXrPifGfMrvhQ.jpeg?1724245080)

- 다음 단계에서 Finish(완료)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031424804/original/ZF7ymYlO_hwJVYNgOe1F70jwjVg4FoAolA.png?1724245108)

- 이제 브라우저 픽셀 이벤트를 구성하겠습니다. "Set up Meta Pixel(메타 픽셀 설정)"을 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032148487/original/18Tq2VZt6EEZr6XOi9J4hVWjJlR_INnAeg.png?1725362743)

- Pixel을 사용한 웹사이트 활동 연결 팝업이 표시됩니다. Install Code Manually(코드 수동 설치)를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032148583/original/-1I2AK9MpfruM7VYj8molxfqlhrpJF4FrA.png?1725362799)

- "Copy Code(코드 복사)"를 클릭하여 메타 픽셀 코드를 복사하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032148600/original/OrLfiaNSvaZ4Bc4xMlmbiSB-rwcPXZa2VQ.png?1725362818)

## 2단계: 퍼널/웹사이트에 픽셀 코드 적용

- 이 브라우저 탭을 열어둔 채로 CRM 계정으로 이동하세요. 이 픽셀을 설정하는 하위 계정으로 이동하세요.
- 왼쪽 사이드바의 Sites(사이트)로 이동한 후 Funnels(퍼널) 또는 Websites(웹사이트)로 이동하세요(픽셀 설정에서 사용한 도메인과 연결된 사이트를 구축한 위치에 따라).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032148908/original/7GdEB-pnC5XOcG6GQavHzbCNRMzbKgf-Wg.png?1725362991)

- 특정 페이지나 단계에서 추적하려면 Edit(편집)을 클릭한 후 가급적 새 탭에서 편집하여 퍼널 빌더를 여세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032149047/original/MeKMG4wy-FOm_6pRtYT2BZZbQU3NPfou_Q.png?1725363100)

- 빌더 안에서 코드 아이콘을 클릭하고 이전에 복사한 코드를 "Header Tracking(헤더 추적)" 섹션에 붙여넣은 후 Save(저장)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032149385/original/mEKP3Yv7hEmyp1blhUXtHd2fPdpq21S8wQ.png?1725363273)

- 모든 페이지나 단계에서 브라우저 이벤트를 추적하려면 퍼널 또는 웹사이트 설정을 클릭하고 "Head tracking code(헤드 추적 코드)" 섹션에 코드를 붙여넣으면 됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032149705/original/-I69P-F4mIuQBcBpvAgRIT0QdTJSzLAnAA.png?1725363421)

- 변경사항을 저장하세요.

### 3단계: 메타 전환 API 워크플로우 생성

- Automation(자동화) > Workflows(워크플로우) > Create Workflow(워크플로우 생성)로 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032150008/original/v-sU1upHoO-x9IGa4HLW6eW2dhwxPdAS4A.png?1725363584)

- Add New Workflow Trigger(새 워크플로우 트리거 추가)를 클릭하세요. 여기서 다음 트리거 중 하나를 개별적으로 또는 조합하여 사용할 수 있습니다: Form Submitted(폼 제출), Customer Booked Appointment(고객 예약), Survey Submitted(설문 제출) 또는 Order Form Submission(주문 폼 제출).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032150362/original/awZeptMVjJbwk_PPtS5jOvhQjl_kaXI21Q.png?1725363773)

- 워크플로우 트리거를 선택한 후, 픽셀 전환 이벤트를 추적하려는 특정 폼/캘린더/주문 폼/설문을 선택하는 필터를 추가할 수 있습니다.
- 그 다음 Add your first Action(첫 번째 액션 추가)을 클릭하세요. Facebook Conversion API Action을 검색하고 선택하세요. Facebook Conversion API 액션을 구성하세요. 원하시면 Action Name(액션 이름)에서 이 액션의 이름을 지정할 수 있습니다. Event Type 드롭다운에서 Funnel Event를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032151023/original/XvIqeQ42GaEENsh1S-28AJ_RmIhxAx3aZw.png?1725364054)

- Access Token의 경우, Facebook Events Manager(페이스북 이벤트 관리자) > Data Sources(데이터 소스) > Settings(설정) > 아래로 스크롤하여 Generate Access Token(액세스 토큰 생성)을 클릭하세요. 생성되면 액세스 토큰을 복사하여 워크플로우 액션 구성에 붙여넣으세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032151448/original/nNO1m9hBF53AoUjcdI6jTAngHwZjphesrg.jpeg?1725364264)

- Pixel ID의 경우, Facebook Events Manager(페이스북 이벤트 관리자) > Data Sources(데이터 소스) > Settings(설정) > 아래로 스크롤하여 Dataset ID를 복사하세요(이것이 Pixel ID입니다). 워크플로우의 FB Conversion API Action에서 Pixel ID 필드에 Pixel ID를 붙여넣으세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032151439/original/H-wRfkeISdeGz9XM_qxfxEA2gCQp8Ws5dQ.jpeg?1725364262)

- Facebook Conversion API Action의 해당 필드에 Access Token과 Pixel ID를 붙여넣으세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032151572/original/bbgxCtJlb3G6T3FBXPaNEiouqGfy0gk1KQ.png?1725364339)

- 완료되면 **액션을 저장**한 후 워크플로우를 **저장**하고 **발행**하세요.

참고사항:

Lead Value(리드 값)의 경우 1000 또는 2000과 같은 예상 값을 사용하여 각 리드가 파이프라인에 기여하는 가치를 식별할 수 있도록 하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032151876/original/WVpH1GiO1F91-z_v5JdN4YictKhz4kl3_g.png?1725364516)

---

## 커스텀 값

Google Ads와 마찬가지로 이제 Facebook Ads 전환 추적 매개변수에 대한 커스텀 매핑을 허용합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043835950/original/gG6WcLmyidLSEdiRgYprTlogL8BqVfs3aQ.png?1742815104)

**작동 원리:**

기본적으로 커스텀 매핑은 비활성화되어 있습니다.

사용자는 토글을 통해 커스텀 매핑을 활성화할 수 있습니다.

활성화되면 사용자는 다음을 매핑할 수 있습니다:

- 퍼널 이벤트용 FBCLID
- 리드 이벤트용 Facebook Lead ID
- 커스텀 매핑 필드가 제공되면 시스템 기본값보다 우선순위를 갖습니다.
- 비어 있는 경우, 시스템은 기본 내부 값을 계속 사용합니다.

---
*원문 최종 수정: Mon, 18 Aug, 2025 at 1:35 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*