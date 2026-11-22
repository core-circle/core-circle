import type { Meta, StoryObj } from '@storybook/react';
import { Gauge } from '../../../components/atoms/gauge/gauge';

const meta: Meta<typeof Gauge> = {
  title: 'Atoms/Gauge',
  component: Gauge,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    size: { control: 'number' },
    strokeWidth: { control: 'number' },
    variant: { control: 'radio', options: ['default', 'card', 'bordered'] },
  },
};

export default meta;
type Story = StoryObj<typeof Gauge>;

export const Default: Story = {
  args: {
    value: 68,
    label: 'CPU LOAD',
    unit: '%',
    variant: 'card',
    helperText: 'Optimal load across 16 worker threads',
  },
};

export const HighValueAlert: Story = {
  args: {
    value: 92,
    label: 'STORAGE',
    unit: '%',
    variant: 'card',
    helperText: 'Volume approaching maximum capacity threshold',
  },
};

export const CustomBandwidthSpeed: Story = {
  args: {
    value: 840,
    min: 0,
    max: 1000,
    label: 'BANDWIDTH',
    unit: 'Mbps',
    color: '#2563eb',
    variant: 'bordered',
  },
};
