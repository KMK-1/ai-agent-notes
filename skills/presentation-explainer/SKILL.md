---
name: presentation-explainer
description: Create or revise high-quality explanatory PowerPoint decks and presentation materials. Use for explanation decks, technical presentations, internal briefings, training decks, process explanations, system overviews, architecture explanations, feature introductions, or PPTX materials intended to help an audience understand a topic. Combine message-first slide design with robust PPTX generation, local company-template reuse, and visual QA.
---

# Presentation Explainer

Create presentation material that is easy to understand, visually structured, technically reliable, and—when local reference templates exist—consistent with the user's organization style.

This skill combines:
1. **Message and slide design discipline** inspired by hunkim/slide-skill.
2. **PPTX production and QA discipline** inspired by Anthropic's PPTX skill.
3. **Local template/reference adaptation** so users can drop company PPT/POTX files into the skill folder and have the agent inspect and reuse them automatically.

The target is an **explanation deck**, not a pitch deck. A reader should understand most of the material without hearing the presenter while slides remain visually scannable.

# Local folder contract

The skill may be installed locally with this structure:

```text
presentation-explainer/
├─ SKILL.md
├─ templates/
│  ├─ README.md
│  ├─ company-template.pptx       # optional
│  ├─ company-template.potx       # optional
│  └─ examples/                   # optional real internal examples
│     ├─ good-example-01.pptx
│     └─ good-example-02.pptx
├─ references/
│  └─ company-style.md            # optional explicit style rules
└─ output/                         # optional generated decks
```

The user should be able to replace/add files under `templates/` without editing this SKILL.md.

## Template discovery — mandatory first step

Before creating or substantially redesigning a presentation, inspect the skill's local directory when filesystem access is available.

Look for, in priority order:

1. `templates/*.potx`
2. `templates/*.pptx`
3. `templates/examples/*.pptx`
4. `references/company-style.md`

If one or more template/reference files exist, treat them as the preferred visual source of truth unless the user explicitly requests another style.

Do **not** require the user to mention the template every time.

If no local template exists, use the default Presentation Explainer design rules.

If multiple candidate templates exist and no explicit default is specified:
- prefer a `.potx` or clearly named `company-template.*`
- otherwise choose the template whose aspect ratio and layout coverage best match the requested deck
- use example decks primarily to infer style, not as content sources
- ask the user only when materially different corporate styles make the choice genuinely ambiguous

## Local template safety

Company/reference files may contain confidential information.

- Treat local templates and examples as local source material.
- Do not upload, publish, or externally search their contents unless the user explicitly requests it.
- Reuse visual conventions, layouts, masters, theme information, and appropriate reusable components.
- Do not copy confidential example text, numbers, names, project identifiers, screenshots, or data into a new deck unless the user requested that content.

# Company-style extraction

When a local company template or example deck exists, inspect it before building slides.

Extract or infer:
- slide size / aspect ratio
- theme colors
- background colors
- title/subtitle/body typography
- font sizes and weight hierarchy
- title position
- content margins
- logo placement
- header/footer conventions
- page numbering
- section-divider style
- common grids and alignment
- table styling
- chart styling
- shape fills/outlines
- corner radii
- connector/arrow style
- callout/annotation style
- image treatment
- icon style
- whitespace/density conventions
- common slide layouts

Separate **brand constraints** from **content layouts**.

Brand constraints should normally be preserved across the whole deck. Content layouts may be adapted to fit the explanation.

## Style precedence

When instructions conflict, use this order:

1. explicit user request
2. supplied/local corporate template and `company-style.md`
3. readability and correctness
4. this skill's generic design rules

Never violate readability merely to imitate a bad example. Preserve corporate identity while correcting obvious overflow, clipping, alignment, or accessibility problems.

# Core rule

**One primary point per slide.**

Before building a slide, write its primary point as one sentence. The title should normally express that point as a takeaway rather than merely naming a topic.

For explanatory material, retain enough supporting detail for standalone comprehension.

> One primary message + enough supporting evidence to understand it + no unrelated secondary message.

# Operating modes

### Explainer mode — default
Use for technical explanations, internal materials, training, process descriptions, architecture, product/system introductions, and documentation-like presentations.

Optimize for comprehension without narration, logical progression, meaningful diagrams, labels/annotations, moderate information density, and easy editing.

### Presenter mode
Use when the user explicitly wants a live-presentation deck. Reduce body text and increase visual hierarchy.

### Reference-heavy mode
Use when the deck will mainly be read/circulated. Allow more detail while preserving one primary point per slide; move deep detail to appendix when practical.

# Workflow

## Phase 0 — Discover local style assets

Inspect `templates/` and `references/` first.

If assets exist:
1. identify the primary template
2. inspect its visual appearance and slide structure
3. extract the design system
4. identify reusable masters/layouts/components
5. record any constraints needed during generation

Do not blindly clone one existing slide repeatedly.

## Phase 1 — Understand the communication problem

Identify audience, knowledge level, purpose, desired outcome, source material, slide count/duration if given, standalone-readability requirement, and brand/template constraints.

Infer obvious constraints instead of asking unnecessary questions.

## Phase 2 — Build the explanation model

Choose a logical teaching structure.

**Concept:** Context → definition → components → mechanism → example → takeaway

**Process:** Why → inputs → stages → decisions → outputs → exception/example

**System:** Purpose → context → architecture → component roles → data/control flow → interfaces → scenario

**Problem / improvement:** Current state → problem → cause → changed mechanism → improved state → evidence

**Feature:** Need → feature → how it works → user flow → benefit → limitations/conditions

Do not force every deck into Problem → Solution storytelling.

## Phase 3 — Create a slide blueprint

Define every slide with:
- `slide_number`
- `primary_point`
- `takeaway_title`
- `supporting_content`
- `visual_form`
- `template_layout_or_reference`
- `evidence_or_source`
- `notes_or_appendix_candidate`

Check narrative continuity before implementation.

# Visual-form router

| Information | Preferred form |
|---|---|
| Definition / single concept | concept diagram or focal statement |
| Sequential process | flow diagram or timeline |
| System/components | architecture diagram |
| Interaction between actors | sequence diagram |
| Hierarchy | layered diagram / tree |
| A vs B | side-by-side comparison |
| Before vs after | mirrored comparison |
| Multiple capabilities | structured card/row grid |
| Numeric trend | chart |
| KPI / important number | number callout |
| Cause and effect | causal flow |
| Decision logic | decision tree / flowchart |
| UI/product behavior | screenshot + annotations |
| Technical mechanism | annotated mechanism diagram |
| Dense detail | appendix / structured reference slide |

If a mechanism is understood faster as a diagram than prose, draw the mechanism.

# Slide design rules

## Titles communicate conclusions
Prefer takeaway titles such as `Security Access protects restricted diagnostic functions` over generic labels such as `Security Access` when the conclusion is known.

## One point does not mean one object
A diagram, annotations, short explanation, and evidence may coexist when all support the same point.

## Use hierarchy instead of deletion
Solve density in this order:
1. remove redundancy
2. convert prose into structure/diagram
3. group related information
4. demote caveats/sources
5. move deep detail to appendix
6. split the slide

Never solve complexity by shrinking fonts or squeezing spacing.

## Prefer visual explanation
Prefer editable shapes, connectors, diagrams, charts, and annotations over decorative imagery. Use screenshots when they are evidence or explain an interface.

## Preserve the corporate design system
When a local template exists, inherit its typography, palette, margins, title treatment, footer conventions, and recognizable component styling.

New diagrams do not need to copy old layouts exactly, but they should look as though they belong to the same organization.

## Favor whitespace and alignment
Whitespace is structural. Align related elements precisely. Similar objects should share dimensions and spacing.

# Diagram rules

For architecture/process/technical slides:
- show direction explicitly
- label non-obvious arrows
- distinguish data/control/state/grouping when relevant
- use consistent shapes for consistent semantic roles
- minimize crossing connectors
- place annotations close to their targets
- highlight the focal path while retaining context

A diagram must answer a question, not merely decorate the slide.

# PPTX implementation

When a local template exists, prefer **template-aware generation** over recreating its appearance from memory.

Where tooling permits:
- preserve slide dimensions
- preserve theme/master/layout information
- reuse appropriate existing layouts
- preserve corporate fonts when installed
- reuse approved footer/logo/page-number treatment
- create new editable content on top of the template system

Do not assume every source slide must be reused. Choose the best layout for each blueprint slide.

When creating from scratch, establish page size/design tokens first and create reusable helpers for common components.

Use the environment's supported PPTX tooling; do not hard-code unavailable dependencies.

# Visual QA — mandatory

Saving successfully is not sufficient.

When rendering is available, render every slide and inspect:
- overlaps
- clipping/overflow
- awkward wrapping
- off-slide elements
- alignment/spacing
- hierarchy
- contrast
- tiny labels
- connector paths
- excessive density
- placeholders
- repetitive layouts
- inconsistent semantics
- deviations from the discovered corporate style

For every slide ask:
1. What is the single primary point?
2. Is it obvious from title and composition?
3. Does every major element support it?
4. Would a diagram communicate text faster?
5. Is enough context present without narration?
6. Does this slide look like it belongs to the same company template?

## Fix-and-verify loop
1. generate/edit
2. render
3. inspect critically
4. list defects
5. fix defects
6. re-render affected slides
7. inspect again

Complete at least one fix-and-verify cycle when rendering tools are available. Never claim visual verification if rendering was unavailable.

# Accuracy and evidence

Never invent facts, numbers, citations, or source claims. Preserve important caveats/conditions. Example decks are style references unless the user explicitly asks to reuse their content.

# Editing existing decks

Do not automatically rebuild an existing deck. Diagnose message, structure, layout, density, consistency, and technical defects first. Preserve good corporate layouts and make the smallest changes that materially improve comprehension unless redesign is requested.

# Output expectations

For deck-generation tasks, produce the actual `.pptx` when supported. The result should feel like a polished company technical explainer—not a document pasted onto slides and not a theatrical pitch deck.

# Final shipping checklist

- [ ] local `templates/` and `references/` were checked
- [ ] corporate template/style was applied when present
- [ ] confidential example content was not unintentionally copied
- [ ] every slide has one primary point
- [ ] slide sequence forms a coherent explanation
- [ ] diagrams are used where they outperform prose
- [ ] enough standalone context remains
- [ ] no tiny-font density workaround was used
- [ ] layouts vary with content while preserving the corporate design system
- [ ] sources/caveats are retained where needed
- [ ] placeholders are gone
- [ ] visual QA was performed when available
- [ ] at least one fix-and-verify cycle was completed when possible
- [ ] final PPTX remains editable where practical

# Attribution / design basis

This custom skill synthesizes principles from Anthropic's public `pptx` skill and hunkim's `slide-skill`, adapted for explanatory/technical materials and local corporate-template reuse.
