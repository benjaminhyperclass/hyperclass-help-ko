---

번역일: 2026-04-07
카테고리: 10-마케팅 > Ad Manager Setup & Configuration
---

# 페이스북 비즈니스 계정을 광고 관리자에 연결하기

페이스북 계정을 Ad Manager(광고 관리자)와 연동할 때, 비즈니스 페이지에 접근하기 위해 필요한 권한들을 요청합니다.

## Ad Manager 사전 요구사항

페이스북 페이지가 있어야 합니다 ([페이스북 페이지 만드는 방법 알아보기](https://www.facebook.com/business/help/1199464373557428?id=418112142508425))

Ad Manager로 페이스북 광고 계정을 처음 설정할 때, 캠페인을 실행할 페이스북 비즈니스 계정에 접근하고 관리할 수 있는 권한을 LeadConnector에 부여해야 합니다.

#### **Ad Manager에서 권한 부여하기:**

- Marketing(마케팅) > Ad Manager(광고 관리자)로 이동하세요
![페이스북 광고 관리자 연결하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026222746/original/tGt31CQEF8nMH_RFBFXP4fcHvm7qcvY1JQ.png?1715971864)
 
- Connect Now(지금 연결하기) 옵션을 클릭하세요.
참고 - Settings(설정) → Integrations(연동)에서 이미 계정을 연결했다면, 관리자 권한이 있는 모든 페이지가 표시됩니다.
- 사용자명과 비밀번호를 입력하고 관련 권한을 부여하여 **Connect to Facebook(페이스북에 연결하기)**을 클릭하세요. 모든 토글이 활성화되고 체크박스가 선택되어 있는지 확인하세요.
- LeadConnector 앱에 권한이 부여되면, 다음 단계는 비즈니스 페이지가 여러 개 있는 경우 연결하고 싶은 페이지를 선택하는 것입니다.

![페이스북 페이지 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026222826/original/HpvYzvTq_6YRmdefm6wqcv0ZSmcQX2I-5A.png?1715971994)

## **Ad Manager 연결 시 페이지를 찾을 수 없을 때 문제 해결**

캠페인을 설정할 때, Ad Manager는 광고를 실행할 페이스북 비즈니스 페이지에 대한 권한이 필요합니다. Ad Manager에서 페이지를 연결할 때 페이지가 나타나지 않는다면, 일부 권한이 누락되었거나 관리자 권한이 없다는 의미입니다. 
아래는 Ad Manager를 문제없이 사용하기 위해 LeadConnector에 제공해야 하는 권한 체크리스트입니다.

**페이스북 권한 체크리스트:**

관리자 권한:
- 연결하고자 하는 페이지의 관리자 권한이 필요합니다.
- 관리자 권한은 페이스북 페이지의 전문가용 대시보드 메뉴에서 Page Setup(페이지 설정)을 통해 관리할 수 있습니다.
- 페이스북 페이지가 Meta Business Portfolio의 일부라면, Meta Business Suite의 Settings(설정) > Accounts(계정) > Pages(페이지)에서 관리자 권한을 관리할 수 있습니다.
참고: 페이지가 다른 Meta Business Manager 계정 소유라면, 해당 Business Manager 계정의 관리자에게 연락해야 합니다.

연동 권한:
• 페이스북 페이지를 연결할 때 Ad Manager를 사용하려면 모든 권한을 허용하세요.

#### **페이스북 계정에서 페이스북 페이지 권한 부여하기:**

- 관련 페이지를 만든 페이스북 계정에 로그인하세요.
- 상단 우측의 드롭다운 화살표를 클릭하세요.
- Settings & Privacy(설정 및 개인정보)를 클릭하세요.
- Settings(설정)을 클릭하세요.
- 좌측에서 Business Integrations(비즈니스 연동)를 클릭하세요.
참고: Business Integrations 탭은 페이스북 페이지 설정이 아닌 페이스북 프로필 설정 아래에 있습니다.

![페이스북 비즈니스 연동 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026222921/original/UhvWLjdFjBzZ-cv1fcDLiQizvGJLmuJokA.png?1715972366)

- 상단의 **Active(활성)** 또는 **Removed(제거됨)** 탭을 선택해서 LeadConnector 비즈니스 연동을 찾으세요.
- 관련 LeadConnector 권한 옆의 **View and edit(보기 및 편집)**을 클릭하세요.

![LeadConnector 권한 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026222917/original/Ax4_knV7D4cGinKBfzjWs2YBMIBZpPKBVw.png?1715972349)

- 정보 옆의 체크박스를 선택하거나 해제하여 설정을 조정하세요. Ad Manager를 원활하게 사용하려면 체크박스를 체크하거나 보기 및 편집 대화상자에서 권한을 토글 ON하여 LeadConnector에 모든 권한을 부여하는 것을 권장합니다. Ad Manager에 필요한 세부 권한은 다음과 같습니다:
비즈니스 관리 - 토글 ON 상태여야 함
페이지의 리드에 접근 - 토글 ON 상태여야 함
관리하는 페이지 목록 표시 - 토글 ON 상태여야 함
접근 권한이 있는 광고 계정의 광고 관리 - 토글 ON 상태여야 함완료되면 **Save(저장)**을 클릭하세요.
- 참고 - 언제든지 필수 권한을 제거하기로 결정하면 페이스북 계정 연결이 해제됩니다. 새 캠페인을 편집하거나 시작하기 전에 다시 연결해야 합니다. 실행 중인 광고 캠페인은 평소대로 계속 실행됩니다.

### **올바른 관리자 권한이 있는지 확인하기**

광고 캠페인을 설정하고 시작하려면 페이스북에서 관리자 권한을 받아야 합니다.

페이스북 페이지의 관리자여야 합니다. 페이스북 페이지에 권한을 부여하려면:

- 관련 페이스북 계정에 로그인하세요.
- 뉴스피드에서 좌측 메뉴의 **Pages(페이지)**를 클릭하세요.
- 페이스북 페이지로 이동하여 Manage(관리)를 클릭하세요.

![페이스북 페이지 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026223075/original/Al7LdxMVkxFePtoHcbNd8e7B0ye6GuXXtA.png?1715972825)

- 좌측 패널의 Page Access(페이지 접근) 옵션으로 이동하세요.

![페이지 접근 권한 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026223139/original/Bpqg6zJnXtRB_GKcU4R_VbRB64lNCFY1lg.png?1715972881)

- 텍스트 상자에 이름이나 이메일을 입력하기 시작하고 관련 사용자를 선택하세요.
- 드롭다운 메뉴에서 역할을 선택하기 위해 **Editor(편집자)**를 클릭하고 **Add(추가)**를 클릭하세요.
- 새 권한을 확인하기 위해 비밀번호를 입력하세요.

**참고:** 페이지 관리자로 추가하려는 사람과 페이스북 친구가 아니라면, 페이스북 페이지를 관리하기 전에 먼저 초대를 수락해야 합니다.

---
*원문 최종 수정: Wed, 4 Dec, 2024 at 12:07 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*