import React from 'react';
import { ContextMenu, Badge } from '@core-circle/ui';
import {
  Folder,
  SquareEdit,
  DocumentText,
  CopyIcon,
  Share,
  Download,
  XIcon,
  HomeIcon,
} from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';

export interface ThemeConfig {
  id: string;
  title: string;
  description: string;
  previewTitle: string;
  code: string;
  render: () => React.ReactNode;
}

export interface VariantItem {
  title: string;
  code: string;
  render: () => React.ReactNode;
}

export interface VariantGroup {
  id: string;
  title: string;
  description: string;
  items?: VariantItem[];
  customRender?: () => React.ReactNode;
}

export const CONTEXT_MENU_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/', icon: React.createElement(HomeIcon, { size: 14 }) },
  { label: 'Atoms', href: '/atoms' },
  { label: 'ContextMenu' },
];

export const CONTEXT_MENU_HEADER_CONTENT = {
  title: 'ContextMenu',
  description: 'An accessible right-click popup menu positioned at pointer coordinates with viewport boundary clamping, keyboard accessibility, shortcuts, and 10 styling variants.',
};

export const CONTEXT_MENU_SECTIONS = [
  {
    id: 'theming',
    title: 'Theming',
    description: 'Production-ready context menus for file managers, canvas editors, code trees, and data table rows.',
  },
  {
    id: 'variants',
    title: 'Variants',
    description: 'Explore 10 surface styling variants from clean card to frosted glassmorphism and high-contrast dark mode.',
  },
  {
    id: 'playground',
    title: 'Playground',
    description: 'Interactive right-click sandbox with live variant, size, and trigger controls.',
  },
  {
    id: 'mock-code',
    title: 'Mock Code',
    description: 'Dynamic file management payload and consumer implementation.',
  },
  {
    id: 'overview',
    title: 'Overview',
    description: 'Quick usage snippet and props reference.',
  },
];

const fileExplorerItems = [
  { id: 'open', label: 'Open File', icon: <Folder size={16} />, shortcut: '↵' },
  { id: 'edit', label: 'Quick Edit', icon: <SquareEdit size={16} />, shortcut: '⌘E' },
  { id: 'copy', label: 'Copy Path', icon: <CopyIcon size={16} />, shortcut: '⌥⌘C' },
  { id: 'duplicate', label: 'Duplicate File', icon: <DocumentText size={16} />, badge: <Badge size="sm" variant="gradient">COPY</Badge> },
  { id: 'share', label: 'Share with Team', icon: <Share size={16} />, divider: true },
  { id: 'download', label: 'Download Asset', icon: <Download size={16} />, shortcut: '⌘D' },
  { id: 'delete', label: 'Delete Item', icon: <XIcon size={16} />, destructive: true, divider: true },
];

export const CONTEXT_MENU_THEME_CONFIGS: ThemeConfig[] = [
  {
    id: 'theming-file-manager',
    title: '1. File Manager & Asset Browser Theme',
    description: 'Elevated card surface with file operation icons, keyboard shortcuts, and destructive delete action.',
    previewTitle: 'File Explorer Right-Click Menu',
    code: `<ContextMenu
  variant="card"
  items={[
    { id: 'open', label: 'Open File', icon: <Folder size={16} />, shortcut: '↵' },
    { id: 'edit', label: 'Quick Edit', icon: <SquareEdit size={16} />, shortcut: '⌘E' },
    { id: 'copy', label: 'Copy Path', icon: <CopyIcon size={16} />, shortcut: '⌥⌘C' },
    { id: 'duplicate', label: 'Duplicate File', icon: <DocumentText size={16} />, badge: <Badge size="sm" variant="gradient">COPY</Badge> },
    { id: 'share', label: 'Share with Team', icon: <Share size={16} />, divider: true },
    { id: 'download', label: 'Download Asset', icon: <Download size={16} />, shortcut: '⌘D' },
    { id: 'delete', label: 'Delete Item', icon: <XIcon size={16} />, destructive: true, divider: true },
  ]}
>
  <div className="p-8 text-center border-2 border-dashed rounded-xl">
    Right-click here to view file actions
  </div>
</ContextMenu>`,
    render: () => (
      <div className="flex justify-center p-6 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <ContextMenu variant="card" items={fileExplorerItems}>
          <div className="flex flex-col items-center justify-center p-12 bg-white border-2 border-dashed border-slate-200 rounded-2xl w-full max-w-md text-center select-none cursor-context-menu hover:border-core-circle-primary transition-colors">
            <span className="text-sm font-bold text-slate-800">Right-Click Inside This Area</span>
            <span className="text-xs text-slate-400 mt-1">Simulates file management context actions</span>
          </div>
        </ContextMenu>
      </div>
    ),
  },
  {
    id: 'theming-minimal',
    title: '2. Minimalist Clean Theme',
    description: 'Lightweight subtle surface with soft borders for minimal distraction.',
    previewTitle: 'Minimalist Context Menu',
    code: `<ContextMenu variant="minimal" items={items}>
  <div>Right-click here</div>
</ContextMenu>`,
    render: () => (
      <div className="flex justify-center p-6 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <ContextMenu variant="minimal" items={fileExplorerItems}>
          <div className="flex flex-col items-center justify-center p-12 bg-white border border-slate-200 rounded-2xl w-full max-w-md text-center select-none cursor-context-menu">
            <span className="text-sm font-bold text-slate-700">Right-Click (Minimal Variant)</span>
            <span className="text-xs text-slate-400 mt-1">Lightweight subtle popover outline</span>
          </div>
        </ContextMenu>
      </div>
    ),
  },
  {
    id: 'theming-glassmorphic',
    title: '3. Frosted Glassmorphism Theme',
    description: 'Backdrop-filter blur with translucent highlights for modern OS interfaces.',
    previewTitle: 'Glassmorphic Context Menu',
    code: `<ContextMenu variant="glassmorphic" items={items}>
  <div>Right-click here</div>
</ContextMenu>`,
    render: () => (
      <div className="flex justify-center p-6 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border border-slate-200 rounded-2xl w-full">
        <ContextMenu variant="glassmorphic" items={fileExplorerItems}>
          <div className="flex flex-col items-center justify-center p-12 bg-white/70 backdrop-blur-md border border-white/60 shadow-sm rounded-2xl w-full max-w-md text-center select-none cursor-context-menu">
            <span className="text-sm font-bold text-indigo-950">Right-Click (Glassmorphic)</span>
            <span className="text-xs text-indigo-600/70 mt-1">Frosted glass backdrop effect</span>
          </div>
        </ContextMenu>
      </div>
    ),
  },
  {
    id: 'theming-gradient',
    title: '4. Soft Gradient Theme',
    description: 'Delicate gradient highlights for creative design tools and canvas applications.',
    previewTitle: 'Gradient Accent Context Menu',
    code: `<ContextMenu variant="gradient" items={items}>
  <div>Right-click here</div>
</ContextMenu>`,
    render: () => (
      <div className="flex justify-center p-6 bg-slate-50 border border-slate-200 rounded-2xl w-full">
        <ContextMenu variant="gradient" items={fileExplorerItems}>
          <div className="flex flex-col items-center justify-center p-12 bg-white border border-purple-200 rounded-2xl w-full max-w-md text-center select-none cursor-context-menu">
            <span className="text-sm font-bold text-purple-900">Right-Click (Soft Gradient)</span>
            <span className="text-xs text-purple-600/70 mt-1">Subtle gradient surface with tinted hover states</span>
          </div>
        </ContextMenu>
      </div>
    ),
  },
  {
    id: 'theming-dark',
    title: '5. High-Contrast Dark Theme',
    description: 'Dark mode styling with deep contrast for IDEs, terminals, and audio workstations.',
    previewTitle: 'Dark Mode Context Menu',
    code: `<ContextMenu variant="dark" items={items}>
  <div>Right-click here</div>
</ContextMenu>`,
    render: () => (
      <div className="flex justify-center p-6 bg-slate-100 border border-slate-200 rounded-2xl w-full">
        <ContextMenu variant="dark" items={fileExplorerItems}>
          <div className="flex flex-col items-center justify-center p-12 bg-white border-2 border-slate-800 rounded-2xl w-full max-w-md text-center select-none cursor-context-menu">
            <span className="text-sm font-bold text-slate-900">Right-Click (Dark Variant Menu)</span>
            <span className="text-xs text-slate-500 mt-1">Triggers high-contrast dark popover surface</span>
          </div>
        </ContextMenu>
      </div>
    ),
  },
];

export const CONTEXT_MENU_VARIANT_GROUPS: VariantGroup[] = [
  {
    id: 'variants-surfaces',
    title: 'Surface Variations',
    description: 'Visual treatment variants available for the floating popover.',
    items: [
      {
        title: 'Default Card Variant',
        code: `<ContextMenu variant="card" items={items}><div>Right-click</div></ContextMenu>`,
        render: () => (
          <ContextMenu variant="card" items={fileExplorerItems}>
            <div className="p-6 bg-white border border-slate-200 rounded-xl text-center select-none cursor-context-menu">
              <span className="text-sm font-medium">Card Variant</span>
            </div>
          </ContextMenu>
        ),
      },
      {
        title: 'Minimal Variant',
        code: `<ContextMenu variant="minimal" items={items}><div>Right-click</div></ContextMenu>`,
        render: () => (
          <ContextMenu variant="minimal" items={fileExplorerItems}>
            <div className="p-6 bg-white border border-slate-200 rounded-xl text-center select-none cursor-context-menu">
              <span className="text-sm font-medium">Minimal Variant</span>
            </div>
          </ContextMenu>
        ),
      },
      {
        title: 'Bordered Strong Variant',
        code: `<ContextMenu variant="bordered" items={items}><div>Right-click</div></ContextMenu>`,
        render: () => (
          <ContextMenu variant="bordered" items={fileExplorerItems}>
            <div className="p-6 bg-white border-2 border-slate-300 rounded-xl text-center select-none cursor-context-menu">
              <span className="text-sm font-medium">Bordered Variant</span>
            </div>
          </ContextMenu>
        ),
      },
      {
        title: 'Pill Rounded Variant',
        code: `<ContextMenu variant="pill" items={items}><div>Right-click</div></ContextMenu>`,
        render: () => (
          <ContextMenu variant="pill" items={fileExplorerItems}>
            <div className="p-6 bg-white border border-slate-200 rounded-3xl text-center select-none cursor-context-menu">
              <span className="text-sm font-medium">Pill Variant</span>
            </div>
          </ContextMenu>
        ),
      },
      {
        title: 'Accent Highlight Variant',
        code: `<ContextMenu variant="accent" items={items}><div>Right-click</div></ContextMenu>`,
        render: () => (
          <ContextMenu variant="accent" items={fileExplorerItems}>
            <div className="p-6 bg-white border border-core-circle-primary/30 rounded-xl text-center select-none cursor-context-menu">
              <span className="text-sm font-medium">Accent Variant</span>
            </div>
          </ContextMenu>
        ),
      },
    ],
  },
  {
    id: 'variants-sizes',
    title: 'Size Scales',
    description: 'Compact (sm), default (md), and generous (lg) sizing options.',
    items: [
      {
        title: 'Small Scale (sm)',
        code: `<ContextMenu size="sm" items={items}><div>Right-click</div></ContextMenu>`,
        render: () => (
          <ContextMenu size="sm" items={fileExplorerItems}>
            <div className="p-4 bg-white border border-slate-200 rounded-lg text-center select-none cursor-context-menu">
              <span className="text-xs font-semibold">Small Context Area (sm)</span>
            </div>
          </ContextMenu>
        ),
      },
      {
        title: 'Medium Scale (md)',
        code: `<ContextMenu size="md" items={items}><div>Right-click</div></ContextMenu>`,
        render: () => (
          <ContextMenu size="md" items={fileExplorerItems}>
            <div className="p-6 bg-white border border-slate-200 rounded-xl text-center select-none cursor-context-menu">
              <span className="text-sm font-semibold">Medium Context Area (md)</span>
            </div>
          </ContextMenu>
        ),
      },
      {
        title: 'Large Scale (lg)',
        code: `<ContextMenu size="lg" items={items}><div>Right-click</div></ContextMenu>`,
        render: () => (
          <ContextMenu size="lg" items={fileExplorerItems}>
            <div className="p-8 bg-white border border-slate-200 rounded-2xl text-center select-none cursor-context-menu">
              <span className="text-base font-semibold">Large Context Area (lg)</span>
            </div>
          </ContextMenu>
        ),
      },
    ],
  },
];

export const CONTEXT_MENU_PLAYGROUND_SECTION = {
  id: 'playground',
  title: 'Interactive Playground',
  description: 'Right-click the target container to test variant styling, sizing scales, and keyboard navigation.',
};

export const CONTEXT_MENU_MOCK_SECTION = {
  id: 'mock-code',
  title: 'Dynamic File Management Payload',
  description: 'Integration pattern demonstrating data-driven context actions with permission checks.',
  snippets: [
    {
      label: 'file-context.ts',
      code: `// Sample dynamic file action generator based on user permissions
export interface FileItem {
  id: string;
  name: string;
  isOwner: boolean;
  canEdit: boolean;
}

export function getFileContextMenuItems(file: FileItem) {
  return [
    { id: 'open', label: 'Open', icon: <Folder size={16} /> },
    { id: 'rename', label: 'Rename', disabled: !file.canEdit },
    { id: 'share', label: 'Share', divider: true },
    {
      id: 'delete',
      label: 'Delete',
      destructive: true,
      disabled: !file.isOwner,
      divider: true,
    },
  ];
}`,
    },
    {
      label: 'FileTableRow.tsx',
      code: `import React from 'react';
import { ContextMenu } from '@core-circle/ui';
import { getFileContextMenuItems, FileItem } from './file-context';

export function FileTableRow({ file }: { file: FileItem }) {
  const items = getFileContextMenuItems(file);

  return (
    <ContextMenu items={items}>
      <div className="flex items-center justify-between p-3 hover:bg-slate-50 border-b">
        <span>{file.name}</span>
        <span className="text-xs text-slate-400">Right-click for options</span>
      </div>
    </ContextMenu>
  );
}`,
    },
  ],
};

export const CONTEXT_MENU_OVERVIEW_SECTION = {
  id: 'overview',
  title: 'Overview & API Reference',
  description: 'Quick start guide and comprehensive component props.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { ContextMenu } from '@core-circle/ui';
import { SquareEdit, DocumentText, XIcon } from '@core-circle/icons';

export default function MyComponent() {
  const items = [
    { id: 'edit', label: 'Edit', icon: <SquareEdit size={16} /> },
    { id: 'copy', label: 'Duplicate', icon: <DocumentText size={16} /> },
    { id: 'del', label: 'Delete', icon: <XIcon size={16} />, destructive: true, divider: true },
  ];

  return (
    <ContextMenu items={items} variant="card">
      <div className="p-8 border rounded-xl">Right-click me!</div>
    </ContextMenu>
  );
}`,
  },
  propsTableTitle: 'ContextMenu Props',
};

export const CONTEXT_MENU_PROPS_DATA: PropItem[] = [
  {
    name: 'children',
    type: 'ReactNode',
    required: true,
    description: 'The trigger region or container element that triggers the menu upon right-click.',
  },
  {
    name: 'items',
    type: 'ContextMenuItem[]',
    required: false,
    description: 'Array of menu items with label, icon, shortcut, badge, disabled, destructive, and divider flags.',
  },
  {
    name: 'variant',
    type: "'default' | 'card' | 'minimal' | 'glassmorphic' | 'gradient' | 'bordered' | 'dark' | 'compact' | 'pill' | 'accent'",
    required: false,
    defaultValue: "'card'",
    description: 'Visual styling variant of the floating context menu surface.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    required: false,
    defaultValue: "'md'",
    description: 'Size scale determining typography size, padding, and minimum menu width.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    defaultValue: 'false',
    description: 'When true, right-click does not open the context menu and lets the native context menu fire.',
  },
  {
    name: 'className',
    type: 'string',
    required: false,
    description: 'Additional class names applied directly to the floating popover container.',
  },
  {
    name: 'triggerClassName',
    type: 'string',
    required: false,
    description: 'Additional class names applied to the trigger wrapper element.',
  },
];
