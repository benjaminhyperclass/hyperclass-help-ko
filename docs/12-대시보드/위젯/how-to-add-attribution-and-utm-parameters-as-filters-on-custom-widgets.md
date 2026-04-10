---

번역일: 2026-04-07
카테고리: 12-대시보드 > 위젯
---

# 커스텀 위젯에서 어트리뷰션과 UTM 파라미터를 필터로 추가하는 방법

연락처 및 기회 위젯의 어트리뷰션 파라미터 기능을 통해 사용자는 연락처와 기회의 소스 및 활동에 대한 더 깊이 있는 인사이트를 얻을 수 있습니다. 이 기능으로 첫 번째(First) 또는 마지막(Last) 어트리뷰션을 기준으로 필터링하고, 주요 UTM 파라미터를 활용하여 상세한 커스텀 위젯을 만들 수 있습니다. 이러한 개선 사항을 통해 사용자는 활동(Activity), 세션 소스(Session Source), 매체(Medium) 등의 속성으로 데이터를 그룹화하고 확인할 수 있으며, 상호작용하는 도넛 및 라인 그래프를 생성할 수 있습니다. 또한 세부 인사이트 테이블과 CSV 내보내기에 새로운 속성을 포함한 포괄적인 보고서 작성과 테이블 위젯의 커스터마이징 가능한 컬럼 기능도 제공합니다. 이 기능은 사용자의 데이터 시각화 및 보고 요구사항에 대한 더 큰 유연성과 제어권을 제공하여 궁극적으로 연락처와 기회 소스를 효과적으로 추적하고 최적화하는 능력을 향상시킵니다.

**중요 사항:**
어트리뷰션과 UTM 파라미터는 현재 연락처 및 기회 위젯에서만 사용 가능합니다.

## 목차

- [커스텀 위젯의 어트리뷰션 필터](#커스텀-위젯의-어트리뷰션-필터)
- [세션 소스 또는 매체로 도넛 차트 그룹핑하기](#세션-소스-또는-매체로-도넛-차트-그룹핑하기)  
- [테이블 차트 컬럼에 어트리뷰션 필드와 UTM 파라미터 추가하기](#테이블-차트-컬럼에-어트리뷰션-필드와-utm-파라미터-추가하기)

---

## 커스텀 위젯의 어트리뷰션 필터

### 1단계: 대시보드 편집

- 대시보드에서 편집 아이콘을 클릭하세요

### 2단계: 위젯 추가

- Add widget(위젯 추가) 버튼을 클릭하고 연락처(Contact) 또는 기회(Opportunity) 카테고리에서 원하는 위젯을 선택하세요

### 3단계: 어트리뷰션 조건 추가

- Condition(조건) 탭으로 전환하고 "Add Condition(조건 추가)"를 클릭하세요

- 드롭다운에서 Attribution(어트리뷰션)을 선택하세요
![어트리뷰션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026905632/original/XEur5T00AasQh4oNFfF8gmzf_C_O23qkjw.png?1717156628)

- First(첫 번째) 또는 Latest(마지막) 어트리뷰션 중 어떤 것을 기준으로 필터링할지 선택하세요
![어트리뷰션 타입 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026905646/original/fxNBp9PxyYef7gpZP474vvUUtzvkwf458g.png?1717156639)

### 4단계: 어트리뷰션/UTM 필드 추가

- 어트리뷰션 타입을 추가한 후 "Add attribution fields(어트리뷰션 필드 추가)"를 클릭하세요
![어트리뷰션 필드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026905663/original/JjWVfDj8Ua6nT_NV1vdE0tWlHw5hyqcDxA.png?1717156654)

- 드롭다운에서 사용하려는 속성을 선택하세요
![속성 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026905680/original/lRdxw4x5TOhcYQMDCX1vdIJba0MwDllXwg.png?1717156673)

- "Add attribution fields(어트리뷰션 필드 추가)"를 클릭하여 더 많은 어트리뷰션 필드를 추가할 수 있습니다

**커스텀 위젯에서 지원되는 어트리뷰션 필드:**

- UTM Campaign (UTM 캠페인)
- UTM CampaignId (UTM 캠페인 ID)
- UTM Content (UTM 콘텐츠)
- UTM Keyword (UTM 키워드)
- UTM Matchtype (UTM 매치타입)
- UTM Medium (UTM 매체)
- UTM AdId (UTM 광고 ID)
- UTM AdGroupId (UTM 광고그룹 ID)
- UTM Source (UTM 소스)
- 매체(Medium), 세션 소스(Session Source) 등 기타 어트리뷰션 속성

### 5단계: 위젯 저장

위젯 설정을 완료한 후 저장하세요.

---

## 세션 소스 또는 매체로 도넛 차트 그룹핑하기

### 1단계: 대시보드 편집

- 대시보드에서 편집 아이콘을 클릭하세요

### 2단계: 위젯 추가

- Add widget(위젯 추가) 버튼을 클릭하고 연락처(Contact) 또는 기회(Opportunity) 카테고리에서 원하는 위젯을 선택하세요

### 3단계: 도넛 또는 라인 그래프 선택

- 차트 선택 바에서 도넛(Donut) 또는 라인 그래프(Line graph)를 선택하세요

### 4단계: 어트리뷰션 조건 추가

- Condition(조건) 탭으로 전환하고 "Add Condition(조건 추가)"를 클릭하세요

- 드롭다운에서 Attribution(어트리뷰션)을 선택하세요

- First(첫 번째) 또는 Latest(마지막) 어트리뷰션 중 어떤 것을 기준으로 필터링할지 선택하세요

### 5단계: 그룹/보기 속성 업데이트

- Configuration(설정) 탭으로 전환하세요

- Group/Viewby(그룹/보기) 드롭다운에서 다음 속성 중 선택할 수 있습니다:
  - Session Source (세션 소스)
  - Medium (매체)
![그룹/보기 속성 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026905765/original/Ef9zQCBCvyW4_zCuBzdPoensGwVxIYXsLw.png?1717156740)

---

## 테이블 차트 컬럼에 어트리뷰션 필드와 UTM 파라미터 추가하기

### 1단계: 대시보드 편집

- 대시보드에서 편집 아이콘을 클릭하세요

### 2단계: 위젯 추가

- Add widget(위젯 추가) 버튼을 클릭하고 연락처(Contact) 또는 기회(Opportunity) 카테고리에서 원하는 위젯을 선택하세요

### 3단계: 테이블 차트 선택

- 차트 선택 바에서 Table Chart(테이블 차트)를 선택하세요

### 4단계: 컬럼 선택

- "Select Columns(컬럼 선택)"를 클릭하세요

- 테이블 차트에서 보고 싶은 컬럼을 선택하세요
![컬럼 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026905776/original/ZjRc7hVGPAmTt7ze7EYcevzhYRgFoIKEcA.png?1717156751)

### 5단계: 저장

설정을 완료한 후 위젯을 저장하세요.

---

**중요 사항:**

1. UTM 파라미터와 필드는 위젯 조건에 어트리뷰션 타입(First 또는 Latest)이 추가된 경우에만 테이블 및 세부 인사이트 보기에서 표시됩니다.

2. 그룹/보기 속성인 세션 소스(Session Source)와 매체(Medium)는 위젯 조건에 어트리뷰션 타입(First 또는 Latest)이 추가된 경우에만 선택할 수 있습니다.

---
*원문 최종 수정: Thu, 5 Sep, 2024 at 4:14 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*