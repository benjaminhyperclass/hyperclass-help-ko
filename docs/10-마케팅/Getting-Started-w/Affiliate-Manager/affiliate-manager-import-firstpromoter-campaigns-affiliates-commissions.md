---
원문: /support/solutions/articles/155000006577-affiliate-manager-import-firstpromoter-campaigns-affiliates-commissions
번역일: 2026-11-06
카테고리: 10-마케팅
---

# FirstPromoter 캠페인·제휴 파트너·커미션 가져오기

FirstPromoter에서 운영하던 프로그램을 하이퍼클래스 **제휴 관리자**(Affiliate Manager)로 옮기는 방법이에요. 안내에 따라 진행하면 CSV 파일 없이 캠페인, 제휴 파트너, 과거 커미션을 한 번에 가져올 수 있어요. 가져온 데이터는 한곳에서 관리하고 리포트로 확인할 수 있어요.

## FirstPromoter 가이드형 가져오기란?

가이드형 가져오기는 API로 FirstPromoter 워크스페이스와 하이퍼클래스를 연결하는 방식이에요. 자격 증명을 확인한 뒤 가져올 캠페인을 고르고, 연락처 충돌이 있으면 확인한 다음 가져와요. 수동으로 내보내는 것보다 빠르고, 데이터가 깔끔하게 정리되며 이력도 그대로 유지돼요.

- **계정 ID**와 **API 키**로 FirstPromoter 계정을 연결해요.
- 가져올 캠페인과 가져오기 환경설정을 선택해요.
- 이메일 충돌을 확인하고 해결한 뒤 가져와요.

## FirstPromoter 가져오기의 장점

가져오기를 언제 쓰면 좋은지, 제휴 운영과 리포팅에 어떤 도움이 되는지 정리했어요.

- 빠른 설정: 연결, 선택, 가져오기까지 코딩 없이 3단계로 끝나요.
- 이력 유지: 과거 추천과 커미션이 그대로 남아서 추이와 지급 내역을 정확하게 볼 수 있어요.
- 깔끔한 연락처: 중복 이메일을 자동으로 찾아 주고, **병합**이나 **건너뛰기**를 선택할 수 있어서 연락처가 지저분해지지 않아요.
- 지급 기준 설정: **Pending Commissions**(대기 중인 커미션)를 포함할지 정하고 **Payout Terms**(지급 조건)를 지정할 수 있어요. 가져온 커미션도 우리 지급 주기에 맞게 처리돼요.
- 통합 분석: 캠페인과 제휴 파트너가 **제휴 관리자** 대시보드에 다른 성과 지표와 함께 표시돼요.

## 가져오기 설정하는 방법

아래 순서대로 따라 하면 오류를 최소로 줄이면서 처음부터 끝까지 가져올 수 있어요.

### 1. 가져오기 마법사 열기

**마케팅 > 제휴 관리자 > 캠페인 > 가져오기**로 이동하세요.

![계정 ID와 API 키 입력란, 'API 자격 증명을 찾는 곳' 안내 상자가 있는 계정 연결 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055517469/original/JK86nfcBuS9_rmv3na2xpZyo4ngidgUgiQ.png?1759925880)

화면에 **계정 ID**와 **API 키** 입력란이 있고, 파란색 안내 상자에서 **API 자격 증명**을 찾는 방법을 볼 수 있어요. FirstPromoter에 로그인한 뒤 Settings → API & Webhooks에서 읽기 권한이 있는 키를 만들면 돼요.

### 2. FirstPromoter 연결하기

**계정 ID**와 **API 키**를 붙여 넣고 **Connect & Fetch**(연결하고 불러오기)를 클릭하세요.

![FirstPromoter에서 계정 ID와 API 키를 찾는 위치를 보여 주는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055517501/original/JJnyvc0gsXTAoAgSBlfBrOsqbmSwNUOmIg.png?1759925901)

{% hint style="info" %}
FirstPromoter에서 Settings → API & Webhooks로 이동해 Account ID를 복사하고, affiliates와 campaigns에 대한 읽기 권한이 있는 API Key를 만드세요.
{% endhint %}

### 3. 캠페인 선택하기

옮기려는 캠페인을 체크하세요. 목록에서 **상태**, 커미션 규칙, 제휴 파트너 수, 쿠키 유효 기간을 미리 확인할 수 있어서 엉뚱한 캠페인을 가져오는 실수를 막을 수 있어요.

- 검색과 체크박스로 캠페인을 선택하세요.
- **상태**, **제휴**, **Commissions**(커미션), **Cookie life**(쿠키 유효 기간) 같은 열을 확인하세요.

{% hint style="info" %}
FirstPromoter에서 결제가 Stripe로 처리된 것으로 표시되더라도, 이는 기존 FirstPromoter 설정을 그대로 보여 주는 거예요.
{% endhint %}

![캠페인, 상태, 제휴, 커미션, 쿠키 유효 기간 열이 있는 캠페인 선택 표](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055517800/original/T-ReWo0_-Xi2uEM6UqOOEx059oi9Xu9TbQ.png?1759926068)

### 4. 환경설정하기

**환경설정**에서 필요하면 **Pending Commissions**를 켜고 **Payout Terms**를 확인하세요. 무엇을 가져올지, 지급 일정을 어떻게 잡을지 정해 두면 가져온 뒤에도 정산 업무를 이전과 같게 유지할 수 있어요.

- **Pending Commissions**(토글): FirstPromoter에서 아직 지급하지 않은 커미션을 하이퍼클래스에서 바로 추적하고 싶을 때 켜세요.
- **Current Payout Terms**(현재 지급 조건, 드롭다운): 예를 들어 **Net-30 (30 days after month ends)**(월말 기준 30일 후)처럼 선택해요. 이 값에 따라 가져온 커미션이 **제휴 관리자**에서 언제 지급 대상이 되는지가 정해져요.

![캠페인 목록 아래의 환경설정 카드. Pending Commissions 토글과 Payout Terms 드롭다운이 있다](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055518281/original/DVDVuQL3emC2wLCH2VpIiQaoeNObn1XIbg.png?1759926334)

### 5. 제휴 파트너 확인하기

**Affiliate Management**(제휴 관리) 화면에서 **Conflicts**(충돌)가 있으면 **병합**이나 **건너뛰기**를 선택해 해결하세요. 새 제휴 파트너는 연락처로 자동 생성돼요. 이미 같은 이메일이 있으면 충돌을 해결해서 CRM 프로필이 하나만 남도록 해야 해요.

- 탭에서 **합계**, **신규**, **Conflicts**별 개수를 볼 수 있어요.
- 충돌한 항목은 **Affiliate Name**(제휴 파트너 이름), **상태**, **이메일**, **Join Date**(가입일)를 비교해 보세요.
- 보통 다음 두 가지 중에서 선택해요.
  - **병합**: 기존 연락처를 그대로 두고 제휴 데이터를 붙여요.
  - **건너뛰기**: 이 제휴 파트너는 이번에 가져오지 않아요.

![탭과 '모든 충돌이 해결되었습니다' 녹색 배너가 있는 제휴 관리 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055518363/original/-nVAAY_2WgYtHUHnhmG5WvEURMOOB5btow.png?1759926350)

### 6. 가져오기 시작

**가져오기 시작**을 클릭하세요. 시작한 뒤에는 페이지를 열어 둬도 되고 다른 곳으로 이동해도 돼요. 가져오기는 계속 진행돼요. 시작하면 어떤 항목이 대기열에 들어갔는지, 이후에 무엇을 하면 되는지 간단한 요약이 나와요.

- 요약 카드에 가져오기 대기 중인 **캠페인**, **Total Affiliates**(전체 제휴 파트너 수), **Historical Referrals**(과거 추천 내역) 수가 표시돼요.
- 가져오기가 끝나면 하이퍼클래스가 알려 주니, 그때까지 페이지를 나가도 괜찮아요.

요약 화면에는 **다음 단계** 안내 상자도 함께 나와요.

## 자주 묻는 질문

### FirstPromoter에서 CSV로 내보내야 하나요?

아니요. API 기반 마법사가 지원하는 데이터는 CSV로 직접 옮길 필요가 없어요.

### 가져올 때 커미션 상태는 어떻게 되나요?

각 커미션은 원래 상태(예: Pending(대기)/Approved(승인))를 그대로 유지해요. 지급 시기는 **환경설정**에서 정한 **Payout Terms**를 따라요.

### 아직 지급하지 않은 수익도 가져올 수 있나요?

네. **Pending Commissions**를 켜면 미지급 항목도 가져와서 **제휴 관리자**의 지급 흐름에 표시돼요.

### 가져오면 연락처가 중복으로 생기나요?

아니요. 이메일이 중복되면 확인 대상으로 표시돼요. **병합**을 선택하면 연락처 하나에 제휴 데이터가 붙고, **건너뛰기**를 선택하면 해당 항목은 가져오지 않아요.

### 가져오기를 여러 번 실행할 수 있나요?

네. 마법사를 다시 실행해서 다른 캠페인이나 제휴 파트너를 더 가져올 수 있어요. 이미 가져온 항목은 중복되지 않아요.

### 상품 기준 커미션도 가져올 수 있나요?

가져오는 과정에서는 지원하지 않아요. 가져온 뒤에 **제휴 관리자**에서 상품 기준 커미션 규칙을 직접 설정하세요.

### 가져온 뒤 트래킹 스크립트는 어디에 추가하나요?

가져온 캠페인을 열고, 캠페인 목록의 **⋯** 메뉴에서 트래킹 스크립트를 찾으세요. 캠페인을 활성화하기 전에 스크립트를 추가하면 돼요.
