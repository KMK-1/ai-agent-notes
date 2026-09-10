---
name: llmwiki-ingest
description: Incrementally compiles new or changed evidence into an existing LLMWiki while preserving provenance and avoiding duplicate canonical pages. Use when sources are added, changed, replaced, or need refresh.
---
# LLMWiki Ingest

## Goal
Incrementally compile new or changed evidence into the existing wiki without rebuilding unaffected knowledge.

## Procedure
1. Inventory candidate sources and read `manifest/sources.yaml` if present.
2. Fingerprint each source with a content hash when tooling permits; otherwise use a stable surrogate such as path + size + modified time.
3. Classify each source as `new`, `unchanged`, `changed`, `missing`, or `replaced`.
4. Skip unchanged sources unless the user explicitly forces refresh.
5. For each new/changed source, create or refresh its `wiki/sources/<source-id>.md` record.
6. Extract candidate entities, concepts, topics, decisions, issues, claims, dates, and unresolved questions.
7. Search aliases and canonical pages before creating anything.
8. Produce a change plan: pages to update, pages to create, contradictions/staleness to inspect.
9. Apply the smallest coherent patch.
10. Refresh affected synthesis pages only when their underlying understanding materially changes.
11. Update backlinks/indexes, source coverage, manifest fingerprint, and operation log.
12. Run lint on changed pages plus their immediate dependencies.

## Change detection
For changed sources, compare the prior source record with the current source and propagate only materially changed claims. Preserve source identity and fingerprint history when content changes in place.

## Provenance
Every source record should retain source identifier/path/URL, title/author/publisher when known, acquired/observed date, source date when known, content fingerprint, ingest status, pages influenced, and a short evidence summary.

## Completion gate
Ingest is incomplete if a materially changed source remains unclassified, affected synthesis is knowingly stale, a conflict is hidden, or the manifest says processed while the source page is missing.
