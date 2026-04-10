---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 커스텀 객체 레코드 생성 및 업데이트

이 가이드는 플랫폼에서 커스텀 객체 레코드를 생성하고 업데이트하는 방법에 대한 상세한 안내를 제공합니다. 반려동물, 자동차 또는 기타 커스텀 데이터 엔티티와 같은 다양한 커스텀 객체를 관리하고 있다면, 이 가이드가 커스텀 객체 레코드를 효과적으로 관리하는 필요한 단계를 안내해드릴 것입니다.

---

목차

- [기능 1: 새 커스텀 객체 레코드 생성](#기능-1-새-커스텀-객체-레코드-생성)
- [기능 2: 기존 커스텀 객체 레코드 업데이트](#기능-2-기존-커스텀-객체-레코드-업데이트)
- [기능 3: 관련 객체 관리](#기능-3-관련-객체-관리)
- [기능 4: 커스텀 객체 레코드 삭제](#기능-4-커스텀-객체-레코드-삭제)
- [기능 5: 커스텀 객체 레코드 가져오기](#기능-5-커스텀-객체-레코드-가져오기)
---

## **기능 1: 새 커스텀 객체 레코드 생성**

![새 커스텀 객체 레코드 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035098979/original/CpnSpUFrXsTM17wkj2AjFgfRCy-w2U6kHw.png?1729514530)

새 커스텀 객체 레코드를 생성하려면 다음 단계를 따르세요:

- **해당 커스텀 객체로 이동**:
  왼쪽 네비게이션 패널에서 커스텀 객체 유형(예: **Pets(반려동물)**, **Cars(자동차)** 등)을 선택하세요.

- **"Add(추가)" 버튼을 클릭하여 새 레코드 생성**:
  화면 우측 상단에서 **Add(추가)** 버튼(예: "Add Pet(반려동물 추가)")을 클릭하세요.

- **필수 필드 입력**:
  나타나는 양식에서 해당 객체의 기본 필드 값을 입력하세요.
  ![필수 필드 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035098877/original/Mw-N7ZvPcqPCJ6HmfNwjKVFzghxghKg8Ng.png?1729514470)

- **레코드 저장**:
  필수 정보를 입력한 후 **Save(저장)**을 클릭하세요.
  - 선택적으로, 양식을 벗어나지 않고 추가 레코드를 생성하려면 **Save and Add Another(저장 후 새로 추가)**를 선택할 수 있습니다.

커스텀 객체 레코드를 생성할 때는 기본 필드에만 값을 추가할 수 있습니다.

---

## **기능 2: 기존 커스텀 객체 레코드 업데이트**

![기존 커스텀 객체 레코드 업데이트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035098927/original/cT6kEhWA5_G9IM3jlrqLwDkLbLdcpVKxRg.png?1729514489)

레코드를 업데이트하려면 다음 단계를 따르세요:

- **커스텀 객체 레코드 열기**:
  커스텀 객체 목록으로 이동하여 업데이트하고자 하는 레코드를 찾으세요.
  - 레코드 이름을 클릭하여 상세 정보를 여세요.

- **필요한 필드 편집**:
  **Edit(편집)** 버튼을 클릭하여 객체를 수정하세요.
  - 적용해야 하는 변경 사항에 따라 텍스트, 숫자 값, 드롭다운 등의 필드를 업데이트하세요.

- **변경 사항 저장**:
  필요한 업데이트를 완료한 후 **Save(저장)** 버튼을 클릭하여 변경 사항을 적용하세요.
  - 변경 사항을 저장하지 않으려면 **Cancel(취소)**을 클릭하세요.

---

## **기능 3: 관련 객체 관리**

![관련 객체 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035098973/original/upM-aGA3vO9a6A1BE9cU6A8grLZ2PArEgg.png?1729514517)

연관(Association)에 대해 더 자세히 알아보려면 여기를 참고하세요.

일부 커스텀 객체의 경우, 연락처, 상품 또는 주택과 같은 다른 레코드를 연결하고 싶을 수 있습니다. 이러한 연결을 관리하는 방법은 다음과 같습니다:

- **"Related Objects(관련 객체)" 섹션으로 이동**:
  객체 레코드를 열고 **Related Objects(관련 객체)** 섹션을 찾으세요.
  - 연결하고자 하는 객체(예: Contacts(연락처), Products(상품)) 옆의 **Add(추가)**를 클릭하세요.

- **새 레코드 연결**:
  연결하고자 하는 관련 레코드(예: 연락처)를 검색하고 **Associate(연결)**을 클릭하여 커스텀 객체에 연결하세요.

---

## **기능 4: 커스텀 객체 레코드 삭제**

![커스텀 객체 레코드 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035098951/original/lOMNqeNc5GsQzhD_5D7guIjDsgxdq8Cfpg.png?1729514504)

커스텀 객체 레코드를 삭제해야 하는 경우, 다음 단계를 따르세요:

- **레코드 열기**:
  삭제하고자 하는 레코드로 이동하여 여세요.

- **케밥 메뉴(점 3개) 클릭**:
  레코드 상세 보기에서 우측 상단의 케밥 메뉴(점 3개)를 클릭하세요.

- **"Delete(삭제)" 선택**:
  드롭다운에서 **Delete Record(레코드 삭제)**를 클릭하여 레코드를 영구적으로 제거하세요.
  - 다음 확인 모달에서 삭제를 확인하세요.

커스텀 객체 삭제는 되돌릴 수 없는 변경입니다. 일단 삭제되면 커스텀 객체 레코드는 복원할 수 없습니다.

## **기능 5: 커스텀 객체 레코드 가져오기**

CSV를 사용하여 커스텀 객체 레코드를 가져오려면 다음 단계를 따르세요:

- 하위 계정에서 커스텀 객체를 열고 레코드를 가져올 커스텀 객체를 선택하세요.

![커스텀 객체 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066065774/original/rURyE1iwWflD_PUpiaQse66Y64S2cOB6Pg.png?1772528385)

- Import(가져오기)를 클릭하세요(우측 상단).

![가져오기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066065600/original/UIMsXatm_JyFA7sfVL9VwolmksI0EKlQgQ.png?1772528322)

- 가져오기를 시작할 객체를 선택하세요.

![객체 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066065232/original/zaZPN74OlyQ5g-HV8ifGUAEBsN0PLYQ4Gw.png?1772528144)

- 가져오기 모드를 선택하세요: Create & Update(생성 및 업데이트).

![가져오기 모드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066065429/original/5fGsoLWs8irXuFFaDil3tdUvPgkeKfSHww.png?1772528241)

- 메시지가 표시되면 중복 제거 고유 필드를 선택하세요(여러 고유 필드가 매핑된 경우에만 나타남).

![중복 제거 필드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066065098/original/T8NBcPtgyGTdyLgLJrTj_5Tu5A2vD4Yw8w.png?1772528085)

- 필드를 매핑하세요:
  - 기본/필수 필드를 먼저 매핑하세요
  - 그 다음 추가 필드를 매핑하세요(필요한 경우 소유자 및 팔로워 포함)

![필드 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066064856/original/KKUgprH5g-oxMfptQen1ATJ6REsMcsS47w.jpeg?1772527939)

- 업데이트 가져오기 중에 빈 값을 적용해야 하는 사용 사례가 있다면 Update empty values(빈 값 업데이트)를 활성화하세요(기본/필수 제외사항은 여전히 적용됨).

![빈 값 업데이트 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066066159/original/ehIpY0AMaOwb4bcZe_gW6Ydf9-QeB7ohbg.png?1772528616)

- Start Import(가져오기 시작)를 클릭하세요.

---
*원문 최종 수정: Wed, 4 Mar, 2026 at 4:56 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*