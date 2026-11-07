---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007956-domain-removal-blocked-due-to-active-campaign-assignment
번역일: 2026-11-07
카테고리: 09-이메일
---

# 활성 캠페인 때문에 도메인이 삭제되지 않을 때: 캠페인 연결 해제하기

도메인을 삭제하려는데 "활성 캠페인에 연결되어 있다"는 오류가 나타난다면, 이 문서대로 연결을 먼저 해제하세요. 발송 중인 캠페인이나 전달률에 영향 없이 도메인을 깔끔하게 삭제할 수 있어요.

## 도메인 삭제 시도하기

1. 삭제하려는 도메인에서 **도메인 삭제**를 클릭하세요. 도메인이 캠페인에 연결되어 있으면 아직 삭제할 수 없다는 알림이 나타나요.

   오류 메시지는 다음과 같은 내용이에요.

   > "이 도메인은 예약된 캠페인 도메인(테스트 캠페인 제외)에 배정되어 있습니다. 캠페인 발송이 끝난 뒤 다시 시도하거나, 캠페인 도메인(테스트 캠페인 제외)에서 이 도메인을 제거하세요."

   ![도메인 삭제 오류 메시지 - 예약된 캠페인에 도메인이 배정되어 있다는 안내](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071399076/original/ou5GxUe-HSeYGYMsNzMxOMVN67COIpRQtg.png?1778837888)

## 캠페인 연결 해제하기

1. 메뉴에서 **Domain Configurator**(도메인 구성기)를 여세요. 삭제 오류가 난 도메인을 찾아 선택하세요.

   ![Domain Configurator 메뉴에서 해당 도메인을 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071399074/original/ibaLnXWTTrx3yth6AheBvbS43VM9lT1bqw.png?1778837888)

2. 해당 도메인에서 **Manage Campaign**(캠페인 관리)을 클릭하세요. 이 도메인에 연결된 캠페인이 모두 나타나요.

   ![도메인에 연결된 모든 캠페인이 나열된 Manage Campaign 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071399073/original/xnbim5hW5xrmd-YxScCiXsgW7HejpBacEw.png?1778837888)

3. 도메인과 연결된 캠페인을 모두 선택한 뒤 **제거**를 클릭하세요. 목록에 있는 모든 캠페인에서 도메인 연결이 해제돼요.

   {% hint style="warning" %}
   목록에 나온 캠페인을 하나도 빠뜨리지 말고 모두 제거하세요. 하나라도 남아 있으면 다음 단계에서 도메인이 삭제되지 않아요.
   {% endhint %}

   ![모든 캠페인을 선택하고 제거를 클릭해 도메인 연결을 해제하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071399075/original/4qSVR5XKs1rLglOOsLrq9_V8ZNlYqOpLFQ.png?1778837888)

4. **적용**을 클릭해 제거를 확정하세요. 선택한 모든 캠페인의 연결 해제 상태가 저장돼요.

5. **Manage Campaign**으로 다시 들어가 연결된 캠페인이 없는지 확인하세요. 목록이 완전히 비어 있어야 해요.

   ![연결된 캠페인이 없어 목록이 비어 있는 Manage Campaign 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071399077/original/GT7mXB1R2wxijElCPVbJbcp893G6BapOBQ.png?1778837888)

## 도메인 삭제하기

1. 도메인 목록 첫 화면으로 돌아가세요. 이번에는 도메인을 삭제하는 옵션이 나타나요.
2. 확인 문구(예: "delete")를 입력하고 **삭제**를 클릭하세요.

   ![필요한 확인 문구를 입력한 도메인 삭제 최종 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071399078/original/x2-z4yMCikeLBjVslGJxJuIFnuToThmFAg.png?1778837889)

{% hint style="info" %}
이제 도메인이 완전히 삭제됐어요. 삭제 전에 연결을 먼저 해제하면 데이터가 실수로 사라지는 일을 막을 수 있고, 활성 캠페인도 문제없이 계속 진행돼요.
{% endhint %}
