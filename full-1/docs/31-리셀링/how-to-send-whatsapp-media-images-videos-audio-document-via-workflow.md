---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005235-how-to-send-whatsapp-media-images-videos-audio-document-via-workflow
번역일: 2026-11-07
카테고리: 31-리셀링
---

# 워크플로우로 WhatsApp 미디어(이미지·동영상·오디오·문서) 보내기

워크플로우의 **WhatsApp Media**(WhatsApp 미디어) 액션을 쓰면 이미지, 동영상, 문서, 오디오를 자동으로 보낼 수 있어요. 이 문서에서는 설정 방법과 보낼 수 있는 파일 조건을 안내해요.

## 워크플로우로 미디어 보내기

[동영상](https://www.loom.com/embed/4df13d9bda73400ca48e59df119a849e?sid=b1f5a842-c67e-47b6-aa94-42aab63f0847)

{% hint style="info" %}
WhatsApp 미디어는 24시간 고객 서비스 창이 열려 있을 때만 보낼 수 있어요.
{% endhint %}

1. **자동화**로 이동해 **WhatsApp Media**(WhatsApp 미디어) 액션을 검색해요.

   ![WhatsApp 미디어 액션 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046321260/original/EJXnBjgQ086XxqKZE7JQa-bFysatcsiARw.png?1746705388)

2. **WhatsApp: Customer Service Window Check**(WhatsApp: 고객 서비스 창 확인) 액션을 추가해요.

   ![고객 서비스 창 확인 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046325597/original/FLjJyh2rwRswVUr55P8kj1VWN8ukQWBO0w.png?1746708920)

3. **보낸 사람** 번호를 선택하고, **Media Type**(미디어 유형)을 고른 뒤 미디어를 업로드해요. 그리고 캡션을 입력해요.

   ![보낸 사람 번호, 미디어 유형, 캡션 입력 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046321354/original/qCdzBFXjpZNohtmNZ-I8t-1iK420HPFpfQ.png?1746705489)

## 자주 묻는 질문

### WhatsApp 미디어 메시지는 언제 보낼 수 있나요?

24시간 고객 서비스 창(Customer Service Window)이 열려 있을 때만 보낼 수 있어요. 고객이 WhatsApp 메시지를 보낼 때마다 창이 열리고, 그 메시지를 받은 시각부터 24시간 동안 유지돼요.

### 24시간 안에 보내는 미디어 메시지는 무료인가요?

네. 서비스 창이 열려 있는 동안 보내는 모든 미디어(이미지, 동영상, 문서, 오디오)에는 추가 비용이 없어요. 보낼 수 있는 미디어 메시지 수도 제한이 없어요.

### 24시간이 지난 뒤에 미디어를 보내면 어떻게 되나요?

미디어 메시지 전송이 실패해요. 창을 다시 열려면 고객에게 승인된 WhatsApp 템플릿(마케팅 또는 유틸리티)을 보내야 해요.

### 보낼 수 있는 미디어 파일 크기는 얼마인가요?

**이미지**: JPEG 또는 PNG, 최대 5MB

**동영상**: MP4 또는 3GP, 최대 16MB (H.264 영상 + AAC 오디오)

**오디오**: AAC, AMR, MP3, M4A 또는 OGG(OPUS), 최대 16MB

**문서**: TXT, PDF, DOC/X, PPT/X, XLS/X, 최대 100MB

이 제한보다 큰 파일은 WhatsApp API에서 오류가 반환돼요.

### 모든 미디어 유형에 캡션을 넣을 수 있나요?

이미지, 동영상, 문서에는 캡션을 넣을 수 있어요. 오디오 파일은 캡션을 지원하지 않아요. 오디오에 캡션을 입력해도 무시돼요.

### WhatsApp 미디어는 얼마 동안 다운로드할 수 있나요?

고객에게서 받은 미디어(수신)는 보낸 시점부터 7일 동안, 비즈니스에서 보낸 미디어(발신)는 보낸 시점부터 30일 동안 받을 수 있어요. 이 기간이 지나면 미디어 링크가 만료되어 파일에 접근하거나 다운로드할 수 없어요.

{% hint style="info" %}
중요한 미디어를 더 오래 보관해야 한다면, 위 기간 안에 다운로드해서 안전하게 저장해 두세요.
{% endhint %}
