import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../../../components/atoms/select/select';
import { Map, Filter } from '@core-circle/icons';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'material', 'material-animated', 'ghost', 'standard', 'filled', 'glassmorphic', 'floating', 'gradient', 'pill', 'accent', 'dark'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const defaultOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date', disabled: true },
  { value: 'elderberry', label: 'Elderberry' },
];

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Select Fruit',
    options: defaultOptions,
    fullWidth: true,
  },
};

export const Floating: Story = {
  args: {
    variant: 'floating',
    label: 'Floating Surface',
    options: defaultOptions,
    fullWidth: true,
  },
};

export const Glassmorphic: Story = {
  args: {
    variant: 'glassmorphic',
    label: 'Glassmorphic Select',
    options: defaultOptions,
    fullWidth: true,
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    label: 'VIP Selection',
    options: defaultOptions,
    fullWidth: true,
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    label: 'Required Field',
    options: defaultOptions,
    fullWidth: true,
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    label: 'Terminal Environment',
    options: defaultOptions,
    fullWidth: true,
  },
};

export const Pill: Story = {
  args: {
    variant: 'pill',
    label: 'Category Pill',
    options: defaultOptions,
    fullWidth: true,
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Filled Style',
    options: defaultOptions,
    fullWidth: true,
  },
};

export const MaterialAnimated: Story = {
  args: {
    variant: 'material-animated',
    label: 'Select Category',
    options: defaultOptions,
    placeholder: 'Choose one...',
    fullWidth: true,
  },
};

export const WithIcons: Story = {
  args: {
    variant: 'outline',
    label: 'Filter by Category',
    options: [
      { value: 'all', label: 'All Categories' },
      { value: 'tech', label: 'Technology' },
      { value: 'design', label: 'Design' },
    ],
    startIcon: <Filter size={18} />,
    fullWidth: true,
  },
};

export const WithError: Story = {
  args: {
    variant: 'outline',
    label: 'Select Plan',
    options: [
      { value: 'basic', label: 'Basic' },
      { value: 'pro', label: 'Pro' },
    ],
    error: 'Please select a subscription plan',
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'outline',
    label: 'Disabled Select',
    options: defaultOptions,
    disabled: true,
    fullWidth: true,
  },
};
