---

번역일: 2026-04-06
카테고리: 07-워크플로우
---

# 분할 액션(Split Action)

### 커뮤니티 튜토리얼

[https://youtu.be/Fzxfsrf934U](https://youtu.be/Fzxfsrf934U)

[https://youtu.be/4lYZzaZbPEc](https://youtu.be/4lYZzaZbPEc)

[https://youtu.be/YONy1TjgN_8](https://youtu.be/YONy1TjgN_8)

[https://youtu.be/jayuTmTMGEs](https://youtu.be/jayuTmTMGEs)

이 문서에서 다루는 내용

- 분할 액션이란 무엇인가요?
- 분할 액션의 종류는 무엇인가요?
- 분할 액션을 어떻게 사용하나요?
- 랜덤 분할
- 활용 사례
- 주의사항

#### 1. 분할 액션이란 무엇인가요?

분할 액션(Split Action)은 마케팅과 영업 자동화 전략을 강화하는 강력한 도구입니다. 분할 액션을 통해 워크플로우에서 다양한 경로를 탐색하고, 성과를 분석하며, 고객 참여 전략을 최적화할 수 있습니다.

#### 2. 분할 액션의 종류는 무엇인가요?

- 랜덤 분할(Random Split)

#### 3. 분할 액션을 어떻게 사용하나요?

#### **3.1 랜덤 분할**

**목적**: 연락처를 선택한 비율에 따라 랜덤하게 여러 경로로 분할하여, 워크플로우의 다양한 변형을 테스트하고 가장 성과가 좋은 경로를 찾아낼 수 있습니다.

**기능**:
- **랜덤 분할**: 정의한 비율에 따라 연락처를 서로 다른 경로로 보냅니다 (예: 경로 A에 60%, 경로 B에 40%).
- **다중 경로**: 연락처가 따라갈 수 있는 경로를 최대 5개까지 생성할 수 있습니다.
- **경로명 커스터마이징**: 각 경로의 목적을 명확히 식별할 수 있도록 이름을 변경할 수 있습니다.
- **통계 추적**: 각 경로에 진입하고 완료한 연락처 수와 목표 전환률에 대한 상세한 통계를 확인할 수 있습니다.

**시작하기**:

1. "+" 아이콘을 클릭해서 액션을 추가하고 "Internal Tools" 카테고리에서 "Split"을 선택하여 워크플로우에 분할 액션을 추가합니다.

![분할 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155019088383/original/Pu2pfnYx-nHg9SHaUbOvV1maUyKRt-_uTw.png?1706615820)

2. 분할 액션 화면이 열립니다.

3. Distribution Type 드롭다운에서 "Random Split"을 선택합니다.

![랜덤 분할 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155019088839/original/zwws5BFeunOJ8arEc1J-IpfN2zENTypERg.png?1706616019)

![분할 타입 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155019088886/original/Nltr_Dp4nprrKniPGUCcwp7HJxowTbj5pA.png?1706616041)

4. 경로 커스터마이징:
   - 기본 "Path A"와 "Path B" 이름을 원하는 이름으로 변경합니다.
   - 각 경로로 보낼 연락처의 비율을 설정합니다 (총합은 100%가 되어야 함).

![경로 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155019089679/original/dQ1-jUdmFj9h6n_fmcgmxTMdu-ufZ7qVgQ.png?1706616293)

5. 최대 5개까지 경로를 추가할 수 있고, 삭제하려는 경로 옆의 "X" 아이콘을 클릭해서 경로를 제거할 수 있습니다.

![경로 추가/삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155019089810/original/RsYkCvzYwedT-rlTOyj5khN9RQ1T1h7rIQ.png?1706616355)

6. "Statistics" 아이콘을 클릭해서 어느 경로에 몇 명의 연락처가 진입했는지 확인할 수 있습니다.

![통계 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155019090293/original/FYGjIZTQGYtRx2UHtVmmdYDkc-5iJyxWYw.png?1706616453)

7. "Stats View"가 활성화되어 있으면 워크플로우에서도 통계를 볼 수 있습니다.

![워크플로우 통계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155019230727/original/EbQ61R9XfNzFQQ_X44mqdX6VTKmHxjptMg.png?1706709457)

**랜덤 분할 예시**

랜덤 분할의 분배는 주사위를 굴리는 것처럼 완전히 무작위입니다.

100명의 고객이 워크플로우에 진입한다고 상상해보세요. 경로 A와 경로 B 각각에 50%의 확률로 고객을 보내는 랜덤 분할을 설정했습니다. 이 분할은 동전 던지기와 같습니다: 각 경로는 각 고객에 대해 선택될 동등한 기회를 가집니다.

분배는 다음과 같이 보일 수 있습니다:

- 고객 1: 앞면이 나와서 경로 A로 이동.
- 고객 2: 뒷면이 나왔지만 경로 A로 이동 (다시).
- 고객 3: 앞면이 나와서 경로 B로 이동.
- 고객 4: 뒷면이 나왔지만 경로 B로 이동 (다시).
- 고객 5: 뒷면이 나와서 경로 B로 이동 (다시).
- 고객 6: 뒷면이 나와서 경로 A로 이동.

이 패턴은 무작위로 계속되며, 이전 선택과 관계없이 각 고객은 두 경로 중 어느 곳이든 갈 확률을 가집니다.

#### 4. 활용 사례

**시나리오**: 당신은 새로운 러닝화를 판매하는 이커머스 스토어 운영자입니다. 두 가지 이메일 제목을 염두에 두고 있습니다: "궁극의 신발로 당신의 달리기에 연료를 공급하세요"와 "당신의 속도를 해방하세요: 게임 체인저 신발."

**해결책**: 랜덤 분할 액션을 사용하여 메일링 리스트를 무작위로 분할합니다 (예: 75/25). 리스트의 75%에게는 "연료를 공급하세요" 이메일을, 나머지 25%에게는 "속도를 해방하세요" 이메일을 보냅니다. 각 경로에 대해 웹사이트 방문, 구매율 및 기타 핵심 지표를 추적합니다.

**결과**: 설정된 기간 후, 결과를 분석하고 어떤 제목이 더 높은 참여도와 판매로 이어졌는지 확인합니다. 이제 성과가 가장 좋은 메시지에 대한 데이터 기반 증거를 가지게 되어, 향후 캠페인에 자신 있게 적용할 수 있습니다.

#### 5. 주의사항

- 연락처가 한 경로를 선택하면, 그것이 그들의 유일한 경로입니다. 재진입하더라도 다른 경로로 진행하지 않고 항상 원래 경로로 이동합니다.

---
*원문 최종 수정: Wed, 28 Feb, 2024 at 3:02 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*