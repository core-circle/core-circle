import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../../../components/atoms/spinner/spinner';
import React from 'react';

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'gradient', 'glow', 'glassmorphic', 'accent', 'dark', 'white'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    size: 'lg',
  },
};

export const Glow: Story = {
  args: {
    variant: 'glow',
    size: 'lg',
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    size: 'lg',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6 p-6 bg-slate-900 rounded-2xl">
      <Spinner variant="primary" size="lg" />
      <Spinner variant="secondary" size="lg" />
      <Spinner variant="success" size="lg" />
      <Spinner variant="warning" size="lg" />
      <Spinner variant="danger" size="lg" />
      <Spinner variant="info" size="lg" />
      <Spinner variant="gradient" size="lg" />
      <Spinner variant="glow" size="lg" />
      <Spinner variant="glassmorphic" size="lg" />
      <Spinner variant="accent" size="lg" />
      <Spinner variant="dark" size="lg" />
      <Spinner variant="white" size="lg" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

