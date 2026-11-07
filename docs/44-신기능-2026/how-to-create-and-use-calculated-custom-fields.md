---
원문: /support/solutions/articles/155000009242-how-to-create-and-use-calculated-custom-fields
번역일: 2026-11-06
카테고리: 44-신기능-2026
---

# 계산형 커스텀 필드 만들고 사용하기

계산형 필드는 CRM에 이미 있는 데이터로 값을 자동으로 계산해 주는 커스텀 필드예요. 수식을 만들어 리드 점수를 구하거나, 중요한 날짜와 고객 이정표를 직접 수정하지 않고도 관리할 수 있어요.

## 계산형 필드란?

계산형 필드는 같은 CRM 레코드에 있는 데이터를 이용해 값을 자동으로 계산하는 커스텀 필드 유형이에요. 연락처, 기회, 커스텀 오브젝트에서 쓸 수 있고, 숫자·텍스트·날짜 결과를 계산할 수 있어요.

{% hint style="info" %}
계산형 필드는 읽기 전용이에요. 계산에 쓰이는 원본 필드 값이 바뀌면 자동으로 다시 계산돼요. 레코드 편집, 데이터 가져오기, 워크플로우로는 계산 결과를 직접 덮어쓸 수 없어요.
{% endhint %}

## 계산형 필드의 장점

계산형 필드는 미리 정해 둔 계산식에 따라 정보를 자동으로 업데이트해요. 수작업이 줄고 레코드를 일관되게 유지할 수 있어요.

- 자동 계산: 원본 필드가 바뀌면 계산 값도 직접 수정하지 않아도 최신 상태로 유지돼요.
- 유연한 계산: 수학, 텍스트, 날짜, 조건 계산을 할 수 있고 시간 기반 추적도 가능해요.
- 믿을 수 있는 결과: 저장하기 전에 수식을 테스트할 수 있고, 계산 값은 수동 변경으로부터 보호돼요.
- 스마트 리스트 연동: 계산 값을 열로 표시하고, 지원되는 필드는 연락처 필터로 쓸 수 있어요.

## 계산 유형

계산 유형은 네 가지예요. 직접 수식을 만들지, 중요한 날짜 사이의 시간을 재고 싶은지에 따라 고르세요.

| 계산 유형 | 설명 | 예시 |
| --- | --- | --- |
| **Custom Formula**(사용자 지정 수식) | 수학 연산자, 함수, 조건 로직으로 값을 계산해요. | 리드 점수 계산, 텍스트 필드 결합 |
| **기간 계산** | 두 날짜 필드 사이의 기간을 재요. | 리드 생성부터 전환까지 걸린 시간 |
| **Time Since**(경과 시간) | 선택한 날짜 이후 지난 시간을 추적해요. | 마지막 구매 후 경과 일수 |
| **Time Until**(남은 시간) | 선택한 날짜까지 남은 시간을 계산해요. | 계약 갱신까지 남은 일수 |

### Custom Formula

수학 연산자, 텍스트 함수, 날짜 함수, 조건 로직으로 계산식을 만들 수 있어요. **Formula Builder**(수식 빌더)에서 CRM 필드와 함수를 넣어 수식을 만들거나, **AI에게 문의**로 수식 작성을 도움받을 수 있어요.

![Custom Formula 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083702522/original/5ffNYB3FqVccY2LOtTUD2RLXWqc_Xd_cSQ.png?1792443142)

### 기간 계산

**Start Date Field**(시작 날짜 필드)와 **End Date Field**(종료 날짜 필드)를 고르면 두 날짜 사이의 기간을 계산해요.

### Time Since

**Start Date Field**를 고르면 그 날짜 이후 지난 시간을 계산해요.

![Time Since 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083701258/original/53LdJmnLiaPkLH-41qMZzqIGmrLsQkGRfw.png?1792441075)

### Time Until

**End Date Field**를 고르면 그 날짜까지 남은 시간을 계산해요.

![Time Until 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083701269/original/EkSzq5KZU8Ks4A4EyD18wsnOImfq2zsQ_A.png?1792441098)

{% hint style="info" %}
시간 계산에서 날짜만 있는 필드는 기본적으로 UTC 기준 오전 12:00으로 계산돼요.
{% endhint %}

## 출력 유형과 지원 함수

계산형 필드는 여러 출력 유형과 기본 함수를 지원해요. 결과가 어떻게 계산되고 표시될지 정할 수 있어요.

### 출력 유형

| 출력 유형 | 설명 |
| --- | --- |
| **Number**(숫자) | 합계, 평균, 점수 같은 숫자 값 |
| **Boolean**(참/거짓) | 조건에 따른 참 또는 거짓 결과 |
| **Text**(텍스트) | 결합·변환·서식 적용을 거친 텍스트 |
| **Date**(날짜) | 캘린더 날짜 결과 |
| **Date/Time**(날짜/시간) | 날짜와 시간이 모두 들어 있는 결과 |
| **Time**(시간) | 오전 10:30처럼 날짜 없이 시간 값만 반환 |

**Number** 출력은 **Formatted**(서식 적용), **Unformatted**(서식 없음), **Currency**(통화), **Percentage**(백분율) 중에서 고를 수 있어요. 시간 기반 계산 유형은 자동으로 **Duration**(기간) 출력을 사용해요.

![출력 유형 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083701597/original/ej-zp2ANOobu0hOVrqPIPaT6M4LMM22Lpw.png?1792441734)

### 지원 함수

**Formula Builder**에는 계산 종류별로 함수가 들어 있어요.

| 카테고리 | 지원 함수 |
| --- | --- |
| 수학 | SUM, AVERAGE, ROUND, MIN, MAX, ABS |
| 텍스트 | CONCAT, UPPER, LOWER, TRIM, LEFT, RIGHT, REPLACE |
| 날짜/시간 | ADD\_TIME, YEAR, MONTH, DAY, WEEKDAY |
| 논리 | IF, AND, OR, IS\_KNOWN |

**Formula Builder**에는 **Conversion**(변환) 카테고리와 **AI에게 문의**도 있어요. **AI에게 문의**를 쓰면 일상 언어로 설명한 내용을 수식으로 만들 수 있어요.

![Formula Builder의 함수 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083701688/original/GtRNW-IeNi7UXal-9YcbetF8DxGiZqFDCQ.png?1792441854)

## 스마트 리스트에서 계산형 필드 쓰기

연락처 스마트 리스트에서 계산형 필드를 열로 표시하면 다른 연락처 정보와 함께 계산 값을 볼 수 있어요. 지원되는 계산 유형은 필터로도 쓸 수 있어서 더 정확하게 연락처를 나눌 수 있어요.

| 계산 유형 | 스마트 리스트 열 | 스마트 리스트 필터 |
| --- | --- | --- |
| Custom Formula | 예 | 예(지원되는 경우) |
| 기간 계산 | 예 | 예(지원되는 경우) |
| Time Since | 예 | 아니요 |
| Time Until | 예 | 아니요 |

{% hint style="warning" %}
Time Since와 Time Until 필드는 스마트 리스트 열로는 표시할 수 있지만, 필터로는 쓸 수 없어요.

열이나 필터를 관리하려면 **연락처 > 스마트 리스트**로 이동해 해당 스마트 리스트를 설정하세요.

그 밖의 필터 옵션은 [스마트 리스트의 상세 필터](../02-연락처/advanced-filters-in-smart-lists.md)를 참고하세요.
{% endhint %}

## 계산형 필드 설정하기

계산형 필드는 필드 유형을 고르고, 계산을 설정한 뒤, 결과를 확인하는 순서로 만들어요. 저장하기 전에 수식을 테스트하면 생성되는 값이 원하는 결과와 맞는지 확인할 수 있어요.

1. **설정 > 커스텀 필드**로 이동해 CRM 오브젝트를 선택하고 **필드 만들기**를 클릭하세요.
2. 필드 유형에서 **Calculated**(계산형)를 선택하고 **필드명**, **폴더**, 그 밖의 필수 정보를 입력하세요.
3. **Calculate Field Settings**(계산 필드 설정)에서 **Custom Formula**, **기간 계산**, **Time Since**, **Time Until** 중 하나를 선택하세요.
4. 계산을 설정하세요.
   - Custom Formula: 출력 유형을 선택하고, **함수**, **필드**, **AI에게 문의**를 이용해 수식을 만드세요.
   - 시간 기반 계산: 필요한 날짜 필드를 선택하세요.

   ![계산 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083702184/original/cwj7_25AV2NbcwvuT6F3E-DQ_6NGV0TXTg.png?1792442594)
5. Custom Formula라면 샘플 값을 입력하고 **Test Formula**(수식 테스트)를 클릭하세요. 오류가 있으면 확인하고 **실시간 미리보기**도 살펴보세요.

   ![수식 테스트와 실시간 미리보기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083702178/original/-HEZIl2F9I6m3toh_XmNSLN1WQ8NnHuS_w.png?1792442575)
6. **Create Custom Field**(커스텀 필드 만들기)를 클릭해 저장하세요. 해당 CRM 레코드에 계산된 읽기 전용 값이 표시돼요.

   ![저장된 계산형 필드 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083702188/original/mdia_9T9i7h48oie29CUvNOgM8t3r2VMSA.png?1792442615)

## 자주 묻는 질문

### 계산형 필드 값을 업데이트하려면 워크플로우가 필요한가요?
아니요. 계산형 필드는 원본 필드가 바뀌면 워크플로우 없이 자동으로 다시 계산돼요.

### 수식 검증은 통과했는데 결과가 이상해요. 왜 그런가요?
수식 검증은 오류가 있는지만 확인해요. 그래서 검증을 통과해도 예상과 다른 결과가 나올 수 있어요. 원본 필드, 선택한 출력 유형, 수식 로직을 확인한 다음 샘플 값으로 **Test Formula**를 실행해 보세요.

### 시간 기반 계산 결과가 예상한 기간과 달라요. 왜 그런가요?
날짜만 있는 필드는 기간을 계산할 때 UTC 기준 오전 12:00으로 처리돼요. 선택한 날짜 필드와 그 값을 확인해서, 의도한 날짜로 계산되고 있는지 살펴보세요.

### AI에게 문의로 수식을 만들 수 있나요?
네. **Formula Builder**의 **AI에게 문의**에 원하는 계산을 설명하면 수식을 만들어 줘요. 저장하기 전에 생성된 수식을 검토하고 샘플 값으로 테스트하세요.
