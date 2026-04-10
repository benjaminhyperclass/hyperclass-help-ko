---

번역일: 2026-04-08
카테고리: 15-전화-시스템 > 전화번호
---

# 사용자에게 LC 전화번호 배정하는 방법

## 개요

이 가이드는 시스템의 개별 사용자에게 전용 LC 번호를 배정하는 방법을 설명합니다. 이 과정을 통해 해당 번호로 들어오는 모든 전화를 특정 사용자에게 라우팅할 수 있습니다.

---

# 사용자에게 LC 번호 배정하는 단계

## 방법 1

### 1단계: 번호 구매 및 추가

Twilio 번호를 구매한 후:

- Location Settings(로케이션 설정) > Phone Numbers(전화번호)로 이동합니다.
- "Add Number(번호 추가)"를 클릭하여 시스템에 새 번호를 추가합니다.

![LC 전화번호 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048703167/original/F4a_7MezN-smLozzacoydv-ChArjGruIyw.png?1750673841)

### 2단계: 사용자에게 번호 배정

- My Staff(내 직원)으로 이동합니다.
- 번호가 필요한 특정 사용자 프로필을 편집합니다.

![사용자 프로필 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048701574/original/-pvx7v1JGE3eXk4KCmTVd_DGMQ610HbFOQ.png?1750672693)

![사용자 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048701764/original/_4y-imwVcNL_-gWf7FkBht_y0hEqoln1kQ.png?1750672838)

### 3단계: 통화 설정 구성

- Call & Voicemail Settings(통화 및 음성메일 설정) 섹션을 확장합니다.
- Inbound Number(수신 번호) 드롭다운을 사용하여 방금 추가한 LC 번호를 선택합니다.

**중요 참고사항:** LC 번호 하나는 한 명의 사용자에게만 배정할 수 있습니다. 배정되면 해당 LC 번호로 들어오는 모든 통화가 지정된 사용자에게 연결됩니다.

![통화 설정 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048702342/original/ybdKkaJdDtH89asBcAfh6lek-MvRislY7g.png?1750673267)

## 방법 2

**Phone Numbers(전화번호)** 섹션으로 직접 이동하여 '**Ring All**' 카테고리에서 사용자를 선택하면 연락처 통화를 해당 사용자에게 라우팅할 수 있습니다.

![Ring All 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048704061/original/qpsp_9gzFBt_jsSW5lsepCLTih1wknbi3Q.png?1750674468)

## 방법 3

연락처 레코드에서 직접 사용자를 배정할 수도 있습니다. 연락처로 이동하여 '**Unassigned User(배정되지 않은 사용자)**'를 선택한 후 적절한 사용자를 선택하세요.

![연락처에서 사용자 배정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048704530/original/MuVpBEijkZR8dyOFbaQrudlxQ8940b4uUA.png?1750674742)

---

# 자주 묻는 질문

### Q) 한 사용자에게 여러 개의 LC 번호를 배정할 수 있나요?

A) 아니요, 직접 라우팅을 위해서는 한 번에 한 사용자에게 하나의 LC 번호만 배정할 수 있습니다.

### Q) 하나의 LC 번호를 몇 명의 사용자가 공유할 수 있나요?

A) 한 번에 하나의 LC 번호에는 한 명의 사용자만 배정할 수 있습니다. 배정되면 해당 번호로 오는 모든 통화가 해당 사용자에게만 연결됩니다.

---
*원문 최종 수정: Mon, 23 Jun, 2025 at 6:20 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*