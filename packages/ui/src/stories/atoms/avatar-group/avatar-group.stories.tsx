import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from '../../../components/atoms/avatar-group/avatar-group';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Atoms/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'bordered',
        'ring',
        'glow',
        'glassmorphic',
        'gradient',
        'compact',
        'relaxed',
        'dark',
        'pill',
      ],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    max: {
      control: 'number',
    },
    spacing: {
      control: 'select',
      options: ['compact', 'normal', 'relaxed'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

const SAMPLE_USERS = [
  { fallback: 'JD', name: 'John Doe', status: 'online' as const },
  { fallback: 'AL', name: 'Alice Lee', status: 'online' as const },
  { fallback: 'MR', name: 'Marcus Ray', status: 'busy' as const },
  { fallback: 'SK', name: 'Sophia Kim', status: 'offline' as const },
  { fallback: 'EW', name: 'Emma Watson' },
  { fallback: 'TW', name: 'Tom Wilson' },
];

export const Default: Story = {
  args: {
    max: 4,
    size: 'md',
    variant: 'default',
    spacing: 'normal',
    items: SAMPLE_USERS,
  },
};

export const GradientRing: Story = {
  args: {
    max: 3,
    size: 'lg',
    variant: 'gradient',
    spacing: 'normal',
    items: SAMPLE_USERS,
  },
};
