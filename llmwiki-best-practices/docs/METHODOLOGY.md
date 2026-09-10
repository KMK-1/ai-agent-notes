# Methodology

This framework combines a few durable patterns without depending on one vendor implementation.

## 1. Three ownership layers

Keep raw evidence separate from agent-maintained knowledge and from the human/agent co-maintained schema. This prevents source corruption and makes regeneration/review tractable.

## 2. Compile knowledge incrementally

A new source should modify the existing knowledge graph instead of becoming an isolated summary. Unchanged sources should not be reprocessed by default.

## 3. Thin bootstrap, focused skills

Session-start instructions stay small. Detailed procedures are loaded only for the operation being performed. This reduces context overhead and makes behavior portable across agent runtimes.

## 4. Source records are first-class

Every source gets a stable source page and manifest entry. This enables coverage checks, fingerprint-based change detection, impact tracking, and provenance traversal.

## 5. Contradictions are data

Disagreement is represented explicitly rather than silently overwritten. Resolution depends on evidence quality, scope, and time—not agent preference.

## 6. Queries can compound knowledge

Useful synthesized answers may be filed back into the wiki when they represent durable analysis rather than ephemeral chat output.

## 7. Lint is operational maintenance

Health checks include structural integrity, provenance, freshness, duplication, contradictions, and source coverage. A health score is useful only when its components remain visible.

## 8. Multi-agent writes require reconciliation

Parallel extraction scales well; parallel canonicalization does not. A single reconciliation pass owns naming, deduplication, synthesis refresh, and final health checks.
