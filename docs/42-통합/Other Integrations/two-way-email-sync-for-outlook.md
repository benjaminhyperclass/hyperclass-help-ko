---

번역일: 2026-04-09
카테고리: 42-통합 > Other Integrations
---

# Outlook 양방향 이메일 동기화

이메일 양방향 동기화는 CRM과 이메일 클라이언트 간에 이메일을 양방향으로 동기화하는 기능입니다. 한쪽 플랫폼에서 이메일을 보내거나 받거나 업데이트하면 자동으로 다른 쪽과 동기화되어, 관련된 모든 데이터가 양쪽에서 사용할 수 있도록 합니다. Outlook 양방향 동기화를 사용하면 사용자가 Outlook 계정을 CRM과 연결하여 양쪽 플랫폼 간에 이메일을 동기화할 수 있습니다.

#### 이 글에서 다루는 내용:

#### [Outlook 양방향 이메일 동기화 연결 방법](#outlook-양방향-이메일-동기화-연결-방법)

#### [연결 단계](#연결-단계)

#### [CRM과 이메일 계정 간 양방향 동기화 작동 원리](#crm과-이메일-계정-간-양방향-동기화-작동-원리)

#### [기타 기능](#기타-기능)

#### [양방향 동기화는 개별 이메일에만 작동하나요, 대량 이메일과 워크플로우에도 작동하나요?](#양방향-동기화는-개별-이메일에만-작동하나요-대량-이메일과-워크플로우에도-작동하나요)

## Outlook 양방향 이메일 동기화 연결 방법

# 연결 단계

하위 계정에서 `Settings(설정) > My Profile(내 프로필)` 탭으로 가서 "Email (2-way sync)" 섹션으로 스크롤하세요.
![Outlook 양방향 이메일 동기화 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274395767/original/Rby05oCkzbYHyRC0wVO5O4aOWB8Qxw08AQ.png?1673362633)

Outlook을 선택하고 이메일 제공업체를 선택한 후 Connect(연결)을 클릭하세요.
![Outlook 연결 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274396289/original/mBVWnL8bflbaxM8Djfy_UHCxlhpa9aYGtQ.png?1673362734)

Outlook 이메일 ID 자격 증명을 입력하여 인증을 완료하세요.
![Outlook 로그인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274396813/original/LD4N2tgQLSC-NRdaiZGUrm6eEE72i3r2YA.png?1673362821)

![Microsoft 인증 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286150045/original/2395BAOyhwzzqcDX-7ZUQXdm9mKz6fHR7w.png?1678347896)

LeadConnector에 대해 요청된 권한을 승인하세요:

![권한 승인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286150199/original/kGgkCc6_lLVmhqnQD4rLEctTCF9xVtGiQQ.png?1678347934)

![권한 승인 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274401676/original/DNRjHYfFf17fEXfeXb-ypPjxirSlR7P5ZA.png?1673363630)

`Settings(설정) > My Profile(내 프로필)`에서 "Email (2-way sync)" 섹션으로 스크롤하여 연결 상태에서 이메일을 확인하세요.

![연결 완료 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274407469/original/36-6kdo8xbItgNvL7sH3sbtwUlOAnuTfbQ.png?1673364584)

## CRM과 이메일 계정 간 양방향 동기화 작동 원리

양방향 동기화가 연결되면(Gmail 또는 Outlook):

- CRM에서 이메일을 시작하면, 해당 이메일 스레드와 후속 메시지가 양쪽 플랫폼(CRM & Outlook) 간에 동기화됩니다.

- 받은 편지함(Outlook)에서 CRM의 기존 연락처로부터 새 이메일을 받으면, 해당 이메일과 스레드의 후속 메시지가 자동으로 CRM에 동기화됩니다.
- 받은 편지함에서 CRM에 존재하지 않는 연락처에게 새 이메일을 보내고 해당 이메일을 CRM과 동기화하고 싶다면, 작성 창의 Cc 또는 Bcc 필드에 BCC 주소를 사용하여 이메일을 보내세요. 이렇게 하면 CRM에 새 연락처가 생성되고 이메일이 양쪽 플랫폼 간에 동기화됩니다.

참고사항:

- 하위 계정 사용자이기도 한 연락처의 이메일은 동기화되지 않습니다. 종종 하위 계정 사용자가 다양한 목적으로 연락처로 추가되는데, 이러한 이메일은 기밀 정보를 포함할 수 있으므로 동기화되지 않습니다. 이메일 주소가 사용자에게 속하지 않는 경우, 위에서 언급한 대로 이메일이 동기화됩니다.

- 위에서 언급한 기능이 원활히 작동하도록 Labs에서 'Outlook 2-way Sync'를 활성화했는지 확인하세요. LABS가 꺼져 있으면 CRM에서 시작된 이메일만 동기화되고 Auto BCC는 연락처를 동기화하지 않습니다.

![Labs 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274409947/original/nfYhNJX6kd_mnmRKWkhoz3S44-iW8-pTiA.png?1673365013)

![Outlook 2-way Sync 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274410786/original/O95R2YOy0ICNsr69vc64B2WeyxEaBLfNwQ.png?1673365182)

이메일 스레드의 모든 후속 메시지(CRM에서 시작된)가 동기화됩니다. 이메일에서 보낸 발신 이메일이 CRM에 반영되기 시작하고 그 반대도 마찬가지입니다.
![CRM 이메일 동기화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274411519/original/Qcf30hK4rYTieaYlqtiX7wPtH3YSk14exw.png?1673365274)

![Outlook 이메일 동기화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274411984/original/iRhDXxDWcE5l-Tq60A1ApVfKpQYbnuowfw.png?1673365374)

주의사항

최대 3MB 크기의 첨부 파일이 이 동기화에서 작동하며, 이 크기보다 큰 첨부 파일은 메시지가 동기화되지 않게 합니다.
**지원되는 파일 형식:** JPG,JPEG,PNG,MP4,MPEG,ZIP,RAR,PDF,DOC,DOCX,TXT

## 기타 기능

이메일 업데이트: 사용자가 이전 연결을 끊지 않고 연결된 이메일 ID를 다른 것으로 변경할 수 있게 해줍니다.

![이메일 업데이트 기능](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274412595/original/K7lc8soEvt0eZrmsM_N1Bi4SkEDNDfhIsA.png?1673365506)

CRM에서 새로운 발신 이메일이 새로 추가된 이메일 주소와 동기화를 시작합니다. 이전에 연결된 이메일 ID의 향후 메시지(같은 스레드)는 CRM과 개인 이메일 간 동기화가 중단됩니다.

이메일 연결 해제: 연결을 해제하고 CRM과의 동기화를 중단합니다. 연결이 해제되면 이메일이나 메시지가 양쪽 플랫폼 간에 동기화되지 않습니다.

![이메일 연결 해제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274412884/original/-1hFYB1PHiPT0S6vhujtn2BPxSBXrHPIAA.png?1673365574)

## 양방향 동기화는 개별 이메일에만 작동하나요, 대량 이메일과 워크플로우에도 작동하나요?

다양한 유형의 이메일에 대한 발신자 도메인 매핑 작동 방식:

개별 이메일: 개인 이메일 계정(Outlook)을 연결하면, 개별 이메일의 경우 사용자가 보내는 이메일의 발신자 도메인으로 Outlook 이메일 ID가 고려됩니다.

대량 이메일: 사용자가 (양방향 동기화 설정 후) "From Field"에 자신의 이메일 ID를 입력하면, 대량 이메일의 발신자 도메인으로 사용자 이메일 ID가 고려됩니다. 필드가 비어있으면 하위 계정 수준 제공업체가 발신자 도메인으로 고려됩니다.

대량 이메일: 사용자가 연결된 이메일 ID(Outlook)와 다른 이메일 ID를 입력하면, 하위 계정 수준 제공업체가 발신자 도메인으로 고려됩니다.

워크플로우 & 자동화: 이메일은 계속해서 하위 계정 수준 제공업체에서 발송됩니다. 이는 받은 편지함과 동기화되지 않습니다.

---
*원문 최종 수정: Mon, 26 Aug, 2024 at 11:19 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*