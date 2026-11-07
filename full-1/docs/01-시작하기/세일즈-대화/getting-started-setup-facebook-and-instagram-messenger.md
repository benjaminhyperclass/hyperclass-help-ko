---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005068-getting-started-setup-facebook-and-instagram-messenger
번역일: 2026-11-06
카테고리: 01-시작하기
---

# Facebook·Instagram 메신저 연결하기

Facebook과 Instagram 메신저를 하이퍼클래스에 연결하면 고객 메시지를 한곳에서 확인하고 답할 수 있어요. 이 문서에서는 연결 방법, Instagram과 Facebook 연동 방법, 연결이 잘 됐는지 확인하는 테스트 방법을 안내해요.

## Facebook과 Instagram 연결하기

먼저 하이퍼클래스에서 Facebook과 Instagram을 함께 쓸 수 있게 연결해요.

1. **설정 > 연동**으로 이동하세요.
2. Facebook & Instagram 항목에서 **연결**을 클릭하세요.

   ![설정 > 연동 화면에서 Facebook & Instagram 연결 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046961045/original/QdZFNRgoafMeGOzeflCNcbwiaqz-QRd2Jg.png?1747785916)

3. **Facebook에 로그인**한 다음, 사용할 Facebook 페이지를 선택하세요. Instagram에 연결된 페이지를 골라야 해요.
4. **Facebook & Instagram 연결**을 클릭하세요.
5. 마지막으로 **리드 동기화**를 클릭하세요.

---

## Facebook·Instagram 메시지로 연락처가 만들어지는 방식

누군가 Facebook이나 Instagram으로 비즈니스에 처음 메시지를 보내면, 하이퍼클래스는 **Contact Deduplication Preferences**(연락처 중복 제거 환경설정)에 따라 연락처를 만들거나 업데이트해요.

- **연락처 중복 허용**이 꺼져 있을 때, 그 사람이 나중에 기존 연락처와 일치하는 이메일이나 전화번호를 알려 주면 하이퍼클래스가 메신저 연락처를 기존 연락처에 자동으로 병합해요. 그래서 완성된 프로필 하나만 남아요.
- **연락처 중복 허용**이 켜져 있으면 자동 병합이 실행되지 않아요. 같은 사람의 연락처가 따로 생길 수 있어요.

**자세히 보기**

- Facebook Troubleshooting - Integration Issues
- Facebook Multi page Troubleshoot
- Facebook Pages missing in Manage Pages during integration
- Connect Instagram Business or Creator to Facebook (allows posting to IG)
- Allow Duplicate Contacts (Contact Deduplication Preferences)

---

## Instagram을 Facebook에 연결하기

이제 Instagram과 Facebook을 연결해서 메시지가 하나의 받은편지함으로 들어오게 해요.

1. Facebook 계정에 로그인한 뒤 연결할 페이지로 이동하세요.
2. **계정 > 설정**을 클릭하세요.
3. 검색창에서 **Linked Accounts**(연결된 계정)를 검색하세요.
4. **Instagram**을 선택하고 **연결**을 클릭하세요.

   ![Linked Accounts에서 Instagram을 선택하고 연결하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046961111/original/qiMpvvQcdL5_5wGdinP4dhnA4sykmmaXRw.png?1747786378)

5. Instagram 메시지가 받은편지함에 표시되도록 토글을 켠 상태로 두세요.
6. Instagram 로그인 정보를 입력해 인증하세요.

여기까지 하면 소셜 메시지를 하이퍼클래스에서 받을 준비가 끝나요. 이어서 테스트 메시지를 보내 연결이 잘 됐는지 확인해 보세요.

---

## Facebook·Instagram 메신저 연결 테스트하기

Facebook 페이지와 Instagram 계정을 연결한 뒤에는 테스트 메시지를 보내 받은 메시지가 하이퍼클래스에 제대로 도착하는지 확인하세요.

{% hint style="info" %}
하이퍼클래스에 연결한 비즈니스 계정이 아닌 다른 Facebook 또는 Instagram 계정으로 테스트 메시지를 보내세요. 실제 고객이 메시지를 보내는 상황과 더 비슷하게 확인할 수 있어요.
{% endhint %}

### Facebook 메신저 테스트

1. 다른 Facebook 계정에서 연결한 비즈니스의 Facebook 페이지를 여세요.
2. **메시지**를 클릭하고 페이지로 테스트 메시지를 보내세요.
3. 하이퍼클래스에서 해당 **서브 계정**을 여세요.
4. **대화**로 이동하세요.
5. 대화 받은편지함에서 새 대화를 찾으세요.
6. 대화를 열고 Facebook 메신저 테스트 메시지가 메시지 기록에 있는지 확인하세요.

   ![대화 화면에서 확인한 Facebook 메신저 테스트 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078682474/original/FTxoEww4wAUJl0Rp_Fq2AWylS1ZoqNyTLA.png?1787050147)

### Instagram 메시지 테스트

1. 다른 Instagram 계정에서 연결한 비즈니스의 Instagram 프로필을 여세요.
2. 해당 계정으로 새 다이렉트 메시지(DM)를 보내세요.
3. 하이퍼클래스에서 해당 **서브 계정**을 여세요.
4. **대화**로 이동하세요.
5. 대화 받은편지함에서 새 대화를 찾으세요.
6. 대화를 열고 Instagram 테스트 메시지가 메시지 기록에 있는지 확인하세요.

### 연결이 잘 된 상태는 이렇게 보여요

아래 내용을 모두 확인하면 연동이 제대로 작동하고 있는 거예요.

- 테스트 메시지가 하이퍼클래스의 **대화**에 나타나요.
- 메시지가 올바른 연락처와 대화 아래에 표시돼요.
- 대화를 열어 받은 Facebook 메신저 또는 Instagram 메시지를 볼 수 있어요.

![하이퍼클래스 대화 화면에 테스트 메시지가 표시된 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078706715/original/xGnLhZqZULa9VCCb21fzNJofyUmRGHhYtQ.png?1787060979)

누군가 Facebook이나 Instagram으로 처음 메시지를 보내면, 하이퍼클래스는 **Contact Deduplication Preferences**에 따라 연락처를 만들거나 업데이트해요.

### 답장 테스트

처음부터 끝까지 제대로 되는지 확인하려면 하이퍼클래스의 **대화**에서 테스트 메시지에 답장을 보내세요. 그런 다음 테스트에 사용한 Facebook 메신저 또는 Instagram 계정으로 돌아가 답장이 도착했는지 확인하세요.

받은 메시지와 보낸 답장이 모두 잘 전달되면 메시지 연결이 정상적으로 작동하고 있는 거예요.

### 테스트 메시지가 보이지 않을 때

**대화**에 테스트 메시지가 나타나지 않으면 아래 순서로 확인해 보세요.

1. **설정 > 연동**으로 이동해 올바른 Facebook 페이지와 Instagram 계정이 연결되어 있는지 확인하세요.
2. 연결한 계정에서 메시지 접근이 활성화되어 있는지 확인하세요.
3. Facebook·Instagram 권한이 알맞게 허용되어 있는지 확인하세요.
4. Instagram은 Instagram 계정이 Facebook 페이지에 제대로 연결되어 있는지 확인하세요.
5. 연결과 권한을 확인한 뒤 테스트 메시지를 다시 보내 보세요.

그래도 메시지가 나타나지 않으면 Facebook·Instagram 메시지 추가 점검 방법이 있는 Messaging Setup & Troubleshoot 문서를 참고하세요.
