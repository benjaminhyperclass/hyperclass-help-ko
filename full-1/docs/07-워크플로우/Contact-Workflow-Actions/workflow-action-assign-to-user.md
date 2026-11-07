---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003300-workflow-action-assign-to-user
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Assign To User(사용자에게 배정)

**Assign To User**(사용자에게 배정) 액션은 연락처를 팀원(사용자)에게 자동으로 배정해 주는 워크플로우 액션이에요. 이 문서에서는 액션의 역할과 장점, 설정 방법, 실제 활용 예시를 안내해요.

## Assign To User 액션이란

**Assign To User** 액션은 미리 정한 기준에 따라 연락처를 한 명 이상의 팀원(사용자)에게 자동으로 배정해요. 한 명에게 모두 배정할 수도 있고, 라운드 로빈이나 직접 정한 비율로 여러 명에게 나눠 배정할 수도 있어요. 이 액션을 쓰면 업무량을 고르게 나누고, 담당자를 분명히 해서 팀 협업을 수월하게 할 수 있어요. 리드, 티켓, 작업 등 어떤 것을 배정하든 워크플로우에 맞게 쓸 수 있어요.

---

## Assign To User 액션의 장점

- 자동 배정: 연락처를 일일이 수동으로 배정하지 않아도 돼서 시간과 수고를 줄여요.
- 공평한 분배: 라운드 로빈이나 균등 분배 방식으로 팀원들의 업무량을 고르게 맞춰요.
- 맞춤 배분: 팀 여력이나 경력에 따라 연락처를 불균등하게 나눠 효율을 높여요.
- 추적 개선: 각 연락처의 담당자가 분명해져서 책임 소재가 명확해져요.
- 유연한 활용: 영업 리드 관리부터 고객 지원까지 다양한 용도로 쓸 수 있어요.

---

## Assign To User 액션 추가하기

1. 워크플로우 빌더를 열어요.
2. **+** 아이콘을 눌러 새 액션을 추가해요.
3. **Assign To User**(사용자에게 배정)를 선택해요.

![액션 목록에서 Assign To User 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038396150/original/Fy2R3r_FCd-iQibNkBX_t8iSdRj-Vgwmxg.png?1734349836)

---

## Assign To User 액션 설정하기

### Action Name

**Action Name**(액션 이름)에는 워크플로우에서 쉽게 알아볼 수 있는 이름을 입력해요. 예를 들면 "캘리포니아 담당자에게 배정" 같은 이름이 좋아요.

![Action Name 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038398659/original/xQ_gqdcSxRKlGxIt7ft6EL4Ycf6Cc-6AEg.png?1734351363)

### 사용자 선택

드롭다운 메뉴에서 연락처를 배정할 사용자를 한 명 이상 골라요.

- 사용자 한 명: 모든 연락처가 그 사용자에게 배정돼요.
- 사용자 여러 명: 두 명 이상을 고르면 배정할 때마다 지정한 사용자들에게 라운드 로빈 방식으로 돌아가며 배정돼요. 예를 들어 Tom과 Jane을 고르면 첫 번째 트리거는 Tom, 두 번째는 Jane, 세 번째는 다시 Tom에게 배정돼요. 이런 식으로 모든 연락처에 사용자가 배정될 때까지 이어져요.

![사용자 선택 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038398702/original/fZUNbW2D6puroXT_BlT32tUUXppzwRWMFw.png?1734351410)

---

## 사용자에게 나눠 배정하기 (가중 라운드 로빈, Weighted Round Robin)

배정을 나누면 선택한 사용자들에게 작업, 연락처, 리드를 정해 둔 규칙에 따라 균등하거나 불균등하게 분배할 수 있어요.

### 균등하게 나누기

**Split Traffic**(트래픽 분할) 옵션에서 **Equally**(균등하게)를 선택하면 모든 사용자에게 고르게 배정돼요. 라운드 로빈 배정 방식과 비슷하게 1:1, 2:2 같은 비율로 나뉘어요. **Unevenly**(불균등하게)로 바꾸기 전까지는 기본으로 켜져 있어요.

### 불균등하게 나누기

**Unevenly**를 선택하면 사용자마다 분배 비율을 직접 정할 수 있어요. 예를 들어 비율을 5:2로 정하면 사용자 A가 5건, 사용자 B가 2건을 받아요. 사용자 B는 사용자 A가 5건을 받은 뒤에야 배정을 받아요.

**Split Traffic**을 **Unevenly**로 두고 사용자 세 명의 가중치를 아래와 같이 정했다고 해 볼게요.

- Alan: 3
- Bobby: 3
- Charlie: 1

이 경우 워크플로우 트리거 1, 2, 3번은 Alan에게, 4, 5, 6번은 Bobby에게, 7번은 Charlie에게 배정돼요. 그다음에는 이 순환이 처음부터 반복돼요.

![Split Traffic을 Unevenly로 설정한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038398834/original/Q8Oo5U7LuQNaR6py2qQRg7kUc0Ld9twuyQ.png?1734351507)

---

## 배정되지 않은 연락처에만 적용하기

**Only Apply To Unassigned Contacts**(배정되지 않은 연락처에만 적용) 토글이 꺼져 있는 상태에서 이미 배정된 연락처에 트리거가 실행되면, 새 배정이 이전 배정을 덮어써요. 그러면 연락처는 새 사용자에게 배정돼요.

- **Enabled**(켜짐): 아직 배정되지 않은 연락처만 배정해요.
- **Disabled**(꺼짐): 이미 배정된 연락처도 다시 배정해요.

---

## Standard와 Dynamic 사용자 ID

배정할 사용자를 고르는 **Users** 드롭다운에는 기본으로 **Standard**(표준)가 선택돼 있어요. 이때는 서브 계정의 모든 사용자가 드롭다운 목록으로 나와요. **Dynamic**(동적)을 선택하면 입력란이 일반 텍스트 필드로 바뀌어요. 여기에는 사용자 ID를 직접 입력하거나 머지 태그로 넣을 수 있어요.

{% hint style="info" %}
**Dynamic** 보기에서는 사용자 ID를 한 개 이상 직접 입력할 수 있어요. 하지만 보통은 워크플로우 앞쪽 단계에서 사용자 ID를 담고 있는 변수를 골라 쓰는 방식으로 사용해요.
{% endhint %}

![Dynamic으로 전환한 사용자 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049113485/original/EoPnQm4e7pZUEblOdG_NAoJWRhqDmTmrOA.png?1751322196)

---

## 사용자 ID 직접 확인하기

사용자 ID를 직접 확인하려면 **설정 > 스태프 관리**로 이동하세요. 사용자 ID는 해당 사용자의 이메일 주소 아래에 표시돼요.

![스태프 관리에서 확인하는 사용자 ID](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049169521/original/cGx0z_i8djodev2Q4j3Ca4JjQfbWIldOXg.png?1751381650)

---

## 사용자를 동적으로 배정하기

대부분은 **Standard** 선택기를 쓰면 돼요. 사용자 배정 로직이 단순하거나 하이퍼클래스 워크플로우 안에서 정해지기 때문이에요. 다만 일부 고급 사용자는 하이퍼클래스 밖에서 실행되는 복잡한 배정 로직을 가지고 있어요. 이럴 때 **Dynamic**을 써요.

```
고급 사용자 배정 예시:

고객 등급별로 여러 계정 매니저가 일하고, 교육을 받거나 서로 업무를 대신 맡기도 하는 디지털 마케팅 에이전시

새 리드 유입 → 외부 시스템이 다음을 평가:
- 리드 출처(Google Ads, 추천, 콜드 아웃리치)
- 회사 규모(직원 수, 매출)
- 관심 서비스(SEO, PPC, 소셜 미디어)
- 지리적 위치

외부 시스템이 배정 결과를 생성:
- 대기업 리드 → 시니어 계정 매니저(사용자 ID #1 또는 #2)
- 대기업 리드 교육 기간 → 일반 계정 매니저(사용자 ID #3)
- 중견기업 리드 → 일반 계정 매니저(사용자 ID #3, #4 또는 #5)
- 소규모 사업자 리드 → 주니어 계정 매니저(사용자 ID #6, #7, #8 또는 #9)
- 소규모 사업자 리드 초과분 → 일반 계정 매니저(사용자 ID #4 또는 #5)

워크플로우가 인바운드 웹훅을 받아 연락처에 사용자 ID를 배정합니다.
```

### 1단계: 워크플로우 만들기

새 워크플로우를 만들고 **Inbound Webhook**(인바운드 웹훅) 트리거, **Find Contact**(연락처 찾기) 액션, **Assign User**(사용자 배정) 액션을 차례로 추가해요.

### 2단계: 설정용 웹훅 보내기

사용하는 시스템에서 **Inbound Webhook** 트리거에 표시된 URL로 예시 요청을 보내 웹훅을 설정해요. 이 예시에서는 빠른 무료 테스트를 위해 <https://reqbin.com/> 을 사용했어요. `user_id` 파라미터와 `contact_email` 파라미터를 설정하세요. "status: success: test request received"라는 메시지가 보이면 **Inbound Webhook** 트리거로 돌아가요.

![reqbin에서 테스트 요청을 보낸 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050404924/original/CxMP-vX-_jp_YcLOXeZ69gOIsuuAgcRZFw.png?1753402439)

### 3단계: Inbound Webhook 트리거 설정하기

**Inbound Webhook** 트리거로 돌아가 성공한 요청을 찾고 매핑을 확인한 뒤 트리거를 저장해요. 이제 이 트리거와 쿼리 파라미터를 워크플로우 뒷부분에서 쓸 수 있어요.

![Inbound Webhook 트리거의 매핑 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050404909/original/ycVgw3eqg96m7UHhv4aBW2D09n7nWGmo2g.png?1753402333)

### 4단계: Find Contact 액션 설정하기

**Find Contact** 액션을 편집해요. **User > Email** 필드를 선택하고, **Inbound Webhook > QueryParams > contact_email** 필드와 매핑해요.

![Find Contact 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050404981/original/4pyUW9uHJITGo40ep0Ls_8zwP6Q0CpJFkQ.png?1753402743)

### 5단계: Assign User 액션 설정하기

**Assign User** 액션을 편집해서 **Standard**에서 **Dynamic**으로 바꿔요. 그다음 머지 필드 선택기에서 **Inbound Webhook Trigger > QueryParams > user_id** 필드를 선택해요.

![Assign User 액션의 Dynamic 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050404998/original/5xdpsodLHZeXlytfNQF5K1EUs9AQrQCnqA.png?1753402894)

### 6단계: 테스트하고 저장하기

다양한 조건에서 워크플로우를 테스트하세요. 결과에 만족하면 **Save**(저장)를 누르고, 실제로 적용할 준비가 되면 **Publish**(게시)해요.

---

## 자주 묻는 질문

### 워크플로우에서 Assign To User 액션은 어떤 용도로 쓰나요?
**Assign To User** 액션을 쓰면 연락처를 특정 팀원에게 자동으로 배정할 수 있어요. 업무량을 효율적으로 관리하고 담당자를 추적하는 데 도움이 돼요.

### Assign To User 액션에서 사용자를 한 명만 선택하면 어떻게 되나요?
한 명만 선택하면 워크플로우로 들어온 모든 연락처가 그 사용자에게 배정돼요. 다른 사용자에게 돌아가며 배정되지는 않아요.

### Only Apply To Unassigned Contacts 토글을 켜지 않고도 Assign To User 액션을 쓸 수 있나요?
네, 쓸 수 있어요. 다만 워크플로우 트리거가 실행될 때 이미 배정된 연락처가 새 사용자에게 다시 배정될 수 있어요.

### 라운드 로빈 배정과 Equally 트래픽 분할은 어떻게 다른가요?
라운드 로빈은 사용자들에게 한 건씩 번갈아 배정해요. **Equally** 트래픽 분할은 시간이 지나면서 모든 사용자가 같은 수의 배정을 받도록 해요.
