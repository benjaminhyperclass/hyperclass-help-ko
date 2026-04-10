---

번역일: 2026-04-09
카테고리: 42-통합 > Jobber Integration
---

# Jobber와 Hyperclass 연동하는 방법

Hyperclass는 이제 Jobber와 연동되어 운영과 마케팅 간에 고객 데이터를 동기화할 수 있습니다. 이 가이드에서는 연동 기능, 대상 사용자, 설정 방법을 설명합니다. 양방향 고객/연락처 동기화, 에이전시 일괄 배포, 과거 데이터 가져오기, 포함된 스냅샷을 다루며, 빠르게 도입하고 중복 데이터 입력을 방지하는 방법을 알아봅니다.

**목차**

- [Jobber와 Hyperclass 연동이란?](#jobber와-hyperclass-연동이란)
- [Jobber 연동의 주요 장점](#jobber-연동의-주요-장점)
- [Jobber 연동 설정 방법](#jobber-연동-설정-방법)
- [자주 묻는 질문](#자주-묻는-질문)

# **Jobber와 Hyperclass 연동이란?**

Jobber 연동은 Jobber의 현장 서비스 운영과 Hyperclass의 영업/마케팅을 연결합니다. 고객 및 연락처 정보가 두 플랫폼 간에 동기화되어, 팀이 Jobber에서 일상적인 작업을 처리하면서 동시에 Hyperclass에서 커뮤니케이션과 파이프라인을 자동화할 수 있습니다. 데이터를 다시 입력하거나 레코드가 일치하지 않을 위험 없이 말이죠.

## **Jobber 연동의 주요 장점**

- **양방향 고객 동기화**: 이름, 이메일, 전화번호, 주소 등을 시스템 간에 일관되게 유지합니다.

- **안정적인 매칭**: Jobber 고객 ID로 연결하여 이메일/전화번호가 변경되어도 중복 레코드를 방지합니다.

- **과거 + 실시간 동기화**: 선택한 날짜부터 과거 고객 데이터를 가져온 후, 새로운 고객을 자동으로 계속 동기화합니다.

- **스냅샷 포함**: 미리 구축된 워크플로우와 메시지 템플릿으로 더 빠르게 시작할 수 있습니다.

- **마케팅+운영 연계**: Jobber에서 작업을 처리하면서 Hyperclass의 퍼널, CRM, 자동화를 활용합니다.

- **수동 작업 감소**: 반복적인 데이터 입력을 없애고 오류율을 낮춥니다.

- **일관된 리포팅**: 통합된 고객 데이터로 어트리뷰션과 캠페인 타겟팅이 향상됩니다.

## **Jobber 연동 설정 방법**

적절한 설정으로 데이터가 정확하게 동기화되고 팀이 포함된 스냅샷과 워크플로우를 즉시 사용할 수 있습니다. 에이전시와 각 하위 계정에 대해 아래 단계를 따르세요.

**참고:** 이 앱은 **에이전시 관리자만 볼 수 있고 설치할 수 있습니다**. 에이전시에서 앱을 설치하기 전까지는 하위 계정에서 앱이 보이지 않습니다.

### 1단계: 에이전시 레벨 설치 및 일괄 배포

- Hyperclass(에이전시 보기)에서 **App Marketplace(앱 마켓플레이스)**를 엽니다.

- **Jobber**를 검색합니다.

- Jobber Integration 앱을 클릭합니다.

![Jobber 연동 앱](https://jumpshare.com/share/n6A7mU6pwuHOatG3Pl35+/Screen+Shot+2025-10-22+at+7.33.22+PM.png)

- **Install(설치)**을 클릭합니다.

![설치 버튼](https://jumpshare.com/share/XQ0IkNwoYjm7F0MYeXeC+/Screen+Shot+2025-10-22+at+7.42.35+PM.png)

- 배포할 **하위 계정**을 선택합니다.

- **Proceed(계속)**를 클릭합니다.

![하위 계정 선택](https://jumpshare.com/share/ocpCcjM4aRBMoWE2bJ4A+/Screen+Shot+2025-10-22+at+7.44.23+PM.png)

- 스냅샷에서 **푸시/업데이트**할 **Assets(에셋)**을 선택합니다.

- 하위 계정의 현재 데이터와 **충돌 확인 없이 진행**하거나

- **충돌 확인 후 진행**을 선택합니다.

![에셋 선택](https://jumpshare.com/share/diQxQLRosdELsPSGwwbL+/Screen+Shot+2025-10-22+at+7.46.21+PM.png)

- 충돌 확인 후 진행을 선택한 경우, + 아이콘을 클릭하여 하위 계정의 충돌을 확장하고 검토합니다. 그런 다음 덮어쓸 에셋을 선택합니다.

- Proceed(계속)를 클릭합니다.

- 박스에 **Confirm**을 입력하고 Proceed(계속)를 클릭합니다.

![충돌 확인 및 진행](https://jumpshare.com/share/3JnSuod7JPUJ6yWgmMj1+/GIF+Recording+2025-10-22+at+7.55.26+PM.gif)

- **Allow & Install(허용 및 설치)**를 클릭합니다.

![허용 및 설치](https://jumpshare.com/share/NtA4zxh7aAlnpDXkl7da+/Screen+Shot+2025-10-22+at+7.58.28+PM.png)

### **2단계:** 하위 계정 연결

- 하위 계정으로 전환합니다.

- App Marketplace(앱 마켓플레이스) → Installed Apps(설치된 앱) → Jobber를 클릭합니다.

- **Connect(연결)**를 클릭하고 인증 플로우를 완료합니다.

![하위 계정 연결](https://jumpshare.com/share/y8TfIa2QF5TlEeIIdDgd+/GIF+Recording+2025-10-22+at+8.23.20+PM.gif)

## **자주 묻는 질문**

**Q: 하나의 Jobber 계정에 여러 하위 계정을 연결할 수 있나요?**

아니요, Jobber는 하나의 활성 연결만 지원합니다. 즉, 고유한 Jobber 계정에 하나의 Hyperclass 하위 계정만 연결할 수 있습니다.

**Q: Hyperclass와 Jobber 간 초기 연락처<>고객 동기화는 얼마나 걸리나요?**

Jobber는 5분마다 약 2,500개의 레코드 동기화를 허용합니다. 따라서 Jobber 앱의 "Sync Data(데이터 동기화)" 탭에서 선택한 시작 날짜에 따라 시스템이 모든 고객 데이터를 Hyperclass로 동기화하는 데 필요한 시간이 소요됩니다.

**Q: Hyperclass와 Jobber 간에 어떤 필드가 동기화되나요?**

이름, 성, 이메일, 전화번호, 주소, 리드 소스, Jobber 고객 URL, Jobber 생성일, 태그입니다.

**Q: Hyperclass와 Jobber 간에 동기화되지 않는 항목은 무엇인가요?**

Jobber의 커스텀 필드, 노트, 첨부파일입니다.

**Q: Hyperclass는 고객을 연락처와 어떻게 매칭하나요?**

Hyperclass는 Jobber 고객의 고유 ID를 유지합니다. 이를 통해 이메일이나 전화번호를 업데이트해도 동기화를 유지할 수 있습니다.

**Q: 양방향 동기화를 일시정지하거나 중단할 수 있나요?**

아니요, 현재 그런 옵션은 없습니다. Jobber에서 구축한 워크플로우를 방해하지 않고 동기화를 중단하려면, Jobber App Marketplace(앱 마켓플레이스) > Connected Apps(연결된 앱) > LeadConnector App으로 이동하여 Disconnect(연결 해제) 버튼을 클릭해 Jobber에서 앱 연결을 해제해야 합니다.

**Q: 동기화를 시작한 후 과거 고객 데이터 동기화의 시작 날짜를 다시 변경할 수 있나요?**

아니요, Jobber에서 과거 데이터를 동기화하는 것은 Jobber 데이터 동기화를 시작할 때 한 번만 허용됩니다. 과거 데이터를 동기화한 후에는 타임라인을 수정하고 다른 시작 날짜부터 동기화를 다시 시작할 수 없습니다.

**Q: 동기화된 고객 데이터 로그를 볼 수 있나요?**

동기화 로그는 현재 제공되지 않습니다.

---
*원문 최종 수정: Wed, 22 Oct, 2025 at 10:09 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*