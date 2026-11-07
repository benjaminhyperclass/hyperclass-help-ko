---
원문: /support/solutions/articles/155000007817-custom-metrics-metric-level-filters-meta-ads-google-analytics-support
번역일: 2026-11-06
카테고리: 12-대시보드
---

# 맞춤 지표: 지표별 필터, Meta 광고·Google Analytics 지원

맞춤 지표에서 이제 지표별 필터를 쓸 수 있고, Meta 광고와 Google Analytics 데이터도 쓸 수 있어요. 이 문서에서는 새로 생긴 기능과 사용 방법, 바로 만들어 볼 수 있는 지표 예시를 알려 드려요.

## 새로운 소식

이번 업데이트로 맞춤 지표에 세 가지 기능이 추가됐어요.
- 지표별 필터: 수식 안의 각 지표 토큰에 필터를 직접 붙일 수 있어요. 연락처는 태그로, 기회는 파이프라인이나 담당자로, 통화는 상담원별로 거를 수 있어요. 수식 안의 지표마다 독립된 필터를 가질 수 있고, 한 필터에 여러 AND 조건을 넣을 수 있어요.
- Meta 광고 데이터 사용: Sum of Spend, Impressions, CTR, CPC, CPM, Conversions, Reach 같은 Meta 광고 지표를 CRM 데이터와 함께 사용자 지정 지표 수식에 바로 쓸 수 있어요.
- Google Analytics 데이터 사용: Google Analytics 지표를 수식에 가져와서 기회당 비용(Cost per Opportunity) 같은 채널 통합 KPI를 하이퍼클래스 안에서 만들 수 있어요.
- 전체 화면 빌더: 맞춤 지표가 팝업 대신 전체 화면 편집기로 열려요. 수식과 지표별 필터를 설정할 공간이 더 넓어졌어요.

## 지표에 필터 추가하기

### 1단계: 맞춤 지표 빌더 열기

**대시보드**로 이동해 **Edit Mode**(편집 모드)로 들어간 뒤, **Add Widget**(위젯 추가)을 클릭하세요. 기존 사용자 지정 지표를 열거나 새로 만들면 돼요.

![맞춤 지표 빌더 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070627448/original/mX-T5M_wxDomOjMAOK73DNipO1XKy7bxaw.png?1777993007)

### 2단계: 수식 만들기

수식 빌더에서 평소처럼 지표 토큰을 추가하세요.

{% hint style="info" %}
팁: 지표 토큰을 클릭하면 필터를 추가해서 그 지표의 데이터를 어떻게 계산할지 정할 수 있어요.
{% endhint %}

![수식 빌더에 지표 토큰 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070627483/original/JiCjWLDrypRDPfFq2drSLqByZg6C_c84Mg.png?1777993033)

### 3단계: 지표 토큰을 클릭해 필터 열기

수식에서 지표 토큰을 클릭하세요. 화면 오른쪽에 **Configuration**(구성) 패널이 열리고 **필터** 탭이 보여요.

### 4단계: 필터 조건 설정하기

**Configuration** 패널에서 다음 순서로 설정하세요.

1. **적용 대상** 필드에서 지금 필터를 설정하는 지표가 맞는지 확인하세요.
2. **Date Property**(날짜 속성)를 설정하세요. 지표를 계산할 기준 날짜 필드를 고르면 돼요. 예를 들어 **Created On**(생성일)이 있어요.
3. 필터 행에서 첫 번째 드롭다운으로 필터 속성을 선택하세요. 예: 태그, 파이프라인, **Owner**(담당자), **Source**(출처)
4. 연산자를 선택하세요. 예: **Is one of**(다음 중 하나), **Is not**(아님)
5. 필터 값을 선택하거나 입력하세요.
6. 같은 지표에 조건을 더 추가하려면 **+ AND**를 클릭하세요.
7. 필터 행을 하나 더 추가하려면 **+ Add Filter**(필터 추가)를 클릭하세요.

### 5단계: 지표 저장하기

필터 설정이 끝나면 오른쪽 위의 **업데이트**를 클릭하세요. 필터가 적용된 지표 토큰에는 배지에 필터 아이콘이 표시돼서 한눈에 알아볼 수 있어요.

![필터 아이콘이 표시된 지표 토큰](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070612084/original/TLOuxjxDJSAVkF3oHJljcq-L0w1FH_DgMw.png?1777985474)

## Meta 광고 지표 사용하기

### 1단계: 수식 빌더 열기

맞춤 지표 빌더에서 수식 필드를 클릭하면 지표 선택기가 열려요.

### 2단계: Meta 광고 선택하기

지표 카테고리 목록에서 **Meta 광고**를 선택하세요. 사용할 수 있는 Meta 광고 지표 목록이 펼쳐져요.

- **Sum of Spend**(지출 합계)
- **Sum of Ad Clicks**(광고 클릭 합계)
- **Sum of Impressions**(노출 합계)
- **Sum of Conversions**(전환 합계)
- **Sum of Reach**(도달 합계)
- **Sum of Website Purchases**(웹사이트 구매 합계)
- **Average / Min / Max Cost Per Click (CPC)**(클릭당 비용 평균/최소/최대)
- **Average / Min / Max Cost Per Conversion**(전환당 비용 평균/최소/최대)
- **Average / Min / Max Cost Per Milles (CPM)**(1,000회 노출당 비용 평균/최소/최대)
- **Average / Min / Max Click-Through Rate (CTR)**(클릭률 평균/최소/최대)

### 3단계: 수식 만들기

필요한 Meta 광고 지표를 선택하고, 연산자로 다른 지표와 조합하세요.

예시: `Sum of Spend (Meta) / Sum of Conversions` → Meta 캠페인의 전환당 비용(Cost per Conversion)을 대시보드에서 바로 확인할 수 있어요.

## Google Analytics 지표 사용하기

### 1단계: 수식 빌더 열기

맞춤 지표 빌더에서 수식 필드를 클릭하면 지표 선택기가 열려요.

### 2단계: Google Analytics 선택하기

지표 카테고리 목록에서 **Google Analytics**를 선택하세요. 사용할 수 있는 GA 지표 목록이 펼쳐져요.

### 3단계: 수식 만들기

필요한 GA 지표를 선택하고 CRM 지표와 조합하세요.

예시: `Sum of Spend (GA) / Count of Opportunities` → 광고 지출 데이터와 파이프라인 데이터를 합쳐 기회당 비용(Cost per Opportunity)을 대시보드에서 바로 확인할 수 있어요.

{% hint style="info" %}
참고: **설정 > 연동**에서 Google Analytics 계정을 먼저 연결해야 지표 선택기에 GA 지표가 나타나요.
{% endhint %}

## 이제 만들 수 있는 지표 예시

| 지표 이름 | 수식 | 필터 |
| --- | --- | --- |
| 기회 전환 성공률 | `Count of Opportunity [Won] / Count of Opportunity [Total] × 100` | 파이프라인 또는 Owner로 필터 |
| 고객 비율 | `Count of Contacts [Tag = Customer] / Count of Contacts × 100` | 태그 = Customer |
| 출처별 리드 전환율 | `Count of Opportunity [Won] / Count of Contacts × 100` | 연락처 출처 = Facebook / Google |
| 기회당 비용 | `Sum of Spend (GA) / Count of Opportunity` | — |
| 전환당 비용 | `Sum of Spend (Meta) / Sum of Conversions` | — |
| 통화당 수익 | `총 수익 / Count of Calls` | Call Made By로 필터 |

## 자주 묻는 질문

### 같은 수식 안에서 지표마다 따로 필터를 추가할 수 있나요?

네. 수식의 지표 토큰마다 독립된 필터를 가질 수 있어요. 토큰을 클릭하면 그 토큰의 필터 설정이 열리고, 수식 안의 다른 지표에는 영향을 주지 않아요.

### 지표 하나에 필터 조건을 몇 개까지 추가할 수 있나요?

한 지표의 필터 안에서 AND 조건으로 여러 개를 추가할 수 있어요. 조건은 속성, 연산자, 값으로 이루어진 행 하나가 조건 하나예요.

### Meta 광고와 Google Analytics 지표도 대시보드 기간 설정을 따르나요?

네. 수식 빌더의 다른 지표와 마찬가지로, Meta 광고와 Google Analytics 지표도 대시보드나 리포트에 설정한 기간을 기준으로 계산돼요.

### 필터는 수식 전체에 적용되나요, 해당 지표에만 적용되나요?

필터는 설정한 지표 토큰에만 적용돼요. 같은 수식의 다른 지표 토큰에는 영향이 없어요.

### Google Analytics나 Meta 광고 데이터가 지표 선택기에 안 보여요.

서브 계정의 **설정 > 연동**에서 해당 연동이 연결되어 있는지 확인하세요. 맞춤 지표 빌더에서 지표를 쓰려면 Google Analytics와 Meta 광고가 연결되어 있어야 해요.

### 필터를 적용한 사용자 지정 지표를 스냅샷으로 보낼 수 있나요?

네. 필터 설정을 포함한 사용자 지정 지표를 스냅샷으로 다른 서브 계정에 보낼 수 있어요. 받는 계정에 같은 데이터 소스와 필드 값이 있으면 필터가 그대로 유지돼요.
