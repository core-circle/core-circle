import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stat } from '../../../components/atoms/stat/stat';
import { TrendBadge } from '../../../components/atoms/trend-badge/trend-badge';
import { BadgeDollarSign, Activity } from '@core-circle/icons';

const meta: Meta<typeof Stat> = {
  title: 'Atoms/Stat',
  component: Stat,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Stat>;

export const Default: Story = {
  args: {
    label: 'Total Annual Recurring Revenue',
    value: '$1,248,500',
    description: '+18.4% compared to previous quarter',
    trend: <TrendBadge value="+18.4%" trend="up" variant="pill" size="sm" />,
    icon: <BadgeDollarSign size={18} />,
    variant: 'card',
    size: 'md',
    className: 'w-80',
  },
};

export const SystemHealth: Story = {
  args: {
    label: 'API Request Throughput',
    value: '48.2k req/s',
    description: 'Average response latency 14ms',
    trend: <TrendBadge value="+4.8%" trend="up" variant="soft" size="xs" />,
    icon: <Activity size={18} />,
    variant: 'gradient',
    size: 'md',
    className: 'w-80',
  },
};
