---
원문: /support/solutions/articles/155000003194-how-to-create-multiple-chat-widgets-in-a-single-sub-account
번역일: 2026-11-06
카테고리: 06-사이트
---

# 서브 계정 하나에서 채팅 위젯 여러 개 만들고 적용하기

하이퍼클래스에서 채팅 위젯을 여러 개 만들어 상황에 맞게 대화를 나눌 수 있어요. 이 문서에서는 서브 계정 하나에 채팅 위젯을 여러 개 만드는 방법과, 만든 위젯을 사이트에 적용하는 방법을 안내해요.

---

## 여러 채팅 위젯 개요

같은 하이퍼클래스 계정 안에서 채팅 위젯을 두 개 이상 운영할 수 있어요. 위젯마다 브랜딩, 채널, 동작 방식을 따로 정할 수 있어서 퍼널이나 사이트별로 알맞은 채팅 환경을 제공할 수 있어요. 목적에 맞는 위젯을 쓰면 전환율이 올라가고, 대화는 한곳에서 그대로 관리할 수 있어요.

---

## 여러 채팅 위젯의 장점

- 맞춤형 환경: 사이트마다 디자인과 설정이 다른 채팅 위젯을 추가할 수 있어요.
- 간편한 업데이트: 위젯 설정을 바꿔도 코드를 다시 설치하지 않아도 돼요.
- 효율적인 관리: 다른 페이지나 퍼널에 영향을 주지 않고 위젯별로 설정을 수정할 수 있어요.
- 유연한 적용: 사이트 전체에 기본 위젯을 지정하거나, 페이지마다 다르게 지정할 수 있어요.

---

## 채팅 위젯 여러 개 만들기 (사전 준비)

채팅 위젯을 사이트에 적용하려면 먼저 사용할 위젯을 만들어 두어야 해요. 아래 순서대로 위젯을 여러 개 만드세요. 이미 채팅 위젯이 여러 개 있다면 이 부분은 건너뛰어도 돼요.

```
채팅 위젯을 만드는 방법을 더 자세히 알고 싶다면 여기를 클릭하세요!
```

1. **사이트 > 채팅 위젯**으로 이동하세요.

   ![사이트 메뉴의 채팅 위젯 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062268806/original/SvbwjAsxfv3ohjid0ZUvbW_5-VO2nzOL_g.png?1767911948)
2. 파란색 **+ 신규** 버튼을 클릭하세요.

   ![+ 신규 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062268830/original/VciyapzBMSehabO3TVWU6x-v2LjGXyPCGQ.png?1767912041)
3. **채팅 유형 선택** 화면에서 만들고 싶은 채팅 위젯 유형을 선택하세요. 유형별 설명은 [여기](../getting-started-with-chat-widget.md)에서 볼 수 있어요.

   ![채팅 위젯 유형 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062268855/original/URwAt2nYePnu9Cu2l9ekbLNI23fTMic38g.png?1767912177)

---

## 사이트 전체에 채팅 위젯 지정하기

사이트 단위로 채팅 위젯을 고르면 웹사이트나 퍼널 전체에 위젯 하나가 적용돼요. 만들어 둔 모든 채팅 위젯 중에서 고를 수 있어서, 사이트마다 다른 위젯을 지정할 수도 있어요.

사이트에 채팅 위젯을 지정하려면 아래 순서를 따르세요.

1. **사이트 > 웹사이트** 또는 **퍼널**로 이동한 뒤, 수정할 웹사이트를 선택하세요.

   ![웹사이트 또는 퍼널 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062269027/original/aFqNqaBGVsysAMzvEpl83OtLMZa6FoXleQ.png?1767912731)
2. **설정** 탭으로 이동하세요. **채팅 위젯** 드롭다운에서 만들어 둔 채팅 위젯 목록을 확인하고, 이 사이트에 적용할 위젯을 선택하세요.

   ![설정 탭의 채팅 위젯 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062269058/original/Hi5LPtSeut-2d1VCF_e6sYUVl8fbQjT1Bg.png?1767912781)

---

## 페이지별로 채팅 위젯 지정하기

페이지마다 코드 삽입 요소를 넣으면 웹사이트나 퍼널 안의 특정 페이지나 퍼널 단계에서만 채팅 위젯을 보여 줄 수 있어요. 방문자가 보는 화면을 더 세밀하게 조절할 수 있는 방법이에요.

페이지 하나에 채팅 위젯을 지정하려면 아래 순서를 따르세요.

1. **사이트 > 웹사이트** 또는 **퍼널**로 이동한 뒤, 수정할 웹사이트를 선택하세요.

   ![웹사이트 또는 퍼널 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062269027/original/aFqNqaBGVsysAMzvEpl83OtLMZa6FoXleQ.png?1767912731)
2. **설정** 탭으로 이동하세요. **채팅 위젯** 드롭다운이 **없음**으로 되어 있는지 확인한 뒤 **저장**을 클릭하세요.

   ![채팅 위젯을 없음으로 설정한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062269058/original/Hi5LPtSeut-2d1VCF_e6sYUVl8fbQjT1Bg.png?1767912781)
3. **사이트 > 채팅 위젯**으로 이동해 사용할 채팅 위젯을 열고, **코드 가져오기**를 클릭한 뒤 코드를 복사하세요.

   ![코드 가져오기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062269283/original/j-XR95jST0HPVTb5oxI53bz9dABsS-Dl0A.png?1767913407)
4. 적용할 페이지나 단계의 **Page Editor**(페이지 편집기)를 여세요. **Add Element (+)**(요소 추가)를 클릭하고 **코드**를 찾아 캔버스로 끌어다 놓으세요.

   ![요소 추가에서 코드 요소를 캔버스로 끌어다 놓는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062269306/original/swHQJbQxniDAXbK-Us90xEpEsyCYAWDTwg.png?1767913506)
5. **코드 요소**를 선택하세요. 오른쪽 설정 패널에서 **Open Code Editor**(코드 편집기 열기)를 클릭하고, 복사한 코드를 붙여 넣은 뒤 **저장**을 클릭하세요.

   ![코드 편집기에 코드를 붙여 넣는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062269325/original/wKE7dpOwG8iEVe4QTi2-sztg959o2P9Ydg.png?1767913605)

---

## 자주 묻는 질문

### 위젯 스타일이나 설정을 바꾸면 코드를 다시 설치해야 하나요?
아니요. 채팅 위젯이 바뀐 내용에 맞게 자동으로 업데이트돼요.

### **설정**에서 채팅 위젯을 지정하고 코드 요소도 함께 쓰면 어떤 위젯이 보이나요?
둘 다 설정되어 있으면 **설정**에서 고른 위젯이 우선해요. **설정**에서 선택한 위젯만 표시돼요.

### 올인원 채팅 위젯을 쓰면 여러 위젯을 만들 필요가 없나요?
올인원 옵션은 여러 채널을 위젯 하나로 모아 줘요. 하지만 페이지나 사이트마다 디자인이나 CTA를 다르게 하고 싶다면 위젯을 여러 개 운영할 수 있어요.

### 페이지에 올바른 위젯이 적용됐는지 어떻게 확인하나요?
편집기의 **미리보기**로 페이지에 어떤 위젯이 적용되어 있는지 확인할 수 있어요.
