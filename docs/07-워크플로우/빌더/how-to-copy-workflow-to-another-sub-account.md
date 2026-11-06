---

번역일: 2026-04-07
카테고리: 07-워크플로우 > 빌더
---

# 워크플로우를 다른 하위 계정으로 복사하는 방법

### 커뮤니티 튜토리얼 더보기

[https://www.youtube.com/watch?v=Rpbas9scJCc&feature=youtu.be](https://www.youtube.com/watch?v=Rpbas9scJCc&feature=youtu.be)

[https://www.youtube.com/watch?v=DnLKoZF0mug](https://www.youtube.com/watch?v=DnLKoZF0mug)

[https://www.youtube.com/watch?v=J7iJtHtiUnc](https://www.youtube.com/watch?v=J7iJtHtiUnc)

[https://www.youtube.com/watch?v=jwleRdaw0sE](https://www.youtube.com/watch?v=jwleRdaw0sE)

[https://www.youtube.com/watch?v=G7oLShirC80](https://www.youtube.com/watch?v=G7oLShirC80)

이제 복잡한 "스냅샷(Snapshot)" 과정을 거치지 않고도 워크플로우를 한 하위 계정에서 다른 하위 계정으로 쉽게 복사할 수 있습니다. 에이전시 관리자(Agency Admin)만 워크플로우를 복사할 수 있습니다.

### 하위 계정으로 복사하기

![워크플로우를 하위 계정으로 복사하는 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010518416/original/qkFg8Hcug6YAH4mmV0H5gBVYDGb48UQG8A.png?1697704090)

### 하위 계정 선택

![복사할 하위 계정을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010415170/original/Qik7rpWoi8n9fvpnlFjEj5CDfAvXX_hTfw.png?1697624900)

- 로그인한 사용자가 접근할 수 있는 하위 계정만 목록에 표시됩니다
- 제출하면 워크플로우가 선택한 하위 계정으로 복사됩니다
- 다른 하위 계정으로 복사된 워크플로우는 기본적으로 초안(Draft) 상태가 됩니다

### 워크플로우 복사 기록

![워크플로우 복사 기록 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010518546/original/4ry62KeHcXiu5vXe9NT5pJTThrk6Y3F0_Q.png?1697704113)

![워크플로우 복사 기록의 상세 정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010519090/original/aVbb3PlFS79ZBM_TCDW4zaHMW4E1KOCO4g.png?1697704277)

- 다른 하위 계정으로 복사한 워크플로우의 기록이 각 로그의 현재 상태와 함께 나열됩니다

### 워크플로우 복사 기록 상세

![워크플로우 복사 기록의 자세한 내용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010519268/original/d9HUFyhGw5OGjnZXrCyVyVNSYNOtOfqrnQ.png?1697704365)

![워크플로우 복사 오류 디버깅 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010519423/original/GiPLiUp3Ox0fo5TG4fKRr_R-grQ6G_JBpA.png?1697704386)

- 복사 중 오류가 발생한 경우, 해당 기록을 클릭하여 자세한 정보를 확인하고 디버깅할 수 있습니다

### 워크플로우 복사 시 에셋은 어떻게 처리되나요?

워크플로우를 다른 하위 계정으로 복사할 때 다음 에셋들이 함께 복사됩니다:

- 연락처 태그(Contact Tags)
- 연락처 커스텀 필드(필드 유형이 동일해야 함)
- 하위 계정 커스텀 값(Sub-Account Custom Values)
- 기회 커스텀 필드(Opportunity Custom Fields)
- 기회 파이프라인 및 단계(Opportunity Pipelines & stages)
- 이메일/SMS 텍스트 템플릿
- 이메일 빌더 템플릿 (곧 출시 예정)

참고: 기타 모든 에셋이나 참조 항목은 선택한 하위 계정으로 복사하기 전에 워크플로우에서 제거됩니다.

---
*원문 최종 수정: 2024년 2월 29일*
*Hyperclass 사용 가이드 — hyperclass.ai*