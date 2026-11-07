---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004151-microsoft-smart-network-data-services-snds-
번역일: 2026-11-06
카테고리: 09-이메일
---

# Microsoft SNDS로 IP 상태 모니터링하기

전용 IP 구독을 구매하셨다면 Microsoft SNDS(Smart Network Data Services) 연동으로 **IP Status Monitoring**(IP 상태 모니터링)을 쓸 수 있어요. Outlook과 Hotmail에서 내 IP의 이메일 전달 상태를 확인하고, 발송 평판이 나빠지기 전에 문제를 찾아낼 수 있어요.

## Microsoft SNDS란?

Microsoft SNDS는 Outlook, Hotmail 같은 Microsoft 서비스에서 내 IP의 이메일 활동을 보여 주는 도구예요. IP 상태, 스팸 신고, 필터 결과, 차단 여부를 알려 주기 때문에 이메일이 스팸함이 아닌 받은편지함에 도착하도록 관리하는 데 도움이 돼요.

## IP 상태 기능 사용하기

1. **IP 상태 대시보드 열기**

   **설정 > 이메일 서비스 > Postmaster Tools(포스트마스터 도구) > Microsoft SNDS**로 이동하세요.

   ![Postmaster Tools에서 Microsoft SNDS로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035109257/original/RkEAgvx1tE7wc_8z2jcSbEll7Q5tyNZNBw.png?1729520424)

2. **IP 주소 선택하기**

   내 IP 목록과 함께 다음 지표가 표시돼요.

   - **Filter Results**(필터 결과): 스팸으로 분류된 메시지의 비율이에요.
   - **Blocked Status**(차단 상태): Microsoft 서비스에서 해당 IP가 차단되었는지 보여 줘요.
   - **Trap Hits**(스팸 트랩 적중): 스팸 트랩에 걸린 메시지 수예요.
   - **Complaint Rate**(신고율): 수신자 중 내 이메일을 스팸으로 신고한 비율이에요.

3. **IP 상태 개요 확인하기**

   선택한 IP의 자세한 내용을 보려면 **상세 보기**를 클릭하세요. 다음 항목을 확인할 수 있어요.

   - **Activity Period**(활동 기간): 이메일 활동이 있었던 기간이에요.
   - **RCPT Commands**(RCPT 명령)와 **DATA Commands**(DATA 명령): 처리된 메시지의 양이에요.
   - **Spam and Complaint Rates**(스팸률 및 신고율): IP의 평판을 파악하는 데 도움이 돼요.

4. **CSV 리포트 다운로드하기**

   더 자세히 분석하려면 **CSV 다운로드**를 클릭해 상세 활동 내역을 내보내세요.

## 주요 지표 해석하기

![Microsoft SNDS 주요 지표 개요 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035109530/original/zyeGdoevGu4d1ngOfTqb0vFFXK_V9gaHxQ.png?1729520626)

| 지표 | 정상 범위 | 의미 |
| --- | --- | --- |
| **Filter Results** | 스팸 10% 미만 | 10% 이상이면 일부 이메일이 스팸으로 분류되고 있다는 뜻이에요. 발송 방식, 콘텐츠, 리스트를 점검하세요. |
| **Blocked Status** | 아니요 | "예"로 표시되면 스팸 의심 행위나 정책 위반으로 IP가 차단된 상태예요. 즉시 조치가 필요해요. |
| **Trap Hits** | 0 | 1건 이상이면 리스트에 유효하지 않거나 의심스러운 주소가 있다는 뜻이에요. 해당 주소를 정리하세요. |
| **Complaint Rate** | 0.1% 미만 | 0.1%를 넘으면 수신자들이 내 이메일을 스팸으로 신고하고 있다는 뜻이에요. 콘텐츠를 점검하고 수신 동의를 받았는지 확인하세요. |
| **RCPT Commands** | 발송량과 일치 | 이메일을 받은 전체 수신자 수예요. 예상한 캠페인 규모와 맞는지 확인하세요. |
| **DATA Commands** | 발송량과 일치 | 처리된 전체 데이터 전송량으로, 전송된 메시지 수를 반영해요. 계획한 발송량과 비슷하게 유지해야 필터에 걸리지 않아요. |
| **Trap Message Period**(스팸 트랩 감지 기간) | 0일 | 내 이메일이 스팸 트랩에 감지된 일수예요. 0이 아니면 즉시 원인을 확인해야 해요. |
| **Red Days (Filter Result Issues)**(레드 데이, 필터 결과 문제) | 0 | 1일 이상이면 스팸률이 높거나 전달에 문제가 있었던 날이 있다는 뜻이에요. 해당 기간의 발송 패턴을 살펴보세요. |

{% hint style="info" %}
전달 문제가 생긴 뒤에만 보지 말고 이 지표를 정기적으로 확인하세요. 신고율이 오르거나 레드 데이가 생긴 것을 일찍 발견하면 받은편지함 도착률에 영향을 주기 전에 해결하기 훨씬 쉬워요.
{% endhint %}

## IP가 차단되었거나 스팸률이 높을 때 대처하기

IP가 차단되었거나 스팸률이 높게 나오면 다음 순서로 대처하세요.

1. **지표 검토하기**

   최근 활동을 분석하세요. 특히 스팸 트랩 적중과 신고 내역을 살펴보세요.

2. **메일링 리스트 정리하기**

   유효하지 않거나 활동이 없는 주소를 삭제하고, 모든 수신자가 수신에 동의했는지 확인하세요.

3. **IP 차단 해제 요청하기**

   IP가 차단된 상태라면 [Microsoft Outlook 지원 페이지](https://olcsupport.office.com/)에서 차단 해제를 요청하세요.

{% hint style="warning" %}
차단된 IP와 0이 아닌 **Trap Message Period**는 즉시 조치가 필요해요. 발송 문제를 오래 방치할수록 Microsoft에서 평판을 회복하기가 더 어려워져요.
{% endhint %}

## 자주 묻는 질문

### IP 상태 모니터링은 IP 구독에 포함되어 있나요?

네. IP 구독을 구매하셨다면 **설정 > 이메일 서비스 > Postmaster Tools**에서 추가 비용 없이 Microsoft SNDS 기반 IP 상태 모니터링을 쓸 수 있어요.

### 내 IP의 데이터가 아직 보이지 않아요.

Microsoft SNDS는 최근에 Microsoft 서비스로 발송한 이력이 있는 IP만 보고해요. IP가 새로 만들어졌거나 Outlook, Hotmail 수신자에게 보낸 양이 적다면 데이터가 표시되기까지 며칠 걸릴 수 있어요.

### Gmail이나 Yahoo도 모니터링할 수 있나요?

아니요. Microsoft SNDS는 Outlook, Hotmail 같은 Microsoft 소유 메일 서비스의 활동만 보고해요. 다른 메일 제공업체는 각자 포스트마스터 도구를 따로 제공해요.

### IP 상태 대시보드는 얼마나 자주 업데이트되나요?

Microsoft SNDS 데이터는 보통 하루에 한 번 갱신돼요. 특히 대량 캠페인을 보낸 뒤에는 대시보드를 자주 확인해서 신고율 상승 같은 문제가 커지기 전에 발견하세요.

### 스팸 트랩 적중이 보이면 가장 먼저 무엇을 해야 하나요?

먼저 해당 주소가 어떻게 리스트에 들어왔는지 확인하세요. 그 주소와 함께 반응이 없거나 확인되지 않은 다른 연락처도 삭제하세요. 그리고 다음 발송 전에 남은 수신자가 모두 제대로 수신에 동의했는지 확인하세요.

### 차단 해제를 요청하면 얼마나 걸리나요?

Microsoft가 요청을 건별로 검토하기 때문에 소요 시간은 경우마다 달라요. 그동안에도 리스트 정리와 지표 모니터링을 계속하세요. 차단이 풀렸을 때 IP가 좋은 상태일 수 있어요.
