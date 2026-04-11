---

번역일: 2026-04-08
카테고리: 전화 시스템 > 통화
---

# 통화 추적(번호 풀) 설정 방법

번호 풀은 유료 캠페인으로 발생한 통화를 추적하는 훌륭한 방법입니다. 번호 풀을 사용하면 지정된 랜딩 페이지와 웹사이트에 방문한 리드에게 특정 전화번호를 표시하여 통화 추적 대화를 어트리뷰션할 수 있습니다. 이 번호들은 특정 페이지에만 표시되며, 특정 행동을 취한 리드에게만 보여집니다. 이를 "통화 추적 코드"라고도 하지만, 저희는 "번호 풀"이라고 부릅니다.

이 가이드에서는 방문자에 대한 데이터 수집을 시작할 수 있도록 번호 풀을 설정하는 방법을 안내합니다.

**이 가이드에서 다루는 내용:**

#### [통화 추적을 위한 번호 풀 설정하기](#통화-추적을-위한-번호-풀-설정하기)

#### [번호 교체 테스트 방법](#번호-교체-테스트-방법)

#### [키워드 추적 설정 방법](#키워드-추적-설정-방법)

#### [버튼에서 번호 교체하기](#버튼에서-번호-교체하기)

#### [그룹 ID](#그룹-id)

#### [FAQ](#faq)

- #### [1. 통화 추적을 위해 번호 풀을 설정해야 하는 이유는?](#1.-통화-추적을-위해-번호-풀을-설정해야-하는-이유는?)

# 통화 추적을 위한 번호 풀 설정하기

**업데이트:** 이제 Google 광고를 모방하기 위해 URL에 gclid를 입력할 수 없습니다. 실제 Google 광고에서만 가능합니다.

**참고사항:**

업데이트 (2020년 7월 29일) 미국 번호(10자리 지역 번호)의 경우, 이제 111-222-3333, 111.222.3333, 또는 (111) 222-3333 중 아무 형식으로 번호를 입력해도 교체 스크립트가 인식하여 번호를 교체합니다.

Settings(설정)을 클릭하세요.

![설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035553055/original/C6klWkTlntyoKouYxf_cuwjfuRcXa_2v3A.png?1730118765)

Phone Numbers(전화번호)를 클릭하세요.

![전화번호 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035553093/original/Xmd3-E7gdlD8gHIaLFK3plK9pDthFg6zBg.png?1730118798)

**번호 풀 추가**

"Add Number Pool"을 클릭하세요. 페이지 우측의 "+ Add Number" 드롭다운 메뉴에서 찾을 수 있습니다.

![번호 풀 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035553172/original/LrqTVqHJZVpvmc6YCd_qJMGZKmgUan4H4A.png?1730118855)

**방문자 활동**

통화 추적 목적으로 번호 풀을 생성하고 있으므로 "Visitors Activity" 옵션을 선택합니다.

![방문자 활동 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035553192/original/FsRCnpQ4Sjb5RarMg4pnrkRUueOQYoerog.png?1730118867)

목록에서 추적하고자 하는 방문자를 선택하세요. 선택 후 "Next: Create Pool"을 클릭하세요.

모든 방문자(All visitors)를 추적할 것을 권장합니다.

**참고:** PPC 검색을 선택하면, 방문자가 유료 광고를 통해 유입됐을 때만 웹사이트의 번호가 교체됩니다.

![방문자 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035553259/original/SUlC-dio_dxcvbwvFVQRK3IMuD6DnpBDVA.png?1730118919)

**번호 이름**

이 필드에서 추적 번호의 이름을 설정할 수 있습니다.

![번호 이름 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035569952/original/QYyJz-1RH1geuZ9-dg2WSH4pqipjFfacgQ.png?1730128637)

**풀 크기**

각 번호 풀에는 최소 4개의 추적 번호가 포함됩니다. 통화량에 따라 풀 크기를 결정할 수 있습니다. 통화량이 많을수록 더 많은 추적 번호가 필요합니다.

![풀 크기 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035570018/original/9uzVm3SkXliG-FbxeK_D5iupRs5MEmoUKQ.png?1730128659)

**착신 전환 번호**

여기서 메인 비즈니스 번호나 발신자가 추적 번호로 전화할 때 통화를 받고자 하는 번호를 입력할 수 있습니다.

**참고:** Twilio/LC 전화번호는 착신 전환 번호로 사용할 수 없습니다. 이는 루프 문제를 발생시킵니다. 통화 라우팅 문제를 방지하기 위해 다른 외부 번호를 사용하세요.

![착신 전환 번호 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035571554/original/MmYkPL18ZpF2slInXwWGksooUfOupoLpEQ.png?1730129701)

**교체 번호**

시스템이 웹사이트에서 업데이트할 전화번호를 입력하세요. 이전 단계에서 설정한 착신 전환 번호와 동일한 번호이거나, 체크박스를 해제하여 다른 번호를 제공할 수 있습니다.

![교체 번호 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035571613/original/6MY7uqWGt-QGWnbk11xbBqHFw3nHh5cpxQ.png?1730129737)

이 체크박스를 선택하면 번호 풀에 추가할 새로운 전화번호 4개를 구매하는 것에 동의함을 의미합니다.

![새 번호 구매 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035571668/original/EFPwlCu_8ey-sEubgCQLUnDgZyErHWfHHg.png?1730129769)

모든 정보를 입력한 후 "Next: Choose Numbers"를 클릭하세요.

![번호 선택으로 진행](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035571896/original/1GxgtevFnaYsURV65l5QsZCcS6o34bv-CA.png?1730129928)

추적 번호를 생성할 때 지역 번호에 해당하는 전화번호, 무료 전화번호, 또는 특정 지역 번호의 번호 중에서 선택할 수 있습니다.

**지역 번호**

지역 번호를 선택하면, 처음에 "착신 전환 번호"로 설정한 전화번호의 지역에 해당하는 4개의 다른 전화번호가 표시됩니다.

![지역 번호 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035601180/original/KO2URqfDW78vFDKpVs0pN4EEh-BpaUJZrA.png?1730186272)

**무료 전화번호**

두 번째 옵션은 번호 풀에 무료 전화번호를 선택할 수 있게 해줍니다. 원하는 지역 번호에 사용 가능한 번호가 없을 때 이 옵션을 선택할 수 있습니다.

![무료 전화번호 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035730576/original/cqtDPLNLofMeGG3uUm2D4WTk-7KjvPNTmQ.png?1730300385)

사용 가능한 무료 전화번호를 보려면 드롭다운 메뉴에서 지역 번호를 선택하세요.

![무료 번호 지역 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035730790/original/LBfHiQ9XAQzNLCWoMR1_cVPfAfzS4g3wmw.png?1730300503)

#### 특정 지역 번호의 번호

다른 지역의 전화번호를 선택하는 것이 괜찮다면, 지역 번호를 입력하고 "Check Availability"를 클릭하면 몇 초 내에 사용 가능한 전화번호가 표시됩니다.

![다른 지역 번호 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035731301/original/VZ8jtLRTxDur39dRmwa0zE272Qc3OiAyAA.png?1730300833)

위의 3가지 방법 중 하나로 추적 번호를 생성했다면 다음 단계로 진행합시다. "Next : Number Features"를 클릭하세요.

![번호 기능 설정으로 진행](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035601207/original/9NS9bd2AuBQkAWiElx_upmXT0Eu-BlNY9A.png?1730186298)

**위스퍼 메시지**

통화를 받을 때 이 메시지를 들을 수 있습니다. 위스퍼 메시지를 "Call from (Source)"로 설정하면 "광고 캠페인에서 온 통화입니다"와 같은 메시지가 들립니다. 발신자는 이 메시지를 들을 수 없습니다. CRM 사용자인 당신만 들을 수 있습니다.

![위스퍼 메시지 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035601681/original/4JaBqESVjp_JlWkbdpQJ9ZnaQ57BfukJ2g.png?1730186730)

**통화 녹음**

체크박스를 사용하여 시스템이 통화를 녹음하도록 허용하고, 발신자가 들어야 할 메시지를 사용자 정의할 수 있습니다. 예: "이 통화는 품질 보증 목적으로 녹음됩니다."

![통화 녹음 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035601886/original/MjI3Dnu4Fn8eqCEVyTbB4J3-zyp5-YrL7g.png?1730186947)

"Activate Number"를 클릭하세요.

![번호 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035603774/original/dynpD9_O0v7QExPMpNCJTdK-4BMhvLloDg.png?1730188485)

**스니펫 통합**

번호 풀을 설정한 후에는 웹사이트에 스니펫을 통합해야 합니다. 단계별 과정은 다음과 같습니다:

Number Pools(번호 풀) 옵션으로 이동하세요.

![번호 풀 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035604138/original/wEcLv3jCTow4lVT_3tCF2Jl80OoaL4VpIA.png?1730188747)

사용하려는 번호 풀로 이동합니다. 세 점 메뉴를 클릭하세요.

![번호 풀 메뉴 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035604533/original/SnnfA1hQ0EK2d4cskqQGtTPxRnd8y4IT2g.png?1730189043)

"Number Pool Info"를 클릭하세요.

![번호 풀 정보 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035604584/original/WfBvILKcThZ7leHrjqSN-APOFAOLCmZWkg.png?1730189065)

"Normal Snippet Code"를 복사하세요. 이것이 웹사이트/퍼널에 붙여넣어야 할 코드입니다.

![스니펫 코드 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035699309/original/kTjYeEobAGqCw5aN-HcQIp9OSqc8CCAQzw.jpeg?1730282089)

**Sites(사이트)** 섹션으로 이동하세요. Funnels(퍼널) 또는 Websites(웹사이트)를 클릭하세요.

![사이트 섹션으로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035608282/original/mxNSI1VnoVf-cgI124_UPd_-fy8ZcqBdIQ.jpeg?1730191548)

번호 풀을 사용하려는 퍼널을 클릭하세요.

![퍼널 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035992387/original/E_zhEm3F7yGO9iFYQnRkJe_-OYzugI8qKw.png?1730791942)

퍼널/웹사이트 내부에 들어가면 **"Settings(설정)"** 탭을 클릭하세요. 이제 복사한 Normal 스니펫을 Body Tracking code 필드 하단에 붙여넣으세요.

![설정에서 트래킹 코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035609415/original/cao5aLXuVvjYdCDflhi-3E5vkZF2Q5-hbw.png?1730192328)

Save(저장)를 클릭하세요. 이렇게 하면 전체 퍼널/웹사이트에서 번호가 교체됩니다.

![설정 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035612620/original/E1t2f_6zTqSvxmWZtMOBt6XK4wQPd3gZuQ.png?1730194188)

단일 퍼널/웹사이트 페이지에서만 번호를 교체하려면 좌측 상단의 Tracking Code 아이콘을 클릭하세요.

![개별 페이지 트래킹 코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035614019/original/gFT0bIuvSMTDoPdbpIsePkRplyUnuYDsCA.png?1730195095)

우측의 **"Footer Tracking"** 옵션을 클릭하세요.

![푸터 트래킹 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035699632/original/JLg40HsVFqYN35-oWr3tMHJhFqGy3rnITg.jpeg?1730282281)

이제 코드 편집기에 코드를 붙여넣으세요.

![코드 편집기에 붙여넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035699692/original/6MrL7sfp50updOJ1Wcq__cYvGm_sZReN0Q.jpeg?1730282318)

**"Save(저장)"**를 클릭하여 진행하세요.

![푸터 트래킹 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035614730/original/GWkPyaAsIfa4Fcz-gkokJSLH5FgytILdXA.png?1730195504)

번호 풀 설정으로 돌아가세요. 방금 생성한 번호 풀에 마우스를 올리고 **세 점 메뉴**를 클릭하세요.

![번호 풀 옵션 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035618716/original/qq-lc41A4ETx0UyELKvWiCwQ59YBq3Nk7Q.png?1730197647)

"Update Tracking Number"를 클릭하세요.

![추적 번호 업데이트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035618746/original/FVyqaFuWsM1GWbo55UqxC7cmeLfCp87_1Q.png?1730197666)

교체 번호를 복사하여 퍼널/웹사이트에 붙여넣으세요.

![교체 번호 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035627351/original/VjTwJFHUMyOOXFNIaB34FohFH3gAeiRMQA.png?1730202367)

교체 번호를 업데이트하려면 다음 단계를 따르세요:

세 점 메뉴를 클릭하세요.

![메뉴 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035628979/original/AlUzjbIachBUwPI6kEVf24xg0UHhyAGo2w.png?1730203165)

**"Edit Configuration"**을 클릭하세요.

![설정 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035629044/original/iAayPphnG_T7S5HiWGKhwiKXRnG3NTPFwA.png?1730203190)

**"Swapping number(s) same as forwarding number"** 옵션을 체크 해제하고 자체 교체 번호를 설정하세요. 해당 필드에 교체 번호를 입력하고 "Add" 버튼을 클릭하세요.

**참고:** Twilio/LC 전화번호는 착신 전환 번호로 사용할 수 없습니다. 이는 루프 문제를 발생시킵니다. 통화 라우팅 문제를 방지하기 위해 다른 외부 번호를 사용하세요.

![교체 번호 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035701999/original/yYqZl4ravqOfnWlXO5RN97qZcWgRpu9qRw.png?1730283606)

이제 교체 번호를 웹사이트에 붙여넣을 수 있습니다.

![웹사이트에 번호 붙여넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035685820/original/TxYo7aw5Rd45hktU3P8c2qmNRTvx9PMLbQ.png?1730273929)

번호 풀이 설정되고 실행되면 Reporting(리포팅)의 "Call Report"에서 **키워드** 열을 볼 수 있습니다.

웹사이트 방문자가 키워드를 검색한 다음 웹사이트에 방문하여 추적 번호로 전화하면, 통화 보고서 탭에서 유입 경로와 키워드를 어트리뷰션할 수 있습니다.

![통화 보고서의 키워드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035637831/original/qEKY7Ayc8u9WOQ_ti-x-XAeeALOJIn1pSQ.png?1730207775)

우측으로 스크롤하여 여기서 화살표 아래 버튼을 클릭하면 연락처가 방문했던 링크도 볼 수 있습니다. 연락처 이름을 클릭하여 그들의 활동을 확인할 수도 있습니다:

![연락처 활동 확인](https://i.ibb.co/bLgx9K5/chrome-capture-2023-1-22.gif)

## 번호 교체 테스트 방법

웹페이지의 Body에 추적 스크립트를 추가한 후, 시크릿 브라우저를 열어 번호 교체가 작동하는지 테스트할 수 있습니다.

시크릿 브라우저에 다음을 입력합니다: [yourwebsite.com/landing-page](//yourwebsite.com/landing-page?gclid) 그런 다음 엔터를 누르세요.

![시크릿 브라우저 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035690960/original/MDx6s5ci7aK5J-T1I30xsRbIi4L9fdNBQA.jpeg?1730277583)

추적 옵션으로 "All Except Direct"가 선택된 경우, 테스트를 위해 브라우저에 링크를 직접 입력하는 대신 다른 웹페이지에서 랜딩 페이지 URL로 링크를 연결해야 합니다.

![직접 유입 제외 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48084268495/original/wyON9o6h0H8PM2MFQ7Qtyl9CvBzT_mqyxg.png?1611954090)

예: Apple Smiles를 [yourwebsite.com/landing-page](https://yourwebsite.com/landing-page,)로 링크

## 키워드 추적 설정 방법

Hyperclass가 통화가 시작되기 전에 검색된 키워드를 표시하려면 Google 광고의 광고 URL에 다음 매개변수를 추가해야 합니다: ?keyword={keyword}

예를 들어 Google 광고의 URL이 [yourwebsite.com/landingpage](https://yourwebsite.com/landingpage)와 같다면 해당 URL을 다음과 같이 업데이트해야 합니다: [yourwebsite.com/landingpage/?keyword={keyword}](https://yourwebsite.com/landingpage/?keyword=%7Bkeyword%7D)

관련: [신기능 출시 -- 통화 추적!!](https://www.loom.com/share/54dd0248ee4e46698330b6740721733a)

## 버튼에서 번호 교체하기

앵커 태그를 사용하고 href를 전화번호로 설정하며 원하는 텍스트를 입력할 수 있습니다.

예: <a href="tel:(972) 421-5139" class="btn btn-blue">Call Us</a>

## 그룹 ID

그룹 ID는 다른 번호 풀의 모든 번호가 아닌 하나의 번호만 교체하는 데 도움이 됩니다. 따라서 가장 적합한 번호 풀을 찾아 번호를 교체합니다.

**사용 사례 예시:**

사용자가 두 개의 광고를 운영하고 있다고 가정합니다. 리드가 첫 번째 광고에 방문하면 웹사이트에 다른 번호가 표시되고, 두 번째 광고에 방문하면 또 다른 번호가 표시됩니다. 그러면 광고에 따라 소스를 변경하고 그룹 ID를 사용하여 그룹을 설정해야 합니다.

번호 풀 편집 > Add/Edit Group Id 클릭 > 그룹 ID 이름 지정 > Update 클릭.

![그룹 ID 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035693322/original/aJDR2Chhn6zQKhxedMCQb32foC