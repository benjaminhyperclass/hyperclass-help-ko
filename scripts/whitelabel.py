#!/usr/bin/env python3
"""
Hyperclass 화이트라벨 브랜딩 교체 & 검증 모듈

기존 문서 일괄 교체는 2026-06에 완료됨.
이 모듈은 신규/수정 번역 시에만 적용.

사용법:
    from whitelabel import whitelabel_fix, whitelabel_check, WHITELABEL_INSTRUCTION
"""

import re
import sys

WHITELABEL_INSTRUCTION = """
## 화이트라벨 브랜딩 규칙 (필수)

번역 시 다음 브랜딩 교체를 반드시 적용하세요:

1. "GoHighLevel" → "하이퍼클래스" (Hyperclass)
2. "HighLevel" → "하이퍼클래스" (Hyperclass)
3. "GHL" (단독 사용 시) → "하이퍼클래스"
4. "LeadConnector" → "하이퍼클래스"
5. "Powered by HighLevel" → 삭제
6. "HighLevel Support" → "하이퍼클래스 고객지원"
7. "HighLevel University" → "하이퍼클래스 아카데미"

URL 교체:
- help.gohighlevel.com → hyperclass.gitbook.io/hyperclass-docs
- help.leadconnectorhq.com → hyperclass.gitbook.io/hyperclass-docs
- help.hyperclass.ai → hyperclass.gitbook.io/hyperclass-docs
- www.gohighlevel.com → hyperclass.ai

교체 금지:
- API endpoint URL (services.leadconnectorhq.com, rest.gohighlevel.com, api.gohighlevel.com)
- 마켓플레이스 URL (marketplace.gohighlevel.com)
- 코드 블록 내 기술 참조
- Webhook URL
"""

PROTECTED_URL_PATTERNS = [
    r'services\.leadconnectorhq\.com',
    r'rest\.gohighlevel\.com',
    r'api\.gohighlevel\.com',
    r'marketplace\.gohighlevel\.com',
    r'app\.gohighlevel\.com',
    r'msgsndr\.com',
]


def load_exceptions() -> list:
    """검사·치환에서 제외할 값 목록 (data/whitelabel-exceptions.json).

    사용자 입력 예시 URL처럼 브랜드 도메인을 바꾸면 안내가 틀어지는 경우를 등재한다.
    """
    import json, os
    p = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                     '..', 'data', 'whitelabel-exceptions.json')
    try:
        with open(os.path.normpath(p), encoding='utf-8') as f:
            return [x['값'] for x in json.load(f).get('항목', [])]
    except Exception:
        return []


_EXCEPTIONS = load_exceptions()


def is_exception(text: str) -> bool:
    return text.strip() in _EXCEPTIONS


def _protect_exceptions(text: str, save) -> str:
    for e in _EXCEPTIONS:
        if e in text:
            text = text.replace(e, save(type('M', (), {'group': lambda s, e=e: e})()))
    return text


def whitelabel_fix(text: str) -> str:
    """코드 블록과 API URL을 보호하면서 브랜딩 자동 교체"""
    protected = []

    def save(match):
        protected.append(match.group())
        return f'__P{len(protected)-1}__'

    # 예외 등재 문자열 보호 (data/whitelabel-exceptions.json)
    text = _protect_exceptions(text, save)

    # 코드 블록 보호
    result = re.sub(r'```.*?```', save, text, flags=re.DOTALL)
    result = re.sub(r'`[^`]+`', save, result)
    # API URL 보호
    for p in PROTECTED_URL_PATTERNS:
        result = re.sub(p, save, result)

    # 특수 문구 우선 교체
    result = result.replace('Powered by GoHighLevel', '')
    result = result.replace('Powered by HighLevel', '')
    result = result.replace('HighLevel Support Portal', '하이퍼클래스 고객지원')
    result = result.replace('HighLevel Support', '하이퍼클래스 고객지원')
    result = result.replace('HighLevel University', '하이퍼클래스 아카데미')
    result = result.replace('HighLevel Ideas', '하이퍼클래스 아이디어')

    # 브랜드명 교체
    result = result.replace('GoHighLevel', '하이퍼클래스')
    result = result.replace('HighLevel', '하이퍼클래스')
    # 대소문자 변형 — GHL UI에 'Highlevel'(소문자 l) 표기가 섞여 있어
    # 'HighLevel'만 치환하던 종전 규칙이 이를 놓쳤다 (2026-08-12).
    # 경계는 \b가 아니라 ASCII 문자 전후로 판정한다 — 한글도 단어 문자라
    # '\bHighlevel\b'는 'Highlevel의'처럼 한글이 붙으면 매칭에 실패한다.
    result = re.sub(r'(?<![A-Za-z])Highlevel(?![A-Za-z])', '하이퍼클래스', result)
    result = re.sub(r'(?<![A-Za-z])highlevel(?![A-Za-z])', '하이퍼클래스', result)
    result = re.sub(r'(?<![A-Za-z])GHL(?![A-Za-z])', '하이퍼클래스', result)
    result = result.replace('LeadConnector', '하이퍼클래스')

    # URL 교체
    result = result.replace('help.gohighlevel.com', 'hyperclass.gitbook.io/hyperclass-docs')
    result = result.replace('help.leadconnectorhq.com', 'hyperclass.gitbook.io/hyperclass-docs')
    result = result.replace('help.hyperclass.ai', 'hyperclass.gitbook.io/hyperclass-docs')
    result = result.replace('www.gohighlevel.com', 'hyperclass.ai')
    # 보호 목록·예외에 없는 나머지 *.gohighlevel.com 서브도메인 (2026-08-12)
    result = re.sub(r'\b[\w-]+\.gohighlevel\.com\b', 'hyperclass.ai', result)

    # 보호 블록 복원
    for i, block in enumerate(protected):
        result = result.replace(f'__P{i}__', block)

    return result


def whitelabel_check(text: str) -> list:
    """번역 텍스트에서 화이트라벨 위반 검사 (코드 블록 제외)"""
    violations = []
    clean = re.sub(r'```.*?```', '', text, flags=re.DOTALL)
    clean = re.sub(r'`[^`]+`', '', clean)
    for p in PROTECTED_URL_PATTERNS:
        clean = re.sub(p, '', clean)

    checks = [
        (r'GoHighLevel',                 'GoHighLevel 잔존'),
        (r'(?<![a-zA-Z])HighLevel(?![a-zA-Z])', 'HighLevel 잔존'),
        (r'(?<![a-zA-Z])GHL(?![a-zA-Z])',       'GHL 잔존'),
        (r'(?<![a-zA-Z])LeadConnector(?![a-zA-Z])', 'LeadConnector 잔존'),
        (r'help\.gohighlevel\.com',      'GHL Help URL 잔존'),
        (r'help\.leadconnectorhq\.com',  'LC Help URL 잔존'),
        (r'help\.hyperclass\.ai',        '이전 Help URL 잔존'),
        (r'www\.gohighlevel\.com',       'GHL 메인 URL 잔존'),
    ]
    for pattern, msg in checks:
        for m in re.finditer(pattern, clean, re.IGNORECASE):
            violations.append({
                'type': msg,
                'context': clean[max(0, m.start()-30):m.end()+30].strip()
            })
    return violations


if __name__ == '__main__':
    # CLI: python whitelabel.py <file.md>
    if len(sys.argv) < 2:
        print("사용법: python whitelabel.py <file.md>")
        sys.exit(0)
    import pathlib
    f = pathlib.Path(sys.argv[1])
    if not f.exists():
        print(f"파일 없음: {f}")
        sys.exit(1)
    text = f.read_text(encoding='utf-8')
    violations = whitelabel_check(text)
    if violations:
        print(f"⚠️  위반 {len(violations)}건:")
        for v in violations:
            print(f"  [{v['type']}] ...{v['context']}...")
    else:
        print("✅ 화이트라벨 위반 없음")
