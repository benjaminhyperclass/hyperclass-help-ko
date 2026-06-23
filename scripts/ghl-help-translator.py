#!/usr/bin/env python3
"""
GHL Help 한글화 자동 번역기 v2.0

Bot1 youtube-trend-analyzer.py와 동일한 패턴:
  Claude Code에서 직접 실행 가능
  전체 파이프라인 자동 처리 (URL 수집 → 번역 → QA → 저장 → 리포트)

사용법:
  # Claude Code에서 실행 (권장)
  ! cd ~/Documents/benjamin-vault && python3 scripts/ghl-help-translator.py --category getting-started

  # Tier 1 전체
  ! cd ~/Documents/benjamin-vault && python3 scripts/ghl-help-translator.py --tier 1

  # 진행 상황
  ! cd ~/Documents/benjamin-vault && python3 scripts/ghl-help-translator.py --status

  # 실패 재시도
  ! cd ~/Documents/benjamin-vault && python3 scripts/ghl-help-translator.py --retry-failed

  # 단건 URL
  ! cd ~/Documents/benjamin-vault && python3 scripts/ghl-help-translator.py --url "https://help.gohighlevel.com/..."

  # URL 수집만 (번역 안 함)
  ! cd ~/Documents/benjamin-vault && python3 scripts/ghl-help-translator.py --category contacts --dry-run

  # QA 리포트만 생성
  ! cd ~/Documents/benjamin-vault && python3 scripts/ghl-help-translator.py --qa-report
"""

import json
import os
import re
import sys
import time
import argparse
import hashlib
from datetime import datetime
from pathlib import Path

try:
    from anthropic import Anthropic
except ImportError:
    print("❌ pip3 install anthropic"); sys.exit(1)
try:
    import requests
except ImportError:
    print("❌ pip3 install requests"); sys.exit(1)


# ============================================================
# 설정
# ============================================================

VAULT = os.environ.get("VAULT_PATH", os.path.expanduser("~/Documents/benjamin-vault"))
REPO  = os.environ.get("REPO_PATH",  os.path.expanduser("~/Documents/hyperclass-help-ko"))
HELP_KO = os.path.join(VAULT, "01_Projects/Bot2-GHL-Localization/help-ko")
# GitHub Actions: data/glossary/, 로컬: VAULT/07_Meta/glossary/
_glossary_repo = os.path.join(REPO, "data/glossary/ghl-glossary.json")
GLOSSARY = _glossary_repo if os.path.exists(_glossary_repo) else os.path.join(VAULT, "07_Meta/glossary/ghl-glossary.json")
PROGRESS = os.path.join(VAULT, "01_Projects/Bot2-GHL-Localization/progress.json")
FAILED_LOG = os.path.join(VAULT, "01_Projects/Bot2-GHL-Localization/failed-log.json")
QA_REPORT = os.path.join(VAULT, "03_Resources/Bot2-QA/qa-report-{date}.md")

# Phase B2 — LC 전용 경로
LC_DEDUP_JSON = os.path.join(VAULT, "01_Projects/Bot2-GHL-Localization/phase-b2-leadconnector/01-dedup/new-articles.json")
LC_OUTPUT = os.path.join(REPO, "docs")
LC_PROGRESS = os.path.join(VAULT, "01_Projects/Bot2-GHL-Localization/phase-b2-leadconnector/02-translate/progress.json")
LC_FAILED = os.path.join(VAULT, "01_Projects/Bot2-GHL-Localization/phase-b2-leadconnector/02-translate/failed-log.json")

# LC Tier 분류 — 카테고리 이름 키워드 기반
LC_TIER_MAP = {
    "LC-1": [
        "LeadConnector Phone", "LeadConnector Email", "LeadConnector Integrations",
        "Phone Category", "WhatsApp Integration", "Error Code and Warning Dictionary",
    ],
    "LC-2": [
        "Payments", "Invoices", "Funnels", "Conversation AI", "Calendar",
        "Contacts", "Workflow", "Conversations View",
    ],
}

MODEL = "claude-sonnet-4-20250514"
MAX_TOKENS = 8000
DELAY = 2  # API rate limit (초)
FETCH_DELAY = 1  # 웹 fetch rate limit (초)

# GHL Help 기본 URL
GHL_BASE = "https://help.gohighlevel.com"

# ============================================================
# 카테고리 정의 — 카테고리 페이지 URL 기반 자동 URL 수집
# ============================================================

CATEGORIES = {
    # ── Tier 1 ──
    "getting-started": {
        "name": "Getting Started w/ HighLevel",
        "local": "01-시작하기",
        "tier": 1,
        "category_url": f"{GHL_BASE}/support/solutions/155000000204",
        "folder_map": {
            "Foundational Setup": "기본-설정",
            "Marketing & Lead Generation": "마케팅-리드-생성",
            "Marketing &amp; Lead Generation": "마케팅-리드-생성",
            "Sales & Conversations": "세일즈-대화",
            "Sales &amp; Conversations": "세일즈-대화",
            "Website & Content": "웹사이트-콘텐츠",
            "Website &amp; Content": "웹사이트-콘텐츠",
            "Commerce": "커머스",
        }
    },
    "contacts": {
        "name": "Contacts",
        "local": "02-연락처",
        "tier": 1,
        "category_url": f"{GHL_BASE}/support/solutions/155000000123",
        "folder_map": {
            "Smart Lists": "스마트-리스트",
            "Contact Details View": "연락처-상세",
            "Bulk Actions": "일괄-작업",
            "Contacts": "연락처-기본",
            "Updating Contact Properties": "속성-업데이트",
            "Getting Started with Contacts": "시작하기",
            "Contacts and Other Modules": "모듈-연동",
        }
    },
    "conversations": {
        "name": "Conversations",
        "local": "03-대화",
        "tier": 1,
        "category_url": f"{GHL_BASE}/support/solutions/48000449587",
        "folder_map": {
            "Conversations": "대화",
            "Manual Actions": "수동-작업",
        }
    },
    "calendars": {
        "name": "Calendars & Appointments",
        "local": "04-캘린더-예약",
        "tier": 1,
        "category_url": f"{GHL_BASE}/support/solutions/48000449585",
        "folder_map": {
            "Getting Started w/ Calendars": "시작하기",
            "Creating Calendars": "캘린더-만들기",
            "Services": "서비스",
            "Rentals": "렌탈",
            "Calendar Groups": "캘린더-그룹",
            "Calendar Settings & Preferences": "캘린더-설정",
            "Calendar Settings &amp; Preferences": "캘린더-설정",
            "Scheduling Appointments": "예약-관리",
            "Calendar Integrations": "캘린더-연동",
            "Troubleshooting Calendars": "트러블슈팅",
            "Calendar FAQ's": "FAQ",
            "Calendar FAQ&#x27;s": "FAQ",
        }
    },
    "opportunities": {
        "name": "Opportunities & Pipelines",
        "local": "05-기회-파이프라인",
        "tier": 1,
        "category_url": f"{GHL_BASE}/support/solutions/48000449589",
        "folder_map": {
            "Introduction to Opportunities": "소개",
            "Getting Started with Opportunities": "시작하기",
            "Managing Opportunities": "기회-관리",
            "Opportunities Module Interactions": "모듈-연동",
            "Bulk Actions for Opportunities": "일괄-작업",
        }
    },
    "sites": {
        "name": "Sites",
        "local": "06-사이트",
        "tier": 1,
        "category_url": f"{GHL_BASE}/support/solutions/48000449581",
        "folder_map": {
            "Funnels and Websites": "퍼널-웹사이트",
            "Stores (E-commerce)": "스토어",
            "Analytics": "애널리틱스",
            "Blog": "블로그",
            "Wordpress": "워드프레스",
            "Client Portal": "클라이언트-포털",
            "Forms": "폼",
            "Surveys": "설문",
            "Chat Widget": "채팅-위젯",
            "QR Codes": "QR코드",
            "Troubleshooting Funnels": "트러블슈팅",
            "Privacy Policy": "개인정보",
            "General Setup": "일반-설정",
            "Quizzes": "퀴즈",
            "SEO": "SEO",
            "Custom Objects": "커스텀-오브젝트",
            "Webinars": "웨비나",
        }
    },
    "workflows": {
        "name": "Workflows",
        "local": "07-워크플로우",
        "tier": 1,
        "category_url": f"{GHL_BASE}/support/solutions/48000455132",
        "folder_map": {
            "Getting Started w/ Workflows": "시작하기",
            "Workflow Builder": "빌더",
            "Workflow Triggers": "트리거",
            "Workflow Actions": "액션",
            "Developer Resources": "개발자",
            "Troubleshooting Workflows": "트러블슈팅",
            "Unpublished Articles": "미발행",
            "Workflow Recipes": "레시피",
        }
    },
    # ── Tier 2 ──
    "payments": {
        "name": "Payments",
        "local": "08-결제",
        "tier": 2,
        "category_url": f"{GHL_BASE}/support/solutions/155000000067",
        "folder_map": {
            "Getting Started w/ Payments": "시작하기",
            "Mobile Payments (Tap-to-Pay)": "모바일-결제",
            "Invoices & Estimates": "인보이스-견적",
            "Invoices &amp; Estimates": "인보이스-견적",
            "Documents & Contracts": "문서-계약",
            "Documents &amp; Contracts": "문서-계약",
            "Orders, Subscriptions, and Transactions": "주문-구독",
            "Payment Links": "결제-링크",
            "Products, Taxes & Coupons": "상품-세금-쿠폰",
            "Products, Taxes &amp; Coupons": "상품-세금-쿠폰",
            "Payment integrations, methods and settings": "결제-연동",
            "Gift Cards": "기프트카드",
        }
    },
    "email": {
        "name": "Email",
        "local": "09-이메일",
        "tier": 2,
        "category_url": f"{GHL_BASE}/support/solutions/48000449563",
        "folder_map": {
            "General": "일반",
            "Deliverability": "전달성",
            "LC Email": "LC-이메일",
            "MailGun": "메일건",
            "SMTP Providers": "SMTP",
            "Troubleshooting Email": "트러블슈팅",
            "LC Communication Billing": "통신-빌링",
            "Email Delivery Troubleshooting": "이메일-전달-트러블슈팅",
        }
    },
    "marketing": {
        "name": "Marketing",
        "local": "10-마케팅",
        "tier": 2,
        "category_url": f"{GHL_BASE}/support/solutions/48000449565",
        "folder_map": {
            "Social Planner": "소셜-플래너",
            "Email Marketing": "이메일-마케팅",
            "Ad Manager": "광고-매니저",
            "Template Library": "템플릿-라이브러리",
            "Trigger Links": "트리거-링크",
            "SMS & Email Templates": "SMS-이메일-템플릿",
            "SMS &amp; Email Templates": "SMS-이메일-템플릿",
            "Affiliate Manager": "어필리에이트-매니저",
            "Brand Board": "브랜드-보드",
            "AI Appointment Booking Bot": "AI-예약-봇",
            "Countdown Timer": "카운트다운-타이머",
        }
    },
    "settings": {
        "name": "Settings",
        "local": "11-설정",
        "tier": 2,
        "category_url": f"{GHL_BASE}/support/solutions/48000449595",
        "folder_map": {
            "Agency Settings": "에이전시-설정",
            "Sub-Account Settings": "서브어카운트-설정",
            "User Settings": "사용자-설정",
            "Domains": "도메인",
            "Audit Logs": "감사-로그",
        }
    },
    "dashboards": {
        "name": "Dashboards",
        "local": "12-대시보드",
        "tier": 2,
        "category_url": f"{GHL_BASE}/support/solutions/48000449586",
        "folder_map": {
            "Getting Started w/ Dashboards": "시작하기",
            "Dashboard Widgets": "위젯",
            "Configuring Dashboards": "설정",
            "Subaccount Dashboards": "서브어카운트-대시보드",
        }
    },
    "ai-employee": {
        "name": "AI Employee",
        "local": "13-AI-Employee",
        "tier": 2,
        "category_url": f"{GHL_BASE}/support/solutions/155000000184",
        "folder_map": {
            "AI Employee": "AI-Employee",
            "Voice AI": "Voice-AI",
            "Workflow AI": "Workflow-AI",
            "Conversation AI": "Conversation-AI",
            "Content AI": "Content-AI",
            "Ask AI": "Ask-AI",
            "Agent Studio": "Agent-Studio",
            "Email AI": "Email-AI",
            "MCP Server": "MCP-Server",
            "Knowledge Bases": "Knowledge-Bases",
        }
    },
    "documents": {
        "name": "Documents & Contracts",
        "local": "14-문서-계약",
        "tier": 2,
        "category_url": f"{GHL_BASE}/support/solutions/48000453974",
        "folder_map": {
            "Documents and Contracts": "문서-계약",
        }
    },
    # ── Tier 3 ──
    "phone": {
        "name": "Phone System",
        "local": "15-전화-시스템",
        "tier": 3,
        "category_url": f"{GHL_BASE}/support/solutions/48000415161",
        "folder_map": {
            "General": "일반", "Calling": "통화", "LC Phone System": "LC-Phone",
            "Messaging": "메시징", "A2P registration": "A2P-등록",
            "Voicemail": "보이스메일", "Phone numbers": "전화번호",
        }
    },
    "memberships": {
        "name": "Memberships & Communities",
        "local": "17-멤버십-커뮤니티",
        "tier": 3,
        "category_url": f"{GHL_BASE}/support/solutions/155000000006",
        "folder_map": {
            "Membership/Courses Sites": "멤버십-코스",
            "Communities": "커뮤니티",
        }
    },
    "reporting": {
        "name": "Reporting",
        "local": "18-리포팅",
        "tier": 3,
        "category_url": f"{GHL_BASE}/support/solutions/48000451278",
        "folder_map": {
            "Tracking & Attribution": "추적-어트리뷰션",
            "Tracking &amp; Attribution": "추적-어트리뷰션",
            "Custom Reports": "커스텀-리포트",
            "Marketing Audit Reports": "마케팅-감사-리포트",
        }
    },
    # ── Tier 4 ──
    "saas-configurator": {
        "name": "SaaS Configurator",
        "local": "16-SaaS-설정",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/48000453216",
        "folder_map": {}
    },
    "agency-view": {
        "name": "Agency View",
        "local": "19-에이전시-뷰",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/155000000148",
        "folder_map": {}
    },
    "customer-support": {
        "name": "Customer Support",
        "local": "20-고객지원",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/155000000145",
        "folder_map": {}
    },
    "affiliates": {
        "name": "HighLevel Affiliates Program",
        "local": "21-어필리에이트",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/48000449591",
        "folder_map": {}
    },
    "eliza": {
        "name": "Eliza Agent Platform",
        "local": "22-Eliza",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/48000456231",
        "folder_map": {}
    },
    "legacy-automation": {
        "name": "Logic & Fulfillment (Legacy)",
        "local": "23-레거시-자동화",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/48000452118",
        "folder_map": {}
    },
    "university": {
        "name": "University",
        "local": "24-대학",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/48000452413",
        "folder_map": {}
    },
    "addons-sales": {
        "name": "Add-ons & Sales Trainings",
        "local": "25-애드온-세일즈",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/48000452144",
        "folder_map": {}
    },
    "industry-guides": {
        "name": "Industry Guides",
        "local": "26-산업-가이드",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/155000000042",
        "folder_map": {}
    },
    "app-marketplace": {
        "name": "App Marketplace",
        "local": "27-앱-마켓",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/155000000049",
        "folder_map": {}
    },
    "agency-reporting": {
        "name": "Agency Reporting",
        "local": "28-에이전시-리포팅",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/48000455606",
        "folder_map": {}
    },
    "snapshots": {
        "name": "Account Snapshots",
        "local": "29-스냅샷",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/48000449593",
        "folder_map": {}
    },
    "mobile-desktop": {
        "name": "Mobile & Desktop App",
        "local": "30-모바일-데스크톱",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/48000455168",
        "folder_map": {}
    },
    "compliance": {
        "name": "Compliance",
        "local": "33-컴플라이언스",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/155000000024",
        "folder_map": {}
    },
    "internationalization": {
        "name": "Internationalization",
        "local": "34-국제화",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/155000000021",
        "folder_map": {}
    },
    "developer-resources": {
        "name": "Developer Resources",
        "local": "35-개발자",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/48000450445",
        "folder_map": {}
    },
    "notifications": {
        "name": "Notifications",
        "local": "32-알림",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/48000449600",
        "folder_map": {}
    },
    "reselling": {
        "name": "Reselling Products",
        "local": "31-리셀링",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/48000454568",
        "folder_map": {}
    },
    "miscellaneous": {
        "name": "Miscellaneous",
        "local": "36-기타",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/48000453288",
        "folder_map": {}
    },
    "ecommerce-store": {
        "name": "E-commerce store",
        "local": "37-이커머스-스토어",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/155000000059",
        "folder_map": {}
    },
    "certificates": {
        "name": "Certificates",
        "local": "38-인증서",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/155000000065",
        "folder_map": {}
    },
    "client-portal": {
        "name": "Client Portal",
        "local": "39-클라이언트-포털",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/155000000004",
        "folder_map": {}
    },
    "merge-fields": {
        "name": "Merge Fields & Custom Variables",
        "local": "40-병합필드-변수",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/155000000025",
        "folder_map": {}
    },
    "reputation": {
        "name": "Reputation Management & Reviews",
        "local": "41-평판-리뷰",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/48000449583",
        "folder_map": {}
    },
    "integrations": {
        "name": "Integrations",
        "local": "42-통합",
        "tier": 4,
        "category_url": f"{GHL_BASE}/support/solutions/48000449584",
        "folder_map": {}
    },
}


# ============================================================
# 시스템 프롬프트
# ============================================================

def build_system_prompt(glossary_text):
    return f"""당신은 GoHighLevel(GHL) 공식 Help 문서를 한국어로 번역하는 전문 번역가입니다.
Hyperclass(하이퍼클래스) 플랫폼의 한국어 사용 가이드를 만들고 있습니다.

## 번역 규칙

1. 직역이 아닌 로컬라이제이션: 한국 사용자가 자연스럽게 읽을 수 있도록 의역합니다.
2. 영문 UI 용어는 병기:
   - 첫 등장: "연락처(Contacts) 메뉴를 클릭하세요"
   - 이후: "연락처 메뉴에서..."
   - GHL 메뉴 경로: `Settings(설정) → Business Profile(비즈니스 프로필)`
3. 용어 사전(glossary) 준수: 아래 glossary의 용어를 반드시 사용합니다.
4. 톤: 존댓말(해요체), 친근하지만 전문적.
5. 코드/URL/기술 용어: 번역하지 않고 원문 유지.
6. 이미지: 원문의 마크다운 이미지 링크를 그대로 유지. 절대 삭제하지 마세요.
   - ![한국어 설명](원문 URL 그대로)
7. FAQ: "~는 어떻게 하나요?", "~가 안 돼요" 등 자연스러운 한국어.
8. "Learn More" 링크: 원문 URL 유지, 텍스트만 한국어.
9. 네비게이션/헤더/푸터/피드백 UI("Was this article helpful?" 등): 모두 제거.
10. "Articles in this Folder", "Related Articles" 섹션: 제거.

## 출력 형식

---
원문: {{URL}}
번역일: {{날짜}}
카테고리: {{카테고리}}
---

# {{한글 제목}}

{{본문}}

---
*원문 최종 수정: {{날짜}}*
*Hyperclass 사용 가이드 — hyperclass.ai*

## 용어 사전
{glossary_text}

## 화이트라벨 브랜딩 규칙 (필수)

번역 시 다음 브랜딩 교체를 반드시 적용하세요:
1. "GoHighLevel" → "하이퍼클래스"
2. "HighLevel" → "하이퍼클래스"
3. "GHL" (단독 사용 시) → "하이퍼클래스"
4. "LeadConnector" → "하이퍼클래스"
5. "Powered by HighLevel" → 삭제
6. "HighLevel Support" → "하이퍼클래스 고객지원"
7. "HighLevel University" → "하이퍼클래스 아카데미"
URL 교체: help.gohighlevel.com → hyperclass.gitbook.io/hyperclass-docs, www.gohighlevel.com → hyperclass.ai
교체 금지: API endpoint(services.leadconnectorhq.com 등), 코드 블록 내 기술 참조"""


# ============================================================
# 유틸리티
# ============================================================

def load_glossary():
    if not os.path.exists(GLOSSARY):
        return "(glossary 없음)"
    with open(GLOSSARY, encoding="utf-8") as f:
        data = json.load(f)
    return "\n".join(f"- {t['en']} → {t['ko']}" + (f" ({t['ko_desc'][:40]})" if t.get('ko_desc') else "")
                     for t in data.get("terms", []))

def load_progress():
    if os.path.exists(PROGRESS):
        with open(PROGRESS, encoding="utf-8") as f:
            return json.load(f)
    return {"translated": 0, "articles": {}}

def save_progress(p):
    p["last_updated"] = datetime.now().strftime("%Y-%m-%d %H:%M")
    os.makedirs(os.path.dirname(PROGRESS), exist_ok=True)
    with open(PROGRESS, "w", encoding="utf-8") as f:
        json.dump(p, f, ensure_ascii=False, indent=2)

def load_failed():
    if os.path.exists(FAILED_LOG):
        with open(FAILED_LOG, encoding="utf-8") as f:
            return json.load(f)
    return []

def save_failed(f):
    with open(FAILED_LOG, "w", encoding="utf-8") as fh:
        json.dump(f, fh, ensure_ascii=False, indent=2)

def url_to_filename(url):
    m = re.search(r'articles/\d+-(.*?)$', url)
    return f"{m.group(1)[:80]}.md" if m else f"article-{hashlib.md5(url.encode()).hexdigest()[:12]}.md"

def url_hash(url):
    return hashlib.md5(url.encode()).hexdigest()[:12]


# ============================================================
# URL 자동 수집 — 카테고리/폴더 페이지를 재귀적으로 크롤링
# ============================================================

HEADERS = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"}

def _fetch_page(url):
    """페이지 HTML을 가져온다. 실패하면 None 반환."""
    try:
        resp = requests.get(url, headers=HEADERS, timeout=30)
        resp.raise_for_status()
        return resp.text
    except Exception as e:
        print(f"     ⚠️ fetch 실패: {url} — {e}")
        return None

def _extract_folder_urls(html):
    """HTML에서 폴더 URL과 이름을 추출한다. 페이지네이션/네비게이션 링크 제외."""
    results = []
    seen_paths = set()

    # 패턴 1: 폴더 헤딩 링크 (fw-heading) — 내부에 div/span 포함
    for m in re.finditer(
        r'<a[^>]*href="(/support/solutions/folders/[^"]+)"[^>]*class="[^"]*fw-heading[^"]*"[^>]*>(.*?)</a>',
        html, re.DOTALL
    ):
        path = m.group(1)
        inner = m.group(2)
        # 태그 제거 후 이름 추출
        name = re.sub(r'<[^>]+>', '', inner).strip()
        # 괄호 안 숫자 제거: "Funnels and Websites (115)" -> "Funnels and Websites"
        name = re.sub(r'\s*\(\d+\)\s*$', '', name).strip()
        if not name:
            continue
        base_path = path.split('?')[0]
        if base_path in seen_paths:
            continue
        seen_paths.add(base_path)
        results.append((path, name))

    # 패턴 2: 일반 폴더 링크 (fw-heading 아닌 것) — "View all" 등은 제외
    for m in re.finditer(
        r'<a[^>]*href="(/support/solutions/folders/[^"]+)"[^>]*>(.*?)</a>',
        html, re.DOTALL
    ):
        path = m.group(1)
        inner = m.group(2)
        name = re.sub(r'<[^>]+>', '', inner).strip()
        name = re.sub(r'\s*\(\d+\)\s*$', '', name).strip()
        if not name:
            continue
        # 페이지네이션/네비 링크 필터링
        if re.match(r'^(\d+|<|>|&lt;|&gt;|Previous|Next|View all|»|«)', name, re.IGNORECASE):
            continue
        if '?page=' in path:
            continue
        base_path = path.split('?')[0]
        if base_path in seen_paths:
            continue
        seen_paths.add(base_path)
        results.append((path, name))

    return results

def _extract_article_urls(html):
    """HTML에서 아티클 URL, ID, 제목을 추출한다."""
    return re.findall(
        r'href="(/support/solutions/articles/([^"]+))"[^>]*>\s*([^<]+)',
        html
    )

MAX_CRAWL_DEPTH = 5  # 재귀 깊이 제한

def _crawl_folder(folder_url, folder_name, folder_ko, cat, seen, articles, visited_folders, depth=0):
    """폴더 페이지를 fetch해서 아티클과 하위 폴더를 재귀 수집한다."""
    # 방문 체크 (무한 루프 방지)
    base_url = folder_url.split('?')[0]
    if base_url in visited_folders:
        return
    visited_folders.add(base_url)

    if depth > MAX_CRAWL_DEPTH:
        print(f"     ⚠️ 최대 깊이 초과, 스킵: {folder_name}")
        return

    indent = "     " + "  " * depth
    print(f"{indent}📁 폴더: {folder_name}")

    time.sleep(FETCH_DELAY)
    html = _fetch_page(f"{GHL_BASE}{folder_url}")
    if not html:
        return

    # 이 폴더 안의 아티클 수집 (모든 페이지)
    _crawl_folder_pages(html, folder_url, folder_ko, folder_name, seen, articles)

    # 하위 폴더 재귀 탐색
    for sub_path, sub_name in _extract_folder_urls(html):
        sub_name = sub_name.strip()
        sub_ko = cat["folder_map"].get(sub_name, sub_name)
        _crawl_folder(sub_path, sub_name, sub_ko, cat, seen, articles, visited_folders, depth + 1)


def _crawl_folder_pages(html, folder_url, folder_ko, folder_name, seen, articles):
    """폴더의 아티클을 수집하고, 페이지네이션이 있으면 다음 페이지도 수집."""
    # 현재 페이지 아티클 수집
    for path, article_id, title in _extract_article_urls(html):
        full_url = f"{GHL_BASE}{path}"
        if full_url not in seen:
            seen.add(full_url)
            articles.append({
                "url": full_url,
                "title": title.strip(),
                "folder": folder_ko,
                "folder_en": folder_name,
            })

    # 페이지네이션: ?page=N 링크 찾기
    page_links = re.findall(
        r'href="(/support/solutions/folders/[^"]*\?page=(\d+))"',
        html
    )
    visited_pages = {1}  # 현재 페이지
    for page_path, page_num in page_links:
        page_num = int(page_num)
        if page_num in visited_pages:
            continue
        visited_pages.add(page_num)
        time.sleep(FETCH_DELAY)
        page_html = _fetch_page(f"{GHL_BASE}{page_path}")
        if not page_html:
            continue
        for path, article_id, title in _extract_article_urls(page_html):
            full_url = f"{GHL_BASE}{path}"
            if full_url not in seen:
                seen.add(full_url)
                articles.append({
                    "url": full_url,
                    "title": title.strip(),
                    "folder": folder_ko,
                    "folder_en": folder_name,
                })


def discover_articles(category_key):
    """카테고리 페이지에서 폴더를 재귀적으로 크롤링해 모든 아티클 URL을 수집"""
    cat = CATEGORIES.get(category_key)
    if not cat:
        return []

    print(f"  🔍 카테고리 페이지에서 URL 수집: {cat['category_url']}")

    html = _fetch_page(cat["category_url"])
    if not html:
        print(f"  ❌ 카테고리 페이지 fetch 실패")
        return []

    articles = []
    seen = set()

    # 카테고리 페이지의 폴더들을 각각 방문하여 아티클 수집
    folder_links = _extract_folder_urls(html)
    visited_folders = set()

    if folder_links:
        for folder_path, folder_name in folder_links:
            folder_name = folder_name.strip()
            folder_ko = cat["folder_map"].get(folder_name, folder_name)
            _crawl_folder(folder_path, folder_name, folder_ko, cat, seen, articles, visited_folders)

    # 카테고리 페이지 자체에 아티클이 직접 있는 경우도 수집
    for path, article_id, title in _extract_article_urls(html):
        full_url = f"{GHL_BASE}{path}"
        if full_url not in seen:
            seen.add(full_url)
            articles.append({
                "url": full_url,
                "title": title.strip(),
                "folder": "",
                "folder_en": "",
            })

    print(f"  ✅ {len(articles)}개 아티클 URL 수집 완료")
    return articles


# ============================================================
# 원문 수집
# ============================================================

def fetch_article(url):
    try:
        headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"}
        resp = requests.get(url, headers=headers, timeout=30)
        resp.raise_for_status()
        html = resp.text

        # 제목
        m = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.DOTALL)
        title = re.sub(r'<[^>]+>', '', m.group(1)).strip() if m else "Untitled"

        # 수정일
        m = re.search(r'Modified on:\s*([^<]+)', html)
        modified = m.group(1).strip() if m else ""

        # 본문 추출
        body = ""
        # 방법 1: article-body
        m = re.search(r'class="article-body"[^>]*>(.*?)</div>\s*(?:<div|<section)', html, re.DOTALL)
        if m: body = m.group(1)
        # 방법 2: Modified on ~ Was this article
        if not body:
            m = re.search(r'Modified on:.*?</[^>]+>(.*?)Was this article', html, re.DOTALL)
            if m: body = m.group(1)
        # 방법 3: h1 ~ Was this article
        if not body:
            m = re.search(r'</h1>(.*?)Was this article', html, re.DOTALL)
            if m: body = m.group(1)
        if not body:
            body = html

        return {"url": url, "title": title, "modified_date": modified,
                "body_markdown": html_to_md(body), "success": True}
    except Exception as e:
        return {"url": url, "title": "", "modified_date": "",
                "body_markdown": "", "success": False, "error": str(e)}


def html_to_md(html):
    t = html
    t = re.sub(r'<script[^>]*>.*?</script>', '', t, flags=re.DOTALL)
    t = re.sub(r'<style[^>]*>.*?</style>', '', t, flags=re.DOTALL)
    # 이미지 보존
    t = re.sub(r'<img[^>]*src="([^"]*)"[^>]*/?\s*>', r'\n![](\1)\n', t)
    # 헤딩
    for i in range(4, 0, -1):
        t = re.sub(rf'<h{i}[^>]*>(.*?)</h{i}>', '\n' + '#'*i + r' \1\n', t, flags=re.DOTALL)
    # 서식
    t = re.sub(r'<(?:strong|b)>(.*?)</(?:strong|b)>', r'**\1**', t, flags=re.DOTALL)
    t = re.sub(r'<(?:em|i)>(.*?)</(?:em|i)>', r'*\1*', t, flags=re.DOTALL)
    t = re.sub(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', r'[\2](\1)', t, flags=re.DOTALL)
    t = re.sub(r'<li[^>]*>(.*?)</li>', r'\n- \1', t, flags=re.DOTALL)
    t = re.sub(r'</?[ou]l[^>]*>', '', t)
    t = re.sub(r'<br\s*/?>', '\n', t)
    t = re.sub(r'<hr\s*/?>', '\n---\n', t)
    t = re.sub(r'<p[^>]*>(.*?)</p>', r'\n\1\n', t, flags=re.DOTALL)
    t = re.sub(r'<div[^>]*>(.*?)</div>', r'\n\1\n', t, flags=re.DOTALL)
    t = re.sub(r'<[^>]+>', '', t)
    for old, new in [('&amp;','&'),('&lt;','<'),('&gt;','>'),('&quot;','"'),('&#x27;',"'"),('&nbsp;',' ')]:
        t = t.replace(old, new)
    t = re.sub(r'\n{4,}', '\n\n\n', t)
    return t.strip()


# ============================================================
# QA 자동 검수
# ============================================================

def run_qa(original, translated):
    issues = []
    # 이미지 누락 체크
    orig_imgs = len(re.findall(r'!\[', original.get("body_markdown", "")))
    trans_imgs = len(re.findall(r'!\[', translated))
    if orig_imgs > 0 and trans_imgs < orig_imgs * 0.5:
        issues.append(f"이미지 누락: 원문 {orig_imgs} → 번역 {trans_imgs}")
    # 메타데이터 헤더
    if "---\n원문:" not in translated and "---\r\n원문:" not in translated:
        issues.append("메타데이터 헤더 없음")
    # 길이 체크
    ol = len(original.get("body_markdown", ""))
    tl = len(translated)
    if ol > 500 and tl < ol * 0.3:
        issues.append(f"길이 부족: 원문 {ol}자 → 번역 {tl}자")
    # 해요체 체크
    sentences = re.findall(r'[가-힣]+[.!?]', translated)
    if len(sentences) > 5:
        haeyo = sum(1 for s in sentences if re.search(r'(요|세요|에요|해요|돼요|예요)[.!?]$', s))
        if haeyo < len(sentences) * 0.3:
            issues.append("해요체 비율 낮음")
    # 핵심 UI 용어 병기
    for term in ["Contacts", "Settings", "Workflows", "Pipeline", "Funnel", "Calendar"]:
        if term.lower() in original.get("body_markdown", "").lower():
            if term not in translated and term.lower() not in translated.lower():
                issues.append(f"용어 병기 누락: {term}")

    return {"passed": len(issues) == 0, "issues": issues,
            "images": {"orig": orig_imgs, "trans": trans_imgs},
            "length": {"orig": ol, "trans": tl}}


# ============================================================
# QA 리포트 생성
# ============================================================

def generate_qa_report():
    """전체 번역 결과에 대한 QA 리포트 생성"""
    progress = load_progress()
    failed = load_failed()
    articles = progress.get("articles", {})

    today = datetime.now().strftime("%Y-%m-%d")
    report_path = QA_REPORT.format(date=today)
    os.makedirs(os.path.dirname(report_path), exist_ok=True)

    total = len(articles)
    qa_passed = sum(1 for a in articles.values() if a.get("qa", {}).get("passed", False))
    qa_warned = total - qa_passed

    lines = [
        f"# GHL Help 한글화 QA 리포트",
        f"",
        f"> 생성일: {today}",
        f"> 번역 완료: {total}개",
        f"> QA 통과: {qa_passed}개",
        f"> QA 경고: {qa_warned}개",
        f"> 번역 실패: {len(failed)}개",
        f"",
        f"---",
        f"",
    ]

    # QA 경고 목록
    if qa_warned > 0:
        lines.append("## QA 경고 아티클")
        lines.append("")
        for h, a in articles.items():
            qa = a.get("qa", {})
            if not qa.get("passed", True):
                lines.append(f"### {a.get('title', 'Unknown')}")
                lines.append(f"- 파일: `{a.get('file', '')}`")
                lines.append(f"- 원문: {a.get('url', '')}")
                for issue in qa.get("issues", []):
                    lines.append(f"- ⚠️ {issue}")
                lines.append("")

    # 실패 목록
    if failed:
        lines.append("## 번역 실패 아티클")
        lines.append("")
        for f_item in failed:
            lines.append(f"- {f_item.get('url', '')}")
            lines.append(f"  에러: {f_item.get('error', '')}")
        lines.append("")

    # 통계
    lines.extend([
        "## 카테고리별 통계",
        "",
        "| 카테고리 | 번역 수 |",
        "|---------|--------|",
    ])

    cat_counts = {}
    for a in articles.values():
        cat = a.get("file", "").split("/help-ko/")[-1].split("/")[0] if "/help-ko/" in a.get("file", "") else "기타"
        cat_counts[cat] = cat_counts.get(cat, 0) + 1
    for cat, count in sorted(cat_counts.items()):
        lines.append(f"| {cat} | {count} |")

    lines.extend(["", "---", f"*자동 생성 — {today}*"])

    with open(report_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"\n📊 QA 리포트 생성: {report_path}")
    return report_path


# ============================================================
# 메인 번역
# ============================================================

def translate_article(client, article, system_prompt):
    original = fetch_article(article["url"])
    if not original["success"]:
        return {"success": False, "error": original.get("error", "fetch 실패")}

    today = datetime.now().strftime("%Y-%m-%d")
    cat_ko = article.get("category_ko", "")
    folder_ko = article.get("folder", "")

    user_prompt = f"""다음 GHL Help 아티클을 한국어로 번역해주세요.

원문 URL: {article['url']}
카테고리: {cat_ko} > {folder_ko}
원문 수정일: {original['modified_date']}
오늘 날짜: {today}

--- 원문 시작 ---
# {original['title']}

{original['body_markdown']}
--- 원문 끝 ---

위 규칙에 따라 한글화해주세요. 이미지 URL은 반드시 모두 유지하세요."""

    try:
        response = client.messages.create(
            model=MODEL, max_tokens=MAX_TOKENS,
            system=system_prompt,
            messages=[{"role": "user", "content": user_prompt}]
        )
        translated = response.content[0].text
        # 화이트라벨 후처리 (신규/수정 번역에만 적용)
        try:
            import sys as _sys, os as _os
            _wl_path = _os.path.join(_os.path.dirname(_os.path.abspath(__file__)), "whitelabel.py")
            if _os.path.exists(_wl_path):
                import importlib.util as _ilu
                _spec = _ilu.spec_from_file_location("whitelabel", _wl_path)
                _wl = _ilu.module_from_spec(_spec); _spec.loader.exec_module(_wl)
                translated = _wl.whitelabel_fix(translated)
                violations = _wl.whitelabel_check(translated)
                if violations:
                    print(f"  ⚠️  화이트라벨 후처리 후 위반 잔존 {len(violations)}건")
        except Exception:
            pass
        return {"success": True, "original": original,
                "translated": translated,
                "title": original["title"], "url": article["url"]}
    except Exception as e:
        return {"success": False, "error": f"API: {e}"}


def process_category(category_key, dry_run=False):
    cat = CATEGORIES.get(category_key)
    if not cat:
        print(f"❌ 카테고리 없음: {category_key}")
        print(f"   사용 가능: {', '.join(CATEGORIES.keys())}")
        return

    print(f"\n{'='*60}")
    print(f"  📂 {cat['name']} ({cat['local']}) — Tier {cat['tier']}")
    print(f"{'='*60}\n")

    # URL 자동 수집
    articles = discover_articles(category_key)

    if not articles:
        print("  ⚠️ 아티클이 없습니다.")
        return

    print(f"  총 {len(articles)}개 아티클\n")

    if dry_run:
        for i, a in enumerate(articles, 1):
            print(f"  {i:3d}. [{a.get('folder','')}] {a['title'][:60]}")
        print(f"\n  → --dry-run 제거 후 실행하면 번역 시작")
        return

    # 번역 실행
    client = Anthropic()
    glossary_text = load_glossary()
    system_prompt = build_system_prompt(glossary_text)
    progress = load_progress()
    failed_log = load_failed()

    ok = fail = skip = 0
    start_time = time.time()

    for i, article in enumerate(articles, 1):
        h = url_hash(article["url"])
        if h in progress.get("articles", {}):
            skip += 1
            continue

        article["category_ko"] = cat["local"]
        print(f"  📝 [{i}/{len(articles)}] {article['title'][:50]}...")

        # 원문 수집
        print(f"     📥 원문 수집...")
        time.sleep(FETCH_DELAY)

        result = translate_article(client, article, system_prompt)

        if result["success"]:
            # QA
            qa = run_qa(result["original"], result["translated"])
            status = "✅" if qa["passed"] else "⚠️"
            if qa["issues"]:
                print(f"     {status} QA: {', '.join(qa['issues'])}")

            # 저장
            folder_path = os.path.join(HELP_KO, cat["local"], article.get("folder", ""))
            os.makedirs(folder_path, exist_ok=True)
            filename = url_to_filename(article["url"])
            filepath = os.path.join(folder_path, filename)

            with open(filepath, "w", encoding="utf-8") as f:
                f.write(result["translated"])

            short_path = filepath.split("/help-ko/")[-1] if "/help-ko/" in filepath else filename
            print(f"     ✅ → {short_path}")

            if "articles" not in progress:
                progress["articles"] = {}
            progress["articles"][h] = {
                "url": article["url"], "title": result["title"],
                "file": filepath, "qa": qa,
                "at": datetime.now().strftime("%Y-%m-%d %H:%M")
            }
            progress["translated"] = len(progress["articles"])
            save_progress(progress)
            ok += 1
        else:
            print(f"     ❌ {result.get('error', '')}")
            failed_log.append({
                "url": article["url"], "title": article.get("title", ""),
                "error": result.get("error", ""),
                "at": datetime.now().strftime("%Y-%m-%d %H:%M")
            })
            save_failed(failed_log)
            fail += 1

        time.sleep(DELAY)

    elapsed = time.time() - start_time
    print(f"\n{'='*60}")
    print(f"  📊 {cat['name']} 완료! ({elapsed:.0f}초)")
    print(f"  ✅ 성공: {ok}  ❌ 실패: {fail}  ⏭️ 스킵: {skip}")
    print(f"  전체 진행: {progress.get('translated', 0)}/1,899")
    print(f"{'='*60}\n")

    # QA 리포트 자동 생성
    if ok > 0:
        generate_qa_report()


# ============================================================
# LC (Phase B2) 처리
# ============================================================

def _lc_cat_name_to_folder(name: str) -> str:
    """카테고리 이름을 폴더명(kebab-case)으로 변환."""
    import unicodedata
    slug = name.lower()
    slug = re.sub(r"[^a-z0-9]+", "-", slug).strip("-")
    return slug or "lc-misc"


def _lc_tier_for_cat(cat_name: str) -> str:
    """카테고리 이름으로 tier 판정. 키워드 부분 일치."""
    for tier, keywords in LC_TIER_MAP.items():
        if any(kw.lower() in cat_name.lower() for kw in keywords):
            return tier
    return "LC-3"


def load_lc_progress() -> dict:
    try:
        return json.loads(Path(LC_PROGRESS).read_text())
    except Exception:
        return {"translated": 0, "articles": {}}


def save_lc_progress(p: dict):
    Path(LC_PROGRESS).parent.mkdir(parents=True, exist_ok=True)
    Path(LC_PROGRESS).write_text(json.dumps(p, ensure_ascii=False, indent=2))


def process_lc_tier(tier: str, dry_run: bool = False):
    """LC dedup JSON에서 해당 tier 아티클만 번역."""
    if not Path(LC_DEDUP_JSON).exists():
        print(f"❌ LC dedup JSON 없음: {LC_DEDUP_JSON}")
        return

    data = json.loads(Path(LC_DEDUP_JSON).read_text())
    all_cats = data["categories"]

    tier_cats = [c for c in all_cats if _lc_tier_for_cat(c["name"]) == tier]
    total = sum(c["new_article_count"] for c in tier_cats)

    print(f"\n{'='*60}")
    print(f"  LC {tier} 번역 시작 — {len(tier_cats)}개 카테고리 / {total}개 아티클")
    print(f"{'='*60}\n")

    if dry_run:
        for c in tier_cats:
            print(f"  [{c['new_article_count']:3d}개] {c['name']}")
            for a in c["articles"]:
                print(f"         {a['title'][:60]}")
        print(f"\n  → --dry-run 제거 후 실행하면 번역 시작")
        return

    client = Anthropic()
    system_prompt = build_system_prompt(load_glossary())
    progress = load_lc_progress()
    failed_log: list = []
    ok = fail = skip = 0

    for cat in tier_cats:
        folder_name = _lc_cat_name_to_folder(cat["name"])
        out_dir = Path(LC_OUTPUT) / folder_name
        out_dir.mkdir(parents=True, exist_ok=True)

        print(f"\n  📂 {cat['name']} → {folder_name}/")

        for article in cat["articles"]:
            h = url_hash(article["url"])
            if h in progress.get("articles", {}):
                skip += 1
                continue

            article["category_ko"] = folder_name
            article["folder"] = ""
            print(f"     📝 {article['title'][:55]}...")
            time.sleep(FETCH_DELAY)

            result = translate_article(client, article, system_prompt)

            if result["success"]:
                qa = run_qa(result["original"], result["translated"])
                filename = article.get("slug", url_to_filename(article["url"])) + ".md"
                filepath = out_dir / filename
                filepath.write_text(result["translated"], encoding="utf-8")
                print(f"        ✅ → {folder_name}/{filename}")

                if "articles" not in progress:
                    progress["articles"] = {}
                progress["articles"][h] = {
                    "url": article["url"], "title": result["title"],
                    "file": str(filepath), "qa": qa,
                    "at": datetime.now().strftime("%Y-%m-%d %H:%M"),
                    "tier": tier,
                }
                progress["translated"] = len(progress["articles"])
                save_lc_progress(progress)
                ok += 1
            else:
                err = result.get("error", "unknown")
                print(f"        ❌ 실패: {err}")
                failed_log.append({**article, "error": err})
                fail += 1

            time.sleep(DELAY)

    Path(LC_FAILED).parent.mkdir(parents=True, exist_ok=True)
    Path(LC_FAILED).write_text(json.dumps(failed_log, ensure_ascii=False, indent=2))

    print(f"\n{'='*60}")
    print(f"  LC {tier} 완료!")
    print(f"  ✅ 성공: {ok}  ❌ 실패: {fail}  ⏭️ 스킵: {skip}")
    print(f"{'='*60}\n")


# ============================================================
# CLI
# ============================================================

def main():
    parser = argparse.ArgumentParser(description="GHL Help 한글화 자동 번역기 v2.0")
    parser.add_argument("--source", default="ghl", choices=["ghl", "lc"],
                        help="번역 소스: ghl (기본) 또는 lc (Phase B2)")
    parser.add_argument("--category", "-c")
    parser.add_argument("--url", "-u")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--status", action="store_true")
    parser.add_argument("--retry-failed", action="store_true")
    parser.add_argument("--tier")
    parser.add_argument("--qa-report", action="store_true")
    args = parser.parse_args()

    if not os.environ.get("ANTHROPIC_API_KEY"):
        print("❌ ANTHROPIC_API_KEY 없음")
        sys.exit(1)

    if args.status:
        p = load_progress()
        f = load_failed()
        print(f"\n📊 GHL Help 한글화 진행 현황")
        print(f"  번역 완료: {p.get('translated', 0)}/1,899")
        if f: print(f"  실패: {len(f)}개")
        # 카테고리별
        cats = {}
        for a in p.get("articles", {}).values():
            fp = a.get("file", "")
            cat = fp.split("/help-ko/")[-1].split("/")[0] if "/help-ko/" in fp else "기타"
            cats[cat] = cats.get(cat, 0) + 1
        if cats:
            print(f"\n  카테고리별:")
            for c, n in sorted(cats.items()):
                print(f"    {c}: {n}개")
        return

    if args.qa_report:
        generate_qa_report()
        return

    if args.retry_failed:
        failed = load_failed()
        if not failed:
            print("✅ 실패 항목 없음"); return
        print(f"🔄 {len(failed)}개 재시도...")
        client = Anthropic()
        sp = build_system_prompt(load_glossary())
        new_failed = []
        for item in failed:
            r = translate_article(client, item, sp)
            if not r["success"]: new_failed.append(item)
            time.sleep(DELAY)
        save_failed(new_failed)
        print(f"  ✅ {len(failed)-len(new_failed)}개 복구")
        return

    if args.url:
        client = Anthropic()
        sp = build_system_prompt(load_glossary())
        r = translate_article(client, {"url": args.url, "category_ko": "기타", "folder": ""}, sp)
        if r["success"]: print(r["translated"])
        else: print(f"❌ {r.get('error')}")
        return

    # ── LC 소스 분기 ──
    if args.source == "lc":
        tier = args.tier or "LC-1"
        if tier not in ("LC-1", "LC-2", "LC-3"):
            print(f"❌ LC tier는 LC-1 / LC-2 / LC-3 중 하나여야 합니다.")
            return
        process_lc_tier(tier, dry_run=args.dry_run)
        return

    if args.category:
        process_category(args.category, dry_run=args.dry_run)
        return

    # GHL Tier 전체
    tier = int(args.tier) if args.tier else 1
    cats = [k for k, v in CATEGORIES.items() if v.get("tier") == tier]
    if not cats:
        print(f"❌ Tier {tier} 없음"); return
    print(f"\n🚀 Tier {tier} 전체 번역 ({len(cats)}개 카테고리)\n")
    for c in cats:
        process_category(c, dry_run=args.dry_run)
    print(f"\n🎉 Tier {tier} 완료!")


if __name__ == "__main__":
    main()
