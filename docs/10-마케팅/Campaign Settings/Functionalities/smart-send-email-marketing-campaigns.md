---

번역일: 2026-04-07
카테고리: 10-마케팅 > Campaign Settings/Functionalities
---

# 스마트 전송: 이메일 마케팅 캠페인

스마트 전송(Smart Send)은 "언제 전송 버튼을 눌러야 할까?"라는 고민을 없애고, 모든 일반 이메일 캠페인에 대해 최적의 발송 시간을 자동으로 추천해드립니다. 그 결과 별도 설정 없이도 더 높은 열람률과 클릭률을 얻을 수 있어, 데이터 기반의 성과를 원하는 바쁜 마케터에게 완벽한 솔루션입니다.

---

**목차**

- [스마트 전송이란?](#스마트-전송이란)
- [스마트 전송의 주요 장점](#스마트-전송의-주요-장점)
- [이용 조건](#이용-조건)
- [최적 시간 추천 로직](#최적-시간-추천-로직)
- [분석 대시보드 개선사항](#분석-대시보드-개선사항)
- [스마트 전송 설정 방법](#스마트-전송-설정-방법)
- [자주 묻는 질문](#자주-묻는-질문)
---

## **스마트 전송이란?**

스마트 전송은 Hyperclass의 발송 및 예약 화면에 새로 추가된 발송 옵션으로, 지난 60일간의 수신자 참여도(열람, 클릭 및 기타 이벤트)를 분석하여 캠페인에 가장 적합한 단일 발송 시간을 찾아줍니다. 추천의 통계적 신뢰성을 보장하기 위해 해당 로케이션에서 지난 60일간 최소 1,000건의 이메일을 발송해야 합니다. 추천을 요청하면 스마트 전송이 즉시 데이터를 분석하여 가장 높은 참여도가 예상되는 시간대에 이메일을 예약합니다.

---

## **스마트 전송의 주요 장점**

- 수동 분석 없이도 열람률과 클릭률 자동 향상

- 원활한 워크플로우 — 기존의 발송 및 예약 과정에서 지금 전송(Send Now), 간단 예약(Simple Schedule), 일괄 발송(Batch), RSS 예약(RSS Schedule)과 함께 옵션으로 표시

- 유연성 — 추천을 받아들이거나 원하는 날짜와 시간으로 직접 설정 가능

- 투명한 ROI — 발송 후 분석에서 해당 로케이션의 과거 평균 대비 참여도 향상 비율 표시

---

## **이용 조건**

스마트 전송은 Hyperclass에 정확한 예측을 위한 충분한 최근 데이터가 있을 때만 작동합니다.

- 동일 로케이션에서 지난 60일간 최소 1,000건의 이메일 발송

- 이메일 빌더(Email Builder) → 캠페인(Campaigns)에서 생성된 캠페인

- 현재 일반 이메일 캠페인만 지원 (A/B 테스트 및 일괄 발송 지원 예정)

---

## **최적 시간 추천 로직**

스마트 전송은 다음 요소들을 고려한 60일 참여도 모델을 구축합니다:

- 시간대별 열람 이벤트 (하위 계정의 현지 시간 기준)

- 클릭 이벤트 및 기타 상호작용을 통한 매출 증대 참여도 예측 정밀화

- 과거 성과가 낮았던 시간대 추천을 피하기 위한 로케이션 평균 대비 상대적 성과

![스마트 전송 추천 로직 차트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055728760/original/0lEyq3ktSKx2taYt-z0Qb6z4hX1_CT71nw.png?1760105895)

특정 시간에 대한 데이터가 부족한 경우, 스마트 전송은 모델이 신뢰도 기준을 충족할 때까지 자동으로 시간 범위를 확대합니다.

---

## **분석 대시보드 개선사항**

스마트 전송 캠페인 발송 후, 이메일 통계(Email Statistics) 대시보드에서 다음을 확인할 수 있습니다:

- 로케이션의 60일 기준선 대비 참여도 향상률(%)

- 추천 시간대별 열람 및 클릭 세부 내역

- 스마트 전송 vs 수동 예약 캠페인 비교 차트로 기능의 효과 정량화

![스마트 전송 분석 대시보드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055728695/original/TtJ08zhPpQvow9YHa2Bne8pcILhUCODc4Q.png?1760105836)

---

## 스마트 전송 설정 방법

스마트 전송으로 캠페인을 시작하는 것은 템플릿을 선택하는 것만큼 간단합니다:

1. 마케팅(Marketing) → 이메일(Emails)로 이동하세요.

![마케팅 이메일 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055729100/original/NDepPiX80L8Yqfl6DnhhYMJNi7Q2ZGA59w.png?1760106038)

2. 캠페인(Campaigns) → 새 캠페인 만들기(Create New Campaign)를 클릭하세요.

![새 캠페인 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055729212/original/qZh1TIvr0aynC6TjYxpxyOR70M1CIgWEcw.png?1760106080)

3. 이메일을 디자인한 후 전송 또는 예약(Send or Schedule)을 클릭하세요.

![이메일 디자인 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055729304/original/s5t7KdwxY_PmaHcNEyxQfrF81JlAWcC27w.png?1760106152)

4. 스마트 전송(Smart Send, 다섯 번째 발송 옵션)을 선택하세요.

![스마트 전송 옵션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055729345/original/KRdhrRarp_D3PYjbhjmWvZWEGFj1H0ao7w.png?1760106176)

5. 필수 항목을 완료하고 추천 받기(Get Recommendation)를 클릭하세요. Hyperclass가 최적 발송 시간을 표시합니다.

![스마트 전송 추천 받기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055730199/original/UttAfKi8QbBOrAQij5x5FcqPwL7hcIYvRw.png?1760106484)

**팁**: 이제 캠페인을 예약할 수 있습니다. 발송 후 마케팅(Marketing) → 이메일(Emails) → 통계(Statistics)에서 참여도 향상을 확인해보세요.

---

## **자주 묻는 질문**

**Q: 우리 로케이션에서 지난 60일간 1,000건의 이메일을 보내지 않았다면 어떻게 되나요?**

스마트 전송 옵션이 회색으로 비활성화됩니다. 기준을 충족할 때까지 간단 예약을 사용하시면, 충분한 데이터가 확보되면 Hyperclass가 자동으로 스마트 전송을 활성화합니다.

**Q: 어떤 연락처가 언제 이메일을 받았는지 확인할 수 있나요?**

네, 가능합니다. 캠페인의 수신자(Recipient) 탭에서 각 발송의 예약된 타임스탬프를 확인할 수 있어, 발송 시간을 검토하거나 데이터를 내보내서 더 자세한 분석을 할 수 있습니다.

**Q: 스마트 전송이 개별 연락처의 시간대를 고려하나요?**

스마트 전송은 현재 로케이션 수준에서 최적화됩니다. 연락처별 시간대 발송을 원하신다면 워크플로우에서 대기(Wait) → 날짜/시간(Date/Time) 액션을 사용하세요.

**Q: 예약(Schedule)을 클릭한 후에도 추천을 변경할 수 있나요?**

물론입니다. 예약된 시간 전에 캠페인 내에서 일정 변경(Reschedule)을 클릭하여 새 시간을 선택하고 저장하시면 됩니다.

**Q: 스마트 전송이 A/B 테스트와 함께 작동하나요?**

A/B 캠페인 지원은 개발 계획에 있으며, 현재는 A/B 테스트에 간단 예약을 사용해주세요.

**Q: API를 통해 스마트 전송을 사용할 수 있나요?**

아직은 불가능합니다. API 접근은 향후 릴리스에서 발표될 예정입니다.

---
*원문 최종 수정: 2025년 10월 14일*
*Hyperclass 사용 가이드 — hyperclass.ai*