import type { Meta, StoryObj } from '@storybook/react';
import { TrendBadge } from '../../../components/atoms/trend-badge/trend-badge';

const meta: Meta<typeof TrendBadge> = {
  title: 'Atoms/TrendBadge',
  component: TrendBadge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TrendBadge>;

export const PositiveGrowth: Story = {
  args: {
    value: '+14.8%',
    trend: 'up',
    variant: 'soft',
    size: 'sm',
  },
};

export const NegativeDrop: Story = {
  args: {
    value: '-4.2%',
    trend: 'down',
    variant: 'soft',
    size: 'sm',
  },
};

export const NeutralStatic: Story = {
  args: {
    value: '0.0%',
    trend: 'neutral',
    variant: 'soft',
    size: 'sm',
  },
};

export const InvertedCostSavings: Story = {
  args: {
    value: '-28.4% AWS Bill',
    trend: 'down',
    invertColors: true,
    variant: 'pill',
    size: 'md',
  },
};
