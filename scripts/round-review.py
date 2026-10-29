#!/usr/bin/env python3
"""
번역 라운드 PR 적대적 리뷰 — base 와 head 의 참조본(_source/hc-ko-app-reference.json)을 비교해
이번 PR 에서 새로 들어오거나 바뀐 ko 만 뽑아 ① 규칙 검사 ② Claude 검수(번역 이력 미제공, 원문+한국어만) 를 돌린다.

    python3 scripts/round-review.py --base <ref.json@base> --head <ref.json@head> --out review.md [--max 600]

규칙 검사(결정적, 전건):
  R1 플레이스홀더 보존   {name} %s %n% {{x}} [[x]] @:  — 원문에 있는 토큰이 번역에 없거나 바뀌면
  R2 DNT 토큰 보존       DELETE CONFIRM REMOVE CANCEL TRANSFER DISABLE RESET
  R3 브랜드 노출         HighLevel / GoHighLevel / LeadConnector / GHL
  R4 글로서리 변형       data/glossary.ko.json 의 변형 표기 잔존
  R5 영문 잔존           한글이 전혀 없는 번역(의도적 원문 유지 제외: URL·숫자·브랜드)
  R6 조사 결합           플레이스홀더 뒤 '을/를/이/가/은/는' 직결 — '{n}을' 형태 (단위 명사 권장)
  R7 길이 비율           ko 가 en 의 3배 초과 또는 0.2배 미만
Claude 검수(표본·상한 --max): 오역·의미 누락·존댓말(합쇼체)·어색한 직역을 심각도와 함께 JSON 으로. ANTHROPIC_API_KEY 없으면 규칙 검사만.
출력: 마크다운 (PR 코멘트용) + exit 0 (차단하지 않는다 — 판단은 사람이)
"""
import argparse
import json
import os
import re
import sys

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
DNT = ['DELETE', 'CONFIRM', 'REMOVE', 'CANCEL', 'TRANSFER', 'DISABLE', 'RESET']
PH_RE = re.compile(r'\{\{[^}]+\}\}|\{[^}]+\}|%[A-Za-z_]+%|%[sd]|\[\[[^\]]+\]\]|@:[A-Za-z_.]+')
BRAND_RE = re.compile(r'\b(Go)?HighLevel\b|\bLeadConnector\b|\bGHL\b', re.I)
HANGUL = re.compile('[가-힣]')
JOSA_RE = re.compile(r'\}(을|를|이|가|은|는)(\s|$)')


def load_pairs(path):
    d = json.load(open(path, encoding='utf-8'))
    return {k: (v['en'], v['ko']) for k, v in d.items() if isinstance(v, dict) and isinstance(v.get('en'), str) and isinstance(v.get('ko'), str)}


def rules(key, en, ko, gl):
    out = []
    pe = sorted(PH_RE.findall(en)); pk = sorted(PH_RE.findall(ko))
    if pe != pk:
        out.append(('R1', f'플레이스홀더 불일치 {pe} → {pk}'))
    for t in DNT:
        if re.search(r'(^|[\s\'"“‘])' + t + r'($|[\s\'"”’.,!?])', en) and t not in ko:
            out.append(('R2', f'DNT {t} 누락'))
    if BRAND_RE.search(ko):
        out.append(('R3', '브랜드 노출'))
    for r in gl:
        if r['rx'].search(en) and r['ko'] not in ko:
            for v in r['variants']:
                if v in ko:
                    out.append(('R4', f"글로서리 변형 '{v}' (정규 '{r['ko']}')")); break
    if not HANGUL.search(ko) and re.search(r'[A-Za-z]{3,}', ko) and not re.match(r'^(https?://|[\d\s.,%$]+$)', ko.strip()) and not (en.strip() == ko.strip() and len(ko.strip()) <= 16):
        out.append(('R5', '영문 그대로'))
    if JOSA_RE.search(ko):
        out.append(('R6', '플레이스홀더 뒤 조사 직결'))
    if len(en) > 24 and (len(ko) > 3 * len(en) or len(ko) < 0.15 * len(en)):
        out.append(('R7', f'길이 비율 {len(ko)}/{len(en)}'))
    return out


def load_glossary():
    g = json.load(open(os.path.join(ROOT, 'data/glossary.ko.json'), encoding='utf-8'))
    out = []
    for t in g['objects']:
        if t.get('decided') and t.get('variants'):
            out.append({'ko': t['ko'], 'variants': t['variants'], 'rx': re.compile(r'\b' + re.escape(t['en']) + r'(s|es|ies)?\b', re.I)})
    return out


def claude_review(items, max_items):
    key = os.environ.get('ANTHROPIC_API_KEY')
    if not key or not items:
        return [], 'ANTHROPIC_API_KEY 없음 — 규칙 검사만' if not key else ''
    try:
        import anthropic
    except ImportError:
        return [], 'anthropic 패키지 없음'
    client = anthropic.Anthropic(api_key=key)
    model = os.environ.get('REVIEW_MODEL', 'claude-sonnet-5')
    found = []
    batch = 60
    sample = items[:max_items]
    for i in range(0, len(sample), batch):
        chunk = sample[i:i + batch]
        lines = '\n'.join(f'{n + 1}. [{k}] EN: {en}\n   KO: {ko}' for n, (k, en, ko) in enumerate(chunk))
        prompt = f"""당신은 한국 SaaS UI 한국어화 검수자입니다. 아래는 GoHighLevel 기반 플랫폼 '하이퍼클래스'(지식창업 운영자 대상)의 UI 문자열 영→한 번역입니다.
규칙: 합쇼체, 객체명은 글로서리 고정(퍼널·파이프라인·워크플로우·연락처·기회·폼·상품·스토어·캘린더·예약·태그·커스텀 필드·관리형 에이전트 등), 버튼은 짧은 동사, 플레이스홀더·DNT 토큰(DELETE 등)·브랜드명 제거 규칙은 이미 기계 검사됨.
당신의 일: **오역·의미 누락/추가·반대 의미·어색한 직역·존댓말 불일치·UI 맥락상 부자연스러운 표현**만 찾으세요. 사소한 취향 차이는 보고하지 마세요.
출력은 JSON 배열만: [{{"n": 번호, "severity": "high|medium|low", "issue": "문제 한 줄", "suggest": "제안 번역"}}]. 문제가 없으면 [].

{lines}"""
        try:
            resp = client.messages.create(model=model, max_tokens=4000, messages=[{'role': 'user', 'content': prompt}])
            txt = ''.join(getattr(b, 'text', '') for b in resp.content if getattr(b, 'type', '') == 'text').strip()
            m = re.search(r'\[.*\]', txt, re.S)
            arr = json.loads(m.group(0)) if m else []
            for it in arr:
                n = int(it.get('n', 0)) - 1
                if 0 <= n < len(chunk):
                    k, en, ko = chunk[n]
                    found.append({'key': k, 'en': en, 'ko': ko, 'severity': it.get('severity', 'low'), 'issue': it.get('issue', ''), 'suggest': it.get('suggest', '')})
        except Exception as e:
            return found, f'Claude 검수 일부 실패: {e}'
    return found, ''


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--base', required=True); ap.add_argument('--head', required=True)
    ap.add_argument('--out', required=True); ap.add_argument('--max', type=int, default=600)
    a = ap.parse_args()
    base = load_pairs(a.base); head = load_pairs(a.head)
    changed = [(k, en, ko) for k, (en, ko) in head.items() if base.get(k) != (en, ko)]
    gl = load_glossary()
    rule_hits = []
    for k, en, ko in changed:
        for code, msg in rules(k, en, ko, gl):
            rule_hits.append((code, k, en, ko, msg))
    ai, note = claude_review(changed, a.max)
    sev_order = {'high': 0, 'medium': 1, 'low': 2}
    ai.sort(key=lambda x: sev_order.get(x['severity'], 3))

    md = [f"## 🔍 번역 라운드 자동 리뷰 — 변경 {len(changed)}건", '']
    md.append(f"규칙 검사 지적 **{len(rule_hits)}건** · Claude 검수 지적 **{len(ai)}건** (high {sum(1 for x in ai if x['severity']=='high')} / medium {sum(1 for x in ai if x['severity']=='medium')} / low {sum(1 for x in ai if x['severity']=='low')})" + (f" · {note}" if note else ''))
    md.append('')
    if rule_hits:
        md += ['### 규칙 검사 (전건)', '', '| 코드 | 키 | EN | KO | 지적 |', '|---|---|---|---|---|']
        for code, k, en, ko, msg in rule_hits[:150]:
            md.append(f"| {code} | `{k}` | {en[:70].replace('|','\\|')} | {ko[:70].replace('|','\\|')} | {msg.replace('|','\\|')} |")
        if len(rule_hits) > 150: md.append(f'… 외 {len(rule_hits) - 150}건')
        md.append('')
    if ai:
        md += ['### Claude 검수 (심각도순)', '', '| 심각도 | 키 | EN | KO | 문제 | 제안 |', '|---|---|---|---|---|---|']
        for x in ai[:200]:
            md.append(f"| {x['severity']} | `{x['key']}` | {x['en'][:60].replace('|','\\|')} | {x['ko'][:60].replace('|','\\|')} | {x['issue'].replace('|','\\|')} | {x['suggest'].replace('|','\\|')} |")
        md.append('')
    if not rule_hits and not ai:
        md.append('✅ 지적 사항 없음')
    md.append('')
    md.append('> 수정은 `_source/hc-ko-app.pretty.json` 에서 → `split-ko-app.py` → 커밋. 이 리뷰는 차단하지 않습니다.')
    open(a.out, 'w', encoding='utf-8').write('\n'.join(md) + '\n')
    print('\n'.join(md[:6]))
    return 0


if __name__ == '__main__':
    sys.exit(main())
