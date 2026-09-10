# LLMWiki Agent Bootstrap

This repository is an LLM-managed knowledge base. Keep this file intentionally short so it can be auto-loaded by Codex, Claude Code, Cursor, and other agents without wasting context.

## Read first

1. `wiki-purpose.md` — what this wiki is for and what matters most.
2. `wiki-schema.md` — page types, metadata, naming, lifecycle, and evidence rules.
3. `llmwiki.config.yaml` — project-specific preferences and thresholds.
4. Load only the operation skill needed for the task:
   - ingest → `skills/llmwiki/ingest/SKILL.md`
   - query → `skills/llmwiki/query/SKILL.md`
   - lint → `skills/llmwiki/lint/SKILL.md`
   - research → `skills/llmwiki/research/SKILL.md`
   - reconcile → `skills/llmwiki/reconcile/SKILL.md`

## Non-negotiable rules

- `sources/` is evidence. Treat it as immutable unless the human explicitly asks to replace a source.
- Search before creating any canonical wiki page.
- Prefer updating existing knowledge to creating duplicates.
- Every material claim must retain provenance.
- Distinguish sourced fact, interpretation, hypothesis, recommendation, and decision.
- Never hide a meaningful contradiction; record and link it.
- Newer evidence does not automatically mean truer evidence. Consider authority, scope, date, and confidence.
- Keep domain-specific ontology out of this file; use config/schema instead.
- Make the smallest coherent set of changes that fully integrates new knowledge.
- Before finishing a write operation, update the manifest/log as applicable and run lint.

## Default write path

`source → source record → canonical pages → links → synthesis → contradiction/staleness checks → manifest/index → lint`

## Multi-agent rule

Workers may extract and propose changes in parallel, but canonical naming, deduplication, synthesis refresh, and final lint belong to a single reconciler/reviewer pass.
