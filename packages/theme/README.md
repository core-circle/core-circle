# @core-circle/theme

The publishable, unified single source of truth for the **CoreCircle Design System**.
Contains all design tokens, Tailwind v4 theme configuration, universal Tailwind v3 preset, dark mode support, and multiple font family options.

---

## 1. Installation

Install via npm or GitHub Packages:

```bash
npm install @core-circle/theme
```

---

## 2. Usage in External Projects

### Option A: Tailwind CSS v4 (Recommended)

In your global CSS file (e.g. `globals.css` or `styles.css`):

```css
/* Imports CoreCircle theme, colors, typography, and font definitions */
@import "@core-circle/theme/tailwind-theme.css";
```

*(Optional)* If you want to bundle Google Font weights automatically:
```css
@import "@core-circle/theme/fonts.css";
```

### Option B: Tailwind CSS v3 (or `tailwind.config.js`)

In your project's `tailwind.config.js` or `tailwind.config.ts`:

```javascript
// tailwind.config.js
module.exports = {
  presets: [require('@core-circle/theme/preset')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@core-circle/ui/dist/**/*.{js,mjs}'
  ],
  // ...
};
```

### Option C: JavaScript / TypeScript Token Access

Access the raw design tokens directly in JavaScript / TypeScript code:

```typescript
import { theme, darkTheme, colors, fonts, spacing, radius, breakpoints } from '@core-circle/theme';

console.log(theme.primary);       // '#2563eb'
console.log(darkTheme.bg.page);   // '#020617'
console.log(fonts.display);        // '"Outfit", "Plus Jakarta Sans", "Montserrat", sans-serif'
console.log(spacing.md);           // '1rem' (16px)
console.log(radius.lg);            // '0.5rem' (8px)
console.log(breakpoints.md);       // '768px'
```

---

## 3. Dark Mode Support

Dark mode works automatically out of the box with zero runtime configuration.

Add `.dark` or `data-theme="dark"` to `<html>`, `<body>`, or any container element:

```html
<!-- Whole App in Dark Mode -->
<html class="dark">
  <!-- Semantic variables automatically switch to dark values! -->
</html>

<!-- Or Scoped Container Dark Mode -->
<div data-theme="dark" class="bg-core-circle-bg-surface p-core-circle-md">
  <p class="text-core-circle-text-main">I am automatically in dark mode.</p>
</div>
```

**What automatically flips in Dark Mode:**
* `bg-core-circle-bg-page` $\rightarrow$ `#020617` (Deep slate)
* `bg-core-circle-bg-surface` $\rightarrow$ `#0f172a` (Elevated surface)
* `bg-core-circle-bg-muted` $\rightarrow$ `#1e293b`
* `text-core-circle-text-main` $\rightarrow$ `#f8fafc` (High contrast text)
* `text-core-circle-text-muted` $\rightarrow$ `#94a3b8`
* `border-core-circle-border-main` $\rightarrow$ `#1e293b`
* `core-circle-ring` $\rightarrow$ `#60a5fa`

---

## 4. Multiple Font Family Options

Choose from 6 curated font families for versatile brand and interface needs:

| Utility Class | Font Family | Character / Use Case |
| :--- | :--- | :--- |
| `font-core-circle-sans` | **Inter** | Modern, neutral, high-legibility UI sans-serif |
| `font-core-circle-primary` | **Montserrat** | Geometric, iconic brand display / headings |
| `font-core-circle-secondary` | **Ubuntu** | Warm, friendly humanist sans-serif |
| `font-core-circle-serif` | **Playfair Display** / **Merriweather** | Editorial, luxury, high-contrast serif |
| `font-core-circle-mono` | **JetBrains Mono** / **Fira Code** | Technical, code, tabular data, numbers |
| `font-core-circle-display` | **Outfit** | Expressive, modern geometric branding |

Semantic font bindings:
- `font-core-circle-heading`: Uses primary brand font (`Montserrat`)
- `font-core-circle-body`: Uses modern interface font (`Inter`)
- `font-core-circle-code`: Uses developer monospace font (`JetBrains Mono`)

---

## 5. Ready-to-Use Direct Utility Classes

### Colors & 22-Hue Palette Spectrum (242 Shades)
- **22 Full Hues**: `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `rose`, `green`, `emerald`, `lime`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`.
- **Steps**: Each hue has 11 steps: `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950` (e.g. `bg-core-circle-emerald-500`, `text-core-circle-rose-600`).
- **Categorical Chart Palettes**: `bg-core-circle-chart-1` through `10` (automatic light and dark mode high-contrast values for dashboard graphs & metrics).
- **Semantic Backgrounds**: `bg-core-circle-primary`, `bg-core-circle-secondary`, `bg-core-circle-destructive`, `bg-core-circle-warning`, `bg-core-circle-bg-page`, `bg-core-circle-bg-surface`, `bg-core-circle-bg-muted`
- **Semantic Text**: `text-core-circle-primary`, `text-core-circle-text-main`, `text-core-circle-text-muted`, `text-core-circle-text-subtle`, `text-core-circle-destructive`
- **Semantic Borders**: `border-core-circle-border-main`, `border-core-circle-border-muted`, `border-core-circle-primary`

### Spacing & Sizing Scale
- Margin & Padding: `p-core-circle-3xs` (2px), `p-core-circle-2xs` (4px), `p-core-circle-xs` (8px), `p-core-circle-sm` (12px), `p-core-circle-md` (16px), `p-core-circle-lg` (24px), `p-core-circle-xl` (32px), `p-core-circle-2xl` (40px)
- Gap: `gap-core-circle-sm`, `gap-core-circle-md`, `gap-core-circle-lg`

### Typography Scales
- Font Sizes: `text-core-circle-xs` (12px), `text-core-circle-sm` (14px), `text-core-circle-base` (16px), `text-core-circle-lg` (18px), `text-core-circle-xl` (20px), `text-core-circle-2xl` (24px), `text-core-circle-3xl` (30px), `text-core-circle-4xl` (36px), `text-core-circle-5xl` (48px)
- Font Weights: `font-core-circle-light`, `font-core-circle-normal`, `font-core-circle-medium`, `font-core-circle-semibold`, `font-core-circle-bold`, `font-core-circle-extrabold`
- Line Heights: `leading-core-circle-tight` (1.25), `leading-core-circle-normal` (1.5), `leading-core-circle-relaxed` (1.625)
- Letter Spacing: `tracking-core-circle-tight` (-0.025em), `tracking-core-circle-normal` (0em), `tracking-core-circle-wide` (0.025em)

### Border Radii
- `rounded-core-circle-xs` (2px), `rounded-core-circle-sm` (4px), `rounded-core-circle-md` (6px), `rounded-core-circle-lg` (8px), `rounded-core-circle-xl` (12px), `rounded-core-circle-2xl` (16px), `rounded-core-circle-full`

### Elevations & Shadows
- `shadow-core-circle-subtle`
- `shadow-core-circle-elevated`
- `shadow-core-circle-floating`

### Accessibility & Motion
- Built-in `@media (prefers-reduced-motion: reduce)` compliance to respect user accessibility preferences.
- Focus rings with `ring-core-circle-primary` and `.core-circle-focus-ring`.
