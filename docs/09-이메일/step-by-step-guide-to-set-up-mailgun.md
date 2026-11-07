---
원문: /support/solutions/articles/48001219824-step-by-step-guide-to-set-up-mailgun
번역일: 2026-11-07
카테고리: 09-이메일
---

# Mailgun 설정 가이드: 가입부터 테스트 이메일까지

Mailgun에 가입하고, 발송 도메인을 추가하고, DNS 레코드를 등록한 뒤, 테스트 이메일로 정상 작동을 확인하는 방법을 안내해요. 메인 도메인과 서브도메인 중 어느 쪽을 쓸지 정하는 방법도 함께 다뤄요.

## Mailgun 가입하기

[signup.mailgun.com/new/signup](https://signup.mailgun.com/new/signup)에 접속해 Mailgun 계정을 만드세요.

## 이메일 주소 인증하기

받은 편지함에서 Mailgun이 보낸 메일을 열고, 인증 링크를 클릭해 계정을 확인하세요.

![Mailgun 가입 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535009/original/7tQRdPUgguqaYEpnIV2uS3kIQpMd7jZBZw.png?1659724083)
![이메일 인증 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535045/original/kRGmwZtbq3-zkULjp6-Pg0J-7sTNMNHymQ.png?1659724108)

## 새 발송 도메인 추가하기

Mailgun 대시보드에서 **Sending > Add New Domain**(새 도메인 추가)을 클릭하세요. Mailgun 화면은 영어로 표시돼요.

![Sending 메뉴의 Add New Domain 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535197/original/doBfy9jAqoxcOqD5LiuyQO9rnyVWfkkAeg.png?1659724186)

## 메인 도메인과 서브도메인 중 선택하기

도메인이 `companyname.com`이라면 Mailgun에는 메인 도메인과 서브도메인 중 하나를 설정할 수 있어요.

- 방법 A: 메인 도메인
  - 메인 도메인을 추가하려면 해당 도메인이 Google Workspace나 다른 이메일 서비스에서 이미 사용 중이지 않아야 해요.
- 방법 B: 서브도메인
  - 서브도메인은 `anything_here.companyname.com` 형식으로 입력하면 돼요. 예를 들면 다음과 같아요.
    - mg.companyname.com
    - replies.companyname.com
    - support.companyname.com

{% hint style="info" %}
도메인이나 서브도메인은 EU가 아니라 **US** 리전으로 설정하세요. 선택을 마쳤으면 **Add domain**(도메인 추가)을 클릭하세요.
{% endhint %}

![US 리전을 선택한 도메인 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243536037/original/B5DZocdO2h64MlEDtfuFjER-U_0AO_NOEg.png?1659724559)

## DNS 레코드 등록하기

{% hint style="warning" %}
이제 DNS 레코드를 등록할 차례예요. 대부분 이 단계에서 막히니 꼼꼼히 따라 하세요.
{% endhint %}

도메인을 등록한 곳(DNS 호스트)에 로그인해서 Mailgun이 알려 주는 DNS 레코드 5개를 추가하세요.

### DNS 레코드를 어디에 추가해야 할지 모르겠다면

1. [MXToolbox](https://mxtoolbox.com/SuperTool.aspx)에서 도메인을 검색하세요. 앞에 "http://"를 붙이지 말고 도메인만 입력하세요.

   ![MXToolbox 도메인 검색창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243537503/original/VQuAatUlq58RsSVIlLqFfKJQsi1EtB2pjg.png?1659725181)

2. 검색 결과에서 DNS 호스팅 업체를 확인하세요.

   ![DNS 호스팅 업체가 표시된 MXToolbox 결과 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243537328/original/O4VqrFqJo6APt8Z_bhPobo_S50QD230bQg.png?1659725095)

3. 결과 화면 아래쪽의 "reported by" 문구를 확인하세요. 예를 들어 "reported by wordpress.com."처럼 호스트 이름이 나와요.
4. 업체를 알았다면 그 업체의 대시보드에서 DNS 레코드를 추가하세요. DNS 레코드 메뉴 위치를 모르겠다면 "[업체 이름] DNS records"로 검색해 보세요.

### 도메인 업체별 설정 가이드

사용 중인 도메인 업체에 맞는 가이드를 따라 레코드를 추가하세요. 목록에 없는 업체라면 아래 가이드 중 하나가 비슷할 거예요.

- GoDaddy — Mailgun domain setup
- Namecheap — Mailgun domain setup
- Siteground — Mailgun domain setup
- HostGator — Mailgun domain setup
- Google Domains — Mailgun domain setup
- CloudFlare — Mailgun domain setup

## API 키 확인하고 테스트 이메일 보내기

DNS 레코드를 모두 추가하고 인증까지 끝났다면, "Mailgun API Key: Where to Find It in Mailgun and Add It to the Platform" 문서를 참고해 API 키를 확인하세요.

거의 다 왔어요. 마지막으로 테스트 이메일을 보내 정상 작동하는지 확인하세요. 방법은 "How to Send a Test Email in the Conversation" 문서를 참고하세요.

## 자주 묻는 질문

### 메인 도메인과 서브도메인 중 어느 것을 써야 하나요?
서브도메인(예: mg.companyname.com)을 쓰는 편이 대체로 안전해요. 메인 도메인이 Google Workspace나 다른 이메일 서비스에서 이미 사용 중이면 추가하면 안 되기 때문이에요.

### 도메인을 추가할 때 US와 EU 중 무엇을 고르느냐가 왜 중요한가요?
리전에 따라 메일을 보내는 Mailgun 인프라가 달라져요. 이 설정에서는 도메인이나 서브도메인을 설정할 때 항상 US를 선택하세요.

### DNS 업체가 어디인지 모르겠어요. 어떻게 확인하나요?
MXToolbox에서 도메인을 검색해 보세요. 결과 화면의 "reported by" 문구에 DNS 호스트 이름이 나와요.

### 사용 중인 도메인 업체가 가이드 목록에 없어요. 어떻게 하나요?
목록에 있는 업체별 가이드 중 하나를 참고하세요. TXT, CNAME, MX 레코드를 추가하는 과정은 대부분의 DNS 호스트에서 비슷해요.

### DNS 레코드 인증에는 시간이 얼마나 걸리나요?
DNS 전파에는 몇 분에서 최대 48시간까지 걸릴 수 있어요. 대부분의 레코드는 1시간 안에 인증돼요.

### 테스트 이메일이 발송되지 않아요. 무엇부터 확인해야 하나요?
Mailgun에서 DNS 레코드 5개가 모두 인증됨으로 표시되는지 확인하세요. 그리고 API 키를 정확히 입력했는지 다시 확인한 뒤 테스트 이메일을 다시 보내세요.
