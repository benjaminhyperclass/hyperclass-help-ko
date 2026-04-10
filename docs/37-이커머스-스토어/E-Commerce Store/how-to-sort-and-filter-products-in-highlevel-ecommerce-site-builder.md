---

번역일: 2026-04-08
카테고리: 이커머스 스토어
---

# 하이퍼클래스 이커머스 사이트 빌더에서 상품 정렬 및 필터링하는 방법

상품 목록 페이지에서 상품을 정렬하는 것은 항상 문제였습니다. 구매자들은 원하는 상품을 찾기 어려웠고, 스토어 운영자에게는 이것이 걸림돌이었죠. 이런 문제를 해결하기 위해 이제 스토어 운영자가 상품 목록 페이지에 정렬과 필터 옵션을 추가할 수 있게 되었습니다.

---

## 모바일 상품 목록 페이지(PLP)

모바일 쇼핑객들은 작은 화면에서 방대한 상품 카탈로그를 빠르게 검색할 방법이 필요합니다. 상품 목록 페이지(PLP)에 이제 터치에 최적화된 정렬 및 필터 컨트롤과 동적 상품 수 표시, 그리고 빌더에서 직접 스타일링할 수 있는 기능이 추가되어 브랜드에 맞게 꾸밀 수 있습니다.

### 모바일 정렬 (하단 시트)

모바일에서 PLP 상단 바에 전용 정렬(Sort) 버튼이 나타납니다. 이를 탭하면 일반적인 정렬 옵션들이 담긴 하단 시트 모달이 열립니다.

**사용 가능한 옵션**

- 날짜 (오래된 순 → 최신순, 최신순 → 오래된 순)
- 가나다순 (ㄱ–ㅎ, ㅎ–ㄱ)
- 가격 (낮은 가격 → 높은 가격, 높은 가격 → 낮은 가격)

**팁**

- 정렬 시트 바깥쪽을 탭하거나 아래로 스와이프하면 닫힙니다.
- 위젯에서 기본 정렬 옵션을 설정하여 첫 로딩 시 정렬 순서를 지정할 수 있습니다.

상품 목록 페이지(PLP)의 상품 제목은 기존의 말줄임표(...) 동작을 계속 따릅니다. 전체 제목 줄바꿈은 다른 대부분의 스토어 페이지에 적용되지만 PLP에는 적용되지 않습니다.

![정렬 옵션 UI](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064233342/original/VdKH24p4aox0vHMDZa6bdbbwAf3D3rFD3g.png?1770278659)

---

## 모바일 필터 (전체 화면 모달)

필터링은 쇼핑객이 관련 상품만 볼 수 있게 도와줍니다. 모바일에서는 필터가 **전체 화면** 모달로 열리며, 쉬운 조작을 위해 하단에 고정 버튼이 있습니다.

**필터 유형**

- 재고 상태: 재고 있음 / 품절

![재고 필터 UI](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064233595/original/49CXWnYA0OkSjj4uSentVrR-INxyiE2gcA.jpeg?1770278874)

- 가격 범위: 최소 가격과 최대 가격 숫자 입력

![가격 범위 필터 UI](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064233666/original/0pBW_fLvRxGyLH_RAggT4WytZsjlfttujA.jpeg?1770278937)

**동작 방식**

- 적용(Apply) 버튼은 결과를 즉시 업데이트하고, 필터 초기화(Clear Filters) 버튼은 선택 사항을 리셋합니다.
- 필터(Filters) 버튼에는 활성 필터 개수가 뱃지로 표시됩니다.

![필터 뱃지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064233677/original/WXtTLxx5J6ZU_UZBVSHo6xNiNPhAketTwQ.png?1770278960)

재고 상태 기본값(둘 다 선택됨)과 가격 유효성 검사 동작은 스토어 설정을 따릅니다. 재고 규칙을 커스터마이징한 경우, 조건에 맞는 상품만 표시됩니다.

---

## 상품 수 및 결과 업데이트

PLP 상단에 현재 상품 수가 표시되며, 필터를 적용하거나 초기화할 때마다 동적으로 업데이트되어 쇼핑객이 탐색하는 동안 맥락을 파악할 수 있습니다.

![상품 수 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064233814/original/3OTXRPPjV_rWUi97IVGke1VfiEWVWniFAw.png?1770279039)

---

## 빌더 미리보기 및 스타일링

빌더의 모바일 디바이스 프레임에서 정확한 모바일 인터랙션을 미리보고, 위젯 패널에서 컨트롤을 스타일링할 수 있습니다.

**커스터마이징 가능한 항목**

- 정렬/필터 바 배경 색상
- 정렬 및 필터 버튼의 텍스트 색상
- 적용 및 필터 초기화 버튼 스타일

![스타일링 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064234051/original/K2nzR6I0Yt1zGIZWx_nknqehKZiXybYrlA.png?1770279159)

---

## 사용 방법

- 상품 목록 페이지로 이동하여 상품 목록 요소를 선택합니다. 이제 정렬과 필터링을 활성화하는 2개의 토글이 있습니다. 이를 활성화하면 상품 목록 페이지에 정렬 및 필터 요소가 추가됩니다. 스토어에 방대한 카탈로그가 있다면, 상품 목록 페이지에서 페이지당 표시할 상품 수를 늘려 페이지네이션을 줄일 수 있습니다.

![정렬 및 필터 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064993331/original/4QSoYtZjvSndKsHjIcTuRe7Xcj-N0GfqUw.png?1771240152)

- 정렬과 필터의 속성을 설정합니다. 설정할 수 있는 속성은 다음과 같습니다:
  - 정렬 및 필터 텍스트 색상
  - 정렬 및 필터 필(pill) 색상
  - 리셋 버튼 색상

3. 저장/발행을 클릭하여 사이트에서 변경사항을 확인하세요!

**주요 특징:**

- 정렬 및 필터 옵션은 상품 목록 페이지에서만 사용 가능합니다
- 기본 정렬 순서는 날짜 - 오래된 순부터 입니다
- 기본적으로 필터 없이 모든 상품이 표시됩니다

**이미지:**

**스토어에 정렬 및 필터 추가하기**

![정렬 및 필터 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030617789/original/6TvXnM5zwPcecGebZeNh6QPuyphMBopHig.jpeg?1723045208)

**정렬 및 필터 속성 설정**

![속성 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030617787/original/TtaI8t89Sxi5WO0djkiQgXU3QcOhxP4jjw.jpeg?1723045208)

**상품 목록 페이지의 필터 옵션 미리보기**

![필터 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030617788/original/fuZR-olgtxgAH8o1XylW50CNAY9mB4Lv4Q.jpeg?1723045208)

**상품에 필터 적용하기**

![필터 적용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030617786/original/gt8RM08fQXs3WNsaM_Qb38WNcS8G23yW9A.jpeg?1723045208)

**상품 목록 페이지의 정렬 옵션 미리보기**

![정렬 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064232974/original/WI9WEkqtfzQE2BrpUC6Mm9P4qul__axeNg.jpeg?1770278415)

---

## 자주 묻는 질문

**Q1: 모바일 정렬 및 필터링은 어디서 활성화하나요?**
상품 목록 위젯 → 일반 탭 → "정렬 활성화" 및 "필터링 활성화" 토글을 켜면 됩니다.

**Q2: 쇼핑객이 모바일에서 정렬 순서를 변경할 수 있나요?**
네. 정렬을 탭하면 날짜, 가나다순, 가격 옵션(각각 두 가지 방향)이 있는 하단 시트가 열립니다.

**Q3: 모바일에서 어떤 필터를 사용할 수 있나요?**
재고 상태(재고 있음 / 품절)와 가격 범위(최소/최대)를 사용할 수 있습니다. 필터 모달은 전체 화면으로 열리며 하단에 적용/초기화 버튼이 고정됩니다.

**Q4: 재고 상태 옵션이 기본적으로 선택되어 있나요?**
기본적으로 둘 다 선택되어 있어서 쇼핑객이 세부 조건을 설정하기 전까지는 모든 상품을 볼 수 있습니다. (스토어 테마에서 기본값을 오버라이드한 경우 스토어 설정을 따릅니다.)

**Q5: PLP에서 조건에 맞는 상품이 몇 개인지 표시하나요?**
네. 상단에 상품 수가 표시되며 필터가 변경될 때마다 동적으로 업데이트됩니다.

**Q6: 필터 버튼의 뱃지는 무엇을 의미하나요?**
현재 활성화된 필터 기준이 몇 개인지를 보여줍니다.

---
*원문 최종 수정: 2026년 3월 19일*
*Hyperclass 사용 가이드 — hyperclass.ai*