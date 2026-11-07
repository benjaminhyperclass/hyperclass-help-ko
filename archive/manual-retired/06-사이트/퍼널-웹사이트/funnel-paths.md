---

번역일: 2026-04-07
카테고리: 06-사이트 > 퍼널-웹사이트
---

# 퍼널 경로

모든 퍼널에는 3단계의 경로가 연결되어 있습니다.

- **퍼널 URL** → 퍼널 전용 URL로, **Settings(설정)**에서 구성할 수 있습니다. 이 URL은 항상 퍼널의 첫 번째 단계를 로드합니다.

![퍼널 URL 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48045760211/original/aZ2mutN_O0BTnKKaR6ESkkgt9t62Khi38Q.png?1592888631)

- **단계 URL** → 각 단계(Step)마다 해당 페이지를 로드하는 개별 URL이 있습니다. **Publishing(게시) 탭**에서 구성할 수 있습니다.

![단계 URL 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48045760218/original/PNmj_j__gC4YcNsiOxAk5ytmzPKh6l77Dw.png?1592888643)

- **페이지 URL** → A/B 테스팅 기능이 출시되면 매우 유용할 기능입니다. **곧 출시 예정입니다!**
- 현재는 단계 내에서 페이지 하나만 가질 수 있습니다. A/B 테스팅이 출시되면 각 페이지의 URL을 기반으로 트래픽을 설정할 수 있게 됩니다. **Edit page(페이지 편집) 버튼 옆의 톱니바퀴 아이콘**에서 설정할 수 있으며, 클릭하면 페이지 설정 모달이 열립니다.

![페이지 URL 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48045760262/original/SryPz3Fxw8BnnvABPIz_uYFr2gY5t2kkjQ.png?1592888688)

- **스플릿 테스팅은 다음과 같이 작동합니다 (곧 출시 예정!)**

클라이언트가 예를 들어 페이스북 광고에 단계 URL을 고객에게 게시합니다. 링크를 클릭하면 백엔드에서 해당 단계를 인식하고, 트래픽 분배 설정에 따라 단계 내의 페이지 중 하나를 로드하여 해당 페이지 URL로 리디렉션합니다.

단계 URL → 페이지 1 URL 또는 페이지 2 URL

---
*원문 최종 수정: Fri, 31 Jul, 2020 at 3:44 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*