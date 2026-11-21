import type { Meta, StoryObj } from '@storybook/react';
import { SliderInput } from '../../../components/atoms/slider-input/slider-input';

const meta: Meta<typeof SliderInput> = {
  title: 'Atoms/SliderInput',
  component: SliderInput,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'gradient', 'glassmorphic', 'glow', 'floating', 'accent', 'dark'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    showValue: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SliderInput>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Track',
    defaultValue: 50,
    showValue: true,
    fullWidth: true,
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    label: 'Radiant Gradient',
    defaultValue: 75,
    showValue: true,
    fullWidth: true,
  },
};

export const Glow: Story = {
  args: {
    variant: 'glow',
    label: 'Neon Glow Studio Gain',
    defaultValue: 65,
    showValue: true,
    fullWidth: true,
  },
};

export const Glassmorphic: Story = {
  args: {
    variant: 'glassmorphic',
    label: 'Frosted Translucent Slider',
    defaultValue: 45,
    showValue: true,
    fullWidth: true,
  },
};

export const Floating: Story = {
  args: {
    variant: 'floating',
    label: 'Floating Elevated Slider',
    defaultValue: 80,
    showValue: true,
    fullWidth: true,
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    label: 'Accent Highlight',
    defaultValue: 60,
    showValue: true,
    fullWidth: true,
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    label: 'Dark Mode Terminal Bitrate',
    defaultValue: 90,
    showValue: true,
    fullWidth: true,
  },
};

export const WithCustomFormatting: Story = {
  args: {
    variant: 'primary',
    label: 'Mortgage Loan Amount',
    min: 0,
    max: 1000000,
    step: 5000,
    defaultValue: 450000,
    showValue: true,
    formatValue: (val) => `$${val.toLocaleString()}`,
    fullWidth: true,
  },
};

