---
name: core-circle-component-architect
description: >-
  Expert guide for creating, extending, and varianting UI components in CoreCircle.
  Use when creating new UI components, adding component variants/sizes/states,
  composing molecules from atoms, or optimizing token usage when developing in this monorepo.
---

# CoreCircle Component Architect & Reuse Skill

This skill provides step-by-step procedures, architectural conventions, and the unified Code Brain for creating and extending components in CoreCircle while maximizing component reuse and minimizing token footprint.

---

## High-Density Monorepo Blueprint
To keep context compact and eliminate directory exploration turns, consult:
- [Code Brain](./code-brain.md): Complete index of monorepo topology, 43 Atoms, Molecules, 520+ Icons, Theme Tokens, and Recipes.
- [Token Optimization Guide](./token-optimization-guide.md): Best practices for minimal token usage during development.

---

## Workflow 1: Extending an Existing Component with New Variants

When a requirement calls for a new look, size, color, or state for an existing component:

1. **Do Not Duplicate**: Locate the existing component in `packages/ui/src/components/atoms/[name]/` or `molecules/[name]/`.
2. **Update Variant Styles** (`[name].styles.ts`):
   - Add the new variant key and tailwind classes in `cva(...)`.
3. **Update Type Definitions** (`packages/ui/src/interface/.../[name].types.ts`):
   - Import `VariantProps<typeof [name]Variants>` and ensure the prop type reflects new options.
4. **Update Storybook Stories** (`packages/ui/src/stories/.../[name].stories.tsx`):
   - Add a story demonstrating the new variant.

---

## Workflow 2: Composing a New Molecule from Existing Atoms

When building higher-level UI widgets (e.g. MetricCard, SearchHeader, FilterToolbar, ProfileHeader):

1. **Identify Required Atoms**:
   - Check [Code Brain](./code-brain.md) to pick required Atoms (`Button`, `Badge`, `Avatar`, `TextInput`, `Select`, `Typography`, etc.) and Icons from `@core-circle/icons`.
2. **Create Molecule Directory**:
   - `packages/ui/src/components/molecules/[molecule-name]/`
   - `packages/ui/src/components/molecules/[molecule-name]/[molecule-name].tsx`
   - `packages/ui/src/components/molecules/[molecule-name]/[molecule-name].styles.ts`
3. **Create Interface**:
   - `packages/ui/src/interface/molecules/[molecule-name]/[molecule-name].types.ts`
4. **Export in Main Index**:
   - Add exports to `packages/ui/src/components/index.ts`.
5. **Add Mandatory Storybook Story**:
   - `packages/ui/src/stories/molecules/[molecule-name]/[molecule-name].stories.tsx`.
   - Import component relatively via `../../../components/molecules/[molecule-name]/[molecule-name]`.
   - Export default `meta` with `tags: ['autodocs']`.

---

## Workflow 3: Creating a New Atom Primitive

Only create a new Atom if no existing Atom can fulfill the foundational role:

1. Follow the standard atom template in [Code Brain](./code-brain.md).
2. Ensure strict `React.forwardRef` and HTML element attribute forwarding.
3. Use design tokens from `@core-circle/theme` in `cva()`.
4. Export in `packages/ui/src/components/index.ts`.
5. **Add Mandatory Storybook Story**:
   - `packages/ui/src/stories/atoms/[name]/[name].stories.tsx`.
   - Import component relatively via `../../../components/atoms/[name]/[name]`.
   - Export default `meta` with `tags: ['autodocs']`.
   - Storybook build (`npm run build-storybook`) is verified automatically in CI (`lint-and-build`).

---

## Workflow 4: Documentation Container Architecture (Accordion Benchmark)

Always consult `src/app/docs/src/containers/atoms-page/accordion/accordionContainer.tsx` and [DOCS_STANDARDS.md](../../../DOCS_STANDARDS.md) as the golden standard:

1. **Strict 6-File Anatomy**:
   ```text
   src/app/docs/src/
   ├── app/atoms/[name]/page.tsx                        # 1. Page route (Server Component)
   ├── containers/atoms-page/[name]/
   │   ├── [name]Container.tsx                          # 2. 5-Tab Client Component Container
   │   └── [name].styles.ts                             # 3. Colocated styles extending atomsPageStyles
   ├── constants/atoms-page/[name]/[name]Constants.tsx  # 4. Header, Breadcrumbs & PropsTable data
   ├── components/playground/[name]/[Name]Playground.tsx# 5. Interactive sandbox
   └── interface/containers/atoms/[name].types.ts       # 6. Centralized ContainerProps interface
   ```

2. **Directive Prologue (`'use client';` on Line 1)**:
   - Always put `'use client';` on **Line 1** before any imports. Placing imports before `'use client';` triggers ESLint `@typescript-eslint/no-unused-expressions` failures.

3. **Container Styles & Margins**:
   - Every container MUST have a colocated `[name].styles.ts` importing `atomsPageStyles`:
     ```ts
     import { atomsPageStyles } from '../atoms.styles';
     export const [name]PageStyles = atomsPageStyles;
     ```
   - Container component MUST import from `./[name].styles` as `s`.
   - Never write inline padding like `p-12 lg:p-20` on container wrappers.

4. **Centralized Container Interface**:
   - Always export `[ComponentName]ContainerProps` in `src/app/docs/src/interface/containers/atoms/[name].types.ts`.
   - Never type container props as `any`.

5. **Icon Verification**:
   - Only import icons that actually exist in `@core-circle/icons` (`packages/icons/index.ts`).
   - Common traps: Use `Cloud` not `Server`, `UserIcon` not `User`, `DocumentText` not `FileText`, `AudioWaveform` not `Music`.

6. **5 Standard Tabs Order**:
   - **`Theming`** (Tab 1, `Palette` icon, default active): 5 real-world production themes (`w-full` previews).
   - **`Variants`** (Tab 2, `Layers` icon): 10+ variants in `DocSection`s (`w-full` previews).
   - **`Playground`** (Tab 3, `Play` icon): Interactive playground controls with live preview and code generator.
   - **`Mock Code`** (Tab 4, `CodeIcon`): Dynamic backend API payload and consumer component.
   - **`Overview`** (Tab 5, `Info` icon): Quick usage snippet and `PropsTable`.

7. **Zero Ad-Hoc Dark Containers**:
   - Always use clean surface tokens (`bg-white` or `bg-core-circle-bg-surface`, `border-core-circle-border-main`, `text-core-circle-text-main`) in showcase cards.
   - Never introduce localized dark wrappers (`bg-slate-900`, `bg-slate-950`, `dark:bg-slate-900`), which cause black-on-black invisible text and inverted hover states. Full dark mode will be ported globally at the root level once the webapp is completed.
