---
원문: /support/solutions/articles/155000006827-code-element-in-email-builder
번역일: 2026-11-07
카테고리: 10-마케팅
---

# 이메일 빌더에서 Code Element(코드 요소)로 HTML·CSS 넣기

**Code Element**(코드 요소)를 쓰면 이메일 템플릿에 HTML이나 CSS 코드를 직접 넣을 수 있어요. 기본 디자인 옵션으로는 어려운 위젯 삽입, 트래킹 픽셀 추가, 세부 스타일 조정에 활용해 보세요.

## 코드 요소란?

**Code Element**는 끌어다 놓는 블록이에요. 이메일 레이아웃에 HTML이나 CSS를 직접 넣을 수 있어요. 카운트다운 타이머나 트래킹 태그처럼 기본 비주얼 편집기로는 만들 수 없는 콘텐츠를 넣거나 레이아웃을 바꾸고 싶은 고급 사용자를 위한 기능이에요.

코드를 알맞게 쓰면 이메일을 더 세밀하게 꾸미고, 외부 도구도 이메일 디자인 안에 자연스럽게 연결할 수 있어요.

{% hint style="info" %}
이메일 클라이언트는 사용자 지정 코드를 제한적으로만 지원해요. 발송하기 전에 꼭 테스트해서, 넣은 콘텐츠가 모든 환경에서 제대로 보이는지 확인하세요.
{% endhint %}

## 코드 요소의 장점

이메일 디자인에 **Code Element**를 쓰면 이런 점이 좋아요.

- HTML이나 CSS로 나만의 레이아웃과 디자인을 만들 수 있어요.
- 타이머, 폼, 배지 같은 외부 위젯을 넣을 수 있어요.
- 캠페인 인사이트를 얻기 위한 트래킹 픽셀이나 분석 스크립트를 넣을 수 있어요.
- 기본 편집기보다 간격, 색상, 스타일을 더 세밀하게 조정할 수 있어요.
- 이메일의 특정 영역에서 고급 사용자 지정을 안전하게 시험해 볼 수 있어요.

## 코드 요소 설정하기

이메일 템플릿에 **Code Element**를 추가하고 설정하는 방법이에요.

1. 서브 계정 대시보드에서 **마케팅 > 이메일 > 템플릿**으로 이동하세요.  
   ![마케팅 > 이메일 > 템플릿 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057298706/original/WuQViu370ASjxhH8Cz0hAv4Uonfx-iu26A.png?1761908722)
2. 기존 이메일 템플릿을 열거나, **+ 신규** 버튼을 눌러 새로 만드세요.  
   ![기존 템플릿을 열거나 새 템플릿을 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057298721/original/F4pVXx35ViTwbEvbBQDzGB6gw5hbM6Xsvg.jpeg?1761908734)
3. **이메일 빌더**에서 왼쪽 사이드바의 **요소 추가**(+) 아이콘을 클릭하세요.  
   ![왼쪽 사이드바의 요소 추가 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057298820/original/OXB_jBv3OecFrni9nhzWA-i7S0WEG3_R7Q.png?1761908813)
4. **요소** 섹션에서 **Code Element**를 찾으세요.
5. **Code Element**를 이메일 레이아웃에서 원하는 위치로 끌어다 놓으세요.
6. 놓은 **Code Element**를 클릭하면 왼쪽 패널에 **편집** 탭이 열려요.
7. 코드 편집 상자에 사용할 HTML이나 CSS 코드를 붙여넣거나 직접 입력하세요.

   - 구조는 HTML로 만드세요(예: div, 표, 임베드).
   - 스타일은 인라인 CSS로 지정하세요(예: 색상, 간격, 글꼴).  
       
     ![코드 편집 상자에 HTML 코드를 입력한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057298881/original/m17hyebE1ZBzZV6kkrisqVa7fQzIqgyesQ.jpeg?1761908853)
8. **미리보기**를 클릭해서 입력한 코드가 디자인에 어떻게 나타나는지 확인하세요.
9. 발송하기 전에 데스크톱 미리보기와 모바일 미리보기에서 모두 테스트해서, 제대로 표시되는지 확인하세요.

## 자주 묻는 질문

### Code Element에는 어떤 코드를 넣을 수 있나요?
HTML과 인라인 CSS를 넣을 수 있어요. JavaScript와 iframe 콘텐츠는 보안상의 이유로 대부분의 이메일 클라이언트에서 지원하지 않아요.

### 사용자 지정 코드가 이메일의 다른 레이아웃에 영향을 주나요?
코드를 잘못 쓰면 영향을 줄 수 있어요. 코드는 그 안에서 완결되도록 작성하고, 다른 요소에 영향을 주지 않도록 인라인 스타일을 사용하세요.

### 이메일 클라이언트마다 코드가 제대로 표시되는지 어떻게 확인하나요?
미리보기와 테스트 발송 옵션으로 꼭 확인하세요. 이메일 클라이언트마다 HTML을 처리하는 방식이 달라서, 코드가 환경별로 조금씩 다르게 보일 수 있어요.

### 사용자 지정 코드를 저장해서 다시 쓸 수 있나요?
네, 코드 블록을 한 번 만들어 두면 복제하거나 복사해서 다른 템플릿에서도 같은 디자인과 기능을 다시 쓸 수 있어요.
