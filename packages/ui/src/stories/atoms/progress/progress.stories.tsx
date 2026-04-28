import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../../../components/atoms/progress/progress';

const meta: Meta<typeof Progress> = {
  title: 'Atoms/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    labelPosition: {
      control: 'select',
      options: ['inside', 'outside-end', 'outside-top'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Primary: Story = {
  args: {
    value: 60,
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    value: 80,
    variant: 'success',
  },
};

export const WithLabel: Story = {
  args: {
    value: 45,
    showLabel: true,
    labelPosition: 'outside-end',
  },
};

export const InsideLabel: Story = {
  args: {
    value: 75,
    size: 'lg',
    showLabel: true,
    labelPosition: 'inside',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <Progress {...args} size="sm" value={30} />
      <Progress {...args} size="md" value={50} />
      <Progress {...args} size="lg" value={70} />
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <Progress {...args} variant="primary" value={90} />
      <Progress {...args} variant="secondary" value={80} />
      <Progress {...args} variant="success" value={70} />
      <Progress {...args} variant="warning" value={60} />
      <Progress {...args} variant="danger" value={50} />
      <Progress {...args} variant="ghost" value={40} />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    variant: 'primary',
  },
};
