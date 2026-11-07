---
원문: /support/solutions/articles/155000004661-workflow-action-facebook-interactive-messenger
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Facebook Interactive Messenger(Facebook 인터랙티브 메신저)

**Facebook Interactive Messenger**(Facebook 인터랙티브 메신저) 액션을 쓰면 워크플로우에서 Facebook Messenger로 자동 답장을 보낼 수 있어요. 버튼과 빠른 답장을 넣어서 대화를 원하는 방향으로 이끌 수도 있어요.

## Facebook Interactive Messenger란?

**Facebook Interactive Messenger** 액션은 Messenger 대화를 자동화하는 워크플로우 액션이에요. 버튼, 빠른 답장 같은 인터랙티브 요소도 함께 넣을 수 있어요. Facebook 댓글 트리거나 메시지 트리거와 함께 사용하세요.

{% hint style="info" %}
**Facebook Interactive Messenger** 액션은 Meta의 24시간 메시지 정책을 따라요. 발신 메시지는 연락처가 내 Facebook 페이지와 마지막으로 상호작용한 때부터 24시간 안에만 전달할 수 있어요. 그 시간 안에 연락처가 다시 상호작용하지 않으면 Facebook 플랫폼의 제한 때문에 워크플로우 메시지가 전달되지 않을 수 있어요.
{% endhint %}

## Facebook Interactive Messenger 위치

**자동화 > 워크플로우**로 이동해 워크플로우를 열어요. 워크플로우 빌더에서 **Actions**(액션) > **Communication**(커뮤니케이션) > **Facebook Interactive Messenger**를 선택하세요.

![워크플로우 빌더의 액션 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042049966/original/ForSlQcQLfG3nqjQ56LOm8xKoQzkkEu8YA.png?1740171969)

![Facebook Interactive Messenger 액션 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042049998/original/0X2-Um9xjynf-LTDcSkU0iC3L2c9dkanXg.png?1740172057)

## 구성 요소

**Facebook Interactive Messenger** 액션은 다음 요소로 구성돼요.

1. **Reply Type**(답장 유형)
   1. **Reply to Comment via DM**(DM으로 댓글에 답장): 트리거가 새 댓글이고, 그 댓글을 계기로 DM 대화를 시작하고 싶을 때 선택해요.
   2. **Reply to DM**(DM에 답장): 받은 DM에 답장할 때 선택해요.
2. **Templates**(템플릿): **마케팅 > 스니펫**에 만들어 둔 스니펫이에요.
3. **Message**(메시지)
   1. **Body**(본문): 메시지를 작성하는 입력 영역이에요.
   2. **Custom Values**(커스텀 값): **설정 > 커스텀 값**에서 만든 커스텀 값을 메시지에 넣을 수 있어요.
   3. **Trigger Links**(트리거 링크): **마케팅 > 트리거 링크**에서 만든 트리거 링크를 메시지에 넣을 수 있어요.
4. **Add Attachment**(첨부파일 추가): 내 컴퓨터에서 파일을 올려 메시지에 첨부해요.
5. **Add file through URL**(URL을 통해 파일 추가): 파일의 URL을 입력해 메시지에 첨부해요.
6. **Add New Button**(새 버튼 추가): 대화를 이끌어 갈 인터랙티브 버튼을 추가해요.
7. **Add Quick Reply**(빠른 답장 추가): 대화를 이끌어 갈 인터랙티브 빠른 답장을 추가해요.
8. **Wait Step**(대기 단계): 메시지, 버튼, 파일, 빠른 답장 조합을 보낸 뒤 기본 분기(default branch)로 넘어가기까지의 시간을 설정해요.

![Facebook Interactive Messenger 액션의 구성 요소 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042050059/original/WDUSNTgmom1svtAY3mjyX-MavOIC4GQZcw.png?1740172170)

![Facebook Interactive Messenger 액션의 구성 요소 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042050085/original/pY4KEZFyyT1n31Vzhz2EINhDW5HnEtcqFg.png?1740172256)

## 구성 요소 — 버튼과 빠른 답장

버튼(**Buttons**)과 빠른 답장(**Quick Replies**)은 이 액션을 "인터랙티브"하게 만드는 핵심 요소예요. 둘을 쓰면 대화를 미리 정해 둔 경로로 안내할 수 있어요. 버튼과 빠른 답장은 워크플로우에 같은 분기를 만들어요. 다만 쓰임새가 조금 달라요.

**Buttons**는 보통 계속 남아 있어야 하는 동작에 써요. 링크로 이동하기, 전화 걸기 화면 열기, 특정 워크플로우 분기 실행하기 같은 동작을 할 수 있어요. 사용자가 눌러도 버튼은 계속 보여요. 버튼은 3개까지 추가할 수 있어요.

**Quick Replies**는 한 번 탭으로 답할 수 있는 선택지를 보여 주며 대화를 안내해요. 사용자가 하나를 선택하면 사라져서 대화가 간결하게 이어져요. 빠른 답장은 최대 13개까지 추가할 수 있어요.

{% hint style="info" %}
**Facebook Interactive Messenger** 액션에서는 한 액션 안에 Buttons, Quick Replies, 파일을 함께 넣을 수 있어요. Instagram Interactive Messenger에서는 메시지 하나에 버튼과 빠른 답장 중 하나만 넣을 수 있어요. 빠른 답장은 같은 메시지에 첨부파일이 없을 때만 추가할 수 있어요.
{% endhint %}

구성 요소는 다음과 같아요.

1. **Button**의 텍스트: 대화에 표시되는 텍스트이자 워크플로우에 표시되는 레이블이에요.
2. **Button**의 동작(action)
   1. **Open Website**(웹사이트 열기): URL을 추가하면 사용자가 버튼을 눌렀을 때 새 탭에서 그 URL이 열려요. 대화에는 영향이 없고, 사용자가 대화를 다시 스크롤해 올라가도 버튼은 계속 쓸 수 있어요.
   2. **Call Number**(전화 걸기): 전화번호를 추가하면 사용자가 버튼을 눌렀을 때 전화 걸기 화면이 열려요. 대화에는 영향이 없고, 사용자가 대화를 다시 스크롤해 올라가도 버튼은 계속 쓸 수 있어요.
   3. **Perform Action**(액션 실행): 특정 이벤트는 없어요. 워크플로우 분기만 만들고, 그 분기의 다음 액션으로 넘어가요.
3. **Quick Reply**의 레이블: 워크플로우에 표시되는 레이블이에요.
4. **Quick Reply**의 텍스트: 대화에 표시되는 텍스트예요.
5. **Button** 분기 예시예요.
6. 체크리스트를 보내려고 또 다른 **Interactive Messenger** 액션을 넣은 **Button** 분기 예시예요.
7. 체크리스트를 보내는 또 다른 **Interactive Messenger** 액션이에요.

![버튼과 빠른 답장 설정 및 분기 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042050446/original/cy30U_AmVK8i8NErz_IXGLxisClF59X_sw.png?1740173446)
