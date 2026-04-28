import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../../components/atoms/avatar/avatar';
import React from 'react';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Image: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80',
    alt: 'John Doe',
    name: 'John Doe',
  },
};

export const Initials: Story = {
  args: {
    name: 'Jane Smith',
  },
};

export const StatusIndicator: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    status: 'online',
  },
};

export const Shapes: Story = {
  render: (args) => (
    <div className="flex items-center gap-6">
      <Avatar {...args} shape="circle" name="Circle" />
      <Avatar {...args} shape="rounded" name="Rounded" />
      <Avatar {...args} shape="square" name="Square" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-6 flex-wrap">
      <Avatar {...args} size="xs" name="Extra Small" />
      <Avatar {...args} size="sm" name="Small" />
      <Avatar {...args} size="md" name="Medium" />
      <Avatar {...args} size="lg" name="Large" />
      <Avatar {...args} size="xl" name="Extra Large" />
      <Avatar {...args} size="2xl" name="2XL" />
    </div>
  ),
};

export const Bordered: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80',
    bordered: true,
  },
};
