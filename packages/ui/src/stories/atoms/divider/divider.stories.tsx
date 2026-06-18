import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../../../components/atoms/divider/divider';
import React from 'react';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
    },
    thickness: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    thickness: 'sm',
  },
};

export const WithText: Story = {
  args: {
    children: 'OR',
    variant: 'solid',
  },
};

export const Dashed: Story = {
  args: {
    variant: 'dashed',
    thickness: 'md',
  },
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-12 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Divider orientation="vertical" />
      <div>Docs</div>
      <Divider orientation="vertical" />
      <div>Source</div>
    </div>
  ),
};
