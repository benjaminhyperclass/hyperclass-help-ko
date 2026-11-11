---
원문: /support/solutions/articles/48000984860-how-to-install-highlevel-s-chat-widget
번역일: 2026-11-07
카테고리: 06-사이트
---

# 채팅 위젯 설치하기

고객사 웹사이트에 채팅 위젯을 설치하면 광고비 없이도 리드를 모을 수 있어요. 이 문서에서는 퍼널·웹사이트·WordPress 사이트에 채팅 위젯을 설치하고, 대화가 시작될 때 알림을 받도록 설정하는 방법을 안내해요.

{% hint style="success" %}
🎬 **영상으로 배우기** — 창업 챌린지 강의에서 이 내용을 화면으로 직접 보여 드려요.

* [10강 1부 · 채팅 위젯 설치·브랜딩·코드 삽입 (40:19)](https://www.youtube.com/watch?v=c4QmTGpfdCc&t=2419s)

전체 강의 목차: [창업 챌린지 강의 영상으로 배우기](../01-시작하기/creator-challenge-videos.md)
{% endhint %}

채팅 위젯은 실시간 채팅, SMS 메시지, WhatsApp 메시지(계정에서 사용하도록 설정한 경우)를 지원해요. 실시간 채팅은 영업팀이나 지원팀이 바로 답할 수 있는 회사에 특히 유용해요. 어떤 방식을 쓰든 설치는 간단해서 개발 지식이나 기술 지식이 필요 없어요.

## 퍼널 또는 웹사이트에 채팅 위젯 설치하기

{% hint style="warning" %}
SMS 답장을 보내려면 서브 계정에서 전화번호를 구매하고 A2P 등록을 마쳐야 해요. 서브 계정에서 전화번호를 구매하는 방법은 별도 문서를 참고하세요.
{% endhint %}

## 채팅 위젯 설정하고 테스트하기

1단계: 채팅 위젯을 만든 뒤에는 채팅 위젯으로 대화가 시작될 때 알려 주는 워크플로우 트리거를 설정하세요.

트리거 이벤트는 **Customer Replied**(고객 답장)로 정하고, 필터 **Reply Channel**(답장 채널)은 **Chat Widget**(채팅 위젯)으로 설정해요.

![Customer Replied 트리거에 Reply Channel 필터를 Chat Widget으로 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037846628/original/DOyTmYpSaauoLhd0zo445wymedQpbgigPg.gif?1733429258)

{% hint style="info" %}
**Reply Channel** 값마다 트리거를 따로 만들어야 해요. 위 예시는 **Chat Widget**만 사용해요. Google Messages로 알림을 받으려면 그 이벤트를 위한 새 트리거나 워크플로우를 따로 설정하세요.
{% endhint %}

2단계: **+** 를 클릭한 다음 **Internal Notifications**(내부 알림)를 검색하세요. 아래 3가지 중에서 고를 수 있어요.

1. **Email**(이메일): 특정 사용자나 직접 입력한 이메일 주소로 이메일을 보내요.
2. **In-app notification**(앱 내 알림): 웹 앱이나 모바일 앱을 통해 특정 사용자 또는 모든 사용자에게 알림을 보내요.
3. **SMS**: 특정 사용자나 직접 입력한 번호로 SMS를 보내요.

{% hint style="info" %}
알림 이메일이나 문자에 `{{message.body}}` 커스텀 값을 넣으면, 사용자가 채팅 위젯에 입력한 메시지를 그대로 보여 줄 수 있어요.

![알림 내용에 message.body 커스텀 값을 넣는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037846655/original/Tnr_HFJioJBEo7v_xWy522DM0mGyp35dyA.gif?1733429289)
{% endhint %}

## WordPress 사이트에 채팅 위젯 설치하기

## 자주 묻는 질문

### 페이지마다 채팅 위젯 메시지를 다르게 설정할 수 있나요?
현재 웹채팅 위젯은 동적 메시지를 지원하지 않아요. 위젯을 여러 페이지에 쓸 수는 있지만, 메시지는 처음 설정한 내용 그대로 유지돼요.

### 서브 계정에서 채팅 위젯을 여러 개 만들 수 있나요?
네, 서브 계정 하나에 채팅 위젯을 둘 이상 만들 수 있어요.
