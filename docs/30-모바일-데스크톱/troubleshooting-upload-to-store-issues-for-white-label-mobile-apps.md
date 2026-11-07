---
원문: /support/solutions/articles/155000008551-troubleshooting-upload-to-store-issues-for-white-label-mobile-apps
번역일: 2026-11-06
카테고리: 30-모바일-데스크톱
---

# 화이트라벨 모바일 앱 스토어 업로드 문제 해결

빌드가 끝나면 **Agency App Manager**(에이전시 앱 관리자)가 App Store나 Google Play에 업로드할 수 있는지 검사해요. 이 문서에서는 2단계 **Upload to store**(스토어에 업로드)에서 나오는 문제와 해결 방법을 안내해요.

이 검사에서는 빌드 파일이 있는지, 스토어에 빌드를 받을 수 있는 열린 버전이 있는지, 같은 빌드를 이미 올리지 않았는지 확인해요.

## 검사 결과는 두 가지예요

- **BLOCKER**(차단): 해결해야 업로드를 시작할 수 있어요.
- **WARNING**(경고): 업로드를 막지는 않아요. 이 단계의 경고 4개 중 3개는 따로 할 일이 없어요.

**업로드 차단 문제는 대부분 새 빌드를 만들면 해결돼요.** 빌드 파일이 없거나 빌드 번호가 이미 스토어에 있다면, 빌드 단계로 돌아가 새 빌드를 시작하세요. **Agency App Manager**가 새 빌드 번호를 자동으로 부여해요.

검사를 모두 통과하면 **계속**을 선택해 업로드를 시작하세요.

## 전체 과정 영상으로 보기

스토어별로 빌드의 처음부터 끝까지 따라가는 영상이에요.

 

## 빠른 참조

문제 이름을 선택하면 해당 설명으로 바로 이동해요.

| 문제 | 스토어 | 유형 |
| --- | --- | --- |
| [업로드 가능한 iOS 빌드](#ios-artifact) | iOS | BLOCKER |
| [편집 가능한 App Store 버전](#ios-editable) | iOS | BLOCKER |
| [심사 중이 아닌 버전](#ios-inreview) | iOS | BLOCKER |
| [메타데이터 대상 버전](#ios-metadata-target) | iOS | BLOCKER |
| [업로드 가능한 빌드 번호](#ios-build-number) | iOS | BLOCKER |
| [편집 가능한 App Store 버전](#ios-w-editable) | iOS | WARNING |
| [메타데이터 대상 버전](#ios-w-metadata) | iOS | WARNING |
| [캐시와 App Store 버전 불일치](#ios-w-version) | iOS | WARNING |
| [업로드 가능한 Android 빌드](#and-artifact) | Android | BLOCKER |
| [Play Console 게시 권한](#and-track) | Android | BLOCKER |
| [업로드 가능한 버전 코드](#and-version-code) | Android | BLOCKER |
| [업로드 가능한 버전 코드](#and-w-version-code) | Android | WARNING |

## iOS — BLOCKER

아래 문제를 해결해야 iOS 빌드를 업로드할 수 있어요.

<a id="ios-artifact"></a>

### 업로드 가능한 iOS 빌드 (iOS build available to upload)

**BLOCKER** 빌드 파일을 찾을 수 없어요.

#### 어떤 문제인가요?

iOS 앱 바이너리가 없어서 업로드할 파일이 없어요.

보통 빌드가 성공적으로 끝나지 않았거나, 빌드가 캐시에서 만료됐을 때 생겨요.

#### 해결 방법

1. 빌드 단계로 돌아가 새 빌드를 시작하세요.
2. 빌드가 성공적으로 끝날 때까지 기다린 뒤 업로드 단계로 넘어가세요.
3. 빌드가 계속 실패하면 앱 맞춤 설정에 잘못된 값이 없는지 확인하세요. 로고 크기나 색상 형식이 올바르지 않은 경우가 있어요.

#### 해결 확인

**Agency App Manager**의 **Upload to store** 체크리스트로 돌아가 검사를 다시 실행하세요. 검사를 통과하면 **계속**을 선택해 업로드를 진행하세요.

<a id="ios-editable"></a>

### 편집 가능한 App Store 버전 (Editable App Store version)

**BLOCKER** App Store Connect에 열린 초안 버전이 없어요.

#### 어떤 문제인가요?

빌드를 올릴 수 있는 열린 초안 버전이 App Store Connect에 없어요. 이 상황에서는 초안 버전이 자동으로 만들어지지 않아요.

이미 출시한 앱이 있고, 이전 버전을 같은 버전 번호로 제출했을 때 주로 생겨요.

#### 해결 방법

1. App Store Connect에서 앱을 열고 **+ Version or Platform**(버전 또는 플랫폼 추가)을 선택하세요.
2. 빌드의 버전 번호와 같은 번호로 새 버전을 만드세요.
3. **Agency App Manager**로 돌아와 업로드를 다시 시도하세요.

#### 해결 확인

**Agency App Manager**의 **Upload to store** 체크리스트로 돌아가 검사를 다시 실행하세요. 검사를 통과하면 **계속**을 선택해 업로드를 진행하세요.

<a id="ios-inreview"></a>

### 심사 중이 아닌 버전 (Version not in App Review)

**BLOCKER** 해당 버전이 현재 Apple에 있어요.

#### 어떤 문제인가요?

대상 버전이 심사 대기 중이거나 심사 중이에요. Apple은 이미 제출한 버전에 새 빌드를 올릴 수 없게 하므로, 심사가 끝날 때까지 기다려야 해요.

#### 해결 방법

1. **App Store Connect > 활동**에서 심사 상태를 확인하세요. Apple 심사는 보통 24~48시간이 걸려요.
2. 심사가 승인(approved)되면 **Agency App Manager**에서 제출을 이어서 진행하세요.
3. 심사가 거절(rejected)되면 새 빌드를 만들지 않고 App Store Connect에서 같은 빌드를 바로 다시 제출할 수 있어요. 거절 사유를 확인하고 App Store Connect에서 문제를 고친 뒤 다시 제출하세요.

제출한 빌드를 직접 거절하지 마세요. 이미 심사 중인 제출을 거절하면 심사가 초기화되어 대기열의 맨 뒤로 가요. 새 빌드를 제출해야 한다면 현재 빌드가 출시될 때까지 기다리거나 하이퍼클래스 고객지원에 문의하세요.

#### 해결 확인

**Agency App Manager**의 **Upload to store** 체크리스트로 돌아가 검사를 다시 실행하세요. 검사를 통과하면 **계속**을 선택해 업로드를 진행하세요.

<a id="ios-metadata-target"></a>

### 메타데이터 대상 버전 (Metadata target version)

**BLOCKER** 대상 버전을 확인할 수 없어요.

#### 어떤 문제인가요?

**Agency App Manager**가 빌드와 스토어 등록 정보를 App Store Connect의 어느 버전에 연결해야 하는지 알 수 없어요.

**Prepare for Submission**(제출 준비 중) 상태의 버전이 없고 새 버전도 자동으로 만들 수 없을 때 생겨요.

#### 해결 방법

1. App Store Connect에서 앱의 버전 상태를 확인하세요.
2. App Store Connect의 버전 번호가 빌드 버전과 다르면 같게 수정하세요. 이 오류는 번호가 다른 경우가 가장 흔해요.
3. 모든 버전이 심사 중이거나 이미 출시된 상태라면 **+ Version**(버전 추가)을 선택해 새 버전을 만드세요.
4. 버전이 **Prepare for Submission** 상태인지 확인한 뒤 업로드를 다시 시도하세요.

#### 해결 확인

**Agency App Manager**의 **Upload to store** 체크리스트로 돌아가 검사를 다시 실행하세요. 검사를 통과하면 **계속**을 선택해 업로드를 진행하세요.

<a id="ios-build-number"></a>

### 업로드 가능한 빌드 번호 (Build number available for upload)

**BLOCKER** 이 빌드 번호는 이미 App Store Connect에 있어요.

#### 어떤 문제인가요?

Apple은 업로드하는 빌드마다 고유한 빌드 번호를 요구해요. 이전 업로드에서 이 번호를 이미 썼기 때문에, 같은 번호로 다시 올리면 Apple이 거부해요.

#### 해결 방법

1. 빌드 단계로 돌아가 새 빌드를 시작하세요. **Agency App Manager**가 새 빌드 번호를 자동으로 부여해요.
2. 같은 파일을 다시 업로드하지 마세요. Apple은 항상 거부해요.

#### 해결 확인

**Agency App Manager**의 **Upload to store** 체크리스트로 돌아가 검사를 다시 실행하세요. 검사를 통과하면 **계속**을 선택해 업로드를 진행하세요.

## iOS — WARNING

업로드를 막지 않아요. 이 중 두 가지는 자동으로 처리돼요.

<a id="ios-w-editable"></a>

### 편집 가능한 App Store 버전 (Editable App Store version)

**WARNING** 업로드를 계속할 수 있어요.

#### 어떤 문제인가요?

App Store Connect에 출시된 버전만 있고 열린 초안은 없어요. **Agency App Manager**가 빌드의 버전 번호로 새 초안 버전을 자동으로 만들어요.

#### 해결 방법

**따로 할 일이 없어요.** **Agency App Manager**가 알아서 처리해요.

#### 해결 확인

업로드가 끝나면 App Store Connect에서 새 버전이 예상한 버전 번호로 만들어졌는지 확인하세요.

<a id="ios-w-metadata"></a>

### 메타데이터 대상 버전 (Metadata target version)

**WARNING** 업로드를 계속할 수 있어요.

#### 어떤 문제인가요?

메타데이터 대상을 찾지 못했지만 **Agency App Manager**가 자동으로 해결할 수 있어요. 업로드는 그대로 진행돼요.

#### 해결 방법

**따로 할 일이 없어요.** 자동으로 해결돼요.

#### 해결 확인

확인할 필요가 없어요. 업로드는 평소처럼 계속돼요.

<a id="ios-w-version"></a>

### 캐시와 App Store 버전 불일치 (Cache vs App Store version)

**WARNING** 업로드를 계속할 수 있지만, 먼저 확인하세요.

#### 어떤 문제인가요?

빌드의 버전 번호가 App Store Connect에서 현재 열려 있는 버전과 달라요. 예를 들어 빌드는 2.4.0인데 App Store Connect에는 2.3.0 초안이 열려 있는 경우예요.

업로드는 진행되지만 빌드가 엉뚱한 버전에 연결될 수 있어요.

![체크리스트에 두 버전 번호와 App Store Connect에서 번호를 맞추는 방법이 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079612319/original/_-wXIBi5VPLEHle2hoY44A98gphXeDhRkw.png)

체크리스트에 두 버전 번호와 App Store Connect에서 번호를 맞추는 방법이 표시돼요.

#### 해결 방법

1. App Store Connect에서 열린 초안의 버전 번호를 빌드와 같게 수정하거나, 맞지 않는 버전을 닫으세요.
2. 또는 빌드 단계로 돌아가 버전 번호가 같은 빌드를 새로 만드세요.

Apple은 초안 버전을 한 번에 하나만 허용해요. 첫 번째 버전이 열려 있는 동안에는 두 번째 버전을 추가할 수 없어요.

#### 해결 확인

**Agency App Manager**의 **Upload to store** 체크리스트로 돌아가 검사를 다시 실행하세요. 검사를 통과하면 **계속**을 선택해 업로드를 진행하세요.

## Android — BLOCKER

아래 문제를 해결해야 Android 빌드를 업로드할 수 있어요.

<a id="and-artifact"></a>

### 업로드 가능한 Android 빌드 (Android build available to upload)

**BLOCKER** 빌드 파일을 찾을 수 없어요.

#### 어떤 문제인가요?

Android App Bundle이 없거나 제대로 만들어지지 않아서 업로드할 파일이 없어요.

#### 해결 방법

1. 빌드 단계로 돌아가 새 Android 빌드를 시작하세요.
2. 빌드가 끝날 때까지 기다린 뒤 업로드를 다시 시도하세요.

#### 해결 확인

**Agency App Manager**의 **Upload to store** 체크리스트로 돌아가 검사를 다시 실행하세요. 검사를 통과하면 **계속**을 선택해 업로드를 진행하세요.

<a id="and-track"></a>

### Play Console 게시 권한 (Play Console publishing access)

**BLOCKER** Google Play가 릴리스 편집을 거부했어요.

#### 어떤 문제인가요?

Google Play에서 권한 오류가 나왔어요. 서비스 계정은 정상적으로 로그인됐지만, 이 앱의 릴리스를 만들 수 있는 역할이 없어요.

#### 해결 방법

1. **Play Console > 셋업 > API access**(API 액세스)에서 목록의 서비스 계정을 찾으세요.
2. **권한 관리**를 선택하고, 해당 계정에 **관리자** 역할이 있는지 확인하세요.
3. **변경사항 저장**을 선택한 뒤, Google이 변경 내용을 적용할 때까지 15~30분 기다렸다가 다시 시도하세요.

Google Play의 권한 변경은 바로 적용되지 않아요. 저장 직후에도 검사가 실패하면 다른 설정을 바꾸기 전에 잠시 기다렸다가 다시 실행하세요.

#### 해결 확인

**Agency App Manager**의 **Upload to store** 체크리스트로 돌아가 검사를 다시 실행하세요. 검사를 통과하면 **계속**을 선택해 업로드를 진행하세요.

<a id="and-version-code"></a>

### 업로드 가능한 버전 코드 (Version code available for upload)

**BLOCKER** 이 버전 코드는 이미 Play Console에 있어요.

#### 어떤 문제인가요?

같은 Android 버전 코드의 빌드가 내부 테스트 또는 프로덕션 트랙에 이미 있어요. Google은 중복된 버전 코드를 받지 않아요.

#### 해결 방법

1. 빌드 단계로 돌아가 새 빌드를 시작하세요. 새 버전 코드가 자동으로 부여돼요.
2. 같은 파일을 다시 업로드하지 마세요. Google이 거부해요.

#### 해결 확인

**Agency App Manager**의 **Upload to store** 체크리스트로 돌아가 검사를 다시 실행하세요. 검사를 통과하면 **계속**을 선택해 업로드를 진행하세요.

## Android — WARNING

업로드를 막지 않아요.

<a id="and-w-version-code"></a>

### 업로드 가능한 버전 코드 (Version code available for upload)

**WARNING** 업로드를 계속할 수 있어요.

#### 어떤 문제인가요?

검사에서 명확한 응답이 오지 않아, 이 버전 코드가 Google Play에 이미 있는지 확인하지 못했어요. 그래도 업로드는 시도해요.

#### 해결 방법

**따로 할 일이 없어요.** 업로드를 계속 진행하고 결과를 지켜보세요.

#### 해결 확인

버전 코드가 중복되어 Google Play에서 업로드가 실패하면, 빌드 단계로 돌아가 새 빌드를 만드세요.

## 자주 묻는 질문

### 체크리스트에 빌드가 없다고 나와요. 어떻게 된 건가요?

빌드가 성공적으로 끝나지 않았거나 캐시에서 만료된 경우예요. 빌드 단계로 돌아가 새 빌드를 시작하고, 빌드가 끝날 때까지 기다린 뒤 업로드하세요.

### 무언가를 바꾼 뒤 같은 빌드를 다시 업로드할 수 있나요?

아니요. Apple과 Google 모두 이미 쓴 빌드 번호나 버전 코드를 다시 쓰는 빌드는 거부해요. 항상 새 빌드를 만드세요. 새 번호는 자동으로 부여돼요.

### 앱이 심사 중인데 업로드할 수 있나요?

아니요. Apple은 이미 심사 중인 버전에 새 빌드를 올릴 수 없게 해요. 심사가 끝날 때까지 기다리세요. 제출을 직접 철회하지 마세요. 철회하면 심사 대기열이 처음부터 다시 시작돼요.

### 버전 불일치 경고는 무슨 뜻인가요?

빌드의 버전 번호가 App Store Connect에 열려 있는 초안 버전과 달라요. 업로드는 진행되지만 엉뚱한 버전에 연결될 수 있으니, 먼저 번호를 맞추는 것이 좋아요.

## 함께 보면 좋은 문서

배포 과정은 세 단계로 이루어져 있어요. 이 문서는 3단계 중 2단계를 다뤄요.

- [화이트라벨 모바일 앱 빌드 문제 해결](troubleshooting-app-build-issues-for-white-label-mobile-apps.md)
- [화이트라벨 모바일 앱 검토 제출 문제 해결](troubleshooting-submit-for-review-issues-for-white-label-mobile-apps.md)
