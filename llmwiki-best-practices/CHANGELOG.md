# Changelog

## 1.1.0 — 2026-09-10

- Made every canonical operation playbook Agent Skills-compatible with YAML frontmatter.
- Added a thin `CLAUDE.md` adapter while keeping `AGENTS.md` as the vendor-neutral bootstrap.
- Added project-local Claude Code skill adapters under `.claude/skills/` with direct `/llmwiki-*` invocation names.
- Added runtime compatibility and installation guidance.
- Added a zero-dependency validation script for required files, skill metadata, adapter targets, and health-score weights.
- Preserved one source of truth under `skills/llmwiki/` to avoid Claude/Codex instruction drift.
