---
원문: https://help.gohighlevel.com/support/solutions/articles/155000001241-how-to-filter-opportunities
번역일: 2026-11-06
카테고리: 05-기회-파이프라인
---

# 기회 필터로 원하는 기회 찾기

하이퍼클래스의 필터를 쓰면 기회가 많은 파이프라인에서도 원하는 기회를 빠르게 찾을 수 있어요. 이 문서에서는 필터 종류, 연산자, 자주 쓰는 날짜 옵션을 설명해요. 이를 바탕으로 기회를 세밀하게 나눠서 볼 수 있어요.

## 기회 필터링이란?

필터링은 기회 목록이나 보드에서 선택한 조건과 맞는 기회만 남기는 기능이에요. 필드(**소유자**, **상태**, 날짜 등)와 연산자(같음, 같지 않음, 초과 등)를 조합해서 조건을 만들 수 있어요. 이렇게 하면 가장 필요한 기회에 집중하고, 검토 속도를 높이고, 파이프라인을 관리할 때 불필요한 정보를 줄일 수 있어요.

## 기회 필터링의 장점

- 빠른 검토: 소유자, 단계 이동, 최근 활동을 기준으로 기회를 바로 골라낼 수 있어요.
- 더 쉬운 우선순위 정하기: **진행 중**이거나 최근에 업데이트된 기회에 집중해서 연락 계획을 세울 수 있어요.
- 더 정확한 검색: 연산자(같음, 같지 않음, 비어 있음, 비어 있지 않음)를 써서 놓치기 쉬운 경우까지 찾을 수 있어요.
- 더 깊은 분석: 금액, 소스, 커스텀 필드별로 나눠서 파이프라인의 품질을 살펴볼 수 있어요.
- 더 깔끔한 업무: 보고 싶은 기회만 딱 맞게 설정해서 화면을 바꾸는 시간을 줄일 수 있어요.

## 필터 논리(그리고/또는)

논리 연산자는 여러 조건을 어떻게 함께 적용할지 정해요. 필터 조건 논리에는 **그리고**와 **또는** 두 가지가 있어요.

찾으려는 내용에 맞는 논리를 고르세요. 좁게 찾을지, 넓게 찾을지에 따라 달라져요.

- **그리고**: 기회마다 모든 조건을 충족해야 해요.
- **또는**: 기회마다 조건 중 하나 이상을 충족해야 해요.

필터 오른쪽 사이드바 맨 위의 토글에서 이 조건을 바꿀 수 있어요.

- **소유자**가 담당자 A이고 **상태**가 **진행 중**인 조건을 **그리고**로 묶으면, 해당 담당자의 진행 중인 기회만 볼 수 있어요.
- **상태**가 **고객전환성공**이거나 **고객전환실패**인 조건을 **또는**으로 묶으면, 종료된 결과만 검토할 수 있어요.

{% hint style="info" %}
**중첩 필터 추가**를 클릭하면 **그리고** 조건이 추가돼요.
**Add Filter**(필터 추가)를 클릭하면 **또는** 조건이 추가돼요.
{% endhint %}

![필터 논리를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067905600/original/5SX6g5VUWARAKrUsTCt7z_kboJcKKArO-g.png?1774618114)

## 표준 필터 살펴보기

**표준 필터**는 CRM에서 가장 많이 쓰는 필드와 작업을 다뤄요. 담당자, 진행 상황, 금액, 최근 활동 시점을 기준으로 기회를 정리할 때 사용하세요.

- **소유자**: **하나 이상 선택**에서 소유자를 고르거나, **me**(나)를 고르면 지금 로그인한 사용자에 맞춰 자동으로 적용돼요.
- **팔로워**: **하나 이상 선택**에서 팔로워를 고르거나, **me**(나)를 고르면 지금 로그인한 사용자에 맞춰 자동으로 적용돼요.
- **상태**: **진행 중**, **고객전환성공**, **고객전환실패**, **Abandoned**(포기됨)
- **기회 소스**: **is**(같음), **is not**(같지 않음), **is empty**(비어 있음), **is not empty**(비어 있지 않음). 필요하면 값을 입력하세요.
- **Campaign Type**(캠페인 유형): 사용 중인 캠페인 유형이 있으면 검색해서 선택하세요.
- **Opportunity Value**(기회 금액): **equal to**(같음), **not equal to**(같지 않음), **less than**(미만), **greater than**(초과), **is empty**, **is not empty**. 숫자 값을 입력하세요.

![표준 필터 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067905396/original/KB9V1p8Pb0tsCeHEh_vrLSydHa3yCdIiuA.png?1774617960)

## 날짜 기준 필터

날짜 필터를 쓰면 최근의 변경 내용과 결과를 쉽게 추적할 수 있어요. 미리 정해진 기간 옵션을 쓰면 선택이 빨라지고 리포트 기준도 일정하게 유지돼요.

- **Last Stage Change Date**(마지막 단계 변경일): **Is**(같음), **Is Not**(같지 않음), **Yesterday**(어제), **Today**(오늘), **This Week**(이번 주), **Last Week**(지난주), **Last 7 Days**(최근 7일), **최근 30일**, **This Month**(이번 달), **Last Month**(지난달), **This Year**(올해), **Last Year**(작년), **사용자 지정**, **In the Next**(향후), **In the Last**(최근), **Less Than**(미만), **More Than**(초과)
- **Last Status Change Date**(마지막 상태 변경일): 위와 같은 옵션을 쓸 수 있어요.
- **생성일** / **업데이트됨**: 위와 같은 옵션을 쓸 수 있어요.
- **Opportunity Won On**(기회를 고객전환성공 처리한 날짜) / **Opportunity Lost On**(기회를 고객전환실패 처리한 날짜): 위와 같은 옵션을 쓸 수 있어요.
- 일부 날짜 연산자는 상대적인 기간 값을 지원해요. 예를 들어 "향후 10일 이내"나 "최근 2주 이내" 같은 조건을 만들 수 있고, 필요하면 특정 날짜를 직접 지정할 수도 있어요.

![날짜 기준 필터 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069592360/original/pNR5a1IgqInkm4SIUzZBOHDmFN-MPKKsZw.png?1776766423)

## 커스텀 필드와 태그

조직에 맞게 만든 필드를 쓰면 더 세밀하게 기회를 나눠 볼 수 있어요. 기회에 추가한 **커스텀 필드**는 모두 필터에 나타나고, 필드의 데이터 유형에 맞는 연산자를 쓸 수 있어요.

{% hint style="info" %}
기회의 커스텀 필드에 대한 자세한 내용은 관련 문서를 참고하세요.
{% endhint %}

예시: 고객 유형(구매자, 판매자 등에 대해 같음 / 같지 않음), 효율 등급(=, ≠, <, >, 비어 있음 / 비어 있지 않음), 좋아하는 반려동물(텍스트/목록), 태그(난이도/유형), 추적 시간

{% hint style="info" %}
필드 유형(숫자인지 텍스트인지)이 올바르게 설정되어 있는지 확인하세요. 그래야 알맞은 연산자가 나타나요.
{% endhint %}

![커스텀 필드로 필터링하는 화면](https://jumpshare.com/share/2e6iBbpJftfZSCnNg9RQ+/Screen+Shot+2026-01-22+at+8.16.13+PM.png)

## 기회 필터링 방법

{% hint style="info" %}
기본적으로 파이프라인에는 **열린 기회**만 보이도록 필터가 적용되어 있어요. 찾는 기회가 보이지 않으면 목록에 올바른 필터와 검색어가 적용되어 있는지 확인하세요.
{% endhint %}

1. 서브 계정에 로그인하세요.
2. 왼쪽 사이드바에서 **기회 관리**(Opportunities)로 이동하세요.
3. 확인할 파이프라인을 선택하세요.

   ![파이프라인을 선택하는 화면](https://jumpshare.com/share/D8sJph7yTErAl2H52u5L+/Screen+Shot+2026-01-22+at+8.24.05+PM.png)
4. **상태** 영역 아래의 **Advanced Filter**(고급 필터) 아이콘을 클릭하세요.

   ![고급 필터 아이콘을 클릭하는 화면](https://jumpshare.com/share/wpWbLMZHBLBWjDd58VT9+/Screen+Shot+2026-01-22+at+8.25.57+PM.png)
5. 필요한 필터를 고르세요.

   | 필터 | 옵션 / 필드 |
   | --- | --- |
   | 소유자 & 팔로워 | 소유자, 팔로워 (동적 값 **me** 지원) |
   | 상태 | 진행 중, 고객전환성공, 고객전환실패, Abandoned |
   | 기회 소스 | is, is not, is empty, is not empty |
   | Campaign Type | Campaign Type |
   | 날짜 필터 | Last Stage Change Date, Last Status Change Date, 생성일, 업데이트됨, Opportunity Won On, Opportunity Lost On (기간 옵션: Yesterday, Today, This Week, Last Week, Last 7 Days, 최근 30일, This Month, Last Month, This Year, Last Year, 사용자 지정) |
   | Opportunity Value | equal to, less than, greater than, not equal to, is empty, is not empty |
   | 커스텀 필드 | 고객 유형, 효율 등급, 좋아하는 반려동물, 태그 |
   | 추적 시간 | 추적 시간 |

   ![필터를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069594450/original/nz8ryDwMrzj2k7vOB-Cj3BVgc4KLOIJZXw.gif?1776767448)
6. **적용**을 클릭해서 결과를 확인하세요.

   ![필터를 적용한 결과 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067905683/original/fdZfbdSnMZNNQQDX83M1jpJW1MhlSMv8fA.png?1774618153)

## 자주 묻는 질문

### 여러 필터를 함께 쓸 수 있나요?
네. 조건을 여러 개 추가하고 **그리고** 또는 **또는** 논리를 골라 결과를 좁히거나 넓힐 수 있어요.

### Last Stage Change와 Last Status Change는 어떻게 달라요?
단계는 파이프라인 단계 사이의 이동을 추적하고, 상태는 진행 결과(진행 중, 고객전환성공, 고객전환실패, Abandoned)를 추적해요.

### 금액이나 숫자 필드에는 어떤 연산자를 쓸 수 있나요?
**equal to**(같음), **not equal to**(같지 않음), **less than**(미만), **greater than**(초과), **is empty**(비어 있음), **is not empty**(비어 있지 않음)를 쓸 수 있어요.

### 최근에 고객전환성공하거나 고객전환실패한 기회만 볼 수 있나요?
네. **Opportunity Won On** 또는 **Opportunity Lost On**을 고른 다음, 기간 옵션을 선택하거나 기간을 직접 지정하세요.
