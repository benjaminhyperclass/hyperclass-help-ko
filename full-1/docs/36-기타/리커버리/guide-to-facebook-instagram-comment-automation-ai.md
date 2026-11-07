---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002055-guide-to-facebook-instagram-comment-automation-ai
번역일: 2026-11-06
카테고리: 36-기타
---

# Facebook·Instagram 댓글 자동화와 AI 활용 가이드

Facebook·Instagram 게시물에 달린 댓글에 바로 응답하도록 자동화하는 방법을 안내해요. 새 댓글을 기준으로 시작되는 워크플로우로 공개 답글을 달거나 메시지를 보낼 수 있고, AI로 상황에 맞는 답변을 만들 수도 있어요.

## Facebook·Instagram 자동화란?

Facebook과 Instagram(FBIG)에는 수십억 명의 활성 사용자가 있어요. 하지만 연락처, 고객, 대화를 대규모로 효율적으로 관리할 도구는 많지 않아요. 이런 작업 중 일부를 자동화하면 대화는 FBIG에서 이루어지고, 관리는 CRM 안에서 할 수 있어요. 여기에 AI의 힘도 더할 수 있어요.

하이퍼클래스를 FBIG와 연동하면 두 시스템의 장점을 함께 쓸 수 있어요. 필요한 구성 요소를 올바르게 설정하기만 하면 돼요. 이 가이드에서는 각 구성 요소, 여러 가지 조합 방식, AI를 활용하기 좋은 지점을 설명해요.

---

[동영상](https://www.youtube.com/embed/O3yaYUv\_ePQ?&wmode=opaque)

---

## 시작하기 전에

먼저 Facebook 계정이나 Instagram 계정이 서브 계정에 연동되어 있는지 확인하세요. 서브 계정에서 **설정 > 연동**으로 이동한 다음 **Facebook & Instagram** 카드를 확인하면 돼요.

![설정 > 연동의 Facebook & Instagram 카드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041912805/original/N50ncr-pcijp7a7MT-kowrS7yzQ9zQXk3Q.png?1740002396)

Instagram이 Facebook 비즈니스 페이지에 연결되어 있는지도 확인하세요. 페이지로 이동해서 두 아이콘이 모두 보이는지 보면 가장 간단해요.

![Facebook 페이지에서 Facebook과 Instagram 아이콘 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041915890/original/IFMT2MHs2zV8y-xBlVMffxjqQykj0W0loA.png?1740013615)

---

## 구성 요소

트리거:

- **Facebook Comment(s) On A Post**(Facebook 게시물 댓글): Facebook 게시물에 새 댓글이 달리면 워크플로우가 시작돼요.
- **Instagram Comment(s) On A Post**(Instagram 게시물 댓글): Instagram 게시물에 새 댓글이 달리면 워크플로우가 시작돼요.
- **Customer Replied**(고객 답장): Facebook Messenger나 Instagram DM 같은 답장 채널을 선택해요.

액션:

- **Reply In Comments**(댓글에 답글): 댓글 아래에 답글을 달아요.
- **Facebook Interactive Messenger**(Facebook 인터랙티브 메신저): Messenger로 Facebook DM을 보내요.
- **Instagram Interactive Messenger**(Instagram 인터랙티브 메신저): Messenger로 Instagram DM을 보내요.
- **ChatGPT by OpenAI**: ChatGPT에 프롬프트를 보내고, 받은 응답을 워크플로우 뒷부분에서 활용해요.

레시피:

- **Instagram Comment Automation**(Instagram 댓글 자동화): 이 레시피로 워크플로우를 만들면 Instagram에서 "댓글을 달면 파일을 받는" 방식의 전체 워크플로우 예시를 볼 수 있어요.
- **Facebook Comments + Workflow AI**(Facebook 댓글 + 워크플로우 AI): 이 레시피로 워크플로우를 만들면 AI가 맞춤으로 작성한 답글을 달고, 긍정적인 댓글일 때만 DM도 보내는 예시를 볼 수 있어요.
- **Facebook Comment Automation**(Facebook 댓글 자동화): 이 레시피로 워크플로우를 만들면 Facebook에서 "댓글을 달면 파일을 받는" 방식의 전체 워크플로우 예시를 볼 수 있어요.

---

## 새 트리거 살펴보기

워크플로우를 만들 때 **Add Trigger**(트리거 추가)를 클릭하세요. 댓글 자동화와 관련된 트리거는 **Facebook/Instagram events**(Facebook/Instagram 이벤트) 카테고리에 있어요. 트리거를 직접 검색하거나, 해당 카테고리까지 스크롤해서 찾을 수 있어요.

- Facebook - User comments on a post (Facebook 게시물에 사용자가 댓글을 남길 때)
- Instagram - User comments on a post (Instagram 게시물에 사용자가 댓글을 남길 때)

1. 트리거 목록에서 사용 목적에 맞는 트리거를 선택하세요.

   ![트리거 목록에서 Facebook/Instagram 트리거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021785142/original/Az27Lo0tZreuVqugKYpphfj8lXHhJZBjNw.png?1709121959)

2. 트리거를 클릭하면 사이드바가 열려요. 여러 필터가 있고, 가장 먼저 **Page is**(페이지)에서 페이지를 선택해야 해요.

   ![트리거 사이드바에서 페이지 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023709217/original/ulPa-G_KOoDrIjP2pOeuvqVo_gyvE-1E5g.png?1711709569)

   ![페이지 선택 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021785558/original/J4cghUFz0BtGWkEhK2e0przKXvddAosyCw.png?1709122122)

   ![페이지를 선택한 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023709327/original/SYiSiqayT3U85VrFetT40R2wD7zzbD1Ncg.png?1711709688)

3. 페이지를 선택한 다음 **Post Type**(게시물 유형)을 선택하세요. **Published**(게시됨) 또는 **Custom**(사용자 지정) 중에서 고를 수 있어요.

   - **Published**(게시됨): **Published Posts** 탭에는 비즈니스 페이지의 모든 게시물이 나와요. 텍스트, 사진, 동영상, 라이브 영상 게시물이 모두 포함돼요. **View on Facebook** 링크를 클릭하면 해당 게시물로 이동할 수 있어요.

     ![게시됨 게시물 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023709425/original/7U29S8keZKFaMwsbisC11gPMe31G5bBiVQ.png?1711709834)

     ![게시물 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023709440/original/fkV3sGmruo5clj7BssAM_btdjNsvIXbw1A.png?1711709848)

     ![선택한 게시물 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023715642/original/qRIlvNbVqSK9g5HHHWEfe8DSrkIwCvOY_w.jpeg?1711718609)

   - **Custom**(사용자 지정): **Custom** 탭에서는 Facebook 게시물의 URL이나 ID를 입력해 게시물을 찾아 연결할 수 있어요. **Post Type**에서 **Custom**을 선택하고 **Post is**(게시물) 필터를 추가한 다음, 해당 필드에 게시물 URL을 붙여넣으세요.

     ![Custom 선택 후 게시물 URL 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023709585/original/4d3omsHMCp5RyCVtYTU6St3TkMyhRRSd1Q.png?1711710013)

4. 게시물을 선택한 다음, 댓글에서 어떤 내용을 찾을지 정하세요. **Contains Phrase**(문구 포함)와 **Exact Match**(정확히 일치) 두 가지 중에서 선택할 수 있어요. 아래 예시를 보면 두 옵션의 차이를 이해하기 쉬워요. <!-- 검토 필요: 원문 내용이 서로 다름 (옵션 이름은 "Contains Phrase", 예시에서는 "Contains Exact Phrase") -->

   | 조건 | 들어온 댓글 | 결과 |
   | --- | --- | --- |
   | Exact Match - 가격 | 가격 | 통과 |
   | Exact Match - 가격 알려주세요 | 가격 알려주세요 | 통과 |
   | Exact Match - 가격 알려주세요 | 가격 좀 알려주세요 | 실패 |
   | Contains Exact Phrase - 여기서 구매했어요 | 여기서 구매했어요 | 통과 |
   | Contains Exact Phrase - 여기서 구매했어요 | 어제 여기서 구매했어요 | 통과 |
   | Contains Exact Phrase - 여기서 구매했어요 | 여기서 하나 구매했어요 | 실패 |

   ![댓글 문구 조건 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021787955/original/L4WieSrQhivhrLaGVETWtZX0bqokfhd3TQ.png?1709123216)

5. 첫 번째 단계 댓글만 추적하는 토글을 켤 수도 있어요. 이 토글을 켜면 첫 번째 단계 댓글만 워크플로우를 시작해요.

   ![첫 번째 단계 댓글만 추적하는 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023709615/original/JRBZos8ar6DYxwiUtErpIRQE3EkstISgiA.png?1711710067)

---

## 연락처는 언제 저장되나요?

트리거를 통해 들어온 사람은 연락처로 저장돼요. 이때 연락처의 이름(First Name)과 성(Last Name)이 함께 저장돼요.

---

## 새 액션 살펴보기

**Communications**(커뮤니케이션) 카테고리에 새 액션이 3개 있어요.

### Facebook Interactive Messenger와 Instagram Interactive Messenger

1. 위 액션 중 하나를 선택하면 사이드바가 열려요. 여기서 필요한 정보를 모두 입력할 수 있어요.

   ![Interactive Messenger 액션 사이드바](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023642963/original/g1yl3GvyJCoznC-gTRB115MF6To8pIJNyQ.png?1711616003)

2. 먼저 **Reply Type**(답장 유형)을 선택하세요. **Reply to DM**(DM에 답장)과 **Reply to comment via DM**(댓글에 DM으로 답장) 두 가지가 있어요.

   - **Reply to DM**: 고객에게서 받은 다이렉트 메시지를 바탕으로 고객에게 메시지를 보내려는 경우에 선택해요.
   - **Reply to comment via DM**: 고객이 남긴 댓글을 바탕으로 메시지를 보내려는 경우에 선택해요. 한 워크플로우에서 액션을 여러 개 쓴다면, 첫 번째 액션은 **Reply to comment via DM**으로, 그 뒤 액션은 **Reply to DM**으로 설정해야 해요.

   ![Reply Type 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023899443/original/7_u4Ez4a4mbbPugKF2zxeG8WG4fHdZsOyQ.jpeg?1712143489)

3. 답장 유형을 선택한 다음 보낼 메시지를 설정하세요. 기존 템플릿을 고르거나 직접 메시지를 작성할 수 있어요.

4. 파일도 첨부할 수 있어요. **Add attachment**(첨부 파일 추가)를 클릭한 다음 드라이브에서 파일을 선택하거나 URL을 입력해 파일을 추가하세요.

   ![첨부 파일 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023643283/original/9wYdrSCXGypXlkZ8C11BzuGARFERr3FJZg.png?1711616240)

5. 메시지에 버튼을 추가할 수도 있어요. 버튼은 고객과 소통하기 좋은 방법이에요. 고객이 누른 버튼에 따라 동작을 실행하거나, 전화번호나 웹사이트 링크를 공유할 수 있어요. **Add Button**(버튼 추가)을 클릭해 버튼을 추가하세요. 버튼은 최대 3개까지 추가할 수 있어요.

   ![버튼 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021792014/original/Xe5OcL08qSUoX2p68BaMtRnysweuCrPvVQ.png?1709125548)

6. 버튼 유형은 3가지 중에서 선택해요.

   - **Open website**(웹사이트 열기): 버튼에 URL을 넣어요. 링크를 입력하면 고객이 버튼을 클릭했을 때 해당 링크로 이동해요.
   - **Call Number**(전화 걸기): 전화번호를 입력해요. 고객이 이 버튼으로 전화를 걸 수 있어요.
   - **Perform Actions**(액션 실행): 고객과의 대화를 이어 가는 데 쓰는 버튼이에요. 이 버튼 뒤에 액션을 추가해서 흐름을 계속 이어 갈 수 있어요.

   ![버튼 유형 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023709757/original/D01TKQb9GD6syTO5PdyZ50xfS4EcYX9Nkg.png?1711710177)

7. 버튼에서는 먼저 **Button Name**(버튼 이름)을 입력하고, 다음으로 3가지 유형 중 하나를 선택하세요. 마지막으로 전화 버튼은 전화번호를, 웹사이트 버튼은 URL을 입력하세요.

   ![버튼 이름과 유형, 전화번호 또는 URL 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021869781/original/UfraujcXbI9guxqcgCHarVOA8UCAiIfcRQ.png?1709190359)

8. **Default Wait Time**(기본 대기 시간): 꼭 거쳐야 하는 단계예요. 기본으로 1분의 대기 시간이 들어가 있고, 수정할 수 있어요. 설정한 시간이 지나면 연락처는 **Default Branch**(기본 분기)로 이동해요.

   ![기본 대기 시간 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023643797/original/HmIOB4KaKi-DFdRUzHWg4F9i2NFdlO0aeg.png?1711616581)

9. **Default Branch**: 이 액션에는 항상 기본 분기가 있어요. 고객에게서 답장이 오지 않거나 **Call**(통화) 버튼이 선택되면 연락처는 이 분기로 이동해요.

### Reply In Comments 액션

이 액션을 쓰면 고객이 남긴 댓글에 답글을 달 수 있어요.

답글을 여러 개 추가해 두면 시스템이 그중 하나를 무작위로 골라 댓글에 답해요.

토글도 하나 있어요. 이 토글을 켜면 댓글에 좋아요도 눌러요.

![댓글 답글 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023709816/original/X4tD7ibVu2IN687Ric1rj6lnMqajgHqy1Q.png?1711710252)

### 워크플로우 모습

![완성된 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023822342/original/dNC36UEEUlXD15bAqi--bIhS57hzo4RkFw.png?1712052613)

### Facebook과 Instagram에서 보이는 메시지 모습

![Facebook에서 보이는 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021871756/original/yf3yAifuNEPDWZh3ZPG2I4MH5SqQnO-YUQ.png?1709191773)

![Instagram에서 보이는 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021871758/original/nEnxQAkpvUSyCFlRzUE3_aRmKXRVryGWUg.png?1709191777)

---

## 꼭 알아 두세요

- 트리거에서는 **Page is**(페이지)를 가장 먼저 선택해야 해요. 다른 필드는 모두 이 필드에 따라 달라지기 때문에, **Page is** 필터를 삭제하면 나머지 필터도 모두 삭제돼요.
- **Interactive Messenger** 액션에는 버튼을 최대 3개까지 추가할 수 있어요.
- **Call** 버튼 뒤에는 액션을 더 추가할 수 없어요.
- **Call** 버튼 뒤에는 연락처가 바로 **Default Branch**로 이동해요.
- 기본으로 1분 대기 시간이 들어가 있고, 수정할 수 있어요.
- 선택된 버튼이 없으면 연락처는 **Default Timeout** 분기로 이동해요. <!-- 검토 필요: 원문 내용이 서로 다름 (다른 곳에서는 "Default Branch"라고 표기) -->
- **Reply to DM**을 선택하면 시스템이 최근 24시간 안에 오간 대화가 있는지 확인해요. 대화가 있으면 메시지를 보내고, 없으면 전송에 실패해요.
- **Reply to DM**은 두 가지 경우에 써요. 첫째는 DM을 보낸 사용자와 대화를 시작할 때예요. 둘째는 **Reply to comment via DM** 이후에 그 사용자와 대화를 이어 갈 때예요. 예를 들어 첫 번째 액션의 **Reply Type**을 **Reply to comment via DM**으로 선택했다면, 그 뒤 액션의 **Reply Type**은 **Reply to DM**으로 설정해요.
- **Reply to comment via DM**을 사용할 때 연락처가 첫 번째 **Interactive Messenger** 액션에 답장하지 않았다면, **Default Timeout** 분기에 있는 **Interactive Messenger** 액션은 작동하지 않아요.
- **Reply to comment via DM**에는 7일의 기간 제한이 있어요. 댓글에 대한 DM 답장은 7일 안에 보내야 하고, 그렇지 않으면 전송에 실패해요.

---

## 자주 묻는 질문

### Facebook 페이지를 하이퍼클래스에 연결하려면 어떻게 하나요?
**소셜 플래너**에서 Facebook 페이지를 연결할 수 있어요.

### 한 사람이 댓글을 여러 번 달면 어떻게 되나요?
워크플로우를 연락처당 한 번만 실행하도록 설정할 수도 있고, 댓글이 달릴 때마다 실행하도록 설정할 수도 있어요.

### 답글을 조금 늦게 보내서 더 자연스럽게 보이게 할 수 있나요?
네. 워크플로우에서 댓글 답글 액션이나 메시지 액션 앞에 **Wait**(대기) 액션을 넣으면 돼요.

### 자동화가 실행된 뒤에 댓글을 삭제하면 어떻게 되나요?
댓글이 등록되는 즉시 트리거가 실행돼요. 그래서 나중에 댓글이 삭제되더라도 워크플로우 액션은 의도한 대로 처리돼요.
