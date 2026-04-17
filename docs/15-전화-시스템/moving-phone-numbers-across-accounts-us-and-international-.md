---

번역일: 2026-04-06
카테고리: 15-전화-시스템
---

# 계정 간 전화번호 이동 (미국 및 해외)

이 가이드는 LC Phone에서 Twilio로, Twilio에서 LC로, 그리고 서로 다른 에이전시의 LC에서 LC로 전화번호를 이동하는 방법을 설명합니다. Hyperclass 고객지원팀을 통해 간단한 2단계 프로세스로 진행되며, Twilio 티켓 생성은 불필요합니다.

**중요**: 세 가지 경우 모두 동일한 프로세스를 따릅니다. 현재 LC→Twilio, Twilio→LC, LC→LC(다른 에이전시) 모두 같은 과정을 거칩니다. 고객은 적절한 Twilio Account SID(Twilio로 이동할 때는 대상 SID, Twilio에서 이동할 때는 원본 SID)와 대상 하위 계정 ID, 전화번호를 제공하면 됩니다. 해외 번호의 경우 Account SID 대신 Regulatory Bundle SID와 Address SID를 제공해야 합니다. Hyperclass 고객지원팀이 마이그레이션을 처음부터 끝까지 조율합니다.

**중요**: 더 이상 Twilio 고객지원 티켓을 생성할 필요가 없습니다. Hyperclass 고객지원팀이 마이그레이션을 처음부터 끝까지 조율합니다.

---

**목차**

- [전화번호 이동 전 준비사항](#전화번호-이동-전-준비사항)
- [미국 전화번호 이동](#미국-전화번호-이동)
  - [1단계: Twilio 자격 증명 수집 (필요한 경우)](#1단계-twilio-자격-증명-수집-필요한-경우)
  - [2단계: 전화번호가 속한 로케이션 ID 확인 (또는 전화번호를 이전할 위치)](#2단계-전화번호가-속한-로케이션-id-확인-또는-전화번호를-이전할-위치)
  - [3단계: Hyperclass 고객지원 티켓 생성](#3단계-hyperclass-고객지원-티켓-생성)
- [해외(미국 외) 전화번호 이동](#해외미국-외-전화번호-이동)
- [자주 묻는 질문](#자주-묻는-질문)

## 전화번호 이동 전 준비사항

다음 정보와 접근 권한을 확보하세요:

**미국 번호:**
- Twilio Account SID (LC→Twilio의 경우 대상 SID, Twilio→LC의 경우 원본 SID)
- 대상 하위 계정 ID (번호가 이동할 위치)
- E.164 형식의 전화번호 (예: +1XXXXXXXXXX)

**해외 번호:**
- Regulatory Bundle SID (Account SID 대신)
- Address SID
- 대상 하위 계정 ID (해당하는 경우)
- 국가 정보가 포함된 전화번호

## 미국 전화번호 이동

LC→Twilio, Twilio→LC, LC→LC(다른 에이전시) 세 가지 이동 모두 동일한 흐름을 따릅니다. 먼저 해당 케이스에 맞는 소유권/대상을 증명하는 Twilio 자격 증명을 수집한 후, 세부 정보와 전환 시간대를 포함하여 Hyperclass 고객지원 티켓을 생성합니다. 저희가 마이그레이션을 처음부터 끝까지 조율하므로 Twilio 티켓은 필요하지 않습니다.

**시작 전 준비사항:**
- 미국 번호: 관련 Twilio Account SID (LC→Twilio의 경우 대상, Twilio→LC의 경우 원본), 대상 하위 계정 ID, 전화번호
- 해외 번호: Regulatory Bundle SID, Address SID, 전화번호 (국가 포함)

### 1단계: Twilio 자격 증명 수집 (필요한 경우)

이 정보는 Twilio Console의 Account Info 섹션에서 찾을 수 있습니다.

- LC → Twilio: 대상 Twilio Account SID (목적지 Twilio)
- Twilio → LC: 원본 Twilio Account SID (현재 Twilio)
- LC → LC (다른 에이전시): 이 경우 Twilio 자격 증명이 필요하지 않습니다.

![Twilio Console Account Info](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054160307/original/o5oSPy13Wa2SCDElTiah8rlKOI8s74LdwQ.jpeg?1758293602)

### 2단계: 전화번호가 속한 로케이션 ID 확인 (또는 전화번호를 이전할 위치)

Hyperclass 계정에서 Settings(설정) → Business Profile(비즈니스 프로필)로 이동하여 전화번호를 보유한 LC Phone 하위 계정의 Sub-account ID(Location ID라고도 함)를 찾습니다.

![Location ID 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054160913/original/MuHzpQF5_gS-jMkoIU47bJNg2hvRs4tLqA.png?1758293832)

### 3단계: Hyperclass 고객지원 티켓 생성

이 티켓으로 마이그레이션이 시작됩니다. 전화번호, 관련 대상/원본 Twilio Account SID, 대상 하위 계정 ID, 그리고 원하는 전환 시간대를 포함해서 티켓을 생성하세요. Hyperclass 고객지원팀이 모든 것을 예약하고 조율한 후, 번호가 활성화되면 확인 알림을 드립니다(Twilio 티켓 불필요).

![고객지원 티켓 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045972735/original/ruMK9XOl0NIlCzM2UaF8MuauyxRqZpVpiw.gif?1746109415)

## 해외(미국 외) 전화번호 이동

해외 번호 이동은 미국 번호와 동일한 2단계 흐름을 따르지만, Twilio Account SID 대신 규제 자격 증명을 사용합니다. 해당 번호의 국가 및 번호 유형(지역 또는 무료 전화)에 적용되는 Regulatory Bundle SID와 Address SID를 수집한 후, 위와 동일한 프로세스를 따르세요.

**사전 점검 (권장):** 번들이 승인되고 최신 상태인지, 문서가 유효한지, 그리고 대상에 대한 국가별 발신자 ID/등록(예: 영숫자 발신자 ID, 현지 온보딩, 긴급 주소)이 준비되어 있는지 확인하세요.

**참고**: 참조용 마이그레이션 가이드가 있습니다. 자세한 내용은 [전화번호 이동: 마이그레이션 가이드](일반/moving-phone-numbers-migration-guide.md)를 참조하세요.

## 자주 묻는 질문

**Q. 마이그레이션에 얼마나 걸리나요?**
Hyperclass 고객지원팀이 모든 필수 ID(대상/원본 Twilio Account SID, 대상 하위 계정 ID)와 번호 목록을 받은 시점부터 1-2 영업일이 소요됩니다. 전환 시간대를 확인하고 번호가 활성화되면 알려드립니다.

**Q. 여러 번호를 한 번에 이동할 수 있나요?**
네. 티켓에 단일 목록(CSV 또는 인라인)을 포함하고 전환 후 각 번호를 확인하세요.

**Q. A2P/무료전화 승인이 자동으로 이전되나요?**
항상 그렇지는 않습니다. 이동 후 번호가 올바른 브랜드/캠페인 또는 무료전화 인증에 연결되어 있는지 확인하세요.

**Q. 과거 녹음/음성메일이 마이그레이션되나요?**
아니요. 향후 자산만 전환 후 번호를 따릅니다. 보관해야 할 기록 항목은 다운로드하세요.

**Q. 롤백이 필요하면 어떻게 하나요?**
전환 시간대 동안 즉시 티켓에 답장하세요. 실행 가능 여부는 통신사와 타이밍에 따라 달라집니다.

---
*원문 최종 수정: Fri, 19 Sep, 2025 at 10:20 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*