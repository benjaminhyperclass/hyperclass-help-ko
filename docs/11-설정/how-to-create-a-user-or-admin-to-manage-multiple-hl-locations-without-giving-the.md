---

번역일: 2026-04-06
카테고리: 11-설정
---

# 에이전시 접근 권한 없이 여러 하위 계정을 관리할 사용자 또는 관리자 만드는 방법

이 글에서는 계정 수준에서 사용자를 생성하거나 업데이트하여 에이전시 대시보드 접근 권한 없이도 여러 하위 계정을 관리할 수 있게 하는 방법을 설명합니다. 올바른 역할 지정, 접근 설정 구성, 새로운 Hyperclass 인터페이스를 활용한 권한 관리 방법을 알아보겠습니다.

---

**목차**

- [계정 사용자/관리자 역할이란?](#계정-사용자관리자-역할이란)
- [계정 수준 접근의 주요 장점](#계정-수준-접근의-주요-장점)
- [계정 수준 사용자 및 관리자 구성하기](#계정-수준-사용자-및-관리자-구성하기)
- [자주 묻는 질문](#자주-묻는-질문)
---

# **계정 사용자/관리자 역할이란?**

계정 수준 사용자와 관리자는 선택된 하위 계정에만 접근할 수 있도록 제한됩니다. 에이전시 수준 사용자와 달리, 전체 에이전시에 대한 가시성이나 제어 권한이 없습니다. 이런 설정은 민감한 에이전시 전체 설정에 영향을 주지 않으면서도 팀원들이 여러 로케이션에 접근할 수 있게 할 때 이상적입니다.

---

## 계정 수준 접근의 주요 장점

- **세밀한 권한 제어**: 필요한 로케이션에만 접근을 제한할 수 있습니다.
- **안전한 권한 위임**: 불필요한 에이전시 전체 가시성을 제공하지 않습니다.
- **유연한 관리**: 필요한 기능에 따라 사용자를 Admin 또는 User로 추가할 수 있습니다.

---

## **계정 수준 사용자 및 관리자 구성하기**

### 에이전시 뷰로 전환하기

대시보드 왼쪽 상단의 로케이션 드롭다운을 클릭한 후 Switch to Agency View(에이전시 뷰로 전환)를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047005888/original/7m5Xsq4ID_7Ja28IeycWsohx_24Alv59fQ.png?1747834337)

### Settings(설정) > Team(팀)으로 이동하기

에이전시 뷰 사이드바에서 아래로 스크롤하여 Settings(설정)를 클릭한 후 Team(팀) 탭을 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047006180/original/R38SE1gnJuDtm9UzpU-l0Hl0K5CM6S9dYw.png?1747834578)

### 사용자 추가 또는 편집하기

우측 상단의 **+ Add User(사용자 추가)** 버튼을 클릭하거나, 기존 사용자 옆의 연필 아이콘을 클릭하여 설정을 편집하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047006208/original/rE3G6BwuJ04Tyi9aAJZrsXNc9c0m4b17nA.png?1747834607)

### 사용자 타입을 Account로 설정하기

Roles and Permissions(역할 및 권한)에서 User Type(사용자 타입)을 Account(계정)로 설정하세요. 이렇게 하면 해당 사용자가 에이전시 수준 접근 권한을 갖지 않게 됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047006294/original/Yp3WKEEdIDhOmta5EqChijkv_9reSB9deA.png?1747834679)

### 사용자 역할 및 로케이션 지정하기

- User Role(사용자 역할)에서 User(사용자) 또는 Admin(관리자) 중 선택하세요.
- 검색 필드를 사용하여 사용자가 접근해야 하는 하나 이상의 하위 계정을 지정하세요.
- 토글 스위치를 사용하여 필요에 따라 기능별 권한을 구성하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047006332/original/BvYl1tSFO1CTY8aJII62eTCnjJT70GmObA.png?1747834716)

### **사용자 저장하기**

접근 설정 구성을 완료했으면 **Save(저장)** 버튼을 클릭하여 설정을 완료하세요.

---

## **자주 묻는 질문**

**Q: 한 사용자가 여러 로케이션을 관리할 수 있나요?**
네. 하위 계정 접근 권한을 지정할 때 여러 로케이션을 선택할 수 있습니다.

**Q: Account User와 Account Admin의 차이점은 무엇인가요?**
계정 관리자(Account Admin)는 지정된 하위 계정 내에서 대부분의 설정을 관리할 수 있는 반면, 사용자(User)는 일반적으로 토글 권한에 따라 제한된 접근 권한을 갖습니다.

**Q: 기존 계정 사용자를 나중에 관리자로 승격시킬 수 있나요?**
네. Settings(설정) > Team(팀)에서 해당 사용자를 편집하여 역할을 User에서 Admin으로 업데이트할 수 있습니다.

**Q: Account 사용자가 에이전시 대시보드에 접근할 수 있나요?**
아니요. 사용자 타입을 Account로 설정하면 해당 사용자는 에이전시 수준 인터페이스에 접근할 수 없습니다.

**Q: 사용자에게 초대 이메일이 발송되나요?**
네. 저장되면 사용자의 이메일로 초대장이 발송되어 지정된 하위 계정에 가입하고 접근할 수 있게 됩니다.

---
*원문 최종 수정: Wed, 21 May, 2025 at 8:41 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*