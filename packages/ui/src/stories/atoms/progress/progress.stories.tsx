import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../../../components/atoms/progress/progress';

const meta: Meta<typeof Progress> = {
  title: 'Atoms/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'info',
        'gradient',
        'glassmorphic',
        'striped',
        'glow',
        'floating',
        'ghost',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      control: 'select',
      options: ['pill', 'rounded', 'square'],
    },
    labelPosition: {
      control: 'select',
      options: ['inside', 'outside-end', 'outside-top'],
    },
    striped: {
      control: 'boolean',
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

export const Gradient: Story = {
  args: {
    value: 75,
    variant: 'gradient',
  },
};

export const Glassmorphic: Story = {
  args: {
    value: 85,
    variant: 'glassmorphic',
  },
};

export const StripedAnimated: Story = {
  args: {
    value: 65,
    variant: 'striped',
    striped: true,
  },
};

export const GlowNeon: Story = {
  args: {
    value: 90,
    variant: 'glow',
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

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <Progress {...args} variant="primary" value={95} showLabel label="Primary (95%)" />
      <Progress {...args} variant="secondary" value={85} showLabel label="Secondary (85%)" />
      <Progress {...args} variant="success" value={75} showLabel label="Success (75%)" />
      <Progress {...args} variant="warning" value={65} showLabel label="Warning (65%)" />
      <Progress {...args} variant="danger" value={55} showLabel label="Danger (55%)" />
      <Progress {...args} variant="info" value={70} showLabel label="Info (70%)" />
      <Progress {...args} variant="gradient" value={80} showLabel label="Gradient (80%)" />
      <Progress {...args} variant="glassmorphic" value={90} showLabel label="Glassmorphic (90%)" />
      <Progress {...args} variant="striped" striped value={60} showLabel label="Striped (60%)" />
      <Progress {...args} variant="glow" value={88} showLabel label="Glow (88%)" />
      <Progress {...args} variant="floating" value={72} showLabel label="Floating (72%)" />
      <Progress {...args} variant="ghost" value={50} showLabel label="Ghost (50%)" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <Progress {...args} size="sm" value={30} showLabel />
      <Progress {...args} size="md" value={50} showLabel />
      <Progress {...args} size="lg" value={70} showLabel />
    </div>
  ),
};

export const Shapes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <Progress {...args} shape="pill" value={60} showLabel label="Pill Shape" />
      <Progress {...args} shape="rounded" value={60} showLabel label="Rounded Shape" />
      <Progress {...args} shape="square" value={60} showLabel label="Square Shape" />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    variant: 'primary',
  },
};
