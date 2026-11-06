---

번역일: 2026-04-06
카테고리: 09-이메일
---

# 이메일 링크가 열리지 않는 문제 해결 방법

하이퍼클래스에서 발송한 이메일의 링크를 클릭하면 email.mg.yourdomain.com으로 이동하는데, 이는 해당 로케이션에서 설정한 Mailgun 서브도메인입니다. 이메일 통계 추적을 위해 링크를 변경해야 하기 때문입니다.

도메인 공급업체에서 설정할 때 추가한 CNAME 레코드는 Mailgun이 열람 추적, 클릭 추적, 구독 취소 등을 추적하는 데 필수적입니다.

email.mg.yourdomain.com의 레코드는 Mailgun.org를 가리켜야 하며, 이를 통해 데이터를 가져와서 이메일 통계를 표시할 수 있습니다.

자체 Mailgun 도메인/서브도메인을 설정한 상태에서 링크를 클릭했을 때 "이 사이트에 연결할 수 없음" 오류나 "email.mg.yourdomain.com에서 연결을 거부했습니다" 오류가 표시된다면:

![이메일 링크 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48195453693/original/oBuzYgtIiHU_qb8FPQDQgmjvB5mrR1_4cg.png?1646072280)

## 

이는 CNAME 레코드가 제대로 설정되지 않았음을 의미합니다.

1. 이를 확인하려면 위 이미지에서 빨간색으로 표시된 부분을 복사하세요 ---> email.mg.yourdomain.com

Mailgun에서 설정한 서브도메인에 따라:

예시:
- mg.companyname.com을 설정한 경우: email.mg.companyname.com의 CNAME 레코드를 조회
- replies.companyname.com을 설정한 경우: email.replies.companyname.com의 CNAME 레코드를 조회  
- support.companyname.com을 설정한 경우: email.support.companyname.com의 CNAME 레코드를 조회

2. [MX toolbox](https://mxtoolbox.com/CnameLookup.aspx) 또는 [Whatsmydns](https://www.whatsmydns.net/)에서 CNAME 레코드를 조회하세요:

[MX toolbox](https://mxtoolbox.com/CnameLookup.aspx):

![MX toolbox 조회 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48050724642/original/BTn6nQUwsXyVfr5LdrKHoDRoKXvOHBwaQg.png?1595545184)

[Whatsmydns](https://www.whatsmydns.net/):

![Whatsmydns 조회 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155004442481/original/AGGXVPiBkACoy2fODeEdIQcQseLuSJDmyA.png?1691095424)

3. "DNS records not found"라고 표시되는 경우:
   
   a. 도메인 공급업체에 로그인
   b. DNS 레코드로 이동하여 CNAME 레코드 확인

4. 이미 mailgun.org를 가리키고 있는 경우:
   
   a. [Mailgun](https://login.mailgun.com/login/)에 접속 → 왼쪽의 Sending(발송) 탭 클릭 → Domain Settings(도메인 설정)
   b. Tracking Protocol(추적 프로토콜) 편집
   c. 하이퍼클래스에서 다시 이메일 테스트 발송

![Mailgun 도메인 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48244504991/original/fM2lh_VngLqDySJf3Pv2JeBpGz8Bc4IPag.png?1660162191)

![Mailgun 추적 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48244504976/original/J_f2ahU2CatRF9MNJEdOIugKxjpIBfvYYg.png?1660162175)

[HTTPS 추적 링크 활성화 방법](https://help.mailgun.com/hc/en-us/articles/360011566033-How-to-Enable-HTTPS-Tracking-Links)을 참고하세요.

5. 위 정보로 해결되지 않는다면, 도메인 공급업체의 지원팀에 도움을 요청하세요. 다음 레코드들을 추가해야 한다고 설명할 수 있습니다:

![DNS 레코드 설정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155004540974/original/s0puwTTcRlben7UZfFvZrWTBtd9wUhOz9w.png?1691198730)

6. 도메인 공급업체에서 모든 DNS 레코드가 정상이라고 확인했다면, 하이퍼클래스 지원팀에 문의하세요.

## 자주 발생하는 문제:

1. CNAME 레코드에 루트 도메인이 포함된 경우 작동하지 않습니다:

GoDaddy나 Namecheap을 사용하는 경우, 레코드에서 루트 도메인을 제외하여 email.mg만 입력해야 합니다.

호스트 네임:

설정하려는 서브도메인에 따라:
- mg.companyname.com을 설정하는 경우: 호스트 네임은 email.mg
- replies.companyname.com을 설정하는 경우: 호스트 네임은 email.replies  
- support.companyname.com을 설정하는 경우: 호스트 네임은 email.support

![DNS 설정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48201410168/original/ovadh-goMeGpiYqisajhrsT40lnNsl-IPA.png?1647278164)

---
*원문 최종 수정: 2023년 8월 4일*
*Hyperclass 사용 가이드 — hyperclass.ai*