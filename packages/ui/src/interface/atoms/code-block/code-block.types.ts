import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { codeBlockContainerVariants } from '../../../components/atoms/code-block/code-block.styles';

export interface CodeBlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof codeBlockContainerVariants> {
  /** Raw code string to format and render */
  code: string;
  /** Programming language identifier, e.g. 'typescript', 'tsx', 'javascript', 'bash', 'json' */
  language?: string;
  /** Optional file name or title displayed in header tab */
  filename?: string;
  /** Whether to show gutter line numbers. Default: true */
  showLineNumbers?: boolean;
  /** Array of 1-based line numbers to visually highlight */
  highlightLines?: number[];
  /** Whether to render a copy-to-clipboard button. Default: true */
  copyable?: boolean;
  /** Maximum container height with vertical scrolling */
  maxHeight?: number | string;
}
