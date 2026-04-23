---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005499-how-to-create-google-ads-conversion-actions-in-ad-manager
번역일: 2026-04-23
카테고리: ad-manager
---

# 광고 관리자에서 구글 광고 전환 액션 생성하는 방법

광고 관리자(Ad Manager)를 사용하면 플랫폼 내에서 직접 구글 광고 오프라인 전환 액션을 생성, 관리, 편집할 수 있습니다. 이를 통해 오프라인 판매, 리드, 액션들이 구글 광고에서 적절히 추적되어 더 나은 최적화와 보고가 가능합니다.

이 문서에서는 광고 관리자 내에서 구글 광고 전환 액션 플로우를 사용하는 방법을 다룹니다.

## 목차

- [전환 액션 섹션 찾기](#전환-액션-섹션-찾기)
- [기존 구글 광고 전환 보기](#기존-구글-광고-전환-보기)
- [새 전환 액션 생성](#새-전환-액션-생성)
- [전환 액션 편집 또는 삭제](#전환-액션-편집-또는-삭제)
- [주요 참고사항 및 모범 사례](#주요-참고사항-및-모범-사례)

## 전환 액션 섹션 찾기

- Marketing(마케팅) → Ad Manager(광고 관리자)로 이동하세요

- Settings(설정) 아이콘(톱니바퀴)을 클릭하세요
![광고 관리자 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048076525/original/VAnMiGOPDQ0xEO8goMpU681mpG0kkvK8iQ.jpeg?1749642552)

- Platform Settings(플랫폼 설정) 아래 Google Ads를 선택하세요

- Conversions(전환) 탭을 클릭하세요
![구글 광고 전환 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048076520/original/jL1mfQYYtWfs__MqBE72ihXMriRrZTgh1w.jpeg?1749642552)

전환 액션 표 보기가 열립니다.

## 기존 구글 광고 전환 보기

Conversions(전환) 탭에서 다음을 확인할 수 있습니다:
![전환 목록 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048076526/original/UahMedDIyd4r__y2SZnsVHvzsITjgeYBug.jpeg?1749642552)

- 연결된 구글 광고 계정의 모든 기존 전환 액션 목록

- 광고 관리자를 통해 생성한 새로운 전환들

- 표에 포함된 컬럼들:
  - Conversion Name(전환 이름)
  - All Conversion Value(모든 전환 가치)
  - All Conversions(모든 전환)
  - Conversion Source(전환 소스)

다음 기능들을 사용할 수 있습니다:

- Search(검색): 이름으로 전환을 필터링
- Date Range(날짜 범위) 필터: 특정 기간 내에 생성되거나 업데이트된 전환 보기

## 새 전환 액션 생성

새 전환 액션을 생성하려면:

- "+ Create a new conversion(+ 새 전환 생성)" 버튼을 클릭하세요
![새 전환 생성 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048076529/original/BIxwMhrWbHHG6UFQrYiUddlGTOR2S8MBvg.jpeg?1749642552)

- Create Conversion(전환 생성) 모달에서 폼을 작성하세요:

| 필드 | 설명 |
|------|------|
| Conversion Name(전환 이름) | 이 전환을 식별할 고유한 이름 |
| Conversion Source(전환 소스) | 오프라인 액션 유형 선택 (Converted Lead(전환된 리드), Purchase(구매), Signup(가입), Add to Cart(장바구니 추가) 등) |
| Count(카운트) | Many per click(클릭당 여러 번, 구매에 권장) / One per click(클릭당 한 번, 리드에 권장) |
| Value(가치) | Use same value per conversion(전환당 동일 가치 사용) / Use different value per conversion(전환당 다른 가치 사용) / Don't use value(가치 사용 안함) |
| Currency(통화) | 통화를 선택하세요 |
| Click-through conversion window(클릭스루 전환 윈도우) | 어트리뷰션 윈도우 선택 (1일~90일) |
| Attribution model(어트리뷰션 모델) | Data-driven(데이터 기반, 오프라인 전환용 기본 설정) |

- Create(생성) 버튼을 클릭하세요.

API를 통해 구글 광고에서 전환 액션이 생성됩니다 - 구글 광고 UI에서 수동 설정이 필요하지 않습니다.

## 전환 액션 편집 또는 삭제

앱에서 생성한 모든 전환 액션을 편집하거나 삭제할 수 있습니다:

- 전환 옆의 3점 메뉴를 클릭하세요

- Edit(편집) 또는 Delete(삭제)를 선택하세요
![전환 편집 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048076521/original/Sha4Jr_FfTIuAEldz-_El-_13ezPYRwKEg.jpeg?1749642552)

**편집 모달에서 다음을 업데이트할 수 있습니다:**

- Count(카운트) 설정
- Value & currency(가치 & 통화)
- Click-through window(클릭스루 윈도우)
- Conversion source(전환 소스)

**참고:** Attribution model(어트리뷰션 모델)은 오프라인 전환의 경우 Data-driven(데이터 기반)으로 고정됩니다(구글 광고 가이드라인에 따름).

## 주요 참고사항 및 모범 사례

- 이 플로우는 오프라인 전환 액션용입니다 - 웹사이트/앱 외부에서 발생하는 리드, 판매, 통화와 같은 이벤트를 추적합니다.
- 여기서 생성된 모든 전환은 자동으로 구글 광고 계정에서 사용할 수 있으며 캠페인 보고에 활용할 수 있습니다.
- 기존 구글 광고 전환은 자동으로 이 화면으로 가져와집니다.
- 저희 추적 시스템은 이러한 전환 액션과 일치하는 전환 이벤트를 업로드합니다(워크플로우를 통해 - 이 설정과는 별개).
- 향후 개선 사항으로 웹사이트 전환 액션을 위한 Google Tag Manager(GTM) 연동이 추가될 예정입니다.

---
*원문 최종 수정: Wed, 11 Jun, 2025 at 6:54 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*