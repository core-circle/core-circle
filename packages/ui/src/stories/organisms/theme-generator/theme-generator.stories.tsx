import type { Meta, StoryObj } from '@storybook/react';
import { ThemeGenerator } from '../../../components/organisms/theme-generator/theme-generator';

const meta: Meta<typeof ThemeGenerator> = {
  title: 'Organisms/ThemeGenerator',
  component: ThemeGenerator,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Interactive Theme Generator allowing external customers and multi-product lines to dynamically generate custom `[product].theme.css` stylesheets and Tailwind CSS v4 design tokens.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeGenerator>;

export const Default: Story = {
  args: {},
};

export const CustomBrandPreset: Story = {
  args: {
    initialConfig: {
      productName: 'CyberFlow',
      prefix: 'cyber',
      primaryColor: '#059669',
      neutralUndertone: 'zinc',
      radius: 'subtle',
    },
  },
};

export const LuxuryPurpleBrand: Story = {
  args: {
    initialConfig: {
      productName: 'AuraPay',
      prefix: 'aura',
      primaryColor: '#7c3aed',
      neutralUndertone: 'brand-tinted',
      radius: 'pill',
    },
  },
};
