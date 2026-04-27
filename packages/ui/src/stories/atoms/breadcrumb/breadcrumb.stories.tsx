import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '../../../components/atoms/breadcrumb/breadcrumb';
import { HomeIcon, UserIcon, SettingsIcon, CodeIcon } from '@core-circle/icons';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'ghost', 'pills'],
    },
    showBack: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

const defaultItems = [
  { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
  { label: 'Atoms', href: '/atoms' },
  { label: 'Breadcrumb' },
];

export const Standard: Story = {
  args: {
    items: defaultItems,
    variant: 'standard',
  },
};

export const Ghost: Story = {
  args: {
    items: defaultItems,
    variant: 'ghost',
  },
};

export const Pills: Story = {
  args: {
    items: defaultItems,
    variant: 'pills',
  },
};

export const WithBackLink: Story = {
  args: {
    items: defaultItems,
    variant: 'standard',
    showBack: true,
    backLabel: 'Go Back',
  },
};

export const LongPath: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '#', icon: <HomeIcon size={14} /> },
      { label: 'Settings', href: '#', icon: <SettingsIcon size={14} /> },
      { label: 'User Profile', href: '#', icon: <UserIcon size={14} /> },
      { label: 'Security', href: '#' },
      { label: 'Two Factor Auth' },
    ],
    variant: 'standard',
  },
};

export const CustomSeparator: Story = {
  args: {
    items: defaultItems,
    variant: 'standard',
    separator: <span className="text-core-circle-text-muted opacity-50 px-1">•</span>,
  },
};

export const WithCustomLink: Story = {
  args: {
    items: defaultItems,
    variant: 'standard',
    renderLink: ({ href, children, className }) => (
      <a 
        href={href} 
        className={`${className} border-b border-dashed border-core-circle-primary/30`}
        onClick={(e) => {
          e.preventDefault();
          alert(`Navigating to: ${href}`);
        }}
      >
        {children}
      </a>
    ),
  },
};
export const WithPrefixSuffix: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
      { label: 'Shop', href: '/shop', prefix: '🛍️' },
      { label: 'Cart', suffix: '(2 items)' },
    ],
    variant: 'standard',
  },
};
