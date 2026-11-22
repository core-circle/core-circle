import type { Meta, StoryObj } from '@storybook/react';
import { Countdown } from '../../../components/atoms/countdown/countdown';

const targetFuture = new Date(Date.now() + 1000 * 60 * 60 * 48 + 1000 * 60 * 35); // 48h 35m in future

const meta: Meta<typeof Countdown> = {
  title: 'Atoms/Countdown',
  component: Countdown,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['boxes', 'cards', 'minimal'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    showDays: { control: 'boolean' },
    showLabels: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Countdown>;

export const DefaultBoxes: Story = {
  args: {
    targetDate: targetFuture,
    variant: 'boxes',
    size: 'md',
    showDays: true,
    showLabels: true,
  },
};

export const LargeCardDisplay: Story = {
  args: {
    targetDate: targetFuture,
    variant: 'cards',
    size: 'lg',
    showDays: true,
    showLabels: true,
  },
};

export const MinimalText: Story = {
  args: {
    targetDate: targetFuture,
    variant: 'minimal',
    size: 'sm',
  },
};
