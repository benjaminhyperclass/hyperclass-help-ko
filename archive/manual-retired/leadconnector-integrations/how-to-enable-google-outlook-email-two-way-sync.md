---
원문: https://help.leadconnectorhq.com/support/solutions/articles/48001235284-how-to-enable-google-outlook-email-two-way-sync
번역일: 2026-04-23
카테고리: leadconnector-integrations
---

# 이메일 양방향 동기화 설정 방법 (Gmail, Outlook)

이메일 양방향 동기화(Email Two Way Sync)는 CRM과 이메일 클라이언트 간에 이메일을 양방향으로 동기화하는 기능입니다. 한쪽 플랫폼에서 발송, 수신 또는 업데이트된 모든 이메일이 자동으로 다른 쪽과 동기화되어, 두 플랫폼 모두에서 모든 관련 데이터를 확인할 수 있습니다. 현재 Gmail과 Outlook을 지원합니다.

## 이메일 양방향 동기화란?

사용자는 개인 Gmail 또는 Outlook 이메일 계정을 연결하여 CRM과 개인 이메일 계정 간에 발신 및 수신 이메일을 동기화할 수 있습니다. 이메일 계정을 사용하여 이메일을 보내고, 받고, 추적할 수 있으며, 다양한 상황에서 두 플랫폼 간에 동기화가 설정됩니다.

### Outlook:
CRM에서 이메일 스레드가 시작될 때(첫 번째 발신 메시지), 해당 스레드의 모든 후속 이메일이 두 플랫폼 간에 동기화됩니다. 이 기능은 사용자 수준 설정이며 하위 계정의 다른 사용자에게는 영향을 주지 않습니다.

### Gmail:
동기화가 설정되는 두 가지 경우가 있습니다:

1. CRM에서 연락처에게 이메일을 보내서 두 플랫폼 간 동기화를 시작할 수 있습니다.
2. CRM에 이미 저장된 연락처가 Gmail 양방향 동기화가 통합된 사용자의 Gmail 이메일 주소로 이메일을 보내는 경우에도 Gmail 동기화가 작동합니다. 해당 이메일은 대화 탭에 동기화되며, 연락처는 사전에 해당 사용자에게 배정되어 있어야 합니다.

**참고 사항**
사용자가 여러 하위 계정에 추가되고 모든 계정에서 Gmail 양방향 동기화용으로 동일한 Gmail 계정을 통합한 경우, 연락처의 이메일이 모든 하위 계정의 대화 탭으로 이동하지만, 사용자가 답장하는 하위 계정에서만 해당 연락처의 인스턴스를 유지합니다. 다른 모든 인스턴스에서는 동기화가 중단됩니다. 기존 연락처에 사용자가 배정되어야 한다는 추가 필터는 연락처가 속하지 않은 하위 계정으로 대화가 이동하지 않도록 보장합니다.

## 연결 단계

하위 계정의 Settings(설정) 페이지로 이동하세요. Profile(프로필) 탭을 클릭한 다음 General(일반) 탭을 클릭하고 아래로 스크롤하여 Email (2-way sync) 섹션을 찾습니다.

**참고 사항:**
현재 보고 있는 하위 계정에 추가된 경우에만 프로필 탭이 표시됩니다.

### Gmail 양방향 동기화:

Gmail 양방향 동기화를 사용하려면 Gmail two sync를 선택하고 Connect(연결)를 클릭하세요.

![Gmail 연결 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287172202/original/Ov8ZL5bpsQ11-hYQtBEojRIcukahg4g4LQ.png?1678806836)

그러면 해당 브라우저에서 사용 가능한 Gmail 계정 중 하나를 선택하거나 Gmail 계정을 연결하라는 메시지가 표시됩니다. 필요한 계정을 선택하세요. 새 계정 연결 시에는 팝업에서 해당 계정의 자격 증명을 입력해야 합니다.

![Gmail 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287172195/original/3CsRgPoAgMOfw8ALOdS6pc-DDLAUd-ZB7w.png?1678806834)

연결 시 LeadConnector가 Gmail 계정에 대해 허용할 권한에 대해 묻습니다. 모든 권한을 허용하고 Continue(계속)를 클릭하세요:

![권한 허용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287172136/original/eEHiU83lWrnWYIoNWE57sQC-oZQqucXvww.png?1678806825)

Continue(계속)를 클릭하면 이메일 양방향 동기화 탭에서 원하는 Gmail 계정이 연결된 것을 확인할 수 있습니다:

![연결 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287172189/original/FLuw6y9A-vvCxMjw_0KP04tsy1e_QOY5BQ.png?1678806834)

#### Google 속도 제한

![Google 속도 제한](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155002826972/original/oH7znyWMP4LtMBU1U9ckgwxUUTr-bkn18g.png?1689218041)

#### CRM과 이메일 계정 간 Gmail 양방향 동기화 작동 방식

동기화가 설정되는 두 가지 경우가 있습니다:

1. CRM에서 연락처에게 이메일을 보내서 두 플랫폼 간 동기화를 시작할 수 있습니다.
2. CRM에 이미 저장된 연락처가 Gmail 양방향 동기화가 통합된 사용자의 Gmail 이메일 주소로 이메일을 보내는 경우에도 Gmail 동기화가 작동합니다. 해당 이메일은 대화(Conversations) 탭에 동기화되며, 연락처는 사전에 해당 사용자에게 배정되어 있어야 합니다.

**참고 사항**
사용자가 여러 하위 계정에 추가되고 모든 계정에서 Gmail 양방향 동기화용으로 동일한 Gmail 계정을 통합한 경우, 연락처의 이메일이 모든 하위 계정의 대화 탭으로 이동하지만, 사용자가 답장하는 하위 계정에서만 해당 연락처의 인스턴스를 유지합니다. 다른 모든 인스턴스에서는 동기화가 중단됩니다. 기존 연락처에 사용자가 배정되어야 한다는 추가 필터는 연락처가 속하지 않은 하위 계정으로 대화가 이동하지 않도록 보장합니다.

![CRM에서 이메일 발송](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287099381/original/5yv1sSHvgI7kZ4JHVVjfZBO59-h2hC2NiQ.png?1678791637)

발송된 이메일은 연동된 Gmail 계정의 보낸 편지함에 나타납니다:

![Gmail 보낸 편지함](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287099648/original/TkUibkPnbsnocvJ7Pe29R3EjDO-IdqMbCg.png?1678791736)

**참고 사항:**
Gmail은 하루에 약 500개의 이메일만 지원하며, 그 이상의 이메일은 발송에 실패합니다. 이메일 스레드의 모든 후속 메시지가 동기화됩니다. 이메일에서 보내는 발신 이메일이 CRM에 반영되고 그 반대의 경우도 마찬가지입니다.

![이메일 스레드 동기화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287100068/original/KFFk82QyDSizlj8oZgSFpmo62DMwDOMUmQ.png?1678791842)

![Gmail에서 이메일 수신](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287100403/original/bvqjrVOEvFHoWUWu56obXKkhDBc9638gvQ.png?1678791938)

**참고 사항:**
Gmail 양방향 동기화의 지원되는 첨부파일 크기 제한은 25MB입니다.

### Outlook 양방향 동기화:

Outlook 양방향 동기화를 사용하려면 Email (2-way sync)에서 Outlook을 이메일 제공업체로 선택하고 Connect(연결)를 클릭하세요.

![Outlook 연결 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287172972/original/eIXwK85vdb6ar3wz96e5oFZi9XhO9yRoXA.png?1678806993)

Outlook 이메일 ID 자격 증명을 입력하여 인증을 완료하세요.

![Outlook 로그인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173057/original/Daj_APA9d_Q-I9r9ZCokna65RMm2KCe-ZA.png?1678807007)

![Outlook 인증](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173059/original/BR0E9H1Kq-zRARo6Zn0yhTFCJtpCj4j7gw.png?1678807007)

LeadConnector에 요청된 권한을 승인하세요:

![권한 승인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173015/original/x7BbOXuVpLR_x9VOtLHn9wvkiRs3JYpbxw.png?1678807000)

![권한 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287172979/original/Kaw9-ZO4dRY4cVBBYoasnMZbZqRJVq3DgQ.png?1678806994)

프로필 페이지에서 Email (2-way sync) 섹션으로 스크롤하여 연결 상태에서 이메일을 확인하세요.

![Outlook 연결 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173043/original/vthvUmX6mIVBuwVStPpDG9PTN68x6vvviw.png?1678807005)

#### CRM과 이메일 계정 간 Outlook 양방향 동기화 작동 방식

두 플랫폼 간 동기화를 시작하려면 CRM에서 연락처에게 이메일을 보내야 합니다.

**참고 사항**
동기화를 설정하려면 첫 번째 발신 이메일이 CRM에서 시작되어야 합니다.

![CRM에서 Outlook 이메일 발송](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173042/original/7oxQxp_6W7ZY-RwNj7OY74lo_nfFKtSKKQ.png?1678807004)

![Outlook 이메일 스레드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173061/original/EDcuU_y8RqC6s794ZWZiywSpWeS9xVMFxg.png?1678807008)

![Outlook에서 이메일 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173058/original/IsrUAmxqm3mT_Ut-2S-cG5dBnZBevGjw9w.png?1678807007)

(CRM에서 시작된) 이메일 스레드의 모든 후속 메시지가 동기화됩니다. 이메일에서 보내는 발신 이메일이 CRM에 반영되고 그 반대의 경우도 마찬가지입니다.

![Outlook 양방향 동기화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173062/original/7Me67gV0KCOl0GVFM5493Q8jY7A9IKyyLA.png?1678807008)

![Outlook CRM 동기화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173060/original/oLPD0weRLE5l_DQ8BGGjETrFzpAHOpUWNg.png?1678807008)

이메일에서 시작된 이메일 스레드는 CRM과 동기화되지 않습니다. CRM에서 생성된 이메일 스레드만 동기화됩니다.

발신 이메일이 (동기화가 활성 상태일 때) 발송되었고 나중에 CRM에서 동기화가 해제된 경우, 해당 스레드의 후속 메시지는 동기화를 중지합니다. 이는 CRM에서 발송되는 새로운 발신 이메일의 동기화도 중지합니다.

**참고 사항**
최대 3MB 크기의 첨부파일이 이 동기화에서 작동하며, 이보다 큰 첨부파일은 메시지가 동기화되지 않습니다.
**지원되는 파일 형식:** JPG, JPEG, PNG, MP4, MPEG, ZIP, RAR, PDF, DOC, DOCX, TXT

## Outlook 및 Gmail 양방향 동기화의 기타 기능

### 이메일 업데이트:

이전 연결을 해제하지 않고 연결된 이메일 ID를 다른 것으로 변경할 수 있는 기능입니다.

![이메일 업데이트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173780/original/Z2tWxdGBQs-6ByjzvhBss7rZIabcgOgkbQ.png?1678807137)

CRM에서 보내는 새로운 발신 이메일이 새로 추가된 이메일 주소와 동기화를 시작합니다. 이전에 연결된 이메일 ID(동일 스레드)의 향후 메시지는 CRM과 개인 이메일 간 동기화를 중지합니다.

### 이메일 연결 해제:

연결을 해제하고 CRM과의 동기화를 중지할 수 있는 기능입니다. 연결 해제 후에는 두 플랫폼 간에 이메일이나 메시지가 동기화되지 않습니다.

![이메일 연결 해제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287173779/original/Ej3-tK6PgUJyMdY_XrThv_WkoiD8d5YMcg.png?1678807137)

### BCC 주소

Gmail/Outlook에서 이메일을 보낼 때 CC 또는 BCC 필드에 BCC 주소를 포함할 수 있습니다. 이렇게 하면 자동으로 연락처와 대화가 CRM에 추가되어 커뮤니케이션을 간소화하고 모든 관련 데이터를 중앙화할 수 있습니다. 앞으로 이 연락처로부터 Gmail/Outlook 인박스 수준에서 받는 모든 이메일이 자동으로 CRM과 동기화됩니다.

![BCC 주소 기능](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003796789/original/y8e4pNvsjXgTN9G3mDxS0Ro04NP8gkUtfA.png?1690445519)

## 양방향 동기화는 개별 이메일에만 작동하나요, 아니면 대량 이메일과 워크플로우에도 작동하나요?

다양한 유형의 이메일에 대한 발신자 도메인 매핑 작동 방식:

**개별 이메일:** 개인 이메일 계정(Gmail)을 연결하면 사용자가 개별 이메일을 위해 보내는 이메일의 발신자 도메인으로 Gmail 이메일 ID가 간주됩니다. 사용자에게 양방향 동기화가 활성화되면 개별 이메일이 Gmail에서 직접 발송됩니다. Google이 설정한 하루 500개 이메일 제한이 이 기능에 적용됩니다.

**대량 이메일:** 하위 계정 수준 이메일 제공업체에서 계속 발송됩니다. 양방향 동기화는 이에 영향을 주지 않습니다.

**워크플로우 & 자동화:** 자동화된 이메일의 경우 하위 계정 수준 제공업체에서 발송됩니다. 이 배치는 자동화된 CRM 워크플로우와 이메일 발송 시스템을 원활하게 통합합니다.

**참고 사항:**
이 설정을 통해 사용자는 일대일 이메일에 양방향 동기화를 활용하면서 대량 이메일도 성공적으로 발송할 수 있습니다. Gmail에서 부과하는 하루 500개 이메일 제한은 개별 이메일에만 적용되므로, 사용자는 이 제한에 대한 걱정 없이 LeadConnector/SMTP를 통해 대량 이메일을 발송할 수 있습니다. 이는 사용자가 Gmail의 일일 이메일 한도에 제약받지 않고 대량 이메일 캠페인을 수행할 수 있도록 하는 사려 깊은 설계 기능입니다.

## FAQ (Gmail만 해당)

### 기존 연락처로부터 받은 이메일은 어떻게 되나요?

기존 연락처로부터의 모든 수신 이메일이 CRM과 Gmail/Outlook 인박스에 반영됩니다. 이 양방향 동기화는 두 플랫폼 모두에서 모든 커뮤니케이션의 완전한 기록을 보장합니다.

### 동기화된 계정을 제거하면 기존 이메일이 삭제되나요?

아니요, 동기화된 계정을 제거해도 기존 이메일은 삭제되지 않습니다. 이전에 동기화된 이메일은 그대로 유지되며, 계정 제거 후에 발송되거나 수신되는 새 이메일에만 동기화가 영향을 줍니다.

### 계정 제거 후에 새 이메일이 동기화되나요?

계정 제거 후에 발송되거나 수신되는 새 이메일은 CRM과 Gmail/Outlook 간에 동기화되지 않습니다. 두 플랫폼 간의 동기화는 기존 이메일에 대해서는 계속되지만, 새 이메일은 동기화에 포함되지 않습니다.

### Gmail의 모든 기존 연락처가 CRM과 동기화되나요?

네, 양방향 동기화는 Gmail의 기존 연락처를 식별하고 CRM과 동기화합니다. 이러한 연락처로부터의 수신 이메일은 자동으로 해당 연락처 아래에 채워지지만, (통합이 연결되기 전의) 과거 이메일은 동기화될 수 없습니다.

### 연락처로부터 새 이메일을 받으면 어떻게 되나요?

기존 연락처로부터의 새 수신 이메일이 CRM과 Gmail에서 새 이메일로 반영됩니다. 이메일이 기존 대화 스레드에 속하는 경우, 동일한 스레드 내에서 새 이메일로 표시됩니다.

### CRM이나 Gmail에서 보낸 이메일은 어떻게 되나요?

CRM에서 보낸 발신 이메일이 동기화된 메일의 보낸 편지함에 자동으로 기록됩니다. 반대로 동기화된 메일 제공업체의 이메일이 해당 CRM 연락처의 대화 아래에 자동으로 나타납니다.

### cc/bcc 수신자는 동기화에서 어떻게 처리되나요?

사용자가 cc 또는 bcc에 포함되거나 Gmail에서 여러 수신자에 포함되는 경우, 이 정보가 CRM의 해당 연락처 아래에 반영되어 모든 커뮤니케이션의 포괄적인 가시성을 보장합니다. CC 및 BCC 이메일 주소에 대해서는 새 연락처가 생성되지 않습니다.

### 연락처가 다른 사람에게 이메일을 보내지만 CRM 사용자를 포함하는 경우는 어떻게 되나요?

이 경우 이메일이 CRM에 반영되어 해당 연락처와 연결되며, 완전한 대화 히스토리를 유지합니다.

### 여러 수신자가 관련된 경우 대화 스레드는 어떻게 관리되나요?

이메일에 여러 수신자(to)가 있는 경우, 첫 번째 연락처가 CRM의 대화 탭이 됩니다. 모든 후속 이메일이 이 스레드에 나타납니다.

### 동일한 동기화된 이메일 주소에 대해 같은 연락처가 여러 로케이션에 존재하는 경우는 어떻게 되나요?

CRM에서 발생하는 이메일은 해당 로케이션에만 반영됩니다. 후속 답변 및 커뮤니케이션도 해당 로케이션에 한정되어야 합니다. 그러나 연락처에서 CRM 사용자로 보내는 이메일은 모든 로케이션에 반영되어야 합니다.

### BCC 주소란 무엇이고 어떻게 작동하나요?

Gmail/Outlook에서 이메일을 보낼 때 Cc 또는 Bcc 필드에 BCC 주소를 포함할 수 있습니다. 이는 자동으로 CRM에 대화와 연락처를 추가하여 커뮤니케이션과 데이터 관리를 간소화합니다. 앞으로 이 연락처로부터 Gmail/Outlook 인박스 수준에서 받는 모든 이메일이 자동으로 CRM과 동기화됩니다.

### Gmail 로그인 자격 증명이 변경되면 보안 연결은 어떻게 처리되나요?

로그인 자격 증명이 변경된 경우, CRM에서 보안 연결을 유지하기 위해 재인증하고 이메일을 다시 동기화하도록 요구합니다.

### Gmail에서 이메일이 전달되면 어떻게 되나요?

기존 연락처에게 전달된 모든 이메일은 발송된 이메일로 처리되어 CRM에서 해당 연락처 아래에 동기화됩니다.

### 여러 연락처와 중복되는 이메일이 있으면 어떻게 되나요?

여러 연락처에게 발송된 중복 이메일은 CRM에서 가장 먼저 생성된 연락처와 연결됩니다.

---
*원문 최종 수정: Sun, 19 May, 2024 at 10:26 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*