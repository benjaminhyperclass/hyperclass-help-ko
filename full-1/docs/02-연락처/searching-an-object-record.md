---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003913-searching-an-object-record
번역일: 2026-11-07
카테고리: 02-연락처
---

# 오브젝트 레코드 검색에 쓸 필드 설정하기

관리자는 서브 계정에서 검색에 쓸 필드를 직접 정할 수 있어요. 한 번 바꾸면 모든 사용자에게 적용되고, 해당 오브젝트를 검색하는 모든 곳에 반영돼요.

[동영상](https://www.youtube.com/embed/Y_U10AS9J0c?&wmode=opaque)

## 검색 가능 필드 설정하기

관리자는 **연락처**, **기회 관리**(Opportunities), 커스텀 오브젝트 같은 오브젝트에서 검색에 쓸 필드를 바꿀 수 있어요. 특정 필드에는 정규식(regex) 검색도 쓸 수 있어요.

**연락처**와 기회는 검색 가능 필드를 최대 6개까지 지정할 수 있어요.

{% hint style="info" %}
검색하려면 검색창에 3글자 이상 입력해야 해요.
{% endhint %}

- **연락처**: **연락처 이름**, **전화번호**, **이메일 주소**는 필수 필드라서 검색 가능 필드에서 뺄 수 없어요.
- **기회**: **기회명**은 검색 가능 필드에서 뺄 수 없어요.

![검색 가능 필드 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034971656/original/sN5cFhBG_VqmSQ87llFdSQDr-wd4fUbWSw.jpeg?1729255666)

## 관리자만 변경할 수 있어요

검색 가능 필드는 관리자만 설정할 수 있어요. 일반 사용자는 이 설정을 바꿀 수 없어요.

## 변경 내용이 전체에 적용돼요

설정을 바꾸면 플랫폼 안의 모든 연락처 검색창에 바로 반영돼요.

### 연락처 기준으로 적용되는 곳

1. **연락처** 검색창

   ![연락처 검색창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034971672/original/6AQ6L9wlVjG920xYSIZNVF7VYAMxXgSXiQ.jpeg?1729255671)

2. **전체 검색** 검색창

   ![전체 검색 검색창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034971668/original/EIlO7bAKBeVWOO6AaifChb3LWI__aEMrBg.jpeg?1729255670)

3. **대화**에서 새 메시지를 만들 때

   ![대화에서 새 메시지 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034971653/original/5Ngy0ynnllgw3qlavAfwEpJoBDtL7jOeow.jpeg?1729255661)

4. **캘린더**에서 새 예약을 만들 때

   ![캘린더에서 새 예약 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034971666/original/MDKW7uWomGPcu5P-SgTLG-Q6BP4SlKpB4g.jpeg?1729255669)

5. **연락처**에서 작업을 만들거나 수정할 때

   ![연락처에서 작업 만들기와 수정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034971661/original/U28GYOHOg_85SMNsHWI-n2Z3ZO-8q1V1gA.jpeg?1729255667)

6. **기회 관리**의 **연락처**와 **추가 연락처** 필드

   ![기회 관리의 연락처 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034971669/original/E6Pnxh61Okvlaggiv_YU9cS5h0L4nhM1ww.jpeg?1729255670)

### 다음 메뉴에도 적용돼요

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **대시보드** | **워크플로우** | **폼** | **설문** | **결제** | **인보이스** |
| **문서 & 계약** | **SaaS** | **제휴 관리자** | **이메일** | **클라이언트 포탈** | **커스텀 오브젝트** |

## 정규식 검색

정규식을 쓰면 더 세밀하게 검색할 수 있어요.

다만 연락처 이름, 전화번호, 금액, 숫자 필드처럼 값의 성격이 비슷한 필드에서는 정규식이 동작하지 않아요.

정규식은 아래 형식을 지원해요.

- `*abc`: "abc"로 끝나는 레코드를 찾아요.
- `*abc*`: "abc"가 들어 있는 레코드를 찾아요.
- `abc*`: "abc"로 시작하는 레코드를 찾아요.

{% hint style="warning" %}
정규식 검색은 연락처 이름, 전화번호, 금액 같은 필드에서는 동작하지 않아요.
{% endhint %}

## 검색 가능 필드를 바꾸려면

1. 서브 계정에서 **설정 > 커스텀 필드**로 이동하세요.

   ![설정의 커스텀 필드 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034971675/original/gDJsF4lxaw34SkYvm4tT9Xa9E03Q2M-U0g.jpeg?1729255671)

2. 오른쪽 위의 점 세 개 메뉴를 열고 **검색 가능 필드 편집**을 클릭하세요.

   ![점 세 개 메뉴에서 검색 가능 필드 편집 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034971664/original/j6s65-ir_FsDKd1KjQv0LBWHB1wFlmtN7w.png?1729255668)

3. 검색 가능 필드를 바꿀 오브젝트를 선택하세요.

   ![오브젝트 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034971660/original/hxHtovVHjyxrH_rvwHT9OFI7jL6lutQaAw.png?1729255667)

4. 검색 가능하게 만들 필드를 선택하세요.

   ![검색 가능 필드 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034971663/original/uQEwJmUWa4jJ-aL-TBehCnDFK0wWgtkdPw.jpeg?1729255667)

5. 변경 내용을 **저장**하고 확인하세요.

   ![변경 내용 저장 및 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034971662/original/hgBp6A1nRTzyg3Wv_d5LdK0b3qaAATsMvA.png?1729255667)

6. 이 계정의 모든 모듈과 사용자에게 새 검색 가능 필드가 적용돼요.
