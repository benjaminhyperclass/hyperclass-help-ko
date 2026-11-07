---
원문: https://help.gohighlevel.com/support/solutions/articles/155000008748-error-number-is-associated-with-another-waba-coex-
번역일: 2026-11-07
카테고리: 31-리셀링
---

# WhatsApp Coexistence: 번호가 다른 WABA와 이미 연결되어 있다는 오류

새 온보딩 플로우에서 Coexistence 설정이 막히는 이유와, 다시 시도하기 전에 확인할 내용을 안내해요.

{% hint style="info" %}
알려진 오류

"This phone number is already associated with another WhatsApp Business Account"

Coexistence 온보딩 중에 이 오류가 나타나요. 번호에 Cloud API WABA 연결이 이미 있을 때 발생해요. 번호가 WhatsApp Business 모바일 앱에만 연결된 것처럼 보여도 마찬가지예요.
{% endhint %}

## 개요

기존 WhatsApp Business 앱 번호를 WhatsApp Coexistence로 연결할 때, 이 번호가 이미 다른 WhatsApp Business Account(WABA)와 연결되어 있다는 오류가 나올 수 있어요.

번호가 WhatsApp Business 모바일 앱에만 연결된 것처럼 보여도 이 오류가 생길 수 있어요.

이 문서에서는 새 온보딩 플로우에서 이런 일이 생기는 이유와, Coexistence 온보딩을 다시 시도하기 전에 확인할 내용을 설명해요.

![WABA 연결 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080955606/original/ro4DfszebJpl3DGZ7e7ykk4ZUHLxM36Y9Q.png?1789468609)

## 새 온보딩 플로우에서 달라진 점

예전 온보딩 플로우에서는 WhatsApp Business Account를 직접 고를 수 있었어요. 이 단계가 이제는 보이지 않을 수 있고, 그래서 오류가 나타나는 방식도 달라졌어요.

**이전 플로우**

설정할 때 사용할 WhatsApp Business Account(WABA)를 직접 선택할 수 있었어요.

**새 플로우**

선택 단계가 나타나지 않을 수 있어요. 전화번호를 입력하면 그 번호의 기존 WABA 연결 여부를 백그라운드에서 자동으로 확인해요.

같은 전화번호가 이미 Cloud API WABA에 추가되어 있으면, 그 계정이 자동으로 인식되어 선택될 수 있어요. 번호가 이미 Cloud API WABA와 연결되어 있으므로 Coexistence 온보딩이 중단돼요.

{% hint style="info" %}
원인이 화면에 보이지 않는 이유

백그라운드 확인은 계정 선택 화면이 나오기 전에 이루어져요. 그래서 어떤 WABA가 일치했는지 보여 주는 단계가 화면에 없어요. 증상은 오류 메시지뿐이에요. 따라서 온보딩 플로우가 아니라 Business Portfolio에서 연결 상태를 직접 확인해야 해요.
{% endhint %}

## 오류: 번호가 다른 WABA와 연결되어 있어요

온보딩 중에 전화번호가 이미 다른 WABA와 연결되어 있다는 오류가 나올 수 있어요.

- 오류의 의미: 이 전화번호에서 기존 Cloud API WABA 연결이 확인되었다는 뜻이에요.
- 헷갈리는 이유: 지금 번호를 WhatsApp Business 모바일 앱에서 쓰고 있더라도, 백그라운드에는 기존 WABA 연결이 기록되어 있을 수 있어요.
- 문제가 아닌 것: 기기에 설치된 WhatsApp Business 앱의 문제가 아니에요. 아무것도 바꾸지 않고 온보딩을 다시 시도하면 같은 오류가 나와요.

## 해결 방법

Coexistence 온보딩을 다시 시작하기 전에 아래 항목을 먼저 확인하세요.

1. Business Portfolio에 로그인하세요. 조직에서 사용하는 Business Portfolio(Business Manager)를 열어요.
2. WhatsApp Business Account 목록을 확인하세요. 비즈니스에 연결된 WABA를 모두 살펴봐요.
3. 연결하려는 전화번호를 찾으세요. 그 번호가 기존 Cloud API WABA와 이미 연결되어 있는지 확인해요.
4. 필요 없는 연결을 제거하세요. 번호가 필요 없거나 오래된 WABA에 연결되어 있으면, 그 연결을 상황에 맞게 제거하거나 삭제해요.
5. 온보딩을 다시 시작하세요. 필요 없는 WABA 연결을 없앤 뒤 WhatsApp Coexistence 온보딩을 처음부터 다시 진행해요.

{% hint style="warning" %}
다른 WhatsApp 연동에서 사용 중인 WABA나 전화번호 연결은 제거하지 마세요. 변경하기 전에 해당 WABA가 더 이상 필요하지 않은지 먼저 확인하세요.
{% endhint %}

## 자주 묻는 질문

### 번호가 WhatsApp Business 앱에만 있는데 왜 이 오류가 나오나요?

휴대폰의 WhatsApp Business 앱과 Cloud API WABA 기록은 서로 별개예요. 이전 연동, 체험 사용, 다른 관리자의 설정 등으로 번호가 Cloud API WABA에 추가된 적이 있을 수 있어요. 그러면 평소 메시지를 앱에서 주고받더라도 그 연결은 기록으로 남아 있어요. 온보딩 확인은 앱이 아니라 WABA 기록을 기준으로 해요.

### 내 번호가 어떤 WABA에 연결되어 있는지 어떻게 확인하나요?

Business Portfolio(Business Manager)를 열고 비즈니스에 등록된 WhatsApp Business Account 목록을 확인하세요. 각 WABA에서 등록된 전화번호를 볼 수 있어요. 비즈니스가 소유한 WABA를 모두 확인하세요. 예상한 계정이 아니라 오래되었거나 쓰지 않는 계정에 연결이 남아 있을 수 있어요.

### 이제 설정할 때 맞는 WABA를 직접 고를 수 없나요?

새 온보딩 플로우에서는 WABA를 직접 선택하는 단계가 보이지 않을 수 있어요. 이제는 입력한 전화번호를 기준으로 계정이 자동으로 일치돼요. 그래서 오래된 연결은 온보딩 중에 우회하지 말고, 시작하기 전에 미리 정리해야 해요.
