---
원문: /support/solutions/articles/48001185767-customizing-highlevel-menus-a-guide-to-custom-menu-links
번역일: 2026-11-06
카테고리: 11-설정
---

# 사용자 정의 메뉴 링크로 하이퍼클래스 메뉴 꾸미기

**사용자 정의 메뉴 링크**(Custom Menu Links)로 하이퍼클래스 왼쪽 메뉴에 외부 도구나 자료로 가는 링크를 추가할 수 있어요. 이 문서에서는 링크를 만들고, 편집·삭제하고, 순서를 바꾸는 방법을 설명해요.

---

## 사용자 정의 메뉴 링크란?

에이전시는 **사용자 정의 메뉴 링크**로 서브 계정 사용자와 에이전시 사용자가 보는 탐색 메뉴를 원하는 대로 꾸밀 수 있어요. 꼭 필요한 외부 자료, 교육 자료, 자주 쓰는 도구로 바로 갈 수 있는 링크를 넣어 두면 작업이 편해져요.

링크는 세 가지 방식으로 설정할 수 있어요.

- 페이지 삽입(iFrame): 탐색 메뉴 구조는 그대로 두고, 외부 페이지를 하이퍼클래스 화면 안에 보여 줘요.
- 새 브라우저 탭: 링크를 별도 탭에서 열고, 하이퍼클래스는 뒤쪽 탭에 그대로 열려 있어요.
- 현재 브라우저 탭: 지금 보고 있는 하이퍼클래스 화면을 링크 내용으로 바꿔요. 사용자는 플랫폼 밖으로 이동해요.

사용자가 외부 도구와 자료를 어떻게 쓰길 원하는지에 따라 방식을 고르면 돼요.

---

## 사용자 정의 메뉴 링크의 장점

- 자주 쓰는 외부 도구에 한곳에서 접근할 수 있어서, 여러 플랫폼을 오가는 시간이 줄어요.
- 하이퍼클래스 화면을 벗어나지 않고도 필요한 자료를 빠르게 열 수 있어요.
- 도움말 문서, 지식 베이스, 고객 지원 포털로 가는 링크를 직접 제공할 수 있어요.
- 외부 대시보드, 제휴 포털, 리포팅 도구를 플랫폼 안에 바로 삽입할 수 있어요.

---

## 누가 사용자 정의 메뉴 링크를 관리할 수 있나요?

사용자 정의 메뉴 링크 권한이 있는 에이전시 사용자만 관리할 수 있어요.

권한을 확인하거나 바꾸려면 **설정 > 팀**으로 이동해 팀원을 선택하고, **Manage Custom Menu Links**(사용자 정의 메뉴 링크 관리)가 켜져 있는지 확인하세요.

![사용자 정의 메뉴 링크 관리 권한 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044017895/original/_-z3BNFCNRSL3Q3xwHahQZSTqFp_3bOMrA.gif?1742996532)

---

## 사용자 정의 메뉴 링크 만들고 관리하기

에이전시 사용자와 서브 계정 사용자의 사이드바에 보이는 메뉴 링크를 추가하고 설정하는 방법이에요. 외부 도구와 자료를 하이퍼클래스 작업 공간에 바로 연결할 수 있어요.

다음 단계를 따라 새 사용자 정의 메뉴 링크를 만드세요.

1. 왼쪽 메뉴에서 **설정 > 사용자 정의 메뉴 링크**로 이동한 뒤, 오른쪽 위의 **새로 만들기** 버튼을 클릭하세요.

   ![사용자 정의 메뉴 링크 화면의 새로 만들기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044018239/original/KM6Ct_F5HuuTQ_y-i6CNLucTa_OlPZ4wEA.png?1742996694)

2. 필요한 정보를 입력하세요.

   - **Link Icon**(링크 아이콘): 클릭해서 아이콘을 선택해요.
   - **Link Title**(링크 제목): 메뉴에 표시할 이름을 입력해요.
   - **URL**: 연결할 외부 URL을 입력해요. URL에는 location 값과 **커스텀 값**을 넣을 수 있어요. 이 값은 계정 안에서 서브 계정 사이드바에 있을 때만 작동해요.

     예시: `http://url.com/{{location.id}}?value={{custom_values.my_value}}`

     {% hint style="warning" %}
     사용자 정의 메뉴 링크 URL에 넣은 값은 이동하는 웹사이트로 전달돼요. 이 값은 브라우저 방문 기록, 서버 로그, 분석 도구 등 URL을 처리하는 여러 시스템에 노출될 수 있어요. 이동하는 사이트에 꼭 필요한 사용자 값, location 값, 커스텀 값만 넣고, 민감한 정보나 인증 정보는 URL 파라미터에 넣지 마세요.
     {% endhint %}

     ![URL에 값을 넣는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044019159/original/ycCTWqoFnkAWHtYuDPTDZurOg3VbC-e91Q.gif?1742997208)

     {% hint style="warning" %}
     링크 URL은 메뉴 항목을 눌렀을 때 사용자가 이동하는 웹 주소예요. 반드시 http:// 또는 https://로 시작해야 해요. **Open in an Embedded Page (iFrame)** 방식을 쓴다면 연결할 페이지가 삽입을 허용하는지 확인하세요.
     {% endhint %}

3. 링크를 여는 방식을 선택하세요.

   - **Open in an Embedded Page (iFrame)**(임베드 페이지에서 열기): 링크 내용을 하이퍼클래스 대시보드 안에 보여 줘요. 사용자가 같은 화면을 벗어나지 않아요. 삽입을 지원하는 도구에 알맞아요.
   - **Open in a New Browser Tab**(새 브라우저 탭에서 열기): 링크를 별도 탭에서 열어요. 사용자는 보고 있던 하이퍼클래스 화면을 유지한 채 자료를 볼 수 있어요.
   - **Open in the Current Tab**(현재 탭에서 열기): 지금 하이퍼클래스가 열려 있는 탭을 링크 URL로 이동시켜요. 사용자가 플랫폼 밖에서 작업을 마쳐야 할 때 쓰면 좋아요.

   ![링크 여는 방식 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044020106/original/B5o7eD0xRsZ4r4QyTg4PtYLt1JrdvO3JKQ.png?1742997794)

   {% hint style="info" %}
   연결할 웹사이트가 iframe 삽입을 허용해야 해요. 웹사이트가 삽입을 막고 있다면 **Open in a New Browser Tab** 또는 **Open in the Current Tab**을 사용하세요.
   {% endhint %}

4. **Sidebar Preference**(사이드바 설정)와 **Role-Based Visibility**(역할별 공개 범위)를 설정하세요. 링크를 어느 사이드바에 보여 줄지, 누가 볼 수 있게 할지 정하는 설정이에요.

   **Sidebar Preference**에서는 링크를 에이전시 사이드바, 서브 계정 사이드바, 또는 둘 다에 표시할지 고를 수 있어요.

   - **Agency sidebar**(에이전시 사이드바)를 선택하면 에이전시 수준의 사용자에게 링크가 보여요.
   - **Sub-Account's sidebar**(서브 계정 사이드바)를 선택하면 링크를 보여 줄 서브 계정을 직접 고를 수 있어요. 선택한 뒤 링크를 표시할 서브 계정을 지정하세요.
   - **Role-Based Visibility**에서는 어떤 유형의 사용자가 링크를 볼 수 있는지 정해요.
     - **전체**: 모든 역할에게 링크가 보여요.
     - **사용자**: 사용자 역할을 가진 사용자에게만 링크가 보여요.
     - **관리자**: 관리자에게만 링크가 보여요.

   ![사이드바 설정과 역할별 공개 범위 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044107677/original/YxznXAYax4VlyHyQIAKz2ixH-NGfXouCdw.jpeg?1743087683)

---

## 사용자 정보를 링크로 전달하기

사용자 정의 메뉴 링크를 만들 때 URL을 아래처럼 설정할 수 있어요.

```
https://test.com/test?fname={{user.first_name}}&lname={{user.last_name}}&location_id={{location.id}}&custom_value_example={{custom_values.example_field_name}}
```

이렇게 하면 사용자가 링크를 클릭할 때 하이퍼클래스가 **URL 파라미터** 변수를 해당 사용자의 실제 값으로 자동으로 바꿔 줘요. 이동한 사이트에서 URL의 파라미터를 읽으면 사용자 정보를 확인할 수 있어요.

사용자 정의 메뉴 링크에서 지원하는 파라미터는 다음과 같아요.
`user.first_name``user.last_name``user.name``user.phone``user.email``location.id``location.name``location.city``location.state``location.country``location.address``location.email``location.phone``location.postal_code``location.full_address``location.website``location.logo_url``location_owner.first_name``location_owner.last_name``location_owner.email``custom_values.{CUSTOM_VALUE_NAME}`

---

## 사용자 정의 메뉴 링크 편집하고 삭제하기

에이전시 상황이 바뀌면 링크를 빠르게 수정하거나 오래된 링크를 지울 수 있어요. 기존 링크를 편집하거나 삭제해서 사이드바 메뉴를 깔끔하게 관리해 보세요.

### 기존 링크를 수정하거나 삭제하려면

- **설정 > 사용자 정의 메뉴 링크**로 이동해 원하는 링크를 찾은 뒤, **편집**(연필 아이콘) 또는 **삭제**(휴지통 아이콘) 버튼을 클릭하세요. 필요한 내용을 수정하거나 삭제를 확인하면 돼요. 기존 링크의 이름과 아이콘도 바꿀 수 있어요. 변경 내용은 모든 사용자의 탐색 메뉴에 바로 반영돼요.

  ![링크 편집과 삭제 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044108450/original/9Ra4Y9NK5t2A28FvNBd_hkzp8jz_LBg9DQ.png?1743088097)

### 링크 순서 바꾸기

- 오른쪽 위의 **Rearrange Custom Menu Links**(사용자 정의 메뉴 링크 순서 변경) 버튼을 클릭하고, 링크를 드래그 앤 드롭해서 원하는 순서로 옮기세요. 마지막으로 **저장**을 클릭하면 변경이 완료돼요.

  ![링크 순서를 드래그해서 바꾸는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044108908/original/eraT6jXtIGI2hNT_SgfDw8O0EBgA-_m4IQ.gif?1743088349)

---

## 사용자 정의 메뉴 링크 활용 팁

사용자 정의 메뉴 링크를 효과적으로 쓰려면 다음을 참고하세요.

- 정리해서 쓰세요: 링크를 너무 많이 추가하면 탐색 메뉴가 복잡해질 수 있어요.
- 제목과 아이콘을 분명하게 정하세요: 사용자가 메뉴 항목을 쉽게 알아보고 직관적으로 이해할 수 있어야 해요.
- iFrame 호환성을 테스트하세요: 일부 외부 웹사이트는 iFrame 삽입을 막아 두었을 수 있어요.
- 링크를 주기적으로 점검하고 업데이트하세요: 모든 링크가 계속 유효하고 정상적으로 작동하는지 확인하세요.

---

## 자주 묻는 질문

### 서브 계정에서도 사용자 정의 메뉴 링크를 직접 만들 수 있나요?
아니요. 필요한 권한이 있는 에이전시 사용자만 사용자 정의 메뉴 링크를 관리할 수 있어요.

### iFrame 옵션으로 어떤 웹사이트든 삽입할 수 있나요?
모든 웹사이트가 iFrame 삽입을 허용하지는 않아요. 사용자에게 적용하기 전에 링크를 먼저 테스트해 보세요.

### 사용자 정의 메뉴 링크를 특정 사용자나 역할에게만 보이게 할 수 있나요?
네. 지원하는 사용자 역할로 공개 범위를 정하고, 링크를 표시할 서브 계정도 선택할 수 있어요.

### 사용자 정의 메뉴 링크 순서를 바꾸려면 어떻게 하나요?
**Rearrange Custom Menu Links**를 클릭하고, 링크를 드래그 앤 드롭한 뒤 새 순서를 저장하세요.

---

