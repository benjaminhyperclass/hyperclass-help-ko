---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004432-importing-contacts-using-a-csv-file
번역일: 2026-11-06
카테고리: 02-연락처
---

# CSV 파일로 연락처 가져오기

CSV 파일을 올려서 연락처를 하이퍼클래스로 가져오는 방법이에요. 파일을 업로드하고, 열을 필드에 연결하고, 내용을 확인하는 과정을 안내해요. 원하면 연락처와 함께 기회도 가져올 수 있어요.

{% hint style="warning" %}
하이퍼클래스에서는 CSV(.csv) 파일 형식으로만 가져올 수 있어요. Excel, Google Sheets 같은 다른 파일 형식은 사용할 수 없어요. 연락처와 기회를 가져올 때 쓰는 CSV 파일 형식은 'CSV File Format for Importing Contacts and Opportunities' 문서에서 자세히 확인하세요.
{% endhint %}

## 가져오기 전에 확인할 것

가져오기를 시작하기 전에 아래 조건을 확인하세요.

- 사용자 권한: **관리자** 권한이 있는 사용자만 연락처를 가져올 수 있어요.
- 파일 형식: CSV(.csv) 형식이어야 해요.
- 파일 크기: CSV 파일은 30MB 미만이어야 해요. 더 크면 여러 파일로 나누세요.
- 시트 수: CSV 파일에는 시트(탭)가 하나만 있어야 해요.
- 첫 번째 행: 첫 번째 행을 비워 두면 안 돼요. 열 제목 중 하나 이상이 시스템의 필드와 맞는 머리글 행을 넣으세요.

## 자주 하는 실수

❌ 열 제목이 맞지 않아요: CSV의 열 제목이 시스템 필드와 맞는지 확인하세요.

❌ 필수 항목이 비어 있어요: 모든 행에 이름, **이메일**, **전화번호** 중 하나 이상은 있어야 해요.

❌ 전화번호에 특수 문자를 넣었어요: 공백, 대시(-), 문자는 지우세요.

❌ CSV 안에 중복 데이터가 있어요: 가져오기 전에 목록을 정리하세요.

## CSV 파일로 연락처 가져오기

리드, 고객, 구매자 목록을 하이퍼클래스로 옮기는 가장 간단한 방법이에요. 다른 CRM에서 옮겨 오거나, 새 고객을 등록하거나, 첫 마케팅 캠페인을 준비할 때 CSV 파일 하나로 연락처를 올리고 정리할 수 있어요. 기회도 함께 가져오면 파이프라인을 더 쉽게 설정할 수 있어요.

### 1단계: 연락처 페이지로 이동하기

**연락처** 페이지로 이동한 뒤, 도구 모음에서 **Import Contacts**(연락처 가져오기) 버튼을 클릭하세요.

![연락처 페이지 도구 모음의 가져오기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045268769/original/qntGJzsHbNyAo4uqr_KzH2KJyDyMv6lnkg.png?1744890922)

### 2단계: 가져올 항목 선택하기

**연락처**만 가져올지, **연락처**와 **기회 관리**를 함께 가져올지 선택하세요.

![가져올 항목 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045269232/original/hblK0LKqfhz9WHiZfO5xoO0UMuxaLhHALg.png?1744891201)

### 3단계: CSV 파일 업로드하기

**연락처**를 선택하고 **다음**을 클릭한 뒤 CSV 파일을 업로드하세요. 새 연락처를 추가하는지, 기존 연락처를 **업데이트**하는지에 맞게 가져오기 유형을 선택하세요.

![CSV 파일 업로드와 가져오기 유형 선택 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045270049/original/vQyHg0jDGj9TG88kbdLBy_IItrA-4ZWVFQ.gif?1744891799)

{% hint style="info" %}
연락처를 업데이트할 때 하이퍼클래스는 아래 순서로 기존 데이터를 찾아요.
**Contact ID**(연락처 ID) → **이메일** → **전화번호**
이 순서 덕분에 정확하게 업데이트되고 중복이 생기지 않아요.
중복 확인 설정을 바꾸고 싶거나 더 알고 싶다면 [중복 연락처 허용(연락처 중복 제거 환경설정)](../11-설정/Business-Profile-Settings/allow-duplicate-contacts-contact-deduplication-preferences.md) 문서를 참고하세요.
{% endhint %}

### 4단계: 열을 필드에 연결하기

파일의 각 열이 시스템의 알맞은 필드에 연결되었는지 확인하세요. 아래 내용도 알아 두세요.

1. **Don't update Empty Values**(빈 값 업데이트 안 함) 체크박스를 선택하면, 가져오는 파일의 값이 비어 있고 기회의 해당 필드에 이미 값이 있을 때 그 필드를 업데이트하지 않아요.
2. 가져오지 않을 필드는 연결하지 않은 채로 두고, 아래쪽 체크박스를 선택한 뒤 진행할 수 있어요. 화면에는 "Please ensure all mandatory fields are mapped. To proceed, either map all fields or choose Don't import data for unmapped columns." 안내가 나와요. 필수 필드를 모두 연결했는지 확인하고, 모든 필드를 연결하거나 **Don't import data for unmapped columns**(연결하지 않은 열의 데이터는 가져오지 않음)를 선택하라는 뜻이에요.
3. CSV에서 연락처와 기회가 같은 줄에 있으면 서로 자동으로 연결돼요.

{% hint style="info" %}
CSV 파일에 하이퍼클래스에 아직 없는 필드의 데이터가 있다면, 가져오기를 끝내기 전에 해당 필드를 **커스텀 필드**로 먼저 만들어야 해요. CSV 열은 표준 필드와 커스텀 필드 모두에 연결할 수 있지만, 계정에 이미 만들어 둔 필드만 연결할 수 있어요.
{% endhint %}

![열을 필드에 연결하는 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045270487/original/0Kj5Ar-TSLDpndJhF8UKibEgkC1QbQZF8g.gif?1744892075)

### 5단계: 확인하고 가져오기 마무리하기

가져오기를 시작하기 전에 **환경설정**을 살펴보고, 필드 연결을 점검하고, 동의 항목을 확인하세요. 이 단계에서 연락처에 태그를 붙이고, 목록으로 정리하고, 워크플로우에 추가할 수 있어요.

**환경설정**에서는 가져오기 전에 아래 작업을 선택할 수 있어요.

- 새 연락처로 스마트 리스트 만들기
- 가져온 연락처를 워크플로우에 추가하기
- 가져온 연락처에 태그를 붙여 쉽게 분류하기

필드 연결도 다시 확인하세요. 모든 필수 필드가 제대로 연결되었는지, **커스텀 필드**가 의도한 대로 지정되었는지 살펴보세요. 연결하지 않은 열은 자동으로 무시돼요.

![환경설정과 필드 연결을 확인하고 가져오기를 마무리하는 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045271590/original/VMvcfndMIiLbhM1kZ1_xbnDXXUo-xeLpXQ.gif?1744892718)

## 선택 사항: 연락처와 기회 함께 가져오기

CSV에 연락처 정보와 기회(딜) 정보가 모두 있으면 같은 흐름으로 한 번에 가져올 수 있어요. 새 리드를 바로 영업 파이프라인에 넣고, 가져오는 중에 단계나 딜 금액까지 연결하고 싶을 때 특히 편해요. 과정은 연락처를 가져올 때와 똑같고, 처음 설정에서 **연락처**와 **기회 관리**를 둘 다 선택하는 점만 달라요.

**연락처** 페이지에서 **가져오기** 버튼을 클릭하면 가져올 항목을 고르는 화면이 나와요. 두 항목을 모두 선택한 뒤 위의 단계를 똑같이 따라 하세요.

![연락처와 기회를 함께 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045272006/original/svNfsDr0fNSalxqv41yASWcbrzcoJg_Aww.png?1744893094)

{% hint style="info" %}
기회 데이터를 제대로 만들려면 CSV에 기회와 관련된 열(예: 파이프라인, 단계, 상태, 기회명)이 있어야 해요. 필요 없는 필드는 연결하지 않고 비워 둘 수 있어요.
{% endhint %}

## 가져오기 상태 확인하기

- **연락처**와 **기회 관리**의 **일괄 작업** 페이지에서 가져오기 진행 상황과 상태를 확인할 수 있어요.
- 연락처 가져오기와 기회 가져오기 기록은 모두 **일괄 작업**의 같은 곳에 표시돼요.
- **통계 보기** 버튼을 클릭하면 가져오기 통계를 볼 수 있어요. **오류** 탭에서는 오류 로그를 내려받고, 오류의 자세한 내용과 해결 방법도 확인할 수 있어요.

![일괄 작업 페이지의 가져오기 상태와 통계 보기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045272144/original/FDJfjgAB0C83p5q7Cc62HjX-HkxheDGMrg.png?1744893191)

## 자주 묻는 질문

### 이메일이나 전화번호 없이도 가져올 수 있나요?
연락처를 만들려면 이름, 이메일, 전화번호 중 하나 이상은 있어야 해요.

### CSV의 일부 열은 건너뛸 수 있나요?
네, 필드를 연결하는 단계에서 해당 열을 연결하지 않고 비워 두면 돼요.

### 기존 연락처 정보를 업데이트할 수 있나요?
네, **업데이트** 또는 **Create and Update**(생성 및 업데이트)를 선택하세요. 연락처 ID나 이메일을 기준으로 맞춰 가요.

### 이전에 가져온 기록은 어디에서 볼 수 있나요?
**일괄 작업**으로 이동하면 가져오기 기록을 확인할 수 있어요.
