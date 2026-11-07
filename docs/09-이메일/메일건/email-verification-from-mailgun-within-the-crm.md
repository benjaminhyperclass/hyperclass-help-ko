---
원문: /support/solutions/articles/48000982847-email-verification-from-mailgun-within-the-crm
번역일: 2026-11-07
카테고리: 09-이메일
---

# Mailgun으로 이메일 검증과 90일 재검증 켜기

Mailgun을 이용해 하이퍼클래스에 새로 들어오는 이메일을 자동으로 검증하고, 90일마다 다시 검증해 연락처 정보를 최신으로 유지하는 방법을 안내해요. 이 문서에서는 이메일 검증 켜기, 90일 재검증 켜기, 연락처 상세 화면에서 검증 결과 확인하는 방법을 다뤄요. 에이전시 관리자가 설정하는 기능이에요.

{% hint style="info" %}
문서에 나온 금액(달러)과 요금제 이름은 참고용이에요. 하이퍼클래스에서 실제로 적용되는 요금은 [요금제 안내](../../00-자주묻는질문/pricing-plans.md)와 [AI·SMS·음성 사용료](../../00-자주묻는질문/usage-costs.md)를 확인하세요.
{% endhint %}

{% hint style="warning" %}
**유료 서비스예요.** 이메일 검증을 켜면 Mailgun 계정에 비용이 청구돼요. 이메일 검증 요금은 이메일 1건당 $0.012예요. 현재 요금은 [Mailgun 요금 페이지](https://www.mailgun.com/pricing/)에서 확인하세요.
{% endhint %}

## 이메일 검증 켜기

1. 계정 메뉴에서 **에이전시 보기로 전환**을 클릭하세요.

   ![에이전시 보기로 전환 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48249972893/original/bGfeNdona_2YA3hhyB2sp1F85S7-fbMQQg.png?1662660998)

2. 왼쪽 메뉴에서 **설정**을 여세요.

   ![설정 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48249972892/original/DL1OXejzWSm9nh3reDqB74ahmPwjbrLLiQ.png?1662660998)

3. **이메일 서비스**를 클릭한 다음 **Location Settings**(서브 계정별 설정)로 이동하세요.

   ![이메일 서비스를 클릭하고 Location Settings로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286902371/original/Bz6sImmJG6SR-vnjuaWTo8oadXaAnO-fRw.png?1678719367)

4. 검증을 켜려는 서브 계정 앞에 있는 **이메일 검증** 토글을 켜세요.

   {% hint style="info" %}
   이메일 검증은 유료 서비스이며, 이메일 1건당 $0.012가 청구돼요.
   {% endhint %}

   ![서브 계정의 이메일 검증 토글 켜기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286899922/original/ptM9qZFnTxX-sxtJnYdUfSNzFpJyooOunw.png?1678718751)

## 이메일 재검증 켜기

1. 에이전시 보기에서 **서브 계정**을 클릭하세요.
2. 서브 계정 이름으로 검색하세요.
3. 서브 계정 이름을 클릭해 여세요.

   ![서브 계정 이름 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286901207/original/E9oHrDLiBo7aP_Zr4pU3TDmBEpxvx4oboA.png?1678719096)

4. 아래로 스크롤해 **고급 설정**에서 **90일 재검증 활성화**를 켜세요.

   ![90일 재검증 활성화 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286901899/original/Yuf-TuEOphGPpG3sF99eIw8y3Z_VUJS-mw.png?1678719270)

{% hint style="info" %}
이 설정을 켜면 이메일이 시간이 지나면서 유효해지거나 무효해질 수 있기 때문에 모든 이메일을 90일마다 다시 검증해요.
{% endhint %}

## 자주 묻는 질문

### 이메일 검증은 어떻게 작동하나요?
이메일이 폼, 설문, 캘린더, 채팅 위젯을 통해 처음 시스템에 들어올 때 Mailgun 기록과 대조해 확인해요. 이메일 검증을 켠 **이후에** 새 이메일을 보낼 때도 확인해요. 재검증을 켰다면 90일마다 한 번 더 실행돼요.

### 연락처의 검증 결과는 어디에서 볼 수 있나요?
연락처 상세 화면을 열고 오른쪽 영역을 아래로 스크롤한 다음 봉투 아이콘을 클릭하세요. **녹색**이면 유효한 이메일이에요. **빨강**이면 유효하지 않거나, 너무 오래됐거나, 이전에 반송됐거나, 수신거부한 이메일이에요. 이유는 오류 메시지에 나와요.

### 이메일 검증은 무료인가요?
아니요. Mailgun의 유료 서비스로, 이메일 1건당 $0.012가 연결된 Mailgun 계정에 청구돼요. 현재 요금은 [Mailgun 요금 페이지](https://www.mailgun.com/pricing/)에서 확인하세요.

### 재검증 비용은 처음 검증할 때와 같나요?
네, 같아요. 재검증도 같은 Mailgun 조회를 다시 실행하는 것이라서 처음 검증과 같은 방식으로 청구돼요.

### 재검증은 기존 연락처 전체에도 실행되나요?
네. 재검증을 켜면 새 연락처뿐 아니라 해당 서브 계정의 모든 이메일이 90일 주기로 다시 검증돼요.

### 재검증을 켠 뒤에 다시 끌 수 있나요?
네. 언제든 해당 서브 계정의 **고급 설정**으로 돌아가 **90일 재검증 활성화** 토글을 끄면 돼요.
