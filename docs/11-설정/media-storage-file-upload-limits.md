---
원문: /support/solutions/articles/48001216629-media-storage-file-types-limits-advanced-features
번역일: 2026-11-06
카테고리: 11-설정
---

# 미디어 저장소 파일 형식·용량 제한·고급 기능

**미디어 저장소**(Media Storage)의 파일 정보, 지원하는 형식, 기능별 업로드 용량 제한, 브라우저 호환성, 비공개 파일, 저장 공간 사용량, 연동 등 고급 동작을 정리한 참고 문서예요.

## 미디어 저장소의 파일 상세 정보

파일은 **.png**, **.pdf**, **.txt**처럼 정해진 형식과 확장자를 가져요. 하이퍼클래스 기능마다 지원하는 파일 형식과 용량 제한이 다를 수 있어요.

파일 정보를 확인하려면 **미디어 저장소 > 폴더/파일**로 이동하세요.

- **Filename**(파일 이름): 파일을 구분하는 이름이에요.
- **File Extension**(파일 확장자): 파일 이름 끝에 붙는 짧은 값이에요. 예: `.png`. 확장자를 보면 파일 데이터가 어떤 방식으로 저장되었는지 알 수 있어요.
- **Publication Date**(게시 날짜): 파일이 **미디어 저장소**에 추가된 날짜예요.
- **파일 크기**: 파일이 차지하는 저장 공간이에요. 보통 KB, MB, GB로 표시돼요.
- **치수**: 이미지 원본의 가로·세로 픽셀 크기예요.

![미디어 저장소의 파일 상세 정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049689085/original/6APZtw8HUlC4A5PJp14VPaXlVf7QqpRaHQ.png?1752198820)

---

## 기능별 파일 용량 제한

하이퍼클래스 기능마다 파일 형식에 따라 업로드 용량 제한이 달라요.

**폼**에서도 파일을 업로드할 수 있어요. **커스텀 값**을 만들 때 유형을 **파일 업로드**로 선택하면 돼요.

**미디어 저장소**는 `.ttf`, `.otf`, `.woff`, `.woff2` 같은 글꼴 파일 업로드도 지원해요. 이 파일은 **Custom CSS**(사용자 지정 CSS)를 통해 웹사이트나 퍼널의 브랜딩에 쓸 수 있어요.

| 파일 형식 | 미디어 라이브러리 | 소셜 플래너 | 사이트 & 퍼널 | 코스 | 커스텀 값 파일 업로드 |
| --- | --- | --- | --- | --- | --- |
| **이미지** |  |  |  |  |  |
| PNG (.png) | 100MB | 10MB | 100MB | 50MB | 50MB |
| JPEG (.jpg, .jpeg, .jfif, .pjpeg, .pjp) | 100MB | 10MB | 100MB | 50MB | 50MB |
| GIF (.gif) | 100MB | 10MB | 100MB | 50MB | 50MB |
| TIFF (.tif, .tiff, x-tiff) | 100MB | 10MB | 100MB | 50MB | 50MB |
| WEBP (.webp) | 100MB | 10MB | 100MB | 50MB | 50MB |
| SVG (.svg) | 100MB | 10MB | 100MB | 50MB | 50MB |
| ICON (.ico, .cur, x-icon) | 100MB | 10MB | 100MB | 50MB | 50MB |
| **동영상** |  |  |  |  |  |
| AVI (.avi, x-troff-msvideo) | 4GB | 1GB | 4GB | 5GB | 50MB |
| QuickTime (.qt, .qtc, .mov, .moov) | 4GB | 1GB | 4GB | 5GB | 50MB |
| MP4 (.mp4) | 4GB | 1GB | 4GB | 5GB | 50MB |
| MPEG (.mpg) | 4GB | 1GB | 4GB | 5GB | 50MB |
| Ogg Video (.ogv) | 4GB | 1GB | 4GB | 5GB | 50MB |
| Windows Media (.wmv, .asf) | 4GB | 1GB | 4GB | 5GB | 50MB |
| WebM (.webm) | 4GB | 1GB | 4GB | 5GB | 50MB |
| **오디오** |  |  |  |  |  |
| AIF (.aif, .aiff, .aifc) | 100MB | 100MB | 100MB | 50MB | 50MB |
| MIDI (.midi, .mid) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Windows Audio (.wav) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Ogg Audio (.oga) | 100MB | 100MB | 100MB | 50MB | 50MB |
| WebM Audio (.weba) | 100MB | 100MB | 100MB | 50MB | 50MB |
| MPEG (.mpeg) | 100MB | 100MB | 100MB | 50MB | 50MB |
| M4A (.m4a) | 100MB | 100MB | 100MB | 50MB | 50MB |
| **애플리케이션 및 문서** |  |  |  |  |  |
| PDF (.pdf) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Word (.doc, .docx, ms-doc, msword, vnd.openxmlformats-officedocument.wordprocessingml.document) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Excel (excel, .xls, .xlsx, .xlsm, vnd.ms-excel, x-excel, x-msexcel, vnd.openxmlformats-officedocument.spreadsheetml.sheet) | 100MB | 100MB | 100MB | 50MB | 50MB |
| PowerPoint (.ppt, .pptx, .pptm, mspowerpoint, powerpoint, vnd.ms-powerpoint, x-mspowerpoint, vnd.openxmlformats-officedocument.presentationml.presentation) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Apple Numbers (x-iwork-numbers-sffnumbers) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Google Sheet (vnd.google-apps.spreadsheet) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Google Doc (vnd.google-apps.document) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Google Slides (vnd.google-apps.presentation) | 100MB | 100MB | 100MB | 50MB | 50MB |
| 텍스트 (.rtf, .txt) | 100MB | 100MB | 100MB | 50MB | 50MB |
| ZIP (.zip, x-zip, z-zip-compressed, x-compress, x-compressed) | 100MB | 100MB | 100MB | 50MB | 50MB |
| CSV (.csv) | 100MB | 100MB | 100MB | 50MB | 50MB |
| **글꼴** |  |  |  |  |  |
| TrueType TTF (.ttf) | 100MB | 100MB | 100MB | 50MB | 50MB |
| OpenType OTF (.otf) | 100MB | 100MB | 100MB | 50MB | 50MB |
| Web Open Font Format WOFF, WOFF2 (.woff, .woff2) | 100MB | 100MB | 100MB | 50MB | 50MB |
| **연락처** |  |  |  |  |  |
| vCard (.vcf) | 100MB | 100MB | 100MB | 50MB | 50MB |

---

## 지원 형식과 브라우저 호환성

아래 형식은 **Chrome**, **Firefox**, **Safari**에서 유효성 검사, 업로드, 목록 표시, **미리보기** 동작을 확인했어요.

| 카테고리 | 형식 | 검증된 브라우저 |
| --- | --- | --- |
| **이미지** | JPEG/JPG, PNG, SVG, WEBP, GIF, TIFF, HEIC | Chrome, Firefox, Safari |
| **오디오** | MP3, WAV, OGG/OGA | Chrome, Firefox, Safari |
| **동영상** | MP4, MOV, WEBM, WMV, AVI, M4V | Chrome, Firefox, Safari |
| **문서** | PDF, PPT, TXT, DOC, DOCX, CSV, XLS, XLSX | Chrome, Firefox, Safari |
| **보관** | ZIP | Chrome, Firefox, Safari |
| **코드**/**기타** | JSON, CSS | Chrome, Firefox, Safari |

{% hint style="info" %}
JSON, CSS, OGG/OGA, M4V, HEIC, 그리고 지원 브라우저 전반에서 일관된 ZIP 처리까지 확인했어요.
{% endhint %}

#### 편집할 수 있는 텍스트 파일 형식

**미디어 저장소**에서는 아래 텍스트 파일을 바로 편집할 수 있어요.
`.txt``.css``.json``.sql``.rtf`

지원되는 파일을 **미리보기**에서 연 다음 **편집**을 클릭해 수정하세요. 저장하면 파일 이름과 공개 URL은 그대로 유지한 채 기존 파일이 업데이트돼요.

전체 편집 절차는 "미디어 저장소 전체 가이드"를 참고하세요.

### 편집한 텍스트 파일의 미리보기 제한

5MB보다 큰 텍스트 파일도 편집한 뒤 저장할 수 있어요.

다만 5MB보다 큰 파일을 저장하면 그 파일은 더 이상 **미리보기**를 쓸 수 없어요. 이 제한에 해당하면 저장하기 전에 **미디어 저장소**가 경고를 보여 줘요.

---

## 미디어 저장소의 비공개 파일

**미디어 저장소**는 **디지털 상품**에 쓰는 **비공개 파일**을 지원해요. 비공개 파일을 쓰면 해당 상품을 구매했거나 정해진 전달 과정을 거친 사람만 상품 파일에 접근하도록 보호할 수 있어요.

{% hint style="warning" %}
**미디어 저장소**에서 파일을 직접 비공개로 지정하거나 **Upload as Private**(비공개로 업로드) 옵션을 선택할 수는 없어요.

상품을 만들거나 설정하면서 **디지털 상품** 파일로 업로드하면, 그 파일이 자동으로 비공개 파일로 업로드돼요.
{% endhint %}

### 비공개 파일이 만들어지는 방식

파일이 비공개인지 아닌지는 어떤 하이퍼클래스 기능으로 업로드했는지에 따라 정해져요.

**디지털 상품** 설정에서 업로드한 파일은 자동으로 비공개 파일로 저장돼요.

### 비공개 파일 구분하기

비공개 파일은 썸네일에 자물쇠 아이콘이 표시돼요. 접근이 제한된 파일이라는 뜻이에요.

**디지털 상품**용으로 업로드한 파일을 나중에 **미디어 저장소**에서 찾았다면, 자물쇠 아이콘이 있는지 보고 비공개로 저장되었는지 확인할 수 있어요.

![자물쇠 아이콘이 표시된 비공개 파일 썸네일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078933615/original/hDfWGPrl9H1rZU7kjlDB1LJLizNhrqdyNA.png?1787241191)

### 비공개 파일 관리하기

비공개 파일에서는 다음 작업을 할 수 있어요.

- **다운로드**: 비공개 파일을 내려받아요.
- **Copy Private Link**(비공개 링크 복사): 비공개 파일에 접근할 수 있는 임시 링크를 만들어요.
- **삭제**: 더 이상 필요 없는 비공개 파일을 삭제해요.

{% hint style="info" %}
비공개 링크는 10분 후에 만료돼요. 링크가 만료된 뒤에도 접근이 필요하면 **미디어 저장소**에서 비공개 링크를 새로 만드세요.
{% endhint %}

비공개 링크는 임시 링크예요. 파일에 계속 접근해야 하는 웹사이트, 퍼널, 이메일 등에는 영구 URL처럼 쓰지 마세요.

### 공개 파일과 비공개 파일 비교

| 공개 파일 | 비공개 디지털 상품 파일 |
| --- | --- |
| **미디어 저장소**에서 일반적인 방식으로 업로드 | **디지털 상품** 설정에서 업로드 |
| 일반적인 **미디어 저장소** 파일 | 자동으로 비공개 저장 |
| 비공개 파일 자물쇠 표시 없음 | **미디어 저장소**에 자물쇠 아이콘 표시 |
| 일반적인 파일 접근 방식 사용 | 임시 비공개 링크 지원 |
| 직접 비공개로 바꿀 수 없음 | 현재는 직접 공개로 바꿀 수 없음 |

---

## 저장 공간 사용량 확인

**미디어 스토리지 사용량** 창에서 계정이 저장 공간을 얼마나 쓰고 있는지, 어디에서 쓰고 있는지 확인할 수 있어요.

이 창에는 전체 저장 공간이 색으로 구분된 막대로 표시되고, 모듈별 사용량도 함께 보여요. 모듈에는 **미디어 라이브러리**, **대화**, **멤버십**, **연락처**, **캘린더**가 포함돼요.

모듈을 펼치면 **이미지**, **동영상**, **문서**, **오디오** 같은 파일 형식별 사용량을 볼 수 있어요.

저장 공간 사용량을 확인하려면 다음과 같이 하세요.

1. 점 세 개(⋮) 메뉴를 클릭하고 **저장 공간**을 선택하세요.

   ![점 세 개 메뉴에서 저장 공간 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062681430/original/XI8ljBWL91zXbe_ZyMzRJOdu8ruXKBmIyQ.png?1768422309)
2. 모듈을 클릭하면 파일 형식별 사용량을 볼 수 있어요.

   ![모듈별 파일 형식 사용량](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062681354/original/DE-M111JGPTTIIrXoiEw0z3VKURzojMwvA.png?1768422129)

---

## Google Drive 연동

**드라이브 연결**을 쓰면 Google Drive에 있는 내 파일을 가져올 수 있어요.

{% hint style="warning" %}
Google Drive의 접근·공개 범위·소유권 제한 때문에, 공유받은 파일과 공유받은 파일의 바로가기는 표시되지 않아요. 현재 **미디어 저장소**에는 내가 소유한 파일만 표시돼요.

해결 방법: 바로가기를 만들지 말고 공유받은 파일의 사본을 만드세요. 사본은 내가 소유한 파일로 표시될 수 있어요.
{% endhint %}

**Login As**(다른 사용자로 로그인) 기능을 쓰는 경우:

- **드라이브 연결** 버튼이 비활성화되어 회색으로 표시돼요.
- 원래 사용자의 Google Drive 데이터는 표시되지 않아요.

![Login As 사용 중 비활성화된 드라이브 연결 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045264698/original/HP5NHp025nopa0g-0c_PzcnKLh-1RnUeGA.png?1744887963)

---

## 하이퍼클래스 여러 기능에서 쓰는 미디어 저장소

**미디어 저장소**는 다른 하이퍼클래스 기능과 연결되어 있어요. 퍼널이나 웹사이트 같은 기능에서 **미디어 저장소**를 열면 창으로 열려요. 그래서 작업하던 화면을 벗어나지 않고 미디어를 선택하거나 업로드할 수 있어요.

{% hint style="info" %}
퍼널 창 안에서 **미디어 저장소**를 열었을 때도 끌어서 놓기(드래그 앤 드롭)로 업로드할 수 있어요. 창에 표시된 드롭 영역 어디에나 파일을 놓은 다음 삽입하세요.
{% endhint %}

---

## 에이전트가 만든 미디어

**관리형 에이전트**가 만든 이미지, 오디오, 동영상은 다시 쓸 수 있는 파일로 **미디어 저장소**에 자동 저장돼요.

에이전트가 만든 미디어는 다음과 같아요.

- 임시로 생성된 미디어 위치에 의존하지 않고 **미디어 저장소**에 저장돼요.
- 일반 업로드 파일처럼 **미디어 라이브러리**의 최상위에 표시돼요.
- 알아보기 쉬운 생성 파일 이름을 써요. 예를 들어 생성된 오디오 파일은 `generated-audio-`로 시작하는 이름과 `.mp3` 형식을 써요.
- 나중에 **미디어 저장소** 검색으로 찾을 수 있어요.
- 이메일, 퍼널, 소셜 게시물 등 하이퍼클래스의 다른 곳에서 다시 쓸 수 있어요.
- 생성된 동영상은 동영상 썸네일을 포함해 일반 동영상 처리 과정을 똑같이 거쳐요.

![미디어 라이브러리에 저장된 에이전트 생성 미디어](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079586842/original/TplFwrt54BS9Ix9Pc6Jd1gSpxrghVKYV3A.png?1787946926)

---

## 자주 묻는 질문

### 어떤 파일 형식을 업로드할 수 있나요?
**미디어 저장소**는 이미지, 동영상, 오디오 파일, 문서, 글꼴, 연락처 파일, 그리고 이 문서에 나온 그 밖의 지원 애플리케이션 형식을 지원해요.

### 하이퍼클래스 기능마다 업로드 용량 제한이 같나요?
아니요. 업로드 용량 제한은 파일 형식과 기능에 따라 달라요. 위의 기능별 파일 용량 제한 표에서 비교해 보세요.

### 파일이 미리보기로 열리지 않고 다운로드돼요.
화면 안에서 미리보기가 되는지는 브라우저와 운영체제가 해당 파일 형식을 지원하는지에 따라 달라요. 화면에서 바로 열 수 없는 파일도 다운로드는 할 수 있어요.

### 이미 올린 미디어 저장소 파일을 비공개로 바꿀 수 있나요?
아니요. 현재는 **미디어 저장소**에 있는 공개 파일을 선택해서 비공개로 바꿀 수 없어요. **미디어 저장소**에 직접 파일을 올릴 때도 일반적인 **Make Private**(비공개로 설정) 옵션은 없어요.

**디지털 상품**은 설정에서 업로드한 파일이 자동으로 비공개 파일로 저장되고, **미디어 저장소**에 자물쇠 아이콘이 표시돼요.

### 미디어 저장소를 Google Drive와 연동할 수 있나요?
네. **미디어 저장소**에서 Google Drive에 있는 내가 소유한 파일을 볼 수 있어요. 공유받은 파일과 공유받은 파일의 바로가기는 표시되지 않아요.

### Login As를 쓰면 Google Drive 접근에 어떤 영향이 있나요?
**Login As** 기능을 쓰는 동안에는 **드라이브 연결** 버튼이 비활성화되고, 원래 사용자의 Google Drive 콘텐츠도 표시되지 않아요.
