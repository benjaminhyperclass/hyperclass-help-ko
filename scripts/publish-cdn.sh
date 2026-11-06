#!/usr/bin/env bash
# 런타임 배포 브랜치(cdn) 발행 — main 커밋의 **런타임 파일만** 담은 커밋을 cdn 브랜치 끝에 만든다.
#
# 왜: jsDelivr 는 gh/<레포>@<ref> 를 레포 트리 전체 한 패키지로 본다. main 트리는 도움말 문서·편집 정본·
#     레거시 사전까지 75MB 를 넘어 data.jsdelivr.com 이 "Package size exceeded the configured limit of 50 MB"
#     를 돌려준다. 파일 단위 요청은 대개 통과하지만 새 커밋을 처음 가져올 때 403 이 나고 그 응답이 캐시된 적이 있다
#     (2026-11-05 사고, DECISIONS). cdn 커밋은 런타임 파일(약 11MB)만 담아 한도 안에 든다.
#     파일 blob 은 main 과 같은 객체를 쓰므로 레포 용량은 늘지 않는다(트리·커밋 객체만 새로 생긴다).
#
# 포인터(data/hc-ko-app-rev.json 등)의 rev·loader 에는 이 cdn 커밋 SHA 를 넣는다. 부트스트랩·로더·엣지는
# gh/<레포>@<SHA>/<경로> 로만 요청하므로 SHA 가 어느 브랜치 커밋이든 그대로 동작한다(경로가 같다).
#
# 사용: scripts/publish-cdn.sh <main 커밋> [--push]
#   stdout 마지막 줄 = cdn 커밋 SHA. 런타임 트리가 직전 cdn 커밋과 같으면 새 커밋 없이 그 SHA 를 낸다.
#   --push 면 origin/cdn 으로 밀어 올린다(경합 시 다시 받아 3회까지 재시도).
set -euo pipefail

SRC_IN=${1:?'사용: publish-cdn.sh <main 커밋> [--push]'}
PUSH=${2:-}
SRC=$(git rev-parse "${SRC_IN}^{commit}")

# 런타임이 jsDelivr 로 받는 경로(2026-11-06 기준: 부트스트랩·로더·어댑터·포털·결제·커뮤니티 로더, 사전,
# 마켓플레이스 번들, 포털 러너). 포인터(*-rev.json)는 언제나 raw@main 에서 읽으므로 넣지 않는다 — 그래야 포인터만
# 바뀐 커밋은 런타임 트리가 같아 cdn 커밋을 재사용한다. 레거시 dashboard-ko 는 슬롯에서 은퇴했고 롤백은 @8fabb6a 고정.
PATHS=(js
       data/hc-ko-app-core.json data/hc-ko-app-apps.json
       data/hc-ko-i18n.json
       data/hc-ko-payments.json
       data/hc-dict.min.json
       marketplace/dist tools)
EXCLUDE_RE='^js/dashboard-ko'

README_TEXT='# cdn 브랜치 — 런타임 배포 전용 (자동 생성, 직접 커밋 금지)

main 커밋의 런타임 파일만 담는다. jsDelivr 패키지 한도(50MB) 안에 두기 위해서다.
만드는 곳: scripts/publish-cdn.sh (포인터 봇 ko-app-pointer.yml, 로더 수동 승격).
각 커밋 메시지의 "cdn ← main <SHA>" 가 원본 main 커밋이다.
'

for attempt in 1 2 3; do
  git fetch -q origin cdn 2>/dev/null || true
  PARENT=$(git rev-parse -q --verify refs/remotes/origin/cdn 2>/dev/null || true)

  IDX=$(mktemp -u)
  GIT_INDEX_FILE="$IDX" git read-tree --empty
  git ls-tree -r "$SRC" -- "${PATHS[@]}" | awk -F'\t' -v re="$EXCLUDE_RE" '$2 !~ re' \
    | GIT_INDEX_FILE="$IDX" git update-index --index-info
  RM=$(printf '%s' "$README_TEXT" | git hash-object -w --stdin)
  printf '100644 blob %s\tCDN.md\n' "$RM" | GIT_INDEX_FILE="$IDX" git update-index --index-info
  TREE=$(GIT_INDEX_FILE="$IDX" git write-tree)
  rm -f "$IDX"

  # 필수 파일 확인 — 하나라도 없으면 발행하지 않는다
  for f in js/hc-ko-app-loader.js js/hc-confirm-adapter.js data/hc-ko-app-core.json data/hc-ko-app-apps.json; do
    git cat-file -e "$TREE:$f" 2>/dev/null || { echo "❌ cdn 트리에 $f 없음 (원본 ${SRC:0:7})" >&2; exit 1; }
  done

  if [ -n "$PARENT" ] && [ "$(git rev-parse "$PARENT^{tree}")" = "$TREE" ]; then
    echo "같은 런타임 트리 — 기존 cdn 커밋 재사용" >&2
    echo "$PARENT"; exit 0
  fi

  C=$(GIT_AUTHOR_NAME="${GIT_AUTHOR_NAME:-Hyperclass Bot}" GIT_AUTHOR_EMAIL="${GIT_AUTHOR_EMAIL:-bot@hyperclass.ai}" \
      GIT_COMMITTER_NAME="${GIT_COMMITTER_NAME:-Hyperclass Bot}" GIT_COMMITTER_EMAIL="${GIT_COMMITTER_EMAIL:-bot@hyperclass.ai}" \
      git commit-tree "$TREE" ${PARENT:+-p "$PARENT"} -m "cdn ← main $SRC")

  if [ "$PUSH" != "--push" ]; then echo "$C"; exit 0; fi
  if git push -q origin "$C:refs/heads/cdn"; then
    SZ=$(git ls-tree -r -l "$C" | awk '{s+=$4} END {printf "%.1f", s/1048576}')
    echo "cdn 발행: ${C:0:7} ← main ${SRC:0:7} (${SZ}MB)" >&2
    echo "$C"; exit 0
  fi
  echo "push 거부(경합) — 재시도 $attempt/3" >&2; sleep 3
done
echo "❌ cdn push 실패" >&2; exit 1
