---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000002345-kajabi-importer-easily-move-courses-to-the-platform
번역일: 2026-04-23
카테고리: membership-and-communities
---

# Kajabi 가져오기 도구로 강의를 쉽게 이전하기

Kajabi 가져오기 도구를 사용하면 Kajabi의 강의를 Courses(강의) 섹션으로 간단하게 이전할 수 있습니다. 이 가이드는 소중한 콘텐츠를 플랫폼으로 원활하게 이전할 수 있도록 단계별 안내를 제공합니다.

## 가져오기 도구 접속 방법

`Memberships(멤버십) → Courses(강의) → Products(상품) → Create Product(상품 만들기) → Import(가져오기)`로 이동하세요.

![Kajabi 가져오기 도구 접속](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025258246/original/c1w4cEUYQKoUPVZoKSj7uNDrMIag_8yX8g.png?1714412536)

## 모범 사례

- **커스텀 CSS 사용 제한**: 최적의 경험을 위해 커스텀 CSS 사용을 피하는 것이 좋습니다.
- **테마 백업 생성**: 필요한 경우 원래 설정으로 되돌릴 수 있도록 테마를 미리 백업해 두세요.
- **비업무 시간 이전**: 수강생이 강의를 이용하는 중에 발생할 수 있는 영향을 최소화하기 위해 비업무 시간에 이전 작업을 진행하세요.

## 강의 가져오기 단계

다음 단계에 따라 강의를 가져오세요:

### 1단계: 학습자 프로필 생성

- **학습자 프로필 생성**: 가져올 플랫폼에서 학습자 프로필을 생성합니다.
- **새 연락처 생성**: 시스템에서 제공한 이메일 ID를 사용하여 가져올 플랫폼 내에서 새 연락처를 생성하세요.
- **비밀번호 입력**: 생성 완료 후 강의 가져오기 화면으로 돌아가서 이전 단계에서 계정 생성 시 사용한 비밀번호를 입력합니다.
- **도메인 추가**: 도메인 필드에 학습자 도메인(학습자 로그인 자격 증명을 입력하는 도메인)을 추가합니다.
- **가져오기 실행**: "Import(가져오기)" 버튼을 클릭합니다.

### 2단계: 가져오기 과정

- 가져오기 과정이 시작되면 학습자 자격 증명을 통해 로그인하고 강의 가져오기를 시작합니다.
- 진행률이 표시되지만 정확한 상태를 확인하려면 "Refresh(새로고침)" 버튼을 클릭하세요.
- 가져오기 과정을 취소하려면 "Cancel(취소)" 버튼을 클릭합니다.
- 가져오는 동안 탭을 전환할 수 있지만 탭이나 창을 닫지는 마세요.
- 강의(및 레슨)의 모든 동영상, 이미지, 텍스트 콘텐츠가 이전됩니다.

**참고**: 발행된 레슨만 가져올 수 있습니다. 또한 과제, 퀴즈, 평가는 가져오기 과정에 포함되지 않습니다. Library(라이브러리)와 Product(상품) 섹션의 권장 테마는 각각 Encore Site와 Premier Product입니다.

![가져오기 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025258249/original/MbMX7qwvpugGtzhL_qBgf3CB9O9RNy2AIw.jpeg?1714412537)

![가져오기 진행률](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025258251/original/UOeKzleAn-GQCgbMapRzWWg1x7_ytlXcBQ.jpeg?1714412537)

### 3단계: 가져오기 완료

- 강의가 성공적으로 가져와지면 Products(상품) 섹션에 나타납니다.
- Import(가져오기) 섹션에서 마지막 업데이트 시간을 확인할 수 있으며, 마지막 처리가 언제 이루어졌는지 표시됩니다.

![가져오기 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025258250/original/IUNuraWWo5pcl1JmGTAoBDBNb1Vy5cGsrw.jpeg?1714412537)

## 자주 묻는 질문

**인증 오류는 왜 발생하나요?**

인증 오류는 추가한 도메인이나 자격 증명이 올바르지 않을 때 나타납니다. 이를 해결하려면 자격 증명을 다시 신중히 확인하고 올바른지 확인한 후 가져오기 과정을 시작하세요.

![인증 오류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025258248/original/9IgkSLRO1aDlVMSc46HRf1JsmDb8LbzKBg.jpeg?1714412537)

**"강의 가져오기 실패" 오류는 왜 발생하나요?**

가져오기 실패의 가능한 원인:
- **잘못된 테마**: 선택한 테마가 올바른지 확인하세요.
- **자격 증명 검증**: 제공한 자격 증명의 정확성을 다시 확인하세요.
- **유효한 도메인**: 제공한 도메인이 "/login" 경로와 호환되는지 확인하세요. 예를 들어 "도메인명/login"이 로그인 페이지로 연결되어야 합니다.
- **재시도 옵션**: 가져오기가 실패하면 "retry(재시도)"를 클릭하여 중단된 지점부터 과정을 재개할 수 있습니다.
- **취소 안내**: 사용자가 가져오기를 취소하면 사용자 취소로 간주되며, 새로운 가져오기는 처음부터 다시 시작됩니다.

![가져오기 실패 오류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025258247/original/PwnAq61KU4jVXLTYBObMRDriv5nyzq8hNQ.jpeg?1714412537)

---
*원문 최종 수정: Mon, 29 Apr, 2024 at 12:44 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*