---
원문: /support/solutions/articles/155000002439-how-to-create-a-facebook-lead-form-in-ad-manager
번역일: 2026-11-06
카테고리: 10-마케팅
---

# 광고 관리자에서 Facebook 리드 폼 만들기

Meta 리드 생성 캠페인에서 Facebook 리드 폼을 만들고, 제출된 정보를 하이퍼클래스 연락처 필드에 매핑하는 방법을 안내해요. 캠페인을 설정하는 중에 새 폼을 만들거나 기존 폼을 선택할 수 있어요.

Facebook 폼 필드를 알맞은 하이퍼클래스 연락처 필드에 매핑하면 제출된 정보가 올바른 CRM 필드로 들어가요. 이 문서에서는 **광고 관리자**(Ad Manager)에서 Facebook 리드 폼을 만들고, 매핑하고, 검토하고, 관리하는 방법을 설명해요. Meta 캠페인을 처음 만든다면 [광고 관리자에서 Meta 캠페인 시작하기](../how-to-get-started-with-meta-campaigns-in-ad-manager.md)도 참고하세요.

## 광고 관리자의 Facebook 리드 폼이란?

Facebook 리드 폼은 Meta 리드 생성 캠페인에 반응한 사람들의 정보를 모아 주는 폼이에요. 하이퍼클래스 광고 관리자에서는 캠페인을 설정하면서 기존 Facebook 리드 폼을 선택하거나 새로 만들 수 있어요.

폼을 만들면 사람들이 어떤 정보를 제출할지가 정해져요. **폼 필드 매핑**은 제출된 값을 하이퍼클래스의 어느 필드에 저장할지 정해요.

Facebook 폼 필드를 알맞은 하이퍼클래스 연락처 필드에 매핑하면, 리드 정보를 CRM에서 정리해 후속 관리와 자동화에 쓸 수 있어요.

### Facebook 리드 폼의 장점

Facebook 리드 폼으로 Meta 캠페인에서 리드 정보를 모으고, 제출된 데이터를 하이퍼클래스 연락처 레코드와 연결할 수 있어요.

- 리드 수집: Meta 리드 생성 캠페인에서 연락처 정보와 지원되는 질문 응답을 모아요.
- CRM 필드 매핑: Facebook 폼 응답을 알맞은 하이퍼클래스 연락처 필드에 매핑해요.
- 맞춤 데이터 수집: 기본 필드로 담기지 않는 정보는 지원되는 하이퍼클래스 연락처 커스텀 필드를 사용해요.
- 지속적인 폼 관리: 캠페인 설정이 끝난 뒤에도 Facebook 폼 매핑을 검토하고 업데이트할 수 있어요.

## 사전 준비와 제한 사항

Facebook 리드 폼을 만들기 전에 Meta 캠페인과 필요한 계정 연결이 준비되어 있는지 확인하세요.

- **리드 생성** 목표로 만든 Meta 캠페인을 사용하세요.
- 내 Facebook 프로필에 필요한 Meta 자산에 대한 접근 권한이 있어야 해요.
- 내 비즈니스와 데이터 처리 방식에 맞는 개인정보 처리방침 URL을 준비하세요.
- 제출된 값을 CRM에 저장하려면 Facebook 폼 필드를 알맞은 하이퍼클래스 연락처 필드에 매핑하세요.

계정 연결은 [광고 관리자에 Facebook 비즈니스 계정 연결하기](../Ad-Manager-Setup-and-Configuration/connecting-facebook-business-account-to-ad-manager.md)에서, Facebook·Instagram 리드 광고 설정은 [시작하기 - Facebook 및 Instagram 리드 광고 설정](../../01-시작하기/마케팅-리드-생성/getting-started-setup-facebook-and-instagram-lead-ads.md)에서 확인할 수 있어요. 여러 Facebook 페이지를 사용한다면 [Facebook 멀티 페이지 리드 광고 연동](../../42-통합/Facebook-Integration/facebook-multi-page-lead-ads-integration.md)을 참고하세요.

Facebook 리드 폼 만들기는 Meta 리드 생성 캠페인 워크플로우의 일부예요. 다른 캠페인 목표에서는 다른 목적지 옵션을 쓸 수 있어요.

## 광고 관리자에서 Facebook 리드 폼 만들기

Facebook 리드 폼은 Meta 리드 생성 캠페인의 광고(Ad) 수준에서 만들어요. 각 폼 섹션을 채우고, 수집한 정보를 하이퍼클래스에 매핑한 뒤, 폼을 검토하고 저장하세요.

![리드 폼 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026223955/original/fN9EamgSal0I0WeLS19SIhCxzB_Miq_LqQ.png?1715975660)

새 Facebook 리드 폼은 다음 순서로 만들어요.

1. 새로 만들기 또는 리드 폼 선택 드롭다운을 클릭하세요.
2. **Facebook 폼 만들기**를 클릭하세요.  
   ![Facebook 폼 만들기 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037532682/original/nK_hW78QgU8d85jf8q9X1XNtkXwGMmwmiA.png?1733083547)
3. Facebook 폼 이름을 입력하세요.  
   ![폼 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081662568/original/JGRH7TLe11p79qdl6KCaYedkrlsUa1uVGg.png?1790168296)
4. 두 가지 폼 유형 중 하나를 선택하세요. 유형은 **More Volume**(더 많은 수량)과 **Higher Intent**(더 높은 구매 의도)예요. Higher Intent는 사람들이 제출 전에 정보를 확인하는 검토 단계가 추가된다는 점이 달라요.  
   ![폼 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081662485/original/MPTtgb7tMtb4kYcN-rG2eq5GDkZyKucAqA.png?1790168249)
5. 다음은 **Greetings**(인사말) 단계예요. 사람들이 이 폼을 작성해야 하는 이유와 관련 내용을 알려 주세요. 제목(필수 입력)을 넣고, 문단이나 목록을 추가할 수 있어요.  
   ![인사말 단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026223885/original/2twNlXKLphw98liRWRQ-dXUB3sdfkXAQng.png?1715975487)
6. 다음은 **Questions**(질문) 단계예요.
   - 설명을 추가할 수 있어요.
   - 사람들에게서 수집할 정보 유형을 선택할 수 있어요. 이 정보는 해당 연락처가 좋은 리드인지 판단하는 데 도움이 돼요.
   - 맞춤 질문은 짧은 답변형과 객관식 질문을 만들어 폼에 맞는 정보를 받을 수 있어요.

   ![질문 단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037532755/original/rgWY78yFS7ZbgIEMrJtzWNuewDtH-J8pEw.png?1733083890)
7. **폼 필드 매핑**에서 폼 필드를 하이퍼클래스의 연락처 필드에 매핑하세요. 매핑하면 폼 제출 내역에서 각 필드의 답변을 볼 수 있고, 연락처에도 해당 값이 표시돼요.  
   ![폼 필드 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037532768/original/-BX4fj4xNIbkBMZt1-o-HIXHOSZcM9jRQQ.png?1733083953)
8. 다음은 **개인정보처리방침** 단계예요. **랜딩 페이지 링크 추가**에 내 비즈니스의 개인정보처리방침 링크를 넣으세요. 하이퍼클래스의 개인정보처리방침을 복사해 사용할 수도 있어요.   개인정보를 수집할 때 링크하는 방법은 [개인정보를 수집할 때 개인정보 처리방침 링크하기](../../06-사이트/how-to-link-your-privacy-policy-when-collecting-personal-data.md)를 참고하세요.  
   ![개인정보처리방침 단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037532772/original/OXn51pckpgdo3rv8KbfvIEs2Op8EMLWasA.png?1733083979)
9. 다음은 폼을 작성한 리드에게 보여 줄 메시지 단계예요. 제목, 설명, 콜투액션(예: 웹사이트로 이동하거나 바로 전화하기)을 추가할 수 있어요.  
   ![완료 메시지 단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037532787/original/dWUaGJDomlTYtX9PqhYvMamM75du8m5bDw.png?1733084005)
10. **저장**을 클릭해 폼을 저장한 뒤, **리드 생성** 광고 목표로 진행하세요.  
    ![폼 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026223934/original/STMT6vD_t5YqYE6s4D_yK6_aNOV4eSJ5mA.png?1715975622)

## 광고 관리자에서 커스텀 필드 사용하기

아래 동영상에서 리드 폼을 만들 때와 폼 필드를 매핑할 때 광고 관리자에서 커스텀 필드를 만들고 사용하는 방법을 볼 수 있어요.

현재 Meta에서 리드 폼을 만들 때 **추적 매개변수**를 추가하는 옵션이 따로 보여요.

![추적 매개변수 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041564028/original/bFbc4FdDDQtRZc0C1Hy8ZMEYfUeQXEUcXw.png?1739461771)

이 필드들은 Facebook에서 만든 폼을 하이퍼클래스 광고 관리자에서 광고 캠페인을 만들고 게시하는 데 쓸 때 함께 불러와져요. 이 필드와 매개변수를 CRM과 동기화하려면 폼 필드 매핑을 해야 해요.

**폼 필드 매핑** 섹션에 기본으로 없는 CRM 필드는 하이퍼클래스에서 **커스텀 필드**로 추가할 수 있어요. 추가하면 리드 폼의 폼 필드 매핑 섹션에 CRM 필드로 나타나요. 커스텀 필드 자체에 대해서는 커스텀 필드 사용하기를 참고하세요.

커스텀 필드를 만들고 폼 필드 매핑에서 사용하는 방법은 다음 동영상에서 볼 수 있어요.

## 기존 Facebook 리드 폼 검토, 매핑, 복제하기

광고 관리자에서 리드 폼을 더 쉽게 관리할 수 있도록, 캠페인 설정 화면에서 기존 Facebook 리드 폼을 바로 검토하고, 매핑하고, 복제할 수 있어요.

### 폼 검토 및 매핑 화면 열기

1. **리드 생성** 캠페인 설정에서 리드 폼을 선택한 상태로, 폼 이름 옆의 연필(편집) 아이콘을 클릭하세요. 아이콘에 마우스를 올리면 Map Fields / Duplicate Form 이라는 문구가 보여요.  
   ![폼 이름 옆 편집 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043984290/original/PsMXalvmzTcGEgessOa2U5JKw7adarfGzA.png?1742978398)
2. 팝업 창이 열리고, 여기서 다음 작업을 할 수 있어요.
   - 폼 내용 미리보기
   - 폼 필드를 CRM 필드에 매핑하거나 매핑 업데이트
   - 리드 동기화가 정확하고 빠짐없이 이루어지는지 확인

### Facebook 폼 복제하기

같은 팝업 창 왼쪽 아래에 **Duplicate Form**(폼 복제) 버튼이 있어요. 이 버튼을 클릭하면 원본 폼의 내용이 모두 미리 채워진 새 화면이 열려요.

![폼 복제 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043984481/original/DqaJ-Oe3HkNKHooDQlWmdtrAKpGUIaZBag.png?1742978515)

- 복제된 폼은 자유롭게 수정할 수 있어요.
- 수정을 마쳤으면 **Create Form**(폼 만들기)을 클릭해 새 리드 폼으로 저장하세요.

![복제한 폼 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043984491/original/IR1zCKhtGkw5hzqHKqQNn0pGOAejCi-_QA.png?1742978528)

### 필드 매핑 안내 메시지

데이터 동기화가 누락되지 않도록, 선택한 폼이 아직 매핑되지 않았다면 폼 선택 영역 바로 아래에 다음 메시지가 나타나요. "선택한 폼의 폼 필드가 매핑되지 않았습니다. 지금 매핑하세요."라는 뜻이에요.

```
“Form fields of the selected form are not mapped, map now.”
```

![매핑 안내 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043984703/original/tJTn7ymBgdRzIsTyV4YHGJwbbFtsxaQ8ow.png?1742978622)

**map now**(지금 매핑)를 클릭하면 검토 팝업 창이 바로 열려서, CRM 필드와의 필드 매핑을 마칠 수 있어요.

## 자주 묻는 질문

### Meta 캠페인을 만들면서 Facebook 리드 폼도 만들 수 있나요?
네, 만들 수 있어요. Meta 리드 생성 캠페인의 광고(Ad) 수준에서 Facebook 리드 폼을 선택한 다음, 기존 폼을 고르거나 새 Facebook 리드 폼을 만드세요.

### Facebook 리드 폼 필드를 왜 매핑해야 하나요?
필드 매핑은 Facebook 폼 응답을 그에 해당하는 하이퍼클래스 연락처 필드와 연결해요. 이렇게 해야 제출된 정보가 의도한 CRM 필드에 저장돼요.

### Facebook 리드 폼 응답에 하이퍼클래스 커스텀 필드를 쓸 수 있나요?
네, 수집하려는 정보에 맞는 지원되는 연락처 커스텀 필드가 있다면 쓸 수 있어요. 먼저 연락처 커스텀 필드를 만든 다음, 폼 매핑에서 그 필드를 선택하세요.

### 캠페인 설정이 끝난 뒤에는 Facebook 폼 매핑을 어디에서 관리하나요?
서브 계정에서 **설정 > 연동**으로 이동한 뒤, 사용할 수 있는 Facebook **폼 필드 매핑** 항목에서 관리하세요.

### Facebook 리드 폼에 하이퍼클래스의 개인정보처리방침을 써도 되나요?
내 비즈니스와 데이터 처리 방식에 맞는 개인정보처리방침을 사용하세요. 해당 요건에 대해서는 직접 법률 전문가와 상담하길 하이퍼클래스는 권장해요.
