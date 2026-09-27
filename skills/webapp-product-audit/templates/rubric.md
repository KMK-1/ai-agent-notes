# Generic Product Audit Rubric

Score only dimensions that were actually tested.

Scale:
- 0 — unusable, unsafe, or critical task cannot be completed
- 1 — severe blocking/friction
- 2 — task is possible only with workarounds or repeated confusion
- 3 — task is generally successful with minor friction
- 4 — task is clear, stable, and can be completed without explanation
- N/A — not verified

| Dimension | Weight | Evidence to consider |
| --- | ---: | --- |
| Core task success & feature completeness | 25 | End-to-end task completion, CRUD/primary workflow, correctness, persistence, failure recovery |
| Usability & information architecture | 20 | Discoverability, terminology, hierarchy, cognitive load, navigation, feedback |
| Usefulness & repeat-use value | 15 | Time/effort saved, recurring value, actionable output, replacement/improvement over current workflow |
| Mobile UX | 10 | 320/390px navigation, tap targets, forms, overflow, readability |
| Accessibility | 10 | Keyboard operation, focus, labels, contrast, status announcements, automated findings |
| Reliability & performance | 10 | Console/network failures, slow paths, repeated actions, realistic data volume |
| Production & data safety | 10 | Authentication, authorization, data isolation/integrity, recovery, secrets, observability |

Weighted score = Σ(score / 4 × weight) across verified dimensions only.

Always state the verified-weight denominator. Never treat N/A as zero.

## Interpretation rules

The numeric score is descriptive, not a deployment gate.

An unresolved P0 blocks a production-ready conclusion regardless of score. P1 findings on the product's essential journey should normally result in a conditional or blocked deployment judgment until retested.

## Evidence quality

Prefer in this order:
1. reproducible browser observation
2. measured browser/network/tool output
3. source-code inspection supporting the observed behavior
4. evaluator interpretation
5. assumption — must be marked unverified

## Product-value questions

- Can a new user understand what to do next?
- Can the main job be completed without external explanation?
- Is the product measurably easier/faster/clearer than the workflow it replaces?
- Is there a plausible recurring reason to return?
- Does the app expose information that helps a user decide or act?
- Which features look impressive but do not materially help the job?

Do not claim market superiority without a separate competitor study.
