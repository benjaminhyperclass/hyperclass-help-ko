---
원문: /support/solutions/articles/155000005657-animation-customizations-in-funnels-websites
번역일: 2026-11-06
카테고리: 06-사이트
---

# 퍼널·웹사이트 애니메이션 설정

페이지 빌더에서 요소의 움직임 타이밍, 이징, 효과별 옵션을 조정하는 방법을 안내해요. **버튼** 요소에는 사용자 지정 CSS 없이 호버 애니메이션도 추가할 수 있어요. 랜딩 페이지, 퍼널, 웹사이트 전체 어디에나 쓸 수 있어요.

## 애니메이션 설정이란?

애니메이션 설정은 페이지 빌더에 내장된 기능으로, 퍼널과 웹사이트의 각 요소가 어떻게 움직일지 정할 수 있어요. 타이밍, 움직임, 이징 같은 지원되는 속성을 실시간 미리보기로 확인하면서 조정해요. 편집기를 벗어나거나 코드를 추가하지 않고도 자연스러운 움직임과 인터랙션을 만들 수 있어요.

사용할 수 있는 애니메이션 설정에는 다음과 같은 것이 있어요.

- **스케일**: 지원되는 애니메이션 효과의 크기를 0.5배에서 2배까지 조정해요.
- **소요 시간**: 애니메이션이 진행되는 시간을 0.1초에서 3초까지 정해요.
- **Delay**(지연): 애니메이션이 시작되기 전에 최대 5초까지 간격을 둬요.
- **Easing**(이징): **Linear**(선형), **Ease In**(천천히 시작), **Ease Out**(천천히 끝남), **Ease In Out**(천천히 시작해서 천천히 끝남) 중에서 골라 애니메이션이 빨라지고 느려지는 방식을 정해요.

**버튼** 요소는 **Animations**(애니메이션) 탭에서 호버 애니메이션도 설정할 수 있어요. 호버 효과는 캔버스에서 바로 미리 볼 수 있고, 타이밍 설정과 효과별 옵션(스케일, 각도, 거리, 색상, 테두리, 그림자 등)으로 세밀하게 조정할 수 있어요.

이 설정을 쓰면 인터랙티브한 버튼과 매끄러운 페이지 애니메이션을 하이퍼클래스 페이지 빌더 안에서 계속 편집할 수 있어요.

## 애니메이션 지연 동작 개선

퍼널과 웹사이트 전반에서 애니메이션 지연이 더 정확하게 동작해요. 요소는 설정한 지연 시간 동안 숨겨져 있다가 애니메이션이 시작될 때 나타나요.

이전에는 일부 요소가 지연이 끝나기 전에 잠깐 보이는 경우가 있었어요. 이 문제를 고쳐서, 특히 애니메이션을 순차적으로 겹쳐 쓸 때 더 부드럽고 일관되게 보여요.

진입 애니메이션은 요소가 화면에 보일 때까지 기다렸다가 재생돼요. 드래그 앤 드롭, 기기 보기 전환, 요소 편집 같은 일반적인 편집 작업을 해도 다시 시작되지 않아요.

따로 설정할 필요는 없어요. 기존 애니메이션 설정에도 개선된 동작이 자동으로 적용돼요.

## 애니메이션 설정의 장점

애니메이션 설정을 쓰면 페이지 빌더에서 의도에 맞는 움직임과 버튼 상태를 바로 만들 수 있어요. 사용자 지정 CSS 없이 페이지 인터랙션을 다듬을 수 있어요.

- 세밀한 조정: 타이밍, 이징, 효과별 속성을 조정해 애니메이션이 움직이는 방식을 세밀하게 맞출 수 있어요.
- 버튼 호버 효과 설정: CSS를 직접 쓰거나 관리하지 않고 사이드바에서 바로 호버 상태를 추가할 수 있어요.
- 실시간 미리보기: 적용하기 전에 선택한 요소에서 애니메이션 효과를 미리 보고, 조정한 내용을 캔버스에서 바로 확인할 수 있어요.
- 효과별 설정: 선택한 호버 효과에 해당하는 설정만 보여 줘요. 예를 들면 스케일, 거리, 채우기 색상, 테두리 두께, 그림자 설정이에요.
- 완성도 있는 마감: 움직임과 호버 인터랙션으로 시선을 끌고 콜투액션이 더 인터랙티브하게 느껴지게 할 수 있어요.

이런 기능으로 설정은 하이퍼클래스 페이지 빌더 안에 둔 채 부드럽고 눈에 띄는 애니메이션을 만들 수 있어요.

## 애니메이션 설정하기

페이지 빌더에서 지원되는 요소에 진입 애니메이션을 적용하고, 버튼 요소에는 호버 애니메이션을 설정해요.

### 퍼널 화면 열기

**서브 계정 보기**에서 **사이트 > 퍼널**로 이동하세요. 서브 계정에 있는 퍼널 프로젝트 목록이 열려요.

![퍼널 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049323105/original/xs5jmgCzwkU0PfqKFai0hqVoGTQnVSRJhw.png?1751592252)

### 퍼널 선택하거나 만들기

**Search for Funnels**(퍼널 검색) 창에서 기존 퍼널을 열거나, **+ New Funnel**(새 퍼널 추가)을 클릭해 새로 만드세요. 퍼널 단계 화면이 열리면 각 단계를 관리하고 편집할 수 있어요.

![퍼널 검색과 새 퍼널 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049323121/original/PAoMHA0TPV6iz9FaSqcPhjYgYozL7h-fxg.png?1751592294)

### 애니메이션을 적용할 페이지 선택하기

퍼널 단계 목록에서 애니메이션을 설정할 페이지를 선택하세요. 선택한 페이지의 미리보기와 편집 옵션이 나타나요.

![퍼널 단계에서 페이지 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049323118/original/nqfcTsNyDygYYVWtVSn-VNR4ishBHMSK7w.png?1751592274)

### 페이지 편집기 열기

선택한 페이지 미리보기 아래에서 **편집** 버튼을 클릭하고 **새 탭에서 편집**을 선택하세요. 페이지가 페이지 빌더에서 열려요.

![편집 버튼과 새 탭에서 편집 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049323124/original/Z59tMaphaV5_qMqTdhR_mCYGEOm2j65eYg.png?1751592319)

### 애니메이션을 적용할 요소 선택하기

**버튼**, 텍스트 블록, 이미지처럼 애니메이션을 적용할 요소를 선택하세요. 오른쪽 사이드바에 요소 설정이 나타나요.

![요소를 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049323178/original/J4YsuDwm0ttwqYlO_JzGWPBIT026hfpIWg.png?1751592485)

### 애니메이션 설정 열기

요소를 선택한 상태에서 오른쪽 사이드바의 **Animations** 탭을 여세요. 선택한 요소에 쓸 수 있는 진입 애니메이션과 호버 애니메이션 설정을 여기서 관리해요.

![Animations 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049323194/original/m365_KfbYgAGwnv7bLC1H_ChIKSaLlgOmQ.png?1751592518)

### 진입 애니메이션 선택하기

**Entrance Animation**(진입 애니메이션)을 클릭하면 선택한 요소가 페이지에 나타나는 방식을 정할 수 있어요. 사용할 수 있는 진입 애니메이션 스타일이 열려요.

![Entrance Animation 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049323200/original/UFfMvMCct-5kFILTG0CExXF_JOWIDvoatw.png?1751592556)

### 애니메이션 스타일 고르기

**Fade**(페이드), **슬라이드**, **Bounce**(바운스) 등 여러 그룹에 있는 애니메이션 옵션을 살펴보세요. 애니메이션을 선택하면 요소가 페이지에 나타나는 모습을 미리 볼 수 있어요.

![애니메이션 스타일 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049323208/original/o3Kj9vyWNa8rTLJVOPfZAEkPPMUFcvPlmA.gif?1751592585)

### 애니메이션 조정 열기

애니메이션 스타일을 선택한 뒤 **Adjust Animation**(애니메이션 조정)을 클릭하세요. 애니메이션을 세밀하게 조정할 수 있는 설정이 열려요.

![Adjust Animation 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049323131/original/i5THqmd4OVce1xPLvf8FlFgY0A-C72Y2jw.png?1751592353)

### 애니메이션 동작 세밀하게 조정하기

**스케일**, **소요 시간**, **Delay**, **Easing** 같은 속성을 조정하세요. 어떤 설정이 나타나는지는 선택한 애니메이션에 따라 달라요.

![애니메이션 세부 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049323158/original/XGpoRj_rQskoeXczOl9h_GKVZgwTARY7jw.png?1751592434)

### 이징 조정하기

**Easing** 드롭다운을 열면 애니메이션이 빨라지고 느려지는 방식을 정할 수 있어요. **Linear**, **Ease In**, **Ease Out**, **Ease In Out** 중에서 고르세요.

![Easing 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049323169/original/oXuxYONiaHNON0Y7XkYPLSZBj9-UasPCMA.png?1751592449)

### 버튼 호버 애니메이션 설정하기

호버 애니메이션은 방문자가 버튼 위에 마우스를 올렸을 때 버튼이 시각적으로 반응하게 해요. 내장된 호버 효과를 쓰면 CSS를 추가하지 않고도 페이지 빌더에서 콜투액션 상태를 만들 수 있어요.

1. 페이지 빌더에서 애니메이션을 적용할 **버튼**을 선택하세요.
2. 오른쪽 사이드바에서 **Animations** 탭을 여세요.
3. **Hover Animation**(호버 애니메이션)을 클릭하세요.

   ![Hover Animation 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082310002/original/tdw2Neu78aRtAtXZdhEOqIh1YlbZiuPZ4A.png?1790865350)
4. 사용할 수 있는 호버 효과를 살펴보세요. 효과 카드에 마우스를 올리면 적용하기 전에 선택한 버튼에서 애니메이션을 미리 볼 수 있어요.
5. 적용할 호버 효과를 선택하세요.
6. **Adjust Animation**을 클릭해 선택한 효과의 설정을 여세요.

   ![호버 효과 Adjust Animation 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082310569/original/r5E-yHvQGxJc5YWtXm3UPvP3CMlYobk4PQ.png?1790865720)
7. **소요 시간**, **Delay**, **Easing**과 선택한 효과에서 쓸 수 있는 추가 설정을 조정하세요.
8. 캔버스에서 버튼을 미리 보고, 인터랙션이 마음에 들면 페이지를 게시하세요.

{% hint style="info" %}
버튼에 진입 애니메이션도 있으면, 호버 애니메이션은 진입 애니메이션이 끝난 뒤에 활성화돼요.
{% endhint %}

{% hint style="info" %}
방문자가 호버 상태에서 벗어나지 못하는 일이 없도록, 터치 기기와 1024px 미만 화면에서는 호버 애니메이션이 자동으로 꺼져요.
{% endhint %}

{% hint style="info" %}
고정 바나 내비게이션 복제본처럼 같은 버튼이 페이지에서 반복해 나타나면, 반복된 버튼에도 원본 버튼과 같은 호버 애니메이션이 적용돼요.
{% endhint %}

### 호버 애니메이션 설정 사용자 지정하기

모든 호버 효과에는 타이밍 설정이 있고, 선택한 효과에 따라 추가 설정이 나타나요. 지금 쓰는 애니메이션에 영향을 주는 설정만 조정 패널에 보이도록 한 거예요.

지원되는 모든 버튼 호버 효과에는 다음 설정이 있어요.

- **소요 시간**: 호버 애니메이션이 끝날 때까지 걸리는 시간이에요. 0.1초에서 3초까지 설정할 수 있어요.
- **Delay**: 호버 효과가 시작되기 전에 하이퍼클래스가 기다리는 시간이에요. 0초에서 5초까지 설정할 수 있어요.
- **Easing**: 애니메이션이 빨라지고 느려지는 방식이에요. Linear, Ease In, Ease Out, Ease In Out 중에서 고를 수 있어요.

선택한 호버 효과에 따라 다음과 같은 추가 설정이 나타나요.

| 효과 그룹 | 예시 | 추가 설정 |
| --- | --- | --- |
| 스케일 | Grow, Shrink, Pulse, Bounce In | **스케일**(0.5배~2배) |
| 회전 | Rotate, Skew Forward | **Angle**(각도, −180°~180°) |
| 이동 | Float, Wobble Horizontal, Buzz | **Distance**(거리, 0~50) |
| 배경 | Fade, Sweep To Right, Sweep To Bottom, Radial In, Bounce To Top | **Fill Color**(채우기 색상) |
| 테두리/윤곽선 | Ripple Out, Outline In, Underline From Center | **테두리 색상**, **Border Thickness**(테두리 두께, 1~10px) |
| 그림자/글로우 | Shadow, Glow, Box Shadow Outset | **Shadow Color**(그림자 색상), **Blur**(흐림, 0~50px), **Spread**(퍼짐, 0~50px) |

![호버 효과 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082310660/original/JIUZnlRYVJpEEUGS1SGsrRVCq4hFY37r1A.png?1790865789)

![호버 효과 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082310704/original/F_a-ZmhuAlN45BhXDfW7K9aJnz4L7ZWPxQ.png?1790865820)

![호버 효과 설정 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082310806/original/MJNjbq8HU6xw3tc5AFtpbKf8FZ5qGfpyOQ.png?1790865847)

## 자주 묻는 질문

### 애니메이션을 써 본 적이 없어도 이 기능을 쓸 수 있나요?
네. 애니메이션 설정은 페이지 빌더 안에 있고, 미리보기와 알아보기 쉬운 설정 이름으로 지원되는 효과를 설정할 수 있어요.

### 어떤 종류의 애니메이션을 적용할 수 있나요?
지원되는 페이지 요소에 사용할 수 있는 진입 애니메이션을 적용할 수 있어요. **버튼** 요소에는 타이밍과 효과별 속성을 조정할 수 있는 호버 애니메이션도 설정할 수 있어요.

### 게시하기 전에 애니메이션을 미리 볼 수 있나요?
네. 애니메이션 설정은 페이지 빌더 안에서 미리 볼 수 있어요. 버튼 호버 애니메이션은 효과 카드에 마우스를 올리면 적용하기 전에 선택한 버튼에서 그 효과를 미리 볼 수도 있어요.

### 애니메이션에서 이징은 어떤 역할을 하나요?
이징은 애니메이션이 재생되는 동안 빨라지고 느려지는 방식을 정해요. Linear, Ease In, Ease Out, Ease In Out 중에서 고를 수 있어요.

### 버튼에 진입 애니메이션과 호버 애니메이션을 함께 쓸 수 있나요?
네. 버튼에 진입 애니메이션과 호버 애니메이션을 모두 설정할 수 있어요. 둘 다 설정하면 호버 애니메이션은 진입 애니메이션이 끝난 뒤에 활성화돼요.

### 버튼 호버 애니메이션이 터치 기기나 작은 화면에서도 작동하나요?
터치 기기와 1024px 미만 화면에서는 호버 애니메이션이 자동으로 꺼져요. 방문자가 호버 상태에서 벗어나지 못하는 일을 막기 위해서예요.
