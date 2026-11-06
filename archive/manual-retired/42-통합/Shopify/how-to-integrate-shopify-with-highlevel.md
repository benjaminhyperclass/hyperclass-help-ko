---

번역일: 2026-04-09
카테고리: 통합 > Shopify
---

# Shopify와 Hyperclass 연동하는 방법

Shopify를 Hyperclass와 연동하면 마케팅을 자동화하고, 고객 데이터를 동기화하며, 더 많은 매출을 창출할 수 있습니다. 이 가이드에서는 연동 과정을 단계별로 설명합니다.

Shopify를 Hyperclass 하위 계정과 연동하는 과정은 2단계로 구성됩니다:

1. Shopify 스토어에서 커스텀 앱 생성

2. Shopify를 계정에 연결


### 1단계: Shopify 스토어에서 커스텀 앱 생성

연동을 설정하기 전에 Shopify 스토어에서 커스텀 앱을 생성해야 합니다.


1.1 Shopify 스토어에 로그인하고 대시보드에서 "Apps"를 클릭합니다


![Shopify 대시보드에서 Apps 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229210/original/rH-o_3qLAeuUQs7ktCeDSFiGCAwZJaq4QQ.png?1644221818)


1.2 화면 상단에서 "Develop apps"를 클릭합니다 (아래 이미지에서 강조 표시된 부분)


![Develop apps 버튼 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187228956/original/Pyqt6fMw5ktq5tQQeAt0CVOhvmfT7MTIUA.png?1644221795)


1.3 "Allow custom app development"를 클릭합니다 (이미 이 권한을 활성화했다면 Shopify가 1.5단계로 바로 이동시킵니다)


![Allow custom app development 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229198/original/p8vrOG1a27K50uudrq5oqHP-ekqSYaCNwA.png?1644221815)


1.4 다음 화면에서 "Allow custom app development"를 클릭합니다


![Allow custom app development 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229192/original/jic-aV_3DKmiJOr0mL5pO_P2lB1fu4K3OA.png?1644221813)


1.5 "Create an app"을 클릭합니다


![Create an app 버튼 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229194/original/Pv1_E-8_4Vbga0KoVa_7PF1oFQOQRJMj0Q.png?1644221815)


1.6 앱 이름을 입력하고 (예: "Marvel's App"), App developer에서 이메일을 선택한 후 "Create app"을 클릭합니다


![앱 이름 입력 및 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229199/original/y7YPMVGF8DZQ6xkYvHik6Jck0QvGxDIz1g.png?1644221816)


1.7 Admin API 연동을 설정하기 위해 "Configure Admin API scopes"를 클릭합니다


![Configure Admin API scopes 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229195/original/UkKUPiP3fo-8Ffj1vABpVf-baRBv2hUvlw.png?1644221815)


1.8 "Orders"를 검색하거나 스크롤해서 찾고, 최소한 "read_orders" 접근 권한을 활성화해야 합니다


![read_orders 권한 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229211/original/2GXcUiFIWEF1TZmsGGccec1xioo_UWpnrQ.jpeg?1644221817)


1.9 "read_customers" 범위를 추가합니다. 설정에서 "Admin API Integrations"를 편집하고, customers 섹션에서 "read_customers" 체크박스를 선택합니다


![read_customers 범위 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030067383/original/aVjGA-pp1P6TFeFQ_gs0ifQEOjVg0thLRA.png?1722266305)


![read_customers 체크박스 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030067467/original/ZgYyWI1Q70ztfYX5wZ052m6f9oHnEm_FHA.png?1722266327)


1.10 "Products"를 검색하거나 스크롤해서 찾고, 최소한 "read_products" 접근 권한을 활성화해야 합니다


![read_products 권한 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229209/original/KOGPMRP7AVyQLqt86WYuHArUkNw-z6ZuZQ.png?1644221817)


1.11 "Orders and Product"에 대한 읽기 권한을 활성화한 후, 우상단의 "Save" 버튼을 클릭해서 앱을 저장합니다


![Save 버튼으로 앱 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229208/original/bWtT7WuetqwvWbfp8IT5y0AKPTRVxmf97w.png?1644221817)


1.12 저장한 후 아래 이미지처럼 "Install app"을 클릭합니다


![Install app 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229197/original/kTfMYPmtBBvuDLeK1c6k5Fl9gmd1toSOeg.png?1644221815)


1.13 아래 이미지처럼 팝업에서 "Install"을 클릭합니다


![Install 팝업 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229201/original/UayP0x4wZAwMUT5KVSUsY62lOfkDih3b1Q.png?1644221816)


완료! 이제 앱이 연동할 준비가 되었습니다.


1.14 설치 후, Shopify 연동에 필요한 "Admin API access token"은 API credentials 섹션에서 확인할 수 있습니다. "Reveal token once"를 클릭해서 토큰에 접근하세요


![Admin API access token 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229204/original/AN7cbMtIt-wIZ7A5T4fQh9yt3j5_VUfB2A.png?1644221816)


1.15 클립보드 아이콘을 클릭해서 "Admin API access token"을 복사합니다


![토큰 복사하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229200/original/iu6Bvf4sq-9cIc_Uu5SWn3cN35f0vFITsA.png?1644221816)


### 2단계: Shopify를 계정에 연결


2.1 계정에서 Settings(설정) → Integrations(연동)으로 이동하고 Shopify 아래의 "Connect"를 클릭합니다


![Settings에서 Shopify Connect 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229207/original/qP0WcWS2pboiwsFOqwX6NW7Zt-rFLMIFYw.png?1644221817)


2.2 1.15단계에서 복사한 "Admin API access token"을 붙여넣고, "Shopify 스토어 이름"을 입력한 후 "Connect"를 클릭합니다


![토큰 입력 및 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229202/original/ppeTu-iMn0QdMja4G6PvqLafNSeMn8pEvw.png?1644221816)


2.3 Shopify 연동이 완료되었습니다! 🎉


![연동 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48187229205/original/qIfabMfkeYYRSWXoeiANWyRXB_s_SAlQWw.png?1644221817)

---
*원문 최종 수정: Fri, 30 May, 2025 at 9:15 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*