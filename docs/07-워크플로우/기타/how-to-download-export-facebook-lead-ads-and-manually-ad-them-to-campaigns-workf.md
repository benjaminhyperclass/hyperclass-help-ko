---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# Facebook 리드 광고 다운로드/내보내기 후 캠페인 및 워크플로우에 수동 추가하는 방법

Facebook Business Suite에서는 고객이 인스턴트 폼(Instant Form)을 통해 제출한 정보가 포함된 파일을 내보낼 수 있습니다. 이 데이터는 [광고 관리자](https://www.facebook.com/business/help/794345304231812)에서 다운로드하거나, [API](https://developers.facebook.com/docs/marketing-api/guides/lead-ads/leads/v2.5)를 통해 요청하거나, [연동된 CRM 시스템](https://www.facebook.com/business/help/908902042493104)을 통해 접근할 수도 있습니다. Facebook과 연동된 CRM 시스템이 없다면 Business Suite에서 직접 리드 데이터를 다운로드하는 것을 권장합니다.

### Business Suite에서 리드 데이터 다운로드하기:

- [Business Suite](https://business.facebook.com/)로 이동합니다.
- 메뉴에서 More Tools을 클릭합니다.
- Instant Forms을 클릭합니다.
- 내보내려는 리드가 있는 폼 옆의 Download를 클릭합니다.
- 리드 다운로드 방식을 선택합니다:
  - Download New Leads: 마지막 다운로드 이후 새로 받은 리드만 내보내려는 경우 클릭
  - Download by Date Range: 특정 기간 동안 받은 모든 리드를 다운로드하려는 경우 클릭. 이 옵션을 선택한 후 원하는 날짜 범위를 선택하고 Download를 클릭합니다.

- 폼 정보가 표시되는 창이 나타납니다. 원하는 파일 형식으로 리드 데이터를 다운로드하려면 CSV를 클릭합니다.

참고: 리드가 폼을 제출한 시점으로부터 90일 이내에 정보를 다운로드해야 합니다. 리드는 [90일 후 만료](https://www.facebook.com/business/help/1526849577619206)됩니다. 정기적으로 리드 데이터를 내보내는 것을 권장합니다.

파일을 다운로드할 때 Ad ID나 Ad Set ID 필드가 보이지 않는다면 다음과 같은 이유일 수 있습니다:

- 리드가 자연 도달(organic reach)을 통해 생성된 경우
- 리드가 광고 미리보기를 통해 제출된 경우  
- 리드 광고 캠페인을 만든 광고 계정에 대한 [광고주 권한](https://www.facebook.com/business/help/195296697183682)이 없는 경우

### 파일 다운로드 문제 해결:

리드 파일을 다운로드할 수 없는 경우:

- Business Manager 관리자에게 [Leads Access Manager](https://www.facebook.com/business/help/1440176552713521)에서 접근 권한을 커스터마이징했는지 확인하세요.
- 권한을 커스터마이징하지 않은 경우, Facebook 페이지 관리자에게 연락하여 올바른 접근 권한을 요청하세요. 커스터마이징 전에는 Facebook 페이지 관리자만 리드를 다운로드할 수 있습니다.
- 권한을 커스터마이징한 경우, 올바른 접근 권한을 부여받았는지 확인하세요. 커스터마이징 후에는 [접근 권한이 할당된 사람](https://www.facebook.com/business/help/540596413257598)만 리드를 다운로드할 수 있습니다.

### Hyperclass로 리드 가져오기:

(새 UI)

- 연락처(Contacts)로 이동하여 연락처 가져오기(Import Contacts) 일괄 작업(Bulk Action)을 클릭합니다.

![연락처 가져오기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48158869800/original/TzE0nYh4DuTRG03T3IRZonzb0P_aGZ0FZg.png?1636809222)

- CSV 파일을 선택하고 Next를 클릭합니다.
- Facebook 리드 폼의 필드를 Hyperclass 필드에 매핑하고 Next 버튼을 클릭합니다.
- Details 탭에서 Advanced 드롭다운을 클릭하고, 이 리드들에 태그를 추가하고(선택사항), "Add To Workflow/Campaign"을 토글 활성화한 후 CSV의 리드를 추가할 워크플로우(Workflow) 또는 캠페인(Campaign)을 선택합니다.

(기존 UI)

- 연락처(Contacts)로 이동하여 연락처 가져오기(Import Contacts) 일괄 작업(Bulk Action)을 클릭합니다.

![연락처 가져오기 화면 - 기존 UI](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48158873646/original/wbV8vSrpvyXz5swtfJIgbpNHVbyw2N2Fjg.png?1636811015)

- CSV 파일을 선택하고 Next를 클릭합니다.
- Facebook 리드 폼의 필드를 Hyperclass 필드에 매핑하고 Next 버튼을 클릭합니다.
- 샘플 데이터를 검토하고 Continue를 클릭합니다.
- 중복 처리 전략(Duplication Strategy)을 선택합니다.
- CSV의 모든 사람에게 적용할 태그를 선택하거나 생성합니다.
- 필터에서 태그(tag)를 입력한 후, 이전 단계에서 생성한 태그를 선택합니다.
- 모든 연락처를 선택합니다.
- "Add To Campaign/Workflow" 일괄 작업(Bulk Action)을 클릭합니다.
- Proceed를 클릭한 후 드롭다운에서 캠페인/워크플로우를 선택하고, 작업 이름을 입력한 다음 "Add to Campaign/Workflow" 버튼을 클릭합니다.

---
*원문 최종 수정: Sat, 13 Nov, 2021 at 8:11 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*