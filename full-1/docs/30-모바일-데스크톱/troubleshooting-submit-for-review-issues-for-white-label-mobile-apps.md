---
원문: https://help.gohighlevel.com/support/solutions/articles/155000008552-troubleshooting-submit-for-review-issues-for-white-label-mobile-apps
번역일: 2026-11-06
카테고리: 30-모바일-데스크톱
---

# 화이트라벨 모바일 앱 검토 제출 문제 해결

앱을 Apple이나 Google에 심사 요청하기 전에 거치는 마지막 점검에서 문제가 생겼을 때 참고하는 문서예요. 이 점검은 3단계 **검토 제출**에서 실행돼요.

점검에서는 업로드한 빌드의 처리가 끝났는지, 스토어 정보가 스토어의 자체 검증을 통과하는지, 버전이 제출 가능한 상태인지, 필수 규정 준수 정보가 모두 있는지를 확인해요.

## 결과는 두 가지예요

- **BLOCKER**(차단): 해결해야 제출할 수 있어요.
- **WARNING**(경고): 제출을 막지 않아요. 이 단계의 경고 두 가지는 모두 Android에만 해당해요.

## 문제를 고친 뒤 다시 확인하는 방법

이 단계의 문제는 대부분 App Store Connect나 Google Play Console에서 고쳐요. 수정을 마쳤다면 체크리스트로 돌아와 **I have fixed all blocking issues**(차단 문제를 모두 해결했습니다)를 체크하고 **인증**을 선택하세요.

{% hint style="info" %}
Apple이 빌드를 처리하는 데는 시간이 걸려요. 업로드한 뒤 15~30분 기다렸다가 제출하세요. 빌드가 올라왔는지는 **App Store Connect**의 **활동**에서 볼 수 있어요.
{% endhint %}

## 전체 과정 영상으로 보기

스토어별로 빌드부터 제출까지 처음부터 끝까지 따라 하는 영상이에요.

[Apple App Store 전체 과정 영상 보기](https://app.arcade.software/share/GPKaZ6c6fQaSuoCbfwzw) [Google Play 전체 과정 영상 보기](https://app.arcade.software/share/ASGtv5YybPRZflRQY3p4)

## 빠른 참조

문제를 선택하면 해당 위치로 바로 이동해요.

| 문제 | 스토어 | 유형 |
| --- | --- | --- |
| [Latest store upload completed(최신 스토어 업로드 완료)](#ios-upload-done) | iOS | BLOCKER |
| [Listing metadata ready to push(리스팅 메타데이터 푸시 준비)](#ios-metadata-push) | iOS | BLOCKER |
| [App Store version ready for review(심사 가능한 App Store 버전)](#ios-submittable) | iOS | BLOCKER |
| [App Store screenshots(App Store 스크린샷)](#ios-screenshots) | iOS | BLOCKER |
| [App Store listing compliance(App Store 리스팅 규정 준수)](#ios-compliance) | iOS | BLOCKER |
| [Latest store upload completed(최신 스토어 업로드 완료)](#and-upload-done) | Android | BLOCKER |
| [Listing metadata ready to push(리스팅 메타데이터 푸시 준비)](#and-metadata-push) | Android | BLOCKER |
| [Play production track(Play 프로덕션 트랙)](#and-submittable) | Android | BLOCKER |
| [Play production live status(Play 프로덕션 게시 상태)](#and-w-live) | Android | WARNING |
| [Play production track(Play 프로덕션 트랙)](#and-w-state) | Android | WARNING |

## iOS — 차단 문제(Blockers)

iOS 앱을 제출하려면 아래 문제를 해결해야 해요. 이 단계에는 iOS 경고가 없어요.

<a id="ios-upload-done"></a>

### Latest store upload completed(최신 스토어 업로드 완료)

**BLOCKER** 처리가 끝난 빌드를 찾을 수 없어요.

#### 어떤 문제인가요?

App Store Connect에 Apple의 처리가 끝나 심사에 제출할 수 있는 빌드가 없다는 뜻이에요.

Apple은 업로드한 빌드를 처리하는 데 보통 15~30분이 걸려요.

#### 해결 방법

1. **Upload to store**(스토어에 업로드)로 돌아가 업로드를 성공적으로 마치세요.
2. Apple이 빌드를 처리할 때까지 15~30분 기다리세요. **App Store Connect > 활동**에서 빌드가 올라왔는지 볼 수 있어요.
3. 빌드가 처리 완료로 표시되면 이 화면으로 돌아와 다시 제출하세요.

오래 기다려도 상태가 바뀌지 않으면 새 빌드를 만들어 다시 업로드하세요.

#### 해결했는지 확인하기

**검토 제출** 체크리스트로 돌아가 **I have fixed all blocking issues**를 체크하고 **인증**을 선택하세요.

<a id="ios-metadata-push"></a>

### Listing metadata ready to push(리스팅 메타데이터 푸시 준비)

**BLOCKER** Apple이 리스팅 필드를 하나 이상 거부했어요.

#### 어떤 문제인가요?

**Agency App Manager**(에이전시 앱 관리자)가 제출 전에 App Store 리스팅을 검증했는데, Apple의 API가 필드를 하나 이상 거부했어요.

흔한 원인은 다음과 같아요.

- 4,000자를 넘는 설명
- 전체 100자를 넘거나 경쟁사 이름이 들어 있는 키워드
- 올바르지 않거나 열리지 않는 URL
- 사용할 수 없는 문자가 들어간 앱 이름
- 비어 있거나 너무 긴 프로모션 텍스트

#### 해결 방법

1. 체크리스트에 표시된 오류 상세를 확인하세요. 문제가 된 필드 이름이 나와 있어요.
2. **Agency App Manager**에서 **Distribution**(배포) > **프로필**로 이동해 **앱 세부 정보**를 열고 해당 필드를 고치세요.
3. 흔한 수정 방법은 다음과 같아요. 설명을 4,000자 미만으로 줄이고, 모든 URL이 **https://**로 시작하며 누구나 열 수 있는지 확인하고, 키워드에서 경쟁사 브랜드 이름을 빼세요.
4. **변경사항 저장**을 선택하세요.

#### 해결했는지 확인하기

**검토 제출** 체크리스트로 돌아가 **I have fixed all blocking issues**를 체크하고 **인증**을 선택하세요.

#### 비디오 튜토리얼

[보기: 리스팅 메타데이터 수정하기](https://app.arcade.software/share/qPTA8hxcxaE6KcWFX1Ge)

<a id="ios-submittable"></a>

### App Store version ready for review(심사 가능한 App Store 버전)

**BLOCKER** 현재 상태로는 이 버전을 제출할 수 없어요.

#### 어떤 문제인가요?

App Store Connect의 버전이 제출할 수 없는 상태예요. 아래 세 가지 중 어디에 해당하는지 확인하세요.

![충돌하는 버전과 해결 단계가 체크리스트에 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079612335/original/cW7foW5146IjXNcS5noCOCKHmzJdbzTd-Q.png)

체크리스트에는 충돌하는 버전과 해결 단계가 표시돼요.

#### 해결 방법

##### 심사 대기 중이거나 심사 중인 경우

제출한 내용이 이미 Apple에 넘어간 상태예요. 심사가 끝날 때까지 기다리세요. 제출을 철회한 뒤 다시 제출해야 하는 경우가 아니면 따로 할 일은 없어요.

##### Apple이 거부했거나 직접 거부한 경우

**App Store Connect > Resolution Center**(해결 센터)에서 사유를 확인하세요. Apple이 지적한 문제를 고치고, 새 빌드를 업로드한 뒤 다시 제출하세요.

##### 버전이 없거나 이미 출시된 경우

업로드한 빌드의 버전이 App Store Connect에 없거나 이미 출시된 상태예요. App Store Connect에서 새 버전을 만들고 다시 업로드하세요.

#### 해결했는지 확인하기

**검토 제출** 체크리스트로 돌아가 **I have fixed all blocking issues**를 체크하고 **인증**을 선택하세요.

#### 비디오 튜토리얼

[보기: App Store 심사 가능 버전 문제 수정하기](https://app.arcade.software/share/DA6L9r5ee1NSIKsEC0lY)

<a id="ios-screenshots"></a>

### App Store screenshots(App Store 스크린샷)

**BLOCKER** 필수 iPhone 스크린샷이 없어요.

#### 어떤 문제인가요?

Apple은 가장 큰 iPhone 화면 크기마다 스크린샷을 최소 1장 요구해요. 이 버전에는 해당 스크린샷이 없어요.

사용할 수 있는 크기는 다음과 같아요.

- iPhone 6.5인치: 1242 × 2688 px, 가로 모드는 2688 × 1242 px
- iPhone 6.7인치: 1290 × 2796 px, 가로 모드는 2796 × 1290 px

#### 해결 방법

1. **App Store Connect**에서 앱을 열고 버전을 선택한 뒤 **App Screenshots and Previews**(앱 스크린샷 및 미리보기)로 이동하세요.
2. **iPhone 6.5"** 또는 **iPhone 6.7"**를 선택하고 스크린샷을 1장 이상 업로드하세요. 최대 10장까지 올릴 수 있어요.
3. 스크린샷은 위에 적힌 픽셀 크기와 정확히 같아야 해요.

6.7인치 스크린샷을 올리면 Apple이 6.5인치 크기에도 그대로 인정해요. 그래서 한 세트만 올리면 돼요.

#### 해결했는지 확인하기

**검토 제출** 체크리스트로 돌아가 **I have fixed all blocking issues**를 체크하고 **인증**을 선택하세요.

<a id="ios-compliance"></a>

### App Store listing compliance(App Store 리스팅 규정 준수)

**BLOCKER** 필수 규정 준수 정보가 없어요.

#### 어떤 문제인가요?

App Store Connect에서 필수 규정 준수 필드를 하나 이상 채우지 않았어요. 해당하는 항목은 체크리스트에 이름이 표시돼요.

![아직 채우지 않은 규정 준수 필드가 체크리스트에 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079612303/original/sD8o9nUI3Mb6S5PVdSsm0h3edyB66yEi0g.png)

체크리스트에는 아직 비어 있는 규정 준수 필드의 이름이 표시돼요.

#### 해결 방법

##### 저작권

App Store Connect에서 버전을 열고 **일반 > 저작권**으로 이동하세요. 저작권 문구를 입력하세요. 예를 들어 연도 뒤에 회사 이름을 적으면 돼요.

##### 콘텐츠 권리

버전 화면에서 콘텐츠 권리 질문에 답하세요. 앱이 이미지나 음악처럼 내가 소유하지 않은 콘텐츠를 쓰는지 묻는 질문이에요.

##### 연령 등급

버전 화면에서 **Age Rating**(연령 등급)을 열고 설문에 답하세요. Apple은 앱 내 제어 및 기능, 성숙한 주제, 의료 또는 웰니스 콘텐츠, 선정성 또는 노출, 폭력, 우연에 좌우되는 활동을 물어요. Apple은 마지막 단계에서 답변을 바탕으로 등급을 계산하고, 이 단계에서 원하면 등급을 더 높일 수도 있어요.

##### 앱 개인정보

**App Store Connect > App Privacy**(앱 개인정보)에서 앱이 어떤 데이터를 수집하고 왜 수집하는지 묻는 설문을 완료하세요. iOS 14부터 필수예요.

##### 가격

**App Store Connect > Pricing and Availability**(가격 및 사용 가능 여부)에서 가격을 설정하세요. 무료 앱도 무료(Free)를 직접 선택해야 해요.

#### 해결했는지 확인하기

**검토 제출** 체크리스트로 돌아가 **I have fixed all blocking issues**를 체크하고 **인증**을 선택하세요.

#### 비디오 튜토리얼

[보기: App Store 리스팅 규정 준수 문제 수정하기](https://app.arcade.software/share/ItJOZk8kG9Cz9jQwYjra)

## Android — 차단 문제(Blockers)

Android 앱을 제출하려면 아래 문제를 해결해야 해요.

<a id="and-upload-done"></a>

### Latest store upload completed(최신 스토어 업로드 완료)

**BLOCKER** 완료된 업로드를 찾을 수 없어요.

#### 어떤 문제인가요?

Google Play의 내부 트랙에 업로드가 성공한 빌드가 없어서, 심사에 제출할 수 있는 빌드가 없다는 뜻이에요.

#### 해결 방법

1. **Upload to store**로 돌아가 내부 테스트 트랙에 업로드를 성공적으로 마치세요.
2. **Play Console > Testing > Internal testing**(테스트 > 내부 테스트)에 빌드가 보이는지 확인하세요.
3. 업로드가 확인되면 이 화면으로 돌아와 다시 제출하세요.

오래 기다려도 진전이 없으면 새 빌드를 만들어 다시 업로드하세요.

#### 해결했는지 확인하기

**검토 제출** 체크리스트로 돌아가 **I have fixed all blocking issues**를 체크하고 **인증**을 선택하세요.

<a id="and-metadata-push"></a>

### Listing metadata ready to push(리스팅 메타데이터 푸시 준비)

**BLOCKER** Google이 리스팅 필드를 하나 이상 거부했어요.

#### 어떤 문제인가요?

**Agency App Manager**가 Play Store 리스팅을 검증했는데, Google의 API가 필드를 하나 이상 거부했어요.

흔한 원인은 다음과 같아요.

- 80자를 넘는 간단한 설명
- 4,000자를 넘는 전체 설명
- 설명 안에 들어 있는 전화번호나 URL
- 콘텐츠 등급 누락
- Google이 리스팅 텍스트에 허용하지 않는 콘텐츠

#### 해결 방법

1. 체크리스트에 표시된 검증 오류를 확인하세요. 문제가 된 필드 이름이 나와 있어요.
2. **Agency App Manager**에서 **Distribution** > **프로필**로 이동해 **앱 세부 정보**를 열고 해당 필드를 고치세요.
3. 콘텐츠 등급이 없다면 **Play Console > Store presence > Content rating**(스토어 입점 정보 > 콘텐츠 등급)에서 완료하세요.
4. **변경사항 저장**을 선택하세요.

#### 해결했는지 확인하기

**검토 제출** 체크리스트로 돌아가 **I have fixed all blocking issues**를 체크하고 **인증**을 선택하세요.

<a id="and-submittable"></a>

### Play production track(Play 프로덕션 트랙)

**BLOCKER** 현재 상태로는 이 빌드를 제출할 수 없어요.

#### 어떤 문제인가요?

빌드가 Play 트랙에 없거나, 이미 게시되었거나, 거부된 상태예요. 어디에 해당하는지 확인하세요.

#### 해결 방법

##### 어느 트랙에도 없는 경우

빌드를 아직 트랙에 업로드하지 않았거나, 내부 테스트 트랙에 활성 릴리스가 없어요. 업로드 단계로 돌아가 업로드를 마치세요.

##### 이미 게시된 경우

이 버전은 이미 프로덕션에 게시되어 있어요. 다음 릴리스에는 버전 코드가 더 높은 새 빌드를 만드세요.

##### Google Play가 거부한 경우

Google이 제출을 거부했어요. Google Play에서 온 거부 이메일을 확인하고, 지적된 문제를 고친 뒤 다시 업로드하고 제출하세요.

#### 해결했는지 확인하기

**검토 제출** 체크리스트로 돌아가 **I have fixed all blocking issues**를 체크하고 **인증**을 선택하세요.

## Android — 경고(Warnings)

아래 경고는 제출을 막지 않아요.

<a id="and-w-live"></a>

### Play production live status(Play 프로덕션 게시 상태)

**WARNING** 이 경고는 제출을 막지 않아요.

#### 어떤 문제인가요?

앱이 아직 Google Play 프로덕션에 게시되지 않았어요. Google은 첫 프로덕션 릴리스를 Play Console에서 직접 게시하도록 요구해요. 자동화할 수 없어요.

첫 릴리스가 게시되면 이후 업데이트는 자동으로 처리할 수 있어요.

#### 해결 방법

1. **Play Console > 프로덕션**에 게시할 준비가 된 릴리스가 보일 거예요.
2. 릴리스 상세 정보를 확인한 뒤 **Review release**(릴리스 검토)와 **Start rollout to Production**(프로덕션으로 출시 시작)을 차례로 선택하세요.
3. 출시 비율을 고르고 확인하세요.

첫 프로덕션 릴리스를 게시하면 이 경고는 더 나오지 않아요. 이후 업데이트는 모두 완전히 자동화할 수 있어요.

#### 해결했는지 확인하기

출시를 시작한 뒤 15~30분 기다렸다가 배포 마법사로 돌아와 상태가 업데이트되었는지 확인하세요.

<a id="and-w-state"></a>

### Play production track(Play 프로덕션 트랙)

**WARNING** 제출을 위해 할 일은 없어요.

#### 어떤 문제인가요?

이 경고는 두 가지 경우에 나타나요. 어디에 해당하는지 확인하세요.

#### 해결 방법

##### 앱이 Google 심사 중인 경우

Google이 제출한 내용을 심사하고 있어요. 할 일은 없어요. 심사는 보통 1~7일 걸리고, 끝나면 이메일을 받아요.

##### 승인됐지만 출시가 시작되지 않은 경우

Google이 릴리스를 승인했지만 아직 게시를 기다리고 있어요. **Play Console > 프로덕션**으로 이동해 **Start rollout**(출시 시작)을 선택하세요.

#### 해결했는지 확인하기

앱이 심사 중이라면 따로 확인할 필요가 없어요. 출시를 시작했다면 15~30분 기다렸다가 돌아와 상태가 업데이트되었는지 확인하세요.

## 자주 묻는 질문

### 빌드를 업로드했는데 체크리스트에 완료된 업로드가 없다고 나와요. 왜 그런가요?

Apple은 업로드한 빌드를 처리하는 데 15~30분이 걸려요. **App Store Connect**의 **활동**을 확인하고, 빌드가 처리 완료로 표시되면 다시 시도하세요.

### 앱이 이미 Apple에서 심사 중이에요. 제가 할 일이 있나요?

아니요. 심사가 끝날 때까지 기다리세요. Apple이 제출을 거부했을 때만 조치하면 돼요. 이 경우 사유는 **Resolution Center**에서 볼 수 있어요.

### Apple은 어떤 스크린샷 크기를 요구하나요?

iPhone 6.5인치(1242 × 2688 px) 또는 iPhone 6.7인치(1290 × 2796 px) 크기의 스크린샷이 최소 1장 필요해요. 6.7인치 스크린샷을 올리면 Apple이 두 크기 모두에 인정해요.

### Google Play 첫 릴리스는 왜 직접 게시해야 하나요?

Google은 첫 프로덕션 릴리스를 Play Console에서 직접 게시하도록 요구해요. 첫 릴리스가 게시된 뒤에는 이후 업데이트를 자동으로 처리할 수 있어요.

### Google이 앱을 승인했는데 게시가 안 돼요. 어떻게 하나요?

릴리스가 게시를 기다리고 있는 상태예요. Play Console에서 **프로덕션**을 열고 **Start rollout**을 선택하세요.

## 다른 단계 문제 해결

배포 과정은 세 단계로 이뤄져 있어요. 이 문서는 3단계를 다뤄요.

- [화이트라벨 모바일 앱 빌드 문제 해결](troubleshooting-app-build-issues-for-white-label-mobile-apps.md)
- [화이트라벨 모바일 앱 스토어 업로드 문제 해결](troubleshooting-upload-to-store-issues-for-white-label-mobile-apps.md)
