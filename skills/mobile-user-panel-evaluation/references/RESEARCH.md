# Research references and license notes

This skill is an original orchestration/evaluation design. It references research concepts; it does not vendor or copy benchmark code/data.

## KnowU-Bench
- Repository: https://github.com/ZJU-REAL/KnowU-Bench
- Purpose: personalized/proactive mobile-agent evaluation in reproducible Android environments.
- Ideas adopted conceptually: hidden profiles with exposed behavioral logs; persona-grounded online user simulation; separation between acting, asking/consent, and evaluation.
- Public repository license observed: Apache License 2.0.
- If code/data is later imported, review the exact artifact's license and preserve required notices instead of assuming this note is sufficient.

## UI-UX / UXBench
- Repository: https://github.com/afx-team/UI-UX
- Purpose: screenshot-grounded mobile UX defect diagnosis.
- Ideas adopted conceptually: explicit UX reasoning from visual evidence; usability, efficiency, and trustworthiness as useful diagnostic dimensions.
- Public repository states MIT License and explicitly asks users to review `LEGAL.md` for additional terms governing the model and benchmark.
- This skill does not include their model weights, benchmark samples, screenshots, or implementation.

## LlamaTouch
- Repository/project should be re-verified before importing any implementation or dataset.
- Idea used here: evaluate a mobile interaction trajectory with required/essential states rather than treating a final action sequence as the only evidence.
- No LlamaTouch code or dataset is copied into this skill. Before future vendoring or dependency use, verify the exact upstream repository, artifact ownership, and license at that time.

## Why these are references rather than dependencies

The goal is to keep `mobile-user-panel-evaluation` lightweight and usable with different execution environments (real device, emulator, browser/PWA, CUA, Appium, or another mobile agent). External benchmarks can be integrated later as optional adapters after their runtime and licensing requirements are reviewed.
