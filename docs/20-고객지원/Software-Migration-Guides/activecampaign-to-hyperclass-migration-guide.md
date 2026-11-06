---

번역일: 2026-04-08
카테고리: 20-고객지원 > Software Migration Guides
---

# ActiveCampaign에서 Hyperclass로 마이그레이션 가이드

이 가이드는 ActiveCampaign의 핵심 구성 요소를 Hyperclass로 마이그레이션하는 포괄적인 안내서입니다. 원활한 전환, 데이터 손실 최소화, 마케팅과 영업 프로세스의 무결성 유지를 목표로 합니다.

**중요:** ActiveCampaign에서 Hyperclass로 전환할 때 다음 구성 요소를 모두 마이그레이션해야 합니다:
1. 연락처(Contacts)
2. 딜(기회 관리)
3. 이메일 템플릿
4. 랜딩 페이지
5. 폼(양식)
6. 자동화(워크플로우)

---

## 목차
- [연락처 마이그레이션](#연락처-마이그레이션)
- [딜(기회 관리) 마이그레이션](#딜기회-관리-마이그레이션)
- [이메일 템플릿 마이그레이션](#이메일-템플릿-마이그레이션)
- [랜딩 페이지 재생성](#랜딩-페이지-재생성)
- [폼 마이그레이션](#폼-마이그레이션)
- [자동화 재생성](#자동화-재생성)
- [추가 마이그레이션 고려사항](#추가-마이그레이션-고려사항)
- [자주 묻는 질문](#자주-묻는-질문)

# 연락처 마이그레이션

연락처는 마케팅과 CRM 활동의 핵심입니다. 연락처 마이그레이션은 ActiveCampaign에서 데이터를 내보내고 Hyperclass로 가져오는 과정입니다. 이 과정에서는 데이터 형식 호환성 확인, 필드 매핑, 잠재적 오류 처리가 포함됩니다.

### 1단계: ActiveCampaign에서 연락처 내보내기

- **연락처 접근**: ActiveCampaign에 로그인하여 좌측 메뉴를 통해 연락처(Contacts) 섹션으로 이동합니다.

- **내보내기 시작**: 연락처 페이지 우상단에 있는 Export 버튼을 클릭합니다.

- **필드 선택**: 내보내기 옵션에서 CSV 파일에 포함할 필드를 선택합니다. 일반적으로 이메일, 이름, 성, 전화번호, 태그 및 관련 커스텀 필드를 포함해야 합니다.

- **내보내기 파일 명명**: 내보내기 파일의 이름을 입력합니다. **중요**: 특수 문자(!, #, $ 등)는 Hyperclass 가져오기 시 문제를 일으킬 수 있으므로 사용하지 마세요.

- **내보내기 다운로드**: Export를 클릭합니다. ActiveCampaign이 CSV 파일을 생성하면 준비가 완료되었을 때 다운로드할 수 있습니다. 이 파일에는 선택한 모든 연락처 정보가 포함됩니다.

### 2단계: Hyperclass 가져오기용 CSV 준비

- **날짜 형식 확인**: CSV의 모든 날짜 필드가 YYYY-MM-DD 형식인지 확인합니다. 이는 Hyperclass와의 호환성을 위해 필수입니다.

- **특수 문자 인코딩**: CSV 파일이 UTF-8 문자 인코딩을 사용하여 특수 문자와 악센트 문자를 적절히 처리하는지 확인합니다.

- **데이터 정리**: 파일에서 줄바꿈, 이모지, 불필요한 특수 문자를 제거합니다. 이 단계는 가져오기 오류를 방지하는 데 도움이 됩니다.

- **이메일 주소 확인**: CSV의 각 연락처가 유효한 이메일 주소를 가지고 있는지 확인합니다. 이는 Hyperclass로 가져오기 위한 필수 필드입니다.

### 3단계: Hyperclass로 연락처 가져오기

- **Hyperclass 로그인**: 좌측 메뉴를 사용하여 연락처(Contacts) 섹션으로 이동합니다.

- **가져오기 프로세스 시작**: Import Contacts 버튼을 클릭합니다.

- **CSV 파일 업로드**: 준비된 CSV 파일을 선택하여 업로드합니다.

- **필드 매핑**: Hyperclass가 CSV 파일의 필드를 Hyperclass의 해당 필드에 매핑하도록 안내합니다. 예를 들어, CSV의 "First Name"을 Hyperclass의 "First Name"에 매핑합니다.

- **태그와 목록 할당**: 가져오기 과정에서 연락처를 특정 목록에 할당하고 태그를 적용할 수 있습니다. "ActiveCampaign에서 가져옴"과 같은 연락처 출처를 나타내는 태그 적용을 고려하세요.

- **가져오기 완료**: 모든 필드를 매핑하고 태그/목록을 설정한 후 Import를 클릭합니다. Hyperclass가 가져오기를 처리하고 연락처가 계정에 추가됩니다.

### 4단계: 가져온 데이터 검토

- 가져오기가 완료된 후 Hyperclass의 데이터를 검토하여 모든 연락처와 관련 필드가 올바르게 가져와졌는지 확인합니다.

**필드 매핑 팁**: 모든 필수 필드가 올바르게 매핑되었는지 확인하세요. CSV의 필드가 Hyperclass에 해당하는 필드가 없는 경우, 진행하기 전에 Hyperclass에서 커스텀 필드를 생성해야 할 수도 있습니다.

![연락처 가져오기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032270484/original/DVtRpYDoqC6dbSLdxHQZBPPnE3EKGIt8Fw.png?1725481961)

# 딜(기회 관리) 마이그레이션

딜(Hyperclass에서는 기회 관리(Opportunities)로 지칭)은 잠재적인 판매나 거래를 나타냅니다. 딜 마이그레이션은 ActiveCampaign에서 딜 데이터를 내보내고 Hyperclass의 적절한 파이프라인으로 가져오는 과정입니다.

### 1단계: ActiveCampaign에서 딜 내보내기

- **딜 접근**: ActiveCampaign에서 좌측 메뉴를 통해 Deals 섹션으로 이동합니다.

- **딜 필터링**: Deals 페이지 상단의 필터를 사용하여 내보내고자 하는 딜을 선별합니다. 상태(Open, Won, Lost), 파이프라인 등 다른 기준으로 필터링할 수 있습니다.

- **내보내기 시작**: 일반적으로 우상단 설정 아이콘 메뉴에 있는 Export 버튼을 클릭합니다.

- **CSV 다운로드**: 시스템이 딜 데이터가 포함된 CSV 파일을 생성합니다. Hyperclass에서 사용하기 위해 이 파일을 다운로드합니다.

### 2단계: Hyperclass 가져오기용 CSV 준비

- **필수 필드 검토**: 각 딜이 Hyperclass 시스템에 해당하는 연락처를 가지고 있는지 확인합니다. CSV에는 딜 제목, 가치, 파이프라인, 단계, 연락처 이름, 딜 소유자 등의 필드가 포함되어야 합니다.

- **데이터 일관성**: 특히 파이프라인과 단계와 같은 필드가 Hyperclass의 구조와 일치하는지 데이터의 일관성을 확인합니다.

### 3단계: Hyperclass로 딜 가져오기

- **기회 관리로 이동**: Hyperclass에서 좌측 메뉴를 통해 기회 관리(Opportunities)로 이동합니다.

- **가져오기 프로세스 시작**: Import Opportunities 버튼을 클릭합니다.

- **CSV 파일 업로드**: CSV 파일을 선택하여 업로드합니다.

- **필드 매핑**: CSV 필드를 Hyperclass의 해당 필드에 매핑합니다. 예를 들어, "Deal Title"을 "Opportunity Title"에 매핑합니다.

- **파이프라인과 단계**: 각 딜이 Hyperclass 내의 올바른 파이프라인과 단계에 할당되는지 확인합니다.

- **가져오기 완료**: 필드를 매핑한 후 Import를 클릭합니다. 딜이 Hyperclass의 지정된 파이프라인에 추가됩니다.

### 4단계: 가져오기 후 확인

- 가져오기 후 Hyperclass의 기회 관리를 검토하여 모든 딜이 단계와 할당된 소유자를 포함하여 정확하게 가져와졌는지 확인합니다.

![기회 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032267760/original/pyXkHP5zMsnB-zn9X7z3rPjK-VWAmOeECw.png?1725475822)

# 이메일 템플릿 마이그레이션

이메일 템플릿은 캠페인과 자동화에 사용되는 미리 디자인된 이메일입니다. 공유 링크를 사용하여 ActiveCampaign에서 Hyperclass로 전송할 수 있습니다.

### 1단계: ActiveCampaign에서 이메일 템플릿 공유

- **이메일 템플릿 접근**: ActiveCampaign에서 Campaigns > Campaign Templates로 이동합니다.

- **템플릿 찾기**: 마이그레이션하고자 하는 템플릿을 찾습니다.

- **공유 링크 생성**: 템플릿 위에 마우스를 올리고 설정 아이콘을 클릭한 후 Share를 선택합니다. 공유 링크가 있는 창이 나타납니다. 이 링크를 복사합니다.

### 2단계: Hyperclass로 이메일 템플릿 가져오기

- **이메일 템플릿으로 이동**: Hyperclass에서 Marketing > Emails > Email Templates로 이동합니다.

- **가져오기 프로세스 시작**: Create New Template를 클릭하고 Import Template를 선택합니다.

- **공유 링크 붙여넣기**: 제공된 필드에 ActiveCampaign 템플릿 공유 링크를 붙여넣습니다.

- **템플릿 명명**: Hyperclass에서 템플릿에 이름을 지정하고 Create Template를 클릭합니다.

### 3단계: 가져오기 후 확인

- 가져오기 후 Hyperclass에서 템플릿을 검토합니다. 브랜딩과 캠페인 요구사항에 맞게 필요한 커스터마이징을 진행하세요.

![이메일 템플릿 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032267761/original/1cN9kpUGW1sQ5YAJLjl3wvl6z8w3KIBpPg.png?1725475823)

# 랜딩 페이지 재생성

랜딩 페이지는 리드 수집이나 특정 오퍼 프로모션을 위해 설계된 독립적인 웹 페이지입니다. Hyperclass는 랜딩 페이지의 직접 가져오기를 지원하지 않으므로 Hyperclass의 페이지 빌더를 사용하여 수동으로 재생성해야 합니다.

### 1단계: 랜딩 페이지 세부사항 문서화

- **콘텐츠 내보내기**: ActiveCampaign의 랜딩 페이지를 검토하고 구조, 콘텐츠, 추적 코드(예: Google Analytics, Facebook Pixel) 등을 기록합니다.

- **스크린샷 촬영**: 재구축 과정에서 참고하기 위해 랜딩 페이지 레이아웃의 스크린샷을 촬영합니다.

### 2단계: Hyperclass에서 랜딩 페이지 재구축

- **페이지 빌더로 이동**: Hyperclass에서 Sites > Funnels/Websites로 이동합니다.

- **새 페이지 생성**: Create New Funnel/Website를 선택하고 템플릿을 선택하거나 빈 페이지로 시작합니다.

- **구조 재생성**: Hyperclass의 드래그 앤 드롭 빌더를 사용하여 ActiveCampaign 랜딩 페이지의 구조를 재생성합니다. 필요에 따라 콘텐츠, 이미지, 폼을 추가합니다.

- **추적 코드 추가**: Settings > Tracking Codes로 이동하여 필요한 추적 코드(예: Google Analytics ID, Facebook Pixel)를 추가합니다.

- **커스터마이징 및 발행**: 페이지의 테마, 레이아웃, SEO 설정을 커스터마이징합니다. 만족스러우면 Publish를 클릭합니다.

### 3단계: 발행 후 확인

- 발행된 페이지의 모든 링크, 폼, 추적 코드가 올바르게 작동하는지 확인합니다.

![페이지 빌더 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032267762/original/DqfHn9eSfHiVdxBL_j4S7crwIZF5GxhPIw.png?1725475823)

# 폼 마이그레이션

폼은 리드로부터 정보를 수집하고 자동화를 트리거하는 데 사용됩니다. ActiveCampaign의 폼은 Hyperclass의 폼 빌더를 사용하여 재생성해야 합니다.

### 1단계: 폼 세부사항 문서화

- **폼 필드 검토**: ActiveCampaign에서 폼 필드, 액션(예: 목록에 추가, 태그 적용), 연동 설정을 기록합니다.

- **폼 설정 캡처**: 폼 표시 여부, 커스텀 CSS, 조건부 로직 등의 특정 설정을 문서화합니다.

### 2단계: Hyperclass에서 폼 재생성

- **폼 빌더로 이동**: Hyperclass에서 Sites > Forms로 이동합니다.

- **새 폼 생성**: Create New Form을 클릭하고 ActiveCampaign 폼의 필드와 일치하는 필드를 추가합니다.

- **액션 구성**: 연락처를 목록에 추가하거나 태그를 적용하거나 Hyperclass에서 워크플로우를 트리거하는 등의 폼 액션을 설정합니다.

- **폼 삽입**: 폼이 구축되면 임베드 코드를 복사하여 Hyperclass 랜딩 페이지나 웹사이트에 삽입할 수 있습니다.

### 3단계: 구현 후 확인

- **폼 제출 테스트**: 폼을 통해 테스트 항목을 제출하여 모든 액션(예: 목록에 추가, 태그 적용)이 올바르게 작동하는지 확인합니다.

- **데이터 수집 확인**: 커스텀 필드나 태그를 포함하여 폼 데이터가 Hyperclass에서 정확하게 수집되는지 확인합니다.

- **삽입된 폼 검토**: 폼이 랜딩 페이지나 웹사이트에 삽입된 경우 다양한 기기(데스크톱, 태블릿, 모바일)에서 올바르게 표시되는지 확인합니다.

![폼 빌더 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032267759/original/Phw8Z8jdWZA7GCj5eoyWF0MOU0kq8wzG7Q.png?1725475822)

# 자동화 재생성

ActiveCampaign의 자동화는 특정 이벤트(예: 폼 제출, 태그 적용)에 의해 트리거되는 일련의 액션입니다. 자동화 마이그레이션은 Hyperclass의 워크플로우(Workflows) 기능을 사용하여 이러한 워크플로우를 수동으로 재생성하는 과정입니다.

### 1단계: ActiveCampaign 자동화 문서화

- **자동화 세부사항 내보내기**: 가능한 경우 ActiveCampaign에서 각 자동화의 시각적 표현이나 세부 분석을 내보냅니다. 사용할 수 없는 경우 각 자동화의 트리거, 액션, 조건, 최종 목표를 수동으로 문서화합니다.

- **핵심 요소 식별**: 각 자동화에 대해 진입 트리거(예: 목록에 연락처 추가), 액션(예: 이메일 발송, 태그 추가), 조건부 로직(예: if/else 분기) 등의 핵심 구성 요소를 식별합니다.

### 2단계: Hyperclass에서 자동화 재생성

- **Hyperclass 워크플로우 접근**: Hyperclass에서 Automation > Workflows로 이동합니다.

- **새 워크플로우 생성**: Create New Workflow를 클릭하고 ActiveCampaign의 트리거와 일치하는 진입 트리거(예: 폼 제출, 태그 추가)를 설정합니다.

- **액션과 조건 추가**: ActiveCampaign 자동화의 액션 순서를 재생성합니다. 여기에는 이메일 발송, 태그 추가/제거, 연락처 레코드 업데이트, 파이프라인을 통한 딜 이동 등이 포함될 수 있습니다.

- **조건부 로직 사용**: Hyperclass는 ActiveCampaign의 if/else 분기와 유사한 조건부 로직을 추가할 수 있습니다. 연락처의 행동이나 속성에 따라 다른 경로로 안내하도록 이러한 조건이 올바르게 설정되었는지 확인합니다.

- **타이밍 구성**: 자동화에 시간 지연(예: 1일 대기)이 포함되는 경우 Hyperclass에서 정확하게 설정되었는지 확인합니다.

### 3단계: 테스트 및 검증

- **테스트 연락처 실행**: 테스트 연락처를 생성하거나 기존 연락처의 일부를 사용하여 새로 생성된 워크플로우를 실행합니다. 모든 액션이 올바르게 실행되는지 프로세스를 모니터링합니다.

- **워크플로우 리포트 확인**: 테스트 실행 후 Hyperclass의 워크플로우 리포트를 검토하여 자동화가 예상대로 수행되는지 확인합니다.

- **필요에 따라 조정**: 워크플로우의 일부가 의도한 대로 작동하지 않는 경우 자동화가 원활하게 기능할 때까지 조정하고 재테스트합니다.

# 추가 마이그레이션 고려사항

### 교육 및 문서화

- **내부 교육**: 특히 ActiveCampaign과의 차이점에 중점을 두고 팀이 Hyperclass를 효과적으로 사용하는 방법에 대한 교육을 제공합니다.
- **내부 SOP 생성**: Hyperclass로의 마이그레이션 결과로 변경된 내부 프로세스를 문서화합니다.

### 데이터 무결성

- **데이터 재확인**: 모든 구성 요소가 마이그레이션된 후 모든 데이터(연락처, 딜, 이메일 템플릿 등)가 정확하고 완전하게 전송되었는지 재확인합니다.

- **데이터 백업**: 삭제하거나 보관하기 전에 ActiveCampaign의 모든 원본 데이터의 백업을 확보합니다.

### 고객 커뮤니케이션

- **연락처에 알림**: 마이그레이션이 고객 대면 프로세스(예: 이메일 템플릿이나 폼 제출 변경)에 영향을 미치는 경우 혼란을 피하기 위해 연락처에 전환에 대해 알리는 것을 고려하세요.

### 지속적인 모니터링

- **성능 모니터링**: Hyperclass에서 워크플로우, 이메일 캠페인 및 기타 자동화된 프로세스의 성능을 정기적으로 모니터링하여 의도한 대로 작동하는지 확인합니다.

- **최적화**: Hyperclass의 분석 및 보고 도구를 사용하여 마이그레이션 후 최적화할 영역을 식별합니다.

---

## 자주 묻는 질문

**ActiveCampaign에서 연락처를 어떻게 내보내나요?**

ActiveCampaign에서 연락처를 내보내려면 ActiveCampaign 계정에 로그인하고, 연락처(Contacts) 섹션으로 이동한 후, Export 옵션을 클릭하고, 이메일, 이름, 성 등 내보내기에 포함할 필드를 선택하고, 특수 문자를 피해 파일 이름을 지정한 후, 결과 CSV 파일을 다운로드합니다.

**Hyperclass로 가져오기 위해 연락처 데이터를 어떻게 준비해야 하나요?**

날짜가 YYYY-MM-DD 형식인지 확인하고, CSV에 UTF-8 인코딩을 사용하며, 줄바꿈과 이모지를 제거하고, 각 연락처가 유효한 이메일 주소를 가지고 있는지 확인합니다.

**Hyperclass로 연락처를 가져오고 필드를 올바르게 매핑하는 방법은?**

Hyperclass에서 연락처(Contacts)로 이동하여 Import Contacts를 클릭하고, CSV를 업로드한 후, 필드를 매핑하고(예: "Email"을 "Email"로), 태그나 목록을 할당한 후 Import를 클릭합니다.

**ActiveCampaign에서 Hyperclass로 딜(기회 관리)을 어떻게 마이그레이션하나요?**

ActiveCampaign에서 Deals > Export를 통해 딜을 내보내고, Deal Title, Value, Stage 등의 필드가 있는 CSV를 준비합니다. Hyperclass에서는 기회 관리(Opportunities)로 이동하여 Import Opportunities를 클릭하고, CSV를 업로드하여 필드를 매핑한 후 올바른 파이프라인으로 가져옵니다.

**ActiveCampaign에서 Hyperclass로 이메일 템플릿을 직접 전송하는 방법이 있나요?**

네, ActiveCampaign에서 Campaigns > Campaign Templates로 이동하여 템플릿을 선택하고, 설정 아이콘을 클릭하여 Share를 선택한 후 링크를 복사합니다. Hyperclass에서는 Marketing > Emails > Email Templates로 이동하여 Import Template를 선택하고 링크를 붙여넣은 후 생성합니다.

**직접 가져오기가 불가능하므로 Hyperclass에서 랜딩 페이지를 어떻게 재생성하나요?**

ActiveCampaign 랜딩 페이지의 레이아웃과 추적 코드를 문서화합니다. Hyperclass에서 Sites > Funnels/Websites로 이동하여 새 페이지를 생성하고, 드래그 앤 드롭 빌더를 사용하여 재구축한 후, Settings > Tracking Codes에서 추적 코드를 추가하고 발행합니다.

**Hyperclass로 폼을 마이그레이션하기 위해 어떤 단계를 거쳐야 하나요?**

ActiveCampaign 폼의 필