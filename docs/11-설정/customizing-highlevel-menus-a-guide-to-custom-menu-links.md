---

번역일: 2026-04-06
카테고리: 11-설정
---

# Hyperclass 메뉴 커스터마이징: 커스텀 메뉴 링크 가이드

이 가이드에서는 Hyperclass에서 커스텀 메뉴 링크(Custom Menu Links)를 생성, 관리, 최적화하여 플랫폼 네비게이션을 향상시키고 외부 도구를 사용자 인터페이스에 직접 통합하는 방법을 설명합니다.

---

**목차**

- [커스텀 메뉴 링크란?](#커스텀-메뉴-링크란)
- [커스텀 메뉴 링크의 주요 장점](#커스텀-메뉴-링크의-주요-장점)
- [커스텀 메뉴 링크를 관리할 수 있는 사람은?](#커스텀-메뉴-링크를-관리할-수-있는-사람은)
- [커스텀 메뉴 링크 생성 및 관리 방법](#커스텀-메뉴-링크-생성-및-관리-방법)
- [커스텀 메뉴 링크에서 사용자 컨텍스트 가져오기](#커스텀-메뉴-링크에서-사용자-컨텍스트-가져오기)
- [커스텀 메뉴 링크 편집 또는 삭제 방법](#커스텀-메뉴-링크-편집-또는-삭제-방법)
- [커스텀 메뉴 링크 활용 모범 사례](#커스텀-메뉴-링크-활용-모범-사례)
- [자주 묻는 질문](#자주-묻는-질문)

## 커스텀 메뉴 링크란?

커스텀 메뉴 링크(Custom Menu Links)는 에이전시가 하위 계정 및 에이전시 사용자를 위해 Hyperclass 네비게이션 메뉴를 개인화할 수 있게 해주는 기능입니다. 이 링크를 통해 사용자를 필수 외부 리소스, 교육 자료, 자주 사용하는 도구로 안내하여 워크플로우 효율성을 향상시킬 수 있습니다. 이러한 커스터마이징은 사용자 경험을 개선하고 Hyperclass 플랫폼 내에서 더 나은 네비게이션을 제공합니다.

커스텀 메뉴 링크는 세 가지 방식으로 구성할 수 있습니다:

- **임베디드 페이지(iFrame):** 네비게이션 구조를 유지하면서 Hyperclass 내에서 외부 페이지를 표시합니다.

- **새 브라우저 탭:** 별도의 브라우저 탭에서 링크를 열어 Hyperclass를 백그라운드에 열어둔 상태로 유지합니다.

- **현재 브라우저 탭:** 현재 Hyperclass 화면을 링크된 콘텐츠로 대체하여 사용자를 플랫폼 외부로 안내합니다.

이러한 옵션들은 에이전시가 사용자들이 외부 도구와 리소스와 상호작용하는 방식에 따라 유연성을 제공합니다.

---

## 커스텀 메뉴 링크의 주요 장점

커스텀 메뉴 링크는 다양한 이점을 제공합니다:

- **효율적인 네비게이션:** 자주 사용하는 외부 도구에 중앙집중식으로 접근하여 다양한 플랫폼 간 전환에 소요되는 시간을 단축합니다.

- **생산성 향상:** 사용자가 Hyperclass 인터페이스를 떠나지 않고도 필수 리소스에 빠르게 접근할 수 있습니다.

- **향상된 교육 및 지원 접근성:** 에이전시가 도움말 문서, 지식 베이스, 고객 지원 포털에 대한 직접 링크를 제공할 수 있습니다.

- **원활한 서드파티 통합:** 외부 대시보드, 제휴 포털, 리포팅 도구를 플랫폼 내에 직접 임베딩할 수 있습니다.

---

## 커스텀 메뉴 링크를 관리할 수 있는 사람은?

오직 **에이전시 관리자(Agency Admins)**만이 커스텀 메뉴 링크를 생성하고 관리할 수 있어, 승인된 인력만이 네비게이션 옵션을 추가하거나 제거할 수 있도록 보장합니다.

이러한 권한을 조정하려면 `Settings(설정) > Team(팀)`으로 이동하세요. 권한을 업데이트해야 하는 팀원을 선택하고 "Manage Custom Menu Links" 권한이 활성화되어 있는지 확인하세요.

![커스텀 메뉴 링크 권한 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044017895/original/_-z3BNFCNRSL3Q3xwHahQZSTqFp_3bOMrA.gif?1742996532)

---

## 커스텀 메뉴 링크 생성 및 관리 방법

에이전시와 하위 계정 사용자의 네비게이션 사이드바에 표시되는 커스텀 메뉴 링크를 추가하고 구성하는 방법을 알아보세요. 이 단계들을 통해 외부 도구와 리소스를 Hyperclass 워크스페이스에 원활하게 통합할 수 있습니다.

새로운 커스텀 메뉴 링크를 생성하려면 다음 단계를 따르세요:

**1단계:** 좌측 메뉴에서 `Settings(설정) > Custom Menu Links(커스텀 메뉴 링크)`로 이동하고 우측 상단의 **Create New(새로 만들기)** 버튼을 클릭하세요.

![커스텀 메뉴 링크 생성하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044018239/original/KM6Ct_F5HuuTQ_y-i6CNLucTa_OlPZ4wEA.png?1742996694)

**2단계:** 필수 정보를 입력하세요:

- **Link Icon(링크 아이콘):** 클릭하여 아이콘을 선택하세요.

- **Link Title(링크 제목):** 메뉴 링크의 이름을 입력하세요.

- **URL:** 연결할 외부 URL을 입력하세요. 여기에 로케이션 값과 커스텀 값을 사용할 수 있습니다. (이는 계정 내 로케이션 사이드바에서만 작동합니다.)
예시: [http://url.com/{{location.id}}?value={{custom_values.my_value}}](http://url.com/{{location.id}}?value={{custom_values.my_value}})

![링크 정보 입력하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044019159/original/ycCTWqoFnkAWHtYuDPTDZurOg3VbC-e91Q.gif?1742997208)

**중요:** 링크 URL은 메뉴 항목이 사용자를 안내할 웹 주소입니다. http:// 또는 https://로 시작해야 합니다. 임베디드 페이지(iFrame) 옵션을 사용하는 경우 대상 페이지가 임베딩을 허용하는지 확인하세요.

**3단계:** 열기 방식을 선택하세요:

- **임베디드 페이지(iFrame)에서 열기:** Hyperclass 대시보드 내에서 직접 링크된 콘텐츠를 표시하여 사용자를 동일한 인터페이스에 유지합니다. 임베딩을 지원하는 도구에 이상적입니다.

- **새 브라우저 탭에서 열기:** 별도의 탭에서 링크를 열어 사용자가 현재 Hyperclass 뷰를 떠나지 않고 리소스에 접근할 수 있습니다.

- **현재 탭에서 열기:** 현재 Hyperclass 탭을 링크된 URL로 리디렉션합니다. 사용자가 플랫폼 외부에서 작업을 완료해야 하는 경우에 가장 적합합니다.

![열기 방식 선택하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044020106/original/B5o7eD0xRsZ4r4QyTg4PtYLt1JrdvO3JKQ.png?1742997794)

**4단계:** **사이드바 기본 설정(Sidebar Preference)**과 **역할 기반 가시성(Role-Based Visibility)** 설정

사이드바 기본 설정과 역할 기반 가시성을 설정하여 링크가 어디에 나타나고 누가 접근할 수 있는지 정의하세요. 사이드바 기본 설정을 통해 링크가 에이전시 사이드바, 하위 계정 사이드바, 또는 둘 다에 나타날지 선택할 수 있습니다:

- **에이전시 사이드바**를 선택하면 에이전시 레벨 사용자에게 링크가 표시됩니다.

- **하위 계정의 사이드바**를 선택하면 특정 하위 계정에만 링크를 할당할 수 있습니다. 선택하면 어떤 하위 계정에 커스텀 메뉴 링크를 표시할지 선택할 수 있습니다.

- 역할 기반 가시성을 통해 어떤 유형의 사용자가 커스텀 메뉴 링크를 볼 수 있는지 제어할 수 있습니다:
  - **All(전체):** 모든 역할에게 링크가 표시됩니다.
  - **User(사용자):** 사용자 역할을 가진 사용자만 링크를 볼 수 있습니다.
  - **Admin(관리자):** 관리자만 링크에 접근할 수 있습니다.

![사이드바 및 역할 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044107677/original/YxznXAYax4VlyHyQIAKz2ixH-NGfXouCdw.jpeg?1743087683)

---

## 커스텀 메뉴 링크에서 사용자 컨텍스트 가져오기

커스텀 메뉴 링크를 생성할 때 다음과 같이 URL을 설정할 수 있습니다:

https://test.com/test?fname={{user.first_name}}&lname={{user.last_name}}&location_id={{location.id}}&custom_value_example={{custom_values.example_field_name}}

이렇게 하면 사용자가 링크를 클릭할 때 Hyperclass가 사용자의 컨텍스트를 기반으로 매개변수 변수를 실제 값으로 동적으로 대체합니다. 이 매개변수들을 URL에서 추출하여 사용자의 컨텍스트를 가져올 수 있습니다.

**CML에서 지원되는 매개변수:**

- user.first_name
- user.last_name
- user.name
- user.phone
- user.email
- location.id
- location.name
- location.city
- location.state
- location.country
- location.address
- location.email
- location.phone
- location.postal_code
- location.full_address
- location.website
- location.logo_url
- location_owner.first_name
- location_owner.last_name
- location_owner.email
- custom_values.{CUSTOM_VALUE_NAME}

## 커스텀 메뉴 링크 편집 또는 삭제 방법

에이전시가 발전함에 따라 빠른 업데이트를 하거나 오래된 커스텀 메뉴 링크를 제거하세요. 이 섹션에서는 기존 링크를 편집하거나 삭제하여 사이드바 네비게이션을 깔끔하고 관련성 있게 유지하는 방법을 보여줍니다.

#### 기존 커스텀 메뉴 링크를 수정하거나 제거하려면:

`Settings(설정) > Custom Menu Links(커스텀 메뉴 링크)`로 이동하여 원하는 링크를 찾고 **Edit(편집)** (연필 아이콘) 또는 **Delete(삭제)** (휴지통 아이콘) 버튼을 클릭하세요. 필요한 업데이트를 하거나 삭제를 확인하세요. 이러한 변경사항에는 기존 링크의 이름과 아이콘 업데이트가 포함됩니다. 변경사항은 모든 사용자의 네비게이션 메뉴에 즉시 반영됩니다.

![메뉴 링크 편집 및 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044108450/original/9Ra4Y9NK5t2A28FvNBd_hkzp8jz_LBg9DQ.png?1743088097)

#### **커스텀 메뉴 링크 순서 변경 방법**

우측 상단의 **Rearrange Custom Menu Links(커스텀 메뉴 링크 재정렬)** 버튼을 클릭하고 메뉴 링크를 원하는 순서로 드래그 앤 드롭하세요. 마지막으로 **Save(저장)**를 클릭하여 변경사항을 확정하세요.

![메뉴 링크 순서 변경](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044108908/original/eraT6jXtIGI2hNT_SgfDw8O0EBgA-_m4IQ.gif?1743088349)

---

## 커스텀 메뉴 링크 활용 모범 사례

커스텀 메뉴 링크의 효과를 극대화하려면 다음을 고려하세요:

- **정리된 상태 유지:** 네비게이션 메뉴를 어수선하게 만들 수 있는 너무 많은 링크 추가를 피하세요.

- **명확한 제목과 아이콘 사용:** 메뉴 항목이 사용자에게 쉽게 인식되고 직관적인지 확인하세요.

- **iFrame 호환성 테스트:** 일부 외부 웹사이트는 iFrame에 임베딩되는 것을 제한할 수 있습니다.

- **정기적인 링크 검토 및 업데이트:** 모든 링크가 시간이 지나도 관련성 있고 기능적인 상태를 유지하는지 확인하세요.

---

## 자주 묻는 질문

**Q: 하위 계정이 자체 커스텀 메뉴 링크를 생성할 수 있나요?**
아니요, 필요한 권한을 가진 에이전시 사용자만이 커스텀 메뉴 링크를 관리할 수 있습니다.

**Q: iFrame 옵션을 사용하여 모든 웹사이트를 임베딩할 수 있나요?**
모든 웹사이트가 iFrame을 통한 임베딩을 허용하지는 않습니다. 사용자에게 배포하기 전에 링크를 테스트하세요.

**Q: 커스텀 메뉴 링크를 특정 사용자나 역할로 제한할 수 있나요?**
네, 팀 설정에서 사용자 역할과 권한을 기반으로 가시성을 제어할 수 있습니다.

**Q: 커스텀 메뉴 링크 순서를 어떻게 바꾸나요?**
**Rearrange Custom Menu Links(커스텀 메뉴 링크 재정렬)**를 클릭하고, 링크를 드래그 앤 드롭하여 새로운 순서를 저장하세요.

---
*원문 최종 수정: Mon, 11 Aug, 2025 at 3:30 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*