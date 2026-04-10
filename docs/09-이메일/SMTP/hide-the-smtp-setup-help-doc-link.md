---

번역일: 2026-04-07
카테고리: 09-이메일 > SMTP
---

# SMTP 설정 도움말 링크 숨기기

이 가이드는 SMTP 설정 도움말 링크를 숨기는 방법에 대한 간단한 안내를 제공합니다.

**목차**

- [SMTP 설정 도움말 링크 제거/숨기는 방법](#smtp-설정-도움말-링크-제거숨기는-방법)

## SMTP 설정 도움말 링크 제거/숨기는 방법

고객이 다음 링크를 보지 않기를 원한다면:

![SMTP 도움말 링크](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032853011/original/eP8muhxmKz6vk0vz9iAKhy17sMVPvCBtdA.jpg?1726245732)

**하이퍼클래스 계정에 로그인한 후, Settings(설정) > Agency Settings(에이전시 설정)으로 이동하여 Custom CSS 필드까지 스크롤을 내려 다음 코드를 붙여넣으세요:**

```css
.hl__smtp-help-doc {
display: none;
}
```

이렇게 하면 SMTP 설정 도움말 링크가 숨겨집니다. 나중에 다시 SMTP 설정 도움말 링크를 표시하고 싶다면, 위의 커스텀 CSS 필드에서 코드를 제거하기만 하면 됩니다.

**관련 가이드**

- SMTP 제공업체 설정하는 방법

---
*원문 최종 수정: 2024년 9월 13일*
*Hyperclass 사용 가이드 — hyperclass.ai*