---

번역일: 2026-04-07
카테고리: 09-이메일 > 트러블슈팅
---

# 캠페인 이메일 단계에서 테스트 이메일 전송 오류: 오류가 발생했습니다. 다시 시도해 주세요

## 이 오류 메시지가 나타나거나 이메일 발송 트리거 액션이 작동하지 않는 경우

![이메일 전송 오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283729294/original/3bUMFoidpu7Vm4OpR7NqHHyKGtvS9em_bA.png?1677268053)

## 다음 사항들을 확인해 주세요

1. 이메일/SMS 콘텐츠에서 **누락된 }** 또는 **{{{ 과도 사용**을 확인하세요

2. 커스텀 값(Custom Values)이 유효한지 확인하세요:
   
   특히 링크를 확인해 주세요: [유효한 커스텀 값 목록](https://hyperclass.gitbook.io/hyperclass-docs)

![커스텀 값 오류 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48054130934/original/du8IHP5qTYEaAkFDIyC-2fTUe9xhjhdOTg.png?1597456147)

3. **이메일 주소**가 유효한지 확인하세요:
   
   예: test@gmail,com처럼 점(.) 자리에 쉼표(,)가 있는 경우

4. From 필드가 이메일 주소 형식인지 확인하세요:
   
   예: ABC company를 [info@abccompany.com](mailto:info@abccompany.com)과 같은 이메일 주소로 변경하세요

![From 필드 설정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48054130847/original/neWcoOfxnrs8lrS3TBPg6Jokou4hu4qoCg.png?1597455849)

---
*원문 최종 수정: 2023년 2월 24일*
*Hyperclass 사용 가이드 — hyperclass.ai*