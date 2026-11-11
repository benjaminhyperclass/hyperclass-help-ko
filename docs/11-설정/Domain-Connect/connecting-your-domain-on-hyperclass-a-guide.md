---
원문: /support/solutions/articles/155000005132-connecting-your-domain-on-ghl-a-guide
번역일: 2026-11-06
카테고리: 11-설정
---

# 도메인 연결 가이드

도메인을 하이퍼클래스에 연결하면 웹사이트, 퍼널, 이메일, 고객용 도구에서 브랜드를 일관되게 보여 줄 수 있어요. 이 문서에서는 도메인을 연결하는 방법과, 연결한 도메인을 제품별로 어떻게 쓰는지 안내해요.

## 도메인 연결 단계별 안내

도메인을 하이퍼클래스에 연결하는 방법은 크게 두 가지예요.

### 1. 자동으로 연결하기 (지원하는 도메인 업체)

도메인을 **지원하는 업체**(예: GoDaddy, Google Domains, Cloudflare)에서 등록했다면 API 인증으로 자동 연결할 수 있어요.

```
하이퍼클래스와 연동된 업체에서 도메인을 관리한다면 이 방법을 권장해요.
```

1. 하이퍼클래스 계정에서 **사이트 > 설정 > 도메인**으로 이동하세요.
2. **도메인 연결**을 선택하세요.
3. 연결할 제품을 선택하세요(예: **퍼널**, **웹사이트**, **이메일**).

   ![도메인에 연결할 제품 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045491132/original/mGa9aDaXW4Ytb7xL12a6RFqhz1BiTtLGPw.png?1745385425)
4. 입력란에 루트 도메인이나 서브도메인을 입력하세요. "www" 서브도메인을 추가하는 경우에는 루트 도메인도 추가할 수 있는 옵션이 나타나요. ▶ 영상 [3강 42:41](https://www.youtube.com/watch?v=cDyPG4a-OEs&t=2561s)
5. 도메인이 Google Domains, GoDaddy, Cloudflare에 있으면 **승인** 버튼이 보여요. 이 버튼을 눌러 Domain Connect가 DNS 설정에 접근하도록 허용하세요.
6. 도메인 업체 화면의 안내에 따라 승인 과정을 마치세요. 필요한 DNS 레코드가 자동으로 추가되거나 연결돼요.
7. 승인이 끝나면 해당 탭을 닫고 Domain Connect 화면으로 돌아오세요.

---

### 2. 수동으로 도메인 추가하기

도메인이 **Namecheap, Bluehost** 또는 목록에 없는 업체에 있다면 DNS 레코드를 직접 추가해야 해요.

```
도메인 업체를 직접 지원하지 않을 때 이 방법을 사용하세요.
```

1. **사이트 > 설정 > 도메인**으로 이동하세요.
2. **도메인 연결**을 선택하세요.
3. 연결할 제품을 선택하세요(예: **퍼널**, **웹사이트**, **이메일**).

   ![도메인에 연결할 제품 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045491132/original/mGa9aDaXW4Ytb7xL12a6RFqhz1BiTtLGPw.png?1745385425)
4. **퍼널**, **웹사이트**, **블로그**, **웨비나**에 도메인을 연결하려면 안내에 따라 도메인 이름을 입력하세요.
5. **Add records manually**(레코드 직접 추가) 옵션을 클릭하세요.

   ![레코드 직접 추가 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045491766/original/Z5xJ2bdqGdqayjfdHK7wGVVP5Vs5lKUqiQ.png?1745385962)
6. 도메인 등록 업체에 추가해야 할 DNS 레코드(A 레코드, CNAME, TXT)가 표시돼요.

   ![추가해야 할 DNS 레코드 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045491792/original/YCI8-DHpBnHtPNr9frNnfoVS4BElSM4SkQ.png?1745385993)
7. 도메인 업체(예: Namecheap)에 로그인한 뒤 DNS 설정 화면으로 이동하세요.
8. 표시된 레코드를 그대로 추가하세요.
9. 변경사항을 저장하고 DNS 전파를 기다리세요. 최대 24시간이 걸릴 수 있어요.

---

## 도메인 업체별 수동 DNS 설정

{% hint style="info" %}
아래 화면은 각 도메인 업체의 화면이에요. 업체의 화면 표기에 맞춰 영어 메뉴 이름을 그대로 적었어요.
{% endhint %}

#### Cloudflare

▶ 영상 [3강 38:10](https://www.youtube.com/watch?v=cDyPG4a-OEs&t=2290s) · [3강 39:47](https://www.youtube.com/watch?v=cDyPG4a-OEs&t=2387s)

1. Cloudflare 대시보드에 로그인하세요.
2. 도메인을 선택하고 **DNS** 탭을 클릭하세요.
3. **Add Record**(레코드 추가)를 클릭하세요.
4. 하이퍼클래스에서 안내한 레코드를 하나씩 추가하세요.

   - 유형은 A, CNAME, TXT 중에서 선택하세요.`@`(루트 도메인)에는 **A Record**를 추가하고 IP 주소를 지정하세요.`www`나 서브도메인에는 **CNAME**을 추가하세요(해당하는 경우).
   - 이메일 인증(예: SPF/DKIM)에는 **TXT**를 추가하세요.
5. A 레코드와 CNAME 레코드는 **Proxy status**를 **DNS Only**(회색 구름)로 바꾸세요.

   {% hint style="warning" %}
   A 레코드와 CNAME 레코드의 **Proxy status**를 반드시 **DNS Only**(회색 구름)로 바꿔야 해요.
   {% endhint %}
6. 레코드를 추가할 때마다 **Save**(저장)를 클릭하세요.
7. 전파될 때까지 기다리세요(몇 분에서 24시간).

#### GoDaddy

1. GoDaddy 계정에 로그인하세요.
2. **My Products > Domains**로 이동한 뒤 해당 도메인 옆의 **Manage DNS**를 클릭하세요.
3. **Records**(레코드) 섹션에서 **Add**(추가)를 클릭하세요.

   - 유형은 A, CNAME, TXT 중에서 선택하세요.
   - 루트 도메인에는 `@`, 서브도메인에는 `www`를 사용하세요.
4. 하이퍼클래스에서 안내한 **레코드 값을 그대로** 입력하세요.
5. 레코드를 추가할 때마다 **Save**(저장)를 클릭하세요.
6. 변경사항이 전파될 때까지 기다리세요.

#### Namecheap

1. Namecheap 대시보드에 로그인하세요.
2. **Domain List**에서 해당 도메인 옆의 **Manage**를 클릭하세요.
3. **Advanced DNS** 탭으로 이동하세요.
4. **Host Records**에서 **Add New Record**를 클릭하고 다음을 추가하세요.
`@`에는 **A Record**`www`에는 **CNAME Record**
   - 인증이나 이메일(예: SPF/DKIM)에는 **TXT Record**
5. 하이퍼클래스 안내에 나온 값을 그대로 붙여 넣으세요.
6. **Save All Changes**를 클릭하세요.
7. DNS 전파까지 최대 24시간 기다리세요.

#### Squarespace

1. Squarespace 계정에 로그인하세요.
2. **Settings > Domains**로 이동해서 도메인을 선택하세요.
3. **DNS Settings**(Advanced)를 클릭하세요.
4. 다음을 추가하세요.
`@`에는 **A Record**(안내받은 IP 사용)`www`에는 **CNAME**(필요한 경우)
   - 이메일 인증에는 **TXT**
5. 레코드를 추가할 때마다 **Save**(저장)를 클릭하세요.
6. 변경사항을 저장했으면 하이퍼클래스로 돌아와 도메인을 다시 연결하세요.

---

## 도메인 연결 문제 해결

도메인을 수동이나 자동으로 연결하다 보면 다음과 같은 문제가 생길 수 있어요.

- **Record Conflicts: Multiple A Records**(A 레코드 여러 개 충돌)

  ![A 레코드 충돌 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045492883/original/-TX2PyjOHmMMB7Tjw2-PgGtYgaORdXTxLA.png?1745387571)
- **AAAA Record Conflict**(AAAA 레코드 충돌)

  ![AAAA 레코드 충돌 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045492907/original/663d7TxsvhXmjTPV-eUbvLzzFDUxDkED0A.png?1745387595)
- **CAA Record Conflict**(CAA 레코드 충돌)

  ![CAA 레코드 충돌 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045493186/original/m9rQevRuymmHX63WTCZRYzPPI0PNYhbqdw.png?1745388089)
- **DNS Records Do Not Match**(DNS 레코드 불일치)

  ![DNS 레코드 불일치 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045492971/original/ISi4IULI6PfftWfr-bcq7IBDkZSB9XqFJQ.png?1745387718)
- **Domain is Connected Elsewhere**(다른 곳에 이미 연결된 도메인)

---

## 도메인을 연결할 수 있는 제품

**퍼널 / 웹사이트 / 스토어 / 웨비나 / 블로그** ▶ 영상 [3강 45:57](https://www.youtube.com/watch?v=cDyPG4a-OEs&t=2757s)

- 도메인을 사용해 퍼널, 이커머스 스토어, 웨비나, 블로그처럼 고객에게 보여 주는 페이지를 호스팅할 수 있어요.

#### WordPress

- 하이퍼클래스의 WordPress 호스팅을 쓴다면, 안내받은 DNS 레코드로 도메인을 WordPress 사이트에 연결하세요.
- DNS 설정이 끝나면 시스템이 자동으로 감지하고 확인해요.
- 자세한 내용은 "WordPress: Domain Connect Integration" 문서를 참고하세요.

#### 이메일

- 이메일 발송을 인증하려면(예: SPF, DKIM, DMARC) 도메인이 필요해요.
- 도메인을 연결하면 이메일 전달률이 좋아지고, 메시지가 스팸으로 분류되는 것을 줄일 수 있어요.
- 자세한 내용은 [전용 이메일 발송 도메인 개요 및 설정](../../09-이메일/LC-Email-Dedicated-Domain-and-IP/dedicated-email-sending-domains-overview-setup.md)을 참고하세요.

**브랜드 도메인**(화이트라벨용)

- 도메인을 연결하면 하이퍼클래스 서브 계정이나 SaaS 기능을 화이트라벨로 쓸 수 있어요.
- 기본 `.hlpages.co` 주소가 내 브랜드 주소로 바뀌어요.
- 자세한 내용은 [시스템 생성 링크 브랜딩하기(API 도메인)](../branding-system-generated-links-api-domain.md)를 참고하세요.

**클라이언트 포탈**

- 내 도메인으로 고객용 대시보드를 호스팅할 수 있어요.
- 고객이 자산, 캠페인, 리포트를 볼 때 브랜드가 적용된 화면을 경험할 수 있어요.
- 자세한 내용은 [클라이언트 포탈 설정하기](../../39-클라이언트-포털/Client-Portal/how-to-set-up-the-client-portal.md)를 참고하세요.

---

## 알아 두면 좋은 팁

- **DNS 전파**: 변경사항이 완전히 전파되기까지 몇 분에서 최대 24시간이 걸릴 수 있어요.
- 도메인이 연결되고 레코드가 올바르면 **SSL**이 자동으로 발급돼요.
- 연결된 도메인은 모두 **설정 > 도메인**에서 관리할 수 있어요.
- 도메인이 24시간 넘게 **Pending**(대기 중)으로 표시되면 DNS 값을 다시 확인하거나 하이퍼클래스 고객지원에 문의하세요.

---

## 도움이 되는 자료

- 도메인 연결 문제 해결 가이드(Troubleshooting Guide - Connecting Your Domain)

