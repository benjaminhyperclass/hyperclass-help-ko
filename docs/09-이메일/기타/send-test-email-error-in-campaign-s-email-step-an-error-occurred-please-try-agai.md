---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 캠페인의 이메일 단계에서 테스트 이메일 발송 오류: 오류가 발생했습니다. 다시 시도해주세요

## 이 오류 메시지가 표시되거나 이메일 발송 트리거 액션이 작동하지 않을 때

![이메일 발송 오류 메시지 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283729294/original/3bUMFoidpu7Vm4OpR7NqHHyKGtvS9em_bA.png?1677268053)

## 다음 사항들을 확인해주세요

1. **이메일/SMS 내용에서 누락된 }이나 {{{ 과다 사용**이 있는지 확인하세요

2. **커스텀 값(Custom Values)이 유효한지** 확인하세요:
   
   특히 링크 부분: [유효한 커스텀 값 목록](https://gohighlevelassist.freshdesk.com/support/solutions/articles/48001078171-custom-values-merge-fields)

![커스텀 값 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48054130934/original/du8IHP5qTYEaAkFDIyC-2fTUe9xhjhdOTg.png?1597456147)

3. **이메일 주소**가 유효한지 확인하세요:
   
   예시: test@gmail,com처럼 점(.)이 쉼표(,)로 잘못 입력된 경우

4. **From 필드**가 이메일 주소 형식으로 되어 있는지 확인하세요:
   
   예시: "ABC company"를 [info@abccompany.com](mailto:info@abccompany.com)과 같은 이메일 주소로 변경

![발신자 이메일 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48054130847/original/neWcoOfxnrs8lrS3TBPg6Jokou4hu4qoCg.png?1597455849)

---
*원문 최종 수정: 2023년 2월 24일*
*Hyperclass 사용 가이드 — hyperclass.ai*