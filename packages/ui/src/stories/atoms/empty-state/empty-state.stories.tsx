import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from '../../../components/atoms/empty-state/empty-state';
import { Button } from '../../../components/atoms/button/button';
import { Folder, SearchIcon, Plus } from '@core-circle/icons';

const meta: Meta<typeof EmptyState> = {
  title: 'Atoms/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const DefaultDashed: Story = {
  args: {
    icon: <Folder size={32} />,
    title: 'No documents found',
    description: 'Get started by creating your first document or invite your team to collaborate.',
    action: (
      <Button variant="primary" size="sm" startIcon={<Plus size={14} />}>
        New Document
      </Button>
    ),
    secondaryAction: (
      <Button variant="outline" size="sm">
        Import Files
      </Button>
    ),
    variant: 'dashed',
    size: 'md',
  },
};

export const SearchNoResults: Story = {
  args: {
    icon: <SearchIcon size={32} />,
    title: 'No search results match',
    description: 'Try adjusting your search query, clearing active filters, or checking for typos.',
    action: (
      <Button variant="outline" size="sm">
        Clear All Filters
      </Button>
    ),
    variant: 'card',
    size: 'md',
  },
};
