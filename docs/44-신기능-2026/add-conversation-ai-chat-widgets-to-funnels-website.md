---
원문: /support/solutions/articles/155000009426-add-conversation-ai-chat-widgets-to-funnels-website
번역일: 2026-11-07
카테고리: 44-신기능-2026
---

# 퍼널·웹사이트에 대화 AI와 채팅 위젯 추가하기

퍼널·웹사이트 빌더 안에서 채팅 위젯을 추가하고 대화 AI를 바로 설정하는 방법을 안내해요. 기존 위젯을 쓰거나 새로 만들 수 있고, 퍼널 콘텐츠로 AI 에이전트를 자동 학습시켜 위젯에 연결할 수 있어요. 별도 코드 작성은 필요 없고, 에이전트 설정은 직접 관리할 수 있어요.

## AI And Chat Widget 요소 살펴보기

**AI And Chat Widget**(AI 및 채팅 위젯) 요소는 채팅 위젯 배치와 대화 AI 설정을 한 번에 처리해요. 채팅 위젯을 만들거나 고르면 AI 에이전트가 자동으로 구성되고, 퍼널 콘텐츠로 학습한 뒤 위젯에 연결돼요.

**Scan & auto-configure**(스캔 후 자동 구성)를 실행하면 하이퍼클래스가 퍼널의 페이지를 스캔해서 비즈니스 정보를 파악해요. 그리고 아래 항목이 채워진 AI 에이전트를 자동으로 만들어요.

- **지식 베이스**: 방문자의 질문에 답하기 위해 퍼널 페이지에서 모은 콘텐츠예요.
- **성격**: 비즈니스에 맞춘 말투와 분위기예요.
- **목표**: 에이전트가 대화를 이끌어 갈 때 기준이 되는 목표예요.
- **안내**: 에이전트의 행동 지침과 영업시간 같은 비즈니스 정보예요.
- **Opening Message**(첫 인사 메시지): 방문자에게 보여 줄 인사말로, 자동으로 만들어져요.

설정이 끝나면 에이전트가 선택한 채팅 위젯에 연결돼요. 새 에이전트를 만드는 대신 이미 만들어 둔 대화 AI 에이전트를 연결할 수도 있어요.

## 채팅 위젯을 추가하고 대화 AI 설정하기

**AI And Chat Widget** 요소를 쓰면 퍼널·웹사이트 빌더를 떠나지 않고 채팅 위젯을 추가하고 대화 AI를 설정할 수 있어요. 에이전트 구성은 하이퍼클래스가 백그라운드에서 처리하기 때문에, 그동안 계속 편집할 수 있어요.

1. 빌더에서 퍼널 또는 웹사이트를 열고 **요소 추가 > AI And Chat Widget**으로 이동하세요.

   *![요소 추가 메뉴에서 AI And Chat Widget 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084255840/original/nu6fMgX58xfF6wOsW3HuF7FzVboZaffI_A.png?1793055426)*
2. **채팅 위젯** 탭에서 기존 위젯을 선택하면 페이지에 추가돼요. 대화 AI용 위젯을 새로 만들려면 **새 채팅 생성**을 클릭하고 **라이브 채팅**을 선택하세요. 선택한 채팅 위젯을 다시 클릭하면 페이지에서 제거돼요.

   *![채팅 위젯 탭에서 위젯 선택 또는 새로 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084255833/original/YzqWAxW931V6GmBmYD96B-Ycw2CATg4WPw.png?1793055413)*
3. **AI 에이전트** 탭을 열고 **Setup Conversation AI**(대화 AI 설정)를 클릭하세요. 이미 대화 AI 에이전트가 있다면 **Scan & auto-configure**로 새로 만드는 대신 기존 에이전트를 연결할 수 있어요.

   *![AI 에이전트 탭의 Setup Conversation AI 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084255852/original/-VXT0oEh5QGCYxFJrcz2eNb0WgXMlhYpsA.png?1793055471)*
4. 감지된 퍼널 페이지를 확인하고 **Scan & auto-configure**를 클릭해 새 에이전트를 만드세요.

   *![감지된 퍼널 페이지 확인 후 Scan & auto-configure 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084255861/original/9Q2plYeO_jQ4drKzM7ug2_kgiCRaK-kj2g.png?1793055493)*
5. 하이퍼클래스가 백그라운드에서 에이전트를 구성해요. 설정이 끝날 때까지 빌더로 돌아가 퍼널 편집을 계속해도 돼요.

   *![백그라운드에서 에이전트를 구성하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084255866/original/uTqimKp2X-F_2D2ZirzRU7hvLBDhnRpykw.png?1793055508)*
6. **Conversation AI is live!**(대화 AI가 라이브 상태예요!) 메시지가 나타나면 **Manage agent**(에이전트 관리)를 클릭해서 자동 생성된 구성을 확인하세요.

   *![Conversation AI is live! 메시지와 Manage agent 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084255870/original/lutAlYJAhm00LUsPMHHCKYTceMeNdmUIHQ.png?1793055525)*
7. 에이전트 설정을 확인하고, 바꾼 내용이 있으면 저장한 다음 퍼널 또는 웹사이트를 게시하세요.

   *![에이전트 설정 확인 후 저장 및 게시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084255871/original/fVR2W7iSRPL_J_hNKGNLFN_5MEpGZPYGmg.png?1793055542)*

## 대화 AI 에이전트 관리하기

설정이 끝난 뒤에는 생성된 에이전트를 확인하고 비즈니스에 맞게 다듬을 수 있어요. **Manage agent**에서 성격, 목표, 안내, 지식 베이스 콘텐츠를 수정할 수 있어요.

퍼널 또는 웹사이트를 게시하기 전에 에이전트의 응답을 테스트해 볼 수도 있어요. 비즈니스 정보가 바뀌면 학습된 콘텐츠도 함께 관리하세요.

*![Manage agent에서 에이전트 설정 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084255877/original/WARpgJLHi4uWaEiKCs3G1fMea7ib7SLheg.png?1793055581)*
