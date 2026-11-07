---
원문: /support/solutions/articles/155000006056-voice-ai-chat-widget
번역일: 2026-11-06
카테고리: 06-사이트
---

# 음성 AI 채팅 위젯

하이퍼클래스 **채팅 위젯**에서 전화번호나 앱 설치, 별도 설정 없이 사람처럼 자연스러운 음성 대화를 나눌 수 있어요. 방문자를 바로 리드로 확보하고 상담 대상을 가려낼 때 쓰세요.

{% hint style="warning" %}
이 기능은 현재 **실험실**에서 제공해요. 서브 계정에서 쓰려면 에이전시에서 켜야 해요. 자세한 내용은 실험실 기능 전체 개요 문서를 참고하세요.
{% endhint %}

## 음성 AI 채팅 위젯이란?

음성 AI 채팅 위젯은 새로운 유형의 위젯이에요. 웹사이트 방문자가 브라우저 안에서 마이크로 AI 에이전트와 실시간으로 대화할 수 있어요. 전화를 걸지 않고 WebRTC로 음성이 전달되기 때문에 부담 없이 바로 말을 걸 수 있고, 대화도 자연스럽게 이어져요.

## 음성 위젯의 장점

음성 AI는 일반 채팅 말풍선을 실시간 대화 공간으로 바꿔 줘요.

- 간편한 시작: 방문자가 번호를 누르거나 앱을 설치하지 않아도 바로 말할 수 있어요.
- 사람 같은 대화: 자연스러운 말투 덕분에 예비 고객이 더 오래 이야기하고 더 많은 정보를 알려 줘요.
- 높은 전환율: 관심이 높을 때 실시간 음성으로 리드를 가려내고 예약까지 잡을 수 있어요.
- 브랜드에 맞는 에이전트 이름: "BuilderAi"처럼 친근한 이름을 위젯에 바로 표시할 수 있어요.
- 기본 보안: reCAPTCHA가 악용을 막고, 통화 녹음 안내 문구로 규정 준수에 도움이 돼요.

## 음성 전용 채팅 유형

음성 전용 모드에서는 방문자의 마이크와 스피커로 오디오가 오가요. 통화 전체가 채팅 창 안에서 이루어지므로 PSTN이나 VoIP 연결이 필요 없어요. 빠른 데모, 문의 1차 분류, 손을 쓰지 않는 영업 상담에 알맞아요.

## 통화 녹음 안내 문구

위젯에는 "All voice AI calls made using chat widgets cannot be recorded."라는 배너가 표시돼요. 채팅 위젯으로 하는 Voice AI 통화는 녹음할 수 없다는 뜻이에요. 이 안내로 사용자와 방문자 모두 녹음 여부를 헷갈리지 않아요.

![통화 녹음 불가 안내 배너](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055869030/original/y7dhmiDGwsAFK3nECxwOCxTCw8AFOk6d7w.png?1760363140)

## reCAPTCHA 보호

방문자가 60초 안에 10번 연결하거나 연결을 끊으면 Google reCAPTCHA가 나타나 사람인지 확인해요. 이렇게 해서 봇의 반복 호출과 악의적인 수신자 부담 전화 악용을 미리 막아요.

![reCAPTCHA 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055868854/original/GyZ2Wnh0gLgHakAU6m9RdswMxwbZaGn2zg.png?1760363059)

## 브라우저 기반 사용

모든 과정이 WebRTC를 통해 브라우저 안에서 이루어져요. 그래서 전화 설정이나 SIP 트렁크, 소프트폰을 따로 준비하지 않아도 돼요. 에이전시는 하이퍼클래스 채팅 말풍선을 넣을 수 있는 곳이면 어디에나 이 위젯을 넣을 수 있어요. 웹사이트, 퍼널, 블로그, **클라이언트 포탈**에 모두 쓸 수 있어요.

## 동시 통화 및 에이전트 수 제한

Voice AI 에이전트는 현재 최대 100개까지 만들 수 있어요. 테스트용, 운영용, 특정 업무용 에이전트를 여유 있게 만들어 둘 수 있어요.

동시 통화는 최대 20건으로 제한돼요. 21번째 통화를 시도하면 아래 예시처럼 빨간색 배너가 표시돼요. 다른 서브 계정의 통화에는 영향이 없어요. 각 계정마다 동시 통화 20건 한도가 따로 있기 때문이에요. 이 제한은 여러 방문자가 동시에 전화할 때 통화 품질이 떨어지는 것을 막아 줘요.

{% hint style="info" %}
서비스 상태 확인: 진행 중인 장애가 있는지는 하이퍼클래스 고객지원에 문의하세요.
{% endhint %}

|  |  |
| --- | --- |
|  |  |

## 지원 기능

- AI 에이전트와 음성 통화 시작
- 대화 중 에이전트 음소거
- 통화 중 연락처 정보 제공
- 필요할 때 통화 종료 또는 다시 시작

{% hint style="info" %}
베타 기간에는 **통화 전환**을 아직 지원하지 않아요.
{% endhint %}

## 음성 위젯 설정하기

설정을 제대로 해야 웹사이트에서 음성 위젯이 문제없이 작동해요. 과정은 간단해요. 웹사이트 코드에 스크립트를 한 번 붙여 넣으면 돼요.

1. **사이트 > 채팅 위젯**으로 이동한 뒤 **신규**를 누르고, 위젯 유형으로 **음성 AI**를 선택하세요.

   ![신규 위젯에서 음성 AI 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055871597/original/mx3uGUCZPCRhUwDY74ExLLKIyM5mUcZM9A.png?1760364206)

2. **코드 가져오기**를 찾아 `<script>` 코드를 복사하세요.

   ![코드 가져오기에서 스크립트 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055871718/original/qN1YE35rbauwOgS5BDAh661pGpXP75kk3g.png?1760364257)

3. 복사한 스크립트를 웹사이트에 붙여 넣으세요.
   - 직접 코드를 작성한 사이트라면 `<head>` 또는 `<footer>` 영역에 넣으세요.
   - Wix, Shopify, Squarespace 같은 플랫폼에서는 각 플랫폼의 커스텀 코드 삽입 기능을 사용하세요.

{% hint style="info" %}
변경 사항을 저장하고 게시하세요. 그런 다음 실제 사이트에 접속해 음성 통화를 시작하며 위젯이 잘 작동하는지 확인하세요.

![실제 사이트에서 음성 위젯 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055872079/original/hfsxhBnsIHkfPZHnsibA6mn8OftmfcMVEQ.png?1760364377)
{% endhint %}

## AI 에이전트 이름 바꾸기

위젯 빌더(**사이트 > 채팅 위젯**의 **에이전트** 탭)에서 표시 이름을 정해 AI에 브랜드에 맞는 친근한 이미지를 줄 수 있어요. 정한 이름은 모든 음성 응답에 표시돼서 신뢰감과 전문성을 높여 줘요.

채팅 위젯 에이전트의 이름은 웹 채팅 빌더에서 바로 바꿀 수 있어요. 아래 순서를 따라 하세요.

#### 1단계: 채팅 위젯으로 이동

서브 계정 **대시보드**에서 **사이트 > 채팅 위젯**으로 이동하세요.

![사이트 메뉴의 채팅 위젯으로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058034812/original/lA_hzlt8-FeAZUKgtGc2I3y7JFayR4Q6GA.jpeg?1762808559)

#### 2단계: 위젯 열기

이름을 바꿀 위젯을 눌러 편집 화면을 여세요.

![위젯을 눌러 편집 화면 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058034815/original/_dqTiUJq4rhJZswNhzRYnZGUz8BzCqnEmw.jpeg?1762808559)

#### 3단계: 이름 수정

- **에이전트** 탭으로 이동하세요.
- **Voice AI 에이전트 이름** 입력란에 에이전트의 새 이름을 입력하세요.

![Voice AI 에이전트 이름 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058034814/original/-jaABwYrUXAv_Bnpog3TfxpaHAF7euZ32g.jpeg?1762808560)

#### 4단계: 변경 사항 저장

이름을 바꿨으면 오른쪽 위의 파란색 **저장** 버튼을 눌러 적용하세요.

![오른쪽 위의 저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058034813/original/xw6wM7rf-ipSSNXBhdAu4Wp2Fm2vvWJeyA.jpeg?1762808559)

## 자주 묻는 질문

### 방문자가 매번 마이크 권한을 허용해야 하나요?
최신 브라우저는 대부분 한 번 허용하면 권한을 기억해요. 다만 시크릿 모드나 비공개 모드에서는 다시 물어봐요.

### 한 위젯에서 텍스트 채팅과 음성 AI를 같이 쓸 수 있나요?
아직은 안 돼요. 음성 AI는 현재 "음성 전용" 위젯 유형이에요. 둘 다 필요하면 텍스트용 위젯과 음성용 위젯을 따로 만들어 쓰세요.

### 하이퍼클래스에서 음성이 녹음되나요?
아니요. 음성 AI 채팅 위젯 통화는 실시간으로 전달만 되고, 개인정보 보호 규정을 지키기 위해 녹음 기능이 꺼져 있어요.

### 방문자의 연결이 끊기면 어떻게 되나요?
통화가 자연스럽게 종료돼요. 방문자는 마이크 아이콘을 눌러 다시 연결할 수 있어요. 연결 끊김이 반복되면 reCAPTCHA가 나타나요.

### 모바일 브라우저에서도 음성 AI를 쓸 수 있나요?
네. 사용자가 마이크 접근을 허용하면 Safari(iOS 16 이상), Chrome, Edge에서 브라우저 내 오디오를 지원해요.

### 에이전시에서 페이지마다 다른 AI 에이전트를 설정할 수 있나요?
네, 할 수 있어요. 음성 AI 위젯을 여러 개 만들어 위젯마다 다른 에이전트를 지정하고, 각 페이지에 알맞은 스크립트를 넣으세요.

## 관련 문서

- [하이퍼클래스 채팅 위젯을 Wix 웹사이트에 추가하기](add-hyperclass-s-chat-widget-to-your-wix-website.md)
- 채팅 위젯 사용자 지정하기
- [IVR(Interactive Voice Response) 가이드: 트리거 & 액션](../../07-워크플로우/interactive-voice-response-ivr-guide-triggers-actions.md)
- [대시보드에 외부 콘텐츠 삽입하기](../../12-대시보드/위젯/how-to-embed-external-content-on-a-dashboard.md)
- 여러 개의 채팅 위젯 사용하기
