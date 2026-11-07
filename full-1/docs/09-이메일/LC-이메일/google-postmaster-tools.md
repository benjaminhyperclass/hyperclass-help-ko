---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004150-google-postmaster-tools
번역일: 2026-11-06
카테고리: 09-이메일
---

# Google Postmaster Tools로 Gmail 발송 평판 확인하기

Google Postmaster Tools를 설정하고 하이퍼클래스에 연결하면, Gmail에서 내 도메인과 IP의 평판, 스팸 비율, SPF·DKIM·DMARC 인증 상태를 하이퍼클래스 안에서 바로 확인할 수 있어요. 이 문서에서는 Google Postmaster Tools가 무엇인지, 어떻게 설정하고 연결하는지 알려 드려요.

## Google Postmaster Tools란?

Google Postmaster Tools는 이메일 발송자에게 이메일 전달률(deliverability)에 관한 데이터와 인사이트를 주는 무료 플랫폼이에요. 특히 Gmail 사용자에게 보낸 이메일을 분석해요. 도메인·IP 평판, 스팸 비율, 이메일 인증 방식(SPF, DKIM, DMARC)이 잘 통과하는지 등을 볼 수 있어요.

이 도구를 쓰면 Google이 내 이메일을 어떻게 평가하는지 알 수 있고, 발송자 평판을 높일 방법을 찾을 수 있어요. 받은편지함 도달률을 높이고, 스팸 비율을 낮추고, Gmail 사용자에게 좋은 도메인 평판을 유지하려는 이메일 마케터와 대량 발송자에게 특히 유용해요.

## Google Postmaster Tools를 써야 하는 이유

발송자 평판은 이메일이 스팸함이 아닌 받은편지함에 도착하는 데 중요해요. Google Postmaster Tools를 보면 Gmail이 다음 요소로 내 이메일을 어떻게 평가하는지 확인할 수 있어요.

- 스팸 비율: 많은 사용자가 내 이메일을 스팸으로 신고하면 발송자 평판에 영향을 줘요.
- IP·도메인 평판: Gmail이 내 발송 환경을 신뢰할 만하다고 보는지 알려 줘요.
- 인증 성공 여부: SPF, DKIM, DMARC 같은 인증은 내 이메일이 정상적인 메일임을 증명하는 데 꼭 필요해요. Postmaster Tools에서 인증이 잘 통과하는지 확인할 수 있어요.

이 지표를 꾸준히 확인하면 전달률이 나빠지기 전에 문제를 미리 고쳐서 캠페인이 스팸함으로 가지 않게 할 수 있어요.

## 이메일 발송자에게 어떤 도움이 되나요?

Google Postmaster Tools의 데이터는 크게 네 가지 면에서 도움이 돼요.

- 도메인·IP 평판 추적: Google이 내 도메인과 IP를 얼마나 신뢰하는지 알 수 있어요. 이 신뢰도는 이메일 성과에 중요해요.
- 스팸 신고 모니터링: 내 이메일 중 얼마나 많은 메일이 스팸으로 신고되는지 볼 수 있어요. 비율이 너무 높으면 발송 전략을 조정하세요.
- 이메일 인증 모니터링: SPF, DKIM, DMARC 인증이 잘 통과하는지 확인할 수 있어요.
- 전송 오류 확인: 이메일 전달을 막는 오류를 찾아서 해결할 수 있어요.

## Google Postmaster Tools 설정하기

1. [postmaster.google.com](https://postmaster.google.com)에 접속해서 Google 계정으로 로그인하세요.
2. 이메일을 보내는 전용 발송 도메인을 추가하세요. 내가 관리할 수 있는 도메인이어야 하고, SPF, DKIM, DMARC 인증 레코드가 제대로 설정되어 있어야 해요.
3. 도메인 소유권을 인증하세요. 도메인의 DNS 설정에 TXT 레코드를 추가하면 돼요. 이 레코드는 Postmaster Tools에 도메인을 등록할 때 Google이 알려 줘요.
4. 설정이 끝나면 데이터를 확인하세요. 도메인 평판, IP 평판, 스팸 비율 같은 데이터가 보이기까지 며칠 걸릴 수 있어요.

{% hint style="info" %}
Postmaster Tools는 발송량이 어느 정도 되어야 믿을 만한 데이터를 보여 줘요. 발송량이 적은 도메인은 트래픽이 쌓일 때까지 대시보드가 일부만 보이거나 비어 있을 수 있어요.
{% endhint %}

## Google Postmaster를 하이퍼클래스에 연결하기

Gmail 발송 평판과 주요 지표를 하이퍼클래스 안에서 보려면 Google Postmaster 계정을 연결하세요.

1. **설정 > 이메일 서비스 > Postmaster Tools > Google Postmaster Tool** 순서로 이동하세요. 여기서 **Postmaster Tools**(포스트마스터 도구)는 탭 이름이에요.
2. **Postmaster Tools** 탭에서 **Connect to Google Postmaster**(Google Postmaster 연결) 버튼을 클릭하세요.

   ![이메일 서비스 페이지의 Connect to Google Postmaster 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034624563/original/kl09eEJQ_Z4cUg5JHMnV488deGEoatFTtw.png?1728893562)

3. Google Postmaster Tools에 등록한 도메인에 접근할 수 있는 Google 계정을 선택하세요.

   ![Postmaster 도메인을 소유한 Google 계정으로 로그인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044692452/original/p5_IYbjq7VAa4XNbGtdfNTEy-zg2BU571g.png?1744090279)

4. 권한 화면에서 다음 항목의 체크박스를 선택하세요.

   *"See email traffic metrics for the domains you have registered in Gmail Postmaster Tools."* (Gmail Postmaster Tools에 등록한 도메인의 이메일 트래픽 지표 보기)

5. **계속**을 클릭하면 연결이 완료돼요.

   ![Postmaster Tools의 이메일 트래픽 지표를 읽을 수 있도록 권한을 허용하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044692488/original/5CkrtRDNX9tc-QZTgCUmotFbGEdkhvf5MQ.png?1744090381)

연결이 끝나면 인증된 전용 발송 도메인에 Google Postmaster에서 가져온 지표가 표시되기 시작해요.

![Google Postmaster 연결이 완료된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079044739/original/0B05xkypTQdq81_QSwerR8mk8tRBpkTAjQ.png?1787339733)

스팸 비율, IP 평판, 도메인 평판 등 Postmaster Tools에서 볼 수 있는 모든 데이터를 하이퍼클래스로 바로 가져오기 때문에 한곳에서 관리할 수 있어요.

## Google Postmaster Tools에서 볼 수 있는 데이터

Google Postmaster Tools는 이메일 전달률을 확인하는 데 쓰는 여러 핵심 데이터를 제공해요.

![Google Postmaster Tools 대시보드 개요](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034624774/original/k-pD8VkPYukmslNpt8ntG52vj_oG0UlcCA.png?1728893691)

| 대시보드 | 보여 주는 내용 |
| --- | --- |
| **Spam Rate**(스팸 비율) | Gmail 사용자가 스팸으로 신고한 내 이메일의 비율이에요. |
| **Domain Reputation**(도메인 평판) | 내 발송 방식에 대한 Google의 평가를 바탕으로 한 도메인 평판이에요. |
| **IP Reputation**(IP 평판) | 이메일을 보내는 IP의 평판을 알려 줘요. IP 평판이 높을수록 전달률이 좋아요. |
| **Message Authentication**(메시지 인증) | 내 이메일이 SPF, DKIM, DMARC 인증을 통과한 비율이에요. |
| **Encryption**(암호화) | 암호화된 연결로 전달된 이메일의 비율이에요. |
| **Delivery Errors**(전송 오류) | 이메일 전달을 막는 문제나 오류의 세부 내용이에요. |
| **Feedback Loop**(피드백 루프) | 사용자가 신고한 스팸 불만이에요. 스팸 비율을 낮추고 좋은 평판을 유지하는 데 도움이 돼요. |

## 재인증하고 Postmaster Tools API v2로 옮기기

Google이 Postmaster Tools API의 새 버전을 내놓았어요. 연결을 새 버전으로 옮기려면 **Postmaster Tools** 탭에서 재인증하면 돼요. 연결을 끊었다가 처음부터 다시 연결할 필요는 없어요.

1. **Google Postmaster** 탭에 Google이 새 Postmaster 데이터를 공개했다는 안내 배너가 보여요. **해제** 옆에 **Re-Authenticate**(재인증) 버튼도 함께 표시돼요.

   ![새 Postmaster 데이터 안내 배너와 Re-Authenticate 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076653375/original/aqXoawyAJkhc9wqJiuGSGfsuBMTMV2Q96w.png?1784790598)

   **Re-Authenticate**와 **해제**는 Google에서 내 계정에 쓸 수 있는 새 Postmaster 데이터가 생겼을 때 표시돼요.

2. **Re-Authenticate**를 클릭하세요. 처음 연결할 때처럼 Google 계정 화면으로 이동해 접근 권한을 확인해요.
3. 재인증이 끝나면 연결이 자동으로 **Postmaster Tools API v2**로 바뀌어요. 연결 카드에서 배너와 **Re-Authenticate** 버튼이 사라져요.

   ![재인증 후 v2로 전환된 연결 카드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076653403/original/IRcqgtDmkR6jZyc5AJmfW8IL4XolZuGHpA.png?1784790625)

   v2로 옮기면 연결된 도메인마다 규정 준수 상태, 전송 오류율, 스팸 비율이 카드에 바로 표시돼요.

Postmaster Tools API v2는 기존 기능을 하나로 합치고, 이메일 통계를 가져오는 새 기능을 더했어요. v2에서는 하이퍼클래스 안에서 **Compliance Status**(규정 준수 상태) 탭을 볼 수 있어요. 이 탭은 도메인이 각 요건을 통과하는지 보여 줘요. 나머지 탭(**User Reported Spam**(사용자 신고 스팸), **Spam Feedback**(스팸 피드백), **Authenticated Traffic**(인증된 트래픽), **Encrypted Traffic**(암호화된 트래픽), **Delivery Errors**)은 그대로예요.

![Compliance Status 탭 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076653418/original/up0jGxwp_N-Jthih8_Y_xTnROjvtEts9cA.png?1784790644)

**Compliance Status** 탭에서는 서브도메인과 기본 도메인 모두에 대해 Gmail 발송자 요건을 하나씩 확인할 수 있어요. 항목은 SPF & DKIM, From: 헤더 일치, DMARC, 암호화, 스팸 비율, DNS 레코드, 원클릭/수신 거부 존중이에요.

{% hint style="info" %}
**IP Reputation**과 **Domain Reputation** 탭은 곧 Google에서 지원을 중단할 예정이에요. 중단 시점은 아직 공개되지 않았어요.

자세한 내용은 [Google Postmaster Tools 평판 대시보드 지원 중단 안내](https://support.google.com/mail/answer/16594218?hl=en#zippy=%2Cwhat-is-deprecated%2Cwhy-is-the-reputation-dashboard-being-deprecated%2Cwhat-about-the-dashboards-in-the-old-postmaster-tools)를 참고하세요.
{% endhint %}

## 자주 묻는 질문

### Google Postmaster Tools는 무료인가요?
네. Google의 발송량 기준을 충족하고 인증 가능한 발송 도메인을 가진 발송자라면 누구나 무료로 쓸 수 있어요.

### Postmaster Tools를 설정했는데 데이터가 안 보여요.
Postmaster Tools는 Gmail 주소로 보내는 발송량이 어느 정도 되어야 데이터를 보여 줘요. 몇백 통 정도만 보낸다면 발송량이 늘 때까지 대시보드가 일부만 보이거나 비어 있을 수 있어요.

### 전용 발송 도메인을 꼭 써야 하나요?
네. 발송 도메인을 직접 소유하고 SPF, DKIM, DMARC 레코드를 모두 관리할 수 있을 때 Postmaster Tools 데이터가 가장 의미 있어요. 공유 발송 도메인은 계정별로 쓸 만한 인사이트를 보여 주지 않아요.

### 스팸 비율은 어느 정도가 좋은가요?
Google은 스팸 비율이 0.1%를 넘으면 심각한 신호로 봐요. 이보다 훨씬 낮게 유지하세요. 마케터라면 0.05% 미만이 적정한 운영 범위예요.

### Postmaster 데이터는 얼마나 자주 갱신되나요?
Google은 대부분의 대시보드를 하루에 한 번 갱신해요. 평판 값은 실제 발송 활동보다 보통 1~2일 늦게 반영돼요.

### Postmaster를 연결하면 Google이 내 연락처 데이터에 접근하나요?
아니요. 이 연동은 Postmaster Tools에 등록한 도메인의 이메일 트래픽 지표를 읽는 권한만 요청해요. 연락처 목록, 수신자 주소, 캠페인 내용은 공유하지 않아요.

### 나중에 Postmaster Tools 연결을 끊을 수 있나요?
네. Google 계정 권한에서 언제든 접근 권한을 해제할 수 있어요. 하이퍼클래스에서는 **설정 > 이메일 서비스 > Postmaster Tools**에서 연동을 해제하세요.

### Postmaster Tools를 계속 쓰려면 재인증해야 하나요?
재인증은 API v2로 옮기고 새로 생긴 규정 준수 지표를 쓰기 위한 방법이에요. 재인증하지 않아도 기존 연결은 계속 작동해요. 다만 재인증하기 전에는 새 **Compliance Status** 탭과 기간별 리포트를 볼 수 없어요.
