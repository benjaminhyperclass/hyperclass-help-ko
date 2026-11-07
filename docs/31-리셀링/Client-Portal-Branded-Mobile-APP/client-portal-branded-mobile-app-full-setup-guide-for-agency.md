---
원문: /support/solutions/articles/155000002617-client-portal-branded-mobile-app-full-setup-guide-for-agency
번역일: 2026-11-06
카테고리: 31-리셀링
---

# 브랜드 클라이언트 포털 앱 재판매 설정 가이드 (에이전시용)

브랜드 클라이언트 포털 앱을 클라이언트에게 재판매하고, 어떤 서브 계정이 이 앱을 쓰는지 하이퍼클래스에서 확인하는 방법을 안내해요. 에이전시 관리자가 읽는 문서예요.

---

## 자동 재판매 사전 준비

### 에이전시 Stripe 계정 연결

클라이언트가 내는 브랜드 클라이언트 포털 앱 구독료는 에이전시의 Stripe 계정으로 결제돼요. 에이전시에 Stripe 계정을 연결하는 방법은 「How to connect Stripe to your agency dashboard」 도움말 문서를 참고하세요.

{% hint style="info" %}
Stripe 계정이 없어도 서브 계정에 브랜드 클라이언트 포털 앱을 배포할 수 있어요. 이 경우에는 자동 재판매 기능을 쓰지 않아요.
{% endhint %}

---

## 브랜드 클라이언트 포털 앱 가격 설정

에이전시 전체에 적용되는 가격은 에이전시 왼쪽 메뉴의 **재판매** 탭에서 설정해요.

![에이전시 재판매 탭의 가격 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028890082/original/pDR00fmzhEZneZKKDuGyVxDQQGaa14-ifA.png?1720450224)

---

## 특정 클라이언트에게 다른 가격 적용하기

일부 클라이언트에게 다른 가격을 적용하려면 아래 순서로 설정하세요.

1. **서브 계정** 목록에서 클라이언트를 검색해요.
2. 해당 클라이언트 오른쪽의 점 세 개 아이콘을 누르고 **Manage Clients**(클라이언트 관리)를 선택해요.

   ![서브 계정 목록에서 클라이언트 관리 메뉴를 여는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008617196/original/ESt8rJrKH8t72uVukevwtQGG4hbxPT2rtg.png?1695731785)

3. 아래로 스크롤해 **재판매** 섹션으로 이동해요.
4. **Branded Client Portal Mobile App Pricing**(브랜드 클라이언트 포털 앱 가격)을 원하는 금액으로 바꿔요.
5. **저장**을 눌러요.

---

## 특정 클라이언트에게 브랜드 클라이언트 포털 앱 판매 중지하기

특정 클라이언트에게 브랜드 클라이언트 포털 앱을 제공하고 싶지 않다면 아래 순서로 설정하세요.

1. **서브 계정** 목록에서 클라이언트를 검색해요.
2. 해당 클라이언트 오른쪽의 점 세 개 아이콘을 누르고 **Manage Clients**(클라이언트 관리)를 선택해요.

   ![서브 계정 목록에서 클라이언트 관리 메뉴를 여는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008617196/original/ESt8rJrKH8t72uVukevwtQGG4hbxPT2rtg.png?1695731785)

3. 아래로 스크롤해 **재판매** 섹션으로 이동해요.
4. **브랜드 클라이언트 포털 앱** 토글을 꺼요.
5. **저장**을 눌러요.

![재판매 섹션에서 브랜드 클라이언트 포털 앱 토글을 끄는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028863988/original/Vut3tme9uixKr1P8sI1GNxkJiX24dVXlWg.png?1720434687)

{% hint style="info" %}
**참고**

이 제공 설정은 판매가 이루어지기 전에만 끌 수 있어요. 서브 계정이 이미 브랜드 클라이언트 포털 앱을 구매했다면 여기에서 끌 수 없어요.
{% endhint %}

![이미 구매한 서브 계정은 끌 수 없다는 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028863909/original/sJckNnDACYKB2XDHs9E4-b6qU0uIty5dlA.png?1720434654)

---

## Stripe 결제나 재판매 없이 서브 계정에 직접 배포하기

1. **서브 계정** 목록에서 클라이언트를 검색해요.
2. 해당 클라이언트 오른쪽의 점 세 개 아이콘을 누르고 **Manage Clients**(클라이언트 관리)를 선택해요.

   ![서브 계정 목록에서 클라이언트 관리 메뉴를 여는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008617196/original/ESt8rJrKH8t72uVukevwtQGG4hbxPT2rtg.png?1695731785)

3. 아래로 스크롤해 **재판매** 섹션으로 이동해요.
4. **브랜드 클라이언트 포털 앱** 항목에서 직접 배포 약관(T&C)을 읽고 동의해요.
5. **Pay Now**(지금 결제)를 눌러요.

![브랜드 클라이언트 포털 앱 직접 배포 약관 동의와 결제 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028865004/original/jTg0HtwHjOPjhcFW07HY-6cH5VZnb-P19g.png?1720435338)

{% hint style="info" %}
**참고**

에이전시에 Stripe 계정이 없는 경우, 이렇게 수동으로 배포하기 전까지는 서브 계정의 앱 설정에 브랜드 클라이언트 포털 앱이 보이지 않아요. 수동 배포를 해도 서브 계정과 에이전시 사이의 구독은 만들어지지 않아요. 하이퍼클래스와 에이전시 사이의 구독은 그대로 만들어져요.
{% endhint %}

---

## 하이퍼클래스에 얼마를 내고 있는지, 어떤 계정인지 확인하기

1. **에이전시 설정 > 청구/결제 > 구독**으로 이동해요.
2. **Reselling Branded Client Portal Mobile App**(브랜드 클라이언트 포털 앱 재판매) 항목에서 월 금액과 구독 수를 바로 확인할 수 있어요.

   ![구독 화면에서 월 금액과 구독 수를 확인하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027278677/original/qfXv81LmWkGBrIM1YpFiKO1PQ5jIE_jR-Q.png?1717753867)

3. **서브 계정 표시**를 눌러요. 브랜드 클라이언트 포털 앱을 쓰는 서브 계정이 모두 나와요.

   ![서브 계정 표시를 눌러 앱을 쓰는 서브 계정 목록을 보는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027278713/original/CQ9YpFMr12rqJZ3-KPT4jlqlkIRpfTvXPg.png?1717753910)

---

## 클라이언트는 어떻게 사용하나요?

### 클라이언트는 이 기능을 어디서 찾나요?

클라이언트는 서브 계정 왼쪽 메뉴의 **사이트 > 클라이언트 포탈 > 설정 > 브랜드 모바일 앱**에서 브랜드 클라이언트 포털 앱을 찾을 수 있어요.

![서브 계정에서 브랜드 모바일 앱 메뉴를 찾는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027280079/original/JQ7A5vekEyhWdSeqe4NzWKHq_ZKBiccq1w.png?1717754923)

---

## 클라이언트는 어떻게 구매하나요?

1. 클라이언트가 기능을 확인한 뒤 결제 정보를 입력하고 구매를 확인하면, 에이전시에서 브랜드 클라이언트 포털 앱을 구매할 수 있어요.
2. 클라이언트가 **확인** 버튼을 누르면 구독이 만들어지고 결제가 처리돼요. 그다음 앱 대시보드로 이동해요.

![클라이언트가 결제 정보를 입력하고 구매를 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027444155/original/yWvVGcu6jZyl_6oiU91QGEJYg0LhayPNFw.png?1718096205)
![구매 후 앱 대시보드로 이동한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027444229/original/EiAwZeo1lS1-MPpqN6Z1TfO-f7P2F_kTKg.png?1718096241)

## 클라이언트는 브랜드 클라이언트 포털 앱을 어떻게 설정하나요?

단계별 설정 방법은 「How to setup Branded Client Portal Mobile App」 도움말 문서에서 자세히 안내해요.

---

## 비용은 어떻게 청구되나요?

클라이언트가 브랜드 클라이언트 포털 앱을 구매하면 시스템에 구독 2개가 만들어져요.

1. 클라이언트의 카드와 에이전시의 Stripe 계정 사이의 구독이에요. 에이전시가 클라이언트에게 결제를 받는 데 쓰여요.
2. 하이퍼클래스와 에이전시의 Stripe 계정 사이의 구독이에요. 에이전시는 서브 계정 1개당 월 $79를 하이퍼클래스에 내요.

![클라이언트 구매 시 만들어지는 구독 2개를 보여 주는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027283088/original/NDX58TboojyTCXU7ksrQiga0aQzDRpgUfQ.png?1717757020)

---

## 앱 구독 비활성 경고

브랜드 모바일 앱 사용자는 구독에 문제가 생기면(일시중지 또는 취소) 전용 화면을 보게 돼요. 이 화면은 다음 내용을 분명하게 알려 줘요.

- 브랜드 앱이 더 이상 운영되지 않아요.
- 구독을 갱신하는 조치가 필요해요.
- 앱을 쓰는 고객도 영향을 받아요. 그래서 상황이 더 눈에 띄고 급하게 느껴져요.

이 화면은 구독 취소의 영향을 알려 주고 빠른 재구독을 유도해서, 이탈을 줄이는 데 도움이 돼요. 문제를 바로 해결할 수 있는 **Resubscribe & Reignite My App**(다시 구독하고 앱 되살리기) 버튼도 있어요.

![구독이 비활성일 때 사용자에게 보이는 경고 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054629550/original/jeygOBJihgX8gnlRzY-FwnF3pxnIG4Dkgw.png?1758846379)

---

## 고객 성공팀과 통화 예약

에이전시는 화이트라벨 브랜드 앱을 설정할 때 하이퍼클래스 팀과 바로 통화를 예약할 수 있어요. 이 기능은 다음과 같아요.

- 에이전시 전용이에요.
- 더 많은 에이전시가 쓰도록 만들어졌어요.
- 안내를 받으며 온보딩해서 앱을 운영하기까지 걸리는 시간을 줄이는 것이 목적이에요.

**Book A Call With Our Team**(하이퍼클래스 팀과 통화 예약) 버튼을 누르면 예약 페이지로 이동해요.

{% hint style="info" %}
이 버튼은 에이전시 관리자에게만 보여요.
{% endhint %}

![에이전시 관리자에게만 보이는 통화 예약 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054629521/original/czG45Edxs1k8gIthMgoDz4bcN3D8NitqCw.png?1758846225)

예약 페이지로 가는 직접 링크는 하이퍼클래스 고객지원에 문의하세요.

![통화 예약 페이지 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054629493/original/9ARrWPOshGVdq2XK4sgppY83HZWTYHo-5Q.png?1758846145)
