#!/usr/bin/env python3
"""
SUMMARY.md 자동 재생성

docs/ 디렉토리를 순회해 GitBook용 SUMMARY.md를 재생성합니다.
가나다 순 정렬, 빈 파일 제외, 카테고리별 섹션 구분.

사용법:
  python3 generate-summary.py
  python3 generate-summary.py --repo ~/Documents/hyperclass-help-ko
  python3 generate-summary.py --dry-run   # 출력만, 파일 저장 안 함
"""

import os, sys, argparse
from pathlib import Path

REPO_DEFAULT = os.path.expanduser("~/Documents/hyperclass-help-ko")

FOLDER_DISPLAY = {
    "01-시작하기":         "시작하기(Getting Started)",
    "02-연락처":          "연락처(Contacts)",
    "03-대화":            "대화(Conversations)",
    "04-캘린더-예약":     "캘린더 & 예약(Calendars & Appointments)",
    "05-기회-파이프라인":  "기회 & 파이프라인(Opportunities & Pipelines)",
    "06-사이트":          "사이트(Sites)",
    "07-워크플로우":      "워크플로우(Workflows)",
    "08-결제":            "결제(Payments)",
    "09-이메일":          "이메일(Email)",
    "10-마케팅":          "마케팅(Marketing)",
    "11-설정":            "설정(Settings)",
    "12-대시보드":        "대시보드(Dashboards)",
    "13-AI-Employee":    "AI 직원(AI Employee)",
    "14-문서-계약":       "문서 & 계약(Documents & Contracts)",
    "15-전화-시스템":     "전화 시스템(Phone System)",
    "16-SaaS-설정":      "SaaS 설정(SaaS Configurator)",
    "17-멤버십-커뮤니티": "멤버십 & 커뮤니티(Memberships & Communities)",
    "18-리포팅":          "리포팅(Reporting)",
    "19-에이전시-뷰":     "에이전시 뷰(Agency View)",
    "20-고객지원":        "고객지원(Customer Support)",
    "21-어필리에이트":    "어필리에이트(Affiliates)",
    "22-Eliza":          "Eliza 에이전트",
    "23-레거시-자동화":   "레거시 자동화(Legacy)",
    "24-대학":            "하이레벨 대학(University)",
    "25-애드온-세일즈":   "애드온 & 세일즈(Add-ons & Sales)",
    "26-산업-가이드":     "산업별 가이드(Industry Guides)",
    "27-앱-마켓":         "앱 마켓플레이스(App Marketplace)",
    "28-에이전시-리포팅": "에이전시 리포팅(Agency Reporting)",
    "29-스냅샷":          "스냅샷(Snapshots)",
    "30-모바일-데스크톱": "모바일 & 데스크톱(Mobile & Desktop)",
    "31-리셀링":          "리셀링(Reselling)",
    "32-알림":            "알림(Notifications)",
    "33-컴플라이언스":    "컴플라이언스(Compliance)",
    "34-국제화":          "국제화(Internationalization)",
    "35-개발자":          "개발자 리소스(Developer Resources)",
    "36-기타":            "기타(Miscellaneous)",
    "37-이커머스-스토어": "이커머스 스토어(E-commerce Store)",
    "38-인증서":          "인증서(Certificates)",
    "39-클라이언트-포털": "클라이언트 포털(Client Portal)",
    "40-병합필드-변수":   "병합 필드 & 변수(Merge Fields)",
    "41-평판-리뷰":       "평판 관리 & 리뷰(Reputation)",
    "42-통합":            "통합(Integrations)",
}


def get_md_title(filepath: str) -> str:
    """마크다운 파일에서 첫 번째 H1 제목을 추출한다. 없으면 파일명 반환."""
    try:
        with open(filepath, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line.startswith("# "):
                    return line[2:].strip()
    except Exception:
        pass
    return Path(filepath).stem


def is_empty_article(filepath: str) -> bool:
    """제목만 있고 본문이 없는 파일 여부 (100자 미만)."""
    try:
        content = Path(filepath).read_text(encoding="utf-8").strip()
        # 메타데이터 헤더 + 제목만 있는 경우
        return len(content) < 150
    except Exception:
        return False


def generate(repo: str, dry_run: bool = False) -> int:
    """SUMMARY.md 재생성. 생성된 항목 수를 반환한다."""
    docs = Path(repo) / "docs"
    summary_path = Path(repo) / "SUMMARY.md"

    if not docs.exists():
        print(f"❌ docs 디렉토리 없음: {docs}")
        sys.exit(1)

    lines = ["# Hyperclass 도움말\n"]
    article_count = 0
    empty_skipped = 0

    for top_dir in sorted(docs.iterdir()):
        if not top_dir.is_dir():
            continue

        display_name = FOLDER_DISPLAY.get(top_dir.name, top_dir.name)
        files = []

        for md_file in sorted(top_dir.rglob("*.md")):
            if is_empty_article(str(md_file)):
                empty_skipped += 1
                continue
            rel_path = md_file.relative_to(Path(repo))
            title = get_md_title(str(md_file))
            if not title or title.startswith("---"):
                empty_skipped += 1
                continue
            files.append((title, str(rel_path)))

        if not files:
            continue

        lines.append(f"\n## {display_name}\n")
        for title, rel_path in files:
            lines.append(f"  * [{title}]({rel_path})")
            article_count += 1

    content = "\n".join(lines) + "\n"

    if dry_run:
        print(content[:2000] + ("\n..." if len(content) > 2000 else ""))
        print(f"\n[dry-run] 항목: {article_count}개 | 빈 파일 스킵: {empty_skipped}개")
        return article_count

    summary_path.write_text(content, encoding="utf-8")
    print(f"✅ SUMMARY.md 재생성 완료")
    print(f"   항목: {article_count}개 | 빈 파일 스킵: {empty_skipped}개")
    print(f"   경로: {summary_path}")
    return article_count


def main():
    p = argparse.ArgumentParser(description="SUMMARY.md 자동 재생성")
    p.add_argument("--repo",    default=REPO_DEFAULT, help="hyperclass-help-ko 레포 경로")
    p.add_argument("--dry-run", action="store_true",  help="출력만 (파일 저장 안 함)")
    args = p.parse_args()
    generate(args.repo, args.dry_run)


if __name__ == "__main__":
    main()
