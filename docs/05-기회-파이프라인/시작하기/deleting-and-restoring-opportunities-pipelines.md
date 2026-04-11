---

번역일: 2026-04-07
카테고리: 05-기회-파이프라인 > 시작하기
---

# 기회와 파이프라인 삭제 및 복원

기회와 파이프라인을 삭제하면 CRM을 정리할 수 있고, 복원 도구로 간단하고 안전하게 데이터를 복구할 수 있습니다. CRM을 정리하거나 실수로 삭제한 것을 되돌리고 싶을 때, 이 가이드가 정확한 방법을 알려드립니다.

---

**목차**

- [기회/파이프라인 삭제 및 복원이란?](#기회파이프라인-삭제-및-복원이란)
- [파이프라인 및 기회 삭제/복원의 주요 장점](#파이프라인-및-기회-삭제복원의-주요-장점)
- [단계별 가이드: 기회 삭제](#단계별-가이드-기회-삭제)
- [방법 1: 개별 기회 삭제](#방법-1-개별-기회-삭제)
- [방법 2: 기회 일괄 삭제](#방법-2-기회-일괄-삭제)
- [단계별 가이드: 기회 복원](#단계별-가이드-기회-복원)
- [일괄 작업으로 복원 (권장)](#일괄-작업으로-복원-권장)
- [감사 로그로 복원 (대안)](#감사-로그로-복원-대안)
- [다른 복원 방법](#다른-복원-방법)
- [단계별 가이드: 파이프라인 삭제](#단계별-가이드-파이프라인-삭제)
- [단계별 가이드: 파이프라인 복원](#단계별-가이드-파이프라인-복원)
- [자주 묻는 질문](#자주-묻는-질문)

---

# 기회/파이프라인 삭제 및 복원이란?

기회는 파이프라인 내의 개별 거래나 고객이고, 파이프라인은 영업 프로세스를 구조화하는 프레임워크입니다. 기회를 삭제하면 활성 파이프라인에서 제거됩니다. 기회가 삭제되면 활성 기회 목록에서는 더 이상 보이지 않지만, 데이터는 시스템에 보관되어 필요시 최대 60일까지 복원할 수 있습니다.

이를 통해 사용자는 오래되거나 관련 없는 기회를 제거하여 파이프라인을 정리하면서도, 나중에 필요하면 복구할 수 있는 옵션을 유지할 수 있습니다.

---

## **파이프라인 및 기회 삭제/복원의 주요 장점**

이 기능은 CRM 관리 시 안심하고 제어할 수 있게 해줍니다.

- 실수 삭제 복구: 60일 이내에 파이프라인과 기회를 쉽게 복원
- 통합 감사 로그: 변경 사항을 추적하고 삭제된 항목을 완전히 파악하여 복구
- 관리자 권한: 승인된 사용자만 삭제 및 복원 같은 민감한 작업 수행 가능
- 완전한 파이프라인 복구: 삭제된 파이프라인에 연결된 단계와 기회도 함께 복원
- **깔끔한 워크플로우**: 필요에 따라 기회 목록이나 파이프라인 구조를 정리

---

## **단계별 가이드: 기회 삭제**

### **방법 1: 개별 기회 삭제**

### **기회 관리 섹션 열기**

좌측 사이드바에서 **Opportunities(기회 관리)**를 클릭하여 거래 목록에 접근합니다. 상단에서 **Opportunities(기회)** 탭이 선택되어 있는지 확인하여 파이프라인의 모든 현재 기회를 봅니다.

![기회 관리 메뉴 접근](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051142927/original/1b-vxbD8HJEP9J_k5Pbl56CJmbMmQP2o8Q.png?1754580087)

### 기회 선택

활성 기회 목록에서 삭제하고 싶은 기회를 찾습니다. 기회를 클릭하여 상세 페이지를 엽니다.

![기회 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051143133/original/2DYDCwvk3ed1tPT3VK-Vl2zTYIrUNFIgrA.gif?1754580146)

### **삭제 아이콘 클릭**

하단 행의 삭제 아이콘을 클릭하여 기회를 삭제합니다. 삭제 작업을 확인하여 해당 기회를 삭제합니다.

![기회 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051143178/original/Q8LM3hAad7v6J86HNdxNLzqdzKZIPuOa4w.png?1754580180)

### 방법 2: 기회 일괄 삭제

- **Opportunities(기회 관리)**로 이동합니다.

- 체크박스를 사용하여 여러 기회를 선택합니다.

![여러 기회 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063760832/original/MEaYZcEp8GnWzHJmG6YaP2clMXmrmxtimw.png?1769685609)

- 일괄 작업 바에서 **Delete(삭제)**를 클릭합니다.

- **DELETE**를 입력하여 작업을 확인합니다.

![삭제 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063760866/original/UG0sVQonEL_iPTZSOhoVFu1eqmuwFQbEqg.png?1769685629)

- 삭제 작업이 비동기적으로 처리됩니다.

**Bulk Actions(일괄 작업)** 페이지에서 진행 상황을 추적할 수 있는 링크와 함께 성공 메시지가 표시됩니다.

![삭제 성공 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063760907/original/1AtaK_PedYu7AcvC7vrBq8Rzh5SWP8IXkw.png?1769685655)

---

## **단계별 가이드: 기회 복원**

### 일괄 작업으로 복원 (권장)

- 기회 관리 섹션에서 **Bulk Actions(일괄 작업)**으로 이동합니다.

![일괄 작업 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063761079/original/vD9c1S3CCg7GXkEoDx0kOynca6DjtfWkqw.png?1769685738)

- 되돌리고 싶은 삭제 작업을 찾습니다.

- **점 세 개(⋮)**를 클릭하고 **Restore(복원)**를 선택합니다.

![복원 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063761153/original/89c3vR43Rtz-EH05PDFCfbBarW_iYrJ6PA.png?1769685781)

- 복원 작업을 확인합니다.

![복원 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063761173/original/6P2z4DGGoJhW7eB4shX5uyz5JhM5P_1hLg.png?1769685797)

⚠️ **삭제된 연락처에 연결된 기회는 복원할 수 없습니다**.

### **감사 로그로 복원 (대안)**

### Settings로 이동

복원 프로세스를 시작하려면 사이드바 좌측 하단의 **Settings(설정)**을 클릭합니다. 여기서 감사 로그에 접근하여 삭제된 기회를 복구할 수 있습니다.

![설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051143553/original/PxzBOwVG4vMwfZ7QTERkOFNcO6A0_WOe7A.png?1754580315)

### **Audit Logs 열기**

설정 메뉴에서 아래로 스크롤하여 **Audit Logs(감사 로그)**를 클릭합니다. 이 영역에는 삭제, 업데이트, 생성 등 모든 사용자 작업의 완전한 히스토리가 표시됩니다.

![감사 로그 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051143834/original/XYiGO3nuiMX6VBQ116UZkHTKuWEb2N9DEQ.png?1754580369)

### **기회 필터 적용**

**Action(작업)** 필터를 "Deleted"로, **Module(모듈)** 필터를 "Opportunity"로 설정하여 로그 뷰를 좁힙니다. 지난 60일 동안 삭제된 모든 기회와 누가 언제 삭제했는지 보여줍니다.

![필터 적용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051144095/original/MgJ9aAWLwCHgN7I4Z_0teaPfm0cuCkNc_g.png?1754580436)

### **기회 복원**

복구하려는 삭제된 기회를 찾아서 오른쪽의 점 세 개를 클릭합니다. 드롭다운에서 **Restore(복원)**를 선택하여 원래 파이프라인과 단계로 복원합니다.

![기회 복원](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051144410/original/nxaGwnakQzXTTQegr_FqN54_LEBF7Eeo2g.png?1754580577)

### 다른 복원 방법

감사 로그 대신, 기회 관리 페이지 우측 상단의 **점 세 개 메뉴**를 클릭할 수도 있습니다. 드롭다운에서 **Restore Opportunities(기회 복원)**를 선택하여 최근 삭제된 항목에 빠르게 접근할 수 있습니다.

![대체 복원 방법](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051144494/original/iHyJJfYBMxks69mX2_B_ZiRHCrC0CPGxlQ.png?1754580676)

---

## **단계별 가이드: 파이프라인 삭제**

파이프라인을 삭제하고 복원할 수 있는 권한은 에이전시 관리자와 계정 관리자만 가지고 있습니다.

### **파이프라인 탭 접근**

좌측 사이드바에서 **Opportunities(기회 관리)**로 이동한 다음, 상단의 **Pipelines(파이프라인)** 탭을 클릭합니다. 계정에서 현재 사용 가능한 모든 파이프라인 목록이 표시됩니다.

![파이프라인 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051145496/original/7ErlF4pd2VX5qWfFGoeEeLVjOtQKwfDvDA.png?1754580971)

### **파이프라인 삭제**

제거하려는 파이프라인 옆의 **휴지통 아이콘**을 클릭합니다. 확인 프롬프트가 나타나며, 확인하면 파이프라인과 관련된 모든 단계 및 기회가 영구적으로 삭제됩니다.

![파이프라인 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051145574/original/FyLu6Yv6lq4Aml6ywppdCttcvosWLsR7FQ.png?1754581025)

---

## **단계별 가이드: 파이프라인 복원**

### **복구를 위해 Settings로 이동**

삭제된 파이프라인을 복원하려면 좌측 사이드바에서 **Settings(설정)** 섹션으로 이동합니다. 여기서 삭제된 항목을 복구할 수 있는 감사 로그에 접근할 수 있습니다.

![설정으로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051145668/original/uQP3TxvgrVuDCuFapAJHUODrTwjvG1p5IA.png?1754581140)

### **Audit Logs 열기**

설정 패널에서 **Audit Logs(감사 로그)**를 클릭하여 기록된 모든 사용자 활동을 봅니다. 이 로그에서 삭제된 파이프라인 항목을 찾고 복원 옵션에 접근할 수 있습니다.

![감사 로그 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051145686/original/fnNxV_48vrc3Oqd4DJdw6lsHMcSbyhPKAw.png?1754581158)

### **삭제된 파이프라인 복원**

감사 로그에서 삭제된 파이프라인을 찾아 엔트리 오른쪽의 **점 세 개**를 클릭합니다. **Restore(복원)**를 선택하여 파이프라인과 단계, 모든 기회를 계정에 되돌립니다.

![파이프라인 복원](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051145908/original/_ixU5j4wxwshqiaQOJrz2eAqf5QJ3uSsdg.png?1754581310)

---

## 자주 묻는 질문

**Q: 삭제된 파이프라인과 기회는 얼마 동안 복구할 수 있나요?**

삭제한 시점부터 최대 60일까지 가능합니다.

**Q: 삭제된 파이프라인에서 기회 하나만 복원할 수 있나요?**

아니요. 전체 파이프라인을 복원해야 하며, 이때 연관된 기회와 단계도 함께 복구됩니다.

**Q: 파이프라인이나 기회를 복원할 수 있는 권한은 누가 가지고 있나요?**

에이전시 관리자 또는 계정 관리자만 이러한 작업을 수행할 권한이 있습니다.

**Q: 60일 후 파이프라인을 영구 삭제하면 어떻게 되나요?**

60일 후에는 시스템에서 데이터를 더 이상 복구할 수 없습니다.

**Q: 파이프라인이나 기회를 누가 삭제하거나 복원했는지 로그가 있나요?**

네, 감사 로그에서 누가 각 삭제 또는 복원 작업을 수행했는지 포함하여 모든 사용자 작업을 추적합니다.

---
*원문 최종 수정: Thu, 29 Jan, 2026 at 5:25 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*