---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003316-zoho-to-highlevel-migration-guide-
번역일: 2026-11-06
카테고리: 20-고객지원
---

# Zoho에서 하이퍼클래스로 옮기기 — 마이그레이션 가이드

Zoho 앱에서 쓰던 데이터와 기능을 하이퍼클래스로 옮기는 절차를 안내해요. 핵심 데이터, 자동화, 워크플로우를 그대로 가져와서 하이퍼클래스의 마케팅·CRM 기능을 바로 쓸 수 있도록 돕는 가이드예요.

{% hint style="warning" %}
Zoho에서 하이퍼클래스로 옮길 때는 아래 항목을 모두 이전했는지 확인하세요.

1. 연락처
2. 사용자
3. 캘린더
4. 기회
5. 폼
6. 계약
7. 사이트
8. 자동화
9. 분석
{% endhint %}

---

## 연락처 이전

Zoho에서는 한 번에 최대 200,000건의 연락처 레코드를 CSV로 내보낼 수 있어요. 이 200,000건은 가장 오래된 레코드부터 포함돼요. 내보낸 레코드(CSV 형식)는 zip으로 압축되고, 내보내기 다운로드 링크는 7일 동안 사용할 수 있어요.

### 1단계: 연락처 내보내기

1. 내보내기 전에 연락처 데이터를 준비하세요. 메일링 리스트와 세그먼트를 태그로 다시 만들어 두세요. 이 태그가 이전 전용 태그가 돼요.
2. Zoho 데이터를 내보내세요. 오른쪽 위 근처의 **Setup**(설정) 아이콘(![Zoho 설정 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363599/original/cYv1R-c6bAUF_kBqEsLZktmaFdxZNFcPVg.png?1725571467))을 누르고, **Data Administration**(데이터 관리) 섹션에서 **Export**(내보내기)를 선택하세요. **Export Data** 페이지에서 **Start an Export**(내보내기 시작) > **Module**(모듈) > **Contacts**를 차례로 누르세요.
3. 내보낼 필드를 고르세요. **Custom View**(사용자 지정 보기)의 필드, **All fields**(전체 필드), **Choose fields to be exported**(내보낼 필드 직접 선택) 중에서 선택할 수 있어요. 하이퍼클래스로 옮기려면 이메일이나 전화번호 필드가 포함되어야 해요.
4. 데이터를 내려받으세요. **Export**를 누르면 내보내기 항목이 **Export History**(내보내기 기록) 표에 **In progress**(진행 중) 상태로 추가돼요. 상태가 **Completed**(완료)로 바뀌면 해당 항목에 마우스를 올리고 **Download**(다운로드) 링크(![Zoho 다운로드 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363594/original/v9DwtvwftwdRvwKRvpVDQPICXrDNwjq2Fg.png?1725571466))를 누르세요.

### 2단계: 하이퍼클래스 가져오기용 CSV 준비하기

1. 날짜 형식을 확인하세요. CSV의 모든 날짜 필드가 YYYY-MM-DD 형식이어야 하이퍼클래스와 호환돼요.
2. 특수 문자 인코딩을 확인하세요. 특수 문자와 악센트 문자가 깨지지 않도록 CSV 파일은 UTF-8 인코딩을 사용해야 해요.
3. 데이터를 정리하세요. 파일에서 줄바꿈, 이모지, 불필요한 특수 문자를 지우면 가져오기 오류를 줄일 수 있어요.
4. 커스텀 필드를 다시 만드세요. 하이퍼클래스에 로그인해 **연락처 > 설정 > 커스텀 필드**로 이동한 뒤 **커스텀 필드 추가**를 눌러, Zoho에 저장하던 방식과 비슷하게 연락처 데이터를 담을 필드를 만드세요.

### 3단계: 하이퍼클래스로 연락처 가져오기

1. 하이퍼클래스에 로그인한 뒤 왼쪽 메뉴에서 **연락처**로 이동하세요.
2. **연락처 가져오기** 버튼을 누르세요.
3. **CSV 파일 업로드**에서 준비한 CSV 파일을 선택해 업로드하세요.
4. **필드 매핑** 화면에서 CSV 파일의 필드를 그에 맞는 하이퍼클래스 필드와 연결하세요. 예를 들어 CSV의 "First Name" 열은 하이퍼클래스의 **이름** 필드와 연결해요.

   {% hint style="info" %}
   필수 필드가 모두 올바르게 매핑됐는지 확인하세요. CSV의 필드에 맞는 하이퍼클래스 필드가 없다면, 진행하기 전에 하이퍼클래스에서 커스텀 필드를 먼저 만들어야 할 수 있어요.
   {% endhint %}

5. 태그와 리스트를 지정하세요. 가져오는 중에 연락처를 특정 리스트에 넣고 태그를 적용할 수 있어요. 연락처의 출처를 알 수 있도록 "Zoho 가져오기" 같은 태그를 붙이는 것도 좋아요.
6. 가져오기를 완료하세요. 모든 필드를 매핑하고 태그와 리스트를 설정했다면 **가져오기 시작**을 누르세요. 하이퍼클래스가 가져오기를 처리하고 나면 연락처가 계정에 추가돼요.

### 4단계: 가져온 데이터 검토하기

1. 연락처와 폼 제출 내용을 포함해 하이퍼클래스로 가져온 데이터가 정확하고 빠짐없는지 확인하세요.
2. 이전 전용 태그를 기준으로 스마트 리스트와 메일링 리스트를 다시 만드세요.
3. 하이퍼클래스의 데이터를 원래 Zoho 데이터와 비교해 차이가 없는지 확인하세요.

![가져온 연락처 데이터 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363608/original/tjlYmDu3vLyY2m5W4kv6ZeBs5a2sWRBMxg.jpeg?1725571473)

---

## 사용자 이전

Zoho에서는 한 번에 최대 200,000건의 사용자 레코드를 CSV로 내보낼 수 있어요. 하이퍼클래스에는 사용자를 직접 추가하고 사용자 설정도 직접 해야 해요. Zoho User Management는 Zoho 앱 전반의 사용자 계정, 역할, 권한을 관리하는 도구예요.

역할 기반 접근 제어, 다단계 인증, 사용자를 그룹으로 묶어 관리하는 기능이 있어요. 외부 ID 제공업체와 연동할 수 있고, 사용자 활동을 추적하고 규정 준수를 확인할 수 있는 상세 감사 로그도 지원해요.

### 1단계: 사용자 내보내기

1. Zoho 데이터를 내보내세요. 오른쪽 위 근처의 **Setup**(설정) 아이콘(![Zoho 설정 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363731/original/NyOmbbuBq_kL4F5BfIxISXbv_Sho9JRCPg.png?1725571792))을 누르고, **Data Administration**(데이터 관리) 섹션에서 **Export**(내보내기)를 선택하세요. **Export Data** 페이지에서 **Start an Export**(내보내기 시작) > **Module**(모듈) > **Users**를 차례로 누르세요.
2. 내보낼 필드를 고르세요. **Custom View**(사용자 지정 보기)의 필드, **All fields**(전체 필드), **Choose fields to be exported**(내보낼 필드 직접 선택) 중에서 선택할 수 있어요. 하이퍼클래스로 옮기려면 이메일이나 전화번호 필드가 포함되어야 해요.
3. 데이터를 내려받으세요. **Export**를 누르면 내보내기 항목이 **Export History**(내보내기 기록) 표에 **In progress**(진행 중) 상태로 추가돼요. 상태가 **Completed**(완료)로 바뀌면 해당 항목에 마우스를 올리고 **Download**(다운로드) 링크(![Zoho 다운로드 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363730/original/Dd0fG5f9YPUlLEFBMrFn0TsKAcH_b2EMSQ.png?1725571792))를 누르세요.

### 2단계: 하이퍼클래스 이전용 CSV 준비하기

1. 사용자 데이터를 확인하세요. CSV를 스프레드시트로 열어 모든 사용자의 이메일 주소가 서로 다른지 확인하세요.
2. 사용자를 팀별로 나누세요. 팀마다 필요한 권한을 정하고, 스프레드시트에서 사용자를 팀별로 나누세요. 각 사용자를 에이전시용으로 만들지, 특정 서브 계정용으로 만들지도 함께 정리해 두세요. 이렇게 하면 다음 단계에서 하이퍼클래스 사용자 간에 권한을 빠르게 복사할 수 있어요.

### 3단계: 하이퍼클래스에 사용자 직접 추가하기

1. **설정 > 팀**으로 이동해 **+ 직원 추가**를 누르세요.
2. 사용자 유형과 역할을 정하세요. 에이전시용으로 만들지 특정 서브 계정용으로 만들지 선택하고, 관리자인지 일반 사용자인지도 선택하세요.
3. 권한을 지정하고 서브 계정에 배정하세요. 하이퍼클래스 기능별로 권한을 설정하고 사용자를 서브 계정에 배정하세요.
4. 나머지 사용자를 추가하고 권한을 복사하세요. **권한 복사**로 같은 팀 사용자끼리 권한을 복제하면 시간을 아끼고 설정도 일관되게 유지할 수 있어요.

![사용자 추가 및 권한 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363605/original/Gb_p-8hAWyMfl95_C9qW3dMBUySAck07cQ.png?1725571469)

---

## 캘린더 이전

예약 내역은 Zoho Bookings에서 내보내고, 캘린더는 하이퍼클래스에서 직접 다시 만들어야 해요. Zoho Bookings는 온라인 일정 예약 도구로, 예약 페이지와 캘린더를 원하는 대로 꾸며 예약을 관리할 수 있어요.

자동 알림, Zoho 앱·외부 서비스와의 연동, 결제 처리 기능이 있어요. 직원 가용 시간 관리, 고객 알림, 실시간 예약 업데이트 도구도 제공해서 일정 관리 흐름을 간소화해 줘요.

### 1단계: 예약 내역을 보관용으로 내보내기

1. Zoho 데이터를 내보내세요. 오른쪽 위 근처의 **Setup**(설정) 아이콘(![Zoho 설정 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363600/original/IuISLAkCtuwPsKShEycliOHIFW_29UGsQQ.png?1725571467))을 누르고, **Data Administration**(데이터 관리) 섹션에서 **Export**(내보내기)를 선택하세요. **Export Data** 페이지에서 **Start an Export**(내보내기 시작) > **Module**(모듈) > **Appointments**를 차례로 누르세요.
2. 내보낼 필드를 고르세요. **Custom View**(사용자 지정 보기)의 필드, **All fields**(전체 필드), **Choose fields to be exported**(내보낼 필드 직접 선택) 중에서 선택할 수 있어요.
3. 데이터를 내려받으세요. **Export**를 누르면 내보내기 항목이 **Export History**(내보내기 기록) 표에 **In progress**(진행 중) 상태로 추가돼요. 상태가 **Completed**(완료)로 바뀌면 해당 항목에 마우스를 올리고 **Download**(다운로드) 링크(![Zoho 다운로드 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363593/original/ORDTW2-Vs0Dw3xuHjzwbsjC_Z0DCTg8ycQ.png?1725571466))를 누르세요.

### 2단계: Zoho Bookings의 캘린더 모두 확인하기

1. Zoho Bookings에 로그인하세요. 오른쪽 위의 **Manage Business**(비즈니스 관리) 아이콘(![Zoho 비즈니스 관리 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363801/original/YTTYFCZgV2bE-6KHLWdvGubI84tQ1oSUOA.png?1725571993))을 누르고 **Workspaces**(워크스페이스)를 누르세요. 그다음 **Workspaces** 섹션에서 원하는 워크스페이스를 선택하세요.
2. 워크스페이스마다 서비스(캘린더)를 기록해 두세요. 캘린더별로 캘린더 설정, 연동, 사용자를 문서로 남겨 두세요.

### 3단계: 하이퍼클래스에서 Zoho 캘린더 다시 만들기

1. 하이퍼클래스 캘린더를 만드세요. 서브 계정의 **설정 > 캘린더**로 이동하세요. 캘린더 알림, 캘린더 설정, 사용자, 미팅 장소를 Zoho Bookings와 비슷하게 만들어야 해요. 반복 예약은 하이퍼클래스에서 반복 규칙을 직접 설정해야 해요.
2. 캘린더 연동을 추가하세요. 캘린더 동기화를 추가하려면 서브 계정의 **설정 > 캘린더 > 연결**로 이동하세요.
3. 미리보기와 테스트를 해 보세요. 만든 캘린더가 Zoho의 현재 예약 설정과 같은지 테스트하세요.

---

## 기회와 파이프라인 이전

Zoho의 Deals와 Pipelines는 영업 정보를 관리하는 기능이에요. 딜 하나가 영업 주기, 영업 규모, 영업 상태, 단계별 성사 확률, 상태 사유, 경쟁사를 추적하고, 앞으로의 매출 예측도 제공해요.

### 1단계: Zoho에서 딜 내보내기

1. Zoho 데이터를 내보내세요. 오른쪽 위 근처의 **Setup**(설정) 아이콘(![Zoho 설정 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363596/original/MGJJEL1o-Lx8j2BVk1J-vZoSag7M_GMRyg.png?1725571467))을 누르고, **Data Administration**(데이터 관리) 섹션에서 **Export**(내보내기)를 선택하세요. **Export Data** 페이지에서 **Start an Export**(내보내기 시작) > **Module**(모듈) > **Deals**를 차례로 누르세요.
2. 내보낼 필드를 고르세요. **Custom View**(사용자 지정 보기)의 필드, **All fields**(전체 필드), **Choose fields to be exported**(내보낼 필드 직접 선택) 중에서 선택할 수 있어요. 하이퍼클래스로 옮기려면 이메일이나 전화번호 필드가 포함되어야 해요.
3. 데이터를 내려받으세요. **Export**를 누르면 내보내기 항목이 **Export History**(내보내기 기록) 표에 **In progress**(진행 중) 상태로 추가돼요. 상태가 **Completed**(완료)로 바뀌면 해당 항목에 마우스를 올리고 **Download**(다운로드) 링크(![Zoho 다운로드 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363595/original/GiMVirSXgx8fvyv9nlBkZL8ycZZPIxhDAw.png?1725571467))를 누르세요.

### 2단계: 하이퍼클래스에서 파이프라인 다시 만들기

1. 하이퍼클래스에 로그인한 뒤 **기회 관리**(Opportunities) > **파이프라인** > **+ 파이프라인 추가**로 이동하세요. Zoho의 Deals와 Pipelines처럼 파이프라인과 단계를 만드세요.
2. 기회 커스텀 필드를 추가하세요. Zoho의 Deals와 Pipelines에 있던 것과 비슷한 필드를 추가하세요.

### 3단계: 기회 가져오기

1. CSV 데이터를 준비하세요. 하이퍼클래스에서 기회를 가져오기 위한 요건에 맞는지 확인하세요.
2. 하이퍼클래스에 기회를 추가하세요. **기회 관리**로 이동해 원하는 파이프라인을 선택하세요. 오른쪽 위의 점 3개를 눌러 기회를 가져오세요. Zoho 파일의 필드를 그에 맞는 하이퍼클래스 필드와 연결하세요.

### 4단계: 데이터 확인하기

1. 가져온 데이터를 하이퍼클래스에서 검토해 정확한지 확인하세요. 필드 매핑이 잘못됐거나 빠진 데이터가 없는지 살펴보세요.

![가져온 기회 데이터 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363603/original/h649nYAUR6z41I4v2kzdf7mcBdsA32rPGg.png?1725571469)

---

## 폼 이전

Zoho Forms는 온라인 폼 빌더로, 다양한 필드 유형, 템플릿, 디자인 옵션으로 폼을 만들고 꾸밀 수 있어요. 조건부 로직, 여러 페이지로 된 폼, Zoho 앱·외부 서비스 연동 기능이 있어요. 데이터 수집, 분석, 협업 도구도 제공해서 업무 흐름을 지원하고 인사이트를 모을 수 있어요.

### 1단계: Zoho에서 폼 내보내기

1. Zoho Forms에 로그인하세요.
2. 폼 응답을 내보내세요. 폼마다 들어가서 폼 구조를 직접 내보내세요(내보내기가 가능한 경우). 백업용으로 폼 응답은 CSV 형식으로 내보내세요.

### 2단계: 하이퍼클래스에서 폼 다시 만들기

1. 하이퍼클래스에 로그인해 **사이트 > 폼**으로 이동한 뒤 새 폼을 만드세요. Zoho 폼과 같은 커스텀 필드와 레이블을 추가해 폼을 다시 구성하세요.
2. 폼 동작을 설정하세요. Zoho의 기능을 똑같이 쓸 수 있도록 폼 알림이나 폼의 조건부 로직 같은 자동 동작을 하이퍼클래스에서 설정하세요.

![필드 레이블 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363602/original/ewXkxeOaFTWos-qoe9TwTYpyyYeUrfuFDQ.png?1725571468)

---

## 계약과 문서 이전

Zoho Contracts는 디지털 계약 관리 도구로, 템플릿과 조항을 원하는 대로 꾸며 계약을 만들고 관리하고 보관할 수 있어요. 전자 서명, 계약 수명 주기 관리, 규정 준수 추적 기능이 있어요. 협업, 협상, 분석 도구도 제공해서 계약 업무를 간소화하고 규정 준수를 도와줘요.

### 1단계: Zoho에서 문서 내보내기

1. Zoho에 로그인해 페이지 맨 위의 **Contracts** 탭을 선택하세요.
2. 계약서를 내려받으세요. 각 폼으로 이동해 계약서 구조의 사본을 직접 내려받으세요(가능한 경우). <!-- 검토 필요: 원문 내용이 서로 다름 -->

### 2단계: 하이퍼클래스에서 계약 다시 만들기

1. 하이퍼클래스에 로그인해 **결제 > 문서 & 계약**으로 이동한 뒤 새 문서를 만드세요. Zoho Contracts와 같은 커스텀 필드, 텍스트, 서명을 추가해 문서를 다시 구성하세요.
2. 문서 동작을 설정하세요. Zoho의 기능을 똑같이 쓸 수 있도록 문서 발송, 알림, 문서 서명 순서 같은 자동 동작을 하이퍼클래스에서 설정하세요.

![계약 문서 다시 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363606/original/MwG6SZN6gsPlFyNfw798H5eVKHay_T9mog.jpeg?1725571470)

---

## 웹사이트 이전

Zoho Sites는 웹사이트 빌더로, 드래그 앤 드롭 요소, 미리 디자인된 템플릿, 디자인 도구로 웹사이트를 만들고 꾸밀 수 있어요. 모바일 최적화, SEO 도구, Zoho 앱·외부 서비스 연동 기능이 있어요. 이커머스, 블로그 관리, 분석 옵션도 제공해서 온라인 존재감을 관리하고 최적화하는 데 도움이 돼요. 하이퍼클래스에서 사이트, 페이지, 온라인 스토어를 다시 만들려면 텍스트, 이미지, 기타 미디어 파일을 직접 복사해야 해요.

### 1단계: Zoho Sites에서 웹사이트 콘텐츠 내보내기

1. Zoho Sites 계정으로 이동하세요.
2. 웹사이트 콘텐츠를 내보내세요. 사이트 구조를 바로 내보내는 옵션은 없어서 콘텐츠를 직접 복사해야 할 수 있어요. HTML/CSS 파일을 저장하거나 미디어 파일을 직접 내려받으세요. SEO 설정과 페이지 이름도 기록해 두세요.

### 2단계: 하이퍼클래스에서 웹사이트 다시 만들기

1. 하이퍼클래스에 로그인해 **사이트 > 퍼널** 또는 **사이트 > 웹사이트**로 이동하세요. Zoho Sites에서 내보낸 콘텐츠와 미디어를 사용해 페이지와 SEO를 하나씩 다시 만드세요.

### 3단계: Zoho에서 도메인 연결 해제하기

1. Zoho Directory에 로그인한 뒤 왼쪽 메뉴에서 **Admin Panel**을 누르세요. **Custom Domain** 탭을 누르고, 해당 사용자 지정 도메인 이름 아래의 **Delete**를 누르세요.

### 4단계: 하이퍼클래스에 도메인 연결하기

1. 하이퍼클래스에 로그인해 **설정 > 도메인 > 도메인 추가**로 이동하세요. 새로 만든 사이트에 쓸 도메인을 입력하세요.

![도메인 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363604/original/82xMFET3DaF34HXltGXGCgkSiIfdf6tmZA.png?1725571468)

---

## 자동화 이전

Zoho Automation에는 규칙 기반 트리거, 자동 응답, 리드 스코어링, 커스텀 워크플로우, Zoho의 다른 앱과의 연동 기능이 있어요. Zoho 워크플로우는 조건부 로직과 시간 기반 액션을 지원해요. 자동화 구조를 먼저 기록한 뒤 하이퍼클래스 워크플로우에서 다시 만들어야 해요.

### 1단계: Zoho의 자동화 기록하기

1. 워크플로우 규칙을 기록하세요. **Setup > Automation > Workflow Rules**로 이동하세요. **Workflow Rules** 페이지에서 활성화된 규칙을 모두 확인하세요.
2. 자동 응답을 기록하세요. **Leads/Contacts** 탭을 누르세요. **Leads/Contacts** 홈 페이지에서 **More Actions**(점 3개) > **Autoresponders**를 누르세요.
3. 리드 스코어링 규칙을 기록하세요. **Setup > Automation > Scoring Rule**로 이동하세요.

### 2단계: 하이퍼클래스에서 참여 스코어링 다시 만들기

1. 리드 스코어링을 똑같이 만드세요. 서브 계정의 **설정 > 스코어링 관리 > + 새 규칙 추가**로 이동하세요. 계산 방식이 Zoho 설정과 같도록 맞추세요.

### 3단계: 하이퍼클래스에서 트리거와 액션 다시 만들기

1. 하이퍼클래스에 로그인해 **자동화 > 워크플로우**로 이동하세요.
2. 트리거와 액션을 설정하세요. 워크플로우 기능으로 Zoho와 비슷한 트리거와 액션을 구성하고, 자동 응답, 이메일 시퀀스, 작업 배정 같은 핵심 자동화가 모두 옮겨졌는지 확인하세요. 남은 참여 스코어링 규칙은 워크플로우에서 참여 점수를 수정하는 액션을 활용해 똑같이 만드세요.

![워크플로우 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363609/original/IIIuI5mijTc-bML0MZmh8ssrnoLOUE0U7w.png?1725571474)

---

## 분석 이전

Zoho Analytics는 Zoho 앱 전반의 데이터 분석과 리포팅을 제공해요. 드래그 앤 드롭으로 리포트를 만들 수 있고, 차트와 대시보드로 데이터를 시각화할 수 있어요. 만든 데이터를 공유하고 내보내는 것도 지원해요. 마지막으로, 고객이 Zoho에서 데이터를 내보내도록 돕고 하이퍼클래스의 리포팅 기능을 안내해 주세요.

### 1단계: Zoho Analytics 내보내기

1. Zoho에서 분석 데이터 같은 추가 데이터나 설정을 직접 내보내거나 복사하세요.

### 2단계: 하이퍼클래스 리포팅 기능 안내하기

1. 커스텀 위젯: Zoho Analytics와 비슷하게 대시보드 위젯에서 리포팅을 다시 만드세요. Pro 플랜 사용자만 쓸 수 있어요.
2. 자세한 내용은 [하이퍼클래스 리포팅 FAQ](../../18-리포팅/추적-어트리뷰션/reporting-faqs.md)를 참고하세요.

![리포팅 기능 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032363607/original/-fU9Euz4uDj3WBgDNJgTornOXWMMuy_4lQ.png?1725571471)
