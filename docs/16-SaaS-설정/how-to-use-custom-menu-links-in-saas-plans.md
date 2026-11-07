---
원문: /support/solutions/articles/155000004196-how-to-use-custom-menu-links-in-saas-plans
번역일: 2026-11-06
카테고리: 16-SaaS-설정
---

# SaaS 플랜에서 사용자 정의 메뉴 링크 사용하기

사용자 정의 메뉴 링크(CML)를 SaaS 플랜에 연결하면, 외부 솔루션을 하이퍼클래스에 붙이는 작업을 줄일 수 있어요. 새 서브 계정이 특정 SaaS 플랜을 구독하면 CML 설정이 자동으로 적용돼요. 에이전시 관리자가 설정하는 기능이에요.

# 사용자 정의 메뉴 링크란?

사용자 정의 메뉴 링크(CML)를 쓰면 AI 도구, 재고 관리 시스템, 가상 비서 도구 같은 외부 솔루션을 하이퍼클래스 앱 안에 바로 넣을 수 있어요. iframe으로 도구를 연결하기 때문에, 사용자는 하이퍼클래스 안에서 끊김 없이 해당 도구를 쓸 수 있어요.

---

## 여러 페이지에서 사용자 정의 메뉴 링크 찾아보기

링크가 많은 에이전시를 위해 **사용자 정의 메뉴 링크** 선택 창에는 페이지 나누기가 있어요.

1. 연결할 링크를 선택하세요.
2. **Previous**(이전), **다음**, 또는 페이지 번호를 눌러 다른 링크를 찾아보세요.
3. **Attach Selected**(선택 항목 연결)를 클릭하세요.

![사용자 정의 메뉴 링크 선택 창의 페이지 이동 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076600695/original/dDyRKIazQ7zO6ofs00vX3xLmA7OcVgNavg.png?1784727494)

---

## 사용자 정의 메뉴 링크의 장점

많은 SaaS 사업자가 하이퍼클래스 기능과 함께 추가 솔루션을 서비스 패키지로 제공해요. 이제 사용자 정의 메뉴 링크를 SaaS 플랜에 직접 연결할 수 있어요. 새 서브 계정이 플랜을 구독하면 연결된 링크가 수동 설정 없이 자동으로 적용돼요.

- 자동 배포: 새 서브 계정의 CML 설정이 자동으로 이루어져 직접 설정할 필요가 없어요.
- 사용자 경험 향상: 연동한 솔루션이 하이퍼클래스 앱의 기본 기능처럼 느껴져요.
- 일관성: 같은 플랜을 구독한 모든 서브 계정이 같은 구성을 받아요.
- 플랜 단위 설정: SaaS 플랜에 CML을 직접 추가하면 새 서브 계정이 모두 그 링크를 이어받아요.
- 간편한 업데이트: 기존 SaaS 플랜에서 CML을 추가하거나 수정하면, 이후 그 플랜을 구독하는 모든 서브 계정에 변경 내용이 적용돼요.
- 확장성: SaaS 서비스가 커져도 신규 고객 온보딩이 간단해요.

---

## 사용자 정의 메뉴 링크 만들기

에이전시 계정에서 **설정 > 사용자 정의 메뉴 링크**로 이동한 뒤 **Create New**(새로 만들기) 또는 **편집**을 클릭하고 설정을 입력하세요.

**URL** 필드에는 **커스텀 값**을 쓸 수 있어요. 예를 들면 다음과 같아요.

```
http://url.com/{{location.id}}?value={{custom_values.my_value}}
```

이렇게 `{{ }}`로 감싼 문자열을 **병합 필드**라고 해요. 전체 목록은 병합 필드 목록 문서에서 확인할 수 있어요.

![사용자 정의 메뉴 링크 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048499152/original/JRURct4F_iUPvfhPe1W3ng8flnjjEvlPKA.png?1750269694)

---

## 사용자 정보를 링크에서 받아 오기

사용자 정의 메뉴 링크를 만들 때 URL을 다음처럼 설정할 수 있어요.

```
https://test.com/test?fname={{user.first_name}}&lname={{user.last_name}}&location_id={{location.id}}&custom_value_example={{custom_values.example_field_name}}
```

사용자가 이 링크를 클릭하면 하이퍼클래스가 URL의 변수를 해당 사용자의 실제 값으로 바꿔 줘요. 연결한 외부 솔루션에서 URL의 파라미터를 읽으면 사용자 정보를 알 수 있어요.

**CML에서 지원하는 파라미터**
`user.first_name``user.last_name``user.name``user.phone``user.email``location.id``location.name``location.city``location.state``location.country``location.address``location.email``location.phone``location.postal_code``location.full_address``location.website``location.logo_url``location_owner.first_name``location_owner.last_name``location_owner.email``custom_values.{CUSTOM_VALUE_NAME}`

## SaaS 플랜에 사용자 정의 메뉴 링크 추가하기

### 1단계: 새 SaaS 플랜 만들기

1. 하이퍼클래스 **에이전시 대시보드**에 로그인하세요.
2. **SaaS Configurations**(SaaS 구성) 섹션으로 이동하세요.
3. **Create New Plan**(새 플랜 만들기)을 선택하세요.

![새 SaaS 플랜 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036925372/original/c564q4W1JOz5DAJIuSvQMu9e9MpGO1rYjg.png?1732131751)

### 선택사항: 기존 SaaS 플랜 업데이트

- 이미 만든 플랜에도 새 사용자 정의 메뉴 링크를 추가할 수 있어요.
- 이후 업데이트된 플랜을 구독하는 서브 계정은 새 CML을 자동으로 받아요.

![기존 SaaS 플랜 업데이트 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036925363/original/ldJfpgDfKghGztYkQh83822u3uZZTWuo4Q.png?1732131734)

### 2단계: 사용자 정의 메뉴 링크 추가하기

1. SaaS 플랜 구성 안의 **사용자 정의 메뉴 링크** 섹션으로 이동하세요.
2. 넣고 싶은 외부 솔루션을 iframe URL로 추가하세요.
3. 최종 사용자가 쓰기 편하도록 이름을 정하고 CML을 정리하세요.

![SaaS 플랜의 사용자 정의 메뉴 링크 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036925318/original/sNXOkIbtL_Drx4AR-7MMREIkW8i-3c5s_w.png?1732131622)

![사용자 정의 메뉴 링크 추가 후 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036925410/original/C0W5LvDMwm24BnY07Zhm3cBCMPXuMsufRw.png?1732131786)

### 3단계: 플랜 저장 및 적용하기

1. SaaS 플랜의 변경사항을 저장하세요.
2. 이 플랜을 구독하는 새 서브 계정은 설정한 사용자 정의 메뉴 링크를 자동으로 받아요.

---

## 자주 묻는 질문

### 새 사용자 정의 메뉴 링크를 추가해 SaaS 플랜을 업데이트하면 기존 서브 계정은 어떻게 되나요?
플랜 업데이트는 그 플랜을 새로 구독하는 서브 계정에만 적용돼요. 기존 서브 계정에는 새 CML을 직접 추가해야 해요.

### 서브 계정에 적용된 뒤에도 사용자 정의 메뉴 링크를 수정하거나 제거할 수 있나요?
네, SaaS 플랜에서 사용자 정의 메뉴 링크를 수정하거나 제거할 수 있어요. 다만 변경 내용은 그 플랜을 새로 구독하는 서브 계정에만 적용돼요.

### 사용자 정의 메뉴 링크로 연결할 수 있는 외부 솔루션이 정해져 있나요?
아니요. URL로 iframe을 지원하는 도구나 솔루션이라면 무엇이든 넣을 수 있어요.

### SaaS 계정이 아닌 계정에도 이 기능을 쓸 수 있나요?
사용자 정의 메뉴 링크는 주로 SaaS 플랜용 기능이에요. SaaS 계정이 아닌 경우에는 CML을 직접 추가해야 해요.
