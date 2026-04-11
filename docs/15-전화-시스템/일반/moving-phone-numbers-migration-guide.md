---

번역일: 2026-04-08
카테고리: 15-전화-시스템 > 일반
---

# 전화번호 이전: 마이그레이션 가이드

이 가이드는 기존 전화번호를 올바른 곳으로 이전하여 Hyperclass에서 전화와 SMS가 계속 작동하도록 도와드립니다. 아래 의사결정 트리를 사용해 경로를 선택한 후, 단계를 따라 진행하세요. 이 가이드를 통해:

- 미국 번호와 국제 번호에 필요한 사항을 이해할 수 있습니다
- 2단계 프로세스가 어떻게 작동하는지 한눈에 볼 수 있습니다
- 간단한 단계별 지침을 위해 정확한 케이스 문서로 바로 이동할 수 있습니다

**중요**: 더 이상 Twilio 지원 티켓을 열 필요가 없습니다. Hyperclass 지원팀이 마이그레이션을 처음부터 끝까지 조율합니다.

---

**목차**

- [전화번호 이전](#전화번호-이전)
- [케이스 1: LC → Twilio](#케이스-1-lc-→-twilio)
- [케이스 2: Twilio → LC (LeadConnector)](#케이스-2-twilio-→-lc-leadconnector)
- [케이스 3: LC → LC (다른 에이전시의 하위 계정)](#케이스-3-lc-→-lc-다른-에이전시의-하위-계정)
- [케이스 4: LC → LC (같은 에이전시의 하위 계정)](#케이스-4-lc-→-lc-같은-에이전시의-하위-계정)
- [케이스 5: Twilio가 아닌 전화번호를 Hyperclass(LC)로 포팅](#케이스-5-twilio가-아닌-전화번호를-hyperclasslc로-포팅)
- [자주 묻는 질문](#자주-묻는-질문)

---

## **전화번호 이전**

이 가이드는 Hyperclass에서 가능한 모든 번호 이전 사례(LC→Twilio, Twilio→LC, LC→LC(같은 에이전시), LC→LC(다른 에이전시), Twilio가 아닌 통신사 번호를 LC로 포팅)를 다루며, 한 곳에서 필수 사항을 설명합니다: 올바른 식별자를 수집하고(미국: Twilio Account SID, LC→Twilio의 경우 수신용, Twilio→LC의 경우 송신용—플러스 목적지 하위 계정 ID; 국제: Regulatory Bundle SID 및 Address SID) Hyperclass 지원 티켓을 엽니다. 저희가 처음부터 끝까지 조율하며, 짧은 전환 중단이 있을 수 있습니다.

필요한 ID와 번호를 수집한 후, 해당 세부 정보와 선호하는 전환 시간대를 포함하여 Hyperclass 지원 티켓을 엽니다. 저희가 마이그레이션을 조율하고 트래픽이 활성화되면 확인해드립니다. 완료 후 간단한 인바운드/아웃바운드 전화 및 SMS 테스트를 진행하세요.

5가지 케이스를 다룹니다:

- LC (LeadConnector) → Twilio
- Twilio → LC (LeadConnector)
- LC → LC (다른 에이전시의 두 하위 계정)
- LC → LC (같은 에이전시의 하위 계정)
- Twilio가 아닌 전화번호를 Hyperclass로 포팅

**시작하기 전**: 미국 번호: 관련 Twilio Account SID(LC→Twilio의 경우 수신용, Twilio→LC의 경우 송신용), 목적지 하위 계정 ID, 전화번호를 준비하세요. 국제 번호: Regulatory Bundle SID, Address SID, 전화번호(국가 포함)를 준비하세요.

---

## **케이스 1: LC → Twilio**

LeadConnector(LC)에서 귀하의 Twilio로 번호를 이전할 때 사용합니다. **미국 번호**의 경우, 수신 Twilio Account SID, 목적지 서브어카운트(사용하는 경우), 전화번호를 포함하세요.

**국제 번호**의 경우, Account SID 대신 Regulatory Bundle SID와 Address SID, 그리고 전화번호를 제공하세요. 이러한 세부 정보와 선호하는 전환 시간대를 포함하여 Hyperclass 지원 티켓을 엽니다. 저희가 마이그레이션을 조율하고 Twilio에서 트래픽이 활성화되면 확인해드립니다.

자세한 내용은 [전화번호 이전](moving-phone-numbers-from-lc-phone-to-twilio-us-international-.md)을 참조하세요.

---

## 케이스 2: Twilio → LC (LeadConnector)

Twilio에서 LeadConnector(LC)로 번호를 이전할 때 사용합니다. **미국 번호**의 경우, 송신 Twilio Account SID, 목적지 Hyperclass 하위 계정 ID, 전화번호를 포함하세요.

**국제 번호**의 경우, Account SID 대신 Regulatory Bundle SID와 Address SID, 그리고 전화번호를 포함하세요. 이러한 세부 정보와 선호하는 전환 시간대를 포함하여 Hyperclass 지원 티켓을 엽니다. 저희가 이전을 처리하고 테스트할 준비가 되면 알려드립니다.

자세한 내용은 [전화번호 이전](moving-phone-numbers-from-lc-phone-to-twilio-us-international-.md)을 참조하세요.

---

## 케이스 3: LC → LC (다른 에이전시의 하위 계정)

두 개의 서로 다른 Hyperclass 에이전시 간에 번호를 이전할 때 사용합니다. 미국 이전의 경우 관련 Twilio Account SID를(국제의 경우 Regulatory Bundle SID + Address SID), 목적지 에이전시 및 하위 계정 ID, 전화번호를 제공하세요. 이러한 세부 정보와 선호하는 전환 시간대를 포함하여 Hyperclass 지원 티켓을 엽니다. 저희가 에이전시 간 이전을 조율하고 목적지 계정에서 번호가 활성화되면 확인해드립니다.

자세한 내용은 [전화번호 이전](moving-phone-numbers-from-lc-phone-to-twilio-us-international-.md)을 참조하세요.

중요: 현재 케이스 1(LC→Twilio), 케이스 2(Twilio→LC), 케이스 3(LC→LC — 에이전시가 다른 경우)는 **같은 프로세스를 따릅니다.** 고객은 적절한 Twilio Account SID만 제공하면 됩니다—Twilio로 이전할 때는 수신 SID, Twilio에서 이전할 때는 송신 SID—플러스 목적지 하위 계정 ID와 전화번호. Hyperclass 지원팀이 마이그레이션을 처음부터 끝까지 조율합니다. 국제 번호의 경우, Account SID 대신 Regulatory Bundle SID와 Address SID를 제공하세요.

---

## **케이스 4: LC → LC (같은 에이전시의 하위 계정)**

하나의 Hyperclass 에이전시 내에서 두 LC 하위 계정 간에 번호를 전송할 때 사용합니다. Hyperclass 내에서 번호 이전 도구(Settings(설정) → Phone Integration(전화 연동))를 사용하면 원본 번호를 선택하고, 목적지 하위 계정을 선택하여 전송을 완료할 수 있습니다. LC Phone↔LC Phone 및 같은 Twilio 마스터 하에 있는 Twilio 연결 하위 계정과의 전송을 지원하며, Twilio 마스터 불일치나 규제 번들/주소 누락과 같은 일반적인 차단 요인에 대한 참고사항을 제공합니다. LC Phone→LC Phone의 경우 내장 도구가 실패하면 원본 및 목적지 로케이션 ID를 포함하여 Hyperclass 지원팀에 문의하시면 도움을 드립니다.

자세한 내용은 [하위 계정 간 번호 이전](moving-numbers-across-sub-accounts.md)을 참조하세요.

---

## 케이스 5: Twilio가 아닌 전화번호를 Hyperclass(LC)로 포팅

번호가 Twilio가 아닌 통신사에 있고 LeadConnector(LC)에서 관리하고 싶을 때 사용합니다. 번호와 연결된 가이드에서 요청된 통신사 서류를 수집한 후, 원하는 전환 시간대와 함께 Hyperclass 지원 티켓을 엽니다. 저희가 포팅 프로세스를 관리하고 테스트할 준비가 되면 알려드립니다.

자세한 내용은 [전화번호 포팅(Twilio가 아닌 번호)을 로케이션/서브어카운트로]([porting-your-phone-number-non-twilio-number-to-a-location-subaccount](porting-your-phone-number-non-twilio-number-to-a-location-subaccount.md))를 참조하세요.

---

## **자주 묻는 질문**

**Q. 연락처, 대화, 분석 데이터가 번호와 함께 이전되나요?**
아니요. 마이그레이션은 번호 소유권/라우팅만 변경합니다. 전환 전에 보관이 필요한 데이터는 내보내기/다운로드하세요.

**Q. 과거 통화 녹음과 음성메일이 마이그레이션되나요?**
아니요. 향후 녹음/음성메일은 전환 후 번호를 따라갑니다. 보관이 필요한 기록 자산은 다운로드하세요.

**Q. A2P/Toll-Free 승인이 자동으로 전송되나요?**
항상 그렇지는 않습니다. 이전 후 번호가 올바른 브랜드/캠페인 또는 Toll-Free 확인에 연결되었는지 확인하세요.

**Q. 여러 번호를 한 번에 이전할 수 있나요?**
예. 티켓에 단일 목록(CSV 또는 인라인)을 포함하고 전환 후 각 번호를 검증하세요.

**Q. 롤백이 필요하면 어떻게 하나요?**
전환 기간 중 즉시 티켓에 답장하세요. 롤백 옵션은 통신사와 타이밍에 따라 달라집니다.

---
*원문 최종 수정: Fri, 19 Sep, 2025 at 9:25 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*