---
원문: https://help.gohighlevel.com/support/solutions/articles/48001220947-how-to-set-up-google-ads-offline-conversion-actions-google-platform-side-setup-
번역일: 2026-11-06
카테고리: 18-리포팅
---

# Google Ads 오프라인 전환 작업 설정하기 (Google 플랫폼 쪽 설정)

Google Ads 화면에서 오프라인 전환 작업을 직접 만드는 방법을 안내해요. 이 문서는 Google 쪽 설정만 다루고, 하이퍼클래스 설정 단계는 포함하지 않아요. 설정을 마친 뒤에는 **광고 관리자**(Ad Manager)나 워크플로우로 하이퍼클래스의 전환을 연결하세요.

## Google Ads 전환 작업이란?

Google Ads 전환 작업은 추적하고 최적화하려는 이벤트를 정해 두는 설정이에요. 리드, 통화, 폼 제출, 오프라인 판매 같은 이벤트가 해당돼요. 전환 작업의 범위를 분명하게 만들어 두면 Google Ads가 성과를 정확히 연결하고, 캠페인이 의미 있는 결과를 목표로 입찰해요.

**전환 작업**은 원하는 행동이 일어났을 때 이를 기록하는 Google Ads의 규칙이에요. 오프라인 전환(예: CRM에서 고객전환성공으로 표시한 기회)은 GCLID/GBRAID/WBRAID 같은 식별자를 매칭해서 광고와 키워드에 성과를 연결해요.

### Google Ads 전환 작업의 주요 이점

전환 작업을 제대로 만들어 두면 입찰 신호가 좋아지고 측정 기준이 분명해져요. 잡음이 섞이거나 중복된 데이터도 막을 수 있어요.

- **정확한 최적화**: 스마트 입찰(Smart Bidding)에 깨끗한 신호를 전달해요.
- **명확한 리포팅**: 자격을 갖춘 리드 같은 주요 성과와 보조 이벤트를 구분해요.
- **집계 방식 제어**: 광고 상호작용 한 번당 전환을 **매** 집계할지, **하나**만 집계할지 정할 수 있어요.
- **유연한 기여도 설정**: 퍼널과 데이터 양에 맞는 모델을 고를 수 있어요.
- **오프라인 호환**: GCLID/GBRAID/WBRAID 같은 ID로 서버 측·CRM 이벤트를 업로드할 수 있어요.

### Google 쪽 사전 준비

Google Ads 계정을 미리 준비해 두면 나중에 다시 작업하지 않아도 돼요. 작업을 만들기 전에 접근 권한, 계정 구조, 목표 분류 기준을 확인하세요.

- 해당 **Google Ads** 계정에 대한 관리자 또는 표준 접근 권한
- 목표 분류 기준에 대한 합의(예: **리드**, **리드 폼 제출**, **자격을 갖춘 리드**의 구분)
- 이 작업을 입찰에 사용하는 **기본** 작업으로 지정할지에 대한 결정
- 하이퍼클래스에서 오프라인 전환을 보낼 때 함께 전달할 식별자(예: GCLID/GBRAID/WBRAID)에 대한 정리

## Google Ads에서 오프라인 전환 작업 만들기

**Google Ads**에서 아래 순서대로 따라 하면, 나중에 하이퍼클래스에서 데이터를 보낼 전환 작업을 만들 수 있어요. 설정을 제대로 해 두면 기여도가 깔끔하게 연결되고 입찰 신호도 안정적이에요.

{% hint style="info" %}
이 문서는 Google 플랫폼 쪽 설정만 다뤄요. 하이퍼클래스 **광고 관리자**에서 오프라인 전환을 설정하려면 "광고 관리자 - Google Ads 오프라인 전환 만들기 및 관리" 문서를 참고하세요.

양식 제출, 번호 풀 통화, 채팅 위젯 답장 같은 Google Ads 전환 작업을 하이퍼클래스 워크플로우에서 직접 설정하고 추적하려면 워크플로우 액션 **Add To Google Ads**(Google Ads에 추가) 문서를 참고하세요.
{% endhint %}

1. Google Ads 계정에 들어가거나 [ads.google.com](https://ads.google.com/intl/en_in/start/lc/?subid=in-en-ha-awa-bk-c-c00!o3~CjwKCAjwyYPOBhBxEiwAgpT8PxzugBXx8nv7PGe8R-bVM6pT1TSQUkUBsSH7fq-9uWlPPKDs9bWKqxoCiVUQAvD_BwE~140706620052~kwd-94527731~16862088904~592470418766&gclsrc=aw.ds&gad_source=1&gad_campaignid=16862088904&gclid=CjwKCAjwyYPOBhBxEiwAgpT8PxzugBXx8nv7PGe8R-bVM6pT1TSQUkUBsSH7fq-9uWlPPKDs9bWKqxoCiVUQAvD_BwE)를 열어요.
2. **Sign In**(로그인)을 눌러 Google Ads 계정에 로그인하세요. 새 계정을 만들려면 **지금 시작**을 누르세요.

   ![Google Ads 로그인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064512308/original/C8Aw37elwsskF22cfBXP7IxnyZg-vd6WuA.png?1770651246)
3. **+** 를 누르고 드롭다운에서 **Conversion Action**(전환 작업)을 선택하세요.

   ![+ 버튼에서 전환 작업을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067502302/original/9qUf3GbbUGIRqj0l1iAlLO-HcyOURbtFdQ.gif?1774272837)
4. 현재 Google Ads 화면에 나오는 안내에 따라 전환을 측정할 데이터 소스를 선택하세요.

   ![전환 측정 데이터 소스 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579637/original/1wvU2iIuwl1vgDCU4q672wPZXEmaxnNILg.png?1774345111)
5. 전환 추적을 시작하려면 **Conversions offline**(오프라인 전환) 옵션을 선택하세요.

   {% hint style="info" %}
   하이퍼클래스는 오프라인 전환만 지원해요. 웹사이트, 앱, 전화 통화 등 다른 전환 소스는 지원하지 않아요.
   {% endhint %}

   ![오프라인 전환 옵션 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579648/original/-PwtOolBiOv6IZ2uBtJZzD_-GhUtvdE7Pw.png?1774345121)
6. **Edit Data Sources**(데이터 소스 편집)를 눌러 오프라인 데이터 소스를 추가하고, 'Skip this step and set up a data source later.'(이 단계를 건너뛰고 나중에 데이터 소스 설정)를 선택하세요.

   ![데이터 소스 편집 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579723/original/VsiSQvjZtX8P0cXhZbudRHW9m_XWoawx1w.png?1774345176)
   ![데이터 소스 설정을 나중으로 미루는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579852/original/j74nCVGHCYk6FtNsTFSCiGXRAtF9qKwHPA.png?1774345222)
7. **저장 후 계속**을 누르세요.

   ![저장 후 계속 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579906/original/Lc38gm87HysxZ7IKAiwmYlGfJ6gMn7wYMA.png?1774345249)

   **Conversion Category**(전환 카테고리)를 선택하세요. 이 단계는 "What do you want to measure?"(무엇을 측정하고 싶나요?)에 답하는 단계예요. **See all**(모두 보기)을 누르면 전체 전환 카테고리 목록을 볼 수 있어요.

   ![전환 카테고리 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067506158/original/8tXXliQSYFav771REY1QnV9yBwa06VkBHw.png?1774274441)
8. 전환 카테고리를 선택한 뒤에는 그 카테고리에 데이터 소스를 추가해야 해요.

   ![카테고리에 데이터 소스를 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580048/original/U4gxlhKu0mq9IJ2RGZx4--KiYeZ5-CrH8Q.png?1774345321)
9. **Edit settings**(설정 편집)를 눌러 세부 내용을 정하세요.

   ![설정 편집 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580713/original/-Kp98QJlnSnH0Od2wiV0YYMqhjt-C42fKg.png?1774345593)
10. 이 영역은 앞 단계에서 선택한 'Conversion Goal'(전환 목표)을 보여 주는 작업 최적화 설정이에요. 라디오 버튼은 **Primary action used for bidding optimisation**(입찰 최적화에 사용하는 기본 작업)을 선택한 상태로 두세요.

    ![기본 작업 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580773/original/f53u6AuJzI4SU2_7b9jsWXCmby7r6dAnwQ.png?1774345640)
11. **Give this Conversion a name**(이 전환의 이름 지정)에 전환 이름을 입력하세요. 이 예시에서는 "Conversion Test"라고 입력했어요.

    {% hint style="info" %}
    이 단계를 마치면 입력한 전환 이름을 복사해서 가까운 곳에 붙여 두세요.
    {% endhint %}

    ![전환 이름 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580849/original/TCZ-Nua_u5JdjdMQXgA7sxrjV91S4dGzwg.png?1774345674)
12. 전환 값을 선택하세요. 같은 값, 다른 값, 값 사용 안 함 중에서 고를 수 있어요. [자세히 알아보기](https://support.google.com/google-ads/answer/3419241?hl=en)

    ![전환 값 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067512334/original/OVD2rhwjEiMpi-bLkZL6FRJy95oudTnFWQ.png?1774276716)
13. 집계 방식을 선택하세요. 항상 **매**를 선택하길 권장해요. <!-- 검토 필요: 원문 내용이 서로 다름 -->

    ![집계 방식 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067512364/original/Ok2YxrgbOjCqKyH3GwIb2PP9oG6xJggbiA.png?1774276744)
14. 전환 기간과 **기여도 모델**을 설정하세요.

    1. 클릭 전환 기간을 90일로 설정하세요.
    2. 드롭다운에서 참여 조회 전환 기간을 선택하세요.
    3. **기여도 모델**을 **Last Click**(마지막 클릭) 또는 **Data Driven**(데이터 기반)으로 설정하세요. **Data Driven**을 권장해요.

    ![전환 기간과 기여도 모델 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067512556/original/zAV1TcL39odzlku9ZwfwwGtSwrwxZ6qFHg.png?1774276791)
15. **완료**를 누르면 전환 설정이 정해지고 저장돼요.

    ![완료 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067512857/original/IuaqENbu2fX7uCCFX1IZ4KdRsdD8wKrMzw.png?1774276957)
16. **저장 후 계속**을 눌러 변경 내용을 진행하세요. 새 전환을 만들려면 **Create Conversion**(전환 만들기)을 선택하세요. 전환 카테고리를 더 추가하려면 **Add Another Category**(다른 카테고리 추가)를 누르세요.

    ![전환 만들기와 다른 카테고리 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580436/original/H8j4q657JuhY9VGvEq6vj7gb4_PE-MOR0A.png?1774345508)
17. **완료**를 눌러 전환 만들기를 마치세요.

    ![전환 만들기 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580981/original/sHqe_AHeotyPhYjnrCfR12jhkrnN57S8Zg.png?1774345723)

## 자주 묻는 질문

### 집계 방식은 매와 하나 중 무엇으로 설정해야 하나요?

리드 생성에는 **하나**를 쓰세요. 같은 연락처가 같은 이벤트를 반복해도 전환이 부풀려지지 않아요. 구매처럼 매출이 발생하는 이벤트에는 **매**를 쓰세요. <!-- 검토 필요: 원문 내용이 서로 다름 -->

### Google Ads에 전환이 보이기까지 얼마나 걸리나요?

전환 수와 전송 방식에 따라 몇 시간에서 24~48시간까지 걸릴 수 있어요. 리포트에 반영이 늦는 것은 정상이에요. 리포트를 확인할 때는 기간을 구체적인 날짜로 지정하세요.

### 오프라인 전환을 업로드하려면 GCLID, GBRAID, WBRAID가 꼭 필요한가요?

네, 안정적으로 매칭하려면 식별자가 최소 하나는 있어야 해요. 처음 접점에서 쓸 수 있는 식별자를 저장해 두었다가, 하이퍼클래스에서 전환을 보낼 때 함께 넣으세요.

### 전환이 기록되고 있는지 어디에서 확인하나요?

Google Ads에서는 **Tools & Settings > Conversions**(도구 및 설정 > 전환)와, 전환 열이 있는 캠페인 리포트에서 확인할 수 있어요. 하이퍼클래스에서는 하이퍼클래스 쪽 전송 설정을 마친 뒤 **광고 관리자** 리포팅에서 확인하세요.

### 전환을 보낼 때 광고 관리자와 워크플로우 중 무엇을 써야 하나요?

광고 관리자는 광고 작업을 한곳에서 관리하고 기본 제공되는 매핑을 쓰고 싶을 때 알맞아요. 워크플로우는 세밀한 자동화나 사용자 지정 로직이 필요할 때 쓰세요. 두 방법 모두 같은 Google 전환 작업으로 보낼 수 있어요.

### 업로드한 전환이 매칭되지 않거나 결과가 보이지 않아요.

식별자 누락, 시간대 오류, 통화·값 불일치, 잘못된 전환 작업으로 전송한 경우가 흔한 원인이에요. 전환 ID와 이름, 식별자 포함 여부, 이벤트 시간을 확인하세요.
