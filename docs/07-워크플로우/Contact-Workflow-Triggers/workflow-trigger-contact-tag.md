---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Contact Workflow Triggers
---

# 워크플로우 트리거 - 연락처 태그

#### 이 가이드는 Hyperclass의 연락처 태그 워크플로우 트리거에 대해 설명합니다. 연락처에 태그가 추가되거나 제거될 때 워크플로우를 자동화하는 방법을 알아보세요. 설정 방법, 고급 활용 사례, 문제 해결 방법을 다룹니다.

### 목차

- 연락처 태그 워크플로우 트리거란?
- 연락처 태그 트리거의 주요 장점
- 연락처 태그 트리거 설정 방법
- 사용 예시
- 고급 활용 사례
- 일반적인 오류 및 문제 해결
- 관련 가이드
- 자주 묻는 질문

### 연락처 태그 워크플로우 트리거란?

연락처 태그 워크플로우 트리거는 Hyperclass에서 연락처에 태그가 추가되거나 제거될 때마다 워크플로우를 자동 실행하는 기능입니다. 태그는 연락처에 붙이는 라벨로, 고객을 정리하고 분류하며 그들의 특성이나 행동에 따라 적절한 액션을 취할 수 있게 해줍니다.

예를 들어, "신규 고객" 태그가 추가되면 자동 환영 이메일을 발송하고, "리드" 태그가 제거되면 영업팀 알림을 업데이트할 수 있습니다.

### 연락처 태그 트리거의 주요 장점

- **자동화**: 태그 기반으로 액션을 자동화하여 워크플로우를 효율화합니다.
- **체계적 관리**: 깔끔하고 실행 가능한 연락처 데이터베이스를 유지합니다.
- **타겟 마케팅**: 고객을 세분화하여 개인화된 메시지를 전달할 수 있습니다.
- **확장성**: 캠페인, 파이프라인, 여러 팀에 걸쳐 원활하게 작동합니다.

### 연락처 태그 트리거 설정 방법

1. **워크플로우 빌더 접근**
   Automations(자동화) 메뉴에서 Workflows(워크플로우)를 선택하세요.

![워크플로우 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037662887/original/1Bxp7u95i5b_phIz0Xqr_PmZ66aMhQEIMw.jpeg?1733230581)

2. **Create Workflow(워크플로우 생성)**을 클릭하고 빈 워크플로우 또는 템플릿을 선택하세요.

![워크플로우 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037664252/original/htJeRsxvsvZ6R13My3rlsZdJr93DA2xqrA.png?1733231469)

3. **트리거 추가**
   워크플로우 빌더에서 Add Trigger(트리거 추가)를 클릭하고 Contact Tag(연락처 태그)를 검색하세요.

![트리거 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037665913/original/4wpXAsdOM4pHDZZisVgkicn2A5VkAhTsvw.jpeg?1733232531)

4. **워크플로우 트리거 이름**: "태그 추가 - 관심고객"과 같이 설명적인 이름을 지어주세요.

![트리거 이름 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037666430/original/CDBLgfSWOTHcsllHGlVJKlLNRlGuPsmfOQ.jpeg?1733232778)

5. 태그가 **Added(추가)**되거나 Removed(제거)될 때 워크플로우를 트리거할지 선택하세요.

![추가 또는 제거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037666266/original/eOGmDLoVhCbryaeavyziVMk-SXJeepc9Jg.jpeg?1733232715)

6. **태그 지정**: 트리거를 활성화할 태그(예: "관심고객", "뉴스레터 구독자")를 선택하세요.

![태그 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037255252/original/NMLa1ip5dNjC6rJ7N_-GfPVdiKoZfluOGw.png?1732636379)

7. **새 태그 추가**: "+ Add New Tag(새 태그 추가)" 옵션을 사용하면 즉시 새 태그를 생성하고 현재 만들고 있는 워크플로우에서 바로 사용할 수 있습니다.

![새 태그 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037255317/original/Lc3pJmx6ih2O3iVGk7JFI6bo7foZ9FRa-Q.png?1732636410)

8. **태그 정의**
   이 워크플로우를 트리거할 특정 태그를 추가하세요.
   - 명확하고 일관된 명명 규칙을 사용하세요(예: "VIP 고객", "콜드 리드").

9. **워크플로우 액션 추가**
   트리거 설정 후, 워크플로우가 수행할 액션을 설정하세요. 일반적인 액션은 다음과 같습니다:
   - 이메일 또는 SMS 발송
   - 팀원에게 할 일 배정
   - 연락처의 파이프라인 단계 업데이트

10. **저장 및 테스트**
    워크플로우를 저장하고 연락처에 태그를 달아서 원하는 액션이 실행되는지 테스트하세요.

![워크플로우 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037672086/original/akYVKwQP298jqA2r-tezPS1HXuVthUAl3g.png?1733235531)

### 사용 예시

#### 태그 추가 시 액션

**이메일 또는 SMS 발송**: 
"관심고객" 태그가 추가되면 후속 이메일을 발송하는 예시:
- 제목: "관심 가져주셔서 감사합니다!"
- 내용: 안녕하세요 {{contact.first_name}}님, 저희 서비스에 관심을 가져주셔서 감사합니다. 궁금한 점이 있으시면 언제든 연락주세요! [회사명] 드림

![이메일 발송 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037274437/original/w-jMUHQsFL-BSWAtOTHuwU3JpuUqGBVm2Q.png?1732674172)

**팀 알림**: 
영업팀에 내부 알림을 발송:
"'관심고객'으로 태그된 새 연락처가 후속 조치를 기다리고 있습니다. 연락처 정보: {{contact.details}}"

![팀 알림 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037274442/original/IOVwa25hHMQAIIvQqTHcn9nE2mTljO8prg.jpeg?1732674226)

#### 태그 제거 시 액션

**재참여 이메일 또는 SMS 발송**: 
"뉴스레터 구독자" 태그가 제거되면 다음 메시지를 발송:
"안녕하세요 {{contact.first_name}}님, 구독 해지 요청을 처리했습니다. 실수로 해지하셨다면 여기를 클릭해서 다시 구독하세요."

**피드백 요청**: 
태그가 제거된 이유를 파악하기 위해 설문이나 피드백 요청을 보내세요.

![피드백 요청 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037305641/original/r7QJzidB91lMR9lJXnHo5pWazBhWdIsfrQ.png?1732707438)

---

### 고급 활용 사례

**여러 트리거 조합**
"Contact Created(연락처 생성)"와 "Contact Tag(연락처 태그)" 트리거를 함께 사용하여 신규 리드를 환영하고 특정 영업팀에 배정하세요.

플로우차트 예시: 연락처 생성 ➔ 태그 추가 ➔ 워크플로우 트리거.

**동적 고객 세분화**
고객 행동(구매, 웹사이트 방문 등)에 따라 자동으로 태그를 업데이트하여 마케팅 캠페인을 개인화하세요.

### 일반적인 오류 및 문제 해결

- **중복 태그**: 워크플로우에서 혼동을 피하기 위해 태그가 고유하고 설명적인지 확인하세요.
- **비활성 워크플로우**: 워크플로우가 발행되고 활성 상태인지 다시 확인하세요.
- **액션 누락**: 트리거에 연결된 모든 액션이 올바르게 설정되었는지 확인하세요.
- **중복 워크플로우**: 의도하지 않은 액션을 방지하기 위해 같은 트리거로 여러 워크플로우를 설정하지 마세요.

### 관련 가이드

- Standard Triggers - Contact Tag
- A List of Workflow Triggers
- Action - Add Contact Tag
- Workflow Trigger - Contact Changed
- Workflow Trigger - Contact Created

### 자주 묻는 질문

**Q: 태그가 워크플로우를 소급 적용해서 트리거할 수 있나요?**
A: 아니요, 태그는 워크플로우가 활성화된 후에 추가되거나 제거될 때만 워크플로우를 트리거합니다.

**Q: 많은 수의 태그를 어떻게 관리하나요?**
A: 명확한 명명 규칙을 사용하고 정기적으로 태그를 검토하여 중복되거나 사용하지 않는 태그를 제거하세요.

**Q: 여러 워크플로우에서 같은 태그를 트리거로 사용하면 어떻게 되나요?**
A: 같은 트리거를 가진 모든 워크플로우가 동시에 활성화됩니다. 의도하지 않은 중복을 피하려면 트리거를 신중하게 계획하세요.

**Q: 태그를 여러 자동화에서 사용할 수 있나요?**
A: 네, 태그는 다양한 워크플로우, 캠페인, 파이프라인 단계에서 원활한 통합을 위해 사용할 수 있습니다.

---
*원문 최종 수정: Thu, 9 Jan, 2025 at 11:31 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*