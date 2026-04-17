---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Communication Workflow Actions
---

# 워크플로우 액션 - 페이스북 인터랙티브 메신저

워크플로우의 페이스북 인터랙티브 메신저 액션을 통해 페이스북 메신저로 자동 응답을 보낼 수 있습니다.

---

**목차**

- [페이스북 인터랙티브 메신저란?](#페이스북-인터랙티브-메신저란)
- [페이스북 인터랙티브 메신저 찾는 방법](#페이스북-인터랙티브-메신저-찾는-방법)
- [구성 요소](#구성-요소)
- [구성 요소 - 버튼과 빠른 답장](#구성-요소-버튼과-빠른-답장)
---

## **페이스북 인터랙티브 메신저란?**

워크플로우 액션인 페이스북 인터랙티브 메신저를 사용하면 메신저 대화를 자동화하고 버튼이나 빠른 답장 같은 인터랙티브 요소를 포함할 수 있습니다. 이 기능은 페이스북 댓글 및/또는 메시지 트리거와 함께 사용하세요.

**참고**: 페이스북 인터랙티브 메신저 워크플로우 액션은 메타의 24시간 메시징 정책을 따릅니다. 아웃바운드 메시지는 연락처가 페이스북 페이지와 마지막으로 상호작용한 후 24시간 이내에만 전달됩니다. 해당 시간 내에 연락처가 다시 상호작용하지 않으면 페이스북 플랫폼 제한으로 인해 워크플로우 메시지가 전달되지 않을 수 있습니다.

---

## 페이스북 인터랙티브 메신저 찾는 방법

Automation(자동화) > Workflows(워크플로우) > Workflow Builder(워크플로우 빌더) > Actions(액션) > Communication(커뮤니케이션) > Facebook Interactive Messenger(페이스북 인터랙티브 메신저)로 이동하세요.

![워크플로우 액션에서 페이스북 인터랙티브 메신저 찾기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042049966/original/ForSlQcQLfG3nqjQ56LOm8xKoQzkkEu8YA.png?1740171969)

![페이스북 인터랙티브 메신저 액션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042049998/original/0X2-Um9xjynf-LTDcSkU0iC3L2c9dkanXg.png?1740172057)

---

## **구성 요소**

페이스북 인터랙티브 메신저의 여러 구성 요소가 있습니다:

- Reply Type(응답 유형): Reply to Comment via DM(댓글에 DM으로 답장): 트리거가 새 댓글이고 DM 대화를 만들고 싶을 때 이 옵션을 사용하세요.
- Reply to DM(DM으로 답장): DM에 응답할 때 이 옵션을 사용하세요.
- Templates(템플릿): Marketing(마케팅) > Snippets(스니펫)의 [스니펫](../../10-마케팅/text-snippets-templates-.md)입니다.
- Message(메시지): Body(본문): 메시지 작성 도구입니다.
- Custom Values(커스텀 값): Settings(설정) > Custom Values(커스텀 값)에서 만든 [커스텀 값](../../23-레거시-자동화/Logic-&amp;-Fulfillment/how-to-use-custom-values.md)을 삽입할 수 있습니다.
- Trigger Links(트리거 링크): Marketing(마케팅) > Trigger Links(트리거 링크)에서 만든 [트리거 링크](../../10-마케팅/trigger-links-overview.md)를 삽입할 수 있습니다.
- Add Attachment(첨부 파일 추가): 컴퓨터에서 파일을 업로드하여 메시지에 첨부합니다.
- Add file through URL(URL로 파일 추가): 파일 URL을 입력하여 메시지에 첨부합니다.
- Add New Button(새 버튼 추가): 대화를 가이드하는 인터랙티브 버튼을 추가합니다.
- Add Quick Reply(빠른 답장 추가): 대화를 가이드하는 인터랙티브 빠른 답장을 추가합니다.
- Wait Step(대기 단계): 메시지-버튼-파일-빠른 답장 조합을 보낸 후 기본 브랜치로 이동하기까지의 시간을 설정합니다.

![페이스북 인터랙티브 메신저 구성 요소 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042050059/original/WDUSNTgmom1svtAY3mjyX-MavOIC4GQZcw.png?1740172170)

![페이스북 인터랙티브 메신저 설정 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042050085/original/pY4KEZFyyT1n31Vzhz2EINhDW5HnEtcqFg.png?1740172256)

---

## 구성 요소 - 버튼과 빠른 답장

버튼과 빠른 답장은 이 액션을 "인터랙티브"하게 만드는 핵심 요소입니다. 미리 정의된 경로로 대화를 유도할 수 있습니다. 버튼과 빠른 답장 모두 워크플로우에서 동일한 브랜치를 생성하지만, 용도가 약간 다릅니다.

**버튼**은 일반적으로 **지속적인** 액션에 사용되며 링크 리디렉션, 다이얼러 열기, 특정 워크플로우 브랜치 트리거 등의 작업을 수행할 수 있습니다. 사용자가 상호작용한 후에도 **계속 표시됩니다**. 최대 3개의 버튼을 추가할 수 있습니다.

반면 **빠른 답장**은 원터치 응답 옵션을 제공하여 대화를 **가이드**하도록 설계되었습니다. 사용자가 하나를 선택하면 **사라져서** 대화를 집중되고 간소하게 유지합니다. 최대 13개의 빠른 답장을 추가할 수 있습니다.

이 페이스북 인터랙티브 메신저 액션에서는 하나의 액션에 버튼, 빠른 답장, 파일을 함께 추가할 수 있습니다. 인스타그램 인터랙티브 메신저에서는 메시지에 버튼 또는 빠른 답장 중 하나만 추가할 수 있습니다. 빠른 답장은 같은 메시지에 첨부 파일이 없을 때만 추가할 수 있습니다.

구성 요소:

- Button(버튼): 대화에 표시되는 텍스트와 워크플로우의 라벨입니다.

- Button(버튼): 액션.

Open Website(웹사이트 열기): URL을 추가하면 사용자가 클릭할 때 새 탭에서 URL이 열리고, 대화에는 영향을 주지 않으며, 사용자가 다시 스크롤해서 돌아와도 버튼이 활성 상태로 유지됩니다.

- Call Number(전화번호 호출): 전화번호를 추가하면 사용자가 클릭할 때 다이얼러가 열리고, 대화에는 영향을 주지 않으며, 사용자가 다시 스크롤해서 돌아와도 버튼이 활성 상태로 유지됩니다.

- Perform Action(액션 수행): 특별한 이벤트 없이 워크플로우 브랜치만 생성하고 해당 브랜치의 다음 워크플로우 액션으로 이동합니다.

- Quick Reply(빠른 답장): 워크플로우의 라벨입니다.

- Quick Reply(빠른 답장): 대화에 표시되는 텍스트입니다.

- 버튼 브랜치 예시.

- 체크리스트를 전달하기 위한 다른 인터랙티브 메신저 액션이 있는 버튼 브랜치 예시.

- 체크리스트를 전달하는 다른 인터랙티브 메신저 액션.

![버튼과 빠른 답장 설정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042050446/original/cy30U_AmVK8i8NErz_IXGLxisClF59X_sw.png?1740173446)

---
*원문 최종 수정: 2026-03-05*
*Hyperclass 사용 가이드 — hyperclass.ai*