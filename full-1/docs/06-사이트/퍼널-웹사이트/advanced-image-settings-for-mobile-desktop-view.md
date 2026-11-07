---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004170-advanced-image-settings-for-mobile-desktop-view
번역일: 2026-11-07
카테고리: 06-사이트
---

# 모바일·데스크톱 화면별 이미지 크기 설정

모바일과 데스크톱 화면에서 이미지 크기를 따로 정할 수 있어요. 웹사이트와 퍼널이 어느 기기에서든 보기 좋게 보이고, 사용자 경험과 SEO 성능도 좋아져요.

[동영상](https://www.youtube.com/embed/GyiX2oz8NhM?&wmode=opaque)

## 이미지 크기 설정이란?

모바일 화면과 데스크톱 화면의 이미지 크기를 각각 따로 조정하는 기능이에요. 모바일 레이아웃에서도 이미지의 높이와 너비를 직접 정할 수 있어서, 기기가 달라도 이미지가 선명하고 일관되게 보여요.

크기 단위는 픽셀(px), 상대 단위(rem, em), 퍼센트(%)를 쓸 수 있어요. 디자인에 맞게 골라 쓰세요.

![이미지 크기 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036519011/original/Fw_AGG2kNN2LPHEKEgvOEE3CKdyB5lGA4w.png?1731521787)

## 이미지 크기 설정이 중요한 이유

- 반응형 개선: 화면 크기가 달라도 이미지가 자연스럽게 맞춰져서 사용자 경험이 좋아져요.
- SEO 성능 향상: 모바일과 데스크톱에 맞게 이미지 크기를 최적화하면 CLS(누적 레이아웃 이동)와 PageSpeed 점수를 높일 수 있어요. 두 점수는 검색 순위에 영향을 주는 중요한 요소예요.
- 디자인 유연성: 여러 단위로 이미지 크기를 정할 수 있어서 원하는 디자인에 맞추기 쉬워요.

![이미지 크기를 조정하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036522118/original/4gvW-DTjpKeyfelXPRYAjYoDf7m2daJyGg.gif?1731528106)

## 이미지 크기 설정 방법

### 1단계: 퍼널 또는 웹사이트 빌더 열기

1. 하이퍼클래스에서 퍼널 또는 **웹사이트 빌더**를 엽니다.
2. 수정할 이미지가 있는 페이지를 선택합니다.

![페이지 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036522024/original/_yJSt6r2LbKKBCJItTGRMW7s8xKMvW7xiA.gif?1731527921)

### 2단계: 이미지 설정 열기

1. 이미지를 클릭해 설정 패널을 엽니다.
2. 미리보기 전환 버튼으로 **모바일 보기** 또는 **Desktop View**(데스크톱 보기)로 바꿉니다.

![모바일 보기와 데스크톱 보기 전환](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036522139/original/ZoCb_dGQ7VfmJj0i79UEL9p8oW-5Z23vqg.gif?1731528122)

### 3단계: 이미지 크기 조정

1. 이미지 설정 패널에서 **높이**와 **너비** 필드를 찾습니다.
2. 원하는 값을 입력합니다.
3. 사용할 단위를 선택합니다.
   - **px**: 고정된 픽셀 크기
   - **rem** 또는 **em**: 글꼴 크기를 기준으로 늘고 줄어드는 크기
   - **%**: 이미지를 담고 있는 영역의 크기를 기준으로 한 비율

{% hint style="info" %}
모바일과 데스크톱의 이미지 크기를 다르게 하려면 빌더 상단의 보기 전환 버튼으로 화면을 바꿔 가며 설정하세요. 높이와 너비는 각 보기에서 따로 입력해야 해요. **모바일 보기**에서 바꾼 값은 모바일에만, **Desktop View**에서 바꾼 값은 데스크톱에만 적용돼요. 그래서 기기마다 이미지 크기를 따로 최적화할 수 있어요.
{% endhint %}

![높이와 너비 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036522145/original/R6R2YzRqEKgMNZt-wkUrldMY9jiPb1FU4A.png?1731528139)

### 4단계: 저장하고 미리보기

1. **변경사항 저장**을 클릭합니다.
2. 모바일과 데스크톱 화면에서 모두 미리보기를 해서 화면에 맞게 보이는지 확인합니다.

## 자주 묻는 질문

### 모바일 크기를 따로 정하지 않으면 어떻게 되나요?
모바일 크기를 정하지 않으면 데스크톱 크기가 그대로 적용돼요. 작은 화면에는 맞지 않을 수 있어요.

### 이미지 크기 단위는 어떤 걸 고르는 게 좋나요?
- 정확하게 고정된 크기가 필요하면 px를 쓰세요.
- 텍스트 크기에 맞춰 늘고 줄어드는 디자인이면 rem 또는 em을 쓰세요.
- 이미지를 담고 있는 영역의 크기에 맞춰 달라지게 하려면 %를 쓰세요.

### 높이와 너비에 서로 다른 단위를 쓸 수 있나요?
네, 높이와 너비에 단위를 섞어 쓸 수 있어요. 예를 들어 디자인에 따라 높이는 픽셀(px), 너비는 퍼센트(%)로 정할 수 있어요.

### 이 기능이 기존 이미지에도 영향을 주나요?
아니요. 직접 바꾸지 않으면 기존 이미지는 현재 크기를 그대로 유지해요. 필요한 이미지만 골라서 크기를 조정할 수 있어요.

### 변경한 뒤 CLS와 PageSpeed 개선 효과를 확인할 수 있나요?
네, Google PageSpeed Insights나 Lighthouse 같은 도구로 CLS와 PageSpeed 점수를 측정하면 최적화 효과를 확인할 수 있어요.

### 모든 하이퍼클래스 사용자가 이 기능을 쓸 수 있나요?
네, 퍼널 또는 **웹사이트 빌더**를 사용할 수 있는 모든 하이퍼클래스 계정에서 쓸 수 있어요.
