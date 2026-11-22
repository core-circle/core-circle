import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from '../../../components/atoms/password-input/password-input';

const meta: Meta<typeof PasswordInput> = {
  title: 'Atoms/PasswordInput',
  component: PasswordInput,
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
    showStrength: { control: 'boolean' },
    capsLockWarning: { control: 'boolean' },
    showToggle: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter secure password',
  },
};

export const WithStrengthMeter: Story = {
  args: {
    label: 'New Password',
    placeholder: 'Create a password',
    showStrength: true,
    helperText: 'Must contain 8+ characters, digits and symbols',
  },
};

export const FilledVariant: Story = {
  args: {
    label: 'Filled Variant',
    variant: 'filled',
    placeholder: 'Filled input style',
    showStrength: true,
  },
};

export const MaterialVariant: Story = {
  args: {
    label: 'Material Underline',
    variant: 'material',
    placeholder: 'Underlined password',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    defaultValue: 'weak',
    error: 'Password does not meet enterprise complexity requirements',
    showStrength: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <PasswordInput size="sm" label="Small (sm)" placeholder="Small size" />
      <PasswordInput size="md" label="Medium (md)" placeholder="Medium size" />
      <PasswordInput size="lg" label="Large (lg)" placeholder="Large size" />
    </div>
  ),
};
