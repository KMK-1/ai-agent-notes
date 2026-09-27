---
name: webapp-product-audit
description: Audit a web application as a real user. Use when evaluating UI/UX, usability, feature completeness, usefulness, product value, accessibility, reliability, performance, and production readiness. Drive the app through realistic user journeys, collect browser evidence, classify issues by severity, and produce an evidence-backed product audit report. Designed to be reusable across projects through a project profile.
---

# Webapp Product Audit

Evaluate a web application by actually using it, not by reviewing screenshots or code alone.

The skill combines:
- realistic browser journeys
- desktop/mobile observation
- console/network/error evidence
- heuristic UX review
- accessibility and performance checks
- feature and product-value assessment
- production-readiness gates
- prioritized P0–P3 findings
- an evidence-backed final report

The generic skill must remain project-agnostic. Project-specific routes, credentials, roles, business rules, destructive actions, and domain-specific success criteria belong in a profile file.

## Folder contract

```text
webapp-product-audit/
├─ SKILL.md
├─ README.md
├─ scripts/
│  └─ audit.mjs
├─ templates/
│  ├─ rubric.md
│  ├─ journeys.md
│  ├─ report-template.md
│  └─ agent-prompt.md
└─ profiles/
   └─ example.json
```

## Safety first

Use a disposable or isolated test environment for any write, delete, invite, payment, import, permission, or destructive journey.

Never:
- place passwords/tokens in committed profile files
- perform destructive tests against production without explicit user authorization
- report secrets, personal data, financial raw data, session tokens, or private screenshots
- infer a security pass from a UI-only check
- convert untested items into passing scores

When only a public or unauthenticated preview is available, label authenticated functionality and deployment safety as **not verified**.

## Inputs

Resolve or infer:
1. target base URL
2. project profile
3. environment: local/dev/staging/production
4. test roles and authentication method
5. routes/pages to inspect
6. critical user journeys
7. project-specific business rules
8. actions that are safe to mutate
9. desktop/mobile viewport requirements
10. expected output path

If information is unavailable, continue with what can safely be tested and mark gaps as N/A or not verified.

## Execution workflow

### Phase 1 — Read the project profile

Load the profile before browsing.

The profile defines:
- product name
- base URL override
- page routes
- test roles
- auth handoff/login URL when available
- allowed mutation level
- domain-specific critical assertions
- optional journey additions
- data-sensitivity notes

Never hard-code one application's semantics into this skill.

### Phase 2 — Baseline browser capture

Run `scripts/audit.mjs` or an equivalent browser runner.

Capture at minimum:
- final URL
- HTTP status
- page title
- screenshot
- viewport
- horizontal overflow
- console errors
- page errors
- failed requests
- HTTP 4xx/5xx responses

Default viewports:
- desktop: 1440×900
- mobile: 390×844
- narrow mobile: 320×720

Baseline capture is evidence collection, not the final product judgment.

### Phase 3 — Execute real user journeys

Use `templates/journeys.md` plus profile-specific journeys.

For each journey record:
- user/role
- starting state
- action
- expected outcome
- actual outcome
- completion status
- time/effort
- confusion or extra explanation required
- refresh/relogin persistence where relevant
- evidence path

Prefer completing end-to-end tasks over checking isolated pages.

### Phase 4 — Evaluate the product

Use `templates/rubric.md`.

Assess:
- core task success and feature completeness
- usability and information architecture
- usefulness and repeat-use value
- mobile experience
- accessibility
- reliability and performance
- deployment/data safety

Separate:
- observed fact
- measured result
- evaluator interpretation
- unverified assumption

Do not invent user preference. Product-value conclusions must be tied to observed task outcomes or explicit user research.

### Phase 5 — Severity and production gates

Classify findings:
- P0 Critical — data exposure/loss, serious correctness failure, or critical journey fully blocked
- P1 High — repeated failure of a major flow, essential mobile/role path unusable, difficult recovery
- P2 Medium — material friction with a workaround
- P3 Polish — visual/wording/spacing/refinement

A high weighted score never overrides an unresolved P0.

A production-readiness judgment should explicitly cover:
- authentication
- authorization/role isolation
- data integrity
- error recovery
- backup/restore or equivalent recovery plan
- observability
- responsive behavior
- accessibility
- performance under realistic conditions

Mark each as pass / fail / not verified.

### Phase 6 — Report

Use `templates/report-template.md`.

Every material finding should include:
- ID
- journey
- environment
- reproduction steps
- expected result
- actual result
- evidence
- impact
- severity
- recommendation
- re-test condition

The report should answer:
- What works especially well?
- What is hard to use?
- Which functions are weak or missing?
- Is there a reason to return to the product?
- What blocks real deployment?
- What can be improved immediately?
- What belongs in the short-term and long-term roadmap?

## Optional external checks

When available, supplement browser testing with:
- axe-core for automated accessibility signals
- Lighthouse for performance/accessibility/best-practices baselines
- load testing for critical endpoints
- browser compatibility checks

Automated tools are supporting evidence only. They do not replace manual journey testing.

## Output standard

A strong audit is evidence-backed and reproducible.

Do not produce a glossy scorecard with unsupported numbers. Use N/A for unverified dimensions and state the tested denominator when calculating weighted results.
