---
원문: /support/solutions/articles/48001238247-guide-to-slack-workflow-action
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Slack 프리미엄 액션 가이드

**Slack** 프리미엄 워크플로우 액션을 쓰면 Slack 채널이나 사용자에게 메시지를 자동으로 보낼 수 있어요. 이 문서에서는 액션이 무엇인지, 어떤 이벤트가 있는지, 이벤트별로 어떻게 설정하는지 알려 드려요.

액션에는 이벤트가 세 가지 있어요. 사용자에게 메시지 보내기, 비공개 채널에 메시지 보내기, 공개 채널에 메시지 보내기예요.

{% hint style="info" %}
요금제와 상관없이 모든 에이전시(월 $97, $970, $297, $2970, $497, $4970 요금제)가 하이퍼클래스 프리미엄 트리거 & 액션을 쓸 수 있어요.

- 에이전시 설정에서 프리미엄 액션 & 트리거를 켜면 기존 서브 계정과 새 서브 계정 모두 100회 무료 실행이 제공돼요.
- 기존 서브 계정에서 실행 비용이 쌓이지 않게 하려면, 에이전시 화면에서 서브 계정마다 리빌링(rebilling)을 직접 켜야 해요.
- **SaaS 구성기**에서 프리미엄 액션을 켜 두면, 새로 만들어지는 서브 계정은 하이퍼클래스 프리미엄 액션 & 트리거에 자동으로 등록돼요. 에이전시가 따로 할 일은 없어요.
{% endhint %}

## Slack 프리미엄 액션이란?

Slack 프리미엄 워크플로우 액션은 팀 협업 도구인 Slack에서 메시지 전달을 자동화하는 기능이에요. Slack 워크스페이스의 특정 사용자, 비공개 채널, 공개 채널에 원하는 메시지를 보낼 수 있어요. 필요에 따라 알림을 설정하고 예약할 수 있어서 소통을 빠뜨리지 않게 도와줘요.

액션에는 이벤트가 세 가지 있어요.

- 사용자에게 메시지 보내기: 메시지를 받을 사람을 네 가지 방법 중에서 골라요. **Assigned User**(할당된 사용자), **Custom Email**(사용자 정의 이메일), **Internal User**(내부 사용자), **Slack User**(Slack 사용자)가 있어요. 방법마다 받는 사람을 정하는 방식이 달라서, 상황에 맞게 정확하게 전달할 수 있어요.
- 비공개 채널에 메시지 보내기: 워크스페이스의 비공개 채널을 골라 메시지를 보내요. 이 메시지는 Slack 연동을 만든 사용자가 직접 보낸 것처럼 보여요. 선택한 팀원끼리 안전하게 소통할 수 있어요.
- 공개 채널에 메시지 보내기: 워크스페이스의 공개 채널을 골라 메시지를 보내요. 워크스페이스 구성원 모두가 내용을 볼 수 있어요.

## 이런 팀에게 유용해요

Slack으로 소통하고 협업하는 조직과 팀이라면 이 액션이 도움이 돼요. 메시지와 알림을 자동으로 보내서 워크스페이스 안의 정보 흐름을 매끄럽게 해 줘요. 활용 예시는 다음과 같아요.

- 프로젝트 관리: 새 작업이 할당되거나, 프로젝트 마감이 다가오거나, 작업이 완료되면 팀원에게 자동으로 알려요. 모두가 자기 역할을 알고 일정에 맞춰 움직일 수 있어요.
- 영업·마케팅: 새 리드, 기회, 성사된 딜을 영업팀에 알려서 빠르게 대응하게 해요. 마케팅팀은 캠페인 성과, 콘텐츠 게시, 소셜 미디어 반응에 대한 알림을 받을 수 있어요.
- 고객 지원: 새 지원 티켓이 만들어지거나, 상위 단계로 넘어가거나, 해결되면 지원팀에 자동으로 알려요. 빠른 응답과 효율적인 문제 해결에 도움이 돼요.
- 인사: 신규 입사자 온보딩, 교육, 성과 평가, 정책 변경 같은 소식을 인사 담당자와 관련 팀원에게 알려요.
- IT·개발: 새 버그가 보고되거나, 시스템 장애가 생기거나, 소프트웨어 업데이트가 배포되면 IT·개발팀에 알려요. 문제에 빠르게 대응하고 시스템을 안정적으로 유지할 수 있어요.
- 전사 공지: 중요한 소식, 업데이트, 알림을 공개 채널로 조직 전체에 공유해요.

## 주요 장점

Slack으로 소통하고 협업하는 조직과 팀은 Slack 프리미엄 워크플로우 액션으로 다음과 같은 장점을 얻어요.

- 하나의 수신함: 여러 시스템 이벤트와 알림을 Slack으로 모으면, 팀원이 확인해야 할 내용을 한곳에서 볼 수 있어요.
- 책임감 향상: 작업 할당, 업데이트, 마감 알림이 자동으로 가면 팀원이 맡은 일을 더 책임감 있게 챙기게 돼요. 전체 성과와 책임 의식도 좋아져요.
- 실시간 업데이트: 중요한 이벤트나 업데이트를 바로 알림으로 받아서 빠르게 대응하고 데이터에 기반해 결정할 수 있어요.
- 확장성: 조직이 커지면서 필요가 바뀌어도 빠르게 맞춰 쓸 수 있어요. 팀이 늘어도 소통이 효율적으로 유지돼요.

## Slack 액션 설정하기

### 사용자에게 직접 메시지 보내기

이벤트를 **Send Direct Message to User**(사용자에게 직접 메시지 보내기)로 선택하면 받는 사람을 정하는 방법이 네 가지 나와요.

- **Assigned User**(할당된 사용자): 연락처에 할당된 사용자예요.
- **Custom Email**(사용자 정의 이메일): Slack 사용자와 일치하는 이메일을 직접 입력해요.
- **Internal User**(내부 사용자): 서브 계정에 있는 사용자예요.
- **Slack User**(Slack 사용자): Slack 워크스페이스 사용자를 이름으로 바로 검색해요.

#### Assigned User

연락처에 할당된 사용자에게 알림을 보낼 때 써요. 연락처에 할당된 사용자의 이메일(**설정 > 스태프 관리 > 사용자 정보**)로 Slack 사용자를 찾아요.

![Assigned User 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043882521/original/qDbHeOIN8eGtShrDbIKb-Qdkk274cdCbCg.png?1742863333)

#### Custom Email

받는 사람이 상황에 따라 달라질 때 써요. 입력한 이메일과 일치하는 Slack 사용자를 찾아서 알림을 보내요.

받는 사용자를 미리 정해 둘 수 없는 경우에 알맞아요. 이메일을 직접 입력하거나 **custom variable picker**(커스텀 변수 선택기)에서 변수를 골라 넣으세요.

#### Internal User

서브 계정 사용자 중 한 명에게 메시지를 보낼 때 써요. 비즈니스의 특정 영역을 맡은 사용자에게 알림을 보내는 용도로 많이 써요. 예를 들어 기회가 고객전환성공 상태가 되면 재무 책임자에게 소식을 보낼 수 있어요. 선택한 내부 사용자의 이메일로 Slack 사용자를 찾아요.

![Internal User 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043882541/original/IBK7EGuhOxyzZsR_5fFfFxBLGeuDqc-HpA.png?1742863436)

#### Slack User

말 그대로예요. 워크스페이스의 Slack 사용자 누구에게나 직접 메시지를 보낼 수 있어요.

{% hint style="info" %}
Slack은 한 번에 가져올 수 있는 사용자 수를 제한해요. 이름을 입력해도 사용자가 보이지 않으면 **Load More**(더 보기) 버튼을 누르세요. 원하는 사용자를 찾을 때까지 계속 검색해요. 사용자가 목록 맨 아래에 있으면 **Load More**를 여러 번 눌러야 할 수 있어요. 사용자가 1,000명을 넘는 워크스페이스에만 해당해요.
{% endhint %}

![Slack User 검색 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043882553/original/OIeh4on5XsyhM70sh01x1o4nNI7FTwPaLw.png?1742863500)

#### Message Content

**Message Content**(메시지 내용)에 사용자에게 보낼 메시지를 입력하세요. 서식 옵션은 [Slack 서식 안내](https://api.slack.com/reference/surfaces/formatting)에서 확인할 수 있어요.

변수 선택기를 쓰면 연락처 정보나 CRM 관련 정보를 메시지에 넣을 수 있어요.

![Message Content 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043882609/original/paYnKdzTJ0bTdHmalMcDfFUgiav2hFNstg.png?1742863676)

---

### 공개 채널에 메시지 보내기

이벤트를 **Send Public Channel Message**(공개 채널에 메시지 보내기)로 선택하면, 메시지를 보낼 공개 채널을 골라야 해요.

#### Choose a Public Channel

메시지를 보낼 채널을 선택하세요.

![공개 채널 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043882693/original/wSDJJnkOVvzREzqtMXHQR7oKPKOC06Wvyw.png?1742864025)

{% hint style="info" %}
Slack은 한 번에 가져올 수 있는 공개 채널 수를 제한해요. 이름을 입력해도 원하는 채널이 보이지 않으면 **Load More** 버튼을 누르세요. 원하는 채널을 찾을 때까지 계속 검색해요. 채널이 목록 맨 아래에 있으면 **Load More**를 몇 번 눌러야 할 수 있어요. 채널이 1,000개를 넘는 워크스페이스에만 해당해요.
{% endhint %}

![공개 채널 더 보기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294307768/original/3nQ93eRxwacdxiKmKeXGGafgevwEwA1oow.png?1682418614)

#### Message Content

**Message Content**에 공개 채널로 보낼 메시지를 입력하세요. 서식 옵션은 [Slack 서식 안내](https://api.slack.com/reference/surfaces/formatting)에서 확인할 수 있어요.

변수 선택기를 쓰면 연락처 정보나 CRM 관련 정보를 메시지에 넣을 수 있어요.

![공개 채널 Message Content 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043882570/original/6lhDwYnE45Ty0gnADP4pXG3PyJHYSVTceg.png?1742863607)

---

### 비공개 채널에 메시지 보내기

이벤트를 **Send Private Channel Message**(비공개 채널에 메시지 보내기)로 선택하면, 메시지를 보낼 비공개 채널을 골라야 해요.

#### Choose a Private Channel

메시지를 보낼 채널을 선택하세요.

![비공개 채널 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043882715/original/qevuIfaa_Ib8RuxSwomPjWaxX8vNY_MdOQ.png?1742864193)

{% hint style="warning" %}
비공개 채널로 보내는 메시지는 봇이 아니라 Slack 연동을 만든 사용자의 이름으로 전송돼요. 그래서 사용자가 직접 보낸 것처럼 보여요.

Slack은 한 번에 가져올 수 있는 비공개 채널 수를 제한해요. 이름을 입력해도 원하는 채널이 보이지 않으면 **Load More** 버튼을 누르세요. 원하는 채널을 찾을 때까지 계속 검색해요. 채널이 목록 맨 아래에 있으면 **Load More**를 몇 번 눌러야 할 수 있어요. 채널이 1,000개를 넘는 워크스페이스에만 해당해요.
{% endhint %}

#### Message Content

**Message Content**에 비공개 채널로 보낼 메시지를 입력하세요. 서식 옵션은 [Slack 서식 안내](https://api.slack.com/reference/surfaces/formatting)에서 확인할 수 있어요.

변수 선택기를 쓰면 연락처 정보나 CRM 관련 정보를 메시지에 넣을 수 있어요.

![비공개 채널 Message Content 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043882703/original/fGX2psypfP3GvN2NOpEkC7_qfjm8LDEykA.png?1742864158)

---

## 자주 묻는 질문

### 이 액션으로 Slack 메시지를 보낼 때마다 요금이 부과되나요?

네, Slack 프리미엄 액션은 실행할 때마다 요금이 부과돼요. 다만 기능을 켜면 계정마다 100회 무료 실행이 제공돼요.

### 드롭다운에 Slack 사용자나 채널이 보이지 않으면 어떻게 하나요?

**Load More** 버튼을 눌러 Slack 워크스페이스를 더 깊이 검색하세요. 사용자나 채널이 1,000개를 넘는 워크스페이스에서는 여러 번 더 불러와야 할 수 있어요.

### 리빌링을 켜지 않고도 Slack 프리미엄 액션을 쓸 수 있나요?

무료 실행 횟수 안에서만 쓸 수 있어요. 그 이후에는 서비스가 중단되지 않도록 해당 서브 계정에서 리빌링을 켜야 해요.

### Slack 메시지에 사용자 정보를 자동으로 넣을 수 있나요?

네. 변수 선택기를 쓰면 연락처 정보, 딜 데이터, 사용자 정보를 Slack 메시지에 바로 넣을 수 있어요.

### 비공개 채널로 보낸 메시지는 봇이 보낸 것으로 표시되나요?

아니요. 비공개 채널 메시지는 봇이 아니라 Slack 연동을 설정한 사용자의 이름으로 전송돼요.
