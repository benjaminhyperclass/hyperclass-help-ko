---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000007630-workflow-action-create-update-multiple-rows-in-google-sheets
번역일: 2026-04-23
카테고리: workflow
---

# 워크플로우 액션 - Google Sheets에서 여러 행 생성 및 업데이트

Google Sheets에서 여러 행 생성 및 업데이트 워크플로우 액션은 하나의 워크플로우 내에서 새로운 스프레드시트 항목을 생성하거나 기존 항목을 대량으로 업데이트할 수 있게 해줍니다. 이 문서는 이 기능의 역할, 각 액션 유형을 언제 사용해야 하는지, 그리고 Google Sheets에서 올바르게 설정하는 방법을 다룹니다.

**목차**

- [Google Sheets에서 여러 행 생성 및 업데이트란 무엇인가요?](#What-is-Create-&-Update-Multiple-Rows-in-Google-Sheets?)
- [Google Sheets 여러 행 생성 및 업데이트 액션의 주요 장점](#Key-benefits-of-Create-&-Update-Multiple-Rows-in-Google-Sheets-Action)
- [사전 요구사항](#Prerequisites)
- [여러 스프레드시트 행 생성 액션 사용법](#How-to-Use-the-Action-to-Create-Multiple-Spreadsheet-Row(s))
- [여러 스프레드시트 행 업데이트 액션 사용법](#How-to-Use-the-Action-to-Update-Multiple-Spreadsheet-Row(s))
- [자주 묻는 질문](#Frequently-asked-questions)

## Google Sheets에서 여러 행 생성 및 업데이트란 무엇인가요?

**참고:** 이는 **프리미엄 액션**입니다. 이 액션을 사용하면 **실행당 추가 요금**이 **발생**합니다.

이 워크플로우 액션을 통해 하나의 자동화 흐름 중에 스프레드시트에서 여러 행을 생성하거나 업데이트할 수 있습니다. 여러 항목을 기록하거나, 그룹화된 레코드를 동기화하거나, 스프레드시트를 정리된 상태로 유지하면서 여러 값을 한 번에 업데이트해야 할 때 특히 유용합니다.

이 기능은 Google Sheets 프리미엄 워크플로우 액션의 일부로, 단일 행 액션을 넘어서 여러 행을 더 효율적으로 작성하거나 수정할 수 있게 해줍니다.

### Google Sheets 여러 행 생성 및 업데이트 액션의 주요 장점

- **빠른 데이터 기록**: 설정 단계를 반복하는 대신 하나의 액션으로 여러 스프레드시트 행을 생성할 수 있습니다.

- **더 나은 구성**: 워크플로우에서 그룹화되거나 반복된 데이터를 생성할 때 관련 레코드를 함께 유지할 수 있습니다.

- **수동 작업 감소**: 워크플로우 실행 후 수동으로 행을 추가하거나 편집할 필요가 줄어듭니다.

- **정확도 향상**: 스프레드시트 열을 워크플로우 데이터에 직접 매핑하여 복사/붙여넣기 오류를 줄입니다.

- **더 유연한 업데이트**: 레코드를 변경해야 할 때 정의된 스프레드시트 범위에서 여러 값을 업데이트할 수 있습니다.

## 사전 요구사항

필드를 매핑하기 전에 스프레드시트와 워크플로우 설정을 확인하여 매핑 오류, 잘못된 업데이트 또는 데이터 누락을 방지하세요.

- Google 계정이 연결되어 있는지 확인하세요.

- 스프레드시트가 올바른 Google Drive에 저장되어 있는지 확인하세요.

- 워크시트의 첫 번째 행에 명확한 열 헤더를 추가하세요.

- 액션에서 선택하기 전에 워크시트 탭 이름을 검토하세요.

- 계정에 Google Sheets 프리미엄 워크플로우 액션이 활성화되어 있는지 확인하세요(필요한 경우).

- 열이 추가, 이름 변경 또는 재정렬될 때마다 액션에서 헤더를 새로고침하세요.

## 여러 스프레드시트 행 생성 액션 사용법

여러 스프레드시트 행 생성은 워크플로우에서 Google Sheets에 새 항목을 추가해야 할 때 최적입니다(기존 행을 변경하는 대신). 이는 반복되는 레코드를 작성하거나, 그룹화된 데이터를 저장하거나, 하나의 워크플로우 실행 중에 여러 값을 스프레드시트로 보낼 때 유용합니다.

- Automations(자동화) > Workflows(워크플로우)로 이동하세요.

![](https://jumpshare.com/share/R6GO26PNEYR6PrjZgasb+/1.png)

- **새 워크플로우를 생성**하거나 **기존 워크플로우를 편집**하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068897112/original/hd3YE5OWBO6Bn75pAZ0GJUsv_H5auG0hEg.png?1775829007)

- 관련 트리거를 추가하세요(예: Contact Created(연락처 생성), Form Submitted(폼 제출) 등).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068896022/original/crJB_jwD3CqF6XDpCWO2CN-WXxk8jj_BNg.gif?1775828628)

- + 버튼을 클릭하여 액션을 추가하세요.

- Google Sheets를 검색하고 선택하세요.

- 로케이션의 Google 계정을 연결하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068896330/original/_owjn25xuetBlLuhA7nHPSmYSMG-Q4X4WQ.gif?1775828664)

- Action(액션) 드롭다운에서 Create Multiple Spreadsheet Row(s)(여러 스프레드시트 행 생성)을 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068896435/original/II2MySM1eXOyrFhBo6jyoaS1lPVM46OKSQ.jpeg?1775828707)

- 사용할 연결된 Google 계정을 선택하세요.

- 스프레드시트가 저장된 Drive를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068896520/original/vxSG53T4CJvt2M1OHf8HFIUyP-Lsj9ufjQ.jpeg?1775828737)

- Spreadsheet(스프레드시트)와 Worksheet(워크시트)(탭)를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068896580/original/5VGRtM7ZjDAsmiv4mAf4kqUunt0_bE6KKA.jpeg?1775828752)

- (선택사항) Refresh Headers(헤더 새로고침)를 클릭하여 시트에서 최신 헤더 값을 가져와 매핑이 정확하게 유지되도록 하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068896625/original/FOTPc7I1F_Maxc-O5obCRaOKLMHGYFKBzw.jpeg?1775828772)

- Starting Column(시작 열)과 Ending Column(종료 열)을 선택하여 매핑에 사용할 수 있는 열 범위를 정의하세요. 첫 번째 행은 헤더 행으로 취급되며 열은 해당 헤더 값을 사용하여 라벨이 지정됩니다.

- Save Action(액션 저장)을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068896749/original/XKUHEzrj0pz_6vDdIfR2UVab_vVaQWEPwA.gif?1775828809)

### 최적 사용 사례

- 반복되는 워크플로우 출력을 스프레드시트에 기록하기
- 하나의 자동화에서 그룹화된 항목 기록하기
- 추적이나 리포팅을 위한 여러 관련 데이터 포인트 저장하기

## 여러 스프레드시트 행 업데이트 액션 사용법

여러 스프레드시트 행 업데이트는 스프레드시트 행이 이미 존재하고 워크플로우에서 선택된 행 범위 내의 값을 수정해야 할 때 유용합니다. 이는 중복 항목을 생성하지 않고도 정확한 레코드를 유지하는 데 도움이 됩니다.

- Automations(자동화) > Workflows(워크플로우)로 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068897125/original/LS2amw39eb0GpQ3STKTx2uJLnlOR4GOwQA.jpeg?1775829032)

- **새 워크플로우를 생성**하거나 **기존 워크플로우를 편집**하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068897168/original/S9jOHUIHdgrLxjDHTURGzTnL5iRZb0jsDQ.jpeg?1775829062)

- 관련 트리거를 추가하세요(예: Contact Created(연락처 생성), Form Submitted(폼 제출) 등).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068897417/original/0whQIk0cebK76SAogoDsKFb8_IZOETUWPw.gif?1775829281)

- + 버튼을 클릭하여 액션을 추가하세요.

- Google Sheets를 검색하고 선택하세요.

- 로케이션의 Google 계정을 연결하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068897669/original/6eQPOBJRg5UD-kYjVFpPg59259j7SmmnDA.gif?1775829417)

- Action(액션) 드롭다운에서 Update Multiple Spreadsheet Row(s)(여러 스프레드시트 행 업데이트)를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068897794/original/TghRtccOKnMSo5B9e4DjGNhiHVBohQWM3g.jpeg?1775829496)

- 사용할 연결된 Google 계정을 선택하세요.

- 스프레드시트가 저장된 Drive를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068898122/original/g4bTe-hCV-Rc9MtEMS3o6cb4A63pa1RJcg.jpeg?1775829599)

- Spreadsheet(스프레드시트)와 Worksheet(워크시트)(탭)를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068898203/original/9eDiZIKq_sq4t9Qu5SQxMs0OoYNPw-aCyg.jpeg?1775829629)

- 업데이트를 시작할 행 번호를 입력하세요.

- Starting Column(시작 열)과 Ending Column(종료 열)을 선택하여 매핑에 사용할 수 있는 열 범위를 정의하세요(헤더는 첫 번째 행에서 가져옵니다).

- (선택사항) 최근에 열 이름이나 순서를 변경한 경우 Refresh Headers(헤더 새로고침)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068898236/original/GKDavN-zl51Rjp_B4NvJuBLf8n7PeD9szw.jpeg?1775829647)

- Save Action(액션 저장)을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068898279/original/qbEowtRa4Lwtq2BPgKFCg6mycHYPFGqHEg.jpeg?1775829667)

### 언제 이 옵션을 사용할까요?

- 스프레드시트 행이 이미 존재할 때
- 기존 레코드의 값을 교체하거나 새로고침해야 할 때
- 같은 데이터 세트에 대한 중복 행 추가를 피하고 싶을 때

## 자주 묻는 질문

**Q: 여러 스프레드시트 행 생성과 여러 스프레드시트 행 업데이트의 차이점이 무엇인가요?**
여러 스프레드시트 행 생성은 새로운 스프레드시트 항목을 추가합니다. 여러 스프레드시트 행 업데이트는 이미 존재하는 행의 값을 변경합니다.

**Q: Google Sheet에 헤더가 필요한가요?**
네. 명확한 헤더는 시스템이 매핑에 사용할 수 있는 열을 인식하고 설정 오류를 줄이는 데 도움이 됩니다.

**Q: 헤더를 새로고침해야 하는 이유가 무엇인가요?**
헤더를 새로고침하면 스프레드시트 변경 후 워크플로우 액션 내에서 사용할 수 있는 열 이름이 업데이트됩니다.

**Q: 잘못된 워크시트 탭을 선택하면 어떻게 되나요?**
워크플로우가 잘못된 위치에 데이터를 작성하거나 예상된 열을 올바르게 매핑하지 못할 수 있습니다.

**Q: 어떤 열을 사용할지 제한할 수 있나요?**
네. Starting Column(시작 열)과 Ending Column(종료 열) 필드로 매핑에 사용할 수 있는 열 범위를 정의할 수 있습니다.

**Q: 표준 행 액션 대신 여러 행 액션을 언제 사용해야 하나요?**
워크플로우에서 같은 프로세스의 일부로 여러 스프레드시트 행을 생성하거나 업데이트해야 할 때 여러 행 액션을 사용하세요.

**Q: 중복을 생성하지 않고 기존 행을 업데이트할 수 있나요?**
네. 대상 행이 이미 존재하고 값만 변경하면 되는 경우 여러 스프레드시트 행 업데이트를 사용하세요.

**Q: 새 열이 워크플로우 액션에 표시되지 않는 이유가 무엇인가요?**
스프레드시트 열을 추가하거나 이름을 변경한 후 헤더 새로고침을 클릭하여 액션이 최신 시트 구조를 가져오도록 하세요.

---
*원문 최종 수정: Fri, 10 Apr, 2026 at  9:08 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*