# Herdr in Enterprise Environments

## 1. What is Herdr?

Herdr is a terminal workspace/runtime designed for running and supervising coding agents. It keeps real terminal processes in a background server, organizes them into workspaces, tabs, and panes, detects common coding agents, and exposes controls through its CLI and local socket API.

A useful mental model is:

```text
Coding agent = developer
Orchestrator = team lead
Herdr = persistent workspace + terminals + agent status board
```

Herdr does **not** replace Codex, Claude Code, Cursor Agent CLI, OpenCode, or other coding agents. It runs the tools already installed in terminal panes and manages their execution environment.

## 2. Why use Herdr?

A single coding agent is often sufficient for a small task. Larger projects create a coordination problem:

```text
Backend task
Frontend task
Tests
Security review
Regression investigation
Documentation
```

Running these sequentially can waste time. Running many terminals manually creates another problem: the developer has to remember which terminal belongs to which task and repeatedly check whether each agent is working, blocked, idle, or finished.

Herdr provides a persistent control surface for these sessions.

```text
                   HERDR
                     │
      ┌──────────────┼──────────────┐
      ↓              ↓              ↓
   Codex #1       Codex #2       Claude
   Backend        Frontend        Review
      │              │              │
   working         blocked          done
```

## 3. Core concepts

Herdr organizes work using several levels:

- **Session** — persistent background runtime namespace.
- **Workspace** — project/task-level container.
- **Tab** — a layout within a workspace.
- **Pane** — a real terminal process.
- **Agent** — a recognized coding-agent process inside a pane.

This makes it possible to keep separate repositories, investigations, logs, test runners, and agents organized without collapsing everything into one terminal.

## 4. Persistence

Herdr's background server owns the terminal panes. A user can detach from the UI while the processes continue running and later reattach.

This is useful for long-running work such as:

```text
Large test suite
Dependency migration
Repository-wide refactoring
Static analysis
Build / packaging
Long agent investigation
```

The developer does not need to keep one visible terminal window dedicated to each operation.

## 5. Enterprise architecture

In a company where Codex or Claude Code already uses an approved AI gateway, a desired architecture looks like this:

```text
┌──────────────── Enterprise environment ────────────────┐

                     Developer
                         │
                         ▼
                       Herdr
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
          Codex #1    Codex #2    Claude Code
             │           │           │
             └───────────┼───────────┘
                         │
                  Approved AI path
                         │
                  Security Gateway
                         │
                  Approved provider

             Source / Git / build systems
                    remain governed
                    by company policy

└─────────────────────────────────────────────────────────┘
```

Herdr should remain the **terminal/runtime layer**. It should not introduce an unapproved path around the organization's existing AI, network, identity, or data controls.

## 6. Important security distinction

The fact that Herdr is local does **not** automatically make the whole agent stack local.

```text
Source Code
    ↓
Herdr
    ↓
Codex / Claude Code
    ↓
AI backend
```

The coding agent still follows its own network and authentication configuration. Therefore the key enterprise question is not simply:

> Is Herdr local?

It is:

> Does an agent launched inside Herdr continue to use the same company-approved executable, proxy, gateway, certificate, authentication, and policy path as the agent launched normally?

This must be verified in the target environment.

## 7. Use Case A — Parallel feature development

Suppose a team is building an internal web application.

Instead of using one agent sequentially:

```text
Codex
 ↓
Backend
 ↓
Frontend
 ↓
Tests
 ↓
Review
```

Herdr can keep several independent agents active:

```text
                    Herdr
                      │
        ┌─────────────┼─────────────┐
        ↓             ↓             ↓
     Codex A        Codex B       Claude
     Backend        Frontend      Reviewer
        │             │             │
      API work       UI work      Review
```

The human remains responsible for task boundaries, repository coordination, integration, and approval.

## 8. Use Case B — Orchestrator + workers

Herdr exposes agent and pane operations through CLI/socket interfaces, which makes agent-driven coordination possible.

A more advanced pattern is:

```text
                  Orchestrator
                       │
                       ▼
                     Herdr
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Worker A     Worker B     Worker C
       Backend       Tests       Security
          │            │            │
          └────────────┼────────────┘
                       ▼
                    Results
                       │
                       ▼
                   Reviewer
```

The orchestrator can decompose work, start workers, inspect state, wait for completion/blocking, and collect outputs.

Herdr provides the runtime/control primitives; the orchestrator is still responsible for planning and reasoning.

## 9. Use Case C — Dedicated reviewer agent

One agent can implement a change while another reviews it.

```text
Developer request
      ↓
Implementation Agent
      ↓
Code changes
      ↓
Reviewer Agent
      ├─ architecture
      ├─ error handling
      ├─ security
      ├─ regression risk
      └─ maintainability
      ↓
Feedback
      ↓
Implementation Agent
```

This pattern can improve coverage compared with repeatedly asking the same agent to review its own output.

## 10. Use Case D — Background regression investigation

Suppose a recent change introduces failing tests.

```text
Herdr Workspace: regression-investigation

Pane 1 → Codex investigates failing test
Pane 2 → Claude reviews recent diff
Pane 3 → test runner
Pane 4 → application logs
```

All related terminal state stays grouped in one workspace while the developer can continue other work.

## 11. Use Case E — Multiple repositories

Enterprise projects frequently span multiple repositories.

```text
Herdr
├─ Workspace: frontend
│   ├─ Codex
│   └─ dev server
│
├─ Workspace: backend
│   ├─ Codex
│   └─ tests
│
└─ Workspace: integration
    ├─ Claude reviewer
    └─ logs
```

This is primarily an operational benefit: persistent sessions and visible agent state reduce manual terminal management.

## 12. Agent states

Herdr can recognize many common coding agents and expose lifecycle/state information such as working, blocked, done, idle, or unknown depending on the agent/integration.

This allows a developer to focus attention where it is needed:

```text
Backend Agent     WORKING
Frontend Agent    BLOCKED  ← needs human input
Test Agent        DONE
Reviewer          IDLE
```

Instead of repeatedly opening every terminal, the developer can identify the agent that needs intervention.

## 13. CLI and local socket API

Herdr exposes a local socket API and CLI wrappers for automation.

Capabilities include operations around:

- workspaces
- tabs
- panes
- agent inspection
- agent prompting
- waiting for agent state
- reading terminal output
- sending terminal input
- event subscriptions
- integrations
- plugins

This makes Herdr useful not only as a human terminal UI but also as an **agent coordination substrate**.

## 14. Herdr Skill

Herdr publishes an agent skill that teaches a compatible coding agent how to interact with the Herdr environment.

Conceptually:

```text
Orchestrator Agent
      │
      │ understands Herdr controls
      ▼
Herdr Skill
      │
      ▼
Herdr CLI / Socket
      │
      ├─ create/split panes
      ├─ start agents
      ├─ read output
      ├─ prompt agents
      └─ wait for state
```

This can support workflows where one agent delegates tasks to other coding agents.

## 15. Herdr vs CUA

Herdr and Computer-Use Agent infrastructure solve different problems.

| Capability | Herdr | CUA |
|---|---|---|
| Persistent coding-agent terminals | Yes | Not the primary goal |
| Multi-agent session organization | Yes | Not the primary goal |
| Agent state visibility | Yes | Different abstraction |
| Terminal automation | Yes | Possible but not primary |
| Desktop GUI interaction | No | Yes |
| Mouse/keyboard app automation | No | Yes |
| Browser/legacy GUI operation | No | Yes |
| Isolated computer environment | No | Common CUA pattern |

A simple analogy:

```text
Codex / Claude = developer
Herdr          = developer workspace / operations room
CUA            = computer the agent can operate
```

## 16. Herdr + CUA

The two can be complementary.

For example, a development pipeline could look like:

```text
                   Orchestrator
                        │
                      Herdr
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
       Codex A        Codex B       Claude
       Backend          UI          Review
          │             │             │
          └─────────────┼─────────────┘
                        ▼
                    Application
                        │
                        ▼
                       CUA
                        │
                Real GUI workflow test
                        │
                 issue discovered
                        │
                        ▼
                  implementation agent
```

Herdr manages the coding agents; CUA performs computer/UI interaction.

## 17. Plugin risk

Herdr supports executable workflow plugins. This is useful but important from an enterprise-security perspective.

A plugin can execute code and interact with Herdr's runtime context. Therefore plugins should be treated like other third-party software rather than harmless configuration files.

Recommended enterprise policy:

```text
Default: plugins disabled / restricted

Approved plugin
    ↓
source review
    ↓
dependency review
    ↓
network behavior review
    ↓
version pinning
    ↓
approved internal distribution
```

Do not assume that a plugin inherits Herdr's security properties.

## 18. Remote access risk

Herdr supports detach/reattach workflows and remote access over SSH.

This can be useful on approved development machines or internal servers, but enterprise deployment should explicitly define:

- permitted SSH destinations
- inbound/outbound network rules
- authentication requirements
- whether remote attachment is allowed
- audit requirements

For a restricted workstation, remote functionality may be unnecessary and can be disabled or blocked by surrounding controls.

## 19. Updates and software supply chain

Enterprise deployment should avoid uncontrolled installation or update paths.

Instead of directly executing internet-hosted install scripts on production workstations, consider:

```text
Official release
      ↓
Security / engineering review
      ↓
Checksum / provenance verification
      ↓
Approved version
      ↓
Internal software repository
      ↓
Managed workstation deployment
```

Version pinning also makes troubleshooting and audits easier.

## 20. Recommended enterprise hardening

A conservative deployment profile could be:

```text
Herdr Core                  ALLOW
Approved Codex/Claude       ALLOW
Company AI gateway          REQUIRED
Company Git                 ALLOW
Local socket API            ALLOW

Third-party plugins         DENY by default
External SSH                DENY by default
Uncontrolled auto-update    DENY
Unapproved AI endpoints     DENY
Personal Git remotes        DENY where policy requires
```

The exact policy should be determined by the organization's security and IT teams.

## 21. Verification before adoption

Before allowing Herdr on an internal network, verify:

- The exact Herdr binary/version being deployed
- Installation/update network destinations
- Whether plugins are enabled
- Whether remote SSH is enabled or reachable
- Local socket permissions
- Session-state storage location
- Which executable is actually launched for Codex/Claude
- Whether proxy environment variables are inherited
- Whether company certificates are inherited
- Whether the approved AI gateway remains in use
- Whether direct provider endpoints are blocked
- Git credentials and repository access boundaries
- Logs and session files that may contain sensitive output

## 22. Suggested pilot

Start with a low-risk development repository and a small number of agents.

```text
Phase 1
Herdr + one approved coding agent

Phase 2
Two agents in separate panes

Phase 3
Implementation + reviewer pattern

Phase 4
Parallel workers

Phase 5
Orchestrator-driven delegation
```

At every phase measure:

- developer time saved
- agent completion rate
- blocked-agent frequency
- merge conflicts
- regression rate
- security/logging behavior
- network behavior

## 23. Example: enterprise AI development team

```text
                     Human Engineer
                           │
                           ▼
                     Orchestrator
                           │
                         HERDR
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
   Backend Agent      Frontend Agent     Test Agent
        │                  │                  │
        └──────────────────┼──────────────────┘
                           ▼
                     Review Agent
                           │
                           ▼
                    Human Approval
                           │
                           ▼
                      Merge / Deploy
```

The human remains the authority for requirements, risk acceptance, and final integration. Herdr reduces the operational burden of supervising multiple terminal-based agents.

## 24. Key takeaway

Herdr is most valuable when the bottleneck is no longer **"Can one AI agent write this code?"** but instead:

> **"How do I operate several coding agents at the same time without manually managing a pile of terminals?"**

For enterprise use, the recommended model is:

```text
Existing approved AI security path
            +
          Herdr
            +
controlled multi-agent workflows
            +
human review / Git controls
```

Herdr should be treated as an execution and coordination layer, not as a security boundary and not as a replacement for enterprise AI governance.

---

## References

- Herdr official site: https://herdr.dev/
- Herdr documentation: https://herdr.dev/docs/
- Herdr source repository: https://github.com/herdrdev/herdr
- Socket API: https://herdr.dev/docs/socket-api/
- Agents: https://herdr.dev/docs/agents/
- Persistence and remote access: https://herdr.dev/docs/persistence-remote/

## Security note

This document describes general architecture patterns. Do not commit confidential company architecture, internal URLs, credentials, source code, network details, customer information, or proprietary data to a public repository. Actual enterprise deployment requires approval under the organization's software, security, network, privacy, and AI-governance policies.
