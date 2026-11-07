---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007652-code-editor-in-the-ai-studio
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# AI 스튜디오 코드 편집기 사용하기

AI 스튜디오의 코드 편집기를 쓰면 빌더를 떠나지 않고 프로젝트 코드를 바로 수정할 수 있어요. 한 화면에서 파일 편집, 프로젝트 전체 검색, 오류 확인, 변경 내용 미리보기까지 할 수 있어서 AI가 만든 결과물을 직접 다듬고 싶을 때 편해요.

[동영상](https://www.youtube.com/embed/AIrfidqeUto?&wmode=opaque)

---

## AI 스튜디오의 코드 편집기란?

코드 편집기(Code Editor)는 AI 스튜디오 빌더 안에 들어 있는 CodeMirror 기반 코딩 환경이에요. AI가 만든 웹사이트와 웹 앱의 코드를 하이퍼클래스 안에서 바로 보고, 수정하고, 관리할 수 있어요. 외부 IDE나 별도 배포 과정은 필요 없어요.

AI 스튜디오는 아이디어, URL, 참고 디자인 같은 프롬프트로 작동하는 프로젝트를 만들어 줘요. 코드 편집기에서는 그 화면을 구성하는 TypeScript, JSX, CSS, JSON 같은 파일을 직접 세밀하게 다룰 수 있어요.

작업하던 자리에서 코드를 수정하고, 실시간 미리보기에서 바로 결과를 확인하세요. 오류가 나면 AI에게 원인 파악과 수정을 맡길 수도 있어요.

![코드 편집기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069244414/original/kXx5ghVAJEdslDIL51SfyszTE62qT88bLw.jpeg?1776277305)

---

## 코드 편집기의 장점

- 더 세밀한 제어: AI 편집만으로 부족할 때 코드를 직접 고쳐 더 정확하게 수정할 수 있어요.
- 부분 수정: 프로젝트 전체를 다시 만들지 않고 특정 텍스트, 스타일, 구성 요소, 경로, 파일 동작만 조정할 수 있어요.
- 화면 전환 없는 편집: 파일을 내려받거나 플랫폼을 벗어나지 않고 AI 스튜디오 안에서 바로 코드를 편집해요.
- 빠른 디버깅: 오류가 생기면 바로 확인하고, AI 기반 **Try to fix**(수정 시도)로 수정 제안을 받을 수 있어요.
- 안전한 시도: 기본 제공되는 버전 기록으로 변경 내용을 미리 보고, 북마크하고, 이전 상태로 되돌릴 수 있어요.
- 빠른 이동: **Find & Replace**(찾기 및 바꾸기)와 **Global Project Search**(프로젝트 전체 검색)로 원하는 파일, 줄, 구성 요소로 바로 이동할 수 있어요.

---

## 코드 편집기의 주요 기능

코드 편집기에는 프로젝트 파일 검색, 변경 내용 확인, 오류 조기 발견, 업데이트 관리를 도와주는 기능이 들어 있어요. 간단한 수정부터 복잡한 코드 변경까지 편하게 작업할 수 있어요.

### Find & Replace(찾기 및 바꾸기)

**Find & Replace**를 쓰면 현재 열려 있는 파일 안에서 텍스트를 빠르게 찾아 바꿀 수 있어요. 구성 요소 이름을 바꾸거나, 코드에 직접 적힌 문구를 수정하거나, 변수 이름을 한꺼번에 정리할 때 특히 유용해요.

**Find & Replace**로 할 수 있는 일은 다음과 같아요.

- **Cmd/Ctrl + F**를 눌러 열면 VS Code와 같은 방식으로 현재 파일 안에서 검색해요.
- 검색어를 입력하면 파일에서 일치하는 부분이 모두 강조돼요.
- 대소문자 구분과 전체 단어 일치 옵션으로, 의도하지 않은 부분 일치를 막을 수 있어요.
- 일치하는 항목을 하나씩 바꾸거나 한 번에 모두 바꿀 수 있어요.

![Find & Replace 검색 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069155110/original/YzF2pYCCrDLG_SK1t1GPORBzb0RtjNbYrg.png?1776200685)

### Global Project Search(프로젝트 전체 검색)

**Global Project Search**를 쓰면 열려 있는 파일뿐 아니라 AI 스튜디오 프로젝트 전체에서 검색할 수 있어요. 규모가 큰 프로젝트에서도 파일을 일일이 열어 볼 필요가 줄어들어요.

**Global Project Search**에서는 다음을 볼 수 있어요.

- 프로젝트 전체 검색 결과가 파일별로 묶여 표시돼요.
- 프로젝트 파일에서 아직 저장하지 않은 변경사항도 검색 결과에 포함돼요. 최근 수정을 저장하기 전에도 일치하는 내용을 찾을 수 있어요.
- 일치하는 부분이 강조되어 관련 줄을 빠르게 훑어볼 수 있어요.
- 결과마다 줄 번호가 표시되어 파일에서 위치를 쉽게 파악할 수 있어요.
- 결과를 한 번 클릭하면 코드 편집기에서 해당 파일과 줄로 바로 이동해요.

![프로젝트 전체 검색 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069155134/original/8jx3p1F16SVGzI6A-XMYJjHhzGdvend0TA.png?1776200766)

![파일별로 묶인 검색 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079921974/original/NrL0o618YJr2s98pylFR-GSX9o1GE_1qig.png?1788357519)

### 즉시 저장 및 실시간 미리보기

작업하면서 변경 내용을 바로 확인할 수 있어요. 변경 내용을 커밋하고 별도 배포를 기다릴 필요 없이, 코드를 수정하면 빌더의 미리보기에서 결과를 바로 볼 수 있어요.

빌더에서 **저장** 버튼을 클릭하면 몇 초 안에 **실시간 미리보기**가 업데이트돼요.

![저장 버튼과 실시간 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069244525/original/sQhSl1TN8X1ayqif66HIoLUYiPqfVz9INA.jpeg?1776277492)

### 스마트 오류 감지

코드를 수정하다가 빌드나 미리보기 시작에 문제가 생기면 이를 감지해 줘요. 프로젝트 변경 때문에 미리보기가 정상적으로 시작되지 않으면 AI 스튜디오가 채팅에 빌드 오류를 보여 줘요. 내용을 확인한 뒤 **Try to fix**로 수정을 시도할 수 있어요.

더 깊은 확인이 필요하면, AI 스튜디오가 실행 중인 프로젝트를 직접 살펴보고 실제 동작을 테스트한 뒤 무엇을 바꿀지 판단하기도 해요. 그러면 코드 문제인지, 오래된 미리보기나 사용할 수 없는 외부 리소스 같은 다른 문제인지 구분하는 데 도움이 돼요.

수정을 적용한 뒤에는 AI 스튜디오가 프로젝트를 다시 확인해 문제가 해결됐는지 검증할 수 있어요.

스마트 오류 감지를 사용하는 방법은 다음과 같아요.

1. 빌드 오류를 확인하고 AI 수정 시작하기

   코드 변경 때문에 빌드나 실시간 미리보기가 실패하면 채팅에 **Build unsuccessful**(빌드 실패) 메시지가 나타나요.

   **상세 정보**를 클릭해 오류를 확인한 다음, **Try to fix**를 클릭하세요. AI가 문제를 분석하고 수정을 시도해요.

   ![빌드 실패 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069245598/original/sZh2bMgMFY9pzMsYIe23CI5qmxQQpSAWmw.jpeg?1776279247)

   ![오류 상세 정보와 수정 시도 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080877713/original/Qt7pTyeDYCWUQy-ASD_34dkgGoFk5IMlpA.png?1789393439)

2. AI 수정 내용과 다시 빌드된 미리보기 확인하기

   AI가 오류를 분석하고 프로젝트 파일을 수정한 뒤, 수정 내용을 설명하는 메시지를 남겨요.

   수정이 성공하면 AI 스튜디오가 업데이트된 프로젝트 파일로 미리보기를 자동으로 다시 빌드해요.

   새로 고쳐진 미리보기에서 문제가 해결됐는지 확인하세요.

   ![수정 후 다시 빌드된 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069245620/original/D7Abi3hNI3NozNG0ZHB5E4KrVHwW2YOByw.jpeg?1776279285)

### 경로 자동 감지

코드에서 새 경로를 추가하면 프로젝트 구조가 자동으로 정리돼요. 직접 따로 챙길 일이 줄고, 프로젝트 안의 이동 경로를 관리하기도 쉬워져요. 코드에서 새 경로를 만들면 **route selector**(경로 선택기)에 자동으로 나타나요.

### 버전 기록

**버전 기록**은 프로젝트의 이전 상태를 보관해서 더 안전하게 편집할 수 있게 해 줘요. 변경 내용을 살펴보고, 업데이트를 비교하고, 실수했을 때 처음부터 다시 하지 않고 복구할 수 있어요. 코드를 저장할 때마다 새 버전이 만들어져요.

**버전 기록**을 열려면 빌더 상단의 **시계** 아이콘을 클릭하세요.

![빌더 상단의 시계 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069232991/original/85ABgYZVaAnnGsNjO4wHQg9bNTQSNoyAsg.png?1776268007)

### 저장되지 않은 변경사항 보호

저장하지 않은 코드 변경사항이 있는 채로 나가려고 하면 AI 스튜디오가 경고해 줘요. 작업 내용을 잃어버리지 않도록, 나가기 전에 저장할 수 있게 경고창이 나타나요.

![저장되지 않은 변경사항 경고창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069155186/original/1iZJJiswl1Eo2QPR4FntitUrOJvtHCM0tw.png?1776200857)

---

## 코드 편집기 사용 방법

AI가 만든 프로젝트에서 시작해서, 프로젝트의 모양과 동작을 더 세밀하게 조정할 수 있어요. 프로젝트를 만든 뒤 **코드** 영역을 열어 코드를 직접 수정하고, 미리보기에서 확인한 다음, 준비가 되면 게시하면 돼요.

다음 단계를 따라 코드 편집기를 시작해 보세요.

#### 1단계: 코드 편집기 열기

수정할 AI 스튜디오 프로젝트를 여세요. 프로젝트 작업 화면에서 **코드**를 클릭하면 코드 편집기가 열려요.

![코드 편집기 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069245850/original/aONKKuT8FuJSJGUDd5emU_x3S6VkHHmGlw.jpeg?1776279699)

#### 2단계: 파일을 선택하고 코드 수정하기

파일 트리에서 수정할 파일을 열고, 편집기에서 코드를 직접 수정하세요. 알맞은 내용이나 파일을 찾기 어렵다면 **Find & Replace** 또는 **Global Project Search**를 사용하세요.

![파일 선택 후 코드 수정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069245929/original/s6l_cdmVjN1HH-qyIWFb7wEVsQWCYCaXXQ.jpeg?1776279888)

#### 3단계: 변경사항 저장

**저장**을 클릭하면 수정 내용이 적용되고 미리보기가 최신 상태로 새로 고쳐져요.

![저장 버튼 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069245951/original/sA-rZ8LWNLqZTLL9lR6t3ga5mB4WtiosWg.jpeg?1776279918)

#### 4단계: 미리보기를 확인하고 오류 수정하기

미리보기에서 내용, 레이아웃, 기능이 의도한 대로 보이는지 확인하세요.

저장한 뒤 빌드 오류가 나타나면 **상세 정보**를 클릭해 문제를 확인하고, **Try to fix**를 클릭해 AI가 수정을 시도하게 하세요.

AI가 문제를 성공적으로 고치면, AI 스튜디오가 업데이트된 프로젝트 파일로 미리보기를 자동으로 다시 빌드해요. 결과를 확인해 보세요.

![미리보기 확인과 오류 수정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069245974/original/sB3zbuetxMS-OLBc28ujFADehYHy-QbtLQ.jpeg?1776279955)

#### 5단계: 프로젝트 게시

변경 내용이 올바르고 프로젝트가 준비되었다면 프로젝트를 게시해서 업데이트를 실제로 반영하세요.

자세한 내용은 [AI 스튜디오 프로젝트 게시하기](ai-studio-in-hyperclass.md)를 참고하세요.

![프로젝트 게시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069246094/original/5v01VBaFlFmXZAbsxIs6YDhwvMvonL6k4Q.jpeg?1776280197)

---

## 자주 묻는 질문

### AI 스튜디오를 쓰려면 꼭 코드 편집기를 사용해야 하나요?
아니요. AI 스튜디오는 프롬프트만으로 완성된 페이지와 흐름을 만들 수 있어서 직접 코딩하지 않아도 돼요. 코드 편집기는 채팅과 비주얼 빌더로는 부족해서, 레이아웃, 스타일, 로직, 연동을 더 세밀하게 제어하고 싶은 분을 위한 기능이에요.

### AI 스튜디오 코드 편집기는 어떤 언어와 파일 형식을 지원하나요?
코드 편집기는 CodeMirror 기반이며, TypeScript, JSX, CSS, JSON과 AI 스튜디오에서 쓰는 그 밖의 텍스트 기반 프로젝트 파일을 편집할 수 있어요.

### 코드 편집기에서 작업 내용이 자동으로 저장되나요?
코드 변경 내용은 **저장**을 클릭할 때 저장돼요. 저장하지 않은 코드 변경사항이 있는 채로 나가려고 하면 AI 스튜디오가 경고해 줘서 작업 내용을 잃을 위험을 줄여 줘요.

### 코드 편집기에서 수정하면 공개된 사이트에도 바로 반영되나요?
아니요. 저장하면 실시간 미리보기만 업데이트돼요. 공개 사이트에는 AI 스튜디오 프로젝트를 게시해야 반영돼요. 먼저 미리보기에서 확인하고, 변경 내용을 실제로 반영할 준비가 되면 게시하세요.
