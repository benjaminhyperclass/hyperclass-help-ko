---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009587-how-to-create-a-restaurant-menu-in-highlevel
번역일: 2026-11-06
카테고리: 26-산업-가이드
---

# 레스토랑 메뉴 만들기

**레스토랑** 안의 **메뉴**에서는 손님이 주문할 수 있는 모든 것을 만들고 관리해요. 카테고리, 항목, 가격, 사이즈, 추가 옵션이 모두 여기에 있어요. 이 문서에서는 **메뉴**를 여는 방법, 파일이나 링크로 메뉴를 가져오는 방법, 카테고리를 만드는 방법, 카테고리에 항목을 넣고 항목을 하나씩 만드는 방법을 안내해요.

---

## 메뉴란?

**메뉴**에는 손님이 주문하는 모든 방식(매장 식사, 픽업, 배달)에 쓰는 메뉴가 하나로 모여 있어요. 직원은 이 메뉴로 테이블에서 매장 식사 주문을 받고, 손님은 레스토랑 웹사이트에서 같은 메뉴를 봐요. 이 페이지에는 탭이 세 개 있어요. 각 탭 옆의 숫자는 그 탭에 있는 개수예요.

| 탭 | 보여 주는 내용 | 이럴 때 써요 |
| --- | --- | --- |
| **카테고리** | 카테고리와 각 카테고리에 속한 항목 | 손님이 둘러보는 방식대로 항목을 묶고, 카테고리와 항목의 순서를 정할 때 |
| **Items**(항목) | 모든 항목과 각 항목의 카테고리, 가격, 상태 | 항목을 찾고, 필터링하고, 추가하고, 편집할 때 |
| **Modifier groups**(옵션 그룹) | 선택 옵션과 추가 옵션, 그리고 각 옵션 그룹을 쓰는 항목 수 | 사이드, 소스, 토핑 같은 추가 옵션을 제공할 때 |

메뉴는 세 가지 구성 요소로 이루어져 있어요. 카테고리 안에 항목이 들어가고, 항목 하나는 옵션 그룹을 하나 이상 쓸 수 있어요.

![Testra Bistro 메뉴를 예로 든 카테고리, 항목, 옵션 그룹 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084883709/original/35XTcqLDTHoncIA2ttISkvRb1YZizee-Sg.png?1793738116 "Categories, items and modifier groups, using the Testra Bistro menu as an example.")

---

## 메뉴의 주요 장점

레스토랑 메뉴를 한곳에서 관리하면 주문 정보를 일관되게 유지할 수 있고, 수정도 쉬워져요. 카테고리, 항목 상세 정보, 메뉴 가져오기 기능으로 손님이 주문할 수 있는 메뉴를 체계적으로 정리할 수 있어요.

- 몇 분 만에 메뉴 완성: 메뉴 PDF, 사진, 스프레드시트를 올리거나 메뉴 페이지 링크를 입력하면 초안이 만들어져요. 메뉴에 반영하기 전에 초안을 확인할 수 있어요.
- 모든 채널에서 하나의 메뉴: 항목마다 가격은 하나예요. 픽업과 배달에는 추가 금액을 붙일 수 있고, 항목 하나만 따로 바꿀 수도 있어요.
- 손님이 이해하기 쉬운 선택지: 사이즈를 제공하고, 사이드·소스·토핑용 옵션 그룹을 추가할 수 있어요. 옵션마다 가격을 따로 정할 수 있어요.
- 직접 관리: 항목을 **Sold out**(품절)이나 **Hidden**(숨김)으로 바꾸고, 하루 판매 수량을 제한하고, 카테고리와 항목을 제공하는 시간을 정할 수 있어요.
- 한 번만 수정: 항목 하나를 여러 카테고리에 넣을 수 있어서, 항목을 고치면 그 항목이 들어 있는 모든 곳에 바로 반영돼요.

---

## 메뉴 열기

**메뉴** 페이지에서 카테고리 보기, 항목 만들기, 옵션 그룹 열기를 모두 할 수 있어요. 관리할 정보에 맞는 탭을 열면 원하는 내용을 쉽게 찾을 수 있어요.

1. 왼쪽 메뉴에서 **레스토랑**을 클릭하세요.
2. 열리는 **레스토랑** 패널에서 **메뉴**를 클릭하세요.

   ![레스토랑을 클릭한 뒤 메뉴를 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084884382/original/UuGOpsifgqCQaLo8dk9ZLVVrodlPJuRghA.png?1793739346 "Click Restaurants, then Menu.")

3. **메뉴**는 **카테고리** 탭이 먼저 열려요. **Items** 또는 **Modifier groups**를 클릭하면 탭을 바꿀 수 있어요.

   ![카테고리 탭이 먼저 열린 메뉴 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084884291/original/xqWSGxW4OCUHwUijjK_F6t5NqqScJNS9uA.png?1793739217 "Menu opens on the Categories tab.")

{% hint style="info" %}
팁: 패널에서 **메뉴** 옆의 화살표를 클릭하면 **카테고리**, **Items**, **Modifier groups**로 바로 이동할 수 있어요. 새 레스토랑을 설정하는 중이라면 **Restaurant Setup**(레스토랑 셋업) 단계에서 메뉴를 추가할 수도 있어요.
{% endhint %}

## 파일이나 링크로 메뉴 추가하기

이미 만들어 둔 메뉴가 있다면 하이퍼클래스가 대신 메뉴를 구성해 줘요. 파일이나 메뉴 페이지를 초안으로 바꿔 주고, 메뉴에 반영하기 전에 초안을 확인할 수 있어요.

1. 오른쪽 위의 **Upload menu**(메뉴 업로드)를 클릭하세요.

   ![오른쪽 위의 메뉴 업로드 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084884517/original/mm0GFyb90v7fTZ3ajmW5b5SE0by1_lmD8g.png?1793739609)

2. 다음 중 한 가지 방법으로 메뉴를 추가하세요.

   ![파일을 올리거나, 웹사이트 사용을 클릭해 웹 페이지에서 메뉴를 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084884399/original/jfmpnTskubvKFWDovkaAZ08eAWBHuE1xFA.png?1793739402 "Upload a file, or click Use your website instead to add your menu from a web page.")

   - 파일로 추가: **클릭하여 업로드**를 클릭하거나 파일을 상자 안으로 끌어다 놓으세요. PDF, JPG, PNG, WEBP, CSV, XLSX 파일을 올릴 수 있어요. 파일당 최대 50MB, 한 번에 최대 15개까지 올릴 수 있어요. 한 페이지씩 평평하게 놓고 밝은 곳에서 찍은 사진이 가장 잘 인식돼요. 그런 다음 **Upload menu**를 클릭하세요.
   - 웹 페이지로 추가: **Use your website instead**(대신 웹사이트 사용)를 클릭하고, **Link to your menu page**(메뉴 페이지 링크)에 페이지 링크를 붙여 넣은 뒤 **Use website**(웹사이트 사용)를 클릭하세요.
   - 아직 파일이 없다면: **Download a sample spreadsheet**(샘플 스프레드시트 다운로드)를 클릭해 내용을 채운 뒤 업로드하세요.

3. 하이퍼클래스가 페이지별로 초안을 만드는 동안 기다리세요. 완료되면 모든 항목을 확인하세요. 다시 확인해야 할 항목에는 **검토 필요**가 표시돼요.
4. 항목을 고치려면 항목 옆의 점 세 개 메뉴를 클릭하고 **Edit item**(항목 편집), **카테고리로 이동**, **Remove from draft**(초안에서 제거) 중에서 선택하세요.
5. **Add items to menu**(메뉴에 항목 추가)를 클릭하세요. 이 버튼에는 추가될 항목 수가 표시돼요.

{% hint style="info" %}
참고: 초안을 추가하기 전에는 메뉴에 아무것도 반영되지 않아요. 처음부터 다시 시작하려면 **임시 저장 삭제**를 클릭하세요.
{% endhint %}

이전에 올린 파일을 보려면 탭 옆의 **Upload history**(업로드 기록) 아이콘을 클릭하세요. 업로드마다 파일, 페이지 수, 업로드한 시각, 업로드한 사람, 추가된 항목 수가 표시돼요.

![탭 옆의 업로드 기록 아이콘과 기록 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084884505/original/YuSJS0uwdaCLKgerkVVxoDeeG-BgzoVECA.png?1793739556)

---

## 카테고리 추가하기

**카테고리** 탭에서는 손님이 온라인 주문 메뉴를 둘러보는 방식대로 항목을 묶어요. 예를 들어 스타터, 피자, 음료로 나눌 수 있어요. 카테고리를 클릭하면 그 안의 항목을 보거나 숨길 수 있고, **Expand all**(모두 펼치기)을 클릭하면 모든 카테고리를 한 번에 펼칠 수 있어요. 원하는 항목을 빨리 찾으려면 **카테고리 검색**을 사용하세요.

1. **카테고리** 탭에서 **카테고리 추가**를 클릭하세요.

   ![카테고리 탭의 카테고리 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084884990/original/F1lfNItA8GGeOWte29cLnWL_owUNGS0z2Q.png?1793740173)

2. **Name**(이름)에 이름을 입력하세요(예: 스타터). 필요하면 **설명**도 입력하세요(예: 함께 나눠 먹는 작은 접시 요리).

   ![카테고리를 추가하고 제공 채널과 시간을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084884980/original/xAEMK0uo94fbTt8CD1ddgFzQ7tSH-cvkcA.png?1793740136 "Add a category and choose where and when it is offered.")

3. **Sold on**(판매 채널)에서 카테고리를 제공할 채널을 선택하세요. **Dine-in**(매장 식사), **Pickup**(픽업), **Delivery**(배달) 중에서 고를 수 있어요. 선택하지 않은 채널에서는 이 카테고리의 항목이 보이지 않아요.
4. 영업 중일 때마다 이 카테고리를 제공하려면 **Use your store hours**(매장 영업시간 사용)를 켠 상태로 두세요. 다른 시간대에 제공하려면 이 옵션을 끄고 요일별로 시간을 정하세요. 쉬는 요일에는 **Not served**(제공 안 함)가 표시돼요.
5. **카테고리 추가**를 클릭하세요.

---

## 카테고리에 항목 추가하기

기존 항목을 카테고리에 넣으면 손님이 관련된 음식과 음료를 한곳에서 볼 수 있어요. 항목을 복사하지 않아도 여러 카테고리에 넣을 수 있어요. 카테고리 아래의 **Add items**(항목 추가)를 클릭하거나, 카테고리 옆의 점 세 개 메뉴를 클릭하고 **Add items**를 선택하세요. 항목 하나를 여러 카테고리에 넣을 수 있어요.

<!-- 검토 필요: 원문 내용이 서로 다름 (소개 문단은 기존 항목을 카테고리에 추가하는 내용인데, 아래 절차는 새 항목을 만드는 내용) -->

1. **Items** 탭에서 **Add item**(항목 추가)을 클릭하세요.

   ![Items 탭의 항목 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084885075/original/aiMThfh-45BeLRDWZbPB_ElDMHZ_Dy3cBg.png?1793740362)

2. **상세 정보**에서 항목의 **Name**과 재료를 알려 주는 짧은 **설명**을 입력하세요.
3. **카테고리**에서 항목이 들어갈 카테고리를 하나 이상 선택하세요.
4. **Photo**(사진)에서 **클릭하여 업로드**하거나 PNG, JPG, GIF 파일을 끌어다 놓으세요. 파일 크기는 2.5MB까지예요.
5. 온라인 주문 메뉴와 매장 식사 메뉴에서 이 항목을 눈에 띄게 하려면 **Popular**(인기)를 켜세요.
6. **Price and stock**(가격 및 재고)에서 가격을 정하세요. 항목 편집 화면의 입력란에서 가격과 재고 정보를 확인할 수 있어요.
7. 필요하면 옵션 그룹을 추가하고, 항목을 제공할 시간과 세금을 정하세요. 모두 항목 편집 화면의 입력란에서 설정해요.
8. 요약 카드를 확인하세요. 항목의 가격, 카테고리, 채널별 가격, 옵션 그룹이 표시돼요.
9. **Add item**을 클릭하세요.

   ![맨 위에 상태가 표시되고 오른쪽에 채널별 가격 요약이 보이는 새 항목 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084885198/original/WUwFJ-hXR_tKxBhbboZj3f5PiNbRvSXYJg.gif?1793740500 "A new item, with its status at the top and a summary of its price on each channel on the right.")

---

## 자주 묻는 질문

### 항목 하나를 여러 카테고리에 넣을 수 있나요?

네, 할 수 있어요. 항목에서 카테고리를 둘 이상 선택하세요. 항목은 한 번만 수정하면 되고, 바뀐 내용이 그 항목이 들어 있는 모든 카테고리에 반영돼요.

### 스프레드시트로 메뉴를 가져올 수 있나요?

네, 가능해요. **Upload menu**를 클릭하고 CSV 또는 XLSX 파일을 올리세요. 하이퍼클래스에서 제공하는 형식으로 시작하려면 **Download a sample spreadsheet**를 클릭하세요.

### 카테고리를 삭제하면 그 안의 항목은 어떻게 되나요?

직접 선택할 수 있어요. 항목을 남기고 다른 카테고리로 옮기거나, 항목도 함께 삭제할 수 있어요. 카테고리가 없는 항목은 **Items**에는 그대로 남지만 온라인 메뉴에는 표시되지 않아요.
