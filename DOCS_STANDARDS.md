# CoreCircle Documentation Design & Coding Standards

This document establishes the **official design and coding standard** for building and upgrading component showcase pages within the documentation webapp (`src/app/docs`).

Every documentation page in CoreCircle must follow the **Canonical Accordion Architecture** (`src/app/docs/src/containers/atoms-page/accordion/`). This ensures a unified developer experience, consistent responsive layouts, zero CSS collisions, and maximum reuse of our design system primitives (`@core-circle/ui`, `@core-circle/theme`, and `@core-circle/icons`).

---

## 1. Golden Architectural Principles

1. **The Canonical Golden Benchmark**: Always treat `Accordion` as the definitive reference implementation:
   - Page route: `src/app/docs/src/app/atoms/accordion/page.tsx`
   - Container component: `src/app/docs/src/containers/atoms-page/accordion/accordionContainer.tsx`
   - Isolated styles: `src/app/docs/src/containers/atoms-page/accordion/accordion.styles.ts`
   - Constants & Props data: `src/app/docs/src/constants/atoms-page/accordion/accordionConstants.tsx`
   - Interactive Playground: `src/app/docs/src/components/playground/accordion/AccordionPlayground.tsx`
   - TypeScript interface: `src/app/docs/src/interface/containers/atoms/accordion.types.ts`
2. **Zero Redundancy (Reuse Before Creating)**:
   - **Never** write raw HTML elements (`<button>`, `<h1>`, `<input>`, `<p>`, `<span>`) when a CoreCircle component exists.
   - Use `<Typography>`, `<Breadcrumb>`, `<Tabs>`, `<Badge>`, `<Button>`, `<Card>`, `<Select>`, `<Checkbox>` from `@core-circle/ui`.
   - Use icons strictly from `@core-circle/icons` (520+ icons).
3. **Style Isolation**:
   - Container layout styling must **never** be hardcoded with ad-hoc padding (e.g. `p-12 lg:p-20`).
   - All page layouts must reference the standardized `atomsPageStyles` from `../atoms.styles.ts`.
4. **Dark Mode & Design Tokens**:
   - Use `@core-circle/theme` tokens (`bg-core-circle-bg-page`, `text-core-circle-text-main`, `rounded-core-circle-xl`, `font-core-circle-bold`).
   - Never hardcode arbitrary hex colors like `#2563eb` or `#ffffff` in containers or pages.
5. **Data-Driven Declarative Containers (`DocPageShell` & Zero Inline Strings)**:
   - Containers must delegate layout, breadcrumbs, header, and tabs navigation to `<DocPageShell>` (`src/app/docs/src/components/doc-page-shell/docPageShell.tsx`) utilizing `DOCS_CANONICAL_TABS` (`src/app/docs/src/constants/docs-tabs-constant.tsx`).
   - Container files must maintain **zero hardcoded strings** (IDs, titles, descriptions, labels). All theme configurations (`[NAME]_THEME_CONFIGS`), variant groups (`[NAME]_VARIANT_GROUPS`), section descriptors (`[NAME]_PLAYGROUND_SECTION`, `[NAME]_MOCK_SECTION`, `[NAME]_OVERVIEW_SECTION`), and code snippets must be defined in `[name]Constants.tsx`.
   - Containers render showcase tabs via declarative `.map()` loops, reducing container size from 600+ lines to ~100–140 lines and ensuring a single source of truth for all content.

---

## 2. Directory & File Structure

Every component documentation feature must follow this strict 6-file anatomy:

```text
src/app/docs/
├── src/
│   ├── app/atoms/[component-name]/
│   │   └── page.tsx                          # 1. Next.js App Router Page (Server Component)
│   ├── containers/atoms-page/[component-name]/
│   │   ├── [component-name]Container.tsx     # 2. Main Container with 5 Canonical Tabs (Client Component)
│   │   └── [component-name].styles.ts        # 3. Isolated CSS styles extending atomsPageStyles
│   ├── constants/atoms-page/[component-name]/
│   │   └── [component-name]Constants.tsx     # 4. Header, Breadcrumbs, PropsTable & Theming Data
│   ├── components/playground/[component-name]/
│   │   ├── [component-name]Playground.tsx    # 5. Interactive Playground Component
│   │   └── [component-name]Playground.styles.ts
│   └── interface/containers/atoms/
│       └── [component-name].types.ts         # 6. Container Props TypeScript Interface
```

### 2.1 Mandatory Registry Card Indexing (`ATOM_CARDS`)

In addition to the 6 individual showcase files, **every new atom MUST be registered in `ATOM_CARDS`** in `src/app/docs/src/constants/atoms-page/atoms-page-constant.ts`:

```ts
export const ATOM_CARDS = [
  ...{
    title: '[ComponentName]',
    description: 'Clear, concise 1-sentence summary of component capabilities.',
    href: '/atoms/[component-name]',
    icon: [VerifiedIconName],
  },
];
```

> [!IMPORTANT]
> A component is **not complete** until it is registered in `ATOM_CARDS`. Without this registration, the component will be omitted from the `/atoms` catalog grid and cannot be found via the docs search bar.

---

## 3. The 5-Tab Canonical Content Architecture

Every container must provide the standard **5-Tab Navigation** in this exact order using `<Tabs items={tabItems} variant="underline" size="lg" className="w-full" />`:

```text
┌──────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
│ 🎨 Theming   │ 🥞 Variants  │ ▶ Playground │ 💻 Mock Code │ ℹ Overview   │
└──────────────┴──────────────┴──────────────┴──────────────┴──────────────┘
```

### Tab 1: `Theming` (Default Active Tab)

- **ID & Icon**: `id: 'theming'`, icon: `<Palette size={16} />` from `@core-circle/icons`.
- **Purpose**: Show **5 realistic, enterprise production use cases** demonstrating how the component adapts to various industries and aesthetic vibes.
- **Structure**:
  - Exactly 5 `<DocSection>` blocks.
  - Each section contains `<ComponentPreview title="..." code="...">` wrapping the rendered component.
  - Theme Examples:
    1. _Enterprise Security & Audit / FinTech Report Theme_
    2. _E-Commerce & Billing / SaaS Tier Theme_
    3. _Developer API & Terminal Log Theme_
    4. _Healthcare / Patient Care Profile Theme_
    5. _Executive Dashboard / Analytics Theme_
  - Must take full layout width (`max-w-5xl`, `w-full`).

### Tab 2: `Variants`

- **ID & Icon**: `id: 'variants'`, icon: `<Layers size={16} />` from `@core-circle/icons`.
- **Purpose**: Systematically exhibit all component variants, sizes, shapes, and states.
- **Requirement**: **Minimum 10 distinct variants** grouped cleanly in `<DocSection>` blocks.
- **Coverage**:
  - Visual variants (e.g. `outline`, `filled`, `glassmorphic`, `gradient`, `ghost`, `pill`, `floating`).
  - Size dimensions (`sm`, `md`, `lg`).
  - Interactive states (disabled, active, loading, error).
  - Slot configurations (leading icon, trailing icon, avatar, badges).

### Tab 3: `Playground`

- **ID & Icon**: `id: 'playground'`, icon: `<Play size={16} />` from `@core-circle/icons`.
- **Purpose**: An interactive sandbox where developers can dynamically tweak component props and see live updates.
- **Strict Primitive Usage (Zero Raw HTML Elements)**:
  - All playground form controls MUST strictly use design system primitives from `@core-circle/ui`:
    - Dropdowns: `<Select label="..." value={...} onChange={(e) => ...} options={[...]} fullWidth />`
    - Text / String values: `<TextInput label="..." value={...} onChange={(e) => ...} fullWidth />`
    - Checkboxes: `<Checkbox label="..." checked={...} onChange={(checked) => ...} />`
    - Switches: `<Switch label="..." checked={...} onChange={(checked) => ...} />`
    - Sliders: `<SliderInput label="..." value={...} onChange={(val) => ...} />`
  - **Never** render raw HTML `<select>`, `<input>`, or `<label>` elements in playgrounds.
- **Architecture & Layout Standard (Accordion Benchmark)**:
  - Every playground MUST follow the unified layout architecture of `AccordionPlayground.tsx` and `accordionPlaygroundStyles`:
    - **Unified card container**: `<div className={s.container}>` (`bg-white rounded-core-circle-2xl border border-core-circle-border-main shadow-core-circle-subtle overflow-hidden`)
    - **Layout shell**: `<div className={s.layout}>` (`flex flex-col`)
    - **Integrated controls toolbar**: `<div className={s.controlsWrapper}>` (`w-full bg-core-circle-bg-page/30 border-b border-core-circle-border-main p-6 space-y-6`) containing responsive grid rows of design system primitives (`Select`, `TextInput`, `Checkbox`)
    - **Interactive preview canvas**: `<div className={s.previewWrapper}><div className={s.previewArea}>` (`flex-1 flex items-center justify-center p-12 lg:p-20 min-h-[400px] bg-white`)
    - **Integrated code footer**: `<div className={s.codeSection}>` (`p-6 bg-slate-950 border-t border-core-circle-border-main`) with syntax-highlighted code (`highlightCode`) and one-click "Copy Snippet" button using `DOC_TEXT`.
  - **Colocated Styles Requirement**: Every playground directory MUST contain a colocated `[name]Playground.styles.ts` importing `accordionPlaygroundStyles`:
    ```ts
    import { accordionPlaygroundStyles } from '../accordion/accordionPlayground.styles';
    export const [name]PlaygroundStyles = accordionPlaygroundStyles;
    ```
  - **Forbidden Anti-Pattern**: Never render detached control cards, floating input boxes, or loose `<CodeSnippet>` components underneath. The entire playground must be a single cohesive module.

### Tab 4: `Mock Code`

- **ID & Icon**: `id: 'mock-code'`, icon: `<CodeIcon size={16} />` from `@core-circle/icons`.
- **Purpose**: Complete copy-pasteable real-world consumer code demonstrating how to integrate the component with backend data, headless CMS payloads, or REST/GraphQL APIs.
- **Structure**:
  - Section 1: Dynamic API / CMS JSON payload.
  - Section 2: Consumer React component mapping over the payload using `@core-circle/ui` primitives.
  - Wrapped inside `<CodeSnippet label="..." code="..." />`.

### Tab 5: `Overview`

- **ID & Icon**: `id: 'overview'`, icon: `<Info size={16} />` from `@core-circle/icons`.
- **Purpose**: Quick onboarding reference for developers.
- **Structure**:
  - Introduction `<DocSection>` with a concise paragraph.
  - `<CodeSnippet label="Quick Usage" code="...">` with the minimal copy-paste import and JSX.
  - Component Props Table via `<PropsTable data={[COMPONENT]_PROPS_DATA} />`.

---

## 4. Code Standards & Reference Implementations

### 4.1 Route Page Standard (`page.tsx`)

```tsx
// src/app/docs/src/app/atoms/[name]/page.tsx
import {
  [NAME]_HEADER_CONTENT,
  [NAME]_BREADCRUMB_ITEMS,
  [NAME]_SECTIONS
} from '../../../constants/atoms-page/[name]/[name]Constants';
import [Name]Container from '../../../containers/atoms-page/[name]/[name]Container';

export const metadata = {
  title: '[ComponentName] | Core Circle UI',
  description: 'Concise description of the component functionality.',
};

export default function [Name]DocsPage() {
  return (
    <[Name]Container
      sections={[NAME]_SECTIONS}
      headerContent={[NAME]_HEADER_CONTENT}
      breadcrumbItems={[NAME]_BREADCRUMB_ITEMS}
    />
  );
}
```

### 4.2 Isolated Page Styles Standard (`[name].styles.ts`)

Never create ad-hoc padding or random classes inside the container. Always extend the canonical `atomsPageStyles`:

```ts
// src/app/docs/src/containers/atoms-page/[name]/[name].styles.ts
import { atomsPageStyles } from '../atoms.styles';

export const [name]PageStyles = {
  ...atomsPageStyles,
  // Add only component-specific isolated utility classes here if strictly needed
};
```

`atomsPageStyles` guarantees uniform container max-width (`max-w-5xl mx-auto px-6 py-10`), header margin, and typography tracking across all pages in the webapp.

### 4.3 Container Props Interface (`[name].types.ts`)

```ts
// src/app/docs/src/interface/containers/atoms/[name].types.ts
import {
  [NAME]_BREADCRUMB_ITEMS,
  [NAME]_HEADER_CONTENT,
  [NAME]_SECTIONS
} from '../../../constants/atoms-page/[name]/[name]Constants';

export interface [Name]ContainerProps {
  sections?: typeof [NAME]_SECTIONS;
  headerContent: typeof [NAME]_HEADER_CONTENT;
  breadcrumbItems: typeof [NAME]_BREADCRUMB_ITEMS;
}
```

### 4.4 Constants & Data Specification (`[name]Constants.tsx`)

All showcase data, theme configurations, variant groupings, and section strings must be declared in `[name]Constants.tsx`. Never hardcode display text or IDs in the container:

```tsx
// src/app/docs/src/constants/atoms-page/[name]/[name]Constants.tsx
import type { ReactNode } from 'react';
import { PropItem } from '../../../interface/components/props-table.types';
import { Shield, Sparkles } from '@core-circle/icons';
import { Badge } from '@core-circle/ui';

export const [NAME]_HEADER_CONTENT = {
  title: '[ComponentName]',
  description: 'Authoritative summary of component capabilities, accessibility standards, and styling variants.',
};

export const [NAME]_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: '[ComponentName]' },
];

export const [NAME]_SAMPLE_ITEMS = [
  { id: '1', title: 'Item 1', content: 'Content 1' },
  { id: '2', title: 'Item 2', content: 'Content 2' },
];

export const [NAME]_THEME_CONFIGS = [
  {
    id: 'theming-enterprise',
    sectionTitle: '1. Enterprise Security & Audit Theme',
    description: 'Crisp card layout with verified status badges.',
    previewTitle: 'Security FAQ',
    props: { variant: 'card' as const, type: 'single' as const, defaultValue: '1' },
    items: [
      {
        id: '1',
        title: (
          <div className="flex items-center gap-3">
            <span className="font-bold flex items-center gap-2">
              <Shield size={16} className="text-emerald-600" /> Compliance
            </span>
            <Badge variant="success" size="sm" shape="pill">Certified</Badge>
          </div>
        ),
        content: 'Enterprise compliance details.',
      },
    ],
    code: `<[ComponentName] variant="card" defaultValue="1" ... />`,
  },
  // 5 realistic production themes
];

export const [NAME]_VARIANT_GROUPS = [
  {
    id: '[name]-variants-card',
    title: '1. Card & Floating Styles',
    description: 'Elevated card modules with soft drop shadows.',
    variants: [
      { title: 'Card Style', variant: 'card' },
      { title: 'Floating Style', variant: 'floating' },
    ],
  },
  // Minimum 10 distinct variants grouped cleanly
];

export const [NAME]_PLAYGROUND_SECTION = {
  id: '[name]-playground-section',
  title: 'Interactive Playground',
  description: 'Explore variants, sizes, and interactive modes.',
};

export const [NAME]_MOCK_SECTION = {
  id: '[name]-mock',
  title: 'Dynamic Backend Integration',
  description: 'Render entries dynamically from remote JSON API responses.',
  snippets: [
    { label: 'Sample Backend API Payload', code: JSON.stringify({ status: 'success', data: [] }, null, 2) },
    { label: 'Dynamic Consumer Component', code: `// Consumer React component...` },
  ],
};

export const [NAME]_OVERVIEW_SECTION = {
  id: '[name]-usage',
  title: 'Introduction',
  description: 'The [ComponentName] primitive collapses and expands dense information sections.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { [ComponentName] } from '@core-circle/ui';\n\n<[ComponentName] />`,
  },
  propsTableTitle: 'Component Props',
};

export const [NAME]_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: 'string',
    defaultValue: "'bordered'",
    description: 'The visual styling variant of the component.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    defaultValue: "'md'",
    description: 'The vertical padding and font scale.',
  },
  {
    name: 'className',
    type: 'string',
    defaultValue: "''",
    description: 'Additional custom CSS classes to merge.',
  },
];
```

### 4.5 Container Component Standard (`[name]Container.tsx`)

Containers must use `<DocPageShell>` and declarative `.map()` loops. No hardcoded text or manual tab arrays:

```tsx
// src/app/docs/src/containers/atoms-page/[name]/[name]Container.tsx
'use client';

import { [ComponentName], Typography } from '@core-circle/ui';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import DocPageShell from '../../../components/doc-page-shell/docPageShell';
import {
  [NAME]_THEME_CONFIGS,
  [NAME]_VARIANT_GROUPS,
  [NAME]_SAMPLE_ITEMS,
  [NAME]_PROPS_DATA,
  [NAME]_PLAYGROUND_SECTION,
  [NAME]_MOCK_SECTION,
  [NAME]_OVERVIEW_SECTION,
} from '../../../constants/atoms-page/[name]/[name]Constants';
import { [Name]Playground } from '../../../components/playground/[name]/[Name]Playground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { [Name]ContainerProps } from '../../../interface/containers/atoms/[name].types';

export default function [Name]Container({
  headerContent,
  breadcrumbItems,
}: [Name]ContainerProps) {
  return (
    <DocPageShell
      headerContent={headerContent}
      breadcrumbItems={breadcrumbItems}
      tabs={{
        theming: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {[NAME]_THEME_CONFIGS.map((theme) => (
              <DocSection
                key={theme.id}
                id={theme.id}
                title={theme.sectionTitle}
                description={theme.description}
              >
                <ComponentPreview title={theme.previewTitle} code={theme.code}>
                  <div className="w-full">
                    <[ComponentName] {...theme.props} items={theme.items} />
                  </div>
                </ComponentPreview>
              </DocSection>
            ))}
          </div>
        ),
        variants: (
          <div className="flex flex-col gap-12 max-w-5xl">
            {[NAME]_VARIANT_GROUPS.map((group) => (
              <DocSection
                key={group.id}
                id={group.id}
                title={group.title}
                description={group.description}
              >
                <div className="flex flex-col gap-6 w-full">
                  {group.variants.map((v) => (
                    <ComponentPreview
                      key={v.variant}
                      title={v.title}
                      code={`<[ComponentName] variant="${v.variant}" />`}
                    >
                      <div className={v.wrapperClassName ? `w-full ${v.wrapperClassName}` : 'w-full'}>
                        <[ComponentName] items={[NAME]_SAMPLE_ITEMS} variant={v.variant} />
                      </div>
                    </ComponentPreview>
                  ))}
                </div>
              </DocSection>
            ))}
          </div>
        ),
        playground: (
          <DocSection
            id={[NAME]_PLAYGROUND_SECTION.id}
            title={[NAME]_PLAYGROUND_SECTION.title}
            description={[NAME]_PLAYGROUND_SECTION.description}
          >
            <[Name]Playground />
          </DocSection>
        ),
        mockCode: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={[NAME]_MOCK_SECTION.id}
              title={[NAME]_MOCK_SECTION.title}
              description={[NAME]_MOCK_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                {[NAME]_MOCK_SECTION.snippets.map((snippet) => (
                  <CodeSnippet
                    key={snippet.label}
                    label={snippet.label}
                    code={snippet.code}
                  />
                ))}
              </div>
            </DocSection>
          </div>
        ),
        overview: (
          <div className="flex flex-col gap-12 max-w-5xl">
            <DocSection
              id={[NAME]_OVERVIEW_SECTION.id}
              title={[NAME]_OVERVIEW_SECTION.title}
              description={[NAME]_OVERVIEW_SECTION.description}
            >
              <div className="flex flex-col gap-8 mt-6">
                <CodeSnippet
                  label={[NAME]_OVERVIEW_SECTION.quickUsage.label}
                  code={[NAME]_OVERVIEW_SECTION.quickUsage.code}
                />
                <div className="flex flex-col gap-4">
                  <Typography
                    variant="h4"
                    className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted"
                  >
                    {[NAME]_OVERVIEW_SECTION.propsTableTitle}
                  </Typography>
                  <PropsTable data={[NAME]_PROPS_DATA} />
                </div>
              </div>
            </DocSection>
          </div>
        ),
      }}
    />
  );
}
```

---

## 5. Critical Build & Lint Rules (Zero Rework)

### 5.1 Directive Prologue: `'use client';` Must Be on Line 1

In all interactive client components (`*Container.tsx`, `*Playground.tsx`):

- **Rule**: `'use client';` MUST be the very first statement on **Line 1**, preceding any `import` statements.
- **Why**: Next.js and ESLint require directives to be at the top of the file. If an import precedes `'use client';`, ESLint treats the string as a dangling expression and raises `@typescript-eslint/no-unused-expressions` which fails CI/Husky lint checks.

```tsx
// ✅ Correct
'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs } from '@core-circle/ui';
...
```

```tsx
// ❌ WRONG (Fails ESLint!)
import { MyContainerProps } from '../../../interface/containers/atoms/my.types';
('use client'); // <-- Error: Expected an assignment or function call!
```

### 5.2 Icon Existence in `@core-circle/icons`

- **Rule**: Before importing any icon, verify it exists in `packages/icons/index.ts` (or `@core-circle/icons`).
- **Common traps & Mandatory Replacements**:
  - `Copy` does NOT exist $\rightarrow$ use `CopyIcon`.
  - `DollarSign` does NOT exist $\rightarrow$ use `BadgeDollarSign`.
  - `TrendingUp` / `TrendingDown` do NOT exist $\rightarrow$ use `ArrowUpRight` / `ArrowDownRight` or `Activity`.
  - `Trash` does NOT exist $\rightarrow$ use `XIcon`.
  - `CheckCircle` does NOT exist $\rightarrow$ use `CircleCheck`.
  - `Server` does NOT exist $\rightarrow$ use `Cloud` or `Terminal`.
  - `User` does NOT exist $\rightarrow$ use `UserIcon` or `UserCircle`.
  - `FileText` does NOT exist $\rightarrow$ use `DocumentText` or `File`.
  - `Music` does NOT exist $\rightarrow$ use `AudioWaveform` or `Play`.
  - `Pencil` / `Edit` do NOT exist $\rightarrow$ use `SquareEdit`.
  - `Refresh` does NOT exist $\rightarrow$ use `Rotate`.
  - `Eye` / `EyeOff` do NOT exist $\rightarrow$ use `EyeIcon`.
  - `QrCode` does NOT exist $\rightarrow$ use `Barcode` or `CodeIcon`.
  - `LayoutGrid` does NOT exist $\rightarrow$ use `Grid`.
  - `Globe` does NOT exist $\rightarrow$ use `SearchIcon` or `AtSign`.
  - `X` does NOT exist $\rightarrow$ use `XIcon`.
- **Why**: Next.js Turbopack statically analyzes named exports. Importing a non-existent named export causes a hard compilation failure during `next build`.

### 5.3 Colocated Styles File (`[component].styles.ts`)

- **Rule**: Every component folder in `src/app/docs/src/containers/atoms-page/[name]/` must have a `[name].styles.ts` file extending `atomsPageStyles`.
- **Import convention**: The container must import from its own colocated file:
  ```ts
  import { [name]PageStyles as s } from './[name].styles';
  ```

### 5.4 Centralized Interface File (`[component].types.ts`)

- **Rule**: Container interfaces must be centralized in `src/app/docs/src/interface/containers/atoms/[name].types.ts`.
- **Naming**: Export `[ComponentName]ContainerProps`. Never use `any` in container function signatures.

### 5.5 Zero Ad-Hoc Dark Containers (Preventing Inverted Contrast & Black-on-Black Text)

- **Rule**: Never use ad-hoc dark containers (`bg-slate-900`, `bg-slate-950`, `bg-black`, or `dark:bg-slate-900`) inside preview cards or theming sections.
- **Why**: The documentation app currently runs on a light root surface. Introducing localized dark containers without root theme context causes child elements (`Typography`, `Button`, `Badge`, `Avatar`) to inherit light-mode semantic tokens (`text-core-circle-text-main` $\approx$ black), causing invisible black-on-black text and inverted white flashes on button hover.
- **Remediation**: Always use consistent surface tokens (`bg-white` or `bg-core-circle-bg-surface`, `border-core-circle-border-main`, `text-core-circle-text-main`). Full dark mode will be ported globally at the root `<html>` level once the entire webapp showcase is completed.

### 5.6 Tailwind v4 Dark Mode Isolation & Overlapping Cluster Stacking

- **Rule 1 (Class-only Dark Variant)**: Tailwind v4 compiles `dark:` utilities using `@media (prefers-color-scheme: dark)` unless `@custom-variant dark (&:where(.dark, .dark *));` is declared. Both `src/app/docs/src/app/global.css` and `packages/ui/src/tailwind.css` MUST maintain this declaration so OS dark mode does not bleed into the light UI.
- **Rule 2 (Left-over-Right Stacking)**: In overlapping clusters (e.g. `AvatarGroup`), ALWAYS apply descending natural z-indexing (`style={{ zIndex: totalCount - idx }}`). Because status indicators (`online`, `busy`) are located at the bottom-right of avatar circles, stacking the left avatar in front of the right avatar ensures trailing status dots are 100% visible and never clipped into crescents.
- **Rule 3 (No Hardcoded Dark Primitives)**: Primitive variants like `glow` or `dark` in `@core-circle/ui` must use clean theme tokens (`bg-core-circle-bg-surface`, `bg-slate-50`, `bg-emerald-50`) rather than pitch-black `bg-slate-950` or `bg-slate-900`.

### 5.7 Clean React 19 Imports & Dead Import Hygiene

- **Rule**: Do NOT import `React` in `.ts` data/constants files or `.tsx` components where React is not directly referenced as a value or type.
- **Icon Imports**: Only import icons from `@core-circle/icons` that are rendered in that specific file. Unused icons cause `@typescript-eslint/no-unused-vars` warnings.

### 5.8 React Hook Dependencies & Accessibility

- **Rule 1 (useCallback for Effect Listeners)**: Any handler function (e.g. `close()`, `handleClose()`) called inside `useEffect` must be memoized with `React.useCallback` and listed in the effect's dependency array.
- **Rule 2 (Single-Child Fragment Hygiene)**: Never wrap a single child in `<>{children}</>`. Return `children` directly or cast as `children as React.ReactElement | null`.
- **Rule 3 (Accessible Emojis)**: All emojis in UI text must be wrapped in `<span role="img" aria-label="...">` to satisfy `jsx-a11y/accessible-emoji`.

### 5.9 Interactive Playground Controls Standard (Zero Native HTML Form Elements)

- **Rule**: In all interactive playground sandboxes (`src/app/docs/src/components/playground/[name]/[Name]Playground.tsx`), developers must **strictly use `@core-circle/ui` primitives** for control panels.
- **Forbidden Elements**: Never render raw HTML `<select>`, `<input>`, `<label>`, `<button>`, or `<input type="checkbox">` elements.
- **Approved Component Replacements**:
  - Dropdown selectors: `<Select label="..." value={...} onChange={(e) => ...} options={[...]} fullWidth />`
  - Text & numeric inputs: `<TextInput label="..." value={...} onChange={(e) => ...} fullWidth />`
  - Checkbox flags: `<Checkbox label="..." checked={...} onChange={(checked) => ...} />`
  - Toggle switches: `<Switch label="..." checked={...} onChange={(checked) => ...} />`
  - Numeric sliders: `<SliderInput label="..." value={...} onChange={(val) => ...} />`
- **Why**: Raw HTML form inputs fail to respect design system typography, focus rings, border radiuses, and platform styling tokens, creating visually jarring and inconsistent documentation sandboxes.

### 5.10 Theming & Section Spacing Architecture (`tabContentWrapper`)

- **Rule**: All showcase tab contents (`theming`, `variants`, `mockCode`, `overview`) rendered in containers must be wrapped with `<div className={s.tabContentWrapper}>`.
- **Definition**: `tabContentWrapper` is defined in `atomsPageStyles` (`src/app/docs/src/containers/atoms-page/atoms.styles.ts`) as:
  ```ts
  tabContentWrapper: 'flex flex-col gap-12 w-full',
  ```
- **DocSection Full-Width Guarantee**: `<DocSection>` must include `className="w-full"` on its root `<section id={id}>` element to ensure all preview cards and theming cards stretch across the full layout container.
- **Spacing Guarantee**: This enforces an exact `48px` (`gap-12`) vertical breathing room between each theming preview card and section heading, preventing adjacent sections from touching.

### 5.11 Compound & Multi-Slot Variant Propagation (Preventing Invisible Text on Dark Surfaces)

- **Rule**: Any component primitive that offers surface or color variants (e.g. `dark`, `accent`, `glassmorphic`, `gradient`) must propagate the `variant` prop to all internal CVA style helpers (`*LabelVariants`, `*ValueVariants`, `*DescriptionVariants`, `*IconWrapperVariants`).
- **Forbidden Practice**: Never call `statValueVariants({ size })` without passing `{ variant }`. Omitting `variant` defaults to `card` (`text-slate-900`), resulting in pitch-black text rendered against dark navy cards (`bg-slate-900`), rendering the text completely invisible.
- **Icon Box & Auxiliary Slots**: Auxiliary wrappers (icon badges, footers, divider lines) must also adapt their background and border tokens according to the active `variant`.

---

## 6. Do's and Don'ts Checklist

| Do ✅                                                                                                                                      | Don't ❌                                                                                                              |
| :----------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| **Always use `bg-white` / `bg-core-circle-bg-surface`** for showcase preview cards.                                                        | **Never use ad-hoc dark wrappers** (`bg-slate-900`, `bg-slate-950`, `dark:bg-slate-900`) causing black-on-black text. |
| **Always use `<Select>`, `<TextInput>`, `<Checkbox>`** from `@core-circle/ui` in playgrounds.                                              | **Never use raw HTML `<select>`, `<input>`, or `<label>`** in playground control panels.                             |
| **Always wrap tab content in `s.tabContentWrapper`** for standard 48px vertical section spacing.                                           | **Never omit `tabContentWrapper`**, which causes adjacent showcase sections to touch with 0px gap.                    |
| **Always propagate `variant` to all child slot style helpers** (`statLabelVariants({ variant, size })`).                                  | **Never omit `variant` in child styles**, causing invisible black-on-black text on dark surfaces.                     |
| **Always place `'use client';` on Line 1** before any imports in client components.                                                        | **Never place import statements above `'use client';`**.                                                              |
| **Always verify icon names in `packages/icons/index.ts`** before importing from `@core-circle/icons`.                                      | **Never guess icon names** (e.g. `Server`, `User`, `FileText`).                                                       |
| **Always import `[name]PageStyles as s` from `./[name].styles`** extending `atomsPageStyles`.                                              | **Do not write inline layout padding** like `p-12 lg:p-20` on container wrappers.                                     |
| **Always type container props with `[Name]ContainerProps`** from `interface/containers/atoms/`.                                            | **Never type container props as `any`** or define container interfaces inline.                                        |
| **Always follow the 5-tab order**: Theming $\rightarrow$ Variants $\rightarrow$ Playground $\rightarrow$ Mock Code $\rightarrow$ Overview. | **Do not reorder tabs** (e.g. putting Overview first or dropping Theming).                                            |
| **Always use `@core-circle/ui` primitives** (`Typography`, `Breadcrumb`, `Badge`, `Button`).                                               | **Do not write raw HTML** (`<h1>`, `<button>`, `<p>`) inside documentation containers.                                |
| **Always wrap Next.js `Link` in `renderLink`** for `<Breadcrumb>` to preserve client-side routing.                                         | **Do not use unstyled native `<a>` tags** for breadcrumb navigation.                                                  |
| **Always provide realistic mock payloads** in the `Mock Code` tab reflecting modern REST/CMS data.                                         | **Do not provide empty or trivial `foo: "bar"` mock snippets**.                                                       |
| **Wrap emojis in `<span role="img" aria-label="...">`** for accessible UI text.                                                            | **Never leave bare emojis in JSX** failing `jsx-a11y/accessible-emoji`.                                               |
| **Memoize effect callbacks with `useCallback`** and declare all dependencies.                                                              | **Never omit effect dependencies** failing `react-hooks/exhaustive-deps`.                                             |
| **Keep total monorepo lint warnings strictly under 100**.                                                                                  | **Never allow lint warnings to accumulate past 100**.                                                                 |

---

## 7. Verification & Quality Policy

Whenever a documentation page or primitive is added or modified:

1. **Lint Metric**: Monorepo lint warnings must **never exceed 100**, and primitives in `@core-circle/ui` must maintain **0 errors and 0 warnings**: `npx nx run-many -t lint`.
2. **Clean Builds**: Ensure Next.js builds cleanly with static route generation: `npx nx run @core-circle/docs:build`.
3. **Package Builds**: Ensure all library packages compile without DTS or bundle errors: `npx nx run-many -t build -p tag:package`.
4. Never bypass design tokens or introduce unverified CSS imports.
