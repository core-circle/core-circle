# CoreCircle Monorepo Code Brain

> **Bird's-Eye Monorepo Map & Structural Blueprint**
> Read this single file to navigate the entire monorepo without searching, exploring directory trees, or guessing component APIs.

---

## 1. Monorepo Topology & Imports

```
core-circle/
├── packages/
│   ├── ui/       # @core-circle/ui     (43 Atomic primitives, hooks, CVA styles, types)
│   ├── theme/    # @core-circle/theme  (Design tokens, 22-hue spectrum, Tailwind plugin, CSS vars)
│   └── icons/    # @core-circle/icons  (520+ SVG React icon components)
├── src/app/
│   └── docs/     # @core-circle/docs   (Next.js docs, interactive playgrounds, page containers)
└── .agents/      # Agent skills, code brain, token optimization guides
```

### Import Rules (Zero Redundancy)
```ts
// UI Primitives & Hooks
import { Button, Card, TextInput, Typography, Badge, useToast } from '@core-circle/ui';

// Icons (never create raw SVGs)
import { SearchIcon, ChevronDown, CheckIcon, Alert } from '@core-circle/icons';

// Theme Tokens
import { colors, theme } from '@core-circle/theme';
```

---

## 2. Complete Atomic Primitives Directory (`@core-circle/ui`)

All 43 atoms live in `packages/ui/src/components/atoms/` and are re-exported by `packages/ui/src/components/index.ts`.

| Atom | Relative Path | Key Props / Variants | Description & Use Case |
| :--- | :--- | :--- | :--- |
| **Accordion** | `atoms/accordion/` | `items`, `type` ('single'/'multiple'), `variant` (10 variants: `bordered`, `card`, `filled`, `glassmorphic`, `floating`, `gradient`, `pill`, `separated`, `minimal`, `ghost`), `size`, `expandIcon`, `collapseIcon` | Collapsible content sections |
| **Alert** | `atoms/alert/` | `variant` (12 variants: `info`, `success`, `warning`, `destructive`, `card`, `floating`, `glassmorphic`, `gradient`, `pill`, `minimal`, `outline`, `soft`), `title`, `children`, `icon`, `action`, `onClose`, `fullWidth` | Inline feedback and alert banner |
| **AspectRatio** | `atoms/aspect-ratio/` | `ratio`, `children`, `className` | Maintain aspect ratio for media/content |
| **Avatar** | `atoms/avatar/` | `src`, `alt`, `fallback`, `size` ('xs','sm','md','lg','xl'), `shape` ('circle','square'), `status` | User profile avatar with initials fallback |
| **AvatarGroup** | `atoms/avatar-group/` | `avatars`, `max`, `size`, `spacing` | Stacked avatar list with counter overflow |
| **Badge** | `atoms/badge/` | `variant` (12 variants: `primary`, `secondary`, `success`, `warning`, `destructive`, `info`, `ghost`, `outline`, `glassmorphic`, `gradient`, `floating`, `dot`), `size`, `shape`, `dot`, `pulse` | Status badges, tags, chips |
| **Breadcrumb** | `atoms/breadcrumb/` | `items` ({label, href, icon}), `variant` (10 variants), `size`, `separator`, `showBack`, `backLabel` | Navigation trail and breadcrumb items |
| **Button** | `atoms/button/` | `variant` (12 variants: `primary`, `secondary`, `success`, `warning`, `destructive`, `outline`, `ghost`, `glassmorphic`, `gradient`, `floating`, `pill`, `soft`), `size` ('sm','md','lg','icon'), `shape`, `loading`, `startIcon`, `endIcon` | Primary interactive button |
| **Card** | `atoms/card/` | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `variant` (11 variants), `orientation` ('vertical'/'horizontal'), `hoverable` | Card container & layout slots |
| **Checkbox** | `atoms/checkbox/` | `checked`, `onChange`, `label`, `disabled`, `error`, `indeterminate`, `size` | Form checkbox with label & indeterminate state |
| **ColorPicker** | `atoms/color-picker/` | `value`, `onChange`, `format`, `presets`, `disabled` | Color picker input with presets |
| **Counter** | `atoms/counter/` | `value`, `min`, `max`, `step`, `onChange`, `size`, `disabled` | Numeric stepper / increment-decrement |
| **DatePicker** | `atoms/date-picker/` | `value`, `onChange`, `label`, `placeholder`, `disabled`, `fullWidth` | Single date picker popover |
| **DatePickerRange** | `atoms/date-picker/` | `value` ({ from, to }), `onChange`, `label`, `placeholder`, `disabled` | Date range selector |
| **Calendar** | `atoms/date-picker/` | `selectedDate`, `selectedRange`, `onSelect`, `mode` ('single'/'range') | Standalone calendar grid |
| **Dialog** | `atoms/dialog/` | `open`, `onOpenChange`, `title`, `description`, `children`, `footer`, `size` | Modal dialog overlay |
| **Divider** | `atoms/divider/` | `variant` (10 variants: `solid`, `dashed`, `dotted`, `gradient`, `fade`, `accent`, etc.), `orientation`, `thickness`, `align` | Visual divider with embedded text slot |
| **Drawer** | `atoms/drawer/` | `open`, `onOpenChange`, `position` ('left','right','top','bottom'), `size` | Slide-out drawer panel |
| **FileUpload** | `atoms/file-upload/` | `onDrop`, `accept`, `maxFiles`, `maxSize`, `disabled`, `multiple` | Drag-and-drop file upload zone |
| **Image** | `atoms/image/` | `src`, `alt`, `fallback`, `aspectRatio`, `rounded`, `fit` | Image wrapper with loading fallback |
| **Indicator** | `atoms/indicator/` | `status` ('online','offline','busy','away'), `size`, `ping` | Status indicator dot / ping |
| **Kbd** | `atoms/kbd/` | `keys`, `size` ('sm','md','lg') | Keyboard shortcut badge |
| **Label** | `atoms/label/` | `htmlFor`, `required`, `size`, `disabled` | Form input label |
| **MultiSelect** | `atoms/multi-select/` | `options`, `value`, `onChange`, `placeholder`, `searchable`, `clearable`, `maxSelected` | Multi-item select dropdown with tags |
| **OtpInput** | `atoms/otp-input/` | `length`, `value`, `onChange`, `disabled`, `autoFocus`, `mask` | One-time password verification input |
| **Popover** | `atoms/popover/` | `trigger`, `content`, `placement`, `open`, `onOpenChange` | Floating interactive popover |
| **Progress** | `atoms/progress/` | `value`, `max`, `variant` ('primary','secondary','success','warning','destructive'), `size`, `showValue` | Linear progress bar |
| **RadioButton** | `atoms/radio-button/` | `name`, `value`, `checked`, `onChange`, `label`, `disabled` | Radio option input |
| **Rating** | `atoms/rating/` | `value`, `max`, `onChange`, `readOnly`, `precision`, `size` | Star rating display & selector |
| **RichText** | `atoms/richtext/` | `content`, `editable`, `onChange`, `placeholder` | Formatted rich text editor/preview |
| **ScrollArea** | `atoms/scroll-area/` | `children`, `orientation` ('vertical','horizontal','both') | Custom scrollable container |
| **Select** | `atoms/select/` | `options`, `value`, `onChange`, `placeholder`, `disabled`, `size` | Dropdown single-select |
| **Skeleton** | `atoms/skeleton/` | `variant` ('text','circular','rectangular','rounded'), `width`, `height`, `animation` | Loading placeholder skeleton |
| **SliderInput** | `atoms/slider-input/` | `value`, `min`, `max`, `step`, `onChange`, `disabled`, `range` | Slider range input |
| **Spinner** | `atoms/spinner/` | `size` ('xs','sm','md','lg','xl'), `variant` ('primary','white','current') | Loading spinner |
| **Stepper** | `atoms/stepper/` | `steps`, `activeStep`, `orientation`, `variant` ('numbers','circles','dots') | Multi-step progress tracker |
| **Switch** | `atoms/switch/` | `checked`, `onChange`, `label`, `disabled`, `size` | Toggle switch |
| **Tabs** | `atoms/tabs/` | `items`, `activeTab`, `onChange`, `variant` ('line','pill','enclosed') | Tab switcher |
| **TagInput** | `atoms/tag-input/` | `tags`, `onTagsChange`, `placeholder`, `maxTags`, `disabled` | Tag input box |
| **TextInput** | `atoms/text-input/` | `type`, `value`, `onChange`, `placeholder`, `startIcon`, `endIcon`, `error`, `helperText`, `size` | Text field with icons & error handling |
| **Textarea** | `atoms/textarea/` | `value`, `onChange`, `placeholder`, `rows`, `resize`, `error`, `disabled` | Multi-line textarea |
| **TimePicker** | `atoms/time-picker/` | `value`, `onChange`, `format` ('12h'/'24h'), `step`, `disabled` | Time selector input |
| **Toast & Toaster** | `atoms/toast/` | `variant` (12 variants), `title`, `description`, `action`, `duration`, `useToast()` hook | System notifications & viewport |
| **Tooltip** | `atoms/tooltip/` | `content`, `placement`, `delay`, `children` | Hover tooltip |
| **Typography** | `atoms/typography/` | `variant` ('h1'..'h6', 'body1', 'body2', 'caption', 'overline'), `weight`, `color`, `as` | Design token typography wrapper |

---

## 3. Composing Molecules (`packages/ui/src/components/molecules/`)

Molecules are created by composing existing Atoms. Always follow this standard structure:

```text
packages/ui/src/
├── components/molecules/[name]/
│   ├── [name].tsx             # React.forwardRef component composing Atoms
│   └── [name].styles.ts       # CVA styling variants
├── interface/molecules/[name]/
│   └── [name].types.ts        # TypeScript interface extending HTMLAttributes
└── stories/molecules/
    └── [name].stories.tsx      # Storybook stories
```

### Golden Composition Example (MetricCard)
```tsx
import * as React from 'react';
import { cn } from '../../../utils/cn';
import { Typography } from '../../atoms/typography/typography';
import { Badge } from '../../atoms/badge/badge';
import { Card, CardContent } from '../../atoms/card/card';
import { metricCardVariants } from './metric-card.styles';
import { MetricCardProps } from '../../../interface/molecules/metric-card/metric-card.types';

export const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  ({ title, value, change, trend = 'up', icon, className, ...props }, ref) => (
    <Card ref={ref} className={cn(metricCardVariants(), className)} {...props}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <Typography variant="body2" className="text-gray-500 font-medium">{title}</Typography>
          {icon && <span className="text-core-circle-primary shrink-0">{icon}</span>}
        </div>
        <div className="mt-4 flex items-baseline justify-between">
          <Typography variant="h3" className="font-bold">{value}</Typography>
          {change && <Badge variant={trend === 'up' ? 'success' : 'destructive'} size="sm">{change}</Badge>}
        </div>
      </CardContent>
    </Card>
  )
);
MetricCard.displayName = 'MetricCard';
```

---

## 4. Icons Directory (`@core-circle/icons`)

Import any icon directly: `import { [IconName] } from '@core-circle/icons';`

> **Golden Rule**: Never create raw `<svg>` elements inside UI components. All **520+ icons** live in `@core-circle/icons` and are 100% customizable.

### Icon Props & Signature
Every icon component implements `IconProps` (`packages/icons/types.ts`):
```tsx
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;        // Default: 24 (accepts px number or CSS string like '1.5rem')
  color?: string;                // Default: 'currentColor' (inherits text color or hex/rgb)
  strokeWidth?: string | number; // Default: 2 (accepts 1, 1.5, 2, 2.5, etc.)
  className?: string;            // Default: '' (works cleanly with Tailwind w-*, h-*, text-*)
}
```

### Usage Patterns
```tsx
import { SearchIcon, CheckIcon, AlertTriangle, Trash2 } from '@core-circle/icons';

// 1. Size & Color via Props
<SearchIcon size={18} color="#2563eb" />

// 2. Custom Stroke Width
<AlertTriangle size={24} strokeWidth={1.5} color="var(--color-core-circle-warning)" />

// 3. Composed with Tailwind Utilities (Automatic currentColor inheritance)
<Trash2 className="w-5 h-5 text-core-circle-destructive hover:scale-110 transition-transform cursor-pointer" />
```

### Categorized Icon Directory (520 Total Icons)
All 520 icons are exported in alphabetical order from `packages/icons/index.ts`:
- **Navigation & Arrows (60+)**: `ArrowDown`, `ArrowLeft`, `ArrowRight`, `ArrowUp`, `ArrowBigDown`, `ArrowBigUp`, `ArrowDownLeft`, `ArrowDownRight`, `ChevronDown`, `ChevronLeft`, `ChevronRight`, `ChevronUp`, `ChevronFirst`, `ChevronLast`, `ChevronsDown`, `ChevronsUp`, `ChevronsLeft`, `ChevronsRight`, `Compass`, `Locate`, `LocateFixed`, `MapPin`, `Move`, `Navigation`, `CornerDownLeft`, `CornerUpRight`, etc.
- **System, Status & Feedback (60+)**: `Alert`, `AlertCircle`, `AlertOctagon`, `AlertTriangle`, `CheckIcon`, `CheckCheck`, `CircleCheck`, `CircleDot`, `CircleX`, `CircleAlert`, `HelpCircle`, `Info`, `XIcon`, `Plus`, `Minus`, `Ban`, `ShieldCheck`, `ShieldAlert`, `ShieldClose`, `ShieldOff`, etc.
- **Media, Audio & Controls (50+)**: `Play`, `Pause`, `Square`, `Circle`, `FastForward`, `Rewind`, `SkipBack`, `SkipForward`, `Volume`, `Volume1`, `Volume2`, `VolumeX`, `Mic`, `MicOff`, `Video`, `VideoOff`, `Music`, `Film`, `Disc`, `Radio`, `Tv`, `Speaker`, `Headphones`, `Sliders`, `Shuffle`, `Repeat`, etc.
- **Devices, Hardware & Tech (50+)**: `Cpu`, `HardDrive`, `Server`, `Database`, `Monitor`, `Laptop`, `Tablet`, `Smartphone`, `Watch`, `Printer`, `Router`, `Usb`, `Cable`, `Power`, `PowerOff`, `BatteryCharging`, `BatteryFull`, `BatteryLow`, `Wifi`, `WifiOff`, `Bluetooth`, `BluetoothConnected`, etc.
- **Files, Folders & Storage (70+)**: `File`, `FileText`, `FileCode`, `FileArchive`, `FileSpreadsheet`, `FileImage`, `FileAudio`, `FileVideo`, `FilePlus`, `FileMinus`, `FileCheck`, `FileX`, `Folder`, `FolderOpen`, `FolderPlus`, `FolderMinus`, `FolderArchive`, `FolderTree`, `Files`, `Archive`, `Save`, `Download`, `Upload`, `CloudDownload`, `CloudUpload`, etc.
- **Commerce, Business & Analytics (50+)**: `Banknotes`, `Wallet`, `CreditCard`, `Coins`, `Receipt`, `DollarSign`, `Euro`, `Bitcoin`, `Percent`, `Tag`, `Tags`, `ShoppingBag`, `ShoppingCart`, `Store`, `PackageCheck`, `Truck`, `Briefcase`, `Calculator`, `TrendingUp`, `TrendingDown`, `Activity`, `BarChart`, `PieChart`, `LineChart`, etc.
- **Communication & Social (50+)**: `Mail`, `MailOpen`, `MailCheck`, `Chat`, `MessageSquare`, `MessageCircle`, `Send`, `SendHorizontal`, `Inbox`, `Bell`, `BellRing`, `BellOff`, `Share`, `ThumbUp`, `ThumbDown`, `Heart`, `HeartCrack`, `Star`, `Bookmark`, `Flag`, `Globe`, `Link`, `Link2`, `AtSign`, `Hash`, etc.
- **Tools, Editing & Design (60+)**: `Brush`, `Crop`, `Eraser`, `Layers`, `Palette`, `Scissors`, `SettingsIcon`, `SlidersHorizontalIcon`, `SquareEdit`, `Wrench`, `CodeIcon`, `Terminal`, `TypeIcon`, `Highlighter`, `PenTool`, `AlignLeft`, `AlignCenter`, `AlignRight`, `List`, `Grid`, etc.
- **Weather & Time (40+)**: `Sun`, `Moon`, `Cloud`, `CloudRain`, `CloudSnow`, `CloudLightning`, `Wind`, `Umbrella`, `Droplet`, `Flame`, `Sparkles`, `Zap`, `Clock`, `Calendar`, `CalendarDays`, `CalendarRange`, `Timer`, `Hourglass`, etc.
- **Geometric Shapes & UI Elements (40+)**: `Circle`, `Square`, `Triangle`, `Diamond`, `Hexagon`, `Octagon`, `Badge`, `Layout`, `LayoutDashboard`, `LayoutGrid`, `LayoutList`, `LayoutPanelLeft`, etc.

---

## 5. Design Tokens Quick-Reference (`@core-circle/theme`)

- **Full 22-Hue Palette Spectrum (242 Shades)**:
  - Neutrals: `slate`, `gray`, `zinc`, `neutral`, `stone`
  - Warm: `red`, `orange`, `amber`, `yellow`, `rose`
  - Cool & Fresh: `green`, `emerald`, `lime`, `teal`, `cyan`, `sky`, `blue`
  - Vibrant & Creative: `indigo`, `violet`, `purple`, `fuchsia`, `pink`
  - All with 11 steps: `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`
- **Categorical Chart Palettes**: `core-circle-chart-1` through `10` (high-contrast, accessible light & dark mode data viz palettes).
- **Multiple Font Options**:
  - `font-core-circle-sans`: Inter (Modern neutral UI sans-serif)
  - `font-core-circle-primary`: Montserrat (Iconic brand sans-serif)
  - `font-core-circle-secondary`: Ubuntu (Humanist warm sans-serif)
  - `font-core-circle-serif`: Playfair Display / Merriweather (Editorial / luxury serif)
  - `font-core-circle-mono`: JetBrains Mono / Fira Code (Developer / tabular monospace)
  - `font-core-circle-display`: Outfit (Expressive brand display)
  - `font-core-circle-heading` (alias -> Montserrat), `font-core-circle-body` (alias -> Inter)
- **Granular Spacing Scale**:
  - `core-circle-3xs` (2px), `core-circle-2xs` (4px), `core-circle-xs` (8px), `core-circle-sm` (12px), `core-circle-md` (16px), `core-circle-lg` (24px), `core-circle-xl` (32px), `core-circle-2xl` (40px), `core-circle-3xl` (48px), `core-circle-4xl` (64px)
- **Border Radii**:
  - `rounded-core-circle-xs` (0.125rem), `rounded-core-circle-sm` (0.25rem), `rounded-core-circle-md` (0.375rem), `rounded-core-circle-lg` (0.5rem), `rounded-core-circle-xl` (0.75rem), `rounded-core-circle-2xl` (1rem), `rounded-core-circle-full`
- **Shadows**:
  - `shadow-core-circle-subtle`, `shadow-core-circle-elevated`, `shadow-core-circle-floating`
- **Direct Classes & Presets**:
  - Tailwind v4: `@import "@core-circle/theme/tailwind-theme.css";`
  - Tailwind v3: `presets: [require('@core-circle/theme/preset')]`
  - Dark Mode: Automatic via `.dark` or `[data-theme="dark"]` container/root attributes.
  - Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px) available in CSS & JS (`breakpoints`).
  - Direct helper utilities: `.core-circle-heading`, `.core-circle-body`, `.core-circle-card`, `.core-circle-surface`, `.core-circle-focus-ring`
- **Strict Rule**: No arbitrary hardcoded hex values (e.g. `#2563eb`) inside components; use design token class names.

---

## 6. Documentation Benchmark (`Accordion`)

When building or updating documentation pages in `src/app/docs/`:

1. **Benchmark Reference**: `src/app/docs/src/containers/atoms-page/accordion/accordionContainer.tsx`
2. **Standard Page Layout**:
   - Must import or use `atomsPageStyles` (`max-w-5xl mx-auto px-6 py-10`, `header: 'mb-8'`).
   - Breadcrumb schema: `[{ label: 'Home', href: '/' }, { label: 'Atoms', href: '/atoms' }, { label: '[ComponentName]' }]`.
3. **5 Standard Tabs Order**:
   - `Theming` (Tab 1, default active, `Palette` icon): 5 production themes with full width previews.
   - `Variants` (Tab 2, `Layers` icon): 10+ variants in `DocSection` containers.
   - `Playground` (Tab 3, `Play` icon): Interactive props controls + live code generator.
   - `Mock Code` (Tab 4, `CodeIcon`): Realistic backend API/CMS payload and consumer implementation.
   - `Overview` (Tab 5, `Info` icon): Quick usage snippet and `PropsTable`.

---

## 7. Token Optimization Strategies for AI Agents

1. **Zero-Turn Navigation**: Use this Code Brain instead of searching directories or querying file trees.
2. **Selective File Edits**: When adding a variant, only touch `[name].styles.ts` and `[name].types.ts`.
3. **Compose, Don't Code**: Assemble existing Atoms (`Card`, `Typography`, `Badge`, `Button`) instead of writing raw HTML and custom CSS.
4. **Strict Command Policy**: NEVER run `build`, `test`, or `lint` commands unless specifically and explicitly requested by the user.

---

## 8. Theme Generator & White-Label Architecture

### A. Generator Tool Function (`@core-circle/theme`)
- **Source**: `packages/theme/theme-generator/` (`themeGenerator.ts`, `colorScale.ts`, `themeGenerator.types.ts`).
- **Export**: `import { generateProductTheme } from '@core-circle/theme'`.
- **Purpose**: Generates complete, 100% white-labeled Tailwind CSS v4 stylesheets (`[product].theme.css`) and structured JS token objects.
- **Tokens Output**: 6 Font families, 11-step color scales (`50`–`950`) for Primary, Secondary, Accent, Neutrals, semantic mappings, 10 chart colors, 8 border radii, 3 elevation shadows, dark mode overrides (`.dark`).
- **Internal Asset**: `packages/theme/core-circle-themes/core-circle.theme.css` (exported as `@core-circle/theme/core-circle.theme.css`).

### B. Interactive Studio (`ThemeGenerator` Generator)
- **Component**: `packages/ui/src/components/generators/theme-generator/theme-generator.tsx`.
- **Docs Route**: `/generators/theme-generator` in `src/app/docs/src/app/generators/theme-generator/page.tsx`.
- **Features**: 20-char input limits, live component sandbox (light/dark canvas), 1-click brand presets (CoreCircle, NovaPay, Verdant, Veloce, Cyber), Copy CSS / Download stylesheet, and complete 3-step Integration Guide tab.

---

## 9. PROJECT SCAFFOLDER & BOILERPLATE ARCHITECTURE

- **Location**: `packages/ui/src/components/generators/project-scaffolder/`
- **Component**: `<ProjectScaffolder />` (forwardRef)
- **Engine**: `scaffolder-engine.ts` (Pure TypeScript in-browser PKZip standard binary encoder)
- **Docs Route**: `/generators/project-scaffolder` in `src/app/docs/src/app/generators/project-scaffolder/page.tsx`
- **Supported Stacks**:
  - **Next.js 15**: App Router, TypeScript, Tailwind CSS v4, PostCSS, `@core-circle/ui`, `@core-circle/theme`, `@core-circle/icons` prewired with `src/styles/[prefix].theme.css` and `.npmrc`.
  - **React 19 + Vite 6**: Single-page application, TypeScript, `@tailwindcss/vite`, `@core-circle/*` preconfigured.
- **Dynamic Versioning Engine**:
  - Automatically imports `packages/ui/package.json` (`uiPackage.version`) to resolve `^${version}` dynamically at build time.
  - CoreCircle packages always inherit the latest monorepo release with zero manual template editing.
- **Features**: Live interactive file tree explorer, code inspector with copy buttons, terminal quickstart guide, custom brand token integration (colors, neutral tones, border radius), zero-backend instant `.zip` browser download.
