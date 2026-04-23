---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000004673-lc-wordpress-plugin-fixing-cron-jobs-crashing-issue
번역일: 2026-04-23
카테고리: wordpress-integration
---

# LeadConnector 워드프레스 플러그인 크론 작업 충돌 문제 해결

LC 플러그인이 너무 많은 크론 작업을 생성하거나 웹사이트가 충돌하는 문제를 해결하려면 아래 단계를 따라하세요.

## 1단계

Plugins(플러그인) → Installed Plugins(설치된 플러그인)으로 이동하여 LC 플러그인을 비활성화하세요. 이미 비활성 상태라면 이 단계는 건너뛰세요.

![LC 플러그인 비활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042057299/original/3rjzw4zQMymtRZTB65J4-lVWM-5LXdCqbA.png?1740207689)

## 2단계

[여기](https://2ly.link/24UnG)를 클릭하여 leadconnector-cron-fix 플러그인을 다운로드하세요.

(MD5 Checksum - 5a80c8666c97f834392a0465726c219a)

## 3단계

Plugins(플러그인) → Add new plugin(새 플러그인 추가) → Upload plugin(플러그인 업로드)으로 이동하여 새 플러그인을 설치하세요.

![새 플러그인 업로드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042056236/original/EBXLYvhn0ZLkqQZPubZXqVulZkrMSsjs4Q.png?1740203382)

## 4단계

Activate Plugin(플러그인 활성화)을 클릭하세요.

![플러그인 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042056328/original/ORRvhofyWnfFf_IhBC_BTFBwOVSKHqhGRQ.png?1740203505)

## 5단계

플러그인을 활성화한 후 Tools(도구) → LC Cron Fixer로 이동하세요.

이 화면이 보이면 이제 메인 LC 플러그인을 활성화할 수 있습니다.

![크론 작업 정상 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042057167/original/ISdT5rL5KKX3WdzXT3QmQ0Px3vxT7lWxcg.png?1740207101)

또는 이 화면이 보이면 "fix cron jobs" 버튼을 클릭하세요.

![크론 작업 수정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042057184/original/bMfQb3760iADRVCzJxEeBOMz4MK2bl6ZlQ.png?1740207198)

여러 번 시도해도 첫 번째 화면이 보이지 않는다면 LeadConnector 지원팀에 문의하시면 문제 해결을 도와드리겠습니다.

## 6단계

Plugins(플러그인) → List Plugins(플러그인 목록)로 돌아가서 LC 플러그인의 Activate(활성화)를 클릭하세요. 플러그인이 최신 버전이 아닌 경우 업데이트도 함께 진행해 주세요.

![LC 플러그인 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042057277/original/6q8NM7WEeN_WC1f6pkj01BVxGMeHJ_bqFQ.png?1740207504)

## 7단계

마지막으로 Lead Connector Cron Fix 플러그인을 비활성화하고 삭제하면 모든 설정이 완료됩니다!

---
*원문 최종 수정: Mon, 24 Feb, 2025 at 2:40 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*