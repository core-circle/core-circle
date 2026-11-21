# @core-circle/docs

The official documentation site for the Core Circle component library. Built with Next.js and Tailwind CSS v4.

### 🔗 Live Deployments
- 📖 [Core Circle UI | Premium Component Library](https://core-circle.github.io/core-circle/)
- 🎨 [Atoms / Accordion - Bordered ⋅ Storybook](https://core-circle.github.io/core-circle/storybook/?path=/story/atoms-accordion--bordered)

## Development

To run the documentation site locally:

```bash
npx nx dev @core-circle/docs
```

## Build

To create a production-ready static build:

```bash
npx nx build @core-circle/docs
```

## Documentation Standards

All component pages in this documentation app must strictly adhere to the [Canonical Documentation Standards](../../../DOCS_STANDARDS.md) based on the `Accordion` benchmark:

### 1. Strict 6-File Component Architecture
Every documentation showcase feature must implement:
```text
src/app/docs/src/
├── app/atoms/[name]/page.tsx                        # 1. Server Component page route
├── containers/atoms-page/[name]/
│   ├── [name]Container.tsx                          # 2. 5-Tab Client Component container
│   └── [name].styles.ts                             # 3. Colocated styles extending atomsPageStyles
├── constants/atoms-page/[name]/[name]Constants.tsx  # 4. Header, Breadcrumbs & PropsTable data
├── components/playground/[name]/[Name]Playground.tsx# 5. Interactive sandbox
└── interface/containers/atoms/[name].types.ts       # 6. Centralized ContainerProps interface
```

### 2. Critical Rules to Eliminate Rework
- **`'use client';` on Line 1**: Must always be placed on the first line before any import statements to prevent ESLint `@typescript-eslint/no-unused-expressions` failures.
- **5 Canonical Tabs**: Exactly 5 tabs in standard sequence: `Theming (Tab 1, default)` $\rightarrow$ `Variants` $\rightarrow$ `Playground` $\rightarrow$ `Mock Code` $\rightarrow$ `Overview`.
- **Layout Consistency**: Colocated `[name].styles.ts` must export `export const [name]PageStyles = atomsPageStyles;` (`max-w-5xl mx-auto px-6 py-10`). No ad-hoc `p-12 lg:p-20` padding.
- **Centralized Types**: Never type container props as `any`. Always import and use `[Name]ContainerProps` from `interface/containers/atoms/[name].types.ts`.
- **Verified Icon Imports**: Only import icons exported by `@core-circle/icons` (`packages/icons/index.ts`). Never guess icon names (e.g. use `Cloud` not `Server`, `UserIcon` not `User`, `DocumentText` not `FileText`).
- **100% Reuse**: Exclusively use `@core-circle/ui` primitives (`Typography`, `Breadcrumb`, `Badge`, `Button`, `Card`, `Tabs`) and `@core-circle/icons`. Zero raw HTML elements.

## Features

- **Component Previews**: Interactive examples of all library components.
- **Live Playground**: Real-time experimentation with component props.
- **Dark Mode Ready**: Sleek, modern aesthetics that respect user preferences.
- **Turbopack Powered**: Lightning-fast development experience.
