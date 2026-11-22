import type { Meta, StoryObj } from '@storybook/react';
import { Watermark } from '../../../components/atoms/watermark/watermark';

const meta: Meta<typeof Watermark> = {
  title: 'Atoms/Watermark',
  component: Watermark,
  tags: ['autodocs'],
  argTypes: {
    rotate: { control: 'number' },
    opacity: { control: 'number' },
    fontSize: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Watermark>;

export const Default: Story = {
  render: () => (
    <Watermark content="INTERNAL ONLY" variant="card" className="p-8">
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-bold text-slate-900">Protected Audit Report</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          This document contains proprietary trade secret materials. Redistribution, copying,
          or transmission outside verified company VPN networks is strictly prohibited.
        </p>
      </div>
    </Watermark>
  ),
};

export const MultiLineWatermark: Story = {
  render: () => (
    <Watermark
      content={['CONFIDENTIAL', 'alex.morgan@corecircle.io']}
      variant="card"
      opacity={0.18}
      className="p-8"
    >
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-bold text-slate-900">Security Clearance Level 4</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Cryptographic private key credentials and enterprise authorization certificates.
        </p>
      </div>
    </Watermark>
  ),
};

export const CustomRotationAndDensity: Story = {
  render: () => (
    <Watermark
      content="DRAFT 2026"
      rotate={-35}
      gap={[60, 60]}
      opacity={0.2}
      variant="card"
      className="p-8"
    >
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-bold text-slate-900">Draft Feature Specification</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Subject to architectural board review and gatekeeper approval.
        </p>
      </div>
    </Watermark>
  ),
};
