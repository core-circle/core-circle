# @core-circle/icons

A collection of beautifully crafted icons for the Core Circle ecosystem, optimized for performance and ease of use.

## Installation

Install the package via the GitHub Packages registry:

```bash
npm install @core-circle/icons
```

## Usage

```tsx
import { LoadingIcon, CodeIcon } from '@core-circle/icons';

export default function IconExample() {
  return (
    <div>
      <LoadingIcon className="animate-spin" />
      <CodeIcon />
    </div>
  );
}
```

## Features

- **Optimized SVG**: Small bundle size and crisp rendering at any scale.
- **Tree-shakable**: Only include the icons you actually use in your bundle.
- **React Ready**: Fully typed React components with support for all standard SVG props.
