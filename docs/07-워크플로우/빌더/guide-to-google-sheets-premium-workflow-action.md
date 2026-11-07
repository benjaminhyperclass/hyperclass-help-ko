---
원문: /support/solutions/articles/48001238162-guide-to-google-sheets-premium-workflow-action
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 프리미엄 액션 — Google Sheets 사용 가이드

Google Sheets 프리미엄 워크플로우 액션은 Google Sheets를 워크플로우와 바로 연결해 줘요. 타사 연동 없이 스프레드시트의 행 데이터를 만들고, 조회하고, 업데이트하고, 비울 수 있어요.

이 문서에서는 Google Sheets 액션 설정 방법, 단일 행·여러 행 기능, Lookup 결과 활용법, 자주 생기는 문제의 해결법을 안내해요.

## Google Sheets 프리미엄 워크플로우 액션이란?

Google Sheets 프리미엄 워크플로우 액션을 쓰면 Google Sheets를 워크플로우에 직접 연결해 스프레드시트 데이터 관리를 자동화할 수 있어요.

선택한 액션에 따라 워크플로우에서 다음 작업을 할 수 있어요.

- 새 스프레드시트 행 만들기
- 여러 스프레드시트 행 한 번에 만들기
- 기존 스프레드시트 행 조회하기
- 조건에 맞는 여러 행 반환하기
- 특정 행 업데이트하기
- 여러 행 업데이트하기
- Lookup 액션으로 찾은 행 업데이트하기
- 특정 행 비우기
- Lookup 액션으로 찾은 행 비우기

외부 자동화 플랫폼 없이도 자주 쓰는 스프레드시트 작업을 자동화할 수 있어요.

{% hint style="info" %}
**워크플로우 빌더**(Workflow Builder)에서는 Google Sheets가 액션으로 추가돼요. Google Sheets 액션 안에서 **Create Spreadsheet Row**(스프레드시트 행 만들기), **Lookup Spreadsheet Row**(스프레드시트 행 조회) 같은 선택지도 각각 액션으로 표시돼요.
{% endhint %}

## 주요 장점

- 스프레드시트 데이터 관리 자동화: 연락처가 워크플로우를 따라 이동할 때 스프레드시트 기록을 자동으로 만들고, 찾고, 수정해요.
- 수작업 입력 줄이기: 시스템 사이에서 정보를 직접 복사하지 않고 워크플로우 데이터를 Google Sheets로 바로 보내요.
- 데이터 구조 유지: 워크플로우 정보를 미리 정한 스프레드시트 열에 매핑해서 기록이 일정한 구조를 유지해요.
- 단일 기록과 여러 기록 지원: 기록 하나를 처리할 때는 일반 행 액션을, 한 번의 워크플로우 실행에 묶음 데이터가 있을 때는 여러 행 액션을 써요.
- 이후 워크플로우 단계에서 스프레드시트 데이터 사용: Lookup 액션이 스프레드시트 정보를 가져오고, 반환된 값을 이후 액션에서 쓸 수 있어요.

## 시작하기 전에

Google Sheets 워크플로우 액션을 설정하기 전에 다음을 확인하세요.

1. 해당 서브 계정에 Google 계정을 연결하세요.
2. 그 Google 계정이 필요한 Google Drive와 스프레드시트에 접근할 수 있는지 확인하세요.
3. Google 시트를 준비하고, 첫 번째 행에 열 머리글을 알아보기 쉽게 입력하세요.
4. 올바른 워크시트 탭이 있는지 확인하세요.
5. 필요한 경우 **워크플로우 프리미엄 기능**이 켜져 있는지 확인하세요.

{% hint style="warning" %}
Google Sheets는 프리미엄 워크플로우 액션이에요. 대상 서브 계정은 평생 100회의 무료 프리미엄 실행을 받아요. 이 횟수를 모두 쓰고 나면, 해당 서브 계정에 적용되는 **워크플로우 Pro** 요금제가 없는 한 기본 프리미엄 실행 요금이 적용돼요. 현재 요금과 포함된 실행 횟수, 초과 요금 등 자세한 내용은 「워크플로우 프리미엄 기능 활성화 및 재청구 방법」(How to Enable and Rebill Workflow Premium Features) 문서를 참고하세요.
{% endhint %}

## Google Sheets 연동 설정하기

### 1단계: Google Sheets 액션 추가하기

1. **자동화 > 워크플로우**로 이동하세요.
2. 기존 워크플로우를 열거나 새 워크플로우를 만드세요.
3. **+** 아이콘을 클릭해 액션을 추가하세요.
4. **Google Sheets**를 검색해서 선택하세요.

   ![액션 목록에서 Google Sheets 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082035498/original/TM9vKH6ngoTmFkZZ4fV176umQjtkESX3OA.png?1790614186)
5. 실행하려는 Google Sheets 액션을 선택하세요.

### 2단계: Google 계정 연결하기

아직 Google 계정을 연결하지 않았다면, 사용할 Google 계정을 연결하고 권한을 승인하세요. 연결한 계정이 워크플로우에서 쓰는 Drive와 스프레드시트에 접근할 수 있어야 해요.

### 3단계: Google Drive 선택하기

스프레드시트가 들어 있는 **Drive**(드라이브)를 선택하세요.

### 4단계: 스프레드시트 선택하기

워크플로우가 데이터를 만들거나, 가져오거나, 업데이트하거나, 비울 Google 스프레드시트를 **Spreadsheet**(스프레드시트)에서 고르세요.

### 5단계: 워크시트 선택하기

스프레드시트 안에서 사용할 워크시트 탭을 **Worksheet**(워크시트)에서 선택하세요.

![Drive, Spreadsheet, Worksheet 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082076619/original/PLmiFiBlOhNfNDpXiim6-y_uJBHSxL5Y9w.png?1790672151)

## Google Sheets 액션 기본 설정

선택한 Google Sheets 액션에 따라 표시되는 필드는 달라질 수 있어요. 공통으로 나오는 설정은 다음과 같아요.

### Google Account(Google 계정)

연결된 Google 계정을 선택해요.

### Drive(드라이브)

스프레드시트가 들어 있는 Google Drive를 선택해요.

### Spreadsheet(스프레드시트)

워크플로우에서 사용할 스프레드시트를 선택해요.

### Worksheet(워크시트)

데이터가 들어 있는 워크시트 탭을 선택해요.

### Refresh Headers(헤더 새로고침)

워크시트의 첫 번째 행은 머리글 행으로 인식돼요. 워크플로우를 설정한 뒤에 스프레드시트 열을 추가하거나, 이름을 바꾸거나, 삭제하거나, 순서를 바꿨다면 **Refresh Headers**를 클릭해 최신 열 구조를 불러오세요.

### Starting Column, Ending Column(시작 열, 끝 열)

워크플로우 액션이 사용할 스프레드시트 열의 범위를 선택해요. 선택한 범위 안의 열 머리글이 필드 매핑에 표시돼요.

{% hint style="info" %}
Drive, Spreadsheet, Worksheet의 이름을 정확히 알고 있으면 액션을 설정할 때 더 쉽게 찾을 수 있어요.
{% endhint %}

## 사용할 수 있는 Google Sheets 액션

| 액션 | 설명 |
| --- | --- |
| **Create Spreadsheet Row** | 스프레드시트에 새 행을 추가해요. |
| **Create Multiple Spreadsheet Row(s)** | 워크플로우 실행에 기록이 여러 개 있을 때 행을 하나 이상 추가해요. |
| **Lookup Spreadsheet Row** | 설정한 검색 조건에 맞는 스프레드시트 행을 찾아요. |
| **Lookup Multiple Spreadsheet Row(s)** | 설정한 조회 조건과 행 수에 따라 여러 행을 반환해요. |
| **Update Specific Spreadsheet Row** | 지정한 행 번호의 값을 업데이트해요. |
| **Update Multiple Spreadsheet Row(s)** | 이미 있는 여러 스프레드시트 행의 값을 업데이트해요. |
| **Update Spreadsheet Row Using Lookup** | 앞에 있는 Lookup 액션이 반환한 행을 업데이트해요. |
| **Delete Specific Spreadsheet Row** | 지정한 행의 값을 비워요. 행 자체는 삭제하지 않아요. |
| **Delete Spreadsheet Row Using Lookup** | 앞에 있는 Lookup 액션이 반환한 행의 값을 비워요. |

{% hint style="warning" %}
Delete Spreadsheet Row 액션은 선택한 행의 내용을 비워요. Google 시트에서 행 자체를 삭제하지는 않아요.
{% endhint %}

## Create Spreadsheet Row

워크플로우에서 워크시트에 기록 하나를 새로 추가해야 할 때 **Create Spreadsheet Row**를 사용하세요. 새 행은 기존 행 중 가장 큰 번호의 행 다음에 추가돼요.

### Create Spreadsheet Row 설정하기

1. 워크플로우에 **Google Sheets** 액션을 추가하세요.
2. **Create Spreadsheet Row**를 선택하세요.
3. **Google Account**를 선택하세요.
4. **Drive**를 선택하세요.
5. **Spreadsheet**를 선택하세요.
6. **Worksheet**를 선택하세요.

   ![Create Spreadsheet Row 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082076524/original/XberH0NAR9sivP9dNLfhWWUt32XtP1uvWQ.png?1790672126)
7. 워크시트 구조가 바뀌었다면 **Refresh Headers**를 클릭하세요.
8. **Starting Column**과 **Ending Column**을 선택하세요.
9. 워크플로우 값을 알맞은 스프레드시트 열에 매핑하세요.
10. **Save Action**(액션 저장)을 클릭하세요.

워크플로우를 한 번 실행할 때마다 스프레드시트 행을 하나씩 만들고 싶을 때 이 액션을 사용하세요.

## Create Multiple Spreadsheet Row(s)

한 번의 워크플로우 실행에 기록이 여러 개 있고, 이를 각각 별도의 스프레드시트 행으로 추가해야 할 때 **Create Multiple Spreadsheet Row**(s)를 사용하세요.

### Create Multiple Spreadsheet Row(s)의 동작 방식

이 액션은 워크플로우 실행이 데이터를 **행 객체의 배열**(목록)로 받았을 때만 여러 행을 만들어요.

배열 안의 객체 하나가 스프레드시트 행 하나가 돼요. 예를 들어 행 객체 3개가 든 배열은 스프레드시트 행 3개를 만들어요.

{% hint style="warning" %}
워크플로우에 따로따로 들어온 연락처는 각각 별도의 워크플로우 실행으로 처리돼요. Create Multiple Spreadsheet Row(s)는 다른 연락처를 기다리지 않고, 각각 등록된 연락처를 자동으로 묶어 일괄 처리하지도 않아요.
{% endhint %}

워크플로우 실행 중에 기록이 하나뿐이면 이 액션도 행을 하나만 만들어요.

### Create Multiple Spreadsheet Row(s) 설정하기

1. **Google Sheets** 액션을 추가하세요.
2. **Create Multiple Spreadsheet Row**(s)를 선택하세요.

   ![Create Multiple Spreadsheet Row(s) 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082076450/original/NFsRp9p54Uma6HrgkadKXBrvHqB36BkMWQ.png?1790672104)
3. 연결된 **Google Account**를 선택하세요.
4. 알맞은 **Drive**를 선택하세요.
5. **Spreadsheet**를 선택하세요.
6. **Worksheet**를 선택하세요.
7. 스프레드시트 열이 바뀌었다면 **Refresh Headers**를 클릭하세요.
8. **Starting Column**과 **Ending Column**을 선택하세요.
9. 사용할 수 있는 배열 데이터를 스프레드시트 열에 매핑하세요.
10. **Save Action**을 클릭하세요.

## 여러 행 전달하기

같은 워크플로우 실행 안에서 행 객체의 배열을 받거나 만들어야 해요. 흔한 경로는 다음과 같아요.

- 기록 배열이 담긴 **Inbound Webhook**(수신 웹훅)
- 이전 단계가 반환한 배열을 액션에 매핑할 수 있는 웹훅 기반 연동

예를 들어 기존 연락처 수천 명을 워크플로우에 하나씩 등록해도 그 연락처들이 하나의 여러 행 요청으로 자동으로 묶이지는 않아요. 연락처마다 워크플로우가 따로 실행돼요.

### 이럴 때 사용하세요

Create Multiple Spreadsheet Row(s)는 다음 경우에 사용하세요.

- 묶음 기록을 로그로 남길 때
- 한 번의 워크플로우 실행에서 받은 반복 데이터를 기록할 때
- 관련된 여러 기록을 각각 다른 스프레드시트 행에 저장할 때
- 수신 웹훅으로 받은 배열을 처리할 때

배열 예시는 「워크플로우 액션 - Google Sheets에서 여러 행 만들기 및 업데이트하기」(Workflow Action - Create & Update Multiple Rows in Google Sheets) 문서를 참고하세요.

## Lookup Spreadsheet Row

**Lookup Spreadsheet Row**는 지정한 조건으로 기존 스프레드시트 행을 검색해요. 일치하는 행을 찾으면 그 행의 값을 이후 워크플로우 액션에서 참조할 수 있어요.

예를 들어 연락처의 이메일 주소나 전화번호로 스프레드시트 기록을 찾을 수 있어요.

### Lookup Spreadsheet Row 설정하기

**Worksheet 선택**

검색할 데이터가 들어 있는 워크시트를 선택하세요.

**Search Order(검색 순서) 선택**

워크시트를 검색할 방향을 선택하세요.

- **From the top of the Sheet**(시트 위에서부터): 처음 일치하는 행을 반환해요.
- **From the bottom of the Sheet**(시트 아래에서부터): 시트에서의 위치를 기준으로 가장 최근에 일치하는 행을 반환해요.

**Column과 Lookup Value 선택**

워크플로우가 검색할 열(**Column**)을 선택하고, 일치해야 하는 값(**Lookup Value**, 조회 값)을 입력하세요. 워크시트의 첫 번째 행은 머리글 행으로 인식돼요.

사용할 수 있는 머리글이 최신이 아니면 **Refresh Headers**를 클릭하세요.

**조회 열 추가하기**

조건이 두 개 이상이어야 일치하는 행을 찾을 수 있다면 Column과 Lookup Value를 하나 더 추가할 수 있어요. 열을 추가하면 설정한 조회 조건을 모두 만족하는 행이 일치하는 행으로 인식돼요.

## Lookup이 일치하는 행을 찾지 못하면 스프레드시트 행 만들기

Lookup Spreadsheet Row 액션 안에서 일치하는 행이 없을 때 스프레드시트 행을 만드는 옵션을 켤 수 있어요.

이 옵션을 켜면 Lookup이 일치하는 행을 반환하지 못할 때 워크플로우가 **Create Spreadsheet Row**를 실행해요.

{% hint style="info" %}
Create Spreadsheet Row 실행은 기록과 요금 부과가 별도의 프리미엄 실행으로 이루어져요.
{% endhint %}

이 옵션은 다음과 같은 워크플로우에 유용해요.

- 스프레드시트 기록이 있으면 업데이트하기
- 스프레드시트 기록이 없으면 새로 만들기

## Lookup Multiple Spreadsheet Row(s)

**Lookup Multiple Spreadsheet Row**(s)는 기본 Lookup 액션을 확장해, 워크플로우가 스프레드시트 행을 여러 개 반환할 수 있게 해 줘요.

설정 방법은 Lookup Spreadsheet Row와 비슷하고, **Row Count**(행 수) 필드가 하나 더 있어요.

### Lookup Multiple Spreadsheet Row(s) 설정하기

1. **Google Sheets** 액션을 추가하세요.
2. **Lookup Multiple Spreadsheet Row**(s)를 선택하세요.

   ![Lookup Multiple Spreadsheet Row(s) 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082076876/original/7ygyiYICThkJqmg5mjtlYfavxmzJ32Tl1Q.png?1790672239)
3. Google Account, Drive, Spreadsheet, Worksheet를 선택하세요.
4. 조회 조건을 설정하세요.
5. 알맞은 검색 순서를 선택하세요.
6. **Row Count** 필드에 반환할 행 수를 입력하세요.
7. 액션을 저장하세요.

일치하는 스프레드시트 기록을 두 개 이상 가져와야 할 때 이 액션을 사용하세요.

## Update Specific Spreadsheet Row

수정할 스프레드시트 행을 이미 알고 있을 때 **Update Specific Spreadsheet Row**를 사용하세요.

### Update Specific Spreadsheet Row 설정하기

1. **Google Sheets** 액션을 추가하세요.
2. **Update Specific Spreadsheet Row**를 선택하세요.

   ![Update Specific Spreadsheet Row 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082077207/original/EnT_krdoMUptq9xLtPf8y0YGaBYsrq-eNQ.png?1790672390)
3. Google Account, Drive, Spreadsheet, Worksheet를 선택하세요.
4. 업데이트할 **Row Number**(행 번호)를 입력하세요.
5. **Starting Column**과 **Ending Column**을 선택하세요.
6. 새 값을 알맞은 열에 매핑하세요.
7. **Save Action**을 클릭하세요.

알맞은 동적 값이 있으면 **Custom Variable Picker**(커스텀 변수 선택기)로 Row Number를 동적으로 넣을 수도 있어요.

특정 열을 업데이트하고 싶지 않다면 액션 설정에서 지원하는 경우에 한해 해당 매핑 필드를 비워 둘 수 있어요.

## Update Multiple Spreadsheet Row(s)

스프레드시트 행이 이미 있고, 워크플로우에서 여러 행의 값을 수정해야 할 때 **Update Multiple Spreadsheet Row**(s)를 사용하세요.

중복 기록을 만들지 않고 기존 스프레드시트 데이터를 최신으로 유지해야 할 때 유용해요.

### Update Multiple Spreadsheet Row(s) 설정하기

1. **Google Sheets** 액션을 추가하세요.
2. **Update Multiple Spreadsheet Row**(s)를 선택하세요.
3. 연결된 **Google Account**를 선택하세요.
4. **Drive**를 선택하세요.
5. **Spreadsheet**를 선택하세요.
6. **Worksheet**를 선택하세요.
7. 업데이트를 시작할 행 번호를 입력하세요.
8. **Starting Column**과 **Ending Column**을 선택하세요.
9. 워크시트 구조가 바뀌었다면 **Refresh Headers**를 클릭하세요.
10. 업데이트할 값을 매핑하세요.
11. **Save Action**을 클릭하세요.

### Update Multiple Spreadsheet Row(s)를 사용하는 경우

다음 경우에 이 액션을 사용하세요.

- 대상 스프레드시트 행이 이미 있을 때
- 기존 값을 바꾸거나 최신 값으로 갱신해야 할 때
- 여러 스프레드시트 행을 수정해야 할 때
- 행을 새로 추가하지 않고 기존 데이터를 업데이트하고 싶을 때

더 자세한 설정 방법은 「워크플로우 액션 - Google Sheets에서 여러 행 만들기 및 업데이트하기」(Workflow Action - Create & Update Multiple Rows in Google Sheets) 문서를 참고하세요.

## Update Spreadsheet Row Using Lookup

워크플로우가 먼저 스프레드시트 행을 찾고 그 행을 업데이트해야 할 때 **Update Spreadsheet Row Using Lookup**을 사용하세요.

워크플로우에서 **Lookup Spreadsheet Row** 액션이 이 액션보다 앞에 있어야 해요.

### Update Spreadsheet Row Using Lookup 설정하기

**1단계: Lookup Spreadsheet Row 추가하기**

대상 스프레드시트 행을 찾도록 Lookup 액션을 설정하세요.

**2단계: Update Spreadsheet Row Using Lookup 추가하기**

Google Sheets 액션을 하나 더 추가하고 **Update Spreadsheet Row Using Lookup**을 선택하세요.

**3단계: Lookup 액션 선택하기**

결과 행을 업데이트할 Lookup 액션을 선택하세요. 워크플로우에서 앞에 있는 Lookup 액션 중 사용할 수 있는 것만 선택 목록에 나와요.

**4단계: 열 설정하기**

**Starting Column**과 **Ending Column**을 선택한 다음, 업데이트할 값을 매핑하세요.

#### 알아 둘 점

- 업데이트 액션에는 Lookup 액션을 하나만 선택할 수 있어요.
- 선택한 Lookup 액션이 행을 반환하지 않으면 업데이트 단계는 건너뛰고 워크플로우는 계속 진행돼요.
- Lookup 액션은 Update Using Lookup 액션보다 앞에 있어야 해요.

## Delete Specific Spreadsheet Row

특정 스프레드시트 행의 값을 모두 비울 때 **Delete Specific Spreadsheet Row**를 사용하세요.

### Delete Specific Spreadsheet Row 설정하기

1. **Google Sheets** 액션을 추가하세요.
2. **Delete Specific Spreadsheet Row**를 선택하세요.
3. Google Account, Drive, Spreadsheet, Worksheet를 선택하세요.
4. **Row Number**를 입력하세요.
5. 액션을 저장하세요.

알맞은 값이 있으면 Custom Variable Picker로 Row Number를 동적으로 넣을 수도 있어요.

{% hint style="warning" %}
이 액션은 지정한 행의 내용을 비워요. 워크시트에서 행 자체를 삭제하지는 않아요.
{% endhint %}

## Delete Spreadsheet Row Using Lookup

워크플로우가 먼저 행을 찾고 그 행의 내용을 비워야 할 때 **Delete Spreadsheet Row Using Lookup**을 사용하세요.

Lookup 액션이 이 액션보다 앞에 있어야 해요.

### Delete Spreadsheet Row Using Lookup 설정하기

1. **Lookup Spreadsheet Row**를 추가하고 설정하세요.
2. Google Sheets 액션을 하나 더 추가하세요.
3. **Delete Spreadsheet Row Using Lookup**을 선택하세요.
4. 해당하는 Lookup 액션을 선택하세요.
5. 액션을 저장하세요.

워크플로우에서 앞에 있는 Lookup 액션 중 사용할 수 있는 것만 선택 목록에 나와요. Lookup 액션이 행을 반환하면 그 행의 값이 비워져요.

Lookup 액션이 일치하는 행을 반환하지 않으면 Delete Using Lookup 단계는 건너뛰고 워크플로우는 계속 진행돼요.

{% hint style="warning" %}
Delete Using Lookup은 행의 내용을 비워요. 워크시트에서 행 자체를 삭제하지는 않아요.
{% endhint %}

## Lookup 결과를 커스텀 변수로 사용하기

Lookup Spreadsheet Row의 큰 장점은 일치하는 행에서 반환된 값을 워크플로우 뒷부분에서 쓸 수 있다는 점이에요.

Lookup이 행을 찾으면 스프레드시트 값이 해당 열 머리글에 맞춰 매핑되고, 이후 워크플로우 액션에서 사용할 수 있게 돼요.

예를 들어 워크시트에 다음 열이 있다고 해 볼게요.

- Name
- Email
- Phone
- Status

이메일 주소로 Lookup하면 일치하는 행을 가져와서 그 값들을 이후 워크플로우 단계에서 쓸 수 있어요.

이 값들은 지원되는 워크플로우 액션이나 조건에서 사용할 수 있어요.

### Lookup 인덱스

Lookup 액션을 추가하면 인덱스가 자동으로 생성돼요. 인덱스는 Lookup 액션을 구분하는 값이고, 반환된 스프레드시트 데이터를 매핑할 때 내부적으로 사용돼요.

한 번 생성된 인덱스는 직접 바꿀 수 없어요.

### 행 번호 가져오기

Lookup 액션이 반환한 행 번호는 다음과 같이 참조할 수 있어요.

`{{sheet.x.rowNumber}}`

`x`를 해당 Lookup 액션의 인덱스로 바꾸세요.

반환된 행 번호는 다른 워크플로우 액션이 스프레드시트 행을 동적으로 참조해야 할 때 유용해요.

## If/Else 조건에서 Lookup 결과 사용하기

Lookup 결과는 워크플로우 조건에서도 사용할 수 있어요. **If/Else**(조건 분기) 액션과 함께 쓰면 예를 들어 다음과 같은 로직을 만들 수 있어요.

- 일치하는 기록이 있으면 스프레드시트 행 업데이트하기
- 일치하는 기록이 없으면 새 스프레드시트 행 만들기

이렇게 하면 중복 기록을 막고 스프레드시트 정보를 동기화된 상태로 유지하는 데 도움이 돼요.

{% hint style="warning" %}
Lookup 액션이 일치하는 행을 찾지 못하면 그 Lookup 결과에 의존하는 이후 Google Sheets 액션은 건너뛸 수 있어요. 일치하는 결과가 없기 때문이에요.
{% endhint %}

다음 액션을 사용할 때 이 동작을 고려하세요.

- Update Spreadsheet Row Using Lookup
- Delete Spreadsheet Row Using Lookup

## 문제 해결

### 스프레드시트나 워크시트가 보이지 않아요

다음을 확인하세요.

- 올바른 Google 계정이 연결되어 있는지
- 연결된 Google 계정이 해당 Drive에 접근할 수 있는지
- 올바른 Drive를 선택했는지
- 그 계정에 스프레드시트에 접근할 권한이 있는지
- 선택한 스프레드시트에 원하는 워크시트가 있는지

필요하면 Google 계정을 다시 연결하거나 다시 승인하세요.

### 스프레드시트 헤더가 없거나 최신이 아니에요

최근에 열을 추가하거나, 이름을 바꾸거나, 삭제하거나, 순서를 바꿨다면 Google Sheets 액션에서 **Refresh Headers**를 클릭하세요.

새로고침한 뒤에는 워크플로우를 게시하기 전에 필드 매핑을 확인하세요.

### 열 매핑이 잘못되었어요

다음을 확인하세요.

- 워크시트 첫 번째 행에 예상한 머리글이 있는지
- 올바른 Starting Column과 Ending Column을 선택했는지
- 스프레드시트를 바꾼 뒤 헤더를 새로고침했는지
- 워크플로우 값이 올바른 스프레드시트 열에 매핑되어 있는지

### Lookup이 행을 반환하지 않아요

다음을 확인하세요.

- 선택한 조회 열
- Lookup Value
- 검색 순서
- 추가로 설정한 조회 조건
- Google 시트에 실제로 저장된 값

Lookup 결과에 의존하는 액션은 행이 반환되지 않으면 건너뛸 수 있다는 점을 기억하세요.

### Update나 Delete Using Lookup이 건너뛰어져요

앞에 있는 Lookup 액션을 확인하세요.

Lookup이 일치하는 행을 반환하지 않으면, 그 결과에 의존하는 액션은 처리할 대상 행이 없어서 건너뛸 수 있어요.

Lookup이 결과를 반환했는지는 워크플로우 실행 로그에서 확인하세요.

### Create Multiple Spreadsheet Row(s)가 행을 하나만 만들어요

액션에 전달되는 데이터를 확인하세요.

Create Multiple Spreadsheet Row(s)가 한 번의 워크플로우 실행에서 여러 행을 만들려면 행 객체의 배열이 필요해요.

기록이 하나뿐이면 행도 하나만 만들어져요. 따로따로 워크플로우에 들어온 연락처는 하나의 배열로 자동으로 묶이지 않아요.

### 새 스프레드시트 열이 보이지 않아요

워크시트 구조를 바꾼 뒤에는 **Refresh Headers**를 클릭하세요. 그런 다음 액션을 저장하기 전에 열 매핑을 확인하고 필요하면 수정하세요.

## 자주 묻는 질문

### Create Spreadsheet Row와 Create Multiple Spreadsheet Row(s)는 무엇이 다른가요?

**Create Spreadsheet Row**는 워크플로우를 한 번 실행할 때 새 행을 하나 만들어요.

**Create Multiple Spreadsheet Row**(s)는 워크플로우가 행 객체 여러 개가 든 배열을 받으면, 한 번의 워크플로우 실행에서 여러 행을 만들 수 있어요.

### Create Multiple Spreadsheet Row(s)는 워크플로우에 들어오는 연락처를 자동으로 묶어서 처리하나요?

아니요. 워크플로우에 각각 들어온 연락처는 별도의 워크플로우 실행으로 처리돼요. 한 번의 실행에서 여러 행을 만들려면 워크플로우에 이미 행 객체의 배열이 있어야 해요.

### Create Multiple Spreadsheet Row(s)가 행을 하나만 만든 이유가 뭔가요?

워크플로우 실행에 기록이 하나만 들어 있을 수 있어요. 여러 행을 만들려면 행 객체 여러 개가 든 배열을 액션에 전달하세요.

### Create Multiple Spreadsheet Row(s)와 Update Multiple Spreadsheet Row(s)는 무엇이 다른가요?

**Create Multiple Spreadsheet Row**(s)는 새 스프레드시트 항목을 추가해요.

**Update Multiple Spreadsheet Row**(s)는 이미 있는 스프레드시트 행의 값을 바꿔요.

### Lookup Multiple Spreadsheet Row(s)가 반환한 행을 전부 업데이트하거나 삭제할 수 있나요?

Lookup Multiple Spreadsheet Row(s)는 여러 행을 반환할 수 있지만, **Update Spreadsheet Row Using Lookup**이나 **Delete Spreadsheet Row Using Lookup** 같은 단일 행 액션은 반환된 결과를 하나씩 자동으로 모두 처리하지 않아요.

일괄 업데이트가 지원되는 경우에는 **Update Multiple Spreadsheet Row**(s)를 사용하세요.

Lookup Multiple 결과를 하나씩 따로 처리하거나 반환된 각 행에 맞춤 로직을 적용해야 한다면 워크플로우 로직을 추가로 구성해야 할 수 있어요.

### Google 시트 헤더 이름을 바꾸면 어떻게 되나요?

Google Sheets 워크플로우 액션에서 **Refresh Headers**를 클릭하고, 변경의 영향을 받는 매핑을 확인하세요.

### 한 워크플로우에서 Google 시트를 여러 개 사용할 수 있나요?

네. 사용할 수 있는 경우, Google Sheets 액션마다 Google 계정, Drive, Spreadsheet, Worksheet를 따로 설정할 수 있어요.

### Delete Spreadsheet Row는 실제 행을 삭제하나요?

아니요. Delete Spreadsheet Row 액션은 대상 행에 저장된 값을 비우지만, 스프레드시트 행 자체를 삭제하지는 않아요.

### Update Using Lookup이나 Delete Using Lookup 전에 왜 Lookup을 써야 하나요?

Lookup이 대상 스프레드시트 행을 찾아 줘요. Update Spreadsheet Row Using Lookup과 Delete Spreadsheet Row Using Lookup은 그 결과로 수정하거나 비울 행을 정해요. Lookup이 결과를 반환하지 않으면 그에 의존하는 액션은 건너뛰어져요.

### Google 시트에 헤더가 꼭 있어야 하나요?

네. 워크시트의 첫 번째 행이 머리글 행으로 인식되고, 매핑에 쓸 수 있는 열이 그 머리글로 정해져요.

열 이름을 명확하고 겹치지 않게 지으면 워크플로우 설정이 더 쉬워져요.
