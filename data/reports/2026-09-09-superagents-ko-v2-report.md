# Managed Agents 표기 통일 · 검증 보강 · STATE.md — 후속 v2 보고 (2026-09-09)

## §1 Managed Agents → '관리형 에이전트' (Benjamin 확정, DECISIONS [확정] 등재)

변경 키 7 (host) — 네임스페이스별: superagentsApp 6 · agentStudioApp 1. apps/flat 잔존 0 (전수 grep).

| 키 | 전 → 후 |
|---|---|
| `superagentsApp.chatLayer.usageLimitTitle` | Managed Agents 사용 한도에 도달했습니다. → 관리형 에이전트 사용 한도에 도달했습니다. |
| `superagentsApp.chatLayer.usageLimitBody` | 이 서브 계정이 Managed Agents 사용 허용량에… → 이 서브 계정이 관리형 에이전트 사용 허용량에… |
| `superagentsApp.chatLayer.productDisabledTitle` | …Managed Agents가 활성화되어 있지 않습니다. → …관리형 에이전트가 활성화되어 있지 않습니다. |
| `superagentsApp.chatLayer.productDisabledBody` | …Managed Agents가 활성화되기 전까지… → …관리형 에이전트가 활성화되기 전까지… |
| `superagentsApp.chatLayer.inactiveBody` | …Managed Agents 실행을… → …관리형 에이전트 실행을… |
| `superagentsApp.agentStudioPanel.triggerTypes.chat.desc` | Managed Agents 채팅 인터페이스를… → 관리형 에이전트 채팅 인터페이스를… |
| `agentStudioApp.agentDirectory.reshapeBanner.message` | "Managed Agents" 2회 → 관리형 에이전트 (Labs 유지) |

`_text` (전 → 후):
- `Create Managed Agent`: Managed Agent 만들기 → **관리형 에이전트 만들기**
- `No Managed Agents yet`: 아직 Managed Agent가 없습니다 → **아직 관리형 에이전트가 없습니다**
- `Create your first Managed Agent to get started.`: 첫 Managed Agent를 만들어 시작하세요. → **첫 관리형 에이전트를 만들어 시작하세요.**
- `Managed Agents` (h1, 신규): → **관리형 에이전트** (키≠값이라 C7 통과, _text 9,093 → 9,094)
- `0 Managed Agents`: **잔존 영문** (정확 일치 한계)

용어집 `data/glossary/ghl-glossary.json` 에 `Managed Agents → 관리형 에이전트` 등재. reference.json ko 7건도 동기화(재사용 경로가 reference 를 보므로).

## §2 재빌드·배포

| 검사 | 결과 |
|---|---|
| validate-ko-app.py C1~C11 | 위반 0 |
| check_dnt_whitelabel.py (배포본 · ko.json · manual-dict) | TOTAL 0 / 0 / 0 |
| whitelabel.py (변경값 11) | 위반 0 |
| 네임스페이스 무결성 | 타입 변화 0 · leaf 감소 0 · 추가/삭제 0 · **기존값 변경 7 = §1 목록과 일치** |
| CDN = raw = local = git | core `5cd47854…` / apps `633dd236…` / loader `aa2b05e8…` 모두 일치, immutable |
| CI | 로더 커밋 0fcf256 ✅ · 사전 커밋 81a235c 는 concurrency cancel-in-progress 로 **취소**(직후 로더 push 가 대체) |

- 사전 **v4.2.5** REV: `81a235c06fd7a8c65ba720b3642fe72a5a4af817` (strings 103,042 · _text 9,094)
- 로더 **v4.9.2**: `0fcf2569f1e0bc26b410f4c4ea8ca35fed6979cb` (로직 무변경)
- 라이브 기대값: `__hcKoApp.version === '4.9.2'` · `status().rev` = `81a235c…` · `textEntries === 9094`

**Custom JS 2줄 블록 (둘째 줄 무변경):**
```html
<script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@0fcf2569f1e0bc26b410f4c4ea8ca35fed6979cb/js/hc-ko-app-loader.js"></script>
<script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@8fabb6a/js/dashboard-ko.min.js"></script>
```

## §3 스크립트 변경 — diff (미커밋, 승인 대기)

### A. `scripts/verify-deploy.js`
```diff
@@ -21,9 +21,9 @@
    ───────────────────────────────────────────────────────────────────── */
 (() => {
   const EXPECT = {
-    version: '4.9.0',
-    revPrefix: 'f188913',
-    textEntries: 9088,
+    version: '4.9.2',
+    revPrefix: '81a235c',
+    textEntries: 9094,
   };
   const A = window.__hcKoApp;
   if (!A) {
```

### B. `scripts/validate-ko-app.py` C3 + `scripts/i18n-batch-translator.py` `ph_ok`
```diff
diff --git a/scripts/i18n-batch-translator.py b/scripts/i18n-batch-translator.py
--- a/scripts/i18n-batch-translator.py
+++ b/scripts/i18n-batch-translator.py
@@ -100,7 +100,7 @@ def apply_glossary(text: str) -> str:
 
 # ── 플레이스홀더 보존 검증 ───────────────────────────────────────
 # GHL이 런타임에 치환하는 변수/태그. 번역되면 치환이 실패해 화면에 깨져 보인다.
-PH_RE = re.compile(r"\{\{.*?\}\}|\{[^{}]*\}|</?[a-zA-Z][^>]*>")
+PH_RE = re.compile(r"\{\{.*?\}\}|\{[^{}]*\}|%[A-Za-z_]+%|</?[a-zA-Z][^>]*>")  # %n% 형식 추가 (2026-09-09)
 
 _TAG_NAME = re.compile(r'^(</?)([a-zA-Z][a-zA-Z0-9]*)')
 
diff --git a/scripts/validate-ko-app.py b/scripts/validate-ko-app.py
--- a/scripts/validate-ko-app.py
+++ b/scripts/validate-ko-app.py
@@ -67,6 +67,7 @@ PH_PATTERNS = [
     re.compile(r'(?<!\{)\{\s*[\w.]+\s*\}(?!\})'),  # {name}
     re.compile(r'\$\{[^}]*\}'),            # ${x}
     re.compile(r'%[sd]'),                  # %s %d
+    re.compile(r'%[A-Za-z_]+%'),           # %n% %q% %cat% (superagentsApp triggers.picker, 2026-09-09)
 ]
 # 한국어에 복수형이 없으므로 제거하는 것이 정상 (지침 2-E)
 PH_IGNORE = {'{plural}'}
```
로컬 검증: B 적용 후 validate C3 = 0(기존 사전에 `%x%` 불일치 없음). `ph_ok('%n% triggers shown','트리거 표시됨')` → False(소실 감지), `('%n% triggers','%개% 트리거')` → False(변수명 번역 감지), 정상 쌍 → True.

### C. CI 'REV↔사전 일치' — 문서만
`BUILD-ORDER-PROPOSAL.md` 마지막 절 "CI 'REV↔사전 내용 일치' 스텝 — 사전 커밋마다 구조적 빨간불". 후보 3종(경고 강등 / 로더 변경 push 만 실행 / 사전+로더 한 커밋·태그 REV). 권장: 단기 1, 장기 3.

승인 시 커밋 순서: A 단독 커밋 → B 단독 커밋 (둘 다 `ko-app-validate.yml` paths 에 있어 CI 발화).

## §4 `docs/STATE.md`
신설. 배포 좌표(사전/로더/**슬롯 실제 SHA dcee3b4 → 교체 대기 0fcf256**) · 라이브 확인값 표(v1 확인분 + v2 대기) · 게이트 · 미결 7건 · 알려진 잔존 영문 3종 · 상단에 "매 배포 라운드 종료 시 갱신" 규칙.

## 하지 않은 것
- A·B 커밋 — 지시서 "diff 보고 → 승인 → 커밋". 작업 트리에 미커밋 상태로 둠(다른 커밋에는 포함 안 함).
- C 워크플로 수정 — 지시서대로 설계안만.
- 라이브 확인 — Claude Chat 담당.
- `0 Managed Agents` — `_text` 패턴 미지원.
- `manual-dict-v401.json` 에는 등재하지 않음 — 레거시 DOM 빌드 원천이라 다음 dashboard-ko 빌드 산출물이 바뀜. 재사용 경로는 reference.json 동기화로 충족.
