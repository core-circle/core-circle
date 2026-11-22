import type { Meta, StoryObj } from '@storybook/react';
import { PhoneInput } from '../../../components/atoms/phone-input/phone-input';

const meta: Meta<typeof PhoneInput> = {
  title: 'Atoms/PhoneInput',
  component: PhoneInput,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'material'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    defaultCountry: { control: 'text' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  args: {
    label: 'Phone Number',
    defaultCountry: 'US',
  },
};

export const PreselectedCountry: Story = {
  args: {
    label: 'Contact Number',
    defaultCountry: 'GB',
    helperText: 'Includes international dialing code',
  },
};

export const FilledVariant: Story = {
  args: {
    label: 'Mobile Phone',
    variant: 'filled',
    defaultCountry: 'IN',
  },
};

export const MaterialVariant: Story = {
  args: {
    label: 'Direct Line',
    variant: 'material',
    defaultCountry: 'DE',
  },
};

export const WithError: Story = {
  args: {
    label: 'Emergency Contact',
    defaultCountry: 'US',
    error: 'Please enter a valid 10-digit telephone number',
    defaultValue: '123',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <PhoneInput size="sm" label="Small (sm)" defaultCountry="US" />
      <PhoneInput size="md" label="Medium (md)" defaultCountry="US" />
      <PhoneInput size="lg" label="Large (lg)" defaultCountry="US" />
    </div>
  ),
};
