import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { diffViewerContainerVariants } from '../../../components/atoms/diff-viewer/diff-viewer.styles';

export type DiffChangeType = 'add' | 'delete' | 'normal';

export interface DiffLine {
  type: DiffChangeType;
  oldLineNumber?: number;
  newLineNumber?: number;
  content: string;
}

export interface DiffViewerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof diffViewerContainerVariants> {
  /** Original source code string */
  oldCode: string;
  /** Modified new source code string */
  newCode: string;
  /** Whether to render side-by-side split view or single column unified view. Default: true */
  splitView?: boolean;
  /** Callback when split view toggle changes */
  onSplitViewChange?: (split: boolean) => void;
  /** Programming language or file tag */
  language?: string;
  /** Optional file name header e.g. 'auth.service.ts' */
  filename?: string;
  /** Whether to render gutter line numbers. Default: true */
  showLineNumbers?: boolean;
  /** Maximum viewport height before scrolling */
  maxHeight?: number | string;
}
