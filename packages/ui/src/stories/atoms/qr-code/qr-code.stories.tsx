import type { Meta, StoryObj } from '@storybook/react';
import { QRCode } from '../../../components/atoms/qr-code/qr-code';

const meta: Meta<typeof QRCode> = {
  title: 'Atoms/QRCode',
  component: QRCode,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'number' },
    color: { control: 'color' },
    bgColor: { control: 'color' },
    level: { control: 'radio', options: ['L', 'M', 'Q', 'H'] },
    variant: { control: 'radio', options: ['default', 'card', 'bordered'] },
    downloadable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof QRCode>;

export const Default: Story = {
  args: {
    value: 'https://corecircle.io',
    size: 180,
    caption: 'Scan to visit CoreCircle',
    helperText: 'Compatible with all iOS and Android camera apps',
    variant: 'card',
  },
};

export const BrandColorThemed: Story = {
  args: {
    value: 'https://corecircle.io/docs/tokens',
    size: 180,
    color: '#2563eb',
    bgColor: '#eff6ff',
    caption: 'Documentation Portal',
    variant: 'card',
  },
};

export const HighContrastDark: Story = {
  args: {
    value: 'https://github.com/core-circle',
    size: 180,
    color: '#0f172a',
    bgColor: '#f8fafc',
    caption: 'Official GitHub Repository',
    variant: 'bordered',
  },
};

export const WithInteractiveActions: Story = {
  args: {
    value: 'WIFI:S:OfficeGuest;T:WPA;P:CoreCircleSecure2026;;',
    size: 200,
    caption: 'Guest Wi-Fi Access',
    helperText: 'Scan to automatically authenticate network',
    variant: 'card',
    downloadable: true,
  },
};
