---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000002608-how-to-setup-branded-client-portal-mobile-app
번역일: 2026-04-23
카테고리: 클라이언트 포털 웹 및 모바일 앱
---

# 브랜딩 클라이언트 포털(Client Portal) 모바일 앱 설정 방법

브랜딩 클라이언트 포털 앱은 모바일 앱을 귀하의 브랜드에 맞게 커스터마이징할 수 있는 부가 서비스입니다.

**목차**

- [1단계: 앱 커스터마이징](#Step-1%3A-App-Customisations)
- [2단계: 비즈니스 프로필](#Step-2%3A-Business-Profile)
- [3단계: 이용약관 페이지](#Step-3%3A-Terms-And-Condition-Page)
- [4단계: 개인정보처리방침 URL](#Step-4%3A-Privacy-Policy-URL)
- [5단계: Android 및 iOS 검토](#Step-4%3A-Android-and-IOS-Review)

---

## 사전 준비사항

- **D-U-N-S 번호**:
조직 개발자 계정을 얻기 위해서는 D-U-N-S 번호가 필요합니다. 다음 웹사이트에서 신청하실 수 있습니다:
[D-U-N-S 번호 발급받기](https://www.dnb.com/duns/get-a-duns.html)
발급 과정이 너무 오래 걸린다면 D-U-N-S 고객지원에 연락하여 신속 처리를 요청할 수 있습니다:
[D-U-N-S 고객지원](https://www.dnb.com/duns/get-a-duns.html)

- **조직 개발자 계정**: 앱 개발을 진행하기 위해서는 조직 개발자 계정이 필요합니다. Google과 Apple 개발자 계정을 모두 제공해 주세요.

- Google 개발자 계정: Google 개발자 계정이 인증되어야 앱을 게시할 수 있습니다. 계정 생성에 문제가 있다면 Google 고객지원에 문의하세요.

- Apple 개발자 계정: 계정을 생성하고 로그인한 후 App Store Connect에 방문하여 필요한 법적 문서를 작성하세요. EU 지역에 앱을 배포할 계획이라면 EU 거래자 등록이 필요합니다. 디지털 서비스법(DSA) 하에서 "거래자입니다"를 선택하면 추가 문서가 필요합니다. EU 배포가 필요 없다면 "아니요, 거래자가 아닙니다"를 선택하세요. Apple 개발자 계정 생성에 어려움이 있다면 Apple 고객지원에 문의하세요.

- **앱 설명 및 콘텐츠 가이드라인**: 모든 앱 설명, 캐러셀 이미지 설명, 캐러셀 이미지, 스플래시 화면 이미지에 "유료", "무료", "프리미엄 구독" 등의 금융 용어를 포함하지 마세요. 또한 지원, 이용약관, 개인정보처리방침 URL에도 이러한 용어 사용을 피하세요. 이 가이드라인을 준수하지 않으면 앱 게시가 거부됩니다.

사용할 템플릿:
- 개인정보처리방침 예시: [https://www.leadconnectorhq.com/privacy-policy](https://www.leadconnectorhq.com/privacy-policy)
- 이용약관 예시: [https://www.leadconnectorhq.com/terms2](https://www.leadconnectorhq.com/terms2)
- 고객지원 URL 예시: [https://www.leadconnectorhq.com/support](https://www.leadconnectorhq.com/support)

## 1단계: 앱 커스터마이징

- 앱 아이콘 이미지는 앱 드로어, 로딩 화면, 스토어 목록에 표시되는 앱 아이콘을 생성하는 데 사용됩니다.

- 이미지는 1024 X 1024 해상도의 PNG 형식으로만 업로드해야 합니다.

![앱 아이콘 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027213179/original/dAwVOrWuYOHy1JxSm_Mf4XD63jOAqt5u5w.png?1717669875)

- 첫 사용자들의 앱 사용을 안내하는 커스텀 캐러셀을 추가할 수 있습니다. 각 캐러셀 설명을 편집하세요.

- 이미지는 392 X 440 크기의 SVG 형식으로 업로드해야 합니다.

- 앱에서 캐러셀 이미지가 어떻게 보일지 미리보기를 확인할 수 있습니다:

![캐러셀 이미지 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038320957/original/ZLg_6B0IqDQG685cTTEw7UvGngh28mkZvA.png?1734119208)

- Play Store 그래픽은 Google Play Store에서 브랜딩을 나타내는 데 사용됩니다.

- 필요한 크기는 1024 X 500 PNG 형식입니다.

![Play Store 그래픽](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027213300/original/JMidq5l4Bu1h-KT2buT98Qmjdahw0Pu64A.png?1717669981)

## 2단계: 비즈니스 프로필

### Google 개발자 계정

Android 앱을 업로드하려면 Google 개발자 계정 등록이 필요합니다. 개발자 계정은 앱을 제출하고 관리하는 곳입니다. 일회성 비용은 $25입니다.

개인 Google 계정이 이미 있다면, 다른 Google 서비스(Gmail, Google Drive, Google+ 등)와 분리하기 위해 별도의 Google 계정을 만드는 것을 권장합니다.

**설정 방법:**

1. [여기서 Android 개발자 계정 등록](https://developer.android.com/distribute/console/)

2. 사용하려는 Google 계정에 로그인해야 합니다.

3. 4단계 등록 과정을 거치게 됩니다. 동의서에 체크하고 결제 진행을 클릭하세요.

![Google 개발자 계정 등록 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027212140/original/ob2jWRkSHijDRhe5E6DjanFjjTfnFGOIBw.png?1717669262)

![Google 개발자 계정 등록 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027212139/original/D-7XytmbLVjmsJ_6WtBBcetXQLtRD6qqVg.png?1717669262)

4. 팝업 창에서 결제 정보를 입력하라는 메시지가 표시됩니다. 정보를 입력한 후 결제 버튼을 클릭하세요.

![Google 개발자 계정 결제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027213416/original/xZ2SjzDzwf6cqEvpdDXVlPHwSwmVBAQx-w.png?1717670020)

**참고**: 두 개발자 계정 모두에 대해 엔티티 유형/계정 유형으로 조직(Organization)을 선택하고 이름이 일치하는지 확인하세요. 이렇게 하지 않으면 앱 제출 시 문제가 발생합니다.
이 계정을 만들려면 조직의 "D-U-N-S" 번호가 필요합니다.

### Apple 개발자 계정

iTunes Store의 모든 앱은 Apple 개발자 계정을 통해 제출됩니다. iOS 기기용 앱을 게시하려면 Apple 개발자 계정에 가입해야 합니다. Apple은 각 비즈니스가 자체 계정을 가져야 한다고 요구합니다.

- 등록비는 $99이며 매년 갱신됩니다.

- 비영리 조직, 인증된 교육 기관, 미국 소재 정부 기관 등 자격을 갖춘 조직의 경우 무료로 멤버십을 이용할 수 있습니다. 자격 요건에 대한 자세한 내용은 [여기](https://developer.apple.com/support/membership-fee-waiver/)를 클릭하세요.

**단계별 가입 가이드** (문제가 발생하면 1-800-633-2152로 Apple 고객지원에 직접 문의하세요):

**1단계: ID 생성** - [https://developer.apple.com/programs/enroll](https://developer.apple.com/programs/enroll)로 이동하세요. Apple ID를 입력하거나 새로 만들라는 메시지가 표시됩니다. 비즈니스 이름을 반영하는 새 Apple ID를 만드는 것을 권장합니다. 이렇게 하면 개인 ID와 비즈니스 계정이 분리됩니다.

**2단계: 개발자 계약서** - Apple의 개발자 계약서를 읽고 읽었음을 확인하라는 메시지가 표시됩니다.

**3단계: 엔티티 선택** - 여기서 엔티티 유형을 선택하라는 메시지가 표시됩니다. 개인, 조직, 정부 조직의 세 가지 옵션이 있습니다. 엔티티 유형은 Apple이 개발자 이름으로 표시하는 데 사용됩니다. 예를 들어, 개인의 경우 개발자 이름이 전체 이름이 됩니다. 조직의 경우 개발자 이름이 비즈니스 이름이 됩니다.

조직으로 등록하는 것을 강력히 권장합니다. Apple은 개발자 계약서 4.2.6항에 따라 앱 이름과 개발자 이름이 일치해야 애플리케이션이 승인된다고 강조했습니다.

![Apple 개발자 계정 엔티티 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027213458/original/HJbs1SEbAh47RepDkDvREkiTinbyJamuJQ.png?1717670044)

**조직으로 등록하는 경우**, Apple ID와 다음 사항이 필요합니다:

- D-U-N-S® 번호 [여기서 등록](https://developer.apple.com/programs/enroll/) - [자세히 알아보기](https://developer.apple.com/support/D-U-N-S/)

- 법인 자격: 조직이 Apple과 계약을 체결할 수 있도록 법인이어야 합니다. Apple은 DBA, 가상 비즈니스, 상호명 또는 지점을 허용하지 않습니다.
법적 구속력이 있는 권한: Apple의 개발자 프로그램에 조직을 등록하는 사람으로서, 조직을 법적 계약에 구속할 수 있는 법적 권한이 있어야 합니다. 조직의 소유자/창립자, 경영진 구성원, 시니어 프로젝트 리더이거나 시니어 직원으로부터 법적 권한을 부여받아야 합니다. 법적 지위가 개인사업자/1인 사업인 경우 [개인으로 등록](https://developer.apple.com/programs/enroll/)하세요.

**4단계: 연락처 정보** - 엔티티 유형을 선택한 후 Apple에서 연락처 정보를 입력하고 확인하라고 합니다.

**5단계: 결제 및 확인** - 결제 정보를 입력한 후 Apple에서 구매를 완료하고 확인하라고 합니다.

![Apple 개발자 계정 결제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027213463/original/UssiZNoQL0VUPhNzXaYuSSRm4Fmo0-RUaQ.png?1717670058)

**6단계: 이메일 확인** - 이메일 주소를 확인하는 링크가 포함된 주문 확인 이메일을 받게 됩니다. 지시사항에 따라 계정을 확인하세요. 이제 Apple 개발자입니다!

**추가 사항:**

- 계정은 매년 갱신되며 애플리케이션이 제대로 작동하려면 필요합니다.
- Apple ID 로그인 정보를 사용하여 itunesconnect.apple.com과 developer.apple.com에 로그인하세요.
- Apple의 계정 확인에는 최대 48시간이 소요될 수 있습니다.
- iOS 애플리케이션을 성공적으로 게시하려면 로그인하여 추가 서비스 약관 프롬프트를 수락했는지, 그리고 2단계 인증이 활성화되지 않았는지 확인하세요.

**참고**: 두 개발자 계정 모두에 대해 엔티티 유형/계정 유형으로 조직(Organization)을 선택하고 이름이 일치하는지 확인하세요. 이렇게 하지 않으면 앱 제출 시 문제가 발생합니다.
이 계정을 만들려면 조직의 "D-U-N-S" 번호가 필요합니다.

## 3단계: 이용약관 페이지

- 이용약관 페이지에는 EULA(최종 사용자 라이선스 계약)가 포함되어야 하며, 이 약관에서는 부적절한 콘텐츠나 남용하는 사용자에 대한 무관용 원칙을 명확히 해야 합니다.

- 아직 이용약관 페이지가 없다면 Google에서 이용약관 작성기와 가이드를 검색해 보세요. [termsfeed.com](http://termsfeed.com/)

## 4단계: 개인정보처리방침 URL

- 개인정보처리방침과 이용약관 페이지에는 요금제/구독을 판매하는 원래 랜딩 페이지에 대한 링크가 포함되지 않아야 합니다. 그렇지 않으면 Apple이 앱 제출을 거부합니다.

- 이 웹사이트에서 개인정보처리방침 페이지를 만들 수 있습니다: [freeprivacypolicy.com](http://freeprivacypolicy.com/)

## 5단계: Android 및 iOS 검토

- **4단계**가 완료되면 저희 팀이 앱 개발을 시작하며 추가로 필요한 사항이 있으면 연락드립니다.
- 데이터가 정확하게 제출되면 앱이 출시되기까지 일반적으로 7-10영업일이 소요됩니다.

## FAQ

### Q: 커스터마이징된 화이트라벨 앱을 검토 및 승인을 위해 제출한 후 어떻게 되나요?

A: 앱을 검토를 위해 제출한 후, 팀이 세부사항을 검토하고 해당 앱스토어(App Store, Play Store)에 승인을 위해 제출합니다. 앱은 앱스토어의 가이드라인에 따라 표준 검토 과정을 거칩니다. 승인이 완료되면 앱이 출시되어 사용자가 이용할 수 있게 됩니다.

### Q: App Store와 Play Store 외의 다른 앱스토어를 통해 화이트라벨 앱을 배포할 수 있나요?

A: 현재 App Store와 Play Store를 통한 화이트라벨 앱 배포가 지원됩니다. 이들은 가장 널리 사용되는 앱 배포 플랫폼으로, 앱의 최대한의 도달 범위와 접근성을 보장합니다. 저희 팀은 대안적인 배포 방법을 직접적으로 지원하지 않을 수 있습니다.

---
*원문 최종 수정: 2025-03-28*
*Hyperclass 사용 가이드 — hyperclass.ai*