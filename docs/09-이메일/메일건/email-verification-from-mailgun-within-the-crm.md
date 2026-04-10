---

번역일: 2026-04-07
카테고리: 09-이메일 > 메일건
---

# CRM 내 Mailgun 이메일 검증

이메일 검증을 활성화하면 Mailgun이 CRM 내에서 신규 이메일을 자동으로 검증합니다.

참고사항:

CRM에서 이메일 검증을 활성화하면 Mailgun 계정에서 Mailgun 비용이 발생합니다. 이메일 검증은 유료 서비스로 이메일 1건당 $0.012가 청구됩니다 - [Mailgun 가격 확인하기](https://www.mailgun.com/pricing/)

#### 이 가이드의 내용:

#### [CRM에서 이메일 검증 활성화하기](#CRM에서-이메일-검증-활성화하기)

#### [CRM에서 이메일 재검증 활성화하기](#CRM에서-이메일-재검증-활성화하기)

#### [FAQ](#faq)

#### [이메일 검증은 어떻게 작동하나요?](#이메일-검증은-어떻게-작동하나요)

참고사항:

활성화하면 이메일이 가끔 유효/무효 상태가 변경되므로 90일마다 모든 이메일을 재검증합니다.

## CRM에서 이메일 검증 활성화하기:

1. Switch to Agency View(에이전시 뷰로 전환)을 클릭하세요

![에이전시 뷰로 전환 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48249972893/original/bGfeNdona_2YA3hhyB2sp1F85S7-fbMQQg.png?1662660998)

2. Settings(설정)을 클릭하세요

![설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48249972892/original/DL1OXejzWSm9nh3reDqB74ahmPwjbrLLiQ.png?1662660998)

3. Email Services(이메일 서비스)를 클릭하고 Location Settings(로케이션 설정)으로 이동하세요

![이메일 서비스 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286902371/original/Bz6sImmJG6SR-vnjuaWTo8oadXaAnO-fRw.png?1678719367)

4. 원하는 하위 계정 앞의 토글을 클릭하여 이메일 검증을 활성화하세요:

참고사항:

이메일 검증은 유료 서비스로 이메일 1건당 $0.012가 청구됩니다

![이메일 검증 활성화 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286899922/original/ptM9qZFnTxX-sxtJnYdUfSNzFpJyooOunw.png?1678718751)

## CRM에서 이메일 재검증 활성화하기:

1. 에이전시 뷰에서 Sub-Accounts(하위 계정)을 클릭하세요

2. 하위 계정 이름으로 검색하세요

3. 하위 계정 이름을 클릭하세요

![하위 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286901207/original/E9oHrDLiBo7aP_Zr4pU3TDmBEpxvx4oboA.png?1678719096)

4. Email Advanced Settings(이메일 고급 설정) > Enable Re-verification for 90 days(90일 재검증 활성화)로 스크롤을 내리세요

![90일 재검증 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286901899/original/Yuf-TuEOphGPpG3sF99eIw8y3Z_VUJS-mw.png?1678719270)

# FAQ

### 이메일 검증은 어떻게 작동하나요?

이메일 검증은 시스템에 처음 입력될 때(폼, 설문, 캘린더, 채팅 위젯) 또는 이메일 검증 활성화 후 새 이메일을 보낼 때 Mailgun 기록을 기준으로 이메일을 확인합니다. 그리고 활성화된 경우 90일마다 검증합니다.

연락처 상세로 들어가서 > 우측으로 스크롤 > 봉투 아이콘을 클릭하세요.

- 녹색 = 유효
- 빨간색 = 무효, 너무 오래됨, 이전 반송, 구독 취소 등. 오류 메시지에서 이메일이 무효한 이유를 확인할 수 있습니다.

[](https://app.tango.us/app/workflow/31a215d9-6696-4697-a00a-5a6849c573b9?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links)

---
*원문 최종 수정: Wed, 22 Jan, 2025 at 7:00 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*