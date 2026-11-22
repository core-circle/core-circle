import type { Meta, StoryObj } from '@storybook/react';
import { Sparkline } from '../../../components/atoms/sparkline/sparkline';

const meta: Meta<typeof Sparkline> = {
  title: 'Atoms/Sparkline',
  component: Sparkline,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Sparkline>;

const sampleData = [12, 18, 14, 25, 22, 38, 30, 42, 36, 52];

export const LineSmooth: Story = {
  args: {
    data: sampleData,
    type: 'line',
    color: 'primary',
    width: 140,
    height: 40,
    curve: 'smooth',
  },
};

export const AreaGradient: Story = {
  args: {
    data: sampleData,
    type: 'area',
    color: 'success',
    width: 140,
    height: 40,
    gradient: true,
  },
};

export const BarChart: Story = {
  args: {
    data: [10, 24, 18, 32, 28, 45, 36, 50, 42, 60],
    type: 'bar',
    color: 'warning',
    width: 140,
    height: 40,
  },
};

export const DangerDrop: Story = {
  args: {
    data: [50, 45, 38, 32, 28, 20, 15, 12],
    type: 'area',
    color: 'danger',
    width: 140,
    height: 40,
  },
};
