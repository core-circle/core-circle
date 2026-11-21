import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '../../../components/atoms/stepper/stepper';

const steps = [
  { title: 'Personal Info', description: 'Enter name and email' },
  { title: 'Verification', description: 'Identity verification' },
  { title: 'Payment', description: 'Credit card setup' },
  { title: 'Complete', description: 'Account ready' },
];

const meta: Meta<typeof Stepper> = {
  title: 'Atoms/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['numbers', 'dots', 'circles', 'pill', 'gradient', 'glow', 'glassmorphic', 'cards', 'timeline', 'dark'],
    },
    activeStep: {
      control: { type: 'number', min: 0, max: 3 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Horizontal: Story = {
  args: {
    steps,
    activeStep: 1,
    orientation: 'horizontal',
    variant: 'numbers',
  },
};

export const Gradient: Story = {
  args: {
    steps,
    activeStep: 2,
    variant: 'gradient',
  },
};

export const Glow: Story = {
  args: {
    steps,
    activeStep: 1,
    variant: 'glow',
  },
};

export const Cards: Story = {
  args: {
    steps,
    activeStep: 1,
    variant: 'cards',
  },
};

export const Dark: Story = {
  args: {
    steps,
    activeStep: 2,
    variant: 'dark',
  },
};

export const Vertical: Story = {
  args: {
    steps,
    activeStep: 2,
    orientation: 'vertical',
  },
};

