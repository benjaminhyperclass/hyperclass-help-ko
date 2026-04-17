---

번역일: 2026-04-07
카테고리: 09-이메일 > 전달성
---

# 규정 준수: 2024년 구글과 야후의 이메일 발신자 요구사항 충족하기

2024년 2월부터 [Google](https://blog.google/products/gmail/gmail-security-authentication-spam-protection/)과 [Yahoo](https://blog.postmaster.yahooinc.com/post/730172167494483968/more-secure-less-spam)는 이메일 발신자에게 이메일 인증 사용을 의무화하고 있으며, 동의 및 참여도와 관련된 중요한 정책 변경사항도 있습니다. 발신자가 이러한 규칙을 따르지 않으면 이메일이 지연되거나 차단되거나 스팸으로 분류될 수 있습니다. 갑작스러운 변화처럼 느껴질 수 있지만, 이러한 요구사항은 사실 오래전부터 이메일이 제대로 전달되도록 하는 모범 사례로 여겨져 왔습니다.

**목차**

[1. 브랜디드 발송 도메인으로 브랜드 강화하기](#1.-브랜디드-발송-도메인으로-브랜드-강화하기)

[2. 발송 도메인에 대한 DMARC 이메일 인증 설정](#2-발송-도메인에-대한-dmarc-이메일-인증-설정)

[3. 브랜드 일관성 보장](#3-브랜드-일관성-보장)

[4. 이메일 "발신자" 헤더에서 Gmail 가장하지 않기](#4-이메일-발신자-헤더에서-gmail-가장하지-않기)

[5. 수신거부 쉽게 만들기](#5-수신거부-쉽게-만들기)

[6. 이메일 전달성 최적화: 스팸 신고율 0.30% 이하 유지](#6-이메일-전달성-최적화-스팸-신고율-030-이하-유지)

## 계정 준비하기:

Google과 Yahoo가 설정한 새로운 발신자 요구사항을 충족하도록 체크리스트를 따라해보세요.

### 1. 브랜디드 발송 서브도메인으로 브랜드 강화하기

브랜디드 발송 서브도메인을 설정하여 발신자 평판에 대한 제어력을 향상시키고 인박스 브랜딩을 개선하세요. "sent via msgsndr.com" 안내문구와 작별하고 더 나은 전달성 관행을 도입하세요. 2월부터 Google과 Yahoo 수신자에게 대량 이메일을 발송하는 경우 이는 필수사항이 됩니다.

브랜디드 발송 서브도메인을 활성화한 후에는 향후 2-4주 동안 [발송 인프라의 점진적인 워밍업](../LC-이메일/email-sending-guide-email-best-practices-email-warm-up.md)이 필요할 수 있다는 점을 유념하세요.

도움이 필요하신가요? [브랜디드 발송 서브도메인 설정 가이드](../LC-Email-Dedicated-Domain-and-IP/dedicated-email-sending-domains-overview-setup.md)를 확인해보세요.

**Gmail 사용자가 보는 브랜디드 발송 도메인 예시**

![브랜디드 발송 도메인 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155016475064/original/8uoY_YI_Ye80dKWg-qd3wzOmdMQ_2y8xrQ.png?1704091630)

### 2. 발송 도메인에 대한 DMARC 이메일 인증 설정

**DMARC란?** DMARC는 Domain-based Message Authentication, Reporting & Conformance의 줄임말로, SPF와 DKIM을 강화하는 표준입니다. 메일박스 제공업체에 정책을 전달하여 SPF, DKIM 또는 둘 다에 실패한 이메일(도메인을 사칭했을 가능성이 있는)을 어떻게 처리할지 안내합니다.

**해야 할 일은?** **DMARC 레코드가 없고 하루에 5,000개 이상의 이메일을 발송하는 경우** (공유 발송 도메인을 사용하는 하위 계정들의 합계), DNS에 DMARC 레코드를 추가해야 합니다.

**구현 단계:**

1. [Dmarcian](https://dmarcian.com/dmarc-inspector/)과 같은 무료 DMARC 검사 도구를 사용하여 이미 DMARC 레코드가 있는지 확인하세요. 루트 도메인(예: yourdomain.com)을 입력하고 검사를 클릭하세요. "Hooray! Your DMARC record is valid."가 표시되면 설정이 완료된 것이므로 다음 단계는 무시하세요. 그렇지 않으면 2단계로 계속 진행하세요.

2. DNS 호스팅 제공업체를 방문하여 TXT DNS 레코드를 생성하세요.

3. 레코드 유형으로 TXT를 선택하세요.

4. 호스트/이름 값을: _DMARC로 설정하세요.

5. 콘텐츠/가리키는 곳 필드에: v=DMARC1; p=none; 을 입력하세요.

Google은 시간이 지남에 따라 DMARC 정책을 점진적으로 더 제한적으로 변경할 것을 권장한다는 점을 유념하세요. 이 과정은 [권장 DMARC 롤아웃 튜토리얼](https://support.google.com/a/answer/10032473?hl=en) 문서에서 읽을 수 있습니다.

demohighlevel.com이라는 도메인에 대해 Cloudflare에서 설정할 경우 레코드는 다음과 같이 보일 것입니다:

![DMARC 레코드 설정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155016936712/original/q2kS5_X1ohoU4kk0xYGq4P5jK9p8K-aKww.png?1704484436)

6. 저장/제출하고 [Dmarcian](https://dmarcian.com/dmarc-inspector/)을 사용하여 DMARC 레코드가 성공적으로 추가되었는지 확인하세요(등록되는 데 몇 분이 걸릴 수 있습니다). 자신에게 이메일을 보내고 헤더를 검사하여 확인할 수도 있습니다.

Gmail에서는 점 세 개 아이콘을 클릭하고 "자세히 보기(Show More)" 옵션을 선택하여 이메일 헤더를 검사할 수 있습니다. 유효한 DMARC 레코드가 설정된 도메인에서 발송한 이메일의 헤더는 다음과 같이 보일 것입니다:

![DMARC 헤더 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155016475267/original/LsZGJkzJ7Xz7bQ8lNqMeRAK0HeLAWQ5J2Q.png?1704091825)

### 3. 브랜드 일관성 보장

응집력 있고 인식 가능한 이메일 정체성을 위해 "발신자" 주소를 브랜디드 도메인과 일치시키세요.

DMARC 표준에 맞추려면 "발신자" 주소 도메인이 브랜디드 발송 도메인의 루트 도메인과 일치해야 합니다. 예를 들어, 브랜디드 발송 도메인이 "lc.msgsndr.com"인 경우 해당 루트 도메인은 "msgsndr.com"입니다. 따라서 "hello@msgsndr.com"을 "발신자" 주소로 사용하면 루트 도메인과 일치합니다.

워크플로우 이메일과 캠페인의 모든 "발신자" 주소를 다시 확인하여 일치하는지 확인하세요.

대량 발신자인 경우 2024년 2월까지 브랜디드 발송 도메인으로 전환해야 한다는 점을 기억하세요.

### 4. 이메일 "발신자" 헤더에서 Gmail 가장하지 않기

**왜 중요한가요?**

Gmail과 Yahoo는 '격리(quarantine)'라는 DMARC 정책을 더 엄격하게 적용하고 있습니다. Gmail이나 Yahoo에서 보내는 것처럼 가장하려고 하면 이메일 전달성에 해를 끼칠 수 있습니다.

**해결책은?**

간단합니다: 이메일의 "발신자" 부분에서 Gmail이나 Yahoo를 가장하지 마세요. 간단히 말해, 'example@gmail.com'이나 'example@yahoo.com'에서 보내는 것처럼 주장하는 이메일을 보내지 마세요.

### 5. 수신거부 쉽게 만들기

이제 발신자가 사람들이 이메일 수신을 중단하기 매우 쉽게 만드는 것이 중요합니다. 누군가 더 이상 이메일을 원하지 않는다면 수신거부 버튼을 찾기 위해 검색할 필요가 없어야 합니다.

LC Email Service를 사용하는 경우 [이 블로그 포스트를 참고하세요](../managing-default-unsubscribe-links-in-lc-email.md). 이 옵션을 켜면 모든 이메일 하단에 수신거부 링크가 자동으로 포함됩니다.

**간편한 수신거부: 원클릭 솔루션**

좋은 소식이 있습니다! 모든 이메일에 원클릭 수신거부 링크를 포함해야 한다는 새로운 요구사항을 충족하는 것이 저희와 함께라면 더욱 쉬워집니다. 1:1 이메일을 제외하고 발송하는 모든 이메일의 헤더에 원클릭 수신거부 링크를 자동으로 추가해 드립니다.

명확히 하자면, 여기서 "헤더"는 발신자 및 메시지 인증에 대한 세부 정보를 포함하는 이메일의 보이지 않는 정보를 의미합니다. 모든 메시지의 코드에서 원클릭 목록 수신거부 기능을 강화하고 있습니다. 원클릭 수신거부의 모양은 다른 이메일 플랫폼에서 다를 수 있지만, Gmail에서의 시각적 예시는 아래와 같습니다.

**Gmail 사용자가 보는 원클릭 수신거부 예시**

![원클릭 수신거부 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155016474638/original/4ZRftmRvW6v6Gh8vyGsD0TvQrLh7a_UcVA.png?1704090848)

**여러분이 해야 할 일은?** 2월이 오기 전에 모든 캠페인 템플릿과 워크플로우 이메일을 빠르게 확인해보세요. 이메일 본문 어딘가에 수신거부 링크가 있는지 확인하세요. 하단이 일반적으로 흔한 위치입니다. 원클릭일 필요는 없지만 수신자가 찾기 쉽고 명확해야 합니다. 그게 전부입니다!

### 6. 이메일 전달성 최적화: 스팸 신고율 0.30% 이하 유지

**사람들이 여러분의 이메일을 원하는지 확인하세요:** 허가 없이 낯선 사람을 집에 들이고 싶지 않듯이, 허가 없이 이메일을 보내는 것도 옳지 않습니다. 항상 사람들이 실제로 여러분의 이메일을 받기를 원하는지 확인하세요.

너무 많은 사람들이 여러분의 이메일을 스팸으로 신고한다면(1,000개 중 3개처럼), 문제가 생길 수 있습니다. 이메일이 지연되거나 스팸 폴더로 가거나 전혀 전달되지 않을 수 있습니다. 이를 방지하려면 스팸 신고를 보내는 이메일 1,000개당 1개 미만으로 유지하세요.

야후 스팸 신고는 스팸 보고서(Spam Reports)에서 확인할 수 있습니다. 하지만 Gmail 스팸 신고는 추적할 수 없으므로 Hyperclass의 이메일 지표에 포함되지 않는다는 점을 기억하세요. Gmail은 사용자 정보를 비공개로 유지하기 위해 자체적인 스팸 신고 처리 방식을 가지고 있습니다. Gmail 스팸 신고를 모니터링하려면 [Google Postmaster Tools](https://www.gmail.com/postmaster/)를 사용하세요. 이를 통해 이메일이 문제없이 의도한 곳에 도착하도록 할 수 있습니다.

---
*원문 최종 수정: Tue, 23 Jan, 2024 at 5:37 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*