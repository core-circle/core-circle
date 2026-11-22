'use client';

import { HomeIcon, Folder, Terminal } from '@core-circle/icons';
import { Resizable } from '@core-circle/ui';

export const RESIZABLE_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Resizable' },
];

export const RESIZABLE_HEADER_CONTENT = {
  title: 'Resizable',
  description: 'A multi-pane layout primitive featuring smooth mouse and touch draggable dividing handles, min/max percentage clamps, and column or row orientations.',
};

export const RESIZABLE_THEME_CONFIGS = [
  {
    id: 'theme-ide-workspace',
    title: '1. IDE Code Workspace Theme',
    description: 'Split file navigation tree on the left and active syntax editor viewport on the right.',
    previewTitle: 'IDE Workspace Split',
    code: `<div className="w-full h-72">
  <Resizable direction="horizontal" variant="card" defaultSize={30}>
    <Resizable.Panel className="p-4 bg-slate-50 font-mono text-xs text-slate-700">
      src/components/atoms/
    </Resizable.Panel>
    <Resizable.Handle withHandle />
    <Resizable.Panel className="p-4 bg-white font-mono text-xs text-slate-800">
      export const App = () => { return <div>CoreCircle</div> };
    </Resizable.Panel>
  </Resizable>
</div>`,
    render: () => (
      <div className="w-full max-w-2xl h-72 rounded-core-circle-xl overflow-hidden border border-core-circle-border-main shadow-core-circle-subtle">
        <Resizable direction="horizontal" variant="card" defaultSize={35}>
          <Resizable.Panel className="p-4 bg-slate-50 flex flex-col gap-2 font-mono text-xs text-core-circle-text-main">
            <div className="flex items-center gap-1.5 font-bold text-slate-500 uppercase tracking-wider text-[10px]">
              <Folder size={12} />
              <span>Project Explorer</span>
            </div>
            <div className="text-slate-600 pl-2 border-l border-slate-200">
              <div>📁 components/</div>
              <div className="text-core-circle-primary font-semibold">📄 resizable.tsx</div>
              <div>📄 button.tsx</div>
            </div>
          </Resizable.Panel>
          <Resizable.Handle withHandle />
          <Resizable.Panel className="p-4 bg-white font-mono text-xs text-core-circle-text-main">
            <div className="text-slate-400 mb-2">// Active Editor Buffer: resizable.tsx</div>
            <div className="text-purple-600">export const <span className="text-blue-600">Resizable</span> = () =&gt; &#123;</div>
            <div className="text-slate-700 pl-4">return &lt;<span className="text-emerald-600">div</span> className="resizable"&gt;...&lt;/<span className="text-emerald-600">div</span>&gt;;</div>
            <div className="text-purple-600">&#125;;</div>
          </Resizable.Panel>
        </Resizable>
      </div>
    ),
  },
  {
    id: 'theme-terminal-console',
    title: '2. Vertical Terminal Console Theme',
    description: 'Top preview container split with bottom developer debugging terminal.',
    previewTitle: 'Vertical Console Split',
    code: `<div className="w-full h-80">
  <Resizable direction="vertical" variant="bordered" defaultSize={60}>
    <Resizable.Panel className="p-4 bg-white">Web Canvas Preview</Resizable.Panel>
    <Resizable.Handle withHandle />
    <Resizable.Panel className="p-4 bg-slate-950 text-emerald-400 font-mono text-xs">
      $ nx run docs:serve --port 3000
    </Resizable.Panel>
  </Resizable>
</div>`,
    render: () => (
      <div className="w-full max-w-2xl h-80 rounded-core-circle-xl overflow-hidden border-2 border-core-circle-border-main">
        <Resizable direction="vertical" variant="bordered" defaultSize={55}>
          <Resizable.Panel className="p-4 bg-white flex flex-col justify-center items-center text-sm font-semibold text-core-circle-text-main">
            <span>Web Application Live Preview</span>
            <span className="text-xs font-normal text-core-circle-text-muted">Interactive design sandbox mounted</span>
          </Resizable.Panel>
          <Resizable.Handle withHandle />
          <Resizable.Panel className="p-4 bg-slate-950 text-emerald-400 font-mono text-xs flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-slate-400 text-[10px]">
              <Terminal size={12} />
              <span>TERMINAL BUFFER - BASH</span>
            </div>
            <div>$ nx run docs:serve --port 3000</div>
            <div className="text-slate-500">[webpack] compiled client and server successfully in 320ms</div>
            <div className="text-emerald-500">✓ Ready on http://localhost:3000</div>
          </Resizable.Panel>
        </Resizable>
      </div>
    ),
  },
  {
    id: 'theme-api-explorer',
    title: '3. API Endpoint Explorer Theme',
    description: 'REST API path selector on the left and JSON response payload viewer on the right.',
    previewTitle: 'API Request Split',
    code: `<div className="w-full h-72">
  <Resizable direction="horizontal" variant="card" defaultSize={40}>
    <Resizable.Panel className="p-4 bg-slate-50">GET /api/v1/users</Resizable.Panel>
    <Resizable.Handle withHandle />
    <Resizable.Panel className="p-4 bg-white font-mono text-xs">&#123; "status": 200 &#125;</Resizable.Panel>
  </Resizable>
</div>`,
    render: () => (
      <div className="w-full max-w-2xl h-72 rounded-core-circle-xl overflow-hidden border border-core-circle-border-main shadow-core-circle-subtle">
        <Resizable direction="horizontal" variant="card" defaultSize={40}>
          <Resizable.Panel className="p-4 bg-slate-50 flex flex-col gap-2 font-mono text-xs">
            <div className="font-bold text-slate-500 text-[10px] uppercase">API Endpoints</div>
            <div className="p-1.5 rounded bg-white border border-slate-200 text-blue-600 font-bold">GET /api/v1/auth</div>
            <div className="p-1.5 rounded text-emerald-600 font-bold">POST /api/v1/tokens</div>
            <div className="p-1.5 rounded text-purple-600 font-bold">GET /api/v1/telemetry</div>
          </Resizable.Panel>
          <Resizable.Handle withHandle />
          <Resizable.Panel className="p-4 bg-white font-mono text-xs text-core-circle-text-main">
            <div className="text-slate-400 mb-1">// HTTP 200 OK Response (18ms)</div>
            <div className="text-slate-800">&#123; "authenticated": true, "sessionExpiry": 3600 &#125;</div>
          </Resizable.Panel>
        </Resizable>
      </div>
    ),
  },
  {
    id: 'theme-diff-workbench',
    title: '4. Side-by-Side Diff Workbench Theme',
    description: 'Adjustable git commit comparison viewport displaying original vs modified buffers.',
    previewTitle: 'Diff Workbench Split',
    code: `<div className="w-full h-72">
  <Resizable direction="horizontal" variant="bordered" defaultSize={50}>
    <Resizable.Panel className="p-4 bg-rose-50 text-rose-800 font-mono text-xs">Head revision</Resizable.Panel>
    <Resizable.Handle withHandle />
    <Resizable.Panel className="p-4 bg-emerald-50 text-emerald-800 font-mono text-xs">Incoming revision</Resizable.Panel>
  </Resizable>
</div>`,
    render: () => (
      <div className="w-full max-w-2xl h-72 rounded-core-circle-xl overflow-hidden border-2 border-core-circle-border-main">
        <Resizable direction="horizontal" variant="bordered" defaultSize={50}>
          <Resizable.Panel className="p-4 bg-rose-50/50 font-mono text-xs text-rose-900">
            <div className="font-bold text-[10px] uppercase tracking-wider text-rose-600 mb-2">Original Branch</div>
            <div>- const timeout = 5000;</div>
            <div>- const retries = 2;</div>
          </Resizable.Panel>
          <Resizable.Handle withHandle />
          <Resizable.Panel className="p-4 bg-emerald-50/50 font-mono text-xs text-emerald-900">
            <div className="font-bold text-[10px] uppercase tracking-wider text-emerald-600 mb-2">Incoming Branch</div>
            <div>+ const timeout = 10000;</div>
            <div>+ const retries = 5;</div>
          </Resizable.Panel>
        </Resizable>
      </div>
    ),
  },
  {
    id: 'theme-mobile-sandbox',
    title: '5. Mobile Device Viewport Theme',
    description: 'Resizable phone frame on the left with inspection properties on the right.',
    previewTitle: 'Responsive Device Split',
    code: `<div className="w-full h-72">
  <Resizable direction="horizontal" variant="card" defaultSize={45}>
    <Resizable.Panel className="p-4 bg-slate-100 flex items-center justify-center">Mobile Viewport</Resizable.Panel>
    <Resizable.Handle withHandle />
    <Resizable.Panel className="p-4 bg-white">Inspector Styles</Resizable.Panel>
  </Resizable>
</div>`,
    render: () => (
      <div className="w-full max-w-2xl h-72 rounded-core-circle-xl overflow-hidden border border-core-circle-border-main shadow-core-circle-subtle">
        <Resizable direction="horizontal" variant="card" defaultSize={45}>
          <Resizable.Panel className="p-4 bg-slate-100 flex flex-col items-center justify-center text-xs font-semibold text-slate-700">
            <div className="w-32 h-44 rounded-2xl border-4 border-slate-700 bg-white shadow flex items-center justify-center text-[10px] text-slate-400">
              iPhone 15
            </div>
          </Resizable.Panel>
          <Resizable.Handle withHandle />
          <Resizable.Panel className="p-4 bg-white flex flex-col gap-2 text-xs text-core-circle-text-main">
            <div className="font-bold text-slate-500 text-[10px] uppercase">Device Configuration</div>
            <div className="flex justify-between border-b pb-1"><span>Screen Width:</span><span className="font-mono">390px</span></div>
            <div className="flex justify-between border-b pb-1"><span>Pixel Ratio:</span><span className="font-mono">3.0x</span></div>
            <div className="flex justify-between"><span>User Agent:</span><span className="font-mono">WebKit</span></div>
          </Resizable.Panel>
        </Resizable>
      </div>
    ),
  },
];

export const RESIZABLE_VARIANT_GROUPS = [
  {
    id: 'orientations',
    title: 'Layout Orientations',
    description: 'Switch between horizontal side-by-side columns and vertical stacked rows.',
    items: [
      {
        title: 'Horizontal Direction (Columns)',
        code: `<Resizable direction="horizontal" defaultSize={50}>...</Resizable>`,
        render: () => (
          <div className="w-full max-w-lg h-56 border border-core-circle-border-main rounded-core-circle-xl overflow-hidden">
            <Resizable direction="horizontal" variant="card" defaultSize={50}>
              <Resizable.Panel className="p-4 bg-slate-50 flex items-center justify-center text-xs font-semibold text-slate-700">
                Left Column
              </Resizable.Panel>
              <Resizable.Handle withHandle />
              <Resizable.Panel className="p-4 bg-white flex items-center justify-center text-xs font-semibold text-slate-700">
                Right Column
              </Resizable.Panel>
            </Resizable>
          </div>
        ),
      },
      {
        title: 'Vertical Direction (Rows)',
        code: `<Resizable direction="vertical" defaultSize={50}>...</Resizable>`,
        render: () => (
          <div className="w-full max-w-lg h-56 border border-core-circle-border-main rounded-core-circle-xl overflow-hidden">
            <Resizable direction="vertical" variant="card" defaultSize={50}>
              <Resizable.Panel className="p-4 bg-slate-50 flex items-center justify-center text-xs font-semibold text-slate-700">
                Top Row
              </Resizable.Panel>
              <Resizable.Handle withHandle />
              <Resizable.Panel className="p-4 bg-white flex items-center justify-center text-xs font-semibold text-slate-700">
                Bottom Row
              </Resizable.Panel>
            </Resizable>
          </div>
        ),
      },
    ],
  },
  {
    id: 'split-ratios',
    title: 'Pre-Configured Split Ratios',
    description: 'Set custom initial percentage proportions for sidebar layouts or main viewports.',
    items: [
      {
        title: '25% / 75% Sidebar Proportions',
        code: `<Resizable direction="horizontal" defaultSize={25}>...</Resizable>`,
        render: () => (
          <div className="w-full max-w-lg h-52 border border-core-circle-border-main rounded-core-circle-xl overflow-hidden">
            <Resizable direction="horizontal" variant="card" defaultSize={25}>
              <Resizable.Panel className="p-4 bg-slate-50 flex items-center justify-center text-xs font-semibold text-slate-700">
                Sidebar (25%)
              </Resizable.Panel>
              <Resizable.Handle withHandle />
              <Resizable.Panel className="p-4 bg-white flex items-center justify-center text-xs font-semibold text-slate-700">
                Main Canvas (75%)
              </Resizable.Panel>
            </Resizable>
          </div>
        ),
      },
      {
        title: '70% / 30% Primary Focus Proportions',
        code: `<Resizable direction="horizontal" defaultSize={70}>...</Resizable>`,
        render: () => (
          <div className="w-full max-w-lg h-52 border border-core-circle-border-main rounded-core-circle-xl overflow-hidden">
            <Resizable direction="horizontal" variant="card" defaultSize={70}>
              <Resizable.Panel className="p-4 bg-white flex items-center justify-center text-xs font-semibold text-slate-700">
                Primary Content (70%)
              </Resizable.Panel>
              <Resizable.Handle withHandle />
              <Resizable.Panel className="p-4 bg-slate-50 flex items-center justify-center text-xs font-semibold text-slate-700">
                Inspector (30%)
              </Resizable.Panel>
            </Resizable>
          </div>
        ),
      },
    ],
  },
  {
    id: 'handle-styles',
    title: 'Divider Handle Variants & States',
    description: 'Customize divider visual indicators or disable drag interaction.',
    items: [
      {
        title: 'With Visual Grip Pill Indicator',
        code: `<Resizable.Handle withHandle={true} />`,
        render: () => (
          <div className="w-full max-w-lg h-44 border border-core-circle-border-main rounded-core-circle-xl overflow-hidden">
            <Resizable direction="horizontal" variant="card" defaultSize={50}>
              <Resizable.Panel className="p-3 bg-slate-50 flex items-center justify-center text-xs font-medium">Panel A</Resizable.Panel>
              <Resizable.Handle withHandle={true} />
              <Resizable.Panel className="p-3 bg-white flex items-center justify-center text-xs font-medium">Panel B</Resizable.Panel>
            </Resizable>
          </div>
        ),
      },
      {
        title: 'Minimal Handle (Clean Line)',
        code: `<Resizable.Handle withHandle={false} />`,
        render: () => (
          <div className="w-full max-w-lg h-44 border border-core-circle-border-main rounded-core-circle-xl overflow-hidden">
            <Resizable direction="horizontal" variant="card" defaultSize={50}>
              <Resizable.Panel className="p-3 bg-slate-50 flex items-center justify-center text-xs font-medium">Clean Line A</Resizable.Panel>
              <Resizable.Handle withHandle={false} />
              <Resizable.Panel className="p-3 bg-white flex items-center justify-center text-xs font-medium">Clean Line B</Resizable.Panel>
            </Resizable>
          </div>
        ),
      },
      {
        title: 'Disabled Dragging State',
        code: `<Resizable disabled defaultSize={50}>...</Resizable>`,
        render: () => (
          <div className="w-full max-w-lg h-44 border border-core-circle-border-main rounded-core-circle-xl overflow-hidden">
            <Resizable disabled direction="horizontal" variant="card" defaultSize={50}>
              <Resizable.Panel className="p-3 bg-slate-50 flex items-center justify-center text-xs font-medium">Locked Panel</Resizable.Panel>
              <Resizable.Handle withHandle={true} />
              <Resizable.Panel className="p-3 bg-white flex items-center justify-center text-xs font-medium">Locked Panel</Resizable.Panel>
            </Resizable>
          </div>
        ),
      },
      {
        title: 'High Contrast Bordered Variant',
        code: `<Resizable variant="bordered" defaultSize={50}>...</Resizable>`,
        render: () => (
          <div className="w-full max-w-lg h-44 border-2 border-core-circle-border-main rounded-core-circle-xl overflow-hidden">
            <Resizable variant="bordered" direction="horizontal" defaultSize={50}>
              <Resizable.Panel className="p-3 bg-slate-50 flex items-center justify-center text-xs font-medium">Bordered A</Resizable.Panel>
              <Resizable.Handle withHandle={true} />
              <Resizable.Panel className="p-3 bg-white flex items-center justify-center text-xs font-medium">Bordered B</Resizable.Panel>
            </Resizable>
          </div>
        ),
      },
    ],
  },
];

export const RESIZABLE_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Test resizable direction orientation, default percentage splits, handle indicators, and drag constraints.',
};

export const RESIZABLE_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Mock Code & Enterprise Usage',
  description: 'Learn how to integrate Resizable panels into responsive devtools and web application splitters.',
  snippets: [
    {
      label: 'Multi-Pane IDE Layout (TypeScript)',
      code: `import React, { useState } from 'react';
import { Resizable } from '@core-circle/ui';

export const DevConsoleWorkbench = () => {
  const [panelSize, setPanelSize] = useState<number>(30);

  return (
    <div className="w-full h-[600px] border border-core-circle-border-main rounded-core-circle-xl overflow-hidden">
      <Resizable
        direction="horizontal"
        variant="card"
        defaultSize={panelSize}
        minSize={20}
        maxSize={60}
        onResize={(size) => setPanelSize(size)}
      >
        <Resizable.Panel className="p-4 bg-slate-50">
          <h4 className="font-semibold text-xs text-slate-500 uppercase">File Navigator</h4>
        </Resizable.Panel>
        <Resizable.Handle withHandle />
        <Resizable.Panel className="p-4 bg-white">
          <h4 className="font-semibold text-xs text-slate-500 uppercase">Monaco Editor</h4>
        </Resizable.Panel>
      </Resizable>
    </div>
  );
};`,
    },
  ],
};

export const RESIZABLE_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Complete documentation for the Resizable container component and compound Panel/Handle slots.',
  quickUsage: {
    label: 'Basic Usage',
    code: `import { Resizable } from '@core-circle/ui';

export default function Example() {
  return (
    <div className="w-full h-80">
      <Resizable direction="horizontal" defaultSize={50}>
        <Resizable.Panel>Panel 1</Resizable.Panel>
        <Resizable.Handle withHandle />
        <Resizable.Panel>Panel 2</Resizable.Panel>
      </Resizable>
    </div>
  );
}`,
  },
};

export const RESIZABLE_PROPS_DATA = [
  {
    name: 'direction',
    type: "'horizontal' | 'vertical'",
    defaultValue: "'horizontal'",
    description: 'Layout axis along which panels and the dividing handle are arranged.',
  },
  {
    name: 'defaultSize',
    type: 'number',
    defaultValue: '50',
    description: 'Initial percentage width or height (0 to 100) allocated to the primary panel.',
  },
  {
    name: 'minSize',
    type: 'number',
    defaultValue: '15',
    description: 'Minimum allowed size percentage for the primary panel during drag operations.',
  },
  {
    name: 'maxSize',
    type: 'number',
    defaultValue: '85',
    description: 'Maximum allowed size percentage for the primary panel during drag operations.',
  },
  {
    name: 'onResize',
    type: '(size: number) => void',
    defaultValue: 'undefined',
    description: 'Callback fired continuously with the updated percentage size during handle drag.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Locks the handle position and prevents mouse/touch drag resizing.',
  },
  {
    name: 'variant',
    type: "'default' | 'card' | 'bordered'",
    defaultValue: "'default'",
    description: 'Outer border and shadow styling of the resizable viewport container.',
  },
];
