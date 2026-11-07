---
원문: /support/solutions/articles/155000006813-automation-overview
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 자동화 개요 대시보드

**자동화 > 개요**에서는 자동화 성과를 실시간으로 한 화면에서 볼 수 있어요. 워크플로우 수, 등록 수, 트리거 분석 결과를 요약해 보여 주기 때문에 자동화 상태를 점검하고 개선할 때 쓰면 좋아요.

## 자동화 개요 화면

이 대시보드는 주요 자동화 지표를 한 화면에 모아 보여 줘요. 전체 워크플로우 수부터 트리거 분석 필터, 오류 요약까지 확인할 수 있어서 워크플로우를 하나씩 열어 보지 않아도 자동화가 어떻게 돌아가고 있는지 파악할 수 있어요.

개요 화면은 **자동화 > 개요**에서 열어요.

![자동화 개요 대시보드 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057228750/original/dP_ppBDE2KfgsCxMfFRl4dpBPhQQvWlbmQ.png?1761834664)

## 대시보드 구성 요소

화면 위쪽에는 전체 워크플로우 수, 게시된 워크플로우 수, 전체 등록 수가 요약되어 있어요. 그 아래에서 다음 항목을 볼 수 있어요.

1. **Workflow Enrollments Over Time**(시간별 워크플로우 등록 추이): 매주 트리거 활동과 등록 추이를 확인해요.

   ![시간별 워크플로우 등록 추이 그래프](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057230377/original/hUrMhBNKhpVmZCouFFYeEy1lYGA0n-i9ng.png?1761835389)

2. **Trigger Analysis Filter**(트리거 분석 필터): 트리거 유형, 폼, 설문별로 결과를 걸러서 특정 워크플로우를 분석해요.

   ![트리거 분석 필터 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057230913/original/XcxAifr-zzXDHOt9yfMTiNCGFC6utIyKGg.png?1761835606)

3. **Error Review Summary**(오류 검토 요약): 오류가 발생한 워크플로우가 있는지 바로 확인해요. **Needs Review**(검토 필요)를 클릭하면 영향을 받은 워크플로우를 모두 보고 각 오류를 살펴볼 수 있어요.

   ![오류 검토 요약 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057231136/original/3GcxB-6vBucG2uOzR4SFnZ8QQbBGD3QIuw.png?1761835702)

   문제가 있을 수 있는 워크플로우는 모두 강조되어 표시돼요.

   ![문제가 있을 수 있는 워크플로우 강조 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057231219/original/x5etodGUZSPiainpP8mudNAUmZ7UoMtaoQ.png?1761835738)

{% hint style="warning" %}
**Trigger Analysis**(트리거 분석) 데이터는 최근 30일분까지만 볼 수 있어요.
{% endhint %}

모든 데이터는 계정의 시간대를 기준으로 표시되고, 원하는 기간을 직접 지정해서 필터링할 수 있어요.

## 자주 묻는 질문

### 원하는 기간을 직접 정해서 데이터를 볼 수 있나요?
네, 원하는 기간을 선택해서 등록 추이와 통계를 볼 수 있어요.

### 데이터는 어느 시간대 기준인가요?
모든 데이터는 계정의 시간대에 맞춰 표시돼요.

### 오류가 난 워크플로우는 어디서 확인하나요?
**Error Review Summary**에 표시돼요. **Needs Review**를 클릭하면 자세한 내용을 볼 수 있어요.

### 모든 워크플로우의 전체 성과는 어디서 볼 수 있나요?
**자동화 > 개요**의 워크플로우 개요 대시보드에서 등록 수, 트리거 조건 일치·불일치 현황, 오류 검토 내용을 볼 수 있어요. 그다음 특정 워크플로우의 **Trigger Stats**(트리거 통계)로 들어가 더 자세히 확인하세요.
