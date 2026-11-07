---
원문: /support/solutions/articles/155000009513-workflow-action-ai-video-generation
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — AI Video Generation(AI 동영상 생성)

하이퍼클래스 워크플로우의 **AI Video Generation**(AI 동영상 생성) 액션을 쓰면 Google의 Veo 3.1 모델로 짧은 AI 동영상을 만들 수 있어요. 텍스트 프롬프트로 동영상을 만들고, 참조 이미지와 연락처 정보로 내용을 맞춤 설정하고, 필요하면 오디오도 넣을 수 있어요. 만들어진 동영상은 자동으로 미디어 라이브러리에 저장되고, 공개 URL을 이후 워크플로우 액션에서 쓸 수 있어요.

## AI Video Generation의 장점

동영상 만들기를 자동화 안에서 바로 처리하므로, 외부 도구 없이 맞춤형 콘텐츠를 만들 수 있어요.

- 동영상 자동 생성: 워크플로우 안에서 바로 동영상을 만들어요.
- 선택 가능한 AI 모델: 완성도 높은 동영상은 Veo 3.1 Quality, 빠른 생성은 Veo 3.1 Fast를 선택하세요.
- 맞춤형 콘텐츠: 커스텀 값으로 연락처나 워크플로우 데이터에 맞는 동영상을 만들어요.
- 프롬프트 보완: 간단한 프롬프트를 AI로 다듬거나, 준비된 템플릿으로 시작할 수 있어요.
- 참조 이미지: 이미지를 최대 3장까지 넣어 동영상의 모습을 안내할 수 있어요.
- 오디오 선택: AI가 만든 배경 음악과 주변 소리를 넣을 수 있어요.
- 간편한 공유: 미디어 라이브러리에 저장된 공개 URL로 동영상을 공유해요.

---

## 모델과 화질 설정

하이퍼클래스에서는 생성 속도와 화질을 고려해 고를 수 있도록 Veo 3.1 모델 두 가지를 제공해요.

| 모델 | 설명 |
| --- | --- |
| Veo 3.1 Quality | 완성도 높고 세밀한 동영상을 만들어요. |
| Veo 3.1 Fast | 더 빠르게 동영상을 만드는 데 중점을 둬요. |

화질은 **Standard** (720p)와 **High (1080p)** 중에서 고를 수 있어요. 기본값은 Veo 3.1 Quality와 Standard 해상도예요.

---

## 프롬프트, 프롬프트 보완, 템플릿

**Prompt**(프롬프트) 필드에 입력한 내용이 동영상에 담겨요. 피사체, 움직임, 조명, 시각 스타일을 커스텀 값을 포함해 최대 5,000자까지 쓸 수 있어요.

- **Enhance prompt**(프롬프트 보완): 간단한 아이디어를 더 자세한 프롬프트로 자동 확장해요.
- **Custom Values**(커스텀 값): 연락처 필드, 웹훅 데이터, 이전 워크플로우 단계의 결과로 동영상을 맞춤 설정해요.
- **Prompt Templates**(프롬프트 템플릿): **Product mockups**(상품 목업), **Social post**(소셜 게시물), **Promo flyer**(프로모 전단), **Lifestyle**(라이프스타일) 중에서 고를 수 있어요.

각 템플릿에는 샘플 동영상 미리보기와 **Use this prompt**(이 프롬프트 사용) 옵션이 있어요.

예시 프롬프트:

> Create a cinematic video of a luxury coffee mug on a wooden table. Slowly zoom toward the mug with warm morning lighting and gentle steam rising from the coffee.

---

## 참조 이미지

참조 이미지는 동영상의 피사체, 모양, 스타일을 안내하는 데 쓰여요. JPEG 또는 PNG 이미지를 최대 3장까지 아래 방법으로 추가할 수 있어요.

- **System upload**(시스템 업로드): 내 컴퓨터에서 이미지를 업로드해요.
- **Media library**(미디어 라이브러리): 이미 업로드한 이미지를 선택해요.
- **URL**: 이미지 URL을 붙여 넣거나 커스텀 값을 넣어요.

참조 이미지는 장당 최대 20MB까지 가능해요.

{% hint style="warning" %}
참조 이미지를 추가하면 동영상 길이가 자동으로 8초로 고정돼요.
{% endhint %}

---

## 크기, 길이, 오디오 설정

**Additional Settings**(추가 설정)에서 동영상을 어디에 쓸지에 맞춰 형식과 소리를 설정할 수 있어요.

| 설정 | 선택 가능한 옵션 |
| --- | --- |
| **Size**(크기) | Landscape(가로, 1920 × 1080) 또는 Portrait(세로, 1080 × 1920) |
| **Duration**(길이) | 4초, 6초, 8초 |
| **Generate Audio**(오디오 생성) | 켜짐 또는 꺼짐 |

기본값은 Landscape, 8초, **Generate Audio** 꺼짐이에요. **Generate Audio**를 켜면 배경 음악이나 주변 소리 같은 AI 생성 소리가 추가되고, 초당 생성 비용이 올라가요.

---

## 생성된 동영상 URL과 이후 액션

생성된 동영상은 자동으로 미디어 라이브러리에 저장돼요. 미디어 저장소에 대한 자세한 내용은 [미디어 저장소 완벽 가이드](../../11-설정/서브어카운트-설정/complete-guide-to-media-storage.md)와 [미디어 저장소 파일 형식·제한 및 고급 기능](../../11-설정/media-storage-file-upload-limits.md)을 참고하세요. 액션이 실행될 때마다 아래 출력 변수가 만들어지고, 이후 워크플로우 액션에서 쓸 수 있어요.

| 출력 변수 | 용도 |
| --- | --- |
| **Video URL**(동영상 URL) | 생성된 동영상의 공개 링크 |
| **Video File Path**(동영상 파일 경로) | 동영상이 저장된 경로 |
| **Video File Name**(동영상 파일 이름) | 생성된 파일의 이름 |

다른 액션에서 이 동영상을 쓰려면 커스텀 값 선택 창을 열고 **Previous steps > AI Video Generation > Video URL**(이전 단계 > AI 동영상 생성 > 동영상 URL)을 선택하세요.

이 URL은 이메일, SMS, 알림, 아웃바운드 웹훅에 넣을 수 있어요.

{% hint style="warning" %}
생성된 동영상 URL은 공개돼 있어요. 링크가 있는 모든 사람이 동영상을 볼 수 있으니 민감한 정보는 넣지 마세요.
{% endhint %}

---

## 워크플로우에서 AI Video Generation 설정하기

액션을 올바르게 설정해야 원하는 프롬프트, 참조 이미지, 출력 설정으로 동영상이 만들어져요.

1. **자동화 > 워크플로우**로 이동해 워크플로우를 열거나 새로 만드세요.
2. **+** 아이콘을 클릭하고 **AI Actions**(AI 액션) 아래에서 **AI Video Generation**을 선택하세요.

   ![AI Video Generation 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084947384/original/yPp6fQ58MrZd3YoeQl0pWdB7jKbsRBYCgA.gif?1793799433)
3. **Veo 3.1 Quality** 또는 **Veo 3.1 Fast**를 고르고 원하는 해상도를 선택하세요.

   ![모델과 해상도 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084947424/original/laViqCpf89rXUjFtSIXN-xxWDj_Eu7mkPg.gif?1793799444)
4. 동영상 프롬프트를 입력하거나, 프롬프트를 보완하거나, 준비된 템플릿을 선택하세요.

   ![프롬프트 입력 및 템플릿 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084947449/original/LDgGy-wTW364EzN5v77HMXOalDFshqVfqg.gif?1793799468)
5. 필요하면 내 컴퓨터, **Media library**, URL에서 참조 이미지를 최대 3장까지 추가하세요.
6. **Additional Settings**를 펼쳐 **Size**, **Duration**, **Generate Audio**를 설정하세요.
7. **Save action**(작업 저장)을 클릭하세요.

   ![작업 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084947517/original/IZAzfqwPbmY2RE668XOTiFOXo3EGHsRp9Q.gif?1793799537)
8. 필요하면 **Test**(테스트) 탭을 열고 테스트용 연락처를 선택해 액션을 테스트하세요.
9. 이후 워크플로우 액션을 추가하고, 커스텀 값 선택 창에서 생성된 **Video URL**을 넣으세요.

{% hint style="info" %}
AI Video Generation은 프리미엄 액션이에요. 테스트를 포함해 실행할 때마다 추가 요금이 발생해요. 비용은 모델, 동영상 화질, 길이, 오디오 설정에 따라 달라요. 자세한 내용은 [AI 상품 요금 안내](../../13-AI-Employee/ai-product-pricing-update.md)를 참고하세요.
{% endhint %}

이미지를 만들거나 분석하는 액션은 [워크플로우 액션 — AI Image Generation](workflow-action-ai-image-generation.md), [워크플로우 액션 — AI Analyze Image](workflow-action-ai-analyze-image.md) 문서를, 동영상 분석은 [워크플로우 액션 — AI Analyze Video](workflow-action-ai-analyze-video.md) 문서를 참고하세요.

---

## 자주 묻는 질문

### 연락처마다 다른 맞춤 동영상을 만들 수 있나요?
네. 프롬프트에 커스텀 값을 넣으면 연락처 정보나 워크플로우 데이터에 맞춰 동영상을 만들 수 있어요.

### 참조 이미지 없이도 동영상을 만들 수 있나요?
네. 참조 이미지는 선택 사항이에요. 텍스트 프롬프트만으로도 동영상을 만들 수 있어요.

### 동영상 길이를 바꿀 수 없어요.
참조 이미지를 추가하면 길이가 자동으로 8초로 고정돼요. 다른 길이를 고르려면 참조 이미지를 제거하세요.

### 오디오 없이 동영상을 만들 수 있나요?
네. **Generate Audio**는 기본적으로 꺼져 있고, **Additional Settings**에서 켤 수 있어요.

### 생성된 동영상은 어디에 저장되나요?
생성된 동영상은 자동으로 미디어 라이브러리에 저장되고, 공개 URL로 접근할 수 있어요.

### 액션을 테스트해도 요금이 발생하나요?
네. 테스트를 실행하면 실제 동영상이 만들어지고, 일반 워크플로우 실행과 똑같이 요금이 청구돼요.
