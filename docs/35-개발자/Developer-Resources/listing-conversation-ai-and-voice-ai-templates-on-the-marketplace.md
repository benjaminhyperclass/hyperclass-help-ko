---

번역일: 2026-04-08
카테고리: 35-개발자 > 개발자 리소스
---

# 마켓플레이스에 대화 AI 및 음성 AI 템플릿 등록하기

1. **마켓플레이스 링크 생성**

Hyperclass의 대화 AI(Conversation AI) 또는 음성 AI(Voice AI) 페이지에서 AI 직원을 선택하고 "마켓플레이스에서 이 템플릿/AI 직원 판매(Sell this Template/Agent on Marketplace)" 버튼을 클릭하세요. (이 옵션은 에이전시 오너와 관리자만 볼 수 있으며, 하위 계정 관리자와 사용자는 이 옵션을 볼 수 없습니다.) 구매자가 자동으로 설치되는 것과 나중에 설정해야 하는 것을 정확히 알 수 있도록 AI 직원에 포함되는 내용을 명확하게 정의하세요.

**지식 베이스(Knowledge Base) (선택 사항)**: 발행 시 AI 직원의 지식 베이스를 **포함(Include)** 또는 **제외(Exclude)** 중에서 선택하세요.

- **포함(Include)**을 선택하면 지식 베이스가 **번들로 포함**되어 구매자에게 AI 직원과 함께 자동으로 설치됩니다.
- 템플릿에는 프롬프트뿐만 아니라 워크플로우 트리거, 예약 생성 등의 액션과 함께 기본 자산들(워크플로우, 캘린더, 커스텀 필드/값 등)이 포함됩니다. 즉, 전체 패키지를 판매하는 것입니다.

패키징하려는 자산이 지적 재산권으로 보호되는 스냅샷의 일부로 가져온 것이 아닌지 확인해 주세요. 제한된/IP 보호 자산은 AI 직원에 포함할 수 없습니다.

- 봇의 패키지를 담은 특별한 링크와 함께 개발자 포털로 리디렉션됩니다.
- 마켓플레이스에 등록된 기존 템플릿을 업데이트하려면 대화 AI 또는 음성 AI 페이지에서 필요한 변경사항을 적용한 후 메뉴에서 "마켓플레이스용 링크 복사(Copy Link for Marketplace)"를 클릭하고 [개발자 포털](https://marketplace.hyperclass.ai/apps)에서 링크를 업데이트하세요(아래 2번 참조).

2. **앱 세부 정보 완성**

[개발자 포털](https://marketplace.hyperclass.ai/apps)의 모듈(Modules) → 대화 AI(ConversationAI) 또는 음성 AI(Voice AI)에서 링크를 붙여넣고 "제출(Submit to fetch)" 버튼을 클릭하세요.

- **편집 가능한 필드**: 사용 사례(예: 리드 자격 심사, 예약 접수), AI 직원 설명 및 사용 가능한 액션(워크플로우, 예약, SMS 대량 발송, 전화 전환)
- 구매자가 AI 직원을 구매하기 전에 마켓플레이스에서 테스트할 때 AI 직원에게 물어볼 수 있는 추천 질문 목록도 설정할 수 있습니다.
- **편집 불가능한 필드 확인**: 지원 채널(SMS, 이메일, 인스타그램, 전화)

3. **완료 및 제출**

앱의 기본 정보(Basic Info), 앱 프로필(App Profile), [가격 설정(Pricing)](../../36-기타/리커버리/set-up-your-app-pricing.md), **지원(Support)** 섹션을 모두 작성하세요.

- 검토를 위해 등록을 제출하세요. 승인되면 모든 에이전시 사용자와 하위 계정이 마켓플레이스에서 이용할 수 있게 됩니다.

![마켓플레이스 대화 AI 템플릿 등록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048513172/original/VgMMbsAj4VTfo5m_lo-P4jadH08_7heP3A.png?1750309262)

![마켓플레이스 AI 템플릿 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063751576/original/vL0-fSzhDqj8fJxat8-feeF30OyZR-auiA.png?1769681448)

## 자주 묻는 질문

**Q: 템플릿에는 어떤 자산이 포함되나요?**
**A:** 템플릿에는 **워크플로우, 캘린더, 커스텀 필드, 커스텀 값, 그리고 선택 사항인 지식 베이스**(AI 직원 제작자가 발행 시 **포함(Include)**을 선택한 경우)가 포함될 수 있습니다.

**Q: AI 직원을 등록할 때 지식 베이스를 제외할 수 있나요?**
**A:** 네. **발행(Publish)** 화면에서 **지식 베이스(Knowledge Base)**를 **제외(Exclude)**로 설정하면 번들된 지식 베이스 없이 발행할 수 있습니다.

---
*원문 최종 수정: Thu, 29 Jan, 2026 at 4:34 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*