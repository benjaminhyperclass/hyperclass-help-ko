---
원문: /support/solutions/articles/155000004537-facebook-multi-page-lead-ads-integration
번역일: 2026-11-06
카테고리: 42-통합
---

# Facebook 멀티 페이지 리드 광고 연동

Facebook 광고에서 모은 리드를 하이퍼클래스로 자동으로 가져오는 연동이에요. 연결 방법, 페이지·폼 관리 방법, 문제가 생겼을 때 확인할 점을 안내해요.

## Facebook 리드 광고 연동이란?

Facebook 리드 광고를 하이퍼클래스와 연동하면 리드를 자동으로 받아서 한곳에서 관리할 수 있어요. 직접 입력하다 생기는 실수가 줄고, 리드 품질과 전환율을 높이는 데 도움이 돼요.

### 어떤 경우에 유용한가요?

Facebook 광고로 리드를 모으고 리드 관리를 간소화하려는 비즈니스에 잘 맞아요. 영업 인력이 적은 소규모 업체나 스타트업은 리드 수집을 자동화해서 시간과 자원을 아끼고 데이터 정확도도 높일 수 있어요. 이미 하이퍼클래스를 쓰고 있다면 가져온 리드가 기존 워크플로우로 바로 이어져서 후속 대응이 더 쉬워져요.

### 이 연동의 장점

- 리드 자동 수집: Facebook 광고로 들어온 리드를 하이퍼클래스에 자동으로 가져와요. 직접 입력할 필요가 없어요.
- 리드 품질 향상: 리드를 CRM에서 추적하고 관리하면서 고객층을 더 잘 파악하고, 마케팅을 맞춤형으로 운영하고, 리드의 전체 품질을 높일 수 있어요.
- 리드 관리 강화: 리드를 한곳에서 추적하고 관리해요. 잠재 고객·고객과의 모든 접점을 360도로 볼 수 있어서, 영업·마케팅 활동을 정리하고 고객 유지를 개선하는 데 도움이 돼요.
- 빠른 후속 대응: 리드 정보가 자동으로 들어오기 때문에 바로 연락할 수 있고, 리드 품질과 행동을 기준으로 영업 우선순위를 정할 수 있어요.
- 전환율 상승: 리드 수집을 자동화하고 리드 관리를 개선하면 Facebook 광고의 전환율과 투자 수익(ROI)을 높일 수 있어요.

## 시작하기 전에 확인할 것

- 접근 권한: 리드 광고를 만드는 Facebook 페이지에 접근할 수 있어야 해요. [페이지에서 다른 사람에게 역할을 부여하는 방법](https://www.facebook.com/help/187316341316631)은 Facebook 도움말을 참고하세요.
- 소유권: 페이지와 광고 계정의 소유자가 같은 사용자여야 해요. 비즈니스 수준 연동에서는 페이지와 광고 계정의 소유자가 반드시 같아야 해요. 자세한 내용은 Facebook 도움말의 [광고 계정 역할](https://www.facebook.com/business/help/187316341316631?id=520795622598421)을 참고하세요.
- 권한: 페이지와 광고 계정에 대한 권한이 있는지 확인하세요. 관리자 또는 관리 권한이 있는 것이 좋아요. 권한 수준은 [Facebook 페이지 역할](https://www.facebook.com/help/323502271070625)과 [광고 권한](https://www.facebook.com/business/help/187316341316631?id=520795622598421)에서 확인할 수 있어요. Facebook 페이지를 하이퍼클래스에 연동하는 사용자는 [Facebook 비즈니스 페이지의 관리자](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143)여야 하고, 리드 데이터에 접근하려면 [리드 접근 권한](https://www.facebook.com/business/help/540596413257598?id=735435806665862)도 있어야 해요. Facebook이 정한 요건이에요.
- 광고 계정 확인: 페이지가 알맞은 광고 계정에 연결되어 있는지 확인하세요. 광고 계정 설정에서 연결된 페이지를 확인하면 돼요. 자세한 방법은 [광고 계정 설정 살펴보기](https://www.facebook.com/business/help/337584869654348)를 참고하세요.
- 공개 범위: 광고 계정의 소유자는 관련 권한이 있는 사람만 볼 수 있어요. 자세한 내용은 Facebook의 [광고 계정 사용자 권한 안내](https://www.facebook.com/business/help/187316341316631?id=520795622598421)를 확인하세요.
- 리드 접근 권한: 리드 접근 권한이 있는지 확인하세요. 하이퍼클래스가 목록에 보이지 않으면 직접 검색하거나 켜야 할 수 있어요. 리드가 동기화되지 않는다면 Facebook의 [리드 광고 문제 해결 안내](https://www.facebook.com/business/help/1667649039945425)를 참고하세요.
- 하이퍼클래스가 Facebook 리드 광고를 운영하는 Facebook Business Manager와 비즈니스 페이지에 접근할 수 있어야 해요.
- 믿을 수 있는 사람에게 Facebook 비즈니스 페이지 일부를 관리하도록 맡길 수 있어요. 전체 권한을 주지 않고도 페이지의 일부에만 [접근 권한](https://www.facebook.com/business/help/582754542592549?id=425112142508425)을 줄 수 있어요.
- Business Manager를 열고 왼쪽 메뉴에서 **사용자 > 사람**으로 이동하세요. FB 페이지를 하이퍼클래스에 연동할 사람을 이미 추가했다면 페이지 가운데에 보여요.  
  [비즈니스에 사용자를 추가하려면?](https://www.facebook.com/business/help/2169003770027706?id=2190812977867143)
- Facebook의 페이지·프로필 종류는 [이 링크](https://www.facebook.com/business/help/1034727950288693?ref=search_new_2)에서 확인할 수 있어요.

### 커스텀 필드 만들기

- 하이퍼클래스에서 리드 광고용 **커스텀 필드**를 만들 때는 [아래에 나온 지원 유형](https://www.facebook.com/help/135275340210354)을 써 주세요.
- Facebook 리드 광고에서 지원하는 커스텀 필드 유형:
- TEXT
- LARGE\_TEXT
- NUMERICAL
- PHONE
- MONETARY
- SINGLE\_OPTIONS
- DATE
- DROPDOWN (single)

{% hint style="info" %}
Facebook 폼을 만들 때 설정에서 필드 이름을 바꾸지 않는 것을 권장해요. 필드 이름을 바꾸면 하이퍼클래스에서의 매핑에 영향을 줄 수 있어요.
{% endhint %}

![Facebook 폼 필드 이름 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040879836/original/_TprjhglwnAVff-g6iyYARMOwuE1_LCK8A.png?1738566799)
![Facebook 폼 필드 이름 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040879799/original/kK2dUYMteP2LX9JP6z0SbW7eMdF9Rz49Kw.png?1738566756)

## 서브 계정에서 Facebook 리드 광고 연동하고 관리하기

{% hint style="info" %}
Facebook 페이지를 연동한 사용자만 연결할 페이지를 선택할 수 있어요. 이 사용자는 Facebook에서 해당 페이지에 대한 전체 권한이 있어야 해요.
{% endhint %}

### Facebook 연동 설정하기

1. 서브 계정에서 **설정 > 연동**(Integrations)으로 이동해요.  
   ![서브 계정의 설정 > 연동 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574168/original/gbroxqoMxNrVqc51OTPEgJkeGA4QlCRAWQ.png?1738063962)
2. Facebook 카드에서 **연결**을 클릭해요.
3. 필요한 권한을 허용해요.  
   ![Facebook 권한 허용 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574164/original/Uk4ydDQ2GLoJGa2BRLU4nngfH6RnKDNvTQ.png?1738063960)
4. 계정에서 하이퍼클래스와 연결할 페이지를 선택해요.

   {% hint style="info" %}
   페이지(그리고 사용할 수 있는 경우 광고 계정)를 이름으로 검색하면 더 빨리 고를 수 있어요. 검색은 모든 페이지를 불러온 뒤에 사용할 수 있어서, 페이지가 많은 계정은 처음 불러오는 데 시간이 더 걸릴 수 있어요.
   {% endhint %}

   ![페이지 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041513652/original/PO2ajSrU79tIB1GmyHY0SVG7ql_B8fzzGg.png?1739432666)
5. 페이지를 연결했으면 다음으로 폼을 설정하고, 필요한 필드를 하이퍼클래스 필드에 매핑하세요. 그러면 준비가 끝나요.  
   ![폼 설정과 필드 매핑 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041513779/original/O6EIw4LvuHVjqkZk9yHymjgduGTMhKUOFw.png?1739432757)

### Facebook 연동 해제하기

1. 서브 계정에서 **설정 > 연동**으로 이동해요.
2. Facebook 카드에서 점 3개 메뉴를 클릭해요.
3. **Disconnect**(연결 해제)를 클릭해요.  
   ![Facebook 연동 해제 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041514011/original/_4OkiQDqZbCbHFB5dm6ZtdV7cpFYhdk1pA.png?1739432831)

### Facebook 페이지 관리하기

1. 서브 계정에서 **설정 > 연동**으로 이동해요.
2. Facebook 카드에서 **Manage Pages**(페이지 관리)를 클릭해요.
3. 연결할 페이지를 선택하고 **업데이트**를 클릭해요.  
   ![연결할 페이지 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041514148/original/J6xYTwKVt2I4X4v9dGG0mfr3uRD84VRb6Q.png?1739432912)
   ![페이지 업데이트 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574169/original/JXoe-pEfF5VbLQQbAv4FpbUA1cZgyrc88Q.png?1738063962)

### 기본 문제 해결 및 리드 수동 동기화하기

1. 서브 계정에서 **설정 > 연동**으로 이동해요.
2. Facebook 카드에서 **Troubleshoot**(문제 해결)를 클릭해요.
3. 다음 화면에서 빠진 권한을 확인하고 리드를 수동으로 동기화할 수 있어요.  
   ![빠진 권한 확인과 수동 동기화 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041514181/original/HnTqD-fJlm_EHiypwqQPTIZUBseTA7qh2w.png?1739432938)

![문제 해결 화면 추가 안내](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041514318/original/li_HLAsKa5g32ZmF1NbvsmoquJoTbiYp5g.png?1739433012)

### Facebook·Instagram 메시지 켜고 끄기

1. 서브 계정에서 **설정 > 연동**으로 이동해요.
2. Facebook 카드에서 햄버거 메뉴를 열고 **설정**을 클릭해요.
3. 다음 화면에서 연결된 페이지의 Facebook Messenger와 Instagram 메시지를 켜거나 꺼요.  
   ![Facebook·Instagram 메시지 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041514348/original/E-tcDuInxK5NjylZ73Gdb8utdrkjY0d38Q.png?1739433048)
   ![Facebook·Instagram 메시지 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574180/original/EkTefRowYarZYOf8i2lBA8jzZ_S2_SKBsw.jpeg?1738063963)

### 폼 관리하기

1. 서브 계정에서 **설정 > 연동**으로 이동해요.
2. 화면 위쪽의 **Facebook Form Field Mapping**(Facebook 폼 필드 매핑)으로 이동해요.
3. 편집할 폼을 찾아서 매핑을 수정하거나 폼을 비활성화해요.

![폼 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574184/original/TSSzv_OPurgr5FS8DCes5y0R_r3c9LjZQ.png?1738063964)

![폼 필드 매핑 수정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574171/original/WmTUb9xKcoXCwekJqwmXu7NJEgYy9vP9iQ.png?1738063962)
![폼 비활성화 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040574176/original/-G9fc1UrDe6nU5YlQUYnIqekcIH2g5bL9A.png?1738063963)

![폼 매핑 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040575611/original/dil23RXiwEazudMemNzjuStjsmN8JIfDag.png?1738065044)

## 문제가 생겼을 때

문제가 있으면 Facebook 문제 해결 문서를 참고하세요.

