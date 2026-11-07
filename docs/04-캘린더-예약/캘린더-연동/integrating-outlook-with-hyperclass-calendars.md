---
원문: /support/solutions/articles/155000002371-integrating-outlook-with-highlevel-calendars
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 하이퍼클래스 캘린더에 Outlook 계정 연동하기

Outlook 계정을 하이퍼클래스 캘린더에 연결하면 일정이 서로 동기화되어 캘린더를 한곳에서 관리할 수 있어요. 이 문서에서는 연결 절차와 자주 묻는 질문을 안내해요.

## Outlook 캘린더 연동이란?

Outlook 캘린더를 하이퍼클래스와 연동하면 Outlook 캘린더의 예약이 하이퍼클래스에, 하이퍼클래스의 예약이 Outlook 캘린더에 서로 동기화돼요. 그래서 가용 시간이 정확하게 유지되고, 중복 예약을 막을 수 있어요. 일정 잡기와 예약 관리도 더 편해져요.

## Outlook 캘린더 연동의 장점

- 간편한 연결: 이미 쓰고 있는 Outlook(Microsoft) 계정을 몇 번의 클릭만으로 연결할 수 있어요.
- 스마트한 가용 시간 반영: Outlook 캘린더의 가용 시간이 하이퍼클래스 일정 예약에 자동으로 반영돼요.
- 중복 예약 방지: Outlook의 일정이 하이퍼클래스 안에서 예약 불가 시간으로 표시돼요.
- 한곳에서 관리: 외부 도구와 동기화를 유지하면서 예약을 한곳에서 처리할 수 있어요.
- 자동 따라잡기 동기화: 연결이 끊겨 있는 동안 만들어진 예약은 다시 연결하면 자동으로 동기화돼요. 새 캘린더를 연결하거나 선택한 캘린더를 바꾸면 앞으로 잡힌 예약도 자동으로 다시 동기화돼요.

## Outlook 캘린더 연동 전 준비 사항

1. 사용 중인 Outlook(Microsoft) 계정이 있어야 해요.
2. 하이퍼클래스 사용자 프로필로 로그인한 상태여야 해요.
3. Outlook으로 일정을 보내려면 쓰기 권한(Writer access)이 필요해요.

## Outlook 캘린더 연결 절차

### 1단계: 캘린더 연결 화면으로 이동하기

1. 서브 계정의 **설정**으로 이동하세요.

   ![서브 계정 설정 메뉴](https://jumpshare.com/v/ryQPlQhQckXw3YtcO6Sw+/Screen+Shot+2025-05-28+at+8.48.27+PM.png)
2. **비즈니스 서비스** 아래에서 **캘린더**를 선택하세요.
3. **연결** 탭을 클릭한 다음 **새로 추가 +** 버튼을 클릭해 새 캘린더를 추가하세요.

   ![연결 탭의 새로 추가 버튼](https://jumpshare.com/v/WzRxRYe4TpuuWnEjOcx9+/Screen+Shot+2025-05-28+at+8.50.44+PM.png)

### 2단계: Outlook 인증하기

1. **연결** 화면에서 Outlook Calendar 옆의 **연결** 버튼을 클릭하세요.

   ![Outlook Calendar 옆의 연결 버튼](https://jumpshare.com/v/HkeaAlT9pE52VsDA28QH+/Screen+Shot+2025-05-28+at+8.54.15+PM.png)
2. Outlook 계정으로 로그인하세요.
3. 필요한 권한을 수락해 인증을 마치세요.

   ![Outlook 권한 수락 화면](https://jumpshare.com/v/o3Bjtfrtek1kzkbxXeXA+/Screen+Shot+2025-04-15+at+11.46.36+PM.png)

```
지원됨: Microsoft 365 / Exchange Online 계정
지원되지 않음: 독립형 또는 온프레미스 Microsoft Exchange 서버
```

## Outlook 연결 중 "Need Admin Approval"이 보여요

![Need admin approval 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078090851/original/0UHHS7FYylNh-e03HkuZ3SGQnonpuqne8w.png?1786433770)

하이퍼클래스에서 Outlook을 외부 캘린더로 연결할 때 "Need admin approval"(관리자 승인 필요) 화면이 나올 수 있어요. 소속 조직에서 연결을 마치기 전에 관리자의 승인을 요구한다는 뜻이에요.

사전 준비: 요청을 검토하고 승인하려면 관리자 계정이나 적절한 역할을 가진 지정 검토자 계정으로 Microsoft Entra 관리 센터에 로그인하세요.

요청을 검토하고 승인하는 방법은 Microsoft 문서를 참고하세요.

- 도움말 문서: <https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/review-admin-consent-requests>

## 자주 묻는 질문

### Outlook 연동을 이벤트 캘린더에서도 쓸 수 있나요?

아니요. Outlook 연동은 이벤트 캘린더에서 쓸 수 없어요. 이벤트 캘린더는 Google 연동만 지원해요.

### Outlook 계정을 여러 개 연동할 수 있나요?

네. 최신 개선으로 Outlook 계정을 두 개 이상 연동할 수 있어요.

### Outlook 연결을 해제하면 어떻게 되나요?

하이퍼클래스가 더 이상 Outlook에서 가용 시간이나 일정 데이터를 받지 못해요. 캘린더 기반 일정 예약에 영향이 있을 수 있어요.

### Outlook 캘린더를 삭제했더니 하이퍼클래스에 오류 배너가 떠요. 어떻게 하나요?

배너의 **Fix This**(해결하기)를 클릭하면 삭제된 캘린더와 하이퍼클래스에서 연결된 위치를 확인할 수 있어요. 그다음 **Remove Deleted Calendars**(삭제된 캘린더 제거)를 선택하면 끊어진 연결이 제거되고 오류 없는 상태로 돌아와요.

### Outlook 연동을 여러 계정에 걸쳐 쓸 때 제한이 있나요?

아니요. 최신 개선으로 같은 Outlook 계정을 여러 서브 계정에 연결할 수 있어요.

### 어떤 종류의 Outlook 계정을 지원하나요?

하이퍼클래스는 Office 365, Outlook.com, live.com, hotmail 캘린더를 지원해요.

### 이 연동에서 지원하지 않는 경우가 있나요?

Outlook 데스크톱 앱을 쓰면서 일정이 클라우드에 동기화되지 않은 경우, 그 일정은 하이퍼클래스에서 보이지 않아요. 온프레미스 Exchange 서버에서 운영하는 Outlook 계정도 지원하지 않아요.
