import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible } from '../../../components/atoms/collapsible/collapsible';
import { ChevronDown, Sparkles } from '@core-circle/icons';

const meta: Meta<typeof Collapsible> = {
  title: 'Atoms/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['default', 'card', 'bordered'] },
    disabled: { control: 'boolean' },
    defaultOpen: { control: 'boolean' },
    unmountOnExit: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const DefaultCard: Story = {
  render: (args) => (
    <Collapsible {...args} variant="card" className="max-w-md">
      <Collapsible.Trigger className="p-4 font-semibold text-core-circle-text-main hover:bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-core-circle-primary" />
          <span>Advanced AI Settings</span>
        </div>
        <ChevronDown size={16} />
      </Collapsible.Trigger>
      <Collapsible.Content className="border-t border-core-circle-border-main p-4 text-sm text-core-circle-text-muted">
        Configure temperature, top-p nucleus sampling, frequency penalty, and system instruction constraints for custom model completion pipelines.
      </Collapsible.Content>
    </Collapsible>
  ),
};

export const BorderedHighContrast: Story = {
  render: (args) => (
    <Collapsible {...args} variant="bordered" className="max-w-md">
      <Collapsible.Trigger className="p-4 font-medium text-core-circle-text-main flex items-center justify-between">
        <span>Repository Audit Logs</span>
        <ChevronDown size={16} />
      </Collapsible.Trigger>
      <Collapsible.Content className="p-4 border-t-2 border-core-circle-border-main bg-slate-50 text-xs font-mono text-slate-700">
        [2026-11-22T20:45:10Z] SHA-256 integrity verified. 0 uncommitted workspace anomalies detected.
      </Collapsible.Content>
    </Collapsible>
  ),
};
