import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from '../../../components/atoms/callout/callout';
import { Button } from '../../../components/atoms/button/button';

const meta: Meta<typeof Callout> = {
  title: 'Atoms/Callout',
  component: Callout,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const InfoNotice: Story = {
  args: {
    title: 'Workspace Configuration Updated',
    children: 'Changes to tenant SSO mappings will propagate across all clusters in 5 minutes.',
    variant: 'info',
    size: 'md',
    dismissible: true,
  },
};

export const WarningAction: Story = {
  args: {
    title: 'Database Backup Approaching Limit',
    children: 'Storage is currently at 88% capacity. Consider archiving older project revisions.',
    variant: 'warning',
    size: 'md',
    action: (
      <Button variant="outline" size="sm">
        Review Backups
      </Button>
    ),
  },
};

export const SuccessCelebration: Story = {
  args: {
    title: 'Deployment Successful',
    children: 'Version 2.4.0 is now live on the global CDN edge network.',
    variant: 'success',
    size: 'md',
    dismissible: true,
  },
};

export const DangerError: Story = {
  args: {
    title: 'Failed to Authenticate Token',
    children: 'Your personal access token has expired. Please regenerate a new API key.',
    variant: 'danger',
    size: 'md',
  },
};
