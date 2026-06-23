---

번역일: 2026-04-07
카테고리: 11-설정 > 사용자-설정
---

# 에이전시 | 사용자 역할 및 권한 관리

이 문서에서는 에이전시 관리자로서 다양한 모듈에 걸쳐 사용자 권한을 세부적으로 관리하는 방법을 설명합니다.

하위 계정의 사용자 역할 및 권한 관리를 찾고 있다면 [여기를 클릭](https://hyperclass.gitbook.io/hyperclass-docs)하세요.

---

**목차**

- [사용자 권한 시작하기](#사용자-권한-시작하기)
- [특정 하위 계정 접근 제한](#특정-하위-계정-접근-제한)
- [권한 할당](#권한-할당)
- [하위 계정 설정 (세부 권한)](#하위-계정-설정-세부-권한)
- [사용자의 새 하위 계정 생성 차단하기](#사용자의-새-하위-계정-생성-차단하기)
- [권한 복사](#권한-복사)
- [제한된 접근 권한으로 하위 계정에 클라이언트 추가하기](#제한된-접근-권한으로-하위-계정에-클라이언트-추가하기)

---

## **사용자 권한 시작하기**

에이전시의 사용자 권한을 관리하려면:

- `Settings(설정) → Team(팀)`으로 이동합니다.

- 권한을 편집하려는 사용자의 편집 아이콘을 클릭합니다.

- 좌측 메뉴에서 'Roles & Permissions(역할 및 권한)'를 클릭합니다.

![사용자 권한 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026865628/original/BIeUlcgWTOiqm_s5wgPmAhHrpgDOQiFRyQ.png?1717089781)

**사용자 유형 및 역할 할당**

- **User Type(사용자 유형):** 에이전시용 사용자를 생성할지 특정 하위 계정용 사용자를 생성할지 선택합니다.

- **Role(역할):** 사용자가 관리자인지 일반 사용자인지 선택합니다.

![사용자 유형 및 역할 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026866161/original/L4pyvb10NHxDX0TqHt0HUzQCZ-jA5O_nAQ.png?1717090628)

---

## **특정 하위 계정 접근 제한**

에이전시 관리자는 에이전시 관리자를 특정 하위 계정에만 할당하고, 배정되지 않은 다른 하위 계정에는 접근하지 못하도록 제한할 수 있습니다.

예를 들어, Alex는 에이전시 관리자로서 배정된 '78th Avenue'와 'A Mailbox NYC' 하위 계정에만 접근할 수 있고, 그의 접근 레벨에는 영향을 주지 않습니다. 하지만 배정되지 않은 'Baker's Inn'에는 접근할 수 없습니다.

![하위 계정 접근 제한](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026866455/original/2hrhbQi3FqZCKQSioFjdpE2zjHwpzlnsxg.png?1717091062)

---

## 권한 할당

에이전시 관리자는 사용자에게 세부적인 권한을 적용할 수 있습니다. 두 가지 레벨에서 권한을 제어할 수 있습니다:

- **모듈:** 모듈을 끄면 해당 모듈에 대한 접근을 완전히 제한할 수 있습니다.

- **세부 권한:** 체크박스를 사용하여 세부적인 레벨에서 권한을 설정할 수 있습니다.

새로운 권한 구조는 기존의 권한 구조 및 기능과 하위 호환됩니다.

![권한 할당 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026866995/original/wHgxSKpmW_V8nxtvGy7uFLoDt4xjPVn45Q.png?1717091841)

**각 권한의 의미:**

- **AI Agents(AI 에이전트):** 음성/채팅 AI 에이전트 구축/관리, 학습, 통화 로그, 요약
- **Account Settings(계정 설정):** 하위 계정의 비즈니스 정보, 시간대, 도메인, 브랜딩 및 기타 로컬 설정 편집
- **Account Tools(계정 도구):** 가져오기/내보내기, URL 리다이렉트 또는 계정 내 기타 관리 도구
- **Automation(자동화):** 워크플로우/트리거 생성 및 편집; 자동화 시작/중지; 로그 보기
- **Blogs(블로그):** 게시글, 카테고리, 작성자 생성; 블로그 설정 관리
- **Calendars(캘린더):** 캘린더 생성, 사용자 배정, 예약 가능 시간 설정, 라운드 로빈 규칙 및 예약 유형
- **Certificates(수료증):** 멤버십용 강의 수료증 생성 및 발급
- **Communities(커뮤니티):** 그룹, 게시글, 멤버, 관리 도구 관리
- **Contacts(연락처):** 연락처 생성/편집/삭제; 일괄 작업; 가져오기/내보내기
- **Conversations(대화):** 인박스 접근 (SMS, 이메일, 통화, SNS DM); 메시지 송수신 및 통화
- **Forms(폼):** 폼 구축, 편집, 게시; 제출 관리
- **Funnels(퍼널):** 퍼널/웹사이트 페이지, 팝업, 설정 구축; 게시/게시 취소
- **Gokollab:** 창작 협업 및 승인을 위한 GoKollab 에셋/워크플로우 접근
- **Integrations(연동):** 하위 계정 연동 연결/관리 (구글, 페이스북, 광고, 이메일, 전화 등)
- **Launchpad(런치패드):** 온보딩 체크리스트/빠른 시작 도구 사용
- **Marketing(마케팅):** 이메일/SMS 캠페인, 소셜 플래너, 템플릿, 예약 발송
- **Medias(미디어):** 미디어 라이브러리 관리 (이미지, 동영상, 파일)
- **Memberships(멤버십):** 강의, 레슨, 오퍼, 번들, 접근 레벨, 학습자
- **Opportunities(기회 관리):** 파이프라인, 단계, 거래; 값 및 상태 업데이트
- **Orders(주문):** 결제 및 상품과 연결된 주문 기록 보기 및 관리
- **Payments(결제):** 계정 내 결제, 환불, 인보이스, 영수증 보기
- **Payment Settings(결제 설정):** 하위 계정 레벨에서 결제 게이트웨이 연결/관리 (예: Stripe, Authorize.net); 세금, 영수증, 미납 관리
- **Products(상품):** 판매용 상품, 가격, 옵션 생성/관리
- **QR Codes(QR 코드):** 페이지/폼으로 연결되는 QR 코드 생성 및 관리
- **Quizzes(퀴즈):** 강의 또는 리드 수집용 퀴즈 생성/관리
- **Dashboard(대시보드):** 분석 및 성과 위젯 보기
- **Reputations(평판 관리):** 리뷰 요청/관리, 리뷰 답변, 리스팅 연결
- **Subscriptions(구독):** 정기 결제 플랜, 구독자 상태, 취소 생성/관리
- **Surveys(설문):** 설문 구축, 편집, 게시; 응답 관리
- **Taxes(세금):** 계정 내 판매용 세율/규칙 설정
- **Transactions(거래):** 계정 전반의 청구/환불/지급 내역
- **WordPress(워드프레스):** WordPress 플러그인/사이트 동기화 연결 및 관리

### **하위 계정 설정 (세부 권한)**

에이전시가 성장하면서 민감한 설정에 대한 전체 접근 권한을 부여하지 않고도 하위 계정 관리를 위임하고 싶을 수 있습니다. 하위 계정 설정 권한을 통해 하위 계정 전반의 주요 영역을 누가 보고, 편집하고, 관리할 수 있는지 제어할 수 있습니다.

**이러한 권한이 적용되는 곳:**

- 하위 계정 목록 페이지: 누가 하위 계정을 보고 관리할 수 있는지 제어
- 클라이언트 관리 페이지 (기본 세부사항): 클라이언트 레벨 설정 접근 제한
- 하위 계정 결제: 하위 계정 레벨의 결제 및 재무 작업 제한
- 하위 계정 회사 설정: 고위험 회사 설정 접근 제한

![하위 계정 설정 권한](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064985101/original/t8-GQHK8jku0JeM8RcSm_rPXnUETA08Hpg.png?1771235780)

사용자가 제한된 영역에 접근하거나 제한된 작업을 수행하려고 할 때, Hyperclass은 해당 권한 레벨에서는 이 작업이 허용되지 않는다는 설명이 담긴 상황별 메시지를 표시합니다.

---

## **사용자의 새 하위 계정 생성 차단하기**

새 하위 계정 생성은 위 목록으로 제어되지 않습니다. 이는 에이전시 레벨 권한입니다.

- 에이전시 보기 → 설정(Settings) → 팀(Team)으로 이동
- 사용자 열기 → 역할 및 권한(Roles & Permissions)
- 하위 계정(Sub-Accounts) (에이전시 모듈) 찾기
- "Create Sub-Accounts(하위 계정 생성)" 체크 해제 (필요시 "Delete(삭제)"도)
- 완전히 숨기려면 Sub-Accounts 토글을 끄기

### **User Management(사용자 관리) → Login As(다른 사용자로 로그인)**

Login As 활성화는 에이전시 관리자가 다른 사용자로 가장할 수 있는지를 제어합니다.

- **기본값:** 활성화됨
- **비활성화 시 효과:** 해당 관리자에게 Login As 옵션이 숨겨집니다.

위치: Agency Settings › Team › Edit user › Roles & Permissions › User Management

![Login As 권한 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059908180/original/mte0e4YdKu9L6nTypH18Uznh8-CU1zyYbA.png?1764857951)

## 권한 복사

에이전시 관리자는 한 사용자의 세부 권한을 다른 사용자에게 복사할 수 있습니다. 예를 들어, Bob이 영업팀에 합류했을 때, 관리자는 Alex의 권한을 Bob에게 복제할 수 있습니다.

![권한 복사 기능](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026866947/original/5fPegb7T8yHubkRv0qhGGGa1vxBMZw9cUQ.png?1717091762)

---

## **제한된 접근 권한으로 하위 계정에 클라이언트 추가하기**

클라이언트를 에이전시 레벨 사용자로 추가하면 안 됩니다. 대신 해당 비즈니스와 연관된 하위 계정에 직접 추가하여, 그들의 필요에 맞는 특정 권한과 역할을 할당해야 합니다. 에이전시 레벨에 클라이언트를 추가하면 모든 하위 계정에 대한 불필요한 가시성을 제공하게 되어 원하지 않는 결과를 초래할 수 있습니다.

하위 계정에 클라이언트를 추가하고 권한을 제어하려면 다음 단계를 따르세요:

- 클라이언트와 연관된 하위 계정으로 이동합니다.
- `Settings(설정) → My Staff(내 직원)`으로 이동합니다.
- 우측 상단의 파란색 버튼 `+ Add Employee(직원 추가)`를 클릭하고 클라이언트의 사용자 세부정보를 입력합니다.
- 클라이언트의 이름과 이메일을 입력하고 역할을 설정합니다 (보통 User(일반 사용자); 완전한 제어가 정말 필요한 경우에만 Admin(관리자) 사용).
- 편집할 수 있어야 하는 내용에 따라 권한을 설정합니다 (모듈을 켜거나 끄고 개별 권한을 조정할 수 있음).
- 클라이언트가 자신에게 배정된 기록(연락처, 캘린더, 기회)만 볼 수 있도록 하려면 `Only Assigned Data(본인 데이터만 보기)` 토글을 활성화합니다.
- 접근 레벨을 확정하려면 저장을 클릭합니다.

- **Dashboard(대시보드) → Export data(데이터 내보내기):** 사용자가 보고용 대시보드 위젯 데이터를 내보낼 수 있도록 허용합니다.

![클라이언트 추가 및 권한 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044973040/original/L-dLb8dQdVuT7WSoWwex4bc0wjnS_Lgz3w.png?1744397031)

---
*원문 최종 수정: 2026년 2월 16일*
*Hyperclass 사용 가이드 — hyperclass.ai*