---
원문: /support/solutions/articles/155000005874-how-to-edit-a-voice-ai-agents-voice
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# Voice AI 에이전트의 음성 바꾸기

Voice AI 에이전트의 음성을 카탈로그에서 고르거나 ElevenLabs에서 가져온 커스텀 음성으로 바꾸는 방법을 안내해요. 음성은 몇 번의 클릭만으로 바꿀 수 있어요.

목소리가 좋은 에이전트는 고객의 신뢰를 빠르게 얻어요. 하이퍼클래스의 확장된 Voice AI 음성 카탈로그와 ElevenLabs 커스텀 음성 가져오기를 쓰면 대상 고객에 맞게 말투, 언어, 스타일을 맞출 수 있어요. 이 문서에서는 카탈로그를 여는 방법, 커스텀 음성을 가져오는 방법, 에이전트의 음성을 바꾸는 방법을 알려 드려요.

## Voice AI 에이전트의 음성 설정이란?

Voice AI 에이전트가 어떤 목소리로 말할지 정하는 기능이에요. 여러 언어를 지원하는 카탈로그에서 고르거나, **ElevenLabs**에서 커스텀 음성을 가져올 수 있어요. 후보 음성을 **사용 중인 음성**과 비교해 들어 보고 가장 잘 맞는 음성을 적용하세요. 가져온 음성은 여러 서브 계정에서 다시 쓸 수 있어서 브랜드의 목소리를 일정하게 유지할 수 있어요.

몇 번의 클릭으로 언어, 억양, 말투를 대상 고객에 맞추면 대화가 자연스럽고 또렷하며 믿음직하게 들려요.

{% hint style="info" %}
Voice AI와 Voice AI 에이전트를 더 알아보려면 'AI Voice Agents Overview' 문서를 참고하세요.
{% endhint %}

---

## 음성을 직접 설정하면 좋은 점

- 브랜드 일치: 활기찬 목소리, 차분한 목소리, 신뢰감 있는 목소리, 친근한 목소리 중에서 회사 분위기에 맞는 것을 고를 수 있어요.
- 커스텀 가져오기: ElevenLabs의 독특한 음성을 가져와 우리 브랜드만의 소리를 만들 수 있어요.
- 빠른 미리듣기: 적용하기 전에 **재생** 버튼으로 샘플을 바로 들어 볼 수 있어요.
- 간편한 변경: 몇 초 만에 변경사항을 저장할 수 있어요. 따로 개발하거나 서비스를 멈출 필요가 없어요.
- 다국어 지원: 다양한 언어와 방언의 음성으로 대화를 현지화할 수 있어요.

---

## 음성 둘러보고 비교하기

Voice AI 에이전트의 음성을 찾을 때는 기본 제공 라이브러리부터 확인해 보세요. 확장된 카탈로그에는 54개 이상의 언어와 340개 이상의 고품질 음성이 있어서, 따로 작업하지 않아도 말투, 억양, 스타일을 쉽게 맞출 수 있어요. 아주 특별한 소리가 필요하다면 ElevenLabs에서 커스텀 음성을 가져올 수도 있어요.

### 사용 중인 음성 배너

**사용 중인 음성** 배너는 에이전트가 현재 쓰는 음성을 선택 창 맨 위에 고정해서 보여 줘요. 현재 음성을 기준으로 두고 다른 음성을 들어 볼 수 있어요. 카탈로그(**도서관**)나 가져온 음성(**내 음성**)과 비교할 때 활용하세요.

배너의 **재생**을 눌러 현재 음성을 들은 뒤, **도서관**이나 **내 음성**의 음성 카드에서 **재생**을 누르면 음성을 바로 비교할 수 있어요.

![사용 중인 음성 배너 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073407980/original/VSQMo5QZLNvBU1ZonZVm7wv715S1XCjx_A.png?1781122879)

### 필터

**도서관**의 필터와 검색을 쓰면 용도, 업종, 대상 고객에 가장 잘 맞는 음성을 찾을 수 있어요.

- **언어**: 지원하는 54개 이상의 언어로 카탈로그를 거를 수 있어요. 여러 언어를 지원하는 음성도 있어요. Voice AI의 언어에 대해서는 'Voice AI: 다국어 지원' 문서를 참고하세요.
- **억양**: 미국식, 영국식, 호주식처럼 특정 억양으로 좁혀 볼 수 있어요.
- **성별**: 전체 성별 또는 특정 성별로 거를 수 있어요.
- **고품질만**: 가장 자연스러운 음성만 보고 싶을 때 켜세요.
- **검색**: 음성 이름을 입력하면 바로 찾아가요.

![도서관 필터 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060255573/original/tnjLmeqHWvvaExv06wL1eKpDEhHYJn6MYQ.png?1765304680)

---

## 음성 모델 선택

음성뿐 아니라 에이전트가 쓸 음성 모델도 고를 수 있어요. 음성 품질, 응답 속도(지연 시간), 분당 비용 사이에서 균형을 맞출 수 있어요. 직접 고르기 어렵다면 **자동**으로 두세요. 에이전트의 언어에 가장 잘 맞는 모델이 자동으로 선택돼요.

음성 모델을 고르려면 에이전트 빌더에서 **Voice**(음성) 옆의 **Voice Model**(음성 모델)을 클릭한 뒤 모델을 선택하세요.

![음성 모델 선택 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070061307/original/N7HXKKT78L3UWkDPrXX-8MIelYzQtBKg8A.png?1777311664)

![음성 모델 선택 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070061312/original/TlG-QjowcOh083gELueUAKIvEjiVya1puQ.png?1777311679)

---

## ElevenLabs에서 커스텀 음성 가져오기 (내 음성)

ElevenLabs의 음성을 에이전시로 바로 가져올 수 있어요. 기본 카탈로그에 없는 독특한 말투나 언어, 스타일이 필요한 브랜드에 알맞아요. 가져온 음성은 여러 서브 계정에서 똑같이 다시 쓸 수 있어요.

ElevenLabs에서 음성을 가져오기 전에 아래 제한 사항을 꼭 확인하세요.

- 에이전시는 커스텀 음성을 최대 10개까지 추가할 수 있어요.
- 가져온 음성은 **내 음성**에 추가되고, 모든 서브 계정에 지정할 수 있어요.
- 에이전시 관리자만 새 음성을 가져올 수 있어요.

---

## Voice AI 에이전트의 음성 바꾸는 순서

에이전트의 음성은 전화를 받는 사람이 브랜드를 어떻게 느끼는지에 직접 영향을 줘요. 아래 순서대로 알맞은 음성을 찾고, 후보를 비교하고, 필요하면 커스텀 음성을 가져와 에이전트에 적용해 보세요.

#### 1단계: AI 에이전트 열기

1. 왼쪽 메뉴에서 **AI 에이전트**를 선택하세요.
2. 상단 메뉴에서 **음성 AI** 탭을 선택하세요.

![AI 에이전트 메뉴에서 음성 AI 탭을 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060162747/original/ZblN9p2tTrap3sao8tDL2KHNCJzZIgY8bw.png?1765228928)

#### 2단계: 에이전트 목록 열기

1. 상단의 두 번째 메뉴에서 **에이전트 목록**을 선택하세요.
2. 수정할 에이전트를 찾아 이름을 클릭하면 **에이전트 상세 정보**가 열려요.

{% hint style="info" %}
새 음성 에이전트를 만드는 경우에는 파란색 **+ 에이전트 만들기** 버튼을 클릭하세요. 새 Voice AI 에이전트를 만들 때도 음성을 고르는 방법은 같지만, 추가 설정이 필요해요. 새 Voice AI 에이전트 만들기에 대한 자세한 내용은 'Creating Voice AI Agents' 문서를 참고하세요.
{% endhint %}

![에이전트 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060162850/original/htyRkivZHRGA1HYzKL0dJKH9pPfF4RPMLQ.png?1765229347)

#### 3단계: 음성 선택 열기

사용 중인 음성의 이름을 클릭하면 **음성 선택** 창이 열려요.

![음성 선택 창을 여는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073407488/original/SCCLrjg31VfgTz2lbMofFYcBguPUinozoA.png?1781122294)

#### 4단계: 도서관에서 음성 추가하기

**도서관** 탭을 열면 전체 카탈로그에서 고를 수 있어요. 필터로 목록을 좁히고, 후보 음성을 들어 보세요. 선택 창을 벗어나지 않고 **사용 중인 음성** 배너와 바로 비교할 수 있어요.

마음에 드는 음성을 찾으면 음성 카드를 클릭해 선택하세요. 그런 다음 아래쪽의 파란색 **음성 저장** 버튼을 클릭하면 에이전트에 새 음성이 지정돼요.

ElevenLabs에서 커스텀 음성을 가져오려면 이 단계는 건너뛰고 5단계로 이동하세요.

![도서관에서 음성을 선택하고 음성 저장을 누르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073407685/original/RBvsNIidcMoAkYRWLylwP_zDIeHHKQCdpw.png?1781122405)

#### 5단계: 커스텀 음성 가져오기 (ElevenLabs)

ElevenLabs의 커스텀 음성을 가져와 Voice AI 에이전트에 쓰는 방법이에요.

{% hint style="warning" %}
에이전시는 커스텀 음성을 최대 10개까지 추가할 수 있어요. 커스텀 음성은 모든 서브 계정에서 함께 쓰여요.
{% endhint %}

1. **음성 선택** 화면에서 **내 음성** 탭으로 이동해 **커스텀 음성 추가**를 클릭한 뒤 **가져오기**를 클릭하세요.

   ![내 음성 탭에서 커스텀 음성 추가 후 가져오기를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073407733/original/8KPy9555ut9GJYQMJHv6jEfGmYhKmFVpaA.png?1781122472)
2. 팝업이 열리면 ElevenLabs에서 쓸 수 있는 모든 음성을 둘러볼 수 있어요. 검색과 카테고리로 음성을 찾고, **재생**을 클릭해 미리 들어 보세요.

   팝업의 링크를 클릭하면 ElevenLabs 전체 음성 라이브러리를 볼 수 있어요. ElevenLabs 음성 ID를 복사해 팝업의 검색창에 붙여 넣으면 해당 음성을 정확하게 가져올 수 있어요.

   ![ElevenLabs 음성을 검색하는 팝업 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060254144/original/_U6kk79j3RBpP4K7fUOk033JITs0m1qCtA.png?1765302841)
3. 가져올 음성을 찾았으면 선택하고 **음성 가져오기**를 클릭하세요. 음성이 **내 음성** 목록에 추가돼요. 아래쪽의 파란색 **음성 저장** 버튼을 클릭하면 에이전트에 새 음성이 지정돼요.

   가져온 음성을 쓸 수 있을 때까지 몇 초 걸릴 수 있어요.

   ![음성 가져오기를 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060254199/original/dM1TZiWOsn8GrCCYpUkmpD435Hojzx1TPQ.jpeg?1765302931)

#### 6단계: 음성 복제하기

복제한 음성을 Voice AI 에이전트에 쓰는 방법이에요.

{% hint style="warning" %}
에이전시는 커스텀 음성을 최대 10개까지 추가할 수 있어요. 커스텀 음성은 모든 서브 계정에서 함께 쓰여요.
{% endhint %}

1. **음성 선택** 화면에서 **내 음성** 탭으로 이동해 **커스텀 음성 추가**를 클릭한 뒤 **복제**를 클릭하세요.

   ![내 음성 탭에서 커스텀 음성 추가 후 복제를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073407733/original/8KPy9555ut9GJYQMJHv6jEfGmYhKmFVpaA.png?1781122472)
2. 팝업이 열리면 **음성 이름**을 입력하고, **결제 제공자**를 선택하고, **Audio Source**(오디오 소스)를 추가하거나 직접 녹음하세요. 모두 마쳤으면 **저장**을 클릭하세요.

   음성 복제에 대한 자세한 내용은 'Create and Use Voice AI Voice Cloning' 문서를 참고하세요.

   ![음성 복제 팝업 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073407854/original/VEt9rKghuFl-F7q3hr2BwXbcSSmuVquiEg.png?1781122604)

#### 6단계: 저장하고 테스트하기

파란색 **저장** 버튼을 클릭해 Voice AI 에이전트의 변경사항을 저장하세요. 그다음 **에이전트 테스트하기** 위젯으로 테스트 통화를 걸어 새 음성을 확인해 보세요.

Voice AI 에이전트 테스트에 대한 자세한 내용은 'Testing Voice AI Agents' 문서를 참고하세요.

![에이전트 테스트하기 위젯 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073407946/original/ht3fNw1TdX893blr-v-wj2V8u_GaeP6EmA.png?1781122794)

---

## 자주 묻는 질문

### 음성을 바꾸면 통화 스크립트, 의도, 응답에도 영향이 있나요?
아니요. 스크립트 로직은 그대로 유지되고 들리는 목소리만 바뀌어요.

### 영어가 아닌 음성도 쓸 수 있나요?
네. 지원하는 언어는 'Voice AI: 다국어 지원' 문서를 참고하세요.

### 음성을 바꿀 수 있는 횟수에 제한이 있나요?
아니요. 에이전트의 음성은 원하는 만큼 자주 바꿀 수 있어요. **저장**을 클릭하면 바로 적용돼요.

### 커스텀 음성을 가져오려는데 "커스텀 음성 추가"가 회색으로 비활성화돼 있어요.
에이전시에서 가져올 수 있는 음성 10개를 모두 사용했기 때문이에요. 가져온 음성은 삭제할 수 없어서, 한도에 도달하면 이 버튼이 비활성화돼요. 이미 가져온 음성은 **내 음성**에서 계속 선택할 수 있고, **도서관**의 음성도 쓸 수 있어요.

### 내 음성 검색창에 음성 ID를 입력했는데 ElevenLabs 음성이 나타나지 않아요.
ElevenLabs 음성 ID가 완전하고 올바른지 확인하세요. 그리고 에이전시 관리자 권한이 있는지도 확인하세요. ElevenLabs 음성을 가져오려면 이 권한이 필요해요. **커스텀 음성 추가** 버튼이 회색으로 비활성화돼 있다면 에이전시의 10개 한도에 도달한 것이고, ID로 검색하는 기능도 쓸 수 없어요.

### 이 음성들은 아웃바운드와 인바운드 음성 에이전트 모두에서 쓸 수 있나요?
네. 새 음성은 아웃바운드와 인바운드 음성 에이전트 모두에서 쓸 수 있어요.

### 새 음성을 쓰려면 추가 비용을 내야 하나요?
아니요. 새 음성은 음성 에이전트를 업그레이드한 모든 사용자에게 포함돼 있어요.
