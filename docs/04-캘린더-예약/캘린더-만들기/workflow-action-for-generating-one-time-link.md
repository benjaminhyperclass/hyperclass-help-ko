---

번역일: 2026-04-06
카테고리: 04-캘린더-예약 > 캘린더-만들기
---

# 원타임 링크 생성 워크플로우 액션

**목차**

- [원타임 링크 이해하기](#원타임-링크-이해하기)
- [워크플로우에 원타임 링크를 통합하는 주요 장점](#워크플로우에-원타임-링크를-통합하는-주요-장점)
- [동적 원타임 링크 생성하는 방법](#동적-원타임-링크-생성하는-방법)

#### 관련 문서

**[원타임 링크](one-time-link.md)**

---

#### 원타임 링크 이해하기

원타임 링크는 예약이 완료되면 자동으로 만료되는 고유한 예약 링크입니다. '원타임 예약 링크 생성' 액션을 통해 사용자는 워크플로우 내에서 직접 이런 링크를 쉽게 만들 수 있습니다.

---

#### **워크플로우에 원타임 링크를 통합하는 주요 장점**

- **간편한 예약 프로세스:** 링크 생성의 수동 작업을 없애서 원활하고 오류 없는 예약 과정을 보장합니다.
- **워크플로우 통합의 다양성:** 맞춤형 워크플로우에 매끄럽게 연결되어 다양한 사용 사례에 적응하므로, 여러 예약 시나리오에서 활용도 높은 도구입니다.
- **향상된 예약 관리:** 예약 관리에 동적이고 효과적이며 유연한 접근 방식을 제공하여 사용자에게 더 큰 제어력과 적응성을 줍니다.

---

#### **동적 원타임 링크 생성하는 방법**

워크플로우 내에서 동적 원타임 링크를 생성하려면 다음의 간단한 단계를 따르세요:

#### 1. 워크플로우 만들기: 먼저 계정에서 워크플로우를 만듭니다. 특정 요구사항에 따라 워크플로우를 시작하는 트리거를 정의하세요.

![워크플로우 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018179878/original/9PH-4QaDl1YRM4CRiWB2XUQGAMQ-z3B54w.png?1705662313)

#### **2. '원타임 예약 링크 생성' 액션 추가하기:** 워크플로우에서 액션을 추가합니다. 'Appointments(예약)' 카테고리로 이동해서 'Generate One Time Booking Link(원타임 예약 링크 생성)'를 선택하세요.

![원타임 예약 링크 생성 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018179038/original/YCkyI2w8TIZMetLj9EHdbrWc3tthBnU8FQ.png?1705662119)

#### 3. 원타임 링크를 생성할 캘린더를 선택하세요.

![캘린더 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018180332/original/lDOQfOfeezXDE2rv93kRi7tuZRnssl3r0g.png?1705662475)

#### **4. 생성된 링크 공유하기:** 링크를 연락처와 공유하려면 워크플로우에 커뮤니케이션 액션(예: 이메일)을 추가하세요.

![생성된 링크 공유](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018181091/original/RKQiBow9CoDlsPKjvyEGvC-0QiqzQ_JTHw.png?1705662726)

#### **5. 커스텀 값 추가하기:** 트리거가 활성화될 때마다 생성되는 고유한 원타임 링크를 커스텀 값을 사용해서 이메일 본문에 삽입합니다. 'Generate One Time Booking Link(원타임 예약 링크 생성)'를 선택하고 'One Time Link(원타임 링크)'를 선택하세요.

![커스텀 값 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018180795/original/lGXO4iv2tvapxRKiIFiXIeulY_6LFexvVg.png?1705662663)

#### **6. 이메일 본문 커스터마이징:** 필요에 따라 이메일 본문을 커스터마이징하고 '저장'을 클릭하세요.

#### **7. 워크플로우 발행:** 워크플로우 설정이 완료되면 발행하세요. 이제 정의된 조건에 의해 트리거된 워크플로우에 연락처가 진입할 때마다 고유한 원타임 링크가 생성되어 이메일로 전송됩니다.

---

---
*원문 최종 수정: Fri, 19 Jan, 2024 at 5:32 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*