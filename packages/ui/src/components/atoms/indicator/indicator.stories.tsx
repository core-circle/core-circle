import type { Meta, StoryObj } from '@storybook/react';
import { Indicator } from './indicator';
import { Avatar } from '../avatar/avatar';
import { Button } from '../button/button';
import { Bell } from '@core-circle/icons';
import React from 'react';

const meta: Meta<typeof Indicator> = {
  title: 'Atoms/Indicator',
  component: Indicator,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info'],
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Indicator>;

export const Default: Story = {
  args: {
    variant: 'danger',
    children: <Avatar name="John Wick" />,
    pulse: true,
  },
};

export const WithCount: Story = {
  args: {
    content: '5',
    variant: 'danger',
    children: <Button variant="outline" size="icon"><Bell size={18} /></Button>,
  },
};

export const Status: Story = {
  args: {
    variant: 'success',
    size: 'sm',
    position: 'bottom-right',
    children: <Avatar name="Active User" />,
  },
};

export const Positions: Story = {
  render: () => (
    <div className="flex gap-8">
      <Indicator position="top-right" variant="danger" content="1">
        <div className="w-10 h-10 bg-slate-100 border rounded" />
      </Indicator>
      <Indicator position="top-left" variant="success" content="2">
        <div className="w-10 h-10 bg-slate-100 border rounded" />
      </Indicator>
      <Indicator position="bottom-right" variant="warning" content="3">
        <div className="w-10 h-10 bg-slate-100 border rounded" />
      </Indicator>
      <Indicator position="bottom-left" variant="info" content="4">
        <div className="w-10 h-10 bg-slate-100 border rounded" />
      </Indicator>
    </div>
  ),
};
