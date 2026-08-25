import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './rating';
import React from 'react';

const meta: Meta<typeof Rating> = {
  title: 'Atoms/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'amber',
        'gold',
        'rose',
        'emerald',
        'indigo',
        'gradient',
        'glow',
        'glassmorphic',
        'dark',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    max: {
      control: 'number',
    },
    allowHalf: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
    showScore: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    defaultValue: 4,
    max: 5,
    variant: 'default',
    size: 'md',
    showScore: true,
  },
};

export const HalfStars: Story = {
  args: {
    defaultValue: 4.5,
    allowHalf: true,
    variant: 'gold',
    size: 'lg',
    showScore: true,
  },
};

export const ReadOnly: Story = {
  args: {
    value: 5,
    readOnly: true,
    variant: 'emerald',
    size: 'md',
    showScore: true,
  },
};
