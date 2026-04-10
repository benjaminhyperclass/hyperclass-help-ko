---

번역일: 2026-04-08
카테고리: 18-리포팅 > 추적-어트리뷰션
---

# 페이스북 광고 리포팅 설정 방법

페이스북 광고를 운영할 때, 시스템은 리드가 어떤 광고나 광고 세트에서 유입되었는지 최선을 다해 추적합니다. 더 나은 리포팅과 성공 캠페인 식별을 위해 페이스북 UTM 매개변수, 페이스북 픽셀, 그리고 워크플로우(Workflows)의 전환 API 사용을 권장합니다.

**이 문서에서 다루는 내용:**

[시작하기 전에 아래 참고사항을 확인해주세요:](#시작하기-전에-아래-참고사항을-확인해주세요)

[진입점(Entry Points):](#진입점entry-points)

[시스템 내 연락처 수준에서 사용 가능한 UTM 추적 매개변수:](#시스템-내-연락처-수준에서-사용-가능한-utm-추적-매개변수)

[정확한 리포팅을 위한 페이스북 캠페인 라벨링 방법](#정확한-리포팅을-위한-페이스북-캠페인-라벨링-방법)

[페이스북 광고 관리자에서 UTM 매개변수 추가하는 방법](#페이스북-광고-관리자에서-utm-매개변수-추가하는-방법)

[어트리뷰션 리포팅](#어트리뷰션-리포팅)

[문제 해결](#문제-해결)

- [Q1: 페이스북에서 광고를 미리보기 할 때 UTM 매개변수가 보이지 않는데요?](#q1-페이스북에서-광고를-미리보기-할-때-utm-매개변수가-보이지-않는데요)
- [Q2: 연락처의 첫 어트리뷰션 데이터가 보이지 않아요?](#q2-연락처의-첫-어트리뷰션-데이터가-보이지-않아요)
- [Q3: 광고, 광고 세트, 캠페인을 변경했는데 리포팅이 맞지 않아요?](#q3-광고-광고-세트-캠페인을-변경했는데-리포팅이-맞지-않아요)
- [Q4: 페이스북 비즈니스 계정이나 광고 관리자가 없는데요?](#q4-페이스북-비즈니스-계정이나-광고-관리자가-없는데요)
- [Q5: 페이스북 리드 제너레이션 광고를 사용하는데도 UTM 매개변수가 필요한가요?](#q5-페이스북-리드-제너레이션-광고를-사용하는데도-utm-매개변수가-필요한가요)
- [Q6: UTM 매개변수를 추적용 URL에 추가해야 하나요, 목적지 URL에 추가해야 하나요?](#q6-utm-매개변수를-추적용-url에-추가해야-하나요-목적지-url에-추가해야-하나요)
- [Q7: 목표 드롭다운은 무엇을 위한 것인가요?](#q7-목표-드롭다운은-무엇을-위한-것인가요)

## 시작하기 전에 아래 참고사항을 확인해주세요:

- 랜딩 페이지로 트래픽을 보내는 경우, 페이스북 픽셀과 워크플로우의 페이스북 전환 API를 설정했는지 확인하세요
- 페이스북은 광고를 미리보기로 볼 때 링크에 UTM 매개변수를 추가하지 않습니다
- UTM 매개변수나 추적이 필요한 매개변수에 특수문자나 이모지를 사용하지 마세요
- 아래 나열된 "진입점"에서 유입되는 연락처에 대해서만 첫 광고 어트리뷰션 데이터가 기록되며, 다른 경우에는 첫 어트리뷰션 데이터가 비어있을 수 있습니다

### 진입점(Entry Points):

- 폼(Form) 제출
- 설문(Survey) 제출  
- 캘린더(Calendar)
- 페이스북 리드 폼에서 직접 유입
- 2단계 주문 폼
- 채팅 위젯(Chat Widget)
- 인바운드 전화 (리드가 번호 풀로 직접 전화하는 경우는 작동하지 않고, 클릭투콜 시나리오에서만 작동)

### 시스템 내 연락처 수준에서 사용 가능한 UTM 추적 매개변수:

- Source [소스가 어떻게 분류되는지에 대한 로직은 이 표를 확인하세요 - "소스 분류 방법"](https://docs.google.com/spreadsheets/d/1XwGUuc_YhW4Qd-acn64XV_fPfgQuhf10DcF1OWFj5A0/edit?usp=sharing)
- 캠페인 이름: {{contact.attributionSource.utmCampaign}}
- 광고 세트 이름: {{contact.attributionSource.utmMedium}}
- 광고 이름: {{contact.attributionSource.utmContent}}
- 캠페인 ID: {{contact.attributionSource.campaignId}}
- fbclid: {{contact.attributionSource.fbclid}}
- gclid: {{contact.attributionSource.gclid}}
- 리퍼러: {{contact.attributionSource.referrer}}

# 정확한 리포팅을 위한 페이스북 캠페인 라벨링 방법

**참고사항:**

- 캠페인 이름, 광고, 광고 세트는 고유해야 합니다(아래 "올바른 설정 예시" 참조)
- 이름 매개변수는 캠페인/광고 세트/광고의 생명주기 동안 변경할 수 없습니다. 이름을 변경해야 하는 경우, 새로운 캠페인/광고 세트/광고를 만드세요
- 캠페인/광고 세트/광고를 변경하면서 새 캠페인을 만들지 않기로 결정하면, CRM 시스템의 데이터는 계속 원래/첫 번째 캠페인을 참조합니다

**올바른 설정 예시:**

캠페인 이름:
Campaign - Happy Teeth

광고 세트:
Campaign#1 - Happy Teeth - Audience #1 (San Rafael, Ca 20 mile radius - M&F)

광고: (고유)
- Ad#1: Happy teeth - Carousel Ad - Audience #1  
- Ad#2: Happy teeth - Video Ad - Audience #1 
- Ad#3: Happy teeth - Image Ad - Audience #1

![페이스북 광고 설정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48174032213/original/hVPHGvoqrEy9CYuqFgMbYs6P-yeUmZfrkQ.png?1640630395)

# 페이스북 광고 관리자에서 UTM 매개변수 추가하는 방법

1. [광고 관리자로 이동하려면 여기를 클릭하세요](https://business.facebook.com/adsmanager/manage/ads/)

광고 관리자에 접속하면 UTM 매개변수를 추가하고 싶은 캠페인을 선택한 다음 관리 광고(Manage ads) → 광고(Ads) → 편집(Edit)으로 이동하세요.

2. "추적(Tracking)" 섹션까지 스크롤하세요

![추적 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48173301734/original/RKnA2Zuqw5UV4fyM_U3CSt4L6gkkNmCJHw.png?1640200443)

3. "URL 매개변수 구성(Build a URL parameter)"을 클릭하세요

![URL 매개변수 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48173302000/original/8k3ZCXCI4EFBApZuGGjGeuZJELLj7tpjoQ.png?1640200552)

4. URL 매개변수 아래 7단계를 완료하세요

- "Campaign Source"를 클릭하고 필드에 "fb_ad"를 입력하세요
- "Campaign Medium"을 클릭하고 드롭다운에서 {{adset.name}}을 선택하세요
- "Campaign Name"을 클릭하고 드롭다운에서 {{campaign.name}}을 선택하세요
- "Campaign Content"를 클릭하고 드롭다운에서 {{ad.name}}을 선택하세요
- "Add Parameter" 버튼을 클릭하세요
- "Parameter name"에 "campaign_id"를 입력하고 "Value"에는 드롭다운 메뉴에서 "{{campaign.id}}"를 선택하세요
- 변경사항을 저장하려면 "Apply"를 누르세요

![UTM 매개변수 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261752780/original/KL8jbKqo5KzHh_3uSbiTvx0kcQ6nTuYmrQ.png?1667831557)

**참고사항:**

- 페이스북은 광고를 검토하고 승인하는 데 시간이 걸립니다. 승인되면 시스템 내에서 UTM 매개변수를 통해 광고가 실행되고 추적됩니다
- UTM 매개변수나 추적이 필요한 매개변수에 특수문자나 이모지를 사용하지 마세요
- 테스트 시 페이스북은 광고를 미리보기로 볼 때 링크에 UTM 매개변수를 추가하지 않습니다

# 어트리뷰션 리포팅

캠페인 및 소스/어트리뷰션 리포팅에 대한 자세한 정보는 여기를 클릭하세요: 어트리뷰션

# 문제 해결

### Q1: 페이스북에서 광고를 미리보기 할 때 UTM 매개변수가 보이지 않는데요?

페이스북은 광고를 미리보기로 볼 때 링크에 UTM 매개변수를 추가하지 않습니다.

### Q2: 연락처의 첫 어트리뷰션 데이터가 보이지 않아요?

아래 나열된 진입점에서 유입되는 연락처에 대해서만 첫 광고 어트리뷰션 데이터가 기록되며, 다른 경우에는 첫 어트리뷰션 데이터가 비어있을 수 있습니다.

진입점:
- 폼 제출
- 설문 제출
- 캘린더
- 페이스북 리드 폼에서 직접 유입
- 2단계 주문 폼
- 채팅 위젯
- 인바운드 전화 (리드가 번호 풀로 직접 전화하는 경우는 작동하지 않고, 클릭투콜 시나리오에서만 작동)

### Q3: 광고, 광고 세트, 캠페인을 변경했는데 리포팅이 맞지 않아요?

- 캠페인 이름, 광고, 광고 세트는 고유해야 합니다(위의 "[올바른 설정 예시](#정확한-리포팅을-위한-페이스북-캠페인-라벨링-방법)" 참조)
- 이름 매개변수는 캠페인/광고 세트/광고의 생명주기 동안 변경할 수 없습니다. 이름을 변경해야 하는 경우, 새로운 캠페인/광고 세트/광고를 만드세요
- 캠페인/광고 세트/광고를 변경하면서 새 캠페인을 만들지 않기로 결정하면, CRM 시스템의 데이터는 계속 원래/첫 번째 캠페인을 참조합니다

### Q4: 페이스북 비즈니스 계정이나 광고 관리자가 없는데요?

[페이스북 광고 관리자](https://www.facebook.com/business/learn/facebook-ads-reporting-performance/)는 모든 유료 캠페인에 대한 개요를 제공하는 정교한 대시보드입니다. 비즈니스 및 광고 계정을 만들지 않았다면 아래 리소스를 확인하세요:

- [페이스북 비즈니스 관리자 만드는 방법](https://www.facebook.com/business/help/1710077379203657?id=180505742745347)
- [페이스북 광고 계정 만드는 방법](https://www.facebook.com/business/help/407323696966570?id=649869995454285)

### Q5: 페이스북 리드 제너레이션 광고를 사용하는데도 UTM 매개변수가 필요한가요?

네, 페이스북 리드 제너레이션 광고를 실행할 때도 향상된 리포팅을 위해 UTM 매개변수 사용을 권장합니다. [이 문서에서 언급한](#페이스북-광고-관리자에서-utm-매개변수-추가하는-방법) 방법으로 UTM 매개변수를 추가할 수 있습니다.

### Q6: UTM 매개변수를 추적용 URL에 추가해야 하나요, 목적지 URL에 추가해야 하나요?

고유한 fbclick으로 구성된 각 링크 클릭이나 페이지 방문을 추적하려면 추적(tracking)에 UTM 매개변수를 추가해야 합니다.

### Q7: 목표 드롭다운은 무엇을 위한 것인가요?

광고 보고서의 왼쪽 상단에 목표(Objectives) 드롭다운이 있습니다. 이는 광고 캠페인을 만들 때 회사가 해당 캠페인에 대해 가졌던 목표를 정의하는 데 도움을 줍니다.

![목표 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48249254559/original/cJ-u1hcrxPrPlaVnZk6ukVNXKqTEeySGaA.png?1662397101)

---
*원문 최종 수정: Mon, 7 Nov, 2022 at 8:32 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*