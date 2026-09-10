---
name: llmwiki-research
description: Researches an explicit LLMWiki knowledge gap using external evidence, registers the evidence, and feeds it through normal ingest. Use when existing wiki evidence is insufficient and outside research is allowed.
---
# LLMWiki Research

## Goal
Fill an explicit knowledge gap with external evidence while preserving source provenance.

## Guardrail
Research starts from a recorded question or gap. Do not browse indefinitely just to make the wiki appear comprehensive.

## Procedure
1. State the gap and what evidence would resolve it.
2. Search authoritative and primary sources first when available.
3. Save or register selected evidence under `sources/` and the manifest according to project policy.
4. Ingest selected sources using the ingest skill.
5. Update the originating issue/topic/synthesis and mark the gap `resolved`, `partially-resolved`, or `open`.
6. Record why weaker or conflicting sources were not treated as decisive when material.
