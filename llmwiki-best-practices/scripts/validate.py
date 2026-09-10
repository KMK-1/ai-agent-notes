#!/usr/bin/env python3
from pathlib import Path
import re, sys

ROOT = Path(__file__).resolve().parents[1]
ERRORS=[]

required = [
    'AGENTS.md','CLAUDE.md','wiki-purpose.md','wiki-schema.md','llmwiki.config.example.yaml',
    'skills/llmwiki/SKILL.md','skills/llmwiki/ingest/SKILL.md','skills/llmwiki/query/SKILL.md',
    'skills/llmwiki/lint/SKILL.md','skills/llmwiki/research/SKILL.md','skills/llmwiki/reconcile/SKILL.md',
]
for rel in required:
    if not (ROOT/rel).is_file(): ERRORS.append(f'missing: {rel}')

skill_files=list((ROOT/'skills').rglob('SKILL.md')) + list((ROOT/'.claude/skills').rglob('SKILL.md'))
name_re=re.compile(r'^name:\s*([a-z0-9-]+)\s*$', re.M)
desc_re=re.compile(r'^description:\s*(.+?)\s*$', re.M)
for p in skill_files:
    text=p.read_text(encoding='utf-8')
    if not text.startswith('---\n'):
        ERRORS.append(f'frontmatter missing: {p.relative_to(ROOT)}'); continue
    m=name_re.search(text); d=desc_re.search(text)
    if not m: ERRORS.append(f'name missing/invalid: {p.relative_to(ROOT)}')
    elif len(m.group(1))>64: ERRORS.append(f'name too long: {p.relative_to(ROOT)}')
    if not d or not d.group(1).strip(): ERRORS.append(f'description missing: {p.relative_to(ROOT)}')
    elif len(d.group(1))>1024: ERRORS.append(f'description too long: {p.relative_to(ROOT)}')

# Claude adapters must point at real canonical files.
for p in (ROOT/'.claude/skills').rglob('SKILL.md'):
    text=p.read_text(encoding='utf-8')
    for target in re.findall(r'`(\.\./[^`]+?SKILL\.md)`', text):
        if not (p.parent/target).resolve().is_file():
            ERRORS.append(f'broken adapter target: {p.relative_to(ROOT)} -> {target}')

# Config weight sanity without requiring PyYAML.
config=(ROOT/'llmwiki.config.example.yaml').read_text(encoding='utf-8')
weights=[]; in_weights=False
for line in config.splitlines():
    if re.match(r'^\s{4}weights:\s*$', line): in_weights=True; continue
    if in_weights:
        m=re.match(r'^\s{6}[a-z_]+:\s*(\d+)\s*$', line)
        if m: weights.append(int(m.group(1))); continue
        if line.strip() and len(line)-len(line.lstrip()) <= 4: break
if weights and sum(weights)!=100: ERRORS.append(f'health score weights sum to {sum(weights)}, expected 100')

if ERRORS:
    print('VALIDATION FAILED')
    for e in ERRORS: print('-',e)
    sys.exit(1)
print(f'OK: {len(skill_files)} skill entrypoints validated; framework structure is consistent.')
