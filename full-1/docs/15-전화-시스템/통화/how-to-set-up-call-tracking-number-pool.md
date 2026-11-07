---
원문: https://help.gohighlevel.com/support/solutions/articles/48000981393-how-to-set-up-call-tracking-number-pool-
번역일: 2026-11-06
카테고리: 15-전화-시스템
---

# 번호 풀로 통화 추적 설정하기

번호 풀을 만들면 리드가 어디에서 왔는지에 따라 다른 전화번호를 보여 줄 수 있어요. 이렇게 하면 모든 통화가 어떤 캠페인이나 랜딩 페이지에서 나왔는지 확인할 수 있어요.

## 이 문서에서 배우는 내용

번호 풀은 유료 광고 캠페인에서 발생한 통화를 추적할 때 유용해요. 특정 랜딩 페이지와 웹사이트에 들어온 리드에게 지정한 전화번호를 보여 주고, 그 번호로 온 통화를 출처별로 구분할 수 있어요. 이 번호는 지정한 페이지에서만 보이고, 특정 행동을 한 리드에게만 보여요. 통화 추적 코드라고도 하지만, 여기서는 번호 풀이라고 불러요.

이 문서에서는 방문자 데이터를 모을 수 있도록 번호 풀을 설정하는 방법을 안내해요.

## 통화 추적용 번호 풀 설정하기

{% hint style="info" %}
업데이트: 이제 URL에 `gclid`를 직접 입력해서 Google 광고를 흉내 낼 수 없어요. 실제 Google 광고를 통해 들어온 경우여야 해요.
{% endhint %}

### 1단계. 설정 > 전화번호 열기

왼쪽 메뉴에서 **설정**을 엽니다.

![설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035553055/original/C6klWkTlntyoKouYxf_cuwjfuRcXa_2v3A.png?1730118765)

그런 다음 **전화번호**를 클릭하세요.

![전화번호 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035553093/original/Xmd3-E7gdlD8gHIaLFK3plK9pDthFg6zBg.png?1730118798)

### 2단계. 번호 풀 추가

**번호 풀 추가**를 클릭하세요. 페이지 오른쪽의 **+ Add Number**(번호 추가) 드롭다운 메뉴 안에 있어요.

![번호 풀 추가 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035553172/original/LrqTVqHJZVpvmc6YCd_qJMGZKmgUan4H4A.png?1730118855)

### 3단계. 방문자 활동 선택

통화 추적용 번호 풀을 만들 거라서 **방문자 활동** 옵션을 선택해요.

![방문자 활동 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035553192/original/FsRCnpQ4Sjb5RarMg4pnrkRUueOQYoerog.png?1730118867)

목록에서 추적할 방문자를 선택하고 **다음: 풀 생성**을 클릭하세요. **All visitors**(모든 방문자)를 추적하는 것을 권장해요.

{% hint style="info" %}
**PPC search**(PPC 검색)를 선택하면 방문자가 유료 광고를 통해 들어왔을 때만 웹사이트의 번호가 바뀌어요.
{% endhint %}

![추적할 방문자 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035553259/original/SUlC-dio_dxcvbwvFVQRK3IMuD6DnpBDVA.png?1730118919)

### 4단계. 풀 이름과 풀 크기 정하기

**번호 이름**: 추적 번호의 이름을 입력해요.

![번호 이름 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035569952/original/QYyJz-1RH1geuZ9-dg2WSH4pqipjFfacgQ.png?1730128637)

**풀 크기**: 번호 풀 하나에는 추적 번호가 최소 4개 들어가요. 통화량에 따라 풀 크기를 정하세요. 통화량이 많을수록 추적 번호도 더 많이 필요해요.

![풀 크기 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035570018/original/9uzVm3SkXliG-FbxeK_D5iupRs5MEmoUKQ.png?1730128659)

### 5단계. 착신 번호와 교체 번호 설정

**착신 번호**: 대표 사업 번호, 또는 발신자가 추적 번호로 전화했을 때 통화를 받을 번호를 입력해요.

{% hint style="info" %}
Twilio 또는 하이퍼클래스 전화번호는 착신 번호로 쓸 수 없어요. 통화가 계속 되돌아가는 루프 문제가 생기기 때문이에요. 통화 연결 문제를 피하려면 반드시 외부의 다른 번호를 사용하세요.
{% endhint %}

![착신 번호 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035571554/original/MmYkPL18ZpF2slInXwWGksooUfOupoLpEQ.png?1730129701)

**교체 번호**: 시스템이 웹사이트에서 바꿔 보여 줄 전화번호를 입력해요. 앞 단계에서 입력한 착신 번호와 같은 번호를 쓸 수도 있고, 체크박스를 해제해서 다른 번호를 입력할 수도 있어요.

![교체 번호 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035571613/original/6MY7uqWGt-QGWnbk11xbBqHFw3nHh5cpxQ.png?1730129737)

이 체크박스를 선택하면 번호 풀에 추가할 새 전화번호 4개를 구매한다는 데 동의하는 것으로 봐요.

![구매 동의 체크박스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035571668/original/EFPwlCu_8ey-sEubgCQLUnDgZyErHWfHHg.png?1730129769)

모든 정보를 입력했으면 **다음: 번호 선택**을 클릭하세요.

![다음: 번호 선택 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035571896/original/1GxgtevFnaYsURV65l5QsZCcS6o34bv-CA.png?1730129928)

### 6단계. 추적 번호 선택

추적 번호는 지역 번호에 맞는 로컬 번호, 수신자 부담 번호, 원하는 지역 번호의 번호 중에서 고를 수 있어요.

**로컬 번호**: 로컬 번호를 선택하면 앞에서 **착신 번호**로 입력한 번호와 같은 지역의 전화번호 4개가 나와요.

![로컬 번호 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035601180/original/KO2URqfDW78vFDKpVs0pN4EEh-BpaUJZrA.png?1730186272)

**수신자 부담 번호**: 번호 풀에 쓸 수신자 부담 번호를 고를 수 있어요. 원하는 지역 번호에 사용 가능한 번호가 없을 때 이 옵션을 쓰세요.

![수신자 부담 번호 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035730576/original/cqtDPLNLofMeGG3uUm2D4WTk-7KjvPNTmQ.png?1730300385)

사용 가능한 수신자 부담 번호를 보려면 드롭다운 메뉴에서 지역 번호를 선택하세요.

![수신자 부담 번호 지역 번호 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035730790/original/LBfHiQ9XAQzNLCWoMR1_cVPfAfzS4g3wmw.png?1730300503)

**특정 지역 번호의 번호**: 다른 지역의 전화번호를 골라도 괜찮다면 지역 번호를 입력하고 **가능 시간 확인**을 클릭하세요. 몇 초 안에 사용 가능한 전화번호가 나와요.

![특정 지역 번호의 번호](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035731301/original/VZ8jtLRTxDur39dRmwa0zE272Qc3OiAyAA.png?1730300833)

위 세 가지 방법 중 하나로 추적 번호를 만들었다면 **다음: 번호 기능**을 클릭해 다음 단계로 넘어가세요.

![다음: 번호 기능 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035601207/original/9NS9bd2AuBQkAWiElx_upmXT0Eu-BlNY9A.png?1730186298)

### 7단계. 귓속말 메시지와 통화 녹음 설정

**귓속말 메시지**: 전화를 받을 때 들리는 안내 메시지예요. 귓속말 메시지를 "[소스]에서 온 전화"로 설정하면 "광고 캠페인에서 온 전화"처럼 들려요. 발신자에게는 이 메시지가 들리지 않고, 전화를 받는 사용자만 들을 수 있어요.

![귓속말 메시지 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035601681/original/4JaBqESVjp_JlWkbdpQJ9ZnaQ57BfukJ2g.png?1730186730)

**통화 녹음**: 체크박스를 선택하면 시스템이 통화를 녹음해요. 발신자에게 들려줄 안내 문구도 직접 정할 수 있어요. 예: "품질 관리를 위해 이 통화는 녹음됩니다."

![통화 녹음 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035601886/original/MjI3Dnu4Fn8eqCEVyTbB4J3-zyp5-YrL7g.png?1730186947)

### 8단계. 번호 풀 활성화

**번호 활성화**를 클릭하세요.

![번호 활성화 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035603774/original/dynpD9_O0v7QExPMpNCJTdK-4BMhvLloDg.png?1730188485)

## 웹사이트에 추적 스니펫 넣기

번호 풀을 설정했다면 웹사이트에 스니펫을 넣어야 해요. 순서는 다음과 같아요.

### 1단계. 번호 풀에서 스니펫 복사

**번호 풀**로 이동하세요. 사용할 번호 풀에서 점 세 개 아이콘을 클릭합니다.

![번호 풀로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035604138/original/wEcLv3jCTow4lVT_3tCF2Jl80OoaL4VpIA.png?1730188747)
![번호 풀 점 세 개 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035604533/original/SnnfA1hQ0EK2d4cskqQGtTPxRnd8y4IT2g.png?1730189043)

**번호 풀 정보**를 클릭하세요.

![번호 풀 정보 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035604584/original/WfBvILKcThZ7leHrjqSN-APOFAOLCmZWkg.png?1730189065)

**일반 스니펫** 코드를 복사하세요. 이 코드를 퍼널이나 웹사이트에 붙여 넣어야 해요.

![일반 스니펫 코드 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035699309/original/kTjYeEobAGqCw5aN-HcQIp9OSqc8CCAQzw.jpeg?1730282089)

**사이트** 메뉴로 이동해서 **퍼널** 또는 **웹사이트**를 클릭하세요.

![사이트 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035608282/original/mxNSI1VnoVf-cgI124_UPd_-fy8ZcqBdIQ.jpeg?1730191548)

### 2단계. 사이트 또는 퍼널에 스니펫 붙여 넣기

**퍼널** 또는 **웹사이트**를 클릭한 다음, 번호 풀을 사용할 퍼널을 클릭하세요.

![퍼널 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035992387/original/E_zhEm3F7yGO9iFYQnRkJe_-OYzugI8qKw.png?1730791942)

퍼널이나 웹사이트 안으로 들어가서 **설정** 탭을 클릭하세요. 복사한 일반 스니펫을 **Body Tracking code**(본문 트래킹 코드) 입력란 맨 아래에 붙여 넣습니다.

![Body Tracking code에 스니펫 붙여 넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035609415/original/cao5aLXuVvjYdCDflhi-3E5vkZF2Q5-hbw.png?1730192328)

**저장**을 클릭하세요. 퍼널이나 웹사이트 전체에서 번호가 교체돼요.

![트래킹 코드 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035612620/original/E1t2f_6zTqSvxmWZtMOBt6XK4wQPd3gZuQ.png?1730194188)

### 3단계(선택). 한 페이지에만 추적 적용하기

퍼널이나 웹사이트의 한 페이지에서만 번호를 교체하려면, 왼쪽 위의 **추적 코드** 아이콘을 클릭하세요.

![추적 코드 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035614019/original/gFT0bIuvSMTDoPdbpIsePkRplyUnuYDsCA.png?1730195095)

오른쪽의 **푸터 추적** 옵션을 클릭하고, 코드 편집기에 코드를 붙여 넣으세요.

![푸터 추적 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035699632/original/JLg40HsVFqYN35-oWr3tMHJhFqGy3rnITg.jpeg?1730282281)
![코드 편집기에 코드 붙여 넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035699692/original/6MrL7sfp50updOJ1Wcq__cYvGm_sZReN0Q.jpeg?1730282318)

**저장**을 클릭해서 마무리하세요.

![푸터 추적 코드 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035614730/original/GWkPyaAsIfa4Fcz-gkokJSLH5FgytILdXA.png?1730195504)

### 4단계. 필요하면 나중에 교체 번호 바꾸기

번호 풀 설정 화면으로 돌아가세요. 방금 만든 번호 풀 위에 마우스를 올리고 점 세 개 메뉴를 클릭합니다.

![번호 풀 위에 마우스를 올렸을 때 나오는 점 세 개 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035618716/original/qq-lc41A4ETx0UyELKvWiCwQ59YBq3Nk7Q.png?1730197647)

**추적 번호 업데이트**를 클릭하세요. 교체 번호를 복사해서 퍼널이나 웹사이트에 붙여 넣습니다.

![추적 번호 업데이트 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035618746/original/FVyqaFuWsM1GWbo55UqxC7cmeLfCp87_1Q.png?1730197666)
![교체 번호 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035627351/original/VjTwJFHUMyOOXFNIaB34FohFH3gAeiRMQA.png?1730202367)

교체 번호를 바꾸려면 점 세 개 메뉴를 클릭한 다음 **구성 편집**을 클릭하세요.

![점 세 개 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035628979/original/AlUzjbIachBUwPI6kEVf24xg0UHhyAGo2w.png?1730203165)

**Swapping number(s) same as forwarding number**(교체 번호를 착신 번호와 동일하게 설정) 옵션의 체크를 해제하고 원하는 교체 번호를 설정하세요. 해당 입력란에 교체 번호를 입력하고 **추가** 버튼을 클릭합니다.

![구성 편집 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035629044/original/iAayPphnG_T7S5HiWGKhwiKXRnG3NTPFwA.png?1730203190)

{% hint style="info" %}
Twilio 또는 하이퍼클래스 전화번호는 착신 번호로 쓸 수 없어요. 통화가 계속 되돌아가는 루프 문제가 생기기 때문이에요. 통화 연결 문제를 피하려면 반드시 외부의 다른 번호를 사용하세요.
{% endhint %}

![교체 번호를 착신 번호와 동일하게 설정하는 옵션 해제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035701999/original/yYqZl4ravqOfnWlXO5RN97qZcWgRpu9qRw.png?1730283606)

이제 교체 번호를 웹사이트에 붙여 넣을 수 있어요.

![웹사이트에 교체 번호 붙여 넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035685820/original/TxYo7aw5Rd45hktU3P8c2qmNRTvx9PMLbQ.png?1730273929)

### 5단계. 통화 리포팅에서 출처 확인

번호 풀이 설정되어 작동하기 시작하면 **리포팅 > 통화 리포트**에서 **키워드** 열을 볼 수 있어요.

방문자가 키워드를 검색해서 웹사이트에 들어오고 추적 번호로 전화하면, 통화 리포팅 탭에서 출처와 키워드를 확인할 수 있어요.

![통화 리포트의 키워드 열](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035637831/original/qEKY7Ayc8u9WOQ_ti-x-XAeeALOJIn1pSQ.png?1730207775)

오른쪽으로 스크롤한 뒤 아래 화살표 버튼을 클릭하면 연락처가 보고 있던 링크도 볼 수 있어요. 연락처 이름을 클릭하면 해당 연락처의 활동도 확인할 수 있어요.

![오른쪽으로 스크롤해서 연락처 활동 보기](https://i.ibb.co/bLgx9K5/chrome-capture-2023-1-22.gif)

## 번호 교체가 되는지 테스트하기

웹페이지 본문(Body)에 추적 스크립트를 추가했다면, 시크릿 브라우저 창을 열어 번호 교체가 잘 되는지 테스트할 수 있어요.

시크릿 브라우저 주소창에 `yourwebsite.com/landing-page`를 입력하고 Enter 키를 누르세요.

![시크릿 브라우저에서 번호 교체 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035690960/original/MDx6s5ci7aK5J-T1I30xsRbIi4L9fdNBQA.jpeg?1730277583)

**Tracking Option**(추적 옵션)에서 **다이렉트 제외 전체**를 선택했다면, 브라우저에 링크를 직접 입력해서는 테스트할 수 없어요. 다른 웹페이지에서 랜딩 페이지 URL로 연결되는 링크를 눌러 들어가야 해요.

![번호 풀 테스트 링크 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48084268495/original/wyON9o6h0H8PM2MFQ7Qtyl9CvBzT_mqyxg.png?1611954090)

예: "Apple Smiles"라는 글자에 `yourwebsite.com/landing-page` 링크를 연결해요.

## 키워드 추적 설정하기

전화를 걸기 전에 검색한 키워드를 플랫폼에 표시하려면 Google Ads의 광고 URL에 다음 매개변수를 추가해야 해요: `?keyword={keyword}`

예를 들어 Google 광고 URL이 `yourwebsite.com/landingpage`라면 `yourwebsite.com/landingpage/?keyword={keyword}`로 바꾸세요.

*관련 영상: 새 기능 출시 — [통화 추적!!](https://www.loom.com/share/54dd0248ee4e46698330b6740721733a)*

## 버튼에서 번호 교체하기

앵커 태그를 사용하고, `href`에 전화번호를, 버튼 글자에 원하는 텍스트를 넣으면 돼요.

`e.g. <a href="tel:(972) 421-5139" class="btn btn-blue">Call Us</a>`

{% hint style="warning" %}
`href="tel:..."` 안의 전화번호는 화면에 보이는 번호(교체 번호)와 같은 형식이어야 해요. 번호 풀은 국내 형식과 국제 형식을 자동으로 같은 번호로 맞춰 주지 않아요. 국제 번호는 국내 형식이나 E.164 형식 중 하나를 골라 페이지 전체에서 일관되게 쓰세요.
{% endhint %}

## 그룹 ID

그룹 ID를 쓰면 서로 다른 번호 풀에 있는 번호를 모두 바꾸지 않고 번호 하나만 교체해요. 가장 잘 맞는 번호 풀을 찾아서 그 번호로 교체해요.

사용 예시

광고 두 개를 운영 중이라고 해 볼게요. 리드가 첫 번째 광고로 들어오면 웹사이트에 한 번호가 보이고, 두 번째 광고로 들어오면 다른 번호가 보여야 해요. 이럴 때는 광고에 맞게 소스를 바꾸고 **그룹 ID**(Group ID)로 그룹을 설정해야 해요.

번호 풀을 편집한 다음 **Add/Edit Group Id**(그룹 ID 추가/편집)를 클릭하고, 그룹 ID 이름을 입력한 뒤 **업데이트**를 클릭하세요.

![그룹 ID 추가/편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035693322/original/aJDR2Chhn6zQKhxedMCQb32foCGt-toP-g.gif?1730278925)

정보 아이콘을 클릭하면 그룹 스니펫을 복사할 수 있어요. 이 스니펫을 웹사이트 푸터에 넣으세요.

![그룹 스니펫 복사](https://i.ibb.co/QQz5Hvk/2023-1-22-13-46-6.gif)

## 자주 묻는 질문

### 통화를 추적하려면 왜 번호 풀을 설정해야 하나요?

모든 유입 경로에 통화 추적을 설정하는 것을 권장해요. 리드가 여러 경로에서 랜딩 페이지에 들어오는 순간 전화번호를 바꿔 보여 주면, 방문자가 어떻게 웹사이트에 왔는지 알 수 있어요. 예를 들어 실제 Google 광고는 랜딩 URL 끝에 `&gclid` 매개변수가 붙어요. 스니펫 코드가 이 값을 보고 번호를 바꿔 줘요. 방문자가 그 추적 번호로 전화하면 웹사이트 쿠키와 대조해서 연결하고, 리드의 유입 출처로 기록해요.

방문자가 추적 번호로 전화하면 통화 리포팅 탭에서 키워드를 확인할 수 있어요. 해당 열에 데이터가 채워져요.

![통화 리포팅의 키워드 어트리뷰션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035685897/original/VWgv6ISZNQWwPZCNl1qo1mr0o-RNAiveBw.jpeg?1730273987)

### 번호 풀을 설정하는 데 비용이 얼마나 드나요?

번호 풀의 각 번호는 계정의 일반 전화번호와 같은 요금이 청구돼요. 풀 하나에 최소 4개의 번호가 필요하므로 그 번호마다 요금이 발생해요.

하이퍼클래스 Twilio를 사용한다면 Twilio의 표준 요금이 적용돼요(예: 미국 번호 1개당 월 1달러와 사용량 요금). 에이전시가 자체 Twilio 계정을 사용한다면 해당 Twilio 계정 설정에 따라 요금이 달라져요. 풀이 클수록 비용이 더 들어요. 트래픽 규모에 맞게 풀 크기를 정하세요.

전화번호 비용은 서브 계정의 **설정 > 전화번호**에서 언제든 확인하고 조정할 수 있어요.

### 번호 풀로 걸려 온 통화를 웹 앱이나 모바일 앱으로 연결할 수 있나요?

현재는 안 돼요. 번호 풀로 걸려 온 통화는 **착신 전환 대상**에 입력한 번호로만 연결돼요.

### 화면에 보이는 전화번호와 클릭하는 tel: 링크는 같은 형식이어야 하나요?

네. 번호 풀은 페이지에 설정한 형식 그대로 전화번호를 찾아 교체해요. 화면에 보이는 번호와 `tel:` 링크 안의 값이 서로 다른 형식이면, 보이는 번호는 바뀌어도 클릭하는 링크는 바뀌지 않을 수 있어요.

예를 들어 화면에 보이는 번호가 **(02) 6193 4089**라면:

권장하는 클릭 링크: `<a href="tel:(02) 6193 4089">Call Us</a>`

화면에 (02) 6193 4089가 보이는데 `<a href="tel:+61261934089">Call Us</a>`를 쓰면, 두 값의 형식이 달라서 링크가 교체되지 않을 수 있어요.

### 같은 전화번호의 국내 형식과 국제/E.164 형식은 같은 번호로 처리되나요?

아니요. 번호 풀은 국내 형식과 국제 형식을 자동으로 같은 번호로 맞춰 주지 않아요. 예를 들어 (02) 6193 4089와 +61261934089는 번호를 찾을 때 서로 다른 값으로 취급돼요.

화면에 보이는 번호와 클릭 링크가 모두 제대로 교체되게 하려면 다음 항목에서 같은 형식을 일관되게 쓰세요.

- 교체 번호
- 웹페이지에 보이는 전화번호
- `href="tel:..."` 값

### 번호 풀에서 국제 번호나 E.164 형식을 쓸 수 있나요?

네, 국제/E.164 형식을 쓸 수 있어요. 다만 형식을 일관되게 써야 해요. 예를 들어 교체 번호를 **+61261934089**로 설정했다면 웹페이지에서도 다음과 같이 써야 해요.

화면에 보이는 번호: **+61261934089**

클릭 링크: `<a href="tel:+61261934089">Call Us</a>`

보이는 번호와 링크가 모두 교체되길 원한다면, 같은 번호에 국내 형식과 국제 형식을 섞어 쓰지 마세요.
