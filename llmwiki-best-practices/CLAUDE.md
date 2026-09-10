# Claude Code bootstrap for LLMWiki

This file is a thin Claude Code adapter. The canonical methodology is vendor-neutral and lives in `AGENTS.md`, `wiki-purpose.md`, `wiki-schema.md`, `llmwiki.config.yaml`, and `skills/llmwiki/`.

When working on this repository:

1. Read `AGENTS.md` first.
2. Use the project skills under `.claude/skills/` when the task matches them.
3. Treat `.claude/skills/*/SKILL.md` as adapters only; the source-of-truth playbooks are under `skills/llmwiki/`.
4. Do not fork or rewrite the methodology specifically for Claude unless a Claude-only runtime feature requires an adapter.
5. For consequential or destructive shared-system actions, follow the host/user confirmation policy; ordinary local wiki edits should proceed when requested.

Common direct invocations in Claude Code:

- `/llmwiki`
- `/llmwiki-ingest`
- `/llmwiki-query`
- `/llmwiki-lint`
- `/llmwiki-research`
- `/llmwiki-reconcile`
