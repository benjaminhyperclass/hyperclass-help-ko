---

번역일: 2026-04-08
카테고리: 35-개발자 > Developer Resources
---

# 개발자 사용자 계정 관리하는 방법

이 가이드에서는 역할 기반 접근 제어(RBAC) 시스템을 사용하여 개발자 계정 내에서 사용자를 관리하는 방법을 설명합니다. 이 기능을 통해 마켓플레이스 계정에 사용자를 추가하고 특정 권한이 있는 적절한 역할을 할당할 수 있습니다.

![개발자 사용자 계정 관리 개요](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026365122/original/9RYF3boWwCVSC0niPypZZHAhI9zZkl9ANQ.png?1716300886)

## 목차

- [역할과 권한 이해하기](#역할과-권한-이해하기)
  - [역할과 권한](#역할과-권한)
  - [각 역할의 최대 허용 권한](#각-역할의-최대-허용-권한)
- [사용자 역할과 권한 관리하기](#사용자-역할과-권한-관리하기)
  - [사용자 추가하기](#사용자-추가하기)
  - [사용자 권한 편집하기](#사용자-권한-편집하기)
  - [사용자 삭제하기](#사용자-삭제하기)

## 역할과 권한 이해하기

RBAC 시스템은 개발자 사용자를 Owner(소유자), Admin(관리자), User(사용자) 세 가지 역할로 분류합니다. 각 역할은 개발자 계정 내에서 적절한 접근 수준을 보장하기 위해 고유한 권한 세트를 갖습니다.

### 역할과 권한

**Owner(소유자):**
- 가입한 초기 사용자가 소유자로 지정됩니다
- 계정당 소유자는 한 명만 가능합니다
- 모든 기능과 설정에 대한 전체 접근 권한을 갖습니다
- 소유권을 이전할 수 없습니다

**Admin(관리자):**
- 소유자와 유사하지만 소유자의 세부 정보는 수정할 수 없습니다
- 다른 관리자와 사용자를 관리할 수 있습니다

**User(사용자):**
- 관리자와 소유자에 비해 제한된 접근 권한을 갖습니다
- 아래에 자세히 설명된 특정 작업으로 제한됩니다

### 각 역할의 최대 허용 권한

| 권한 | Owner(소유자) | Admin(관리자) | User(사용자) |
|------|---------------|---------------|--------------|
| 앱 보기 | 예 | 예 | 예 |
| 앱 생성 및 관리 | 예 | 예 | 예 |
| 앱 삭제 | 예 | 예 | 아니오 |
| 검토 요청 | 예 | 예 | 예 |
| 앱 수익 보기 | 예 | 예 | 아니오 |
| 사용자 생성 및 관리 | 예 | 예 | 아니오 |
| 앱 대시보드 보기 | 예 | 예 | 예 |

## 사용자 역할과 권한 관리하기

### 사용자 추가하기

1. **Account(계정) > User Management(사용자 관리)**로 이동합니다

![사용자 관리 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026365055/original/Zn5AXl_TarMPDMaFtFE8untZfN7hLCf5sA.png?1716300828)

2. **Add User(사용자 추가)** 버튼을 클릭합니다

![사용자 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026367656/original/mOt4O6VMNygP0OokmPF3YoY0cldDLwBmWg.png?1716302515)

3. 새 사용자의 이메일을 포함한 세부 정보를 입력하고 역할(Admin 또는 User)을 할당합니다

4. 사용 가능한 옵션을 토글하여 필요에 따라 권한을 조정합니다

5. **Submit(제출)**을 클릭하여 사용자를 추가합니다

![사용자 추가 양식](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026366473/original/6Z4iTea20923jYmNvqpd3t09ZQ44FOnUzA.png?1716301669)

6. 사용자는 활성화 링크가 포함된 이메일을 받게 됩니다. 링크를 클릭한 후 비밀번호를 설정하라는 메시지가 표시됩니다. 비밀번호가 설정되면 개발자 계정을 사용할 준비가 완료됩니다.

![사용자 활성화 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026369771/original/W-6cfN_-vD5atmTjreulp5xC6DCV42c02w.png?1716303836)

### 사용자 권한 편집하기

- **소유자 또는 관리자**는 모든 사용자의 권한을 수정할 수 있습니다(관리자는 소유자 세부 정보를 수정할 수 없음)
- Users(사용자) 섹션에서 사용자 프로필로 이동하여 메뉴 옵션에서 **'Edit User(사용자 편집)'**를 클릭합니다
- 사용 가능한 옵션을 토글하여 필요에 따라 권한을 조정합니다
- **Save(저장)**를 클릭하여 변경 사항을 적용합니다

![사용자 권한 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026373160/original/X9ukZpyFZE_hIYbPyuKRQstj9bBOkRSPTw.png?1716306242)

### 사용자 삭제하기

- 사용자를 삭제하려면 Users(사용자) 섹션에서 사용자 프로필로 이동하여 메뉴 옵션에서 **'Remove User(사용자 제거)'**를 클릭합니다
- **참고:** 소유자와 관리자만 사용자를 삭제할 수 있습니다. 일반 사용자는 다른 사용자를 삭제할 수 없습니다

![사용자 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026373225/original/vxIbXlBcLgf8sBD7c6cTqjP03WX1h2PgPw.png?1716306308)

---
*원문 최종 수정: Tue, 21 May, 2024 at 1:43 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*