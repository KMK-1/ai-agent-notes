# LLMWiki Best Practices

A vendor-neutral operating framework for **agent-maintained, compounding Markdown knowledge bases**. It is designed to work with Codex, Claude Code, Cursor, VS Code agents, MCP-based clients, and multi-agent runtimes without making the core methodology depend on any one tool.

## What v1.1 adds

- Agent Skills-compatible frontmatter on every canonical skill
- Native Claude Code project adapters in `.claude/skills/`
- Thin `CLAUDE.md` alongside the vendor-neutral `AGENTS.md`
- Direct Claude Code invocations such as `/llmwiki-ingest` and `/llmwiki-lint`
- Runtime compatibility/installation docs
- Structural validation script (`python scripts/validate.py`)
- One source of truth so Claude/Codex adapters cannot silently diverge

## What v1.0 added

- Incremental ingest with source fingerprints
- First-class source manifest and source pages
- Changed-source impact propagation instead of blind rebuilds
- Page freshness/staleness lifecycle
- Query workflow that prefers compiled knowledge over raw retrieval
- Reusable filed answers
- Dedicated research and multi-agent reconciliation skills
- Transparent wiki health score
- Thin `AGENTS.md` bootstrap with operation-specific skills

## Mental model

```text
Human/System Curated
sources/
   │
   │ fingerprint + ingest
   ▼
Agent Maintained
wiki/sources/ ──► entities / concepts / topics / decisions / issues
                         │
                         ├──► synthesis
                         ├──► contradictions
                         └──► reusable answers
   │
   ▼
Generated Operational State
manifest + index + operation log + lint/health

Human + Agent Co-maintained
wiki-purpose.md + wiki-schema.md + llmwiki.config.yaml
```

The important property is **compounding**: a source is not merely summarized. It updates, qualifies, links, contradicts, or strengthens knowledge that already exists.

## Repository layout

```text
.
├── AGENTS.md                     # vendor-neutral runtime bootstrap
├── CLAUDE.md                     # thin Claude Code adapter
├── .claude/skills/               # Claude Code skill discovery adapters
├── wiki-purpose.md               # stable mission/optimization target
├── wiki-schema.md                # canonical data/claim/lifecycle rules
├── llmwiki.config.example.yaml   # project-level knobs
├── skills/llmwiki/
│   ├── SKILL.md                  # operation router
│   ├── ingest/SKILL.md
│   ├── query/SKILL.md
│   ├── lint/SKILL.md
│   ├── research/SKILL.md
│   └── reconcile/SKILL.md
├── templates/
│   ├── source.md
│   ├── entity.md
│   ├── concept.md
│   ├── topic.md
│   ├── decision.md
│   ├── issue.md
│   ├── synthesis.md
│   ├── contradiction.md
│   ├── answer.md
│   └── handoff.md
├── manifest/sources.yaml
├── log/operations.md
├── docs/
│   ├── METHODOLOGY.md
│   ├── HEALTH-SCORE.md
│   └── REFERENCE-PATTERNS.md
├── sources/                      # immutable evidence by default
├── wiki/
│   ├── sources/
│   ├── entities/
│   ├── concepts/
│   ├── topics/
│   ├── decisions/
│   ├── issues/
│   ├── synthesis/
│   └── answers/
├── contradictions/
├── index/
└── examples/
```

## Quick start

```bash
cp llmwiki.config.example.yaml llmwiki.config.yaml
# add evidence under sources/
```

Then tell your agent:

> Ingest new or changed sources according to AGENTS.md.

On future runs the agent should fingerprint sources, skip unchanged material, update only impacted canonical knowledge, refresh affected synthesis, and lint the touched neighborhood.

## Five core operations

### Ingest
Compile new/changed evidence into canonical knowledge. Search before create, propagate only material changes, and preserve provenance.

### Query
Search compiled wiki pages first. Expand raw evidence only where confidence, freshness, or dispute requires it.

### Lint
Check structure, provenance, source coverage, duplication, contradictions, and freshness. Optionally report a transparent health score.

### Research
Fill an explicit recorded knowledge gap with new external evidence, then ingest it normally.

### Reconcile
Merge parallel-worker output into a single canonical state. One reconciler owns naming, deduplication, final synthesis, manifest/index update, and lint.

## Why the bootstrap is small

Agent runtimes often auto-load root instruction files. Putting the full methodology in `AGENTS.md` wastes context on every session. v1.0 keeps root instructions small and moves detailed operation procedures into skills that are loaded only when needed.

## Generic by design

The framework does not define automotive, finance, software, academic, or business-specific object types in the core. Domain preferences belong in `llmwiki.config.yaml`, ontology config, or example folders.

## Compatibility

This framework is intentionally implementation-neutral. You can layer on:

- plain filesystem search
- BM25/hybrid/vector search
- Obsidian
- MCP servers
- VS Code extensions
- custom CLI tooling
- multi-agent orchestration

without changing the knowledge-management invariants.

## Reference implementations

See `docs/REFERENCE-PATTERNS.md` for the design patterns adapted from Microsoft `llmwiki` and community LLM Wiki implementations.

## Validate

```bash
python scripts/validate.py
```

See `docs/COMPATIBILITY.md` and `docs/INSTALLATION.md` for Claude Code, Codex, Agent Skills-compatible clients, and multi-agent runtimes.
