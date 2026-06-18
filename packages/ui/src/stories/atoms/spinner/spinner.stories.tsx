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
      options: ['primary', 'secondary', 'warning', 'destructive', 'info', 'white'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner variant="primary" />
      <Spinner variant="secondary" />
      <Spinner variant="warning" />
      <Spinner variant="destructive" />
      <Spinner variant="info" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const CustomThickness: Story = {
  args: {
    size: 'lg',
    thickness: 8,
  },
};
