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
| Sliders | `<SliderInput>` | `import { SliderInput } from '@core-circle/ui'` |
| Status tags / Chips / Pills | `<Badge>` | `import { Badge } from '@core-circle/ui'` |
| Tab navigation | `<Tabs>` | `import { Tabs } from '@core-circle/ui'` |
| Text labels | `<Label>` / `<Typography>` | `import { Label, Typography } from '@core-circle/ui'` |
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
│   └── molecules/[name]/
│       ├── [name].tsx             # Composed component using existing Atoms
│       └── [name].styles.ts       # CVA variant definition
├── interface/
│   ├── atoms/[name]/[name].types.ts       # TypeScript interfaces & props
│   └── molecules/[name]/[name].types.ts
├── stories/
│   ├── atoms/[name].stories.tsx   # Storybook stories with args & variants
│   └── molecules/[name].stories.tsx
└── components/index.ts            # Export component & type definitions
```

---

## 4. Token-Efficient Workflow for AI Pair Programming

1. **Activate the Skill**: When building or extending components, activate the workspace skill `.agents/skills/core-circle-component-architect/SKILL.md`.
2. **Consult Code Brain**: Check `.agents/skills/core-circle-component-architect/code-brain.md` in the skill for existing props, variants, icons, and tokens instead of reading large component source files.
3. **Extend with Variants**: When a new style or state is required, add a variant in `[name].styles.ts` and prop in `[name].types.ts` rather than duplicating or rewriting the component.
4. **Compose Molecules**: Always build molecules by combining existing atoms (e.g. `Card` = `CardHeader` + `Typography` + `Badge` + `Button`).

---

## 5. Command Execution & Build Policy (Strict)

- **NEVER run `build`, `test`, `lint`, or other long-running verification commands automatically** after code edits.
- Only run `npm run build`, `npm run build:packages`, `npm test`, or `npm run lint` when the user **specifically and explicitly asks** for it.

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
6. **Standard 5-Tab Order**:
   - **`Theming`** (Tab 1, default active, `Palette` icon): 5 real-world production themes utilizing full `w-full` width.
   - **`Variants`** (Tab 2, `Layers` icon): Minimum 10 variants grouped cleanly in `DocSection`s utilizing full `w-full` width.
   - **`Playground`** (Tab 3, `Play` icon): Interactive playground with live property controls and code generator.
   - **`Mock Code`** (Tab 4, `CodeIcon`): Dynamic backend API/CMS payload and consumer component example.
   - **`Overview`** (Tab 5, `Info` icon): Quick usage snippet and comprehensive `PropsTable`.
7. **Verified Icon Imports**:
   - Only import icons that actually exist in `@core-circle/icons` (`packages/icons/index.ts`).
   - Do not guess icon names (e.g. use `Cloud` not `Server`, `UserIcon` or `UserCircle` not `User`, `DocumentText` not `FileText`). Turbopack fails the build if an invalid named icon export is imported.
8. **Zero Ad-Hoc Dark Containers**:
   - Do NOT introduce localized dark wrappers (`bg-slate-900`, `bg-slate-950`, `bg-black`, `dark:bg-slate-900`) inside preview cards or theming showcases.
   - Child elements resolve light-mode semantic tokens (`text-core-circle-text-main` = black), causing invisible black-on-black text and inverted hover flashes.
   - Always use clean surface tokens (`bg-white` or `bg-core-circle-bg-surface`, `border-core-circle-border-main`, `text-core-circle-text-main`). Full dark mode will be ported globally at the root `<html>` level once the entire webapp is complete.
9. **Tailwind v4 Dark Mode Isolation & Stacking Context**:
   - In Tailwind CSS v4, dark variants are strictly isolated to class-based activation via `@custom-variant dark (&:where(.dark, .dark *));` in `global.css` and `tailwind.css`. Never allow media-query based dark bleeding from user OS themes.
   - In component primitives (`packages/ui/`), avoid hardcoding pitch-black surfaces (`bg-slate-950`). Use semantic tokens or soft neutral surfaces (`bg-core-circle-bg-surface`, `bg-slate-50`, `bg-slate-100`).
   - In overlapping cluster components (such as `AvatarGroup`), always enforce natural left-to-right stacking order with decreasing z-indexes (`style={{ zIndex: totalCount - idx }}`). This guarantees that bottom-right status indicators (`online`, `busy`) are never clipped into half-moons by adjacent sibling circles.

---

## 7. Mandatory Storybook Companion Protocol

Every new UI component (Atom or Molecule) in `@core-circle/ui` must have a corresponding Storybook story file before it can be merged into `main`.

1. **Colocation & Naming**:
   - Atoms: `packages/ui/src/stories/atoms/[name]/[name].stories.tsx`
   - Molecules: `packages/ui/src/stories/molecules/[name]/[name].stories.tsx`
2. **Strict Relative Component Import**:
   - Must import component relatively from `../../../components/atoms/[name]/[name]` (or `../../../components/molecules/[name]/[name]`).
   - Never import from `./[name]` or `../[name]`.
3. **Story Requirements**:
   - Must export default `Meta` with `tags: ['autodocs']`.
   - Provide stories demonstrating default state, key variants, sizes, and interactive states.
4. **Pre-Merge CI Verification**:
   - The PR gatekeeper job (`lint-and-build`) automatically builds Storybook (`npm run build-storybook`) on every PR to `main`.
   - Broken imports, missing component exports, or invalid args in Storybook will immediately fail the PR check and block merge.


