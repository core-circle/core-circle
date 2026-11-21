/**
 * Project Scaffolder Engine
 * Pure TypeScript in-browser project generator and PKZip archiver.
 * Creates production-ready Next.js and React Vite boilerplate zips with CoreCircle & Tailwind CSS v4.
 */

import { generateProductTheme } from '@core-circle/theme';
import type {
  ProjectScaffolderConfig,
  GeneratedFileTree,
} from '../../../interface/generators/project-scaffolder/project-scaffolder.types';
import uiPackage from '../../../../package.json';

/**
 * Dynamic Dependency Compatibility Matrix
 * Automatically inherits the latest CoreCircle monorepo package version.
 */
export const DEFAULT_DEPENDENCY_VERSIONS = {
  coreCircle: `^${uiPackage.version || '0.0.8'}`,
  react: '^19.0.0',
  reactDom: '^19.0.0',
  next: '^15.1.0',
  vite: '^6.0.0',
  tailwindcss: '^4.0.0',
  typescript: '^5',
};

/**
 * Standard CRC-32 Table & Checksum Calculation
 */
const CRC_TABLE: Uint32Array = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c >>> 0;
  }
  return table;
})();

function computeCrc32(data: Uint8Array): number {
  let crc = 0xffffffff;
  for (let i = 0; i < data.length; i++) {
    crc = (crc >>> 8) ^ CRC_TABLE[(crc ^ data[i]) & 0xff];
  }
  return (crc ^ 0xffffffff) >>> 0;
}

/**
 * Pure TypeScript ZIP File Creator (Zero External Dependencies)
 * Generates an uncompressed PKZip standard archive blob ready for immediate browser download.
 */
export function generateZipBlob(files: GeneratedFileTree): Blob {
  const enc = new TextEncoder();
  interface PreparedEntry {
    nameBytes: Uint8Array;
    dataBytes: Uint8Array;
    crc: number;
    offset: number;
    size: number;
  }

  const entries: PreparedEntry[] = [];
  let localHeadersTotal = 0;

  const now = new Date();
  const time =
    ((now.getHours() & 0x1f) << 11) |
    ((now.getMinutes() & 0x3f) << 5) |
    ((now.getSeconds() >> 1) & 0x1f);
  const date =
    (((now.getFullYear() - 1980) & 0x7f) << 9) |
    (((now.getMonth() + 1) & 0x0f) << 5) |
    (now.getDate() & 0x1f);

  for (const [path, content] of Object.entries(files)) {
    const nameBytes = enc.encode(path);
    const dataBytes = enc.encode(content);
    const crc = computeCrc32(dataBytes);

    entries.push({
      nameBytes,
      dataBytes,
      crc,
      offset: localHeadersTotal,
      size: dataBytes.length,
    });

    localHeadersTotal += 30 + nameBytes.length + dataBytes.length;
  }

  let centralDirTotal = 0;
  for (const e of entries) {
    centralDirTotal += 46 + e.nameBytes.length;
  }

  const totalLength = localHeadersTotal + centralDirTotal + 22;
  const buffer = new Uint8Array(totalLength);
  const view = new DataView(buffer.buffer);
  let pos = 0;

  // 1. Local File Headers + File Data
  for (const e of entries) {
    view.setUint32(pos, 0x04034b50, true); pos += 4;
    view.setUint16(pos, 20, true); pos += 2; // version needed: 2.0
    view.setUint16(pos, 0x0800, true); pos += 2; // bit flag: UTF-8 filename
    view.setUint16(pos, 0, true); pos += 2; // compression: Store (uncompressed)
    view.setUint16(pos, time, true); pos += 2;
    view.setUint16(pos, date, true); pos += 2;
    view.setUint32(pos, e.crc, true); pos += 4;
    view.setUint32(pos, e.size, true); pos += 4;
    view.setUint32(pos, e.size, true); pos += 4;
    view.setUint16(pos, e.nameBytes.length, true); pos += 2;
    view.setUint16(pos, 0, true); pos += 2; // extra field length
    buffer.set(e.nameBytes, pos); pos += e.nameBytes.length;
    buffer.set(e.dataBytes, pos); pos += e.dataBytes.length;
  }

  const centralDirStart = pos;

  // 2. Central Directory File Headers
  for (const e of entries) {
    view.setUint32(pos, 0x02014b50, true); pos += 4;
    view.setUint16(pos, 20, true); pos += 2; // version made by
    view.setUint16(pos, 20, true); pos += 2; // version needed
    view.setUint16(pos, 0x0800, true); pos += 2; // bit flag: UTF-8
    view.setUint16(pos, 0, true); pos += 2; // compression: Store
    view.setUint16(pos, time, true); pos += 2;
    view.setUint16(pos, date, true); pos += 2;
    view.setUint32(pos, e.crc, true); pos += 4;
    view.setUint32(pos, e.size, true); pos += 4;
    view.setUint32(pos, e.size, true); pos += 4;
    view.setUint16(pos, e.nameBytes.length, true); pos += 2;
    view.setUint16(pos, 0, true); pos += 2; // extra field length
    view.setUint16(pos, 0, true); pos += 2; // comment length
    view.setUint16(pos, 0, true); pos += 2; // disk number start
    view.setUint16(pos, 0, true); pos += 2; // internal file attributes
    view.setUint32(pos, 0, true); pos += 4; // external file attributes
    view.setUint32(pos, e.offset, true); pos += 4; // offset of local header
    buffer.set(e.nameBytes, pos); pos += e.nameBytes.length;
  }

  // 3. End of Central Directory Record (EOCD)
  view.setUint32(pos, 0x06054b50, true); pos += 4;
  view.setUint16(pos, 0, true); pos += 2; // disk number
  view.setUint16(pos, 0, true); pos += 2; // disk with central directory
  view.setUint16(pos, entries.length, true); pos += 2; // records on this disk
  view.setUint16(pos, entries.length, true); pos += 2; // total records
  view.setUint32(pos, centralDirTotal, true); pos += 4; // size of central dir
  view.setUint32(pos, centralDirStart, true); pos += 4; // offset of central dir
  view.setUint16(pos, 0, true); pos += 2; // comment length

  return new Blob([buffer], { type: 'application/zip' });
}

/**
 * Triggers a file download in the user's browser
 */
export function downloadBlob(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

/**
 * Generates the complete project file tree according to the user's configuration
 */
export function generateProjectFiles(config: ProjectScaffolderConfig): GeneratedFileTree {
  const root = config.projectName.trim().toLowerCase().replace(/[^\w-]/g, '') || 'my-app';
  const prefix = config.cssPrefix.trim().toLowerCase().replace(/[^\w-]/g, '') || 'brand';
  const brandName = config.brandName.trim() || 'My Product';

  // 1. Generate customized Tailwind v4 theme CSS
  const themeResult = generateProductTheme({
    productName: brandName,
    prefix,
    primaryColor: config.primaryColor,
    neutralUndertone: config.neutralUndertone,
    radius: config.radius,
    includeUtilityClasses: true,
  });

  const files: GeneratedFileTree = {};

  if (config.framework === 'nextjs') {
    // --------------------------------------------------------------------------
    // NEXT.JS (APP ROUTER) BOILERPLATE
    // --------------------------------------------------------------------------
    files[`${root}/package.json`] = JSON.stringify(
      {
        name: root,
        version: '0.1.0',
        private: true,
        scripts: {
          dev: 'next dev',
          build: 'next build',
          start: 'next start',
          lint: 'next lint',
        },
        dependencies: {
          '@core-circle/ui': DEFAULT_DEPENDENCY_VERSIONS.coreCircle,
          '@core-circle/theme': DEFAULT_DEPENDENCY_VERSIONS.coreCircle,
          '@core-circle/icons': DEFAULT_DEPENDENCY_VERSIONS.coreCircle,
          next: DEFAULT_DEPENDENCY_VERSIONS.next,
          react: DEFAULT_DEPENDENCY_VERSIONS.react,
          'react-dom': DEFAULT_DEPENDENCY_VERSIONS.reactDom,
        },
        devDependencies: {
          '@tailwindcss/postcss': '^4.0.0',
          '@types/node': '^20',
          '@types/react': '^19',
          '@types/react-dom': '^19',
          postcss: '^8.5.0',
          tailwindcss: '^4.0.0',
          typescript: '^5',
        },
      },
      null,
      2
    );

    files[`${root}/tsconfig.json`] = JSON.stringify(
      {
        compilerOptions: {
          target: 'ES2017',
          lib: ['dom', 'dom.iterable', 'esnext'],
          allowJs: true,
          skipLibCheck: true,
          strict: true,
          noEmit: true,
          esModuleInterop: true,
          module: 'esnext',
          moduleResolution: 'bundler',
          resolveJsonModule: true,
          isolatedModules: true,
          jsx: 'preserve',
          incremental: true,
          plugins: [{ name: 'next' }],
          paths: {
            '@/*': ['./src/*'],
          },
        },
        include: ['next-env.d.ts', '**/*.ts', '**/*.tsx', '.next/types/**/*.ts'],
        exclude: ['node_modules'],
      },
      null,
      2
    );

    files[`${root}/next.config.ts`] = `import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
`;

    files[`${root}/postcss.config.mjs`] = `export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
`;

    files[`${root}/.npmrc`] = `@core-circle:registry=https://npm.pkg.github.com
`;

    files[`${root}/.gitignore`] = `# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts
`;

    files[`${root}/src/styles/${prefix}.theme.css`] = themeResult.css;

    files[`${root}/src/app/globals.css`] = `@import "tailwindcss";
@import "../styles/${prefix}.theme.css";

/* CoreCircle semantic mapping fallback */
@theme {
  --color-core-circle-primary: var(--color-${prefix}-primary);
  --color-core-circle-bg-surface: var(--color-${prefix}-bg-surface);
  --color-core-circle-text-main: var(--color-${prefix}-text-main);
}

body {
  background-color: var(--color-${prefix}-bg-page);
  color: var(--color-${prefix}-text-main);
  font-family: var(--font-${prefix}-body);
}
`;

    files[`${root}/src/app/layout.tsx`] = `import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '${brandName} - Powered by CoreCircle',
  description: 'Built with CoreCircle Design System and Tailwind CSS v4',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
`;

    files[`${root}/src/app/page.tsx`] = generateNextPageTemplate(config, prefix, brandName);

    files[`${root}/README.md`] = generateReadmeTemplate(config, brandName, 'Next.js 15 (App Router)');
  } else {
    // --------------------------------------------------------------------------
    // REACT + VITE BOILERPLATE
    // --------------------------------------------------------------------------
    files[`${root}/package.json`] = JSON.stringify(
      {
        name: root,
        private: true,
        version: '0.0.0',
        type: 'module',
        scripts: {
          dev: 'vite',
          build: 'tsc -b && vite build',
          preview: 'vite preview',
        },
        dependencies: {
          '@core-circle/ui': DEFAULT_DEPENDENCY_VERSIONS.coreCircle,
          '@core-circle/theme': DEFAULT_DEPENDENCY_VERSIONS.coreCircle,
          '@core-circle/icons': DEFAULT_DEPENDENCY_VERSIONS.coreCircle,
          react: DEFAULT_DEPENDENCY_VERSIONS.react,
          'react-dom': DEFAULT_DEPENDENCY_VERSIONS.reactDom,
        },
        devDependencies: {
          '@tailwindcss/vite': DEFAULT_DEPENDENCY_VERSIONS.tailwindcss,
          '@types/react': '^19.0.0',
          '@types/react-dom': '^19.0.0',
          '@vitejs/plugin-react': '^4.3.0',
          tailwindcss: DEFAULT_DEPENDENCY_VERSIONS.tailwindcss,
          typescript: '~5.7.0',
          vite: DEFAULT_DEPENDENCY_VERSIONS.vite,
        },
      },
      null,
      2
    );

    files[`${root}/tsconfig.json`] = JSON.stringify(
      {
        files: [],
        references: [{ path: './tsconfig.app.json' }, { path: './tsconfig.node.json' }],
      },
      null,
      2
    );

    files[`${root}/tsconfig.app.json`] = JSON.stringify(
      {
        compilerOptions: {
          target: 'ES2020',
          useDefineForClassFields: true,
          lib: ['ES2020', 'DOM', 'DOM.Iterable'],
          module: 'ESNext',
          skipLibCheck: true,
          moduleResolution: 'bundler',
          allowImportingTsExtensions: true,
          isolatedModules: true,
          moduleDetection: 'force',
          noEmit: true,
          jsx: 'react-jsx',
          strict: true,
          noUnusedLocals: true,
          noUnusedParameters: true,
          noFallthroughCasesInSwitch: true,
        },
        include: ['src'],
      },
      null,
      2
    );

    files[`${root}/tsconfig.node.json`] = JSON.stringify(
      {
        compilerOptions: {
          target: 'ES2022',
          lib: ['ES2023'],
          module: 'ESNext',
          skipLibCheck: true,
          moduleResolution: 'bundler',
          isolatedModules: true,
          moduleDetection: 'force',
          noEmit: true,
          strict: true,
        },
        include: ['vite.config.ts'],
      },
      null,
      2
    );

    files[`${root}/vite.config.ts`] = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
`;

    files[`${root}/index.html`] = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${brandName} - Powered by CoreCircle</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

    files[`${root}/.npmrc`] = `@core-circle:registry=https://npm.pkg.github.com
`;

    files[`${root}/.gitignore`] = `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`;

    files[`${root}/src/styles/${prefix}.theme.css`] = themeResult.css;

    files[`${root}/src/index.css`] = `@import "tailwindcss";
@import "./styles/${prefix}.theme.css";

/* CoreCircle semantic mapping fallback */
@theme {
  --color-core-circle-primary: var(--color-${prefix}-primary);
  --color-core-circle-bg-surface: var(--color-${prefix}-bg-surface);
  --color-core-circle-text-main: var(--color-${prefix}-text-main);
}

body {
  margin: 0;
  min-height: 100vh;
  background-color: var(--color-${prefix}-bg-page);
  color: var(--color-${prefix}-text-main);
  font-family: var(--font-${prefix}-body);
}
`;

    files[`${root}/src/main.tsx`] = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
`;

    files[`${root}/src/App.tsx`] = generateReactAppTemplate(config, prefix, brandName);

    files[`${root}/README.md`] = generateReadmeTemplate(config, brandName, 'Vite + React 19');
  }

  return files;
}

/**
 * Generates rich Next.js starter page
 */
function generateNextPageTemplate(
  config: ProjectScaffolderConfig,
  prefix: string,
  brandName: string
): string {
  return `'use client';

import React, { useState } from 'react';
import { Button, Card, Badge, Typography, TextInput } from '@core-circle/ui';
import { Rocket, Sparkles, CheckIcon, CodeIcon, BookOpen } from '@core-circle/icons';

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto flex flex-col gap-10">
      {/* Top Hero Banner */}
      <div className="flex flex-col items-center text-center gap-4 pt-6">
        <Badge variant="primary" size="md" className="font-mono text-xs uppercase px-3 py-1">
          <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-300 inline" />
          Powered by CoreCircle Design System
        </Badge>
        <Typography variant="h1" className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Welcome to <span className="text-${prefix}-primary">${brandName}</span>
        </Typography>
        <Typography variant="p" className="text-base text-${prefix}-text-muted max-w-2xl">
          Thank you for scaffolding your application with CoreCircle! Your custom Tailwind CSS v4 design tokens,
          components, and brand assets are preconfigured and ready for production.
        </Typography>
        <div className="flex items-center gap-3 mt-2">
          <Button variant="primary" size="lg" startIcon={<Rocket className="w-4 h-4" />}>
            Explore Components
          </Button>
          <Button variant="outline" size="lg" startIcon={<BookOpen className="w-4 h-4" />}>
            Documentation
          </Button>
        </div>
      </div>

      {/* Feature / Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Live Interactive Component */}
        <Card className="p-6 flex flex-col justify-between gap-4 border shadow-sm">
          <div>
            <Badge variant="success" size="sm" className="mb-2">
              Interactive State
            </Badge>
            <Typography variant="h3" className="text-lg font-bold">
              Button Counter
            </Typography>
            <Typography variant="p" className="text-xs text-${prefix}-text-muted mt-1">
              Test live React component re-rendering and token binding.
            </Typography>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-inherit">
            <span className="font-mono text-sm font-semibold">Count: {counter}</span>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setCounter(c => c + 1)}
            >
              Increment
            </Button>
          </div>
        </Card>

        {/* Card 2: Design Tokens */}
        <Card className="p-6 flex flex-col justify-between gap-4 border shadow-sm">
          <div>
            <Badge variant="secondary" size="sm" className="mb-2">
              Tailwind v4 Theme
            </Badge>
            <Typography variant="h3" className="text-lg font-bold">
              Branded Utilities
            </Typography>
            <Typography variant="p" className="text-xs text-${prefix}-text-muted mt-1">
              Your tokens are discoverable as first-class utility classes:
            </Typography>
          </div>
          <div className="p-2.5 rounded-${prefix}-lg bg-slate-900 text-slate-200 font-mono text-[11px] overflow-x-auto">
            <code>bg-${prefix}-primary</code>
          </div>
        </Card>

        {/* Card 3: Ready for Scale */}
        <Card className="p-6 flex flex-col justify-between gap-4 border shadow-sm">
          <div>
            <Badge variant="primary" size="sm" className="mb-2">
              Production Ready
            </Badge>
            <Typography variant="h3" className="text-lg font-bold">
              Next Steps
            </Typography>
            <Typography variant="p" className="text-xs text-${prefix}-text-muted mt-1">
              Edit <code className="font-mono text-xs text-${prefix}-primary font-semibold">src/app/page.tsx</code> to start building your custom UI.
            </Typography>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold pt-4 border-t border-inherit">
            <CheckIcon className="w-4 h-4" /> Ready to build
          </div>
        </Card>
      </div>

      {/* Quick Terminal Guide */}
      <div className="p-6 rounded-${prefix}-xl bg-slate-900 text-slate-200 border border-slate-800 shadow-md flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
          <CodeIcon className="w-4 h-4 text-${prefix}-primary" />
          Terminal Quickstart
        </div>
        <div className="font-mono text-xs flex flex-col gap-1.5 text-slate-300">
          <p><span className="text-slate-500"># 1. Install dependencies</span></p>
          <p className="text-emerald-400">npm install</p>
          <p className="mt-2"><span className="text-slate-500"># 2. Start development server</span></p>
          <p className="text-emerald-400">npm run dev</p>
        </div>
      </div>
    </main>
  );
}
`;
}

/**
 * Generates rich React Vite starter page
 */
function generateReactAppTemplate(
  config: ProjectScaffolderConfig,
  prefix: string,
  brandName: string
): string {
  return `import React, { useState } from 'react';
import { Button, Card, Badge, Typography } from '@core-circle/ui';
import { Rocket, Sparkles, CheckIcon, CodeIcon, BookOpen } from '@core-circle/icons';

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto flex flex-col gap-10">
      {/* Top Hero Banner */}
      <div className="flex flex-col items-center text-center gap-4 pt-6">
        <Badge variant="primary" size="md" className="font-mono text-xs uppercase px-3 py-1">
          <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-300 inline" />
          Powered by CoreCircle Design System
        </Badge>
        <Typography variant="h1" className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Welcome to <span className="text-${prefix}-primary">${brandName}</span>
        </Typography>
        <Typography variant="p" className="text-base text-${prefix}-text-muted max-w-2xl">
          Thank you for scaffolding your application with CoreCircle! Your custom Tailwind CSS v4 design tokens,
          components, and Vite environment are preconfigured and ready for production.
        </Typography>
        <div className="flex items-center gap-3 mt-2">
          <Button variant="primary" size="lg" startIcon={<Rocket className="w-4 h-4" />}>
            Explore Components
          </Button>
          <Button variant="outline" size="lg" startIcon={<BookOpen className="w-4 h-4" />}>
            Documentation
          </Button>
        </div>
      </div>

      {/* Feature / Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 flex flex-col justify-between gap-4 border shadow-sm">
          <div>
            <Badge variant="success" size="sm" className="mb-2">
              Interactive State
            </Badge>
            <Typography variant="h3" className="text-lg font-bold">
              Button Counter
            </Typography>
            <Typography variant="p" className="text-xs text-${prefix}-text-muted mt-1">
              Test live React component re-rendering and token binding.
            </Typography>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-inherit">
            <span className="font-mono text-sm font-semibold">Count: {counter}</span>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setCounter(c => c + 1)}
            >
              Increment
            </Button>
          </div>
        </Card>

        <Card className="p-6 flex flex-col justify-between gap-4 border shadow-sm">
          <div>
            <Badge variant="secondary" size="sm" className="mb-2">
              Tailwind v4 Theme
            </Badge>
            <Typography variant="h3" className="text-lg font-bold">
              Branded Utilities
            </Typography>
            <Typography variant="p" className="text-xs text-${prefix}-text-muted mt-1">
              Your tokens are discoverable as first-class utility classes:
            </Typography>
          </div>
          <div className="p-2.5 rounded-${prefix}-lg bg-slate-900 text-slate-200 font-mono text-[11px] overflow-x-auto">
            <code>bg-${prefix}-primary</code>
          </div>
        </Card>

        <Card className="p-6 flex flex-col justify-between gap-4 border shadow-sm">
          <div>
            <Badge variant="primary" size="sm" className="mb-2">
              Production Ready
            </Badge>
            <Typography variant="h3" className="text-lg font-bold">
              Next Steps
            </Typography>
            <Typography variant="p" className="text-xs text-${prefix}-text-muted mt-1">
              Edit <code className="font-mono text-xs text-${prefix}-primary font-semibold">src/App.tsx</code> to start building your custom UI.
            </Typography>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold pt-4 border-t border-inherit">
            <CheckIcon className="w-4 h-4" /> Ready to build
          </div>
        </Card>
      </div>

      {/* Quick Terminal Guide */}
      <div className="p-6 rounded-${prefix}-xl bg-slate-900 text-slate-200 border border-slate-800 shadow-md flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
          <CodeIcon className="w-4 h-4 text-${prefix}-primary" />
          Terminal Quickstart
        </div>
        <div className="font-mono text-xs flex flex-col gap-1.5 text-slate-300">
          <p><span className="text-slate-500"># 1. Install dependencies</span></p>
          <p className="text-emerald-400">npm install</p>
          <p className="mt-2"><span className="text-slate-500"># 2. Start Vite development server</span></p>
          <p className="text-emerald-400">npm run dev</p>
        </div>
      </div>
    </main>
  );
}
`;
}

/**
 * Generates user-friendly README.md
 */
function generateReadmeTemplate(
  config: ProjectScaffolderConfig,
  brandName: string,
  frameworkName: string
): string {
  const pm = config.packageManager || 'npm';
  const installCmd = pm === 'yarn' ? 'yarn' : `${pm} install`;
  const devCmd = pm === 'yarn' ? 'yarn dev' : `${pm} run dev`;
  const buildCmd = pm === 'yarn' ? 'yarn build' : `${pm} run build`;

  return `# ${brandName}

Welcome! This application was generated with the **CoreCircle Project Scaffolder**, preconfigured with:
- **Framework**: ${frameworkName}
- **Design System**: [@core-circle/ui](https://github.com/core-circle/core-circle)
- **Design Tokens**: [@core-circle/theme](https://github.com/core-circle/core-circle)
- **Styling**: Tailwind CSS v4 with custom brand tokens (\`--color-${config.cssPrefix}-*\`)

---

## 🚀 Getting Started

### 1. Install Dependencies
\`\`\`bash
${installCmd}
\`\`\`

### 2. Start Development Server
\`\`\`bash
${devCmd}
\`\`\`

Open [http://localhost:3000](http://localhost:3000) (Next.js) or [http://localhost:5173](http://localhost:5173) (Vite) in your browser.

### 3. Build for Production
\`\`\`bash
${buildCmd}
\`\`\`

---

## 🎨 Using CoreCircle Components

You can import any CoreCircle primitive directly:

\`\`\`tsx
import { Button, Card, Badge, Typography } from '@core-circle/ui';
import { Rocket } from '@core-circle/icons';

export function Example() {
  return (
    <Card className="p-6">
      <Typography variant="h2">My Card</Typography>
      <Button variant="primary" startIcon={<Rocket className="w-4 h-4" />}>
        Get Started
      </Button>
    </Card>
  );
}
\`\`\`

---

Built with ❤️ using **CoreCircle Design System**.
`;
}
