import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SliderInput } from '../../../components/atoms/slider-input/slider-input';

const meta: Meta<typeof SliderInput> = {
  title: 'Atoms/SliderInput',
  component: SliderInput,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'primary', 'success', 'warning', 'danger'],
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
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    step: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SliderInput>;

export const Standard: Story = {
  args: {
    variant: 'standard',
    label: 'Default Slider',
    defaultValue: 50,
    min: 0,
    max: 100,
    showValue: true,
    fullWidth: true,
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Volume Control',
    defaultValue: 30,
    min: 0,
    max: 100,
    showValue: true,
    fullWidth: true,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Brightness',
    defaultValue: 80,
    min: 0,
    max: 100,
    showValue: true,
    fullWidth: true,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'Warning Threshold',
    defaultValue: 60,
    min: 0,
    max: 100,
    showValue: true,
    fullWidth: true,
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Risk Level',
    defaultValue: 90,
    min: 0,
    max: 100,
    showValue: true,
    fullWidth: true,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8">
      <SliderInput {...args} size="sm" label="Small Slider" defaultValue={20} showValue />
      <SliderInput {...args} size="md" label="Medium Slider" defaultValue={50} showValue />
      <SliderInput {...args} size="lg" label="Large Slider" defaultValue={80} showValue />
    </div>
  ),
};

export const WithCustomFormatting: Story = {
  args: {
    variant: 'primary',
    label: 'Price Range',
    min: 0,
    max: 1000,
    step: 10,
    defaultValue: 250,
    showValue: true,
    formatValue: (val) => `$${val}`,
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Slider',
    defaultValue: 40,
    disabled: true,
    showValue: true,
    fullWidth: true,
  },
};
