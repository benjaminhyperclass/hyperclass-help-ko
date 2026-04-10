---

번역일: 2026-04-08
카테고리: 13-AI-Employee > Conversation AI - Training Bots
---

# 웹 URL과 링크

### 

이 가이드에서는 웹 URL을 활용한 봇 훈련에 대해 자세히 알아보고, 염두에 둬야 할 주요 사항들을 설명해 드리겠습니다.

### 커뮤니티 튜토리얼 영상

[https://youtu.be/y4E2xP0rdP4](https://youtu.be/y4E2xP0rdP4)

[https://youtu.be/ZHFejfhBf0E](https://youtu.be/ZHFejfhBf0E)

[https://youtu.be/ypI60Z80K9c](https://youtu.be/ypI60Z80K9c)

[https://youtu.be/BDYSJsB8QrU](https://youtu.be/BDYSJsB8QrU)

---

목차

- [웹 URL을 사용한 봇 훈련 단계](#웹-url을-사용한-봇-훈련-단계)
- [URL 크롤링 모드](#url-크롤링-모드)[정확한 URL](#정확한-url)
- [이 도메인의 모든 URL](#이-도메인의-모든-url)
- [이 경로의 모든 URL](#이-경로의-모든-url)
- [업로드된 링크 테이블](#업로드된-링크-테이블)
---

## 웹 URL을 사용한 봇 훈련 단계

- "Bot Training(봇 훈련)"으로 이동합니다

- 전체 URL(https:// 포함)을 입력하고 세 가지 웹 크롤링 모드 중 하나를 선택합니다(아래에서 설명)

- URL이 수집되고 크롤링될 때까지 기다립니다

- URL들을 선택하고 "Train Bot(봇 훈련)" 버튼을 클릭합니다

- 각 URL이 훈련되고 상태와 함께 아래 테이블에 추가됩니다 (봇을 사용하기 전에 모든 URL의 훈련이 완료될 때까지 기다리세요)

**URL 제한 (지식 베이스(Knowledge Base)당): **하나의 지식 베이스에서 최대 4,000개의 웹 URL을 훈련할 수 있습니다.
---

## **URL 크롤링 모드**

### 정확한 URL

정밀한 훈련을 위해 권장하는 옵션입니다. 정확한 URL 방식을 사용하면, 봇이 제공된 정확한 URL만 크롤링하여 스스로를 훈련시킵니다.

단계:

- "Exact URL(정확한 URL)" 옵션을 선택합니다

- 크롤링하려는 URL을 입력하고 "Get Data(데이터 가져오기)"를 클릭합니다

- URL이 크롤링되고 봇이 해당 내용으로 훈련된 후 업로드된 링크 테이블에 추가됩니다

### 이 도메인의 모든 URL

특정 도메인에서 더 광범위한 정보로 봇을 훈련시킵니다. 봇이 지정된 도메인의 모든 페이지와 링크를 크롤링하고, 훈련할 URL을 선택할 수 있는 옵션을 제공합니다.

단계:

- "All URLs in this domain(이 도메인의 모든 URL)" 옵션을 선택합니다

- URL을 입력하고 "Get Data(데이터 가져오기)"를 클릭합니다

- 페이지가 로딩될 때까지 기다린 후, 사용 가능한 URL 목록이 표시됩니다

- 봇 훈련에 적합한 페이지들을 선택하고 "Train Bot(봇 훈련)"을 클릭합니다

페이지 선택 시(위의 4단계) 두 개의 목록을 볼 수 있습니다:

- **New Pages(새 페이지) - **봇의 현재 훈련 데이터에 포함되지 않은 새로운 URL들입니다. 이를 선택하면 훈련 완료 후 "Uploaded Links(업로드된 링크)" 테이블에 추가됩니다

- **Existing Pages(기존 페이지) -** 이미 봇의 현재 훈련 데이터셋에 포함되어 있고 아래 "Uploaded Links(업로드된 링크)" 테이블에 표시되는 URL들입니다. 이를 선택하면 선택된 모든 URL이 새로 고침됩니다
            
![새 페이지와 기존 페이지 목록을 보여주는 인터페이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155011615831/original/RtzexZT_ROI8mnKWv5ijfP78o8KQ1Ydjfw.jpeg?1698850471)

### **이 경로의 모든 URL**

봇이 제공된 URL의 모든 페이지를 크롤링하고, 페이지 URL에 지정된 경로가 존재하는 페이지들 중에서 훈련할 페이지를 선택할 수 있게 해줍니다. 이후 단계는 "이 도메인의 모든 URL"과 동일합니다.

---

## 업로드된 링크 테이블

봇이 훈련된 모든 링크/URL은 업로드된 링크 테이블에서 확인할 수 있습니다. 훈련된 URL은 새로 고침(봇을 최신 정보로 다시 훈련) 또는 삭제(정보가 봇의 지식 베이스에서 제거됨)할 수 있습니다.

각 URL은 다음 3가지 상태 중 하나를 가집니다:

- **Getting Data(데이터 가져오는 중)** - 봇이 이 URL에 대해 다시 훈련 중입니다. 즉, URL의 정보가 새로 고침되고 있습니다

- **Trained(훈련 완료)** - 봇이 이 URL에서 성공적으로 학습했습니다. "Last data refreshed at(마지막 데이터 새로 고침 시간)"도 표시되어 데이터 새로 고침이 필요한지 확인할 수 있습니다

- **Failed(실패)** - 봇이 이 URL에 대한 훈련에 실패했습니다. 새로 고침 후 다시 시도하거나 URL을 삭제할 수 있습니다

![업로드된 링크 테이블의 상태를 보여주는 인터페이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155018185343/original/0Ezttsmj0wxLUwmhLRERaaQtIXKU-Uyc_Q.png?1705664441)

URL들은 업로드된 링크 테이블에 즉시 추가되지 않습니다. 봇을 사용하기 전에 모든 URL이 테이블에 나타날 때까지 기다리세요.

간결하고 관련성 높은 데이터를 유지하면 봇의 성능이 크게 향상됩니다. 더 나은 응답을 위해 업로드된 링크 테이블에서 오래된 URL을 정기적으로 검토하고 제거하세요.

---
*원문 최종 수정: Tue, 3 Feb, 2026 at  1:15 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*