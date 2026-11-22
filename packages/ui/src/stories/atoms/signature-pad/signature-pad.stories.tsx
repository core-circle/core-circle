import type { Meta, StoryObj } from '@storybook/react';
import { SignaturePad } from '../../../components/atoms/signature-pad/signature-pad';

const meta: Meta<typeof SignaturePad> = {
  title: 'Atoms/SignaturePad',
  component: SignaturePad,
  tags: ['autodocs'],
  argTypes: {
    strokeWidth: { control: 'number' },
    strokeColor: { control: 'color' },
    height: { control: 'number' },
    showControls: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof SignaturePad>;

export const Default: Story = {
  args: {
    label: 'Authorized Signature',
    helperText: 'Sign within the rectangular boundary',
  },
};

export const CustomColorAndStroke: Story = {
  args: {
    label: 'Contract Agreement Signature',
    strokeColor: '#2563eb',
    strokeWidth: 3.5,
    height: 200,
  },
};

export const BorderedVariant: Story = {
  args: {
    label: 'Legal Document Signoff',
    variant: 'bordered',
    height: 160,
  },
};

export const DisabledState: Story = {
  args: {
    label: 'Locked Signature Field',
    disabled: true,
    helperText: 'Document finalized and sealed',
  },
};
