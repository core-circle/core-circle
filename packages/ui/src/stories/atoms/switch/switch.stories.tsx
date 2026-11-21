import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../../../components/atoms/switch/switch';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'gradient', 'glassmorphic', 'glow', 'floating', 'accent', 'dark'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    defaultChecked: true,
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    size: 'lg',
    defaultChecked: true,
  },
};

export const Glow: Story = {
  args: {
    variant: 'glow',
    size: 'lg',
    defaultChecked: true,
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    size: 'md',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

