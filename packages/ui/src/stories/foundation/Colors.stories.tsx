import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const ColorBlock = ({ name, variable }: { name: string; variable: string }) => (
  <div className="flex items-center gap-4 p-2 rounded-lg border border-core-circle-border-main bg-core-circle-bg-surface">
    <div 
      className="h-12 w-12 rounded-md shadow-core-circle-subtle border border-core-circle-border-main" 
      style={{ backgroundColor: variable }} 
    />
    <div className="flex flex-col">
      <span className="text-core-circle-text-main font-core-circle-medium text-core-circle-sm">{name}</span>
      <span className="text-core-circle-text-muted text-core-circle-xs font-mono">{variable}</span>
    </div>
  </div>
);

const ColorGroup = ({ title, colors }: { title: string; colors: Record<string, string> }) => (
  <div className="flex flex-col gap-4 mb-8">
    <h3 className="text-core-circle-text-main text-core-circle-xl font-core-circle-bold border-b border-core-circle-border-main pb-2">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(colors).map(([name, variable]) => (
        <ColorBlock key={name} name={name} variable={variable} />
      ))}
    </div>
  </div>
);

const Palette = () => {
  const groups = {
    'Semantic Presets': {
      'bg-page': 'var(--color-core-circle-bg-page)',
      'bg-surface': 'var(--color-core-circle-bg-surface)',
      'bg-muted': 'var(--color-core-circle-bg-muted)',
      'bg-inverse': 'var(--color-core-circle-bg-inverse)',
      'text-main': 'var(--color-core-circle-text-main)',
      'text-muted': 'var(--color-core-circle-text-muted)',
      'text-inverse': 'var(--color-core-circle-text-inverse)',
      'border-main': 'var(--color-core-circle-border-main)',
      'border-primary': 'var(--color-core-circle-border-primary)',
    },
    'Blue (Brand)': {
      'blue-50': 'var(--color-core-circle-blue-50)',
      'blue-100': 'var(--color-core-circle-blue-100)',
      'blue-500': 'var(--color-core-circle-blue-500)',
      'blue-600': 'var(--color-core-circle-blue-600)',
      'blue-950': 'var(--color-core-circle-blue-950)',
    },
    'Slate (Neutrals)': {
      'slate-50': 'var(--color-core-circle-slate-50)',
      'slate-200': 'var(--color-core-circle-slate-200)',
      'slate-500': 'var(--color-core-circle-slate-500)',
      'slate-900': 'var(--color-core-circle-slate-900)',
    }
  };

  return (
    <div className="p-8 bg-core-circle-bg-page min-h-screen">
      <h1 className="text-core-circle-text-main text-core-circle-4xl font-core-circle-bold mb-2">Core Circle Color Palette</h1>
      <p className="text-core-circle-text-muted mb-8">Comprehensive design tokens for the Core Circle ecosystem.</p>
      {Object.entries(groups).map(([title, colors]) => (
        <ColorGroup key={title} title={title} colors={colors} />
      ))}
    </div>
  );
};

const meta: Meta = {
  title: 'Foundation/Colors',
  component: Palette,
};

export default meta;
type Story = StoryObj<typeof Palette>;

export const FullPalette: Story = {};
