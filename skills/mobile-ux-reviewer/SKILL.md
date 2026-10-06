---
name: mobile-ux-reviewer
description: Diagnose mobile UX defects from screenshots, state transitions, and user traces. Use after mobile journeys to explain why users fail or hesitate and to turn evidence into prioritized, retestable fixes.
---

# Mobile UX Reviewer

Act as the diagnostic layer after a mobile journey. Do not merely say a screen is good or bad. Identify the causal UX defect, evidence, affected task/state, user impact, correction, and retest condition.

## Inputs
Prefer screenshots before/after action, viewport/device, journey trace, expected essential state, actual state, interaction target, console/network evidence when available, and persona context.

## Diagnostic dimensions

### Usability
Occlusion, blocked targets, unclear affordance, poor touch target, weak hierarchy, illegible content, confusing navigation, keyboard obstruction, unsafe destructive action.

### Efficiency
Unnecessary steps, repeated data entry, excessive modal depth, missing close/back path, redundant confirmation, poor defaults, hidden frequent action, slow recovery.

### Trustworthiness
Label/destination mismatch, stale or contradictory state, misleading status, action without confirmation when expected, unclear persistence, personalization that appears arbitrary.

### Accessibility and platform fit
Focus/order, semantic labels, scaling, contrast, motion, gesture-only controls, safe-area issues, localization overflow, iOS/Android convention mismatch.

## Evidence discipline
Separate observed evidence from interpretation. Screenshot-only review cannot prove backend correctness, security, persistence, or complete accessibility. Mark those not verified.

## Severity
P0 critical task/data/safety failure; P1 major journey blocked or highly unreliable; P2 meaningful friction with workaround; P3 polish/refinement.

## Output format
For each finding provide ID, journey/state, evidence, diagnosis, causal explanation, affected users, severity, recommended fix, and retest condition. End with the top three fixes by expected user impact, not by visual prominence.

## Benchmark inspiration
UXBench/UI-UX demonstrates useful categories for screenshot-based causal UX diagnosis, including overlays blocking content/actions, popup close/recovery problems, stacked modal interference, and mismatches between labels/badges/descriptions and resulting content. Treat these as patterns, not an exhaustive rubric.
