import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelect } from '../../../components/atoms/multi-select/multi-select';
import { Filter, Tag, Users } from '@core-circle/icons';

const meta: Meta<typeof MultiSelect> = {
  title: 'Atoms/MultiSelect',
  component: MultiSelect,
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
type Story = StoryObj<typeof MultiSelect>;

const defaultOptions = [
  { value: 'react', label: 'React' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'vite', label: 'Vite' },
  { value: 'tailwind', label: 'Tailwind CSS' },
  { value: 'typescript', label: 'TypeScript', disabled: true },
  { value: 'storybook', label: 'Storybook' },
];

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Frameworks',
    options: defaultOptions,
    placeholder: 'Choose technologies...',
    fullWidth: true,
  },
};

export const MaterialAnimated: Story = {
  args: {
    variant: 'material-animated',
    label: 'Select Skills',
    options: defaultOptions,
    defaultValue: ['react', 'nextjs'],
    fullWidth: true,
  },
};

export const WithIcons: Story = {
  args: {
    variant: 'outline',
    label: 'Assign Users',
    options: [
      { value: 'john', label: 'John Wick' },
      { value: 'tony', label: 'Tony Stark' },
      { value: 'bruce', label: 'Bruce Wayne' },
    ],
    startIcon: <Users size={18} />,
    fullWidth: true,
  },
};

export const Standard: Story = {
  args: {
    variant: 'standard',
    label: 'Tags',
    options: [
      { value: 'bug', label: 'Bug' },
      { value: 'feat', label: 'Feature' },
      { value: 'docs', label: 'Documentation' },
    ],
    prefix: <Tag size={14} />,
    fullWidth: true,
  },
};

export const WithError: Story = {
  args: {
    variant: 'outline',
    label: 'Selection required',
    options: defaultOptions,
    error: 'Please select at least one framework',
    fullWidth: true,
  },
};

export const MultiSelectWithPrefix: Story = {
  args: {
    variant: 'outline',
    label: 'Price Range',
    options: [
      { value: '100', label: '100' },
      { value: '200', label: '200' },
    ],
    prefix: '$',
    fullWidth: true,
  },
};

export const MaterialAnimatedWithIcon: Story = {
  args: {
    variant: 'material-animated',
    label: 'Team Members',
    options: [
      { value: 'john', label: 'John Wick' },
      { value: 'tony', label: 'Tony Stark' },
    ],
    startIcon: <Users size={18} />,
    fullWidth: true,
  },
};
