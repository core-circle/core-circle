import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from './scroll-area';
import React from 'react';

const meta: Meta<typeof ScrollArea> = {
  title: 'Atoms/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'subtle',
        'thin',
        'glow',
        'gradient',
        'glassmorphic',
        'dark',
        'rounded',
        'accent',
        'minimal',
      ],
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'both'],
    },
    maxHeight: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: (args) => (
    <ScrollArea {...args} className="p-4 border rounded-xl" maxHeight="200px">
      <div className="space-y-3">
        {Array.from({ length: 15 }, (_, i) => (
          <p key={i} className="text-sm text-slate-700">
            Scrollable telemetry log line #{i + 1}: Event successfully verified by cluster node.
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
  args: {
    variant: 'default',
    orientation: 'vertical',
  },
};
