---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005918-using-custom-font-in-funnels-and-websites
번역일: 2026-11-06
카테고리: 06-사이트
---

# 퍼널과 웹사이트에서 커스텀 글꼴 사용하기

퍼널 및 웹사이트 빌더에서 내 글꼴 파일을 직접 올려 쓸 수 있어요. CSS 코드를 넣거나 글꼴을 외부에 따로 올려 둘 필요가 없어요. 이 문서에서는 에이전시가 글꼴 파일을 올리고 관리해서 페이지에 적용하는 방법을 안내해요.

## 퍼널·웹사이트의 커스텀 글꼴 지원이란?

커스텀 글꼴 지원은 하이퍼클래스에 기본으로 들어 있는 기능이에요. 내 글꼴 파일을 퍼널 및 웹사이트 빌더 안에서 바로 올리고, 저장하고, 적용할 수 있어요. 글꼴을 외부에 올리거나 @font-face 코드를 쓸 필요가 없어서, 브랜드 글꼴을 지키면서 페이지를 더 쉽게 만들 수 있어요.

브랜드 글꼴과 색상을 한곳에 모아 두고 싶다면 [하이퍼클래스에서 브랜드 보드와 디자인 키트 만들기](../../10-마케팅/how-to-create-a-brand-board.md)도 함께 확인해 보세요.

## 커스텀 글꼴 지원의 장점

- 브랜드 일관성: 모든 퍼널과 웹페이지에 같은 글꼴을 써서 고객에게 통일된 경험을 줄 수 있어요.
- CSS 불필요: 빌더 안에서만 커스텀 글꼴을 적용하므로 시간이 줄고 코드 오류도 피할 수 있어요.
- 빠른 작업: 한 번 올려 두면 어느 텍스트 요소에서든 드롭다운에서 골라 쓸 수 있어요.
- 다양한 파일 지원: 업계 표준 형식을 쓸 수 있어요. 굵게, 기울임 같은 각 스타일을 별도 선택 항목으로 다루므로 세밀하게 꾸밀 수 있어요.

## 커스텀 글꼴 창(Custom Fonts Modal)

**Custom Fonts Modal**(커스텀 글꼴 창)에서 글꼴을 한곳에서 관리해요. 몇 초면 새 글꼴을 추가하거나 바꿀 수 있어요.

- 글꼴 드롭다운 어디에서든 **글꼴 업로드**를 클릭하면 이 창이 열려요.
- 기기에서 파일을 끌어다 놓거나, 찾아보기로 파일을 선택하세요.
- 이미 올린 글꼴을 확인하고, 오래된 버전은 한 번의 클릭으로 제거할 수 있어요.

![커스텀 글꼴 창 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051517752/original/MXagHZw8BcG6wGVHEVVfhorEiWcJTPVU2Q.png?1755083536)

## 지원하는 글꼴 형식

하이퍼클래스는 가장 많이 쓰는 글꼴 형식을 지원해서, 전문 글꼴 라이브러리의 파일도 그대로 쓸 수 있어요.

- `.ttf` – TrueType Font
- `.otf` – OpenType Font
- `.woff` – Web Open Font Format
- `.woff2` – Compressed Web Open Font Format

## 미디어 저장소와의 연동

글꼴을 하이퍼클래스에 안전하게 보관해서 팀원이 계정과 프로젝트에서 다시 쓸 수 있어요.

- 올린 글꼴은 자동으로 **미디어 저장소**에 저장돼서 쉽게 찾을 수 있어요.
- 파일 이름이 그대로라면, **미디어 저장소**에서 글꼴을 삭제하거나 이름을 바꿔도 게시된 페이지에 문제가 생기지 않아요. <!-- 검토 필요: 원문 내용이 서로 다름 -->
- 저장소가 한곳에 모여 있어서 여러 브랜드 자산을 관리할 때도 작업 공간이 정돈돼요.

![미디어 저장소에 저장된 글꼴 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051814523/original/TDxH-2yIs6Zjpy9gnodFrDvroSBmkZ2h1A.png?1755520917)

미디어 저장소 사용법은 [미디어 저장소 완벽 가이드](../../11-설정/서브어카운트-설정/complete-guide-to-media-storage.md)와 [미디어 저장소 및 파일 업로드 제한](../../11-설정/media-storage-file-upload-limits.md)에서 더 자세히 볼 수 있어요.

## 퍼널·웹사이트에 커스텀 글꼴 적용하기

1. 먼저 **실험실**에서 기능을 켜세요. 이 단계는 에이전시 관리자만 할 수 있어요.
   1. **에이전시 설정 > 실험실**로 이동하세요.
   2. **Custom Font Support for Funnels and websites**(퍼널·웹사이트용 커스텀 글꼴 지원) 항목을 찾아 **관리**를 클릭하세요.

   ![실험실에서 커스텀 글꼴 지원 켜기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051814914/original/bCmNfgWKl6E13rjh_CFbrfJvIFjQmnBy1g.gif?1755521165)
2. **서브 계정**으로 전환하세요.
3. 수정하려는 퍼널 단계 또는 웹페이지의 **빌더**를 여세요.
4. 텍스트 요소(문단, 제목, 리치 텍스트)를 선택하세요.
5. 오른쪽 패널에서 **타이포그래피 > Typography type**(타이포그래피 유형) **> Custom Font**(사용자 지정 글꼴) **> 글꼴 업로드 > 기기에서 업로드**를 차례로 클릭하세요.

   ![텍스트 요소에서 글꼴 업로드 메뉴로 이동하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051815637/original/SSEf60Ib31VnIEgOPOtIBmjYH9opUFMR5Q.gif?1755521559)
6. 글꼴 파일을 올리세요. 기기 또는 **미디어 저장소**에서 `.ttf`, `.otf`, `.woff`, `.woff2` 파일 중 하나를 고르면 돼요. 업로드가 끝나면 **Custom Fonts Modal**에서 알려 줘요.
7. 새 글꼴을 적용하세요. 올린 글꼴이 드롭다운에 나타나요. 글꼴을 선택한 뒤 필요에 따라 크기, 두께, 스타일을 조정하세요.

   ![드롭다운에서 새 글꼴을 선택해 적용하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051815647/original/deJ9w5MngZR24ORWAIPVXw8v9NzR2R2BmA.gif?1755521570)

오른쪽 패널의 구성은 [퍼널·웹사이트 빌더의 새 사이드바 사용하기](using-the-new-revamped-sidebar-in-funnel-website-builders.md)에서, 리치 텍스트 요소는 [퍼널·웹사이트에서 리치 텍스트 요소 사용하기](how-to-use-rich-text-elements-in-funnels-websites.md)에서 확인할 수 있어요. 글꼴 두께 설정은 [퍼널·웹사이트의 글꼴 두께](font-weight-in-funnels-and-websites.md)를 참고하세요.

## 자주 묻는 질문

### 실험실에 있는 커스텀 글꼴 지원은 어떻게 켜나요?
**에이전시 설정 > 실험실**로 이동해 **Custom Font Support for Funnels and Websites** 항목을 찾아 켜세요. <!-- 검토 필요: 원문 내용이 서로 다름 (적용 절차에서는 관리 클릭, FAQ에서는 토글 켜기) -->

### 어떤 파일 형식을 올릴 수 있나요?
하이퍼클래스는 `.ttf`, `.otf`, `.woff`, `.woff2` 형식을 지원해요.

### 같은 커스텀 글꼴을 퍼널과 웹사이트에서 모두 쓸 수 있나요?
네. 같은 서브 계정 안에서는 올린 글꼴을 퍼널과 웹사이트 어디에서든 쓸 수 있어요.

### 커스텀 글꼴을 적용하려면 CSS를 알아야 하나요?
아니요. 모든 작업을 빌더 안에서 처리하므로 별도 코드가 필요 없어요.

### 글꼴을 올렸는데 화면에 보이지 않아요. 무엇을 확인해야 하나요?
**타이포그래피** 패널에서 올바른 **글꼴 패밀리**를 적용했는지 확인하고, 브라우저 캐시를 지워 보세요. **미디어 저장소**에서 파일 이름을 바꾸지 않았는지도 확인하세요.

### 저장할 수 있는 글꼴 수에 제한이 있나요?
정해진 한도는 없어요. 다만 페이지가 더 빨리 열리도록 **미디어 저장소**를 정리하고 쓰지 않는 글꼴은 지우는 걸 권장해요.
