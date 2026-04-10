---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 왓츠앱 템플릿을 만드는 방법

### 

커뮤니티 추가 튜토리얼


추가 가이드가 필요하시다면, 아래 커뮤니티 튜토리얼에서 왓츠앱 템플릿 작업에 대한 유용한 인사이트를 제공합니다:


- [튜토리얼 1 보기](https://youtu.be/A-kb-MuolHI)


- [튜토리얼 2 보기](https://youtu.be/DXP-icQTiXs)


- [튜토리얼 3 보기](https://youtu.be/zAk1TSMJgdA)
---

**목차**

- [왓츠앱 매니저에서 템플릿 카테고리 검증](#왓츠앱-매니저에서-템플릿-카테고리-검증)
- [사전 요구사항 및 로케이션에서 왓츠앱 설정 가이드](#사전-요구사항-및-로케이션에서-왓츠앱-설정-가이드)
- [왓츠앱 템플릿 생성 방법](#왓츠앱-템플릿-생성-방법)
- [왓츠앱 템플릿 복제 방법](#왓츠앱-템플릿-복제-방법)
- [인터랙티브 왓츠앱 템플릿 설정하기](#인터랙티브-왓츠앱-템플릿-설정하기)
- [왓츠앱 템플릿에서 트리거 링크 설정하기](#왓츠앱-템플릿에서-트리거-링크-설정하기)
- [다음 단계는?](#다음-단계는)
- [자주 묻는 질문](#자주-묻는-질문)

## 왓츠앱 매니저에서 템플릿 카테고리 검증


왓츠앱 매니저에서 새 템플릿을 생성할 때 반드시 카테고리를 선택해야 합니다(예: 마케팅, 유틸리티 또는 인증).


Meta는 공식 템플릿 카테고리 가이드라인에 따라 선택한 카테고리를 검증합니다. 검증 결과에 따라 시스템이 템플릿에 승인됨, 대기 중 또는 거부됨과 같은 상태를 부여합니다.


승인 과정에서 지연이나 거부를 피하기 위해 메시지 내용이 선택한 카테고리와 일치하는지 확인하는 것이 중요합니다.


## 사전 요구사항 및 로케이션에서 왓츠앱 설정 가이드


모든 로케이션에서 왓츠앱을 효과적으로 사용하려면 다음 사전 요구사항이 충족되어야 합니다:


- 하위 계정(로케이션)에 활성화된 왓츠앱 구독이 있어야 합니다.


- Meta 온보딩이 성공적으로 완료되어야 합니다.


온보딩에 도움이 필요하시나요? [왓츠앱 로케이션 온보딩 단계 및 모범 사례](how-to-use-the-whatsapp-business-onboarding-checklist.md)를 참조하여 과정을 완료하세요.

## 왓츠앱 템플릿 생성 방법


왓츠앱 템플릿은 아웃바운드 메시지를 시작하는 데 필요합니다. 다양한 사용 사례에 맞게 이러한 템플릿을 맞춤 설정하고 분류할 수 있습니다.


#### 1단계: 템플릿 설정으로 이동


하위 계정에서 **Settings(설정) → WhatsApp(왓츠앱) → Template(템플릿)** 탭으로 이동합니다. 그다음 **+ Create Template(템플릿 생성)**을 클릭하세요.


![왓츠앱 템플릿 생성 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155017326688/original/3H_BBOwlmRL_OdL4I2_Dtv_UYRiV6czLkA.png?1704897872)


왓츠앱의 최신 업데이트는 미디어 템플릿 지원을 도입하여 사용자가 이미지, 동영상, 문서, 위치를 포함한 다양한 유형의 미디어 콘텐츠를 보낼 수 있게 합니다. 자세히 알아보기: [왓츠앱 미디어 템플릿](whatsapp-media-templates.md)


#### 2단계: 템플릿 세부 정보 입력


다음 정보를 제공해야 합니다:


- Template Name(템플릿 이름) – 소문자만 사용하고 공백은 없어야 합니다.

Category(카테고리) – 다음 중에서 선택:

Marketing(마케팅) – 프로모션 콘텐츠용.


- Utility(유틸리티) – 트랜잭션 또는 서비스 관련 메시지용.


- [Meta의 템플릿 분류 가이드라인 보기](https://developers.facebook.com/docs/whatsapp/updates-to-pricing/new-template-guidelines/)


- Language(언어) – 메시지를 보낼 언어를 선택합니다.


- Header(헤더)(선택사항) – 정적이거나 1개의 커스텀 변수를 포함할 수 있습니다(예: {{1}}).


![왓츠앱 템플릿 세부 정보 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155017327197/original/wPwzZofX_Du-GCgeNeG9tSBCYGoXYISMyg.png?1704898013)


#### 3단계: 본문 및 푸터 추가


- Body(본문) – 핵심 메시지입니다. Add Variable(변수 추가)를 사용하여 {{1}}, {{2}} 등과 같은 플레이스홀더를 삽입하세요.


- Footer(푸터)(선택사항) – 템플릿 하단의 정적 메시지입니다.


**참고:** Meta의 검토 및 승인에 필요하므로 각 변수에 대한 샘플 값을 반드시 입력해야 합니다.


사용 가능한 필드에 대한 세부 정보:


- **Body(본문)** - 고객에게 보낼 메시지입니다. 템플릿 생성 시 Add Variable(변수 추가)를 클릭하여 여러 커스텀 변수를 추가할 수 있습니다.


- **Footer(푸터)(선택사항)** - 정적 푸터를 추가할 수 있습니다.


**참고:** 템플릿을 제출할 때 Meta에 예시를 보내야 하므로 추가된 모든 커스텀 변수에 대한 샘플 값을 입력해 주세요.


#### 4단계: 검토 및 제출


템플릿을 작성한 후 검토하고 Create(생성)를 클릭하세요. 시스템이 자동으로 템플릿을 Meta에 승인 요청을 제출합니다.


![왓츠앱 템플릿 검토](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155017329107/original/P65UIojMJaaPR59TGELqvvZhXYBgWW1oCQ.png?1704898782)


![왓츠앱 템플릿 제출](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155017329225/original/SftBJX-TfK8bWHjUKIPEY4lqjlpZ-QAcjg.png?1704898796)


#### 5단계: 제출 상태 추적


이제 이 템플릿을 Meta에 승인 요청을 보내고 Template(템플릿) 탭에서 상태를 추적할 수 있습니다. 가능한 상태 목록은 다음과 같습니다:


| 상태 | 설명 |
|------|------|
| Pending(대기 중) | 템플릿이 제출되어 Meta의 승인을 기다리고 있습니다. |
| Approved(승인됨) | 템플릿이 승인되어 메시징에 사용할 준비가 되었습니다. |
| Rejected(거부됨) | 템플릿이 승인되지 않았습니다. 수정하여 다시 제출해야 합니다. |


![왓츠앱 템플릿 상태 추적](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058589156/original/IZlX-ONHdYS951juJOzj8nmH6dNjJ1HPjQ.png?1763414334)


## 왓츠앱 템플릿 복제 방법


새 왓츠앱 템플릿 만들기가 쉽고 빠릅니다! 처음부터 시작할 필요 없이, 템플릿 복제 기능을 통해 기존 템플릿을 몇 초 만에 복제할 수 있습니다. 아래 단계를 따라 기존 왓츠앱 템플릿을 빠르게 복제하세요!


**중요:** 왓츠앱 템플릿을 복제할 때 모든 변수, 버튼 및 서식이 유지됩니다.


#### 1단계: 왓츠앱 템플릿으로 이동


하위 계정에서 좌측 하단 모서리의 Settings(설정)을 클릭하세요. 좌측 네비게이션 바에서 WhatsApp(왓츠앱) 탭을 클릭한 다음 상단 네비게이션 리본에서 Templates(템플릿) 탭을 클릭하세요.


![왓츠앱 템플릿 페이지 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058589333/original/YGFDXMqRI2_5ToqWz7hqX_iaiG7OKFuguQ.png?1763414819)


#### 2단계: 템플릿 복제 선택


복제하려는 왓츠앱 템플릿을 찾아 템플릿 옆의 점 3개 아이콘을 클릭하세요. 드롭다운 메뉴에서 Clone Template(템플릿 복제)를 클릭하세요.


![왓츠앱 템플릿 복제 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058589365/original/Y09yjF5zEAlURyMJ-8C79bV_cETeGAaq9A.png?1763414936)


#### 3단계: 템플릿 이름 변경 및 편집


팝업되는 Create Template(템플릿 생성) 모듈에서 저장하기 전에 템플릿 복제본의 이름을 변경하고 편집할 수 있습니다. 모든 편집이 완료되면 화면 하단의 파란색 Save(저장) 버튼을 클릭하여 새 왓츠앱 템플릿을 생성하세요.


![왓츠앱 템플릿 편집 및 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058589382/original/cLfviEXcVBrvKhaKBneLv_h2-A-re1DUUQ.png?1763414992)


---

## 인터랙티브 왓츠앱 템플릿 설정하기


1단계: Settings(설정) > WhatsApp(왓츠앱) > Templates(템플릿)으로 이동


![인터랙티브 왓츠앱 템플릿 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029105170/original/K23fq9WqlbkXGJ9z8eSOBBAkBPX2O35kpg.png?1720708655)


2단계: Create Template(템플릿 생성) > Add Button(버튼 추가) > Trackable Website(추적 가능 웹사이트) > Own URL(자체 URL)


![버튼 추가 및 URL 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050890558/original/iSd7nSCuq1T7rIz0HUb05tyc4H0vE6kpow.png?1754313057)


3단계: 버튼 텍스트 추가 > 필요한 경우 웹사이트에 CRM 변수 추가 > Create(생성)


![버튼 텍스트 및 변수 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050890633/original/CiNMBDI8sYnw5ob3rWhbbm1v5JN7mVXeNw.png?1754313081)


4단계: 기존 트리거 링크 선택 > Link Type(링크 타입) > 트리거 링크 선택 > Trigger Link(트리거 링크)


![트리거 링크 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050890728/original/3jwv8BO46sY337c05Tj5yh3dEQAbHQGmSw.png?1754313172)


추가하려는 CTA 버튼의 유형을 선택하세요: Quick Reply(빠른 답변), Visit Website(웹사이트 방문), Personalized Website Link(개인화된 웹사이트 링크), Call Phone Number(전화번호로 통화), Copy Offer Code(오퍼 코드 복사), 또는 Marketing Opt-Out(마케팅 수신 거부).


Quick Replies(빠른 답변):

- 사용자가 미리 정의된 옵션으로 빠르게 응답할 수 있어 대화 흐름과 사용자 참여를 향상시킵니다. 고객이 타이핑하지 않고도 답변할 수 있습니다.

Visit Website(웹사이트 방문):

- 사용자를 한 번의 클릭으로 웹사이트로 안내하여 트래픽을 증가시키고 전환율을 개선합니다.

Personalized Website Links(개인화된 웹사이트 링크):

- 동적 "Visit Website(웹사이트 방문)" 버튼을 활용하여 각 고객에게 맞춤형 링크를 제공하고 개인화된 경험을 제공하며 참여도를 높입니다.
- 변수를 추가하면 고객이 자신의 정보를 볼 수 있는 개인화된 링크가 생성됩니다. URL 끝에 하나의 변수만 추가할 수 있습니다.

Call Phone Number(전화번호로 통화):

- 사용자가 메시지에서 직접 지정된 전화번호로 통화할 수 있는 옵션을 제공하여 즉시 커뮤니케이션과 지원을 촉진합니다.

Copy Offer Code(오퍼 코드 복사):

- 사용자가 프로모션 코드나 오퍼 세부 정보를 쉽게 복사할 수 있게 하여 오퍼를 편리하게 사용할 수 있게 합니다.

Marketing Opt-Out(마케팅 수신 거부):

- 사용자가 마케팅 메시지를 쉽게 수신 거부할 수 있는 옵션을 제공하여 왓츠앱 규정을 준수하고 사용자 신뢰를 향상시킵니다.


## 왓츠앱 템플릿에서 트리거 링크 설정하기


참고: 자세한 정보는 왓츠앱 템플릿에서 트리거 링크 설정 및 사용 방법에 대한 상세 가이드를 확인하세요.

## 다음 단계는?

- 고객이 등록된 템플릿을 보유하게 되면 아래 제품 영역을 사용하여 왓츠앱 메시지를 보내고 받을 수 있습니다.
- 왓츠앱 내에서 사용할 수 있는 번호를 아직 추가하지 않았다면 아래를 참조하세요:

## 자주 묻는 질문


**Q: 왓츠앱 템플릿의 헤더와 본문에 커스텀 변수를 어떻게 추가하나요?**

변수를 추가하려면:

- 헤더 또는 본문 섹션 아래의 "Add Variable(변수 추가)"를 클릭하세요.
- 태그 아이콘을 클릭하고 연락처 이름, 전화번호 등과 같은 시스템 필드를 선택하세요.
- 각 변수에 샘플 값을 제공하세요(예: {{1}} → "홍길동"). Meta는 템플릿 승인 과정에서 이러한 샘플을 사용합니다.


**Q: 왓츠앱 템플릿 카테고리는 어떻게 다르며, 어떻게 선택하나요?**

Meta는 세 가지 카테고리를 제공합니다:

- Marketing(마케팅): 프로모션, 오퍼, 공지사항 등
- Utility(유틸리티): 주문 업데이트나 예약 알림과 같은 트랜잭션 메시지
- Authentication(인증): OTP나 보안 로그인 목적

거부를 피하기 위해 메시지의 의도와 가장 가깝게 일치하는 카테고리를 선택하세요.


**Q: 거부된 왓츠앱 템플릿을 어떻게 편집하거나 다시 제출하나요?**

- Settings(설정) → WhatsApp(왓츠앱) → Templates(템플릿)으로 이동
- 거부된 템플릿 옆의 아코디언(확장) 아이콘을 클릭
- Edit Template(템플릿 편집)을 누르고 필요한 변경사항을 만든 다음 Create(생성)를 클릭하여 승인을 위해 다시 제출하세요.


**Q: 왓츠앱 템플릿 상태는 무엇을 의미하나요?**

- Pending(대기 중): Meta에 제출되어 승인을 기다리는 중
- Approved(승인됨): 검증되어 사용할 준비가 됨
- Rejected(거부됨): Meta에서 승인되지 않음. 수정 사항을 검토하고 다시 제출해야 함.


**Q: 왓츠앱 템플릿에서 이미지나 동영상과 같은 미디어를 사용할 수 있나요?**

네. 미디어 템플릿을 통해 다음을 포함할 수 있습니다:

• 이미지
• 동영상
• 문서
• 위치

이는 참여도를 높이는 데 도움이 되며 메시지에서 직접 제품을 소개하거나 파일을 공유하는 데 이상적입니다.


**Q: 인터랙티브 템플릿에서 어떤 유형의 CTA(행동 유도) 버튼을 추가할 수 있나요?**

다음 중에서 선택할 수 있습니다:

- Quick Reply(빠른 답변)
- Visit Website(웹사이트 방문)
- Personalized Website Link(개인화된 웹사이트 링크)
- Call Phone Number(전화번호로 통화)
- Copy Offer Code(오퍼 코드 복사)
- Marketing Opt-Out(마케팅 수신 거부)

각각은 고유한 목적을 가지고 있으며 브랜드와의 사용자 상호작용을 향상시킵니다.


**Q: 트리거 링크란 무엇이며 왓츠앱 템플릿에서 어떻게 사용하나요?**

트리거 링크는 수신자가 링크를 클릭할 때 자동화 추적을 가능하게 합니다. 사용하려면:

- Marketing(마케팅) → Trigger Links(트리거 링크) → Add Link(링크 추가)로 이동
- 그다음 본문 텍스트의 Add Variable(변수 추가) 옵션을 사용하여 템플릿에 삽입하세요.

이를 통해 참여도를 추적하고 클릭을 기반으로 자동화 규칙을 설정할 수 있습니다.


**Q: 왓츠앱 템플릿이 승인된 후에는 어떻게 되나요?**

승인되면 다음을 통해 보낼 수 있습니다:

- Conversations(대화)에서 수동 메시지
- Workflows(워크플로우) 또는 Automations(자동화)
- Review Requests(리뷰 요청) 또는 Marketing Campaigns(마케팅 캠페인)

시작하기 전에 번호가 완전히 온보딩되고 템플릿 카테고리가 규정을 준수하는지 확인하세요.


**Q: 템플릿의 헤더와 본문에 커스텀 변수를 어떻게 추가하나요?**

1단계 - 헤더 또는 본문 아래에 있는 add variable(변수 추가)를 클릭하세요.


![커스텀 변수 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155017331500/original/EN6XqFdAU65X5f72ywHF9Qs1Bu19vXfRvQ.png?1704899501)


2단계 - 태그 아이콘을 클릭하고 커스텀 변수(이 경우 연락처 이름)와 샘플 텍스트(이 경우 홍길동)를 선택하세요.

![변수 선택 및 샘플 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155017331822/original/WebxbNpvOEd5TZOr73fmyLpVq0ZE9LUrkg.png?1704899602)


**Q: 거부된 템플릿을 제출하거나 이전에 승인된 템플릿을 편집하는 방법은?**

1단계 - 아코디언 아이콘을 클릭하고 Edit template(템플릿 편집)을 누르세요.

![거부된 템플릿 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155017332808/original/GZbb96HyQuSNgErD-D4n1_qy2kihwUnK6w.png?1704899840)


2단계 - 모든 정보를 다시 입력하고 Create(생성)를 누르세요.


**Q: GHL에서 왓츠앱 메시지 "Create(생성)" 버튼이 비활성화된 이유**

GoHighLevel 계정에서 왓츠앱 메시지의 "Create(생성)" 버튼이 비활성화되어 있다면(회색으로 표시되거나 클릭할 수 없음) 가장 가능성이 높은 이유는 다음과 같습니다:


1. 왓츠앱 템플릿 승인 대기 중: 템플릿 메시지를 보내려고 하는 경우, 템플릿이 다음 조건을 만족해야 합니다:

- Meta에서 승인됨
- 활성 왓츠앱 번호에서 사용 가능함

해결책: Settings(설정) > WhatsApp(왓츠앱) > Templates(템플릿)으로 이동하여 승인 상태를 확인하세요. 승인된 템플릿만 메시지 생성을 허용합니다.


2. 유효한 왓츠앱 번호가 연결되지 않음: 다음을 통해 왓츠앱 번호가 성공적으로 연결되어 있는지 확인하세요:

- API(새 WABA 설정), 또는
- Coexistence(기존 왓츠앱 비즈니스 앱)

해결책: Settings(설정) > WhatsApp(왓츠앱)으로 이동하여 전화번호가 "Connected(연결됨)" 및 "Approved(승인됨)"로 표시되는지 확인하세요.


3. 필수 필드 또는 변수 누락: 동적 변수(예: {{1}}, {{2}})가 있는 메시지 템플릿을 사용하고 모든 필드를 올바르게 입력하지 않은 경우 버튼이 비활성화 상태를 유지합니다.

해결책: 모든 변수에 유효한 플레이스홀더 텍스트와 입력값이 있는지 다시 확인하세요.


4. 왓츠