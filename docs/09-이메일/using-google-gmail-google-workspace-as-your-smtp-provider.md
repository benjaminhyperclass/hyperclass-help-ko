---

번역일: 2026-04-06
카테고리: 09-이메일
---

# Google/Gmail/Google Workspace를 SMTP 제공업체로 사용하기

이 종합 가이드는 2단계 인증을 통한 앱별 계정 비밀번호 생성과 Gmail SMTP 연동에 대해 안내합니다. 특히 연결 문제를 겪는 필리핀 사용자에게 유용합니다.

- **기능**: Gmail/Google Workspace를 SMTP 제공업체로 연결하면 Hyperclass에서 SMTP 인증 정보를 사용하여 특정 Google 메일함을 통해 이메일을 발송할 수 있습니다.

- **제한사항**: 이 방법은 전체 Google Workspace 도메인을 Hyperclass 계정 전체에서 송수신하도록 연결하는 것이 아닙니다. SMTP는 인박스 동기화가 아닙니다.

- 인박스 스타일의 송수신(양방향 이메일 동기화)을 원한다면 SMTP 대신 전용 Gmail 연동(Integration)을 사용하세요.

---

**목차**

- [2단계 인증이 활성화된 계정의 앱별 비밀번호 생성](#2단계-인증이-활성화된-계정의-앱별-비밀번호-생성)
- [2단계 인증 활성화 방법](#2단계-인증-활성화-방법)
- [자주 묻는 질문](#자주-묻는-질문)

---

## 2단계 인증이 활성화된 계정의 앱별 비밀번호 생성

**참고사항:**

필리핀 사용자는 Gmail SMTP 연결 시 VPN 사용을 권장합니다.

[무료 이메일 주소를 SMTP로 사용할 수 없는 이유](링크)를 확인하세요.

1. [Google.com](//Google.com)으로 이동

2. 우측 상단의 프로필 아이콘을 클릭

3. 연동하려는 정확한 Google 계정을 선택했는지 확인

![Google 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833278/original/cBhUzmY3La5GZZwXvM3OMG8vqD9WTqPbmg.jpg?1721852088)

4. "Google 계정 관리" 클릭

![Google 계정 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833321/original/LjrfYH8Kd5YruR33CxYenH5LMyQ19mVIyg.jpg?1721852173)

5. "보안(Security)" 클릭

![보안 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833331/original/MohhWMeCisTVcfoPi_ck-e3pkOt4f9LWXg.jpg?1721852215)

6. 아래로 스크롤하여 "Google에 로그인" 섹션을 찾습니다.

2단계 인증이 활성화되어 있는지 확인하세요. 앱 비밀번호 옵션을 보려면 반드시 2단계 인증이 켜져 있어야 합니다.

2단계 인증이 보이지 않는다면, Google Admin에서 사용자의 2단계 인증 활성화 옵션이 꺼져 있는 것입니다. Google Workspace 관리자에게 연락하여 이 기능을 활성화하도록 요청하세요.

![2단계 인증 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833345/original/dgjp8iRg7ROhI3zCpydanj95cNEOA3_8qQ.jpg?1721852257)

7. 2단계 인증이 활성화되면 "앱 비밀번호(App passwords)" 클릭

드롭다운에서 올바른 이메일이 선택되어 있는지 확인하세요.

비밀번호를 입력하고 "다음" 클릭

![앱 비밀번호 접근](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833353/original/Yuqm2m5Z6l9okF-x_K2Bi0-T6bHUlxBq8g.jpg?1721852300)

8. 아래로 스크롤하여 "앱 비밀번호" 찾기

![앱 비밀번호 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833359/original/wmjlCrW8apM5BKayQDx-EgTl5wYzp8OTJg.jpg?1721852346)

9. 앱 이름을 입력 (예: SMTP integration) 후 "생성(Create)" 클릭

![앱 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833368/original/QWcTs6VuvnHMzOrDn9JKneopb6sDd0_Apw.jpg?1721852383)

10. 생성된 앱 비밀번호를 드래그하여 복사한 후, Gmail SMTP 연동 시 비밀번호 필드에 붙여넣기

![앱 비밀번호 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833391/original/4wirhZnoZlKRTI5JvPnE0nHUJ_ZT6n9ygA.jpg?1721852437)

11. 좌측 상단에서

A. 특정 로케이션(하위 계정)에서 Gmail SMTP를 연동하려면 해당 하위 계정 검색
B. 에이전시의 모든 로케이션에서 Gmail SMTP를 연동하려면 Agency View로 전환

https://app.gohighlevel.com/settings/email_services

![계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833401/original/uxI0YbgNvy7V9Qn91j4PZUXMw7S87ObXTg.jpg?1721852474)

12. A. 특정 로케이션에서 Gmail SMTP를 연동하려면 해당 하위 계정 검색

하위 계정에 들어간 후 좌측 하단의 "설정(Settings)" 클릭

![설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833415/original/8KEl6pb42BGgeghI5dIcnsqg3ZZOKYvDMg.jpg?1721852516)

13. 사이드바 메뉴에서 아래로 스크롤하여 "Email Services" 클릭

![이메일 서비스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833750/original/fTO5GLS_XJjVFTIibzgJlmYfwehR1E3lgA.jpg?1721853374)

14. 우측 상단의 "Add Service" 클릭

![서비스 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833764/original/qSz0YHh1HVBtlSVzTecjwvGeXWDJrFhIKA.jpg?1721853416)

15. 드롭다운에서 "Select Provider" → "Gmail" 선택

방금 생성한 앱 비밀번호를 "Password" 필드에 붙여넣기:

![Gmail SMTP 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833789/original/rXR7TCEAoXCVlnZBRBskg_NMfbs6Ne9_RA.jpg?1721853459)

16. Gmail 로그인 이메일을 입력하고 "Save" 클릭하면 완료!

답장은 발신자/회신 주소로 설정된 이메일 주소로 전송됩니다. SMTP만 사용하는 경우, 답장 추적이 설정되지 않으면 답장이 Hyperclass 대화(Conversations)에 자동으로 나타나지 않을 수 있습니다.

![설정 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833797/original/4C2NbT4Wk2TSRkrXEMthNWGS7A7hQSdVuQ.jpg?1721853495)

---

## 2단계 인증 활성화 방법

1. [Google.com](//Google.com)으로 이동

2. 우측 상단의 9개 점 메뉴 클릭

3. 아래로 스크롤하여 "Admin" 클릭

![Google Admin](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833832/original/4glC2LOOhpzwnyaKwaLz8BQn-jwttUqHWQ.jpg?1721853561)

좌측 상단의 메인 메뉴로 이동

"Security" > "Authentication" > "2-step verification" 클릭

![2단계 인증 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833860/original/2K196ddVHhG5SWYVASTYqaXj8VtvjlGEkw.jpg?1721853601)

"Allow users to turn on 2-Step Verification" 옵션이 활성화되어 있는지 확인하세요.

![사용자 허용 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833874/original/MhT34FFFI0qCg8IxNBj57Bzqm8Ox0fjO5A.jpg?1721853652)

Google 계정 관리 페이지를 새로고침하여 2단계 인증이 이제 표시되는지 확인하세요:

![2단계 인증 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029833878/original/FF5DD42oyY7rGfEeIQnZ7rH5DBmxJdIjYw.jpg?1721853684)

---

## 자주 묻는 질문

**Q: 회사에서 Google Workspace를 사용하는데도 설정 시 특정 이메일 주소를 입력해야 하나요?**

SMTP 인증은 하나의 메일박스 계정과 연결되기 때문입니다. Hyperclass에서 Google의 SMTP 서버를 통해 메일을 보내려면 단일 Gmail/Workspace 로그인 이메일과 해당 앱 비밀번호가 필요합니다.

**Q: Gmail SMTP 연동에서 앱별 비밀번호를 사용하는 이점은 무엇인가요?**

앱별 비밀번호는 추가 보안 계층을 제공하며, 매번 비밀번호를 입력할 필요 없이 앱이 Gmail 계정에 접근할 수 있게 해줍니다.

**Q: Gmail SMTP 연동에서 2단계 인증의 중요성은 무엇인가요?**

2단계 인증은 계정에 추가 보안을 제공합니다. 앱별 비밀번호를 설정할 때 Google은 계정 보호를 위해 2단계 인증이 활성화되어 있도록 요구합니다.

**Q: 필리핀 사용자가 Gmail SMTP 연결 시 VPN 사용을 권장하는 이유는 무엇인가요?**

VPN은 지역적 제한을 우회하고 Gmail SMTP 연결 시 추가 보안 계층을 제공할 수 있습니다. 필리핀과 같은 특정 지역 사용자에게 특히 유용할 수 있습니다.

**Q: 여러 애플리케이션에 같은 앱별 비밀번호를 사용할 수 있나요?**

아니요, Google은 계정 보안 강화를 위해 각 애플리케이션마다 고유한 앱별 비밀번호를 생성할 것을 권장합니다.

**Q: Google 계정에서 2단계 인증 옵션이 표시되지 않으면 어떻게 해야 하나요?**

2단계 인증 옵션이 나타나지 않는다면, Google Admin 설정에서 이 기능이 꺼져 있을 수 있습니다. Google Workspace 관리자에게 연락하여 옵션을 활성화해달라고 요청해야 합니다.

**Q: 2단계 인증을 활성화하고 앱별 비밀번호를 생성했는데도 연동이 작동하지 않습니다. 어떻게 해야 하나요?**

연동 시 앱별 비밀번호를 올바르게 입력했는지 확인하세요. 여전히 문제가 있다면 Gmail 지원팀에 문의하는 것이 가장 좋습니다.

**Q: 앱별 비밀번호를 설정한 후에도 일반 Gmail 비밀번호를 사용할 수 있나요?**

네, 가능합니다. 앱별 비밀번호는 일반 비밀번호를 대체하는 것이 아니라 특정 앱이 Gmail 계정에 접근할 때 사용됩니다.

**Q: 모든 발송 이메일이 수신자에게 해당 Gmail 계정에서 온 것처럼 보이나요?**

일반적으로 그렇습니다. Google을 포함한 많은 SMTP 제공업체는 발신자 주소가 인증된 메일박스와 일치하기를 기대합니다. '발신자(From)' 주소가 연결된 SMTP 이메일과 일치하지 않으면 전송에 실패하거나 메시지에 '대신 보냄' 표시가 나타날 수 있습니다.

---
*원문 최종 수정: 2026-03-06*
*Hyperclass 사용 가이드 — hyperclass.ai*