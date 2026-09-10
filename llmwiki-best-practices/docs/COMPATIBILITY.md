# Runtime Compatibility

LLMWiki Best Practices is built around a vendor-neutral core plus thin runtime adapters.

## Canonical core

The authoritative behavior lives in:

- `AGENTS.md` — short repository bootstrap
- `wiki-purpose.md` — project mission
- `wiki-schema.md` — knowledge and provenance rules
- `llmwiki.config.yaml` — project-specific policy
- `skills/llmwiki/` — Agent Skills-compatible operation playbooks

Do not maintain separate Codex and Claude copies of the methodology.

## Claude Code

Claude Code discovers project skills in `.claude/skills/<skill-name>/SKILL.md`. This repository therefore ships thin adapters for `llmwiki`, `llmwiki-ingest`, `llmwiki-query`, `llmwiki-lint`, `llmwiki-research`, and `llmwiki-reconcile`. Each adapter delegates to the canonical playbook under `skills/llmwiki/`.

`CLAUDE.md` is intentionally short and only explains how Claude should enter the shared framework. In Claude Code, each adapter can also be invoked directly as `/llmwiki-*`.

## Codex and AGENTS-aware agents

`AGENTS.md` is the primary bootstrap. The agent reads only the operation skill needed for the current task. No Codex-only knowledge rules are required.

## Other Agent Skills-compatible runtimes

The files under `skills/llmwiki/` follow the portable `SKILL.md` pattern with `name` and `description` frontmatter. Runtimes that support Agent Skills can point directly at these folders or vendor/copy them into their native skill discovery directory.

## Multi-agent runtimes such as Herdr

Workers should use the same operation playbooks. Parallel workers may extract evidence and propose updates, but a single reconciler should own canonical naming, deduplication, contradiction consolidation, synthesis refresh, final manifest/index update, and lint.

## Design principle

Adapters may describe **where** a runtime discovers instructions or **how** it invokes them. They must not redefine **what** LLMWiki considers evidence, canonical knowledge, provenance, freshness, contradiction handling, or completion.
