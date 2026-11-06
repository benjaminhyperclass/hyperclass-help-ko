---

번역일: 2026-04-06
카테고리: 11-설정
---

# 고객의 로케이션 ID(Location ID)는 어떻게 찾나요?

저희 지원팀과 상담할 때, 문제가 발생한 로케이션 ID를 요청받을 수 있습니다. 로케이션 ID는 에이전시 계정 내 모든 하위 계정에 부여되는 고유 식별자입니다. 이를 통해 저희가 고객의 계정을 정확히 파악하고 문제 해결 작업을 효율적으로 진행할 수 있습니다.

**중요:** 로케이션 ID는 조직 외부에 공유하지 마세요.

## **방법 1: 비즈니스 프로필(Business Profile)에서 확인**

로케이션 ID를 찾으려면 다음 단계를 따라하세요:

- 하위 계정 대시보드에서 우측 하단의 **설정(Settings)**으로 이동하세요

![하위 계정 설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050981092/original/9HKF1WL13YbzDkn5VGhQM-qsbv4PFb-OuQ.png?1754430940)

- 좌측 네비게이션 바에서 비즈니스 프로필(Business Profile)을 선택하세요

![비즈니스 프로필 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050981083/original/zUcLzNCzONS3pEpdjNZTha2S_MijHDOWmg.png?1754430925)

- 아래와 같이 **로케이션 ID(Location ID)**가 표시됩니다

![로케이션 ID 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050981096/original/_NpMmdPpRzyVWpANRqNAVhlGMD5F6b0VSA.png?1754430961)

---

## **방법 2: URL에서 확인**

이미 고객의 하위 계정에 들어가 있다면, 브라우저 주소창에서 로케이션 ID를 빠르게 찾을 수 있습니다.

- 고객의 하위 계정을 열어주세요

- 브라우저의 URL을 확인해주세요

![URL에서 로케이션 ID 찾기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067381726/original/khijeONdZd_CKkK_kr97dg_f_NUq3lcBnw.jpeg?1774018059)

- /location/ 뒤에 나타나는 값이나 **locationId**= 매개변수의 값을 찾아주세요

- 그 값이 바로 로케이션 ID입니다

**예시:**

https://app.../v2/location/abc123XYZ/dashboard

이 예시에서 **abc123XYZ**가 **로케이션 ID**입니다.

**팁:** URL에서 로케이션 ID를 찾는 방법이 종종 가장 빠른 방법입니다. 설정(Settings) > 비즈니스 프로필(Business Profile)로 이동할 필요가 없기 때문입니다.

---
*원문 최종 수정: Fri, 20 Mar, 2026 at 9:48 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*