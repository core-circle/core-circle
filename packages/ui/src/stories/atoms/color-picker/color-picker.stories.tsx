import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from '../../../components/atoms/color-picker/color-picker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Atoms/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'material', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showValue: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Theme Color',
    value: '#3b82f6',
  },
};

export const Material: Story = {
  args: {
    variant: 'material',
    label: 'Material Color',
    value: '#10b981',
  },
};

export const Large: Story = {
  args: {
    variant: 'outline',
    size: 'lg',
    label: 'Brand Color',
    value: '#f59e0b',
  },
};

export const HiddenValue: Story = {
  args: {
    variant: 'outline',
    showValue: false,
    label: 'Pick a color',
    value: '#8b5cf6',
  },
};

export const WithError: Story = {
  args: {
    variant: 'outline',
    label: 'Primary Color',
    error: 'Please select a valid brand color',
    value: '#ef4444',
  },
};
