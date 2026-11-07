---
원문: /support/solutions/articles/155000001627-how-to-embed-external-content-on-a-dashboard
번역일: 2026-11-07
카테고리: 12-대시보드
---

# 대시보드에 외부 콘텐츠 임베드하기

다른 사이트의 웹페이지와 미디어를 **대시보드**에 임베드할 수 있어요. 이 문서에서는 임베드가 무엇인지, 임베드 요소를 추가하는 방법, 콘텐츠 유형별 URL 만드는 방법을 안내해요.

---

## 임베드란?

서브 계정 밖에 있는 데이터를 대시보드에 보여 주는 것을 임베드라고 해요. 상대 플랫폼이 임베드를 지원하면 웹페이지, Google Data Studio 리포트, Google Docs, 슬라이드쇼, 캘린더, Loom 영상, YouTube 영상, 소셜 미디어 게시물, 피드 등 다양한 콘텐츠를 보여 줄 수 있어요.

{% hint style="info" %}
일부 플랫폼은 자사 콘텐츠의 임베드를 막아 두었어요.
{% endhint %}

---

## 대시보드에 콘텐츠 임베드하기

### 1단계: 편집 모드로 대시보드 열기

서브 계정에서 **대시보드**로 이동한 뒤, 연필 버튼을 클릭해 **Edit Dashboard**(대시보드 편집)로 들어가세요.

### 2단계: Elements 탭 열기

**Elements**(요소) 탭을 클릭하세요.

### 3단계: Embed 버튼 클릭

**Embed**(임베드) 버튼을 클릭하세요.

![Embed 버튼 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062378698/original/6wYABDO3JyJy-Ex2vAcMzFXU8C_9VYMtBw.png?1768065198)

### 4단계: 임베드 요소 설정하기

원하는 제목을 입력하고 임베드 유형을 선택하세요.

- **URL**: 다른 내용 없이 전체 URL만 입력하세요. 예: <https://www.instagram.com/p/C04TE0DsEkW/embed/>
- **IFRAME**: iframe 코드 전체를 입력하세요. 예: `<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">`

원한다면 **고급 설정**에서 요소의 제목을 숨기거나 표시할 수 있어요.

### 5단계: 변경사항 저장

파란색 **변경사항 저장** 버튼을 클릭하면 요소가 대시보드에 저장돼요.

![변경사항 저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044574444/original/nnK9Racwk6fafA2UI7YTG3o7nJvv-JNkUg.png?1743810172)

---

## 임베드할 수 있는 콘텐츠 유형

### YouTube

- **Embed** 요소를 추가한 뒤, 동영상 ID 번호(URL의 /video/ 뒤에 있어요)를  뒤에 붙이세요.
- 예를 들어 YouTube URL이  라면, 동영상 ID인 "bFTIQDCvIrc"를 복사해  뒤에 붙이세요. 그러면 최종 URL은  가 돼요.

### TikTok 동영상

- **Embed** 요소를 추가한 뒤, 동영상 ID 번호(URL의 /video/ 뒤에 있어요)를 https://www.tiktok.com/embed/ 뒤에 붙이세요.

### Instagram 게시물

- Instagram 게시물의 공유 링크를 복사하세요. 아래와 비슷한 링크가 나와요.
  <https://www.instagram.com/p/C04TE0DsEkW/?utm_source=ig_web_copy_link>
- ?utm\_source=ig\_web\_copy\_link 부분을 /embed/ 로 바꾸세요. 바꾸고 나면 URL이 아래처럼 돼요.
  <https://www.instagram.com/p/C04TE0DsEkW/embed/>
- 이렇게 만든 최종 URL을 임베드 요소 설정에 입력하세요.
