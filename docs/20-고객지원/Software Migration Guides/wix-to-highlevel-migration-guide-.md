---

번역일: 2026-04-08
카테고리: 고객지원 > Software Migration Guides
---

# Wix에서 Hyperclass로 이전하기 (마이그레이션 가이드)

이 종합 가이드는 Wix에서 Hyperclass로의 마이그레이션 과정을 도와드리며, 원활하고 효율적인 전환을 보장합니다. 이 문서에 설명된 단계를 따라하면 웹사이트 콘텐츠, 이커머스 데이터, 연락처, 폼, 자동화, 소셜 플래닝을 Wix에서 Hyperclass로 성공적으로 이전할 수 있습니다.

마케팅 활동을 최적화하거나, 고객 관리를 간소화하거나, Hyperclass의 고급 기능을 활용하고자 하는 경우에 관계없이, 이 가이드는 마이그레이션을 성공적으로 완료하는 데 필요한 자세한 지침을 제공합니다.

**중요사항**: Wix에서 Hyperclass로 마이그레이션할 때 다음 구성 요소를 모두 다뤄야 합니다.

1. 연락처
2. 파이프라인
3. 상품
4. 폼
5. 웹사이트 및 페이지
6. 소셜 게시물
7. AI 도구 및 커스텀 연동

**목차**

- [연락처 마이그레이션](#연락처-마이그레이션)
- [파이프라인 재생성 (Wix 워크플로우)](#파이프라인-재생성-wix-워크플로우))
- [상품 마이그레이션 (Wix 스토어)](#상품-마이그레이션-wix-스토어))
- [폼 및 제출 데이터 마이그레이션](#폼-및-제출-데이터-마이그레이션)
- [웹사이트 재생성 및 도메인 연결](#웹사이트-재생성-및-도메인-연결)
- [Wix 자동화 재생성](#wix-자동화-재생성)
- [소셜 게시물 및 마케팅 재생성](#소셜-게시물-및-마케팅-재생성)
- [AI 도구 및 콘텐츠 재생성](#ai-도구-및-콘텐츠-재생성)
- [기타 데이터 내보내기 및 재생성](#기타-데이터-내보내기-및-재생성)

# 연락처 마이그레이션

리드가 연락처 폼을 제출하거나, 뉴스레터를 구독하거나, 구매하거나, 사이트와 다른 방식으로 상호작용하면 Wix가 자동으로 제공된 정보를 포함하여 사용자의 연락처 목록에 추가합니다.

### 1단계: Wix에서 연락처 내보내기

- Wix 로그인: Wix 계정에 로그인하여 연락처 대시보드에 접근하세요.

- 연락처 내보내기: 추가 작업(More Actions) 아이콘 
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032356820/original/-oQzpkEEDnopFmKp_b73C_8sNYNRkBYhGg.png?1725558142)
을 클릭하고 연락처 내보내기(Export contacts)를 클릭하세요. 연락처 그룹을 선택하려면 라벨별로(By Label) 옵션을 선택하거나, 전체 연락처(All Contacts)를 선택하세요.

- CSV 저장: 향후 Hyperclass로 가져오기 위해 CSV 파일을 저장하세요.

### 2단계: Hyperclass 가져오기를 위한 CSV 준비

- 날짜 형식 확인: CSV의 모든 날짜 필드가 YYYY-MM-DD 형식인지 확인하세요. 이는 Hyperclass와의 호환성을 위해 필수입니다.

- 특수 문자 인코딩: 특수 문자와 악센트 문자를 올바르게 처리하기 위해 CSV 파일이 UTF-8 문자 인코딩을 사용하는지 확인하세요.

- 데이터 정리: 파일에서 줄바꿈, 이모지, 불필요한 특수 문자를 제거하세요. 이 단계는 가져오기 오류를 방지하는 데 도움이 됩니다.

- 커스텀 필드 재생성: Hyperclass에 로그인하고 연락처(Contacts) > 설정(Settings) > 커스텀 필드(Custom Fields)로 이동하세요. Wix에서 저장된 방식과 유사하게 연락처 데이터를 저장할 커스텀 필드를 추가하세요.

### 3단계: 연락처를 Hyperclass로 가져오기

- Hyperclass 로그인: 왼쪽 메뉴를 사용하여 연락처(Contacts) 섹션으로 이동하세요.

- 가져오기 프로세스 시작: 연락처 가져오기(Import Contacts) 버튼을 클릭하세요.

- CSV 파일 업로드: 준비된 CSV 파일을 선택하고 업로드하세요.

- 필드 매핑: Hyperclass에서 CSV 파일의 필드를 Hyperclass의 해당 필드에 매핑하라는 메시지가 표시됩니다. 예를 들어, CSV의 "First Name"을 Hyperclass의 "First Name"에 매핑하세요.

- 태그 및 목록 할당: 가져오기 과정에서 연락처를 특정 목록에 할당하고 태그를 적용할 수 있습니다. "Wix에서 가져옴"과 같이 연락처의 출처를 나타내는 태그를 적용하는 것을 고려해보세요.

- 가져오기 완료: 모든 필드를 매핑하고 태그/목록을 설정한 후 가져오기(Import)를 클릭하세요. Hyperclass가 가져오기를 처리하고 연락처가 계정에 추가됩니다.

**필드 매핑 팁**: 모든 필수 필드가 올바르게 매핑되었는지 확인하세요. CSV의 필드가 Hyperclass에 해당하는 필드가 없는 경우, 진행하기 전에 Hyperclass에서 커스텀 필드를 생성해야 할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032356825/original/xTq5H5VUuMyKN0zX7uzn1-9kf5AC-ZpUtA.jpeg?1725558143)

# 파이프라인 재생성 (Wix 워크플로우)

Wix 워크플로우는 프로젝트의 모든 단계를 표시하는 보드로, 모든 컬럼의 연락처 카드를 쉽게 추적할 수 있습니다. Wix 워크플로우는 내보낼 수 없으며 Hyperclass 파이프라인 및 기회 관리에서 재생성해야 합니다.

**중요사항**: 파이프라인을 마이그레이션할 때 명명 규칙이 약간 다릅니다.

워크플로우(Wix) ➡️ 파이프라인(Hyperclass)  
컬럼(Wix) ➡️ 파이프라인 단계(Hyperclass)  
카드(Wix) ➡️ 기회 카드(Hyperclass)

### 1단계: Wix 워크플로우(파이프라인) 보기

- Wix 로그인: 사이트 대시보드의 워크플로우(Workflows)로 이동하세요. 모든 파이프라인과 그 컬럼을 확인하세요.

### 2단계: Hyperclass에서 파이프라인 재생성

- Hyperclass 로그인: 왼쪽 사이드바의 기회 관리(Opportunities)로 이동하세요. 파이프라인(Pipelines)을 선택하세요.

- 파이프라인 추가: 파이프라인 추가(Add Pipeline)를 클릭하세요. Wix의 단계와 일치하도록 파이프라인 단계를 재생성하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032356831/original/MHdG54L3CFbYsYT6arlRRAwrdd3oUGKGtg.png?1725558143)

# 상품 마이그레이션 (Wix 스토어)

사용자는 최대 5,000개의 실물 상품을 CSV 파일로 내보낼 수 있습니다. 각 상품에는 Wix 미디어 매니저에서 사용 가능한 미디어 파일이 있습니다.

### 1단계: Wix에서 상품 데이터 내보내기

- Wix 로그인: Wix 계정에 로그인하여 Wix 스토어 대시보드에 접근하세요.

- 상품 내보내기: 상품(Products) 섹션으로 이동하여 추가 작업(More Actions)을 클릭하고 내보내기(Export)를 선택하세요. 상품 목록을 CSV 파일로 저장한 다음 내보낼 항목을 선택하세요. 내보내기를 완료하려면 추가 작업(More Actions) 드롭다운을 클릭한 다음 내보내기(Export)를 클릭하세요.

모든 상품 내보내기: 왼쪽 상단의 체크박스를 선택하세요.

- 카테고리 또는 기타 필터링된 상품 내보내기: 필터를 클릭하고 내보낼 상품 유형을 선택한 다음 완료(Done)를 클릭하세요.

- 선택한 상품 내보내기: 내보낼 상품 옆의 체크박스를 선택하세요.

### 2단계: Wix에서 상품 미디어 다운로드

- Wix 로그인

- [Wix 미디어 매니저](https://support.wix.com/en/article/wix-media-accessing-the-media-manager)로 이동

- 키보드에서 Command / Control 키를 누르고 있으세요.

- 다운로드할 파일을 클릭하세요.

- 필요한 모든 상품 이미지를 확보하기 위해 Wix 미디어 매니저의 오른쪽 패널에서 다운로드(Download)를 클릭하세요.

### 3단계: 가져오기를 위한 Wix 상품 CSV 준비

- 데이터 정리: Wix 상품 CSV가 Hyperclass 샘플 CSV와 동일한 헤더와 구조를 갖도록 하세요. [여기를 클릭하여 샘플 상품 .csv 파일을 다운로드하세요](https://drive.google.com/file/d/13D3PS68wsWK-h2IBPWeelFD6Mko9meDo/view?usp=sharing)

**중요사항**: CSV에는 정확히 29개의 컬럼이 있어야 합니다.

### 4단계: Hyperclass에 결제 게이트웨이 추가

- 결제 게이트웨이 설정: Hyperclass 내에서 선호하는 결제 게이트웨이를 연동하고, Wix 스토어 설정과 일치하도록 상품 가격, 세금, 배송 옵션을 구성하세요.

### 5단계: 상품을 Hyperclass로 가져오기

- Hyperclass 로그인: Hyperclass에 로그인하고 결제(Payments) > 상품(Products)으로 이동한 다음 CSV로 가져오기(Import as CSV)를 선택하세요.

- 상품 가져오기: 상품 세부 정보를 Hyperclass에 수동으로 입력하거나, 사용 가능한 경우 CSV 가져오기 기능을 사용하세요. 상품 이미지를 다시 업로드하고 해당 상품에 할당하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032356827/original/FTn3Q4qL0VOxZ7Aeb-U1N90z2f0k1sqIlg.png?1725558143)

# 폼 및 제출 데이터 마이그레이션

사용자는 사이트에 방문자가 작성할 수 있는 커스터마이즈 가능한 Wix 폼을 직접 삽입하거나(예: 연락처 폼이나 견적 요청 폼), 고유한 URL로 독립형 폼을 공유할 수 있습니다. 기본적으로 누군가 폼을 제출하면 제출에 대해 알리는 이메일이 자동으로 사이트 소유자에게 전송됩니다.

### 1단계: Wix에서 폼 데이터 내보내기

- Wix 로그인: Wix 계정에 로그인하여 폼 및 제출(Forms & Submissions) 대시보드에 접근하세요.

- 제출 데이터 내보내기: 폼 및 제출(Forms & Submissions)로 이동하여 추가 작업(More Actions)을 클릭하고 내보내기(Export)를 선택하세요. 향후 사용을 위해 폼 제출을 CSV 파일로 저장하세요.

### 2단계: Hyperclass에서 폼 재생성

- Hyperclass에서 폼 생성: Hyperclass에 로그인하고 사이트(Sites) > 폼(Forms)으로 이동하여 새 폼을 생성하세요. Wix 폼과 일치하는 커스텀 필드를 추가하여 폼을 재구성하세요.

- 폼 액션 구성: Wix의 기능을 복제하기 위해 폼 알림이나 폼의 조건부 로직과 같은 자동 액션을 Hyperclass에서 설정하세요.

# 웹사이트 재생성 및 도메인 연결

Wix는 전체 웹사이트 콘텐츠에 대한 직접 내보내기 옵션을 제공하지 않습니다. Wix 사이트가 제대로 작동하려면 Wix 서버에서 호스팅되고 운영되어야 합니다. 따라서 Hyperclass에서 사이트와 온라인 스토어를 재구성하려면 텍스트, 이미지 및 기타 미디어 파일을 수동으로 복사해야 합니다.

### 1단계: Wix에서 콘텐츠 내보내기

- Wix 로그인: Wix 계정에 로그인하고 Wix 대시보드에 접근하는 것부터 시작하세요.

- 웹사이트 콘텐츠 내보내기: 마이그레이션에 필요한 모든 콘텐츠를 확보하기 위해 Wix 미디어 매니저에서 이미지, 동영상, 문서를 다운로드하세요.

- HTML/CSS 저장: Wix 사이트에서 커스텀 코드를 사용한 경우, 웹사이트의 디자인과 기능을 보존하기 위해 HTML, CSS 및 모든 커스텀 스크립트를 복사하세요.

### 2단계: Hyperclass에서 웹사이트 재구성

- Hyperclass 로그인: Hyperclass 계정에 접근하고 웹사이트 구조에 따라 사이트(Sites) > 퍼널(Funnels) 또는 사이트(Sites) > 웹사이트(Websites)로 이동하세요.

- 페이지 재구성: 복사한 콘텐츠를 붙여넣고 미디어 파일을 Hyperclass에 다시 업로드하여 각 페이지를 수동으로 재생성하세요. Hyperclass의 드래그 앤 드롭 편집기를 활용하여 페이지를 디자인하고 Wix 사이트와 유사하게 폼을 추가하세요.

- 커스텀 코드 추가: Wix에서 커스텀 HTML/CSS를 사용한 경우, 원래 기능과 디자인을 유지하기 위해 이 코드를 Hyperclass의 관련 섹션에 추가할 수 있습니다.

### 3단계: Wix에서 도메인 연결 해제

- Wix 로그인

- 도메인(Domains) 페이지로 이동하세요.

- 해당 도메인 옆의 더 보기(Show More) 아이콘 
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032356814/original/n0M0340akWZBxK7sbaydJwVPx8CplLxKXA.png?1725558141)
을 클릭하고 이 사이트에서 할당 해제(Unassign from This Site)를 선택하세요.

### 4단계: 도메인을 Hyperclass에 연결

- Hyperclass 로그인: 설정(Settings) > 도메인(Domains) > 도메인 추가(Add Domain)로 이동하세요. 새로 생성한 사이트에 필요한 도메인을 입력하세요.

- Wix 로그인: 도메인(Domains) 페이지로 이동하세요. 해당 도메인 옆의 도메인 액션(Domain Actions) 아이콘
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032356813/original/OGYd87JQ6C9K08Z2Rs0m2LWzWmMT0sPF0A.png?1725558141)
을 클릭하세요. DNS 레코드 관리(Manage DNS records)를 선택하세요.

- Wix에 DNS 레코드 추가: 추가할 레코드 유형(예: CNAME, TXT)으로 스크롤하고 레코드 추가(+ Add Record)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032356824/original/TjCxkG0luIyussaVXVEE-Ko8zQZAuVq78g.png?1725558143)

# Wix 자동화 재생성

Wix는 자동화에 대한 직접 내보내기 옵션을 제공하지 않습니다. Wix 자동화는 이메일 발송, 알림, 사용자 할당과 같은 웹사이트 작업을 간소화합니다.

### 1단계: Wix 자동화 검토

- Wix 로그인: 사이트 대시보드의 자동화(Automations)로 이동하세요.

- 활성 자동화 보기: 내 자동화(Your automations) 섹션으로 스크롤하여 2개 탭에서 모든 자동화를 확인하세요. 각 탭에서 활성 자동화를 필터링하세요.

내가 생성한 것(Created by you): 여기서 또는 앱을 통해 직접 생성한 활성 자동화.

- 자동 설치된 것(Installed for you): Wix 앱을 설치할 때 자동으로 생성된 활성 자동화.

### 2단계: Hyperclass에서 트리거 및 액션 재생성

- Hyperclass 로그인: 자동화(Automation) > 워크플로우(Workflows)로 이동하세요.

- 트리거 및 액션 설정: 이메일 시퀀스 및 작업 할당과 같은 모든 필수 자동화가 복제되도록 워크플로우 기능을 사용하여 Hyperclass에서 유사한 트리거 및 액션을 구성하세요. [Hyperclass에서 워크플로우 생성에 대해 자세히 알아보려면 여기를 클릭하세요.](getting-started-with-workflows.md)

# 소셜 게시물 및 마케팅 재생성

Wix는 소셜 게시물을 내보내는 방법을 제공하지 않습니다. 소셜 계정을 Hyperclass의 소셜 플래너에 연결하고 소셜 게시물을 다운로드해야 합니다.

### 1단계: Wix에서 소셜 게시물 다운로드

- Wix 로그인: Wix 계정에 로그인하여 소셜 미디어 마케팅(Social Media Marketing) 대시보드에 접근하세요. 내 소셜 게시물(Your Social Posts)을 클릭하세요.

- 소셜 게시물 다운로드: 예약된 게시 날짜와 시간, 캡션, 이미지, 링크를 포함하여 소셜 게시물의 콘텐츠를 수동으로 다운로드하여 Hyperclass에서 재생성할 준비를 하세요.

### 2단계: Hyperclass에서 소셜 게시물 재생성

- 소셜 게시물 생성: Hyperclass에 로그인하고 마케팅(Marketing) > 소셜 플래너(Social Planner)로 이동하세요. Wix에서 복사한 콘텐츠를 사용하여 소셜 게시물을 재생성하세요.

- 예약 또는 게시: 마케팅 캘린더에 따라 게시물을 향후 날짜에 게시하도록 예약하거나 즉시 게시하세요.

# AI 도구 및 콘텐츠 재생성

### 1단계: AI 기반 콘텐츠 재생성

- Wix AI 도구 검토: 텍스트, 이미지, SEO 태그와 같이 Wix에서 사용한 AI 생성 콘텐츠를 식별하세요.

- Hyperclass의 콘텐츠 AI 도구에 익숙해지기: Hyperclass의 AI 도구를 사용하여 텍스트와 이미지를 생성하세요. Wix에서 생성된 콘텐츠를 수동으로 복사하거나 필요에 따라 Hyperclass AI를 사용하여 커스텀 AI 프롬프트를 재생성하세요.

# 기타 데이터 내보내기 및 재생성

- 기타 데이터 내보내기: 블로그 게시물이나 분석 데이터와 같이 이전 섹션에서 다루지 않은 추가 데이터나 구성을 Wix에서 수동으로 내보내거나 복사하세요.

- Hyperclass에서 재생성: 모든 중요한 정보가 전송되도록 이 데이터를 관련 Hyperclass 섹션에 수동으로 입력하거나 업로드하세요.

---
*원문 최종 수정: Fri, 7 Mar, 2025 at 9:08 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*