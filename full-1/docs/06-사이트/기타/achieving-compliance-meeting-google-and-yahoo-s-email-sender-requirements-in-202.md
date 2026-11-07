---
원문: https://help.gohighlevel.com/support/solutions/articles/155000001634-achieving-compliance-meeting-google-and-yahoo-s-email-sender-requirements-in-2024
번역일: 2026-11-06
카테고리: 06-사이트
---

# Google·Yahoo 이메일 발신자 요건 맞추기 (2024년 2월 기준)

Google과 Yahoo는 2024년 2월부터 이메일 인증과 수신 동의·참여도 정책을 새로 적용했어요. 이 문서에서는 모든 발신자가 지켜야 하는 여섯 가지 단계를 순서대로 안내해요.

## 개요

2024년 2월부터 [Google](https://blog.google/products/gmail/gmail-security-authentication-spam-protection/)과 [Yahoo](https://blog.postmaster.yahooinc.com/post/730172167494483968/more-secure-less-spam)는 이메일 발신자에게 올바른 인증을 요구해요. 수신자의 동의와 참여도에 관한 정책도 함께 바뀌었어요. 요건을 지키지 않으면 이메일이 지연되거나 차단되거나 스팸함으로 분류될 수 있어요.

갑작스럽게 느껴질 수 있지만, 이 요건들은 오래전부터 이메일 도달률을 높이는 업계 모범 사례였어요. 아래 체크리스트를 따라 계정을 요건에 맞춰 주세요.

## 전용 발신 서브도메인으로 브랜드 신뢰도 높이기

브랜드 전용 발신 서브도메인을 설정하면 발신자 평판을 직접 관리할 수 있어요. 발송하는 이메일에서 "sent via msgsndr.com"이라는 기본 안내 문구도 사라져요. 도달률을 높이는 모범 사례이고, 이번 요건을 충족하는 데도 중요한 부분이에요.

전용 발신 서브도메인을 켠 뒤에는 이후 2~4주 동안 발송 인프라를 단계적으로 워밍업하세요.

{% hint style="info" %}
**도움이 필요하신가요?**
전용 발신 서브도메인 설정 방법은 별도 가이드에 단계별로 안내되어 있어요.
{% endhint %}

Gmail 수신자에게 전용 발신 도메인이 어떻게 보이는지 보여 주는 예시예요.

![Gmail에 표시된 전용 발신 도메인 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155016475064/original/8uoY_YI_Ye80dKWg-qd3wzOmdMQ_2y8xrQ.png?1704091630)

## 발신 도메인에 DMARC 이메일 인증 설정하기

DMARC(Domain-based Message Authentication, Reporting & Conformance)는 SPF와 DKIM을 바탕으로 한 표준이에요. 인증에 실패한 이메일을 메일 서비스 제공업체가 어떻게 처리할지 알려 줘서, 내 도메인이 위조나 피싱에 쓰이지 않도록 지켜 줘요.

**누가 설정해야 하나요?** DMARC 레코드가 없고 하루에 이메일을 5,000통 넘게 보낸다면 DNS에 DMARC 레코드를 추가해야 해요. 발신 도메인을 함께 쓰는 서브 계정의 발송량은 모두 합산해요.

### 설정 단계

1. **이미 DMARC 레코드가 있는지 확인하세요.**
   무료 DMARC 확인 도구인 [Dmarcian](https://dmarcian.com/dmarc-inspector/)을 사용해요. 루트 도메인(예: yourdomain.com)을 입력하고 **Inspect**(검사)를 클릭하세요. **"Hooray! Your DMARC record is valid."** 라는 문구가 보이면 이미 끝난 거예요. 나머지 단계는 건너뛰어도 돼요. 이 문구가 보이지 않으면 다음 단계로 넘어가세요.
2. **DNS 호스팅 업체에서 TXT DNS 레코드를 새로 만드세요.**
   Cloudflare, GoDaddy, Namecheap 같은 DNS 호스트에 로그인한 뒤 새 레코드를 만들어요.
3. **레코드 값을 입력하세요.**
   - **Record type**(레코드 유형): TXT
   - **호스트**(또는 **이름**): `_dmarc`
   - **콘텐츠**(또는 **Points to**, 연결 대상): `v=DMARC1; p=none;`

{% hint style="info" %}
Google은 시간을 두고 DMARC 정책을 점점 엄격하게 바꾸라고 권장해요. 자세한 내용은 [Recommended DMARC Rollout Tutorial](https://support.google.com/a/answer/10032473?hl=en)에서 확인하세요.
{% endhint %}

예시 도메인의 DMARC 레코드를 Cloudflare에 설정한 모습이에요.

![Cloudflare DNS에 설정한 DMARC TXT 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155016936712/original/q2kS5_X1ohoU4kk0xYGq4P5jK9p8K-aKww.png?1704484436)

4. **레코드를 저장하고 제대로 적용됐는지 확인하세요.**
   레코드를 저장한 뒤 [Dmarcian](https://dmarcian.com/dmarc-inspector/)에서 적용됐는지 확인해요. 적용되는 데 몇 분 걸릴 수 있어요. 직접 테스트 이메일을 보내고 Gmail에서 헤더를 확인해도 돼요. 점 세 개 아이콘을 클릭하고 **Show Original**(원본 보기)을 선택하세요.

Gmail 헤더에서 DMARC 레코드가 유효하면 아래처럼 보여요.

![Gmail 헤더에서 DMARC 인증이 통과된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155016475267/original/LsZGJkzJ7Xz7bQ8lNqMeRAK0HeLAWQ5J2Q.png?1704091825)

## 브랜드 일관성 유지하기

**발신자 주소**를 전용 발신 도메인과 맞추세요. 그러면 수신자가 알아보기 쉬운 일관된 이메일 신원을 갖출 수 있어요.

DMARC 표준을 지키려면 **발신자 주소**의 도메인이 브랜드 발신 도메인의 루트 도메인과 같아야 해요. 예를 들어 전용 발신 도메인이 lc.msgsndr.com이면 루트 도메인은 msgsndr.com이에요. **발신자 주소**를 hello@msgsndr.com으로 쓰면 두 도메인이 일치해요.

{% hint style="warning" %}
**주의**
기한 전에 워크플로우 이메일과 캠페인의 모든 **발신자 주소**를 다시 확인하세요. 발신 도메인과 일치하는지 점검해야 해요.
{% endhint %}

## 발신자 주소에서 Gmail·Yahoo 사칭하지 않기

{% hint style="warning" %}
**왜 중요한가요?**
Gmail과 Yahoo는 이제 자사 도메인에 DMARC "quarantine"(격리) 정책을 적용해요. **발신자 주소**가 Gmail이나 Yahoo 주소(예: example@gmail.com)이면 이메일이 차단되거나 스팸함으로 갈 가능성이 매우 높아요.
{% endhint %}

**해결 방법:** **발신자 주소**에 @gmail.com, @yahoo.com 같은 다른 메일 서비스 제공업체의 도메인을 쓰지 마세요. 인증이 문제없이 통과되도록 항상 내 도메인을 사용하세요.

## 수신 거부를 쉽게 만들기

Google과 Yahoo는 발신자가 수신 거부를 간단하게 만들도록 요구해요. 이메일을 받고 싶지 않은 사람이 수신 거부 버튼을 찾아 헤매지 않아야 해요. 버튼이 눈에 잘 띄고 번거롭지 않아야 해요.

### 원클릭 수신 거부

{% hint style="info" %}
**이미 자동으로 처리돼요.**
보내는 모든 이메일(1:1 이메일 제외)의 헤더에는 원클릭 수신 거부 링크가 자동으로 추가돼요. 여기서 헤더는 화면에 보이는 이메일 본문이 아니라, 보이지 않는 곳에 담긴 이메일 정보를 뜻해요. 수신자에게 보이는 모습은 이메일 앱마다 달라요. 아래는 Gmail의 예시예요.
{% endhint %}

Gmail 수신자에게 원클릭 수신 거부가 표시되는 예시예요.

![Gmail 화면에 표시된 원클릭 수신 거부 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155016474638/original/4ZRftmRvW6v6Gh8vyGsD0TvQrLh7a_UcVA.png?1704090848)

{% hint style="info" %}
**하이퍼클래스 이메일 서비스를 쓰고 있나요?**
보내는 모든 이메일의 푸터에 수신 거부 링크를 자동으로 넣는 기능을 켜세요.
{% endhint %}

### 해야 할 일

기한 전에 모든 캠페인 템플릿과 워크플로우 이메일을 점검하세요. 이메일 본문 어딘가에 수신 거부 링크가 있어야 해요. 푸터에 넣는 경우가 가장 많아요. 원클릭일 필요는 없지만, 링크가 분명하고 찾기 쉬워야 해요.

## 스팸 신고율 0.30% 미만으로 유지하기

수신 동의를 받은 사람에게만 이메일을 보내세요. 반응이 없는 목록이나 구매한 목록에 보내면 스팸 신고가 늘어나요. 신고가 너무 많으면 발송이 지연되거나 스팸함으로 분류되거나 전달이 완전히 실패할 수 있어요.

| 스팸 신고율 | 영향 |
| --- | --- |
| 0.10% 미만 | 양호 — 받은편지함에 잘 도착해요 |
| 0.10% ~ 0.30% | 경고 구간 — 신고를 줄이기 위한 조치가 필요해요 |
| 0.30% 초과 | 이메일이 지연되거나, 스팸으로 분류되거나, 완전히 차단될 수 있어요 |

### 스팸 신고 모니터링

Yahoo와 Gmail은 확인 방법이 달라요.

Yahoo의 스팸 신고는 플랫폼의 **Spam Reports**(스팸 리포트)에서 볼 수 있어요. 반면 Gmail은 신고 데이터를 공개하지 않아서 플랫폼의 이메일 지표에도 나타나지 않아요. Gmail의 스팸 신고율을 보려면 [Google Postmaster Tools](https://www.gmail.com/postmaster/)를 사용하세요. Gmail이 내 이메일을 어떻게 처리하는지 볼 수 있는 무료 도구예요.

{% hint style="info" %}
**팁**
문제가 생기기 전에 Google Postmaster Tools를 미리 설정해 두세요. 플랫폼에서는 확인할 수 없는 평판 신호를 일찍 알아챌 수 있어요.
{% endhint %}

## 자주 묻는 질문

### 이 요건은 모든 발신자에게 적용되나요, 발송량이 많은 발신자에게만 적용되나요?
DMARC 요건은 하루에 이메일을 5,000통 넘게 보내는 발신자가 대상이에요. 발신 도메인을 함께 쓰는 계정의 발송량은 합산해요. 하지만 브랜드 발신 도메인, 브랜드 일관성, 쉬운 수신 거부, 낮은 스팸 신고율 같은 나머지 모범 사례는 발송량과 상관없이 모든 발신자에게 적용돼요.

### 요건을 지키지 않으면 어떻게 되나요?
요건을 지키지 않은 이메일을 Gmail이나 Yahoo 수신자에게 보내면 지연되거나, 스팸함으로 가거나, 아예 거부될 수 있어요. 메일 서비스 제공업체가 정책을 점점 엄격하게 적용하면서 영향도 시간이 갈수록 커져요.

### 전용 발신 서브도메인을 켠 뒤 워밍업 기간은 얼마나 걸리나요?
전용 발신 서브도메인을 켠 뒤 2~4주 동안 단계적으로 워밍업하세요. 이 기간에는 발송량을 적게 시작해서 조금씩 늘려 가세요. 그러면 새 인프라에서 발신자 평판을 건강하게 쌓을 수 있어요.

### 이미 SPF와 DKIM을 설정했는데 DMARC도 필요한가요?
네, 필요해요. SPF와 DKIM은 이메일 한 통 한 통을 인증해요. DMARC는 이 검사에 실패했을 때 메일 서비스 제공업체가 어떻게 처리할지 알려 줘요. DMARC 레코드가 없으면 내 도메인을 사칭한 위조 이메일에 적용할 정책이 없어요. 세 레코드는 함께 작동해요.

### 제 소유의 Gmail이나 Yahoo 주소를 발신자 주소로 써도 되나요?
아니요, 쓸 수 없어요. 내가 직접 쓰는 Gmail이나 Yahoo 받은편지함이어도 마찬가지예요. 외부 플랫폼으로 발송할 때 그 주소를 **발신자 주소**로 쓰면 DMARC 일치 검사에 실패해요. 이메일이 실제로 Gmail이나 Yahoo 서버에서 발송되는 것이 아니기 때문이에요. 항상 내 도메인의 주소를 쓰세요.

### 원클릭 수신 거부 헤더가 수신 거부율에 영향을 주나요?
더 눈에 잘 띄고 편해서 측정되는 수신 거부 수가 조금 늘 수 있어요. 하지만 긍정적인 신호예요. 헤더로 깔끔하게 수신 거부한 연락처는 스팸 신고로 이어질 수 있는 사람이 한 명 줄어든 셈이에요. 그래서 전체 발신자 평판을 지키는 데 도움이 돼요.

### 이 요건은 모든 메일 서비스 제공업체에 똑같이 적용되나요, Gmail과 Yahoo에만 적용되나요?
2024년 2월 의무 사항은 Google과 Yahoo가 발표했어요. 하지만 인증, 발신자 일치, 쉬운 수신 거부, 낮은 신고율 같은 기본 원칙은 어디에나 통하는 도달률 기준이에요. 주요 메일 서비스 제공업체는 대부분 이를 요구하거나 강하게 선호해요.
