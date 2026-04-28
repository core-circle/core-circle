import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../../../components/atoms/accordion/accordion';
import { UserIcon, Shield, SettingsIcon } from '@core-circle/icons';
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
      control: 'select',
      options: ['single', 'multiple'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const items = [
  {
    id: '1',
    title: 'Profile Information',
    content: 'Manage your personal details, contact information, and public profile settings.',
    startIcon: <UserIcon size={18} />,
  },
  {
    id: '2',
    title: 'Security & Privacy',
    content: 'Control your account security, two-factor authentication, and privacy preferences.',
    startIcon: <Shield size={18} />,
  },
  {
    id: '3',
    title: 'System Settings',
    content: 'Adjust system-wide preferences and notification settings.',
    startIcon: <SettingsIcon size={18} />,
  },
];

export const Bordered: Story = {
  args: {
    items,
    variant: 'bordered',
    defaultValue: '1',
  },
};

export const Separated: Story = {
  args: {
    items,
    variant: 'separated',
    defaultValue: '1',
  },
};

export const Ghost: Story = {
  args: {
    items,
    variant: 'ghost',
    defaultValue: '1',
  },
};

export const Multiple: Story = {
  args: {
    items,
    type: 'multiple',
    variant: 'bordered',
  },
};

export const CustomIcons: Story = {
  args: {
    items: items.map(item => ({
      ...item,
      endIcon: <div className="px-2 py-0.5 rounded-full bg-core-circle-primary/10 text-[10px] text-core-circle-primary font-bold">PRO</div>
    })),
    variant: 'separated',
  },
};
