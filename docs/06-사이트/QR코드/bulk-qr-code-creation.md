---
원문: /support/solutions/articles/155000005441-bulk-qr-code-creation
번역일: 2026-11-06
카테고리: 06-사이트
---

# QR 코드 일괄 만들기

CSV 파일 하나만 올리면 하이퍼클래스가 행마다 QR 코드를 한꺼번에 만들어 줘요. 행사 명찰, 할인 쿠폰, 상품 포장처럼 QR 코드가 많이 필요하거나, 스캔할 링크가 수없이 필요한 캠페인에 알맞아요.

## QR 코드 일괄 만들기란?

QR 코드 일괄 만들기는 하이퍼클래스 QR 코드 생성기에 들어 있는 기능이에요. 이름과 URL 목록을 올리면 몇 초 만에 다운로드할 수 있는 QR 코드가 만들어져요. QR 코드를 하나씩 직접 만드는 반복 작업이 필요 없어요. 완성된 정적 QR 코드는 내보내거나 인쇄하거나 마케팅 채널에 삽입해서 쓸 수 있어요.

## 일괄 만들기의 장점

QR 코드를 많이 만들어야 하는 팀의 번거로움을 줄여 줘요.

- **시간 절약**: CSV 파일로 QR 코드 10개든 10,000개든 몇 초 만에 만들어요. 반복 작업이 필요 없어요.
- **정리**: 일괄로 만든 QR 코드를 폴더에 지정해서 관련 코드를 한곳에 모아 둘 수 있어요.
- **오류 확인**: 기본 제공되는 검증 기능이 잘못된 행을 알려 줘서 바로 고칠 수 있어요.
- **진행 상황 확인**: 코드가 처리되는 동안 실시간 카운터를 볼 수 있어서 작업이 언제 끝나는지 알 수 있어요.
- **바로 쓸 수 있는 내보내기**: 생성이 끝나면 인쇄용 PNG, SVG, PDF 파일을 내려받을 수 있어요.

## 일괄 만들기용 CSV 업로드

일괄 만들기는 형식에 맞는 CSV 파일을 올리는 것에서 시작해요. 열을 두 개로만 간단하게 구성하면 열 매핑으로 고생할 일이 없고 오류도 줄어요. 행 하나마다 QR 코드가 하나씩 만들어져요. 시작하기 전에 아래 안내를 확인하세요.

- **Create Bulk QR Codes**(QR 코드 일괄 만들기) 팝업에서 **샘플 CSV 다운로드**를 클릭하면 형식이 미리 갖춰진 템플릿을 받을 수 있어요.
- 필수 열`name`: QR 코드에 표시되는 이름`url`: 이동할 전체 URL
- 위 두 열 외에 다른 열, 빈 행, 빈 헤더 셀이 없어야 해요.

![일괄 만들기용 CSV 파일 형식 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050623367/original/C-Izzwb0xridevhK-xoh-oPmfBrE7VEzNA.png?1753817262)

## CSV 오류 해결

작은 오타 하나로도 일괄 업로드가 실패할 수 있어요. CSV 파일을 올릴 때 자주 생기는 오류는 다음과 같아요.

- **헤더가 잘못되었거나 없는 경우**: 첫 번째 행이 정확히 *url, name*이어야 해요. 헤더가 다르면 오류 메시지가 표시돼요.

  ![헤더 오류 메시지 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050623754/original/QQt8KBmIHOr1INFiGQGI-4w_XzNw7mdQXQ.png?1753818157)
- **URL이 잘못된 경우**: 모든 URL이 http:// 또는 https://로 시작하고 공백이 없는지 확인하세요. URL이 잘못되면 **잘못된 URL입니다** 오류 메시지가 표시되고, 오류가 난 행도 알려 줘요.

  ![잘못된 URL 오류 메시지 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050623757/original/T7rEZkiAC2c95GWFc08PznDSCs5sGs7Xuw.png?1753818166)

## QR 코드를 폴더에 지정하기 (선택)

폴더를 지정하면 QR 코드를 깔끔하게 정리할 수 있어요. 일괄로 만들 때 드롭다운 목록에서 기존 폴더를 선택하세요. 업로드 화면에는 이미 만들어 둔 폴더만 나오므로, 폴더는 미리 만들어 두어야 해요. 이번에 만든 QR 코드는 모두 선택한 폴더에 저장돼요. 폴더를 선택하지 않으면 최상위 폴더(루트 폴더)에 저장돼요.

QR 코드를 만든 뒤에도 폴더 안으로, 밖으로, 또는 다른 폴더로 옮길 수 있어요. QR 코드에서 점 3개 아이콘을 클릭하고 **폴더로 이동**을 선택한 다음, 옮길 폴더를 고르세요.

![QR 코드를 폴더로 이동하는 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050623452/original/Gk7w3iJm2-9Z1CmROew3LCWpQEWqq0NGUw.png?1753817449)

## QR 코드를 일괄로 만드는 방법

CSV 파일을 준비했다면 설정부터 생성까지 금방 끝나요. 아래 순서를 따라 하세요.

#### 1단계: QR 코드로 이동하기

1. 왼쪽 사이드바에서 **사이트**를 클릭하세요.
2. 상단 메뉴에서 **QR 코드**를 선택하세요.

![사이트 메뉴에서 QR 코드 탭 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050623927/original/CxZAk4CKcGqLqYmquWpjtkw6z0a-BNKIJg.png?1753818516)

#### 2단계: 일괄 만들기 창 열기

1. 오른쪽 위에 있는 **Create Bulk QR Codes**(QR 코드 일괄 만들기) 아이콘을 클릭하세요.

![오른쪽 위의 QR 코드 일괄 만들기 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050623961/original/-PvwdszjGZG_PgsFbiTjQSYk-Q2igYO-JQ.png?1753818625)

#### 3단계: CSV 템플릿 다운로드

1. 형식이 갖춰진 파일이 필요하면 **샘플 CSV 다운로드**를 클릭하세요.
2. 파일을 내려받은 뒤, QR 코드로 만들 정보로 내용을 바꿔 입력하세요.

![샘플 CSV 다운로드 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050624020/original/iO2_vEJxJptpFjA-uRkccIYALZv0Vj6QMA.jpeg?1753818749)

#### 4단계: CSV 파일 업로드

1. CSV 파일을 창에 끌어다 놓거나, **클릭하여 업로드**를 눌러 내 파일에서 선택하세요.

![CSV 파일을 끌어다 놓는 업로드 영역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050624097/original/zdNcCUunzhbx7rfTtoqwCKArfoeChlIpPA.png?1753818914)

#### 5단계: 폴더 선택

1. 드롭다운 목록에서 새로 만든 QR 코드를 저장할 기존 폴더를 선택하세요.
2. 폴더를 선택하지 않으면 QR 코드는 최상위 폴더(루트 폴더)에 저장돼요.

![폴더 선택 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050624124/original/Znlrg4z6frKLxSOadJTrb-rW-4q2ENYWrw.jpeg?1753819000)

#### 6단계: QR 코드 생성

1. 파란색 **업로드** 버튼을 클릭해 생성을 시작하세요. 실시간 진행 상황 표시기가 나타나고, 성공한 행과 오류가 난 행이 표시돼요.
2. 모든 행이 성공으로 표시되면 **닫기**를 클릭하세요. 선택한 폴더로 이동하면 새로 만든 QR 코드를 확인하고 선택해서 PNG, SVG, PDF 파일로 내려받을 수 있어요.

![생성 진행 상황 표시기와 닫기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050624148/original/a2OM20Wf-J5zEX7YKAlCTZUuLqMIVU4VFw.png?1753819106)

#### 7단계: 오류 해결

1. 진행 상황 표시기에서 오류로 표시된 행이 있는지 확인하세요.
2. CSV 파일에서 오류를 고친 뒤 다시 업로드하세요.

![오류가 표시된 행을 보여 주는 진행 상황 표시기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050624285/original/kwhaXqcmrDFQ8BFzl8jzXW4lZ7Es0qDuKQ.png?1753819427)

## 자주 묻는 질문

### QR 코드를 만든 뒤에 다운로드할 수 있나요?
네, 가능해요. QR 코드 옆의 다운로드 아이콘을 클릭하면 고해상도 PNG 이미지로 저장돼요.

### QR 코드를 스캔하면 어떻게 되나요?
스캔한 사람이 이동할 URL이나 콘텐츠로 연결돼요. 연결된 워크플로우가 있으면 그 워크플로우도 시작돼요.

### QR 코드가 몇 번 스캔됐는지 확인할 수 있나요?
네, 가능해요. **QR 코드** 페이지에서 **분석** 버튼을 클릭하면 QR 코드가 사용된 횟수를 확인할 수 있어요.

### QR 코드의 이동할 URL을 바꾸려면 어떻게 하나요?
파란색 **편집** 버튼을 클릭한 다음 이동할 URL을 수정하세요.

### QR 코드 모양을 꾸밀 수 있나요?
네, 가능해요. QR 코드의 색상과 이미지를 편집해서 브랜드에 맞출 수 있어요. 자세한 내용은 'QR Code Generation and Download Guide' 문서를 참고하세요.
