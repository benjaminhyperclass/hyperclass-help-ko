---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006454-audience-targeting-for-linkedin-campaigns-in-ad-manager
번역일: 2026-11-07
카테고리: 10-마케팅
---

# 광고 관리자에서 LinkedIn 캠페인 잠재고객 타겟팅하기

**잠재고객 타겟팅**은 LinkedIn 광고를 누구에게 보여 줄지 정하는 설정이에요. **광고 관리자**(Ad Manager)에서는 어렵지 않게 세밀한 타겟을 만들 수 있어요.

이 문서에서는 지역 타겟팅과 대상 속성을 설정하는 방법, 그리고 **포함**/**제외** 규칙이 **그리고**/**또는** 조건과 함께 어떻게 적용되는지 설명해요.

---

## 지역 타겟팅 (필수)

LinkedIn 캠페인에는 지역을 하나 이상 꼭 선택해야 해요.

- 국가, 주, 지역, 도시를 포함하거나 제외할 수 있어요.
- 입력란에서 지역을 검색해 칩 형태로 추가하세요.
- 각 칩 옆의 드롭다운에서 **포함** 또는 **제외**를 선택하세요.

![지역을 칩으로 추가하고 포함/제외를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054817753/original/yqojCn3RP-c6ayQem5_Sk77EoZyrSFJ3aQ.png?1759147910)

{% hint style="info" %}
**팁:** 잠재고객 규모가 작다면 국가처럼 넓은 지역부터 시작하세요. 더 정확하게 좁혀야 할 때만 범위를 줄이는 것이 좋아요.
{% endhint %}

---

## 대상 속성 (선택)

지역 외에도 직업과 관련된 속성을 선택해 타겟을 더 좁힐 수 있어요. 이 속성을 쓰면 LinkedIn 프로필을 기준으로 사람들에게 광고를 보여 줄 수 있어요.

### 선택할 수 있는 속성 카테고리

- **회사**: 업종, 회사 규모, 성장 리스트(예: Fortune 500)
- **인구 통계**: 연령, 성별(LinkedIn에서 지원하는 경우)
- **Job Experience**(직무 경력): 직무명, 직급, 직무 분야
- **학력**: 전공, 학위, 학교
- **Interests & Traits**(관심사 및 특성): 직무 관련 관심사, 행동 특성

![대상 속성 카테고리를 고르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054817859/original/-jtKlxEH57ajTiXKK7nvQMZE-j29UPa5ew.png?1759147986)

![속성을 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054817896/original/_tcedvo-2T7jcQAGBR6OVCQfBmJd19Oq3Q.png?1759148006)

---

## 포함과 제외

속성마다 **포함**(이 사람들을 타겟으로 삼기)이나 **제외**(이 사람들을 걸러 내기)를 정할 수 있어요.

- **포함** 예시: SaaS 업종의 '마케팅 매니저'를 타겟으로 해요.
- **제외** 예시: '인턴'이나 '학생'을 빼서 도달 범위를 다듬어요.

---

## 속성 그룹과 조건

속성 그룹은 최대 3개까지 만들 수 있어요.

- 그룹 안에서는 속성이 **또는**(OR) 조건으로 연결돼요.

  - 예: 직무명 = 마케팅 매니저 **또는** 디렉터
- 그룹 사이에서는 **그리고**(AND) 조건으로 연결돼요.

  - 예: (직무명 = 마케팅 매니저 또는 디렉터) **그리고** (업종 = 헬스케어)

이렇게 하면 설정이 복잡해지지 않으면서도 타겟팅 규칙을 여러 겹으로 쌓을 수 있어요.

![속성 그룹과 조건을 설정한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054818081/original/l7lQi22RTvSYsjVlzv_0ZOXMXI8VM6Ihgw.png?1759148110)

---

## 예시: 잠재고객 만들기

실제로는 이렇게 설정해요.

1. 그룹 1 (**포함**):

   - 직무명 = "General Manager" 또는 "Project Manager"
   - 전공 = "Engineering"
2. 그룹 2 (**포함**):

   - 학교 = "하버드 경영대학원"
   - 멤버 그룹 = "Amazon AWS Architects"

결과: 그룹 1의 속성 중 하나 이상에 해당하고, 그리고 그룹 2의 속성 중 하나 이상에도 해당하는 사람에게만 광고가 노출돼요.

---

## 활용 팁

- 지역을 가장 먼저 설정하세요. 지역이 없으면 캠페인을 실행할 수 없어요.
- 넓게 시작하고 나중에 좁히세요. 잠재고객이 너무 적으면 광고 노출에 어려움이 생길 수 있어요.
- **제외**를 너무 많이 쓰지 마세요. 잠재고객 풀이 지나치게 줄어들 수 있어요.
- 유연하게 설정하려면 그룹 안에서 **또는**을 쓰세요. 비슷한 직무, 업종, 기술을 묶을 수 있어요.
- 정밀하게 설정하려면 그룹 사이에서 **그리고**를 쓰세요. 직무, 업종, 회사 규모를 겹쳐서 지정할 수 있어요.
- LinkedIn에서 광고가 잘 노출되려면 잠재고객 규모를 50,000명 이상으로 맞추는 것이 좋아요.
