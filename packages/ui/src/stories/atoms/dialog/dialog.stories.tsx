import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './dialog';
import { Button } from '../button/button';
import { Typography } from '../typography/typography';
import React from 'react';

const meta: Meta<typeof Dialog> = {
  title: 'Atoms/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    trigger: <Button variant="primary">Open Dialog</Button>,
    title: 'Edit Profile',
    children: (
      <div className="space-y-4">
        <Typography variant="p">
          Make changes to your profile here. Click save when you're done.
        </Typography>
        <div className="grid grid-cols-4 items-center gap-4">
          <label className="text-right text-sm font-medium">Name</label>
          <input className="col-span-3 border rounded px-3 py-2 text-sm" defaultValue="John Wick" />
        </div>
      </div>
    ),
    footer: (
      <>
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Save Changes</Button>
      </>
    ),
  },
};

export const LargeDialog: Story = {
  args: {
    trigger: <Button variant="secondary">Terms of Service</Button>,
    title: 'Terms of Service',
    size: 'lg',
    children: (
      <div className="max-h-[300px] overflow-y-auto space-y-4 pr-2">
        <Typography variant="h3">1. Introduction</Typography>
        <Typography variant="p">
          Welcome to Core Circle. These Terms of Service govern your use of our website and services.
        </Typography>
        <Typography variant="h3">2. User Accounts</Typography>
        <Typography variant="p">
          You are responsible for maintaining the confidentiality of your account password.
        </Typography>
        <Typography variant="p">
          More legal text here... lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Typography variant="p">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </div>
    ),
    footer: (
      <Button variant="primary">I Accept</Button>
    ),
  },
};
