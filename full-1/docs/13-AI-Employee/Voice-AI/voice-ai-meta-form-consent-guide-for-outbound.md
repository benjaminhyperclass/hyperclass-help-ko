---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007987-voice-ai-meta-form-consent-guide-for-outbound
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# 음성 AI 아웃바운드 통화를 위한 Meta 폼 동의 설정

음성 AI 아웃바운드 통화에 쓰는 Facebook 리드 폼에는 올바른 동의 면책 조항이 들어 있어야 해요. 그래야 하이퍼클래스가 리드가 AI 통화 수신에 동의했는지 확인할 수 있어요. 이 문서에서는 Meta 폼에 음성 AI 면책 조항을 넣고, 하이퍼클래스에서 폼을 매핑한 뒤, 면책 조항이 인식되었는지 확인하는 방법을 안내해요. 이 과정을 마치면 동의 정보가 없어서 음성 AI 아웃바운드 통화가 차단되는 일을 막을 수 있어요.

## Meta 폼 동의란?

아웃바운드 음성 AI를 위한 Meta 폼 동의란, 음성 AI에서 승인된 동의 면책 조항을 Meta Business Suite의 Facebook 리드 폼에 넣고, 그 폼을 하이퍼클래스에서 매핑해 면책 조항이 인식되도록 하는 과정이에요. Facebook 리드 폼은 Meta에서 관리하기 때문에, 면책 조항은 하이퍼클래스가 아니라 Meta Business Suite 안에서 추가해야 해요.

Meta 폼 동의를 설정하면 Facebook 리드 폼을 제출하는 리드에게 필수 동의 문구가 표시된 뒤에야 해당 제출 건에 음성 AI 아웃바운드 통화를 쓸 수 있어요. 폼을 매핑하고 새로고침하면 하이퍼클래스가 연결된 폼을 확인해서 면책 조항이 있는지 알려 줘요.

## Meta 폼 동의의 주요 이점

- 동의 인식: 하이퍼클래스가 연결된 Facebook 리드 폼에서 음성 AI 면책 조항을 감지할 수 있어요.
- 아웃바운드 통화 준비: 폼 동의가 없어서 음성 AI 아웃바운드 통화가 차단되는 일을 줄여 줘요.
- Meta 폼 호환: Facebook 리드 폼을 만들고 관리하는 Meta Business Suite에서 면책 조항을 추가하는 절차를 안내해요.
- 쉬운 문제 확인: 폼에 면책 조항이 아직 없는지, 제대로 인식되었는지 쉽게 확인할 수 있어요.

## 설정 방법

설정은 하이퍼클래스와 Meta Business Suite 양쪽에서 진행해요. 먼저 음성 AI에서 면책 조항을 확인하고, Facebook 리드 폼에 추가한 다음, 하이퍼클래스에서 폼을 매핑하고, 동의 상태를 새로고침해서 승인을 확인해요.

1. 하이퍼클래스에서 **AI 에이전트 > 음성 AI**로 이동하세요.
2. 오른쪽 위의 **공개 정보 업데이트**를 클릭하세요.

   ![공개 정보 업데이트 버튼](https://jumpshare.com/share/FU1gQmsQYfiOxZMCE8dK+/Screen+Shot+2026-05-19+at+19.45.56.png)
3. 기존 공개 정보를 확인하거나, 고객이 원하는 동의 문구를 입력하세요.
4. **compatibility checker**(호환성 검사기)로 면책 조항이 음성 AI 아웃바운드 통화에 권장되는 구조인지 확인하세요.

   ![호환성 검사기 화면](https://jumpshare.com/share/OsM4dOB725mHjFQsMiYe+/Screen+Shot+2026-05-19+at+19.55.12.png)
5. 면책 조항 확인이 끝나면, 이 페이지를 벗어나기 전에 승인된 면책 조항 텍스트를 복사하세요.
6. 같은 음성 AI 공개 정보 영역에서 **Choose Applicable Products**(적용 상품 선택) > **수동 동의 적용**으로 이동하세요.
7. **Facebook Forms**(Facebook 폼) 섹션을 찾으세요.
8. **동의 업데이트**를 클릭하세요.
9. 새 브라우저 탭에서 Meta Business Suite가 열려요.

   {% hint style="info" %}
   Facebook 리드 폼은 하이퍼클래스 안에서 수정할 수 없어요. 폼의 면책 조항을 바꾸려면 Meta Business Suite에서 작업해야 해요.
   {% endhint %}

   ![Meta Business Suite가 새 탭에서 열리는 화면](https://jumpshare.com/share/igDyH2dXdf662ltsM88Q+/GIF+Recording+2026-05-19+at+20.21.14.gif)
10. Meta Business Suite에서 새 Facebook 리드 폼을 만들거나, 임시 저장된 폼을 편집하세요.

    {% hint style="info" %}
    이미 게시된 Facebook 리드 폼은 편집할 수 없을 수 있어요. 폼을 편집할 수 없으면 필요한 면책 조항을 넣어 새 폼을 만드세요.
    {% endhint %}
11. **개인정보처리방침** 섹션이 나올 때까지 폼 설정을 진행하세요.
12. **개인정보처리방침** 섹션에서 **Add Custom Disclaimer**(맞춤 면책 조항 추가)를 선택하세요.
13. 면책 조항의 제목을 입력하세요.
14. 하이퍼클래스에서 복사한 음성 AI 면책 조항 텍스트를 붙여넣으세요.
15. 면책 조항이 **개인정보처리방침** 섹션에 들어갔는지 확인하세요.
16. **Create Form**(폼 만들기)을 클릭하세요.

    ![Create Form 버튼을 클릭하는 모습](https://jumpshare.com/share/QnquYmNF2grCHAdTwPK2+/GIF+Recording+2026-05-19+at+20.50.04.gif)
17. 하이퍼클래스로 돌아와 **공개 정보 업데이트** 화면에서 **새로고침**을 클릭해 폼을 불러오세요.

    ![새로고침 버튼](https://jumpshare.com/share/UNgKZE6oyRI47DJMy0Fw+/Screen+Shot+2026-05-19+at+21.06.41.png)
18. 폼에 "**면책 조항을 찾을 수 없습니다**"라고 표시될 수 있어요.

    ![면책 조항을 찾을 수 없다고 표시된 폼](https://jumpshare.com/share/HofqZldMwFnbdm6AmSNy+/NADC+Inc.+-+6+March+2026+2026-05-19+at+21.08.39.png)
19. 이 문제를 해결하려면 **설정**으로 이동하세요.

    ![설정 메뉴](https://jumpshare.com/share/LeDcECQcowAj8gJLxrkA+/Screen+Shot+2026-05-19+at+21.11.03.png)
20. **연동 > Facebook**을 선택하세요.

    ![연동 > Facebook 화면](https://jumpshare.com/share/7yMVbNhbJHLlisWei4aQ+/Screen+Shot+2026-05-19+at+21.13.01.png)
21. 점 세 개 메뉴를 클릭하고 **폼 필드 매핑**을 선택하세요.
22. 새로 만들었거나 업데이트한 Facebook 리드 폼을 선택하세요.
23. 필수 필드를 모두 매핑하세요.

    ![폼 필드를 매핑하는 모습](https://jumpshare.com/share/WJlNfdFVCuevfQmcH6HE+/GIF+Recording+2026-05-19+at+21.15.02.gif)
24. **AI 에이전트 > 음성 AI > 공개 정보 업데이트**로 돌아가세요.
25. **수동 동의 적용**으로 돌아가세요.
26. 처음에는 폼이 면책 조항이 없는 폼 목록에 그대로 보일 수 있어요.
27. 페이지를 **새로고침**하세요.
28. 폼이 면책 조항 누락 목록에서 사라졌다면, 면책 조항이 제대로 인식된 거예요.

    ![면책 조항 누락 목록에서 폼이 사라지는 모습](https://jumpshare.com/share/HVry2pmyxkNuOyUzlh2v+/GIF+Recording+2026-05-19+at+21.18.05.gif)

## 자주 묻는 질문

### 이미 있는 Facebook 리드 폼을 편집할 수 있나요?
게시된 Facebook 리드 폼 중에는 편집할 수 없는 폼이 있어요. 폼을 편집할 수 없으면 Meta Business Suite에서 새 Facebook 리드 폼을 만들고, 게시하기 전에 음성 AI 면책 조항을 추가하세요.

### Meta Business Suite의 어디에 음성 AI 면책 조항을 넣어야 하나요?
Facebook 리드 폼의 **개인정보처리방침** 섹션에서 **Add Custom Disclaimer**(맞춤 면책 조항 추가)를 사용해 추가하세요.

### 하이퍼클래스에서 바로 면책 조항을 추가할 수 있나요?
아니요. Facebook 리드 폼은 Meta Business Suite에서 편집해야 해요. 하이퍼클래스에서는 **동의 업데이트**로 Meta의 해당 화면까지 갈 수 있지만, 폼 변경은 Meta에서 해야 해요.

### Facebook 리드 폼을 게시한 뒤에도 매핑해야 하나요?
네. Meta Business Suite에서 폼을 게시한 뒤 하이퍼클래스로 돌아와 **설정 > 연동 > Facebook > 폼 필드 매핑**에서 폼 필드를 매핑하세요.

### 폼을 게시했는데도 면책 조항이 없다고 나와요.
페이지를 새로고침하기 전까지는 폼이 계속 보일 수 있어요. 폼을 매핑한 뒤 **수동 동의 적용**으로 돌아가 페이지를 새로고침하세요.

### 면책 조항이 인식되었는지 어떻게 알 수 있나요?
새로고침한 뒤 Facebook 리드 폼이 면책 조항 누락 목록에 더 이상 보이지 않으면, 하이퍼클래스가 면책 조항을 인식한 거예요.

### Facebook 리드 폼에 면책 조항을 여러 개 넣을 수 있나요?
네, Meta 폼에는 면책 조항을 여러 개 넣을 수 있어요. 다만 음성 AI 면책 조항은 제대로 인식되도록 **개인정보처리방침** 섹션에 추가해야 해요.

### 면책 조항이 인식되면 음성 AI 아웃바운드 통화가 항상 연결되나요?
아니요. 폼 면책 조항은 동의 요건 중 하나일 뿐이에요. 음성 AI 아웃바운드 통화는 그 밖에 해당하는 다른 아웃바운드 통화 요건도 모두 충족해야 해요.
