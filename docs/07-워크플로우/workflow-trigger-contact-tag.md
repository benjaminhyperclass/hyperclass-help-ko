---

번역일: 2026-04-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 - 연락처 태그

태그는 연락처를 분류하는 방법입니다. 연락처 목록의 모든 연락처에 하나 이상의 태그를 붙여서 나중에 쉽게 찾을 수 있도록 도와줍니다. 태그는 검색, 브라우징, 정렬, 콘텐츠 정리에 사용됩니다. 또한 자동화, 대량 이메일, SMS 등을 실행할 수 있게 해줍니다. 이 아티클에서는 태그가 어떻게 워크플로우를 실행하는지 다루겠습니다.

---

이 아티클에서 다루는 내용:

- 연락처 태그 워크플로우 트리거는 무엇을 하나요?
- 태그가 추가되거나 제거되는 원인은 무엇인가요?
- 연락처 목록에서 수동으로 추가/제거 (단일 연락처 또는 일괄 작업)
- 워크플로우를 통한 추가/제거
- Zapier 같은 서드파티 연동 도구를 통한 추가 (추가만 가능)
- CSV 가져오기를 통한 추가

## 연락처 태그 워크플로우 트리거는 무엇을 하나요?

연락처 태그 워크플로우 트리거 단계는 연락처에 태그가 추가되거나 제거되었는지 확인합니다.

![연락처 태그 워크플로우 트리거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48215643927/original/NxWCYmWtbjepAgd2ROUG-Rvoomj2nwA94g.png?1649877321)

필터를 통해 태그 추가로 실행할지 태그 제거로 실행할지 지정할 수 있습니다. 지정하지 않으면 두 경우 모두에서 실행됩니다.

![태그 추가/제거 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48252865701/original/Wz2eN9U-q9b5FwqGLoyJ_xRol2mbx2MNGw.png?1663948521)

---

## 태그가 추가되거나 제거되는 원인은 무엇인가요?

태그는 다음과 같은 방법으로 추가되거나 제거될 수 있으며, 따라서 연락처 태그로 트리거가 설정되고 태그 추가 또는 태그 제거 필터가 적용된 워크플로우를 실행할 수 있습니다:

### 연락처 목록에서 수동으로 추가/제거 (단일 연락처 또는 일괄 작업):

연락처 목록(Contacts List)으로 이동 > 연락처 선택 > 태그 추가(Add tag) 버튼 클릭으로 연락처나 연락처 그룹에 태그를 추가할 수 있습니다. 태그를 제거하려면 태그 제거(Remove Tag) 버튼을 클릭하면 됩니다.

![연락처 목록에서 태그 추가/제거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48252876878/original/adTvReZ-L4adHf_xcda9ps55YmfXj7K8Lw.gif?1663951791)

### 워크플로우를 통한 추가/제거:

워크플로우 액션을 사용해서 태그를 추가하거나 제거할 수 있습니다. 발행된 워크플로우에 진입한 리드가 태그 추가 또는 제거 액션에 도달하면 해당 태그가 추가되거나 제거됩니다.

![워크플로우를 통한 태그 추가/제거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253120218/original/MGuMOlailh9Jmn5kJr0F-ktq3ejUu8GU8A.gif?1664191236)

### Zapier 같은 서드파티 연동 도구를 통한 추가 (추가만 가능):

여러 서드파티 연동 도구를 사용해서 CRM의 연락처에 태그를 추가할 수 있습니다. Zapier는 외부 앱의 변화에 반응해서 CRM 내부에서 액션을 실행하는 가장 일반적으로 사용되는 서드파티 연동 도구 중 하나입니다. 이 방법으로는 태그를 제거할 수 없습니다.

![Zapier를 통한 태그 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253137580/original/3hyA-CiV129r5_T-E-nRbcrNn8N10SVtmQ.gif?1664195112)

### CSV 가져오기를 통한 추가

CSV에서 태그 열 헤더가 있는 태그 열을 만들고 해당 열에 각 연락처의 태그를 작성함으로써 CSV 가져오기 과정에서 태그를 추가할 수 있습니다. 같은 셀에 쉼표로 구분하여 각 연락처에 여러 태그를 입력할 수 있습니다.

![CSV 파일에서 태그 열 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253155778/original/bMA50nptY7VxrlZ4Xn6nuRg6MYuD-_Qecw.gif?1664198566)

가져오기 과정의 고급 옵션을 통해 CSV 가져오기 중에 태그를 추가할 수도 있습니다:

![CSV 가져오기 고급 옵션을 통한 태그 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253160766/original/dLXRneYYvywN9EzigyuPf2g9vD2bEM61HA.gif?1664199340)

참고사항:

중복 연락처 허용이 꺼져 있고 가져오는 연락처의 이메일과 전화번호가 기존 연락처와 동일한 경우, CSV 가져오기는 기존 연락처의 태그를 업데이트하는 데도 사용됩니다.

---
*원문 최종 수정: Mon, 9 Jun, 2025 at 3:31 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*