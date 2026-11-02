---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009404-add-association-columns-and-filter-contacts-by-associated-records-in-smart-lists
번역일: 2026-11-02
카테고리: 02-연락처 > 스마트-리스트
---

# 스마트 리스트에서 연결 컬럼 추가하고 연결된 레코드로 연락처 필터링하기

연결(Association) 컬럼은 각 연락처(Contacts)에 어떤 커스텀 오브젝트(Custom Object)와 회사(Company) 레코드가 연결되어 있는지 보여줘요. 연결 필터를 사용하면 이러한 관계를 세그먼트로 전환할 수 있어요. 예를 들어 특정 반려동물의 보호자, 또는 특정 회사와 연결된 연락처 같은 식이에요. 연결 조건을 다른 연락처 필터와 조합해서 스마트 리스트(Smart List)로 저장하면, 집중적이고 반복 가능한 후속 조치가 가능해져요.

---

**목차**

- [시작하기 전에](#시작하기-전에)
- [연결 컬럼 추가하기](#연결-컬럼-추가하기)
- [주 회사(Primary Company) 이해하기](#주-회사-이해하기)
- [연결된 레코드로 연락처 필터링하기](#연결된-레코드로-연락처-필터링하기)
- [필터 연산자 선택하기](#필터-연산자-선택하기)
- [예시 세그먼트](#예시-세그먼트)
- [컬럼 및 필터 문제 해결하기](#컬럼-및-필터-문제-해결하기)

---

# **시작하기 전에**

- **관계 설정 확인:** 필요한 연결 라벨이 연락처에 정의되어 있고, 관련 레코드가 서로 연결되어 있는지 확인하세요.
- **라벨 선택:** 라벨은 관계를 설명하는 이름이에요. 예를 들어 '보유 반려동물(Owned Pet)'이나 '추가 회사(Additional Company)' 같은 것이죠. 여러 개의 라벨이 같은 오브젝트 유형을 가진 연락처를 연결할 수도 있어요.

---

## **연결 컬럼 추가하기**

- 연락처 메뉴 > 스마트 리스트로 이동한 후 확인하려는 리스트를 열어주세요.
- 테이블 상단의 컬럼 설정 버튼을 클릭하세요. 필드 선택 창에서 Associations(연결) 항목을 찾아주세요.
- 표시하고 싶은 각 연결 라벨을 선택하세요. 여러 라벨이 같은 오브젝트 유형을 가리키더라도, 라벨마다 별도의 컬럼이 추가돼요.
- 각 연락처 행에 표시된 연결된 레코드 칩(chip)을 확인하세요. 칩을 클릭하면 연결된 레코드가 열려요.

**1단계:** 리스트 상단의 컬럼 설정 버튼을 클릭해서 필드 관리(Manage fields) 화면을 열어주세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084196732/original/5vCkcA4YRMY5aq6th7_19x0Rj1td-k14ng.png?1793015077)

**2단계:** Associations(연결) 항목에서 표시할 라벨을 선택한 후 Apply(적용)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084196743/original/wwZ5EGggrNXJfqer32HmOOG-izW3rAZuKQ.png?1793015087)

**3단계:** 각 라벨이 별도의 컬럼으로 표시되며, 연결된 레코드는 칩 형태로 나타나요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084196759/original/HDkni--9YZVxesErqRgSWBQfqKJx_75YcQ.png?1793015104)

**4단계:** +N 표시 위에 마우스를 올리면 나머지 연결된 레코드를 확인할 수 있어요. 또는 View all(전체 보기)을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084196850/original/XC0lPdDNnshlJnnnOmjfb9GfslBKi8OiUQ.png?1793015131)

+N 표시는 해당 라벨 아래에 현재 보이는 것보다 더 많은 레코드가 연결되어 있다는 뜻이에요. 셀이 비어 있다면 해당 관계에 표시할 연결된 레코드가 없다는 의미예요.

---

## **주 회사(Primary Company) 이해하기**

기존의 Company name(회사명) 컬럼은 Primary Company(주 회사)로 표시되며, 연락처의 주 회사를 나타내는 칩을 보여줘요. 추가 회사 관계는 각각의 연결 라벨 컬럼을 통해 표시돼요. 오브젝트 이름은 각 로케이션(Location)의 이름 설정에 따라 달라질 수 있어요.

---

## **연결된 레코드로 연락처 필터링하기**

- 연락처 목록 상단의 Filters(필터)를 열고 필터를 추가하세요.
- 확인하고 싶은 관계의 연결 필드를 선택하세요. 예: 보유 반려동물(Owned Pet - Associated Pets).
- Contains any(다음 중 하나를 포함), Does not contain any(다음 중 하나를 포함하지 않음), Is not empty(비어 있지 않음), Is empty(비어 있음) 중 하나를 선택하세요.
- Contains any 또는 Does not contain any를 선택한 경우, 레코드 선택 창에서 비교할 연결된 레코드를 검색해서 선택하세요. 비어 있음 관련 연산자는 레코드 값을 따로 지정할 필요가 없어요.
- 필요한 다른 조건을 추가한 후 Apply(적용)를 클릭하세요. 이 조건을 다시 사용하고 싶다면 스마트 리스트로 저장하세요.

**5단계:** 리스트 상단의 Filters(필터)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084196766/original/At_irAEB-avF0Mv04_MwpkZuDPJyj_lWUw.png?1793015109)

**6단계:** 연결 필드를 검색하세요. 각 라벨은 Associations(연결) 항목 아래에 나열돼요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084196774/original/188O2tGTSkt7YvfrchaCShoLcvDwMPtXzQ.png?1793015113)

**7단계:** 연산자를 선택하세요: Contains any, Does not contain any, Is not empty, Is empty 중 하나예요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084196854/original/EgS9H2Tisqj5MUZhvnVyfD_UGC-q0FaS8g.png?1793015136)

**8단계:** 일치시킬 연결된 레코드를 선택한 후 Apply(적용)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084196860/original/1rlMB8N9jmwxXrwhDM1Nn1fDCda7Y4ebDQ.png?1793015141)

**9단계:** 선택한 레코드와 연결된 연락처만 목록에 표시돼요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084196864/original/_B-_ZSb8G4k3W7EI3WRLfTkF03x6nPb74g.png?1793015146)

---

## **필터 연산자 선택하기**

- **Contains any (다음 중 하나를 포함):** 선택한 라벨 아래 지정한 레코드 중 하나라도 연결된 연락처를 찾아요.
- **Does not contain any (다음 중 하나를 포함하지 않음):** 선택한 라벨 아래 지정한 레코드와 연결된 연락처를 제외해요.
- **Is not empty (비어 있지 않음):** 특정 레코드를 지정하지 않고, 선택한 라벨 아래 연결이 존재하는 연락처를 찾아요.
- **Is empty (비어 있음):** 선택한 라벨 아래 연결이 없는 연락처를 찾아요.

관계가 존재하는지 여부만 확인하고 싶다면 비어 있음 관련 연산자를 선택하세요. 특정 연결된 레코드를 비교해야 한다면 Contains any 또는 Does not contain any를 선택하세요.

---

## **예시 세그먼트**

- **특정 반려동물의 보호자:** 동물병원 팀이 Mango 또는 Jasper라는 반려동물의 보호자에게 후속 연락을 하고 싶다고 가정해볼게요. '보유 반려동물(Owned Pet)' 연결 필드를 선택하고, 매칭 레코드 필터에서 해당 반려동물 레코드를 선택하세요. 결과로 나온 연락처를 스마트 리스트로 저장하면 해당 반려동물에 관한 커뮤니케이션에 활용할 수 있어요.
- **반려동물을 보유한 전체 연락처:** '보유 반려동물'과 Is not empty를 함께 사용하면, 해당 관계 아래 반려동물이 하나 이상 연결된 연락처 목록을 만들 수 있어요. 더 좁은 대상이 필요하다면 다른 연락처 조건과 조합하세요.
- **특정 회사와 연결된 연락처:** 계정 담당 팀이 McKinsey와 EY에 대한 아웃리치를 정리하고 싶다고 가정해볼게요. '추가 회사(Additional Company)' 같은 관련 회사 관계를 선택하고 해당 회사 레코드를 선택하세요. 일치하는 연락처를 스마트 리스트로 저장하면 계정 후속 관리에 활용할 수 있어요.
- **특정 정책과 연결된 연락처:** '정책(Policy)' 연결 필드를 선택하고 정책 레코드를 선택하면, 해당 정책과 연결된 연락처들을 그룹화해서 정책 관련 후속 조치를 진행할 수 있어요.
- **추가 회사가 누락된 연락처:** '추가 회사'와 Is empty를 함께 사용하면 해당 관계가 없는 연락처를 찾을 수 있어요. 이 목록을 확인해서 회사 연결을 아직 완료해야 하는 레코드를 찾아보세요.

---

## **컬럼 및 필터 문제 해결하기**

- **라벨이 보이지 않아요:** 해당 연결이 연락처에 설정되어 있는지, 그리고 선택 창의 Associations(연결) 항목 아래에서 확인하고 있는지 점검하세요.
- **행에 칩이 표시되지 않아요:** 해당 연락처가 그 특정 라벨 아래 연결을 가지고 있는지 확인하세요. 다른 라벨 아래 있는 관계는 다른 컬럼에 표시돼요.
- **결과가 예상과 달라요:** 라벨, 연산자, 선택한 레코드, 그리고 목록에 적용된 다른 필터들을 다시 한번 확인하세요.
- **이름이 가이드와 달라요:** 각 로케이션마다 오브젝트 이름을 변경하거나 자체 연결 라벨을 사용할 수 있어요.

---
*원문 최종 수정: 2026-10-27*
*Hyperclass 사용 가이드 — hyperclass.ai*