---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006703-tiktok-dms-and-comment-automations
번역일: 2026-11-06
카테고리: 03-대화
---

# TikTok DM·댓글 자동화 설정하기

하이퍼클래스 워크플로우로 TikTok 다이렉트 메시지(DM)와 댓글 답글을 자동화하는 방법을 안내해요. 사용 조건에 맞는 TikTok 비즈니스 계정을 연결하고, 자동 응답을 설정한 뒤, 고객과의 대화를 하이퍼클래스에서 관리할 수 있어요.

## TikTok DM·댓글 자동화란?

TikTok DM·댓글 자동화를 쓰면 들어오는 TikTok 메시지와 게시물 댓글에 하이퍼클래스 워크플로우가 자동으로 응답해요. 트리거, 키워드 필터, 답장 액션을 설정해 두면 모든 메시지와 댓글에 직접 답하지 않아도 고객 반응을 관리할 수 있어요.

## TikTok 자동화의 장점

TikTok 자동화로 대화를 관리하고, 더 빠르게 답하고, 고객 반응을 하이퍼클래스 안에서 정리할 수 있어요.

- 통합 받은편지함: TikTok 대화를 SMS, 이메일, WhatsApp 등과 함께 하이퍼클래스 **대화**에서 관리해요. 탭을 오가지 않아도 돼요.
- 빠른 응답: 워크플로우로 24시간 즉시 답변을 보내 잠재 고객의 관심을 이어 가요.
- 자동화 기반의 업무 효율: 트리거와 액션으로 자동 답장, 리드 분류, 담당자 전달을 손쉽게 처리해요.
- 전환 중심 운영: TikTok에서 반응을 보인 사용자를 연락처와 육성 시퀀스로 이어 가고, 성과를 추적하고 리포트로 확인해요.
- 팀 단위 확장: 메시지가 많은 에이전시나 다지점 브랜드가 공유 받은편지함과 규칙으로 운영하기에 알맞아요.
- 실시간 알림: TikTok DM과 댓글 알림이 실시간으로 와서 팀이 **대화**에서 더 빨리 답할 수 있어요.

## TikTok 계정 요구 사항

TikTok 메시지 자동화는 사용 조건에 맞는 계정과 연동 권한이 있어야 해요. 설정 전에 아래 조건을 확인하면 연결이나 워크플로우 문제를 줄일 수 있어요.

- TikTok 메시지·댓글 자동화는 현재 미국에 등록된 TikTok 비즈니스 계정이 필요해요.
- 유럽경제지역(EEA), 스위스, 영국에서는 이 기능을 사용할 수 없어요.
- TikTok 계정은 **설정 > 연동 > TikTok**에서 연결되어 있어야 해요.

자세한 내용은 [TikTok 메시징 연동하기](../../42-통합/TikTok/integrate-tiktok-messaging.md)를 참고하세요.

## TikTok 계정 연동하기

시작하기 전에 TikTok 계정이 서브 계정에 연동되어 있는지 확인하세요.

서브 계정 대시보드에서 **설정 > 연동**으로 이동한 뒤 **TikTok** 카드를 선택하세요.

![설정 > 연동의 TikTok 카드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084850941/original/5qR79svojiNIpl6CNruGevsySfWUPsN44w.png?1793714611)

## TikTok용 대화 받은편지함

들어오는 DM과 댓글은 다른 채널과 똑같이 받은편지함에 동기화돼요. 그래서 다음과 같은 작업을 쉽게 할 수 있어요.

- 프로필 사진, 사용자 이름, 메시지 기록을 한 대화 스레드에서 확인해요.
- 텍스트, 이모지, 미디어, 저장해 둔 스니펫으로 직접 답장해요.
- 빠른 실행 버튼으로 메모, 태그, 작업을 추가해요.

```
전송 실패 확인 (TikTok)

TikTok 메시지가 전송되지 않으면 대화에서 더 분명한 피드백을 제공해요. 전송에 실패한 메시지를 확인하고 필요한 조치를 할 수 있어요.
```

## TikTok 자동화 트리거와 액션

하이퍼클래스는 TikTok 메시지와 댓글을 자동화하는 전용 워크플로우 구성 요소를 제공해요.

| 구성 요소 | 용도 |
| --- | --- |
| **TikTok – Comment(s) on a Post**(TikTok 게시물 댓글) | 조건에 맞는 댓글이 달리면 워크플로우를 시작해요. |
| **Customer Replied**(고객이 답장함) | 들어온 TikTok DM이 선택한 조건과 맞으면 워크플로우를 시작해요. |
| **Reply in Comments**(댓글에 답글) | 댓글에 공개 답글을 자동으로 달아요. |
| **TikTok Interactive Messenger**(TikTok 인터랙티브 메신저) | 지원되는 대화에서 TikTok 메시지를 자동으로 보내요. |

## TikTok DM 자동화

누군가 비공개 메시지를 보냈을 때 대화를 이어 가는 후속 응답을 자동화해요.

- **Customer Replied** 트리거에 **Reply Channel = TikTok** 필터를 함께 쓰면 TikTok DM에서만 워크플로우가 시작돼요.
- TikTok Interactive Messages 액션으로 WhatsApp 인터랙티브 메시지처럼 버튼이 있는 답장을 보낼 수 있어요. <!-- 검토 필요: 원문 내용이 서로 다름 (아래 설정 방법과 중요 사항에서는 버튼을 지원하지 않는다고 안내하고, 액션 이름도 'TikTok Interactive Messenger'로 다름) -->

## TikTok 댓글 자동화

댓글란을 리드 확보 창구로 활용할 수 있어요.

- 모든 게시물 또는 특정 게시물에 대해 **TikTok Comment(s) on a Reel** 트리거를 시작해요. <!-- 검토 필요: 원문 내용이 서로 다름 (트리거 이름이 'TikTok - Comment(s) on a Post'와 'TikTok Comment(s) on a Reel'로 혼용됨) -->
- **Reply in Comments** 액션으로 공개 답글을 달거나, 댓글에 좋아요를 누르거나, 사용자를 태그해요.
- 이어서 DM을 보내거나 연락처를 담당자에게 배정해요.

## 트리거 설정하기: TikTok Comment(s) on Reel

#### 1단계: 트리거 추가

워크플로우 빌더에서 **+ Add New Trigger**(새 트리거 추가)를 클릭하세요. 그런 다음 **TikTok - Comment(s) on a Post** 트리거를 선택하세요.

![TikTok 댓글 트리거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055994218/original/B4fMb4rCv5MZPkVg3USOjmM-hRHfQEu52g.png?1760464547)

#### 2단계: 계정 선택

트리거를 클릭하면 사이드바가 열려요. 여기에는 여러 필터가 있어요. 먼저 **Account**(계정)를 선택하세요.

필터에서 특정 계정을 선택하지 않으면 서브 계정에 연동된 모든 계정이 대상이 돼요. 그러면 자동화가 연결된 모든 계정에서 실행돼요.

![트리거 사이드바에서 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055994237/original/2cBuRls08NB9ZGkCKICAmfCsiNBAD0I9tQ.png?1760464588)

#### 3단계: 게시물 유형 선택

계정을 선택한 뒤 **Post Type**(게시물 유형)을 선택하세요. 게시물 유형은 **Published**(게시됨) 또는 **Custom**(사용자 지정) 중에서 고를 수 있어요.

- **Published** 게시물: **Published** 탭은 비즈니스 페이지의 모든 게시물을 불러와요. 이 선택에 따라 계정의 모든 게시물이 드롭다운으로 표시돼요.
- **Custom** 게시물: **Custom** 탭에서는 URL을 입력해 대상 게시물을 직접 지정해요.

```
게시물 선택 방식: 특정 게시물을 선택하지 않으면 연결된 TikTok 계정의 모든 게시물이 자동으로 포함돼요.
```

![게시물 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055994265/original/W8gtEHtViF_zVt7VKCR7b6p6CAlp5mkaJQ.png?1760464645)

#### 4단계: 게시물 또는 URL 선택

자동화를 실행할 게시물을 선택하거나 게시물 URL을 입력하세요.

![게시물 또는 URL 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055994406/original/-OekPY-yvKmo4wGSl8A1e8U1V0aKBB8uqg.png?1760464696)

#### 5단계: 일치 문구 지정

게시물을 선택한 뒤 댓글에서 찾을 문구를 입력하세요. **Contains Phrase**(문구 포함)와 **Exact Match**(정확히 일치) 두 가지 중에서 고를 수 있어요. 아래 예시를 보면 두 옵션의 차이를 이해하기 쉬워요. <!-- 검토 필요: 원문 내용이 서로 다름 (옵션 이름이 'Contains Phrase'와 'Contains Exact Phrase'로 혼용됨) -->

- **Exact Match**: 가격  
  수신 메시지: 가격  
  결과: 통과
- **Exact Match**: 가격 알려 주세요  
  수신 메시지: 가격 알려 주세요  
  결과: 통과

- **Exact Match**: 가격 알려 주세요  
  수신 메시지: 가격 좀 알려 주세요  
  결과: 실패
- **Contains Exact Phrase**: 여기서 샀어요  
  수신 메시지: 여기서 샀어요  
  결과: 통과
- **Contains Exact Phrase**: 여기서 샀어요  
  수신 메시지: 어제 여기서 샀어요  
  결과: 통과
- **Contains Exact Phrase**: 여기서 샀어요  
  수신 메시지: 여기서 하나 샀어요  
  결과: 실패

```
트리거로 들어온 사용자는 연락처로 저장되며, 연락처의 이름(First Name)과 성(Last Name)도 함께 저장돼요.
```

## 액션 설정하기: Reply in Comments

#### 1단계: 액션으로 이동

워크플로우에 **Reply in Comments** 액션을 추가하세요.

![Reply in Comments 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055994536/original/6TGWNDGTTBb2DjV5kzm-DsZjMA6_wnAydA.png?1760464774)

#### 2단계: 답글 설정

답글은 최대 10개까지 설정할 수 있어요. 실행할 때 이 중에서 무작위로 선택돼요.

![답글 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055994553/original/kBQ9sUTHWHwNl0YmC-M8wPw8kIg8cs6Afg.png?1760464808)

## 트리거 설정하기: Customer Replied

워크플로우를 만들 때 **Add Trigger**(트리거 추가)를 클릭하세요. DM 자동화에 쓰는 **Customer Replied** 트리거는 **Events**(이벤트) 카테고리에 있어요. 트리거를 바로 검색하거나 카테고리까지 스크롤해서 찾을 수 있어요.

#### 1단계: 트리거 추가

트리거 목록에서 사용 목적에 맞는 트리거를 선택하세요. 여기서는 **Customer Replied** 트리거를 선택하세요.

![Customer Replied 트리거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055994597/original/dUmsjjmFbbINboUXWGhsjQT1ksmdE0hl2g.png?1760464847)

#### 2단계: 답장 채널 추가

트리거를 클릭하면 사이드바가 열려요. 여기에는 여러 필터가 있어요. 먼저 **Reply channel**(답장 채널) 필터를 선택하고 필터 값을 TikTok으로 지정하세요.

![Reply channel 필터를 TikTok으로 지정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055994631/original/GWT4pYt4pXO62pOHnrQm7lDKb_EvE2-bGA.png?1760464872)

#### 3단계: 자동화 규칙 설정

다이렉트 메시지에 적용할 자동화 규칙을 **Contains Phrase** 또는 **Exact Match Phrase** 같은 일치 조건으로 설정할 수 있어요. 이렇게 설정한 조건에 따라 자동화가 시작되는 기준을 정해요.

![자동화 규칙 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055994665/original/9dbR6hCxeJF6_BRNXJZXCEyW8NSkyaHinA.png?1760464911)

## 액션 설정하기: TikTok Interactive Messenger

#### 1단계: 액션 추가

워크플로우 빌더에서 **+ Add New Action**(새 액션 추가)을 클릭하세요. 그런 다음 **TikTok Interactive Messenger** 액션을 선택하세요.

#### 2단계: 메시지 입력

TikTok Interactive Messenger는 설정이 간단해요. 앞에서 정한 트리거로 들어온 메시지에 보낼 내용을 입력하고 액션을 저장하세요.

{% hint style="warning" %}
알아 둘 점
- **TikTok Interactive Messenger** 액션은 Facebook·Instagram과 달리 **Reply Type** 필드를 지원하지 않아요. 그래서 **Reply as DM**(DM으로 답장), **Reply to Comment via DM**(DM으로 댓글에 답장) 같은 값을 정할 수 없어요. TikTok API가 지원하기 시작하면 사용할 수 있게 돼요.
- **TikTok Interactive Messenger** 액션은 Facebook·Instagram과 달리 템플릿을 지원하지 않아요. 단계적으로 사용할 수 있게 될 예정이에요.
- **TikTok Interactive Messenger** 액션은 첨부파일, 버튼, 빠른 답장을 지원하지 않아요. TikTok API가 지원하기 시작하면 사용할 수 있게 돼요.
{% endhint %}

![TikTok Interactive Messenger 메시지 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055994713/original/0df-St2_VtcFVMu8-xzN_8PiJvr2gpCE3Q.png?1760464998)

## 알아 둘 사항

하이퍼클래스에서 쓸 수 있는 메시지 기능은 TikTok의 API 제한에 따라 정해져요. 이 제한을 알아 두면 지원되는 자동화를 알맞게 설정할 수 있어요.

- 메시지 유형: **TikTok Interactive Messenger**는 텍스트 답장을 지원해요. 첨부파일, 버튼, 템플릿, 빠른 답장은 지원하지 않아요.
- 답장 유형: 이 액션은 Facebook·Instagram 방식의 **Reply Type** 선택 기능을 지원하지 않아요.
- 댓글 필터: 특정 게시물, 연결된 계정, 일치하는 키워드를 기준으로 자동화 대상을 정할 수 있어요.
- 계정 선택: 계정 필터를 비워 두면 서브 계정에 연결된 사용 가능한 모든 TikTok 계정이 포함될 수 있어요.
- 기능 차이: 워크플로우 기반 댓글 자동화는 **소셜 플래너**의 수동 **Comment Management**(댓글 관리), AI 기반 대화와는 별개예요.

## 자주 묻는 질문

### TikTok 자동화를 개인 계정에서도 쓸 수 있나요?

아니요. 하이퍼클래스 문서 기준으로 TikTok 메시지·댓글 자동화 연동은 사용 조건에 맞는 미국 등록 TikTok 비즈니스 계정이 필요해요.

### 모든 TikTok 게시물에 댓글 자동화를 적용할 수 있나요?

네. 특정 게시물 필터를 비워 두면 선택한 TikTok 계정의 모든 게시물에 달리는 댓글을 워크플로우가 확인해요.

### TikTok 게시물에 댓글이 달리면 자동으로 DM을 보낼 수 있나요?

**TikTok Interactive Messenger** 액션은 다른 일부 소셜 플랫폼에서 쓸 수 있는 전용 **Reply to Comment via DM** 옵션을 현재 지원하지 않아요.

### TikTok 댓글에 자동 답글을 여러 개 설정할 수 있나요?

네. **Reply in Comments** 액션은 답글을 최대 10개까지 지원하며, 실행할 때 무작위로 선택돼요.

### TikTok 자동화가 실행되지 않아요. 어떻게 해야 하나요?

TikTok 계정이 사용 조건에 맞고 연결되어 있는지, 워크플로우가 게시되어 있는지 확인하세요. 또 트리거의 계정, 게시물, 키워드 필터가 들어온 반응과 맞는지도 확인하세요.
