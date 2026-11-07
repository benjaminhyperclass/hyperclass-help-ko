---
원문: /support/solutions/articles/155000008974-create-app-qr-codes-for-ios-and-android
번역일: 2026-11-06
카테고리: 06-사이트
---

# iOS·Android 앱 QR 코드 만들기

앱 QR 코드는 QR 코드 하나로 스캔한 기기에 맞는 앱 스토어로 안내하는 기능이에요. iOS 사용자는 Apple App Store, Android 사용자는 Google Play Store로 이동하고, 그 밖의 기기나 확인되지 않는 기기는 선택 입력한 대체 URL로 이동해요. 이 문서에서는 앱 QR 코드의 동작 방식과 하이퍼클래스에서 만드는 방법을 설명해요.

## 앱 QR 코드란?

앱 QR 코드는 스캔한 기기에 따라 방문자를 알맞은 주소로 자동 안내하는 QR 코드 유형이에요.

iOS 사용자가 열 **App Store URL**(iOS용 앱 스토어 주소)과 Android 사용자가 열 **Play Store URL**(Android용 플레이 스토어 주소)을 입력해요. 지원되지 않거나 확인되지 않는 기기를 위해 **Other Devices URL**(그 밖의 기기용 주소)도 선택적으로 입력할 수 있어요.

누군가 QR 코드를 스캔하면 하이퍼클래스가 기기를 확인하고, 해당 기기에 설정된 주소로 방문자를 보내요.

### 앱 QR 코드의 장점

앱 QR 코드 하나로 여러 기기 사용자에게 앱을 홍보할 수 있고, 방문자는 자기 기기에 맞는 주소로 자동 이동해요.

- 하나의 QR 코드로 모든 플랫폼 대응: iOS용과 Android용 QR 코드를 따로 관리하지 않고 코드 하나만 홍보하면 돼요.
- iOS 자동 안내: iOS 기기를 설정한 Apple App Store 주소로 보내요.
- Android 자동 안내: Android 기기를 설정한 Google Play Store 주소로 보내요.
- 대체 주소 지원: 지원되지 않거나 확인되지 않는 기기를 위한 주소를 추가할 수 있어요.
- 다운로드 단계 감소: 여러 앱 스토어 선택지가 있는 별도 페이지 없이 방문자를 알맞은 주소로 안내해요.
- 재사용 가능: 인쇄물, 웹사이트, 캠페인 등 여러 홍보 채널에서 같은 앱 QR 코드를 쓸 수 있어요.
- 기존 디자인 설정 그대로 사용: 기본 QR 코드 디자인·사용자 지정 기능을 그대로 쓸 수 있어요.

### 준비 사항과 제한 사항

QR 코드를 배포하기 전에 앱 주소를 설정하고 확인해 두세요. 그래야 기기별로 알맞은 곳으로 이동해요.

- iOS 사용자용 Apple App Store 주소를 준비하세요.
- Android 사용자용 Google Play Store 주소를 준비하세요.
- **Other Devices URL**은 선택 항목이에요.
- **Other Devices URL**을 입력하면 지원되지 않거나 확인되지 않는 기기의 대체 주소로 쓰여요.
- 하이퍼클래스는 QR 코드가 스캔된 뒤 기기 종류를 자동으로 판단해요.
- 앱 QR 코드는 iOS, Android, 그 밖의 기기나 확인되지 않는 기기별로 따로 안내할 수 있어요.
- 앱 QR 코드에서도 기본 QR 코드 디자인·사용자 지정 기능을 그대로 쓸 수 있어요.

## 앱 QR 코드 설정하기

기본 QR 코드 만들기 화면에서 앱 QR 코드를 만들고 기기별 주소를 지정한 뒤, 배포하기 전에 테스트하세요.

1. **서브 계정** 화면에서 **사이트**를 선택하세요.
2. 상단 메뉴에서 **QR 코드**를 선택하세요.
3. **QR 코드 만들기**를 클릭하세요.
4. 알아보기 쉬운 QR 코드 이름을 입력하세요.
5. QR 코드 유형으로 **앱**을 선택하세요.

![QR 코드 유형으로 앱을 선택한 QR 코드 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081931386/original/KU8K882vsfeTH33X4CmonrkYo2iXXEYmBw.png?1790472592)

6. iOS 사용자가 열 **App Store URL**을 입력하세요.
7. Android 사용자가 열 **Play Store URL**을 입력하세요.
8. 필요하면 지원되지 않거나 확인되지 않는 기기를 위해 **Other Devices URL**을 입력하세요.

![App Store URL, Play Store URL, Other Devices URL이 보이는 앱 QR 코드 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081931418/original/s0FBf-OnSVtRB1gxUnMXnAwsROPt5WFpXw.png?1790473091)

9. **다음**을 클릭해 QR 코드 디자인·사용자 지정 화면으로 이동하세요.
10. 사용할 수 있는 디자인 옵션으로 QR 코드를 꾸미세요.
11. 마무리하기 전에 QR 코드를 스캔해서 설정한 주소가 제대로 열리는지 확인하세요.
12. 설정과 디자인이 끝나면 **저장**을 클릭해 QR 코드를 저장하세요.

{% hint style="info" %}
가능하면 iOS 기기와 Android 기기 모두로 테스트해 보세요. **Other Devices URL**을 입력했다면 그 대체 주소도 따로 확인하세요.
{% endhint %}

## 기기별 안내 방식

하이퍼클래스는 앱 QR 코드가 스캔된 뒤 설정된 주소 중 어느 것을 쓸지 정해요. 그래서 방문자가 iOS 링크와 Android 링크 중에서 직접 고를 필요가 없어요.

| 기기 종류 | 이동하는 주소 |
| --- | --- |
| iOS | 설정한 App Store URL |
| Android | 설정한 Play Store URL |
| 그 밖의 기기 또는 확인되지 않는 기기 | 입력한 경우 설정한 Other Devices URL |

## 자주 묻는 질문

### iOS용과 Android용 QR 코드를 따로 만들어야 하나요?

아니요. 앱 QR 코드 하나에 iOS 사용자용 주소와 Android 사용자용 주소를 각각 설정할 수 있어요.

### 하이퍼클래스는 어떤 주소를 열지 어떻게 정하나요?

하이퍼클래스는 코드를 스캔한 기기를 확인해요. iOS 기기는 App Store URL, Android 기기는 Play Store URL로 이동하고, 그 밖의 기기나 확인되지 않는 기기는 설정한 대체 URL로 이동할 수 있어요.

### Other Devices URL은 꼭 입력해야 하나요?

아니요. **Other Devices URL**은 선택 항목이에요.

### Other Devices URL에는 어떤 주소를 넣으면 되나요?

지원되지 않거나 확인되지 않는 기기에서 열리게 하고 싶은 주소를 넣으세요. **Other Devices URL**은 선택 항목이에요.

### 앱 QR 코드는 다른 QR 코드와 디자인 옵션이 다른가요?

아니요. 앱 QR 코드도 기본 QR 코드 디자인·사용자 지정 기능을 그대로 사용해요.

### 같은 앱 QR 코드를 인쇄물과 디지털 자료에 함께 써도 되나요?

네. 같은 앱 QR 코드를 인쇄물, 웹사이트, 캠페인 등 여러 홍보 채널에서 다시 쓸 수 있어요.
