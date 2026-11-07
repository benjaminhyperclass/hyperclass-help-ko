---
원문: /support/solutions/articles/48001236572-eliza-agent-platform-introduction-and-faqs
번역일: 2026-11-06
카테고리: 22-Eliza
---

# Eliza 에이전트 플랫폼 소개와 자주 묻는 질문

Eliza 에이전트 플랫폼은 에이전시가 리드에게 빠르게 응답하고 고객으로 전환하도록 돕는 메시징 플랫폼이에요. 이 문서에서 플랫폼의 기능을 간단히 소개하고, 사용하면서 자주 나오는 질문에 답해 드려요.

## Eliza 에이전트 플랫폼이란?

Eliza 에이전트 플랫폼은 에이전시가 리드를 고객으로 전환하도록 돕는 메시징 플랫폼이에요. 크게 세 가지 기능이 있어요.

- **리드에게 빠르게 응답해요.** 고객사의 리드에게 바로 답할 수 있어서 응답이 늦어 리드를 놓치는 일을 줄여 줘요.
- **리드 육성 과정을 확장할 수 있어요.** 많은 리드를 감당하면서 고객 전환까지 효율적으로 관리하는 체계를 만들 수 있어요.
- **예약 흐름을 간소화해요.** FAQ 설정과 에이전트 구성을 직접 조정할 수 있어서, 상담 담당자가 예약 과정을 관리하고 문의에 실시간으로 답하기 쉬워요.

Eliza 에이전트 플랫폼에는 대화형 봇 기능이 없어요. 대화로 예약을 잡아 주는 봇이 필요하다면 이 플랫폼의 PRO 요금제에서 사용할 수 있어요.

에이전시 계정 안에서 고객에게 사람이 직접 이어받는(휴먼 롤오버) 체계를 제공하고 싶은 에이전시에 잘 맞아요. 리드를 확장 가능하고 효율적으로 관리할 수 있어서 전환율을 높이는 데 도움이 돼요.

Eliza 에이전트 플랫폼 서비스 구매는 하이퍼클래스 고객지원에 문의하세요.

---

## 자주 묻는 질문

### Eliza 에이전트 플랫폼에서 커스텀 값 user.name은 어떻게 동작하나요?

- 연락처에 담당 사용자가 지정되어 있고 워크플로우나 Eliza에서 `user.name`을 쓰면, 담당 사용자의 이름으로 바뀌어요. 하지만 하이퍼클래스 메인 앱의 **대화** 화면에서 같은 템플릿을 쓰면, 담당 사용자가 있든 없든 로그인한 사용자의 이름이 들어가요.
- 연락처에 담당 사용자가 없으면 워크플로우와 Eliza에서는 `user.name`이 빈 값으로 바뀌어요.
- 그래서 Eliza에서 `user.name`에 올바른 값이 들어가게 하려면, 하이퍼클래스에서 해당 연락처에 담당자를 지정해 두어야 해요. 그래야 Eliza(와 워크플로우)가 그 값을 가져갈 수 있어요.
- 가끔 Eliza에서 **+Assigned To**(담당자 지정) 링크가 보이지 않을 수 있어요. 이럴 때는 메인 앱에서 API 키를 새로 고침한 뒤, 이 서브 계정에 새 키를 사용하세요.

### 수신 메시지가 없거나 전화만 걸어온 연락처는 Eliza로 어떻게 가져오나요?

연락처가 수신 메시지를 보내지 않거나 수신 통화만 걸어온 경우에는 Eliza로 자동으로 들어오지 않아요. 이럴 때는 워크플로우의 **Send to Eliza**(Eliza로 보내기) 액션으로 연락처를 Eliza에 보내세요.

**Send to Eliza 워크플로우 액션**

조건에 맞는 연락처를 대상으로 **Send to Eliza** 액션을 설정해 두면, 이후 과정은 플랫폼이 자동으로 처리해요.

Eliza로 들어오는 리드에 **Send to Eliza** 태그를 붙이도록 설정해 두었다면, 연락처를 보내기 전에 그 태그도 함께 붙어요. 이 태그를 붙이지 않아도 액션은 동작해요.

![Send to Eliza 워크플로우 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290277854/original/zmH2Xs3HSvlF4NySnMbkMbaZ0AFDNyF44A.png?1680197106)

**Eliza 에이전트 플랫폼에서 확인하기**

**Send to Eliza** 워크플로우 액션으로 Eliza에 들어온 연락처에는 아래와 같이 타이머 아이콘이 표시돼요. ![타이머 아이콘이 표시된 연락처](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290278728/original/OwTeg-3dBKAlY8mXy9-7i60Sj3Grm8Gc2A.png?1680197517)

**Send to Eliza** 워크플로우 액션으로 보낸 연락처만 따로 육성하고 싶다면 해당 대화만 필터링할 수 있어요. **Sent to Eliza**(Eliza로 전송됨) 옵션을 선택하고 **이동**을 클릭하면, 워크플로우 액션으로 보낸 대화만 볼 수 있어요.![Sent to Eliza 필터 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290280129/original/TPbfeD5h2OG5hlWzjYabXe5FPm6PPE28uA.png?1680198050)

### 하이퍼클래스에는 대화가 보이는데 Eliza에는 들어오지 않아요

Eliza에는 수신 메시지만 자동으로 들어와요.

- 수신 통화는 아직 지원하지 않아서 Eliza로 전달되지 않아요. 수신 통화 관리 기능을 준비 중이고, 2022년 상반기 중 제공할 예정이에요.
- 수신 통화를 Eliza로 보내 리드를 육성하고 싶다면 워크플로우의 **Send to Eliza** 액션을 사용하세요. 자세한 내용은 위의 FAQ "수신 메시지가 없거나 전화만 걸어온 연락처는 Eliza로 어떻게 가져오나요?"를 참고하세요.

Eliza에 있는 대화 기록의 감사 로그를 확인하려면 다음 순서로 진행하세요.

1. **검색 > 연락처**로 이동해요.
2. 연락처를 선택해요.
3. **감사 로그** 버튼을 클릭해요.

이 연락처가 Eliza에 들어온 적이 있다면 대화 기록의 감사 로그가 표시돼요.

### Eliza 에이전트 플랫폼에서 API 키는 어떻게 업데이트하나요?

API 키 업데이트 방법은 하이퍼클래스 고객지원에 문의하세요.

### 통화에서 즉시 전환과 웜 트랜스퍼는 어떻게 하나요?

#### 즉시 전환

**즉시 전환**(Blind Transfer)은 상대 상담원이 전화를 받을 때까지 기다리지 않고, 발신자를 다른 내선번호나 링그룹(대기열)으로 바로 넘기는 방식이에요. 안내 없이 곧바로 대상 번호로 통화를 전환해요.

1. 전화 아이콘을 클릭해 리드에게 발신 통화를 시작해요.

   ![전화 아이콘을 클릭해 발신 통화를 시작하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290282661/original/BGEYxIy7PQMIvs-U_zTE07nO9ImgCzNvrA.png?1680199220)

2. 통화가 진행 중이면 대화 페이지 맨 위에 안내 메시지가 표시돼요.

   ![통화 중 대화 페이지 상단에 표시되는 안내 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290282879/original/cl4bI_W7IFgKIEzTOg3rPeY8pLBvBN9vqw.png?1680199335)

3. 팝업에서 다이얼러 아이콘 옆의 아래쪽 화살표를 클릭해요.
4. **즉시 전환**을 클릭해요.

   ![즉시 전환 메뉴 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290283562/original/cGw3zjRegHF2G_leIl3MVV1bssij5mx10A.png?1680199594)

5. 표시된 목록에서 하이퍼클래스 팀 구성원을 선택해요.
6. 통화를 넘길 팀 구성원을 선택하고 **Call & Disconnect**(전화 걸고 연결 해제)를 클릭해요.

이미 하이퍼클래스 팀에 등록된 번호로만 전환할 수 있어요. 새 구성원을 추가하려면 하이퍼클래스에 로그인해서 전화번호와 함께 새 팀 구성원을 만드세요.

다른 Eliza 에이전트가 이 고객에게 전화하게 하려면 **검색 > 연락처**에서 그 에이전트에게 대화를 전환하세요. 다른 Eliza 에이전트에게 통화를 바로 전환하는 기능도 곧 제공할 예정이에요.

![다른 Eliza 에이전트에게 대화를 전환하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290284237/original/90SL7IkChGM-QR2vnFWhM0qh1djmdz51RQ.png?1680199792)

#### 웜 트랜스퍼

**웜 트랜스퍼**(Warm Transfer)는 접수 담당자가 통화를 넘기기 전에 해당 상담원과 먼저 이야기하는 방식이에요. 발신자가 요청한 내선번호에 통화 전환이 들어온다는 사실을 미리 알려요. 보통 상담 담당자가 원하는 내선번호로 전화를 거는 동안 발신자는 대기 상태가 돼요.

1. 연락처에게 발신 통화를 걸어요.

   ![연락처에게 발신 통화를 거는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290284464/original/KP91iRzUaj4p-o582uM6Re9ZS5cOTeGfEw.png?1680199872)

2. 페이지 상단에 나타나는 팝업에서 **웜 트랜스퍼**를 선택해요.

   ![팝업에서 웜 트랜스퍼를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290285574/original/M49LxiFS7NuAaVsnRlhhIL9wcFIYnK_LJg.png?1680200267)

3. 통화를 웜 트랜스퍼할 번호를 선택하고 **Call and Hold**(전화 걸고 대기)를 클릭해요.

   ![전화번호를 선택하고 Call and Hold를 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290285746/original/AZ-QQpRwFtJF7KtohqfZRWbxisoWAkk5bQ.png?1680200344)

4. 시스템이 두 번째 상담원이 전화를 받을 때까지 기다려요.

   ![두 번째 상담원의 응답을 기다리는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290285805/original/mFvN2-naURLU1_ygBnHeI5NUIOiLf0YoGA.png?1680200365)

5. 두 번째 상담원이 전화를 받으면 **Patch Call**(통화 연결)을 클릭해 세 번호를 한 회의로 연결해요.
6. 빨간색 **Drop Off**(나가기) 버튼을 눌러 회의에서 나와요. 그러면 연락처와 두 번째 상담원이 이어서 통화할 수 있어요.

   ![Drop Off 버튼으로 회의에서 나가는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290285949/original/2fANLYcMpyBemclwowS5O4gGxcd8-lM5sQ.png?1680200423)

#### 문제 해결

시스템이 불안정하면 브라우저가 마이크에 접근할 수 있는지 확인하고 페이지를 새로 고치세요. 그래야 Twilio와의 연결이 제대로 이어져요.

![브라우저 마이크 접근 확인 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290286221/original/XXfs03-cg7pATtpKn67NwpvO-FJiRUx7JA.png?1680200540)

![브라우저 마이크 접근 확인 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290286374/original/OEyUVqeTWhTUKTQqfzMs4ZDhVd56MNlTnA.png?1680200606)

### 연락처에 예약이 만들어져도 채팅 대기열에서 빠지지 않아요. 연락처가 빠지게 하려면 태그 등으로 따로 해야 할 일이 있나요?

예약이 만들어졌다고 해서 대화가 끝난 것인지는 시스템이 알 수 없어요. 그래서 대화를 열린 상태로 유지해요. 상담 담당자가 **End Chat**(채팅 종료)을 클릭하면 대화를 닫을 수 있어요. 더 지정할 처리 결과(disposition)가 없다면 **Close without a disposition**(처리 결과 없이 닫기) 버튼을 선택해 대화를 닫으세요.

### 서브 계정의 설정에서 Eliza 서비스 탭이 보이지 않아요

![서브 계정 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290287736/original/Z4U7d0EG-pjPhhVNMxrMJslWHQOkPr3hvA.png?1680201231)

아래 조건을 확인해 보세요.

- 해당 서브 계정이 Eliza 에이전트 플랫폼의 계정에 추가되어 있는지 확인해요.
- **설정 > Eliza 서비스** 탭에 접근해야 하는 사용자의 이메일 주소가 그 서브 계정의 관리자 또는 사용자로 추가되어 있어야 해요.
- 같은 이메일 주소에 Eliza 서비스 권한이 켜져 있어야 해요. 그래야 **설정 > Eliza 서비스** 탭에서 FAQ를 편집하고, **Eliza bypass tag**(Eliza 우회 태그)와 **Send to Eliza** 태그를 설정할 수 있어요.
