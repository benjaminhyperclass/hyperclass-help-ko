---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009406-how-to-use-antivirus-for-wordpress-sites
번역일: 2026-11-06
카테고리: 06-사이트
---

# Antivirus로 WordPress 사이트 보호하기

Antivirus는 WordPress 사이트에 해로운 파일이나 흔한 보안 허점이 있는지 검사하고, 찾은 내용을 쉬운 말로 알려 줘요. 클릭 한 번으로 문제를 고칠 수 있고, 고치기 전에 백업을 먼저 받을 수도 있어요. 이 문서에서는 Antivirus를 여는 방법, **보안 실드**가 찾은 문제를 확인하고 고치는 방법, **보안 강화** 보호 기능을 켜는 방법, 전체 사이트의 위협을 한눈에 보는 방법을 안내해요.

## Antivirus란?

**Antivirus**(바이러스 백신)는 모든 WordPress 사이트 메뉴에 있는 섹션이에요. 크게 두 부분으로 나뉘어요.

- **보안 실드**: 사이트를 검사해서 확인이 필요한 항목을 보여 주고, 클릭 한 번으로 고쳐 줘요.
- **보안 강화**: 공격자가 흔히 침입하는 경로를 클릭 한 번으로 막아 줘요.

## Antivirus의 장점

- 문제를 일찍 발견해요: **보안 실드**가 무엇을 확인해야 하고 왜 중요한지 쉬운 말로 알려 줘요.
- 클릭 한 번으로 고쳐요: 항목 하나만 고칠 수도 있고, 적용할 수 있는 수정 사항을 한꺼번에 적용할 수도 있어요.
- 안전하게 고쳐요: 수정할 때마다 마지막 백업 시점이 표시되고, 새 백업을 먼저 받을 수 있어요.
- 흔한 허점을 막아요: **보안 강화** 보호 기능을 하나씩 켜거나 한꺼번에 켤 수 있어요.
- 모든 사이트를 한 목록에서 관리해요: 사이트별 위협 수를 보고, 전체 사이트를 한꺼번에 검사할 수 있어요.

## Antivirus 열기

1. **사이트**로 이동하세요.
2. **WordPress**를 클릭하고 사이트를 여세요.
3. 왼쪽 메뉴에서 **Antivirus**를 클릭한 다음 **보안 실드** 또는 **보안 강화**를 선택하세요.

## 보안 실드에서 위협 확인하고 고치기

### 1단계: 검사 결과 확인하기

- 맨 위 배너에서 확인이 필요한 항목 수와 사이트를 마지막으로 검사한 시점을 볼 수 있어요.
- 언제든 **Scan now**(지금 검사)를 클릭하면 새로 검사해요.

### 2단계: 조치 필요 항목 살펴보기

- 각 항목에는 무엇이 발견됐고 왜 중요한지가 적혀 있어요. 예를 들어 꺼 둔 채 사이트에 남아 있는 플러그인이나, 꺼져 있는 보호 기능이 있어요.
- **조치 필요** 옆의 숫자는 처리하지 않은 항목 수예요.

![보안 실드의 조치 필요 항목 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084212067/original/e5dB2BzOIU5WbORsWsFxW7Pqa5tNpQjHuw.png?1793021521)

### 3단계: 수정 사항 적용하기

1. 항목에서 **수정 사항 적용**을 클릭하세요. 고칠 수 있는 항목을 모두 고치려면 **Apply all fixes**(모든 수정 사항 적용)를 클릭하세요.
2. 확인 창에 해당 항목과 마지막 백업 시점이 표시돼요.
3. 수정 전에 새 백업을 받으려면 **Back up first**(먼저 백업)를 클릭하세요. 바로 진행하려면 **수정 사항 적용**을 클릭하세요.

{% hint style="info" %}
수정 사항을 적용하면 실제로 운영 중인 사이트가 바뀌어요. 나중에 되돌리고 싶다면 먼저 백업을 받아 두세요.
{% endhint %}

![수정 사항 적용 확인 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084212111/original/V_LRB5BU_SKJjab3q_4Dhk63TxGuQJlimA.png?1793021539)

### 4단계: 아직 고칠 수 없는 항목 미루기

- 항목에서 **Snooze**(미루기)를 클릭한 다음 **Until the next scan**(다음 검사까지), **7일 동안**, **For 30 days**(30일 동안) 중에서 선택하세요.

![항목 미루기 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084212012/original/5oWIT-htUKmdN9E7haNznXSR6jDoKRXlUg.png?1793021485)

### 5단계: 전체 검사 항목과 해결된 항목 보기

- **Every check we ran**(실행한 모든 검사)을 펼치면 최근 검사의 항목별 결과를 볼 수 있어요. 각 항목에는 **통과** 또는 **조치 필요**가 표시돼요.
- **해결됨**을 펼치면 최근 30일 안에 고친 항목을 볼 수 있어요.

**보안 실드**는 다음을 검사해요.

- 모든 파일을 공식 릴리스와 비교
- 플러그인 파일을 배포된 버전과 비교
- 검사 요청에 사이트가 응답하는지 확인
- 사용하지 않는 플러그인이 남아 있지 않은지 확인
- 보호 기능이 적용되어 있는지 확인
- 사이트가 보안 연결로 제공되는지 확인
- WordPress가 최신 상태인지 확인
- 기반 소프트웨어가 아직 지원되는지 확인
- 오류 메시지가 방문자에게 숨겨져 있는지 확인
- 검색엔진이 사이트를 찾을 수 있는지 확인

![실행한 모든 검사와 해결된 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084212114/original/0A1p_YGRFMLWMtFvRevoo6tWOq0ZEs1T8Q.png?1793021542)

## 보안 강화 보호 기능 켜기

1. **Antivirus > 보안 강화**를 여세요.
2. 보호 기능마다 아래에 적힌 한 줄 설명을 읽어 보세요.
3. 토글로 보호 기능을 켜거나 끄세요. 모두 켜려면 **Turn all on**(모두 켜기)을 클릭하세요.

![보안 강화 보호 기능 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084212115/original/fjt_R51zqlzb-25oEfAzgogc_xrVGYUNBQ.png?1793021546)

사용할 수 있는 보호 기능은 다음과 같아요.

- **Block WordPress application passwords**(WordPress 애플리케이션 비밀번호 차단): 앱이 비밀번호 없이 로그인할 수 있는 뒷문을 막아요.
- **Require a sign-in to read your site data**(사이트 데이터 읽기에 로그인 요구): 로그인하지 않고 게시글, 사용자, 설정을 가져가지 못하게 해요.
- **WordPress 버전 숨기기**: 페이지에서 버전 번호를 지워요.
- **Block user enumeration**(사용자 목록 수집 차단): 봇이 사이트의 사용자 이름을 모으지 못하게 해요.
- **Mask login error messages**(로그인 오류 메시지 가리기): 로그인에 실패하면 틀렸다는 사실만 알려 줘요.
- **Disable the theme and plugin file editor**(테마 및 플러그인 파일 편집기 비활성화): WordPress에서 코드 편집기를 없애요.
- **Add security headers**(보안 헤더 추가): 브라우저가 사이트를 프레임에 넣으려는 시도나 파일 형식을 추측하려는 시도를 거부하도록 알려 줘요.
- **Rate-limit login attempts**(로그인 시도 횟수 제한): 비밀번호를 계속 바꿔 가며 시도하는 사람의 속도를 늦춰요.
- **Disable XML-RPC**(XML-RPC 비활성화): 비밀번호를 대량으로 추측하는 데 악용되는 WordPress의 오래된 통로를 막아요.
- **Harden your .htaccess**(.htaccess 보안 강화): 업로드 폴더에서 코드가 실행되는 것을 막고 wp-config.php 같은 파일을 숨겨요.

{% hint style="info" %}
WordPress 휴대폰 앱을 쓴다면 **Disable XML-RPC**는 꺼 두세요.
{% endhint %}

## 전체 사이트의 위협 한눈에 보기

1. **사이트 > WordPress**로 이동하세요.
2. 사이트별로 **Threats**(위협) 열을 확인하세요.
3. 숫자 위에 마우스를 올리면 발견된 내용과 사이트를 마지막으로 검사한 시점이 보여요. 자세히 보려면 **Check threats**(위협 확인)를 클릭하세요.
4. 모든 사이트를 새로 검사하려면 **Scan all sites**(전체 사이트 검사)를 클릭하세요.

![사이트별 위협 수 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084212123/original/VAYt385JjgCMTOgKJgW-A4M08K6GjfpcJA.png?1793021550)

![위협 수에 마우스를 올렸을 때 보이는 상세 정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084212117/original/h14nE_qevY7Ma2alR1F0P4_J1GKZnUcpfA.png?1793021548)

## 자주 묻는 질문

### 수정 사항 적용을 누르면 운영 중인 사이트가 바뀌나요?
네. 수정할 때마다 먼저 확인 창이 뜨고, 마지막 백업 시점이 표시돼요. 나중에 되돌릴 수 있게 하려면 **Back up first**를 클릭하세요.

### 문제를 한꺼번에 고칠 수 있나요?
네. **보안 실드**에서 **Apply all fixes**를 클릭하면 적용할 수 있는 수정 사항이 모두 적용돼요.

### 항목을 미루면 어떻게 되나요?
선택한 기간 동안 **조치 필요** 목록에서 숨겨져요. 기간은 다음 검사까지, 7일 동안, 30일 동안 중에서 고를 수 있어요.

### 지금 바로 검사하려면 어떻게 하나요?
사이트 하나만 검사하려면 **보안 실드**에서 **Scan now**를 클릭하세요. 전체 사이트를 검사하려면 WordPress 사이트 목록에서 **Scan all sites**를 클릭하세요.

### 보안 강화를 켜면 사이트가 고장 나지 않나요?
대부분의 보호 기능은 방문자에게 눈에 띄는 영향을 주지 않아요. 다만 보호 기능이 꺼 버리는 기능에 의존하는 앱이 있을 수 있어요. 예를 들어 WordPress 휴대폰 앱은 XML-RPC를 사용해요. 어떤 기능이 작동하지 않으면 해당 보호 기능을 다시 끄세요.

### Antivirus를 쓰면 사이트가 해킹당하지 않는다고 보장되나요?
아니요. Antivirus는 흔한 문제를 찾아내고 흔한 허점을 막아 주는 도구예요. WordPress, 플러그인, 테마를 항상 최신 상태로 유지하고 정기적으로 백업하세요.
