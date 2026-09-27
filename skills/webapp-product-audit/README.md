# Webapp Product Audit Skill

A reusable skill for evaluating real web applications through browser-based user journeys.

## What it evaluates

- UI / UX
- usability and information architecture
- feature completeness
- usefulness and repeat-use value
- strengths and weaknesses
- missing or unnecessary functionality
- mobile UX
- accessibility
- browser/runtime failures
- performance
- production readiness

## Quick start

1. Copy `profiles/example.json` to a project-specific profile.
2. Fill in routes, roles, critical journeys, and safe mutation rules.
3. Keep credentials in environment variables, never in the profile.
4. Install Playwright in the target project or runner environment.
5. Run:

```bash
npm install --no-save @playwright/test
npx playwright install chromium
AUDIT_PROFILE=./profile.json node scripts/audit.mjs
```

You can override:

```bash
AUDIT_BASE_URL=http://localhost:3000
AUDIT_OUTPUT_DIR=.audit-output/my-run
```

The runner captures route-level evidence. The evaluator then executes the user journeys in `templates/journeys.md` and writes the final report using `templates/report-template.md`.

## Project profiles

Profiles keep this skill reusable.

Use them for:
- product name
- base URL
- routes
- authentication handoff URL
- expected post-login path
- mutation policy
- roles
- critical assertions
- domain-specific journeys

Do not store credentials or production secrets in profiles.

## Evidence handling

Audit screenshots and logs may contain sensitive information. Store outputs in a gitignored location and redact before sharing.

## AccountManager migration example

The original AccountManager audit can be represented as a profile instead of forking the core skill. Keep AccountManager-specific financial rules, routes, roles, and authenticated test instructions in that project's own profile/documentation.
