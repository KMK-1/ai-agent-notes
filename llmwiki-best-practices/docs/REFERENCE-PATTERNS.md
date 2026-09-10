# Reference Patterns

Patterns used as design inspiration for this framework:

- Microsoft `llmwiki`: human-owned raw sources, LLM-owned wiki, co-evolved `AGENTS.md` schema; incremental ingest; status/coverage; MCP read/write surface.
- jackwener `llm-wiki`: small `AGENTS.md` / `CLAUDE.md` bootstrap files plus operation-specific skills loaded on demand.
- luotwo `llm-wiki`: ingest → query → lint operating loop; source-by-source integration; filing valuable answers back into the wiki; stale/orphan/gap review.
- cobusgreyling `llm-wiki`: source summary pages, evolving synthesis, contradiction ledger, answers, CLI lint/search/ingest-status.

This repository intentionally re-expresses those ideas as a vendor-neutral methodology rather than copying one implementation.
