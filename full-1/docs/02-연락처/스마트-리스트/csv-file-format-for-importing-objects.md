---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-objects
번역일: 2026-11-06
카테고리: 02-연락처
---

# 오브젝트 가져오기용 CSV 파일 형식

CSV 파일을 하이퍼클래스로 가져오기 전에 형식을 맞추는 방법을 안내해요. 이 가이드를 따르면 자주 생기는 가져오기 오류를 피하고, 시간을 아끼면서 데이터를 CRM에 깔끔하게 옮길 수 있어요.

## CSV 파일을 미리 준비하면 좋은 점

가져오기 전에 CSV 파일 형식을 올바르게 맞춰 두면 연락처 데이터가 깔끔하고 빠짐없이 정확하게 매핑돼요.

- 가져오기 오류나 업로드 실패가 줄어요.
- 가져오는 중에 하이퍼클래스가 필드를 자동으로 매핑하도록 도와줘요.
- 연락처 중복 제거와 정확한 업데이트가 가능해져요.
- 커스텀 필드와 고급 세분화를 활용할 수 있어요.
- 가져온 뒤에 데이터를 따로 정리하는 시간을 아낄 수 있어요.
- 연락처·기회를 대량으로 업로드할 때 성공률이 높아져요.

---

## CSV 파일 형식이란?

CSV는 'Comma-Separated Values'(쉼표로 구분된 값)의 줄임말이에요. 스프레드시트나 데이터베이스처럼 표 형태의 데이터를 저장하는 간단한 파일 형식이에요. CSV 파일에서 한 줄은 레코드 하나이고, 레코드 안의 필드는 쉼표로 구분해요. 서로 다른 시스템 사이에서 데이터를 가져오고 내보낼 때 가장 많이 쓰는 형식 중 하나예요.

- CSV 파일의 확장자는 보통 `.csv`예요.
- Excel, Google Sheets, 메모장 같은 도구에서 만들거나 편집할 수 있어요.
- 가져오기 문제를 막으려면 파일에 시트가 하나만 있어야 해요.

**예시**

| 이름 | 성 | 이메일 | 전화번호 |
| --- | --- | --- | --- |
| Jane | Doe | jane@example.com | +11234567890 |
| John | Smith | john@example.com | +10987654321 |

---

## 파일 구성하기

데이터가 정확하게 매핑되도록 열 머리글(헤더)을 하이퍼클래스의 기본 필드 또는 커스텀 필드에 맞춰 구성하세요.

### 1. 샘플 CSV 형식

| 이름 | 성 | 이메일 | 전화번호 | 회사 | 태그 | 상태 | 생성일 | 추가 전화번호 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| John | Doe | john@example.com | +11234567890 | ABC Corp | VIP, 리드 | 신규 | 01/01/2024 | +17877123462 |
| Jane | Smith | jane@example.com | +15556667777 | XYZ Ltd | 구매자 | 활성 | 02/02/2024 | +17877123464 |

- 각 행은 연락처 하나 또는 기회 하나를 나타내요.
- 각 열은 서로 다른 속성을 나타내요.
- 필드를 올바르게 매핑하려면 헤더 행이 필요해요.

### 2. 필수 필드

연락처를 만들거나 업데이트하려면 아래 중 하나 이상이 필요해요.

- **First Name**(이름)
- **이메일 주소**
- **전화번호**

{% hint style="info" %}
연락처를 업데이트할 때는 중복 설정에 따라 고유 식별자(연락처 ID, 이메일, 전화번호)가 필요해요. 기회를 업데이트할 때는 **기회 ID**를 포함하세요. 포함하지 않으면 새 기회가 만들어져요.
{% endhint %}

### 3. 필드 형식

가져오기 실패를 막으려면 아래 형식 규칙을 따르세요.

| 필드 유형 | 허용 형식 / 참고 |
| --- | --- |
| **Date Picker**(날짜 선택기, 날짜 필드) | MM/DD/YYYY, YYYY/MM/DD, MM-DD-YYYY, YYYY-MM-DD |
| **Multi-Select**(다중 선택) / **체크박스** | 쉼표: `VIP, Lead`, 세미콜론: `Gold; Silver`, 마침표: `Yes. No` ❌ 슬래시 = 사용 불가 |
| **Single Option**(단일 선택, 드롭다운) | 값 하나만 입력해요. 예: `Blue` |
| **Contact Owner**(연락처 담당자) | `FirstName LastName` — 예: `Logan Paul` |
| **태그** | 쉼표, 세미콜론, 마침표로 구분해요. 예: `Blue, Yellow`, `Blue; Yellow` |
| **전화번호** | E.164 형식 `+11234567890`을 권장해요. `123-456-7890`, `(123) 456-7890`도 쓸 수 있어요(미국 번호만). |
| 올바르지 않은 전화번호 형식 | `1234567`, `abc1234567` |
| **Numerical**(숫자) 필드 | `1.23`, `1234`, `.123` |
| **Monetary**(금액) 필드 | `1234`, `1,234,234.33` |
| **Contact Followers**(연락처 팔로워) | `FirstName LastName, FirstName2 LastName2` — 예: `Adam Smith, David Lee` |
| **추가 이메일** | `abc@email.com, abc1@email.com` |
| **추가 전화번호** | `+1 7877123460, +1 7877123461` |

### 4. 지원하는 파일 형식과 크기

업로드에 성공하려면 파일이 몇 가지 기본 조건을 충족해야 해요.

| 조건 | 세부 내용 |
| --- | --- |
| 파일 형식 | `.csv`만 가능 |
| 허용 시트 수 | 파일당 시트 1개 |
| 최대 파일 크기 | 30 MB |

### 5. 가져오기에 필요한 필드와 선택 필드

알맞은 필드를 포함하면 하이퍼클래스가 레코드를 정확하게 식별하고 처리할 수 있어요.

| 가져오기 작업 | 필수/선택 필드 | 참고 |
| --- | --- | --- |
| 새 연락처 | 이름, 이메일, 전화번호 중 하나 | 최소 하나는 필요해요 |
| 기존 연락처 업데이트 | 연락처 ID 또는 이름/이메일/전화번호 | 중복 설정에 따라 달라요 |
| 헤더 행 | 필수 | 헤더는 하이퍼클래스의 기존 필드 또는 커스텀 필드와 일치해야 해요 |

### 6. 필드 유형별 형식 가이드

가져오기 오류를 막으려면 CSV의 데이터 유형별로 아래 형식 규칙을 따르세요.

| 필드 유형 | 형식 | 예시 | 참고 |
| --- | --- | --- | --- |
| **전화번호** | E.164 또는 미국 표준 형식 | `+1 1234567890`, `123-456-7890` | 깔끔하고 일관된 형식으로 입력하세요 |
| **이메일 주소** | 표준 형식 | `name@example.com` | `@`와 도메인이 있어야 해요 |
| **날짜** | 여러 형식 사용 가능 | `04/16/2025`, `2025-04-16` | 한 가지 형식을 정해 그대로 쓰세요 |
| **Multi-Select**(다중 선택) 필드 | `,`, `;`, `.`로 구분 | `Blue, Yellow, Green` | CRM의 필드 옵션과 일치해야 해요 |
| **추가 이메일** | 쉼표로 구분 | `email1@example.com, email2@example.com` | 별도 열에 추가하세요 |
| **추가 전화번호** | 쉼표로 구분 | `1234567890, 9876543210` | 별도 열에 추가하세요 |

{% hint style="info" %}
CSV를 가져오기 전에, 같은 레이블과 데이터 유형으로 하이퍼클래스 계정에 **커스텀 필드**를 미리 만들어 두세요. 커스텀 필드를 만드는 방법은 '병합 필드 및 커스텀 변수 개요' 문서를 참고하세요.
{% endhint %}

---

## CSV 가져오기에서 지원하는 국가 목록

이 섹션에는 CSV로 가져오기를 할 때 인식되는 국가 이름 표가 있어요. 기본 필드든 커스텀 필드든 국가 필드를 매핑할 때 CSV 파일에 써야 하는 공식 국가 값이에요. 아래 목록의 국가 이름 또는 약어 코드를 그대로 사용하세요.

<!-- 검토 필요: 원문 내용이 서로 다름 (위 문단은 '국가 이름 또는 약어 코드'를 쓰라고 하지만, 아래 형식 설명은 목록의 정확한 이름과 일치해야 하고 USA 같은 약어는 오류가 난다고 함) -->

CSV에는 표의 영문 이름을 그대로 입력해야 해서 표는 영어로 두었어요.

- 목적: 하이퍼클래스는 가져오기 중에 국가 이름을 검증해요. CSV에 `Country` 필드가 있으면 모든 행이 이 목록의 정확한 이름 중 하나와 일치해야 해요.
- 형식: 정확히 일치해야 하고, 대소문자와 철자를 구분해요. 예를 들어 `United States`는 인식되지만 `USA`나 `U.S.`는 오류가 나요.
- 커스텀 필드 사용: 커스텀 국가 필드를 쓰는 경우에도 호환성을 위해 이 목록을 따르는 것이 좋아요.

| 국가 이름 (코드) | 국가 이름 (코드) | 국가 이름 (코드) |
| --- | --- | --- |
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

---

## 지원하는 시간대

CSV에는 아래 시간대 형식 중 하나를 쓰세요. 대소문자를 구분하며 정확히 일치해야 해요.

| **시간대** | **시간대** | **시간대** |
| --- | --- | --- |
| Etc/GMT+12 | Pacific/Midway | Pacific/Honolulu |
| America/Juneau | US/Alaska | America/Dawson |
| America/Los\_Angeles | America/Phoenix | America/Tijuana |
| US/Arizona | America/Belize | America/Boise |
| America/Chihuahua | America/Denver | America/Edmonton |
| America/Guatemala | America/Managua | America/Regina |
| Canada/Saskatchewan | US/Mountain | America/Bahia\_Banderas |
| America/Bogota | America/Cancun | America/Chicago |
| America/Mexico City | US/Central | America/Caracas |
| America/Detroit | America/Indiana/Indianapolis | America/Louisville |
| America/Manaus | America/New\_York | America/Santiago |
| America/Santo\_Domingo | America/Toronto | US/East-Indiana |
| US/Eastern | America/Argentina/Buenos\_Aires | America/Glace\_Bay |
| America/Montevideo | America/Sao\_Paulo | Canada/Atlantic |
| America/St\_Johns | Canada/Newfoundland | America/Godthab |
| America/Noronha | Etc/GMT+2 | Atlantic/Cape\_Verde |
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
| Asia/Krasnoyarsk | Asia/Irkutsk | Asia/Kuala\_Lumpur |
| Asia/Shanghai | Asia/Taipei | Australia/Perth |
| Asia/Seoul | Asia/Tokyo | Asia/Yakutsk |
| Australia/Adelaide | Australia/Darwin | Asia/Vladivostok |
| Australia/Brisbane | Australia/Canberra | Australia/Hobart |
| Australia/Sydney | Pacific/Guam | Asia/Magadan |
| Pacific/Auckland | Pacific/Fiji | Pacific/Tongatapu |

---

## 자주 묻는 질문

### 전화번호나 이메일이 두 개 이상인 연락처도 가져올 수 있나요?
네. **추가 전화번호**, **추가 이메일**처럼 열을 따로 만들고, 항목은 쉼표로 구분하세요.

### CSV에 하이퍼클래스에 없는 필드가 있으면 어떻게 되나요?
가져오는 과정에서 기존 기본 필드나 커스텀 필드에 매핑하지 않으면 그 필드는 무시돼요.

### 하이퍼클래스가 중복을 자동으로 찾아 주나요?
네. **Duplicate Detection Settings**(중복 감지 설정)에 따라 연락처 ID, 전화번호, 이메일로 일치하는 연락처를 찾고, 중복 항목을 병합하거나 건너뛸 수 있어요.

### CSV 가져오기로 연락처를 업데이트할 수 있나요?
네. 중복 확인에 쓰는 필드(연락처 ID, 이메일, 전화번호 등)를 포함해 주세요.

### 빈 행과 빈 열도 정리해야 하나요?
네. 가져오기가 예상과 다르게 동작하지 않도록 불필요한 데이터는 모두 지우는 것이 좋아요.
