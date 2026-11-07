---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003304-workflow-action-split
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Split(분할)

**Split**(분할) 액션은 연락처를 워크플로우의 여러 경로로 나눠 보내는 액션이에요. 리드 관리 자동화, A/B 테스트, 참여 유도 전략 개선에 쓸 수 있어요.

[동영상](https://www.youtube.com/embed/2Lxa6v5NevM?&wmode=opaque)

## Split 액션이란?

**Split** 액션을 쓰면 연락처를 지정한 비율 또는 무작위로 나눠서 워크플로우의 서로 다른 경로로 보낼 수 있어요. 워크플로우 버전을 비교 테스트하거나 업무를 여러 팀에 나눌 때 자주 써요.

{% hint style="info" %}
**Split** 액션의 기준은 무작위 하나뿐이에요. 각 경로로 보낼 연락처의 비율은 조정할 수 있어요. 주문 규모처럼 특정 기준으로 연락처를 나누려면 **If/Else**(조건 분기) 액션을 쓰세요.

또 연락처가 한 경로에 배정되면 그 경로에 계속 남아요. 같은 Split에 연락처가 다시 들어와도 무작위로 새로 배정되지 않고 원래 경로로 가요.
{% endhint %}

## Split 액션 사용 방법

### 1단계. Split 액션 추가

워크플로우 빌더에서 **+** 아이콘을 눌러 새 액션을 추가하세요. 그다음 둘러보거나 검색해서 **Internal > Split**(분할)을 선택하세요.

![워크플로우 빌더에서 Internal > Split 액션을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041011023/original/Oqm0oPX8-nbRZrZpXkr9R4Z5csUIZoTLdw.png?1738694052)

### 2단계. Split 액션 설정

**Distribution Type**(배분 유형) 드롭다운에서 **Random Split**(무작위 분할)을 선택하세요. 선택할 수 있는 항목은 이것 하나뿐이에요.

![Distribution Type 드롭다운에서 Random Split을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041011639/original/oRoM4PKgodN7Xe4q63VG19l-v_spnKif4Q.png?1738695053)

### 3단계. 경로 설정

**Paths**(경로) 섹션에서는 경로를 추가하거나 제거할 수 있어요(최대 5개). 경로 이름을 바꾸고 경로별 분할 비율(%)도 정할 수 있어요.

![Paths 섹션에서 경로와 비율을 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041012043/original/dFwdSKaF0Tu6ufWyGtv9wYX3uA33YTX_EA.png?1738695770)

**경로 비율 합계는 100%**

경로별 비율(가중치)을 모두 더하면 100%가 되어야 해요. 합계가 100%보다 크거나 작으면 오류가 나고 액션을 저장할 수 없어요.

![경로 비율 합계가 100%가 아닐 때 오류가 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041012097/original/dijSxVFuOOq01bjy1mTt1IzEHCRI3cTo0A.png?1738695901)

**비율이 0%인 경로**

합계가 100%이기만 하면 경로 하나 이상의 비율을 0%로 둘 수 있어요. 0%인 경로로는 연락처가 한 명도 가지 않아요.

![경로 하나의 비율을 0%로 설정한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041012164/original/inWHKJOZu5pNLLjIpj__VbMpj8rc_-tNCg.png?1738696047)

### 4단계. 통계 확인

액션의 **Statistics**(통계) 탭에서 경로별로 들어온 연락처 수와 전체 수를 확인할 수 있어요.

![액션의 Statistics 탭에서 경로별 연락처 수를 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041012238/original/rAB_jKXBhtg-L8qJ24emIMS_TLulEpN5Nw.png?1738696202)

## 사용 사례

- A/B 테스트: 이메일, SMS 등 메시지의 여러 버전을 테스트해요. 예를 들어 연락처의 50%에게는 제목 A 이메일을, 나머지 50%에게는 제목 B 이메일을 보낼 수 있어요.
- 리드 배정: 영업팀이나 마케팅 채널의 처리 용량이나 전문성에 따라 리드를 나눠요. 예를 들어 경험이 많은 영업 담당자 A에게 75%, 교육 중인 담당자 B에게 25%를 배정할 수 있어요.
- 캠페인 최적화: 가장 성과가 좋은 전략을 찾아 이후 워크플로우에 반영해요.

## 자주 묻는 질문

### 비율을 잘못 설정해서 합계가 100%가 아니면 어떻게 되나요?
합계가 정확히 100%가 되도록 비율을 고치라는 안내가 나와요. 고치기 전에는 다음 단계로 넘어갈 수 없어요.

### 워크플로우를 시작한 뒤에도 Split 설정을 바꿀 수 있나요?
네, **Split** 액션 설정은 수정할 수 있어요. 다만 변경한 내용은 수정 이후에 워크플로우에 들어오는 새 연락처부터 적용돼요.

### Split 액션 하나에 경로를 몇 개까지 만들 수 있나요?
**Split** 액션 하나에 경로를 최대 5개까지 만들 수 있어요.

### 연락처는 한 번 배정된 경로에 계속 남나요?
네, 연락처가 한 경로에 배정되면 계속 그 경로에 남아요. 워크플로우에 다시 들어와도 같은 경로로 가요.

### 경로별 성과 지표를 실시간으로 볼 수 있나요?
네, **Statistics**(통계) 아이콘을 누르거나 워크플로우에서 **Stats View**(통계 보기)를 켜면 실시간 성과 지표를 볼 수 있어요.

### 고객 지원 배정처럼 마케팅이 아닌 워크플로우에도 Split 액션을 쓸 수 있나요?
네, 쓸 수 있어요. **Split** 액션은 어떤 종류의 워크플로우에서든 쓸 수 있어요. 예를 들어 고객 지원 티켓을 여러 팀이나 담당자에게 나눠 보내는 데도 쓸 수 있어요.
