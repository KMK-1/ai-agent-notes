---
name: mobile-user-panel
description: Simulate a diverse panel of realistic mobile users against product journeys. Use to discover friction, preference mismatch, ambiguity, recovery problems, and personalization failures without pretending simulated feedback is real user research.
---

# Mobile User Panel

Run structured synthetic-user evaluations. Inspired by personalized mobile-agent benchmarks such as KnowU-Bench: keep latent preferences separate from the information available to the product/agent, expose behavior/history selectively, and score whether the experience learns, asks, acts, or stays silent appropriately.

Synthetic personas are test instruments, not evidence of market demand. Label all results as simulated until validated with real users.

## Persona schema
Each persona should define: id, context, mobile proficiency, domain proficiency, time pressure, accessibility constraints if intentionally tested, one-hand likelihood, tolerance for setup, explicit preferences, hidden preferences, behavior history, ambiguity tolerance, privacy sensitivity, and likely abandonment triggers.

Do not stereotype demographic groups. Behavioral traits must be task-relevant.

## Evaluation loop
1. Select a Golden Journey.
2. Select at least three materially different personas.
3. Give the product/agent only information it would actually know at that point.
4. Execute or reason through each state transition.
5. Record clarification requests, wrong assumptions, unnecessary steps, backtracks, errors, recovery, confidence, and completion.
6. Reveal hidden persona expectations only for scoring.
7. Compare across personas to identify systemic versus persona-specific friction.

## Personalization tests
Evaluate whether the product should: use known preference, infer cautiously from history, ask a clarifying question, request confirmation before consequential action, or avoid intervention. Penalize both needless questioning and unjustified autonomous action.

## Metrics
Use measured denominators. Suggested metrics: task success, essential-state completion, step count, backtracks, recoveries, clarification count, abandonment risk, preference fit, inappropriate assumption count, and intervention calibration.

Never fabricate precise percentages from a single qualitative run.

## Output
Produce per-persona trace, cross-persona findings, systemic friction, personalization failures, recovery failures, and prioritized hypotheses for real-user validation.
