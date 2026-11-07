---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005056-getting-started-import-existing-contacts
번역일: 2026-11-07
카테고리: 01-시작하기
---

# 기존 연락처 가져오기

다른 플랫폼에 흩어져 있던 연락처를 하이퍼클래스 한곳으로 가져오는 방법을 안내해요. 가져온 뒤에는 커스텀 필드 만들기와 일괄 작업도 바로 해 볼 수 있어요.

## 연락처 가져오기

연락처를 한 번에 가져오면 바로 고객과 소통을 시작할 수 있어요. 아래 순서대로 따라 하세요.

1. **연락처**로 이동하세요.
2. **가져오기**를 클릭하세요. 아이콘은 상자 안으로 내려가는 화살표 모양이에요.

   ![연락처 화면의 가져오기 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058441185/original/tr8zV_KRpz8yFGutf5QmFlmQFML_aGP5TA.png?1763144072)
3. 가져오기 1단계 화면에서 **연락처**를 선택하고 **다음**을 클릭하세요.

   ![가져오기 1단계에서 연락처 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046215598/original/lUtMFGKtXA-f_dz_aDClWP0xhSZlEMwwGw.png?1746573893)
4. 파일 형식을 확인하세요.
5. **파일 업로드**에서 파일을 올리세요. CSV 파일은 최대 50MB까지 올릴 수 있어요. 표준 연락처 필드가 들어 있는 샘플 파일이 필요하면 **샘플 파일 다운로드**를 클릭하세요.

   [표준 연락처 필드 목록 보기](#가져오기-때-쓸-수-있는-표준-연락처-필드)

   ![파일 업로드 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046216140/original/1aVLfm5EKJlqs4Ti13u6lR9h2bGK2PUxrA.png?1746575591)
6. 파일의 각 컬럼을 알맞은 **연락처 필드**에 연결하세요.

   - 표준 필드에 없는 데이터가 있으면 새 커스텀 필드를 만드세요.
   - 아니면 **일치하지 않는 컬럼의 데이터는 가져오지 않음**을 선택하세요.

     ![파일 컬럼을 연락처 필드에 연결하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046216235/original/TMntSMbquKeGYMSwCwF5YEXqtOaRDhH5CA.png?1746576028)
7. 가져오기 이름 정하기, 리스트 만들기, 수신 동의 설정 같은 세부 정보를 입력하고 **대량 가져오기**를 클릭하세요.

   ![가져오기 세부 정보 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046216248/original/C1fc4vamtJlCsNjarrszZW6rQMsO0tBvKg.png?1746576108)
8. 연락처 가져오기가 끝날 때까지 기다리세요.

다음 단계가 궁금하다면 아래 문서를 참고하세요.

- [CSV 파일로 연락처 가져오기](../../02-연락처/importing-contacts-using-a-csv-file.md)
- [CSV로 연락처와 기회 함께 가져오기](../../02-연락처/importing-contacts-and-opportunities-via-csv.md)
- [중복 연락처 허용(연락처 중복 제거 설정)](../../11-설정/Business-Profile-Settings/allow-duplicate-contacts-contact-deduplication-preferences.md)

연락처를 가져왔다면 이제 타깃 고객별로 나눠 소통해 보세요.

---

## 새 커스텀 필드 만들기

커스텀 필드를 만들면 우리 비즈니스에 필요한 정보를 연락처에 따로 저장할 수 있어요. 이렇게 저장한 정보로 더 정확하게 타기팅하고 고객을 더 깊이 이해할 수 있어요.

커스텀 필드는 아래 순서로 만드세요.

1. **설정 > 커스텀 필드**로 이동하세요.
2. **필드 추가**를 클릭하세요.

   ![커스텀 필드 화면의 필드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046216564/original/_KY3LSJEDIHXp2GRjNL4KZNEGo7jnICWYw.png?1746577051)
3. 필요한 필드 유형을 선택하세요.

   ![필드 유형 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046216609/original/TWy7U03FDfm8qPkWApA9G0ujmmbWPux32g.png?1746577171)
4. 이름, 그룹, 플레이스홀더 같은 필드 세부 정보를 입력하세요.

   ![필드 세부 정보 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046216614/original/5lrHi73tFyW2sHhFdawu9KNMu5hOzKIbTw.png?1746577217)
5. **저장**을 클릭하세요.

더 알아보려면 아래 문서를 참고하세요.

- [커스텀 필드 사용하기](../../23-레거시-자동화/how-to-use-custom-fields.md)

만든 커스텀 필드는 캠페인과 메시지를 개인화하는 데 활용해 보세요.

---

## 연락처 일괄 작업

일괄 작업을 쓰면 많은 연락처를 한 번에 관리할 수 있어요. 태그 추가, 이메일 발송, 자동화 시작 같은 작업을 한꺼번에 처리해 시간을 아낄 수 있어요.

일괄 작업은 아래 순서로 진행하세요.

1. **연락처**로 이동하세요.

   ![연락처 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046216682/original/g4P9dPnIE-3D9M_mIn12is7Hnp49C2DWCg.png?1746577568)
2. **필터 적용**으로 대상 연락처를 좁히세요.

   ![필터를 적용한 연락처 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046216730/original/ErMW3Cyblh2BwxCwkzlcV8cL3a_9JoVSFw.png?1746577637)
3. 원하는 연락처 옆의 체크박스를 선택하세요.

   ![연락처 체크박스 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046216740/original/nXzOqDX0FttIxf0kUVsRK4FvjXg8O8S0FQ.png?1746577775)
4. 일괄 작업 버튼을 클릭하세요. 예를 들면 **Add to Automation**(자동화에 추가), **Send SMS**(SMS 보내기), **Send Email**(이메일 보내기)이 있어요.

   ![일괄 작업 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046216756/original/GyoqnvFpzPOPeKHiLCIAwROySc-WnikCaw.png?1746577843)

더 알아보려면 아래 문서를 참고하세요.

- [일괄 작업: 여러 연락처에 태그 추가하기](../../02-연락처/일괄-작업/adding-tags-to-multiple-contacts.md)

---

## 가져오기 때 쓸 수 있는 표준 연락처 필드

연락처를 가져올 때 쓸 수 있는 표준 연락처 필드는 다음과 같아요.

- **Contact ID**(연락처 ID)
- **Name**(이름)
- **First Name**(이름 중 이름 부분)
- **Last Name**(성)
- **생년월일**
- **Contact Owner**(연락처 담당자)
- **연락처 출처**
- **연락처 유형**
- **사업자명**
- **Phone**(전화번호)
- **Email**(이메일)
- **사업자명**
- **Address**(주소)
- **State**(주)
- **City**(도시)
- **Postal Code**(우편번호)
- **Country**(국가)
- **DND**(수신거부)
- **Time Zone**(시간대)
- **Website**(웹사이트)
- **Additional Email**(추가 이메일)
- **추가 전화번호**
- **Notes**(메모)

---

다음으로 자동화 도구를 살펴보고 고객과의 소통을 더 넓혀 보세요.
