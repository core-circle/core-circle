# @core-circle/theme

The single source of truth for the Core Circle Design System. This package contains all design tokens, including colors, typography, spacing, and shadows.

## Installation

Install the package via the GitHub Packages registry:

```bash
npm install @core-circle/theme
```

## Usage

### CSS (Tailwind CSS v4)

Import the theme variables directly into your global CSS:

```css
@import "@core-circle/theme/tailwind-theme.css";
```

### JavaScript/TypeScript

Access the raw tokens in your code:

```typescript
import { theme, colors } from '@core-circle/theme';

console.log(theme.primary); // Returns the primary brand color
```

## Features

- **Centralized Tokens**: Manage colors, fonts, and spacing in one place.
- **Tailwind Ready**: Pre-configured CSS variables for the Tailwind v4 engine.
- **Vibrant Palette**: Curated, harmonious color palettes designed for premium UIs.
