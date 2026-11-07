---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006832-height-width-controls-for-page-builder-elements
번역일: 2026-11-07
카테고리: 06-사이트
---

# 페이지 빌더 요소의 높이·너비 조절

하이퍼클래스 페이지 빌더에서 **Container Size**(컨테이너 크기)로 요소 하나하나의 크기를 정확하게 맞출 수 있어요. 이 문서에서는 높이와 너비를 직접 정하고, 알맞은 단위를 고르고, 데스크톱과 모바일에 서로 다른 값을 적용하는 방법을 안내해요.

## Container Size(높이·너비) 조절이란?

**Container Size**는 페이지 빌더에 기본으로 들어 있는 기능이에요. 빌더 안에서 요소의 높이와 너비를 바로 정할 수 있어요. 이 값은 요소가 상위 컨테이너(열, 행, 섹션 등) 안에서 차지하는 공간을 정해요. 레이아웃 목적에 맞는 단위를 고를 수 있고, 반응형 디자인을 위해 기기별로 값을 따로 정할 수도 있어요.

## Container Size 조절의 장점

- 정밀한 레이아웃: 요소 크기를 세밀하게 조정해 원하는 디자인을 그대로 만들 수 있어요.
- 반응형 제어: 데스크톱과 모바일에 서로 다른 값을 설정할 수 있어요.
- 단위 선택의 유연성: 여러 단위 중에서 상황에 맞는 단위를 고를 수 있어요.
- 깔끔한 작업: 별도의 CSS 코드를 쓰지 않고 화면에서 바로 원하는 결과를 얻을 수 있어요.

## 사용할 수 있는 단위

단위에 따라 크기를 계산하는 방식이 달라져요. 웹 디자인에서 흔히 쓰는 아래 단위 중에서 프로젝트에 가장 잘 맞는 것을 고르세요.

- **px**: 고정된 픽셀 수예요. 정확한 크기를 지정할 때 써요.
- **%**: 상위 컨테이너 대비 비율이에요.
- **em / rem**: 글꼴 크기를 기준으로 크기가 조정돼요.
- **vh / vw**: 화면(뷰포트) 높이 또는 너비를 기준으로 해요.
- **auto**: 브라우저가 알맞은 크기를 정해요.

## Container Size 편집하기

아래 단계를 따라 하면 몇 번의 클릭만으로 요소 크기를 정확하게 정할 수 있어요.

#### 1단계: 페이지 빌더 열기

1. **사이트 > 퍼널** 또는 **웹사이트**로 이동해 퍼널이나 웹사이트 페이지의 페이지 빌더를 열어요.
2. 사이트(퍼널)를 선택한 뒤, 수정할 페이지의 편집기를 열어요.

![사이트 메뉴에서 퍼널 또는 웹사이트를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057335850/original/s2zGduUbQCNBT1ieacpEY0RkuyiRDV5DVw.png?1761927264)

#### 2단계: 요소 선택

크기를 바꿀 요소(텍스트, 버튼, 이미지, 폼 등)를 선택해요.

![크기를 조절할 요소를 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057339590/original/UIlFnT_qkicPSf8gMhxf5mQAksMf4ICKIQ.png?1761929571)

#### 3단계: Container Size로 이동

1. 오른쪽 사이드바에서 **스타일** 탭을 선택해요.
2. **Container Size** 섹션이 나올 때까지 스크롤해요.

![오른쪽 사이드바 스타일 탭의 Container Size 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057339682/original/RpLabIm69u0sbbGlaE2p_HlSXBbOQ2hwAw.png?1761929626)

#### 4단계: 크기 설정

1. 높이와 너비 옆의 드롭다운에서 단위(px, % 등)를 선택해요.
2. 원하는 높이와 너비 값을 입력해요.

![단위를 고르고 높이와 너비 값을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057339881/original/VW84p-AZEUeFZ3ItJmPAe4aJxaRioFAKJQ.png?1761929825)

#### 5단계: 모바일에 맞게 조정

**Container Size** 옆의 기기 전환 토글을 눌러 **모바일 보기**로 바꾸세요. 필요하면 모바일 전용 값을 입력해요.

![기기 전환 토글로 모바일 보기를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057339942/original/davWxUk5djwSSjl1npdp0AwKyE7ZZorBwg.png?1761929908)

## 자주 묻는 질문

### 33.33%처럼 소수점 값을 써서 열을 똑같이 나눌 수 있나요?
네, 소수점 값도 쓸 수 있어요. 세밀하게 조정할 수 있어서 카드 3개를 33.33%씩 배치하는 것도 가능해요. 의도하지 않게 줄이 바뀌지 않는지 모바일에서도 꼭 확인해 보세요.

### 변경한 내용을 되돌리려면 어떻게 하나요?
단위를 **auto**로 설정하면 요소 본래 크기로 돌아가요.

### 모바일 값이 데스크톱에도 영향을 주나요?
아니요. **모바일 보기**에서 설정한 값은 모바일에만 적용돼요. 데스크톱 설정은 그대로 유지돼요.

### Margin과 Padding 설정도 계속 쓸 수 있나요?
네, 쓸 수 있어요. 높이·너비 조절은 설정 하나가 더해진 것이에요. **Margin**(바깥 여백), **Padding**(안쪽 여백), 높이·너비 세 가지를 함께 쓰면 레이아웃을 더 완벽하게 다룰 수 있어요.

### 너비나 높이에 음수 또는 0을 입력해도 되나요?
음수와 0은 지원하지 않아요. 0 이하의 숫자를 입력하면 요소는 현재 크기를 그대로 유지해요.
