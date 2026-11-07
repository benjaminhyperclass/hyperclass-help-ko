---
원문: /support/solutions/articles/155000007003-google-analytics-widgets-in-dashboard-and-custom-reports
번역일: 2026-11-06
카테고리: 12-대시보드
---

# 대시보드와 사용자 지정 리포트에서 Google Analytics 위젯 사용하기

Google Analytics 4(GA4) 데이터를 하이퍼클래스 안에서 바로 볼 수 있어요. 준비된 위젯으로 사용자 수, 참여도, 트래픽 출처, 인기 페이지를 확인할 수 있어요. 웹사이트 분석과 CRM 성과를 한곳에서 보고 싶은 에이전시에 특히 잘 맞아요. 매일 확인하는 대시보드를 만들고, 고객에게 보낼 리포트도 일정에 맞춰 자동으로 보낼 수 있어요.

## Google Analytics 위젯이란?

Google Analytics 위젯은 GA4 지표를 하이퍼클래스 서브 계정 안에 보여 주는 기본 제공 위젯이에요. GA4 속성을 연결하면 Total Users, Engagement Rate, Sessions by Channel 같은 위젯을 대시보드와 사용자 지정 리포트에 놓을 수 있어요. 웹사이트 방문자의 행동을 파이프라인, 어트리뷰션, 매출 데이터와 함께 볼 수 있어서 데이터를 근거로 더 빠르게 판단할 수 있어요.

## Google Analytics 위젯을 쓰면 좋은 점

위젯마다 어떤 가치가 있는지 알면 실제 비즈니스 질문에 답하는 대시보드를 만들기 쉬워요. 아래 장점을 참고해서 GA 데이터를 고객 확보 효율, 콘텐츠 성과, 전환 상태 같은 목표와 연결해 보세요.

- **한곳에서 확인:** GA4 웹 분석을 CRM, 광고, 영업 지표와 한 화면에서 볼 수 있어요.
- **빠른 판단:** 트래픽이 갑자기 늘거나, 참여도가 떨어지거나, 성과 좋은 페이지가 무엇인지 한눈에 알 수 있어요.
- 잠재고객 인사이트: 신규 방문자와 재방문자, 기기, 채널을 비교해서 캠페인을 개선할 수 있어요.
- **시간 절약:** CSV로 내보내거나 탭을 오갈 필요가 없어요. 대시보드와 리포트가 데이터를 자동으로 가져와요.
- **고객에게 투명하게 공유:** GA 접근 권한을 주지 않고도 실시간 웹 리포트를 공유할 수 있어요.

## 사전 준비와 권한

위젯을 추가하기 전에 연결과 권한을 확인하세요. 처음부터 데이터가 제대로 불러와져요.

- **설정 > 연동 > Google Analytics**에서 GA4 속성과 데이터 스트림이 연결되어 있어야 해요. 연결 방법은 [Google Analytics 4 트래킹](../../18-리포팅/추적-어트리뷰션/google-analytics-4-tracking.md)에서 볼 수 있어요.
- 사용자 권한도 필요해요. 위젯을 추가하려면 대시보드 **편집** 권한이, 보기만 하려면 **보기** 권한이 있어야 해요. 리포트는 필요에 따라 **만들기**/**일정** 권한이 있어야 해요.
- 올바른 Google 계정으로 로그인했는지, 그 계정에 GA4 속성과 스트림의 보기 권한이 있는지도 확인하는 것이 좋아요.

대시보드 권한은 [대시보드 권한 관리](../../10-마케팅/브랜드-보드/global-custom-colors-in-color-picker.md)에서 확인할 수 있어요.

## 사용할 수 있는 Google Analytics 위젯

GA4에서 고객 확보, 참여도, 콘텐츠 분석에 가장 많이 쓰는 지표를 위젯으로 제공해요. 추이, 구성 비율, 순위 형태를 섞어 한눈에 읽히는 화면을 만들어 보세요.

| 지표 | 정의 |
| --- | --- |
| **Total Users**(전체 사용자) | 선택한 기간에 웹사이트를 방문한 고유 사용자의 총 수예요. |
| **Active Users**(활성 사용자) | 참여 세션이 있었거나 사이트에서 활동한 사용자 수예요. |
| **New Users**(신규 사용자) | 선택한 기간에 웹사이트를 처음 방문한 사용자예요. |
| **Sessions Over Time**(시간별 세션) | 선택한 기간의 전체 세션을 시간 흐름에 따라 보여 줘요. |
| **Engagement Rate**(참여율) | 참여 세션의 비율이에요. 사용자가 콘텐츠와 얼마나 적극적으로 상호작용하는지 알 수 있어요. |
| **Bounce Rate**(이탈률) | 한 페이지만 보고 더 이상 참여하지 않은 세션의 비율이에요. |
| **Average Engagement Time**(평균 참여 시간) | 사용자가 웹사이트 콘텐츠에 실제로 참여한 평균 시간이에요. |
| **Sessions by Channel**(채널별 세션) | 기본 유입 채널별로 묶은 세션이에요(예: Organic Search, Paid Social). |
| **Sessions by Source/Medium**(출처/매체별 세션) | 트래픽 출처와 매체 조합별로 묶은 세션이에요(예: google/organic, facebook/social). |
| **Top Pages by Views**(조회수 상위 페이지) | 총 조회수 기준으로 순위를 매긴 가장 많이 본 페이지예요. |
| **Top Events**(상위 이벤트) | 가장 자주 발생한 GA4 이벤트예요(주요 상호작용과 행동). |
| **New vs. Returning Users**(신규 vs. 재방문 사용자) | 선택한 기간의 처음 방문자와 재방문자를 비교해요. |
| **Device Category Breakdown**(기기 유형별 구성) | 기기 유형(데스크톱, 모바일, 태블릿)별 세션이에요. |

## 대시보드와 사용자 지정 리포트의 차이

계속 지켜볼 때는 대시보드를, 정기적으로 공유할 때는 사용자 지정 리포트를 쓰세요. 두 곳 모두 같은 GA 위젯을 쓰기 때문에 한쪽에서 시작해도 레이아웃을 다른 쪽에서 다시 활용할 수 있어요.

- **대시보드:** 매일 확인하고 빠르게 비교하는 실시간 현황 화면이에요.
- **사용자 지정 리포트:** 이메일 예약 발송과 고객·경영진에게 전달하는 깔끔한 보고용으로 만들어졌어요.

## 위젯 필터와 사용자 지정

보는 사람에게 필요한 내용만 보이도록 위젯을 다듬을 수 있어요. 필터, 차트 유형, 레이아웃 설정으로 원본 데이터를 보기 쉬운 화면으로 바꿔 보세요.

- **날짜 범위:** 대시보드나 리포트의 날짜 선택기로 페이지 안 모든 위젯의 기간을 한 번에 정해요.
- **차트 유형:** 위젯에 따라 **Numeric**(숫자), **Donut**(도넛), **Line**(선), **Bar**(막대), **테이블** 중에서 고를 수 있어요.
- **필터와 조건:** 결과를 좁혀 볼 수 있어요(예: **Source/Medium**(출처/매체) = google / organic, 채널·페이지·이벤트 포함 또는 제외).
- **레이아웃:** 드래그해서 위치를 바꾸고, 읽기 좋게 크기를 조절하고, 필터를 달리해 비교하고 싶은 위젯은 복제하고, 필요 없는 위젯은 제거해요.
- **테마:** 테마를 선택하면 대시보드와 리포트에서 일관된 모양으로 데이터를 보여 줄 수 있어요(선택 사항).

## Google Analytics 위젯 설정하기

한 번만 연결해 두면 GA4 위젯을 대시보드와 리포트에 추가할 수 있어요. 아래 순서대로 따라 해서 성과를 시각화하고 관계자와 공유해 보세요.

### 대시보드에 위젯 추가하기

1. 서브 계정에서 **대시보드**를 열고, 왼쪽 위의 파란색 버튼을 눌러 원하는 대시보드를 여세요.

   ![대시보드 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059266775/original/eh0QG2easYSJgc_Wnm6VkYXdMajBuTQOsQ.png?1764157499)
2. **Edit Dashboard**(대시보드 편집) > **Add Widget**(위젯 추가)을 클릭하세요.

   ![대시보드 편집에서 위젯 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059266822/original/0Mx5zJn_N-jjy7Ni2A0g23XxC4f83nfCFg.gif?1764157543)
3. 차트 유형(**Numeric**, **Donut**, **Line**, **Bar**, **테이블**)을 고른 뒤, **Google Analytics** 카테고리까지 스크롤해서 추가할 지표나 **상단** 위젯을 선택하세요.

   ![Google Analytics 카테고리에서 위젯 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059267010/original/2DpoezShTl5HSRswM9hiZ9NtdG4mmd87Jw.gif?1764157637)
4. 필요하면 필터(채널, 출처/매체, 페이지, 날짜 범위 등)를 적용하거나 테마·색상을 조정하세요.

   ![위젯 필터와 테마 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059267244/original/ZiuA7lLmWMTPJdl-NZn3bOHHQWyzfL3muQ.png?1764157778)
5. **저장**을 클릭하세요. 위젯이 GA4 데이터를 불러오기 시작해요.

### 사용자 지정 리포트에 위젯 추가하기

1. 서브 계정에서 **리포팅 > 사용자 지정 리포트**로 이동한 뒤, 기존 리포트를 열거나 **New Report**(새 리포트)를 클릭하세요. 리포트 만들기와 예약 방법은 [리포트 만들기 및 예약하기](../../18-리포팅/커스텀-리포트/how-to-create-a-custom-report-schedule-and-export-report-as-pdf.md)에서 자세히 볼 수 있어요.

   ![사용자 지정 리포트 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059267621/original/XMriTqN4Ov_Mtm_yuIO_VGEPcPI2XmsyFA.png?1764157947)
2. 빈 캔버스에서 시작하거나, 템플릿을 쓰거나, 기존 대시보드 레이아웃을 가져오세요.

   ![리포트 시작 방식 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059267656/original/U4pbI68KZN-47u1U6OSqalRR4JUjQPx3hg.png?1764157967)
3. 왼쪽 위의 **Add Widget/Element**(위젯/요소 추가)를 클릭하세요. 위젯 목록에서 **Google Analytics**를 찾아 원하는 위젯을 레이아웃으로 드래그하세요.

   ![Google Analytics 위젯을 레이아웃으로 드래그](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059267780/original/WxVJsikndxalX_FGy4Tns7VbVX1_aLPrsw.gif?1764157995)
4. 위젯마다 차트 유형을 선택하고, 필터를 설정하고, 테마를 고른 뒤 **저장**을 클릭하세요.

   ![리포트 위젯 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059267942/original/DtVbHOWLwz5vAQFN0NDMZVkDLQE_dw82cQ.png?1764158044)
5. **보내기** 또는 **일정**을 클릭해서 이메일 발송을 설정하세요. 받는 사람이 리포트를 자동으로 받아요.

## 자주 묻는 질문

### 어떤 버전의 Google Analytics를 지원하나요?
Google Analytics 4(GA4)를 지원해요. 이 위젯은 Universal Analytics(UA)를 지원하지 않아요.

### 위젯에 "No Data"라고 나와요.
GA4 속성이 연결되어 있는지 확인하세요. 날짜 범위를 넓히고 필터도 살펴보세요. 예를 들어 Source/Medium 조건이 너무 좁거나, 트래픽이 없는 페이지 경로가 지정되어 있을 수 있어요.

### Google Analytics 위젯을 복제해서 조금 바꿀 수 있나요?
네, 가능해요. 복제로 사본을 만든 뒤 필터나 차트 유형을 바꿔서 여러 버전을 나란히 비교해 보세요.

### 대시보드와 사용자 지정 리포트는 서로 다른 GA 데이터를 쓰나요?
아니요. 둘 다 연결된 GA4 속성의 데이터를 읽어요. 계속 지켜볼지, 일정에 맞춰 보낼지에 따라 알맞은 쪽을 고르세요.

### GA 위젯을 광고·CRM 지표와 함께 쓸 수 있나요?
네, 가능해요. GA4 위젯을 Meta Ads, Google Ads, CRM 위젯과 함께 놓으면 고객 확보부터 매출까지 이어지는 흐름을 한 번에 볼 수 있어요.

### GA 위젯을 추가하려면 어떤 권한이 필요한가요?
연동을 연결할 수 있는 권한(해당하는 경우)과, 대시보드 **편집** 권한 또는 리포트 **만들기**/**일정** 권한이 필요해요. **보기** 권한만 있는 사용자는 공유된 대시보드와 받은 리포트를 볼 수 있어요.

GA4에 페이지뷰를 기록하는 방법은 [퍼널/웹사이트의 페이지뷰를 Google Analytics(GA4)에 기록하기](../../18-리포팅/추적-어트리뷰션/how-to-record-pageviews-into-google-analytics-for-funnels-websites-ga4.md)에서 확인할 수 있어요.
