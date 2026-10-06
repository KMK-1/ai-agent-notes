# Mobile User Panel

A reusable skill for evaluating mobile products with simulated user panels instead of a single generic QA persona.

## What it catches

Functional tests answer **can the task be completed?** This skill also asks **can different kinds of users discover, understand, trust, complete, and recover from the task?**

It combines persona-grounded task execution, interaction traces, screenshots, essential-state checks, qualitative feedback, and an independent reviewer.

## Quick start

1. Choose 5–12 personas from `personas/default-panel.yaml` and adapt only product-relevant traits.
2. Define 3–10 critical journeys using `scenarios/scenario-schema.yaml`.
3. Run each persona independently against the same scenario set.
4. Store trace + screenshots + outcome + feedback for each run.
5. Review with `evaluators/rubric.md`.
6. Produce `templates/report-template.md` and convert P0–P2 findings into backlog items.
7. After fixes, rerun the same persona/scenario matrix for regression comparison.

## Recommended orchestration

For Herdr or another multi-agent runtime, parallelize the user runs but keep the final reviewer separate from the actors:

```text
Coordinator
├─ novice-user
├─ power-user
├─ accessibility-user
├─ low-patience-user
├─ trust-sensitive-user
└─ domain-specific users
        ↓
    evidence bundles
        ↓
    UX reviewer
```

For expensive runs, start with 5 personas × 5 critical scenarios. Expand the panel only when segment-specific behavior matters.

## Suggested output layout

```text
artifacts/mobile-user-panel-evaluation/<run-id>/
├─ manifest.json
├─ runs/<persona>/<scenario>/
│  ├─ trace.json
│  ├─ feedback.md
│  └─ screenshots/
└─ report.md
```

## Project-specific profiles

Do not bake HANKKIROK or any other app into this generic skill. A product repository can keep its own persona additions, scenario pack, test accounts, and business assertions while invoking this skill as the evaluator.
