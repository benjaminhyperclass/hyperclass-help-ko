---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006909-how-to-display-business-and-client-tax-ids-on-invoices-
번역일: 2026-11-06
카테고리: 08-결제
---

# 인보이스에 사업자 세금 ID와 고객 세금 ID 표시하기

모든 고객 인보이스에 사업자 세금 ID와 고객 세금 ID가 자동으로 나오도록 설정하는 방법을 안내해요. 사업자 세금 ID는 비즈니스 정보 영역에, 고객 세금 ID는 연락처 영역에 표시돼요.

![인보이스에 세금 ID가 표시된 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058078344/original/tJfyvWx779RfJ4ddb1FuJqpIuERrP63fgA.png?1762859977)

설정은 두 단계로 나뉘어요.

1. **데이터 준비:** 먼저 **커스텀 필드**에 고객별 세금 ID를 저장하고, **커스텀 값**에 에이전시의 세금 ID를 저장해요. 인보이스에 불러올 데이터를 만드는 단계예요.
2. **레이아웃 적용:** 결제 설정에서 기본 **인보이스 레이아웃**을 맞춤 설정해요. 저장해 둔 데이터를 연결해서 **비즈니스 Tax ID**는 비즈니스 정보 영역에, 고객의 **세금 ID**는 연락처 영역에 넣어요.

이렇게 설정하면 연락처에 세금 ID가 있고 커스텀 값에도 세금 ID가 있을 때, 인보이스가 두 번호를 자동으로 불러와서 보여 줘요.

## 커스텀 필드와 커스텀 값 만들기

### 1. 연락처마다 입력할 수 있는 '세금 ID' 커스텀 필드 만들기

1. 왼쪽 메뉴에서 **설정**을 클릭해요.

   ![왼쪽 메뉴의 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057439390/original/i3vLobT_JyK9Ay2bxbXMeN_vD9YFjytHCw.png?1762173044)

2. **기타 설정** 아래에서 **커스텀 필드**를 클릭하고 **+Add Field**(필드 추가)를 선택해요.

   ![커스텀 필드 화면에서 필드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057442015/original/iqZp9Fb_BzjYZeQlvyB6Iwc2o17zyprM3A.png?1762174242)

3. **Text Input**(텍스트 입력) 아래에서 **한 줄**을 선택하고 **다음**을 클릭해요.

   ![한 줄 선택 후 다음 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057443081/original/nRQ_Au4UnenfK-0LyH4GB18e0htD_R1eSA.png?1762174639)

4. **이름**에 "세금 ID"를 입력해요. 원하는 다른 이름을 써도 돼요.
5. **오브젝트**와 **그룹** 드롭다운에서 모두 **연락처**를 선택해요.
6. **저장**을 클릭해요.

   ![커스텀 필드 이름, 오브젝트, 그룹 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057443393/original/WGAI7cxzXzlKVWQ8cV8VzuvZ9RdwJjvWCg.png?1762174797)

### 2. 인보이스의 비즈니스 정보에 넣을 고정 값 'VAT ID' 커스텀 값 만들기

여기서 만드는 커스텀 값은 인보이스의 비즈니스 정보 영역에 고정으로 들어갈 텍스트나 숫자예요.

1. **설정**으로 돌아가요. **기타 설정** 아래에서 **커스텀 값**을 클릭하고 **+ 커스텀 값**을 선택해요.

   ![커스텀 값 화면에서 커스텀 값 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057443595/original/oMdD_mbVPJJ6UlO0zg-52WdtmgPPs4Odew.png?1762174926)

2. 세금 ID의 **이름**과 **값**을 입력하고 **만들기**를 클릭해요. 이 예시에서는 이름이 VAT ID이고 값이 1234예요.

   ![커스텀 값 이름과 값 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057447315/original/FU0vkBffuh-8T5Zw1jd_T5-7tVTB_BbTXg.png?1762176710)

## 인보이스 레이아웃 맞춤 설정하기

1. **결제**로 돌아가 **인보이스 & 견적서** 아래의 **설정**을 선택해요.

   ![결제 메뉴의 인보이스 & 견적서 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057447546/original/dfpkyRPBTYVSVuzPC_WTvvxXeWOWOnALjQ.png?1762176837)

2. **Title, Terms and Layout**(제목, 약관 및 레이아웃) 아래로 스크롤해 **인보이스 레이아웃**을 찾고 **레이아웃 맞춤 설정**을 클릭해요.

   ![인보이스 레이아웃의 레이아웃 맞춤 설정 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057447952/original/kI939SCDN8RF8bRu2okxAnyDGXybqnaF4A.png?1762177067)

3. 사업자 세금 ID를 넣으려면 아래 순서로 진행해요.
   1. **레이아웃** 탭에서 **비즈니스 정보** 아래의 **+Add Custom Value**(커스텀 값 추가)를 클릭해요.
   2. 드롭다운 메뉴에서 **Business Tax ID**(비즈니스 세금 ID)를 선택해요. <!-- 검토 필요: 원문 내용이 서로 다름 (앞에서는 커스텀 값 이름을 VAT ID로 만들었는데, 여기서는 드롭다운에서 Business Tax ID를 선택하라고 안내함) -->

   ![비즈니스 정보 아래 커스텀 값 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057448506/original/H2kxaj-1Dq8A5W0QnnGiERbP5JlwLdG2Qg.png?1762177267)

   ![드롭다운에서 비즈니스 세금 ID 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057448973/original/9qmi0FvMzAbJe8-pocH2i6NMHgHq-pMMLw.png?1762177506)

4. 고객(연락처) 세금 ID를 넣으려면 아래 순서로 진행해요.
   1. **레이아웃** 탭에서 **연락처 정보** 아래의 **+Add Custom Field**(커스텀 필드 추가)를 클릭해요.
   2. 드롭다운 메뉴에서 **세금 ID**를 선택해요.

   ![연락처 정보 아래 커스텀 필드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057449628/original/vGD94XvisF9AqTIC1ADgB0CD00cGNM-p-Q.png?1762177773)

5. 미리보기에서 세금 ID가 잘 보이는지 확인하고 **변경사항 저장**을 클릭해요.

## 인보이스를 받는 연락처에 세금 ID 입력하기

1. **연락처**로 이동해 해당 연락처를 열고 **추가 정보** 탭을 클릭해요.

   ![연락처의 추가 정보 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058078523/original/QAVaWYu9KIRuJL1qef79KOdv_pSwOEfN0g.png?1762860040)

2. **세금 ID** 필드에 연락처의 세금 ID를 입력하고 **저장**해요.

   ![세금 ID 입력 후 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057688782/original/TOgvhFSGkjKD69lBNM0zQTiA80kz624Asg.png?1762411604)

3. 연락처의 **결제** 탭에서 **작업** 드롭다운을 클릭하고 **인보이스 만들기**를 선택해요. **결제 > 인보이스 만들기**로 바로 이동해도 돼요.

   ![작업 드롭다운에서 인보이스 만들기 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057688919/original/c07SeVUgn03Ke30oFeoICkhQI4-xbByppg.png?1762411775)

4. 인보이스에 연락처별 **세금 ID**와 사업자 세금 ID(**VAT ID: 1234**)가 함께 표시되는지 확인해요.

   ![세금 ID가 표시된 인보이스 결과 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058078616/original/VBpNdg36ZXyiENBAXxB7X2_n5qgmtanrBA.png?1762860100)
