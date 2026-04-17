---

번역일: 2026-04-07
카테고리: 10-마케팅 > Facebook Conversion API (CAPI)
---

# 광고 관리자용 Meta Conversion API 액션을 전송하는 방법

이 가이드에서는 Meta로 Conversion API 액션을 전송하는 워크플로우 생성 과정과, 워크플로우의 Meta Conversion API 액션에 새로 추가된 광고 관리자 라디오 버튼의 기능과 사용자에게 제공하는 가치에 대해 알아보겠습니다.

---

## **목차**

- [광고 캠페인과 전환 데이터셋을 생성한 후 CAPI 액션 워크플로우를 만들어야 하는 이유는?](#광고-캠페인과-전환-데이터셋을-생성한-후-capi-액션-워크플로우를-만들어야-하는-이유는)
- [Meta Conversion API 액션과 함께 사용할 수 있는 워크플로우 트리거는?](#meta-conversion-api-액션과-함께-사용할-수-있는-워크플로우-트리거는)
- [Meta Conversion API 액션에서 광고 관리자 버튼과 연동 버튼의 차이점은?](#meta-conversion-api-액션에서-광고-관리자-버튼과-연동-버튼의-차이점은)
- [전화, 기회 상태 변경, 태그 등과 같은 트리거 이름을 가진 오프라인 이벤트를 Meta Conversion API 액션과 함께 사용할 수 있나요?](#전화-기회-상태-변경-태그-등과-같은-트리거-이름을-가진-오프라인-이벤트를-meta-conversion-api-액션과-함께-사용할-수-있나요)

---

## 광고 캠페인과 전환 데이터셋을 생성한 후 CAPI 액션 워크플로우를 만들어야 하는 이유는?

광고와 데이터셋 설정 후 Meta에 CAPI(Conversions API) 이벤트를 생성하고 전송하는 것은 Meta 광고 캠페인의 정확성, 신뢰성, 효과를 향상시키는 데 중요합니다. 표준 Meta 데이터셋에 추가로 CAPI를 사용해야 하는 이유는 다음과 같습니다:

- **정확성 향상**: CAPI는 서버에서 직접 데이터를 전송하여 브라우저 제한, 광고 차단기, 쿠키 제한 등의 문제를 우회하고, 사용자 행동을 더 안정적으로 추적합니다.
- **더 나은 어트리뷰션**: 기기와 플랫폼 전반에 걸쳐(쿠키를 차단한 사용자 포함) 전환을 추적하여 캠페인 최적화를 위한 더 완전한 데이터를 제공하므로 정확한 보고가 가능합니다.
- **픽셀 공백 해결**: 픽셀 데이터가 차단되거나 누락될 때(예: 느린 로딩 시간이나 개인정보 설정으로 인해) CAPI는 해당 전환이 여전히 기록되도록 보장합니다.
- **최적화 향상**: 더 세분화된 서버 측 데이터는 Meta가 광고 타겟팅과 성능을 개선하는 데 도움을 줍니다.
- **개인정보 규정 준수**: CAPI는 클라이언트 측 쿠키에 대한 의존도를 줄여 개인정보 규정에 더 적합합니다.
- **효율적인 예산 사용**: 더 정확한 데이터를 통해 Meta가 광고 예산을 최적화하고 투자 수익률(ROI)을 향상시킬 수 있습니다.

요약하자면, 픽셀 생성 후 Meta에 CAPI 이벤트를 전송하는 것은 추적 정확성을 향상시키고, 광고를 더 효과적으로 최적화하며, 기기와 브라우저 전반에서 어트리뷰션을 강화하는 데 필수적입니다. 브라우저 기반 픽셀 추적으로 남겨진 공백을 채우고, 개인정보 보호에 대한 우려가 증가하고 브라우저 제한이 강화되는 상황에서도 광고 캠페인이 가능한 한 효율적으로 작동하도록 보장합니다.

---

## Meta Conversion API 액션과 함께 사용할 수 있는 워크플로우 트리거는?

![Meta Conversion API 액션 트리거 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037638079/original/CL4W8FAhtV-LjEKe9VfqBVqFAUa_pIhS0A.png?1733217275)

워크플로우에서 액션이 Meta Conversion API인 경우, 사용할 수 있는 트리거는 FB CAPI 액션에서 사용할 이벤트 유형에 따라 달라집니다. 리드 이벤트와 퍼널 이벤트 모두에 대한 사용 가능한 트리거는 다음과 같습니다:

- **퍼널 이벤트**에는 다음 트리거를 사용할 수 있습니다: 폼 제출(Form Submitted), 설문 제출(Survey Submitted), 고객 예약 완료(Customer Booked Appointment), 주문 폼 제출(Order Form Submission). (예약의 경우 일반적인 트리거인 "appointment"가 아닌 "Customer Booked appointment"만 작동합니다. 이는 위젯용 트리거입니다)
- **리드 이벤트**에는 "Facebook Lead Form Submission(페이스북 리드 폼 제출)"과 "Pipeline Stage Change(파이프라인 단계 변경)" 트리거만 사용할 수 있습니다. (연락처가 Facebook 리드 폼에서 온 경우에만 작동합니다)
- **Instagram DM 이벤트**에는 CRM에서 연락처 생성으로 이어지는 모든 트리거를 사용할 수 있습니다.

---

## Meta Conversion API 액션에서 광고 관리자 버튼과 연동 버튼의 차이점은?

워크플로우에서 conversion API 액션을 생성할 때 두 가지 연결 유형 옵션이 있습니다:

- Integrations(연동)
- Ad Manager(광고 관리자)

![연결 유형 옵션 - 연동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051770657/original/XpDYkAD5lt1XxfNmsbndb6Ais472qqwOuw.png?1755497368)

![연결 유형 옵션 - 광고 관리자](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051770608/original/MsYr_VqK6pzvkMnj27jUWl_oLbHT_0pitw.png?1755497312)

**참고:** 연동 연결 유형과 관련된 모든 정보 및 각 필드의 세부사항은 다음 두 가이드를 참조하여 자세히 이해할 수 있습니다:
[Meta conversion leads walkthrough](../../42-통합/Facebook-Integration/facebook-conversion-leads-walkthrough.md)
[Setup a funnel event for Meta conversion API](../../42-통합/Facebook-Integration/how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api-.md)

연결 유형으로 광고 관리자 옵션을 추가한 주된 목적은 사용자 플로우를 간소화하고 Meta와 워크플로우 간의 지속적인 이동 번거로움을 줄이는 것입니다. 이 추가로 최소화되는 노력들은 다음과 같습니다:

- CAPI를 Meta로 전송할 캠페인에 따라 이벤트 유형을 선택할 수 있습니다. 캠페인 목표가 '웹사이트 트래픽'이면 퍼널 이벤트를 전송하고, '리드 생성'이면 리드 이벤트를 전송하며, 클릭 투 다이렉트 광고의 경우 Instagram DM을 선택합니다.

![이벤트 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051770827/original/rHgIqdAq4nGMsHDtrRcIuYzZueL9DcnATw.png?1755497695)

- 광고 관리자의 일부인 모든 픽셀이 드롭다운 항목으로 미리 채워져서 그 중 하나를 선택할 수 있는 옵션을 제공합니다. 이를 통해 Meta로 돌아가서 픽셀 ID를 복사/붙여넣기하는 번거로움이 줄어듭니다.

![픽셀 선택 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037642910/original/r6PKw2USmYvjpzah_TJZiuYisNbIbeB78w.png?1733220060)

- 광고 관리자 연결 유형에서는 액세스 토큰을 생성하고 CAPI 액션에 추가할 필요가 없습니다. 저희가 이를 처리하여 다시 한번 이동의 번거로움을 덜어드립니다.
- 리드 이벤트의 단계 이름은 다음을 의미합니다: 더 나은 보고를 위해 파이프라인과 파이프라인 단계 이름을 정확하게 나타내야 합니다. 기회 파이프라인과 단계의 커스텀 값을 추가하려면 끝에 있는 태그 아이콘을 사용하여 선택하세요.

---

## 전화, 기회 상태 변경, 태그 등과 같은 트리거 이름을 가진 오프라인 이벤트를 Meta Conversion API 액션과 함께 사용할 수 있나요?

네, 가능하며 이 이벤트를 전송하기 위해 마지막으로 가능한 픽셀 데이터를 사용할 것입니다. 기본적으로 fbclid ID가 발견되면 데이터가 conversion API로 전송됩니다. 다음 예시로 가장 잘 설명할 수 있습니다:

**예시 1:**

Facebook 폼 제출로 연락처가 생성되어 첫 번째 어트리뷰션 소스는 Paid Social(Facebook)이 됩니다. Facebook 폼 제출 트리거로 워크플로우를 사용하면 연락처에 fbclid가 있고 워크플로우가 conversion API(CAPI)로 데이터를 전송합니다.

추가 동작 - 일정 시간 후 해당 연락처가 기회 추가/업데이트 트리거 추가로 기회로 전환되면, Facebook 폼에서 제출된 연락처가 fbclid를 전달하므로 워크플로우에서 기회 상태 트리거를 사용하여 데이터를 conversion API로 전송할 수 있습니다.

**예시 2:**

Google 광고, 유기적 Google 검색 또는 직접 트래픽으로 연락처가 생성되어 첫 번째 어트리뷰션 소스는 Paid Search(Google) 또는 Direct Traffic이 됩니다. 일정 시간 후 연락처가 Facebook 폼과 상호작용하여 폼을 작성하면, 최신 어트리뷰션은 fbclid가 있는 연락처와 함께 Paid Social(Facebook)이 됩니다. 이제 에이전시에서 Facebook 폼 제출 > Meta conversion API로 워크플로우를 실행하면 fbclid와 함께 데이터를 conversion API로 전송합니다.

추가 동작 - 일정 시간 후 해당 연락처가 기회 추가/업데이트 트리거 추가로 기회로 전환되면, Facebook 폼에서 제출된 연락처가 fbclid를 전달하므로 워크플로우에서 기회 상태 트리거를 사용하여 데이터를 conversion API로 전송할 수 있습니다.

---

**참고사항:** 커스텀 값 추가 - Google Ads와 마찬가지로 이제 Facebook Ads 전환 추적 매개변수에 대한 커스텀 매핑을 허용합니다.

![커스텀 값 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043836459/original/gFVWuYxc77LoQwMEWkY0p_spdSoyA3QWZQ.jpeg?1742815441)

**작동 방식:**
기본적으로 커스텀 매핑은 비활성화되어 있습니다.
사용자는 이를 켜서 커스텀 매핑을 활성화할 수 있습니다.
활성화되면 사용자는 다음을 매핑할 수 있습니다:
1. 퍼널 이벤트용 FBCLID
2. 리드 이벤트용 Facebook Lead ID
3. 커스텀 매핑 필드가 제공되면 시스템 기본값보다 우선시됩니다.
4. 비워두면 시스템이 기본 내부 값을 계속 사용합니다.

---
*원문 최종 수정: Mon, 18 Aug, 2025 at 1:17 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*