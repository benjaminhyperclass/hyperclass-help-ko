---
원문: /support/solutions/articles/155000003389-clickfunnels-to-highlevel-migration-guide-
번역일: 2026-11-06
카테고리: 20-고객지원
---

# ClickFunnels에서 하이퍼클래스로 옮기기 (마이그레이션 가이드)

ClickFunnels에서 쓰던 퍼널, 웹사이트, 코스 같은 디지털 자산을 하이퍼클래스로 옮기는 방법을 안내해요. 기능은 그대로 유지하면서 매끄럽게 옮기고, 하이퍼클래스의 고급 기능도 함께 활용할 수 있어요.

{% hint style="warning" %}
ClickFunnels에서 하이퍼클래스로 옮길 때는 아래 항목을 빠짐없이 옮기세요.

1. 코스 & 상품
2. 결제 연동
3. 폼
4. 웹사이트 & 퍼널
5. 스토어 퍼널
6. 이메일 마케팅
7. 연락처
{% endhint %}

## 클래식 ClickFunnels 메뉴

![클래식 ClickFunnels 메뉴 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033900593/original/qvVDqeGT1_FqygJT4Db53b1R7JdNki0kBg.png?1727811457)

## ClickFunnels 2.0 메뉴

기본으로는 **Funnels**(퍼널), **Products**(상품), **Customers**(고객), **Marketing**(마케팅)만 보여요. **Opportunities**(기회), **Sites**(사이트), **Automation**(자동화), **Courses**(코스), **Store**(스토어) 같은 앱은 직접 추가할 수 있어요.

![ClickFunnels 2.0 메뉴 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033900594/original/zPqt_oDQj6X9gGk9wpKxoWeEMfNY2mVuPw.png?1727811457)

## 코스 옮기기

ClickFunnels의 **Courses** 대시보드에서는 만들어 둔 코스와 코스별 부가 정보를 볼 수 있고, 새 코스도 만들 수 있어요. 코스 상품은 하이퍼클래스에서 다시 만들어야 해요.

### 1단계: 코스 구조 정리하기

- ClickFunnels 2.0에 로그인해서 코스 목록 확인하기: 코스마다 모듈, 강의, 퀴즈나 다운로드 파일 같은 관련 콘텐츠를 정리해 두세요.
- 설정 기록하기: 코스 상태(게시, 초안), 멤버 액세스, 사용자 지정 옵션 같은 설정을 적어 두세요.

### 2단계: 하이퍼클래스에서 코스 다시 만들기

- 하이퍼클래스에서 코스를 만드는 방법은 [코스·멤버십 사이트 만들기](../../17-멤버십-커뮤니티/멤버십-코스/how-to-build-courses-membership-sites.md) 문서를 참고하세요.

### 3단계: 옮긴 후 확인하기

- 코스 액세스 테스트하기: 사용자가 코스에 제대로 접속할 수 있는지, 콘텐츠가 의도한 대로 보이는지, 수료 추적이 되는지 확인하세요.

![코스 옮기기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033965715/original/bI5EVigTSg5Kb8KxthEh7khbRi9rtGJP0Q.png?1727883470)

## 상품 옮기기

### 1단계: ClickFunnels에서 상품을 CSV로 내보내기

- ClickFunnels 2.0에 로그인하기: **Products**로 이동해서 내보낼 상품을 체크박스로 선택하세요.
- 상품 내보내기: **Actions** 또는 **Bulk actions**(대량 액션)를 클릭하고, 드롭다운 메뉴에서 **Export**를 선택하세요. 사용하는 시간대에 맞춰 내보내기 시간을 예약한 다음 **Export Products**를 클릭하세요. 내보낸 파일은 잘 보관해 두세요.

### 2단계: 하이퍼클래스로 상품 가져오기

- 하이퍼클래스에서 **결제 > 상품**으로 이동한 다음, 왼쪽 위의 **CSV로 가져오기**를 클릭하세요.
- 자세한 방법은 [하이퍼클래스로 상품 일괄 가져오기](../../08-결제/how-to-bulk-import-products-into-hyperclass.md) 문서를 참고하세요.

![상품 가져오기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078640635/original/P4udcndEWQ2FrSWh55U9pgUyNNNxetroKA.png?1787000210)

## 결제 연동 옮기기

ClickFunnels 2.0의 **Payments AI**는 Stripe, PayPal, Klarna 같은 여러 결제 게이트웨이를 한곳에서 처리하는 통합 시스템이에요. 하이퍼클래스에서는 **결제**에 연동을 새로 만들어야 해요.

### 1단계: Payments AI 열기

- 결제 방법 정리하기: 왼쪽 아래의 **Payments**(결제)를 클릭하세요. 위쪽 내비게이션 바에서 **Gateways**(게이트웨이)를 클릭하면 결제 게이트웨이 관리 화면이 열려요.

### 2단계: 하이퍼클래스에 원하는 결제 수단 연결하기

- Stripe 연결:
  - 하이퍼클래스 서브 계정에 로그인하세요.
  - **결제 > 연동**으로 이동해서 Stripe를 연결하고, 안내에 따라 인증을 진행하세요.
  - Stripe 연결 방법은 [Stripe 연결 시작하기](../../01-시작하기/커머스/getting-started-connect-stripe.md) 문서를 참고하세요.
  - Stripe 연동에서 보여 줄 결제 방법을 관리하는 방법은 [Stripe 연동에 표시되는 결제 방법 관리하기](../../08-결제/시작하기/manage-payment-methods-displayed-with-stripe-integration.md) 문서를 참고하세요.
- NMI 연결: 하이퍼클래스 서브 계정에 NMI를 연결하는 방법은 [NMI 연동 설정하기](../../08-결제/how-to-set-up-the-nmi-integration.md) 문서를 참고하세요.
- Authorize.net 연결: 하이퍼클래스 서브 계정에 Authorize.net을 연결하는 방법은 [결제 처리를 위한 Authorize.net 연동](../../08-결제/authorize-net-integration-for-processing-payments.md) 문서를 참고하세요.

![결제 연동 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033978406/original/vXWxULRCYc5vmCIppr_B3E3fkV7gifxjFg.png?1727898090)

## 웹사이트 & 퍼널 옮기기

ClickFunnels에서는 **Page Editor**(페이지 편집기)와 **Site Overview**(사이트 개요)로 세일즈 퍼널과 웹사이트를 만들고 관리해요. 이 퍼널과 웹사이트는 하이퍼클래스에서 다시 만들 수 있어요.

### 1단계: 퍼널과 웹사이트 정보 정리하기

- 퍼널과 페이지 목록 만들기: ClickFunnels에서 퍼널과 페이지마다 URL, 구조, 콘텐츠, 트래킹 코드, 연결된 폼이나 결제 게이트웨이를 정리해 두세요.
- 세부 설정 기록하기: 퍼널이나 사이트마다 테마, 스타일 가이드, 커스텀 CSS, 그 밖의 추가 설정을 적어 두세요.

### 2단계: ClickFunnels에서 퍼널 가져오기

- ClickFunnels 퍼널을 하이퍼클래스 서브 계정으로 가져오는 방법은 [ClickFunnels에서 퍼널 가져오기](../../06-사이트/퍼널-웹사이트/how-to-import-a-funnel-from-clickfunnels.md) 문서를 참고하세요.

![웹사이트와 퍼널 옮기기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033978599/original/ODFZplmqIT4fq0laaNR9Gpvx8uItfhcbBg.jpeg?1727898424)

## 온라인 스토어(이커머스) 다시 만들기

ClickFunnels의 스토어 퍼널은 상품 판매와 결제 과정을 관리해요. 이커머스 기능을 그대로 쓰려면 하이퍼클래스에서 이 퍼널을 다시 만들어야 해요.

### 1단계: 스토어 퍼널 정보 정리하기

- 스토어 퍼널 목록 만들기: ClickFunnels에서 스토어 퍼널마다 상품 정보, 결제 페이지, 업셀/다운셀 페이지, 결제 연동을 정리해 두세요.
- 상품 설정 기록하기: 상품 정보, 가격, 사용자 지정 내용을 빠짐없이 기록해 두세요.

### 2단계: 하이퍼클래스에서 스토어 퍼널 다시 만들기

- 하이퍼클래스에서 이커머스 스토어를 설정하는 방법은 [이커머스 온라인 스토어 설정하기](../../37-이커머스-스토어/E-Commerce-Store/how-to-set-up-an-e-commerce-online-store-websites.md) 문서를 참고하세요.

### 3단계: 옮긴 후 확인하기

- 구매 과정 테스트하기: 테스트 구매를 해서 결제 과정이 매끄럽게 진행되는지, 업셀/다운셀이 모두 제대로 작동하는지 확인하세요.

![스토어 퍼널 다시 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033978202/original/oMaU_skOeODHtdJZXB_NBB1Sa-1CeoQfOg.png?1727897735)

## 이메일 마케팅 옮기기

ClickFunnels는 워크플로우와 브로드캐스트로 기본적인 이메일 마케팅을 지원해요. 하이퍼클래스에서는 이를 더 발전된 자동화와 멀티 채널 방식으로 다시 만들 수 있어요.

### 1단계: 이메일 워크플로우와 브로드캐스트 정리하기

- 워크플로우와 브로드캐스트 목록 만들기: ClickFunnels의 이메일 워크플로우와 브로드캐스트를 모두 정리해 두세요. 트리거, 이메일 내용, 발송 시점도 함께 적어 두세요.
- 이메일 템플릿 보관하기: ClickFunnels에서 쓰던 이메일 템플릿을 모두 복사해서 저장해 두세요.

### 2단계: 하이퍼클래스에서 이메일 시퀀스 다시 만들기

- [워크플로우 **Send Email**(이메일 보내기) 액션에서 이메일 템플릿 빌더 사용하기](../../07-워크플로우/기타/how-to-use-email-template-builder-in-the-workflow-send-email-action.md)
- [일반 이메일 캠페인 보내기(즉시 발송 또는 예약)](../../09-이메일/기타/how-to-send-a-regular-email-campaign-send-now-or-schedule.md)
- [다양한 이메일 발송 방식(전달 방식) 알아보기](../../10-마케팅/Campaign-Settings/Functionalities/different-email-sending-delivery-method-s-send-now-schedule-batch-rss-schedule.md)
- [이메일 캠페인·템플릿 미리보기와 테스트](../../09-이메일/기타/preview-and-test-your-email-campaign-templates.md)
- [이메일 통계 알아보기](../../10-마케팅/Statistics/email-statistics.md)

![이메일 마케팅 옮기기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033978950/original/yTw4CtaG9mFcM7yEoB1Xf2kuWOF4SO3tQg.png?1727898934)

## 연락처 옮기기

ClickFunnels의 연락처 프로필에서는 리드별 이메일 주소, 태그, 커스텀 속성, 퍼널 안에서의 행동을 볼 수 있어요. ClickFunnels 2.0의 커스텀 속성은 하이퍼클래스의 커스텀 필드에 해당해요. ClickFunnels의 연락처 필터에서는 태그나 상품 구매 여부 같은 조건을 걸어 연락처를 걸러 낼 수 있어요.

### 1단계: 연락처 내보내기

- ClickFunnels 2.0에서 연락처 열기: 왼쪽 메인 메뉴에서 **Customers**를 클릭하세요. 연락처를 필터링하거나, 표 맨 위의 체크박스를 선택해 현재 페이지의 연락처를 모두 선택하세요.
- CSV로 내보내기: 내보낼 데이터의 필드마다 옆의 체크박스를 선택하세요.

{% hint style="info" %}
처음에는 Email, Phone, Name, Timezone부터 선택해 보세요.
{% endhint %}

### 2단계: 내보낸 데이터 확인하기

- 데이터가 정확한지 확인하기: CSV 파일을 열어서 필요한 정보가 빠짐없이 정확하게 담겼는지 확인하세요.

### 3단계: 하이퍼클래스로 연락처 일괄 가져오기

- 하이퍼클래스로 연락처를 일괄 가져오는 방법은 [CSV 파일로 연락처 가져오기](../../02-연락처/importing-contacts-using-a-csv-file.md) 문서를 참고하세요.
- 연락처를 일괄 가져오다가 문제가 생기면 [CSV 일괄 가져오기 문제 해결](../../02-연락처/스마트-리스트/troubleshooting-bulk-imports-via-csv.md) 문서를 참고하세요.

![연락처 옮기기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033978957/original/J43ONbJbM3v2qqcP4j0wU9jWyC1mLAhNPA.png?1727898953)

## 추가로 챙길 것

### 1단계: 교육과 지원

- 내부 교육 진행하기: 팀원을 대상으로 하이퍼클래스 사용법 교육을 진행하세요. 새로운 기능과, ClickFunnels와 하이퍼클래스의 퍼널·멤버십·온라인 스토어 차이를 중심으로 알려 주세요.
- 하이퍼클래스 고객지원 이용 방법 알아 두기: 팀원이 하이퍼클래스의 고객지원 자료를 이용하는 방법을 알고 있는지 확인하세요.
  - 하이퍼클래스 24시간 연중무휴 고객 지원 옵션
  - 하이퍼클래스 우선 지원 업그레이드 개요

### 2단계: 지속적으로 확인하기

- 성과 모니터링하기: 하이퍼클래스에서 퍼널, 코스, 이메일 캠페인의 성과를 정기적으로 살펴보고 비즈니스에 필요한 수준인지 확인하세요.
- 설정 최적화하기: 하이퍼클래스의 분석 도구로 옮긴 후 개선할 부분을 찾아보세요.
  - [퍼널 통계 활용하기](../../06-사이트/기타/funnel-statistics.md)
  - [이메일 통계 활용하기](../../10-마케팅/Statistics/email-statistics.md)
  - [대시보드 편집하기(프로 플랜 전용)](../../12-대시보드/시작하기/how-to-edit-a-dashboard.md)

## 자주 묻는 질문

### ClickFunnels 코스를 정리해서 하이퍼클래스에서 다시 만들려면 어떻게 하나요?
ClickFunnels 2.0에 로그인해서 코스마다 구조(모듈, 강의, 퀴즈나 다운로드 파일 같은 관련 콘텐츠)를 정리하세요. 상태, 멤버 액세스, 사용자 지정 옵션 같은 설정도 모두 적어 두세요. 그런 다음 하이퍼클래스에서 코스를 다시 만드세요. 옮긴 후에는 코스 액세스를 테스트해서 사용자가 콘텐츠에 제대로 접속하는지, 수료 추적이 잘 되는지 확인하세요.

### ClickFunnels에서 상품을 내보내려면 어떻게 하나요?
ClickFunnels 2.0에 로그인해서 **Products**로 이동하세요. 내보낼 상품을 체크박스로 선택하고 **Actions** 또는 **Bulk actions**를 클릭한 다음, 드롭다운 메뉴에서 **Export**를 선택하세요. 사용하는 시간대에 맞춰 내보내기 시간을 예약하고 **Export Products**를 클릭하세요. 내보낸 파일은 잘 보관해 두세요.

### ClickFunnels 상품을 하이퍼클래스로 가져오려면 어떻게 하나요?
Stripe에서 기존 상품을 가져오거나, 상품을 CSV 파일로 가져올 수 있어요. CSV로 가져오려면 하이퍼클래스에서 **결제 > 상품**으로 이동한 다음, 왼쪽 위의 **CSV로 가져오기**를 클릭하세요.

### ClickFunnels와 같은 결제 환경을 하이퍼클래스에서 설정하려면 어떻게 하나요?
먼저 ClickFunnels에서 **Payments**를 클릭하고 **Gateways**로 이동해서 현재 쓰는 결제 방법을 정리하세요. 그런 다음 하이퍼클래스에서 원하는 결제 수단(NMI, Authorize.net, Stripe)을 연결하세요. Stripe는 하이퍼클래스 서브 계정에 로그인해서 **결제 > 연동**으로 이동한 뒤 안내에 따라 인증하면 돼요. 이후 Stripe 연동에서 보여 줄 결제 방법을 관리할 수 있어요.

### ClickFunnels의 웹사이트와 퍼널을 옮기려면 어떻게 하나요?
ClickFunnels에서 퍼널과 페이지마다 URL, 구조, 콘텐츠, 트래킹 코드, 연결된 폼이나 결제 게이트웨이를 정리하세요. 테마, 스타일 가이드, 커스텀 CSS, 그 밖의 추가 설정도 적어 두세요. 그런 다음 ClickFunnels의 퍼널을 하이퍼클래스로 가져오세요.

### 하이퍼클래스에서 스토어 퍼널을 다시 만들려면 어떻게 하나요?
ClickFunnels에서 스토어 퍼널마다 상품 정보, 결제 페이지, 업셀/다운셀 페이지, 결제 연동을 정리하세요. 상품 정보, 가격, 사용자 지정 내용도 모두 기록해 두세요. 이를 바탕으로 하이퍼클래스에서 스토어 퍼널을 다시 만들고, 테스트 구매로 결제 과정이 매끄러운지, 업셀/다운셀이 모두 제대로 작동하는지 확인하세요.

### ClickFunnels의 이메일 마케팅을 하이퍼클래스로 옮기려면 어떻게 하나요?
ClickFunnels의 이메일 워크플로우와 브로드캐스트를 모두 정리하세요. 트리거, 이메일 내용, 발송 시점도 함께 적어 두세요. 사용한 이메일 템플릿도 모두 복사해서 저장해 두세요. 그런 다음 하이퍼클래스에서 워크플로우의 **Send Email** 액션에 있는 이메일 템플릿 빌더로 이메일 시퀀스를 다시 만드세요. 일반 이메일 캠페인을 보내고, 이메일 전달 방식을 고르고, 캠페인을 미리보기·테스트하고, 이메일 통계도 확인할 수 있어요.

### ClickFunnels에서 연락처를 내보내서 하이퍼클래스로 가져오려면 어떻게 하나요?
ClickFunnels 2.0의 왼쪽 메인 메뉴에서 **Customers**를 클릭하세요. 연락처를 필터링하거나, 표 맨 위의 체크박스를 선택해 현재 페이지의 연락처를 모두 선택하세요. 내보낼 데이터의 필드마다 옆의 체크박스를 선택해 CSV로 내보내세요(Email, Phone, Name, Timezone부터 시작해 보세요). 내보낸 데이터에 필요한 정보가 정확하게 담겼는지 확인한 다음, 하이퍼클래스로 연락처를 일괄 가져오세요.

### 연락처를 일괄 가져오다가 문제가 생기면 어떻게 하나요?
[CSV 일괄 가져오기 문제 해결](../../02-연락처/스마트-리스트/troubleshooting-bulk-imports-via-csv.md) 문서를 참고하세요. CSV 파일의 형식 문제, 중복 레코드, 필수 필드 누락이 흔한 원인이에요. 가져오기 전에 CSV 형식이 올바른지, 필요한 데이터가 모두 들어 있는지 확인하세요.

### 옮기는 동안 팀에 어떤 교육과 지원 자료를 쓸 수 있나요?
팀원을 대상으로 하이퍼클래스 사용법 교육을 진행하세요. 새로운 기능과, ClickFunnels와 하이퍼클래스의 퍼널·멤버십·온라인 스토어 차이를 중심으로 알려 주세요. 24시간 연중무휴 고객 지원 옵션과 우선 지원 업그레이드를 포함해, 팀원이 하이퍼클래스 고객지원 자료를 이용하는 방법을 알고 있는지도 확인하세요.
