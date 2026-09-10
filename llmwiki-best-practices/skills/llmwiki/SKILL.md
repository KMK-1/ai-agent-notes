---
name: llmwiki
description: Routes LLMWiki knowledge-base work to the smallest applicable operation. Use when the user asks to ingest, query, lint, research, reconcile, or maintain an LLM-managed wiki.
---
# LLMWiki Skill Router

Use this skill to select the smallest operation playbook needed. Keep the core methodology vendor-neutral.

| Intent | Load next |
|---|---|
| Add or refresh sources | `ingest/SKILL.md` |
| Answer from the wiki | `query/SKILL.md` |
| Find/fix wiki quality problems | `lint/SKILL.md` |
| Fill an explicit knowledge gap with new external evidence | `research/SKILL.md` |
| Merge parallel-agent work, resolve duplicates, refresh synthesis | `reconcile/SKILL.md` |

Before a write operation, read `../../../wiki-purpose.md`, `../../../wiki-schema.md`, and the active `llmwiki.config.yaml` if present.

Core rule: do not load every operation playbook by default. Progressive disclosure keeps context focused.
