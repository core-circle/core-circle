import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { treeViewContainerVariants } from '../../../components/atoms/tree-view/tree-view.styles';

export interface TreeNode {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: TreeNode[];
  disabled?: boolean;
  defaultExpanded?: boolean;
}

export interface TreeViewProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>,
    VariantProps<typeof treeViewContainerVariants> {
  /** Hierarchical nested tree data nodes */
  data: TreeNode[];
  /** Controlled currently selected node ID */
  selectedId?: string;
  /** Callback fired when a node item is clicked / selected */
  onSelect?: (node: TreeNode) => void;
  /** Whether to render vertical guide indent lines. Default: true */
  showGuideLines?: boolean;
}
