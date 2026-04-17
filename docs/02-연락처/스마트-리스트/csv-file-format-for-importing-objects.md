---

번역일: 2026-04-06
카테고리: 02-연락처 > 스마트-리스트
---

# 객체 가져오기를 위한 CSV 파일 형식

이 가이드는 Hyperclass로 데이터를 가져오기 전에 CSV 파일을 올바르게 형식화하는 방법을 알려드립니다. 이 가이드를 따르시면 일반적인 가져오기 오류를 방지하고, 시간을 절약하며, 데이터가 CRM으로 원활하게 유입되도록 할 수 있습니다.

---

**목차**

- [CSV 파일 준비의 주요 장점](#csv-파일-준비의-주요-장점)
- [CSV 파일 형식이란?](#csv-파일-형식이란)
- [파일 구조화하기](#파일-구조화하기)
  - [1. CSV 형식 샘플](#1-csv-형식-샘플)
  - [2. 필수 필드](#2-필수-필드)
  - [3. 필드 형식](#3-필드-형식)
  - [4. 지원되는 파일 유형 및 크기](#4-지원되는-파일-유형-및-크기)
  - [5. 가져오기 시 필수/선택 필드](#5-가져오기-시-필수선택-필드)
  - [6. 필드 유형별 형식 가이드라인](#6-필드-유형별-형식-가이드라인)
- [CSV 가져오기에서 지원되는 국가 목록](#csv-가져오기에서-지원되는-국가-목록)
- [지원되는 시간대](#지원되는-시간대)
- [자주 묻는 질문](#자주-묻는-질문)

---

## **CSV 파일 준비의 주요 장점**

가져오기 전에 CSV 파일을 올바르게 형식화하는 시간을 투자하면 연락처 데이터가 깔끔하고 완전하며 정확하게 매핑됩니다.

- 가져오기 오류나 업로드 실패 가능성 감소
- Hyperclass가 가져오기 중 필드를 자동으로 매핑하도록 도움
- 연락처 중복 제거 및 정확한 업데이트 지원
- 커스텀 필드 및 고급 세그멘테이션 지원
- 가져오기 후 정리 작업을 피해 시간 절약
- 연락처/기회 대량 업로드 성공률 증대

---

## CSV 파일 형식이란?

CSV는 'Comma-Separated Values(쉼표로 구분된 값)'의 줄임말입니다. 스프레드시트나 데이터베이스 같은 표 형태의 데이터를 저장하는 단순한 파일 형식입니다. CSV 파일의 각 줄은 하나의 레코드를 나타내며, 레코드 내의 필드는 쉼표로 구분됩니다. 서로 다른 시스템 간에 데이터를 가져오고 내보낼 때 가장 널리 사용되는 형식 중 하나입니다.

- CSV 파일은 일반적으로 .csv 확장자를 가집니다.
- Excel, Google 시트, 메모장 같은 도구에서 생성하거나 편집할 수 있습니다.
- 가져오기 문제를 방지하기 위해 파일에 한 개의 시트만 있어야 합니다.

**예시**:

| 이름 | 성 | 이메일 | 전화번호 |
|------|-----|--------|----------|
| Jane | Doe | jane@example.com | +11234567890 |
| John | Smith | john@example.com | +10987654321 |

---

## 파일 구조화하기

정확한 데이터 매핑을 보장하려면 Hyperclass의 표준 또는 커스텀 필드에 해당하는 열 헤더로 CSV 파일을 구조화하세요.

### 1. CSV 형식 샘플

| 이름 | 성 | 이메일 | 전화번호 | 회사 | 태그 | 상태 | 생성일 | 추가 전화번호 |
|------|-----|--------|----------|------|------|------|--------|---------------|
| John | Doe | john@example.com | +11234567890 | ABC Corp | VIP, Lead | New | 01/01/2024 | +17877123462 |
| Jane | Smith | jane@example.com | +15556667777 | XYZ Ltd | Customer | Active | 02/02/2024 | +17877123464 |

- 각 행은 하나의 연락처나 기회를 나타냅니다.
- 각 열은 고유한 속성을 나타냅니다.
- 필드를 올바르게 매핑하려면 헤더 행이 필요합니다.

### 2. 필수 필드

연락처를 생성하거나 업데이트하려면 다음 중 하나 이상이 필요합니다:

- 이름
- 이메일 주소
- 전화번호

**참고**: 연락처를 업데이트할 때는 중복 제거 설정에 따라 고유 식별자(연락처 ID, 이메일 또는 전화번호)가 필요합니다. 기회의 경우 업데이트 시 기회 ID를 포함하세요. 없으면 새로운 기회가 생성됩니다.

### 3. 필드 형식

가져오기 실패를 방지하려면 다음 특정 형식 규칙을 따르세요:

| 필드 유형 | 허용 형식 / 참고사항 |
|-----------|---------------------|
| 날짜 선택기 (날짜 필드) | MM/DD/YYYY, YYYY/MM/DD, MM-DD-YYYY, YYYY-MM-DD |
| 다중 선택 / 체크박스 | 쉼표: VIP, Lead, 세미콜론: Gold; Silver, 마침표: Yes. No ❌ 슬래시 = 유효하지 않음 |
| 단일 옵션 (드롭다운) | 값 하나만. 예시: Blue |
| 연락처 담당자 | FirstName LastName — 예: Logan Paul |
| 태그 | 쉼표, 세미콜론 또는 마침표. 예: Blue, Yellow, Blue; Yellow |
| 전화번호 | E.164: +11234567890 (권장); 123-456-7890, (123) 456-7890 (미국만) |
| 유효하지 않은 전화번호 형식 | 1234567, abc1234567 |
| 숫자 필드 | 1.23, 1234, .123 |
| 통화 필드 | 1234, 1,234,234.33 |
| 연락처 팔로워 | FirstName LastName, FirstName2 LastName2 — 예: Adam Smith, David Lee |
| 추가 이메일 | abc@email.com, abc1@email.com |
| 추가 전화번호 | +1 7877123460, +1 7877123461 |

### 4. 지원되는 파일 유형 및 크기

성공적인 업로드를 위해 파일이 특정 기본 요구사항을 충족해야 합니다.

| 요구사항 | 세부사항 |
|----------|----------|
| 파일 형식 | .csv만 |
| 허용 시트 | 파일당 한 개 시트 |
| 최대 파일 크기 | 30 MB |

### 5. 가져오기 시 필수/선택 필드

올바른 필드를 포함하면 Hyperclass가 레코드를 정확하게 식별하고 처리하는 데 도움이 됩니다.

| 가져오기 작업 | 필수/선택 필드 | 참고사항 |
|---------------|----------------|----------|
| 신규 연락처 | 이름 또는 이메일 또는 전화번호 | 하나 이상 필수 |
| 기존 연락처 업데이트 | 연락처 ID 또는 이름/이메일/전화번호 | 중복 설정에 따라 결정 |
| 헤더 행 | 필수 | 헤더는 Hyperclass의 기존 또는 커스텀 필드와 일치해야 함 |

### 6. 필드 유형별 형식 가이드라인

CSV에서 가져오기 오류를 방지하려면 각 데이터 유형에 대해 다음 형식 규칙을 따르세요.

| 필드 유형 | 형식 | 예시 | 참고사항 |
|-----------|------|------|----------|
| 전화번호 | E.164 또는 표준 미국 형식 | +1 1234567890, 123-456-7890 | 깨끗하고 일관된 형식 |
| 이메일 주소 | 표준 형식 | name@example.com | @와 도메인 포함 필수 |
| 날짜 | 여러 허용 형식 | 04/16/2025, 2025-04-16 | 한 가지 형식을 선택하여 일관되게 사용 |
| 다중 선택 필드 | ,, ;, 또는 .로 구분 | Blue, Yellow, Green | CRM의 필드 옵션과 일치해야 함 |
| 추가 이메일 | 쉼표로 구분 | email1@example.com, email2@example.com | 별도 열에 추가 |
| 추가 전화번호 | 쉼표로 구분 | 1234567890, 9876543210 | 별도 열에 추가 |

**팁**: CSV를 가져오기 전에 동일한 라벨과 데이터 유형을 사용하여 Hyperclass 계정에 커스텀 필드가 이미 생성되어 있는지 확인하세요.

커스텀 필드 생성에 대한 도움말은 [Merge Fields & Custom Variables 개요](../../40-병합필드-변수/Merge-Fields-&amp;-Custom-Variables/overview-of-merge-fields-custom-variables.md)를 참조하세요.

## CSV 가져오기에서 지원되는 국가 목록

이 섹션에는 Hyperclass로 CSV 가져오기 시 허용되는 국가명 표가 포함되어 있습니다. 표준 또는 커스텀 국가 필드를 매핑할 때 CSV 파일에서 사용해야 하는 공식 국가값입니다. CSV 파일에는 아래 나열된 정확한 국가명 또는 단축 코드를 사용하세요.

- **목적**: Hyperclass는 가져오기 중 국가명을 검증합니다. CSV에 국가 필드가 포함된 경우, 각 행은 이 목록의 정확한 이름 중 하나와 일치해야 합니다.
- **형식**: 정확히 일치해야 함—대소문자 구분 및 철자 구분. 예를 들어 United States는 허용되지만 USA나 U.S.는 오류를 발생시킵니다.
- **커스텀 필드 사용**: 커스텀 국가 필드를 사용하는 경우에도 호환성을 유지하기 위해 이 목록을 준수하는 것이 좋습니다.

| 국가명 (코드) | 국가명 (코드) | 국가명 (코드) |
|---------------|---------------|---------------|
| Afghanistan (AF) | Albania (AL) | Algeria (DZ) |
| Andorra (AD) | Angola (AO) | Antigua and Barbuda (AG) |
| Argentina (AR) | Armenia (AM) | Australia (AU) |
| Austria (AT) | Azerbaijan (AZ) | Bahamas (BS) |
| Bahrain (BH) | Bangladesh (BD) | Barbados (BB) |
| Belarus (BY) | Belgium (BE) | Belize (BZ) |
| Benin (BJ) | Bhutan (BT) | Bolivia (BO) |
| Bosnia and Herzegovina (BA) | Botswana (BW) | Brazil (BR) |
| Brunei (BN) | Bulgaria (BG) | Burkina Faso (BF) |
| Burundi (BI) | Cabo Verde (CV) | Cambodia (KH) |
| Cameroon (CM) | Canada (CA) | Central African Republic (CF) |
| Chad (TD) | Chile (CL) | China (CN) |
| Colombia (CO) | Comoros (KM) | Congo (CG) |
| Congo (Kinshasa) (CD) | Costa Rica (CR) | Croatia (HR) |
| Cuba (CU) | Cyprus (CY) | Czech Republic (CZ) |
| Denmark (DK) | Djibouti (DJ) | Dominica (DM) |
| Dominican Republic (DO) | East Timor (TL) | Ecuador (EC) |
| Egypt (EG) | El Salvador (SV) | Equatorial Guinea (GQ) |
| Eritrea (ER) | Estonia (EE) | Eswatini (SZ) |
| Ethiopia (ET) | Fiji (FJ) | Finland (FI) |
| France (FR) | Gabon (GA) | Gambia (GM) |
| Georgia (GE) | Germany (DE) | Ghana (GH) |
| Greece (GR) | Grenada (GD) | Guatemala (GT) |
| Guinea (GN) | Guinea-Bissau (GW) | Guyana (GY) |
| Haiti (HT) | Honduras (HN) | Hungary (HU) |
| Iceland (IS) | India (IN) | Indonesia (ID) |
| Iran (IR) | Iraq (IQ) | Ireland (IE) |
| Israel (IL) | Italy (IT) | Jamaica (JM) |
| Japan (JP) | Jordan (JO) | Kazakhstan (KZ) |
| Kenya (KE) | Kiribati (KI) | Korea, North (KP) |
| Korea, South (KR) | Kosovo (XK) | Kuwait (KW) |
| Kyrgyzstan (KG) | Laos (LA) | Latvia (LV) |
| Lebanon (LB) | Lesotho (LS) | Liberia (LR) |
| Libya (LY) | Liechtenstein (LI) | Lithuania (LT) |
| Luxembourg (LU) | Madagascar (MG) | Malawi (MW) |
| Malaysia (MY) | Maldives (MV) | Mali (ML) |
| Malta (MT) | Marshall Islands (MH) | Mauritania (MR) |
| Mauritius (MU) | Mexico (MX) | Micronesia (FM) |
| Moldova (MD) | Monaco (MC) | Mongolia (MN) |
| Montenegro (ME) | Morocco (MA) | Mozambique (MZ) |
| Myanmar (MM) | Namibia (NA) | Nauru (NR) |
| Nepal (NP) | Netherlands (NL) | New Zealand (NZ) |
| Nicaragua (NI) | Niger (NE) | Nigeria (NG) |
| North Macedonia (MK) | Norway (NO) | Oman (OM) |
| Pakistan (PK) | Palau (PW) | Panama (PA) |
| Papua New Guinea (PG) | Paraguay (PY) | Peru (PE) |
| Philippines (PH) | Poland (PL) | Portugal (PT) |
| Qatar (QA) | Romania (RO) | Russia (RU) |
| Rwanda (RW) | Saint Kitts and Nevis (KN) | Saint Lucia (LC) |
| Saint Vincent and the Grenadines (VC) | Samoa (WS) | San Marino (SM) |
| Sao Tome and Principe (ST) | Saudi Arabia (SA) | Senegal (SN) |
| Serbia (RS) | Seychelles (SC) | Sierra Leone (SL) |
| Singapore (SG) | Slovakia (SK) | Slovenia (SI) |
| Solomon Islands (SB) | Somalia (SO) | South Africa (ZA) |
| South Sudan (SS) | Spain (ES) | Sri Lanka (LK) |
| Sudan (SD) | Suriname (SR) | Sweden (SE) |
| Switzerland (CH) | Syria (SY) | Taiwan (TW) |
| Tajikistan (TJ) | Tanzania (TZ) | Thailand (TH) |
| Togo (TG) | Tonga (TO) | Trinidad and Tobago (TT) |
| Tunisia (TN) | Turkey (TR) | Turkmenistan (TM) |
| Tuvalu (TV) | Uganda (UG) | Ukraine (UA) |
| United Arab Emirates (AE) | United Kingdom (GB) | United States (US) |
| Uruguay (UY) | Uzbekistan (UZ) | Vanuatu (VU) |
| Vatican City (VA) | Venezuela (VE) | Vietnam (VN) |
| Yemen (YE) | Zambia (ZM) | Zimbabwe (ZW) |

## 지원되는 시간대

CSV에서 다음 시간대 형식 중 하나를 사용하세요. 대소문자를 구분하며 정확히 일치해야 합니다.

| **시간대** | **시간대** | **시간대** |
|------------|------------|------------|
| Etc/GMT+12 | Pacific/Midway | Pacific/Honolulu |
| America/Juneau | US/Alaska | America/Dawson |
| America/Los_Angeles | America/Phoenix | America/Tijuana |
| US/Arizona | America/Belize | America/Boise |
| America/Chihuahua | America/Denver | America/Edmonton |
| America/Guatemala | America/Managua | America/Regina |
| Canada/Saskatchewan | US/Mountain | America/Bahia_Banderas |
| America/Bogota | America/Cancun | America/Chicago |
| America/Mexico City | US/Central | America/Caracas |
| America/Detroit | America/Indiana/Indianapolis | America/Louisville |
| America/Manaus | America/New_York | America/Santiago |
| America/Santo_Domingo | America/Toronto | US/East-Indiana |
| US/Eastern | America/Argentina/Buenos_Aires | America/Glace_Bay |
| America/Montevideo | America/Sao_Paulo | Canada/Atlantic |
| America/St_Johns | Canada/Newfoundland | America/Godthab |
| America/Noronha | Etc/GMT+2 | Atlantic/Cape_Verde |
| Atlantic/Azores | UTC | Africa/Algiers |
| Africa/Casablanca | Africa/Lagos | Atlantic/Canary |
| Europe/London | Africa/Cairo | Africa/Harare |
| Europe/Amsterdam | Europe/Belgrade | Europe/Brussels |
| Europe/Madrid | Europe/Oslo | Europe/Sarajevo |
| Africa/Nairobi | Asia/Amman | Asia/Baghdad |
| Asia/Jerusalem | Asia/Kuwait | Asia/Qatar |
| Europe/Athens | Europe/Bucharest | Europe/Helsinki |
| Europe/Moscow | Asia/Baku | Asia/Dubai |
| Asia/Kabul | Asia/Tehran | Asia/Karachi |
| Asia/Yekaterinburg | Asia/Colombo | Asia/Kolkata |
| Asia/Calcutta | Asia/Kathmandu | Asia/Almaty |
| Asia/Dhaka | Asia/Rangoon | Asia/Bangkok |
| Asia/Krasnoyarsk | Asia/Irkutsk | Asia/Kuala_Lumpur |
| Asia/Shanghai | Asia/Taipei | Australia/Perth |
| Asia/Seoul | Asia/Tokyo | Asia/Yakutsk |
| Australia/Adelaide | Australia/Darwin | Asia/Vladivostok |
| Australia/Brisbane | Australia/Canberra | Australia/Hobart |
| Australia/Sydney | Pacific/Guam | Asia/Magadan |
| Pacific/Auckland | Pacific/Fiji | Pacific/Tongatapu |

## 자주 묻는 질문

**Q: 전화번호나 이메일이 여러 개인 연락처를 가져올 수 있나요?**
네! 추가 전화번호, 추가 이메일 주소와 같은 별도 열을 사용하고 항목을 쉼표로 구분하세요.

**Q: Hyperclass에 없는 필드를 CSV에 포함하면 어떻게 되나요?**
가져오기 과정에서 기존 표준 또는 커스텀 필드에 매핑하지 않는 한 해당 필드는 무시됩니다.

**Q: Hyperclass가 중복을 자동으로 감지하나요?**
네, 중복 감지 설정에 따라 연락처 ID, 전화번호 또는 이메일로 일치시켜 중복을 병합하거나 건너뛸 수 있습니다.

**Q: CSV 가져오기로 연락처를 업데이트할 수 있나요?**
물론입니다. 중복 일치에 사용되는 필드(연락처 ID, 이메일 또는 전화번호 등)를 포함했는지 확인하세요.

**Q: 빈 행과 열을 정리해야 하나요?**
네. 예상치 못한 가져오기 동작을 방지하려면 불필요한 데이터를 모두 제거하는 것이 좋습니다.

---
*원문 최종 수정: Wed, 25 Feb, 2026 at 6:14 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*