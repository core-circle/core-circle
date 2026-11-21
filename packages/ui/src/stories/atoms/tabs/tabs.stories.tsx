import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../../../components/atoms/tabs/tabs';
import { Button } from '../../../components/atoms/button/button';
import { TextInput } from '../../../components/atoms/text-input/text-input';
import { UserIcon, SettingsIcon, Bell } from '@core-circle/icons';

const meta: Meta<typeof Tabs> = {
  title: 'Atoms/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'pills', 'enclosed', 'cards', 'glassmorphic', 'gradient', 'glow', 'segmented', 'bordered', 'dark'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const defaultItems = [
  {
    id: 'tab-1',
    label: 'Profile',
    content: <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100 mt-2">Manage your public profile here.</div>,
  },
  {
    id: 'tab-2',
    label: 'Security',
    content: <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100 mt-2">Update your password and 2FA settings.</div>,
  },
  {
    id: 'tab-3',
    label: 'Notifications',
    content: <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100 mt-2">Configure how you receive alerts.</div>,
  },
];

export const Underline: Story = {
  args: {
    variant: 'underline',
    items: defaultItems,
    fullWidth: false,
  },
};

export const Pills: Story = {
  args: {
    variant: 'pills',
    items: defaultItems,
    fullWidth: false,
  },
};

export const Enclosed: Story = {
  args: {
    variant: 'enclosed',
    items: defaultItems,
    fullWidth: false,
  },
};

export const WithIcons: Story = {
  args: {
    variant: 'underline',
    fullWidth: false,
    items: [
      {
        id: 'tab-1',
        label: 'Profile',
        icon: <UserIcon size={16} />,
        content: <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100 mt-2">Profile Content</div>,
      },
      {
        id: 'tab-2',
        label: 'Security',
        icon: <SettingsIcon size={16} />,
        content: <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100 mt-2">Security Content</div>,
      },
      {
        id: 'tab-3',
        label: 'Alerts',
        icon: <Bell size={16} />,
        content: <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100 mt-2">Alerts Content</div>,
      },
    ],
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'pills',
    items: defaultItems,
    fullWidth: true,
  },
};

export const WithDisabledTab: Story = {
  args: {
    variant: 'underline',
    items: [
      ...defaultItems.slice(0, 2),
      {
        ...defaultItems[2],
        disabled: true,
      },
    ],
  },
};

// A dynamic tabs example component to demonstrate adding/removing
const DynamicTabsDemo = () => {
  const [tabs, setTabs] = useState([
    {
      id: 'tab-1',
      label: 'Initial Tab',
      content: <div className="p-4 bg-slate-50 border rounded mt-2 text-sm text-slate-600">This is the initial tab content.</div>,
    }
  ]);
  const [tabTitle, setTabTitle] = useState('');

  const addTab = () => {
    if (!tabTitle.trim()) return;
    const newId = `tab-${Date.now()}`;
    setTabs([
      ...tabs,
      {
        id: newId,
        label: tabTitle,
        content: <div className="p-4 bg-slate-50 border rounded mt-2 text-sm text-slate-600">Content for {tabTitle}</div>,
      }
    ]);
    setTabTitle('');
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 items-end">
        <TextInput 
          label="New Tab Title" 
          value={tabTitle} 
          onChange={(e) => setTabTitle(e.target.value)} 
          placeholder="Enter tab title" 
        />
        <Button onClick={addTab} disabled={!tabTitle.trim()}>Add Tab</Button>
      </div>
      <Tabs items={tabs} variant="pills" />
    </div>
  );
};

export const DynamicTabs: Story = {
  render: () => <DynamicTabsDemo />
};
