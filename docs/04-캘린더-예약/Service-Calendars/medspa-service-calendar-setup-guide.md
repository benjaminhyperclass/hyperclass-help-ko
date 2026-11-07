---
원문: /support/solutions/articles/155000002744-medspa-service-calendar-setup-guide
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 메드스파(MedSpa) 서비스 캘린더 설정 가이드

서비스 캘린더를 만들어 예약을 자동으로 받고, 스태프 일정과 시술실·기기/소모품을 함께 관리하는 방법을 메드스파 예시로 안내해요. 서비스 캘린더를 설정하면 중복 예약을 막고, 고객도 편하게 예약할 수 있어요.

하이퍼클래스의 서비스 캘린더를 쓰면 메드스파에서 예약을 자동화하고, 스태프 일정을 관리하고, 시술실과 기기/소모품 같은 자원을 서비스에 배정할 수 있어요. 아래 단계를 차례대로 따라 하세요.

## 서비스 캘린더란?

서비스 캘린더는 서비스를 정의하고, 담당 스태프를 지정하고, 시술실·장비 같은 자원을 배정하는 일정 관리 도구예요. 메드스파라면 마이크로니들링, 레이저 치료, 주사 시술 같은 서비스별로 캘린더를 만들 수 있어요. 각 캘린더에는 알맞은 시술 담당자, 시술실, 기기/소모품을 연결해요. 고객은 쉽게 예약하고, 팀은 일정이 겹치는 일을 피할 수 있어요.

## 서비스 캘린더의 주요 장점

서비스 캘린더를 쓰면 예약 관리가 간편해지고 업무 효율과 고객 경험이 좋아져요.

- **자동 예약**: 고객이 전화하지 않아도 직접 예약할 수 있어요.
- **자원 관리**: 시술실과 기기/소모품(레이저 기기, 마이크로니들링 펜, 마취 용품 등)을 배정해서 중복 예약을 막아요.
- **스태프 일정 관리**: 시술 담당자의 근무 시간을 정해 두면 예약 가능한 시간이 정확하게 표시돼요.
- **서비스 그룹 관리**: 서비스를 "레이저 & 피부 시술", "주사 시술 & 페이셜" 같은 그룹으로 묶어서 정리해요.
- **유연한 메뉴 구성**: 한 번의 예약으로 여러 서비스(예: 상담 + 시술)를 선택하게 할 수 있어요.
- **전문적인 브랜딩**: 이미지와 사용자 지정 색상을 넣어 예약 페이지를 깔끔하게 꾸며요.

## 스태프 추가하고 근무 시간 설정하기

시술 담당자를 먼저 등록해야 서비스에 배정할 수 있어요. 그래서 서비스 캘린더 설정은 스태프 추가부터 시작해요.

### 1. 사용자 추가 열기

서브 계정의 **대시보드**에서 **설정 > 스태프 관리 > 사용자 추가**로 이동하세요.

![사용자 추가 메뉴 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326915/original/4jcwkbkWzlWSn67YSV2EV3xSMnCCLjmZUQ.jpeg?1769164835)

### 2. 사용자 정보와 권한 입력하기

시술 담당자의 이름, 이메일, 내선번호를 입력하세요. 필요하면 사용자 권한을 설정해서 접근 범위를 제한하세요. 근무 가능 시간도 정하세요. 예를 들어 Mark는 월·수·금 오전 9시~오후 5시, Henry는 화~토 오전 11시~오후 7시로 설정할 수 있어요. 마지막으로 **저장**을 클릭하세요.

사용자 접근 권한에 대해 더 알고 싶다면 별도의 사용자 권한 도움말을 참고하세요.

![사용자 정보와 권한 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326412/original/fKndCR716FOeoVEpDD9XjWFxBls_FWmsnA.png?1769164551)

## 메드스파 서비스 그룹 만들기

그룹은 서비스를 분류하는 카테고리 역할을 해요. 그룹마다 예약 링크가 따로 생겨요.

### 1. 캘린더 설정 열기

**캘린더** 메뉴에서 오른쪽 위의 **캘린더 설정**을 클릭하세요. 그룹, 서비스, 환경설정 같은 모든 설정을 여기에서 할 수 있어요.

![캘린더 설정 버튼 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326429/original/Ae7yHbVYmJNGpPBbiXNsO4MRaR6uL7mbJw.png?1769164552)

### 2. Service Menu 켜기

**환경설정 > Account Preference**(계정 환경설정)로 이동해서 **Service Menu**(서비스 메뉴) 토글을 켜세요. 그러면 서비스 기반 예약 기능이 활성화되어 서비스 캘린더와 서비스 메뉴를 만들 수 있어요.

![Service Menu 토글 켜기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326410/original/-q6hq06KbNF7inZBnfIR2QZKnnEm4Gd6Kg.png?1769164551)

### 3. 그룹 만들기 시작하기

**캘린더** 탭에서 왼쪽 사이드바의 **+ New Group**(+ 새 그룹)을 클릭하세요. 마이크로니들링, 레이저 치료, 주사 시술처럼 관련 있는 서비스를 그룹으로 묶을 수 있어요.

![새 그룹 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326411/original/UUteO1TO6WGpRWj72J6rtpW5BoYgfNe4Xw.jpeg?1769164551)

### 4. 그룹 정보 입력하기

팝업 폼에 **Group Name**(그룹 이름), **설명**, **URL**(슬러그)을 입력하세요. **템플릿을 선택하세요**에서 Classic 또는 Neo를 고른 뒤 **만들기**를 클릭하면 그룹이 저장돼요.

![그룹 정보 입력 팝업](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326416/original/93CcZZ5YbnjbEvZiYI_Ygh2ACDjdK5TqLw.png?1769164552)

## 서비스 캘린더 만들기

### 1. 서비스 캘린더 만들기 시작하기

왼쪽 사이드바에서 그룹을 선택하고 **Create Calendar**(캘린더 만들기)를 클릭하세요. 마이크로니들링이나 레이저 치료처럼 특정 메드스파 서비스를 위한 새 서비스 캘린더 설정이 시작돼요.

![Create Calendar 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326414/original/BwQttZRhzO0Mk6PXTFWaxGq6mJJDQV5xvA.jpeg?1769164552)

### 2. 서비스 예약 선택하기

<!-- 검토 필요: 원문 내용이 서로 다름 (서비스 캘린더를 만드는 단계인데 경로가 Service Menu > Create Service Menu로 적혀 있음) -->
**캘린더 > Service Menu > Create Service Menu**로 이동하세요. 캘린더 유형 목록에서 **서비스 예약**을 클릭하세요. 이 유형은 메드스파 같은 서비스업을 위한 것으로, 고객이 마이크로니들링이나 레이저 치료 같은 특정 서비스를 예약할 수 있어요.

![서비스 예약 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326752/original/-4ja56b5jNrkuQM26XLTa2utx4DvFF_jlA.jpeg?1769164726)

### 3. 서비스 기본 정보 입력하기

**서비스 이름**, **Assigned Staff**(담당 스태프), **사용자 지정 URL**, **Service Duration**(서비스 소요 시간), **가용성** 같은 서비스 정보를 입력하세요. 이렇게 하면 캘린더가 제공하려는 메드스파 서비스에 맞게 설정돼요. 더 세부적으로 설정하려면 **고급 설정**을 클릭하세요.

**고급 설정**을 클릭하면 **Service Details**(서비스 상세), **가용성**, **Forms & Payment**(폼 및 결제), **Notifications**(알림), **Customizations**(사용자 지정), **Rooms & Equipment**(룸 및 장비) 패널이 펼쳐져요. 여기서 예약 과정을 세부적으로 조정하고, 브랜딩을 추가하고, 결제를 관리하고, 시술실이나 기기/소모품 같은 자원을 배정할 수 있어요.

![고급 설정 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326742/original/N-UicuXdMES_wSTRwv8dC_Hcpj4dzJg85Q.jpeg?1769164719)

### 4. 서비스 상세 설정하기

**Service Details** 탭에서는 고객이 예약할 때 보게 될 정보를 정해요. 먼저 **Service Logo**(서비스 로고)를 올려서 예약 페이지를 전문적으로 꾸미세요. **서비스 이름**은 알아보기 쉽게 입력하세요(예: 마이크로니들링, 레이저 치료, 주사 시술). **설명**에는 서비스에 포함된 내용을 적으세요. 예를 들어 "상담과 사후 관리가 포함된 30분 레이저 치료"처럼 쓸 수 있어요.

다음으로 서비스를 알맞은 **그룹**(예: 레이저 & 피부 시술)에 지정하면 관련 서비스와 함께 정리돼요. 마지막으로 **사용자 지정 URL**을 만드세요. 이 값은 고객에게 공유할 예약 링크의 일부가 되므로 알아보고 공유하기 쉬워요(예: /laser-treatment-booking).

![서비스 상세 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326417/original/8xoQBfY8AXdQijJghjMgYORQiXTR24EPqg.jpeg?1769164552)

### 5. 예약 및 스태프 설정하기

이 영역에서는 예약이 고객과 스태프에게 어떻게 보일지 설정해요. **Appointment Invite Title**(예약 초대 제목)을 입력하세요. 이 제목은 고객과 스태프의 캘린더 초대에 모두 표시돼요. {{contact.name}} 같은 플레이스홀더를 넣으면 고객 이름으로 바꿔 표시할 수 있어요. **Team Members**(팀 멤버)에서는 이 서비스를 진행할 수 있는 시술 담당자를 한 명 이상 지정하세요. 고객에게는 지정한 스태프의 예약 가능 시간만 보여요.

그다음 **미팅 장소**를 정하세요. 메드스파 클리닉 자체, 치료실로 설정한 장소, 필요하다면 사용자 지정 화상 링크도 가능해요. 마지막으로 **Meeting Color**(미팅 색상)를 골라서 내부 캘린더에서 이 서비스를 색으로 구분하세요. 스태프가 예약 종류를 한눈에 알아보기 쉬워져요.

![예약 및 스태프 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326423/original/bH5EHFNS-BBRdW0mJoDZ3z0KQRXtVTqbFg.jpeg?1769164552)

### 6. 룸 배정하기

**Rooms** 탭에서는 메드스파의 물리적 공간을 서비스에 연결해요. 룸은 서비스를 진행하는 치료실, 레이저실, 시술실이 될 수 있어요. 예를 들어 마이크로니들링과 주사 시술에는 "Treatment Room 1"을, 레이저 치료와 마무리 시술에는 "Laser Room"을 배정할 수 있어요. 룸을 배정하면 고객이 서비스를 예약했을 때 해당 룸이 예약 처리되어 중복 예약이 되지 않아요.시술 공간이 한정된 클리닉에서는 같은 장소에 같은 시간대로 여러 예약이 잡히는 일을 막아 주기 때문에 특히 유용해요.

![룸 배정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326422/original/Rx-UKhx4_choUAzYPV7ZUqbwir7QZusQuA.png?1769164552)

### 7. 장비 배정하기

**Equipment** 탭에서는 서비스에 필요한 도구나 자원을 연결해요. 장비로는 레이저 기기, 마이크로니들링 펜, 시술 용품 같은 항목을 등록할 수 있고, 사용할 수 있는 수량도 정할 수 있어요. 예를 들어 레이저 치료 서비스에는 "Laser Device"를, 마이크로니들링 서비스에는 "Microneedling Pen"을 배정해요. 고객이 서비스를 예약하면 필요한 장비가 자동으로 예약 처리되어 여러 예약에서 중복으로 쓰이지 않아요. 모든 예약에 필요한 도구가 준비되어 있으니 운영이 원활해져요.

![장비 배정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326419/original/aYQ3cRmvaCpIzP88d6na5APdZCWfdQkBBA.png?1769164552)

## 기존 서비스 캘린더 수정하기

이미 만든 서비스 캘린더를 수정하려면 **미팅** 탭의 **Service Calendars** (v1)로 이동하세요. 목록에서 수정할 캘린더를 찾아 **작업** 열의 연필 아이콘을 클릭하세요. 캘린더 설정이 다시 열리고, 캘린더를 새로 만들지 않아도 **서비스 이름**, 담당 스태프, 가용성, 알림, 자원 같은 내용을 바꿀 수 있어요.

![서비스 캘린더 수정 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063856482/original/CPLX-nFSiKKDLG40L06tnJ72Kiol1PxGuw.png?1769776301)

## 서비스 메뉴 만들기

서비스 메뉴를 쓰면 여러 서비스나 그룹을 예약 페이지 하나에 모아서 보여 줄 수 있어요.

### 1. Service Menu 열기

**미팅 > Service Calendars (v1) > Service Menu**로 이동하세요. 고객에게 보이는 메뉴를 만들고 관리하는 화면이 열려요.

![Service Menu 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326413/original/G3QXmqAh5VV1c1-pCcPn35U-Zoo8GhN5OA.png?1769164552)

### 2. 서비스 메뉴 만들기 시작하기

오른쪽 위의 **+ Create Service Menu**(+ 서비스 메뉴 만들기)를 클릭하세요. 메드스파 서비스를 보여 줄 새 고객용 메뉴가 만들어지기 시작해요.

![서비스 메뉴 만들기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326418/original/siBhbm-77ZjE_LDY1wDd4GOdl0I62glZ3g.png?1769164552)

### 3. 메뉴 상세 정보 입력하기

**Service Menu name**(서비스 메뉴 이름), **설명**, **Service URL**(서비스 URL) 슬러그를 입력하고, **폼**을 선택하세요. 필요하면 **동의 체크박스** 토글을 켜세요. 이 설정으로 고객에게 보이는 메뉴 상단 내용과 공유할 링크가 정해져요.

![메뉴 상세 정보 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326427/original/cnV82-nZPs2BTFGTt6PPjfNHVnJBhH-oYg.png?1769164552)

### 4. 옵션 켜기

**추가 옵션**에서 **Enable Add Guests**(게스트 추가 활성화), **Enable Multiple Service Selection**(여러 서비스 선택 활성화), **Enable Staff Selection**(스태프 선택 활성화) 토글을 켜세요. 이렇게 하면 고객이 게스트와 함께 예약하고, 여러 서비스(예: 상담 + 시술)를 선택하고, 원하는 시술 담당자를 고를 수 있어요.

![추가 옵션 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326425/original/KNUAoO-vOZHLAIe9qW-hN4_YToDz1ckvAQ.png?1769164552)

### 5. 서비스 선택하기

**Select Services**(서비스 선택)를 클릭하고 이 메뉴에 넣을 그룹/캘린더를 고르세요. 이미 만들어서 그룹에 지정해 둔 서비스만 표시돼요. 그룹을 펼쳐서 원하는 서비스를 체크하세요.

![서비스 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326420/original/GNMLnph_V7R2xPWZwgoRKE8minDz0ohnRg.png?1769164552)

### 6. 순서 정렬하기

**Arrange your services**(서비스 순서 정렬)를 열고 핸들을 드래그해서 그룹/서비스가 표시되는 순서를 바꾸세요. 인기가 많은 항목(예: 레이저 치료, 마이크로니들링)을 맨 위에 두면 전환율을 높이는 데 도움이 돼요.

![서비스 순서 정렬 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326415/original/uoYvLa1zk06Nspsi8aRBEEtCFoA1tC9shA.png?1769164552)

이제 고객에게 서비스 메뉴 링크를 보내면 아래와 같은 화면이 보여요.

![고객에게 보이는 서비스 메뉴 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063326913/original/0G214L3xYo7EyvoALdf-pYqC5QzoEGCdyQ.jpeg?1769164833)

다양한 서비스를 제공하는 사업장에는 하이퍼클래스의 서비스 캘린더를 잘 활용하는 것이 중요해요. 이 가이드대로 서비스 캘린더를 만들고, 사용자 지정하고, 고객에게 보여 주면 사업장과 고객 모두 더 편하게 예약을 주고받을 수 있어요. 예약 과정을 더 효율적으로 운영하고 고객 만족도도 높여 보세요.

## 자주 묻는 질문

### 서비스 캘린더를 저장할 수 없어요.
저장하기 전에 스태프를 한 명 이상 지정해야 해요.

### 서비스에 예약 가능한 시간이 표시되지 않아요.
스태프 가용성, 지정한 룸, 장비를 확인하세요.

### 고객이 서비스를 여러 개 한 번에 예약할 수 있나요?
네. Service Menu 설정에서 **Enable Multiple Service Selection**을 켜면 돼요.

### 서비스 예약금을 받을 수 있나요?
네. **Forms & Payment**에서 Stripe나 PayPal을 연결하세요.

### 시술실이나 기기/소모품이 중복 예약되지 않게 하려면 어떻게 하나요?
각 서비스에 룸과 장비를 배정하세요.

### 고객이 원하는 시술 담당자를 직접 고를 수 있나요?
네. Service Menu에서 **Enable Staff Selection**을 켜면 돼요.

### 모든 서비스를 한 페이지에 보여 주려면 어떻게 하나요?
Service Menu를 사용해 여러 캘린더를 하나로 묶으세요.
