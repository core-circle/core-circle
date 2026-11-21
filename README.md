# Core Circle Monorepo

<p align="center">
  <img src="./src/app/docs/public/favicon.svg" alt="Core Circle Logo" width="80" height="80" />
</p>

A modern, high-performance monorepo for the Core Circle ecosystem. Built with **Nx**, **Next.js**, and **Tailwind CSS v4**.

### 🌐 Live Documentation & Showcase
- 📖 [Core Circle UI | Premium Component Library](https://core-circle.github.io/core-circle/)
- 🎨 [Atoms / Accordion - Bordered ⋅ Storybook](https://core-circle.github.io/core-circle/storybook/?path=/story/atoms-accordion--bordered)

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

## Branching & Release Strategy

Both `main` and `development` branches are strictly protected. Direct pushes and force-pushes are blocked.

- **`development` Branch (Protected)**: Integration branch for all active engineering work. Multiple contributors submit Pull Requests from feature or bugfix branches targeting `development`. PRs require two mandatory gatekeeper labels: `build_and_lint` (or `build`) and `ready_to_merge`.
- **`main` Branch (Protected)**: Production-ready branch. All releases and live deployments must originate strictly from `development` via a Pull Request. PRs require Code Owner approval (`@1694srinivasan`) and the `ready_to_merge` label.

---

## Label-Driven CI/CD & Protection

Workflows are dynamically orchestrated via Pull Request labels on both `development` and `main`:

### 🛡️ Development Gatekeeper Labels (`.github/workflows/enforce-development-pr.yml`)

Pull requests targeting `development` enforce two mandatory gatekeeper checks:

| Mandatory Label | Gatekeeper Role | CI Enforcement & Behavior |
| :--- | :--- | :--- |
| `build_and_lint` *(or `build`)* | **Compilation & Lint Gate** | Strictly mandatory. Triggers and enforces full monorepo linting (`nx run-many -t lint`), all package builds (`@core-circle/ui`, `@core-circle/theme`, `@core-circle/icons`), web docs build, and UI Storybook compilation. PR cannot merge into `development` until this check passes. |
| `ready_to_merge` | **Reviewer Sign-off Gate** | Strictly mandatory. Attached by an authorized reviewer or Code Owner once code review is complete. Blocks PR merge until attached. |

### 🛡️ Main Gatekeeper Labels (`.github/workflows/enforce-main-pr.yml`)

Pull requests from `development` into `main` enforce production release gates:

| Label | Role | Behavior |
| :--- | :--- | :--- |
| `ready_to_merge` | **Mandatory Approval Gate** | Strictly required before a release PR can be merged into `main`. The `check-ready-to-merge` status check blocks merging until Code Owner (`@1694srinivasan`) attaches this label. |

### 🚀 Pipeline & Deployment Labels

| Label | Target Branch | Trigger Point | Behavior |
| :--- | :--- | :--- | :--- |
| `deploy_pages` | `main` | **PR & Merge** | **During PR**: Runs full lint and build validation.<br>**On Merge**: Automatically builds and deploys both **Web Docs** and **Storybook** live to GitHub Pages. |
| `build_publish_package` | `main` | **PR & Merge** | **During PR**: Pre-verifies package compilation.<br>**On Merge**: Automatically publishes packages to GitHub Packages registry (`npm.pkg.github.com`). |
| `build` / `build_and_lint` | `development` & `main` | **During PR** | Runs full monorepo linting and compilation (`nx run-many -t lint build` + Storybook). |
| `run:test` | `development` & `main` | **During PR** | Runs unit test suites across the monorepo (`nx run-many -t test`). |
| `run:storybook` | `development` & `main` | **During PR** | Verifies that component Storybooks build cleanly (`npm run build-storybook`). |

### 🎯 Smart Scope Labels

Attach scope labels alongside `build_publish_package` to target specific packages and prevent unnecessary version bumps:

| Scope Label | Target Package       | Scope Effect                                          |
| :---------- | :------------------- | :---------------------------------------------------- |
| `pkg:ui`    | `@core-circle/ui`    | Builds and publishes only the core component library. |
| `pkg:theme` | `@core-circle/theme` | Builds and publishes only design tokens and themes.   |
| `pkg:icons` | `@core-circle/icons` | Builds and publishes only the SVG icon library.       |
| `web:docs`  | `@core-circle/docs`  | Flags documentation web application updates.          |

_(Note: If `build_publish_package` is used without a scope tag, all packages tagged `package` are published together)._

---

## How to Release & Deploy (Workflow Guide)

1. **Bump Version**: Update the `"version"` field in the relevant `packages/*/package.json` (e.g. `0.0.1` $\rightarrow$ `0.0.2`).
2. **Open PR**: Create a Pull Request from `development` into `main`.
3. **Apply Labels**:
   - For doc/showcase updates: Add `web:docs` + `deploy_pages`.
   - For component package releases: Add `pkg:ui` + `build_publish_package` + `deploy_pages`.
4. **Verify Checks**: Ensure automated checks (`check-source-branch`, `lint-and-build`, etc.) pass with green checkmarks.
5. **Approve & Merge**: The Code Owner attaches `ready_to_merge` and merges the PR.
6. **Live Sites**:
   - 📖 **Web Docs**: [https://1694srinivasan.github.io/core-circle/](https://1694srinivasan.github.io/core-circle/)
   - 🎨 **Storybook**: [https://1694srinivasan.github.io/core-circle/storybook/](https://1694srinivasan.github.io/core-circle/storybook/)

---

Built with ❤️ by the Core Circle Team.
