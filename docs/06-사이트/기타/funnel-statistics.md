---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 퍼널 통계

이 가이드에서는 Hyperclass의 내장 퍼널 통계 기능을 사용하여 퍼널 성과를 추적하고 해석하는 방법을 알아보겠습니다. 어떤 데이터가 추적되는지, 통계를 어디서 찾을 수 있는지, 그리고 어떻게 해석하는지 배워보세요!

---

**목차**

- [퍼널 통계에 액세스하는 방법](#퍼널-통계에-액세스하는-방법)
- [지표 분석](#지표-분석)
  - [페이지뷰](#페이지뷰)
  - [옵트인](#옵트인-폼-제출-설문-제출-2단계-주문-폼-제출)
  - [매출](#매출)
  - [페이지뷰당 수익](#페이지뷰당-수익)
- [사이트 및 퍼널 분석](#사이트-및-퍼널-분석)
- [자주 묻는 질문](#자주-묻는-질문)

---

# 퍼널 통계에 액세스하는 방법

#### **1단계:** 사이트 또는 퍼널로 이동

- 좌측 네비게이션 메뉴에서 Sites(사이트) 메뉴를 클릭합니다
- 상단 탭에서 Funnels(퍼널) 또는 Sites(사이트)를 선택합니다
- 분석하려는 퍼널이나 사이트 옆의 점 3개 버튼을 클릭하고 Edit(편집)을 선택합니다

![퍼널 편집 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050026269/original/IJrCAOiURixssMtTEFJgNFqYDawzpicoFw.png?1752769960)

#### **2단계:** 통계 열기

- 상단 보조 네비게이션 바에서 Stats(통계) 탭을 클릭합니다
- 오른쪽 상단의 타임라인 드롭다운을 사용하여 원하는 날짜 범위로 필터링할 수 있습니다

![통계 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050026493/original/SpbusgpEvpVPUKzTUIJ7nvSwPhWHD6msCw.png?1752770188)

#### **3단계:** 통계 분석

통계 테이블에서 다음 항목들을 확인할 수 있습니다:

- Page(페이지): 퍼널 단계 또는 페이지
- Views(조회수) (All/Uniques): 총 조회수와 순 방문자 수
- Opt-ins(옵트인) (Count/Rate): 제출 건수와 옵트인 비율
- Sales(매출) (Count/Rate/Value): 거래 건수, 전환율, 총 수익
- Earnings/Page View(페이지뷰당 수익): 조회수당 수익

![통계 테이블](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050026546/original/MJxIwu7-lqohZQrwPdZrHDG0v-lQQWNnKw.png?1752770238)

---

## **지표 분석**

#### **페이지뷰**

- **All(전체):** 총 페이지 방문 수
- **Uniques(순 방문):** 중복을 제거한 페이지 조회수

#### **옵트인 (폼 제출, 설문 제출, 2단계 주문 폼 제출)**

- **All(전체):** 옵트인 수
- **Rate(비율):** (옵트인 수 × 100) ÷ (순 페이지뷰)

#### **매출**

- **Count(건수):** 판매된 상품 수
- **Rate(비율):** (판매된 상품 수 × 100) ÷ (순 페이지뷰)
- **Value(금액):** 판매된 상품의 총 가치

#### **페이지뷰당 수익**

- **All(전체):** (판매된 상품의 총 가치) ÷ (페이지뷰)

---

## 사이트 및 퍼널 분석

퍼널 내의 통계 탭이 페이지 단위의 성과 데이터를 제공하는 반면, 분석 대시보드는 모든 퍼널과 웹사이트에 걸쳐 더 넓고 시각적인 개요를 제공합니다. 인터랙티브 그래프, 비교 도구, 방문자 세분화 기능이 포함되어 있어 트렌드를 파악하고 최적화 기회를 찾기 쉽습니다.

이 중앙집중식 보고서 화면을 살펴보려면 Sites(사이트) > Analytics(분석)로 이동하세요.

자세한 내용은 [Hyperclass에서 사이트 및 퍼널 분석 사용하기](how-to-use-site-and-funnel-analytics-in-highlevel.md)를 참고하세요.

![분석 대시보드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050026084/original/X3tAmDW1lBAoUih-0Ezjv_czoGj1uIpswg.jpeg?1752769748)

---

## **자주 묻는 질문**

**Q: 제 통계가 Google Analytics 데이터와 다른 이유는 무엇인가요?**
Google Analytics는 Hyperclass와 다른 방식으로 세션을 추적합니다. 바운스 필터링, 광고 차단기, 또는 퍼널이 아닌 진입 경로 때문에 차이가 발생할 수 있습니다.

**Q: 페이지뷰를 기반으로 자동화 작업을 설정할 수 있나요?**
네! 연락처가 특정 퍼널 페이지를 조회할 때 워크플로우를 트리거할 수 있습니다. 자세한 내용은 퍼널 및 웹사이트를 위한 페이지뷰 트리거를 참고하세요.

**Q: '옵트인'으로 간주되는 기준은 무엇인가요?**
폼 블록이 있는 퍼널 단계에서 성공적으로 폼을 제출한 모든 경우가 옵트인으로 계산됩니다.

---
*원문 최종 수정: Wed, 28 Jan, 2026 at 4:16 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*