---

번역일: 2026-04-08
카테고리: 27-앱-마켓 > View, Install & Uninstallation Apps
---

# 마켓플레이스 앱 권한 관리: 화이트라벨 에이전시 제어

이 문서는 화이트라벨 에이전시가 하위 계정의 마켓플레이스 앱 가시성 및 설치를 관리하는 방법에 대한 단계별 안내를 제공합니다. 이 기능을 통해 에이전시는 하위 계정 고객이 사용할 수 있는 앱을 세밀하게 제어할 수 있습니다.

목차

- [앱 권한 관리 위치 찾기](#앱-권한-관리-위치-찾기)
- [앱 승인하기](#앱-승인하기)
- [앱 승인 취소하기](#앱-승인-취소하기)
- [마켓플레이스 앱 일괄 승인/승인 취소](#마켓플레이스-앱-일괄-승인승인-취소)

## 앱 권한 관리 위치 찾기:

- 좌측 메뉴에서 'App Marketplace(앱 마켓플레이스)'를 클릭합니다.
- 참고: 에이전시 계정에서 '앱 마켓플레이스'가 보이지 않는다면, Labs에서 활성화할 수 있습니다.
- 우상단의 'Manage App Permissions(앱 권한 관리)'를 클릭합니다.
- 여기서 배포 유형이 'Sub-Account(하위 계정)' 또는 'Agency & Subaccount(에이전시 및 하위 계정)'인 앱들을 찾을 수 있습니다.

![앱 권한 관리 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009951632/original/ozEKYZYtKoO3gYFaCp0gJ8ra_0KTJ8glJw.png?1697115469)

## 앱 승인하기:

**기본 설정:**

- 공개 및 라이브 상태인 모든 앱은 기본적으로 하위 계정에 승인됩니다.
- 이 기본 설정은 검토 과정을 통과하여 공개된 새로운 앱에도 적용됩니다.

**승인 취소된 앱을 승인하는 방법:**

- 'App state(앱 상태)' 아래에서 'Disapproved apps(승인 취소된 앱)'을 선택합니다.
- 일괄 작업의 경우, 승인하려는 앱들을 선택하고 우상단의 'approve(승인)' 버튼을 클릭합니다.

![승인 취소된 앱 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009952241/original/crNm9hhSccga56_GnJLMP4ZjpRHd-9-TJg.png?1697115627)

- 모달 창에서 'Approve(승인)'을 클릭하여 결정을 확인합니다.

![승인 확인 모달](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009952348/original/ZNidXSC_JcD_9Ewv_N4NSJRuCsE9GXPplA.png?1697115648)

- 승인되면 해당 앱들이 하위 계정 사용자의 앱 마켓플레이스에서 보이게 되고, 사용자들이 확인하고 설치할 수 있습니다.

**개별 앱의 경우:**

- 특정 앱을 클릭하여 앱 상세 페이지로 이동합니다.

![개별 앱 상세 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009952447/original/kV2Q5zmlKngFwCeoRggiKvLyhdlx1uSxUw.png?1697115692)

- 우상단의 'approve(승인)'을 클릭합니다.
- 모달에서 'Approve(승인)'을 선택하여 작업을 확인합니다.

## 앱 승인 취소하기:

- 'App state(앱 상태)' 아래에서 'Approved apps(승인된 앱)'을 선택합니다.

![승인된 앱 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009952542/original/OxMJRvLAfVqIwILE33GvCgpapUy_kPrilw.png?1697115717)

- 일괄 작업의 경우, 승인을 취소하려는 앱들을 선택하고 우상단의 'disapprove(승인 취소)' 버튼을 클릭합니다.

![일괄 승인 취소](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009952652/original/_V33Bgz4gIO6zAKLKD1rH5m-7Mg5OKaXoA.png?1697115754)

- 작업 박스에 'CONFIRM'을 입력하고 'disapprove(승인 취소)'를 클릭하여 결정을 확인합니다.

![승인 취소 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009952707/original/ZjBNjcxoXBNHy_wY8cPJhea8hFUI5iFmRw.png?1697115778)

**승인 취소의 효과:**

- 승인이 취소된 앱은 더 이상 하위 계정 레벨에서 보이지 않거나 설치할 수 없습니다.
- 이전에 설치된 앱이라면, 연결된 모든 하위 계정에서 제거됩니다. 여기에는 커스텀 대화 제공자, 워크플로우 액션, 트리거 등의 부가 기능도 포함됩니다.
- 승인 취소된 앱은 나중에 다시 승인할 수 있습니다. 하지만 이전에 설치되었던 하위 계정에 자동으로 재설치되지는 않으므로, 수동으로 다시 설치해야 합니다.

## 마켓플레이스 앱 일괄 승인/승인 취소:

**이 옵션 비활성화하기:**

- 우상단의 설정 아이콘을 클릭합니다.

![설정 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009952917/original/uNs0zVwyKWgbu2dMQ-wvzKOo8dOhH2WUgg.png?1697115833)

- 'allow sub-accounts to view and install apps built by 3rd party developers(하위 계정이 서드파티 개발자가 만든 앱을 보고 설치하도록 허용)' 옵션을 선택 해제합니다.
- 'Save(저장)'을 클릭합니다.

![옵션 비활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009952939/original/M5G8YAdkehh9LGRXHFg_Xkq4Ul_adiJdjQ.png?1697115866)

**비활성화의 효과:**

- 하위 계정은 더 이상 마켓플레이스 앱을 보거나 설치할 수 없습니다. 좌측 메뉴에는 '앱 마켓플레이스' 옵션만 보이며, 액세스를 위해 에이전시 관리자에게 연락하라는 안내가 표시됩니다.

![하위 계정 마켓플레이스 제한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009953206/original/Iya2lcjME-mvrfRaEt-BKWrjlbNIYRbUDQ.png?1697115953)

- 모든 앱이 승인 취소 상태로 변경됩니다.

![모든 앱 승인 취소됨](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009953327/original/tp-hxcKw3W_GHiCiG6-k4cayO7VD1FLftA.png?1697116023)

- 하위 계정에 이전에 설치된 앱들이 제거됩니다.

**이 옵션 다시 활성화하기:**

- 좌측 메뉴에서 '앱 마켓플레이스'로 이동합니다. (보이지 않는다면 Labs에서 활성화하세요).
- 우상단의 'Manage App Permissions(앱 권한 관리)'를 클릭합니다.
- 우상단의 설정 아이콘을 클릭합니다.
- 'allow sub-accounts to view and install apps built by 3rd party developers(하위 계정이 서드파티 개발자가 만든 앱을 보고 설치하도록 허용)' 박스를 선택합니다.
- 'Save(저장)'을 클릭합니다.

![옵션 재활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009953103/original/Io6XUT3WdULW-GS8Usrj1AharLNOjtWT_g.png?1697115898)

![저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009953148/original/XhegHN1AksJVvGolrfv-Yk-BhkmoJo5WDQ.png?1697115919)

**재활성화의 효과:**

- 모든 새로운 공개 앱이 하위 계정에 자동으로 승인됩니다.
- 이전에 승인된 모든 앱이 하위 계정 레벨에서 보이고 설치할 수 있게 됩니다.
- 승인 취소된 앱은 수동으로 승인할 때까지 승인 취소 상태를 유지합니다.

![재활성화 후 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009953560/original/h5AsP5DCRiqRGX_PyfSmNDr2oG4uDAaodg.png?1697116108)

---
*원문 최종 수정: Thu, 19 Oct, 2023 at 4:36 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*