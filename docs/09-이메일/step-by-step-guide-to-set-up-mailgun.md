---

번역일: 2026-04-06
카테고리: 09-이메일
---

# Mailgun 설정 단계별 가이드

Mailgun 단계별 설정 가이드:

**1. 여기서 Mailgun에 가입하세요:**

[https://signup.mailgun.com/new/signup](https://signup.mailgun.com/new/signup)

**2. 이메일 인박스를 확인하여 이메일 주소를 인증하세요**

![이메일 인증 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535009/original/7tQRdPUgguqaYEpnIV2uS3kIQpMd7jZBZw.png?1659724083)

![이메일 인증 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535045/original/kRGmwZtbq3-zkULjp6-Pg0J-7sTNMNHymQ.png?1659724108)

**3. Sending(발송) > Add New Domain(새 도메인 추가)를 클릭하세요**

![새 도메인 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535197/original/doBfy9jAqoxcOqD5LiuyQO9rnyVWfkkAeg.png?1659724186)

**4. 도메인이 companyname.com인 경우, Mailgun에서 메인 도메인 또는 서브도메인을 설정할 수 있습니다.**

- 메인 도메인: 메인 도메인을 추가하는 경우, G Suite나 다른 이메일 제공업체와 함께 사용하면 안 됩니다
- 서브도메인: Mailgun으로 서브도메인을 설정하려면 **원하는_이름**.companyname.com 형태로 입력할 수 있습니다
  예시:
  - mg.companyname.com
  - replies.companyname.com
  - support.companyname.com
- 도메인 또는 서브도메인은 EU가 아닌 **US로 설정**하세요.
- **Add domain(도메인 추가)**을 클릭하세요

![도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243536037/original/B5DZocdO2h64MlEDtfuFjER-U_0AO_NOEg.png?1659724559)

**5. 도메인을 구입한 곳의 DNS 레코드에 로그인하여 5개의 DNS 레코드를 추가하세요.**

- DNS 레코드를 어디에 추가해야 할지 확실하지 않다면:
- 1단계: 설정하려는 도메인을 [mxtoolbox](https://mxtoolbox.com/SuperTool.aspx)에서 조회하세요
- 여기에는 도메인만 입력하고, **앞에 http://를 추가하지 마세요**

![도메인 조회](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243537503/original/VQuAatUlq58RsSVIlLqFfKJQsi1EtB2pjg.png?1659725181)

도메인을 조회하면 DNS 호스팅 제공업체가 표시됩니다.

![DNS 제공업체 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243537328/original/O4VqrFqJo6APt8Z_bhPobo_S50QD230bQg.png?1659725095)

- 2단계: 하단 주석을 확인하면 reported by 예: [wordpress.com](//wordpress.com)이라고 표시됩니다

이제 도메인 제공업체에 DNS 레코드를 추가할 수 있습니다. DNS 레코드 영역을 찾는 방법이 확실하지 않다면 **wordpress DNS records**를 구글에서 검색해보세요.

도메인 제공업체에 따라 이제 DNS 레코드를 추가할 수 있습니다:

이 목록에서 도메인 제공업체를 찾을 수 없다면, 위의 아티클 중 하나를 참고하시면 비슷합니다.

[Mailgun 설정 - GoDaddy 도메인 설정](mailgun-setup-godaddy-domain-setup.md)

[Mailgun 설정 - Namecheap 도메인 설정](mailgun-setup-namecheap-domain-setup.md)

[Mailgun 설정 - Siteground 도메인 설정](메일건/mailgun-setup-siteground-domain-setup.md)

[MailGun 설정 - HostGator 도메인 설정](mailgun-setup-hostgator-domain-setup.md)

[Mailgun 설정 - Google Domains](메일건/mailgun-setup-google-domain-setup.md)

[Mailgun 설정 - CloudFlare](메일건/mailgun-setup-cloudflare-domain-setup.md)

모든 DNS 레코드를 추가하고 인증을 완료하면, [Mailgun API 키 - Mailgun에서 찾는 방법 & Hyperclass에 설정하는 방법](메일건/mailgun-private-api-key-setup.md)을 참고하여 API 키를 가져올 수 있습니다.

그런 다음 모든 것이 제대로 작동하는지 테스트 이메일을 보내볼 수 있습니다! [대화에서 테스트 이메일을 보내는 방법](트러블슈팅/how-to-send-a-test-email-in-the-conversation.md)을 참고하여 테스트해보세요.

---
*원문 최종 수정: Tue, 23 Jul, 2024 at  1:39 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*