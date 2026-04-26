# Core Circle Monorepo
![Favicon](/src/app/docs/public/favicon.svg)

A modern, high-performance monorepo for the Core Circle ecosystem. Built with **Nx**, **Next.js**, and **Tailwind CSS v4**.

## Architecture

This monorepo is organized into several key areas:

### 📦 Packages (`/packages`)

- **[@core-circle/ui](./packages/ui)**: The core component library.
- **[@core-circle/theme](./packages/theme)**: Design tokens and global styles.
- **[@core-circle/icons](./packages/icons)**: Custom SVG icon set.

### 🚀 Applications (`/src/app`)

- **[@core-circle/docs](./src/app/docs)**: Documentation site and component showcase.

## Getting Started

### Prerequisites

- Node.js 24+
- npm

### Installation

```bash
npm install
```

### Development

To start the documentation site locally:

```bash
npx nx dev @core-circle/docs
```

To run Storybook for the UI components:

```bash
npx nx storybook @core-circle/ui
```

## Publishing

Packages are automatically published to GitHub Packages on every push to the `main` branch (if changes are detected) via GitHub Actions.

---

Built with ❤️ by the Core Circle Team.
