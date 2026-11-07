---
원문: https://help.gohighlevel.com/support/solutions/articles/48001203144-limitation-of-using-smtp-when-emails-are-not-sending
번역일: 2026-11-07
카테고리: 09-이메일
---

# SMTP 이메일이 발송되지 않을 때: 발신자 이메일 불일치 확인하기

SMTP 제공업체로 이메일을 보내는데 대부분 전달되지 않는다면, 발신자 이메일 불일치가 가장 흔한 원인이에요. 이 문서에서는 불일치를 찾는 방법, 대화에 표시되는 오류를 확인하는 방법, 주요 SMTP 제공업체별 발신자 인증 방법을 안내해요.

## 개요

SMTP 제공업체로 이메일을 보내는데 대부분 전달되지 않는다면, 보통 발신자 이메일이 설정한 SMTP 이메일과 다르기 때문이에요. 

## 가장 흔한 원인: 발신자 이메일 불일치

SMTP 제공업체가 연결되어 있는데도 대부분의 이메일이 전달되지 않는다면, 발신자 이메일이 설정한 SMTP 이메일과 같은지 확인하세요. SMTP로 보낸 이메일이 실패하는 이유 중 가장 흔한 경우예요.

![불일치 여부를 확인할 발신자 이메일 필드가 보이는 SMTP 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48280761517/original/7EeQW-iMOrII91u4q9JADK0pynS16WBRlg.png?1675971805)

## 대화에서 오류 확인하기

SMTP 제공업체를 설정한 뒤 대화에서 테스트 이메일을 보냈을 때 오류가 나면, ⚠️(빨간 삼각형) 아이콘을 클릭해 오류의 자세한 내용을 볼 수 있어요.

![빨간 삼각형 아이콘을 클릭해 대화에서 SMTP 오류 상세 내용을 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48280761065/original/ema0tGCjaqikKsDX4vwAd2Tkm7VsoO1DuQ.png?1675971606)

## 달라진 점

대화에 표시되는 오류는 SMTP 제공업체에서 직접 가져온 내용이에요. SMTP와 연동한 이메일 주소로 이미 보내고 있는데도 오류가 계속 나타나면, SMTP 제공업체에 지원 티켓을 열어 이메일의 전달 상태를 확인해 달라고 요청하세요.

## 제공업체별 발신자 인증

SMTP 제공업체마다 발신자를 인증하는 방식이 조금씩 달라요. 연결한 제공업체에 맞는 안내를 따르세요.

### Google Workspace(G Suite)

Google SMTP 별칭(alias) 설정

### SendGrid

발신자 ID(sender identity) 설정: [docs.sendgrid.com/ui/sending-email/senders](https://docs.sendgrid.com/ui/sending-email/senders)

### Zoho

[Zoho를 SMTP 제공업체로 사용하기](../using-zoho-as-your-smtp-provider.md)

## 자주 묻는 질문

### 발신자 이메일이 SMTP 이메일과 다르다는 건 무슨 뜻인가요?

보내는 사람(From)으로 표시되는 주소가 SMTP 제공업체에서 실제로 인증된 주소와 다르다는 뜻이에요. 대부분의 제공업체는 이렇게 주소가 맞지 않는 발송을 거부하거나 실패 처리해요.

### 발신자 이메일 불일치는 어떻게 해결하나요?

발신자 이메일을 SMTP와 연동한 주소와 같게 바꾸거나, SMTP 제공업체에서 발신자 주소를 따로 인증하세요. 어느 쪽이 필요한지는 제공업체가 요구하는 방식에 따라 달라요.

### 빨간 삼각형 아이콘을 클릭하면 무엇이 보이나요?

해당 발송 건에 대해 SMTP 제공업체가 직접 반환한 오류 메시지를 펼쳐서 볼 수 있어요. 인증되지 않은 발신자처럼 정확한 원인을 알려 주는 경우가 많아요.

### 발신자 이메일을 가려도 이 오류를 피할 수 있나요?

네, 가려서 보이는 주소가 SMTP와 연동한 이메일과 같거나 제공업체에서 따로 인증된 주소라면 가능해요. 자세한 내용은 발신자 마스킹 관련 문서를 참고하세요.

### 불일치를 해결했는데도 오류가 계속되면 누구에게 문의하나요?

SMTP 제공업체에 직접 지원 티켓을 열어 문의하세요. 제공업체에서 전달 상태를 확인해 문제가 발송 단계에 있는지, 받는 사람의 받은편지함에 있는지 알려 줄 수 있어요.

### 발신자 인증 방식은 모든 제공업체가 같나요?

아니요, 제공업체마다 방식이 달라요. Google Workspace는 이메일 별칭을, SendGrid는 발신자 ID를 쓰고, Zoho는 계정 자격 증명으로 인증해요. 위의 제공업체별 안내를 확인하세요.
