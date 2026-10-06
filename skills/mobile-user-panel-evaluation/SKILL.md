---
name: mobile-user-panel-evaluation
description: Evaluate a mobile app through a panel of simulated users with distinct goals, habits, skill levels, and preferences. Use interaction traces, screenshots, task outcomes, persona feedback, and an independent UX reviewer to find usability and product problems that ordinary functional tests miss.
---

# Mobile User Panel

Evaluate a mobile product from the perspective of multiple plausible users rather than one generic QA agent.

This skill is project-agnostic. Product-specific routes, credentials, test data, business rules, and destructive actions belong in a project profile or scenario pack.

## Core idea

Run the same critical journeys with diverse personas, capture what each persona actually experiences, then let an independent reviewer synthesize recurring and persona-specific friction.

The design borrows three research ideas without copying their implementation:
- KnowU-Bench: hidden profile / exposed behavioral evidence and persona-grounded user simulation.
- UXBench / UI-UX: screenshot-grounded diagnosis across usability, efficiency, and trustworthiness.
- LlamaTouch-style mobile evaluation: judge trajectories and required/essential states rather than only final taps.

See `references/RESEARCH.md` for attribution and license notes.

## Folder contract

```text
mobile-user-panel-evaluation/
├─ SKILL.md
├─ README.md
├─ personas/
│  └─ default-panel.yaml
├─ scenarios/
│  └─ scenario-schema.yaml
├─ evaluators/
│  └─ rubric.md
├─ templates/
│  └─ report-template.md
└─ references/
   └─ RESEARCH.md
```

## Required evidence

For each persona × scenario run, record where available:
- starting state and device/viewport
- ordered interaction trace
- timestamps or step count
- screenshots at meaningful states
- task completion / abandonment
- wrong turns, backtracks, retries, and help requests
- error and recovery behavior
- persona-grounded comments
- expected essential states and whether each was reached

Never turn missing evidence into a pass.

## Workflow

### 1. Select the panel
Use `personas/default-panel.yaml` or create a product-specific panel. Keep personas behaviorally meaningful: goals, domain familiarity, mobile fluency, accessibility needs, patience, trust sensitivity, and relevant preferences.

Avoid demographic stereotypes. Age or identity alone must not determine ability or behavior.

### 2. Define scenarios
Use `scenarios/scenario-schema.yaml`. Prefer end-to-end user goals over page checks. Each scenario should define the initial state, goal, safe actions, success state, essential intermediate states, and recovery expectations.

### 3. Execute independently
Each User Agent receives only the information that its persona would plausibly know. Do not leak evaluator criteria or hidden success states into the user simulation.

A recommended multi-agent layout is:

```text
Orchestrator
├─ User Agent A
├─ User Agent B
├─ User Agent C
└─ ...
      ↓
 evidence bundle
      ↓
 Independent UX Reviewer
```

User Agents should attempt the task, not critique the implementation while acting. The reviewer performs the cross-run diagnosis afterward.

### 4. Score evidence
Use `evaluators/rubric.md` across eight dimensions:
1. Task completion
2. Learnability
3. Navigation / efficiency
4. Cognitive load
5. Accessibility
6. Trust
7. Personalization
8. Error recovery

Scores are evidence summaries, not objective truths. Always retain the observations behind a score and mark untested dimensions N/A.

### 5. Synthesize findings
Separate:
- universal issues seen across personas
- segment-specific issues
- scenario-specific failures
- preference conflicts
- functional defects
- UX friction
- trust/safety concerns

Cluster repeated symptoms into root findings rather than reporting every trace as a separate bug.

### 6. Prioritize
Use P0–P3:
- P0 Critical: unsafe/data-loss/catastrophic correctness issue or critical journey blocked for nearly everyone
- P1 High: major journey repeatedly fails or a meaningful user segment cannot recover
- P2 Medium: material friction with a workable path
- P3 Polish: wording, spacing, hierarchy, or low-impact refinement

### 7. Report and retest
Use `templates/report-template.md`. Every P0–P2 finding should have evidence, affected personas/scenarios, reproduction path, recommendation, and a retest condition.

## Hidden-profile mode

For personalization products, optionally split a persona into:
- hidden truth: actual preferences / constraints
- exposed history: realistic prior actions or logs

The acting agent sees only exposed history. The evaluator compares inferred behavior with hidden truth. This prevents trivial preference lookup and is inspired by KnowU-Bench.

## Screenshot diagnosis

At meaningful states, inspect screenshots for observable UX defects and consistency problems. Treat screenshot reasoning as supporting evidence; do not infer invisible behavior from pixels. UXBench's usability/efficiency/trustworthiness framing is useful here, but this skill expands it to full journeys.

## Integration with webapp-product-audit

Reuse `skills/webapp-product-audit` when the target is a responsive/PWA web product or when browser/network/accessibility evidence is needed. `mobile-user-panel-evaluation` adds persona diversity and cross-user synthesis; it does not replace technical browser auditing.

Recommended combined flow:

```text
webapp-product-audit → technical/journey evidence
mobile-user-panel-evaluation    → persona runs and UX synthesis
                     ↓
                 product backlog
```

## Safety

Use test accounts and disposable data for write/delete/payment/invite/import/permission flows. Never commit credentials, tokens, personal data, or private screenshots. Do not let simulated users authorize real purchases, messages, account deletion, or irreversible production actions.
