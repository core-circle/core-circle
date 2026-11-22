import type { ReactNode } from 'react';
import { Kbd } from '@core-circle/ui';
import { SearchIcon, Terminal } from '@core-circle/icons';
import { PropItem } from '../../../interface/components/props-table.types';
import ComponentPreview from '../../../components/component-preview';

export interface KbdThemeConfig {
  id: string;
  sectionTitle: string;
  description: string;
  previewTitle: string;
  render: () => ReactNode;
  code: string;
}

export interface KbdVariantGroup {
  id: string;
  title: string;
  description: string;
  render: () => ReactNode;
}

export const KBD_BREADCRUMB_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Kbd' },
];

export const KBD_HEADER_CONTENT = {
  title: 'Kbd',
  description:
    'The Kbd component is used to display keyboard shortcuts and keys.',
};

export const KBD_THEME_CONFIGS: KbdThemeConfig[] = [
  {
    id: 'theming-command-palette',
    sectionTitle: '1. Global Command Palette & Quick Search Theme',
    description:
      'Trigger button with keyboard shortcut hint for spotlight navigation.',
    previewTitle: 'Command Palette Trigger',
    render: () => (
      <div className="w-full max-w-md mx-auto flex items-center justify-between p-3.5 px-4 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle cursor-pointer hover:border-core-circle-primary/50 transition-colors">
        <div className="flex items-center gap-3 text-core-circle-text-muted text-sm">
          <SearchIcon size={18} />
          <span>Search docs, commands, components...</span>
        </div>
        <div className="flex items-center gap-1">
          <Kbd size="sm" variant="outline">⌘</Kbd>
          <Kbd size="sm" variant="outline">K</Kbd>
        </div>
      </div>
    ),
    code: `<div className="flex items-center justify-between p-3.5 px-4 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle max-w-md w-full cursor-pointer hover:border-core-circle-primary/50 transition-colors">
  <div className="flex items-center gap-3 text-core-circle-text-muted text-sm">
    <SearchIcon size={18} />
    <span>Search docs, commands, and components...</span>
  </div>
  <div className="flex items-center gap-1">
    <Kbd size="sm" variant="outline">⌘</Kbd>
    <Kbd size="sm" variant="outline">K</Kbd>
  </div>
</div>`,
  },
  {
    id: 'theming-code-editor',
    sectionTitle: '2. IDE & Code Editor Action Toolbar Theme',
    description:
      'Quick action toolbar displaying essential editor bindings.',
    previewTitle: 'Editor Actions Toolbar',
    render: () => (
      <div className="w-full max-w-xl mx-auto flex items-center gap-6 p-3 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface">
        <div className="flex items-center gap-2 text-xs text-core-circle-text-main">
          <span className="font-core-circle-medium">Save:</span>
          <div className="flex items-center gap-0.5">
            <Kbd size="sm">⌘</Kbd>
            <Kbd size="sm">S</Kbd>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-core-circle-text-main">
          <span className="font-core-circle-medium">Format:</span>
          <div className="flex items-center gap-0.5">
            <Kbd size="sm">⌥</Kbd>
            <Kbd size="sm">⇧</Kbd>
            <Kbd size="sm">F</Kbd>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-core-circle-text-main">
          <span className="font-core-circle-medium">Find:</span>
          <div className="flex items-center gap-0.5">
            <Kbd size="sm">⌘</Kbd>
            <Kbd size="sm">F</Kbd>
          </div>
        </div>
      </div>
    ),
    code: `<div className="flex items-center gap-6 p-3 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface">
  <div className="flex items-center gap-2 text-xs text-core-circle-text-main">
    <span className="font-core-circle-medium">Save:</span>
    <div className="flex items-center gap-0.5"><Kbd size="sm">⌘</Kbd><Kbd size="sm">S</Kbd></div>
  </div>
  <div className="flex items-center gap-2 text-xs text-core-circle-text-main">
    <span className="font-core-circle-medium">Format:</span>
    <div className="flex items-center gap-0.5"><Kbd size="sm">⌥</Kbd><Kbd size="sm">⇧</Kbd><Kbd size="sm">F</Kbd></div>
  </div>
  <div className="flex items-center gap-2 text-xs text-core-circle-text-main">
    <span className="font-core-circle-medium">Find:</span>
    <div className="flex items-center gap-0.5"><Kbd size="sm">⌘</Kbd><Kbd size="sm">F</Kbd></div>
  </div>
</div>`,
  },
  {
    id: 'theming-rich-text',
    sectionTitle: '3. Markdown & Rich Text Formatting Theme',
    description: 'Text styling controls displaying key combinations.',
    previewTitle: 'Markdown Formatting Shortcuts',
    render: () => (
      <div className="w-full max-w-xl mx-auto flex items-center gap-4 p-3.5 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-bold">Bold:</span>
          <div className="flex items-center gap-0.5">
            <Kbd size="sm" variant="solid">⌘</Kbd>
            <Kbd size="sm" variant="solid">B</Kbd>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="italic">Italic:</span>
          <div className="flex items-center gap-0.5">
            <Kbd size="sm" variant="solid">⌘</Kbd>
            <Kbd size="sm" variant="solid">I</Kbd>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="underline">Link:</span>
          <div className="flex items-center gap-0.5">
            <Kbd size="sm" variant="solid">⌘</Kbd>
            <Kbd size="sm" variant="solid">K</Kbd>
          </div>
        </div>
      </div>
    ),
    code: `<div className="flex items-center gap-4 p-3.5 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle">
  <div className="flex items-center gap-2 text-xs">
    <span className="font-bold">Bold:</span>
    <div className="flex items-center gap-0.5"><Kbd size="sm" variant="solid">⌘</Kbd><Kbd size="sm" variant="solid">B</Kbd></div>
  </div>
  <div className="flex items-center gap-2 text-xs">
    <span className="italic">Italic:</span>
    <div className="flex items-center gap-0.5"><Kbd size="sm" variant="solid">⌘</Kbd><Kbd size="sm" variant="solid">I</Kbd></div>
  </div>
  <div className="flex items-center gap-2 text-xs">
    <span className="underline">Link:</span>
    <div className="flex items-center gap-0.5"><Kbd size="sm" variant="solid">⌘</Kbd><Kbd size="sm" variant="solid">K</Kbd></div>
  </div>
</div>`,
  },
  {
    id: 'theming-data-table',
    sectionTitle: '4. Data Grid & Spreadsheet Navigation Theme',
    description: 'Keyboard navigation hints for data intensive grids.',
    previewTitle: 'Table Navigation Footer',
    render: () => (
      <div className="w-full max-w-xl mx-auto p-3.5 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface flex items-center justify-between text-xs text-core-circle-text-muted">
        <div className="flex items-center gap-2">
          <span>Next row:</span> <Kbd size="sm">↓</Kbd>
          <span className="ml-2">Previous row:</span> <Kbd size="sm">↑</Kbd>
        </div>
        <div className="flex items-center gap-2">
          <span>Edit cell:</span> <Kbd size="sm">Enter</Kbd>
          <span className="ml-2">Cancel:</span> <Kbd size="sm">Esc</Kbd>
        </div>
      </div>
    ),
    code: `<div className="p-3.5 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface flex items-center justify-between text-xs text-core-circle-text-muted">
  <div className="flex items-center gap-2">
    <span>Next row:</span> <Kbd size="sm">↓</Kbd>
    <span className="ml-2">Previous row:</span> <Kbd size="sm">↑</Kbd>
  </div>
  <div className="flex items-center gap-2">
    <span>Edit cell:</span> <Kbd size="sm">Enter</Kbd>
    <span className="ml-2">Cancel:</span> <Kbd size="sm">Esc</Kbd>
  </div>
</div>`,
  },
  {
    id: 'theming-terminal-cli',
    sectionTitle: '5. Terminal CLI Prompt & Shell Controls Theme',
    description:
      'Shell environment hint bar with interruption and clear bindings.',
    previewTitle: 'Terminal Interactive Bar',
    render: () => (
      <div className="w-full max-w-xl mx-auto p-4 rounded-core-circle-xl bg-slate-50 border border-core-circle-border-main text-slate-700 font-mono text-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-emerald-400" />
          <span>$ nx run @core-circle/ui:build</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <span>Stop: <Kbd size="sm" variant="outline">Ctrl+C</Kbd></span>
          <span>Clear: <Kbd size="sm" variant="outline">Ctrl+L</Kbd></span>
        </div>
      </div>
    ),
    code: `<div className="p-4 rounded-core-circle-xl bg-slate-50 border border-core-circle-border-main text-slate-700 font-mono text-xs flex items-center justify-between">
  <div className="flex items-center gap-2">
    <Terminal size={16} className="text-emerald-400" />
    <span>$ nx run @core-circle/ui:build</span>
  </div>
  <div className="flex items-center gap-3 text-slate-400">
    <span>Stop: <Kbd size="sm" variant="outline">Ctrl+C</Kbd></span>
    <span>Clear: <Kbd size="sm" variant="outline">Ctrl+L</Kbd></span>
  </div>
</div>`,
  },
];

export const KBD_VARIANT_GROUPS: KbdVariantGroup[] = [
  {
    id: 'kbd-styles',
    title: '1. Visual Variants',
    description: 'Outline, solid, and ghost surface treatments.',
    render: () => (
      <ComponentPreview
        title="Variants (Outline, Solid, Ghost)"
        code={`<Kbd variant="outline">⌘</Kbd>\n<Kbd variant="solid">Alt</Kbd>\n<Kbd variant="ghost">Shift</Kbd>`}
      >
        <div className="flex items-center gap-4">
          <Kbd variant="outline">⌘</Kbd>
          <Kbd variant="solid">Alt</Kbd>
          <Kbd variant="ghost">Shift</Kbd>
        </div>
      </ComponentPreview>
    ),
  },
  {
    id: 'kbd-sizes',
    title: '2. Size Scale',
    description: 'Small (compact) and medium (standard) dimensions.',
    render: () => (
      <ComponentPreview
        title="Sizes (sm, md)"
        code={`<Kbd size="sm">⌘</Kbd>\n<Kbd size="md">⌘</Kbd>`}
      >
        <div className="flex items-center gap-4">
          <Kbd size="sm">⌘</Kbd>
          <Kbd size="md">⌘</Kbd>
        </div>
      </ComponentPreview>
    ),
  },
  {
    id: 'kbd-combinations',
    title: '3. Shortcut Combinations',
    description: 'Composing multi-key shortcuts with separators.',
    render: () => (
      <ComponentPreview
        title="Key Sequences"
        code={`<div className="flex items-center gap-1.5 text-sm font-medium">\n  <Kbd size="sm">⌘</Kbd>\n  <span className="text-core-circle-text-muted">+</span>\n  <Kbd size="sm">Shift</Kbd>\n  <span className="text-core-circle-text-muted">+</span>\n  <Kbd size="sm">P</Kbd>\n</div>`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1.5 text-sm font-medium">
            <Kbd size="sm">⌘</Kbd>
            <span className="text-core-circle-text-muted">+</span>
            <Kbd size="sm">Shift</Kbd>
            <span className="text-core-circle-text-muted">+</span>
            <Kbd size="sm">P</Kbd>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-medium">
            <Kbd>Ctrl</Kbd>
            <span className="text-core-circle-text-muted">+</span>
            <Kbd>Alt</Kbd>
            <span className="text-core-circle-text-muted">+</span>
            <Kbd>Del</Kbd>
          </div>
        </div>
      </ComponentPreview>
    ),
  },
];

export const KBD_PLAYGROUND_SECTION = {
  id: 'kbd-playground',
  title: 'Interactive Playground',
  description: 'Customize key text, variants, and sizes in real-time.',
};

export const KBD_MOCK_SECTION = {
  id: 'kbd-mock',
  title: 'Dynamic Shortcut Configurations API',
  description:
    'Example of rendering application shortcuts dynamically from user preferences.',
  snippets: [
    {
      label: 'Shortcut Settings API Response',
      code: JSON.stringify(
        {
          shortcuts: [
            { id: 'save', label: 'Save File', keys: ['⌘', 'S'] },
            { id: 'command_palette', label: 'Command Palette', keys: ['⌘', 'K'] },
            { id: 'split_editor', label: 'Split Editor', keys: ['⌘', '\\'] },
          ],
        },
        null,
        2
      ),
    },
    {
      label: 'Shortcut List Component',
      code: `import { Kbd } from '@core-circle/ui';

interface ShortcutItem {
  id: string;
  label: string;
  keys: string[];
}

export const ShortcutSettingsPanel = ({ shortcuts }: { shortcuts: ShortcutItem[] }) => {
  return (
    <div className="flex flex-col gap-2 divide-y divide-core-circle-border-main">
      {shortcuts.map(item => (
        <div key={item.id} className="flex items-center justify-between py-2">
          <span className="text-sm text-core-circle-text-main">{item.label}</span>
          <div className="flex items-center gap-1">
            {item.keys.map((k, idx) => (
              <Kbd key={idx} size="sm">{k}</Kbd>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};`,
    },
  ],
};

export const KBD_OVERVIEW_SECTION = {
  id: 'kbd-intro',
  title: 'Introduction',
  description:
    'The Kbd atom visually denotes keyboard shortcuts, key combinations, and system hotkeys.',
  quickUsage: {
    label: 'Quick Usage',
    code: `import { Kbd } from '@core-circle/ui';

<div className="flex items-center gap-1">
  <Kbd size="sm">⌘</Kbd>
  <span>+</span>
  <Kbd size="sm">K</Kbd>
</div>`,
  },
  propsTableTitle: 'Component Props',
};

export const KBD_PROPS_DATA: PropItem[] = [
  {
    name: 'variant',
    type: "'outline' | 'solid' | 'ghost'",
    defaultValue: "'outline'",
    description: 'Visual style of the kbd component.',
  },
  {
    name: 'size',
    type: "'sm' | 'md'",
    defaultValue: "'md'",
    description: 'The size of the kbd component.',
  },
  {
    name: 'children',
    type: 'ReactNode',
    defaultValue: '-',
    description: 'The key name or icon.',
  },
];
