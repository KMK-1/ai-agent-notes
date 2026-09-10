---
name: llmwiki-reconcile
description: Reconciles parallel-agent LLMWiki changes into one canonical state, resolving naming collisions, duplicates, contradictions, and stale synthesis. Use after multi-agent or concurrent wiki work.
---
# LLMWiki Reconcile

## Goal
Integrate parallel-agent output into one coherent canonical wiki state.

## Procedure
1. Collect changed files, proposed new canonical pages, unresolved questions, and contradictions from workers.
2. Detect naming/alias collisions and duplicate proposed pages.
3. Choose canonical identity before merging prose.
4. Merge non-conflicting facts while preserving provenance from every worker/source.
5. Convert incompatible claims into contradiction records rather than majority-voting them away.
6. Refresh only synthesis pages affected by merged knowledge.
7. Update manifest/index/log once after reconciliation.
8. Run full lint on touched neighborhoods.

## Worker contract
Workers return sources processed, files changed/proposed, canonical page candidates, confidence/uncertainty, contradictions, and unresolved questions. Workers should not independently finalize global index, health score, or canonical naming when overlap is possible.
