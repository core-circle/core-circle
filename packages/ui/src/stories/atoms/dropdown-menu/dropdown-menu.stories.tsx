import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from '../../../components/atoms/dropdown-menu/dropdown-menu';
import { Button } from '../../../components/atoms/button/button';
import { Badge } from '../../../components/atoms/badge/badge';
import {
  UserCircle,
  SettingsIcon,
  CreditCard,
  Lock,
  ChevronDown,
  Sparkles,
} from '@core-circle/icons';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Atoms/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

const sampleItems = [
  { id: 'profile', label: 'My Profile', icon: <UserCircle size={16} />, shortcut: '⇧⌘P' },
  { id: 'billing', label: 'Billing & Plan', icon: <CreditCard size={16} />, badge: <Badge size="sm" variant="gradient">PRO</Badge> },
  { id: 'settings', label: 'Account Settings', icon: <SettingsIcon size={16} />, shortcut: '⌘S' },
  { id: 'security', label: 'Security & 2FA', icon: <Lock size={16} />, divider: true },
  { id: 'logout', label: 'Sign Out', destructive: true, divider: true },
];

export const Default: Story = {
  args: {
    trigger: (
      <Button variant="primary" endIcon={<ChevronDown size={14} />}>
        Account Menu
      </Button>
    ),
    items: sampleItems,
    variant: 'card',
    size: 'md',
  },
};

export const Minimal: Story = {
  args: {
    trigger: (
      <Button variant="ghost" size="sm">
        Options ▾
      </Button>
    ),
    items: sampleItems.slice(0, 3),
    variant: 'minimal',
    size: 'sm',
  },
};

export const Glassmorphic: Story = {
  args: {
    trigger: (
      <Button variant="glassmorphic" endIcon={<Sparkles size={14} />}>
        VIP Controls
      </Button>
    ),
    items: sampleItems,
    variant: 'glassmorphic',
    size: 'lg',
  },
};
