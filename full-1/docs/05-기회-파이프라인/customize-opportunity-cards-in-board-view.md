---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003910-customize-opportunity-cards-in-board-view
번역일: 2026-11-06
카테고리: 05-기회-파이프라인
---

# 보드 보기에서 기회 카드 항목 설정하기

파이프라인 보기의 기회 카드에 표시할 필드를 직접 고를 수 있어요. 지금 가장 필요한 정보만 카드에 올려 두면 한눈에 확인할 수 있어서 작업이 빨라져요.

[동영상](https://www.youtube.com/embed/pwI0YfXz5YI?&wmode=opaque)

## 기능 1. 기회 카드 항목 바꾸기

### 1. 설정 화면 열기

![기회 카드 설정 화면을 여는 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034966768/original/Pf_YMQ_LbnuimXO2sFfoPFvDe7Qjz1gL4Q.jpeg?1729252722)

1. **기회 관리**(Opportunities)로 이동하세요.
2. 기회 보드 오른쪽 위에 있는 **필드 관리**를 클릭하세요.

### 2. 표시할 필드 고르기

![카드에 표시할 필드를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034966760/original/whrAEzcNjJ804SsmgmasKwxxtLxL1bq5Gg.jpeg?1729252715)

기회 카드에는 최대 7개의 필드를 표시할 수 있어요. 고를 수 있는 필드는 다음과 같아요.

| 구분 | 포함되는 항목 |
| --- | --- |
| **Opportunity Standard Fields**(기회 표준 필드) | **기회명**, **기회 상태**, **Lost Reason**(고객전환실패 사유), **Opportunity Value**(기회 금액), **Opportunity Owner**(기회 담당자), **기회 소스** |
| **Opportunity Custom Fields**(기회 커스텀 필드) | 기회용으로 만든 **커스텀 필드** 중 카드에 표시하기로 한 것(예: 드롭다운, 체크박스, 날짜, 텍스트 필드) |
| **Primary Contact's Information**(주 연락처 정보) | **연락처 이름**, **연락처 전화번호**, **연락처 이메일**, **사업자명**, **Next Task Due Date**(다음 작업 마감일), **Days Till Next Task Due Date**(다음 작업 마감일까지 남은 일수), **Days Till Next Appointment Date**(다음 예약일까지 남은 일수), **참여 점수** |
| **Opportunity Activity**(기회 활동) | **Created On**(생성일), **Updated On**(수정일), **Last Stage Change Date**(마지막 단계 변경일), **Last Status Change Date**(마지막 상태 변경일), **Days Since Last Stage Change Date**(마지막 단계 변경 후 경과 일수), **Days Since Last Status Change Date**(마지막 상태 변경 후 경과 일수), **Days Since Last Updated**(마지막 수정 후 경과 일수) |

{% hint style="info" %}
기회 카드를 설정할 때 보이는 필드와 폴더는 **커스텀 필드**에서 가져와요. **기본 정보**나 **추가 정보** 같은 폴더가 보이지 않으면 아직 만들지 않은 거예요.
{% endhint %}

{% hint style="info" %}
**참여 점수**는 2025년 3월 19일 이후에 생성되었거나 수정된 기회에서만 보여요.
{% endhint %}

### 3. 카드 아래쪽 카운터 설정하기

![카드 아래쪽 카운터와 아이콘을 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034966743/original/6gZVsKjAPOYe2BvRxpozZRiiWdGaVlD2YQ.jpeg?1729252706)

**빠른 액션** 탭으로 이동하면 기회 카드 아래쪽의 카운터와 아이콘도 바꿀 수 있어요. 고를 수 있는 항목은 다음과 같아요.

- 대화 아이콘(읽지 않은 메시지 수 표시)
- 작업 아이콘(작업 수 표시)
- 메모 아이콘(메모 수 표시)
- 태그 아이콘(태그 수 표시)
- 통화 아이콘
- 예약 아이콘(다음 예약 날짜 표시)

{% hint style="info" %}
설정한 보기에서 기회를 내보내면 카드에 보이는 필드만이 아니라 기회의 모든 필드가 포함돼요.
{% endhint %}

## 기능 2. 파이프라인이 여러 개일 때 설정하기

![여러 파이프라인에 설정을 적용하는 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034966728/original/Nk84MSDUQqHusKTwnH7Od5stwyK8Hq6YEA.png?1729252697)

- 설정은 기본적으로 파이프라인마다 따로 적용돼요. 계정에 파이프라인이 여러 개 있으면 변경 내용을 모든 파이프라인에 적용하는 옵션도 쓸 수 있어요.
- 설정은 사용자별로 저장돼요. 내가 바꾼 내용은 나에게만 적용되므로 사람마다 다른 보기를 쓸 수 있어요.

{% hint style="info" %}
설정은 현재 보기에 고정되어, 다시 바꾸기 전까지 유지돼요. 다만 설정은 지금 쓰는 브라우저의 로컬 저장소에만 저장돼요. 다른 브라우저에서 열거나 다른 사용자가 열면 반영되지 않아요.
{% endhint %}

## 기능 3. 레이아웃 옵션

- **Default View**(기본 보기):
  선택한 필드의 레이블과 값을 모두 보여 줘요.
  ![기본 보기 레이아웃 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034967173/original/XfykkqHnBzgIyvlUzaX_syB5eC1gWTEH5w.png?1729253051)
- **Compact View**(간략 보기):
  - 선택한 필드의 값만 보여 줘요.
  - 필드 위에 마우스를 올리면 레이블과 추가 정보가 나타나요.
- ![간략 보기 레이아웃 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034967351/original/ePg8it-v-id4yZhBJvbIsyMY7dqPxqPbsQ.jpeg?1729253160)

**Unlabeled View**(레이블 없는 보기):

- 카드의 한 줄에 필드 하나씩 보여 줘요.
- 선택한 필드의 값만 보여 줘요.

![레이블 없는 보기 레이아웃 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040236440/original/gyQs4ZFRffh_ujnTh-wq4-ZgYnlctenZfg.jpeg?1737530204)

## 기능 4. 단계(열) 접기·펼치기와 너비 조절

**기회 관리**의 보드(칸반) 보기에서 파이프라인 단계를 접고, 펼치고, 너비를 조절할 수 있어요. 화면이 복잡할 때 진행 중인 작업에 집중하기 좋아요.

### 단계를 접거나 펼치려면

1. **기회 관리**로 이동하세요.
2. 칸반 보기인지 확인하세요.
3. 단계 헤더의 `>` 또는 `<`를 클릭하면 해당 단계가 접히거나 펼쳐져요.

   ![단계 헤더를 클릭해 접고 펼치는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068183806/original/cHrOJzaBpWHn62uUbsNYXL3IAQUg_6t4Dw.gif?1774977556)

### 단계 너비를 조절하려면

1. 단계 열의 오른쪽 가장자리 근처에 마우스를 올리세요.
2. 가장자리를 끌어서 열 너비를 조절하세요.

   ![단계 열의 너비를 끌어서 조절하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068183988/original/-eJhez5lIbXh8aWLdVcyTR9WABIyLk0Now.gif?1774977647)

### 설정은 어떻게 저장되나요?

- 단계 레이아웃은 사용자별로 저장돼요. 다른 사용자에게는 영향을 주지 않아요.
- 설정은 로컬 저장소에 저장되므로 같은 브라우저에서는 계속 유지돼요.
- 다른 브라우저나 기기에서 하이퍼클래스를 열면 저장한 레이아웃이 그대로 적용되지 않을 수 있어요.

![저장된 단계 레이아웃이 유지되는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068184153/original/5JxzqzS3_TpTNjHuDqlB3zOzgLWI14Jd6A.gif?1774977796)

{% hint style="info" %}
- 진행하지 않는 단계나 우선순위가 낮은 단계는 접어 두면 파이프라인을 훑어보기 쉬워요.
- 진행 중인 단계는 너비를 넓히면 기회를 더 빠르게 검토하고 우선순위를 정할 수 있어요.
{% endhint %}
