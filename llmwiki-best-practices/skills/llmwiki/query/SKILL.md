---
name: llmwiki-query
description: Answers questions from compiled LLMWiki knowledge first and expands to raw evidence only when needed for confidence, freshness, or disputes. Use for lookups, comparisons, timelines, explanations, and decision support.
---
# LLMWiki Query

## Goal
Answer from compiled wiki knowledge first, then expand evidence only as needed.

## Procedure
1. Classify the information need internally: entity lookup, comparison, timeline, explanation, decision support, or open question.
2. Search index/titles/summaries first; expand the few most relevant canonical pages.
3. Follow backlinks/source refs for claims that materially affect the answer.
4. Surface contradictions and stale status when relevant.
5. Synthesize rather than concatenate page summaries.
6. Cite/link canonical pages and evidence according to the host environment.
7. If the answer creates durable reusable knowledge, file it under `wiki/answers/` only when it adds value beyond existing pages and policy allows it.
8. If evidence is insufficient, record a gap rather than inventing an answer.

## Retrieval budget
Start narrow and broaden only when confidence or coverage is insufficient. The wiki is compiled knowledge; raw sources are fallback evidence, not the first stop for every question.
