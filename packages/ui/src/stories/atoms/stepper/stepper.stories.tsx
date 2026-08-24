import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '../../../components/atoms/stepper/stepper';

const steps = [
  { title: 'Personal Info', description: 'Enter your name and email' },
  { title: 'Verification', description: 'Verify your phone number' },
  { title: 'Payment', description: 'Add your payment method' },
  { title: 'Success', description: 'Your account is ready' },
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
      options: ['numbers', 'circles', 'dots'],
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
  },
};

export const Vertical: Story = {
  args: {
    steps,
    activeStep: 2,
    orientation: 'vertical',
  },
};

export const Circles: Story = {
  args: {
    steps,
    activeStep: 1,
    variant: 'circles',
  },
};

export const WithError: Story = {
  args: {
    steps: [
      { title: 'Step 1', status: 'completed' },
      { title: 'Step 2', status: 'error', description: 'Invalid information provided' },
      { title: 'Step 3', status: 'pending' },
    ],
    activeStep: 1,
  },
};
