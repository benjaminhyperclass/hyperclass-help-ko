---
원문: https://help.gohighlevel.com/support/solutions/articles/48001228591-company-object-automation
번역일: 2026-11-06
카테고리: 11-설정
---

# 회사 오브젝트 자동화

회사 오브젝트 자동화를 켜면 연락처의 사업자 정보 필드를 회사 정보로 활용할 수 있어요. 필드 데이터를 옮기고, 새 회사를 만들고, 연락처를 해당 회사에 자동으로 연결해 줘요.

## 회사 오브젝트 자동화 사용하기

1. 서브 계정에서 **설정 > 오브젝트 > 회사**로 이동하세요.
2. **Automatically Create and Associate Companies from Contact Business Names**(연락처의 사업자명으로 회사 자동 생성 및 연결) 체크박스를 선택하세요. 그러면 작업을 시작하라는 안내가 나타나요. 이 작업을 시작하면 **사업자명** 필드에 값이 있는 모든 연락처가, 같은 이름의 회사에 추가돼요.

   ![회사 오브젝트 자동화 체크박스 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041315021/original/v0FRrY72n64gm2vwIkCH_tSB7kAR6ZeteQ.png?1739194429)

<!-- 검토 필요: 원문 내용이 서로 다름 (체크박스 이름이 'Automatically Create and Associate Companies from Contact Business Names'와 'Create & Associate companies with the contacts'로 다르게 적혀 있음) -->

{% hint style="info" %}
- 사업자명은 대소문자를 구분하지 않아요. 한 연락처의 사업자명이 "Burger King"이고 다른 연락처가 "burger king"이면, 회사는 두 개가 아니라 Burger King 하나만 만들어져요.
- 사업자명의 띄어쓰기는 구분해요. 한 연락처의 사업자명이 "BurgerKing"이고 다른 연락처가 "burger king"이면, 두 사업자명 각각에 대해 회사가 따로 만들어져요.
- 철자가 다른 두 사업자명은 같은 회사로 인식하지 못해요. 예를 들어 사업자명이 "Ice Cream Sunday"인 연락처는 "Ice Cream Sundae"인 연락처와 같은 회사에 추가되지 않아요.
- 철자가 한 글자만 달라도 해당 연락처에는 별도의 회사가 만들어져요.
{% endhint %}

3. 체크박스를 선택하면 **변경사항 저장** 버튼이 활성화돼요. 버튼을 눌러 변경 내용을 저장하세요.
4. 확인 창에서 **Yes**(예)를 클릭하세요. 연락처 페이지 **기본 정보** 섹션의 **사업자명** 필드가 채워진 모든 연락처가, 사업자명과 같은 이름의 회사에 추가돼요. 그 이름의 회사가 아직 없으면 새로 만들어져요.
5. 작업이 정상적으로 시작되면 확인 메시지가 나타나요.

   ![작업 시작 확인 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041315045/original/hpsDDhyAsWl1Z8GmhYn6sRh-gh29-y43PA.png?1739194463)

이 자동화에서는 **사업자명** 필드가 회사를 구분하는 고유 기준이에요. 대소문자는 문제가 되지 않지만, 띄어쓰기와 철자는 같은 회사로 볼지 결정하는 기준이 돼요.

![사업자명이 입력된 연락처 예시 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271707249/original/KG8veGT7R7SMcMz1Efp7fWbQyN1xiVn3wQ.png?1672131506)

![사업자명이 입력된 연락처 예시 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271707245/original/aaxyEsY-Sr9jtrfOjneAVqTqvl3M2DrQ0A.png?1672131504)

연락처의 **기본 정보** 탭에 아래 필드가 입력되어 있으면, 새로 만들어지는 회사에도 자동으로 채워져요.

| 필드 |
| --- |
| 상세 주소 |
| **City**(도시) |
| **Country**(국가) |
| **State**(주/도) |
| **Postal code**(우편번호) |
| 웹사이트 |

![연락처 기본 정보 필드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271707252/original/xbfZrt9uUGchHGz84HOdFtpqfSk3ANfZgA.png?1672131506)

이 예시에서는 **상세 주소**와 웹사이트를 일부러 비워 두었어요.

![상세 주소와 웹사이트가 비어 있는 회사 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271707250/original/IZXpZ7QzPQQBvjC2K6q2-aaqS4wosi-_-g.png?1672131506)

---

## 상황별 동작

### 사업자명이 하나의 연락처에만 있는 경우

해당 연락처의 사업자명 값으로 새 회사가 만들어지고, 그 연락처가 회사에 연결돼요.

### 여러 연락처의 사업자명과 세부 정보가 같은 경우

사업자명 값으로 새 회사가 하나 만들어지고, 해당 연락처가 모두 이 회사에 연결돼요.

### 여러 연락처의 사업자명은 같지만 세부 정보가 다른 경우

사업자명 값으로 새 회사가 하나 만들어지고, 해당 연락처가 모두 이 회사에 연결돼요. 아래 정보는 가장 최근에 만들어진 연락처의 값을 기준으로 해요.

| 필드 |
| --- |
| 상세 주소 |
| City |
| Country |
| State |
| Postal code |
| 웹사이트 |

---

## 제한 사항과 동작 방식

이 설정은 관리자 사용자(에이전시·서브 계정)만 쓸 수 있어요. **사용자 역할**을 가진 팀원은 이전 작업을 시작할 수 없어요.

{% hint style="info" %}
**사용자 역할**을 가진 팀원도 설정 화면은 볼 수 있어요. 다만 설정을 바꿀 수는 없어요.
{% endhint %}

- 자동화 설정을 켜면 사업자명이 있는 기존 연락처가 모두 회사로 옮겨져요. 이전이 끝나면 사업자명 필드에 값이 있는 새 연락처도 자동으로 동기화돼요.
- 이미 회사에 연결된 연락처는 작업을 시작할 때 사업자명이 달라도 다른 회사로 옮겨지지 않아요. 기존 연락처는 회사에 연결되어 있지 않은 경우에만 이전돼요.

{% hint style="info" %}
이미 회사에 추가된 연락처의 사업자명을 바꿔도 자동화에는 영향이 없어요.
{% endhint %}

- 자동화 설정을 끄면 자동 동기화와 이전이 멈춰요. 다시 켜면 이전이나 자동 동기화가 다시 시작돼요.
- 이 기능에 대해 아래 활동이 모두 감사 로그에 남아요.
  - 설정 옵션을 시작한 사용자
  - 회사에 연결되도록 업데이트된 연락처
  - 회사 생성
  - 회사 업데이트
- 기존 연락처를 이전하는 도중에 설정을 껐다가 다시 켜면, 멈춘 지점부터 이전을 이어서 남은 연락처를 마저 처리해요.
- 일괄 가져오기, 공개 API, 폼 등으로 추가된 연락처에도 이 기능이 적용돼요. 사업자명과 회사는 실시간으로 동기화돼요.

{% hint style="warning" %}
가져오는 CSV 파일에는 열 머리글이 `Business Name`인 열이 있어야 해요. 연락처를 CRM으로 가져올 때 회사에 추가되려면 연락처마다 해당 사업자명이 채워져 있어야 해요. (회사 오브젝트 자동화가 켜져 있는 경우에 한해요.)

가져오는 중에 오류가 생겨 연락처가 엉뚱한 회사에 연결될 수 있어요. 사업자명의 철자나 띄어쓰기가 회사의 사업자명과 달라서 생기는 경우예요. 이때는 문제가 있는 연락처를 삭제한 뒤, 올바른 사업자명으로 CSV 파일을 다시 가져와야 해요. 삭제로 사라진 데이터는 복구되지 않아요. 연락처를 복원하는 것이 아니라 새 연락처를 만드는 것이기 때문이에요.
{% endhint %}

- 이 동기화는 한 방향으로만 작동해요. 사업자명으로 회사가 한번 만들어진 뒤에 회사 이름이나 세부 정보를 바꿔도, 연락처 **기본 정보**의 **사업자명** 필드와 동기화된 다른 필드에는 반영되지 않아요.
- 사업자명 업데이트는 지원하지 않아요. 사업자명으로 회사가 한번 만들어지면, 이후에 사업자명을 바꿔도 회사 속성이나 연락처와의 연결에는 영향이 없어요.

{% hint style="info" %}
회사 오브젝트 자동화는 아직 회사에 연결되지 않은 기존·신규 연락처를, 같은 사업자명을 가진 회사에 연결해 줘요. 그 사업자명의 회사가 없으면 새로 만들어요. 이미 회사에 연결된 연락처는 대상이 아니에요.
{% endhint %}
