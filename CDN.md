# cdn 브랜치 — 런타임 배포 전용 (자동 생성, 직접 커밋 금지)

main 커밋의 런타임 파일만 담는다. jsDelivr 패키지 한도(50MB) 안에 두기 위해서다.
만드는 곳: scripts/publish-cdn.sh (포인터 봇 ko-app-pointer.yml, 로더 수동 승격).
각 커밋 메시지의 "cdn ← main <SHA>" 가 원본 main 커밋이다.
