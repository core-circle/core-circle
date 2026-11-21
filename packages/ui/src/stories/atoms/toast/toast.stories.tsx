import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../../../components/atoms/toast/toast';
import { Info, CircleCheck, Alert as AlertIcon, CircleX } from '@core-circle/icons';
import React from 'react';

const meta: Meta<typeof Toast> = {
  title: 'Atoms/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'success',
        'warning',
        'destructive',
        'error',
        'info',
        'card',
        'glassmorphic',
        'gradient',
        'floating',
        'pill',
        'minimal',
        'glow',
        'accent',
        'dark',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    variant: 'default',
    title: 'Notification',
    description: 'You have a new message from the system.',
    icon: <Info size={18} />,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Action Successful',
    description: 'The operation completed without any issues.',
    icon: <CircleCheck size={18} />,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Storage Almost Full',
    description: 'Your account is at 90% capacity.',
    icon: <AlertIcon size={18} />,
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    title: 'Error Occurred',
    description: 'There was an error while saving your profile.',
    icon: <CircleX size={18} />,
  },
};

export const WithAction: Story = {
  args: {
    variant: 'default',
    title: 'Undo Changes',
    description: 'The item was moved to the trash.',
    action: <button className="text-xs font-bold underline">Undo</button>,
  },
};
