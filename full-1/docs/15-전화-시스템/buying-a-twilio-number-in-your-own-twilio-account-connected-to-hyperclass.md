---
원문: https://help.gohighlevel.com/support/solutions/articles/48001219820-buying-a-twilio-number-in-your-connected-twilio-account
번역일: 2026-11-06
카테고리: 15-전화-시스템
---

# 연결된 Twilio 계정에서 Twilio 번호 구매하기

하이퍼클래스에 연결해 둔 에이전시 자체 Twilio 계정에서 새 전화번호를 사려면 Twilio Console에서 직접 구매해야 해요. 이 문서에서는 알맞은 Twilio 서브 계정을 찾고, 번호를 구매하고, 하이퍼클래스에 번호가 나타나는지 확인하는 방법을 안내해요.

{% hint style="warning" %}
하이퍼클래스에서 제공업체 드롭다운으로 Twilio를 선택하지 않아도 돼요. 이 안내는 하이퍼클래스에 연결된 에이전시 자체 Twilio 계정을 쓰는 에이전시에만 해당해요. 에이전시 관리자만 쓸 수 있어요.
{% endhint %}

## Twilio 번호 구매란?

에이전시의 연결된 Twilio 계정을 쓰는 하이퍼클래스 서브 계정은 각각 Twilio 서브 계정과 짝을 이뤄요. 알맞은 Twilio 서브 계정에서 번호를 구매해야 그 번호가 원하는 하이퍼클래스 서브 계정에 연결돼요.

에이전시에 Twilio 서브 계정이 여러 개라면, 번호를 구매하기 전에 하이퍼클래스 서브 계정에 연결된 Account SID를 먼저 확인하세요.

## Twilio에서 번호를 구매하면 좋은 점

알맞은 Twilio 서브 계정에서 구매하면 Twilio의 보유 번호 목록에서 번호를 고르면서도, 새 번호가 원하는 하이퍼클래스 서브 계정에 연결돼요.

- 올바른 서브 계정 배정: 번호를 연결하려는 하이퍼클래스 서브 계정과 짝이 되는 Twilio 서브 계정에서 구매해요.
- 번호 직접 조회: Twilio 계정에서 이용할 수 있는 전화번호 목록을 검색해요.
- 기능별 필터링: Voice, SMS, MMS 등 사용할 수 있는 기능을 지원하는 번호를 찾아요.
- 번호 유형 선택: 지원되고 이용 가능한 경우 지역 번호, 모바일 번호, 수신자 부담(toll-free) 번호를 찾을 수 있어요.
- 자동 동기화: 연결된 Twilio 서브 계정에서 구매한 번호는 해당 하이퍼클래스 서브 계정에 나타날 수 있어요.

## 시작하기 전에

구매 전에 Twilio 연결을 확인하면 엉뚱한 계정으로 번호를 사는 일을 막을 수 있어요. 알맞은 Twilio 서브 계정을 찾을 때 계정 SID를 쓰기 때문에 하이퍼클래스와 Twilio에 모두 접근할 수 있어야 해요.

다음을 먼저 확인하세요.

- 에이전시가 하이퍼클래스에 연결된 자체 Twilio 계정을 쓰고 있어요.
- 하이퍼클래스에서 **에이전시 보기**에 들어갈 수 있어요.
- 연결된 Twilio 계정에 접근할 수 있어요.
- Twilio에서 전화번호를 구매할 권한이 있어요.
- 새 번호를 받을 하이퍼클래스 서브 계정이 어디인지 알고 있어요.

{% hint style="warning" %}
전화번호의 이용 가능 여부, 지원 기능, 요금, 규정 요건은 국가와 번호 유형에 따라 달라요.
{% endhint %}

## Twilio 번호를 구매해 하이퍼클래스에 동기화하기

번호를 구매하는 Twilio 서브 계정에 따라 번호를 받을 하이퍼클래스 서브 계정이 정해져요. 먼저 알맞은 서브 계정을 확인한 뒤, 그 계정에서 구매하세요.

### 1단계: 서브 계정에 연결된 Twilio 서브 계정 찾기

1. 하이퍼클래스에 로그인한 뒤 **에이전시 보기**로 전환하세요.
2. **설정 > 전화 연동**으로 이동하세요.
3. **서브 계정 설정**을 선택하세요.
4. 번호를 받을 하이퍼클래스 서브 계정을 찾으세요.
5. 그 서브 계정의 **관리자**에 **Twilio**가 표시되는지 확인하세요.
6. 서브 계정에 연결된 Twilio **계정 SID**를 복사하거나 메모해 두세요.

![하이퍼클래스 서브 계정 설정에서 계정 SID를 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079087844/original/7_1RS3-VV1nIKI9iZAsKitYlOBry23WmWg.png?1787460098)

### 2단계: 알맞은 Twilio 서브 계정 열기

1. **Twilio Console**에 로그인하세요.
2. 계정 전환 메뉴를 여세요.
3. **View subaccounts**(서브 계정 보기) 또는 **View all accounts**(전체 계정 보기)를 선택하세요.

   ![Twilio 계정 전환 메뉴에서 서브 계정 보기를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079087866/original/MNw0HlBpfwU2PMKYL-AB1fqQ0EkW4PLTXg.png?1787460153)

4. **Subaccounts**(서브 계정) 페이지를 여세요.
5. 계정 이름이나 Account SID로 검색하세요.
6. 1단계에서 확인한 하이퍼클래스 서브 계정의 SID와 일치하는 계정을 찾으세요.
7. 일치하는 Twilio 서브 계정을 여세요.

![Twilio 서브 계정 목록에서 SID로 계정을 찾는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079087869/original/Pgl7Uo9WhVRk-V2lHonPIoT_a3zHi9I02w.png?1787460174)

{% hint style="warning" %}
번호를 구매하기 전에 알맞은 Twilio 서브 계정 안에 있는지 꼭 확인하세요. Twilio 메인 계정이나 관련 없는 서브 계정에서 번호를 구매하면 원하는 하이퍼클래스 서브 계정에 번호가 나타나지 않을 수 있어요.
{% endhint %}

### 3단계: 번호 구매 페이지 열기

Twilio Console 사이드바에서 **Develop > Phone Numbers > Manage > Buy a number**(번호 구매)로 이동하세요.

![Twilio Console 사이드바에서 번호 구매 페이지로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079087877/original/KeAx5mcZpZSehJCN0rYmtYMBrq6KdY48Gw.png?1787460217)

### 4단계: 사용 가능한 번호 검색하기

알맞은 Twilio 서브 계정 안에서 검색하면, 선택한 국가에서 지금 이용할 수 있는 번호와 기능을 기준으로 번호를 고를 수 있어요.

1. 원하는 **국가**를 선택하세요.
2. 필요한 기능을 선택하세요. 예를 들면 다음과 같아요.
   - Voice
   - SMS
   - MMS
   - Fax
3. 필요하면 지역 번호, 숫자, 문구를 입력하세요.
4. **Search**(검색)를 클릭하세요.
5. 검색된 번호, 번호 유형, 지원 기능, 주소 요건, 월 요금을 확인하세요.

![Twilio에서 국가와 기능을 선택해 번호를 검색하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079087885/original/bJifmCHAvyMu6FkAvM4qgniYFm2SuXQ4tA.png?1787460274)

번호 이용 가능 여부와 지원 기능은 선택한 국가와 Twilio의 현재 보유 번호에 따라 달라요.

### 5단계: 번호 검색 조건 좁히기

특정 번호 유형이 필요하거나 추가 조건이 있다면 Advanced Search로 검색 결과를 좁힐 수 있어요.

1. **Advanced Search**(고급 검색)를 펼치세요.
2. 원하는 번호 유형을 선택하세요.

   - **Local**: 지역 번호예요.
   - **Mobile**: 사용 가능한 경우 모바일 번호예요.
   - **Toll-free**: 수신자 부담 번호예요.
3. **Address requirements**(주소 요건) 필터를 확인하세요.
4. 필요하면 다른 필터도 적용하세요.
5. 검색을 다시 실행하세요.

![Twilio 고급 검색에서 번호 유형을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079087894/original/lkwDsyArEokAYgYXDFT9MkB0otwvXN6N4Q.png?1787460332)

### 6단계: 번호 구매하기

구매를 마치기 전에 번호를 살펴보면 필요한 기능을 지원하는지, 그 번호에 추가 요건이 있는지 확인할 수 있어요.

1. 번호의 지원 기능과 월 요금을 확인하세요.
2. 원하는 번호 옆의 **Buy**(구매)를 클릭하세요.
3. 규정, 주소, 긴급 통화 관련 요건이 있으면 확인하세요.
4. 해당하는 약관이 있으면 동의하세요.
5. 구매를 확정하세요.

번호에 따라 구매를 마치기 전에 추가 요건이 표시될 수 있어요.

![Twilio에서 원하는 번호를 구매하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079087963/original/9cjFplGMbzNZ8e0YhHYkaYl-00JgsxFobw.png?1787460661)

{% hint style="warning" %}
번호에 따라 완전히 사용하기 전에 신원, 주소, 규정, 메시지, 긴급 통화 설정이 추가로 필요할 수 있어요.
{% endhint %}

### 7단계: 하이퍼클래스에서 번호 확인하기

알맞은 연결 Twilio 서브 계정에서 구매한 번호는 해당 하이퍼클래스 서브 계정에 동기화돼요. 번호가 보이는지 확인하면 올바른 계정에서 구매했는지 알 수 있어요.

1. 번호를 받을 하이퍼클래스 서브 계정으로 돌아오세요.
2. **설정 > 전화번호**로 이동하세요.
3. 필요하면 페이지를 새로고침하세요.
4. 구매한 번호가 **전화번호** 목록에 나타나는지 확인하세요.
5. 번호의 설정을 열어 라우팅, 착신 전환, 사용자 배정, 규정 준수 설정 중 필요한 것을 마무리하세요.

![하이퍼클래스 전화번호 목록에 구매한 번호가 나타난 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079087942/original/kL1dfpspbwcyW5DZzJyhzZHIyCFScyutpg.png?1787460499)

## 구매한 Twilio 번호가 보이지 않을 때

잘못된 Twilio 서브 계정에서 번호를 구매했거나 계정 SID가 하이퍼클래스 서브 계정의 연결 정보와 맞지 않으면, 새로 구매한 번호가 원하는 하이퍼클래스 서브 계정에 나타나지 않을 수 있어요. 하이퍼클래스와 Twilio의 계정 SID를 비교해 보면 계정이 어긋났는지 알 수 있어요.

번호가 보이지 않으면 다음을 확인하세요.

1. Twilio의 **Phone Numbers > Manage > Active numbers**(활성 번호)에 구매한 번호가 있는지 확인하세요.
2. Twilio 서브 계정의 SID가 하이퍼클래스 서브 계정에 연결된 계정 SID와 같은지 확인하세요.
3. Twilio 메인 계정이나 다른 서브 계정에서 번호를 구매하지 않았는지 확인하세요.
4. 하이퍼클래스의 **설정 > 전화번호** 페이지를 새로고침하세요.
5. 페이지가 갱신되지 않으면 로그아웃했다가 다시 로그인하세요.
6. 번호가 올바른 연결 Twilio 서브 계정에 있는데도 나타나지 않으면 하이퍼클래스 고객지원에 문의하세요.

## 자주 묻는 질문

### 하이퍼클래스에서 번호를 구매할 때 제공업체에 Twilio가 보이지 않아요.

이 문서의 방법에서는 제공업체 드롭다운에서 Twilio를 선택할 필요가 없어요. 에이전시가 연결된 Twilio 계정을 직접 관리한다면, 하이퍼클래스 서브 계정과 짝이 되는 Twilio 서브 계정에서 번호를 직접 구매하세요.

### 알맞은 Twilio 서브 계정을 쓰고 있는지 어떻게 확인하나요?

**에이전시 보기 > 설정 > 전화 연동 > 서브 계정 설정**으로 이동해 해당 하이퍼클래스 서브 계정을 찾으세요.
그 서브 계정의 **계정 SID**를 Twilio의 서브 계정 SID와 맞춰 보세요.

### 잘못된 Twilio 서브 계정에서 번호를 구매하면 어떻게 되나요?

번호가 원하는 하이퍼클래스 서브 계정에 나타나지 않을 수 있어요. 계정 SID를 확인하고, 번호를 잘못된 계정에서 구매했다면 알맞은 번호 이동 절차를 따르세요.

### 번호가 하이퍼클래스에 바로 나타나나요?

알맞은 연결 Twilio 서브 계정에서 구매한 번호는 해당 하이퍼클래스 서브 계정에 동기화돼요. 바로 보이지 않으면 **전화번호** 페이지를 새로고침하세요.

### 번호가 나타나면 바로 SMS를 쓸 수 있나요?

꼭 그렇지는 않아요. 번호가 SMS를 지원해야 하고, 추가 등록이나 규정 준수 요건이 적용될 수 있어요.

### 이 방법으로 toll-free 번호도 구매할 수 있나요?

toll-free 번호를 이용할 수 있다면 구매할 수 있어요. toll-free 메시지 인증 요건이 추가로 적용될 수 있어요.

### 이미 Twilio에 있는 번호에도 이 방법을 쓸 수 있나요?

아니요. 이 단계는 새 번호를 구매할 때만 쓰는 방법이에요. 이미 Twilio에 있는 번호는 가져오기, 이전, 서브 계정 이동이 필요할 수 있어요.
