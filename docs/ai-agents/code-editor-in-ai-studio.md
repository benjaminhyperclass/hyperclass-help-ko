---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000007725-code-editor-in-ai-studio
번역일: 2026-04-23
카테고리: ai-agents
---

# AI Studio의 코드 에디터

AI Studio의 코드 에디터(Code Editor)는 빌더에서 벗어나지 않고도 프로젝트 코드에 직접 접근할 수 있게 해줍니다. 파일을 편집하고, 프로젝트 전체를 검색하고, 문제를 빠르게 파악하고, 한 작업공간에서 실시간으로 변경사항을 확인할 수 있어요. 프로젝트를 더 세밀하게 제어해야 할 때 AI가 생성한 결과물에서 수동 정교 작업으로 쉽게 넘어갈 수 있습니다.

**중요:** AI Studio는 **Labs** 기능으로 제공됩니다. 사용하기 전에 먼저 활성화해 주세요.

---

## AI Studio의 코드 에디터란 무엇인가요?

AI Studio 코드 에디터는 AI Studio 빌더 내에 내장된 CodeMirror 기반의 코딩 환경입니다. AI가 생성한 웹사이트와 웹앱의 코드를 직접 확인, 편집, 관리할 수 있으며, 외부 IDE나 별도의 배포 단계가 필요하지 않아요! AI Studio는 프롬프트(아이디어, URL, 참조 디자인)로부터 작동하는 프로젝트를 생성하고, 코드 에디터는 TypeScript, JSX, CSS, JSON 및 기타 파일들을 정밀하게 제어할 수 있게 해줍니다.

AI Studio 코드 에디터로 구축하는 곳에서 바로 반복 작업을 할 수 있어요. 코드를 편집하고, 실시간 미리보기에서 즉시 업데이트를 확인하고, AI를 사용해 문제를 진단하고 수정할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069244414/original/kXx5ghVAJEdslDIL51SfyszTE62qT88bLw.jpeg?1776277305)

---

## 코드 에디터의 주요 장점

- **더 많은 제어권 확보**: AI 편집만으로는 부족한 정밀함이 필요할 때 코드 레벨에서 직접 업데이트할 수 있어요.

- **세밀한 변경**: 전체 프로젝트를 다시 작업하지 않고도 특정 텍스트, 스타일링, 컴포넌트, 라우트 또는 파일 동작을 조정할 수 있습니다.

- **컨텍스트 전환 없음**: 파일을 다운로드하거나 플랫폼을 벗어나지 않고도 AI Studio에서 직접 코드를 편집해요.

- **빠른 디버깅**: 오류가 나타나자마자 확인하고 AI 기반 "수정 시도" 기능으로 제안된 수정사항을 생성할 수 있습니다.

- **안전한 실험**: 내장된 버전 기록을 활용해 언제든지 변경사항을 미리보고, 북마크하고, 롤백할 수 있어요.

- **스마트한 네비게이션**: 찾기 및 바꾸기와 전역 프로젝트 검색을 사용해 올바른 파일, 라인 또는 컴포넌트로 즉시 이동할 수 있습니다.

---

## AI Studio 코드 에디터의 핵심 기능

코드 에디터는 프로젝트 파일 검색, 변경사항 검토, 조기 오류 감지, 그리고 더 안정적인 업데이트 관리를 쉽게 만드는 여러 내장 도구를 포함하고 있어요. 이러한 기능들이 함께 작동하여 빠른 수정부터 고급 코드 변경까지 더 원활한 편집 경험을 지원합니다.

### 찾기 및 바꾸기

찾기 및 바꾸기는 에디터 스타일 검색 경험을 사용해 현재 파일 내에서 텍스트를 빠르게 찾고 업데이트하는데 도움을 줘요. 컴포넌트 이름을 바꾸거나, 하드코딩된 텍스트를 업데이트하거나, 변수명을 일관되게 리팩토링해야 할 때 특히 유용합니다.

찾기 및 바꾸기로 할 수 있는 것:

- Cmd/Ctrl + F로 찾기 및 바꾸기를 열어 VS Code 스타일 검색 경험으로 현재 파일 내에서 검색

- 검색어를 입력하면 파일 내 모든 일치하는 항목이 강조표시됨

- 대소문자 구분 및 단어 전체 옵션으로 실수로 부분 일치하는 것 방지

- 일치하는 항목을 하나씩 바꾸거나 일괄 바꾸기 적용

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069155110/original/YzF2pYCCrDLG_SK1t1GPORBzb0RtjNbYrg.png?1776200685)

### 전역 프로젝트 검색

전역 프로젝트 검색을 사용하면 현재 열린 파일뿐만 아니라 전체 AI Studio 프로젝트에서 검색할 수 있어요. 대규모 프로젝트에서 작업할 때 수동으로 파일을 열어야 하는 시간을 줄여줍니다.

전역 프로젝트 검색의 기능:

- 각 일치 항목이 해당 파일 아래에 그룹화된 프로젝트 전체 검색 결과

- 관련 라인을 빠르게 스캔할 수 있도록 일치 항목 강조표시

- 각 결과의 라인 번호로 파일 내 위치를 쉽게 파악

- 원클릭 네비게이션으로 코드 에디터의 일치하는 파일과 라인으로 직접 이동

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069155134/original/8jx3p1F16SVGzI6A-XMYJjHhzGdvend0TA.png?1776200766)

### 즉시 저장 및 실시간 미리보기

즉시 저장 및 실시간 미리보기는 작업하면서 변경사항을 빠르게 검토할 수 있게 도와줘요. 변경사항을 커밋하고 별도의 배포 단계를 기다리는 대신, 코드를 업데이트하고 빌더의 미리보기에서 즉시 효과를 볼 수 있습니다.

빌더에서 **저장** 버튼을 클릭하면 몇 초 내에 실시간 미리보기가 업데이트돼요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069244525/original/sQhSl1TN8X1ayqif66HIoLUYiPqfVz9INA.jpeg?1776277492)

### 스마트 오류 감지

스마트 오류 감지는 코드 에디터에서 작업하는 동안 빌드 문제를 빠르게 포착하는데 도움을 줘요. AI Studio를 떠나서 다른 곳에서 오류를 해결하는 대신, 채팅에서 실패한 빌드를 바로 검토하고 AI를 사용해 즉시 수정을 시도할 수 있습니다. 이를 통해 오류 감지부터 해결까지 더 빠른 경로를 제공하고 편집 워크플로우를 계속 진행할 수 있게 해줘요.

스마트 오류 감지 사용법:

- **빌드 오류 검토 및 AI 수정 시작**
코드 변경사항을 저장한 후 채팅에 "Code edited with Build unsuccessful"이라는 오류가 나타날 수 있어요.

Details(세부사항)를 클릭해 빌드 오류를 검토한 다음 Try to fix(수정 시도)를 클릭하면 AI가 문제를 분석하고 수정을 시도합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069245598/original/sZh2bMgMFY9pzMsYIe23CI5qmxQQpSAWmw.jpeg?1776279247)

- **AI 수정사항 검토 및 결과 미리보기**
AI가 오류를 식별하고 코드를 업데이트한 다음 수정된 내용을 설명하는 후속 메시지를 게시해요.

Details(세부사항)를 클릭해 업데이트된 정보를 검토하거나 Preview(미리보기)를 클릭해 미리보기를 새로고침하여 수정이 제대로 작동했는지 확인할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069245620/original/D7Abi3hNI3NozNG0ZHB5E4KrVHwW2YOByw.jpeg?1776279285)

### 자동 라우트 감지

자동 라우트 감지는 코드에서 새 라우트를 추가할 때 프로젝트 구조를 체계적으로 유지하는데 도움을 줘요. 수동 후속 작업을 줄이고 프로젝트 내 네비게이션을 더 쉽게 관리할 수 있게 합니다. 코드에서 새 라우트가 생성되면 라우트 선택기에 자동으로 나타나요.

### 버전 기록

버전 기록은 프로젝트의 이전 상태를 보존하여 더 안전한 편집 워크플로우를 제공해요. 변경사항을 검토하고, 업데이트를 비교하고, 처음부터 다시 시작하지 않고도 실수를 복구할 수 있게 합니다. 코드를 저장할 때마다 새 버전이 생성돼요.

버전 기록에 접근하려면 빌더 상단의 **시계** 아이콘을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069232991/original/85ABgYZVaAnnGsNjO4wHQg9bNTQSNoyAsg.png?1776268007)

### 미저장 변경사항 보호

AI Studio는 저장하지 않은 코드 변경사항이 있을 때 떠나기 전에 경고를 표시하여 작업 손실을 방지해요. 저장하지 않은 코드 변경사항이 있는 상태에서 나가려고 하면 경고 팝업이 나타나 나가기 전에 작업을 저장할 수 있게 합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069155186/original/1iZJJiswl1Eo2QPR4FntitUrOJvtHCM0tw.png?1776200857)

---

## 코드 에디터 사용 방법

AI Studio 코드 에디터 사용은 AI가 생성한 프로젝트에서 시작하여 해당 프로젝트의 외관과 동작을 더 세밀하게 제어할 수 있게 해줘요. 프로젝트가 생성되면 Code(코드) 영역을 열어 직접 업데이트하고, 미리보기에서 검토하고, 모든 준비가 완료되면 발행할 수 있습니다.

코드 에디터 시작을 위한 단계별 안내:

#### 1단계: 코드 에디터 열기

업데이트할 AI Studio 프로젝트를 여세요. 프로젝트 작업공간에서 Code(코드)를 클릭하여 코드 에디터에 접근하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069245850/original/aONKKuT8FuJSJGUDd5emU_x3S6VkHHmGlw.jpeg?1776279699)

#### 2단계: 파일 선택 및 코드 업데이트

파일 트리에서 편집할 파일을 열고, 에디터에서 직접 코드를 변경하세요. 올바른 콘텐츠나 파일을 찾는데 도움이 필요하면 찾기 및 바꾸기 또는 전역 프로젝트 검색을 사용하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069245929/original/s6l_cdmVjN1HH-qyIWFb7wEVsQWCYCaXXQ.jpeg?1776279888)

#### 3단계: 변경사항 저장

Save(저장)를 클릭하여 업데이트를 적용하고 최신 미리보기를 새로고침하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069245951/original/sA-rZ8LWNLqZTLL9lR6t3ga5mB4WtiosWg.jpeg?1776279918)

#### 4단계: 미리보기 검토 및 오류 수정

콘텐츠, 레이아웃, 기능이 예상대로 나타나는지 미리보기를 확인하세요.

저장 후 빌드 오류가 나타나면 Details(세부사항)를 클릭해 문제를 검토한 다음 Try to fix(수정 시도)를 클릭하여 AI가 수정을 시도하도록 하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069245974/original/sB3zbuetxMS-OLBc28ujFADehYHy-QbtLQ.jpeg?1776279955)

#### 5단계: 프로젝트 발행

변경사항이 올바르게 보이고 프로젝트가 준비되면, 프로젝트를 발행하여 업데이트를 실제로 적용하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069246094/original/5v01VBaFlFmXZAbsxIs6YDhwvMvonL6k4Q.jpeg?1776280197)

---

## 자주 묻는 질문

**Q: AI Studio를 활용하려면 반드시 코드 에디터를 사용해야 하나요?**

아니에요. AI Studio는 수동 코딩 없이도 프롬프트만으로 완전한 페이지와 플로우를 생성할 수 있습니다. 코드 에디터는 채팅과 시각적 빌더가 제공하는 것 이상으로 레이아웃, 스타일링, 로직 또는 연동에 대한 더 깊은 제어를 원하는 사용자를 위한 것이에요.

**Q: AI Studio 코드 에디터는 어떤 언어와 파일 형식을 지원하나요?**

코드 에디터는 CodeMirror 기반이며 AI Studio 내에서 사용되는 TypeScript, JSX, CSS, JSON 및 기타 텍스트 기반 프로젝트 파일 편집을 지원합니다.

**Q: 코드 에디터가 자동으로 작업을 저장하나요?**

코드 변경사항은 **저장** 버튼을 클릭할 때 저장됩니다. AI Studio는 저장하지 않은 코드 변경사항이 있을 때 나가기 전에 경고하여 작업 손실 위험을 줄여줘요.

**Q: 코드 에디터에서 편집하면 실제 공개 사이트에 즉시 영향을 주나요?**

아니에요. 저장하면 실시간 미리보기가 업데이트되지만 공개 사이트는 AI Studio 프로젝트를 발행해야 반영됩니다. 먼저 미리보기를 검토한 다음 변경사항을 실제 적용할 준비가 되었을 때 발행하세요.

---
*원문 최종 수정: Tue, 21 Apr, 2026 at 3:26 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*