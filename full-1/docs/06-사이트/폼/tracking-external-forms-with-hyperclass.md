---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel
번역일: 2026-11-06
카테고리: 06-사이트
---

# 외부 웹사이트 폼 제출 추적하기

외부 웹사이트의 폼 제출을 별도 설정 없이 하이퍼클래스로 바로 가져올 수 있어요. 개선된 **외부 트래킹**(External Tracking)은 Gravity Forms, WPForms, 일반 HTML 폼처럼 지원되는 폼을 자동으로 찾아 제출 내용을 CRM으로 실시간 전달해요. Zapier, 웹훅, 별도 연동 없이도 되고, 어트리뷰션과 리드 추적 정확도도 높아져요.

## 외부 트래킹이란?

**외부 트래킹**은 가벼운 스크립트예요. 외부 웹사이트의 활동을 하이퍼클래스와 연결해서, 페이지 조회를 추적하고 타사 사이트의 폼 제출을 자동으로 수집해요.

이번 개선으로 DOM 기반 폼을 자동으로 감지하고, 수동 설정 없이 제출 내용을 수집해요. 그래서 WordPress, Shopify, Wix, 직접 만든 웹사이트에서도 리드를 훨씬 쉽게 추적할 수 있어요.

## 외부 트래킹의 주요 장점

**외부 트래킹**을 쓰면 리드 수집이 간단해지고 외부 웹사이트 성과를 더 잘 볼 수 있어요. 마케팅과 자동화 결정을 내리는 데도 도움이 돼요.

- 자동 폼 감지: Gravity Forms, WPForms, 일반 HTML 같은 지원 폼을 자동으로 찾아요.
- 실시간 제출 수집: 지연이나 별도 연동 없이 제출 내용을 바로 가져와요.
- 연락처 자동 생성: 제출 직후 연락처를 만들거나 업데이트해요.
- 똑똑한 필드 매핑: 기존 연락처 속성과 커스텀 필드에 필드를 알아서 맞춰 줘요.
- 어트리뷰션 추적: UTM 파라미터, 페이지 URL, 세션 데이터를 수집해요.
- 다중 폼 지원: 한 페이지에 폼이 여러 개 있어도 각각 따로 추적해요.
- 설정 불필요: Zapier, 웹훅, 수동 매핑이 필요 없어요.

## 자동 폼 감지

**외부 트래킹**은 웹사이트를 살펴서 DOM에 직접 렌더링된 지원 폼을 찾아요. 그래서 대부분의 최신 폼 빌더는 스크립트를 설치하면 바로 작동해요. 따로 검증하지 않아도 외부 사이트에서 리드를 매끄럽게 수집할 수 있어요.

지원되는 폼은 다음과 같아요.

- WordPress 폼(Gravity Forms, WPForms, Contact Form 7)
- 일반 HTML 폼
- 노코드 웹사이트 빌더

iframe이나 타사 위젯으로 삽입한 폼은 지원되지 않아요.

## DOM 기반 폼 추적 방식

DOM 기반 추적은 폼과 필드가 페이지에 읽을 수 있는 HTML 요소로 있어야 한다는 뜻이에요. 트래킹 스크립트는 페이지 DOM에 있는 표준 폼 구조와 입력 필드를 찾아요.

지원되는 폼에는 보통 다음이 들어 있어요.

- 올바른 `<form>` HTML 요소
- name 속성이 있는 입력 필드
- DOM에서 보이고 사용할 수 있는 필드
- 연락처를 만들거나 기존 연락처와 맞춰야 할 때 필요한 이메일 필드

**외부 트래킹**은 일반 웹사이트 폼처럼 동작하는 폼에서 가장 잘 작동해요. 많은 WordPress 폼, 일반 HTML 폼, 노코드 웹사이트 빌더로 만든 폼이 여기에 해당해요.

iframe 안에 숨어 있는 폼 필드나, 입력 요소를 페이지에 드러내지 않는 타사 위젯이 전부 제어하는 폼 필드는 읽지 못해요.

## 똑똑한 필드 매핑

필드 매핑은 자동으로 이뤄져요. 수집한 데이터가 연락처 기록과 맞게 연결되고 따로 설정할 필요가 없어요. 데이터가 더 정확해지고, 제출 후 정리할 일도 줄어요.

- 이름, 레이블, 기존 커스텀 필드를 기준으로 필드를 맞춰요.
- 매핑되지 않은 필드는 나중에 쓸 수 있게 안전하게 저장해요.
- 텍스트, 드롭다운, 체크박스, 날짜 등 여러 필드 유형을 지원해요.
- 화면에는 관련 있는 필드만 표시해요.

## 외부 트래킹 설정하기

스크립트를 제대로 설치해야 모든 외부 폼 제출과 페이지 활동이 안정적으로 수집돼요. 그래야 리포트와 자동화도 정확해져요.

#### 1단계: 트래킹 스크립트 가져오기

1. **설정 > 외부 트래킹**으로 이동하세요.
2. **스크립트 복사**를 클릭하세요.

![**외부 트래킹** 설정 화면에 스크립트와 스크립트 복사 버튼이 보이는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069752503/original/PEbTy-wfjvfZsuQJypzzxeTFbcVRL8_WKg.png?1776919977)

이 스크립트는 계정마다 고유하고, 웹사이트와 하이퍼클래스를 연결해 줘요. 트래킹 ID는 수정하지 마세요.

![트래킹 ID가 보이는 스크립트 코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069752513/original/_T9VxSyR9yLjp6UyNwfqypd3MlMM0s74qQ.png?1776920030)

#### 2단계: 웹사이트에 스크립트 설치하기

웹사이트의 `</body>` 닫는 태그 바로 앞에 스크립트를 붙여 넣으세요. 그러면 모든 페이지에서 스크립트가 로드되어 폼을 자동으로 감지해요.

```
<script   src="https://link.yourdomain.com/js/external-tracking.js"  data-tracking-id="tk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"> </script>
```

![스크립트를 추가할 WordPress 관리자 화면 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069752553/original/sAUQARomgMeV_2GuJllMXptbI6f8pqjbHg.png?1776920144)

WordPress, Shopify, Wix, Webflow 같은 여러 플랫폼이나 일반 HTML 사이트 어디에든 설치할 수 있어요.

#### 3단계: 폼이나 페이지에 스크립트 추가하기 (선택 예시)

사이트 전체에 설치하는 방법을 권장해요. 다만 HTML 블록을 써서 폼 안에 스크립트를 직접 넣을 수도 있어요. 페이지 빌더나 폼 편집기에서 빠르게 적용할 때 자주 쓰는 방법이에요.

![WordPress 폼 목록에서 편집할 폼을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069752573/original/KaqUzxaURWq0ideowuFnIThRvJbP3W67hw.png?1776920210)

폼 빌더에 들어가면 HTML 블록에 스크립트를 넣을 수 있어요. 그러면 폼과 함께 스크립트가 로드돼요.

![트래킹 스크립트를 추가한 폼 안의 HTML 블록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069752588/original/14h5hfN1lT-aYVORbhTN2D1vcD5t15njYQ.png?1776920267)

#### 4단계: 폼 제출하기

설치가 끝나면 방문자처럼 폼을 제출해 보세요. 시스템이 폼을 자동으로 감지하고, 지원되는 필드 데이터를 모두 수집해요. 별도 설정은 필요 없어요.

![웹페이지에서 외부 폼(Gravity Form)을 작성한 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069752600/original/ZwdYAbvbZ4a43xtCiBXwH1cew7rPHjno4w.png?1776920353)

제출하고 나면 방문자에게는 폼이 평소처럼 동작하고, 데이터는 뒤에서 하이퍼클래스로 전송돼요.

![방문자에게 표시되는 폼 제출 완료 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069752617/original/ItwMwlIOQGbm8mdOtsToSRCEOKwWWtWeYg.png?1776920388)

#### 5단계: 하이퍼클래스에서 제출 내용 확인하기

수집된 제출 내용은 하이퍼클래스에서 바로 볼 수 있어요. 들어온 리드를 확인하고 관리해 보세요.

1. **사이트 > 폼 > 제출**로 이동하세요.
2. **External Forms**(외부 폼)를 선택해 결과를 걸러 보세요.

![수집된 외부 폼 제출 내역이 표시된 제출 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069752659/original/knFztL656p1sAnifrtNMrAnFM3vRGnlSAw.png?1776920515)

#### 6단계: 연락처와 활동 상세 정보 확인하기

제출 내용은 연락처 기록에도 연결돼요. 수집된 데이터와 사용자 활동을 모두 볼 수 있어서 세분화, 자동화, 후속 조치에 활용할 수 있어요.

![**활동 상세 정보** 패널에 수집된 필드와 매핑되지 않은 데이터가 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069752668/original/3y8r9SW91P_TP_thMpjHzChzr0GXuNxc0w.png?1776920564)

## 지원 폼 요건

폼이 기본 구조 요건을 갖추면 **외부 트래킹**이 자동으로 작동해요. 그래야 폼 감지와 데이터 수집이 안정적이에요.

- 올바른 `<form>` HTML 요소를 사용해야 해요.
- 필드에 name 속성이 있어야 해요.
- 이메일 필드가 있어야 해요.
- 필드가 DOM에서 보여야 해요.

지원되지 않음:

- iframe 기반 폼
- 실제 폼 요소가 없는 팝업 위젯
- 입력 요소를 드러내지 않는 타사 스크립트

## 워크플로우 트리거

**외부 트래킹**을 쓰면 방문자 행동을 기준으로 자동화를 만들 수 있어요. 리드에게 빠르고 효율적으로 대응할 수 있어요.

- **Page View Trigger**(페이지 조회 트리거): 트래킹 스크립트가 있는 페이지에 방문자가 들어오면 실행돼요. 익명 방문자도 해당돼요.
- **Form Submission Trigger**(폼 제출 트리거): 감지된 폼이 제출되면 실행돼요.

사용할 수 있는 필터는 다음과 같아요.

- **Domain**(도메인)
- **Page path**(페이지 경로)
- **External form name**(외부 폼 이름)
- **UTM parameters**(UTM 파라미터)

## 자주 묻는 질문

### 스크립트를 설치한 뒤에 따로 설정해야 하나요?

아니요. 폼 감지와 제출 추적은 자동으로 이뤄져요.

### Gravity Forms와 WPForms에서도 작동하나요?

네. 대부분의 DOM 기반 WordPress 폼은 별도 설정 없이 지원돼요.

### 한 페이지에 있는 여러 폼을 추적할 수 있나요?

네. 각 폼을 따로 감지하고 추적해요.

### iframe 기반 폼도 지원하나요?

아니요. DOM에 직접 렌더링된 폼만 지원해요.

### 제출 내용은 어디에서 볼 수 있나요?

**폼 > 제출**에서 볼 수 있어요. 연락처 기록과 활동 로그에서도 확인할 수 있어요.

### 매핑되지 않은 필드는 어떻게 되나요?

안전하게 저장돼요. 나중에 매핑하거나 워크플로우에서 쓸 수 있어요.
