---

번역일: 2026-04-08
카테고리: 41-평판-리뷰 > Review Requests
---

# 리뷰 요청 메시지 커스터마이징 방법 (SMS/이메일)

Hyperclass에서 커스터마이징된 SMS와 이메일 요청으로 고객이 리뷰를 남기기 쉽게 만드세요. 이 가이드에서는 리뷰 요청을 활성화하고, 메시지 템플릿을 편집하며, 발송 주기와 재시도를 제어하고, 리뷰 링크를 설정하는 방법을 알아봅니다.

---

## 리뷰 요청 메시징이란?

리뷰 요청 메시징은 고객에게 공개 리뷰를 요청하는 과정을 자동화합니다. Hyperclass는 체크인 후 개인화된 **SMS**와 **이메일** 메시지를 발송하고, 고객이 리뷰 링크를 클릭할 때까지 일정에 따라 반복 발송하며, **리뷰 링크**를 통해 적절한 리뷰 사이트로 트래픽을 유도할 수 있습니다.

---

## 리뷰 요청 메시징의 주요 장점

이점을 이해하면 비즈니스 목표에 맞게 요청을 구성할 수 있습니다.

- **브랜드 일관성:** SMS와 이메일에서 톤과 브랜딩이 일치하는 템플릿을 구축하세요.

- **자동화:** 첫 요청 발송 시점과 고객이 클릭할 때까지의 재시도 주기를 예약하세요.

- **개인화:** 연락처와 로케이션 변수 같은 병합 필드를 사용해 맞춤형 메시지를 만드세요.

- **유연성:** 고객을 구글 비즈니스 프로필이나 커스텀 목적지로 안내하고, 이메일에 여러 링크를 추가하세요.

- **제어:** 어떤 템플릿이 "활성"이고 시퀀스의 각 재시도에 어떤 템플릿을 사용할지 선택하세요.

---

## 리뷰 요청을 보낼 수 있는 곳

템플릿과 주기를 설정한 후에는 Hyperclass의 여러 위치에서 리뷰를 요청할 수 있습니다. 팀 워크플로우에 가장 적합한 방법을 사용하세요.

- **평판 관리(Reputation) → 요청(Requests):** 일괄 또는 개별적으로 요청을 발송하고 추적하세요.

- **연락처 상세:** 연락처를 열고 **리뷰 요청 발송(Send Review Request)**을 선택하세요.

- **워크플로우:** **리뷰 요청(Review Request)** 액션을 사용해 트리거에 따라 자동 발송하세요 (예: 예약 상태 변경 후).

- **채널:** 여기서는 SMS와 이메일을 다루며, **왓츠앱 요청**은 **평판 관리 → 설정 → 왓츠앱 요청**에서 사용할 수 있습니다 (필요시 별도 설정).

---

## 리뷰 링크 (밸런싱 vs 커스텀 링크)

리뷰 링크는 요청에 삽입되는 URL입니다. Hyperclass가 지원하는 플랫폼(예: 구글) 간에 리뷰를 균형 있게 분배하도록 하거나, 커스텀 URL을 사용해 단일 목적지로 재정의할 수 있습니다.

위치: 평판 관리 → 설정 → 리뷰 링크

![리뷰 링크 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063513870/original/ZkcZchgDLioGh9YTmNgacq7SrE6--_izSQ.jpeg?1769449800)

#### 활성화 및 주기 제어

- **리뷰 밸런싱(Review Balancing):** 토글을 켜서 설정된 플랫폼 간에 리뷰 트래픽을 자동 분배합니다.

- **구글에서 리뷰 받기(Get Reviews on Google):** 구글 비즈니스 프로필(GBP)을 연결해 트래픽을 구글 목록으로 라우팅합니다.

- **커스텀 링크(Custom Link):** 모든 고객을 단일 페이지로 보내려면 특정 URL을 선택하고 붙여넣으세요.

**팁:** 커스텀 링크를 사용하는 경우, 리뷰 폼으로 직접 이동하는지 확인하세요. 밸런싱을 사용하는 경우, 연동이 연결되어 있는지 확인하세요.

---

## SMS 요청

SMS 요청은 빠르고 개인적입니다. 활성화 토글을 사용해 발송을 시작하고, 첫 번째 문자가 나가는 시점을 정의하며, 재시도 주기를 설정하고, 리뷰 링크와 선택적 이미지를 포함하는 템플릿을 만드세요.

**경로:** **평판 관리 → 설정 → SMS 요청**

![SMS 요청 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063513905/original/Vo_pjWaiHFSBuHwx-TJSn7UrR6sQIURIbA.jpeg?1769449870)

#### 활성화 및 주기 제어

- **SMS 리뷰 요청 활성화(Enable SMS Review Requests):** 우상단 토글을 켜세요.

- **체크인 후 언제 SMS를 보낼까요?(When to send SMS after check-in?):** 첫 번째 문자를 보낼 시점을 선택하세요 (예: 즉시).

- **클릭할 때까지 이 주기로 반복(Until clicked, repeat this every):** 간격을 선택하세요 (**커스텀**에서 숫자 + **일** 지원).

- **최대 재시도 횟수(Maximum retries):** 리뷰 링크를 클릭하지 않으면 몇 번까지 후속 메시지를 보낼지 설정하세요.

![SMS 주기 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063513935/original/PYFMHD87MYkdGS3KPqcFuASbYRmCJQmEjg.png?1769449949)

### SMS 템플릿 생성 또는 편집

- **새로 만들기(Create New)**를 클릭하세요 (기존 템플릿에서는 **편집(Edit)**).

- **처음부터 새로 만들기(Create New from Scratch)** 또는 **미리 만들어진 템플릿에서 선택(Select from Pre-Built Templates)**을 선택하세요.

빌더에서 **템플릿 이름**을 추가하세요. 선택적으로 **이미지와 함께 요청(Request with Image)**을 활성화하거나 이미지 URL을 추가하세요.

- 메시지를 작성하고 리뷰 링크 토큰을 삽입하세요: {{reputation.review_link}}.

- **저장(Save)**을 클릭하세요.

**비용 참고:** 이미지와 함께 요청을 활성화하면 메시지가 MMS로 전송되어 다른 통신사 요금이 부과될 수 있습니다. 제공업체에 확인하세요.

---

## 이메일 요청

이메일 요청은 더 풍부한 브랜딩, 이미지, 여러 리뷰 목적지를 허용합니다. 기능을 켜고 타이밍과 재시도를 설정한 다음, 드래그 앤 드롭 편집기에서 템플릿을 만들거나 가져오세요.

**경로:** **평판 관리 → 설정 → 이메일 요청**

![이메일 요청 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063516219/original/Ilaq69B44toxPAWJoghbVhS0eXlcVYCaCA.png?1769452221)

#### 활성화 및 주기 제어

- **이메일 리뷰 요청 활성화(Enable Email Review Requests):** 우상단 토글을 켜세요.

- **체크인 후 언제 이메일을 보낼까요?(When to send Email after check-in?):** 초기 지연 시간을 선택하세요 (예: 1시간).

- **클릭할 때까지 이 주기로 반복(Until clicked, repeat this every):** 반복 간격을 설정하세요 (**커스텀**에서 숫자 + **일** 지원).

- **최대 재시도 횟수(Maximum retries):** 몇 번의 후속 메시지를 보낼지 선택하세요.

**참고:** "체크인 후"는 리뷰 요청 발송 액션이 수동으로(연락처 상세에서 또는 평판 관리 → 요청에서) 또는 리뷰 요청 액션을 사용하는 워크플로우를 통해 자동으로 트리거될 때를 의미합니다. 
여기서 선택하는 타이밍이 해당 트리거 후 얼마나 후에 SMS를 보낼지 결정합니다.

![이메일 타이밍 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063516230/original/g0tDB4bGh7YTD8ZUKizpWFQ-EQhsIWTDyA.png?1769452263)

### 이메일 템플릿 생성 또는 가져오기

- **새로 만들기(Create New)** → **새 템플릿 만들기(Create new Template)** 또는 **템플릿 라이브러리에서 가져오기(Import from Template Library)**를 클릭하세요.

- 이메일 빌더에서 브랜딩과 콘텐츠를 추가하세요.

- **리뷰 링크(Review Link)** 요소를 이메일로 드래그하세요 (또는 기본 CTA 버튼이 리뷰 링크를 사용하도록 설정).

- 템플릿을 저장하세요.

---

## 활성 및 재시도 템플릿 선택 (시퀀스)

SMS/이메일 요청을 켜는 것만으로는 충분하지 않습니다. 초기 발송과 각 재시도 슬롯에 어떤 템플릿을 사용할지 Hyperclass에 알려야 합니다. 이 선택이 각 단계에서 고객이 받는 내용을 정확히 제어합니다.

- **이메일의 경우:** **이메일 템플릿 설정(Set Email Templates)**을 클릭하고, **활성(Live)** 템플릿을 선택한 후 각 **재시도(Retry)** 슬롯에 템플릿을 할당하고, **저장(Save)**하세요.

- **SMS의 경우:** **SMS 템플릿 설정(Set SMS Templates)**을 클릭한 후, 활성/재시도 템플릿을 선택하고 저장하세요.

---

## 리뷰 요청 메시징 설정 방법 (단계별)

#### 1단계: 리뷰 링크 설정

좌측 사이드바에서 **평판 관리**를 클릭한 후, 상단의 **설정** 탭을 여세요. **리뷰 링크**에서 **리뷰 밸런싱** 토글을 활성화하거나 **커스텀 링크** 라디오를 선택하고 **커스텀 링크 설정**에 URL을 붙여넣으세요.

![리뷰 링크 단계별 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058933873/original/QB3j9NV406CrZGGrHw_hZ5PhNhneE107XQ.jpeg?1763723464)

#### 2단계: SMS 요청 활성화

**평판 관리 → 설정 → SMS 요청**을 열고 우상단 스위치를 토글하여 자동 리뷰 문자를 활성화하세요. **체크인 후 언제 보낼지** 설정하고, **반복 간격**과 **최대 재시도 횟수**를 선택한 후, **새로 만들기** 또는 **SMS 템플릿 설정**을 사용해 아래 표시된 메시지를 관리하세요.

![SMS 활성화 단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058933920/original/gxWefKkRxYWGp630dnmpJmEt2GauEUvFPw.jpeg?1763723498)

#### 3단계: SMS 템플릿 추가

**새로 만들기**를 클릭하여 새 SMS 리뷰 요청을 구축하거나, **연필(편집)** 아이콘을 사용해 선택된 템플릿을 수정하세요. 여기서 생성하거나 편집한 템플릿이 목록에 나타나고 나중에 활성 또는 재시도 시퀀스에 할당할 수 있습니다.

![SMS 템플릿 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058937902/original/JkADEj50izgPa70Pve3V3O8pGUFYEZ-B_Q.png?1763725571)

#### 4단계: 템플릿 유형 선택

**새로 만들기**를 클릭한 후, 시작 방법을 선택하세요: **처음부터 새로 만들기** 또는 **미리 만들어진 템플릿에서 선택**. 선호하는 옵션 하단의 **선택(Select)**을 클릭하세요—완전한 제어를 원한다면 빈 페이지로 시작하거나, 더 빠르게 진행하려면 검증된 템플릿을 사용하세요.

![템플릿 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938037/original/6ufdGZ9VGsp7Sd_gom24_CQn2vBlfoyEPg.png?1763725586)

#### 5단계: 미리 만들어진 템플릿 선택

**SMS 템플릿 라이브러리**에서 **리뷰 요청(Request a Review)** 같은 미리 만들어진 옵션을 선택하세요(참조용 표시 문자 수 확인). **템플릿 편집(Edit Template)**을 클릭하여 커스터마이징을 위해 열고, 복사본을 조정하면서 {{reputation.review_link}} 토큰을 유지하세요.

![미리 만들어진 템플릿 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938158/original/2p9Gcm_rwylwfHoQt5GN06fRSC6AMuOFQg.png?1763725602)

#### 6단계: SMS 템플릿 커스터마이징

**템플릿 이름**을 입력하고, 선택적으로 **이미지와 함께 요청**을 활성화하여 이미지를 업로드하거나 링크하며, {{reputation.review_link}}를 사용해 메시지를 작성하세요. 오른쪽의 라이브 폰 미리보기를 확인한 후, **저장**을 클릭하여 템플릿을 저장하세요.

![SMS 템플릿 커스터마이징](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938272/original/0QeAG2m0_i5c6CJNuN-LoK2y27GC4heRVA.png?1763725619)

#### 7단계: 이메일 요청 활성화

**평판 관리 → 설정 → 이메일 요청**을 열고 우상단 토글을 켜서 자동 리뷰 이메일을 활성화하세요. 컨트롤을 사용해 체크인 후 발송 시점, 클릭할 때까지의 반복 간격, 최대 재시도 횟수를 설정한 후, **이메일 템플릿 설정** 또는 **새로 만들기**를 통해 템플릿을 관리하세요.

![이메일 요청 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938389/original/wwV6X0pG3zkFFBmww9-QoknrHLcSDpY3xQ.png?1763725650)

#### 8단계: 이메일 시퀀스 할당

**이메일 템플릿 설정**을 클릭하여 먼저 발송할 템플릿(**활성**)과 왼쪽 드롭다운에서 각 **재시도** 슬롯을 지원할 템플릿을 선택하세요. 필요시 오른쪽에서 제목을 검토하거나 편집한 후, **저장**을 클릭하여 시퀀스를 적용하세요.

![이메일 시퀀스 할당](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938399/original/4BPED3NN1OybzIvDJvd-5dbY709-4ozMsA.png?1763725667)

#### 9단계: 이메일 생성/가져오기

**새로 만들기**(드롭다운)를 사용하여 **새 템플릿 만들기** 또는 **템플릿 라이브러리에서 가져오기**로 이메일 요청을 만드세요. 기존 디자인을 수정하려면 템플릿 카드의 **⋯** 메뉴를 클릭하고 **템플릿 편집**을 선택하세요. 나중에 **이메일 템플릿 설정**을 통해 이를 할당할 수 있습니다.

![이메일 생성/가져오기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938411/original/Pn961HFj6HEg6tsZzG_RCNNeaB1IOamUmw.png?1763725685)

#### 10단계: 이메일 콘텐츠 디자인

드래그 앤 드롭 이메일 빌더를 사용해 왼쪽 **요소(Elements)** 패널에서 텍스트, 이미지, 버튼을 추가하세요. **리뷰 링크(Review Link)** 요소(왼쪽 하단)를 레이아웃으로 드래그하여 CTA가 설정된 리뷰 URL을 열도록 하고, 우상단의 **저장**을 클릭하세요.

![이메일 콘텐츠 디자인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058938476/original/vyrtAQYYaTlWHTHlJSSZdcqI83g8lMQCYg.png?1763725704)

---

## 자주 묻는 질문

**Q: 고객이 리뷰 링크를 클릭하면 어떻게 되나요?**

클릭이 감지되면 해당 채널의 반복 일정이 중단되어, 그 연락처에 대한 추가 재시도가 방지됩니다.

**Q: 리뷰 밸런싱과 커스텀 링크의 차이점은 무엇인가요?**

**밸런싱**은 연결된 리뷰 사이트(예: 구글) 간에 트래픽을 분배합니다. **커스텀 링크**는 모든 사람을 선택한 단일 목적지로 보냅니다.

**Q: SMS에서 리뷰 URL에 어떤 토큰을 사용해야 하나요?**

{{reputation.review_link}}를 사용하세요. **평판 관리 → 설정 → 리뷰 링크**에서 설정한 리뷰 링크를 자동으로 사용합니다.

**Q: 이메일에 여러 리뷰 목적지를 포함할 수 있나요?**

예. 이메일 빌더에서 **리뷰 링크** 요소를 사용할 수 있고, 일부 템플릿에서는 디자인이 지원하는 경우 여러 리뷰 버튼을 설정할 수 있습니다.

**Q: 재시도를 몇 번으로 설정해야 하나요?**

대부분의 팀은 2-3번의 재시도로 시작합니다. 적절한 횟수는 참여도, 업계 표준, 컴플라이언스 요구사항에 따라 다릅니다.

**Q: SMS에 이미지를 추가하면 비용이 바뀌나요?**

MMS로 전송될 수 있어 통신사 요금이 다를 수 있습니다. 메시징 제공업체의 요금을 확인하세요.

**Q: 구글 비즈니스 프로필을 연결해야 하나요?**

밸런싱을 사용해 리뷰를 구글로 라우팅하려는 경우에만 필요합니다. 다른 사이트나 자체 페이지를 선호한다면 **커스텀 링크**를 대신 설정하세요.

**Q: 수동 발송 없이 요청을 자동화할 수 있나요?**

예. 워크플로우에 **리뷰 요청** 액션을 추가하여 "체크인" 후와 같은 트리거에 따라 자동으로 발송할 수 있습니다.

---
*원문 최종 수정: Wed, 11 Feb, 2026 at 2:42 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*