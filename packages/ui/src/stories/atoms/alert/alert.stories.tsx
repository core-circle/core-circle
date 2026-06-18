import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './alert';
import { Info, CircleCheck, Alert as AlertIcon, CircleX, Terminal } from '@core-circle/icons';
import React from 'react';

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'destructive', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const InfoAlert: Story = {
  args: {
    variant: 'info',
    title: 'Heads up!',
    children: 'You can add components to your app using the cli.',
    icon: <Info size={16} />,
  },
};

export const SuccessAlert: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    children: 'Your payment was processed successfully.',
    icon: <CircleCheck size={16} />,
  },
};

export const WarningAlert: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Your account is reaching its limit. Please upgrade soon.',
    icon: <AlertIcon size={16} />,
  },
};

export const DestructiveAlert: Story = {
  args: {
    variant: 'destructive',
    title: 'Error',
    children: 'There was a problem with your request. Please try again.',
    icon: <CircleX size={16} />,
  },
};

export const OutlineAlert: Story = {
  args: {
    variant: 'outline',
    title: 'Custom Note',
    children: 'This is an outline style alert for subtle information.',
    icon: <Terminal size={16} />,
  },
};

export const WithCloseButton: Story = {
  args: {
    variant: 'info',
    title: 'Dismissible',
    children: 'You can dismiss this alert by clicking the close button.',
    onClose: () => alert('Alert closed'),
  },
};
