---
name: mobile-product-design
description: Design and review mobile app experiences with platform-aware UX, accessibility, interaction, visual hierarchy, and task-first product design. Use for iOS/Android/React Native/Expo screens and flows before or after implementation.
---

# Mobile Product Design

Design mobile products around user tasks rather than isolated screens. This skill complements `webapp-product-audit`: this skill defines and reviews the intended mobile experience; the audit skill verifies the implemented product through evidence-backed journeys.

## Principles

1. Start from user goal, context, constraints, and expected state transition.
2. Prefer mobile-native interaction patterns over desktop UI compressed onto a phone.
3. Treat one-hand use, interruption, loading, failure, empty state, keyboard, safe area, accessibility, and recovery as first-class states.
4. Separate functional correctness, usability, accessibility, platform fit, and visual polish.
5. Do not redesign solely for novelty. Every visual decision should improve hierarchy, comprehension, confidence, efficiency, or product identity.

## Workflow

### 1. Frame the journey
Record persona/context, trigger, user goal, starting state, essential states, completion state, failure/recovery paths, and high-risk moments.

### 2. Define interaction model
Review navigation depth, primary action placement, thumb reach, touch targets, gestures and alternatives, keyboard behavior, focus, feedback, haptics where useful, destructive confirmations, offline/loading behavior, and interruption/resume behavior.

### 3. Define visual system
Specify hierarchy, typography roles, spacing rhythm, component states, semantic color usage, imagery strategy, motion purpose, and design tokens. Avoid generic AI-dashboard aesthetics and decorative complexity without product value.

### 4. Platform and accessibility review
Check iOS/Android conventions, safe areas, Dynamic Type/font scaling, screen-reader labels/order, contrast, motor accessibility, Reduce Motion, localization expansion, and device-size adaptivity.

### 5. Review implementation
For each screen/flow classify findings as Blocker / High / Medium / Polish. Tie each issue to a user task and propose a concrete correction plus retest condition.

## Cooking-mode extension
For cooking/recipe products explicitly evaluate wet/occupied hands, one-hand reach, glanceability at distance, large next/back controls, screen-awake expectations, voice-input feedback, timer visibility, step recovery, ingredient/amount readability, serving conversion, and temporary taste adjustments.

## Output
Return: journey map, essential states, interaction risks, screen-level findings, accessibility/platform findings, design-system recommendations, and prioritized implementation changes.

## Sources to consult when deeper guidance is needed
- RubenGlez/mobile-design: mobile design/review process, platform patterns, accessibility, motion, React Native guidance.
- Apple Human Interface Guidelines and Android Material guidance for current platform behavior.
- Anthropic frontend-design concepts for deliberate visual direction; do not let visual novelty override mobile usability.
