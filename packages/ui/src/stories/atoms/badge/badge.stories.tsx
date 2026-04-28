import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../../../components/atoms/badge/badge';
import { Sparkles, Info, Alert, CheckIcon } from '@core-circle/icons';
import React from 'react';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      control: 'select',
      options: ['rounded', 'pill', 'square'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: 'New Feature',
    variant: 'primary',
  },
};

export const Semantic: Story = {
  render: (args) => (
    <div className="flex items-center gap-4 flex-wrap">
      <Badge {...args} variant="success">Success</Badge>
      <Badge {...args} variant="warning">Warning</Badge>
      <Badge {...args} variant="danger">Danger</Badge>
      <Badge {...args} variant="secondary">Secondary</Badge>
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="flex items-center gap-4 flex-wrap">
      <Badge {...args} variant="primary" startIcon={<Sparkles size={12} />}>Premium</Badge>
      <Badge {...args} variant="success" startIcon={<CheckIcon size={12} />}>Verified</Badge>
      <Badge {...args} variant="danger" startIcon={<Alert size={12} />}>High Risk</Badge>
      <Badge {...args} variant="warning" startIcon={<Info size={12} />}>Note</Badge>
    </div>
  ),
};

export const Shapes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4 flex-wrap">
      <Badge {...args} shape="rounded">Rounded</Badge>
      <Badge {...args} shape="pill">Pill Shape</Badge>
      <Badge {...args} shape="square">Square</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4 flex-wrap">
      <Badge {...args} size="sm">Small</Badge>
      <Badge {...args} size="md">Medium</Badge>
      <Badge {...args} size="lg">Large</Badge>
    </div>
  ),
};

export const Removable: Story = {
  args: {
    children: 'Removable Tag',
    removable: true,
    onRemove: () => alert('Removed!'),
  },
};

export const Pulse: Story = {
  args: {
    children: 'Live Update',
    variant: 'success',
    pulse: true,
  },
};
