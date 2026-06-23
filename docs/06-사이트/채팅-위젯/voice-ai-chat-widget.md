---

번역일: 2026-04-07
카테고리: 06-사이트 > 채팅-위젯
---

# 음성 AI 채팅 위젯

Hyperclass 채팅 위젯에서 바로 사람 같은 음성 대화를 제공하세요. 전화번호나 앱 다운로드, 추가 설정 없이 더 많은 리드를 즉시 확보하고 검증할 수 있습니다.

**중요**: 이 기능은 현재 Labs에서 제공되며, 에이전시가 하위 계정(Sub-account)에 대해 활성화해야 합니다. 자세한 내용은 [Labs 기능 - 전체 개요](../../19-에이전시-뷰/Agency-Settings/labs-features-complete-overview.md)를 참조하세요.

---

**목차**

- [음성 AI 채팅 위젯이란?](#음성-ai-채팅-위젯이란)
- [음성 위젯의 주요 장점](#음성-위젯의-주요-장점)
- [음성 전용 채팅 타입](#음성-전용-채팅-타입)
- [AI 에이전트 이름 변경하는 방법](#ai-에이전트-이름-변경하는-방법)
- [내장된 통화 녹음 안내](#내장된-통화-녹음-안내)
- [reCAPTCHA 보호 기능](#recaptcha-보호-기능)
- [브라우저 기반 상호작용](#브라우저-기반-상호작용)
- [동시 통화 제한](#동시-통화-제한)
- [지원되는 기능](#지원되는-기능)
- [음성 위젯 설정하는 방법](#음성-위젯-설정하는-방법)
- [자주 묻는 질문](#자주-묻는-질문)

## 음성 AI 채팅 위젯이란?

음성 AI 채팅 위젯(Voice AI Chat Widget)은 웹사이트 방문자가 브라우저에서 바로 AI 에이전트와 마이크를 통해 실시간 음성 대화를 할 수 있는 새로운 위젯 타입입니다. 전화를 걸지 않고 WebRTC를 통해 대화가 스트리밍되어, 자연스럽고 즉각적인 음성 우선 경험을 제공합니다.

## 음성 위젯의 주요 장점

음성 AI는 일반적인 채팅 버블을 실시간 대화 부스로 바꿔줍니다:

- **마찰 없는 경험** – 방문자가 전화번호를 누르거나 앱을 설치하지 않고 즉시 대화할 수 있습니다.

- **사람 같은 상호작용** – 자연스러운 음성 대화로 잠재 고객이 더 오래 대화하고 더 많은 정보를 공유하게 됩니다.

- **높은 전환율** – 관심이 뜨거울 때 실시간 음성으로 리드를 검증하고 예약을 받을 수 있습니다.

- **브랜딩 가능한 에이전트 이름** – 위젯에서 친근한 페르소나(예: "BuilderAi")를 표시할 수 있습니다.

- **내장 보안** – reCAPTCHA가 남용을 차단하고, 통화 녹음 고지로 규정 준수를 보장합니다.

## 음성 전용 채팅 타입

음성 전용 모드는 방문자의 마이크와 스피커를 통해 오디오를 스트리밍하여 전체 통화가 채팅 창 내에서 이루어집니다. PSTN이나 VoIP 연결이 필요 없어 빠른 데모, 지원 분류, 핸즈프리 영업 대화에 이상적입니다.

## 내장된 통화 녹음 안내

명확한 기대를 위해 위젯에서 "채팅 위젯을 사용한 모든 음성 AI 통화는 녹음되지 않습니다"라는 배너를 표시합니다. 이러한 투명성으로 귀하와 방문자 모두를 규정 준수 혼란으로부터 보호합니다.

![음성 AI 통화 녹음 안내 배너](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055869030/original/y7dhmiDGwsAFK3nECxwOCxTCw8AFOk6d7w.png?1760363140)

## reCAPTCHA 보호 기능

방문자가 60초 내에 10번 연결하거나 연결을 끊으면, 시스템이 Google reCAPTCHA로 사람인지 확인하여 봇 루프와 악의적인 무료 전화 남용을 시작 전에 차단합니다.

![reCAPTCHA 보호 기능 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055868854/original/GyZ2Wnh0gLgHakAU6m9RdswMxwbZaGn2zg.png?1760363059)

## 브라우저 기반 상호작용

모든 것이 WebRTC를 통해 브라우저에서 실행되기 때문에 전화 설정, SIP 트렁크, 소프트폰 구성이 필요하지 않습니다. 에이전시는 일반적인 Hyperclass 채팅 버블이 들어갈 수 있는 모든 곳(웹사이트, 퍼널, 블로그, 클라이언트 포털)에 위젯을 삽입할 수 있습니다.

---

## 동시 통화 및 에이전트 제한

현재 **최대 100개의 음성 AI 에이전트**를 생성할 수 있어, 실험, 프로덕션 설정, 전문화된 워크플로우를 위한 여유 공간을 제공합니다.

동시 통화 수는 **20개로 제한**됩니다. 21번째 통화는 아래 예시와 같은 빨간 배너를 표시합니다. 다른 로케이션의 통화는 각각 고유한 20개 통화 제한이 있어 영향을 받지 않습니다. 이 보호 장치는 여러 웹사이트 방문자가 동시에 통화할 때 품질 저하를 방지합니다.

서비스 상태 확인: [status.Hyperclass.com](http://status.gohighlevel.com)에서 진행 중인 장애를 확인하세요.

![동시 통화 제한 알림 - 일반 버전](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058126603/original/2YTUbW0_7BQm9W-khyUe6UV6XJR4o4GJZQ.png?1762883797)

![동시 통화 제한 알림 - 상세 버전](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058126604/original/wlOxLhMVyFggO0y_gXXAWRWAO4brlANLHw.png?1762883797)

## 지원되는 기능

- AI 에이전트와 음성 통화 시작
- 대화 중 에이전트 음소거
- 통화 중 연락처 정보 제공
- 필요시 통화 종료 또는 재시작

**참고**: 베타 기간 중에는 통화 전환 기능이 아직 지원되지 않습니다.

## 음성 위젯 설정하는 방법

올바른 설정으로 음성 위젯이 웹사이트에서 원활하게 작동하도록 합니다. 과정은 간단하며 사이트 코드에 스크립트를 추가하기만 하면 됩니다.

1. `사이트(Sites) → 채팅 위젯(Chat Widget) → 새로 만들기(New) → 위젯 타입을 음성 AI로 선택`으로 이동합니다.

![음성 AI 위젯 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055871597/original/mx3uGUCZPCRhUwDY74ExLLKIyM5mUcZM9A.png?1760364206)

2. **코드 받기(Get Code)** 옵션을 찾아 제공된 <script> 코드를 복사합니다.

![채팅 위젯 코드 복사 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055871718/original/qN1YE35rbauwOgS5BDAh661pGpXP75kk3g.png?1760364257)

3. 웹사이트에 스크립트를 붙여넣습니다:

- **커스텀 코딩 사이트**의 경우 <head> 또는 <footer> 섹션에 배치합니다.
- **Wix, Shopify, Squarespace** 같은 플랫폼의 경우 커스텀 코드 삽입 기능을 사용합니다.

**참고**: 변경사항을 저장하고 게시하세요. 실제 사이트를 방문해서 음성 통화를 시작하여 위젯을 테스트하세요.

![채팅 위젯 코드 설치 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055872079/original/hfsxhBnsIHkfPZHnsibA6mn8OftmfcMVEQ.png?1760364377)

## AI 에이전트 이름 변경하는 방법

위젯 빌더(사이트 > 채팅 위젯 > 에이전트 탭)에서 표시 이름을 설정하여 AI에게 친근하고 브랜드에 맞는 정체성을 부여하세요. 선택한 이름이 모든 음성 응답에 나타나 신뢰성과 전문성을 강화합니다.

채팅 위젯 에이전트의 이름 변경은 쉽고 웹 채팅 빌더에서 직접 할 수 있습니다! 이름을 변경하려면 다음 단계를 따르세요:

#### 1단계: 채팅 위젯으로 이동

로케이션 대시보드에서 **사이트(Sites) → 채팅 위젯(Chat Widgets)**으로 이동합니다.

![채팅 위젯 메뉴 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058034812/original/lA_hzlt8-FeAZUKgtGc2I3y7JFayR4Q6GA.jpeg?1762808559)

#### 2단계: 위젯 열기

위젯을 클릭하여 편집기를 엽니다.

![위젯 편집기 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058034815/original/_dqTiUJq4rhJZswNhzRYnZGUz8BzCqnEmw.jpeg?1762808559)

#### 3단계: 이름 업데이트

- **에이전트(Agent)** 탭으로 이동합니다
- **음성 AI 에이전트 이름(Voice AI Agent Name)** 박스를 사용해 에이전트의 새 이름을 입력합니다

![AI 에이전트 이름 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058034814/original/-jaABwYrUXAv_Bnpog3TfxpaHAF7euZ32g.jpeg?1762808560)

#### 4단계: 변경사항 저장

이름을 변경한 후 우상단 모서리의 파란색 **저장(Save)** 버튼을 클릭하여 변경사항을 적용합니다.

![변경사항 저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058034813/original/xw6wM7rf-ipSSNXBhdAu4Wp2Fm2vvWJeyA.jpeg?1762808559)

---

## 자주 묻는 질문

**Q: 방문자가 매번 마이크 권한을 허용해야 하나요?**

대부분의 최신 브라우저는 첫 번째 허용 후 권한을 기억하지만, 시크릿/익명 세션에서는 다시 요청합니다.

**Q: 하나의 위젯에서 텍스트 채팅과 음성 AI를 모두 제공할 수 있나요?**

아직 불가능합니다. 음성 AI는 현재 전용 "음성 전용" 위젯 타입입니다. 둘 다 필요하면 별도 위젯(텍스트 vs 음성)을 사용하세요.

**Q: 오디오가 Hyperclass 어디선가 녹음되나요?**

아니요. 음성 AI 채팅 위젯 통화는 스트리밍만 되며, 개인정보 보호 규정 준수를 위해 녹음이 비활성화되어 있습니다.

**Q: 방문자의 연결이 끊어지면 어떻게 되나요?**

통화가 정상적으로 종료됩니다. 방문자가 마이크 아이콘을 클릭하여 다시 연결할 수 있으며, 반복적인 연결 끊김은 reCAPTCHA를 발생시킵니다.

**Q: 음성 AI가 모바일 브라우저에서 작동하나요?**

네. Safari(iOS 16+), Chrome, Edge가 사용자가 마이크 접근을 허용하는 한 브라우저 내 오디오를 지원합니다.

**Q: 에이전시가 다른 페이지마다 다른 AI 에이전트를 설정할 수 있나요?**

물론입니다. 각각 고유한 에이전트 페르소나를 가진 여러 음성 AI 위젯을 만들고, 각 페이지에 적절한 스크립트를 삽입하세요.

---
*원문 최종 수정: Tue, 13 Jan, 2026 at 3:18 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*