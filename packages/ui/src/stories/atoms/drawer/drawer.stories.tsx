import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from '../../../components/atoms/drawer/drawer';
import { Button } from '../../../components/atoms/button/button';
import React, { useState } from 'react';

const meta: Meta<typeof Drawer> = {
  title: 'Atoms/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'subtle',
        'bordered',
        'glassmorphic',
        'gradient',
        'glow',
        'dark',
        'sidebar',
        'accent',
        'minimal',
      ],
    },
    position: {
      control: 'select',
      options: ['right', 'left', 'top', 'bottom'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const DrawerDefaultStory = (args: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer
        {...args}
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Account Settings"
        description="Manage your enterprise profile preferences"
        footer={
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>Save Changes</Button>
          </div>
        }
      >
        <div className="space-y-4 text-sm text-slate-600">
          <p>Configure notifications, security credentials, and organization team memberships.</p>
        </div>
      </Drawer>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <DrawerDefaultStory {...args} />,
  args: {
    variant: 'default',
    position: 'right',
    size: 'md',
  },
};
