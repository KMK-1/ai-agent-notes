# Evaluation rubric

Score each tested dimension 0–4 and preserve evidence. Use N/A when it was not meaningfully exercised.

| Dimension | 0 | 2 | 4 |
|---|---|---|---|
| Task completion | blocked/incorrect | completes with substantial workaround | completes correctly and directly |
| Learnability | cannot infer path | path becomes clear after trial/help | first-use path is self-explanatory |
| Navigation / efficiency | lost/repeated loops | avoidable steps/backtracking | concise, predictable path |
| Cognitive load | overwhelming/ambiguous | several choices or concepts require effort | information and decisions are easy to process |
| Accessibility | observed barrier blocks task | meaningful friction or partial support | tested needs are supported without material barrier |
| Trust | misleading/unclear consequence | some uncertainty | promise, state, consequence, and feedback align |
| Personalization | wrong/opaque behavior | partially useful or hard to control | correct, transparent, persistent, and overridable |
| Error recovery | dead end/data loss | recovery exists but is unclear/costly | clear explanation and safe, easy recovery |

## Evidence modifiers

For each score record:
- evidence confidence: high / medium / low
- evidence types: trace / screenshot / measured timing / system result / persona feedback
- tested denominator: number of applicable persona × scenario runs

Never average N/A as zero.

## Journey metrics

Where instrumentation allows, collect:
- completion rate
- median steps to completion
- median time to completion
- backtracks/retries
- help requests
- abandonment rate
- essential-state coverage
- successful recovery rate

These metrics explain the score; they do not automatically determine it.

## Reviewer synthesis

The reviewer should compare runs and ask:
1. Is this a functional failure or UX friction?
2. Does it affect all users or a specific behavioral segment?
3. Did multiple personas encounter the same root cause?
4. Is the diagnosis supported by trace/screenshot/result evidence?
5. Could the persona prompt itself have caused the behavior?
6. Would the proposed fix improve one segment while harming another?

## Severity

- P0: unsafe/data loss/catastrophic correctness or critical journey broadly blocked
- P1: major flow repeatedly fails, or an important segment cannot complete/recover
- P2: material friction with workaround
- P3: polish

Do not derive severity from the numeric score alone.
