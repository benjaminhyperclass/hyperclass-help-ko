---

번역일: 2026-04-08
카테고리: 20-고객지원 > Software Migration Guides
---

# Zoho에서 Hyperclass로 마이그레이션 가이드

이 가이드는 Zoho의 다양한 애플리케이션에서 Hyperclass로 데이터와 기능을 마이그레이션하는 상세한 방법을 제공합니다. 핵심 데이터, 자동화, 워크플로우를 유지하면서 Hyperclass의 통합 마케팅 및 CRM 기능을 최대한 활용할 수 있도록 원활한 전환을 목표로 합니다.

**중요:** Zoho에서 Hyperclass로 전환할 때 다음 구성 요소를 모두 마이그레이션해야 합니다.
1. 연락처
2. 사용자
3. 캘린더
4. 기회 관리
5. 폼
6. 계약서
7. 사이트
8. 자동화
9. 분석

---
**목차**

- [연락처 마이그레이션](#연락처-마이그레이션)
- [사용자 마이그레이션](#사용자-마이그레이션)
- [캘린더 마이그레이션](#캘린더-마이그레이션)
- [기회 관리 & 파이프라인 마이그레이션](#기회-관리-파이프라인-마이그레이션)
- [폼 마이그레이션](#폼-마이그레이션)
- [계약서 및 문서 마이그레이션](#계약서-및-문서-마이그레이션)
- [웹사이트 마이그레이션](#웹사이트-마이그레이션)
- [자동화 마이그레이션](#자동화-마이그레이션)
- [분석 마이그레이션](#분석-마이그레이션)

---
**연락처 마이그레이션**

한 번에 최대 200,000개의 연락처 레코드를 CSV 형태로 내보낼 수 있습니다. 가장 오래된 200,000개 레코드가 내보내지며, CSV 형태의 레코드는 압축됩니다. 내보내기 다운로드 링크는 7일간 유효합니다.

### **1단계:** 연락처 내보내기

- **내보내기용 연락처 데이터 준비:** 메일링 리스트와 세그먼트를 Hyperclass 마이그레이션용 태그로 재생성하세요. 이는 마이그레이션 전용 태그입니다.

- **Zoho 데이터 내보내기:** 우측 상단의 Setup(설정)(
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363599/original/cYv1R-c6bAUF_kBqEsLZktmaFdxZNFcPVg.png?1725571467)
)으로 이동한 후 Data Administration 섹션을 클릭하고 Export를 선택하세요. Export Data 페이지에서 Start an Export > Module > Contacts를 클릭하세요.

- **내보낼 필드 선택:** Custom View에서 필드, 모든 필드, 또는 내보낼 필드 선택 중에서 선택할 수 있습니다. Hyperclass로 마이그레이션하려면 이메일 또는 전화번호 필드가 포함되어야 합니다.

- **데이터 다운로드:** Export를 클릭하세요. 내보내기가 Export History 테이블에 '진행 중' 상태로 추가됩니다. 상태가 '완료'로 변경되면 항목에 마우스를 올리고 Download 링크(
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363594/original/v9DwtvwftwdRvwKRvpVDQPICXrDNwjq2Fg.png?1725571466)
)를 클릭하세요.

### **2단계:** Hyperclass 가져오기를 위한 CSV 준비

- **날짜 형식 확인:** CSV의 모든 날짜 필드가 YYYY-MM-DD 형식인지 확인하세요. Hyperclass와의 호환성을 위해 필수입니다.

- **특수 문자 인코딩:** CSV 파일이 특수 문자와 악센트 문자를 제대로 처리하도록 UTF-8 문자 인코딩을 사용하는지 확인하세요.

- **데이터 정리:** 파일에서 줄바꿈, 이모지, 불필요한 특수 문자를 제거하세요. 이 단계는 가져오기 오류를 방지하는 데 도움이 됩니다.

- **커스텀 필드 재생성:** Hyperclass에 로그인하여 Contacts(연락처) > Settings(설정) > Custom Fields(커스텀 필드)로 이동하세요. Zoho에 저장된 방식과 유사하게 연락처 데이터를 저장할 커스텀 필드를 추가하세요.

### **3단계:** Hyperclass로 연락처 가져오기

- **Hyperclass 로그인:** 좌측 메뉴를 사용하여 연락처 섹션으로 이동하세요.

- **가져오기 프로세스 시작:** Import Contacts(연락처 가져오기) 버튼을 클릭하세요.

- **CSV 파일 업로드:** 준비된 CSV 파일을 선택하여 업로드하세요.

- **필드 매핑:** Hyperclass가 CSV 파일의 필드를 Hyperclass의 해당 필드에 매핑하라는 메시지를 표시합니다. 예를 들어 CSV의 "First Name"을 Hyperclass의 "First Name"에 매핑하세요.

**필드 매핑 팁:** 모든 필수 필드가 올바르게 매핑되었는지 확인하세요. CSV의 필드가 Hyperclass에 해당하는 필드가 없다면 진행하기 전에 Hyperclass에서 커스텀 필드를 생성해야 할 수 있습니다.

- **태그 및 리스트 할당:** 가져오기 과정에서 연락처를 특정 리스트에 할당하고 태그를 적용할 수 있습니다. "Zoho Import"와 같이 연락처의 출처를 나타내는 태그 적용을 고려하세요.

- **가져오기 완료:** 모든 필드를 매핑하고 태그/리스트를 설정한 후 Import를 클릭하세요. Hyperclass가 가져오기를 처리하고 연락처가 계정에 추가됩니다.

### **4단계:** 가져온 데이터 검토

- **검토:** 연락처와 폼 제출을 포함하여 Hyperclass로 가져온 모든 데이터가 정확하고 완전한지 확인하세요.

- **스마트 리스트 생성:** 마이그레이션 전용 태그를 기반으로 스마트 리스트와 메일링 리스트를 재생성하세요.

- **Zoho 데이터와 교차 확인:** Hyperclass의 데이터를 원본 Zoho 데이터와 비교하여 불일치가 없는지 확인하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363608/original/tjlYmDu3vLyY2m5W4kv6ZeBs5a2sWRBMxg.jpeg?1725571473)

---

# **사용자 마이그레이션**

Zoho는 한 번에 최대 200,000개의 사용자 레코드를 CSV로 내보낼 수 있습니다. Hyperclass에 사용자를 수동으로 추가하고 사용자 설정을 구성해야 합니다. Zoho User Management는 Zoho 애플리케이션 전반에서 사용자 계정, 역할, 권한을 관리하는 도구를 제공합니다.

역할 기반 액세스 제어, 다단계 인증, 효율적인 관리를 위한 그룹별 사용자 구성 기능을 포함합니다. Zoho User Management는 제3자 신원 제공업체와의 통합도 제공하며, 사용자 활동을 추적하고 규정 준수를 보장하는 상세한 감사 로그를 지원합니다.

### **1단계:** 사용자 내보내기

- **Zoho 데이터 내보내기:** 우측 상단의 Setup(설정)(
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363731/original/NyOmbbuBq_kL4F5BfIxISXbv_Sho9JRCPg.png?1725571792)
)으로 이동한 후 Data Administration 섹션을 클릭하고 Export를 선택하세요. Export Data 페이지에서 Start an Export > Module > Users를 클릭하세요.

- **내보낼 필드 선택:** Custom View에서 필드, 모든 필드, 또는 내보낼 필드 선택 중에서 선택할 수 있습니다. Hyperclass로 마이그레이션하려면 이메일 또는 전화번호 필드가 포함되어야 합니다.

- **데이터 다운로드:** Export를 클릭하세요. 내보내기가 Export History 테이블에 '진행 중' 상태로 추가됩니다. 상태가 '완료'로 변경되면 항목에 마우스를 올리고 Download 링크(
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363730/original/Dd0fG5f9YPUlLEFBMrFn0TsKAcH_b2EMSQ.png?1725571792)
)를 클릭하세요.

### **2단계:** Hyperclass 마이그레이션을 위한 CSV 준비

- **사용자 데이터 확인:** CSV를 스프레드시트로 열어 CSV의 모든 사용자가 고유한 이메일 아이디를 가지고 있는지 확인하세요.

- **팀별 사용자 분류:** 각 팀의 권한을 결정하세요. 스프레드시트에서 팀별로 사용자를 분류하고 에이전시 또는 특정 하위 계정용으로 사용자를 재생성할지 결정하세요. 이를 통해 다음 단계에서 Hyperclass의 사용자 간에 권한을 효율적으로 복사할 수 있습니다.

### **3단계:** Hyperclass에 사용자 수동 추가

- **사용자 추가:** Settings(설정) > Team(팀)으로 이동하세요. + Add Employee(직원 추가)를 클릭하세요.

- **사용자 유형 및 역할 설정:** 에이전시 또는 특정 하위 계정용으로 사용자를 생성할지 선택하세요. 사용자가 관리자인지 일반 사용자인지 선택하세요.

- **권한 및 하위 계정 할당:** 각 Hyperclass 기능에 대한 권한을 구성하고 사용자를 하위 계정에 할당하세요.

- **나머지 사용자 추가 및 권한 복사:** 같은 팀의 사용자에 대해 사용자 권한을 복제하여 시간과 일관성을 절약하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363605/original/Gb_p-8hAWyMfl95_C9qW3dMBUySAck07cQ.png?1725571469)

---

# **캘린더 마이그레이션**

예약은 ZohoBookings에서 내보내야 하며 캘린더는 Hyperclass에서 수동으로 재생성해야 합니다. Zoho Bookings는 사용자 맞춤형 예약 페이지와 캘린더로 예약과 스케줄링을 관리할 수 있는 온라인 스케줄링 도구입니다.

자동 알림, Zoho 앱 및 제3자 서비스와의 연동, 결제 처리 옵션과 같은 기능을 포함합니다. Zoho Bookings는 또한 직원 가용성 관리, 고객 알림, 실시간 예약 업데이트 도구를 제공하여 스케줄링 워크플로우를 효율화합니다.

### **1단계:** 보관용 예약 내보내기

- **Zoho 데이터 내보내기:** 우측 상단의 Setup(설정)(
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363600/original/IuISLAkCtuwPsKShEycliOHIFW_29UGsQQ.png?1725571467)
)으로 이동한 후 Data Administration 섹션을 클릭하고 Export를 선택하세요. Export Data 페이지에서 Start an Export > Module > Appointments를 클릭하세요.

- **내보낼 필드 선택:** Custom View에서 필드, 모든 필드, 또는 내보낼 필드 선택 중에서 선택할 수 있습니다.

- **데이터 다운로드:** Export를 클릭하세요. 내보내기가 Export History 테이블에 '진행 중' 상태로 추가됩니다. 상태가 '완료'로 변경되면 항목에 마우스를 올리고 Download 링크(
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363593/original/ORDTW2-Vs0Dw3xuHjzwbsjC_Z0DCTg8ycQ.png?1725571466)
)를 클릭하세요.

### **2단계:** ZohoBookings의 모든 캘린더를 Hyperclass에서 확인

- **ZohoBookings 로그인:** 우측 상단의 Manage Business(비즈니스 관리)(
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363801/original/YTTYFCZgV2bE-6KHLWdvGubI84tQ1oSUOA.png?1725571993)
) 아이콘을 클릭한 후 Workspaces를 클릭하세요. Workspaces 섹션에서 원하는 워크스페이스를 클릭하세요.

- **각 워크스페이스의 서비스(캘린더) 문서화:** Workspaces 섹션에서 원하는 워크스페이스를 클릭하세요. 각 캘린더의 캘린더 설정, 연동, 사용자를 문서화하세요.

### **3단계:** Hyperclass에서 Zoho 캘린더 재생성

- **Hyperclass 캘린더 생성:** Sub-account Settings(하위 계정 설정) > Calendars(캘린더)로 이동하세요. 캘린더 알림, 캘린더 설정, 사용자, 미팅 장소는 ZohoBookings와 유사하게 생성해야 합니다. 반복 예약의 경우 Hyperclass에서 반복 규칙을 수동으로 설정해야 합니다.

- **캘린더 연동 추가:** Subaccount Settings(하위 계정 설정) > Calendars(캘린더) > Connections(연결)로 이동하여 캘린더 동기화를 추가하세요.

- **미리보기 및 테스트:** 생성된 캘린더를 테스트하여 Zoho의 현재 예약 설정과 일치하는지 확인하세요.

---

# **기회 관리 & 파이프라인 마이그레이션**

Zoho Deals와 파이프라인은 영업 정보를 관리하는 데 도움을 줍니다. 딜은 영업 사이클, 영업량, 영업 상태, 각 단계의 확률, 상태 이유, 경쟁사를 추적하고 향후 영업에 대한 예측을 제공합니다.

### **1단계:** Zoho에서 딜 내보내기

- **Zoho 데이터 내보내기:** 우측 상단의 Setup(설정)(
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363596/original/MGJJEL1o-Lx8j2BVk1J-vZoSag7M_GMRyg.png?1725571467)
)으로 이동한 후 Data Administration 섹션을 클릭하고 Export를 선택하세요. Export Data 페이지에서 Start an Export > Module > Deals를 클릭하세요.

- **내보낼 필드 선택:** Custom View에서 필드, 모든 필드, 또는 내보낼 필드 선택 중에서 선택할 수 있습니다. Hyperclass로 마이그레이션하려면 이메일 또는 전화번호 필드가 포함되어야 합니다.

- **데이터 다운로드:** Export를 클릭하세요. 내보내기가 Export History 테이블에 '진행 중' 상태로 추가됩니다. 상태가 '완료'로 변경되면 항목에 마우스를 올리고 Download 링크(
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363595/original/GiMVirSXgx8fvyv9nlBkZL8ycZZPIxhDAw.png?1725571467)
)를 클릭하세요.

### **2단계:** Hyperclass에서 파이프라인 재생성

- **Hyperclass 로그인:** Opportunities(기회 관리) > Pipelines(파이프라인) > + Add Pipeline(파이프라인 추가)로 이동하세요. Zoho Deals와 파이프라인과 유사한 파이프라인과 단계를 생성하세요.

- **커스텀 기회 필드 추가:** Zoho Deals와 파이프라인과 유사한 필드를 추가하세요.

### **3단계:** 기회 가져오기

- **CSV 데이터 준비:** Hyperclass의 기회 가져오기 요구사항을 충족하는지 확인하세요.

- **Hyperclass에 기회 추가:** Opportunities(기회 관리)로 이동하여 원하는 파이프라인을 선택하세요. 우측 상단의 3점 메뉴를 클릭하여 기회를 가져오세요. Zoho 파일의 필드를 Hyperclass의 해당 필드에 매핑하세요.

### **4단계:** 데이터 확인

- **데이터 검토:** Hyperclass에서 가져온 데이터를 검토하여 정확성을 확인하세요. 잘못된 필드 매핑이나 누락된 데이터 등의 문제를 확인하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363603/original/h649nYAUR6z41I4v2kzdf7mcBdsA32rPGg.png?1725571469)

---

# **폼 마이그레이션**

Zoho Forms는 다양한 필드 유형, 템플릿, 디자인 옵션으로 폼을 생성하고 사용자 맞춤형으로 만들 수 있는 온라인 폼 빌더입니다. 조건부 로직, 다중 페이지 폼, Zoho 앱 및 제3자 서비스와의 연동 기능을 포함합니다. Zoho Forms는 또한 워크플로우를 지원하고 인사이트를 수집하기 위한 데이터 수집, 분석, 협업 도구를 제공합니다.

### **1단계:** Zoho에서 폼 내보내기

- **Zoho Forms 로그인:** Zoho Forms 계정에 접속하세요.

- **폼 응답 내보내기:** 각 폼으로 이동하여 폼 구조를 수동으로 내보내세요(가능한 경우). 백업용으로 폼 응답을 CSV 형식으로 내보내세요.

### **2단계:** Hyperclass에서 폼 재생성

- **Hyperclass에서 폼 생성:** Hyperclass에 로그인하여 Sites(사이트) > Forms(폼)으로 이동하고 새 폼을 생성하세요. Zoho 폼의 것과 일치하는 커스텀 필드와 레이블을 추가하여 폼을 다시 구축하세요.

- **폼 액션 구성:** Zoho의 기능을 복제하기 위해 폼 알림이나 폼의 조건부 로직과 같은 Hyperclass의 자동화된 액션을 설정하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363602/original/ewXkxeOaFTWos-qoe9TwTYpyyYeUrfuFDQ.png?1725571468)

---

# **계약서 및 문서 마이그레이션**

Zoho Contracts는 사용자 맞춤형 템플릿과 조항으로 계약서를 생성, 관리, 저장할 수 있는 디지털 계약 관리 도구입니다. 전자 서명, 계약 생애주기 관리, 규정 준수 추적과 같은 기능을 포함합니다. Zoho Contracts는 또한 계약 워크플로우를 효율화하고 규정 준수를 보장하기 위한 협업, 협상, 분석 도구를 제공합니다.

### **1단계:** Zoho에서 문서 내보내기

- **Zoho 로그인:** 페이지 상단의 Contracts 탭을 선택하세요.

- **계약서 다운로드:** 각 폼으로 이동하여 계약서 구조의 사본을 수동으로 다운로드하세요(가능한 경우).

### **2단계:** Hyperclass에서 계약서 재생성

- **Hyperclass에서 계약서 생성:** Hyperclass에 로그인하여 Payments(결제) > Documents & Contracts(문서 및 계약서)로 이동하고 새 문서를 생성하세요. Zoho Contracts의 것과 일치하는 커스텀 필드, 텍스트, 서명을 추가하여 문서를 다시 구축하세요.

- **문서 액션 구성:** Zoho의 기능을 복제하기 위해 문서 전송, 알림, 문서의 서명 순서와 같은 Hyperclass의 자동화된 액션을 설정하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363606/original/MwG6SZN6gsPlFyNfw798H5eVKHay_T9mog.jpeg?1725571470)

---

# **웹사이트 마이그레이션**

Zoho Sites는 드래그 앤 드롭 요소, 미리 디자인된 템플릿, 디자인 도구를 사용하여 웹사이트를 생성하고 사용자 맞춤형으로 만들 수 있는 웹사이트 빌더입니다. 모바일 최적화, SEO 도구, Zoho 앱 및 제3자 서비스와의 연동 기능을 포함합니다. Zoho Sites는 또한 사용자가 온라인 존재감을 관리하고 최적화하는 데 도움이 되는 전자상거래, 블로그 관리, 분석 옵션을 제공합니다. Hyperclass에서 사이트, 페이지, 온라인 스토어를 다시 구축하려면 텍스트, 이미지, 기타 미디어 파일을 수동으로 복사해야 합니다.

### **1단계:** Zoho Sites에서 웹사이트 콘텐츠 내보내기

- **Zoho Sites 로그인:** Zoho Sites 계정으로 이동하세요.

- **웹사이트 콘텐츠 내보내기:** 사이트 구조에 대한 직접적인 내보내기 옵션이 없으므로 콘텐츠를 수동으로 복사해야 할 수 있습니다. HTML/CSS 파일을 저장하거나 미디어 파일을 수동으로 다운로드하세요. SEO와 페이지 이름을 문서화하세요.

### **2단계:** Hyperclass에서 웹사이트 재구축

- **Hyperclass에서 사이트 재구축:** Hyperclass에 로그인하여 Sites(사이트) > Funnels(퍼널) 또는 Sites(사이트) > Websites(웹사이트)로 이동하세요. Zoho Sites에서 내보낸 콘텐츠와 미디어를 사용하여 각 페이지와 SEO를 수동으로 재생성하세요.

### **3단계:** Zoho에서 도메인 연결 해제

- **Zoho 로그인:** Zoho Directory에 로그인한 후 좌측 메뉴에서 Admin Panel을 클릭하세요. Custom Domain 탭을 클릭하세요. 필요한 커스텀 