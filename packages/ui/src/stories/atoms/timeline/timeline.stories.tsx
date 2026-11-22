import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from '../../../components/atoms/timeline/timeline';
import { Badge } from '../../../components/atoms/badge/badge';

const meta: Meta<typeof Timeline> = {
  title: 'Atoms/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

const sampleMilestones = [
  {
    id: 'm1',
    title: 'Order Received & Verified',
    description: 'Payment authorized via Stripe checkout.',
    timestamp: 'Today at 09:42 AM',
    status: 'completed' as const,
  },
  {
    id: 'm2',
    title: 'Dispatched to Fulfillment Center',
    description: 'Package scanned and assigned tracking ID #TRK-9824.',
    timestamp: 'Today at 11:15 AM',
    status: 'completed' as const,
  },
  {
    id: 'm3',
    title: 'Out for Local Delivery',
    description: 'Courier is in transit to destination address.',
    timestamp: 'Today at 02:30 PM',
    status: 'current' as const,
    badge: <Badge size="sm" variant="gradient">IN TRANSIT</Badge>,
  },
  {
    id: 'm4',
    title: 'Delivered to Recipient',
    description: 'Estimated delivery window by 05:00 PM.',
    timestamp: 'Pending',
    status: 'upcoming' as const,
  },
];

export const VerticalMilestones: Story = {
  args: {
    items: sampleMilestones,
    orientation: 'vertical',
    variant: 'solid',
    size: 'md',
    className: 'max-w-md',
  },
};

export const HorizontalWorkflow: Story = {
  args: {
    items: sampleMilestones,
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    className: 'max-w-2xl',
  },
};
