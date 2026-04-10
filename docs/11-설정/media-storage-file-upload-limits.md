---

번역일: 2026-04-06
카테고리: 11-설정
---

# 미디어 저장소 & 파일 업로드 제한

미디어 라이브러리는 이미지와 비디오 같은 자료를 저장합니다. 각 제품마다 사용할 수 있는 파일에 대한 제한사항이 다릅니다.

---

**목차**

- [파일이란 무엇이고 왜 미디어 라이브러리가 필요한가요?](#파일이란-무엇이고-왜-미디어-라이브러리가-필요한가요)
- [미디어 라이브러리 상세 정보](#미디어-라이브러리-상세-정보)
- [제품별 파일 제한](#제품별-파일-제한)

---

# 파일이란 무엇이고 왜 미디어 라이브러리가 필요한가요?

파일은 특별한 방식으로 형식화되고 특정 파일 확장자(예: **.png, .pdf, .txt**)가 부여된 데이터 집합입니다. 파일을 사용할 수 있는 모든 제품은 읽을 수 있는 파일의 **유형**과 처리할 수 있는 파일의 **크기**에 제한이 있습니다.

웹페이지 빌더는 .png 파일은 읽을 수 있지만 .svg는 읽지 못할 수 있고, 1MB 파일은 처리할 수 있지만 1GB 파일은 처리하지 못할 수 있습니다. 파일 확장자는 보통 쉽게 확인할 수 있지만, 파일 크기는 때때로 확인하기 어렵습니다.

또한 제품이 파일을 통합할 수 있더라도, 디자인상의 이유로 파일의 **표시 크기**를 제한할 수 있습니다. 예를 들어, 50px × 200px로 표시되는 로고는 헤더에 잘 맞지만, 500px × 500px로 표시되는 로고는 너무 큽니다.

여기에 더해, 파일의 원본 해상도가 표시 크기에 적합하지 않을 수도 있습니다. 예를 들어 파일이 16px × 16px(아이콘)인데 웹페이지에서 500px × 500px로 표시하려고 하면 매우 픽셀화되어 보이고 선명하지 않습니다. 단, .svg의 경우는 예외입니다. svg는 원본 해상도가 없기 때문에(픽셀이 아닌 수학적으로 그려지므로) 어떤 크기로든 표시할 수 있습니다.

이것만으로도 복잡한데, 파일이 표시될 때 그 크기가 배치될 영역에 완벽히 맞지 않을 수 있습니다. 이 경우 좌측, 우측, 또는 중앙 정렬을 위한 스타일 옵션이 있고, 늘리기, 반복하기, 자르기 등으로 여백을 처리하는 설정이 있습니다. 이러한 것들은 파일 자체의 일부가 아니라 파일이 어떻게 표시되는지를 수정하는 스타일 설정이지만, 서로 다른 파일 특성은 서로 다른 표시 옵션과 더 잘 작동합니다.

이것이 Hyperclass에 미디어 라이브러리가 있는 이유입니다. 파일 자료를 관리하기 시작하면 상당한 복잡성을 다뤄야 합니다.

---

## **미디어 라이브러리 상세 정보**

**Media Storage(미디어 저장소) > Folder/File(폴더/파일)**로 이동하여 미디어 라이브러리에 접근하고 파일을 미리 볼 수 있습니다.

- **파일명**: 파일을 식별하는 문자열입니다. 이는 다른 모든 파일명과 달라야 합니다.

- **파일 확장자**: 파일명 끝의 짧은 문자열(예: .png)입니다. 이는 데이터가 어떻게 인코딩되어 있는지를 식별하여 제품이 파일을 읽을 수 있게 합니다.

- **발행 날짜**: 파일이 미디어 라이브러리에 추가된 날짜입니다.

- **파일 크기**: 파일이 차지하는 메모리 양입니다. 보통 kb(킬로바이트), mb(메가바이트), gb(기가바이트)로 표시됩니다. 각각은 이전 단위보다 1,000배 큽니다.

- **크기**: 파일의 원본 픽셀 높이와 너비입니다. 이는 파일을 압축하거나 늘리지 않을 때 화면에서 차지할 공간을 알려줍니다.

![미디어 라이브러리 상세 정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049689085/original/6APZtw8HUlC4A5PJp14VPaXlVf7QqpRaHQ.png?1752198820)

---

## 제품별 파일 제한

File Upload(파일 업로드) 타입의 커스텀 값(Custom Value)을 만들어서 폼(Forms)을 통해 파일을 업로드할 수 있습니다.

| 파일 유형 | 미디어 라이브러리 | 소셜 플래너(Social Planner) | 사이트(Sites) & 퍼널(Funnels) | 강의(Courses) | CV 파일 업로드 |
|----------|------------------|---------------------------|---------------------------|-------------|---------------|
| **이미지** |
| PNG (.png) | 100MB | 10MB | 100MB | 50MB | 50MB |
| JPEG (.jpg, .jpeg, .jfif, .pjpeg, .pjp) | 100MB | 10MB | 100MB | 50MB | 50MB |
| GIF (.gif) | 100MB | 10MB | 100MB | 50MB | 50MB |
| TIFF (.tif, .tiff, x-tiff) | 100MB | 10MB | 100MB | 50MB | 50MB |
| WEBP (.webp) | 100MB | 10MB | 100MB | 50MB | 50MB |
| SVG (.svg) | 100MB | 10MB | 100MB | 50MB | 50MB |
| ICON (.ico, .cur, x-icon) | 100MB | 10MB | 100MB | 50MB | 50MB |
| **비디오** |
| AVI (.avi, x-troff-msvideo) | 4GB | 1GB | 4GB | 5GB | 50MB |
| QuickTime (.qt, .qtc, .mov, .moov, .moov) | 4GB | 1GB | 4GB | 5GB | 50MB |
| MP4 (.mp4) | 4GB | 1GB | 4GB | 5GB | 50MB |
| MPEG (.mpg) | 4GB | 1GB | 4GB | 5GB | 50MB |
| Ogg Video (.ogv) | 4GB | 1GB | 4GB | 5GB | 50MB |
| Windows Media (.wmv, .asf) | 4GB | 1GB | 4GB | 5GB | 50MB |
| WebM (.webm) | 4GB | 1GB | 4GB | 5GB | 50MB |
| **오디오** |
| AIF (.aif, .aiff, .aifc) | 100MB | 100MB | 100MB | 50MB | 50MB |
| MIDI (.midi, .mid) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Windows Audio (.wav) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Ogg Audio (.oga) | 100MB | 100MB | 100MB | 50MB | 50MB |
| WebM Audio (.weba) | 100MB | 100MB | 100MB | 50MB | 50MB |
| MPEG (.mpeg) | 100MB | 100MB | 100MB | 50MB | 50MB |
| m4a (.m4a) | 100MB | 100MB | 100MB | 50MB | 50MB |
| **응용 프로그램** |
| PDF (.pdf) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Word (.doc, .docx, ms-doc, msword, vnd.openxmlformats-officedocument.wordprocessingml.document) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Excel (excel, .xls, xlsx, .xlsm, vnd.ms-excel, x-excel, x-msexcel, vnd.openxmlformats-officedocument.spreadsheetml.sheet) | 100MB | 100MB | 100MB | 50MB | 50MB |
| PowerPoint (.ppt, .pptx. .pptm, mspowerpoint, powerpoint, vnd.ms-powerpoint, x-mspowerpoint, vnd.ms-powerpoint, vnd.openxmlformats-officedocument.presentationml.presentation) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Apple Numbers (x-iwork-numbers-sffnumbers) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Google Sheet (vnd.google-apps.spreadsheet) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Google Doc (vnd.google-apps.document) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Google Slides (vnd.google-apps.presentation) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Text (.rtf, .txt) | 100MB | 100MB | 100MB | 50MB | 50MB |
| ZIP (.zip, x-zip, z-zip-compressed, x-compress, x-compressed) | 100MB | 100MB | 100MB | 50MB | 50MB |
| CSV (.csv) | 100MB | 100MB | 100MB | 50MB | 50MB |
| **폰트** |
| TrueType TTF (.ttf) | 100MB | 100MB | 100MB | 50MB | 50MB |
| OpenType OTF (.otf) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Web Open Font Format WOFF, WOFF2 (.woff) | 100MB | 100MB | 100MB | 50MB | 50MB |
| **연락처** |
| vCard (.vcf) | 100MB | 100MB | 100MB | 50MB | 50MB |

---

## **지원 형식 & 브라우저 호환성**

아래 모든 형식은 **Chrome**, **Firefox**, **Safari**에서 종단간(검증, 업로드, 목록, 미리보기) 검증되었습니다.

| 카테고리 | 형식 | 브라우저 (검증됨) |
|----------|------|-------------------|
| **이미지** | **JPEG/JPG, PNG, SVG, WEBP, GIF, TIFF, HEIC** | Chrome, Firefox, Safari |
| **오디오** | **MP3, WAV, OGG/OGA** | Chrome, Firefox, Safari |
| **비디오** | **MP4, MOV, WEBM, WMV, AVI, M4V** | Chrome, Firefox, Safari |
| **문서** | **PDF, PPT, TXT, DOC, DOCX, CSV, XLS, XLSX** | Chrome, Firefox, Safari |
| **압축파일** | **ZIP** | Chrome, Firefox, Safari |
| **코드/기타** | **JSON, CSS** | Chrome, Firefox, Safari |

### 미리보기 동작

대부분의 형식은 적절한 경우 인라인 썸네일/미리보기를 지원합니다. 일부 형식은 브라우저 기능과 OS 설정에 따라 다운로드 가능한 파일로 표시될 수 있습니다.

이번 업데이트의 새로운 기능: **JSON, CSS, OGG/OGA, M4V, HEIC**에 대한 검증된 지원과 브라우저 간 일관된 **ZIP** 처리.

---
*원문 최종 수정: Wed, 4 Feb, 2026*
*Hyperclass 사용 가이드 — hyperclass.ai*