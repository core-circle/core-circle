import type { Meta, StoryObj } from '@storybook/react';
import { ColorSwatch } from '../../../components/atoms/color-swatch/color-swatch';

const meta: Meta<typeof ColorSwatch> = {
  title: 'Atoms/ColorSwatch',
  component: ColorSwatch,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'select',
      options: ['circle', 'rounded', 'square'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ColorSwatch>;

const brandColors = [
  { label: 'Slate Dark', value: '#1e293b' },
  { label: 'Core Blue', value: '#2563eb' },
  { label: 'Emerald Green', value: '#10b981' },
  { label: 'Amber Orange', value: '#f59e0b' },
  { label: 'Rose Red', value: '#f43f5e' },
  { label: 'Violet Purple', value: '#8b5cf6' },
  { label: 'Clean White', value: '#ffffff' },
];

export const Default: Story = {
  args: {
    label: 'Brand Theme Color',
    colors: brandColors,
    defaultValue: '#2563eb',
  },
};

export const RoundedTiles: Story = {
  args: {
    label: 'Product Variant Finish',
    shape: 'rounded',
    colors: brandColors,
    defaultValue: '#10b981',
  },
};

export const SquarePalette: Story = {
  args: {
    label: 'Grid Swatch (4 cols)',
    shape: 'square',
    columns: 4,
    colors: brandColors,
    defaultValue: '#f43f5e',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ColorSwatch size="sm" label="Small (sm)" colors={brandColors} defaultValue="#2563eb" />
      <ColorSwatch size="md" label="Medium (md)" colors={brandColors} defaultValue="#2563eb" />
      <ColorSwatch size="lg" label="Large (lg)" colors={brandColors} defaultValue="#2563eb" />
    </div>
  ),
};
