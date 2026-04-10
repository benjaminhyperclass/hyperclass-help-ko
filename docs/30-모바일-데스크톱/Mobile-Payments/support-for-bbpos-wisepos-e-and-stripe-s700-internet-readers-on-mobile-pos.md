---

번역일: 2026-04-08
카테고리: 30-모바일-데스크톱 > Mobile Payments
---

# 모바일 POS에서 BBPOS WisePOS E 및 Stripe S700 인터넷 리더기 지원

이 가이드는 Stripe의 Wi-Fi 지원 **WisePOS E** 및 **S700** 리더기를 하이퍼클래스, LeadConnector 또는 화이트라벨 모바일 앱과 연결하는 방법을 설명합니다. 연결이 완료되면 POS 내에서 직접 안전한 카드 결제를 받을 수 있으며, 동글이나 케이블, 브라우저 창이 필요하지 않습니다!

---

**목차**

- [Stripe 인터넷 리더기란?](#stripe-인터넷-리더기란)
- [모바일 POS와 WisePOS E 및 S700 사용의 주요 장점](#모바일-pos와-wisepos-e-및-s700-사용의-주요-장점)
- [사전 요구사항](#사전-요구사항)
- [WisePOS E 또는 S700 리더기 등록 방법](#wisepos-e-또는-s700-리더기-등록-방법)
- [등록된 리더기로 결제 받기](#등록된-리더기로-결제-받기)
- [문제 해결 및 모범 사례](#문제-해결-및-모범-사례)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **Stripe 인터넷 리더기란?**

Stripe 인터넷 리더기는 로컬 Wi-Fi를 통해 휴대폰이나 태블릿에 연결되는 독립형 결제 단말기입니다. 인터넷에 연결되어 있어 모든 탭, 삽입, 스와이프가 Stripe의 PCI 인증 인프라를 통해 직접 흘러가며 종단간 암호화를 제공합니다. 하이퍼클래스와 연결하면 iOS나 Android 기기를 카운터탑부터 모바일까지 어디서든 체크아웃할 수 있는 결제 스테이션으로 변환할 수 있습니다.

![WisePOS E 및 S700 리더기 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053905517/original/A7AmwsibFdzVLKFzsnh2CyDQbIvtNeQvGg.jpeg?1758053802)

![리더기 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053905495/original/-EXzFtt8c7SUGSdS0eiSEXMMtS44oZ8tuw.png?1758053726)

---

## 모바일 POS와 WisePOS E 및 S700 사용의 주요 장점

장점을 알면 모든 체크아웃 라인이나 이동 직원에게 적합한 하드웨어를 선택할 수 있습니다.

- **올인원 하드웨어**: 칩, 탭, 마그네틱 스트라이프 결제를 즉시 수락
- **빠른 대기줄**: 고객 대면 프롬프트로 계산원 시간 단축
- **로케이션당 무제한 리더기**: 필요한 만큼 기기를 등록하며, 각각은 결제 수단 목록에 나타남
- **통합 리포팅**: 오프라인 및 온라인 판매가 동일한 하이퍼클래스 결제(Payments) 대시보드에 표시
- **자동 컴플라이언스**: 펌웨어 업데이트가 수동 작업 없이 새로운 카드 스킴 요구사항을 추가

---

## 사전 요구사항

페어링 오류와 결제 실패를 방지하기 위해 시작하기 전에 다음 항목을 확인하세요.

- **결제(Payments) → 연동(Integrations)**에서 연결된 라이브 Stripe 계정
- 모바일 기기와 리더기가 동일한 2.4 GHz 또는 5 GHz Wi-Fi 네트워크에 연결
- App Store 또는 Google Play의 하이퍼클래스/LeadConnector 퍼블릭 베타에 등록된 기기
- 모바일 앱 버전 v 3.103.4 이상

---

## WisePOS E 또는 S700 리더기 등록 방법

페어링은 물리적 단말기를 하위 계정에 연결하여 체크아웃 시 나타나도록 합니다.

#### **1단계: 리더기에서 페어링 코드 받기**

- 리더기 전원을 켭니다
- 대기 화면에서 Generate Pairing Code를 탭하여 6자리 코드를 표시합니다

#### **2단계: 인터넷 리더기 설정으로 이동**

- **모바일 앱**을 열고 올바른 하위 계정을 선택합니다
- **설정(Settings)** → Stripe Payment Hardware → Pair New Devices → Internet Readers로 이동합니다

![인터넷 리더기 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053906031/original/GGg16hSwyUPy3RiltXf_b0z9tloUU5SiGw.png?1758054983)

#### **3단계: 기기 페어링**

- 체크아웃 시 인식할 수 있는 리더기 이름을 입력합니다 (예: FrontCounter_WisePOS1)
- 리더기에 표시된 페어링 코드를 입력합니다
- Pair를 탭합니다. "FrontCounter_WisePOS1 registered successfully" 토스트 메시지를 확인합니다

![페어링 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053906064/original/WGuq0-NGLB8w4lbzuYLcUUdfTJExIHQDng.png?1758055049)

#### **4단계: 다른 기기에 대해 반복**

- 네트워크의 다른 추가 리더기에 대해 이 단계를 반복합니다

---

## 등록된 리더기로 결제 받기

페어링이 완료되면 리더기를 선택하는 것이 저장된 카드를 선택하는 것만큼 쉽습니다.

- POS에서 판매를 시작하고 장바구니에 상품을 추가합니다
- 결제 수단(Payment Instruments)에서 사용하려는 리더기를 선택합니다
- 고객에게 리더기를 제시합니다. 고객은 탭, 삽입 또는 스와이프할 수 있습니다. 모바일 화면에 5분 타이머가 카운트다운됩니다
- 확인을 기다립니다. 리더기에 "Approved"가 표시되고 거래 내역(Transaction History)에 즉시 판매가 나타납니다

---

## 문제 해결 및 모범 사례

모든 라인이 원활히 진행될 수 있도록 다음과 같은 빠른 해결책을 사용하세요.

| 증상 | 해결책 |
|------|--------|
| 리더기를 찾을 수 없음 | 두 기기가 동일한 SSID에 있는지 확인; 리더기 재시작; 포트 443 및 4070이 열려있는지 확인 |
| 페어링 코드 만료 | 코드는 60초 지속됨—리더기에서 새 코드를 생성하고 다시 시도 |
| 결제 타이머 만료 | 판매를 다시 시작; 고객에게 비프음이 날 때까지 카드를 제자리에 두도록 요청 |
| 매장 간 리더기 이동 필요 | Payment Devices에서 페어링 해제 후 새 Wi-Fi 네트워크에서 페어링 단계 반복 |

---

## **자주 묻는 질문**

**Q: 하나의 하위 계정에 몇 개의 인터넷 리더기를 등록할 수 있나요?**
무제한입니다. 각 리더기는 결제 수단(Payment Instruments)에 개별적으로 표시됩니다.

**Q: 블루투스가 필요한가요?**
아니요. WisePOS E와 S700은 로컬 Wi-Fi로 페어링됩니다.

**Q: 고객이 리더기에서 팁을 추가할 수 있나요?**
네. POS 설정(POS Settings) → 팁(Gratuity)에서 Prompt for Tip을 활성화하세요.

**Q: 웹 앱에서 이러한 결제를 환불할 수 있나요?**
물론입니다—환불 흐름은 온라인 Stripe 청구와 동일합니다.

**Q: 리더기가 오프라인에서 작동하나요?**
거래는 활성 인터넷 연결이 필요합니다. Wi-Fi가 끊어지면 현금 또는 저장된 카드를 받으세요.

---
*원문 최종 수정: Tue, 16 Sep, 2025 at 3:49 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*