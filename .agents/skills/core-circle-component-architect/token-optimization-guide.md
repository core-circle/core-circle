# Token Optimization Guide for CoreCircle

This guide provides strategies to keep LLM context size minimal while maximizing output accuracy and speed.

---

## 1. Why Token Optimization Matters

Every token sent in a prompt or returned in a response consumes context window limits, adds latency, and increases cost. In component libraries, sending entire component definitions when you only need a prop interface wastes thousands of tokens.

---

## 2. Token-Saving Strategies

### Strategy A: Progressive Disclosure (Use the Code Brain First)
- **Do not read multiple full component files** just to check what props or variants are supported.
- **Consult `code-brain.md`** first. It contains the prop signatures and variant lists of all 43 atoms, 520+ icons, design tokens, and recipes in a compact single-source map.
- Only view a specific `[name].types.ts` or `[name].styles.ts` file if you need exact deep type inference.

### Strategy B: Selective Targeting with Single File Edits
- When adding a variant or extending a component, only read and modify `[name].styles.ts` and `[name].types.ts`.
- Avoid rewriting unchanged files or reproducing entire multi-hundred line files when adding lines to a `cva()` configuration.

### Strategy C: Reusable Component Compositions
- Composing existing atoms (`<Card>`, `<Typography>`, `<Badge>`, `<Button>`) means you only generate ~30 lines of clean orchestration code instead of ~300 lines of custom HTML/CSS and accessibility handling from scratch.

### Strategy D: Standardized Barrel Imports
- Always import from `@core-circle/ui` or `@core-circle/icons` at the consumer level rather than deep internal paths in consumer apps (`src/app/docs`).

### Strategy E: No Automatic Builds or Tests
- **Never trigger automatic build, test, or lint runs** after code edits.
- Only run `npm run build`, `npm run test`, or `npm run lint` when the user specifically requests it.
