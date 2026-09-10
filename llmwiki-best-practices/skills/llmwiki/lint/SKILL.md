---
name: llmwiki-lint
description: Audits and improves LLMWiki integrity, provenance, freshness, link health, duplication, contradictions, and orphan pages. Use before completion, after large ingests, or when wiki quality is in doubt.
---
# LLMWiki Lint

## Goal
Measure and improve wiki health without rewriting content merely for style.

## Checks
Structural: broken links, orphan canonical pages, invalid/missing required front matter, naming collisions, duplicate/near-duplicate pages.

Evidence: material claims without provenance, missing source records, manifest/source-page mismatch, suspicious processed sources with no influenced pages.

Freshness: expired `review_after`, changed source fingerprints, synthesis older than updated dependencies, superseded pages still treated as active.

Semantics: unresolved contradictions without status, inconsistent aliases, decisions without date/status, issues without state where required, high-confidence claims resting only on weak evidence.

## Severity
- `error`: integrity failure; blocks a clean completion when configured.
- `warning`: meaningful quality risk.
- `info`: improvement opportunity.

## Health score
When enabled, report component scores and the weighted total. Never present a single health score without its components; it is an operational dashboard, not ground truth.

Fix deterministic errors automatically only when identity and meaning are unambiguous.
