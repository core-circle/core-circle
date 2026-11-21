'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumb, Tabs, Kbd, Typography, Badge, Button } from '@core-circle/ui';
import { 
  Info, 
  Layers, 
  Play, 
  CodeIcon, 
  Palette, 
  SearchIcon, 
  Terminal, 
  Sparkles, 
  CheckIcon 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import CodeSnippet from '../../../components/code-snippet';
import PropsTable from '../../../components/props-table';
import { KbdPlayground } from '../../../components/playground/kbd/kbdPlayground';
import { kbdPageStyles as s } from './kbd.styles';
import { KBD_PROPS_DATA } from '../../../constants/atoms-page/kbd/kbdConstants';
import { KbdContainerProps } from '../../../interface/containers/atoms/kbd.types';

export default function KbdContainer({
  headerContent,
  breadcrumbItems
}: KbdContainerProps) {
  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Command Palette / Search Trigger Theme */}
          <DocSection
            id="theming-command-palette"
            title="1. Global Command Palette & Quick Search Theme"
            description="Trigger button with keyboard shortcut hint for spotlight navigation."
          >
            <ComponentPreview
              title="Command Palette Trigger"
              code={`<div className="flex items-center justify-between p-3.5 px-4 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle max-w-md w-full cursor-pointer hover:border-core-circle-primary/50 transition-colors">
  <div className="flex items-center gap-3 text-core-circle-text-muted text-sm">
    <SearchIcon size={18} />
    <span>Search docs, commands, and components...</span>
  </div>
  <div className="flex items-center gap-1">
    <Kbd size="sm" variant="outline">⌘</Kbd>
    <Kbd size="sm" variant="outline">K</Kbd>
  </div>
</div>`}
            >
              <div className="w-full max-w-md flex items-center justify-between p-3.5 px-4 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle cursor-pointer hover:border-core-circle-primary/50 transition-colors">
                <div className="flex items-center gap-3 text-core-circle-text-muted text-sm">
                  <SearchIcon size={18} />
                  <span>Search docs, commands, components...</span>
                </div>
                <div className="flex items-center gap-1">
                  <Kbd size="sm" variant="outline">⌘</Kbd>
                  <Kbd size="sm" variant="outline">K</Kbd>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. IDE & Code Editor Toolbar Theme */}
          <DocSection
            id="theming-code-editor"
            title="2. IDE & Code Editor Action Toolbar Theme"
            description="Quick action toolbar displaying essential editor bindings."
          >
            <ComponentPreview
              title="Editor Actions Toolbar"
              code={`<div className="flex items-center gap-6 p-3 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface">
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
</div>`}
            >
              <div className="w-full max-w-xl flex items-center gap-6 p-3 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Rich Text Markdown Formatting Theme */}
          <DocSection
            id="theming-rich-text"
            title="3. Markdown & Rich Text Formatting Theme"
            description="Text styling controls displaying key combinations."
          >
            <ComponentPreview
              title="Markdown Formatting Shortcuts"
              code={`<div className="flex items-center gap-4 p-3.5 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle">
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
</div>`}
            >
              <div className="w-full max-w-xl flex items-center gap-4 p-3.5 rounded-core-circle-xl border border-core-circle-border-main bg-white shadow-core-circle-subtle">
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
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Data Table Navigation Theme */}
          <DocSection
            id="theming-data-table"
            title="4. Data Grid & Spreadsheet Navigation Theme"
            description="Keyboard navigation hints for data intensive grids."
          >
            <ComponentPreview
              title="Table Navigation Footer"
              code={`<div className="p-3.5 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface flex items-center justify-between text-xs text-core-circle-text-muted">
  <div className="flex items-center gap-2">
    <span>Next row:</span> <Kbd size="sm">↓</Kbd>
    <span className="ml-2">Previous row:</span> <Kbd size="sm">↑</Kbd>
  </div>
  <div className="flex items-center gap-2">
    <span>Edit cell:</span> <Kbd size="sm">Enter</Kbd>
    <span className="ml-2">Cancel:</span> <Kbd size="sm">Esc</Kbd>
  </div>
</div>`}
            >
              <div className="w-full max-w-xl p-3.5 rounded-core-circle-xl border border-core-circle-border-main bg-core-circle-bg-surface flex items-center justify-between text-xs text-core-circle-text-muted">
                <div className="flex items-center gap-2">
                  <span>Next row:</span> <Kbd size="sm">↓</Kbd>
                  <span className="ml-2">Previous row:</span> <Kbd size="sm">↑</Kbd>
                </div>
                <div className="flex items-center gap-2">
                  <span>Edit cell:</span> <Kbd size="sm">Enter</Kbd>
                  <span className="ml-2">Cancel:</span> <Kbd size="sm">Esc</Kbd>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Terminal CLI Prompt Theme */}
          <DocSection
            id="theming-terminal-cli"
            title="5. Terminal CLI Prompt & Shell Controls Theme"
            description="Shell environment hint bar with interruption and clear bindings."
          >
            <ComponentPreview
              title="Terminal Interactive Bar"
              code={`<div className="p-4 rounded-core-circle-xl bg-slate-50 border border-core-circle-border-main text-slate-700 font-mono text-xs flex items-center justify-between">
  <div className="flex items-center gap-2">
    <Terminal size={16} className="text-emerald-400" />
    <span>$ nx run @core-circle/ui:build</span>
  </div>
  <div className="flex items-center gap-3 text-slate-400">
    <span>Stop: <Kbd size="sm" variant="outline">Ctrl+C</Kbd></span>
    <span>Clear: <Kbd size="sm" variant="outline">Ctrl+L</Kbd></span>
  </div>
</div>`}
            >
              <div className="w-full max-w-xl p-4 rounded-core-circle-xl bg-slate-50 border border-core-circle-border-main text-slate-700 font-mono text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-emerald-400" />
                  <span>$ nx run @core-circle/ui:build</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span>Stop: <Kbd size="sm" variant="outline">Ctrl+C</Kbd></span>
                  <span>Clear: <Kbd size="sm" variant="outline">Ctrl+L</Kbd></span>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Variants',
      icon: <Layers size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="kbd-styles" title="1. Visual Variants" description="Outline, solid, and ghost surface treatments.">
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
          </DocSection>

          <DocSection id="kbd-sizes" title="2. Size Scale" description="Small (compact) and medium (standard) dimensions.">
            <ComponentPreview
              title="Sizes (sm, md)"
              code={`<Kbd size="sm">⌘</Kbd>\n<Kbd size="md">⌘</Kbd>`}
            >
              <div className="flex items-center gap-4">
                <Kbd size="sm">⌘</Kbd>
                <Kbd size="md">⌘</Kbd>
              </div>
            </ComponentPreview>
          </DocSection>

          <DocSection id="kbd-combinations" title="3. Shortcut Combinations" description="Composing multi-key shortcuts with separators.">
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
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: (
        <DocSection id="kbd-playground" title="Interactive Playground" description="Customize key text, variants, and sizes in real-time.">
          <KbdPlayground />
        </DocSection>
      )
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-8 max-w-5xl">
          <DocSection id="kbd-mock" title="Dynamic Shortcut Configurations API" description="Example of rendering application shortcuts dynamically from user preferences.">
            <div className="flex flex-col gap-10 mt-8">
              <CodeSnippet
                label="Shortcut Settings API Response"
                code={JSON.stringify({
                  shortcuts: [
                    { id: "save", label: "Save File", keys: ["⌘", "S"] },
                    { id: "command_palette", label: "Command Palette", keys: ["⌘", "K"] },
                    { id: "split_editor", label: "Split Editor", keys: ["⌘", "\\"] }
                  ]
                }, null, 2)}
              />

              <CodeSnippet
                label="Shortcut List Component"
                code={`import { Kbd } from '@core-circle/ui';

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
};`}
              />
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="kbd-intro" title="Introduction" description="The Kbd atom visually denotes keyboard shortcuts, key combinations, and system hotkeys.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { Kbd } from '@core-circle/ui';

<div className="flex items-center gap-1">
  <Kbd size="sm">⌘</Kbd>
  <span>+</span>
  <Kbd size="sm">K</Kbd>
</div>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={KBD_PROPS_DATA} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        {breadcrumbItems && (
          <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        )}
        <Typography variant="h1" className={s.title}>{headerContent?.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent?.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs
          items={tabItems}
          variant="underline"
          size="lg"
          className="w-full"
        />
      </div>
    </div>
  );
}
