#!/usr/bin/env python3
"""
i18n diff 분석기

두 EN JSON을 비교해 신규/변경/삭제 키를 출력한다.

사용법:
  python3 diff-i18n.py                    # 기본 (en.json vs en.bak.json)
  python3 diff-i18n.py --save new.json    # 신규 키만 JSON으로 저장
"""

import json, os, argparse
from pathlib import Path

_REPO  = Path(os.environ.get("REPO_PATH",  str(Path.home() / "Documents/hyperclass-help-ko")))
_VAULT = Path(os.environ.get("VAULT_PATH", str(Path.home() / "Documents/benjamin-vault")))
DATA   = (_REPO / "data") if (_REPO / "data").exists() else (_VAULT / "data")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--new",  default=str(DATA / "ghl-i18n-en.json"))
    parser.add_argument("--old",  default=str(DATA / "ghl-i18n-en.bak.json"))
    parser.add_argument("--ko",   default=str(DATA / "ghl-i18n-ko.json"))
    parser.add_argument("--save", help="신규 키를 이 경로에 저장")
    args = parser.parse_args()

    new_en = json.loads(Path(args.new).read_text())
    ko     = json.loads(Path(args.ko).read_text()) if Path(args.ko).exists() else {}
    old_en = json.loads(Path(args.old).read_text()) if Path(args.old).exists() else {}

    added   = {k: v for k, v in new_en.items() if k not in old_en}
    removed = {k: v for k, v in old_en.items() if k not in new_en}
    changed = {k: (old_en[k], new_en[k]) for k in new_en
               if k in old_en and old_en[k] != new_en[k]}
    untranslated = {k: v for k, v in new_en.items() if k not in ko}

    print(f"신규 파일: {len(new_en):,}개")
    print(f"구 파일:   {len(old_en):,}개")
    print(f"번역 완료: {len(ko):,}개")
    print()
    print(f"➕ 추가된 키:     {len(added):,}개")
    print(f"➖ 삭제된 키:     {len(removed):,}개")
    print(f"✏️  값 변경된 키:  {len(changed):,}개")
    print(f"🔴 미번역 키:     {len(untranslated):,}개")

    if added:
        print(f"\n추가된 키 샘플 (5개):")
        for k, v in list(added.items())[:5]:
            print(f"  {k}: {v}")

    if changed:
        print(f"\n변경된 키 샘플 (3개):")
        for k, (old_v, new_v) in list(changed.items())[:3]:
            print(f"  {k}: '{old_v}' → '{new_v}'")

    if args.save and untranslated:
        Path(args.save).write_text(json.dumps(untranslated, ensure_ascii=False, indent=2))
        print(f"\n미번역 키 저장: {args.save} ({len(untranslated):,}개)")

if __name__ == "__main__":
    main()
