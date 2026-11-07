---
원문: /support/solutions/articles/155000001522-how-to-preview-custom-field-in-email-builder-
번역일: 2026-11-07
카테고리: 10-마케팅
---

# 이메일 빌더에서 커스텀 필드 미리보기

이메일을 보내기 전에 커스텀 필드가 받는 사람에게 어떻게 보이는지 미리 확인하는 방법을 안내해요. 테스트용 가짜 데이터를 따로 만들지 않아도 돼서, 이메일 캠페인을 더 간단하고 비용 부담 없이 점검할 수 있어요.

커뮤니티에서 올린 다른 튜토리얼도 참고해 보세요.

## 커스텀 필드 미리보기 순서

미리보기로 `{{first_name}}` 같은 병합 필드가 제대로 채워지는지 보낼 때와 똑같이 확인할 수 있어요. 발송 전에 값을 확인하면 개인화가 깨지는 일을 막고, 다시 작업하는 수고를 줄이며, 이메일 전달률에도 도움이 돼요.

1. **이메일 빌더**에서 이메일을 열어요.

   ![이메일 빌더에서 이메일을 연 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063988124/original/wr6eqNIz69_t5VjFPzQOtSxZQJ3fBskBDQ.jpeg?1770036745)
2. 편집기 상단의 메뉴 바를 찾아요.

   ![편집기 상단 메뉴 바](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063988165/original/cdzw6lCEJFLOIsEdbokYBXvEaQq0pq_Ulw.jpeg?1770036768)
3. **저장** 옆에 있는 **미리보기**를 클릭하면 바로 미리보기가 열려요.

   ![저장 옆의 미리보기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063988245/original/fLpBbJKIfhVLDMm-w0akx9J-QhXQeCROUQ.jpeg?1770036810)
4. 커스텀 필드에 예상한 값이 표시되는지 확인해요.

   ![커스텀 필드 값이 표시된 미리보기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063988325/original/WnsxwN9u6FErCjUmIXn-FdJDrRJFGSE1oQ.jpeg?1770036836)
5. 주소 병합 필드는 미리보기에서 전체 내용이 표시돼요. 이메일에 전체 주소를 쓴다면 `{{contact.full_address}}`로 테스트해서 미리보기가 연락처 정보와 같은지 확인하세요.
6. 이상한 부분이 있으면 미리보기를 닫고, 내용이나 테스트 데이터를 고친 다음 **미리보기**를 다시 클릭해요.

   ![미리보기를 닫고 내용을 수정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063988368/original/wflbIXQFrMNJK-xcW6z41Vwbr2epD9gX6w.jpeg?1770036862)
7. 계속 편집하거나, 확인이 끝났으면 이메일을 보내거나 예약하세요.

{% hint style="info" %}
**미리보기**는 이제 상단 메뉴 바에서 한 번에 열 수 있어요. 더 이상 점 세 개(케밥) 메뉴를 쓰지 않아도 돼요.
{% endhint %}
