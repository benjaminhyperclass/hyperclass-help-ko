---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005594-how-to-connect-your-google-calendar
번역일: 2026-04-23
카테고리: calendar-connections
---

# 구글 캘린더 연결하는 방법

구글 캘린더를 연결하면 구글 캘린더의 예약과 Hyperclass 시스템 간의 동기화가 가능합니다. 이를 통해 정확한 예약 가능 시간 관리, 중복 예약 방지, 그리고 원활한 일정 및 예약 관리가 가능해집니다.

---

**목차**

- [사전 준비사항](#사전-준비사항)
- [구글 캘린더 연결 방법](#구글-캘린더-연결-방법)
- [캘린더 설정](#캘린더-설정)
- [연결된 캘린더](#연결된-캘린더)
- [구글 미트 연동 (중요)](#구글-미트-연동-중요)
- [충돌 캘린더](#충돌-캘린더)
- [자주 묻는 질문](#자주-묻는-질문)
- [추가 도움이 필요한가요?](#추가-도움이-필요한가요)

---

## **사전 준비사항**

연결하려는 구글 캘린더와 연결된 Google 계정에 대한 접근 권한이 필요합니다.

쓰기 권한이 필요한지 확인해보세요:

- Hyperclass 시스템에서 생성된 이벤트를 구글 캘린더에 추가하고 싶다면, 해당 캘린더에 대한 쓰기 권한이 필요합니다.

- 단순히 구글 캘린더의 모든 이벤트를 시스템으로 가져오기만 하려면, 읽기 전용 권한으로도 충분합니다.

---

## 구글 캘린더 연결 방법

- `Settings(설정) > Calendars(캘린더) > Connections(연결)`로 이동한 후 `+ Add New`를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062770552/original/IoVNXZFGeKoqvcHu6mzxt7J_9iDRwKP0hA.png?1768501179)

- Google Calendar로 이동하여 `Connect`를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062770612/original/z81oVcYrkBiFUoizu6Sn_EtVliZYTQSfHA.png?1768501290)

- 계정을 선택하고 구글 캘린더에 대한 접근 권한을 허용하여 인증 과정을 완료하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048847822/original/kJ2GN0nGct_Wzvnzb2K3fpQQ8RzKOTLYfw.jpeg?1750848642)

- 연결 페이지에서 `+ Add New`를 클릭하여 여러 개의 구글 캘린더를 추가할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062770908/original/Msa5KFoRDGu857Rdd_aEfrJOcGpxUUzGjA.png?1768501541)

---

## 캘린더 설정

구글 계정이 성공적으로 연결되면, 연결된 캘린더(Linked Calendar)와 충돌 캘린더(Conflict Calendar)를 선택하여 캘린더 설정을 완료해야 합니다. `Calendars(캘린더) > Calendar Settings(캘린더 설정) > Connections(연결)`로 이동하세요.

캘린더 설정에는 두 가지 설정이 포함됩니다: **연결된 캘린더(Linked Calendar)**와 **충돌 캘린더(Conflict Calendar)**입니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062772852/original/BioHAlz5KqmTNjhTM6osULiHuYgNtN8VGQ.png?1768505380)

### 연결된 캘린더

Hyperclass 시스템에서 생성된 모든 새 이벤트는 연결된 캘린더에 추가됩니다. 예를 들어, 시스템에서 생성된 새 이벤트는 연결된 캘린더와 동기화되어 해당 외부 캘린더(예: 구글 캘린더)에서 직접 볼 수 있습니다.

참고: 사용자가 캘린더를 연결된 캘린더로 선택하려면 쓰기 권한이 필요합니다.

연결된 캘린더는 기본적으로 충돌 캘린더에도 추가됩니다. 즉, 외부 연결된 캘린더에서 생성된 모든 이벤트는 시스템으로 가져와지고, 시스템에서 생성된 모든 이벤트는 외부 연결된 캘린더로 전송됩니다.

고급 설정에서 동기화 환경설정을 설정할 수 있습니다.

#### 구글 미트 연동 (중요)

구글 캘린더를 연결하면 구글 미트가 자동으로 통합됩니다. 각 예약에 대해 고유한 구글 미트 링크를 생성하려면 구글 캘린더가 연결된 캘린더로 설정되어야 합니다. 구글 캘린더가 연결된 캘린더로 설정되지 않으면 구글 미트 링크가 생성되지 않습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062772920/original/BYHMGZi4Pcf52UDBBUh3gGgq9hrf8nHA9Q.png?1768505509)

### **충돌 캘린더**

충돌 캘린더로 추가된 외부 캘린더의 이벤트는 시스템과 동기화되어 해당 이벤트 시간 동안의 예약 가능 시간을 차단합니다.

외부 캘린더에서 이벤트가 'BUSY'로 표시된 경우에만 예약 가능 시간이 차단됩니다. 'FREE'로 표시된 이벤트의 경우, 이벤트는 시스템으로 가져와지지만 예약 가능 시간은 열려 있습니다.

이를 통해 정확한 예약 가능 시간을 보장하고 중복 예약을 방지할 수 있습니다. 중복 예약을 방지하기 위해 여러 캘린더를 추가할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062773142/original/Pcs0tNO6ifTlQpuYTU2cvVgOWrCIJ4CrHQ.png?1768505887)

---

## **자주 묻는 질문**

**Q: 여러 개의 구글 캘린더를 연결할 수 있나요?**

네. 연결 페이지에서 **Add New** 옵션을 사용하여 여러 개의 구글 캘린더를 연결할 수 있습니다.

**Q: 구글 캘린더로 이벤트를 동기화하려면 어떤 권한 수준이 필요한가요?**

시스템에서 생성된 이벤트를 구글 캘린더로 전송하려면 쓰기 권한이 필요합니다. 단순히 이벤트를 시스템으로 가져오기만 하려면 읽기 전용 권한으로 충분합니다.

**Q: 연결된 캘린더와 충돌 캘린더의 차이점은 무엇인가요?**

연결된 캘린더는 이벤트를 양방향으로 동기화하는 반면, 충돌 캘린더는 예약 가능 시간을 차단하고 중복 예약을 방지하는 용도로만 사용됩니다.

**Q: "Free"로 표시된 이벤트가 예약 가능 시간을 차단하나요?**

아니요. 외부 캘린더에서 **Busy**로 표시된 이벤트만 예약 가능 시간을 차단합니다.

**Q: 예약에 구글 미트 링크가 생성되지 않는 이유는 무엇인가요?**

구글 미트 링크는 구글 캘린더가 연결된 캘린더로 설정된 경우에만 생성됩니다.

**Q: 여러 개의 충돌 캘린더를 동시에 사용할 수 있나요?**

네. 정확한 예약 가능 시간을 보장하기 위해 여러 캘린더를 충돌 캘린더로 추가할 수 있습니다.

---

## **추가 도움이 필요한가요?**

캘린더 연결이나 예약 가능 시간 동기화와 관련하여 추가 도움이 필요하시면, 앱 내 도움말 검색을 사용하여 캘린더 설정, 일정 관리 및 연동과 관련된 문서를 찾아보세요.

문제가 계속 발생한다면, 계정 내에서 **Help** 옵션을 통해 지원팀에 문의하여 추가 안내를 받으실 수 있습니다.

---
*원문 최종 수정: 2026년 1월 15일*
*Hyperclass 사용 가이드 — hyperclass.ai*