---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002220-how-to-add-a-domain-and-verify-dns-record
번역일: 2026-11-06
카테고리: 09-이메일
---

# 도메인 추가하고 DNS 레코드 인증하기

발신 도메인을 인증하면 브랜드를 보호하고, 발신자 사칭(스푸핑)을 막고, 받은편지함에 도착할 가능성을 높일 수 있어요. 이 문서에서는 도메인을 추가하는 방법, DNS 레코드를 인증하는 방법, 자주 생기는 문제의 해결 방법을 안내해요.

## 이 문서에서 배울 내용

도메인을 추가하고 인증하는 일은 안전하고 안정적으로 이메일을 보내기 위한 필수 단계예요. 이 과정을 거치면 브랜드 평판이 보호되고, 이메일이 스팸함이 아닌 받은편지함에 도착할 가능성이 높아져요.

## 시작하기 전에 준비할 것

도메인을 설정하기 전에 아래 항목을 준비하세요.

- DNS 제공업체의 관리 페이지에 접속할 수 있어야 해요(Cloudflare, GoDaddy, AWS Route 53, Namecheap, Google Domains 등). 도메인이 현재 등록·관리되는 곳에 로그인해서 필요한 레코드를 추가해요.
- 이메일 발송에 사용할 도메인 또는 서브도메인
- DNS 레코드를 추가하거나 수정할 수 있는 계정 정보 또는 권한
- DNS 레코드 유형(SPF, DKIM, DMARC, CNAME, TXT, MX)에 대한 기본 이해

## 1단계: 도메인 추가하기

도메인 추가는 이메일 인증의 첫 단계예요. 아래 세 단계를 따라 하세요.

1. **설정 > 이메일 서비스 > Dedicated Domain & IP**(전용 도메인 및 IP)로 이동하세요.

   ![설정 > 이메일 서비스 > Dedicated Domain & IP 이동 경로](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053797876/original/QX6-2-QGltHkBgYk-vToXdQZ3T9ECRHWoA.png?1757947789)

2. **전용 도메인** 메뉴 오른쪽 위에서 **+ 도메인 추가**를 클릭하세요.

   ![전용 도메인 메뉴의 도메인 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053797941/original/WXqTJ3QH216r_zijFc0qvVi1OVoxJolaeA.png?1757947835)

3. 사용할 도메인 또는 서브도메인을 입력하세요. 전달률을 높이려면 서브도메인(예: mail.yourdomain.com) 사용을 권장해요. 입력한 뒤 **Add & Verify**(추가 및 인증)를 클릭하세요.

   ![서브도메인을 입력하고 Add & Verify 버튼을 누르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053798546/original/rK-bp-KmrNeVDP10evTY13GeeuO5z0gdnw.png?1757948031)

## 2단계: 도메인 인증하기

인증을 마치면 이메일이 인증된 메일로 인정받고, 받는 쪽 메일 서비스의 신뢰를 얻어요. 이를 위해 도메인에 DNS 레코드를 설정해야 해요.

### 필요한 DNS 레코드 유형과 이유

| 레코드 | 용도 |
| --- | --- |
| SPF | Sender Policy Framework — 내 도메인을 대신해 이메일을 보낼 수 있는 서버를 승인해요. |
| DKIM | DomainKeys Identified Mail — 이메일에 디지털 서명을 추가해, 전송 중에 내용이 바뀌지 않았음을 증명해요. |
| DMARC | Domain-based Message Authentication, Reporting & Conformance — 인증 정책을 적용하고, 이메일 전달 결과를 리포트로 알려 줘요. |

![도메인 인증에 필요한 DNS 레코드 유형: SPF, DKIM, DMARC](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053798663/original/XPwCzaCP9KTSX6rsPHTQj5cGnCYT_-PaoA.png?1757948102)

### 메뉴에서 도메인 인증하기

도메인을 추가한 뒤, 도메인 옆의 점 세 개 메뉴(⋮)를 열고 **도메인 인증**을 클릭하세요. 그러면 DNS 레코드가 제대로 설정됐는지 확인해요.

![점 세 개 메뉴에서 도메인 인증 항목이 강조된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053799931/original/nKdX5oSwO0xNf_65ogodozDF6X7vMVHnEw.png?1757948731)

### DNS 레코드 확인하기

**도메인 인증**을 클릭하면 도메인에 필요한 DNS 레코드(SPF, DKIM, CNAME, MX, DMARC) 목록이 나타나요. 레코드마다 현재 인증 상태가 표시되고, **복사** 버튼으로 값을 복사해 DNS 제공업체에 바로 붙여 넣을 수 있어요. 모든 레코드가 확인되면 도메인이 인증된 상태로 바뀌어요.

![필요한 레코드별 인증 상태를 보여 주는 DNS 레코드 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053867806/original/pRQ-Oa9_dyPPKdZ6l7IEC4rZYNnrihAhJA.png?1758026774)

## DNS 설정 방법 선택하기

DNS 제공업체가 자동 설정을 지원하면 자동으로 설정할 수 있어요. 지원하지 않으면 직접 입력하세요.

### 방법 1: DNS 제공업체 연동으로 자동 설정

DNS 제공업체가 지원된다면 가장 간단한 방법이에요.

1. 도메인을 추가한 뒤 **계속**을 클릭하세요.
2. 하이퍼클래스가 DNS 제공업체(예: Cloudflare, GoDaddy, Namecheap)를 자동으로 찾아요.
3. 로그인한 뒤, 하이퍼클래스가 DNS 레코드를 자동으로 설정하도록 권한을 승인하세요.
4. 설정이 끝나면 도메인이 **인증됨** 상태로 바뀌어요.

{% hint style="info" %}
DNS 제공업체가 자동 설정을 지원하지 않으면 레코드를 직접 설정하라는 안내가 나와요.
{% endhint %}

![DNS 제공업체 연동 권한을 승인하는 자동 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053797760/original/1B4vPtUrNt_fg8-Q06IDWSn4UYSWCAXQgw.png?1757947702)

### 방법 2: DNS 직접 설정

자동 설정을 쓸 수 없으면 DNS 레코드를 직접 추가하세요. 필요한 레코드는 하이퍼클래스가 정확하게 알려 줘요. 입력할 때는 아래 기준을 따르세요.

- **유형**: 안내에 따라 TXT, CNAME, MX 중 해당하는 유형으로 레코드를 추가하세요.
- **이름 / 호스트**: 루트 도메인이면 "@"를 입력하세요. 서브도메인(예: mail.yourdomain.com)이면 서브도메인 부분만 입력하세요(예: "mail").
- **값**: 화면에 표시된 값을 바꾸지 말고 그대로 복사해서 붙여 넣으세요.
- **TTL**: 가능하면 5분(300초)으로 설정하세요.

![유형, 이름, 값, TTL 입력란이 보이는 DNS 레코드 직접 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053797699/original/O1xyu5hnbNCZBVZ1ca3aJEQcYMRYLOJJbw.png?1757947671)

### DNS 제공업체별 예시

#### Cloudflare

1. Cloudflare에 로그인하세요.
2. 해당 도메인의 **DNS** 설정으로 이동하세요.
3. 안내받은 레코드(TXT, CNAME, MX)를 추가하세요. 레코드가 Proxied가 아니라 **DNS only**(회색 구름)로 설정되어 있는지 확인하세요.

#### GoDaddy

1. GoDaddy에 로그인하세요.
2. **Domains → Manage DNS**를 여세요.
3. **Add**를 클릭하고 레코드를 하나씩 입력하세요.

#### AWS Route 53

1. AWS 콘솔을 여세요.
2. **Route 53 → Hosted Zones**로 이동하세요.
3. 필요한 레코드 세트를 만드세요.

#### Namecheap

1. Namecheap에 로그인하세요.
2. **Domain List → Manage → Advanced DNS**로 이동하세요.
3. 안내받은 DNS 레코드를 추가하세요.

#### Google Domains

1. Google Domains에 로그인하세요.
2. 도메인을 선택하고 **DNS settings**로 이동하세요.
3. 안내받은 DNS 레코드를 추가하세요.

## 인증 후 해야 할 일

레코드 인증이 끝나면 아래 내용을 참고하세요.

- SSL 인증서 발급: SSL 인증서가 자동으로 발급돼요. 보통 인증이 끝나고 1~10분 정도 걸려요.
- 도메인 상태: 도메인이 **인증됨** / **활성**으로 표시돼요.
- 테스트 발송: 테스트 이메일을 보내서 이메일 헤더에서 SPF와 DKIM이 통과되는지 확인하세요.
- 전달률 모니터링: DMARC 리포트와 받은편지함 도착 테스트 도구로 지속적인 성과를 확인하세요.

{% hint style="info" %}
이제 도메인 인증이 끝났고 이메일을 보낼 준비가 됐어요. 전달률 문제를 일찍 발견할 수 있도록 DMARC 리포트를 꾸준히 확인하세요.
{% endhint %}

## 자주 생기는 문제 해결하기

인증에 실패하면 아래 항목을 차례대로 점검하세요.

- 각 레코드가 안내받은 값과 정확히 같은지 다시 확인하세요. 한 글자만 달라도 실패할 수 있어요.
- 올바른 **유형**(TXT, CNAME, MX)을 선택했는지 확인하세요.
- **호스트 / 이름** 입력값이 맞는지 확인하세요. "@"를 불필요하게 덧붙이거나 서브도메인 부분을 빠뜨리지 마세요.
- **TTL**이 너무 높게 설정되어 있지 않은지 확인하세요. 가능하면 300초(5분)로 낮추면 반영이 빨라져요.
- 조금 기다려 주세요. DNS 정보가 전 세계에 반영되는 데(DNS 전파) 제공업체에 따라 최대 24~48시간이 걸릴 수 있어요.
- DMARC: 도메인당 **DMARC 레코드는 하나만** 있어야 해요. 여러 개 있으면 인증에 실패해요.
- SPF: **SPF 레코드가 중복**되지 않았는지 확인하세요. 도메인당 SPF TXT 레코드는 하나만 있어야 해요.

{% hint style="info" %}
DNS 레코드를 수정한 뒤 몇 분 기다렸다가, 점 세 개 메뉴에서 **도메인 인증**을 다시 클릭하면 인증 확인이 다시 실행돼요.
{% endhint %}

## 자주 묻는 질문

### 루트 도메인과 서브도메인 중 어느 쪽을 써야 하나요?
서브도메인(예: mail.yourdomain.com)을 권장해요. 루트 도메인의 평판을 보호할 수 있기 때문이에요. 전달률 문제가 생겨도 이메일을 서브도메인에서만 보내고 있으면 메인 도메인에는 영향이 가지 않아요.

### 도메인 인증에는 시간이 얼마나 걸리나요?
보통 1~10분 안에 끝나요. 드물게 제공업체의 TTL 설정에 따라 DNS 전파에 최대 24~48시간이 걸릴 수도 있어요.

### DNS 제공업체가 자동 설정을 지원하지 않으면 어떻게 하나요?
직접 설정 방법을 사용하세요. 필요한 값은 하이퍼클래스가 정확하게 알려 주니, DNS 제공업체의 관리 페이지에 그대로 복사해서 붙여 넣으면 돼요.

### 루트 도메인과 서브도메인 모두에 DMARC 레코드가 필요한가요?
아니요. 루트 도메인에 DMARC 레코드가 이미 설정되어 있다면 서브도메인에 다시 추가하지 않아도 돼요. 루트 도메인의 정책이 서브도메인에도 기본으로 적용돼요.

### SPF나 DKIM을 잘못 설정하면 어떻게 되나요?
이메일이 스팸함으로 가거나 인증 확인을 아예 통과하지 못해서 전달률이 크게 떨어질 수 있어요. 인증을 실행하기 전에 안내받은 값과 레코드가 같은지 항상 다시 확인하세요.

### 도메인을 여러 개 추가할 수 있나요?
네, 가능해요. **설정 > 이메일 서비스 > Dedicated Domain & IP**에서 전용 도메인이나 서브도메인을 여러 개 추가하고 인증할 수 있어요. 도메인마다 같은 인증 과정을 거쳐요.

### Cloudflare 프록시 때문에 인증이 실패해요.
Cloudflare에서 DNS 레코드를 **Proxied**(주황색 구름)가 아니라 **DNS only**(회색 구름 아이콘)로 설정했는지 확인하세요. 이메일 인증에 쓰는 CNAME 레코드는 프록시를 지원하지 않아서, 프록시를 켜 두면 인증에 실패해요.

### 인증 후에 나오는 "SSL 인증서 발급"은 무슨 뜻인가요?
도메인 인증이 끝나면 발신 도메인과 관련된 연결을 안전하게 지키는 SSL 인증서가 자동으로 발급돼요. 발급은 1~10분 안에 끝나며, 이 과정이 끝나야 도메인이 완전히 활성화돼요.
