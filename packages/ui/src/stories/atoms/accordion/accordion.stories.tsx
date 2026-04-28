import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './accordion';
import { HelpCircle, Settings, Shield, User } from '@core-circle/icons';
import React from 'react';

const meta: Meta<typeof Accordion> = {
  title: 'Atoms/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['bordered', 'ghost', 'separated'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const items = [
  {
    id: 'item-1',
    title: 'Account Settings',
    content: 'Manage your account settings and preferences. You can update your email, password, and personal information here.',
    icon: <User size={20} />,
  },
  {
    id: 'item-2',
    title: 'Privacy & Security',
    content: 'Configure your privacy settings and security options. Enable two-factor authentication for better protection.',
    icon: <Shield size={20} />,
  },
  {
    id: 'item-3',
    title: 'System Preferences',
    content: 'Adjust system-wide settings like notifications, display, and sound to match your workflow.',
    icon: <Settings size={20} />,
    disabled: true,
  },
  {
    id: 'item-4',
    title: 'Help & Support',
    content: 'Get help with your account or find answers to frequently asked questions in our documentation.',
    icon: <HelpCircle size={20} />,
  },
];

export const Bordered: Story = {
  args: {
    items,
    variant: 'bordered',
    type: 'single',
    defaultValue: 'item-1',
  },
};

export const Ghost: Story = {
  args: {
    items,
    variant: 'ghost',
    type: 'single',
  },
};

export const Separated: Story = {
  args: {
    items,
    variant: 'separated',
    type: 'multiple',
    defaultValue: ['item-1', 'item-4'],
  },
};

export const Small: Story = {
  args: {
    items,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    items,
    size: 'lg',
  },
};
