---
원문: /support/solutions/articles/155000001717-split-action
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Split(분할)

**Split**(분할) 액션은 워크플로우에서 연락처를 여러 경로로 나누는 액션이에요. 경로별 성과를 비교해 어떤 방식이 더 효과적인지 확인할 때 쓰세요.

## 1. Split 액션이란?

**Split** 액션을 쓰면 워크플로우 안에서 여러 경로를 시험해 보고, 성과를 분석하고, 참여를 높이는 전략을 다듬을 수 있어요. 마케팅·영업 자동화에 활용하세요.

## 2. Split 액션의 종류

- **Random Split**(무작위 분할)

## 3. Split 액션 사용 방법

### 3.1 Random Split

**목적:** 선택한 비율에 따라 연락처를 무작위로 여러 경로에 나눠 보내요. 워크플로우의 여러 버전을 테스트해서 가장 성과가 좋은 버전을 찾을 수 있어요.

**기능**

- 무작위 분할: 직접 정한 비율대로 연락처를 여러 경로에 보내요. 예를 들어 Path A에 60%, Path B에 40%로 나눌 수 있어요.
- 다중 경로: 연락처가 따라갈 경로를 최대 5개까지 만들 수 있어요.
- 경로 이름 변경: 경로마다 이름을 바꿔서 용도를 쉽게 구분할 수 있어요.
- 통계 확인: 경로별로 들어온 연락처 수와 완료한 연락처 수, 목표 전환 수를 자세히 볼 수 있어요.

**시작하기**

1. 워크플로우에서 "+" 아이콘을 눌러 액션을 추가하고, **Internal Tools**(내부 도구) 카테고리에서 **Split**을 선택하세요.

   ![워크플로우에서 Split 액션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155019088383/original/Pu2pfnYx-nHg9SHaUbOvV1maUyKRt-_uTw.png?1706615820)

2. **Split** 액션 설정 화면이 열려요.
3. **Distribution Type**(배분 유형) 드롭다운에서 **Random Split**을 선택하세요.

   ![Distribution Type 드롭다운 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155019088839/original/zwws5BFeunOJ8arEc1J-IpfN2zENTypERg.png?1706616019)

   ![Random Split 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155019088886/original/Nltr_Dp4nprrKniPGUCcwp7HJxowTbj5pA.png?1706616041)

4. 경로를 원하는 대로 설정하세요.
   - 기본 이름인 **Path A**와 **Path B**를 원하는 이름으로 바꾸세요.
   - 경로마다 보낼 연락처 비율을 입력하세요. 비율의 합계는 100%여야 해요.

   ![경로 이름과 비율 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155019089679/original/dQ1-jUdmFj9h6n_fmcgmxTMdu-ufZ7qVgQ.png?1706616293)

5. 경로는 최대 5개까지 추가할 수 있어요. 경로를 지우려면 해당 경로 옆의 "X" 아이콘을 누르세요.

   ![경로 추가 및 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155019089810/original/RsYkCvzYwedT-rlTOyj5khN9RQ1T1h7rIQ.png?1706616355)

6. **Statistics**(통계) 아이콘을 누르면 어떤 경로에 연락처가 몇 명 들어왔는지 확인할 수 있어요.
7. **Stats View**(통계 보기)를 켜 두면 워크플로우 화면에서도 통계가 보여요.

   ![워크플로우 화면에 표시된 통계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155019230727/original/EbQ61R9XfNzFQQ_X44mqdX6VTKmHxjptMg.png?1706709457)

**Random Split 예시**

Random Split의 배분은 주사위를 굴리는 것처럼 완전히 무작위예요.

고객 100명이 워크플로우에 들어온다고 해 볼게요. Random Split에 Path A와 Path B, 두 경로를 만들고 각각 50% 확률로 설정했어요. 동전을 던지는 것과 같아서, 고객마다 두 경로가 뽑힐 확률이 똑같아요.

배분은 이런 식으로 이루어질 수 있어요.

- 고객 1: 앞면이 나와 Path A로 가요.
- 고객 2: 뒷면이 나와 Path A로 가요(또 Path A).
- 고객 3: 앞면이 나와 Path B로 가요.
- 고객 4: 뒷면이 나와 Path B로 가요(또 Path B).
- 고객 5: 뒷면이 나와 Path B로 가요(또 Path B).
- 고객 6: 뒷면이 나와 Path A로 가요.

이런 식으로 계속 무작위로 이어져요. 고객마다 어느 경로로든 갈 수 있고, 앞선 고객이 어느 경로로 갔는지는 영향을 주지 않아요.

## 4. 활용 사례

**시나리오:** 새 러닝화를 파는 온라인 쇼핑몰을 운영하고 있어요. 이메일 제목 후보가 두 가지예요. "달리기에 힘을 더하는 최고의 러닝화"와 "속도를 깨우세요: 판도를 바꾸는 러닝화"예요.

**솔루션:** Random Split 액션으로 메일링 리스트를 무작위로 나누세요(예: 75/25). 리스트의 75%에는 "달리기에 힘을 더하는" 이메일을, 나머지 25%에는 "속도를 깨우세요" 이메일을 보내요. 경로별로 웹사이트 방문, 구매율 등 주요 지표를 추적하세요.

**결과:** 일정 기간이 지난 뒤 결과를 분석해 어느 제목이 더 높은 참여와 매출로 이어졌는지 확인해요. 성과가 가장 좋은 메시지를 데이터로 확인했으니, 이후 캠페인에 자신 있게 적용할 수 있어요.

## 5. 알아 두세요

{% hint style="info" %}
연락처가 한 경로로 들어가면 그 경로가 그 연락처의 유일한 경로가 돼요. 같은 연락처가 워크플로우에 다시 들어와도 다른 경로로 가지 않고 항상 처음 들어갔던 경로로 가요.
{% endhint %}
