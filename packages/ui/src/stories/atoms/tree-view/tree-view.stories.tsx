import type { Meta, StoryObj } from '@storybook/react';
import { TreeView } from '../../../components/atoms/tree-view/tree-view';

const sampleProjectTree = [
  {
    id: 'src',
    label: 'src',
    defaultExpanded: true,
    children: [
      {
        id: 'components',
        label: 'components',
        defaultExpanded: true,
        children: [
          { id: 'button.tsx', label: 'Button.tsx' },
          { id: 'card.tsx', label: 'Card.tsx' },
          { id: 'badge.tsx', label: 'Badge.tsx' },
        ],
      },
      {
        id: 'hooks',
        label: 'hooks',
        children: [
          { id: 'useToast.ts', label: 'useToast.ts' },
          { id: 'useTheme.ts', label: 'useTheme.ts' },
        ],
      },
      { id: 'index.ts', label: 'index.ts' },
    ],
  },
  { id: 'package.json', label: 'package.json' },
  { id: 'tsconfig.json', label: 'tsconfig.json' },
];

const meta: Meta<typeof TreeView> = {
  title: 'Atoms/TreeView',
  component: TreeView,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['default', 'card', 'bordered'] },
    showGuideLines: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TreeView>;

export const Default: Story = {
  args: {
    data: sampleProjectTree,
    variant: 'card',
    showGuideLines: true,
  },
};

export const HighContrastBordered: Story = {
  args: {
    data: sampleProjectTree,
    variant: 'bordered',
    showGuideLines: true,
  },
};
