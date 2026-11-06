---

번역일: 2026-04-08
카테고리: 20-고객지원 > Software Migration Guides
---

# ClickFunnels에서 Hyperclass로 마이그레이션 가이드

ClickFunnels에서 Hyperclass로 세일즈 퍼널, 웹사이트, 강의, 기타 디지털 자산을 마이그레이션하는 종합 가이드입니다. 원활한 전환을 보장하고 기능을 보존하며 Hyperclass의 고급 기능으로 마케팅 역량을 강화하는 것이 목표입니다.

**중요**: ClickFunnels에서 Hyperclass로 전환할 때 다음 모든 구성 요소를 마이그레이션해야 합니다.

1. 강의 & 상품
2. 결제 연동
3. 폼
4. 웹사이트 & 퍼널
5. 스토어 퍼널
6. 이메일 마케팅
7. 연락처

---

## 목차

- [강의 마이그레이션](#강의-마이그레이션)
- [상품 마이그레이션](#상품-마이그레이션)
- [결제 연동 마이그레이션](#결제-연동-마이그레이션)
- [웹사이트 & 퍼널 마이그레이션](#웹사이트-퍼널-마이그레이션)
- [온라인 스토어 재구축 (이커머스)](#온라인-스토어-재구축-이커머스)
- [이메일 마케팅 마이그레이션](#이메일-마케팅-마이그레이션)
- [연락처 마이그레이션](#연락처-마이그레이션)
- [추가 고려사항](#추가-고려사항)
- [자주 묻는 질문](#자주-묻는-질문)

---

## Classic ClickFunnels 메뉴

![ClickFunnels 클래식 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033900593/original/qvVDqeGT1_FqygJT4Db53b1R7JdNki0kBg.png?1727811457)

## ClickFunnels 2.0 메뉴

기본적으로 퍼널, 상품, 고객, 마케팅만 사용할 수 있습니다. 사용자는 기회 관리, 사이트, 자동화, 강의, 스토어 같은 앱을 추가로 설치할 수 있습니다.

![ClickFunnels 2.0 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033900594/original/zPqt_oDQj6X9gGk9wpKxoWeEMfNY2mVuPw.png?1727811457)

---

# 강의 마이그레이션

강의 대시보드에서는 기존 강의를 표시하고, 각 강의의 추가 정보를 보여주며, 새 강의를 만들 수 있습니다. Hyperclass에서 강의 상품을 다시 만들어보겠습니다.

### 1단계: 강의 구조 문서화

- **ClickFunnels 2.0에 로그인하여 강의 목록 작성**: ClickFunnels의 각 강의를 문서화하세요. 모듈, 레슨, 퀴즈나 다운로드 가능한 파일 등 관련 콘텐츠를 포함해주세요.

- **설정 기록**: 강의 상태(발행됨, 초안), 회원 액세스, 커스터마이징 옵션 등의 설정을 기록하세요.

### 2단계: Hyperclass에서 강의 재생성

- [Hyperclass에서 강의를 만드는 방법 알아보기](../../17-멤버십-커뮤니티/멤버십-코스/how-to-build-courses-membership-sites.md)

### 3단계: 마이그레이션 후 확인

- **강의 접근 테스트**: 사용자가 강의에 올바르게 접근할 수 있는지, 콘텐츠가 의도대로 표시되는지, 완료 추적이 작동하는지 확인하세요.

![강의 마이그레이션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033965715/original/bI5EVigTSg5Kb8KxthEh7khbRi9rtGJP0Q.png?1727883470)

---

# 상품 마이그레이션

### 1단계: ClickFunnels에서 상품을 CSV로 내보내기

- **ClickFunnels 2.0에 로그인**: Products(상품)으로 이동하고 체크박스를 사용해서 내보낼 상품을 선택하세요.

- **상품 내보내기**: Actions(액션) 또는 Bulk actions(일괄 작업)을 클릭하고 드롭다운 메뉴에서 Export(내보내기)를 선택하세요. 해당 시간대에서 내보내기를 예약하고 Export Products(상품 내보내기)를 클릭하세요. 안전하게 보관해주세요.

### 2단계: Hyperclass에 상품 가져오기

- Hyperclass에 상품 가져오기: Hyperclass에서 Payments(결제) > Products(상품) > Import as CSV(CSV로 가져오기)를 왼쪽 상단에서 선택하세요.

- [Stripe에서 Hyperclass로 상품을 가져오는 방법 자세히 알아보기](../../08-결제/import-products-price-from-stripe.md)

![상품 마이그레이션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033966695/original/JhzxYEdhAF_L4SRIum2mGP2MIPKzHuf3Yg.png?1727884186)

---

# 결제 연동 마이그레이션

ClickFunnels 2.0의 Payments AI는 Stripe, PayPal, Klarna 등 여러 게이트웨이를 통해 결제를 처리하는 통합 시스템입니다. Hyperclass 결제에서 연동을 생성해야 합니다.

### 1단계: Payments AI 액세스

- **결제 방법 문서화**: 왼쪽 하단의 Payments(결제)를 클릭하세요. 상단 네비게이션 바에서 Gateways(게이트웨이)를 클릭해서 결제 게이트웨이 관리 영역을 여세요.

### 2단계: Hyperclass를 선호하는 결제 방법에 연결

- **Stripe 연결**: Hyperclass 하위 계정에 로그인하세요.

  - Payments(결제) > Integrations(연동)으로 이동해서 Stripe를 연결한 다음, 인증 프로세스를 따르세요.

  - [Stripe 연동에서 표시되는 결제 방법 관리하는 방법 알아보기](../../08-결제/시작하기/manage-payment-methods-displayed-with-stripe-integration.md)

- NMI 연결: [Hyperclass 로케이션에 NMI를 연결하는 방법 알아보기](../../08-결제/how-to-set-up-the-nmi-integration-.md)

- Authorize.net: [Hyperclass 로케이션에 Authorize.net을 연결하는 방법 알아보기](../../08-결제/authorize-net-integration-for-processing-payments.md)

![결제 연동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033978406/original/vXWxULRCYc5vmCIppr_B3E3fkV7gifxjFg.png?1727898090)

---

# 웹사이트 & 퍼널 마이그레이션

ClickFunnels에서는 페이지 편집기와 사이트 개요를 사용해서 세일즈 퍼널과 웹사이트를 구축하고 관리합니다. 이러한 퍼널과 웹사이트는 Hyperclass에서 재생성할 수 있습니다.

### 1단계: 퍼널 & 웹사이트 세부사항 문서화

- **퍼널 & 페이지 목록 작성**: ClickFunnels에서 각 퍼널과 페이지를 문서화하세요. URL, 구조, 콘텐츠, 추적 코드, 통합된 폼이나 결제 게이트웨이를 포함해주세요.

- **특정 설정 기록**: 테마, 스타일 가이드, 커스텀 CSS, 각 퍼널이나 사이트의 추가 구성 등의 설정을 기록하세요.

### 2단계: ClickFunnels에서 퍼널 가져오기

- [ClickFunnels에서 Hyperclass 로케이션으로 퍼널을 가져오는 방법 알아보기](../../06-사이트/퍼널-웹사이트/how-to-import-a-funnel-from-clickfunnels-.md)

![퍼널 마이그레이션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033978599/original/ODFZplmqIT4fq0laaNR9Gpvx8uItfhcbBg.jpeg?1727898424)

---

# 온라인 스토어 재구축 (이커머스)

ClickFunnels의 스토어 퍼널은 상품 판매와 결제 프로세스를 관리합니다. 이커머스 기능을 유지하려면 이러한 퍼널을 Hyperclass에서 재생성해야 합니다.

### 1단계: 스토어 퍼널 세부사항 문서화

- **스토어 퍼널 목록 작성**: ClickFunnels의 각 스토어 퍼널을 문서화하세요. 상품 세부사항, 결제 페이지, 업셀/다운셀 페이지, 결제 연동을 포함해주세요.

- **상품 설정 기록**: 모든 상품 정보, 가격, 커스터마이징 내용이 기록되었는지 확인하세요.

### 2단계: Hyperclass에서 스토어 퍼널 재생성

- [Hyperclass에서 이커머스 스토어 설정하는 방법 알아보기](../../37-이커머스-스토어/E-Commerce-Store/how-to-set-up-an-e-commerce-online-store-websites-.md)

### 3단계: 마이그레이션 후 확인

- **구매 플로우 테스트**: 테스트 구매를 진행해서 결제 프로세스가 원활하게 작동하고 모든 업셀/다운셀이 올바르게 작동하는지 확인하세요.

![스토어 마이그레이션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033978202/original/oMaU_skOeODHtdJZXB_NBB1Sa-1CeoQfOg.png?1727897735)

---

# 이메일 마케팅 마이그레이션

ClickFunnels에서는 워크플로우와 브로드캐스트를 통해 기본적인 이메일 마케팅이 가능합니다. Hyperclass에서는 더 고급의 자동화와 멀티채널 참여 옵션으로 이를 재생성할 수 있습니다.

### 1단계: 이메일 워크플로우 & 브로드캐스트 문서화

- **워크플로우 & 브로드캐스트 목록 작성**: ClickFunnels의 모든 이메일 워크플로우와 브로드캐스트를 문서화하세요. 트리거, 이메일 콘텐츠, 타이밍을 포함해주세요.

- **이메일 템플릿 캡처**: ClickFunnels에서 사용한 모든 이메일 템플릿의 사본을 저장하세요.

### 2단계: Hyperclass에서 이메일 시퀀스 재생성

- [워크플로우 이메일 발송 액션에서 이메일 템플릿 빌더 사용하는 방법 알아보기](../../07-워크플로우/기타/how-to-use-email-template-builder-in-the-workflow-send-email-action.md)

- [일반 이메일 캠페인 발송하는 방법 알아보기 (즉시 발송 또는 예약)](../../09-이메일/기타/how-to-send-a-regular-email-campaign-send-now-or-schedule-.md)
- [다양한 이메일 발송/전달 방법에 대해 자세히 알아보기](../../10-마케팅/Campaign-Settings/Functionalities/different-email-sending-delivery-method-s-send-now-schedule-batch-rss-schedule.md)
- [이메일 캠페인/템플릿 미리보기 및 테스트하는 방법 알아보기](../../09-이메일/기타/preview-and-test-your-email-campaign-templates.md)
- [이메일 통계에 대해 자세히 알아보기](../../10-마케팅/Statistics/email-statistics.md)

![이메일 마케팅 마이그레이션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033978950/original/yTw4CtaG9mFcM7yEoB1Xf2kuWOF4SO3tQg.png?1727898934)

---

# 연락처 마이그레이션

ClickFunnels의 연락처 프로필에서는 각 리드의 정보를 볼 수 있습니다. 이메일 주소, 태그, 커스텀 속성, 퍼널 내에서의 행동 등이 포함됩니다. ClickFunnels 2.0의 커스텀 속성은 커스텀 필드입니다. ClickFunnels 연락처 필터링을 통해 사용자는 태그나 상품 구매 등 다양한 조건을 적용해서 연락처를 필터링할 수 있습니다.

### 1단계: 연락처 내보내기

- **ClickFunnels 2.0에서 연락처 액세스**: 왼쪽 메인 메뉴에서 Customers(고객)를 클릭하세요. 연락처를 필터링하거나 테이블 상단의 체크박스를 선택해서 현재 페이지의 모든 연락처를 선택하세요.

- **CSV로 내보내기**: 내보내고자 하는 데이터에 대해 각 필드 옆의 체크박스를 선택하세요. 팁: 이메일, 전화, 이름, 시간대로 시작하세요.

### 2단계: 내보낸 데이터 검토

- **데이터 무결성 확인**: CSV 파일을 열어서 필요한 모든 정보가 정확하게 캡처되었는지 확인하세요.

### 3단계: Hyperclass에 연락처 일괄 가져오기

- [Hyperclass에 연락처를 일괄 가져오는 방법 알아보기](../../02-연락처/기타/bulk-importing-contacts-via-csv-walkthrough.md)

- 연락처 일괄 가져오기에 문제가 있다면, [CSV를 통한 일괄 가져오기 문제 해결에 대해 자세히 알아보기](../../02-연락처/스마트-리스트/troubleshooting-bulk-imports-via-csv.md)

![연락처 마이그레이션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033978957/original/J43ONbJbM3v2qqcP4j0wU9jWyC1mLAhNPA.png?1727898953)

---

# 추가 고려사항

### 1단계: 교육 및 지원

- **내부 교육**: 팀원들에게 Hyperclass 사용법에 대한 교육 세션을 제공하세요. ClickFunnels와 Hyperclass 퍼널, 멤버십, 온라인 스토어 간의 새로운 기능과 차이점에 중점을 두세요.

- **Hyperclass 지원 액세스**: 팀이 Hyperclass의 지원 리소스에 액세스하는 방법을 알고 있는지 확인하세요. [Hyperclass의 24/7 고객 지원 옵션에 대해 자세히 알아보기](../General-Support-Info/24-7-customer-support-options.md)

- Hyperclass의 우선순위 지원 업그레이드 개요에 대해 자세히 알아보기

### 2단계: 지속적인 모니터링

- **성과 모니터링**: Hyperclass에서 퍼널, 강의, 이메일 캠페인의 성과를 정기적으로 검토해서 비즈니스 요구사항을 충족하는지 확인하세요.

- **설정 최적화**: Hyperclass의 분석 도구를 사용해서 마이그레이션 후 개선할 영역을 식별하세요. [퍼널 통계 사용법에 대해 자세히 알아보기](../../06-사이트/기타/funnel-statistics.md)

- [이메일 통계 사용법에 대해 자세히 알아보기](../../06-사이트/기타/funnel-statistics.md)

- [대시보드 편집하는 방법 알아보기 (Pro 플랜 전용)](../../12-대시보드/시작하기/how-to-edit-a-dashboard.md)

---

## 자주 묻는 질문

**ClickFunnels에서 Hyperclass로 강의를 문서화하고 재생성하는 방법은?**

ClickFunnels 2.0에 로그인해서 각 강의의 구조(모듈, 레슨, 퀴즈나 다운로드 가능한 파일 등 관련 콘텐츠 포함)를 문서화하고, 모든 설정(상태, 회원 액세스, 커스터마이징 옵션)을 기록한 다음, Hyperclass에서 이러한 강의를 재생성하세요. 마이그레이션 후에는 사용자가 콘텐츠에 올바르게 접근할 수 있고 완료 추적이 제대로 작동하는지 강의 접근을 테스트하세요.

**ClickFunnels에서 상품을 내보내는 방법은?**

ClickFunnels 2.0에 로그인하고, Products(상품)으로 이동해서 체크박스를 사용해서 내보내고 싶은 상품을 선택하세요. Actions(액션) 또는 Bulk actions(일괄 작업)을 클릭하고 드롭다운 메뉴에서 Export(내보내기)를 선택하세요. 해당 시간대에서 내보내기를 예약하고 Export Products(상품 내보내기)를 클릭하세요. 이 내보낸 파일을 안전하게 보관해주세요.

**ClickFunnels 상품을 Hyperclass에 어떻게 가져오나요?**

Stripe에서 기존 상품을 가져오거나 상품을 CSV 파일로 가져올 수 있습니다. CSV 가져오기의 경우, Hyperclass에서 Payments(결제) > Products(상품)로 이동한 다음 왼쪽 상단의 Import as CSV(CSV로 가져오기)를 클릭하세요.

**ClickFunnels 설정과 일치하도록 Hyperclass에서 결제 연동을 설정하는 방법은?**

먼저 Payments(결제)를 클릭한 다음 Gateways(게이트웨이)를 클릭해서 ClickFunnels의 현재 결제 방법을 문서화하세요. Hyperclass에서 선호하는 결제 방법(NMI, Authorize.net, 또는 Stripe)을 연결하세요. Stripe의 경우, Hyperclass 하위 계정에 로그인하고 Payments(결제) > Integrations(연동)으로 이동해서 인증 프로세스를 따르세요. 그러면 Stripe 연동에서 표시되는 결제 방법을 관리할 수 있습니다.

**ClickFunnels에서 웹사이트와 퍼널을 마이그레이션하는 방법은?**

ClickFunnels에서 URL, 구조, 콘텐츠, 추적 코드, 통합된 폼이나 결제 게이트웨이를 포함해서 각 퍼널과 페이지를 문서화하세요. 테마, 스타일 가이드, 커스텀 CSS, 추가 구성 등 특정 설정을 기록하세요. 그다음 ClickFunnels에서 Hyperclass로 퍼널을 가져오세요.

**Hyperclass에서 스토어 퍼널을 재생성하는 방법은?**

ClickFunnels에서 상품 세부사항, 결제 페이지, 업셀/다운셀 페이지, 결제 연동을 포함해서 각 스토어 퍼널을 문서화하세요. 모든 상품 정보, 가격, 커스터마이징 내용을 기록하세요. Hyperclass에서 이러한 스토어 퍼널을 재생성하고, 테스트 구매를 진행해서 결제 프로세스가 원활하게 작동하고 모든 업셀/다운셀이 올바르게 작동하는지 확인하세요.

**ClickFunnels에서 Hyperclass로 이메일 마케팅을 마이그레이션하는 방법은?**

ClickFunnels에서 트리거, 이메일 콘텐츠, 타이밍을 포함해서 모든 이메일 워크플로우와 브로드캐스트를 문서화하세요. 사용된 모든 이메일 템플릿의 사본을 저장하세요. 워크플로우 이메일 발송 액션에서 이메일 템플릿 빌더를 사용해서 Hyperclass에서 이러한 이메일 시퀀스를 재생성하세요. 일반 이메일 캠페인을 발송하고, 다양한 이메일 전달 방법을 선택하며, 캠페인을 미리보고 테스트하고, 이메일 통계를 볼 수 있습니다.

**ClickFunnels에서 연락처를 내보내고 Hyperclass에 가져오는 방법은?**

ClickFunnels 2.0에서 왼쪽 메인 메뉴의 Customers(고객)를 클릭하세요. 연락처를 필터링하거나 테이블 상단의 체크박스를 선택해서 현재 페이지의 모든 연락처를 선택하세요. 내보내고자 하는 데이터에 대해 각 필드 옆의 체크박스를 선택해서 CSV로 내보내기 하세요(이메일, 전화, 이름, 시간대로 시작). 내보낸 데이터를 검토해서 필요한 모든 정보가 정확하게 캡처되었는지 확인한 다음, Hyperclass에 연락처를 일괄 가져오세요.

**연락처 일괄 가져오기에 문제가 발생하면 어떻게 해야 하나요?**

가이드의 "CSV를 통한 일괄 가져오기 문제 해결" 섹션을 참조하세요. 일반적인 문제로는 CSV 파일의 포맷 문제, 중복 레코드, 필수 필드 누락 등이 있습니다. 가져오기를 시도하기 전에 CSV가 적절하게 포맷되어 있고 필요한 모든 데이터를 포함하고 있는지 확인하세요.

**마이그레이션 프로세스 동안 팀을 위해 어떤 교육 및 지원 리소스를 사용할 수 있나요?**

ClickFunnels와 Hyperclass 퍼널, 멤버십, 온라인 스토어 간의 새로운 기능과 차이점에 중점을 두고 팀원들에게 Hyperclass 사용에 대한 내부 교육 세션을 제공하세요. 팀이 24/7 고객 지원 옵션과 우선순위 지원 업그레이드를 포함한 Hyperclass의 지원 리소스에 액세스하는 방법을 알고 있는지 확인하세요.

---
*원문 최종 수정: Thu, 24 Apr, 