# Wiki Health Score

The score is optional and intentionally transparent.

## Suggested dimensions

| Dimension | Example calculation |
|---|---|
| Source coverage | processed sources with valid source pages / expected processable sources |
| Provenance coverage | material claims with source refs / sampled material claims |
| Link integrity | 1 - broken links / internal links |
| Duplication | 1 - duplicate clusters / canonical pages, normalized |
| Contradiction hygiene | contradiction records with status/evidence / material contradictions found |
| Freshness | non-stale reviewed pages / freshness-sensitive pages |
| Orphan rate | 1 - orphan canonical pages / canonical pages |

Default weights live in `llmwiki.config.yaml`.

## Rules

- Show each component with the total.
- Treat unknown/unmeasurable dimensions as `N/A`, not 100%.
- Do not compare scores across unrelated wikis unless configs are aligned.
- Never optimize the wiki solely to increase the score.
