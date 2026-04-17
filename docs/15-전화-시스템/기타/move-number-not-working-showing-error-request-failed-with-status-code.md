---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 하위 계정 간 전화번호 이동 (동일 에이전시)

이 가이드는 단일 에이전시 내에서 하위 계정 간에 전화번호를 이동하는 방법을 설명합니다. Settings(설정) → Phone Integration(전화 연동)의 내장된 Move Numbers(번호 이동) 도구를 사용하며, LC Phone → LC Phone 및 Twilio → Twilio (동일 마스터 계정) 이동을 다룹니다. 일반적인 오류와 앱 내 이동이 불가능한 경우의 대처법도 포함되어 있습니다 ([전화번호 이동: 마이그레이션 가이드](../일반/moving-phone-numbers-migration-guide.md) 참조).

---

**목차**

- [Move Numbers란 무엇인가요?](#move-numbers란-무엇인가요)
- [시작하기 전에](#시작하기-전에)
- [하위 계정 간 번호 이동](#하위-계정-간-번호-이동)
- [1단계: 번호 이동](#1단계-번호-이동)
- [2단계: 소스 및 대상 하위 계정과 이동할 전화번호 선택](#2단계-소스-및-대상-하위-계정과-이동할-전화번호-선택)
- [문제 해결 및 알려진 제한사항](#문제-해결-및-알려진-제한사항)
- [자주 묻는 질문](#자주-묻는-질문)

---

## **Move Numbers란 무엇인가요?**

Move Numbers는 Settings(설정) → Phone Integration(전화 연동)에 있는 앱 내 워크플로우로, **동일 에이전시 내에서** 기존 전화번호를 **소스** 하위 계정에서 **대상** 하위 계정으로 재할당하는 기능입니다. 지원 여부는 다음과 같습니다:

- **LC Phone ↔ LC Phone (동일 에이전시):** 앱 내 지원
- **Twilio ↔ Twilio (동일 Twilio 마스터 계정):** 앱 내 지원
- **다른 Twilio 마스터 계정:** 앱 내 미지원—**Twilio 지원팀**에 문의하세요
- **지역:** 앱 내 도구는 현재 **미국 및 캐나다** 번호를 지원합니다. 다른 국가는 **HighLevel 지원팀** 티켓을 생성해 주세요
- **A2P:** A2P 상태는 하위 계정 수준에 있으며 전화번호와 함께 **이동되지 않습니다**. 이동 후 올바른 브랜드/캠페인을 다시 연결하세요

---

## **시작하기 전에**

- **소스** 및 **대상** 하위 계정에 대한 관리자 접근 권한이 있는지 확인하세요
- **대상 Location ID** (하위 계정 ID)를 확인하세요: **Settings(설정) → Business Profile(비즈니스 프로필)**
- 현재 번호가 사용하는 전화 시스템을 확인하세요:

**LC Phone** (LeadConnector)

- 에이전시 레벨에서 연결된 **Twilio**

---

## **하위 계정 간 번호 이동**

### 1단계: 번호 이동

에이전시 Settings(설정) → Phone Integration(전화 연동)으로 이동합니다. Sub-account Settings(하위 계정 설정) 하에서 **Move Numbers(번호 이동)**를 클릭하세요.

![번호 이동 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054686537/original/1dFVtkd41G6bPk1bHpYSwn3bBHjHlTSbGg.png?1758893164)

### **2단계:** 소스 및 대상 하위 계정과 이동할 전화번호 선택

대상 하위 계정을 선택하고(이름으로 검색하거나 Location ID를 붙여넣기), 이동하려는 전화번호를 선택하세요.

![번호 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054686910/original/pPuOpFCGTIs7tpQeQM2smfPcuSnqgEMocQ.png?1758893369)

**참고사항:** 요약을 검토한 후 Move Numbers(번호 이동)를 클릭하여 이전을 시작하세요. 완료되면 대상 하위 계정에 번호가 나타납니다. 이동 후 번호별 설정(착신 전환, 녹음, 위스퍼 등)을 다시 확인하세요. 필요에 따라 통화/SMS 플로우, 자동화, 사용자 배정을 확인하세요.

---

## **문제 해결 및 알려진 제한사항**

**Move Numbers(번호 이동)** 작업이 불가능하거나 실패하는 일반적인 원인은 다음과 같습니다:

- 다른 Twilio 마스터 계정: 다른 Twilio 마스터 하에 있는 번호는 앱 내에서 이동할 수 없습니다. 이 경우 Twilio 지원팀에 문의하세요
- 규제 구성 누락(국제): 일부 국가(예: 호주 +61)는 **대상**에 승인된 **Regulatory Bundles**과 **Address SID**가 필요합니다. 먼저 이를 구성한 후 관련 마이그레이션 가이드를 따르세요
- 제공업체 불일치: **Twilio ↔ LC Phone** 변환을 하는 경우, 앱 내 이동 대신 전용 [변환 아티클](../일반/moving-phone-numbers-migration-guide.md)을 따르세요
- 국가 지원(미국 및 캐나다만 앱 내 지원): 앱 내 도구는 현재 **미국 및 캐나다** 번호를 이동합니다. 다른 국가는 **HighLevel 지원팀** 티켓을 생성해 주세요

---

## **자주 묻는 질문**

**Q. 여러 번호를 한 번에 이동할 수 있나요?**
네—**Move Numbers(번호 이동)**에서 여러 번호를 선택하세요.

**Q. Twilio에 연락해야 하나요?**
앱 내 하위 계정 이동의 경우 필요하지 않습니다. 에이전시 간 이동이나 제공업체 변환의 경우 링크된 가이드를 따르고 HighLevel 지원팀에 문의하세요.

**Q. A2P/Toll-Free 승인이 자동으로 이전되나요?**
이동 후 번호가 대상에서 올바른 브랜드/캠페인 또는 Toll-Free 인증에 연결되어 있는지 확인하세요.

---
*원문 최종 수정: Fri, 26 Sep, 2025 at 8:36 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*