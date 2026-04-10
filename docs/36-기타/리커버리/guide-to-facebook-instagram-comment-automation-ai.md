---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 페이스북 & 인스타그램 댓글 자동화 & AI 가이드

페이스북 & 인스타그램 댓글 자동화를 사용하면 소셜미디어 게시물에 달린 댓글에 즉시 응답할 수 있습니다. 이 기능은 새로운 댓글을 기반으로 트리거되는 워크플로우로 작동하며, 공개적으로 답글을 달거나 메시지를 보내거나 AI를 사용해 동적인 응답을 생성할 수 있습니다.

---

**목차**

- [페이스북 & 인스타그램 자동화란?](#페이스북-인스타그램-자동화란)
- [시작하기 전에](#시작하기-전에)
- [구성 요소](#구성-요소)
- [새로운 트리거는 무엇인가요?](#새로운-트리거는-무엇인가요)
- [연락처는 언제 저장되나요?](#연락처는-언제-저장되나요)
- [새로운 액션은 무엇인가요?](#새로운-액션은-무엇인가요)
- [워크플로우 구성 예시](#Here-is-how-the-workflow-will-look)
- [페이스북과 인스타그램에서 메시지가 보이는 방식](#Here-is-how-the-message-will-look-in-Facebook-and-Instagram)
- [주의사항](#주의사항)
---

# **페이스북 & 인스타그램 자동화란?**

페이스북 & 인스타그램(FBIG)에는 수십억 명의 활성 사용자가 있지만, 연락처, 고객, 대화를 대규모로 효율적으로 관리할 수 있는 도구는 많지 않습니다. 이러한 활동 중 일부를 자동화하여 대화는 FBIG에서 이루어지지만 CRM 내부에서 관리되고, 이상적으로는 AI의 힘을 활용할 수 있기를 원할 것입니다.

하이퍼클래스는 FBIG와 연동하여 두 시스템의 장점을 모두 활용할 수 있습니다. 여러 구성 요소를 올바르게 설정하기만 하면 됩니다. 이 가이드에서는 각 구성 요소, 이들을 함께 작동시키는 여러 패턴, 그리고 AI를 활용하는 방법을 설명합니다.

---

## **시작하기 전에**

진행하기 전에 페이스북 및/또는 인스타그램 계정이 하이퍼클래스 하위 계정과 연동되어 있는지 확인하세요. Settings(설정) > Integrations(연동) > Facebook & Instagram 카드로 이동하세요.

![페이스북 인스타그램 연동 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041912805/original/N50ncr-pcijp7a7MT-kowrS7yzQ9zQXk3Q.png?1740002396)

인스타그램이 페이스북 비즈니스 페이지에 연결되어 있는지 확인하세요. 가장 간단한 방법은 페이지로 이동하여 두 아이콘을 모두 확인하는 것입니다.

![페이스북 인스타그램 페이지 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041915890/original/IFMT2MHs2zV8y-xBlVMffxjqQykj0W0loA.png?1740013615)

---

## **구성 요소**

트리거:

- **페이스북 게시물 댓글:** 페이스북 게시물에 새 댓글이 달리면 워크플로우가 시작됩니다.

- **인스타그램 게시물 댓글:** 인스타그램 게시물에 새 댓글이 달리면 워크플로우가 시작됩니다.

- **고객 답글:** 페이스북 메신저나 인스타그램 DM과 같은 답글 채널을 선택합니다.

액션:

- **댓글로 답글:** 댓글에 대한 답글 댓글을 답니다.

- **페이스북 인터랙티브 메신저:** 메신저에서 페이스북 DM을 보냅니다.

- **인스타그램 인터랙티브 메신저:** 메신저에서 인스타그램 DM을 보냅니다.

- **ChatGPT by OpenAI:** ChatGPT에 프롬프트를 보내고 워크플로우에서 나중에 사용할 수 있는 완성된 텍스트를 받습니다.

레시피:

- **인스타그램 댓글 자동화:** 이 레시피로 워크플로우를 만들어 전체 인스타그램 "댓글로 파일 받기" 스타일 워크플로우의 예시를 확인하세요.

- **페이스북 댓글 + 워크플로우 AI:** 이 레시피로 워크플로우를 만들어 AI가 맞춤 설정한 답글 댓글과 긍정적인 댓글일 때만 DM을 보내는 예시를 확인하세요.

- **페이스북 댓글 자동화:** 이 레시피로 워크플로우를 만들어 전체 페이스북 "댓글로 파일 받기" 스타일 워크플로우의 예시를 확인하세요.

---

## **새로운 트리거는 무엇인가요?**

워크플로우를 만들 때 "트리거 추가"를 클릭합니다. 댓글 자동화와 관련된 트리거는 "Facebook/Instagram events" 카테고리에 있습니다. 직접 검색하거나 카테고리로 스크롤하여 찾을 수 있습니다.

- Facebook - 사용자가 게시물에 댓글을 남김
- Instagram - 사용자가 게시물에 댓글을 남김

1. 트리거로 이동하여 사용 사례에 따라 사용 가능한 트리거를 선택하세요.

![트리거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021785142/original/Az27Lo0tZreuVqugKYpphfj8lXHhJZBjNw.png?1709121959)

2. 트리거를 클릭하면 사이드바가 열립니다. 여기에는 여러 필터가 있습니다. 첫 번째 단계는 페이지를 선택하는 것입니다.

![페이지 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023709217/original/ulPa-G_KOoDrIjP2pOeuvqVo_gyvE-1E5g.png?1711709569)

![페이지 선택 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021785558/original/J4cghUFz0BtGWkEhK2e0przKXvddAosyCw.png?1709122122)

![페이지 선택 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023709327/original/SYiSiqayT3U85VrFetT40R2wD7zzbD1Ncg.png?1711709688)

3. 페이지를 선택한 후 게시물 유형을 선택해야 합니다. 게시물 유형은 "Published(발행됨)" 또는 "Custom(사용자 정의)"일 수 있습니다.

**a. 발행된 게시물** - '발행된 게시물' 탭에는 비즈니스 페이지의 모든 게시물이 포함됩니다. 텍스트, 사진, 동영상 또는 라이브 동영상 유형의 게시물일 수 있습니다. "페이스북에서 보기" 하이퍼링크를 선택하여 해당 게시물로 이동할 수도 있습니다.

![발행된 게시물 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023709425/original/7U29S8keZKFaMwsbisC11gPMe31G5bBiVQ.png?1711709834)

![게시물 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023709440/original/fkV3sGmruo5clj7BssAM_btdjNsvIXbw1A.png?1711709848)

![게시물 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023715642/original/qRIlvNbVqSK9g5HHHWEfe8DSrkIwCvOY_w.jpeg?1711718609)

**b. 사용자 정의 게시물** - '사용자 정의' 탭에서는 페이스북 게시물의 URL 또는 ID를 입력하여 게시물을 찾고 연결할 수 있습니다. 게시물 유형에서 사용자 정의를 선택하고 "게시물은" 필터를 추가한 후 해당 필드에 게시물의 URL을 붙여넣으세요.

![사용자 정의 게시물](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023709585/original/4d3omsHMCp5RyCVtYTU6St3TkMyhRRSd1Q.png?1711710013)

4. 게시물을 선택한 후 댓글에서 찾고 있는 내용을 입력해야 합니다. "구문 포함"과 "정확히 일치" 두 가지 옵션을 선택할 수 있습니다. 이 두 드롭다운을 더 잘 이해하기 위한 몇 가지 예시입니다.

정확히 일치 - Price
수신 메시지 - Price
결과 - 통과

정확히 일치 - Share the Price
수신 메시지 - Share the Price
결과 - 통과

정확히 일치 - Share the Price
수신 메시지 - Please share the Price
결과 - 실패

구문 포함 - I bought from you
수신 메시지 - I bought from you
결과 - 통과

구문 포함 - I bought from you
수신 메시지 - I bought from you yesterday
결과 - 통과

구문 포함 - I bought from you
수신 메시지 - I bought one from you
결과 - 실패

![댓글 매칭 조건](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021787955/original/L4WieSrQhivhrLaGVETWtZX0bqokfhd3TQ.png?1709123216)

5. 토글을 사용하여 1단계 댓글만 추적하도록 설정할 수도 있습니다. 이 기능이 켜져 있으면 1단계 댓글만 워크플로우를 트리거합니다.

![1단계 댓글만 추적](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023709615/original/JRBZos8ar6DYxwiUtErpIRQE3EkstISgiA.png?1711710067)

---

## **연락처는 언제 저장되나요?**

트리거를 통해 연락처가 들어오면 연락처로 저장되고 성명이 저장됩니다.

---

## **새로운 액션은 무엇인가요?**

"Communications(커뮤니케이션)" 카테고리에 3개의 새로운 액션이 있습니다.

- 페이스북 인터랙티브 메신저 & 인스타그램 인터랙티브 메신저

1. 위에 언급된 액션 중 하나를 선택하면 사이드바가 열리고 관련된 모든 세부 정보를 입력할 수 있습니다.

![메신저 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023642963/original/g1yl3GvyJCoznC-gTRB115MF6To8pIJNyQ.png?1711616003)

2. 여기서 가장 먼저 할 일은 "답글 유형"을 선택하는 것입니다. DM으로 답글과 댓글에 DM으로 답글 두 가지 옵션이 있습니다.

DM으로 답글 - 고객으로부터 받은 다이렉트 메시지를 기반으로 고객에게 아웃바운드 메시지를 보내고 싶을 때 선택합니다.

댓글에 DM으로 답글 - 고객이 남긴 댓글을 기반으로 아웃바운드 메시지를 보내고 싶을 때 선택합니다. 같은 워크플로우에서 여러 액션을 사용할 때는 첫 번째 액션이 "댓글에 DM으로 답글"이고 후속 액션은 "DM으로 답글"이 됩니다.

![답글 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023899443/original/7_u4Ez4a4mbbPugKF2zxeG8WG4fHdZsOyQ.jpeg?1712143489)

3. 답글 유형을 선택한 후 전송할 메시지를 설정해야 합니다. 기존 템플릿을 선택하거나 직접 메시지를 작성할 수 있습니다.

4. 파일을 첨부하는 기능도 있습니다. "첨부파일 추가"를 클릭하고 드라이브에서 첨부파일을 선택하거나 URL을 입력하여 파일을 추가하세요.

![첨부파일 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023643283/original/9wYdrSCXGypXlkZ8C11BzuGARFERr3FJZg.png?1711616240)

5. 메시지에 버튼을 추가할 수도 있습니다. 버튼은 고객과 소통하고 버튼 선택에 따라 액션을 수행하거나 전화번호를 공유하거나 웹사이트 링크를 공유할 수 있는 훌륭한 방법입니다.

"버튼 추가"를 클릭하여 버튼을 추가하세요. 최대 3개까지 추가할 수 있습니다.

![버튼 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021792014/original/Xe5OcL08qSUoX2p68BaMtRnysweuCrPvQ.png?1709125548)

6. 선택할 수 있는 3가지 버튼 유형이 있습니다:

**a. 웹사이트 열기** - 이 버튼에 URL을 추가합니다. 여기에 링크를 입력하면 버튼을 클릭할 때 사용자가 해당 링크로 이동합니다.

**b. 전화 걸기** - 여기에 전화번호를 입력하면 사용자가 이 버튼을 사용해 전화를 걸 수 있습니다.

**c. 액션 수행** - 이 버튼은 고객과의 대화를 더 진전시키는 데 사용할 수 있습니다. 이 버튼 다음에 액션을 추가하여 흐름을 계속할 수 있습니다.

![버튼 유형](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023709757/original/D01TKQb9GD6syTO5PdyZ50xfS4EcYX9Nkg.png?1711710177)

7. 버튼에 추가할 첫 번째 항목은 버튼 이름입니다. 다음은 3가지 버튼 유형 중 선택이고, 마지막으로 전화 또는 웹사이트 버튼에 대해 각각 전화번호 또는 URL을 입력합니다.

![버튼 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021869781/original/UfraujcXbI9guxqcgCHarVOA8UCAiIfcRQ.png?1709190359)

8. 기본 대기 시간 - 이는 필수 단계입니다. 기본적으로 1분의 대기 시간이 추가되며 편집할 수 있습니다. 주어진 시간이 지나면 연락처는 "기본 분기"로 이동합니다.

![기본 대기 시간](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023643797/original/HmIOB4KaKi-DFdRUzHWg4F9i2NFdlO0aeg.png?1711616581)

9. 기본 분기 - 액션에는 항상 기본 분기가 제공됩니다. 고객으로부터 답글이 없거나 "전화 걸기" 액션 버튼이 선택되면 연락처는 이 분기로 이동합니다.

- **댓글 응답 액션**

이 액션을 사용하면 고객이 입력한 댓글에 댓글로 응답할 수 있습니다.

여러 개의 답글을 추가할 수 있으며 시스템이 이 옵션들 중에서 무작위로 선택하여 댓글에 답글을 답니다.

토글 버튼도 있는데, 토글 버튼을 켜면 댓글에 좋아요도 함께 누릅니다.

![댓글 응답 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023709816/original/X4tD7ibVu2IN687Ric1rj6lnMqajgHqy1Q.png?1711710252)

- **워크플로우 구성 예시**

![워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023822342/original/dNC36UEEUlXD15bAqi--bIhS57hzo4RkFw.png?1712052613)

- **페이스북과 인스타그램에서 메시지가 보이는 방식**

![페이스북 메시지 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021871756/original/yf3yAifuNEPDWZh3ZPG2I4MH5SqQnO-YUQ.png?1709191773)

![인스타그램 메시지 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021871758/original/nEnxQAkpvUSyCFlRzUE3_aRmKXRVryGWUg.png?1709191777)

---

## **주의사항**

- 트리거에서 "페이지는"이 첫 번째로 선택해야 하는 필드입니다. 다른 모든 필드는 이에 의존하며 "페이지는" 필터가 삭제되면 다른 모든 필터도 함께 삭제됩니다.

- 인터랙티브 메신저 액션에는 최대 3개의 버튼을 추가할 수 있습니다.

- "전화 걸기" 버튼 다음에는 추가 액션을 넣을 수 없습니다.

- 전화 걸기 버튼 후에는 연락처가 직접 기본 분기로 이동합니다.

- 기본적으로 1분의 대기 시간이 추가되며 편집할 수 있습니다.

- 버튼이 선택되지 않으면 연락처는 "기본 타임아웃" 분기로 이동합니다.

- "DM으로 답글"이 선택되면 시스템은 지난 24시간 내에 대화가 있었는지 확인하고, 있었다면 메시지를 보내고 없었다면 전송에 실패합니다.

- "DM으로 답글"은 두 가지 시나리오에서 사용됩니다. 첫 번째는 DM을 보낸 사용자와 대화를 시작하고 싶을 때이고, 두 번째는 "댓글에 DM으로 답글" 후 사용자와 대화를 계속하고 싶을 때입니다. 예를 들어, 첫 번째 액션에서 "댓글에 DM으로 답글"이 답글 유형으로 선택되면 후속 액션은 "DM으로 답글"을 답글 유형으로 갖게 됩니다.

- "댓글에 DM으로 답글"을 사용할 때 연락처가 첫 번째 인터랙티브 메신저 액션에 답글하지 않은 경우 기본 타임아웃 분기에서는 인터랙티브 메신저 액션이 작동하지 않습니다.

- "댓글에 DM으로 답글"의 경우 7일 창이 적용됩니다. 7일 이내에 댓글에 DM으로 답글을 보내야 하며 그렇지 않으면 전송이 실패합니다.

---

## **자주 묻는 질문**

**Q: 페이스북 페이지를 하이퍼클래스에 연결하는 방법은?**
소셜 플래너(Social Planner) 내에서 페이스북 페이지를 연결할 수 있습니다. 자세한 정보는 여기를 클릭하세요.

**Q: 누군가 여러 번 댓글을 남기면 어떻게 되나요?**
워크플로우가 연락처당 한 번만 실행되도록 설정하거나 댓글이 달릴 때마다 실행되도록 허용할 수 있습니다.

**Q: 더 자연스럽게 보이도록 답글을 지연시킬 수 있나요?**
예. 워크플로우에서 댓글 답글이나 메시지 액션 전에 "대기(Wait)" 액션을 사용할 수 있습니다.

**Q: 자동화가 트리거된 후 누군가 댓글을 삭제하면 어떻게 되나요?**
댓글이 제출되면 트리거가 즉시 실행됩니다. 따라서 나중에 댓글이 삭제되더라도 워크플로우 액션은 의도한 대로 계속 처리됩니다.

---
*원문 최종 수정: Fri, 11 Jul, 2025 at 12:23 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*