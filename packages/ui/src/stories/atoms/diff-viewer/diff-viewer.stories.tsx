import type { Meta, StoryObj } from '@storybook/react';
import { DiffViewer } from '../../../components/atoms/diff-viewer/diff-viewer';

const beforeCode = `function calculateTotal(price: number, quantity: number): number {
  const subtotal = price * quantity;
  return subtotal;
}`;

const afterCode = `function calculateTotal(price: number, quantity: number, taxRate = 0.08): number {
  const subtotal = price * quantity;
  const tax = subtotal * taxRate;
  return subtotal + tax;
}`;

const meta: Meta<typeof DiffViewer> = {
  title: 'Atoms/DiffViewer',
  component: DiffViewer,
  tags: ['autodocs'],
  argTypes: {
    splitView: { control: 'boolean' },
    showLineNumbers: { control: 'boolean' },
    variant: { control: 'radio', options: ['default', 'card', 'bordered'] },
  },
};

export default meta;
type Story = StoryObj<typeof DiffViewer>;

export const SideBySideSplit: Story = {
  args: {
    oldCode: beforeCode,
    newCode: afterCode,
    filename: 'pricing.service.ts',
    splitView: true,
    language: 'typescript',
    variant: 'default',
  },
};

export const UnifiedView: Story = {
  args: {
    oldCode: beforeCode,
    newCode: afterCode,
    filename: 'pricing.service.ts',
    splitView: false,
    language: 'typescript',
    variant: 'card',
  },
};
