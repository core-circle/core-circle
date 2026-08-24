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
2. **Consult Reference Catalogs**: Check `references/component-catalog.md` in the skill for existing props and variants instead of reading large component source files.
3. **Extend with Variants**: When a new style or state is required, add a variant in `[name].styles.ts` and prop in `[name].types.ts` rather than duplicating or rewriting the component.
4. **Compose Molecules**: Always build molecules by combining existing atoms (e.g. `Card` = `CardHeader` + `Typography` + `Badge` + `Button`).

---

## 5. Command Execution & Build Policy (Strict)

- **NEVER run `build`, `test`, `lint`, or other long-running verification commands automatically** after code edits.
- Only run `npm run build`, `npm run build:packages`, `npm test`, or `npm run lint` when the user **specifically and explicitly asks** for it.

