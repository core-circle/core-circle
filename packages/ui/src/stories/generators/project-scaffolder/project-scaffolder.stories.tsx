import type { Meta, StoryObj } from '@storybook/react';
import { ProjectScaffolder } from '../../../components/generators/project-scaffolder/project-scaffolder';

const meta: Meta<typeof ProjectScaffolder> = {
  title: 'Generators/ProjectScaffolder',
  component: ProjectScaffolder,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Interactive Project Scaffolder allowing developers to configure and download ready-to-run Next.js 15 and React Vite boilerplates preconfigured with CoreCircle UI, Design Tokens, and Tailwind CSS v4.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectScaffolder>;

export const Default: Story = {
  args: {},
};

export const NextJSSaaS: Story = {
  args: {
    initialConfig: {
      projectName: 'saas-starter',
      framework: 'nextjs',
      brandName: 'CloudNova',
      cssPrefix: 'nova',
      primaryColor: '#6366f1',
      neutralUndertone: 'slate',
      radius: 'rounded',
      packageManager: 'pnpm',
    },
  },
};

export const ReactViteFintech: Story = {
  args: {
    initialConfig: {
      projectName: 'fintech-app',
      framework: 'react-vite',
      brandName: 'AuraPay',
      cssPrefix: 'aura',
      primaryColor: '#059669',
      neutralUndertone: 'zinc',
      radius: 'pill',
      packageManager: 'bun',
    },
  },
};
