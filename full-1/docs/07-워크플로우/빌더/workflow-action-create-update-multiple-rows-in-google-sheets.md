---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002097-workflow-action-create-update-multiple-rows-in-google-sheets
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Create & Update Multiple Rows in Google Sheets(Google Sheets 여러 행 만들기·업데이트)

하나의 하이퍼클래스 워크플로우에서 Google Sheets에 새 행을 한꺼번에 추가하거나, 이미 있는 행을 한꺼번에 업데이트할 수 있어요. 이 문서에서는 이 액션이 하는 일, 만들기와 업데이트를 각각 언제 쓰는지, Google Sheets에서 올바르게 설정하는 방법을 안내해요.

[동영상](https://www.youtube.com/embed/YWCijYlXKVU??si=9uySCANoCBBWqBA5&wmode=opaque)

---

## Create & Update Multiple Rows in Google Sheets 액션이란?

{% hint style="info" %}
이 액션은 프리미엄 액션이에요. 실행할 때마다 추가 요금이 발생해요.
{% endhint %}

이 액션을 쓰면 자동화 한 번을 실행하는 동안 스프레드시트 행을 여러 개 만들거나 업데이트할 수 있어요. 반복되거나 묶음으로 생기는 데이터를 다룰 때 편해요. 예를 들어 항목을 여러 개 기록하거나, 구조화된 레코드를 동기화하거나, 스프레드시트 값을 여러 개 한 번에 바꿀 때 쓸 수 있어요.

이 기능은 Google Sheets 프리미엄 워크플로우 액션에 포함돼 있고, 한 행씩만 처리하는 액션보다 할 수 있는 일이 더 많아요. 데이터를 한 행씩 보내는 대신 여러 행을 한 번에 쓰거나 수정하도록 워크플로우를 설정할 수 있어요.

---

## 이 액션의 장점

- 데이터를 더 빠르게 기록해요: 같은 설정을 여러 번 반복하지 않고, 워크플로우 액션 하나로 스프레드시트 행을 여러 개 만들 수 있어요.
- 더 체계적으로 정리해요: 워크플로우가 묶음 데이터나 반복 데이터를 만들 때 관련 레코드를 Google Sheets에 모아 둘 수 있어요.
- 수작업이 줄어요: 워크플로우가 실행된 뒤에 행을 직접 추가하거나 고치는 일이 줄어들어요.
- 정확도가 높아져요: 스프레드시트 열을 워크플로우 데이터에 바로 매핑하므로 복사·붙여넣기 실수가 줄어요.
- 업데이트가 더 유연해요: 레코드를 바꿔야 할 때 지정한 스프레드시트 범위 안의 여러 행 값을 업데이트할 수 있어요.

---

## 사전 준비

필드를 매핑하기 전에 스프레드시트와 워크플로우를 먼저 준비해 두면 좋아요. 권한, 헤더, 시트 구조를 미리 확인하면 매핑이 깨지거나 잘못 업데이트되거나 데이터가 빠지는 문제를 막을 수 있어요.

- 하이퍼클래스에 Google 계정이 연결되어 있는지 확인하세요.
- 스프레드시트가 올바른 Google Drive에 있는지 확인하세요.
- 워크시트의 첫 번째 행에 알아보기 쉬운 열 헤더를 넣으세요.
- 액션에서 워크시트를 선택하기 전에 워크시트 탭 이름을 확인하세요.
- 필요한 경우, 계정에서 Google Sheets 프리미엄 워크플로우 액션이 활성화되어 있는지 확인하세요.
- 열을 추가하거나, 이름을 바꾸거나, 순서를 바꿨다면 액션에서 **Refresh Headers**(헤더 새로고침)를 눌러 헤더를 새로 불러오세요.

---

## Google Sheets에서 여러 행 만들기

**Create Multiple Spreadsheet Row(s)**(스프레드시트 여러 행 만들기)는 이미 있는 행을 바꾸지 않고 Google Sheets에 새 항목을 추가할 때 알맞아요. 반복되는 레코드를 쓰거나, 묶음 데이터를 저장하거나, 워크플로우를 한 번 실행하는 동안 여러 값을 스프레드시트로 보낼 때 쓸 수 있어요.

1. **자동화 > 워크플로우**로 이동하세요.

   ![자동화 > 워크플로우 메뉴](https://jumpshare.com/share/0JWEsWQU9NawnWRXArkh+/Screen+Shot+2026-04-06+at+21.20.01.png)
2. 새 워크플로우를 만들거나 기존 워크플로우를 편집하세요.

   ![새 워크플로우 만들기 또는 기존 워크플로우 편집](https://jumpshare.com/share/BXEsCvFYK7i5WsZpbUNj+/Screen+Shot+2026-04-06+at+21.21.45.png)
3. 상황에 맞는 트리거를 추가하세요. 예를 들면 **Contact Created**(연락처 생성), **Form Submitted**(폼 제출) 같은 트리거가 있어요.

   ![트리거 추가 화면](https://jumpshare.com/share/u1UFwknt8WsBsvkvjHaE+/GIF+Recording+2026-04-08+at+20.15.07.gif)
4. **+** 버튼을 눌러 액션을 추가하세요.
5. **Google Sheets** 액션을 검색해서 선택하세요.
6. **Connect your location's Google Account**(로케이션의 Google 계정을 연결하세요)를 눌러 Google 계정을 연결하세요.

   ![로케이션의 Google 계정 연결](https://jumpshare.com/share/FZLxmIbexGB6cmaB4lRS+/GIF+Recording+2026-04-08+at+20.16.38.gif)
7. Google 계정을 연결한 뒤 **Action** 드롭다운에서 **Create Multiple Spreadsheet Row(s)**를 선택하세요.

   ![Action 드롭다운에서 Create Multiple Spreadsheet Row(s) 선택](https://jumpshare.com/share/VKJM23utsNxLgvLCF5lt+/Screen+Shot+2026-04-08+at+20.24.33.png)
8. 서브 계정에 연동된 Google 계정이 모두 드롭다운에 표시돼요. 그중 하나를 선택하세요.
9. 스프레드시트가 있는 **Drive**를 선택하세요.

   ![Drive 선택](https://jumpshare.com/share/2vicPz07nBCO9DeVN0Gt+/Screen+Shot+2026-04-08+at+20.32.09.png)
10. Drive를 선택하면 다음 드롭다운에 그 Drive에 있는 스프레드시트 목록이 나타나요. 변경할 스프레드시트를 선택하고 워크시트도 선택하세요.

    ![스프레드시트와 워크시트 선택](https://jumpshare.com/share/JENuPFXLxh7AFgXgbu6T+/Screen+Shot+2026-04-08+at+20.33.53.png)
11. 시트의 헤더를 바꿨다면 **Refresh Headers** 버튼을 눌러 시트의 최신 헤더 값을 불러오세요. 그러면 데이터가 올바른 열에 매핑되고, 워크플로우에도 시트의 최신 구성이 반영돼요.

    ![Refresh Headers 버튼](https://jumpshare.com/share/BMPXz4FX5YgDdSrxq9po+/Screen+Shot+2026-04-08+at+20.38.37.png)
12. 워크시트에서 **Start column**과 **End Column**을 선택하세요. 하이퍼클래스 워크플로우로 Google Sheets 문서에 데이터를 보낼 때 시트의 첫 번째 행은 자동으로 헤더 행으로 인식되고, 각 열은 그 행의 헤더 값을 이름으로 사용해요.
13. 이 기능 덕분에 데이터 관리를 자동화하고, 워크플로우에서 다루는 데이터를 정확하게 유지하기 쉬워요.
14. **Save Action**(액션 저장)을 누르세요.

    ![Save Action 버튼](https://jumpshare.com/share/Ws0DiAH8zry7zNA6izw6+/GIF+Recording+2026-04-08+at+20.49.42.gif)

### Create Multiple Spreadsheet Row(s)가 동작하는 방식

Create Multiple Spreadsheet Row(s)는 워크플로우 실행에서 데이터를 행 객체의 배열(목록)로 받을 때만 행을 여러 개 만들어요.

- 배열에 들어 있는 객체 하나가 스프레드시트 행 하나가 돼요.
- 워크플로우 실행에 레코드 하나의 데이터만 있으면(예: 연락처 한 명이 워크플로우에 등록된 경우) 행이 하나만 쓰여요. 이 경우에는 한 행만 만드는 액션과 차이를 느끼기 어려울 수 있어요.
- 서로 다른 시점에 워크플로우에 들어온 연락처를 자동으로 기다렸다가 묶어서 처리하지 않아요. 한 번의 워크플로우 실행 안에 있는 배열을 그대로 써요.

예시 배열(행 3개 생성)

```
[
  {
    "Name": "Sam",
    "Email": "sam@test.com",
    "Status": "New"
  },
  {
    "Name": "Arjun",
    "Email": "arjun@example.com",
    "Status": "In Progress"
  },
  {
    "Name": "Meera",
    "Email": "meera@example.com",
    "Status": "Completed"
  }
]
```

예시 2:

```
[
  { FirstName: "John", LastName: "Doe", Email: "john@email.com" },
  { FirstName: "Jane", LastName: "Smith", Email: "jane@email.com" }
]
```

### 액션에 여러 행을 전달하는 방법

한 번의 워크플로우 실행으로 행을 여러 개 만들려면, 워크플로우가 행 객체의 배열로 시작하거나 배열을 만들어 내야 해요. 보통 다음과 같은 방법을 써요.

- 행 배열이 담긴 JSON 데이터를 보내는 **Inbound Webhook**(인바운드 웹훅) 트리거
- 이전 단계에서 배열을 반환하고, 그 배열을 이 액션에 매핑하는 웹훅 기반 연동

{% hint style="info" %}
이미 CRM에 있는 연락처 수천 명(예: 5,000명)을 시트에 쓰려고 연락처를 하나씩 워크플로우에 등록하면, 워크플로우가 연락처마다 따로 실행돼요. 이때는 자동으로 묶어서 처리하지 않아요.
{% endhint %}

### 이럴 때 활용하세요

- 반복되는 워크플로우 결과를 스프레드시트에 기록할 때
- 자동화 하나에서 나온 묶음 항목을 기록할 때
- 추적이나 리포팅을 위해 서로 관련된 데이터를 여러 개 저장할 때

---

## Google Sheets에서 여러 행 업데이트하기

**Update Multiple Spreadsheet Row(s)**(스프레드시트 여러 행 업데이트)는 스프레드시트에 행이 이미 있고, 워크플로우가 선택한 행 범위의 값을 바꿔야 할 때 유용해요. 중복 항목을 만들지 않고 레코드를 정확하게 유지할 수 있어요. 기존 스프레드시트 데이터를 계속 최신 상태로 관리해야 할 때도 도움이 돼요.

1. **자동화 > 워크플로우**로 이동하세요.

   ![자동화 > 워크플로우 메뉴](https://jumpshare.com/share/0JWEsWQU9NawnWRXArkh+/Screen+Shot+2026-04-06+at+21.20.01.png)
2. 새 워크플로우를 만들거나 기존 워크플로우를 편집하세요.

   ![새 워크플로우 만들기 또는 기존 워크플로우 편집](https://jumpshare.com/share/BXEsCvFYK7i5WsZpbUNj+/Screen+Shot+2026-04-06+at+21.21.45.png)
3. 상황에 맞는 트리거를 추가하세요. 예를 들면 **Contact Created**(연락처 생성), **Form Submitted**(폼 제출) 같은 트리거가 있어요.

   ![트리거 추가 화면](https://jumpshare.com/share/u1UFwknt8WsBsvkvjHaE+/GIF+Recording+2026-04-08+at+20.15.07.gif)
4. **+** 버튼을 눌러 액션을 추가하세요.
5. **Google Sheets** 액션을 검색해서 선택하세요.
6. **Connect your location's Google Account**를 눌러 Google 계정을 연결하세요.

   ![로케이션의 Google 계정 연결](https://jumpshare.com/share/FZLxmIbexGB6cmaB4lRS+/GIF+Recording+2026-04-08+at+20.16.38.gif)
7. Google 계정을 연결한 뒤 **Action** 드롭다운에서 **Update Multiple Spreadsheet Row(s)**를 선택하세요.

   ![Action 드롭다운에서 Update Multiple Spreadsheet Row(s) 선택](https://jumpshare.com/share/AiPRH2CBOeXcZIS7MMZQ+/Screen+Shot+2026-04-08+at+20.59.28.png)
8. 서브 계정에 연동된 Google 계정이 모두 드롭다운에 표시돼요. 그중 하나를 선택하세요.
9. 스프레드시트가 있는 **Drive**를 선택하세요.

   ![Drive 선택](https://jumpshare.com/share/y3riMM76YT9ad9YH5t0J+/Screen+Shot+2026-04-08+at+21.08.50.png)
10. Drive를 선택하면 다음 드롭다운에 그 Drive에 있는 스프레드시트 목록이 나타나요. 변경할 스프레드시트를 선택하고 워크시트도 선택하세요.

    ![스프레드시트와 워크시트 선택](https://jumpshare.com/share/xI9dyp1lqWRJ8Kc1nvHm+/Screen+Shot+2026-04-08+at+21.13.37.png)
11. 시트 업데이트를 시작할 행 번호를 입력하세요.
12. 워크시트에서 **Start column**과 **End Column**을 선택하세요. 하이퍼클래스 워크플로우로 Google Sheets 문서에 데이터를 보낼 때 시트의 첫 번째 행은 자동으로 헤더 행으로 인식되고, 각 열은 그 행의 헤더 값을 이름으로 사용해요.
13. 시트의 헤더를 바꿨다면 **Refresh Headers** 버튼을 눌러 시트의 최신 헤더 값을 불러오세요. 그러면 데이터가 올바른 열에 매핑되고, 워크플로우에도 시트의 최신 구성이 반영돼요.
14. 이 기능 덕분에 데이터 관리를 자동화하고, 워크플로우에서 다루는 데이터를 정확하게 유지하기 쉬워요.

    ![열 범위와 헤더 설정 화면](https://jumpshare.com/share/C8GCswkgzYdlhgLw20lI+/Screen+Shot+2026-04-08+at+21.19.54.png)
15. **Save Action**을 누르세요.

    ![Save Action 버튼](https://jumpshare.com/share/0m3kf2wvKYTK7AAbJSDw+/Screen+Shot+2026-04-08+at+21.22.20.png)

### 이럴 때 업데이트를 쓰세요

- 스프레드시트 행이 이미 있을 때
- 현재 레코드의 값을 바꾸거나 최신 값으로 갱신해야 할 때
- 같은 데이터 세트에 중복 행이 추가되지 않게 하고 싶을 때

---

## 자주 묻는 질문

### Create Multiple Spreadsheet Row(s)와 Update Multiple Spreadsheet Row(s)는 뭐가 다른가요?
Create Multiple Spreadsheet Row(s)는 스프레드시트에 새 항목을 추가해요. Update Multiple Spreadsheet Row(s)는 이미 있는 행의 값을 바꿔요.

### Create Multiple Spreadsheet Row(s)는 한 행만 만드는 액션과 어떻게 다른가요?
Create Multiple Spreadsheet Row(s)는 워크플로우를 한 번 실행하는 동안 행을 여러 개 쓸 수 있어요. 단, 행 객체의 배열을 전달할 때만 가능해요. 워크플로우 실행에 레코드 하나의 데이터만 있으면 행도 하나만 만들어져요.

### 워크플로우에 등록된 연락처를 이 액션이 자동으로 묶어서 처리하나요?
아니요. 워크플로우는 여러 연락처를 자동으로 모아서 한 번에 보내지 않아요. 한 번의 요청으로 행을 여러 개 쓰려면 워크플로우 실행 시점에 이미 묶음 배열이 있어야 해요. 보통 **Inbound Webhook**으로 보내요.

### Google 시트에 헤더가 꼭 있어야 하나요?
네. 알아보기 쉬운 헤더가 있으면 하이퍼클래스가 매핑할 수 있는 열을 인식하고, 설정 오류도 줄어요.

### 헤더를 새로고침해야 하는 이유는 뭔가요?
스프레드시트를 수정한 뒤 **Refresh Headers**를 누르면 워크플로우 액션 안의 열 이름 목록이 최신 상태로 바뀌어요.

### 워크시트 탭을 잘못 선택하면 어떻게 되나요?
데이터가 엉뚱한 위치에 쓰이거나, 원하는 열이 제대로 매핑되지 않을 수 있어요.

### 사용할 열을 제한할 수 있나요?
네. **Starting Column**과 **Ending Column** 필드로 매핑에 쓸 수 있는 열의 범위를 정할 수 있어요.

### 일반 행 액션 대신 여러 행 액션은 언제 쓰나요?
같은 작업 안에서 스프레드시트 행을 여러 개 만들거나 업데이트해야 할 때 쓰세요.

### 중복 행을 만들지 않고 기존 행을 업데이트할 수 있나요?
네. 대상 행이 이미 있고 값만 바꾸면 될 때 Update Multiple Spreadsheet Row(s)를 사용하세요.

### 새로 추가한 열이 워크플로우 액션에 안 보여요.
액션이 이전 시트 구조를 그대로 쓰고 있을 수 있어요. 스프레드시트에 열을 추가하거나 이름을 바꾼 뒤에는 **Refresh Headers**를 누르세요.
