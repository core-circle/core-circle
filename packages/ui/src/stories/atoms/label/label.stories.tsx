import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../../components/atoms/label/label';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
    },
    variant: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'warning', 'error'],
    },
    uppercase: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Default Label',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Label {...args} size="xs">Extra Small (xs)</Label>
      <Label {...args} size="sm">Small (sm)</Label>
      <Label {...args} size="md">Medium (md)</Label>
      <Label {...args} size="lg">Large (lg)</Label>
      <Label {...args} size="xl">Extra Large (xl)</Label>
      <Label {...args} size="2xl">2XL (2xl)</Label>
    </div>
  ),
};

export const Weights: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Label {...args} weight="light">Light Weight</Label>
      <Label {...args} weight="normal">Normal Weight</Label>
      <Label {...args} weight="medium">Medium Weight</Label>
      <Label {...args} weight="semibold">Semibold Weight</Label>
      <Label {...args} weight="bold">Bold Weight</Label>
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Label {...args} variant="default">Default Variant</Label>
      <Label {...args} variant="muted">Muted Variant</Label>
      <Label {...args} variant="primary">Primary Variant</Label>
      <Label {...args} variant="warning">Warning Variant</Label>
      <Label {...args} variant="error">Error Variant</Label>
    </div>
  ),
};

export const Capitalize: Story = {
  args: {
    children: 'this label will be capitalized',
    size: 'sm',
    weight: 'normal',
    variant: 'muted',
  },
};

export const Uppercase: Story = {
  args: {
    uppercase: true,
    children: 'uppercase label',
    size: 'sm',
    weight: 'medium',
    variant: 'default',
  },
};
