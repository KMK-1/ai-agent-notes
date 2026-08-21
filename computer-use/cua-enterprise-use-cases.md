# CUA in Enterprise Environments

## 1. What is CUA?

CUA (Computer-Use Agent) is an approach for giving an AI agent access to a computer environment so it can interact with applications through interfaces that a human normally uses: screens, mouse/keyboard actions, browsers, and desktop applications.

A useful mental model is:

```text
LLM / Agent
    ↓ decides what to do
Computer-Use layer
    ↓ observes + operates
Isolated computer / VM / container / desktop
    ↓
Browser · Web apps · Legacy apps · Internal tools
```

The important distinction is that the LLM is the reasoning layer, while the computer-use environment is where actions are executed.

## 2. Why use it inside a company?

Many enterprise workflows cannot be automated cleanly with APIs. Internal systems may be legacy applications, browser-only tools, remote desktops, or applications with incomplete APIs.

CUA can fill that gap by operating the same UI an employee uses.

Good candidates include repetitive workflows that require several applications, such as:

```text
Read issue → search internal system → open related document
→ compare information → update tracker → prepare report
```

CUA is particularly useful when API integration would be expensive or impossible.

## 3. Automotive quality example

Consider a quality engineer investigating a field issue.

### Traditional workflow

```text
1. Receive issue information
2. Open quality system
3. Search vehicle / part / symptom
4. Open Excel issue list
5. Search previous similar issues
6. Open supplier material
7. Compare evidence
8. Update issue tracker
9. Prepare report
```

### CUA-assisted workflow

```text
Quality Agent
    ↓
CUA execution environment
    ├─ Open internal quality system
    ├─ Search issue number
    ├─ Read permitted fields
    ├─ Open issue tracker
    ├─ Find related records
    ├─ Gather evidence
    └─ Prepare a draft summary
```

The agent can perform navigation and collection while the employee retains approval authority for sensitive or irreversible actions.

## 4. Where CUA fits in an enterprise architecture

A safer enterprise design separates reasoning, execution, credentials, and data boundaries.

```text
Employee
   ↓
Agent / Orchestrator
   ↓
Enterprise-approved AI gateway
   ↓
LLM
   ↓ action plan
Policy / Approval Layer
   ↓
CUA Runtime
   ↓
Isolated VM / Container / Desktop
   ↓
Approved internal applications
```

The CUA runtime should not automatically be assumed to inherit the security path used by an existing Claude or Codex deployment. Network routing, proxy configuration, authentication, telemetry, and data handling must be verified separately for the runtime environment.

## 5. Recommended use cases

### A. Internal system lookup

The agent receives an issue identifier and uses a browser or desktop application to retrieve permitted information.

```text
Issue ID
 → internal system search
 → collect relevant fields
 → summarize
```

### B. Cross-system issue investigation

```text
Issue report
 → quality system
 → issue tracker
 → supplier document
 → historical issue search
 → evidence package
```

This is valuable because computer-use automation can bridge systems that do not share APIs.

### C. Repetitive data entry

Examples include copying approved values between systems, updating status fields, or registering repetitive records.

For writes, use human confirmation where mistakes could affect production, suppliers, customers, finance, compliance, or traceability.

### D. Regression and UI testing

CUA environments can be useful for agents that repeatedly operate an application and verify that expected UI behavior still works after changes.

```text
Launch application
 → login
 → navigate workflow
 → enter test data
 → capture result
 → compare with expected behavior
```

### E. Evidence collection

The agent can collect screenshots, visible values, page states, and logs from approved environments to create a reproducible investigation trail.

## 6. Human-in-the-loop design

Do not give the agent unrestricted authority merely because it can operate a UI.

A useful model is:

```text
LOW RISK
Search / read / summarize
        ↓ automatic

MEDIUM RISK
Prepare edits / fill forms
        ↓ preview + approval

HIGH RISK
Submit / delete / approve / external communication
        ↓ explicit human confirmation
```

This keeps automation useful without turning UI access into unrestricted system authority.

## 7. Security considerations

### Network path

Verify where the CUA machine actually sends traffic. An enterprise-approved LLM gateway used by a local coding agent does not guarantee that a separate CUA runtime uses the same proxy or gateway.

### Credentials

Avoid embedding employee passwords, API keys, cookies, or tokens in source code or prompts. Prefer company-approved secret management, short-lived credentials, and least-privilege accounts.

### Data boundary

Classify what the agent may see and what may leave the execution environment. Screenshots can contain sensitive information even when the underlying file is never uploaded.

### Isolation

Prefer disposable or isolated execution environments where practical. Separate agent workspaces from an employee's unrestricted primary desktop.

### Logging

Record meaningful actions such as navigation, reads, writes, approvals, failures, and the identity of the initiating user. Avoid logging secrets unnecessarily.

### Allowlist

Limit accessible applications and domains where possible.

```text
Allowed
├─ approved internal quality system
├─ approved issue tracker
└─ approved document portal

Blocked by default
├─ personal cloud storage
├─ arbitrary external upload sites
└─ unapproved services
```

## 8. Deployment levels

A staged rollout is safer than immediately giving an agent broad computer access.

| Level | Capability | Example |
|---|---|---|
| 0 | Observe only | screenshot analysis |
| 1 | Read/navigation | search internal systems |
| 2 | Draft | prepare form or report |
| 3 | Controlled write | update approved fields after confirmation |
| 4 | Workflow automation | multi-system execution with policy gates |

Start with Levels 0–1 and increase authority only after measuring reliability and defining controls.

## 9. CUA vs API automation

CUA should not replace APIs when stable APIs already exist.

| Situation | Better default |
|---|---|
| Stable supported API | API |
| Legacy GUI without API | CUA |
| Visual verification required | CUA |
| Large structured data transfer | API |
| High-volume deterministic workflow | API / RPA |
| Mixed browser + legacy tools | CUA can help |

A strong architecture often combines them:

```text
Agent
├─ API tools for structured operations
└─ CUA for UI-only gaps
```

## 10. Example: quality investigation agent

```text
Employee
  │
  │ "Investigate issue Q-1042"
  ▼
Quality Agent
  │
  ├─ classify task
  ├─ determine required evidence
  └─ request permitted actions
  │
  ▼
CUA Runtime
  │
  ├─ open quality portal
  ├─ search Q-1042
  ├─ gather symptom/status metadata
  ├─ search historical tracker
  ├─ open related evidence
  └─ capture references
  │
  ▼
Agent
  │
  ├─ correlate evidence
  ├─ identify missing information
  └─ draft investigation summary
  │
  ▼
Engineer Review
```

The goal is not simply to make an AI "click the mouse." The value comes from combining reasoning, tool selection, computer operation, evidence gathering, and controlled execution into one workflow.

## 11. Before using CUA on an internal network

Confirm these items with the relevant IT/security owners:

- Whether the runtime is company-managed or externally hosted
- Exact outbound network path and proxy/gateway behavior
- Whether screenshots or page contents are transmitted externally
- LLM provider and data-retention policy
- Authentication and credential storage method
- Accessible internal network ranges
- Domain/application allowlists
- Logging and audit requirements
- Data classification restrictions
- Human approval requirements for writes
- Isolation between users and sessions
- Whether automation of the target internal system is permitted

## 12. Practical adoption strategy

A sensible first pilot is a **read-only quality research agent**.

```text
Phase 1
Search + read + summarize

Phase 2
Cross-system evidence collection

Phase 3
Draft updates and reports

Phase 4
Human-approved writes

Phase 5
Policy-controlled workflow automation
```

This approach demonstrates productivity gains while keeping the initial security and operational risk relatively contained.

---

## Security note

This document describes general architecture patterns. Enterprise deployment should follow the organization's security, privacy, network, software-installation, and data-governance policies. Do not place confidential company architecture, credentials, internal URLs, customer information, or proprietary data in a public repository.
