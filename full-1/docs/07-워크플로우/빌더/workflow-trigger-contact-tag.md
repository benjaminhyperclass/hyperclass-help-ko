---
원문: https://help.gohighlevel.com/support/solutions/articles/48001213546-workflow-trigger-contact-tag
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Contact Tag(연락처 태그)

연락처에 태그가 추가되거나 제거될 때 워크플로우를 시작하는 **Contact Tag** 트리거를 설명해요. 태그가 추가·제거되는 경로도 함께 안내해요.

태그는 연락처를 분류하는 방법이에요. 연락처 목록의 연락처에 태그를 하나 이상 붙여 두면 나중에 쉽게 찾을 수 있어요. 태그는 검색, 탐색, 정렬, 콘텐츠 정리에 쓰이고, 자동화나 이메일·SMS 대량 발송을 시작하는 기준으로도 쓸 수 있어요.

## Contact Tag 트리거는 어떤 일을 하나요?

**Contact Tag**(연락처 태그) 트리거는 연락처에 태그가 추가되거나 제거되었는지 확인해요.

![Contact Tag 트리거 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48215643927/original/NxWCYmWtbjepAgd2ROUG-Rvoomj2nwA94g.png?1649877321)

**Filters**(필터)에서 태그가 추가될 때만 시작할지, 제거될 때만 시작할지 정할 수 있어요. 따로 정하지 않으면 추가될 때와 제거될 때 모두 시작돼요.

![트리거 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48252865701/original/Wz2eN9U-q9b5FwqGLoyJ_xRol2mbx2MNGw.png?1663948521)

## 태그가 추가되거나 제거되는 경우

아래 경로로 태그가 추가되거나 제거되면 워크플로우가 시작돼요. 트리거를 **Contact Tag**로 설정하고, 필터를 **Tag Added**(태그 추가됨) 또는 **Tag Removed**(태그 제거됨)로 지정하면 돼요.

### 연락처 목록에서 직접 추가·제거 (연락처 한 명 또는 일괄 작업)

**연락처**로 이동해 연락처 목록에서 연락처를 하나 또는 여러 개 선택하고 **Add tag**(태그 추가) 버튼을 클릭하면 태그를 추가할 수 있어요. 태그를 제거하려면 **Remove Tag**(태그 제거) 버튼을 클릭하세요.

![연락처 목록에서 태그를 추가하고 제거하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48252876878/original/adTvReZ-L4adHf_xcda9ps55YmfXj7K8Lw.gif?1663951791)

### 워크플로우에서 추가·제거

워크플로우 액션으로 태그를 추가하거나 제거할 수 있어요. 게시된 워크플로우에 들어온 리드가 태그 추가 또는 제거 액션에 도달하면 태그가 추가되거나 제거돼요.

![워크플로우 액션으로 태그를 추가하고 제거하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253120218/original/MGuMOlailh9Jmn5kJr0F-ktq3ejUu8GU8A.gif?1664191236)

### Zapier 같은 외부 연동 도구로 추가 (추가만 가능)

외부 연동 도구를 사용하면 CRM의 연락처에 태그를 추가할 수 있어요. Zapier는 사용 중인 외부 앱에서 일어난 변화에 맞춰 CRM 안에서 작업을 실행할 때 가장 많이 쓰는 도구 중 하나예요. 이 방법으로는 태그를 제거할 수 없어요.

![Zapier로 연락처에 태그를 추가하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253137580/original/3hyA-CiV129r5_T-E-nRbcrNn8N10SVtmQ.gif?1664195112)

### CSV 가져오기로 추가

CSV 파일에 태그 열을 만들고 열 제목을 태그로 지정한 뒤, 연락처마다 태그를 적어 두면 가져오는 중에 태그가 추가돼요. 한 연락처에 태그를 여러 개 넣으려면 같은 셀 안에서 쉼표로 구분하세요.

![CSV 파일의 태그 열로 태그를 추가하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253155778/original/bMA50nptY7VxrlZ4Xn6nuRg6MYuD-_Qecw.gif?1664198566)

가져오기 과정의 고급 옵션에서도 태그를 추가할 수 있어요.

![가져오기 고급 옵션에서 태그를 추가하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48253160766/original/dLXRneYYvywN9EzigyuPf2g9vD2bEM61HA.gif?1664199340)

{% hint style="info" %}
**Allow Duplicate contacts**(중복 연락처 허용)가 꺼져 있고, 가져오는 연락처의 이메일과 전화번호가 기존 연락처와 같으면 CSV 가져오기로 기존 연락처의 태그도 업데이트돼요.
{% endhint %}
