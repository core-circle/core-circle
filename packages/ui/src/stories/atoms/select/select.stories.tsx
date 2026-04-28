import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../../../components/atoms/select/select';
import { Mail, Map, Filter } from '@core-circle/icons';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'material', 'material-animated', 'ghost', 'standard'],
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

export const MaterialAnimated: Story = {
  args: {
    variant: 'material-animated',
    label: 'Select Category',
    options: defaultOptions,
    placeholder: 'Choose one...',
    fullWidth: true,
  },
};

export const WithPlaceholder: Story = {
  args: {
    variant: 'outline',
    label: 'Fruit Selection',
    placeholder: 'Pick a fruit',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
    ],
    fullWidth: true,
  },
};

export const Material: Story = {
  args: {
    variant: 'material',
    label: 'Choose Language',
    options: [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' },
      { value: 'fr', label: 'French' },
    ],
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

export const SelectWithPrefix: Story = {
  args: {
    variant: 'outline',
    label: 'ID Number',
    options: defaultOptions,
    prefix: 'ID-',
    fullWidth: true,
  },
};

export const MaterialAnimatedWithIcons: Story = {
  args: {
    variant: 'material-animated',
    label: 'Regional Settings',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
    ],
    startIcon: <Map size={18} />,
    fullWidth: true,
  },
};
