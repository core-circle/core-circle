import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { richTextVariants } from '../../../components/atoms/richtext/richtext.styles';

export type RichTextVariant =
  | 'default'
  | 'card'
  | 'bordered'
  | 'floating'
  | 'glassmorphic'
  | 'gradient'
  | 'filled'
  | 'minimal'
  | 'ghost'
  | 'accent'
  | 'dark';

export type RichTextSize = 'sm' | 'base' | 'lg';

export interface RichTextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof richTextVariants> {
  /**
   * The HTML content string to render safely with design system typography
   */
  content: string;
  /**
   * Visual theme variant of the rich text container
   * @default 'default'
   */
  variant?: RichTextVariant;
  /**
   * Typography scale size
   * @default 'base'
   */
  size?: RichTextSize;
}
