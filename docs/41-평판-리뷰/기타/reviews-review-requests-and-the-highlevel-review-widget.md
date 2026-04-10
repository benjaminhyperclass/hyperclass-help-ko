---

번역일: 2026-04-09
카테고리: 평판 관리
---

# 리뷰 요청 메시지 커스터마이징하는 방법 (SMS/이메일)

Hyperclass에서 커스터마이징된 SMS와 이메일 요청으로 고객이 쉽게 리뷰를 남길 수 있도록 하세요. 이 가이드에서는 리뷰 요청을 활성화하고, 메시지 템플릿을 편집하며, 발송 주기와 재시도를 조절하고, 리뷰 링크를 설정하는 방법을 알아봅니다.

---

**목차**

- [리뷰 요청 메시징이란?](#리뷰-요청-메시징이란)
- [리뷰 요청 메시징의 주요 장점](#리뷰-요청-메시징의-주요-장점)
- [리뷰 요청을 보낼 수 있는 곳](#리뷰-요청을-보낼-수-있는-곳)
- [리뷰 링크 (밸런싱 vs 커스텀 링크)](#리뷰-링크-밸런싱-vs-커스텀-링크)
- [SMS 요청](#sms-요청)
- [SMS 템플릿 만들기 또는 편집](#sms-템플릿-만들기-또는-편집)
- [이메일 요청](#이메일-요청)
- [이메일 템플릿 만들기 또는 가져오기](#이메일-템플릿-만들기-또는-가져오기)
- [라이브 & 재시도 템플릿 선택 (시퀀스)](#라이브--재시도-템플릿-선택-시퀀스)
- [리뷰 요청 메시징 설정 방법 (단계별)](#리뷰-요청-메시징-설정-방법-단계별)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **리뷰 요청 메시징이란?**

리뷰 요청 메시징은 고객에게 공개 리뷰를 요청하는 과정을 자동화합니다. Hyperclass는 체크인 후 개인화된 **SMS**와 **이메일** 메시지를 보내고, 고객이 리뷰 링크를 클릭할 때까지 정해진 일정에 따라 반복하며, **리뷰 링크**를 통해 트래픽을 적절한 리뷰 플랫폼으로 안내합니다.

---

## **리뷰 요청 메시징의 주요 장점**

장점을 이해하면 비즈니스 목표에 맞게 요청을 설정하는 데 도움이 됩니다.

- **브랜드 일관성:** SMS와 이메일에서 브랜드 톤과 일치하는 템플릿을 만들 수 있습니다.

- **자동화:** 첫 요청 발송 시점과 고객이 클릭할 때까지 재시도 빈도를 예약할 수 있습니다.

- **개인화:** 연락처 및 로케이션 변수와 같은 병합 필드를 사용하여 맞춤형 메시지를 만들 수 있습니다.

- **유연성:** 고객을 구글 비즈니스 프로필이나 커스텀 목적지로 안내하고, 이메일에 여러 링크를 추가할 수 있습니다.

- **제어:** 어떤 템플릿이 "라이브"인지, 어떤 것이 시퀀스의 각 재시도를 담당할지 선택할 수 있습니다.

---

## 리뷰 요청을 보낼 수 있는 곳

템플릿과 발송 주기가 설정되면, Hyperclass의 여러 곳에서 리뷰를 요청할 수 있습니다. 팀 워크플로우에 가장 적합한 방법을 사용하세요.

- **Reputation(평판 관리) → Requests(요청):** 일괄 또는 개별로 요청을 보내고 추적합니다.

- **연락처 상세:** 연락처를 열고 **Send Review Request(리뷰 요청 보내기)**를 선택합니다.

- **Workflows(워크플로우):** **Review Request(리뷰 요청)** 액션을 사용하여 트리거 기반으로 자동 발송합니다(예: 예약 상태 변경 후).

- **채널:** 여기서는 SMS와 이메일을 다룹니다. **WhatsApp Requests(왓츠앱 요청)**은 **Reputation(평판 관리) → Settings(설정) → WhatsApp Requests**에서 사용할 수 있습니다(필요시 별도 설정).

---

## 리뷰 링크 (밸런싱 vs 커스텀 링크)

리뷰 링크는 요청에 삽입되는 URL입니다. Hyperclass가 지원 플랫폼(예: Google) 전반에 걸쳐 리뷰를 균형있게 배분하도록 하거나, 커스텀 URL을 사용하여 단일 목적지로 재정의할 수 있습니다.

위치: Reputation(평판 관리) → Settings(설정) → Review Link(리뷰 링크)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063513870/original/ZkcZchgDLioGh9YTmNgacq7SrE6--_izSQ.jpeg?1769449800)

#### 활성화 & 발송 주기 설정

- **Review Balancing(리뷰 밸런싱):** 토글을 켜서 설정된 플랫폼 전반에 걸쳐 리뷰 트래픽을 자동으로 분산합니다.

- **Get Reviews on Google(구글에서 리뷰 받기):** 구글 비즈니스 프로필(GBP)을 연결하여 트래픽을 구글 리스팅으로 안내합니다.

- **Custom Link(커스텀 링크):** 모든 고객을 단일 페이지로 보내려면 특정 URL을 선택하고 붙여넣습니다.

**팁:** 커스텀 링크를 사용하는 경우, 리뷰 양식으로 바로 열리는지 확인하세요. 밸런싱을 사용하는 경우, 연동이 연결되어 있는지 확인하세요.

---

## **SMS 요청**

SMS 요청은 빠르고 개인적입니다. 활성화 토글을 사용하여 발송을 시작하고, 첫 문자가 나가는 시점을 정의하며, 재시도 주기를 설정하고, 리뷰 링크와 선택적 이미지가 포함된 템플릿을 만드세요.

**메뉴 경로:** **Reputation(평판 관리) → Settings(설정) → SMS Requests(SMS 요청)**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063513905/original/Vo_pjWaiHFSBuHwx-TJSn7UrR6sQIURIbA.jpeg?1769449870)

#### 활성화 & 발송 주기 설정

- **Enable SMS Review Requests(SMS 리뷰 요청 활성화):** 우측 상단 토글을 켭니다.

- **When to send SMS after check‑in?(체크인 후 SMS 발송 시점):** 첫 문자를 보낼 시점을 선택합니다(예: 즉시).

- **Until clicked, repeat this every(클릭할 때까지 반복 주기):** 간격을 선택합니다(**Custom(커스텀)**은 숫자 + **Days(일)** 지원).

- **Maximum retries(최대 재시도):** 리뷰 링크를 클릭하지 않을 경우 보낼 수 있는 후속 메시지 수를 설정합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063513935/original/PYFMHD87MYkdGS3KPqcFuASbYRmCJQmEjg.png?1769449949)

### SMS 템플릿 만들기 또는 편집

- **Create New(새로 만들기)**(또는 기존 템플릿에서 **Edit(편집)**)을 클릭합니다.

- **Create New from Scratch(처음부터 새로 만들기)** 또는 **Select from Pre‑Built Templates(미리 만들어진 템플릿에서 선택)**을 선택합니다.

- 빌더에서 **Template Name(템플릿 이름)**을 추가합니다. 선택적으로 **Request with Image(이미지와 함께 요청)**(또는 이미지 URL 추가)를 활성화합니다.

- 메시지를 작성하고 리뷰 링크 토큰을 삽입합니다: {{reputation.review_link}}.

- **Save(저장)**을 클릭합니다.

**비용 참고:** Request with Image(이미지와 함께 요청)를 활성화하면 메시지가 MMS로 전송되어 다른 통신사 요금이 발생할 수 있습니다. 통신사에 확인하세요.

---

## **이메일 요청**

이메일 요청은 더 풍부한 브랜딩, 이미지, 여러 리뷰 목적지를 허용합니다. 기능을 켜고, 타이밍과 재시도를 설정한 다음, 드래그 앤 드롭 편집기에서 템플릿을 만들거나 가져오세요.

**메뉴 경로:** **Reputation(평판 관리) → Settings(설정) → Email Requests(이메일 요청)**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063516219/original/Ilaq69B44toxPAWJoghbVhS0eXlcVYCaCA.png?1769452221)

#### 활성화 & 발송 주기 설정

- **Enable Email Review Requests(이메일 리뷰 요청 활성화):** 우측 상단 토글을 켭니다.

- **When to send Email after check‑in?(체크인 후 이메일 발송 시점):** 초기 지연 시간을 선택합니다(예: 1시간).

- **Until clicked, repeat this every(클릭할 때까지 반복 주기):** 반복 간격을 설정합니다(**Custom(커스텀)**은 숫자 + **Days(일)** 지원).

- **Maximum retries(최대 재시도):** 보낼 후속 메시지 수를 선택합니다.

**참고:** "체크인 후"는 연락처 상세에서 또는 Reputation(평판 관리) → Requests(요청)에서 수동으로, 또는 Review Request(리뷰 요청) 액션을 사용하는 워크플로우를 통해 자동으로 Send Review Request(리뷰 요청 보내기) 액션이 트리거되는 시점을 의미합니다. 여기서 선택하는 타이밍은 해당 트리거 후 SMS가 발송되는 지연 시간을 결정합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063516230/original/g0tDB4bGh7YTD8ZUKizpWFQ-EQhsIWTDyA.png?1769452263)

### 이메일 템플릿 만들기 또는 가져오기

- **Create New(새로 만들기)** → **Create new Template(새 템플릿 만들기)** 또는 **Import from Template Library(템플릿 라이브러리에서 가져오기)**를 클릭합니다.

- 이메일 빌더에서 브랜딩과 콘텐츠를 추가합니다.

- **Review Link(리뷰 링크)** 요소를 이메일로 드래그합니다(또는 기본 CTA 버튼이 리뷰 링크를 사용하도록 설정).

- 템플릿을 저장합니다.

---

## **라이브 & 재시도 템플릿 선택 (시퀀스)**

SMS/이메일 요청을 켜는 것만으로는 충분하지 않습니다. 초기 발송과 각 재시도 슬롯에 사용할 템플릿을 Hyperclass에 알려줘야 합니다. 이 선택은 각 단계에서 고객이 받는 내용을 정확히 제어합니다.

- **이메일의 경우:** **Set Email Templates(이메일 템플릿 설정)**을 클릭하고, **Live(라이브)** 템플릿을 선택하며 각 **Retry(재시도)** 슬롯에 템플릿을 배정한 다음 **Save(저장)**합니다.

- **SMS의 경우:** **Set SMS Templates(SMS 템플릿 설정)**을 클릭한 다음, 라이브/재시도 템플릿을 선택하고 저장합니다.

---

## **리뷰 요청 메시징 설정 방법 (단계별)**

#### 1단계: 리뷰 링크 설정

좌측 사이드바에서 **Reputation(평판 관리)**을 클릭한 다음 상단의 **Settings(설정)** 탭을 엽니다. **Review Link(리뷰 링크)**에서 **Review Balancing(리뷰 밸런싱)** 토글을 활성화하거나 **Custom Link(커스텀 링크)** 라디오를 선택하고 **Setup your custom link(커스텀 링크 설정)**에 URL을 붙여넣습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058933873/original/QB3j9NV406CrZGGrHw_hZ5PhNhneE107XQ.jpeg?1763723464)

#### **2단계:** SMS 요청 활성화

**Reputation(평판 관리) → Settings(설정) → SMS Requests(SMS 요청)**을 열고 우측 상단 스위치를 토글하여 자동화된 리뷰 문자를 활성화합니다. **When to send after check-in(체크인 후 발송 시점)**, **repeat interval(반복 간격)** 및 **Maximum retries(최대 재시도)**를 설정한 다음, **Create New(새로 만들기)** 또는 **Set SMS Templates(SMS 템플릿 설정)**을 사용하여 아래 표시된 메시지를 관리합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058933920/original/gxWefKkRxYWGp630dnmpJmEt2GauEUvFPw.jpeg?1763723498)

#### 3단계: SMS 템플릿 추가

**Create New(새로 만들기)**를 클릭하여 새 SMS 리뷰 요청을 만들거나, **연필(편집)** 아이콘을 사용하여 선택한 템플릿을 수정합니다. 여기서 만들거나 편집한 템플릿은 목록에 나타나며 나중에 라이브 또는 재시도 시퀀스에 배정할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058937902/original/JkADEj50izgPa70Pve3V3O8pGUFYEZ-B_Q.png?1763725571)

#### 4단계: 템플릿 유형 선택

**Create New(새로 만들기)**를 클릭한 후, 시작 방법을 선택합니다: **Create New from Scratch(처음부터 새로 만들기)** 또는 **Select from Pre-Built Templates(미리 만들어진 템플릿에서 선택)**. 선호하는 옵션 아래의 **Select(선택)**을 클릭하세요—완전한 제어를 위해 빈 상태로 시작하거나 검증된 템플릿을 사용하여 더 빨리 진행할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938037/original/6ufdGZ9VGsp7Sd_gom24_CQn2vBlfoyEPg.png?1763725586)

#### 5단계: 미리 만들어진 템플릿 선택

**SMS Template Library(SMS 템플릿 라이브러리)**에서 **Request a Review(리뷰 요청)**과 같은 미리 만들어진 옵션을 선택합니다(참고용으로 표시된 문자 수 확인). **Edit Template(템플릿 편집)**을 클릭하여 커스터마이징용으로 열면, 문구를 조정하고 {{reputation.review_link}} 토큰을 유지할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938158/original/2p9Gcm_rwylwfHoQt5GN06fRSC6AMuOFQg.png?1763725602)

#### 6단계: SMS 템플릿 커스터마이징

**Template Name(템플릿 이름)**을 입력하고, 선택적으로 **Request with Image(이미지와 함께 요청)**을 활성화하여 이미지를 업로드하거나 링크하며, {{reputation.review_link}}를 사용하여 메시지를 작성합니다. 우측의 실시간 폰 미리보기를 확인한 다음, **Save(저장)**을 클릭하여 템플릿을 저장합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938272/original/0QeAG2m0_i5c6CJNuN-LoK2y27GC4heRVA.png?1763725619)

#### **7단계:** 이메일 요청 활성화

**Reputation(평판 관리) → Settings(설정) → Email Requests(이메일 요청)**을 열고 우측 상단 토글을 켜서 자동화된 리뷰 이메일을 활성화합니다. 컨트롤을 사용하여 체크인 후 발송 시점, 클릭할 때까지의 반복 간격, 최대 재시도를 설정한 다음, **Set Email Templates(이메일 템플릿 설정)** 또는 **Create New(새로 만들기)**를 통해 템플릿을 관리합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938389/original/wwV6X0pG3zkFFBmww9-QoknrHLcSDpY3xQ.png?1763725650)

#### 8단계: 이메일 시퀀스 배정

**Set Email Templates(이메일 템플릿 설정)**을 클릭하여 첫 번째로 보낼 템플릿(**Live(라이브)**)과 좌측 드롭다운에서 각 **Retry(재시도)** 슬롯을 담당할 템플릿을 선택합니다. 필요시 우측의 제목을 검토하거나 편집한 다음, **Save(저장)**을 클릭하여 시퀀스를 적용합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938399/original/4BPED3NN1OybzIvDJvd-5dbY709-4ozMsA.png?1763725667)

#### 8단계: 이메일 만들기/가져오기

이메일 요청용으로 **Create New(새로 만들기)**(드롭다운)를 사용하여 **Create new Template(새 템플릿 만들기)** 또는 **Import from Template Library(템플릿 라이브러리에서 가져오기)**를 선택합니다. 기존 디자인을 수정하려면 템플릿 카드의 **⋯** 메뉴를 클릭하고 **Edit Templates(템플릿 편집)**을 선택하세요. 나중에 **Set Email Templates(이메일 템플릿 설정)**을 통해 이들을 배정할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938411/original/Pn961HFj6HEg6tsZzG_RCNNeaB1IOamUmw.png?1763725685)

#### 9단계: 이메일 콘텐츠 디자인

드래그 앤 드롭 이메일 빌더를 사용하여 좌측 **Elements(요소)** 패널에서 텍스트, 이미지, 버튼을 추가합니다. **Review Link(리뷰 링크)** 요소(좌측 하단)를 레이아웃으로 드래그하여 CTA가 설정된 리뷰 URL을 열도록 한 다음, 우측 상단의 **Save(저장)**을 클릭합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938476/original/vyrtAQYYaTlWHTHlJSSZdcqI83g8lMQCYg.png?1763725704)

---

## **자주 묻는 질문**

**Q: 고객이 리뷰 링크를 클릭한 후에는 어떻게 되나요?**

클릭이 감지되면 해당 채널의 반복 일정이 중지되어 해당 연락처에 대한 추가 재시도를 방지합니다.

**Q: 리뷰 밸런싱과 커스텀 링크의 차이점은 무엇인가요?**

**밸런싱**은 연결된 리뷰 사이트(예: Google) 전반에 걸쳐 트래픽을 분산합니다. **커스텀 링크**는 모든 사람을 선택한 단일 목적지로 보냅니다.

**Q: SMS에서 리뷰 URL에 어떤 토큰을 사용해야 하나요?**

{{reputation.review_link}}를 사용하세요. 이는 **Reputation(평판 관리) → Settings(설정) → Review Link(리뷰 링크)**에서 설정한 리뷰 링크를 자동으로 사용합니다.

**Q: 이메일에 둘 이상의 리뷰 목적지를 포함할 수 있나요?**

네. 이메일 빌더에서 **Review Link(리뷰 링크)** 요소를 사용할 수 있고, 일부 템플릿에서는 디자인이 지원하는 경우 여러 리뷰 버튼을 설정할 수 있습니다.

**Q: 재시도를 몇 번으로 설정해야 하나요?**

대부분의 팀은 2-3번 재시도로 시작합니다. 적절한 횟수는 참여도, 업계 표준, 컴플라이언스 요구사항에 따라 달라집니다.

**Q: SMS에 이미지를 추가하면 비용이 변경되나요?**

MMS로 발송될 수 있어 다른 통신사 요금이 적용될 수 있습니다. 메시징 제공업체의 요금을 확인하세요.

**Q: 구글 비즈니스 프로필 연결이 필요한가요?**

밸런싱을 사용하여 리뷰를 구글로 라우팅하려는 경우에만 필요합니다. 다른 사이트나 자체 페이지를 선호한다면 대신 **커스텀 링크**를 설정하세요.

**Q: 수동 발송 없이 요청을 자동화할 수 있나요?**

네. 워크플로우에 **Review Request(리뷰 요청)** 액션을 추가하여 자동으로 발송을 트리거할 수 있습니다(예: "체크인" 후).

---
*원문 최종 수정: Wed, 11 Feb, 2026 at 2:42 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*