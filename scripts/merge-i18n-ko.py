#!/usr/bin/env python3
"""
i18n KO 머지

ghl-i18n-ko.bak.json (구 camelCase 번역) + ghl-i18n-ko.json (신 dot-notation 번역)
→ 중복 없이 하나로 합침. 신 번역 우선.

사용법:
  python3 merge-i18n-ko.py           # 기본 머지
  python3 merge-i18n-ko.py --stats   # 통계만
"""

import json, argparse
from pathlib import Path

import os as _os
_REPO  = Path(_os.environ.get("REPO_PATH",  str(Path.home() / "Documents/hyperclass-help-ko")))
_VAULT = Path(_os.environ.get("VAULT_PATH", str(Path.home() / "Documents/benjamin-vault")))
DATA   = (_REPO / "data") if (_REPO / "data").exists() else (_VAULT / "data")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--new", default=str(DATA / "ghl-i18n-ko.json"),
                        help="신 번역 파일 (dot-notation, 신 번역 우선)")
    parser.add_argument("--old", default=str(DATA / "ghl-i18n-ko.bak.json"),
                        help="구 번역 파일 (camelCase, 신에 없는 키만 보존)")
    parser.add_argument("--out", default=str(DATA / "ghl-i18n-ko.json"),
                        help="출력 경로 (기본값: --new 덮어쓰기)")
    parser.add_argument("--stats", action="store_true")
    args = parser.parse_args()

    new_ko: dict = {}
    old_ko: dict = {}

    if Path(args.new).exists():
        new_ko = json.loads(Path(args.new).read_text(encoding="utf-8"))
        print(f"신 번역: {len(new_ko):,}개  ({args.new})")
    else:
        print(f"⚠️  신 번역 파일 없음: {args.new}")

    if Path(args.old).exists():
        old_ko = json.loads(Path(args.old).read_text(encoding="utf-8"))
        print(f"구 번역: {len(old_ko):,}개  ({args.old})")
    else:
        print(f"⚠️  구 번역 파일 없음: {args.old}")

    # 구 번역에서 신 번역에 없는 키만 추가 (신 우선)
    only_in_old = {k: v for k, v in old_ko.items() if k not in new_ko}
    merged = {**only_in_old, **new_ko}

    print(f"\n구에만 있는 키: {len(only_in_old):,}개")
    print(f"신에만 있는 키: {len(new_ko) - (len(merged) - len(only_in_old) - len(only_in_old)):,}개")
    print(f"머지 결과: {len(merged):,}개")

    if args.stats:
        return

    out_path = Path(args.out)
    out_path.write_text(json.dumps(merged, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\n✅ 저장: {out_path} ({len(merged):,}개)")


if __name__ == "__main__":
    main()
