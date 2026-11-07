---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009214-how-to-use-git-sync-in-ai-studio
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# AI 스튜디오에서 Git 동기화 사용하기

하이퍼클래스 **AI 스튜디오** 프로젝트를 Git 저장소와 연결하면, 코드 변경 내용이 **AI 스튜디오**와 외부 개발 도구 사이에서 동기화돼요. 이 문서에서는 GitHub 연결 방법과 자동 동기화, 브랜치 전환, 동기화 기록 확인, 연결 관리 방법을 안내해요.

[동영상](https://jumpshare.com/embed/zzBLvqEUL2SjTTMy27fM?disableDownload=true)

Cursor, Claude Code, Codex, GitHub Copilot, Gemini CLI 같은 도구로 작업하면서도 프로젝트 버전을 최신 상태로 유지할 수 있어요. 자동 동기화, 버전 추적, 브랜치 관리 기능이 있어서 코드를 직접 옮기지 않아도 돼요.

## Git 동기화란?

Git 동기화는 **AI 스튜디오**와 연결된 Git 저장소 사이에서 코드 변경 내용을 양방향으로 맞춰 주는 연동이에요. GitHub 계정을 연결하면 **AI 스튜디오**가 프로젝트용 비공개 저장소를 자동으로 만들고, 첫 버전을 GitHub에 올려요.

Git 동기화로 할 수 있는 일은 다음과 같아요.

- **변경 내용 자동 동기화:** **AI 스튜디오**에서 저장한 버전을 GitHub로 올리고, 외부에서 만든 커밋을 **AI 스튜디오**로 가져와요.
- **외부 개발 도구 사용:** 파일을 직접 옮기지 않고도 **AI 스튜디오** 밖에서 프로젝트 코드를 편집할 수 있어요.
- **변경 내용 추적:** 프로젝트 버전과 Git 커밋 기록을 유지해요.
- **업데이트 확인:** 외부 변경 내용을 가져온 뒤 새 미리보기 빌드를 만들어요.
- **개발 관리:** 브랜치를 전환하고, 동기화 활동을 확인하고, 충돌을 해결할 수 있어요.

Git 동기화는 React(Vite)와 TanStack Start 프로젝트를 지원하며, 의존성과 락파일 변경도 포함돼요. 이미지, 글꼴 같은 바이너리 파일은 동기화할 때 그대로 유지돼요. 다만 **AI 스튜디오**의 코드 편집기에서는 바이너리 파일을 미리 볼 수 없어요.

Git 동기화는 선택 기능이에요. Git을 연결하지 않은 프로젝트도 그대로 사용할 수 있어요.

{% hint style="info" %}
Git 동기화는 GitHub를 비롯한 저장소 제공업체가 지원하는 Git을 사용해요. 이 문서는 GitHub를 기준으로 설명해요. 비공개로 직접 운영하는 저장소를 포함해 그 외 Git 기반 제공업체는 지원 범위가 다를 수 있어요.
{% endhint %}

## AI 스튜디오에서 GitHub로 Git 동기화 설정하기

GitHub를 연결하면 프로젝트용 비공개 저장소가 만들어지고 자동 동기화가 켜져요. 개인 계정이나 조직을 연결할 수 있고, 이 연결을 누가 쓸 수 있는지도 정할 수 있어요.

{% hint style="info" %}
**시작하기 전에:** 사용자에게 **설정 > 팀 > 권한 > AI 스튜디오**의 **Manage Git & download code**(Git 관리 및 코드 다운로드) 권한이 있는지 확인하세요. 이 권한은 에이전시와 서브 계정 역할에 기본으로 켜져 있어요.
{% endhint %}

1. 하이퍼클래스 서브 계정을 열고 **AI 스튜디오**로 이동한 다음, 프로젝트를 선택하세요.
2. **더보기 > Git**을 클릭하고 **GitHub**를 선택하세요.
3. **+ Add connection**(연결 추가)을 클릭해 새 GitHub 계정을 연결하세요. 이미 목록에 계정이 있다면 **Connect**(연결)를 클릭하세요.
4. **My GitHub account**(내 GitHub 계정) 또는 **조직**을 선택한 다음, 이 연결을 누가 쓸 수 있는지 정하세요.

   - **나만**: 나만 쓸 수 있어요.
   - **서브 계정**: 서브 계정의 다른 사용자도 각자의 권한 범위 안에서 쓸 수 있어요.
5. **Continue on GitHub**(GitHub에서 계속)를 클릭하세요.
6. GitHub에서 **기본 제공 서비스**를 설치하고 승인하세요. 필요한 인증이 있으면 완료하세요. 조직 구성원은 관리자의 승인이 필요할 수 있어요.
7. **AI 스튜디오**로 돌아와 연결이 끝날 때까지 기다리세요. **AI 스튜디오**가 비공개 저장소를 만들고 첫 버전을 올린 뒤 `main` 브랜치에 연결해요.
8. **Automatic Push**(자동 푸시)와 **Automatic Pull**(자동 풀)이 켜져 있는지 확인하세요. 두 기능은 기본으로 켜져 있어요.

![GitHub 연결 설정 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083694185/original/74yAQJnJwZj4huZDAIWGfYGAcyz-ZpohMw.gif?1792431237)

## 자동 푸시와 자동 풀 동기화

Git 동기화는 **AI 스튜디오** 프로젝트와 GitHub 저장소를 자동으로 맞춰 줘요. **Automatic Push**와 **Automatic Pull**은 기본으로 켜져 있고, 각각 따로 끌 수 있어요.

- **Automatic Push:** **AI 스튜디오**에서 저장한 모든 버전이 GitHub로 올라가요. AI가 만든 변경, 코드 편집, 비주얼 편집, 복원한 버전도 포함돼요. 커밋은 원래 기록을 그대로 유지하고, 개인 GitHub 계정이 아니라 `기본 제공 서비스`(`noreply@leadconnectorhq.com`)로 표시돼요.
- **Automatic Pull:** 연결된 GitHub 브랜치의 새 커밋이 **AI 스튜디오**로 자동으로 들어와요. 커밋마다 새 프로젝트 버전이 만들어지고, 바뀐 파일이 채팅 카드에 표시되며, 업데이트된 미리보기가 생성돼요.

미리보기가 준비되면 **Refresh preview**(미리보기 새로고침)를 클릭해 최신 변경 내용을 확인하세요. 자동 동기화를 꺼 두었더라도 **더보기 > Git**에서 **Push now**(지금 푸시)나 **Pull now**(지금 풀)로 직접 동기화할 수 있어요.

**동기화 충돌:** GitHub와 **AI 스튜디오** 양쪽에 새 커밋이 있으면 Git 설정에서 해당 브랜치가 갈라진 상태로 표시돼요. **Review and resolve**(검토 및 해결)를 선택한 뒤 아래 중 하나를 고르세요.

- **Force push**(강제 푸시): **AI 스튜디오** 버전을 유지해요. GitHub에서 갈라진 커밋을 덮어쓸 수 있어요.
- **New branch**(새 브랜치): **AI 스튜디오** 변경 내용을 새 브랜치로 올려서 두 버전을 모두 보존해요.

{% hint style="info" %}
Git 동기화는 올라가는 변경 내용에서 민감한 인증 정보를 검사해요. 인식된 시크릿이 있으면 푸시가 차단되고, 코드에 직접 입력된 것으로 의심되는 인증 정보는 경고로 표시돼요.
{% endhint %}

![자동 푸시와 자동 풀 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083693214/original/w-Hsut6rFeEvn8ZtUr0aw5_n2RzAxELbgw.png?1792430572)

## AI 스튜디오에서 Git 동기화 관리하기

Git 동기화를 연결한 뒤에는 프로젝트의 Git 설정에서 브랜치 전환, 동기화 기록 확인, GitHub 연결 관리를 할 수 있어요.

### 브랜치 전환하거나 새로 만들기

Git 동기화는 기본으로 `main` 브랜치를 사용해요. 필요하면 다른 브랜치로 작업할 수도 있어요.

1. **AI 스튜디오** 프로젝트를 열고 **더보기 > Git**으로 이동하세요.
2. 브랜치 선택기에서 기존 브랜치를 고르거나 새 브랜치 이름을 입력하세요.
3. 선택한 내용을 확인하세요. 브랜치가 아직 없으면 다음에 푸시할 때 **AI 스튜디오**가 브랜치를 만들어요.

GitHub에서 들어오는 커밋은 선택한 브랜치에만 반영돼요. 다른 브랜치의 변경 내용은 그 브랜치로 전환하기 전까지 가져오지 않아요.

![브랜치 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083693454/original/2ZLmSfniO4Ls1hFIoYiOoQ5YI7QWMKsA6g.png?1792430740)

### 동기화 기록 보기

**Sync History**(동기화 기록)에서 **AI 스튜디오**와 GitHub 사이에 변경 내용이 잘 전달됐는지 확인할 수 있어요.

1. **AI 스튜디오** 프로젝트에서 **더보기 > Git**을 여세요.
2. **Sync History**를 선택하면 푸시, 풀, 커밋 기록, 동기화 오류 등 최근 활동을 볼 수 있어요.

전체 동기화 횟수, 성공률, GitHub의 개별 커밋 링크도 확인할 수 있어요. 실패한 작업에는 무엇이 잘못됐는지 설명하는 상세 정보가 함께 표시돼요.

![동기화 기록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083695377/original/IHfszLZ9Kjf1BQLj384hclM2Eofxs55KDw.png?1792432382)

### GitHub 연결 해제하거나 다시 연결하기

**더보기 > Git**에서 GitHub 연결을 관리할 수 있어요.

프로젝트와 GitHub의 연결을 끊으려면 **연결 해제**를 사용하세요. 계정 승인을 갱신해야 할 때는 계정을 다시 연결하면 돼요. 이전에 연결했던 프로젝트를 다시 연결하면 **AI 스튜디오**가 새 저장소를 만들지 않고 기존 저장소를 다시 쓸 수 있어요. 이때 변경 내용을 자동으로 강제 푸시하지는 않아요.

![GitHub 연결 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083693835/original/XGudGCDAlAqLVrunpahYD-pJ0XmCbEq1Rw.png?1792430979)
