---
원문: https://help.gohighlevel.com/support/solutions/articles/48001236281-how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api-
번역일: 2026-11-06
카테고리: 42-통합
---

# Facebook Conversions API용 퍼널 이벤트 픽셀 설정하기

Facebook Conversions API(CAPI)는 고객 데이터를 보호하면서 맞춤 광고를 보여 줄 수 있게 도와주는 도구예요. 웹 이벤트를 서버에서 Facebook으로 직접 보낼 수 있어요. 광고 이벤트를 Facebook 픽셀로 추적하고 있다면, 퍼널과 퍼널 단계에 픽셀 코드를 넣어야 해요. 이 문서에서는 그 과정을 처음부터 끝까지 안내해요.

## Meta CAPI(Conversions API) 퍼널 이벤트 설정하기

### 1단계: Meta 픽셀/데이터셋 만들기

1. [Facebook Business Manager(Meta Business Suite)](http://business.facebook.com)에 들어가 왼쪽 메뉴에서 [**Events Manager**](https://www.facebook.com/events_manager2/) 탭을 클릭해 픽셀 만들기를 시작해요.
2. 올바른 광고 계정에 연결되어 있고, 해당 Facebook 페이지에 필요한 권한이 모두 있는지 확인하세요.

   ![Events Manager에서 광고 계정과 권한 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284070737/original/AFb9bOXlqhbRRlui5ZOjvh_Ry7MYiUeFaQ.png?1677521079)
3. 왼쪽 사이드바에서 **Connect Data Sources**(데이터 소스 연결)를 클릭하세요.

   ![Connect Data Sources 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284518426/original/vpJQuXlQ-fkLtQlkuMXpv-MYw6ymdVS3Ug.png?1677678141)
4. 나타나는 옵션에서 **웹**을 선택하고 **다음**을 클릭하세요.

   ![데이터 소스 옵션에서 웹 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031423162/original/o_ZF2cyQyA9qLqbmCcAB4FnSrMwgM_mZVA.png?1724244130)
5. 이미 만든 픽셀이 있으면 기존 픽셀을 쓸지, 새로 만들지 물어봐요. 새로 만들려면 **Create new Pixel**(새 픽셀 만들기)을 클릭하고, 기존 픽셀을 쓰려면 목록에서 선택하세요. 픽셀 정보를 입력했으면 **계속**을 클릭하세요.

   ![새 픽셀 만들기 또는 기존 픽셀 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284072690/original/qgMYOqAYudCL0t2rtYthWAkL4dYkgKtGTw.png?1677521908)
   ![픽셀 정보 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289558054/original/bJeFGIeh-ZoGTd2Tb-3fON8lBJOKZVrzmw.png?1679940937)
6. 픽셀 코드를 넣을 하이퍼클래스 웹사이트 또는 퍼널의 URL을 입력하라는 화면이 나와요.

   ![웹사이트 URL 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289558739/original/PAF__5OhEXarHQx5f1VRZQ0TZlm-vIbsgw.png?1679941181)
7. 나중에 픽셀 코드를 넣을 퍼널 또는 웹사이트의 도메인을 입력하고 **확인**을 클릭하세요. 이 도메인을 사용할 수 있으면 도메인 입력란에 초록색 체크 표시가 나타나요. 체크 표시가 보이면 **확인** 대신 나타난 **다음** 버튼을 클릭하세요.

   ![도메인 확인 후 초록색 체크 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031423710/original/veyxXsSA6Fng_0nJJ-h34zDLk_G0T6pHwg.png?1724244460)
8. **Choose how to connect your website**(웹사이트 연결 방법 선택) 팝업이 나타나면 첫 번째 옵션인 **Meta Pixel and Conversions API**를 선택하세요.

   ![Meta Pixel and Conversions API 옵션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031423772/original/2XKJ_iM3ak-QJYnGV9iaEabCoJ7BRz3YrQ.png?1724244493)
9. 안내 화면이 나타나면 Conversions API 아래의 **See Instructions**(안내 보기)를 클릭하세요.

   ![Conversions API 아래 See Instructions](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031423901/original/XVw12VjtzU_VoAP_6bxCjCNv6rLP6dILvA.png?1724244584)
10. **Manual Implementation**(수동 구현) 과정의 **개요** 탭으로 이동해요. 안내를 읽고 **계속**을 클릭하세요.

    ![Manual Implementation 개요 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031424024/original/hiVjRqpxZCO_lViZiYsnTLm4ZXEmVGnAzA.png?1724244660)
11. **Select Events**(이벤트 선택) 탭으로 이동하면 픽셀을 설정할 업종을 고르는 드롭다운이 보여요. 고객사와 가장 관련 있는 업종을 선택하세요.

    ![업종 선택 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031424282/original/nM0VnSjCU1DEyuvCgbr5GGwT6QoDPYGu5g.png?1724244784)
12. Facebook으로 보낼 이벤트를 모두 선택하고 **계속**을 클릭하세요.

    ![보낼 이벤트 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031424238/original/CRl1a7eHHek535QvXq7QhCP5BFmrWYaPkg.png?1724244768)
13. **Select Parameters**(파라미터 선택) 탭으로 이동하면 **Event Detail Parameters**(이벤트 상세 파라미터) 몇 개가 이미 체크되어 있어요. 오른쪽 Best Practices 툴팁에서 권장하는 **Event ID**도 체크하세요.

    ![Event Detail Parameters 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031424309/original/CHbZI63v1OjLOi_Ha7h6oHqyfTj0LVvOuQ.png?1724244811)
    ![Event ID 체크 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031424379/original/McMYaiuIvhk2Q6px-7hY3s_a_EaRqfbWJA.png?1724244863)
14. **Customer Information Parameters**(고객 정보 파라미터) 아래에는 **Client User Agent**가 이미 체크되어 있어요. 여기에 **Client's IP Address**, **First Name**, **Client ID**, **Email**, **Business ID**, **Last Name**을 체크해야 해요.

    ![Customer Information Parameters 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031424583/original/FeAiafdKndcnOzPuYaRsELSlYdmsKUSQqw.png?1724244990)
15. 설정을 검토하고, 이벤트별로 선택한 파라미터를 마지막으로 확인하라는 화면이 나와요. 모두 원하는 대로 설정됐으면 **계속**을 클릭하세요.

    ![설정 검토 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031424785/original/WeAtZHPMuprCiu9Ut7Rm-FXrPifGfMrvhQ.jpeg?1724245080)
16. 다음 화면에서 **완료**를 클릭하세요.

    ![완료 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031424804/original/ZF7ymYlO_hwJVYNgOe1F70jwjVg4FoAolA.png?1724245108)
17. 이제 브라우저 픽셀 이벤트를 설정해요. **Set up Meta Pixel**(Meta 픽셀 설정)을 선택하세요.

    ![Set up Meta Pixel 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032148487/original/18Tq2VZt6EEZr6XOi9J4hVWjJlR_INnAeg.png?1725362743)
18. **Connect website activity using Pixel**(픽셀로 웹사이트 활동 연결) 팝업이 나타나면 **Install Code Manually**(코드 직접 설치)를 선택하세요.

    ![Install Code Manually 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032148583/original/-1I2AK9MpfruM7VYj8molxfqlhrpJF4FrA.png?1725362799)
19. **코드 복사**를 클릭해 Meta 픽셀 코드를 복사하세요.

    ![Meta 픽셀 코드 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032148600/original/OrLfiaNSvaZ4Bc4xMlmbiSB-rwcPXZa2VQ.png?1725362818)

### 2단계: 퍼널/웹사이트에 픽셀 코드 적용하기

1. 이 브라우저 탭은 열어 둔 채로 하이퍼클래스 계정으로 이동하세요. 그리고 이 픽셀을 설정할 서브 계정으로 들어가세요.
2. 왼쪽 메뉴에서 **사이트**를 클릭한 뒤 **퍼널** 또는 **웹사이트**로 이동하세요. 픽셀을 설정할 때 입력한 도메인에 연결된 사이트를 어디서 만들었는지에 따라 선택하면 돼요.

   ![사이트 메뉴에서 퍼널 또는 웹사이트 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032148908/original/7GdEB-pnC5XOcG6GQavHzbCNRMzbKgf-Wg.png?1725362991)
3. 특정 페이지나 단계만 추적하려면 **편집**을 클릭하세요. 퍼널 빌더는 **새 탭에서 편집**으로 여는 것을 추천해요.

   ![새 탭에서 편집 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032149047/original/MeKMG4wy-FOm_6pRtYT2BZZbQU3NPfou_Q.png?1725363100)
4. 빌더 안에서 코드 아이콘을 클릭하고, 복사해 둔 코드를 **헤더 추적** 섹션에 붙여넣은 뒤 **저장**을 클릭하세요.

   ![헤더 추적 섹션에 코드 붙여넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032149385/original/mEKP3Yv7hEmyp1blhUXtHd2fPdpq21S8wQ.png?1725363273)
5. 모든 페이지나 단계에서 브라우저 이벤트를 추적하려면 퍼널 또는 웹사이트 설정을 열고, 코드를 **헤드 트래킹 코드** 섹션에 붙여넣으세요.

   ![헤드 트래킹 코드 섹션에 코드 붙여넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032149705/original/-I69P-F4mIuQBcBpvAgRIT0QdTJSzLAnAA.png?1725363421)
6. 변경사항을 저장하세요.

### 3단계: Meta Conversions API 워크플로우 만들기

1. **자동화 > 워크플로우**로 이동해서 **Create Workflow**(워크플로우 만들기)를 클릭하세요.

   ![워크플로우 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032150008/original/v-sU1upHoO-x9IGa4HLW6eW2dhwxPdAS4A.png?1725363584)
2. **Add New Workflow Trigger**(새 워크플로우 트리거 추가)를 클릭하세요. 다음 트리거를 하나만 쓰거나 여러 개를 함께 쓸 수 있어요: **Form Submitted**(폼 제출), **Customer Booked Appointment**(고객이 예약함), **Survey Submitted**(설문 제출), **Order Form Submission**(주문 폼 제출).

   ![워크플로우 트리거 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032150362/original/awZeptMVjJbwk_PPtS5jOvhQjl_kaXI21Q.png?1725363773)
3. 트리거를 선택한 뒤에는 필터를 추가해서, 픽셀 전환 이벤트를 추적할 특정 폼, 캘린더, 주문 폼, 설문을 고를 수 있어요.
4. **Add your first Action**(첫 번째 액션 추가)을 클릭하세요. **Facebook Conversion API** 액션을 검색해서 선택하고 설정하세요. **Action Name**(액션 이름)에 원하는 이름을 입력할 수 있어요. **Event Type**(이벤트 유형) 드롭다운에서는 **Funnel Event**(퍼널 이벤트)를 선택하세요.

   ![Facebook Conversion API 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032151023/original/XvIqeQ42GaEENsh1S-28AJ_RmIhxAx3aZw.png?1725364054)
5. 액세스 토큰은 Facebook의 **Events Manager > Data Sources > 설정**으로 이동한 뒤, 아래로 스크롤해서 **Generate Access Token**(액세스 토큰 생성)을 클릭하면 만들 수 있어요. 생성된 액세스 토큰을 복사해서 워크플로우 액션 설정의 **Access Token**(액세스 토큰) 필드에 붙여넣으세요.

   ![Generate Access Token으로 액세스 토큰 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032151448/original/nNO1m9hBF53AoUjcdI6jTAngHwZjphesrg.jpeg?1725364264)
6. 픽셀 ID는 Facebook의 **Events Manager > Data Sources > 설정**으로 이동한 뒤, 아래로 스크롤해서 Dataset ID를 복사하세요. 이 값이 픽셀 ID예요. 워크플로우의 **FB Conversion API** 액션에서 **Pixel ID**(픽셀 ID) 필드에 붙여넣으세요.

   ![Dataset ID 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032151439/original/H-wRfkeISdeGz9XM_qxfxEA2gCQp8Ws5dQ.jpeg?1725364262)
7. **Access Token**과 **Pixel ID**를 Facebook Conversion API 액션의 해당 필드에 각각 붙여넣으세요.

   ![액세스 토큰과 픽셀 ID 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032151572/original/bbgxCtJlb3G6T3FBXPaNEiouqGfy0gk1KQ.png?1725364339)
8. 설정을 마쳤으면 **Save Action**(액션 저장)을 클릭하세요. 그런 다음 워크플로우에서 **Save**(저장)와 **Publish**(게시)를 클릭하세요.

{% hint style="info" %}
**Lead Value**(리드 가치)에는 1000이나 2000처럼 가정한 값을 입력하세요. 그러면 각 리드가 파이프라인에 어느 정도 가치를 더하는지 구분할 수 있어요.

![Lead Value 입력 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032151876/original/WVpH1GiO1F91-z_v5JdN4YictKhz4kl3_g.png?1725364516)
{% endhint %}

---

## 커스텀 값

Google Ads와 마찬가지로, 이제 Facebook Ads 전환 추적 파라미터도 직접 매핑할 수 있어요.

![커스텀 매핑 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043835950/original/gG6WcLmyidLSEdiRgYprTlogL8BqVfs3aQ.png?1742815104)

**사용 방법**

기본적으로 커스텀 매핑은 꺼져 있어요. 토글을 켜면 커스텀 매핑을 사용할 수 있어요.

커스텀 매핑을 켜면 다음 값을 매핑할 수 있어요.

- 퍼널 이벤트용 FBCLID
- 리드 이벤트용 Facebook Lead ID
- 커스텀 매핑 필드에 값을 입력하면 시스템 기본값보다 먼저 적용돼요.
- 비워 두면 시스템이 기본 내부 값을 계속 사용해요.
