---
원문: /support/solutions/articles/155000002547-wordpress-how-to-add-domains-to-sites
번역일: 2026-11-06
카테고리: 06-사이트
---

# WordPress 사이트에 도메인 연결하기

WordPress 사이트에 도메인을 연결하면 방문자가 그 도메인 주소로 사이트에 들어올 수 있어요. 이 문서에서는 WordPress 사이트에 기본 도메인과 추가 도메인(서브도메인)을 연결하는 순서를 안내해요.

## 도메인 추가란?

구매한 도메인(예: example.com)을 하이퍼클래스 WordPress 사이트에 연결하는 기능이에요. 하이퍼클래스가 DNS 레코드를 확인하고 SSL을 발급하면, 방문자가 안전한 내 도메인 주소로 사이트에 들어올 수 있어요. 기본 도메인, 서브도메인, DNS 인증이 어떻게 동작하는지 알아 두면 안정적이고 안전하게 연결할 수 있어요.

{% hint style="info" %}
도메인 관리는 **라이브**(Live) 환경에서만 쓸 수 있어요.

**Staging**(스테이징) 환경에서는 도메인 영역이 비활성화되고 "This feature is only available in the live environment. Please switch to access it."(이 기능은 라이브 환경에서만 사용할 수 있습니다. 전환해서 이용하세요.)라는 문구가 나와요.

오른쪽 위 헤더의 **environment selector**(환경 선택기)로 **라이브**로 전환하세요.

![Staging 환경에서 도메인 영역이 비활성화된 화면](https://jumpshare.com/share/1I4xuG6ynV5ETXtCcls4+/Screenshot+2026-02-11+at+5.38.08%E2%80%AFPM.png)
{% endhint %}

## 도메인 추가의 장점

- 기본 도메인과 SSL 발급: 기본 도메인은 DNS 인증이 끝나면 SSL이 자동으로 발급돼요. 그래서 HTTPS로 안전하게 접속할 수 있어요.
- 여러 도메인 지원: 필요에 따라 도메인이나 서브도메인을 더 연결해 방문자를 나눠 보낼 수 있어요(제품 한도 안에서).
- 서브도메인 연결이 간편: blog.example.com 같은 서브도메인은 기본 도메인에 필요한 SSL TXT 검증 단계 없이 연결할 수 있어요.
- Domain Connect 옵션: 지원하는 도메인 등록 업체에 로그인하면 DNS 레코드를 직접 고치지 않아도 자동으로 설정돼요.
- 상태 표시: DNS와 SSL 상태를 한눈에 보고 문제를 빠르게 해결한 뒤 안심하고 사이트를 공개할 수 있어요.

## 준비 사항

아래 항목을 미리 확인하면 설정 오류를 막고, SSL 발급 속도를 높이고, 사이트를 공개할 때 중단 시간을 줄일 수 있어요.

- **라이브** 환경에서 작업하고 있어야 해요. **Staging** 환경이라면 오른쪽 위 헤더의 환경 선택기로 전환하세요.
- WordPress 사이트가 알맞은 서브 계정에 이미 만들어져 있어야 해요.
- 도메인 등록 업체나 DNS 호스팅 업체(예: Cloudflare, GoDaddy, IONOS)에서 도메인의 DNS 설정에 접근할 수 있어야 해요.
- DNS 업체가 Cloudflare라면 프록시 설정을 꺼 주세요.

## WordPress 사이트에 도메인 추가하기

1. 서브 계정에 로그인하세요.
2. **사이트** > **WordPress**로 이동하세요.

   ![사이트 > WordPress 메뉴 화면](https://jumpshare.com/share/NGK21FCbtFdfuiqL3xej+/Screen+Shot+2026-02-11+at+5.15.43+PM.png)
3. 도메인을 추가할 사이트에서 **Manage Website**(웹사이트 관리) 버튼을 클릭하세요.

   ![Manage Website 버튼 화면](https://jumpshare.com/share/ZUR1k8q62GCmfoC2wPcp+/Screen+Shot+2026-02-11+at+5.17.23+PM.png)
4. 사이트 관리 대시보드의 **Manage Your Domain**(도메인 관리) 섹션에서 **+ 도메인 추가**를 클릭하세요.

   ![Manage Your Domain 섹션의 도메인 추가 버튼](https://jumpshare.com/share/Ov0iQQe0ATfMbI8GJv1C+/Screen+Shot+2026-02-11+at+6.49.15+PM.png)
5. **Setup your Domain Name**(도메인 이름 설정)에 연결할 도메인 이름을 입력하세요.
6. **자동 구성** 또는 **수동으로 추가**를 선택하세요. 입력한 도메인이 이미 다른 서브 계정이나 에이전시에 연결돼 있는지는 하이퍼클래스가 자동으로 확인해요.
7. 사용할 수 있는 도메인이면 다음 단계로 넘어가세요.

   ![도메인 이름 입력 및 연결 방식 선택 화면](https://jumpshare.com/share/ctti3dvwRVyj0RXnD6GT+/Screen+Shot+2026-02-11+at+6.52.48+PM.png)
8. 도메인 확인이 끝나면 SSL 인증서를 설정해야 해요.
9. 화면에 나온 TXT 레코드를 GoDaddy, Hostinger, Namecheap 같은 DNS 업체에 추가하세요.
10. 대부분의 SSL 레코드는 1시간 안에 반영되지만, 전 세계에 모두 반영되려면 최대 48시간이 걸려요. SSL 레코드가 잘 반영되도록 TTL 값을 600ms 또는 설정할 수 있는 가장 낮은 값으로 지정하세요.11. TXT 레코드를 추가하고 인증까지 마치면 마지막 단계로 넘어가세요.

    ![TXT 레코드 인증 완료 화면](https://jumpshare.com/share/4IIbR8naF6wr7la8ErGY+/jvDFyZPA87UqHBxsEtgj1B8l9Ct5TZujug.png)
12. 화면에 나온 CNAME 레코드와 A 레코드를 DNS 업체에 추가하세요.
13. 레코드를 모두 추가했으면 **DNS 레코드 확인** 버튼을 클릭하세요.

    ![DNS 레코드 확인 버튼 화면](https://jumpshare.com/share/vr5hZ7tZJiLnsY3pJBtl+/cDKrS-1v1iSnRRwt6-b5ZuBDGu75RefZ9w.png)

## WordPress 사이트에 서브도메인 추가하기

서브도메인을 추가하는 과정은 도메인을 추가할 때와 비슷해요. 추가 도메인의 SSL 인증서는 **Update DNS**(DNS 업데이트) 단계에서 인증되므로 TXT 레코드는 추가하지 않아도 돼요.

1. 사이트 관리 대시보드의 **Manage Your Domain**(도메인 관리) 섹션에서 **+ 도메인 추가**를 클릭하세요.

   ![Manage Your Domain 섹션의 도메인 추가 버튼](https://jumpshare.com/share/Ov0iQQe0ATfMbI8GJv1C+/Screen+Shot+2026-02-11+at+6.49.15+PM.png)
2. **Setup your Domain Name**(도메인 이름 설정)에 연결할 도메인 이름을 입력하세요.
3. **자동 구성** 또는 **수동으로 추가**를 선택하세요. 입력한 도메인이 이미 다른 서브 계정이나 에이전시에 연결돼 있는지는 하이퍼클래스가 자동으로 확인해요.
4. 입력한 도메인이 이미 다른 서브 계정이나 에이전시에 연결돼 있는지 하이퍼클래스가 자동으로 확인해요. 사용할 수 있는 도메인이면 마지막 단계인 DNS 레코드 업데이트로 넘어가세요.

   ![도메인 이름 입력 및 연결 방식 선택 화면](https://jumpshare.com/share/ctti3dvwRVyj0RXnD6GT+/Screen+Shot+2026-02-11+at+6.52.48+PM.png)
5. 화면에 나온 CNAME 레코드와 A 레코드를 DNS 업체에 추가하세요.
6. 레코드를 모두 추가했으면 **DNS 레코드 확인** 버튼을 클릭하세요.

   ![DNS 레코드 확인 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064692102/original/2um_cn8g9ewwAHEArYffzvuAf3_I1G8MlA.png?1770817791)

## 도메인/서브도메인 대시보드 살펴보기

새 대시보드에서 도메인 관리 상태를 한눈에 확인할 수 있어요.

- SSL 발급 상태: **SSL issued**(SSL 발급됨) / **SSL Not Issued**(SSL 미발급) 태그로 SSL 인증서가 제대로 발급됐는지 확인하세요.
- DNS 레코드 인증 상태: **인증됨** / **미인증** 태그로 DNS 레코드가 제대로 설정됐는지 확인하세요.
- 도메인 관리: 도메인이나 서브도메인을 최대 5개까지 추가할 수 있어요. 그중 하나를 기본 도메인으로 지정하면 더 체계적으로 관리할 수 있어요.
- 접두사 간편 변경: 대시보드에서 **Change prefix to WWW**(접두사를 WWW로 변경) 또는 **Remove WWW Prefix**(WWW 접두사 제거) 옵션으로 www가 있는 주소와 없는 주소를 쉽게 바꿀 수 있어요.

## 자주 묻는 질문

### 기본 도메인에는 SSL TXT 레코드가 필요한데 서브도메인에는 왜 필요 없나요?

SSL TXT 검증 단계는 인증서를 발급하기 위해 루트 도메인(apex domain)의 소유권을 확인하는 과정이에요. 서브도메인은 기본 도메인의 소유권이 확인된 뒤에 이어서 진행돼요.

### DNS 반영에는 시간이 얼마나 걸리나요?

DNS 업체에 따라 달라요. 대부분 몇 분 안에 반영되지만 더 오래 걸리는 경우도 있어요. TTL을 600초 정도로 설정했다면 10~30분 뒤에 다시 확인해 보세요.

### 도메인이 이미 다른 하이퍼클래스 서브 계정에 연결돼 있어요. 어떻게 하나요?

현재 소유자에게 해당 서브 계정에서 도메인을 제거해 달라고 요청하세요. 소유자가 누구인지 불분명하면 하이퍼클래스 고객지원에 문의하세요.

### A 레코드와 CNAME 레코드를 둘 다 추가해야 하나요?

화면에 표시된 레코드를 그대로 추가하세요. 두 가지가 모두 필요한 경우도 있고, 한 가지 유형만 쓰는 경우도 있어요. 레코드 값은 설치마다 달라요.
