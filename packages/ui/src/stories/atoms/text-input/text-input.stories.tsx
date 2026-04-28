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
    labelSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    labelWeight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
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
export const WithPrefixAndSuffix: Story = {
  args: {
    variant: 'outline',
    label: 'Price',
    placeholder: '0.00',
    prefix: <span className="font-core-circle-bold text-core-circle-text-main">$</span>,
    suffix: <span className="text-core-circle-text-muted">USD</span>,
    type: 'number',
    fullWidth: true,
  },
};

export const WithTitlePrefix: Story = {
  args: {
    variant: 'outline',
    label: 'Full Name',
    placeholder: 'John Doe',
    prefix: 'Mr.',
    startIcon: <UserIcon size={18} />,
    fullWidth: true,
  },
};

export const MaterialWithPrefix: Story = {
  args: {
    variant: 'material',
    label: 'Weight',
    placeholder: '00',
    suffix: 'kgs',
    fullWidth: true,
  },
};

export const MaterialAnimatedWithIcons: Story = {
  args: {
    variant: 'material-animated',
    label: 'User Info',
    placeholder: 'Enter details',
    startIcon: <UserIcon size={18} />,
    fullWidth: true,
  },
};

export const MaterialAnimatedWithPrefix: Story = {
  args: {
    variant: 'material-animated',
    label: 'Price',
    placeholder: '0.00',
    prefix: '$',
    type: 'number',
    fullWidth: true,
  },
};
