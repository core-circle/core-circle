import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from '../../../components/atoms/number-input/number-input';

const meta: Meta<typeof NumberInput> = {
  title: 'Atoms/NumberInput',
  component: NumberInput,
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
    stepper: {
      control: 'select',
      options: ['stacked', 'split', 'none'],
    },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    precision: { control: 'number' },
    formatThousands: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: {
    label: 'Quantity',
    defaultValue: 1,
    min: 1,
    max: 99,
    step: 1,
  },
};

export const CurrencyWithPrefix: Story = {
  args: {
    label: 'Invoice Amount',
    prefix: '$',
    defaultValue: 2450.5,
    precision: 2,
    formatThousands: true,
    step: 10,
    helperText: 'USD currency with decimal formatting',
  },
};

export const PercentSuffix: Story = {
  args: {
    label: 'Commission Rate',
    suffix: '%',
    defaultValue: 15,
    min: 0,
    max: 100,
    step: 0.5,
    precision: 1,
  },
};

export const SplitStepper: Story = {
  args: {
    label: 'Guest Count',
    stepper: 'split',
    defaultValue: 2,
    min: 1,
    max: 12,
  },
};

export const FilledVariant: Story = {
  args: {
    label: 'Target Budget',
    prefix: '€',
    variant: 'filled',
    defaultValue: 50000,
    formatThousands: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <NumberInput size="sm" label="Small (sm)" defaultValue={10} />
      <NumberInput size="md" label="Medium (md)" defaultValue={25} />
      <NumberInput size="lg" label="Large (lg)" defaultValue={50} />
    </div>
  ),
};
