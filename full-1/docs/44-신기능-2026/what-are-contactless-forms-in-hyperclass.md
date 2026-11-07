---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009402-what-are-contactless-forms-in-highlevel-
번역일: 2026-11-06
카테고리: 44-신기능-2026
---

# 연락처 없는 폼(Contactless Forms) 알아보기

연락처 없는 폼을 쓰면 연락처 정보 없이도 기회, 회사, 사용자 지정 객체 기록을 만들 수 있어요. 기회 하나만 따로 만들 수도 있고, 폼 제출 한 번으로 서로 연결된 기록 두 개를 만들 수도 있어요. 견적 요청, 딜 등록, 부동산 문의 같은 업무를 불필요한 연락처 기록 없이 처리할 수 있어요.

{% hint style="info" %}
이 기능은 현재 기회 우선 프라이빗 베타(Opportunity First Private Beta)로 제공돼요. 베타가 활성화된 계정(location)에서만 쓸 수 있어요.
{% endhint %}

[동영상](https://jumpshare.com/embed/LD1ZwaUeYHPIe44A3MOd)

---

## 연락처 없는 폼의 장점

연락처 없는 폼은 연락처 정보에 의존하지 않고도 필요한 정보를 받아 기록을 자동으로 정리해 줘요.

- **연락처 없이 사용:** 이름, 이메일, 전화번호를 받지 않아도 기회와 그 밖의 기록을 만들 수 있어요.
- **여러 기록 생성:** 폼 제출 한 번으로 서로 연결된 기록 두 개를 만들 수 있어요.
- **자동 연관:** 미리 정해 둔 연관 레이블로 기록끼리 연결해요.
- **유연한 데이터 수집:** 필요에 따라 기회, 회사, 사용자 지정 객체 필드를 추가할 수 있어요.
- **기회 설정:** 새로 만들어지는 기회의 파이프라인, 단계, 상태, 금액을 정해 둘 수 있어요.

---

## 지원하는 객체 조합

연락처 없는 폼은 여러 객체 조합을 지원해서, 업무 방식에 맞는 기록을 만들 수 있어요.

| 조합 | 사용 예시 |
| --- | --- |
| 기회만 | 견적 요청, 프로젝트 문의 |
| 기회 + 회사 | 파트너 딜 등록 |
| 기회 + 사용자 지정 객체 | 부동산 방문 요청 |
| 회사 + 사용자 지정 객체 | 상업용 임대 문의 |

객체를 두 개 넣으면 기록 두 개가 모두 만들어지고, 선택한 연관 레이블로 자동 연결돼요.

---

## 객체 필드 추가하기

**Add Object Fields**(객체 필드 추가) 옵션에서 기회, 회사, 기존 사용자 지정 객체의 필드를 골라 폼에 넣을 수 있어요. 제출된 정보는 해당 기록에 바로 저장돼요.

1. **폼 빌더**를 열어요.
2. **Add Object Fields**를 클릭해요.
3. **기회**, **회사**, 또는 사용자 지정 객체를 선택해요.
4. 폼에 넣을 필드를 골라요.

{% hint style="warning" %}
폼에 기회 필드가 있으면 **기회명**은 필수예요.
{% endhint %}

---

## 연관 레이블 이해하기

연관 레이블은 두 기록이 어떻게 연결되는지를 정해요. 두 번째 객체의 필드를 추가하면 레이블을 고르라는 창이 나와요. **주 회사**, 비즈니스, 리스팅 같은 레이블을 고를 수 있어요.

연관 레이블을 설정하려면 다음 순서로 진행하세요.

1. **설정 > 오브젝트 > 연관**으로 이동해요. (객체를 선택한 뒤에 사용할 수 있어요.)
2. 필요한 연관 레이블을 만들거나 선택해요.

   ![연관 레이블 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084203913/original/R9s9YDssHY-gybBR9nqo5HGcjQEvofci7A.png?1793018085)
3. 폼으로 돌아가 두 번째 객체를 추가할 때 그 레이블을 선택해요.
4. **저장**을 클릭해요.

자세한 내용은 [기회, 회사, 사용자 지정 객체 간 연관](../36-기타/리커버리/associations-between-opportunities-companies-custom-objects.md) 문서를 참고하세요.

---

## 기회 설정 구성하기

**Opportunity Settings**(기회 설정)는 새로 만들어진 기회가 CRM의 어디에 나타날지 정해요. 제출될 때마다 적용될 **Pipeline**(파이프라인), **Stage**(단계), **Status**(상태), **Opportunity Value**(기회 금액)를 설정할 수 있어요.

1. **기회명** 필드를 선택해요.
2. **Edit Opportunity Settings**(기회 설정 편집)를 클릭해요.
3. **Pipeline**, **Stage**, **Status**, **Opportunity Value**를 설정해요.
4. 설정을 저장해요.

   ![기회 설정 편집 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084204097/original/sbvu277N-i4Y5M4j51EqPNf9fiRswW9jzA.png?1793018180)

이 폼으로 만들어진 기회는 소스(Source)가 **FORM**으로 설정돼요.

{% hint style="info" %}
**Opportunity Value**는 기회 설정에서 정해요. 방문자가 직접 입력한 금액을 받고 싶다면 제안 금액(Proposal Amount) 같은 기회 커스텀 필드를 쓰세요. 자세한 내용은 [기회에 커스텀 필드 사용하기](../05-기회-파이프라인/how-to-use-custom-fields-for-opportunities.md) 문서를 참고하세요.
{% endhint %}

---

## 연락처 없는 폼 설정하기

연락처 없는 폼을 만들려면 필요한 객체 필드를 추가하고, 해당하면 연관을 설정하고, 기회 설정을 정하면 돼요. 이렇게 설정해 두면 누군가 폼을 제출할 때 알맞은 기록이 자동으로 만들어져요. 일반 폼 만드는 방법은 [연락처 폼 만들기](../02-연락처/기타/how-to-create-a-contact-form-in-hyperclass.md) 문서에서 볼 수 있어요.

1. **폼 빌더 열기:** **사이트 > 폼**으로 이동해 폼을 만들거나 열어요. 기본으로 들어 있는 연락처 필드는 지워요.

   ![폼 빌더에서 기본 연락처 필드를 지운 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084204284/original/SG9seg093MwWrBSdrDhCXb_0abjvOZ7oHw.png?1793018257)
2. **객체 필드 추가:** **Add Object Fields**를 클릭하고, **기회** 또는 **회사**를 선택한 뒤 필요한 필드를 추가해요.

   ![Add Object Fields에서 객체 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084204405/original/iTVRlZ2Nmrp476fcFXd9XnSP86tADx4vmg.png?1793018343)

   ![객체 필드를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084204490/original/Ac0QxbhEIWCPtIu-9ndokqzTAkWYGnJOdA.png?1793018379)
3. **두 번째 객체 추가(선택):** 객체 드롭다운을 **회사** 또는 사용자 지정 객체로 바꾸고 필드를 추가해요. 팝업에서 연관 레이블을 선택한 뒤 **저장**을 클릭해요. 기회만 만드는 폼이라면 이 단계는 건너뛰세요.

   ![두 번째 객체의 연관 레이블을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084205112/original/UwDxR7JytSe8y0qQfFmV9WfzvkZHlQS57g.png?1793018635)
4. **기회 설정 구성:** 폼에 기회 필드가 있으면 **기회명 > Edit Opportunity Settings**를 선택해 파이프라인, 단계, 상태, 금액을 설정해요.
5. **저장 및 공유:** 폼을 저장하고, 사용할 수 있는 게시 옵션으로 공유해요.
6. **제출 내역 확인:** **사이트 > 폼 > 제출**로 이동해 제출된 내용을 확인해요. 만들어진 기록을 열어 연관이 제대로 연결됐는지 살펴보세요.

---

## 자주 묻는 질문

### 연락처 없이 기회를 만들 수 있나요?

네. 기회만 만드는 폼은 연락처 정보 없이도 기회를 만들어요.

### 폼 하나로 기록을 세 개 이상 만들 수 있나요?

현재는 기회 하나를 만드는 폼과, 지원하는 객체 두 개 조합만 안내돼 있어요. 기록을 두 개보다 많이 만들 수 있는지는 확인되지 않았어요.

### 직접 만든 연관 레이블을 쓸 수 있나요?

네. 폼에서 고르기 전에 **설정 > 오브젝트 > 연관**에서 연관 레이블을 먼저 설정하세요.

### 방문자가 기회 금액을 직접 입력하게 할 수 있나요?

기회 커스텀 필드를 쓰면 방문자가 입력한 금액을 받을 수 있어요. 다만 이 금액이 폼 설정에서 정한 **Opportunity Value**를 자동으로 바꾸지는 않아요.

### 설문과 퀴즈에서도 연락처 없는 폼을 쓸 수 있나요?

폼에서 쓸 수 있다는 것은 확인됐어요. 설문과 퀴즈 지원 여부는 확인되지 않았어요.
