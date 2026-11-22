import React from 'react';
import { CodeBlock } from '@core-circle/ui';
import { HomeIcon } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export const CODE_BLOCK_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'CodeBlock' },
];

export const CODE_BLOCK_HEADER_CONTENT = {
  title: 'CodeBlock',
  description:
    'A syntax-highlighted monospace code viewport featuring line numbering, targeted line callouts, header filename tabs, and 1-click clipboard copy.',
};

export const CODE_BLOCK_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Explore TypeScript components, terminal commands, JSON responses, GraphQL schemas, and Python scripts.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore background surfaces, line highlight callouts, line numbers, and file tabs.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive sandbox to test programming languages, highlighted lines, and copy buttons.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic documentation code snippet rendering pattern.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const sampleTs = `import { Button } from '@core-circle/ui';

export function PrimaryAction() {
  return <Button variant="primary">Confirm Order</Button>;
}`;

const sampleBash = `# Scaffold a brand-new CoreCircle application
npx create-core-circle-app my-saas --template=next
cd my-saas && npm run dev`;

const sampleJson = `{
  "status": "success",
  "data": {
    "userId": "usr_99182a",
    "subscription": "enterprise_tier",
    "seats": 50
  }
}`;

export const CODE_BLOCK_THEME_CONFIGS = [
  {
    id: 'theming-react-ts',
    title: '1. React TypeScript Component Theme',
    description: 'Standard syntax highlighting for front-end component definitions.',
    previewTitle: 'PrimaryAction.tsx',
    code: `<CodeBlock
  code={sampleTs}
  language="tsx"
  filename="PrimaryAction.tsx"
  highlightLines={[4]}
  variant="default"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <CodeBlock
            code={sampleTs}
            language="tsx"
            filename="PrimaryAction.tsx"
            highlightLines={[4]}
            variant="default"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-bash-cli',
    title: '2. Terminal CLI Shell Script Theme',
    description: 'Terminal command block without line numbers for clean copy-paste.',
    previewTitle: 'Terminal Quick Start',
    code: `<CodeBlock
  code={sampleBash}
  language="bash"
  filename="terminal.sh"
  showLineNumbers={false}
  variant="card"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <CodeBlock
            code={sampleBash}
            language="bash"
            filename="terminal.sh"
            showLineNumbers={false}
            variant="card"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-json-payload',
    title: '3. REST API JSON Payload Theme',
    description: 'Structured response format for backend integration documentation.',
    previewTitle: 'GET /v1/account',
    code: `<CodeBlock
  code={sampleJson}
  language="json"
  filename="response.json"
  variant="default"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <CodeBlock
            code={sampleJson}
            language="json"
            filename="response.json"
            variant="default"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-high-contrast',
    title: '4. High-Contrast Bordered Console Theme',
    description: 'Thick perimeter border with deep slate background.',
    previewTitle: 'System Diagnostic Script',
    code: `<CodeBlock
  code="const memoryUsage = process.memoryUsage();\\nconsole.log('Heap Used:', memoryUsage.heapUsed);"
  language="typescript"
  variant="bordered"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <CodeBlock
            code={`const memoryUsage = process.memoryUsage();\nconsole.log('Heap Used:', memoryUsage.heapUsed);`}
            language="typescript"
            variant="bordered"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'theming-python-ml',
    title: '5. Python Data Science Theme',
    description: 'Script snippet for model fine-tuning and inference pipelines.',
    previewTitle: 'train_model.py',
    code: `<CodeBlock
  code="import torch\\nimport transformers\\n\\nmodel = transformers.AutoModel.from_pretrained('corecircle-v2')"
  language="python"
  filename="train_model.py"
  variant="card"
/>`,
    render: () => (
      <div className="flex justify-center p-8 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <div className="w-full max-w-xl">
          <CodeBlock
            code={`import torch\nimport transformers\n\nmodel = transformers.AutoModel.from_pretrained('corecircle-v2')`}
            language="python"
            filename="train_model.py"
            variant="card"
          />
        </div>
      </div>
    ),
  },
];

export const CODE_BLOCK_VARIANT_GROUPS = [
  {
    id: 'group-framing',
    title: 'Framing & Surface Variants',
    description: 'Default Slate 900, Deep Slate 950 Card, and High-Contrast Bordered.',
    items: [
      {
        title: 'Default Slate 900 Surface',
        code: `<CodeBlock code={sampleTs} language="tsx" variant="default" />`,
        render: () => (
          <CodeBlock code={sampleTs} language="tsx" variant="default" />
        ),
      },
      {
        title: 'Deep Slate 950 Card Surface',
        code: `<CodeBlock code={sampleTs} language="tsx" variant="card" />`,
        render: () => (
          <CodeBlock code={sampleTs} language="tsx" variant="card" />
        ),
      },
      {
        title: 'High-Contrast Bordered Surface',
        code: `<CodeBlock code={sampleTs} language="tsx" variant="bordered" />`,
        render: () => (
          <CodeBlock code={sampleTs} language="tsx" variant="bordered" />
        ),
      },
    ],
  },
  {
    id: 'group-features',
    title: 'Line Numbers & Highlight Callouts',
    description: 'Visual line callouts and line numbering toggles.',
    items: [
      {
        title: 'With Highlighted Line 4',
        code: `<CodeBlock code={sampleTs} language="tsx" highlightLines={[4]} />`,
        render: () => (
          <CodeBlock code={sampleTs} language="tsx" highlightLines={[4]} />
        ),
      },
      {
        title: 'Without Line Numbers',
        code: `<CodeBlock code={sampleTs} language="tsx" showLineNumbers={false} />`,
        render: () => (
          <CodeBlock code={sampleTs} language="tsx" showLineNumbers={false} />
        ),
      },
      {
        title: 'Without Copy Button',
        code: `<CodeBlock code={sampleTs} language="tsx" copyable={false} />`,
        render: () => (
          <CodeBlock code={sampleTs} language="tsx" copyable={false} />
        ),
      },
    ],
  },
];

export const CODE_BLOCK_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Customize code snippets, test line highlighting, file name tabs, and copy actions.',
};

export const CODE_BLOCK_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Mock Code & Enterprise Integration',
  description: 'Markdown documentation viewer with syntax-highlighted code block rendering.',
  snippets: [
    {
      label: 'DocCodeRenderer.tsx',
      code: `import React from 'react';
import { CodeBlock } from '@core-circle/ui';

export const MarkdownCodeBlock: React.FC<{ code: string; language: string; filename?: string }> = ({
  code,
  language,
  filename,
}) => {
  return (
    <div className="my-4 w-full">
      <CodeBlock
        code={code}
        language={language}
        filename={filename}
        showLineNumbers
        copyable
        variant="card"
      />
    </div>
  );
};`,
    },
  ],
};

export const CODE_BLOCK_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start syntax and comprehensive component property reference.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { CodeBlock } from '@core-circle/ui';

export default function MyDocs() {
  return (
    <CodeBlock
      code="const greeting = 'Hello, CoreCircle!';"
      language="typescript"
      filename="app.ts"
    />
  );
}`,
  },
};

export const CODE_BLOCK_PROPS_DATA: PropItem[] = [
  {
    name: 'code',
    type: 'string',
    defaultValue: "''",
    description: 'The raw source code string to format and render.',
  },
  {
    name: 'language',
    type: 'string',
    defaultValue: "'tsx'",
    description: 'Programming language identifier for formatting and header badge.',
  },
  {
    name: 'filename',
    type: 'string',
    defaultValue: 'undefined',
    description: 'Optional filename or path displayed in the header tab with file icon.',
  },
  {
    name: 'showLineNumbers',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to render gutter line numbers alongside the code.',
  },
  {
    name: 'highlightLines',
    type: 'number[]',
    defaultValue: '[]',
    description: 'Array of 1-based line numbers to visually highlight with an accent border.',
  },
  {
    name: 'copyable',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether to render a 1-click copy-to-clipboard button in the header.',
  },
  {
    name: 'variant',
    type: "'default' | 'card' | 'bordered'",
    defaultValue: "'default'",
    description: 'Container background surface style.',
  },
  {
    name: 'maxHeight',
    type: 'number | string',
    defaultValue: 'undefined',
    description: 'Maximum height of the code container before vertical scrolling engages.',
  },
];
