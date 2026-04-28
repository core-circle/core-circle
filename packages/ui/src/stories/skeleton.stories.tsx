import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../components/atoms/skeleton/skeleton';
import React from 'react';

const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular'],
    },
    animation: {
      control: 'select',
      options: ['none', 'pulse', 'shimmer'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    variant: 'rectangular',
    width: 300,
    height: 150,
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    width: '100%',
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: 60,
    height: 60,
  },
};

export const Pulse: Story = {
  args: {
    variant: 'rectangular',
    animation: 'pulse',
    width: 300,
    height: 150,
  },
};

export const Combined: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4 border rounded-lg max-w-md">
      <Skeleton variant="circular" width={48} height={48} />
      <div className="flex-1">
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="80%" />
      </div>
    </div>
  ),
};
