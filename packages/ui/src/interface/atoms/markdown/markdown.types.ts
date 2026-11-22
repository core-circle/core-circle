import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { markdownContainerVariants } from '../../../components/atoms/markdown/markdown.styles';

export interface MarkdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof markdownContainerVariants> {
  /** Raw Markdown text content to parse and render */
  content: string;
  /** Whether to strip dangerous script tags and JavaScript schemes. Default: true */
  sanitize?: boolean;
}
