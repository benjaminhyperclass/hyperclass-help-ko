---
원문: /support/solutions/articles/155000005542-social-planner-advanced-csv-for-bulk-scheduling
번역일: 2026-11-06
카테고리: 10-마케팅
---

# 소셜 플래너 고급 CSV로 게시물 일괄 예약하기

하이퍼클래스 **소셜 플래너**의 고급 CSV 일괄 예약을 쓰면 소셜 미디어 게시물 여러 개를 한 번에 예약할 수 있어요. CSV 또는 XLSX 파일을 업로드해서 게시물, 미디어, 게시 일시, 플랫폼별 설정을 한꺼번에 정리해요.

이 문서에서는 파일을 준비하는 방법, 게시물을 가져오는 순서, 자주 생기는 예약 오류를 해결하는 방법을 안내해요.

{% hint style="info" %}
일괄 예약용 CSV 업로드 옵션은 「CSV 일괄 예약 사전 준비 - 기본 및 고급 CSV」 문서를 참고하세요.
{% endhint %}

---

## 소셜 플래너의 고급 CSV 일괄 예약이란?

고급 CSV 일괄 예약은 스프레드시트 하나로 소셜 미디어 게시물 여러 개를 만들고 예약하는 기능이에요. 기본 CSV 형식과 비교하면 고급 CSV에서는 다음 옵션을 더 쓸 수 있어요.

- 플랫폼별 게시물 유형
- 동영상 썸네일
- 워터마크
- 태그와 카테고리
- 승인 워크플로우

---

## 고급 CSV 일괄 예약의 장점

- 플랫폼 전반에 일괄 예약: 게시물, 스토리, 릴스, 쇼츠 등을 여러 채널에 한 번에 예약할 수 있어요.
- 워터마크 자동화: 미디어에 워터마크를 자동으로 넣어 일관된 브랜드 이미지를 유지해요.
- 스마트 미디어 최적화: 이미지와 동영상이 각 플랫폼 요구 사항에 맞게 자동으로 최적화돼요.
- 태그·카테고리 지정: 게시물에 태그와 카테고리를 붙여 리포팅과 자동화 트리거에 활용할 수 있어요.
- 유연한 날짜·시간 인식: 여러 날짜·시간 형식을 지원해서 가져오기 오류가 줄어요.
- 두 가지 파일 형식 지원: .csv와 .xlsx 파일을 모두 올릴 수 있어요.
- 성능 개선: 작업 속도가 빨라지고, 가져오기가 더 매끄러워지고, 오류 처리도 나아졌어요.
- 첫 댓글 및 후속 댓글: 게시물에 첫 댓글을 달아 참여를 높일 수 있어요.
- 폭넓은 플랫폼 지원: Google Business Profile, YouTube, TikTok 등을 플랫폼별 필드로 설정할 수 있어요.

---

## 시작하기 전에

고급 CSV 템플릿을 정확히 준비하면 가져오기 오류를 막고 게시물을 의도한 대로 예약할 수 있어요.

- 소셜 계정 연결: 게시할 계정이 **마케팅 > 소셜 플래너**에 연결되어 있는지 확인하세요.
- 템플릿 다운로드: 필수 열 이름이 그대로 유지되도록 최신 고급 CSV 템플릿을 사용하세요.
- 미디어 URL 준비: 하이퍼클래스 **미디어 라이브러리**에 미디어를 업로드하고, 접근할 수 있는 URL을 사용하세요. CSV 미디어 가져오기에서는 Google Drive 링크를 지원하지 않아요.
- 예약 날짜 형식: `2026-11-10 14:30`처럼 지원되는 24시간제 날짜·시간 형식을 사용하세요.
- 예약 시간 여유: 게시 시간은 가져오기가 끝날 것으로 예상되는 시각보다 10분 이상 뒤로 설정하세요.
- 플랫폼 요구 사항 확인: 캡션과 미디어가 선택한 소셜 플랫폼의 제한 사항을 충족하는지 확인하세요.

---

## 고급 CSV로 일괄 예약하는 순서

고급 CSV 가져오기 도구에서는 콘텐츠 업로드, 게시 대상 선택, 오류 검토, 여러 게시물 예약을 한 흐름으로 처리해요.

### 1단계: 소셜 플래너로 이동하기

1. 계정에서 **마케팅**으로 이동하세요.
2. **소셜 플래너** 탭을 클릭하세요.
3. 사용할 소셜 계정을 연결하세요.

![소셜 플래너 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155085058138/original/VHMOGfrUQc0iaVwoPBdhBW7jQ9nFLftgsg.png?1793892082)

### 2단계: 새 일괄 업로드 시작하기

1. **+ New Post**(새 게시물) 버튼을 클릭하세요.
2. 드롭다운에서 **CSV에서 업로드**를 선택하세요.

![CSV에서 업로드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155085058309/original/KohZpiBywOnrDXUdWnInflufryBLIENt7g.gif?1793892150)

### 3단계: CSV 파일 업로드하기

1. 모든 향상된 기능을 쓰려면 **고급 형식**을 선택하세요.
2. 작성한 .csv 또는 .xlsx 파일을 **업로드**하세요.
3. **다음**을 클릭하세요.

{% hint style="info" %}
고급·기본 CSV 템플릿 샘플을 내려받을 수 있어요. 최신 템플릿에는 동영상 썸네일용 thumbnailUrl 열이 들어 있어요.
{% endhint %}

![CSV 파일 업로드 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155085058337/original/3eFz9E_76cmetiNgMeDZKwWxyQqYe6LJ6w.png?1793892181)

### 4단계: 소셜 계정과 승인 설정 선택하기

1. 게시할 소셜 **채널**을 선택하세요.
2. 게시물에 승인이 필요하면 **승인 요청 보내기**를 켜고 승인자를 선택하세요.
3. **만들기**를 클릭하세요.

![소셜 계정과 승인 설정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155085058456/original/gfoW-i1DP5BP1aQuEtxL7KMj_MHnn2O3Ew.png?1793892233)

### 5단계: 오류 검토하고 수정하기

1. 시스템이 문제가 있는 항목을 표시해 줘요.
2. 다음 단계로 넘어가기 전에 해당 항목을 검토하고 수정하세요.

![오류 검토 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155085058586/original/TfZIdvR7_eXjANKe-vK50myC0tvAzDQhrA.png?1793892299)

### 6단계: 예약하고 가져오기

1. **일정**을 클릭하세요.
2. **가져오기**를 클릭하면 승인된 게시물이 모두 캘린더 대기열에 추가돼요.

![일정과 가져오기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155085058630/original/D6vbEsUsAtH3_3BjMH7h6_Qhbbgvb17dEw.png?1793892327)

---

## 플랫폼별 미디어 지원 (이미지, 릴스, 동영상)

고급 CSV 일괄 예약에서는 Facebook, Instagram, Google My Business, LinkedIn 등 여러 소셜 미디어 플랫폼에 게시물을 예약할 수 있어요. 미디어 지원 범위는 플랫폼마다 달라요. 게시물이 제대로 예약되도록 아래 안내를 따르세요.

아래 스크린샷에 표시된 위치에서 이 스프레드시트의 샘플을 받을 수 있어요.

![스프레드시트 샘플 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064584491/original/_VllGVchUAOJG1fnH-tDe2MsSpYZozTnmw.png?1770727501)

---

## 이미지 지원

### 1. Facebook과 Instagram

- 이미지 캐러셀을 지원해요.
- 스프레드시트에 이미지 URL을 여러 개 넣을 수 있어요.
- 이미지 URL이 여러 개일 때는 쉼표로 구분해야 해요.
- 예시:

  ![이미지 URL 여러 개 입력 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064585354/original/9TjQqhcUi-aGV54J7MYjvT3lueC6sutfJQ.png?1770728035)

### 2. Google My Business

- 게시물 하나에 이미지 한 장만 지원해요.
- 이미지 캐러셀은 지원하지 않아요.

---

## 릴스와 동영상 지원

- 게시물 하나에 동영상 또는 릴스를 하나만 올릴 수 있어요.
- 릴스나 동영상에는 캐러셀을 지원하지 않아요.
- 동영상 URL을 여러 개 넣으면 게시물 예약에 실패할 수 있어요.
- CSV/XLSX 파일의 thumbnailUrl 필드로 동영상 게시물의 썸네일을 직접 지정할 수 있어요.
- 썸네일은 게시물의 첫 번째 동영상에 자동으로 적용돼요.
- 동영상 썸네일을 여러 개 지정하는 것은 지원하지 않으며, 동작은 소셜 플랫폼마다 다를 수 있어요.

  ![동영상 썸네일 지정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064585853/original/1ejmO7onesMJtKRGRvP5o7GBBGNvasg8zg.png?1770728323)

---

## CSV 가져오기 후 이미지 업로드·수정하기

스프레드시트에 미디어 URL을 넣는 방법 외에, 예약 과정에서 이미지를 올리거나 바꿀 수도 있어요.

세 번째 검토 화면에서 다음 작업을 할 수 있어요.

- 새 이미지 추가
- 기존 이미지 수정
- 이미지 추가 업로드 (플랫폼에서 지원하는 경우)

미디어 URL을 CSV 파일에 모두 넣고 싶지 않다면 이 방법을 쓰세요.

![세 번째 검토 화면에서 이미지 추가·수정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064588185/original/tzY2qCi_8-7l11PaomurmgA8KRXBGGZ6IQ.png?1770729551)

{% hint style="warning" %}
Facebook(캐러셀에 이미지를 여러 장 지원)과 GMB(피드당 이미지 1장만 지원)를 함께 선택하면, 선택한 첫 번째 이미지는 GMB에 게시되고 모든 이미지는 Facebook에 게시돼요.

![Facebook과 GMB를 함께 선택한 경우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064587871/original/yZmKPX58TX5s9bTJOGnTyDkiQ0YSxiAdzA.png?1770729393)
{% endhint %}

---

## 워터마크 지원

CSV에 워터마크 필드를 지정하면 이미지와 동영상에 워터마크가 자동으로 적용돼요. 직접 편집하지 않아도 모든 게시물에 일관된 브랜딩을 유지할 수 있어요.

- CSV의 지정된 열에 워터마크 파일 경로나 설정을 입력하세요.
- 워터마크는 가져오는 중에 지원되는 모든 플랫폼에 적용돼요.

---

## 스마트 미디어 최적화

미디어 파일은 각 플랫폼 요구 사항에 맞게 자동으로 최적화돼요. 콘텐츠가 보기 좋게 표시되고 기술 사양도 충족해요.

- 이미지와 동영상은 필요에 따라 크기 조정, 압축 또는 형식 변환이 이루어져요.
- 플랫폼별 미디어 설정은 CSV 템플릿에서 지정할 수 있어요.

---

## 태그·카테고리 지정

CSV에서 게시물마다 태그와 카테고리를 바로 지정할 수 있어요. 리포팅, 자동화, 정리가 쉬워져요.

- 템플릿의 해당 열에 태그나 카테고리를 여러 개 입력할 수 있어요.
- 스냅샷이나 템플릿에서 새 로케이션으로 가져올 때는 태그와 카테고리가 이전되지 않아요.

{% hint style="info" %}
스냅샷이나 템플릿에서 새 로케이션으로 가져올 때는 태그와 카테고리가 이전되지 않아요.
{% endhint %}

---

## 유연한 날짜·시간 인식

CSV에 지원되는 날짜·시간 형식 중 아무거나 써도 돼요. 가져오기 오류를 줄일 수 있어요. 시스템은 다음을 비롯한 다양한 형식을 인식하고 처리해요.
`YYYY-MM-DD HH:mm``YYYY-MM-DD HH:mm:ss``YYYY/MM/DD HH:mm:ss``YYYY/MM/DD HH:mm``MM/DD/YYYY H:mm:ss``MM-DD-YYYY H:mm:ss``MM/DD/YYYY H:mm``MM-DD-YYYY H:mm`

---

## 고급 CSV 기능과 미디어 지원

고급 CSV 템플릿에는 지원되는 소셜 플랫폼에서 게시물을 세부 설정할 수 있는 필드가 더 들어 있어요.

사용할 수 있는 설정과 미디어 제한은 선택한 플랫폼과 게시물 유형에 따라 달라요.

| 기능 | 설명 |
| --- | --- |
| 게시물 유형 | 지원되는 피드 게시물, 스토리, 릴스, 쇼츠를 설정해요. |
| 이미지 | 이미지 URL을 추가해요. 캐러셀을 지원하는 곳에서는 여러 장도 넣을 수 있어요. |`thumbnailUrl`을 사용해요. 썸네일은 첫 번째 동영상에 적용돼요. |
| 미디어 최적화 | `mediaOptimization`을 사용해 지원되는 미디어 조정을 요청해요. |
| 워터마크 | `applyWatermark`를 사용해 설정해 둔 워터마크를 지원되는 이미지 게시물에 적용해요. |
| 태그와 카테고리 | 템플릿의 해당 열로 가져온 게시물을 정리해요. |
| 후속 댓글 | 지원되는 플랫폼에서 첫 댓글을 추가해요. |
| 플랫폼 설정 | Google Business Profile, YouTube, TikTok, Pinterest 등 지원되는 채널의 사용 가능한 옵션을 설정해요. |

{% hint style="warning" %}
미디어 최적화를 해도 지원되지 않는 모든 파일이나 게시물 형식을 게시할 수 있는 것은 아니에요. 가져오기 전에 플랫폼 요구 사항을 확인하세요.
{% endhint %}

---

## 자주 묻는 질문

### 일괄 예약에 .csv와 .xlsx 파일을 모두 쓸 수 있나요?
네, 고급 CSV 업로드에는 두 파일 형식을 모두 지원해요.

### CSV 가져오기에서 Google Drive 링크를 쓸 수 없는 이유가 뭔가요?
Google의 최근 변경으로 CSV를 가져올 때 Google Drive 링크를 더는 처리할 수 없어요. 원활하게 업로드하려면 미디어 파일을 **미디어 라이브러리**에 직접 업로드한 뒤, CSV 파일에 그 **미디어 라이브러리** 링크를 넣으세요.

### CSV로 한 번에 예약할 수 있는 게시물 수는 몇 개인가요?
CSV 하나에 90개까지 넣을 수 있어요. 이 수를 게시할 모든 소셜 채널에 나눠서 배분해야 해요.

### 스냅샷을 통해 새 로케이션으로 태그와 카테고리를 가져올 수 있나요?
스냅샷이나 템플릿에서 CSV를 가져올 때는 태그와 카테고리가 새 로케이션으로 이전되지 않아요.

### CSV에 오류나 잘못된 데이터가 있으면 어떻게 되나요?
시스템이 검토 단계에서 오류를 표시해 줘요. 가져오기 전에 반드시 수정해야 해요.

### 워터마크는 모든 미디어 유형에 적용되나요?
CSV에 지정한 대로, 지원되는 이미지와 동영상 형식에 워터마크가 적용돼요.

### 스냅샷이나 템플릿에서 CSV를 가져오면 태그와 카테고리도 이전되나요?
아니요. 스냅샷이나 템플릿에서 새 로케이션으로 가져올 때는 태그와 카테고리가 이전되지 않아요.

### 지원되는 모든 플랫폼에 한 번의 CSV 업로드로 예약할 수 있나요?
네, 스토리, 릴스, 쇼츠, Google Business Profile, TikTok, Pinterest 등 여러 플랫폼에 한 번에 예약할 수 있어요.

### CSV에서 Pinterest 보드는 어떻게 지정하나요?
현재는 지원하지 않아요.

### 게시물에 첫 댓글을 달려면 어떻게 하나요?
고급 CSV 템플릿의 해당 필드에 댓글 내용을 입력하세요.

### 한 번에 예약할 수 있는 게시물 수에 제한이 있나요?
엄격한 제한은 없어요. 다만 파일이 매우 크면 처리하는 데 시간이 더 걸릴 수 있어요.
