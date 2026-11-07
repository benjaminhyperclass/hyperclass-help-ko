---
원문: /support/solutions/articles/155000005571-hide-individual-templates-from-subaccounts
번역일: 2026-11-07
카테고리: 10-마케팅
---

# 서브 계정에서 개별 템플릿 숨기기

에이전시 관리자만 쓸 수 있어요. 에이전시의 **템플릿 라이브러리**에서 특정 템플릿을 서브 계정에 보이지 않게 하는 방법을 설명해요.

에이전시 **템플릿 라이브러리**에는 서브 계정에 보이는 템플릿 라이브러리와 템플릿을 관리하는 설정이 여러 가지 있어요. 템플릿 하나만 골라서 에이전시만 볼 수 있게 숨기는 기능은 없어요. 대신 숨김 처리한 카테고리에 그 템플릿을 넣으면 같은 효과를 낼 수 있어요.

## 개별 템플릿 숨기기

1. **에이전시 > 템플릿 라이브러리**로 이동해요.

   ![에이전시 템플릿 라이브러리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048644956/original/SE3Fv8FR8TMvkVZ3OLU17Un7vDR9R8gE-A.png?1750455536)

2. **톱니바퀴 아이콘**(**설정**)을 클릭해요.

   ![톱니바퀴 아이콘 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048644960/original/HPtLB7Zii9BA_aO8LW4mNk9eR84qmvPAxw.png?1750455605)

3. **Template Library Admin Settings**(템플릿 라이브러리 관리자 설정) 화면에서 **상품** 중 하나(예: **퍼널**)를 선택해요. 그다음 **카테고리 > 카테고리 만들기**를 클릭해요.
4. **name**(이름)에는 알아보기 쉬운 카테고리 이름(예: 숨김 퍼널)을, **설명**에는 용도(예: 서브 계정에 보이지 않는 퍼널 템플릿)를 입력하고 **만들기**를 클릭해요.

   ![카테고리 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048645013/original/NmstDl_U24Er-KxkJzMiU9JLTvkIiN7BRg.png?1750455735)

5. 카테고리가 만들어지면 목록에서 찾아 **숨기기** 토글을 켜요. 토글이 파란색으로 바뀌어요. 모든 서브 계정에서 이 카테고리를 숨길지 묻는 확인 창이 나타날 수 있어요.

   ![숨기기 토글 켜기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048645043/original/SbqW5st5mKYXwKBYzNG8vjt_0yygk006Dg.png?1750455969)

6. 에이전시 **템플릿 라이브러리**로 돌아가요. 숨긴 카테고리와 그 안의 템플릿이 에이전시 화면에는 보이는지 확인해요.

   ![에이전시 템플릿 라이브러리에서 숨긴 카테고리 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048645063/original/i-nOjxm_hkekEglLV0_i6c30E460-_SG0Q.png?1750456142)

7. 서브 계정에서 해당 상품의 템플릿 라이브러리를 열어요. 서브 계정 > [상품](예: 숨긴 카테고리를 **퍼널**에 만들었다면 **퍼널**) > **신규** [상품] > **from Templates**(템플릿에서) 순서로 이동하면 돼요. 서브 계정에 보이는 **카테고리** 목록에 숨긴 카테고리가 없는지 확인해요. 템플릿 이름으로 검색해서 **모든 템플릿**에서도 보이지 않는지 확인해요.

   ![서브 계정에서 숨긴 카테고리가 보이지 않는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048645087/original/kuTVF398Wg4o3OuF2Cjf-DndOAZsHxxIEQ.png?1750456317)

8. 템플릿 미리보기 이미지에 회색 상자와 "This template is hidden for all your sub-accounts"(모든 서브 계정에서 이 템플릿이 숨겨져 있어요) 문구가 있는지 확인해요. 숨긴 템플릿에는 이 문구가 표시돼요. 숨기지 않은 템플릿에는 '보임'이라는 표시가 따로 없어요.

   ![숨겨진 템플릿 미리보기의 회색 상자 안내](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048645186/original/ivaR_2Fcfz-vJX__Z-WYNcynfoFM8cM9uQ.png?1750456549)

   ![숨기지 않은 템플릿 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048645193/original/8IS6YJ7NufhuiZlevAckmaRocVN9jQ0ieg.png?1750456656)

{% hint style="warning" %}
서브 계정에서 숨기려는 템플릿은 숨기지 않은 카테고리에 속해 있으면 안 돼요.
{% endhint %}

