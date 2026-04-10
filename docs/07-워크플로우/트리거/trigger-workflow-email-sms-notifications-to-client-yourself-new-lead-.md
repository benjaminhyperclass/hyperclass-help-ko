---

번역일: 2026-04-07
카테고리: 07-워크플로우 > 트리거
---

# 트리거/워크플로우 - 신규 리드 발생 시 클라이언트/본인에게 이메일/SMS 알림

참고: 이제 모든 계정에서 워크플로우를 사용할 수 있게 되어, 기존 트리거와 캠페인의 모든 기능(그 이상!)을 하나의 빌더에서 처리할 수 있습니다! 워크플로우에 대해 자세히 알아보기.

캠페인에 리드가 추가될 때 클라이언트나 본인에게 이메일 및/또는 SMS 알림을 보내는 방법을 안내드립니다:

**목차**

- [워크플로우 내부 알림 보내는 방법](#워크플로우-내부-알림-보내는-방법)
- [워크플로우 알림 제한](#워크플로우-알림-제한)

# 워크플로우 내부 알림 보내는 방법:

## 새 워크플로우 설정하기:

"처음부터 시작(Start from scratch)"을 클릭하세요.

![새 워크플로우 시작](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187640982/original/W7N53A7jRYMkfovt68Zl0xwCszrwqCnfwA.png?1644273935)

"워크플로우 생성(Create workflow)"을 클릭하세요.

![워크플로우 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187641014/original/Ym9ONXpNJz1suApJvg8ScOvgMnLaDQ3AGA.png?1644273948)

"새 워크플로우 트리거 추가(Add New Workflow Trigger)"를 클릭하세요.

![워크플로우 트리거 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187641031/original/wg8dhPS7alLIU9mtDZK2IiqjrACR883CNw.png?1644273963)

워크플로우 트리거를 설정한 후:

"첫 번째 액션 추가(Add your first Action)"를 클릭하세요.

![첫 번째 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187641108/original/InuuOM18OGY_aAIMlGibQLf_YB9IqehKBA.png?1644274015)

"내부 알림 보내기(Send Internal Notification)"를 클릭하세요.

![내부 알림 보내기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187641189/original/KC-4voBjEE-7ueP_CUBYergYsq3TBABUlg.png?1644274083)

알림 유형을 선택하세요:

![알림 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187641355/original/cZ3gsmOHHLQvxqoTAlx_CldWwKwXhpJRzw.png?1644274196)

이메일 알림:

![이메일 알림](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187641351/original/rndkpAofMfCcWWyaCSjPSeHW97FVIQl1kA.png?1644274188)

내부 알림:

![내부 알림](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187641339/original/viF9OCdPD7JRG0C96GaaVSqKrPBSCupE1w.png?1644274180)

SMS 알림:

![SMS 알림](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187641412/original/BM0tnQY0tkOKGt4tP9ArIMKKzykAO7bHeg.png?1644274226)

# 워크플로우 알림 제한

워크플로우의 내부 알림 액션에 제한(Rate Limiting)이 추가되었습니다.

현재 제한 기준은 다음과 같습니다:

- 워크플로우당 사용자 1명당 5분에 500개 알림
- 이메일의 경우: 사용자 이메일당 5분에 500개 알림
- SMS의 경우: 사용자 전화번호당 5분에 500개 알림  
- 앱 내 알림의 경우: 사용자 ID당 5분에 500개 알림

이 제한을 초과한 알림은 전송되지 않습니다.

이 제한이 도입된 이유와 도움이 되는 점:

- 기존에는 제한이 없어서 특정 사용자의 대화에 여러 번 업데이트가 발생했습니다. 예를 들어 워크플로우에 30만 개의 연락처를 넣는다고 가정해보세요.
- 내부 알림에서 특정 사용자(대부분의 경우 본인에게 알림을 보내도록 설정)에게 메일을 보낸다면
- 이 사용자 메일에 30만 개의 이메일이 전송됩니다.
- 이로 인해 해당 사용자의 대화가 몇 초/몇 분 내에 30만 번 업데이트됩니다.
- 이는 전체적인 워크플로우 액션 처리 지연을 야기했습니다.

제한 기능은 이러한 이벤트를 효과적으로 관리하고, 고객이 특정 사용자에게 대량 이메일을 보내는 것을 방지합니다.

---
*원문 최종 수정: Wed, 6 Jul, 2022 at 4:09 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*