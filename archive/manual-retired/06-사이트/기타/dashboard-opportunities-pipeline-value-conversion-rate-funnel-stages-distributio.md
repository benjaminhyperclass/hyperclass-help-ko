---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 대시보드: 기회 관리, 파이프라인 가치, 전환율, 퍼널, 단계별 분포

![대시보드 기회 관리 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48050888554/original/3ximDz_Xr0M13BfgUrzY7gkBO8wSAYab4A.png?1595624239)

![파이프라인 가치 및 전환율 차트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48050888625/original/WNBDN8uSwmNMSWj1JEY8iMm0irzmrag7ZQ.png?1595624291)

**날짜 범위 필터**는 리드의 **생성 날짜**를 기준으로 합니다.

위의 기회 관리 뷰는 1월 24일부터 7월 25일까지 Hyperclass에 유입된 4명의 리드가 진행 중(OPEN) 상태에 있다는 것을 보여줍니다.

![특정 날짜 리드 조회](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48050889502/original/DxwSnHuXDWH3nRMU5RqMKEbn5ERJapyA7Q.png?1595624751)

특정 날짜에 유입된 리드 수만 보고 싶다면, 원하는 날짜를 **더블클릭**하세요!

![전환율 계산 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48050890096/original/M-jMy0aW2XRmWzJYcKXgY3_4oGKyHuWjhA.png?1595625067)

**전환율** = 성사(WON) 상태의 리드 수(1) ÷ 총 유입 리드 수(5)

![WON 단계 자동 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48050890289/original/gAw4nTNHY2pHhAqGeq03APsW5Smq1NH9og.png?1595625168)

목록 끝의 **WON**은 자동으로 추가되는 단계입니다. 성사 상태의 리드를 추적하기 위해 별도로 WON 단계를 만들 필요가 없습니다.

![퍼널 차트 분석](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48050891138/original/dK4UFuOfE6vqE37yqPZ9asdU-Is3eTWw1A.png?1595625737)

잠재고객(Prospects) 단계 오른쪽의 백분율은 Facebook 리드 파이프라인에 유입된 리드의 80%가 잠재고객 단계로 진행한다는 의미입니다.

Facebook 리드 파이프라인에 유입된 리드의 60%가 예약 완료(Booked) 단계로 진행합니다.

파이프라인은 영업 단계처럼 구성됩니다. 예를 들어, 초등학교 → 고등학교 → 대학교 단계가 있다고 가정해보세요. 어떤 사람이 대학교 단계에 있다면, 그 사람이 이전 단계들을 거쳤다고 가정하여 초등학교와 고등학교 단계의 리드 수도 1씩 증가시킵니다.

따라서 노쇼(NO SHOW) 단계에 있는 리드를 추적하려면 퍼널 차트를 참조하는 것이 적절하지 않습니다. 차트상으로는 Facebook 리드 파이프라인 유입 리드의 40%가 노쇼 단계로 진행하는 것처럼 보이지만, 실제로는 1명의 리드만 노쇼이므로 40%가 아닌 20%가 되어야 합니다. 나머지 리드는 성사(WON)로 표시되었고, 리드가 성사로 표시되면 해당 리드가 구매까지 모든 단계를 거쳤다고 가정하여 모든 단계의 리드 수가 1씩 증가합니다.

퍼널 차트를 활용하려면, 각 파이프라인 단계가 영업에 한 단계씩 가까워지는 구조여야 합니다. 예: 잠재고객 → 설문 제출 → 상담 → 구매

파이프라인 생성에 대한 자세한 정보: [https://hyperclass.gitbook.io/hyperclass-docs](https://hyperclass.gitbook.io/hyperclass-docs)

노쇼, 상담 받았지만 구매하지 않음 등의 단계를 추적하고 싶다면 **단계별 분포 차트**를 참고하세요.

![단계별 분포 차트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48050893703/original/gq3NWTUSY7nybUQy-6v2JzlibpCVXfbabQ.png?1595627447)

위 차트는 현재 어떤 단계에 몇 명의 리드가 있는지를 단순히 보여줍니다.

어떤 단계를 거쳐간 리드 수를 추적하고 싶다면 **기회 중복 허용** 기능을 활성화하세요. 그러면 리드가 노쇼 단계를 거쳤을 때 해당 단계에 기회 카드가 남게 됩니다.

![기회 중복 허용 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48050893887/original/_Jpu2ayqNGHJvMoOPlttzHSgDt2rZ1TO_g.png?1595627534)

트리거 액션인 **기회 추가/업데이트**에서도 **기회 중복 허용** 토글이 활성화되어 있는지 확인하세요.

![워크플로우 기회 중복 허용 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48050894478/original/oNZBb6deBDv6ZgqnurZSZcEOamtPPmDRKA.png?1595627906)

---
*원문 최종 수정: 2020년 7월 24일*
*Hyperclass 사용 가이드 — hyperclass.ai*