---
원문: https://help.gohighlevel.com/support/solutions/articles/48001218845-how-to-attach-files-to-mms-using-custom-values
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 커스텀 값으로 MMS에 파일 첨부하기

커스텀 값을 쓰면 워크플로우에서 MMS 메시지를 보낼 수 있어요. 이 문서에서는 커스텀 값 URL을 만들어 MMS에 파일을 붙이는 방법과, 문제가 생겼을 때 확인할 내용을 안내해요.

커스텀 값은 스냅샷이나 자주 쓰는 워크플로우에 함께 활용하기 좋아요. 설정이 간단해서 자동화를 더 쉽게 넓혀 갈 수 있어요.

## 커스텀 값 URL을 SMS 메시지에 첨부하기

### 1단계: 커스텀 값 URL 만들기

**설정 > 커스텀 값 > 커스텀 값 추가**로 이동한 다음, MMS 파일의 URL을 입력하세요.

![커스텀 값에 MMS URL을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48240187218/original/Cq5T3LD3wiScR2JwiibCexevGo9I4SOlLQ.gif?1658417559)

### 2단계: MMS를 보낼 워크플로우로 이동하기

MMS를 보내려는 워크플로우를 열고, 만들어 둔 커스텀 값을 첨부파일로 추가하세요. 이때 커스텀 값을 복사해서 붙여 넣어야 해요.

![워크플로우에서 커스텀 값을 첨부파일로 붙여 넣는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48240188567/original/PDE7_BYhWRlwXQ1KbFOTDcncrlAhAotBGQ.gif?1658417802)

{% hint style="info" %}
통신사마다 MMS 크기 제한이 엄격해요. 이 제한은 통신사가 정한 것이에요.

통신사별 크기 기준은 아래 문제 해결의 "SMS로 보낼 때 MMS 최대 크기는 얼마인가요?"를 참고하세요.
{% endhint %}

## 문제 해결

### SMS로 보낼 때 MMS 최대 크기는 얼마인가요?

| **통신사** | **롱코드 MMS 첨부 크기** | **톨프리 MMS 첨부 크기** | **쇼트코드 MMS 첨부 크기** |
| --- | --- | --- | --- |
| AT&T | 0.6MB | 0.6MB | 0.6MB |
| Sprint | 1.4MB | 0.6MB | 1.4MB |
| T-Mobile | 1.5MB | 0.6MB | 1.0MB |
| Verizon | 0.675MB | 0.6MB | 1.2MB |

### SMS로 보낼 때 MMS에 쓸 수 있는 파일 형식은 무엇인가요?

- jpeg
- png
- gif

### 메시지를 보냈는데 커스텀 값이 작동하지 않아요

아래 내용을 확인하세요.

1. 커스텀 값 URL에 공백이 없는지 확인하세요. 테스트용 퍼널에 URL을 추가한 뒤 페이지를 미리보기로 열면 확인할 수 있어요. MMS 파일이 보이면 커스텀 값은 정상이에요. 그렇다면 다음 항목으로 넘어가세요.
2. MMS URL의 파일이 해당 통신사의 크기 기준을 지키는지 확인하세요(위의 "SMS로 보낼 때 MMS 최대 크기는 얼마인가요?" 참고).
