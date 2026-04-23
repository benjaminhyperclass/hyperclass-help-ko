---
원문: https://help.leadconnectorhq.com/support/solutions/articles/48001238737-how-to-use-the-number-formatter-premium-action-
번역일: 2026-04-23
카테고리: workflow
---

# 숫자 포매터 프리미엄 액션 사용법

숫자 포매터 프리미엄 액션(Number Formatter Premium Action)을 소개합니다. 이는 특정 요구사항에 따라 숫자를 포맷하고 조작할 수 있는 매우 유용한 도구입니다. 이 액션을 사용하면 다양한 형식으로 숫자를 변환, 재포맷 또는 생성할 수 있습니다.

## 이 가이드에서 다루는 내용

- 숫자 포매터 프리미엄 워크플로우 액션이란?
- 각 숫자 포매터 액션 타입의 활용 사례
- 이 기능의 일반적인 장점
- 숫자 포매터 프리미엄 액션 사용법
- 자주 묻는 질문(FAQ)

## 숫자 포매터 프리미엄 워크플로우 액션이란?

숫자 포매터 프리미엄 액션(Number Formatter Premium Action)은 다섯 가지 핵심 기능을 포함합니다: 텍스트를 숫자로, 숫자 포맷, 전화번호 포맷, 통화 포맷, 그리고 랜덤 숫자입니다. 주요 기능은 다음과 같습니다:

- 텍스트를 숫자로 변환 (예: "$12,345.67"을 12345.67로) - If/Else 조건에서 숫자 연산자와 쉽게 비교 가능
- 이메일이나 SMS를 연락처에 보내기 전에 통화를 각 지역 형식으로 포맷하여 전문적인 외관 보장
- 미국 전화번호를 국제 번호로 포맷 (예: "+1" 국가코드 추가) - 저장하거나 이메일, SMS, Slack, 또는 다른 플랫폼으로 커스텀 웹훅을 통해 전송하기 전에

## 각 숫자 포매터 액션 타입의 활용 사례

다음은 각 숫자 포매터 프리미엄 액션 기능의 실용적인 비즈니스 사례입니다:

### 텍스트를 숫자로

a. **전자상거래 주문 가격 계산**: 온라인 스토어가 "개당 $12.50에 3개"와 같은 텍스트 형태의 주문 데이터를 받을 때, 텍스트를 숫자로 변환하여 총 주문 금액을 계산할 수 있습니다.

b. **영업 데이터 분석**: 회사가 "매출: $10,500.00"과 같은 텍스트 형식의 영업 데이터를 받을 때, 이를 숫자 값으로 변환하여 쉽게 분석하고 비교할 수 있습니다.

c. **재무 보고서 데이터 가져오기**: 비즈니스가 스프레드시트에서 "€2,500.00"과 같은 값이 포함된 재무 데이터를 가져올 때, 이 값들을 변환하여 CRM의 보고 기능에 원활하게 통합할 수 있습니다.

d. **설문 응답 분석**: 마케팅 회사가 "지난 달에 £150 썼습니다"와 같은 텍스트 기반 설문 응답을 수집할 때, 이러한 값들을 변환하여 추가 분석과 고객 세분화에 활용할 수 있습니다.

e. **소셜 미디어 데이터 처리**: 브랜드가 "1만 팔로워를 달성했습니다!"와 같은 소셜 미디어 게시물에서 숫자 데이터를 추출할 때, 이 데이터를 숫자 값으로 변환하여 추적과 보고 목적으로 활용할 수 있습니다.

### 숫자 포맷

a. **국제 영업 보고서**: 다국적 회사가 국제 팀이 쉽게 이해할 수 있도록 지역별 형식으로 영업 데이터를 제시해야 할 때

b. **맞춤형 인보이스**: 비즈니스가 국제 고객의 선호도에 맞춰 지역별 숫자 포맷으로 인보이스를 생성할 때

c. **데이터 내보내기**: 회사가 CRM에서 다른 나라의 파트너와 공유하기 위해 데이터를 내보낼 때, 현지 관례에 맞춰 숫자 형식을 변환해야 할 때

d. **고객 보고서**: 마케팅 에이전시가 다양한 국가의 고객을 위해 보고서를 준비할 때, 현지 선호도에 맞춰 숫자 포맷을 조정할 때

e. **상품 가격 업데이트**: 전자상거래 스토어가 고객의 위치에 따라 다른 숫자 형식을 수용하기 위해 웹사이트의 상품 가격을 업데이트할 때

### 전화번호 포맷

a. **SMS 마케팅 캠페인**: 회사가 보다 효과적인 SMS 마케팅 캠페인을 위해 수집된 전화번호를 일관된 형식으로 표준화할 때

b. **국제 전화**: 고객 지원 팀이 국제 고객에게 성공적으로 연결하기 위해 국가코드를 포함하도록 전화번호를 포맷할 때

c. **데이터 검증**: 비즈니스가 데이터 정확성을 높이고 커뮤니케이션 오류를 줄이기 위해 CRM 내 전화번호 형식을 검증하고 수정할 때

d. **개인화된 커뮤니케이션**: 영업팀이 커뮤니케이션을 더 친숙하고 개인적으로 만들기 위해 고객 지역에 맞춰 전화번호 형식을 조정할 때

e. **리드 관리**: 리드 생성 회사가 관련 영업 담당자에게 적절한 라우팅과 배정을 보장하기 위해 전화번호를 포맷할 때

### 통화 포맷

a. **개인화된 가격 표시**: 전자상거래 스토어가 더 나은 쇼핑 경험을 위해 고객의 위치에 따라 현지 통화 형식으로 가격을 표시할 때

b. **인보이스 발행**: 비즈니스가 명확성과 전문성을 보장하기 위해 고객의 국가에 따라 통화 값을 포맷하여 인보이스를 생성할 때

c. **재무 보고서**: 회사가 여러 국가의 이해관계자를 위해 현지 기대치에 맞춰 통화 값을 포맷하여 재무 보고서를 준비할 때

d. **마케팅 자료**: 마케팅 에이전시가 국제 관객에게 어필하기 위해 지역별 통화 포맷으로 홍보 콘텐츠를 제작할 때

e. **예산 관리**: 프로젝트 매니저가 쉬운 비교와 분석을 위해 예산의 통화 값을 표준화된 형식으로 변환할 때

### 랜덤 숫자

a. **고유한 할인 코드**: 온라인 소매업체가 매출을 촉진하기 위해 한정 시간 프로모션용 랜덤 할인 코드를 생성할 때

b. **추첨식 경품 이벤트**: 회사가 고객에게 랜덤 번호를 부여하고 랜덤 숫자 추첨을 기반으로 당첨자를 선정하는 경품 행사를 진행할 때

c. **랜덤화된 상품 추천**: 구독 박스 서비스가 고객의 개인화된 박스에 포함할 항목을 선택하기 위해 랜덤 숫자를 사용할 때

d. **A/B 테스팅**: 회사가 A/B 테스팅을 위해 웹사이트 방문자를 다른 버전의 웹사이트에 배정하기 위해 랜덤 숫자를 사용할 때

e. **고객 지원 티켓 배정**: 고객 지원 팀이 랜덤 숫자를 기반으로 들어오는 지원 티켓을 담당자에게 배정할 때

## 이 기능의 일반적인 장점

**데이터 일관성**: 숫자 포매터를 사용하여 CRM 전체에서 숫자 데이터 형식을 표준화하고 일관성을 보장하며 오류나 오해의 가능성을 줄일 수 있습니다.

**향상된 고객 세분화**: 숫자 포매터는 숫자 데이터를 정리하고 변환하는 데 도움이 되어, 소비 패턴이나 기타 숫자 기준과 같은 정확하고 일관된 정보를 기반으로 고객을 더 쉽게 세분화할 수 있습니다.

**개선된 국제화**: 숫자 포매터를 사용하면 지역 표준에 따라 숫자, 통화, 전화번호를 포맷할 수 있어, 콘텐츠가 글로벌 관객에게 쉽게 이해되고 접근 가능하도록 보장합니다.

**향상된 개인화**: 숫자 포매터를 사용하여 사용자 선호도나 지역에 따라 통화나 기타 숫자 데이터를 포맷함으로써 고객에게 더 개인화된 경험을 제공하여 만족도와 참여도를 높일 수 있습니다.

**간소화된 워크플로우**: CRM 내에서 숫자 포맷 작업을 자동화함으로써 숫자 포매터는 시간과 노력을 절약하고 수동 작업을 줄여 팀이 더 중요한 작업에 집중할 수 있도록 도와줍니다.

**정확한 보고 및 분석**: 일관되고 잘 포맷된 숫자 데이터로 CRM의 보고 및 분석 기능이 더 정확하고 신뢰할 수 있게 되어 더 나은 데이터 기반 의사결정이 가능합니다.

**효율적인 데이터 가져오기 및 내보내기**: 숫자 포매터는 CRM에서 데이터를 가져오거나 내보낼 때 숫자 데이터를 일관된 형식으로 변환하여 오류를 줄이고 다른 시스템과의 데이터 통합을 더 원활하게 만듭니다.

**증가된 자동화 기능**: 숫자 포매터는 워크플로우에서 동적으로 숫자를 포맷할 수 있게 하여 CRM의 자동화 기능을 향상시키고, 더 정교하고 적응 가능한 자동화를 만들 수 있게 합니다.

**동적 콘텐츠 생성**: 랜덤 숫자 기능을 사용하여 프로모션, 할인 또는 기타 마케팅 자료를 위한 고유하고 동적인 콘텐츠를 만들어 고객에게 흥미와 독점성의 요소를 추가할 수 있습니다.

**개선된 데이터 검증**: 숫자 포매터는 전화번호나 통화 값과 같은 숫자 데이터를 검증하고 수정하는 데 도움이 되어 CRM에 더 나은 커뮤니케이션과 고객 관계를 위한 정확한 정보가 포함되도록 보장합니다.

## 숫자 포매터 프리미엄 액션 사용법

숫자 포매터 프리미엄 액션을 사용하려면 다음 단계를 따르세요:

워크플로우 안에서 숫자 포매터 프리미엄 액션을 추가합니다.

![숫자 포매터 프리미엄 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295353423/original/ETNwXNUYAUB1KHGwVumt3CFQL4pm3t2wxA.png?1683016900)

### 텍스트를 숫자로

숫자 포매터 액션에서 액션 타입 드롭다운에서 '텍스트를 숫자로' 옵션을 선택합니다.

![텍스트를 숫자로 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295358824/original/6HyMZclWva2s1tpQYq2csgKrTfbR02t8Mg.png?1683018278)

a. **필드 선택**: 연락처 필드, 커스텀 필드, 커스텀 값, 또는 인바운드 웹훅 트리거에서 텍스트를 숫자로 변환하기에 적합한 필드를 선택합니다.

![필드 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295359168/original/QpxnX9CjJ4lFMs_HhQOZqisL3OyvhiPwcA.png?1683018373)

![필드 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295359359/original/kL6lL5ldYQ3JAoxqKX-JG-OwCvOzFPuOsQ.png?1683018410)

b. **입력 소수점 표시**: 숫자의 소수 부분을 나타내는 데 사용되는 문자를 정의합니다.

![소수점 표시 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295359645/original/_lbw1zkpMQd18-kbEHmTj3YWUdRkxTpq4Q.png?1683018473)

c. **출력**: `{{number_formatter.1.result}}`로 워크플로우의 후속 액션에서 결과를 사용합니다.

![출력 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295367824/original/Pggam1ANisuVxcfWQL1Bo-ZKkijmQwASNw.png?1683020451)

### 숫자 포맷

숫자 포매터 액션에서 액션 타입 드롭다운에서 '숫자 포맷' 옵션을 선택합니다.

![숫자 포맷 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295360991/original/nthZbExWWvrnKhuHvgiyXE74A4uwJgyS-g.png?1683018837)

a. **필드 선택**: 연락처 필드, 커스텀 필드, 커스텀 값, 또는 인바운드 웹훅 트리거에서 숫자 포맷에 적합한 필드를 선택합니다.

![필드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295361498/original/uvaU5Pkq9xWRD_hCEOUeLB-h1-TTR1n0mw.png?1683018964)

b. **입력 소수점 표시**: 숫자의 소수 부분을 나타내는 데 사용되는 문자를 정의합니다.

![소수점 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295361816/original/5zgwvwgFGTiFdD-cpN32G_HkHAOZGzSFVQ.png?1683019029)

c. **포맷 형식**: 목록에서 필요한 형식을 선택합니다.

![포맷 형식 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295361925/original/7bBgAjhGtq-MDC1wWwyhlWSyXowFlrlbEw.png?1683019061)

d. **출력**: `{{number_formatter.1.result}}`로 워크플로우의 후속 액션에서 결과를 사용합니다.

![출력 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295367777/original/CVx0Z7rsXzKYBbDcgvoU4X2ISG82heMFUg.png?1683020443)

### 전화번호 포맷

숫자 포매터 액션에서 액션 타입 드롭다운에서 '전화번호 포맷' 옵션을 선택합니다.

![전화번호 포맷 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295365849/original/xznTbscOfMS6q7PaPLvhh9bGP15C7WvKLg.png?1683019987)

a. **필드 선택**: 연락처 필드, 커스텀 필드, 커스텀 값, 또는 인바운드 웹훅 트리거에서 전화번호 포맷에 적합한 필드를 선택합니다.

**참고사항**: 전화번호 포맷 액션 타입을 선택하면 전화번호 관련 필드만 선택할 수 있습니다.

![전화번호 필드만 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295363649/original/oxTKqEK6G40V2vPG02-JNp8Fzu-ADU_WQw.png?1683019474)

b. **포맷 형식**: 목록에서 필요한 형식을 선택합니다.

![포맷 형식 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295364907/original/OE5d6ypdG7fow5Qtk3lwGvRCRX5tEAWuig.png?1683019764)

c. **국가 코드**: 목록에서 필요한 국가 코드를 선택합니다.

![국가 코드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295365058/original/rcvg2HYNGlPr_SN_YpcmizqXqoabEk6x4Q.png?1683019805)

d. **출력**: `{{number_formatter.1.result}}`로 워크플로우의 후속 액션에서 결과를 사용합니다.

![출력 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295367722/original/DO7-sSN361ImPfshclXllmt0j7OeZMmKTA.png?1683020435)

### 통화 포맷

숫자 포매터 액션에서 액션 타입 드롭다운에서 '통화 포맷' 옵션을 선택합니다.

![통화 포맷 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295365634/original/J8ekd9jskmEvqS0cm73A1Ny8IMJZgAyJMA.png?1683019934)

a. **필드 선택**: 연락처 필드, 커스텀 필드, 커스텀 값, 또는 인바운드 웹훅 트리거에서 통화 포맷에 적합한 필드를 선택합니다.

![필드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295366487/original/i0a1FOb6xqJ2xa7qm58vmYFkDa0MzFrDDg.png?1683020136)

b. **통화**: 목록에서 필요한 통화 형식을 선택합니다.

![통화 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295366622/original/voPslYo_LJ_jdnesLyrouSjTjoIJKJmNNA.png?1683020174)

c. **통화 지역**: 목록에서 필요한 통화 지역 형식을 선택합니다.

![통화 지역 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295367610/original/nFf2DOd3E5L1m3pBtX0LxKzl4qJBMzy7DA.png?1683020401)

**참고사항**: 통화 지역(Currency Locale)은 해당 지역의 지역 설정과 관례를 사용하여 통화 값을 표시하는 것을 의미합니다. 현지 포맷 규칙, 기호, 언어 선호도를 고려합니다. 이는 통화가 사용되는 지역이나 국가에 따라 통화 값이 포맷되고 표시되는 방식을 결정합니다.

**예를 들어**, 미국의 통화 지역은 미국 달러 기호($)를 사용하고 천 단위 구분자로 쉼표, 소수점 구분자로 마침표를 사용하여 통화 값을 포맷합니다(예: $1,234.56). 반면 독일의 통화 지역은 유로 기호(€)를 사용하고 천 단위 구분자로 마침표, 소수점 구분자로 쉼표를 사용하여 통화 값을 포맷합니다(예: €1.234,56).

올바른 통화 지역을 사용하면 고객이나 사용자가 익숙하고 예상되는 형식으로 표시되어 통화 값을 쉽게 이해하고 해석할 수 있습니다.

d. **출력**: `{{number_formatter.1.result}}`로 워크플로우의 후속 액션에서 결과를 사용합니다.

![출력 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295367693/original/dX6X8_Lhp1y756xXKdUw3Iv-qA-m54uomQ.png?1683020427)

### 랜덤 숫자

숫자 포매터 액션에서 액션 타입 드롭다운에서 '랜덤 숫자' 옵션을 선택합니다.

![랜덤 숫자 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295368203/original/S8h9eoGRufVi9bVTFNifb3bbu3z1gBR91g.png?1683020544)

a. **하한값과 상한값을 지정합니다.**

![범위 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295369178/original/XA6g-FCDIzs9GpcAt4tf2NeTOEsJGjL7-A.png?1683020779)

**참고사항**: 랜덤 숫자 액션 타입의 하한값(Lower Range)과 상한값(Upper Range)은 랜덤 숫자가 생성될 범위의 최솟값과 최댓값을 각각 정의하는 매개변수입니다. 이 값들을 설정하여 랜덤 숫자 액션이 생성할 수 있는 가능한 숫자의 범위를 제어할 수 있습니다.

**예를 들어**, 하한값을 1로, 상한값을 100으로 설정하면 랜덤 숫자 액션은 1과 100 사이의 랜덤 숫자를 생성합니다(1과 100 포함). 이 기능은 고유한 코드 생성, 랜덤 샘플 선택, 또는 CRM 워크플로우 내에서 동적 콘텐츠 생성에 유용할 수 있습니다.

b. **소수점 자리수 지정**

![소수점 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295369782/original/favfjDZ6dyHfuP7h6defU5WvGo18-YXsaw.png?1683020906)

c. **출력**: `{{number_formatter.1.result}}`로 워크플로우의 후속 액션에서 생성된 랜덤 숫자를 사용합니다.

![출력 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295369872/original/JpveMDdig-ffvwtFZL7YbVDbNPWWY6eJNg.png?1683020927)

**참고사항**: 필드를 선택할 때는 선택한 포맷 작업에 적합한지 확인하