---
원문: https://help.gohighlevel.com/support/solutions/articles/155000008531-how-to-connect-google-merchant-center-to-your-e-commerce-store
번역일: 2026-11-06
카테고리: 44-신기능-2026
---

# 이커머스 스토어에 Google Merchant Center 연결하기

Google Merchant Center 연동을 쓰면 이커머스 스토어를 Google Merchant Center에 연결하고, 상품 카탈로그를 Google과 자동으로 맞출 수 있어요. 이 문서에서는 연동의 기능, 상품 동기화 방식, 설정 순서, 연결 조건, 문제 해결 방법, 자주 묻는 질문을 안내해요.

## Google Merchant Center 연동이란?

Google Merchant Center는 판매자가 Google 전반에서 쓰이는 상품 정보를 등록하고 관리하는 Google의 무료 도구예요.

상품이 Google에 제출되어 승인되면, 해당하는 상품은 무료 리스팅으로 Google 검색, 쇼핑, 이미지, Lens, YouTube, 지도, Gemini 등에 표시될 수 있어요. 유료 쇼핑 광고는 Google Ads를 따로 설정해야 해요.

Google Merchant Center 연동은 이커머스 스토어와 Google Merchant Center 계정을 연결해 줘요. 별도의 상품 피드를 직접 관리하지 않아도, 조건에 맞는 **스토어 상품**과 지원되는 상품 변경 사항을 Google로 보낼 수 있어요.

**앱 마켓플레이스**(App Marketplace)에서 Google Merchant Center 앱을 설치한 뒤에는 다음 순서로 진행해요.

1. Google 계정을 연결해요.
2. Merchant Center 계정을 선택해요.
3. 선택한 계정을 이커머스 스토어와 짝지어요.

그러면 해당 스토어에 배정된 조건에 맞는 스토어 상품이 Google Merchant Center와 동기화돼요.

**자세히 보기:**

- [Google Merchant Center 고객센터](https://support.google.com/merchants/)
- [Google 무료 상품 리스팅](https://support.google.com/merchants/answer/9199328)
- [쇼핑 광고 정보](https://support.google.com/merchants/answer/6149970)

---

## 연동으로 할 수 있는 일

이 연동은 이커머스 스토어를 Google Merchant Center 계정과 연결하고, 이후 상품 동기화를 이어서 처리해요.

설정을 마치면 다음 일을 할 수 있어요.

- 연결된 스토어에 배정된 조건에 맞는 상품 동기화
- 상품 정보와 이미지 동기화
- 지원되는 상품 옵션(변형) 동기화
- 가격을 최신 상태로 유지
- 재고와 판매 가능 여부를 최신 상태로 유지
- 새로 추가한 조건에 맞는 상품을 자동으로 동기화
- 기존 상품에서 지원되는 변경 사항을 자동으로 동기화
- 동기화 오류와 경고 표시
- Google 승인에 영향을 줄 수 있는 상품 문제 표시
- 필요할 때 **강제 동기화**를 직접 실행
- 여러 스토어와 Merchant Center 계정 간 연결 지원

이커머스 스토어에서 상품을 관리하면, 연동이 Merchant Center의 카탈로그를 알아서 최신 상태로 맞춰 주는 것이 목표예요.

---

## 사전 준비

스토어를 연결하기 전에 아래 항목을 준비하세요.

- Google 계정
- 도메인이 연결되어 운영 중인 이커머스 스토어
- Google Merchant Center 계정 (설정 중에 새로 만들어도 돼요)
- 배송 출발 국가와 언어 설정
- 연결하려는 스토어에 배정된 상품

연동으로 제출한 상품은 상품 페이지 URL이 Google로 전달되기 때문에, 스토어에 유효한 도메인이 있어야 해요.

Google은 판매자에게 온라인 스토어 URL 인증도 요구해요. Merchant Center가 일부 웹사이트는 자동으로 인증할 수도 있어요. 자동 인증이 안 되면 Google이 직접 인증할 수 있는 방법을 안내해요.

**유용한 링크:**

- [Merchant Center 계정 만들기 및 설정](https://support.google.com/merchants/answer/188924)
- [Merchant Center 웹사이트 인증](https://support.google.com/merchants/answer/176793)
- [인증되지 않은 스토어 URL 문제 해결](https://support.google.com/merchants/answer/176793)

---

## 스토어를 Google Merchant Center에 연결하기

### 1단계: Google Merchant Center 앱 설치

1. **앱 마켓플레이스**를 열어요.
2. **Google Merchant Center**를 검색해요.

   ![앱 마켓플레이스에서 Google Merchant Center 검색](https://jumpshare.com/share/L8tb0tGU4UHBES8tZqfI+/Screen+Shot+2026-08-27+at+17.40.28.png)
3. 앱을 **설치**해요.
4. 설치가 끝나면 Google 계정 연결을 시작해요.

   ![Google 계정 연결 시작 화면](https://jumpshare.com/share/E5NlpMDp0P2a2l28ImaQ+/Screen+Shot+2026-08-27+at+17.43.44.png)

### 2단계: Google 계정 연결

{% hint style="info" %}
승인이 끝나면, 연결한 Google 계정으로 접근할 수 있는 Merchant Center 계정을 앱이 자동으로 불러와요. Merchant Center 계정 ID를 직접 입력하지 않아도 돼요.
{% endhint %}

1. 사용하려는 Google 계정으로 로그인해요.

   ![Google 계정 로그인 화면](https://jumpshare.com/share/XSJvffVoRuuIu2DUtlXv+/Screen+Shot+2026-08-27+at+17.45.36.png)
2. 아래 중 하나에 해당하는 계정을 사용하세요.

   - 이미 Merchant Center 계정에 접근 권한이 있는 계정
   - Merchant Center 계정을 만들고 관리할 계정
3. 승인 절차를 완료해요.

   ![Google 계정 승인 화면](https://jumpshare.com/share/1asv9FpOSYAqOU2SiqUb+/Screen+Shot+2026-08-27+at+17.46.37.png)

### 3단계: Merchant Center 계정 선택 또는 만들기

{% hint style="info" %}
Merchant Center 설정 방법은 [Google 안내](https://support.google.com/merchants/answer/188924)에서 확인할 수 있어요.
{% endhint %}

- 사용할 수 있는 Merchant Center 계정이 있으면, 연결할 계정을 선택하세요.
- 아직 계정이 없다면 **Create New GMC Account**(새 GMC 계정 만들기) 옵션이나 앱 안의 설정 안내 문서를 이용하세요. 계정 생성은 연동이 자동으로 해 주지 않고, Google에서 직접 완료해야 해요.
- 상품이 Google에 노출될 수 있으려면 Google의 비즈니스 정보 입력과 인증 요건도 마쳐야 할 수 있어요.

  ![Merchant Center 계정 선택 화면](https://jumpshare.com/share/276aPc9gAWmbsMH6Ngg5+/Screenshot+2026-08-27+at+17.49.57.png)

### 4단계: 스토어 도메인 인증

{% hint style="info" %}
웹사이트 인증은 [Google 안내](https://support.google.com/merchants/answer/176793)에서 자세히 볼 수 있어요.
{% endhint %}

이커머스 스토어에 연결된 도메인이 Merchant Center에서 쓸 수 있도록 인증되어 있는지 확인하세요.

Google이 도메인을 자동으로 인증하지 못하면 [Google 인증 안내](https://support.google.com/merchants/answer/11586344?visit_id=639234318264657816-120322763&rd=1)를 따라 진행하세요.

![도메인 인증 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079474599/original/4XDFPaiCjwLn7v0v8Wuj1ktrQTpF3Pa0PQ.png?1787844484)

### 5단계: 이커머스 스토어 선택

1. 선택한 Merchant Center 계정에 연결할 스토어를 **선택**해요.
2. 상품은 이 스토어에 배정된 기준으로 동기화돼요. 계정에 있어도 연결한 스토어에 배정되지 않은 상품은 동기화되지 않아요.

   ![연결할 스토어 선택 화면](https://jumpshare.com/share/KAsdynLHv53AyxI5Om3G+/Screen+Shot+2026-08-27+at+20.58.42.png)

{% hint style="warning" %}
웹사이트 스토어와 퍼널 스토어 모두 선택할 수 있어요. 도메인이 연결되지 않은 스토어는 선택할 수 없는 상태로 보일 수 있어요. 해당 스토어 옆의 **Domain not connected**(도메인 연결 안 됨)를 클릭하면 스토어 설정이 열리고, 거기서 도메인을 연결할 수 있어요.

![도메인 연결 안 됨 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082865592/original/w4YVcG-UditW2_ABWTpNX0zzdFJOnkTVBQ.png?1791470284)
{% endhint %}

### 6단계: 연결 완료

1. 연결할 스토어와 Merchant Center 계정이 맞는지 확인해요.
2. 연결이 만들어지면 첫 상품 동기화가 자동으로 시작돼요.
3. Google이 새로 제출된 상품을 처리, 검토, 승인하는 데는 시간이 더 걸릴 수 있어요. 동기화가 성공했다는 것은 상품이 Google에 제출되었다는 뜻이에요. 상품이 승인되었거나 쇼핑객에게 이미 보인다는 뜻은 아니에요.

![연결 완료 화면](https://jumpshare.com/share/xlz3TRC9KHI8xyCJq86P+/image+%285%29+%281%29.png)

{% hint style="info" %}
스토어를 연결하기 전에, Google Merchant Center와 동기화될 수 있는 항목 수와 상품 수를 미리 볼 수 있어요. 연결한 뒤에는 상품 동기화가 시작되었다는 확인 메시지가 표시돼요.

![동기화 시작 확인 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082866069/original/pspCfID1sGv75dYtyGkHYZ-MVrvODm-NxQ.png?1791470529)
{% endhint %}

---

## 현재 지원되는 상품

연결된 이커머스 스토어에 배정된 조건에 맞는 상품만 동기화돼요.

{% hint style="info" %}
현재는 1회 결제 옵션이 있는 상품을 지원해요.
{% endhint %}

동기화할 수 있는 상품 데이터는 다음과 같아요.

- 상품 정보
- 이미지
- 옵션(변형)
- 가격
- 재고
- 판매 가능 여부

처음 설정이 끝난 뒤에도, 새로 추가한 조건에 맞는 상품과 기존 상품에서 지원되는 변경 사항은 계속 동기화돼요.

---

## 현재 지원되지 않는 상품

정기 결제 옵션만 쓰는 상품은 이 연동으로 동기화되지 않아요.

Google에는 자체 상품 자격, 데이터, 정책 요건도 있어요. 연동에서 지원하는 상품이라고 해서 Google이 반드시 승인하는 것은 아니에요.

Google의 최신 요건은 아래에서 확인하세요.

- [Google 상품 데이터 사양](https://support.google.com/merchants/answer/7052112)

Google 상품 데이터 사양은 Merchant Center에 상품을 제출할 때 지켜야 하는 데이터와 형식 요건을 정해 둔 문서예요. Google의 요건에 맞지 않는 상품은 노출이 제한되거나 승인되지 않을 수 있어요.

---

## 연동 데이터 소스 이해하기

연동을 연결하면 Google Merchant Center에 데이터 소스가 하나 만들어져요. Merchant Center 화면에서는 다음 이름으로 보여요.

```
leadconnector
```

이 데이터 소스는 배송 출발지로 설정한 국가와 언어를 기준으로 만들어져요.

Google Merchant Center는 데이터 소스를 통해 상품 정보를 받고 관리해요.

### 중요: 꼭 필요한 경우가 아니면 데이터 소스를 삭제하지 마세요

Merchant Center에서 이 데이터 소스를 삭제하면, 그 데이터 소스로 동기화된 상품도 함께 삭제돼요.

데이터 소스를 실수로 삭제했거나 다시 만들어야 한다면, 연동에서 **강제 동기화**를 사용하세요. 새 데이터 소스가 만들어지고 조건에 맞는 상품이 다시 제출돼요.

Google이 상품 데이터 소스를 어떻게 다루는지는 아래에서 자세히 볼 수 있어요.

- [Merchant Center 데이터 소스 정보](https://support.google.com/merchants/answer/7439058)

![Merchant Center 데이터 소스 화면](https://jumpshare.com/share/g0PPrOfTNs8PF9go2eGB+/image+%287%29+%281%29.png)

---

## 강제 동기화는 언제 쓰나요?

상품 동기화는 자동으로 이루어지도록 만들어져 있어요. 그래서 **강제 동기화**는 꼭 필요할 때만 쓰는 것이 좋아요.

다음과 같은 경우에 **강제 동기화**를 사용하세요.

- 최근 상품 변경 사항이 Merchant Center에 나타나지 않을 때
- 상품을 다시 제출해야 할 때
- 연동 데이터 소스를 삭제했을 때
- 카탈로그를 직접 새로 고쳐야 할 때

**강제 동기화**를 실행하면, 연결된 스토어와 관련된 조건에 맞는 상품이 새로 동기화돼요.

![강제 동기화 화면](https://jumpshare.com/share/mgcm30dAE2t3LcXCEeSn+/image+%285%29+%282%29.png)

{% hint style="info" %}
**강제 동기화**를 실행하는 동안 조건에 맞는 상품 수와 가격 수, 동기화 진행 메시지를 볼 수 있어요.

![강제 동기화 진행 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082866600/original/vrkzfr-5KOw6Mzgl_hT4ZUT9KATkf448LQ.png?1791470790)
{% endhint %}

---

## 상품 승인, 오류, 경고

Google은 상품이 Merchant Center에 제출된 뒤에 검토해요.

현재 Google에서 쓰는 상태는 다음과 같아요.

- 검토 중
- 처리 중
- 승인됨
- 제한됨
- 승인되지 않음

제출된 상품의 승인 상태는 연동이 아니라 Google이 결정해요.

도메인 문제처럼 진행을 막는 문제가 있으면 스토어 설정을 마칠 수 없어요. 진행을 막지 않는 경고는 카탈로그 동기화를 막지 않으며, 동기화한 뒤에 표시돼요. 스토어 연결을 만들거나 편집할 때는 반품 정책 경고가 더 이상 나타나지 않아요.

문제의 예는 다음과 같아요.

- 누락되었거나 잘못된 상품 정보
- Google 요건에 맞지 않는 상품 데이터
- Merchant Center 설정 문제
- 웹사이트 또는 도메인 문제
- 정책 문제
- 누락된 비즈니스 정보
- 그 밖의 Google Merchant Center 요건

문제 상세에서 해당 상품이나 설정으로 이동할 수 있다면, 그곳에서 잘못된 정보를 고치세요.

![상품 문제 상세 화면](https://jumpshare.com/share/gZlKUqi9dxhRseatEje8+/image+%285%29+%283%29.png)

Merchant Center의 **주의 필요** 섹션에서도 계정 단위와 상품 단위의 문제를 확인할 수 있어요.

**유용한 링크:**

- [주의 필요 탭 사용하기](https://support.google.com/merchants/answer/12153802)
- [문제 해결 후 검토 요청하기](https://support.google.com/merchants/answer/9242973)
- [Google 상품 데이터 사양](https://support.google.com/merchants/answer/7052112)

---

## 연결 해제하기

이미 연결된 스토어를 Merchant Center 계정에서 연결 해제할 수 있어요.

연결을 해제하면 다음과 같이 돼요.

- 스토어가 해당 Merchant Center 계정과 더 이상 연결되지 않아요.
- 그 스토어의 이후 상품 변경 사항은 연동으로 동기화되지 않아요.
- 그 스토어를 조건에 맞는 다른 Merchant Center 계정에 연결할 수 있어요.
- 이전에 연결했던 Merchant Center 계정을 다른 연결에 쓸 수 있어요.

연결을 해제해도 Google의 상품·계정 정책은 별개로 적용돼요.

![연결 해제 화면](https://jumpshare.com/share/zcUsWXu4vIUTqb2LZsfg+/image+%285%29+%284%29.png)

---

## Google 쇼핑 광고와 무료 리스팅

스토어를 Merchant Center에 연결해도 Google Ads 캠페인이 자동으로 만들어지지는 않아요.

Merchant Center는 Google이 여러 마케팅 방식에 활용할 수 있는 상품 데이터를 제공해요.

조건에 맞는 상품은 유료 광고 없이 Google의 무료 리스팅으로 표시될 수 있어요. Google은 무료 리스팅이 검색, 쇼핑, 지도, 이미지, Lens, YouTube, Gemini 등에 표시될 수 있다고 안내해요.

유료 쇼핑 캠페인을 하려면 Google Ads 계정이 있어야 하고, Merchant Center와 Google Ads 설정도 갖춰야 해요.

**자세히 보기:**

- [상품 무료 리스팅](https://support.google.com/merchants/answer/9199328)
- [쇼핑 광고 정보](https://support.google.com/merchants/answer/6149970)
- [Google Ads와 Merchant Center 연결하기](https://support.google.com/merchants/answer/6159060)

---

## 문제 해결

### 상품이 동기화되지 않아요

아래 내용을 확인하세요.

- 스토어가 아직 Merchant Center에 연결되어 있는지
- 상품이 연결된 스토어에 배정되어 있는지
- 상품에 지원되는 1회 결제 옵션이 있는지
- 스토어에 유효한 도메인이 연결되어 있는지
- 연동 데이터 소스가 아직 있는지
- 연동에 동기화 오류가 표시되지 않는지

모두 정상으로 보이면 **강제 동기화**를 사용하세요.

### 상품은 동기화됐는데 Google에서 보이지 않아요

동기화와 Google 승인은 별개예요.

Google은 제출된 상품을 검토하고, Google에 노출될 수 있는지 결정해요. 상품의 상태와 Google이 알려 주는 문제를 확인하세요.

### 상품이 승인되지 않았어요

연동에 표시된 오류나 경고를 확인하고, Merchant Center의 **주의 필요** 섹션도 살펴보세요.

상품, 웹사이트, Merchant Center의 문제를 먼저 고친 뒤에 필요하면 다시 검토를 요청하세요.

### 도메인이 인증되지 않았어요

Google Merchant Center에서 스토어 URL 인증을 완료하세요.

Google이 일부 도메인은 자동으로 인증할 수 있어요. 자동 인증이 안 되면 Google이 안내하는 수동 인증 방법을 따르세요.

[웹사이트 자동 인증](https://support.google.com/merchants/answer/176793)에서 자세히 확인할 수 있어요.

### 연동 데이터 소스를 삭제했어요

이 데이터 소스를 삭제하면 그 데이터 소스로 동기화된 상품도 삭제돼요.

연동으로 돌아가 **강제 동기화**를 사용하세요. 데이터 소스가 다시 만들어지고 조건에 맞는 상품이 다시 제출돼요.

### 스토어나 Merchant Center 계정을 연결할 수 없어요

해당 스토어나 Merchant Center 계정이 이미 다른 연결에 쓰이고 있는지 확인하세요.

스토어와 Merchant Center 계정은 각각 한 번에 하나의 연결에서만 쓸 수 있어요. 새로 연결하기 전에 기존 연결을 먼저 해제하세요.

---

## 자주 묻는 질문

### 스토어를 연결하면 상품이 Google에 반드시 노출되나요?
아니요. 연동은 조건에 맞는 상품 정보를 Merchant Center에 제출해요. 상품의 승인, 노출, 자격은 Google이 따로 검토해서 결정해요.

### 여러 스토어를 Google Merchant Center에 연결할 수 있나요?
네. 스토어와 Merchant Center 계정을 짝지은 연결을 여러 개 만들 수 있어요. 다만 스토어와 Merchant Center 계정은 각각 한 번에 하나의 연결에만 속할 수 있어요. 이미 다른 곳에 연결된 스토어나 Merchant Center 계정을 연결하려면, 기존 연결을 먼저 해제한 뒤 새 연결을 만드세요.

### 새 상품도 자동으로 동기화되나요?
네. 처음 연결한 뒤에 새로 추가한 조건에 맞는 상품 중 연결된 스토어에 배정된 상품은 자동으로 동기화돼요.

### 가격과 재고가 바뀌면 자동으로 동기화되나요?
네. 가격, 재고, 판매 가능 여부, 상품 정보, 이미지, 옵션처럼 지원되는 변경 사항은 설정 후 자동으로 동기화되도록 되어 있어요.

### 정기 결제 상품도 지원하나요?
아니요. 현재 버전에서는 1회 결제 옵션이 있는 상품만 동기화돼요.

### 상품 피드를 직접 만들어야 하나요?
아니요. 조건에 맞는 상품을 동기화하는 데 쓰는 데이터 소스는 연동이 만들고 관리해요.

### 스토어를 두 개 이상 연결할 수 있나요?
네. 연결을 여러 개 만들 수 있지만, 스토어와 Merchant Center 계정은 각각 한 번에 하나의 연결에만 속할 수 있어요.

### 연동이 Merchant Center 계정을 대신 만들어 주나요?
아니요. Merchant Center 계정이 없다면 설정 중에 안내되는 계정 생성 옵션이나 안내 문서를 이용해서 Google에서 직접 완료하세요.

### 이 연동으로 Google 쇼핑 광고를 운영할 수 있나요?
아니요. 이 연동은 상품 카탈로그를 Google Merchant Center와 동기화해 줄 뿐이에요. Google 쇼핑 유료 광고는 Google Ads를 따로 설정해야 해요.

---

## Google 참고 자료

- [Google Merchant Center](https://www.google.com/retail/solutions/merchant-center/)
- [Merchant Center 고객센터](https://support.google.com/merchants/)
- [Merchant Center 시작하기](https://support.google.com/merchants/answer/188924)
- [웹사이트 인증](https://support.google.com/merchants/answer/176793)
- [상품 데이터 사양](https://support.google.com/merchants/answer/7052112)
- [Merchant Center 데이터 소스](https://support.google.com/merchants/answer/7439058)
- [주의 필요 및 상품 문제](https://support.google.com/merchants/answer/12153802)
- [상품 무료 리스팅](https://support.google.com/merchants/answer/9199328)
- [쇼핑 광고 정보](https://support.google.com/merchants/answer/6149970)
- [Google Ads를 Merchant Center에 연결하기](https://support.google.com/merchants/answer/6159060)
