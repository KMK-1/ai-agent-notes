# Local Presentation Templates

Drop your local company presentation assets into this folder after installing the skill.

Recommended local structure:

```text
templates/
├─ company-template.pptx   # preferred default PowerPoint template
├─ company-template.potx   # use this instead when an official POTX exists
└─ examples/
   ├─ good-example-01.pptx
   └─ good-example-02.pptx
```

The `presentation-explainer` skill is instructed to check this folder automatically before creating or redesigning a deck.

## What to put here

Best option: an official blank company PPT/POTX template.

Optional: 1–3 well-made internal presentations under `examples/`. These are used to infer visual conventions such as title placement, typography, spacing, tables, diagrams, callouts, and information density.

## Important

Company files may be confidential. You do **not** need to commit them to GitHub.

A good workflow is:

1. clone/pull the skill to your local machine
2. copy your company template into this local `templates/` folder
3. keep the confidential PPT/POTX local only
4. ask the agent to create the presentation normally

The skill will prefer the local company template when it can access the filesystem.

If you want to ensure templates never get committed, add these patterns to your local repository `.git/info/exclude` or `.gitignore`:

```gitignore
skills/presentation-explainer/templates/*.pptx
skills/presentation-explainer/templates/*.potx
skills/presentation-explainer/templates/examples/*.pptx
```

Keep this README tracked so future users know where local templates belong.
