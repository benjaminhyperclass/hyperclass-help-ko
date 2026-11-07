---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009492-slack-workflow-triggers-setup-filters-and-examples
번역일: 2026-11-06
카테고리: 44-신기능-2026
---

# Slack 워크플로우 트리거 — 설정, 필터, 예시

연결한 Slack 워크스페이스에서 활동이 생기면 하이퍼클래스 워크플로우를 시작하는 트리거예요. 요청을 담당 팀에 전달하거나, 채널에 새로 들어온 멤버를 환영하거나, 메시지·멘션·이모지 반응이 오면 팀에 알릴 때 쓸 수 있어요.

이 문서는 즉시(Instant) Slack 트리거 5개를 모두 다뤄요. **New Reaction Added**(새 반응 추가), **New Direct Message**(새 다이렉트 메시지), **User Invited to Channel**(채널에 사용자 초대됨), **New Mention**(새 언급), **New Message Posted to Channel**(채널에 새 메시지 게시됨)이에요. 워크플로우 빌더에서 5개 모두 **Premium**(프리미엄)으로 표시돼요.

## Slack 워크플로우 트리거란?

Slack 워크플로우 트리거를 쓰면 연결한 Slack 워크스페이스에서 특정 활동이 생길 때 하이퍼클래스 워크플로우가 자동으로 시작돼요. Slack 대화를 계속 지켜보지 않아도 들어온 요청에 응답하고, 새 팀원을 환영하고, 메시지 반응을 추적하고, 다른 팀에 알릴 수 있어요.

하이퍼클래스는 다이렉트 메시지, 채널 초대, 앱 멘션, 채널 메시지, 이모지 반응에 대한 즉시 Slack 트리거 5개를 제공해요. 각 트리거는 Premium 기능이며 워크플로우 빌더에서 바로 설정할 수 있어요.

Slack 트리거는 Slack에서 조건에 맞는 이벤트가 생기면 워크플로우를 시작해요. Slack 액션은 채널에 알림을 올리거나 다이렉트 메시지를 보내는 것처럼 작업을 실행해요. 둘을 함께 쓰면 Slack 채널과 팀 사이의 소통을 자동화할 수 있어요.

## Slack 워크플로우 트리거의 장점

Slack 워크플로우 트리거를 쓰면 채널을 계속 확인하지 않아도 대화와 요청에 대응할 수 있어요. Slack 이벤트를 하이퍼클래스 워크플로우에 연결하면 내부 소통을 간소화하고 반복적인 후속 작업을 자동화할 수 있어요.

- 요청 자동 전달: 누군가 다이렉트 메시지를 보내거나 Slack 앱을 @멘션하면 워크플로우를 시작해서, 알맞은 팀에 쉽게 알릴 수 있어요.
- 빠른 팀 온보딩: 사용자가 선택한 Slack 채널에 참여하면 환영 메시지나 온보딩 자료를 자동으로 보내요.
- 피드백 추적 개선: 메시지에 달린 이모지 반응을 보고 검토 알림이나 후속 절차를 시작해요.
- 팀 간 소통: 공유 요청 채널에 새 메시지가 올라오면 다른 팀에 알려요.
- 수동 확인 줄이기: 지원되는 Slack 이벤트에는 대화를 계속 확인하지 않아도 자동으로 대응해요.
- 유연한 워크플로우 자동화: Slack 트리거와 하이퍼클래스 워크플로우 액션을 조합해 팀에 맞는 자동화 프로세스를 만들어요.

## 사용할 수 있는 Slack 트리거

하이퍼클래스는 워크스페이스 활동 유형별로 즉시 Slack 트리거 5개를 제공해요. 알맞은 트리거를 고르면 원하는 Slack 이벤트가 생길 때만 워크플로우가 시작돼요.

| 트리거 | 시작되는 때 | 범위 |
| --- | --- | --- |
| [New Reaction Added](#new-reaction-added) | 선택한 채널의 메시지에 이모지 반응이 추가될 때 | 선택한 Slack 채널 |
| [New Direct Message](#new-direct-message) | 누군가 연결된 Slack 앱(봇)에 다이렉트 메시지를 보낼 때 | 연결된 Slack 앱(봇) |
| [User Invited to Channel](#user-invited-to-channel) | 사용자가 선택한 채널에 참여하거나 초대될 때 | 선택한 채널 |
| [New Mention](#new-mention) | Slack 앱(봇)이 추가된 채널에서 앱(봇)이 @멘션될 때 | 앱이 들어 있는 선택한 채널 |
| [New Message Posted to Channel](#new-message-posted-to-channel) | 선택한 공개 또는 비공개 채널에 새 메시지가 올라올 때 | 선택한 공개 또는 비공개 채널 |

{% hint style="warning" %}
중요: Slack 트리거는 Premium 워크플로우 기능이에요. 계정 설정과 사용 가능한 한도에 따라 Premium 실행에 사용 요금이 발생할 수 있어요. 자세한 내용은 '워크플로우 프리미엄 기능 활성화 및 리빌링 방법' 문서를 참고하세요.
{% endhint %}

## Slack 트리거 설정하기

1. **자동화 > 워크플로우**로 이동해서 설정할 워크플로우를 열어요.
2. **Add trigger**(트리거 추가)를 클릭하고 **Slack**을 검색한 다음, 지켜볼 이벤트를 선택해요.
3. Slack 워크스페이스에 맞는 **Connected account**(연결된 계정)를 선택해요. 연결된 계정이 없으면 먼저 Slack 연결 과정을 완료하세요.
4. **Workflow trigger name**(워크플로우 트리거 이름)은 기본값을 그대로 쓰거나 알아보기 쉬운 이름으로 바꿔요.
5. 트리거의 채널이나 필터를 설정해요. 채널 기반 트리거 4개는 채널을 꼭 선택해야 해요. New Direct Message에는 텍스트와 발신자 필터를 선택적으로 쓸 수 있어요. 자세한 내용은 아래 트리거별 설명을 참고하세요.
6. 이후 액션에서 Slack 이벤트 정보가 필요하면 아래 설명대로 **Map your trigger**(트리거 매핑)를 사용해요.
7. **Save trigger**(트리거 저장)를 클릭한 다음, 사용 목적에 맞는 워크플로우 액션을 추가해요.

**Add trigger**에서 Slack을 검색하면 사용할 수 있는 즉시 트리거 5개가 나와요.

![Add trigger에서 Slack을 검색한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084416075/original/hQk838CqaRanVH8eL5kha74FixYaxFY7yg.png?1793194291)

## 이벤트 데이터 매핑하고 워크플로우 테스트하기

매핑을 하면 Slack 이벤트의 메타데이터를 이후 액션의 커스텀 값에서 쓸 수 있어요. 액션을 설정할 때는 샘플 레코드로 반환된 필드를 사용하세요.

1. 선택한 트리거와 설정한 필터에 맞는 Slack 이벤트를 새로 만들어요. 아래 트리거별 설명에 테스트 이벤트 예시가 있어요.
2. **Map your trigger**에서 **Find new records**(새 레코드 찾기)를 클릭해요.
3. 반환된 레코드 중 하나를 매핑 기준으로 선택한 다음, 이후 워크플로우 액션에서 사용할 수 있는 트리거 값을 골라 써요.
4. 워크플로우를 켜기 전에 트리거와 액션을 검토해요. 실제 이벤트를 받을 준비가 되면 워크플로우를 게시하고, Slack에서 조건에 맞는 이벤트를 새로 만든 다음, **Execution logs**(실행 로그)에서 예상한 단계가 실행됐는지 확인해요.

반환되는 레코드가 없으면 연결된 계정, 채널, 필터를 확인하세요. 조건에 맞는 이벤트를 다시 만든 다음 **Find new records**를 다시 클릭해요.

아래 예시의 채널 이름은 설명을 위한 예시예요. 연결한 Slack 워크스페이스에 있는 채널을 선택하세요.

## New Reaction Added

**New Reaction Added** 트리거는 선택한 Slack 채널의 메시지에 이모지 반응이 추가되면 워크플로우를 시작해요.

설정 방법: 메시지 반응을 지켜볼 채널을 선택해요.

구성:

- **Connected account**: 워크스페이스에 연결된 Slack 계정을 선택해요.
- **Channel**(채널): 메시지 반응을 지켜볼 Slack 채널을 선택해요.
- **Map your trigger**: 조건에 맞는 반응 이벤트를 가져와서, 그 이벤트의 정보를 이후 워크플로우 액션에서 쓸 수 있게 해요.

![New Reaction Added 트리거의 워크플로우 트리거 이름, 필터, Map your trigger 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084326121/original/wBeV1blwPVfsqbuw8gtsRbB4_xsLq2jT4A.jpeg?1793113160)

*워크플로우 빌더의 New Reaction Added 설정 필드*

테스트 이벤트: 해당 채널의 메시지에 이모지 반응을 추가해요.

### 예시

팀이 #content-review 채널에서 요청을 검토해요. 메시지에 이모지 반응이 달리면 #review-updates 채널로 알림을 보내서 팀이 후속 조치를 할 수 있게 해요.

워크플로우 구성 예시:

1. 트리거: New Reaction Added  
   **Channel**: #content-review
2. 액션: **Slack Message**(Slack 메시지) 액션으로 #review-updates 채널에 알림을 보내요. 매핑된 트리거 레코드에서 필요한 정보를 추가하세요.

## New Direct Message

**New Direct Message** 트리거는 연결된 Slack 앱(봇)에 다이렉트 메시지가 오면 워크플로우를 시작해요.

설정 방법: Slack 앱(봇)에 온 DM을 감지해요. 메시지 텍스트나 발신자로 트리거를 제한하려면 **Add filters**(필터 추가)를 사용하세요.

선택 필터

- **Filter by text contains**(텍스트 포함 필터): 특정 문구가 들어 있는 DM에서만 트리거가 작동하도록 제한해요. 대소문자는 구분하지 않아요. Enter / Return 키를 누르면 문구가 추가돼요. 이 필터를 추가하면 텍스트를 꼭 입력해야 해요. 모든 메시지에 반응하게 하려면 필터를 제거하세요.
- **Sender**(발신자): **Add filters**에서 발신자 필터를 선택적으로 쓸 수 있어요.

![New Direct Message 트리거의 워크플로우 트리거 이름, 필터, Map your trigger 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084326776/original/kyqmYwK4WbFAQzyYe-weqPlf7XJzZGSMUA.jpeg?1793113387)

*워크플로우 빌더의 New Direct Message 설정 필드*

테스트 이벤트: 연결된 Slack 앱(봇)에 새 다이렉트 메시지를 보내요.

### 예시

팀원들이 Slack 앱에 직접 요청을 보내요. 새 DM이 오면 #internal-help 채널에 알려서 팀이 확인할 수 있게 해요.

워크플로우 구성 예시:

1. 트리거: New Direct Message
2. 액션: **Slack Message** 액션으로 #internal-help 채널에 알림을 올려요. 매핑된 트리거 레코드에서 관련 정보를 포함하세요.

## User Invited to Channel

**User Invited to Channel** 트리거는 선택한 Slack 채널에 사용자가 참여하거나 초대되면 워크플로우를 시작해요.

설정 방법: 새 멤버를 지켜볼 채널을 선택해요. 직접 참여한 경우와 초대받은 경우 모두 해당돼요.

![User Invited to Channel 트리거의 워크플로우 트리거 이름, 필터, Map your trigger 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084321262/original/Db8V2z40Gd475YJP6mWHs6Xf2scJf2HuAw.jpeg?1793110784)

*워크플로우 빌더의 User Invited to Channel 설정 필드*

테스트 이벤트: 사용자가 해당 채널에 참여하거나 초대되게 해요.

### 예시

팀원이 #new-starters 채널에 참여하거나 초대되면, 그 채널에 온보딩 자료 링크가 담긴 환영 메시지를 올려요.

워크플로우 구성 예시:

1. 트리거: User Invited to Channel  
   **Channel**: #new-starters
2. 액션: **Slack Message** 액션으로 #new-starters 채널에 환영 메시지를 올려요.

## New Mention

**New Mention** 트리거는 Slack 앱(봇)이 추가된 채널에서 앱(봇)이 @멘션되면 워크플로우를 시작해요.

설정 방법: Slack 앱(봇)을 채널에 추가한 다음, 트리거에서 그 채널을 선택해요. 메시지에서 앱 자체를 @멘션해야 해요.

![New Mention 트리거의 워크플로우 트리거 이름, 필터, Map your trigger 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084321356/original/hGRX00RQFliC1iEa2NBXxk3NiuiZGOaNSg.jpeg?1793110835)

*워크플로우 빌더의 New Mention 설정 필드*

테스트 이벤트: 해당 채널에서 Slack 앱을 @멘션하는 새 메시지를 올려요.

### 예시

팀이 도움이 필요할 때 #ops-requests 채널에서 Slack 앱을 @멘션해요. 이 트리거로 새 요청이 올 때마다 #ops-triage 채널에 알려요.

워크플로우 구성 예시:

1. 트리거: New Mention  
   **Channel**: #ops-requests
2. 액션: **Slack Message** 액션으로 #ops-triage 채널에 알림을 올려요. 매핑된 트리거 레코드에서 관련 정보를 포함하세요.

## New Message Posted to Channel

**New Message Posted to Channel** 트리거는 선택한 공개 또는 비공개 Slack 채널에 새 메시지가 올라오면 워크플로우를 시작해요.

설정 방법: 새 메시지를 지켜볼 공개 또는 비공개 채널을 선택해요.

![New Message Posted to Channel 트리거의 워크플로우 트리거 이름, 필터, Map your trigger 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084326811/original/zVIZIiwvlAsWkNw9NHfj3H3oQmBR1YDrNQ.jpeg?1793113409)

*워크플로우 빌더의 New Message Posted to Channel 설정 필드*

테스트 이벤트: 해당 채널에 새 메시지를 올려요.

### 예시

팀원들이 #service-requests 채널에 요청을 올려요. 새 메시지가 올라오면 #service-triage 채널에 알려서 팀이 확인할 수 있게 해요.

워크플로우 구성 예시:

1. 트리거: New Message Posted to Channel  
   **Channel**: #service-requests
2. 액션: **Slack Message** 액션으로 #service-triage 채널에 알림을 보내요. 매핑된 트리거 레코드에서 관련 정보를 포함하세요.

## 자주 묻는 질문

### 채널이 목록에 보이지 않아요.
채널 목록에는 연결된 Slack 사용자가 볼 수 있는 공개 채널과 비공개 채널이 나와요. 올바른 Slack 계정을 선택했는지, 그리고 이 사용자가 해당 채널에 접근할 수 있는지 확인하세요.

### 팀원끼리 주고받은 다이렉트 메시지로는 워크플로우가 시작되지 않아요.
New Direct Message는 Slack 앱(봇)에 보낸 메시지만 감지해요. 두 사람 사이의 대화는 이 트리거가 다루는 이벤트에 해당하지 않아요.

### 멘션을 해도 워크플로우가 시작되지 않아요.
앱이 선택한 채널에 추가되어 있는지, 새 메시지에서 앱 자체를 @멘션했는지 확인하세요. 워크플로우가 실제 이벤트를 받도록 켜져 있는지도 확인하세요.

### 샘플 레코드가 나오지 않아요.
선택한 트리거와 필터에 맞는 이벤트를 새로 만든 다음 **Find new records**를 다시 클릭하세요. 해당 트리거 설명에 나온 테스트 이벤트를 참고하세요.

### 이후 액션에서 Slack 이벤트 정보를 쓸 수 있나요?
네, 쓸 수 있어요. **Map your trigger**에서 레코드를 선택한 다음, 이후 액션에서 사용할 수 있는 트리거 값을 고르세요. 샘플 레코드로 실제 반환된 필드를 사용하세요.

### 알림이 계속 반복되지 않게 하려면 어떻게 하나요?
New Message Posted to Channel을 쓸 때는 워크플로우가 만든 Slack 알림을 지켜보는 채널과 다른 채널로 보내세요. 그러면 알림이 같은 워크플로우를 다시 시작하는 일을 막을 수 있어요.

### 이 트리거들은 Premium 기능인가요?
네, 맞아요. 워크플로우 빌더에서 5개 모두 Premium으로 표시돼요.
