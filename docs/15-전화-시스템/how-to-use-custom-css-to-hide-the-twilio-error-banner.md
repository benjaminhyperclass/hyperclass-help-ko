---

번역일: 2026-04-06
카테고리: 15-전화-시스템
---

# 커스텀 CSS로 Twilio 오류 배너 숨기기

아래 스크린샷과 같은 배너가 보인다면, 이를 숨길 수 있는 방법이 있습니다.

![Twilio 오류 배너 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48281347243/original/c2Xf2dAC_DfqTUKcOwbObBsJz095Xh1jlQ.png?1676308860)

## Twilio 오류 배너를 제거하는 단계:

먼저 좌측 네비게이션 사이드바 상단 왼쪽 모서리에 있는 하위 계정 전환 탭을 클릭하세요.

![하위 계정 전환 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034802298/original/GHhpVOFdprMH8XMarS5xFwkAsA83Y41gWw.png?1729077753)

"Switch to Agency View(에이전시 뷰로 전환)" 버튼을 클릭하세요.

![에이전시 뷰로 전환](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034802337/original/JX-DZr53zYWiy_NJ4gv6Dh9VUp1ndtWfVg.png?1729077778)

"Settings(설정)" 메뉴로 이동하세요.

![설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034802378/original/IgdhMASQgK7mEHUKPI9vlNUGh2_myQGP3w.png?1729077808)

설정 메뉴에 들어간 후, "Company(회사)" 탭을 클릭하세요. 완료되면 "Custom CSS(커스텀 CSS)" 필드를 찾을 때까지 아래로 스크롤하세요. 다음 코드를 복사해서 필드에 붙여넣기 하세요: `.hl_alert_twilio{display:none}`

![커스텀 CSS 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034805431/original/YHdM4R_GK99I9NsL4VoNroOa8udgzbIwlA.png?1729079311)

코드를 입력한 후 반드시 "Update Company(회사 업데이트)" 버튼을 클릭하세요.

![회사 업데이트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034806025/original/jf20FqEwOqLZ5aB7BDP9AuRi4-FHWM0Usw.png?1729079666)

이제 Twilio 오류 배너를 성공적으로 제거했습니다. 이 설정은 모든 하위 계정에 적용되어 모든 Twilio 배너를 숨깁니다.

---
*원문 최종 수정: Wed, 16 Oct, 2024 at 8:15 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*