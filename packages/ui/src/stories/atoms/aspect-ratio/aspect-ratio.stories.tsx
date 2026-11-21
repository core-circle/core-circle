import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '../../../components/atoms/aspect-ratio/aspect-ratio';
import React from 'react';

const meta: Meta<typeof AspectRatio> = {
  title: 'Atoms/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'select',
      options: ['16:9', '4:3', '1:1', '21:9', '9:16', '3:2', '2:3', '3:4'],
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'bordered',
        'rounded',
        'glassmorphic',
        'gradient',
        'glow',
        'dark',
        'shadow',
        'accent',
        'minimal',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <AspectRatio {...args}>
        <div className="bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-500">
          16:9 Cinematic Container
        </div>
      </AspectRatio>
    </div>
  ),
  args: {
    ratio: '16:9',
    variant: 'bordered',
  },
};

export const SquareAvatar: Story = {
  render: (args) => (
    <div className="w-48">
      <AspectRatio {...args}>
        <div className="bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-white">
          1:1 Square
        </div>
      </AspectRatio>
    </div>
  ),
  args: {
    ratio: '1:1',
    variant: 'gradient',
  },
};
