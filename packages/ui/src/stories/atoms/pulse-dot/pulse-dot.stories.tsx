import type { Meta, StoryObj } from '@storybook/react';
import { PulseDot } from '../../../components/atoms/pulse-dot/pulse-dot';

const meta: Meta<typeof PulseDot> = {
  title: 'Atoms/PulseDot',
  component: PulseDot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof PulseDot>;

export const OperationalOnline: Story = {
  args: {
    status: 'online',
    size: 'sm',
    ping: true,
    label: 'All Systems Operational',
  },
};

export const DeployingPipeline: Story = {
  args: {
    status: 'deploying',
    size: 'sm',
    ping: true,
    label: 'Deploying Commit #8a9c2',
  },
};

export const BusyIncident: Story = {
  args: {
    status: 'busy',
    size: 'md',
    ping: true,
    label: 'Active High-Severity Incident',
  },
};

export const OfflineInactive: Story = {
  args: {
    status: 'offline',
    size: 'sm',
    ping: false,
    label: 'Offline / Disconnected',
  },
};
