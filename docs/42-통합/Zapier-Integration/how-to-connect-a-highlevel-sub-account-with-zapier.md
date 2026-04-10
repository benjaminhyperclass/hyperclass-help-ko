---

번역일: 2026-04-09
카테고리: 42-통합 > Zapier Integration
---

# Hyperclass 하위 계정을 Zapier와 연결하는 방법

Hyperclass 하위 계정(Sub-account)을 Zapier와 연결해서(LeadConnector Zapier 앱 사용) 리드 수집, 연락처 업데이트, 인수인계를 코드 없이 자동화하세요. 이 가이드에서는 통합의 개념, 필수 조건, 하위 계정 연결/해제 방법을 설명합니다.

목차

- [하위 계정을 Zapier와 연결한다는 것은?](#하위-계정을-zapier와-연결한다는-것은)
- [Zapier 연결의 주요 장점](#zapier-연결의-주요-장점)
- [하위 계정을 Zapier에 연결하는 방법](#하위-계정을-zapier에-연결하는-방법)
- [Zapier에서 LeadConnector 연결 해제하기](#zapier에서-leadconnector-연결-해제하기)
- [자주 묻는 질문](#자주-묻는-질문)

## 하위 계정을 Zapier와 연결한다는 것은?

Zapier를 통해 Hyperclass가 수천 개의 앱과 데이터를 주고받을 수 있습니다. LeadConnector Zapier 앱을 사용하여 Hyperclass CRM 로그인 정보로 인증한 후, 연결할 하위 계정을 선택하면 Zap에서 연락처 생성/업데이트, 데이터 이동, 액션 트리거가 가능합니다.

### Zapier 연결의 주요 장점

다음 장점들을 통해 프로세스 자동화를 위한 Zapier 연결 시점을 결정할 수 있습니다.

- **빠른 자동화**: 커스텀 코드 없이 수천 개 앱에서 액션을 트리거할 수 있습니다.

- **하위 계정 범위 지정**: 특정 하위 계정을 선택하여 데이터를 깔끔하고 분리된 상태로 유지합니다.

- **간단한 인증**: Hyperclass CRM 로그인만 사용하면 되므로 API 키가 필요하지 않습니다.

- **쉬운 관리**: Zapier의 App Connections 페이지에서 LeadConnector 연결을 관리하거나 해제할 수 있습니다.

## 하위 계정을 Zapier에 연결하는 방법

LeadConnector를 통해 올바른 하위 계정을 연결하려면 Zapier에서 다음 단계를 따르세요.

- Zapier 계정에 로그인합니다.
- 홈 화면에서 Create > Zaps를 클릭합니다.
![Zap 생성하기](https://jumpshare.com/share/xDVyCpgR1s9xTAmLFqi9+/GIF+Recording+2025-09-18+at+5.36.42+PM.gif)

- Zap 편집기에서 **Trigger** 블록을 클릭하고 앱 목록에서 **LeadConnector**를 선택합니다.

![LeadConnector 선택](https://jumpshare.com/share/uPqO8dR3APk57YMPMLDP+/GIF+Recording+2025-09-18+at+5.40.48+PM.gif)

- **Pipeline Stage Changed**와 같은 **Trigger Event**를 선택합니다.

- 트리거 설정의 **Account** 섹션에서 **Sign In** 버튼을 클릭합니다.

- LeadConnector 로그인 화면으로 리다이렉트됩니다. 이메일과 비밀번호를 입력하여 진행하세요.
![LeadConnector 로그인](https://jumpshare.com/share/6whWjcEY4IgmCZSPx4Bt+/GIF+Recording+2025-09-18+at+5.48.01+PM.gif)

- 로그인 후 Zapier와 연결할 하위 계정을 선택하라는 메시지가 표시됩니다.

![하위 계정 선택](https://jumpshare.com/share/vtNYLQ3hqAOl7DyUJvIw+/zapier.png)

- 완료되면 Zapier 계정이 하위 계정과 성공적으로 연결됩니다. Zap 설정의 "Accounts" 아래에 LeadConnector가 표시되어 통합이 활성화되었음을 확인할 수 있습니다.
![연결 완료 확인](https://jumpshare.com/share/hm2brQrt0wbFCxoJMCW7+/ZIQj0GLvuaBPyQ69KAvi4HSuCOKq-eUcJQ.png)

## Zapier에서 LeadConnector 연결 해제하기

- Zapier 홈 페이지에서 왼쪽 메뉴의 App Connections를 클릭합니다.

- LeadConnector 옆의 점 세 개 메뉴(•••)를 클릭합니다.

- Delete를 선택하여 연결을 삭제합니다.
![연결 해제하기](https://jumpshare.com/share/rotqSlJ5S1zFQjUDpY7Q+/ZxwSlCb1GkvF_su1AZ8UqEs5LSkMsd4bCg.png)

## 자주 묻는 질문

**Q: Zapier 앱 이름이 "HighLevel"인가요?**
Zapier에서는 LeadConnector를 사용하세요. 이것이 공식 화이트라벨 HighLevel 연결입니다.

**Q: 나중에 연결된 하위 계정을 변경할 수 있나요?**
네. Zapier에서 새 LeadConnector 계정 연결을 추가하고 다른 하위 계정을 선택한 다음, Zap에서 사용하는 계정을 전환하면 됩니다.

**Q: 완전히 연결을 해제하려면 어떻게 해야 하나요?**
Zapier → Apps → App Connections에서 LeadConnector를 찾고, ••• 메뉴를 열어 Delete로 연결을 삭제하세요.

**Q: API 키가 필요한가요?**
표준 LeadConnector 연결 플로우에서는 필요하지 않습니다. CRM 로그인 정보로 로그인하면 됩니다.

---
*원문 최종 수정: Thu, 18 Sep, 2025 at 8:08 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*