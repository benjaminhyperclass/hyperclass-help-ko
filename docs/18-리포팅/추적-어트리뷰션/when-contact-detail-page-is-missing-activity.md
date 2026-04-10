---

번역일: 2026년 4월 8일
카테고리: 리포팅 > 어트리뷰션
---

# 연락처 상세 페이지에 활동이 표시되지 않는 경우

![연락처 활동 누락 문제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48102407459/original/ivyljfwjRUuiUZ_imGedAavptkRZ_mdh8Q.png?1620342991)

저희 개발자 Malde가 이 문제를 깊이 분석하여 추가 로그를 통해 다음과 같은 원인들을 발견했습니다:

어트리뷰션 활동이 연락처 상세 페이지에서 누락되는 한 가지 이유는 리드가 iPhone/Safari를 사용해서 폼을 작성했기 때문일 수 있습니다. 이 문제는 사용자가 폼 제출 시 모든 쿠키를 차단하는 옵션을 켰을 때 발생합니다.

참고 링크: [https://support.apple.com/en-in/guide/safari/sfri11471/mac](https://support.apple.com/en-in/guide/safari/sfri11471/mac)

또한 활동을 추적할 수 없는 다른 경우는 URL에 

?notrack=true

파라미터가 있을 때입니다. 예를 들어:

[https://test.com/?notrack=true](https://test.com/?notrack=true)

쿠키와 로컬 스토리지 권한이 필요합니다. 저희는 사용자의 활동과 서버 세션 ID를 브라우저의 로컬 스토리지에 저장하고 있습니다. 세션 ID가 로컬 스토리지에 저장되지 않거나 접근할 수 없다면, 연락처 활동을 저장할 수 없습니다.

참고: 모든 활동은 저장하지만 세션이 저장되지 않거나 접근할 수 없으면 연락처에 연결하지 않습니다.

---
*원문 최종 수정: 2021년 5월 6일*
*Hyperclass 사용 가이드 — hyperclass.ai*