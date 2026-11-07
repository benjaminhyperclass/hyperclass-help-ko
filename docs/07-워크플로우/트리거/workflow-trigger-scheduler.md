---
원문: /support/solutions/articles/155000006653-workflow-trigger-scheduler
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Scheduler(스케줄러)

**Workflow Scheduler Trigger**(워크플로우 스케줄러 트리거)를 쓰면 정해 둔 시각에 맞춰 자동화를 실행할 수 있어요. 연락처 없이 시간만으로 시작하는 트리거라서 운영 작업, 데이터 정리, 리포트 발송, 연락처가 필요 없는 연동에 알맞아요. 이 문서에서는 스케줄러 트리거를 사용하는 방법을 안내해요.

## Workflow Scheduler Trigger란?

Workflow Scheduler Trigger는 직접 정한 일정에 따라 워크플로우를 시작하는 기본 제공 트리거예요. 연락처를 워크플로우에 등록하지 않아도 되는 연락처 없는(contactless) 트리거예요. 매일 요약 보내기, 주간 성과 게시, 스프레드시트 동기화, 웹훅 호출처럼 반복되는 작업을 위해 만들어졌어요. 모든 실행 시각은 계정 시간대를 따르고, 동작 상태도 화면에서 분명하게 확인할 수 있어요.

## Workflow Scheduler Trigger의 장점

시간에 따라 움직이는 자동화를 더 안정적이고 단순하게 만들 수 있고, 우회 방법을 쓸 때보다 관리 부담도 줄어요.

- 시계 기반 자동화: 매시간, 매일, 매주, 매월, 특정 날짜와 시각, cron 식 중에서 원하는 때에 워크플로우를 시작해요.
- 연락처 없이 실행: 연락처를 등록하지 않고 운영 작업을 실행해요. 연락처가 필요한 액션은 오류가 나지 않도록 자동으로 건너뛰어요.
- 시간대 반영: 일정은 계정 시간대에 맞춰 실행되어 리포트와 운영 시각이 일관돼요.
- 기본 안전장치: **Skip Weekends**(주말 건너뛰기)와 **Stop On**(종료 시점)으로 업무 규칙에 맞게 일정을 관리해요.
- 게시 전 확인: **Check Trigger Schedule**(트리거 일정 확인)로 다음 실행 5회를 미리 볼 수 있어요.
- 연동 활용: **Webhook (Outbound)**(웹훅 발신), **Google Sheets**, **Airtable**, **Slack** 같은 액션, 팀원에게 보내는 내부 이메일/SMS, 커스텀 값, 작업 만들기와 함께 쓰면 운영 자동화를 폭넓게 구성할 수 있어요.

## 고급(cron) 일정

기본 옵션으로 부족하면 cron으로 목록, 범위, 간격 값이 들어간 복잡한 주기를 표현할 수 있어요.

- 형식: 표준 cron 형식이며 분, 시, 일, 월, 요일 순서로 써요.
- 예시:`0 9 * * 1` (매주 월요일 오전 9시)`30 14 1 * *` (매월 1일 오후 2시 30분)`0 */2 * * *` (2시간마다)

{% hint style="warning" %}
한 시간에 한 번보다 자주 실행되는 표현식은 사용할 수 없어요.
{% endhint %}

![cron 일정 입력 화면](https://jumpshare.com/share/dtCaWDBidQX9ADYTmpAO+/Screen+Shot+2025-11-03+at+7.45.45+PM.png)

## Skip Weekends와 Stop On

업무 캘린더이나 프로젝트 일정을 지킬 수 있도록 돕는 안전장치예요. **Skip Weekends**를 켜면 토요일과 일요일 실행을 자동으로 피하고, **Stop On**을 설정하면 지정한 날짜와 시각에 일정이 끝나요.

- **Skip Weekends**: 해당되는 일정에서 토요일·일요일 실행을 뺍니다. 대상은 **Daily**(매일), **Weekly**(매주), **Every N days**(N일마다), 주말이 포함되는 cron 패턴이에요.
- **Stop On**: 최종 날짜와 시각을 정해요. 그 이후의 **앞으로 예정된** 실행은 중단돼요.
- **Preview**(미리보기)와 함께 쓸 수 있어요. 두 옵션 모두 다음 실행 5회 목록에 반영돼요.

![Skip Weekends와 Stop On 설정 화면](https://jumpshare.com/share/3P59YuigwE5AvXXmy8nH+/Screen+Shot+2025-11-03+at+7.59.13+PM.png)

## 연락처 없는 실행에서 액션이 건너뛰어지는 경우

스케줄러는 연락처가 없는 작업용이에요. 연락처 정보가 있어야 하는 단계는 실행되지 않고, 워크플로우는 실행할 수 있는 다음 단계로 이어져요.

- 잘 맞는 액션: **Webhook (Outbound)**, **Custom Webhook**(사용자 지정 웹훅), **Google Sheets**, **Airtable**, **Slack**, 팀원에게 보내는 내부 이메일/SMS, 커스텀 값 업데이트·설정, 작업 만들기
- 건너뛰는 액션: 연락처가 꼭 필요한 모든 단계예요. 예를 들면 **Send SMS to Contact**(연락처에게 SMS 보내기)가 있어요.
- 결과: 건너뛴 단계는 **Execution Logs**(실행 로그)에 기록돼요. 이후 단계가 연락처 데이터를 필요로 하지 않으면 그대로 이어서 실행돼요.

## Workflow Scheduler Trigger 사용 방법

일정을 만들고, 실행 시각을 확인한 뒤, 안심하고 게시하는 순서예요.

1. **자동화 > 워크플로우**로 이동해요.

   ![자동화 > 워크플로우 메뉴](https://jumpshare.com/share/aCwPpZIWNmZRBUleXbyf+/Screen+Shot+2025-11-03+at+7.27.32+PM.png)
2. 새 워크플로우를 만들거나 기존 워크플로우를 열어요.
3. **Add Trigger**(트리거 추가)를 클릭하고 **Scheduler**(스케줄러)를 선택해요.

   ![Add Trigger에서 Scheduler 선택](https://jumpshare.com/share/Fyff2cTSkGcvObowiKSY+/GIF+Recording+2025-11-03+at+7.30.34+PM.gif)
4. 간격 유형을 선택해요.
   - **Custom**(사용자 지정): 2번째 금요일, 4번째 월요일처럼 N번째 요일을 지정해요. 여러 시각을 설정할 수 있어요.
   - **Daily**(매일): 하루에 한 번 이상 실행할 시각을 정해요.
   - **Weekly**(매주): 요일과 시각을 선택해요.
   - **Monthly**(매월): 1~31일 중 하루 또는 **Last**(마지막)와 시각을 선택해요.
   - **Every N days**(N일마다): 예를 들어 2일마다 오전 9시에 실행해요.
   - **One-off date/time**(일회성 날짜/시각): 한 번만 실행해요.
   - **Advanced (cron-style)**(고급, cron 방식): 복잡한 일정에 사용해요.

     ![간격 유형 선택 화면](https://jumpshare.com/share/Fo6XxkheAMXDd2Ssem6X+/Screen+Shot+2025-11-03+at+7.52.07+PM.png)
5. 선택한 간격에 맞는 시각을 설정해요.

   ![실행 시각 설정](https://jumpshare.com/share/pVBiIvA6UgKBZ6Z8alho+/GIF+Recording+2025-11-03+at+7.56.00+PM.gif)
6. (선택 사항) **Advanced Settings**(고급 설정)를 클릭해요. **Skip Weekends**를 켜고, 종료 날짜가 필요하면 **Stop On**을 설정해요.

   ![Advanced Settings 화면](https://jumpshare.com/share/3P59YuigwE5AvXXmy8nH+/Screen+Shot+2025-11-03+at+7.59.13+PM.png)
7. **Preview**(미리보기)에서 **Check Trigger Schedule**로 다음 실행 시각을 확인해요. 다음 실행 5회가 표시돼서 주기가 맞는지 볼 수 있어요.

   ![Check Trigger Schedule로 다음 실행 확인](https://jumpshare.com/share/c1hKVeEQwUVrdmiomDN0+/Screen+Shot+2025-11-03+at+8.02.10+PM.png)
8. 연락처 없는 실행에 맞는 액션을 추가해요. 예를 들면 **Webhook (Outbound)**, **Slack**, **Google Sheets**, **Airtable**, 팀원에게 보내는 내부 이메일/SMS, 커스텀 값, 작업 만들기가 있어요.
9. 워크플로우를 **Publish**(게시)해요. 지금부터 스케줄러가 설정한 시각에 실행돼요.

   ![워크플로우 게시 화면](https://jumpshare.com/share/PR0Wb16QDQLrlfNbR6gu+/Screen+Shot+2025-11-03+at+8.05.45+PM.png)

## 활용 예시

- 시트 새로 고침: Airtable 연동으로 4시간마다 Airtable 레코드를 업데이트해요.
- 정기 리포트: 일일 요약이나 주간 성과를 이메일 또는 Slack 게시글로 보내요.
- 예약 알림: 매일 오전 8시에 후속 연락 알림을 보내도록 예약해요.
- 운영 작업: 매일 밤 데이터를 정리하고, Google Sheets/Asana/Slack으로 동기화하고, 웹훅을 호출해요.

## 자주 묻는 질문

### 스케줄러는 연락처 없이 실행되나요?
네. 연락처를 워크플로우에 등록하지 않아요. 연락처가 필요한 단계는 건너뛰고, 실행할 수 있는 다음 단계로 이어서 진행해요.

### 놓친 실행은 나중에 한꺼번에 실행되나요?
아니요. 스케줄러는 워크플로우가 **Published**(게시됨) 상태일 때 앞으로 다가오는 시각에 실행돼요. 지나간 시각의 실행은 소급해서 하지 않아요.

### 하루에 여러 번 실행하도록 일정을 정할 수 있나요?
네. **Daily**와 **Custom** 옵션에서 여러 시각을 설정할 수 있어요.

### Skip Weekends는 어떻게 동작하나요?
토요일과 일요일 실행이 일정에서 자동으로 빠져요. **Preview**에도 바로 반영돼요.

### Stop On은 어떤 기능인가요?
최종 날짜와 시각을 정하는 기능이에요. 그 이후 예정된 실행은 중단돼요.

### 스케줄러와 잘 맞는 액션은 무엇인가요?
**Webhook (Outbound)**, **Google Sheets**, **Airtable**, **Slack** 같은 연락처 없는 액션이 잘 맞아요. 내부 알림, 커스텀 값, 작업 만들기도 좋아요.
