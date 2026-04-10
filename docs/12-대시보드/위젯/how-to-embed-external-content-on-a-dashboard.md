---

번역일: 2026-04-07
카테고리: 12-대시보드 > 위젯
---

# 대시보드에 외부 콘텐츠 임베드하는 방법

다른 사이트의 웹 페이지와 미디어를 대시보드에 삽입할 수 있습니다.

---

목차

- [임베드란 무엇인가요?](#임베드란-무엇인가요)
- [대시보드에 콘텐츠 임베드하기](#대시보드에-콘텐츠-임베드하기)
- [임베드 가능한 콘텐츠 유형](#임베드-가능한-콘텐츠-유형)

---

### 커뮤니티의 추가 튜토리얼

[https://www.youtube.com/watch?v=JTdNRFCVldI](https://www.youtube.com/watch?v=JTdNRFCVldI)

[https://www.youtube.com/watch?v=Bs0sutIRkyU](https://www.youtube.com/watch?v=Bs0sutIRkyU)

[https://youtu.be/gHmX0NzYd0o](https://youtu.be/gHmX0NzYd0o)

---

# 임베드란 무엇인가요?

하위 계정 외부의 데이터를 대시보드에 표시하고 싶을 때, 이를 임베드라고 합니다. 다른 플랫폼이 임베드 콘텐츠를 지원하는 경우, 웹 페이지, Google Data Studio 보고서, Google 문서, 슬라이드쇼, 캘린더, Loom 동영상, YouTube 동영상, 소셜 미디어 게시물, 피드 등 다양한 요소를 표시할 수 있습니다.

일부 플랫폼은 콘텐츠 임베드를 허용하지 않으며, 이를 차단합니다.

---

## 대시보드에 콘텐츠 임베드하기

### 1단계: 대시보드를 편집 모드로 열기

하위 계정 > 대시보드 > 연필 버튼을 클릭하여 대시보드 편집으로 이동합니다.

![대시보드 편집 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062378661/original/WClgJldrdAfYhmArhbvG5rdSdk48FiOiYA.png?1768065037)

### 2단계: 요소(Elements) 탭 열기

요소 탭을 클릭합니다.

![요소 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062378678/original/77rHPeNsw417P5CctZs7IIXU4-9XKp5p8Q.png?1768065159)

### 3단계: 임베드(Embed) 버튼 클릭

임베드 버튼을 클릭합니다.

![임베드 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062378698/original/6wYABDO3JyJy-Ex2vAcMzFXU8C_9VYMtBw.png?1768065198)

### 4단계: 임베드 요소 설정하기

원하는 제목을 입력하고 임베드 유형을 설정합니다.

- **URL**: 다른 내용 없이 완전한 URL만 입력합니다. 예: [https://www.instagram.com/p/C04TE0DsEkW/embed/](https://www.instagram.com/p/C04TE0DsEkW/embed/)

- **IFRAME**: 완전한 iframe 코드를 입력합니다. 예: `<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">`

고급 설정에서 요소의 제목을 숨기거나 표시할 수 있습니다.

![임베드 요소 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044574416/original/-frhRlGdwiiJO2ir0tGWr7r4yZw4Gt7fxQ.png?1743809921)

### 5단계: 변경사항 저장

파란색 저장 버튼을 클릭하여 요소를 대시보드에 저장합니다.

![저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044574444/original/nnK9Racwk6fafA2UI7YTG3o7nJvv-JNkUg.png?1743810172)

---

## 임베드 가능한 콘텐츠 유형

### YouTube

- 임베드 요소를 추가한 후, 동영상 ID 번호(URL에서 /video/ 뒤에 있는 번호)를 [https://www.youtube.com/embed/](https://www.youtube.com/embed/) 뒤에 추가합니다.

- 예를 들어 YouTube URL이 https://www.youtube.com/watch?v=bFTIQDCvIrc 인 경우, 동영상 ID "bFTIQDCvIrc"를 복사하여 https://www.youtube.com/embed/ 뒤에 추가합니다. 최종 URL은 [https://www.youtube.com/embed/bFTIQDCvIrc](https://www.youtube.com/embed/bFTIQDCvIrc)가 됩니다.

### TikTok 동영상

- 임베드 요소를 추가한 후, 동영상 ID 번호(URL에서 /video/ 뒤에 있는 번호)를 https://www.tiktok.com/embed/ 뒤에 추가합니다.

### Instagram 게시물

- 인스타그램 게시물의 공유 링크를 가져옵니다. 다음과 같은 링크를 얻게 됩니다:
[https://www.instagram.com/p/C04TE0DsEkW/?utm_source=ig_web_copy_link](https://www.instagram.com/p/C04TE0DsEkW/?utm_source=ig_web_copy_link)

- `?utm_source=ig_web_copy_link`를 `/embed/`로 바꿔야 합니다. 수정 후 URL은 다음과 같아야 합니다:
[https://www.instagram.com/p/C04TE0DsEkW/embed/](https://www.instagram.com/p/C04TE0DsEkW/embed/)

- 이 최종 URL을 임베드 요소 설정에 추가합니다.

---

**관련 도움말:**
- [위젯 사용자 정의하기](customizing-dashboard-widgets.md)
- [대시보드에서 위젯 편집하기](edit-widgets-on-the-dashboard.md)
- [위젯 제거하기](removing-a-widget.md)

---
*원문 최종 수정: Sat, 10 Jan, 2026 at 11:17 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*