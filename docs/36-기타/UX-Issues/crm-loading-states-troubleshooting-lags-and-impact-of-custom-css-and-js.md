---

번역일: 2026-04-08
카테고리: 36-기타 > UX Issues
---

# CRM 로딩 상태: 지연 문제 해결 및 커스텀 CSS/JS의 영향

플랫폼의 로딩 기능에 상당한 개선사항이 적용되었습니다. 기존의 9점 로더에서 현대적이고 시각적으로 매력적인 스피너로 변경되었습니다. 새로운 디자인은 다양한 시각적 상태를 보여주며, 앱 초기화, 데이터 가져오기, 하위 계정 세부정보 검색과 같은 작업을 효과적으로 표시합니다.

#### 이 문서에서 다루는 내용:

#### [CRM 로딩 시 예상되는 상태는?](#crm-로딩-시-예상되는-상태는)

#### [앱 초기화:](#앱-초기화)

#### [새로운 데이터 로딩:](#새로운-데이터-로딩)

#### [하위 계정 세부정보 검색:](#하위-계정-세부정보-검색)

#### [무한 로딩 상태:](#무한-로딩-상태)

#### [커스텀 CSS 또는 커스텀 JS의 영향:](#커스텀-css-또는-커스텀-js의-영향)

#### [커스텀 CSS 간섭:](#커스텀-css-간섭)

#### [커스텀 JS 간섭:](#커스텀-js-간섭)

#### [추가 문제 해결:](#추가-문제-해결)

#### [문제를 겪고 있는 사용자가 하위 계정에 추가되어 있나요?](#문제를-겪고-있는-사용자가-하위-계정에-추가되어-있나요)

#### [새 로더의 새로고침 버튼이 작동하지 않거나 커스텀 CSS/JS가 로더 작동을 방해하면 어떻게 해야 하나요?](#새-로더의-새로고침-버튼이-작동하지-않거나-커스텀-cssjs가-로더-작동을-방해하면-어떻게-해야-하나요)

## CRM 로딩 시 예상되는 상태는?

### 앱 초기화:

앱이 실행되거나 새 페이지가 로드될 때 로더가 회전을 시작하는 첫 번째 상태입니다. 이는 로딩 프로세스의 시작을 나타내며 앱이나 페이지에 필요한 데이터가 완전히 가져와질 때까지 활성 상태를 유지합니다.
![앱 초기화 중](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001405216/original/n6IJ7CNmxsFla2WiiOg07WhTWEVvhHp2jA.png?1687267443)

### 새로운 데이터 로딩:

초기 앱 로딩 후, 사용자 작업, 실시간 업데이트 또는 예약된 새로고침에 따라 새 데이터를 가져와야 할 수 있습니다. 이 상태에서는 로더가 회전하며 서버에서 새로운 데이터를 가져오고 있음을 표시합니다.
![새로운 데이터 로딩 중](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001405249/original/GREONfJWTWWj7L8CprElMU8DTiUrVuPLLw.png?1687267461)

### 하위 계정 세부정보 검색:

애플리케이션이 다중 사용자 계정이나 하위 계정을 지원하는 경우, 계정 간 전환이나 특정 하위 계정과 관련된 정보를 로딩할 때 이 상태가 활성화될 수 있습니다.
![하위 계정 세부정보 검색 중](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001405356/original/GohsN1TKhc_sVZV-gYHyWsYekrFFP80K-A.png?1687267500)

### 무한 로딩 상태:

앱이나 특정 페이지가 미리 정의된 시간(30초 등) 내에 로드되지 않을 때 발생하는 바람직하지 않은 상태입니다. 로더가 진행 없이 계속 회전하여 페이지가 올바르게 로드되는 것을 방해하는 문제가 있음을 나타냅니다. 이런 경우 "새로고침하려면 여기를 클릭하세요"라는 작업 프롬프트가 표시됩니다. 이 버튼을 클릭하면 페이지가 새로고침되고 자동으로 브라우저 캐시가 지워져, 수동으로 사이트 데이터와 쿠키를 지울 필요 없이 문제 해결 과정이 간소화됩니다.
![무한 로딩 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001404779/original/bBwb-vM65Ufd5VtWcaAe_M63EqaPomGa8g.png?1687267228)

참고사항:

무한 로딩 상태에서 새로고침 작업을 사용하면, 사용자 측의 모든 오류가 자동으로 캡처되어 심층 분석을 위해 저희 서버로 전달됩니다. 이는 디버깅 과정을 개선하고 플랫폼 경험을 지속적으로 향상시키는 데 도움이 됩니다.

---

## 커스텀 CSS 또는 커스텀 JS의 영향:

커스텀 CSS와 JS는 로더의 동작과 전체적인 기능에 영향을 줄 수 있습니다. 다음은 이들의 잠재적인 영향에 대한 설명입니다:

### 커스텀 CSS 간섭:

커스텀 CSS는 웹페이지의 스타일링과 외관에 대한 수정을 의미합니다. 커스텀 CSS가 로더의 스타일이나 클래스를 재정의하거나 충돌하면, 로더의 의도된 시각적 표현을 방해하거나 불일치를 야기할 수 있습니다.

이런 경우 로더가 예상된 시각적 상태나 애니메이션을 표시하지 않아 혼란이나 최적화되지 않은 사용자 경험을 초래할 수 있습니다.

로더에 도입된 모든 변경사항과 일치하도록 커스텀 CSS를 검토하고 조정하여, 로더의 의도된 동작을 방해하지 않으면서 커스텀 스타일링을 원활하게 통합하는 것이 중요합니다.

### 커스텀 JS 간섭:

커스텀 JS(JavaScript) 코드는 로더의 기본 로직이나 수신하는 이벤트를 변경하여 로더의 기능에 영향을 줄 수 있습니다.

커스텀 JS가 로더의 이벤트 핸들러를 수정하거나 재정의하면, 의도된 작업을 방해하거나 사용자 상호작용에 올바르게 응답하지 못하게 할 수 있습니다.

로더의 업데이트된 기능 및 이벤트 시스템과 조화롭게 작동하도록 커스텀 JS 코드를 검토하고 적응시키는 것이 중요합니다. 이는 로더가 의도된 대로 기능하고 다양한 로딩 상태에서 적절한 동작을 유지하도록 보장합니다.

로더와 잠재적인 충돌이나 불일치를 식별하기 위해 모든 커스텀 CSS 또는 JS 수정사항을 철저히 테스트하고 디버그하는 것을 권장합니다. 업데이트된 로더 디자인 및 기능과 커스텀 코드를 일치시키기 위한 조정을 통해 로딩 과정 전반에 걸쳐 원활하고 일관된 사용자 경험을 보장해야 합니다.

---

## 추가 문제 해결:

### 문제를 겪고 있는 사용자가 하위 계정에 추가되어 있나요?

에이전시 관리자라면, 사용자가 최소 하나의 하위 계정에 추가되어 있는지 확인하세요:

1. 에이전시 보기에서 에이전시 팀 관리 페이지로 이동합니다

2. 우측 상단에서 이름, 이메일 또는 전화번호로 사용자를 검색합니다

3. 편집(Edit)을 클릭합니다

![사용자 검색 및 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001407892/original/EeujbvMOt-B75vSFRrbD_a4Tq27gYg0mkw.png?1687268821)

4. 사용자 역할(User Roles)을 클릭합니다

![사용자 역할 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48195393047/original/CfRQKOUlqixevrBBvgMTStO5dGAE9LGFLA.png?1646064411)

5. 드롭다운에서 사용자가 최소 하나의 하위 계정에 추가되어 있는지 확인합니다.

![하위 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48195394488/original/_hpUJqxJsfhIZg8bWCGaPzAImfNYpgG2Rg.png?1646064617)

참고사항:

에이전시 소유자가 아니라면, 에이전시 관리자에게 문의하여 접근 권한이 있어야 할 하위 계정에 다시 추가해달라고 요청하세요.

### 새 로더의 새로고침 버튼이 작동하지 않거나 커스텀 CSS/JS가 로더 작동을 방해하면 어떻게 해야 하나요?

답변: 이런 상황에서는 수동 문제 해결이 필요할 수 있습니다. 이 과정에는 사이트 데이터 지우기, 쿠키 제거, 페이지 강제 새로고침이 포함됩니다. 방법은 다음과 같습니다:

- 먼저 브라우저에서 검사 패널을 엽니다. 화면을 우클릭하고 "검사"를 선택하면 됩니다. 패널이 왼쪽에 열리면 "더보기" 아이콘(화살표 두 개로 표시)을 클릭하여 "Application(애플리케이션)" 탭을 찾아야 할 수 있습니다.
![검사 패널 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001408960/original/A56nyLYvt64k6etKB4Yv0-Ft_2Lxhiyojg.png?1687269416)

- "Application" 탭 내에서 "Storage"를 선택한 다음 아래로 스크롤하여 "Clear Site Data" 버튼을 찾아 클릭합니다. 특정 브라우저별 가이드는 다음과 같습니다: [Chrome](https://developers.google.com/web/tools/chrome-devtools/storage/cookies), [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector), [Safari](https://developer.apple.com/safari/tools/), [Edge](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/storage/cookies).

- 그 다음, 페이지 상단 URL 옆의 자물쇠 아이콘으로 이동하여 클릭하고 "Cookies"를 선택합니다. 거기서 사이트의 쿠키를 제거하는 옵션을 볼 수 있습니다. "Remove"를 클릭합니다.
![쿠키 제거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001409127/original/vTOptcG6vLr5pLot2kPXpoDWqliK7WtUZA.png?1687269495)

- 사이트 데이터를 지우고 쿠키를 제거한 후 "Done"을 클릭합니다.

- 마지막으로 브라우저 페이지를 새로고침해야 합니다. Mac에서 강제 새로고침은 Command 키를 누르고 R을 누르면 됩니다. PC에서는 Ctrl 키를 누르고 F5를 누릅니다. 다음은 브라우저별 강제 새로고침 방법입니다: [Chrome](https://www.refreshyourcache.com/en/hard-refresh/), [Firefox](https://www.refreshyourcache.com/en/cache/), [Safari](https://www.refreshyourcache.com/en/safari-5/), [Edge](https://answers.microsoft.com/en-us/microsoftedge/forum/all/unable-to-find-hard-reload-and-empty-cache-in/f0ac6b96-697f-4b17-b570-5b904c5ee67a).

페이지가 리다이렉트되지 않고 계속 멈춰있다면 어떻게 하나요?

---
*원문 최종 수정: Tue, 20 Jun, 2023 at 4:01 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*