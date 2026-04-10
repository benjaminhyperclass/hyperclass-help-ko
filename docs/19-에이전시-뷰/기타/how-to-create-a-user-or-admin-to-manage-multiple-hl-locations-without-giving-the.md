---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 에이전시 권한 없이 여러 HL 로케이션을 관리할 사용자 또는 관리자를 생성하는 방법

이 문서는 계정 레벨에서 사용자를 생성하거나 업데이트하여 에이전시 대시보드 접근 권한을 부여하지 않고도 여러 Hyperclass 하위 계정을 관리할 수 있게 하는 방법을 설명합니다. 올바른 역할 할당, 접근 설정 구성, 새로운 Hyperclass 인터페이스를 사용한 권한 관리 방법을 배울 수 있습니다.

---

**목차**

- [계정 사용자/관리자 역할이란?](#계정-사용자관리자-역할이란)
- [계정 레벨 접근의 주요 장점](#계정-레벨-접근의-주요-장점)
- [계정 레벨 사용자 및 관리자 구성](#계정-레벨-사용자-및-관리자-구성)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **계정 사용자/관리자 역할이란?**

계정 레벨 사용자 및 관리자는 선택된 하위 계정으로만 접근이 제한됩니다. 에이전시 레벨 사용자와 달리 전체 에이전시에 대한 가시성이나 제어권은 없습니다. 이 설정은 팀원에게 민감한 에이전시 전체 설정을 손상시키지 않으면서 여러 로케이션에 대한 접근 권한을 부여하기에 이상적입니다.

---

## 계정 레벨 접근의 주요 장점

- 세밀한 권한: 필요한 로케이션에만 접근을 제한
- 안전한 권한 위임: 불필요한 에이전시 전체 가시성 방지
- 유연한 관리: 필요한 기능에 따라 관리자 또는 사용자로 추가

---

## **계정 레벨 사용자 및 관리자 구성**

### 에이전시 보기로 전환

대시보드 좌측 상단의 로케이션 드롭다운을 클릭한 후 "에이전시 보기로 전환(Switch to Agency View)"을 선택합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047005888/original/7m5Xsq4ID_7Ja28IeycWsohx_24Alv59fQ.png?1747834337)

### 설정(Settings) > 팀(Team)으로 이동

에이전시 보기 사이드바에서 아래로 스크롤하여 설정(Settings)을 클릭한 후 팀(Team) 탭을 선택합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047006180/original/R38SE1gnJuDtm9UzpU-l0Hl0K5CM6S9dYw.png?1747834578)

### 사용자 추가 또는 편집

우측 상단의 **+ 사용자 추가(Add User)** 버튼을 클릭하거나, 기존 사용자 옆의 연필 아이콘을 클릭하여 설정을 편집합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047006208/original/rE3G6BwuJ04Tyi9aAJZrsXNc9c0m4b17nA.png?1747834607)

### 사용자 유형을 계정으로 설정

역할 및 권한(Roles and Permissions) 섹션에서 사용자 유형(User Type)을 계정(Account)으로 설정합니다. 이를 통해 해당 사용자가 에이전시 레벨 접근 권한을 갖지 않도록 보장합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047006294/original/Yp3WKEEdIDhOmta5EqChijkv_9reSB9deA.png?1747834679)

### 사용자 역할 및 로케이션 할당

- 사용자 역할(User Role) 섹션에서 사용자(User) 또는 관리자(Admin) 중 선택합니다.
- 검색 필드를 사용하여 사용자가 접근해야 하는 하나 이상의 하위 계정을 할당합니다.
- 토글 스위치를 사용하여 필요에 따라 기능별 권한을 구성합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047006332/original/BvYl1tSFO1CTY8aJII62eTCnjJT70GmObA.png?1747834716)

### **사용자 저장**

접근 설정 구성을 완료한 후 **저장(Save)** 버튼을 클릭하여 설정을 완료합니다.

---

## **자주 묻는 질문**

**Q: 한 사용자가 둘 이상의 로케이션을 관리할 수 있나요?**
예. 하위 계정 접근 권한을 할당할 때 여러 로케이션을 선택할 수 있습니다.

**Q: 계정 사용자(Account User)와 계정 관리자(Account Admin)의 차이점은 무엇인가요?**
계정 관리자는 할당된 하위 계정 내에서 대부분의 설정을 관리할 수 있는 반면, 사용자는 일반적으로 토글된 권한에 따라 제한된 접근 권한을 갖습니다.

**Q: 기존 계정 사용자를 나중에 관리자로 승격시킬 수 있나요?**
예. 설정(Settings) > 팀(Team)에서 사용자를 편집하여 역할을 사용자에서 관리자로 업데이트할 수 있습니다.

**Q: 계정 사용자가 에이전시 대시보드에 접근할 수 있나요?**
아니요. 사용자 유형을 계정으로 설정하면 해당 사용자가 에이전시 레벨 인터페이스에 접근할 수 없도록 보장합니다.

**Q: 사용자가 초대 이메일을 받나요?**
예. 저장이 완료되면 사용자의 이메일로 초대장이 발송되어 할당된 하위 계정에 가입하고 접근할 수 있습니다.

---
*원문 최종 수정: Wed, 21 May, 2025 at 8:41 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*