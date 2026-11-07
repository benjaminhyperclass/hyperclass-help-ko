---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005411-prerequisite-for-bulk-csv-basic-and-advance-csv
번역일: 2026-11-06
카테고리: 10-마케팅
---

# 대량 CSV 업로드 전 준비 사항 - 기본 CSV와 고급 CSV

CSV 파일로 소셜 미디어 게시물을 한꺼번에 예약할 때 각 열에 무엇을 어떤 형식으로 입력해야 하는지 정리했어요. 업로드 전에 파일을 준비할 때 참고하세요.

CSV는 "쉼표로 구분된 값(comma-separated values)" 파일이에요. 정보를 정해진 구조로 저장할 수 있어서, 게시 일정을 미리 짜 두는 데 시간을 아낄 수 있어요. **소셜 플래너**(Social Planner)는 .csv와 .xlsx 형식을 모두 지원해요.

**소셜 플래너**에서는 대량 예약용 CSV 업로드 방식을 두 가지 제공해요.

1. 기본 CSV(Basic CSV): 날짜, 콘텐츠, OG 메타 URL, 이미지 링크, 동영상 링크, GIF를 지원해요.

   [BASIC 샘플 CSV 다운로드](https://storage.googleapis.com/highlevel-staging.appspot.com/social-media-posting/CSV%20Import%20Sample%20-%20CSV%20Import%20Sample.csv)

2. 고급 CSV(Advance CSV): 기본 CSV보다 더 많은 기능을 쓸 수 있어요. 지원하는 기능은 다음과 같아요.
   - 플랫폼별 게시물 유형(게시물, 스토리, 릴스, 쇼츠)
   - 워터마크, 태그, 카테고리, 후속 댓글
   - Google Business Profile(게시물 유형, 행동 유도, 이벤트, 오퍼)
   - YouTube(제목, 공개 범위, 동영상 유형)
   - TikTok, LinkedIn PDF, Pinterest 보드 선택 등

   [Advance 샘플 CSV 다운로드](https://storage.cloud.google.com/highlevel-staging.appspot.com/social-media-posting/advance-sample.csv)

{% hint style="info" %}
제목에 [고급 전용]이라고 되어 있으면 고급 CSV에서만 쓰는 열이에요. [기본·고급 공통]이라고 되어 있으면 기본 CSV와 고급 CSV 모두에서 쓰는 열이에요.
{% endhint %}

**소셜 플래너**는 아래 규칙을 따라요.

### 1. 날짜 및 시간 열 [기본·고급 공통]

이 열에는 게시물을 공유할 날짜와 시간을 입력해요. 열 맨 위에 보이는 형식과 똑같이 입력해야 해요.

- 24시간 형식으로 입력해요. 예: 2025-08-25 21:30
- 날짜 열이 비어 있으면 임시 저장(Draft) 상태로 처리돼요.
- 이 열의 머리글은 샘플 CSV에 있는 그대로 써야 해요. 다음과 같아요: `postAtSpecificTime YYYY-MM-DD HH:mm`, `YYYY-MM-DD HH:mm:ss`, `YYYY/MM/DD HH:mm:ss`, `YYYY/MM/DD HH:mm`, `M/D/YYYY H:mm:ss`, `M/D/YYYY H:mm`
- 예약 시간은 CSV를 업로드하는 시각보다 최소 10분 뒤로 잡기를 강력히 권장해요. 예를 들어 게시물 예약 일시가 2023-10-14 15:00이면, CSV는 2023년 10월 14일 오후 2시 50분까지 업로드해야 해요.

{% hint style="info" %}
예약 시간은 12시간 형식이 아니라 24시간 형식으로 입력해요. 변환이 어렵다면 [이 도구](https://www.ontheclock.com/convert-military-24-hour-time.aspx)를 써 보세요.
{% endhint %}

### 2. 콘텐츠 열 [기본·고급 공통]

게시물 캡션으로 보여 줄 내용을 입력하거나 붙여 넣어요. 해시태그도 넣을 수 있어요. 이 열의 머리글은 `content`로 써요.

캡션은 예약하려는 소셜 미디어의 글자 수 제한을 지켜야 해요.

{% hint style="info" %}
캡션은 선택한 모든 채널에 똑같이 공유되고, 그중 글자 수 제한이 가장 낮은 채널에 맞춰 잘려요. 예를 들어 Threads를 선택하면 500자, Bluesky를 선택하면 300자까지예요. 제한을 넘는 글자는 가져올 때 잘려요. 제한이 낮은 채널은 별도의 CSV로 가져오면 다른 채널에서 캡션 전체를 유지할 수 있어요.
{% endhint %}

### 3. 미리보기 링크 열 [기본·고급 공통]

게시물의 링크 미리보기로 보여 줄 URL을 입력하거나 붙여 넣어요. 이 열의 머리글은 `link (OGmetaUrl)`로 써요.

{% hint style="info" %}
이미지, GIF, 동영상 같은 다른 미디어 열이 채워져 있으면 `link(OGmetaUrl)`보다 그쪽이 우선 적용돼요. 이 링크는 content 열에 링크 형태로 덧붙여져요.
{% endhint %}

### 4. 이미지 URL 열 [기본·고급 공통]

게시물에 넣을 이미지의 URL을 붙여 넣어요. 머리글은 `imageUrls`로 써요. 이미지 URL을 여러 개 넣으려면 쉼표로 구분해요. 이미지 링크는 png, jpeg/jpg 등 올바른 형식이어야 하고, 그 밖의 조건도 각 소셜 미디어 플랫폼이 지원하는 기준에 맞아야 해요. 이미지는 최대 10개까지 넣을 수 있어요.

{% hint style="info" %}
플랫폼별 이미지 크기와 용량은 [여기](../../26-산업-가이드/기타/posting-content-image-video-and-text-guidelines.md)에서 확인하세요. 같은 문서가 동영상과 GIF에도 적용돼요.
{% endhint %}

### 5. GIF URL 열 [기본·고급 공통]

게시물에 넣을 GIF의 URL을 붙여 넣어요. 머리글은 `gifUrl`로 써요.

{% hint style="info" %}
링크를 [여기](../../26-산업-가이드/기타/posting-content-image-video-and-text-guidelines.md)에 추가했다면 다른 미디어 관련 열(예: link, imageUrls, videoUrls)은 입력하면 안 돼요.
{% endhint %}

### 6. 동영상 URL 열 [기본·고급 공통]

게시물에 넣을 동영상의 URL을 붙여 넣어요. 머리글은 `videoUrls`로 써요. 동영상 URL을 여러 개 넣으려면 쉼표로 구분해요. 게시물 하나에 한 번에 넣을 수 있는 동영상은 최대 10개예요.

{% hint style="info" %}
링크를 [여기](../../26-산업-가이드/기타/posting-content-image-video-and-text-guidelines.md)에 추가했다면 다른 미디어 관련 열은 입력하면 안 돼요.
{% endhint %}

#### 썸네일 URL 열 [기본·고급 공통]

CSV/XLSX로 가져오는 동영상 게시물에 사용자 지정 썸네일을 설정할 때 써요.

- 열 머리글: `thumbnailUrl`
- 동작: 썸네일은 게시물의 첫 번째 동영상에 자동으로 적용돼요.
- 제한: 동영상 여러 개에 각각 썸네일을 지정할 수는 없어요. 플랫폼에 따라 동작이 다를 수 있어요.

### 7. 미디어 최적화 열 [고급 전용]

미디어를 최적화하려면 이 열에 True 또는 False를 입력해요. 최적화를 켜면 크기나 형식 오류가 자동으로 해결돼요. 예를 들어 Instagram 스토리에 .mov 파일이 필요한데 .mp4 파일을 올렸다면, 최적화가 .mov 파일로 변환해 줘요. 이 열의 머리글은 `mediaOptimization (true/false)`로 써요.

### 8. 워터마크 열 [고급 전용]

미디어에 워터마크를 넣으려면 이 열에 True 또는 False를 입력해요. 머리글은 `applyWatermark (true/false)`로 써요.

### 9. 태그 열 [고급 전용]

게시물을 정리하기 위해 태그를 여러 개 추가할 수 있어요. 이전에 추가하지 않은 태그는 필터와 드롭다운에 새 항목으로 생겨요. 태그는 쉼표로 구분해서 입력해야 인식돼요. 머리글은 `tags (comma-separated)`로 써요.

### 10. 카테고리 열 [고급 전용]

게시물을 정리하기 위해 카테고리를 추가할 수 있어요. 이전에 추가하지 않은 카테고리는 필터와 드롭다운에 새 항목으로 생겨요. 머리글은 `Category`로 써요.

### 11. 후속 댓글 열 [고급 전용]

게시물에 참여를 유도하는 첫 댓글을 후속 댓글로 추가할 수 있어요. 후속 댓글은 다음 채널에서 지원해요.

- Facebook 페이지
- Instagram **비즈니스 계정**
- LinkedIn **프로필 및 페이지**
- YouTube **비디오 및 쇼츠**
- Threads
- 하이퍼클래스 커뮤니티

머리글은 `followUpComment`로 써요.

### 12. Facebook 유형 열 [고급 전용]

Facebook에 올릴 게시물 유형(게시물, 스토리, 릴스)을 입력해요. 머리글은 `type (post/story/reel)`로 써요.

### 13. Instagram 유형 열 [고급 전용]

Instagram에 올릴 게시물 유형(게시물, 스토리, 릴스)을 입력해요. 머리글은 `type (post/story/reel)`로 써요.

### 14. LinkedIn - pdfTitle, postAsPdf 열 [고급 전용]

LinkedIn에 PDF 형식으로 게시하려면 PDF 제목을 입력해요. 이미지가 아니라 PDF로 게시할지는 true 또는 false로 입력해요. 머리글은 `pdfTitle and postAsPdf (true/false)`로 써요.

### 15. Google Business Profile 열 [고급 전용]

Google Business Profile 옵션(행동 유도/이벤트/오퍼)을 입력해요. 선택한 유형에 따라 입력할 열이 달라져요. 머리글은 다음과 같이 써요.

`eventType (call_to_action/event/offer)`, `actionType (none/order/book/shop/learn_more/call/sign_up)`, `title`, `offerTitle`, `startDate (YYYY-MM-DD HH:mm:ss)`, `endDate (YYYY-MM-DD HH:mm:ss)`, `termsConditions`, `couponCode`, `redeemOnlineUrl`, `actionUrl`

아래 표에서 "예"는 해당 열을 입력한다는 뜻이에요.

| | 버튼(actionType) | 액션 URL(actionUrl) | 제목(title) | 오퍼 제목(offerTitle) | 시작일(startDate) | 종료일(endDate) | 약관(termsConditions) | 쿠폰 코드(couponCode) | 온라인 사용 URL(redeemOnlineUrl) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 행동 유도(call_to_action) | 예 | 예 | 아니요 | 아니요 | 아니요 | 아니요 | 아니요 | 아니요 | 아니요 |
| 이벤트(event) | 예 | 예 | 예 | 아니요 | 예 | 예 | 아니요 | 아니요 | 아니요 |
| 오퍼(offer) | 아니요 | 아니요 | 아니요 | 예 | 예 | 예 | 예 | 예 | 예 |

### 16. YouTube 열 [고급 전용]

**Youtube 옵션**으로 제목, 공개 범위(비공개, 공개, 일부 공개), 유형(동영상 또는 쇼츠)을 입력해요. 머리글은 다음과 같이 써요.

`title`, `privacyLevel (private/public/unlisted)`, `type (video/short)`

### 17. TikTok 열 [고급 전용]

TikTok 옵션으로 공개 범위, 다른 브랜드 홍보, 댓글 허용, 듀엣, 스티치, 동영상 공개 고지, 내 브랜드 홍보를 입력해요. 머리글은 다음과 같이 써요.

`privacyLevel(everyone/friends/only_me)`, `promoteOtherBrand(true/false)`, `enableComment(true/false)`, `enableDuet(true/false)`, `enableStitch(true/false)`, `videoDisclosure(true/false)`, `promoteYourBrand (true/false)`

### 18. 커뮤니티 열 [고급 전용]

커뮤니티 옵션으로 제목과 모든 그룹 멤버에게 알림 여부(true/false)를 입력해요. 머리글은 다음과 같이 써요.

`title`, `notifyAllGroupMembers (true/false)`

### 19. Pinterest 열 [고급 전용]

Pinterest 옵션으로 제목과 링크를 입력해요. 머리글은 다음과 같이 써요.

`title`, `link`

{% hint style="info" %}
**소셜 플래너 설정**에서 **Default Pinterest Board**(기본 Pinterest 보드)를 지정할 수 있어요.
{% endhint %}
