import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '../../../components/atoms/popover/popover';
import { Button } from '../../../components/atoms/button/button';
import { Typography } from '../../../components/atoms/typography/typography';
import { SettingsIcon } from '@core-circle/icons';
import React from 'react';

const meta: Meta<typeof Popover> = {
  title: 'Atoms/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: <Button variant="primary">Open Popover</Button>,
    children: (
      <div className="space-y-2">
        <Typography variant="h4">Popover Content</Typography>
        <Typography variant="p" className="text-sm">
          This is a premium popover component that can contain any content.
        </Typography>
        <Button size="sm" fullWidth>Action</Button>
      </div>
    ),
    position: 'bottom',
    align: 'center',
  },
};

export const CustomTrigger: Story = {
  args: {
    trigger: (
      <div className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
        <SettingsIcon size={20} />
      </div>
    ),
    children: (
      <div className="space-y-4">
        <Typography variant="h4">Settings</Typography>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 p-2 rounded">
            <input type="checkbox" className="rounded border-slate-300" />
            Notifications
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 p-2 rounded">
            <input type="checkbox" className="rounded border-slate-300" />
            Dark Mode
          </label>
        </div>
      </div>
    ),
    position: 'right',
    align: 'start',
  },
};
