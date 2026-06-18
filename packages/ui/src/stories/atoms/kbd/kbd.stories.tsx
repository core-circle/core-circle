import type { Meta, StoryObj } from '@storybook/react';
import { Kbd } from '../../../components/atoms/kbd/kbd';
import React from 'react';

const meta: Meta<typeof Kbd> = {
  title: 'Atoms/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'solid', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  args: {
    children: '⌘',
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    children: 'Ctrl',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Shift',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Alt',
  },
};

export const Combination: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Kbd>⌘</Kbd>
      <span>+</span>
      <Kbd>Shift</Kbd>
      <span>+</span>
      <Kbd>P</Kbd>
    </div>
  ),
};
