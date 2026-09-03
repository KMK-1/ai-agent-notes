---
name: presentation-explainer
description: Create or revise high-quality explanatory PowerPoint decks and presentation materials. Use whenever the user asks for an explanation deck, technical presentation, internal briefing, training deck, process explanation, system overview, architecture explanation, feature introduction, or a .pptx intended to help an audience understand a topic. Combine message-first slide design with robust PPTX generation and visual QA. Prefer clarity and self-contained understanding over pitch-deck theatrics.
---

# Presentation Explainer

Create presentation material that is easy to understand, visually structured, and technically reliable.

This skill combines two complementary approaches:

1. **Message and slide design discipline** inspired by hunkim/slide-skill: decide what each slide must communicate before designing it.
2. **PPTX production and QA discipline** inspired by Anthropic's PPTX skill: build/edit the actual deck, render it, inspect it visually, fix defects, and verify again.

The target is an **explanation deck**, not a pitch deck. A reader should be able to understand most of the material even without hearing the presenter, while the slides must still remain visually scannable.

## Core rule

**One primary point per slide.**

Before building a slide, write its primary point as one sentence. The title should normally express that point as a takeaway rather than merely naming a topic.

However, unlike a stage-only presentation, explanatory material may contain enough supporting detail to remain understandable when read independently. Do not delete necessary context merely to make a slide sparse.

Use this balance:

> One primary message + enough supporting evidence to understand it + no unrelated secondary message.

## Operating modes

Determine the mode before planning the deck.

### Explainer mode — default

Use for technical explanations, internal materials, training, process descriptions, architecture, product/system introductions, and documentation-like presentations.

Optimize for:
- comprehension without narration
- logical progression
- diagrams over prose when useful
- meaningful labels and annotations
- moderate information density
- easy later editing

### Presenter mode

Use only when the user explicitly wants a live-presentation deck.

Optimize for:
- faster visual comprehension
- less body text
- stronger visual hierarchy
- speaker-led explanation

### Reference-heavy mode

Use when the deck will mainly be read or circulated rather than presented.

Allow more detail, but preserve one primary point per slide. Move deep technical material to appendix slides when practical.

## Workflow

Follow these phases in order.

### Phase 1 — Understand the communication problem

Identify:
- audience
- audience knowledge level
- purpose
- desired outcome
- source material
- required slide count or presentation duration, if provided
- whether the deck must work without narration
- brand/template constraints

Do not begin slide construction before these are reasonably understood. Infer obvious constraints from context instead of asking unnecessary questions.

### Phase 2 — Build the explanation model

Reduce the subject into a logical teaching sequence.

Common structures include:

**Concept**
Context → definition → components → mechanism → example → takeaway

**Process**
Why it exists → inputs → stages → decisions → outputs → exception/example

**System**
Purpose → context → architecture → component roles → data/control flow → interfaces → scenario

**Problem / improvement**
Current state → problem → cause → changed mechanism → improved state → evidence

**Feature introduction**
Need → feature → how it works → user flow → benefit → limitations/conditions

Use the structure that best matches the subject. Do not force every deck into Problem → Solution storytelling.

### Phase 3 — Create a slide blueprint

Before generating slides, define every slide using:

- `slide_number`
- `primary_point`
- `takeaway_title`
- `supporting_content`
- `visual_form`
- `evidence_or_source`
- `notes_or_appendix_candidate`

Example:

```text
Slide 04
Primary point: Security Access prevents protected diagnostic services from being executed without authorization.
Takeaway title: Protected UDS services require Security Access first
Supporting content: Seed request, seed response, key calculation, key response
Visual form: sequence diagram
Evidence/source: UDS specification / provided source
```

Check the complete blueprint for narrative continuity before implementation.

## Visual-form router

Choose a visual form based on the information, not on whichever layout is easiest to code.

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
| KPI / one important number | number callout |
| Cause and effect | causal flow |
| Decision logic | decision tree / flowchart |
| UI or product behavior | screenshot + annotations |
| Technical mechanism | annotated mechanism diagram |
| Dense supporting detail | appendix or structured reference slide |

If a mechanism can be understood more quickly as a diagram than as prose, draw the mechanism.

## Slide design rules

### 1. Titles communicate conclusions

Prefer:
- `Security Access protects restricted diagnostic functions`
- `Three input channels converge into one task pipeline`

Avoid weak topic labels when a takeaway is known:
- `Security Access`
- `System Architecture`
- `Process`

Topic labels are acceptable for section dividers.

### 2. One primary point does not mean one object

A slide may contain a diagram, annotations, a short explanation, and evidence if all of them support the same point.

Split a slide when two independent conclusions compete for attention.

### 3. Use hierarchy instead of deletion

For explanatory decks, solve density in this order:

1. remove redundancy
2. convert prose into structure/diagram
3. group related information
4. demote caveats/sources to footnotes
5. move deep detail to appendix
6. split the slide

Never solve complexity by simply shrinking fonts or tightening spacing.

### 4. Prefer visual explanation

Prefer native shapes, connectors, diagrams, charts, and clean annotations over decorative imagery.

Use screenshots when the screenshot itself is evidence or when explaining an interface. Crop to the relevant region and annotate only what matters.

Avoid decorative stock imagery that does not improve understanding.

### 5. Maintain a coherent design system

Use consistent:
- page margins
- title positions
- type scale
- spacing rhythm
- corner radii
- line weights
- icon style
- diagram grammar
- color meaning

Use a restrained palette. Assign accent colors semantically where possible rather than randomly changing colors between slides.

### 6. Favor whitespace and alignment

Whitespace is structural. Do not fill empty regions merely because they are empty.

Align related elements precisely. Similar objects should share dimensions, spacing, and baseline relationships.

### 7. Preserve readability

Do not rely on tiny text. If text becomes too small to read comfortably in the intended context, restructure or split the content.

Keep body copy concise but complete enough for the selected operating mode.

## Explanation-specific diagram rules

For architecture, process, and technical slides:

- show direction explicitly
- label arrows when their meaning is not obvious
- distinguish data flow, control flow, state, and grouping when relevant
- use consistent shapes for consistent semantic roles
- minimize crossing connectors
- place annotations close to the object they explain
- highlight the current/focal path while keeping context visible
- avoid diagrams that require a legend for trivial meanings

A diagram must answer a question, not merely decorate the slide.

## Deck-level rhythm

Do not repeat the same layout on every slide.

Vary composition according to content while preserving the same visual language. A healthy explainer deck may alternate among:
- focal concept
- diagram
- comparison
- process
- annotated example
- structured summary

Use section dividers only when they materially improve navigation.

## PPTX implementation

When an existing template or presentation is provided:

1. inspect the presentation visually
2. inspect its text/content structure
3. identify reusable layouts and visual conventions
4. map blueprint slides to appropriate layouts
5. preserve brand language unless the user requests redesign
6. complete structural changes before fine-grained content editing
7. replace all placeholder content
8. render and visually inspect the result

When creating from scratch:

1. establish page size and design tokens first
2. create reusable helpers for titles, footnotes, cards, diagrams, and common components
3. build slides from the approved blueprint
4. use varied content-appropriate layouts
5. keep objects editable whenever practical

Use the environment's supported PPTX generation/editing tooling. Do not hard-code a dependency on a tool that is unavailable.

## Visual QA — mandatory

A PPTX is not finished when the file saves successfully.

Always perform a visual verification loop whenever the environment supports rendering.

### QA pass

Render every slide to images and inspect for:
- overlapping elements
- clipped text
- text overflow
- awkward wrapping
- elements outside slide bounds
- inconsistent alignment
- uneven spacing
- weak hierarchy
- low contrast
- unreadably small labels
- confusing connector paths
- excessive density
- accidental placeholder content
- repetitive layouts
- inconsistent visual semantics

Also ask for each slide:

1. What is the single primary point?
2. Is that point obvious from the title and composition?
3. Does every major element support it?
4. Would a diagram communicate any text faster?
5. Can supporting detail be understood without the presenter?
6. Is anything competing unnecessarily for attention?

### Fix-and-verify loop

1. generate/edit
2. render
3. inspect critically
4. list defects
5. fix defects
6. re-render affected slides
7. inspect again

Complete at least one fix-and-verify cycle for generated decks when rendering tools are available. If rendering is unavailable, explicitly perform structural checks and do not claim visual verification occurred.

## Complexity recovery

When feedback says a slide is too complex:

Do NOT:
- shrink all fonts
- squeeze margins
- reduce line spacing until content fits
- hide information in unreadable footnotes

Instead:
- restate the primary point
- identify secondary messages
- convert prose into a diagram
- remove repetition
- move specialist detail to appendix
- split the slide if necessary

## Accuracy and evidence

Never invent technical facts, numbers, citations, or source claims to make a slide look complete.

Preserve important caveats and conditions. Put secondary evidence in a quiet footer or appendix when it should remain available without competing with the main message.

For quantitative slides, make the visual conclusion consistent with the underlying numbers.

## Editing existing decks

When asked to improve an existing deck, do not automatically rebuild it from scratch.

First diagnose:
- message problems
- structure problems
- layout problems
- density problems
- visual inconsistency
- technical PPTX defects

Preserve good content and layouts. Make the smallest set of changes that materially improves comprehension unless the user requests a redesign.

## Output expectations

For a deck-generation task, produce the actual `.pptx` when the environment supports it.

When useful, also provide a concise blueprint or summary of major design decisions, but do not substitute a textual outline for the requested presentation.

The final deck should feel like a well-designed technical explainer, not a document pasted onto slides and not a theatrical pitch deck.

## Final shipping checklist

Before delivery confirm:

- [ ] audience and purpose are reflected in the deck
- [ ] every slide has one primary point
- [ ] takeaway titles are used where appropriate
- [ ] slide sequence forms a coherent explanation
- [ ] diagrams are used where they outperform prose
- [ ] necessary standalone context remains available
- [ ] no slide contains unrelated secondary messages
- [ ] no tiny-font workaround was used to solve density
- [ ] layouts vary with content while preserving one design system
- [ ] sources/caveats are retained where necessary
- [ ] placeholders are gone
- [ ] visual QA was performed when rendering was available
- [ ] at least one fix-and-verify cycle was completed when possible
- [ ] the final PPTX opens and remains editable where practical

## Attribution / design basis

This custom skill synthesizes principles from:

- Anthropic's public `pptx` skill: PPTX creation/editing workflows, varied layouts, rendering, and iterative visual QA.
- hunkim's `slide-skill`: one-point-per-slide discipline, significance/structure/simplicity, visual explanation, and complexity reduction.

It intentionally adapts those principles for **explanatory and technical materials**, where standalone comprehension is more important than aggressively minimizing slide text.
