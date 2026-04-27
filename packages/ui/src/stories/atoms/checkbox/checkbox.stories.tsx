import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../../components/atoms/checkbox/checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'solid'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Subscribe to newsletter',
    size: 'md',
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    label: 'I agree to the terms',
    size: 'md',
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Select All',
    indeterminate: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="sm" label="Small Checkbox" />
      <Checkbox size="md" label="Medium Checkbox" />
      <Checkbox size="lg" label="Large Checkbox" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Unchecked" />
      <Checkbox label="Disabled" disabled defaultChecked />
      <Checkbox label="Error" error="You must accept this" />
      <Checkbox label="With Helper Text" helperText="Additional information goes here" />
    </div>
  ),
};
