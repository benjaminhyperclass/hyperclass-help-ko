---

번역일: 2026-04-08
카테고리: 38-인증서 > 수료증 발행
---

# 퀴즈나 과제 통과 시 수료증 자동 발송하는 방법

강의에서 학습자가 퀴즈나 과제를 완료(통과)하면 자동으로 수료증을 발급할 수 있습니다. 워크플로우 빌더(Workflow Builder)를 사용해서 이 기능을 설정하는 방법을 알아보세요.

## **✅ 개요**

이 가이드는 사용자가 강의 내 특정 퀴즈나 과제를 완료했을 때 수료증 발급을 자동으로 실행하는 자동화 설정 방법을 안내합니다. 레슨 완료(Lesson Completed) 트리거에 필터를 적용한 후 수료증 발행(Issue Certificate) 액션을 추가하는 방식으로 구현합니다.

## **⚙️ 단계별 설정 방법**

### 1. 트리거 추가하기

- 워크플로우에서 **트리거 추가(Add Trigger)**를 클릭합니다.
- **레슨 완료(Lesson Completed)**를 선택합니다.

### 2. 필터 적용하기

의도한 퀴즈나 과제에서만 수료증이 발급되도록 다음 필터를 적용합니다:

- **상품(Product)** → 해당 강의(Course)를 선택
- **카테고리(Category)** → 퀴즈가 속한 모듈/섹션을 선택
- **레슨(Lesson)** → 특정 퀴즈 또는 과제를 선택

![퀴즈 완료 시 수료증 발급 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045390455/original/JevTlikxKazOvO52lQRAAAmCcLPSu-vshg.png?1745233503)

### 3. 수료증 액션 추가하기

- 트리거 아래 **+ 아이콘**을 클릭합니다.
- 액션 목록에서 **수료증 발행(Issue Certificate)**을 선택합니다.
- 원하는 **수료증 템플릿(Certificate Template)**을 선택합니다.

설정 완료! 이제 선택한 퀴즈/과제를 통과하면 시스템이 자동으로 수료증을 발송합니다.

---
*원문 최종 수정: Thu, 29 May, 2025 at 10:22 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*