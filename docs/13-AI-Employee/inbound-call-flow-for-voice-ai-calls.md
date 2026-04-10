---

번역일: 2026-04-06
카테고리: 13-AI-Employee
---

# 음성 AI 전화의 수신 통화 흐름

음성 AI(Voice AI)를 설정할 때는 수신 통화 흐름이 어떻게 작동하는지 이해해야 AI의 효율성을 극대화할 수 있습니다. 음성 AI 에이전트가 전화 통화에 관여하는 몇 가지 시나리오가 있습니다. 음성 AI 에이전트가 즉시 전화를 받도록 하거나, 전화가 음성사서함에 도달하거나 시간 초과가 발생했을 때 받도록 할 수 있습니다.

목차

- [통화 전달 옵션은 어디에서 찾나요?](#통화-전달-옵션은-어디에서-찾나요)
  - [1단계: 전화번호 관리로 이동](#1단계-전화번호-관리로-이동)
  - [2단계: 설정 편집 옵션으로 이동](#2단계-설정-편집-옵션으로-이동)
- [통화 전달 없는 음성 AI](#통화-전달-없는-음성-ai)
- [통화 전달을 사용하는 음성 AI](#통화-전달을-사용하는-음성-ai)

## 통화 전달 옵션은 어디에서 찾나요?

### 1단계: 전화번호 관리로 이동

- 하위 계정에서 Settings(설정)을 클릭하세요.
![설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049245444/original/d7Nl2mGkrxeyQrMafHOZEv0iwft9t-J3OQ.png?1751472295)

- Phone Numbers(전화번호) 탭을 클릭하세요.
- ManageNumbers(전화번호 관리) 탭 아래에 하위 계정에서 사용 가능한 번호 목록이 표시됩니다.
![전화번호 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049245468/original/4ctkcBOIbYgHmMvkQnHZ8uqSet1KrTjjlQ.png?1751472325)

### 2단계: 설정 편집 옵션으로 이동

- 설정하고자 하는 번호 옆에 있는 점 세 개를 클릭하세요.
- 팝업에서 Edit Configuration(설정 편집) 옵션을 클릭하세요.
![설정 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049245548/original/1zUmXclHDt-lAZu28HXGNwrGou6pDv9F_g.png?1751472415)

- 설정 창에서 Forward Calls to(통화 전달) 옵션을 볼 수 있습니다.
![통화 전달 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049245688/original/tddIxVaHxvd_QvtpkCfTaLDGzz2iPbFodQ.png?1751472542)

# 통화 전달 없는 음성 AI

**중요**: 통화 전달을 사용하지 않고 음성 AI 에이전트를 사용하는 경우, AI 에이전트에 사용하는 전화번호가 기본 하위 계정 전화번호가 아닌 이상 음성 AI 에이전트가 항상 전화를 받습니다.

수신 통화를 음성 AI 에이전트로 직접 보내는 것이 유익한 이유는 여러 가지가 있지만, 가장 가능성이 높은 시나리오는 하루 종일 전화를 받기에 너무 바쁘다는 것입니다. 이런 경우 음성 AI 에이전트가 개인 사무실 직원 역할을 하여 전화를 받고, 리드를 처리하고, 후속 조치를 위한 고객 정보를 수집합니다!

AI 에이전트가 항상 수신 전화를 받도록 음성 AI 통화 흐름을 설정하려면:

- 기본 계정 전화번호를 AI 에이전트에 할당하지 마세요.

- AI 에이전트에 할당된 전화번호에 통화 전달을 설정하지 마세요.

![음성 AI 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035869604/original/T0X9ifIChkinj0t8hHFn4lsNDqBeq6sRpQ.png?1730489206)

# 통화 전달을 사용하는 음성 AI

수신 전화를 사무실이나 휴대폰으로 전달하는 경우, 부재 중일 때도 음성 AI 에이전트가 전화를 받을 수 있도록 설정을 약간 조정해야 합니다.

부재중 전화를 AI 에이전트가 받도록 음성 AI 통화 흐름을 설정하려면, 다음 시나리오 중 하나를 설정할 수 있습니다:

- 기본 계정 전화번호를 AI 에이전트에 할당하세요.
- AI 에이전트에 할당된 전화번호에 통화 전달을 설정하세요.

**중요**: 어떤 시나리오를 선택하든, 수신 발신자가 로컬 음성사서함에 도달하지 않도록 "Inbound Call Timeout(수신 통화 제한시간)" 기간을 줄이는 것을 권장합니다. 발신자가 로컬 음성사서함에 도달하면 Hyperclass가 해당 통화를 "완료됨"으로 표시하고 음성 AI 에이전트는 전화를 받지 않습니다.

![통화 제한시간 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036127608/original/v2ReAkvTIcPvj15eaOl7opaqRRSNAEq2VA.png?1730919864)

---
*원문 최종 수정: Wed, 2 Jul, 2025 at 11:17 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*