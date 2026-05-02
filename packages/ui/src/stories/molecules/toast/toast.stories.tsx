import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../../../components/molecules/toast/toast';
import { Button } from '../../../components/atoms/button/button';

const meta: Meta<typeof Toast> = {
  title: 'Molecules/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    id: '1',
    title: 'Notification Title',
    description: 'This is a description for the notification.',
    variant: 'default',
  },
};

export const Success: Story = {
  args: {
    id: '2',
    title: 'Success!',
    description: 'Your changes have been saved successfully.',
    variant: 'success',
  },
};

export const Error: Story = {
  args: {
    id: '3',
    title: 'Error Occurred',
    description: 'Something went wrong. Please try again.',
    variant: 'error',
  },
};

export const WithAction: Story = {
  args: {
    id: '4',
    title: 'Update Available',
    description: 'A new version of the app is available.',
    variant: 'info',
    action: <Button size="sm" variant="outline">Update</Button>,
  },
};
