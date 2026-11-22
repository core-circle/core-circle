import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl } from '../../../components/atoms/segmented-control/segmented-control';
import { Grid, List, Calendar } from '@core-circle/icons';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Atoms/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pills', 'soft', 'bordered'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

const demoOptions = [
  { label: 'Grid View', value: 'grid', icon: <Grid size={14} /> },
  { label: 'List View', value: 'list', icon: <List size={14} /> },
  { label: 'Calendar', value: 'calendar', icon: <Calendar size={14} /> },
];

export const Default: Story = {
  args: {
    label: 'Layout Orientation',
    options: demoOptions,
    defaultValue: 'grid',
  },
};

export const PillsVariant: Story = {
  args: {
    label: 'Billing Cycle',
    variant: 'pills',
    options: [
      { label: 'Monthly', value: 'monthly' },
      { label: 'Quarterly', value: 'quarterly' },
      { label: 'Annual (Save 20%)', value: 'annual' },
    ],
    defaultValue: 'annual',
  },
};

export const SoftVariant: Story = {
  args: {
    label: 'Notification Cadence',
    variant: 'soft',
    options: [
      { label: 'Instant', value: 'instant' },
      { label: 'Daily Digest', value: 'daily' },
      { label: 'Weekly', value: 'weekly' },
    ],
    defaultValue: 'daily',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Device Filter',
    fullWidth: true,
    options: [
      { label: 'All Devices', value: 'all' },
      { label: 'Desktop', value: 'desktop' },
      { label: 'Mobile', value: 'mobile' },
    ],
    defaultValue: 'all',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <SegmentedControl size="sm" options={demoOptions} defaultValue="grid" />
      <SegmentedControl size="md" options={demoOptions} defaultValue="grid" />
      <SegmentedControl size="lg" options={demoOptions} defaultValue="grid" />
    </div>
  ),
};
