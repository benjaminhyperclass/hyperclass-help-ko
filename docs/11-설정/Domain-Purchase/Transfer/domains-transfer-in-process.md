---
원문: /support/solutions/articles/155000006329-domains-transfer-in-process
번역일: 2026-11-06
카테고리: 11-설정
---

# 다른 레지스트라의 도메인을 하이퍼클래스로 이전하기

도메인을 하이퍼클래스로 이전하면 등록, 갱신, DNS, 이메일·사이트·클라이언트 포털 연결을 한곳에서 관리할 수 있어요. 이 문서에서는 이전 가능 조건, 단계별 진행 방법, 문제 해결까지 도메인 이전 전체 과정을 안내해요.

{% hint style="info" %}
일부 계정에서는 도메인 이전 기능이 켜져 있지 않을 수 있어요. 도메인 이전 옵션이 보이지 않으면 하이퍼클래스 고객지원에 문의해 기능을 켜 달라고 요청하세요.
{% endhint %}

## 도메인 이전이란

도메인 이전(Domain Transfer-In)은 GoDaddy, Namecheap 같은 다른 도메인 등록 업체(레지스트라)에 있는 도메인의 소유권과 관리를 하이퍼클래스로 옮기는 기능이에요. 서브 계정 안에서 도메인을 구매·이전·갱신하고 DNS 레코드까지 관리할 수 있어서 워크플로우이 단순해져요. **도메인** 페이지가 모든 도메인 활동을 한눈에 보여 주는 통합 대시보드 역할을 해요.

도메인 이전을 시작하면 하이퍼클래스가 5단계로 안내해요. 도메인 입력으로 시작해서 현재 레지스트라의 승인으로 끝나요. 이전 가능 여부는 시스템이 자동으로 확인하고, DNS 레코드를 가져오거나 검토할 수도 있어요. 마지막에는 EPP(인증) 코드로 안전하게 이전을 마무리해요. 이전이 끝난 도메인은 하이퍼클래스의 웹사이트, 퍼널, 클라이언트 포털, 이메일 시스템에 바로 연결돼요.

## 도메인 이전의 장점

- 통합 관리: 도메인, DNS, 결제, 갱신을 하이퍼클래스의 웹사이트·퍼널·이메일 도구와 함께 관리해요.
- 보안과 유연성: 하이퍼클래스 안에서 DNS를 모두 다룰 수 있어서 외부 레지스트라에 따로 로그인하지 않아도 돼요.
- 남은 기간 유지: 기존에 남은 기간은 그대로 이어지고, 이전할 때 1년이 추가돼요(TLD에 따라 예외가 있을 수 있어요).
- 투명한 가격: 이전 수수료가 미리 정해져 있어서 비용을 확인하기 쉬워요.
- 간편한 연동: 이전한 도메인을 하이퍼클래스 기능에 바로 연결할 수 있어요.

## 준비 사항

시작하기 전에 도메인이 업계 기준을 충족하고 이전할 준비가 되었는지 확인하세요.

- 도메인을 등록한 지 60일이 지났어요(ICANN 규정).
- 현재 레지스트라에서 도메인 잠금이 해제되어 있어요.
- WHOIS 개인정보 보호가 꺼져 있어요.
- DNSSEC이 켜져 있다면 꺼져 있어요.
- 레지스트라에서 EPP/인증 코드를 받을 수 있어요.
- WHOIS에 등록된 연락처 이메일이 정확해요. 이전 승인 이메일이 그 주소로 가요.
- 하이퍼클래스 지갑에 이전 비용을 낼 만큼 잔액이 있어요.
- 현재 DNS 설정을 복사해서 저장해 두길 권장해요.

## 도메인 구매 켜기(에이전시 설정)

에이전시 관리자만 쓸 수 있어요.

1. 화면 왼쪽 위의 위치 드롭다운을 클릭하고 **에이전시**를 선택해서 **에이전시 보기로 전환**하세요.

   ![에이전시 보기로 전환](https://jumpshare.com/share/cab2JEP4qxktoWZHyGQb+/Screen+Shot+2025-11-04+at+8.23.27+PM.png)
2. **설정**을 클릭하세요.

   ![설정 메뉴](https://jumpshare.com/share/2fOTAcG8yhIM5g3Q92D7+/Screen+Shot+2025-11-04+at+8.26.14+PM.png)
3. **설정 > 회사**로 이동한 뒤 아래로 스크롤해서 **도메인 구매**를 찾으세요.
4. 설정을 **켜짐**으로 바꿔 플랫폼 전체에서 도메인 구매 기능을 켜세요.

   ![도메인 구매 켜짐 설정](https://jumpshare.com/share/hNuxDZzC7z5rESWvG7D6+/Screen+Shot+2025-11-04+at+8.28.42+PM.png)

## 서브 계정에서 도메인 구매 켜기

에이전시 관리자만 쓸 수 있어요.

1. 에이전시 **설정**으로 이동하세요.

   ![에이전시 설정 메뉴](https://jumpshare.com/share/2fOTAcG8yhIM5g3Q92D7+/Screen+Shot+2025-11-04+at+8.26.14+PM.png)
2. **도메인 구매**를 클릭하세요.
3. 도메인 이전 가져오기 기능을 쓸 서브 계정마다 도메인 구매를 개별로 **활성화**하세요.

   ![서브 계정별 도메인 구매 활성화](https://jumpshare.com/share/MWoip4PJfZ9SOIYi6eeQ+/Screen+Shot+2025-11-04+at+10.38.03+PM.png)

## 도메인 이전 가져오기 사용하기

### 1단계: 이전 시작

1. 사용할 서브 계정에서 **설정**을 클릭하세요.

   ![서브 계정 설정 메뉴](https://jumpshare.com/share/nTXzqZT013Ct84gUr2eY+/Screen+Shot+2025-11-04+at+11.32.38+PM.png)
2. **도메인 & URL 리다이렉트 > 도메인**으로 이동하세요.

   ![도메인 & URL 리다이렉트의 도메인 메뉴](https://jumpshare.com/share/vB2dMSjaWnKpjeU1lMAX+/Screen+Shot+2025-11-04+at+11.34.28+PM.png)
3. 도메인이 이미 외부(external) 도메인으로 등록되어 있다면 **Transfer-In**(이전 가져오기)을 클릭하세요.

   ![외부 도메인의 Transfer-In 버튼](https://jumpshare.com/share/rR6gVnjPlCmD6NTfM90h+/Screen+Shot+2025-11-04+at+11.36.44+PM.png)
4. 새 도메인을 이전하려면 **도메인 이전 받기** 버튼을 클릭하세요.

   ![도메인 이전 받기 버튼](https://jumpshare.com/share/z5QtC2UCM12EBniFj93M+/Screen+Shot+2025-11-04+at+11.39.02+PM.png)
5. 또는 **Purchase/Transfer Domain**(도메인 구매/이전) 버튼을 클릭하세요.

   ![Purchase/Transfer Domain 버튼](https://jumpshare.com/share/w2Irmx2mjhUBraqyhP33+/Screen+Shot+2025-11-04+at+11.43.20+PM.png)
6. 이전할 도메인 이름을 입력하고 **계속** 버튼을 클릭하세요.

   ![이전할 도메인 이름 입력](https://jumpshare.com/share/yXwYA3HzoEGdHK4UsVI8+/Screen+Shot+2025-11-04+at+11.54.46+PM.png)

### 2단계: 자격 확인

1. 시스템이 ICANN 요건을 충족하는지 **자격 확인**을 진행해요. 도메인을 이전할 수 있으면 이전 절차를 계속 진행할 수 있어요.
2. **자격 확인** 단계에서 하이퍼클래스는 도메인을 플랫폼으로 이전할 수 있는지 확인해요. 레지스트라 차원의 규정과 기술적인 준비 상태를 모두 살펴봐요. 이전할 수 있는 도메인이면 다음 정보를 볼 수 있어요.

   - 도메인 이름
   - 현재 도메인 레지스트라
   - 현재 만료일과 새 만료일(1년 연장)
   - 만료일 연장에 적용되는 수수료
3. 다음 단계로 넘어가기 전에 현재 레지스트라에 접속할 수 있는지 확인하세요.

   ![자격 확인 결과 화면](https://jumpshare.com/share/KmTBlDnpyy5qXBjQZgqT+/Screen+Shot+2025-11-05+at+12.17.00+AM.png)
4. 다음에 해당하면 이전할 수 없어요.

   - 현재 레지스트라가 지원되지 않아요.
   - 하이퍼클래스에서 이미 구매한 도메인이에요.
   - TLD(최상위 도메인)가 지원되지 않아요.
   - 최근 60일 안에 구매했거나 이전한 도메인이에요.
   - 이전을 허용하지 않는 EPP 상태예요(예: pendingDelete, redemptionPeriod, serverHold 등).
   - 이전하면 도메인 기간이 허용 최대 기간을 넘게 돼요.
   - 도메인 확장자가 지원되지 않아요.
   - 도메인에 DNSSEC이 켜져 있으면, 이전을 계속하기 전에 DNSSEC을 꺼야 한다는 안내가 따로 표시돼요. 이 이전 불가 사유에는 일반적인 이전 불가 메시지 대신 이 안내가 나오고, 무엇을 해야 하는지 알 수 있어요.

     안내에 있는 도움말 링크에서 현재 제공업체의 DNSSEC 해제 방법을 확인하세요.

     DNSSEC을 끈 뒤에는 변경 사항이 적용되도록 **최대 48시간**을 기다렸다가 도메인의 이전 가능 여부를 다시 확인하세요.
5. 이런 경우 **계속** 버튼이 비활성화되고, 지금은 이전할 수 없는 이유를 설명하는 오류 메시지가 표시돼요.

   ![이전할 수 없는 도메인의 비활성화된 계속 버튼과 오류 메시지](https://jumpshare.com/share/khuuGlRfvHko96IAmf5C+/GIF+Recording+2025-11-05+at+12.22.21+AM.gif)

### 3단계: DNS 레코드 검토하고 저장하기

{% hint style="info" %}
도메인을 이전하기 전에(예: GoDaddy나 Namecheap에서) 현재 제공업체의 DNS 레코드를 모두 확인하고 똑같이 옮겨 두세요. 그래야 웹사이트, 이메일 등 서비스가 중단되지 않아요.
{% endhint %}

DNS 레코드를 가져오는 방법은 두 가지 중에서 고를 수 있어요.

{% hint style="info" %}
도메인을 산 곳과 DNS 제공업체는 다를 수 있어요. 네임서버를 바꿨다면 그래요. 예를 들어 GoDaddy에서 도메인을 샀지만 네임서버를 바꿔 Cloudflare로 연결했다면 지금은 Cloudflare가 DNS를 관리해요. 이럴 때는 Cloudflare에 로그인해서 DNS 레코드(영역 파일)를 확인해야 해요.
{% endhint %}

#### 1. DNS 영역 파일 업로드

현재 DNS 제공업체의 DNS 레코드를 하나도 빠뜨리지 않고 모두 가져오고 싶을 때 권장하는 방법이에요. 이 파일에는 A, CNAME, TXT, MX 등 도메인의 모든 DNS 항목이 들어 있어요.

현재 DNS 제공업체에서 DNS 영역 파일을 받으려면 다음과 같이 하세요.

1. 현재 DNS 제공업체 또는 도메인을 처음 구매한 곳에 로그인하세요.
2. 이전할 도메인의 DNS 설정으로 이동하세요.
3. DNS 영역/레코드 파일을 내보내는 옵션을 찾으세요.
4. 이런 옵션이 보이지 않으면 현재 DNS 제공업체나 레지스트라의 고객지원에 문의해서 파일을 받으세요.

{% hint style="info" %}
아래 레지스트라별 안내를 따라 단계별로 진행하세요.

- GoDaddy: GoDaddy에서 영역 파일을 업로드하는 방법을 확인하세요.
- Cloudflare: Cloudflare에서 영역 파일을 업로드하는 방법을 확인하세요.
- Namecheap: 현재 Namecheap은 내려받을 수 있는 영역 파일을 제공하지 않아요. 레코드를 직접 다시 만들거나 고객지원에 문의해 레코드를 받아야 할 수 있어요. 레코드를 직접 확인하는 방법도 안내되어 있어요.
- IONOS: 도메인 내보내기(Domain Exports), Cloud DNS, API 사용법(API How-Tos)
{% endhint %}

![DNS 영역 파일 업로드 화면](https://jumpshare.com/share/BkYkQJsNCYsXzMyWBmcG+/Screen+Shot+2025-11-05+at+12.47.10+AM.png)

#### 2. DNS 레코드 자동 스캔

{% hint style="info" %}
레지스트라에서 네임서버 레코드를 바꿨다면 도메인 레지스트라와 DNS 제공업체가 다를 수 있어요. 예를 들어 GoDaddy에서 도메인을 샀지만 네임서버를 바꿔 Cloudflare로 연결했다면 Cloudflare가 DNS 제공업체예요. 이럴 때는 Cloudflare에 로그인해서 DNS 레코드를 확인하고 비교해야 해요.
{% endhint %}

- 따로 준비할 것이 없어서 편한 방법이에요. 현재 DNS 레코드를 자동으로 스캔하지만, 일부 레코드는 스캔에서 찾지 못할 수 있어요.
- 그래서 이전 후에도 퍼널, 웹사이트 같은 기존 연결 서비스가 끊기지 않게 하려면, 스캔된 레코드를 현재 DNS 제공업체나 레지스트라의 레코드와 직접 비교해 보고 필요하면 레코드를 추가하거나 수정하길 강력히 권장해요.

![DNS 레코드 자동 스캔 화면](https://jumpshare.com/share/YptMRgalD0ehKRYsx5uJ+/Screen+Shot+2025-11-05+at+1.03.57+AM.png)

### DNS 레코드 검토하기

{% hint style="info" %}
스캔된 DNS 레코드를 DNS 호스트/레지스트라의 레코드와 직접 비교하세요. 빠진 항목이 있으면 이전 후 웹사이트나 이메일이 중단될 수 있어요. 가져오지 못한 레코드는 검토해서 추가하세요.
{% endhint %}

1. 레코드를 가져오면 DNS 레코드를 검토할 수 있어요. 표시되는 DNS 표에서 다음 작업을 할 수 있어요.

   - 모든 DNS 항목을 레코드 유형(예: A, CNAME, TXT, MX)별로 나눠 표로 확인해요.
   - **레코드 추가**를 클릭해 새 레코드를 추가해요.
   - 필요에 따라 개별 레코드를 편집하거나 삭제해요.
   - **레코드 검색**에서 이름, 유형, 값 등 어떤 항목으로든 레코드를 검색해요.
2. 검토를 마치면 **Confirmation**(확인) 체크박스를 선택하고 **계속**을 클릭하세요.

### 4단계: 이전 완료

**이전 완료** 단계에서는 현재 레지스트라(GoDaddy, Namecheap, IONOS 등)에서 하이퍼클래스로 도메인을 옮기는 인증 절차를 마무리해요. 이 단계를 거치면 이전 후에도 도메인과 연결된 서비스가 문제없이 동작해요.

**이전 완료** 화면에서는 다음을 진행해요.

1. 도메인을 처음 등록한 현재 레지스트라에 로그인하세요.
2. DNSSEC과 Whois 개인정보 보호를 끄세요.

   1. 도메인을 이전하기 전에 현재 레지스트라에서 DNSSEC을 끄고 Whois 개인정보 보호를 해제하는 것이 중요해요. 일반적인 순서는 다음과 같아요(자세한 화면은 업체마다 달라요).

      1. 현재 레지스트라 계정에 로그인하세요.
      2. DNS 또는 도메인 설정으로 이동하세요.
      3. DNSSEC 옵션을 찾아 끄세요.
      4. Whois 개인정보 보호가 켜져 있으면 끄세요.
      5. 변경사항을 저장하세요.

         {% hint style="warning" %}
         현재 제공업체에서 DNSSEC을 끈 뒤에는 변경 사항이 적용되기까지 최대 **48시간**이 걸릴 수 있어요. 그래도 도메인이 이전 불가로 나오면, 변경이 반영될 때까지 기다린 뒤 이전 가능 여부를 다시 확인하세요.
         {% endhint %}
   2. GoDaddy: [DNSSEC 끄기](https://www.godaddy.com/en-in/help/turn-dnssec-on-or-off-6420), [Whois 개인정보 보호 해제](https://www.godaddy.com/en-in/help/change-my-domain-privacy-level-32283)

      {% hint style="info" %}
      DNSSEC 레코드가 완전히 삭제되기까지 몇 분 걸릴 수 있어요. 설정이 바뀌면 GoDaddy에서 확인 메시지가 표시돼요.
      {% endhint %}
   3. Namecheap: [DNSSEC 끄기](https://www.namecheap.com/support/knowledgebase/subcategory/2232/dnssec/), [Whois 개인정보 보호 해제](https://www.namecheap.com/support/knowledgebase/article.aspx/484/37/how-do-i-disable-domain-privacy-service-for-my-domain/)
   4. IONOS: [DNSSEC 끄기](https://www.ionos.com/help/domains/dns-pro/setting-up-and-managing-dnssec/#c165924), [Whois 개인정보 보호 해제](https://www.ionos.com/help/domains/domain-guard/disabling-domain-guard/#:~:text=In%20order%20to%20deactivate%20Domain,instructions%20contained%20in%20the%20email.)
3. 도메인 잠금을 해제하고 인증 코드(EPP 코드)를 요청하세요.

   1. 도메인을 이전하려면 잠금이 해제되어 있어야 하고, 현재 레지스트라에서 받은 인증 코드(EPP 코드 또는 이전 코드라고도 해요)가 필요해요. 일반적인 순서는 다음과 같아요(자세한 화면은 업체마다 달라요).

      1. 현재 레지스트라 계정(예: GoDaddy, Namecheap, IONOS)에 로그인하세요.
      2. 도메인 관리 또는 도메인 설정 메뉴로 이동하세요.
      3. Domain Lock 또는 Registrar Lock 옵션을 찾으세요.
      4. 잠금을 비활성화해서 도메인 잠금을 해제하세요.
      5. 잠금이 해제되면 인증 코드를 받는 옵션을 찾으세요. EPP code, Transfer Code, AuthInfo 같은 이름으로 되어 있을 수 있어요.
      6. 코드는 화면에 바로 표시되거나 등록된 이메일로 전송돼요.
   2. GoDaddy: GoDaddy에서 도메인을 다른 곳으로 이전하는 자세한 방법은 [여기](https://www.godaddy.com/en-in/help/transfer-my-domain-away-from-godaddy-3560)에서 확인하세요.
   3. Namecheap: Namecheap에서 도메인을 다른 곳으로 이전하는 자세한 방법은 [여기](https://www.namecheap.com/support/knowledgebase/article.aspx/258/84/what-should-i-do-to-transfer-a-domain-from-namecheap/)에서 확인하세요.

      {% hint style="info" %}
      인증 코드를 요청하기 전에 WhoisGuard가 꺼져 있는지 확인하세요.
      {% endhint %}
   4. IONOS: IONOS에서 도메인을 다른 곳으로 이전하는 자세한 방법은 [여기](https://www.ionos.com/help/domains/transferring-your-domain-away-from-ionos-to-another-provider/transferring-a-domain-from-11-ionos-to-another-provider/)에서 확인하세요.
4. 이전을 제출하고 결제를 완료하세요. **이전 확인 및 완료** 버튼을 클릭하면 하이퍼클래스가 다음을 진행해요.

   - 도메인 잠금 해제 상태, 인증 코드, 그 밖의 레지스트리 단계 상태를 확인해요.
   - 도메인을 이전할 수 있으면 지갑에서 수수료를 차감해요.
   - 이전 요청을 제출해요.

![이전 확인 및 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053908643/original/7FrzYltls0iZnMVKfBrzjU7GAJmwemPbmA.png?1758063558)

### 5단계: 진행 중인 이전 승인

도메인 이전 요청을 제출했다면 마지막 단계는 현재 레지스트라에서 이전을 승인하는 거예요. 승인하기 전까지 이전은 대기 상태로 남고 완료되지 않아요.

#### 승인이 필요한 이유

도메인 이전에는 무단 변경을 막기 위해 현재 레지스트라(GoDaddy, Namecheap, IONOS 등)의 명시적인 확인이 필요해요. 이메일 받은편지함이나 레지스트라 대시보드에서 직접 이전을 승인해야 해요.

아무 조치를 하지 않으면 레지스트라 정책에 따라 5~7일 후에 이전이 자동 승인될 수 있어요.

![레지스트라에서 이전을 승인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057577476/original/t1BagzEiwEYI-IHljumJsUBBah-8myD4rA.png?1762287099)

#### 레지스트라에서 이전 승인하기

레지스트라에 따라 승인 방법이 달라요.

GoDaddy

- 방법 1: 이메일로 승인
- 방법 2: 대시보드에서 승인

Namecheap: Namecheap에서 도메인 이전(Transfer a domain out of Namecheap)

IONOS: IONOS에서 도메인 이전(Domain Transfer Out of Ionos)

- IONOS에 로그인하세요.
- Domains & SSL로 이동하세요.
- 이전하는 도메인을 클릭하세요.
- Pending Transfer 안내 또는 이메일 안내를 찾으세요.
- 안내가 나오면 이전을 승인하세요.

#### 이전 승인 후

이전을 승인하면 다음과 같이 돼요.

- 도메인이 하이퍼클래스의 레지스트라 파트너(Cloudflare)로 옮겨져요.
- 계정의 **Internal Domains**(내부 도메인) 아래에 도메인이 표시돼요.
- 하이퍼클래스 안에서 DNS, 갱신, 결제를 바로 관리할 수 있어요.
- **관리** 버튼이 활성화되어 추가 작업을 할 수 있어요.

![이전 승인 후 도메인 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053901126/original/h7OV1ZeOjqNuyXxdoc3IuGE12V0FHJrtmA.png?1758046369)

#### 이전이 거절된 경우

![이전이 거절된 도메인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053901125/original/XcG-hO4K2v2R9R94beX9K13Q3p7bV4hB3g.png?1758046368)

다음과 같은 경우 이전이 거절될 수 있어요.

- 직접 이전을 취소한 경우
- 레지스트라가 이전을 막은 경우(예: 60일 잠금)
- 제때 승인하지 않은 경우

이럴 때는 다음과 같이 표시돼요.

- 도메인 상태가 **Rejected**(거절됨)로 나와요.
- **Transfer to Us**(하이퍼클래스로 이전) 버튼이 다시 나타나서 다시 시도할 수 있어요.

### 6단계: 이전 후 할 일

- DNS 레코드를 확인하세요. 도메인이 사이트, 퍼널, 이메일에 올바르게 연결되어 있는지 점검해요.
- 서비스를 다시 연결하세요.

  - 이메일 발송 도메인
  - 웹사이트/퍼널 도메인
  - 클라이언트 포털 또는 화이트라벨 로그인 도메인
- 자동 갱신을 설정하세요(권장).

## 자주 발생하는 문제와 해결 방법

- 인증 코드가 거부돼요 → 레지스트라에 다시 확인하고 새 코드를 요청하세요.
- 이전 이메일이 오지 않아요 → WHOIS 연락처 이메일이 맞는지 확인하고 스팸함도 살펴보세요.
- 도메인이 잠겨 있어요 → 레지스트라 잠금이 완전히 해제되었는지 확인하세요.
- 이전에 7일 넘게 걸려요 → 일부 레지스트라는 이전 허용을 늦춰요. 현재 레지스트라 관리 화면에서 상태를 확인하세요.
- 웹사이트/이메일이 중단돼요 → DNS 레코드를 제대로 가져왔는지 확인하세요.

## 자주 묻는 질문

### 도메인을 이전하는 데 비용이 얼마나 드나요?

1년 갱신 비용이 청구되고, 현재 만료일에 1년이 더해져요.

### 모든 도메인 확장자를 이전할 수 있나요?

.com, .net, .org 같은 대부분의 일반 TLD를 지원해요. 일부 국가 코드 TLD는 지원하지 않을 수 있어요.

### 나중에 도메인을 다른 곳으로 옮기고 싶으면 어떻게 하나요?

도메인 잠금을 해제하고 인증 코드를 받으면 다른 레지스트라로 이전할 수 있어요(도메인 이전 내보내기(Domain Transfer Out) 가이드 참고).

### 자동 스캔 후 일부 DNS 레코드가 빠져 있어요. 어떻게 하나요?

스캔된 레코드는 항상 현재 DNS 제공업체의 레코드와 직접 비교해 보세요. 자동 스캔은 일부 레코드를 놓칠 수 있어요. 이전을 완료하기 전에 레코드를 편집, 삭제하거나 추가할 수 있어요.

### 네임서버는 Cloudflare에서 관리하는데 도메인은 GoDaddy에 있어요. 어떻게 되나요?

레지스트라가 GoDaddy여도 DNS 제공업체는 Cloudflare예요. 도메인을 이전해도 이전 후에 네임서버를 바꾸지 않는 한 DNS 설정은 계속 Cloudflare에서 관리돼요.

### 레지스트라와 DNS 제공업체가 달라요. 어떻게 하나요?

DNS 제공업체(예: Cloudflare)에 로그인해서 DNS 레코드를 내보내거나 확인해야 해요. 레지스트라는 도메인만 보관하고 DNS 설정은 갖고 있지 않아요.

### 이전을 완료한 뒤 얼마나 걸리나요?

제출하면 보통 레지스트라에 따라 1~5일 안에 이전이 끝나요. 직접 승인하면 더 빨리 끝나는 도메인도 있어요.

### 도메인 잠금을 해제하는 옵션이 보이지 않아요. 어떻게 하나요?

일부 레지스트라는 이 설정을 “Security(보안)”나 “Transfer Settings(이전 설정)” 아래에 숨겨 두어요. 보이지 않으면 해당 업체의 도움말 센터에서 검색하거나 고객지원에 문의하세요.

### 인증 코드가 틀렸다고 나와요. 어떻게 하나요?

오류가 표시돼요. 레지스트라에서 코드를 다시 확인하고, 도메인 잠금도 해제되어 있는지 확인하세요.

### 도메인을 이전하면 서비스가 중단되나요?

이전하기 전에 DNS 레코드를 정확하게 검토하고 옮겨 두면 중단되지 않아요. 항상 직접 비교해서 확인하세요.

### 나중에 도메인을 다른 레지스트라로 다시 옮길 수 있나요?

네, 할 수 있어요. 다만 ICANN 규정에 따라 보통 마지막 이전 후 60일을 기다려야 해요.
