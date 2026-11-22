# CoreCircle AI Agent Guidelines

You are working on the **CoreCircle** Design System monorepo (`@core-circle/ui`, `@core-circle/theme`, `@core-circle/icons`, `@core-circle/docs`).
Follow these core principles for all UI, component, styling, and architectural tasks to minimize token consumption and maximize component reuse.

---

## 1. Golden Rule: Reuse Before Creating (Zero Redundancy)

Before writing any new HTML elements or creating custom React components, **always check existing primitives** in `@core-circle/ui` and `@core-circle/icons`.

### Component Substitution Matrix (Alphabetical by Concept)
Never write raw HTML elements when a CoreCircle component exists:

| Raw HTML Element / Concept | CoreCircle Primitive (`@core-circle/ui`) | Import / Reference |
| :--- | :--- | :--- |
| Accordion / Collapsible | `<Accordion>` | `import { Accordion } from '@core-circle/ui'` |
| Alerts / Banners | `<Alert>` | `import { Alert } from '@core-circle/ui'` |
| Card containers | `<Card>` | `import { Card } from '@core-circle/ui'` |
| Date picking / Calendars | `<DatePicker>`, `<DatePickerRange>`, `<Calendar>` | `import { DatePicker, DatePickerRange, Calendar } from '@core-circle/ui'` |
| Icons (130+ icons) | `@core-circle/icons` | `import { SearchIcon, ChevronDown, CheckIcon, ... } from '@core-circle/icons'` |
| Loading spinners / Skeletons | `<Spinner>` / `<Skeleton>` | `import { Spinner, Skeleton } from '@core-circle/ui'` |
| Modals / Dialogs | `<Dialog>` | `import { Dialog } from '@core-circle/ui'` |
| Multi-step flows | `<Stepper>` | `import { Stepper } from '@core-circle/ui'` |
| Paragraphs / Headings | `<Typography variant="...">` | `import { Typography } from '@core-circle/ui'` |
| Popovers / Floating tooltips | `<Popover>` / `<Tooltip>` | `import { Popover, Tooltip } from '@core-circle/ui'` |
| Progress bars | `<Progress>` | `import { Progress } from '@core-circle/ui'` |
| Project Scaffolder / Boilerplate | `<ProjectScaffolder>` | `import { ProjectScaffolder } from '@core-circle/ui'` |
| Sliders | `<SliderInput>` | `import { SliderInput } from '@core-circle/ui'` |
| Status tags / Chips / Pills | `<Badge>` | `import { Badge } from '@core-circle/ui'` |
| Tab navigation | `<Tabs>` | `import { Tabs } from '@core-circle/ui'` |
| Text labels | `<Label>` / `<Typography>` | `import { Label, Typography } from '@core-circle/ui'` |
| Theme Studio / Generator | `<ThemeGenerator>` | `import { ThemeGenerator } from '@core-circle/ui'` |
| Toggle switch | `<Switch>` | `import { Switch } from '@core-circle/ui'` |
| User profile / Avatar | `<Avatar>` | `import { Avatar } from '@core-circle/ui'` |
| Verification code inputs | `<OtpInput>` | `import { OtpInput } from '@core-circle/ui'` |
| `<button>` | `<Button>` | `import { Button } from '@core-circle/ui'` |
| `<input type="checkbox">` | `<Checkbox>` | `import { Checkbox } from '@core-circle/ui'` |
| `<input type="radio">` | `<RadioButton>` | `import { RadioButton } from '@core-circle/ui'` |
| `<input type="text|email|password">` | `<TextInput>` | `import { TextInput } from '@core-circle/ui'` |
| `<select>` / dropdown | `<Select>` / `<MultiSelect>` | `import { Select, MultiSelect } from '@core-circle/ui'` |
| `<textarea>` | `<Textarea>` | `import { Textarea } from '@core-circle/ui'` |

---

## 2. Design Tokens & Styling Architecture

- **Tailwind Tokens**: Use defined CoreCircle tokens from `@core-circle/theme` (e.g. `bg-core-circle-primary`, `text-core-circle-primary`, `rounded-core-circle-lg`, `shadow-core-circle-subtle`).
- **Variants with CVA**: All component styling must use `class-variance-authority` (`cva`) in a dedicated `[component].styles.ts` file.
- **Class Merging**: Always wrap variant output with `cn(...)` from `packages/ui/src/utils/cn.ts` (using `clsx` and `tailwind-merge`).
- **No Inline Styles or Arbitrary Hardcoded Colors**: Avoid hardcoding hex colors like `#2563eb` inside components; use design token class names.

---

## 3. Standard Component Anatomy

When creating or extending components in `packages/ui/`:

```text
packages/ui/src/
├── components/
│   ├── atoms/[name]/
│   │   ├── [name].tsx             # Component definition with React.forwardRef
│   │   └── [name].styles.ts       # CVA variant definition
│   ├── molecules/[name]/
│   │   ├── [name].tsx             # Composed component using existing Atoms
│   │   └── [name].styles.ts       # CVA variant definition
│   ├── organisms/[name]/
│   │   ├── [name].tsx             # High-level section components & layouts
│   │   └── [name].styles.ts       # CVA variant definition
│   └── generators/[name]/
│       ├── [name].tsx             # Standalone code & boilerplate generators / studios
│       └── [name].styles.ts       # CVA variant definition
├── interface/
│   ├── atoms/[name]/[name].types.ts       # TypeScript interfaces & props
│   ├── molecules/[name]/[name].types.ts
│   ├── organisms/[name]/[name].types.ts
│   └── generators/[name]/[name].types.ts
├── stories/
│   ├── atoms/[name].stories.tsx   # Storybook stories with args & variants
│   ├── molecules/[name].stories.tsx
│   ├── organisms/[name].stories.tsx
│   └── generators/[name].stories.tsx
└── components/index.ts            # Export component & type definitions
```

---

## 4. Token-Efficient Workflow for AI Pair Programming

1. **Activate the Skill**: When building or extending components, activate the workspace skill `.agents/skills/core-circle-component-architect/SKILL.md`.
2. **Consult Code Brain**: Check `.agents/skills/core-circle-component-architect/code-brain.md` in the skill for existing props, variants, icons, and tokens instead of reading large component source files.
3. **Extend with Variants**: When a new style or state is required, add a variant in `[name].styles.ts` and prop in `[name].types.ts` rather than duplicating or rewriting the component.
4. **Compose Molecules**: Always build molecules by combining existing atoms (e.g. `Card` = `CardHeader` + `Typography` + `Badge` + `Button`).

---

## 5. Command Execution, Build & Quality Metrics Policy (Strict)

- **NEVER run `build`, `test`, `lint`, or other long-running verification commands automatically** after code edits.
- Only run `npm run build`, `npm run build:packages`, `npm test`, or `npm run lint` when the user **specifically and explicitly asks** for it.
- **Strict Lint Warning Metric (< 100 Warnings)**:
  - Total monorepo lint warnings must **strictly never exceed 100** (`nx run-many -t lint`).
  - Core primitives in `@core-circle/ui`, `@core-circle/theme`, and `@core-circle/icons` must maintain **0 errors and 0 warnings** at all times.
  - Always exclude compiled/minified build artifacts (`storybook-static/`, `dist/`, `.next/`) in ESLint flat configs (`eslint.config.mjs`) to prevent false-positive alert storms.
- **STRICT NO GIT PUSH MANDATE**:
  - All code edits, commits, and experiments must remain strictly within the local working tree.
  - **NEVER** run `git push` or push branches to any remote repository under any circumstances.

---

## 6. Canonical Documentation Standard (Always Refer to `Accordion`)

When developing or upgrading documentation containers, pages, and constants in `src/app/docs/`:

1. **Golden Benchmark**: Always reference `Accordion` (`src/app/docs/src/containers/atoms-page/accordion/accordionContainer.tsx`, `accordion.styles.ts`, `accordionConstants.tsx`) and the comprehensive [Documentation Standards Guide](DOCS_STANDARDS.md) before starting development.
2. **Strict 6-File Documentation Anatomy**:
   Every component showcase in the docs must provide:
   ```text
   src/app/docs/src/
   ├── app/atoms/[name]/page.tsx                        # 1. Server Component Page route
   ├── containers/atoms-page/[name]/
   │   ├── [name]Container.tsx                          # 2. 5-Tab Client Component container
   │   └── [name].styles.ts                             # 3. Colocated styles extending atomsPageStyles
   ├── constants/atoms-page/[name]/[name]Constants.tsx  # 4. Header, Breadcrumbs & PropsTable data
   ├── components/playground/[name]/[Name]Playground.tsx# 5. Interactive sandbox component
   └── interface/containers/atoms/[name].types.ts       # 6. Centralized ContainerProps interface
   ```
3. **Directive Prologue Rule (`'use client';` on Line 1)**:
   - In all interactive containers and playgrounds, `'use client';` MUST be placed on **Line 1** before any `import` statements. Placing imports before `'use client';` causes ESLint `@typescript-eslint/no-unused-expressions` build failures.
4. **Colocated Styles & Layout Inheritance**:
   - Every container MUST have a colocated `[name].styles.ts` importing `atomsPageStyles`:
     ```ts
     import { atomsPageStyles } from '../atoms.styles';
     export const [name]PageStyles = atomsPageStyles;
     ```
   - Container component MUST import from `./[name].styles`:
     ```ts
     import { [name]PageStyles as s } from './[name].styles';
     ```
   - Layout styles (`container: 'max-w-5xl mx-auto px-6 py-10'`, `header: 'mb-8'`) are mandatory. Never introduce ad-hoc `p-12 lg:p-20` padding.
5. **Centralized Interface Types**:
   - Container props interface MUST be located in `src/app/docs/src/interface/containers/atoms/[name].types.ts`:
     ```ts
     export interface [ComponentName]ContainerProps {
       sections?: any[];
       headerContent: {
         title: string;
         description: string;
       };
       breadcrumbItems: any[];
     }
     ```
   - Containers MUST type their props with this interface instead of using `any`.
6. **Standard 5-Tab Order & Data-Driven DocPageShell Architecture**:
   - **Canonical Shell**: All atom containers MUST use `<DocPageShell headerContent={headerContent} breadcrumbItems={breadcrumbItems} tabs={{ theming, variants, playground, mockCode, overview }} />` (`src/app/docs/src/components/doc-page-shell/docPageShell.tsx`) which integrates `DOCS_CANONICAL_TABS` (`src/app/docs/src/constants/docs-tabs-constant.tsx`). Never duplicate headers, breadcrumbs, or manual tab item arrays in containers.
   - **Zero Hardcoded Strings in Containers**: Every single `id`, `title`, `description`, `label`, and code string MUST reside in `[name]Constants.tsx`. Container length must stay compact (~100–140 lines) with zero JSX duplication.
   - **`Theming`** (Tab 1, default active, `Palette` icon): Rendered declaratively via `[NAME]_THEME_CONFIGS.map(...)` displaying 5 real-world production themes utilizing full `w-full` width.
   - **`Variants`** (Tab 2, `Layers` icon): Rendered declaratively via `[NAME]_VARIANT_GROUPS.map(...)` displaying minimum 10 variants grouped cleanly in `DocSection`s.
   - **`Playground`** (Tab 3, `Play` icon): Interactive playground `<[Name]Playground />` wrapped in `<DocSection {...[NAME]_PLAYGROUND_SECTION}>`.
   - **`Mock Code`** (Tab 4, `CodeIcon`): Dynamic backend API/CMS payload and consumer component rendered from `[NAME]_MOCK_SECTION.snippets.map(...)`.
   - **`Overview`** (Tab 5, `Info` icon): Quick usage snippet and comprehensive `PropsTable` rendered from `[NAME]_OVERVIEW_SECTION`.
7. **Verified Icon Imports**:
   - Only import icons that actually exist in `@core-circle/icons` (`packages/icons/index.ts`).
   - Do not guess icon names. Turbopack fails the build if an invalid named icon export is imported.
   - **Known Icon Trap Replacements**:
     - `DollarSign` $\rightarrow$ use `BadgeDollarSign`
     - `Copy` $\rightarrow$ use `CopyIcon`
     - `TrendingUp` / `TrendingDown` $\rightarrow$ use `ArrowUpRight` / `ArrowDownRight` or `Activity`
     - `Trash` $\rightarrow$ use `XIcon`
     - `CheckCircle` $\rightarrow$ use `CircleCheck`
     - `Server` $\rightarrow$ use `Cloud` or `Terminal`
     - `User` $\rightarrow$ use `UserIcon` or `UserCircle`
     - `FileText` $\rightarrow$ use `DocumentText` or `File`
     - `Music` $\rightarrow$ use `AudioWaveform` or `Play`
     - `Pencil` / `Edit` $\rightarrow$ use `SquareEdit`
     - `Refresh` $\rightarrow$ use `Rotate`
     - `Eye` / `EyeOff` $\rightarrow$ use `EyeIcon`
     - `QrCode` $\rightarrow$ use `Barcode` or `CodeIcon`
     - `LayoutGrid` $\rightarrow$ use `Grid`
     - `Globe` $\rightarrow$ use `SearchIcon` or `AtSign`
     - `X` $\rightarrow$ use `XIcon`
8. **Zero Ad-Hoc Dark Containers**:
   - Do NOT introduce localized dark wrappers (`bg-slate-900`, `bg-slate-950`, `bg-black`, `dark:bg-slate-900`) inside preview cards or theming showcases.
   - Child elements resolve light-mode semantic tokens (`text-core-circle-text-main` = black), causing invisible black-on-black text and inverted hover flashes.
   - Always use clean surface tokens (`bg-white` or `bg-core-circle-bg-surface`, `border-core-circle-border-main`, `text-core-circle-text-main`). Full dark mode will be ported globally at the root `<html>` level once the entire webapp is complete.
9. **Tailwind v4 Dark Mode Isolation & Stacking Context**:
   - In Tailwind CSS v4, dark variants are strictly isolated to class-based activation via `@custom-variant dark (&:where(.dark, .dark *));` in `global.css` and `tailwind.css`. Never allow media-query based dark bleeding from user OS themes.
   - In component primitives (`packages/ui/`), avoid hardcoding pitch-black surfaces (`bg-slate-950`). Use semantic tokens or soft neutral surfaces (`bg-core-circle-bg-surface`, `bg-slate-50`, `bg-slate-100`).
   - In overlapping cluster components (such as `AvatarGroup`), always enforce natural left-to-right stacking order with decreasing z-indexes (`style={{ zIndex: totalCount - idx }}`). This guarantees that bottom-right status indicators (`online`, `busy`) are never clipped into half-moons by adjacent sibling circles.
10. **Clean React 19 JSX & Dead Import Hygiene**:
   - Do NOT import `React` in `.ts` data/constants files or in components where `React` is not directly referenced as a value or type. React 19 uses the modern JSX transform.
   - Never leave unused icon imports or variable declarations in playgrounds or containers. Prune dead imports before committing.
11. **Strict React Hook Dependencies & Memoization**:
   - Any callback (`close`, `handleClose`, etc.) invoked within `useEffect` listeners must be wrapped with `useCallback` and explicitly declared in the dependency array (`react-hooks/exhaustive-deps`).
   - Avoid omitting conditional state/props dependencies (e.g., `defaultValue`, `value`, `isDarkPreview`).
12. **Fragment & Accessibility Standards**:
   - Avoid wrapping a single child in empty fragments `<>{child}</>` (`react/jsx-no-useless-fragment`).
   - Emojis in JSX must be wrapped with an accessible span: `<span role="img" aria-label="description">...</span>` (`jsx-a11y/accessible-emoji`).
13. **Playground Form Controls Standard (Zero Native HTML Elements)**:
   - In all interactive playground components (`*Playground.tsx`), developers MUST strictly use design system primitives (`<Select>`, `<TextInput>`, `<Checkbox>`, `<Switch>`, `<SliderInput>`) from `@core-circle/ui`.
   - Never render native HTML `<select>`, `<input>`, or `<label>` elements in control panels.
14. **Theming & Section Spacing Architecture (`tabContentWrapper`)**:
   - All tab contents in containers must be wrapped in `<div className={s.tabContentWrapper}>` using `tabContentWrapper: 'flex flex-col gap-12 w-full'` from `atoms.styles.ts`.
   - This guarantees uniform 48px vertical spacing between adjacent showcase preview cards. `<DocSection>` must have `className="w-full"`.
15. **Compound & Multi-Slot Variant Propagation**:
   - Primitives supporting surface variants (such as `dark`) must propagate the `variant` prop to all internal CVA style helpers (`statLabelVariants({ variant, size })`, `statValueVariants({ variant, size })`, etc.) to prevent invisible black-on-black text or default light-card child styling on dark cards.

---

## 7. Mandatory Tri-Deliverable Protocol for New Components

Every new UI component (Atom, Molecule, or Generator) in `@core-circle/ui` must deliver **all three mandatory artifacts** before it can be merged into `main`:

### Deliverable 1: Core Primitive (`packages/ui/src/`)
1. **Component**: `packages/ui/src/components/atoms/[name]/[name].tsx` with `React.forwardRef`, `cn(...)`, and CVA variants.
2. **Styles**: `packages/ui/src/components/atoms/[name]/[name].styles.ts` with CVA definitions and design tokens.
3. **Types**: `packages/ui/src/interface/atoms/[name]/[name].types.ts` with complete prop and variant typing.
4. **Re-export**: Must be re-exported in `packages/ui/src/components/index.ts`.

### Deliverable 2: Companion Storybook Story (`packages/ui/src/stories/`)
1. **Colocation & Naming**:
   - Atoms: `packages/ui/src/stories/atoms/[name]/[name].stories.tsx`
   - Molecules: `packages/ui/src/stories/molecules/[name]/[name].stories.tsx`
   - Generators: `packages/ui/src/stories/generators/[name]/[name].stories.tsx`
2. **Strict Relative Component Import**:
   - Must import component relatively from `../../../components/atoms/[name]/[name]` (or `../../../components/molecules/[name]/[name]`, `../../../components/generators/[name]/[name]`).
   - Never import from `./[name]` or `../[name]`.
3. **Story Requirements**:
   - Must export default `Meta` with `tags: ['autodocs']`.
   - Provide stories demonstrating default state, key variants, sizes, and interactive states.
4. **CI Gatekeeper Verification**:
   - PR gatekeeper (`lint-and-build`) builds Storybook (`npm run build-storybook`). Broken stories will fail the check.

### Deliverable 3: Webapp Documentation & Registry Indexing (`src/app/docs/`)
1. **6-File Showcase Anatomy**:
   - Page route: `src/app/docs/src/app/atoms/[name]/page.tsx`
   - Container: `src/app/docs/src/containers/atoms-page/[name]/[name]Container.tsx` (5 canonical tabs: `Theming`, `Variants`, `Playground`, `Mock Code`, `Overview`)
   - Styles: `src/app/docs/src/containers/atoms-page/[name]/[name].styles.ts`
   - Constants: `src/app/docs/src/constants/atoms-page/[name]/[name]Constants.tsx`
   - Playground: `src/app/docs/src/components/playground/[name]/[Name]Playground.tsx` (Accordion benchmark: unified card, design system form primitives `Select`/`TextInput`/`Checkbox`, syntax-highlighted dark footer)
   - Playground Styles: `src/app/docs/src/components/playground/[name]/[Name]Playground.styles.ts` (importing `accordionPlaygroundStyles`)
   - Types: `src/app/docs/src/interface/containers/atoms/[name].types.ts`
2. **MANDATORY Registry Indexing**:
   - Prepend the component definition card at index 0 of `ATOM_CARDS` in `src/app/docs/src/constants/atoms-page/atoms-page-constant.ts` (or `molecules-page-constant.ts` / `generators-page-constant.tsx`) without sorting.
   - Components omitted from `ATOM_CARDS` will not appear in the `/atoms` overview grid or component search bar.


