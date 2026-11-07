---
원문: /support/solutions/articles/155000006630-dashboards-custom-object-widgets-and-insights
번역일: 2026-11-06
카테고리: 12-대시보드
---

# 대시보드에서 사용자 지정 객체 위젯으로 데이터 확인하기

사용자 지정 객체 위젯을 쓰면 직접 만든 사용자 지정 객체 데이터를 하이퍼클래스 대시보드에서 차트로 볼 수 있어요. 반려동물, 부동산, 케이스, 프로젝트처럼 기본 CRM 객체로 담기 어려운 데이터도 실시간 차트로 확인하고, 팀원과 안전하게 공유할 수 있어요.

## 사용자 지정 객체 위젯이란?

사용자 지정 객체 위젯은 **서브 계정 설정**에서 만든 사용자 지정 객체를 참조하는 차트예요. 비즈니스마다 관리하는 데이터가 달라요. 이 위젯은 반려동물, 부동산, 케이스 같은 비표준 레코드를 합계와 평균으로 보여 줘요. 필터와 스타일을 적용해서 여러 대시보드에서 다시 쓸 수도 있어요.

## 사용자 지정 객체 위젯의 장점

기본 CRM 객체 밖에 있는 데이터도 비즈니스에 중요한 KPI로 보여 줄 수 있어요.

- 맞춤 분석: 직접 관리하는 레코드로 지표를 만들 수 있어요(예: 평균 반려동물 나이).
- 통합 리포팅: 연락처, 기회, 사용자 지정 객체 지표를 한 대시보드에 함께 둘 수 있어요.
- 유연한 차트: **Numeric**(숫자), **Line**(선), **Bar**(막대), **Horizontal Bar**(가로 막대), **Donut**(도넛), **Table**(표) 중에서 데이터에 맞는 차트를 고를 수 있어요.
- 재사용 가능한 필터: 원래 위젯 보기를 바꾸지 않고 대시보드의 **빠른 필터**나 위젯 단위 필터를 적용할 수 있어요.
- 안전한 공유: 기존 대시보드 권한 단계를 그대로 따르므로, 권한이 있는 사용자만 위젯을 보거나 편집할 수 있어요.

## 지표와 차트 유형

무엇을 측정할 수 있고 어떻게 보여 줄 수 있는지 알면, 궁금한 내용에 맞는 차트를 고르기 쉬워요.

- 사용자 지정 객체 위젯에서 쓸 수 있는 지표: **Count**(개수), **Sum**(합계), **Average**(평균)
- 지원하는 차트 유형(대시보드 기준): **Numeric**, **Table**, **Bar**, **Horizontal Bar**, **Line**, **Donut**
- 위젯을 추가하면 추천 차트 유형이 미리 선택돼요. 차트 유형 선택 메뉴에서 언제든 바꿀 수 있어요.
- 표에서는 여러 필드를 열로 보여 줄 수 있어요. 차트는 그룹화를 지원하는 경우 조건에 맞는 필드로 데이터를 묶을 수 있어요.

## 권한과 공유

대시보드를 관리하는 것과 같은 권한 단계로 위젯을 보고, 필터링하고, 편집할 수 있는 사람을 정해요.

- 대시보드의 **보기**/**편집**/**FULL**/**NO ACCESS** 권한이 사용자 지정 객체 위젯에도 똑같이 적용돼요.
- 편집 권한이 있으면 차트 유형, 지표, 필터, 테마를 바꿀 수 있어요. 보기 권한만 있는 사용자는 **빠른 필터**를 사용할 수 있어요.
- 위젯의 점 세 개 메뉴에서 **중복**을 선택하면 원본에 영향을 주지 않고 위젯을 복제해서 따로 설정할 수 있어요.

함께 보면 좋은 문서: 대시보드 권한 관리, [위젯 복제하기](duplicating-widgets-on-a-dashboard.md)

## 사용자 지정 객체 위젯 설정하기

사용자 지정 객체가 이미 있다면 설정은 금방 끝나요. 필드가 지표, 그룹화, 필터에 쓰일 수 있도록 먼저 객체를 알맞게 만들어 두면, 처음부터 원하는 답을 얻는 위젯을 만들 수 있어요.

위젯을 추가하기 전에 먼저 사용자 지정 객체를 만들어 두세요. 자세한 방법은 [사용자 지정 객체 만들기 및 편집](../../07-워크플로우/기타/creating-and-editing-custom-objects.md)에서 확인할 수 있어요.

### 1) 대시보드에 사용자 지정 객체 위젯 추가하기

1. **서브 계정**에서 **대시보드**로 이동한 뒤, 왼쪽 위의 파란 버튼을 눌러 원하는 대시보드를 열어요.

   ![대시보드 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055786184/original/mKur0JVvJDqKuXfBFECi02REs4EkBtcPhQ.png?1760246447)
2. **편집**(연필 아이콘)을 클릭한 다음 **Add Widget**(위젯 추가)을 클릭해요.

   ![위젯 추가 버튼을 누르는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055786196/original/VADVTrGEzJ3UcAPMVoeYUv7LIwwatHonug.gif?1760246487)
3. 원하는 차트 유형(Numeric, Donut, Line, Bar, Table)을 고르고, **사용자 지정 객체**(예: 강아지) 카테고리까지 스크롤해요. 거기서 원하는 지표나 **Top Campaigns**(상위 캠페인) 위젯을 선택해요.

   ![사용자 지정 객체 위젯 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055786217/original/Una6aORTCDgc7NkNLV48OPr30VhYdDtufg.png?1760246611)
4. 필터(캠페인, 지표, 기간)를 적용하거나 테마와 색상을 바꿔요.

   ![필터와 테마 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055786231/original/q3BatzHNdkipD9hsmGv5X-QKfg6Ig5HZIQ.png?1760246691)
5. **저장**을 클릭해요. 그러면 위젯에 광고 데이터가 실시간으로 표시되기 시작해요.

### 2) 사용자 지정 리포트에 사용자 지정 객체 위젯 추가하기

1. **서브 계정**에서 **리포팅 > 사용자 지정 리포트**로 이동해요. 기존 리포트를 열거나 **Create Report**(리포트 만들기)를 클릭해요.

   ![사용자 지정 리포트 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055786251/original/BFj9ZABgpGvBo2gbWPNXaKcV4DAW3yuJrA.png?1760246761)
2. 빈 캔버스에서 시작하거나, 템플릿을 쓰거나, 기존 대시보드 레이아웃을 가져올 수 있어요. 원하는 방식을 선택해요.

   ![리포트 시작 방식 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055786262/original/VCV1S5rz7-6bAUZuMpXNJTX-0WFhxrSjNQ.png?1760246859)
3. 왼쪽 위의 **Add Widget/요소**(위젯/요소 추가)를 클릭해요. 위젯 목록에서 **사용자 지정 객체**(예: 강아지) 위젯을 찾아, 원하는 위젯을 레이아웃으로 끌어다 놓아요.

   ![위젯을 레이아웃으로 끌어다 놓는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055786297/original/bPOZ1dqXuH7OnDQ3frf6Kc9EewYMeQQRYg.png?1760247108)
4. 각 위젯의 **차트 유형**, **필터**, **테마**를 필요에 맞게 설정한 뒤 **저장**을 클릭해요.

   ![위젯별 차트 유형, 필터, 테마 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055786303/original/ZVr8x3CtEQDrRp2TaAx1r-mV6BwgUIUzjQ.png?1760247170)
5. **보내기** 또는 **일정**을 클릭해서 이메일 일정을 설정하면 리포트를 자동으로 받아볼 수 있어요.

   ![리포트 이메일 일정 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055786314/original/tEDjP9NHc13gOrGWrVtNg-Ee-7C71ILbOg.png?1760247267)

## 자주 묻는 질문

### 사용자 지정 객체는 몇 개까지 만들 수 있나요?
서브 계정당 최대 10개까지 만들 수 있어요. 각 객체는 위젯에서 사용할 수 있어요.

### 어떤 요금제에서 사용자 지정 객체와 대시보드를 쓸 수 있나요?
사용자 지정 객체, 대시보드, 사용자 지정 리포트는 모든 요금제에서 사용할 수 있어요.

### 사용자 지정 객체 위젯을 복제할 수 있나요?
네, 할 수 있어요. 점 세 개 메뉴에서 **중복**을 선택하면 설정이 그대로 복사돼요. 이후 필요한 부분만 고치면 돼요.

### 사용자 지정 객체의 선택 목록 필드로 그룹화할 수 있나요?
차트나 표가 그룹화를 지원하고, 객체에 조건에 맞는 선택 필드가 있으면 그 필드로 그룹화할 수 있어요. 차트 유형에 따라 쓸 수 있는지 여부가 달라요.

### 위젯에 “No data”(데이터 없음)라고 표시돼요.
다음 내용을 확인해 보세요.

- 사용자 지정 객체에 레코드가 있는지
- 사용할 수 있는 지표와 필드를 선택했는지
- 기간을 설정했다면 그 기간에 데이터가 포함되는지
- 필터나 **빠른 필터**가 모든 데이터를 제외하고 있지는 않은지
