import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../../../components/atoms/skeleton/skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'rectangular', 'circular', 'text', 'card', 'avatar', 'button', 'badge', 'image', 'glassmorphic', 'gradient', 'dark'],
    },
    animation: {
      control: 'select',
      options: ['shimmer', 'pulse', 'wave', 'glow', 'none'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    variant: 'default',
    width: 300,
    height: 150,
  },
};

export const Avatar: Story = {
  args: {
    variant: 'avatar',
  },
};

export const ButtonSkeleton: Story = {
  args: {
    variant: 'button',
  },
};

export const CardSkeleton: Story = {
  args: {
    variant: 'card',
    width: 320,
    height: 180,
  },
};

export const Glassmorphic: Story = {
  args: {
    variant: 'glassmorphic',
    width: 320,
    height: 140,
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    width: 320,
    height: 140,
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    width: 320,
    height: 140,
  },
};

export const WaveAnimation: Story = {
  args: {
    variant: 'rectangular',
    animation: 'wave',
    width: 300,
    height: 150,
  },
};

export const GlowAnimation: Story = {
  args: {
    variant: 'button',
    animation: 'glow',
  },
};

