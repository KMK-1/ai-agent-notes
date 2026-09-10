# Wiki Schema

## Canonical object types

- `wiki/sources/` — one evidence record per source, including fingerprint and coverage.
- `wiki/entities/` — identifiable people, organizations, systems, products, places, components.
- `wiki/concepts/` — reusable ideas, mechanisms, methods, definitions, technologies.
- `wiki/topics/` — thematic hubs joining multiple objects.
- `wiki/decisions/` — explicit choices, approvals, rejections, commitments, policies.
- `wiki/issues/` — risks, bugs, disputes, gaps, unknowns, work items.
- `wiki/synthesis/` — current integrated understanding across multiple sources.
- `wiki/answers/` — valuable query outputs intentionally filed for reuse.
- `contradictions/` — conflict ledger that links incompatible claims.

Projects may disable object types in `llmwiki.config.yaml`.

## Required front matter

Canonical pages SHOULD use:

```yaml
---
id: stable-slug
type: entity|concept|topic|decision|issue|synthesis|source|answer
status: active
created: YYYY-MM-DD
updated: YYYY-MM-DD
aliases: []
tags: []
source_refs: []
confidence: high|medium|low
review_after: null
---
```

Use only fields that make sense for the object type. Source pages add fingerprint fields. Decisions/issues add lifecycle fields.

## Claim discipline

Where precision matters, write claims in a way that makes evidence status obvious:

- **Fact:** directly supported by cited source(s).
- **Interpretation:** synthesis of evidence.
- **Hypothesis:** plausible but not established.
- **Recommendation:** action proposed from current evidence.
- **Decision:** an actor explicitly chose something.

Do not upgrade one category into another without evidence.

## Canonical naming

- Prefer the most stable commonly used name.
- Store acronyms, old names, transliterations, and alternate spellings in aliases.
- One real-world subject should normally have one canonical page.
- Dates belong in filenames only when chronology defines identity, such as a meeting or dated decision.

## Page lifecycle

`draft → active → stale → superseded|archived`

A page may return from `stale` to `active` after review. `superseded` pages must link to their replacement and should not be silently deleted.

## Staleness

A page is a staleness candidate when any configured rule is true:

- `review_after` has passed.
- a linked source has materially changed.
- newer evidence conflicts with a key claim.
- a synthesis dependency was updated after the synthesis page.
- project-specific TTL has expired.

Staleness is a review signal, not proof of incorrectness.

## Evidence priority

When evidence conflicts, assess:

1. Directness / primary-source status
2. Authority and reliability
3. Scope match
4. Effective date / recency
5. Corroboration
6. Explicit uncertainty

Never resolve solely by newest timestamp.
