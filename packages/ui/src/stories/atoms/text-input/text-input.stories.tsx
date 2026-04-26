import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../../../components/atoms/text-input/text-input';
import { Mail, Lock, SearchIcon, UserIcon, Phone } from '@core-circle/icons';

const meta: Meta<typeof TextInput> = {
  title: 'Atoms/TextInput',
  component: TextInput,
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
type Story = StoryObj<typeof TextInput>;

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Username',
    placeholder: 'Enter your username',
    fullWidth: true,
  },
};

export const Material: Story = {
  args: {
    variant: 'material',
    label: 'Email Address',
    placeholder: 'name@example.com',
    fullWidth: true,
  },
};

export const MaterialAnimated: Story = {
  args: {
    variant: 'material-animated',
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    fullWidth: true,
  },
};

export const WithIcons: Story = {
  args: {
    variant: 'outline',
    label: 'Search',
    placeholder: 'Search components...',
    startIcon: <SearchIcon size={18} />,
    endIcon: <div className="text-[10px] bg-core-circle-bg-page px-1.5 py-0.5 rounded border border-core-circle-border-main text-core-circle-text-muted font-mono">⌘K</div>,
    fullWidth: true,
  },
};

export const WithError: Story = {
  args: {
    variant: 'outline',
    label: 'Email',
    defaultValue: 'invalid-email',
    error: 'Please enter a valid email address',
    startIcon: <Mail size={18} />,
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'outline',
    label: 'Disabled Input',
    placeholder: 'You cannot type here',
    disabled: true,
    startIcon: <Lock size={18} />,
    fullWidth: true,
  },
};
