---
원문: /support/solutions/articles/155000001034-how-to-copy-contacts-from-one-sub-account-to-another-sub-account-
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Copy Contact to Sub-Account(서브 계정으로 연락처 복사)

**Copy Contact to Sub-Account**(서브 계정으로 연락처 복사) 워크플로우 액션을 쓰면 연락처를 다른 서브 계정으로 복사할 수 있어요. 태그와 커스텀 필드도 함께 복사할 수 있고, 데이터는 그대로 유지돼요.

{% hint style="info" %}
문서에 나온 금액(달러)과 요금제 이름은 참고용이에요. 하이퍼클래스에서 실제로 적용되는 요금은 [요금제 안내](../../00-자주묻는질문/pricing-plans.md)와 [AI·SMS·음성 사용료](../../00-자주묻는질문/usage-costs.md)를 확인하세요.
{% endhint %}

---

## Copy Contact 사용 전 준비 사항

- 에이전시가 하이퍼클래스 요금제 중 하나($97, $297, $497 또는 각 연간 요금제)를 사용하고 있어야 해요.
- **에이전시 설정**에서 하이퍼클래스 프리미엄 트리거 & 액션을 켜야 해요.
- 프리미엄 액션과 트리거를 켜면 기존 서브 계정과 새 서브 계정 모두 100회 무료 실행을 받아요.
- 기존 서브 계정에서 실행 비용이 발생하지 않게 하려면, 에이전시 뷰에서 서브 계정마다 재청구(rebilling)를 직접 켜야 해요.
- **SaaS 구성기**에서 프리미엄 액션을 켜 두었다면, 이후 새로 만드는 서브 계정은 하이퍼클래스 프리미엄 액션 & 트리거에 자동으로 등록돼요. 에이전시가 따로 할 일은 없어요.

---

## 연락처 복사하는 순서

1. **워크플로우 빌더**로 이동해 새 워크플로우를 만들거나 기존 워크플로우를 열어요.

   ![워크플로우 빌더 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049683643/original/eP2hToI_4TLeO8vY2qpceI0Gn2YqPIwScw.png?1752177408)

2. **Copy Contact to Sub-Account** 액션을 추가해요.

   ![Copy Contact to Sub-Account 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049683666/original/mqdIFP8q7BBzdMNkhD1J1-6OhAkuENLVYQ.png?1752177469)

3. 연락처를 복사해 넣을 대상 서브 계정을 선택해서 액션을 설정해요.

   ![대상 서브 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049683973/original/dLRWwP6Caa7r6a2N_l09_5BMsc8beEhJ1Q.png?1752178137)

4. 필요하면 아래 설정을 켜요.

   - **Copy Tags**(태그 복사): 원본 연락처의 태그를 복사해요. 선택한 서브 계정에 새로 복사된 연락처에 태그를 여러 개 추가해서 연락처를 체계적으로 정리할 수 있어요. 원본 연락처 정보에 있는 태그를 고르거나 새 태그를 직접 만들 수도 있어요.
   - **Copy Custom Fields**(커스텀 필드 복사): 커스텀 필드를 복사해요. 대상 서브 계정에 같은 커스텀 필드가 있어야 해요.
   - **Update Contact if it Already Exists**(이미 있는 연락처 업데이트): 대상 서브 계정에 이미 있는 연락처를 업데이트해요.
   - **Skip Copy if Contact Lacks Email and Name**(이메일과 이름이 없으면 복사 건너뛰기): 정보가 불완전한 연락처 레코드를 복사하지 않아요.

### Copy Custom Fields

이 설정을 켜면 연락처의 커스텀 필드가 선택한 계정으로 복사돼요. 선택한 계정에 같은 필드가 있을 때만 커스텀 필드 값이 복사돼요.

### Update Contact if it Already Exists 설정

- 이 설정을 켜면, 선택한 서브 계정에 이미 있는 연락처는 그 서브 계정에서 업데이트돼요.
- 서브 계정에 연락처가 없으면 새 연락처가 만들어져요.

![Update Contact if it Already Exists 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018335574/original/NQ-ywFOUEi4ny-4WBP0pGjrX1S84B1-fwg.png?1705925986)

### 이메일과 이름이 없는 연락처 건너뛰기

연락처에 이메일이나 이름이 없으면 복사하지 않고 건너뛰어요.

---

## 복사되는 항목

Copy Contact 액션을 사용하면 아래 항목이 복사돼요.

- **연락처 정보**
- **일반 정보**
- 태그 (액션에서 **Copy Tags** 설정을 켜야 해요.)
- 커스텀 필드 (액션에서 **Copy Custom Fields** 설정을 켜야 하고, 서브 계정에 같은 커스텀 필드가 있어야 해요. 커스텀 필드 유형도 두 계정에서 같아야 해요.)

## 복사되지 않는 항목

대화, 활동, 메모, 작업, 예약, 결제, 그리고 따로 전송하는 문서/파일은 복사되지 않아요.

- **문서 / 파일**: Copy Contact 액션은 파일과 문서 전송을 지원하지 않아요. 파일은 독립된 자산으로 대상 서브 계정에 옮겨지지 않아요. 복사된 연락처에 연결된 파일 참조가 원래 연락처나 원본 레코드에 의존하는 경우도 있어요. 원본 계정에서 원래 연락처를 삭제하면 연결된 파일에 접근하지 못할 수 있어요. 중요한 파일에 계속 접근해야 한다면 원본 계정에 원래 연락처를 남겨 두세요.
