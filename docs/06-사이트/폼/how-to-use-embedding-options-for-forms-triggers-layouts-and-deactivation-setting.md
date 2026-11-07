---
원문: /support/solutions/articles/155000004538-how-to-use-embedding-options-for-forms-triggers-layouts-and-deactivation-settings-explained
번역일: 2026-11-06
카테고리: 06-사이트
---

# 폼 임베드 옵션 설정하기: 레이아웃, 트리거, 비활성화 조건

웹사이트나 퍼널에 폼을 삽입할 때, 폼이 어떤 모양으로 언제 나타나고 언제 사라질지 정하는 방법을 설명해요. 임베드 레이아웃, 트리거, 활성화·비활성화 옵션을 설정하고 임베드 코드를 복사하는 과정까지 다뤄요.

## 소개

폼 임베드 옵션을 쓰면 웹사이트나 퍼널에서 폼이 나타나는 방식과 시점을 더 세밀하게 조절할 수 있어요. 특정 조건에 따라 폼을 띄우거나 숨기는 고급 옵션도 있어서, 사용자 경험을 개선하거나 기간이 정해진 캠페인을 운영하거나 리드 수집을 관리하는 등 목적에 맞게 폼을 활용할 수 있어요.

임베드 코드는 웹사이트에 넣은 뒤로는 바뀌지 않아요. 그래서 레이아웃, 트리거, 비활성화 설정처럼 폼 설정을 바꿨다면 임베드 코드를 새로 만들어 기존 코드와 교체해야 변경 내용이 반영돼요.

### 활용 사례

- 기간 한정 캠페인: 폼이 정해진 횟수만큼 표시된 뒤에는 비활성화해서, 한정 오퍼나 시즌 프로모션처럼 긴박감이나 희소성이 필요한 상황에 활용해요.
- **리드 관리**: 폼이 정해진 횟수만큼 표시된 뒤에는 비활성화해서, 한정 오퍼나 시즌 프로모션처럼 긴박감이나 희소성이 필요한 상황에 활용해요.
---

## 단계별 안내

### 1단계: 연동 설정 열기

폼을 만든 뒤 **연동** 버튼을 클릭하면 폼 연동 설정 화면으로 이동해요.

![폼 편집 화면의 연동 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040575058/original/IBWVtOJ_5N1bM_QAD5Rt2uhBcJRoauR6-g.png?1738064692)

그러면 다음 화면이 나타나요.

![폼 연동 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040575057/original/pZvePil-O7u-BhNEscZp_jMQMepRFcDblA.png?1738064692)

이 화면에서 임베드 레이아웃, 활성화 옵션, 비활성화 옵션을 모두 설정할 수 있어요. 아래에서 하나씩 살펴볼게요.

### 2단계: 임베드 레이아웃 선택하기

웹사이트나 퍼널에서 폼이 어떤 모양으로 나타날지 고르세요. 선택할 수 있는 레이아웃은 다음과 같아요.

- **Sticky Sidebar**(고정 사이드바): 폼이 화면 왼쪽이나 오른쪽에 고정되어, 사용자가 스크롤해도 계속 보여요. 필요에 따라 최소화하거나 최대화할 수 있어요.

  최대화

  ![Sticky Sidebar 최대화 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040575064/original/ttRHYVKvqWQ0UEM2AJLTBzsuPHsoHHrTNw.png?1738064693)

  최소화

  ![Sticky Sidebar 최소화 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040575060/original/Tp-zpFxvaHGaSQT7wV1AoskKG1dNJ0pDLw.png?1738064692)

- **Polite Slide-in**(슬라이드 인): 폼이 화면 왼쪽이나 오른쪽에서 슬라이드하며 나타나, 방문자의 시선을 부드럽게 끌어요. 방해가 되지 않도록 최소화할 수도 있어요.

  최대화

  ![Polite Slide-in 최대화 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040575059/original/K97BwmItQ6MSGk8JhN4IF5kSsTbFuG_N2w.png?1738064692)

  최소화

  ![Polite Slide-in 최소화 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040575063/original/rNtz-i8vPo-EdjbkeBDWa5cUW2IKLWiPeA.png?1738064693)

- **Popup**(팝업): 폼이 페이지 위에 겹쳐진 모달 창으로 나타나요. 바로 눈에 띄지만, 아래 페이지 내용을 보려면 창을 닫아야 해요.

- **인라인**: 폼이 페이지 내용 안에 기본 요소처럼 직접 삽입돼요. 사용자 경험을 방해하지 않아요.

  ![인라인 레이아웃 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040575061/original/aXcXZXJ058HcZW5AEaghqG-_91Z9a7VHZg.png?1738064692)

#### 모달 높이 직접 설정하기

모달 높이를 직접 정하면 외부 페이지에 삽입된 폼이 어떻게 보일지 더 세밀하게 조절할 수 있어요. 인라인이 아닌 임베드가 삽입된 페이지에서 지나치게 크거나 넘쳐 보이는 것을 막아 주고, 기존 임베드 동작은 그대로 유지돼요.

**Modal height**(모달 높이)는 다음 레이아웃에서 설정할 수 있어요.

- **Popup**
- **Polite Slide-in**
- **Sticky Sidebar**

**인라인** 레이아웃에서는 이 옵션이 표시되지 않아요.

모달 높이를 설정하려면 다음과 같이 하세요.

1. 폼을 열고, 폼이 모두 불러와지면 **연동**을 클릭하세요.
2. **임베드 코드**를 선택하세요.
3. 다음 레이아웃 중 하나를 선택하세요.
   - **Popup**
   - **Polite Slide-in**
   - **Sticky Sidebar**
4. **Modal height** 필드에 원하는 높이를 입력하세요.
5. **임베드 코드 복사**를 클릭한 뒤 웹사이트에 붙여넣으세요.

{% hint style="warning" %}
**중요**

- 기본 모달 높이는 500px이에요.
- 1 이상의 정수를 입력할 수 있어요.
- 이 설정이 없는 기존 임베드는 이전처럼 그대로 작동해요.
- **인라인** 레이아웃에서는 이 필드가 숨겨져요.
{% endhint %}

![Modal height 필드 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155072913050/original/_1oX2HPWntsKpfu7TI2BYr955-VsvNj5kA.png?1780578144)

![Modal height 필드 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155072913168/original/EPR0Ym2h4qkg2KqnEiKj7KWJS8ZKRikAvQ.png?1780578202)

![Modal height 필드 설정 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155072913302/original/LXOA7x3Ncxc81FYK1ZRutJn5-pDfbSxCjg.png?1780578253)

### 3단계: 트리거 옵션 설정하기

트리거 옵션은 폼이 언제 나타날지 정해요. 다음 중 하나를 선택하세요.

- **Show on Scrolling [X]%**(스크롤 [X]% 시 표시): 사용자가 페이지를 일정 비율만큼 스크롤하면 폼이 나타나요. 예를 들어 50%로 정할 수 있어요.
- **Show After [X] Seconds**(N초 후 표시): 정해 둔 시간이 지나면 폼이 나타나요. 예를 들어 5초로 정할 수 있어요.
- **Always Show**(항상 표시): 사용자의 동작과 관계없이 폼이 항상 보여요.

### 4단계: 활성화 옵션 설정하기

폼이 언제부터 활성화될지 정하세요.

- **Activate on [X] Visit**(N번째 방문 시 활성화): 사용자가 페이지를 정해 둔 횟수만큼 방문한 뒤에야 폼이 표시돼요. 예를 들어 세 번째 방문부터 표시되게 할 수 있어요.
- **Always Activated**(항상 활성화): 폼이 항상 활성화된 상태로 유지돼요.

### 5단계: 비활성화 옵션 설정하기

폼이 언제부터 표시되지 않을지 정하세요.

- **Deactivate After Showing [X] Times**(N회 표시 후 비활성화): 폼이 정해 둔 횟수만큼 표시되면 그 뒤로는 표시하지 않아요. 예를 들어 3회로 정할 수 있어요.
- **Deactivate Once Lead Is Collected**(리드 수집 시 비활성화): 사용자가 정보를 제출하면 폼이 자동으로 비활성화돼요.
- **Never Deactivate**(비활성화 안 함): 폼이 계속 활성화된 채로 표시돼요.

### 6단계: 폼 복사해서 삽입하기

1. **임베드 코드 복사**를 클릭해 폼을 삽입할 HTML 코드를 복사하세요.
   - 이 코드를 웹사이트 HTML에서 폼이 나타나길 원하는 위치에 붙여넣으세요.
2. 또는 **Copy Form Link**(폼 링크 복사)를 클릭해 폼으로 바로 연결되는 URL을 복사할 수도 있어요.
   - 이 링크는 이메일, 소셜 미디어 등 사용자가 폼에 접속하길 원하는 곳에 사용하세요.

---

## 자주 묻는 질문

### 트리거와 비활성화 옵션은 어떻게 함께 작동하나요?

트리거는 폼이 언제 나타날지 정해요(예: 일정 시간이 지난 뒤, 스크롤했을 때). 비활성화 옵션은 폼이 언제부터 나타나지 않을지 정해요(예: 정해진 횟수만큼 표시된 뒤, 리드를 수집한 뒤). 둘을 함께 쓰면 상황에 맞게 변하는 사용자 경험을 만들 수 있어요.

### 새 기능을 쓰려면 기존 임베드 코드를 업데이트해야 하나요?

네, 트리거나 비활성화 같은 새 임베드 옵션을 쓰려면 **Integrate Form**(폼 연동) 화면에서 새 임베드 코드를 만들어 사이트의 기존 코드와 교체해야 해요.

### 옵션을 바꾸면 임베드된 폼에 바로 반영되나요?

임베드 코드는 웹사이트에 넣은 뒤로는 바뀌지 않아요. 그래서 폼을 변경했다면 새 임베드 코드를 만들어 기존 코드와 교체해야 변경 내용이 반영돼요.
