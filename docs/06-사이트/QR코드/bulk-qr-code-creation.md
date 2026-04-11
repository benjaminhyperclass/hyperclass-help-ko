---

번역일: 2026-04-07
카테고리: 06-사이트 > QR코드
---

# QR코드 일괄 생성

QR코드 일괄 생성 기능을 사용하면 여러 개의 QR코드를 한 번에 만들 수 있습니다. CSV 파일을 업로드하기만 하면 하이레벨이 각 항목마다 QR코드를 자동으로 생성해드려요. 행사 배지, 할인 쿠폰, 상품 패키징, 그리고 수많은 스캔 가능한 링크가 필요한 모든 캠페인에 최적화된 기능입니다.

---

**목차**

- [QR코드 일괄 생성이란?](#qr코드-일괄-생성이란)
- [QR코드 일괄 생성의 주요 장점](#qr코드-일괄-생성의-주요-장점)
- [일괄 생성을 위한 CSV 업로드](#일괄-생성을-위한-csv-업로드)
- [CSV 오류 해결](#csv-오류-해결)
- [폴더에 QR코드 배정하기](#폴더에-qr코드-배정하기)
- [QR코드 일괄 생성 방법](#qr코드-일괄-생성-방법)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **QR코드 일괄 생성이란?**

QR코드 일괄 생성은 하이레벨의 QR코드 생성기에 내장된 기능으로, 이름과 URL 목록을 몇 초 만에 완전히 생성된 다운로드 가능한 QR코드로 변환해주는 기능입니다. 각 코드를 개별적으로 만드는 반복적인 수동 작업을 없애고, 마케팅 채널 전반에 걸쳐 내보내기, 인쇄 또는 삽입할 수 있는 완전한 정적 QR코드 세트를 제공합니다.

---

## QR코드 일괄 생성의 주요 장점

QR코드 일괄 생성은 대량의 QR코드 프로젝트를 진행하는 팀의 업무 부담을 줄여줍니다.

- **시간 절약**: CSV 파일을 사용하여 10개든 1만 개든 몇 초 만에 QR코드를 생성할 수 있어요. 수동으로 반복하는 과정이 필요 없습니다

- **체계적 관리**: 일괄 생성된 QR코드를 폴더에 배정하여 관련 코드들을 깔끔하게 그룹화할 수 있어요

- **오류 확인**: 내장된 검증 기능이 잘못된 행을 표시하여 문제를 즉시 수정할 수 있습니다

- **투명한 진행 상황**: 코드가 처리되는 동안 실시간 카운터를 통해 언제 일괄 작업이 완료되는지 항상 확인할 수 있어요

- **바로 사용 가능한 내보내기**: 생성이 완료되면 인쇄용 PNG, SVG 또는 PDF 버전을 다운로드할 수 있습니다

---

## **일괄 생성을 위한 CSV 업로드**

올바르게 형식화된 CSV를 업로드하는 것이 QR코드 일괄 생성의 핵심입니다. 파일을 간단하게 유지하면(두 개의 컬럼만) 매핑 문제를 피하고 오류율을 줄일 수 있어요. 각 행은 하나의 QR코드를 생성합니다. 시작하려면 다음 가이드라인을 따르세요:

- QR코드 일괄 생성 팝업에서 **샘플 CSV 다운로드** 버튼을 클릭하여 미리 형식화된 템플릿을 사용하세요.

- **필수 컬럼**
  - Name: QR코드의 표시 이름
  - URL: 전체 대상 URL

- 추가 컬럼, 빈 행 또는 빈 헤더 셀이 없는지 확인하세요.

![QR코드 CSV 템플릿 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050623367/original/C-Izzwb0xridevhK-xoh-oPmfBrE7VEzNA.png?1753817262)

---

## **CSV 오류 해결**

작은 오타조차 일괄 업로드를 중단시킬 수 있습니다. CSV 파일 업로드 중 자주 발생하는 일반적인 오류들을 확인해보세요:

- **잘못되거나 누락된 헤더**: 첫 번째 행이 정확히 url, name으로 되어 있는지 확인하세요. 잘못된 헤더는 오류 메시지를 발생시킵니다.

![헤더 오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050623754/original/QQt8KBmIHOr1INFiGQGI-4w_XzNw7mdQXQ.png?1753818157)

- **유효하지 않은 URL**: 각 URL이 http:// 또는 https://로 시작하고 공백이 포함되지 않았는지 확인하세요. 유효하지 않은 URL은 해당 오류를 발생시킨 행을 정확히 지적하는 오류 메시지를 표시합니다.

![URL 오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050623757/original/T7rEZkiAC2c95GWFc08PznDSCs5sGs7Xuw.png?1753818166)

---

## 폴더에 QR코드 배정하기 (선택사항)

폴더 배정을 하면 작업 공간을 깔끔하게 유지하고 체계적인 관리가 쉬워집니다. QR코드를 일괄 생성할 때 드롭다운에서 기존 폴더를 선택하세요(업로드 중에는 미리 생성된 폴더만 표시되므로 사전에 폴더를 만들어야 합니다). 일괄 생성된 모든 QR코드는 선택한 폴더를 상속받습니다. 폴더를 선택하지 않으면 QR코드는 루트 폴더에 저장됩니다.

생성 후에는 QR코드를 폴더 안으로, 밖으로, 또는 폴더 간에 이동할 수 있습니다. QR코드를 이동하려면 코드의 **점 3개** 아이콘을 클릭하고 '폴더로 이동'을 선택한 다음 이동하고 싶은 폴더를 선택하세요.

![QR코드 폴더 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050623452/original/Gk7w3iJm2-9Z1CmROew3LCWpQEWqq0NGUw.png?1753817449)

---

## QR코드 일괄 생성 방법

CSV를 준비했다면 QR코드 일괄 생성 설정과 코드 생성은 순식간에 완료됩니다. 다음 단계를 따라 시작하세요:

#### 1단계: QR코드 메뉴로 이동

- 왼쪽 사이드바에서 Sites(사이트)를 클릭하세요
- 상단 네비게이션 리본에서 QR Codes(QR코드)를 선택하세요

![QR코드 메뉴 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050623927/original/CxZAk4CKcGqLqYmquWpjtkw6z0a-BNKIJg.png?1753818516)

#### 2단계: 일괄 생성 모달 열기

- 오른쪽 상단의 Create Bulk QR Codes(QR코드 일괄 생성) 아이콘을 클릭하세요

![일괄 생성 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050623961/original/-PvwdszjGZG_PgsFbiTjQSYk-Q2igYO-JQ.png?1753818625)

#### 3단계: CSV 템플릿 다운로드

- 미리 형식화된 파일이 필요하다면 **샘플 CSV 다운로드**를 사용하세요
- 다운로드한 후 QR코드에 필요한 정보로 파일을 업데이트하세요

![CSV 템플릿 다운로드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050624020/original/iO2_vEJxJptpFjA-uRkccIYALZv0Vj6QMA.jpeg?1753818749)

#### 4단계: CSV 파일 업로드

- CSV 파일을 모달에 드래그 앤 드롭하거나 '클릭하여 업로드'를 사용해 파일을 찾아보세요

![CSV 파일 업로드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050624097/original/zdNcCUunzhbx7rfTtoqwCKArfoeChlIpPA.png?1753818914)

#### 5단계: 폴더 선택

- 새로 생성된 QR코드가 저장될 기존 폴더를 드롭다운에서 선택하세요
- 폴더를 선택하지 않으면 QR코드는 루트 폴더에 저장됩니다

![폴더 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050624124/original/Znlrg4z6frKLxSOadJTrb-rW-4q2ENYWrw.jpeg?1753819000)

#### 6단계: QR코드 생성

- 파란색 Upload(업로드) 버튼을 클릭하여 생성을 시작하세요. 실시간 진행 상황 추적기가 나타나며 성공과 오류를 표시합니다
- 모든 행이 성공을 표시하면 **닫기**를 클릭하세요. 선택한 폴더로 이동하여 새로 생성된 QR코드의 PNG, SVG 또는 PDF 버전을 보고, 선택하고, 다운로드하세요

![QR코드 생성 진행상황](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050624148/original/a2OM20Wf-J5zEX7YKAlCTZUuLqMIVU4VFw.png?1753819106)

#### 7단계: 오류 해결

- 표시된 행에서 오류가 있는지 추적기를 확인하세요. CSV의 오류를 수정하고 다시 업로드하세요

![오류 해결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050624285/original/kwhaXqcmrDFQ8BFzl8jzXW4lZ7Es0qDuKQ.png?1753819427)

---

## **자주 묻는 질문**

**Q: QR코드 생성 후 다운로드할 수 있나요?**

네! 모든 QR코드 옆의 다운로드 아이콘을 클릭하여 고해상도 PNG 이미지를 저장할 수 있습니다.

**Q: 누군가 QR코드를 스캔하면 어떻게 되나요?**

사용자는 대상 URL이나 자산으로 리다이렉트되고, 연결된 워크플로우가 트리거됩니다.

**Q: QR코드가 몇 번 스캔됐는지 추적할 수 있나요?**

네. QR코드가 사용된 횟수를 추적하려면 QR코드 페이지의 Analytics(분석) 버튼을 클릭하세요.

**Q: QR코드의 대상 URL을 업데이트해야 한다면 어떻게 하나요?**

QR코드를 업데이트하려면 파란색 Edit(편집) 버튼을 클릭하고 대상 URL을 업데이트하세요.

**Q: QR코드의 모양을 커스터마이징할 수 있나요?**

네! QR코드의 색상과 이미지를 편집하여 브랜딩에 맞출 수 있습니다. 자세한 정보는 다음 문서를 참고하세요: [QR코드 생성 및 다운로드 가이드](qr-code-generation-and-download-guide.md)

---
*원문 최종 수정: Fri, 8 Aug, 2025 at 3:00 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*