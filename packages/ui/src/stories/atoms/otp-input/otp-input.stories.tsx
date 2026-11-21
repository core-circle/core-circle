import type { Meta, StoryObj } from '@storybook/react';
import { OtpInput } from '../../../components/atoms/otp-input/otp-input';

const meta: Meta<typeof OtpInput> = {
  title: 'Atoms/OtpInput',
  component: OtpInput,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'material', 'ghost', 'standard'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    length: {
      control: { type: 'number', min: 1, max: 10 },
    },
    disabled: {
      control: 'boolean',
    },
    mask: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof OtpInput>;

export const Outline: Story = {
  args: {
    variant: 'outline',
    length: 4,
  },
};

export const SixDigits: Story = {
  args: {
    variant: 'outline',
    length: 6,
  },
};

export const Material: Story = {
  args: {
    variant: 'material',
    length: 4,
  },
};

export const Large: Story = {
  args: {
    variant: 'outline',
    length: 4,
    size: 'lg',
  },
};

export const WithError: Story = {
  args: {
    variant: 'outline',
    length: 4,
    error: 'Invalid verification code',
  },
};

export const Masked: Story = {
  args: {
    variant: 'outline',
    length: 6,
    mask: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'outline',
    length: 4,
    disabled: true,
  },
};
