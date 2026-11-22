import type { Meta, StoryObj } from '@storybook/react';
import { Command } from '../../../components/atoms/command/command';
import { File, SearchIcon, SquareEdit, Rotate } from '@core-circle/icons';

const demoGroups = [
  {
    id: 'suggested',
    heading: 'Suggested Actions',
    items: [
      { id: 'new-file', label: 'Create New File', icon: <File size={16} />, shortcut: '⌘N' },
      { id: 'search-docs', label: 'Search Monorepo Docs', icon: <SearchIcon size={16} />, shortcut: '⌘F' },
      { id: 'quick-edit', label: 'Edit Current Workspace', icon: <SquareEdit size={16} /> },
    ],
  },
  {
    id: 'settings',
    heading: 'System & Tools',
    items: [
      { id: 'sync-repos', label: 'Sync Remote Repositories', icon: <Rotate size={16} />, shortcut: '⌘R' },
      { id: 'disabled-action', label: 'Restricted Security Admin', disabled: true },
    ],
  },
];

const meta: Meta<typeof Command> = {
  title: 'Atoms/Command',
  component: Command,
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'radio', options: ['inline', 'modal'] },
    variant: { control: 'radio', options: ['default', 'bordered', 'minimal'] },
  },
};

export default meta;
type Story = StoryObj<typeof Command>;

export const DefaultInline: Story = {
  args: {
    groups: demoGroups,
    mode: 'inline',
    variant: 'default',
    placeholder: 'Type a command or search...',
  },
};

export const HighContrastBordered: Story = {
  args: {
    groups: demoGroups,
    mode: 'inline',
    variant: 'bordered',
    shortcutHint: 'Ctrl+K',
  },
};
