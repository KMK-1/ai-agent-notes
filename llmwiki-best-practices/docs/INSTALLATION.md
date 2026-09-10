# Installation and Adoption

## Option A — Use this repository as the wiki

Copy `llmwiki.config.example.yaml` to `llmwiki.config.yaml`, edit the purpose/schema/config, add sources, then ask the agent to ingest them.

## Option B — Add the framework to an existing project

Copy these files/directories into the project root:

```text
AGENTS.md
CLAUDE.md                 # needed for Claude Code adapter behavior
wiki-purpose.md
wiki-schema.md
llmwiki.config.example.yaml
skills/llmwiki/
.claude/skills/           # project adapters for Claude Code
templates/
manifest/
log/
wiki/
contradictions/
index/
```

Keep the framework in a dedicated subdirectory if the host project already owns `AGENTS.md` or `CLAUDE.md`; then add one short instruction in the host bootstrap pointing to the LLMWiki framework bootstrap.

## Claude Code

Project-local skills are included in `.claude/skills/`. Open Claude Code at the project/repository root and invoke `/llmwiki-ingest`, `/llmwiki-query`, `/llmwiki-lint`, `/llmwiki-research`, or `/llmwiki-reconcile`, or describe the task naturally and let Claude select the relevant skill.

## Codex

Open Codex in the repository and ask it to follow `AGENTS.md`. Example: `Ingest all new or changed sources according to AGENTS.md.`

## Avoid drift

Edit the canonical playbooks only under `skills/llmwiki/`. Claude adapter files should stay thin and only delegate to the canonical playbooks.
