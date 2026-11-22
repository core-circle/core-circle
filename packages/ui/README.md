# @core-circle/ui

[![Version](https://img.shields.io/badge/version-0.0.8-blue.svg)](https://github.com/core-circle/core-circle)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A high-performance, accessible, and themeable React component library built for modern web applications. Powered by **Tailwind CSS**, **Class Variance Authority (CVA)**, and the **CoreCircle Design System**.

### 🔗 Live Demos & Storybook
- 📖 [Core Circle UI | Premium Component Library](https://core-circle.github.io/core-circle/)
- 🎨 [Atoms / Accordion - Bordered ⋅ Storybook](https://core-circle.github.io/core-circle/storybook/?path=/story/atoms-accordion--bordered)

---

## 1. Installation

Install `@core-circle/ui` along with its peer token and icon dependencies:

```bash
npm install @core-circle/ui @core-circle/icons @core-circle/theme
```

> **Note**: To install from the GitHub Packages registry, configure your project's `.npmrc`:
> ```ini
> @core-circle:registry=https://npm.pkg.github.com
> ```

---

## 2. Tailwind CSS Setup

### Option A: Tailwind CSS v4 (Recommended)

In your root CSS file (e.g. `globals.css` or `styles.css`):

```css
@import "tailwindcss";
@import "@core-circle/theme/tailwind-theme.css";
@import "@core-circle/theme/fonts.css"; /* Optional: Google Fonts */
```

### Option B: Tailwind CSS v3

In your `tailwind.config.js`:

```javascript
module.exports = {
  presets: [require('@core-circle/theme/preset')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@core-circle/ui/dist/**/*.{js,mjs}',
  ],
};
```

---

## 3. Component Catalog (40+ Components)

| Category | Components | Description |
| :--- | :--- | :--- |
| **Forms & Inputs** | `Button`, `TextInput`, `Textarea`, `Select`, `MultiSelect`, `Checkbox`, `RadioButton`, `Switch`, `SliderInput`, `OtpInput`, `TagInput`, `ColorPicker`, `TimePicker`, `DatePicker`, `DatePickerRange`, `FileUpload`, `Rating`, `Counter` | Accessible, fully typed inputs with validation states, micro-interactions, and keyboard navigation. |
| **Feedback & Status** | `Alert`, `Badge`, `Indicator`, `Progress`, `Spinner`, `Skeleton`, `Toast`, `Toaster` | Real-time status indicators, loading states, and contextual toast notifications. |
| **Layout & Surfaces** | `Card`, `Accordion`, `Drawer`, `Dialog`, `Popover`, `Tooltip`, `ScrollArea`, `AspectRatio`, `Divider`, `Kbd` | Elevated surfaces, responsive side sheets, focus-trapped dialogs, and layout primitives. |
| **Navigation** | `Breadcrumb`, `Tabs`, `Stepper` | Route breadcrumbs, animated segmented tabs, and multi-step progress indicators. |
| **Identity & Typography** | `Avatar`, `AvatarGroup`, `Typography`, `Label`, `Image`, `RichText` | Clustered avatar stacks, typography hierarchies, and structured content display. |
| **Generators & Tooling** | `ThemeGenerator`, `ProjectScaffolder` | Interactive, production-ready Tailwind v4 theme creation studio and in-browser boilerplate scaffolder. |

---

## 4. Usage Examples

### A. Button with Variants & Icons

```tsx
import { Button } from '@core-circle/ui';
import { Sparkles, ArrowRight } from '@core-circle/icons';

export const ButtonDemo = () => (
  <div className="flex flex-wrap gap-4">
    <Button variant="primary" size="md" startIcon={<Sparkles size={16} />}>
      Explore AI
    </Button>
    <Button variant="outline" size="md" endIcon={<ArrowRight size={16} />}>
      Learn More
    </Button>
    <Button variant="gradient" size="md" shape="pill">
      Upgrade Pro
    </Button>
    <Button variant="primary" loading>
      Saving...
    </Button>
  </div>
);
```

### B. Card with Header, Corner Badge & Subcomponents

```tsx
import { Card, Typography, Badge, Button } from '@core-circle/ui';
import { Star, ArrowRight } from '@core-circle/icons';

export const PricingCard = () => (
  <Card variant="gradient" hoverable className="max-w-md">
    <Card.Corner position="top-right" shape="circle" size="md">
      <div className="bg-purple-600 text-white p-2 rounded-full shadow-lg">
        <Star size={16} />
      </div>
    </Card.Corner>

    <Card.Header divider>
      <div className="flex items-center justify-between">
        <Typography variant="h3">Enterprise Plan</Typography>
        <Badge variant="success">Popular</Badge>
      </div>
      <Typography variant="muted">For high-growth teams and institutions.</Typography>
    </Card.Header>

    <Card.Body>
      <Typography variant="h1" className="text-core-circle-primary font-bold">
        $99<span className="text-sm font-normal text-slate-500"> / month</span>
      </Typography>
      <Typography variant="p" className="mt-4">
        Full access to 520+ icons, 40+ primitives, and dedicated team support.
      </Typography>
    </Card.Body>

    <Card.Footer divider className="flex justify-between items-center">
      <Typography variant="small" className="text-slate-400">Cancel anytime</Typography>
      <Button variant="primary" size="sm" endIcon={<ArrowRight size={14} />}>
        Get Started
      </Button>
    </Card.Footer>
  </Card>
);
```

### C. AvatarGroup with Stacked Overlap & Overflow

```tsx
import { AvatarGroup, Avatar } from '@core-circle/ui';

export const TeamAvatars = () => (
  <AvatarGroup max={4} size="md" variant="ring" spacing="normal">
    <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" name="Alex Chen" />
    <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" name="Marcus Ray" />
    <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" name="Sarah Jenkins" />
    <Avatar src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" name="David Kim" />
    <Avatar name="Emma Watson" />
    <Avatar name="Liam Vance" />
  </AvatarGroup>
);
```

### D. MultiSelect with Search & Selected Tags

```tsx
import { useState } from 'react';
import { MultiSelect } from '@core-circle/ui';

const OPTIONS = [
  { value: 'react', label: 'React' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'tailwind', label: 'Tailwind CSS' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'graphql', label: 'GraphQL' },
];

export const TechSelector = () => {
  const [selected, setSelected] = useState(['react', 'typescript']);

  return (
    <div className="max-w-md">
      <MultiSelect
        label="Technologies"
        placeholder="Select tech stack..."
        options={OPTIONS}
        value={selected}
        onChange={setSelected}
        searchable
        showSelectAll
      />
    </div>
  );
};
```

### E. Toast Notification System

```tsx
import { Button, Toaster, useToast } from '@core-circle/ui';

export const ToastTrigger = () => {
  const { toast } = useToast();

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => {
          toast({
            title: 'Project Published',
            description: 'Your package is now live on GitHub Packages.',
            variant: 'success',
          });
        }}
      >
        Publish Package
      </Button>

      {/* Place once at application root */}
      <Toaster position="bottom-right" />
    </div>
  );
};
```

### F. Theme Generator Studio

Embed the complete Tailwind v4 theme creation studio:

```tsx
import { ThemeGenerator } from '@core-circle/ui';

export const ThemeStudioPage = () => (
  <div className="max-w-7xl mx-auto p-6">
    <ThemeGenerator
      initialConfig={{
        productName: 'NovaPay',
        prefix: 'nova',
        primaryColor: '#6366f1',
        neutralUndertone: 'slate',
        radius: 'rounded',
      }}
      onThemeChange={(result) => {
        console.log('Generated CSS:', result.fileName, result.css);
      }}
    />
  </div>
);
```

### G. Project Scaffolder & Boilerplate Generator

Generate downloadable, production-ready Next.js 15 or React 19 boilerplates in-browser:

```tsx
import { ProjectScaffolder } from '@core-circle/ui';

export const ScaffolderPage = () => (
  <div className="max-w-7xl mx-auto p-6">
    <ProjectScaffolder
      initialConfig={{
        projectName: 'saas-starter',
        framework: 'nextjs',
        brandName: 'CloudNova',
        cssPrefix: 'nova',
        primaryColor: '#6366f1',
        neutralUndertone: 'slate',
        radius: 'rounded',
        packageManager: 'pnpm',
      }}
      onDownload={(config) => {
        console.log('Project downloaded:', config.projectName);
      }}
    />
  </div>
);
```

---

## 5. Dark Mode Support

All components seamlessly adapt to light and dark themes with zero runtime CSS-in-JS overhead:

```html
<!-- App-level dark mode -->
<html class="dark">
  <!-- All @core-circle/ui components render in dark mode! -->
</html>

<!-- Or container-scoped dark mode -->
<div data-theme="dark">
  <!-- Scoped dark mode -->
</div>
```

---

## 6. Architecture & Customization

- **CVA Variants**: Each component's visual styles live in dedicated `[name].styles.ts` files using `class-variance-authority`.
- **CSS Class Merging**: Easily extend or override styles using the `className` prop, merged cleanly via `cn()` (`clsx` + `tailwind-merge`).
- **No Hardcoded Hexes**: All colors, radii, spacing, and elevations map directly to `@core-circle/theme` tokens.

---

## 7. License

MIT © [CoreCircle Team](https://github.com/core-circle/core-circle)
