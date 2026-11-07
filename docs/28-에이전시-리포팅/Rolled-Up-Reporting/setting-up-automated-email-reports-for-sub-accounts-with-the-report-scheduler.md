---
원문: /support/solutions/articles/48001236324-setting-up-automated-email-reports-for-sub-accounts-with-the-report-scheduler
번역일: 2026-11-06
카테고리: 28-에이전시-리포팅
---

# 서브 계정에 리포트 이메일 자동 발송하기 — Report Scheduler(리포트 스케줄러)

**Report Scheduler**(리포트 스케줄러)를 쓰면 에이전시 사용자가 서브 계정의 관리자와 사용자에게 성과 리포트를 매일, 매주, 매월 자동으로 보낼 수 있어요. 이 문서에서는 Report Scheduler가 무엇인지, 어떤 리포트가 발송되는지, 발송 일정을 어떻게 만들고 관리하는지 알려 드려요.

{% hint style="info" %}
문서에 나온 금액(달러)과 요금제 이름은 참고용이에요. 하이퍼클래스에서 실제로 적용되는 요금은 [요금제 안내](../../00-자주묻는질문/pricing-plans.md)와 [AI·SMS·음성 사용료](../../00-자주묻는질문/usage-costs.md)를 확인하세요.
{% endhint %}

{% hint style="info" %}
에이전시 보기에서 쓰는 일정 관리 기능은 월 $497 이상 요금제에서 사용할 수 있어요.

에이전시 보기를 쓰지 않는 서브 계정 사용자도 서브 계정 안에서 자신의 일정은 관리할 수 있어요.
{% endhint %}

## Report Scheduler란?

Report Scheduler는 하이퍼클래스에서 서브 계정으로 성과 리포트를 자동으로 보내 주는 기능이에요. 주요 대시보드 지표를 이메일 한 통에 모아서, 에이전시가 정한 발송 주기와 시간에 맞춰 보내요. 여러 대시보드에 일일이 로그인하지 않아도 계정 상황을 꾸준히 확인할 수 있어요.

에이전시는 리포트를 직접 내보내거나 대시보드를 확인하지 않아도 서브 계정 관리자와 사용자에게 필요한 정보를 전할 수 있어요. 받는 사람도 계정 성과를 놓치지 않고 확인할 수 있고요.

리포트에는 아래 대시보드의 데이터가 들어가요.

- **사용자**
- **연락처**
- **Outreach**(아웃리치)
- **제출**
- **SMS**
- **예약**
- **Deal Overview**(딜 개요)
- **이메일**
- **Tasks Overdue**(기한이 지난 작업)
- **대화**(읽지 않음 + 부재중)

{% hint style="warning" %}
리포트를 예약해서 보내려면 리포트에 있는 카드·인사이트 중 최소 4개가 0이 아닌 값이어야 해요. 미리보기용 테스트 이메일은 이 제한 없이 보낼 수 있지만, 예약된 리포트는 모두 이 조건을 따라요.
{% endhint %}

## Report Scheduler의 장점

자동 리포트의 장점을 알아 두면 예약 발송을 켜야 하는 이유를 이해하기 쉬워요.

- 자동화: 리포트를 직접 만들 필요가 없어서 에이전시와 고객사 모두 시간을 아낄 수 있어요.
- 맞춤 설정: 발송 주기, 시작일, 시간, 수신자를 직접 정할 수 있어요.
- 꾸준한 업데이트: 관계자가 정해진 일정에 성과 정보를 받아요.
- 한곳에 모은 정보: 여러 대시보드를 리포트 하나로 볼 수 있어요.
- 원활한 소통: 관리자가 계정 활동을 계속 파악할 수 있어요.

## 리포트 예약하는 방법

설정을 정확히 해 두면 리포트가 원하는 사람에게 원하는 시간에 도착해요. 불필요한 지연이나 설정 실수도 줄일 수 있어요.

### 에이전시 보기로 전환

계정 전환 메뉴에서 **에이전시 보기로 전환**을 선택하세요. 개별 서브 계정에서 나와 에이전시 화면으로 돌아가요. 리포트 예약 기능은 이 화면에서 관리해요.

![계정 전환 메뉴에서 에이전시 보기로 전환하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059899800/original/Z_f176FlGVEEg5mLMvn4srUcOhItbCHHjQ.png?1764853299)

### 서브 계정 열기

에이전시 보기의 왼쪽 메뉴에서 **서브 계정**을 선택하세요. 에이전시에서 관리하는 모든 고객사 계정이 나와요. 목록에서 예약 리포트를 만들거나 관리할 계정을 찾아 **Reports**(리포트) 버튼을 클릭하세요.

![서브 계정 목록에서 Reports 버튼을 누르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059942593/original/BAq_zXwwo6SPySSkqZhqY5vvhpiJtHf8NQ.png?1764909434)

### 기존 일정 편집

**Edit Schedule**(일정 편집)을 클릭하면 선택한 서브 계정의 자동 리포트 설정을 확인하고 바꿀 수 있어요. 일정을 새로 만들지 않아도 발송 주기, 시간, 수신자, 포함할 대시보드를 수정할 수 있어요.

![Edit Schedule 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059942642/original/j2MY0J6g0oOi02AMnmcC5qsQ4kDkq3TyNA.png?1764909522)

### 리포트에 넣을 대시보드 선택

이 화면에서 자동 리포트 이메일에 넣을 대시보드를 골라요. 각 카드의 체크박스를 선택하면 돼요. **대화**나 **연락처**처럼 지표를 하나씩 선택해도 되고, **전체 선택**을 눌러 전체 성과 요약을 보내도 돼요.

![리포트에 포함할 대시보드 카드를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059942664/original/0jpJHBNtErjYhXpgdOf_Dfy1ARmkh4u53w.png?1764909642)

### 다음 단계로 진행

리포트에 넣을 대시보드를 고른 뒤 오른쪽 위의 **다음** 버튼을 클릭하세요. 이메일 제목, 발송 주기, 시간, 수신자를 정하는 설정 화면으로 넘어가요.

![다음 버튼을 누르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059942666/original/4wNTikDHEGV_7HhG9QgtYhYCAC2P2QBXvg.png?1764909663)

### 이메일 제목 입력

**이메일 제목**에 서브 계정으로 발송될 리포트 이메일의 제목을 입력하세요. 제목이 분명하면 받는 사람이 받은편지함에서 어떤 리포트인지 바로 알 수 있어요.

![이메일 제목을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059942704/original/5yyu7cd6PIHf7i5yghYOhecRLnLMYZVXTA.png?1764909815)

## 리포트가 발송되는 시점

받는 사람이 기대하는 시간에 리포트가 도착해야 해요. 발송 주기, 날짜, 시간대 설정이 발송 시점에 어떤 영향을 주는지 알아 두면 일정을 예측하기 쉬워요.

리포트를 예약할 때 아래 세 가지를 정해요.

1. **발송 주기**
2. **시작일**
3. **시간**

### 발송 주기별 발송 방식

- **매일**: 설정한 시간에 매일 발송해요.
- **매주**: 선택한 시작일과 같은 요일에 매주 발송해요. 예를 들어 시작일이 화요일이면 리포트는 항상 화요일에 발송돼요.
- **매월**: 선택한 시작일과 같은 날짜에 매월 발송해요. 예를 들어 시작일이 5일이면 매월 5일에 발송돼요.

**시간대**: 리포트는 서브 계정의 시간대를 기준으로 발송돼요.

### 발송 주기 선택

**발송 주기** 드롭다운 메뉴에서 **매일**, **매주**, **매월** 중 하나를 선택하세요. 선택한 주기에 따라 서브 계정이 리포트에 포함된 대시보드의 성과 업데이트를 얼마나 자주 받을지 정해져요.

![발송 주기를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059942725/original/UyckpdVNfBbNtYstkUnZ_r1YxXV8R0ZsBg.png?1764909931)

### 첫 발송 날짜 설정

**예약 날짜** 필드에서 첫 리포트를 받을 날짜를 선택하세요. 이 날짜는 매주·매월 발송의 기준 날짜이기도 해서, 선택한 주기에 맞춰 일정하게 발송돼요.

![첫 발송 날짜를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059942737/original/s3GomGn_i3Anzh7Oes5WAkdvbVGShNJutg.png?1764909974)

### 발송 시간 선택

**하루 중 시간** 드롭다운 메뉴에서 리포트를 받을 시간을 선택하세요. 리포트는 서브 계정의 시간대에 맞춰 발송돼서, 받는 사람의 현지 시간 기준으로 정확하게 도착해요.

![하루 중 시간을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059942775/original/CnzvKCReQIlVZ12n-8oa-bf4KrHnXho3Og.png?1764910081)

### 수신자 추가

**수신자** 필드에 자동 리포트를 받을 이메일 주소를 하나 이상 추가하세요. 관리자, 팀원, 외부 관계자까지 성과 업데이트가 필요한 사람을 모두 넣을 수 있어요.

![수신자를 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059942817/original/XHC9E9V5huC8gvlNHSArpZQOK26haEBb2A.png?1764910245)

### 테스트 이메일 전송

**테스트 이메일** 필드에 리포트 미리보기를 받을 이메일 주소를 하나 이상 입력하세요. 일정을 확정하기 전에 **테스트 전송**을 클릭하면 샘플 이메일이 발송돼요. 리포트 내용, 서식, 수신자 표시가 맞는지 미리 확인할 수 있어요.

![테스트 이메일을 입력하고 테스트 전송을 누르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059942890/original/1wA60c4HbouR50f3MpJFVJlhJXAwEJLgXA.png?1764910533)

### 일정 일시정지 또는 다시 시작

서브 계정의 예약 발송을 잠시 멈추거나 다시 시작하려면 **일시정지**/**다시 시작** 버튼을 사용하세요. 아이콘이 **일시정지 기호**이면 리포트가 현재 활성 상태이고, 클릭하면 일정이 일시정지돼요. 아이콘이 **재생 기호**이면 일정이 일시정지된 상태이고, 클릭하면 자동 발송이 다시 시작돼요. 이 버튼을 쓰면 기존 일정을 삭제하거나 다시 설정하지 않고도 리포트 발송을 쉽게 관리할 수 있어요.

![일시정지/다시 시작 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059975952/original/he5bYAT8kh9zv0WG6bsdvnjWPEGuAiMb_Q.png?1764934700)

## 리포트 발송 내역 확인

발송 내역을 보면 수신자를 확인하고, 이메일이 정상적으로 발송되었는지 점검할 수 있어요. 에이전시도 리포트가 어떻게 전달되고 있는지 투명하게 파악할 수 있어요.

**Reports**(리포트) 화면 맨 아래로 스크롤하면 발송 로그가 나와요. 리포트를 받은 이메일 주소도 여기서 확인할 수 있어요.

![리포트 발송 로그 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059977146/original/bbOLALRc3wMZmk0IXebhYCrmTPlpAwk0XA.png?1764935208)

## 자주 묻는 질문

### 서브 계정마다 다른 리포트를 예약할 수 있나요?
네. 서브 계정마다 별도의 일정과 설정을 만들 수 있어요.

### 리포트 수신자를 여러 명 추가할 수 있나요?
네. 이메일 주소를 쉼표와 공백으로 구분해서 여러 개 입력하세요.

### 리포트를 받으려면 서브 계정 사용자에게 특별한 권한이 필요한가요?
관리자는 리포트를 자동으로 받아요. 추가한 수신자는 별도 권한이 필요하지 않아요.

### 리포트를 일시정지하면 어떻게 되나요?
일정을 다시 시작할 때까지 리포트가 발송되지 않아요.

### 리포트에 포함되는 대시보드 데이터를 바꿀 수 있나요?
아니요. 리포트에는 미리 정해진 대시보드가 자동으로 포함되고, 직접 바꿀 수 없어요.

### 비즈니스 이메일을 수정하면 발송에 영향이 있나요?
네. **비즈니스 이메일**을 바꾸면 수신자를 직접 조정하지 않는 한 리포트가 발송되는 주소도 달라져요.
