---
원문: /support/solutions/articles/155000004356-adding-custom-fields-in-the-chat-widget-contact-form
번역일: 2026-11-07
카테고리: 06-사이트
---

# 채팅 위젯 문의 폼에 커스텀 필드 추가하기

**채팅 위젯**의 문의 폼에 커스텀 필드를 추가해서 방문자에게 필요한 정보를 더 받을 수 있어요. SMS/이메일 및 WhatsApp 채팅 위젯 유형에서 쓸 수 있고, 이 문서에서는 사용할 수 있는 필드 종류와 제한, 필수 항목 규칙을 안내해요.

## 이 기능으로 할 수 있는 일

- 커스텀 필드 추가: 채팅 위젯 빌더에서 기본 필드 외에 **커스텀 필드**를 연락처 정보로 추가할 수 있어요. SMS/이메일 또는 WhatsApp 채팅 위젯 유형으로 고객과 대화할 때 추가 정보를 받아 두기 좋아요.
- 기본 필드: 채팅 위젯은 아래 기본 필드를 계속 지원해요.

  - **Name**(이름) (필수)
  - **Phone**(전화번호) 또는 **Email**(이메일) (연락처를 만들려면 둘 중 하나는 꼭 필요해요) 참고: 제거하려고 하면 기본값인 전화번호가 유지돼요.
  - **Message**(메시지)
- 지원하는 커스텀 필드 유형: 위젯에서는 아래 데이터 유형의 커스텀 필드를 쓸 수 있어요.

  - **SINGLE LINE**(한 줄 입력)
  - **MULTI LINE**(여러 줄 입력)
  - **MONETARY**(금액)
  - **NUMERIC**(숫자)
  - **PHONE**(전화번호)
  - **DATE PICKER**(날짜 선택)
  - **DROPDOWN (SINGLE)**(드롭다운, 단일 선택)
- 필드 개수 제한: 기본 필드와 커스텀 필드를 합쳐 최대 5개까지 추가할 수 있어요. 전화번호나 이메일 중 하나는 반드시 있어야 해요.
- 필드 검증 및 필수 항목:
- 기본 필드(이름, 전화번호, 이메일, 메시지)는 추가하면 필수 항목이 돼요.
- 문의 폼에서 커스텀 연락처 필드를 **필수 항목**으로 설정할 수 있어요.
- **필수 필드**는 위젯에 별표(\*)로 표시돼요.
- 방문자는 필수 필드를 모두 입력해야 폼을 제출할 수 있어요.
- 필수 항목 규칙은 아래 경우에 적용돼요.
- 방문자가 위젯 문의 폼으로 대화를 시작할 때
- 대화 중에 상담원이 연락처 정보를 요청할 때
- 커스텀 필드에는 입력값 검증이 적용돼요.
- 전화번호 필드는 국가 코드를 기준으로 검증해요.
- 이메일 필드는 올바른 이메일 형식인지 검증해요.
- 이미 만들어 둔 위젯은 필드를 **필수 항목**으로 설정하지 않는 한 그대로 유지돼요.
- 전화번호 필드의 국제 번호 형식: 전화번호 필드를 2개 이상 추가하면, 방문자가 국제 전화번호 형식에 맞게 국가 코드를 고를 수 있어요. 다만 국가 국기는 모든 전화번호 필드에 하나만 선택할 수 있어요. 한 필드에서 국기를 바꾸면 다른 전화번호 필드의 국기도 자동으로 바뀌어요.

![채팅 위젯 문의 폼 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037854426/original/fqP0HdlsOujVMd8cMeslvrLqtJhj-F6yVw.png?1733458193)

![커스텀 필드가 추가된 문의 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037854427/original/M8tnbVg-LtyLaSNtKTyJ9epDs56EbrBU4w.png?1733458193)

![필수 항목이 표시된 위젯 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063971075/original/xijY9gtcpHMHVhyDx3ffdlhP4qnKh5YtSg.png?1770027824)
