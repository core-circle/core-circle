import type { Meta, StoryObj } from '@storybook/react';
import { Tour, Hotspot } from '../../../components/atoms/tour/tour';

const meta: Meta<typeof Tour> = {
  title: 'Atoms/Tour',
  component: Tour,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['card', 'elevated', 'glassmorphic'],
    },
    showSkip: { control: 'boolean' },
    open: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Tour>;

const sampleSteps = [
  {
    title: 'Welcome to CoreCircle',
    description: 'Explore design system components, interactive sandboxes, and tokens.',
    badge: 'Overview',
  },
  {
    title: 'Customizing Design Tokens',
    description: 'Switch hues across 22 color spectrums and export white-labeled CSS.',
    badge: 'Theming',
  },
  {
    title: 'Copy & Paste Primitives',
    description: 'Grab production-ready React code snippets with one click.',
    badge: 'Productivity',
  },
];

export const Default: Story = {
  args: {
    steps: sampleSteps,
    open: true,
  },
};

export const ElevatedVariant: Story = {
  args: {
    steps: sampleSteps,
    variant: 'elevated',
    open: true,
  },
};

export const StandaloneHotspot: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-6">
      <div className="relative p-4 bg-slate-100 rounded-xl border border-slate-200 flex items-center gap-3">
        <span>Analytics Dashboard</span>
        <Hotspot color="primary" />
      </div>
      <div className="relative p-4 bg-slate-100 rounded-xl border border-slate-200 flex items-center gap-3">
        <span>Live Deployments</span>
        <Hotspot color="emerald" />
      </div>
    </div>
  ),
};
