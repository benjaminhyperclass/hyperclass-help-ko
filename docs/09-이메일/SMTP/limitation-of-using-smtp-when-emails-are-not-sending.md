---

번역일: 2026-04-07
카테고리: 09-이메일 > SMTP
---

# SMTP 사용 시 이메일이 발송되지 않는 경우의 제한사항

SMTP 공급자를 사용해서 이메일을 발송하는데 대부분의 경우 전달이 되지 않는다면, 보통 [발신자 이메일](../sending-priority-from-name-address.md)이 여기에서 설정한 SMTP 이메일과 일치하지 않기 때문입니다:

![SMTP 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48280761517/original/7EeQW-iMOrII91u4q9JADK0pynS16WBRlg.png?1675971805)

SMTP 공급자를 설정한 후, [대화(Conversation)에서 테스트 이메일을 발송](../트러블슈팅/how-to-send-a-test-email-in-the-conversation.md)할 때 오류가 발생한다면:

대화에서 ⚠️(빨간 삼각형) 아이콘을 클릭하여 오류에 대한 자세한 내용을 확인할 수 있습니다.

![오류 표시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48280761065/original/ema0tGCjaqikKsDX4vwAd2Tkm7VsoO1DuQ.png?1675971606)

대화에 표시되는 오류의 경우, SMTP 공급자로부터 받은 오류를 가져와서 표시합니다. SMTP와 연동된 이메일에서 이미 발송하고 있다면, SMTP 공급자에게 지원 티켓을 열어서 해당 이메일의 전달 상태를 확인받으시기 바랍니다.

[무료 이메일 주소를 SMTP로 사용할 수 없는 이유](https://help.gohlighlevel.com/en/support/solutions/articles/48001063376)에 대해 더 자세히 알아보세요.

## Google Gsuite SMTP 별칭 설정:

[[setting-alias-for-google-smtp](../setting-alias-for-google-smtp.md)]([setting-alias-for-google-smtp](../setting-alias-for-google-smtp.md)

## SendGrid의 경우:

[https://docs.sendgrid.com/ui/sending-email/senders](https://docs.sendgrid.com/ui/sending-email/senders)

## Zoho의 경우:

[[using-zoho-as-your-smtp-provider](../using-zoho-as-your-smtp-provider.md)]([using-zoho-as-your-smtp-provider](../using-zoho-as-your-smtp-provider.md)

---
*원문 최종 수정: Thu, 9 Feb, 2023 at 2:13 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*