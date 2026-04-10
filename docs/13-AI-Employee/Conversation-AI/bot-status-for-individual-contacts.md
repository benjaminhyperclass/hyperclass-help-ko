---

번역일: 2026-04-08
카테고리: 13-AI-Employee > Conversation-AI
---

# 개별 연락처의 봇 상태 관리

## 개요

개별 연락처의 봇 상태 기능을 사용하면 AI 봇이 특정 연락처와 언제 상호작용할지를 더욱 세밀하게 제어할 수 있습니다. 메시지 작성 영역에서 각 연락처별로 봇 상태를 쉽게 모니터링하고 활성/비활성을 설정할 수 있습니다. 이 기능을 통해 특정 필요에 따라 개별 연락처에 대해 봇을 켜거나 끌 수 있어, 더욱 개인화되고 유연한 상호작용이 가능합니다.

## 주요 기능:

- **향상된 봇 제어**: 이제 각 연락처별로 봇 상태를 수동으로 조정할 수 있습니다
- **활성(Active)**: 봇이 모든 수신 메시지에 응답합니다.
- **절전/스누즈(Sleep/Snooze)**: 봇이 일시적으로 정지된 상태입니다. 수동으로 설정하거나 특정 작업(예: 수동 메시지나 워크플로우 메시지 발송, 메시지 한도 도달)으로 인해 발생합니다.
- **비활성(Inactive)**: 수동으로 다시 활성화할 때까지 봇이 꺼진 상태로 유지됩니다.
- **절전 타이머**: 봇이 자동으로 깨어나서 다시 응답을 시작할 특정 시간을 설정할 수 있습니다.

## 1단계: 봇 상태 기능 접근

- Conversations(대화) 탭으로 이동합니다.
- 임의 연락처의 Message Composer(메시지 작성) 영역에서 현재 봇 상태를 확인할 수 있습니다. 활성 상태인 경우 녹색 온라인 아이콘으로 표시됩니다.

![봇 상태 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035612583/original/8qUlQFgS7CSL4as43Xw6Mj2HdQ8HvP2EAg.png?1730194160)

![봇 상태 인터페이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035612584/original/Ma-iuBQE_QOmg8wLDKNSUD_mPXgYGTfe-w.png?1730194160)

## 2단계: 특정 연락처의 봇 끄기

- 특정 연락처의 봇을 비활성화하려면 아이콘을 클릭하고 드롭다운에서 Inactive(비활성)를 선택합니다.
- 봇이 자동으로 다시 켜질 특정 시간을 설정할 수도 있습니다.
- 해당 연락처에 대해 봇을 영구적으로 끄려면 체크박스의 체크를 해제하세요.

![봇 비활성화 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035612585/original/o2kClK4-_8U675-EuackQ9esnGNDlcesNw.png?1730194160)

이제 선택한 연락처에 대해 봇이 꺼지며, 상태 아이콘의 변화로 확인할 수 있습니다.

![비활성화된 봇 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035612582/original/NHVM6LDC7YQPGW9Y-JxKPsqXSAAuI0esLg.png?1730194160)

## 추가 정보

이 기능은 봇이 제안 모드(Suggestive) 또는 자동 파일럿(Auto-Pilot) 모드일 때만 사용할 수 있습니다. 다음과 같은 상황에서는 봇이 자동으로 꺼집니다: 최대 메시지 한도 도달 시 또는 수동/워크플로우 메시지가 트리거될 때.

![자동 비활성화 상황](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035612581/original/XzZ228uGNqUGfiq_BH-ugTIHk2GvYOTOXA.png?1730194160)

개별 연락처의 봇 상태 기능을 사용하면 연락처 수준에서 봇의 상호작용을 세밀하게 조정할 수 있어, 원하는 적절한 연락처와만 봇이 소통하도록 보장할 수 있습니다.

## 자주 묻는 질문

**Q: 연락처 수준의 비활성 설정이 전역 대화 AI 설정보다 우선하나요?**
네. 비활성(Inactive)으로 설정하면 상태를 활성(Active)으로 변경할 때까지 대화 AI가 해당 연락처에 응답하지 않습니다.

**Q: 봇이 절전 상태일 때 수신 메시지는 어떻게 되나요?**
메시지는 정상적으로 수신됩니다. 대화 AI는 깨어날 시간까지 일시정지 상태를 유지하며, 그 후 설정에 따라 다시 작동합니다.

**Q: 상담사가 수동으로 메시지를 보내면 봇이 자동으로 일시정지되나요?**
전역 설정에 따라 사람의 메시지가 자동 절전을 트리거하거나 AI 응답을 지연시켜 중복을 방지할 수 있습니다.

**Q: 여러 연락처의 봇 상태를 한 번에 일괄 업데이트할 수 있나요?**
연락처 수준의 상태는 1:1 제어를 위해 설계되었습니다. 조건부 또는 대규모 변경에는 워크플로우를 사용하세요.

**Q: 상태 제어가 보이지 않으면 어떻게 하나요?**
대화 AI가 활성화되어 있고, 채널에 봇이 배정되어 있으며, 응답 모드가 AI 응답을 지원하는지 확인해보세요.

---
*원문 최종 수정: Mon, 29 Dec, 2025 at 7:47 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*