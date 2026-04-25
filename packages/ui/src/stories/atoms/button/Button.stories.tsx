import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../components/atoms/button/Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'destructive', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// --- Basic Variants ---
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const GhostWithArrow: Story = {
  args: {
    variant: 'ghost',
    endIcon: <span>→</span>,
    children: 'Learn More',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
};

// --- Sizes ---
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

// --- Loading Scenarios ---
export const DefaultLoading: Story = {
  args: {
    loading: true,
    children: 'Loading State',
  },
};

export const CustomStartLoader: Story = {
  args: {
    loading: true,
    startLoadingIcon: <span className="animate-pulse">⏳</span>,
    children: 'Custom Start Loader',
  },
};

export const EndLoader: Story = {
  args: {
    loading: true,
    endLoadingIcon: <span className="animate-spin text-blue-500">⚙️</span>,
    children: 'End Loader',
  },
};

// --- Icon Scenarios ---
export const WithStartIcon: Story = {
  args: {
    startIcon: <span>📧</span>,
    children: 'Email Us',
  },
};

export const WithEndIcon: Story = {
  args: {
    endIcon: <span>→</span>,
    children: 'Next Step',
  },
};

export const IconSwapping: Story = {
  args: {
    loading: true,
    startIcon: <span>📧</span>,
    endIcon: <span>→</span>,
    children: 'Icons are hidden when loading',
  },
};

export const EndLoadingWithIcon: Story = {
  args: {
    loading: true,
    endLoadingIcon: <span>⌛</span>,
    endIcon: <span>→</span>,
    children: 'End icon swapped',
  },
};

// --- Advanced Customization ---
export const FullyCustom: Story = {
  args: {
    variant: 'outline',
    className: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none hover:opacity-90',
    children: 'Gradient Button',
  },
};

export const IconOnly: Story = {
  args: {
    size: 'icon',
    variant: 'secondary',
    children: <span>🔔</span>,
  },
};
