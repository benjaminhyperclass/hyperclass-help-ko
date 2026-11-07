---
원문: /support/solutions/articles/48000982207-how-to-set-up-a-whitelabel-domain-for-the-desktop-web-app
번역일: 2026-11-06
카테고리: 25-애드온-세일즈
---

# 데스크톱 웹 앱용 화이트라벨 도메인 설정

하이퍼클래스 데스크톱 웹 앱에 화이트라벨 도메인을 연결하면 고객이 우리 브랜드 주소로 로그인할 수 있어요. 이 문서에서는 설정 순서, 문제 해결 방법, 그리고 API 도메인(브랜드 링크)과의 차이를 안내해요. 에이전시 관리자만 설정할 수 있어요.

## 데스크톱 웹 앱의 화이트라벨 도메인이란?

화이트라벨 도메인은 직접 관리하는 서브도메인(예: app.yourdomain.com)이에요. 이 주소로 데스크톱 로그인 화면과 앱에 접속할 수 있어요. 하이퍼클래스 기본 주소와 함께 쓰는 별도의 주소예요. 설정을 마치면 사용자는 우리 브랜드 주소로 로그인하고, 앱은 하이퍼클래스가 호스팅하고 보안을 관리해요.

데스크톱 웹 앱에 화이트라벨을 적용하면 고객은 로그인할 때도, 앱을 쓸 때도 우리 도메인을 사용해요. 하이퍼클래스 기본 주소 대신 app.myawesomedomain.com 같은 주소를 쓰는 거예요.

{% hint style="info" %}
커스텀/화이트라벨 도메인은 직접 소유한 도메인이에요. 고객이 데스크톱 앱에 로그인할 때 이 주소를 써요(예: app.yourdomain.com). 하이퍼클래스 기본 도메인은 하이퍼클래스에서 임시로 제공하는 주소예요.
{% endhint %}

## 화이트라벨 도메인의 장점

고객 온보딩 체크리스트와 도입 일정에서 이 설정을 우선순위에 둘지 판단할 때 참고하세요.

- 브랜드 일관성: 로그인 화면과 앱 전반에 우리 이름, 로고, URL이 보여요.
- 신뢰감과 전문성: 우리 도메인을 보여 줘서 고객이 제대로 된 곳에 접속했다는 확신을 줘요.
- 간편한 접속: 고객이 기억하기 쉬운 URL(예: app.yourdomain.com)로 로그인할 수 있어요.
- 자동 SSL: DNS를 올바르게 연결하면 하이퍼클래스가 HTTPS를 자동으로 발급해요.
- 역할 분리: 로그인·앱 도메인을 마케팅 사이트나 이메일 발송 도메인과 따로 관리할 수 있어요.

## 데스크톱 웹 앱 화이트라벨 도메인 설정하기

아래 순서대로 진행하면 DNS와 SSL이 빨리 마무리되고, 로그인 화면이 브랜드 URL에서 열려요. 도메인 종류별 설정은 [화이트라벨·API·이메일 발송·사이트·클라이언트 포탈 도메인 설정](../../06-사이트/일반-설정/how-to-set-up-different-domain-types-in-hyperclass-websites-email-wordpress-more.md)에서도 볼 수 있어요.

1. DNS 제공업체에서 CNAME 레코드를 만드세요.
   - 호스트/이름: 사용할 서브도메인을 입력하세요. 예를 들어 **app**을 입력하면 app.myawesomedomain.com이 돼요.
   - 값/대상: **whitelabel.ludicrous.cloud** 를 입력하세요.
   - TTL: 제공업체가 특정 값을 요구하지 않으면 기본값을 그대로 두세요.

   ![DNS 제공업체에서 CNAME 레코드를 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054712002/original/xMazT-jvM9UthcQeacI4jAj_3t9-G7PH-g.png?1758909557)

2. 하이퍼클래스 에이전시 설정에서 도메인을 추가하세요.
   1. **에이전시 보기 > 설정 > 회사 > Whitelabel(화이트라벨) > Whitelabel Domain(화이트라벨 도메인)** 으로 이동하세요.

      ![화이트라벨 도메인 메뉴로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054712052/original/TWDsv6DwwdfB5D46DSzjXJJftTMlDogQMQ.png?1758909605)

   2. 전체 서브도메인(예: app.myawesomedomain.com)을 입력하고 **업데이트**를 클릭하세요.

      ![서브도메인을 입력하고 업데이트를 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054712088/original/B8qiZeqPt59TV-LYJhgzJhL8sZQTztbCdg.png?1758909671)

3. 로고를 업로드하고 이용약관 URL을 추가하세요.
   - **에이전시 보기 > 설정 > 회사**에서 로고를 업로드하세요. 로고는 약 350×180px 이하, 2.5MB 미만을 권장해요.
   - **개인정보처리방침**과 **이용약관** URL을 붙여 넣으세요. 회사 설정에 대한 자세한 내용은 [에이전시 회사 설정](../../11-설정/agency-company-settings-in-hyperclass.md)에서 볼 수 있어요.

   ![로고를 업로드하고 개인정보처리방침과 이용약관 URL을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054712256/original/gL3kUOhXVzUOrZ2iuwAzG6eL7hJvqMUP3A.png?1758909902)

4. DNS 전파와 SSL을 확인하세요.
   - DNS가 전파될 때까지 기다리세요. 그다음 **<http://app.myawesomedomain.com>** 에 접속해서 우리 로고와 약관 링크가 있는 브랜드 로그인 페이지가 열리는지 확인하세요.
   - DNS가 올바른 CNAME을 가리키면 SSL/TLS가 자동으로 발급돼요.

{% hint style="info" %}
이전에 화이트라벨 도메인을 설정했고 whitelabel.ludicrous.cloud 로 바꾸려면 아래 순서로 진행하세요.

1. **Whitelabel Domain**(화이트라벨 도메인) 필드의 휴지통 아이콘을 클릭해 값을 지워요.
2. **Update Company**(회사 업데이트)를 클릭해 저장해요.
3. 서브도메인을 **Whitelabel Domain** 필드에 다시 입력하고 한 번 더 저장해요.
{% endhint %}

## API 도메인과 화이트라벨 도메인의 차이

두 도메인의 차이를 알아 두면 링크와 로그인 화면 사이에 브랜딩이 빠지는 곳이 생기지 않아요.

- Whitelabel Domain(화이트라벨 도메인): **데스크톱 로그인 및 앱 URL**에 쓰여요(예: app.myawesomedomain.com).
- **API Domain**(API 도메인, 브랜드 링크): 이메일·SMS로 나가는 **시스템 생성 링크**에 쓰여요. 폼, 설문, 캘린더, 트리거 링크, 단축 링크, 리뷰 링크가 여기에 해당해요. 에이전시나 서브 계정 수준에서 설정하면 연락처가 클릭하는 링크에 우리 브랜드가 보여요. 자세한 내용은 [시스템 생성 링크 브랜딩(API 도메인)](../../11-설정/branding-system-generated-links-api-domain.md)에서 볼 수 있어요.

{% hint style="info" %}
팁: 두 도메인을 모두 설정하면 로그인부터 링크까지 브랜드를 일관되게 보여 줄 수 있어요.
{% endhint %}

## 문제 해결

화이트라벨 도메인 문제는 대부분 DNS 설정과 SSL 발급 여부를 확인하면 해결돼요. 자주 생기는 문제와 해결 방법은 다음과 같아요.

- "The client and server don't support a common SSL protocol version or cipher suite" 오류가 나요.
  - 브라우저나 기기가 오래된 보안 프로토콜을 쓰고 있다는 뜻이에요. 하이퍼클래스는 TLS 1.2와 1.3만 지원해요.
  - 브라우저를 업데이트하고, 충돌하는 DNS 레코드가 없는지 확인하세요. 예를 들어 같은 서브도메인에 A 레코드와 CNAME이 함께 있으면 SSL 발급이 막힐 수 있어요.
- 도메인이 열리지 않아요.
  - 서브도메인이 올바른 CNAME인 **whitelabel.ludicrous.cloud** 를 가리키는지 다시 확인하세요.
  - DNS 변경 사항이 전 세계에 전파되기까지 최대 30분 걸릴 수 있어요.
- "Your Connection Is Not Private"가 뜨거나 HTTPS가 작동하지 않아요.
  - 대개 SSL 인증서가 아직 발급되지 않았다는 뜻이에요.
  - DNS가 완전히 전파됐는지, 그리고 CNAME 하나만 가리키는지 확인하세요.
  - DNS가 올바르면 Let's Encrypt를 통해 SSL이 자동으로 발급돼요.

## 자주 묻는 질문

### 루트 도메인(apex)을 화이트라벨 로그인에 쓸 수 있나요?
**서브도메인**(예: app.yourdomain.com)을 쓰세요. **CNAME**으로 하이퍼클래스 대상을 가리키게 설정하면 돼요.

### SSL 발급에는 시간이 얼마나 걸리나요?
DNS가 올바르게 설정되면 SSL은 자동으로 발급돼요. DNS가 전 세계에 전파될 때까지 기다린 다음 다시 확인하세요.

### 화이트라벨 도메인과 API 도메인은 뭐가 다른가요?
화이트라벨 도메인은 **로그인/앱 URL**에 우리 브랜드를 적용해요. API 도메인은 이메일·SMS에 들어가는 **시스템 생성 링크**(폼, 설문, 캘린더, 트리거 링크 등)에 브랜드를 적용해요.

### 화이트라벨을 적용하려면 로고와 약관 링크를 다시 올려야 하나요?
네. 에이전시의 회사 설정에서 **에이전시 로고**를 업로드하고 **이용약관**과 **개인정보처리방침** URL을 추가하세요.

### Cloudflare를 쓰는데 주황색 프록시를 켜 둬도 되나요?
아니요. SSL이 제대로 발급되도록 화이트라벨 CNAME을 **DNS only**로 설정하세요.

### 화이트라벨 서브도메인을 바꿨는데 예전 로그인 화면이 계속 보여요.
**Whitelabel Domain** 필드의 기존 값을 지우고 **Update Company**를 클릭하세요. 그다음 새 서브도메인을 입력하고 저장하세요. DNS와 SSL이 갱신될 때까지 기다린 뒤 다시 확인하세요.

### 어떤 TLS 버전을 지원하나요?
TLS **1.2**와 **1.3**을 지원해요.

### 브랜드 링크용 API 도메인은 어디에서 설정하나요?
에이전시 수준에서 **설정 > 회사 > API Domain**에서 설정해요. 고객사별로 브랜딩하려면 서브 계정 수준에서도 설정할 수 있어요.
