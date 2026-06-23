---

번역일: 2026-04-08
카테고리: 15-전화-시스템 > 전화번호
---

# 삭제된 전화번호 복원하는 방법

실수로 Twilio 전화번호를 삭제했더라도, 특정 기간 내에 복원할 수 있는 방법이 있습니다. 복원 과정은 LC Phone(LeadConnector 호스팅) 또는 본인의 Twilio 계정 중 어느 것을 사용하는지에 따라 달라집니다. 이 가이드는 삭제된 전화번호를 복원하는 단계와 고려사항을 안내합니다.

---

**목차**

- [삭제된 전화번호 복원의 주요 이점](#삭제된-전화번호-복원의-주요-이점)
- [전화번호 복원 규칙 및 주의사항](#전화번호-복원-규칙-및-주의사항)
- [LC Phone(LeadConnector) 사용 중인 경우](#lc-phoneleadconnector-사용-중인-경우)-사용-중인-경우)
- [본인 Twilio 계정 사용 중인 경우](#본인-twilio-계정-사용-중인-경우)
  - [1단계: Twilio 콘솔 로그인](#1단계-twilio-콘솔-로그인)
  - [2단계: Twilio SID 찾기](#2단계-twilio-sid-찾기)
  - [3단계: Account SID 복사](#3단계-account-sid-복사)
  - [4단계: Twilio 콘솔에서 Released Numbers 메뉴 이동](#4단계-twilio-콘솔에서-released-numbers-메뉴-이동)
- [자주 묻는 질문](#자주-묻는-질문)

## 삭제된 전화번호 복원의 주요 이점

- **고객 신뢰 유지** – 해당 번호를 저장해둔 고객들이 혼란스러워하지 않도록 합니다.

- **마케팅 일관성 유지** – 광고, 랜딩 페이지, 인쇄 자료에 이미 사용된 번호를 재사용할 수 있습니다.

- **잠재 고객 놓치지 않기** – 진행 중인 전화와 문자가 중단 없이 계속되도록 보장합니다.

- **비용 소모적인 전환 방지** – 새 번호 설정과 워크플로우 재구성에 드는 시간과 노력을 절약합니다.

- **발신자 ID 기록 유지** – 기존 연락처 및 SMS 기록과 함께 평판을 그대로 유지합니다.

## 전화번호 복원 규칙 및 주의사항

- **10일 기한**: 삭제일로부터 10일 이내에 번호를 복원해야 합니다. 이후에는 해당 번호를 더 이상 사용할 수 없습니다.

- **즉시 청구**: Twilio는 번호 복원 시 즉시 요금을 청구할 수 있습니다.

- 번호가 더 이상 사용할 수 없다면, 복원이 불가능할 수 있습니다.

- 번호를 복원해도 웹훅이나 통화 라우팅 설정이 자동으로 복원되지는 않습니다.

- Twilio는 삭제된 번호를 10일간 보관합니다. 이 기간 이후에는 Twilio 지원팀에 직접 연락하여 복원을 요청해야 합니다.

- 번호가 복구된 후 복원 요금이 적용될 수 있습니다.

## LC Phone(LeadConnector) 사용 중인 경우

LC Phone(LeadConnector 호스팅 번호)을 사용하는 Hyperclass 하위 계정에서 번호가 삭제된 경우, 저희 지원팀이 복원을 도와드릴 수 있지만 삭제 후 10일 이내에만 가능합니다. LC Phone 번호는 Hyperclass에서 관리하므로, 번호가 할당되었던 정확한 Location ID와 함께 저희 지원팀에 문의해야 합니다. 저희 팀이 번호를 여전히 사용할 수 있는지 확인하고 대신 복원을 시도해드립니다.

- 지원 채팅을 통해 Hyperclass 지원팀에 직접 연락하시고, 번호를 복원해야 하는 하위 계정의 Location ID를 포함해 주세요.

- 저희 지원팀이 내부적으로 번호 복원을 도와드립니다.

![LC Phone 복원 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046032623/original/kGK3w-QWsllxiXq5FY0OAowiJZQedg3F7Q.gif?1746194333)

## 본인 Twilio 계정 사용 중인 경우

본인의 Twilio 계정(LC Phone이 아닌)을 사용 중인 경우, 삭제 후 10일 이내에 Twilio 콘솔에서 직접 번호 복원을 시도할 수 있습니다. Twilio는 계정의 "Released Numbers" 섹션에서 해제된 번호를 임시로 보관합니다. 번호가 원래 할당되었던 정확한 하위 계정을 찾은 후 수동으로 재구매해야 합니다. 번호가 더 이상 표시되지 않으면 Twilio 지원팀에 복구 지원을 요청해야 합니다.

### 1단계: Twilio 콘솔 로그인

하위 계정으로 이동하여 계정 이름을 클릭합니다.

![Twilio 콘솔 로그인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046033472/original/OsAMVfdE3xoi71alM_CNhIt0fUWuWqmKAg.gif?1746195040)

### 2단계: Twilio SID 찾기

Twilio 내에 하위 계정이 너무 많다면, HL로 돌아가서 해당 로케이션의 Account SID를 복사하여 Twilio에서 검색할 수 있습니다. Hyperclass의 에이전시 뷰에서 Settings(설정) → Phone Integration(전화 연동) → Subaccount Settings(하위 계정 설정)으로 이동하여 하위 계정을 찾으세요.

![Twilio SID 찾기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046320248/original/4h3AjdxYFQn_GxLNAcylGYWvFSXlUrnEEA.png?1746704591)

### 3단계: Account SID 복사

점 3개 버튼을 클릭하고 Update Credentials(인증 정보 업데이트)를 선택한 후 하위 계정의 Account SID를 복사합니다. 이 SID를 사용하여 Twilio에서 하위 계정을 필터링하세요.

![Account SID 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046320445/original/NmMPnkB0lOJLNpQnHzb0z7wp6qPs3U7nCQ.png?1746704753)

### 4단계: Twilio 콘솔에서 Released Numbers 메뉴 이동

왼쪽 네비게이션 메뉴에서 Phone Numbers 탭을 확장하여 Manage 섹션을 확인합니다. 여기서 Released Numbers 탭을 클릭하여 이전에 삭제된 전화번호를 찾으세요.

![Released Numbers 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046321066/original/6yUlpWUmc_8nsSz6r7XWBqpTaJC__HX4TA.gif?1746705250)

**참고**: 번호를 복원하려면 해당 번호 옆의 Repurchase(재구매)를 클릭하세요(여전히 사용 가능한 경우). Twilio는 재구매 시점부터 월 사용료를 청구하기 시작합니다. 전화번호를 찾을 수 없다면, Account SID와 번호 세부정보를 포함하여 Twilio 지원팀에 문의하세요.

## 자주 묻는 질문

**Q: 삭제된 Twilio 번호를 복원하려면 얼마나 시간이 있나요?**

삭제일로부터 최대 10일까지 번호를 복원할 수 있습니다. 이후에는 Twilio가 영구적으로 해제할 수 있습니다.

**Q: 다른 사람이 제 예전 번호를 가져가면 어떻게 되나요?**

안타깝게도 번호가 재할당되면 복원할 수 없습니다.

**Q: 번호를 복원한 후 다시 요금이 청구되나요?**

네, Twilio는 재구매 시점부터 표준 월 사용료를 청구하기 시작합니다.

**Q: LC Phone(LeadConnector)을 사용 중이면 번호를 복원할 수 있나요?**

네, 하지만 Location ID를 포함하여 Hyperclass 지원팀에 문의하여 복원을 요청해야 합니다.

**Q: 기존 워크플로우나 통화 설정이 자동으로 복원되나요?**

아니요. 번호를 복원한 후 통화 라우팅, 웹훅, 자동화를 다시 구성해야 합니다.

---
*원문 최종 수정: Mon, 11 Aug, 2025 at 4:32 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*