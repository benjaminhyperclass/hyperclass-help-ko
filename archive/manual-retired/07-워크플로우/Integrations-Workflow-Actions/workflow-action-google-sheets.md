---

번역일: 2026-04-08
카테고리: 07-워크플로우 > Integrations Workflow Actions
---

# 워크플로우 액션 - Google Sheets

**목차**

- [개요](#개요)
- [액션명](#액션명)
- [액션 설명](#액션-설명)
- [액션 상세](#액션-상세)
- [예시](#예시)


## 개요

**Google Sheets** 액션을 사용하면 워크플로우에서 데이터를 Google Sheets 스프레드시트로 직접 전송할 수 있습니다. 이것은 프리미엄 액션으로, 실행할 때마다 추가 요금이 부과됩니다. 이 액션은 기록 보관, 데이터 추적, Google Sheet 내에서 구조화된 형태로 정보를 정리하는 데 이상적입니다.


## 액션명

**Google Sheets**


## 액션 설명

**Create Spreadsheet Row** 액션은 지정된 Google Sheets 스프레드시트에 새로운 데이터 행을 추가하는 데 사용됩니다. 이 액션은 티켓 상세 정보, 사용자 정보 또는 기록이 필요한 기타 관련 데이터를 자동으로 로그할 수 있습니다.


## 액션 상세


![Google Sheets 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032225222/original/mO8g2rTWNdoF7JOCphoy3e8eXA9K-ktP7w.png?1725445694)


| 필드 | 설명 | 필수 |
|------|------|------|
| Action Name | 액션의 이름으로, 수행할 작업을 식별합니다. 이 액션의 경우 "Create Spreadsheet Row"로 설정됩니다. | 예 |
| Action | Google Sheets에서 수행할 특정 작업을 정의합니다. 행 생성, 셀 업데이트 등의 옵션이 있습니다. 이 액션의 경우 "Create Spreadsheet Row"입니다. | 예 |
| Choose an Account | 원하는 Google Sheet에 액세스할 수 있는 Hyperclass 플랫폼에 연결된 Google 계정입니다. | 예 |
| Drive | 스프레드시트가 위치한 Google Drive를 지정합니다. 개인 문서의 경우 일반적으로 "My Drive"로 설정됩니다. | 예 |
| Spreadsheet | 데이터를 보낼 특정 Google Sheets 문서를 선택합니다. 이 필드는 선택한 계정에서 액세스 가능한 모든 스프레드시트를 나열합니다. | 예 |
| Worksheet | 새 행이 추가될 선택한 스프레드시트 내의 특정 워크시트입니다. 워크시트는 Google Sheets 문서 내의 개별 탭입니다. | 예 |
| Refresh Headers | 선택한 워크시트의 현재 헤더를 기반으로 사용 가능한 컬럼을 업데이트하는 버튼입니다. 데이터가 컬럼에 올바르게 매핑되도록 합니다. | 아니오 |
| Starting Column | 데이터가 삽입될 시작 컬럼을 지정합니다. Google Sheet의 헤더를 기반으로 올바른 컬럼에 데이터를 매핑합니다. | 예 |
| Ending Column | 데이터가 삽입될 끝 컬럼을 지정합니다. 데이터로 채울 컬럼 범위를 정의할 수 있습니다. | 예 |
| Dynamic Fields | 스프레드시트의 컬럼을 기반으로 나타나는 필드입니다. 각 컬럼은 여기에 표시되며, 각각에 삽입될 데이터를 지정할 수 있습니다. 예시 필드로는 Ticket ID (A)와 Subject (B)가 있습니다. | 예 |


### **액션 구성 방법**

- **워크플로우에 액션 추가**: **Google Sheets** 액션을 원하는 워크플로우로 드래그 앤 드롭합니다.
- **액션 유형 선택**: Action 드롭다운에서 "Create Spreadsheet Row"를 선택합니다.
- **Google 계정 선택**: Google Sheets에 액세스할 수 있는 연결된 Google 계정을 선택합니다.
- **드라이브 선택**: 공유 드라이브를 사용하지 않는 한 일반적으로 "My Drive"를 선택합니다.
- **스프레드시트 및 워크시트 선택**: 데이터를 추가하려는 특정 Google Sheets 문서와 해당 워크시트 탭을 선택합니다.
- **데이터 필드 매핑**: Starting Column과 Ending Column을 사용하여 범위를 정의합니다. 값을 입력하거나 커스텀 값을 사용하여 워크플로우 데이터를 Google Sheet의 해당 컬럼에 매핑합니다.
- **헤더 새로고침**: Google Sheet의 헤더를 최근에 변경한 경우 이 버튼을 클릭하여 데이터가 올바르게 정렬되도록 합니다.


## 예시

- **트리거**: 새 지원 티켓 생성
  **조건**: 연락처에서 새 지원 티켓이 생성됨.
- **액션**: Google Sheets - Create Spreadsheet Row
  **Drive**: My Drive
  **Spreadsheet**: "Support_Analysis_2023"
  **Worksheet**: "September"
  **Starting Column**: Ticket ID (A)
  **Ending Column**: Subject (B)
  **Ticket ID**: 커스텀 값을 사용하여 티켓 ID 삽입.
  **Subject**: 커스텀 값을 사용하여 티켓 제목 삽입.


워크플로우 내에 **Google Sheets** 액션을 통합하면 데이터 입력 작업을 자동화하여 중요한 정보가 정확하고 일관되게 로그되도록 하고, 수동 오류를 줄이며 시간을 절약할 수 있습니다.

---
*원문 최종 수정: Wed, 4 Sep, 2024 at 5:30 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*