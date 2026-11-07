---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005176-domain-transfer-out-to-cloudflare
번역일: 2026-11-06
카테고리: 11-설정
---

# 도메인을 다른 Cloudflare 계정으로 이전하기

하이퍼클래스에서 구매한 도메인 중 조건을 충족하는 도메인을 다른 Cloudflare 계정으로 직접 옮기는 방법이에요. Cloudflare 계정 사이에서 소유권만 옮기는 방식이라 등록 기관은 바뀌지 않아요. EPP 코드(인증 코드)도 필요 없고, 하이퍼클래스 고객지원에 문의하지 않아도 바로 시작할 수 있어요.

## 이전 전에 확인할 조건과 제한 사항

이전을 시작하기 전에 도메인과 받는 쪽 Cloudflare 계정이 아래 조건을 충족하는지 확인하세요.

- 하이퍼클래스에서 구매한 도메인이에요.
- 받는 쪽은 내가 접근할 수 있는 다른 Cloudflare 계정이에요.
- 도메인이 받는 쪽 Cloudflare 계정에 이미 추가되어 있어요.
- Cloudflare 플랜을 선택했어요. **무료** 플랜도 지원해요.
- 필요한 DNS 레코드가 받는 쪽 계정에 설정되어 있어요.
- DNSSEC가 꺼져 있어요.
- 받는 쪽 계정의 모든 DNS 레코드에서 프록시(Proxying)가 꺼져 있어요.
- 도메인이 60일 ICANN 이전 제한에 걸려 있지 않아요.
- 이 도메인에 진행 중인 다른 Cloudflare 계정 이전 요청이 없어요.

---

## 받는 쪽 Cloudflare 계정 준비하기

하이퍼클래스에서 이전을 시작하기 전에 받는 쪽 Cloudflare 계정을 먼저 준비하세요.

1. 받는 쪽 Cloudflare 계정에 로그인하세요.
2. **+ 추가 > 도메인 연결**로 이동해 도메인을 추가하세요.

   ![Cloudflare에서 도메인 연결 메뉴로 이동한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082879167/original/jjEXIPF7YWHCxyf-fKRVQz-lYVslfetpFQ.png?1791476706)
3. Cloudflare 플랜을 선택하세요. **무료** 플랜도 지원해요.
4. 필요한 DNS 레코드가 받는 쪽 영역(zone)에 있는지 확인하세요.
5. 모든 DNS 레코드에서 프록시를 끄세요.
6. DNSSEC가 꺼져 있는지 확인하세요.

![받는 쪽 Cloudflare 계정의 DNS 레코드 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066541215/original/_Kcx_bTIL4_t4G4MaH2E5Xs9l-aVkFwc6Q.jpeg?1773091385)

{% hint style="warning" %}
Cloudflare는 계정을 옮길 때 DNS 레코드를 복사하지 않아요. 이전이 끝난 뒤에는 받는 쪽 계정에 설정해 둔 DNS 레코드가 사용돼요.
{% endhint %}

---

## 하이퍼클래스에서 이전 시작하기

받는 쪽 Cloudflare 계정을 준비했다면, 하이퍼클래스의 도메인 설정에서 바로 이전을 시작할 수 있어요.

### 1단계: 이전 설정 열기

1. 해당 **서브 계정**에서 **설정 > 도메인 & URL 리다이렉트**로 이동하세요.
2. 도메인을 찾아 **관리**를 클릭하세요.
3. **고급 설정 > 구성**을 여세요.
4. **다른 등록 기관으로 이전**을 선택하세요.

![다른 등록 기관으로 이전 메뉴를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082888598/original/-nxRoQdeL89JKXq3W7BdqpTMHrNrzjXaxQ.png?1791484641)

{% hint style="info" %}
옵션 이름은 **다른 등록 기관으로 이전**이지만, Cloudflare 계정 이전 옵션을 선택하면 등록 기관은 바뀌지 않아요. 도메인은 계속 Cloudflare에 등록되어 있어요.
{% endhint %}

### 2단계: 이전 가능 여부 확인하기

**다른 등록 기관으로 이전**을 선택하면 도메인의 이전 가능 여부를 확인해요.

도메인이 아직 60일 이전 제한 기간에 있으면, 팝업 창에 이전할 수 있게 되는 날짜가 표시돼요.

### 3단계: Cloudflare 계정 이전 선택하기

도메인을 다른 Cloudflare 계정으로 옮기는 옵션을 선택하세요.

계속 진행하기 전에 받는 쪽 계정이 갖춰야 할 조건을 확인하세요.

### 4단계: Cloudflare 계정 ID 입력하기

받는 쪽 계정의 **Cloudflare Account ID**(Cloudflare 계정 ID)를 입력하고 **도메인 이전 시작**을 클릭하세요.

그러면 하이퍼클래스가 Cloudflare 계정 이전 요청을 대신 보내요.

![Cloudflare 계정 ID를 입력하고 도메인 이전을 시작하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082879552/original/H8XSH9erd_m-AW4e5EbJ_g2gnjomwZ90rg.png?1791476923)

### 5단계: 이전이 시작되었는지 확인하기

요청이 정상적으로 접수되면 이전 화면에 **도메인 이전이 시작되었습니다**라고 표시돼요.

받는 쪽 Cloudflare 계정에서 수락하기 전까지는 이전이 끝난 게 아니에요.

![도메인 이전이 시작되었다는 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082879028/original/55RdVnEbii2BpOULbhfn_XCuAkmx0QmGCw.png?1791476519)

---

## Cloudflare에서 이전 수락하기

하이퍼클래스에서 이전을 시작했다면, 받는 쪽 Cloudflare 계정에서 나머지 절차를 마무리하세요.

1. 받는 쪽 Cloudflare 계정에 로그인하세요.
2. **도메인 등록 > Manage Domains**(도메인 관리)로 이동하세요.
3. 해당 도메인을 찾아 관리 옵션을 여세요.

   ![Cloudflare에서 도메인의 관리 옵션을 여는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066541338/original/jh7NDLyHrVE1FxwbXaXJdZNp5h_aolVBwQ.jpeg?1773091752)
4. 대기 중인 이전 요청을 수락하세요.

   ![Cloudflare에서 대기 중인 이전 요청을 수락하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066541348/original/IozVBYypZNlTQHRSFXUG-KnpFUBecHvCRg.png?1773091763)
5. 이전이 끝날 때까지 최대 24시간이 걸릴 수 있어요.

이전이 끝나면 받는 쪽 Cloudflare 계정에서 도메인이 **활성**으로 표시돼요.

---

## 이전이 끝난 뒤

이전이 끝나면 소유권, 갱신, 결제, DNS 관리가 받는 쪽 Cloudflare 계정으로 넘어가요. 아래 내용을 알아 두면 제대로 옮겨졌는지 확인하기 쉬워요.

Cloudflare 계정 이전이 끝나면 다음과 같이 바뀌어요.

- 도메인이 하이퍼클래스의 해당 서브 계정/도메인 허브에서 제거돼요.
- 하이퍼클래스에 예약된 도메인 자동 갱신이 취소돼요.
- 이전 요청이 완료로 표시돼요.
- 앞으로의 갱신과 결제는 받는 쪽 Cloudflare 계정에서 직접 관리해요.

Cloudflare에서 도메인이 활성 상태인지, 필요한 DNS 레코드가 제대로 적용되고 있는지 확인하세요.

---

## Cloudflare 계정 이전 문제 해결

Cloudflare 계정 이전을 시작할 수 없거나 이전이 끝난 것처럼 보이지 않을 때 참고하세요.

### 이미 도메인 이전이 진행 중입니다

도메인 하나에는 대기 중인 Cloudflare 계정 이전 요청을 하나만 만들 수 있어요.

하이퍼클래스에 **이미 도메인 이전이 진행 중입니다**라고 표시되면 새 요청은 접수되지 않아요. 기존 이전 요청을 Cloudflare에서 먼저 수락하거나 요청이 만료된 뒤에 다시 이전을 시작할 수 있어요.

### Cloudflare 계정 ID가 올바르지 않을 때

계정 ID를 받는 쪽 Cloudflare 계정에서 복사했는지 확인하세요. 계정 ID를 바로잡은 뒤 이전을 다시 시도하세요.

### 받는 쪽 계정에 도메인이 추가되지 않았을 때

이전을 시작하려면 도메인이 받는 쪽 Cloudflare 계정에 먼저 추가되어 있어야 해요.

Cloudflare에서 **+ 추가 > 도메인 연결**로 이동해 도메인을 추가하고 플랜을 선택한 뒤 DNS 레코드를 준비하세요. 그다음 하이퍼클래스에서 이전을 다시 시도하세요.

### Invalid Nameservers가 표시될 때

이전을 수락한 뒤 이전이 진행되는 동안 Cloudflare에 **Invalid Nameservers**(잘못된 네임서버)가 잠시 표시될 수 있어요.

계정 이전 중에는 정상적으로 나타날 수 있는 상태예요. 최대 24시간 기다린 뒤 도메인을 다시 확인하세요. 이전이 끝나면 도메인이 **활성**으로 표시돼요.

![Cloudflare에 Invalid Nameservers가 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066541351/original/s3tD_v2Uu3THwztcXS8ZW4GkxRBH84v-9g.jpeg?1773091778)

---

## 자주 묻는 질문

### EPP 코드나 인증 코드가 필요한가요?

아니요. Cloudflare 계정 사이에서 옮기는 방식이라 등록 기관이 바뀌지 않아요. 그래서 EPP 코드나 인증 코드는 필요 없어요.

### 하이퍼클래스 밖에서 구매한 도메인에도 이 방법을 쓸 수 있나요?

아니요. 이 방법은 하이퍼클래스에서 구매한 도메인 중 조건을 충족하는 도메인에만 쓸 수 있어요.

### 도메인이 아직 이전 대상이 아니라고 나와요. 왜 그런가요?

도메인이 아직 60일 이전 제한 기간에 있을 수 있어요. 이 경우 이전 팝업 창에 이전할 수 있게 되는 날짜가 표시돼요.

### DNS 레코드도 자동으로 받는 쪽 Cloudflare 계정으로 옮겨지나요?

아니요. Cloudflare는 계정을 옮길 때 DNS 레코드를 복사하지 않아요. 이전을 시작하기 전에 받는 쪽 계정에 필요한 DNS 레코드를 준비해 두세요.

### 이전이 끝나면 하이퍼클래스의 갱신은 어떻게 되나요?

하이퍼클래스에 예약된 자동 갱신은 취소돼요. 앞으로의 갱신과 결제는 받는 쪽 Cloudflare 계정에서 직접 관리해요.
