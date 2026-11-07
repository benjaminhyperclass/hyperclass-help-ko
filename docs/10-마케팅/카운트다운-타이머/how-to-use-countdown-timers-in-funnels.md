---
원문: /support/solutions/articles/155000003122-how-to-use-countdown-timers-in-funnels-
번역일: 2026-11-06
카테고리: 10-마케팅
---

# 퍼널에서 카운트다운 타이머 사용하기

카운트다운 타이머는 마감 시각까지 남은 시간을 보여 주어 방문자가 행동하도록 유도해요. 플래시 세일, 기간 한정 오퍼, 이벤트 등록 페이지에 잘 어울려요. 하이퍼클래스에서 타이머를 직접 디자인해 퍼널이나 웹사이트에 쉽게 추가할 수 있어요.

## 카운트다운 타이머란?

카운트다운 타이머는 특정 이벤트나 마감까지 남은 시간을 눈에 보이게 알려 주는 요소예요. 하이퍼클래스에서는 타이머를 여러 사이트에서 다시 쓸 수 있고, 브랜드에 맞게 꾸밀 수 있어요. 목표에 따라 동작 방식도 설정할 수 있어요. 출시 기간의 긴박감을 높이거나, 오퍼 만료를 알리거나, 이벤트 등록을 유도할 때 활용해 보세요.

## 카운트다운 타이머의 장점

- 긴박감과 희소성: 실시간으로 줄어드는 시간을 보여 주어 바로 행동하도록 유도해요.
- 다양한 타이머 유형: **Fixed**(고정), **Recurring**(반복), **Dynamic**(동적) 타이머로 여러 캠페인 방식에 대응할 수 있어요.
- 재사용 가능한 디자인: 한 번 만든 타이머를 다시 만들 필요 없이 여러 페이지와 퍼널에서 쓸 수 있어요.
- 스타일 조정: 글꼴, 크기, 색상, 표시할 시간 단위를 브랜드에 맞게 바꿀 수 있어요.

## 카운트다운 타이머 만들기

퍼널에 넣기 전에 먼저 **마케팅** 메뉴에서 타이머를 만들어 두세요.

1. **마케팅 > 카운트다운 타이머**로 이동해요. 파란색 **+ 신규** 버튼을 눌러 새 카운트다운 타이머를 만들어요.

   ![카운트다운 타이머 화면에서 새 타이머를 만드는 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047685542/original/uIc7oQLLEHuYh1gYwzW-iiHDwYTDmXBHiQ.jpeg?1748969391)
2. 카운트다운 타이머 템플릿을 고르고 **Continue with Template**(템플릿으로 계속)을 눌러요.

   ![카운트다운 타이머 템플릿 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047685558/original/tASA6958sBULL4WOCdoC7HjQawLZSnNNVQ.jpeg?1748969410)
3. 왼쪽 위의 **일반** 탭에서 **Timer Type**(타이머 유형)을 골라요.

   - **Fixed**: 특정 날짜와 시간에 끝나요.
   - **Recurring**: 정해진 간격(예: 매일, 매주)마다 다시 시작해요.
   - **Dynamic**: 연락처의 반응에 따라 달라져요. 이메일에 쓰기 좋아요.
4. **종료일**을 설정하고 **시간대**를 선택한 다음 **리다이렉트 URL**을 입력해요.

   **Adapt to Contact Time Zone**(연락처 시간대에 맞추기)을 켜면 방문자의 시간대에 맞춰 시간대가 바뀌어요. 자세한 내용은 "Timezone Adaptation in Countdown Timers" 문서를 참고하세요.

   ![일반 탭에서 종료일, 시간대, 리다이렉트 URL을 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071182220/original/uvqLAKay8kSgMmy2bV-dp0nEwLQuecIziA.png?1778615456)
5. 왼쪽의 **스타일** 탭에서 표시할 시간 단위(예: 시간, 분, 초)를 켜거나 끄세요. 스타일 설정으로 타이머의 글꼴, 크기, 색상도 바꿀 수 있어요.

   ![스타일 탭에서 시간 단위와 글꼴, 크기, 색상을 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047685687/original/6wdIaZzsKVgWQki4i9uFOTwrvx8Oi7kejA.jpeg?1748969612)

## 퍼널에 카운트다운 타이머 추가하기

퍼널에 타이머를 넣는 방법은 두 가지예요. 카운트다운 타이머 요소를 쓰는 방법과 코드 요소를 쓰는 방법이에요. 카운트다운 타이머 요소는 하이퍼클래스 안에서 드래그 앤 드롭으로 빠르게 넣기에 좋아요. 코드 요소를 쓰는 방법은 외부 플랫폼에 넣을 때 알맞아요.

### 카운트다운 타이머 요소로 추가하기

하이퍼클래스의 드래그 앤 드롭 퍼널 편집기 안에서 모든 작업을 하는 경우에 알맞아요.

1. **사이트 > 퍼널**로 이동해요.
2. 원하는 사이트를 선택하고, 수정할 퍼널 단계에서 **Edit Page**(페이지 편집)를 눌러요.
3. 빌더 왼쪽 위의 플러스(+) 아이콘을 눌러 **Add Element**(요소 추가) 패널을 열어요. 그다음 **카운트다운 타이머** 요소를 선택해요.

   ![요소 추가 패널에서 카운트다운 타이머 요소를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047685471/original/AJ-RilGvSf8lQG1y6IBEg5Yptca3mzdouA.jpeg?1748969293)
4. 이전에 만들어 둔 타이머 목록에서 하나를 골라요. 선택한 타이머를 페이지의 원하는 섹션으로 끌어다 놓아요.

### 코드 요소로 추가하기

코드로 카운트다운 타이머를 삽입하는 방법이에요. 외부 플랫폼에 추가할 때 유용해요. 카운트다운 타이머의 코드를 복사하는 방법은 "How to Use the "Copy Code" Feature in Countdown Timers" 문서를 참고하세요.

1. **마케팅 > 카운트다운 타이머**로 이동해 사용할 타이머를 눌러요.
2. 오른쪽 위의 **코드 복사** 버튼을 눌러요. 팝업이 열리면 파란색 **복사** 버튼을 눌러요.

   ![코드 복사 버튼과 팝업의 복사 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047685346/original/WDGurI-ibhc732v-8R5oKUYp4LM7AqDItg.jpeg?1748969187)
3. **사이트 > 퍼널**에서 퍼널을 열어요.
4. 왼쪽 위의 플러스(+) 아이콘을 눌러 요소 패널을 열어요.
5. **코드** 요소를 선택하고, 타이머를 표시할 위치로 끌어다 놓아요.

   ![요소 패널에서 코드 요소를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047685405/original/Gx7OGkQSy3Z0a5fpEKOuNWEeGP-F6NLHxA.jpeg?1748969241)
6. 코드 요소를 눌러 편집기를 열고, 앞에서 복사한 커스텀 코드를 붙여 넣어요.

   ![코드 요소 편집기에 복사한 코드를 붙여 넣는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047685437/original/xYGRJCDEJp6pfJoa5M7J_g2tYOkbWmrFVA.jpeg?1748969271)

## 자주 묻는 질문

### Fixed, Recurring, Dynamic 타이머는 어떻게 다른가요?
Fixed 타이머는 전 세계 기준으로 정해진 특정 날짜와 시간에 끝나요. Recurring 타이머는 정해진 간격(예: 매일 오전 9시)마다 다시 시작해요. Dynamic 타이머는 연락처가 이메일을 열거나 페이지를 방문할 때 시작되는 개인별 카운트다운이에요.

### 한 타이머를 여러 퍼널에서 쓸 수 있나요?
네, 타이머를 한 번 만들면 위의 두 방법 중 어느 쪽으로든 모든 퍼널이나 웹사이트에서 다시 쓸 수 있어요.

### 외부 웹사이트 빌더에서도 타이머를 쓸 수 있나요?
네. **코드 복사** 기능으로 코드를 복사해 사용하는 플랫폼에 붙여 넣으면 돼요.

### 이미 쓰고 있는 퍼널에 영향을 주지 않고 타이머를 수정할 수 있나요?
네. 타이머를 수정하면 타이머가 놓인 모든 곳에 자동으로 반영돼요. 타이머를 수정하려면 **마케팅 > 카운트다운 타이머**로 이동해 수정할 타이머에서 **편집**을 누르세요.
