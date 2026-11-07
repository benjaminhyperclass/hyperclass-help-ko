---
원문: /support/solutions/articles/155000006419-whatsapp-error-message-type-is-currently-not-supported-
번역일: 2026-11-07
카테고리: 31-리셀링
---

# WhatsApp 오류 해결: "Message type is currently not supported"

WhatsApp으로 메시지를 보낼 때 "Message type is currently not supported"(현재 지원되지 않는 메시지 유형) 오류가 나타나면, 보내려는 메시지의 형식이나 미디어 유형을 WhatsApp Business API가 지원하지 않는다는 뜻이에요. 이 문서에서 원인과 해결 방법을 확인하세요.

## 왜 이 오류가 나타나나요?

이 오류는 보통 아래 세 가지 경우에 나타나요.

|  |  |
| --- | --- |
| 1 | 지원되지 않는 미디어 유형<br>- WhatsApp에서 허용하지 않는 파일 형식(예: .exe, .zip, .tar)을 보내려는 경우<br>- WhatsApp은 이미지(JPG, PNG), 문서(PDF, DOCX), 동영상(MP4), 오디오(AAC, MP3, OGG) 같은 특정 미디어 형식만 지원해요. |

|  |  |
| --- | --- |
| 2 | 지원되지 않는 메시지 유형<br>- 지원되지 않는 사용자 지정 버튼이나 메시지 구조처럼 일부 인터랙티브 기능은 쓸 수 없어요.<br>- 캡션이 있는 문서 메시지는 현재 지원되지 않아요.<br>- 스티커, GIF 등 지원되지 않는 형식을 보내려는 경우 |

|  |  |
| --- | --- |
| 3 | 템플릿 제한<br>- WhatsApp 템플릿을 사용하는 경우, 템플릿 본문이나 머리글에 지원되지 않는 유형의 파라미터가 들어 있을 수 있어요. |

## 해결 방법

### 미디어 파일 형식 확인하기

WhatsApp에서 지원하는 파일 형식만 사용하세요.

- 이미지: JPG, JPEG, PNG (최대 5MB)
- 문서: PDF, DOCX, PPTX, XLSX, TXT
- 오디오: AAC, MP3, OGG

### 메시지 내용 확인하기

- 스티커, GIF, WhatsApp에서 지원하지 않는 파일은 보내지 마세요.
- 먼저 말을 거는 메시지는 승인된 템플릿으로 보내세요.

### 템플릿 다시 설정하기 (템플릿을 쓰는 경우)

- 메시지 템플릿이 승인된 상태인지, Meta의 서식 가이드라인을 따르고 있는지 확인하세요.
- 지원되지 않는 파라미터가 있거나 값이 채워지지 않은 자리표시자가 남아 있는 메시지는 보내지 마세요.

### 다른 방식으로 보내 보기

- 형식이 지원되지 않는 파일(예: .zip)은 Google Drive 같은 곳에 올린 뒤, 파일 대신 링크를 공유하세요.

## 예시

```
잘못된 예: WhatsApp으로 .zip 파일을 직접 보내기
```

```
올바른 예: .zip 파일을 Google Drive에 올린 뒤, WhatsApp 메시지에 다운로드 링크를 담아 보내기
```

{% hint style="info" %}
Meta의 WhatsApp On-Premises API 오류 참고 문서는 On-Premises API 서비스 종료(2025년 10월 23일)에 따라 제공이 중단되었어요. 최신 오류 및 미디어 안내는 WhatsApp Business Platform의 Meta Cloud API 문서를 참고하세요.
{% endhint %}

## 요약

"Message type is currently not supported" 오류는 보내려는 메시지의 형식을 WhatsApp이 처리할 수 없다는 뜻이에요. 아래 방법으로 해결하세요.

- 지원되는 파일 유형과 형식만 사용하세요.
- 먼저 보내는 메시지에는 승인된 템플릿을 사용하세요.
- 스티커, GIF, 압축 파일 같은 지원되지 않는 형식은 보내지 마세요.
