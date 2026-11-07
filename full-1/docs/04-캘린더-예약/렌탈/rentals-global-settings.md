---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006640-rentals-global-settings
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 대여 글로벌 설정

대여(**대여** 메뉴)의 **글로벌 설정**에서는 대여 사업 전체에 적용되는 기본 규칙을 관리해요. 일정, 알림, 브랜딩, 결제 같은 핵심 설정을 한곳에서 통일하면 모든 리스팅과 예약이 같은 규칙을 따르고, 리스팅별로 따로 바꿀 수도 있어요.

## 글로벌 설정 개요

**글로벌 설정**은 대여 사업에 필요한 주요 설정을 한곳에 모아 둔 화면이에요. 여기서 할 수 있는 일은 다음과 같아요.

- 운영시간과 예약 기본 동작을 정해요.
- 고객과 직원에게 보낼 알림 방식을 설정해요.
- 예약 페이지의 디자인을 사용자 지정해요.
- 결제 수단과 보증금 처리 방식을 설정해요.

이 설정은 변경한 뒤에 새로 만드는 리스팅과 예약에 적용돼요.

## 글로벌 설정의 장점

- 일관성: 새 리스팅과 예약에 같은 규칙이 적용되어 팀 전체가 예측하기 쉬워져요.
- 운영 관리: 운영시간과 시간 선택 설정으로 고객이 언제, 어떻게 예약할 수 있는지 정할 수 있어요.
- 브랜드 신뢰: 예약 페이지의 브랜딩, 레이아웃, 동의 문구가 어우러져 고객에게 통일된 경험을 줘요.
- 명확한 결제: **통화**, **Require Payment at Booking**(예약 시 결제 필수), 보증금 설정이 결제 화면, 인보이스, 정산 내용을 서로 맞춰 줘요.
- 유연성과 안전: 관리자는 예약을 만들 때 일부 제한을 바꿀 수 있어요. 버퍼와 재고는 계속 적용돼요.

## 글로벌 설정 열기

**캘린더 > 캘린더 설정 > 대여 > 글로벌 설정**으로 이동하세요.

![글로벌 설정 메뉴 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056093097/original/1BwVNtJs8LWa42igzFvnvZeRS-tF7LhAcQ.png?1760557519)

왼쪽 패널에 설정 탭이 네 개 보여요. 탭마다 대여 사업의 서로 다른 부분을 관리해요.

- **Booking Settings**(예약 설정)
- **알림**
- **예약 페이지**
- **결제**

![글로벌 설정의 네 가지 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056093118/original/t0T5AEFnPKIT1FctoO9E7dVAekyhgxAJRA.png?1760557578)

## 예약 설정

**Booking Settings** 탭에서는 운영시간, 일정 방식, 전체적인 예약 동작을 정해요. 관리자는 앱에서 예약을 만들 때 글로벌 제한을 언제든 바꿀 수 있어요.

### 운영시간

- 근무 요일과 시간을 지정해 예약할 수 있는 시간을 정해요.
- **+** 버튼을 누르면 하루 안에 시간 구간을 여러 개 추가할 수 있어요.
- 요일의 체크를 해제하면 그 요일은 비활성화돼요.

{% hint style="info" %}
예약은 정해 둔 운영시간 안에서 시작하고 끝나야 해요. 다만 전체 대여 기간은 운영시간을 넘겨도 돼요. 예를 들어 영업이 오후 11시에 끝나는 경우, 오후 10시 30분에 시작한 예약은 영업 종료 시간 이후까지 이어질 수 있어요.
{% endhint %}

### 날짜별 운영시간

- 공휴일이나 행사처럼 특정 날짜에만 적용할 운영시간을 추가해요.
- **+ Add Date Specific Hours**(날짜별 시간 추가)를 클릭해 해당 날짜의 예약 가능 시간대를 정해요.
- **Date-Specific Hours**(날짜별 운영시간)에서 정한 시간은 그날의 기본 운영시간보다 우선해요.

![날짜별 운영시간 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056093281/original/Zyb2j7x2SVdtdVJeelglJf3sFNQrNR_JfQ.png?1760557856)

### 날짜 묶음 방식

목록을 깔끔하게 유지하기 위해 하이퍼클래스는 선택한 날짜를 다음과 같이 묶어요.

- 연속된 날짜는 하나의 범위로 묶어요.
- 연속되지 않은 날짜는 별도의 범위로 나눠요.

묶인 범위는 나중에 각각 따로 편집하거나 삭제할 수 있어요.

### 추가 설정

- **시간대**: 사업을 운영하는 시간대를 설정해요. 이 시간대가 예약 페이지에 표시되고, 모든 예약도 이 시간대 기준으로 만들어져요.
- **Slot Interval**(슬롯 간격): 시간 선택의 단위를 정해요(예: 15분, 30분, 60분). 예약 페이지에 시간 슬롯이 얼마나 자주 나타나는지를 정하는 설정이에요. 예를 들어 30분으로 설정하면 예약 가능한 시간이 30분 간격으로 표시돼요.
- **Auto-confirm Bookings**(예약 자동 확정): 새 예약이 만들어지면 자동으로 확정해요. 이 설정을 끄면 예약은 기본적으로 **Unconfirmed**(미확정) 상태가 돼요.
- **Enable Multi-item Cart**(여러 항목 장바구니 활성화): 고객이 한 번의 결제로 여러 리스팅을 예약할 수 있게 해요.
- **Away Mode**(부재 모드): 새로 들어오는 온라인 예약을 일시적으로 모두 막아요.
- **Default Rental Times**(기본 대여 시간): 시간 선택 기능이 꺼져 있을 때, 시작일과 종료일에 적용할 기본 대여 시작·종료 시간을 정해요.
- **Set Cancellation Link Expiry**(취소 링크 만료 설정): 이 설정을 켜면 고객이 확인 알림과 알림 메시지에 들어 있는 링크로 직접 예약을 취소할 수 있는 시점을 제한해요. 끄면 고객은 예약이 시작되기 전까지 언제든 취소할 수 있어요.
  - **Cancellation Link Expires**(취소 링크 만료 시점): **Set Cancellation Link Expiry**를 켰을 때, 예약 시작 몇 분·몇 시간·며칠 전부터 링크를 사용할 수 없게 할지 선택해요.

{% hint style="info" %}
**Default Rental Times**는 **운영시간**보다 우선해요. 다만 선택한 운영 요일은 그대로 적용돼요.
{% endhint %}

{% hint style="info" %}
고객은 아직 시작하지 않은 예약만 취소할 수 있어요(**Active**(진행 중) 또는 **Completed**(완료)로 표시된 예약). 예약이 **Active**나 **Completed**로 바뀌면 이 설정과 관계없이 취소 링크가 더 이상 작동하지 않아요. <!-- 검토 필요: 원문 내용이 서로 다름 -->
{% endhint %}

## 알림

**알림** 탭에서는 예약 이벤트에 따라 발송되는 고객·직원 알림을 관리해요. 알림마다 **이메일**, **In-App**(앱 내), **SMS**, **WhatsApp** 채널로 보내도록 설정할 수 있어요. 각 알림 유형 옆의 **편집**(연필) 아이콘을 누르면 템플릿을 수정할 수 있어요.

### 알림 종류

- **예약 완료(Unconfirmed)**: 새 예약이 만들어졌지만 아직 확정되지 않았을 때 발송돼요.
- **예약 완료(Confirmed)**: 예약이 확정되었을 때 발송돼요.
- **취소**: 예약이 취소되었을 때 알려요.
- **일정 변경**: 예약 시간이나 날짜가 바뀌었을 때 알려요.
- **알림**: 예약 시작 시간 전에 리마인더를 보내요.
- **후속 조치**: 예약이 완료된 뒤 메시지를 보내요.

{% hint style="info" %}
알림은 예약 단위의 이벤트에서 발송돼요. 개별 리스팅이 수정될 때는 발송되지 않아요.
{% endhint %}

![알림 탭 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074902158/original/7MWI0d3GpjXG_uphCYQnMCfo9mEb1buldQ.png?1782886367)

## 현지화된 기본 알림 템플릿

기본 알림 템플릿은 **비즈니스 프로필**의 **플랫폼 언어**에 맞춰 표시돼요. 지원되는 이메일, SMS, WhatsApp 채널에 적용돼요.

- 대여를 새로 시작한 계정: 따로 할 일은 없어요. 기본 템플릿이 자동으로 현지화돼요.
- 이미 대여를 쓰고 있는 계정: **글로벌 설정 > 알림**으로 이동한 뒤 해당 템플릿에서 **기본값으로 초기화**를 선택하면 현지화된 버전을 불러와요.

직접 수정한 템플릿은 수동으로 초기화하지 않는 한 그대로 유지돼요.

![기본값으로 초기화로 현지화된 템플릿 불러오기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083350697/original/rrxh_T84bET2lR4HK6yyZEbB6by6B8ZFNw.png?1792004240)

## 예약 페이지 설정

**예약 페이지** 탭에서는 고객에게 보이는 예약 사이트의 모양과 동작을 정해요.

### 일반 정보

**일반 정보** 섹션에서는 다음을 설정해요.

- **Company Logo & Name**(회사 로고 및 이름): 회사 이름을 입력하고 로고를 업로드하면 예약 페이지에 표시돼요.
- **Account Slug**(계정 슬러그): 예약 페이지 URL을 정해요(예: `/rentals/your-business-name`). 모든 리스팅 URL의 기본 주소로도 쓰여요.
- **Default Location**(기본 위치): 대여 장소 주소를 입력해요.

![일반 정보 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056093363/original/LTyEoZz163o2e0yb0VQpPwJ-u33ldr-ZIw.png?1760558179)

### 페이지 사용자 지정

- **테마**: 예약 페이지의 라이트 또는 다크 테마를 선택해요. 헤더, 푸터, 위젯에 적용돼요.
- **언어**: 고객에게 보이는 예약 페이지의 언어를 선택해요.
- **Week Starts On**(한 주의 시작 요일): 예약 페이지의 날짜 선택기에서 한 주를 시작할 요일을 선택해요.
- **기본 색상**: 버튼, 날짜 선택 같은 모든 동작 요소의 색상을 정해요.
- **배경 색상**: 예약 페이지의 배경색을 선택해요.
- **Booking Page Layout**(예약 페이지 레이아웃): 리스팅을 카드 보기나 목록 보기로 표시할지, 고객이 원하는 보기를 바로 고르게 할지 정해요.
- **Listing Selection Button Label**(리스팅 선택 버튼 문구): 고객이 리스팅을 선택할 때 나타나는 버튼 문구를 바꿔요(예: '상세 보기').
- **Final Booking Button Label**(최종 예약 버튼 문구): 고객이 예약을 마무리하는 마지막 버튼의 문구를 정해요(예: '지금 예약하기').
- **Insert Custom Code**(사용자 지정 코드 삽입): 사용자 지정 CSS를 추가해 예약 페이지 디자인을 더 세밀하게 바꿔요. 코드를 붙여 넣고 저장하면 적용돼요.
- **Preview Booking Page**(예약 페이지 미리보기): 변경 사항을 저장하기 전에 실시간 미리보기로 확인해요.
- **Add to Booking Button Label**(예약에 추가 버튼 문구): **Enable Multi-item Cart**를 켰을 때 장바구니 담기 버튼에 표시되는 문구를 정해요. 이 설정은 여러 항목 장바구니를 켠 경우에만 나타나요.

{% hint style="info" %}
**Preview Booking Page**를 사용하면 디자인과 레이아웃 변경 결과를 게시하기 전에 미리 확인할 수 있어요.
{% endhint %}

![페이지 사용자 지정 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056093429/original/P6Z-nc5oz-3YBgoHjHjuUfQcdQq5PrJXvA.png?1760558274)

### 폼과 동의

- **Default Form**(기본 폼): 리스팅을 예약할 때 보여 줄 폼을 선택해요. 기본 폼(이름, 성, 전화번호, 이메일, **추가 정보**)을 쓰거나, **사이트 > 폼**에서 만든 사용자 지정 폼을 쓸 수 있어요. 이 폼으로 예약자 정보를 수집하고, 그 정보로 시스템에 연락처가 만들어져요.
- **Sticky Contacts**(연락처 기억): 브라우저 쿠키로 고객 정보를 기억해, 다시 방문한 고객의 예약 폼을 미리 채워 줘요. 고객이 직접 폼을 작성할 때만 켜세요. 여러 고객이 같은 브라우저를 쓰면 정보가 덮어써질 수 있어요.
- **Consent Checkbox & Message**(동의 체크박스 및 메시지): 켜면 예약 과정에서 고객의 동의를 받아요. 동의 문구는 사용자 지정할 수 있어요. 기본 폼을 사용할 때만 쓸 수 있어요.

![폼과 동의 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056093453/original/1pmbuyVCfzv5HQrU7kBcpYgaOHqQVjcXIg.png?1760558313)

### 확인 페이지 설정

**Confirmation Page Settings**(확인 페이지 설정)에서는 예약이 끝난 뒤 기본 확인 페이지에 사용자 지정 메시지를 보여 주거나, 고객을 다른 페이지로 이동시키도록 정해요.

- **Confirmation Type**(확인 유형): 예약 후 **감사 메시지**와 **리다이렉트 URL** 중에서 선택해요.
- **Confirmation Header & Message**(확인 제목 및 메시지): 예약이 완료된 뒤 보여 줄 확인 문구를 정해요. **Confirmation Type**이 **감사 메시지**일 때 적용돼요.

![확인 페이지 설정 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080593638/original/yZ6inPUwOC0Csi_i6HFXIhTR7ipjN2L6sQ.png?1789041038)

- **Let a custom form override this with its own rules**(사용자 지정 폼이 자체 규칙으로 이 설정을 대신하게 하기): 이 옵션을 켜면 사용자 지정 폼이 확인 페이지 경험을 제어해요. 켜져 있을 때는 다음과 같이 동작해요.
  - 폼의 **On Submit**(제출 시) 동작이 **감사 메시지** 또는 **리다이렉트 URL**로 설정되어 있으면, 그 설정이 확인 페이지에 쓰여요.
  - 폼의 **On Submit** 동작이 **Order confirmation**(주문 확인)이거나 적용할 **On Submit** 동작이 없으면, 여기에서 정한 확인 페이지 설정이 대신 쓰여요.
  - 리다이렉트, 사용자 지정 메시지, 리드 부적격 처리 같은 폼의 조건부 규칙도 예약 후에 적용돼요.

{% hint style="info" %}
사용자 지정 폼의 필드 표시/숨김 조건은 이 설정과 관계없이 예약하는 동안 항상 적용돼요.
{% endhint %}

## 결제 설정

**결제** 탭에서는 결제, 보증금, 통화를 어떻게 처리할지 정해요.

### 일반 결제 설정

- **통화**: 결제 금액을 표시하고 받을 통화를 선택해요. 모든 리스팅에 적용돼요. 통화를 바꿀 때는 각 리스팅의 가격도 그에 맞게 업데이트했는지 확인하세요.
- **Require Payment at Booking**(예약 시 결제 필수): 고객이 예약할 때 바로 결제해야 하는지, 나중에 결제해도 되는지 정해요. 끄면 온라인으로는 결제를 받지 않지만, 총 가격은 고객에게 계속 표시돼요.
- **Enable Security Deposits**(보증금 활성화): 모든 예약에 대한 보증금 처리를 켜거나 꺼요.
- **Security Deposit Mode**(보증금 모드):
  - **Collect Upfront**(선결제): 보증금이 처음 예약 총액에 포함돼요.
  - **Card on File Only**(카드 정보만 저장): 고객의 카드는 저장하지만 보증금은 미리 청구하지 않아요. 필요하면 나중에 **Edit Booking**(예약 편집) 페이지에서 보증금을 직접 청구할 수 있어요. **Card on File**을 쓰는 고객은 신용카드나 체크카드로 결제해야 하고, 다른 결제 수단은 사용할 수 없어요.

{% hint style="info" %}
**온라인 결제**를 끄면 보증금이 미리 내야 할 총액에 포함돼요. 이 경우 대여 시점에 리스팅 총액과 함께 보증금도 받아야 해요.
{% endhint %}

{% hint style="warning" %}
보증금 설정은 **Edit Booking** 화면에서 결제가 처리되는 방식에 직접 영향을 줘요.
{% endhint %}

![일반 결제 설정 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056093908/original/qXGyqAQzyA5V8Xz6-H0fjA0HPQnJFHFghQ.png?1760559123)

### 결제 모드

- 안전하게 테스트할 수 있는 **테스트 모드**와 실제 거래를 처리하는 **라이브 모드** 중에서 선택해요.
- **Authorize.net**이나 **Stripe** 같은 연결된 게이트웨이가 여기에 표시되고, 여기서 관리할 수 있어요.

{% hint style="info" %}
**라이브 모드**를 켜기 전에 항상 **테스트 모드**에서 테스트 예약을 해 보세요. 인보이스 금액과 결제 흐름이 올바른지 확인할 수 있어요.
{% endhint %}

![결제 모드 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056093935/original/zAtV5mpNTWrs7ARc9k9sGJpEssy7IjXrtA.png?1760559176)

## 자주 묻는 질문

### Away Mode는 어떤 기능인가요?

켜면 고객이 새로 예약할 수 없어요. 이미 들어온 예약에는 영향이 없어요.

### 결제 설정이 잘 되었는지 어떻게 테스트하나요?

**결제** 탭에서 **테스트 모드**를 켜세요. 고객에게 실제로 청구하지 않고 거래를 시뮬레이션할 수 있어요.

### 예약이 끝난 뒤 고객을 다른 페이지로 이동시킬 수 있나요?

네, 가능해요. **예약 페이지**의 **Confirmation Page Settings**에서 사용자 지정 감사 메시지나 리다이렉트 URL을 설정할 수 있어요.

### 특정 리스팅이나 카테고리로 연결되는 직접 링크에도 글로벌 설정 변경 사항이 반영되나요?

네. 리스팅과 카테고리 공유 링크는 같은 예약 환경을 필터링해서 보여 주는 화면이에요. 그래서 글로벌 설정(레이아웃, 폼, 결제, 알림)을 바꾸면 자동으로 적용돼요.
