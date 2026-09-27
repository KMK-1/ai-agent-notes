# Generic User Journeys

Adapt these to the project's profile. Run only actions that are safe in the target environment.

| ID | Journey | What to verify |
| --- | --- | --- |
| J01 | First visit / value discovery | Can a new user understand the product, value proposition, primary action, and authentication path? |
| J02 | Onboarding / setup | Can the user reach a useful initial state? Are empty states and invalid inputs understandable? |
| J03 | Primary job | Complete the product's most important end-to-end task. Verify correctness and persistence. |
| J04 | Create / edit / delete / recover | Where applicable, test object lifecycle, validation, confirmations, refresh and recovery. |
| J05 | Search / filter / navigation | Test discoverability, filters, empty results, back navigation, deep links and state retention. |
| J06 | Secondary/high-value workflow | Complete the next most important recurring task and compare effort with the primary workflow. |
| J07 | Roles / permissions | In test environments, verify allowed and disallowed actions across roles and isolated users/tenants. |
| J08 | Exceptions / recovery | Invalid input, slow/failed request, expired session, duplicate action, refresh, retry and cancellation. |
| J09 | Mobile | Repeat critical tasks at 390px and 320px. Check overflow, keyboard/input behavior and navigation. |
| J10 | Accessibility | Keyboard-only traversal, visible focus, labels, semantic controls, error/status communication and contrast. |

For every journey record:
- role
- start state
- steps
- expected outcome
- observed outcome
- completed / partial / failed / not verified
- time or effort
- confusion points
- refresh/relogin persistence where relevant
- evidence path
