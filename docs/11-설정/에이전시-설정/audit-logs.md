---
원문: /support/solutions/articles/48001205734-audit-logs
번역일: 2026-11-06
카테고리: 11-설정
---

# 감사 로그로 사용자 활동 확인하기

**감사 로그**는 에이전시 계정에서 일어난 시스템 활동을 자세히 기록해 둔 곳이에요. 누가 사용자를 만들고, 수정하고, 삭제했는지 확인할 수 있어서 오류를 찾거나 변경 책임을 가리는 데 도움이 돼요. 이 문서에서는 **감사 로그**를 여는 방법과 필터 사용법을 안내해요.

{% hint style="info" %}
**감사 로그**는 에이전시 관리자만 볼 수 있어요.
{% endhint %}

## 감사 로그란?

**감사 로그**는 하이퍼클래스 에이전시 계정에서 사용자가 한 활동을 자세히 기록해 둔 내역이에요. 사용자, 계정, 설정에 생긴 변경을 추적해요. 관리자는 이 기록으로 변경 내용을 확인하고, 문제를 해결하고, 보안 규정을 지키고 있는지 점검할 수 있어요. 팀원, 작업 유형, 모듈별로 필터를 걸 수 있어서 중요한 변경을 쉽게 찾고 분석할 수 있어요.

## 감사 로그의 장점

- **더 잘 보이고, 책임이 분명해져요:** 사용자, 계정, 설정에 생긴 모든 변경을 추적해서 수정 내역을 명확히 남겨 둘 수 있어요.
- **문제를 더 빨리 해결해요:** 예상하지 못한 변경을 빠르게 찾아 원인을 파악할 수 있어서 시간과 수고를 줄여 줘요.
- **보안과 규정 준수가 좋아져요:** 사용자 활동을 지켜보며 권한 없는 수정을 막고 정책을 지키고 있는지 확인할 수 있어요.
- **사용자를 효율적으로 관리해요:** 계정 생성, 수정, 삭제 같은 사용자 활동을 한눈에 파악해서 팀을 더 잘 관리할 수 있어요.

## 감사 로그 열기

감사 기록을 보려면 에이전시 관리자 권한이 필요해요. 아래 순서대로 **감사 로그**로 이동하세요.

1. 왼쪽 메뉴에서 서브 계정 전환 드롭다운을 클릭하세요.

   ![서브 계정 전환 드롭다운을 연 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034644232/original/O78v2PDAhRX70CA1OOHpL5TlBDtaZJ7SBQ.png?1728905391)

2. **에이전시 보기로 전환**을 선택하세요.

   ![에이전시 보기로 전환 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034644274/original/nKDLYd76-DHiDjkw9Kl-OpAWfQRXp3QJ_w.png?1728905442)

3. 화면 왼쪽 아래에 있는 **설정** 탭을 클릭하세요.

   ![왼쪽 아래의 설정 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034644321/original/8nRXDI3Bo0LYa9LgF13OfFRzeFJba79a4w.png?1728905463)

4. 설정 메뉴에서 아래로 스크롤해 **감사 로그** 버튼을 찾아 클릭하세요. 사용자 활동이 자세히 기록된 로그 화면이 열려요.

   ![설정 메뉴의 감사 로그 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034645834/original/_oUmf8vqVCV38CxNVoo2qezgIxAMQGnFQA.png?1728906614)

## 감사 로그 필터 이해하기

필터를 쓰면 로그 결과를 좁혀서 원하는 변경을 더 쉽게 찾을 수 있어요.

![감사 로그 필터 전체 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034658597/original/_6WWohexiixFAA8dHvIO0XjPAKRN439cTA.jpeg?1728914033)

### 사용자별 필터

특정 팀원을 선택하면 그 사람이 한 활동만 볼 수 있어요. 개인별 활동을 살펴보거나 권한 없는 변경을 찾을 때 유용해요.

![사용자 필터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034658688/original/lhQ_AQ3iuzQvrM7tMn__-BDho74nMoeSHw.png?1728914049)

### 작업 유형별 필터

생성, 수정, 삭제처럼 특정 작업 유형의 로그만 볼 수 있어요. 중요한 변경을 빠르게 찾는 데 도움이 돼요.

![작업 유형 필터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034658803/original/uf2W17I5D5WB1abJ0P8nxZ-6tHEuvU0vtQ.jpeg?1728914129)

### 모듈별 필터

사용자, 계정, 연락처 등 선택할 수 있는 시스템 모듈 중에서 고르세요.

![모듈 필터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034658758/original/CrLkTc6kYd79fkDgTVo15IkeKiEbcKklXQ.png?1728914096)

### 기간별 필터

원하는 기간을 선택하면 그 기간의 로그만 볼 수 있어요. 문제를 해결하거나 과거의 시스템 변경을 분석할 때 알맞아요.

![기간 필터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034658903/original/2E3mnX0guFQvwVbrPplMXSx0oQ5euewC2w.png?1728914189)

### 로그 상세 내용 보기

감사 로그 항목 옆의 점 세 개를 클릭하고 **상세 보기**를 선택하세요. 기록된 작업에 대한 더 자세한 정보를 볼 수 있어요.

![점 세 개 메뉴의 상세 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034659822/original/8lmSIvWzviirQKQSCKBFSdDqtztNDdR3tw.png?1728914686)

### 감사 로그 상세 화면

감사 로그 표에서 **상세 보기**를 클릭하면 해당 작업의 메타데이터가 나타나요. 필드 이름, 값, 영향을 받은 모듈, 객체 식별자 등이 포함돼요. 어떤 정보가 보이는지는 연락처, 커스텀 필드, 작업, 캘린더 이벤트, 기회처럼 관련된 모듈 유형에 따라 달라요. 직접 수정한 것이든, 워크플로우나 API 연동으로 생긴 것이든 추측 없이 변경 내용을 확실하게 추적할 수 있어요.

![감사 로그 상세 보기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047443906/original/ELts-nOF7LdBsW5StyVU-sVRguMhxzlrDQ.png?1748532995)

## 자주 묻는 질문

### 감사 로그가 뭔가요?
하이퍼클래스 에이전시 계정에서 이루어진 작업의 자세한 이력이에요. 현재는 계정 생성, 수정, 삭제 같은 사용자 관련 변경을 추적해요.

### 감사 로그는 왜 중요한가요?
관리자가 시스템 변경을 추적하고, 문제를 빠르게 해결하고, 의도하지 않은 수정 때문에 생기는 혼란을 막을 수 있어요.

### 누가 감사 로그를 볼 수 있나요?
에이전시 관리자만 볼 수 있어요. 로그는 **에이전시 설정 > 감사 로그**에 있어요.

### 현재 어떤 작업이 추적되나요?
지금은 USER 모듈의 변경만 추적해요. 추적 대상은 다음과 같아요.

- 사용자 생성
- 사용자 수정
- 사용자 삭제
- 웹 앱에서 직접 한 변경

앞으로 업데이트되면 Zapier, 퍼블릭 API, 자동화를 통해 이루어진 변경도 추적할 예정이에요.

### 감사 로그가 다른 모듈도 추적하게 되나요?
네. 단계적으로 확대할 예정이고, 앞으로는 다음 항목의 작업도 추적해요.

- 연락처, 계정, 자동화
- 서드파티 연동에서 시스템이 만든 변경
