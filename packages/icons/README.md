# @core-circle/icons

[![Version](https://img.shields.io/badge/version-0.0.8-blue.svg)](https://github.com/core-circle/core-circle)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A collection of **520+ beautifully crafted, tree-shakeable SVG icon components** for React and Tailwind CSS. Built as the visual icon foundation of the **CoreCircle Design System**.

### 🔗 Live Demos & Storybook
- 📖 [Core Circle UI | Premium Component Library](https://core-circle.github.io/core-circle/)
- 🎨 [Atoms / Accordion - Bordered ⋅ Storybook](https://core-circle.github.io/core-circle/storybook/?path=/story/atoms-accordion--bordered)

---

## 1. Installation

Install via the GitHub Packages registry:

```bash
npm install @core-circle/icons
```

> **Note**: To install from GitHub Packages, make sure your `.npmrc` includes the `@core-circle` scope:
> ```ini
> @core-circle:registry=https://npm.pkg.github.com
> ```

---

## 2. Key Features

- **520+ Icons**: Comprehensive set covering Navigation, Actions, Devices, Media, Commerce, Communication, Files, System, and Development.
- **100% Customizable**: First-class support for `size`, `color`, and `strokeWidth` without needing CSS hack overrides.
- **Dual Named Exports**: Supports both standard PascalCase component names (e.g., `CheckIcon`, `CodeIcon`, `CopyIcon`, `EyeIcon`, `LoadingIcon`, `HomeIcon`) and Lucide-compatible aliases (`CircleCheck`, `Settings`, `AlertTriangle`).
- **Tree-Shakable**: Built as ES modules (`dist/index.mjs`) — only the icons you import will be bundled into your app.
- **Accessible & Scalable**: Renders clean inline SVG elements with `viewBox="0 0 24 24"` that scale crisply on retina and high-DPI displays.

---

## 3. Quick Start

```tsx
import { SearchIcon, Bell, ChevronRight, CheckIcon } from '@core-circle/icons';

export default function Example() {
  return (
    <div className="flex items-center gap-4">
      {/* Standard size and currentColor */}
      <SearchIcon />

      {/* Custom size (px) and color */}
      <Bell size={20} color="#2563eb" />

      {/* Styled with Tailwind CSS classes */}
      <ChevronRight size={18} className="text-core-circle-primary hover:translate-x-0.5 transition-transform" />

      {/* Fine-tuned stroke width */}
      <CheckIcon size={24} strokeWidth={2.5} className="text-emerald-500" />
    </div>
  );
}
```

---

## 4. Component API & Props

Every icon component accepts standard `IconProps` along with all native SVG attributes:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `number \| string` | `24` | Width and height in pixels (or CSS unit string like `"1.5rem"`). |
| `color` | `string` | `'currentColor'` | Stroke color (supports hex, rgb, hsl, or inherits from parent text color). |
| `strokeWidth` | `number \| string` | `2` | Stroke weight in pixels (e.g. `1.5` for delicate lines, `2.5` for bold). |
| `className` | `string` | `''` | Tailwind utility classes (e.g. `text-blue-600`, `animate-spin`, `hover:scale-110`). |
| `...svgProps` | `React.SVGProps<SVGSVGElement>` | — | Standard SVG attributes (`aria-hidden`, `onClick`, `style`, etc.). |

---

## 5. Usage Recipes

### A. Size & Stroke Customization

```tsx
import { Shield, Sparkles } from '@core-circle/icons';

export const IconVariants = () => (
  <div className="flex items-center gap-6">
    {/* Ultra-fine line (1.25px stroke) */}
    <Shield size={28} strokeWidth={1.25} className="text-slate-500" />

    {/* Balanced standard (2px stroke) */}
    <Shield size={28} strokeWidth={2} className="text-core-circle-primary" />

    {/* Bold emphasis (2.75px stroke) */}
    <Shield size={28} strokeWidth={2.75} className="text-emerald-600" />
  </div>
);
```

### B. Animated Spinners & Interactive Buttons

```tsx
import { LoadingIcon, ArrowRight } from '@core-circle/icons';

export const LoadingButton = ({ isLoading }: { isLoading: boolean }) => (
  <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
    {isLoading ? (
      <LoadingIcon size={18} className="animate-spin text-white" />
    ) : (
      <>
        <span>Continue</span>
        <ArrowRight size={16} />
      </>
    )}
  </button>
);
```

### C. Integrating with Tailwind Colors

Because `color="currentColor"` is the default, icons automatically inherit colors from your Tailwind text color classes:

```tsx
import { Heart, Star, CheckIcon, CircleX } from '@core-circle/icons';

export const ColoredBadges = () => (
  <div className="flex gap-3">
    <span className="inline-flex items-center gap-1.5 text-xs text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
      <Heart size={14} /> Favorite
    </span>
    <span className="inline-flex items-center gap-1.5 text-xs text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
      <Star size={14} /> Top Rated
    </span>
    <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
      <CheckIcon size={14} /> Verified
    </span>
  </div>
);
```

---

## 6. Categorized Icon Directory (520+ Icons)

- **Navigation & Arrows**: `ArrowDown`, `ArrowUp`, `ArrowLeft`, `ArrowRight`, `ChevronDown`, `ChevronUp`, `ChevronLeft`, `ChevronRight`, `ExternalLink`, `Compass`, `Navigation`, `Route`, `Menu`, `HomeIcon`
- **Actions & Status**: `CheckIcon` / `checkIcon`, `CircleCheck`, `CircleX`, `XIcon`, `Plus`, `Minus`, `Alert`, `AlertTriangle`, `AlertOctagon`, `Info`, `Rotate`, `RefreshCw`, `Download`, `Upload`
- **Media & Audio**: `Play`, `Pause`, `Video`, `Camera`, `Mic`, `Speaker`, `Headphones`, `Image`, `ImageIcon`, `Film`, `Music`, `Volume2`, `VolumeX`
- **Communication**: `Mail`, `Phone`, `Chat`, `MessageSquare`, `PaperAirplane`, `Share`, `Bell`, `Pin`
- **Hardware & Devices**: `Laptop`, `Monitor`, `Mobile`, `Tablet`, `Watch`, `Battery`, `Wifi`, `Bluetooth`, `Cpu`, `HardDrive`, `Server`, `Printer`
- **Commerce & Finance**: `ShoppingBag`, `ShoppingCart`, `CreditCard`, `Banknotes`, `Wallet`, `Ticket`, `Trophy`, `Tag`, `Gift`, `Calculator`, `Receipt`
- **Files, Folders & Documents**: `File`, `Folder`, `FolderOpen`, `DocumentText`, `Clipboard`, `Archive`, `Book`, `Bookmark`, `PaperClip`
- **Design & Interface**: `Palette`, `Brush`, `Crop`, `Eraser`, `Scissors`, `Layers`, `Grid`, `SlidersHorizontalIcon`, `SwitchIcon`, `SettingsIcon`, `SearchIcon`, `Sun`, `Moon`, `Sparkles`, `Star`, `Heart`
- **Security & Access**: `Lock`, `Unlock`, `Key`, `Shield`, `Fingerprint`, `EyeIcon` / `eyeIcon`, `EyeOff`
- **Development & Tools**: `CodeIcon` / `codeIcon`, `Terminal`, `Braces`, `Brackets`, `Bug`, `Rocket`, `Puzzle`, `Boxes`, `Database`, `GitBranch`, `GitCommit`, `GitPullRequest`

---

## 7. License

MIT © [CoreCircle Team](https://github.com/core-circle/core-circle)
