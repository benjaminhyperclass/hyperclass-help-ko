---
원문: /support/solutions/articles/48000982605-business-profile-settings
번역일: 2026-11-06
카테고리: 11-설정
---

# 비즈니스 프로필 설정

**비즈니스 프로필**(Business Profile)은 사업체 이름, 주소 등 서브 계정 전체에 적용되는 설정을 모아 둔 곳이에요. 이 문서에서는 각 항목이 무엇이고 어떻게 설정하는지 차례로 안내해요.

## 비즈니스 프로필이란?

비즈니스 프로필은 서브 계정 설정 안에서 회사 정보를 입력하고, 서브 계정 전체에 적용되는 설정을 구성하는 곳이에요. 몇 분만 들여 이 영역을 설정해 두면 서브 계정이 운영되는 방식에 큰 도움이 돼요.

비즈니스 프로필의 모든 구성 요소를 이해하기 쉽도록, 섹션과 설정을 하나씩 살펴보면서 설정 방법과 활용 사례를 함께 설명할게요. 각 설정이 어떤 결과로 이어지는지 이해하는 데 도움이 될 거예요.

---

## 비즈니스 프로필은 어디에 있나요?

비즈니스 프로필은 금방 찾을 수 있어요. 화면으로 보는 편이 더 편한 분을 위해 스크린샷도 함께 넣었어요.

1. 하이퍼클래스에서 작업할 서브 계정에 들어가 있는지 확인하세요.
2. 화면 왼쪽의 **설정**을 클릭하세요.
3. **설정** 메뉴가 열리면 왼쪽 메뉴 맨 위에 **비즈니스 프로필**이 있어요.

**비즈니스 프로필**은 기본으로 설정의 첫 번째 페이지예요. 그래서 **설정**을 클릭하면 **비즈니스 프로필**이 바로 보여요.

```
하이퍼클래스 로그인 -> 서브 계정 선택 -> 설정 클릭 -> 비즈니스 프로필
```

![설정 메뉴에서 비즈니스 프로필 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027964208/original/Pfo-uBqTG8imO1emFRMJ6VpWUwtCB879yg.jpg?1718913296)

![비즈니스 프로필 첫 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027964211/original/H9cS_M87DRFVXRPGeL_p4PMR3y0K2kC-Yg.jpg?1718913312)

---

## 일반 정보

서브 계정의 **일반 정보**는 매우 중요해요. 여기에 정확한 정보를 입력하고 **브랜드 도메인** 같은 항목을 설정해 두면, 이 서브 계정과 연결된 커스텀 필드나 **트리거 링크**를 쓰는 모든 사용자가 비즈니스에 대한 올바른 정보를 보내게 돼요.

![일반 정보 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028020804/original/xXjMtC9EoYGD4peLzVsWCzoj1fyfE9Tu7A.jpg?1718983930)

#### 1. **Location ID**(위치 ID)

하이퍼클래스 고객지원팀에 문의하면, 문제가 생긴 서브 계정의 Location ID를 요청할 수 있어요. Location ID는 에이전시 계정 안의 모든 서브 계정에 하나씩 부여되는 고유 ID예요. 이 ID가 있으면 고객사 계정을 확인하고 문제 해결 범위를 좁히는 데 도움이 돼요.

#### 2. **비즈니스 로고**

이 서브 계정을 대표할 비즈니스 로고를 업로드하세요. 이 로고는 **에이전시 대시보드**의 **계정** 목록에서 해당 서브 계정을 나타내요. 인보이스와 이메일을 비롯해 하이퍼클래스의 여러 기능에서 쓸 수 있고, 메시지에서 커스텀 필드로도 쓸 수 있어요.

예시: `{{location.logo_url}}`

#### 3. **비즈니스 표시명**

메시지, 워크플로우 등 앱 곳곳에서 커스텀 필드 **계정 > 이름**을 쓸 때 서브 계정(로케이션)의 이름으로 표시되는 이름이에요.

예시: `{{location.name}}`

#### 4. **법인 비즈니스명**

앞으로 진행할 규정 준수 등록에 사용되는 법적 사업체 이름이에요. 사업자 허가증이나 등록 서류처럼 법적 사업 서류에 적힌 이름과 정확히 일치하게 입력하세요.

#### 5. **비즈니스 이메일**

메시지, 이메일, 워크플로우 등 커스텀 필드를 쓸 수 있는 곳에서 커스텀 필드 **계정 > 이메일**을 추가할 때 이 계정에 사용할 이메일을 입력하세요.

예시: `{{location.email}}`

#### 6. **비즈니스 전화번호**

메시지, 이메일, 워크플로우 등 커스텀 필드를 쓸 수 있는 곳에서 커스텀 필드 **계정 > 전화번호**를 추가할 때 이 계정에 사용할 전화번호를 입력하세요.

예시: `{{location.phone}}`

{% hint style="info" %}
이 번호를 통화와 메시지에 쓰는 번호와 같게 하려면, 먼저 하이퍼클래스 전화 번호를 설정하세요. 그다음 구매한 번호를 복사해 **비즈니스 전화번호** 필드에 붙여 넣으면 돼요.
{% endhint %}

#### 7. **브랜드 도메인**

서브 계정(로케이션)마다 호스팅 업체의 서브도메인을 연결해 브랜드 도메인을 만들 수 있어요. 이 브랜드 도메인은 **트리거 링크**, **캘린더**, **폼**, **설문** 등의 URL 주소로 쓰여요.

아래 도움말에서 브랜드 도메인을 더 자세히 알아보고, 서브 계정에 설정하는 방법을 확인할 수 있어요.

- [하이퍼클래스의 도메인](../06-사이트/일반-설정/how-to-set-up-different-domain-types-in-hyperclass-websites-email-wordpress-more.md)
- 브랜드 시스템 생성 링크(API 도메인) 설정 방법

#### 8. **비즈니스 웹사이트**

메시지, 이메일, 워크플로우 등 커스텀 필드를 쓸 수 있는 곳에서 커스텀 필드 **계정 > 웹사이트**를 추가할 때 이 계정에 사용할 웹사이트 URL을 입력하세요.

예시: `{{location.website}}`

#### 9. **비즈니스 니치**

드롭다운 목록에서 서브 계정의 비즈니스 니치를 선택하세요. 여러 니치를 대상으로 한다면, 타깃 시장을 가장 잘 나타내는 니치를 고르세요.

#### 10. **API 키**

API 키는 둘 이상의 소프트웨어 애플리케이션을 연결할 때 쓰여요. 정보를 주고받거나, 관련된 애플리케이션의 승인과 검증이 필요한 작업을 수행하려는 목적이에요.

예를 들어 Zapier에서 Zap을 만들 때는 여러 소프트웨어 애플리케이션의 API에 연결하는 거예요. Zapier는 이 과정을 사용자가 보기 편하고 깔끔하게 만들어 줄 뿐이에요. 겉보기에 멋진 화면 아래에는 Zap을 어떻게 구성하느냐에 따라 서로 연결되는 API 키들이 있어요.

서브 계정(로케이션)의 API 키는 Zapier나, 특정 서브 계정(로케이션)과 정보를 주고받는 데 API 키가 필요한 다른 애플리케이션을 연결할 때 쓸 수 있어요.

#### 11. **정보 업데이트** 버튼

**일반 정보** 수정을 마쳤으면 **정보 업데이트**를 눌러 저장하세요.

---

## 비즈니스 주소

**비즈니스 주소**는 비즈니스 프로필에서 아주 중요한 항목이에요. 확인 절차가 필요한 일부 기능에서 비즈니스를 인증할 때 쓰일 수 있어요. 또 메시지, 소셜 게시물, 이메일 캠페인, 웹사이트, 퍼널에서 커스텀 필드와 커스텀 값을 추가할 때도 쓸 수 있어요.

![비즈니스 주소 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028016317/original/S2GG8cN7_y58oooqS7QuxOj4m9MXWO3O1g.jpg?1718980084)

{% hint style="info" %}
**비즈니스 주소**는 EIN 등록 정보에 적힌 주소와 일치해야 해요. 이 정보는 필요할 때 비즈니스를 인증하는 데 쓰일 수 있어요.

![EIN 등록 정보와 비즈니스 주소 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028016525/original/2POQ8eOH8iskD8HAFBePNvZv9SvcadNn7w.jpg?1718980223)
{% endhint %}

### 시간대

캠페인의 자동화 이벤트는 이 필드를 기준으로 발송 시점을 정해요. 워크플로우나 이메일 캠페인처럼 사용하는 기능에 따라서는 이 기본 시간대 설정을 덮어쓸 수 있어요. 올바른 시간대가 선택되어 있는지 항상 비즈니스 프로필 설정과 사용하는 기능의 설정을 함께 확인하세요.

![시간대 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028110019/original/MjKMvLUPzo82QSMpP0jIaeaZzTMrczoSWg.jpg?1719237077)

### 플랫폼 언어

이 설정은 서브 계정 화면에 표시되는 언어를 정해요. 영어를 읽고 쓴다면 서브 계정을 영어로, 스페인어를 읽고 쓴다면 스페인어로 표시하고 싶겠죠.

![플랫폼 언어 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028016554/original/2_p1OrYGv6bX_Fy6xzo26p7FJQYxzeyzLQ.jpg?1718980246)

{% hint style="info" %}
아래 예시는 **플랫폼 언어**를 스페인어로 바꾼 모습이에요. 앱의 모든 텍스트가 스페인어로 표시돼요.
{% endhint %}

![플랫폼 언어를 스페인어로 바꾼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028016559/original/oTMruxNfGdIadbYtycyF1kOiRgqO0xbf0g.jpg?1718980256)

### **Outbound Communication Language for Custom Values**(커스텀 값 발신 메시지 언어)

메시지에 커스텀 필드와 커스텀 값을 넣어 보낼 때, 하이퍼클래스는 그 정보를 받는 사람에게 어떤 언어로 보여 줄지 알아야 해요. 여기서 알맞은 언어를 선택해 두면 커스텀 필드나 커스텀 값을 넣은 메시지를 보낼 때, 또는 웹사이트와 퍼널 등 다른 곳에서 커스텀 필드와 커스텀 값을 쓸 때 올바른 언어로 표시돼요.

![커스텀 값 발신 메시지 언어 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028123243/original/NNoEa1-ru0W0JuxNP28f3LR0H2pFn_Zpaw.jpg?1719245829)

{% hint style="info" %}
이 설정의 영향을 받는 커스텀 필드와 커스텀 값 목록은 아래 표를 참고하세요. 기본 언어가 바뀔 때 달라지는 모든 형태를 보려면 오른쪽으로 스크롤하세요.
{% endhint %}

**지원 언어:**

결제 페이지는 비즈니스 프로필에서 설정한 **플랫폼 언어**에 맞춰 레이블, 버튼, 시스템 메시지를 자동으로 현지화해요. 지원 언어(플랫폼 언어)는 다음과 같아요.

- 영어
- 덴마크어
- 독일어
- 스페인어
- 핀란드어
- 프랑스어(지역별 변형으로 표시될 수 있어요)
- 이탈리아어
- 네덜란드어
- 노르웨이어
- 포르투갈어(지역별 변형으로 표시될 수 있어요)
- 스웨덴어

이 설정에서 언어를 바꾸면 영향을 받는 커스텀 필드와 커스텀 값은 다음과 같아요. 앞으로 더 추가되어 영향을 받을 수도 있어요. 필요할 때마다 이 목록을 업데이트하도록 노력할게요.
`{{appointment.start_time}}``{{appointment.end_time}}``{{appointment.only_start_date}}``{{appointment.only_end_date}}``{{appointment.only_start_time}}``{{appointment.only_end_time}}``{{appointment.month}}``{{appointment.month}}``{{appointment.day_of_week}}``{{right_now.time}}``{{right_now.day}}``{{right_now.day_of_week}}``{{right_now.month}}``{{right_now.month_english}}``{{right_now.month_name}}``{{right_now.middle_endian_date}}``{{right_now.little_endian_date}}``{{right_now.hour}}``{{right_now.hour_ampm}}``{{right_now.second}}``{{right_now.date}}`

---

## 비즈니스 정보

이 섹션에는 비즈니스에 대한 정보를 꼭 입력하세요. 등록 유형과 번호(EIN, CCN, VAT 등), 운영 지역 같은 정보가 여기에 들어가요. 합법적으로 등록된 사업체인지에 따라 SMS 발송 승인 신청 결과가 달라질 수 있어요.

#### 1. **비즈니스 유형**

설립한 사업체의 유형을 선택하세요. 드롭다운에는 다음 옵션이 있어요.

- **Co-operative**(협동조합)
- **Corporation**(법인)
- **Limited Liability Company (LLC) or Sole-Proprietorship**(유한책임회사 또는 개인사업자)
- **비영리법인**
- **Partnership**(파트너십)

#### 2. **비즈니스 산업**

주로 상대하는 산업을 선택하세요. 여러 산업을 상대할 수 있다는 점은 이해해요. 그래도 타깃 시장을 가장 잘 나타내는 산업 하나를 골라 주세요.

#### 3. **사업자 등록 ID 유형**

사업체의 등록 유형을 선택하세요. 미국에 있다면 다른 나라에서 법인을 설립한 경우가 아닌 이상 대부분 EIN이 있을 거예요.

![사업자 등록 ID 유형 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028116808/original/rz_STUSrXfbqqRNVTP5DhXmoMAkNcVtbuw.jpg?1719241122)

#### 4. **사업자 등록 번호**

사업체의 등록 유형을 선택한 다음, 여기에 등록 번호를 입력하세요.

#### 5. **비즈니스 운영 지역**

사업체가 운영되는 지역을 선택하세요. 글로벌 기업이라면 매출이 가장 많은 지역을 선택하세요. 여러 지역을 선택할 수 있어요.

#### 6. **정보 업데이트**

변경한 내용이 제대로 저장되도록 수정한 뒤에는 항상 **정보 업데이트** 버튼을 클릭하세요.

---

## 공식 대표자

사업체에 공식 대표자가 있다면 이곳에 대표자 정보를 입력하세요. 본인이 공식 대표자라면 본인 정보를 입력하세요.

![공식 대표자 정보 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028011240/original/wnqJkIzFn9Z-preOxq3cyQLnYrO_BO7cRA.jpg?1718976593)

---

## 일반

비즈니스 프로필의 이 섹션은 매우 중요해서 항목별로 하나씩 설명할게요. 서브 계정에 큰 영향을 줄 수 있으니 각 설정을 꼼꼼히 확인하세요. **연락처** 화면에서 이상한 점이 보이는데 해결 방법을 모르다가, 이 설정으로 와서야 켜지 말아야 할 것을 켜 놓았거나 켜야 할 것을 꺼 놓았다는 걸 알게 되는 경우도 있어요.

![일반 섹션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028011297/original/9Okw_liUrt-CsnjoAx4hWydP3eLP34EYeQ.jpg?1718976636)

#### **중복 기회 허용**

이 기능을 **켜짐**으로 설정하면 같은 파이프라인에 중복 기회를 만들 수 있어요. **켜짐** 상태에서는 기회가 한 파이프라인 단계에서 다른 단계로 이동하는 대신, 같은 파이프라인에 새 기회가 만들어져요. 상황에 따라 매우 유용하거나 꼭 필요할 수도 있어요.

#### **Merge Facebook Contacts by Name**(이름으로 Facebook 연락처 병합)

연락처가 Facebook Messenger로 회사에 메시지를 보내면 시스템에 새 연락처가 만들어져요. Facebook은 사용자의 이름만 보내 주고 전화번호나 이메일 주소는 보내 주지 않기 때문이에요.

연락처 목록을 깔끔하게 정리하고, Facebook으로 문의한 연락처에 다른 메시지 채널을 추가하고 싶다면 이 기능을 켜세요. 하이퍼클래스가 Facebook으로 메시지를 보낸 연락처와 이름이 같은 연락처를 병합해요.

#### **연락처 시간대 비활성화**

여러 기능에서 연락처의 시간대를 활용하는 일은 아주 중요할 수 있어요. 예를 들어 이메일을 오전 8시(EST)에 보내는데 고객이 3시간 느린 캘리포니아(PST)에 있다고 해 볼게요. 발송 과정에서 연락처의 시간대를 고려하지 않으면, 같은 이메일이 PST 기준 오전 5시에 발송돼요.

연락처별 시간대를 쓸 필요가 없는 이유가 있다면 이 기능으로 연락처 시간대 인식을 모두 끄고, 서브 계정에 지정된 시간대만 쓸 수 있어요.

#### **Mark Emails as Unverified due to Hard Bounce**(하드 바운스 시 이메일을 미인증으로 표시)

하이퍼클래스에서는 연락처의 이메일 주소를 인증할 수 있어요. 이 기능을 쓰면 이메일을 보낼 때 하드 바운스가 발생한 주소를 미인증으로 표시할 수 있어요. 하드 바운스가 계속 발생하는 연락처에 이메일을 보내지 않게 되어 비용을 줄일 수 있어요.

{% hint style="info" %}
주소가 미인증으로 표시되면 워크플로우의 이메일 액션은 자동으로 건너뛰어요.
{% endhint %}

{% hint style="info" %}
하드 바운스(Google의 정의): 수신자 주소가 잘못되었거나(도메인 이름이 틀렸거나 존재하지 않는 경우) 수신자를 알 수 없는 등 영구적인 이유로 이메일 전송에 실패한 경우를 말해요.
{% endhint %}

#### **Validate Phone Numbers when First SMS is Sent to a New Contact**(새 연락처에 첫 SMS를 보낼 때 전화번호 검증)

계정에서 새 전화번호로 첫 SMS 메시지를 보내려고 하면, 이 기능이 연락처의 전화번호를 자동으로 검증해 보려고 해요. 전화번호가 **무효**로 표시되면 SMS 메시지는 발송되지 않아요. 이후 이 연락처에 SMS 메시지를 보내려면 먼저 전화번호를 검증해야 해요.

{% hint style="info" %}
전화번호 검증의 기본 요금은 검증 시도 1회당 $0.005예요. 전화번호 검증을 시도할 때마다 에이전시 계정 또는 서브 계정의 크레딧 지갑에서 이 금액이 차감돼요.
{% endhint %}

{% hint style="info" %}
Founder 플랜 계정($497/월)의 경우: 서브 계정이 **SaaS 모드**로 설정되어 있으면 전화번호 검증 비용을 조정할 수 있어요. 그러면 검증을 시도할 때마다 수익을 낼 수 있어요.

SaaS 모드와 리빌링에 대한 자세한 내용은 해당 도움말을 참고하세요.
{% endhint %}

#### **Verify Email Address when First Email is Sent to a New Contact**(새 연락처에 첫 이메일을 보낼 때 이메일 주소 인증)

전화번호 검증과 비슷하게, 이 기능은 계정에서 새 이메일 주소로 첫 이메일을 보낼 때 그 주소를 인증해 볼 수 있게 해 줘요. 이메일 주소가 미인증으로 표시되면 이메일은 발송되지 않아요. 이후 이 연락처에 이메일을 보내려면 먼저 이메일 주소를 인증해야 해요.

{% hint style="info" %}
이메일 주소 인증의 기본 요금은 인증 시도 1회당 $0.0025예요. 이메일 주소 인증을 시도할 때마다 에이전시 계정 또는 서브 계정의 크레딧 지갑에서 이 금액이 차감돼요.
{% endhint %}

{% hint style="info" %}
Founder 플랜 계정($497/월)의 경우: 서브 계정이 **SaaS 모드**로 설정되어 있으면 이메일 주소 인증 비용을 조정할 수 있어요. 그러면 인증을 시도할 때마다 수익을 낼 수 있어요.

SaaS 모드와 리빌링에 대한 자세한 내용은 해당 도움말을 참고하세요.
{% endhint %}

#### **Make SMS Compliant by Adding an Opt-Out Message**(수신거부 문구를 추가해 SMS 규정 준수)

SMS 규정 준수는 매우 중요하고 진지하게 다뤄야 해요. 그래서 하이퍼클래스는 모든 서브 계정에 수신거부(Opt-Out) 문구를 기본으로 자동 설정해 둬요. 이 문구를 직접 설정하거나 끌 수도 있지만(권장하지 않아요), 시작을 돕기 위해 모든 서브 계정에서 이 설정을 기본으로 켜 두고 구성해 뒀어요.

{% hint style="info" %}
하이퍼클래스 전화 시스템의 SMS 규정 준수 설정에 대해 더 알아보세요.
{% endhint %}

#### **Make SMS Compliant by Adding Sender Information**(발신자 정보를 추가해 SMS 규정 준수)

수신거부 문구만큼이나, SMS 메시지에 발신자 정보를 넣는 것도 SMS 규정 준수에서 아주 중요한 요소예요. 발신자 정보를 직접 설정하거나 끌 수도 있지만(권장하지 않아요), 시작을 돕기 위해 모든 서브 계정에서 이 설정을 기본으로 켜 두고 구성해 뒀어요.

{% hint style="info" %}
하이퍼클래스 전화 시스템의 SMS 규정 준수 설정에 대해 더 알아보세요.
{% endhint %}

#### **Make Email Compliant by Adding an Unsubscribe Link in Your Emails**(이메일에 수신거부 링크를 추가해 이메일 규정 준수)

소비자를 보호하고 개인정보를 안전하게 지키기 위해 이메일 발송과 관련된 새로운 법이 계속 만들어지고 있어요. 그래서 하이퍼클래스는 모든 서브 계정에 이메일 **수신거부 링크**를 기본으로 자동 설정해 둬요. 수신거부 링크를 직접 설정하거나 끌 수도 있지만(권장하지 않아요), 시작을 돕기 위해 모든 서브 계정에서 이 설정을 기본으로 켜 두고 구성해 뒀어요.

{% hint style="info" %}
하이퍼클래스 이메일의 수신거부 링크 설정에 대해 더 알아보세요.
{% endhint %}

---

## 통화 및 음성메일 설정

아래 음성메일 설정은 서브 계정 전체에 적용돼요. 개별 팀원에게 음성메일을 추가한 경우에만 그 팀원의 설정이 우선해요(팀원 추가와 설정에 대한 자세한 내용은 해당 도움말을 참고하세요).

- 서브 계정 음성메일을 업로드할 때 파일은 mp3 또는 WAV 형식이어야 해요.
- **수신 통화 시간 초과**를 선택해, 수신 통화가 얼마나 빨리 음성메일로 넘어갈지 정해요.

{% hint style="info" %}
10~20초를 권장해요. 다만 비즈니스에 따라서는 발신자가 전화를 끊기 전에 음성메일에 연결되도록 10초 미만으로 설정하는 편이 나을 수 있어요.
{% endhint %}

![통화 및 음성메일 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028011301/original/1G6K82CQwDZHjJXTX2YQOODoJ0SYYoGp9A.jpg?1718976644)

---

## **Contact Duplication Preferences**(연락처 중복 환경설정)

이 설정으로 서브 계정이 중복 연락처를 어떻게 처리할지 정해요. 중복 연락처를 허용하려면 **Allow Duplicate Contacts**(중복 연락처 허용) 설정을 **켜짐**으로 바꾸세요. 중복 연락처를 허용하지 않으려면 **꺼짐**으로 바꾸세요.

![연락처 중복 환경설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028011311/original/uGxlYzh-pyIrMxUjSZki8GNuRlwN68YFXA.jpg?1718976651)

{% hint style="info" %}
이 설정을 **꺼짐**으로 바꾸면, 서브 계정이 중복 연락처를 어떻게 찾을지 조정하는 옵션이 나타나요. 연락처가 중복인지 판단할 때 **이메일**이나 **전화번호**를 먼저 확인하도록 정할 수 있어요. 확인을 한 단계 더 하고 싶다면 보조 판단 기준도 선택할 수 있어요.

![중복 연락처 판단 기준 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028119899/original/r5W5Fk35BCCiiqzqf8PZL23ngM23gG3yiA.jpg?1719243170)
{% endhint %}

---

## **Enable/Disable Depreciated Features**(지원 중단 기능 활성화/비활성화)

지원 중단 기능은 하이퍼클래스에서 엔지니어링팀이 더 이상 업데이트하거나 지원하지 않는 기능이고, 서브 계정에 기본으로 제공되지 않는 기능이에요. 현재 이 목록에 있는 지원 중단 기능은 **캠페인**과 **트리거**뿐이에요. 워크플로우가 훨씬 뛰어난 대안으로 이 기능들을 완전히 대체했기 때문에 지원이 중단됐어요(워크플로우와 자동화에 대해 더 알아보기).

{% hint style="warning" %}
고객을 위해 지원 중단 기능을 켤 수는 있어요. 하지만 이 기능에서 문제나 버그가 생겨도 하이퍼클래스 팀이 끝내 해결하지 않을 수 있다는 점을 알아 두세요. 지원 중단 기능은 그럴 만한 이유가 있어서 그렇게 분류돼 있어요. 앱에서 단계적으로 없어지고 있는 기능이에요.
{% endhint %}

![지원 중단 기능 활성화/비활성화 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028011319/original/-Y8uekMQW4_sm12mqvGkIlIMDy4Jfv54bw.jpg?1718976660)

---

## 부재중 전화 문자 회신

**부재중 전화 문자 회신**은 사용자와 고객 모두에게 유용한 기능이에요. 비즈니스 프로필 설정에서 바로 켜고 설정할 수 있어요.

부재중 전화 문자 회신은 최근 전화를 걸었지만 팀원과 연결되지 못한 발신자에게 SMS 메시지를 자동으로 보내요.

발송할 SMS 메시지 내용을 직접 정할 수 있고, 커스텀 필드와 커스텀 값도 넣을 수 있어요.

{% hint style="info" %}
**부재중 전화 문자 회신**을 켜기 전에 작성한 SMS 메시지를 테스트하고 싶다면, 이 기능 아래 입력란에 내 전화번호를 넣고 **테스트 전송**을 클릭하세요. 설정한 문구 그대로 내 휴대폰으로 SMS 메시지가 전송돼요.
{% endhint %}

**부재중 전화 문자 회신**을 시작할 준비가 되면 이 기능 아래의 **저장** 버튼을 클릭하세요. 그러면 바로 사용할 수 있어요.

![부재중 전화 문자 회신 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028011332/original/ZXj1Njte7skCjFTLImfKGKvjBkMG-nAVoQ.jpg?1718976671)
