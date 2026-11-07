---
원문: https://help.gohighlevel.com/support/solutions/articles/48001233833-facebook-conversion-leads-walkthrough
번역일: 2026-11-06
카테고리: 42-통합
---

# Facebook 전환 리드 설정 가이드

Facebook Conversions API를 쓰면 마케팅 데이터를 하이퍼클래스의 퍼널·워크플로우와 Facebook Meta에 직접 연결할 수 있어요. 광고 타기팅을 최적화하고 결과당 비용을 낮추며 성과를 측정할 때 쓰는 기능이에요. 이 문서에서는 리드 이벤트를 보내는 전체 설정 과정을 안내해요.

Facebook Conversions API로 리타게팅 광고를 보여 줄 만한 관련성 높은 사람들을 모을 수 있어요. 웹 트래픽에 대한 서버 이벤트를 업로드하도록 설정하는 기능이에요.

---

## Facebook Conversions API에서 퍼널 이벤트와 리드 이벤트는 어떻게 다른가요?

하이퍼클래스는 두 가지 종류의 Facebook Conversions API 이벤트를 지원해요.

#### 퍼널 이벤트

웹 서버에서 이벤트를 보내, 사용자가 페이지를 방문하거나 장바구니에 상품을 담을 때, 구매·구독·신청서 제출을 할 때 등을 기록해요. FB CAPI로 퍼널 이벤트 픽셀을 설정하는 방법은 별도 문서를 참고하세요.

#### 리드 이벤트

하이퍼클래스 CRM이 리드가 파이프라인 단계를 따라 어떻게 이동하는지를 이벤트로 보내요. 예를 들어 어떤 비즈니스가 '리드 생성'이라는 파이프라인을 만들었다고 해 볼게요. 리드는 신규 리드에서 예약 완료 또는 이탈까지 파이프라인 단계를 따라 이동해요. 리드 이벤트를 쓰면 하이퍼클래스 CRM이 이 데이터를 Facebook Conversions API로 보내고, CRM이 데이터 소스가 돼요.

### 퍼널 이벤트에서 파이프라인 단계 변경 사용하기

{% hint style="warning" %}
파이프라인 단계 변경은 보통 리드 이벤트와 함께 쓰지만, 필요한 어트리뷰션 데이터가 있으면 Meta CAPI 퍼널 이벤트와도 함께 쓸 수 있어요.
{% endhint %}

이렇게 설정하려면 다음 조건이 필요해요.

- 리드가 처음 시스템에 들어올 때 Facebook Click ID(FBCLID)를 저장해야 해요.
- FBCLID는 커스텀 필드나 CRM 안의 접근 가능한 다른 위치에 저장해야 해요.
- Meta Conversion API 워크플로우 액션에서 **Custom Mapping**(사용자 지정 매핑)을 사용해 저장해 둔 FBCLID를 Meta로 보내요.
- 이렇게 하면 워크플로우 트리거가 파이프라인 단계 변경이어도 Meta가 전환을 올바르게 귀속할 수 있어요.

**예시**

1. 사용자가 Facebook 리드 광고를 제출해요.
2. FBCLID가 CRM에 저장돼요.
3. 리드가 파이프라인 단계를 따라 이동해요.
4. **Pipeline Stage Change**(파이프라인 단계 변경) 트리거가 실행돼요.
5. Meta CAPI 액션이 Custom Mapping과 저장된 FBCLID를 사용해 퍼널 이벤트를 보내요.

{% hint style="info" %}
유효한 FBCLID(또는 이에 준하는 어트리뷰션 데이터)가 없으면 Meta가 전환 이벤트를 제대로 매칭하지 못할 수 있어요.
{% endhint %}

### 전환 리드(Conversion Leads)

Facebook 전환 리드 연동을 쓰면 Facebook 리드 광고의 인스턴트 폼이 리드의 수가 아니라 리드의 품질에 맞춰 최적화돼요. 사용자가 인스턴트 폼을 제출하면 연락처 정보가 수집되어 하이퍼클래스 CRM에 동기화돼요. 이 연락처 정보로 리드를 팔로업하고 육성해서 영업 퍼널의 다음 단계로 이끌 수 있어요. 리드가 영업 퍼널을 따라 이동할 때마다 전환 리드 연동을 통해 광고주가 리드 상태를 Meta와 공유할 수 있어요. 그러면 Meta가 리드에서 판매로 이어지는 전환이 늘어나도록 리드 광고를 최적화해요.

다음 가이드라인을 확인하면 내 비즈니스가 전환 리드 연동에 적합한지 알 수 있어요.

- Facebook/Instagram 리드 광고(인스턴트 폼)를 사용해야 해요. 하이퍼클래스의 Facebook **폼 필드 매핑**을 사용해야 해요.
- 15~16자리 Meta 리드 ID가 CRM에 매핑되어 있어야 해요.
- 한 달에 리드를 250개 이상 생성해야 해요.
- 하루에 한 번 이상 정기적으로 데이터를 업로드할 수 있어야 해요.
- 최적화하려는 리드 단계가 리드 생성 후 28일 이내에 나타나야 해요.
- 최적화하려는 리드 단계의 전환율이 1%~40%여야 해요.

{% hint style="info" %}
고급 구성: 파이프라인 단계 변경 워크플로우를 Meta CAPI 퍼널 이벤트와 함께 쓰는 경우, 워크플로우가 실행되기 전에 Facebook Click ID(FBCLID)를 수집해 저장해 두세요. 그러면 Meta Conversion API 액션의 Custom Mapping으로 FBCLID를 전달해 어트리뷰션과 매칭에 쓸 수 있어요.
{% endhint %}

---

## FB CAPI(Conversions API) 리드 이벤트는 어떻게 설정하나요?

### 1단계: FB 픽셀 만들기

1. Facebook Business Manager(Meta Business Suite라고도 해요)에서 왼쪽의 **Events Manager**(이벤트 관리자) 탭으로 이동해 픽셀 만들기를 시작하세요.
2. 올바른 광고 계정에 연결되어 있고, 해당 FB 페이지에 필요한 모든 권한이 있는지 확인하세요.

   ![Events Manager에서 광고 계정 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284070737/original/AFb9bOXlqhbRRlui5ZOjvh_Ry7MYiUeFaQ.png?1677521079)
3. 왼쪽 사이드바에서 **Connect Data Sources**(데이터 소스 연결)를 클릭하세요.

   ![Connect Data Sources 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284518426/original/vpJQuXlQ-fkLtQlkuMXpv-MYw6ymdVS3Ug.png?1677678141)
4. 나타나는 옵션에서 **CRM**을 선택하고 **Next**(다음)를 클릭하세요.

   ![CRM 선택 후 Next 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031417908/original/SXjzS115ZEI927ZTXt0zAvEI0bBuEcBLCQ.png?1724240865)
5. Best Practices(권장 사항) 팝업이 나타나요. Facebook이 이 기능을 가장 잘 활용하는 방법을 제안하는 내용이에요. **Next**를 클릭해 계속 진행하세요.

   ![Best Practices 팝업](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031418022/original/D_jziC5xhCpZoJCvvQpjoKo3oRcKqijDJA.png?1724240955)
6. 데이터를 수집할 픽셀을 선택하세요. **Create New Pixel**(새 픽셀 만들기)을 클릭하거나, 목록에서 기존 픽셀을 선택해요. 픽셀 정보를 추가했으면 **Continue**(계속)를 클릭하세요.

   ![픽셀 만들기 또는 기존 픽셀 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284072690/original/qgMYOqAYudCL0t2rtYthWAkL4dYkgKtGTw.png?1677521908)
7. 픽셀을 만들었거나 선택했다면 CRM 파트너로 "하이퍼클래스"를 선택하고 **Next**를 클릭하세요.

   ![CRM 파트너 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031418374/original/hp1Pm_bswB-zDAdXVebjn_6oA1HL4dFSQA.png?1724241213)

   {% hint style="info" %}
   **Next**를 클릭하면 Facebook이 파트너 웹사이트에 로그인하라고 이동시켜요. 이 화면은 무시하고, Conversion API 워크플로우를 만들어 CAPI 이벤트를 Facebook으로 되돌려 보내면 돼요.
   {% endhint %}
8. 아래와 같은 화면에서 내 CRM이 선택되어 있는지 확인하세요.

   {% hint style="warning" %}
   "Wait for seven days of CRM events"(CRM 이벤트 7일간 대기) 상태에서 넘어가지 않는다면 다음을 확인하세요.

   1. 픽셀로 데이터를 매일(꾸준히) 보내세요.
   2. 7일 동안 이벤트가 합쳐서 최소 50개가 되어야 해요.
   3. 테스트 이벤트는 실제 이벤트로 집계되지 않아요.
   4. 픽셀에서 최소 2개 단계에 픽셀 이벤트가 있어야 해요.
   {% endhint %}

   ![CRM이 선택된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031418496/original/e5AHKLIef3hvMEb0cA9Rk8nM8DFhCPYTGg.png?1724241315)
9. 이제 CRM 이벤트를 보낼 수 있어요. 이를 위해 아래에 설명한 워크플로우 2개를 설정해야 해요.

{% hint style="info" %}
**Facebook CAPI 리드 이벤트의 사전 조건**

1. 하이퍼클래스에서 **설정 > 연동**으로 이동해 Facebook 계정이 관리자 권한으로 연결되어 있는지 확인하세요. 내가 관리자이고 모든 권한을 가진 FB 비즈니스 페이지가 연동되어 있어야 해요. 또한 올바른 FB 리드 폼이 하이퍼클래스 계정에 매핑되어 있어야 해요.

   ![설정 > 연동에서 Facebook 계정 연결 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031419137/original/NyIl9s0xM-cgct_0BaT_tihv76t_6-bsDA.png?1724241655)
   ![Facebook 페이지 연동 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031419242/original/Kv8uEaz2OIhtlVC7pRQJrvQmyXjX4DliLw.png?1724241732)
2. Facebook 폼 필드 매핑에서 폼이 올바르게 매핑되어 있고 상태가 활성화되어 있어야 해요. Facebook 폼 매핑은 **설정 > 연동 > 폼 필드 매핑**으로 옮겨졌어요. 지원하는 커스텀 필드 목록은 아래 이미지에서 확인할 수 있어요. 여러 옵션과 단일 옵션 커스텀 필드도 모두 포함돼요.

   ![폼 필드 매핑 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289200906/original/NguctF2neILw1L4MOJy_0UMZ_hv_wBTooA.gif?1679678976)
   ![지원하는 커스텀 필드 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48286543798/original/TN-M497JjRU1QI1H-NwXVq1r1vWxdBHPWw.png?1678462304)
{% endhint %}

### 2단계: FB Conversions API 워크플로우 2개 만들기

{% hint style="info" %}
이 과정이 제대로 동작하려면 워크플로우를 2개 만들어야 해요.

첫 번째 워크플로우는 리드를 생성하고, **Create Or Update Opportunity** 액션으로 올바른 파이프라인에 추가해요. 리드가 들어오면 올바른 파이프라인과 단계에 태그를 달고 분류해야 영업 퍼널을 따라 이동하는 동안 관리하고 추적할 수 있어요.

두 번째 워크플로우는 Facebook 전환 리드에 대한 이벤트를 발생시켜요. 리드가 특정 파이프라인 단계로 이동하면 워크플로우가 실행되고, Facebook Conversions API 워크플로우 액션이 리드를 FB CAPI로 보내요.

이 두 워크플로우를 함께 쓰면 Facebook 전환 리드에 최적화된 리드 생성·관리 체계를 만들 수 있어요. 그러면 더 질 좋은 리드를 확보하고, 더 많은 고객을 전환하고, 비즈니스를 꾸준히 키우는 데 도움이 돼요.
{% endhint %}

하이퍼클래스에서 CRM 이벤트를 보내려면 이를 처리하는 워크플로우를 만들어야 해요. 지금은 Facebook의 **Events Manager > Data Sources > Settings** 화면을 브라우저 탭에 열어 둔 채로 하이퍼클래스 계정으로 이동하세요.

#### 워크플로우 1: 기회 만들기/업데이트

1. FB 페이지가 서브 계정 설정에서 올바르게 연동되었다면, **자동화 > 워크플로우**로 이동해 새 워크플로우를 만드세요.

   ![자동화 > 워크플로우에서 새 워크플로우 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031420060/original/KGiogaGqC8eiladKNdMI3LxVnUoi6nqgcw.jpeg?1724242169)
2. 워크플로우에 새 **Workflow Trigger**(워크플로우 트리거)를 추가하고, **Facebook Lead Form Submitted**(Facebook 리드 폼 제출) 트리거로 실행되게 설정하세요. 전환 흐름의 첫 단계가 이 트리거인 경우예요.

   ![Facebook Lead Form Submitted 트리거 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031420109/original/VmYgHXIBM5dLZ6_u8p9Q79sQ15kbzgBwIQ.jpeg?1724242198)
3. 필터를 추가하면 특정 Facebook 리드 광고 폼에서 제출된 경우에만 워크플로우가 실행되게 할 수 있어요.

   ![트리거 필터로 특정 리드 광고 폼 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031420115/original/_Bhbh1Hc2u_baOSGlOZEe7ucGSdUnvUcDw.jpeg?1724242216)
4. 그다음 **Meta Conversion API** 액션을 추가하세요.

   ![Meta Conversion API 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051771239/original/zuvouipnbi-t_0i4vVT3qHVapk1CaM-OLQ.png?1755498402)
5. **Access Token**(액세스 토큰), **Pixel ID**(픽셀 ID), **Stage Name**(단계명)을 입력하세요.

   ![Access Token, Pixel ID, Stage Name 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051771284/original/Za-nhnxD4aGz35IO8g7okPjIaMqvVknD-Q.png?1755498455)

   {% hint style="info" %}
   **커스텀 값 추가**

   Google Ads와 마찬가지로, Facebook Ads 전환 추적 파라미터에도 사용자 지정 매핑을 쓸 수 있어요.

   ![사용자 지정 매핑 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043836459/original/gFVWuYxc77LoQwMEWkY0p_spdSoyA3QWZQ.jpeg?1742815441)

   **사용 방법**

   사용자 지정 매핑은 기본적으로 꺼져 있어요. 토글을 켜면 사용할 수 있어요. 켜면 다음 값을 매핑할 수 있어요.

   1. 퍼널 이벤트용 FBCLID
   2. 리드 이벤트용 Facebook 리드 ID
   3. 사용자 지정 매핑 필드를 입력하면 시스템 기본값보다 우선 적용돼요.
   4. 비워 두면 시스템이 기본 내부 값을 계속 사용해요.
   {% endhint %}
6. Access Token은 Facebook **Events Manager > Data Sources > Settings**로 이동해 아래로 스크롤한 뒤 **Generate Access Token**(액세스 토큰 생성)을 클릭해서 만들어요. 생성된 액세스 토큰을 복사해 워크플로우 액션 설정에 붙여넣으세요.

   ![Generate Access Token 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031421996/original/2M5kyzuzDEJFC4zHnrjdGIF4Hld8a-cnrw.png?1724243441)
7. Pixel ID는 Facebook **Events Manager > Data Sources > Settings**로 이동해 아래로 스크롤한 뒤 Dataset ID를 복사하세요. 이 값이 Pixel ID예요. 복사한 값을 워크플로우의 **FB Conversion API** 액션에 있는 Pixel ID 필드에 붙여넣으세요.
   <!-- 검토 필요: 원문에서 액션 이름이 Meta Conversion API / FB Conversion API / Facebook Conversion API로 섞여 쓰임 -->

   ![Dataset ID 복사해 Pixel ID에 붙여넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031422924/original/u9buQQXLzvtO596soAHgCdul47lg-Q2B0Q.jpeg?1724243971)
8. 그다음 **Create Or Update Opportunity**(기회 만들기 또는 업데이트) 액션을 추가하세요. 이 액션에서 **Pipeline**(파이프라인)과 **Pipeline Stage**(파이프라인 단계)도 지정해 주세요.

   ![Create Or Update Opportunity 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024366504/original/IVGX9z5k0pWkkpq_kMQOJOuJv-C-jRZgWg.png?1712915642)
9. 커스텀 값 선택기를 사용하면 **Opportunity Name**(기회명)의 기본값을 리드의 전체 이름으로 설정할 수 있어요.

   ![커스텀 값 선택기로 기회명 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031420481/original/naZd6SFqXIQhb2IxIgUICHcWTVws3FuGIA.png?1724242432)
10. 이 워크플로우에서 **Allow Duplicate Opportunities**(중복 기회 허용)를 켜세요.

    ![Allow Duplicate Opportunities 켜기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031420583/original/tRcVgVuLqAga6QSyFl1xphZT2y43y33LSw.png?1724242482)
11. 워크플로우를 **Publish**(게시)하고 **Save**(저장)하세요.

#### 워크플로우 2: 전환 데이터를 FB Conversions API로 보내기

1. 워크플로우를 하나 더 만드세요. **Pipeline Stage Change**(파이프라인 단계 변경) 트리거와 Facebook Conversion API 액션을 추가하세요.

   ![Pipeline Stage Change 트리거와 Facebook Conversion API 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031421020/original/23qX6oljE-grIUfBMMkiXCy7bEISawvVAA.png?1724242774)
2. **Event Type**(이벤트 유형)은 **Lead Event**(리드 이벤트)를 선택하세요. Access Token과 Pixel ID를 입력하세요.

   **Stage Name**은 리포팅이 더 정확해지도록 내 파이프라인과 파이프라인 단계 이름을 정확히 나타내야 해요. 끝에 있는 태그 아이콘을 눌러 기회 파이프라인과 단계의 커스텀 값을 선택하세요.

   ![Stage Name에 파이프라인과 단계 커스텀 값 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031421279/original/6zhHzNBl6SBJA4I4Ka6hqh6TUBvTEap9Yw.png?1724242985)
3. Access Token은 Facebook **Events Manager > Data Sources > Settings**로 이동해 아래로 스크롤한 뒤 **Generate Access Token**을 클릭해서 만들어요. 생성된 액세스 토큰을 복사해 워크플로우 액션 설정에 붙여넣으세요.

   ![Generate Access Token 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031421996/original/2M5kyzuzDEJFC4zHnrjdGIF4Hld8a-cnrw.png?1724243441)
4. Pixel ID는 Facebook **Events Manager > Data Sources > Settings**로 이동해 아래로 스크롤한 뒤 Dataset ID를 복사하세요. 이 값이 Pixel ID예요. 복사한 값을 워크플로우의 **FB Conversion API** 액션에 있는 Pixel ID 필드에 붙여넣으세요.

   ![Dataset ID 복사해 Pixel ID에 붙여넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031422219/original/GziRBRRy5Z7j0_VsRySWWjl4FnVx6E3FQg.png?1724243552)
5. 액션을 저장한 다음, 워크플로우를 **Save**(저장)하고 **Publish**(게시)하세요.
6. [Lead Ads Test Tool](https://developers.facebook.com/tools/lead-ads-testing)로 워크플로우를 테스트할 수 있어요. 올바른 Page와 Lead Ad Form을 선택하고 **Create a Lead**(리드 생성)를 클릭하세요.

   ![Lead Ads Test Tool에서 리드 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031422501/original/4Sqw2Xl0VmEdLphpxjo61cpNXWF1ETpf1w.png?1724243742)
7. 워크플로우가 보낸 이벤트를 Events Manager가 기다리고 있다가 받아야 해요. 워크플로우가 보낸 이벤트를 Events Manager가 인식하기까지 최대 하루가 걸려요.
8. Lead Ads Test Tool에서 이벤트를 보냈다면 **기회 파이프라인**으로 이동해, 테스트용 Facebook 리드를 워크플로우에 설정한 다른 단계로 옮기세요. 그런 다음 워크플로우 상태가 실행됨으로 표시되는지, Event Manager에 Conversion API 이벤트가 들어왔는지 확인하세요.

   ![기회 파이프라인에서 테스트 리드 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48289807416/original/lPWKPzVG8LSj7hT4URdCTXBJsQAya3ue-Q.png?1680028394)
9. Events Manager의 **Settings**(설정) 탭으로 돌아가 전환 리드 연동의 진행 상황을 확인하세요.

{% hint style="warning" %}
위의 두 워크플로우 모두 **Workflow Settings**(워크플로우 설정)에서 **Allow Multiple**(여러 번 허용)을 켜 주세요.

![Workflow Settings의 Allow Multiple](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284914523/original/l_2ib3vbuisvYM3kwkrFC6fJvfGmEAxTiA.jpeg?1677797816)
{% endhint %}
