---

번역일: 2026-04-08
카테고리: 15-전화-시스템 > LC-Phone
---

# SMS 규정 준수 설정하는 방법

Hyperclass에서 SMS 규정 준수 설정(SMS Compliance Settings)을 구성하여 모든 첫 번째 SMS에 명확한 발신자 정보와 수신거부 안내가 포함되도록 하고, 이러한 규정 준수 요소가 정기적으로 자동 삽입되도록 설정하는 방법을 알아보세요. 이 가이드는 UI 워크스루를 정확하고 단계별로 설명하여 신규 사용자와 숙련된 사용자 모두에게 도움이 됩니다.

## SMS 규정 준수 설정이란?

SMS 규정 준수 설정은 발신 SMS 메시지가 이동통신사와 정책 요구사항을 충족하도록 수신거부 문구(예: "수신거부를 원하시면 STOP을 답장하세요")와 발신자 정보(예: "감사합니다, 메인 스트리트 치과의 Alex입니다")가 누락된 경우 자동으로 추가합니다. 이러한 제어 기능을 활성화하면 전달률을 보호하고 필터링 위험을 줄이며 일관되고 규정을 준수하는 경험을 지원합니다.

## SMS 규정 준수 설정의 주요 이점

이점을 이해하면 도입이 쉬워집니다. 이러한 이점은 이동통신사 가이드라인과 실제 일상적인 메시징 요구사항에 직접적으로 대응됩니다.

- **기본 규정 준수**: 누락된 경우 첫 번째 메시지에 발신자 ID와 수신거부 문구를 자동으로 추가합니다.
- **이동통신사 필터링 감소**: 이동통신사가 기대하는 요소를 추가하여 메시지가 차단될 가능성을 낮춥니다.
- **브랜드 명확성**: 발신자 식별 정보는 수신자가 누가 문자를 보내는지 인식하는 데 도움을 주어 신뢰도와 응답률을 향상시킵니다.
- **자동 주기**: 매 X일 제어는 일정에 따라(예: 매 30일) 발신자 ID + 수신거부를 다시 삽입하여 지속적인 규정 준수를 유지합니다.
- **중복 제거**: 메시지 템플릿에 이미 포함된 경우 중복된 수신거부 텍스트를 방지합니다.

## SMS 규정 준수 설정 구성 방법

다음 단계에 따라 수신거부 문구, 발신자 정보, 반복 주기를 구성하여 메시지가 규정을 준수하고 안정적으로 전달되도록 하세요.

1. 하위 계정에 로그인하세요.

2. 왼쪽 메뉴에서 설정(Settings) 버튼을 클릭하세요.
![설정 메뉴](https://jumpshare.com/share/K3fdA2BT8KlKgJ2EzeWX+/Screen+Shot+2025-09-23+at+7.31.34+PM.png)

3. 전화번호(Phone Numbers) 탭을 클릭하세요.
![전화번호 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061802556/original/sqNO1OzR2Ek3kFKJHsoPV7XpgGN-AptK_Q.png?1767377093)

4. 상단 메뉴바에서 메시징(Messaging)을 클릭하세요.
![메시징 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061802599/original/RyT_cLfF57VpybC6IAjZQZ6a1iqSkdyoyQ.png?1767377159)

5. "수신거부 메시지를 추가하여 SMS를 규정 준수하게 만들기(Make SMS compliant by adding an opt‑out message)"를 ON으로 토글하세요.
![수신거부 메시지 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061802606/original/01V3P84leq1DWtPdeiZ0VdYuF3Hd3eysAg.png?1767377209)

6. 커스터마이즈(Customize) 버튼을 클릭하여 수신거부 텍스트를 편집하세요.
![커스터마이즈 버튼](https://jumpshare.com/share/HuXKcWb6RjGGRUgdo2w0+/GIF+Recording+2025-09-23+at+7.43.16+PM.gif)

7. "발신자 정보를 추가하여 SMS를 규정 준수하게 만들기(Make SMS compliant by adding sender information)"를 ON으로 토글하세요.
![발신자 정보 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061802644/original/b7WWvEmaaSWsKFMrXQIZz9GRYacyWrmyNw.png?1767377277)

8. "정기적인 수신거부 및 발신자 정보 활성화(Enable periodic opt-out & sender info)"를 ON으로 토글하세요. 이는 시스템이 진행 중인 대화에서 반복 일정에 따라 발신자 정보와 수신거부 문구를 다시 삽입할지 여부를 제어합니다.
![정기적인 수신거부 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063989629/original/gvxLjON4-y9V-ZJ8gZNtLFvk_Np7LMDguQ.jpeg?1770037661)

9. "발신자 ID 및 수신거부 메시지를 매 [1–60]일마다 포함"에서 1에서 60 사이의 값을 입력하세요. 간격이 지나면 연락처에게 보내는 다음 발신 메시지에서 누락된 경우 규정 준수 문구가 다시 삽입됩니다.

10. 커스터마이즈(Customize) 버튼을 클릭하여 발신자 정보를 편집하세요.

11. 저장(Save)을 클릭하세요.
![저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063989771/original/comzp7Vtr5_iPzp-RcaKAUKzNzXXfHerkA.jpeg?1770037718)

## 팁, 가이드라인 및 규칙

- SMS 대화의 첫 번째 메시지(부재중 전화 문자 회신(Missed Call Text Back) 및 리뷰 요청 포함)에는 항상 다음 두 가지가 모두 포함됩니다. 예: "수신거부를 원하시면 STOP을 답장하세요."
- 수신거부 메시지는 메시지에 이미 포함되지 않은 경우에만 추가됩니다.
- 체험 모드의 에이전시는 이러한 체크박스를 비활성화할 수 없습니다.
- 생성된 지 15일 이내의 로케이션/하위 계정은 이러한 체크박스를 비활성화할 수 없습니다.
- 계정 사용자(Account Users) 및 관리자(Admins)는 이러한 체크박스를 비활성화할 수 없습니다.
- **강력하고 간단한 문구는 전달률을 향상시키고 이동통신사에 의해 플래그될 수 있는 콘텐츠를 피합니다.**
- **발신자 ID 예시**: "감사합니다, Oak & Co.의 Jamie입니다" 또는 "—Acme Fitness 팀"
- **스팸성 형식, 과도한 이모지, URL 단축기, 모호한 브랜드 언급을 피하세요.**

### 기본값 및 동작

- **새 하위 계정**: 기본적으로 활성화됨
- **기존 하위 계정**: 기본적으로 비활성화됨
- **첫 번째 발신 메시지**: 정기적 삽입이 비활성화되어 있어도 대화의 첫 번째 발신 메시지에는 항상 발신자 정보와 수신거부 문구가 포함됩니다.

### 스마트 감지 (수신거부 억제)

- 시스템은 메시지에서 완전한 수신거부 문구(예: 수신거부 안내)를 감지할 때만 재삽입을 억제하며, 일반적인 맥락에서 단일 키워드를 볼 때는 억제하지 않습니다.
- 일반 문장 내의 "stop"과 같은 단일 단어는 발신자 정보/수신거부 삽입을 방지하지 않습니다.

**삽입을 억제해야 하는 문구의 예(이미 있는 경우):**
- "수신거부를 원하시면 STOP을 답장하세요."
- "수신거부하려면 STOP을 문자로 보내세요."
- "종료하려면 STOP을 답장하세요."

**억제되지 않는 예**: "이 시간이 맞지 않으면 내일 들러주세요."

## 자주 묻는 질문

**Q: 발신자 ID나 수신거부 문구를 비활성화할 수 있나요?**
체험 모드이거나, 15일 미만의 로케이션을 관리하거나, 제한된 사용자 권한이 있는 경우 이러한 옵션을 비활성화할 수 없을 수 있습니다. Hyperclass는 규정 준수를 유지하기 위해 이를 활성화 상태로 유지할 것을 권장합니다.

**Q: 내 메시지에 이미 수신거부 문구가 있으면 어떻게 되나요?**
A: Hyperclass는 중복 수신거부 텍스트를 추가하지 않으며, 누락된 경우에만 필요한 문구를 추가합니다.

**Q: 수신거부나 발신자 텍스트를 어떻게 커스터마이즈하나요?**
A: SMS 규정 준수 탭에서 각 제어 옆의 텍스트 필드를 편집하거나(또는 표시된 경우 커스터마이즈를 클릭) 명확하고 간결한 문구를 사용하세요(예: "수신거부를 원하시면 STOP을 답장하세요").

**Q: 수신거부 메시지에 이동통신사 규정 준수하는 단어는 무엇인가요?**

STOP, STOPALL, CANCEL, UNSUBSCRIBE, END, 또는 QUIT입니다.

---
*원문 최종 수정: Mon, 9 Mar, 2026 at 5:22 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*