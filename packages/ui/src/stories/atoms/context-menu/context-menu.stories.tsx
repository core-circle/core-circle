import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu } from '../../../components/atoms/context-menu/context-menu';
import { Badge } from '../../../components/atoms/badge/badge';
import {
  SquareEdit,
  DocumentText,
  XIcon,
  Share,
  Download,
} from '@core-circle/icons';

const meta: Meta<typeof ContextMenu> = {
  title: 'Atoms/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

const sampleItems = [
  { id: 'edit', label: 'Edit File', icon: <SquareEdit size={16} />, shortcut: '⌘E' },
  { id: 'duplicate', label: 'Duplicate Asset', icon: <DocumentText size={16} />, badge: <Badge size="sm" variant="gradient">NEW</Badge> },
  { id: 'download', label: 'Download Package', icon: <Download size={16} />, shortcut: '⌘D' },
  { id: 'share', label: 'Share Link', icon: <Share size={16} />, divider: true },
  { id: 'delete', label: 'Delete Item', icon: <XIcon size={16} />, destructive: true, divider: true },
];

export const Default: Story = {
  args: {
    children: (
      <div className="flex flex-col items-center justify-center p-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl w-80 text-center select-none cursor-context-menu">
        <span className="text-sm font-bold text-slate-700">Right-Click Inside Here</span>
        <span className="text-xs text-slate-400 mt-1">To trigger the contextual menu</span>
      </div>
    ),
    items: sampleItems,
    variant: 'card',
    size: 'md',
  },
};

export const Dark: Story = {
  args: {
    children: (
      <div className="flex flex-col items-center justify-center p-12 bg-slate-900 border-2 border-dashed border-slate-700 rounded-2xl w-80 text-center select-none cursor-context-menu">
        <span className="text-sm font-bold text-white">Right-Click (Dark Mode)</span>
        <span className="text-xs text-slate-400 mt-1">Dark terminal theme context menu</span>
      </div>
    ),
    items: sampleItems,
    variant: 'dark',
    size: 'md',
  },
};
