---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005208-how-to-create-qr-codes-manual-and-bulk
번역일: 2026-04-23
카테고리: surveys-forms-qr-codes-and-quizzes
---

# QR 코드 생성하기 (수동 및 일괄 생성)

## 개요

QR 코드는 사용자를 URL, 퍼널, 폼 및 기타 자산으로 빠르고 추적 가능한 방식으로 유도할 수 있는 도구입니다. Hyperclass에서는 QR 코드 생성을 위한 두 가지 방법을 제공합니다:

- 수동으로 하나씩 생성하기
- CSV 업로드를 이용한 일괄 생성

현재 일괄 업로드 기능은 URL 타입 QR 코드만 지원합니다. PAYMENT, WHATSAPP, FUNNEL, FORM, QUIZ, SURVEY 등의 추가 타입은 향후 출시될 예정입니다.

## 방법 1: 수동 QR 코드 생성

### 단계:

- 계정에서 Sites(사이트) > QR Codes(QR 코드)로 이동하세요.

- Create QR Code(QR 코드 생성) 버튼을 클릭하세요.
![QR 코드 생성 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047053447/original/uDyrG-uAcN9TOnBckDLwhlndBngXIv-KQw.png?1747904709)

- 필수 항목을 입력하세요:

Name(이름): 내부 사용을 위한 라벨

- Type(타입): URL, Funnel(퍼널), Form(폼) 등

- Destination(대상): 선택한 타입에 따라 결정됩니다
![QR 코드 설정 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047053727/original/GVbrpp1CJjs9Wmo0klar5uumGEGdMMEsyg.png?1747904873)

- 정리 목적으로 폴더를 선택하세요.

- Save(저장)를 클릭하여 QR 코드를 생성하세요.

### 언제 사용하나요:

- 소수의 QR 코드를 생성할 때
- 개별 QR 코드 설정을 커스터마이징해야 할 때
- URL 이외의 타입을 생성할 때 (현재는 수동 생성으로만 가능)

## 방법 2: CSV를 통한 QR 코드 일괄 업로드

일괄 업로드 기능을 사용하면 적절하게 포맷된 CSV 파일을 업로드하여 여러 개의 URL 타입 QR 코드를 한 번에 생성할 수 있습니다.

### 업로드 방법

- Sites(사이트) > QR Codes(QR 코드)로 이동하세요.

- 툴바에서 Bulk Upload(일괄 업로드) 버튼을 클릭하세요.
![일괄 업로드 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047054380/original/dwQaJWx44-fe-PVYgPK20c_Q-AJTIOaXQA.png?1747905391)

- 모달창이 열리면 CSV 파일을 선택하세요.
![CSV 파일 선택 모달](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047054438/original/ztcA_R5Gc3JTtJHsasbNSWUK55JhbGNSug.png?1747905439)

- QR 코드가 생성될 대상 폴더를 선택하세요.

- Upload(업로드)를 클릭하여 검증 과정을 시작하세요.
![업로드 검증 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047054593/original/UWzNCWTfEUi7ZxvrHmbt4jcx02mfhhKL2A.png?1747905517)

### CSV 파일의 필수 컬럼

- **name**
  - 목적: QR 코드를 식별할 수 있는 사람이 읽기 쉬운 이름
  - 필수: 예
  - 참고: 공백일 수 없으며, 폴더 내에서 고유한 이름이 이상적이지만 기술적으로 강제하지는 않습니다.

- **url**
  - 목적: QR 코드가 리다이렉트될 대상 URL
  - 필수: 예
  - 참고: 유효한 URL 형식이어야 합니다 (예: http:// 또는 https://로 시작). 잘못된 형식이거나 누락된 항목이 있으면 안 됩니다.

### CSV 구조 예시
```
name,url
```

---
*원문 최종 수정: 2025년 5월 22일*
*Hyperclass 사용 가이드 — hyperclass.ai*