---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009476-field-mapping-and-iframe-form-tracking-in-external-tracking
번역일: 2026-11-06
카테고리: 44-신기능-2026
---

# 외부 트래킹의 필드 매핑과 iFrame 폼 추적

**설정 > 외부 트래킹**(External Tracking)에서 도메인별로 추적을 제어하고, 어떤 폼이 CRM 연락처를 만들지 고르고, 폼 필드가 연락처 정보에 연결되는 방식을 바꿀 수 있어요. 다른 도메인의 iFrame에 넣은 폼의 제출도 가져올 수 있어요. 이 문서에서는 이 기능의 설정 방법을 안내해요.

[동영상](https://jumpshare.com/embed/tcTgCMvyGdpdWtSqOXwK)

## 필드 매핑 제어와 iFrame 폼 추적이란?

필드 매핑 제어와 iFrame 폼 추적은 외부 트래킹에 추가된 기능이에요. 웹사이트 이벤트와 폼 제출을 더 세밀하게 관리할 수 있어요. 도메인별로 추적을 관리하고, CRM 필드 매핑을 직접 바꾸고, 트래킹 스크립트 2개로 지원되는 iFrame 폼의 제출을 가져올 수 있어요.

이 기능은 **설정 > 외부 트래킹**에서 쓸 수 있어요. 단, 해당 서브 계정에서 **실험실**(Labs)을 통해 새 외부 트래킹이 켜져 있어야 해요.

## 주요 장점

외부 웹사이트 추적과 폼 제출 관리가 더 유연해지고, 연락처 데이터도 더 정확해져요.

- 도메인별 제어: 도메인마다 **페이지 조회수**, **폼 분석**, **폼 제출**을 켜거나 끌 수 있어요.
- 일괄 변경: 여러 도메인의 추적 설정을 한 번에 바꿀 수 있어요.
- 폼 선택 추적: **폼 분석**은 끄지 않고도 CRM 연락처를 만들 폼만 고를 수 있어요.
- 필드 매핑 직접 설정: 폼 필드를 표준 CRM 연락처 필드에 연결하고, 자동 매핑이 틀렸다면 고칠 수 있어요.
- 개인정보 보호: **추적 안 함**으로 선택 필드를 제외할 수 있어요. 비밀번호, 결제, 숨김 필드는 수집되지 않아요.
- iFrame 추적: 지원되는 다른 도메인의 임베드 폼에서 제출 내용을 가져올 수 있어요.
- 기존 설정 호환: 기존 스크립트와 자동 매핑은 바꾸지 않아도 계속 작동해요.

## 도메인별 추적 설정

도메인별 설정에서는 외부 웹사이트마다 하이퍼클래스가 추적할 항목을 정해요. **설정** 탭에는 감지된 도메인, 추적 상태, 폼 개수, 이벤트 스위치가 보여요.

도메인마다 독립된 스위치가 3개 있어요.

- **페이지 조회수**: 웹사이트 방문을 추적해요.
- **폼 분석**: 폼 참여도와 성과를 추적해요.
- **폼 제출**: 폼 제출 추적을 제어해요.

도메인 상태는 **활성**, **매핑 필요**, **추적 중인 폼 없음**, **추적 안 함** 중 하나로 표시돼요.

**상태**와 **폼 유형**(HTML/iFrame) 필터를 쓰거나 검색으로 특정 도메인을 찾을 수도 있어요.

![도메인별 추적 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084330745/original/cobTmcBVaelPEXspqc6l7u4VsT-zo7DdgQ.png?1793115144)

## 폼 추적과 필드 매핑

폼별 설정에서는 어떤 폼의 제출을 하이퍼클래스로 보낼지, 그 값을 CRM 연락처에 어떻게 저장할지 정해요.

도메인을 열면 감지된 폼, 페이지 이름, 매핑 진행 상황, 폼별 **추적** 스위치가 보여요.

- **추적**을 켠 경우: 도메인의 **폼 제출** 추적도 켜져 있으면, 폼 제출로 CRM 연락처가 만들어질 수 있어요.
- **추적**을 끈 경우: 외부 트래킹으로는 연락처가 만들어지지 않아요. **폼 분석**이 켜져 있으면 폼 분석은 계속돼요.

![폼별 추적 스위치 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084330888/original/ItJwVDpbjYK85F00ttRRr-kSU8wmMqLMkg.png?1793115186)

### 필드 매핑 옵션

하이퍼클래스는 인식된 폼 필드를 CRM 연락처 필드에 자동으로 연결해요. 이 연결은 **필드 매핑**에서 바꿀 수 있어요.

| 매핑 옵션 | 용도 |
| --- | --- |
| **Standard CRM field**(표준 CRM 필드) | **First Name**(이름), **Email**(이메일), **Phone**(전화번호), **Organization**(조직) 등 지원되는 필드에 연결해요. |
| **자동 매핑** | 하이퍼클래스의 자동 매칭을 그대로 써요. |
| **추적 안 함** | 선택 필드를 저장하지 않도록 제외해요. |
| **기본값으로 초기화** | 자동 매핑으로 되돌려요. |

{% hint style="warning" %}
**제한 사항**

- 직접 매핑은 표준 연락처 필드만 지원해요. 기존의 커스텀 필드 자동 매칭은 계속 작동해요.
- **필수 필드**는 **추적 안 함**으로 설정할 수 없어요.
- 매핑을 바꿔도 앞으로 들어오는 제출에만 적용돼요. 기존 연락처와 이미 들어온 제출은 바뀌지 않아요.
{% endhint %}

![필드 매핑 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084330933/original/xN0nBhHyNRhiRuq3CaGee1air34ONkr-4w.png?1793115217)

![필드 매핑 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084330988/original/Oka4H89ajMpprpuwptFGfzKsSJaxB00WdQ.png?1793115241)

## iFrame 폼 추적

iFrame 추적은 다른 도메인에서 호스팅되는 폼을 내 웹사이트에 임베드했을 때, 그 폼의 제출을 가져오는 기능이에요.

브라우저가 서로 다른 도메인 사이의 통신을 막기 때문에, 하이퍼클래스에서는 트래킹 스니펫이 2개 필요해요.

| 스니펫 | 설치 위치 |
| --- | --- |
| iFrame 소스 스니펫 | iFrame 안에서 실제 폼을 호스팅하는 페이지 |
| 상위 페이지 스니펫 | iFrame이 들어 있는 메인 웹사이트 페이지 |

소스 스니펫은 `data-parent-origin`으로 허용할 상위 웹사이트를 지정해요. 상위 페이지 스니펫은 `data-iframe-tracking="true"`로 데이터를 받아요.

{% hint style="warning" %}
**필수 조건**

- 스니펫 2개를 모두 설치해야 해요.
- 상위 출처(parent origin)가 `https`와 `www`까지 정확히 일치해야 해요.
- 소스 스니펫 하나에는 상위 출처를 하나만 설정할 수 있어요.
- 폼이 브라우저의 일반 submit 이벤트를 사용해야 해요.
- JavaScript만으로 제출하는 맞춤 폼과, 일부 Wix HTML 임베드 같은 지원되지 않는 중첩 iFrame은 추적할 수 없어요.
- 비밀번호, 결제, 숨김 필드는 제외돼요. 파일 업로드는 파일 이름만 기록돼요.
{% endhint %}

기존 외부 트래킹 설치는 다른 도메인의 iFrame 폼을 추적하려는 경우가 아니라면 바꿀 필요가 없어요.

## 도메인별 추적 설정하기

이벤트 설정을 도메인별로 또는 한꺼번에 바꿔서, 각 웹사이트가 하이퍼클래스로 보내는 데이터를 제어하세요.

1. **설정 > 외부 트래킹 > 설정**으로 이동하세요.
2. 검색이나 필터로 도메인을 찾으세요.
3. 필요에 따라 **페이지 조회수**, **폼 분석**, **폼 제출**을 켜거나 끄세요.
4. 여러 도메인을 한꺼번에 바꾸려면 도메인의 체크박스를 선택한 뒤 **대량 액션**에서 바꿀 이벤트 설정을 고르세요.

![도메인별 추적 설정 변경 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084331342/original/ROgjuacA2hpMuUKPcMcwmJy0SyYOt3LLbQ.png?1793115373)

## 폼 추적과 필드 매핑 설정하기

필드 매핑을 맞춰 두면 외부 폼 제출이 올바른 CRM 필드에 들어가고, 필요 없는 정보는 제외할 수 있어요.

1. **설정 > 외부 트래킹 > 설정**으로 이동한 뒤 도메인을 여세요.
2. 폼을 찾아 **추적** 스위치를 켜거나 끄세요.
3. **필드 매핑**을 클릭하고 자동 매핑 내용을 확인하세요.
4. 입력 항목마다 알맞은 CRM 필드를 선택하세요. 선택 필드는 **추적 안 함**으로 둘 수도 있어요.
5. **매핑 저장**을 클릭하세요. 자동 매칭으로 되돌리려면 **기본값으로 초기화**를 사용하세요.
6. 테스트 폼을 제출하고, 하이퍼클래스에 수집된 연락처 정보를 확인하세요.

![폼 추적 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084332832/original/_E-yTYzNL_PJ25qcrsrR7hFzv8AS0HdU6g.png?1793116096)

![필드 매핑 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084332875/original/GbwoVwpHING0jl8CskvsuMFu7AQ62s-xqQ.png?1793116122)

![매핑 저장 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084332944/original/js7Ip-ADHFBOL7qB7RnDRevwNEdqThiPkw.png?1793116152)

{% hint style="info" %}
매핑 변경은 앞으로 들어오는 제출에만 적용돼요. **필수 필드**는 계속 연락처 필드에 매핑되어 있어야 해요.
{% endhint %}

## iFrame 폼 추적 설정하기

스니펫 2개를 모두 설치하면 하이퍼클래스가 지원되는 다른 도메인의 임베드 폼 제출을 받을 수 있어요.

1. **설정 > 외부 트래킹 > 설치 > 트래킹 코드 > iFrame forms**(iFrame 폼)로 이동하세요.
2. **iFrame source**(iFrame 소스) 스니펫을 복사해서, 폼을 호스팅하는 페이지에 바로 설치하세요.
3. `data-parent-origin`을 메인 웹사이트의 정확한 출처로 설정하세요. 예: `https://www.example.com`
4. **parent page**(상위 페이지) 스니펫을 복사해서, iFrame이 들어 있는 메인 웹사이트 페이지에 설치하세요.
5. 두 페이지를 모두 게시하고 테스트 폼을 제출하세요.
6. **외부 트래킹 > 설정**으로 이동하세요. 메인 웹사이트 도메인을 찾아, 폼이 **폼 유형** **iFrame**으로 나타나는지 확인하세요.
7. 도메인을 열고 필요하면 **추적**을 켠 뒤 **필드 매핑**을 클릭해 매핑을 조정하고 **매핑 저장**을 선택하세요.

![iFrame 폼 트래킹 코드 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084331221/original/Pa6jdWhOzAcYar1Dj1vEu8t8BFWnMZMCXA.png?1793115326)

![iFrame 폼 설치 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084332676/original/wLeyHp56Q5DynfIQ3HVLcso22FQ_YTe4oA.png?1793115997)

![iFrame 폼 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084332733/original/NZXcbp2kgBrDGrb02X_zZ-Prx1BSyzyBKg.png?1793116040)

{% hint style="info" %}
문제 해결: iFrame 폼이 감지되지 않으면 아래를 확인하세요.

- 스크립트 2개가 모두 설치되어 있는지
- 상위 출처가 정확히 일치하는지
- 폼이 지원되는 submit 이벤트를 사용하는지
- 도메인 추적과 폼 추적이 모두 켜져 있는지
{% endhint %}

## 자주 묻는 질문

### 도메인에 '매핑 필요'가 떠요. 왜 그런가요?
감지된 폼 중 하나 이상에서 매핑 확인이 필요하다는 뜻이에요. 도메인을 열어 필드 매핑을 확인하세요.

### 연락처를 만들지 않고 폼 분석만 수집할 수 있나요?
네. **폼 분석**은 켜 두고, 해당 폼의 **추적** 스위치만 끄세요.

### 커스텀 연락처 필드를 직접 매핑할 수 있나요?
아니요. 지금은 직접 매핑이 표준 연락처 필드만 지원해요. 기존의 커스텀 필드 자동 매칭은 계속 작동해요.

### 필드 매핑을 바꾸면 기존 연락처도 업데이트되나요?
아니요. 변경 내용은 앞으로 들어오는 폼 제출에만 적용돼요.

### 필수 필드에 '추적 안 함'을 쓸 수 있나요?
아니요. **필수 필드**는 연락처 필드에 매핑되어 있어야 해요.

### iFrame 폼이 목록에 나타나지 않아요.
스니펫 2개가 모두 설치되어 있는지, 상위 출처가 일치하는지, 폼이 브라우저의 일반 submit 이벤트를 사용하는지 확인하세요.

### iFrame 소스 스니펫 하나를 여러 웹사이트에 쓸 수 있나요?
소스 스니펫 하나에는 상위 웹사이트 출처를 하나만 설정할 수 있어요. 사용할 웹사이트에 맞는 출처로 설정하세요.

### 기존 트래킹 스크립트를 업데이트해야 하나요?
아니요. 기존 트래킹 설정은 계속 작동해요. 추가 스니펫은 지원되는 다른 도메인의 iFrame 폼을 추적할 때만 필요해요.
