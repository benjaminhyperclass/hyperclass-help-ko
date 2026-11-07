---
원문: /support/solutions/articles/155000004662-workflow-action-instagram-interactive-messenger
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Instagram Interactive Messenger(Instagram 인터랙티브 메신저)

워크플로우의 **Instagram Interactive Messenger**(Instagram 인터랙티브 메신저) 액션을 쓰면 버튼과 빠른 답장이 들어간 Instagram DM 대화를 자동화할 수 있어요. 이 문서에서는 액션이 하는 일, 액션을 찾는 위치, 각 구성 요소를 설정하는 방법, 실제 활용 예시와 운영 팁을 안내해요.

## Instagram Interactive Messenger 액션이란

**Instagram Interactive Messenger** 액션은 Instagram 댓글이나 다이렉트 메시지(DM)에 개인화된 DM으로 자동 응답해요. 직접 답장하지 않아도 대화형으로 느껴지는 자동 대화를 만들 수 있어요. 리드를 빠르게 모으거나, 자료를 공유하거나, 공개 댓글로 시작된 대화를 비공개 메시지로 이어 가고 싶을 때 특히 유용해요.

이 기능은 자동화와 유연한 설정을 함께 제공해요. 잠재 고객 육성, 오퍼 발송, 체크리스트 전달 등 목적에 맞게 메시지 템플릿, 첨부파일, 버튼, 빠른 답장으로 대화 흐름을 짤 수 있어요. 홍보 게시물에 댓글이 달렸을 때나 사용자가 먼저 DM을 보냈을 때 이 액션을 쓰면, 팔로워를 Instagram에서 마케팅 퍼널로 자연스럽게 안내하는 워크플로우를 만들 수 있어요.

## Instagram Interactive Messenger의 주요 이점

- 대규모 자동 응대: 수작업 없이 댓글이나 DM에 바로 답장해서, 팔로워가 빠르고 일관된 응답을 받을 수 있어요.
- Instagram에서 바로 전환 유도: 인터랙티브 버튼이나 빠른 답장으로 웹사이트 방문, 자료 다운로드, 통화 예약 같은 행동을 유도해요.
- 개인화된 사용자 경험: 템플릿, 커스텀 값, 트리거 링크를 활용해 연락처마다 맞춤 메시지를 보낼 수 있어요.
- 간편한 리드 수집: 게시물의 공개 대화에서 비공개 대화로 넘어가 정보를 수집하고 관계를 이어 갈 수 있어요.
- 팀의 시간 절약: 반복되는 응대는 워크플로우가 맡고, 팀은 더 가치 있는 일에 집중할 수 있어요.

## Instagram Interactive Messenger 워크플로우 액션 설정하기

### Workflow Builder 열기

**자동화 > 워크플로우**로 이동해 **Create Workflow**(워크플로우 만들기)를 누르거나 기존 워크플로우를 열어요. 그러면 **Workflow Builder**(워크플로우 빌더) 캔버스가 열려요.

![워크플로우 빌더 캔버스 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052931027/original/HfHfuSACaZ_4rV-uFbbThDnnG7YdBSqZ8g.png?1756823930)

### Instagram 트리거 추가하기

**+ Add Trigger**(트리거 추가)를 누르고 아래 중 하나를 선택해요.

- **Instagram Comment on Post**(Instagram 게시물 댓글): 팔로워가 Instagram 게시물에 댓글을 달았을 때 사용해요.
- **Customer Reply (Instagram)**(고객 답장(Instagram)): 연락처가 DM을 보내거나 DM에 답장했을 때 사용해요.

**Instagram Interactive Messenger** 액션을 쓰려면 이 트리거 중 하나가 꼭 필요해요. 다른 종류의 트리거를 쓰면 이 액션을 선택할 수 없어요.

### Instagram Interactive Messenger 액션 배치하기

워크플로우 캔버스에서 메시지를 보낼 위치의 **+** 를 누른 다음 **Actions > Communication > Instagram Interactive Messenger**를 선택해요. **Communication**은 '커뮤니케이션'이라는 뜻이에요.

![액션 목록에서 Instagram Interactive Messenger 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052938808/original/FaXS0Zb9fCvBdDiWEmi-NtnbnUwtA1EIMg.png?1756828000)

### 액션 이름 알아보기 쉽게 정하기

**Action Name**(액션 이름)에 이 단계를 설명하는 이름을 입력해요. 예를 들어 “IG DM – 리드 마그넷 안내 보내기”처럼 쓰면 복잡한 워크플로우에서도 쉽게 찾을 수 있어요.

### 답장 유형 선택하기

**Reply Type**(답장 유형)에서 아래 중 하나를 선택해요.

- **Reply to Comment via DM**(댓글에 DM으로 답장): 트리거가 새 댓글이고, 대화를 비공개로 이어 가고 싶을 때 선택해요.
- **Reply to DM**(DM에 답장): 받은 DM에 답장할 때 선택해요.

![Reply Type 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052938859/original/bFKUSQGiVmA2giMHiXbnLDcb2OO3odyyiA.png?1756828036)

### (선택) 템플릿 불러오기

재사용할 문구가 있으면 **Templates**(템플릿)에서 **마케팅 > 스니펫**에 저장해 둔 스니펫을 선택해요. 캠페인마다 말투와 규정 준수 문구를 일관되게 유지할 수 있어요.

![Templates에서 스니펫 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052938872/original/ulaSb-dAJug9e-PwGa6QLhL5yqBwQ7I2ow.png?1756828060)

### 메시지 작성하기

**Message > Body**(메시지 > 본문)에 DM 내용을 작성해요. 개인화에는 **설정 > 커스텀 값**에서 만든 커스텀 값을 쓰고, 클릭 추적이나 특정 URL 연결에는 **마케팅 > 트리거 링크**의 트리거 링크를 쓰세요.

{% hint style="info" %}
짧은 첫 문장으로 관심을 끌고, 명확한 행동 유도 문구를 하나만 넣어 보세요. DM 형식에 맞게 메시지는 간결하게 쓰는 것이 좋아요.
{% endhint %}

#### 첨부파일 추가하기 (필요한 경우)

파일을 올리려면 **Add Attachment**(첨부파일 추가)를, 호스팅된 파일을 붙이려면 **Add file through URL**(URL을 통해 파일 추가)을 사용해요. 체크리스트나 가이드를 보낼 때 첨부파일이 유용해요.

{% hint style="warning" %}
같은 메시지에 첨부파일이 있으면 빠른 답장을 추가할 수 없어요. 빠른 답장이 필요하면 여기서는 첨부파일을 빼거나, 이후 액션에서 첨부파일을 따로 보내세요.
{% endhint %}

![첨부파일 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052939161/original/3yyju_-M717Dc6ppCD0Sbi89kauy2_5Aaw.png?1756828264)

### 인터랙티브 요소 추가하기: Buttons 또는 Quick Replies

이 메시지에는 아래 중 **하나만** 선택해요.

- **Buttons**(버튼): 사용자가 눌러도 대화창에 계속 남아 있는 버튼이에요. 웹사이트 열기, 전화 걸기, 워크플로우의 다른 경로로 이동하기처럼 구체적인 결과를 유도할 때 좋아요. 사용자가 나중에 다시 눌러도 되는 고정된 선택지를 줄 때 사용하세요.
- **Quick Replies**(빠른 답장): 한 번 누르면 선택 후 사라지는 짧은 답변 버튼이에요. 체크리스트, 가격 정보, 데모를 원하는지 묻는 것처럼 실시간으로 대화를 이끌 때 좋아요. 대화 흐름을 가볍게 유지하면서 사용자의 의도를 파악할 수 있고, Instagram DM 화면도 복잡해지지 않아요.

{% hint style="info" %}
“통화 예약”, “사이트 방문”처럼 계속 쓸 수 있는 기능성 액션에는 **Buttons**를 쓰세요. “예/아니요”, “가격/데모/문서”처럼 구체적인 질문에는 **Quick Replies**를 쓰세요.
{% endhint %}

![Buttons와 Quick Replies 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052939270/original/ZtoGtsiKRzIhUGNuKknnG3GUP18tZM9rcw.png?1756828355)

### 분기 만들고 설정하기

**Button**(버튼) 중 **Perform Action**(액션 실행) 유형을 추가하거나 **Quick Reply**(빠른 답장)를 추가하면 워크플로우 분기가 자동으로 만들어져요. 각 분기는 사용자가 해당 선택지를 눌렀을 때 따라가는 경로예요. 분기 안에는 후속 메시지 보내기, 태그 추가, 파이프라인 단계 업데이트, 다른 워크플로우 실행 같은 액션을 더 넣을 수 있어요. 이런 분기 구조 덕분에 Instagram Interactive Messenger 액션으로 사용자의 선택에 따라 다른 경험을 만들 수 있어요.

#### 대기 시간과 기본 경로 설정하기

모든 메신저 액션에는 **Wait Step**(대기 단계)이 필요해요. 사용자가 버튼을 누르거나 빠른 답장을 선택할 때까지 시스템이 얼마나 기다릴지 정하는 단계예요. 기본값은 **1분**이고, 캠페인에 맞게 바꿀 수 있어요. 빠른 오퍼라면 몇 분, 응답이 느릴 것 같다면 몇 시간으로 설정해 보세요.

설정한 시간 안에 사용자가 반응하지 않으면 자동으로 **Default Timeout**(기본 시간 초과) 분기로 이동해요. 이 분기에서는 리마인더를 보내거나, “무응답” 같은 태그를 붙이거나, 대화를 자연스럽게 마무리할 수 있어요. 기본 경로를 잘 설계해 두면 사용자가 인터랙티브 요소에 반응하지 않아도 리드를 놓치지 않아요.

![대기 시간과 기본 경로 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052939318/original/_ZlqE4_ZvrfjYmscIBQ77-X5FqfM5oCixQ.png?1756828389)

### 저장, 게시, 테스트하기

**Save**(저장)를 누르고 워크플로우를 **Publish**(게시)해요. 그런 다음 실제와 같은 상황을 만들어 테스트해요. 키워드를 넣은 댓글을 달거나 테스트 DM을 보내 보세요. 아래 항목을 확인해요.

- 메시지가 올바른 **Reply Type**으로 전송되는지
- **Buttons**/**Quick Replies**가 의도한 대로 동작하는지
- 분기 안의 액션이 제대로 실행되는지

### 모니터링하고 개선하기

응답 수, 클릭 수(**마케팅 > 트리거 링크**), 이후 전환을 확인해요. 성과에 따라 메시지 문구, 버튼 이름, 분기 로직을 다듬어 보세요. 선택지를 줄이거나 이름을 더 명확하게 바꾸는 작은 조정만으로도 결과가 좋아지는 경우가 많아요.

## 자주 묻는 질문

### 워크플로우에서 Instagram Interactive Messenger 액션이 회색으로 비활성화돼 있어요.
이 액션은 워크플로우에 Instagram 전용 트리거가 있을 때만 사용할 수 있어요. 전용 트리거는 **Instagram Comment on Post**나 **Customer Reply (Instagram)** 같은 트리거예요. 이런 트리거가 없으면 이 액션을 선택할 수 없어요.

### Buttons와 Quick Replies는 어떻게 다른가요?
**Buttons**는 대화창에 계속 남아 있는 고정 액션이에요. 웹사이트 열기, 전화 걸기, 다른 워크플로우 경로로 이동하기 같은 작업을 할 수 있어요. **Quick Replies**는 선택하면 사라지는 임시 선택지라서 대화를 간결하고 깔끔하게 유지해 줘요.

### 이 액션에는 왜 Wait Step을 설정해야 하나요?
**Wait Step**은 사용자가 버튼이나 빠른 답장에 반응할 시간을 주기 위해 시스템이 잠시 기다리게 해요. 설정한 시간 안에 응답이 없으면 연락처가 자동으로 **Default Timeout** 분기로 이동하므로 리드가 방치되지 않아요.

### 알아 두어야 할 제한 사항이 있나요?
네. Instagram은 Meta의 **24시간 메시지 규칙**을 따라요. 사용자의 마지막 반응 후 24시간 이내에만 자동 DM을 보낼 수 있어요. 또 첨부파일이 있는 메시지에는 빠른 답장을 함께 넣을 수 없어요.
